// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: TextRun/Paragraph cluster ensures (legacy Binding599/Xle/Zle/Binding603/612).

import { ensureTextStyleInit } from "../text-style";
import { ensureMathPlainTextInit } from "../math-plain-text";
import { ensureListParagraphDefaultsInit } from "./list-paragraph-defaults";

let textRunReady = false;
let textRunsReady = false;
let paragraphReady = false;
let paragraphsReady = false;

/** Legacy Binding599. */
export function ensureTextRunInit(): void {
  if (textRunReady) return;
  ensureTextStyleInit();
  textRunReady = true;
}

/** Legacy Xle. */
export function ensureTextRunsInit(): void {
  if (textRunsReady) return;
  ensureTextRunInit();
  textRunsReady = true;
}

/** Legacy Zle. */
export function ensureParagraphInit(): void {
  if (paragraphReady) return;
  ensureMathPlainTextInit();
  ensureTextRunsInit();
  ensureTextRunInit();
  ensureTextStyleInit();
  paragraphReady = true;
}

/** Legacy Binding603. */
export function ensureParagraphsInit(): void {
  if (paragraphsReady) return;
  ensureParagraphInit();
  paragraphsReady = true;
}

/** Touch full text-run/paragraph cluster (includes list defaults). */
export function ensureTextRunClusterInit(): void {
  ensureParagraphsInit();
  ensureListParagraphDefaultsInit();
}
