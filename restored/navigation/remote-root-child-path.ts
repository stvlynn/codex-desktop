// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Fwe` / export `nmt`. Companion `yTe` = "/remote".

export const REMOTE_ROOT_PREFIX = "/remote";

/** Build `/remote/<child>` path. */
export function remoteRootChildPath(child: string): string {
  return `${REMOTE_ROOT_PREFIX}/${child}`;
}
