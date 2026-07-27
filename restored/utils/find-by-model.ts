// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `FM` — pure helper.

/** Find the first entry whose `model` field equals `modelId`. */
export function findByModel<T extends { model?: unknown }>(
  entries: T[] | null | undefined,
  modelId: unknown,
): T | undefined {
  return entries?.find((entry) => entry.model === modelId);
}
