// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `l3i` / export `mz`.

/** Match OpenAI directory tab category title to canonical category id. */
export function matchOpenaiDirectoryCategoryId(input: {
  canonicalCategoryIds: readonly string[];
  directoryTab: string;
  selectedCategoryTitle?: string | null;
}): string | undefined {
  if (input.directoryTab !== "openai" || input.selectedCategoryTitle == null) {
    return;
  }
  const needle = input.selectedCategoryTitle.trim().toLowerCase();
  if (needle === "") return;
  return input.canonicalCategoryIds.find(
    (id) => id.trim().toLowerCase() === needle,
  );
}
