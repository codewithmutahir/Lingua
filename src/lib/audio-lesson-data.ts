import { getLanguageById } from "@/data/languages";
import { getLessonById, getLessonsByLanguageId } from "@/data/lessons";
import { getLessonsScreenData } from "@/lib/lesson-data";
import type { LessonProgressStatus } from "@/store/lesson-progress-store";
import type { Language, Lesson, Phrase } from "@/types/learning";

export type AudioLessonDisplay = {
  lesson: Lesson;
  language: Language;
  speechPrimary: string;
  speechSecondary: string;
  phrases: Phrase[];
  teacherKickoff: string;
};

function buildAudioLessonDisplay(lesson: Lesson): AudioLessonDisplay | null {
  const language = getLanguageById(lesson.languageId);
  if (!language) {
    return null;
  }

  const firstPhrase = lesson.phrases[0];
  const kickoff = lesson.aiTeacher.kickoff;
  const kickoffSentences = kickoff.split(/(?<=[.!?])\s+/);
  const openingLine = kickoffSentences[0] ?? kickoff;

  return {
    lesson,
    language,
    speechPrimary: firstPhrase?.text ?? openingLine,
    speechSecondary: firstPhrase?.translation ?? lesson.goal.summary,
    phrases: lesson.phrases,
    teacherKickoff: kickoff,
  };
}

export function getAudioLessonDisplay(
  lessonId: string,
): AudioLessonDisplay | null {
  const lesson = getLessonById(lessonId);
  if (!lesson) {
    return null;
  }

  return buildAudioLessonDisplay(lesson);
}

export function getActiveAudioLessonForLanguage(
  languageId: string,
  progressByLessonId: Record<string, LessonProgressStatus>,
): AudioLessonDisplay | null {
  const screenData = getLessonsScreenData(languageId, progressByLessonId);
  const activeLesson =
    screenData?.lessons.find((item) => item.status === "in_progress")?.lesson ??
    screenData?.lessons.find((item) => item.status === "not_started")?.lesson ??
    getLessonsByLanguageId(languageId)[0];

  if (!activeLesson) {
    return null;
  }

  return buildAudioLessonDisplay(activeLesson);
}
