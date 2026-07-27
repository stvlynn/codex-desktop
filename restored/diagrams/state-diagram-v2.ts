// Restored from ref/webview/assets/stateDiagram-v2-4FDKWEC3-BtTMj-2I.js
// Mermaid state diagram v2 definition (primary). Assembles mermaid-state-diagram-core.
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
import { initMermaidLineOffsetChunk } from "./line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "./subgraph-title-margins";
import { initGetDiagramElementChunk as chunk55IACEB6N } from "./get-diagram-element";
import { setupViewPortForSVG as t } from "./setup-viewport-for-svg";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "./style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import { chunkN4CR4FBYN } from "./mermaid-layout-loaders";
import {
  chunkDI55MBZ5A,
  chunkDI55MBZ5I,
  chunkDI55MBZ5N,
  chunkDI55MBZ5R,
  chunkDI55MBZ5T,
} from "./mermaid-state-diagram-core";
var stateDiagramV24FDKWEC3;
esmInit(() => {
  chunkDI55MBZ5N();
  chunk55IACEB6N();
  t();
  chunkN4CR4FBYN();
  chunkQXUST7PYN();
  initMermaidLineOffsetChunk();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  stateDiagramV24FDKWEC3 = {
    parser: chunkDI55MBZ5R,
    get db() {
      return new chunkDI55MBZ5T(2);
    },
    renderer: chunkDI55MBZ5I,
    styles: chunkDI55MBZ5A,
    init: defineFunctionName((config) => {
      config.state ||= {};
      config.state.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { stateDiagramV24FDKWEC3 as diagram };
