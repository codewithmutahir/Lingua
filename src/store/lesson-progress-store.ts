import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type LessonProgressStatus = "completed" | "in_progress" | "not_started";

type LessonProgressStore = {
  progressByLessonId: Record<string, LessonProgressStatus>;
  hasHydrated: boolean;
  setLessonStatus: (lessonId: string, status: LessonProgressStatus) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

const DEFAULT_PROGRESS: Record<string, LessonProgressStatus> = {};

function getDefaultStatusForLesson(lessonOrder: number): LessonProgressStatus {
  if (lessonOrder <= 2) {
    return "completed";
  }

  if (lessonOrder === 3) {
    return "in_progress";
  }

  return "not_started";
}

export function getLessonStatus(
  lessonId: string,
  languageId: string,
  lessonOrder: number,
  progressByLessonId: Record<string, LessonProgressStatus>,
): LessonProgressStatus {
  return (
    progressByLessonId[lessonId] ??
    getDefaultStatusForLesson(lessonOrder)
  );
}

export const useLessonProgressStore = create<LessonProgressStore>()(
  persist(
    (set) => ({
      progressByLessonId: DEFAULT_PROGRESS,
      hasHydrated: false,
      setLessonStatus: (lessonId, status) =>
        set((state) => ({
          progressByLessonId: {
            ...state.progressByLessonId,
            [lessonId]: status,
          },
        })),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "lesson-progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        progressByLessonId: state.progressByLessonId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
