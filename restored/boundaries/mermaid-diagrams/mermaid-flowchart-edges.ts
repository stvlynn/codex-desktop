// Restored from ref/webview/assets/chunk-QXUST7PY-BBr-BX2n.js
// Mermaid flowchart edge insert/markers (primary). app-initial d3-shape curves+line → vendor shims.
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
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import { b, h, k } from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { chunkS3R3BYOJG, chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA, chunkJA3XYJ7ZN } from "./mermaid-create-text";
import {
  arrowTipOffsets,
  initMermaidLineOffsetChunk,
  markerLengths,
  getLineFunctionsWithOffset,
} from "../../diagrams/line-offset-helpers";
import {
  initSubGraphTitleMarginsChunk as chunkCVBHYZKIN,
  getSubGraphTitleMargins as chunkCVBHYZKIT,
} from "../../diagrams/subgraph-title-margins";
import { styles2String as a, initStyleHelpersChunk as chunkATLVNIR6N, isLabelStyle as chunkATLVNIR6R } from "../../diagrams/style-helpers";
import rough from "roughjs";
import { chunkJZLCHNYAD, chunkJZLCHNYAR } from "./mermaid-flowchart-nodes";
function chunkQXUST7PYHelper1(chunkQXUST7PYInput92, chunkQXUST7PYInput93) {
  b().flowchart.htmlLabels &&
    chunkQXUST7PYInput92 &&
    ((chunkQXUST7PYInput92.style.width =
      chunkQXUST7PYInput93.length * 9 + "px"),
    (chunkQXUST7PYInput92.style.height = "12px"));
}
function chunkQXUST7PYHelper2(chunkQXUST7PYInput69) {
  let chunkQXUST7PYBinding128 = [],
    chunkQXUST7PYBinding129 = [];
  for (
    let chunkQXUST7PYBinding146 = 1;
    chunkQXUST7PYBinding146 < chunkQXUST7PYInput69.length - 1;
    chunkQXUST7PYBinding146++
  ) {
    let chunkQXUST7PYBinding148 =
        chunkQXUST7PYInput69[chunkQXUST7PYBinding146 - 1],
      chunkQXUST7PYBinding149 = chunkQXUST7PYInput69[chunkQXUST7PYBinding146],
      chunkQXUST7PYBinding150 =
        chunkQXUST7PYInput69[chunkQXUST7PYBinding146 + 1];
    ((chunkQXUST7PYBinding148.x === chunkQXUST7PYBinding149.x &&
      chunkQXUST7PYBinding149.y === chunkQXUST7PYBinding150.y &&
      Math.abs(chunkQXUST7PYBinding149.x - chunkQXUST7PYBinding150.x) > 5 &&
      Math.abs(chunkQXUST7PYBinding149.y - chunkQXUST7PYBinding148.y) > 5) ||
      (chunkQXUST7PYBinding148.y === chunkQXUST7PYBinding149.y &&
        chunkQXUST7PYBinding149.x === chunkQXUST7PYBinding150.x &&
        Math.abs(chunkQXUST7PYBinding149.x - chunkQXUST7PYBinding148.x) > 5 &&
        Math.abs(chunkQXUST7PYBinding149.y - chunkQXUST7PYBinding150.y) > 5)) &&
      (chunkQXUST7PYBinding128.push(chunkQXUST7PYBinding149),
      chunkQXUST7PYBinding129.push(chunkQXUST7PYBinding146));
  }
  return {
    cornerPoints: chunkQXUST7PYBinding128,
    cornerPointPositions: chunkQXUST7PYBinding129,
  };
}
function chunkQXUST7PYHelper3(chunkQXUST7PYInput35, chunkQXUST7PYInput36) {
  if (chunkQXUST7PYInput35.length < 2) return "";
  let chunkQXUST7PYBinding68 = "",
    chunkQXUST7PYBinding69 = chunkQXUST7PYInput35.length;
  for (
    let chunkQXUST7PYBinding71 = 0;
    chunkQXUST7PYBinding71 < chunkQXUST7PYBinding69;
    chunkQXUST7PYBinding71++
  ) {
    let chunkQXUST7PYBinding72 = chunkQXUST7PYInput35[chunkQXUST7PYBinding71],
      chunkQXUST7PYBinding73 = chunkQXUST7PYInput35[chunkQXUST7PYBinding71 - 1],
      chunkQXUST7PYBinding74 = chunkQXUST7PYInput35[chunkQXUST7PYBinding71 + 1];
    if (chunkQXUST7PYBinding71 === 0)
      chunkQXUST7PYBinding68 += `M${chunkQXUST7PYBinding72.x},${chunkQXUST7PYBinding72.y}`;
    else if (chunkQXUST7PYBinding71 === chunkQXUST7PYBinding69 - 1)
      chunkQXUST7PYBinding68 += `L${chunkQXUST7PYBinding72.x},${chunkQXUST7PYBinding72.y}`;
    else {
      let chunkQXUST7PYBinding81 =
          chunkQXUST7PYBinding72.x - chunkQXUST7PYBinding73.x,
        chunkQXUST7PYBinding82 =
          chunkQXUST7PYBinding72.y - chunkQXUST7PYBinding73.y,
        chunkQXUST7PYBinding83 =
          chunkQXUST7PYBinding74.x - chunkQXUST7PYBinding72.x,
        chunkQXUST7PYBinding84 =
          chunkQXUST7PYBinding74.y - chunkQXUST7PYBinding72.y,
        chunkQXUST7PYBinding85 = Math.hypot(
          chunkQXUST7PYBinding81,
          chunkQXUST7PYBinding82,
        ),
        chunkQXUST7PYBinding86 = Math.hypot(
          chunkQXUST7PYBinding83,
          chunkQXUST7PYBinding84,
        );
      if (chunkQXUST7PYBinding85 < 1e-5 || chunkQXUST7PYBinding86 < 1e-5) {
        chunkQXUST7PYBinding68 += `L${chunkQXUST7PYBinding72.x},${chunkQXUST7PYBinding72.y}`;
        continue;
      }
      let chunkQXUST7PYBinding87 =
          chunkQXUST7PYBinding81 / chunkQXUST7PYBinding85,
        chunkQXUST7PYBinding88 =
          chunkQXUST7PYBinding82 / chunkQXUST7PYBinding85,
        chunkQXUST7PYBinding89 =
          chunkQXUST7PYBinding83 / chunkQXUST7PYBinding86,
        chunkQXUST7PYBinding90 =
          chunkQXUST7PYBinding84 / chunkQXUST7PYBinding86,
        chunkQXUST7PYBinding91 =
          chunkQXUST7PYBinding87 * chunkQXUST7PYBinding89 +
          chunkQXUST7PYBinding88 * chunkQXUST7PYBinding90,
        chunkQXUST7PYBinding92 = Math.acos(
          Math.max(-1, Math.min(1, chunkQXUST7PYBinding91)),
        );
      if (
        chunkQXUST7PYBinding92 < 1e-5 ||
        Math.abs(Math.PI - chunkQXUST7PYBinding92) < 1e-5
      ) {
        chunkQXUST7PYBinding68 += `L${chunkQXUST7PYBinding72.x},${chunkQXUST7PYBinding72.y}`;
        continue;
      }
      let chunkQXUST7PYBinding93 = Math.min(
          chunkQXUST7PYInput36 / Math.sin(chunkQXUST7PYBinding92 / 2),
          chunkQXUST7PYBinding85 / 2,
          chunkQXUST7PYBinding86 / 2,
        ),
        chunkQXUST7PYBinding94 =
          chunkQXUST7PYBinding72.x -
          chunkQXUST7PYBinding87 * chunkQXUST7PYBinding93,
        chunkQXUST7PYBinding95 =
          chunkQXUST7PYBinding72.y -
          chunkQXUST7PYBinding88 * chunkQXUST7PYBinding93,
        chunkQXUST7PYBinding96 =
          chunkQXUST7PYBinding72.x +
          chunkQXUST7PYBinding89 * chunkQXUST7PYBinding93,
        chunkQXUST7PYBinding97 =
          chunkQXUST7PYBinding72.y +
          chunkQXUST7PYBinding90 * chunkQXUST7PYBinding93;
      chunkQXUST7PYBinding68 += `L${chunkQXUST7PYBinding94},${chunkQXUST7PYBinding95}`;
      chunkQXUST7PYBinding68 += `Q${chunkQXUST7PYBinding72.x},${chunkQXUST7PYBinding72.y} ${chunkQXUST7PYBinding96},${chunkQXUST7PYBinding97}`;
    }
  }
  return chunkQXUST7PYBinding68;
}
function chunkQXUST7PYHelper4(chunkQXUST7PYInput78, chunkQXUST7PYInput79) {
  if (!chunkQXUST7PYInput78 || !chunkQXUST7PYInput79)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  let chunkQXUST7PYBinding174 = chunkQXUST7PYInput79.x - chunkQXUST7PYInput78.x,
    chunkQXUST7PYBinding175 = chunkQXUST7PYInput79.y - chunkQXUST7PYInput78.y;
  return {
    angle: Math.atan2(chunkQXUST7PYBinding175, chunkQXUST7PYBinding174),
    deltaX: chunkQXUST7PYBinding174,
    deltaY: chunkQXUST7PYBinding175,
  };
}
function chunkQXUST7PYHelper5(chunkQXUST7PYInput67, chunkQXUST7PYInput68) {
  let chunkQXUST7PYBinding98 = chunkQXUST7PYInput67.map((item) => ({
    ...item,
  }));
  if (
    chunkQXUST7PYInput67.length >= 2 &&
    markerLengths[chunkQXUST7PYInput68.arrowTypeStart]
  ) {
    let chunkQXUST7PYBinding163 =
        markerLengths[chunkQXUST7PYInput68.arrowTypeStart],
      chunkQXUST7PYBinding164 = chunkQXUST7PYInput67[0],
      chunkQXUST7PYBinding165 = chunkQXUST7PYInput67[1],
      { angle } = chunkQXUST7PYHelper4(
        chunkQXUST7PYBinding164,
        chunkQXUST7PYBinding165,
      ),
      chunkQXUST7PYBinding166 = chunkQXUST7PYBinding163 * Math.cos(angle),
      chunkQXUST7PYBinding167 = chunkQXUST7PYBinding163 * Math.sin(angle);
    chunkQXUST7PYBinding98[0].x =
      chunkQXUST7PYBinding164.x + chunkQXUST7PYBinding166;
    chunkQXUST7PYBinding98[0].y =
      chunkQXUST7PYBinding164.y + chunkQXUST7PYBinding167;
  }
  let chunkQXUST7PYBinding99 = chunkQXUST7PYInput67.length;
  if (
    chunkQXUST7PYBinding99 >= 2 &&
    markerLengths[chunkQXUST7PYInput68.arrowTypeEnd]
  ) {
    let chunkQXUST7PYBinding152 =
        markerLengths[chunkQXUST7PYInput68.arrowTypeEnd],
      chunkQXUST7PYBinding153 =
        chunkQXUST7PYInput67[chunkQXUST7PYBinding99 - 1],
      chunkQXUST7PYBinding154 =
        chunkQXUST7PYInput67[chunkQXUST7PYBinding99 - 2],
      { angle } = chunkQXUST7PYHelper4(
        chunkQXUST7PYBinding154,
        chunkQXUST7PYBinding153,
      ),
      chunkQXUST7PYBinding155 = chunkQXUST7PYBinding152 * Math.cos(angle),
      chunkQXUST7PYBinding156 = chunkQXUST7PYBinding152 * Math.sin(angle);
    chunkQXUST7PYBinding98[chunkQXUST7PYBinding99 - 1].x =
      chunkQXUST7PYBinding153.x - chunkQXUST7PYBinding155;
    chunkQXUST7PYBinding98[chunkQXUST7PYBinding99 - 1].y =
      chunkQXUST7PYBinding153.y - chunkQXUST7PYBinding156;
  }
  return chunkQXUST7PYBinding98;
}
var chunkQXUST7PYBinding1,
  chunkQXUST7PYBinding2,
  chunkQXUST7PYBinding3,
  chunkQXUST7PYBinding4,
  chunkQXUST7PYBinding5,
  chunkQXUST7PYT,
  chunkQXUST7PYBinding6,
  chunkQXUST7PYI,
  chunkQXUST7PYO,
  chunkQXUST7PYBinding7,
  chunkQXUST7PYBinding8,
  chunkQXUST7PYBinding9,
  $,
  chunkQXUST7PYBinding10,
  chunkQXUST7PYBinding11,
  chunkQXUST7PYR,
  chunkQXUST7PYBinding12,
  chunkQXUST7PYBinding13,
  chunkQXUST7PYA;
