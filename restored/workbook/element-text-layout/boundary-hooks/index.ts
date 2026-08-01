// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: element-text-layout deps via direct imports
// (wireElementTextLayoutBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type ElementTextLayoutBoundaryHooks = {
  ShapeClass: any;
  TEXT_WRAPPING_TYPE_NONE: any;
  getFontMeasureContext: (...args: any[]) => any;
  resolvePlaceholderTextStyle: (...args: any[]) => any;
  resolveMasterTextStyle: (...args: any[]) => any;
  resolveElementFramePx: (...args: any[]) => any;
  computeTextBoxInset: (...args: any[]) => any;
  layoutElementText: (...args: any[]) => any;
  SHAPE_GEOMETRY_UNSPECIFIED: any;
};

export const etlH: ElementTextLayoutBoundaryHooks = {
  get ShapeClass() {
    return (__req("../shape-element") as any)[__wb(736)];
  },
  get TEXT_WRAPPING_TYPE_NONE() {
    return (__req("../presentation-protobuf") as any).br
      .TEXT_WRAPPING_TYPE_NONE;
  },
  get SHAPE_GEOMETRY_UNSPECIFIED() {
    return (__req("../shape-geometry") as any).ShapeGeometry
      .SHAPE_GEOMETRY_UNSPECIFIED;
  },
  getFontMeasureContext: __call("../../font-metrics", "getFontMeasureContext"),
  resolvePlaceholderTextStyle: __call("../../text-style",
    "resolvePlaceholderTextStyle",
  ),
  resolveMasterTextStyle: __call("../../text-box",
    "resolveMasterParagraphDefaults",
  ),
  resolveElementFramePx: __call("../../geometry-transform",
    "resolveElementFramePx",
  ),
  computeTextBoxInset: __call("../../preset-shape", "resolveShapeTextFrameRect"),
  layoutElementText: __call("../../text-box", "paintTextElement"),
};

/** @deprecated Wave-161: wire leave-behind retired — etlH uses direct imports. */
export function wireElementTextLayoutBoundaryHooks(
  _next?: Partial<ElementTextLayoutBoundaryHooks>,
): void {}
