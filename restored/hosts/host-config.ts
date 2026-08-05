// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `U_`) / export `Dot`.

export type HostConfigPeers = {
  H_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lOt: (...args: unknown[]) => unknown;
};

let peers: HostConfigPeers | null = null;

/** Wire hostConfig peers once companions land. */
export function setHostConfigPeers(next: HostConfigPeers): void {
  peers = next;
}

/**
 * Bundle export `Dot` / internal `U_`.
 */
export function hostConfig() {
  if (peers == null) {
    throw new Error("hostConfig peers are not configured");
  }

  return peers.e(() => {
    ((H_ = `local`), (lOt = peers.H_));
  });
}
