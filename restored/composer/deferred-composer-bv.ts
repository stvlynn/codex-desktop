// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uR`) / export `BV`.

export type DeferredComposerBVPeers = {
  BGi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IGi: (...args: unknown[]) => unknown;
  Kj: (...args: unknown[]) => unknown;
  LGi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  PGi: (...args: unknown[]) => unknown;
  RGi: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  VGi: (...args: unknown[]) => unknown;
  aR: (...args: unknown[]) => unknown;
  cR: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  iR: (...args: unknown[]) => unknown;
  lR: (...args: unknown[]) => unknown;
  oR: (...args: unknown[]) => unknown;
  sR: (...args: unknown[]) => unknown;
  zGi: (...args: unknown[]) => unknown;
};

let peers: DeferredComposerBVPeers | null = null;

/** Wire deferredComposerBV peers once companions land. */
export function setDeferredComposerBVPeers(
  next: DeferredComposerBVPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BV` / internal `uR`.
 */
export function deferredComposerBV() {
  if (peers == null) {
    throw new Error("deferredComposerBV peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Kj(),
      peers.gT(),
      (IGi = `--right-panel-composer-overlay-height`),
      (LGi = `--right-panel-composer-overlay-reserve`),
      (iR = `var(${peers.LGi}, 1.5rem)`),
      (RGi = 120),
      (zGi = new WeakMap()),
      (aR = peers.Ta(peers.hT, 0)),
      (oR = peers.Ta(peers.hT, 0)),
      (sR = peers.Ta(peers.hT, peers.PGi(!0))),
      (cR = peers.Ta(peers.hT, !0)),
      (lR = peers.Ta(peers.hT, null)),
      (BGi = peers.Ta(peers.hT, {
        browserTabId: null,
        isAtDocumentBottom: !1,
      })),
      (VGi = peers.Ma(
        peers.hT,
        ({ get: e }) => peers.e(peers.cR) && peers.e(peers.lR) == null,
      )));
  });
}
