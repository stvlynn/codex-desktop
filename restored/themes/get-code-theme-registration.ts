// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jP` / export `NW`.

type ThemeRegistration = { id: string; [key: string]: unknown };

type ThemeRegistry = {
  registrationByVariant: Record<string, ThemeRegistration | undefined>;
};

type ThemeRegistryLookup = (themeId: string, variant: string) => ThemeRegistry;

let lookup: ThemeRegistryLookup | null = null;

/** Bind code-theme registry lookup. */
export function bindGetCodeThemeRegistration(next: ThemeRegistryLookup): void {
  lookup = next;
}

/** Return the registration for a code theme variant or throw. */
export function getCodeThemeRegistration(
  themeId: string,
  variant: string,
): ThemeRegistration {
  const registration = lookup?.(themeId, variant)?.registrationByVariant[
    variant
  ];
  if (registration == null) {
    throw new Error(`Missing ${variant} code theme registration`);
  }
  return registration;
}
