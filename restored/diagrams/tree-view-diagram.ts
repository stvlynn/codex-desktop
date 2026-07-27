// Restored from ref/webview/assets/diagram-5BDNPKRD-DDgFCgdD.js
// Mermaid treeView diagram definition (primary).
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
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  c as _chunkICPOFSXXC,
  d as chunkICPOFSXXD,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "./mermaid-config-alt";
import { initSelectSvgElementChunk as chunk426QAEUCN, selectSvgElement as chunk426QAEUCT } from "./select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { initPopulateCommonDbChunk as chunk4BX2VUABN, populateCommonDb as chunk4BX2VUABT } from "./populate-common-db";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
import { initImperativeStateChunk as chunkQZHKN3VNN, ImperativeState as chunkQZHKN3VNT } from "./imperative-state";
var treeViewItem1,
  treeViewItem2,
  treeViewItem3,
  treeViewItem4,
  treeViewItem5,
  treeViewItem6,
  treeViewItem7,
  treeViewItem8,
  treeViewItem9,
  treeViewItem10,
  treeViewItem11,
  treeViewItem12,
  treeViewItem13,
  diagram5BDNPKRD;
esmInit(() => {
  chunk426QAEUCT();
  chunk4BX2VUABT();
  chunkQZHKN3VNN();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  treeViewItem1 = new chunkQZHKN3VNT(() => ({
    cnt: 1,
    stack: [
      {
        id: 0,
        level: -1,
        name: "/",
        children: [],
      },
    ],
  }));
  treeViewItem2 = chunkAGHRB4JFN(() => {
    treeViewItem1.reset();
    _chunkICPOFSXXA();
  }, "clear");
  treeViewItem3 = chunkAGHRB4JFN(
    () => treeViewItem1.records.stack[0],
    "getRoot",
  );
  treeViewItem4 = chunkAGHRB4JFN(() => treeViewItem1.records.cnt, "getCount");
  treeViewItem5 = chunkICPOFSXXD.treeView;
  treeViewItem6 = {
    clear: treeViewItem2,
    addNode: chunkAGHRB4JFN((treeViewSlot15, treeViewSlot16) => {
      for (
        ;
        treeViewSlot15 <=
        treeViewItem1.records.stack[treeViewItem1.records.stack.length - 1]
          .level;
      )
        treeViewItem1.records.stack.pop();
      let treeViewItem26 = {
        id: treeViewItem1.records.cnt++,
        level: treeViewSlot15,
        name: treeViewSlot16,
        children: [],
      };
      treeViewItem1.records.stack[
        treeViewItem1.records.stack.length - 1
      ].children.push(treeViewItem26);
      treeViewItem1.records.stack.push(treeViewItem26);
    }, "addNode"),
    getRoot: treeViewItem3,
    getCount: treeViewItem4,
    getConfig: chunkAGHRB4JFN(
      () => chunk5PVQY5BWR(treeViewItem5, chunkICPOFSXXY().treeView),
      "getConfig",
    ),
    getAccTitle: _chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    getDiagramTitle: chunkICPOFSXXC,
    setAccDescription: chunkICPOFSXXV,
    setAccTitle: chunkICPOFSXXH,
    setDiagramTitle: chunkICPOFSXXG,
  };
  treeViewItem7 = chunkAGHRB4JFN((treeViewSlot27) => {
    chunk4BX2VUABN(treeViewSlot27, treeViewItem6);
    treeViewSlot27.nodes.map((item) =>
      treeViewItem6.addNode(item.indent ? parseInt(item.indent) : 0, item.name),
    );
  }, "populate");
  treeViewItem8 = {
    parse: chunkAGHRB4JFN(async (treeViewSlot28) => {
      let treeViewItem28 = await mermaidParserCoreN("treeView", treeViewSlot28);
      chunkAGHRB4JFI.debug(treeViewItem28);
      treeViewItem7(treeViewItem28);
    }, "parse"),
  };
  treeViewItem9 = chunkAGHRB4JFN(
    (
      treeViewSlot6,
      treeViewSlot7,
      treeViewSlot8,
      treeViewSlot9,
      treeViewSlot10,
    ) => {
      let treeViewItem18 = treeViewSlot9
          .append("text")
          .text(treeViewSlot8.name)
          .attr("dominant-baseline", "middle")
          .attr("class", "treeView-node-label"),
        { height, width } = treeViewItem18.node().getBBox(),
        treeViewItem19 = height + treeViewSlot10.paddingY * 2,
        treeViewItem20 = width + treeViewSlot10.paddingX * 2;
      treeViewItem18.attr("x", treeViewSlot6 + treeViewSlot10.paddingX);
      treeViewItem18.attr("y", treeViewSlot7 + treeViewItem19 / 2);
      treeViewSlot8.BBox = {
        x: treeViewSlot6,
        y: treeViewSlot7,
        width: treeViewItem20,
        height: treeViewItem19,
      };
    },
    "positionLabel",
  );
  treeViewItem10 = chunkAGHRB4JFN(
    (
      treeViewSlot21,
      treeViewSlot22,
      treeViewSlot23,
      treeViewSlot24,
      treeViewSlot25,
      treeViewSlot26,
    ) =>
      treeViewSlot21
        .append("line")
        .attr("x1", treeViewSlot22)
        .attr("y1", treeViewSlot23)
        .attr("x2", treeViewSlot24)
        .attr("y2", treeViewSlot25)
        .attr("stroke-width", treeViewSlot26)
        .attr("class", "treeView-node-line"),
    "positionLine",
  );
  treeViewItem11 = chunkAGHRB4JFN(
    (treeViewSlot1, treeViewSlot2, treeViewSlot3) => {
      let treeViewItem14 = 0,
        treeViewItem15 = 0,
        treeViewItem16 = chunkAGHRB4JFN(
          (treeViewSlot17, treeViewSlot18, treeViewSlot19, treeViewSlot20) => {
            let treeViewItem27 =
              treeViewSlot20 *
              (treeViewSlot19.rowIndent + treeViewSlot19.paddingX);
            treeViewItem9(
              treeViewItem27,
              treeViewItem14,
              treeViewSlot18,
              treeViewSlot17,
              treeViewSlot19,
            );
            let { height, width } = treeViewSlot18.BBox;
            treeViewItem10(
              treeViewSlot17,
              treeViewItem27 - treeViewSlot19.rowIndent,
              treeViewItem14 + height / 2,
              treeViewItem27,
              treeViewItem14 + height / 2,
              treeViewSlot19.lineThickness,
            );
            treeViewItem15 = Math.max(treeViewItem15, treeViewItem27 + width);
            treeViewItem14 += height;
          },
          "drawNode",
        ),
        treeViewItem17 = chunkAGHRB4JFN((treeViewSlot4, treeViewSlot5 = 0) => {
          treeViewItem16(
            treeViewSlot1,
            treeViewSlot4,
            treeViewSlot3,
            treeViewSlot5,
          );
          treeViewSlot4.children.forEach((item) => {
            treeViewItem17(item, treeViewSlot5 + 1);
          });
          let { x, y, height } = treeViewSlot4.BBox;
          if (treeViewSlot4.children.length) {
            let { y: _y, height: _height } =
              treeViewSlot4.children[treeViewSlot4.children.length - 1].BBox;
            treeViewItem10(
              treeViewSlot1,
              x + treeViewSlot3.paddingX,
              y + height,
              x + treeViewSlot3.paddingX,
              _y + _height / 2 + treeViewSlot3.lineThickness / 2,
              treeViewSlot3.lineThickness,
            );
          }
        }, "processNode");
      return (
        treeViewItem17(treeViewSlot2),
        {
          totalHeight: treeViewItem14,
          totalWidth: treeViewItem15,
        }
      );
    },
    "drawTree",
  );
  treeViewItem12 = {
    draw: chunkAGHRB4JFN(
      (treeViewSlot11, treeViewSlot12, treeViewSlot13, treeViewSlot14) => {
        chunkAGHRB4JFI.debug("Rendering treeView diagram\n" + treeViewSlot11);
        let treeViewItem21 = treeViewSlot14.db,
          treeViewItem22 = treeViewItem21.getRoot(),
          treeViewItem23 = treeViewItem21.getConfig(),
          treeViewItem24 = chunk426QAEUCN(treeViewSlot12),
          treeViewItem25 = treeViewItem24.append("g");
        treeViewItem25.attr("class", "tree-view");
        let { totalHeight, totalWidth } = treeViewItem11(
          treeViewItem25,
          treeViewItem22,
          treeViewItem23,
        );
        treeViewItem24.attr(
          "viewBox",
          `-${treeViewItem23.lineThickness / 2} 0 ${totalWidth} ${totalHeight}`,
        );
        _chunkICPOFSXXC(
          treeViewItem24,
          totalHeight,
          totalWidth,
          treeViewItem23.useMaxWidth,
        );
      },
      "draw",
    ),
  };
  treeViewItem13 = {
    labelFontSize: "16px",
    labelColor: "black",
    lineColor: "black",
  };
  diagram5BDNPKRD = {
    db: treeViewItem6,
    renderer: treeViewItem12,
    parser: treeViewItem8,
    styles: chunkAGHRB4JFN(({ treeView }) => {
      let { labelFontSize, labelColor, lineColor } = chunk5PVQY5BWR(
        treeViewItem13,
        treeView,
      );
      return `
    .treeView-node-label {
        font-size: ${labelFontSize};
        fill: ${labelColor};
    }
    .treeView-node-line {
        stroke: ${lineColor};
    }
    `;
    }, "styles"),
  };
})();
export { diagram5BDNPKRD as diagram };
