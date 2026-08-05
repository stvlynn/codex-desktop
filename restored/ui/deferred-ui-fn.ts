// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kIa`) / export `fN`.

export type BindDeferredUiFNPeers = {
  $u: (...args: unknown[]) => unknown;
  AH: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mga: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  OIa: (...args: unknown[]) => unknown;
  bIa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dIa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kH: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  yS: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFNPeers | null = null;

/** Wire bindDeferredUiFN peers once companions land. */
export function setBindDeferredUiFNPeers(next: BindDeferredUiFNPeers): void {
  peers = next;
}

/**
 * Bundle export `fN` / internal `kIa`.
 */
export function bindDeferredUiFN() {
  if (peers == null) {
    throw new Error("bindDeferredUiFN peers are not configured");
  }

  return peers.e(() => {
    ((kH = peers.c()),
      peers.sd(),
      peers.$u(),
      peers.Mga(),
      peers.yS(),
      peers.dIa(),
      peers.Mp(),
      peers.bIa(),
      (AH = peers.J()),
      (OIa = `font-semibold`));
  });
}
