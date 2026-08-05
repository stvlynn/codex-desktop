// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `b3i`) / export `vz`.

export type BindBindDeferredvzPeers = {
  Ez: (...args: unknown[]) => unknown;
  Fb: (...args: unknown[]) => unknown;
  G$n: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  _3i: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g3i: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ul: (...args: unknown[]) => unknown;
  v3i: (...args: unknown[]) => unknown;
  y3i: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredvzPeers | null = null;

/** Wire bindBindDeferredvz peers once companions land. */
export function setBindBindDeferredvzPeers(
  next: BindBindDeferredvzPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vz` / internal `b3i`.
 */
export function bindBindDeferredvz() {
  if (peers == null) {
    throw new Error("bindBindDeferredvz peers are not configured");
  }

  return peers.e(() => {
    ((g3i = peers.c()),
      peers.Hb(),
      peers.G$n(),
      (Ez = peers.r(peers.o(), 1)),
      peers.Sl(),
      peers.Kb(),
      (_3i = 1500),
      (v3i = new WeakSet()),
      (y3i = peers
        .sl({
          pluginDirectoryEntrypoint: peers
            .ul([
              peers.ml(peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT),
              peers.ml(peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS),
              peers.ml(peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR),
              peers.ml(peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER),
            ])
            .optional(),
        })
        .passthrough()));
  });
}
