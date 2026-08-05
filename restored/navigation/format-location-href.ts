// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W2i`) / export `Xz`.

export type BindFormatLocationHrefPeers = {
  Fh: (...args: unknown[]) => unknown;
  H2i: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  R2i: (...args: unknown[]) => unknown;
  U2i: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindFormatLocationHrefPeers | null = null;

/** Wire bindFormatLocationHref peers once companions land. */
export function setBindFormatLocationHrefPeers(
  next: BindFormatLocationHrefPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Xz` / internal `W2i`.
 */
export function bindFormatLocationHref() {
  if (peers == null) {
    throw new Error("bindFormatLocationHref peers are not configured");
  }

  return peers.e(() => {
    ((H2i = peers.c()),
      (U2i = peers.r(peers.o(), 1)),
      peers.Nw(),
      peers.R2i(),
      peers.fb(),
      peers.K_(),
      peers.Fh());
  });
}
