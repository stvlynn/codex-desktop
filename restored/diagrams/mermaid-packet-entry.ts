// Restored from ref/webview/assets/packet-4T2RLAQJ-D5Yez-NS.js
// Mermaid Packet entry — lazy createPacketServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar";
import {
  createPacketServices,
  initPacketLangiumServices,
} from "./mermaid-packet-langium-services";

esmInit(() => {
  initPacketLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createPacketServices };
