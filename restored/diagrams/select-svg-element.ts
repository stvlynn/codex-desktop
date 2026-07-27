// Restored from ref/webview/assets/chunk-EXTU4WIE-DCR2S2HQ.js
// Mermaid helper: select the SVG root element, respecting sandbox security level.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
import { b as getConfig, k as initMermaidConfig } from "./mermaid-config";
import {
  select as d3Select,
  ensureD3SelectionRuntimeT as initD3Bundle,
} from "../vendor/d3-axis-current-runtime";
type D3Selection = {
  node(): Element | null;
  select(selector: string): D3Selection;
};
export function selectSvgElement(diagramId: string): D3Selection {
  const { securityLevel } = getConfig();
  let root = d3Select("body") as D3Selection;
  if (securityLevel === "sandbox") {
    const iframe = d3Select(
      `#i${diagramId}`,
    ).node() as HTMLIFrameElement | null;
    const doc = iframe?.contentDocument ?? document;
    root = d3Select(doc.body) as D3Selection;
  }
  return root.select(`#${diagramId}`);
}
defineFunctionName(selectSvgElement, "selectSvgElement");

/** Rolldown ESM init thunk (bundle export `t`). */
export function initSelectSvgElementChunk(): void {
  initMermaidConfig();
  initDayjsLoggerRuntime();
  initD3Bundle();
}
export { initSelectSvgElementChunk as t, selectSvgElement as n };
