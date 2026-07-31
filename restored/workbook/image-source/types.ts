// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image-source shared types.

export type RoundRectAdjInput = {
  widthPx: number;
  heightPx: number;
  radiusPx: number;
};

export type ShapeAdjustment = {
  name: string;
  formula: string;
};

export type ParsedDataUrl = {
  data: Uint8Array;
  contentType: string;
};

export type ImageAssetPayload = {
  contentType?: string;
  prompt?: string;
  data?: Uint8Array;
  uri?: string;
};

export type ImageCropFractions = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export type ImageOptionsBag = Record<string, unknown> & {
  alt?: string;
  fit?: string;
  contentType?: string;
  position?: Record<string, unknown>;
  frame?: Record<string, unknown>;
  crop?: Record<string, unknown>;
  geometry?: string;
  borderRadius?: number | string;
  prompt?: string;
  path?: string;
  uri?: string;
  dataUrl?: string;
  blob?: ArrayBuffer | Uint8Array;
  data?: Uint8Array;
};
