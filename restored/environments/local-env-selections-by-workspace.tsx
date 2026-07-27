// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yK`) / export `mA`.

export type BindBindLocalEnvSelectionsByWorkspacePeers = {
  Ap: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gxo: (...args: unknown[]) => unknown;
  Xxo: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  iSo: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
  nE: (...args: unknown[]) => unknown;
  vK: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalEnvSelectionsByWorkspacePeers | null = null;

/** Wire bindBindLocalEnvSelectionsByWorkspace peers once companions land. */
export function setBindBindLocalEnvSelectionsByWorkspacePeers(next: BindBindLocalEnvSelectionsByWorkspacePeers): void {
  peers = next;
}

/**
 * Bundle export `mA` / internal `yK`.
 */
export function bindBindLocalEnvSelectionsByWorkspace() {
  if (peers == null) {
    throw new Error("bindBindLocalEnvSelectionsByWorkspace peers are not configured");
  }

  return peers.e(() => {
    iSo = peers.c(), peers.fr(), peers.Au(), peers.Gxo(), peers.nE(), peers.Xxo(), peers.jf(), peers.Ap(), peers.ap(), vK = peers.kp(`local-env-selections-by-workspace`, {});
  });
}
