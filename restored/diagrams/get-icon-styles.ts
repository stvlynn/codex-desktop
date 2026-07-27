// Restored from ref/webview/assets/chunk-FMBD7UC4-Gf0hySpu.js
// Mermaid Font Awesome label-icon CSS helper.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
export function getIconStyles(): string {
  return "\n  /* Font Awesome icon styling - consolidated */\n  .label-icon {\n    display: inline-block;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -0.125em;\n  }\n  \n  .node .label-icon path {\n    fill: currentColor;\n    stroke: revert;\n    stroke-width: revert;\n  }\n";
}
defineFunctionName(getIconStyles, "getIconStyles");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initGetIconStylesChunk(): void {
  initDayjsLoggerRuntime();
}
