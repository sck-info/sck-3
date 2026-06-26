"use client";

import { useEffect, useState, useRef } from "react";
import type { Metric } from "@/types/metric";

export default function MetricCard({ metric }: { metric: Metric }) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const end = metric.value;
          
          const getDuration = (val: number) => {
            if (val <= 2) return 500;
            if (val <= 15) return 700;
            if (val <= 100) return 1000;
            if (val <= 1000) return 1500;
            return 2000;
          };
          const duration = getDuration(end);
          const startTime = performance.now();

          let lastVal = start;
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const current = start + (end - start) * easeProgress;
            
            const nextVal = metric.isDecimal
              ? parseFloat(current.toFixed(1))
              : Math.floor(current);

            if (nextVal !== lastVal || progress === 1) {
              lastVal = nextVal;
              setDisplayValue(progress === 1 ? end : nextVal);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const parentSection = cardRef.current?.closest("section");
    if (parentSection) {
      observer.observe(parentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, [metric.value, metric.isDecimal, hasAnimated]);

  const formattedValue = metric.isDecimal
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <div
      ref={cardRef}
      className="flex w-64 shrink-0 flex-col items-center justify-center text-center gap-3 rounded-none border border-stone bg-paper p-8 sm:w-72 transition-all duration-300 hover:border-clay hover:shadow-md relative"
    >
      {/* Tiny corner design elements for a premium culture look */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-clay/35" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-clay/35" />

      <p className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        {formattedValue}
        <span className="font-serif italic font-light text-clay">{metric.suffix}</span>
      </p>
      <div className="w-8 h-[1px] bg-clay/30 my-1" />
      <p className="text-[10px] uppercase tracking-widest font-semibold text-ink-soft">
        {metric.label}
      </p>
    </div>
  );
}
