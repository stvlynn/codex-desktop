// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `khe`) / export `kgt`.

export type BindCodexAppServerVersionRestartAvailablePeers = {
  Dhe: (...args: unknown[]) => unknown;
  Ehe: (...args: unknown[]) => unknown;
  Ohe: (...args: unknown[]) => unknown;
  The: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindCodexAppServerVersionRestartAvailablePeers | null = null;

/** Wire bindCodexAppServerVersionRestartAvailable peers once companions land. */
export function setBindCodexAppServerVersionRestartAvailablePeers(
  next: BindCodexAppServerVersionRestartAvailablePeers,
): void {
  peers = next;
}

/**
 * Bundle export `kgt` / internal `khe`.
 */
export function bindCodexAppServerVersionRestartAvailable() {
  if (peers == null) {
    throw new Error(
      "bindCodexAppServerVersionRestartAvailable peers are not configured",
    );
  }

  return peers.e(() => {
    ((The = `0.141.0`),
      (Ehe = `codex-app-server-version-restart-available:`),
      (Dhe = `0.0.0`),
      (Ohe =
        /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/));
  });
}
