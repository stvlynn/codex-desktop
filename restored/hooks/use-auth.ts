// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yM`) / export `RX`.

export type UseAuthPeers = {
  VGr: (...args: unknown[]) => unknown;
  lKr: (...args: unknown[]) => unknown;
};

let peers: UseAuthPeers | null = null;

/** Wire useAuth peers once companions land. */
export function setUseAuthPeers(next: UseAuthPeers): void {
  peers = next;
}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureAuthProviderInit(): void {}

/**
 * Bundle export `RX` / internal `yM`.
 */
export function useAuth() {
  if (peers == null) {
    throw new Error("useAuth peers are not configured");
  }

  let e = (0, peers.lKr.useContext)(peers.VGr);
  if (!e) throw Error(`useAuth must be used within AuthProvider`);
  return e;
}
