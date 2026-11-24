"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface TerminalLine {
  command: string;
  output: string;
}

interface TerminalCardProps {
  prompt: string;
  lines: TerminalLine[];
  /** Time to type all the commands. */
  durationMs?: number;
  /** How long the finished terminal stays before `clear` is typed. */
  holdMs?: number;
  /** Time to type the `clear` command. */
  clearTypeMs?: number;
  /** How long the screen stays empty before typing restarts. */
  clearedMs?: number;
  enterPauseMs?: number;
}

const FRAME_MS = 40;
const OUTPUT_DELAY_UNITS = 6;
const LINE_GAP_UNITS = 4;
const IDLE_DELAY_UNITS = 6;
const CLEAR_COMMAND = "clear";

/** Pure schedule: every event is an absolute offset in "units" (one unit = one typed character). */
function buildTimeline(lines: TerminalLine[]) {
  let cursor = 0;

  const steps = lines.map((line) => {
    const commandStart = cursor;
    const commandLength = line.command.length;
    const outputAt = commandStart + commandLength + OUTPUT_DELAY_UNITS;
    cursor = outputAt + 1 + LINE_GAP_UNITS;

    return { commandStart, commandLength, outputAt };
  });

  const last = steps[steps.length - 1];
  const idleAt = last ? last.outputAt + IDLE_DELAY_UNITS : 0;

  return { steps, idleAt };
}

export function TerminalCard({
  prompt,
  lines,
  durationMs = 5000,
  holdMs = 7000,
  clearTypeMs = 3000,
  enterPauseMs = 300,
  clearedMs = 500,
}: TerminalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { margin: "-60px" }); // no `once`: pauses off screen
  const reduceMotion = useReducedMotion();
  const [elapsed, setElapsed] = useState(0); // ms inside the current cycle
  const elapsedRef = useRef(0);

  const clearStartMs = durationMs + holdMs;
  const enterAtMs = clearStartMs + clearTypeMs;
  const clearedStartMs = enterAtMs + enterPauseMs;
  const cycleMs = clearedStartMs + clearedMs;

  useEffect(() => {
    if (!inView || reduceMotion) return;

    // Resume from where we paused, so scrolling away does not restart the loop.
    const startedAt = performance.now() - elapsedRef.current;
    const interval = window.setInterval(() => {
      const value = (performance.now() - startedAt) % cycleMs;
      elapsedRef.current = value;
      setElapsed(value);
    }, FRAME_MS);

    return () => window.clearInterval(interval);
  }, [inView, reduceMotion, cycleMs]);

  const { steps, idleAt } = buildTimeline(lines);

  const typingClear = !reduceMotion && elapsed >= clearStartMs && elapsed < clearedStartMs;
  const cleared = !reduceMotion && elapsed >= clearedStartMs;
  const progress = Math.min(elapsed / durationMs, 1);
  const isComplete = Boolean(reduceMotion) || (!cleared && progress >= 1);
  // While cleared, unit stays below every start time, so no line is shown.
  const unit = cleared ? -1 : isComplete ? idleAt : progress * idleAt;

  const clearChars = typingClear
    ? Math.min(
        CLEAR_COMMAND.length,
        Math.floor(((elapsed - clearStartMs) / clearTypeMs) * CLEAR_COMMAND.length) + 1,
      )
    : 0;

  const showIdlePrompt = isComplete || cleared;

  return (
    <div
      ref={cardRef}
      role="group"
      aria-label="Profile summary"
      className="overflow-hidden rounded-card border border-border bg-foreground shadow-card"
    >
      <div aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-green-400" />
          <span className="ml-3 truncate font-mono text-xs text-slate-400">{prompt}</span>
        </div>

        <div className="space-y-4 p-5 font-mono text-sm leading-relaxed">
          {lines.map((line, index) => {
            const step = steps[index];
            const started = isComplete || unit >= step.commandStart;
            const charCount = isComplete
              ? step.commandLength
              : Math.max(0, Math.min(step.commandLength, Math.floor(unit - step.commandStart)));
            const outputVisible = isComplete || unit >= step.outputAt;
            const typing = !isComplete && started && !outputVisible;

            return (
              <div key={`${line.command}-${index}`} className={started ? undefined : "invisible"}>
                <div className="flex gap-x-2 text-slate-100">
                  <span className="shrink-0 text-green-400">{prompt}$</span>
                  {/* The hidden copy reserves the final width so typing cannot shift layout. */}
                  <span className="relative inline-block">
                    <span className="invisible">{line.command}</span>
                    <span className="absolute left-0 top-0">
                      {line.command.slice(0, charCount)}
                      {typing && (
                        <span className="inline-block h-4 w-2 translate-y-0.5 bg-slate-100" />
                      )}
                    </span>
                  </span>
                </div>
                <div
                  className={`mt-1 break-words text-slate-300 ${outputVisible ? "" : "invisible"}`}
                >
                  {line.output}
                </div>
              </div>
            );
          })}

          {/* Idle prompt: shows `clear` being typed, and stays alone after the wipe. */}
          <div className={`flex gap-x-2 text-slate-100 ${showIdlePrompt ? "" : "invisible"}`}>
            <span className="shrink-0 text-green-400">{prompt}$</span>
            <span>
              {CLEAR_COMMAND.slice(0, clearChars)}
              <span className="inline-block h-4 w-2 translate-y-0.5 bg-slate-100 motion-safe:animate-pulse" />
            </span>
          </div>
        </div>
      </div>

      <dl className="sr-only">
        {lines.map((line, index) => (
          <div key={`${line.command}-${index}`}>
            <dt>{`${prompt}$ ${line.command}`}</dt>
            <dd>{line.output}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}