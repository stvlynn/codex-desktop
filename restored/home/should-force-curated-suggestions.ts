// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$ti` / export `YW`.

/** Whether home should force curated (non-personalized) suggestions. */
export function shouldForceCuratedSuggestions(args: {
  canUsePersonalizedSuggestions: boolean;
  generatedSuggestionsEnabled: boolean;
  hasGeneratedSuggestionsReadSettled: boolean;
  shouldUseCuratedNewChatPageSuggestions: boolean;
}): boolean {
  const {
    canUsePersonalizedSuggestions,
    generatedSuggestionsEnabled,
    hasGeneratedSuggestionsReadSettled,
    shouldUseCuratedNewChatPageSuggestions,
  } = args;
  return shouldUseCuratedNewChatPageSuggestions ||
    !generatedSuggestionsEnabled ||
    !canUsePersonalizedSuggestions
    ? true
    : hasGeneratedSuggestionsReadSettled;
}
