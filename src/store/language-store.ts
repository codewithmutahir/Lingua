import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageStore = {
  selectedLanguageId: string | null;
  hasHydrated: boolean;
  setSelectedLanguageId: (languageId: string) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
  clearSelectedLanguage: () => Promise<void>;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguageId: (languageId) =>
        set({ selectedLanguageId: languageId }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      clearSelectedLanguage: async () => {
        set({ selectedLanguageId: null });
        await AsyncStorage.removeItem("language-storage");
      },
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        selectedLanguageId: state.selectedLanguageId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
