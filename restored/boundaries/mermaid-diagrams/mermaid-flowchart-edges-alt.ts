// Restored from ref/webview/assets/chunk-ENJZ2VHE-C_FEqIVX.js
// Mermaid flowchart edge insert/markers (alt). app-initial d3-shape curves+line → vendor shims.
// Stage 3 candidate: IMPORT_MAP-rewritten npm aliases; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  curveBasis,
  curveBumpX,
  curveBumpY,
  curveCardinal,
  curveCatmullRom,
  curveLinear,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
} from "../../vendor/d3-shape-curves";
import { line } from "../../vendor/d3-shape-line-pie-stack";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import rough from "roughjs";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import { A, b, w, y } from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWL,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA, chunkU2HBQHQKN } from "./mermaid-create-text-alt";
import {
  arrowHeadOffsets,
  markerLengths,
  getLineFunctionsWithOffset,
  initMermaidLineOffsetAltChunk,
  computeLabelTransform,
} from "../../diagrams/line-offset-helpers-alt";
import {
  getSubGraphTitleMargins as chunkZZ45TVLEN,
  initSubGraphTitleMarginsAlt as chunkZZ45TVLER,
} from "../../diagrams/subgraph-title-margins-alt";
import { styles2String as chunkX2U36JSPA, initStyleHelpersChunk as chunkX2U36JSPN, isLabelStyle as chunkX2U36JSPR } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RD, chunk5FUZZQ4RR } from "./mermaid-flowchart-nodes-alt";
function chunkENJZ2VHEHelper1(chunkENJZ2VHEInput116, chunkENJZ2VHEInput117) {
  w(b()) &&
    chunkENJZ2VHEInput116 &&
    ((chunkENJZ2VHEInput116.style.width =
      chunkENJZ2VHEInput117.length * 9 + "px"),
    (chunkENJZ2VHEInput116.style.height = "12px"));
}
function chunkENJZ2VHEHelper2(chunkENJZ2VHEInput91) {
  let chunkENJZ2VHEBinding141 = [],
    chunkENJZ2VHEBinding142 = [];
  for (
    let chunkENJZ2VHEBinding159 = 1;
    chunkENJZ2VHEBinding159 < chunkENJZ2VHEInput91.length - 1;
    chunkENJZ2VHEBinding159++
  ) {
    let chunkENJZ2VHEBinding161 =
        chunkENJZ2VHEInput91[chunkENJZ2VHEBinding159 - 1],
      chunkENJZ2VHEBinding162 = chunkENJZ2VHEInput91[chunkENJZ2VHEBinding159],
      chunkENJZ2VHEBinding163 =
        chunkENJZ2VHEInput91[chunkENJZ2VHEBinding159 + 1];
    ((chunkENJZ2VHEBinding161.x === chunkENJZ2VHEBinding162.x &&
      chunkENJZ2VHEBinding162.y === chunkENJZ2VHEBinding163.y &&
      Math.abs(chunkENJZ2VHEBinding162.x - chunkENJZ2VHEBinding163.x) > 5 &&
      Math.abs(chunkENJZ2VHEBinding162.y - chunkENJZ2VHEBinding161.y) > 5) ||
      (chunkENJZ2VHEBinding161.y === chunkENJZ2VHEBinding162.y &&
        chunkENJZ2VHEBinding162.x === chunkENJZ2VHEBinding163.x &&
        Math.abs(chunkENJZ2VHEBinding162.x - chunkENJZ2VHEBinding161.x) > 5 &&
        Math.abs(chunkENJZ2VHEBinding162.y - chunkENJZ2VHEBinding163.y) > 5)) &&
      (chunkENJZ2VHEBinding141.push(chunkENJZ2VHEBinding162),
      chunkENJZ2VHEBinding142.push(chunkENJZ2VHEBinding159));
  }
  return {
    cornerPoints: chunkENJZ2VHEBinding141,
    cornerPointPositions: chunkENJZ2VHEBinding142,
  };
}
function chunkENJZ2VHEHelper3(chunkENJZ2VHEInput62, chunkENJZ2VHEInput63) {
  if (chunkENJZ2VHEInput62.length < 2) return "";
  let chunkENJZ2VHEBinding80 = "",
    chunkENJZ2VHEBinding81 = chunkENJZ2VHEInput62.length;
  for (
    let chunkENJZ2VHEBinding86 = 0;
    chunkENJZ2VHEBinding86 < chunkENJZ2VHEBinding81;
    chunkENJZ2VHEBinding86++
  ) {
    let chunkENJZ2VHEBinding87 = chunkENJZ2VHEInput62[chunkENJZ2VHEBinding86],
      chunkENJZ2VHEBinding88 = chunkENJZ2VHEInput62[chunkENJZ2VHEBinding86 - 1],
      chunkENJZ2VHEBinding89 = chunkENJZ2VHEInput62[chunkENJZ2VHEBinding86 + 1];
    if (chunkENJZ2VHEBinding86 === 0)
      chunkENJZ2VHEBinding80 += `M${chunkENJZ2VHEBinding87.x},${chunkENJZ2VHEBinding87.y}`;
    else if (chunkENJZ2VHEBinding86 === chunkENJZ2VHEBinding81 - 1)
      chunkENJZ2VHEBinding80 += `L${chunkENJZ2VHEBinding87.x},${chunkENJZ2VHEBinding87.y}`;
    else {
      let chunkENJZ2VHEBinding94 =
          chunkENJZ2VHEBinding87.x - chunkENJZ2VHEBinding88.x,
        chunkENJZ2VHEBinding95 =
          chunkENJZ2VHEBinding87.y - chunkENJZ2VHEBinding88.y,
        chunkENJZ2VHEBinding96 =
          chunkENJZ2VHEBinding89.x - chunkENJZ2VHEBinding87.x,
        chunkENJZ2VHEBinding97 =
          chunkENJZ2VHEBinding89.y - chunkENJZ2VHEBinding87.y,
        chunkENJZ2VHEBinding98 = Math.hypot(
          chunkENJZ2VHEBinding94,
          chunkENJZ2VHEBinding95,
        ),
        chunkENJZ2VHEBinding99 = Math.hypot(
          chunkENJZ2VHEBinding96,
          chunkENJZ2VHEBinding97,
        );
      if (chunkENJZ2VHEBinding98 < 1e-5 || chunkENJZ2VHEBinding99 < 1e-5) {
        chunkENJZ2VHEBinding80 += `L${chunkENJZ2VHEBinding87.x},${chunkENJZ2VHEBinding87.y}`;
        continue;
      }
      let chunkENJZ2VHEBinding100 =
          chunkENJZ2VHEBinding94 / chunkENJZ2VHEBinding98,
        chunkENJZ2VHEBinding101 =
          chunkENJZ2VHEBinding95 / chunkENJZ2VHEBinding98,
        chunkENJZ2VHEBinding102 =
          chunkENJZ2VHEBinding96 / chunkENJZ2VHEBinding99,
        chunkENJZ2VHEBinding103 =
          chunkENJZ2VHEBinding97 / chunkENJZ2VHEBinding99,
        chunkENJZ2VHEBinding104 =
          chunkENJZ2VHEBinding100 * chunkENJZ2VHEBinding102 +
          chunkENJZ2VHEBinding101 * chunkENJZ2VHEBinding103,
        chunkENJZ2VHEBinding105 = Math.acos(
          Math.max(-1, Math.min(1, chunkENJZ2VHEBinding104)),
        );
      if (
        chunkENJZ2VHEBinding105 < 1e-5 ||
        Math.abs(Math.PI - chunkENJZ2VHEBinding105) < 1e-5
      ) {
        chunkENJZ2VHEBinding80 += `L${chunkENJZ2VHEBinding87.x},${chunkENJZ2VHEBinding87.y}`;
        continue;
      }
      let chunkENJZ2VHEBinding106 = Math.min(
          chunkENJZ2VHEInput63 / Math.sin(chunkENJZ2VHEBinding105 / 2),
          chunkENJZ2VHEBinding98 / 2,
          chunkENJZ2VHEBinding99 / 2,
        ),
        chunkENJZ2VHEBinding107 =
          chunkENJZ2VHEBinding87.x -
          chunkENJZ2VHEBinding100 * chunkENJZ2VHEBinding106,
        chunkENJZ2VHEBinding108 =
          chunkENJZ2VHEBinding87.y -
          chunkENJZ2VHEBinding101 * chunkENJZ2VHEBinding106,
        chunkENJZ2VHEBinding109 =
          chunkENJZ2VHEBinding87.x +
          chunkENJZ2VHEBinding102 * chunkENJZ2VHEBinding106,
        chunkENJZ2VHEBinding110 =
          chunkENJZ2VHEBinding87.y +
          chunkENJZ2VHEBinding103 * chunkENJZ2VHEBinding106;
      chunkENJZ2VHEBinding80 += `L${chunkENJZ2VHEBinding107},${chunkENJZ2VHEBinding108}`;
      chunkENJZ2VHEBinding80 += `Q${chunkENJZ2VHEBinding87.x},${chunkENJZ2VHEBinding87.y} ${chunkENJZ2VHEBinding109},${chunkENJZ2VHEBinding110}`;
    }
  }
  return chunkENJZ2VHEBinding80;
}
function chunkENJZ2VHEHelper4(chunkENJZ2VHEInput107, chunkENJZ2VHEInput108) {
  if (!chunkENJZ2VHEInput107 || !chunkENJZ2VHEInput108)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  let chunkENJZ2VHEBinding195 =
      chunkENJZ2VHEInput108.x - chunkENJZ2VHEInput107.x,
    chunkENJZ2VHEBinding196 = chunkENJZ2VHEInput108.y - chunkENJZ2VHEInput107.y;
  return {
    angle: Math.atan2(chunkENJZ2VHEBinding196, chunkENJZ2VHEBinding195),
    deltaX: chunkENJZ2VHEBinding195,
    deltaY: chunkENJZ2VHEBinding196,
  };
}
function chunkENJZ2VHEHelper5(chunkENJZ2VHEInput89, chunkENJZ2VHEInput90) {
  let chunkENJZ2VHEBinding130 = chunkENJZ2VHEInput89.map((item) => ({
    ...item,
  }));
  if (
    chunkENJZ2VHEInput89.length >= 2 &&
    markerLengths[chunkENJZ2VHEInput90.arrowTypeStart]
  ) {
    let chunkENJZ2VHEBinding186 =
        markerLengths[chunkENJZ2VHEInput90.arrowTypeStart],
      chunkENJZ2VHEBinding187 = chunkENJZ2VHEInput89[0],
      chunkENJZ2VHEBinding188 = chunkENJZ2VHEInput89[1],
      { angle } = chunkENJZ2VHEHelper4(
        chunkENJZ2VHEBinding187,
        chunkENJZ2VHEBinding188,
      ),
      chunkENJZ2VHEBinding189 = chunkENJZ2VHEBinding186 * Math.cos(angle),
      chunkENJZ2VHEBinding190 = chunkENJZ2VHEBinding186 * Math.sin(angle);
    chunkENJZ2VHEBinding130[0].x =
      chunkENJZ2VHEBinding187.x + chunkENJZ2VHEBinding189;
    chunkENJZ2VHEBinding130[0].y =
      chunkENJZ2VHEBinding187.y + chunkENJZ2VHEBinding190;
  }
  let chunkENJZ2VHEBinding131 = chunkENJZ2VHEInput89.length;
  if (
    chunkENJZ2VHEBinding131 >= 2 &&
    markerLengths[chunkENJZ2VHEInput90.arrowTypeEnd]
  ) {
    let chunkENJZ2VHEBinding165 =
        markerLengths[chunkENJZ2VHEInput90.arrowTypeEnd],
      chunkENJZ2VHEBinding166 =
        chunkENJZ2VHEInput89[chunkENJZ2VHEBinding131 - 1],
      chunkENJZ2VHEBinding167 =
        chunkENJZ2VHEInput89[chunkENJZ2VHEBinding131 - 2],
      { angle } = chunkENJZ2VHEHelper4(
        chunkENJZ2VHEBinding167,
        chunkENJZ2VHEBinding166,
      ),
      chunkENJZ2VHEBinding168 = chunkENJZ2VHEBinding165 * Math.cos(angle),
      chunkENJZ2VHEBinding169 = chunkENJZ2VHEBinding165 * Math.sin(angle);
    chunkENJZ2VHEBinding130[chunkENJZ2VHEBinding131 - 1].x =
      chunkENJZ2VHEBinding166.x - chunkENJZ2VHEBinding168;
    chunkENJZ2VHEBinding130[chunkENJZ2VHEBinding131 - 1].y =
      chunkENJZ2VHEBinding166.y - chunkENJZ2VHEBinding169;
  }
  return chunkENJZ2VHEBinding130;
}
var chunkENJZ2VHEBinding1,
  chunkENJZ2VHEBinding2,
  chunkENJZ2VHEBinding3,
  chunkENJZ2VHEBinding4,
  chunkENJZ2VHEBinding5,
  chunkENJZ2VHEBinding6,
  chunkENJZ2VHEBinding7,
  chunkENJZ2VHET,
  chunkENJZ2VHEBinding8,
  chunkENJZ2VHEI,
  chunkENJZ2VHEO,
  chunkENJZ2VHEBinding9,
  chunkENJZ2VHEBinding10,
  chunkENJZ2VHEBinding11,
  $,
  chunkENJZ2VHEBinding12,
  chunkENJZ2VHEBinding13,
  chunkENJZ2VHER,
  chunkENJZ2VHEBinding14,
  chunkENJZ2VHEBinding15,
  chunkENJZ2VHEA;
