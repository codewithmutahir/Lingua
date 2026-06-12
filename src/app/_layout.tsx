import "../../global.css";

import { Stack } from "expo-router";

import { useAppFonts } from "@/hooks/useAppFonts";

export default function RootLayout() {
  const { loaded, error } = useAppFonts();

  if (!loaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
