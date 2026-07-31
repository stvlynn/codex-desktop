// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-69: BAe combined ensure (chart-like A+B).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureChartLikePluginsAInit } from "./chart-like-a-impl";
import { ensureChartLikePluginsBInit } from "./chart-like-b-impl";

export const ensureChartLikePluginsInit = esmInit(() => {
  ensureChartLikePluginsAInit();
  ensureChartLikePluginsBInit();
});

/** Legacy BAe — initializes timeline/gantt/chart-like mermaid plugins. */
export const BAe = ensureChartLikePluginsInit;
