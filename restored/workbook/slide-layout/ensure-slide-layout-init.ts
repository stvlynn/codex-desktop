// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-143: slide-layout cluster ensures (legacy Binding1296/1341/1343/uDe + GAP).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFillInit } from "../fill";
import { ensureSlidePlaceholderRolesInit } from "../presentation-theme";
import { ensureTableElementInit } from "../table-element";
import { slH } from "./boundary-hooks";

export const ensureSlideBackgroundInit = esmInit(() => {
  ensureFillInit();
});

/** Legacy _workbookX — images collection ensure. */
export const ensureSlideImagesInit = esmInit(() => {
  slH.ensureQt();
  slH.ensureBinding661();
});

/** Legacy workbookBinding1303 — embedded artifact ensure. */
export const ensureSlideEmbeddedArtifactInit = esmInit(() => {
  slH.ensurePresentationFn();
  slH.ensureQt();
  slH.ensureWorkbookB();
  slH.ensureBinding647();
});

/** Legacy zEe — artifacts collection ensure. */
export const ensureSlideArtifactsInit = esmInit(() => {
  slH.ensurePresentationFn();
  slH.ensureQt();
  ensureSlideEmbeddedArtifactInit();
});

/** Legacy _workbookP — tables collection ensure. */
export const ensureSlideTablesInit = esmInit(() => {
  ensureTableElementInit();
});

/** Legacy workbookBinding1337 — smart-art element ensure. */
export const ensureSlideSmartArtInit = esmInit(() => {
  slH.ensureQt();
  slH.ensureWorkbookB();
});

/** Legacy lDe — smart-art collection ensure. */
export const ensureSlideSmartArtsCollectionInit = esmInit(() => {
  ensureSlideSmartArtInit();
});

export const ensureSlideElementsCollectionInit = esmInit(() => {
  slH.ensureQt();
  slH.ensureWorkbookC();
  ensureSlideImagesInit();
  ensureSlideArtifactsInit();
  slH.ensureWorkbookY();
  ensureSlideTablesInit();
  slH.ensureBinding1299();
  ensureSlideEmbeddedArtifactInit();
  slH.ensureBinding661();
  slH.ensureBinding739();
  ensureSlideSmartArtsCollectionInit();
  ensureSlideSmartArtInit();
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
export const _workbookX = ensureSlideImagesInit;
export const workbookBinding1303 = ensureSlideEmbeddedArtifactInit;
export const zEe = ensureSlideArtifactsInit;
export const _workbookP = ensureSlideTablesInit;
export const workbookBinding1337 = ensureSlideSmartArtInit;
export const lDe = ensureSlideSmartArtsCollectionInit;
