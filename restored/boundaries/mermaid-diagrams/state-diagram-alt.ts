// Restored from ref/webview/assets/stateDiagram-FHFEXIEX-Cj7wc3RC.js
// Mermaid state diagram v1 definition (alt). app-initial Ait/Sit → d3-shape line + curveBasis.
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
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  D as chunkICPOFSXXD,
  b as chunkICPOFSXXB,
  c as chunkICPOFSXXC,
  s as chunkICPOFSXXS,
} from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWG, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA as chunkU2HBQHQKI } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk as chunkBSJP7CBPR } from "../../diagrams/line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "../../diagrams/subgraph-title-margins-alt";
import {
  Graph as stateDiagramFHFEXIEXImport1,
  t as stateDiagramFHFEXIEXImport2,
} from "../../vendor/graphlib";
import { n as chunk55IACEB6N } from "../../diagrams/get-diagram-element-alt";
import { t as chunkEDXVE4YYT } from "../../diagrams/setup-viewport-for-svg-alt";
import { n as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import { chunk336JU56ON } from "../../diagrams/mermaid-layout-loaders-alt";
import {
  layout as stateDiagramFHFEXIEXImport3,
  t as stateDiagramFHFEXIEXImport4,
} from "../../vendor/dagre";
import {
  chunkOYMX7WX6A,
  chunkOYMX7WX6N,
  chunkOYMX7WX6R,
  chunkOYMX7WX6T,
} from "./mermaid-state-diagram-core-alt";
var stateDiagramFHFEXIEXBinding1,
  stateDiagramFHFEXIEXBinding2,
  stateDiagramFHFEXIEXBinding3,
  stateDiagramFHFEXIEXBinding4,
  stateDiagramFHFEXIEXBinding5,
  stateDiagramFHFEXIEXBinding6,
  stateDiagramFHFEXIEXBinding7,
  stateDiagramFHFEXIEXBinding8,
  stateDiagramFHFEXIEXBinding9,
  stateDiagramFHFEXIEXBinding10,
  stateDiagramFHFEXIEXBinding11,
  stateDiagramFHFEXIEXBinding12,
  stateDiagramFHFEXIEXBinding13,
  stateDiagramFHFEXIEXBinding14,
  stateDiagramFHFEXIEXBinding15,
  stateDiagramFHFEXIEXBinding16,
  stateDiagramFHFEXIEXBinding17,
  stateDiagramFHFEXIEXBinding18,
  stateDiagramFHFEXIEXBinding19,
  stateDiagramFHFEXIEX;
esmInit(() => {
  chunkOYMX7WX6N();
  chunk55IACEB6N();
  chunkEDXVE4YYT();
  chunk336JU56ON();
  chunkENJZ2VHEN();
  chunkBSJP7CBPR();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKI();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  srcT();
  stateDiagramFHFEXIEXImport4();
  stateDiagramFHFEXIEXImport2();
  stateDiagramFHFEXIEXBinding1 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput36) =>
      stateDiagramFHFEXIEXInput36
        .append("circle")
        .attr("class", "start-state")
        .attr("r", chunkICPOFSXXB().state.sizeUnit)
        .attr(
          "cx",
          chunkICPOFSXXB().state.padding + chunkICPOFSXXB().state.sizeUnit,
        )
        .attr(
          "cy",
          chunkICPOFSXXB().state.padding + chunkICPOFSXXB().state.sizeUnit,
        ),
    "drawStartState",
  );
  stateDiagramFHFEXIEXBinding2 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput35) =>
      stateDiagramFHFEXIEXInput35
        .append("line")
        .style("stroke", "grey")
        .style("stroke-dasharray", "3")
        .attr("x1", chunkICPOFSXXB().state.textHeight)
        .attr("class", "divider")
        .attr("x2", chunkICPOFSXXB().state.textHeight * 2)
        .attr("y1", 0)
        .attr("y2", 0),
    "drawDivider",
  );
  stateDiagramFHFEXIEXBinding3 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput27, stateDiagramFHFEXIEXInput28) => {
      let stateDiagramFHFEXIEXBinding84 = stateDiagramFHFEXIEXInput27
          .append("text")
          .attr("x", 2 * chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            chunkICPOFSXXB().state.textHeight +
              2 * chunkICPOFSXXB().state.padding,
          )
          .attr("font-size", chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXInput28.id),
        stateDiagramFHFEXIEXBinding85 = stateDiagramFHFEXIEXBinding84
          .node()
          .getBBox();
      return (
        stateDiagramFHFEXIEXInput27
          .insert("rect", ":first-child")
          .attr("x", chunkICPOFSXXB().state.padding)
          .attr("y", chunkICPOFSXXB().state.padding)
          .attr(
            "width",
            stateDiagramFHFEXIEXBinding85.width +
              2 * chunkICPOFSXXB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFHFEXIEXBinding85.height +
              2 * chunkICPOFSXXB().state.padding,
          )
          .attr("rx", chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXBinding84
      );
    },
    "drawSimpleState",
  );
  stateDiagramFHFEXIEXBinding4 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput14, stateDiagramFHFEXIEXInput15) => {
      let stateDiagramFHFEXIEXBinding46 = chunkAGHRB4JFN(function (
          stateDiagramFHFEXIEXInput37,
          stateDiagramFHFEXIEXInput38,
          stateDiagramFHFEXIEXInput39,
        ) {
          let stateDiagramFHFEXIEXBinding101 = stateDiagramFHFEXIEXInput37
            .append("tspan")
            .attr("x", 2 * chunkICPOFSXXB().state.padding)
            .text(stateDiagramFHFEXIEXInput38);
          stateDiagramFHFEXIEXInput39 ||
            stateDiagramFHFEXIEXBinding101.attr(
              "dy",
              chunkICPOFSXXB().state.textHeight,
            );
        }, "addTspan"),
        stateDiagramFHFEXIEXBinding47 = stateDiagramFHFEXIEXInput14
          .append("text")
          .attr("x", 2 * chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            chunkICPOFSXXB().state.textHeight +
              1.3 * chunkICPOFSXXB().state.padding,
          )
          .attr("font-size", chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXInput15.descriptions[0])
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXBinding48 = stateDiagramFHFEXIEXBinding47.height,
        stateDiagramFHFEXIEXBinding49 = stateDiagramFHFEXIEXInput14
          .append("text")
          .attr("x", chunkICPOFSXXB().state.padding)
          .attr(
            "y",
            stateDiagramFHFEXIEXBinding48 +
              chunkICPOFSXXB().state.padding * 0.4 +
              chunkICPOFSXXB().state.dividerMargin +
              chunkICPOFSXXB().state.textHeight,
          )
          .attr("class", "state-description"),
        stateDiagramFHFEXIEXBinding50 = true,
        stateDiagramFHFEXIEXBinding51 = true;
      stateDiagramFHFEXIEXInput15.descriptions.forEach(function (item) {
        stateDiagramFHFEXIEXBinding50 ||
          (stateDiagramFHFEXIEXBinding46(
            stateDiagramFHFEXIEXBinding49,
            item,
            stateDiagramFHFEXIEXBinding51,
          ),
          (stateDiagramFHFEXIEXBinding51 = false));
        stateDiagramFHFEXIEXBinding50 = false;
      });
      let stateDiagramFHFEXIEXBinding52 = stateDiagramFHFEXIEXInput14
          .append("line")
          .attr("x1", chunkICPOFSXXB().state.padding)
          .attr(
            "y1",
            chunkICPOFSXXB().state.padding +
              stateDiagramFHFEXIEXBinding48 +
              chunkICPOFSXXB().state.dividerMargin / 2,
          )
          .attr(
            "y2",
            chunkICPOFSXXB().state.padding +
              stateDiagramFHFEXIEXBinding48 +
              chunkICPOFSXXB().state.dividerMargin / 2,
          )
          .attr("class", "descr-divider"),
        stateDiagramFHFEXIEXBinding53 = stateDiagramFHFEXIEXBinding49
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXBinding54 = Math.max(
          stateDiagramFHFEXIEXBinding53.width,
          stateDiagramFHFEXIEXBinding47.width,
        );
      return (
        stateDiagramFHFEXIEXBinding52.attr(
          "x2",
          stateDiagramFHFEXIEXBinding54 + 3 * chunkICPOFSXXB().state.padding,
        ),
        stateDiagramFHFEXIEXInput14
          .insert("rect", ":first-child")
          .attr("x", chunkICPOFSXXB().state.padding)
          .attr("y", chunkICPOFSXXB().state.padding)
          .attr(
            "width",
            stateDiagramFHFEXIEXBinding54 + 2 * chunkICPOFSXXB().state.padding,
          )
          .attr(
            "height",
            stateDiagramFHFEXIEXBinding53.height +
              stateDiagramFHFEXIEXBinding48 +
              2 * chunkICPOFSXXB().state.padding,
          )
          .attr("rx", chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXInput14
      );
    },
    "drawDescrState",
  );
  stateDiagramFHFEXIEXBinding5 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXInput11,
      stateDiagramFHFEXIEXInput12,
      stateDiagramFHFEXIEXInput13,
    ) => {
      let stateDiagramFHFEXIEXBinding35 = chunkICPOFSXXB().state.padding,
        stateDiagramFHFEXIEXBinding36 = 2 * chunkICPOFSXXB().state.padding,
        stateDiagramFHFEXIEXBinding37 = stateDiagramFHFEXIEXInput11
          .node()
          .getBBox(),
        stateDiagramFHFEXIEXBinding38 = stateDiagramFHFEXIEXBinding37.width,
        stateDiagramFHFEXIEXBinding39 = stateDiagramFHFEXIEXBinding37.x,
        stateDiagramFHFEXIEXBinding40 = stateDiagramFHFEXIEXInput11
          .append("text")
          .attr("x", 0)
          .attr("y", chunkICPOFSXXB().state.titleShift)
          .attr("font-size", chunkICPOFSXXB().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFHFEXIEXInput12.id),
        stateDiagramFHFEXIEXBinding41 =
          stateDiagramFHFEXIEXBinding40.node().getBBox().width +
          stateDiagramFHFEXIEXBinding36,
        stateDiagramFHFEXIEXBinding42 = Math.max(
          stateDiagramFHFEXIEXBinding41,
          stateDiagramFHFEXIEXBinding38,
        );
      stateDiagramFHFEXIEXBinding42 === stateDiagramFHFEXIEXBinding38 &&
        (stateDiagramFHFEXIEXBinding42 += stateDiagramFHFEXIEXBinding36);
      let stateDiagramFHFEXIEXBinding43,
        stateDiagramFHFEXIEXBinding44 = stateDiagramFHFEXIEXInput11
          .node()
          .getBBox();
      stateDiagramFHFEXIEXInput12.doc;
      stateDiagramFHFEXIEXBinding43 =
        stateDiagramFHFEXIEXBinding39 - stateDiagramFHFEXIEXBinding35;
      stateDiagramFHFEXIEXBinding41 > stateDiagramFHFEXIEXBinding38 &&
        (stateDiagramFHFEXIEXBinding43 =
          (stateDiagramFHFEXIEXBinding38 - stateDiagramFHFEXIEXBinding42) / 2 +
          stateDiagramFHFEXIEXBinding35);
      Math.abs(
        stateDiagramFHFEXIEXBinding39 - stateDiagramFHFEXIEXBinding44.x,
      ) < stateDiagramFHFEXIEXBinding35 &&
        stateDiagramFHFEXIEXBinding41 > stateDiagramFHFEXIEXBinding38 &&
        (stateDiagramFHFEXIEXBinding43 =
          stateDiagramFHFEXIEXBinding39 -
          (stateDiagramFHFEXIEXBinding41 - stateDiagramFHFEXIEXBinding38) / 2);
      let stateDiagramFHFEXIEXBinding45 = 1 - chunkICPOFSXXB().state.textHeight;
      return (
        stateDiagramFHFEXIEXInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXBinding43)
          .attr("y", stateDiagramFHFEXIEXBinding45)
          .attr(
            "class",
            stateDiagramFHFEXIEXInput13 ? "alt-composit" : "composit",
          )
          .attr("width", stateDiagramFHFEXIEXBinding42)
          .attr(
            "height",
            stateDiagramFHFEXIEXBinding44.height +
              chunkICPOFSXXB().state.textHeight +
              chunkICPOFSXXB().state.titleShift +
              1,
          )
          .attr("rx", "0"),
        stateDiagramFHFEXIEXBinding40.attr(
          "x",
          stateDiagramFHFEXIEXBinding43 + stateDiagramFHFEXIEXBinding35,
        ),
        stateDiagramFHFEXIEXBinding41 <= stateDiagramFHFEXIEXBinding38 &&
          stateDiagramFHFEXIEXBinding40.attr(
            "x",
            stateDiagramFHFEXIEXBinding39 +
              (stateDiagramFHFEXIEXBinding42 - stateDiagramFHFEXIEXBinding36) /
                2 -
              stateDiagramFHFEXIEXBinding41 / 2 +
              stateDiagramFHFEXIEXBinding35,
          ),
        stateDiagramFHFEXIEXInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXBinding43)
          .attr(
            "y",
            chunkICPOFSXXB().state.titleShift -
              chunkICPOFSXXB().state.textHeight -
              chunkICPOFSXXB().state.padding,
          )
          .attr("width", stateDiagramFHFEXIEXBinding42)
          .attr("height", chunkICPOFSXXB().state.textHeight * 3)
          .attr("rx", chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXInput11
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFHFEXIEXBinding43)
          .attr(
            "y",
            chunkICPOFSXXB().state.titleShift -
              chunkICPOFSXXB().state.textHeight -
              chunkICPOFSXXB().state.padding,
          )
          .attr("width", stateDiagramFHFEXIEXBinding42)
          .attr(
            "height",
            stateDiagramFHFEXIEXBinding44.height +
              3 +
              2 * chunkICPOFSXXB().state.textHeight,
          )
          .attr("rx", chunkICPOFSXXB().state.radius),
        stateDiagramFHFEXIEXInput11
      );
    },
    "addTitleAndBox",
  );
  stateDiagramFHFEXIEXBinding6 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput26) => (
      stateDiagramFHFEXIEXInput26
        .append("circle")
        .attr("class", "end-state-outer")
        .attr(
          "r",
          chunkICPOFSXXB().state.sizeUnit + chunkICPOFSXXB().state.miniPadding,
        )
        .attr(
          "cx",
          chunkICPOFSXXB().state.padding +
            chunkICPOFSXXB().state.sizeUnit +
            chunkICPOFSXXB().state.miniPadding,
        )
        .attr(
          "cy",
          chunkICPOFSXXB().state.padding +
            chunkICPOFSXXB().state.sizeUnit +
            chunkICPOFSXXB().state.miniPadding,
        ),
      stateDiagramFHFEXIEXInput26
        .append("circle")
        .attr("class", "end-state-inner")
        .attr("r", chunkICPOFSXXB().state.sizeUnit)
        .attr(
          "cx",
          chunkICPOFSXXB().state.padding + chunkICPOFSXXB().state.sizeUnit + 2,
        )
        .attr(
          "cy",
          chunkICPOFSXXB().state.padding + chunkICPOFSXXB().state.sizeUnit + 2,
        )
    ),
    "drawEndState",
  );
  stateDiagramFHFEXIEXBinding7 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput29, stateDiagramFHFEXIEXInput30) => {
      let stateDiagramFHFEXIEXBinding93 = chunkICPOFSXXB().state.forkWidth,
        stateDiagramFHFEXIEXBinding94 = chunkICPOFSXXB().state.forkHeight;
      if (stateDiagramFHFEXIEXInput30.parentId) {
        let stateDiagramFHFEXIEXBinding104 = stateDiagramFHFEXIEXBinding93;
        stateDiagramFHFEXIEXBinding93 = stateDiagramFHFEXIEXBinding94;
        stateDiagramFHFEXIEXBinding94 = stateDiagramFHFEXIEXBinding104;
      }
      return stateDiagramFHFEXIEXInput29
        .append("rect")
        .style("stroke", "black")
        .style("fill", "black")
        .attr("width", stateDiagramFHFEXIEXBinding93)
        .attr("height", stateDiagramFHFEXIEXBinding94)
        .attr("x", chunkICPOFSXXB().state.padding)
        .attr("y", chunkICPOFSXXB().state.padding);
    },
    "drawForkJoinState",
  );
  stateDiagramFHFEXIEXBinding8 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXInput20,
      stateDiagramFHFEXIEXInput21,
      stateDiagramFHFEXIEXInput22,
      stateDiagramFHFEXIEXInput23,
    ) => {
      let stateDiagramFHFEXIEXBinding75 = 0,
        stateDiagramFHFEXIEXBinding76 =
          stateDiagramFHFEXIEXInput23.append("text");
      stateDiagramFHFEXIEXBinding76.style("text-anchor", "start");
      stateDiagramFHFEXIEXBinding76.attr("class", "noteText");
      let stateDiagramFHFEXIEXBinding77 = stateDiagramFHFEXIEXInput20.replace(
        /\r\n/g,
        "<br/>",
      );
      stateDiagramFHFEXIEXBinding77 = stateDiagramFHFEXIEXBinding77.replace(
        /\n/g,
        "<br/>",
      );
      let stateDiagramFHFEXIEXBinding78 = stateDiagramFHFEXIEXBinding77.split(
          chunkICPOFSXXS.lineBreakRegex,
        ),
        stateDiagramFHFEXIEXBinding79 =
          1.25 * chunkICPOFSXXB().state.noteMargin;
      for (let stateDiagramFHFEXIEXBinding95 of stateDiagramFHFEXIEXBinding78) {
        let stateDiagramFHFEXIEXBinding97 =
          stateDiagramFHFEXIEXBinding95.trim();
        if (stateDiagramFHFEXIEXBinding97.length > 0) {
          let stateDiagramFHFEXIEXBinding99 =
            stateDiagramFHFEXIEXBinding76.append("tspan");
          if (
            (stateDiagramFHFEXIEXBinding99.text(stateDiagramFHFEXIEXBinding97),
            stateDiagramFHFEXIEXBinding79 === 0)
          ) {
            let stateDiagramFHFEXIEXBinding103 = stateDiagramFHFEXIEXBinding99
              .node()
              .getBBox();
            stateDiagramFHFEXIEXBinding79 +=
              stateDiagramFHFEXIEXBinding103.height;
          }
          stateDiagramFHFEXIEXBinding75 += stateDiagramFHFEXIEXBinding79;
          stateDiagramFHFEXIEXBinding99.attr(
            "x",
            stateDiagramFHFEXIEXInput21 + chunkICPOFSXXB().state.noteMargin,
          );
          stateDiagramFHFEXIEXBinding99.attr(
            "y",
            stateDiagramFHFEXIEXInput22 +
              stateDiagramFHFEXIEXBinding75 +
              1.25 * chunkICPOFSXXB().state.noteMargin,
          );
        }
      }
      return {
        textWidth: stateDiagramFHFEXIEXBinding76.node().getBBox().width,
        textHeight: stateDiagramFHFEXIEXBinding75,
      };
    },
    "_drawLongText",
  );
  stateDiagramFHFEXIEXBinding9 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput32, stateDiagramFHFEXIEXInput33) => {
      stateDiagramFHFEXIEXInput33.attr("class", "state-note");
      let stateDiagramFHFEXIEXBinding98 = stateDiagramFHFEXIEXInput33
          .append("rect")
          .attr("x", 0)
          .attr("y", chunkICPOFSXXB().state.padding),
        { textWidth, textHeight } = stateDiagramFHFEXIEXBinding8(
          stateDiagramFHFEXIEXInput32,
          0,
          0,
          stateDiagramFHFEXIEXInput33.append("g"),
        );
      return (
        stateDiagramFHFEXIEXBinding98.attr(
          "height",
          textHeight + 2 * chunkICPOFSXXB().state.noteMargin,
        ),
        stateDiagramFHFEXIEXBinding98.attr(
          "width",
          textWidth + chunkICPOFSXXB().state.noteMargin * 2,
        ),
        stateDiagramFHFEXIEXBinding98
      );
    },
    "drawNote",
  );
  stateDiagramFHFEXIEXBinding10 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXInput24,
    stateDiagramFHFEXIEXInput25,
  ) {
    let stateDiagramFHFEXIEXBinding80 = stateDiagramFHFEXIEXInput25.id,
      stateDiagramFHFEXIEXBinding81 = {
        id: stateDiagramFHFEXIEXBinding80,
        label: stateDiagramFHFEXIEXInput25.id,
        width: 0,
        height: 0,
      },
      stateDiagramFHFEXIEXBinding82 = stateDiagramFHFEXIEXInput24
        .append("g")
        .attr("id", stateDiagramFHFEXIEXBinding80)
        .attr("class", "stateGroup");
    stateDiagramFHFEXIEXInput25.type === "start" &&
      stateDiagramFHFEXIEXBinding1(stateDiagramFHFEXIEXBinding82);
    stateDiagramFHFEXIEXInput25.type === "end" &&
      stateDiagramFHFEXIEXBinding6(stateDiagramFHFEXIEXBinding82);
    (stateDiagramFHFEXIEXInput25.type === "fork" ||
      stateDiagramFHFEXIEXInput25.type === "join") &&
      stateDiagramFHFEXIEXBinding7(
        stateDiagramFHFEXIEXBinding82,
        stateDiagramFHFEXIEXInput25,
      );
    stateDiagramFHFEXIEXInput25.type === "note" &&
      stateDiagramFHFEXIEXBinding9(
        stateDiagramFHFEXIEXInput25.note.text,
        stateDiagramFHFEXIEXBinding82,
      );
    stateDiagramFHFEXIEXInput25.type === "divider" &&
      stateDiagramFHFEXIEXBinding2(stateDiagramFHFEXIEXBinding82);
    stateDiagramFHFEXIEXInput25.type === "default" &&
      stateDiagramFHFEXIEXInput25.descriptions.length === 0 &&
      stateDiagramFHFEXIEXBinding3(
        stateDiagramFHFEXIEXBinding82,
        stateDiagramFHFEXIEXInput25,
      );
    stateDiagramFHFEXIEXInput25.type === "default" &&
      stateDiagramFHFEXIEXInput25.descriptions.length > 0 &&
      stateDiagramFHFEXIEXBinding4(
        stateDiagramFHFEXIEXBinding82,
        stateDiagramFHFEXIEXInput25,
      );
    let stateDiagramFHFEXIEXBinding83 = stateDiagramFHFEXIEXBinding82
      .node()
      .getBBox();
    return (
      (stateDiagramFHFEXIEXBinding81.width =
        stateDiagramFHFEXIEXBinding83.width +
        2 * chunkICPOFSXXB().state.padding),
      (stateDiagramFHFEXIEXBinding81.height =
        stateDiagramFHFEXIEXBinding83.height +
        2 * chunkICPOFSXXB().state.padding),
      stateDiagramFHFEXIEXBinding81
    );
  }, "drawState");
  stateDiagramFHFEXIEXBinding11 = 0;
  stateDiagramFHFEXIEXBinding12 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXInput8,
    stateDiagramFHFEXIEXInput9,
    stateDiagramFHFEXIEXInput10,
  ) {
    let stateDiagramFHFEXIEXBinding30 = chunkAGHRB4JFN(function (
      stateDiagramFHFEXIEXInput31,
    ) {
      switch (stateDiagramFHFEXIEXInput31) {
        case chunkOYMX7WX6T.relationType.AGGREGATION:
          return "aggregation";
        case chunkOYMX7WX6T.relationType.EXTENSION:
          return "extension";
        case chunkOYMX7WX6T.relationType.COMPOSITION:
          return "composition";
        case chunkOYMX7WX6T.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    stateDiagramFHFEXIEXInput9.points =
      stateDiagramFHFEXIEXInput9.points.filter((item) => !Number.isNaN(item.y));
    let stateDiagramFHFEXIEXBinding31 = stateDiagramFHFEXIEXInput9.points,
      stateDiagramFHFEXIEXBinding32 = AppInitialAit()
        .x(function (stateDiagramFHFEXIEXInput41) {
          return stateDiagramFHFEXIEXInput41.x;
        })
        .y(function (stateDiagramFHFEXIEXInput42) {
          return stateDiagramFHFEXIEXInput42.y;
        })
        .curve(AppInitialSit),
      stateDiagramFHFEXIEXBinding33 = stateDiagramFHFEXIEXInput8
        .append("path")
        .attr("d", stateDiagramFHFEXIEXBinding32(stateDiagramFHFEXIEXBinding31))
        .attr("id", "edge" + stateDiagramFHFEXIEXBinding11)
        .attr("class", "transition"),
      stateDiagramFHFEXIEXBinding34 = "";
    if (
      (chunkICPOFSXXB().state.arrowMarkerAbsolute &&
        (stateDiagramFHFEXIEXBinding34 = chunkICPOFSXXD(true)),
      stateDiagramFHFEXIEXBinding33.attr(
        "marker-end",
        "url(" +
          stateDiagramFHFEXIEXBinding34 +
          "#" +
          stateDiagramFHFEXIEXBinding30(
            chunkOYMX7WX6T.relationType.DEPENDENCY,
          ) +
          "End)",
      ),
      stateDiagramFHFEXIEXInput10.title !== undefined)
    ) {
      let stateDiagramFHFEXIEXBinding55 = stateDiagramFHFEXIEXInput8
          .append("g")
          .attr("class", "stateLabel"),
        { x, y } = chunk5PVQY5BWG.calcLabelPosition(
          stateDiagramFHFEXIEXInput9.points,
        ),
        stateDiagramFHFEXIEXBinding56 = chunkICPOFSXXS.getRows(
          stateDiagramFHFEXIEXInput10.title,
        ),
        stateDiagramFHFEXIEXBinding57 = 0,
        stateDiagramFHFEXIEXBinding58 = [],
        stateDiagramFHFEXIEXBinding59 = 0,
        stateDiagramFHFEXIEXBinding60 = 0;
      for (
        let stateDiagramFHFEXIEXBinding87 = 0;
        stateDiagramFHFEXIEXBinding87 <= stateDiagramFHFEXIEXBinding56.length;
        stateDiagramFHFEXIEXBinding87++
      ) {
        let stateDiagramFHFEXIEXBinding88 = stateDiagramFHFEXIEXBinding55
            .append("text")
            .attr("text-anchor", "middle")
            .text(stateDiagramFHFEXIEXBinding56[stateDiagramFHFEXIEXBinding87])
            .attr("x", x)
            .attr("y", y + stateDiagramFHFEXIEXBinding57),
          stateDiagramFHFEXIEXBinding89 = stateDiagramFHFEXIEXBinding88
            .node()
            .getBBox();
        stateDiagramFHFEXIEXBinding59 = Math.max(
          stateDiagramFHFEXIEXBinding59,
          stateDiagramFHFEXIEXBinding89.width,
        );
        stateDiagramFHFEXIEXBinding60 = Math.min(
          stateDiagramFHFEXIEXBinding60,
          stateDiagramFHFEXIEXBinding89.x,
        );
        chunkAGHRB4JFI.info(
          stateDiagramFHFEXIEXBinding89.x,
          x,
          y + stateDiagramFHFEXIEXBinding57,
        );
        stateDiagramFHFEXIEXBinding57 === 0 &&
          ((stateDiagramFHFEXIEXBinding57 = stateDiagramFHFEXIEXBinding88
            .node()
            .getBBox().height),
          chunkAGHRB4JFI.info(
            "Title height",
            stateDiagramFHFEXIEXBinding57,
            y,
          ));
        stateDiagramFHFEXIEXBinding58.push(stateDiagramFHFEXIEXBinding88);
      }
      let stateDiagramFHFEXIEXBinding61 =
        stateDiagramFHFEXIEXBinding57 * stateDiagramFHFEXIEXBinding56.length;
      if (stateDiagramFHFEXIEXBinding56.length > 1) {
        let stateDiagramFHFEXIEXBinding102 =
          (stateDiagramFHFEXIEXBinding56.length - 1) *
          stateDiagramFHFEXIEXBinding57 *
          0.5;
        stateDiagramFHFEXIEXBinding58.forEach((item, index) =>
          item.attr(
            "y",
            y +
              index * stateDiagramFHFEXIEXBinding57 -
              stateDiagramFHFEXIEXBinding102,
          ),
        );
        stateDiagramFHFEXIEXBinding61 =
          stateDiagramFHFEXIEXBinding57 * stateDiagramFHFEXIEXBinding56.length;
      }
      let stateDiagramFHFEXIEXBinding62 = stateDiagramFHFEXIEXBinding55
        .node()
        .getBBox();
      stateDiagramFHFEXIEXBinding55
        .insert("rect", ":first-child")
        .attr("class", "box")
        .attr(
          "x",
          x -
            stateDiagramFHFEXIEXBinding59 / 2 -
            chunkICPOFSXXB().state.padding / 2,
        )
        .attr(
          "y",
          y -
            stateDiagramFHFEXIEXBinding61 / 2 -
            chunkICPOFSXXB().state.padding / 2 -
            3.5,
        )
        .attr(
          "width",
          stateDiagramFHFEXIEXBinding59 + chunkICPOFSXXB().state.padding,
        )
        .attr(
          "height",
          stateDiagramFHFEXIEXBinding61 + chunkICPOFSXXB().state.padding,
        );
      chunkAGHRB4JFI.info(stateDiagramFHFEXIEXBinding62);
    }
    stateDiagramFHFEXIEXBinding11++;
  }, "drawEdge");
  stateDiagramFHFEXIEXBinding14 = {};
  stateDiagramFHFEXIEXBinding15 = chunkAGHRB4JFN(function () {}, "setConf");
  stateDiagramFHFEXIEXBinding16 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXInput34,
  ) {
    stateDiagramFHFEXIEXInput34
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
  stateDiagramFHFEXIEXBinding17 = chunkAGHRB4JFN(function (
    stateDiagramFHFEXIEXInput16,
    stateDiagramFHFEXIEXInput17,
    stateDiagramFHFEXIEXInput18,
    stateDiagramFHFEXIEXInput19,
  ) {
    stateDiagramFHFEXIEXBinding13 = chunkICPOFSXXB().state;
    let stateDiagramFHFEXIEXBinding66 = chunkICPOFSXXB().securityLevel,
      stateDiagramFHFEXIEXBinding67;
    stateDiagramFHFEXIEXBinding66 === "sandbox" &&
      (stateDiagramFHFEXIEXBinding67 = srcR(
        "#i" + stateDiagramFHFEXIEXInput17,
      ));
    let stateDiagramFHFEXIEXBinding68 = srcR(
        stateDiagramFHFEXIEXBinding66 === "sandbox"
          ? stateDiagramFHFEXIEXBinding67.nodes()[0].contentDocument.body
          : "body",
      ),
      stateDiagramFHFEXIEXBinding69 =
        stateDiagramFHFEXIEXBinding66 === "sandbox"
          ? stateDiagramFHFEXIEXBinding67.nodes()[0].contentDocument
          : document;
    chunkAGHRB4JFI.debug("Rendering diagram " + stateDiagramFHFEXIEXInput16);
    let stateDiagramFHFEXIEXBinding70 = stateDiagramFHFEXIEXBinding68.select(
      `[id='${stateDiagramFHFEXIEXInput17}']`,
    );
    stateDiagramFHFEXIEXBinding16(stateDiagramFHFEXIEXBinding70);
    stateDiagramFHFEXIEXBinding19(
      stateDiagramFHFEXIEXInput19.db.getRootDoc(),
      stateDiagramFHFEXIEXBinding70
        .append("g")
        .attr("id", stateDiagramFHFEXIEXInput17 + "-root"),
      undefined,
      false,
      stateDiagramFHFEXIEXBinding68,
      stateDiagramFHFEXIEXBinding69,
      stateDiagramFHFEXIEXInput19,
    );
    let stateDiagramFHFEXIEXBinding71 = stateDiagramFHFEXIEXBinding13.padding,
      stateDiagramFHFEXIEXBinding72 = stateDiagramFHFEXIEXBinding70
        .node()
        .getBBox(),
      stateDiagramFHFEXIEXBinding73 =
        stateDiagramFHFEXIEXBinding72.width + stateDiagramFHFEXIEXBinding71 * 2,
      stateDiagramFHFEXIEXBinding74 =
        stateDiagramFHFEXIEXBinding72.height +
        stateDiagramFHFEXIEXBinding71 * 2;
    chunkICPOFSXXC(
      stateDiagramFHFEXIEXBinding70,
      stateDiagramFHFEXIEXBinding74,
      stateDiagramFHFEXIEXBinding73 * 1.75,
      stateDiagramFHFEXIEXBinding13.useMaxWidth,
    );
    stateDiagramFHFEXIEXBinding70.attr(
      "viewBox",
      `${stateDiagramFHFEXIEXBinding72.x - stateDiagramFHFEXIEXBinding13.padding}  ${stateDiagramFHFEXIEXBinding72.y - stateDiagramFHFEXIEXBinding13.padding} ` +
        stateDiagramFHFEXIEXBinding73 +
        " " +
        stateDiagramFHFEXIEXBinding74,
    );
  }, "draw");
  stateDiagramFHFEXIEXBinding18 = chunkAGHRB4JFN(
    (stateDiagramFHFEXIEXInput43) =>
      stateDiagramFHFEXIEXInput43
        ? stateDiagramFHFEXIEXInput43.length *
          stateDiagramFHFEXIEXBinding13.fontSizeFactor
        : 1,
    "getLabelWidth",
  );
  stateDiagramFHFEXIEXBinding19 = chunkAGHRB4JFN(
    (
      stateDiagramFHFEXIEXInput1,
      stateDiagramFHFEXIEXInput2,
      stateDiagramFHFEXIEXInput3,
      stateDiagramFHFEXIEXInput4,
      stateDiagramFHFEXIEXInput5,
      stateDiagramFHFEXIEXInput6,
      stateDiagramFHFEXIEXInput7,
    ) => {
      let stateDiagramFHFEXIEXBinding20 = new stateDiagramFHFEXIEXImport1({
          compound: true,
          multigraph: true,
        }),
        stateDiagramFHFEXIEXBinding21,
        stateDiagramFHFEXIEXBinding22 = true;
      for (
        stateDiagramFHFEXIEXBinding21 = 0;
        stateDiagramFHFEXIEXBinding21 < stateDiagramFHFEXIEXInput1.length;
        stateDiagramFHFEXIEXBinding21++
      )
        if (
          stateDiagramFHFEXIEXInput1[stateDiagramFHFEXIEXBinding21].stmt ===
          "relation"
        ) {
          stateDiagramFHFEXIEXBinding22 = false;
          break;
        }
      stateDiagramFHFEXIEXInput3
        ? stateDiagramFHFEXIEXBinding20.setGraph({
            rankdir: "LR",
            multigraph: true,
            compound: true,
            ranker: "tight-tree",
            ranksep: stateDiagramFHFEXIEXBinding22
              ? 1
              : stateDiagramFHFEXIEXBinding13.edgeLengthFactor,
            nodeSep: stateDiagramFHFEXIEXBinding22 ? 1 : 50,
            isMultiGraph: true,
          })
        : stateDiagramFHFEXIEXBinding20.setGraph({
            rankdir: "TB",
            multigraph: true,
            compound: true,
            ranksep: stateDiagramFHFEXIEXBinding22
              ? 1
              : stateDiagramFHFEXIEXBinding13.edgeLengthFactor,
            nodeSep: stateDiagramFHFEXIEXBinding22 ? 1 : 50,
            ranker: "tight-tree",
            isMultiGraph: true,
          });
      stateDiagramFHFEXIEXBinding20.setDefaultEdgeLabel(function () {
        return {};
      });
      let stateDiagramFHFEXIEXBinding23 =
          stateDiagramFHFEXIEXInput7.db.getStates(),
        stateDiagramFHFEXIEXBinding24 =
          stateDiagramFHFEXIEXInput7.db.getRelations(),
        stateDiagramFHFEXIEXBinding25 = Object.keys(
          stateDiagramFHFEXIEXBinding23,
        );
      for (let stateDiagramFHFEXIEXBinding63 of stateDiagramFHFEXIEXBinding25) {
        let stateDiagramFHFEXIEXBinding64 =
          stateDiagramFHFEXIEXBinding23[stateDiagramFHFEXIEXBinding63];
        stateDiagramFHFEXIEXInput3 &&
          (stateDiagramFHFEXIEXBinding64.parentId = stateDiagramFHFEXIEXInput3);
        let stateDiagramFHFEXIEXBinding65;
        if (stateDiagramFHFEXIEXBinding64.doc) {
          let stateDiagramFHFEXIEXBinding96 = stateDiagramFHFEXIEXInput2
            .append("g")
            .attr("id", stateDiagramFHFEXIEXBinding64.id)
            .attr("class", "stateGroup");
          stateDiagramFHFEXIEXBinding65 = stateDiagramFHFEXIEXBinding19(
            stateDiagramFHFEXIEXBinding64.doc,
            stateDiagramFHFEXIEXBinding96,
            stateDiagramFHFEXIEXBinding64.id,
            !stateDiagramFHFEXIEXInput4,
            stateDiagramFHFEXIEXInput5,
            stateDiagramFHFEXIEXInput6,
            stateDiagramFHFEXIEXInput7,
          );
          {
            stateDiagramFHFEXIEXBinding96 = stateDiagramFHFEXIEXBinding5(
              stateDiagramFHFEXIEXBinding96,
              stateDiagramFHFEXIEXBinding64,
              stateDiagramFHFEXIEXInput4,
            );
            let stateDiagramFHFEXIEXBinding100 = stateDiagramFHFEXIEXBinding96
              .node()
              .getBBox();
            stateDiagramFHFEXIEXBinding65.width =
              stateDiagramFHFEXIEXBinding100.width;
            stateDiagramFHFEXIEXBinding65.height =
              stateDiagramFHFEXIEXBinding100.height +
              stateDiagramFHFEXIEXBinding13.padding / 2;
            stateDiagramFHFEXIEXBinding14[stateDiagramFHFEXIEXBinding64.id] = {
              y: stateDiagramFHFEXIEXBinding13.compositTitleSize,
            };
          }
        } else
          stateDiagramFHFEXIEXBinding65 = stateDiagramFHFEXIEXBinding10(
            stateDiagramFHFEXIEXInput2,
            stateDiagramFHFEXIEXBinding64,
            stateDiagramFHFEXIEXBinding20,
          );
        if (stateDiagramFHFEXIEXBinding64.note) {
          let stateDiagramFHFEXIEXBinding86 = stateDiagramFHFEXIEXBinding10(
            stateDiagramFHFEXIEXInput2,
            {
              descriptions: [],
              id: stateDiagramFHFEXIEXBinding64.id + "-note",
              note: stateDiagramFHFEXIEXBinding64.note,
              type: "note",
            },
            stateDiagramFHFEXIEXBinding20,
          );
          stateDiagramFHFEXIEXBinding64.note.position === "left of"
            ? (stateDiagramFHFEXIEXBinding20.setNode(
                stateDiagramFHFEXIEXBinding65.id + "-note",
                stateDiagramFHFEXIEXBinding86,
              ),
              stateDiagramFHFEXIEXBinding20.setNode(
                stateDiagramFHFEXIEXBinding65.id,
                stateDiagramFHFEXIEXBinding65,
              ))
            : (stateDiagramFHFEXIEXBinding20.setNode(
                stateDiagramFHFEXIEXBinding65.id,
                stateDiagramFHFEXIEXBinding65,
              ),
              stateDiagramFHFEXIEXBinding20.setNode(
                stateDiagramFHFEXIEXBinding65.id + "-note",
                stateDiagramFHFEXIEXBinding86,
              ));
          stateDiagramFHFEXIEXBinding20.setParent(
            stateDiagramFHFEXIEXBinding65.id,
            stateDiagramFHFEXIEXBinding65.id + "-group",
          );
          stateDiagramFHFEXIEXBinding20.setParent(
            stateDiagramFHFEXIEXBinding65.id + "-note",
            stateDiagramFHFEXIEXBinding65.id + "-group",
          );
        } else
          stateDiagramFHFEXIEXBinding20.setNode(
            stateDiagramFHFEXIEXBinding65.id,
            stateDiagramFHFEXIEXBinding65,
          );
      }
      chunkAGHRB4JFI.debug(
        "Count=",
        stateDiagramFHFEXIEXBinding20.nodeCount(),
        stateDiagramFHFEXIEXBinding20,
      );
      let stateDiagramFHFEXIEXBinding26 = 0;
      stateDiagramFHFEXIEXBinding24.forEach(function (item) {
        stateDiagramFHFEXIEXBinding26++;
        chunkAGHRB4JFI.debug("Setting edge", item);
        stateDiagramFHFEXIEXBinding20.setEdge(
          item.id1,
          item.id2,
          {
            relation: item,
            width: stateDiagramFHFEXIEXBinding18(item.title),
            height:
              stateDiagramFHFEXIEXBinding13.labelHeight *
              chunkICPOFSXXS.getRows(item.title).length,
            labelpos: "c",
          },
          "id" + stateDiagramFHFEXIEXBinding26,
        );
      });
      stateDiagramFHFEXIEXImport3(stateDiagramFHFEXIEXBinding20);
      chunkAGHRB4JFI.debug(
        "Graph after layout",
        stateDiagramFHFEXIEXBinding20.nodes(),
      );
      let stateDiagramFHFEXIEXBinding27 = stateDiagramFHFEXIEXInput2.node();
      stateDiagramFHFEXIEXBinding20.nodes().forEach(function (item) {
        item !== undefined &&
        stateDiagramFHFEXIEXBinding20.node(item) !== undefined
          ? (chunkAGHRB4JFI.warn(
              "Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFHFEXIEXBinding20.node(item)),
            ),
            stateDiagramFHFEXIEXInput5
              .select("#" + stateDiagramFHFEXIEXBinding27.id + " #" + item)
              .attr(
                "transform",
                "translate(" +
                  (stateDiagramFHFEXIEXBinding20.node(item).x -
                    stateDiagramFHFEXIEXBinding20.node(item).width / 2) +
                  "," +
                  (stateDiagramFHFEXIEXBinding20.node(item).y +
                    (stateDiagramFHFEXIEXBinding14[item]
                      ? stateDiagramFHFEXIEXBinding14[item].y
                      : 0) -
                    stateDiagramFHFEXIEXBinding20.node(item).height / 2) +
                  " )",
              ),
            stateDiagramFHFEXIEXInput5
              .select("#" + stateDiagramFHFEXIEXBinding27.id + " #" + item)
              .attr(
                "data-x-shift",
                stateDiagramFHFEXIEXBinding20.node(item).x -
                  stateDiagramFHFEXIEXBinding20.node(item).width / 2,
              ),
            stateDiagramFHFEXIEXInput6
              .querySelectorAll(
                "#" +
                  stateDiagramFHFEXIEXBinding27.id +
                  " #" +
                  item +
                  " .divider",
              )
              .forEach((_item) => {
                let stateDiagramFHFEXIEXBinding90 = _item.parentElement,
                  stateDiagramFHFEXIEXBinding91 = 0,
                  stateDiagramFHFEXIEXBinding92 = 0;
                stateDiagramFHFEXIEXBinding90 &&
                  (stateDiagramFHFEXIEXBinding90.parentElement &&
                    (stateDiagramFHFEXIEXBinding91 =
                      stateDiagramFHFEXIEXBinding90.parentElement.getBBox()
                        .width),
                  (stateDiagramFHFEXIEXBinding92 = parseInt(
                    stateDiagramFHFEXIEXBinding90.getAttribute("data-x-shift"),
                    10,
                  )),
                  Number.isNaN(stateDiagramFHFEXIEXBinding92) &&
                    (stateDiagramFHFEXIEXBinding92 = 0));
                _item.setAttribute("x1", 0 - stateDiagramFHFEXIEXBinding92 + 8);
                _item.setAttribute(
                  "x2",
                  stateDiagramFHFEXIEXBinding91 -
                    stateDiagramFHFEXIEXBinding92 -
                    8,
                );
              }))
          : chunkAGHRB4JFI.debug(
              "No Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFHFEXIEXBinding20.node(item)),
            );
      });
      let stateDiagramFHFEXIEXBinding28 =
        stateDiagramFHFEXIEXBinding27.getBBox();
      stateDiagramFHFEXIEXBinding20.edges().forEach(function (item) {
        item !== undefined &&
          stateDiagramFHFEXIEXBinding20.edge(item) !== undefined &&
          (chunkAGHRB4JFI.debug(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(stateDiagramFHFEXIEXBinding20.edge(item)),
          ),
          stateDiagramFHFEXIEXBinding12(
            stateDiagramFHFEXIEXInput2,
            stateDiagramFHFEXIEXBinding20.edge(item),
            stateDiagramFHFEXIEXBinding20.edge(item).relation,
          ));
      });
      stateDiagramFHFEXIEXBinding28 = stateDiagramFHFEXIEXBinding27.getBBox();
      let stateDiagramFHFEXIEXBinding29 = {
        id: stateDiagramFHFEXIEXInput3 || "root",
        label: stateDiagramFHFEXIEXInput3 || "root",
        width: 0,
        height: 0,
      };
      return (
        (stateDiagramFHFEXIEXBinding29.width =
          stateDiagramFHFEXIEXBinding28.width +
          2 * stateDiagramFHFEXIEXBinding13.padding),
        (stateDiagramFHFEXIEXBinding29.height =
          stateDiagramFHFEXIEXBinding28.height +
          2 * stateDiagramFHFEXIEXBinding13.padding),
        chunkAGHRB4JFI.debug(
          "Doc rendered",
          stateDiagramFHFEXIEXBinding29,
          stateDiagramFHFEXIEXBinding20,
        ),
        stateDiagramFHFEXIEXBinding29
      );
    },
    "renderDoc",
  );
  stateDiagramFHFEXIEX = {
    parser: chunkOYMX7WX6R,
    get db() {
      return new chunkOYMX7WX6T(1);
    },
    renderer: {
      setConf: stateDiagramFHFEXIEXBinding15,
      draw: stateDiagramFHFEXIEXBinding17,
    },
    styles: chunkOYMX7WX6A,
    init: chunkAGHRB4JFN((stateDiagramFHFEXIEXInput40) => {
      stateDiagramFHFEXIEXInput40.state ||= {};
      stateDiagramFHFEXIEXInput40.state.arrowMarkerAbsolute =
        stateDiagramFHFEXIEXInput40.arrowMarkerAbsolute;
    }, "init"),
  };
})();
export { stateDiagramFHFEXIEX as diagram };
