"use client";

import { useEffect, useState, useRef } from "react";

export default function CountUp({
  value,
  isDecimal = false,
}: {
  value: number;
  isDecimal?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const end = value;
          const duration = end <= 2 ? 600 : end <= 20 ? 800 : 1500;
          const startTime = performance.now();

          let lastVal = start;
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = progress * (2 - progress);
            const current = start + (end - start) * easeProgress;
            
            const nextVal = isDecimal
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
      { threshold: 0.05 }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, [value, isDecimal, hasAnimated]);

  return (
    <span ref={ref}>
      {isDecimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}
    </span>
  );
}
