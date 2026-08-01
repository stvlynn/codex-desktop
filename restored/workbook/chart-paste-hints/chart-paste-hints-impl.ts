// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart paste mime/size hints (legacy eht/kmt/Cmt).
// Reuses chart-raster CHART_* consts for Binding1957/1958/Qmt/$mt values.
// Stage-3 wave-156: direct imports (wire leave-behind removed).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  CHART_PNG_MIME,
  CHART_MIN_PX,
  CHART_DEFAULT_WIDTH,
  CHART_DEFAULT_HEIGHT,
} from "../chart-raster";
import {
  initAddressUtils,
  initAddressMetrics,
} from "../../utils/spreadsheet-address-utils";
import { workbookBinding1229 } from "../chart-layout-ensures";
import { workbookBinding661 } from "../binding662-gate";
import { ensureImageDimensionsInit as pde } from "../image-mime";
import { ensureColRowExtentsInit as workbookBinding584 } from "../cell-xf-format";
import { ensureThemeSchemeColorAliasesInit as workbookBinding570 } from "../design-tokens";
import { ensureZodRuntime as appInitialBst } from "../../vendor/zod";

export let workbookBinding1956: unknown;
export const Cmt = esmInit(() => {
  workbookBinding1956 = appInitialBst();
});

export const kmt = esmInit(() => {
  initAddressUtils();
  initAddressMetrics();
  Cmt();
});

export let workbookBinding1957: string;
export let workbookBinding1958: number;
export let Qmt: number;
export let $mt: number;
export const eht = esmInit(() => {
  workbookBinding1229();
  workbookBinding661();
  pde();
  initAddressUtils();
  workbookBinding584();
  workbookBinding570();
  initAddressMetrics();
  workbookBinding1957 = CHART_PNG_MIME;
  workbookBinding1958 = CHART_MIN_PX;
  Qmt = CHART_DEFAULT_WIDTH;
  $mt = CHART_DEFAULT_HEIGHT;
});

export const ensureEhtInit = eht;
export const ensureKmtInit = kmt;
