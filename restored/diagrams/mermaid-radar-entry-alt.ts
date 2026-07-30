// Restored from ref/webview/assets/radar-NHE76QYJ-Bx9qBpBw.js
// Mermaid Radar entry — lazy createRadarServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createRadarServices,
  initRadarLangiumServices,
} from "./mermaid-radar-langium-services-alt";

esmInit(() => {
  initRadarLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createRadarServices };
