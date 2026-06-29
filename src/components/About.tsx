import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";
import { Award } from "lucide-react";

const pathSteps = [
  {
    title: "Life Skills Facilitator & Breath Expert",
    detail: "Young & Dynamic International Faculty of the Art of Living with 13+ years of global service.",
  },
  {
    title: "Diploma + Double PG in Biodynamic CST",
    detail: "Post Graduate Specialization in Bio Dynamic Cranio Sacral Therapy and nervous system regulation.",
  },
  {
    title: "NLP Master Practitioner & Research Astrologer",
    detail: "Integrating subconscious Neuro-Linguistic programming with ancient Vedic chart readings.",
  },
  {
    title: "Advanced Rakheno & Music Therapist",
    detail: "Combining traditional Japanese sole-pressure bodywork with acoustical sound frequency healing.",
  },
  {
    title: "S-VYASA Certified Music Therapist & Professional Singer",
    detail: "Certified practitioner and vocalist with 100+ students taught in Carnatic and light music.",
  },
  {
    title: "Corporate Wellness Leader & Engineer",
    detail: "Trained 30,000+ IT professionals across global leaders like Infosys, IBM, Microsoft, Google, Cognizant, TCS & Mylan.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden"
    >
      <HangingLotus align="left" />
      <HangingLotus align="right" />

      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />

      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-moss uppercase bg-stone-light/60 px-4 py-1.5 border border-stone inline-flex items-center gap-2">
            JEEVANA YATRA &bull; BIOGRAPHICAL NARRATIVE
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            Sharath Chandra <span className="font-serif italic font-normal text-clay">Kancherla</span>
          </h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-base text-ink-soft leading-relaxed font-light text-center">
            Sharath Chandra Kancherla is a Young &amp; Dynamic International Faculty of the Art of Living — an engineer turned healer, professional singer, and holistic wellness coach with 13+ years of experience. He holds a Diploma and double Post Graduate in Bio Dynamic Cranio Sacral Therapy, is an NLP Master Practitioner &amp; Research Astrologer, Advanced Rakheno &amp; Music Therapist, and S-VYASA Certified Music Therapist. He has trained 30,000+ IT employees from organisations like Infosys, IBM, Microsoft, Google, Cognizant, TCS &amp; Mylan, and has taught 100+ students in Carnatic and light music. He has touched 1.5 lakh+ lives across 10+ countries and 8 states in India.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-clay" />
              Path of Service
            </h3>

            <div className="border border-ink p-8 sm:p-10 bg-paper relative shadow-sm flex flex-col gap-8">
              <div className="absolute top-0 right-0 bg-ink text-paper text-[9px] uppercase tracking-widest font-bold px-3.5 py-1">
                Foundations
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ink mb-3">
                  Our Vision
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-ink-soft font-light">
                  <span className="bg-gold/25 text-ink font-semibold px-1 rounded-sm">To inspire and uplift one billion lives</span> through healing,
                  wisdom, music, and conscious living—nurturing a world that
                  lives as one global family.
                </p>
              </div>

              <div className="border-t border-stone pt-8">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ink mb-3">
                  Our Mission
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-ink-soft font-light">
                  To empower individuals with practical tools for holistic
                  well-being <span className="bg-gold/25 text-ink font-semibold px-1 rounded-sm">through meditation, yoga, breathwork, music, education, and timeless wisdom</span>, enabling them to live
                  healthier, happier, and more purposeful lives.
                </p>
              </div>
            </div>

            <div className="border border-stone p-6 bg-stone-light/10 text-center relative mt-2">
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay/40" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay/40" />
              <p className="font-hindi text-ink text-base sm:text-lg">
                &ldquo;श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः&rdquo;
              </p>
              <p className="text-xs font-sans tracking-wide text-ink-soft/90 mt-1.5 uppercase font-semibold">
                The dedicated seeker acquires true wisdom.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <Award className="h-4 w-4 text-clay" />
              Credentials &amp; Expertise
            </h3>

            <div className="relative border-l-2 border-stone pl-8 ml-2 flex flex-col gap-8 py-2">
              {pathSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[41px] top-1 flex items-center justify-center w-5 h-5 bg-paper border border-clay rounded-full">
                    <span className="w-2 h-2 bg-clay rounded-full" />
                  </span>

                  <h4 className="text-base font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-soft font-light mt-1.5">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-stone pt-12 flex flex-col items-center">
          <div className="border border-stone/50 bg-stone-light/10 p-8 sm:p-10 text-center max-w-2xl mx-auto rounded-none relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-4 text-clay">
              <span className="text-sm select-none">&#10047;</span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-soft">
              Guided Legacy
            </span>
            <p className="mt-3 font-display text-xl sm:text-2xl font-light text-ink leading-relaxed">
              &ldquo;My work and life find their path in the grace, guidance and blessings of{" "}
              <a
                href="https://gurudev.artofliving.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic font-normal text-clay hover:underline decoration-clay transition-all"
              >
                Gurudev Sri Sri Ravi Shankar
              </a>
              .&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
