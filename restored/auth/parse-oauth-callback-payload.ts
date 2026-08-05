// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `E2i` / export `Qz`.

export type OauthCallbackPayload = {
  fullRedirectUrl: string;
  returnTo?: string;
  callbackReceivedAtMs?: number;
  hasCallbackClaim?: boolean;
};

/** Narrow an unknown host payload into an OAuth callback shape. */
export function parseOauthCallbackPayload(
  value: unknown,
): OauthCallbackPayload | null {
  if (typeof value !== "object" || !value) return null;
  const fullRedirectUrl = Reflect.get(value, "fullRedirectUrl");
  const returnTo = Reflect.get(value, "returnTo");
  const callbackReceivedAtMs = Reflect.get(value, "callbackReceivedAtMs");
  const hasCallbackClaim = Reflect.get(value, "hasCallbackClaim");
  if (
    typeof fullRedirectUrl !== "string" ||
    (returnTo != null && typeof returnTo !== "string") ||
    (callbackReceivedAtMs != null &&
      (typeof callbackReceivedAtMs !== "number" ||
        !Number.isFinite(callbackReceivedAtMs))) ||
    (hasCallbackClaim != null && typeof hasCallbackClaim !== "boolean")
  ) {
    return null;
  }
  return {
    callbackReceivedAtMs: callbackReceivedAtMs ?? undefined,
    fullRedirectUrl,
    hasCallbackClaim: hasCallbackClaim ?? undefined,
    returnTo: returnTo ?? undefined,
  };
}
