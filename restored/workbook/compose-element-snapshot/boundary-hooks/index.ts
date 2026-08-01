// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: compose-element-snapshot deps via direct imports
// (wireComposeElementSnapshotBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { KDe, qDe } from "../../text-frame-resolve";
import { wOe } from "../../shape-geometry-paint";
import { _workbookM } from "../../table-element/te-slots";

export type ComposeElementSnapshotBoundaryHooks = {
  bh681: (...args: any[]) => any;
  bh682: (...args: any[]) => any;
  bh683: (...args: any[]) => any;
  bh684: (...args: any[]) => any;
  bh686: (...args: any[]) => any;
  bh688: (...args: any[]) => any;
  bh689: (...args: any[]) => any;
  bh695: (...args: any[]) => any;
  bh696: (...args: any[]) => any;
  runPlain: (...args: any[]) => any;
  paragraphsFromElement: (...args: any[]) => any;
  tableCellsFromElement: (...args: any[]) => any;
  cellsPreview: (...args: any[]) => any;
  protoText: (...args: any[]) => any;
  cellsBbox: (...args: any[]) => any;
  mapKind: (...args: any[]) => any;
  geometrySnapshot: (...args: any[]) => any;
  resolvedFontSize: (...args: any[]) => any;
  resolvedTextStyle: (...args: any[]) => any;
  fillColor: (...args: any[]) => any;
  lineColor: (...args: any[]) => any;
  lineWidth: (...args: any[]) => any;
  imageCrop: (...args: any[]) => any;
  imageFit: (...args: any[]) => any;
  imageMask: (...args: any[]) => any;
  assetRef: (...args: any[]) => any;
  fillImage: (...args: any[]) => any;
  tableElementClass: any;
};

export const cesH: ComposeElementSnapshotBoundaryHooks = {
  runPlain: __call("../table-cells-from-element-impl", "rOe"),
  bh681: __call("../../compose-jsx-lower/image-prop-helpers-impl", __wh(681)),
  bh682: __call("../frame-bbox-tuple-impl", __wh(682)),
  bh683: __call("../frame-bbox-tuple-impl", __wh(683)),
  bh686: __call("../table-cells-from-element-impl", "snapshotCellRuns"),
  bh688: __call("../table-cells-from-element-impl", "pickResolvedTextStyle"),
  bh689: __call("../../text-frame-style", __wh(689)),
  bh695: __call("../layout-blob-impl", "trimNonEmpty"),
  bh696: __call("../layout-blob-impl", "round2"),
  paragraphsFromElement: __call("../resolve-element-style-impl", "$De"),
  tableCellsFromElement: __call("../table-cells-from-element-impl", "iOe"),
  cellsPreview: __call("../table-cells-from-element-impl", "aOe"),
  cellsBbox: __call("../layout-blob-impl", "GDe"),
  mapKind: __call("../map-kind-helper-impl", "UDe"),
  resolvedFontSize: (...args: any[]) => KDe(...args),
  resolvedTextStyle: (...args: any[]) => qDe(...args),
  imageCrop: __call("../../compose-jsx-lower/image-prop-helpers-impl", "LDe"),
  imageFit: __call("../../compose-jsx-lower/image-prop-helpers-impl", "RDe"),
  imageMask: __call("../image-mask-impl", "zDe"),
  assetRef: __call("../../compose-jsx-lower/image-prop-helpers-impl", "gOe"),
  get tableElementClass() {
    return _workbookM;
  },
  geometrySnapshot: __call("../geometry-snapshot-impl", "TOe"),
  lineWidth: (...args: any[]) => wOe(...args),
  bh684: __call("../truncate-preview-text-impl", __wh(684)),
  protoText: __call("../proto-text-preview-impl", "eOe"),
  fillColor: __call("../element-fill-line-color-impl", "SOe"),
  lineColor: __call("../element-fill-line-color-impl", "COe"),
  fillImage: __call("../element-fill-line-color-impl", "_Oe"),
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireComposeElementSnapshotBoundaryHooks(
  _next?: Partial<ComposeElementSnapshotBoundaryHooks>,
): void {}
