// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `jrt` — pure helper.

type OutputItem = { content?: Array<{ text?: string | null }> | null };

/** Flatten model output item texts into one trimmed string (or null). */
export function joinModelOutputText(message: {
  output: readonly OutputItem[];
}): string | null {
  const text = message.output
    .flatMap((item) => item.content ?? [])
    .map((part) => part.text?.trim() ?? "")
    .filter((part) => part.length > 0)
    .join(" ")
    .trim();
  return text.length === 0 ? null : text;
}
