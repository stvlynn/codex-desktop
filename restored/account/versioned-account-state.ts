// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VZ` companion for `gb`.

/** Return version-1 account state record at `key`, else undefined. */
export function versionedAccountState<T extends { version: number }>(
  store: Record<string, T> | null | undefined,
  key: string,
): T | undefined {
  const entry = store?.[key];
  return entry?.version === 1 ? entry : undefined;
}
