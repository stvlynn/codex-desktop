// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: Mermaid→slide plugin registry (legacy lIe / P$).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureChartLikePluginsInit,
  ensureFallbackPluginInit,
  ensureFlowchartPluginInit,
  getFlowchartPlugin,
  getChartLikePlugin,
  getFallbackPlugin,
} from "./boundary-hooks";
import { msa } from "./adapters-bag";
import { ensureGitGraphInit } from "./git-graph";
import { ensureSequenceInit } from "./sequence";
import { ensureGraphDiagramsInit } from "./graph-diagrams";

export const ensureMermaidSlideRegistryInit = esmInit(() => {
  ensureChartLikePluginsInit();
  ensureFallbackPluginInit();
  ensureFlowchartPluginInit();
  ensureGitGraphInit();
  ensureSequenceInit();
  ensureGraphDiagramsInit();
  msa.mermaidSlidePlugins = [
    getFlowchartPlugin(),
    msa.sequencePlugin,
    msa.gitGraphPlugin,
    ...(msa.graphDiagramPlugins ?? []),
    getChartLikePlugin(),
    getFallbackPlugin(),
  ];
});

export function getMermaidSlidePlugins(): any[] {
  ensureMermaidSlideRegistryInit();
  return msa.mermaidSlidePlugins as any[];
}
