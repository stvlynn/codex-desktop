// Restored from ref/webview/assets/info-OMHHGYJF-Cyo_bg9K.js
// Mermaid Info entry — lazy createInfoServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createInfoServices,
  initInfoLangiumServices,
} from "./mermaid-info-langium-services";

esmInit(() => {
  initInfoLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createInfoServices };
