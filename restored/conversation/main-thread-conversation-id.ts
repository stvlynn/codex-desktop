// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fts` / export `ew`.

/** Prefer active main-thread locator conversation id. */
export function mainThreadConversationId(
  preferred: {
    phase?: string;
    preferredPresentationSurface?: string;
    locator?: { conversationId?: string | null };
  },
  fallback?: {
    surface?: string;
    locator?: { conversationId?: string | null };
  } | null,
): string | null {
  return preferred.phase !== "inactive" &&
    preferred.preferredPresentationSurface === "main-thread"
    ? (preferred.locator?.conversationId ?? null)
    : fallback?.surface === "main-thread"
      ? (fallback.locator?.conversationId ?? null)
      : null;
}
