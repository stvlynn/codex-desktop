// Restored from ref/webview/assets/xychartDiagram-5P7HB3ND-BEXNuti1.js
// Mermaid xychart diagram definition (alt). app-initial Ait/hat/mat → line + scaleBand + scaleLinear.
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
import { scaleBand as AppInitialHat } from "../../vendor/d3-scale-band";
import { scaleLinear as AppInitialMat } from "../../vendor/d3-scale-linear";
import { ensureD3SelectionRuntimeT as srcT } from "../../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  E as chunkICPOFSXXE,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  R as chunkICPOFSXXR,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  c as _chunkICPOFSXXC,
  d as chunkICPOFSXXD,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import { selectSvgElement as chunk426QAEUCN, initSelectSvgElementChunk as chunk426QAEUCT } from "../../diagrams/select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import {
  chunkU2HBQHQKA as chunkU2HBQHQKI,
  chunkU2HBQHQKT,
} from "./mermaid-create-text-alt";
function xychartDiagram5P7HB3NDHelper1(xychartDiagram5P7HB3NDInput132) {
  return xychartDiagram5P7HB3NDInput132.type === "bar";
}
function xychartDiagram5P7HB3NDHelper2(xychartDiagram5P7HB3NDInput131) {
  return xychartDiagram5P7HB3NDInput131.type === "band";
}
function xychartDiagram5P7HB3NDHelper3(xychartDiagram5P7HB3NDInput128) {
  return xychartDiagram5P7HB3NDInput128.type === "linear";
}
function xychartDiagram5P7HB3NDHelper4(
  xychartDiagram5P7HB3NDInput77,
  xychartDiagram5P7HB3NDInput78,
  xychartDiagram5P7HB3NDInput79,
  xychartDiagram5P7HB3NDInput80,
) {
  let xychartDiagram5P7HB3NDBinding203 = new xychartDiagram5P7HB3NDBinding3(
    xychartDiagram5P7HB3NDInput80,
  );
  return xychartDiagram5P7HB3NDHelper2(xychartDiagram5P7HB3NDInput77)
    ? new xychartDiagram5P7HB3NDBinding7(
        xychartDiagram5P7HB3NDInput78,
        xychartDiagram5P7HB3NDInput79,
        xychartDiagram5P7HB3NDInput77.categories,
        xychartDiagram5P7HB3NDInput77.title,
        xychartDiagram5P7HB3NDBinding203,
      )
    : new xychartDiagram5P7HB3NDBinding8(
        xychartDiagram5P7HB3NDInput78,
        xychartDiagram5P7HB3NDInput79,
        [xychartDiagram5P7HB3NDInput77.min, xychartDiagram5P7HB3NDInput77.max],
        xychartDiagram5P7HB3NDInput77.title,
        xychartDiagram5P7HB3NDBinding203,
      );
}
function xychartDiagram5P7HB3NDHelper5(
  xychartDiagram5P7HB3NDInput115,
  xychartDiagram5P7HB3NDInput116,
  xychartDiagram5P7HB3NDInput117,
  xychartDiagram5P7HB3NDInput118,
) {
  return new xychartDiagram5P7HB3NDBinding9(
    new xychartDiagram5P7HB3NDBinding3(xychartDiagram5P7HB3NDInput118),
    xychartDiagram5P7HB3NDInput115,
    xychartDiagram5P7HB3NDInput116,
    xychartDiagram5P7HB3NDInput117,
  );
}
function xychartDiagram5P7HB3NDHelper6(
  xychartDiagram5P7HB3NDInput124,
  xychartDiagram5P7HB3NDInput125,
  xychartDiagram5P7HB3NDInput126,
) {
  return new xychartDiagram5P7HB3NDBinding11(
    xychartDiagram5P7HB3NDInput124,
    xychartDiagram5P7HB3NDInput125,
    xychartDiagram5P7HB3NDInput126,
  );
}
function xychartDiagram5P7HB3NDHelper7() {
  let xychartDiagram5P7HB3NDBinding210 = chunkICPOFSXXE(),
    xychartDiagram5P7HB3NDBinding211 = chunkICPOFSXXY();
  return chunk5PVQY5BWR(
    xychartDiagram5P7HB3NDBinding210.xyChart,
    xychartDiagram5P7HB3NDBinding211.themeVariables.xyChart,
  );
}
function xychartDiagram5P7HB3NDHelper8() {
  let xychartDiagram5P7HB3NDBinding212 = chunkICPOFSXXY();
  return chunk5PVQY5BWR(
    chunkICPOFSXXD.xyChart,
    xychartDiagram5P7HB3NDBinding212.xyChart,
  );
}
function xychartDiagram5P7HB3NDHelper9() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: 1 / 0,
      max: -1 / 0,
    },
    xAxis: {
      type: "band",
      title: "",
      categories: [],
    },
    title: "",
    plots: [],
  };
}
function xychartDiagram5P7HB3NDHelper10(xychartDiagram5P7HB3NDInput119) {
  let xychartDiagram5P7HB3NDBinding213 = chunkICPOFSXXY();
  return chunkICPOFSXXR(
    xychartDiagram5P7HB3NDInput119.trim(),
    xychartDiagram5P7HB3NDBinding213,
  );
}
function xychartDiagram5P7HB3NDHelper11(xychartDiagram5P7HB3NDInput137) {
  be = xychartDiagram5P7HB3NDInput137;
}
function xychartDiagram5P7HB3NDHelper12(xychartDiagram5P7HB3NDInput87) {
  xychartDiagram5P7HB3NDInput87 === "horizontal"
    ? (xychartDiagram5P7HB3NDBinding15.chartOrientation = "horizontal")
    : (xychartDiagram5P7HB3NDBinding15.chartOrientation = "vertical");
}
function xychartDiagram5P7HB3NDHelper13(xychartDiagram5P7HB3NDInput130) {
  xychartDiagram5P7HB3NDBinding17.xAxis.title = xychartDiagram5P7HB3NDHelper10(
    xychartDiagram5P7HB3NDInput130.text,
  );
}
function xychartDiagram5P7HB3NDHelper14(
  xychartDiagram5P7HB3NDInput94,
  xychartDiagram5P7HB3NDInput95,
) {
  xychartDiagram5P7HB3NDBinding17.xAxis = {
    type: "linear",
    title: xychartDiagram5P7HB3NDBinding17.xAxis.title,
    min: xychartDiagram5P7HB3NDInput94,
    max: xychartDiagram5P7HB3NDInput95,
  };
  xychartDiagram5P7HB3NDBinding19 = true;
}
function xychartDiagram5P7HB3NDHelper15(xychartDiagram5P7HB3NDInput82) {
  xychartDiagram5P7HB3NDBinding17.xAxis = {
    type: "band",
    title: xychartDiagram5P7HB3NDBinding17.xAxis.title,
    categories: xychartDiagram5P7HB3NDInput82.map((item) =>
      xychartDiagram5P7HB3NDHelper10(item.text),
    ),
  };
  xychartDiagram5P7HB3NDBinding19 = true;
}
function xychartDiagram5P7HB3NDHelper16(xychartDiagram5P7HB3NDInput129) {
  xychartDiagram5P7HB3NDBinding17.yAxis.title = xychartDiagram5P7HB3NDHelper10(
    xychartDiagram5P7HB3NDInput129.text,
  );
}
function xychartDiagram5P7HB3NDHelper17(
  xychartDiagram5P7HB3NDInput92,
  xychartDiagram5P7HB3NDInput93,
) {
  xychartDiagram5P7HB3NDBinding17.yAxis = {
    type: "linear",
    title: xychartDiagram5P7HB3NDBinding17.yAxis.title,
    min: xychartDiagram5P7HB3NDInput92,
    max: xychartDiagram5P7HB3NDInput93,
  };
  $ = true;
}
function xychartDiagram5P7HB3NDHelper18(xychartDiagram5P7HB3NDInput45) {
  let xychartDiagram5P7HB3NDBinding179 = Math.min(
      ...xychartDiagram5P7HB3NDInput45,
    ),
    xychartDiagram5P7HB3NDBinding180 = Math.max(
      ...xychartDiagram5P7HB3NDInput45,
    ),
    xychartDiagram5P7HB3NDBinding181 = xychartDiagram5P7HB3NDHelper3(
      xychartDiagram5P7HB3NDBinding17.yAxis,
    )
      ? xychartDiagram5P7HB3NDBinding17.yAxis.min
      : 1 / 0,
    xychartDiagram5P7HB3NDBinding182 = xychartDiagram5P7HB3NDHelper3(
      xychartDiagram5P7HB3NDBinding17.yAxis,
    )
      ? xychartDiagram5P7HB3NDBinding17.yAxis.max
      : -1 / 0;
  xychartDiagram5P7HB3NDBinding17.yAxis = {
    type: "linear",
    title: xychartDiagram5P7HB3NDBinding17.yAxis.title,
    min: Math.min(
      xychartDiagram5P7HB3NDBinding181,
      xychartDiagram5P7HB3NDBinding179,
    ),
    max: Math.max(
      xychartDiagram5P7HB3NDBinding182,
      xychartDiagram5P7HB3NDBinding180,
    ),
  };
}
function xychartDiagram5P7HB3NDHelper19(xychartDiagram5P7HB3NDInput35) {
  let xychartDiagram5P7HB3NDBinding156 = [];
  if (xychartDiagram5P7HB3NDInput35.length === 0)
    return xychartDiagram5P7HB3NDBinding156;
  if (!xychartDiagram5P7HB3NDBinding19) {
    let xychartDiagram5P7HB3NDBinding204 = xychartDiagram5P7HB3NDHelper3(
        xychartDiagram5P7HB3NDBinding17.xAxis,
      )
        ? xychartDiagram5P7HB3NDBinding17.xAxis.min
        : 1 / 0,
      xychartDiagram5P7HB3NDBinding205 = xychartDiagram5P7HB3NDHelper3(
        xychartDiagram5P7HB3NDBinding17.xAxis,
      )
        ? xychartDiagram5P7HB3NDBinding17.xAxis.max
        : -1 / 0;
    xychartDiagram5P7HB3NDHelper14(
      Math.min(xychartDiagram5P7HB3NDBinding204, 1),
      Math.max(
        xychartDiagram5P7HB3NDBinding205,
        xychartDiagram5P7HB3NDInput35.length,
      ),
    );
  }
  if (
    ($ || xychartDiagram5P7HB3NDHelper18(xychartDiagram5P7HB3NDInput35),
    xychartDiagram5P7HB3NDHelper2(xychartDiagram5P7HB3NDBinding17.xAxis) &&
      (xychartDiagram5P7HB3NDBinding156 =
        xychartDiagram5P7HB3NDBinding17.xAxis.categories.map((item, index) => [
          item,
          xychartDiagram5P7HB3NDInput35[index],
        ])),
    xychartDiagram5P7HB3NDHelper3(xychartDiagram5P7HB3NDBinding17.xAxis))
  ) {
    let xychartDiagram5P7HB3NDBinding197 =
        xychartDiagram5P7HB3NDBinding17.xAxis.min,
      xychartDiagram5P7HB3NDBinding198 =
        xychartDiagram5P7HB3NDBinding17.xAxis.max,
      xychartDiagram5P7HB3NDBinding199 =
        (xychartDiagram5P7HB3NDBinding198 - xychartDiagram5P7HB3NDBinding197) /
        (xychartDiagram5P7HB3NDInput35.length - 1),
      xychartDiagram5P7HB3NDBinding200 = [];
    for (
      let xychartDiagram5P7HB3NDBinding214 = xychartDiagram5P7HB3NDBinding197;
      xychartDiagram5P7HB3NDBinding214 <= xychartDiagram5P7HB3NDBinding198;
      xychartDiagram5P7HB3NDBinding214 += xychartDiagram5P7HB3NDBinding199
    )
      xychartDiagram5P7HB3NDBinding200.push(
        `${xychartDiagram5P7HB3NDBinding214}`,
      );
    xychartDiagram5P7HB3NDBinding156 = xychartDiagram5P7HB3NDBinding200.map(
      (item, index) => [item, xychartDiagram5P7HB3NDInput35[index]],
    );
  }
  return xychartDiagram5P7HB3NDBinding156;
}
function xychartDiagram5P7HB3NDHelper20(xychartDiagram5P7HB3NDInput120) {
  return xychartDiagram5P7HB3NDBinding18[
    xychartDiagram5P7HB3NDInput120 === 0
      ? 0
      : xychartDiagram5P7HB3NDInput120 % xychartDiagram5P7HB3NDBinding18.length
  ];
}
function xychartDiagram5P7HB3NDHelper21(
  xychartDiagram5P7HB3NDInput85,
  xychartDiagram5P7HB3NDInput86,
) {
  let xychartDiagram5P7HB3NDBinding207 = xychartDiagram5P7HB3NDHelper19(
    xychartDiagram5P7HB3NDInput86,
  );
  xychartDiagram5P7HB3NDBinding17.plots.push({
    type: "line",
    strokeFill: xychartDiagram5P7HB3NDHelper20(xychartDiagram5P7HB3NDBinding14),
    strokeWidth: 2,
    data: xychartDiagram5P7HB3NDBinding207,
  });
  xychartDiagram5P7HB3NDBinding14++;
}
function xychartDiagram5P7HB3NDHelper22(
  xychartDiagram5P7HB3NDInput99,
  xychartDiagram5P7HB3NDInput100,
) {
  let xychartDiagram5P7HB3NDBinding208 = xychartDiagram5P7HB3NDHelper19(
    xychartDiagram5P7HB3NDInput100,
  );
  xychartDiagram5P7HB3NDBinding17.plots.push({
    type: "bar",
    fill: xychartDiagram5P7HB3NDHelper20(xychartDiagram5P7HB3NDBinding14),
    data: xychartDiagram5P7HB3NDBinding208,
  });
  xychartDiagram5P7HB3NDBinding14++;
}
function xychartDiagram5P7HB3NDHelper23() {
  if (xychartDiagram5P7HB3NDBinding17.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return (
    (xychartDiagram5P7HB3NDBinding17.title = chunkICPOFSXXC()),
    xychartDiagram5P7HB3NDBinding13.build(
      xychartDiagram5P7HB3NDBinding15,
      xychartDiagram5P7HB3NDBinding17,
      xychartDiagram5P7HB3NDBinding16,
      be,
    )
  );
}
function xychartDiagram5P7HB3NDHelper24() {
  return xychartDiagram5P7HB3NDBinding16;
}
function xychartDiagram5P7HB3NDHelper25() {
  return xychartDiagram5P7HB3NDBinding15;
}
function xychartDiagram5P7HB3NDHelper26() {
  return xychartDiagram5P7HB3NDBinding17;
}
var xychartDiagram5P7HB3NDBinding1,
  xychartDiagram5P7HB3NDBinding2,
  xychartDiagram5P7HB3NDBinding3,
  xychartDiagram5P7HB3NDBinding4,
  xychartDiagram5P7HB3NDBinding5,
  xychartDiagram5P7HB3NDBinding6,
  xychartDiagram5P7HB3NDBinding7,
  xychartDiagram5P7HB3NDBinding8,
  xychartDiagram5P7HB3NDBinding9,
  xychartDiagram5P7HB3NDBinding10,
  _e,
  xychartDiagram5P7HB3NDBinding11,
  xychartDiagram5P7HB3NDBinding12,
  xychartDiagram5P7HB3NDBinding13,
  xychartDiagram5P7HB3NDBinding14,
  be,
  xychartDiagram5P7HB3NDBinding15,
  xychartDiagram5P7HB3NDBinding16,
  xychartDiagram5P7HB3NDBinding17,
  xychartDiagram5P7HB3NDBinding18,
  xychartDiagram5P7HB3NDBinding19,
  $,
  XychartDiagram5P7HB3ND;
esmInit(() => {
  chunk426QAEUCT();
  chunkU2HBQHQKI();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  srcT();
  xychartDiagram5P7HB3NDBinding1 = (function () {
    var xychartDiagram5P7HB3NDBinding20 = chunkAGHRB4JFN(function (
        xychartDiagram5P7HB3NDInput88,
        xychartDiagram5P7HB3NDInput89,
        xychartDiagram5P7HB3NDInput90,
        xychartDiagram5P7HB3NDInput91,
      ) {
        for (
          xychartDiagram5P7HB3NDInput90 ||= {},
            xychartDiagram5P7HB3NDInput91 =
              xychartDiagram5P7HB3NDInput88.length;
          xychartDiagram5P7HB3NDInput91--;
          xychartDiagram5P7HB3NDInput90[
            xychartDiagram5P7HB3NDInput88[xychartDiagram5P7HB3NDInput91]
          ] = xychartDiagram5P7HB3NDInput89
        );
        return xychartDiagram5P7HB3NDInput90;
      }, "o"),
      xychartDiagram5P7HB3NDBinding21 = [1, 10, 12, 14, 16, 18, 19, 21, 23],
      xychartDiagram5P7HB3NDBinding22 = [2, 6],
      xychartDiagram5P7HB3NDBinding23 = [1, 3],
      xychartDiagram5P7HB3NDBinding24 = [1, 5],
      xychartDiagram5P7HB3NDBinding25 = [1, 6],
      xychartDiagram5P7HB3NDBinding26 = [1, 7],
      xychartDiagram5P7HB3NDBinding27 = [
        1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36,
      ],
      xychartDiagram5P7HB3NDBinding28 = [1, 25],
      xychartDiagram5P7HB3NDBinding29 = [1, 26],
      xychartDiagram5P7HB3NDBinding30 = [1, 28],
      xychartDiagram5P7HB3NDBinding31 = [1, 29],
      xychartDiagram5P7HB3NDBinding32 = [1, 30],
      xychartDiagram5P7HB3NDBinding33 = [1, 31],
      xychartDiagram5P7HB3NDBinding34 = [1, 32],
      xychartDiagram5P7HB3NDBinding35 = [1, 33],
      xychartDiagram5P7HB3NDBinding36 = [1, 34],
      xychartDiagram5P7HB3NDBinding37 = [1, 35],
      xychartDiagram5P7HB3NDBinding38 = [1, 36],
      xychartDiagram5P7HB3NDBinding39 = [1, 37],
      xychartDiagram5P7HB3NDBinding40 = [1, 43],
      xychartDiagram5P7HB3NDBinding41 = [1, 42],
      xychartDiagram5P7HB3NDBinding42 = [1, 47],
      xychartDiagram5P7HB3NDBinding43 = [1, 50],
      xychartDiagram5P7HB3NDBinding44 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36,
      ],
      xychartDiagram5P7HB3NDBinding45 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36,
      ],
      xychartDiagram5P7HB3NDBinding46 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42,
        43, 44, 45, 46, 47, 48, 49, 50,
      ],
      xychartDiagram5P7HB3NDBinding47 = [1, 64],
      xychartDiagram5P7HB3NDBinding48 = {
        trace: chunkAGHRB4JFN(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          eol: 4,
          XYCHART: 5,
          chartConfig: 6,
          document: 7,
          CHART_ORIENTATION: 8,
          statement: 9,
          title: 10,
          text: 11,
          X_AXIS: 12,
          parseXAxis: 13,
          Y_AXIS: 14,
          parseYAxis: 15,
          LINE: 16,
          plotData: 17,
          BAR: 18,
          acc_title: 19,
          acc_title_value: 20,
          acc_descr: 21,
          acc_descr_value: 22,
          acc_descr_multiline_value: 23,
          SQUARE_BRACES_START: 24,
          commaSeparatedNumbers: 25,
          SQUARE_BRACES_END: 26,
          NUMBER_WITH_DECIMAL: 27,
          COMMA: 28,
          xAxisData: 29,
          bandData: 30,
          ARROW_DELIMITER: 31,
          commaSeparatedTexts: 32,
          yAxisData: 33,
          NEWLINE: 34,
          SEMI: 35,
          EOF: 36,
          alphaNum: 37,
          STR: 38,
          MD_STR: 39,
          alphaNumToken: 40,
          AMP: 41,
          NUM: 42,
          ALPHA: 43,
          PLUS: 44,
          EQUALS: 45,
          MULT: 46,
          DOT: 47,
          BRKT: 48,
          MINUS: 49,
          UNDERSCORE: 50,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          5: "XYCHART",
          8: "CHART_ORIENTATION",
          10: "title",
          12: "X_AXIS",
          14: "Y_AXIS",
          16: "LINE",
          18: "BAR",
          19: "acc_title",
          20: "acc_title_value",
          21: "acc_descr",
          22: "acc_descr_value",
          23: "acc_descr_multiline_value",
          24: "SQUARE_BRACES_START",
          26: "SQUARE_BRACES_END",
          27: "NUMBER_WITH_DECIMAL",
          28: "COMMA",
          31: "ARROW_DELIMITER",
          34: "NEWLINE",
          35: "SEMI",
          36: "EOF",
          38: "STR",
          39: "MD_STR",
          41: "AMP",
          42: "NUM",
          43: "ALPHA",
          44: "PLUS",
          45: "EQUALS",
          46: "MULT",
          47: "DOT",
          48: "BRKT",
          49: "MINUS",
          50: "UNDERSCORE",
        },
        productions_: [
          0,
          [3, 2],
          [3, 3],
          [3, 2],
          [3, 1],
          [6, 1],
          [7, 0],
          [7, 2],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 3],
          [9, 2],
          [9, 3],
          [9, 2],
          [9, 2],
          [9, 1],
          [17, 3],
          [25, 3],
          [25, 1],
          [13, 1],
          [13, 2],
          [13, 1],
          [29, 1],
          [29, 3],
          [30, 3],
          [32, 3],
          [32, 1],
          [15, 1],
          [15, 2],
          [15, 1],
          [33, 3],
          [4, 1],
          [4, 1],
          [4, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [37, 1],
          [37, 2],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
          [40, 1],
        ],
        performAction: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput10,
          xychartDiagram5P7HB3NDInput11,
          xychartDiagram5P7HB3NDInput12,
          xychartDiagram5P7HB3NDInput13,
          xychartDiagram5P7HB3NDInput14,
          xychartDiagram5P7HB3NDInput15,
          xychartDiagram5P7HB3NDInput16,
        ) {
          var xychartDiagram5P7HB3NDBinding90 =
            xychartDiagram5P7HB3NDInput15.length - 1;
          switch (xychartDiagram5P7HB3NDInput14) {
            case 5:
              xychartDiagram5P7HB3NDInput13.setOrientation(
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 9:
              xychartDiagram5P7HB3NDInput13.setDiagramTitle(
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ].text.trim(),
              );
              break;
            case 12:
              xychartDiagram5P7HB3NDInput13.setLineData(
                {
                  text: "",
                  type: "text",
                },
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 13:
              xychartDiagram5P7HB3NDInput13.setLineData(
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ],
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 14:
              xychartDiagram5P7HB3NDInput13.setBarData(
                {
                  text: "",
                  type: "text",
                },
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 15:
              xychartDiagram5P7HB3NDInput13.setBarData(
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ],
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 16:
              this.$ =
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ].trim();
              xychartDiagram5P7HB3NDInput13.setAccTitle(this.$);
              break;
            case 17:
            case 18:
              this.$ =
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ].trim();
              xychartDiagram5P7HB3NDInput13.setAccDescription(this.$);
              break;
            case 19:
              this.$ =
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ];
              break;
            case 20:
              this.$ = [
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90 - 2
                  ],
                ),
                ...xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ],
              ];
              break;
            case 21:
              this.$ = [
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90
                  ],
                ),
              ];
              break;
            case 22:
              xychartDiagram5P7HB3NDInput13.setXAxisTitle(
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 23:
              xychartDiagram5P7HB3NDInput13.setXAxisTitle(
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ],
              );
              break;
            case 24:
              xychartDiagram5P7HB3NDInput13.setXAxisTitle({
                type: "text",
                text: "",
              });
              break;
            case 25:
              xychartDiagram5P7HB3NDInput13.setXAxisBand(
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 26:
              xychartDiagram5P7HB3NDInput13.setXAxisRangeData(
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90 - 2
                  ],
                ),
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90
                  ],
                ),
              );
              break;
            case 27:
              this.$ =
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ];
              break;
            case 28:
              this.$ = [
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 2
                ],
                ...xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ],
              ];
              break;
            case 29:
              this.$ = [
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              ];
              break;
            case 30:
              xychartDiagram5P7HB3NDInput13.setYAxisTitle(
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90],
              );
              break;
            case 31:
              xychartDiagram5P7HB3NDInput13.setYAxisTitle(
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ],
              );
              break;
            case 32:
              xychartDiagram5P7HB3NDInput13.setYAxisTitle({
                type: "text",
                text: "",
              });
              break;
            case 33:
              xychartDiagram5P7HB3NDInput13.setYAxisRangeData(
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90 - 2
                  ],
                ),
                Number(
                  xychartDiagram5P7HB3NDInput15[
                    xychartDiagram5P7HB3NDBinding90
                  ],
                ),
              );
              break;
            case 37:
              this.$ = {
                text: xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ],
                type: "text",
              };
              break;
            case 38:
              this.$ = {
                text: xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ],
                type: "text",
              };
              break;
            case 39:
              this.$ = {
                text: xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90
                ],
                type: "markdown",
              };
              break;
            case 40:
              this.$ =
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90];
              break;
            case 41:
              this.$ =
                xychartDiagram5P7HB3NDInput15[
                  xychartDiagram5P7HB3NDBinding90 - 1
                ] +
                "" +
                xychartDiagram5P7HB3NDInput15[xychartDiagram5P7HB3NDBinding90];
              break;
          }
        }, "anonymous"),
        table: [
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding21,
            xychartDiagram5P7HB3NDBinding22,
            {
              3: 1,
              4: 2,
              7: 4,
              5: xychartDiagram5P7HB3NDBinding23,
              34: xychartDiagram5P7HB3NDBinding24,
              35: xychartDiagram5P7HB3NDBinding25,
              36: xychartDiagram5P7HB3NDBinding26,
            },
          ),
          {
            1: [3],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding21,
            xychartDiagram5P7HB3NDBinding22,
            {
              4: 2,
              7: 4,
              3: 8,
              5: xychartDiagram5P7HB3NDBinding23,
              34: xychartDiagram5P7HB3NDBinding24,
              35: xychartDiagram5P7HB3NDBinding25,
              36: xychartDiagram5P7HB3NDBinding26,
            },
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding21,
            xychartDiagram5P7HB3NDBinding22,
            {
              4: 2,
              7: 4,
              6: 9,
              3: 10,
              5: xychartDiagram5P7HB3NDBinding23,
              8: [1, 11],
              34: xychartDiagram5P7HB3NDBinding24,
              35: xychartDiagram5P7HB3NDBinding25,
              36: xychartDiagram5P7HB3NDBinding26,
            },
          ),
          {
            1: [2, 4],
            9: 12,
            10: [1, 13],
            12: [1, 14],
            14: [1, 15],
            16: [1, 16],
            18: [1, 17],
            19: [1, 18],
            21: [1, 19],
            23: [1, 20],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding27,
            [2, 34],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding27,
            [2, 35],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding27,
            [2, 36],
          ),
          {
            1: [2, 1],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding21,
            xychartDiagram5P7HB3NDBinding22,
            {
              4: 2,
              7: 4,
              3: 21,
              5: xychartDiagram5P7HB3NDBinding23,
              34: xychartDiagram5P7HB3NDBinding24,
              35: xychartDiagram5P7HB3NDBinding25,
              36: xychartDiagram5P7HB3NDBinding26,
            },
          ),
          {
            1: [2, 3],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding27,
            [2, 5],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding21,
            [2, 7],
            {
              4: 22,
              34: xychartDiagram5P7HB3NDBinding24,
              35: xychartDiagram5P7HB3NDBinding25,
              36: xychartDiagram5P7HB3NDBinding26,
            },
          ),
          {
            11: 23,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          {
            11: 39,
            13: 38,
            24: xychartDiagram5P7HB3NDBinding40,
            27: xychartDiagram5P7HB3NDBinding41,
            29: 40,
            30: 41,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          {
            11: 45,
            15: 44,
            27: xychartDiagram5P7HB3NDBinding42,
            33: 46,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          {
            11: 49,
            17: 48,
            24: xychartDiagram5P7HB3NDBinding43,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          {
            11: 52,
            17: 51,
            24: xychartDiagram5P7HB3NDBinding43,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          {
            20: [1, 53],
          },
          {
            22: [1, 54],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 18],
          ),
          {
            1: [2, 2],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 8],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 9],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding45,
            [2, 37],
            {
              40: 55,
              41: xychartDiagram5P7HB3NDBinding30,
              42: xychartDiagram5P7HB3NDBinding31,
              43: xychartDiagram5P7HB3NDBinding32,
              44: xychartDiagram5P7HB3NDBinding33,
              45: xychartDiagram5P7HB3NDBinding34,
              46: xychartDiagram5P7HB3NDBinding35,
              47: xychartDiagram5P7HB3NDBinding36,
              48: xychartDiagram5P7HB3NDBinding37,
              49: xychartDiagram5P7HB3NDBinding38,
              50: xychartDiagram5P7HB3NDBinding39,
            },
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding45,
            [2, 38],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding45,
            [2, 39],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 40],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 42],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 43],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 44],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 45],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 46],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 47],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 48],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 49],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 50],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 51],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 10],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 22],
            {
              30: 41,
              29: 56,
              24: xychartDiagram5P7HB3NDBinding40,
              27: xychartDiagram5P7HB3NDBinding41,
            },
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 24],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 25],
          ),
          {
            31: [1, 57],
          },
          {
            11: 59,
            32: 58,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 11],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 30],
            {
              33: 60,
              27: xychartDiagram5P7HB3NDBinding42,
            },
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 32],
          ),
          {
            31: [1, 61],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 12],
          ),
          {
            17: 62,
            24: xychartDiagram5P7HB3NDBinding43,
          },
          {
            25: 63,
            27: xychartDiagram5P7HB3NDBinding47,
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 14],
          ),
          {
            17: 65,
            24: xychartDiagram5P7HB3NDBinding43,
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 16],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 17],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding46,
            [2, 41],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 23],
          ),
          {
            27: [1, 66],
          },
          {
            26: [1, 67],
          },
          {
            26: [2, 29],
            28: [1, 68],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 31],
          ),
          {
            27: [1, 69],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 13],
          ),
          {
            26: [1, 70],
          },
          {
            26: [2, 21],
            28: [1, 71],
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 15],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 26],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 27],
          ),
          {
            11: 59,
            32: 72,
            37: 24,
            38: xychartDiagram5P7HB3NDBinding28,
            39: xychartDiagram5P7HB3NDBinding29,
            40: 27,
            41: xychartDiagram5P7HB3NDBinding30,
            42: xychartDiagram5P7HB3NDBinding31,
            43: xychartDiagram5P7HB3NDBinding32,
            44: xychartDiagram5P7HB3NDBinding33,
            45: xychartDiagram5P7HB3NDBinding34,
            46: xychartDiagram5P7HB3NDBinding35,
            47: xychartDiagram5P7HB3NDBinding36,
            48: xychartDiagram5P7HB3NDBinding37,
            49: xychartDiagram5P7HB3NDBinding38,
            50: xychartDiagram5P7HB3NDBinding39,
          },
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 33],
          ),
          xychartDiagram5P7HB3NDBinding20(
            xychartDiagram5P7HB3NDBinding44,
            [2, 19],
          ),
          {
            25: 73,
            27: xychartDiagram5P7HB3NDBinding47,
          },
          {
            26: [2, 28],
          },
          {
            26: [2, 20],
          },
        ],
        defaultActions: {
          8: [2, 1],
          10: [2, 3],
          21: [2, 2],
          72: [2, 28],
          73: [2, 20],
        },
        parseError: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput63,
          xychartDiagram5P7HB3NDInput64,
        ) {
          if (xychartDiagram5P7HB3NDInput64.recoverable)
            this.trace(xychartDiagram5P7HB3NDInput63);
          else {
            var xychartDiagram5P7HB3NDBinding202 = Error(
              xychartDiagram5P7HB3NDInput63,
            );
            throw (
              (xychartDiagram5P7HB3NDBinding202.hash =
                xychartDiagram5P7HB3NDInput64),
              xychartDiagram5P7HB3NDBinding202
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput5) {
          var xychartDiagram5P7HB3NDBinding60 = this,
            xychartDiagram5P7HB3NDBinding61 = [0],
            xychartDiagram5P7HB3NDBinding62 = [],
            xychartDiagram5P7HB3NDBinding63 = [null],
            xychartDiagram5P7HB3NDBinding64 = [],
            xychartDiagram5P7HB3NDBinding65 = this.table,
            xychartDiagram5P7HB3NDBinding66 = "",
            xychartDiagram5P7HB3NDBinding67 = 0,
            xychartDiagram5P7HB3NDBinding68 = 0,
            xychartDiagram5P7HB3NDBinding69 = 0,
            xychartDiagram5P7HB3NDBinding72 =
              xychartDiagram5P7HB3NDBinding64.slice.call(arguments, 1),
            xychartDiagram5P7HB3NDBinding73 = Object.create(this.lexer),
            xychartDiagram5P7HB3NDBinding74 = {
              yy: {},
            };
          for (var xychartDiagram5P7HB3NDBinding75 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              xychartDiagram5P7HB3NDBinding75,
            ) &&
              (xychartDiagram5P7HB3NDBinding74.yy[
                xychartDiagram5P7HB3NDBinding75
              ] = this.yy[xychartDiagram5P7HB3NDBinding75]);
          xychartDiagram5P7HB3NDBinding73.setInput(
            xychartDiagram5P7HB3NDInput5,
            xychartDiagram5P7HB3NDBinding74.yy,
          );
          xychartDiagram5P7HB3NDBinding74.yy.lexer =
            xychartDiagram5P7HB3NDBinding73;
          xychartDiagram5P7HB3NDBinding74.yy.parser = this;
          xychartDiagram5P7HB3NDBinding73.yylloc === undefined &&
            (xychartDiagram5P7HB3NDBinding73.yylloc = {});
          var xychartDiagram5P7HB3NDBinding76 =
            xychartDiagram5P7HB3NDBinding73.yylloc;
          xychartDiagram5P7HB3NDBinding64.push(xychartDiagram5P7HB3NDBinding76);
          var xychartDiagram5P7HB3NDBinding77 =
            xychartDiagram5P7HB3NDBinding73.options &&
            xychartDiagram5P7HB3NDBinding73.options.ranges;
          typeof xychartDiagram5P7HB3NDBinding74.yy.parseError == "function"
            ? (this.parseError = xychartDiagram5P7HB3NDBinding74.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function xychartDiagram5P7HB3NDHelper32(
            xychartDiagram5P7HB3NDInput98,
          ) {
            xychartDiagram5P7HB3NDBinding61.length -=
              2 * xychartDiagram5P7HB3NDInput98;
            xychartDiagram5P7HB3NDBinding63.length -=
              xychartDiagram5P7HB3NDInput98;
            xychartDiagram5P7HB3NDBinding64.length -=
              xychartDiagram5P7HB3NDInput98;
          }
          chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper32, "popStack");
          function xychartDiagram5P7HB3NDHelper33() {
            var xychartDiagram5P7HB3NDBinding177 =
              xychartDiagram5P7HB3NDBinding62.pop() ||
              xychartDiagram5P7HB3NDBinding73.lex() ||
              1;
            return (
              typeof xychartDiagram5P7HB3NDBinding177 != "number" &&
                (xychartDiagram5P7HB3NDBinding177 instanceof Array &&
                  ((xychartDiagram5P7HB3NDBinding62 =
                    xychartDiagram5P7HB3NDBinding177),
                  (xychartDiagram5P7HB3NDBinding177 =
                    xychartDiagram5P7HB3NDBinding62.pop())),
                (xychartDiagram5P7HB3NDBinding177 =
                  xychartDiagram5P7HB3NDBinding60.symbols_[
                    xychartDiagram5P7HB3NDBinding177
                  ] || xychartDiagram5P7HB3NDBinding177)),
              xychartDiagram5P7HB3NDBinding177
            );
          }
          chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper33, "lex");
          for (
            var xychartDiagram5P7HB3NDBinding78,
              xychartDiagram5P7HB3NDBinding79,
              xychartDiagram5P7HB3NDBinding80,
              xychartDiagram5P7HB3NDBinding81,
              xychartDiagram5P7HB3NDBinding82,
              xychartDiagram5P7HB3NDBinding83 = {},
              xychartDiagram5P7HB3NDBinding84,
              xychartDiagram5P7HB3NDBinding85,
              xychartDiagram5P7HB3NDBinding86,
              xychartDiagram5P7HB3NDBinding87;
            ;
          ) {
            if (
              ((xychartDiagram5P7HB3NDBinding80 =
                xychartDiagram5P7HB3NDBinding61[
                  xychartDiagram5P7HB3NDBinding61.length - 1
                ]),
              this.defaultActions[xychartDiagram5P7HB3NDBinding80]
                ? (xychartDiagram5P7HB3NDBinding81 =
                    this.defaultActions[xychartDiagram5P7HB3NDBinding80])
                : ((xychartDiagram5P7HB3NDBinding78 ??=
                    xychartDiagram5P7HB3NDHelper33()),
                  (xychartDiagram5P7HB3NDBinding81 =
                    xychartDiagram5P7HB3NDBinding65[
                      xychartDiagram5P7HB3NDBinding80
                    ] &&
                    xychartDiagram5P7HB3NDBinding65[
                      xychartDiagram5P7HB3NDBinding80
                    ][xychartDiagram5P7HB3NDBinding78])),
              xychartDiagram5P7HB3NDBinding81 === undefined ||
                !xychartDiagram5P7HB3NDBinding81.length ||
                !xychartDiagram5P7HB3NDBinding81[0])
            ) {
              var xychartDiagram5P7HB3NDBinding88 = "";
              for (xychartDiagram5P7HB3NDBinding84 in ((xychartDiagram5P7HB3NDBinding87 =
                []),
              xychartDiagram5P7HB3NDBinding65[xychartDiagram5P7HB3NDBinding80]))
                this.terminals_[xychartDiagram5P7HB3NDBinding84] &&
                  xychartDiagram5P7HB3NDBinding84 > 2 &&
                  xychartDiagram5P7HB3NDBinding87.push(
                    "'" +
                      this.terminals_[xychartDiagram5P7HB3NDBinding84] +
                      "'",
                  );
              xychartDiagram5P7HB3NDBinding88 =
                xychartDiagram5P7HB3NDBinding73.showPosition
                  ? "Parse error on line " +
                    (xychartDiagram5P7HB3NDBinding67 + 1) +
                    ":\n" +
                    xychartDiagram5P7HB3NDBinding73.showPosition() +
                    "\nExpecting " +
                    xychartDiagram5P7HB3NDBinding87.join(", ") +
                    ", got '" +
                    (this.terminals_[xychartDiagram5P7HB3NDBinding78] ||
                      xychartDiagram5P7HB3NDBinding78) +
                    "'"
                  : "Parse error on line " +
                    (xychartDiagram5P7HB3NDBinding67 + 1) +
                    ": Unexpected " +
                    (xychartDiagram5P7HB3NDBinding78 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[xychartDiagram5P7HB3NDBinding78] ||
                          xychartDiagram5P7HB3NDBinding78) +
                        "'");
              this.parseError(xychartDiagram5P7HB3NDBinding88, {
                text: xychartDiagram5P7HB3NDBinding73.match,
                token:
                  this.terminals_[xychartDiagram5P7HB3NDBinding78] ||
                  xychartDiagram5P7HB3NDBinding78,
                line: xychartDiagram5P7HB3NDBinding73.yylineno,
                loc: xychartDiagram5P7HB3NDBinding76,
                expected: xychartDiagram5P7HB3NDBinding87,
              });
            }
            if (
              xychartDiagram5P7HB3NDBinding81[0] instanceof Array &&
              xychartDiagram5P7HB3NDBinding81.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  xychartDiagram5P7HB3NDBinding80 +
                  ", token: " +
                  xychartDiagram5P7HB3NDBinding78,
              );
            switch (xychartDiagram5P7HB3NDBinding81[0]) {
              case 1:
                xychartDiagram5P7HB3NDBinding61.push(
                  xychartDiagram5P7HB3NDBinding78,
                );
                xychartDiagram5P7HB3NDBinding63.push(
                  xychartDiagram5P7HB3NDBinding73.yytext,
                );
                xychartDiagram5P7HB3NDBinding64.push(
                  xychartDiagram5P7HB3NDBinding73.yylloc,
                );
                xychartDiagram5P7HB3NDBinding61.push(
                  xychartDiagram5P7HB3NDBinding81[1],
                );
                xychartDiagram5P7HB3NDBinding78 = null;
                xychartDiagram5P7HB3NDBinding79
                  ? ((xychartDiagram5P7HB3NDBinding78 =
                      xychartDiagram5P7HB3NDBinding79),
                    (xychartDiagram5P7HB3NDBinding79 = null))
                  : ((xychartDiagram5P7HB3NDBinding68 =
                      xychartDiagram5P7HB3NDBinding73.yyleng),
                    (xychartDiagram5P7HB3NDBinding66 =
                      xychartDiagram5P7HB3NDBinding73.yytext),
                    (xychartDiagram5P7HB3NDBinding67 =
                      xychartDiagram5P7HB3NDBinding73.yylineno),
                    (xychartDiagram5P7HB3NDBinding76 =
                      xychartDiagram5P7HB3NDBinding73.yylloc),
                    xychartDiagram5P7HB3NDBinding69 > 0 &&
                      xychartDiagram5P7HB3NDBinding69--);
                break;
              case 2:
                if (
                  ((xychartDiagram5P7HB3NDBinding85 =
                    this.productions_[xychartDiagram5P7HB3NDBinding81[1]][1]),
                  (xychartDiagram5P7HB3NDBinding83.$ =
                    xychartDiagram5P7HB3NDBinding63[
                      xychartDiagram5P7HB3NDBinding63.length -
                        xychartDiagram5P7HB3NDBinding85
                    ]),
                  (xychartDiagram5P7HB3NDBinding83._$ = {
                    first_line:
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length -
                          (xychartDiagram5P7HB3NDBinding85 || 1)
                      ].first_line,
                    last_line:
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length - 1
                      ].last_line,
                    first_column:
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length -
                          (xychartDiagram5P7HB3NDBinding85 || 1)
                      ].first_column,
                    last_column:
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length - 1
                      ].last_column,
                  }),
                  xychartDiagram5P7HB3NDBinding77 &&
                    (xychartDiagram5P7HB3NDBinding83._$.range = [
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length -
                          (xychartDiagram5P7HB3NDBinding85 || 1)
                      ].range[0],
                      xychartDiagram5P7HB3NDBinding64[
                        xychartDiagram5P7HB3NDBinding64.length - 1
                      ].range[1],
                    ]),
                  (xychartDiagram5P7HB3NDBinding82 = this.performAction.apply(
                    xychartDiagram5P7HB3NDBinding83,
                    [
                      xychartDiagram5P7HB3NDBinding66,
                      xychartDiagram5P7HB3NDBinding68,
                      xychartDiagram5P7HB3NDBinding67,
                      xychartDiagram5P7HB3NDBinding74.yy,
                      xychartDiagram5P7HB3NDBinding81[1],
                      xychartDiagram5P7HB3NDBinding63,
                      xychartDiagram5P7HB3NDBinding64,
                    ].concat(xychartDiagram5P7HB3NDBinding72),
                  )),
                  xychartDiagram5P7HB3NDBinding82 !== undefined)
                )
                  return xychartDiagram5P7HB3NDBinding82;
                xychartDiagram5P7HB3NDBinding85 &&
                  ((xychartDiagram5P7HB3NDBinding61 =
                    xychartDiagram5P7HB3NDBinding61.slice(
                      0,
                      -1 * xychartDiagram5P7HB3NDBinding85 * 2,
                    )),
                  (xychartDiagram5P7HB3NDBinding63 =
                    xychartDiagram5P7HB3NDBinding63.slice(
                      0,
                      -1 * xychartDiagram5P7HB3NDBinding85,
                    )),
                  (xychartDiagram5P7HB3NDBinding64 =
                    xychartDiagram5P7HB3NDBinding64.slice(
                      0,
                      -1 * xychartDiagram5P7HB3NDBinding85,
                    )));
                xychartDiagram5P7HB3NDBinding61.push(
                  this.productions_[xychartDiagram5P7HB3NDBinding81[1]][0],
                );
                xychartDiagram5P7HB3NDBinding63.push(
                  xychartDiagram5P7HB3NDBinding83.$,
                );
                xychartDiagram5P7HB3NDBinding64.push(
                  xychartDiagram5P7HB3NDBinding83._$,
                );
                xychartDiagram5P7HB3NDBinding86 =
                  xychartDiagram5P7HB3NDBinding65[
                    xychartDiagram5P7HB3NDBinding61[
                      xychartDiagram5P7HB3NDBinding61.length - 2
                    ]
                  ][
                    xychartDiagram5P7HB3NDBinding61[
                      xychartDiagram5P7HB3NDBinding61.length - 1
                    ]
                  ];
                xychartDiagram5P7HB3NDBinding61.push(
                  xychartDiagram5P7HB3NDBinding86,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    xychartDiagram5P7HB3NDBinding48.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput83,
          xychartDiagram5P7HB3NDInput84,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              xychartDiagram5P7HB3NDInput83,
              xychartDiagram5P7HB3NDInput84,
            );
          else throw Error(xychartDiagram5P7HB3NDInput83);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput30,
          xychartDiagram5P7HB3NDInput31,
        ) {
          return (
            (this.yy = xychartDiagram5P7HB3NDInput31 || this.yy || {}),
            (this._input = xychartDiagram5P7HB3NDInput30),
            (this._more = this._backtrack = this.done = false),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        }, "setInput"),
        input: chunkAGHRB4JFN(function () {
          var xychartDiagram5P7HB3NDBinding157 = this._input[0];
          return (
            (this.yytext += xychartDiagram5P7HB3NDBinding157),
            this.yyleng++,
            this.offset++,
            (this.match += xychartDiagram5P7HB3NDBinding157),
            (this.matched += xychartDiagram5P7HB3NDBinding157),
            xychartDiagram5P7HB3NDBinding157.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            xychartDiagram5P7HB3NDBinding157
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput20) {
          var xychartDiagram5P7HB3NDBinding135 =
              xychartDiagram5P7HB3NDInput20.length,
            xychartDiagram5P7HB3NDBinding136 =
              xychartDiagram5P7HB3NDInput20.split(/(?:\r\n?|\n)/g);
          this._input = xychartDiagram5P7HB3NDInput20 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - xychartDiagram5P7HB3NDBinding135,
          );
          this.offset -= xychartDiagram5P7HB3NDBinding135;
          var xychartDiagram5P7HB3NDBinding137 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          xychartDiagram5P7HB3NDBinding136.length - 1 &&
            (this.yylineno -= xychartDiagram5P7HB3NDBinding136.length - 1);
          var xychartDiagram5P7HB3NDBinding138 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: xychartDiagram5P7HB3NDBinding136
                ? (xychartDiagram5P7HB3NDBinding136.length ===
                  xychartDiagram5P7HB3NDBinding137.length
                    ? this.yylloc.first_column
                    : 0) +
                  xychartDiagram5P7HB3NDBinding137[
                    xychartDiagram5P7HB3NDBinding137.length -
                      xychartDiagram5P7HB3NDBinding136.length
                  ].length -
                  xychartDiagram5P7HB3NDBinding136[0].length
                : this.yylloc.first_column - xychartDiagram5P7HB3NDBinding135,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                xychartDiagram5P7HB3NDBinding138[0],
                xychartDiagram5P7HB3NDBinding138[0] +
                  this.yyleng -
                  xychartDiagram5P7HB3NDBinding135,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: chunkAGHRB4JFN(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: chunkAGHRB4JFN(function () {
          if (this.options.backtrack_lexer) this._backtrack = true;
          else
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              },
            );
          return this;
        }, "reject"),
        less: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput111) {
          this.unput(this.match.slice(xychartDiagram5P7HB3NDInput111));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var xychartDiagram5P7HB3NDBinding183 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (xychartDiagram5P7HB3NDBinding183.length > 20 ? "..." : "") +
            xychartDiagram5P7HB3NDBinding183.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var xychartDiagram5P7HB3NDBinding176 = this.match;
          return (
            xychartDiagram5P7HB3NDBinding176.length < 20 &&
              (xychartDiagram5P7HB3NDBinding176 += this._input.substr(
                0,
                20 - xychartDiagram5P7HB3NDBinding176.length,
              )),
            (
              xychartDiagram5P7HB3NDBinding176.substr(0, 20) +
              (xychartDiagram5P7HB3NDBinding176.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var xychartDiagram5P7HB3NDBinding184 = this.pastInput(),
            xychartDiagram5P7HB3NDBinding185 = Array(
              xychartDiagram5P7HB3NDBinding184.length + 1,
            ).join("-");
          return (
            xychartDiagram5P7HB3NDBinding184 +
            this.upcomingInput() +
            "\n" +
            xychartDiagram5P7HB3NDBinding185 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput17,
          xychartDiagram5P7HB3NDInput18,
        ) {
          var xychartDiagram5P7HB3NDBinding94,
            xychartDiagram5P7HB3NDBinding95,
            xychartDiagram5P7HB3NDBinding96;
          if (
            (this.options.backtrack_lexer &&
              ((xychartDiagram5P7HB3NDBinding96 = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
              this.options.ranges &&
                (xychartDiagram5P7HB3NDBinding96.yylloc.range =
                  this.yylloc.range.slice(0))),
            (xychartDiagram5P7HB3NDBinding95 =
              xychartDiagram5P7HB3NDInput17[0].match(/(?:\r\n?|\n).*/g)),
            xychartDiagram5P7HB3NDBinding95 &&
              (this.yylineno += xychartDiagram5P7HB3NDBinding95.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: xychartDiagram5P7HB3NDBinding95
                ? xychartDiagram5P7HB3NDBinding95[
                    xychartDiagram5P7HB3NDBinding95.length - 1
                  ].length -
                  xychartDiagram5P7HB3NDBinding95[
                    xychartDiagram5P7HB3NDBinding95.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  xychartDiagram5P7HB3NDInput17[0].length,
            }),
            (this.yytext += xychartDiagram5P7HB3NDInput17[0]),
            (this.match += xychartDiagram5P7HB3NDInput17[0]),
            (this.matches = xychartDiagram5P7HB3NDInput17),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              xychartDiagram5P7HB3NDInput17[0].length,
            )),
            (this.matched += xychartDiagram5P7HB3NDInput17[0]),
            (xychartDiagram5P7HB3NDBinding94 = this.performAction.call(
              this,
              this.yy,
              this,
              xychartDiagram5P7HB3NDInput18,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            xychartDiagram5P7HB3NDBinding94)
          )
            return xychartDiagram5P7HB3NDBinding94;
          if (this._backtrack) {
            for (var xychartDiagram5P7HB3NDBinding97 in xychartDiagram5P7HB3NDBinding96)
              this[xychartDiagram5P7HB3NDBinding97] =
                xychartDiagram5P7HB3NDBinding96[
                  xychartDiagram5P7HB3NDBinding97
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var xychartDiagram5P7HB3NDBinding129,
            xychartDiagram5P7HB3NDBinding130,
            xychartDiagram5P7HB3NDBinding131,
            xychartDiagram5P7HB3NDBinding132;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var xychartDiagram5P7HB3NDBinding133 = this._currentRules(),
              xychartDiagram5P7HB3NDBinding134 = 0;
            xychartDiagram5P7HB3NDBinding134 <
            xychartDiagram5P7HB3NDBinding133.length;
            xychartDiagram5P7HB3NDBinding134++
          )
            if (
              ((xychartDiagram5P7HB3NDBinding131 = this._input.match(
                this.rules[
                  xychartDiagram5P7HB3NDBinding133[
                    xychartDiagram5P7HB3NDBinding134
                  ]
                ],
              )),
              xychartDiagram5P7HB3NDBinding131 &&
                (!xychartDiagram5P7HB3NDBinding130 ||
                  xychartDiagram5P7HB3NDBinding131[0].length >
                    xychartDiagram5P7HB3NDBinding130[0].length))
            ) {
              if (
                ((xychartDiagram5P7HB3NDBinding130 =
                  xychartDiagram5P7HB3NDBinding131),
                (xychartDiagram5P7HB3NDBinding132 =
                  xychartDiagram5P7HB3NDBinding134),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((xychartDiagram5P7HB3NDBinding129 = this.test_match(
                    xychartDiagram5P7HB3NDBinding131,
                    xychartDiagram5P7HB3NDBinding133[
                      xychartDiagram5P7HB3NDBinding134
                    ],
                  )),
                  xychartDiagram5P7HB3NDBinding129 !== false)
                )
                  return xychartDiagram5P7HB3NDBinding129;
                if (this._backtrack) {
                  xychartDiagram5P7HB3NDBinding130 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return xychartDiagram5P7HB3NDBinding130
            ? ((xychartDiagram5P7HB3NDBinding129 = this.test_match(
                xychartDiagram5P7HB3NDBinding130,
                xychartDiagram5P7HB3NDBinding133[
                  xychartDiagram5P7HB3NDBinding132
                ],
              )),
              xychartDiagram5P7HB3NDBinding129 === false
                ? false
                : xychartDiagram5P7HB3NDBinding129)
            : this._input === ""
              ? this.EOF
              : this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  {
                    text: "",
                    token: null,
                    line: this.yylineno,
                  },
                );
        }, "next"),
        lex: chunkAGHRB4JFN(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput114) {
          this.conditionStack.push(xychartDiagram5P7HB3NDInput114);
        }, "begin"),
        popState: chunkAGHRB4JFN(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: chunkAGHRB4JFN(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput57) {
          return (
            (xychartDiagram5P7HB3NDInput57 =
              this.conditionStack.length -
              1 -
              Math.abs(xychartDiagram5P7HB3NDInput57 || 0)),
            xychartDiagram5P7HB3NDInput57 >= 0
              ? this.conditionStack[xychartDiagram5P7HB3NDInput57]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (xychartDiagram5P7HB3NDInput123) {
          this.begin(xychartDiagram5P7HB3NDInput123);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          xychartDiagram5P7HB3NDInput6,
          xychartDiagram5P7HB3NDInput7,
          xychartDiagram5P7HB3NDInput8,
          xychartDiagram5P7HB3NDInput9,
        ) {
          switch (xychartDiagram5P7HB3NDInput8) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return (this.popState(), 34);
            case 3:
              return (this.popState(), 34);
            case 4:
              return 34;
            case 5:
              break;
            case 6:
              return 10;
            case 7:
              return (this.pushState("acc_title"), 19);
            case 8:
              return (this.popState(), "acc_title_value");
            case 9:
              return (this.pushState("acc_descr"), 21);
            case 10:
              return (this.popState(), "acc_descr_value");
            case 11:
              this.pushState("acc_descr_multiline");
              break;
            case 12:
              this.popState();
              break;
            case 13:
              return "acc_descr_multiline_value";
            case 14:
              return 5;
            case 15:
              return 5;
            case 16:
              return 8;
            case 17:
              return (this.pushState("axis_data"), "X_AXIS");
            case 18:
              return (this.pushState("axis_data"), "Y_AXIS");
            case 19:
              return (this.pushState("axis_band_data"), 24);
            case 20:
              return 31;
            case 21:
              return (this.pushState("data"), 16);
            case 22:
              return (this.pushState("data"), 18);
            case 23:
              return (this.pushState("data_inner"), 24);
            case 24:
              return 27;
            case 25:
              return (this.popState(), 26);
            case 26:
              this.popState();
              break;
            case 27:
              this.pushState("string");
              break;
            case 28:
              this.popState();
              break;
            case 29:
              return "STR";
            case 30:
              return 24;
            case 31:
              return 26;
            case 32:
              return 43;
            case 33:
              return "COLON";
            case 34:
              return 44;
            case 35:
              return 28;
            case 36:
              return 45;
            case 37:
              return 46;
            case 38:
              return 48;
            case 39:
              return 50;
            case 40:
              return 47;
            case 41:
              return 41;
            case 42:
              return 49;
            case 43:
              return 42;
            case 44:
              break;
            case 45:
              return 35;
            case 46:
              return 36;
          }
        }, "anonymous"),
        rules: [
          /^(?:%%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:(\r?\n))/i,
          /^(?:(\r?\n))/i,
          /^(?:[\n\r]+)/i,
          /^(?:%%[^\n]*)/i,
          /^(?:title\b)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:\})/i,
          /^(?:[^\}]*)/i,
          /^(?:xychart-beta\b)/i,
          /^(?:xychart\b)/i,
          /^(?:(?:vertical|horizontal))/i,
          /^(?:x-axis\b)/i,
          /^(?:y-axis\b)/i,
          /^(?:\[)/i,
          /^(?:-->)/i,
          /^(?:line\b)/i,
          /^(?:bar\b)/i,
          /^(?:\[)/i,
          /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,
          /^(?:\])/i,
          /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,
          /^(?:["])/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:\[)/i,
          /^(?:\])/i,
          /^(?:[A-Za-z]+)/i,
          /^(?::)/i,
          /^(?:\+)/i,
          /^(?:,)/i,
          /^(?:=)/i,
          /^(?:\*)/i,
          /^(?:#)/i,
          /^(?:[\_])/i,
          /^(?:\.)/i,
          /^(?:&)/i,
          /^(?:-)/i,
          /^(?:[0-9]+)/i,
          /^(?:\s+)/i,
          /^(?:;)/i,
          /^(?:$)/i,
        ],
        conditions: {
          data_inner: {
            rules: [
              0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26,
              27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46,
            ],
            inclusive: true,
          },
          data: {
            rules: [
              0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26,
              27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46,
            ],
            inclusive: true,
          },
          axis_band_data: {
            rules: [
              0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27,
              30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
              46,
            ],
            inclusive: true,
          },
          axis_data: {
            rules: [
              0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
              43, 44, 45, 46,
            ],
            inclusive: true,
          },
          acc_descr_multiline: {
            rules: [12, 13],
            inclusive: false,
          },
          acc_descr: {
            rules: [10],
            inclusive: false,
          },
          acc_title: {
            rules: [8],
            inclusive: false,
          },
          title: {
            rules: [],
            inclusive: false,
          },
          md_string: {
            rules: [],
            inclusive: false,
          },
          string: {
            rules: [28, 29],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function xychartDiagram5P7HB3NDHelper27() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper27, "Parser"),
      (xychartDiagram5P7HB3NDHelper27.prototype =
        xychartDiagram5P7HB3NDBinding48),
      (xychartDiagram5P7HB3NDBinding48.Parser = xychartDiagram5P7HB3NDHelper27),
      new xychartDiagram5P7HB3NDHelper27()
    );
  })();
  xychartDiagram5P7HB3NDBinding1.parser = xychartDiagram5P7HB3NDBinding1;
  xychartDiagram5P7HB3NDBinding2 = xychartDiagram5P7HB3NDBinding1;
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper1, "isBarPlot");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper2, "isBandAxisData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper3, "isLinearAxisData");
  xychartDiagram5P7HB3NDBinding3 = class {
    constructor(xychartDiagram5P7HB3NDInput122) {
      this.parentGroup = xychartDiagram5P7HB3NDInput122;
    }
    static {
      chunkAGHRB4JFN(this, "TextDimensionCalculatorWithFont");
    }
    getMaxDimension(
      xychartDiagram5P7HB3NDInput33,
      xychartDiagram5P7HB3NDInput34,
    ) {
      if (!this.parentGroup)
        return {
          width:
            xychartDiagram5P7HB3NDInput33.reduce(
              (accumulator, current) => Math.max(current.length, accumulator),
              0,
            ) * xychartDiagram5P7HB3NDInput34,
          height: xychartDiagram5P7HB3NDInput34,
        };
      let xychartDiagram5P7HB3NDBinding149 = {
          width: 0,
          height: 0,
        },
        xychartDiagram5P7HB3NDBinding150 = this.parentGroup
          .append("g")
          .attr("visibility", "hidden")
          .attr("font-size", xychartDiagram5P7HB3NDInput34);
      for (let xychartDiagram5P7HB3NDBinding191 of xychartDiagram5P7HB3NDInput33) {
        let xychartDiagram5P7HB3NDBinding193 = chunkU2HBQHQKT(
            xychartDiagram5P7HB3NDBinding150,
            1,
            xychartDiagram5P7HB3NDBinding191,
          ),
          xychartDiagram5P7HB3NDBinding194 = xychartDiagram5P7HB3NDBinding193
            ? xychartDiagram5P7HB3NDBinding193.width
            : xychartDiagram5P7HB3NDBinding191.length *
              xychartDiagram5P7HB3NDInput34,
          xychartDiagram5P7HB3NDBinding195 = xychartDiagram5P7HB3NDBinding193
            ? xychartDiagram5P7HB3NDBinding193.height
            : xychartDiagram5P7HB3NDInput34;
        xychartDiagram5P7HB3NDBinding149.width = Math.max(
          xychartDiagram5P7HB3NDBinding149.width,
          xychartDiagram5P7HB3NDBinding194,
        );
        xychartDiagram5P7HB3NDBinding149.height = Math.max(
          xychartDiagram5P7HB3NDBinding149.height,
          xychartDiagram5P7HB3NDBinding195,
        );
      }
      return (
        xychartDiagram5P7HB3NDBinding150.remove(),
        xychartDiagram5P7HB3NDBinding149
      );
    }
  };
  xychartDiagram5P7HB3NDBinding4 = 0.7;
  xychartDiagram5P7HB3NDBinding5 = 0.2;
  xychartDiagram5P7HB3NDBinding6 = class {
    constructor(
      xychartDiagram5P7HB3NDInput26,
      xychartDiagram5P7HB3NDInput27,
      xychartDiagram5P7HB3NDInput28,
      xychartDiagram5P7HB3NDInput29,
    ) {
      this.axisConfig = xychartDiagram5P7HB3NDInput26;
      this.title = xychartDiagram5P7HB3NDInput27;
      this.textDimensionCalculator = xychartDiagram5P7HB3NDInput28;
      this.axisThemeConfig = xychartDiagram5P7HB3NDInput29;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      this.axisPosition = "left";
      this.showTitle = false;
      this.showLabel = false;
      this.showTick = false;
      this.showAxisLine = false;
      this.outerPadding = 0;
      this.titleTextHeight = 0;
      this.labelTextHeight = 0;
      this.range = [0, 10];
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      this.axisPosition = "left";
    }
    static {
      chunkAGHRB4JFN(this, "BaseAxis");
    }
    setRange(xychartDiagram5P7HB3NDInput46) {
      this.range = xychartDiagram5P7HB3NDInput46;
      this.axisPosition === "left" || this.axisPosition === "right"
        ? (this.boundingRect.height =
            xychartDiagram5P7HB3NDInput46[1] - xychartDiagram5P7HB3NDInput46[0])
        : (this.boundingRect.width =
            xychartDiagram5P7HB3NDInput46[1] -
            xychartDiagram5P7HB3NDInput46[0]);
      this.recalculateScale();
    }
    getRange() {
      return [
        this.range[0] + this.outerPadding,
        this.range[1] - this.outerPadding,
      ];
    }
    setAxisPosition(xychartDiagram5P7HB3NDInput105) {
      this.axisPosition = xychartDiagram5P7HB3NDInput105;
      this.setRange(this.range);
    }
    getTickDistance() {
      let xychartDiagram5P7HB3NDBinding206 = this.getRange();
      return (
        Math.abs(
          xychartDiagram5P7HB3NDBinding206[0] -
            xychartDiagram5P7HB3NDBinding206[1],
        ) / this.getTickValues().length
      );
    }
    getAxisOuterPadding() {
      return this.outerPadding;
    }
    getLabelDimension() {
      return this.textDimensionCalculator.getMaxDimension(
        this.getTickValues().map((item) => item.toString()),
        this.axisConfig.labelFontSize,
      );
    }
    recalculateOuterPaddingToDrawBar() {
      xychartDiagram5P7HB3NDBinding4 * this.getTickDistance() >
        this.outerPadding * 2 &&
        (this.outerPadding = Math.floor(
          (xychartDiagram5P7HB3NDBinding4 * this.getTickDistance()) / 2,
        ));
      this.recalculateScale();
    }
    calculateSpaceIfDrawnHorizontally(xychartDiagram5P7HB3NDInput19) {
      let xychartDiagram5P7HB3NDBinding128 =
        xychartDiagram5P7HB3NDInput19.height;
      if (
        (this.axisConfig.showAxisLine &&
          xychartDiagram5P7HB3NDBinding128 > this.axisConfig.axisLineWidth &&
          ((xychartDiagram5P7HB3NDBinding128 -= this.axisConfig.axisLineWidth),
          (this.showAxisLine = true)),
        this.axisConfig.showLabel)
      ) {
        let xychartDiagram5P7HB3NDBinding173 = this.getLabelDimension(),
          xychartDiagram5P7HB3NDBinding174 =
            xychartDiagram5P7HB3NDBinding5 *
            xychartDiagram5P7HB3NDInput19.width;
        this.outerPadding = Math.min(
          xychartDiagram5P7HB3NDBinding173.width / 2,
          xychartDiagram5P7HB3NDBinding174,
        );
        let xychartDiagram5P7HB3NDBinding175 =
          xychartDiagram5P7HB3NDBinding173.height +
          this.axisConfig.labelPadding * 2;
        this.labelTextHeight = xychartDiagram5P7HB3NDBinding173.height;
        xychartDiagram5P7HB3NDBinding175 <= xychartDiagram5P7HB3NDBinding128 &&
          ((xychartDiagram5P7HB3NDBinding128 -=
            xychartDiagram5P7HB3NDBinding175),
          (this.showLabel = true));
      }
      if (
        (this.axisConfig.showTick &&
          xychartDiagram5P7HB3NDBinding128 >= this.axisConfig.tickLength &&
          ((this.showTick = true),
          (xychartDiagram5P7HB3NDBinding128 -= this.axisConfig.tickLength)),
        this.axisConfig.showTitle && this.title)
      ) {
        let xychartDiagram5P7HB3NDBinding168 =
            this.textDimensionCalculator.getMaxDimension(
              [this.title],
              this.axisConfig.titleFontSize,
            ),
          xychartDiagram5P7HB3NDBinding169 =
            xychartDiagram5P7HB3NDBinding168.height +
            this.axisConfig.titlePadding * 2;
        this.titleTextHeight = xychartDiagram5P7HB3NDBinding168.height;
        xychartDiagram5P7HB3NDBinding169 <= xychartDiagram5P7HB3NDBinding128 &&
          ((xychartDiagram5P7HB3NDBinding128 -=
            xychartDiagram5P7HB3NDBinding169),
          (this.showTitle = true));
      }
      this.boundingRect.width = xychartDiagram5P7HB3NDInput19.width;
      this.boundingRect.height =
        xychartDiagram5P7HB3NDInput19.height - xychartDiagram5P7HB3NDBinding128;
    }
    calculateSpaceIfDrawnVertical(xychartDiagram5P7HB3NDInput21) {
      let xychartDiagram5P7HB3NDBinding139 =
        xychartDiagram5P7HB3NDInput21.width;
      if (
        (this.axisConfig.showAxisLine &&
          xychartDiagram5P7HB3NDBinding139 > this.axisConfig.axisLineWidth &&
          ((xychartDiagram5P7HB3NDBinding139 -= this.axisConfig.axisLineWidth),
          (this.showAxisLine = true)),
        this.axisConfig.showLabel)
      ) {
        let xychartDiagram5P7HB3NDBinding186 = this.getLabelDimension(),
          xychartDiagram5P7HB3NDBinding187 =
            xychartDiagram5P7HB3NDBinding5 *
            xychartDiagram5P7HB3NDInput21.height;
        this.outerPadding = Math.min(
          xychartDiagram5P7HB3NDBinding186.height / 2,
          xychartDiagram5P7HB3NDBinding187,
        );
        let xychartDiagram5P7HB3NDBinding188 =
          xychartDiagram5P7HB3NDBinding186.width +
          this.axisConfig.labelPadding * 2;
        xychartDiagram5P7HB3NDBinding188 <= xychartDiagram5P7HB3NDBinding139 &&
          ((xychartDiagram5P7HB3NDBinding139 -=
            xychartDiagram5P7HB3NDBinding188),
          (this.showLabel = true));
      }
      if (
        (this.axisConfig.showTick &&
          xychartDiagram5P7HB3NDBinding139 >= this.axisConfig.tickLength &&
          ((this.showTick = true),
          (xychartDiagram5P7HB3NDBinding139 -= this.axisConfig.tickLength)),
        this.axisConfig.showTitle && this.title)
      ) {
        let xychartDiagram5P7HB3NDBinding170 =
            this.textDimensionCalculator.getMaxDimension(
              [this.title],
              this.axisConfig.titleFontSize,
            ),
          xychartDiagram5P7HB3NDBinding171 =
            xychartDiagram5P7HB3NDBinding170.height +
            this.axisConfig.titlePadding * 2;
        this.titleTextHeight = xychartDiagram5P7HB3NDBinding170.height;
        xychartDiagram5P7HB3NDBinding171 <= xychartDiagram5P7HB3NDBinding139 &&
          ((xychartDiagram5P7HB3NDBinding139 -=
            xychartDiagram5P7HB3NDBinding171),
          (this.showTitle = true));
      }
      this.boundingRect.width =
        xychartDiagram5P7HB3NDInput21.width - xychartDiagram5P7HB3NDBinding139;
      this.boundingRect.height = xychartDiagram5P7HB3NDInput21.height;
    }
    calculateSpace(xychartDiagram5P7HB3NDInput39) {
      return (
        this.axisPosition === "left" || this.axisPosition === "right"
          ? this.calculateSpaceIfDrawnVertical(xychartDiagram5P7HB3NDInput39)
          : this.calculateSpaceIfDrawnHorizontally(
              xychartDiagram5P7HB3NDInput39,
            ),
        this.recalculateScale(),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    setBoundingBoxXY(xychartDiagram5P7HB3NDInput101) {
      this.boundingRect.x = xychartDiagram5P7HB3NDInput101.x;
      this.boundingRect.y = xychartDiagram5P7HB3NDInput101.y;
    }
    getDrawableElementsForLeftAxis() {
      let xychartDiagram5P7HB3NDBinding91 = [];
      if (this.showAxisLine) {
        let xychartDiagram5P7HB3NDBinding153 =
          this.boundingRect.x +
          this.boundingRect.width -
          this.axisConfig.axisLineWidth / 2;
        xychartDiagram5P7HB3NDBinding91.push({
          type: "path",
          groupTexts: ["left-axis", "axisl-line"],
          data: [
            {
              path: `M ${xychartDiagram5P7HB3NDBinding153},${this.boundingRect.y} L ${xychartDiagram5P7HB3NDBinding153},${this.boundingRect.y + this.boundingRect.height} `,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagram5P7HB3NDBinding91.push({
            type: "text",
            groupTexts: ["left-axis", "label"],
            data: this.getTickValues().map((item) => ({
              text: item.toString(),
              x:
                this.boundingRect.x +
                this.boundingRect.width -
                (this.showLabel ? this.axisConfig.labelPadding : 0) -
                (this.showTick ? this.axisConfig.tickLength : 0) -
                (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
              y: this.getScaleValue(item),
              fill: this.axisThemeConfig.labelColor,
              fontSize: this.axisConfig.labelFontSize,
              rotation: 0,
              verticalPos: "middle",
              horizontalPos: "right",
            })),
          }),
        this.showTick)
      ) {
        let xychartDiagram5P7HB3NDBinding152 =
          this.boundingRect.x +
          this.boundingRect.width -
          (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        xychartDiagram5P7HB3NDBinding91.push({
          type: "path",
          groupTexts: ["left-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${xychartDiagram5P7HB3NDBinding152},${this.getScaleValue(item)} L ${xychartDiagram5P7HB3NDBinding152 - this.axisConfig.tickLength},${this.getScaleValue(item)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagram5P7HB3NDBinding91.push({
            type: "text",
            groupTexts: ["left-axis", "title"],
            data: [
              {
                text: this.title,
                x: this.boundingRect.x + this.axisConfig.titlePadding,
                y: this.boundingRect.y + this.boundingRect.height / 2,
                fill: this.axisThemeConfig.titleColor,
                fontSize: this.axisConfig.titleFontSize,
                rotation: 270,
                verticalPos: "top",
                horizontalPos: "center",
              },
            ],
          }),
        xychartDiagram5P7HB3NDBinding91
      );
    }
    getDrawableElementsForBottomAxis() {
      let xychartDiagram5P7HB3NDBinding92 = [];
      if (this.showAxisLine) {
        let xychartDiagram5P7HB3NDBinding158 =
          this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
        xychartDiagram5P7HB3NDBinding92.push({
          type: "path",
          groupTexts: ["bottom-axis", "axis-line"],
          data: [
            {
              path: `M ${this.boundingRect.x},${xychartDiagram5P7HB3NDBinding158} L ${this.boundingRect.x + this.boundingRect.width},${xychartDiagram5P7HB3NDBinding158}`,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagram5P7HB3NDBinding92.push({
            type: "text",
            groupTexts: ["bottom-axis", "label"],
            data: this.getTickValues().map((item) => ({
              text: item.toString(),
              x: this.getScaleValue(item),
              y:
                this.boundingRect.y +
                this.axisConfig.labelPadding +
                (this.showTick ? this.axisConfig.tickLength : 0) +
                (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
              fill: this.axisThemeConfig.labelColor,
              fontSize: this.axisConfig.labelFontSize,
              rotation: 0,
              verticalPos: "top",
              horizontalPos: "center",
            })),
          }),
        this.showTick)
      ) {
        let xychartDiagram5P7HB3NDBinding155 =
          this.boundingRect.y +
          (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        xychartDiagram5P7HB3NDBinding92.push({
          type: "path",
          groupTexts: ["bottom-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${this.getScaleValue(item)},${xychartDiagram5P7HB3NDBinding155} L ${this.getScaleValue(item)},${xychartDiagram5P7HB3NDBinding155 + this.axisConfig.tickLength}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagram5P7HB3NDBinding92.push({
            type: "text",
            groupTexts: ["bottom-axis", "title"],
            data: [
              {
                text: this.title,
                x: this.range[0] + (this.range[1] - this.range[0]) / 2,
                y:
                  this.boundingRect.y +
                  this.boundingRect.height -
                  this.axisConfig.titlePadding -
                  this.titleTextHeight,
                fill: this.axisThemeConfig.titleColor,
                fontSize: this.axisConfig.titleFontSize,
                rotation: 0,
                verticalPos: "top",
                horizontalPos: "center",
              },
            ],
          }),
        xychartDiagram5P7HB3NDBinding92
      );
    }
    getDrawableElementsForTopAxis() {
      let xychartDiagram5P7HB3NDBinding93 = [];
      if (this.showAxisLine) {
        let xychartDiagram5P7HB3NDBinding154 =
          this.boundingRect.y +
          this.boundingRect.height -
          this.axisConfig.axisLineWidth / 2;
        xychartDiagram5P7HB3NDBinding93.push({
          type: "path",
          groupTexts: ["top-axis", "axis-line"],
          data: [
            {
              path: `M ${this.boundingRect.x},${xychartDiagram5P7HB3NDBinding154} L ${this.boundingRect.x + this.boundingRect.width},${xychartDiagram5P7HB3NDBinding154}`,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagram5P7HB3NDBinding93.push({
            type: "text",
            groupTexts: ["top-axis", "label"],
            data: this.getTickValues().map((item) => ({
              text: item.toString(),
              x: this.getScaleValue(item),
              y:
                this.boundingRect.y +
                (this.showTitle
                  ? this.titleTextHeight + this.axisConfig.titlePadding * 2
                  : 0) +
                this.axisConfig.labelPadding,
              fill: this.axisThemeConfig.labelColor,
              fontSize: this.axisConfig.labelFontSize,
              rotation: 0,
              verticalPos: "top",
              horizontalPos: "center",
            })),
          }),
        this.showTick)
      ) {
        let xychartDiagram5P7HB3NDBinding151 = this.boundingRect.y;
        xychartDiagram5P7HB3NDBinding93.push({
          type: "path",
          groupTexts: ["top-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${this.getScaleValue(item)},${xychartDiagram5P7HB3NDBinding151 + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(item)},${xychartDiagram5P7HB3NDBinding151 + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagram5P7HB3NDBinding93.push({
            type: "text",
            groupTexts: ["top-axis", "title"],
            data: [
              {
                text: this.title,
                x: this.boundingRect.x + this.boundingRect.width / 2,
                y: this.boundingRect.y + this.axisConfig.titlePadding,
                fill: this.axisThemeConfig.titleColor,
                fontSize: this.axisConfig.titleFontSize,
                rotation: 0,
                verticalPos: "top",
                horizontalPos: "center",
              },
            ],
          }),
        xychartDiagram5P7HB3NDBinding93
      );
    }
    getDrawableElements() {
      if (this.axisPosition === "left")
        return this.getDrawableElementsForLeftAxis();
      if (this.axisPosition === "right")
        throw Error("Drawing of right axis is not implemented");
      return this.axisPosition === "bottom"
        ? this.getDrawableElementsForBottomAxis()
        : this.axisPosition === "top"
          ? this.getDrawableElementsForTopAxis()
          : [];
    }
  };
  xychartDiagram5P7HB3NDBinding7 = class extends (
    xychartDiagram5P7HB3NDBinding6
  ) {
    static {
      chunkAGHRB4JFN(this, "BandAxis");
    }
    constructor(
      xychartDiagram5P7HB3NDInput65,
      xychartDiagram5P7HB3NDInput66,
      xychartDiagram5P7HB3NDInput67,
      xychartDiagram5P7HB3NDInput68,
      xychartDiagram5P7HB3NDInput69,
    ) {
      super(
        xychartDiagram5P7HB3NDInput65,
        xychartDiagram5P7HB3NDInput68,
        xychartDiagram5P7HB3NDInput69,
        xychartDiagram5P7HB3NDInput66,
      );
      this.categories = xychartDiagram5P7HB3NDInput67;
      this.scale = AppInitialHat()
        .domain(this.categories)
        .range(this.getRange());
    }
    setRange(xychartDiagram5P7HB3NDInput127) {
      super.setRange(xychartDiagram5P7HB3NDInput127);
    }
    recalculateScale() {
      this.scale = AppInitialHat()
        .domain(this.categories)
        .range(this.getRange())
        .paddingInner(1)
        .paddingOuter(0)
        .align(0.5);
      chunkAGHRB4JFI.trace(
        "BandAxis axis final categories, range: ",
        this.categories,
        this.getRange(),
      );
    }
    getTickValues() {
      return this.categories;
    }
    getScaleValue(xychartDiagram5P7HB3NDInput110) {
      return this.scale(xychartDiagram5P7HB3NDInput110) ?? this.getRange()[0];
    }
  };
  xychartDiagram5P7HB3NDBinding8 = class extends (
    xychartDiagram5P7HB3NDBinding6
  ) {
    static {
      chunkAGHRB4JFN(this, "LinearAxis");
    }
    constructor(
      xychartDiagram5P7HB3NDInput70,
      xychartDiagram5P7HB3NDInput71,
      xychartDiagram5P7HB3NDInput72,
      xychartDiagram5P7HB3NDInput73,
      xychartDiagram5P7HB3NDInput74,
    ) {
      super(
        xychartDiagram5P7HB3NDInput70,
        xychartDiagram5P7HB3NDInput73,
        xychartDiagram5P7HB3NDInput74,
        xychartDiagram5P7HB3NDInput71,
      );
      this.domain = xychartDiagram5P7HB3NDInput72;
      this.scale = AppInitialMat().domain(this.domain).range(this.getRange());
    }
    getTickValues() {
      return this.scale.ticks();
    }
    recalculateScale() {
      let xychartDiagram5P7HB3NDBinding201 = [...this.domain];
      this.axisPosition === "left" &&
        xychartDiagram5P7HB3NDBinding201.reverse();
      this.scale = AppInitialMat()
        .domain(xychartDiagram5P7HB3NDBinding201)
        .range(this.getRange());
    }
    getScaleValue(xychartDiagram5P7HB3NDInput121) {
      return this.scale(xychartDiagram5P7HB3NDInput121);
    }
  };
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper4, "getAxis");
  xychartDiagram5P7HB3NDBinding9 = class {
    constructor(
      xychartDiagram5P7HB3NDInput41,
      xychartDiagram5P7HB3NDInput42,
      xychartDiagram5P7HB3NDInput43,
      xychartDiagram5P7HB3NDInput44,
    ) {
      this.textDimensionCalculator = xychartDiagram5P7HB3NDInput41;
      this.chartConfig = xychartDiagram5P7HB3NDInput42;
      this.chartData = xychartDiagram5P7HB3NDInput43;
      this.chartThemeConfig = xychartDiagram5P7HB3NDInput44;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      this.showChartTitle = false;
    }
    static {
      chunkAGHRB4JFN(this, "ChartTitle");
    }
    setBoundingBoxXY(xychartDiagram5P7HB3NDInput102) {
      this.boundingRect.x = xychartDiagram5P7HB3NDInput102.x;
      this.boundingRect.y = xychartDiagram5P7HB3NDInput102.y;
    }
    calculateSpace(xychartDiagram5P7HB3NDInput32) {
      let xychartDiagram5P7HB3NDBinding146 =
          this.textDimensionCalculator.getMaxDimension(
            [this.chartData.title],
            this.chartConfig.titleFontSize,
          ),
        xychartDiagram5P7HB3NDBinding147 = Math.max(
          xychartDiagram5P7HB3NDBinding146.width,
          xychartDiagram5P7HB3NDInput32.width,
        ),
        xychartDiagram5P7HB3NDBinding148 =
          xychartDiagram5P7HB3NDBinding146.height +
          2 * this.chartConfig.titlePadding;
      return (
        xychartDiagram5P7HB3NDBinding146.width <=
          xychartDiagram5P7HB3NDBinding147 &&
          xychartDiagram5P7HB3NDBinding146.height <=
            xychartDiagram5P7HB3NDBinding148 &&
          this.chartConfig.showTitle &&
          this.chartData.title &&
          ((this.boundingRect.width = xychartDiagram5P7HB3NDBinding147),
          (this.boundingRect.height = xychartDiagram5P7HB3NDBinding148),
          (this.showChartTitle = true)),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    getDrawableElements() {
      let xychartDiagram5P7HB3NDBinding145 = [];
      return (
        this.showChartTitle &&
          xychartDiagram5P7HB3NDBinding145.push({
            groupTexts: ["chart-title"],
            type: "text",
            data: [
              {
                fontSize: this.chartConfig.titleFontSize,
                text: this.chartData.title,
                verticalPos: "middle",
                horizontalPos: "center",
                x: this.boundingRect.x + this.boundingRect.width / 2,
                y: this.boundingRect.y + this.boundingRect.height / 2,
                fill: this.chartThemeConfig.titleColor,
                rotation: 0,
              },
            ],
          }),
        xychartDiagram5P7HB3NDBinding145
      );
    }
  };
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper5, "getChartTitleComponent");
  xychartDiagram5P7HB3NDBinding10 = class {
    constructor(
      xychartDiagram5P7HB3NDInput58,
      xychartDiagram5P7HB3NDInput59,
      xychartDiagram5P7HB3NDInput60,
      xychartDiagram5P7HB3NDInput61,
      xychartDiagram5P7HB3NDInput62,
    ) {
      this.plotData = xychartDiagram5P7HB3NDInput58;
      this.xAxis = xychartDiagram5P7HB3NDInput59;
      this.yAxis = xychartDiagram5P7HB3NDInput60;
      this.orientation = xychartDiagram5P7HB3NDInput61;
      this.plotIndex = xychartDiagram5P7HB3NDInput62;
    }
    static {
      chunkAGHRB4JFN(this, "LinePlot");
    }
    getDrawableElement() {
      let xychartDiagram5P7HB3NDBinding141 = this.plotData.data.map((item) => [
          this.xAxis.getScaleValue(item[0]),
          this.yAxis.getScaleValue(item[1]),
        ]),
        xychartDiagram5P7HB3NDBinding142;
      return (
        (xychartDiagram5P7HB3NDBinding142 =
          this.orientation === "horizontal"
            ? AppInitialAit()
                .y(
                  (xychartDiagram5P7HB3NDInput153) =>
                    xychartDiagram5P7HB3NDInput153[0],
                )
                .x(
                  (xychartDiagram5P7HB3NDInput154) =>
                    xychartDiagram5P7HB3NDInput154[1],
                )(xychartDiagram5P7HB3NDBinding141)
            : AppInitialAit()
                .x(
                  (xychartDiagram5P7HB3NDInput155) =>
                    xychartDiagram5P7HB3NDInput155[0],
                )
                .y(
                  (xychartDiagram5P7HB3NDInput156) =>
                    xychartDiagram5P7HB3NDInput156[1],
                )(xychartDiagram5P7HB3NDBinding141)),
        xychartDiagram5P7HB3NDBinding142
          ? [
              {
                groupTexts: ["plot", `line-plot-${this.plotIndex}`],
                type: "path",
                data: [
                  {
                    path: xychartDiagram5P7HB3NDBinding142,
                    strokeFill: this.plotData.strokeFill,
                    strokeWidth: this.plotData.strokeWidth,
                  },
                ],
              },
            ]
          : []
      );
    }
  };
  _e = class {
    constructor(
      xychartDiagram5P7HB3NDInput48,
      xychartDiagram5P7HB3NDInput49,
      xychartDiagram5P7HB3NDInput50,
      xychartDiagram5P7HB3NDInput51,
      xychartDiagram5P7HB3NDInput52,
      xychartDiagram5P7HB3NDInput53,
    ) {
      this.barData = xychartDiagram5P7HB3NDInput48;
      this.boundingRect = xychartDiagram5P7HB3NDInput49;
      this.xAxis = xychartDiagram5P7HB3NDInput50;
      this.yAxis = xychartDiagram5P7HB3NDInput51;
      this.orientation = xychartDiagram5P7HB3NDInput52;
      this.plotIndex = xychartDiagram5P7HB3NDInput53;
    }
    static {
      chunkAGHRB4JFN(this, "BarPlot");
    }
    getDrawableElement() {
      let xychartDiagram5P7HB3NDBinding125 = this.barData.data.map((item) => [
          this.xAxis.getScaleValue(item[0]),
          this.yAxis.getScaleValue(item[1]),
        ]),
        xychartDiagram5P7HB3NDBinding126 =
          Math.min(
            this.xAxis.getAxisOuterPadding() * 2,
            this.xAxis.getTickDistance(),
          ) * 0.95,
        xychartDiagram5P7HB3NDBinding127 = xychartDiagram5P7HB3NDBinding126 / 2;
      return this.orientation === "horizontal"
        ? [
            {
              groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
              type: "rect",
              data: xychartDiagram5P7HB3NDBinding125.map((item) => ({
                x: this.boundingRect.x,
                y: item[0] - xychartDiagram5P7HB3NDBinding127,
                height: xychartDiagram5P7HB3NDBinding126,
                width: item[1] - this.boundingRect.x,
                fill: this.barData.fill,
                strokeWidth: 0,
                strokeFill: this.barData.fill,
              })),
            },
          ]
        : [
            {
              groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
              type: "rect",
              data: xychartDiagram5P7HB3NDBinding125.map((item) => ({
                x: item[0] - xychartDiagram5P7HB3NDBinding127,
                y: item[1],
                width: xychartDiagram5P7HB3NDBinding126,
                height:
                  this.boundingRect.y + this.boundingRect.height - item[1],
                fill: this.barData.fill,
                strokeWidth: 0,
                strokeFill: this.barData.fill,
              })),
            },
          ];
    }
  };
  xychartDiagram5P7HB3NDBinding11 = class {
    constructor(
      xychartDiagram5P7HB3NDInput54,
      xychartDiagram5P7HB3NDInput55,
      xychartDiagram5P7HB3NDInput56,
    ) {
      this.chartConfig = xychartDiagram5P7HB3NDInput54;
      this.chartData = xychartDiagram5P7HB3NDInput55;
      this.chartThemeConfig = xychartDiagram5P7HB3NDInput56;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    }
    static {
      chunkAGHRB4JFN(this, "BasePlot");
    }
    setAxes(xychartDiagram5P7HB3NDInput112, xychartDiagram5P7HB3NDInput113) {
      this.xAxis = xychartDiagram5P7HB3NDInput112;
      this.yAxis = xychartDiagram5P7HB3NDInput113;
    }
    setBoundingBoxXY(xychartDiagram5P7HB3NDInput103) {
      this.boundingRect.x = xychartDiagram5P7HB3NDInput103.x;
      this.boundingRect.y = xychartDiagram5P7HB3NDInput103.y;
    }
    calculateSpace(xychartDiagram5P7HB3NDInput47) {
      return (
        (this.boundingRect.width = xychartDiagram5P7HB3NDInput47.width),
        (this.boundingRect.height = xychartDiagram5P7HB3NDInput47.height),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    getDrawableElements() {
      if (!(this.xAxis && this.yAxis))
        throw Error("Axes must be passed to render Plots");
      let xychartDiagram5P7HB3NDBinding140 = [];
      for (let [
        xychartDiagram5P7HB3NDBinding143,
        xychartDiagram5P7HB3NDBinding144,
      ] of this.chartData.plots.entries())
        switch (xychartDiagram5P7HB3NDBinding144.type) {
          case "line":
            {
              let xychartDiagram5P7HB3NDBinding178 =
                new xychartDiagram5P7HB3NDBinding10(
                  xychartDiagram5P7HB3NDBinding144,
                  this.xAxis,
                  this.yAxis,
                  this.chartConfig.chartOrientation,
                  xychartDiagram5P7HB3NDBinding143,
                );
              xychartDiagram5P7HB3NDBinding140.push(
                ...xychartDiagram5P7HB3NDBinding178.getDrawableElement(),
              );
            }
            break;
          case "bar":
            {
              let xychartDiagram5P7HB3NDBinding172 = new _e(
                xychartDiagram5P7HB3NDBinding144,
                this.boundingRect,
                this.xAxis,
                this.yAxis,
                this.chartConfig.chartOrientation,
                xychartDiagram5P7HB3NDBinding143,
              );
              xychartDiagram5P7HB3NDBinding140.push(
                ...xychartDiagram5P7HB3NDBinding172.getDrawableElement(),
              );
            }
            break;
        }
      return xychartDiagram5P7HB3NDBinding140;
    }
  };
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper6, "getPlotComponent");
  xychartDiagram5P7HB3NDBinding12 = class {
    constructor(
      xychartDiagram5P7HB3NDInput22,
      xychartDiagram5P7HB3NDInput23,
      xychartDiagram5P7HB3NDInput24,
      xychartDiagram5P7HB3NDInput25,
    ) {
      this.chartConfig = xychartDiagram5P7HB3NDInput22;
      this.chartData = xychartDiagram5P7HB3NDInput23;
      this.componentStore = {
        title: xychartDiagram5P7HB3NDHelper5(
          xychartDiagram5P7HB3NDInput22,
          xychartDiagram5P7HB3NDInput23,
          xychartDiagram5P7HB3NDInput24,
          xychartDiagram5P7HB3NDInput25,
        ),
        plot: xychartDiagram5P7HB3NDHelper6(
          xychartDiagram5P7HB3NDInput22,
          xychartDiagram5P7HB3NDInput23,
          xychartDiagram5P7HB3NDInput24,
        ),
        xAxis: xychartDiagram5P7HB3NDHelper4(
          xychartDiagram5P7HB3NDInput23.xAxis,
          xychartDiagram5P7HB3NDInput22.xAxis,
          {
            titleColor: xychartDiagram5P7HB3NDInput24.xAxisTitleColor,
            labelColor: xychartDiagram5P7HB3NDInput24.xAxisLabelColor,
            tickColor: xychartDiagram5P7HB3NDInput24.xAxisTickColor,
            axisLineColor: xychartDiagram5P7HB3NDInput24.xAxisLineColor,
          },
          xychartDiagram5P7HB3NDInput25,
        ),
        yAxis: xychartDiagram5P7HB3NDHelper4(
          xychartDiagram5P7HB3NDInput23.yAxis,
          xychartDiagram5P7HB3NDInput22.yAxis,
          {
            titleColor: xychartDiagram5P7HB3NDInput24.yAxisTitleColor,
            labelColor: xychartDiagram5P7HB3NDInput24.yAxisLabelColor,
            tickColor: xychartDiagram5P7HB3NDInput24.yAxisTickColor,
            axisLineColor: xychartDiagram5P7HB3NDInput24.yAxisLineColor,
          },
          xychartDiagram5P7HB3NDInput25,
        ),
      };
    }
    static {
      chunkAGHRB4JFN(this, "Orchestrator");
    }
    calculateVerticalSpace() {
      let xychartDiagram5P7HB3NDBinding111 = this.chartConfig.width,
        xychartDiagram5P7HB3NDBinding112 = this.chartConfig.height,
        xychartDiagram5P7HB3NDBinding113 = 0,
        xychartDiagram5P7HB3NDBinding114 = 0,
        xychartDiagram5P7HB3NDBinding115 = Math.floor(
          (xychartDiagram5P7HB3NDBinding111 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagram5P7HB3NDBinding116 = Math.floor(
          (xychartDiagram5P7HB3NDBinding112 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagram5P7HB3NDBinding117 =
          this.componentStore.plot.calculateSpace({
            width: xychartDiagram5P7HB3NDBinding115,
            height: xychartDiagram5P7HB3NDBinding116,
          });
      xychartDiagram5P7HB3NDBinding111 -=
        xychartDiagram5P7HB3NDBinding117.width;
      xychartDiagram5P7HB3NDBinding112 -=
        xychartDiagram5P7HB3NDBinding117.height;
      xychartDiagram5P7HB3NDBinding117 =
        this.componentStore.title.calculateSpace({
          width: this.chartConfig.width,
          height: xychartDiagram5P7HB3NDBinding112,
        });
      xychartDiagram5P7HB3NDBinding114 =
        xychartDiagram5P7HB3NDBinding117.height;
      xychartDiagram5P7HB3NDBinding112 -=
        xychartDiagram5P7HB3NDBinding117.height;
      this.componentStore.xAxis.setAxisPosition("bottom");
      xychartDiagram5P7HB3NDBinding117 =
        this.componentStore.xAxis.calculateSpace({
          width: xychartDiagram5P7HB3NDBinding111,
          height: xychartDiagram5P7HB3NDBinding112,
        });
      xychartDiagram5P7HB3NDBinding112 -=
        xychartDiagram5P7HB3NDBinding117.height;
      this.componentStore.yAxis.setAxisPosition("left");
      xychartDiagram5P7HB3NDBinding117 =
        this.componentStore.yAxis.calculateSpace({
          width: xychartDiagram5P7HB3NDBinding111,
          height: xychartDiagram5P7HB3NDBinding112,
        });
      xychartDiagram5P7HB3NDBinding113 = xychartDiagram5P7HB3NDBinding117.width;
      xychartDiagram5P7HB3NDBinding111 -=
        xychartDiagram5P7HB3NDBinding117.width;
      xychartDiagram5P7HB3NDBinding111 > 0 &&
        ((xychartDiagram5P7HB3NDBinding115 += xychartDiagram5P7HB3NDBinding111),
        (xychartDiagram5P7HB3NDBinding111 = 0));
      xychartDiagram5P7HB3NDBinding112 > 0 &&
        ((xychartDiagram5P7HB3NDBinding116 += xychartDiagram5P7HB3NDBinding112),
        (xychartDiagram5P7HB3NDBinding112 = 0));
      this.componentStore.plot.calculateSpace({
        width: xychartDiagram5P7HB3NDBinding115,
        height: xychartDiagram5P7HB3NDBinding116,
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: xychartDiagram5P7HB3NDBinding113,
        y: xychartDiagram5P7HB3NDBinding114,
      });
      this.componentStore.xAxis.setRange([
        xychartDiagram5P7HB3NDBinding113,
        xychartDiagram5P7HB3NDBinding113 + xychartDiagram5P7HB3NDBinding115,
      ]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: xychartDiagram5P7HB3NDBinding113,
        y: xychartDiagram5P7HB3NDBinding114 + xychartDiagram5P7HB3NDBinding116,
      });
      this.componentStore.yAxis.setRange([
        xychartDiagram5P7HB3NDBinding114,
        xychartDiagram5P7HB3NDBinding114 + xychartDiagram5P7HB3NDBinding116,
      ]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: 0,
        y: xychartDiagram5P7HB3NDBinding114,
      });
      this.chartData.plots.some((item) =>
        xychartDiagram5P7HB3NDHelper1(item),
      ) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
    calculateHorizontalSpace() {
      let xychartDiagram5P7HB3NDBinding103 = this.chartConfig.width,
        xychartDiagram5P7HB3NDBinding104 = this.chartConfig.height,
        xychartDiagram5P7HB3NDBinding105 = 0,
        xychartDiagram5P7HB3NDBinding106 = 0,
        xychartDiagram5P7HB3NDBinding107 = 0,
        xychartDiagram5P7HB3NDBinding108 = Math.floor(
          (xychartDiagram5P7HB3NDBinding103 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagram5P7HB3NDBinding109 = Math.floor(
          (xychartDiagram5P7HB3NDBinding104 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagram5P7HB3NDBinding110 =
          this.componentStore.plot.calculateSpace({
            width: xychartDiagram5P7HB3NDBinding108,
            height: xychartDiagram5P7HB3NDBinding109,
          });
      xychartDiagram5P7HB3NDBinding103 -=
        xychartDiagram5P7HB3NDBinding110.width;
      xychartDiagram5P7HB3NDBinding104 -=
        xychartDiagram5P7HB3NDBinding110.height;
      xychartDiagram5P7HB3NDBinding110 =
        this.componentStore.title.calculateSpace({
          width: this.chartConfig.width,
          height: xychartDiagram5P7HB3NDBinding104,
        });
      xychartDiagram5P7HB3NDBinding105 =
        xychartDiagram5P7HB3NDBinding110.height;
      xychartDiagram5P7HB3NDBinding104 -=
        xychartDiagram5P7HB3NDBinding110.height;
      this.componentStore.xAxis.setAxisPosition("left");
      xychartDiagram5P7HB3NDBinding110 =
        this.componentStore.xAxis.calculateSpace({
          width: xychartDiagram5P7HB3NDBinding103,
          height: xychartDiagram5P7HB3NDBinding104,
        });
      xychartDiagram5P7HB3NDBinding103 -=
        xychartDiagram5P7HB3NDBinding110.width;
      xychartDiagram5P7HB3NDBinding106 = xychartDiagram5P7HB3NDBinding110.width;
      this.componentStore.yAxis.setAxisPosition("top");
      xychartDiagram5P7HB3NDBinding110 =
        this.componentStore.yAxis.calculateSpace({
          width: xychartDiagram5P7HB3NDBinding103,
          height: xychartDiagram5P7HB3NDBinding104,
        });
      xychartDiagram5P7HB3NDBinding104 -=
        xychartDiagram5P7HB3NDBinding110.height;
      xychartDiagram5P7HB3NDBinding107 =
        xychartDiagram5P7HB3NDBinding105 +
        xychartDiagram5P7HB3NDBinding110.height;
      xychartDiagram5P7HB3NDBinding103 > 0 &&
        ((xychartDiagram5P7HB3NDBinding108 += xychartDiagram5P7HB3NDBinding103),
        (xychartDiagram5P7HB3NDBinding103 = 0));
      xychartDiagram5P7HB3NDBinding104 > 0 &&
        ((xychartDiagram5P7HB3NDBinding109 += xychartDiagram5P7HB3NDBinding104),
        (xychartDiagram5P7HB3NDBinding104 = 0));
      this.componentStore.plot.calculateSpace({
        width: xychartDiagram5P7HB3NDBinding108,
        height: xychartDiagram5P7HB3NDBinding109,
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: xychartDiagram5P7HB3NDBinding106,
        y: xychartDiagram5P7HB3NDBinding107,
      });
      this.componentStore.yAxis.setRange([
        xychartDiagram5P7HB3NDBinding106,
        xychartDiagram5P7HB3NDBinding106 + xychartDiagram5P7HB3NDBinding108,
      ]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: xychartDiagram5P7HB3NDBinding106,
        y: xychartDiagram5P7HB3NDBinding105,
      });
      this.componentStore.xAxis.setRange([
        xychartDiagram5P7HB3NDBinding107,
        xychartDiagram5P7HB3NDBinding107 + xychartDiagram5P7HB3NDBinding109,
      ]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: 0,
        y: xychartDiagram5P7HB3NDBinding107,
      });
      this.chartData.plots.some((item) =>
        xychartDiagram5P7HB3NDHelper1(item),
      ) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
    calculateSpace() {
      this.chartConfig.chartOrientation === "horizontal"
        ? this.calculateHorizontalSpace()
        : this.calculateVerticalSpace();
    }
    getDrawableElement() {
      this.calculateSpace();
      let xychartDiagram5P7HB3NDBinding167 = [];
      this.componentStore.plot.setAxes(
        this.componentStore.xAxis,
        this.componentStore.yAxis,
      );
      for (let xychartDiagram5P7HB3NDBinding209 of Object.values(
        this.componentStore,
      ))
        xychartDiagram5P7HB3NDBinding167.push(
          ...xychartDiagram5P7HB3NDBinding209.getDrawableElements(),
        );
      return xychartDiagram5P7HB3NDBinding167;
    }
  };
  xychartDiagram5P7HB3NDBinding13 = class {
    static {
      chunkAGHRB4JFN(this, "XYChartBuilder");
    }
    static build(
      xychartDiagram5P7HB3NDInput106,
      xychartDiagram5P7HB3NDInput107,
      xychartDiagram5P7HB3NDInput108,
      xychartDiagram5P7HB3NDInput109,
    ) {
      return new xychartDiagram5P7HB3NDBinding12(
        xychartDiagram5P7HB3NDInput106,
        xychartDiagram5P7HB3NDInput107,
        xychartDiagram5P7HB3NDInput108,
        xychartDiagram5P7HB3NDInput109,
      ).getDrawableElement();
    }
  };
  xychartDiagram5P7HB3NDBinding14 = 0;
  xychartDiagram5P7HB3NDBinding15 = xychartDiagram5P7HB3NDHelper8();
  xychartDiagram5P7HB3NDBinding16 = xychartDiagram5P7HB3NDHelper7();
  xychartDiagram5P7HB3NDBinding17 = xychartDiagram5P7HB3NDHelper9();
  xychartDiagram5P7HB3NDBinding18 =
    xychartDiagram5P7HB3NDBinding16.plotColorPalette
      .split(",")
      .map((item) => item.trim());
  xychartDiagram5P7HB3NDBinding19 = false;
  $ = false;
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper7, "getChartDefaultThemeConfig");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper8, "getChartDefaultConfig");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper9, "getChartDefaultData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper10, "textSanitizer");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper11, "setTmpSVGG");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper12, "setOrientation");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper13, "setXAxisTitle");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper14, "setXAxisRangeData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper15, "setXAxisBand");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper16, "setYAxisTitle");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper17, "setYAxisRangeData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper18, "setYAxisRangeFromPlotData");
  chunkAGHRB4JFN(
    xychartDiagram5P7HB3NDHelper19,
    "transformDataWithoutCategory",
  );
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper20, "getPlotColorFromPalette");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper21, "setLineData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper22, "setBarData");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper23, "getDrawableElem");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper24, "getChartThemeConfig");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper25, "getChartConfig");
  chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper26, "getXYChartData");
  XychartDiagram5P7HB3ND = {
    parser: xychartDiagram5P7HB3NDBinding2,
    db: {
      getDrawableElem: xychartDiagram5P7HB3NDHelper23,
      clear: chunkAGHRB4JFN(function () {
        _chunkICPOFSXXA();
        xychartDiagram5P7HB3NDBinding14 = 0;
        xychartDiagram5P7HB3NDBinding15 = xychartDiagram5P7HB3NDHelper8();
        xychartDiagram5P7HB3NDBinding17 = xychartDiagram5P7HB3NDHelper9();
        xychartDiagram5P7HB3NDBinding16 = xychartDiagram5P7HB3NDHelper7();
        xychartDiagram5P7HB3NDBinding18 =
          xychartDiagram5P7HB3NDBinding16.plotColorPalette
            .split(",")
            .map((item) => item.trim());
        xychartDiagram5P7HB3NDBinding19 = false;
        $ = false;
      }, "clear"),
      setAccTitle: chunkICPOFSXXH,
      getAccTitle: _chunkICPOFSXXV,
      setDiagramTitle: chunkICPOFSXXG,
      getDiagramTitle: chunkICPOFSXXC,
      getAccDescription: chunkICPOFSXXUnderscore,
      setAccDescription: chunkICPOFSXXV,
      setOrientation: xychartDiagram5P7HB3NDHelper12,
      setXAxisTitle: xychartDiagram5P7HB3NDHelper13,
      setXAxisRangeData: xychartDiagram5P7HB3NDHelper14,
      setXAxisBand: xychartDiagram5P7HB3NDHelper15,
      setYAxisTitle: xychartDiagram5P7HB3NDHelper16,
      setYAxisRangeData: xychartDiagram5P7HB3NDHelper17,
      setLineData: xychartDiagram5P7HB3NDHelper21,
      setBarData: xychartDiagram5P7HB3NDHelper22,
      setTmpSVGG: xychartDiagram5P7HB3NDHelper11,
      getChartThemeConfig: xychartDiagram5P7HB3NDHelper24,
      getChartConfig: xychartDiagram5P7HB3NDHelper25,
      getXYChartData: xychartDiagram5P7HB3NDHelper26,
    },
    renderer: {
      draw: chunkAGHRB4JFN(
        (
          xychartDiagram5P7HB3NDInput1,
          xychartDiagram5P7HB3NDInput2,
          xychartDiagram5P7HB3NDInput3,
          xychartDiagram5P7HB3NDInput4,
        ) => {
          let xychartDiagram5P7HB3NDBinding49 = xychartDiagram5P7HB3NDInput4.db,
            xychartDiagram5P7HB3NDBinding50 =
              xychartDiagram5P7HB3NDBinding49.getChartThemeConfig(),
            xychartDiagram5P7HB3NDBinding51 =
              xychartDiagram5P7HB3NDBinding49.getChartConfig(),
            xychartDiagram5P7HB3NDBinding52 = xychartDiagram5P7HB3NDBinding49
              .getXYChartData()
              .plots[0].data.map((item) => item[1]);
          function xychartDiagram5P7HB3NDHelper28(
            xychartDiagram5P7HB3NDInput104,
          ) {
            return xychartDiagram5P7HB3NDInput104 === "top"
              ? "text-before-edge"
              : "middle";
          }
          chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper28, "getDominantBaseLine");
          function xychartDiagram5P7HB3NDHelper29(
            xychartDiagram5P7HB3NDInput96,
          ) {
            return xychartDiagram5P7HB3NDInput96 === "left"
              ? "start"
              : xychartDiagram5P7HB3NDInput96 === "right"
                ? "end"
                : "middle";
          }
          chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper29, "getTextAnchor");
          function xychartDiagram5P7HB3NDHelper30(
            xychartDiagram5P7HB3NDInput97,
          ) {
            return `translate(${xychartDiagram5P7HB3NDInput97.x}, ${xychartDiagram5P7HB3NDInput97.y}) rotate(${xychartDiagram5P7HB3NDInput97.rotation || 0})`;
          }
          chunkAGHRB4JFN(
            xychartDiagram5P7HB3NDHelper30,
            "getTextTransformation",
          );
          chunkAGHRB4JFI.debug(
            "Rendering xychart chart\n" + xychartDiagram5P7HB3NDInput1,
          );
          let xychartDiagram5P7HB3NDBinding53 = chunk426QAEUCN(
              xychartDiagram5P7HB3NDInput2,
            ),
            xychartDiagram5P7HB3NDBinding54 = xychartDiagram5P7HB3NDBinding53
              .append("g")
              .attr("class", "main"),
            xychartDiagram5P7HB3NDBinding55 = xychartDiagram5P7HB3NDBinding54
              .append("rect")
              .attr("width", xychartDiagram5P7HB3NDBinding51.width)
              .attr("height", xychartDiagram5P7HB3NDBinding51.height)
              .attr("class", "background");
          _chunkICPOFSXXC(
            xychartDiagram5P7HB3NDBinding53,
            xychartDiagram5P7HB3NDBinding51.height,
            xychartDiagram5P7HB3NDBinding51.width,
            true,
          );
          xychartDiagram5P7HB3NDBinding53.attr(
            "viewBox",
            `0 0 ${xychartDiagram5P7HB3NDBinding51.width} ${xychartDiagram5P7HB3NDBinding51.height}`,
          );
          xychartDiagram5P7HB3NDBinding55.attr(
            "fill",
            xychartDiagram5P7HB3NDBinding50.backgroundColor,
          );
          xychartDiagram5P7HB3NDBinding49.setTmpSVGG(
            xychartDiagram5P7HB3NDBinding53
              .append("g")
              .attr("class", "mermaid-tmp-group"),
          );
          let xychartDiagram5P7HB3NDBinding56 =
              xychartDiagram5P7HB3NDBinding49.getDrawableElem(),
            xychartDiagram5P7HB3NDBinding57 = {};
          function xychartDiagram5P7HB3NDHelper31(
            xychartDiagram5P7HB3NDInput40,
          ) {
            let xychartDiagram5P7HB3NDBinding165 =
                xychartDiagram5P7HB3NDBinding54,
              xychartDiagram5P7HB3NDBinding166 = "";
            for (let [
              xychartDiagram5P7HB3NDBinding190,
            ] of xychartDiagram5P7HB3NDInput40.entries()) {
              let xychartDiagram5P7HB3NDBinding196 =
                xychartDiagram5P7HB3NDBinding54;
              xychartDiagram5P7HB3NDBinding190 > 0 &&
                xychartDiagram5P7HB3NDBinding57[
                  xychartDiagram5P7HB3NDBinding166
                ] &&
                (xychartDiagram5P7HB3NDBinding196 =
                  xychartDiagram5P7HB3NDBinding57[
                    xychartDiagram5P7HB3NDBinding166
                  ]);
              xychartDiagram5P7HB3NDBinding166 +=
                xychartDiagram5P7HB3NDInput40[xychartDiagram5P7HB3NDBinding190];
              xychartDiagram5P7HB3NDBinding165 =
                xychartDiagram5P7HB3NDBinding57[
                  xychartDiagram5P7HB3NDBinding166
                ];
              xychartDiagram5P7HB3NDBinding165 ||=
                xychartDiagram5P7HB3NDBinding57[
                  xychartDiagram5P7HB3NDBinding166
                ] = xychartDiagram5P7HB3NDBinding196
                  .append("g")
                  .attr(
                    "class",
                    xychartDiagram5P7HB3NDInput40[
                      xychartDiagram5P7HB3NDBinding190
                    ],
                  );
            }
            return xychartDiagram5P7HB3NDBinding165;
          }
          chunkAGHRB4JFN(xychartDiagram5P7HB3NDHelper31, "getGroup");
          for (let xychartDiagram5P7HB3NDBinding58 of xychartDiagram5P7HB3NDBinding56) {
            if (xychartDiagram5P7HB3NDBinding58.data.length === 0) continue;
            let xychartDiagram5P7HB3NDBinding59 =
              xychartDiagram5P7HB3NDHelper31(
                xychartDiagram5P7HB3NDBinding58.groupTexts,
              );
            switch (xychartDiagram5P7HB3NDBinding58.type) {
              case "rect":
                if (
                  (xychartDiagram5P7HB3NDBinding59
                    .selectAll("rect")
                    .data(xychartDiagram5P7HB3NDBinding58.data)
                    .enter()
                    .append("rect")
                    .attr(
                      "x",
                      (xychartDiagram5P7HB3NDInput158) =>
                        xychartDiagram5P7HB3NDInput158.x,
                    )
                    .attr(
                      "y",
                      (xychartDiagram5P7HB3NDInput159) =>
                        xychartDiagram5P7HB3NDInput159.y,
                    )
                    .attr(
                      "width",
                      (xychartDiagram5P7HB3NDInput146) =>
                        xychartDiagram5P7HB3NDInput146.width,
                    )
                    .attr(
                      "height",
                      (xychartDiagram5P7HB3NDInput145) =>
                        xychartDiagram5P7HB3NDInput145.height,
                    )
                    .attr(
                      "fill",
                      (xychartDiagram5P7HB3NDInput149) =>
                        xychartDiagram5P7HB3NDInput149.fill,
                    )
                    .attr(
                      "stroke",
                      (xychartDiagram5P7HB3NDInput142) =>
                        xychartDiagram5P7HB3NDInput142.strokeFill,
                    )
                    .attr(
                      "stroke-width",
                      (xychartDiagram5P7HB3NDInput140) =>
                        xychartDiagram5P7HB3NDInput140.strokeWidth,
                    ),
                  xychartDiagram5P7HB3NDBinding51.showDataLabel)
                ) {
                  let xychartDiagram5P7HB3NDBinding89 =
                    xychartDiagram5P7HB3NDBinding51.showDataLabelOutsideBar;
                  if (
                    xychartDiagram5P7HB3NDBinding51.chartOrientation ===
                    "horizontal"
                  ) {
                    let xychartDiagram5P7HB3NDBinding118 = function (
                      xychartDiagram5P7HB3NDInput75,
                      xychartDiagram5P7HB3NDInput76,
                    ) {
                      let { data, label } = xychartDiagram5P7HB3NDInput75;
                      return (
                        xychartDiagram5P7HB3NDInput76 * label.length * 0.7 <=
                        data.width - 10
                      );
                    };
                    chunkAGHRB4JFN(
                      xychartDiagram5P7HB3NDBinding118,
                      "fitsHorizontally",
                    );
                    let xychartDiagram5P7HB3NDBinding121 =
                        xychartDiagram5P7HB3NDBinding58.data
                          .map((item, index) => ({
                            data: item,
                            label:
                              xychartDiagram5P7HB3NDBinding52[index].toString(),
                          }))
                          .filter(
                            (item) =>
                              item.data.width > 0 && item.data.height > 0,
                          ),
                      xychartDiagram5P7HB3NDBinding122 =
                        xychartDiagram5P7HB3NDBinding121.map((item) => {
                          let { data } = item,
                            xychartDiagram5P7HB3NDBinding192 =
                              data.height * 0.7;
                          for (
                            ;
                            !xychartDiagram5P7HB3NDBinding118(
                              item,
                              xychartDiagram5P7HB3NDBinding192,
                            ) && xychartDiagram5P7HB3NDBinding192 > 0;
                          )
                            --xychartDiagram5P7HB3NDBinding192;
                          return xychartDiagram5P7HB3NDBinding192;
                        }),
                      xychartDiagram5P7HB3NDBinding123 = Math.floor(
                        Math.min(...xychartDiagram5P7HB3NDBinding122),
                      ),
                      xychartDiagram5P7HB3NDBinding124 = chunkAGHRB4JFN(
                        (xychartDiagram5P7HB3NDInput81) =>
                          xychartDiagram5P7HB3NDBinding89
                            ? xychartDiagram5P7HB3NDInput81.data.x +
                              xychartDiagram5P7HB3NDInput81.data.width +
                              10
                            : xychartDiagram5P7HB3NDInput81.data.x +
                              xychartDiagram5P7HB3NDInput81.data.width -
                              10,
                        "determineLabelXPosition",
                      );
                    xychartDiagram5P7HB3NDBinding59
                      .selectAll("text")
                      .data(xychartDiagram5P7HB3NDBinding121)
                      .enter()
                      .append("text")
                      .attr("x", xychartDiagram5P7HB3NDBinding124)
                      .attr(
                        "y",
                        (xychartDiagram5P7HB3NDInput134) =>
                          xychartDiagram5P7HB3NDInput134.data.y +
                          xychartDiagram5P7HB3NDInput134.data.height / 2,
                      )
                      .attr(
                        "text-anchor",
                        xychartDiagram5P7HB3NDBinding89 ? "start" : "end",
                      )
                      .attr("dominant-baseline", "middle")
                      .attr(
                        "fill",
                        xychartDiagram5P7HB3NDBinding50.dataLabelColor,
                      )
                      .attr(
                        "font-size",
                        `${xychartDiagram5P7HB3NDBinding123}px`,
                      )
                      .text(
                        (xychartDiagram5P7HB3NDInput147) =>
                          xychartDiagram5P7HB3NDInput147.label,
                      );
                  } else {
                    let xychartDiagram5P7HB3NDBinding98 = function (
                      xychartDiagram5P7HB3NDInput36,
                      xychartDiagram5P7HB3NDInput37,
                      xychartDiagram5P7HB3NDInput38,
                    ) {
                      let { data, label } = xychartDiagram5P7HB3NDInput36,
                        xychartDiagram5P7HB3NDBinding159 =
                          xychartDiagram5P7HB3NDInput37 * label.length * 0.7,
                        xychartDiagram5P7HB3NDBinding160 =
                          data.x + data.width / 2,
                        xychartDiagram5P7HB3NDBinding161 =
                          xychartDiagram5P7HB3NDBinding160 -
                          xychartDiagram5P7HB3NDBinding159 / 2,
                        xychartDiagram5P7HB3NDBinding162 =
                          xychartDiagram5P7HB3NDBinding160 +
                          xychartDiagram5P7HB3NDBinding159 / 2,
                        xychartDiagram5P7HB3NDBinding163 =
                          xychartDiagram5P7HB3NDBinding161 >= data.x &&
                          xychartDiagram5P7HB3NDBinding162 <=
                            data.x + data.width,
                        xychartDiagram5P7HB3NDBinding164 =
                          data.y +
                            xychartDiagram5P7HB3NDInput38 +
                            xychartDiagram5P7HB3NDInput37 <=
                          data.y + data.height;
                      return (
                        xychartDiagram5P7HB3NDBinding163 &&
                        xychartDiagram5P7HB3NDBinding164
                      );
                    };
                    chunkAGHRB4JFN(
                      xychartDiagram5P7HB3NDBinding98,
                      "fitsInBar",
                    );
                    let xychartDiagram5P7HB3NDBinding99 =
                        xychartDiagram5P7HB3NDBinding58.data
                          .map((item, index) => ({
                            data: item,
                            label:
                              xychartDiagram5P7HB3NDBinding52[index].toString(),
                          }))
                          .filter(
                            (item) =>
                              item.data.width > 0 && item.data.height > 0,
                          ),
                      xychartDiagram5P7HB3NDBinding100 =
                        xychartDiagram5P7HB3NDBinding99.map((item) => {
                          let { data, label } = item,
                            xychartDiagram5P7HB3NDBinding189 =
                              data.width / (label.length * 0.7);
                          for (
                            ;
                            !xychartDiagram5P7HB3NDBinding98(
                              item,
                              xychartDiagram5P7HB3NDBinding189,
                              10,
                            ) && xychartDiagram5P7HB3NDBinding189 > 0;
                          )
                            --xychartDiagram5P7HB3NDBinding189;
                          return xychartDiagram5P7HB3NDBinding189;
                        }),
                      xychartDiagram5P7HB3NDBinding101 = Math.floor(
                        Math.min(...xychartDiagram5P7HB3NDBinding100),
                      ),
                      xychartDiagram5P7HB3NDBinding102 = chunkAGHRB4JFN(
                        (xychartDiagram5P7HB3NDInput133) =>
                          xychartDiagram5P7HB3NDBinding89
                            ? xychartDiagram5P7HB3NDInput133.data.y - 10
                            : xychartDiagram5P7HB3NDInput133.data.y + 10,
                        "determineLabelYPosition",
                      );
                    xychartDiagram5P7HB3NDBinding59
                      .selectAll("text")
                      .data(xychartDiagram5P7HB3NDBinding99)
                      .enter()
                      .append("text")
                      .attr(
                        "x",
                        (xychartDiagram5P7HB3NDInput135) =>
                          xychartDiagram5P7HB3NDInput135.data.x +
                          xychartDiagram5P7HB3NDInput135.data.width / 2,
                      )
                      .attr("y", xychartDiagram5P7HB3NDBinding102)
                      .attr("text-anchor", "middle")
                      .attr(
                        "dominant-baseline",
                        xychartDiagram5P7HB3NDBinding89 ? "auto" : "hanging",
                      )
                      .attr(
                        "fill",
                        xychartDiagram5P7HB3NDBinding50.dataLabelColor,
                      )
                      .attr(
                        "font-size",
                        `${xychartDiagram5P7HB3NDBinding101}px`,
                      )
                      .text(
                        (xychartDiagram5P7HB3NDInput148) =>
                          xychartDiagram5P7HB3NDInput148.label,
                      );
                  }
                }
                break;
              case "text":
                xychartDiagram5P7HB3NDBinding59
                  .selectAll("text")
                  .data(xychartDiagram5P7HB3NDBinding58.data)
                  .enter()
                  .append("text")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr(
                    "fill",
                    (xychartDiagram5P7HB3NDInput150) =>
                      xychartDiagram5P7HB3NDInput150.fill,
                  )
                  .attr(
                    "font-size",
                    (xychartDiagram5P7HB3NDInput144) =>
                      xychartDiagram5P7HB3NDInput144.fontSize,
                  )
                  .attr("dominant-baseline", (xychartDiagram5P7HB3NDInput139) =>
                    xychartDiagram5P7HB3NDHelper28(
                      xychartDiagram5P7HB3NDInput139.verticalPos,
                    ),
                  )
                  .attr("text-anchor", (xychartDiagram5P7HB3NDInput138) =>
                    xychartDiagram5P7HB3NDHelper29(
                      xychartDiagram5P7HB3NDInput138.horizontalPos,
                    ),
                  )
                  .attr("transform", (xychartDiagram5P7HB3NDInput157) =>
                    xychartDiagram5P7HB3NDHelper30(
                      xychartDiagram5P7HB3NDInput157,
                    ),
                  )
                  .text(
                    (xychartDiagram5P7HB3NDInput151) =>
                      xychartDiagram5P7HB3NDInput151.text,
                  );
                break;
              case "path":
                xychartDiagram5P7HB3NDBinding59
                  .selectAll("path")
                  .data(xychartDiagram5P7HB3NDBinding58.data)
                  .enter()
                  .append("path")
                  .attr(
                    "d",
                    (xychartDiagram5P7HB3NDInput152) =>
                      xychartDiagram5P7HB3NDInput152.path,
                  )
                  .attr("fill", (xychartDiagram5P7HB3NDInput136) =>
                    xychartDiagram5P7HB3NDInput136.fill
                      ? xychartDiagram5P7HB3NDInput136.fill
                      : "none",
                  )
                  .attr(
                    "stroke",
                    (xychartDiagram5P7HB3NDInput143) =>
                      xychartDiagram5P7HB3NDInput143.strokeFill,
                  )
                  .attr(
                    "stroke-width",
                    (xychartDiagram5P7HB3NDInput141) =>
                      xychartDiagram5P7HB3NDInput141.strokeWidth,
                  );
                break;
            }
          }
        },
        "draw",
      ),
    },
  };
})();
export { XychartDiagram5P7HB3ND as diagram };
