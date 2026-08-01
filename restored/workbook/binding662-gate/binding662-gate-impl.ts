// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Binding662 reverse-map gate + range/pivot ensure stubs.
// Legacy _C / Binding675 / Cme / Tme / Eme / _u / gae…Binding661.
// Stage-3 wave-155.

import { esmInit } from "../../runtime/rolldown-runtime";
import { b662H } from "./boundary-hooks";

export let workbookBinding369: any;
export const _u = esmInit(() => {
  b662H.ensureUDeps();
  workbookBinding369 = b662H.getPivotTableClass();
});

export const gae = esmInit(() => {
  b662H.ensureGaeDeps();
});
export const vae = esmInit(() => {
  b662H.ensureVaeDeps();
});
export const workbookBinding412 = esmInit(() => {
  b662H.ensureBinding412Deps();
});
export const Mde = esmInit(() => {
  b662H.ensureMdeDeps();
});
export const workbookBinding661 = esmInit(() => {
  b662H.ensureBinding661Deps();
});

export let workbookBinding662: Record<string, string>;
export const _C = esmInit(() => {
  b662H.ensureCDeps();
  workbookBinding662 = Object.entries(
    b662H.getShapeGeometryNameToProto(),
  ).reduce(
    (accumulator: Record<string, string>, [k, v]) => (
      v in accumulator || (accumulator[v] = k),
      accumulator
    ),
    {},
  );
});

export let workbookBinding669: WeakMap<object, unknown>;
export let workbookBinding670: number;
export let workbookBinding671: number;
export let workbookBinding672: unknown;
export let workbookBinding673: number;
export let workbookBinding674: number;
export const workbookBinding675 = esmInit(() => {
  b662H.ensureBinding675Deps();
  workbookBinding669 = b662H.getWorksheetOwnerMap();
  workbookBinding670 = b662H.getExcelEpochUtcMs();
  workbookBinding671 = b662H.getMsPerDay();
  workbookBinding672 = b662H.getRangeClass();
  workbookBinding673 = b662H.getMaxWorksheetRows();
  workbookBinding674 = b662H.getMaxWorksheetCols();
});

export let workbookBinding676: any;
export const Cme = esmInit(() => {
  b662H.ensureCmeDeps();
  b662H.wirePivotCachesHooks();
  workbookBinding676 = b662H.getPivotCachesClass();
});

export let workbookBinding683: any;
export const Tme = esmInit(() => {
  b662H.ensureTmeDeps();
  workbookBinding683 = b662H.getSlicerClass();
});

export let workbookBinding684: any;
export const Eme = esmInit(() => {
  b662H.ensureEmeDeps();
  workbookBinding684 = b662H.getSlicersClass();
});

export const ensureBinding662Init = _C;
export const ensureRangeClusterInit = workbookBinding675;
export const ensurePivotCachesClusterInit = Cme;
export const ensureSlicerClusterInit = Tme;
export const ensureSlicersClusterInit = Eme;
export const ensurePivotTableClusterInit = _u;
