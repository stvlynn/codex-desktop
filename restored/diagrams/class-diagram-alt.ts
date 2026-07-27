// Restored from ref/webview/assets/classDiagram-6PBFFD2Q-Db4pWg__.js
// Mermaid class diagram definition (alt v1). Assembles mermaid-class-diagram-core-alt.
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
import { initGetIconStylesChunk as n } from "./get-icon-styles";
import { initMermaidLineOffsetAltChunk } from "./line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "./subgraph-title-margins-alt";
import { initSvgDrawingHelpersChunk as l } from "./svg-drawing-helpers-alt";
import { initGetDiagramElementChunk as chunk55IACEB6N } from "./get-diagram-element-alt";
import { setupViewPortForSVG as t } from "./setup-viewport-for-svg-alt";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "./style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import { chunk336JU56ON } from "./mermaid-layout-loaders-alt";
import {
  chunk4TB4RGXKA,
  chunk4TB4RGXKI,
  chunk4TB4RGXKN,
  chunk4TB4RGXKR,
  chunk4TB4RGXKT,
} from "./mermaid-class-diagram-core-alt";
var ClassDiagram6PBFFD2Q;
esmInit(() => {
  chunk4TB4RGXKI();
  n();
  l();
  chunk55IACEB6N();
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
  ClassDiagram6PBFFD2Q = {
    parser: chunk4TB4RGXKN,
    get db() {
      return new chunk4TB4RGXKT();
    },
    renderer: chunk4TB4RGXKR,
    styles: chunk4TB4RGXKA,
    init: defineFunctionName((config) => {
      config.class ||= {};
      config.class.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { ClassDiagram6PBFFD2Q as diagram };
