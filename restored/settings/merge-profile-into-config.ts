// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Fx` / export `f9`.

/** Merge named profile fields into a shallow config clone. */
export function mergeProfileIntoConfig<
  T extends { profile?: unknown; profiles?: unknown },
>(config: T): T {
  const profiles =
    config.profiles != null && typeof config.profiles === "object"
      ? (config.profiles as Record<
          string,
          Record<string, unknown> | null | undefined
        >)
      : null;
  const profileName =
    typeof config.profile === "string" ? config.profile : null;
  const profile =
    profileName != null && profiles != null ? profiles[profileName] : null;
  if (profile == null || typeof profile !== "object") return config;
  const next: T = { ...config };
  for (const [key, value] of Object.entries(profile)) {
    if (value != null) (next as Record<string, unknown>)[key] = value;
  }
  return next;
}
