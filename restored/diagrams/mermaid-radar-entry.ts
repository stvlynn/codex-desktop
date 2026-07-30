// Restored from ref/webview/assets/radar-PYXPWWZC-Bamsjak1.js
// Mermaid Radar entry — lazy createRadarServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createRadarServices,
  initRadarLangiumServices,
} from "./mermaid-radar-langium-services";

esmInit(() => {
  initRadarLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createRadarServices };
