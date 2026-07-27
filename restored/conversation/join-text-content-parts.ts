// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vmo` / export `dj`.

/** Flatten text content parts into a single trimmed string. */
export function joinTextContentParts(message: {
  content: Array<{ content_type?: string; text?: string }>;
}): string {
  return message.content
    .flatMap((part) => (part.content_type === "text" ? [part.text ?? ""] : []))
    .join("\n\n")
    .trim();
}
