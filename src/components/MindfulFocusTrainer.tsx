"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

type TabType = "dharana" | "naada" | "jyotisha";

const cosmicQuotes = [
  "When you align with the cosmic rhythm, obstacles dissolve and your path unfolds with ease.",
  "The stars do not force your destiny; they gently mirror your soul's blueprint of wisdom.",
  "Inner stillness is the center of your universe. Aligning with the center brings outer peace."
];

export default function MindfulFocusTrainer() {
  const [activeTab, setActiveTab] = useState<TabType>("dharana");

  const [waveSize, setWaveSize] = useState(1.0);
  const [waveDirection, setWaveDirection] = useState(1);
  const [waveGameState, setWaveGameState] = useState<"idle" | "playing" | "completed">("idle");
  const [waveStreak, setWaveStreak] = useState(0);
  const [waveFeedback, setWaveFeedback] = useState<"hit" | "miss" | null>(null);

  const [activeChime, setActiveChime] = useState<number | null>(null);
  const [bowlStriking, setBowlStriking] = useState(false);

  const [moonAngle, setMoonAngle] = useState(45);
  const [jupiterAngle, setJupiterAngle] = useState(290);
  const [cosmicAligned, setCosmicAligned] = useState(false);
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);

  const waveDirRef = useRef(1);
  const waveSizeRef = useRef(1.0);

  useEffect(() => {
    waveSizeRef.current = waveSize;
  }, [waveSize]);

  useEffect(() => {
    if (waveGameState !== "playing") return;
    let frameId: number;

    const loop = () => {
      setWaveSize((prev) => {
        let next = prev + waveDirRef.current * 0.015;
        if (next >= 1.5) {
          waveDirRef.current = -1;
          return 1.5;
        }
        if (next <= 0.5) {
          waveDirRef.current = 1;
          return 0.5;
        }
        return next;
      });
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [waveGameState]);

  const playAudio = (type: "wave" | "chime" | "align" | "fail", value: number) => {
    if (typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      if (type === "fail") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(130.81, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
        setTimeout(() => ctx.close().catch(() => {}), 1000);
      } else if (type === "align") {
        const frequencies = [523.25, 659.25, 783.99, 1046.50];
        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1 * idx);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.0);
          osc.start();
          osc.stop(ctx.currentTime + 2.1);
        });
        setTimeout(() => ctx.close().catch(() => {}), 3000);
      } else if (type === "wave") {
        if (value === 3) {
          const frequencies = [261.63, 329.63, 392.00, 523.25];
          frequencies.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.2 + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.4);
            osc.start();
            osc.stop(ctx.currentTime + 2.5);
          });
          setTimeout(() => ctx.close().catch(() => {}), 4000);
        } else {
          const scale = [261.63, 329.63, 392.00];
          const freq = scale[value % scale.length];
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
          osc.start();
          osc.stop(ctx.currentTime + 0.85);
          setTimeout(() => ctx.close().catch(() => {}), 1500);
        }
      } else if (type === "chime") {
        const baseFreq = value;
        const overtones = [baseFreq, baseFreq * 2.0, baseFreq * 3.01, baseFreq * 4.4];
        const gains = [0.08, 0.04, 0.02, 0.01];

        overtones.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();
          osc.connect(gainNode);
          gainNode.connect(ctx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gainNode.gain.setValueAtTime(0.0, ctx.currentTime);
          gainNode.gain.linearRampToValueAtTime(gains[idx], ctx.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2 - idx * 0.3);
          osc.start();
          osc.stop(ctx.currentTime + 2.3);
        });
        setTimeout(() => ctx.close().catch(() => {}), 3000);
      }
    } catch {}
  };

  const handleWaveAlign = () => {
    if (waveGameState === "completed") return;

    if (waveGameState === "idle") {
      setWaveGameState("playing");
      setWaveStreak(0);
      setWaveFeedback(null);
      setWaveSize(1.0);
      waveDirRef.current = 1;
      playAudio("wave", 0);
      return;
    }

    const currentSize = waveSizeRef.current;
    const isAligned = currentSize >= 0.85 && currentSize <= 1.15;

    if (isAligned) {
      setWaveFeedback("hit");
      const nextStreak = waveStreak + 1;
      setWaveStreak(nextStreak);
      playAudio("wave", nextStreak);

      if (nextStreak === 3) {
        setWaveGameState("completed");
      }
    } else {
      setWaveFeedback("miss");
      setWaveStreak(Math.max(0, waveStreak - 1));
      playAudio("fail", 0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== "dharana") return;
      if (e.code === "Space") {
        e.preventDefault();
        handleWaveAlign();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [waveGameState, waveStreak, activeTab]);

  const strikeChime = (index: number) => {
    const chimeFrequencies = [523.25, 587.33, 659.25, 783.99];
    setActiveChime(index);
    playAudio("chime", chimeFrequencies[index]);
    setTimeout(() => setActiveChime(null), 300);
  };

  const strikeBowl = () => {
    setBowlStriking(true);
    playAudio("chime", 136.1);
    setTimeout(() => setBowlStriking(false), 500);
  };

  useEffect(() => {
    const isMoonAligned = moonAngle >= 170 && moonAngle <= 190;
    const isJupiterAligned = jupiterAngle >= 170 && jupiterAngle <= 190;
    
    if (isMoonAligned && isJupiterAligned) {
      if (!cosmicAligned) {
        setCosmicAligned(true);
        playAudio("align", 0);
        setCurrentQuoteIdx((prev) => (prev + 1) % cosmicQuotes.length);
      }
    } else {
      setCosmicAligned(false);
    }
  }, [moonAngle, jupiterAngle]);

  return (
    <section id="focus-trainer" className="border-t border-stone py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-light/60 border border-stone rounded-none mb-4">
            <span className="text-clay text-[10px]" aria-hidden="true">&#10047;</span>
            <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-moss">
              MINDFUL WIDGETS &bull; SADHANA
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Interactive <span className="font-serif italic font-normal text-clay">Mindfulness</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            Somatic alignment, music frequencies, and cosmic loops. Take a peaceful break to align and center yourself with our offerings.
          </p>
        </div>

        <div className="mt-12 flex justify-center border-b border-stone max-w-md mx-auto">
          {(["dharana", "naada", "jyotisha"] as TabType[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setWaveGameState("idle");
                setWaveStreak(0);
                setWaveFeedback(null);
              }}
              className={`flex-1 py-3 text-[11px] uppercase tracking-widest font-semibold cursor-pointer relative transition-all duration-300 ${
                activeTab === tab ? "text-clay font-bold" : "text-ink-soft hover:text-ink"
              }`}
            >
              {tab === "dharana" && "Dharana (Wave)"}
              {tab === "naada" && "Naada (Sound)"}
              {tab === "jyotisha" && "Jyotisha (Cosmic)"}
              
              {activeTab === tab && (
                <motion.div
                  layoutId="activeInteractionTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-clay"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto min-h-[380px]">
          
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              
              {activeTab === "dharana" && (
                <motion.div
                  key="dharana-graphic"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-64 h-64 flex items-center justify-center bg-stone-light/10 border border-stone/30 rounded-full">
                    <div className="absolute w-44 h-44 border-2 border-dashed border-clay/30 rounded-full" />
                    <div className="absolute w-36 h-36 border border-gold/40 rounded-full" />
                    <motion.div
                      animate={{ scale: waveSize }}
                      transition={{ duration: 0.02, ease: "linear" }}
                      className={`absolute w-36 h-36 rounded-full border transition-colors duration-200 ${
                        waveFeedback === "hit"
                          ? "bg-gold/25 border-gold/50"
                          : waveFeedback === "miss"
                          ? "bg-stone-light/35 border-stone/40"
                          : "bg-clay/10 border-clay/35"
                      }`}
                    />
                    <div className="absolute w-3.5 h-3.5 bg-ink rounded-full border border-paper shadow-sm" />
                  </div>
                  <div className="mt-6 flex gap-2.5">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                          waveStreak >= step ? "bg-clay border-clay scale-110 shadow-sm" : "bg-transparent border-stone"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "naada" && (
                <motion.div
                  key="naada-graphic"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-center gap-12"
                >
                  <div className="relative flex gap-6">
                    {[0, 1, 2, 3].map((chimeIdx) => (
                      <div key={chimeIdx} className="flex flex-col items-center gap-0">
                        <div className="w-[1px] h-20 bg-stone/70" />
                        <motion.button
                          type="button"
                          onClick={() => strikeChime(chimeIdx)}
                          animate={{
                            rotate: activeChime === chimeIdx ? [0, 8, -6, 4, -2, 0] : 0
                          }}
                          transition={{ duration: 0.45 }}
                          className={`w-4 h-24 rounded-sm border cursor-pointer ${
                            activeChime === chimeIdx
                              ? "bg-clay border-clay shadow-sm"
                              : "bg-paper border-stone hover:border-clay/40"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center">
                    <motion.button
                      type="button"
                      onClick={strikeBowl}
                      animate={{
                        scale: bowlStriking ? [1, 1.08, 1] : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-32 h-20 border rounded-b-full cursor-pointer relative ${
                        bowlStriking
                          ? "bg-gold/25 border-gold shadow-md"
                          : "bg-paper border-stone hover:border-gold"
                      }`}
                    >
                      <div className="absolute inset-x-2 top-0 h-[1.5px] bg-stone/30" />
                      <span className="text-[10px] font-mono tracking-widest text-ink-soft uppercase absolute bottom-4 inset-x-0 text-center select-none">
                        Bowl
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {activeTab === "jyotisha" && (
                <motion.div
                  key="jyotisha-graphic"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-64 h-64 flex items-center justify-center bg-stone-light/10 border border-stone/30 rounded-full"
                >
                  <div className="absolute w-48 h-48 border border-stone-light rounded-full" />
                  <div className="absolute w-32 h-32 border border-stone-light rounded-full" />
                  
                  <div className="absolute top-0 w-[1.5px] h-64 bg-dashed border-l border-stone-light/40" />
                  <div className="absolute w-64 h-[1.5px] bg-dashed border-t border-stone-light/40" />

                  <div className="absolute w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-gold" />
                  </div>

                  <div className="absolute top-[8px] right-[8px] w-4 h-4 rounded-full border border-clay/60 flex items-center justify-center text-[7px] text-clay font-bold bg-paper select-none">
                    ॐ
                  </div>

                  <motion.div
                    style={{ rotate: moonAngle }}
                    className="absolute w-48 h-48 pointer-events-none"
                  >
                    <div className="absolute top-[-7px] left-[calc(50%-7px)] w-3.5 h-3.5 rounded-full bg-stone shadow-sm" />
                  </motion.div>

                  <motion.div
                    style={{ rotate: jupiterAngle }}
                    className="absolute w-32 h-32 pointer-events-none"
                  >
                    <div className="absolute top-[-9px] left-[calc(50%-9px)] w-4.5 h-4.5 rounded-full bg-clay shadow-sm" />
                  </motion.div>

                  {cosmicAligned && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1.15 }}
                      className="absolute w-56 h-56 border-2 border-gold rounded-full pointer-events-none"
                    />
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          <div className="lg:col-span-6 flex flex-col items-stretch justify-center p-8 bg-paper border border-stone min-h-[260px] relative">
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-light" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-light" />

            <AnimatePresence mode="wait">
              
              {activeTab === "dharana" && (
                <motion.div
                  key="dharana-controls"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="font-display text-2xl font-light text-ink">
                    Dharana: Breathing Wave
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed font-light">
                    Sama Vritti (Equal Breathing). Press the button or the <kbd className="px-1.5 py-0.5 border border-stone bg-stone-light/40 rounded text-[10px] font-mono font-bold">Spacebar</kbd> when the expanding wave enters the golden stillness circle.
                  </p>
                  
                  {waveGameState === "idle" && (
                    <button
                      type="button"
                      onClick={handleWaveAlign}
                      className="mt-2 bg-ink text-paper px-6 py-3.5 text-[11px] uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-colors w-full cursor-pointer"
                    >
                      Start Alignment
                    </button>
                  )}

                  {waveGameState === "playing" && (
                    <button
                      type="button"
                      onClick={handleWaveAlign}
                      className="mt-2 bg-clay text-paper px-6 py-3.5 text-[11px] uppercase tracking-widest font-semibold hover:bg-[#c25027] transition-colors w-full cursor-pointer"
                    >
                      Align Mind (Streak: {waveStreak} / 3)
                    </button>
                  )}

                  {waveGameState === "completed" && (
                    <div className="flex flex-col gap-3 mt-2 animate-in fade-in duration-300">
                      <p className="text-xs text-moss font-semibold">
                        Stillness Achieved! Your mind is deeply centered. Explore our sound or CST offerings to anchor this clarity.
                      </p>
                      <div className="flex gap-2">
                        <a
                          href="#sessions"
                          className="flex-1 text-center bg-ink text-paper px-4 py-3 text-[10px] uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-colors"
                        >
                          Explore Offerings
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setWaveGameState("idle");
                            setWaveStreak(0);
                            setWaveFeedback(null);
                          }}
                          className="flex-1 text-center bg-transparent text-ink border border-stone px-4 py-3 text-[10px] uppercase tracking-widest font-semibold hover:bg-stone-light transition-colors cursor-pointer"
                        >
                          Play Again
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "naada" && (
                <motion.div
                  key="naada-controls"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="font-display text-2xl font-light text-ink">
                    Naada: Healing Frequencies
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed font-light">
                    Interact with sound resonance. Click or tap the brass bowl to strike a grounding frequency. Hover or click the chimes to play harmonious ascending tones.
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 mt-2">
                    <button
                      type="button"
                      onClick={strikeBowl}
                      className="bg-ink text-paper px-4 py-3.5 text-[10px] uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      Strike Bowl
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        strikeChime(0);
                        setTimeout(() => strikeChime(1), 150);
                        setTimeout(() => strikeChime(2), 300);
                        setTimeout(() => strikeChime(3), 450);
                      }}
                      className="bg-transparent text-ink border border-stone px-4 py-3.5 text-[10px] uppercase tracking-widest font-semibold hover:bg-stone-light transition-colors cursor-pointer"
                    >
                      Wind Chimes
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "jyotisha" && (
                <motion.div
                  key="jyotisha-controls"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="font-display text-2xl font-light text-ink">
                    Jyotisha: Planetary Orbit
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed font-light">
                    Drag the orbital sliders to align the Moon (outer) and Jupiter (inner) at the top golden portal (180&deg;) to unlock planetary alignment readings.
                  </p>

                  <div className="flex flex-col gap-3 mt-2 w-full">
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between text-[9px] font-mono text-ink-soft uppercase tracking-wider">
                        <span>Moon Orbit</span>
                        <span>{moonAngle}&deg;</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={moonAngle}
                        onChange={(e) => setMoonAngle(parseInt(e.target.value))}
                        className="w-full accent-clay cursor-pointer h-1 bg-stone-light rounded-lg appearance-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between text-[9px] font-mono text-ink-soft uppercase tracking-wider">
                        <span>Jupiter Orbit</span>
                        <span>{jupiterAngle}&deg;</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={jupiterAngle}
                        onChange={(e) => setJupiterAngle(parseInt(e.target.value))}
                        className="w-full accent-clay cursor-pointer h-1 bg-stone-light rounded-lg appearance-none"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {cosmicAligned && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 border-l-2 border-gold pl-3 py-1 font-serif italic text-xs leading-relaxed text-clay font-medium"
                      >
                        {cosmicQuotes[currentQuoteIdx]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}
