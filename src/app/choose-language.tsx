import { useAuth } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import {
  getPopularLanguages,
  languages,
} from "@/data/languages";
import { navigateToHome } from "@/lib/auth";
import { useLanguageStore } from "@/store/language-store";
import type { Language } from "@/types/learning";

function formatLearnerCount(count?: string) {
  return count ? `${count} learners` : "";
}

type LanguageRowProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

function LanguageRow({ language, isSelected, onPress }: LanguageRowProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center px-4 py-3.5 rounded-2xl ${
        isSelected
          ? "border-2 border-lingua-purple bg-[#F3F0FF]"
          : "border border-transparent"
      }`}
    >
      <Image
        source={{ uri: language.flagEmoji }}
        style={{ width: 40, height: 40, borderRadius: 20 }}
        contentFit="cover"
      />
      <View className="flex-1 ml-3">
        <Text className="text-h4 text-text-primary">{language.name}</Text>
        {language.learnerCount ? (
          <Text className="text-body-sm text-text-secondary mt-0.5">
            {formatLearnerCount(language.learnerCount)}
          </Text>
        ) : null}
      </View>
      {isSelected ? (
        <View className="w-7 h-7 rounded-full bg-lingua-purple items-center justify-center">
          <Ionicons name="checkmark" size={18} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
      )}
    </Pressable>
  );
}

export default function ChooseLanguageScreen() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const { width: screenWidth } = useWindowDimensions();
  const { selectedLanguageId, setSelectedLanguageId } = useLanguageStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingLanguageId, setPendingLanguageId] = useState<string | null>(
    selectedLanguageId ?? "spanish",
  );

  useEffect(() => {
    if (selectedLanguageId) {
      setPendingLanguageId(selectedLanguageId);
    }
  }, [selectedLanguageId]);

  const trimmedQuery = searchQuery.trim().toLowerCase();

  const visibleLanguages = useMemo(() => {
    if (trimmedQuery) {
      return languages.filter(
        (language) =>
          language.name.toLowerCase().includes(trimmedQuery) ||
          language.nativeName.toLowerCase().includes(trimmedQuery),
      );
    }

    return getPopularLanguages();
  }, [trimmedQuery]);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  const handleConfirm = () => {
    if (!pendingLanguageId) {
      return;
    }

    setSelectedLanguageId(pendingLanguageId);
    navigateToHome(router);
  };

  // earth.png is 1:1 with empty sky padding on top; crop only the sky band.
  const earthImageSize = screenWidth;
  const earthSkyCrop = Math.round(earthImageSize * 0.15);
  const earthVisibleHeight = Math.round(earthImageSize * 0.56);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1">
        <View className="px-5 pt-2 pb-4">
          <View className="flex-row items-center justify-center relative">
            <Pressable
              onPress={() => router.back()}
              className="absolute left-0 w-10 h-10 items-center justify-center"
              hitSlop={8}
            >
              <Ionicons name="chevron-back" size={24} color="#0D132B" />
            </Pressable>
            <Text className="text-h4 text-text-primary">Choose a language</Text>
          </View>

          <View className="mt-5 flex-row items-center border border-border rounded-full px-4 py-3 bg-background">
            <Ionicons name="search" size={18} color="#9CA3AF" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search languages"
              placeholderTextColor="#9CA3AF"
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                color: "#0D132B",
                paddingVertical: 0,
              }}
            />
          </View>
        </View>

        <ScrollView
          className="flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 8 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {!trimmedQuery ? (
            <Text className="text-h4 text-text-primary mb-3">Popular</Text>
          ) : null}

          <View className="gap-1">
            {visibleLanguages.map((language) => (
              <LanguageRow
                key={language.id}
                language={language}
                isSelected={pendingLanguageId === language.id}
                onPress={() => setPendingLanguageId(language.id)}
              />
            ))}
          </View>

          {trimmedQuery && visibleLanguages.length === 0 ? (
            <Text className="text-body-md text-text-secondary text-center mt-8">
              No languages found for &quot;{searchQuery.trim()}&quot;
            </Text>
          ) : null}
        </ScrollView>

        <View className="px-5 pt-2 pb-3 bg-background">
          <Pressable
            onPress={handleConfirm}
            disabled={!pendingLanguageId}
            className={`rounded-full py-3.5 items-center ${
              pendingLanguageId
                ? "bg-lingua-purple active:opacity-90"
                : "bg-border"
            }`}
          >
            <Text
              className={`text-body-lg ${
                pendingLanguageId ? "text-white" : "text-text-secondary"
              }`}
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Continue
            </Text>
          </Pressable>
        </View>

        <View
          pointerEvents="none"
          style={{
            width: screenWidth,
            height: earthVisibleHeight,
            overflow: "hidden",
          }}
        >
          <Image
            source={images.earth}
            style={{
              width: earthImageSize,
              height: earthImageSize,
              marginTop: -earthSkyCrop,
            }}
            contentFit="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
