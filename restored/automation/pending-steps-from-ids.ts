// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `hJs` for `uJs` / export `Lg`.

/** Map step ids onto pending step records. */
export function pendingStepsFromIds(
  stepIds: string[],
): Array<{ id: string; status: "pending" }> {
  return stepIds.map((id) => ({ id, status: "pending" }));
}
