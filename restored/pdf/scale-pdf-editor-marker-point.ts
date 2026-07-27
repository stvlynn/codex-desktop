// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `tXs`) / export `vg`.

export type ScalePdfEditorMarkerPointPeers = {
  getLayerSize: (layer: unknown) => { width: number; height: number };
  clampX: (value: number, min: number, max: number) => number;
  clampY: (
    value: number,
    scale: number,
    windowHeight?: number,
    cap?: number,
  ) => number;
  maxX: (width: number, scale: number) => number;
  maxY: (height: number, scale: number, cap?: number) => number;
  defaultWindowHeight: number;
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
 * Scale a PDF editor marker point into a clamped layer position.
 */
export function scalePdfEditorMarkerPoint(args: {
  editorScale?: number;
  editorWindowHeight?: number;
  layer: unknown;
  markerPoint: { x: number; y: number };
  pageSize: { width: number; height: number };
}): { x: number; y: number } | null {
  if (peers == null) {
    throw new Error("ScalePdfEditorMarkerPoint peers are not configured");
  }
  const {
    editorScale = 1,
    editorWindowHeight = peers.defaultWindowHeight,
    layer,
    markerPoint,
    pageSize,
  } = args;
  if (layer == null || pageSize.width <= 0 || pageSize.height <= 0) return null;
  const layerSize = peers.getLayerSize(layer);
  if (layerSize.width <= 0 || layerSize.height <= 0) return null;
  const x = (markerPoint.x / pageSize.width) * layerSize.width;
  const y = (markerPoint.y / pageSize.height) * layerSize.height;
  const scale = Math.max(editorScale, 2 ** -52);
  const cap = Math.min(120, editorWindowHeight);
  const half = editorWindowHeight === peers.defaultWindowHeight ? 44 : cap;
  const mapY = (value: number) =>
    peers!.clampY(value, scale, editorWindowHeight, cap);
  const maxX = peers.maxX(layerSize.width, scale);
  const maxY = peers.maxY(layerSize.height, scale, cap);
  const centeredY = peers.clampX(y - (half * scale) / 2, 16, maxY);
  for (const candidateX of [x + 27, x - 27 - 294 * scale]) {
    if (candidateX >= 16 && candidateX <= maxX) {
      return { x: candidateX, y: mapY(centeredY) };
    }
  }
  const centeredX = peers.clampX(x - (294 * scale) / 2, 16, maxX);
  const below = y + 27;
  if (below <= maxY) return { x: centeredX, y: mapY(below) };
  return {
    x: centeredX,
    y: mapY(peers.clampX(y - 27 - cap * scale, 16, maxY)),
  };
}
