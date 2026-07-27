// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `riu`) / export `$n`.

export type CodexCommandInstallPrimaryRuntimeInstallingPeers = {
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  niu: (...args: unknown[]) => unknown;
  tiu: (...args: unknown[]) => unknown;
};

let peers: CodexCommandInstallPrimaryRuntimeInstallingPeers | null = null;

/** Wire codexCommandInstallPrimaryRuntimeInstalling peers once companions land. */
export function setCodexCommandInstallPrimaryRuntimeInstallingPeers(next: CodexCommandInstallPrimaryRuntimeInstallingPeers): void {
  peers = next;
}

/**
 * Bundle export `$n` / internal `riu`.
 */
export function codexCommandInstallPrimaryRuntimeInstalling() {
  if (peers == null) {
    throw new Error("codexCommandInstallPrimaryRuntimeInstalling peers are not configured");
  }

  return peers.e(() => {
    peers._p(), tiu = new Map(), niu = Promise.resolve();
  });
}
