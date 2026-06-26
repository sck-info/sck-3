import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import HangingLotus from "@/components/ui/HangingLotus";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <section className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden">
      <HangingLotus align="left" />
      <HangingLotus align="right" />

      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />

      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-clay bg-stone/40 px-3.5 py-1.5 border border-stone">
            Our Metrics
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Over a Decade of <span className="font-serif italic font-normal text-clay">Healing Impact</span>
          </h2>
          <p className="mt-4 max-w-prose text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            A balanced overview of our progressive reach, corporate seminars, and dedicated therapeutic sessions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group border border-stone bg-stone-light/20 hover:bg-paper p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-clay hover:-translate-y-1 relative"
            >
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-clay/0 group-hover:border-clay/45 transition-colors" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-clay/0 group-hover:border-clay/45 transition-colors" />

              <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                <CountUp value={metric.value} isDecimal={metric.isDecimal} />
                <span className="font-serif italic font-light text-clay text-xl ml-0.5">
                  {metric.suffix}
                </span>
              </p>
              
              <div className="w-6 h-[1px] bg-stone group-hover:bg-clay/30 my-2.5 transition-colors" />
              
              <p className="text-[9px] uppercase tracking-wider font-semibold text-ink-soft font-poppins leading-normal max-w-[120px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
