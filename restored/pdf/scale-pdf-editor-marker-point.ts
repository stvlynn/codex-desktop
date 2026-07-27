// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tXs`) / export `vg`.

export type ScalePdfEditorMarkerPointPeers = {
  $Ys: (...args: unknown[]) => unknown;
  aXs: (...args: unknown[]) => unknown;
  hXs: (...args: unknown[]) => unknown;
  iXs: (...args: unknown[]) => unknown;
  oXs: (...args: unknown[]) => unknown;
  rXs: (...args: unknown[]) => unknown;
};
let peers: ScalePdfEditorMarkerPointPeers | null = null;

/** Wire scalePdfEditorMarkerPoint peers once companions land. */
export function setScalePdfEditorMarkerPointPeers(
  next: ScalePdfEditorMarkerPointPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vg` / internal `tXs`.
 */
export function scalePdfEditorMarkerPoint({
  editorScale = 1,
  editorWindowHeight = peers.hXs,
  layer,
  markerPoint,
  pageSize,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("scalePdfEditorMarkerPoint peers are not configured");
  }
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  let a = peers.$Ys(layer);
  if (a.width <= 0 || a.height <= 0) return null;
  let o = (markerPoint.x / pageSize.width) * a.width,
    s = (markerPoint.y / pageSize.height) * a.height,
    c = Math.max(editorScale, 2.220446049250313e-16),
    l = Math.min(120, editorWindowHeight),
    u = editorWindowHeight === peers.hXs ? 44 : l,
    d = (e) => {
      return peers.aXs(e, c, editorWindowHeight, l);
    },
    f = peers.rXs(a.width, c),
    p = peers.iXs(a.height, c, l),
    m = peers.oXs(s - (u * c) / 2, 16, p),
    h = o + 27,
    g = o - 27 - 294 * c;
  for (let e of [h, g])
    if (e >= 16 && e <= f)
      return {
        x: e,
        y: d(m),
      };
  let _ = peers.oXs(o - (294 * c) / 2, 16, f),
    v = s + 27;
  return v <= p
    ? {
        x: _,
        y: d(v),
      }
    : {
        x: _,
        y: d(peers.oXs(s - 27 - l * c, 16, p)),
      };
}
