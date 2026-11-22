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
}

const TICK_MS = 45;
const OUTPUT_DELAY_TICKS = 6;
const LINE_GAP_TICKS = 4;
const IDLE_DELAY_TICKS = 6;

/** Pure schedule: every event is expressed as an absolute tick offset. */
function buildTimeline(lines: TerminalLine[]) {
  let cursor = 0;

  return lines.map((line) => {
    const commandStart = cursor;
    const commandLength = line.command.length;
    const outputAt = commandStart + commandLength + OUTPUT_DELAY_TICKS;
    cursor = outputAt + 1 + LINE_GAP_TICKS;

    return { commandStart, commandLength, outputAt };
  });
}

export function TerminalCard({ prompt, lines }: TerminalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  const timeline = buildTimeline(lines);
  const lastStep = timeline[timeline.length - 1];
  const idleAt = lastStep ? lastStep.outputAt + IDLE_DELAY_TICKS : 0;
  const finished = tick >= idleAt;

  // One ticker drives the whole timeline; it is removed as soon as the idle prompt appears.
  useEffect(() => {
    if (!inView || reduceMotion || finished) return;

    const interval = window.setInterval(() => setTick((value) => value + 1), TICK_MS);
    return () => window.clearInterval(interval);
  }, [inView, reduceMotion, finished]);

  const isComplete = reduceMotion || finished;

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
            const step = timeline[index];
            const started = reduceMotion || tick >= step.commandStart;
            const charCount = reduceMotion
              ? step.commandLength
              : Math.max(0, Math.min(step.commandLength, tick - step.commandStart));
            const outputVisible = reduceMotion || tick >= step.outputAt;
            const typing = !reduceMotion && started && !outputVisible;

            return (
              <div
                key={`${line.command}-${index}`}
                className={started ? undefined : "invisible"}
              >
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

          <div className={`flex gap-x-2 text-slate-100 ${isComplete ? "" : "invisible"}`}>
            <span className="shrink-0 text-green-400">{prompt}$</span>
            <span className="inline-block h-4 w-2 translate-y-0.5 bg-slate-100 motion-safe:animate-pulse" />
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
