// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-142: slide-layout cluster ensures (legacy Binding1296 / 1341 / 1343 / uDe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFillInit } from "../fill";
import { ensureSlidePlaceholderRolesInit } from "../presentation-theme";
import { slH } from "./boundary-hooks";

export const ensureSlideBackgroundInit = esmInit(() => {
  ensureFillInit();
});

export const ensureSlideElementsCollectionInit = esmInit(() => {
  slH.ensureQt();
  slH.ensureWorkbookC();
  slH.ensureWorkbookX();
  slH.ensureZEe();
  slH.ensureWorkbookY();
  slH.ensureWorkbookP();
  slH.ensureBinding1299();
  slH.ensureBinding1303();
  slH.ensureBinding661();
  slH.ensureBinding739();
  slH.ensureLDe();
  slH.ensureBinding1337();
});

export const ensureSlidePlaceholdersInit = esmInit(() => {
  ensureSlidePlaceholderRolesInit();
});

export const ensureSlideLayoutInit = esmInit(() => {
  ensureSlideBackgroundInit();
  ensureSlideElementsCollectionInit();
  ensureSlidePlaceholdersInit();
  slH.ensureWorkbookH();
});

/** Legacy aliases. */
export const workbookBinding1296 = ensureSlideBackgroundInit;
export const workbookBinding1341 = ensureSlideElementsCollectionInit;
export const workbookBinding1343 = ensureSlidePlaceholdersInit;
export const uDe = ensureSlideLayoutInit;