export const chunkENJZ2VHEN = esmInit(() => {
  initMermaidLineOffsetAltChunk();
  chunk5FUZZQ4RD();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  rough();
  chunkENJZ2VHEBinding1 = defineFunctionName(
    (
      chunkENJZ2VHEInput100,
      chunkENJZ2VHEInput101,
      chunkENJZ2VHEInput102,
      chunkENJZ2VHEInput103,
      chunkENJZ2VHEInput104,
      chunkENJZ2VHEInput105 = false,
      chunkENJZ2VHEInput106,
    ) => {
      chunkENJZ2VHEInput101.arrowTypeStart &&
        chunkENJZ2VHEBinding4(
          chunkENJZ2VHEInput100,
          "start",
          chunkENJZ2VHEInput101.arrowTypeStart,
          chunkENJZ2VHEInput102,
          chunkENJZ2VHEInput103,
          chunkENJZ2VHEInput104,
          chunkENJZ2VHEInput105,
          chunkENJZ2VHEInput106,
        );
      chunkENJZ2VHEInput101.arrowTypeEnd &&
        chunkENJZ2VHEBinding4(
          chunkENJZ2VHEInput100,
          "end",
          chunkENJZ2VHEInput101.arrowTypeEnd,
          chunkENJZ2VHEInput102,
          chunkENJZ2VHEInput103,
          chunkENJZ2VHEInput104,
          chunkENJZ2VHEInput105,
          chunkENJZ2VHEInput106,
        );
    },
    "addEdgeMarkers",
  );
  chunkENJZ2VHEBinding2 = {
    arrow_cross: {
      type: "cross",
      fill: false,
    },
    arrow_point: {
      type: "point",
      fill: true,
    },
    arrow_barb: {
      type: "barb",
      fill: true,
    },
    arrow_barb_neo: {
      type: "barb",
      fill: true,
    },
    arrow_circle: {
      type: "circle",
      fill: false,
    },
    aggregation: {
      type: "aggregation",
      fill: false,
    },
    extension: {
      type: "extension",
      fill: false,
    },
    composition: {
      type: "composition",
      fill: true,
    },
    dependency: {
      type: "dependency",
      fill: true,
    },
    lollipop: {
      type: "lollipop",
      fill: false,
    },
    only_one: {
      type: "onlyOne",
      fill: false,
    },
    zero_or_one: {
      type: "zeroOrOne",
      fill: false,
    },
    one_or_more: {
      type: "oneOrMore",
      fill: false,
    },
    zero_or_more: {
      type: "zeroOrMore",
      fill: false,
    },
    requirement_arrow: {
      type: "requirement_arrow",
      fill: false,
    },
    requirement_contains: {
      type: "requirement_contains",
      fill: false,
    },
  };
  chunkENJZ2VHEBinding3 = [
    "cross",
    "point",
    "circle",
    "lollipop",
    "aggregation",
    "extension",
    "composition",
    "dependency",
    "barb",
  ];
  chunkENJZ2VHEBinding4 = defineFunctionName(
    (
      chunkENJZ2VHEInput67,
      chunkENJZ2VHEInput68,
      chunkENJZ2VHEInput69,
      chunkENJZ2VHEInput70,
      chunkENJZ2VHEInput71,
      chunkENJZ2VHEInput72,
      chunkENJZ2VHEInput73 = false,
      chunkENJZ2VHEInput74,
    ) => {
      let chunkENJZ2VHEBinding83 = chunkENJZ2VHEBinding2[chunkENJZ2VHEInput69],
        chunkENJZ2VHEBinding84 =
          chunkENJZ2VHEBinding83 &&
          chunkENJZ2VHEBinding3.includes(chunkENJZ2VHEBinding83.type);
      if (!chunkENJZ2VHEBinding83) {
        logger.warn(`Unknown arrow type: ${chunkENJZ2VHEInput69}`);
        return;
      }
      let chunkENJZ2VHEBinding85 = `${chunkENJZ2VHEInput71}_${chunkENJZ2VHEInput72}-${chunkENJZ2VHEBinding83.type}${chunkENJZ2VHEInput68 === "start" ? "Start" : "End"}${chunkENJZ2VHEInput73 && chunkENJZ2VHEBinding84 ? "-margin" : ""}`;
      if (chunkENJZ2VHEInput74 && chunkENJZ2VHEInput74.trim() !== "") {
        let chunkENJZ2VHEBinding132 = `${chunkENJZ2VHEBinding85}_${chunkENJZ2VHEInput74.replace(/[^\dA-Za-z]/g, "_")}`;
        if (!document.getElementById(chunkENJZ2VHEBinding132)) {
          let chunkENJZ2VHEBinding145 = document.getElementById(
            chunkENJZ2VHEBinding85,
          );
          if (chunkENJZ2VHEBinding145) {
            let chunkENJZ2VHEBinding160 =
              chunkENJZ2VHEBinding145.cloneNode(true);
            chunkENJZ2VHEBinding160.id = chunkENJZ2VHEBinding132;
            chunkENJZ2VHEBinding160
              .querySelectorAll("path, circle, line")
              .forEach((item) => {
                item.setAttribute("stroke", chunkENJZ2VHEInput74);
                chunkENJZ2VHEBinding83.fill &&
                  item.setAttribute("fill", chunkENJZ2VHEInput74);
              });
            chunkENJZ2VHEBinding145.parentNode?.appendChild(
              chunkENJZ2VHEBinding160,
            );
          }
        }
        chunkENJZ2VHEInput67.attr(
          `marker-${chunkENJZ2VHEInput68}`,
          `url(${chunkENJZ2VHEInput70}#${chunkENJZ2VHEBinding132})`,
        );
      } else
        chunkENJZ2VHEInput67.attr(
          `marker-${chunkENJZ2VHEInput68}`,
          `url(${chunkENJZ2VHEInput70}#${chunkENJZ2VHEBinding85})`,
        );
    },
    "addEdgeMarker",
  );
  chunkENJZ2VHEBinding5 = defineFunctionName(
    (chunkENJZ2VHEInput122) =>
      typeof chunkENJZ2VHEInput122 == "string"
        ? chunkENJZ2VHEInput122
        : b()?.flowchart?.curve,
    "resolveEdgeCurveType",
  );
  chunkENJZ2VHEBinding6 = new Map();
  chunkENJZ2VHEBinding7 = new Map();
  chunkENJZ2VHET = defineFunctionName(() => {
    chunkENJZ2VHEBinding6.clear();
    chunkENJZ2VHEBinding7.clear();
  }, "clear");
  chunkENJZ2VHEBinding8 = defineFunctionName(
    (chunkENJZ2VHEInput115) =>
      chunkENJZ2VHEInput115
        ? typeof chunkENJZ2VHEInput115 == "string"
          ? chunkENJZ2VHEInput115
          : chunkENJZ2VHEInput115.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
        : "",
    "getLabelStyles",
  );
  chunkENJZ2VHEI = defineFunctionName(
    async (chunkENJZ2VHEInput9, chunkENJZ2VHEInput10) => {
      let chunkENJZ2VHEBinding35 = b(),
        chunkENJZ2VHEBinding36 = w(chunkENJZ2VHEBinding35),
        { labelStyles } = chunkX2U36JSPA(chunkENJZ2VHEInput10);
      chunkENJZ2VHEInput10.labelStyle = labelStyles;
      let chunkENJZ2VHEBinding37 = chunkENJZ2VHEInput9
          .insert("g")
          .attr("class", "edgeLabel"),
        chunkENJZ2VHEBinding38 = chunkENJZ2VHEBinding37
          .insert("g")
          .attr("class", "label")
          .attr("data-id", chunkENJZ2VHEInput10.id),
        chunkENJZ2VHEBinding39 = chunkENJZ2VHEInput10.labelType === "markdown",
        chunkENJZ2VHEBinding40 = await chunkU2HBQHQKN(
          chunkENJZ2VHEInput9,
          chunkENJZ2VHEInput10.label,
          {
            style: chunkENJZ2VHEBinding8(chunkENJZ2VHEInput10.labelStyle),
            useHtmlLabels: chunkENJZ2VHEBinding36,
            addSvgBackground: true,
            isNode: false,
            markdown: chunkENJZ2VHEBinding39,
            width: undefined,
          },
          chunkENJZ2VHEBinding35,
        );
      chunkENJZ2VHEBinding38.node().appendChild(chunkENJZ2VHEBinding40);
      logger.info(
        "abc82",
        chunkENJZ2VHEInput10,
        chunkENJZ2VHEInput10.labelType,
      );
      let chunkENJZ2VHEBinding41 = chunkENJZ2VHEBinding40.getBBox(),
        chunkENJZ2VHEBinding42 = chunkENJZ2VHEBinding41;
      if (chunkENJZ2VHEBinding36) {
        let chunkENJZ2VHEBinding176 = chunkENJZ2VHEBinding40.children[0],
          chunkENJZ2VHEBinding177 = select(chunkENJZ2VHEBinding40);
        chunkENJZ2VHEBinding41 =
          chunkENJZ2VHEBinding176.getBoundingClientRect();
        chunkENJZ2VHEBinding42 = chunkENJZ2VHEBinding41;
        chunkENJZ2VHEBinding177.attr("width", chunkENJZ2VHEBinding41.width);
        chunkENJZ2VHEBinding177.attr("height", chunkENJZ2VHEBinding41.height);
      } else {
        let chunkENJZ2VHEBinding202 = select(chunkENJZ2VHEBinding40)
          .select("text")
          .node();
        chunkENJZ2VHEBinding202 &&
          typeof chunkENJZ2VHEBinding202.getBBox == "function" &&
          (chunkENJZ2VHEBinding42 = chunkENJZ2VHEBinding202.getBBox());
      }
      chunkENJZ2VHEBinding38.attr(
        "transform",
        computeLabelTransform(chunkENJZ2VHEBinding42, chunkENJZ2VHEBinding36),
      );
      chunkENJZ2VHEBinding6.set(
        chunkENJZ2VHEInput10.id,
        chunkENJZ2VHEBinding37,
      );
      chunkENJZ2VHEInput10.width = chunkENJZ2VHEBinding41.width;
      chunkENJZ2VHEInput10.height = chunkENJZ2VHEBinding41.height;
      let chunkENJZ2VHEBinding43;
      if (chunkENJZ2VHEInput10.startLabelLeft) {
        let chunkENJZ2VHEBinding123 = chunkENJZ2VHEInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkENJZ2VHEBinding124 = chunkENJZ2VHEBinding123
            .insert("g")
            .attr("class", "inner"),
          chunkENJZ2VHEBinding125 = await chunk5FUZZQ4RR(
            chunkENJZ2VHEBinding124,
            chunkENJZ2VHEInput10.startLabelLeft,
            chunkENJZ2VHEBinding8(chunkENJZ2VHEInput10.labelStyle) || "",
            false,
            false,
          );
        chunkENJZ2VHEBinding43 = chunkENJZ2VHEBinding125;
        let chunkENJZ2VHEBinding126 = chunkENJZ2VHEBinding125.getBBox();
        if (chunkENJZ2VHEBinding36) {
          let chunkENJZ2VHEBinding178 = chunkENJZ2VHEBinding125.children[0],
            chunkENJZ2VHEBinding179 = select(chunkENJZ2VHEBinding125);
          chunkENJZ2VHEBinding126 =
            chunkENJZ2VHEBinding178.getBoundingClientRect();
          chunkENJZ2VHEBinding179.attr("width", chunkENJZ2VHEBinding126.width);
          chunkENJZ2VHEBinding179.attr(
            "height",
            chunkENJZ2VHEBinding126.height,
          );
        }
        chunkENJZ2VHEBinding124.attr(
          "transform",
          computeLabelTransform(
            chunkENJZ2VHEBinding126,
            chunkENJZ2VHEBinding36,
          ),
        );
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id) ||
          chunkENJZ2VHEBinding7.set(chunkENJZ2VHEInput10.id, {});
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id).startLeft =
          chunkENJZ2VHEBinding123;
        chunkENJZ2VHEHelper1(
          chunkENJZ2VHEBinding43,
          chunkENJZ2VHEInput10.startLabelLeft,
        );
      }
      if (chunkENJZ2VHEInput10.startLabelRight) {
        let chunkENJZ2VHEBinding115 = chunkENJZ2VHEInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkENJZ2VHEBinding116 = chunkENJZ2VHEBinding115
            .insert("g")
            .attr("class", "inner"),
          chunkENJZ2VHEBinding117 = await chunk5FUZZQ4RR(
            chunkENJZ2VHEBinding116,
            chunkENJZ2VHEInput10.startLabelRight,
            chunkENJZ2VHEBinding8(chunkENJZ2VHEInput10.labelStyle) || "",
            false,
            false,
          );
        chunkENJZ2VHEBinding43 = chunkENJZ2VHEBinding117;
        chunkENJZ2VHEBinding116.node().appendChild(chunkENJZ2VHEBinding117);
        let chunkENJZ2VHEBinding118 = chunkENJZ2VHEBinding117.getBBox();
        if (chunkENJZ2VHEBinding36) {
          let chunkENJZ2VHEBinding180 = chunkENJZ2VHEBinding117.children[0],
            chunkENJZ2VHEBinding181 = select(chunkENJZ2VHEBinding117);
          chunkENJZ2VHEBinding118 =
            chunkENJZ2VHEBinding180.getBoundingClientRect();
          chunkENJZ2VHEBinding181.attr("width", chunkENJZ2VHEBinding118.width);
          chunkENJZ2VHEBinding181.attr(
            "height",
            chunkENJZ2VHEBinding118.height,
          );
        }
        chunkENJZ2VHEBinding116.attr(
          "transform",
          computeLabelTransform(
            chunkENJZ2VHEBinding118,
            chunkENJZ2VHEBinding36,
          ),
        );
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id) ||
          chunkENJZ2VHEBinding7.set(chunkENJZ2VHEInput10.id, {});
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id).startRight =
          chunkENJZ2VHEBinding115;
        chunkENJZ2VHEHelper1(
          chunkENJZ2VHEBinding43,
          chunkENJZ2VHEInput10.startLabelRight,
        );
      }
      if (chunkENJZ2VHEInput10.endLabelLeft) {
        let chunkENJZ2VHEBinding119 = chunkENJZ2VHEInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkENJZ2VHEBinding120 = chunkENJZ2VHEBinding119
            .insert("g")
            .attr("class", "inner"),
          chunkENJZ2VHEBinding121 = await chunk5FUZZQ4RR(
            chunkENJZ2VHEBinding120,
            chunkENJZ2VHEInput10.endLabelLeft,
            chunkENJZ2VHEBinding8(chunkENJZ2VHEInput10.labelStyle) || "",
            false,
            false,
          );
        chunkENJZ2VHEBinding43 = chunkENJZ2VHEBinding121;
        let chunkENJZ2VHEBinding122 = chunkENJZ2VHEBinding121.getBBox();
        if (chunkENJZ2VHEBinding36) {
          let chunkENJZ2VHEBinding182 = chunkENJZ2VHEBinding121.children[0],
            chunkENJZ2VHEBinding183 = select(chunkENJZ2VHEBinding121);
          chunkENJZ2VHEBinding122 =
            chunkENJZ2VHEBinding182.getBoundingClientRect();
          chunkENJZ2VHEBinding183.attr("width", chunkENJZ2VHEBinding122.width);
          chunkENJZ2VHEBinding183.attr(
            "height",
            chunkENJZ2VHEBinding122.height,
          );
        }
        chunkENJZ2VHEBinding120.attr(
          "transform",
          computeLabelTransform(
            chunkENJZ2VHEBinding122,
            chunkENJZ2VHEBinding36,
          ),
        );
        chunkENJZ2VHEBinding119.node().appendChild(chunkENJZ2VHEBinding121);
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id) ||
          chunkENJZ2VHEBinding7.set(chunkENJZ2VHEInput10.id, {});
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id).endLeft =
          chunkENJZ2VHEBinding119;
        chunkENJZ2VHEHelper1(
          chunkENJZ2VHEBinding43,
          chunkENJZ2VHEInput10.endLabelLeft,
        );
      }
      if (chunkENJZ2VHEInput10.endLabelRight) {
        let chunkENJZ2VHEBinding111 = chunkENJZ2VHEInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkENJZ2VHEBinding112 = chunkENJZ2VHEBinding111
            .insert("g")
            .attr("class", "inner"),
          chunkENJZ2VHEBinding113 = await chunk5FUZZQ4RR(
            chunkENJZ2VHEBinding112,
            chunkENJZ2VHEInput10.endLabelRight,
            chunkENJZ2VHEBinding8(chunkENJZ2VHEInput10.labelStyle) || "",
            false,
            false,
          );
        chunkENJZ2VHEBinding43 = chunkENJZ2VHEBinding113;
        let chunkENJZ2VHEBinding114 = chunkENJZ2VHEBinding113.getBBox();
        if (chunkENJZ2VHEBinding36) {
          let chunkENJZ2VHEBinding184 = chunkENJZ2VHEBinding113.children[0],
            chunkENJZ2VHEBinding185 = select(chunkENJZ2VHEBinding113);
          chunkENJZ2VHEBinding114 =
            chunkENJZ2VHEBinding184.getBoundingClientRect();
          chunkENJZ2VHEBinding185.attr("width", chunkENJZ2VHEBinding114.width);
          chunkENJZ2VHEBinding185.attr(
            "height",
            chunkENJZ2VHEBinding114.height,
          );
        }
        chunkENJZ2VHEBinding112.attr(
          "transform",
          computeLabelTransform(
            chunkENJZ2VHEBinding114,
            chunkENJZ2VHEBinding36,
          ),
        );
        chunkENJZ2VHEBinding111.node().appendChild(chunkENJZ2VHEBinding113);
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id) ||
          chunkENJZ2VHEBinding7.set(chunkENJZ2VHEInput10.id, {});
        chunkENJZ2VHEBinding7.get(chunkENJZ2VHEInput10.id).endRight =
          chunkENJZ2VHEBinding111;
        chunkENJZ2VHEHelper1(
          chunkENJZ2VHEBinding43,
          chunkENJZ2VHEInput10.endLabelRight,
        );
      }
      return chunkENJZ2VHEBinding40;
    },
    "insertEdgeLabel",
  );
  defineFunctionName(chunkENJZ2VHEHelper1, "setTerminalWidth");
  chunkENJZ2VHEO = defineFunctionName(
    (chunkENJZ2VHEInput20, chunkENJZ2VHEInput21) => {
      logger.debug(
        "Moving label abc88 ",
        chunkENJZ2VHEInput20.id,
        chunkENJZ2VHEInput20.label,
        chunkENJZ2VHEBinding6.get(chunkENJZ2VHEInput20.id),
        chunkENJZ2VHEInput21,
      );
      let chunkENJZ2VHEBinding44 = chunkENJZ2VHEInput21.updatedPath
          ? chunkENJZ2VHEInput21.updatedPath
          : chunkENJZ2VHEInput21.originalPath,
        { subGraphTitleTotalMargin } = chunkZZ45TVLEN(b());
      if (chunkENJZ2VHEInput20.label) {
        let chunkENJZ2VHEBinding133 = chunkENJZ2VHEBinding6.get(
            chunkENJZ2VHEInput20.id,
          ),
          chunkENJZ2VHEBinding134 = chunkENJZ2VHEInput20.x,
          chunkENJZ2VHEBinding135 = chunkENJZ2VHEInput20.y;
        if (chunkENJZ2VHEBinding44) {
          let chunkENJZ2VHEBinding155 = chunk5PVQY5BWG.calcLabelPosition(
            chunkENJZ2VHEBinding44,
          );
          logger.debug(
            "Moving label " + chunkENJZ2VHEInput20.label + " from (",
            chunkENJZ2VHEBinding134,
            ",",
            chunkENJZ2VHEBinding135,
            ") to (",
            chunkENJZ2VHEBinding155.x,
            ",",
            chunkENJZ2VHEBinding155.y,
            ") abc88",
          );
          chunkENJZ2VHEInput21.updatedPath &&
            ((chunkENJZ2VHEBinding134 = chunkENJZ2VHEBinding155.x),
            (chunkENJZ2VHEBinding135 = chunkENJZ2VHEBinding155.y));
        }
        chunkENJZ2VHEBinding133.attr(
          "transform",
          `translate(${chunkENJZ2VHEBinding134}, ${chunkENJZ2VHEBinding135 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (chunkENJZ2VHEInput20.startLabelLeft) {
        let chunkENJZ2VHEBinding149 = chunkENJZ2VHEBinding7.get(
            chunkENJZ2VHEInput20.id,
          ).startLeft,
          chunkENJZ2VHEBinding150 = chunkENJZ2VHEInput20.x,
          chunkENJZ2VHEBinding151 = chunkENJZ2VHEInput20.y;
        if (chunkENJZ2VHEBinding44) {
          let chunkENJZ2VHEBinding192 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              chunkENJZ2VHEInput20.arrowTypeStart ? 10 : 0,
              "start_left",
              chunkENJZ2VHEBinding44,
            );
          chunkENJZ2VHEBinding150 = chunkENJZ2VHEBinding192.x;
          chunkENJZ2VHEBinding151 = chunkENJZ2VHEBinding192.y;
        }
        chunkENJZ2VHEBinding149.attr(
          "transform",
          `translate(${chunkENJZ2VHEBinding150}, ${chunkENJZ2VHEBinding151})`,
        );
      }
      if (chunkENJZ2VHEInput20.startLabelRight) {
        let chunkENJZ2VHEBinding146 = chunkENJZ2VHEBinding7.get(
            chunkENJZ2VHEInput20.id,
          ).startRight,
          chunkENJZ2VHEBinding147 = chunkENJZ2VHEInput20.x,
          chunkENJZ2VHEBinding148 = chunkENJZ2VHEInput20.y;
        if (chunkENJZ2VHEBinding44) {
          let chunkENJZ2VHEBinding191 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              chunkENJZ2VHEInput20.arrowTypeStart ? 10 : 0,
              "start_right",
              chunkENJZ2VHEBinding44,
            );
          chunkENJZ2VHEBinding147 = chunkENJZ2VHEBinding191.x;
          chunkENJZ2VHEBinding148 = chunkENJZ2VHEBinding191.y;
        }
        chunkENJZ2VHEBinding146.attr(
          "transform",
          `translate(${chunkENJZ2VHEBinding147}, ${chunkENJZ2VHEBinding148})`,
        );
      }
      if (chunkENJZ2VHEInput20.endLabelLeft) {
        let chunkENJZ2VHEBinding156 = chunkENJZ2VHEBinding7.get(
            chunkENJZ2VHEInput20.id,
          ).endLeft,
          chunkENJZ2VHEBinding157 = chunkENJZ2VHEInput20.x,
          chunkENJZ2VHEBinding158 = chunkENJZ2VHEInput20.y;
        if (chunkENJZ2VHEBinding44) {
          let chunkENJZ2VHEBinding194 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              chunkENJZ2VHEInput20.arrowTypeEnd ? 10 : 0,
              "end_left",
              chunkENJZ2VHEBinding44,
            );
          chunkENJZ2VHEBinding157 = chunkENJZ2VHEBinding194.x;
          chunkENJZ2VHEBinding158 = chunkENJZ2VHEBinding194.y;
        }
        chunkENJZ2VHEBinding156.attr(
          "transform",
          `translate(${chunkENJZ2VHEBinding157}, ${chunkENJZ2VHEBinding158})`,
        );
      }
      if (chunkENJZ2VHEInput20.endLabelRight) {
        let chunkENJZ2VHEBinding152 = chunkENJZ2VHEBinding7.get(
            chunkENJZ2VHEInput20.id,
          ).endRight,
          chunkENJZ2VHEBinding153 = chunkENJZ2VHEInput20.x,
          chunkENJZ2VHEBinding154 = chunkENJZ2VHEInput20.y;
        if (chunkENJZ2VHEBinding44) {
          let chunkENJZ2VHEBinding193 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              chunkENJZ2VHEInput20.arrowTypeEnd ? 10 : 0,
              "end_right",
              chunkENJZ2VHEBinding44,
            );
          chunkENJZ2VHEBinding153 = chunkENJZ2VHEBinding193.x;
          chunkENJZ2VHEBinding154 = chunkENJZ2VHEBinding193.y;
        }
        chunkENJZ2VHEBinding152.attr(
          "transform",
          `translate(${chunkENJZ2VHEBinding153}, ${chunkENJZ2VHEBinding154})`,
        );
      }
    },
    "positionEdgeLabel",
  );
  chunkENJZ2VHEBinding9 = defineFunctionName(
    (chunkENJZ2VHEInput98, chunkENJZ2VHEInput99) => {
      let chunkENJZ2VHEBinding170 = chunkENJZ2VHEInput98.x,
        chunkENJZ2VHEBinding171 = chunkENJZ2VHEInput98.y,
        chunkENJZ2VHEBinding172 = Math.abs(
          chunkENJZ2VHEInput99.x - chunkENJZ2VHEBinding170,
        ),
        chunkENJZ2VHEBinding173 = Math.abs(
          chunkENJZ2VHEInput99.y - chunkENJZ2VHEBinding171,
        ),
        chunkENJZ2VHEBinding174 = chunkENJZ2VHEInput98.width / 2,
        chunkENJZ2VHEBinding175 = chunkENJZ2VHEInput98.height / 2;
      return (
        chunkENJZ2VHEBinding172 >= chunkENJZ2VHEBinding174 ||
        chunkENJZ2VHEBinding173 >= chunkENJZ2VHEBinding175
      );
    },
    "outsideNode",
  );
  chunkENJZ2VHEBinding10 = defineFunctionName(
    (chunkENJZ2VHEInput43, chunkENJZ2VHEInput44, chunkENJZ2VHEInput45) => {
      logger.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(chunkENJZ2VHEInput44)}
  insidePoint : ${JSON.stringify(chunkENJZ2VHEInput45)}
  node        : x:${chunkENJZ2VHEInput43.x} y:${chunkENJZ2VHEInput43.y} w:${chunkENJZ2VHEInput43.width} h:${chunkENJZ2VHEInput43.height}`);
      let chunkENJZ2VHEBinding49 = chunkENJZ2VHEInput43.x,
        chunkENJZ2VHEBinding50 = chunkENJZ2VHEInput43.y,
        chunkENJZ2VHEBinding51 = Math.abs(
          chunkENJZ2VHEBinding49 - chunkENJZ2VHEInput45.x,
        ),
        chunkENJZ2VHEBinding52 = chunkENJZ2VHEInput43.width / 2,
        chunkENJZ2VHEBinding53 =
          chunkENJZ2VHEInput45.x < chunkENJZ2VHEInput44.x
            ? chunkENJZ2VHEBinding52 - chunkENJZ2VHEBinding51
            : chunkENJZ2VHEBinding52 + chunkENJZ2VHEBinding51,
        chunkENJZ2VHEBinding54 = chunkENJZ2VHEInput43.height / 2,
        chunkENJZ2VHEBinding55 = Math.abs(
          chunkENJZ2VHEInput44.y - chunkENJZ2VHEInput45.y,
        ),
        chunkENJZ2VHEBinding56 = Math.abs(
          chunkENJZ2VHEInput44.x - chunkENJZ2VHEInput45.x,
        );
      if (
        Math.abs(chunkENJZ2VHEBinding50 - chunkENJZ2VHEInput44.y) *
          chunkENJZ2VHEBinding52 >
        Math.abs(chunkENJZ2VHEBinding49 - chunkENJZ2VHEInput44.x) *
          chunkENJZ2VHEBinding54
      ) {
        let chunkENJZ2VHEBinding139 =
          chunkENJZ2VHEInput45.y < chunkENJZ2VHEInput44.y
            ? chunkENJZ2VHEInput44.y -
              chunkENJZ2VHEBinding54 -
              chunkENJZ2VHEBinding50
            : chunkENJZ2VHEBinding50 -
              chunkENJZ2VHEBinding54 -
              chunkENJZ2VHEInput44.y;
        chunkENJZ2VHEBinding53 =
          (chunkENJZ2VHEBinding56 * chunkENJZ2VHEBinding139) /
          chunkENJZ2VHEBinding55;
        let chunkENJZ2VHEBinding140 = {
          x:
            chunkENJZ2VHEInput45.x < chunkENJZ2VHEInput44.x
              ? chunkENJZ2VHEInput45.x + chunkENJZ2VHEBinding53
              : chunkENJZ2VHEInput45.x -
                chunkENJZ2VHEBinding56 +
                chunkENJZ2VHEBinding53,
          y:
            chunkENJZ2VHEInput45.y < chunkENJZ2VHEInput44.y
              ? chunkENJZ2VHEInput45.y +
                chunkENJZ2VHEBinding55 -
                chunkENJZ2VHEBinding139
              : chunkENJZ2VHEInput45.y -
                chunkENJZ2VHEBinding55 +
                chunkENJZ2VHEBinding139,
        };
        return (
          chunkENJZ2VHEBinding53 === 0 &&
            ((chunkENJZ2VHEBinding140.x = chunkENJZ2VHEInput44.x),
            (chunkENJZ2VHEBinding140.y = chunkENJZ2VHEInput44.y)),
          chunkENJZ2VHEBinding56 === 0 &&
            (chunkENJZ2VHEBinding140.x = chunkENJZ2VHEInput44.x),
          chunkENJZ2VHEBinding55 === 0 &&
            (chunkENJZ2VHEBinding140.y = chunkENJZ2VHEInput44.y),
          logger.debug(
            `abc89 top/bottom calc, Q ${chunkENJZ2VHEBinding55}, q ${chunkENJZ2VHEBinding139}, R ${chunkENJZ2VHEBinding56}, r ${chunkENJZ2VHEBinding53}`,
            chunkENJZ2VHEBinding140,
          ),
          chunkENJZ2VHEBinding140
        );
      } else {
        chunkENJZ2VHEBinding53 =
          chunkENJZ2VHEInput45.x < chunkENJZ2VHEInput44.x
            ? chunkENJZ2VHEInput44.x -
              chunkENJZ2VHEBinding52 -
              chunkENJZ2VHEBinding49
            : chunkENJZ2VHEBinding49 -
              chunkENJZ2VHEBinding52 -
              chunkENJZ2VHEInput44.x;
        let chunkENJZ2VHEBinding136 =
            (chunkENJZ2VHEBinding55 * chunkENJZ2VHEBinding53) /
            chunkENJZ2VHEBinding56,
          chunkENJZ2VHEBinding137 =
            chunkENJZ2VHEInput45.x < chunkENJZ2VHEInput44.x
              ? chunkENJZ2VHEInput45.x +
                chunkENJZ2VHEBinding56 -
                chunkENJZ2VHEBinding53
              : chunkENJZ2VHEInput45.x -
                chunkENJZ2VHEBinding56 +
                chunkENJZ2VHEBinding53,
          chunkENJZ2VHEBinding138 =
            chunkENJZ2VHEInput45.y < chunkENJZ2VHEInput44.y
              ? chunkENJZ2VHEInput45.y + chunkENJZ2VHEBinding136
              : chunkENJZ2VHEInput45.y - chunkENJZ2VHEBinding136;
        return (
          logger.debug(
            `sides calc abc89, Q ${chunkENJZ2VHEBinding55}, q ${chunkENJZ2VHEBinding136}, R ${chunkENJZ2VHEBinding56}, r ${chunkENJZ2VHEBinding53}`,
            {
              _x: chunkENJZ2VHEBinding137,
              _y: chunkENJZ2VHEBinding138,
            },
          ),
          chunkENJZ2VHEBinding53 === 0 &&
            ((chunkENJZ2VHEBinding137 = chunkENJZ2VHEInput44.x),
            (chunkENJZ2VHEBinding138 = chunkENJZ2VHEInput44.y)),
          chunkENJZ2VHEBinding56 === 0 &&
            (chunkENJZ2VHEBinding137 = chunkENJZ2VHEInput44.x),
          chunkENJZ2VHEBinding55 === 0 &&
            (chunkENJZ2VHEBinding138 = chunkENJZ2VHEInput44.y),
          {
            x: chunkENJZ2VHEBinding137,
            y: chunkENJZ2VHEBinding138,
          }
        );
      }
    },
    "intersection",
  );
  chunkENJZ2VHEBinding11 = defineFunctionName(
    (chunkENJZ2VHEInput84, chunkENJZ2VHEInput85) => {
      logger.warn(
        "abc88 cutPathAtIntersect",
        chunkENJZ2VHEInput84,
        chunkENJZ2VHEInput85,
      );
      let chunkENJZ2VHEBinding91 = [],
        chunkENJZ2VHEBinding92 = chunkENJZ2VHEInput84[0],
        chunkENJZ2VHEBinding93 = false;
      return (
        chunkENJZ2VHEInput84.forEach((item) => {
          if (
            (logger.info("abc88 checking point", item, chunkENJZ2VHEInput85),
            !chunkENJZ2VHEBinding9(chunkENJZ2VHEInput85, item) &&
              !chunkENJZ2VHEBinding93)
          ) {
            let chunkENJZ2VHEBinding143 = chunkENJZ2VHEBinding10(
              chunkENJZ2VHEInput85,
              chunkENJZ2VHEBinding92,
              item,
            );
            logger.debug(
              "abc88 inside",
              item,
              chunkENJZ2VHEBinding92,
              chunkENJZ2VHEBinding143,
            );
            logger.debug(
              "abc88 intersection",
              chunkENJZ2VHEBinding143,
              chunkENJZ2VHEInput85,
            );
            let chunkENJZ2VHEBinding144 = false;
            chunkENJZ2VHEBinding91.forEach((_item) => {
              chunkENJZ2VHEBinding144 ||=
                _item.x === chunkENJZ2VHEBinding143.x &&
                _item.y === chunkENJZ2VHEBinding143.y;
            });
            chunkENJZ2VHEBinding91.some(
              (_item) =>
                _item.x === chunkENJZ2VHEBinding143.x &&
                _item.y === chunkENJZ2VHEBinding143.y,
            )
              ? logger.warn(
                  "abc88 no intersect",
                  chunkENJZ2VHEBinding143,
                  chunkENJZ2VHEBinding91,
                )
              : chunkENJZ2VHEBinding91.push(chunkENJZ2VHEBinding143);
            chunkENJZ2VHEBinding93 = true;
          } else {
            logger.warn("abc88 outside", item, chunkENJZ2VHEBinding92);
            chunkENJZ2VHEBinding92 = item;
            chunkENJZ2VHEBinding93 || chunkENJZ2VHEBinding91.push(item);
          }
        }),
        logger.debug("returning points", chunkENJZ2VHEBinding91),
        chunkENJZ2VHEBinding91
      );
    },
    "cutPathAtIntersect",
  );
  defineFunctionName(chunkENJZ2VHEHelper2, "extractCornerPoints");
  $ = defineFunctionName(function (
    chunkENJZ2VHEInput109,
    chunkENJZ2VHEInput110,
    chunkENJZ2VHEInput111,
  ) {
    let chunkENJZ2VHEBinding197 =
        chunkENJZ2VHEInput110.x - chunkENJZ2VHEInput109.x,
      chunkENJZ2VHEBinding198 =
        chunkENJZ2VHEInput110.y - chunkENJZ2VHEInput109.y,
      chunkENJZ2VHEBinding199 =
        chunkENJZ2VHEInput111 /
        Math.sqrt(
          chunkENJZ2VHEBinding197 * chunkENJZ2VHEBinding197 +
            chunkENJZ2VHEBinding198 * chunkENJZ2VHEBinding198,
        );
    return {
      x:
        chunkENJZ2VHEInput110.x -
        chunkENJZ2VHEBinding199 * chunkENJZ2VHEBinding197,
      y:
        chunkENJZ2VHEInput110.y -
        chunkENJZ2VHEBinding199 * chunkENJZ2VHEBinding198,
    };
  }, "findAdjacentPoint");
  chunkENJZ2VHEBinding12 = defineFunctionName(function (chunkENJZ2VHEInput46) {
    let { cornerPointPositions } = chunkENJZ2VHEHelper2(chunkENJZ2VHEInput46),
      chunkENJZ2VHEBinding57 = [];
    for (
      let chunkENJZ2VHEBinding60 = 0;
      chunkENJZ2VHEBinding60 < chunkENJZ2VHEInput46.length;
      chunkENJZ2VHEBinding60++
    )
      if (cornerPointPositions.includes(chunkENJZ2VHEBinding60)) {
        let chunkENJZ2VHEBinding63 =
            chunkENJZ2VHEInput46[chunkENJZ2VHEBinding60 - 1],
          chunkENJZ2VHEBinding64 =
            chunkENJZ2VHEInput46[chunkENJZ2VHEBinding60 + 1],
          chunkENJZ2VHEBinding65 = chunkENJZ2VHEInput46[chunkENJZ2VHEBinding60],
          chunkENJZ2VHEBinding66 = $(
            chunkENJZ2VHEBinding63,
            chunkENJZ2VHEBinding65,
            5,
          ),
          chunkENJZ2VHEBinding67 = $(
            chunkENJZ2VHEBinding64,
            chunkENJZ2VHEBinding65,
            5,
          ),
          chunkENJZ2VHEBinding68 =
            chunkENJZ2VHEBinding67.x - chunkENJZ2VHEBinding66.x,
          chunkENJZ2VHEBinding69 =
            chunkENJZ2VHEBinding67.y - chunkENJZ2VHEBinding66.y;
        chunkENJZ2VHEBinding57.push(chunkENJZ2VHEBinding66);
        let chunkENJZ2VHEBinding70 = Math.sqrt(2) * 2,
          chunkENJZ2VHEBinding71 = {
            x: chunkENJZ2VHEBinding65.x,
            y: chunkENJZ2VHEBinding65.y,
          };
        Math.abs(chunkENJZ2VHEBinding64.x - chunkENJZ2VHEBinding63.x) > 10 &&
        Math.abs(chunkENJZ2VHEBinding64.y - chunkENJZ2VHEBinding63.y) >= 10
          ? (logger.debug(
              "Corner point fixing",
              Math.abs(chunkENJZ2VHEBinding64.x - chunkENJZ2VHEBinding63.x),
              Math.abs(chunkENJZ2VHEBinding64.y - chunkENJZ2VHEBinding63.y),
            ),
            (chunkENJZ2VHEBinding71 =
              chunkENJZ2VHEBinding65.x === chunkENJZ2VHEBinding66.x
                ? {
                    x:
                      chunkENJZ2VHEBinding68 < 0
                        ? chunkENJZ2VHEBinding66.x - 5 + chunkENJZ2VHEBinding70
                        : chunkENJZ2VHEBinding66.x + 5 - chunkENJZ2VHEBinding70,
                    y:
                      chunkENJZ2VHEBinding69 < 0
                        ? chunkENJZ2VHEBinding66.y - chunkENJZ2VHEBinding70
                        : chunkENJZ2VHEBinding66.y + chunkENJZ2VHEBinding70,
                  }
                : {
                    x:
                      chunkENJZ2VHEBinding68 < 0
                        ? chunkENJZ2VHEBinding66.x - chunkENJZ2VHEBinding70
                        : chunkENJZ2VHEBinding66.x + chunkENJZ2VHEBinding70,
                    y:
                      chunkENJZ2VHEBinding69 < 0
                        ? chunkENJZ2VHEBinding66.y - 5 + chunkENJZ2VHEBinding70
                        : chunkENJZ2VHEBinding66.y + 5 - chunkENJZ2VHEBinding70,
                  }))
          : logger.debug(
              "Corner point skipping fixing",
              Math.abs(chunkENJZ2VHEBinding64.x - chunkENJZ2VHEBinding63.x),
              Math.abs(chunkENJZ2VHEBinding64.y - chunkENJZ2VHEBinding63.y),
            );
        chunkENJZ2VHEBinding57.push(
          chunkENJZ2VHEBinding71,
          chunkENJZ2VHEBinding67,
        );
      } else
        chunkENJZ2VHEBinding57.push(
          chunkENJZ2VHEInput46[chunkENJZ2VHEBinding60],
        );
    return chunkENJZ2VHEBinding57;
  }, "fixCorners");
  chunkENJZ2VHEBinding13 = defineFunctionName(
    (chunkENJZ2VHEInput112, chunkENJZ2VHEInput113, chunkENJZ2VHEInput114) => {
      let chunkENJZ2VHEBinding200 =
          chunkENJZ2VHEInput112 - chunkENJZ2VHEInput113 - chunkENJZ2VHEInput114,
        chunkENJZ2VHEBinding201 = Math.floor(chunkENJZ2VHEBinding200 / 4);
      return `0 ${chunkENJZ2VHEInput113} ${Array(chunkENJZ2VHEBinding201).fill("2 2").join(" ")} ${chunkENJZ2VHEInput114}`;
    },
    "generateDashArray",
  );
  chunkENJZ2VHER = defineFunctionName(function (
    chunkENJZ2VHEInput1,
    chunkENJZ2VHEInput2,
    chunkENJZ2VHEInput3,
    chunkENJZ2VHEInput4,
    chunkENJZ2VHEInput5,
    chunkENJZ2VHEInput6,
    chunkENJZ2VHEInput7,
    chunkENJZ2VHEInput8 = false,
  ) {
    if (!chunkENJZ2VHEInput7)
      throw Error(
        `insertEdge: missing diagramId for edge "${chunkENJZ2VHEInput2.id}" \u2014 edge IDs require a diagram prefix for uniqueness`,
      );
    let { handDrawnSeed } = b(),
      chunkENJZ2VHEBinding16 = chunkENJZ2VHEInput2.points,
      chunkENJZ2VHEBinding17 = false,
      chunkENJZ2VHEBinding18 = chunkENJZ2VHEInput5;
    var chunkENJZ2VHEBinding19 = chunkENJZ2VHEInput6;
    let chunkENJZ2VHEBinding20 = [];
    for (let chunkENJZ2VHEBinding203 in chunkENJZ2VHEInput2.cssCompiledStyles)
      chunkX2U36JSPR(chunkENJZ2VHEBinding203) ||
        chunkENJZ2VHEBinding20.push(
          chunkENJZ2VHEInput2.cssCompiledStyles[chunkENJZ2VHEBinding203],
        );
    logger.debug(
      "UIO intersect check",
      chunkENJZ2VHEInput2.points,
      chunkENJZ2VHEBinding19.x,
      chunkENJZ2VHEBinding18.x,
    );
    chunkENJZ2VHEBinding19.intersect &&
      chunkENJZ2VHEBinding18.intersect &&
      !chunkENJZ2VHEInput8 &&
      ((chunkENJZ2VHEBinding16 = chunkENJZ2VHEBinding16.slice(
        1,
        chunkENJZ2VHEInput2.points.length - 1,
      )),
      chunkENJZ2VHEBinding16.unshift(
        chunkENJZ2VHEBinding18.intersect(chunkENJZ2VHEBinding16[0]),
      ),
      logger.debug(
        "Last point UIO",
        chunkENJZ2VHEInput2.start,
        "-->",
        chunkENJZ2VHEInput2.end,
        chunkENJZ2VHEBinding16[chunkENJZ2VHEBinding16.length - 1],
        chunkENJZ2VHEBinding19,
        chunkENJZ2VHEBinding19.intersect(
          chunkENJZ2VHEBinding16[chunkENJZ2VHEBinding16.length - 1],
        ),
      ),
      chunkENJZ2VHEBinding16.push(
        chunkENJZ2VHEBinding19.intersect(
          chunkENJZ2VHEBinding16[chunkENJZ2VHEBinding16.length - 1],
        ),
      ));
    let chunkENJZ2VHEBinding21 = btoa(JSON.stringify(chunkENJZ2VHEBinding16));
    chunkENJZ2VHEInput2.toCluster &&
      (logger.info(
        "to cluster abc88",
        chunkENJZ2VHEInput3.get(chunkENJZ2VHEInput2.toCluster),
      ),
      (chunkENJZ2VHEBinding16 = chunkENJZ2VHEBinding11(
        chunkENJZ2VHEInput2.points,
        chunkENJZ2VHEInput3.get(chunkENJZ2VHEInput2.toCluster).node,
      )),
      (chunkENJZ2VHEBinding17 = true));
    chunkENJZ2VHEInput2.fromCluster &&
      (logger.debug(
        "from cluster abc88",
        chunkENJZ2VHEInput3.get(chunkENJZ2VHEInput2.fromCluster),
        JSON.stringify(chunkENJZ2VHEBinding16, null, 2),
      ),
      (chunkENJZ2VHEBinding16 = chunkENJZ2VHEBinding11(
        chunkENJZ2VHEBinding16.reverse(),
        chunkENJZ2VHEInput3.get(chunkENJZ2VHEInput2.fromCluster).node,
      ).reverse()),
      (chunkENJZ2VHEBinding17 = true));
    let chunkENJZ2VHEBinding22 = chunkENJZ2VHEBinding16.filter(
        (item) => !Number.isNaN(item.y),
      ),
      chunkENJZ2VHEBinding23 = chunkENJZ2VHEBinding5(chunkENJZ2VHEInput2.curve);
    chunkENJZ2VHEBinding23 !== "rounded" &&
      (chunkENJZ2VHEBinding22 = chunkENJZ2VHEBinding12(chunkENJZ2VHEBinding22));
    let chunkENJZ2VHEBinding24 = curveLinear;
    switch (chunkENJZ2VHEBinding23) {
      case "linear":
        chunkENJZ2VHEBinding24 = curveLinear;
        break;
      case "basis":
        chunkENJZ2VHEBinding24 = curveBasis;
        break;
      case "cardinal":
        chunkENJZ2VHEBinding24 = curveCardinal;
        break;
      case "bumpX":
        chunkENJZ2VHEBinding24 = curveBumpX;
        break;
      case "bumpY":
        chunkENJZ2VHEBinding24 = curveBumpY;
        break;
      case "catmullRom":
        chunkENJZ2VHEBinding24 = curveCatmullRom;
        break;
      case "monotoneX":
        chunkENJZ2VHEBinding24 = curveMonotoneX;
        break;
      case "monotoneY":
        chunkENJZ2VHEBinding24 = curveMonotoneY;
        break;
      case "natural":
        chunkENJZ2VHEBinding24 = curveNatural;
        break;
      case "step":
        chunkENJZ2VHEBinding24 = curveStep;
        break;
      case "stepAfter":
        chunkENJZ2VHEBinding24 = curveStepAfter;
        break;
      case "stepBefore":
        chunkENJZ2VHEBinding24 = curveStepBefore;
        break;
      case "rounded":
        chunkENJZ2VHEBinding24 = curveLinear;
        break;
      default:
        chunkENJZ2VHEBinding24 = curveBasis;
    }
    let { x, y } = getLineFunctionsWithOffset(chunkENJZ2VHEInput2),
      chunkENJZ2VHEBinding25 = line().x(x).y(y).curve(chunkENJZ2VHEBinding24),
      chunkENJZ2VHEBinding26;
    switch (chunkENJZ2VHEInput2.thickness) {
      case "normal":
        chunkENJZ2VHEBinding26 = "edge-thickness-normal";
        break;
      case "thick":
        chunkENJZ2VHEBinding26 = "edge-thickness-thick";
        break;
      case "invisible":
        chunkENJZ2VHEBinding26 = "edge-thickness-invisible";
        break;
      default:
        chunkENJZ2VHEBinding26 = "edge-thickness-normal";
    }
    switch (chunkENJZ2VHEInput2.pattern) {
      case "solid":
        chunkENJZ2VHEBinding26 += " edge-pattern-solid";
        break;
      case "dotted":
        chunkENJZ2VHEBinding26 += " edge-pattern-dotted";
        break;
      case "dashed":
        chunkENJZ2VHEBinding26 += " edge-pattern-dashed";
        break;
      default:
        chunkENJZ2VHEBinding26 += " edge-pattern-solid";
    }
    let chunkENJZ2VHEBinding27,
      chunkENJZ2VHEBinding28 =
        chunkENJZ2VHEBinding23 === "rounded"
          ? chunkENJZ2VHEHelper3(
              chunkENJZ2VHEHelper5(chunkENJZ2VHEBinding22, chunkENJZ2VHEInput2),
              5,
            )
          : chunkENJZ2VHEBinding25(chunkENJZ2VHEBinding22),
      chunkENJZ2VHEBinding29 = Array.isArray(chunkENJZ2VHEInput2.style)
        ? chunkENJZ2VHEInput2.style
        : [chunkENJZ2VHEInput2.style],
      chunkENJZ2VHEBinding30 = chunkENJZ2VHEBinding29.find((item) =>
        item?.startsWith("stroke:"),
      ),
      chunkENJZ2VHEBinding31 = "";
    chunkENJZ2VHEInput2.animate &&
      (chunkENJZ2VHEBinding31 = "edge-animation-fast");
    chunkENJZ2VHEInput2.animation &&
      (chunkENJZ2VHEBinding31 =
        "edge-animation-" + chunkENJZ2VHEInput2.animation);
    let chunkENJZ2VHEBinding32 = false;
    if (chunkENJZ2VHEInput2.look === "handDrawn") {
      let chunkENJZ2VHEBinding127 = rough.svg(chunkENJZ2VHEInput1);
      Object.assign([], chunkENJZ2VHEBinding22);
      let chunkENJZ2VHEBinding128 = chunkENJZ2VHEBinding127.path(
        chunkENJZ2VHEBinding28,
        {
          roughness: 0.3,
          seed: handDrawnSeed,
        },
      );
      chunkENJZ2VHEBinding26 += " transition";
      chunkENJZ2VHEBinding27 = select(chunkENJZ2VHEBinding128)
        .select("path")
        .attr("id", `${chunkENJZ2VHEInput7}-${chunkENJZ2VHEInput2.id}`)
        .attr(
          "class",
          " " +
            chunkENJZ2VHEBinding26 +
            (chunkENJZ2VHEInput2.classes
              ? " " + chunkENJZ2VHEInput2.classes
              : "") +
            (chunkENJZ2VHEBinding31 ? " " + chunkENJZ2VHEBinding31 : ""),
        )
        .attr(
          "style",
          chunkENJZ2VHEBinding29
            ? chunkENJZ2VHEBinding29.reduce(
                (accumulator, current) => accumulator + ";" + current,
                "",
              )
            : "",
        );
      let chunkENJZ2VHEBinding129 = chunkENJZ2VHEBinding27.attr("d");
      chunkENJZ2VHEBinding27.attr("d", chunkENJZ2VHEBinding129);
      chunkENJZ2VHEInput1.node().appendChild(chunkENJZ2VHEBinding27.node());
    } else {
      let chunkENJZ2VHEBinding72 = chunkENJZ2VHEBinding20.join(";"),
        chunkENJZ2VHEBinding73 = chunkENJZ2VHEBinding29
          ? chunkENJZ2VHEBinding29.reduce(
              (accumulator, current) => accumulator + current + ";",
              "",
            )
          : "",
        chunkENJZ2VHEBinding74 =
          (chunkENJZ2VHEBinding72
            ? chunkENJZ2VHEBinding72 + ";" + chunkENJZ2VHEBinding73 + ";"
            : chunkENJZ2VHEBinding73) +
          ";" +
          (chunkENJZ2VHEBinding29
            ? chunkENJZ2VHEBinding29.reduce(
                (accumulator, current) => accumulator + ";" + current,
                "",
              )
            : "");
      chunkENJZ2VHEBinding27 = chunkENJZ2VHEInput1
        .append("path")
        .attr("d", chunkENJZ2VHEBinding28)
        .attr("id", `${chunkENJZ2VHEInput7}-${chunkENJZ2VHEInput2.id}`)
        .attr(
          "class",
          " " +
            chunkENJZ2VHEBinding26 +
            (chunkENJZ2VHEInput2.classes
              ? " " + chunkENJZ2VHEInput2.classes
              : "") +
            (chunkENJZ2VHEBinding31 ? " " + chunkENJZ2VHEBinding31 : ""),
        )
        .attr("style", chunkENJZ2VHEBinding74);
      chunkENJZ2VHEBinding30 =
        chunkENJZ2VHEBinding74.match(/stroke:([^;]+)/)?.[1];
      chunkENJZ2VHEBinding32 =
        chunkENJZ2VHEInput2.animate === true ||
        !!chunkENJZ2VHEInput2.animation ||
        chunkENJZ2VHEBinding72.includes("animation");
      let chunkENJZ2VHEBinding75 = chunkENJZ2VHEBinding27.node(),
        chunkENJZ2VHEBinding76 =
          typeof chunkENJZ2VHEBinding75.getTotalLength == "function"
            ? chunkENJZ2VHEBinding75.getTotalLength()
            : 0,
        chunkENJZ2VHEBinding77 =
          arrowHeadOffsets[chunkENJZ2VHEInput2.arrowTypeStart] || 0,
        chunkENJZ2VHEBinding78 =
          arrowHeadOffsets[chunkENJZ2VHEInput2.arrowTypeEnd] || 0;
      if (chunkENJZ2VHEInput2.look === "neo" && !chunkENJZ2VHEBinding32) {
        let chunkENJZ2VHEBinding164 = `stroke-dasharray: ${chunkENJZ2VHEInput2.pattern === "dotted" || chunkENJZ2VHEInput2.pattern === "dashed" ? chunkENJZ2VHEBinding13(chunkENJZ2VHEBinding76, chunkENJZ2VHEBinding77, chunkENJZ2VHEBinding78) : `0 ${chunkENJZ2VHEBinding77} ${chunkENJZ2VHEBinding76 - chunkENJZ2VHEBinding77 - chunkENJZ2VHEBinding78} ${chunkENJZ2VHEBinding78}`}; stroke-dashoffset: 0;`;
        chunkENJZ2VHEBinding27.attr(
          "style",
          chunkENJZ2VHEBinding164 + chunkENJZ2VHEBinding27.attr("style"),
        );
      }
    }
    chunkENJZ2VHEBinding27.attr("data-edge", true);
    chunkENJZ2VHEBinding27.attr("data-et", "edge");
    chunkENJZ2VHEBinding27.attr("data-id", chunkENJZ2VHEInput2.id);
    chunkENJZ2VHEBinding27.attr("data-points", chunkENJZ2VHEBinding21);
    chunkENJZ2VHEBinding27.attr(
      "data-look",
      chunk5PVQY5BWL(chunkENJZ2VHEInput2.look),
    );
    chunkENJZ2VHEInput2.showPoints &&
      chunkENJZ2VHEBinding22.forEach((item) => {
        chunkENJZ2VHEInput1
          .append("circle")
          .style("stroke", "red")
          .style("fill", "red")
          .attr("r", 1)
          .attr("cx", item.x)
          .attr("cy", item.y);
      });
    let _chunkENJZ2VHET = "";
    (b().flowchart.arrowMarkerAbsolute || b().state.arrowMarkerAbsolute) &&
      ((_chunkENJZ2VHET =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.search),
      (_chunkENJZ2VHET = _chunkENJZ2VHET
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")));
    logger.info("arrowTypeStart", chunkENJZ2VHEInput2.arrowTypeStart);
    logger.info("arrowTypeEnd", chunkENJZ2VHEInput2.arrowTypeEnd);
    let chunkENJZ2VHEBinding33 =
      !chunkENJZ2VHEBinding32 && chunkENJZ2VHEInput2?.look === "neo";
    chunkENJZ2VHEBinding1(
      chunkENJZ2VHEBinding27,
      chunkENJZ2VHEInput2,
      _chunkENJZ2VHET,
      chunkENJZ2VHEInput7,
      chunkENJZ2VHEInput4,
      chunkENJZ2VHEBinding33,
      chunkENJZ2VHEBinding30,
    );
    let _chunkENJZ2VHEI = Math.floor(chunkENJZ2VHEBinding16.length / 2),
      _chunkENJZ2VHEO = chunkENJZ2VHEBinding16[_chunkENJZ2VHEI];
    chunk5PVQY5BWG.isLabelCoordinateInPath(
      _chunkENJZ2VHEO,
      chunkENJZ2VHEBinding27.attr("d"),
    ) || (chunkENJZ2VHEBinding17 = true);
    let chunkENJZ2VHEBinding34 = {};
    return (
      chunkENJZ2VHEBinding17 &&
        (chunkENJZ2VHEBinding34.updatedPath = chunkENJZ2VHEBinding16),
      (chunkENJZ2VHEBinding34.originalPath = chunkENJZ2VHEInput2.points),
      chunkENJZ2VHEBinding34
    );
  }, "insertEdge");
  defineFunctionName(chunkENJZ2VHEHelper3, "generateRoundedPath");
  defineFunctionName(chunkENJZ2VHEHelper4, "calculateDeltaAndAngle");
  defineFunctionName(chunkENJZ2VHEHelper5, "applyMarkerOffsetsToPoints");
  chunkENJZ2VHEBinding14 = defineFunctionName(
    (
      chunkENJZ2VHEInput118,
      chunkENJZ2VHEInput119,
      chunkENJZ2VHEInput120,
      chunkENJZ2VHEInput121,
    ) => {
      chunkENJZ2VHEInput119.forEach((item) => {
        chunkENJZ2VHEBinding15[item](
          chunkENJZ2VHEInput118,
          chunkENJZ2VHEInput120,
          chunkENJZ2VHEInput121,
        );
      });
    },
    "insertMarkers",
  );
  chunkENJZ2VHEBinding15 = {
    extension: defineFunctionName(
      (chunkENJZ2VHEInput25, chunkENJZ2VHEInput26, chunkENJZ2VHEInput27) => {
        logger.trace("Making markers for ", chunkENJZ2VHEInput27);
        chunkENJZ2VHEInput25
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput27 +
              "_" +
              chunkENJZ2VHEInput26 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEInput26)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        chunkENJZ2VHEInput25
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput27 + "_" + chunkENJZ2VHEInput26 + "-extensionEnd",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEInput26)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
        chunkENJZ2VHEInput25
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput27 +
              "_" +
              chunkENJZ2VHEInput26 +
              "-extensionStart-margin",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEInput26)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("viewBox", "0 0 20 14")
          .append("polygon")
          .attr("points", "10,7 18,13 18,1")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "0");
        chunkENJZ2VHEInput25
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput27 +
              "_" +
              chunkENJZ2VHEInput26 +
              "-extensionEnd-margin",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEInput26)
          .attr("refX", 9)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("viewBox", "0 0 20 14")
          .append("polygon")
          .attr("points", "10,1 10,13 18,7")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "0");
      },
      "extension",
    ),
    composition: defineFunctionName(
      (chunkENJZ2VHEInput28, chunkENJZ2VHEInput29, chunkENJZ2VHEInput30) => {
        chunkENJZ2VHEInput28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput30 +
              "_" +
              chunkENJZ2VHEInput29 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEInput29)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput30 +
              "_" +
              chunkENJZ2VHEInput29 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEInput29)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput30 +
              "_" +
              chunkENJZ2VHEInput29 +
              "-compositionStart-margin",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEInput29)
          .attr("refX", 15)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("viewBox", "0 0 15 15")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput30 +
              "_" +
              chunkENJZ2VHEInput29 +
              "-compositionEnd-margin",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEInput29)
          .attr("refX", 3.5)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "composition",
    ),
    aggregation: defineFunctionName(
      (chunkENJZ2VHEInput31, chunkENJZ2VHEInput32, chunkENJZ2VHEInput33) => {
        chunkENJZ2VHEInput31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput33 +
              "_" +
              chunkENJZ2VHEInput32 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEInput32)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput33 +
              "_" +
              chunkENJZ2VHEInput32 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEInput32)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput33 +
              "_" +
              chunkENJZ2VHEInput32 +
              "-aggregationStart-margin",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEInput32)
          .attr("refX", 15)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 2)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput33 +
              "_" +
              chunkENJZ2VHEInput32 +
              "-aggregationEnd-margin",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEInput32)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 2)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "aggregation",
    ),
    dependency: defineFunctionName(
      (chunkENJZ2VHEInput34, chunkENJZ2VHEInput35, chunkENJZ2VHEInput36) => {
        chunkENJZ2VHEInput34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput36 +
              "_" +
              chunkENJZ2VHEInput35 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEInput35)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput36 +
              "_" +
              chunkENJZ2VHEInput35 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEInput35)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
        chunkENJZ2VHEInput34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput36 +
              "_" +
              chunkENJZ2VHEInput35 +
              "-dependencyStart-margin",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEInput35)
          .attr("refX", 4)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEInput34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput36 +
              "_" +
              chunkENJZ2VHEInput35 +
              "-dependencyEnd-margin",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEInput35)
          .attr("refX", 16)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      },
      "dependency",
    ),
    lollipop: defineFunctionName(
      (chunkENJZ2VHEInput22, chunkENJZ2VHEInput23, chunkENJZ2VHEInput24) => {
        chunkENJZ2VHEInput22
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput24 +
              "_" +
              chunkENJZ2VHEInput23 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEInput23)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        chunkENJZ2VHEInput22
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput24 + "_" + chunkENJZ2VHEInput23 + "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEInput23)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        chunkENJZ2VHEInput22
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput24 +
              "_" +
              chunkENJZ2VHEInput23 +
              "-lollipopStart-margin",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEInput23)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6)
          .attr("stroke-width", 2);
        chunkENJZ2VHEInput22
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput24 +
              "_" +
              chunkENJZ2VHEInput23 +
              "-lollipopEnd-margin",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEInput23)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6)
          .attr("stroke-width", 2);
      },
      "lollipop",
    ),
    point: defineFunctionName(
      (chunkENJZ2VHEInput14, chunkENJZ2VHEInput15, chunkENJZ2VHEInput16) => {
        chunkENJZ2VHEInput14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput16 + "_" + chunkENJZ2VHEInput15 + "-pointEnd",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput15)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 8)
          .attr("markerHeight", 8)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput16 + "_" + chunkENJZ2VHEInput15 + "-pointStart",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput15)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 8)
          .attr("markerHeight", 8)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 5 L 10 10 L 10 0 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput16 +
              "_" +
              chunkENJZ2VHEInput15 +
              "-pointEnd-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput15)
          .attr("viewBox", "0 0 11.5 14")
          .attr("refX", 11.5)
          .attr("refY", 7)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 10.5)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 11.5 7 L 0 14 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput16 +
              "_" +
              chunkENJZ2VHEInput15 +
              "-pointStart-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput15)
          .attr("viewBox", "0 0 11.5 14")
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11.5)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("polygon")
          .attr("points", "0,7 11.5,14 11.5,0")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
      },
      "point",
    ),
    circle: defineFunctionName(
      (chunkENJZ2VHEInput11, chunkENJZ2VHEInput12, chunkENJZ2VHEInput13) => {
        chunkENJZ2VHEInput11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput13 + "_" + chunkENJZ2VHEInput12 + "-circleEnd",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput12)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 11)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput13 + "_" + chunkENJZ2VHEInput12 + "-circleStart",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput12)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -1)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput13 +
              "_" +
              chunkENJZ2VHEInput12 +
              "-circleEnd-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput12)
          .attr("viewBox", "0 0 10 10")
          .attr("refY", 5)
          .attr("refX", 12.25)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 14)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput13 +
              "_" +
              chunkENJZ2VHEInput12 +
              "-circleStart-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEInput12)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -2)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 14)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
      },
      "circle",
    ),
    cross: defineFunctionName(
      (chunkENJZ2VHEInput17, chunkENJZ2VHEInput18, chunkENJZ2VHEInput19) => {
        chunkENJZ2VHEInput17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput19 + "_" + chunkENJZ2VHEInput18 + "-crossEnd",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEInput18)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", 12)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput19 + "_" + chunkENJZ2VHEInput18 + "-crossStart",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEInput18)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", -1)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEInput17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput19 +
              "_" +
              chunkENJZ2VHEInput18 +
              "-crossEnd-margin",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEInput18)
          .attr("viewBox", "0 0 15 15")
          .attr("refX", 17.7)
          .attr("refY", 7.5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2.5);
        chunkENJZ2VHEInput17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput19 +
              "_" +
              chunkENJZ2VHEInput18 +
              "-crossStart-margin",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEInput18)
          .attr("viewBox", "0 0 15 15")
          .attr("refX", -3.5)
          .attr("refY", 7.5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2.5)
          .style("stroke-dasharray", "1,0");
      },
      "cross",
    ),
    barb: defineFunctionName(
      (chunkENJZ2VHEInput95, chunkENJZ2VHEInput96, chunkENJZ2VHEInput97) => {
        chunkENJZ2VHEInput95
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput97 + "_" + chunkENJZ2VHEInput96 + "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      },
      "barb",
    ),
    barbNeo: defineFunctionName(
      (chunkENJZ2VHEInput64, chunkENJZ2VHEInput65, chunkENJZ2VHEInput66) => {
        let { themeVariables } = y(),
          { transitionColor } = themeVariables;
        chunkENJZ2VHEInput64
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput66 + "_" + chunkENJZ2VHEInput65 + "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z");
        chunkENJZ2VHEInput64
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput66 +
              "_" +
              chunkENJZ2VHEInput65 +
              "-barbEnd-margin",
          )
          .attr("refX", 17)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z")
          .attr("fill", `${transitionColor}`);
      },
      "barbNeo",
    ),
    only_one: defineFunctionName(
      (chunkENJZ2VHEInput78, chunkENJZ2VHEInput79, chunkENJZ2VHEInput80) => {
        chunkENJZ2VHEInput78
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput80 + "_" + chunkENJZ2VHEInput79 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEInput79)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18");
        chunkENJZ2VHEInput78
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput80 + "_" + chunkENJZ2VHEInput79 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEInput79)
          .attr("refX", 18)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,0 L3,18 M9,0 L9,18");
      },
      "only_one",
    ),
    zero_or_one: defineFunctionName(
      (chunkENJZ2VHEInput53, chunkENJZ2VHEInput54, chunkENJZ2VHEInput55) => {
        let chunkENJZ2VHEBinding61 = chunkENJZ2VHEInput53
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput55 +
              "_" +
              chunkENJZ2VHEInput54 +
              "-zeroOrOneStart",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEInput54)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkENJZ2VHEBinding61
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("r", 6);
        chunkENJZ2VHEBinding61.append("path").attr("d", "M9,0 L9,18");
        let chunkENJZ2VHEBinding62 = chunkENJZ2VHEInput53
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput55 + "_" + chunkENJZ2VHEInput54 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEInput54)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkENJZ2VHEBinding62
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("r", 6);
        chunkENJZ2VHEBinding62.append("path").attr("d", "M21,0 L21,18");
      },
      "zero_or_one",
    ),
    one_or_more: defineFunctionName(
      (chunkENJZ2VHEInput75, chunkENJZ2VHEInput76, chunkENJZ2VHEInput77) => {
        chunkENJZ2VHEInput75
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput77 +
              "_" +
              chunkENJZ2VHEInput76 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEInput76)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
        chunkENJZ2VHEInput75
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput77 + "_" + chunkENJZ2VHEInput76 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEInput76)
          .attr("refX", 27)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
      },
      "one_or_more",
    ),
    zero_or_more: defineFunctionName(
      (chunkENJZ2VHEInput47, chunkENJZ2VHEInput48, chunkENJZ2VHEInput49) => {
        let chunkENJZ2VHEBinding58 = chunkENJZ2VHEInput47
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput49 +
              "_" +
              chunkENJZ2VHEInput48 +
              "-zeroOrMoreStart",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEInput48)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkENJZ2VHEBinding58
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 48)
          .attr("cy", 18)
          .attr("r", 6);
        chunkENJZ2VHEBinding58
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
        let chunkENJZ2VHEBinding59 = chunkENJZ2VHEInput47
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput49 +
              "_" +
              chunkENJZ2VHEInput48 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEInput48)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkENJZ2VHEBinding59
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 18)
          .attr("r", 6);
        chunkENJZ2VHEBinding59
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
      },
      "zero_or_more",
    ),
    only_one_neo: defineFunctionName(
      (chunkENJZ2VHEInput56, chunkENJZ2VHEInput57, chunkENJZ2VHEInput58) => {
        let { themeVariables } = y(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEInput56
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput58 + "_" + chunkENJZ2VHEInput57 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEInput57)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18")
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEInput56
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput58 + "_" + chunkENJZ2VHEInput57 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEInput57)
          .attr("refX", 18)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M3,0 L3,18 M9,0 L9,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "only_one_neo",
    ),
    zero_or_one_neo: defineFunctionName(
      (chunkENJZ2VHEInput40, chunkENJZ2VHEInput41, chunkENJZ2VHEInput42) => {
        let { themeVariables } = y(),
          { strokeWidth, mainBkg } = themeVariables,
          chunkENJZ2VHEBinding47 = chunkENJZ2VHEInput40
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEInput42 +
                "_" +
                chunkENJZ2VHEInput41 +
                "-zeroOrOneStart",
            )
            .attr("class", "marker zeroOrOne " + chunkENJZ2VHEInput41)
            .attr("refX", 0)
            .attr("refY", 9)
            .attr("markerWidth", 30)
            .attr("markerHeight", 18)
            .attr("orient", "auto")
            .attr("markerUnits", "userSpaceOnUse");
        chunkENJZ2VHEBinding47
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("stroke-width", `${strokeWidth}`)
          .attr("r", 6);
        chunkENJZ2VHEBinding47
          .append("path")
          .attr("d", "M9,0 L9,18")
          .attr("stroke-width", `${strokeWidth}`);
        let chunkENJZ2VHEBinding48 = chunkENJZ2VHEInput40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput42 + "_" + chunkENJZ2VHEInput41 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEInput41)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto");
        chunkENJZ2VHEBinding48
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("stroke-width", `${strokeWidth}`)
          .attr("r", 6);
        chunkENJZ2VHEBinding48
          .append("path")
          .attr("d", "M21,0 L21,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "zero_or_one_neo",
    ),
    one_or_more_neo: defineFunctionName(
      (chunkENJZ2VHEInput50, chunkENJZ2VHEInput51, chunkENJZ2VHEInput52) => {
        let { themeVariables } = y(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEInput50
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput52 +
              "_" +
              chunkENJZ2VHEInput51 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEInput51)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27")
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEInput50
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput52 + "_" + chunkENJZ2VHEInput51 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEInput51)
          .attr("refX", 27)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "one_or_more_neo",
    ),
    zero_or_more_neo: defineFunctionName(
      (chunkENJZ2VHEInput37, chunkENJZ2VHEInput38, chunkENJZ2VHEInput39) => {
        let { themeVariables } = y(),
          { strokeWidth, mainBkg } = themeVariables,
          chunkENJZ2VHEBinding45 = chunkENJZ2VHEInput37
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEInput39 +
                "_" +
                chunkENJZ2VHEInput38 +
                "-zeroOrMoreStart",
            )
            .attr("class", "marker zeroOrMore " + chunkENJZ2VHEInput38)
            .attr("refX", 18)
            .attr("refY", 18)
            .attr("markerWidth", 57)
            .attr("markerHeight", 36)
            .attr("markerUnits", "userSpaceOnUse")
            .attr("orient", "auto");
        chunkENJZ2VHEBinding45
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 45.5)
          .attr("cy", 18)
          .attr("r", 6)
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEBinding45
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18")
          .attr("stroke-width", `${strokeWidth}`);
        let chunkENJZ2VHEBinding46 = chunkENJZ2VHEInput37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput39 +
              "_" +
              chunkENJZ2VHEInput38 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEInput38)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse");
        chunkENJZ2VHEBinding46
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 11)
          .attr("cy", 18)
          .attr("r", 6)
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEBinding46
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "zero_or_more_neo",
    ),
    requirement_arrow: defineFunctionName(
      (chunkENJZ2VHEInput92, chunkENJZ2VHEInput93, chunkENJZ2VHEInput94) => {
        chunkENJZ2VHEInput92
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput94 +
              "_" +
              chunkENJZ2VHEInput93 +
              "-requirement_arrowEnd",
          )
          .attr("refX", 20)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
      },
      "requirement_arrow",
    ),
    requirement_contains: defineFunctionName(
      (chunkENJZ2VHEInput81, chunkENJZ2VHEInput82, chunkENJZ2VHEInput83) => {
        let chunkENJZ2VHEBinding90 = chunkENJZ2VHEInput81
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput83 +
              "_" +
              chunkENJZ2VHEInput82 +
              "-requirement_containsStart",
          )
          .attr("refX", 0)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("g");
        chunkENJZ2VHEBinding90
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkENJZ2VHEBinding90
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkENJZ2VHEBinding90
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
      },
      "requirement_contains",
    ),
    requirement_arrow_neo: defineFunctionName(
      (chunkENJZ2VHEInput86, chunkENJZ2VHEInput87, chunkENJZ2VHEInput88) => {
        let { themeVariables } = y(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEInput86
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEInput88 +
              "_" +
              chunkENJZ2VHEInput87 +
              "-requirement_arrowEnd",
          )
          .attr("refX", 20)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("stroke-width", `${strokeWidth}`)
          .attr("viewBox", "0 0 25 20")
          .append("path")
          .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20")
          .attr("stroke-linejoin", "miter");
      },
      "requirement_arrow_neo",
    ),
    requirement_contains_neo: defineFunctionName(
      (chunkENJZ2VHEInput59, chunkENJZ2VHEInput60, chunkENJZ2VHEInput61) => {
        let { themeVariables } = y(),
          { strokeWidth } = themeVariables,
          chunkENJZ2VHEBinding79 = chunkENJZ2VHEInput59
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEInput61 +
                "_" +
                chunkENJZ2VHEInput60 +
                "-requirement_containsStart",
            )
            .attr("refX", 0)
            .attr("refY", 10)
            .attr("markerWidth", 20)
            .attr("markerHeight", 20)
            .attr("orient", "auto")
            .attr("markerUnits", "userSpaceOnUse")
            .append("g");
        chunkENJZ2VHEBinding79
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkENJZ2VHEBinding79
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkENJZ2VHEBinding79
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
        chunkENJZ2VHEBinding79
          .selectAll("*")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "requirement_contains_neo",
    ),
  };
  chunkENJZ2VHEA = chunkENJZ2VHEBinding14;
});
export {
  chunkENJZ2VHEA,
  chunkENJZ2VHEI,
  chunkENJZ2VHEO,
  chunkENJZ2VHER,
  chunkENJZ2VHET,
};
