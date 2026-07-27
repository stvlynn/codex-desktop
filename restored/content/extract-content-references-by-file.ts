// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Uxa` — flatten content_references_by_file from a parsed message.
// Not directly exported; supporting helper for content-reference cluster.

type MessageByFileParser = (message: unknown) => unknown[];

let parseByFile: MessageByFileParser | null = null;

export function setContentReferencesByFileParser(parser: MessageByFileParser): void {
  parseByFile = parser;
}

export function extractContentReferencesByFile(message: unknown): unknown[] {
  return parseByFile?.(message) ?? [];
}
