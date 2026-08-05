// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HLa`) / export `sN`.

export type BindDeferredUisNPeers = {
  $ga: (...args: unknown[]) => unknown;
  BLa: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LLa: (...args: unknown[]) => unknown;
  Mga: (...args: unknown[]) => unknown;
  VLa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  r_a: (...args: unknown[]) => unknown;
  yS: (...args: unknown[]) => unknown;
  yk: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUisNPeers | null = null;

/** Wire bindDeferredUisN peers once companions land. */
export function setBindDeferredUisNPeers(next: BindDeferredUisNPeers): void {
  peers = next;
}

/**
 * Bundle export `sN` / internal `HLa`.
 */
export function bindDeferredUisN() {
  if (peers == null) {
    throw new Error("bindDeferredUisN peers are not configured");
  }

  return peers.e(() => {
    ((BLa = peers.c()),
      peers.Fh(),
      peers.yk(),
      peers.Mga(),
      peers.$ga(),
      peers.r_a(),
      peers.LLa(),
      peers.yS(),
      (VLa = peers.J()));
  });
}
