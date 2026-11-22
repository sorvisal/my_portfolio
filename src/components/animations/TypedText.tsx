"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { hasPlayed, markPlayed } from "@/lib/typing-session";

interface TypedTextProps {
  text: string;
  durationMs?: number;
  className?: string;
}

const FRAME_MS = 40;

export function TypedText({ text, durationMs = 1200, className }: TypedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  const key = `text:${text}`;
  const alreadyPlayed = hasPlayed(key);
  const skip = Boolean(reduceMotion) || alreadyPlayed;

  useEffect(() => {
    if (!inView || skip) return;
    const startedAt = performance.now();
    const id = window.setInterval(() => {
      const next = Math.min((performance.now() - startedAt) / durationMs, 1);
      setProgress(next);
      if (next >= 1) {
        markPlayed(key);
        window.clearInterval(id);
      }
    }, FRAME_MS);
    return () => window.clearInterval(id);
  }, [inView, skip, durationMs, key]);

  const count = skip ? text.length : Math.floor(progress * text.length);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="invisible">{text.slice(count)}</span>
      </span>
    </span>
  );
}