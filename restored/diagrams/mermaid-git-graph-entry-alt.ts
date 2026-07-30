// Restored from ref/webview/assets/gitGraph-F6HP7TQM-BjW_eR2O.js
// Mermaid GitGraph entry — lazy createGitGraphServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createGitGraphServices,
  initGitGraphLangiumServices,
} from "./mermaid-git-graph-langium-services-alt";

esmInit(() => {
  initGitGraphLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createGitGraphServices };
