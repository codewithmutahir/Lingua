import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ContinueLearningCard } from "@/components/home/continue-learning-card";
import { DailyGoalCard } from "@/components/home/daily-goal-card";
import { HomeHeader } from "@/components/home/home-header";
import { TodayPlanSection } from "@/components/home/today-plan-section";
import { getHomeScreenData } from "@/lib/home-data";
import { useLanguageStore } from "@/store/language-store";

export default function HomeScreen() {
  const router = useRouter();
  const { selectedLanguageId, clearSelectedLanguage } = useLanguageStore();

  const homeData = selectedLanguageId
    ? getHomeScreenData(selectedLanguageId)
    : null;

  if (!homeData) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-h3 text-text-primary">Welcome back!</Text>
          <Text className="text-body-md text-text-secondary mt-2 text-center">
            Select a language to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 8,
          paddingBottom: 24,
        }}
      >
        <HomeHeader
          greetingWord={homeData.greetingWord}
          languageFlagUrl={homeData.languageFlagUrl}
          streak={homeData.streak}
        />

        <DailyGoalCard
          earnedXp={homeData.dailyXpEarned}
          goalXp={homeData.dailyGoalXp}
        />

        <ContinueLearningCard
          languageName={homeData.languageName}
          levelLabel={homeData.levelLabel}
          unitOrder={homeData.unit.order}
        />

        <TodayPlanSection items={homeData.todayPlan} />

        <Pressable
          onPress={async () => {
            await clearSelectedLanguage();
            router.replace("/choose-language");
          }}
          className="mt-8 border border-border rounded-xl active:opacity-80"
        >
          <Text className="text-body-sm text-text-secondary text-center py-3">
            Clear language selection (test)
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
