// Restored from ref/webview/assets/architecture-YZFGNWBL-CH5Aflhl.js
// Mermaid Architecture entry — lazy createArchitectureServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createArchitectureServices,
  initArchitectureLangiumServices,
} from "./mermaid-architecture-langium-services";

esmInit(() => {
  initArchitectureLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createArchitectureServices };
