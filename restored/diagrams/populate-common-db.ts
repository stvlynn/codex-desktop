// Restored from ref/webview/assets/chunk-4BX2VUAB-DTGlfXuH.js
// Mermaid helper: copy common accessibility/title fields into a diagram DB.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
export type DiagramAccessibilityFields = {
  accDescr?: string;
  accTitle?: string;
  title?: string;
};
export type DiagramDbWithAccessibility = {
  setAccDescription?: (description: string) => void;
  setAccTitle?: (title: string) => void;
  setDiagramTitle?: (title: string) => void;
};
export function populateCommonDb(
  source: DiagramAccessibilityFields,
  db: DiagramDbWithAccessibility,
): void {
  if (source.accDescr) db.setAccDescription?.(source.accDescr);
  if (source.accTitle) db.setAccTitle?.(source.accTitle);
  if (source.title) db.setDiagramTitle?.(source.title);
}
defineFunctionName(populateCommonDb, "populateCommonDb");

/** Rolldown ESM init thunk (bundle export `t`). */
export function initPopulateCommonDbChunk(): void {
  initDayjsLoggerRuntime();
}
export { populateCommonDb as n, initPopulateCommonDbChunk as t };
