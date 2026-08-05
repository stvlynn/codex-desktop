// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection cluster ensure (legacy Binding623).

import {
  ensureParagraphsInit,
  ensureListParagraphDefaultsInit,
} from "../text-run";
import { ensureTextStyleInit } from "../text-style";
import { ensureStyleConfigInit } from "../style-tokens";

let textSelectionReady = false;

/** Legacy Binding623 — touch paragraphs/list/text-style/style-config. */
export function ensureTextSelectionInit(): void {
  if (textSelectionReady) return;
  ensureParagraphsInit();
  ensureTextStyleInit();
  ensureListParagraphDefaultsInit();
  ensureStyleConfigInit();
  textSelectionReady = true;
}
