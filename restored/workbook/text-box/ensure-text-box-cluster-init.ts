// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: text-box layout/render cluster ensure (legacy workbookZ).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { ensureStyleResolveInit } from "../text-style";
import {
  fontMetricsCache,
  GlyphAdvanceCache,
  ensureFontMetricsInit,
  ensureGlyphAdvanceCacheInit,
} from "../font-metrics";
import { ensureMathLayoutEngineInit } from "../math-layout";
import { TextLayoutEngine, ensureTextLayoutEngineInit } from "../text-layout";
import {
  TextCanvasRenderer,
  ensureTextCanvasRendererInit,
} from "../text-canvas";
import { ensurePlaceholderResolveDepsInit } from "../placeholder-resolve";
import { ensureTypographyUnitsInit } from "../font-stack";
import { ensureDefaultTextBoxInsetsInit } from "./default-text-insets";
let textBoxFontMetrics: unknown;
let textBoxMeasureCache: GlyphAdvanceCache;
let textBoxLayoutEngine: TextLayoutEngine;
let textBoxCanvasRenderer: TextCanvasRenderer;
let defaultTextThemeMap: {
  colorMap: { tx1: string };
  lineStyleMap: Record<string, unknown>;
  effectMap: Record<string, unknown>;
};

export {
  textBoxFontMetrics,
  textBoxMeasureCache,
  textBoxLayoutEngine,
  textBoxCanvasRenderer,
  defaultTextThemeMap,
};

export const ensureTextBoxClusterInit = esmInit(() => {
  wr();
  ensureStyleResolveInit();
  ensureFontMetricsInit();
  ensureGlyphAdvanceCacheInit();
  ensureMathLayoutEngineInit();
  ensureTextLayoutEngineInit();
  ensureTextCanvasRendererInit();
  ensureDefaultTextBoxInsetsInit();
  ensurePlaceholderResolveDepsInit();
  ensureTypographyUnitsInit();
  textBoxFontMetrics = fontMetricsCache;
  textBoxMeasureCache = new GlyphAdvanceCache();
  textBoxLayoutEngine = new TextLayoutEngine(
    textBoxFontMetrics,
    textBoxMeasureCache,
  );
  textBoxCanvasRenderer = new TextCanvasRenderer();
  defaultTextThemeMap = {
    colorMap: {
      tx1: "#000000",
    },
    lineStyleMap: {},
    effectMap: {},
  };
});
