import type {
  ClientResource,
  SignInResource,
  SignUpResource,
} from "@clerk/shared/types";
import { parseOAuthCallbackParams } from "@/lib/oauth-redirect";

export async function completeOAuthFromCallback(
  signIn: SignInResource,
  signUp: SignUpResource,
  callbackUrl: string,
) {
  const params = parseOAuthCallbackParams(callbackUrl);
  const rotatingTokenNonce = params.rotating_token_nonce ?? "";

  await signIn.reload({ rotatingTokenNonce });

  if (signIn.firstFactorVerification.status === "transferable") {
    await signUp.create({ transfer: true });
  }

  return signUp.createdSessionId ?? signIn.createdSessionId ?? null;
}

export async function reloadClientSessions(client: ClientResource) {
  await client.reload();
  return client.signedInSessions[0]?.id ?? null;
}
