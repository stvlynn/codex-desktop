// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: image mime / size / object-fit shared types.

export type ImagePixelSize = {
  width: number;
  height: number;
};

/** OOXML-style percent rect in 1e5 units (0 … 100000). */
export type PercentRect = {
  l: number;
  t: number;
  r: number;
  b: number;
};

export type ObjectFitRects = {
  srcRect: PercentRect;
  stretchFillRect: PercentRect;
};

export type ContainLayout = {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
};
