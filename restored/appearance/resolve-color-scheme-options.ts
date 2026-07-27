// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bRi` / export `gU`.

/** Expand `system` into light/dark; otherwise wrap the concrete scheme. */
export function resolveColorSchemeOptions(
  scheme: "system" | "light" | "dark" | string,
): string[] {
  return scheme === "system" ? ["light", "dark"] : [scheme];
}
