// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62/158: Mermaid→slide adapters barrel (direct imports; wire retired).
// (legacy Binding1687 cluster / LPe+dFe+DFe+cIe+lIe+CIe).

export {
  wireMermaidSlideAdapterHooks,
  type MermaidSlideAdapterHooks,
} from "./boundary-hooks";
export { msa } from "./adapters-bag";
export { CONNECTOR_EPSILON } from "./connector-epsilon";
export { ensureMermaidSlideAdaptersInit } from "./ensure-mermaid-slide-adapters-init";
export {
  ensureMermaidSlideRegistryInit,
  getMermaidSlidePlugins,
} from "./registry";
export { ensureTreeViewInit } from "./tree-view";

import { ensureMermaidSlideAdaptersInit } from "./ensure-mermaid-slide-adapters-init";
import { msa } from "./adapters-bag";
import { CONNECTOR_EPSILON } from "./connector-epsilon";

export function getConvertTreeView(): (...args: any[]) => any {
  ensureMermaidSlideAdaptersInit();
  return msa.convertTreeView as (...args: any[]) => any;
}

export function getIsTreeViewSource(): (src: any) => boolean {
  ensureMermaidSlideAdaptersInit();
  return msa.isTreeViewSource as (src: any) => boolean;
}

export function getConnectorEpsilon(): number {
  return CONNECTOR_EPSILON;
}
