// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KHa`) / export `PM`.

export type BindDeferredUiHelperPMPeers = {
  FHa: (...args: unknown[]) => unknown;
  GHa: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LHa: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  WHa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperPMPeers | null = null;

/** Wire bindDeferredUiHelperPM peers once companions land. */
export function setBindDeferredUiHelperPMPeers(next: BindDeferredUiHelperPMPeers): void {
  peers = next;
}

/**
 * Bundle export `PM` / internal `KHa`.
 */
export function bindDeferredUiHelperPM() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperPM peers are not configured");
  }

  return peers.e(() => {
    WHa = peers.c(), peers.sd(), peers.Nw(), peers.FHa(), peers.LHa(), GHa = peers.J();
  });
}
