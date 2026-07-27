// Restored from ref/webview/assets/quadrantDiagram-AYHSOK5B-CyLmjlTh.js
// Mermaid quadrant diagram definition (db + renderer + parser).
// Stage 3 candidate: app-initial aliases rewritten to IMPORT_MAP semantic vendor paths.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import { scaleLinear } from "../../vendor/d3-scale-linear";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  C as _chunkABZYJK2DC,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  d,
  k,
  L,
  T,
  _,
  V,
  W,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
function quadrantDiagramAYHSOK5BHelper1(quadrantDiagramAYHSOK5BInput59) {
  return !/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(
    quadrantDiagramAYHSOK5BInput59,
  );
}
function quadrantDiagramAYHSOK5BHelper2(quadrantDiagramAYHSOK5BInput77) {
  return !/^\d+$/.test(quadrantDiagramAYHSOK5BInput77);
}
function quadrantDiagramAYHSOK5BHelper3(quadrantDiagramAYHSOK5BInput76) {
  return !/^\d+px$/.test(quadrantDiagramAYHSOK5BInput76);
}
function quadrantDiagramAYHSOK5BHelper4(quadrantDiagramAYHSOK5BInput78) {
  return L(
    quadrantDiagramAYHSOK5BInput78.trim(),
    quadrantDiagramAYHSOK5BBinding6,
  );
}
function quadrantDiagramAYHSOK5BHelper5(quadrantDiagramAYHSOK5BInput65) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    quadrant1Text: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput65.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper6(quadrantDiagramAYHSOK5BInput66) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    quadrant2Text: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput66.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper7(quadrantDiagramAYHSOK5BInput67) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    quadrant3Text: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput67.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper8(quadrantDiagramAYHSOK5BInput68) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    quadrant4Text: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput68.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper9(quadrantDiagramAYHSOK5BInput69) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    xAxisLeftText: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput69.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper10(quadrantDiagramAYHSOK5BInput64) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    xAxisRightText: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput64.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper11(quadrantDiagramAYHSOK5BInput70) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    yAxisTopText: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput70.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper12(quadrantDiagramAYHSOK5BInput63) {
  quadrantDiagramAYHSOK5BBinding7.setData({
    yAxisBottomText: quadrantDiagramAYHSOK5BHelper4(
      quadrantDiagramAYHSOK5BInput63.text,
    ),
  });
}
function quadrantDiagramAYHSOK5BHelper13(quadrantDiagramAYHSOK5BInput33) {
  let quadrantDiagramAYHSOK5BBinding155 = {};
  for (let quadrantDiagramAYHSOK5BBinding156 of quadrantDiagramAYHSOK5BInput33) {
    let [quadrantDiagramAYHSOK5BBinding157, quadrantDiagramAYHSOK5BBinding158] =
      quadrantDiagramAYHSOK5BBinding156.trim().split(/\s*:\s*/);
    if (quadrantDiagramAYHSOK5BBinding157 === "radius") {
      if (quadrantDiagramAYHSOK5BHelper2(quadrantDiagramAYHSOK5BBinding158))
        throw new quadrantDiagramAYHSOK5BBinding5(
          quadrantDiagramAYHSOK5BBinding157,
          quadrantDiagramAYHSOK5BBinding158,
          "number",
        );
      quadrantDiagramAYHSOK5BBinding155.radius = parseInt(
        quadrantDiagramAYHSOK5BBinding158,
      );
    } else if (quadrantDiagramAYHSOK5BBinding157 === "color") {
      if (quadrantDiagramAYHSOK5BHelper1(quadrantDiagramAYHSOK5BBinding158))
        throw new quadrantDiagramAYHSOK5BBinding5(
          quadrantDiagramAYHSOK5BBinding157,
          quadrantDiagramAYHSOK5BBinding158,
          "hex code",
        );
      quadrantDiagramAYHSOK5BBinding155.color =
        quadrantDiagramAYHSOK5BBinding158;
    } else if (quadrantDiagramAYHSOK5BBinding157 === "stroke-color") {
      if (quadrantDiagramAYHSOK5BHelper1(quadrantDiagramAYHSOK5BBinding158))
        throw new quadrantDiagramAYHSOK5BBinding5(
          quadrantDiagramAYHSOK5BBinding157,
          quadrantDiagramAYHSOK5BBinding158,
          "hex code",
        );
      quadrantDiagramAYHSOK5BBinding155.strokeColor =
        quadrantDiagramAYHSOK5BBinding158;
    } else if (quadrantDiagramAYHSOK5BBinding157 === "stroke-width") {
      if (quadrantDiagramAYHSOK5BHelper3(quadrantDiagramAYHSOK5BBinding158))
        throw new quadrantDiagramAYHSOK5BBinding5(
          quadrantDiagramAYHSOK5BBinding157,
          quadrantDiagramAYHSOK5BBinding158,
          "number of pixels (eg. 10px)",
        );
      quadrantDiagramAYHSOK5BBinding155.strokeWidth =
        quadrantDiagramAYHSOK5BBinding158;
    } else
      throw Error(
        `style named ${quadrantDiagramAYHSOK5BBinding157} is not supported.`,
      );
  }
  return quadrantDiagramAYHSOK5BBinding155;
}
function quadrantDiagramAYHSOK5BHelper14(
  quadrantDiagramAYHSOK5BInput45,
  quadrantDiagramAYHSOK5BInput46,
  quadrantDiagramAYHSOK5BInput47,
  quadrantDiagramAYHSOK5BInput48,
  quadrantDiagramAYHSOK5BInput49,
) {
  let quadrantDiagramAYHSOK5BBinding167 = quadrantDiagramAYHSOK5BHelper13(
    quadrantDiagramAYHSOK5BInput49,
  );
  quadrantDiagramAYHSOK5BBinding7.addPoints([
    {
      x: quadrantDiagramAYHSOK5BInput47,
      y: quadrantDiagramAYHSOK5BInput48,
      text: quadrantDiagramAYHSOK5BHelper4(quadrantDiagramAYHSOK5BInput45.text),
      className: quadrantDiagramAYHSOK5BInput46,
      ...quadrantDiagramAYHSOK5BBinding167,
    },
  ]);
}
function quadrantDiagramAYHSOK5BHelper15(
  quadrantDiagramAYHSOK5BInput79,
  quadrantDiagramAYHSOK5BInput80,
) {
  quadrantDiagramAYHSOK5BBinding7.addClass(
    quadrantDiagramAYHSOK5BInput79,
    quadrantDiagramAYHSOK5BHelper13(quadrantDiagramAYHSOK5BInput80),
  );
}
function quadrantDiagramAYHSOK5BHelper16(quadrantDiagramAYHSOK5BInput75) {
  quadrantDiagramAYHSOK5BBinding7.setConfig({
    chartWidth: quadrantDiagramAYHSOK5BInput75,
  });
}
function quadrantDiagramAYHSOK5BHelper17(quadrantDiagramAYHSOK5BInput74) {
  quadrantDiagramAYHSOK5BBinding7.setConfig({
    chartHeight: quadrantDiagramAYHSOK5BInput74,
  });
}
function quadrantDiagramAYHSOK5BHelper18() {
  let { themeVariables, quadrantChart } = _chunkABZYJK2DB();
  return (
    quadrantChart && quadrantDiagramAYHSOK5BBinding7.setConfig(quadrantChart),
    quadrantDiagramAYHSOK5BBinding7.setThemeConfig({
      quadrant1Fill: themeVariables.quadrant1Fill,
      quadrant2Fill: themeVariables.quadrant2Fill,
      quadrant3Fill: themeVariables.quadrant3Fill,
      quadrant4Fill: themeVariables.quadrant4Fill,
      quadrant1TextFill: themeVariables.quadrant1TextFill,
      quadrant2TextFill: themeVariables.quadrant2TextFill,
      quadrant3TextFill: themeVariables.quadrant3TextFill,
      quadrant4TextFill: themeVariables.quadrant4TextFill,
      quadrantPointFill: themeVariables.quadrantPointFill,
      quadrantPointTextFill: themeVariables.quadrantPointTextFill,
      quadrantXAxisTextFill: themeVariables.quadrantXAxisTextFill,
      quadrantYAxisTextFill: themeVariables.quadrantYAxisTextFill,
      quadrantExternalBorderStrokeFill:
        themeVariables.quadrantExternalBorderStrokeFill,
      quadrantInternalBorderStrokeFill:
        themeVariables.quadrantInternalBorderStrokeFill,
      quadrantTitleFill: themeVariables.quadrantTitleFill,
    }),
    quadrantDiagramAYHSOK5BBinding7.setData({
      titleText: C(),
    }),
    quadrantDiagramAYHSOK5BBinding7.build()
  );
}
var quadrantDiagramAYHSOK5BBinding1,
  quadrantDiagramAYHSOK5BBinding2,
  quadrantDiagramAYHSOK5BBinding3,
  quadrantDiagramAYHSOK5BBinding4,
  quadrantDiagramAYHSOK5BBinding5,
  quadrantDiagramAYHSOK5BBinding6,
  quadrantDiagramAYHSOK5BBinding7,
  quadrantDiagramAYHSOK5BBinding8,
  QuadrantDiagramAYHSOK5B;
