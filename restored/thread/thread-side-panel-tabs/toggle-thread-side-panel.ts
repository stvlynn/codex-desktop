// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o1o`) / export `SE`.

export type ToggleThreadSidePanelPeers = {
  JGi: (...args: unknown[]) => unknown;
  ZD: (...args: unknown[]) => unknown;
  c1o: (...args: unknown[]) => unknown;
  gwo: (...args: unknown[]) => unknown;
  qGi: (...args: unknown[]) => unknown;
  s1o: (...args: unknown[]) => unknown;

  eO: any;
};

let peers: ToggleThreadSidePanelPeers | null = null;

/** Wire toggleThreadSidePanel peers once companions land. */
export function setToggleThreadSidePanelPeers(
  next: ToggleThreadSidePanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `SE` / internal `o1o`.
 */
export function toggleThreadSidePanel(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("toggleThreadSidePanel peers are not configured");
  }
  let n = e.get(peers.ZD);
  if (!(t ?? !n)) {
    (n && peers.gwo(e, peers.s1o(e)), peers.JGi(e));
    return;
  }
  if (e.get(peers.eO.tabs$).length === 0) {
    (peers.qGi(e, {
      allowEmpty: !0,
    }),
      peers.c1o(e, n));
    return;
  }
  (peers.qGi(e, {
    activateFallbackTab: !0,
  }),
    peers.c1o(e, n));
}
