// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CIi` / export `JU`.

/** Join optional remote prefix with a required local path. */
export function joinRemoteLocalPath(
  ref:
    | {
        local?: string | null;
        remote?: string | null;
      }
    | null
    | undefined,
): string | null {
  if (ref?.local == null) return null;
  return ref.remote == null ? ref.local : `${ref.remote}/${ref.local}`;
}
