// Restored from ref/webview/assets/treemap-KMMF4GRG-DjrIUm1i.js
// Mermaid Treemap entry — lazy createTreemapServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createTreemapServices,
  initTreemapLangiumServices,
} from "./mermaid-treemap-langium-services-alt";

esmInit(() => {
  initTreemapLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createTreemapServices };
