import Constants, { ExecutionEnvironment } from "expo-constants";
import * as AuthSession from "expo-auth-session";
import * as Linking from "expo-linking";

const OAUTH_CALLBACK_PATH = "oauth-callback";

function getAppScheme() {
  const scheme = Constants.expoConfig?.scheme ?? "muolingo";
  return Array.isArray(scheme) ? scheme[0] : scheme;
}

/** Redirect URL sent to Clerk — must match an entry in Clerk Dashboard → Redirect URLs. */
export function getOAuthRedirectUrl() {
  const appScheme = getAppScheme();

  return AuthSession.makeRedirectUri({
    native: `${appScheme}://${OAUTH_CALLBACK_PATH}`,
    path: OAUTH_CALLBACK_PATH,
  });
}

export function getClerkRedirectUrlHints() {
  const primary = getOAuthRedirectUrl();
  const hints = new Set<string>([primary]);

  // Expo Go may use exp:// or expo:// — allowlist both prefixes if needed.
  if (primary.startsWith("exp://")) {
    hints.add(primary.replace(/^exp:\/\//, "expo://"));
  }
  if (primary.startsWith("expo://")) {
    hints.add(primary.replace(/^expo:\/\//, "exp://"));
  }

  hints.add(`${getAppScheme()}://${OAUTH_CALLBACK_PATH}`);

  return [...hints];
}

export function parseOAuthCallbackParams(callbackUrl: string) {
  const parsed = Linking.parse(callbackUrl);
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(parsed.queryParams ?? {})) {
    if (typeof value === "string") {
      params[key] = value;
    }
  }

  const hashMatch = callbackUrl.match(/#(.+)$/);
  if (hashMatch) {
    for (const [key, value] of new URLSearchParams(hashMatch[1])) {
      params[key] = value;
    }
  }

  const queryMatch = callbackUrl.match(/[?&]rotating_token_nonce=([^&#]+)/);
  if (queryMatch) {
    params.rotating_token_nonce = decodeURIComponent(queryMatch[1]);
  }

  return params;
}

export function isExpoGo() {
  return Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
}
