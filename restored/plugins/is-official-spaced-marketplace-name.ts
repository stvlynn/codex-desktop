// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_es` / `hes` / `vX` companions for official marketplace checks.

/** Lowercase trim + collapse `_-` runs to spaces. */
export function normalizeMarketplacePhrase(value: string): string {
  return value.trim().toLowerCase().replace(/[_-]+/gu, " ");
}

/** True for spaced official/curated marketplace phrases. */
export function isOfficialSpacedMarketplaceName(
  value: string | null | undefined,
): boolean {
  if (value == null) return false;
  switch (normalizeMarketplacePhrase(value)) {
    case "codex official":
    case "openai curated":
    case "openai curated remote":
      return true;
    default:
      return false;
  }
}
