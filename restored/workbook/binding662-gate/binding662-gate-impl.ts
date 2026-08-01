// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Binding662 reverse-map gate + range/pivot ensure stubs.
// Legacy _C / Binding675 / Cme / Tme / Eme / _u / gae…Binding661.
// Stage-3 wave-156: direct imports (wire leave-behind removed).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { wr, Qt } from "../presentation-protobuf";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { workbookEt } from "../emu-units";
import {
  ensureOutlineDashMapInit as rae,
  ensureShadowCssParseInit as workbookBinding411,
} from "../text-style";
import {
  ensureWorkbookColorInit as workbookBinding383,
  ensurePatternFillInit as Hie,
} from "../theme-color";
import {
  ensureGradientFillParseInit,
  ensureFillInit as workbookWt,
} from "../fill";
import {
  ensureChartProtoNameMapsInit as workbookBinding404,
  shapeGeometryNameToProto as workbookBinding393,
} from "../chart-proto-name-maps";
import {
  ensureBorderRadiusTokensInit as _de,
  ensureShapeUtilityInit as workbookBinding655,
} from "../shape-utility";
import { ensureImageElementInit } from "../image-element";
import { ensureRangeFormatInit as Yle } from "../range-format";
import { ensureConditionalFormatInit as wpe } from "../conditional-format";
import { ensureDataValidationInit as Bpe } from "../data-validation";
import { ensureFormulaInit as workbookF } from "../formula";
import { ensureFormulaArrayInit as $u } from "../formula-array";
import { ensureRangeFillInit as hme } from "../range-fill";
import {
  Range,
  ensureRangeInit,
  EXCEL_EPOCH_UTC_MS,
  MS_PER_DAY,
  MAX_WORKSHEET_ROWS,
  MAX_WORKSHEET_COLS,
} from "../range";
import { getWorksheetOwnerMap } from "../worksheet-attachment";
import {
  ensurePivotLayoutInit,
  ensurePivotTableInit,
  PivotTable,
  refreshPivotTableLayout,
} from "../pivot-table";
import {
  ensurePivotFieldsInit,
  ensurePivotHierarchyClusterInit as workbookBinding352,
} from "../pivot-fields";
import {
  ensurePivotCachesInit,
  ensurePivotCacheModelInit,
  PivotCaches,
  PivotCacheModel,
  wirePivotCachesBoundaryHooks,
} from "../pivot-caches";
import {
  ensureSlicerInit,
  ensureSlicersInit,
  Slicer,
  Slicers,
} from "../slicers";

export let workbookBinding369: any;
export const _u = esmInit(() => {
  spreadsheetVn();
  ensurePivotLayoutInit();
  ensurePivotFieldsInit();
  ensurePivotCacheModelInit();
  initAddressUtils();
  ensurePivotTableInit();
  workbookBinding369 = PivotTable;
});

export const gae = esmInit(() => {
  wr();
  rae();
});
export const vae = esmInit(() => {
  Qt();
  workbookEt();
  workbookBinding383();
  workbookBinding411();
});
export const workbookBinding412 = esmInit(() => {
  ensureGradientFillParseInit();
  rae();
  gae();
  vae();
});
export const Mde = esmInit(() => {
  _de();
  workbookBinding411();
  workbookBinding412();
  workbookBinding655();
});
export const workbookBinding661 = esmInit(() => {
  workbookEt();
  Mde();
  ensureImageElementInit();
});

export let workbookBinding662: Record<string, string>;
export const _C = esmInit(() => {
  spreadsheetVn();
  wr();
  workbookBinding661();
  workbookBinding404();
  workbookBinding383();
  workbookWt();
  Hie();
  workbookBinding675();
  workbookBinding662 = Object.entries(workbookBinding393).reduce(
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
  spreadsheetVn();
  initAddressUtils();
  $u();
  Yle();
  wpe();
  Bpe();
  workbookF();
  hme();
  ensureRangeInit();
  workbookBinding669 = getWorksheetOwnerMap();
  workbookBinding670 = EXCEL_EPOCH_UTC_MS;
  workbookBinding671 = MS_PER_DAY;
  workbookBinding672 = Range;
  workbookBinding673 = MAX_WORKSHEET_ROWS;
  workbookBinding674 = MAX_WORKSHEET_COLS;
});

export let workbookBinding676: any;
export const Cme = esmInit(() => {
  initAddressUtils();
  ensurePivotCacheModelInit();
  _u();
  workbookBinding675();
  workbookBinding352();
  ensurePivotCachesInit();
  wirePivotCachesBoundaryHooks({
    refreshPivotTableLayout,
    PivotCacheModel,
  });
  workbookBinding676 = PivotCaches;
});

export let workbookBinding683: any;
export const Tme = esmInit(() => {
  workbookBinding352();
  ensureSlicerInit();
  workbookBinding683 = Slicer;
});

export let workbookBinding684: any;
export const Eme = esmInit(() => {
  Tme();
  ensureSlicersInit();
  workbookBinding684 = Slicers;
});

export const ensureBinding662Init = _C;
export const ensureRangeClusterInit = workbookBinding675;
export const ensurePivotCachesClusterInit = Cme;
export const ensureSlicerClusterInit = Tme;
export const ensureSlicersClusterInit = Eme;
export const ensurePivotTableClusterInit = _u;
