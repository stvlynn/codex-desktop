// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sol`) / export `el`.

export type BindDeferredelPeers = {
  Arl: (...args: unknown[]) => unknown;
  Gil: (...args: unknown[]) => unknown;
  MKn: (...args: unknown[]) => unknown;
  Ral: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Wrl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  aal: (...args: unknown[]) => unknown;
  aol: (...args: unknown[]) => unknown;
  bal: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  frl: (...args: unknown[]) => unknown;
  nil: (...args: unknown[]) => unknown;
  oKn: (...args: unknown[]) => unknown;
  ool: (...args: unknown[]) => unknown;
  pil: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  trl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredelPeers | null = null;

/** Wire bindDeferredel peers once companions land. */
export function setBindDeferredelPeers(next: BindDeferredelPeers): void {
  peers = next;
}

/**
 * Bundle export `el` / internal `sol`.
 */
export function bindDeferredel() {
  if (peers == null) {
    throw new Error("bindDeferredel peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.oKn(),
      peers.MKn(),
      peers.trl(),
      peers.frl(),
      peers.Arl(),
      peers.Wrl(),
      peers.nil(),
      peers.pil(),
      peers.Gil(),
      peers.aal(),
      peers.bal(),
      peers.Ral(),
      (aol = 80),
      (ool = peers.sl({
        title: peers
          .X()
          .transform((e) => peers.e.trim().replace(/\s+/g, ` `))
          .pipe(peers.X().min(1))
          .optional(),
      })));
  });
}
