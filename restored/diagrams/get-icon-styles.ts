// Restored from ref/webview/assets/chunk-FMBD7UC4-Gf0hySpu.js
// Mermaid Font Awesome label-icon CSS helper.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
const ICON_STYLES = `
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`;
export function getIconStyles(): string {
  return ICON_STYLES;
}
defineFunctionName(getIconStyles, "getIconStyles");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initGetIconStylesChunk(): void {
  initDayjsLoggerRuntime();
}
export { initGetIconStylesChunk as n, getIconStyles as t };
