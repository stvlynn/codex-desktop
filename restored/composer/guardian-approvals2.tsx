// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hNs`) / export `nv`.

export type BindBindGuardianApprovals2Peers = {
  Pm: (...args: unknown[]) => unknown;
  mNs: (...args: unknown[]) => unknown;
};

let peers: BindBindGuardianApprovals2Peers | null = null;

/** Wire bindBindGuardianApprovals2 peers once companions land. */
export function setBindBindGuardianApprovals2Peers(next: BindBindGuardianApprovals2Peers): void {
  peers = next;
}

/**
 * Bundle export `nv` / internal `hNs`.
 */
export function bindBindGuardianApprovals2() {
  if (peers == null) {
    throw new Error("bindBindGuardianApprovals2 peers are not configured");
  }

  return peers.Pm(`composer-permission-mode-visibility`, peers.mNs);
}
