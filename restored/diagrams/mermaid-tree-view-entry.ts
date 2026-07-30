// Restored from ref/webview/assets/treeView-SZITEDCU-DWD49S17.js
// Mermaid TreeView entry — lazy createTreeViewServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createTreeViewServices,
  initTreeViewLangiumServices,
} from "./mermaid-tree-view-langium-services";

esmInit(() => {
  initTreeViewLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createTreeViewServices };
