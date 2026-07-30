// Restored from ref/webview/assets/architecture-U656AL7Q-BjXU9M4C.js
// Mermaid Architecture entry — lazy createArchitectureServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createArchitectureServices,
  initArchitectureLangiumServices,
} from "./mermaid-architecture-langium-services-alt";

esmInit(() => {
  initArchitectureLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createArchitectureServices };
