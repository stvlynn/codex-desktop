// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: ensure init for text canvas renderer deps (legacy yle).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import {
  ensureCanvasLineDashInit,
  ensureFillResolveInit,
} from "../canvas-fill";
import { ensureAngleUnitsInit } from "./polar-offset";
import { TextCanvasRenderer } from "./text-canvas-renderer";

export const ensureTextCanvasRendererInit = esmInit(() => {
  wr();
  ensureCanvasLineDashInit();
  ensureCssNamedColorsInit();
  ensureFillResolveInit();
  ensureAngleUnitsInit();
  void TextCanvasRenderer;
});
