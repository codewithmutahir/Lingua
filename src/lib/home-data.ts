import { getLanguageById } from "@/data/languages";
import { getLessonsByLanguageId, getLessonsByUnitId } from "@/data/lessons";
import { getUnitsByLanguageId } from "@/data/units";
import type { Lesson, Unit } from "@/types/learning";

export type TodayPlanItem = {
  id: string;
  title: string;
  subtitle: string;
  completed: boolean;
  variant: "lesson" | "ai_conversation" | "new_words";
};

export type HomeScreenData = {
  greetingWord: string;
  languageName: string;
  languageFlagUrl: string;
  levelLabel: string;
  unit: Unit;
  currentLesson: Lesson;
  completedLesson: Lesson;
  dailyGoalXp: number;
  dailyXpEarned: number;
  streak: number;
  todayPlan: TodayPlanItem[];
};

const GREETINGS: Record<string, string> = {
  spanish: "Hola",
  french: "Bonjour",
  japanese: "Konnichiwa",
  korean: "Annyeong",
  german: "Hallo",
  italian: "Ciao",
  portuguese: "Olá",
  chinese: "Nǐ hǎo",
  russian: "Привет",
};

const DAILY_GOAL_XP = 20;
const DEFAULT_STREAK = 12;

function findLessonWithCafeContext(languageId: string): Lesson | undefined {
  return getLessonsByLanguageId(languageId).find((lesson) =>
    lesson.phrases.some((phrase) => {
      const context = phrase.context?.toLowerCase() ?? "";
      return context.startsWith("ordering at") || context.startsWith("at a ");
    }),
  );
}

export function getHomeScreenData(languageId: string): HomeScreenData | null {
  const language = getLanguageById(languageId);
  if (!language) {
    return null;
  }

  const units = getUnitsByLanguageId(languageId);
  if (units.length === 0) {
    return null;
  }

  const currentUnit = units[units.length - 1];
  const currentUnitLessons = getLessonsByUnitId(currentUnit.id);
  const currentLesson = currentUnitLessons[0];

  if (!currentLesson) {
    return null;
  }

  const completedLesson =
    findLessonWithCafeContext(languageId) ??
    getLessonsByLanguageId(languageId)[1] ??
    currentLesson;

  const aiActivity = currentLesson.activities.find(
    (activity) => activity.type === "ai_teacher",
  );

  const dailyXpEarned = Math.min(
    DAILY_GOAL_XP - 5,
    completedLesson.xpReward + Math.floor(currentLesson.xpReward / 2),
  );

  const todayPlan: TodayPlanItem[] = [
    {
      id: "lesson",
      title: "Lesson",
      subtitle:
        completedLesson.phrases.find((phrase) => phrase.context)?.context ??
        completedLesson.title,
      completed: true,
      variant: "lesson",
    },
    {
      id: "ai-conversation",
      title: "AI Conversation",
      subtitle: aiActivity?.instruction ?? "Talk about your day",
      completed: false,
      variant: "ai_conversation",
    },
    {
      id: "new-words",
      title: "New words",
      subtitle: `${currentLesson.vocabulary.length} words`,
      completed: false,
      variant: "new_words",
    },
  ];

  return {
    greetingWord: GREETINGS[languageId] ?? "Hello",
    languageName: language.name,
    languageFlagUrl: language.flagEmoji,
    levelLabel: "A1",
    unit: currentUnit,
    currentLesson,
    completedLesson,
    dailyGoalXp: DAILY_GOAL_XP,
    dailyXpEarned,
    streak: DEFAULT_STREAK,
    todayPlan,
  };
}
