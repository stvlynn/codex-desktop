// Restored from ref/webview/assets/packet-BFZMPI3H-ID1dmfak.js
// Mermaid Packet entry — lazy createPacketServices wrapper.

import { esmInit } from "../runtime/rolldown-runtime";
import { initMermaidLangiumGrammar } from "./mermaid-langium-grammar-alt";
import {
  createPacketServices,
  initPacketLangiumServices,
} from "./mermaid-packet-langium-services-alt";

esmInit(() => {
  initPacketLangiumServices();
  initMermaidLangiumGrammar();
})();

export { createPacketServices };
