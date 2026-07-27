// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `f3r` / export `rq`.

/** Resolve auth provider from debug override / detection / email domain. */
export function resolveAuthProviderSelection(input: {
  debugOverride?: string | null;
  detectedProvider?: string | null;
  emailDomain?: string | null;
  isError?: boolean;
}): string | null {
  return (
    input.debugOverride ??
    input.detectedProvider ??
    (input.emailDomain == null || input.isError ? "other" : null)
  );
}
