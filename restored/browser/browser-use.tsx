// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yw`) / export `a5`.

export type BindBrowserUsePeers = {
  BKn: (...args: unknown[]) => unknown;
  Gw: (...args: unknown[]) => unknown;
  JGn: (...args: unknown[]) => unknown;
  JKn: (...args: unknown[]) => unknown;
  KKn: (...args: unknown[]) => unknown;
  MKn: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  YKn: (...args: unknown[]) => unknown;
  cKn: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  oKn: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  qKn: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindBrowserUsePeers | null = null;

/** Wire bindBrowserUse peers once companions land. */
export function setBindBrowserUsePeers(next: BindBrowserUsePeers): void {
  peers = next;
}

/**
 * Bundle export `a5` / internal `Yw`.
 */
export function bindBrowserUse() {
  if (peers == null) {
    throw new Error("bindBrowserUse peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers.JGn(), peers.Gw(), peers.oKn(), peers.cKn(), peers.MKn(), peers.BKn(), KKn = `browser-use`, qKn = `browser-use:chrome`, JKn = `computer-use`, YKn = peers.sl({
      "codex/toolSurface": peers.dl(`kind`, [peers.sl({
        kind: peers.ml(`browserUse`),
        backend: peers.pl([`chrome`, `iab`, `cdp`])
      }), peers.sl({
        kind: peers.ml(`computerUse`),
        app: peers.dl(`kind`, [peers.sl({
          kind: peers.ml(`appId`),
          appId: peers.X().min(1)
        }), peers.sl({
          kind: peers.ml(`displayName`),
          displayName: peers.X().min(1)
        })]).nullable()
      })])
    });
  });
}
