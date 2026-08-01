// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart paste mime/size hints (legacy eht/kmt/Cmt).
// Reuses chart-raster CHART_* consts for Binding1957/1958/Qmt/$mt values.
// Stage-3 wave-155.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  CHART_PNG_MIME,
  CHART_MIN_PX,
  CHART_DEFAULT_WIDTH,
  CHART_DEFAULT_HEIGHT,
} from "../chart-raster";
import { cphH } from "./boundary-hooks";

export let workbookBinding1956: unknown;
export const Cmt = esmInit(() => {
  cphH.ensureCmtDeps();
  workbookBinding1956 = cphH.createAppInitialBst();
});

export const kmt = esmInit(() => {
  cphH.ensureKmtDeps();
  Cmt();
});

export let workbookBinding1957: string;
export let workbookBinding1958: number;
export let Qmt: number;
export let $mt: number;
export const eht = esmInit(() => {
  cphH.ensureEhtDeps();
  workbookBinding1957 = CHART_PNG_MIME;
  workbookBinding1958 = CHART_MIN_PX;
  Qmt = CHART_DEFAULT_WIDTH;
  $mt = CHART_DEFAULT_HEIGHT;
});

export const ensureEhtInit = eht;
export const ensureKmtInit = kmt;
