// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KD`) / export `S0`.

export type CloseSidePanelUnlessWindowResizePeers = {
  Iar: (...args: unknown[]) => unknown;
  Jar: (...args: unknown[]) => unknown;
  Qar: (...args: unknown[]) => unknown;
  Tp: (...args: unknown[]) => unknown;
  VD: (...args: unknown[]) => unknown;
  XD: (...args: unknown[]) => unknown;
  Xar: (...args: unknown[]) => unknown;
  Yar: (...args: unknown[]) => unknown;
  ZD: (...args: unknown[]) => unknown;
};
let peers: CloseSidePanelUnlessWindowResizePeers | null = null;

/** Wire closeSidePanelUnlessWindowResize peers once companions land. */
export function setCloseSidePanelUnlessWindowResizePeers(
  next: CloseSidePanelUnlessWindowResizePeers,
): void {
  peers = next;
}

/**
 * Bundle export `S0` / internal `KD`.
 */
export function closeSidePanelUnlessWindowResize(
  e: unknown,
  t: unknown,
  n: unknown = {},
) {
  if (peers == null) {
    throw new Error(
      "closeSidePanelUnlessWindowResize peers are not configured",
    );
  }
  if (!t && n.closeReason !== "window-resize" && e.get(peers.Xar)) {
    e.set(peers.ZD, false);
    e.set(peers.Yar, false);
    e.set(peers.VD, false);
    return;
  }
  n.closeReason !== "window-resize" && e.set(peers.Qar, null);
  e.set(peers.XD, t);
  let r = e.get(peers.Jar);
  if (
    (r.stop(),
    n.animate === false ? r.set(+!!t) : peers.Iar(r, t, e.get(peers.Tp)),
    t)
  ) {
    e.get(peers.Yar) && (e.set(peers.VD, true), e.set(peers.Yar, false));
    return;
  }
  e.set(peers.ZD, false);
  e.set(peers.Yar, n.restoreFullWidthOnNextOpen === true && e.get(peers.VD));
  e.set(peers.VD, false);
}
