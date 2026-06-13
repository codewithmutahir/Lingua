import type { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    code: "es",
    flagEmoji: "https://flagcdn.com/w320/es.png",
    description: "Learn everyday Spanish for travel, friends, and fun conversations.",
    learnerCount: "28.4M",
    isPopular: true,
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    code: "fr",
    flagEmoji: "https://flagcdn.com/w320/fr.png",
    description: "Build a strong foundation in French greetings and daily phrases.",
    learnerCount: "19.4M",
    isPopular: true,
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    code: "ja",
    flagEmoji: "https://flagcdn.com/w320/jp.png",
    description: "Start with polite introductions and essential Japanese expressions.",
    learnerCount: "12.7M",
    isPopular: true,
  },
  {
    id: "korean",
    name: "Korean",
    nativeName: "한국어",
    code: "ko",
    flagEmoji: "https://flagcdn.com/w320/kr.png",
    description: "Learn basic Korean phrases and greetings.",
    learnerCount: "9.3M",
    isPopular: true,
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    code: "de",
    flagEmoji: "https://flagcdn.com/w320/de.png",
    description: "Learn basic German phrases and greetings.",
    learnerCount: "8.1M",
    isPopular: true,
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "中文",
    code: "zh",
    flagEmoji: "https://flagcdn.com/w320/cn.png",
    description: "Learn basic Chinese phrases and greetings.",
    learnerCount: "7.4M",
    isPopular: true,
  },
  {
    id: "russian",
    name: "Russian",
    nativeName: "Русский",
    code: "ru",
    flagEmoji: "https://flagcdn.com/w320/ru.png",
    description: "Learn basic Russian phrases and greetings.",
  },
  {
    id: "italian",
    name: "Italian",
    nativeName: "Italiano",
    code: "it",
    flagEmoji: "https://flagcdn.com/w320/it.png",
    description: "Learn basic Italian phrases and greetings.",
  },
  {
    id: "portuguese",
    name: "Portuguese",
    nativeName: "Português",
    code: "pt",
    flagEmoji: "https://flagcdn.com/w320/pt.png",
    description: "Learn basic Portuguese phrases and greetings.",
  },
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((language) => language.id === id);
}

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((language) => language.code === code);
}

export function getPopularLanguages(): Language[] {
  return languages.filter((language) => language.isPopular);
}
