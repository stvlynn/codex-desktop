// Restored from ref/webview/assets/stateDiagram-FKZM4ZOC-WJdiH-48.js
// Mermaid state diagram v1 definition (primary). app-initial Ait/Sit → d3-shape line + curveBasis.
// Stage 3 candidate: app-initial aliases → vendor shims; auto-renamed export→local.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import { line as AppInitialAit } from "../../vendor/d3-shape-line-pie-stack";
import { curveBasis as AppInitialSit } from "../../vendor/d3-shape-curves";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  E as chunkABZYJK2DE,
  b as chunkABZYJK2DB,
  c as chunkABZYJK2DC,
  k as chunkABZYJK2DK,
  s as chunkABZYJK2DS,
} from "../../diagrams/mermaid-config";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { chunkS3R3BYOJG, chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA as chunkJA3XYJ7ZI } from "./mermaid-create-text";
import { initMermaidLineOffsetChunk as chunkHN2XXSSUN } from "../../diagrams/line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "../../diagrams/subgraph-title-margins";
import {
  Graph as stateDiagramFKZM4ZOCImport1,
  t as stateDiagramFKZM4ZOCImport2,
} from "../../vendor/graphlib";
import { initGetDiagramElementChunk as chunk55IACEB6N } from "../../diagrams/get-diagram-element";
import { initSetupViewPortForSvgChunk as chunkQN33PNHLT } from "../../diagrams/setup-viewport-for-svg";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import { chunkN4CR4FBYN } from "../../diagrams/mermaid-layout-loaders";
import {
  layout as stateDiagramFKZM4ZOCImport3,
  t as stateDiagramFKZM4ZOCImport4,
} from "../../vendor/dagre";
import {
  chunkDI55MBZ5A,
  chunkDI55MBZ5N,
  chunkDI55MBZ5R,
  chunkDI55MBZ5T,
} from "./mermaid-state-diagram-core";
var stateDiagramFKZM4ZOCBinding1,
  stateDiagramFKZM4ZOCBinding2,
  stateDiagramFKZM4ZOCBinding3,
  stateDiagramFKZM4ZOCBinding4,
  stateDiagramFKZM4ZOCBinding5,
  stateDiagramFKZM4ZOCBinding6,
  stateDiagramFKZM4ZOCBinding7,
  stateDiagramFKZM4ZOCBinding8,
  stateDiagramFKZM4ZOCBinding9,
  stateDiagramFKZM4ZOCBinding10,
  stateDiagramFKZM4ZOCBinding11,
  stateDiagramFKZM4ZOCBinding12,
  stateDiagramFKZM4ZOCBinding13,
  stateDiagramFKZM4ZOCBinding14,
  stateDiagramFKZM4ZOCBinding15,
  stateDiagramFKZM4ZOCBinding16,
  stateDiagramFKZM4ZOCBinding17,
  stateDiagramFKZM4ZOCBinding18,
  stateDiagramFKZM4ZOCBinding19,
  stateDiagramFKZM4ZOC;