esmInit(() => {
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  quadrantDiagramAYHSOK5BBinding1 = (function () {
    var quadrantDiagramAYHSOK5BBinding9 = defineFunctionName(function (
        quadrantDiagramAYHSOK5BInput50,
        quadrantDiagramAYHSOK5BInput51,
        quadrantDiagramAYHSOK5BInput52,
        quadrantDiagramAYHSOK5BInput53,
      ) {
        for (
          quadrantDiagramAYHSOK5BInput52 ||= {},
            quadrantDiagramAYHSOK5BInput53 =
              quadrantDiagramAYHSOK5BInput50.length;
          quadrantDiagramAYHSOK5BInput53--;
          quadrantDiagramAYHSOK5BInput52[
            quadrantDiagramAYHSOK5BInput50[quadrantDiagramAYHSOK5BInput53]
          ] = quadrantDiagramAYHSOK5BInput51
        );
        return quadrantDiagramAYHSOK5BInput52;
      }, "o"),
      quadrantDiagramAYHSOK5BBinding10 = [1, 3],
      quadrantDiagramAYHSOK5BBinding11 = [1, 4],
      quadrantDiagramAYHSOK5BBinding12 = [1, 5],
      quadrantDiagramAYHSOK5BBinding13 = [1, 6],
      quadrantDiagramAYHSOK5BBinding14 = [1, 7],
      quadrantDiagramAYHSOK5BBinding15 = [
        1, 4, 5, 10, 12, 13, 14, 18, 25, 35, 37, 39, 41, 42, 48, 50, 51, 52, 53,
        54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67,
      ],
      quadrantDiagramAYHSOK5BBinding16 = [
        1, 4, 5, 10, 12, 13, 14, 18, 25, 28, 35, 37, 39, 41, 42, 48, 50, 51, 52,
        53, 54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67,
      ],
      quadrantDiagramAYHSOK5BBinding17 = [55, 56, 57],
      quadrantDiagramAYHSOK5BBinding18 = [2, 36],
      quadrantDiagramAYHSOK5BBinding19 = [1, 37],
      quadrantDiagramAYHSOK5BBinding20 = [1, 36],
      quadrantDiagramAYHSOK5BBinding21 = [1, 38],
      quadrantDiagramAYHSOK5BBinding22 = [1, 35],
      quadrantDiagramAYHSOK5BBinding23 = [1, 43],
      quadrantDiagramAYHSOK5BBinding24 = [1, 41],
      quadrantDiagramAYHSOK5BBinding25 = [1, 14],
      quadrantDiagramAYHSOK5BBinding26 = [1, 23],
      quadrantDiagramAYHSOK5BBinding27 = [1, 18],
      quadrantDiagramAYHSOK5BBinding28 = [1, 19],
      quadrantDiagramAYHSOK5BBinding29 = [1, 20],
      quadrantDiagramAYHSOK5BBinding30 = [1, 21],
      quadrantDiagramAYHSOK5BBinding31 = [1, 22],
      quadrantDiagramAYHSOK5BBinding32 = [1, 24],
      quadrantDiagramAYHSOK5BBinding33 = [1, 25],
      quadrantDiagramAYHSOK5BBinding34 = [1, 26],
      quadrantDiagramAYHSOK5BBinding35 = [1, 27],
      quadrantDiagramAYHSOK5BBinding36 = [1, 28],
      quadrantDiagramAYHSOK5BBinding37 = [1, 29],
      quadrantDiagramAYHSOK5BBinding38 = [1, 32],
      quadrantDiagramAYHSOK5BBinding39 = [1, 33],
      quadrantDiagramAYHSOK5BBinding40 = [1, 34],
      quadrantDiagramAYHSOK5BBinding41 = [1, 39],
      quadrantDiagramAYHSOK5BBinding42 = [1, 40],
      quadrantDiagramAYHSOK5BBinding43 = [1, 42],
      quadrantDiagramAYHSOK5BBinding44 = [1, 44],
      quadrantDiagramAYHSOK5BBinding45 = [1, 62],
      quadrantDiagramAYHSOK5BBinding46 = [1, 61],
      quadrantDiagramAYHSOK5BBinding47 = [
        4, 5, 8, 10, 12, 13, 14, 18, 44, 47, 49, 55, 56, 57, 63, 64, 65, 66, 67,
      ],
      quadrantDiagramAYHSOK5BBinding48 = [1, 65],
      quadrantDiagramAYHSOK5BBinding49 = [1, 66],
      quadrantDiagramAYHSOK5BBinding50 = [1, 67],
      quadrantDiagramAYHSOK5BBinding51 = [1, 68],
      quadrantDiagramAYHSOK5BBinding52 = [1, 69],
      quadrantDiagramAYHSOK5BBinding53 = [1, 70],
      _QuadrantDiagramAYHSOK5B = [1, 71],
      quadrantDiagramAYHSOK5BBinding54 = [1, 72],
      quadrantDiagramAYHSOK5BBinding55 = [1, 73],
      quadrantDiagramAYHSOK5BBinding56 = [1, 74],
      quadrantDiagramAYHSOK5BBinding57 = [1, 75],
      quadrantDiagramAYHSOK5BBinding58 = [1, 76],
      quadrantDiagramAYHSOK5BBinding59 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18,
      ],
      quadrantDiagramAYHSOK5BBinding60 = [1, 90],
      quadrantDiagramAYHSOK5BBinding61 = [1, 91],
      quadrantDiagramAYHSOK5BBinding62 = [1, 92],
      quadrantDiagramAYHSOK5BBinding63 = [1, 99],
      quadrantDiagramAYHSOK5BBinding64 = [1, 93],
      quadrantDiagramAYHSOK5BBinding65 = [1, 96],
      quadrantDiagramAYHSOK5BBinding66 = [1, 94],
      quadrantDiagramAYHSOK5BBinding67 = [1, 95],
      quadrantDiagramAYHSOK5BBinding68 = [1, 97],
      quadrantDiagramAYHSOK5BBinding69 = [1, 98],
      quadrantDiagramAYHSOK5BBinding70 = [1, 102],
      quadrantDiagramAYHSOK5BBinding71 = [10, 55, 56, 57],
      $ = [4, 5, 6, 8, 10, 11, 13, 17, 18, 19, 20, 55, 56, 57],
      quadrantDiagramAYHSOK5BBinding72 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          idStringToken: 3,
          ALPHA: 4,
          NUM: 5,
          NODE_STRING: 6,
          DOWN: 7,
          MINUS: 8,
          DEFAULT: 9,
          COMMA: 10,
          COLON: 11,
          AMP: 12,
          BRKT: 13,
          MULT: 14,
          UNICODE_TEXT: 15,
          styleComponent: 16,
          UNIT: 17,
          SPACE: 18,
          STYLE: 19,
          PCT: 20,
          idString: 21,
          style: 22,
          stylesOpt: 23,
          classDefStatement: 24,
          CLASSDEF: 25,
          start: 26,
          eol: 27,
          QUADRANT: 28,
          document: 29,
          line: 30,
          statement: 31,
          axisDetails: 32,
          quadrantDetails: 33,
          points: 34,
          title: 35,
          title_value: 36,
          acc_title: 37,
          acc_title_value: 38,
          acc_descr: 39,
          acc_descr_value: 40,
          acc_descr_multiline_value: 41,
          section: 42,
          text: 43,
          point_start: 44,
          point_x: 45,
          point_y: 46,
          class_name: 47,
          "X-AXIS": 48,
          "AXIS-TEXT-DELIMITER": 49,
          "Y-AXIS": 50,
          QUADRANT_1: 51,
          QUADRANT_2: 52,
          QUADRANT_3: 53,
          QUADRANT_4: 54,
          NEWLINE: 55,
          SEMI: 56,
          EOF: 57,
          alphaNumToken: 58,
          textNoTagsToken: 59,
          STR: 60,
          MD_STR: 61,
          alphaNum: 62,
          PUNCTUATION: 63,
          PLUS: 64,
          EQUALS: 65,
          DOT: 66,
          UNDERSCORE: 67,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "ALPHA",
          5: "NUM",
          6: "NODE_STRING",
          7: "DOWN",
          8: "MINUS",
          9: "DEFAULT",
          10: "COMMA",
          11: "COLON",
          12: "AMP",
          13: "BRKT",
          14: "MULT",
          15: "UNICODE_TEXT",
          17: "UNIT",
          18: "SPACE",
          19: "STYLE",
          20: "PCT",
          25: "CLASSDEF",
          28: "QUADRANT",
          35: "title",
          36: "title_value",
          37: "acc_title",
          38: "acc_title_value",
          39: "acc_descr",
          40: "acc_descr_value",
          41: "acc_descr_multiline_value",
          42: "section",
          44: "point_start",
          45: "point_x",
          46: "point_y",
          47: "class_name",
          48: "X-AXIS",
          49: "AXIS-TEXT-DELIMITER",
          50: "Y-AXIS",
          51: "QUADRANT_1",
          52: "QUADRANT_2",
          53: "QUADRANT_3",
          54: "QUADRANT_4",
          55: "NEWLINE",
          56: "SEMI",
          57: "EOF",
          60: "STR",
          61: "MD_STR",
          63: "PUNCTUATION",
          64: "PLUS",
          65: "EQUALS",
          66: "DOT",
          67: "UNDERSCORE",
        },
        productions_: [
          0,
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [3, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [21, 1],
          [21, 2],
          [22, 1],
          [22, 2],
          [23, 1],
          [23, 3],
          [24, 5],
          [26, 2],
          [26, 2],
          [26, 2],
          [29, 0],
          [29, 2],
          [30, 2],
          [31, 0],
          [31, 1],
          [31, 2],
          [31, 1],
          [31, 1],
          [31, 1],
          [31, 2],
          [31, 2],
          [31, 2],
          [31, 1],
          [31, 1],
          [34, 4],
          [34, 5],
          [34, 5],
          [34, 6],
          [32, 4],
          [32, 3],
          [32, 2],
          [32, 4],
          [32, 3],
          [32, 2],
          [33, 2],
          [33, 2],
          [33, 2],
          [33, 2],
          [27, 1],
          [27, 1],
          [27, 1],
          [43, 1],
          [43, 2],
          [43, 1],
          [43, 1],
          [62, 1],
          [62, 2],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [58, 1],
          [59, 1],
          [59, 1],
          [59, 1],
        ],
        performAction: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput6,
          quadrantDiagramAYHSOK5BInput7,
          quadrantDiagramAYHSOK5BInput8,
          quadrantDiagramAYHSOK5BInput9,
          quadrantDiagramAYHSOK5BInput10,
          quadrantDiagramAYHSOK5BInput11,
          quadrantDiagramAYHSOK5BInput12,
        ) {
          var quadrantDiagramAYHSOK5BBinding117 =
            quadrantDiagramAYHSOK5BInput11.length - 1;
          switch (quadrantDiagramAYHSOK5BInput10) {
            case 23:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ];
              break;
            case 24:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ] +
                "" +
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ];
              break;
            case 26:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ] +
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ];
              break;
            case 27:
              this.$ = [
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].trim(),
              ];
              break;
            case 28:
              quadrantDiagramAYHSOK5BInput11[
                quadrantDiagramAYHSOK5BBinding117 - 2
              ].push(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].trim(),
              );
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ];
              break;
            case 29:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 4
                ];
              quadrantDiagramAYHSOK5BInput9.addClass(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 37:
              this.$ = [];
              break;
            case 42:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].trim();
              quadrantDiagramAYHSOK5BInput9.setDiagramTitle(this.$);
              break;
            case 43:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].trim();
              quadrantDiagramAYHSOK5BInput9.setAccTitle(this.$);
              break;
            case 44:
            case 45:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].trim();
              quadrantDiagramAYHSOK5BInput9.setAccDescription(this.$);
              break;
            case 46:
              quadrantDiagramAYHSOK5BInput9.addSection(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].substr(8),
              );
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ].substr(8);
              break;
            case 47:
              quadrantDiagramAYHSOK5BInput9.addPoint(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 3
                ],
                "",
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
                [],
              );
              break;
            case 48:
              quadrantDiagramAYHSOK5BInput9.addPoint(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 4
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 3
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
                [],
              );
              break;
            case 49:
              quadrantDiagramAYHSOK5BInput9.addPoint(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 4
                ],
                "",
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 50:
              quadrantDiagramAYHSOK5BInput9.addPoint(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 5
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 4
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 51:
              quadrantDiagramAYHSOK5BInput9.setXAxisLeftText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ],
              );
              quadrantDiagramAYHSOK5BInput9.setXAxisRightText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 52:
              quadrantDiagramAYHSOK5BInput11[
                quadrantDiagramAYHSOK5BBinding117 - 1
              ].text += " ⟶ ";
              quadrantDiagramAYHSOK5BInput9.setXAxisLeftText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
              );
              break;
            case 53:
              quadrantDiagramAYHSOK5BInput9.setXAxisLeftText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 54:
              quadrantDiagramAYHSOK5BInput9.setYAxisBottomText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 2
                ],
              );
              quadrantDiagramAYHSOK5BInput9.setYAxisTopText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 55:
              quadrantDiagramAYHSOK5BInput11[
                quadrantDiagramAYHSOK5BBinding117 - 1
              ].text += " ⟶ ";
              quadrantDiagramAYHSOK5BInput9.setYAxisBottomText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ],
              );
              break;
            case 56:
              quadrantDiagramAYHSOK5BInput9.setYAxisBottomText(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 57:
              quadrantDiagramAYHSOK5BInput9.setQuadrant1Text(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 58:
              quadrantDiagramAYHSOK5BInput9.setQuadrant2Text(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 59:
              quadrantDiagramAYHSOK5BInput9.setQuadrant3Text(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 60:
              quadrantDiagramAYHSOK5BInput9.setQuadrant4Text(
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
              );
              break;
            case 64:
              this.$ = {
                text: quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
                type: "text",
              };
              break;
            case 65:
              this.$ = {
                text:
                  quadrantDiagramAYHSOK5BInput11[
                    quadrantDiagramAYHSOK5BBinding117 - 1
                  ].text +
                  "" +
                  quadrantDiagramAYHSOK5BInput11[
                    quadrantDiagramAYHSOK5BBinding117
                  ],
                type: quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ].type,
              };
              break;
            case 66:
              this.$ = {
                text: quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
                type: "text",
              };
              break;
            case 67:
              this.$ = {
                text: quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ],
                type: "markdown",
              };
              break;
            case 68:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ];
              break;
            case 69:
              this.$ =
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117 - 1
                ] +
                "" +
                quadrantDiagramAYHSOK5BInput11[
                  quadrantDiagramAYHSOK5BBinding117
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            18: quadrantDiagramAYHSOK5BBinding10,
            26: 1,
            27: 2,
            28: quadrantDiagramAYHSOK5BBinding11,
            55: quadrantDiagramAYHSOK5BBinding12,
            56: quadrantDiagramAYHSOK5BBinding13,
            57: quadrantDiagramAYHSOK5BBinding14,
          },
          {
            1: [3],
          },
          {
            18: quadrantDiagramAYHSOK5BBinding10,
            26: 8,
            27: 2,
            28: quadrantDiagramAYHSOK5BBinding11,
            55: quadrantDiagramAYHSOK5BBinding12,
            56: quadrantDiagramAYHSOK5BBinding13,
            57: quadrantDiagramAYHSOK5BBinding14,
          },
          {
            18: quadrantDiagramAYHSOK5BBinding10,
            26: 9,
            27: 2,
            28: quadrantDiagramAYHSOK5BBinding11,
            55: quadrantDiagramAYHSOK5BBinding12,
            56: quadrantDiagramAYHSOK5BBinding13,
            57: quadrantDiagramAYHSOK5BBinding14,
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding15,
            [2, 33],
            {
              29: 10,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding16,
            [2, 61],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding16,
            [2, 62],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding16,
            [2, 63],
          ),
          {
            1: [2, 30],
          },
          {
            1: [2, 31],
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            quadrantDiagramAYHSOK5BBinding18,
            {
              30: 11,
              31: 12,
              24: 13,
              32: 15,
              33: 16,
              34: 17,
              43: 30,
              58: 31,
              1: [2, 32],
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding25,
              25: quadrantDiagramAYHSOK5BBinding26,
              35: quadrantDiagramAYHSOK5BBinding27,
              37: quadrantDiagramAYHSOK5BBinding28,
              39: quadrantDiagramAYHSOK5BBinding29,
              41: quadrantDiagramAYHSOK5BBinding30,
              42: quadrantDiagramAYHSOK5BBinding31,
              48: quadrantDiagramAYHSOK5BBinding32,
              50: quadrantDiagramAYHSOK5BBinding33,
              51: quadrantDiagramAYHSOK5BBinding34,
              52: quadrantDiagramAYHSOK5BBinding35,
              53: quadrantDiagramAYHSOK5BBinding36,
              54: quadrantDiagramAYHSOK5BBinding37,
              60: quadrantDiagramAYHSOK5BBinding38,
              61: quadrantDiagramAYHSOK5BBinding39,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding15,
            [2, 34],
          ),
          {
            27: 45,
            55: quadrantDiagramAYHSOK5BBinding12,
            56: quadrantDiagramAYHSOK5BBinding13,
            57: quadrantDiagramAYHSOK5BBinding14,
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 37],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            quadrantDiagramAYHSOK5BBinding18,
            {
              24: 13,
              32: 15,
              33: 16,
              34: 17,
              43: 30,
              58: 31,
              31: 46,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding25,
              25: quadrantDiagramAYHSOK5BBinding26,
              35: quadrantDiagramAYHSOK5BBinding27,
              37: quadrantDiagramAYHSOK5BBinding28,
              39: quadrantDiagramAYHSOK5BBinding29,
              41: quadrantDiagramAYHSOK5BBinding30,
              42: quadrantDiagramAYHSOK5BBinding31,
              48: quadrantDiagramAYHSOK5BBinding32,
              50: quadrantDiagramAYHSOK5BBinding33,
              51: quadrantDiagramAYHSOK5BBinding34,
              52: quadrantDiagramAYHSOK5BBinding35,
              53: quadrantDiagramAYHSOK5BBinding36,
              54: quadrantDiagramAYHSOK5BBinding37,
              60: quadrantDiagramAYHSOK5BBinding38,
              61: quadrantDiagramAYHSOK5BBinding39,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 39],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 40],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 41],
          ),
          {
            36: [1, 47],
          },
          {
            38: [1, 48],
          },
          {
            40: [1, 49],
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 45],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 46],
          ),
          {
            18: [1, 50],
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 51,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 52,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 53,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 54,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 55,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            43: 56,
            58: 31,
            60: quadrantDiagramAYHSOK5BBinding38,
            61: quadrantDiagramAYHSOK5BBinding39,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          {
            4: quadrantDiagramAYHSOK5BBinding19,
            5: quadrantDiagramAYHSOK5BBinding20,
            8: quadrantDiagramAYHSOK5BBinding45,
            10: quadrantDiagramAYHSOK5BBinding21,
            12: quadrantDiagramAYHSOK5BBinding22,
            13: quadrantDiagramAYHSOK5BBinding23,
            14: quadrantDiagramAYHSOK5BBinding24,
            18: quadrantDiagramAYHSOK5BBinding46,
            44: [1, 57],
            47: [1, 58],
            58: 60,
            59: 59,
            63: quadrantDiagramAYHSOK5BBinding40,
            64: quadrantDiagramAYHSOK5BBinding41,
            65: quadrantDiagramAYHSOK5BBinding42,
            66: quadrantDiagramAYHSOK5BBinding43,
            67: quadrantDiagramAYHSOK5BBinding44,
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 64],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 66],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 67],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 70],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 71],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 72],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 73],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 74],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 75],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 76],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 77],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 78],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 79],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 80],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding15,
            [2, 35],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 38],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 42],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 43],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 44],
          ),
          {
            3: 64,
            4: quadrantDiagramAYHSOK5BBinding48,
            5: quadrantDiagramAYHSOK5BBinding49,
            6: quadrantDiagramAYHSOK5BBinding50,
            7: quadrantDiagramAYHSOK5BBinding51,
            8: quadrantDiagramAYHSOK5BBinding52,
            9: quadrantDiagramAYHSOK5BBinding53,
            10: _QuadrantDiagramAYHSOK5B,
            11: quadrantDiagramAYHSOK5BBinding54,
            12: quadrantDiagramAYHSOK5BBinding55,
            13: quadrantDiagramAYHSOK5BBinding56,
            14: quadrantDiagramAYHSOK5BBinding57,
            15: quadrantDiagramAYHSOK5BBinding58,
            21: 63,
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 53],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              49: [1, 77],
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 56],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              49: [1, 78],
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 57],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 58],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 59],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 60],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          {
            45: [1, 79],
          },
          {
            44: [1, 80],
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 65],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 81],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 82],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding47,
            [2, 83],
          ),
          {
            3: 82,
            4: quadrantDiagramAYHSOK5BBinding48,
            5: quadrantDiagramAYHSOK5BBinding49,
            6: quadrantDiagramAYHSOK5BBinding50,
            7: quadrantDiagramAYHSOK5BBinding51,
            8: quadrantDiagramAYHSOK5BBinding52,
            9: quadrantDiagramAYHSOK5BBinding53,
            10: _QuadrantDiagramAYHSOK5B,
            11: quadrantDiagramAYHSOK5BBinding54,
            12: quadrantDiagramAYHSOK5BBinding55,
            13: quadrantDiagramAYHSOK5BBinding56,
            14: quadrantDiagramAYHSOK5BBinding57,
            15: quadrantDiagramAYHSOK5BBinding58,
            18: [1, 81],
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 23],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 1],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 2],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 3],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 4],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 5],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 6],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 7],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 8],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 9],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 10],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 11],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 12],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 52],
            {
              58: 31,
              43: 83,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              60: quadrantDiagramAYHSOK5BBinding38,
              61: quadrantDiagramAYHSOK5BBinding39,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 55],
            {
              58: 31,
              43: 84,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              60: quadrantDiagramAYHSOK5BBinding38,
              61: quadrantDiagramAYHSOK5BBinding39,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          {
            46: [1, 85],
          },
          {
            45: [1, 86],
          },
          {
            4: quadrantDiagramAYHSOK5BBinding60,
            5: quadrantDiagramAYHSOK5BBinding61,
            6: quadrantDiagramAYHSOK5BBinding62,
            8: quadrantDiagramAYHSOK5BBinding63,
            11: quadrantDiagramAYHSOK5BBinding64,
            13: quadrantDiagramAYHSOK5BBinding65,
            16: 89,
            17: quadrantDiagramAYHSOK5BBinding66,
            18: quadrantDiagramAYHSOK5BBinding67,
            19: quadrantDiagramAYHSOK5BBinding68,
            20: quadrantDiagramAYHSOK5BBinding69,
            22: 88,
            23: 87,
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding59,
            [2, 24],
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 51],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 54],
            {
              59: 59,
              58: 60,
              4: quadrantDiagramAYHSOK5BBinding19,
              5: quadrantDiagramAYHSOK5BBinding20,
              8: quadrantDiagramAYHSOK5BBinding45,
              10: quadrantDiagramAYHSOK5BBinding21,
              12: quadrantDiagramAYHSOK5BBinding22,
              13: quadrantDiagramAYHSOK5BBinding23,
              14: quadrantDiagramAYHSOK5BBinding24,
              18: quadrantDiagramAYHSOK5BBinding46,
              63: quadrantDiagramAYHSOK5BBinding40,
              64: quadrantDiagramAYHSOK5BBinding41,
              65: quadrantDiagramAYHSOK5BBinding42,
              66: quadrantDiagramAYHSOK5BBinding43,
              67: quadrantDiagramAYHSOK5BBinding44,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 47],
            {
              22: 88,
              16: 89,
              23: 100,
              4: quadrantDiagramAYHSOK5BBinding60,
              5: quadrantDiagramAYHSOK5BBinding61,
              6: quadrantDiagramAYHSOK5BBinding62,
              8: quadrantDiagramAYHSOK5BBinding63,
              11: quadrantDiagramAYHSOK5BBinding64,
              13: quadrantDiagramAYHSOK5BBinding65,
              17: quadrantDiagramAYHSOK5BBinding66,
              18: quadrantDiagramAYHSOK5BBinding67,
              19: quadrantDiagramAYHSOK5BBinding68,
              20: quadrantDiagramAYHSOK5BBinding69,
            },
          ),
          {
            46: [1, 101],
          },
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 29],
            {
              10: quadrantDiagramAYHSOK5BBinding70,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding71,
            [2, 27],
            {
              16: 103,
              4: quadrantDiagramAYHSOK5BBinding60,
              5: quadrantDiagramAYHSOK5BBinding61,
              6: quadrantDiagramAYHSOK5BBinding62,
              8: quadrantDiagramAYHSOK5BBinding63,
              11: quadrantDiagramAYHSOK5BBinding64,
              13: quadrantDiagramAYHSOK5BBinding65,
              17: quadrantDiagramAYHSOK5BBinding66,
              18: quadrantDiagramAYHSOK5BBinding67,
              19: quadrantDiagramAYHSOK5BBinding68,
              20: quadrantDiagramAYHSOK5BBinding69,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9($, [2, 25]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 13]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 14]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 15]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 16]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 17]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 18]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 19]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 20]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 21]),
          quadrantDiagramAYHSOK5BBinding9($, [2, 22]),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 49],
            {
              10: quadrantDiagramAYHSOK5BBinding70,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 48],
            {
              22: 88,
              16: 89,
              23: 104,
              4: quadrantDiagramAYHSOK5BBinding60,
              5: quadrantDiagramAYHSOK5BBinding61,
              6: quadrantDiagramAYHSOK5BBinding62,
              8: quadrantDiagramAYHSOK5BBinding63,
              11: quadrantDiagramAYHSOK5BBinding64,
              13: quadrantDiagramAYHSOK5BBinding65,
              17: quadrantDiagramAYHSOK5BBinding66,
              18: quadrantDiagramAYHSOK5BBinding67,
              19: quadrantDiagramAYHSOK5BBinding68,
              20: quadrantDiagramAYHSOK5BBinding69,
            },
          ),
          {
            4: quadrantDiagramAYHSOK5BBinding60,
            5: quadrantDiagramAYHSOK5BBinding61,
            6: quadrantDiagramAYHSOK5BBinding62,
            8: quadrantDiagramAYHSOK5BBinding63,
            11: quadrantDiagramAYHSOK5BBinding64,
            13: quadrantDiagramAYHSOK5BBinding65,
            16: 89,
            17: quadrantDiagramAYHSOK5BBinding66,
            18: quadrantDiagramAYHSOK5BBinding67,
            19: quadrantDiagramAYHSOK5BBinding68,
            20: quadrantDiagramAYHSOK5BBinding69,
            22: 105,
          },
          quadrantDiagramAYHSOK5BBinding9($, [2, 26]),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding17,
            [2, 50],
            {
              10: quadrantDiagramAYHSOK5BBinding70,
            },
          ),
          quadrantDiagramAYHSOK5BBinding9(
            quadrantDiagramAYHSOK5BBinding71,
            [2, 28],
            {
              16: 103,
              4: quadrantDiagramAYHSOK5BBinding60,
              5: quadrantDiagramAYHSOK5BBinding61,
              6: quadrantDiagramAYHSOK5BBinding62,
              8: quadrantDiagramAYHSOK5BBinding63,
              11: quadrantDiagramAYHSOK5BBinding64,
              13: quadrantDiagramAYHSOK5BBinding65,
              17: quadrantDiagramAYHSOK5BBinding66,
              18: quadrantDiagramAYHSOK5BBinding67,
              19: quadrantDiagramAYHSOK5BBinding68,
              20: quadrantDiagramAYHSOK5BBinding69,
            },
          ),
        ],
        defaultActions: {
          8: [2, 30],
          9: [2, 31],
        },
        parseError: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput36,
          quadrantDiagramAYHSOK5BInput37,
        ) {
          if (quadrantDiagramAYHSOK5BInput37.recoverable)
            this.trace(quadrantDiagramAYHSOK5BInput36);
          else {
            var quadrantDiagramAYHSOK5BBinding166 = Error(
              quadrantDiagramAYHSOK5BInput36,
            );
            throw (
              (quadrantDiagramAYHSOK5BBinding166.hash =
                quadrantDiagramAYHSOK5BInput37),
              quadrantDiagramAYHSOK5BBinding166
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (quadrantDiagramAYHSOK5BInput1) {
          var quadrantDiagramAYHSOK5BBinding73 = this,
            quadrantDiagramAYHSOK5BBinding74 = [0],
            quadrantDiagramAYHSOK5BBinding75 = [],
            quadrantDiagramAYHSOK5BBinding76 = [null],
            quadrantDiagramAYHSOK5BBinding77 = [],
            quadrantDiagramAYHSOK5BBinding78 = this.table,
            quadrantDiagramAYHSOK5BBinding79 = "",
            quadrantDiagramAYHSOK5BBinding80 = 0,
            quadrantDiagramAYHSOK5BBinding81 = 0,
            quadrantDiagramAYHSOK5BBinding82 = 0,
            quadrantDiagramAYHSOK5BBinding85 =
              quadrantDiagramAYHSOK5BBinding77.slice.call(arguments, 1),
            quadrantDiagramAYHSOK5BBinding86 = Object.create(this.lexer),
            quadrantDiagramAYHSOK5BBinding87 = {
              yy: {},
            };
          for (var quadrantDiagramAYHSOK5BBinding88 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              quadrantDiagramAYHSOK5BBinding88,
            ) &&
              (quadrantDiagramAYHSOK5BBinding87.yy[
                quadrantDiagramAYHSOK5BBinding88
              ] = this.yy[quadrantDiagramAYHSOK5BBinding88]);
          quadrantDiagramAYHSOK5BBinding86.setInput(
            quadrantDiagramAYHSOK5BInput1,
            quadrantDiagramAYHSOK5BBinding87.yy,
          );
          quadrantDiagramAYHSOK5BBinding87.yy.lexer =
            quadrantDiagramAYHSOK5BBinding86;
          quadrantDiagramAYHSOK5BBinding87.yy.parser = this;
          quadrantDiagramAYHSOK5BBinding86.yylloc === undefined &&
            (quadrantDiagramAYHSOK5BBinding86.yylloc = {});
          var quadrantDiagramAYHSOK5BBinding89 =
            quadrantDiagramAYHSOK5BBinding86.yylloc;
          quadrantDiagramAYHSOK5BBinding77.push(
            quadrantDiagramAYHSOK5BBinding89,
          );
          var quadrantDiagramAYHSOK5BBinding90 =
            quadrantDiagramAYHSOK5BBinding86.options &&
            quadrantDiagramAYHSOK5BBinding86.options.ranges;
          typeof quadrantDiagramAYHSOK5BBinding87.yy.parseError == "function"
            ? (this.parseError = quadrantDiagramAYHSOK5BBinding87.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function quadrantDiagramAYHSOK5BHelper20(
            quadrantDiagramAYHSOK5BInput55,
          ) {
            quadrantDiagramAYHSOK5BBinding74.length -=
              2 * quadrantDiagramAYHSOK5BInput55;
            quadrantDiagramAYHSOK5BBinding76.length -=
              quadrantDiagramAYHSOK5BInput55;
            quadrantDiagramAYHSOK5BBinding77.length -=
              quadrantDiagramAYHSOK5BInput55;
          }
          defineFunctionName(quadrantDiagramAYHSOK5BHelper20, "popStack");
          function quadrantDiagramAYHSOK5BHelper21() {
            var quadrantDiagramAYHSOK5BBinding162 =
              quadrantDiagramAYHSOK5BBinding75.pop() ||
              quadrantDiagramAYHSOK5BBinding86.lex() ||
              1;
            return (
              typeof quadrantDiagramAYHSOK5BBinding162 != "number" &&
                (quadrantDiagramAYHSOK5BBinding162 instanceof Array &&
                  ((quadrantDiagramAYHSOK5BBinding75 =
                    quadrantDiagramAYHSOK5BBinding162),
                  (quadrantDiagramAYHSOK5BBinding162 =
                    quadrantDiagramAYHSOK5BBinding75.pop())),
                (quadrantDiagramAYHSOK5BBinding162 =
                  quadrantDiagramAYHSOK5BBinding73.symbols_[
                    quadrantDiagramAYHSOK5BBinding162
                  ] || quadrantDiagramAYHSOK5BBinding162)),
              quadrantDiagramAYHSOK5BBinding162
            );
          }
          defineFunctionName(quadrantDiagramAYHSOK5BHelper21, "lex");
          for (
            var quadrantDiagramAYHSOK5BBinding91,
              quadrantDiagramAYHSOK5BBinding92,
              quadrantDiagramAYHSOK5BBinding93,
              quadrantDiagramAYHSOK5BBinding94,
              quadrantDiagramAYHSOK5BBinding95,
              quadrantDiagramAYHSOK5BBinding96 = {},
              quadrantDiagramAYHSOK5BBinding97,
              quadrantDiagramAYHSOK5BBinding98,
              quadrantDiagramAYHSOK5BBinding99,
              quadrantDiagramAYHSOK5BBinding100;
            ;
          ) {
            if (
              ((quadrantDiagramAYHSOK5BBinding93 =
                quadrantDiagramAYHSOK5BBinding74[
                  quadrantDiagramAYHSOK5BBinding74.length - 1
                ]),
              this.defaultActions[quadrantDiagramAYHSOK5BBinding93]
                ? (quadrantDiagramAYHSOK5BBinding94 =
                    this.defaultActions[quadrantDiagramAYHSOK5BBinding93])
                : ((quadrantDiagramAYHSOK5BBinding91 ??=
                    quadrantDiagramAYHSOK5BHelper21()),
                  (quadrantDiagramAYHSOK5BBinding94 =
                    quadrantDiagramAYHSOK5BBinding78[
                      quadrantDiagramAYHSOK5BBinding93
                    ] &&
                    quadrantDiagramAYHSOK5BBinding78[
                      quadrantDiagramAYHSOK5BBinding93
                    ][quadrantDiagramAYHSOK5BBinding91])),
              quadrantDiagramAYHSOK5BBinding94 === undefined ||
                !quadrantDiagramAYHSOK5BBinding94.length ||
                !quadrantDiagramAYHSOK5BBinding94[0])
            ) {
              var quadrantDiagramAYHSOK5BBinding101 = "";
              for (quadrantDiagramAYHSOK5BBinding97 in ((quadrantDiagramAYHSOK5BBinding100 =
                []),
              quadrantDiagramAYHSOK5BBinding78[
                quadrantDiagramAYHSOK5BBinding93
              ]))
                this.terminals_[quadrantDiagramAYHSOK5BBinding97] &&
                  quadrantDiagramAYHSOK5BBinding97 > 2 &&
                  quadrantDiagramAYHSOK5BBinding100.push(
                    "'" +
                      this.terminals_[quadrantDiagramAYHSOK5BBinding97] +
                      "'",
                  );
              quadrantDiagramAYHSOK5BBinding101 =
                quadrantDiagramAYHSOK5BBinding86.showPosition
                  ? "Parse error on line " +
                    (quadrantDiagramAYHSOK5BBinding80 + 1) +
                    ":\n" +
                    quadrantDiagramAYHSOK5BBinding86.showPosition() +
                    "\nExpecting " +
                    quadrantDiagramAYHSOK5BBinding100.join(", ") +
                    ", got '" +
                    (this.terminals_[quadrantDiagramAYHSOK5BBinding91] ||
                      quadrantDiagramAYHSOK5BBinding91) +
                    "'"
                  : "Parse error on line " +
                    (quadrantDiagramAYHSOK5BBinding80 + 1) +
                    ": Unexpected " +
                    (quadrantDiagramAYHSOK5BBinding91 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[quadrantDiagramAYHSOK5BBinding91] ||
                          quadrantDiagramAYHSOK5BBinding91) +
                        "'");
              this.parseError(quadrantDiagramAYHSOK5BBinding101, {
                text: quadrantDiagramAYHSOK5BBinding86.match,
                token:
                  this.terminals_[quadrantDiagramAYHSOK5BBinding91] ||
                  quadrantDiagramAYHSOK5BBinding91,
                line: quadrantDiagramAYHSOK5BBinding86.yylineno,
                loc: quadrantDiagramAYHSOK5BBinding89,
                expected: quadrantDiagramAYHSOK5BBinding100,
              });
            }
            if (
              quadrantDiagramAYHSOK5BBinding94[0] instanceof Array &&
              quadrantDiagramAYHSOK5BBinding94.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  quadrantDiagramAYHSOK5BBinding93 +
                  ", token: " +
                  quadrantDiagramAYHSOK5BBinding91,
              );
            switch (quadrantDiagramAYHSOK5BBinding94[0]) {
              case 1:
                quadrantDiagramAYHSOK5BBinding74.push(
                  quadrantDiagramAYHSOK5BBinding91,
                );
                quadrantDiagramAYHSOK5BBinding76.push(
                  quadrantDiagramAYHSOK5BBinding86.yytext,
                );
                quadrantDiagramAYHSOK5BBinding77.push(
                  quadrantDiagramAYHSOK5BBinding86.yylloc,
                );
                quadrantDiagramAYHSOK5BBinding74.push(
                  quadrantDiagramAYHSOK5BBinding94[1],
                );
                quadrantDiagramAYHSOK5BBinding91 = null;
                quadrantDiagramAYHSOK5BBinding92
                  ? ((quadrantDiagramAYHSOK5BBinding91 =
                      quadrantDiagramAYHSOK5BBinding92),
                    (quadrantDiagramAYHSOK5BBinding92 = null))
                  : ((quadrantDiagramAYHSOK5BBinding81 =
                      quadrantDiagramAYHSOK5BBinding86.yyleng),
                    (quadrantDiagramAYHSOK5BBinding79 =
                      quadrantDiagramAYHSOK5BBinding86.yytext),
                    (quadrantDiagramAYHSOK5BBinding80 =
                      quadrantDiagramAYHSOK5BBinding86.yylineno),
                    (quadrantDiagramAYHSOK5BBinding89 =
                      quadrantDiagramAYHSOK5BBinding86.yylloc),
                    quadrantDiagramAYHSOK5BBinding82 > 0 &&
                      quadrantDiagramAYHSOK5BBinding82--);
                break;
              case 2:
                if (
                  ((quadrantDiagramAYHSOK5BBinding98 =
                    this.productions_[quadrantDiagramAYHSOK5BBinding94[1]][1]),
                  (quadrantDiagramAYHSOK5BBinding96.$ =
                    quadrantDiagramAYHSOK5BBinding76[
                      quadrantDiagramAYHSOK5BBinding76.length -
                        quadrantDiagramAYHSOK5BBinding98
                    ]),
                  (quadrantDiagramAYHSOK5BBinding96._$ = {
                    first_line:
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length -
                          (quadrantDiagramAYHSOK5BBinding98 || 1)
                      ].first_line,
                    last_line:
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length - 1
                      ].last_line,
                    first_column:
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length -
                          (quadrantDiagramAYHSOK5BBinding98 || 1)
                      ].first_column,
                    last_column:
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length - 1
                      ].last_column,
                  }),
                  quadrantDiagramAYHSOK5BBinding90 &&
                    (quadrantDiagramAYHSOK5BBinding96._$.range = [
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length -
                          (quadrantDiagramAYHSOK5BBinding98 || 1)
                      ].range[0],
                      quadrantDiagramAYHSOK5BBinding77[
                        quadrantDiagramAYHSOK5BBinding77.length - 1
                      ].range[1],
                    ]),
                  (quadrantDiagramAYHSOK5BBinding95 = this.performAction.apply(
                    quadrantDiagramAYHSOK5BBinding96,
                    [
                      quadrantDiagramAYHSOK5BBinding79,
                      quadrantDiagramAYHSOK5BBinding81,
                      quadrantDiagramAYHSOK5BBinding80,
                      quadrantDiagramAYHSOK5BBinding87.yy,
                      quadrantDiagramAYHSOK5BBinding94[1],
                      quadrantDiagramAYHSOK5BBinding76,
                      quadrantDiagramAYHSOK5BBinding77,
                    ].concat(quadrantDiagramAYHSOK5BBinding85),
                  )),
                  quadrantDiagramAYHSOK5BBinding95 !== undefined)
                )
                  return quadrantDiagramAYHSOK5BBinding95;
                quadrantDiagramAYHSOK5BBinding98 &&
                  ((quadrantDiagramAYHSOK5BBinding74 =
                    quadrantDiagramAYHSOK5BBinding74.slice(
                      0,
                      -1 * quadrantDiagramAYHSOK5BBinding98 * 2,
                    )),
                  (quadrantDiagramAYHSOK5BBinding76 =
                    quadrantDiagramAYHSOK5BBinding76.slice(
                      0,
                      -1 * quadrantDiagramAYHSOK5BBinding98,
                    )),
                  (quadrantDiagramAYHSOK5BBinding77 =
                    quadrantDiagramAYHSOK5BBinding77.slice(
                      0,
                      -1 * quadrantDiagramAYHSOK5BBinding98,
                    )));
                quadrantDiagramAYHSOK5BBinding74.push(
                  this.productions_[quadrantDiagramAYHSOK5BBinding94[1]][0],
                );
                quadrantDiagramAYHSOK5BBinding76.push(
                  quadrantDiagramAYHSOK5BBinding96.$,
                );
                quadrantDiagramAYHSOK5BBinding77.push(
                  quadrantDiagramAYHSOK5BBinding96._$,
                );
                quadrantDiagramAYHSOK5BBinding99 =
                  quadrantDiagramAYHSOK5BBinding78[
                    quadrantDiagramAYHSOK5BBinding74[
                      quadrantDiagramAYHSOK5BBinding74.length - 2
                    ]
                  ][
                    quadrantDiagramAYHSOK5BBinding74[
                      quadrantDiagramAYHSOK5BBinding74.length - 1
                    ]
                  ];
                quadrantDiagramAYHSOK5BBinding74.push(
                  quadrantDiagramAYHSOK5BBinding99,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    quadrantDiagramAYHSOK5BBinding72.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput42,
          quadrantDiagramAYHSOK5BInput43,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              quadrantDiagramAYHSOK5BInput42,
              quadrantDiagramAYHSOK5BInput43,
            );
          else throw Error(quadrantDiagramAYHSOK5BInput42);
        }, "parseError"),
        setInput: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput31,
          quadrantDiagramAYHSOK5BInput32,
        ) {
          return (
            (this.yy = quadrantDiagramAYHSOK5BInput32 || this.yy || {}),
            (this._input = quadrantDiagramAYHSOK5BInput31),
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
        input: defineFunctionName(function () {
          var quadrantDiagramAYHSOK5BBinding159 = this._input[0];
          return (
            (this.yytext += quadrantDiagramAYHSOK5BBinding159),
            this.yyleng++,
            this.offset++,
            (this.match += quadrantDiagramAYHSOK5BBinding159),
            (this.matched += quadrantDiagramAYHSOK5BBinding159),
            quadrantDiagramAYHSOK5BBinding159.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            quadrantDiagramAYHSOK5BBinding159
          );
        }, "input"),
        unput: defineFunctionName(function (quadrantDiagramAYHSOK5BInput30) {
          var quadrantDiagramAYHSOK5BBinding145 =
              quadrantDiagramAYHSOK5BInput30.length,
            quadrantDiagramAYHSOK5BBinding146 =
              quadrantDiagramAYHSOK5BInput30.split(/(?:\r\n?|\n)/g);
          this._input = quadrantDiagramAYHSOK5BInput30 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - quadrantDiagramAYHSOK5BBinding145,
          );
          this.offset -= quadrantDiagramAYHSOK5BBinding145;
          var quadrantDiagramAYHSOK5BBinding147 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          quadrantDiagramAYHSOK5BBinding146.length - 1 &&
            (this.yylineno -= quadrantDiagramAYHSOK5BBinding146.length - 1);
          var quadrantDiagramAYHSOK5BBinding148 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: quadrantDiagramAYHSOK5BBinding146
                ? (quadrantDiagramAYHSOK5BBinding146.length ===
                  quadrantDiagramAYHSOK5BBinding147.length
                    ? this.yylloc.first_column
                    : 0) +
                  quadrantDiagramAYHSOK5BBinding147[
                    quadrantDiagramAYHSOK5BBinding147.length -
                      quadrantDiagramAYHSOK5BBinding146.length
                  ].length -
                  quadrantDiagramAYHSOK5BBinding146[0].length
                : this.yylloc.first_column - quadrantDiagramAYHSOK5BBinding145,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                quadrantDiagramAYHSOK5BBinding148[0],
                quadrantDiagramAYHSOK5BBinding148[0] +
                  this.yyleng -
                  quadrantDiagramAYHSOK5BBinding145,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: defineFunctionName(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: defineFunctionName(function () {
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
        less: defineFunctionName(function (quadrantDiagramAYHSOK5BInput60) {
          this.unput(this.match.slice(quadrantDiagramAYHSOK5BInput60));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var quadrantDiagramAYHSOK5BBinding163 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (quadrantDiagramAYHSOK5BBinding163.length > 20 ? "..." : "") +
            quadrantDiagramAYHSOK5BBinding163.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var quadrantDiagramAYHSOK5BBinding161 = this.match;
          return (
            quadrantDiagramAYHSOK5BBinding161.length < 20 &&
              (quadrantDiagramAYHSOK5BBinding161 += this._input.substr(
                0,
                20 - quadrantDiagramAYHSOK5BBinding161.length,
              )),
            (
              quadrantDiagramAYHSOK5BBinding161.substr(0, 20) +
              (quadrantDiagramAYHSOK5BBinding161.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var quadrantDiagramAYHSOK5BBinding164 = this.pastInput(),
            quadrantDiagramAYHSOK5BBinding165 = Array(
              quadrantDiagramAYHSOK5BBinding164.length + 1,
            ).join("-");
          return (
            quadrantDiagramAYHSOK5BBinding164 +
            this.upcomingInput() +
            "\n" +
            quadrantDiagramAYHSOK5BBinding165 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput22,
          quadrantDiagramAYHSOK5BInput23,
        ) {
          var quadrantDiagramAYHSOK5BBinding122,
            quadrantDiagramAYHSOK5BBinding123,
            quadrantDiagramAYHSOK5BBinding124;
          if (
            (this.options.backtrack_lexer &&
              ((quadrantDiagramAYHSOK5BBinding124 = {
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
                (quadrantDiagramAYHSOK5BBinding124.yylloc.range =
                  this.yylloc.range.slice(0))),
            (quadrantDiagramAYHSOK5BBinding123 =
              quadrantDiagramAYHSOK5BInput22[0].match(/(?:\r\n?|\n).*/g)),
            quadrantDiagramAYHSOK5BBinding123 &&
              (this.yylineno += quadrantDiagramAYHSOK5BBinding123.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: quadrantDiagramAYHSOK5BBinding123
                ? quadrantDiagramAYHSOK5BBinding123[
                    quadrantDiagramAYHSOK5BBinding123.length - 1
                  ].length -
                  quadrantDiagramAYHSOK5BBinding123[
                    quadrantDiagramAYHSOK5BBinding123.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  quadrantDiagramAYHSOK5BInput22[0].length,
            }),
            (this.yytext += quadrantDiagramAYHSOK5BInput22[0]),
            (this.match += quadrantDiagramAYHSOK5BInput22[0]),
            (this.matches = quadrantDiagramAYHSOK5BInput22),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              quadrantDiagramAYHSOK5BInput22[0].length,
            )),
            (this.matched += quadrantDiagramAYHSOK5BInput22[0]),
            (quadrantDiagramAYHSOK5BBinding122 = this.performAction.call(
              this,
              this.yy,
              this,
              quadrantDiagramAYHSOK5BInput23,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            quadrantDiagramAYHSOK5BBinding122)
          )
            return quadrantDiagramAYHSOK5BBinding122;
          if (this._backtrack) {
            for (var quadrantDiagramAYHSOK5BBinding125 in quadrantDiagramAYHSOK5BBinding124)
              this[quadrantDiagramAYHSOK5BBinding125] =
                quadrantDiagramAYHSOK5BBinding124[
                  quadrantDiagramAYHSOK5BBinding125
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var quadrantDiagramAYHSOK5BBinding139,
            quadrantDiagramAYHSOK5BBinding140,
            quadrantDiagramAYHSOK5BBinding141,
            quadrantDiagramAYHSOK5BBinding142;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var quadrantDiagramAYHSOK5BBinding143 = this._currentRules(),
              quadrantDiagramAYHSOK5BBinding144 = 0;
            quadrantDiagramAYHSOK5BBinding144 <
            quadrantDiagramAYHSOK5BBinding143.length;
            quadrantDiagramAYHSOK5BBinding144++
          )
            if (
              ((quadrantDiagramAYHSOK5BBinding141 = this._input.match(
                this.rules[
                  quadrantDiagramAYHSOK5BBinding143[
                    quadrantDiagramAYHSOK5BBinding144
                  ]
                ],
              )),
              quadrantDiagramAYHSOK5BBinding141 &&
                (!quadrantDiagramAYHSOK5BBinding140 ||
                  quadrantDiagramAYHSOK5BBinding141[0].length >
                    quadrantDiagramAYHSOK5BBinding140[0].length))
            ) {
              if (
                ((quadrantDiagramAYHSOK5BBinding140 =
                  quadrantDiagramAYHSOK5BBinding141),
                (quadrantDiagramAYHSOK5BBinding142 =
                  quadrantDiagramAYHSOK5BBinding144),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((quadrantDiagramAYHSOK5BBinding139 = this.test_match(
                    quadrantDiagramAYHSOK5BBinding141,
                    quadrantDiagramAYHSOK5BBinding143[
                      quadrantDiagramAYHSOK5BBinding144
                    ],
                  )),
                  quadrantDiagramAYHSOK5BBinding139 !== false)
                )
                  return quadrantDiagramAYHSOK5BBinding139;
                if (this._backtrack) {
                  quadrantDiagramAYHSOK5BBinding140 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return quadrantDiagramAYHSOK5BBinding140
            ? ((quadrantDiagramAYHSOK5BBinding139 = this.test_match(
                quadrantDiagramAYHSOK5BBinding140,
                quadrantDiagramAYHSOK5BBinding143[
                  quadrantDiagramAYHSOK5BBinding142
                ],
              )),
              quadrantDiagramAYHSOK5BBinding139 === false
                ? false
                : quadrantDiagramAYHSOK5BBinding139)
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
        lex: defineFunctionName(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: defineFunctionName(function (quadrantDiagramAYHSOK5BInput61) {
          this.conditionStack.push(quadrantDiagramAYHSOK5BInput61);
        }, "begin"),
        popState: defineFunctionName(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: defineFunctionName(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: defineFunctionName(function (quadrantDiagramAYHSOK5BInput35) {
          return (
            (quadrantDiagramAYHSOK5BInput35 =
              this.conditionStack.length -
              1 -
              Math.abs(quadrantDiagramAYHSOK5BInput35 || 0)),
            quadrantDiagramAYHSOK5BInput35 >= 0
              ? this.conditionStack[quadrantDiagramAYHSOK5BInput35]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput73,
        ) {
          this.begin(quadrantDiagramAYHSOK5BInput73);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          quadrantDiagramAYHSOK5BInput13,
          quadrantDiagramAYHSOK5BInput14,
          quadrantDiagramAYHSOK5BInput15,
          quadrantDiagramAYHSOK5BInput16,
        ) {
          switch (quadrantDiagramAYHSOK5BInput15) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 55;
            case 3:
              break;
            case 4:
              return (this.begin("title"), 35);
            case 5:
              return (this.popState(), "title_value");
            case 6:
              return (this.begin("acc_title"), 37);
            case 7:
              return (this.popState(), "acc_title_value");
            case 8:
              return (this.begin("acc_descr"), 39);
            case 9:
              return (this.popState(), "acc_descr_value");
            case 10:
              this.begin("acc_descr_multiline");
              break;
            case 11:
              this.popState();
              break;
            case 12:
              return "acc_descr_multiline_value";
            case 13:
              return 48;
            case 14:
              return 50;
            case 15:
              return 49;
            case 16:
              return 51;
            case 17:
              return 52;
            case 18:
              return 53;
            case 19:
              return 54;
            case 20:
              return 25;
            case 21:
              this.begin("md_string");
              break;
            case 22:
              return "MD_STR";
            case 23:
              this.popState();
              break;
            case 24:
              this.begin("string");
              break;
            case 25:
              this.popState();
              break;
            case 26:
              return "STR";
            case 27:
              this.begin("class_name");
              break;
            case 28:
              return (this.popState(), 47);
            case 29:
              return (this.begin("point_start"), 44);
            case 30:
              return (this.begin("point_x"), 45);
            case 31:
              this.popState();
              break;
            case 32:
              this.popState();
              this.begin("point_y");
              break;
            case 33:
              return (this.popState(), 46);
            case 34:
              return 28;
            case 35:
              return 4;
            case 36:
              return 11;
            case 37:
              return 64;
            case 38:
              return 10;
            case 39:
              return 65;
            case 40:
              return 65;
            case 41:
              return 14;
            case 42:
              return 13;
            case 43:
              return 67;
            case 44:
              return 66;
            case 45:
              return 12;
            case 46:
              return 8;
            case 47:
              return 5;
            case 48:
              return 18;
            case 49:
              return 56;
            case 50:
              return 63;
            case 51:
              return 57;
          }
        }, "anonymous"),
        rules: [
          /^(?:%%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[\n\r]+)/i,
          /^(?:%%[^\n]*)/i,
          /^(?:title\b)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?: *x-axis *)/i,
          /^(?: *y-axis *)/i,
          /^(?: *--+> *)/i,
          /^(?: *quadrant-1 *)/i,
          /^(?: *quadrant-2 *)/i,
          /^(?: *quadrant-3 *)/i,
          /^(?: *quadrant-4 *)/i,
          /^(?:classDef\b)/i,
          /^(?:["][`])/i,
          /^(?:[^`"]+)/i,
          /^(?:[`]["])/i,
          /^(?:["])/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?::::)/i,
          /^(?:^\w+)/i,
          /^(?:\s*:\s*\[\s*)/i,
          /^(?:(1)|(0(.\d+)?))/i,
          /^(?:\s*\] *)/i,
          /^(?:\s*,\s*)/i,
          /^(?:(1)|(0(.\d+)?))/i,
          /^(?: *quadrantChart *)/i,
          /^(?:[A-Za-z]+)/i,
          /^(?::)/i,
          /^(?:\+)/i,
          /^(?:,)/i,
          /^(?:=)/i,
          /^(?:=)/i,
          /^(?:\*)/i,
          /^(?:#)/i,
          /^(?:[\_])/i,
          /^(?:\.)/i,
          /^(?:&)/i,
          /^(?:-)/i,
          /^(?:[0-9]+)/i,
          /^(?:\s)/i,
          /^(?:;)/i,
          /^(?:[!"#$%&'*+,-.`?\\_/])/i,
          /^(?:$)/i,
        ],
        conditions: {
          class_name: {
            rules: [28],
            inclusive: false,
          },
          point_y: {
            rules: [33],
            inclusive: false,
          },
          point_x: {
            rules: [32],
            inclusive: false,
          },
          point_start: {
            rules: [30, 31],
            inclusive: false,
          },
          acc_descr_multiline: {
            rules: [11, 12],
            inclusive: false,
          },
          acc_descr: {
            rules: [9],
            inclusive: false,
          },
          acc_title: {
            rules: [7],
            inclusive: false,
          },
          title: {
            rules: [5],
            inclusive: false,
          },
          md_string: {
            rules: [22, 23],
            inclusive: false,
          },
          string: {
            rules: [25, 26],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24,
              27, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 50, 51,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function quadrantDiagramAYHSOK5BHelper19() {
      this.yy = {};
    }
    return (
      defineFunctionName(quadrantDiagramAYHSOK5BHelper19, "Parser"),
      (quadrantDiagramAYHSOK5BHelper19.prototype =
        quadrantDiagramAYHSOK5BBinding72),
      (quadrantDiagramAYHSOK5BBinding72.Parser =
        quadrantDiagramAYHSOK5BHelper19),
      new quadrantDiagramAYHSOK5BHelper19()
    );
  })();
  quadrantDiagramAYHSOK5BBinding1.parser = quadrantDiagramAYHSOK5BBinding1;
  quadrantDiagramAYHSOK5BBinding2 = quadrantDiagramAYHSOK5BBinding1;
  quadrantDiagramAYHSOK5BBinding3 = T();
  quadrantDiagramAYHSOK5BBinding4 = class {
    constructor() {
      this.classes = new Map();
      this.config = this.getDefaultConfig();
      this.themeConfig = this.getDefaultThemeConfig();
      this.data = this.getDefaultData();
    }
    static {
      defineFunctionName(this, "QuadrantBuilder");
    }
    getDefaultData() {
      return {
        titleText: "",
        quadrant1Text: "",
        quadrant2Text: "",
        quadrant3Text: "",
        quadrant4Text: "",
        xAxisLeftText: "",
        xAxisRightText: "",
        yAxisBottomText: "",
        yAxisTopText: "",
        points: [],
      };
    }
    getDefaultConfig() {
      return {
        showXAxis: true,
        showYAxis: true,
        showTitle: true,
        chartHeight: d.quadrantChart?.chartWidth || 500,
        chartWidth: d.quadrantChart?.chartHeight || 500,
        titlePadding: d.quadrantChart?.titlePadding || 10,
        titleFontSize: d.quadrantChart?.titleFontSize || 20,
        quadrantPadding: d.quadrantChart?.quadrantPadding || 5,
        xAxisLabelPadding: d.quadrantChart?.xAxisLabelPadding || 5,
        yAxisLabelPadding: d.quadrantChart?.yAxisLabelPadding || 5,
        xAxisLabelFontSize: d.quadrantChart?.xAxisLabelFontSize || 16,
        yAxisLabelFontSize: d.quadrantChart?.yAxisLabelFontSize || 16,
        quadrantLabelFontSize: d.quadrantChart?.quadrantLabelFontSize || 16,
        quadrantTextTopPadding: d.quadrantChart?.quadrantTextTopPadding || 5,
        pointTextPadding: d.quadrantChart?.pointTextPadding || 5,
        pointLabelFontSize: d.quadrantChart?.pointLabelFontSize || 12,
        pointRadius: d.quadrantChart?.pointRadius || 5,
        xAxisPosition: d.quadrantChart?.xAxisPosition || "top",
        yAxisPosition: d.quadrantChart?.yAxisPosition || "left",
        quadrantInternalBorderStrokeWidth:
          d.quadrantChart?.quadrantInternalBorderStrokeWidth || 1,
        quadrantExternalBorderStrokeWidth:
          d.quadrantChart?.quadrantExternalBorderStrokeWidth || 2,
      };
    }
    getDefaultThemeConfig() {
      return {
        quadrant1Fill: quadrantDiagramAYHSOK5BBinding3.quadrant1Fill,
        quadrant2Fill: quadrantDiagramAYHSOK5BBinding3.quadrant2Fill,
        quadrant3Fill: quadrantDiagramAYHSOK5BBinding3.quadrant3Fill,
        quadrant4Fill: quadrantDiagramAYHSOK5BBinding3.quadrant4Fill,
        quadrant1TextFill: quadrantDiagramAYHSOK5BBinding3.quadrant1TextFill,
        quadrant2TextFill: quadrantDiagramAYHSOK5BBinding3.quadrant2TextFill,
        quadrant3TextFill: quadrantDiagramAYHSOK5BBinding3.quadrant3TextFill,
        quadrant4TextFill: quadrantDiagramAYHSOK5BBinding3.quadrant4TextFill,
        quadrantPointFill: quadrantDiagramAYHSOK5BBinding3.quadrantPointFill,
        quadrantPointTextFill:
          quadrantDiagramAYHSOK5BBinding3.quadrantPointTextFill,
        quadrantXAxisTextFill:
          quadrantDiagramAYHSOK5BBinding3.quadrantXAxisTextFill,
        quadrantYAxisTextFill:
          quadrantDiagramAYHSOK5BBinding3.quadrantYAxisTextFill,
        quadrantTitleFill: quadrantDiagramAYHSOK5BBinding3.quadrantTitleFill,
        quadrantInternalBorderStrokeFill:
          quadrantDiagramAYHSOK5BBinding3.quadrantInternalBorderStrokeFill,
        quadrantExternalBorderStrokeFill:
          quadrantDiagramAYHSOK5BBinding3.quadrantExternalBorderStrokeFill,
      };
    }
    clear() {
      this.config = this.getDefaultConfig();
      this.themeConfig = this.getDefaultThemeConfig();
      this.data = this.getDefaultData();
      this.classes = new Map();
      logger.info("clear called");
    }
    setData(quadrantDiagramAYHSOK5BInput62) {
      this.data = {
        ...this.data,
        ...quadrantDiagramAYHSOK5BInput62,
      };
    }
    addPoints(quadrantDiagramAYHSOK5BInput58) {
      this.data.points = [
        ...quadrantDiagramAYHSOK5BInput58,
        ...this.data.points,
      ];
    }
    addClass(quadrantDiagramAYHSOK5BInput71, quadrantDiagramAYHSOK5BInput72) {
      this.classes.set(
        quadrantDiagramAYHSOK5BInput71,
        quadrantDiagramAYHSOK5BInput72,
      );
    }
    setConfig(quadrantDiagramAYHSOK5BInput44) {
      logger.trace("setConfig called with: ", quadrantDiagramAYHSOK5BInput44);
      this.config = {
        ...this.config,
        ...quadrantDiagramAYHSOK5BInput44,
      };
    }
    setThemeConfig(quadrantDiagramAYHSOK5BInput41) {
      logger.trace(
        "setThemeConfig called with: ",
        quadrantDiagramAYHSOK5BInput41,
      );
      this.themeConfig = {
        ...this.themeConfig,
        ...quadrantDiagramAYHSOK5BInput41,
      };
    }
    calculateSpace(
      quadrantDiagramAYHSOK5BInput25,
      quadrantDiagramAYHSOK5BInput26,
      quadrantDiagramAYHSOK5BInput27,
      quadrantDiagramAYHSOK5BInput28,
    ) {
      let quadrantDiagramAYHSOK5BBinding127 =
          this.config.xAxisLabelPadding * 2 + this.config.xAxisLabelFontSize,
        quadrantDiagramAYHSOK5BBinding128 = {
          top:
            quadrantDiagramAYHSOK5BInput25 === "top" &&
            quadrantDiagramAYHSOK5BInput26
              ? quadrantDiagramAYHSOK5BBinding127
              : 0,
          bottom:
            quadrantDiagramAYHSOK5BInput25 === "bottom" &&
            quadrantDiagramAYHSOK5BInput26
              ? quadrantDiagramAYHSOK5BBinding127
              : 0,
        },
        quadrantDiagramAYHSOK5BBinding129 =
          this.config.yAxisLabelPadding * 2 + this.config.yAxisLabelFontSize,
        quadrantDiagramAYHSOK5BBinding130 = {
          left:
            this.config.yAxisPosition === "left" &&
            quadrantDiagramAYHSOK5BInput27
              ? quadrantDiagramAYHSOK5BBinding129
              : 0,
          right:
            this.config.yAxisPosition === "right" &&
            quadrantDiagramAYHSOK5BInput27
              ? quadrantDiagramAYHSOK5BBinding129
              : 0,
        },
        quadrantDiagramAYHSOK5BBinding131 =
          this.config.titleFontSize + this.config.titlePadding * 2,
        quadrantDiagramAYHSOK5BBinding132 = {
          top: quadrantDiagramAYHSOK5BInput28
            ? quadrantDiagramAYHSOK5BBinding131
            : 0,
        },
        quadrantDiagramAYHSOK5BBinding133 =
          this.config.quadrantPadding + quadrantDiagramAYHSOK5BBinding130.left,
        quadrantDiagramAYHSOK5BBinding134 =
          this.config.quadrantPadding +
          quadrantDiagramAYHSOK5BBinding128.top +
          quadrantDiagramAYHSOK5BBinding132.top,
        quadrantDiagramAYHSOK5BBinding135 =
          this.config.chartWidth -
          this.config.quadrantPadding * 2 -
          quadrantDiagramAYHSOK5BBinding130.left -
          quadrantDiagramAYHSOK5BBinding130.right,
        quadrantDiagramAYHSOK5BBinding136 =
          this.config.chartHeight -
          this.config.quadrantPadding * 2 -
          quadrantDiagramAYHSOK5BBinding128.top -
          quadrantDiagramAYHSOK5BBinding128.bottom -
          quadrantDiagramAYHSOK5BBinding132.top;
      return {
        xAxisSpace: quadrantDiagramAYHSOK5BBinding128,
        yAxisSpace: quadrantDiagramAYHSOK5BBinding130,
        titleSpace: quadrantDiagramAYHSOK5BBinding132,
        quadrantSpace: {
          quadrantLeft: quadrantDiagramAYHSOK5BBinding133,
          quadrantTop: quadrantDiagramAYHSOK5BBinding134,
          quadrantWidth: quadrantDiagramAYHSOK5BBinding135,
          quadrantHalfWidth: quadrantDiagramAYHSOK5BBinding135 / 2,
          quadrantHeight: quadrantDiagramAYHSOK5BBinding136,
          quadrantHalfHeight: quadrantDiagramAYHSOK5BBinding136 / 2,
        },
      };
    }
    getAxisLabels(
      quadrantDiagramAYHSOK5BInput17,
      quadrantDiagramAYHSOK5BInput18,
      quadrantDiagramAYHSOK5BInput19,
      quadrantDiagramAYHSOK5BInput20,
    ) {
      let { quadrantSpace, titleSpace } = quadrantDiagramAYHSOK5BInput20,
        {
          quadrantHalfHeight,
          quadrantHeight,
          quadrantLeft,
          quadrantHalfWidth,
          quadrantTop,
          quadrantWidth,
        } = quadrantSpace,
        quadrantDiagramAYHSOK5BBinding118 = !!this.data.xAxisRightText,
        quadrantDiagramAYHSOK5BBinding119 = !!this.data.yAxisTopText,
        quadrantDiagramAYHSOK5BBinding120 = [];
      return (
        this.data.xAxisLeftText &&
          quadrantDiagramAYHSOK5BInput18 &&
          quadrantDiagramAYHSOK5BBinding120.push({
            text: this.data.xAxisLeftText,
            fill: this.themeConfig.quadrantXAxisTextFill,
            x:
              quadrantLeft +
              (quadrantDiagramAYHSOK5BBinding118 ? quadrantHalfWidth / 2 : 0),
            y:
              quadrantDiagramAYHSOK5BInput17 === "top"
                ? this.config.xAxisLabelPadding + titleSpace.top
                : this.config.xAxisLabelPadding +
                  quadrantTop +
                  quadrantHeight +
                  this.config.quadrantPadding,
            fontSize: this.config.xAxisLabelFontSize,
            verticalPos: quadrantDiagramAYHSOK5BBinding118 ? "center" : "left",
            horizontalPos: "top",
            rotation: 0,
          }),
        this.data.xAxisRightText &&
          quadrantDiagramAYHSOK5BInput18 &&
          quadrantDiagramAYHSOK5BBinding120.push({
            text: this.data.xAxisRightText,
            fill: this.themeConfig.quadrantXAxisTextFill,
            x:
              quadrantLeft +
              quadrantHalfWidth +
              (quadrantDiagramAYHSOK5BBinding118 ? quadrantHalfWidth / 2 : 0),
            y:
              quadrantDiagramAYHSOK5BInput17 === "top"
                ? this.config.xAxisLabelPadding + titleSpace.top
                : this.config.xAxisLabelPadding +
                  quadrantTop +
                  quadrantHeight +
                  this.config.quadrantPadding,
            fontSize: this.config.xAxisLabelFontSize,
            verticalPos: quadrantDiagramAYHSOK5BBinding118 ? "center" : "left",
            horizontalPos: "top",
            rotation: 0,
          }),
        this.data.yAxisBottomText &&
          quadrantDiagramAYHSOK5BInput19 &&
          quadrantDiagramAYHSOK5BBinding120.push({
            text: this.data.yAxisBottomText,
            fill: this.themeConfig.quadrantYAxisTextFill,
            x:
              this.config.yAxisPosition === "left"
                ? this.config.yAxisLabelPadding
                : this.config.yAxisLabelPadding +
                  quadrantLeft +
                  quadrantWidth +
                  this.config.quadrantPadding,
            y:
              quadrantTop +
              quadrantHeight -
              (quadrantDiagramAYHSOK5BBinding119 ? quadrantHalfHeight / 2 : 0),
            fontSize: this.config.yAxisLabelFontSize,
            verticalPos: quadrantDiagramAYHSOK5BBinding119 ? "center" : "left",
            horizontalPos: "top",
            rotation: -90,
          }),
        this.data.yAxisTopText &&
          quadrantDiagramAYHSOK5BInput19 &&
          quadrantDiagramAYHSOK5BBinding120.push({
            text: this.data.yAxisTopText,
            fill: this.themeConfig.quadrantYAxisTextFill,
            x:
              this.config.yAxisPosition === "left"
                ? this.config.yAxisLabelPadding
                : this.config.yAxisLabelPadding +
                  quadrantLeft +
                  quadrantWidth +
                  this.config.quadrantPadding,
            y:
              quadrantTop +
              quadrantHalfHeight -
              (quadrantDiagramAYHSOK5BBinding119 ? quadrantHalfHeight / 2 : 0),
            fontSize: this.config.yAxisLabelFontSize,
            verticalPos: quadrantDiagramAYHSOK5BBinding119 ? "center" : "left",
            horizontalPos: "top",
            rotation: -90,
          }),
        quadrantDiagramAYHSOK5BBinding120
      );
    }
    getQuadrants(quadrantDiagramAYHSOK5BInput21) {
      let { quadrantSpace } = quadrantDiagramAYHSOK5BInput21,
        { quadrantHalfHeight, quadrantLeft, quadrantHalfWidth, quadrantTop } =
          quadrantSpace,
        quadrantDiagramAYHSOK5BBinding121 = [
          {
            text: {
              text: this.data.quadrant1Text,
              fill: this.themeConfig.quadrant1TextFill,
              x: 0,
              y: 0,
              fontSize: this.config.quadrantLabelFontSize,
              verticalPos: "center",
              horizontalPos: "middle",
              rotation: 0,
            },
            x: quadrantLeft + quadrantHalfWidth,
            y: quadrantTop,
            width: quadrantHalfWidth,
            height: quadrantHalfHeight,
            fill: this.themeConfig.quadrant1Fill,
          },
          {
            text: {
              text: this.data.quadrant2Text,
              fill: this.themeConfig.quadrant2TextFill,
              x: 0,
              y: 0,
              fontSize: this.config.quadrantLabelFontSize,
              verticalPos: "center",
              horizontalPos: "middle",
              rotation: 0,
            },
            x: quadrantLeft,
            y: quadrantTop,
            width: quadrantHalfWidth,
            height: quadrantHalfHeight,
            fill: this.themeConfig.quadrant2Fill,
          },
          {
            text: {
              text: this.data.quadrant3Text,
              fill: this.themeConfig.quadrant3TextFill,
              x: 0,
              y: 0,
              fontSize: this.config.quadrantLabelFontSize,
              verticalPos: "center",
              horizontalPos: "middle",
              rotation: 0,
            },
            x: quadrantLeft,
            y: quadrantTop + quadrantHalfHeight,
            width: quadrantHalfWidth,
            height: quadrantHalfHeight,
            fill: this.themeConfig.quadrant3Fill,
          },
          {
            text: {
              text: this.data.quadrant4Text,
              fill: this.themeConfig.quadrant4TextFill,
              x: 0,
              y: 0,
              fontSize: this.config.quadrantLabelFontSize,
              verticalPos: "center",
              horizontalPos: "middle",
              rotation: 0,
            },
            x: quadrantLeft + quadrantHalfWidth,
            y: quadrantTop + quadrantHalfHeight,
            width: quadrantHalfWidth,
            height: quadrantHalfHeight,
            fill: this.themeConfig.quadrant4Fill,
          },
        ];
      for (let quadrantDiagramAYHSOK5BBinding160 of quadrantDiagramAYHSOK5BBinding121) {
        quadrantDiagramAYHSOK5BBinding160.text.x =
          quadrantDiagramAYHSOK5BBinding160.x +
          quadrantDiagramAYHSOK5BBinding160.width / 2;
        this.data.points.length === 0
          ? ((quadrantDiagramAYHSOK5BBinding160.text.y =
              quadrantDiagramAYHSOK5BBinding160.y +
              quadrantDiagramAYHSOK5BBinding160.height / 2),
            (quadrantDiagramAYHSOK5BBinding160.text.horizontalPos = "middle"))
          : ((quadrantDiagramAYHSOK5BBinding160.text.y =
              quadrantDiagramAYHSOK5BBinding160.y +
              this.config.quadrantTextTopPadding),
            (quadrantDiagramAYHSOK5BBinding160.text.horizontalPos = "top"));
      }
      return quadrantDiagramAYHSOK5BBinding121;
    }
    getQuadrantPoints(quadrantDiagramAYHSOK5BInput29) {
      let { quadrantSpace } = quadrantDiagramAYHSOK5BInput29,
        { quadrantHeight, quadrantLeft, quadrantTop, quadrantWidth } =
          quadrantSpace,
        quadrantDiagramAYHSOK5BBinding137 = scaleLinear()
          .domain([0, 1])
          .range([quadrantLeft, quadrantWidth + quadrantLeft]),
        quadrantDiagramAYHSOK5BBinding138 = scaleLinear()
          .domain([0, 1])
          .range([quadrantHeight + quadrantTop, quadrantTop]);
      return this.data.points.map((item) => {
        let quadrantDiagramAYHSOK5BBinding149 = this.classes.get(
          item.className,
        );
        return (
          quadrantDiagramAYHSOK5BBinding149 &&
            (item = {
              ...quadrantDiagramAYHSOK5BBinding149,
              ...item,
            }),
          {
            x: quadrantDiagramAYHSOK5BBinding137(item.x),
            y: quadrantDiagramAYHSOK5BBinding138(item.y),
            fill: item.color ?? this.themeConfig.quadrantPointFill,
            radius: item.radius ?? this.config.pointRadius,
            text: {
              text: item.text,
              fill: this.themeConfig.quadrantPointTextFill,
              x: quadrantDiagramAYHSOK5BBinding137(item.x),
              y:
                quadrantDiagramAYHSOK5BBinding138(item.y) +
                this.config.pointTextPadding,
              verticalPos: "center",
              horizontalPos: "top",
              fontSize: this.config.pointLabelFontSize,
              rotation: 0,
            },
            strokeColor: item.strokeColor ?? this.themeConfig.quadrantPointFill,
            strokeWidth: item.strokeWidth ?? "0px",
          }
        );
      });
    }
    getBorders(quadrantDiagramAYHSOK5BInput24) {
      let quadrantDiagramAYHSOK5BBinding126 =
          this.config.quadrantExternalBorderStrokeWidth / 2,
        { quadrantSpace } = quadrantDiagramAYHSOK5BInput24,
        {
          quadrantHalfHeight,
          quadrantHeight,
          quadrantLeft,
          quadrantHalfWidth,
          quadrantTop,
          quadrantWidth,
        } = quadrantSpace;
      return [
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft - quadrantDiagramAYHSOK5BBinding126,
          y1: quadrantTop,
          x2: quadrantLeft + quadrantWidth + quadrantDiagramAYHSOK5BBinding126,
          y2: quadrantTop,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantWidth,
          y1: quadrantTop + quadrantDiagramAYHSOK5BBinding126,
          x2: quadrantLeft + quadrantWidth,
          y2: quadrantTop + quadrantHeight - quadrantDiagramAYHSOK5BBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft - quadrantDiagramAYHSOK5BBinding126,
          y1: quadrantTop + quadrantHeight,
          x2: quadrantLeft + quadrantWidth + quadrantDiagramAYHSOK5BBinding126,
          y2: quadrantTop + quadrantHeight,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft,
          y1: quadrantTop + quadrantDiagramAYHSOK5BBinding126,
          x2: quadrantLeft,
          y2: quadrantTop + quadrantHeight - quadrantDiagramAYHSOK5BBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
          strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantHalfWidth,
          y1: quadrantTop + quadrantDiagramAYHSOK5BBinding126,
          x2: quadrantLeft + quadrantHalfWidth,
          y2: quadrantTop + quadrantHeight - quadrantDiagramAYHSOK5BBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
          strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantDiagramAYHSOK5BBinding126,
          y1: quadrantTop + quadrantHalfHeight,
          x2: quadrantLeft + quadrantWidth - quadrantDiagramAYHSOK5BBinding126,
          y2: quadrantTop + quadrantHalfHeight,
        },
      ];
    }
    getTitle(quadrantDiagramAYHSOK5BInput34) {
      if (quadrantDiagramAYHSOK5BInput34)
        return {
          text: this.data.titleText,
          fill: this.themeConfig.quadrantTitleFill,
          fontSize: this.config.titleFontSize,
          horizontalPos: "top",
          verticalPos: "center",
          rotation: 0,
          y: this.config.titlePadding,
          x: this.config.chartWidth / 2,
        };
    }
    build() {
      let quadrantDiagramAYHSOK5BBinding150 =
          this.config.showXAxis &&
          !!(this.data.xAxisLeftText || this.data.xAxisRightText),
        quadrantDiagramAYHSOK5BBinding151 =
          this.config.showYAxis &&
          !!(this.data.yAxisTopText || this.data.yAxisBottomText),
        quadrantDiagramAYHSOK5BBinding152 =
          this.config.showTitle && !!this.data.titleText,
        quadrantDiagramAYHSOK5BBinding153 =
          this.data.points.length > 0 ? "bottom" : this.config.xAxisPosition,
        quadrantDiagramAYHSOK5BBinding154 = this.calculateSpace(
          quadrantDiagramAYHSOK5BBinding153,
          quadrantDiagramAYHSOK5BBinding150,
          quadrantDiagramAYHSOK5BBinding151,
          quadrantDiagramAYHSOK5BBinding152,
        );
      return {
        points: this.getQuadrantPoints(quadrantDiagramAYHSOK5BBinding154),
        quadrants: this.getQuadrants(quadrantDiagramAYHSOK5BBinding154),
        axisLabels: this.getAxisLabels(
          quadrantDiagramAYHSOK5BBinding153,
          quadrantDiagramAYHSOK5BBinding150,
          quadrantDiagramAYHSOK5BBinding151,
          quadrantDiagramAYHSOK5BBinding154,
        ),
        borderLines: this.getBorders(quadrantDiagramAYHSOK5BBinding154),
        title: this.getTitle(quadrantDiagramAYHSOK5BBinding152),
      };
    }
  };
  quadrantDiagramAYHSOK5BBinding5 = class extends Error {
    static {
      defineFunctionName(this, "InvalidStyleError");
    }
    constructor(
      quadrantDiagramAYHSOK5BInput38,
      quadrantDiagramAYHSOK5BInput39,
      quadrantDiagramAYHSOK5BInput40,
    ) {
      super(
        `value for ${quadrantDiagramAYHSOK5BInput38} ${quadrantDiagramAYHSOK5BInput39} is invalid, please use a valid ${quadrantDiagramAYHSOK5BInput40}`,
      );
      this.name = "InvalidStyleError";
    }
  };
  defineFunctionName(quadrantDiagramAYHSOK5BHelper1, "validateHexCode");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper2, "validateNumber");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper3, "validateSizeInPixels");
  quadrantDiagramAYHSOK5BBinding6 = _chunkABZYJK2DB();
  defineFunctionName(quadrantDiagramAYHSOK5BHelper4, "textSanitizer");
  quadrantDiagramAYHSOK5BBinding7 = new quadrantDiagramAYHSOK5BBinding4();
  defineFunctionName(quadrantDiagramAYHSOK5BHelper5, "setQuadrant1Text");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper6, "setQuadrant2Text");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper7, "setQuadrant3Text");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper8, "setQuadrant4Text");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper9, "setXAxisLeftText");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper10, "setXAxisRightText");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper11, "setYAxisTopText");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper12, "setYAxisBottomText");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper13, "parseStyles");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper14, "addPoint");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper15, "addClass");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper16, "setWidth");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper17, "setHeight");
  defineFunctionName(quadrantDiagramAYHSOK5BHelper18, "getQuadrantData");
  quadrantDiagramAYHSOK5BBinding8 = {
    setWidth: quadrantDiagramAYHSOK5BHelper16,
    setHeight: quadrantDiagramAYHSOK5BHelper17,
    setQuadrant1Text: quadrantDiagramAYHSOK5BHelper5,
    setQuadrant2Text: quadrantDiagramAYHSOK5BHelper6,
    setQuadrant3Text: quadrantDiagramAYHSOK5BHelper7,
    setQuadrant4Text: quadrantDiagramAYHSOK5BHelper8,
    setXAxisLeftText: quadrantDiagramAYHSOK5BHelper9,
    setXAxisRightText: quadrantDiagramAYHSOK5BHelper10,
    setYAxisTopText: quadrantDiagramAYHSOK5BHelper11,
    setYAxisBottomText: quadrantDiagramAYHSOK5BHelper12,
    parseStyles: quadrantDiagramAYHSOK5BHelper13,
    addPoint: quadrantDiagramAYHSOK5BHelper14,
    addClass: quadrantDiagramAYHSOK5BHelper15,
    getQuadrantData: quadrantDiagramAYHSOK5BHelper18,
    clear: defineFunctionName(function () {
      quadrantDiagramAYHSOK5BBinding7.clear();
      a();
    }, "clear"),
    setAccTitle: V,
    getAccTitle: _chunkABZYJK2DV,
    setDiagramTitle: W,
    getDiagramTitle: C,
    getAccDescription: _,
    setAccDescription: B,
  };
  QuadrantDiagramAYHSOK5B = {
    parser: quadrantDiagramAYHSOK5BBinding2,
    db: quadrantDiagramAYHSOK5BBinding8,
    renderer: {
      draw: defineFunctionName(
        (
          quadrantDiagramAYHSOK5BInput2,
          quadrantDiagramAYHSOK5BInput3,
          quadrantDiagramAYHSOK5BInput4,
          quadrantDiagramAYHSOK5BInput5,
        ) => {
          function quadrantDiagramAYHSOK5BHelper22(
            quadrantDiagramAYHSOK5BInput56,
          ) {
            return quadrantDiagramAYHSOK5BInput56 === "top"
              ? "hanging"
              : "middle";
          }
          defineFunctionName(
            quadrantDiagramAYHSOK5BHelper22,
            "getDominantBaseLine",
          );
          function quadrantDiagramAYHSOK5BHelper23(
            quadrantDiagramAYHSOK5BInput57,
          ) {
            return quadrantDiagramAYHSOK5BInput57 === "left"
              ? "start"
              : "middle";
          }
          defineFunctionName(quadrantDiagramAYHSOK5BHelper23, "getTextAnchor");
          function quadrantDiagramAYHSOK5BHelper24(
            quadrantDiagramAYHSOK5BInput54,
          ) {
            return `translate(${quadrantDiagramAYHSOK5BInput54.x}, ${quadrantDiagramAYHSOK5BInput54.y}) rotate(${quadrantDiagramAYHSOK5BInput54.rotation || 0})`;
          }
          defineFunctionName(
            quadrantDiagramAYHSOK5BHelper24,
            "getTransformation",
          );
          let quadrantDiagramAYHSOK5BBinding102 = _chunkABZYJK2DB();
          logger.debug(
            "Rendering quadrant chart\n" + quadrantDiagramAYHSOK5BInput2,
          );
          let quadrantDiagramAYHSOK5BBinding103 =
              quadrantDiagramAYHSOK5BBinding102.securityLevel,
            quadrantDiagramAYHSOK5BBinding104;
          quadrantDiagramAYHSOK5BBinding103 === "sandbox" &&
            (quadrantDiagramAYHSOK5BBinding104 = select(
              "#i" + quadrantDiagramAYHSOK5BInput3,
            ));
          let quadrantDiagramAYHSOK5BBinding105 = select(
              quadrantDiagramAYHSOK5BBinding103 === "sandbox"
                ? quadrantDiagramAYHSOK5BBinding104.nodes()[0].contentDocument
                    .body
                : "body",
            ).select(`[id="${quadrantDiagramAYHSOK5BInput3}"]`),
            quadrantDiagramAYHSOK5BBinding106 =
              quadrantDiagramAYHSOK5BBinding105
                .append("g")
                .attr("class", "main"),
            quadrantDiagramAYHSOK5BBinding107 =
              quadrantDiagramAYHSOK5BBinding102.quadrantChart?.chartWidth ??
              500,
            quadrantDiagramAYHSOK5BBinding108 =
              quadrantDiagramAYHSOK5BBinding102.quadrantChart?.chartHeight ??
              500;
          _chunkABZYJK2DC(
            quadrantDiagramAYHSOK5BBinding105,
            quadrantDiagramAYHSOK5BBinding108,
            quadrantDiagramAYHSOK5BBinding107,
            quadrantDiagramAYHSOK5BBinding102.quadrantChart?.useMaxWidth ??
              true,
          );
          quadrantDiagramAYHSOK5BBinding105.attr(
            "viewBox",
            "0 0 " +
              quadrantDiagramAYHSOK5BBinding107 +
              " " +
              quadrantDiagramAYHSOK5BBinding108,
          );
          quadrantDiagramAYHSOK5BInput5.db.setHeight(
            quadrantDiagramAYHSOK5BBinding108,
          );
          quadrantDiagramAYHSOK5BInput5.db.setWidth(
            quadrantDiagramAYHSOK5BBinding107,
          );
          let quadrantDiagramAYHSOK5BBinding109 =
              quadrantDiagramAYHSOK5BInput5.db.getQuadrantData(),
            quadrantDiagramAYHSOK5BBinding110 =
              quadrantDiagramAYHSOK5BBinding106
                .append("g")
                .attr("class", "quadrants"),
            quadrantDiagramAYHSOK5BBinding111 =
              quadrantDiagramAYHSOK5BBinding106
                .append("g")
                .attr("class", "border"),
            quadrantDiagramAYHSOK5BBinding112 =
              quadrantDiagramAYHSOK5BBinding106
                .append("g")
                .attr("class", "data-points"),
            quadrantDiagramAYHSOK5BBinding113 =
              quadrantDiagramAYHSOK5BBinding106
                .append("g")
                .attr("class", "labels"),
            quadrantDiagramAYHSOK5BBinding114 =
              quadrantDiagramAYHSOK5BBinding106
                .append("g")
                .attr("class", "title");
          quadrantDiagramAYHSOK5BBinding109.title &&
            quadrantDiagramAYHSOK5BBinding114
              .append("text")
              .attr("x", 0)
              .attr("y", 0)
              .attr("fill", quadrantDiagramAYHSOK5BBinding109.title.fill)
              .attr(
                "font-size",
                quadrantDiagramAYHSOK5BBinding109.title.fontSize,
              )
              .attr(
                "dominant-baseline",
                quadrantDiagramAYHSOK5BHelper22(
                  quadrantDiagramAYHSOK5BBinding109.title.horizontalPos,
                ),
              )
              .attr(
                "text-anchor",
                quadrantDiagramAYHSOK5BHelper23(
                  quadrantDiagramAYHSOK5BBinding109.title.verticalPos,
                ),
              )
              .attr(
                "transform",
                quadrantDiagramAYHSOK5BHelper24(
                  quadrantDiagramAYHSOK5BBinding109.title,
                ),
              )
              .text(quadrantDiagramAYHSOK5BBinding109.title.text);
          quadrantDiagramAYHSOK5BBinding109.borderLines &&
            quadrantDiagramAYHSOK5BBinding111
              .selectAll("line")
              .data(quadrantDiagramAYHSOK5BBinding109.borderLines)
              .enter()
              .append("line")
              .attr(
                "x1",
                (quadrantDiagramAYHSOK5BInput107) =>
                  quadrantDiagramAYHSOK5BInput107.x1,
              )
              .attr(
                "y1",
                (quadrantDiagramAYHSOK5BInput108) =>
                  quadrantDiagramAYHSOK5BInput108.y1,
              )
              .attr(
                "x2",
                (quadrantDiagramAYHSOK5BInput109) =>
                  quadrantDiagramAYHSOK5BInput109.x2,
              )
              .attr(
                "y2",
                (quadrantDiagramAYHSOK5BInput110) =>
                  quadrantDiagramAYHSOK5BInput110.y2,
              )
              .style(
                "stroke",
                (quadrantDiagramAYHSOK5BInput92) =>
                  quadrantDiagramAYHSOK5BInput92.strokeFill,
              )
              .style(
                "stroke-width",
                (quadrantDiagramAYHSOK5BInput89) =>
                  quadrantDiagramAYHSOK5BInput89.strokeWidth,
              );
          let quadrantDiagramAYHSOK5BBinding115 =
            quadrantDiagramAYHSOK5BBinding110
              .selectAll("g.quadrant")
              .data(quadrantDiagramAYHSOK5BBinding109.quadrants)
              .enter()
              .append("g")
              .attr("class", "quadrant");
          quadrantDiagramAYHSOK5BBinding115
            .append("rect")
            .attr(
              "x",
              (quadrantDiagramAYHSOK5BInput112) =>
                quadrantDiagramAYHSOK5BInput112.x,
            )
            .attr(
              "y",
              (quadrantDiagramAYHSOK5BInput113) =>
                quadrantDiagramAYHSOK5BInput113.y,
            )
            .attr(
              "width",
              (quadrantDiagramAYHSOK5BInput102) =>
                quadrantDiagramAYHSOK5BInput102.width,
            )
            .attr(
              "height",
              (quadrantDiagramAYHSOK5BInput100) =>
                quadrantDiagramAYHSOK5BInput100.height,
            )
            .attr(
              "fill",
              (quadrantDiagramAYHSOK5BInput103) =>
                quadrantDiagramAYHSOK5BInput103.fill,
            );
          quadrantDiagramAYHSOK5BBinding115
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr(
              "fill",
              (quadrantDiagramAYHSOK5BInput93) =>
                quadrantDiagramAYHSOK5BInput93.text.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagramAYHSOK5BInput87) =>
                quadrantDiagramAYHSOK5BInput87.text.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagramAYHSOK5BInput81) =>
              quadrantDiagramAYHSOK5BHelper22(
                quadrantDiagramAYHSOK5BInput81.text.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagramAYHSOK5BInput83) =>
              quadrantDiagramAYHSOK5BHelper23(
                quadrantDiagramAYHSOK5BInput83.text.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagramAYHSOK5BInput98) =>
              quadrantDiagramAYHSOK5BHelper24(
                quadrantDiagramAYHSOK5BInput98.text,
              ),
            )
            .text(
              (quadrantDiagramAYHSOK5BInput94) =>
                quadrantDiagramAYHSOK5BInput94.text.text,
            );
          quadrantDiagramAYHSOK5BBinding113
            .selectAll("g.label")
            .data(quadrantDiagramAYHSOK5BBinding109.axisLabels)
            .enter()
            .append("g")
            .attr("class", "label")
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text(
              (quadrantDiagramAYHSOK5BInput104) =>
                quadrantDiagramAYHSOK5BInput104.text,
            )
            .attr(
              "fill",
              (quadrantDiagramAYHSOK5BInput105) =>
                quadrantDiagramAYHSOK5BInput105.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagramAYHSOK5BInput97) =>
                quadrantDiagramAYHSOK5BInput97.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagramAYHSOK5BInput85) =>
              quadrantDiagramAYHSOK5BHelper22(
                quadrantDiagramAYHSOK5BInput85.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagramAYHSOK5BInput86) =>
              quadrantDiagramAYHSOK5BHelper23(
                quadrantDiagramAYHSOK5BInput86.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagramAYHSOK5BInput111) =>
              quadrantDiagramAYHSOK5BHelper24(quadrantDiagramAYHSOK5BInput111),
            );
          let quadrantDiagramAYHSOK5BBinding116 =
            quadrantDiagramAYHSOK5BBinding112
              .selectAll("g.data-point")
              .data(quadrantDiagramAYHSOK5BBinding109.points)
              .enter()
              .append("g")
              .attr("class", "data-point");
          quadrantDiagramAYHSOK5BBinding116
            .append("circle")
            .attr(
              "cx",
              (quadrantDiagramAYHSOK5BInput114) =>
                quadrantDiagramAYHSOK5BInput114.x,
            )
            .attr(
              "cy",
              (quadrantDiagramAYHSOK5BInput115) =>
                quadrantDiagramAYHSOK5BInput115.y,
            )
            .attr(
              "r",
              (quadrantDiagramAYHSOK5BInput101) =>
                quadrantDiagramAYHSOK5BInput101.radius,
            )
            .attr(
              "fill",
              (quadrantDiagramAYHSOK5BInput106) =>
                quadrantDiagramAYHSOK5BInput106.fill,
            )
            .attr(
              "stroke",
              (quadrantDiagramAYHSOK5BInput90) =>
                quadrantDiagramAYHSOK5BInput90.strokeColor,
            )
            .attr(
              "stroke-width",
              (quadrantDiagramAYHSOK5BInput91) =>
                quadrantDiagramAYHSOK5BInput91.strokeWidth,
            );
          quadrantDiagramAYHSOK5BBinding116
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text(
              (quadrantDiagramAYHSOK5BInput95) =>
                quadrantDiagramAYHSOK5BInput95.text.text,
            )
            .attr(
              "fill",
              (quadrantDiagramAYHSOK5BInput96) =>
                quadrantDiagramAYHSOK5BInput96.text.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagramAYHSOK5BInput88) =>
                quadrantDiagramAYHSOK5BInput88.text.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagramAYHSOK5BInput82) =>
              quadrantDiagramAYHSOK5BHelper22(
                quadrantDiagramAYHSOK5BInput82.text.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagramAYHSOK5BInput84) =>
              quadrantDiagramAYHSOK5BHelper23(
                quadrantDiagramAYHSOK5BInput84.text.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagramAYHSOK5BInput99) =>
              quadrantDiagramAYHSOK5BHelper24(
                quadrantDiagramAYHSOK5BInput99.text,
              ),
            );
        },
        "draw",
      ),
    },
    styles: defineFunctionName(() => "", "styles"),
  };
})();
export { QuadrantDiagramAYHSOK5B as diagram };
