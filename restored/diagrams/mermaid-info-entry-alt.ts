// Restored from ref/webview/assets/info-NVLQJR56-dx4ErB_d.js
// Mermaid Info entry — lazy createInfoServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createInfoServices,
  initInfoLangiumServices,
} from "./mermaid-info-langium-services-alt";

esmInit(() => {
  initInfoLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createInfoServices };
