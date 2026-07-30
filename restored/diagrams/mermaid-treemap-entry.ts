// Restored from ref/webview/assets/treemap-W4RFUUIX-C7G7LMaY.js
// Mermaid Treemap entry — lazy createTreemapServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createTreemapServices,
  initTreemapLangiumServices,
} from "./mermaid-treemap-langium-services";

esmInit(() => {
  initTreemapLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createTreemapServices };
