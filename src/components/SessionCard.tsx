"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Session } from "@/types/session";

type SessionCardProps = {
  session: Session;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

export default function SessionCard({
  session,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
}: SessionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `${session.id}-additional-info`;

  return (
    <div
      id={session.id}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex flex-col justify-between border bg-stone-light/10 p-6 sm:p-8 transition-all duration-500 ease-out h-full relative ${
        isHovered
          ? "border-clay -translate-y-2.5 shadow-lg z-20 scale-[1.02] bg-paper"
          : isAnyHovered
          ? "border-stone/40 opacity-40 blur-[0.5px] scale-[0.98]"
          : "border-stone bg-stone-light/10"
      }`}
    >
      {isHovered && (
        <>
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-clay" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-clay" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay" />
        </>
      )}

      <div>
        <div className="flex flex-wrap gap-1.5">
          {session.duration && (
            <span className="text-[9px] uppercase tracking-wider font-bold bg-stone text-ink px-2.5 py-0.5 rounded-full">
              {session.duration}
            </span>
          )}
          {session.mode && (
            <span className="text-[9px] uppercase tracking-wider font-bold border border-clay/40 text-clay px-2.5 py-0.5 rounded-full">
              {session.mode}
            </span>
          )}
          {session.format && (
            <span className="text-[9px] uppercase tracking-wider font-bold text-ink-soft bg-paper border border-stone px-2.5 py-0.5 rounded-full">
              {session.format}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-clay">
          {session.name}
        </h3>

        {session.subDetails && (
          <p className="mt-1 text-[11px] font-mono tracking-tight text-clay/80 uppercase font-semibold">
            {session.subDetails}
          </p>
        )}

        <p className="mt-3 text-xs leading-relaxed text-ink-soft font-light">
          {session.description}
        </p>

        {session.additionalInfo && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-ink hover:text-clay transition-colors cursor-pointer"
            >
              {expanded ? "Less Details" : "More Details"}
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${
                  expanded ? "rotate-180 text-clay" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                expanded
                  ? "grid-rows-[1fr] opacity-100 mt-2.5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="border-l-2 border-clay pl-3 text-xs leading-relaxed text-ink-soft font-light italic">
                  {session.additionalInfo}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
