// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qti` / export `JW`.

/** Resolve onboarding catalog kind: generated vs curated. */
export function resolveOnboardingCatalogKind(input: {
  debugOverride?: "generated" | "curated" | null;
  experimentEligible?: boolean;
  personalized?: boolean;
}): "generated" | "curated" {
  return (
    input.debugOverride ??
    (input.experimentEligible && input.personalized ? "generated" : "curated")
  );
}