export const chunkQXUST7PYN = esmInit(() => {
  initMermaidLineOffsetChunk();
  chunkJZLCHNYAD();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  rough();
  chunkQXUST7PYBinding1 = defineFunctionName(
    (
      chunkQXUST7PYInput80,
      chunkQXUST7PYInput81,
      chunkQXUST7PYInput82,
      chunkQXUST7PYInput83,
      chunkQXUST7PYInput84,
      chunkQXUST7PYInput85,
    ) => {
      chunkQXUST7PYInput81.arrowTypeStart &&
        chunkQXUST7PYBinding3(
          chunkQXUST7PYInput80,
          "start",
          chunkQXUST7PYInput81.arrowTypeStart,
          chunkQXUST7PYInput82,
          chunkQXUST7PYInput83,
          chunkQXUST7PYInput84,
          chunkQXUST7PYInput85,
        );
      chunkQXUST7PYInput81.arrowTypeEnd &&
        chunkQXUST7PYBinding3(
          chunkQXUST7PYInput80,
          "end",
          chunkQXUST7PYInput81.arrowTypeEnd,
          chunkQXUST7PYInput82,
          chunkQXUST7PYInput83,
          chunkQXUST7PYInput84,
          chunkQXUST7PYInput85,
        );
    },
    "addEdgeMarkers",
  );
  chunkQXUST7PYBinding2 = {
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
  chunkQXUST7PYBinding3 = defineFunctionName(
    (
      chunkQXUST7PYInput55,
      chunkQXUST7PYInput56,
      chunkQXUST7PYInput57,
      chunkQXUST7PYInput58,
      chunkQXUST7PYInput59,
      chunkQXUST7PYInput60,
      chunkQXUST7PYInput61,
    ) => {
      let chunkQXUST7PYBinding75 = chunkQXUST7PYBinding2[chunkQXUST7PYInput57];
      if (!chunkQXUST7PYBinding75) {
        logger.warn(`Unknown arrow type: ${chunkQXUST7PYInput57}`);
        return;
      }
      let chunkQXUST7PYBinding76 = `${chunkQXUST7PYInput59}_${chunkQXUST7PYInput60}-${chunkQXUST7PYBinding75.type}${chunkQXUST7PYInput56 === "start" ? "Start" : "End"}`;
      if (chunkQXUST7PYInput61 && chunkQXUST7PYInput61.trim() !== "") {
        let chunkQXUST7PYBinding100 = `${chunkQXUST7PYBinding76}_${chunkQXUST7PYInput61.replace(/[^\dA-Za-z]/g, "_")}`;
        if (!document.getElementById(chunkQXUST7PYBinding100)) {
          let chunkQXUST7PYBinding132 = document.getElementById(
            chunkQXUST7PYBinding76,
          );
          if (chunkQXUST7PYBinding132) {
            let chunkQXUST7PYBinding147 =
              chunkQXUST7PYBinding132.cloneNode(true);
            chunkQXUST7PYBinding147.id = chunkQXUST7PYBinding100;
            chunkQXUST7PYBinding147
              .querySelectorAll("path, circle, line")
              .forEach((item) => {
                item.setAttribute("stroke", chunkQXUST7PYInput61);
                chunkQXUST7PYBinding75.fill &&
                  item.setAttribute("fill", chunkQXUST7PYInput61);
              });
            chunkQXUST7PYBinding132.parentNode?.appendChild(
              chunkQXUST7PYBinding147,
            );
          }
        }
        chunkQXUST7PYInput55.attr(
          `marker-${chunkQXUST7PYInput56}`,
          `url(${chunkQXUST7PYInput58}#${chunkQXUST7PYBinding100})`,
        );
      } else
        chunkQXUST7PYInput55.attr(
          `marker-${chunkQXUST7PYInput56}`,
          `url(${chunkQXUST7PYInput58}#${chunkQXUST7PYBinding76})`,
        );
    },
    "addEdgeMarker",
  );
  chunkQXUST7PYBinding4 = new Map();
  chunkQXUST7PYBinding5 = new Map();
  chunkQXUST7PYT = defineFunctionName(() => {
    chunkQXUST7PYBinding4.clear();
    chunkQXUST7PYBinding5.clear();
  }, "clear");
  chunkQXUST7PYBinding6 = defineFunctionName(
    (chunkQXUST7PYInput98) =>
      chunkQXUST7PYInput98
        ? chunkQXUST7PYInput98.reduce(
            (accumulator, current) => accumulator + ";" + current,
            "",
          )
        : "",
    "getLabelStyles",
  );
  chunkQXUST7PYI = defineFunctionName(
    async (chunkQXUST7PYInput9, chunkQXUST7PYInput10) => {
      let chunkQXUST7PYBinding30 = h(b().flowchart.htmlLabels),
        { labelStyles } = a(chunkQXUST7PYInput10);
      chunkQXUST7PYInput10.labelStyle = labelStyles;
      let chunkQXUST7PYBinding31 = await chunkJA3XYJ7ZN(
        chunkQXUST7PYInput9,
        chunkQXUST7PYInput10.label,
        {
          style: chunkQXUST7PYInput10.labelStyle,
          useHtmlLabels: chunkQXUST7PYBinding30,
          addSvgBackground: true,
          isNode: false,
        },
      );
      logger.info(
        "abc82",
        chunkQXUST7PYInput10,
        chunkQXUST7PYInput10.labelType,
      );
      let chunkQXUST7PYBinding32 = chunkQXUST7PYInput9
          .insert("g")
          .attr("class", "edgeLabel"),
        chunkQXUST7PYBinding33 = chunkQXUST7PYBinding32
          .insert("g")
          .attr("class", "label")
          .attr("data-id", chunkQXUST7PYInput10.id);
      chunkQXUST7PYBinding33.node().appendChild(chunkQXUST7PYBinding31);
      let chunkQXUST7PYBinding34 = chunkQXUST7PYBinding31.getBBox();
      if (chunkQXUST7PYBinding30) {
        let chunkQXUST7PYBinding172 = chunkQXUST7PYBinding31.children[0],
          chunkQXUST7PYBinding173 = select(chunkQXUST7PYBinding31);
        chunkQXUST7PYBinding34 =
          chunkQXUST7PYBinding172.getBoundingClientRect();
        chunkQXUST7PYBinding173.attr("width", chunkQXUST7PYBinding34.width);
        chunkQXUST7PYBinding173.attr("height", chunkQXUST7PYBinding34.height);
      }
      chunkQXUST7PYBinding33.attr(
        "transform",
        "translate(" +
          -chunkQXUST7PYBinding34.width / 2 +
          ", " +
          -chunkQXUST7PYBinding34.height / 2 +
          ")",
      );
      chunkQXUST7PYBinding4.set(
        chunkQXUST7PYInput10.id,
        chunkQXUST7PYBinding32,
      );
      chunkQXUST7PYInput10.width = chunkQXUST7PYBinding34.width;
      chunkQXUST7PYInput10.height = chunkQXUST7PYBinding34.height;
      let chunkQXUST7PYBinding35;
      if (chunkQXUST7PYInput10.startLabelLeft) {
        let chunkQXUST7PYBinding116 = await chunkJZLCHNYAR(
            chunkQXUST7PYInput10.startLabelLeft,
            chunkQXUST7PYBinding6(chunkQXUST7PYInput10.labelStyle),
          ),
          chunkQXUST7PYBinding117 = chunkQXUST7PYInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkQXUST7PYBinding118 = chunkQXUST7PYBinding117
            .insert("g")
            .attr("class", "inner");
        chunkQXUST7PYBinding35 = chunkQXUST7PYBinding118
          .node()
          .appendChild(chunkQXUST7PYBinding116);
        let chunkQXUST7PYBinding119 = chunkQXUST7PYBinding116.getBBox();
        chunkQXUST7PYBinding118.attr(
          "transform",
          "translate(" +
            -chunkQXUST7PYBinding119.width / 2 +
            ", " +
            -chunkQXUST7PYBinding119.height / 2 +
            ")",
        );
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id) ||
          chunkQXUST7PYBinding5.set(chunkQXUST7PYInput10.id, {});
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id).startLeft =
          chunkQXUST7PYBinding117;
        chunkQXUST7PYHelper1(
          chunkQXUST7PYBinding35,
          chunkQXUST7PYInput10.startLabelLeft,
        );
      }
      if (chunkQXUST7PYInput10.startLabelRight) {
        let chunkQXUST7PYBinding105 = await chunkJZLCHNYAR(
            chunkQXUST7PYInput10.startLabelRight,
            chunkQXUST7PYBinding6(chunkQXUST7PYInput10.labelStyle),
          ),
          chunkQXUST7PYBinding106 = chunkQXUST7PYInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkQXUST7PYBinding107 = chunkQXUST7PYBinding106
            .insert("g")
            .attr("class", "inner");
        chunkQXUST7PYBinding35 = chunkQXUST7PYBinding106
          .node()
          .appendChild(chunkQXUST7PYBinding105);
        chunkQXUST7PYBinding107.node().appendChild(chunkQXUST7PYBinding105);
        let chunkQXUST7PYBinding108 = chunkQXUST7PYBinding105.getBBox();
        chunkQXUST7PYBinding107.attr(
          "transform",
          "translate(" +
            -chunkQXUST7PYBinding108.width / 2 +
            ", " +
            -chunkQXUST7PYBinding108.height / 2 +
            ")",
        );
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id) ||
          chunkQXUST7PYBinding5.set(chunkQXUST7PYInput10.id, {});
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id).startRight =
          chunkQXUST7PYBinding106;
        chunkQXUST7PYHelper1(
          chunkQXUST7PYBinding35,
          chunkQXUST7PYInput10.startLabelRight,
        );
      }
      if (chunkQXUST7PYInput10.endLabelLeft) {
        let chunkQXUST7PYBinding109 = await chunkJZLCHNYAR(
            chunkQXUST7PYInput10.endLabelLeft,
            chunkQXUST7PYBinding6(chunkQXUST7PYInput10.labelStyle),
          ),
          chunkQXUST7PYBinding110 = chunkQXUST7PYInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkQXUST7PYBinding111 = chunkQXUST7PYBinding110
            .insert("g")
            .attr("class", "inner");
        chunkQXUST7PYBinding35 = chunkQXUST7PYBinding111
          .node()
          .appendChild(chunkQXUST7PYBinding109);
        let chunkQXUST7PYBinding112 = chunkQXUST7PYBinding109.getBBox();
        chunkQXUST7PYBinding111.attr(
          "transform",
          "translate(" +
            -chunkQXUST7PYBinding112.width / 2 +
            ", " +
            -chunkQXUST7PYBinding112.height / 2 +
            ")",
        );
        chunkQXUST7PYBinding110.node().appendChild(chunkQXUST7PYBinding109);
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id) ||
          chunkQXUST7PYBinding5.set(chunkQXUST7PYInput10.id, {});
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id).endLeft =
          chunkQXUST7PYBinding110;
        chunkQXUST7PYHelper1(
          chunkQXUST7PYBinding35,
          chunkQXUST7PYInput10.endLabelLeft,
        );
      }
      if (chunkQXUST7PYInput10.endLabelRight) {
        let chunkQXUST7PYBinding101 = await chunkJZLCHNYAR(
            chunkQXUST7PYInput10.endLabelRight,
            chunkQXUST7PYBinding6(chunkQXUST7PYInput10.labelStyle),
          ),
          chunkQXUST7PYBinding102 = chunkQXUST7PYInput9
            .insert("g")
            .attr("class", "edgeTerminals"),
          chunkQXUST7PYBinding103 = chunkQXUST7PYBinding102
            .insert("g")
            .attr("class", "inner");
        chunkQXUST7PYBinding35 = chunkQXUST7PYBinding103
          .node()
          .appendChild(chunkQXUST7PYBinding101);
        let chunkQXUST7PYBinding104 = chunkQXUST7PYBinding101.getBBox();
        chunkQXUST7PYBinding103.attr(
          "transform",
          "translate(" +
            -chunkQXUST7PYBinding104.width / 2 +
            ", " +
            -chunkQXUST7PYBinding104.height / 2 +
            ")",
        );
        chunkQXUST7PYBinding102.node().appendChild(chunkQXUST7PYBinding101);
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id) ||
          chunkQXUST7PYBinding5.set(chunkQXUST7PYInput10.id, {});
        chunkQXUST7PYBinding5.get(chunkQXUST7PYInput10.id).endRight =
          chunkQXUST7PYBinding102;
        chunkQXUST7PYHelper1(
          chunkQXUST7PYBinding35,
          chunkQXUST7PYInput10.endLabelRight,
        );
      }
      return chunkQXUST7PYBinding31;
    },
    "insertEdgeLabel",
  );
  defineFunctionName(chunkQXUST7PYHelper1, "setTerminalWidth");
  chunkQXUST7PYO = defineFunctionName(
    (chunkQXUST7PYInput11, chunkQXUST7PYInput12) => {
      logger.debug(
        "Moving label abc88 ",
        chunkQXUST7PYInput11.id,
        chunkQXUST7PYInput11.label,
        chunkQXUST7PYBinding4.get(chunkQXUST7PYInput11.id),
        chunkQXUST7PYInput12,
      );
      let chunkQXUST7PYBinding36 = chunkQXUST7PYInput12.updatedPath
          ? chunkQXUST7PYInput12.updatedPath
          : chunkQXUST7PYInput12.originalPath,
        { subGraphTitleTotalMargin } = chunkCVBHYZKIT(b());
      if (chunkQXUST7PYInput11.label) {
        let chunkQXUST7PYBinding113 = chunkQXUST7PYBinding4.get(
            chunkQXUST7PYInput11.id,
          ),
          chunkQXUST7PYBinding114 = chunkQXUST7PYInput11.x,
          chunkQXUST7PYBinding115 = chunkQXUST7PYInput11.y;
        if (chunkQXUST7PYBinding36) {
          let chunkQXUST7PYBinding142 = chunkS3R3BYOJG.calcLabelPosition(
            chunkQXUST7PYBinding36,
          );
          logger.debug(
            "Moving label " + chunkQXUST7PYInput11.label + " from (",
            chunkQXUST7PYBinding114,
            ",",
            chunkQXUST7PYBinding115,
            ") to (",
            chunkQXUST7PYBinding142.x,
            ",",
            chunkQXUST7PYBinding142.y,
            ") abc88",
          );
          chunkQXUST7PYInput12.updatedPath &&
            ((chunkQXUST7PYBinding114 = chunkQXUST7PYBinding142.x),
            (chunkQXUST7PYBinding115 = chunkQXUST7PYBinding142.y));
        }
        chunkQXUST7PYBinding113.attr(
          "transform",
          `translate(${chunkQXUST7PYBinding114}, ${chunkQXUST7PYBinding115 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (chunkQXUST7PYInput11.startLabelLeft) {
        let chunkQXUST7PYBinding136 = chunkQXUST7PYBinding5.get(
            chunkQXUST7PYInput11.id,
          ).startLeft,
          chunkQXUST7PYBinding137 = chunkQXUST7PYInput11.x,
          chunkQXUST7PYBinding138 = chunkQXUST7PYInput11.y;
        if (chunkQXUST7PYBinding36) {
          let chunkQXUST7PYBinding169 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              chunkQXUST7PYInput11.arrowTypeStart ? 10 : 0,
              "start_left",
              chunkQXUST7PYBinding36,
            );
          chunkQXUST7PYBinding137 = chunkQXUST7PYBinding169.x;
          chunkQXUST7PYBinding138 = chunkQXUST7PYBinding169.y;
        }
        chunkQXUST7PYBinding136.attr(
          "transform",
          `translate(${chunkQXUST7PYBinding137}, ${chunkQXUST7PYBinding138})`,
        );
      }
      if (chunkQXUST7PYInput11.startLabelRight) {
        let chunkQXUST7PYBinding133 = chunkQXUST7PYBinding5.get(
            chunkQXUST7PYInput11.id,
          ).startRight,
          chunkQXUST7PYBinding134 = chunkQXUST7PYInput11.x,
          chunkQXUST7PYBinding135 = chunkQXUST7PYInput11.y;
        if (chunkQXUST7PYBinding36) {
          let chunkQXUST7PYBinding168 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              chunkQXUST7PYInput11.arrowTypeStart ? 10 : 0,
              "start_right",
              chunkQXUST7PYBinding36,
            );
          chunkQXUST7PYBinding134 = chunkQXUST7PYBinding168.x;
          chunkQXUST7PYBinding135 = chunkQXUST7PYBinding168.y;
        }
        chunkQXUST7PYBinding133.attr(
          "transform",
          `translate(${chunkQXUST7PYBinding134}, ${chunkQXUST7PYBinding135})`,
        );
      }
      if (chunkQXUST7PYInput11.endLabelLeft) {
        let chunkQXUST7PYBinding143 = chunkQXUST7PYBinding5.get(
            chunkQXUST7PYInput11.id,
          ).endLeft,
          chunkQXUST7PYBinding144 = chunkQXUST7PYInput11.x,
          chunkQXUST7PYBinding145 = chunkQXUST7PYInput11.y;
        if (chunkQXUST7PYBinding36) {
          let chunkQXUST7PYBinding171 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              chunkQXUST7PYInput11.arrowTypeEnd ? 10 : 0,
              "end_left",
              chunkQXUST7PYBinding36,
            );
          chunkQXUST7PYBinding144 = chunkQXUST7PYBinding171.x;
          chunkQXUST7PYBinding145 = chunkQXUST7PYBinding171.y;
        }
        chunkQXUST7PYBinding143.attr(
          "transform",
          `translate(${chunkQXUST7PYBinding144}, ${chunkQXUST7PYBinding145})`,
        );
      }
      if (chunkQXUST7PYInput11.endLabelRight) {
        let chunkQXUST7PYBinding139 = chunkQXUST7PYBinding5.get(
            chunkQXUST7PYInput11.id,
          ).endRight,
          chunkQXUST7PYBinding140 = chunkQXUST7PYInput11.x,
          chunkQXUST7PYBinding141 = chunkQXUST7PYInput11.y;
        if (chunkQXUST7PYBinding36) {
          let chunkQXUST7PYBinding170 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              chunkQXUST7PYInput11.arrowTypeEnd ? 10 : 0,
              "end_right",
              chunkQXUST7PYBinding36,
            );
          chunkQXUST7PYBinding140 = chunkQXUST7PYBinding170.x;
          chunkQXUST7PYBinding141 = chunkQXUST7PYBinding170.y;
        }
        chunkQXUST7PYBinding139.attr(
          "transform",
          `translate(${chunkQXUST7PYBinding140}, ${chunkQXUST7PYBinding141})`,
        );
      }
    },
    "positionEdgeLabel",
  );
  chunkQXUST7PYBinding7 = defineFunctionName(
    (chunkQXUST7PYInput76, chunkQXUST7PYInput77) => {
      let chunkQXUST7PYBinding157 = chunkQXUST7PYInput76.x,
        chunkQXUST7PYBinding158 = chunkQXUST7PYInput76.y,
        chunkQXUST7PYBinding159 = Math.abs(
          chunkQXUST7PYInput77.x - chunkQXUST7PYBinding157,
        ),
        chunkQXUST7PYBinding160 = Math.abs(
          chunkQXUST7PYInput77.y - chunkQXUST7PYBinding158,
        ),
        chunkQXUST7PYBinding161 = chunkQXUST7PYInput76.width / 2,
        chunkQXUST7PYBinding162 = chunkQXUST7PYInput76.height / 2;
      return (
        chunkQXUST7PYBinding159 >= chunkQXUST7PYBinding161 ||
        chunkQXUST7PYBinding160 >= chunkQXUST7PYBinding162
      );
    },
    "outsideNode",
  );
  chunkQXUST7PYBinding8 = defineFunctionName(
    (chunkQXUST7PYInput13, chunkQXUST7PYInput14, chunkQXUST7PYInput15) => {
      logger.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(chunkQXUST7PYInput14)}
  insidePoint : ${JSON.stringify(chunkQXUST7PYInput15)}
  node        : x:${chunkQXUST7PYInput13.x} y:${chunkQXUST7PYInput13.y} w:${chunkQXUST7PYInput13.width} h:${chunkQXUST7PYInput13.height}`);
      let chunkQXUST7PYBinding37 = chunkQXUST7PYInput13.x,
        chunkQXUST7PYBinding38 = chunkQXUST7PYInput13.y,
        chunkQXUST7PYBinding39 = Math.abs(
          chunkQXUST7PYBinding37 - chunkQXUST7PYInput15.x,
        ),
        chunkQXUST7PYBinding40 = chunkQXUST7PYInput13.width / 2,
        chunkQXUST7PYBinding41 =
          chunkQXUST7PYInput15.x < chunkQXUST7PYInput14.x
            ? chunkQXUST7PYBinding40 - chunkQXUST7PYBinding39
            : chunkQXUST7PYBinding40 + chunkQXUST7PYBinding39,
        chunkQXUST7PYBinding42 = chunkQXUST7PYInput13.height / 2,
        chunkQXUST7PYBinding43 = Math.abs(
          chunkQXUST7PYInput14.y - chunkQXUST7PYInput15.y,
        ),
        chunkQXUST7PYBinding44 = Math.abs(
          chunkQXUST7PYInput14.x - chunkQXUST7PYInput15.x,
        );
      if (
        Math.abs(chunkQXUST7PYBinding38 - chunkQXUST7PYInput14.y) *
          chunkQXUST7PYBinding40 >
        Math.abs(chunkQXUST7PYBinding37 - chunkQXUST7PYInput14.x) *
          chunkQXUST7PYBinding42
      ) {
        let chunkQXUST7PYBinding126 =
          chunkQXUST7PYInput15.y < chunkQXUST7PYInput14.y
            ? chunkQXUST7PYInput14.y -
              chunkQXUST7PYBinding42 -
              chunkQXUST7PYBinding38
            : chunkQXUST7PYBinding38 -
              chunkQXUST7PYBinding42 -
              chunkQXUST7PYInput14.y;
        chunkQXUST7PYBinding41 =
          (chunkQXUST7PYBinding44 * chunkQXUST7PYBinding126) /
          chunkQXUST7PYBinding43;
        let chunkQXUST7PYBinding127 = {
          x:
            chunkQXUST7PYInput15.x < chunkQXUST7PYInput14.x
              ? chunkQXUST7PYInput15.x + chunkQXUST7PYBinding41
              : chunkQXUST7PYInput15.x -
                chunkQXUST7PYBinding44 +
                chunkQXUST7PYBinding41,
          y:
            chunkQXUST7PYInput15.y < chunkQXUST7PYInput14.y
              ? chunkQXUST7PYInput15.y +
                chunkQXUST7PYBinding43 -
                chunkQXUST7PYBinding126
              : chunkQXUST7PYInput15.y -
                chunkQXUST7PYBinding43 +
                chunkQXUST7PYBinding126,
        };
        return (
          chunkQXUST7PYBinding41 === 0 &&
            ((chunkQXUST7PYBinding127.x = chunkQXUST7PYInput14.x),
            (chunkQXUST7PYBinding127.y = chunkQXUST7PYInput14.y)),
          chunkQXUST7PYBinding44 === 0 &&
            (chunkQXUST7PYBinding127.x = chunkQXUST7PYInput14.x),
          chunkQXUST7PYBinding43 === 0 &&
            (chunkQXUST7PYBinding127.y = chunkQXUST7PYInput14.y),
          logger.debug(
            `abc89 top/bottom calc, Q ${chunkQXUST7PYBinding43}, q ${chunkQXUST7PYBinding126}, R ${chunkQXUST7PYBinding44}, r ${chunkQXUST7PYBinding41}`,
            chunkQXUST7PYBinding127,
          ),
          chunkQXUST7PYBinding127
        );
      } else {
        chunkQXUST7PYBinding41 =
          chunkQXUST7PYInput15.x < chunkQXUST7PYInput14.x
            ? chunkQXUST7PYInput14.x -
              chunkQXUST7PYBinding40 -
              chunkQXUST7PYBinding37
            : chunkQXUST7PYBinding37 -
              chunkQXUST7PYBinding40 -
              chunkQXUST7PYInput14.x;
        let chunkQXUST7PYBinding120 =
            (chunkQXUST7PYBinding43 * chunkQXUST7PYBinding41) /
            chunkQXUST7PYBinding44,
          chunkQXUST7PYBinding121 =
            chunkQXUST7PYInput15.x < chunkQXUST7PYInput14.x
              ? chunkQXUST7PYInput15.x +
                chunkQXUST7PYBinding44 -
                chunkQXUST7PYBinding41
              : chunkQXUST7PYInput15.x -
                chunkQXUST7PYBinding44 +
                chunkQXUST7PYBinding41,
          chunkQXUST7PYBinding122 =
            chunkQXUST7PYInput15.y < chunkQXUST7PYInput14.y
              ? chunkQXUST7PYInput15.y + chunkQXUST7PYBinding120
              : chunkQXUST7PYInput15.y - chunkQXUST7PYBinding120;
        return (
          logger.debug(
            `sides calc abc89, Q ${chunkQXUST7PYBinding43}, q ${chunkQXUST7PYBinding120}, R ${chunkQXUST7PYBinding44}, r ${chunkQXUST7PYBinding41}`,
            {
              _x: chunkQXUST7PYBinding121,
              _y: chunkQXUST7PYBinding122,
            },
          ),
          chunkQXUST7PYBinding41 === 0 &&
            ((chunkQXUST7PYBinding121 = chunkQXUST7PYInput14.x),
            (chunkQXUST7PYBinding122 = chunkQXUST7PYInput14.y)),
          chunkQXUST7PYBinding44 === 0 &&
            (chunkQXUST7PYBinding121 = chunkQXUST7PYInput14.x),
          chunkQXUST7PYBinding43 === 0 &&
            (chunkQXUST7PYBinding122 = chunkQXUST7PYInput14.y),
          {
            x: chunkQXUST7PYBinding121,
            y: chunkQXUST7PYBinding122,
          }
        );
      }
    },
    "intersection",
  );
  chunkQXUST7PYBinding9 = defineFunctionName(
    (chunkQXUST7PYInput65, chunkQXUST7PYInput66) => {
      logger.warn(
        "abc88 cutPathAtIntersect",
        chunkQXUST7PYInput65,
        chunkQXUST7PYInput66,
      );
      let chunkQXUST7PYBinding78 = [],
        chunkQXUST7PYBinding79 = chunkQXUST7PYInput65[0],
        chunkQXUST7PYBinding80 = false;
      return (
        chunkQXUST7PYInput65.forEach((item) => {
          if (
            (logger.info("abc88 checking point", item, chunkQXUST7PYInput66),
            !chunkQXUST7PYBinding7(chunkQXUST7PYInput66, item) &&
              !chunkQXUST7PYBinding80)
          ) {
            let chunkQXUST7PYBinding130 = chunkQXUST7PYBinding8(
              chunkQXUST7PYInput66,
              chunkQXUST7PYBinding79,
              item,
            );
            logger.debug(
              "abc88 inside",
              item,
              chunkQXUST7PYBinding79,
              chunkQXUST7PYBinding130,
            );
            logger.debug(
              "abc88 intersection",
              chunkQXUST7PYBinding130,
              chunkQXUST7PYInput66,
            );
            let chunkQXUST7PYBinding131 = false;
            chunkQXUST7PYBinding78.forEach((_item) => {
              chunkQXUST7PYBinding131 ||=
                _item.x === chunkQXUST7PYBinding130.x &&
                _item.y === chunkQXUST7PYBinding130.y;
            });
            chunkQXUST7PYBinding78.some(
              (_item) =>
                _item.x === chunkQXUST7PYBinding130.x &&
                _item.y === chunkQXUST7PYBinding130.y,
            )
              ? logger.warn(
                  "abc88 no intersect",
                  chunkQXUST7PYBinding130,
                  chunkQXUST7PYBinding78,
                )
              : chunkQXUST7PYBinding78.push(chunkQXUST7PYBinding130);
            chunkQXUST7PYBinding80 = true;
          } else {
            logger.warn("abc88 outside", item, chunkQXUST7PYBinding79);
            chunkQXUST7PYBinding79 = item;
            chunkQXUST7PYBinding80 || chunkQXUST7PYBinding78.push(item);
          }
        }),
        logger.debug("returning points", chunkQXUST7PYBinding78),
        chunkQXUST7PYBinding78
      );
    },
    "cutPathAtIntersect",
  );
  defineFunctionName(chunkQXUST7PYHelper2, "extractCornerPoints");
  $ = defineFunctionName(function (
    chunkQXUST7PYInput86,
    chunkQXUST7PYInput87,
    chunkQXUST7PYInput88,
  ) {
    let chunkQXUST7PYBinding176 =
        chunkQXUST7PYInput87.x - chunkQXUST7PYInput86.x,
      chunkQXUST7PYBinding177 = chunkQXUST7PYInput87.y - chunkQXUST7PYInput86.y,
      chunkQXUST7PYBinding178 =
        chunkQXUST7PYInput88 /
        Math.sqrt(
          chunkQXUST7PYBinding176 * chunkQXUST7PYBinding176 +
            chunkQXUST7PYBinding177 * chunkQXUST7PYBinding177,
        );
    return {
      x:
        chunkQXUST7PYInput87.x -
        chunkQXUST7PYBinding178 * chunkQXUST7PYBinding176,
      y:
        chunkQXUST7PYInput87.y -
        chunkQXUST7PYBinding178 * chunkQXUST7PYBinding177,
    };
  }, "findAdjacentPoint");
  chunkQXUST7PYBinding10 = defineFunctionName(function (chunkQXUST7PYInput19) {
    let { cornerPointPositions } = chunkQXUST7PYHelper2(chunkQXUST7PYInput19),
      chunkQXUST7PYBinding45 = [];
    for (
      let chunkQXUST7PYBinding56 = 0;
      chunkQXUST7PYBinding56 < chunkQXUST7PYInput19.length;
      chunkQXUST7PYBinding56++
    )
      if (cornerPointPositions.includes(chunkQXUST7PYBinding56)) {
        let chunkQXUST7PYBinding59 =
            chunkQXUST7PYInput19[chunkQXUST7PYBinding56 - 1],
          chunkQXUST7PYBinding60 =
            chunkQXUST7PYInput19[chunkQXUST7PYBinding56 + 1],
          chunkQXUST7PYBinding61 = chunkQXUST7PYInput19[chunkQXUST7PYBinding56],
          chunkQXUST7PYBinding62 = $(
            chunkQXUST7PYBinding59,
            chunkQXUST7PYBinding61,
            5,
          ),
          chunkQXUST7PYBinding63 = $(
            chunkQXUST7PYBinding60,
            chunkQXUST7PYBinding61,
            5,
          ),
          chunkQXUST7PYBinding64 =
            chunkQXUST7PYBinding63.x - chunkQXUST7PYBinding62.x,
          chunkQXUST7PYBinding65 =
            chunkQXUST7PYBinding63.y - chunkQXUST7PYBinding62.y;
        chunkQXUST7PYBinding45.push(chunkQXUST7PYBinding62);
        let chunkQXUST7PYBinding66 = Math.sqrt(2) * 2,
          chunkQXUST7PYBinding67 = {
            x: chunkQXUST7PYBinding61.x,
            y: chunkQXUST7PYBinding61.y,
          };
        Math.abs(chunkQXUST7PYBinding60.x - chunkQXUST7PYBinding59.x) > 10 &&
        Math.abs(chunkQXUST7PYBinding60.y - chunkQXUST7PYBinding59.y) >= 10
          ? (logger.debug(
              "Corner point fixing",
              Math.abs(chunkQXUST7PYBinding60.x - chunkQXUST7PYBinding59.x),
              Math.abs(chunkQXUST7PYBinding60.y - chunkQXUST7PYBinding59.y),
            ),
            (chunkQXUST7PYBinding67 =
              chunkQXUST7PYBinding61.x === chunkQXUST7PYBinding62.x
                ? {
                    x:
                      chunkQXUST7PYBinding64 < 0
                        ? chunkQXUST7PYBinding62.x - 5 + chunkQXUST7PYBinding66
                        : chunkQXUST7PYBinding62.x + 5 - chunkQXUST7PYBinding66,
                    y:
                      chunkQXUST7PYBinding65 < 0
                        ? chunkQXUST7PYBinding62.y - chunkQXUST7PYBinding66
                        : chunkQXUST7PYBinding62.y + chunkQXUST7PYBinding66,
                  }
                : {
                    x:
                      chunkQXUST7PYBinding64 < 0
                        ? chunkQXUST7PYBinding62.x - chunkQXUST7PYBinding66
                        : chunkQXUST7PYBinding62.x + chunkQXUST7PYBinding66,
                    y:
                      chunkQXUST7PYBinding65 < 0
                        ? chunkQXUST7PYBinding62.y - 5 + chunkQXUST7PYBinding66
                        : chunkQXUST7PYBinding62.y + 5 - chunkQXUST7PYBinding66,
                  }))
          : logger.debug(
              "Corner point skipping fixing",
              Math.abs(chunkQXUST7PYBinding60.x - chunkQXUST7PYBinding59.x),
              Math.abs(chunkQXUST7PYBinding60.y - chunkQXUST7PYBinding59.y),
            );
        chunkQXUST7PYBinding45.push(
          chunkQXUST7PYBinding67,
          chunkQXUST7PYBinding63,
        );
      } else
        chunkQXUST7PYBinding45.push(
          chunkQXUST7PYInput19[chunkQXUST7PYBinding56],
        );
    return chunkQXUST7PYBinding45;
  }, "fixCorners");
  chunkQXUST7PYBinding11 = defineFunctionName(
    (chunkQXUST7PYInput89, chunkQXUST7PYInput90, chunkQXUST7PYInput91) => {
      let chunkQXUST7PYBinding179 =
          chunkQXUST7PYInput89 - chunkQXUST7PYInput90 - chunkQXUST7PYInput91,
        chunkQXUST7PYBinding180 = Math.floor(chunkQXUST7PYBinding179 / 4);
      return `0 ${chunkQXUST7PYInput90} ${Array(chunkQXUST7PYBinding180).fill("2 2").join(" ")} ${chunkQXUST7PYInput91}`;
    },
    "generateDashArray",
  );
  chunkQXUST7PYR = defineFunctionName(function (
    chunkQXUST7PYInput1,
    chunkQXUST7PYInput2,
    chunkQXUST7PYInput3,
    chunkQXUST7PYInput4,
    chunkQXUST7PYInput5,
    chunkQXUST7PYInput6,
    chunkQXUST7PYInput7,
    chunkQXUST7PYInput8 = false,
  ) {
    let { handDrawnSeed } = b(),
      chunkQXUST7PYBinding14 = chunkQXUST7PYInput2.points,
      chunkQXUST7PYBinding15 = false,
      chunkQXUST7PYBinding16 = chunkQXUST7PYInput5;
    var chunkQXUST7PYBinding17 = chunkQXUST7PYInput6;
    let chunkQXUST7PYBinding18 = [];
    for (let chunkQXUST7PYBinding181 in chunkQXUST7PYInput2.cssCompiledStyles)
      chunkATLVNIR6R(chunkQXUST7PYBinding181) ||
        chunkQXUST7PYBinding18.push(
          chunkQXUST7PYInput2.cssCompiledStyles[chunkQXUST7PYBinding181],
        );
    logger.debug(
      "UIO intersect check",
      chunkQXUST7PYInput2.points,
      chunkQXUST7PYBinding17.x,
      chunkQXUST7PYBinding16.x,
    );
    chunkQXUST7PYBinding17.intersect &&
      chunkQXUST7PYBinding16.intersect &&
      !chunkQXUST7PYInput8 &&
      ((chunkQXUST7PYBinding14 = chunkQXUST7PYBinding14.slice(
        1,
        chunkQXUST7PYInput2.points.length - 1,
      )),
      chunkQXUST7PYBinding14.unshift(
        chunkQXUST7PYBinding16.intersect(chunkQXUST7PYBinding14[0]),
      ),
      logger.debug(
        "Last point UIO",
        chunkQXUST7PYInput2.start,
        "-->",
        chunkQXUST7PYInput2.end,
        chunkQXUST7PYBinding14[chunkQXUST7PYBinding14.length - 1],
        chunkQXUST7PYBinding17,
        chunkQXUST7PYBinding17.intersect(
          chunkQXUST7PYBinding14[chunkQXUST7PYBinding14.length - 1],
        ),
      ),
      chunkQXUST7PYBinding14.push(
        chunkQXUST7PYBinding17.intersect(
          chunkQXUST7PYBinding14[chunkQXUST7PYBinding14.length - 1],
        ),
      ));
    let chunkQXUST7PYBinding19 = btoa(JSON.stringify(chunkQXUST7PYBinding14));
    chunkQXUST7PYInput2.toCluster &&
      (logger.info(
        "to cluster abc88",
        chunkQXUST7PYInput3.get(chunkQXUST7PYInput2.toCluster),
      ),
      (chunkQXUST7PYBinding14 = chunkQXUST7PYBinding9(
        chunkQXUST7PYInput2.points,
        chunkQXUST7PYInput3.get(chunkQXUST7PYInput2.toCluster).node,
      )),
      (chunkQXUST7PYBinding15 = true));
    chunkQXUST7PYInput2.fromCluster &&
      (logger.debug(
        "from cluster abc88",
        chunkQXUST7PYInput3.get(chunkQXUST7PYInput2.fromCluster),
        JSON.stringify(chunkQXUST7PYBinding14, null, 2),
      ),
      (chunkQXUST7PYBinding14 = chunkQXUST7PYBinding9(
        chunkQXUST7PYBinding14.reverse(),
        chunkQXUST7PYInput3.get(chunkQXUST7PYInput2.fromCluster).node,
      ).reverse()),
      (chunkQXUST7PYBinding15 = true));
    let chunkQXUST7PYBinding20 = chunkQXUST7PYBinding14.filter(
      (item) => !Number.isNaN(item.y),
    );
    chunkQXUST7PYBinding20 = chunkQXUST7PYBinding10(chunkQXUST7PYBinding20);
    let chunkQXUST7PYBinding21 = curveBasis;
    switch (
      ((chunkQXUST7PYBinding21 = curveLinear), chunkQXUST7PYInput2.curve)
    ) {
      case "linear":
        chunkQXUST7PYBinding21 = curveLinear;
        break;
      case "basis":
        chunkQXUST7PYBinding21 = curveBasis;
        break;
      case "cardinal":
        chunkQXUST7PYBinding21 = curveCardinal;
        break;
      case "bumpX":
        chunkQXUST7PYBinding21 = curveBumpX;
        break;
      case "bumpY":
        chunkQXUST7PYBinding21 = curveBumpY;
        break;
      case "catmullRom":
        chunkQXUST7PYBinding21 = curveCatmullRom;
        break;
      case "monotoneX":
        chunkQXUST7PYBinding21 = curveMonotoneX;
        break;
      case "monotoneY":
        chunkQXUST7PYBinding21 = curveMonotoneY;
        break;
      case "natural":
        chunkQXUST7PYBinding21 = curveNatural;
        break;
      case "step":
        chunkQXUST7PYBinding21 = curveStep;
        break;
      case "stepAfter":
        chunkQXUST7PYBinding21 = curveStepAfter;
        break;
      case "stepBefore":
        chunkQXUST7PYBinding21 = curveStepBefore;
        break;
      default:
        chunkQXUST7PYBinding21 = curveBasis;
    }
    let { x, y } = getLineFunctionsWithOffset(chunkQXUST7PYInput2),
      chunkQXUST7PYBinding22 = line().x(x).y(y).curve(chunkQXUST7PYBinding21),
      chunkQXUST7PYBinding23;
    switch (chunkQXUST7PYInput2.thickness) {
      case "normal":
        chunkQXUST7PYBinding23 = "edge-thickness-normal";
        break;
      case "thick":
        chunkQXUST7PYBinding23 = "edge-thickness-thick";
        break;
      case "invisible":
        chunkQXUST7PYBinding23 = "edge-thickness-invisible";
        break;
      default:
        chunkQXUST7PYBinding23 = "edge-thickness-normal";
    }
    switch (chunkQXUST7PYInput2.pattern) {
      case "solid":
        chunkQXUST7PYBinding23 += " edge-pattern-solid";
        break;
      case "dotted":
        chunkQXUST7PYBinding23 += " edge-pattern-dotted";
        break;
      case "dashed":
        chunkQXUST7PYBinding23 += " edge-pattern-dashed";
        break;
      default:
        chunkQXUST7PYBinding23 += " edge-pattern-solid";
    }
    let chunkQXUST7PYBinding24,
      chunkQXUST7PYBinding25 =
        chunkQXUST7PYInput2.curve === "rounded"
          ? chunkQXUST7PYHelper3(
              chunkQXUST7PYHelper5(chunkQXUST7PYBinding20, chunkQXUST7PYInput2),
              5,
            )
          : chunkQXUST7PYBinding22(chunkQXUST7PYBinding20),
      chunkQXUST7PYBinding26 = Array.isArray(chunkQXUST7PYInput2.style)
        ? chunkQXUST7PYInput2.style
        : [chunkQXUST7PYInput2.style],
      chunkQXUST7PYBinding27 = chunkQXUST7PYBinding26.find((item) =>
        item?.startsWith("stroke:"),
      ),
      _chunkQXUST7PYT = false;
    if (chunkQXUST7PYInput2.look === "handDrawn") {
      let chunkQXUST7PYBinding123 = rough.svg(chunkQXUST7PYInput1);
      Object.assign([], chunkQXUST7PYBinding20);
      let chunkQXUST7PYBinding124 = chunkQXUST7PYBinding123.path(
        chunkQXUST7PYBinding25,
        {
          roughness: 0.3,
          seed: handDrawnSeed,
        },
      );
      chunkQXUST7PYBinding23 += " transition";
      chunkQXUST7PYBinding24 = select(chunkQXUST7PYBinding124)
        .select("path")
        .attr("id", chunkQXUST7PYInput2.id)
        .attr(
          "class",
          " " +
            chunkQXUST7PYBinding23 +
            (chunkQXUST7PYInput2.classes
              ? " " + chunkQXUST7PYInput2.classes
              : ""),
        )
        .attr(
          "style",
          chunkQXUST7PYBinding26
            ? chunkQXUST7PYBinding26.reduce(
                (accumulator, current) => accumulator + ";" + current,
                "",
              )
            : "",
        );
      let chunkQXUST7PYBinding125 = chunkQXUST7PYBinding24.attr("d");
      chunkQXUST7PYBinding24.attr("d", chunkQXUST7PYBinding125);
      chunkQXUST7PYInput1.node().appendChild(chunkQXUST7PYBinding24.node());
    } else {
      let chunkQXUST7PYBinding46 = chunkQXUST7PYBinding18.join(";"),
        chunkQXUST7PYBinding47 = chunkQXUST7PYBinding26
          ? chunkQXUST7PYBinding26.reduce(
              (accumulator, current) => accumulator + current + ";",
              "",
            )
          : "",
        chunkQXUST7PYBinding48 = "";
      chunkQXUST7PYInput2.animate &&
        (chunkQXUST7PYBinding48 = " edge-animation-fast");
      chunkQXUST7PYInput2.animation &&
        (chunkQXUST7PYBinding48 =
          " edge-animation-" + chunkQXUST7PYInput2.animation);
      let chunkQXUST7PYBinding49 =
        (chunkQXUST7PYBinding46
          ? chunkQXUST7PYBinding46 + ";" + chunkQXUST7PYBinding47 + ";"
          : chunkQXUST7PYBinding47) +
        ";" +
        (chunkQXUST7PYBinding26
          ? chunkQXUST7PYBinding26.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
          : "");
      chunkQXUST7PYBinding24 = chunkQXUST7PYInput1
        .append("path")
        .attr("d", chunkQXUST7PYBinding25)
        .attr("id", chunkQXUST7PYInput2.id)
        .attr(
          "class",
          " " +
            chunkQXUST7PYBinding23 +
            (chunkQXUST7PYInput2.classes
              ? " " + chunkQXUST7PYInput2.classes
              : "") +
            (chunkQXUST7PYBinding48 ?? ""),
        )
        .attr("style", chunkQXUST7PYBinding49);
      chunkQXUST7PYBinding27 =
        chunkQXUST7PYBinding49.match(/stroke:([^;]+)/)?.[1];
      _chunkQXUST7PYT =
        chunkQXUST7PYInput2.animate === true ||
        !!chunkQXUST7PYInput2.animation ||
        chunkQXUST7PYBinding46.includes("animation");
      let chunkQXUST7PYBinding50 = chunkQXUST7PYBinding24.node(),
        chunkQXUST7PYBinding51 =
          typeof chunkQXUST7PYBinding50.getTotalLength == "function"
            ? chunkQXUST7PYBinding50.getTotalLength()
            : 0,
        chunkQXUST7PYBinding52 =
          arrowTipOffsets[chunkQXUST7PYInput2.arrowTypeStart] || 0,
        chunkQXUST7PYBinding53 =
          arrowTipOffsets[chunkQXUST7PYInput2.arrowTypeEnd] || 0;
      if (chunkQXUST7PYInput2.look === "neo" && !_chunkQXUST7PYT) {
        let chunkQXUST7PYBinding151 = `stroke-dasharray: ${chunkQXUST7PYInput2.pattern === "dotted" || chunkQXUST7PYInput2.pattern === "dashed" ? chunkQXUST7PYBinding11(chunkQXUST7PYBinding51, chunkQXUST7PYBinding52, chunkQXUST7PYBinding53) : `0 ${chunkQXUST7PYBinding52} ${chunkQXUST7PYBinding51 - chunkQXUST7PYBinding52 - chunkQXUST7PYBinding53} ${chunkQXUST7PYBinding53}`}; stroke-dashoffset: 0;`;
        chunkQXUST7PYBinding24.attr(
          "style",
          chunkQXUST7PYBinding151 + chunkQXUST7PYBinding24.attr("style"),
        );
      }
    }
    chunkQXUST7PYBinding24.attr("data-edge", true);
    chunkQXUST7PYBinding24.attr("data-et", "edge");
    chunkQXUST7PYBinding24.attr("data-id", chunkQXUST7PYInput2.id);
    chunkQXUST7PYBinding24.attr("data-points", chunkQXUST7PYBinding19);
    chunkQXUST7PYInput2.showPoints &&
      chunkQXUST7PYBinding20.forEach((item) => {
        chunkQXUST7PYInput1
          .append("circle")
          .style("stroke", "red")
          .style("fill", "red")
          .attr("r", 1)
          .attr("cx", item.x)
          .attr("cy", item.y);
      });
    let chunkQXUST7PYBinding28 = "";
    (b().flowchart.arrowMarkerAbsolute || b().state.arrowMarkerAbsolute) &&
      ((chunkQXUST7PYBinding28 =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.search),
      (chunkQXUST7PYBinding28 = chunkQXUST7PYBinding28
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")));
    logger.info("arrowTypeStart", chunkQXUST7PYInput2.arrowTypeStart);
    logger.info("arrowTypeEnd", chunkQXUST7PYInput2.arrowTypeEnd);
    chunkQXUST7PYBinding1(
      chunkQXUST7PYBinding24,
      chunkQXUST7PYInput2,
      chunkQXUST7PYBinding28,
      chunkQXUST7PYInput7,
      chunkQXUST7PYInput4,
      chunkQXUST7PYBinding27,
    );
    let _chunkQXUST7PYI = Math.floor(chunkQXUST7PYBinding14.length / 2),
      _chunkQXUST7PYO = chunkQXUST7PYBinding14[_chunkQXUST7PYI];
    chunkS3R3BYOJG.isLabelCoordinateInPath(
      _chunkQXUST7PYO,
      chunkQXUST7PYBinding24.attr("d"),
    ) || (chunkQXUST7PYBinding15 = true);
    let chunkQXUST7PYBinding29 = {};
    return (
      chunkQXUST7PYBinding15 &&
        (chunkQXUST7PYBinding29.updatedPath = chunkQXUST7PYBinding14),
      (chunkQXUST7PYBinding29.originalPath = chunkQXUST7PYInput2.points),
      chunkQXUST7PYBinding29
    );
  }, "insertEdge");
  defineFunctionName(chunkQXUST7PYHelper3, "generateRoundedPath");
  defineFunctionName(chunkQXUST7PYHelper4, "calculateDeltaAndAngle");
  defineFunctionName(chunkQXUST7PYHelper5, "applyMarkerOffsetsToPoints");
  chunkQXUST7PYBinding12 = defineFunctionName(
    (
      chunkQXUST7PYInput94,
      chunkQXUST7PYInput95,
      chunkQXUST7PYInput96,
      chunkQXUST7PYInput97,
    ) => {
      chunkQXUST7PYInput95.forEach((item) => {
        chunkQXUST7PYBinding13[item](
          chunkQXUST7PYInput94,
          chunkQXUST7PYInput96,
          chunkQXUST7PYInput97,
        );
      });
    },
    "insertMarkers",
  );
  chunkQXUST7PYBinding13 = {
    extension: defineFunctionName(
      (chunkQXUST7PYInput37, chunkQXUST7PYInput38, chunkQXUST7PYInput39) => {
        logger.trace("Making markers for ", chunkQXUST7PYInput39);
        chunkQXUST7PYInput37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput39 +
              "_" +
              chunkQXUST7PYInput38 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + chunkQXUST7PYInput38)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        chunkQXUST7PYInput37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput39 + "_" + chunkQXUST7PYInput38 + "-extensionEnd",
          )
          .attr("class", "marker extension " + chunkQXUST7PYInput38)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
      },
      "extension",
    ),
    composition: defineFunctionName(
      (chunkQXUST7PYInput43, chunkQXUST7PYInput44, chunkQXUST7PYInput45) => {
        chunkQXUST7PYInput43
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput45 +
              "_" +
              chunkQXUST7PYInput44 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + chunkQXUST7PYInput44)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYInput43
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput45 +
              "_" +
              chunkQXUST7PYInput44 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + chunkQXUST7PYInput44)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "composition",
    ),
    aggregation: defineFunctionName(
      (chunkQXUST7PYInput46, chunkQXUST7PYInput47, chunkQXUST7PYInput48) => {
        chunkQXUST7PYInput46
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput48 +
              "_" +
              chunkQXUST7PYInput47 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + chunkQXUST7PYInput47)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYInput46
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput48 +
              "_" +
              chunkQXUST7PYInput47 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + chunkQXUST7PYInput47)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "aggregation",
    ),
    dependency: defineFunctionName(
      (chunkQXUST7PYInput49, chunkQXUST7PYInput50, chunkQXUST7PYInput51) => {
        chunkQXUST7PYInput49
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput51 +
              "_" +
              chunkQXUST7PYInput50 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + chunkQXUST7PYInput50)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYInput49
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput51 +
              "_" +
              chunkQXUST7PYInput50 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + chunkQXUST7PYInput50)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      },
      "dependency",
    ),
    lollipop: defineFunctionName(
      (chunkQXUST7PYInput32, chunkQXUST7PYInput33, chunkQXUST7PYInput34) => {
        chunkQXUST7PYInput32
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput34 +
              "_" +
              chunkQXUST7PYInput33 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + chunkQXUST7PYInput33)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        chunkQXUST7PYInput32
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput34 + "_" + chunkQXUST7PYInput33 + "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + chunkQXUST7PYInput33)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
      },
      "lollipop",
    ),
    point: defineFunctionName(
      (chunkQXUST7PYInput23, chunkQXUST7PYInput24, chunkQXUST7PYInput25) => {
        chunkQXUST7PYInput23
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput25 + "_" + chunkQXUST7PYInput24 + "-pointEnd",
          )
          .attr("class", "marker " + chunkQXUST7PYInput24)
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
        chunkQXUST7PYInput23
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput25 + "_" + chunkQXUST7PYInput24 + "-pointStart",
          )
          .attr("class", "marker " + chunkQXUST7PYInput24)
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
      },
      "point",
    ),
    circle: defineFunctionName(
      (chunkQXUST7PYInput16, chunkQXUST7PYInput17, chunkQXUST7PYInput18) => {
        chunkQXUST7PYInput16
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput18 + "_" + chunkQXUST7PYInput17 + "-circleEnd",
          )
          .attr("class", "marker " + chunkQXUST7PYInput17)
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
        chunkQXUST7PYInput16
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput18 + "_" + chunkQXUST7PYInput17 + "-circleStart",
          )
          .attr("class", "marker " + chunkQXUST7PYInput17)
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
      },
      "circle",
    ),
    cross: defineFunctionName(
      (chunkQXUST7PYInput20, chunkQXUST7PYInput21, chunkQXUST7PYInput22) => {
        chunkQXUST7PYInput20
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput22 + "_" + chunkQXUST7PYInput21 + "-crossEnd",
          )
          .attr("class", "marker cross " + chunkQXUST7PYInput21)
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
        chunkQXUST7PYInput20
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput22 + "_" + chunkQXUST7PYInput21 + "-crossStart",
          )
          .attr("class", "marker cross " + chunkQXUST7PYInput21)
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
      },
      "cross",
    ),
    barb: defineFunctionName(
      (chunkQXUST7PYInput73, chunkQXUST7PYInput74, chunkQXUST7PYInput75) => {
        chunkQXUST7PYInput73
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput75 + "_" + chunkQXUST7PYInput74 + "-barbEnd",
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
    only_one: defineFunctionName(
      (chunkQXUST7PYInput52, chunkQXUST7PYInput53, chunkQXUST7PYInput54) => {
        chunkQXUST7PYInput52
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput54 + "_" + chunkQXUST7PYInput53 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkQXUST7PYInput53)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18");
        chunkQXUST7PYInput52
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput54 + "_" + chunkQXUST7PYInput53 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkQXUST7PYInput53)
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
      (chunkQXUST7PYInput29, chunkQXUST7PYInput30, chunkQXUST7PYInput31) => {
        let chunkQXUST7PYBinding57 = chunkQXUST7PYInput29
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput31 +
              "_" +
              chunkQXUST7PYInput30 +
              "-zeroOrOneStart",
          )
          .attr("class", "marker zeroOrOne " + chunkQXUST7PYInput30)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkQXUST7PYBinding57
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("r", 6);
        chunkQXUST7PYBinding57.append("path").attr("d", "M9,0 L9,18");
        let chunkQXUST7PYBinding58 = chunkQXUST7PYInput29
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput31 + "_" + chunkQXUST7PYInput30 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkQXUST7PYInput30)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkQXUST7PYBinding58
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("r", 6);
        chunkQXUST7PYBinding58.append("path").attr("d", "M21,0 L21,18");
      },
      "zero_or_one",
    ),
    one_or_more: defineFunctionName(
      (chunkQXUST7PYInput40, chunkQXUST7PYInput41, chunkQXUST7PYInput42) => {
        chunkQXUST7PYInput40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput42 +
              "_" +
              chunkQXUST7PYInput41 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkQXUST7PYInput41)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
        chunkQXUST7PYInput40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput42 + "_" + chunkQXUST7PYInput41 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkQXUST7PYInput41)
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
      (chunkQXUST7PYInput26, chunkQXUST7PYInput27, chunkQXUST7PYInput28) => {
        let chunkQXUST7PYBinding54 = chunkQXUST7PYInput26
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput28 +
              "_" +
              chunkQXUST7PYInput27 +
              "-zeroOrMoreStart",
          )
          .attr("class", "marker zeroOrMore " + chunkQXUST7PYInput27)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkQXUST7PYBinding54
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 48)
          .attr("cy", 18)
          .attr("r", 6);
        chunkQXUST7PYBinding54
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
        let chunkQXUST7PYBinding55 = chunkQXUST7PYInput26
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput28 +
              "_" +
              chunkQXUST7PYInput27 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkQXUST7PYInput27)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkQXUST7PYBinding55
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 18)
          .attr("r", 6);
        chunkQXUST7PYBinding55
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
      },
      "zero_or_more",
    ),
    requirement_arrow: defineFunctionName(
      (chunkQXUST7PYInput70, chunkQXUST7PYInput71, chunkQXUST7PYInput72) => {
        chunkQXUST7PYInput70
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput72 +
              "_" +
              chunkQXUST7PYInput71 +
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
      (chunkQXUST7PYInput62, chunkQXUST7PYInput63, chunkQXUST7PYInput64) => {
        let chunkQXUST7PYBinding77 = chunkQXUST7PYInput62
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYInput64 +
              "_" +
              chunkQXUST7PYInput63 +
              "-requirement_containsStart",
          )
          .attr("refX", 0)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("g");
        chunkQXUST7PYBinding77
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkQXUST7PYBinding77
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkQXUST7PYBinding77
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
      },
      "requirement_contains",
    ),
  };
  chunkQXUST7PYA = chunkQXUST7PYBinding12;
});
export {
  chunkQXUST7PYA,
  chunkQXUST7PYI,
  chunkQXUST7PYO,
  chunkQXUST7PYR,
  chunkQXUST7PYT,
};
