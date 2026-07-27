// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Y9o` companion for directory app merge helpers.

/** Prefer branding.category, else first appMetadata category. */
export function directoryAppCategory(app: {
  branding?: { category?: string | null } | null;
  appMetadata?: { categories?: Array<string | null | undefined> | null } | null;
}): string | null {
  return (
    app.branding?.category?.trim() ||
    app.appMetadata?.categories?.find((value) => value?.trim())?.trim() ||
    null
  );
}
