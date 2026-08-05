// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hxa` / export `cI`.
// Message zod schema + genui rewrite (`Gxa`) left injectable.

type MessageContentRefsParser = (message: unknown) => Record<string, unknown>[];

let parseMessageContentRefs: MessageContentRefsParser | null = null;

/** Wire message content_references parser (`QSa` + `Gxa` in the bundle). */
export function setMessageContentReferencesParser(
  parser: MessageContentRefsParser,
): void {
  parseMessageContentRefs = parser;
}

export function extractContentReferencesFromMessage(
  message: unknown,
): Record<string, unknown>[] {
  return parseMessageContentRefs?.(message) ?? [];
}
