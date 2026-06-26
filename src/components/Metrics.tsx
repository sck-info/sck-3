import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import { Globe, Users, Heart } from "lucide-react";

export default function Metrics() {
  return (
    <section className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden">
      
      {/* Decorative vertical divider line behind grid */}
      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />

      <Container>
        {/* Intro */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-clay bg-stone/40 px-3.5 py-1.5 border border-stone">
            Our Reach
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Pillars of Healing <span className="font-serif italic font-normal text-clay">Impact</span>
          </h2>
          <p className="mt-4 max-w-prose text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            A static reflection of credentials, healing journeys, and corporate training over the past decade.
          </p>
        </div>

        {/* 3-Column Redesigned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: Global Footprint */}
          <div className="border-culture bg-stone-light/20 p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="p-3 border border-stone w-fit bg-paper text-clay mb-6">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-moss mb-3">
                Global Footprint
              </h3>
              <p className="text-xs text-ink-soft font-light mb-8">
                Healing wisdom that spans multiple states in India and extends to international seekers.
              </p>
              
              {/* Giant Metric */}
              <div className="mb-8">
                <span className="font-display text-5xl font-light text-ink tracking-tight">
                  <CountUp value={13} />
                </span>
                <span className="font-serif italic text-3xl font-light text-clay ml-1">+</span>
                <p className="text-[10px] font-mono tracking-wider text-ink-soft uppercase mt-1">
                  Years of active coaching
                </p>
              </div>
            </div>

            {/* Sub metrics list */}
            <div className="border-t border-stone/50 pt-5 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">Countries reached</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={5} />+
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">States in India</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={8} />+
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Trust & Alignment */}
          <div className="border-culture bg-stone-light/20 p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="p-3 border border-stone w-fit bg-paper text-clay mb-6">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-moss mb-3">
                Community Trust
              </h3>
              <p className="text-xs text-ink-soft font-light mb-8">
                Empowering individuals at leading corporates, as well as classical music and vocal enthusiasts.
              </p>
              
              {/* Giant Metric */}
              <div className="mb-8">
                <span className="font-display text-5xl font-light text-ink tracking-tight">
                  <CountUp value={1.5} isDecimal={true} />
                </span>
                <span className="font-serif italic text-3xl font-light text-clay ml-1">Lakh+</span>
                <p className="text-[10px] font-mono tracking-wider text-ink-soft uppercase mt-1">
                  Seekers touched
                </p>
              </div>
            </div>

            {/* Sub metrics list */}
            <div className="border-t border-stone/50 pt-5 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">Corporates trained</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={30000} />+
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">Bhajan Jam sessions</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={1000} />+
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Clinical & Touch Therapy */}
          <div className="border-culture bg-stone-light/20 p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="p-3 border border-stone w-fit bg-paper text-clay mb-6">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-moss mb-3">
                Healing Touch
              </h3>
              <p className="text-xs text-ink-soft font-light mb-8">
                Restorative biodynamic treatments, foot work pressure, and dedicated clinical music therapy.
              </p>
              
              {/* Giant Metric */}
              <div className="mb-8">
                <span className="font-display text-5xl font-light text-ink tracking-tight">
                  <CountUp value={2000} />
                </span>
                <span className="font-serif italic text-3xl font-light text-clay ml-1">+</span>
                <p className="text-[10px] font-mono tracking-wider text-ink-soft uppercase mt-1">
                  CST Therapy sessions
                </p>
              </div>
            </div>

            {/* Sub metrics list */}
            <div className="border-t border-stone/50 pt-5 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">Rakkenho bodywork</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={250} />+
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-soft font-light">Sound therapies &amp; music students</span>
                <span className="font-mono font-bold text-ink">
                  <CountUp value={400} />+
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
