// Restored from ref/webview/assets/wardley-RL74JXVD-YOTipFsk.js
// Mermaid Wardley entry — lazy createWardleyServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createWardleyServices,
  initWardleyLangiumServices,
} from "./mermaid-wardley-langium-services";

esmInit(() => {
  initWardleyLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createWardleyServices };
