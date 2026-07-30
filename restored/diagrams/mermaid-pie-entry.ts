// Restored from ref/webview/assets/pie-ZZUOXDRM-BXR-0O5M.js
// Mermaid Pie entry — lazy createPieServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createPieServices,
  initPieLangiumServices,
} from "./mermaid-pie-langium-services";

esmInit(() => {
  initPieLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createPieServices };
