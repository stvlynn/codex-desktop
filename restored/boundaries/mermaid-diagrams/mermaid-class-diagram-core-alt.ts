// Restored from ref/webview/assets/chunk-4TB4RGXK-9W7hGdsO.js
// Mermaid class diagram core (alt: parser + db + renderer + styles). Unblocks classDiagram alt wrappers.
// Stage 3 candidate: IMPORT_MAP-ready local deps; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
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
  V as _chunkICPOFSXXV,
  A,
  b,
  C,
  $,
  G,
  H,
  M,
  Q,
  R,
  s,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWS,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { n, t } from "../../diagrams/get-icon-styles";
import { l, t as chunkYZCP3GAMT } from "../../diagrams/svg-drawing-helpers-alt";
import {
  n as chunk55IACEB6N,
  t as chunk55IACEB6T,
} from "../../diagrams/get-diagram-element-alt";
import {
  n as chunkEDXVE4YYN,
  t as chunkEDXVE4YYT,
} from "../../diagrams/setup-viewport-for-svg-alt";
import {
  chunk336JU56OI,
  chunk336JU56ON,
  chunk336JU56OT,
} from "../../diagrams/mermaid-layout-loaders-alt";
var chunk4TB4RGXKBinding1,
  chunk4TB4RGXKN,
  chunk4TB4RGXKBinding2,
  chunk4TB4RGXKBinding3,
  chunk4TB4RGXKBinding4,
  chunk4TB4RGXKBinding5,
  chunk4TB4RGXKBinding6,
  chunk4TB4RGXKT,
  chunk4TB4RGXKA,
  chunk4TB4RGXKR;
