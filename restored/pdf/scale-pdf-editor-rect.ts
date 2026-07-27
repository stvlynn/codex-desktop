// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nXs`) / export `_g`.

export type ScalePdfEditorRectPeers = {
  $Ys: (...args: unknown[]) => unknown;
  aXs: (...args: unknown[]) => unknown;
  iXs: (...args: unknown[]) => unknown;
  lXs: (...args: unknown[]) => unknown;
  oXs: (...args: unknown[]) => unknown;
  rXs: (...args: unknown[]) => unknown;
};
let peers: ScalePdfEditorRectPeers | null = null;

/** Wire scalePdfEditorRect peers once companions land. */
export function setScalePdfEditorRectPeers(
  next: ScalePdfEditorRectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_g` / internal `nXs`.
 */
export function scalePdfEditorRect({
  editorScale = 1,
  layer,
  pageSize,
  rect,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("scalePdfEditorRect peers are not configured");
  }
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  let i = peers.$Ys(layer);
  if (i.width <= 0 || i.height <= 0) return null;
  let a = (rect.y / pageSize.height) * i.height,
    o = ((rect.x + rect.width) / pageSize.width) * i.width,
    s = ((rect.y + rect.height) / pageSize.height) * i.height,
    c = Math.max(editorScale, 2.220446049250313e-16),
    l = peers.rXs(i.width, c),
    u = peers.iXs(i.height, c),
    d = s + peers.lXs,
    f = a - peers.lXs - 120 * c,
    p = d <= u ? d : peers.oXs(f, 16, u);
  return {
    x: peers.oXs(o - 294 * c, 16, l),
    y: peers.aXs(p, c),
  };
}
