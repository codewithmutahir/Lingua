import type { Lesson } from "@/types/learning";

type Unit3LessonTemplate = {
  order: number;
  title: string;
  description: string;
  imageKey: "palace" | "treasure" | "cafe";
};

const UNIT3_LESSON_TEMPLATES: Unit3LessonTemplate[] = [
  {
    order: 1,
    title: "Greetings & Introductions",
    description: "Meet people and start conversations with confidence.",
    imageKey: "palace",
  },
  {
    order: 2,
    title: "Daily Life",
    description: "Talk about routines, time, and everyday activities.",
    imageKey: "treasure",
  },
  {
    order: 3,
    title: "At the Café",
    description: "Order drinks and snacks at a local café.",
    imageKey: "cafe",
  },
  {
    order: 4,
    title: "Travel & Directions",
    description: "Ask for directions and navigate a new city.",
    imageKey: "palace",
  },
  {
    order: 5,
    title: "Shopping",
    description: "Buy items and ask about prices in shops.",
    imageKey: "treasure",
  },
  {
    order: 6,
    title: "Family & Friends",
    description: "Describe the people closest to you.",
    imageKey: "palace",
  },
];

const LANGUAGE_UNIT3_TERMS: Record<
  string,
  { term: string; translation: string; phrase: string; phraseTranslation: string }
> = {
  spanish: {
    term: "Un café, por favor",
    translation: "A coffee, please",
    phrase: "¿Cuánto cuesta?",
    phraseTranslation: "How much does it cost?",
  },
  french: {
    term: "Un café, s'il vous plaît",
    translation: "A coffee, please",
    phrase: "Où est la gare?",
    phraseTranslation: "Where is the train station?",
  },
  japanese: {
    term: "コーヒーをください",
    translation: "A coffee, please",
    phrase: "いくらですか？",
    phraseTranslation: "How much is it?",
  },
  korean: {
    term: "커피 주세요",
    translation: "A coffee, please",
    phrase: "얼마예요?",
    phraseTranslation: "How much is it?",
  },
  german: {
    term: "Einen Kaffee, bitte",
    translation: "A coffee, please",
    phrase: "Wo ist der Bahnhof?",
    phraseTranslation: "Where is the train station?",
  },
  chinese: {
    term: "请给我一杯咖啡",
    translation: "A coffee, please",
    phrase: "多少钱？",
    phraseTranslation: "How much is it?",
  },
  russian: {
    term: "Кофе, пожалуйста",
    translation: "A coffee, please",
    phrase: "Сколько это стоит?",
    phraseTranslation: "How much does it cost?",
  },
  italian: {
    term: "Un caffè, per favore",
    translation: "A coffee, please",
    phrase: "Quanto costa?",
    phraseTranslation: "How much does it cost?",
  },
  portuguese: {
    term: "Um café, por favor",
    translation: "A coffee, please",
    phrase: "Quanto custa?",
    phraseTranslation: "How much does it cost?",
  },
};

function buildUnit3Lesson(languageId: string, template: Unit3LessonTemplate): Lesson {
  const terms = LANGUAGE_UNIT3_TERMS[languageId] ?? LANGUAGE_UNIT3_TERMS.spanish;
  const lessonId = `${languageId}-unit3-lesson-${template.order}`;

  return {
    id: lessonId,
    languageId,
    unitId: `${languageId}-unit-3`,
    title: template.title,
    description: template.description,
    order: template.order,
    xpReward: 15,
    estimatedMinutes: 7,
    imageKey: template.imageKey,
    goal: {
      summary: template.description,
      outcomes: [
        `Use key phrases from ${template.title}`,
        "Practice in a short conversation",
      ],
    },
    vocabulary: [
      {
        id: `${lessonId}-vocab-1`,
        term: terms.term,
        translation: terms.translation,
      },
      {
        id: `${lessonId}-vocab-2`,
        term: terms.phrase,
        translation: terms.phraseTranslation,
      },
    ],
    phrases: [
      {
        id: `${lessonId}-phrase-1`,
        text: terms.term,
        translation: terms.translation,
        context: "Ordering at a café",
      },
      {
        id: `${lessonId}-phrase-2`,
        text: terms.phrase,
        translation: terms.phraseTranslation,
      },
    ],
    activities: [
      {
        id: `${lessonId}-vocab`,
        type: "vocabulary",
        title: "Learn the words",
        instruction: "Study the key vocabulary for this lesson.",
      },
      {
        id: `${lessonId}-phrases`,
        type: "phrases",
        title: "Practice phrases",
        instruction: "Repeat each phrase out loud.",
      },
      {
        id: `${lessonId}-ai`,
        type: "ai_teacher",
        title: "Talk with your AI teacher",
        instruction: `Practice ${template.title.toLowerCase()} in conversation.`,
      },
    ],
    aiTeacher: {
      kickoff: `Welcome to ${template.title}! Let's practice together.`,
      systemContext: `You are a friendly language teacher helping a beginner with the ${template.title} lesson. Keep replies short and encouraging.`,
      focusAreas: [template.title, terms.term, terms.phrase],
    },
  };
}

const LANGUAGE_IDS = [
  "spanish",
  "french",
  "japanese",
  "korean",
  "german",
  "chinese",
  "russian",
  "italian",
  "portuguese",
] as const;

export const unit3Lessons: Lesson[] = LANGUAGE_IDS.flatMap((languageId) =>
  UNIT3_LESSON_TEMPLATES.map((template) => buildUnit3Lesson(languageId, template)),
);
