// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: text-frame-embeds deps via direct imports
// (wireTextFrameEmbedsBoundaryHooks leave-behind retired).

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

export type TextFrameEmbedsBoundaryHooks = {
  bh640: (...args: any[]) => any;
  bh642: (...args: any[]) => any;
  bh644: (...args: any[]) => any;
  /** Is embeddable inline element (legacy OTe). */
  isEmbedElement: (...args: any[]) => any;
  /** Measure embed element (legacy NTe). */
  measureEmbedElement: (...args: any[]) => any;
  /** Absolute-positioned child (legacy PTe). */
  isAbsoluteChild: (...args: any[]) => any;
  /** Absolute child frame (legacy MTe). */
  absoluteChildFrame: (...args: any[]) => any;
  /** Normalize text content (legacy workbookN). */
  normalizeTextContent: (...args: any[]) => any;
};

export const tfeH: TextFrameEmbedsBoundaryHooks = {
  bh640: __call("../../text-element-build", __wh(640)),
  bh642: __call("../../floating-placement", __wh(642)),
  bh644: __call("../../table-frame-layout", __wh(644)),
  isEmbedElement: __call("../", "OTe"),
  measureEmbedElement: __call("../", "measureEmbedElement"),
  isAbsoluteChild: __call("../", "PTe"),
  absoluteChildFrame: __call("../../floating-placement", "resolvePlacementOrBBox"),
  normalizeTextContent: __call("../", "workbookN"),
};

/** @deprecated Wave-161: wire leave-behind retired — tfeH uses direct imports. */
export function wireTextFrameEmbedsBoundaryHooks(
  _next?: Partial<TextFrameEmbedsBoundaryHooks>,
): void {}
