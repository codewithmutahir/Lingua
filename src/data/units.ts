import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "spanish-unit-1",
    languageId: "spanish",
    title: "Basics",
    description: "Your first Spanish words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "spanish-unit-2",
    languageId: "spanish",
    title: "Greetings",
    description: "Say hello, goodbye, and introduce yourself.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "french-unit-1",
    languageId: "french",
    title: "First Steps",
    description: "Essential French for beginners.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "french-unit-2",
    languageId: "french",
    title: "Around Town",
    description: "Phrases for cafés, shops, and directions.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "japanese-unit-1",
    languageId: "japanese",
    title: "Getting Started",
    description: "Polite Japanese for your first conversations.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "japanese-unit-2",
    languageId: "japanese",
    title: "Greetings",
    description: "Check in with others and count in Japanese.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "korean-unit-1",
    languageId: "korean",
    title: "Basics",
    description: "Your first Korean words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "korean-unit-2",
    languageId: "korean",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "chinese-unit-1",
    languageId: "chinese",
    title: "Basics",
    description: "Your first Chinese words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "chinese-unit-2",
    languageId: "chinese",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "russian-unit-1",
    languageId: "russian",
    title: "Basics",
    description: "Your first Russian words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "russian-unit-2",
    languageId: "russian",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "german-unit-1",
    languageId: "german",
    title: "Basics",
    description: "Your first German words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "german-unit-2",
    languageId: "german",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "italian-unit-1",
    languageId: "italian",
    title: "Basics",
    description: "Your first Italian words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "italian-unit-2",
    languageId: "italian",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
  {
    id: "portuguese-unit-1",
    languageId: "portuguese",
    title: "Basics",
    description: "Your first Portuguese words and sounds.",
    order: 1,
    imageKey: "palace",
  },
  {
    id: "portuguese-unit-2",
    languageId: "portuguese",
    title: "Greetings",
    description: "Introduce yourself and ask how someone is.",
    order: 2,
    imageKey: "treasure",
  },
];

export function getUnitsByLanguageId(languageId: string): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
