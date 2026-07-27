// Restored from ref/webview/assets/quadrantDiagram-34T5L4WZ-DqJA_aZW.js
// Mermaid quadrant diagram definition alt (db + renderer + parser).
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
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  C as _chunkICPOFSXXC,
  V as _chunkICPOFSXXV,
  A,
  b,
  C,
  d,
  E,
  G,
  H,
  R,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
function quadrantDiagram34T5L4WZHelper1(quadrantDiagram34T5L4WZInput59) {
  return !/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(
    quadrantDiagram34T5L4WZInput59,
  );
}
function quadrantDiagram34T5L4WZHelper2(quadrantDiagram34T5L4WZInput77) {
  return !/^\d+$/.test(quadrantDiagram34T5L4WZInput77);
}
function quadrantDiagram34T5L4WZHelper3(quadrantDiagram34T5L4WZInput76) {
  return !/^\d+px$/.test(quadrantDiagram34T5L4WZInput76);
}
function quadrantDiagram34T5L4WZHelper4(quadrantDiagram34T5L4WZInput78) {
  return R(
    quadrantDiagram34T5L4WZInput78.trim(),
    quadrantDiagram34T5L4WZBinding6,
  );
}
function quadrantDiagram34T5L4WZHelper5(quadrantDiagram34T5L4WZInput65) {
  quadrantDiagram34T5L4WZBinding7.setData({
    quadrant1Text: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput65.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper6(quadrantDiagram34T5L4WZInput66) {
  quadrantDiagram34T5L4WZBinding7.setData({
    quadrant2Text: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput66.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper7(quadrantDiagram34T5L4WZInput67) {
  quadrantDiagram34T5L4WZBinding7.setData({
    quadrant3Text: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput67.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper8(quadrantDiagram34T5L4WZInput68) {
  quadrantDiagram34T5L4WZBinding7.setData({
    quadrant4Text: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput68.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper9(quadrantDiagram34T5L4WZInput69) {
  quadrantDiagram34T5L4WZBinding7.setData({
    xAxisLeftText: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput69.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper10(quadrantDiagram34T5L4WZInput64) {
  quadrantDiagram34T5L4WZBinding7.setData({
    xAxisRightText: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput64.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper11(quadrantDiagram34T5L4WZInput70) {
  quadrantDiagram34T5L4WZBinding7.setData({
    yAxisTopText: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput70.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper12(quadrantDiagram34T5L4WZInput63) {
  quadrantDiagram34T5L4WZBinding7.setData({
    yAxisBottomText: quadrantDiagram34T5L4WZHelper4(
      quadrantDiagram34T5L4WZInput63.text,
    ),
  });
}
function quadrantDiagram34T5L4WZHelper13(quadrantDiagram34T5L4WZInput33) {
  let quadrantDiagram34T5L4WZBinding155 = {};
  for (let quadrantDiagram34T5L4WZBinding156 of quadrantDiagram34T5L4WZInput33) {
    let [quadrantDiagram34T5L4WZBinding157, quadrantDiagram34T5L4WZBinding158] =
      quadrantDiagram34T5L4WZBinding156.trim().split(/\s*:\s*/);
    if (quadrantDiagram34T5L4WZBinding157 === "radius") {
      if (quadrantDiagram34T5L4WZHelper2(quadrantDiagram34T5L4WZBinding158))
        throw new quadrantDiagram34T5L4WZBinding5(
          quadrantDiagram34T5L4WZBinding157,
          quadrantDiagram34T5L4WZBinding158,
          "number",
        );
      quadrantDiagram34T5L4WZBinding155.radius = parseInt(
        quadrantDiagram34T5L4WZBinding158,
      );
    } else if (quadrantDiagram34T5L4WZBinding157 === "color") {
      if (quadrantDiagram34T5L4WZHelper1(quadrantDiagram34T5L4WZBinding158))
        throw new quadrantDiagram34T5L4WZBinding5(
          quadrantDiagram34T5L4WZBinding157,
          quadrantDiagram34T5L4WZBinding158,
          "hex code",
        );
      quadrantDiagram34T5L4WZBinding155.color =
        quadrantDiagram34T5L4WZBinding158;
    } else if (quadrantDiagram34T5L4WZBinding157 === "stroke-color") {
      if (quadrantDiagram34T5L4WZHelper1(quadrantDiagram34T5L4WZBinding158))
        throw new quadrantDiagram34T5L4WZBinding5(
          quadrantDiagram34T5L4WZBinding157,
          quadrantDiagram34T5L4WZBinding158,
          "hex code",
        );
      quadrantDiagram34T5L4WZBinding155.strokeColor =
        quadrantDiagram34T5L4WZBinding158;
    } else if (quadrantDiagram34T5L4WZBinding157 === "stroke-width") {
      if (quadrantDiagram34T5L4WZHelper3(quadrantDiagram34T5L4WZBinding158))
        throw new quadrantDiagram34T5L4WZBinding5(
          quadrantDiagram34T5L4WZBinding157,
          quadrantDiagram34T5L4WZBinding158,
          "number of pixels (eg. 10px)",
        );
      quadrantDiagram34T5L4WZBinding155.strokeWidth =
        quadrantDiagram34T5L4WZBinding158;
    } else
      throw Error(
        `style named ${quadrantDiagram34T5L4WZBinding157} is not supported.`,
      );
  }
  return quadrantDiagram34T5L4WZBinding155;
}
function quadrantDiagram34T5L4WZHelper14(
  quadrantDiagram34T5L4WZInput45,
  quadrantDiagram34T5L4WZInput46,
  quadrantDiagram34T5L4WZInput47,
  quadrantDiagram34T5L4WZInput48,
  quadrantDiagram34T5L4WZInput49,
) {
  let quadrantDiagram34T5L4WZBinding167 = quadrantDiagram34T5L4WZHelper13(
    quadrantDiagram34T5L4WZInput49,
  );
  quadrantDiagram34T5L4WZBinding7.addPoints([
    {
      x: quadrantDiagram34T5L4WZInput47,
      y: quadrantDiagram34T5L4WZInput48,
      text: quadrantDiagram34T5L4WZHelper4(quadrantDiagram34T5L4WZInput45.text),
      className: quadrantDiagram34T5L4WZInput46,
      ...quadrantDiagram34T5L4WZBinding167,
    },
  ]);
}
function quadrantDiagram34T5L4WZHelper15(
  quadrantDiagram34T5L4WZInput79,
  quadrantDiagram34T5L4WZInput80,
) {
  quadrantDiagram34T5L4WZBinding7.addClass(
    quadrantDiagram34T5L4WZInput79,
    quadrantDiagram34T5L4WZHelper13(quadrantDiagram34T5L4WZInput80),
  );
}
function quadrantDiagram34T5L4WZHelper16(quadrantDiagram34T5L4WZInput75) {
  quadrantDiagram34T5L4WZBinding7.setConfig({
    chartWidth: quadrantDiagram34T5L4WZInput75,
  });
}
function quadrantDiagram34T5L4WZHelper17(quadrantDiagram34T5L4WZInput74) {
  quadrantDiagram34T5L4WZBinding7.setConfig({
    chartHeight: quadrantDiagram34T5L4WZInput74,
  });
}
function quadrantDiagram34T5L4WZHelper18() {
  let { themeVariables, quadrantChart } = b();
  return (
    quadrantChart && quadrantDiagram34T5L4WZBinding7.setConfig(quadrantChart),
    quadrantDiagram34T5L4WZBinding7.setThemeConfig({
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
    quadrantDiagram34T5L4WZBinding7.setData({
      titleText: C(),
    }),
    quadrantDiagram34T5L4WZBinding7.build()
  );
}
var quadrantDiagram34T5L4WZBinding1,
  quadrantDiagram34T5L4WZBinding2,
  quadrantDiagram34T5L4WZBinding3,
  quadrantDiagram34T5L4WZBinding4,
  quadrantDiagram34T5L4WZBinding5,
  quadrantDiagram34T5L4WZBinding6,
  quadrantDiagram34T5L4WZBinding7,
  quadrantDiagram34T5L4WZBinding8,
  QuadrantDiagram34T5L4WZ;
esmInit(() => {
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  quadrantDiagram34T5L4WZBinding1 = (function () {
    var quadrantDiagram34T5L4WZBinding9 = defineFunctionName(function (
        quadrantDiagram34T5L4WZInput50,
        quadrantDiagram34T5L4WZInput51,
        quadrantDiagram34T5L4WZInput52,
        quadrantDiagram34T5L4WZInput53,
      ) {
        for (
          quadrantDiagram34T5L4WZInput52 ||= {},
            quadrantDiagram34T5L4WZInput53 =
              quadrantDiagram34T5L4WZInput50.length;
          quadrantDiagram34T5L4WZInput53--;
          quadrantDiagram34T5L4WZInput52[
            quadrantDiagram34T5L4WZInput50[quadrantDiagram34T5L4WZInput53]
          ] = quadrantDiagram34T5L4WZInput51
        );
        return quadrantDiagram34T5L4WZInput52;
      }, "o"),
      quadrantDiagram34T5L4WZBinding10 = [1, 3],
      quadrantDiagram34T5L4WZBinding11 = [1, 4],
      quadrantDiagram34T5L4WZBinding12 = [1, 5],
      quadrantDiagram34T5L4WZBinding13 = [1, 6],
      quadrantDiagram34T5L4WZBinding14 = [1, 7],
      quadrantDiagram34T5L4WZBinding15 = [
        1, 4, 5, 10, 12, 13, 14, 18, 25, 35, 37, 39, 41, 42, 48, 50, 51, 52, 53,
        54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67,
      ],
      quadrantDiagram34T5L4WZBinding16 = [
        1, 4, 5, 10, 12, 13, 14, 18, 25, 28, 35, 37, 39, 41, 42, 48, 50, 51, 52,
        53, 54, 55, 56, 57, 60, 61, 63, 64, 65, 66, 67,
      ],
      quadrantDiagram34T5L4WZBinding17 = [55, 56, 57],
      quadrantDiagram34T5L4WZBinding18 = [2, 36],
      quadrantDiagram34T5L4WZBinding19 = [1, 37],
      quadrantDiagram34T5L4WZBinding20 = [1, 36],
      quadrantDiagram34T5L4WZBinding21 = [1, 38],
      quadrantDiagram34T5L4WZBinding22 = [1, 35],
      quadrantDiagram34T5L4WZBinding23 = [1, 43],
      quadrantDiagram34T5L4WZBinding24 = [1, 41],
      quadrantDiagram34T5L4WZBinding25 = [1, 14],
      quadrantDiagram34T5L4WZBinding26 = [1, 23],
      quadrantDiagram34T5L4WZBinding27 = [1, 18],
      quadrantDiagram34T5L4WZBinding28 = [1, 19],
      quadrantDiagram34T5L4WZBinding29 = [1, 20],
      quadrantDiagram34T5L4WZBinding30 = [1, 21],
      quadrantDiagram34T5L4WZBinding31 = [1, 22],
      quadrantDiagram34T5L4WZBinding32 = [1, 24],
      quadrantDiagram34T5L4WZBinding33 = [1, 25],
      quadrantDiagram34T5L4WZBinding34 = [1, 26],
      quadrantDiagram34T5L4WZBinding35 = [1, 27],
      quadrantDiagram34T5L4WZBinding36 = [1, 28],
      quadrantDiagram34T5L4WZBinding37 = [1, 29],
      quadrantDiagram34T5L4WZBinding38 = [1, 32],
      quadrantDiagram34T5L4WZBinding39 = [1, 33],
      quadrantDiagram34T5L4WZBinding40 = [1, 34],
      quadrantDiagram34T5L4WZBinding41 = [1, 39],
      quadrantDiagram34T5L4WZBinding42 = [1, 40],
      quadrantDiagram34T5L4WZBinding43 = [1, 42],
      quadrantDiagram34T5L4WZBinding44 = [1, 44],
      quadrantDiagram34T5L4WZBinding45 = [1, 62],
      quadrantDiagram34T5L4WZBinding46 = [1, 61],
      quadrantDiagram34T5L4WZBinding47 = [
        4, 5, 8, 10, 12, 13, 14, 18, 44, 47, 49, 55, 56, 57, 63, 64, 65, 66, 67,
      ],
      quadrantDiagram34T5L4WZBinding48 = [1, 65],
      quadrantDiagram34T5L4WZBinding49 = [1, 66],
      quadrantDiagram34T5L4WZBinding50 = [1, 67],
      quadrantDiagram34T5L4WZBinding51 = [1, 68],
      quadrantDiagram34T5L4WZBinding52 = [1, 69],
      quadrantDiagram34T5L4WZBinding53 = [1, 70],
      _QuadrantDiagram34T5L4WZ = [1, 71],
      quadrantDiagram34T5L4WZBinding54 = [1, 72],
      quadrantDiagram34T5L4WZBinding55 = [1, 73],
      quadrantDiagram34T5L4WZBinding56 = [1, 74],
      quadrantDiagram34T5L4WZBinding57 = [1, 75],
      quadrantDiagram34T5L4WZBinding58 = [1, 76],
      quadrantDiagram34T5L4WZBinding59 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18,
      ],
      quadrantDiagram34T5L4WZBinding60 = [1, 90],
      quadrantDiagram34T5L4WZBinding61 = [1, 91],
      quadrantDiagram34T5L4WZBinding62 = [1, 92],
      quadrantDiagram34T5L4WZBinding63 = [1, 99],
      quadrantDiagram34T5L4WZBinding64 = [1, 93],
      quadrantDiagram34T5L4WZBinding65 = [1, 96],
      quadrantDiagram34T5L4WZBinding66 = [1, 94],
      quadrantDiagram34T5L4WZBinding67 = [1, 95],
      quadrantDiagram34T5L4WZBinding68 = [1, 97],
      quadrantDiagram34T5L4WZBinding69 = [1, 98],
      quadrantDiagram34T5L4WZBinding70 = [1, 102],
      quadrantDiagram34T5L4WZBinding71 = [10, 55, 56, 57],
      $ = [4, 5, 6, 8, 10, 11, 13, 17, 18, 19, 20, 55, 56, 57],
      quadrantDiagram34T5L4WZBinding72 = {
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
          quadrantDiagram34T5L4WZInput6,
          quadrantDiagram34T5L4WZInput7,
          quadrantDiagram34T5L4WZInput8,
          quadrantDiagram34T5L4WZInput9,
          quadrantDiagram34T5L4WZInput10,
          quadrantDiagram34T5L4WZInput11,
          quadrantDiagram34T5L4WZInput12,
        ) {
          var quadrantDiagram34T5L4WZBinding117 =
            quadrantDiagram34T5L4WZInput11.length - 1;
          switch (quadrantDiagram34T5L4WZInput10) {
            case 23:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ];
              break;
            case 24:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ] +
                "" +
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ];
              break;
            case 26:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ] +
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ];
              break;
            case 27:
              this.$ = [
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].trim(),
              ];
              break;
            case 28:
              quadrantDiagram34T5L4WZInput11[
                quadrantDiagram34T5L4WZBinding117 - 2
              ].push(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].trim(),
              );
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ];
              break;
            case 29:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 4
                ];
              quadrantDiagram34T5L4WZInput9.addClass(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 37:
              this.$ = [];
              break;
            case 42:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].trim();
              quadrantDiagram34T5L4WZInput9.setDiagramTitle(this.$);
              break;
            case 43:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].trim();
              quadrantDiagram34T5L4WZInput9.setAccTitle(this.$);
              break;
            case 44:
            case 45:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].trim();
              quadrantDiagram34T5L4WZInput9.setAccDescription(this.$);
              break;
            case 46:
              quadrantDiagram34T5L4WZInput9.addSection(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].substr(8),
              );
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ].substr(8);
              break;
            case 47:
              quadrantDiagram34T5L4WZInput9.addPoint(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 3
                ],
                "",
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
                [],
              );
              break;
            case 48:
              quadrantDiagram34T5L4WZInput9.addPoint(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 4
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 3
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
                [],
              );
              break;
            case 49:
              quadrantDiagram34T5L4WZInput9.addPoint(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 4
                ],
                "",
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 50:
              quadrantDiagram34T5L4WZInput9.addPoint(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 5
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 4
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 51:
              quadrantDiagram34T5L4WZInput9.setXAxisLeftText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ],
              );
              quadrantDiagram34T5L4WZInput9.setXAxisRightText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 52:
              quadrantDiagram34T5L4WZInput11[
                quadrantDiagram34T5L4WZBinding117 - 1
              ].text += " ⟶ ";
              quadrantDiagram34T5L4WZInput9.setXAxisLeftText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
              );
              break;
            case 53:
              quadrantDiagram34T5L4WZInput9.setXAxisLeftText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 54:
              quadrantDiagram34T5L4WZInput9.setYAxisBottomText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 2
                ],
              );
              quadrantDiagram34T5L4WZInput9.setYAxisTopText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 55:
              quadrantDiagram34T5L4WZInput11[
                quadrantDiagram34T5L4WZBinding117 - 1
              ].text += " ⟶ ";
              quadrantDiagram34T5L4WZInput9.setYAxisBottomText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ],
              );
              break;
            case 56:
              quadrantDiagram34T5L4WZInput9.setYAxisBottomText(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 57:
              quadrantDiagram34T5L4WZInput9.setQuadrant1Text(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 58:
              quadrantDiagram34T5L4WZInput9.setQuadrant2Text(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 59:
              quadrantDiagram34T5L4WZInput9.setQuadrant3Text(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 60:
              quadrantDiagram34T5L4WZInput9.setQuadrant4Text(
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
              );
              break;
            case 64:
              this.$ = {
                text: quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
                type: "text",
              };
              break;
            case 65:
              this.$ = {
                text:
                  quadrantDiagram34T5L4WZInput11[
                    quadrantDiagram34T5L4WZBinding117 - 1
                  ].text +
                  "" +
                  quadrantDiagram34T5L4WZInput11[
                    quadrantDiagram34T5L4WZBinding117
                  ],
                type: quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ].type,
              };
              break;
            case 66:
              this.$ = {
                text: quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
                type: "text",
              };
              break;
            case 67:
              this.$ = {
                text: quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ],
                type: "markdown",
              };
              break;
            case 68:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ];
              break;
            case 69:
              this.$ =
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117 - 1
                ] +
                "" +
                quadrantDiagram34T5L4WZInput11[
                  quadrantDiagram34T5L4WZBinding117
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            18: quadrantDiagram34T5L4WZBinding10,
            26: 1,
            27: 2,
            28: quadrantDiagram34T5L4WZBinding11,
            55: quadrantDiagram34T5L4WZBinding12,
            56: quadrantDiagram34T5L4WZBinding13,
            57: quadrantDiagram34T5L4WZBinding14,
          },
          {
            1: [3],
          },
          {
            18: quadrantDiagram34T5L4WZBinding10,
            26: 8,
            27: 2,
            28: quadrantDiagram34T5L4WZBinding11,
            55: quadrantDiagram34T5L4WZBinding12,
            56: quadrantDiagram34T5L4WZBinding13,
            57: quadrantDiagram34T5L4WZBinding14,
          },
          {
            18: quadrantDiagram34T5L4WZBinding10,
            26: 9,
            27: 2,
            28: quadrantDiagram34T5L4WZBinding11,
            55: quadrantDiagram34T5L4WZBinding12,
            56: quadrantDiagram34T5L4WZBinding13,
            57: quadrantDiagram34T5L4WZBinding14,
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding15,
            [2, 33],
            {
              29: 10,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding16,
            [2, 61],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding16,
            [2, 62],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding16,
            [2, 63],
          ),
          {
            1: [2, 30],
          },
          {
            1: [2, 31],
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            quadrantDiagram34T5L4WZBinding18,
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
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding25,
              25: quadrantDiagram34T5L4WZBinding26,
              35: quadrantDiagram34T5L4WZBinding27,
              37: quadrantDiagram34T5L4WZBinding28,
              39: quadrantDiagram34T5L4WZBinding29,
              41: quadrantDiagram34T5L4WZBinding30,
              42: quadrantDiagram34T5L4WZBinding31,
              48: quadrantDiagram34T5L4WZBinding32,
              50: quadrantDiagram34T5L4WZBinding33,
              51: quadrantDiagram34T5L4WZBinding34,
              52: quadrantDiagram34T5L4WZBinding35,
              53: quadrantDiagram34T5L4WZBinding36,
              54: quadrantDiagram34T5L4WZBinding37,
              60: quadrantDiagram34T5L4WZBinding38,
              61: quadrantDiagram34T5L4WZBinding39,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding15,
            [2, 34],
          ),
          {
            27: 45,
            55: quadrantDiagram34T5L4WZBinding12,
            56: quadrantDiagram34T5L4WZBinding13,
            57: quadrantDiagram34T5L4WZBinding14,
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 37],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            quadrantDiagram34T5L4WZBinding18,
            {
              24: 13,
              32: 15,
              33: 16,
              34: 17,
              43: 30,
              58: 31,
              31: 46,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding25,
              25: quadrantDiagram34T5L4WZBinding26,
              35: quadrantDiagram34T5L4WZBinding27,
              37: quadrantDiagram34T5L4WZBinding28,
              39: quadrantDiagram34T5L4WZBinding29,
              41: quadrantDiagram34T5L4WZBinding30,
              42: quadrantDiagram34T5L4WZBinding31,
              48: quadrantDiagram34T5L4WZBinding32,
              50: quadrantDiagram34T5L4WZBinding33,
              51: quadrantDiagram34T5L4WZBinding34,
              52: quadrantDiagram34T5L4WZBinding35,
              53: quadrantDiagram34T5L4WZBinding36,
              54: quadrantDiagram34T5L4WZBinding37,
              60: quadrantDiagram34T5L4WZBinding38,
              61: quadrantDiagram34T5L4WZBinding39,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 39],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 40],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
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
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 45],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 46],
          ),
          {
            18: [1, 50],
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 51,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 52,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 53,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 54,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 55,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            43: 56,
            58: 31,
            60: quadrantDiagram34T5L4WZBinding38,
            61: quadrantDiagram34T5L4WZBinding39,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          {
            4: quadrantDiagram34T5L4WZBinding19,
            5: quadrantDiagram34T5L4WZBinding20,
            8: quadrantDiagram34T5L4WZBinding45,
            10: quadrantDiagram34T5L4WZBinding21,
            12: quadrantDiagram34T5L4WZBinding22,
            13: quadrantDiagram34T5L4WZBinding23,
            14: quadrantDiagram34T5L4WZBinding24,
            18: quadrantDiagram34T5L4WZBinding46,
            44: [1, 57],
            47: [1, 58],
            58: 60,
            59: 59,
            63: quadrantDiagram34T5L4WZBinding40,
            64: quadrantDiagram34T5L4WZBinding41,
            65: quadrantDiagram34T5L4WZBinding42,
            66: quadrantDiagram34T5L4WZBinding43,
            67: quadrantDiagram34T5L4WZBinding44,
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 64],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 66],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 67],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 70],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 71],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 72],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 73],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 74],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 75],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 76],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 77],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 78],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 79],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 80],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding15,
            [2, 35],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 38],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 42],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 43],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 44],
          ),
          {
            3: 64,
            4: quadrantDiagram34T5L4WZBinding48,
            5: quadrantDiagram34T5L4WZBinding49,
            6: quadrantDiagram34T5L4WZBinding50,
            7: quadrantDiagram34T5L4WZBinding51,
            8: quadrantDiagram34T5L4WZBinding52,
            9: quadrantDiagram34T5L4WZBinding53,
            10: _QuadrantDiagram34T5L4WZ,
            11: quadrantDiagram34T5L4WZBinding54,
            12: quadrantDiagram34T5L4WZBinding55,
            13: quadrantDiagram34T5L4WZBinding56,
            14: quadrantDiagram34T5L4WZBinding57,
            15: quadrantDiagram34T5L4WZBinding58,
            21: 63,
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 53],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              49: [1, 77],
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 56],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              49: [1, 78],
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 57],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 58],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 59],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 60],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          {
            45: [1, 79],
          },
          {
            44: [1, 80],
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 65],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 81],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 82],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding47,
            [2, 83],
          ),
          {
            3: 82,
            4: quadrantDiagram34T5L4WZBinding48,
            5: quadrantDiagram34T5L4WZBinding49,
            6: quadrantDiagram34T5L4WZBinding50,
            7: quadrantDiagram34T5L4WZBinding51,
            8: quadrantDiagram34T5L4WZBinding52,
            9: quadrantDiagram34T5L4WZBinding53,
            10: _QuadrantDiagram34T5L4WZ,
            11: quadrantDiagram34T5L4WZBinding54,
            12: quadrantDiagram34T5L4WZBinding55,
            13: quadrantDiagram34T5L4WZBinding56,
            14: quadrantDiagram34T5L4WZBinding57,
            15: quadrantDiagram34T5L4WZBinding58,
            18: [1, 81],
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 23],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 1],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 2],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 3],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 4],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 5],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 6],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 7],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 8],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 9],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 10],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 11],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 12],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 52],
            {
              58: 31,
              43: 83,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              60: quadrantDiagram34T5L4WZBinding38,
              61: quadrantDiagram34T5L4WZBinding39,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 55],
            {
              58: 31,
              43: 84,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              60: quadrantDiagram34T5L4WZBinding38,
              61: quadrantDiagram34T5L4WZBinding39,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          {
            46: [1, 85],
          },
          {
            45: [1, 86],
          },
          {
            4: quadrantDiagram34T5L4WZBinding60,
            5: quadrantDiagram34T5L4WZBinding61,
            6: quadrantDiagram34T5L4WZBinding62,
            8: quadrantDiagram34T5L4WZBinding63,
            11: quadrantDiagram34T5L4WZBinding64,
            13: quadrantDiagram34T5L4WZBinding65,
            16: 89,
            17: quadrantDiagram34T5L4WZBinding66,
            18: quadrantDiagram34T5L4WZBinding67,
            19: quadrantDiagram34T5L4WZBinding68,
            20: quadrantDiagram34T5L4WZBinding69,
            22: 88,
            23: 87,
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding59,
            [2, 24],
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 51],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 54],
            {
              59: 59,
              58: 60,
              4: quadrantDiagram34T5L4WZBinding19,
              5: quadrantDiagram34T5L4WZBinding20,
              8: quadrantDiagram34T5L4WZBinding45,
              10: quadrantDiagram34T5L4WZBinding21,
              12: quadrantDiagram34T5L4WZBinding22,
              13: quadrantDiagram34T5L4WZBinding23,
              14: quadrantDiagram34T5L4WZBinding24,
              18: quadrantDiagram34T5L4WZBinding46,
              63: quadrantDiagram34T5L4WZBinding40,
              64: quadrantDiagram34T5L4WZBinding41,
              65: quadrantDiagram34T5L4WZBinding42,
              66: quadrantDiagram34T5L4WZBinding43,
              67: quadrantDiagram34T5L4WZBinding44,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 47],
            {
              22: 88,
              16: 89,
              23: 100,
              4: quadrantDiagram34T5L4WZBinding60,
              5: quadrantDiagram34T5L4WZBinding61,
              6: quadrantDiagram34T5L4WZBinding62,
              8: quadrantDiagram34T5L4WZBinding63,
              11: quadrantDiagram34T5L4WZBinding64,
              13: quadrantDiagram34T5L4WZBinding65,
              17: quadrantDiagram34T5L4WZBinding66,
              18: quadrantDiagram34T5L4WZBinding67,
              19: quadrantDiagram34T5L4WZBinding68,
              20: quadrantDiagram34T5L4WZBinding69,
            },
          ),
          {
            46: [1, 101],
          },
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 29],
            {
              10: quadrantDiagram34T5L4WZBinding70,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding71,
            [2, 27],
            {
              16: 103,
              4: quadrantDiagram34T5L4WZBinding60,
              5: quadrantDiagram34T5L4WZBinding61,
              6: quadrantDiagram34T5L4WZBinding62,
              8: quadrantDiagram34T5L4WZBinding63,
              11: quadrantDiagram34T5L4WZBinding64,
              13: quadrantDiagram34T5L4WZBinding65,
              17: quadrantDiagram34T5L4WZBinding66,
              18: quadrantDiagram34T5L4WZBinding67,
              19: quadrantDiagram34T5L4WZBinding68,
              20: quadrantDiagram34T5L4WZBinding69,
            },
          ),
          quadrantDiagram34T5L4WZBinding9($, [2, 25]),
          quadrantDiagram34T5L4WZBinding9($, [2, 13]),
          quadrantDiagram34T5L4WZBinding9($, [2, 14]),
          quadrantDiagram34T5L4WZBinding9($, [2, 15]),
          quadrantDiagram34T5L4WZBinding9($, [2, 16]),
          quadrantDiagram34T5L4WZBinding9($, [2, 17]),
          quadrantDiagram34T5L4WZBinding9($, [2, 18]),
          quadrantDiagram34T5L4WZBinding9($, [2, 19]),
          quadrantDiagram34T5L4WZBinding9($, [2, 20]),
          quadrantDiagram34T5L4WZBinding9($, [2, 21]),
          quadrantDiagram34T5L4WZBinding9($, [2, 22]),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 49],
            {
              10: quadrantDiagram34T5L4WZBinding70,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 48],
            {
              22: 88,
              16: 89,
              23: 104,
              4: quadrantDiagram34T5L4WZBinding60,
              5: quadrantDiagram34T5L4WZBinding61,
              6: quadrantDiagram34T5L4WZBinding62,
              8: quadrantDiagram34T5L4WZBinding63,
              11: quadrantDiagram34T5L4WZBinding64,
              13: quadrantDiagram34T5L4WZBinding65,
              17: quadrantDiagram34T5L4WZBinding66,
              18: quadrantDiagram34T5L4WZBinding67,
              19: quadrantDiagram34T5L4WZBinding68,
              20: quadrantDiagram34T5L4WZBinding69,
            },
          ),
          {
            4: quadrantDiagram34T5L4WZBinding60,
            5: quadrantDiagram34T5L4WZBinding61,
            6: quadrantDiagram34T5L4WZBinding62,
            8: quadrantDiagram34T5L4WZBinding63,
            11: quadrantDiagram34T5L4WZBinding64,
            13: quadrantDiagram34T5L4WZBinding65,
            16: 89,
            17: quadrantDiagram34T5L4WZBinding66,
            18: quadrantDiagram34T5L4WZBinding67,
            19: quadrantDiagram34T5L4WZBinding68,
            20: quadrantDiagram34T5L4WZBinding69,
            22: 105,
          },
          quadrantDiagram34T5L4WZBinding9($, [2, 26]),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding17,
            [2, 50],
            {
              10: quadrantDiagram34T5L4WZBinding70,
            },
          ),
          quadrantDiagram34T5L4WZBinding9(
            quadrantDiagram34T5L4WZBinding71,
            [2, 28],
            {
              16: 103,
              4: quadrantDiagram34T5L4WZBinding60,
              5: quadrantDiagram34T5L4WZBinding61,
              6: quadrantDiagram34T5L4WZBinding62,
              8: quadrantDiagram34T5L4WZBinding63,
              11: quadrantDiagram34T5L4WZBinding64,
              13: quadrantDiagram34T5L4WZBinding65,
              17: quadrantDiagram34T5L4WZBinding66,
              18: quadrantDiagram34T5L4WZBinding67,
              19: quadrantDiagram34T5L4WZBinding68,
              20: quadrantDiagram34T5L4WZBinding69,
            },
          ),
        ],
        defaultActions: {
          8: [2, 30],
          9: [2, 31],
        },
        parseError: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput36,
          quadrantDiagram34T5L4WZInput37,
        ) {
          if (quadrantDiagram34T5L4WZInput37.recoverable)
            this.trace(quadrantDiagram34T5L4WZInput36);
          else {
            var quadrantDiagram34T5L4WZBinding166 = Error(
              quadrantDiagram34T5L4WZInput36,
            );
            throw (
              (quadrantDiagram34T5L4WZBinding166.hash =
                quadrantDiagram34T5L4WZInput37),
              quadrantDiagram34T5L4WZBinding166
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (quadrantDiagram34T5L4WZInput1) {
          var quadrantDiagram34T5L4WZBinding73 = this,
            quadrantDiagram34T5L4WZBinding74 = [0],
            quadrantDiagram34T5L4WZBinding75 = [],
            quadrantDiagram34T5L4WZBinding76 = [null],
            quadrantDiagram34T5L4WZBinding77 = [],
            quadrantDiagram34T5L4WZBinding78 = this.table,
            quadrantDiagram34T5L4WZBinding79 = "",
            quadrantDiagram34T5L4WZBinding80 = 0,
            quadrantDiagram34T5L4WZBinding81 = 0,
            quadrantDiagram34T5L4WZBinding82 = 0,
            quadrantDiagram34T5L4WZBinding85 =
              quadrantDiagram34T5L4WZBinding77.slice.call(arguments, 1),
            quadrantDiagram34T5L4WZBinding86 = Object.create(this.lexer),
            quadrantDiagram34T5L4WZBinding87 = {
              yy: {},
            };
          for (var quadrantDiagram34T5L4WZBinding88 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              quadrantDiagram34T5L4WZBinding88,
            ) &&
              (quadrantDiagram34T5L4WZBinding87.yy[
                quadrantDiagram34T5L4WZBinding88
              ] = this.yy[quadrantDiagram34T5L4WZBinding88]);
          quadrantDiagram34T5L4WZBinding86.setInput(
            quadrantDiagram34T5L4WZInput1,
            quadrantDiagram34T5L4WZBinding87.yy,
          );
          quadrantDiagram34T5L4WZBinding87.yy.lexer =
            quadrantDiagram34T5L4WZBinding86;
          quadrantDiagram34T5L4WZBinding87.yy.parser = this;
          quadrantDiagram34T5L4WZBinding86.yylloc === undefined &&
            (quadrantDiagram34T5L4WZBinding86.yylloc = {});
          var quadrantDiagram34T5L4WZBinding89 =
            quadrantDiagram34T5L4WZBinding86.yylloc;
          quadrantDiagram34T5L4WZBinding77.push(
            quadrantDiagram34T5L4WZBinding89,
          );
          var quadrantDiagram34T5L4WZBinding90 =
            quadrantDiagram34T5L4WZBinding86.options &&
            quadrantDiagram34T5L4WZBinding86.options.ranges;
          typeof quadrantDiagram34T5L4WZBinding87.yy.parseError == "function"
            ? (this.parseError = quadrantDiagram34T5L4WZBinding87.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function quadrantDiagram34T5L4WZHelper20(
            quadrantDiagram34T5L4WZInput55,
          ) {
            quadrantDiagram34T5L4WZBinding74.length -=
              2 * quadrantDiagram34T5L4WZInput55;
            quadrantDiagram34T5L4WZBinding76.length -=
              quadrantDiagram34T5L4WZInput55;
            quadrantDiagram34T5L4WZBinding77.length -=
              quadrantDiagram34T5L4WZInput55;
          }
          defineFunctionName(quadrantDiagram34T5L4WZHelper20, "popStack");
          function quadrantDiagram34T5L4WZHelper21() {
            var quadrantDiagram34T5L4WZBinding162 =
              quadrantDiagram34T5L4WZBinding75.pop() ||
              quadrantDiagram34T5L4WZBinding86.lex() ||
              1;
            return (
              typeof quadrantDiagram34T5L4WZBinding162 != "number" &&
                (quadrantDiagram34T5L4WZBinding162 instanceof Array &&
                  ((quadrantDiagram34T5L4WZBinding75 =
                    quadrantDiagram34T5L4WZBinding162),
                  (quadrantDiagram34T5L4WZBinding162 =
                    quadrantDiagram34T5L4WZBinding75.pop())),
                (quadrantDiagram34T5L4WZBinding162 =
                  quadrantDiagram34T5L4WZBinding73.symbols_[
                    quadrantDiagram34T5L4WZBinding162
                  ] || quadrantDiagram34T5L4WZBinding162)),
              quadrantDiagram34T5L4WZBinding162
            );
          }
          defineFunctionName(quadrantDiagram34T5L4WZHelper21, "lex");
          for (
            var quadrantDiagram34T5L4WZBinding91,
              quadrantDiagram34T5L4WZBinding92,
              quadrantDiagram34T5L4WZBinding93,
              quadrantDiagram34T5L4WZBinding94,
              quadrantDiagram34T5L4WZBinding95,
              quadrantDiagram34T5L4WZBinding96 = {},
              quadrantDiagram34T5L4WZBinding97,
              quadrantDiagram34T5L4WZBinding98,
              quadrantDiagram34T5L4WZBinding99,
              quadrantDiagram34T5L4WZBinding100;
            ;
          ) {
            if (
              ((quadrantDiagram34T5L4WZBinding93 =
                quadrantDiagram34T5L4WZBinding74[
                  quadrantDiagram34T5L4WZBinding74.length - 1
                ]),
              this.defaultActions[quadrantDiagram34T5L4WZBinding93]
                ? (quadrantDiagram34T5L4WZBinding94 =
                    this.defaultActions[quadrantDiagram34T5L4WZBinding93])
                : ((quadrantDiagram34T5L4WZBinding91 ??=
                    quadrantDiagram34T5L4WZHelper21()),
                  (quadrantDiagram34T5L4WZBinding94 =
                    quadrantDiagram34T5L4WZBinding78[
                      quadrantDiagram34T5L4WZBinding93
                    ] &&
                    quadrantDiagram34T5L4WZBinding78[
                      quadrantDiagram34T5L4WZBinding93
                    ][quadrantDiagram34T5L4WZBinding91])),
              quadrantDiagram34T5L4WZBinding94 === undefined ||
                !quadrantDiagram34T5L4WZBinding94.length ||
                !quadrantDiagram34T5L4WZBinding94[0])
            ) {
              var quadrantDiagram34T5L4WZBinding101 = "";
              for (quadrantDiagram34T5L4WZBinding97 in ((quadrantDiagram34T5L4WZBinding100 =
                []),
              quadrantDiagram34T5L4WZBinding78[
                quadrantDiagram34T5L4WZBinding93
              ]))
                this.terminals_[quadrantDiagram34T5L4WZBinding97] &&
                  quadrantDiagram34T5L4WZBinding97 > 2 &&
                  quadrantDiagram34T5L4WZBinding100.push(
                    "'" +
                      this.terminals_[quadrantDiagram34T5L4WZBinding97] +
                      "'",
                  );
              quadrantDiagram34T5L4WZBinding101 =
                quadrantDiagram34T5L4WZBinding86.showPosition
                  ? "Parse error on line " +
                    (quadrantDiagram34T5L4WZBinding80 + 1) +
                    ":\n" +
                    quadrantDiagram34T5L4WZBinding86.showPosition() +
                    "\nExpecting " +
                    quadrantDiagram34T5L4WZBinding100.join(", ") +
                    ", got '" +
                    (this.terminals_[quadrantDiagram34T5L4WZBinding91] ||
                      quadrantDiagram34T5L4WZBinding91) +
                    "'"
                  : "Parse error on line " +
                    (quadrantDiagram34T5L4WZBinding80 + 1) +
                    ": Unexpected " +
                    (quadrantDiagram34T5L4WZBinding91 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[quadrantDiagram34T5L4WZBinding91] ||
                          quadrantDiagram34T5L4WZBinding91) +
                        "'");
              this.parseError(quadrantDiagram34T5L4WZBinding101, {
                text: quadrantDiagram34T5L4WZBinding86.match,
                token:
                  this.terminals_[quadrantDiagram34T5L4WZBinding91] ||
                  quadrantDiagram34T5L4WZBinding91,
                line: quadrantDiagram34T5L4WZBinding86.yylineno,
                loc: quadrantDiagram34T5L4WZBinding89,
                expected: quadrantDiagram34T5L4WZBinding100,
              });
            }
            if (
              quadrantDiagram34T5L4WZBinding94[0] instanceof Array &&
              quadrantDiagram34T5L4WZBinding94.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  quadrantDiagram34T5L4WZBinding93 +
                  ", token: " +
                  quadrantDiagram34T5L4WZBinding91,
              );
            switch (quadrantDiagram34T5L4WZBinding94[0]) {
              case 1:
                quadrantDiagram34T5L4WZBinding74.push(
                  quadrantDiagram34T5L4WZBinding91,
                );
                quadrantDiagram34T5L4WZBinding76.push(
                  quadrantDiagram34T5L4WZBinding86.yytext,
                );
                quadrantDiagram34T5L4WZBinding77.push(
                  quadrantDiagram34T5L4WZBinding86.yylloc,
                );
                quadrantDiagram34T5L4WZBinding74.push(
                  quadrantDiagram34T5L4WZBinding94[1],
                );
                quadrantDiagram34T5L4WZBinding91 = null;
                quadrantDiagram34T5L4WZBinding92
                  ? ((quadrantDiagram34T5L4WZBinding91 =
                      quadrantDiagram34T5L4WZBinding92),
                    (quadrantDiagram34T5L4WZBinding92 = null))
                  : ((quadrantDiagram34T5L4WZBinding81 =
                      quadrantDiagram34T5L4WZBinding86.yyleng),
                    (quadrantDiagram34T5L4WZBinding79 =
                      quadrantDiagram34T5L4WZBinding86.yytext),
                    (quadrantDiagram34T5L4WZBinding80 =
                      quadrantDiagram34T5L4WZBinding86.yylineno),
                    (quadrantDiagram34T5L4WZBinding89 =
                      quadrantDiagram34T5L4WZBinding86.yylloc),
                    quadrantDiagram34T5L4WZBinding82 > 0 &&
                      quadrantDiagram34T5L4WZBinding82--);
                break;
              case 2:
                if (
                  ((quadrantDiagram34T5L4WZBinding98 =
                    this.productions_[quadrantDiagram34T5L4WZBinding94[1]][1]),
                  (quadrantDiagram34T5L4WZBinding96.$ =
                    quadrantDiagram34T5L4WZBinding76[
                      quadrantDiagram34T5L4WZBinding76.length -
                        quadrantDiagram34T5L4WZBinding98
                    ]),
                  (quadrantDiagram34T5L4WZBinding96._$ = {
                    first_line:
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length -
                          (quadrantDiagram34T5L4WZBinding98 || 1)
                      ].first_line,
                    last_line:
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length - 1
                      ].last_line,
                    first_column:
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length -
                          (quadrantDiagram34T5L4WZBinding98 || 1)
                      ].first_column,
                    last_column:
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length - 1
                      ].last_column,
                  }),
                  quadrantDiagram34T5L4WZBinding90 &&
                    (quadrantDiagram34T5L4WZBinding96._$.range = [
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length -
                          (quadrantDiagram34T5L4WZBinding98 || 1)
                      ].range[0],
                      quadrantDiagram34T5L4WZBinding77[
                        quadrantDiagram34T5L4WZBinding77.length - 1
                      ].range[1],
                    ]),
                  (quadrantDiagram34T5L4WZBinding95 = this.performAction.apply(
                    quadrantDiagram34T5L4WZBinding96,
                    [
                      quadrantDiagram34T5L4WZBinding79,
                      quadrantDiagram34T5L4WZBinding81,
                      quadrantDiagram34T5L4WZBinding80,
                      quadrantDiagram34T5L4WZBinding87.yy,
                      quadrantDiagram34T5L4WZBinding94[1],
                      quadrantDiagram34T5L4WZBinding76,
                      quadrantDiagram34T5L4WZBinding77,
                    ].concat(quadrantDiagram34T5L4WZBinding85),
                  )),
                  quadrantDiagram34T5L4WZBinding95 !== undefined)
                )
                  return quadrantDiagram34T5L4WZBinding95;
                quadrantDiagram34T5L4WZBinding98 &&
                  ((quadrantDiagram34T5L4WZBinding74 =
                    quadrantDiagram34T5L4WZBinding74.slice(
                      0,
                      -1 * quadrantDiagram34T5L4WZBinding98 * 2,
                    )),
                  (quadrantDiagram34T5L4WZBinding76 =
                    quadrantDiagram34T5L4WZBinding76.slice(
                      0,
                      -1 * quadrantDiagram34T5L4WZBinding98,
                    )),
                  (quadrantDiagram34T5L4WZBinding77 =
                    quadrantDiagram34T5L4WZBinding77.slice(
                      0,
                      -1 * quadrantDiagram34T5L4WZBinding98,
                    )));
                quadrantDiagram34T5L4WZBinding74.push(
                  this.productions_[quadrantDiagram34T5L4WZBinding94[1]][0],
                );
                quadrantDiagram34T5L4WZBinding76.push(
                  quadrantDiagram34T5L4WZBinding96.$,
                );
                quadrantDiagram34T5L4WZBinding77.push(
                  quadrantDiagram34T5L4WZBinding96._$,
                );
                quadrantDiagram34T5L4WZBinding99 =
                  quadrantDiagram34T5L4WZBinding78[
                    quadrantDiagram34T5L4WZBinding74[
                      quadrantDiagram34T5L4WZBinding74.length - 2
                    ]
                  ][
                    quadrantDiagram34T5L4WZBinding74[
                      quadrantDiagram34T5L4WZBinding74.length - 1
                    ]
                  ];
                quadrantDiagram34T5L4WZBinding74.push(
                  quadrantDiagram34T5L4WZBinding99,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    quadrantDiagram34T5L4WZBinding72.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput42,
          quadrantDiagram34T5L4WZInput43,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              quadrantDiagram34T5L4WZInput42,
              quadrantDiagram34T5L4WZInput43,
            );
          else throw Error(quadrantDiagram34T5L4WZInput42);
        }, "parseError"),
        setInput: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput31,
          quadrantDiagram34T5L4WZInput32,
        ) {
          return (
            (this.yy = quadrantDiagram34T5L4WZInput32 || this.yy || {}),
            (this._input = quadrantDiagram34T5L4WZInput31),
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
          var quadrantDiagram34T5L4WZBinding159 = this._input[0];
          return (
            (this.yytext += quadrantDiagram34T5L4WZBinding159),
            this.yyleng++,
            this.offset++,
            (this.match += quadrantDiagram34T5L4WZBinding159),
            (this.matched += quadrantDiagram34T5L4WZBinding159),
            quadrantDiagram34T5L4WZBinding159.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            quadrantDiagram34T5L4WZBinding159
          );
        }, "input"),
        unput: defineFunctionName(function (quadrantDiagram34T5L4WZInput30) {
          var quadrantDiagram34T5L4WZBinding145 =
              quadrantDiagram34T5L4WZInput30.length,
            quadrantDiagram34T5L4WZBinding146 =
              quadrantDiagram34T5L4WZInput30.split(/(?:\r\n?|\n)/g);
          this._input = quadrantDiagram34T5L4WZInput30 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - quadrantDiagram34T5L4WZBinding145,
          );
          this.offset -= quadrantDiagram34T5L4WZBinding145;
          var quadrantDiagram34T5L4WZBinding147 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          quadrantDiagram34T5L4WZBinding146.length - 1 &&
            (this.yylineno -= quadrantDiagram34T5L4WZBinding146.length - 1);
          var quadrantDiagram34T5L4WZBinding148 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: quadrantDiagram34T5L4WZBinding146
                ? (quadrantDiagram34T5L4WZBinding146.length ===
                  quadrantDiagram34T5L4WZBinding147.length
                    ? this.yylloc.first_column
                    : 0) +
                  quadrantDiagram34T5L4WZBinding147[
                    quadrantDiagram34T5L4WZBinding147.length -
                      quadrantDiagram34T5L4WZBinding146.length
                  ].length -
                  quadrantDiagram34T5L4WZBinding146[0].length
                : this.yylloc.first_column - quadrantDiagram34T5L4WZBinding145,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                quadrantDiagram34T5L4WZBinding148[0],
                quadrantDiagram34T5L4WZBinding148[0] +
                  this.yyleng -
                  quadrantDiagram34T5L4WZBinding145,
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
        less: defineFunctionName(function (quadrantDiagram34T5L4WZInput60) {
          this.unput(this.match.slice(quadrantDiagram34T5L4WZInput60));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var quadrantDiagram34T5L4WZBinding163 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (quadrantDiagram34T5L4WZBinding163.length > 20 ? "..." : "") +
            quadrantDiagram34T5L4WZBinding163.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var quadrantDiagram34T5L4WZBinding161 = this.match;
          return (
            quadrantDiagram34T5L4WZBinding161.length < 20 &&
              (quadrantDiagram34T5L4WZBinding161 += this._input.substr(
                0,
                20 - quadrantDiagram34T5L4WZBinding161.length,
              )),
            (
              quadrantDiagram34T5L4WZBinding161.substr(0, 20) +
              (quadrantDiagram34T5L4WZBinding161.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var quadrantDiagram34T5L4WZBinding164 = this.pastInput(),
            quadrantDiagram34T5L4WZBinding165 = Array(
              quadrantDiagram34T5L4WZBinding164.length + 1,
            ).join("-");
          return (
            quadrantDiagram34T5L4WZBinding164 +
            this.upcomingInput() +
            "\n" +
            quadrantDiagram34T5L4WZBinding165 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput22,
          quadrantDiagram34T5L4WZInput23,
        ) {
          var quadrantDiagram34T5L4WZBinding122,
            quadrantDiagram34T5L4WZBinding123,
            quadrantDiagram34T5L4WZBinding124;
          if (
            (this.options.backtrack_lexer &&
              ((quadrantDiagram34T5L4WZBinding124 = {
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
                (quadrantDiagram34T5L4WZBinding124.yylloc.range =
                  this.yylloc.range.slice(0))),
            (quadrantDiagram34T5L4WZBinding123 =
              quadrantDiagram34T5L4WZInput22[0].match(/(?:\r\n?|\n).*/g)),
            quadrantDiagram34T5L4WZBinding123 &&
              (this.yylineno += quadrantDiagram34T5L4WZBinding123.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: quadrantDiagram34T5L4WZBinding123
                ? quadrantDiagram34T5L4WZBinding123[
                    quadrantDiagram34T5L4WZBinding123.length - 1
                  ].length -
                  quadrantDiagram34T5L4WZBinding123[
                    quadrantDiagram34T5L4WZBinding123.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  quadrantDiagram34T5L4WZInput22[0].length,
            }),
            (this.yytext += quadrantDiagram34T5L4WZInput22[0]),
            (this.match += quadrantDiagram34T5L4WZInput22[0]),
            (this.matches = quadrantDiagram34T5L4WZInput22),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              quadrantDiagram34T5L4WZInput22[0].length,
            )),
            (this.matched += quadrantDiagram34T5L4WZInput22[0]),
            (quadrantDiagram34T5L4WZBinding122 = this.performAction.call(
              this,
              this.yy,
              this,
              quadrantDiagram34T5L4WZInput23,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            quadrantDiagram34T5L4WZBinding122)
          )
            return quadrantDiagram34T5L4WZBinding122;
          if (this._backtrack) {
            for (var quadrantDiagram34T5L4WZBinding125 in quadrantDiagram34T5L4WZBinding124)
              this[quadrantDiagram34T5L4WZBinding125] =
                quadrantDiagram34T5L4WZBinding124[
                  quadrantDiagram34T5L4WZBinding125
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var quadrantDiagram34T5L4WZBinding139,
            quadrantDiagram34T5L4WZBinding140,
            quadrantDiagram34T5L4WZBinding141,
            quadrantDiagram34T5L4WZBinding142;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var quadrantDiagram34T5L4WZBinding143 = this._currentRules(),
              quadrantDiagram34T5L4WZBinding144 = 0;
            quadrantDiagram34T5L4WZBinding144 <
            quadrantDiagram34T5L4WZBinding143.length;
            quadrantDiagram34T5L4WZBinding144++
          )
            if (
              ((quadrantDiagram34T5L4WZBinding141 = this._input.match(
                this.rules[
                  quadrantDiagram34T5L4WZBinding143[
                    quadrantDiagram34T5L4WZBinding144
                  ]
                ],
              )),
              quadrantDiagram34T5L4WZBinding141 &&
                (!quadrantDiagram34T5L4WZBinding140 ||
                  quadrantDiagram34T5L4WZBinding141[0].length >
                    quadrantDiagram34T5L4WZBinding140[0].length))
            ) {
              if (
                ((quadrantDiagram34T5L4WZBinding140 =
                  quadrantDiagram34T5L4WZBinding141),
                (quadrantDiagram34T5L4WZBinding142 =
                  quadrantDiagram34T5L4WZBinding144),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((quadrantDiagram34T5L4WZBinding139 = this.test_match(
                    quadrantDiagram34T5L4WZBinding141,
                    quadrantDiagram34T5L4WZBinding143[
                      quadrantDiagram34T5L4WZBinding144
                    ],
                  )),
                  quadrantDiagram34T5L4WZBinding139 !== false)
                )
                  return quadrantDiagram34T5L4WZBinding139;
                if (this._backtrack) {
                  quadrantDiagram34T5L4WZBinding140 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return quadrantDiagram34T5L4WZBinding140
            ? ((quadrantDiagram34T5L4WZBinding139 = this.test_match(
                quadrantDiagram34T5L4WZBinding140,
                quadrantDiagram34T5L4WZBinding143[
                  quadrantDiagram34T5L4WZBinding142
                ],
              )),
              quadrantDiagram34T5L4WZBinding139 === false
                ? false
                : quadrantDiagram34T5L4WZBinding139)
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
        begin: defineFunctionName(function (quadrantDiagram34T5L4WZInput61) {
          this.conditionStack.push(quadrantDiagram34T5L4WZInput61);
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
        topState: defineFunctionName(function (quadrantDiagram34T5L4WZInput35) {
          return (
            (quadrantDiagram34T5L4WZInput35 =
              this.conditionStack.length -
              1 -
              Math.abs(quadrantDiagram34T5L4WZInput35 || 0)),
            quadrantDiagram34T5L4WZInput35 >= 0
              ? this.conditionStack[quadrantDiagram34T5L4WZInput35]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput73,
        ) {
          this.begin(quadrantDiagram34T5L4WZInput73);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          quadrantDiagram34T5L4WZInput13,
          quadrantDiagram34T5L4WZInput14,
          quadrantDiagram34T5L4WZInput15,
          quadrantDiagram34T5L4WZInput16,
        ) {
          switch (quadrantDiagram34T5L4WZInput15) {
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
    function quadrantDiagram34T5L4WZHelper19() {
      this.yy = {};
    }
    return (
      defineFunctionName(quadrantDiagram34T5L4WZHelper19, "Parser"),
      (quadrantDiagram34T5L4WZHelper19.prototype =
        quadrantDiagram34T5L4WZBinding72),
      (quadrantDiagram34T5L4WZBinding72.Parser =
        quadrantDiagram34T5L4WZHelper19),
      new quadrantDiagram34T5L4WZHelper19()
    );
  })();
  quadrantDiagram34T5L4WZBinding1.parser = quadrantDiagram34T5L4WZBinding1;
  quadrantDiagram34T5L4WZBinding2 = quadrantDiagram34T5L4WZBinding1;
  quadrantDiagram34T5L4WZBinding3 = E();
  quadrantDiagram34T5L4WZBinding4 = class {
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
        quadrant1Fill: quadrantDiagram34T5L4WZBinding3.quadrant1Fill,
        quadrant2Fill: quadrantDiagram34T5L4WZBinding3.quadrant2Fill,
        quadrant3Fill: quadrantDiagram34T5L4WZBinding3.quadrant3Fill,
        quadrant4Fill: quadrantDiagram34T5L4WZBinding3.quadrant4Fill,
        quadrant1TextFill: quadrantDiagram34T5L4WZBinding3.quadrant1TextFill,
        quadrant2TextFill: quadrantDiagram34T5L4WZBinding3.quadrant2TextFill,
        quadrant3TextFill: quadrantDiagram34T5L4WZBinding3.quadrant3TextFill,
        quadrant4TextFill: quadrantDiagram34T5L4WZBinding3.quadrant4TextFill,
        quadrantPointFill: quadrantDiagram34T5L4WZBinding3.quadrantPointFill,
        quadrantPointTextFill:
          quadrantDiagram34T5L4WZBinding3.quadrantPointTextFill,
        quadrantXAxisTextFill:
          quadrantDiagram34T5L4WZBinding3.quadrantXAxisTextFill,
        quadrantYAxisTextFill:
          quadrantDiagram34T5L4WZBinding3.quadrantYAxisTextFill,
        quadrantTitleFill: quadrantDiagram34T5L4WZBinding3.quadrantTitleFill,
        quadrantInternalBorderStrokeFill:
          quadrantDiagram34T5L4WZBinding3.quadrantInternalBorderStrokeFill,
        quadrantExternalBorderStrokeFill:
          quadrantDiagram34T5L4WZBinding3.quadrantExternalBorderStrokeFill,
      };
    }
    clear() {
      this.config = this.getDefaultConfig();
      this.themeConfig = this.getDefaultThemeConfig();
      this.data = this.getDefaultData();
      this.classes = new Map();
      logger.info("clear called");
    }
    setData(quadrantDiagram34T5L4WZInput62) {
      this.data = {
        ...this.data,
        ...quadrantDiagram34T5L4WZInput62,
      };
    }
    addPoints(quadrantDiagram34T5L4WZInput58) {
      this.data.points = [
        ...quadrantDiagram34T5L4WZInput58,
        ...this.data.points,
      ];
    }
    addClass(quadrantDiagram34T5L4WZInput71, quadrantDiagram34T5L4WZInput72) {
      this.classes.set(
        quadrantDiagram34T5L4WZInput71,
        quadrantDiagram34T5L4WZInput72,
      );
    }
    setConfig(quadrantDiagram34T5L4WZInput44) {
      logger.trace("setConfig called with: ", quadrantDiagram34T5L4WZInput44);
      this.config = {
        ...this.config,
        ...quadrantDiagram34T5L4WZInput44,
      };
    }
    setThemeConfig(quadrantDiagram34T5L4WZInput41) {
      logger.trace(
        "setThemeConfig called with: ",
        quadrantDiagram34T5L4WZInput41,
      );
      this.themeConfig = {
        ...this.themeConfig,
        ...quadrantDiagram34T5L4WZInput41,
      };
    }
    calculateSpace(
      quadrantDiagram34T5L4WZInput25,
      quadrantDiagram34T5L4WZInput26,
      quadrantDiagram34T5L4WZInput27,
      quadrantDiagram34T5L4WZInput28,
    ) {
      let quadrantDiagram34T5L4WZBinding127 =
          this.config.xAxisLabelPadding * 2 + this.config.xAxisLabelFontSize,
        quadrantDiagram34T5L4WZBinding128 = {
          top:
            quadrantDiagram34T5L4WZInput25 === "top" &&
            quadrantDiagram34T5L4WZInput26
              ? quadrantDiagram34T5L4WZBinding127
              : 0,
          bottom:
            quadrantDiagram34T5L4WZInput25 === "bottom" &&
            quadrantDiagram34T5L4WZInput26
              ? quadrantDiagram34T5L4WZBinding127
              : 0,
        },
        quadrantDiagram34T5L4WZBinding129 =
          this.config.yAxisLabelPadding * 2 + this.config.yAxisLabelFontSize,
        quadrantDiagram34T5L4WZBinding130 = {
          left:
            this.config.yAxisPosition === "left" &&
            quadrantDiagram34T5L4WZInput27
              ? quadrantDiagram34T5L4WZBinding129
              : 0,
          right:
            this.config.yAxisPosition === "right" &&
            quadrantDiagram34T5L4WZInput27
              ? quadrantDiagram34T5L4WZBinding129
              : 0,
        },
        quadrantDiagram34T5L4WZBinding131 =
          this.config.titleFontSize + this.config.titlePadding * 2,
        quadrantDiagram34T5L4WZBinding132 = {
          top: quadrantDiagram34T5L4WZInput28
            ? quadrantDiagram34T5L4WZBinding131
            : 0,
        },
        quadrantDiagram34T5L4WZBinding133 =
          this.config.quadrantPadding + quadrantDiagram34T5L4WZBinding130.left,
        quadrantDiagram34T5L4WZBinding134 =
          this.config.quadrantPadding +
          quadrantDiagram34T5L4WZBinding128.top +
          quadrantDiagram34T5L4WZBinding132.top,
        quadrantDiagram34T5L4WZBinding135 =
          this.config.chartWidth -
          this.config.quadrantPadding * 2 -
          quadrantDiagram34T5L4WZBinding130.left -
          quadrantDiagram34T5L4WZBinding130.right,
        quadrantDiagram34T5L4WZBinding136 =
          this.config.chartHeight -
          this.config.quadrantPadding * 2 -
          quadrantDiagram34T5L4WZBinding128.top -
          quadrantDiagram34T5L4WZBinding128.bottom -
          quadrantDiagram34T5L4WZBinding132.top;
      return {
        xAxisSpace: quadrantDiagram34T5L4WZBinding128,
        yAxisSpace: quadrantDiagram34T5L4WZBinding130,
        titleSpace: quadrantDiagram34T5L4WZBinding132,
        quadrantSpace: {
          quadrantLeft: quadrantDiagram34T5L4WZBinding133,
          quadrantTop: quadrantDiagram34T5L4WZBinding134,
          quadrantWidth: quadrantDiagram34T5L4WZBinding135,
          quadrantHalfWidth: quadrantDiagram34T5L4WZBinding135 / 2,
          quadrantHeight: quadrantDiagram34T5L4WZBinding136,
          quadrantHalfHeight: quadrantDiagram34T5L4WZBinding136 / 2,
        },
      };
    }
    getAxisLabels(
      quadrantDiagram34T5L4WZInput17,
      quadrantDiagram34T5L4WZInput18,
      quadrantDiagram34T5L4WZInput19,
      quadrantDiagram34T5L4WZInput20,
    ) {
      let { quadrantSpace, titleSpace } = quadrantDiagram34T5L4WZInput20,
        {
          quadrantHalfHeight,
          quadrantHeight,
          quadrantLeft,
          quadrantHalfWidth,
          quadrantTop,
          quadrantWidth,
        } = quadrantSpace,
        quadrantDiagram34T5L4WZBinding118 = !!this.data.xAxisRightText,
        quadrantDiagram34T5L4WZBinding119 = !!this.data.yAxisTopText,
        quadrantDiagram34T5L4WZBinding120 = [];
      return (
        this.data.xAxisLeftText &&
          quadrantDiagram34T5L4WZInput18 &&
          quadrantDiagram34T5L4WZBinding120.push({
            text: this.data.xAxisLeftText,
            fill: this.themeConfig.quadrantXAxisTextFill,
            x:
              quadrantLeft +
              (quadrantDiagram34T5L4WZBinding118 ? quadrantHalfWidth / 2 : 0),
            y:
              quadrantDiagram34T5L4WZInput17 === "top"
                ? this.config.xAxisLabelPadding + titleSpace.top
                : this.config.xAxisLabelPadding +
                  quadrantTop +
                  quadrantHeight +
                  this.config.quadrantPadding,
            fontSize: this.config.xAxisLabelFontSize,
            verticalPos: quadrantDiagram34T5L4WZBinding118 ? "center" : "left",
            horizontalPos: "top",
            rotation: 0,
          }),
        this.data.xAxisRightText &&
          quadrantDiagram34T5L4WZInput18 &&
          quadrantDiagram34T5L4WZBinding120.push({
            text: this.data.xAxisRightText,
            fill: this.themeConfig.quadrantXAxisTextFill,
            x:
              quadrantLeft +
              quadrantHalfWidth +
              (quadrantDiagram34T5L4WZBinding118 ? quadrantHalfWidth / 2 : 0),
            y:
              quadrantDiagram34T5L4WZInput17 === "top"
                ? this.config.xAxisLabelPadding + titleSpace.top
                : this.config.xAxisLabelPadding +
                  quadrantTop +
                  quadrantHeight +
                  this.config.quadrantPadding,
            fontSize: this.config.xAxisLabelFontSize,
            verticalPos: quadrantDiagram34T5L4WZBinding118 ? "center" : "left",
            horizontalPos: "top",
            rotation: 0,
          }),
        this.data.yAxisBottomText &&
          quadrantDiagram34T5L4WZInput19 &&
          quadrantDiagram34T5L4WZBinding120.push({
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
              (quadrantDiagram34T5L4WZBinding119 ? quadrantHalfHeight / 2 : 0),
            fontSize: this.config.yAxisLabelFontSize,
            verticalPos: quadrantDiagram34T5L4WZBinding119 ? "center" : "left",
            horizontalPos: "top",
            rotation: -90,
          }),
        this.data.yAxisTopText &&
          quadrantDiagram34T5L4WZInput19 &&
          quadrantDiagram34T5L4WZBinding120.push({
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
              (quadrantDiagram34T5L4WZBinding119 ? quadrantHalfHeight / 2 : 0),
            fontSize: this.config.yAxisLabelFontSize,
            verticalPos: quadrantDiagram34T5L4WZBinding119 ? "center" : "left",
            horizontalPos: "top",
            rotation: -90,
          }),
        quadrantDiagram34T5L4WZBinding120
      );
    }
    getQuadrants(quadrantDiagram34T5L4WZInput21) {
      let { quadrantSpace } = quadrantDiagram34T5L4WZInput21,
        { quadrantHalfHeight, quadrantLeft, quadrantHalfWidth, quadrantTop } =
          quadrantSpace,
        quadrantDiagram34T5L4WZBinding121 = [
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
      for (let quadrantDiagram34T5L4WZBinding160 of quadrantDiagram34T5L4WZBinding121) {
        quadrantDiagram34T5L4WZBinding160.text.x =
          quadrantDiagram34T5L4WZBinding160.x +
          quadrantDiagram34T5L4WZBinding160.width / 2;
        this.data.points.length === 0
          ? ((quadrantDiagram34T5L4WZBinding160.text.y =
              quadrantDiagram34T5L4WZBinding160.y +
              quadrantDiagram34T5L4WZBinding160.height / 2),
            (quadrantDiagram34T5L4WZBinding160.text.horizontalPos = "middle"))
          : ((quadrantDiagram34T5L4WZBinding160.text.y =
              quadrantDiagram34T5L4WZBinding160.y +
              this.config.quadrantTextTopPadding),
            (quadrantDiagram34T5L4WZBinding160.text.horizontalPos = "top"));
      }
      return quadrantDiagram34T5L4WZBinding121;
    }
    getQuadrantPoints(quadrantDiagram34T5L4WZInput29) {
      let { quadrantSpace } = quadrantDiagram34T5L4WZInput29,
        { quadrantHeight, quadrantLeft, quadrantTop, quadrantWidth } =
          quadrantSpace,
        quadrantDiagram34T5L4WZBinding137 = scaleLinear()
          .domain([0, 1])
          .range([quadrantLeft, quadrantWidth + quadrantLeft]),
        quadrantDiagram34T5L4WZBinding138 = scaleLinear()
          .domain([0, 1])
          .range([quadrantHeight + quadrantTop, quadrantTop]);
      return this.data.points.map((item) => {
        let quadrantDiagram34T5L4WZBinding149 = this.classes.get(
          item.className,
        );
        return (
          quadrantDiagram34T5L4WZBinding149 &&
            (item = {
              ...quadrantDiagram34T5L4WZBinding149,
              ...item,
            }),
          {
            x: quadrantDiagram34T5L4WZBinding137(item.x),
            y: quadrantDiagram34T5L4WZBinding138(item.y),
            fill: item.color ?? this.themeConfig.quadrantPointFill,
            radius: item.radius ?? this.config.pointRadius,
            text: {
              text: item.text,
              fill: this.themeConfig.quadrantPointTextFill,
              x: quadrantDiagram34T5L4WZBinding137(item.x),
              y:
                quadrantDiagram34T5L4WZBinding138(item.y) +
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
    getBorders(quadrantDiagram34T5L4WZInput24) {
      let quadrantDiagram34T5L4WZBinding126 =
          this.config.quadrantExternalBorderStrokeWidth / 2,
        { quadrantSpace } = quadrantDiagram34T5L4WZInput24,
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
          x1: quadrantLeft - quadrantDiagram34T5L4WZBinding126,
          y1: quadrantTop,
          x2: quadrantLeft + quadrantWidth + quadrantDiagram34T5L4WZBinding126,
          y2: quadrantTop,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantWidth,
          y1: quadrantTop + quadrantDiagram34T5L4WZBinding126,
          x2: quadrantLeft + quadrantWidth,
          y2: quadrantTop + quadrantHeight - quadrantDiagram34T5L4WZBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft - quadrantDiagram34T5L4WZBinding126,
          y1: quadrantTop + quadrantHeight,
          x2: quadrantLeft + quadrantWidth + quadrantDiagram34T5L4WZBinding126,
          y2: quadrantTop + quadrantHeight,
        },
        {
          strokeFill: this.themeConfig.quadrantExternalBorderStrokeFill,
          strokeWidth: this.config.quadrantExternalBorderStrokeWidth,
          x1: quadrantLeft,
          y1: quadrantTop + quadrantDiagram34T5L4WZBinding126,
          x2: quadrantLeft,
          y2: quadrantTop + quadrantHeight - quadrantDiagram34T5L4WZBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
          strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantHalfWidth,
          y1: quadrantTop + quadrantDiagram34T5L4WZBinding126,
          x2: quadrantLeft + quadrantHalfWidth,
          y2: quadrantTop + quadrantHeight - quadrantDiagram34T5L4WZBinding126,
        },
        {
          strokeFill: this.themeConfig.quadrantInternalBorderStrokeFill,
          strokeWidth: this.config.quadrantInternalBorderStrokeWidth,
          x1: quadrantLeft + quadrantDiagram34T5L4WZBinding126,
          y1: quadrantTop + quadrantHalfHeight,
          x2: quadrantLeft + quadrantWidth - quadrantDiagram34T5L4WZBinding126,
          y2: quadrantTop + quadrantHalfHeight,
        },
      ];
    }
    getTitle(quadrantDiagram34T5L4WZInput34) {
      if (quadrantDiagram34T5L4WZInput34)
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
      let quadrantDiagram34T5L4WZBinding150 =
          this.config.showXAxis &&
          !!(this.data.xAxisLeftText || this.data.xAxisRightText),
        quadrantDiagram34T5L4WZBinding151 =
          this.config.showYAxis &&
          !!(this.data.yAxisTopText || this.data.yAxisBottomText),
        quadrantDiagram34T5L4WZBinding152 =
          this.config.showTitle && !!this.data.titleText,
        quadrantDiagram34T5L4WZBinding153 =
          this.data.points.length > 0 ? "bottom" : this.config.xAxisPosition,
        quadrantDiagram34T5L4WZBinding154 = this.calculateSpace(
          quadrantDiagram34T5L4WZBinding153,
          quadrantDiagram34T5L4WZBinding150,
          quadrantDiagram34T5L4WZBinding151,
          quadrantDiagram34T5L4WZBinding152,
        );
      return {
        points: this.getQuadrantPoints(quadrantDiagram34T5L4WZBinding154),
        quadrants: this.getQuadrants(quadrantDiagram34T5L4WZBinding154),
        axisLabels: this.getAxisLabels(
          quadrantDiagram34T5L4WZBinding153,
          quadrantDiagram34T5L4WZBinding150,
          quadrantDiagram34T5L4WZBinding151,
          quadrantDiagram34T5L4WZBinding154,
        ),
        borderLines: this.getBorders(quadrantDiagram34T5L4WZBinding154),
        title: this.getTitle(quadrantDiagram34T5L4WZBinding152),
      };
    }
  };
  quadrantDiagram34T5L4WZBinding5 = class extends Error {
    static {
      defineFunctionName(this, "InvalidStyleError");
    }
    constructor(
      quadrantDiagram34T5L4WZInput38,
      quadrantDiagram34T5L4WZInput39,
      quadrantDiagram34T5L4WZInput40,
    ) {
      super(
        `value for ${quadrantDiagram34T5L4WZInput38} ${quadrantDiagram34T5L4WZInput39} is invalid, please use a valid ${quadrantDiagram34T5L4WZInput40}`,
      );
      this.name = "InvalidStyleError";
    }
  };
  defineFunctionName(quadrantDiagram34T5L4WZHelper1, "validateHexCode");
  defineFunctionName(quadrantDiagram34T5L4WZHelper2, "validateNumber");
  defineFunctionName(quadrantDiagram34T5L4WZHelper3, "validateSizeInPixels");
  quadrantDiagram34T5L4WZBinding6 = b();
  defineFunctionName(quadrantDiagram34T5L4WZHelper4, "textSanitizer");
  quadrantDiagram34T5L4WZBinding7 = new quadrantDiagram34T5L4WZBinding4();
  defineFunctionName(quadrantDiagram34T5L4WZHelper5, "setQuadrant1Text");
  defineFunctionName(quadrantDiagram34T5L4WZHelper6, "setQuadrant2Text");
  defineFunctionName(quadrantDiagram34T5L4WZHelper7, "setQuadrant3Text");
  defineFunctionName(quadrantDiagram34T5L4WZHelper8, "setQuadrant4Text");
  defineFunctionName(quadrantDiagram34T5L4WZHelper9, "setXAxisLeftText");
  defineFunctionName(quadrantDiagram34T5L4WZHelper10, "setXAxisRightText");
  defineFunctionName(quadrantDiagram34T5L4WZHelper11, "setYAxisTopText");
  defineFunctionName(quadrantDiagram34T5L4WZHelper12, "setYAxisBottomText");
  defineFunctionName(quadrantDiagram34T5L4WZHelper13, "parseStyles");
  defineFunctionName(quadrantDiagram34T5L4WZHelper14, "addPoint");
  defineFunctionName(quadrantDiagram34T5L4WZHelper15, "addClass");
  defineFunctionName(quadrantDiagram34T5L4WZHelper16, "setWidth");
  defineFunctionName(quadrantDiagram34T5L4WZHelper17, "setHeight");
  defineFunctionName(quadrantDiagram34T5L4WZHelper18, "getQuadrantData");
  quadrantDiagram34T5L4WZBinding8 = {
    setWidth: quadrantDiagram34T5L4WZHelper16,
    setHeight: quadrantDiagram34T5L4WZHelper17,
    setQuadrant1Text: quadrantDiagram34T5L4WZHelper5,
    setQuadrant2Text: quadrantDiagram34T5L4WZHelper6,
    setQuadrant3Text: quadrantDiagram34T5L4WZHelper7,
    setQuadrant4Text: quadrantDiagram34T5L4WZHelper8,
    setXAxisLeftText: quadrantDiagram34T5L4WZHelper9,
    setXAxisRightText: quadrantDiagram34T5L4WZHelper10,
    setYAxisTopText: quadrantDiagram34T5L4WZHelper11,
    setYAxisBottomText: quadrantDiagram34T5L4WZHelper12,
    parseStyles: quadrantDiagram34T5L4WZHelper13,
    addPoint: quadrantDiagram34T5L4WZHelper14,
    addClass: quadrantDiagram34T5L4WZHelper15,
    getQuadrantData: quadrantDiagram34T5L4WZHelper18,
    clear: defineFunctionName(function () {
      quadrantDiagram34T5L4WZBinding7.clear();
      _chunkICPOFSXXA();
    }, "clear"),
    setAccTitle: H,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: G,
    getDiagramTitle: C,
    getAccDescription: _,
    setAccDescription: V,
  };
  QuadrantDiagram34T5L4WZ = {
    parser: quadrantDiagram34T5L4WZBinding2,
    db: quadrantDiagram34T5L4WZBinding8,
    renderer: {
      draw: defineFunctionName(
        (
          quadrantDiagram34T5L4WZInput2,
          quadrantDiagram34T5L4WZInput3,
          quadrantDiagram34T5L4WZInput4,
          quadrantDiagram34T5L4WZInput5,
        ) => {
          function quadrantDiagram34T5L4WZHelper22(
            quadrantDiagram34T5L4WZInput56,
          ) {
            return quadrantDiagram34T5L4WZInput56 === "top"
              ? "hanging"
              : "middle";
          }
          defineFunctionName(
            quadrantDiagram34T5L4WZHelper22,
            "getDominantBaseLine",
          );
          function quadrantDiagram34T5L4WZHelper23(
            quadrantDiagram34T5L4WZInput57,
          ) {
            return quadrantDiagram34T5L4WZInput57 === "left"
              ? "start"
              : "middle";
          }
          defineFunctionName(quadrantDiagram34T5L4WZHelper23, "getTextAnchor");
          function quadrantDiagram34T5L4WZHelper24(
            quadrantDiagram34T5L4WZInput54,
          ) {
            return `translate(${quadrantDiagram34T5L4WZInput54.x}, ${quadrantDiagram34T5L4WZInput54.y}) rotate(${quadrantDiagram34T5L4WZInput54.rotation || 0})`;
          }
          defineFunctionName(
            quadrantDiagram34T5L4WZHelper24,
            "getTransformation",
          );
          let quadrantDiagram34T5L4WZBinding102 = b();
          logger.debug(
            "Rendering quadrant chart\n" + quadrantDiagram34T5L4WZInput2,
          );
          let quadrantDiagram34T5L4WZBinding103 =
              quadrantDiagram34T5L4WZBinding102.securityLevel,
            quadrantDiagram34T5L4WZBinding104;
          quadrantDiagram34T5L4WZBinding103 === "sandbox" &&
            (quadrantDiagram34T5L4WZBinding104 = select(
              "#i" + quadrantDiagram34T5L4WZInput3,
            ));
          let quadrantDiagram34T5L4WZBinding105 = select(
              quadrantDiagram34T5L4WZBinding103 === "sandbox"
                ? quadrantDiagram34T5L4WZBinding104.nodes()[0].contentDocument
                    .body
                : "body",
            ).select(`[id="${quadrantDiagram34T5L4WZInput3}"]`),
            quadrantDiagram34T5L4WZBinding106 =
              quadrantDiagram34T5L4WZBinding105
                .append("g")
                .attr("class", "main"),
            quadrantDiagram34T5L4WZBinding107 =
              quadrantDiagram34T5L4WZBinding102.quadrantChart?.chartWidth ??
              500,
            quadrantDiagram34T5L4WZBinding108 =
              quadrantDiagram34T5L4WZBinding102.quadrantChart?.chartHeight ??
              500;
          _chunkICPOFSXXC(
            quadrantDiagram34T5L4WZBinding105,
            quadrantDiagram34T5L4WZBinding108,
            quadrantDiagram34T5L4WZBinding107,
            quadrantDiagram34T5L4WZBinding102.quadrantChart?.useMaxWidth ??
              true,
          );
          quadrantDiagram34T5L4WZBinding105.attr(
            "viewBox",
            "0 0 " +
              quadrantDiagram34T5L4WZBinding107 +
              " " +
              quadrantDiagram34T5L4WZBinding108,
          );
          quadrantDiagram34T5L4WZInput5.db.setHeight(
            quadrantDiagram34T5L4WZBinding108,
          );
          quadrantDiagram34T5L4WZInput5.db.setWidth(
            quadrantDiagram34T5L4WZBinding107,
          );
          let quadrantDiagram34T5L4WZBinding109 =
              quadrantDiagram34T5L4WZInput5.db.getQuadrantData(),
            quadrantDiagram34T5L4WZBinding110 =
              quadrantDiagram34T5L4WZBinding106
                .append("g")
                .attr("class", "quadrants"),
            quadrantDiagram34T5L4WZBinding111 =
              quadrantDiagram34T5L4WZBinding106
                .append("g")
                .attr("class", "border"),
            quadrantDiagram34T5L4WZBinding112 =
              quadrantDiagram34T5L4WZBinding106
                .append("g")
                .attr("class", "data-points"),
            quadrantDiagram34T5L4WZBinding113 =
              quadrantDiagram34T5L4WZBinding106
                .append("g")
                .attr("class", "labels"),
            quadrantDiagram34T5L4WZBinding114 =
              quadrantDiagram34T5L4WZBinding106
                .append("g")
                .attr("class", "title");
          quadrantDiagram34T5L4WZBinding109.title &&
            quadrantDiagram34T5L4WZBinding114
              .append("text")
              .attr("x", 0)
              .attr("y", 0)
              .attr("fill", quadrantDiagram34T5L4WZBinding109.title.fill)
              .attr(
                "font-size",
                quadrantDiagram34T5L4WZBinding109.title.fontSize,
              )
              .attr(
                "dominant-baseline",
                quadrantDiagram34T5L4WZHelper22(
                  quadrantDiagram34T5L4WZBinding109.title.horizontalPos,
                ),
              )
              .attr(
                "text-anchor",
                quadrantDiagram34T5L4WZHelper23(
                  quadrantDiagram34T5L4WZBinding109.title.verticalPos,
                ),
              )
              .attr(
                "transform",
                quadrantDiagram34T5L4WZHelper24(
                  quadrantDiagram34T5L4WZBinding109.title,
                ),
              )
              .text(quadrantDiagram34T5L4WZBinding109.title.text);
          quadrantDiagram34T5L4WZBinding109.borderLines &&
            quadrantDiagram34T5L4WZBinding111
              .selectAll("line")
              .data(quadrantDiagram34T5L4WZBinding109.borderLines)
              .enter()
              .append("line")
              .attr(
                "x1",
                (quadrantDiagram34T5L4WZInput107) =>
                  quadrantDiagram34T5L4WZInput107.x1,
              )
              .attr(
                "y1",
                (quadrantDiagram34T5L4WZInput108) =>
                  quadrantDiagram34T5L4WZInput108.y1,
              )
              .attr(
                "x2",
                (quadrantDiagram34T5L4WZInput109) =>
                  quadrantDiagram34T5L4WZInput109.x2,
              )
              .attr(
                "y2",
                (quadrantDiagram34T5L4WZInput110) =>
                  quadrantDiagram34T5L4WZInput110.y2,
              )
              .style(
                "stroke",
                (quadrantDiagram34T5L4WZInput92) =>
                  quadrantDiagram34T5L4WZInput92.strokeFill,
              )
              .style(
                "stroke-width",
                (quadrantDiagram34T5L4WZInput89) =>
                  quadrantDiagram34T5L4WZInput89.strokeWidth,
              );
          let quadrantDiagram34T5L4WZBinding115 =
            quadrantDiagram34T5L4WZBinding110
              .selectAll("g.quadrant")
              .data(quadrantDiagram34T5L4WZBinding109.quadrants)
              .enter()
              .append("g")
              .attr("class", "quadrant");
          quadrantDiagram34T5L4WZBinding115
            .append("rect")
            .attr(
              "x",
              (quadrantDiagram34T5L4WZInput112) =>
                quadrantDiagram34T5L4WZInput112.x,
            )
            .attr(
              "y",
              (quadrantDiagram34T5L4WZInput113) =>
                quadrantDiagram34T5L4WZInput113.y,
            )
            .attr(
              "width",
              (quadrantDiagram34T5L4WZInput102) =>
                quadrantDiagram34T5L4WZInput102.width,
            )
            .attr(
              "height",
              (quadrantDiagram34T5L4WZInput100) =>
                quadrantDiagram34T5L4WZInput100.height,
            )
            .attr(
              "fill",
              (quadrantDiagram34T5L4WZInput103) =>
                quadrantDiagram34T5L4WZInput103.fill,
            );
          quadrantDiagram34T5L4WZBinding115
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr(
              "fill",
              (quadrantDiagram34T5L4WZInput93) =>
                quadrantDiagram34T5L4WZInput93.text.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagram34T5L4WZInput87) =>
                quadrantDiagram34T5L4WZInput87.text.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagram34T5L4WZInput81) =>
              quadrantDiagram34T5L4WZHelper22(
                quadrantDiagram34T5L4WZInput81.text.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagram34T5L4WZInput83) =>
              quadrantDiagram34T5L4WZHelper23(
                quadrantDiagram34T5L4WZInput83.text.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagram34T5L4WZInput98) =>
              quadrantDiagram34T5L4WZHelper24(
                quadrantDiagram34T5L4WZInput98.text,
              ),
            )
            .text(
              (quadrantDiagram34T5L4WZInput94) =>
                quadrantDiagram34T5L4WZInput94.text.text,
            );
          quadrantDiagram34T5L4WZBinding113
            .selectAll("g.label")
            .data(quadrantDiagram34T5L4WZBinding109.axisLabels)
            .enter()
            .append("g")
            .attr("class", "label")
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text(
              (quadrantDiagram34T5L4WZInput104) =>
                quadrantDiagram34T5L4WZInput104.text,
            )
            .attr(
              "fill",
              (quadrantDiagram34T5L4WZInput105) =>
                quadrantDiagram34T5L4WZInput105.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagram34T5L4WZInput97) =>
                quadrantDiagram34T5L4WZInput97.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagram34T5L4WZInput85) =>
              quadrantDiagram34T5L4WZHelper22(
                quadrantDiagram34T5L4WZInput85.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagram34T5L4WZInput86) =>
              quadrantDiagram34T5L4WZHelper23(
                quadrantDiagram34T5L4WZInput86.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagram34T5L4WZInput111) =>
              quadrantDiagram34T5L4WZHelper24(quadrantDiagram34T5L4WZInput111),
            );
          let quadrantDiagram34T5L4WZBinding116 =
            quadrantDiagram34T5L4WZBinding112
              .selectAll("g.data-point")
              .data(quadrantDiagram34T5L4WZBinding109.points)
              .enter()
              .append("g")
              .attr("class", "data-point");
          quadrantDiagram34T5L4WZBinding116
            .append("circle")
            .attr(
              "cx",
              (quadrantDiagram34T5L4WZInput114) =>
                quadrantDiagram34T5L4WZInput114.x,
            )
            .attr(
              "cy",
              (quadrantDiagram34T5L4WZInput115) =>
                quadrantDiagram34T5L4WZInput115.y,
            )
            .attr(
              "r",
              (quadrantDiagram34T5L4WZInput101) =>
                quadrantDiagram34T5L4WZInput101.radius,
            )
            .attr(
              "fill",
              (quadrantDiagram34T5L4WZInput106) =>
                quadrantDiagram34T5L4WZInput106.fill,
            )
            .attr(
              "stroke",
              (quadrantDiagram34T5L4WZInput90) =>
                quadrantDiagram34T5L4WZInput90.strokeColor,
            )
            .attr(
              "stroke-width",
              (quadrantDiagram34T5L4WZInput91) =>
                quadrantDiagram34T5L4WZInput91.strokeWidth,
            );
          quadrantDiagram34T5L4WZBinding116
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text(
              (quadrantDiagram34T5L4WZInput95) =>
                quadrantDiagram34T5L4WZInput95.text.text,
            )
            .attr(
              "fill",
              (quadrantDiagram34T5L4WZInput96) =>
                quadrantDiagram34T5L4WZInput96.text.fill,
            )
            .attr(
              "font-size",
              (quadrantDiagram34T5L4WZInput88) =>
                quadrantDiagram34T5L4WZInput88.text.fontSize,
            )
            .attr("dominant-baseline", (quadrantDiagram34T5L4WZInput82) =>
              quadrantDiagram34T5L4WZHelper22(
                quadrantDiagram34T5L4WZInput82.text.horizontalPos,
              ),
            )
            .attr("text-anchor", (quadrantDiagram34T5L4WZInput84) =>
              quadrantDiagram34T5L4WZHelper23(
                quadrantDiagram34T5L4WZInput84.text.verticalPos,
              ),
            )
            .attr("transform", (quadrantDiagram34T5L4WZInput99) =>
              quadrantDiagram34T5L4WZHelper24(
                quadrantDiagram34T5L4WZInput99.text,
              ),
            );
        },
        "draw",
      ),
    },
    styles: defineFunctionName(() => "", "styles"),
  };
})();
export { QuadrantDiagram34T5L4WZ as diagram };
