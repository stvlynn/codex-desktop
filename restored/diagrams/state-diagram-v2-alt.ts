// Restored from ref/webview/assets/stateDiagram-v2-QKLJ7IA2-BAm4gq6Z.js
// Mermaid state diagram v2 definition (alt). Assembles mermaid-state-diagram-core-alt.
// Stage 3 candidate: IMPORT_MAP-ready local deps (class/state cores promoted; no app-initial edge).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../runtime/rolldown-runtime";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
import { A } from "./mermaid-config-alt";
import { chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk } from "./line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "./subgraph-title-margins-alt";
import { n } from "./get-diagram-element-alt";
import { t } from "./setup-viewport-for-svg-alt";
import { n as chunkX2U36JSPN } from "./style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import { chunk336JU56ON } from "./mermaid-layout-loaders-alt";
import {
  chunkOYMX7WX6A,
  chunkOYMX7WX6I,
  chunkOYMX7WX6N,
  chunkOYMX7WX6R,
  chunkOYMX7WX6T,
} from "./mermaid-state-diagram-core-alt";
var stateDiagramV2QKLJ7IA2;
esmInit(() => {
  chunkOYMX7WX6N();
  n();
  t();
  chunk336JU56ON();
  chunkENJZ2VHEN();
  initMermaidLineOffsetAltChunk();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  stateDiagramV2QKLJ7IA2 = {
    parser: chunkOYMX7WX6R,
    get db() {
      return new chunkOYMX7WX6T(2);
    },
    renderer: chunkOYMX7WX6I,
    styles: chunkOYMX7WX6A,
    init: defineFunctionName((config) => {
      config.state ||= {};
      config.state.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { stateDiagramV2QKLJ7IA2 as diagram };
