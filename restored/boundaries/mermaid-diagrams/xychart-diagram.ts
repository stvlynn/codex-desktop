// Restored from ref/webview/assets/xychartDiagram-PRI3JC2R-BE_wSwvE.js
// Mermaid xychart diagram definition (primary). app-initial Ait/hat/mat → line + scaleBand + scaleLinear.
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
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  L as chunkABZYJK2DL,
  T as chunkABZYJK2DT,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  c as _chunkABZYJK2DC,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "../../diagrams/mermaid-config";
import { ensureD3SelectionRuntimeT as srcT } from "../../vendor/d3-axis-current-runtime";
import {
  n as chunkEXTU4WIEN,
  t as chunkEXTU4WIET,
} from "../../diagrams/select-svg-element";
import { chunkS3R3BYOJR, chunkS3R3BYOJU } from "./mermaid-common-utils";
import {
  chunkJA3XYJ7ZA as chunkJA3XYJ7ZI,
  chunkJA3XYJ7ZT,
} from "./mermaid-create-text";
function xychartDiagramPRI3JC2RHelper1(xychartDiagramPRI3JC2RInput131) {
  return xychartDiagramPRI3JC2RInput131.type === "bar";
}
function xychartDiagramPRI3JC2RHelper2(xychartDiagramPRI3JC2RInput130) {
  return xychartDiagramPRI3JC2RInput130.type === "band";
}
function xychartDiagramPRI3JC2RHelper3(xychartDiagramPRI3JC2RInput127) {
  return xychartDiagramPRI3JC2RInput127.type === "linear";
}
function xychartDiagramPRI3JC2RHelper4(
  xychartDiagramPRI3JC2RInput77,
  xychartDiagramPRI3JC2RInput78,
  xychartDiagramPRI3JC2RInput79,
  xychartDiagramPRI3JC2RInput80,
) {
  let xychartDiagramPRI3JC2RBinding199 = new xychartDiagramPRI3JC2RBinding3(
    xychartDiagramPRI3JC2RInput80,
  );
  return xychartDiagramPRI3JC2RHelper2(xychartDiagramPRI3JC2RInput77)
    ? new xychartDiagramPRI3JC2RBinding7(
        xychartDiagramPRI3JC2RInput78,
        xychartDiagramPRI3JC2RInput79,
        xychartDiagramPRI3JC2RInput77.categories,
        xychartDiagramPRI3JC2RInput77.title,
        xychartDiagramPRI3JC2RBinding199,
      )
    : new xychartDiagramPRI3JC2RBinding8(
        xychartDiagramPRI3JC2RInput78,
        xychartDiagramPRI3JC2RInput79,
        [xychartDiagramPRI3JC2RInput77.min, xychartDiagramPRI3JC2RInput77.max],
        xychartDiagramPRI3JC2RInput77.title,
        xychartDiagramPRI3JC2RBinding199,
      );
}
function xychartDiagramPRI3JC2RHelper5(
  xychartDiagramPRI3JC2RInput114,
  xychartDiagramPRI3JC2RInput115,
  xychartDiagramPRI3JC2RInput116,
  xychartDiagramPRI3JC2RInput117,
) {
  return new xychartDiagramPRI3JC2RBinding9(
    new xychartDiagramPRI3JC2RBinding3(xychartDiagramPRI3JC2RInput117),
    xychartDiagramPRI3JC2RInput114,
    xychartDiagramPRI3JC2RInput115,
    xychartDiagramPRI3JC2RInput116,
  );
}
function xychartDiagramPRI3JC2RHelper6(
  xychartDiagramPRI3JC2RInput123,
  xychartDiagramPRI3JC2RInput124,
  xychartDiagramPRI3JC2RInput125,
) {
  return new xychartDiagramPRI3JC2RBinding11(
    xychartDiagramPRI3JC2RInput123,
    xychartDiagramPRI3JC2RInput124,
    xychartDiagramPRI3JC2RInput125,
  );
}
function xychartDiagramPRI3JC2RHelper7() {
  let xychartDiagramPRI3JC2RBinding206 = chunkABZYJK2DT(),
    xychartDiagramPRI3JC2RBinding207 = chunkABZYJK2DY();
  return chunkS3R3BYOJR(
    xychartDiagramPRI3JC2RBinding206.xyChart,
    xychartDiagramPRI3JC2RBinding207.themeVariables.xyChart,
  );
}
function xychartDiagramPRI3JC2RHelper8() {
  let xychartDiagramPRI3JC2RBinding208 = chunkABZYJK2DY();
  return chunkS3R3BYOJR(
    chunkABZYJK2DD.xyChart,
    xychartDiagramPRI3JC2RBinding208.xyChart,
  );
}
function xychartDiagramPRI3JC2RHelper9() {
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
function xychartDiagramPRI3JC2RHelper10(xychartDiagramPRI3JC2RInput118) {
  let xychartDiagramPRI3JC2RBinding209 = chunkABZYJK2DY();
  return chunkABZYJK2DL(
    xychartDiagramPRI3JC2RInput118.trim(),
    xychartDiagramPRI3JC2RBinding209,
  );
}
function xychartDiagramPRI3JC2RHelper11(xychartDiagramPRI3JC2RInput136) {
  be = xychartDiagramPRI3JC2RInput136;
}
function xychartDiagramPRI3JC2RHelper12(xychartDiagramPRI3JC2RInput86) {
  xychartDiagramPRI3JC2RInput86 === "horizontal"
    ? (xychartDiagramPRI3JC2RBinding15.chartOrientation = "horizontal")
    : (xychartDiagramPRI3JC2RBinding15.chartOrientation = "vertical");
}
function xychartDiagramPRI3JC2RHelper13(xychartDiagramPRI3JC2RInput129) {
  xychartDiagramPRI3JC2RBinding17.xAxis.title = xychartDiagramPRI3JC2RHelper10(
    xychartDiagramPRI3JC2RInput129.text,
  );
}
function xychartDiagramPRI3JC2RHelper14(
  xychartDiagramPRI3JC2RInput93,
  xychartDiagramPRI3JC2RInput94,
) {
  xychartDiagramPRI3JC2RBinding17.xAxis = {
    type: "linear",
    title: xychartDiagramPRI3JC2RBinding17.xAxis.title,
    min: xychartDiagramPRI3JC2RInput93,
    max: xychartDiagramPRI3JC2RInput94,
  };
  xychartDiagramPRI3JC2RBinding19 = true;
}
function xychartDiagramPRI3JC2RHelper15(xychartDiagramPRI3JC2RInput81) {
  xychartDiagramPRI3JC2RBinding17.xAxis = {
    type: "band",
    title: xychartDiagramPRI3JC2RBinding17.xAxis.title,
    categories: xychartDiagramPRI3JC2RInput81.map((item) =>
      xychartDiagramPRI3JC2RHelper10(item.text),
    ),
  };
  xychartDiagramPRI3JC2RBinding19 = true;
}
function xychartDiagramPRI3JC2RHelper16(xychartDiagramPRI3JC2RInput128) {
  xychartDiagramPRI3JC2RBinding17.yAxis.title = xychartDiagramPRI3JC2RHelper10(
    xychartDiagramPRI3JC2RInput128.text,
  );
}
function xychartDiagramPRI3JC2RHelper17(
  xychartDiagramPRI3JC2RInput91,
  xychartDiagramPRI3JC2RInput92,
) {
  xychartDiagramPRI3JC2RBinding17.yAxis = {
    type: "linear",
    title: xychartDiagramPRI3JC2RBinding17.yAxis.title,
    min: xychartDiagramPRI3JC2RInput91,
    max: xychartDiagramPRI3JC2RInput92,
  };
  $ = true;
}
function xychartDiagramPRI3JC2RHelper18(xychartDiagramPRI3JC2RInput45) {
  let xychartDiagramPRI3JC2RBinding175 = Math.min(
      ...xychartDiagramPRI3JC2RInput45,
    ),
    xychartDiagramPRI3JC2RBinding176 = Math.max(
      ...xychartDiagramPRI3JC2RInput45,
    ),
    xychartDiagramPRI3JC2RBinding177 = xychartDiagramPRI3JC2RHelper3(
      xychartDiagramPRI3JC2RBinding17.yAxis,
    )
      ? xychartDiagramPRI3JC2RBinding17.yAxis.min
      : 1 / 0,
    xychartDiagramPRI3JC2RBinding178 = xychartDiagramPRI3JC2RHelper3(
      xychartDiagramPRI3JC2RBinding17.yAxis,
    )
      ? xychartDiagramPRI3JC2RBinding17.yAxis.max
      : -1 / 0;
  xychartDiagramPRI3JC2RBinding17.yAxis = {
    type: "linear",
    title: xychartDiagramPRI3JC2RBinding17.yAxis.title,
    min: Math.min(
      xychartDiagramPRI3JC2RBinding177,
      xychartDiagramPRI3JC2RBinding175,
    ),
    max: Math.max(
      xychartDiagramPRI3JC2RBinding178,
      xychartDiagramPRI3JC2RBinding176,
    ),
  };
}
function xychartDiagramPRI3JC2RHelper19(xychartDiagramPRI3JC2RInput35) {
  let xychartDiagramPRI3JC2RBinding152 = [];
  if (xychartDiagramPRI3JC2RInput35.length === 0)
    return xychartDiagramPRI3JC2RBinding152;
  if (!xychartDiagramPRI3JC2RBinding19) {
    let xychartDiagramPRI3JC2RBinding200 = xychartDiagramPRI3JC2RHelper3(
        xychartDiagramPRI3JC2RBinding17.xAxis,
      )
        ? xychartDiagramPRI3JC2RBinding17.xAxis.min
        : 1 / 0,
      xychartDiagramPRI3JC2RBinding201 = xychartDiagramPRI3JC2RHelper3(
        xychartDiagramPRI3JC2RBinding17.xAxis,
      )
        ? xychartDiagramPRI3JC2RBinding17.xAxis.max
        : -1 / 0;
    xychartDiagramPRI3JC2RHelper14(
      Math.min(xychartDiagramPRI3JC2RBinding200, 1),
      Math.max(
        xychartDiagramPRI3JC2RBinding201,
        xychartDiagramPRI3JC2RInput35.length,
      ),
    );
  }
  if (
    ($ || xychartDiagramPRI3JC2RHelper18(xychartDiagramPRI3JC2RInput35),
    xychartDiagramPRI3JC2RHelper2(xychartDiagramPRI3JC2RBinding17.xAxis) &&
      (xychartDiagramPRI3JC2RBinding152 =
        xychartDiagramPRI3JC2RBinding17.xAxis.categories.map((item, index) => [
          item,
          xychartDiagramPRI3JC2RInput35[index],
        ])),
    xychartDiagramPRI3JC2RHelper3(xychartDiagramPRI3JC2RBinding17.xAxis))
  ) {
    let xychartDiagramPRI3JC2RBinding193 =
        xychartDiagramPRI3JC2RBinding17.xAxis.min,
      xychartDiagramPRI3JC2RBinding194 =
        xychartDiagramPRI3JC2RBinding17.xAxis.max,
      xychartDiagramPRI3JC2RBinding195 =
        (xychartDiagramPRI3JC2RBinding194 - xychartDiagramPRI3JC2RBinding193) /
        (xychartDiagramPRI3JC2RInput35.length - 1),
      xychartDiagramPRI3JC2RBinding196 = [];
    for (
      let xychartDiagramPRI3JC2RBinding210 = xychartDiagramPRI3JC2RBinding193;
      xychartDiagramPRI3JC2RBinding210 <= xychartDiagramPRI3JC2RBinding194;
      xychartDiagramPRI3JC2RBinding210 += xychartDiagramPRI3JC2RBinding195
    )
      xychartDiagramPRI3JC2RBinding196.push(
        `${xychartDiagramPRI3JC2RBinding210}`,
      );
    xychartDiagramPRI3JC2RBinding152 = xychartDiagramPRI3JC2RBinding196.map(
      (item, index) => [item, xychartDiagramPRI3JC2RInput35[index]],
    );
  }
  return xychartDiagramPRI3JC2RBinding152;
}
function xychartDiagramPRI3JC2RHelper20(xychartDiagramPRI3JC2RInput119) {
  return xychartDiagramPRI3JC2RBinding18[
    xychartDiagramPRI3JC2RInput119 === 0
      ? 0
      : xychartDiagramPRI3JC2RInput119 % xychartDiagramPRI3JC2RBinding18.length
  ];
}
function xychartDiagramPRI3JC2RHelper21(
  xychartDiagramPRI3JC2RInput84,
  xychartDiagramPRI3JC2RInput85,
) {
  let xychartDiagramPRI3JC2RBinding203 = xychartDiagramPRI3JC2RHelper19(
    xychartDiagramPRI3JC2RInput85,
  );
  xychartDiagramPRI3JC2RBinding17.plots.push({
    type: "line",
    strokeFill: xychartDiagramPRI3JC2RHelper20(xychartDiagramPRI3JC2RBinding14),
    strokeWidth: 2,
    data: xychartDiagramPRI3JC2RBinding203,
  });
  xychartDiagramPRI3JC2RBinding14++;
}
function xychartDiagramPRI3JC2RHelper22(
  xychartDiagramPRI3JC2RInput98,
  xychartDiagramPRI3JC2RInput99,
) {
  let xychartDiagramPRI3JC2RBinding204 = xychartDiagramPRI3JC2RHelper19(
    xychartDiagramPRI3JC2RInput99,
  );
  xychartDiagramPRI3JC2RBinding17.plots.push({
    type: "bar",
    fill: xychartDiagramPRI3JC2RHelper20(xychartDiagramPRI3JC2RBinding14),
    data: xychartDiagramPRI3JC2RBinding204,
  });
  xychartDiagramPRI3JC2RBinding14++;
}
function xychartDiagramPRI3JC2RHelper23() {
  if (xychartDiagramPRI3JC2RBinding17.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return (
    (xychartDiagramPRI3JC2RBinding17.title = chunkABZYJK2DC()),
    xychartDiagramPRI3JC2RBinding13.build(
      xychartDiagramPRI3JC2RBinding15,
      xychartDiagramPRI3JC2RBinding17,
      xychartDiagramPRI3JC2RBinding16,
      be,
    )
  );
}
function xychartDiagramPRI3JC2RHelper24() {
  return xychartDiagramPRI3JC2RBinding16;
}
function xychartDiagramPRI3JC2RHelper25() {
  return xychartDiagramPRI3JC2RBinding15;
}
function xychartDiagramPRI3JC2RHelper26() {
  return xychartDiagramPRI3JC2RBinding17;
}
var xychartDiagramPRI3JC2RBinding1,
  xychartDiagramPRI3JC2RBinding2,
  xychartDiagramPRI3JC2RBinding3,
  xychartDiagramPRI3JC2RBinding4,
  xychartDiagramPRI3JC2RBinding5,
  xychartDiagramPRI3JC2RBinding6,
  xychartDiagramPRI3JC2RBinding7,
  xychartDiagramPRI3JC2RBinding8,
  xychartDiagramPRI3JC2RBinding9,
  xychartDiagramPRI3JC2RBinding10,
  _e,
  xychartDiagramPRI3JC2RBinding11,
  xychartDiagramPRI3JC2RBinding12,
  xychartDiagramPRI3JC2RBinding13,
  xychartDiagramPRI3JC2RBinding14,
  be,
  xychartDiagramPRI3JC2RBinding15,
  xychartDiagramPRI3JC2RBinding16,
  xychartDiagramPRI3JC2RBinding17,
  xychartDiagramPRI3JC2RBinding18,
  xychartDiagramPRI3JC2RBinding19,
  $,
  XychartDiagramPRI3JC2R;
esmInit(() => {
  chunkEXTU4WIET();
  chunkJA3XYJ7ZI();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  srcT();
  xychartDiagramPRI3JC2RBinding1 = (function () {
    var xychartDiagramPRI3JC2RBinding20 = chunkAGHRB4JFN(function (
        xychartDiagramPRI3JC2RInput87,
        xychartDiagramPRI3JC2RInput88,
        xychartDiagramPRI3JC2RInput89,
        xychartDiagramPRI3JC2RInput90,
      ) {
        for (
          xychartDiagramPRI3JC2RInput89 ||= {},
            xychartDiagramPRI3JC2RInput90 =
              xychartDiagramPRI3JC2RInput87.length;
          xychartDiagramPRI3JC2RInput90--;
          xychartDiagramPRI3JC2RInput89[
            xychartDiagramPRI3JC2RInput87[xychartDiagramPRI3JC2RInput90]
          ] = xychartDiagramPRI3JC2RInput88
        );
        return xychartDiagramPRI3JC2RInput89;
      }, "o"),
      xychartDiagramPRI3JC2RBinding21 = [1, 10, 12, 14, 16, 18, 19, 21, 23],
      xychartDiagramPRI3JC2RBinding22 = [2, 6],
      xychartDiagramPRI3JC2RBinding23 = [1, 3],
      xychartDiagramPRI3JC2RBinding24 = [1, 5],
      xychartDiagramPRI3JC2RBinding25 = [1, 6],
      xychartDiagramPRI3JC2RBinding26 = [1, 7],
      xychartDiagramPRI3JC2RBinding27 = [
        1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36,
      ],
      xychartDiagramPRI3JC2RBinding28 = [1, 25],
      xychartDiagramPRI3JC2RBinding29 = [1, 26],
      xychartDiagramPRI3JC2RBinding30 = [1, 28],
      xychartDiagramPRI3JC2RBinding31 = [1, 29],
      xychartDiagramPRI3JC2RBinding32 = [1, 30],
      xychartDiagramPRI3JC2RBinding33 = [1, 31],
      xychartDiagramPRI3JC2RBinding34 = [1, 32],
      xychartDiagramPRI3JC2RBinding35 = [1, 33],
      xychartDiagramPRI3JC2RBinding36 = [1, 34],
      xychartDiagramPRI3JC2RBinding37 = [1, 35],
      xychartDiagramPRI3JC2RBinding38 = [1, 36],
      xychartDiagramPRI3JC2RBinding39 = [1, 37],
      xychartDiagramPRI3JC2RBinding40 = [1, 43],
      xychartDiagramPRI3JC2RBinding41 = [1, 42],
      xychartDiagramPRI3JC2RBinding42 = [1, 47],
      xychartDiagramPRI3JC2RBinding43 = [1, 50],
      xychartDiagramPRI3JC2RBinding44 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36,
      ],
      xychartDiagramPRI3JC2RBinding45 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36,
      ],
      xychartDiagramPRI3JC2RBinding46 = [
        1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42,
        43, 44, 45, 46, 47, 48, 49, 50,
      ],
      xychartDiagramPRI3JC2RBinding47 = [1, 64],
      xychartDiagramPRI3JC2RBinding48 = {
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
          xychartDiagramPRI3JC2RInput10,
          xychartDiagramPRI3JC2RInput11,
          xychartDiagramPRI3JC2RInput12,
          xychartDiagramPRI3JC2RInput13,
          xychartDiagramPRI3JC2RInput14,
          xychartDiagramPRI3JC2RInput15,
          xychartDiagramPRI3JC2RInput16,
        ) {
          var xychartDiagramPRI3JC2RBinding89 =
            xychartDiagramPRI3JC2RInput15.length - 1;
          switch (xychartDiagramPRI3JC2RInput14) {
            case 5:
              xychartDiagramPRI3JC2RInput13.setOrientation(
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 9:
              xychartDiagramPRI3JC2RInput13.setDiagramTitle(
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ].text.trim(),
              );
              break;
            case 12:
              xychartDiagramPRI3JC2RInput13.setLineData(
                {
                  text: "",
                  type: "text",
                },
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 13:
              xychartDiagramPRI3JC2RInput13.setLineData(
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ],
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 14:
              xychartDiagramPRI3JC2RInput13.setBarData(
                {
                  text: "",
                  type: "text",
                },
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 15:
              xychartDiagramPRI3JC2RInput13.setBarData(
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ],
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 16:
              this.$ =
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ].trim();
              xychartDiagramPRI3JC2RInput13.setAccTitle(this.$);
              break;
            case 17:
            case 18:
              this.$ =
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ].trim();
              xychartDiagramPRI3JC2RInput13.setAccDescription(this.$);
              break;
            case 19:
              this.$ =
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ];
              break;
            case 20:
              this.$ = [
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89 - 2
                  ],
                ),
                ...xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ],
              ];
              break;
            case 21:
              this.$ = [
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89
                  ],
                ),
              ];
              break;
            case 22:
              xychartDiagramPRI3JC2RInput13.setXAxisTitle(
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 23:
              xychartDiagramPRI3JC2RInput13.setXAxisTitle(
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ],
              );
              break;
            case 24:
              xychartDiagramPRI3JC2RInput13.setXAxisTitle({
                type: "text",
                text: "",
              });
              break;
            case 25:
              xychartDiagramPRI3JC2RInput13.setXAxisBand(
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 26:
              xychartDiagramPRI3JC2RInput13.setXAxisRangeData(
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89 - 2
                  ],
                ),
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89
                  ],
                ),
              );
              break;
            case 27:
              this.$ =
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ];
              break;
            case 28:
              this.$ = [
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 2
                ],
                ...xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ],
              ];
              break;
            case 29:
              this.$ = [
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              ];
              break;
            case 30:
              xychartDiagramPRI3JC2RInput13.setYAxisTitle(
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89],
              );
              break;
            case 31:
              xychartDiagramPRI3JC2RInput13.setYAxisTitle(
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ],
              );
              break;
            case 32:
              xychartDiagramPRI3JC2RInput13.setYAxisTitle({
                type: "text",
                text: "",
              });
              break;
            case 33:
              xychartDiagramPRI3JC2RInput13.setYAxisRangeData(
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89 - 2
                  ],
                ),
                Number(
                  xychartDiagramPRI3JC2RInput15[
                    xychartDiagramPRI3JC2RBinding89
                  ],
                ),
              );
              break;
            case 37:
              this.$ = {
                text: xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ],
                type: "text",
              };
              break;
            case 38:
              this.$ = {
                text: xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ],
                type: "text",
              };
              break;
            case 39:
              this.$ = {
                text: xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89
                ],
                type: "markdown",
              };
              break;
            case 40:
              this.$ =
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89];
              break;
            case 41:
              this.$ =
                xychartDiagramPRI3JC2RInput15[
                  xychartDiagramPRI3JC2RBinding89 - 1
                ] +
                "" +
                xychartDiagramPRI3JC2RInput15[xychartDiagramPRI3JC2RBinding89];
              break;
          }
        }, "anonymous"),
        table: [
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding21,
            xychartDiagramPRI3JC2RBinding22,
            {
              3: 1,
              4: 2,
              7: 4,
              5: xychartDiagramPRI3JC2RBinding23,
              34: xychartDiagramPRI3JC2RBinding24,
              35: xychartDiagramPRI3JC2RBinding25,
              36: xychartDiagramPRI3JC2RBinding26,
            },
          ),
          {
            1: [3],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding21,
            xychartDiagramPRI3JC2RBinding22,
            {
              4: 2,
              7: 4,
              3: 8,
              5: xychartDiagramPRI3JC2RBinding23,
              34: xychartDiagramPRI3JC2RBinding24,
              35: xychartDiagramPRI3JC2RBinding25,
              36: xychartDiagramPRI3JC2RBinding26,
            },
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding21,
            xychartDiagramPRI3JC2RBinding22,
            {
              4: 2,
              7: 4,
              6: 9,
              3: 10,
              5: xychartDiagramPRI3JC2RBinding23,
              8: [1, 11],
              34: xychartDiagramPRI3JC2RBinding24,
              35: xychartDiagramPRI3JC2RBinding25,
              36: xychartDiagramPRI3JC2RBinding26,
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
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding27,
            [2, 34],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding27,
            [2, 35],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding27,
            [2, 36],
          ),
          {
            1: [2, 1],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding21,
            xychartDiagramPRI3JC2RBinding22,
            {
              4: 2,
              7: 4,
              3: 21,
              5: xychartDiagramPRI3JC2RBinding23,
              34: xychartDiagramPRI3JC2RBinding24,
              35: xychartDiagramPRI3JC2RBinding25,
              36: xychartDiagramPRI3JC2RBinding26,
            },
          ),
          {
            1: [2, 3],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding27,
            [2, 5],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding21,
            [2, 7],
            {
              4: 22,
              34: xychartDiagramPRI3JC2RBinding24,
              35: xychartDiagramPRI3JC2RBinding25,
              36: xychartDiagramPRI3JC2RBinding26,
            },
          ),
          {
            11: 23,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          {
            11: 39,
            13: 38,
            24: xychartDiagramPRI3JC2RBinding40,
            27: xychartDiagramPRI3JC2RBinding41,
            29: 40,
            30: 41,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          {
            11: 45,
            15: 44,
            27: xychartDiagramPRI3JC2RBinding42,
            33: 46,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          {
            11: 49,
            17: 48,
            24: xychartDiagramPRI3JC2RBinding43,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          {
            11: 52,
            17: 51,
            24: xychartDiagramPRI3JC2RBinding43,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          {
            20: [1, 53],
          },
          {
            22: [1, 54],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 18],
          ),
          {
            1: [2, 2],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 8],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 9],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding45,
            [2, 37],
            {
              40: 55,
              41: xychartDiagramPRI3JC2RBinding30,
              42: xychartDiagramPRI3JC2RBinding31,
              43: xychartDiagramPRI3JC2RBinding32,
              44: xychartDiagramPRI3JC2RBinding33,
              45: xychartDiagramPRI3JC2RBinding34,
              46: xychartDiagramPRI3JC2RBinding35,
              47: xychartDiagramPRI3JC2RBinding36,
              48: xychartDiagramPRI3JC2RBinding37,
              49: xychartDiagramPRI3JC2RBinding38,
              50: xychartDiagramPRI3JC2RBinding39,
            },
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding45,
            [2, 38],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding45,
            [2, 39],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 40],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 42],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 43],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 44],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 45],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 46],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 47],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 48],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 49],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 50],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 51],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 10],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 22],
            {
              30: 41,
              29: 56,
              24: xychartDiagramPRI3JC2RBinding40,
              27: xychartDiagramPRI3JC2RBinding41,
            },
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 24],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 25],
          ),
          {
            31: [1, 57],
          },
          {
            11: 59,
            32: 58,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 11],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 30],
            {
              33: 60,
              27: xychartDiagramPRI3JC2RBinding42,
            },
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 32],
          ),
          {
            31: [1, 61],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 12],
          ),
          {
            17: 62,
            24: xychartDiagramPRI3JC2RBinding43,
          },
          {
            25: 63,
            27: xychartDiagramPRI3JC2RBinding47,
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 14],
          ),
          {
            17: 65,
            24: xychartDiagramPRI3JC2RBinding43,
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 16],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 17],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding46,
            [2, 41],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
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
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 31],
          ),
          {
            27: [1, 69],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 13],
          ),
          {
            26: [1, 70],
          },
          {
            26: [2, 21],
            28: [1, 71],
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 15],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 26],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 27],
          ),
          {
            11: 59,
            32: 72,
            37: 24,
            38: xychartDiagramPRI3JC2RBinding28,
            39: xychartDiagramPRI3JC2RBinding29,
            40: 27,
            41: xychartDiagramPRI3JC2RBinding30,
            42: xychartDiagramPRI3JC2RBinding31,
            43: xychartDiagramPRI3JC2RBinding32,
            44: xychartDiagramPRI3JC2RBinding33,
            45: xychartDiagramPRI3JC2RBinding34,
            46: xychartDiagramPRI3JC2RBinding35,
            47: xychartDiagramPRI3JC2RBinding36,
            48: xychartDiagramPRI3JC2RBinding37,
            49: xychartDiagramPRI3JC2RBinding38,
            50: xychartDiagramPRI3JC2RBinding39,
          },
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 33],
          ),
          xychartDiagramPRI3JC2RBinding20(
            xychartDiagramPRI3JC2RBinding44,
            [2, 19],
          ),
          {
            25: 73,
            27: xychartDiagramPRI3JC2RBinding47,
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
          xychartDiagramPRI3JC2RInput63,
          xychartDiagramPRI3JC2RInput64,
        ) {
          if (xychartDiagramPRI3JC2RInput64.recoverable)
            this.trace(xychartDiagramPRI3JC2RInput63);
          else {
            var xychartDiagramPRI3JC2RBinding198 = Error(
              xychartDiagramPRI3JC2RInput63,
            );
            throw (
              (xychartDiagramPRI3JC2RBinding198.hash =
                xychartDiagramPRI3JC2RInput64),
              xychartDiagramPRI3JC2RBinding198
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput5) {
          var xychartDiagramPRI3JC2RBinding58 = this,
            xychartDiagramPRI3JC2RBinding59 = [0],
            xychartDiagramPRI3JC2RBinding60 = [],
            xychartDiagramPRI3JC2RBinding61 = [null],
            xychartDiagramPRI3JC2RBinding62 = [],
            xychartDiagramPRI3JC2RBinding63 = this.table,
            xychartDiagramPRI3JC2RBinding64 = "",
            xychartDiagramPRI3JC2RBinding65 = 0,
            xychartDiagramPRI3JC2RBinding66 = 0,
            xychartDiagramPRI3JC2RBinding67 = 0,
            xychartDiagramPRI3JC2RBinding70 =
              xychartDiagramPRI3JC2RBinding62.slice.call(arguments, 1),
            xychartDiagramPRI3JC2RBinding71 = Object.create(this.lexer),
            xychartDiagramPRI3JC2RBinding72 = {
              yy: {},
            };
          for (var xychartDiagramPRI3JC2RBinding73 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              xychartDiagramPRI3JC2RBinding73,
            ) &&
              (xychartDiagramPRI3JC2RBinding72.yy[
                xychartDiagramPRI3JC2RBinding73
              ] = this.yy[xychartDiagramPRI3JC2RBinding73]);
          xychartDiagramPRI3JC2RBinding71.setInput(
            xychartDiagramPRI3JC2RInput5,
            xychartDiagramPRI3JC2RBinding72.yy,
          );
          xychartDiagramPRI3JC2RBinding72.yy.lexer =
            xychartDiagramPRI3JC2RBinding71;
          xychartDiagramPRI3JC2RBinding72.yy.parser = this;
          xychartDiagramPRI3JC2RBinding71.yylloc === undefined &&
            (xychartDiagramPRI3JC2RBinding71.yylloc = {});
          var xychartDiagramPRI3JC2RBinding74 =
            xychartDiagramPRI3JC2RBinding71.yylloc;
          xychartDiagramPRI3JC2RBinding62.push(xychartDiagramPRI3JC2RBinding74);
          var xychartDiagramPRI3JC2RBinding75 =
            xychartDiagramPRI3JC2RBinding71.options &&
            xychartDiagramPRI3JC2RBinding71.options.ranges;
          typeof xychartDiagramPRI3JC2RBinding72.yy.parseError == "function"
            ? (this.parseError = xychartDiagramPRI3JC2RBinding72.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function xychartDiagramPRI3JC2RHelper32(
            xychartDiagramPRI3JC2RInput97,
          ) {
            xychartDiagramPRI3JC2RBinding59.length -=
              2 * xychartDiagramPRI3JC2RInput97;
            xychartDiagramPRI3JC2RBinding61.length -=
              xychartDiagramPRI3JC2RInput97;
            xychartDiagramPRI3JC2RBinding62.length -=
              xychartDiagramPRI3JC2RInput97;
          }
          chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper32, "popStack");
          function xychartDiagramPRI3JC2RHelper33() {
            var xychartDiagramPRI3JC2RBinding173 =
              xychartDiagramPRI3JC2RBinding60.pop() ||
              xychartDiagramPRI3JC2RBinding71.lex() ||
              1;
            return (
              typeof xychartDiagramPRI3JC2RBinding173 != "number" &&
                (xychartDiagramPRI3JC2RBinding173 instanceof Array &&
                  ((xychartDiagramPRI3JC2RBinding60 =
                    xychartDiagramPRI3JC2RBinding173),
                  (xychartDiagramPRI3JC2RBinding173 =
                    xychartDiagramPRI3JC2RBinding60.pop())),
                (xychartDiagramPRI3JC2RBinding173 =
                  xychartDiagramPRI3JC2RBinding58.symbols_[
                    xychartDiagramPRI3JC2RBinding173
                  ] || xychartDiagramPRI3JC2RBinding173)),
              xychartDiagramPRI3JC2RBinding173
            );
          }
          chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper33, "lex");
          for (
            var xychartDiagramPRI3JC2RBinding76,
              xychartDiagramPRI3JC2RBinding77,
              xychartDiagramPRI3JC2RBinding78,
              xychartDiagramPRI3JC2RBinding79,
              xychartDiagramPRI3JC2RBinding80,
              xychartDiagramPRI3JC2RBinding81 = {},
              xychartDiagramPRI3JC2RBinding82,
              xychartDiagramPRI3JC2RBinding83,
              xychartDiagramPRI3JC2RBinding84,
              xychartDiagramPRI3JC2RBinding85;
            ;
          ) {
            if (
              ((xychartDiagramPRI3JC2RBinding78 =
                xychartDiagramPRI3JC2RBinding59[
                  xychartDiagramPRI3JC2RBinding59.length - 1
                ]),
              this.defaultActions[xychartDiagramPRI3JC2RBinding78]
                ? (xychartDiagramPRI3JC2RBinding79 =
                    this.defaultActions[xychartDiagramPRI3JC2RBinding78])
                : ((xychartDiagramPRI3JC2RBinding76 ??=
                    xychartDiagramPRI3JC2RHelper33()),
                  (xychartDiagramPRI3JC2RBinding79 =
                    xychartDiagramPRI3JC2RBinding63[
                      xychartDiagramPRI3JC2RBinding78
                    ] &&
                    xychartDiagramPRI3JC2RBinding63[
                      xychartDiagramPRI3JC2RBinding78
                    ][xychartDiagramPRI3JC2RBinding76])),
              xychartDiagramPRI3JC2RBinding79 === undefined ||
                !xychartDiagramPRI3JC2RBinding79.length ||
                !xychartDiagramPRI3JC2RBinding79[0])
            ) {
              var xychartDiagramPRI3JC2RBinding86 = "";
              for (xychartDiagramPRI3JC2RBinding82 in ((xychartDiagramPRI3JC2RBinding85 =
                []),
              xychartDiagramPRI3JC2RBinding63[xychartDiagramPRI3JC2RBinding78]))
                this.terminals_[xychartDiagramPRI3JC2RBinding82] &&
                  xychartDiagramPRI3JC2RBinding82 > 2 &&
                  xychartDiagramPRI3JC2RBinding85.push(
                    "'" +
                      this.terminals_[xychartDiagramPRI3JC2RBinding82] +
                      "'",
                  );
              xychartDiagramPRI3JC2RBinding86 =
                xychartDiagramPRI3JC2RBinding71.showPosition
                  ? "Parse error on line " +
                    (xychartDiagramPRI3JC2RBinding65 + 1) +
                    ":\n" +
                    xychartDiagramPRI3JC2RBinding71.showPosition() +
                    "\nExpecting " +
                    xychartDiagramPRI3JC2RBinding85.join(", ") +
                    ", got '" +
                    (this.terminals_[xychartDiagramPRI3JC2RBinding76] ||
                      xychartDiagramPRI3JC2RBinding76) +
                    "'"
                  : "Parse error on line " +
                    (xychartDiagramPRI3JC2RBinding65 + 1) +
                    ": Unexpected " +
                    (xychartDiagramPRI3JC2RBinding76 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[xychartDiagramPRI3JC2RBinding76] ||
                          xychartDiagramPRI3JC2RBinding76) +
                        "'");
              this.parseError(xychartDiagramPRI3JC2RBinding86, {
                text: xychartDiagramPRI3JC2RBinding71.match,
                token:
                  this.terminals_[xychartDiagramPRI3JC2RBinding76] ||
                  xychartDiagramPRI3JC2RBinding76,
                line: xychartDiagramPRI3JC2RBinding71.yylineno,
                loc: xychartDiagramPRI3JC2RBinding74,
                expected: xychartDiagramPRI3JC2RBinding85,
              });
            }
            if (
              xychartDiagramPRI3JC2RBinding79[0] instanceof Array &&
              xychartDiagramPRI3JC2RBinding79.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  xychartDiagramPRI3JC2RBinding78 +
                  ", token: " +
                  xychartDiagramPRI3JC2RBinding76,
              );
            switch (xychartDiagramPRI3JC2RBinding79[0]) {
              case 1:
                xychartDiagramPRI3JC2RBinding59.push(
                  xychartDiagramPRI3JC2RBinding76,
                );
                xychartDiagramPRI3JC2RBinding61.push(
                  xychartDiagramPRI3JC2RBinding71.yytext,
                );
                xychartDiagramPRI3JC2RBinding62.push(
                  xychartDiagramPRI3JC2RBinding71.yylloc,
                );
                xychartDiagramPRI3JC2RBinding59.push(
                  xychartDiagramPRI3JC2RBinding79[1],
                );
                xychartDiagramPRI3JC2RBinding76 = null;
                xychartDiagramPRI3JC2RBinding77
                  ? ((xychartDiagramPRI3JC2RBinding76 =
                      xychartDiagramPRI3JC2RBinding77),
                    (xychartDiagramPRI3JC2RBinding77 = null))
                  : ((xychartDiagramPRI3JC2RBinding66 =
                      xychartDiagramPRI3JC2RBinding71.yyleng),
                    (xychartDiagramPRI3JC2RBinding64 =
                      xychartDiagramPRI3JC2RBinding71.yytext),
                    (xychartDiagramPRI3JC2RBinding65 =
                      xychartDiagramPRI3JC2RBinding71.yylineno),
                    (xychartDiagramPRI3JC2RBinding74 =
                      xychartDiagramPRI3JC2RBinding71.yylloc),
                    xychartDiagramPRI3JC2RBinding67 > 0 &&
                      xychartDiagramPRI3JC2RBinding67--);
                break;
              case 2:
                if (
                  ((xychartDiagramPRI3JC2RBinding83 =
                    this.productions_[xychartDiagramPRI3JC2RBinding79[1]][1]),
                  (xychartDiagramPRI3JC2RBinding81.$ =
                    xychartDiagramPRI3JC2RBinding61[
                      xychartDiagramPRI3JC2RBinding61.length -
                        xychartDiagramPRI3JC2RBinding83
                    ]),
                  (xychartDiagramPRI3JC2RBinding81._$ = {
                    first_line:
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length -
                          (xychartDiagramPRI3JC2RBinding83 || 1)
                      ].first_line,
                    last_line:
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length - 1
                      ].last_line,
                    first_column:
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length -
                          (xychartDiagramPRI3JC2RBinding83 || 1)
                      ].first_column,
                    last_column:
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length - 1
                      ].last_column,
                  }),
                  xychartDiagramPRI3JC2RBinding75 &&
                    (xychartDiagramPRI3JC2RBinding81._$.range = [
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length -
                          (xychartDiagramPRI3JC2RBinding83 || 1)
                      ].range[0],
                      xychartDiagramPRI3JC2RBinding62[
                        xychartDiagramPRI3JC2RBinding62.length - 1
                      ].range[1],
                    ]),
                  (xychartDiagramPRI3JC2RBinding80 = this.performAction.apply(
                    xychartDiagramPRI3JC2RBinding81,
                    [
                      xychartDiagramPRI3JC2RBinding64,
                      xychartDiagramPRI3JC2RBinding66,
                      xychartDiagramPRI3JC2RBinding65,
                      xychartDiagramPRI3JC2RBinding72.yy,
                      xychartDiagramPRI3JC2RBinding79[1],
                      xychartDiagramPRI3JC2RBinding61,
                      xychartDiagramPRI3JC2RBinding62,
                    ].concat(xychartDiagramPRI3JC2RBinding70),
                  )),
                  xychartDiagramPRI3JC2RBinding80 !== undefined)
                )
                  return xychartDiagramPRI3JC2RBinding80;
                xychartDiagramPRI3JC2RBinding83 &&
                  ((xychartDiagramPRI3JC2RBinding59 =
                    xychartDiagramPRI3JC2RBinding59.slice(
                      0,
                      -1 * xychartDiagramPRI3JC2RBinding83 * 2,
                    )),
                  (xychartDiagramPRI3JC2RBinding61 =
                    xychartDiagramPRI3JC2RBinding61.slice(
                      0,
                      -1 * xychartDiagramPRI3JC2RBinding83,
                    )),
                  (xychartDiagramPRI3JC2RBinding62 =
                    xychartDiagramPRI3JC2RBinding62.slice(
                      0,
                      -1 * xychartDiagramPRI3JC2RBinding83,
                    )));
                xychartDiagramPRI3JC2RBinding59.push(
                  this.productions_[xychartDiagramPRI3JC2RBinding79[1]][0],
                );
                xychartDiagramPRI3JC2RBinding61.push(
                  xychartDiagramPRI3JC2RBinding81.$,
                );
                xychartDiagramPRI3JC2RBinding62.push(
                  xychartDiagramPRI3JC2RBinding81._$,
                );
                xychartDiagramPRI3JC2RBinding84 =
                  xychartDiagramPRI3JC2RBinding63[
                    xychartDiagramPRI3JC2RBinding59[
                      xychartDiagramPRI3JC2RBinding59.length - 2
                    ]
                  ][
                    xychartDiagramPRI3JC2RBinding59[
                      xychartDiagramPRI3JC2RBinding59.length - 1
                    ]
                  ];
                xychartDiagramPRI3JC2RBinding59.push(
                  xychartDiagramPRI3JC2RBinding84,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    xychartDiagramPRI3JC2RBinding48.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          xychartDiagramPRI3JC2RInput82,
          xychartDiagramPRI3JC2RInput83,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              xychartDiagramPRI3JC2RInput82,
              xychartDiagramPRI3JC2RInput83,
            );
          else throw Error(xychartDiagramPRI3JC2RInput82);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          xychartDiagramPRI3JC2RInput30,
          xychartDiagramPRI3JC2RInput31,
        ) {
          return (
            (this.yy = xychartDiagramPRI3JC2RInput31 || this.yy || {}),
            (this._input = xychartDiagramPRI3JC2RInput30),
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
          var xychartDiagramPRI3JC2RBinding153 = this._input[0];
          return (
            (this.yytext += xychartDiagramPRI3JC2RBinding153),
            this.yyleng++,
            this.offset++,
            (this.match += xychartDiagramPRI3JC2RBinding153),
            (this.matched += xychartDiagramPRI3JC2RBinding153),
            xychartDiagramPRI3JC2RBinding153.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            xychartDiagramPRI3JC2RBinding153
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput20) {
          var xychartDiagramPRI3JC2RBinding131 =
              xychartDiagramPRI3JC2RInput20.length,
            xychartDiagramPRI3JC2RBinding132 =
              xychartDiagramPRI3JC2RInput20.split(/(?:\r\n?|\n)/g);
          this._input = xychartDiagramPRI3JC2RInput20 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - xychartDiagramPRI3JC2RBinding131,
          );
          this.offset -= xychartDiagramPRI3JC2RBinding131;
          var xychartDiagramPRI3JC2RBinding133 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          xychartDiagramPRI3JC2RBinding132.length - 1 &&
            (this.yylineno -= xychartDiagramPRI3JC2RBinding132.length - 1);
          var xychartDiagramPRI3JC2RBinding134 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: xychartDiagramPRI3JC2RBinding132
                ? (xychartDiagramPRI3JC2RBinding132.length ===
                  xychartDiagramPRI3JC2RBinding133.length
                    ? this.yylloc.first_column
                    : 0) +
                  xychartDiagramPRI3JC2RBinding133[
                    xychartDiagramPRI3JC2RBinding133.length -
                      xychartDiagramPRI3JC2RBinding132.length
                  ].length -
                  xychartDiagramPRI3JC2RBinding132[0].length
                : this.yylloc.first_column - xychartDiagramPRI3JC2RBinding131,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                xychartDiagramPRI3JC2RBinding134[0],
                xychartDiagramPRI3JC2RBinding134[0] +
                  this.yyleng -
                  xychartDiagramPRI3JC2RBinding131,
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
        less: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput110) {
          this.unput(this.match.slice(xychartDiagramPRI3JC2RInput110));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var xychartDiagramPRI3JC2RBinding179 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (xychartDiagramPRI3JC2RBinding179.length > 20 ? "..." : "") +
            xychartDiagramPRI3JC2RBinding179.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var xychartDiagramPRI3JC2RBinding172 = this.match;
          return (
            xychartDiagramPRI3JC2RBinding172.length < 20 &&
              (xychartDiagramPRI3JC2RBinding172 += this._input.substr(
                0,
                20 - xychartDiagramPRI3JC2RBinding172.length,
              )),
            (
              xychartDiagramPRI3JC2RBinding172.substr(0, 20) +
              (xychartDiagramPRI3JC2RBinding172.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var xychartDiagramPRI3JC2RBinding180 = this.pastInput(),
            xychartDiagramPRI3JC2RBinding181 = Array(
              xychartDiagramPRI3JC2RBinding180.length + 1,
            ).join("-");
          return (
            xychartDiagramPRI3JC2RBinding180 +
            this.upcomingInput() +
            "\n" +
            xychartDiagramPRI3JC2RBinding181 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          xychartDiagramPRI3JC2RInput17,
          xychartDiagramPRI3JC2RInput18,
        ) {
          var xychartDiagramPRI3JC2RBinding93,
            xychartDiagramPRI3JC2RBinding94,
            xychartDiagramPRI3JC2RBinding95;
          if (
            (this.options.backtrack_lexer &&
              ((xychartDiagramPRI3JC2RBinding95 = {
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
                (xychartDiagramPRI3JC2RBinding95.yylloc.range =
                  this.yylloc.range.slice(0))),
            (xychartDiagramPRI3JC2RBinding94 =
              xychartDiagramPRI3JC2RInput17[0].match(/(?:\r\n?|\n).*/g)),
            xychartDiagramPRI3JC2RBinding94 &&
              (this.yylineno += xychartDiagramPRI3JC2RBinding94.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: xychartDiagramPRI3JC2RBinding94
                ? xychartDiagramPRI3JC2RBinding94[
                    xychartDiagramPRI3JC2RBinding94.length - 1
                  ].length -
                  xychartDiagramPRI3JC2RBinding94[
                    xychartDiagramPRI3JC2RBinding94.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  xychartDiagramPRI3JC2RInput17[0].length,
            }),
            (this.yytext += xychartDiagramPRI3JC2RInput17[0]),
            (this.match += xychartDiagramPRI3JC2RInput17[0]),
            (this.matches = xychartDiagramPRI3JC2RInput17),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              xychartDiagramPRI3JC2RInput17[0].length,
            )),
            (this.matched += xychartDiagramPRI3JC2RInput17[0]),
            (xychartDiagramPRI3JC2RBinding93 = this.performAction.call(
              this,
              this.yy,
              this,
              xychartDiagramPRI3JC2RInput18,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            xychartDiagramPRI3JC2RBinding93)
          )
            return xychartDiagramPRI3JC2RBinding93;
          if (this._backtrack) {
            for (var xychartDiagramPRI3JC2RBinding96 in xychartDiagramPRI3JC2RBinding95)
              this[xychartDiagramPRI3JC2RBinding96] =
                xychartDiagramPRI3JC2RBinding95[
                  xychartDiagramPRI3JC2RBinding96
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var xychartDiagramPRI3JC2RBinding125,
            xychartDiagramPRI3JC2RBinding126,
            xychartDiagramPRI3JC2RBinding127,
            xychartDiagramPRI3JC2RBinding128;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var xychartDiagramPRI3JC2RBinding129 = this._currentRules(),
              xychartDiagramPRI3JC2RBinding130 = 0;
            xychartDiagramPRI3JC2RBinding130 <
            xychartDiagramPRI3JC2RBinding129.length;
            xychartDiagramPRI3JC2RBinding130++
          )
            if (
              ((xychartDiagramPRI3JC2RBinding127 = this._input.match(
                this.rules[
                  xychartDiagramPRI3JC2RBinding129[
                    xychartDiagramPRI3JC2RBinding130
                  ]
                ],
              )),
              xychartDiagramPRI3JC2RBinding127 &&
                (!xychartDiagramPRI3JC2RBinding126 ||
                  xychartDiagramPRI3JC2RBinding127[0].length >
                    xychartDiagramPRI3JC2RBinding126[0].length))
            ) {
              if (
                ((xychartDiagramPRI3JC2RBinding126 =
                  xychartDiagramPRI3JC2RBinding127),
                (xychartDiagramPRI3JC2RBinding128 =
                  xychartDiagramPRI3JC2RBinding130),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((xychartDiagramPRI3JC2RBinding125 = this.test_match(
                    xychartDiagramPRI3JC2RBinding127,
                    xychartDiagramPRI3JC2RBinding129[
                      xychartDiagramPRI3JC2RBinding130
                    ],
                  )),
                  xychartDiagramPRI3JC2RBinding125 !== false)
                )
                  return xychartDiagramPRI3JC2RBinding125;
                if (this._backtrack) {
                  xychartDiagramPRI3JC2RBinding126 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return xychartDiagramPRI3JC2RBinding126
            ? ((xychartDiagramPRI3JC2RBinding125 = this.test_match(
                xychartDiagramPRI3JC2RBinding126,
                xychartDiagramPRI3JC2RBinding129[
                  xychartDiagramPRI3JC2RBinding128
                ],
              )),
              xychartDiagramPRI3JC2RBinding125 === false
                ? false
                : xychartDiagramPRI3JC2RBinding125)
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
        begin: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput113) {
          this.conditionStack.push(xychartDiagramPRI3JC2RInput113);
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
        topState: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput57) {
          return (
            (xychartDiagramPRI3JC2RInput57 =
              this.conditionStack.length -
              1 -
              Math.abs(xychartDiagramPRI3JC2RInput57 || 0)),
            xychartDiagramPRI3JC2RInput57 >= 0
              ? this.conditionStack[xychartDiagramPRI3JC2RInput57]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (xychartDiagramPRI3JC2RInput122) {
          this.begin(xychartDiagramPRI3JC2RInput122);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          xychartDiagramPRI3JC2RInput6,
          xychartDiagramPRI3JC2RInput7,
          xychartDiagramPRI3JC2RInput8,
          xychartDiagramPRI3JC2RInput9,
        ) {
          switch (xychartDiagramPRI3JC2RInput8) {
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
          /^(?:\{)/i,
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
    function xychartDiagramPRI3JC2RHelper27() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper27, "Parser"),
      (xychartDiagramPRI3JC2RHelper27.prototype =
        xychartDiagramPRI3JC2RBinding48),
      (xychartDiagramPRI3JC2RBinding48.Parser = xychartDiagramPRI3JC2RHelper27),
      new xychartDiagramPRI3JC2RHelper27()
    );
  })();
  xychartDiagramPRI3JC2RBinding1.parser = xychartDiagramPRI3JC2RBinding1;
  xychartDiagramPRI3JC2RBinding2 = xychartDiagramPRI3JC2RBinding1;
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper1, "isBarPlot");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper2, "isBandAxisData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper3, "isLinearAxisData");
  xychartDiagramPRI3JC2RBinding3 = class {
    constructor(xychartDiagramPRI3JC2RInput121) {
      this.parentGroup = xychartDiagramPRI3JC2RInput121;
    }
    static {
      chunkAGHRB4JFN(this, "TextDimensionCalculatorWithFont");
    }
    getMaxDimension(
      xychartDiagramPRI3JC2RInput33,
      xychartDiagramPRI3JC2RInput34,
    ) {
      if (!this.parentGroup)
        return {
          width:
            xychartDiagramPRI3JC2RInput33.reduce(
              (accumulator, current) => Math.max(current.length, accumulator),
              0,
            ) * xychartDiagramPRI3JC2RInput34,
          height: xychartDiagramPRI3JC2RInput34,
        };
      let xychartDiagramPRI3JC2RBinding145 = {
          width: 0,
          height: 0,
        },
        xychartDiagramPRI3JC2RBinding146 = this.parentGroup
          .append("g")
          .attr("visibility", "hidden")
          .attr("font-size", xychartDiagramPRI3JC2RInput34);
      for (let xychartDiagramPRI3JC2RBinding187 of xychartDiagramPRI3JC2RInput33) {
        let xychartDiagramPRI3JC2RBinding189 = chunkJA3XYJ7ZT(
            xychartDiagramPRI3JC2RBinding146,
            1,
            xychartDiagramPRI3JC2RBinding187,
          ),
          xychartDiagramPRI3JC2RBinding190 = xychartDiagramPRI3JC2RBinding189
            ? xychartDiagramPRI3JC2RBinding189.width
            : xychartDiagramPRI3JC2RBinding187.length *
              xychartDiagramPRI3JC2RInput34,
          xychartDiagramPRI3JC2RBinding191 = xychartDiagramPRI3JC2RBinding189
            ? xychartDiagramPRI3JC2RBinding189.height
            : xychartDiagramPRI3JC2RInput34;
        xychartDiagramPRI3JC2RBinding145.width = Math.max(
          xychartDiagramPRI3JC2RBinding145.width,
          xychartDiagramPRI3JC2RBinding190,
        );
        xychartDiagramPRI3JC2RBinding145.height = Math.max(
          xychartDiagramPRI3JC2RBinding145.height,
          xychartDiagramPRI3JC2RBinding191,
        );
      }
      return (
        xychartDiagramPRI3JC2RBinding146.remove(),
        xychartDiagramPRI3JC2RBinding145
      );
    }
  };
  xychartDiagramPRI3JC2RBinding4 = 0.7;
  xychartDiagramPRI3JC2RBinding5 = 0.2;
  xychartDiagramPRI3JC2RBinding6 = class {
    constructor(
      xychartDiagramPRI3JC2RInput26,
      xychartDiagramPRI3JC2RInput27,
      xychartDiagramPRI3JC2RInput28,
      xychartDiagramPRI3JC2RInput29,
    ) {
      this.axisConfig = xychartDiagramPRI3JC2RInput26;
      this.title = xychartDiagramPRI3JC2RInput27;
      this.textDimensionCalculator = xychartDiagramPRI3JC2RInput28;
      this.axisThemeConfig = xychartDiagramPRI3JC2RInput29;
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
    setRange(xychartDiagramPRI3JC2RInput46) {
      this.range = xychartDiagramPRI3JC2RInput46;
      this.axisPosition === "left" || this.axisPosition === "right"
        ? (this.boundingRect.height =
            xychartDiagramPRI3JC2RInput46[1] - xychartDiagramPRI3JC2RInput46[0])
        : (this.boundingRect.width =
            xychartDiagramPRI3JC2RInput46[1] -
            xychartDiagramPRI3JC2RInput46[0]);
      this.recalculateScale();
    }
    getRange() {
      return [
        this.range[0] + this.outerPadding,
        this.range[1] - this.outerPadding,
      ];
    }
    setAxisPosition(xychartDiagramPRI3JC2RInput104) {
      this.axisPosition = xychartDiagramPRI3JC2RInput104;
      this.setRange(this.range);
    }
    getTickDistance() {
      let xychartDiagramPRI3JC2RBinding202 = this.getRange();
      return (
        Math.abs(
          xychartDiagramPRI3JC2RBinding202[0] -
            xychartDiagramPRI3JC2RBinding202[1],
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
      xychartDiagramPRI3JC2RBinding4 * this.getTickDistance() >
        this.outerPadding * 2 &&
        (this.outerPadding = Math.floor(
          (xychartDiagramPRI3JC2RBinding4 * this.getTickDistance()) / 2,
        ));
      this.recalculateScale();
    }
    calculateSpaceIfDrawnHorizontally(xychartDiagramPRI3JC2RInput19) {
      let xychartDiagramPRI3JC2RBinding124 =
        xychartDiagramPRI3JC2RInput19.height;
      if (
        (this.axisConfig.showAxisLine &&
          xychartDiagramPRI3JC2RBinding124 > this.axisConfig.axisLineWidth &&
          ((xychartDiagramPRI3JC2RBinding124 -= this.axisConfig.axisLineWidth),
          (this.showAxisLine = true)),
        this.axisConfig.showLabel)
      ) {
        let xychartDiagramPRI3JC2RBinding169 = this.getLabelDimension(),
          xychartDiagramPRI3JC2RBinding170 =
            xychartDiagramPRI3JC2RBinding5 *
            xychartDiagramPRI3JC2RInput19.width;
        this.outerPadding = Math.min(
          xychartDiagramPRI3JC2RBinding169.width / 2,
          xychartDiagramPRI3JC2RBinding170,
        );
        let xychartDiagramPRI3JC2RBinding171 =
          xychartDiagramPRI3JC2RBinding169.height +
          this.axisConfig.labelPadding * 2;
        this.labelTextHeight = xychartDiagramPRI3JC2RBinding169.height;
        xychartDiagramPRI3JC2RBinding171 <= xychartDiagramPRI3JC2RBinding124 &&
          ((xychartDiagramPRI3JC2RBinding124 -=
            xychartDiagramPRI3JC2RBinding171),
          (this.showLabel = true));
      }
      if (
        (this.axisConfig.showTick &&
          xychartDiagramPRI3JC2RBinding124 >= this.axisConfig.tickLength &&
          ((this.showTick = true),
          (xychartDiagramPRI3JC2RBinding124 -= this.axisConfig.tickLength)),
        this.axisConfig.showTitle && this.title)
      ) {
        let xychartDiagramPRI3JC2RBinding164 =
            this.textDimensionCalculator.getMaxDimension(
              [this.title],
              this.axisConfig.titleFontSize,
            ),
          xychartDiagramPRI3JC2RBinding165 =
            xychartDiagramPRI3JC2RBinding164.height +
            this.axisConfig.titlePadding * 2;
        this.titleTextHeight = xychartDiagramPRI3JC2RBinding164.height;
        xychartDiagramPRI3JC2RBinding165 <= xychartDiagramPRI3JC2RBinding124 &&
          ((xychartDiagramPRI3JC2RBinding124 -=
            xychartDiagramPRI3JC2RBinding165),
          (this.showTitle = true));
      }
      this.boundingRect.width = xychartDiagramPRI3JC2RInput19.width;
      this.boundingRect.height =
        xychartDiagramPRI3JC2RInput19.height - xychartDiagramPRI3JC2RBinding124;
    }
    calculateSpaceIfDrawnVertical(xychartDiagramPRI3JC2RInput21) {
      let xychartDiagramPRI3JC2RBinding135 =
        xychartDiagramPRI3JC2RInput21.width;
      if (
        (this.axisConfig.showAxisLine &&
          xychartDiagramPRI3JC2RBinding135 > this.axisConfig.axisLineWidth &&
          ((xychartDiagramPRI3JC2RBinding135 -= this.axisConfig.axisLineWidth),
          (this.showAxisLine = true)),
        this.axisConfig.showLabel)
      ) {
        let xychartDiagramPRI3JC2RBinding182 = this.getLabelDimension(),
          xychartDiagramPRI3JC2RBinding183 =
            xychartDiagramPRI3JC2RBinding5 *
            xychartDiagramPRI3JC2RInput21.height;
        this.outerPadding = Math.min(
          xychartDiagramPRI3JC2RBinding182.height / 2,
          xychartDiagramPRI3JC2RBinding183,
        );
        let xychartDiagramPRI3JC2RBinding184 =
          xychartDiagramPRI3JC2RBinding182.width +
          this.axisConfig.labelPadding * 2;
        xychartDiagramPRI3JC2RBinding184 <= xychartDiagramPRI3JC2RBinding135 &&
          ((xychartDiagramPRI3JC2RBinding135 -=
            xychartDiagramPRI3JC2RBinding184),
          (this.showLabel = true));
      }
      if (
        (this.axisConfig.showTick &&
          xychartDiagramPRI3JC2RBinding135 >= this.axisConfig.tickLength &&
          ((this.showTick = true),
          (xychartDiagramPRI3JC2RBinding135 -= this.axisConfig.tickLength)),
        this.axisConfig.showTitle && this.title)
      ) {
        let xychartDiagramPRI3JC2RBinding166 =
            this.textDimensionCalculator.getMaxDimension(
              [this.title],
              this.axisConfig.titleFontSize,
            ),
          xychartDiagramPRI3JC2RBinding167 =
            xychartDiagramPRI3JC2RBinding166.height +
            this.axisConfig.titlePadding * 2;
        this.titleTextHeight = xychartDiagramPRI3JC2RBinding166.height;
        xychartDiagramPRI3JC2RBinding167 <= xychartDiagramPRI3JC2RBinding135 &&
          ((xychartDiagramPRI3JC2RBinding135 -=
            xychartDiagramPRI3JC2RBinding167),
          (this.showTitle = true));
      }
      this.boundingRect.width =
        xychartDiagramPRI3JC2RInput21.width - xychartDiagramPRI3JC2RBinding135;
      this.boundingRect.height = xychartDiagramPRI3JC2RInput21.height;
    }
    calculateSpace(xychartDiagramPRI3JC2RInput39) {
      return (
        this.axisPosition === "left" || this.axisPosition === "right"
          ? this.calculateSpaceIfDrawnVertical(xychartDiagramPRI3JC2RInput39)
          : this.calculateSpaceIfDrawnHorizontally(
              xychartDiagramPRI3JC2RInput39,
            ),
        this.recalculateScale(),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    setBoundingBoxXY(xychartDiagramPRI3JC2RInput100) {
      this.boundingRect.x = xychartDiagramPRI3JC2RInput100.x;
      this.boundingRect.y = xychartDiagramPRI3JC2RInput100.y;
    }
    getDrawableElementsForLeftAxis() {
      let xychartDiagramPRI3JC2RBinding90 = [];
      if (this.showAxisLine) {
        let xychartDiagramPRI3JC2RBinding149 =
          this.boundingRect.x +
          this.boundingRect.width -
          this.axisConfig.axisLineWidth / 2;
        xychartDiagramPRI3JC2RBinding90.push({
          type: "path",
          groupTexts: ["left-axis", "axisl-line"],
          data: [
            {
              path: `M ${xychartDiagramPRI3JC2RBinding149},${this.boundingRect.y} L ${xychartDiagramPRI3JC2RBinding149},${this.boundingRect.y + this.boundingRect.height} `,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagramPRI3JC2RBinding90.push({
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
        let xychartDiagramPRI3JC2RBinding148 =
          this.boundingRect.x +
          this.boundingRect.width -
          (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        xychartDiagramPRI3JC2RBinding90.push({
          type: "path",
          groupTexts: ["left-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${xychartDiagramPRI3JC2RBinding148},${this.getScaleValue(item)} L ${xychartDiagramPRI3JC2RBinding148 - this.axisConfig.tickLength},${this.getScaleValue(item)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagramPRI3JC2RBinding90.push({
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
        xychartDiagramPRI3JC2RBinding90
      );
    }
    getDrawableElementsForBottomAxis() {
      let xychartDiagramPRI3JC2RBinding91 = [];
      if (this.showAxisLine) {
        let xychartDiagramPRI3JC2RBinding154 =
          this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
        xychartDiagramPRI3JC2RBinding91.push({
          type: "path",
          groupTexts: ["bottom-axis", "axis-line"],
          data: [
            {
              path: `M ${this.boundingRect.x},${xychartDiagramPRI3JC2RBinding154} L ${this.boundingRect.x + this.boundingRect.width},${xychartDiagramPRI3JC2RBinding154}`,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagramPRI3JC2RBinding91.push({
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
        let xychartDiagramPRI3JC2RBinding151 =
          this.boundingRect.y +
          (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        xychartDiagramPRI3JC2RBinding91.push({
          type: "path",
          groupTexts: ["bottom-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${this.getScaleValue(item)},${xychartDiagramPRI3JC2RBinding151} L ${this.getScaleValue(item)},${xychartDiagramPRI3JC2RBinding151 + this.axisConfig.tickLength}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagramPRI3JC2RBinding91.push({
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
        xychartDiagramPRI3JC2RBinding91
      );
    }
    getDrawableElementsForTopAxis() {
      let xychartDiagramPRI3JC2RBinding92 = [];
      if (this.showAxisLine) {
        let xychartDiagramPRI3JC2RBinding150 =
          this.boundingRect.y +
          this.boundingRect.height -
          this.axisConfig.axisLineWidth / 2;
        xychartDiagramPRI3JC2RBinding92.push({
          type: "path",
          groupTexts: ["top-axis", "axis-line"],
          data: [
            {
              path: `M ${this.boundingRect.x},${xychartDiagramPRI3JC2RBinding150} L ${this.boundingRect.x + this.boundingRect.width},${xychartDiagramPRI3JC2RBinding150}`,
              strokeFill: this.axisThemeConfig.axisLineColor,
              strokeWidth: this.axisConfig.axisLineWidth,
            },
          ],
        });
      }
      if (
        (this.showLabel &&
          xychartDiagramPRI3JC2RBinding92.push({
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
        let xychartDiagramPRI3JC2RBinding147 = this.boundingRect.y;
        xychartDiagramPRI3JC2RBinding92.push({
          type: "path",
          groupTexts: ["top-axis", "ticks"],
          data: this.getTickValues().map((item) => ({
            path: `M ${this.getScaleValue(item)},${xychartDiagramPRI3JC2RBinding147 + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(item)},${xychartDiagramPRI3JC2RBinding147 + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth,
          })),
        });
      }
      return (
        this.showTitle &&
          xychartDiagramPRI3JC2RBinding92.push({
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
        xychartDiagramPRI3JC2RBinding92
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
  xychartDiagramPRI3JC2RBinding7 = class extends (
    xychartDiagramPRI3JC2RBinding6
  ) {
    static {
      chunkAGHRB4JFN(this, "BandAxis");
    }
    constructor(
      xychartDiagramPRI3JC2RInput65,
      xychartDiagramPRI3JC2RInput66,
      xychartDiagramPRI3JC2RInput67,
      xychartDiagramPRI3JC2RInput68,
      xychartDiagramPRI3JC2RInput69,
    ) {
      super(
        xychartDiagramPRI3JC2RInput65,
        xychartDiagramPRI3JC2RInput68,
        xychartDiagramPRI3JC2RInput69,
        xychartDiagramPRI3JC2RInput66,
      );
      this.categories = xychartDiagramPRI3JC2RInput67;
      this.scale = AppInitialHat()
        .domain(this.categories)
        .range(this.getRange());
    }
    setRange(xychartDiagramPRI3JC2RInput126) {
      super.setRange(xychartDiagramPRI3JC2RInput126);
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
    getScaleValue(xychartDiagramPRI3JC2RInput109) {
      return this.scale(xychartDiagramPRI3JC2RInput109) ?? this.getRange()[0];
    }
  };
  xychartDiagramPRI3JC2RBinding8 = class extends (
    xychartDiagramPRI3JC2RBinding6
  ) {
    static {
      chunkAGHRB4JFN(this, "LinearAxis");
    }
    constructor(
      xychartDiagramPRI3JC2RInput70,
      xychartDiagramPRI3JC2RInput71,
      xychartDiagramPRI3JC2RInput72,
      xychartDiagramPRI3JC2RInput73,
      xychartDiagramPRI3JC2RInput74,
    ) {
      super(
        xychartDiagramPRI3JC2RInput70,
        xychartDiagramPRI3JC2RInput73,
        xychartDiagramPRI3JC2RInput74,
        xychartDiagramPRI3JC2RInput71,
      );
      this.domain = xychartDiagramPRI3JC2RInput72;
      this.scale = AppInitialMat().domain(this.domain).range(this.getRange());
    }
    getTickValues() {
      return this.scale.ticks();
    }
    recalculateScale() {
      let xychartDiagramPRI3JC2RBinding197 = [...this.domain];
      this.axisPosition === "left" &&
        xychartDiagramPRI3JC2RBinding197.reverse();
      this.scale = AppInitialMat()
        .domain(xychartDiagramPRI3JC2RBinding197)
        .range(this.getRange());
    }
    getScaleValue(xychartDiagramPRI3JC2RInput120) {
      return this.scale(xychartDiagramPRI3JC2RInput120);
    }
  };
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper4, "getAxis");
  xychartDiagramPRI3JC2RBinding9 = class {
    constructor(
      xychartDiagramPRI3JC2RInput41,
      xychartDiagramPRI3JC2RInput42,
      xychartDiagramPRI3JC2RInput43,
      xychartDiagramPRI3JC2RInput44,
    ) {
      this.textDimensionCalculator = xychartDiagramPRI3JC2RInput41;
      this.chartConfig = xychartDiagramPRI3JC2RInput42;
      this.chartData = xychartDiagramPRI3JC2RInput43;
      this.chartThemeConfig = xychartDiagramPRI3JC2RInput44;
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
    setBoundingBoxXY(xychartDiagramPRI3JC2RInput101) {
      this.boundingRect.x = xychartDiagramPRI3JC2RInput101.x;
      this.boundingRect.y = xychartDiagramPRI3JC2RInput101.y;
    }
    calculateSpace(xychartDiagramPRI3JC2RInput32) {
      let xychartDiagramPRI3JC2RBinding142 =
          this.textDimensionCalculator.getMaxDimension(
            [this.chartData.title],
            this.chartConfig.titleFontSize,
          ),
        xychartDiagramPRI3JC2RBinding143 = Math.max(
          xychartDiagramPRI3JC2RBinding142.width,
          xychartDiagramPRI3JC2RInput32.width,
        ),
        xychartDiagramPRI3JC2RBinding144 =
          xychartDiagramPRI3JC2RBinding142.height +
          2 * this.chartConfig.titlePadding;
      return (
        xychartDiagramPRI3JC2RBinding142.width <=
          xychartDiagramPRI3JC2RBinding143 &&
          xychartDiagramPRI3JC2RBinding142.height <=
            xychartDiagramPRI3JC2RBinding144 &&
          this.chartConfig.showTitle &&
          this.chartData.title &&
          ((this.boundingRect.width = xychartDiagramPRI3JC2RBinding143),
          (this.boundingRect.height = xychartDiagramPRI3JC2RBinding144),
          (this.showChartTitle = true)),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    getDrawableElements() {
      let xychartDiagramPRI3JC2RBinding141 = [];
      return (
        this.showChartTitle &&
          xychartDiagramPRI3JC2RBinding141.push({
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
        xychartDiagramPRI3JC2RBinding141
      );
    }
  };
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper5, "getChartTitleComponent");
  xychartDiagramPRI3JC2RBinding10 = class {
    constructor(
      xychartDiagramPRI3JC2RInput58,
      xychartDiagramPRI3JC2RInput59,
      xychartDiagramPRI3JC2RInput60,
      xychartDiagramPRI3JC2RInput61,
      xychartDiagramPRI3JC2RInput62,
    ) {
      this.plotData = xychartDiagramPRI3JC2RInput58;
      this.xAxis = xychartDiagramPRI3JC2RInput59;
      this.yAxis = xychartDiagramPRI3JC2RInput60;
      this.orientation = xychartDiagramPRI3JC2RInput61;
      this.plotIndex = xychartDiagramPRI3JC2RInput62;
    }
    static {
      chunkAGHRB4JFN(this, "LinePlot");
    }
    getDrawableElement() {
      let xychartDiagramPRI3JC2RBinding137 = this.plotData.data.map((item) => [
          this.xAxis.getScaleValue(item[0]),
          this.yAxis.getScaleValue(item[1]),
        ]),
        xychartDiagramPRI3JC2RBinding138;
      return (
        (xychartDiagramPRI3JC2RBinding138 =
          this.orientation === "horizontal"
            ? AppInitialAit()
                .y(
                  (xychartDiagramPRI3JC2RInput153) =>
                    xychartDiagramPRI3JC2RInput153[0],
                )
                .x(
                  (xychartDiagramPRI3JC2RInput154) =>
                    xychartDiagramPRI3JC2RInput154[1],
                )(xychartDiagramPRI3JC2RBinding137)
            : AppInitialAit()
                .x(
                  (xychartDiagramPRI3JC2RInput155) =>
                    xychartDiagramPRI3JC2RInput155[0],
                )
                .y(
                  (xychartDiagramPRI3JC2RInput156) =>
                    xychartDiagramPRI3JC2RInput156[1],
                )(xychartDiagramPRI3JC2RBinding137)),
        xychartDiagramPRI3JC2RBinding138
          ? [
              {
                groupTexts: ["plot", `line-plot-${this.plotIndex}`],
                type: "path",
                data: [
                  {
                    path: xychartDiagramPRI3JC2RBinding138,
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
      xychartDiagramPRI3JC2RInput48,
      xychartDiagramPRI3JC2RInput49,
      xychartDiagramPRI3JC2RInput50,
      xychartDiagramPRI3JC2RInput51,
      xychartDiagramPRI3JC2RInput52,
      xychartDiagramPRI3JC2RInput53,
    ) {
      this.barData = xychartDiagramPRI3JC2RInput48;
      this.boundingRect = xychartDiagramPRI3JC2RInput49;
      this.xAxis = xychartDiagramPRI3JC2RInput50;
      this.yAxis = xychartDiagramPRI3JC2RInput51;
      this.orientation = xychartDiagramPRI3JC2RInput52;
      this.plotIndex = xychartDiagramPRI3JC2RInput53;
    }
    static {
      chunkAGHRB4JFN(this, "BarPlot");
    }
    getDrawableElement() {
      let xychartDiagramPRI3JC2RBinding116 = this.barData.data.map((item) => [
          this.xAxis.getScaleValue(item[0]),
          this.yAxis.getScaleValue(item[1]),
        ]),
        xychartDiagramPRI3JC2RBinding117 =
          Math.min(
            this.xAxis.getAxisOuterPadding() * 2,
            this.xAxis.getTickDistance(),
          ) * 0.95,
        xychartDiagramPRI3JC2RBinding118 = xychartDiagramPRI3JC2RBinding117 / 2;
      return this.orientation === "horizontal"
        ? [
            {
              groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
              type: "rect",
              data: xychartDiagramPRI3JC2RBinding116.map((item) => ({
                x: this.boundingRect.x,
                y: item[0] - xychartDiagramPRI3JC2RBinding118,
                height: xychartDiagramPRI3JC2RBinding117,
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
              data: xychartDiagramPRI3JC2RBinding116.map((item) => ({
                x: item[0] - xychartDiagramPRI3JC2RBinding118,
                y: item[1],
                width: xychartDiagramPRI3JC2RBinding117,
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
  xychartDiagramPRI3JC2RBinding11 = class {
    constructor(
      xychartDiagramPRI3JC2RInput54,
      xychartDiagramPRI3JC2RInput55,
      xychartDiagramPRI3JC2RInput56,
    ) {
      this.chartConfig = xychartDiagramPRI3JC2RInput54;
      this.chartData = xychartDiagramPRI3JC2RInput55;
      this.chartThemeConfig = xychartDiagramPRI3JC2RInput56;
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
    setAxes(xychartDiagramPRI3JC2RInput111, xychartDiagramPRI3JC2RInput112) {
      this.xAxis = xychartDiagramPRI3JC2RInput111;
      this.yAxis = xychartDiagramPRI3JC2RInput112;
    }
    setBoundingBoxXY(xychartDiagramPRI3JC2RInput102) {
      this.boundingRect.x = xychartDiagramPRI3JC2RInput102.x;
      this.boundingRect.y = xychartDiagramPRI3JC2RInput102.y;
    }
    calculateSpace(xychartDiagramPRI3JC2RInput47) {
      return (
        (this.boundingRect.width = xychartDiagramPRI3JC2RInput47.width),
        (this.boundingRect.height = xychartDiagramPRI3JC2RInput47.height),
        {
          width: this.boundingRect.width,
          height: this.boundingRect.height,
        }
      );
    }
    getDrawableElements() {
      if (!(this.xAxis && this.yAxis))
        throw Error("Axes must be passed to render Plots");
      let xychartDiagramPRI3JC2RBinding136 = [];
      for (let [
        xychartDiagramPRI3JC2RBinding139,
        xychartDiagramPRI3JC2RBinding140,
      ] of this.chartData.plots.entries())
        switch (xychartDiagramPRI3JC2RBinding140.type) {
          case "line":
            {
              let xychartDiagramPRI3JC2RBinding174 =
                new xychartDiagramPRI3JC2RBinding10(
                  xychartDiagramPRI3JC2RBinding140,
                  this.xAxis,
                  this.yAxis,
                  this.chartConfig.chartOrientation,
                  xychartDiagramPRI3JC2RBinding139,
                );
              xychartDiagramPRI3JC2RBinding136.push(
                ...xychartDiagramPRI3JC2RBinding174.getDrawableElement(),
              );
            }
            break;
          case "bar":
            {
              let xychartDiagramPRI3JC2RBinding168 = new _e(
                xychartDiagramPRI3JC2RBinding140,
                this.boundingRect,
                this.xAxis,
                this.yAxis,
                this.chartConfig.chartOrientation,
                xychartDiagramPRI3JC2RBinding139,
              );
              xychartDiagramPRI3JC2RBinding136.push(
                ...xychartDiagramPRI3JC2RBinding168.getDrawableElement(),
              );
            }
            break;
        }
      return xychartDiagramPRI3JC2RBinding136;
    }
  };
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper6, "getPlotComponent");
  xychartDiagramPRI3JC2RBinding12 = class {
    constructor(
      xychartDiagramPRI3JC2RInput22,
      xychartDiagramPRI3JC2RInput23,
      xychartDiagramPRI3JC2RInput24,
      xychartDiagramPRI3JC2RInput25,
    ) {
      this.chartConfig = xychartDiagramPRI3JC2RInput22;
      this.chartData = xychartDiagramPRI3JC2RInput23;
      this.componentStore = {
        title: xychartDiagramPRI3JC2RHelper5(
          xychartDiagramPRI3JC2RInput22,
          xychartDiagramPRI3JC2RInput23,
          xychartDiagramPRI3JC2RInput24,
          xychartDiagramPRI3JC2RInput25,
        ),
        plot: xychartDiagramPRI3JC2RHelper6(
          xychartDiagramPRI3JC2RInput22,
          xychartDiagramPRI3JC2RInput23,
          xychartDiagramPRI3JC2RInput24,
        ),
        xAxis: xychartDiagramPRI3JC2RHelper4(
          xychartDiagramPRI3JC2RInput23.xAxis,
          xychartDiagramPRI3JC2RInput22.xAxis,
          {
            titleColor: xychartDiagramPRI3JC2RInput24.xAxisTitleColor,
            labelColor: xychartDiagramPRI3JC2RInput24.xAxisLabelColor,
            tickColor: xychartDiagramPRI3JC2RInput24.xAxisTickColor,
            axisLineColor: xychartDiagramPRI3JC2RInput24.xAxisLineColor,
          },
          xychartDiagramPRI3JC2RInput25,
        ),
        yAxis: xychartDiagramPRI3JC2RHelper4(
          xychartDiagramPRI3JC2RInput23.yAxis,
          xychartDiagramPRI3JC2RInput22.yAxis,
          {
            titleColor: xychartDiagramPRI3JC2RInput24.yAxisTitleColor,
            labelColor: xychartDiagramPRI3JC2RInput24.yAxisLabelColor,
            tickColor: xychartDiagramPRI3JC2RInput24.yAxisTickColor,
            axisLineColor: xychartDiagramPRI3JC2RInput24.yAxisLineColor,
          },
          xychartDiagramPRI3JC2RInput25,
        ),
      };
    }
    static {
      chunkAGHRB4JFN(this, "Orchestrator");
    }
    calculateVerticalSpace() {
      let xychartDiagramPRI3JC2RBinding105 = this.chartConfig.width,
        xychartDiagramPRI3JC2RBinding106 = this.chartConfig.height,
        xychartDiagramPRI3JC2RBinding107 = 0,
        xychartDiagramPRI3JC2RBinding108 = 0,
        xychartDiagramPRI3JC2RBinding109 = Math.floor(
          (xychartDiagramPRI3JC2RBinding105 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagramPRI3JC2RBinding110 = Math.floor(
          (xychartDiagramPRI3JC2RBinding106 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagramPRI3JC2RBinding111 =
          this.componentStore.plot.calculateSpace({
            width: xychartDiagramPRI3JC2RBinding109,
            height: xychartDiagramPRI3JC2RBinding110,
          });
      xychartDiagramPRI3JC2RBinding105 -=
        xychartDiagramPRI3JC2RBinding111.width;
      xychartDiagramPRI3JC2RBinding106 -=
        xychartDiagramPRI3JC2RBinding111.height;
      xychartDiagramPRI3JC2RBinding111 =
        this.componentStore.title.calculateSpace({
          width: this.chartConfig.width,
          height: xychartDiagramPRI3JC2RBinding106,
        });
      xychartDiagramPRI3JC2RBinding108 =
        xychartDiagramPRI3JC2RBinding111.height;
      xychartDiagramPRI3JC2RBinding106 -=
        xychartDiagramPRI3JC2RBinding111.height;
      this.componentStore.xAxis.setAxisPosition("bottom");
      xychartDiagramPRI3JC2RBinding111 =
        this.componentStore.xAxis.calculateSpace({
          width: xychartDiagramPRI3JC2RBinding105,
          height: xychartDiagramPRI3JC2RBinding106,
        });
      xychartDiagramPRI3JC2RBinding106 -=
        xychartDiagramPRI3JC2RBinding111.height;
      this.componentStore.yAxis.setAxisPosition("left");
      xychartDiagramPRI3JC2RBinding111 =
        this.componentStore.yAxis.calculateSpace({
          width: xychartDiagramPRI3JC2RBinding105,
          height: xychartDiagramPRI3JC2RBinding106,
        });
      xychartDiagramPRI3JC2RBinding107 = xychartDiagramPRI3JC2RBinding111.width;
      xychartDiagramPRI3JC2RBinding105 -=
        xychartDiagramPRI3JC2RBinding111.width;
      xychartDiagramPRI3JC2RBinding105 > 0 &&
        ((xychartDiagramPRI3JC2RBinding109 += xychartDiagramPRI3JC2RBinding105),
        (xychartDiagramPRI3JC2RBinding105 = 0));
      xychartDiagramPRI3JC2RBinding106 > 0 &&
        ((xychartDiagramPRI3JC2RBinding110 += xychartDiagramPRI3JC2RBinding106),
        (xychartDiagramPRI3JC2RBinding106 = 0));
      this.componentStore.plot.calculateSpace({
        width: xychartDiagramPRI3JC2RBinding109,
        height: xychartDiagramPRI3JC2RBinding110,
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: xychartDiagramPRI3JC2RBinding107,
        y: xychartDiagramPRI3JC2RBinding108,
      });
      this.componentStore.xAxis.setRange([
        xychartDiagramPRI3JC2RBinding107,
        xychartDiagramPRI3JC2RBinding107 + xychartDiagramPRI3JC2RBinding109,
      ]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: xychartDiagramPRI3JC2RBinding107,
        y: xychartDiagramPRI3JC2RBinding108 + xychartDiagramPRI3JC2RBinding110,
      });
      this.componentStore.yAxis.setRange([
        xychartDiagramPRI3JC2RBinding108,
        xychartDiagramPRI3JC2RBinding108 + xychartDiagramPRI3JC2RBinding110,
      ]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: 0,
        y: xychartDiagramPRI3JC2RBinding108,
      });
      this.chartData.plots.some((item) =>
        xychartDiagramPRI3JC2RHelper1(item),
      ) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
    calculateHorizontalSpace() {
      let xychartDiagramPRI3JC2RBinding97 = this.chartConfig.width,
        xychartDiagramPRI3JC2RBinding98 = this.chartConfig.height,
        xychartDiagramPRI3JC2RBinding99 = 0,
        xychartDiagramPRI3JC2RBinding100 = 0,
        xychartDiagramPRI3JC2RBinding101 = 0,
        xychartDiagramPRI3JC2RBinding102 = Math.floor(
          (xychartDiagramPRI3JC2RBinding97 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagramPRI3JC2RBinding103 = Math.floor(
          (xychartDiagramPRI3JC2RBinding98 *
            this.chartConfig.plotReservedSpacePercent) /
            100,
        ),
        xychartDiagramPRI3JC2RBinding104 =
          this.componentStore.plot.calculateSpace({
            width: xychartDiagramPRI3JC2RBinding102,
            height: xychartDiagramPRI3JC2RBinding103,
          });
      xychartDiagramPRI3JC2RBinding97 -= xychartDiagramPRI3JC2RBinding104.width;
      xychartDiagramPRI3JC2RBinding98 -=
        xychartDiagramPRI3JC2RBinding104.height;
      xychartDiagramPRI3JC2RBinding104 =
        this.componentStore.title.calculateSpace({
          width: this.chartConfig.width,
          height: xychartDiagramPRI3JC2RBinding98,
        });
      xychartDiagramPRI3JC2RBinding99 = xychartDiagramPRI3JC2RBinding104.height;
      xychartDiagramPRI3JC2RBinding98 -=
        xychartDiagramPRI3JC2RBinding104.height;
      this.componentStore.xAxis.setAxisPosition("left");
      xychartDiagramPRI3JC2RBinding104 =
        this.componentStore.xAxis.calculateSpace({
          width: xychartDiagramPRI3JC2RBinding97,
          height: xychartDiagramPRI3JC2RBinding98,
        });
      xychartDiagramPRI3JC2RBinding97 -= xychartDiagramPRI3JC2RBinding104.width;
      xychartDiagramPRI3JC2RBinding100 = xychartDiagramPRI3JC2RBinding104.width;
      this.componentStore.yAxis.setAxisPosition("top");
      xychartDiagramPRI3JC2RBinding104 =
        this.componentStore.yAxis.calculateSpace({
          width: xychartDiagramPRI3JC2RBinding97,
          height: xychartDiagramPRI3JC2RBinding98,
        });
      xychartDiagramPRI3JC2RBinding98 -=
        xychartDiagramPRI3JC2RBinding104.height;
      xychartDiagramPRI3JC2RBinding101 =
        xychartDiagramPRI3JC2RBinding99 +
        xychartDiagramPRI3JC2RBinding104.height;
      xychartDiagramPRI3JC2RBinding97 > 0 &&
        ((xychartDiagramPRI3JC2RBinding102 += xychartDiagramPRI3JC2RBinding97),
        (xychartDiagramPRI3JC2RBinding97 = 0));
      xychartDiagramPRI3JC2RBinding98 > 0 &&
        ((xychartDiagramPRI3JC2RBinding103 += xychartDiagramPRI3JC2RBinding98),
        (xychartDiagramPRI3JC2RBinding98 = 0));
      this.componentStore.plot.calculateSpace({
        width: xychartDiagramPRI3JC2RBinding102,
        height: xychartDiagramPRI3JC2RBinding103,
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: xychartDiagramPRI3JC2RBinding100,
        y: xychartDiagramPRI3JC2RBinding101,
      });
      this.componentStore.yAxis.setRange([
        xychartDiagramPRI3JC2RBinding100,
        xychartDiagramPRI3JC2RBinding100 + xychartDiagramPRI3JC2RBinding102,
      ]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: xychartDiagramPRI3JC2RBinding100,
        y: xychartDiagramPRI3JC2RBinding99,
      });
      this.componentStore.xAxis.setRange([
        xychartDiagramPRI3JC2RBinding101,
        xychartDiagramPRI3JC2RBinding101 + xychartDiagramPRI3JC2RBinding103,
      ]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: 0,
        y: xychartDiagramPRI3JC2RBinding101,
      });
      this.chartData.plots.some((item) =>
        xychartDiagramPRI3JC2RHelper1(item),
      ) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
    }
    calculateSpace() {
      this.chartConfig.chartOrientation === "horizontal"
        ? this.calculateHorizontalSpace()
        : this.calculateVerticalSpace();
    }
    getDrawableElement() {
      this.calculateSpace();
      let xychartDiagramPRI3JC2RBinding163 = [];
      this.componentStore.plot.setAxes(
        this.componentStore.xAxis,
        this.componentStore.yAxis,
      );
      for (let xychartDiagramPRI3JC2RBinding205 of Object.values(
        this.componentStore,
      ))
        xychartDiagramPRI3JC2RBinding163.push(
          ...xychartDiagramPRI3JC2RBinding205.getDrawableElements(),
        );
      return xychartDiagramPRI3JC2RBinding163;
    }
  };
  xychartDiagramPRI3JC2RBinding13 = class {
    static {
      chunkAGHRB4JFN(this, "XYChartBuilder");
    }
    static build(
      xychartDiagramPRI3JC2RInput105,
      xychartDiagramPRI3JC2RInput106,
      xychartDiagramPRI3JC2RInput107,
      xychartDiagramPRI3JC2RInput108,
    ) {
      return new xychartDiagramPRI3JC2RBinding12(
        xychartDiagramPRI3JC2RInput105,
        xychartDiagramPRI3JC2RInput106,
        xychartDiagramPRI3JC2RInput107,
        xychartDiagramPRI3JC2RInput108,
      ).getDrawableElement();
    }
  };
  xychartDiagramPRI3JC2RBinding14 = 0;
  xychartDiagramPRI3JC2RBinding15 = xychartDiagramPRI3JC2RHelper8();
  xychartDiagramPRI3JC2RBinding16 = xychartDiagramPRI3JC2RHelper7();
  xychartDiagramPRI3JC2RBinding17 = xychartDiagramPRI3JC2RHelper9();
  xychartDiagramPRI3JC2RBinding18 =
    xychartDiagramPRI3JC2RBinding16.plotColorPalette
      .split(",")
      .map((item) => item.trim());
  xychartDiagramPRI3JC2RBinding19 = false;
  $ = false;
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper7, "getChartDefaultThemeConfig");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper8, "getChartDefaultConfig");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper9, "getChartDefaultData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper10, "textSanitizer");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper11, "setTmpSVGG");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper12, "setOrientation");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper13, "setXAxisTitle");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper14, "setXAxisRangeData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper15, "setXAxisBand");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper16, "setYAxisTitle");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper17, "setYAxisRangeData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper18, "setYAxisRangeFromPlotData");
  chunkAGHRB4JFN(
    xychartDiagramPRI3JC2RHelper19,
    "transformDataWithoutCategory",
  );
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper20, "getPlotColorFromPalette");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper21, "setLineData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper22, "setBarData");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper23, "getDrawableElem");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper24, "getChartThemeConfig");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper25, "getChartConfig");
  chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper26, "getXYChartData");
  XychartDiagramPRI3JC2R = {
    parser: xychartDiagramPRI3JC2RBinding2,
    db: {
      getDrawableElem: xychartDiagramPRI3JC2RHelper23,
      clear: chunkAGHRB4JFN(function () {
        chunkABZYJK2DA();
        xychartDiagramPRI3JC2RBinding14 = 0;
        xychartDiagramPRI3JC2RBinding15 = xychartDiagramPRI3JC2RHelper8();
        xychartDiagramPRI3JC2RBinding17 = xychartDiagramPRI3JC2RHelper9();
        xychartDiagramPRI3JC2RBinding16 = xychartDiagramPRI3JC2RHelper7();
        xychartDiagramPRI3JC2RBinding18 =
          xychartDiagramPRI3JC2RBinding16.plotColorPalette
            .split(",")
            .map((item) => item.trim());
        xychartDiagramPRI3JC2RBinding19 = false;
        $ = false;
      }, "clear"),
      setAccTitle: chunkABZYJK2DV,
      getAccTitle: _chunkABZYJK2DV,
      setDiagramTitle: chunkABZYJK2DW,
      getDiagramTitle: chunkABZYJK2DC,
      getAccDescription: chunkABZYJK2DUnderscore,
      setAccDescription: chunkABZYJK2DB,
      setOrientation: xychartDiagramPRI3JC2RHelper12,
      setXAxisTitle: xychartDiagramPRI3JC2RHelper13,
      setXAxisRangeData: xychartDiagramPRI3JC2RHelper14,
      setXAxisBand: xychartDiagramPRI3JC2RHelper15,
      setYAxisTitle: xychartDiagramPRI3JC2RHelper16,
      setYAxisRangeData: xychartDiagramPRI3JC2RHelper17,
      setLineData: xychartDiagramPRI3JC2RHelper21,
      setBarData: xychartDiagramPRI3JC2RHelper22,
      setTmpSVGG: xychartDiagramPRI3JC2RHelper11,
      getChartThemeConfig: xychartDiagramPRI3JC2RHelper24,
      getChartConfig: xychartDiagramPRI3JC2RHelper25,
      getXYChartData: xychartDiagramPRI3JC2RHelper26,
    },
    renderer: {
      draw: chunkAGHRB4JFN(
        (
          xychartDiagramPRI3JC2RInput1,
          xychartDiagramPRI3JC2RInput2,
          xychartDiagramPRI3JC2RInput3,
          xychartDiagramPRI3JC2RInput4,
        ) => {
          let xychartDiagramPRI3JC2RBinding49 = xychartDiagramPRI3JC2RInput4.db,
            xychartDiagramPRI3JC2RBinding50 =
              xychartDiagramPRI3JC2RBinding49.getChartThemeConfig(),
            xychartDiagramPRI3JC2RBinding51 =
              xychartDiagramPRI3JC2RBinding49.getChartConfig(),
            xychartDiagramPRI3JC2RBinding52 = xychartDiagramPRI3JC2RBinding49
              .getXYChartData()
              .plots[0].data.map((item) => item[1]);
          function xychartDiagramPRI3JC2RHelper28(
            xychartDiagramPRI3JC2RInput103,
          ) {
            return xychartDiagramPRI3JC2RInput103 === "top"
              ? "text-before-edge"
              : "middle";
          }
          chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper28, "getDominantBaseLine");
          function xychartDiagramPRI3JC2RHelper29(
            xychartDiagramPRI3JC2RInput95,
          ) {
            return xychartDiagramPRI3JC2RInput95 === "left"
              ? "start"
              : xychartDiagramPRI3JC2RInput95 === "right"
                ? "end"
                : "middle";
          }
          chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper29, "getTextAnchor");
          function xychartDiagramPRI3JC2RHelper30(
            xychartDiagramPRI3JC2RInput96,
          ) {
            return `translate(${xychartDiagramPRI3JC2RInput96.x}, ${xychartDiagramPRI3JC2RInput96.y}) rotate(${xychartDiagramPRI3JC2RInput96.rotation || 0})`;
          }
          chunkAGHRB4JFN(
            xychartDiagramPRI3JC2RHelper30,
            "getTextTransformation",
          );
          chunkAGHRB4JFI.debug(
            "Rendering xychart chart\n" + xychartDiagramPRI3JC2RInput1,
          );
          let xychartDiagramPRI3JC2RBinding53 = chunkEXTU4WIEN(
              xychartDiagramPRI3JC2RInput2,
            ),
            xychartDiagramPRI3JC2RBinding54 = xychartDiagramPRI3JC2RBinding53
              .append("g")
              .attr("class", "main"),
            xychartDiagramPRI3JC2RBinding55 = xychartDiagramPRI3JC2RBinding54
              .append("rect")
              .attr("width", xychartDiagramPRI3JC2RBinding51.width)
              .attr("height", xychartDiagramPRI3JC2RBinding51.height)
              .attr("class", "background");
          _chunkABZYJK2DC(
            xychartDiagramPRI3JC2RBinding53,
            xychartDiagramPRI3JC2RBinding51.height,
            xychartDiagramPRI3JC2RBinding51.width,
            true,
          );
          xychartDiagramPRI3JC2RBinding53.attr(
            "viewBox",
            `0 0 ${xychartDiagramPRI3JC2RBinding51.width} ${xychartDiagramPRI3JC2RBinding51.height}`,
          );
          xychartDiagramPRI3JC2RBinding55.attr(
            "fill",
            xychartDiagramPRI3JC2RBinding50.backgroundColor,
          );
          xychartDiagramPRI3JC2RBinding49.setTmpSVGG(
            xychartDiagramPRI3JC2RBinding53
              .append("g")
              .attr("class", "mermaid-tmp-group"),
          );
          let xychartDiagramPRI3JC2RBinding56 =
              xychartDiagramPRI3JC2RBinding49.getDrawableElem(),
            xychartDiagramPRI3JC2RBinding57 = {};
          function xychartDiagramPRI3JC2RHelper31(
            xychartDiagramPRI3JC2RInput40,
          ) {
            let xychartDiagramPRI3JC2RBinding161 =
                xychartDiagramPRI3JC2RBinding54,
              xychartDiagramPRI3JC2RBinding162 = "";
            for (let [
              xychartDiagramPRI3JC2RBinding186,
            ] of xychartDiagramPRI3JC2RInput40.entries()) {
              let xychartDiagramPRI3JC2RBinding192 =
                xychartDiagramPRI3JC2RBinding54;
              xychartDiagramPRI3JC2RBinding186 > 0 &&
                xychartDiagramPRI3JC2RBinding57[
                  xychartDiagramPRI3JC2RBinding162
                ] &&
                (xychartDiagramPRI3JC2RBinding192 =
                  xychartDiagramPRI3JC2RBinding57[
                    xychartDiagramPRI3JC2RBinding162
                  ]);
              xychartDiagramPRI3JC2RBinding162 +=
                xychartDiagramPRI3JC2RInput40[xychartDiagramPRI3JC2RBinding186];
              xychartDiagramPRI3JC2RBinding161 =
                xychartDiagramPRI3JC2RBinding57[
                  xychartDiagramPRI3JC2RBinding162
                ];
              xychartDiagramPRI3JC2RBinding161 ||=
                xychartDiagramPRI3JC2RBinding57[
                  xychartDiagramPRI3JC2RBinding162
                ] = xychartDiagramPRI3JC2RBinding192
                  .append("g")
                  .attr(
                    "class",
                    xychartDiagramPRI3JC2RInput40[
                      xychartDiagramPRI3JC2RBinding186
                    ],
                  );
            }
            return xychartDiagramPRI3JC2RBinding161;
          }
          chunkAGHRB4JFN(xychartDiagramPRI3JC2RHelper31, "getGroup");
          for (let xychartDiagramPRI3JC2RBinding87 of xychartDiagramPRI3JC2RBinding56) {
            if (xychartDiagramPRI3JC2RBinding87.data.length === 0) continue;
            let xychartDiagramPRI3JC2RBinding88 =
              xychartDiagramPRI3JC2RHelper31(
                xychartDiagramPRI3JC2RBinding87.groupTexts,
              );
            switch (xychartDiagramPRI3JC2RBinding87.type) {
              case "rect":
                if (
                  (xychartDiagramPRI3JC2RBinding88
                    .selectAll("rect")
                    .data(xychartDiagramPRI3JC2RBinding87.data)
                    .enter()
                    .append("rect")
                    .attr(
                      "x",
                      (xychartDiagramPRI3JC2RInput158) =>
                        xychartDiagramPRI3JC2RInput158.x,
                    )
                    .attr(
                      "y",
                      (xychartDiagramPRI3JC2RInput159) =>
                        xychartDiagramPRI3JC2RInput159.y,
                    )
                    .attr(
                      "width",
                      (xychartDiagramPRI3JC2RInput146) =>
                        xychartDiagramPRI3JC2RInput146.width,
                    )
                    .attr(
                      "height",
                      (xychartDiagramPRI3JC2RInput145) =>
                        xychartDiagramPRI3JC2RInput145.height,
                    )
                    .attr(
                      "fill",
                      (xychartDiagramPRI3JC2RInput149) =>
                        xychartDiagramPRI3JC2RInput149.fill,
                    )
                    .attr(
                      "stroke",
                      (xychartDiagramPRI3JC2RInput142) =>
                        xychartDiagramPRI3JC2RInput142.strokeFill,
                    )
                    .attr(
                      "stroke-width",
                      (xychartDiagramPRI3JC2RInput139) =>
                        xychartDiagramPRI3JC2RInput139.strokeWidth,
                    ),
                  xychartDiagramPRI3JC2RBinding51.showDataLabel)
                )
                  if (
                    xychartDiagramPRI3JC2RBinding51.chartOrientation ===
                    "horizontal"
                  ) {
                    let xychartDiagramPRI3JC2RBinding119 = function (
                      xychartDiagramPRI3JC2RInput75,
                      xychartDiagramPRI3JC2RInput76,
                    ) {
                      let { data, label } = xychartDiagramPRI3JC2RInput75;
                      return (
                        xychartDiagramPRI3JC2RInput76 * label.length * 0.7 <=
                        data.width - 10
                      );
                    };
                    chunkAGHRB4JFN(
                      xychartDiagramPRI3JC2RBinding119,
                      "fitsHorizontally",
                    );
                    let xychartDiagramPRI3JC2RBinding121 =
                        xychartDiagramPRI3JC2RBinding87.data
                          .map((item, index) => ({
                            data: item,
                            label:
                              xychartDiagramPRI3JC2RBinding52[index].toString(),
                          }))
                          .filter(
                            (item) =>
                              item.data.width > 0 && item.data.height > 0,
                          ),
                      xychartDiagramPRI3JC2RBinding122 =
                        xychartDiagramPRI3JC2RBinding121.map((item) => {
                          let { data } = item,
                            xychartDiagramPRI3JC2RBinding188 =
                              data.height * 0.7;
                          for (
                            ;
                            !xychartDiagramPRI3JC2RBinding119(
                              item,
                              xychartDiagramPRI3JC2RBinding188,
                            ) && xychartDiagramPRI3JC2RBinding188 > 0;
                          )
                            --xychartDiagramPRI3JC2RBinding188;
                          return xychartDiagramPRI3JC2RBinding188;
                        }),
                      xychartDiagramPRI3JC2RBinding123 = Math.floor(
                        Math.min(...xychartDiagramPRI3JC2RBinding122),
                      );
                    xychartDiagramPRI3JC2RBinding88
                      .selectAll("text")
                      .data(xychartDiagramPRI3JC2RBinding121)
                      .enter()
                      .append("text")
                      .attr(
                        "x",
                        (xychartDiagramPRI3JC2RInput132) =>
                          xychartDiagramPRI3JC2RInput132.data.x +
                          xychartDiagramPRI3JC2RInput132.data.width -
                          10,
                      )
                      .attr(
                        "y",
                        (xychartDiagramPRI3JC2RInput133) =>
                          xychartDiagramPRI3JC2RInput133.data.y +
                          xychartDiagramPRI3JC2RInput133.data.height / 2,
                      )
                      .attr("text-anchor", "end")
                      .attr("dominant-baseline", "middle")
                      .attr("fill", "black")
                      .attr(
                        "font-size",
                        `${xychartDiagramPRI3JC2RBinding123}px`,
                      )
                      .text(
                        (xychartDiagramPRI3JC2RInput147) =>
                          xychartDiagramPRI3JC2RInput147.label,
                      );
                  } else {
                    let xychartDiagramPRI3JC2RBinding112 = function (
                      xychartDiagramPRI3JC2RInput36,
                      xychartDiagramPRI3JC2RInput37,
                      xychartDiagramPRI3JC2RInput38,
                    ) {
                      let { data, label } = xychartDiagramPRI3JC2RInput36,
                        xychartDiagramPRI3JC2RBinding155 =
                          xychartDiagramPRI3JC2RInput37 * label.length * 0.7,
                        xychartDiagramPRI3JC2RBinding156 =
                          data.x + data.width / 2,
                        xychartDiagramPRI3JC2RBinding157 =
                          xychartDiagramPRI3JC2RBinding156 -
                          xychartDiagramPRI3JC2RBinding155 / 2,
                        xychartDiagramPRI3JC2RBinding158 =
                          xychartDiagramPRI3JC2RBinding156 +
                          xychartDiagramPRI3JC2RBinding155 / 2,
                        xychartDiagramPRI3JC2RBinding159 =
                          xychartDiagramPRI3JC2RBinding157 >= data.x &&
                          xychartDiagramPRI3JC2RBinding158 <=
                            data.x + data.width,
                        xychartDiagramPRI3JC2RBinding160 =
                          data.y +
                            xychartDiagramPRI3JC2RInput38 +
                            xychartDiagramPRI3JC2RInput37 <=
                          data.y + data.height;
                      return (
                        xychartDiagramPRI3JC2RBinding159 &&
                        xychartDiagramPRI3JC2RBinding160
                      );
                    };
                    chunkAGHRB4JFN(
                      xychartDiagramPRI3JC2RBinding112,
                      "fitsInBar",
                    );
                    let xychartDiagramPRI3JC2RBinding113 =
                        xychartDiagramPRI3JC2RBinding87.data
                          .map((item, index) => ({
                            data: item,
                            label:
                              xychartDiagramPRI3JC2RBinding52[index].toString(),
                          }))
                          .filter(
                            (item) =>
                              item.data.width > 0 && item.data.height > 0,
                          ),
                      xychartDiagramPRI3JC2RBinding114 =
                        xychartDiagramPRI3JC2RBinding113.map((item) => {
                          let { data, label } = item,
                            xychartDiagramPRI3JC2RBinding185 =
                              data.width / (label.length * 0.7);
                          for (
                            ;
                            !xychartDiagramPRI3JC2RBinding112(
                              item,
                              xychartDiagramPRI3JC2RBinding185,
                              10,
                            ) && xychartDiagramPRI3JC2RBinding185 > 0;
                          )
                            --xychartDiagramPRI3JC2RBinding185;
                          return xychartDiagramPRI3JC2RBinding185;
                        }),
                      xychartDiagramPRI3JC2RBinding115 = Math.floor(
                        Math.min(...xychartDiagramPRI3JC2RBinding114),
                      );
                    xychartDiagramPRI3JC2RBinding88
                      .selectAll("text")
                      .data(xychartDiagramPRI3JC2RBinding113)
                      .enter()
                      .append("text")
                      .attr(
                        "x",
                        (xychartDiagramPRI3JC2RInput134) =>
                          xychartDiagramPRI3JC2RInput134.data.x +
                          xychartDiagramPRI3JC2RInput134.data.width / 2,
                      )
                      .attr(
                        "y",
                        (xychartDiagramPRI3JC2RInput140) =>
                          xychartDiagramPRI3JC2RInput140.data.y + 10,
                      )
                      .attr("text-anchor", "middle")
                      .attr("dominant-baseline", "hanging")
                      .attr("fill", "black")
                      .attr(
                        "font-size",
                        `${xychartDiagramPRI3JC2RBinding115}px`,
                      )
                      .text(
                        (xychartDiagramPRI3JC2RInput148) =>
                          xychartDiagramPRI3JC2RInput148.label,
                      );
                  }
                break;
              case "text":
                xychartDiagramPRI3JC2RBinding88
                  .selectAll("text")
                  .data(xychartDiagramPRI3JC2RBinding87.data)
                  .enter()
                  .append("text")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr(
                    "fill",
                    (xychartDiagramPRI3JC2RInput150) =>
                      xychartDiagramPRI3JC2RInput150.fill,
                  )
                  .attr(
                    "font-size",
                    (xychartDiagramPRI3JC2RInput144) =>
                      xychartDiagramPRI3JC2RInput144.fontSize,
                  )
                  .attr("dominant-baseline", (xychartDiagramPRI3JC2RInput138) =>
                    xychartDiagramPRI3JC2RHelper28(
                      xychartDiagramPRI3JC2RInput138.verticalPos,
                    ),
                  )
                  .attr("text-anchor", (xychartDiagramPRI3JC2RInput137) =>
                    xychartDiagramPRI3JC2RHelper29(
                      xychartDiagramPRI3JC2RInput137.horizontalPos,
                    ),
                  )
                  .attr("transform", (xychartDiagramPRI3JC2RInput157) =>
                    xychartDiagramPRI3JC2RHelper30(
                      xychartDiagramPRI3JC2RInput157,
                    ),
                  )
                  .text(
                    (xychartDiagramPRI3JC2RInput151) =>
                      xychartDiagramPRI3JC2RInput151.text,
                  );
                break;
              case "path":
                xychartDiagramPRI3JC2RBinding88
                  .selectAll("path")
                  .data(xychartDiagramPRI3JC2RBinding87.data)
                  .enter()
                  .append("path")
                  .attr(
                    "d",
                    (xychartDiagramPRI3JC2RInput152) =>
                      xychartDiagramPRI3JC2RInput152.path,
                  )
                  .attr("fill", (xychartDiagramPRI3JC2RInput135) =>
                    xychartDiagramPRI3JC2RInput135.fill
                      ? xychartDiagramPRI3JC2RInput135.fill
                      : "none",
                  )
                  .attr(
                    "stroke",
                    (xychartDiagramPRI3JC2RInput143) =>
                      xychartDiagramPRI3JC2RInput143.strokeFill,
                  )
                  .attr(
                    "stroke-width",
                    (xychartDiagramPRI3JC2RInput141) =>
                      xychartDiagramPRI3JC2RInput141.strokeWidth,
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
export { XychartDiagramPRI3JC2R as diagram };