export const chunk4TB4RGXKI = esmInit(() => {
  n();
  l();
  chunk55IACEB6N();
  chunkEDXVE4YYT();
  chunk336JU56ON();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  Q();
  chunk4TB4RGXKBinding1 = (function () {
    var chunk4TB4RGXKBinding7 = defineFunctionName(function (
        chunk4TB4RGXKInput75,
        chunk4TB4RGXKInput76,
        chunk4TB4RGXKInput77,
        chunk4TB4RGXKInput78,
      ) {
        for (
          chunk4TB4RGXKInput77 ||= {},
            chunk4TB4RGXKInput78 = chunk4TB4RGXKInput75.length;
          chunk4TB4RGXKInput78--;
          chunk4TB4RGXKInput77[chunk4TB4RGXKInput75[chunk4TB4RGXKInput78]] =
            chunk4TB4RGXKInput76
        );
        return chunk4TB4RGXKInput77;
      }, "o"),
      chunk4TB4RGXKBinding8 = [1, 18],
      chunk4TB4RGXKBinding9 = [1, 19],
      chunk4TB4RGXKBinding10 = [1, 20],
      chunk4TB4RGXKBinding11 = [1, 41],
      chunk4TB4RGXKBinding12 = [1, 26],
      chunk4TB4RGXKBinding13 = [1, 42],
      chunk4TB4RGXKBinding14 = [1, 24],
      chunk4TB4RGXKBinding15 = [1, 25],
      chunk4TB4RGXKBinding16 = [1, 32],
      chunk4TB4RGXKBinding17 = [1, 33],
      chunk4TB4RGXKBinding18 = [1, 34],
      chunk4TB4RGXKBinding19 = [1, 45],
      chunk4TB4RGXKBinding20 = [1, 35],
      chunk4TB4RGXKBinding21 = [1, 36],
      chunk4TB4RGXKBinding22 = [1, 37],
      chunk4TB4RGXKBinding23 = [1, 38],
      chunk4TB4RGXKBinding24 = [1, 27],
      chunk4TB4RGXKBinding25 = [1, 28],
      chunk4TB4RGXKBinding26 = [1, 29],
      chunk4TB4RGXKBinding27 = [1, 30],
      chunk4TB4RGXKBinding28 = [1, 31],
      chunk4TB4RGXKBinding29 = [1, 44],
      chunk4TB4RGXKBinding30 = [1, 46],
      chunk4TB4RGXKBinding31 = [1, 43],
      chunk4TB4RGXKBinding32 = [1, 47],
      chunk4TB4RGXKBinding33 = [1, 9],
      chunk4TB4RGXKBinding34 = [1, 8, 9],
      chunk4TB4RGXKBinding35 = [1, 58],
      chunk4TB4RGXKBinding36 = [1, 59],
      chunk4TB4RGXKBinding37 = [1, 60],
      chunk4TB4RGXKBinding38 = [1, 61],
      chunk4TB4RGXKBinding39 = [1, 62],
      chunk4TB4RGXKBinding40 = [1, 63],
      _chunk4TB4RGXKN = [1, 64],
      chunk4TB4RGXKBinding41 = [1, 8, 9, 41],
      chunk4TB4RGXKBinding42 = [1, 77],
      chunk4TB4RGXKBinding43 = [
        1, 8, 9, 12, 13, 22, 39, 41, 44, 46, 68, 69, 70, 71, 72, 73, 74, 79, 81,
      ],
      chunk4TB4RGXKBinding44 = [
        1, 8, 9, 12, 13, 18, 20, 22, 39, 41, 44, 46, 47, 60, 68, 69, 70, 71, 72,
        73, 74, 79, 81, 86, 100, 102, 103,
      ],
      chunk4TB4RGXKBinding45 = [13, 60, 86, 100, 102, 103],
      _chunk4TB4RGXKT = [13, 60, 73, 74, 86, 100, 102, 103],
      _chunk4TB4RGXKA = [13, 60, 68, 69, 70, 71, 72, 86, 100, 102, 103],
      _chunk4TB4RGXKR = [1, 102],
      _chunk4TB4RGXKI = [1, 120],
      chunk4TB4RGXKBinding46 = [1, 116],
      chunk4TB4RGXKBinding47 = [1, 112],
      chunk4TB4RGXKBinding48 = [1, 118],
      chunk4TB4RGXKBinding49 = [1, 113],
      chunk4TB4RGXKBinding50 = [1, 114],
      chunk4TB4RGXKBinding51 = [1, 115],
      chunk4TB4RGXKBinding52 = [1, 117],
      chunk4TB4RGXKBinding53 = [1, 119],
      chunk4TB4RGXKBinding54 = [22, 50, 60, 61, 82, 86, 87, 88, 89, 90],
      chunk4TB4RGXKBinding55 = [1, 8, 9, 39, 41, 44, 46],
      chunk4TB4RGXKBinding56 = [1, 8, 9, 22],
      chunk4TB4RGXKBinding57 = [1, 150],
      chunk4TB4RGXKBinding58 = [1, 8, 9, 61],
      $ = [1, 8, 9, 22, 50, 60, 61, 82, 86, 87, 88, 89, 90],
      chunk4TB4RGXKBinding59 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          mermaidDoc: 4,
          statements: 5,
          graphConfig: 6,
          CLASS_DIAGRAM: 7,
          NEWLINE: 8,
          EOF: 9,
          statement: 10,
          classLabel: 11,
          SQS: 12,
          STR: 13,
          SQE: 14,
          namespaceName: 15,
          alphaNumToken: 16,
          classLiteralName: 17,
          DOT: 18,
          className: 19,
          GENERICTYPE: 20,
          relationStatement: 21,
          LABEL: 22,
          namespaceStatement: 23,
          classStatement: 24,
          memberStatement: 25,
          annotationStatement: 26,
          clickStatement: 27,
          styleStatement: 28,
          cssClassStatement: 29,
          noteStatement: 30,
          classDefStatement: 31,
          direction: 32,
          acc_title: 33,
          acc_title_value: 34,
          acc_descr: 35,
          acc_descr_value: 36,
          acc_descr_multiline_value: 37,
          namespaceIdentifier: 38,
          STRUCT_START: 39,
          classStatements: 40,
          STRUCT_STOP: 41,
          NAMESPACE: 42,
          classIdentifier: 43,
          STYLE_SEPARATOR: 44,
          members: 45,
          ANNOTATION_START: 46,
          ANNOTATION_END: 47,
          CLASS: 48,
          emptyBody: 49,
          SPACE: 50,
          MEMBER: 51,
          SEPARATOR: 52,
          relation: 53,
          NOTE_FOR: 54,
          noteText: 55,
          NOTE: 56,
          CLASSDEF: 57,
          classList: 58,
          stylesOpt: 59,
          ALPHA: 60,
          COMMA: 61,
          direction_tb: 62,
          direction_bt: 63,
          direction_rl: 64,
          direction_lr: 65,
          relationType: 66,
          lineType: 67,
          AGGREGATION: 68,
          EXTENSION: 69,
          COMPOSITION: 70,
          DEPENDENCY: 71,
          LOLLIPOP: 72,
          LINE: 73,
          DOTTED_LINE: 74,
          CALLBACK: 75,
          LINK: 76,
          LINK_TARGET: 77,
          CLICK: 78,
          CALLBACK_NAME: 79,
          CALLBACK_ARGS: 80,
          HREF: 81,
          STYLE: 82,
          CSSCLASS: 83,
          style: 84,
          styleComponent: 85,
          NUM: 86,
          COLON: 87,
          UNIT: 88,
          BRKT: 89,
          PCT: 90,
          commentToken: 91,
          textToken: 92,
          graphCodeTokens: 93,
          textNoTagsToken: 94,
          TAGSTART: 95,
          TAGEND: 96,
          "==": 97,
          "--": 98,
          DEFAULT: 99,
          MINUS: 100,
          keywords: 101,
          UNICODE_TEXT: 102,
          BQUOTE_STR: 103,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          7: "CLASS_DIAGRAM",
          8: "NEWLINE",
          9: "EOF",
          12: "SQS",
          13: "STR",
          14: "SQE",
          18: "DOT",
          20: "GENERICTYPE",
          22: "LABEL",
          33: "acc_title",
          34: "acc_title_value",
          35: "acc_descr",
          36: "acc_descr_value",
          37: "acc_descr_multiline_value",
          39: "STRUCT_START",
          41: "STRUCT_STOP",
          42: "NAMESPACE",
          44: "STYLE_SEPARATOR",
          46: "ANNOTATION_START",
          47: "ANNOTATION_END",
          48: "CLASS",
          50: "SPACE",
          51: "MEMBER",
          52: "SEPARATOR",
          54: "NOTE_FOR",
          56: "NOTE",
          57: "CLASSDEF",
          60: "ALPHA",
          61: "COMMA",
          62: "direction_tb",
          63: "direction_bt",
          64: "direction_rl",
          65: "direction_lr",
          68: "AGGREGATION",
          69: "EXTENSION",
          70: "COMPOSITION",
          71: "DEPENDENCY",
          72: "LOLLIPOP",
          73: "LINE",
          74: "DOTTED_LINE",
          75: "CALLBACK",
          76: "LINK",
          77: "LINK_TARGET",
          78: "CLICK",
          79: "CALLBACK_NAME",
          80: "CALLBACK_ARGS",
          81: "HREF",
          82: "STYLE",
          83: "CSSCLASS",
          86: "NUM",
          87: "COLON",
          88: "UNIT",
          89: "BRKT",
          90: "PCT",
          93: "graphCodeTokens",
          95: "TAGSTART",
          96: "TAGEND",
          97: "==",
          98: "--",
          99: "DEFAULT",
          100: "MINUS",
          101: "keywords",
          102: "UNICODE_TEXT",
          103: "BQUOTE_STR",
        },
        productions_: [
          0,
          [3, 1],
          [3, 1],
          [4, 1],
          [6, 4],
          [5, 1],
          [5, 2],
          [5, 3],
          [11, 3],
          [15, 1],
          [15, 1],
          [15, 3],
          [15, 2],
          [19, 1],
          [19, 3],
          [19, 1],
          [19, 2],
          [19, 2],
          [19, 2],
          [10, 1],
          [10, 2],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 2],
          [10, 2],
          [10, 1],
          [23, 4],
          [23, 5],
          [38, 2],
          [40, 1],
          [40, 2],
          [40, 3],
          [40, 1],
          [40, 2],
          [40, 3],
          [24, 1],
          [24, 3],
          [24, 4],
          [24, 3],
          [24, 6],
          [24, 4],
          [24, 7],
          [24, 6],
          [43, 2],
          [43, 3],
          [49, 0],
          [49, 2],
          [49, 2],
          [26, 4],
          [45, 1],
          [45, 2],
          [25, 1],
          [25, 2],
          [25, 1],
          [25, 1],
          [21, 3],
          [21, 4],
          [21, 4],
          [21, 5],
          [30, 3],
          [30, 2],
          [31, 3],
          [58, 1],
          [58, 3],
          [32, 1],
          [32, 1],
          [32, 1],
          [32, 1],
          [53, 3],
          [53, 2],
          [53, 2],
          [53, 1],
          [66, 1],
          [66, 1],
          [66, 1],
          [66, 1],
          [66, 1],
          [67, 1],
          [67, 1],
          [27, 3],
          [27, 4],
          [27, 3],
          [27, 4],
          [27, 4],
          [27, 5],
          [27, 3],
          [27, 4],
          [27, 4],
          [27, 5],
          [27, 4],
          [27, 5],
          [27, 5],
          [27, 6],
          [28, 3],
          [29, 3],
          [59, 1],
          [59, 3],
          [84, 1],
          [84, 2],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [85, 1],
          [91, 1],
          [91, 1],
          [92, 1],
          [92, 1],
          [92, 1],
          [92, 1],
          [92, 1],
          [92, 1],
          [92, 1],
          [94, 1],
          [94, 1],
          [94, 1],
          [94, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [16, 1],
          [17, 1],
          [55, 1],
        ],
        performAction: defineFunctionName(function (
          chunk4TB4RGXKInput1,
          chunk4TB4RGXKInput2,
          chunk4TB4RGXKInput3,
          chunk4TB4RGXKInput4,
          chunk4TB4RGXKInput5,
          chunk4TB4RGXKInput6,
          chunk4TB4RGXKInput7,
        ) {
          var chunk4TB4RGXKBinding60 = chunk4TB4RGXKInput6.length - 1;
          switch (chunk4TB4RGXKInput5) {
            case 8:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1];
              break;
            case 9:
            case 10:
            case 13:
            case 15:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 11:
            case 14:
              this.$ =
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2] +
                "." +
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 12:
            case 16:
              this.$ =
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1] +
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 17:
            case 18:
              this.$ =
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1] +
                "~" +
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60] +
                "~";
              break;
            case 19:
              chunk4TB4RGXKInput4.addRelation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 20:
              chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1].title =
                chunk4TB4RGXKInput4.cleanupLabel(
                  chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                );
              chunk4TB4RGXKInput4.addRelation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 31:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60].trim();
              chunk4TB4RGXKInput4.setAccTitle(this.$);
              break;
            case 32:
            case 33:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60].trim();
              chunk4TB4RGXKInput4.setAccDescription(this.$);
              break;
            case 34:
              chunk4TB4RGXKInput4.addClassesToNamespace(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1][0],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1][1],
              );
              break;
            case 35:
              chunk4TB4RGXKInput4.addClassesToNamespace(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1][0],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1][1],
              );
              break;
            case 36:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              chunk4TB4RGXKInput4.addNamespace(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 37:
              this.$ = [[chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60]], []];
              break;
            case 38:
              this.$ = [[chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1]], []];
              break;
            case 39:
              chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60][0].unshift(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
              );
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 40:
              this.$ = [[], [chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60]]];
              break;
            case 41:
              this.$ = [[], [chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1]]];
              break;
            case 42:
              chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60][1].unshift(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
              );
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 44:
              chunk4TB4RGXKInput4.setCssClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 45:
              chunk4TB4RGXKInput4.addMembers(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 47:
              chunk4TB4RGXKInput4.setCssClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 5],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
              );
              chunk4TB4RGXKInput4.addMembers(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 5],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 48:
              chunk4TB4RGXKInput4.addAnnotation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 49:
              chunk4TB4RGXKInput4.addAnnotation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 6],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4],
              );
              chunk4TB4RGXKInput4.addMembers(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 6],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 50:
              chunk4TB4RGXKInput4.addAnnotation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 5],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
              );
              break;
            case 51:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              chunk4TB4RGXKInput4.addClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 52:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1];
              chunk4TB4RGXKInput4.addClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              chunk4TB4RGXKInput4.setClassLabel(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 56:
              chunk4TB4RGXKInput4.addAnnotation(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
              );
              break;
            case 57:
            case 70:
              this.$ = [chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60]];
              break;
            case 58:
              chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60].push(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
            case 59:
              break;
            case 60:
              chunk4TB4RGXKInput4.addMember(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput4.cleanupLabel(
                  chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                ),
              );
              break;
            case 61:
              break;
            case 62:
              break;
            case 63:
              this.$ = {
                id1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                id2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                relation: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                relationTitle1: "none",
                relationTitle2: "none",
              };
              break;
            case 64:
              this.$ = {
                id1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                id2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                relation: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                relationTitle1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                relationTitle2: "none",
              };
              break;
            case 65:
              this.$ = {
                id1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                id2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                relation: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                relationTitle1: "none",
                relationTitle2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              };
              break;
            case 66:
              this.$ = {
                id1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4],
                id2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                relation: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                relationTitle1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                relationTitle2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              };
              break;
            case 67:
              this.$ = chunk4TB4RGXKInput4.addNote(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 68:
              this.$ = chunk4TB4RGXKInput4.addNote(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 69:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2];
              chunk4TB4RGXKInput4.defineClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 71:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2].concat([
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              ]);
              break;
            case 72:
              chunk4TB4RGXKInput4.setDirection("TB");
              break;
            case 73:
              chunk4TB4RGXKInput4.setDirection("BT");
              break;
            case 74:
              chunk4TB4RGXKInput4.setDirection("RL");
              break;
            case 75:
              chunk4TB4RGXKInput4.setDirection("LR");
              break;
            case 76:
              this.$ = {
                type1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                type2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                lineType: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              };
              break;
            case 77:
              this.$ = {
                type1: "none",
                type2: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
                lineType: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              };
              break;
            case 78:
              this.$ = {
                type1: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                type2: "none",
                lineType: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              };
              break;
            case 79:
              this.$ = {
                type1: "none",
                type2: "none",
                lineType: chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              };
              break;
            case 80:
              this.$ = chunk4TB4RGXKInput4.relationType.AGGREGATION;
              break;
            case 81:
              this.$ = chunk4TB4RGXKInput4.relationType.EXTENSION;
              break;
            case 82:
              this.$ = chunk4TB4RGXKInput4.relationType.COMPOSITION;
              break;
            case 83:
              this.$ = chunk4TB4RGXKInput4.relationType.DEPENDENCY;
              break;
            case 84:
              this.$ = chunk4TB4RGXKInput4.relationType.LOLLIPOP;
              break;
            case 85:
              this.$ = chunk4TB4RGXKInput4.lineType.LINE;
              break;
            case 86:
              this.$ = chunk4TB4RGXKInput4.lineType.DOTTED_LINE;
              break;
            case 87:
            case 93:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2];
              chunk4TB4RGXKInput4.setClickEvent(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 88:
            case 94:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3];
              chunk4TB4RGXKInput4.setClickEvent(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 89:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 90:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 91:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 92:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 95:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3];
              chunk4TB4RGXKInput4.setClickEvent(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 96:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4];
              chunk4TB4RGXKInput4.setClickEvent(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 97:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 98:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 99:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 3],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 100:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 5];
              chunk4TB4RGXKInput4.setLink(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              chunk4TB4RGXKInput4.setTooltip(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 4],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
              );
              break;
            case 101:
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2];
              chunk4TB4RGXKInput4.setCssStyle(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 102:
              chunk4TB4RGXKInput4.setCssClass(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1],
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              break;
            case 103:
              this.$ = [chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60]];
              break;
            case 104:
              chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2].push(
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60],
              );
              this.$ = chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 2];
              break;
            case 106:
              this.$ =
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60 - 1] +
                chunk4TB4RGXKInput6[chunk4TB4RGXKBinding60];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            5: 3,
            6: 4,
            7: [1, 6],
            10: 5,
            16: 39,
            17: 40,
            19: 21,
            21: 7,
            23: 8,
            24: 9,
            25: 10,
            26: 11,
            27: 12,
            28: 13,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: chunk4TB4RGXKBinding8,
            35: chunk4TB4RGXKBinding9,
            37: chunk4TB4RGXKBinding10,
            38: 22,
            42: chunk4TB4RGXKBinding11,
            43: 23,
            46: chunk4TB4RGXKBinding12,
            48: chunk4TB4RGXKBinding13,
            51: chunk4TB4RGXKBinding14,
            52: chunk4TB4RGXKBinding15,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
            57: chunk4TB4RGXKBinding18,
            60: chunk4TB4RGXKBinding19,
            62: chunk4TB4RGXKBinding20,
            63: chunk4TB4RGXKBinding21,
            64: chunk4TB4RGXKBinding22,
            65: chunk4TB4RGXKBinding23,
            75: chunk4TB4RGXKBinding24,
            76: chunk4TB4RGXKBinding25,
            78: chunk4TB4RGXKBinding26,
            82: chunk4TB4RGXKBinding27,
            83: chunk4TB4RGXKBinding28,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            1: [3],
          },
          {
            1: [2, 1],
          },
          {
            1: [2, 2],
          },
          {
            1: [2, 3],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding33, [2, 5], {
            8: [1, 48],
          }),
          {
            8: [1, 49],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 19], {
            22: [1, 50],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 21]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 22]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 23]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 24]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 25]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 26]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 27]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 28]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 29]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 30]),
          {
            34: [1, 51],
          },
          {
            36: [1, 52],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 33]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 59], {
            53: 53,
            66: 56,
            67: 57,
            13: [1, 54],
            22: [1, 55],
            68: chunk4TB4RGXKBinding35,
            69: chunk4TB4RGXKBinding36,
            70: chunk4TB4RGXKBinding37,
            71: chunk4TB4RGXKBinding38,
            72: chunk4TB4RGXKBinding39,
            73: chunk4TB4RGXKBinding40,
            74: _chunk4TB4RGXKN,
          }),
          {
            39: [1, 65],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 43], {
            39: [1, 67],
            44: [1, 66],
            46: [1, 68],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 61]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 62]),
          {
            16: 69,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
          },
          {
            16: 39,
            17: 40,
            19: 70,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 71,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 72,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            60: [1, 73],
          },
          {
            13: [1, 74],
          },
          {
            16: 39,
            17: 40,
            19: 75,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            13: chunk4TB4RGXKBinding42,
            55: 76,
          },
          {
            58: 78,
            60: [1, 79],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 72]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 73]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 74]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 75]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 13], {
            16: 39,
            17: 40,
            19: 81,
            18: [1, 80],
            20: [1, 82],
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 15], {
            20: [1, 83],
          }),
          {
            15: 84,
            16: 85,
            17: 86,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 87,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding44, [2, 129]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding44, [2, 130]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding44, [2, 131]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding44, [2, 132]),
          chunk4TB4RGXKBinding7(
            [
              1, 8, 9, 12, 13, 20, 22, 39, 41, 44, 46, 68, 69, 70, 71, 72, 73,
              74, 79, 81,
            ],
            [2, 133],
          ),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding33, [2, 6], {
            10: 5,
            21: 7,
            23: 8,
            24: 9,
            25: 10,
            26: 11,
            27: 12,
            28: 13,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            19: 21,
            38: 22,
            43: 23,
            16: 39,
            17: 40,
            5: 88,
            33: chunk4TB4RGXKBinding8,
            35: chunk4TB4RGXKBinding9,
            37: chunk4TB4RGXKBinding10,
            42: chunk4TB4RGXKBinding11,
            46: chunk4TB4RGXKBinding12,
            48: chunk4TB4RGXKBinding13,
            51: chunk4TB4RGXKBinding14,
            52: chunk4TB4RGXKBinding15,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
            57: chunk4TB4RGXKBinding18,
            60: chunk4TB4RGXKBinding19,
            62: chunk4TB4RGXKBinding20,
            63: chunk4TB4RGXKBinding21,
            64: chunk4TB4RGXKBinding22,
            65: chunk4TB4RGXKBinding23,
            75: chunk4TB4RGXKBinding24,
            76: chunk4TB4RGXKBinding25,
            78: chunk4TB4RGXKBinding26,
            82: chunk4TB4RGXKBinding27,
            83: chunk4TB4RGXKBinding28,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          }),
          {
            5: 89,
            10: 5,
            16: 39,
            17: 40,
            19: 21,
            21: 7,
            23: 8,
            24: 9,
            25: 10,
            26: 11,
            27: 12,
            28: 13,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: chunk4TB4RGXKBinding8,
            35: chunk4TB4RGXKBinding9,
            37: chunk4TB4RGXKBinding10,
            38: 22,
            42: chunk4TB4RGXKBinding11,
            43: 23,
            46: chunk4TB4RGXKBinding12,
            48: chunk4TB4RGXKBinding13,
            51: chunk4TB4RGXKBinding14,
            52: chunk4TB4RGXKBinding15,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
            57: chunk4TB4RGXKBinding18,
            60: chunk4TB4RGXKBinding19,
            62: chunk4TB4RGXKBinding20,
            63: chunk4TB4RGXKBinding21,
            64: chunk4TB4RGXKBinding22,
            65: chunk4TB4RGXKBinding23,
            75: chunk4TB4RGXKBinding24,
            76: chunk4TB4RGXKBinding25,
            78: chunk4TB4RGXKBinding26,
            82: chunk4TB4RGXKBinding27,
            83: chunk4TB4RGXKBinding28,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 20]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 31]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 32]),
          {
            13: [1, 91],
            16: 39,
            17: 40,
            19: 90,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            53: 92,
            66: 56,
            67: 57,
            68: chunk4TB4RGXKBinding35,
            69: chunk4TB4RGXKBinding36,
            70: chunk4TB4RGXKBinding37,
            71: chunk4TB4RGXKBinding38,
            72: chunk4TB4RGXKBinding39,
            73: chunk4TB4RGXKBinding40,
            74: _chunk4TB4RGXKN,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 60]),
          {
            67: 93,
            73: chunk4TB4RGXKBinding40,
            74: _chunk4TB4RGXKN,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding45, [2, 79], {
            66: 94,
            68: chunk4TB4RGXKBinding35,
            69: chunk4TB4RGXKBinding36,
            70: chunk4TB4RGXKBinding37,
            71: chunk4TB4RGXKBinding38,
            72: chunk4TB4RGXKBinding39,
          }),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKT, [2, 80]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKT, [2, 81]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKT, [2, 82]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKT, [2, 83]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKT, [2, 84]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKA, [2, 85]),
          chunk4TB4RGXKBinding7(_chunk4TB4RGXKA, [2, 86]),
          {
            8: [1, 96],
            24: 97,
            30: 98,
            40: 95,
            43: 23,
            48: chunk4TB4RGXKBinding13,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
          },
          {
            16: 99,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
          },
          {
            41: [1, 101],
            45: 100,
            51: _chunk4TB4RGXKR,
          },
          {
            16: 103,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
          },
          {
            47: [1, 104],
          },
          {
            13: [1, 105],
          },
          {
            13: [1, 106],
          },
          {
            79: [1, 107],
            81: [1, 108],
          },
          {
            22: _chunk4TB4RGXKI,
            50: chunk4TB4RGXKBinding46,
            59: 109,
            60: chunk4TB4RGXKBinding47,
            82: chunk4TB4RGXKBinding48,
            84: 110,
            85: 111,
            86: chunk4TB4RGXKBinding49,
            87: chunk4TB4RGXKBinding50,
            88: chunk4TB4RGXKBinding51,
            89: chunk4TB4RGXKBinding52,
            90: chunk4TB4RGXKBinding53,
          },
          {
            60: [1, 121],
          },
          {
            13: chunk4TB4RGXKBinding42,
            55: 122,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 68]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 134]),
          {
            22: _chunk4TB4RGXKI,
            50: chunk4TB4RGXKBinding46,
            59: 123,
            60: chunk4TB4RGXKBinding47,
            61: [1, 124],
            82: chunk4TB4RGXKBinding48,
            84: 110,
            85: 111,
            86: chunk4TB4RGXKBinding49,
            87: chunk4TB4RGXKBinding50,
            88: chunk4TB4RGXKBinding51,
            89: chunk4TB4RGXKBinding52,
            90: chunk4TB4RGXKBinding53,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding54, [2, 70]),
          {
            16: 39,
            17: 40,
            19: 125,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 16]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 17]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 18]),
          {
            39: [2, 36],
          },
          {
            15: 127,
            16: 85,
            17: 86,
            18: [1, 126],
            39: [2, 9],
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            39: [2, 10],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding55, [2, 51], {
            11: 128,
            12: [1, 129],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding33, [2, 7]),
          {
            9: [1, 130],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding56, [2, 63]),
          {
            16: 39,
            17: 40,
            19: 131,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            13: [1, 133],
            16: 39,
            17: 40,
            19: 132,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding45, [2, 78], {
            66: 134,
            68: chunk4TB4RGXKBinding35,
            69: chunk4TB4RGXKBinding36,
            70: chunk4TB4RGXKBinding37,
            71: chunk4TB4RGXKBinding38,
            72: chunk4TB4RGXKBinding39,
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding45, [2, 77]),
          {
            41: [1, 135],
          },
          {
            24: 97,
            30: 98,
            40: 136,
            43: 23,
            48: chunk4TB4RGXKBinding13,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
          },
          {
            8: [1, 137],
            41: [2, 37],
          },
          {
            8: [1, 138],
            41: [2, 40],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 44], {
            39: [1, 139],
          }),
          {
            41: [1, 140],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 46]),
          {
            41: [2, 57],
            45: 141,
            51: _chunk4TB4RGXKR,
          },
          {
            47: [1, 142],
          },
          {
            16: 39,
            17: 40,
            19: 143,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 87], {
            13: [1, 144],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 89], {
            13: [1, 146],
            77: [1, 145],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 93], {
            13: [1, 147],
            80: [1, 148],
          }),
          {
            13: [1, 149],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 101], {
            61: chunk4TB4RGXKBinding57,
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding58, [2, 103], {
            85: 151,
            22: _chunk4TB4RGXKI,
            50: chunk4TB4RGXKBinding46,
            60: chunk4TB4RGXKBinding47,
            82: chunk4TB4RGXKBinding48,
            86: chunk4TB4RGXKBinding49,
            87: chunk4TB4RGXKBinding50,
            88: chunk4TB4RGXKBinding51,
            89: chunk4TB4RGXKBinding52,
            90: chunk4TB4RGXKBinding53,
          }),
          chunk4TB4RGXKBinding7($, [2, 105]),
          chunk4TB4RGXKBinding7($, [2, 107]),
          chunk4TB4RGXKBinding7($, [2, 108]),
          chunk4TB4RGXKBinding7($, [2, 109]),
          chunk4TB4RGXKBinding7($, [2, 110]),
          chunk4TB4RGXKBinding7($, [2, 111]),
          chunk4TB4RGXKBinding7($, [2, 112]),
          chunk4TB4RGXKBinding7($, [2, 113]),
          chunk4TB4RGXKBinding7($, [2, 114]),
          chunk4TB4RGXKBinding7($, [2, 115]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 102]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 67]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 69], {
            61: chunk4TB4RGXKBinding57,
          }),
          {
            60: [1, 152],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding43, [2, 14]),
          {
            15: 153,
            16: 85,
            17: 86,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          {
            39: [2, 12],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding55, [2, 52]),
          {
            13: [1, 154],
          },
          {
            1: [2, 4],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding56, [2, 65]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding56, [2, 64]),
          {
            16: 39,
            17: 40,
            19: 155,
            60: chunk4TB4RGXKBinding19,
            86: chunk4TB4RGXKBinding29,
            100: chunk4TB4RGXKBinding30,
            102: chunk4TB4RGXKBinding31,
            103: chunk4TB4RGXKBinding32,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding45, [2, 76]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 34]),
          {
            41: [1, 156],
          },
          {
            24: 97,
            30: 98,
            40: 157,
            41: [2, 38],
            43: 23,
            48: chunk4TB4RGXKBinding13,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
          },
          {
            24: 97,
            30: 98,
            40: 158,
            41: [2, 41],
            43: 23,
            48: chunk4TB4RGXKBinding13,
            54: chunk4TB4RGXKBinding16,
            56: chunk4TB4RGXKBinding17,
          },
          {
            45: 159,
            51: _chunk4TB4RGXKR,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 45]),
          {
            41: [2, 58],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 48], {
            39: [1, 160],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 56]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 88]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 90]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 91], {
            77: [1, 161],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 94]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 95], {
            13: [1, 162],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 97], {
            13: [1, 164],
            77: [1, 163],
          }),
          {
            22: _chunk4TB4RGXKI,
            50: chunk4TB4RGXKBinding46,
            60: chunk4TB4RGXKBinding47,
            82: chunk4TB4RGXKBinding48,
            84: 165,
            85: 111,
            86: chunk4TB4RGXKBinding49,
            87: chunk4TB4RGXKBinding50,
            88: chunk4TB4RGXKBinding51,
            89: chunk4TB4RGXKBinding52,
            90: chunk4TB4RGXKBinding53,
          },
          chunk4TB4RGXKBinding7($, [2, 106]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding54, [2, 71]),
          {
            39: [2, 11],
          },
          {
            14: [1, 166],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding56, [2, 66]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 35]),
          {
            41: [2, 39],
          },
          {
            41: [2, 42],
          },
          {
            41: [1, 167],
          },
          {
            41: [1, 169],
            45: 168,
            51: _chunk4TB4RGXKR,
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 92]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 96]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 98]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 99], {
            77: [1, 170],
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding58, [2, 104], {
            85: 151,
            22: _chunk4TB4RGXKI,
            50: chunk4TB4RGXKBinding46,
            60: chunk4TB4RGXKBinding47,
            82: chunk4TB4RGXKBinding48,
            86: chunk4TB4RGXKBinding49,
            87: chunk4TB4RGXKBinding50,
            88: chunk4TB4RGXKBinding51,
            89: chunk4TB4RGXKBinding52,
            90: chunk4TB4RGXKBinding53,
          }),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding55, [2, 8]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 47]),
          {
            41: [1, 171],
          },
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 50]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding34, [2, 100]),
          chunk4TB4RGXKBinding7(chunk4TB4RGXKBinding41, [2, 49]),
        ],
        defaultActions: {
          2: [2, 1],
          3: [2, 2],
          4: [2, 3],
          84: [2, 36],
          86: [2, 10],
          127: [2, 12],
          130: [2, 4],
          141: [2, 58],
          153: [2, 11],
          157: [2, 39],
          158: [2, 42],
        },
        parseError: defineFunctionName(function (
          chunk4TB4RGXKInput59,
          chunk4TB4RGXKInput60,
        ) {
          if (chunk4TB4RGXKInput60.recoverable)
            this.trace(chunk4TB4RGXKInput59);
          else {
            var chunk4TB4RGXKBinding171 = Error(chunk4TB4RGXKInput59);
            throw (
              (chunk4TB4RGXKBinding171.hash = chunk4TB4RGXKInput60),
              chunk4TB4RGXKBinding171
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (chunk4TB4RGXKInput12) {
          var chunk4TB4RGXKBinding61 = this,
            chunk4TB4RGXKBinding62 = [0],
            chunk4TB4RGXKBinding63 = [],
            chunk4TB4RGXKBinding64 = [null],
            chunk4TB4RGXKBinding65 = [],
            chunk4TB4RGXKBinding66 = this.table,
            chunk4TB4RGXKBinding67 = "",
            chunk4TB4RGXKBinding68 = 0,
            chunk4TB4RGXKBinding69 = 0,
            chunk4TB4RGXKBinding70 = 0,
            chunk4TB4RGXKBinding73 = chunk4TB4RGXKBinding65.slice.call(
              arguments,
              1,
            ),
            chunk4TB4RGXKBinding74 = Object.create(this.lexer),
            chunk4TB4RGXKBinding75 = {
              yy: {},
            };
          for (var chunk4TB4RGXKBinding76 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              chunk4TB4RGXKBinding76,
            ) &&
              (chunk4TB4RGXKBinding75.yy[chunk4TB4RGXKBinding76] =
                this.yy[chunk4TB4RGXKBinding76]);
          chunk4TB4RGXKBinding74.setInput(
            chunk4TB4RGXKInput12,
            chunk4TB4RGXKBinding75.yy,
          );
          chunk4TB4RGXKBinding75.yy.lexer = chunk4TB4RGXKBinding74;
          chunk4TB4RGXKBinding75.yy.parser = this;
          chunk4TB4RGXKBinding74.yylloc === undefined &&
            (chunk4TB4RGXKBinding74.yylloc = {});
          var chunk4TB4RGXKBinding77 = chunk4TB4RGXKBinding74.yylloc;
          chunk4TB4RGXKBinding65.push(chunk4TB4RGXKBinding77);
          var chunk4TB4RGXKBinding78 =
            chunk4TB4RGXKBinding74.options &&
            chunk4TB4RGXKBinding74.options.ranges;
          typeof chunk4TB4RGXKBinding75.yy.parseError == "function"
            ? (this.parseError = chunk4TB4RGXKBinding75.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function chunk4TB4RGXKHelper2(chunk4TB4RGXKInput80) {
            chunk4TB4RGXKBinding62.length -= 2 * chunk4TB4RGXKInput80;
            chunk4TB4RGXKBinding64.length -= chunk4TB4RGXKInput80;
            chunk4TB4RGXKBinding65.length -= chunk4TB4RGXKInput80;
          }
          defineFunctionName(chunk4TB4RGXKHelper2, "popStack");
          function chunk4TB4RGXKHelper3() {
            var chunk4TB4RGXKBinding151 =
              chunk4TB4RGXKBinding63.pop() || chunk4TB4RGXKBinding74.lex() || 1;
            return (
              typeof chunk4TB4RGXKBinding151 != "number" &&
                (chunk4TB4RGXKBinding151 instanceof Array &&
                  ((chunk4TB4RGXKBinding63 = chunk4TB4RGXKBinding151),
                  (chunk4TB4RGXKBinding151 = chunk4TB4RGXKBinding63.pop())),
                (chunk4TB4RGXKBinding151 =
                  chunk4TB4RGXKBinding61.symbols_[chunk4TB4RGXKBinding151] ||
                  chunk4TB4RGXKBinding151)),
              chunk4TB4RGXKBinding151
            );
          }
          defineFunctionName(chunk4TB4RGXKHelper3, "lex");
          for (
            var chunk4TB4RGXKBinding79,
              chunk4TB4RGXKBinding80,
              chunk4TB4RGXKBinding81,
              chunk4TB4RGXKBinding82,
              chunk4TB4RGXKBinding83,
              chunk4TB4RGXKBinding84 = {},
              chunk4TB4RGXKBinding85,
              chunk4TB4RGXKBinding86,
              chunk4TB4RGXKBinding87,
              chunk4TB4RGXKBinding88;
            ;
          ) {
            if (
              ((chunk4TB4RGXKBinding81 =
                chunk4TB4RGXKBinding62[chunk4TB4RGXKBinding62.length - 1]),
              this.defaultActions[chunk4TB4RGXKBinding81]
                ? (chunk4TB4RGXKBinding82 =
                    this.defaultActions[chunk4TB4RGXKBinding81])
                : ((chunk4TB4RGXKBinding79 ??= chunk4TB4RGXKHelper3()),
                  (chunk4TB4RGXKBinding82 =
                    chunk4TB4RGXKBinding66[chunk4TB4RGXKBinding81] &&
                    chunk4TB4RGXKBinding66[chunk4TB4RGXKBinding81][
                      chunk4TB4RGXKBinding79
                    ])),
              chunk4TB4RGXKBinding82 === undefined ||
                !chunk4TB4RGXKBinding82.length ||
                !chunk4TB4RGXKBinding82[0])
            ) {
              var chunk4TB4RGXKBinding89 = "";
              for (chunk4TB4RGXKBinding85 in ((chunk4TB4RGXKBinding88 = []),
              chunk4TB4RGXKBinding66[chunk4TB4RGXKBinding81]))
                this.terminals_[chunk4TB4RGXKBinding85] &&
                  chunk4TB4RGXKBinding85 > 2 &&
                  chunk4TB4RGXKBinding88.push(
                    "'" + this.terminals_[chunk4TB4RGXKBinding85] + "'",
                  );
              chunk4TB4RGXKBinding89 = chunk4TB4RGXKBinding74.showPosition
                ? "Parse error on line " +
                  (chunk4TB4RGXKBinding68 + 1) +
                  ":\n" +
                  chunk4TB4RGXKBinding74.showPosition() +
                  "\nExpecting " +
                  chunk4TB4RGXKBinding88.join(", ") +
                  ", got '" +
                  (this.terminals_[chunk4TB4RGXKBinding79] ||
                    chunk4TB4RGXKBinding79) +
                  "'"
                : "Parse error on line " +
                  (chunk4TB4RGXKBinding68 + 1) +
                  ": Unexpected " +
                  (chunk4TB4RGXKBinding79 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[chunk4TB4RGXKBinding79] ||
                        chunk4TB4RGXKBinding79) +
                      "'");
              this.parseError(chunk4TB4RGXKBinding89, {
                text: chunk4TB4RGXKBinding74.match,
                token:
                  this.terminals_[chunk4TB4RGXKBinding79] ||
                  chunk4TB4RGXKBinding79,
                line: chunk4TB4RGXKBinding74.yylineno,
                loc: chunk4TB4RGXKBinding77,
                expected: chunk4TB4RGXKBinding88,
              });
            }
            if (
              chunk4TB4RGXKBinding82[0] instanceof Array &&
              chunk4TB4RGXKBinding82.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  chunk4TB4RGXKBinding81 +
                  ", token: " +
                  chunk4TB4RGXKBinding79,
              );
            switch (chunk4TB4RGXKBinding82[0]) {
              case 1:
                chunk4TB4RGXKBinding62.push(chunk4TB4RGXKBinding79);
                chunk4TB4RGXKBinding64.push(chunk4TB4RGXKBinding74.yytext);
                chunk4TB4RGXKBinding65.push(chunk4TB4RGXKBinding74.yylloc);
                chunk4TB4RGXKBinding62.push(chunk4TB4RGXKBinding82[1]);
                chunk4TB4RGXKBinding79 = null;
                chunk4TB4RGXKBinding80
                  ? ((chunk4TB4RGXKBinding79 = chunk4TB4RGXKBinding80),
                    (chunk4TB4RGXKBinding80 = null))
                  : ((chunk4TB4RGXKBinding69 = chunk4TB4RGXKBinding74.yyleng),
                    (chunk4TB4RGXKBinding67 = chunk4TB4RGXKBinding74.yytext),
                    (chunk4TB4RGXKBinding68 = chunk4TB4RGXKBinding74.yylineno),
                    (chunk4TB4RGXKBinding77 = chunk4TB4RGXKBinding74.yylloc),
                    chunk4TB4RGXKBinding70 > 0 && chunk4TB4RGXKBinding70--);
                break;
              case 2:
                if (
                  ((chunk4TB4RGXKBinding86 =
                    this.productions_[chunk4TB4RGXKBinding82[1]][1]),
                  (chunk4TB4RGXKBinding84.$ =
                    chunk4TB4RGXKBinding64[
                      chunk4TB4RGXKBinding64.length - chunk4TB4RGXKBinding86
                    ]),
                  (chunk4TB4RGXKBinding84._$ = {
                    first_line:
                      chunk4TB4RGXKBinding65[
                        chunk4TB4RGXKBinding65.length -
                          (chunk4TB4RGXKBinding86 || 1)
                      ].first_line,
                    last_line:
                      chunk4TB4RGXKBinding65[chunk4TB4RGXKBinding65.length - 1]
                        .last_line,
                    first_column:
                      chunk4TB4RGXKBinding65[
                        chunk4TB4RGXKBinding65.length -
                          (chunk4TB4RGXKBinding86 || 1)
                      ].first_column,
                    last_column:
                      chunk4TB4RGXKBinding65[chunk4TB4RGXKBinding65.length - 1]
                        .last_column,
                  }),
                  chunk4TB4RGXKBinding78 &&
                    (chunk4TB4RGXKBinding84._$.range = [
                      chunk4TB4RGXKBinding65[
                        chunk4TB4RGXKBinding65.length -
                          (chunk4TB4RGXKBinding86 || 1)
                      ].range[0],
                      chunk4TB4RGXKBinding65[chunk4TB4RGXKBinding65.length - 1]
                        .range[1],
                    ]),
                  (chunk4TB4RGXKBinding83 = this.performAction.apply(
                    chunk4TB4RGXKBinding84,
                    [
                      chunk4TB4RGXKBinding67,
                      chunk4TB4RGXKBinding69,
                      chunk4TB4RGXKBinding68,
                      chunk4TB4RGXKBinding75.yy,
                      chunk4TB4RGXKBinding82[1],
                      chunk4TB4RGXKBinding64,
                      chunk4TB4RGXKBinding65,
                    ].concat(chunk4TB4RGXKBinding73),
                  )),
                  chunk4TB4RGXKBinding83 !== undefined)
                )
                  return chunk4TB4RGXKBinding83;
                chunk4TB4RGXKBinding86 &&
                  ((chunk4TB4RGXKBinding62 = chunk4TB4RGXKBinding62.slice(
                    0,
                    -1 * chunk4TB4RGXKBinding86 * 2,
                  )),
                  (chunk4TB4RGXKBinding64 = chunk4TB4RGXKBinding64.slice(
                    0,
                    -1 * chunk4TB4RGXKBinding86,
                  )),
                  (chunk4TB4RGXKBinding65 = chunk4TB4RGXKBinding65.slice(
                    0,
                    -1 * chunk4TB4RGXKBinding86,
                  )));
                chunk4TB4RGXKBinding62.push(
                  this.productions_[chunk4TB4RGXKBinding82[1]][0],
                );
                chunk4TB4RGXKBinding64.push(chunk4TB4RGXKBinding84.$);
                chunk4TB4RGXKBinding65.push(chunk4TB4RGXKBinding84._$);
                chunk4TB4RGXKBinding87 =
                  chunk4TB4RGXKBinding66[
                    chunk4TB4RGXKBinding62[chunk4TB4RGXKBinding62.length - 2]
                  ][chunk4TB4RGXKBinding62[chunk4TB4RGXKBinding62.length - 1]];
                chunk4TB4RGXKBinding62.push(chunk4TB4RGXKBinding87);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    chunk4TB4RGXKBinding59.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          chunk4TB4RGXKInput71,
          chunk4TB4RGXKInput72,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              chunk4TB4RGXKInput71,
              chunk4TB4RGXKInput72,
            );
          else throw Error(chunk4TB4RGXKInput71);
        }, "parseError"),
        setInput: defineFunctionName(function (
          chunk4TB4RGXKInput27,
          chunk4TB4RGXKInput28,
        ) {
          return (
            (this.yy = chunk4TB4RGXKInput28 || this.yy || {}),
            (this._input = chunk4TB4RGXKInput27),
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
          var chunk4TB4RGXKBinding131 = this._input[0];
          return (
            (this.yytext += chunk4TB4RGXKBinding131),
            this.yyleng++,
            this.offset++,
            (this.match += chunk4TB4RGXKBinding131),
            (this.matched += chunk4TB4RGXKBinding131),
            chunk4TB4RGXKBinding131.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            chunk4TB4RGXKBinding131
          );
        }, "input"),
        unput: defineFunctionName(function (chunk4TB4RGXKInput17) {
          var chunk4TB4RGXKBinding100 = chunk4TB4RGXKInput17.length,
            chunk4TB4RGXKBinding101 =
              chunk4TB4RGXKInput17.split(/(?:\r\n?|\n)/g);
          this._input = chunk4TB4RGXKInput17 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - chunk4TB4RGXKBinding100,
          );
          this.offset -= chunk4TB4RGXKBinding100;
          var chunk4TB4RGXKBinding102 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          chunk4TB4RGXKBinding101.length - 1 &&
            (this.yylineno -= chunk4TB4RGXKBinding101.length - 1);
          var chunk4TB4RGXKBinding103 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: chunk4TB4RGXKBinding101
                ? (chunk4TB4RGXKBinding101.length ===
                  chunk4TB4RGXKBinding102.length
                    ? this.yylloc.first_column
                    : 0) +
                  chunk4TB4RGXKBinding102[
                    chunk4TB4RGXKBinding102.length -
                      chunk4TB4RGXKBinding101.length
                  ].length -
                  chunk4TB4RGXKBinding101[0].length
                : this.yylloc.first_column - chunk4TB4RGXKBinding100,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                chunk4TB4RGXKBinding103[0],
                chunk4TB4RGXKBinding103[0] +
                  this.yyleng -
                  chunk4TB4RGXKBinding100,
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
        less: defineFunctionName(function (chunk4TB4RGXKInput83) {
          this.unput(this.match.slice(chunk4TB4RGXKInput83));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var chunk4TB4RGXKBinding156 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (chunk4TB4RGXKBinding156.length > 20 ? "..." : "") +
            chunk4TB4RGXKBinding156.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var chunk4TB4RGXKBinding148 = this.match;
          return (
            chunk4TB4RGXKBinding148.length < 20 &&
              (chunk4TB4RGXKBinding148 += this._input.substr(
                0,
                20 - chunk4TB4RGXKBinding148.length,
              )),
            (
              chunk4TB4RGXKBinding148.substr(0, 20) +
              (chunk4TB4RGXKBinding148.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var chunk4TB4RGXKBinding158 = this.pastInput(),
            chunk4TB4RGXKBinding159 = Array(
              chunk4TB4RGXKBinding158.length + 1,
            ).join("-");
          return (
            chunk4TB4RGXKBinding158 +
            this.upcomingInput() +
            "\n" +
            chunk4TB4RGXKBinding159 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          chunk4TB4RGXKInput14,
          chunk4TB4RGXKInput15,
        ) {
          var chunk4TB4RGXKBinding94,
            chunk4TB4RGXKBinding95,
            chunk4TB4RGXKBinding96;
          if (
            (this.options.backtrack_lexer &&
              ((chunk4TB4RGXKBinding96 = {
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
                (chunk4TB4RGXKBinding96.yylloc.range =
                  this.yylloc.range.slice(0))),
            (chunk4TB4RGXKBinding95 =
              chunk4TB4RGXKInput14[0].match(/(?:\r\n?|\n).*/g)),
            chunk4TB4RGXKBinding95 &&
              (this.yylineno += chunk4TB4RGXKBinding95.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: chunk4TB4RGXKBinding95
                ? chunk4TB4RGXKBinding95[chunk4TB4RGXKBinding95.length - 1]
                    .length -
                  chunk4TB4RGXKBinding95[
                    chunk4TB4RGXKBinding95.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + chunk4TB4RGXKInput14[0].length,
            }),
            (this.yytext += chunk4TB4RGXKInput14[0]),
            (this.match += chunk4TB4RGXKInput14[0]),
            (this.matches = chunk4TB4RGXKInput14),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(chunk4TB4RGXKInput14[0].length)),
            (this.matched += chunk4TB4RGXKInput14[0]),
            (chunk4TB4RGXKBinding94 = this.performAction.call(
              this,
              this.yy,
              this,
              chunk4TB4RGXKInput15,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            chunk4TB4RGXKBinding94)
          )
            return chunk4TB4RGXKBinding94;
          if (this._backtrack) {
            for (var chunk4TB4RGXKBinding97 in chunk4TB4RGXKBinding96)
              this[chunk4TB4RGXKBinding97] =
                chunk4TB4RGXKBinding96[chunk4TB4RGXKBinding97];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var chunk4TB4RGXKBinding104,
            chunk4TB4RGXKBinding105,
            chunk4TB4RGXKBinding106,
            chunk4TB4RGXKBinding107;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var chunk4TB4RGXKBinding108 = this._currentRules(),
              chunk4TB4RGXKBinding109 = 0;
            chunk4TB4RGXKBinding109 < chunk4TB4RGXKBinding108.length;
            chunk4TB4RGXKBinding109++
          )
            if (
              ((chunk4TB4RGXKBinding106 = this._input.match(
                this.rules[chunk4TB4RGXKBinding108[chunk4TB4RGXKBinding109]],
              )),
              chunk4TB4RGXKBinding106 &&
                (!chunk4TB4RGXKBinding105 ||
                  chunk4TB4RGXKBinding106[0].length >
                    chunk4TB4RGXKBinding105[0].length))
            ) {
              if (
                ((chunk4TB4RGXKBinding105 = chunk4TB4RGXKBinding106),
                (chunk4TB4RGXKBinding107 = chunk4TB4RGXKBinding109),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((chunk4TB4RGXKBinding104 = this.test_match(
                    chunk4TB4RGXKBinding106,
                    chunk4TB4RGXKBinding108[chunk4TB4RGXKBinding109],
                  )),
                  chunk4TB4RGXKBinding104 !== false)
                )
                  return chunk4TB4RGXKBinding104;
                if (this._backtrack) {
                  chunk4TB4RGXKBinding105 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return chunk4TB4RGXKBinding105
            ? ((chunk4TB4RGXKBinding104 = this.test_match(
                chunk4TB4RGXKBinding105,
                chunk4TB4RGXKBinding108[chunk4TB4RGXKBinding107],
              )),
              chunk4TB4RGXKBinding104 === false
                ? false
                : chunk4TB4RGXKBinding104)
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
        begin: defineFunctionName(function (chunk4TB4RGXKInput84) {
          this.conditionStack.push(chunk4TB4RGXKInput84);
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
        topState: defineFunctionName(function (chunk4TB4RGXKInput56) {
          return (
            (chunk4TB4RGXKInput56 =
              this.conditionStack.length -
              1 -
              Math.abs(chunk4TB4RGXKInput56 || 0)),
            chunk4TB4RGXKInput56 >= 0
              ? this.conditionStack[chunk4TB4RGXKInput56]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (chunk4TB4RGXKInput89) {
          this.begin(chunk4TB4RGXKInput89);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: defineFunctionName(function (
          chunk4TB4RGXKInput8,
          chunk4TB4RGXKInput9,
          chunk4TB4RGXKInput10,
          chunk4TB4RGXKInput11,
        ) {
          switch (chunk4TB4RGXKInput10) {
            case 0:
              return 62;
            case 1:
              return 63;
            case 2:
              return 64;
            case 3:
              return 65;
            case 4:
              break;
            case 5:
              break;
            case 6:
              return (this.begin("acc_title"), 33);
            case 7:
              return (this.popState(), "acc_title_value");
            case 8:
              return (this.begin("acc_descr"), 35);
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
              return 8;
            case 14:
              break;
            case 15:
              return 7;
            case 16:
              return 7;
            case 17:
              return "EDGE_STATE";
            case 18:
              this.begin("callback_name");
              break;
            case 19:
              this.popState();
              break;
            case 20:
              this.popState();
              this.begin("callback_args");
              break;
            case 21:
              return 79;
            case 22:
              this.popState();
              break;
            case 23:
              return 80;
            case 24:
              this.popState();
              break;
            case 25:
              return "STR";
            case 26:
              this.begin("string");
              break;
            case 27:
              return 82;
            case 28:
              return 57;
            case 29:
              return (this.begin("namespace"), 42);
            case 30:
              return (this.popState(), 8);
            case 31:
              break;
            case 32:
              return (this.begin("namespace-body"), 39);
            case 33:
              return (this.popState(), 41);
            case 34:
              return "EOF_IN_STRUCT";
            case 35:
              return 8;
            case 36:
              break;
            case 37:
              return "EDGE_STATE";
            case 38:
              return (this.begin("class"), 48);
            case 39:
              return (this.popState(), 8);
            case 40:
              break;
            case 41:
              return (this.popState(), this.popState(), 41);
            case 42:
              return (this.begin("class-body"), 39);
            case 43:
              return (this.popState(), 41);
            case 44:
              return "EOF_IN_STRUCT";
            case 45:
              return "EDGE_STATE";
            case 46:
              return "OPEN_IN_STRUCT";
            case 47:
              break;
            case 48:
              return "MEMBER";
            case 49:
              return 83;
            case 50:
              return 75;
            case 51:
              return 76;
            case 52:
              return 78;
            case 53:
              return 54;
            case 54:
              return 56;
            case 55:
              return 46;
            case 56:
              return 47;
            case 57:
              return 81;
            case 58:
              this.popState();
              break;
            case 59:
              return "GENERICTYPE";
            case 60:
              this.begin("generic");
              break;
            case 61:
              this.popState();
              break;
            case 62:
              return "BQUOTE_STR";
            case 63:
              this.begin("bqstring");
              break;
            case 64:
              return 77;
            case 65:
              return 77;
            case 66:
              return 77;
            case 67:
              return 77;
            case 68:
              return 69;
            case 69:
              return 69;
            case 70:
              return 71;
            case 71:
              return 71;
            case 72:
              return 70;
            case 73:
              return 68;
            case 74:
              return 72;
            case 75:
              return 73;
            case 76:
              return 74;
            case 77:
              return 22;
            case 78:
              return 44;
            case 79:
              return 100;
            case 80:
              return 18;
            case 81:
              return "PLUS";
            case 82:
              return 87;
            case 83:
              return 61;
            case 84:
              return 89;
            case 85:
              return 89;
            case 86:
              return 90;
            case 87:
              return "EQUALS";
            case 88:
              return "EQUALS";
            case 89:
              return 60;
            case 90:
              return 12;
            case 91:
              return 14;
            case 92:
              return "PUNCTUATION";
            case 93:
              return 86;
            case 94:
              return 102;
            case 95:
              return 50;
            case 96:
              return 50;
            case 97:
              return 9;
          }
        }, "anonymous"),
        rules: [
          /^(?:.*direction\s+TB[^\n]*)/,
          /^(?:.*direction\s+BT[^\n]*)/,
          /^(?:.*direction\s+RL[^\n]*)/,
          /^(?:.*direction\s+LR[^\n]*)/,
          /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
          /^(?:%%[^\n]*(\r?\n)*)/,
          /^(?:accTitle\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*\{\s*)/,
          /^(?:[\}])/,
          /^(?:[^\}]*)/,
          /^(?:\s*(\r?\n)+)/,
          /^(?:\s+)/,
          /^(?:classDiagram-v2\b)/,
          /^(?:classDiagram\b)/,
          /^(?:\[\*\])/,
          /^(?:call[\s]+)/,
          /^(?:\([\s]*\))/,
          /^(?:\()/,
          /^(?:[^(]*)/,
          /^(?:\))/,
          /^(?:[^)]*)/,
          /^(?:["])/,
          /^(?:[^"]*)/,
          /^(?:["])/,
          /^(?:style\b)/,
          /^(?:classDef\b)/,
          /^(?:namespace\b)/,
          /^(?:\s*(\r?\n)+)/,
          /^(?:\s+)/,
          /^(?:[{])/,
          /^(?:[}])/,
          /^(?:$)/,
          /^(?:\s*(\r?\n)+)/,
          /^(?:\s+)/,
          /^(?:\[\*\])/,
          /^(?:class\b)/,
          /^(?:\s*(\r?\n)+)/,
          /^(?:\s+)/,
          /^(?:[}])/,
          /^(?:[{])/,
          /^(?:[}])/,
          /^(?:$)/,
          /^(?:\[\*\])/,
          /^(?:[{])/,
          /^(?:[\n])/,
          /^(?:[^{}\n]*)/,
          /^(?:cssClass\b)/,
          /^(?:callback\b)/,
          /^(?:link\b)/,
          /^(?:click\b)/,
          /^(?:note for\b)/,
          /^(?:note\b)/,
          /^(?:<<)/,
          /^(?:>>)/,
          /^(?:href\b)/,
          /^(?:[~])/,
          /^(?:[^~]*)/,
          /^(?:~)/,
          /^(?:[`])/,
          /^(?:[^`]+)/,
          /^(?:[`])/,
          /^(?:_self\b)/,
          /^(?:_blank\b)/,
          /^(?:_parent\b)/,
          /^(?:_top\b)/,
          /^(?:\s*<\|)/,
          /^(?:\s*\|>)/,
          /^(?:\s*>)/,
          /^(?:\s*<)/,
          /^(?:\s*\*)/,
          /^(?:\s*o\b)/,
          /^(?:\s*\(\))/,
          /^(?:--)/,
          /^(?:\.\.)/,
          /^(?::{1}[^:\n;]+)/,
          /^(?::{3})/,
          /^(?:-)/,
          /^(?:\.)/,
          /^(?:\+)/,
          /^(?::)/,
          /^(?:,)/,
          /^(?:#)/,
          /^(?:#)/,
          /^(?:%)/,
          /^(?:=)/,
          /^(?:=)/,
          /^(?:\w+)/,
          /^(?:\[)/,
          /^(?:\])/,
          /^(?:[!"#$%&'*+,-.`?\\/])/,
          /^(?:[0-9]+)/,
          /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,
          /^(?:\s)/,
          /^(?:\s)/,
          /^(?:$)/,
        ],
        conditions: {
          "namespace-body": {
            rules: [
              26, 33, 34, 35, 36, 37, 38, 49, 50, 51, 52, 53, 54, 55, 56, 57,
              60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
              78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          namespace: {
            rules: [
              26, 29, 30, 31, 32, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
              80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          "class-body": {
            rules: [
              26, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
              60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
              78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          class: {
            rules: [
              26, 39, 40, 41, 42, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
              80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          acc_descr_multiline: {
            rules: [
              11, 12, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          acc_descr: {
            rules: [
              9, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87,
              88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          acc_title: {
            rules: [
              7, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87,
              88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          callback_args: {
            rules: [
              22, 23, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          callback_name: {
            rules: [
              19, 20, 21, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64,
              65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
              81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          href: {
            rules: [
              26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87,
              88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          struct: {
            rules: [
              26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87,
              88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          generic: {
            rules: [
              26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          bqstring: {
            rules: [
              26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 61, 62, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          string: {
            rules: [
              24, 25, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65,
              66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
              86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97,
            ],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 26, 27, 28,
              29, 38, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66,
              67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
              83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function chunk4TB4RGXKHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(chunk4TB4RGXKHelper1, "Parser"),
      (chunk4TB4RGXKHelper1.prototype = chunk4TB4RGXKBinding59),
      (chunk4TB4RGXKBinding59.Parser = chunk4TB4RGXKHelper1),
      new chunk4TB4RGXKHelper1()
    );
  })();
  chunk4TB4RGXKBinding1.parser = chunk4TB4RGXKBinding1;
  chunk4TB4RGXKN = chunk4TB4RGXKBinding1;
  chunk4TB4RGXKBinding2 = ["#", "+", "~", "-", ""];
  chunk4TB4RGXKBinding3 = class {
    static {
      defineFunctionName(this, "ClassMember");
    }
    constructor(chunk4TB4RGXKInput53, chunk4TB4RGXKInput54) {
      this.memberType = chunk4TB4RGXKInput54;
      this.visibility = "";
      this.classifier = "";
      this.text = "";
      let chunk4TB4RGXKBinding165 = R(chunk4TB4RGXKInput53, b());
      this.parseMember(chunk4TB4RGXKBinding165);
    }
    getDisplayDetails() {
      let chunk4TB4RGXKBinding139 = this.visibility + M(this.id);
      this.memberType === "method" &&
        ((chunk4TB4RGXKBinding139 += `(${M(this.parameters.trim())})`),
        this.returnType &&
          (chunk4TB4RGXKBinding139 += " : " + M(this.returnType)));
      chunk4TB4RGXKBinding139 = chunk4TB4RGXKBinding139.trim();
      let chunk4TB4RGXKBinding140 = this.parseClassifier();
      return {
        displayText: chunk4TB4RGXKBinding139,
        cssStyle: chunk4TB4RGXKBinding140,
      };
    }
    parseMember(chunk4TB4RGXKInput16) {
      let chunk4TB4RGXKBinding98 = "";
      if (this.memberType === "method") {
        let chunk4TB4RGXKBinding122 =
          /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(
            chunk4TB4RGXKInput16,
          );
        if (chunk4TB4RGXKBinding122) {
          let chunk4TB4RGXKBinding123 = chunk4TB4RGXKBinding122[1]
            ? chunk4TB4RGXKBinding122[1].trim()
            : "";
          if (
            (chunk4TB4RGXKBinding2.includes(chunk4TB4RGXKBinding123) &&
              (this.visibility = chunk4TB4RGXKBinding123),
            (this.id = chunk4TB4RGXKBinding122[2]),
            (this.parameters = chunk4TB4RGXKBinding122[3]
              ? chunk4TB4RGXKBinding122[3].trim()
              : ""),
            (chunk4TB4RGXKBinding98 = chunk4TB4RGXKBinding122[4]
              ? chunk4TB4RGXKBinding122[4].trim()
              : ""),
            (this.returnType = chunk4TB4RGXKBinding122[5]
              ? chunk4TB4RGXKBinding122[5].trim()
              : ""),
            chunk4TB4RGXKBinding98 === "")
          ) {
            let chunk4TB4RGXKBinding149 = this.returnType.substring(
              this.returnType.length - 1,
            );
            /[$*]/.exec(chunk4TB4RGXKBinding149) &&
              ((chunk4TB4RGXKBinding98 = chunk4TB4RGXKBinding149),
              (this.returnType = this.returnType.substring(
                0,
                this.returnType.length - 1,
              )));
          }
        }
      } else {
        let chunk4TB4RGXKBinding143 = chunk4TB4RGXKInput16.length,
          chunk4TB4RGXKBinding144 = chunk4TB4RGXKInput16.substring(0, 1),
          chunk4TB4RGXKBinding145 = chunk4TB4RGXKInput16.substring(
            chunk4TB4RGXKBinding143 - 1,
          );
        chunk4TB4RGXKBinding2.includes(chunk4TB4RGXKBinding144) &&
          (this.visibility = chunk4TB4RGXKBinding144);
        /[$*]/.exec(chunk4TB4RGXKBinding145) &&
          (chunk4TB4RGXKBinding98 = chunk4TB4RGXKBinding145);
        this.id = chunk4TB4RGXKInput16.substring(
          this.visibility === "" ? 0 : 1,
          chunk4TB4RGXKBinding98 === ""
            ? chunk4TB4RGXKBinding143
            : chunk4TB4RGXKBinding143 - 1,
        );
      }
      this.classifier = chunk4TB4RGXKBinding98;
      this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
      let chunk4TB4RGXKBinding99 = `${this.visibility ? "\\" + this.visibility : ""}${M(this.id)}${this.memberType === "method" ? `(${M(this.parameters)})${this.returnType ? " : " + M(this.returnType) : ""}` : ""}`;
      this.text = chunk4TB4RGXKBinding99
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
      this.text.startsWith("\\&lt;") &&
        (this.text = this.text.replace("\\&lt;", "~"));
    }
    parseClassifier() {
      switch (this.classifier) {
        case "*":
          return "font-style:italic;";
        case "$":
          return "text-decoration:underline;";
        default:
          return "";
      }
    }
  };
  chunk4TB4RGXKBinding4 = "classId-";
  chunk4TB4RGXKBinding5 = 0;
  chunk4TB4RGXKBinding6 = defineFunctionName(
    (chunk4TB4RGXKInput92) => s.sanitizeText(chunk4TB4RGXKInput92, b()),
    "sanitizeText",
  );
  chunk4TB4RGXKT = class {
    constructor() {
      this.relations = [];
      this.classes = new Map();
      this.styleClasses = new Map();
      this.notes = new Map();
      this.interfaces = [];
      this.namespaces = new Map();
      this.namespaceCounter = 0;
      this.diagramId = "";
      this.functions = [];
      this.lineType = {
        LINE: 0,
        DOTTED_LINE: 1,
      };
      this.relationType = {
        AGGREGATION: 0,
        EXTENSION: 1,
        COMPOSITION: 2,
        DEPENDENCY: 3,
        LOLLIPOP: 4,
      };
      this.setupToolTips = defineFunctionName((chunk4TB4RGXKInput19) => {
        let chunk4TB4RGXKBinding114 = chunkYZCP3GAMT();
        select(chunk4TB4RGXKInput19)
          .select("svg")
          .selectAll("g")
          .filter(function () {
            return select(this).attr("title") !== null;
          })
          .on("mouseover", (event) => {
            let chunk4TB4RGXKBinding126 = select(event.currentTarget),
              chunk4TB4RGXKBinding127 = chunk4TB4RGXKBinding126.attr("title");
            if (!chunk4TB4RGXKBinding127) return;
            let chunk4TB4RGXKBinding128 =
              event.currentTarget.getBoundingClientRect();
            chunk4TB4RGXKBinding114
              .transition()
              .duration(200)
              .style("opacity", ".9");
            chunk4TB4RGXKBinding114
              .html($.sanitize(chunk4TB4RGXKBinding127))
              .style(
                "left",
                `${window.scrollX + chunk4TB4RGXKBinding128.left + chunk4TB4RGXKBinding128.width / 2}px`,
              )
              .style(
                "top",
                `${window.scrollY + chunk4TB4RGXKBinding128.bottom + 4}px`,
              );
            chunk4TB4RGXKBinding126.classed("hover", true);
          })
          .on("mouseout", (event) => {
            chunk4TB4RGXKBinding114
              .transition()
              .duration(500)
              .style("opacity", 0);
            select(event.currentTarget).classed("hover", false);
          });
      }, "setupToolTips");
      this.direction = "TB";
      this.setAccTitle = H;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setAccDescription = V;
      this.getAccDescription = _;
      this.setDiagramTitle = G;
      this.getDiagramTitle = C;
      this.getConfig = defineFunctionName(() => b().class, "getConfig");
      this.functions.push(this.setupToolTips.bind(this));
      this.clear();
      this.addRelation = this.addRelation.bind(this);
      this.addClassesToNamespace = this.addClassesToNamespace.bind(this);
      this.addNamespace = this.addNamespace.bind(this);
      this.setCssClass = this.setCssClass.bind(this);
      this.addMembers = this.addMembers.bind(this);
      this.addClass = this.addClass.bind(this);
      this.setClassLabel = this.setClassLabel.bind(this);
      this.addAnnotation = this.addAnnotation.bind(this);
      this.addMember = this.addMember.bind(this);
      this.cleanupLabel = this.cleanupLabel.bind(this);
      this.addNote = this.addNote.bind(this);
      this.defineClass = this.defineClass.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.setLink = this.setLink.bind(this);
      this.bindFunctions = this.bindFunctions.bind(this);
      this.clear = this.clear.bind(this);
      this.setTooltip = this.setTooltip.bind(this);
      this.setClickEvent = this.setClickEvent.bind(this);
      this.setCssStyle = this.setCssStyle.bind(this);
    }
    static {
      defineFunctionName(this, "ClassDB");
    }
    splitClassNameAndType(chunk4TB4RGXKInput44) {
      let chunk4TB4RGXKBinding152 = s.sanitizeText(chunk4TB4RGXKInput44, b()),
        chunk4TB4RGXKBinding153 = "",
        chunk4TB4RGXKBinding154 = chunk4TB4RGXKBinding152;
      if (chunk4TB4RGXKBinding152.indexOf("~") > 0) {
        let chunk4TB4RGXKBinding184 = chunk4TB4RGXKBinding152.split("~");
        chunk4TB4RGXKBinding154 = chunk4TB4RGXKBinding6(
          chunk4TB4RGXKBinding184[0],
        );
        chunk4TB4RGXKBinding153 = chunk4TB4RGXKBinding6(
          chunk4TB4RGXKBinding184[1],
        );
      }
      return {
        className: chunk4TB4RGXKBinding154,
        type: chunk4TB4RGXKBinding153,
      };
    }
    setClassLabel(chunk4TB4RGXKInput42, chunk4TB4RGXKInput43) {
      let chunk4TB4RGXKBinding146 = s.sanitizeText(chunk4TB4RGXKInput42, b());
      chunk4TB4RGXKInput43 &&= chunk4TB4RGXKBinding6(chunk4TB4RGXKInput43);
      let { className } = this.splitClassNameAndType(chunk4TB4RGXKBinding146);
      this.classes.get(className).label = chunk4TB4RGXKInput43;
      this.classes.get(className).text =
        `${chunk4TB4RGXKInput43}${this.classes.get(className).type ? `<${this.classes.get(className).type}>` : ""}`;
    }
    addClass(chunk4TB4RGXKInput31) {
      let chunk4TB4RGXKBinding129 = s.sanitizeText(chunk4TB4RGXKInput31, b()),
        { className, type } = this.splitClassNameAndType(
          chunk4TB4RGXKBinding129,
        );
      if (this.classes.has(className)) return;
      let chunk4TB4RGXKBinding130 = s.sanitizeText(className, b());
      this.classes.set(chunk4TB4RGXKBinding130, {
        id: chunk4TB4RGXKBinding130,
        type,
        label: chunk4TB4RGXKBinding130,
        text: `${chunk4TB4RGXKBinding130}${type ? `&lt;${type}&gt;` : ""}`,
        shape: "classBox",
        cssClasses: "default",
        methods: [],
        members: [],
        annotations: [],
        styles: [],
        domId:
          chunk4TB4RGXKBinding4 +
          chunk4TB4RGXKBinding130 +
          "-" +
          chunk4TB4RGXKBinding5,
      });
      chunk4TB4RGXKBinding5++;
    }
    addInterface(chunk4TB4RGXKInput57, chunk4TB4RGXKInput58) {
      let chunk4TB4RGXKBinding169 = {
        id: `interface${this.interfaces.length}`,
        label: chunk4TB4RGXKInput57,
        classId: chunk4TB4RGXKInput58,
      };
      this.interfaces.push(chunk4TB4RGXKBinding169);
    }
    setDiagramId(chunk4TB4RGXKInput90) {
      this.diagramId = chunk4TB4RGXKInput90;
    }
    lookUpDomId(chunk4TB4RGXKInput45) {
      let chunk4TB4RGXKBinding160 = s.sanitizeText(chunk4TB4RGXKInput45, b());
      if (this.classes.has(chunk4TB4RGXKBinding160)) {
        let chunk4TB4RGXKBinding180 = this.classes.get(
          chunk4TB4RGXKBinding160,
        ).domId;
        return this.diagramId
          ? `${this.diagramId}-${chunk4TB4RGXKBinding180}`
          : chunk4TB4RGXKBinding180;
      }
      throw Error("Class not found: " + chunk4TB4RGXKBinding160);
    }
    clear() {
      this.relations = [];
      this.classes = new Map();
      this.notes = new Map();
      this.interfaces = [];
      this.functions = [];
      this.functions.push(this.setupToolTips.bind(this));
      this.namespaces = new Map();
      this.namespaceCounter = 0;
      this.diagramId = "";
      this.direction = "TB";
      _chunkICPOFSXXA();
    }
    getClass(chunk4TB4RGXKInput88) {
      return this.classes.get(chunk4TB4RGXKInput88);
    }
    getClasses() {
      return this.classes;
    }
    getRelations() {
      return this.relations;
    }
    getNote(chunk4TB4RGXKInput79) {
      let chunk4TB4RGXKBinding183 =
        typeof chunk4TB4RGXKInput79 == "number"
          ? `note${chunk4TB4RGXKInput79}`
          : chunk4TB4RGXKInput79;
      return this.notes.get(chunk4TB4RGXKBinding183);
    }
    getNotes() {
      return this.notes;
    }
    addRelation(chunk4TB4RGXKInput18) {
      logger.debug("Adding relation: " + JSON.stringify(chunk4TB4RGXKInput18));
      let chunk4TB4RGXKBinding110 = [
        this.relationType.LOLLIPOP,
        this.relationType.AGGREGATION,
        this.relationType.COMPOSITION,
        this.relationType.DEPENDENCY,
        this.relationType.EXTENSION,
      ];
      chunk4TB4RGXKInput18.relation.type1 === this.relationType.LOLLIPOP &&
      !chunk4TB4RGXKBinding110.includes(chunk4TB4RGXKInput18.relation.type2)
        ? (this.addClass(chunk4TB4RGXKInput18.id2),
          this.addInterface(chunk4TB4RGXKInput18.id1, chunk4TB4RGXKInput18.id2),
          (chunk4TB4RGXKInput18.id1 = `interface${this.interfaces.length - 1}`))
        : chunk4TB4RGXKInput18.relation.type2 === this.relationType.LOLLIPOP &&
            !chunk4TB4RGXKBinding110.includes(
              chunk4TB4RGXKInput18.relation.type1,
            )
          ? (this.addClass(chunk4TB4RGXKInput18.id1),
            this.addInterface(
              chunk4TB4RGXKInput18.id2,
              chunk4TB4RGXKInput18.id1,
            ),
            (chunk4TB4RGXKInput18.id2 = `interface${this.interfaces.length - 1}`))
          : (this.addClass(chunk4TB4RGXKInput18.id1),
            this.addClass(chunk4TB4RGXKInput18.id2));
      chunk4TB4RGXKInput18.id1 = this.splitClassNameAndType(
        chunk4TB4RGXKInput18.id1,
      ).className;
      chunk4TB4RGXKInput18.id2 = this.splitClassNameAndType(
        chunk4TB4RGXKInput18.id2,
      ).className;
      chunk4TB4RGXKInput18.relationTitle1 = s.sanitizeText(
        chunk4TB4RGXKInput18.relationTitle1.trim(),
        b(),
      );
      chunk4TB4RGXKInput18.relationTitle2 = s.sanitizeText(
        chunk4TB4RGXKInput18.relationTitle2.trim(),
        b(),
      );
      this.relations.push(chunk4TB4RGXKInput18);
    }
    addAnnotation(chunk4TB4RGXKInput69, chunk4TB4RGXKInput70) {
      let chunk4TB4RGXKBinding178 =
        this.splitClassNameAndType(chunk4TB4RGXKInput69).className;
      this.classes
        .get(chunk4TB4RGXKBinding178)
        .annotations.push(chunk4TB4RGXKInput70);
    }
    addMember(chunk4TB4RGXKInput36, chunk4TB4RGXKInput37) {
      this.addClass(chunk4TB4RGXKInput36);
      let chunk4TB4RGXKBinding135 =
          this.splitClassNameAndType(chunk4TB4RGXKInput36).className,
        chunk4TB4RGXKBinding136 = this.classes.get(chunk4TB4RGXKBinding135);
      if (typeof chunk4TB4RGXKInput37 == "string") {
        let chunk4TB4RGXKBinding150 = chunk4TB4RGXKInput37.trim();
        chunk4TB4RGXKBinding150.startsWith("<<") &&
        chunk4TB4RGXKBinding150.endsWith(">>")
          ? chunk4TB4RGXKBinding136.annotations.push(
              chunk4TB4RGXKBinding6(
                chunk4TB4RGXKBinding150.substring(
                  2,
                  chunk4TB4RGXKBinding150.length - 2,
                ),
              ),
            )
          : chunk4TB4RGXKBinding150.indexOf(")") > 0
            ? chunk4TB4RGXKBinding136.methods.push(
                new chunk4TB4RGXKBinding3(chunk4TB4RGXKBinding150, "method"),
              )
            : chunk4TB4RGXKBinding150 &&
              chunk4TB4RGXKBinding136.members.push(
                new chunk4TB4RGXKBinding3(chunk4TB4RGXKBinding150, "attribute"),
              );
      }
    }
    addMembers(chunk4TB4RGXKInput73, chunk4TB4RGXKInput74) {
      Array.isArray(chunk4TB4RGXKInput74) &&
        (chunk4TB4RGXKInput74.reverse(),
        chunk4TB4RGXKInput74.forEach((item) =>
          this.addMember(chunk4TB4RGXKInput73, item),
        ));
    }
    addNote(chunk4TB4RGXKInput63, chunk4TB4RGXKInput64) {
      let chunk4TB4RGXKBinding172 = this.notes.size,
        chunk4TB4RGXKBinding173 = {
          id: `note${chunk4TB4RGXKBinding172}`,
          class: chunk4TB4RGXKInput64,
          text: chunk4TB4RGXKInput63,
          index: chunk4TB4RGXKBinding172,
        };
      return (
        this.notes.set(chunk4TB4RGXKBinding173.id, chunk4TB4RGXKBinding173),
        chunk4TB4RGXKBinding173.id
      );
    }
    cleanupLabel(chunk4TB4RGXKInput81) {
      return (
        chunk4TB4RGXKInput81.startsWith(":") &&
          (chunk4TB4RGXKInput81 = chunk4TB4RGXKInput81.substring(1)),
        chunk4TB4RGXKBinding6(chunk4TB4RGXKInput81.trim())
      );
    }
    setCssClass(chunk4TB4RGXKInput48, chunk4TB4RGXKInput49) {
      chunk4TB4RGXKInput48.split(",").forEach((item) => {
        let chunk4TB4RGXKBinding174 = item;
        /\d/.exec(item[0]) &&
          (chunk4TB4RGXKBinding174 =
            chunk4TB4RGXKBinding4 + chunk4TB4RGXKBinding174);
        let chunk4TB4RGXKBinding175 = this.classes.get(chunk4TB4RGXKBinding174);
        chunk4TB4RGXKBinding175 &&
          (chunk4TB4RGXKBinding175.cssClasses += " " + chunk4TB4RGXKInput49);
      });
    }
    defineClass(chunk4TB4RGXKInput29, chunk4TB4RGXKInput30) {
      for (let chunk4TB4RGXKBinding124 of chunk4TB4RGXKInput29) {
        let chunk4TB4RGXKBinding125 = this.styleClasses.get(
          chunk4TB4RGXKBinding124,
        );
        chunk4TB4RGXKBinding125 === undefined &&
          ((chunk4TB4RGXKBinding125 = {
            id: chunk4TB4RGXKBinding124,
            styles: [],
            textStyles: [],
          }),
          this.styleClasses.set(
            chunk4TB4RGXKBinding124,
            chunk4TB4RGXKBinding125,
          ));
        chunk4TB4RGXKInput30 &&
          chunk4TB4RGXKInput30.forEach((item) => {
            if (/color/.exec(item)) {
              let chunk4TB4RGXKBinding182 = item.replace("fill", "bgFill");
              chunk4TB4RGXKBinding125.textStyles.push(chunk4TB4RGXKBinding182);
            }
            chunk4TB4RGXKBinding125.styles.push(item);
          });
        this.classes.forEach((item) => {
          item.cssClasses.includes(chunk4TB4RGXKBinding124) &&
            item.styles.push(
              ...chunk4TB4RGXKInput30.flatMap((_item) => _item.split(",")),
            );
        });
      }
    }
    setTooltip(chunk4TB4RGXKInput67, chunk4TB4RGXKInput68) {
      chunk4TB4RGXKInput67.split(",").forEach((item) => {
        chunk4TB4RGXKInput68 !== undefined &&
          (this.classes.get(item).tooltip =
            chunk4TB4RGXKBinding6(chunk4TB4RGXKInput68));
      });
    }
    getTooltip(chunk4TB4RGXKInput61, chunk4TB4RGXKInput62) {
      return chunk4TB4RGXKInput62 && this.namespaces.has(chunk4TB4RGXKInput62)
        ? this.namespaces
            .get(chunk4TB4RGXKInput62)
            .classes.get(chunk4TB4RGXKInput61).tooltip
        : this.classes.get(chunk4TB4RGXKInput61).tooltip;
    }
    setLink(chunk4TB4RGXKInput32, chunk4TB4RGXKInput33, chunk4TB4RGXKInput34) {
      let chunk4TB4RGXKBinding132 = b();
      chunk4TB4RGXKInput32.split(",").forEach((item) => {
        let chunk4TB4RGXKBinding137 = item;
        /\d/.exec(item[0]) &&
          (chunk4TB4RGXKBinding137 =
            chunk4TB4RGXKBinding4 + chunk4TB4RGXKBinding137);
        let chunk4TB4RGXKBinding138 = this.classes.get(chunk4TB4RGXKBinding137);
        chunk4TB4RGXKBinding138 &&
          ((chunk4TB4RGXKBinding138.link = chunk5PVQY5BWG.formatUrl(
            chunk4TB4RGXKInput33,
            chunk4TB4RGXKBinding132,
          )),
          chunk4TB4RGXKBinding132.securityLevel === "sandbox"
            ? (chunk4TB4RGXKBinding138.linkTarget = "_top")
            : typeof chunk4TB4RGXKInput34 == "string"
              ? (chunk4TB4RGXKBinding138.linkTarget =
                  chunk4TB4RGXKBinding6(chunk4TB4RGXKInput34))
              : (chunk4TB4RGXKBinding138.linkTarget = "_blank"));
      });
      this.setCssClass(chunk4TB4RGXKInput32, "clickable");
    }
    setClickEvent(
      chunk4TB4RGXKInput50,
      chunk4TB4RGXKInput51,
      chunk4TB4RGXKInput52,
    ) {
      chunk4TB4RGXKInput50.split(",").forEach((item) => {
        this.setClickFunc(item, chunk4TB4RGXKInput51, chunk4TB4RGXKInput52);
        this.classes.get(item).haveCallback = true;
      });
      this.setCssClass(chunk4TB4RGXKInput50, "clickable");
    }
    setClickFunc(
      chunk4TB4RGXKInput20,
      chunk4TB4RGXKInput21,
      chunk4TB4RGXKInput22,
    ) {
      let chunk4TB4RGXKBinding115 = s.sanitizeText(chunk4TB4RGXKInput20, b());
      if (b().securityLevel !== "loose" || chunk4TB4RGXKInput21 === undefined)
        return;
      let chunk4TB4RGXKBinding116 = chunk4TB4RGXKBinding115;
      if (this.classes.has(chunk4TB4RGXKBinding116)) {
        let chunk4TB4RGXKBinding121 = [];
        if (typeof chunk4TB4RGXKInput22 == "string") {
          chunk4TB4RGXKBinding121 = chunk4TB4RGXKInput22.split(
            /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
          );
          for (
            let chunk4TB4RGXKBinding163 = 0;
            chunk4TB4RGXKBinding163 < chunk4TB4RGXKBinding121.length;
            chunk4TB4RGXKBinding163++
          ) {
            let chunk4TB4RGXKBinding167 =
              chunk4TB4RGXKBinding121[chunk4TB4RGXKBinding163].trim();
            chunk4TB4RGXKBinding167.startsWith('"') &&
              chunk4TB4RGXKBinding167.endsWith('"') &&
              (chunk4TB4RGXKBinding167 = chunk4TB4RGXKBinding167.substr(
                1,
                chunk4TB4RGXKBinding167.length - 2,
              ));
            chunk4TB4RGXKBinding121[chunk4TB4RGXKBinding163] =
              chunk4TB4RGXKBinding167;
          }
        }
        chunk4TB4RGXKBinding121.length === 0 &&
          chunk4TB4RGXKBinding121.push(chunk4TB4RGXKBinding116);
        this.functions.push(() => {
          let chunk4TB4RGXKBinding141 = this.lookUpDomId(
              chunk4TB4RGXKBinding116,
            ),
            chunk4TB4RGXKBinding142 = document.querySelector(
              `[id="${chunk4TB4RGXKBinding141}"]`,
            );
          chunk4TB4RGXKBinding142 !== null &&
            chunk4TB4RGXKBinding142.addEventListener(
              "click",
              () => {
                chunk5PVQY5BWG.runFunc(
                  chunk4TB4RGXKInput21,
                  ...chunk4TB4RGXKBinding121,
                );
              },
              false,
            );
        });
      }
    }
    bindFunctions(chunk4TB4RGXKInput82) {
      this.functions.forEach((item) => {
        item(chunk4TB4RGXKInput82);
      });
    }
    escapeHtml(chunk4TB4RGXKInput55) {
      return chunk4TB4RGXKInput55
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
    getDirection() {
      return this.direction;
    }
    setDirection(chunk4TB4RGXKInput91) {
      this.direction = chunk4TB4RGXKInput91;
    }
    addNamespace(chunk4TB4RGXKInput41) {
      this.namespaces.has(chunk4TB4RGXKInput41) ||
        (this.namespaces.set(chunk4TB4RGXKInput41, {
          id: chunk4TB4RGXKInput41,
          classes: new Map(),
          notes: new Map(),
          children: new Map(),
          domId:
            chunk4TB4RGXKBinding4 +
            chunk4TB4RGXKInput41 +
            "-" +
            this.namespaceCounter,
        }),
        this.namespaceCounter++);
    }
    getNamespace(chunk4TB4RGXKInput85) {
      return this.namespaces.get(chunk4TB4RGXKInput85);
    }
    getNamespaces() {
      return this.namespaces;
    }
    addClassesToNamespace(
      chunk4TB4RGXKInput38,
      chunk4TB4RGXKInput39,
      chunk4TB4RGXKInput40,
    ) {
      if (this.namespaces.has(chunk4TB4RGXKInput38)) {
        for (let chunk4TB4RGXKBinding166 of chunk4TB4RGXKInput39) {
          let { className } = this.splitClassNameAndType(
              chunk4TB4RGXKBinding166,
            ),
            chunk4TB4RGXKBinding170 = this.getClass(className);
          chunk4TB4RGXKBinding170.parent = chunk4TB4RGXKInput38;
          this.namespaces
            .get(chunk4TB4RGXKInput38)
            .classes.set(className, chunk4TB4RGXKBinding170);
        }
        for (let chunk4TB4RGXKBinding177 of chunk4TB4RGXKInput40) {
          let chunk4TB4RGXKBinding181 = this.getNote(chunk4TB4RGXKBinding177);
          chunk4TB4RGXKBinding181.parent = chunk4TB4RGXKInput38;
          this.namespaces
            .get(chunk4TB4RGXKInput38)
            .notes.set(chunk4TB4RGXKBinding177, chunk4TB4RGXKBinding181);
        }
      }
    }
    setCssStyle(chunk4TB4RGXKInput46, chunk4TB4RGXKInput47) {
      let chunk4TB4RGXKBinding164 = this.classes.get(chunk4TB4RGXKInput46);
      if (!(!chunk4TB4RGXKInput47 || !chunk4TB4RGXKBinding164))
        for (let chunk4TB4RGXKBinding179 of chunk4TB4RGXKInput47)
          chunk4TB4RGXKBinding179.includes(",")
            ? chunk4TB4RGXKBinding164.styles.push(
                ...chunk4TB4RGXKBinding179.split(","),
              )
            : chunk4TB4RGXKBinding164.styles.push(chunk4TB4RGXKBinding179);
    }
    getArrowMarker(chunk4TB4RGXKInput35) {
      let chunk4TB4RGXKBinding134;
      switch (chunk4TB4RGXKInput35) {
        case 0:
          chunk4TB4RGXKBinding134 = "aggregation";
          break;
        case 1:
          chunk4TB4RGXKBinding134 = "extension";
          break;
        case 2:
          chunk4TB4RGXKBinding134 = "composition";
          break;
        case 3:
          chunk4TB4RGXKBinding134 = "dependency";
          break;
        case 4:
          chunk4TB4RGXKBinding134 = "lollipop";
          break;
        default:
          chunk4TB4RGXKBinding134 = "none";
      }
      return chunk4TB4RGXKBinding134;
    }
    getData() {
      let chunk4TB4RGXKBinding90 = [],
        chunk4TB4RGXKBinding91 = [],
        chunk4TB4RGXKBinding92 = b();
      for (let chunk4TB4RGXKBinding147 of this.namespaces.values()) {
        let chunk4TB4RGXKBinding157 = {
          id: chunk4TB4RGXKBinding147.id,
          label: chunk4TB4RGXKBinding147.id,
          isGroup: true,
          padding: chunk4TB4RGXKBinding92.class.padding ?? 16,
          shape: "rect",
          cssStyles: [],
          look: chunk4TB4RGXKBinding92.look,
        };
        chunk4TB4RGXKBinding90.push(chunk4TB4RGXKBinding157);
      }
      for (let chunk4TB4RGXKBinding162 of this.classes.values()) {
        let chunk4TB4RGXKBinding168 = {
          ...chunk4TB4RGXKBinding162,
          type: undefined,
          isGroup: false,
          parentId: chunk4TB4RGXKBinding162.parent,
          look: chunk4TB4RGXKBinding92.look,
        };
        chunk4TB4RGXKBinding90.push(chunk4TB4RGXKBinding168);
      }
      for (let chunk4TB4RGXKBinding111 of this.notes.values()) {
        let chunk4TB4RGXKBinding112 = {
          id: chunk4TB4RGXKBinding111.id,
          label: chunk4TB4RGXKBinding111.text,
          isGroup: false,
          shape: "note",
          padding: chunk4TB4RGXKBinding92.class.padding ?? 6,
          cssStyles: [
            "text-align: left",
            "white-space: nowrap",
            `fill: ${chunk4TB4RGXKBinding92.themeVariables.noteBkgColor}`,
            `stroke: ${chunk4TB4RGXKBinding92.themeVariables.noteBorderColor}`,
          ],
          look: chunk4TB4RGXKBinding92.look,
          parentId: chunk4TB4RGXKBinding111.parent,
          labelType: "markdown",
        };
        chunk4TB4RGXKBinding90.push(chunk4TB4RGXKBinding112);
        let chunk4TB4RGXKBinding113 = this.classes.get(
          chunk4TB4RGXKBinding111.class,
        )?.id;
        if (chunk4TB4RGXKBinding113) {
          let chunk4TB4RGXKBinding133 = {
            id: `edgeNote${chunk4TB4RGXKBinding111.index}`,
            start: chunk4TB4RGXKBinding111.id,
            end: chunk4TB4RGXKBinding113,
            type: "normal",
            thickness: "normal",
            classes: "relation",
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            arrowheadStyle: "",
            labelStyle: [""],
            style: ["fill: none"],
            pattern: "dotted",
            look: chunk4TB4RGXKBinding92.look,
          };
          chunk4TB4RGXKBinding91.push(chunk4TB4RGXKBinding133);
        }
      }
      for (let chunk4TB4RGXKBinding155 of this.interfaces) {
        let chunk4TB4RGXKBinding161 = {
          id: chunk4TB4RGXKBinding155.id,
          label: chunk4TB4RGXKBinding155.label,
          isGroup: false,
          shape: "rect",
          cssStyles: ["opacity: 0;"],
          look: chunk4TB4RGXKBinding92.look,
        };
        chunk4TB4RGXKBinding90.push(chunk4TB4RGXKBinding161);
      }
      let chunk4TB4RGXKBinding93 = 0;
      for (let chunk4TB4RGXKBinding117 of this.relations) {
        chunk4TB4RGXKBinding93++;
        let chunk4TB4RGXKBinding118 = {
          id: chunk5PVQY5BWS(
            chunk4TB4RGXKBinding117.id1,
            chunk4TB4RGXKBinding117.id2,
            {
              prefix: "id",
              counter: chunk4TB4RGXKBinding93,
            },
          ),
          start: chunk4TB4RGXKBinding117.id1,
          end: chunk4TB4RGXKBinding117.id2,
          type: "normal",
          label: chunk4TB4RGXKBinding117.title,
          labelpos: "c",
          thickness: "normal",
          classes: "relation",
          arrowTypeStart: this.getArrowMarker(
            chunk4TB4RGXKBinding117.relation.type1,
          ),
          arrowTypeEnd: this.getArrowMarker(
            chunk4TB4RGXKBinding117.relation.type2,
          ),
          startLabelRight:
            chunk4TB4RGXKBinding117.relationTitle1 === "none"
              ? ""
              : chunk4TB4RGXKBinding117.relationTitle1,
          endLabelLeft:
            chunk4TB4RGXKBinding117.relationTitle2 === "none"
              ? ""
              : chunk4TB4RGXKBinding117.relationTitle2,
          arrowheadStyle: "",
          labelStyle: ["display: inline-block"],
          style: chunk4TB4RGXKBinding117.style || "",
          pattern:
            chunk4TB4RGXKBinding117.relation.lineType == 1 ? "dashed" : "solid",
          look: chunk4TB4RGXKBinding92.look,
          labelType: "markdown",
        };
        chunk4TB4RGXKBinding91.push(chunk4TB4RGXKBinding118);
      }
      return {
        nodes: chunk4TB4RGXKBinding90,
        edges: chunk4TB4RGXKBinding91,
        other: {},
        config: chunk4TB4RGXKBinding92,
        direction: this.getDirection(),
      };
    }
  };
  chunk4TB4RGXKA = defineFunctionName(
    (chunk4TB4RGXKInput13) => `g.classGroup text {
  fill: ${chunk4TB4RGXKInput13.nodeBorder || chunk4TB4RGXKInput13.classText};
  stroke: none;
  font-family: ${chunk4TB4RGXKInput13.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

  .cluster-label text {
    fill: ${chunk4TB4RGXKInput13.titleColor};
  }
  .cluster-label span {
    color: ${chunk4TB4RGXKInput13.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .cluster rect {
    fill: ${chunk4TB4RGXKInput13.clusterBkg};
    stroke: ${chunk4TB4RGXKInput13.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${chunk4TB4RGXKInput13.titleColor};
  }

  .cluster span {
    color: ${chunk4TB4RGXKInput13.titleColor};
  }

.nodeLabel, .edgeLabel {
  color: ${chunk4TB4RGXKInput13.classText};
}

.noteLabel .nodeLabel, .noteLabel .edgeLabel {
  color: ${chunk4TB4RGXKInput13.noteTextColor};
}
.edgeLabel .label rect {
  fill: ${chunk4TB4RGXKInput13.mainBkg};
}
.label text {
  fill: ${chunk4TB4RGXKInput13.classText};
}

.labelBkg {
  background: ${chunk4TB4RGXKInput13.mainBkg};
}
.edgeLabel .label span {
  background: ${chunk4TB4RGXKInput13.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${chunk4TB4RGXKInput13.mainBkg};
    stroke: ${chunk4TB4RGXKInput13.nodeBorder};
    stroke-width: ${chunk4TB4RGXKInput13.strokeWidth};
  }


.divider {
  stroke: ${chunk4TB4RGXKInput13.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${chunk4TB4RGXKInput13.mainBkg};
  stroke: ${chunk4TB4RGXKInput13.nodeBorder};
}

g.classGroup line {
  stroke: ${chunk4TB4RGXKInput13.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${chunk4TB4RGXKInput13.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${chunk4TB4RGXKInput13.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${chunk4TB4RGXKInput13.lineColor};
  stroke-width: ${chunk4TB4RGXKInput13.strokeWidth};
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

[id$="-compositionStart"], .composition {
  fill: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-compositionEnd"], .composition {
  fill: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-dependencyStart"], .dependency {
  fill: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-dependencyEnd"], .dependency {
  fill: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-extensionStart"], .extension {
  fill: transparent !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-extensionEnd"], .extension {
  fill: transparent !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-aggregationStart"], .aggregation {
  fill: transparent !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-aggregationEnd"], .aggregation {
  fill: transparent !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-lollipopStart"], .lollipop {
  fill: ${chunk4TB4RGXKInput13.mainBkg} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

[id$="-lollipopEnd"], .lollipop {
  fill: ${chunk4TB4RGXKInput13.mainBkg} !important;
  stroke: ${chunk4TB4RGXKInput13.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${chunk4TB4RGXKInput13.textColor};
}

.edgeLabel[data-look="neo"] {
  background-color: ${chunk4TB4RGXKInput13.edgeLabelBackground};
  p {
    background-color: ${chunk4TB4RGXKInput13.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${chunk4TB4RGXKInput13.edgeLabelBackground};
    fill: ${chunk4TB4RGXKInput13.edgeLabelBackground};
  }
  text-align: center;
}
  ${t()}
`,
    "getStyles",
  );
  chunk4TB4RGXKR = {
    getClasses: defineFunctionName(function (
      chunk4TB4RGXKInput86,
      chunk4TB4RGXKInput87,
    ) {
      return chunk4TB4RGXKInput87.db.getClasses();
    }, "getClasses"),
    draw: defineFunctionName(async function (
      chunk4TB4RGXKInput23,
      chunk4TB4RGXKInput24,
      chunk4TB4RGXKInput25,
      chunk4TB4RGXKInput26,
    ) {
      logger.info("REF0:");
      logger.info("Drawing class diagram (v3)", chunk4TB4RGXKInput24);
      let { securityLevel, state, layout } = b();
      chunk4TB4RGXKInput26.db.setDiagramId(chunk4TB4RGXKInput24);
      let chunk4TB4RGXKBinding119 = chunk4TB4RGXKInput26.db.getData(),
        chunk4TB4RGXKBinding120 = chunk55IACEB6T(
          chunk4TB4RGXKInput24,
          securityLevel,
        );
      chunk4TB4RGXKBinding119.type = chunk4TB4RGXKInput26.type;
      chunk4TB4RGXKBinding119.layoutAlgorithm = chunk336JU56OT(layout);
      chunk4TB4RGXKBinding119.nodeSpacing = state?.nodeSpacing || 50;
      chunk4TB4RGXKBinding119.rankSpacing = state?.rankSpacing || 50;
      chunk4TB4RGXKBinding119.markers = [
        "aggregation",
        "extension",
        "composition",
        "dependency",
        "lollipop",
      ];
      chunk4TB4RGXKBinding119.diagramId = chunk4TB4RGXKInput24;
      await chunk336JU56OI(chunk4TB4RGXKBinding119, chunk4TB4RGXKBinding120);
      chunk5PVQY5BWG.insertTitle(
        chunk4TB4RGXKBinding120,
        "classDiagramTitleText",
        state?.titleTopMargin ?? 25,
        chunk4TB4RGXKInput26.db.getDiagramTitle(),
      );
      chunkEDXVE4YYN(
        chunk4TB4RGXKBinding120,
        8,
        "classDiagram",
        state?.useMaxWidth ?? true,
      );
    }, "draw"),
    getDir: defineFunctionName(
      (chunk4TB4RGXKInput65, chunk4TB4RGXKInput66 = "TB") => {
        if (!chunk4TB4RGXKInput65.doc) return chunk4TB4RGXKInput66;
        let chunk4TB4RGXKBinding176 = chunk4TB4RGXKInput66;
        for (let chunk4TB4RGXKBinding185 of chunk4TB4RGXKInput65.doc)
          chunk4TB4RGXKBinding185.stmt === "dir" &&
            (chunk4TB4RGXKBinding176 = chunk4TB4RGXKBinding185.value);
        return chunk4TB4RGXKBinding176;
      },
      "getDir",
    ),
  };
});
export { chunk4TB4RGXKA, chunk4TB4RGXKN, chunk4TB4RGXKR, chunk4TB4RGXKT };
