import { Session } from "@/types/session";

export const sessions: Session[] = [
  {
    id: "cst",
    name: "CranioSacral Therapy (CST)",
    description:
      "Gentle, non-invasive touch that supports nervous system regulation, deep relaxation, and the body’s natural healing process.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "therapy",
    duration: "45 - 60 min",
    format: "1-on-1",
    mode: "In-person",
    subDetails: "Designed for working professionals",
    additionalInfo:
      "CranioSacral Therapy works by releasing tensions deep in the body to relieve pain and dysfunction, improving whole-body health and performance. It is highly effective for stress relief, fatigue, headaches, and physical strain.",
  },
  {
    id: "rakkenho",
    name: "Rakkenho Therapy",
    description:
      "A Japanese holistic healing technique that uses gentle foot pressure and rhythmic bodywork to relieve stress, improve posture and circulation, ease muscular tension, and support overall physical and emotional well-being.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "therapy",
    duration: "30 - 60 min",
    format: "1-on-1",
    mode: "In-person",
    subDetails: "Level 1 (30 min) & Level 2 (1 hr) options",
    additionalInfo:
      "Rakkenho is a traditional Japanese discipline where the practitioner uses the soles of their feet to massage pressure points. This simulates blood circulation, stimulates the lymphatic system, activates the vagus nerve, and aligns the body.",
  },
  {
    id: "music-therapy",
    name: "Music Therapy",
    description:
      "The therapeutic use of music and sound frequencies to reduce stress, uplift the mind, and support emotional and physical wellness.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "therapy",
    duration: "30 - 45 min",
    format: "1-on-1",
    mode: "In-person or Online",
    additionalInfo:
      "Using vocalizations, instrumentation, listening exercises, and sound frequencies, this therapy helps open blocked emotions, balance nervous system activity, and establish mental clarity.",
  },
  {
    id: "vedic-astrology",
    name: "Vedic Astrology Reading",
    description:
      "Ancient Vedic wisdom offering guidance on life patterns, relationships, career direction, and personal growth through planetary chart analysis.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "consultation",
    duration: "30 - 60 min",
    format: "1-on-1",
    mode: "Online",
    subDetails: "Vedic chart & planetary period (dasha) study",
    additionalInfo:
      "Astrological consultation looking at planetary transits and natal placements. Helps map life cycles, discover soul purposes, and provide remedies for obstacles.",
  },
  {
    id: "palmistry",
    name: "Palmistry Consultation",
    description:
      "Detailed study of palm lines, mounts, and hand geometry to understand character traits, innate potential, and life trends.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "consultation",
    duration: "30 - 60 min",
    format: "1-on-1",
    mode: "In-person",
    subDetails: "Reading of active and passive palms",
    additionalInfo:
      "Analyze hand structures, mounts, lines (life, heart, head, fate), and fingerprints to unlock personality insights and provide directional guidance for life patterns.",
  },
  {
    id: "medical-astrology",
    name: "Medical Astrology Analysis",
    description:
      "Holistic astrological insights into physical health tendencies, energetic imbalances, and preventive well-being.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "consultation",
    duration: "30 - 60 min",
    format: "1-on-1",
    mode: "Online",
    subDetails: "Astrological health mapping & energy balance",
    additionalInfo:
      "Evaluates cosmic alignments to trace susceptibility in the physical body, helping identify biological stress points and suggesting natural/preventive remedies.",
  },
  {
    id: "prasna-hora",
    name: "Prasna Hora Consultation",
    description:
      "A question-based horary astrological method providing immediate, timely guidance on precise queries based on the moment the question is asked.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "consultation",
    duration: "30 - 60 min",
    format: "1-on-1",
    mode: "Online",
    subDetails: "Targeted answers for urgent questions",
    additionalInfo:
      "Does not require accurate birth timing. The chart is cast dynamically for the time and place where the query arises, revealing trends and answers for immediate decision-making.",
  },
  {
    id: "music-classes",
    name: "Music Classes (Carnatic & Light Music)",
    description:
      "Structured individual or group lessons focused on vocal development, swara accuracy, and musical appreciation.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "class",
    duration: "45 - 60 min per class",
    format: "1-on-1 & Group",
    mode: "In-person or Online",
    subDetails: "4 classes per month",
    additionalInfo:
      "Tailored for kids and adults, from absolute beginners to advanced levels. Learn vocal breathing techniques, swaras, ragas, and performance skills in classical Carnatic music or light devotional/folk songs.",
  },
  {
    id: "nlp",
    name: "Neuro-Linguistic Programming (NLP)", // Wait, NLP was NLP in sessions.ts! Let's check NLP name. It should be Neuro-Linguistic Programming (NLP)
    description:
      "A structured approach for enhancing communication, adjusting subconscious habits, and accelerating personal growth by aligning thoughts, language, and behavior.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "workshop",
    duration: "1 hr per session",
    format: "1-on-1",
    mode: "Online",
    subDetails: "1 to 21 sessions based on personal objectives",
    additionalInfo:
      "By understanding cognitive-linguistic programming, you learn tools to break limiting behaviors, clear mental blockages, build extreme confidence, and model success behavior patterns.",
  },
  {
    id: "holistic-lifestyle",
    name: "Holistic Lifestyle & Nutrition Course",
    description:
      "A transformative wellness program combining nutrition, conscious living habits, and evidence-based lifestyle changes to help cultivate health, vitality, and inner balance.",
    formUrl: "https://forms.gle/REPLACE_WITH_CST_FORM",
    category: "workshop",
    duration: "Curated timeline",
    format: "1-on-1 & Group",
    mode: "Online",
    subDetails: "Monthly curated coaching and check-ins",
    additionalInfo:
      "Integrates modern nutritional science with ancient wisdom. Focuses on gut health, circadian cycle resetting, breathwork integration, conscious food choices, and stress reduction for sustainable health improvements.",
  },
];
