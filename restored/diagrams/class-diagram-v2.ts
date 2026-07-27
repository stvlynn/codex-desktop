// Restored from ref/webview/assets/classDiagram-v2-WZHVMYZB-sjELdLqU.js
// Mermaid class diagram definition (primary v2). Assembles mermaid-class-diagram-core.
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
} from "../utils/dayjs-core-alt-dup";
import { k } from "./mermaid-config";
import { chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA } from "./mermaid-create-text";
import { initGetIconStylesChunk as n } from "./get-icon-styles-alt";
import { initMermaidLineOffsetChunk as chunkHN2XXSSUN } from "./line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "./subgraph-title-margins";
import { initGetDiagramElementChunk as chunk55IACEB6N } from "./get-diagram-element";
import { setupViewPortForSVG as t } from "./setup-viewport-for-svg";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "./style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import { chunkN4CR4FBYN } from "./mermaid-layout-loaders";
import {
  chunkB4BG7PRWA,
  chunkB4BG7PRWI,
  chunkB4BG7PRWN,
  chunkB4BG7PRWR,
  chunkB4BG7PRWT,
} from "./mermaid-class-diagram-core";
var ClassDiagramV2WZHVMYZB;
esmInit(() => {
  chunkB4BG7PRWI();
  n();
  chunk55IACEB6N();
  t();
  chunkN4CR4FBYN();
  chunkQXUST7PYN();
  chunkHN2XXSSUN();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ClassDiagramV2WZHVMYZB = {
    parser: chunkB4BG7PRWN,
    get db() {
      return new chunkB4BG7PRWT();
    },
    renderer: chunkB4BG7PRWR,
    styles: chunkB4BG7PRWA,
    init: defineFunctionName((config) => {
      config.class ||= {};
      config.class.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { ClassDiagramV2WZHVMYZB as diagram };
