import { getLessonsByUnitId } from "@/data/lessons";
import { getUnitById, getUnitsByLanguageId } from "@/data/units";
import {
  getLessonStatus,
  type LessonProgressStatus,
} from "@/store/lesson-progress-store";
import type { Lesson, Unit } from "@/types/learning";

export type LessonListItem = {
  lesson: Lesson;
  status: LessonProgressStatus;
};

export type LessonsScreenData = {
  unit: Unit;
  lessons: LessonListItem[];
  activeLessonOrder: number;
  completedCount: number;
};

export function getFeaturedUnitForLanguage(languageId: string): Unit | undefined {
  const units = getUnitsByLanguageId(languageId);
  return units.find((unit) => unit.order === 3) ?? units[units.length - 1];
}

export function getLessonsScreenData(
  languageId: string,
  progressByLessonId: Record<string, LessonProgressStatus>,
  unitId?: string,
): LessonsScreenData | null {
  const unit =
    (unitId ? getUnitById(unitId) : undefined) ??
    getFeaturedUnitForLanguage(languageId);

  if (!unit || unit.languageId !== languageId) {
    return null;
  }

  const lessons = getLessonsByUnitId(unit.id);
  if (lessons.length === 0) {
    return null;
  }

  const lessonItems: LessonListItem[] = lessons.map((lesson) => ({
    lesson,
    status: getLessonStatus(
      lesson.id,
      languageId,
      lesson.order,
      progressByLessonId,
    ),
  }));

  const completedCount = lessonItems.filter(
    (item) => item.status === "completed",
  ).length;

  const activeLesson =
    lessonItems.find((item) => item.status === "in_progress") ??
    lessonItems.find((item) => item.status === "not_started") ??
    lessonItems[lessonItems.length - 1];

  return {
    unit,
    lessons: lessonItems,
    activeLessonOrder: activeLesson.lesson.order,
    completedCount,
  };
}
