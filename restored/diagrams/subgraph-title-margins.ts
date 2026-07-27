// Restored from ref/webview/assets/chunk-CVBHYZKI-Ct0iRt9_.js
// Mermaid flowchart subgraph title margin helper.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
export type FlowchartSubGraphTitleMargin = {
  top?: number;
  bottom?: number;
};
export type FlowchartConfigSlice = {
  flowchart?: {
    subGraphTitleMargin?: FlowchartSubGraphTitleMargin;
  };
};
export type SubGraphTitleMargins = {
  subGraphTitleTopMargin: number;
  subGraphTitleBottomMargin: number;
  subGraphTitleTotalMargin: number;
};
export function getSubGraphTitleMargins(config: FlowchartConfigSlice): SubGraphTitleMargins {
  const top = config.flowchart?.subGraphTitleMargin?.top ?? 0;
  const bottom = config.flowchart?.subGraphTitleMargin?.bottom ?? 0;
  return {
    subGraphTitleTopMargin: top,
    subGraphTitleBottomMargin: bottom,
    subGraphTitleTotalMargin: top + bottom,
  };
}
defineFunctionName(getSubGraphTitleMargins, "getSubGraphTitleMargins");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initSubGraphTitleMarginsChunk(): void {
  initDayjsLoggerRuntime();
}
