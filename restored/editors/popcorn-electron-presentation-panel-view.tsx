// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xv`) / export `vrt`.

export type BindPopcornElectronPresentationPanelPeers = {
  fVt: (...args: unknown[]) => unknown;
  mVt: (...args: unknown[]) => unknown;
  vVt: (...args: unknown[]) => unknown;
};
let peers: BindPopcornElectronPresentationPanelPeers | null = null;

/** Wire bindPopcornElectronPresentationPanel peers once companions land. */
export function setBindPopcornElectronPresentationPanelPeers(
  next: BindPopcornElectronPresentationPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vrt` / internal `Xv`.
 */
export const bindPopcornElectronPresentationPanel = (e: unknown) => {
  if (peers == null) {
    throw new Error(
      "bindPopcornElectronPresentationPanel peers are not configured",
    );
  }
  let { collisionRect, droppableRects, droppableContainers } = e,
    i = peers.vVt(collisionRect, collisionRect.left, collisionRect.top),
    a = [];
  for (let e of droppableContainers) {
    let { id } = e,
      r = droppableRects.get(id);
    if (r) {
      let n = peers.fVt(peers.vVt(r), i);
      a.push({
        id,
        data: {
          droppableContainer: e,
          value: n,
        },
      });
    }
  }
  return a.sort(peers.mVt);
};
