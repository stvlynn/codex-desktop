// Restored from ref/webview/assets/gitGraph-7Q5UKJZL-B7uk7IFX.js
// Mermaid GitGraph entry — lazy createGitGraphServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createGitGraphServices,
  initGitGraphLangiumServices,
} from "./mermaid-git-graph-langium-services";

esmInit(() => {
  initGitGraphLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createGitGraphServices };
