// Restored from ref/webview/assets/pie-7BOR55EZ-DkkCSB_8.js
// Mermaid Pie entry — lazy createPieServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createPieServices,
  initPieLangiumServices,
} from "./mermaid-pie-langium-services-alt";

esmInit(() => {
  initPieLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createPieServices };
