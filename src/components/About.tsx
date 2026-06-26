import Container from "@/components/ui/Container";

const credentials = [
  "Life skills Facilitator & Breath Expert",
  "Diploma + double PG in Biodynamic CranioSacral Therapy",
  "Advanced Rakkenho & Music Therapist",
  "S-VYASA Certified Music Therapist",
  "NLP Master Practitioner & Research Astrologer",
  "Professional Singer & Vocalist",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden"
    >
      {/* Visual background mandala element (Right side) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-clay/5 flex items-center justify-center opacity-40 select-none pointer-events-none translate-x-1/2">
        <div className="w-80 h-80 rounded-full border border-dashed border-gold/5 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-clay/5" />
        </div>
      </div>

      <Container>
        {/* Row 1: Biography and Vision & Mission */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-clay" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-soft">
                Biography
              </span>
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              A practice built on{" "}
              <span className="font-serif italic font-normal text-clay">
                deep listening
              </span>{" "}
              and timeless wisdom.
            </h2>

            <p className="mt-8 text-sm leading-relaxed text-ink-soft font-light">
              As a Holistic Wellness and Mind Coach, I have dedicated{" "}
              <span className="highlight-marker">more than a decade</span> to
              helping individuals restore physical health, find emotional
              balance and resilience in spirit. Having touched{" "}
              <span className="highlight-marker">
                more than 1.5 lakh lives
              </span>{" "}
              across <span className="highlight-marker">5+ countries</span>{" "}
              and <span className="highlight-marker">8+ states in India</span>
              , my work integrates the restorative power of sound, hands-on
              biodynamic touch, and cosmic alignments to bring profound peace.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft font-light">
              I have also trained{" "}
              <span className="highlight-marker">
                30,000+ corporate professionals
              </span>{" "}
              at top-tier organizations—including Google, Microsoft, Infosys,
              IBM, Cognizant, TCS, and BIDCO Africa—equipping them with
              practical tools for stress management, focus, and conscious
              living.
            </p>
          </div>

          {/* Vision/Mission Column */}
          <div className="lg:col-span-5">
            {/* Vision and Mission Frame */}
            <div className="border border-clay/60 p-8 bg-stone-light/30 relative">
              <div className="absolute top-0 right-0 bg-clay text-paper text-[8px] uppercase tracking-widest font-bold px-3 py-1">
                Foundations
              </div>

              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-moss mb-3">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft font-light">
                  To inspire and uplift one billion lives through healing,
                  wisdom, music, and conscious living—nurturing a world that
                  lives as one global family.
                </p>
              </div>

              <div className="border-t border-stone pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-moss mb-3">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft font-light">
                  To empower individuals with practical tools for holistic
                  well-being through meditation, yoga, breathwork, music,
                  education, and timeless wisdom, enabling them to live
                  healthier, happier, and more purposeful lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Credentials & Expertise */}
        <div className="mt-16 border border-stone bg-stone-light/35 p-8 sm:p-10 relative">
          <div className="absolute top-0 right-0 bg-stone text-ink text-[8px] uppercase tracking-widest font-bold px-3 py-1 border-l border-b border-stone/50">
            Expertise
          </div>
          
          {/* Subtle Corner Accents for Credentials Box */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-clay/40" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-clay/40" />

          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-6">
            Credentials &amp; Expertise
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {credentials.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3.5 text-xs sm:text-sm text-ink-soft leading-normal border-b border-stone/30 pb-3 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="text-clay font-mono font-bold text-[10px] sm:text-[11px] mt-0.5 select-none shrink-0">
                  [{String(idx + 1).padStart(2, "0")}]
                </span>
                <span className="font-light text-ink/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 3: My Inspiration */}
        <div className="mt-16 border-t border-stone pt-10 text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft">
            My Inspiration
          </span>
          <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-ink leading-relaxed">
            &ldquo;My work and life find their path in the grace, guidance and blessings of{" "}
            <a
              href="https://gurudev.artofliving.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-2xl sm:text-3xl hover:text-clay hover:underline decoration-clay transition-colors"
            >
              Gurudev Sri Sri Ravi Shankar
            </a>
            .&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}
