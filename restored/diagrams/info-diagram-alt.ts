// Restored from ref/webview/assets/infoDiagram-F6ZHWCRC-92AWNDAs.js
// Mermaid info diagram definition (alt).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.

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
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../utils/dayjs-core-alt-dup";
import { c as chunkABZYJK2DC, k as chunkABZYJK2DK } from "./mermaid-config";
import { n as chunkEXTU4WIEN, t as chunkEXTU4WIET } from "./select-svg-element";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "./mermaid-parser-core-alt";
import {
  mermaidPackageJson as chunkKS23V3DPN,
  initMermaidPackageJson as chunkKS23V3DPT,
} from "../utils/mermaid-package-json";
var infoParser, infoDb, infoDiagramF6ZHWCRC;
esmInit(() => {
  chunkKS23V3DPT();
  chunkEXTU4WIET();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  infoParser = {
    parse: chunkAGHRB4JFN(async (source) => {
      let parseResult = await mermaidParserCoreN("info", source);
      chunkAGHRB4JFI.debug(parseResult);
    }, "parse"),
  };
  infoDb = {
    version: chunkKS23V3DPN.version + "",
  };
  infoDiagramF6ZHWCRC = {
    parser: infoParser,
    db: {
      getVersion: chunkAGHRB4JFN(() => infoDb.version, "getVersion"),
    },
    renderer: {
      draw: chunkAGHRB4JFN((text, elementId, version) => {
        chunkAGHRB4JFI.debug("rendering info diagram\n" + text);
        let svgSelection = chunkEXTU4WIEN(elementId);
        chunkABZYJK2DC(svgSelection, 100, 400, true);
        svgSelection
          .append("g")
          .append("text")
          .attr("x", 100)
          .attr("y", 40)
          .attr("class", "version")
          .attr("font-size", 32)
          .style("text-anchor", "middle")
          .text(`v${version}`);
      }, "draw"),
    },
  };
})();
export { infoDiagramF6ZHWCRC as diagram };
