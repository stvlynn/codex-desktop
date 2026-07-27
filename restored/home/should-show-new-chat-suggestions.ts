// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eni` / export `qW`.

/** Visibility gate for new-chat / home suggestion chips. */
export function shouldShowNewChatSuggestions(args: {
  areNewChatPageSuggestionsLoading: boolean;
  hasFallbackSuggestions: boolean;
  hasProjectRoot: boolean;
  shouldShowHomeSuggestions: boolean;
  shouldUseCuratedNewChatPageSuggestions: boolean;
}): boolean {
  const {
    areNewChatPageSuggestionsLoading,
    hasFallbackSuggestions,
    hasProjectRoot,
    shouldShowHomeSuggestions,
    shouldUseCuratedNewChatPageSuggestions,
  } = args;
  if (areNewChatPageSuggestionsLoading) return false;
  if (shouldUseCuratedNewChatPageSuggestions) return true;
  return (
    (hasProjectRoot || hasFallbackSuggestions) && shouldShowHomeSuggestions
  );
}
