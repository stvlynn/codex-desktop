// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Psc` companion for `ep` / `Osc`.

import type { IntlLike } from "./sidebar-suggestion-label";

export type SidebarSuggestionPromptSource = {
  prompt?: string | { defaultMessage: string; id?: string };
};

/** Resolve sidebar suggestion prompt with slot substitution. */
export function sidebarSuggestionPrompt(
  suggestion: SidebarSuggestionPromptSource,
  intl: IntlLike,
  slots?: Record<string, string>,
): string {
  if (typeof suggestion.prompt === "string") {
    let resolved = suggestion.prompt;
    for (const [key, value] of Object.entries(slots ?? {})) {
      resolved = resolved.replaceAll(`{${key}}`, value);
    }
    return resolved;
  }
  return intl.formatMessage(suggestion.prompt, slots);
}
