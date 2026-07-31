// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: worksheet-drawings master ensure (legacy Binding789).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { ensureShapeGeometryInit } from "../shape-geometry";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { ensureTextStyleInit } from "../text-style";
import { ensureRangeInit } from "../range";
import {
  ensureStableIdConstantsInit,
  ensureStableIdClusterInit,
} from "../stable-id";
import {
  initAddressUtils,
  initAddressMetrics,
} from "../../utils/spreadsheet-address-utils";
import {
  ensureWorkbookEt,
  ensureWorkbookKt,
  ensureBinding662,
  ensureJge,
  ensureBinding712,
  ensureBinding722,
  ensureBinding739,
} from "./boundary-hooks";
import { ensureDrawingHelpersInit } from "./drawing-helpers";
import { ensureDrawingAnchorInit } from "./drawing-anchor";
import { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
import { ensureDrawingCollectionsAInit } from "./drawing-collections-a";
import { ensureDrawingCollectionsBInit } from "./drawing-collections-b";

export const ensureWorksheetDrawingsInit = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureChartProtoNameMapsInit();
  ensureTextStyleInit();
  ensureWorkbookKt();
  ensureBinding722();
  ensureBinding712();
  ensureJge();
  ensureBinding739();
  ensureWorkbookEt();
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureBinding662();
  initAddressUtils();
  ensureRangeInit();
  initAddressMetrics();
  ensureDrawingHelpersInit();
  ensureDrawingAnchorInit();
  ensureDrawingChartOpsInit();
  ensureDrawingCollectionsAInit();
  ensureDrawingCollectionsBInit();
});
