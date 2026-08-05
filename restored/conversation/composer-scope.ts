// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KM`) / export `PY`.

export type BindComposerScopePeers = {
  GM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  WM: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  tT: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindComposerScopePeers | null = null;

/** Wire bindComposerScope peers once companions land. */
export function setBindComposerScopePeers(next: BindComposerScopePeers): void {
  peers = next;
}

/**
 * Bundle export `PY` / internal `KM`.
 */
export function bindComposerScope() {
  if (peers == null) {
    throw new Error("bindComposerScope peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.tT(),
      peers.gT(),
      peers.oT(),
      (GM = peers.wa(`ComposerScope`, {
        key: (e) =>
          peers.e.kind === `new` &&
          peers.e.entrypoint === `home` &&
          peers.e.focusComposerNonce != null
            ? `${peers.WM(peers.e)}:${peers.e.focusComposerNonce}`
            : peers.WM(peers.e),
        parent: peers.hT,
        retain: {
          max: 100,
        },
      })));
  });
}