esmInit(() => {
  chunkDI55MBZ5N();
  chunk55IACEB6N();
  chunkQN33PNHLT();
  chunkN4CR4FBYN();
  chunkQXUST7PYN();
  chunkHN2XXSSUN();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZI();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  srcT();
  stateDiagramFKZM4ZOCImport4();
  stateDiagramFKZM4ZOCImport2();
  stateDiagramFKZM4ZOCBinding1 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput36) =>
      stateDiagramFKZM4ZOCInput36
        .append("circle")
        .attr("class", "start-state")
        .attr("r", chunkABZYJK2DB().state.sizeUnit)
        .attr(
          "cx",
          chunkABZYJK2DB().state.padding + chunkABZYJK2DB().state.sizeUnit,
        )
        .attr(
          "cy",
          chunkABZYJK2DB().state.padding + chunkABZYJK2DB().state.sizeUnit,
        ),
    "drawStartState",
  );
  stateDiagramFKZM4ZOCBinding2 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput35) =>
      stateDiagramFKZM4ZOCInput35
        .append("line")
        .style("stroke", "grey")
        .style("stroke-dasharray", "3")
        .attr("x1", chunkABZYJK2DB().state.textHeight)
        .attr("class", "divider")
        .attr("x2", chunkABZYJK2DB().state.textHeight * 2)
        .attr("y1", 0)
        .attr("y2", 0),
    "drawDivider",
  );
  stateDiagramFKZM4ZOCBinding3 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput27, stateDiagramFKZM4ZOCInput28) => {
      let stateDiagramFKZM4ZOCBinding84 = stateDiagramFKZM4ZOCInput27
          .append("text")
          .attr("x", 2 * chunkABZYJK2DB().state.padding)
          .attr(
            "y",
            chunkABZYJK2DB().state.textHeight +
              2 * chunkABZYJK2DB().state.padding,
          )
          .attr("font-size", chunkABZYJK2DB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCInput28.id),
        stateDiagramFKZM4ZOCBinding85 = stateDiagramFKZM4ZOCBinding84
          .node()
          .getBBox();
      return (
        stateDiagramFKZM4ZOCInput27
          .insert("rect", ":first-child")
          .attr("x", chunkABZYJK2DB().state.padding)
          .attr("y", chunkABZYJK2DB().state.padding)
          .attr(
            "width",
            stateDiagramFKZM4ZOCBinding85.width +
              2 * chunkABZYJK2DB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFKZM4ZOCBinding85.height +
              2 * chunkABZYJK2DB().state.padding,
          )
          .attr("rx", chunkABZYJK2DB().state.radius),
        stateDiagramFKZM4ZOCBinding84
      );
    },
    "drawSimpleState",
  );
  stateDiagramFKZM4ZOCBinding4 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput14, stateDiagramFKZM4ZOCInput15) => {
      let stateDiagramFKZM4ZOCBinding46 = chunkAGHRB4JFN(function (
          stateDiagramFKZM4ZOCInput37,
          stateDiagramFKZM4ZOCInput38,
          stateDiagramFKZM4ZOCInput39,
        ) {
          let stateDiagramFKZM4ZOCBinding101 = stateDiagramFKZM4ZOCInput37
            .append("tspan")
            .attr("x", 2 * chunkABZYJK2DB().state.padding)
            .text(stateDiagramFKZM4ZOCInput38);
          stateDiagramFKZM4ZOCInput39 ||
            stateDiagramFKZM4ZOCBinding101.attr(
              "dy",
              chunkABZYJK2DB().state.textHeight,
            );
        }, "addTspan"),
        stateDiagramFKZM4ZOCBinding47 = stateDiagramFKZM4ZOCInput14
          .append("text")
          .attr("x", 2 * chunkABZYJK2DB().state.padding)
          .attr(
            "y",
            chunkABZYJK2DB().state.textHeight +
              1.3 * chunkABZYJK2DB().state.padding,
          )
          .attr("font-size", chunkABZYJK2DB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCInput15.descriptions[0])
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCBinding48 = stateDiagramFKZM4ZOCBinding47.height,
        stateDiagramFKZM4ZOCBinding49 = stateDiagramFKZM4ZOCInput14
          .append("text")
          .attr("x", chunkABZYJK2DB().state.padding)
          .attr(
            "y",
            stateDiagramFKZM4ZOCBinding48 +
              chunkABZYJK2DB().state.padding * 0.4 +
              chunkABZYJK2DB().state.dividerMargin +
              chunkABZYJK2DB().state.textHeight,
          )
          .attr("class", "state-description"),
        stateDiagramFKZM4ZOCBinding50 = true,
        stateDiagramFKZM4ZOCBinding51 = true;
      stateDiagramFKZM4ZOCInput15.descriptions.forEach(function (item) {
        stateDiagramFKZM4ZOCBinding50 ||
          (stateDiagramFKZM4ZOCBinding46(
            stateDiagramFKZM4ZOCBinding49,
            item,
            stateDiagramFKZM4ZOCBinding51,
          ),
          (stateDiagramFKZM4ZOCBinding51 = false));
        stateDiagramFKZM4ZOCBinding50 = false;
      });
      let stateDiagramFKZM4ZOCBinding52 = stateDiagramFKZM4ZOCInput14
          .append("line")
          .attr("x1", chunkABZYJK2DB().state.padding)
          .attr(
            "y1",
            chunkABZYJK2DB().state.padding +
              stateDiagramFKZM4ZOCBinding48 +
              chunkABZYJK2DB().state.dividerMargin / 2,
          )
          .attr(
            "y2",
            chunkABZYJK2DB().state.padding +
              stateDiagramFKZM4ZOCBinding48 +
              chunkABZYJK2DB().state.dividerMargin / 2,
          )
          .attr("class", "descr-divider"),
        stateDiagramFKZM4ZOCBinding53 = stateDiagramFKZM4ZOCBinding49
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCBinding54 = Math.max(
          stateDiagramFKZM4ZOCBinding53.width,
          stateDiagramFKZM4ZOCBinding47.width,
        );
      return (
        stateDiagramFKZM4ZOCBinding52.attr(
          "x2",
          stateDiagramFKZM4ZOCBinding54 + 3 * chunkABZYJK2DB().state.padding,
        ),
        stateDiagramFKZM4ZOCInput14
          .insert("rect", ":first-child")
          .attr("x", chunkABZYJK2DB().state.padding)
          .attr("y", chunkABZYJK2DB().state.padding)
          .attr(
            "width",
            stateDiagramFKZM4ZOCBinding54 + 2 * chunkABZYJK2DB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFKZM4ZOCBinding53.height +
              stateDiagramFKZM4ZOCBinding48 +
              2 * chunkABZYJK2DB().state.padding,
          )
          .attr("rx", chunkABZYJK2DB().state.radius),
        stateDiagramFKZM4ZOCInput14
      );
    },
    "drawDescrState",
  );
  stateDiagramFKZM4ZOCBinding5 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCInput11,
      stateDiagramFKZM4ZOCInput12,
      stateDiagramFKZM4ZOCInput13,
    ) => {
      let stateDiagramFKZM4ZOCBinding35 = chunkABZYJK2DB().state.padding,
        stateDiagramFKZM4ZOCBinding36 = 2 * chunkABZYJK2DB().state.padding,
        stateDiagramFKZM4ZOCBinding37 = stateDiagramFKZM4ZOCInput11
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCBinding38 = stateDiagramFKZM4ZOCBinding37.width,
        stateDiagramFKZM4ZOCBinding39 = stateDiagramFKZM4ZOCBinding37.x,
        stateDiagramFKZM4ZOCBinding40 = stateDiagramFKZM4ZOCInput11
          .append("text")
          .attr("x", 0)
          .attr("y", chunkABZYJK2DB().state.titleShift)
          .attr("font-size", chunkABZYJK2DB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCInput12.id),
        stateDiagramFKZM4ZOCBinding41 =
          stateDiagramFKZM4ZOCBinding40.node().getBBox().width +
          stateDiagramFKZM4ZOCBinding36,
        stateDiagramFKZM4ZOCBinding42 = Math.max(
          stateDiagramFKZM4ZOCBinding41,
          stateDiagramFKZM4ZOCBinding38,
        );
      stateDiagramFKZM4ZOCBinding42 === stateDiagramFKZM4ZOCBinding38 &&
        (stateDiagramFKZM4ZOCBinding42 += stateDiagramFKZM4ZOCBinding36);
      let stateDiagramFKZM4ZOCBinding43,
        stateDiagramFKZM4ZOCBinding44 = stateDiagramFKZM4ZOCInput11
          .node()
          .getBBox();
      stateDiagramFKZM4ZOCInput12.doc;
      stateDiagramFKZM4ZOCBinding43 =
        stateDiagramFKZM4ZOCBinding39 - stateDiagramFKZM4ZOCBinding35;
      stateDiagramFKZM4ZOCBinding41 > stateDiagramFKZM4ZOCBinding38 &&
        (stateDiagramFKZM4ZOCBinding43 =
          (stateDiagramFKZM4ZOCBinding38 - stateDiagramFKZM4ZOCBinding42) / 2 +
          stateDiagramFKZM4ZOCBinding35);
      Math.abs(
        stateDiagramFKZM4ZOCBinding39 - stateDiagramFKZM4ZOCBinding44.x,
      ) < stateDiagramFKZM4ZOCBinding35 &&
        stateDiagramFKZM4ZOCBinding41 > stateDiagramFKZM4ZOCBinding38 &&
        (stateDiagramFKZM4ZOCBinding43 =
          stateDiagramFKZM4ZOCBinding39 -
          (stateDiagramFKZM4ZOCBinding41 - stateDiagramFKZM4ZOCBinding38) / 2);
      let stateDiagramFKZM4ZOCBinding45 = 1 - chunkABZYJK2DB().state.textHeight;
      return (
        stateDiagramFKZM4ZOCInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCBinding43)
          .attr("y", stateDiagramFKZM4ZOCBinding45)
          .attr(
            "class",
            stateDiagramFKZM4ZOCInput13 ? "alt-composit" : "composit",
          )
          .attr("width", stateDiagramFKZM4ZOCBinding42)
          .attr(
            "height",
            stateDiagramFKZM4ZOCBinding44.height +
              chunkABZYJK2DB().state.textHeight +
              chunkABZYJK2DB().state.titleShift +
              1,
          )
          .attr("rx", "0"),
        stateDiagramFKZM4ZOCBinding40.attr(
          "x",
          stateDiagramFKZM4ZOCBinding43 + stateDiagramFKZM4ZOCBinding35,
        ),
        stateDiagramFKZM4ZOCBinding41 <= stateDiagramFKZM4ZOCBinding38 &&
          stateDiagramFKZM4ZOCBinding40.attr(
            "x",
            stateDiagramFKZM4ZOCBinding39 +
              (stateDiagramFKZM4ZOCBinding42 - stateDiagramFKZM4ZOCBinding36) /
                2 -
              stateDiagramFKZM4ZOCBinding41 / 2 +
              stateDiagramFKZM4ZOCBinding35,
          ),
        stateDiagramFKZM4ZOCInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCBinding43)
          .attr(
            "y",
            chunkABZYJK2DB().state.titleShift -
              chunkABZYJK2DB().state.textHeight -
              chunkABZYJK2DB().state.padding,
          )
          .attr("width", stateDiagramFKZM4ZOCBinding42)
          .attr("height", chunkABZYJK2DB().state.textHeight * 3)
          .attr("rx", chunkABZYJK2DB().state.radius),
        stateDiagramFKZM4ZOCInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCBinding43)
          .attr(
            "y",
            chunkABZYJK2DB().state.titleShift -
              chunkABZYJK2DB().state.textHeight -
              chunkABZYJK2DB().state.padding,
          )
          .attr("width", stateDiagramFKZM4ZOCBinding42)
          .attr(
            "height",
            stateDiagramFKZM4ZOCBinding44.height +
              3 +
              2 * chunkABZYJK2DB().state.textHeight,
          )
          .attr("rx", chunkABZYJK2DB().state.radius),
        stateDiagramFKZM4ZOCInput11
      );
    },
    "addTitleAndBox",
  );
  stateDiagramFKZM4ZOCBinding6 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput26) => (
      stateDiagramFKZM4ZOCInput26
        .append("circle")
        .attr("class", "end-state-outer")
        .attr(
          "r",
          chunkABZYJK2DB().state.sizeUnit + chunkABZYJK2DB().state.miniPadding,
        )
        .attr(
          "cx",
          chunkABZYJK2DB().state.padding +
            chunkABZYJK2DB().state.sizeUnit +
            chunkABZYJK2DB().state.miniPadding,
        )
        .attr(
          "cy",
          chunkABZYJK2DB().state.padding +
            chunkABZYJK2DB().state.sizeUnit +
            chunkABZYJK2DB().state.miniPadding,
        ),
      stateDiagramFKZM4ZOCInput26
        .append("circle")
        .attr("class", "end-state-inner")
        .attr("r", chunkABZYJK2DB().state.sizeUnit)
        .attr(
          "cx",
          chunkABZYJK2DB().state.padding + chunkABZYJK2DB().state.sizeUnit + 2,
        )
        .attr(
          "cy",
          chunkABZYJK2DB().state.padding + chunkABZYJK2DB().state.sizeUnit + 2,
        )
    ),
    "drawEndState",
  );
  stateDiagramFKZM4ZOCBinding7 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput29, stateDiagramFKZM4ZOCInput30) => {
      let stateDiagramFKZM4ZOCBinding93 = chunkABZYJK2DB().state.forkWidth,
        stateDiagramFKZM4ZOCBinding94 = chunkABZYJK2DB().state.forkHeight;
      if (stateDiagramFKZM4ZOCInput30.parentId) {
        let stateDiagramFKZM4ZOCBinding104 = stateDiagramFKZM4ZOCBinding93;
        stateDiagramFKZM4ZOCBinding93 = stateDiagramFKZM4ZOCBinding94;
        stateDiagramFKZM4ZOCBinding94 = stateDiagramFKZM4ZOCBinding104;
      }
      return stateDiagramFKZM4ZOCInput29
        .append("rect")
        .style("stroke", "black")
        .style("fill", "black")
        .attr("width", stateDiagramFKZM4ZOCBinding93)
        .attr("height", stateDiagramFKZM4ZOCBinding94)
        .attr("x", chunkABZYJK2DB().state.padding)
        .attr("y", chunkABZYJK2DB().state.padding);
    },
    "drawForkJoinState",
  );
  stateDiagramFKZM4ZOCBinding8 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCInput16,
      stateDiagramFKZM4ZOCInput17,
      stateDiagramFKZM4ZOCInput18,
      stateDiagramFKZM4ZOCInput19,
    ) => {
      let stateDiagramFKZM4ZOCBinding66 = 0,
        stateDiagramFKZM4ZOCBinding67 =
          stateDiagramFKZM4ZOCInput19.append("text");
      stateDiagramFKZM4ZOCBinding67.style("text-anchor", "start");
      stateDiagramFKZM4ZOCBinding67.attr("class", "noteText");
      let stateDiagramFKZM4ZOCBinding68 = stateDiagramFKZM4ZOCInput16.replace(
        /\r\n/g,
        "<br/>",
      );
      stateDiagramFKZM4ZOCBinding68 = stateDiagramFKZM4ZOCBinding68.replace(
        /\n/g,
        "<br/>",
      );
      let stateDiagramFKZM4ZOCBinding69 = stateDiagramFKZM4ZOCBinding68.split(
          chunkABZYJK2DS.lineBreakRegex,
        ),
        stateDiagramFKZM4ZOCBinding70 =
          1.25 * chunkABZYJK2DB().state.noteMargin;
      for (let stateDiagramFKZM4ZOCBinding95 of stateDiagramFKZM4ZOCBinding69) {
        let stateDiagramFKZM4ZOCBinding97 =
          stateDiagramFKZM4ZOCBinding95.trim();
        if (stateDiagramFKZM4ZOCBinding97.length > 0) {
          let stateDiagramFKZM4ZOCBinding99 =
            stateDiagramFKZM4ZOCBinding67.append("tspan");
          if (
            (stateDiagramFKZM4ZOCBinding99.text(stateDiagramFKZM4ZOCBinding97),
            stateDiagramFKZM4ZOCBinding70 === 0)
          ) {
            let stateDiagramFKZM4ZOCBinding103 = stateDiagramFKZM4ZOCBinding99
              .node()
              .getBBox();
            stateDiagramFKZM4ZOCBinding70 +=
              stateDiagramFKZM4ZOCBinding103.height;
          }
          stateDiagramFKZM4ZOCBinding66 += stateDiagramFKZM4ZOCBinding70;
          stateDiagramFKZM4ZOCBinding99.attr(
            "x",
            stateDiagramFKZM4ZOCInput17 + chunkABZYJK2DB().state.noteMargin,
          );
          stateDiagramFKZM4ZOCBinding99.attr(
            "y",
            stateDiagramFKZM4ZOCInput18 +
              stateDiagramFKZM4ZOCBinding66 +
              1.25 * chunkABZYJK2DB().state.noteMargin,
          );
        }
      }
      return {
        textWidth: stateDiagramFKZM4ZOCBinding67.node().getBBox().width,
        textHeight: stateDiagramFKZM4ZOCBinding66,
      };
    },
    "_drawLongText",
  );
  stateDiagramFKZM4ZOCBinding9 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput32, stateDiagramFKZM4ZOCInput33) => {
      stateDiagramFKZM4ZOCInput33.attr("class", "state-note");
      let stateDiagramFKZM4ZOCBinding98 = stateDiagramFKZM4ZOCInput33
          .append("rect")
          .attr("x", 0)
          .attr("y", chunkABZYJK2DB().state.padding),
        { textWidth, textHeight } = stateDiagramFKZM4ZOCBinding8(
          stateDiagramFKZM4ZOCInput32,
          0,
          0,
          stateDiagramFKZM4ZOCInput33.append("g"),
        );
      return (
        stateDiagramFKZM4ZOCBinding98.attr(
          "height",
          textHeight + 2 * chunkABZYJK2DB().state.noteMargin,
        ),
        stateDiagramFKZM4ZOCBinding98.attr(
          "width",
          textWidth + chunkABZYJK2DB().state.noteMargin * 2,
        ),
        stateDiagramFKZM4ZOCBinding98
      );
    },
    "drawNote",
  );
  stateDiagramFKZM4ZOCBinding10 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCInput20,
    stateDiagramFKZM4ZOCInput21,
  ) {
    let stateDiagramFKZM4ZOCBinding71 = stateDiagramFKZM4ZOCInput21.id,
      stateDiagramFKZM4ZOCBinding72 = {
        id: stateDiagramFKZM4ZOCBinding71,
        label: stateDiagramFKZM4ZOCInput21.id,
        width: 0,
        height: 0,
      },
      stateDiagramFKZM4ZOCBinding73 = stateDiagramFKZM4ZOCInput20
        .append("g")
        .attr("id", stateDiagramFKZM4ZOCBinding71)
        .attr("class", "stateGroup");
    stateDiagramFKZM4ZOCInput21.type === "start" &&
      stateDiagramFKZM4ZOCBinding1(stateDiagramFKZM4ZOCBinding73);
    stateDiagramFKZM4ZOCInput21.type === "end" &&
      stateDiagramFKZM4ZOCBinding6(stateDiagramFKZM4ZOCBinding73);
    (stateDiagramFKZM4ZOCInput21.type === "fork" ||
      stateDiagramFKZM4ZOCInput21.type === "join") &&
      stateDiagramFKZM4ZOCBinding7(
        stateDiagramFKZM4ZOCBinding73,
        stateDiagramFKZM4ZOCInput21,
      );
    stateDiagramFKZM4ZOCInput21.type === "note" &&
      stateDiagramFKZM4ZOCBinding9(
        stateDiagramFKZM4ZOCInput21.note.text,
        stateDiagramFKZM4ZOCBinding73,
      );
    stateDiagramFKZM4ZOCInput21.type === "divider" &&
      stateDiagramFKZM4ZOCBinding2(stateDiagramFKZM4ZOCBinding73);
    stateDiagramFKZM4ZOCInput21.type === "default" &&
      stateDiagramFKZM4ZOCInput21.descriptions.length === 0 &&
      stateDiagramFKZM4ZOCBinding3(
        stateDiagramFKZM4ZOCBinding73,
        stateDiagramFKZM4ZOCInput21,
      );
    stateDiagramFKZM4ZOCInput21.type === "default" &&
      stateDiagramFKZM4ZOCInput21.descriptions.length > 0 &&
      stateDiagramFKZM4ZOCBinding4(
        stateDiagramFKZM4ZOCBinding73,
        stateDiagramFKZM4ZOCInput21,
      );
    let stateDiagramFKZM4ZOCBinding74 = stateDiagramFKZM4ZOCBinding73
      .node()
      .getBBox();
    return (
      (stateDiagramFKZM4ZOCBinding72.width =
        stateDiagramFKZM4ZOCBinding74.width +
        2 * chunkABZYJK2DB().state.padding),
      (stateDiagramFKZM4ZOCBinding72.height =
        stateDiagramFKZM4ZOCBinding74.height +
        2 * chunkABZYJK2DB().state.padding),
      stateDiagramFKZM4ZOCBinding72
    );
  }, "drawState");
  stateDiagramFKZM4ZOCBinding11 = 0;
  stateDiagramFKZM4ZOCBinding12 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCInput8,
    stateDiagramFKZM4ZOCInput9,
    stateDiagramFKZM4ZOCInput10,
  ) {
    let stateDiagramFKZM4ZOCBinding30 = chunkAGHRB4JFN(function (
      stateDiagramFKZM4ZOCInput31,
    ) {
      switch (stateDiagramFKZM4ZOCInput31) {
        case chunkDI55MBZ5T.relationType.AGGREGATION:
          return "aggregation";
        case chunkDI55MBZ5T.relationType.EXTENSION:
          return "extension";
        case chunkDI55MBZ5T.relationType.COMPOSITION:
          return "composition";
        case chunkDI55MBZ5T.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    stateDiagramFKZM4ZOCInput9.points =
      stateDiagramFKZM4ZOCInput9.points.filter((item) => !Number.isNaN(item.y));
    let stateDiagramFKZM4ZOCBinding31 = stateDiagramFKZM4ZOCInput9.points,
      stateDiagramFKZM4ZOCBinding32 = AppInitialAit()
        .x(function (stateDiagramFKZM4ZOCInput41) {
          return stateDiagramFKZM4ZOCInput41.x;
        })
        .y(function (stateDiagramFKZM4ZOCInput42) {
          return stateDiagramFKZM4ZOCInput42.y;
        })
        .curve(AppInitialSit),
      stateDiagramFKZM4ZOCBinding33 = stateDiagramFKZM4ZOCInput8
        .append("path")
        .attr("d", stateDiagramFKZM4ZOCBinding32(stateDiagramFKZM4ZOCBinding31))
        .attr("id", "edge" + stateDiagramFKZM4ZOCBinding11)
        .attr("class", "transition"),
      stateDiagramFKZM4ZOCBinding34 = "";
    if (
      (chunkABZYJK2DB().state.arrowMarkerAbsolute &&
        (stateDiagramFKZM4ZOCBinding34 = chunkABZYJK2DE(true)),
      stateDiagramFKZM4ZOCBinding33.attr(
        "marker-end",
        "url(" +
          stateDiagramFKZM4ZOCBinding34 +
          "#" +
          stateDiagramFKZM4ZOCBinding30(
            chunkDI55MBZ5T.relationType.DEPENDENCY,
          ) +
          "End)",
      ),
      stateDiagramFKZM4ZOCInput10.title !== undefined)
    ) {
      let stateDiagramFKZM4ZOCBinding55 = stateDiagramFKZM4ZOCInput8
          .append("g")
          .attr("class", "stateLabel"),
        { x, y } = chunkS3R3BYOJG.calcLabelPosition(
          stateDiagramFKZM4ZOCInput9.points,
        ),
        stateDiagramFKZM4ZOCBinding56 = chunkABZYJK2DS.getRows(
          stateDiagramFKZM4ZOCInput10.title,
        ),
        stateDiagramFKZM4ZOCBinding57 = 0,
        stateDiagramFKZM4ZOCBinding58 = [],
        stateDiagramFKZM4ZOCBinding59 = 0,
        stateDiagramFKZM4ZOCBinding60 = 0;
      for (
        let stateDiagramFKZM4ZOCBinding87 = 0;
        stateDiagramFKZM4ZOCBinding87 <= stateDiagramFKZM4ZOCBinding56.length;
        stateDiagramFKZM4ZOCBinding87++
      ) {
        let stateDiagramFKZM4ZOCBinding88 = stateDiagramFKZM4ZOCBinding55
            .append("text")
            .attr("text-anchor", "middle")
            .text(stateDiagramFKZM4ZOCBinding56[stateDiagramFKZM4ZOCBinding87])
            .attr("x", x)
            .attr("y", y + stateDiagramFKZM4ZOCBinding57),
          stateDiagramFKZM4ZOCBinding89 = stateDiagramFKZM4ZOCBinding88
            .node()
            .getBBox();
        stateDiagramFKZM4ZOCBinding59 = Math.max(
          stateDiagramFKZM4ZOCBinding59,
          stateDiagramFKZM4ZOCBinding89.width,
        );
        stateDiagramFKZM4ZOCBinding60 = Math.min(
          stateDiagramFKZM4ZOCBinding60,
          stateDiagramFKZM4ZOCBinding89.x,
        );
        chunkAGHRB4JFI.info(
          stateDiagramFKZM4ZOCBinding89.x,
          x,
          y + stateDiagramFKZM4ZOCBinding57,
        );
        stateDiagramFKZM4ZOCBinding57 === 0 &&
          ((stateDiagramFKZM4ZOCBinding57 = stateDiagramFKZM4ZOCBinding88
            .node()
            .getBBox().height),
          chunkAGHRB4JFI.info(
            "Title height",
            stateDiagramFKZM4ZOCBinding57,
            y,
          ));
        stateDiagramFKZM4ZOCBinding58.push(stateDiagramFKZM4ZOCBinding88);
      }
      let stateDiagramFKZM4ZOCBinding61 =
        stateDiagramFKZM4ZOCBinding57 * stateDiagramFKZM4ZOCBinding56.length;
      if (stateDiagramFKZM4ZOCBinding56.length > 1) {
        let stateDiagramFKZM4ZOCBinding102 =
          (stateDiagramFKZM4ZOCBinding56.length - 1) *
          stateDiagramFKZM4ZOCBinding57 *
          0.5;
        stateDiagramFKZM4ZOCBinding58.forEach((item, index) =>
          item.attr(
            "y",
            y +
              index * stateDiagramFKZM4ZOCBinding57 -
              stateDiagramFKZM4ZOCBinding102,
          ),
        );
        stateDiagramFKZM4ZOCBinding61 =
          stateDiagramFKZM4ZOCBinding57 * stateDiagramFKZM4ZOCBinding56.length;
      }
      let stateDiagramFKZM4ZOCBinding62 = stateDiagramFKZM4ZOCBinding55
        .node()
        .getBBox();
      stateDiagramFKZM4ZOCBinding55
        .insert("rect", ":first-child")
        .attr("class", "box")
        .attr(
          "x",
          x -
            stateDiagramFKZM4ZOCBinding59 / 2 -
            chunkABZYJK2DB().state.padding / 2,
        )
        .attr(
          "y",
          y -
            stateDiagramFKZM4ZOCBinding61 / 2 -
            chunkABZYJK2DB().state.padding / 2 -
            3.5,
        )
        .attr(
          "width",
          stateDiagramFKZM4ZOCBinding59 + chunkABZYJK2DB().state.padding,
        )
        .attr(
          "height",
          stateDiagramFKZM4ZOCBinding61 + chunkABZYJK2DB().state.padding,
        );
      chunkAGHRB4JFI.info(stateDiagramFKZM4ZOCBinding62);
    }
    stateDiagramFKZM4ZOCBinding11++;
  }, "drawEdge");
  stateDiagramFKZM4ZOCBinding14 = {};
  stateDiagramFKZM4ZOCBinding15 = chunkAGHRB4JFN(function () {}, "setConf");
  stateDiagramFKZM4ZOCBinding16 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCInput34,
  ) {
    stateDiagramFKZM4ZOCInput34
      .append("defs")
      .append("marker")
      .attr("id", "dependencyEnd")
      .attr("refX", 19)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers");
  stateDiagramFKZM4ZOCBinding17 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCInput22,
    stateDiagramFKZM4ZOCInput23,
    stateDiagramFKZM4ZOCInput24,
    stateDiagramFKZM4ZOCInput25,
  ) {
    stateDiagramFKZM4ZOCBinding13 = chunkABZYJK2DB().state;
    let stateDiagramFKZM4ZOCBinding75 = chunkABZYJK2DB().securityLevel,
      stateDiagramFKZM4ZOCBinding76;
    stateDiagramFKZM4ZOCBinding75 === "sandbox" &&
      (stateDiagramFKZM4ZOCBinding76 = srcR(
        "#i" + stateDiagramFKZM4ZOCInput23,
      ));
    let stateDiagramFKZM4ZOCBinding77 = srcR(
        stateDiagramFKZM4ZOCBinding75 === "sandbox"
          ? stateDiagramFKZM4ZOCBinding76.nodes()[0].contentDocument.body
          : "body",
      ),
      stateDiagramFKZM4ZOCBinding78 =
        stateDiagramFKZM4ZOCBinding75 === "sandbox"
          ? stateDiagramFKZM4ZOCBinding76.nodes()[0].contentDocument
          : document;
    chunkAGHRB4JFI.debug("Rendering diagram " + stateDiagramFKZM4ZOCInput22);
    let stateDiagramFKZM4ZOCBinding79 = stateDiagramFKZM4ZOCBinding77.select(
      `[id='${stateDiagramFKZM4ZOCInput23}']`,
    );
    stateDiagramFKZM4ZOCBinding16(stateDiagramFKZM4ZOCBinding79);
    stateDiagramFKZM4ZOCBinding19(
      stateDiagramFKZM4ZOCInput25.db.getRootDoc(),
      stateDiagramFKZM4ZOCBinding79,
      undefined,
      false,
      stateDiagramFKZM4ZOCBinding77,
      stateDiagramFKZM4ZOCBinding78,
      stateDiagramFKZM4ZOCInput25,
    );
    let stateDiagramFKZM4ZOCBinding80 = stateDiagramFKZM4ZOCBinding13.padding,
      stateDiagramFKZM4ZOCBinding81 = stateDiagramFKZM4ZOCBinding79
        .node()
        .getBBox(),
      stateDiagramFKZM4ZOCBinding82 =
        stateDiagramFKZM4ZOCBinding81.width + stateDiagramFKZM4ZOCBinding80 * 2,
      stateDiagramFKZM4ZOCBinding83 =
        stateDiagramFKZM4ZOCBinding81.height +
        stateDiagramFKZM4ZOCBinding80 * 2;
    chunkABZYJK2DC(
      stateDiagramFKZM4ZOCBinding79,
      stateDiagramFKZM4ZOCBinding83,
      stateDiagramFKZM4ZOCBinding82 * 1.75,
      stateDiagramFKZM4ZOCBinding13.useMaxWidth,
    );
    stateDiagramFKZM4ZOCBinding79.attr(
      "viewBox",
      `${stateDiagramFKZM4ZOCBinding81.x - stateDiagramFKZM4ZOCBinding13.padding}  ${stateDiagramFKZM4ZOCBinding81.y - stateDiagramFKZM4ZOCBinding13.padding} ` +
        stateDiagramFKZM4ZOCBinding82 +
        " " +
        stateDiagramFKZM4ZOCBinding83,
    );
  }, "draw");
  stateDiagramFKZM4ZOCBinding18 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCInput43) =>
      stateDiagramFKZM4ZOCInput43
        ? stateDiagramFKZM4ZOCInput43.length *
          stateDiagramFKZM4ZOCBinding13.fontSizeFactor
        : 1,
    "getLabelWidth",
  );
  stateDiagramFKZM4ZOCBinding19 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCInput1,
      stateDiagramFKZM4ZOCInput2,
      stateDiagramFKZM4ZOCInput3,
      stateDiagramFKZM4ZOCInput4,
      stateDiagramFKZM4ZOCInput5,
      stateDiagramFKZM4ZOCInput6,
      stateDiagramFKZM4ZOCInput7,
    ) => {
      let stateDiagramFKZM4ZOCBinding20 = new stateDiagramFKZM4ZOCImport1({
          compound: true,
          multigraph: true,
        }),
        stateDiagramFKZM4ZOCBinding21,
        stateDiagramFKZM4ZOCBinding22 = true;
      for (
        stateDiagramFKZM4ZOCBinding21 = 0;
        stateDiagramFKZM4ZOCBinding21 < stateDiagramFKZM4ZOCInput1.length;
        stateDiagramFKZM4ZOCBinding21++
      )
        if (
          stateDiagramFKZM4ZOCInput1[stateDiagramFKZM4ZOCBinding21].stmt ===
          "relation"
        ) {
          stateDiagramFKZM4ZOCBinding22 = false;
          break;
        }
      stateDiagramFKZM4ZOCInput3
        ? stateDiagramFKZM4ZOCBinding20.setGraph({
            rankdir: "LR",
            multigraph: true,
            compound: true,
            ranker: "tight-tree",
            ranksep: stateDiagramFKZM4ZOCBinding22
              ? 1
              : stateDiagramFKZM4ZOCBinding13.edgeLengthFactor,
            nodeSep: stateDiagramFKZM4ZOCBinding22 ? 1 : 50,
            isMultiGraph: true,
          })
        : stateDiagramFKZM4ZOCBinding20.setGraph({
            rankdir: "TB",
            multigraph: true,
            compound: true,
            ranksep: stateDiagramFKZM4ZOCBinding22
              ? 1
              : stateDiagramFKZM4ZOCBinding13.edgeLengthFactor,
            nodeSep: stateDiagramFKZM4ZOCBinding22 ? 1 : 50,
            ranker: "tight-tree",
            isMultiGraph: true,
          });
      stateDiagramFKZM4ZOCBinding20.setDefaultEdgeLabel(function () {
        return {};
      });
      let stateDiagramFKZM4ZOCBinding23 =
          stateDiagramFKZM4ZOCInput7.db.getStates(),
        stateDiagramFKZM4ZOCBinding24 =
          stateDiagramFKZM4ZOCInput7.db.getRelations(),
        stateDiagramFKZM4ZOCBinding25 = Object.keys(
          stateDiagramFKZM4ZOCBinding23,
        );
      for (let stateDiagramFKZM4ZOCBinding63 of stateDiagramFKZM4ZOCBinding25) {
        let stateDiagramFKZM4ZOCBinding64 =
          stateDiagramFKZM4ZOCBinding23[stateDiagramFKZM4ZOCBinding63];
        stateDiagramFKZM4ZOCInput3 &&
          (stateDiagramFKZM4ZOCBinding64.parentId = stateDiagramFKZM4ZOCInput3);
        let stateDiagramFKZM4ZOCBinding65;
        if (stateDiagramFKZM4ZOCBinding64.doc) {
          let stateDiagramFKZM4ZOCBinding96 = stateDiagramFKZM4ZOCInput2
            .append("g")
            .attr("id", stateDiagramFKZM4ZOCBinding64.id)
            .attr("class", "stateGroup");
          stateDiagramFKZM4ZOCBinding65 = stateDiagramFKZM4ZOCBinding19(
            stateDiagramFKZM4ZOCBinding64.doc,
            stateDiagramFKZM4ZOCBinding96,
            stateDiagramFKZM4ZOCBinding64.id,
            !stateDiagramFKZM4ZOCInput4,
            stateDiagramFKZM4ZOCInput5,
            stateDiagramFKZM4ZOCInput6,
            stateDiagramFKZM4ZOCInput7,
          );
          {
            stateDiagramFKZM4ZOCBinding96 = stateDiagramFKZM4ZOCBinding5(
              stateDiagramFKZM4ZOCBinding96,
              stateDiagramFKZM4ZOCBinding64,
              stateDiagramFKZM4ZOCInput4,
            );
            let stateDiagramFKZM4ZOCBinding100 = stateDiagramFKZM4ZOCBinding96
              .node()
              .getBBox();
            stateDiagramFKZM4ZOCBinding65.width =
              stateDiagramFKZM4ZOCBinding100.width;
            stateDiagramFKZM4ZOCBinding65.height =
              stateDiagramFKZM4ZOCBinding100.height +
              stateDiagramFKZM4ZOCBinding13.padding / 2;
            stateDiagramFKZM4ZOCBinding14[stateDiagramFKZM4ZOCBinding64.id] = {
              y: stateDiagramFKZM4ZOCBinding13.compositTitleSize,
            };
          }
        } else
          stateDiagramFKZM4ZOCBinding65 = stateDiagramFKZM4ZOCBinding10(
            stateDiagramFKZM4ZOCInput2,
            stateDiagramFKZM4ZOCBinding64,
            stateDiagramFKZM4ZOCBinding20,
          );
        if (stateDiagramFKZM4ZOCBinding64.note) {
          let stateDiagramFKZM4ZOCBinding86 = stateDiagramFKZM4ZOCBinding10(
            stateDiagramFKZM4ZOCInput2,
            {
              descriptions: [],
              id: stateDiagramFKZM4ZOCBinding64.id + "-note",
              note: stateDiagramFKZM4ZOCBinding64.note,
              type: "note",
            },
            stateDiagramFKZM4ZOCBinding20,
          );
          stateDiagramFKZM4ZOCBinding64.note.position === "left of"
            ? (stateDiagramFKZM4ZOCBinding20.setNode(
                stateDiagramFKZM4ZOCBinding65.id + "-note",
                stateDiagramFKZM4ZOCBinding86,
              ),
              stateDiagramFKZM4ZOCBinding20.setNode(
                stateDiagramFKZM4ZOCBinding65.id,
                stateDiagramFKZM4ZOCBinding65,
              ))
            : (stateDiagramFKZM4ZOCBinding20.setNode(
                stateDiagramFKZM4ZOCBinding65.id,
                stateDiagramFKZM4ZOCBinding65,
              ),
              stateDiagramFKZM4ZOCBinding20.setNode(
                stateDiagramFKZM4ZOCBinding65.id + "-note",
                stateDiagramFKZM4ZOCBinding86,
              ));
          stateDiagramFKZM4ZOCBinding20.setParent(
            stateDiagramFKZM4ZOCBinding65.id,
            stateDiagramFKZM4ZOCBinding65.id + "-group",
          );
          stateDiagramFKZM4ZOCBinding20.setParent(
            stateDiagramFKZM4ZOCBinding65.id + "-note",
            stateDiagramFKZM4ZOCBinding65.id + "-group",
          );
        } else
          stateDiagramFKZM4ZOCBinding20.setNode(
            stateDiagramFKZM4ZOCBinding65.id,
            stateDiagramFKZM4ZOCBinding65,
          );
      }
      chunkAGHRB4JFI.debug(
        "Count=",
        stateDiagramFKZM4ZOCBinding20.nodeCount(),
        stateDiagramFKZM4ZOCBinding20,
      );
      let stateDiagramFKZM4ZOCBinding26 = 0;
      stateDiagramFKZM4ZOCBinding24.forEach(function (item) {
        stateDiagramFKZM4ZOCBinding26++;
        chunkAGHRB4JFI.debug("Setting edge", item);
        stateDiagramFKZM4ZOCBinding20.setEdge(
          item.id1,
          item.id2,
          {
            relation: item,
            width: stateDiagramFKZM4ZOCBinding18(item.title),
            height:
              stateDiagramFKZM4ZOCBinding13.labelHeight *
              chunkABZYJK2DS.getRows(item.title).length,
            labelpos: "c",
          },
          "id" + stateDiagramFKZM4ZOCBinding26,
        );
      });
      stateDiagramFKZM4ZOCImport3(stateDiagramFKZM4ZOCBinding20);
      chunkAGHRB4JFI.debug(
        "Graph after layout",
        stateDiagramFKZM4ZOCBinding20.nodes(),
      );
      let stateDiagramFKZM4ZOCBinding27 = stateDiagramFKZM4ZOCInput2.node();
      stateDiagramFKZM4ZOCBinding20.nodes().forEach(function (item) {
        item !== undefined &&
        stateDiagramFKZM4ZOCBinding20.node(item) !== undefined
          ? (chunkAGHRB4JFI.warn(
              "Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFKZM4ZOCBinding20.node(item)),
            ),
            stateDiagramFKZM4ZOCInput5
              .select("#" + stateDiagramFKZM4ZOCBinding27.id + " #" + item)
              .attr(
                "transform",
                "translate(" +
                  (stateDiagramFKZM4ZOCBinding20.node(item).x -
                    stateDiagramFKZM4ZOCBinding20.node(item).width / 2) +
                  "," +
                  (stateDiagramFKZM4ZOCBinding20.node(item).y +
                    (stateDiagramFKZM4ZOCBinding14[item]
                      ? stateDiagramFKZM4ZOCBinding14[item].y
                      : 0) -
                    stateDiagramFKZM4ZOCBinding20.node(item).height / 2) +
                  " )",
              ),
            stateDiagramFKZM4ZOCInput5
              .select("#" + stateDiagramFKZM4ZOCBinding27.id + " #" + item)
              .attr(
                "data-x-shift",
                stateDiagramFKZM4ZOCBinding20.node(item).x -
                  stateDiagramFKZM4ZOCBinding20.node(item).width / 2,
              ),
            stateDiagramFKZM4ZOCInput6
              .querySelectorAll(
                "#" +
                  stateDiagramFKZM4ZOCBinding27.id +
                  " #" +
                  item +
                  " .divider",
              )
              .forEach((_item) => {
                let stateDiagramFKZM4ZOCBinding90 = _item.parentElement,
                  stateDiagramFKZM4ZOCBinding91 = 0,
                  stateDiagramFKZM4ZOCBinding92 = 0;
                stateDiagramFKZM4ZOCBinding90 &&
                  (stateDiagramFKZM4ZOCBinding90.parentElement &&
                    (stateDiagramFKZM4ZOCBinding91 =
                      stateDiagramFKZM4ZOCBinding90.parentElement.getBBox()
                        .width),
                  (stateDiagramFKZM4ZOCBinding92 = parseInt(
                    stateDiagramFKZM4ZOCBinding90.getAttribute("data-x-shift"),
                    10,
                  )),
                  Number.isNaN(stateDiagramFKZM4ZOCBinding92) &&
                    (stateDiagramFKZM4ZOCBinding92 = 0));
                _item.setAttribute("x1", 0 - stateDiagramFKZM4ZOCBinding92 + 8);
                _item.setAttribute(
                  "x2",
                  stateDiagramFKZM4ZOCBinding91 -
                    stateDiagramFKZM4ZOCBinding92 -
                    8,
                );
              }))
          : chunkAGHRB4JFI.debug(
              "No Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFKZM4ZOCBinding20.node(item)),
            );
      });
      let stateDiagramFKZM4ZOCBinding28 =
        stateDiagramFKZM4ZOCBinding27.getBBox();
      stateDiagramFKZM4ZOCBinding20.edges().forEach(function (item) {
        item !== undefined &&
          stateDiagramFKZM4ZOCBinding20.edge(item) !== undefined &&
          (chunkAGHRB4JFI.debug(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(stateDiagramFKZM4ZOCBinding20.edge(item)),
          ),
          stateDiagramFKZM4ZOCBinding12(
            stateDiagramFKZM4ZOCInput2,
            stateDiagramFKZM4ZOCBinding20.edge(item),
            stateDiagramFKZM4ZOCBinding20.edge(item).relation,
          ));
      });
      stateDiagramFKZM4ZOCBinding28 = stateDiagramFKZM4ZOCBinding27.getBBox();
      let stateDiagramFKZM4ZOCBinding29 = {
        id: stateDiagramFKZM4ZOCInput3 || "root",
        label: stateDiagramFKZM4ZOCInput3 || "root",
        width: 0,
        height: 0,
      };
      return (
        (stateDiagramFKZM4ZOCBinding29.width =
          stateDiagramFKZM4ZOCBinding28.width +
          2 * stateDiagramFKZM4ZOCBinding13.padding),
        (stateDiagramFKZM4ZOCBinding29.height =
          stateDiagramFKZM4ZOCBinding28.height +
          2 * stateDiagramFKZM4ZOCBinding13.padding),
        chunkAGHRB4JFI.debug(
          "Doc rendered",
          stateDiagramFKZM4ZOCBinding29,
          stateDiagramFKZM4ZOCBinding20,
        ),
        stateDiagramFKZM4ZOCBinding29
      );
    },
    "renderDoc",
  );
  stateDiagramFKZM4ZOC = {
    parser: chunkDI55MBZ5R,
    get db() {
      return new chunkDI55MBZ5T(1);
    },
    renderer: {
      setConf: stateDiagramFKZM4ZOCBinding15,
      draw: stateDiagramFKZM4ZOCBinding17,
    },
    styles: chunkDI55MBZ5A,
    init: chunkAGHRB4JFN((stateDiagramFKZM4ZOCInput40) => {
      stateDiagramFKZM4ZOCInput40.state ||= {};
      stateDiagramFKZM4ZOCInput40.state.arrowMarkerAbsolute =
        stateDiagramFKZM4ZOCInput40.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { stateDiagramFKZM4ZOC as diagram };
