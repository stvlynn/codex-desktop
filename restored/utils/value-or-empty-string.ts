// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Rft` — pure helper.

/** Return `value` or empty string. */
export function valueOrEmptyString(
  value: { value?: string } | null | undefined,
): string {
  return value?.value || "";
}
