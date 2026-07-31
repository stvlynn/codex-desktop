// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: master ensure (legacy lIe + CIe / Binding1687 cluster).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureConnectorEpsilonInit } from "./connector-epsilon";
import { ensureMermaidSlideRegistryInit } from "./registry";
import { ensureTreeViewInit } from "./tree-view";

export const ensureMermaidSlideAdaptersInit = esmInit(() => {
  ensureConnectorEpsilonInit();
  ensureMermaidSlideRegistryInit();
  ensureTreeViewInit();
});
