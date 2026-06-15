import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

import { HOME_HREF } from "@/lib/auth";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={HOME_HREF} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
