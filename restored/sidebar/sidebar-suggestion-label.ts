// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ksc` companion for `ep` / `Osc`.

export type IntlLike = {
  formatMessage: (
    descriptor: { id?: string; defaultMessage: string },
    values?: Record<string, string>,
  ) => string;
};

export type SidebarSuggestionLike = {
  message?: string | { defaultMessage: string; id?: string };
};

/** Resolve sidebar suggestion label from string or intl descriptor. */
export function sidebarSuggestionLabel(
  suggestion: SidebarSuggestionLike,
  intl: IntlLike,
): string {
  return typeof suggestion.message === "string"
    ? suggestion.message
    : intl.formatMessage(suggestion.message);
}
