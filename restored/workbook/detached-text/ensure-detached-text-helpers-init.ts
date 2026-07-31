// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: detached-text helper ensure (legacy workbookK / Binding624).

import { wr } from "../presentation-protobuf";
import { ensurePresentationMathEnumsInit } from "../math-plain-text";
import { ensureLineInit } from "../line";
import { ensureMathPlainTextInit } from "../math-plain-text";
import { ensureMathMlInit } from "../math-ml";
import { ensureTextStyleInit } from "../text-style";
import { ensureMathDisplayHelpersInit } from "./math-display";

let helpersReady = false;

/** Legacy workbookK — touch line/math/text-style + font-size regex deps. */
export function ensureDetachedTextHelpersInit(): void {
  if (helpersReady) return;
  wr();
  ensurePresentationMathEnumsInit();
  ensureLineInit();
  ensureMathPlainTextInit();
  ensureMathMlInit();
  ensureMathDisplayHelpersInit();
  ensureTextStyleInit();
  helpersReady = true;
}
