import Container from "@/components/ui/Container";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <section className="border-t border-stone py-20 sm:py-28 bg-paper overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-clay bg-stone/40 px-3.5 py-1.5 border border-stone">
            Our Impact
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Over a Decade of <span className="font-serif italic font-normal text-clay">Wellness &amp; Healing</span>
          </h2>
          <p className="mt-4 max-w-prose text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            A reflection of healing journeys, wisdom shared, and lives uplifted across borders.
          </p>
        </div>
      </Container>

      {/* Infinite Marquee Scroll Track */}
      <div className="relative mt-8 w-full overflow-hidden border-y border-stone py-8 bg-stone-light/20">
        <div className="animate-marquee-scroll flex gap-6 px-3">
          {/* First set */}
          {metrics.map((metric, idx) => (
            <MetricCard key={`${metric.id}-set1-${idx}`} metric={metric} />
          ))}
          {/* Second identical set for seamless looping */}
          {metrics.map((metric, idx) => (
            <MetricCard key={`${metric.id}-set2-${idx}`} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
