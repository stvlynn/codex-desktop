// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: preset text-frame rect resolver (h296/h297 + Lue).

import { lookupPresetShapeDefinition } from "./plugin-slots";
import { evalShapeFormula } from "./shape-formula";
import { evalPresetGuides } from "./evaluate-guides";
import type {
  AdjustmentEntry,
  BboxPx,
  FormulaEnv,
  ShapeTextFrameElement,
  ShapeTextFrameSource,
} from "./types";

/** Legacy Lue — adjustmentList → name→formula map. */
export function adjustmentListToMap(
  list: AdjustmentEntry[] | null | undefined,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const entry of list ?? []) {
    if (entry.name !== undefined && entry.formula !== undefined) {
      out[entry.name] = entry.formula;
    }
  }
  return out;
}

/** Legacy h297 — evaluate guide expr or fall back to default. */
export function evalGuideOrDefault(
  formula: string | undefined,
  env: FormulaEnv,
  fallback: number,
): number {
  return formula === undefined ? fallback : evalShapeFormula(formula, env);
}

export type ResolveShapeTextFrameRectArgs = {
  element?: ShapeTextFrameElement | null;
  bboxPx: BboxPx;
  source?: ShapeTextFrameSource | null;
};

/** Legacy h296 — resolve shape text-frame rect inside bbox. */
export function resolveShapeTextFrameRect(
  args: ResolveShapeTextFrameRectArgs,
): BboxPx {
  const { element, bboxPx, source } = args;
  const shape = element?.shape;
  const geometry = source?.geometry ?? shape?.geometry;
  const preset =
    source?.preset ??
    (geometry === undefined
      ? undefined
      : lookupPresetShapeDefinition(geometry));
  const rect = preset?.rect;
  if (!rect) return bboxPx;
  const env = evalPresetGuides(
    preset!,
    bboxPx.width,
    bboxPx.height,
    adjustmentListToMap(source?.adjustmentList ?? shape?.adjustmentList),
  );
  const left = evalGuideOrDefault(rect.l, env, 0);
  const top = evalGuideOrDefault(rect.t, env, 0);
  const right = evalGuideOrDefault(rect.r, env, bboxPx.width);
  const bottom = evalGuideOrDefault(rect.b, env, bboxPx.height);
  const width = right - left;
  const height = bottom - top;
  return !Number.isFinite(left) ||
    !Number.isFinite(top) ||
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
    ? bboxPx
    : {
        x: bboxPx.x + left,
        y: bboxPx.y + top,
        width,
        height,
      };
}
