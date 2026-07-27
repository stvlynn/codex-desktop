// Restored from ref/webview/assets/chunk-BSJP7CBP-DFvoyeko.js
// Mermaid diagram line offset helpers with label transform (alt bundle).

import { esmInit } from "../runtime/rolldown-runtime";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
export type MermaidPoint = {
  x: number;
  y: number;
};
export type MermaidPointInput = MermaidPoint | [number, number];
export type ArrowMarkerLengths = Record<string, number>;
export type ArrowHeadOffsets = {
  arrow_point: number;
  arrow_cross: number;
  arrow_circle: number;
};
export type ArrowEdgeConfig = {
  arrowTypeStart: string;
  arrowTypeEnd: string;
};
export type LineOffsetAxisFn = (
  point: MermaidPointInput,
  index: number,
  path: MermaidPointInput[],
) => number;
export type LineOffsetFunctions = {
  x: LineOffsetAxisFn;
  y: LineOffsetAxisFn;
};
export type LabelBounds = {
  x?: number;
  y?: number;
  width: number;
  height: number;
};
type DeltaAndAngle = {
  angle: number;
  deltaX: number;
  deltaY: number;
};
const pointTransformer = defineFunctionName(
  (point: MermaidPointInput): MermaidPoint =>
    Array.isArray(point)
      ? {
          x: point[0],
          y: point[1],
        }
      : point,
  "pointTransformer",
);
function calculateDeltaAndAngle(
  from: MermaidPointInput | undefined,
  to: MermaidPointInput | undefined,
): DeltaAndAngle {
  if (from === undefined || to === undefined) {
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  }
  const start = pointTransformer(from);
  const end = pointTransformer(to);
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  return {
    angle: Math.atan(deltaY / deltaX),
    deltaX,
    deltaY,
  };
}
defineFunctionName(calculateDeltaAndAngle, "calculateDeltaAndAngle");
export const computeLabelTransform = defineFunctionName(
  (bounds: LabelBounds, centered?: boolean): string => {
    if (centered) {
      return `translate(${-bounds.width / 2}, ${-bounds.height / 2})`;
    }
    const x = bounds.x ?? 0;
    const y = bounds.y ?? 0;
    return `translate(${-(x + bounds.width / 2)}, ${-(y + bounds.height / 2)})`;
  },
  "computeLabelTransform",
);
export const markerLengths: ArrowMarkerLengths = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5,
};
export const arrowHeadOffsets: ArrowHeadOffsets = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5,
};
function computeXOffset(
  edge: ArrowEdgeConfig,
  point: MermaidPointInput,
  index: number,
  path: MermaidPointInput[],
): number {
  let offset = 0;
  const horizontalDirection =
    pointTransformer(path[0]).x < pointTransformer(path[path.length - 1]).x
      ? "left"
      : "right";
  if (index === 0 && Object.hasOwn(markerLengths, edge.arrowTypeStart)) {
    const { angle, deltaX } = calculateDeltaAndAngle(path[0], path[1]);
    offset =
      markerLengths[edge.arrowTypeStart]! *
      Math.cos(angle) *
      (deltaX >= 0 ? 1 : -1);
  } else if (
    index === path.length - 1 &&
    Object.hasOwn(markerLengths, edge.arrowTypeEnd)
  ) {
    const { angle, deltaX } = calculateDeltaAndAngle(
      path[path.length - 1],
      path[path.length - 2],
    );
    offset =
      markerLengths[edge.arrowTypeEnd]! *
      Math.cos(angle) *
      (deltaX >= 0 ? 1 : -1);
  }
  const distToEndX = Math.abs(
    pointTransformer(point).x - pointTransformer(path[path.length - 1]).x,
  );
  const distToEndY = Math.abs(
    pointTransformer(point).y - pointTransformer(path[path.length - 1]).y,
  );
  const distToStartX = Math.abs(
    pointTransformer(point).x - pointTransformer(path[0]).x,
  );
  const distToStartY = Math.abs(
    pointTransformer(point).y - pointTransformer(path[0]).y,
  );
  const startMarker = markerLengths[edge.arrowTypeStart];
  const endMarker = markerLengths[edge.arrowTypeEnd];
  if (distToEndX < endMarker && distToEndX > 0 && distToEndY < endMarker) {
    let adjustment = endMarker + 1 - distToEndX;
    adjustment *= horizontalDirection === "right" ? -1 : 1;
    offset -= adjustment;
  }
  if (
    distToStartX < startMarker &&
    distToStartX > 0 &&
    distToStartY < startMarker
  ) {
    let adjustment = startMarker + 1 - distToStartX;
    adjustment *= horizontalDirection === "right" ? -1 : 1;
    offset += adjustment;
  }
  return pointTransformer(point).x + offset;
}
function computeYOffset(
  edge: ArrowEdgeConfig,
  point: MermaidPointInput,
  index: number,
  path: MermaidPointInput[],
): number {
  let offset = 0;
  const verticalDirection =
    pointTransformer(path[0]).y < pointTransformer(path[path.length - 1]).y
      ? "down"
      : "up";
  if (index === 0 && Object.hasOwn(markerLengths, edge.arrowTypeStart)) {
    const { angle, deltaY } = calculateDeltaAndAngle(path[0], path[1]);
    offset =
      markerLengths[edge.arrowTypeStart]! *
      Math.abs(Math.sin(angle)) *
      (deltaY >= 0 ? 1 : -1);
  } else if (
    index === path.length - 1 &&
    Object.hasOwn(markerLengths, edge.arrowTypeEnd)
  ) {
    const { angle, deltaY } = calculateDeltaAndAngle(
      path[path.length - 1],
      path[path.length - 2],
    );
    offset =
      markerLengths[edge.arrowTypeEnd]! *
      Math.abs(Math.sin(angle)) *
      (deltaY >= 0 ? 1 : -1);
  }
  const distToEndY = Math.abs(
    pointTransformer(point).y - pointTransformer(path[path.length - 1]).y,
  );
  const distToEndX = Math.abs(
    pointTransformer(point).x - pointTransformer(path[path.length - 1]).x,
  );
  const distToStartY = Math.abs(
    pointTransformer(point).y - pointTransformer(path[0]).y,
  );
  const distToStartX = Math.abs(
    pointTransformer(point).x - pointTransformer(path[0]).x,
  );
  const startMarker = markerLengths[edge.arrowTypeStart];
  const endMarker = markerLengths[edge.arrowTypeEnd];
  if (distToEndY < endMarker && distToEndY > 0 && distToEndX < endMarker) {
    let adjustment = endMarker + 1 - distToEndY;
    adjustment *= verticalDirection === "up" ? -1 : 1;
    offset -= adjustment;
  }
  if (
    distToStartY < startMarker &&
    distToStartY > 0 &&
    distToStartX < startMarker
  ) {
    let adjustment = startMarker + 1 - distToStartY;
    adjustment *= verticalDirection === "up" ? -1 : 1;
    offset += adjustment;
  }
  return pointTransformer(point).y + offset;
}
export const getLineFunctionsWithOffset = defineFunctionName(
  (edge: ArrowEdgeConfig): LineOffsetFunctions => ({
    x: defineFunctionName(
      (point, index, path) => computeXOffset(edge, point, index, path),
      "x",
    ),
    y: defineFunctionName(
      (point, index, path) => computeYOffset(edge, point, index, path),
      "y",
    ),
  }),
  "getLineFunctionsWithOffset",
);

/** Rolldown ESM init thunk (bundle export `r`). */
export const initMermaidLineOffsetAltChunk = esmInit(() => {
  initDayjsLoggerRuntime();
});
