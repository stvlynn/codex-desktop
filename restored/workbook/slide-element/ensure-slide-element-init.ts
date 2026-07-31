// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-36: SlideElement cluster ensure (legacy workbookB).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { ensureParagraphsInit } from "../text-run";
import { ensureDetachedTextInit } from "../detached-text";
import { ensureTextStyleInit } from "../text-style";
import { ensureFrameBboxInit } from "../geometry-transform";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import {
  ensureStableIdClusterInit,
  ensureStableIdConstantsInit,
} from "../stable-id";
import { ensureSlidePlaceholderRolesInit } from "../presentation-theme";
import { ensureEffectListInit } from "../document-style";
import { SlideElement } from "./slide-element";

/**
 * Legacy workbookB — touch paragraphs / detached-text / style / frame /
 * autofit / stable-id / placeholder / effects; SlideElement is a static export.
 */
export const ensureSlideElementInit = esmInit(() => {
  Qt();
  ensureParagraphsInit();
  ensureDetachedTextInit();
  ensureTextStyleInit();
  ensureFrameBboxInit();
  ensureTextElementAutofitInit();
  ensureStableIdClusterInit();
  ensureStableIdConstantsInit();
  ensureSlidePlaceholderRolesInit();
  ensureEffectListInit();
  void SlideElement;
});
