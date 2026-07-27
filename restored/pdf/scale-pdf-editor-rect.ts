// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `nXs`) / export `_g`.

export type ScalePdfEditorRectPeers = {
  getLayerSize: (layer: unknown) => { width: number; height: number };
  clampX: (value: number, min: number, max: number) => number;
  clampY: (value: number, scale: number) => number;
  maxX: (width: number, scale: number) => number;
  maxY: (height: number, scale: number) => number;
  edgePadding: number;
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
 * Scale a PDF editor rect from page space into layer space.
 */
export function scalePdfEditorRect(args: {
  editorScale?: number;
  layer: unknown;
  pageSize: { width: number; height: number };
  rect: { x: number; y: number; width: number; height: number };
}): { x: number; y: number } | null {
  if (peers == null) {
    throw new Error("ScalePdfEditorRect peers are not configured");
  }
  const { editorScale = 1, layer, pageSize, rect } = args;
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = peers.getLayerSize(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;
  const top = (rect.y / pageSize.height) * layerSize.height;
  const right = ((rect.x + rect.width) / pageSize.width) * layerSize.width;
  const bottom = ((rect.y + rect.height) / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, 2 ** -52);
  const maxX = peers.maxX(layerSize.width, scale);
  const maxY = peers.maxY(layerSize.height, scale);
  const below = bottom + peers.edgePadding;
  const above = top - peers.edgePadding - 120 * scale;
  const yBase = below <= maxY ? below : peers.clampX(above, 16, maxY);
  return {
    x: peers.clampX(right - 294 * scale, 16, maxX),
    y: peers.clampY(yBase, scale),
  };
}
