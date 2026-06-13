import { useClerk, useSignIn } from "@clerk/expo";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useCallback, useRef, useState } from "react";
import { Alert } from "react-native";

import { navigateAfterAuth } from "@/lib/auth";
import {
  completeOAuthFromCallback,
  reloadClientSessions,
} from "@/lib/complete-oauth";
import { getOAuthRedirectUrl } from "@/lib/oauth-redirect";

WebBrowser.maybeCompleteAuthSession();

type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

export function useSocialAuth() {
  const { client, setActive, loaded } = useClerk();
  const { signIn: activeSignIn } = useSignIn();
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const isAuthenticatingRef = useRef(false);

  const signInWithSocial = useCallback(
    async (strategy: SocialStrategy) => {
      if (isAuthenticatingRef.current) {
        return;
      }

      if (!loaded || !client) {
        Alert.alert(
          "Not ready",
          "Authentication is still loading. Please try again in a moment.",
        );
        return;
      }

      isAuthenticatingRef.current = true;
      setIsAuthenticating(true);

      const redirectUrl = getOAuthRedirectUrl();

      if (__DEV__) {
        console.log("[OAuth] redirect URL sent to Clerk:", redirectUrl);
      }

      try {
        await activeSignIn.reset();

        const signIn = client.signIn;
        const signUp = client.signUp;

        await signIn.create({ strategy, redirectUrl });

        const externalUrl =
          signIn.firstFactorVerification.externalVerificationRedirectURL;

        if (!externalUrl) {
          Alert.alert(
            "Sign in unavailable",
            "This social provider is not configured. Enable it in your Clerk Dashboard.",
          );
          return;
        }

        const authSessionResult = await WebBrowser.openAuthSessionAsync(
          externalUrl.toString(),
          redirectUrl,
        );

        if (
          authSessionResult.type === "cancel" ||
          authSessionResult.type === "dismiss"
        ) {
          return;
        }

        if (authSessionResult.type !== "success" || !authSessionResult.url) {
          Alert.alert(
            "Sign in failed",
            "Social sign in did not complete. Please try again.",
          );
          return;
        }

        if (__DEV__) {
          console.log("[OAuth] callback URL received:", authSessionResult.url);
        }

        let createdSessionId = await completeOAuthFromCallback(
          signIn,
          signUp,
          authSessionResult.url,
        );

        if (!createdSessionId) {
          createdSessionId = await reloadClientSessions(client);
        }

        if (createdSessionId) {
          await setActive({ session: createdSessionId });
          router.replace("/");
          return;
        }

        if (signIn.status === "complete") {
          await activeSignIn.finalize({
            navigate: ({ session, decorateUrl }) => {
              if (session?.currentTask) {
                return;
              }

              navigateAfterAuth(router, decorateUrl);
            },
          });
          return;
        }

        Alert.alert(
          "Sign in failed",
          "Social sign in did not create a session. Please try again.",
        );
      } catch (error) {
        console.error("[OAuth]", error);

        const message =
          error instanceof Error &&
          error.message.includes("Another web browser is already open")
            ? "Please close the sign-in browser window and try again."
            : error instanceof Error
              ? error.message
              : "Something went wrong with social sign in. Please try again.";

        Alert.alert("Sign in failed", message);
      } finally {
        isAuthenticatingRef.current = false;
        setIsAuthenticating(false);
      }
    },
    [activeSignIn, client, loaded, router, setActive],
  );

  return {
    signInWithSocial,
    isAuthenticating,
    redirectUrl: getOAuthRedirectUrl(),
  };
}
