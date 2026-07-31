// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: preset-shape formula / text-frame types.

export type FormulaEnv = Record<string, number>;

export type PresetShapeRect = {
  l?: string;
  t?: string;
  r?: string;
  b?: string;
};

export type PresetShapeDefinition = {
  rect?: PresetShapeRect;
  avLst?: Record<string, string>;
  gdLst?: Record<string, string>;
  [key: string]: unknown;
};

export type PresetShapeRegistry = Record<string, PresetShapeDefinition>;

export type BboxPx = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type AdjustmentEntry = {
  name?: string;
  formula?: string;
};

export type ShapeTextFrameSource = {
  geometry?: string;
  preset?: PresetShapeDefinition;
  adjustmentList?: AdjustmentEntry[];
};

export type ShapeTextFrameElement = {
  shape?: {
    geometry?: string;
    adjustmentList?: AdjustmentEntry[];
  } | null;
};
