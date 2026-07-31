// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: path-geometry shared types.

export type Point2D = { x: number; y: number };

export type SizeRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PathCommandPoint = {
  cmd: string;
  x: number;
  y: number;
};

export type AxisAlignedBBox = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

/** 0=top, 1=left, 2=bottom, 3=right */
export type RectSide = 0 | 1 | 2 | 3;

export type EdgeHit = {
  point: Point2D;
  normal: Point2D;
};
