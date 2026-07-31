// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-40: ImageElement cluster ensure (legacy Binding661 drained deps).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { ensureShapeGeometryInit } from "../shape-geometry";
import { ensureSlideElementInit } from "../slide-element";
import {
  ensureMimeSniffInit,
  ensureImageDimensionsInit,
  ensureImageObjectFitInit,
} from "../image-mime";
import { ensureLineInit } from "../line";
import { ensureRoundRectAdjInit, ensureImageSourceInit } from "../image-source";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import {
  ensureStableIdClusterInit,
  ensureStableIdConstantsInit,
} from "../stable-id";
import { ImageElement } from "./image-element";

/**
 * Legacy Binding661 drained half — touch image / slide / line / mime /
 * geometry / stable-id / image-source. Residual boundary Binding661 still
 * runs workbookEt + Mde (gae/EMU cluster intentionally left in boundary).
 */
export const ensureImageElementInit = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureSlideElementInit();
  ensureMimeSniffInit();
  ensureImageDimensionsInit();
  ensureImageObjectFitInit();
  ensureLineInit();
  ensureRoundRectAdjInit();
  ensureChartProtoNameMapsInit();
  ensureStableIdClusterInit();
  ensureStableIdConstantsInit();
  ensureImageSourceInit();
  void ImageElement;
});
