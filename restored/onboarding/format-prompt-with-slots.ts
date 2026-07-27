// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Psc` companion for export `ep`.

import type { IntlShapeLike } from "./format-intl-or-string";

/** Format a prompt string or message descriptor with `{slot}` replacements. */
export function formatPromptWithSlots(
  entry: { prompt: string | unknown },
  intl: IntlShapeLike,
  slots?: Record<string, string>,
): string {
  if (typeof entry.prompt !== "string") {
    return intl.formatMessage(entry.prompt, slots);
  }
  let out = entry.prompt;
  for (const [key, value] of Object.entries(slots ?? {})) {
    out = out.replaceAll(`{${key}}`, value);
  }
  return out;
}
