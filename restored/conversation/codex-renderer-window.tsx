// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rge`) / export `Tgt`.

export type BindCodexRendererWindowPeers = {
  $he: (...args: unknown[]) => unknown;
  Qhe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ege: (...args: unknown[]) => unknown;
  nge: (...args: unknown[]) => unknown;
  tge: (...args: unknown[]) => unknown;
};

let peers: BindCodexRendererWindowPeers | null = null;

/** Wire bindCodexRendererWindow peers once companions land. */
export function setBindCodexRendererWindowPeers(
  next: BindCodexRendererWindowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tgt` / internal `rge`.
 */
export function bindCodexRendererWindow() {
  if (peers == null) {
    throw new Error("bindCodexRendererWindow peers are not configured");
  }

  return peers.e(() => {
    ((Qhe = {
      BATCH: `batch`,
      QUICK: `quick`,
    }),
      ($he = {
        [peers.Qhe.BATCH]: {
          defaultSubmitMode: `saved`,
          persistent: !0,
        },
        [peers.Qhe.QUICK]: {
          defaultSubmitMode: `direct`,
          persistent: !1,
        },
      }),
      (ege = 25),
      (tge = peers.ege / 2),
      (nge = {
        width: 344,
        height: 344,
      }));
  });
}
