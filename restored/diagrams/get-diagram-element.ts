// Restored from ref/webview/assets/chunk-55IACEB6-DSTmhE9K.js
// Mermaid helper: resolve a diagram DOM element inside or outside the sandbox iframe.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
import {
  select as d3Select,
  ensureD3SelectionRuntimeT as initD3Bundle,
} from "../vendor/d3-axis-current-runtime";
type D3Selection = {
  select(selector: string): D3Selection;
  nodes(): Array<{
    contentDocument: Document;
  }>;
};
export function getDiagramElement(
  diagramId: string,
  securityLevel: string,
): D3Selection {
  let iframe: D3Selection | undefined;
  if (securityLevel === "sandbox") {
    iframe = d3Select(`#i${diagramId}`) as D3Selection;
  }
  const body =
    securityLevel === "sandbox"
      ? iframe!.nodes()[0].contentDocument.body
      : "body";
  return (d3Select(body) as D3Selection).select(`[id="${diagramId}"]`);
}
defineFunctionName(getDiagramElement, "getDiagramElement");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initGetDiagramElementChunk(): void {
  initDayjsLoggerRuntime();
  initD3Bundle();
}
export { initGetDiagramElementChunk as n, getDiagramElement as t };
