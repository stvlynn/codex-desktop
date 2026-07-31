// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: sparklines master ensure (legacy ensureSparklineGroupsInit / Binding804–815 + _D).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCellVoInit } from "./cell-vo";
import { ensureCellGridInit } from "./cell-grid";
import { ensureSparklinePreviewInit } from "./sparkline-preview";
import { ensureSparklineAxisInit } from "./sparkline-axis";
import { ensureSparklineMarkersInit } from "./sparkline-markers";
import { ensureSparklineTypeMapsInit } from "./sparkline-type-maps";
import { ensureSparklineGroupInit } from "./sparkline-group";
import { ensureSparklineGroupsInit } from "./sparkline-groups";

export const ensureSparklinesInit = esmInit(() => {
  ensureCellVoInit();
  ensureCellGridInit();
  ensureSparklinePreviewInit();
  ensureSparklineAxisInit();
  ensureSparklineMarkersInit();
  ensureSparklineTypeMapsInit();
  ensureSparklineGroupInit();
  ensureSparklineGroupsInit();
});
