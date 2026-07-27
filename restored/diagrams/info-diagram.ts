// Restored from ref/webview/assets/infoDiagram-42DDH7IO-Dt1JsHyX.js
// Mermaid info diagram definition (primary).
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
} from "../utils/dayjs-core-alt";
import { A as chunkICPOFSXXA, c as chunkICPOFSXXC } from "./mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "./select-svg-element-alt";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
var infoParser, infoDb, infoDiagram42DDH7IO;
esmInit(() => {
  chunk426QAEUCT();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  infoParser = {
    parse: chunkAGHRB4JFN(async (source) => {
      let parseResult = await mermaidParserCoreN("info", source);
      chunkAGHRB4JFI.debug(parseResult);
    }, "parse"),
  };
  infoDb = {
    version: "11.14.0",
  };
  infoDiagram42DDH7IO = {
    parser: infoParser,
    db: {
      getVersion: chunkAGHRB4JFN(() => infoDb.version, "getVersion"),
    },
    renderer: {
      draw: chunkAGHRB4JFN((text, elementId, version) => {
        chunkAGHRB4JFI.debug("rendering info diagram\n" + text);
        let svgSelection = chunk426QAEUCN(elementId);
        chunkICPOFSXXC(svgSelection, 100, 400, true);
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
export { infoDiagram42DDH7IO as diagram };
