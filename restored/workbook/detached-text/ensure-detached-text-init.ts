// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText cluster ensure (legacy Binding627).

import { ensureTextSegmenterInit } from "../font-metrics";
import {
  ensureParagraphsInit,
  ensureListParagraphDefaultsInit,
} from "../text-run";
import { ensureTextSelectionInit } from "../text-selection";
import { ensureTextStyleInit } from "../text-style";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { ensureStyleConfigInit } from "../style-tokens";
import { ensureDetachedTextHelpersInit } from "./ensure-detached-text-helpers-init";

let detachedTextReady = false;

/** Legacy Binding627 — touch paragraphs/selection/style + helper cluster. */
export function ensureDetachedTextInit(): void {
  if (detachedTextReady) return;
  ensureTextSegmenterInit();
  ensureParagraphsInit();
  ensureTextSelectionInit();
  ensureTextStyleInit();
  ensureListParagraphDefaultsInit();
  // Binding433 was a drained no-op stub in the boundary.
  ensureChartProtoNameMapsInit();
  ensureStyleConfigInit();
  ensureDetachedTextHelpersInit();
  detachedTextReady = true;
}
