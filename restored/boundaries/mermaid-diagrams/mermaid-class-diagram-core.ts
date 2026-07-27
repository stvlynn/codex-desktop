// Restored from ref/webview/assets/chunk-B4BG7PRW-rBJcE0MM.js
// Mermaid class diagram core (primary: parser + db + renderer + styles). Unblocks classDiagram wrappers.
// Stage 3 candidate: IMPORT_MAP-ready local deps; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  j,
  k,
  L,
  s,
  _,
  V,
  W,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  chunkS3R3BYOJG,
  chunkS3R3BYOJS,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { initGetIconStylesChunk as n, getIconStyles as t } from "../../diagrams/get-icon-styles-alt";
import { initGetDiagramElementChunk as chunk55IACEB6N, getDiagramElement as chunk55IACEB6T } from "../../diagrams/get-diagram-element";
import { setupViewPortForSVG as chunkQN33PNHLN, initSetupViewPortForSvgChunk as chunkQN33PNHLT } from "../../diagrams/setup-viewport-for-svg";
import {
  chunkN4CR4FBYI,
  chunkN4CR4FBYN,
  chunkN4CR4FBYT,
} from "../../diagrams/mermaid-layout-loaders";
var chunkB4BG7PRWBinding1,
  chunkB4BG7PRWN,
  chunkB4BG7PRWBinding2,
  chunkB4BG7PRWBinding3,
  chunkB4BG7PRWBinding4,
  chunkB4BG7PRWBinding5,
  chunkB4BG7PRWBinding6,
  chunkB4BG7PRWT,
  chunkB4BG7PRWA,
  chunkB4BG7PRWR;
export const chunkB4BG7PRWI = esmInit(() => {
  n();
  chunk55IACEB6N();
  chunkQN33PNHLT();
  chunkN4CR4FBYN();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  chunkB4BG7PRWBinding1 = (function () {
    var chunkB4BG7PRWBinding7 = defineFunctionName(function (
        chunkB4BG7PRWInput73,
        chunkB4BG7PRWInput74,
        chunkB4BG7PRWInput75,
        chunkB4BG7PRWInput76,
      ) {
        for (
          chunkB4BG7PRWInput75 ||= {},
            chunkB4BG7PRWInput76 = chunkB4BG7PRWInput73.length;
          chunkB4BG7PRWInput76--;
          chunkB4BG7PRWInput75[chunkB4BG7PRWInput73[chunkB4BG7PRWInput76]] =
            chunkB4BG7PRWInput74
        );
        return chunkB4BG7PRWInput75;
      }, "o"),
      chunkB4BG7PRWBinding8 = [1, 18],
      chunkB4BG7PRWBinding9 = [1, 19],
      chunkB4BG7PRWBinding10 = [1, 20],
      chunkB4BG7PRWBinding11 = [1, 41],
      chunkB4BG7PRWBinding12 = [1, 42],
      chunkB4BG7PRWBinding13 = [1, 26],
      chunkB4BG7PRWBinding14 = [1, 24],
      chunkB4BG7PRWBinding15 = [1, 25],
      chunkB4BG7PRWBinding16 = [1, 32],
      chunkB4BG7PRWBinding17 = [1, 33],
      chunkB4BG7PRWBinding18 = [1, 34],
      chunkB4BG7PRWBinding19 = [1, 45],
      chunkB4BG7PRWBinding20 = [1, 35],
      chunkB4BG7PRWBinding21 = [1, 36],
      chunkB4BG7PRWBinding22 = [1, 37],
      chunkB4BG7PRWBinding23 = [1, 38],
      chunkB4BG7PRWBinding24 = [1, 27],
      chunkB4BG7PRWBinding25 = [1, 28],
      chunkB4BG7PRWBinding26 = [1, 29],
      chunkB4BG7PRWBinding27 = [1, 30],
      chunkB4BG7PRWBinding28 = [1, 31],
      chunkB4BG7PRWBinding29 = [1, 44],
      chunkB4BG7PRWBinding30 = [1, 46],
      chunkB4BG7PRWBinding31 = [1, 43],
      chunkB4BG7PRWBinding32 = [1, 47],
      chunkB4BG7PRWBinding33 = [1, 9],
      chunkB4BG7PRWBinding34 = [1, 8, 9],
      chunkB4BG7PRWBinding35 = [1, 58],
      chunkB4BG7PRWBinding36 = [1, 59],
      _chunkB4BG7PRWN = [1, 60],
      chunkB4BG7PRWBinding37 = [1, 61],
      chunkB4BG7PRWBinding38 = [1, 62],
      chunkB4BG7PRWBinding39 = [1, 63],
      chunkB4BG7PRWBinding40 = [1, 64],
      chunkB4BG7PRWBinding41 = [1, 8, 9, 41],
      _chunkB4BG7PRWT = [1, 76],
      _chunkB4BG7PRWA = [
        1, 8, 9, 12, 13, 22, 39, 41, 44, 68, 69, 70, 71, 72, 73, 74, 79, 81,
      ],
      _chunkB4BG7PRWR = [
        1, 8, 9, 12, 13, 18, 20, 22, 39, 41, 44, 50, 60, 68, 69, 70, 71, 72, 73,
        74, 79, 81, 86, 100, 102, 103,
      ],
      _chunkB4BG7PRWI = [13, 60, 86, 100, 102, 103],
      chunkB4BG7PRWBinding42 = [13, 60, 73, 74, 86, 100, 102, 103],
      chunkB4BG7PRWBinding43 = [13, 60, 68, 69, 70, 71, 72, 86, 100, 102, 103],
      chunkB4BG7PRWBinding44 = [1, 100],
      chunkB4BG7PRWBinding45 = [1, 117],
      chunkB4BG7PRWBinding46 = [1, 113],
      chunkB4BG7PRWBinding47 = [1, 109],
      chunkB4BG7PRWBinding48 = [1, 115],
      chunkB4BG7PRWBinding49 = [1, 110],
      chunkB4BG7PRWBinding50 = [1, 111],
      chunkB4BG7PRWBinding51 = [1, 112],
      chunkB4BG7PRWBinding52 = [1, 114],
      chunkB4BG7PRWBinding53 = [1, 116],
      chunkB4BG7PRWBinding54 = [22, 48, 60, 61, 82, 86, 87, 88, 89, 90],
      chunkB4BG7PRWBinding55 = [1, 8, 9, 39, 41, 44],
      chunkB4BG7PRWBinding56 = [1, 8, 9, 22],
      chunkB4BG7PRWBinding57 = [1, 145],
      chunkB4BG7PRWBinding58 = [1, 8, 9, 61],
      chunkB4BG7PRWBinding59 = [
        1, 8, 9, 22, 48, 60, 61, 82, 86, 87, 88, 89, 90,
      ],
      chunkB4BG7PRWBinding60 = {
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
          CLASS: 46,
          emptyBody: 47,
          SPACE: 48,
          ANNOTATION_START: 49,
          ANNOTATION_END: 50,
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
          46: "CLASS",
          48: "SPACE",
          49: "ANNOTATION_START",
          50: "ANNOTATION_END",
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
          [24, 1],
          [24, 3],
          [24, 4],
          [24, 3],
          [24, 6],
          [43, 2],
          [43, 3],
          [47, 0],
          [47, 2],
          [47, 2],
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
          chunkB4BG7PRWInput1,
          chunkB4BG7PRWInput2,
          chunkB4BG7PRWInput3,
          chunkB4BG7PRWInput4,
          chunkB4BG7PRWInput5,
          chunkB4BG7PRWInput6,
          chunkB4BG7PRWInput7,
        ) {
          var chunkB4BG7PRWBinding61 = chunkB4BG7PRWInput6.length - 1;
          switch (chunkB4BG7PRWInput5) {
            case 8:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1];
              break;
            case 9:
            case 10:
            case 13:
            case 15:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              break;
            case 11:
            case 14:
              this.$ =
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2] +
                "." +
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              break;
            case 12:
            case 16:
              this.$ =
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1] +
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              break;
            case 17:
            case 18:
              this.$ =
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1] +
                "~" +
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61] +
                "~";
              break;
            case 19:
              chunkB4BG7PRWInput4.addRelation(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 20:
              chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1].title =
                chunkB4BG7PRWInput4.cleanupLabel(
                  chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                );
              chunkB4BG7PRWInput4.addRelation(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 31:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61].trim();
              chunkB4BG7PRWInput4.setAccTitle(this.$);
              break;
            case 32:
            case 33:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61].trim();
              chunkB4BG7PRWInput4.setAccDescription(this.$);
              break;
            case 34:
              chunkB4BG7PRWInput4.addClassesToNamespace(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 35:
              chunkB4BG7PRWInput4.addClassesToNamespace(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 36:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              chunkB4BG7PRWInput4.addNamespace(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 37:
              this.$ = [chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61]];
              break;
            case 38:
              this.$ = [chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1]];
              break;
            case 39:
              chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61].unshift(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
              );
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              break;
            case 41:
              chunkB4BG7PRWInput4.setCssClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 42:
              chunkB4BG7PRWInput4.addMembers(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 44:
              chunkB4BG7PRWInput4.setCssClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 5],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
              );
              chunkB4BG7PRWInput4.addMembers(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 5],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 45:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              chunkB4BG7PRWInput4.addClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 46:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1];
              chunkB4BG7PRWInput4.addClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              chunkB4BG7PRWInput4.setClassLabel(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 50:
              chunkB4BG7PRWInput4.addAnnotation(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
              );
              break;
            case 51:
            case 64:
              this.$ = [chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61]];
              break;
            case 52:
              chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61].push(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
              break;
            case 53:
              break;
            case 54:
              chunkB4BG7PRWInput4.addMember(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput4.cleanupLabel(
                  chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                ),
              );
              break;
            case 55:
              break;
            case 56:
              break;
            case 57:
              this.$ = {
                id1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                id2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                relation: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                relationTitle1: "none",
                relationTitle2: "none",
              };
              break;
            case 58:
              this.$ = {
                id1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                id2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                relation: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                relationTitle1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                relationTitle2: "none",
              };
              break;
            case 59:
              this.$ = {
                id1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                id2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                relation: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                relationTitle1: "none",
                relationTitle2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              };
              break;
            case 60:
              this.$ = {
                id1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4],
                id2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                relation: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                relationTitle1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                relationTitle2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              };
              break;
            case 61:
              chunkB4BG7PRWInput4.addNote(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 62:
              chunkB4BG7PRWInput4.addNote(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 63:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2];
              chunkB4BG7PRWInput4.defineClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 65:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2].concat([
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              ]);
              break;
            case 66:
              chunkB4BG7PRWInput4.setDirection("TB");
              break;
            case 67:
              chunkB4BG7PRWInput4.setDirection("BT");
              break;
            case 68:
              chunkB4BG7PRWInput4.setDirection("RL");
              break;
            case 69:
              chunkB4BG7PRWInput4.setDirection("LR");
              break;
            case 70:
              this.$ = {
                type1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                type2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                lineType: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              };
              break;
            case 71:
              this.$ = {
                type1: "none",
                type2: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
                lineType: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              };
              break;
            case 72:
              this.$ = {
                type1: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                type2: "none",
                lineType: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              };
              break;
            case 73:
              this.$ = {
                type1: "none",
                type2: "none",
                lineType: chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              };
              break;
            case 74:
              this.$ = chunkB4BG7PRWInput4.relationType.AGGREGATION;
              break;
            case 75:
              this.$ = chunkB4BG7PRWInput4.relationType.EXTENSION;
              break;
            case 76:
              this.$ = chunkB4BG7PRWInput4.relationType.COMPOSITION;
              break;
            case 77:
              this.$ = chunkB4BG7PRWInput4.relationType.DEPENDENCY;
              break;
            case 78:
              this.$ = chunkB4BG7PRWInput4.relationType.LOLLIPOP;
              break;
            case 79:
              this.$ = chunkB4BG7PRWInput4.lineType.LINE;
              break;
            case 80:
              this.$ = chunkB4BG7PRWInput4.lineType.DOTTED_LINE;
              break;
            case 81:
            case 87:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2];
              chunkB4BG7PRWInput4.setClickEvent(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 82:
            case 88:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3];
              chunkB4BG7PRWInput4.setClickEvent(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 83:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 84:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 85:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 86:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 89:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3];
              chunkB4BG7PRWInput4.setClickEvent(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 90:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4];
              chunkB4BG7PRWInput4.setClickEvent(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 91:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 92:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 93:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 3],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 94:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 5];
              chunkB4BG7PRWInput4.setLink(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              chunkB4BG7PRWInput4.setTooltip(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 4],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
              );
              break;
            case 95:
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2];
              chunkB4BG7PRWInput4.setCssStyle(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 96:
              chunkB4BG7PRWInput4.setCssClass(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1],
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              break;
            case 97:
              this.$ = [chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61]];
              break;
            case 98:
              chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2].push(
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61],
              );
              this.$ = chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 2];
              break;
            case 100:
              this.$ =
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61 - 1] +
                chunkB4BG7PRWInput6[chunkB4BG7PRWBinding61];
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
            33: chunkB4BG7PRWBinding8,
            35: chunkB4BG7PRWBinding9,
            37: chunkB4BG7PRWBinding10,
            38: 22,
            42: chunkB4BG7PRWBinding11,
            43: 23,
            46: chunkB4BG7PRWBinding12,
            49: chunkB4BG7PRWBinding13,
            51: chunkB4BG7PRWBinding14,
            52: chunkB4BG7PRWBinding15,
            54: chunkB4BG7PRWBinding16,
            56: chunkB4BG7PRWBinding17,
            57: chunkB4BG7PRWBinding18,
            60: chunkB4BG7PRWBinding19,
            62: chunkB4BG7PRWBinding20,
            63: chunkB4BG7PRWBinding21,
            64: chunkB4BG7PRWBinding22,
            65: chunkB4BG7PRWBinding23,
            75: chunkB4BG7PRWBinding24,
            76: chunkB4BG7PRWBinding25,
            78: chunkB4BG7PRWBinding26,
            82: chunkB4BG7PRWBinding27,
            83: chunkB4BG7PRWBinding28,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
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
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding33, [2, 5], {
            8: [1, 48],
          }),
          {
            8: [1, 49],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 19], {
            22: [1, 50],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 21]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 22]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 23]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 24]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 25]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 26]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 27]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 28]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 29]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 30]),
          {
            34: [1, 51],
          },
          {
            36: [1, 52],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 33]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 53], {
            53: 53,
            66: 56,
            67: 57,
            13: [1, 54],
            22: [1, 55],
            68: chunkB4BG7PRWBinding35,
            69: chunkB4BG7PRWBinding36,
            70: _chunkB4BG7PRWN,
            71: chunkB4BG7PRWBinding37,
            72: chunkB4BG7PRWBinding38,
            73: chunkB4BG7PRWBinding39,
            74: chunkB4BG7PRWBinding40,
          }),
          {
            39: [1, 65],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding41, [2, 40], {
            39: [1, 67],
            44: [1, 66],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 55]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 56]),
          {
            16: 68,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
          },
          {
            16: 39,
            17: 40,
            19: 69,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 70,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 71,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            60: [1, 72],
          },
          {
            13: [1, 73],
          },
          {
            16: 39,
            17: 40,
            19: 74,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            13: _chunkB4BG7PRWT,
            55: 75,
          },
          {
            58: 77,
            60: [1, 78],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 66]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 67]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 68]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 69]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 13], {
            16: 39,
            17: 40,
            19: 80,
            18: [1, 79],
            20: [1, 81],
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          }),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 15], {
            20: [1, 82],
          }),
          {
            15: 83,
            16: 84,
            17: 85,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            16: 39,
            17: 40,
            19: 86,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWR, [2, 123]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWR, [2, 124]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWR, [2, 125]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWR, [2, 126]),
          chunkB4BG7PRWBinding7(
            [
              1, 8, 9, 12, 13, 20, 22, 39, 41, 44, 68, 69, 70, 71, 72, 73, 74,
              79, 81,
            ],
            [2, 127],
          ),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding33, [2, 6], {
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
            5: 87,
            33: chunkB4BG7PRWBinding8,
            35: chunkB4BG7PRWBinding9,
            37: chunkB4BG7PRWBinding10,
            42: chunkB4BG7PRWBinding11,
            46: chunkB4BG7PRWBinding12,
            49: chunkB4BG7PRWBinding13,
            51: chunkB4BG7PRWBinding14,
            52: chunkB4BG7PRWBinding15,
            54: chunkB4BG7PRWBinding16,
            56: chunkB4BG7PRWBinding17,
            57: chunkB4BG7PRWBinding18,
            60: chunkB4BG7PRWBinding19,
            62: chunkB4BG7PRWBinding20,
            63: chunkB4BG7PRWBinding21,
            64: chunkB4BG7PRWBinding22,
            65: chunkB4BG7PRWBinding23,
            75: chunkB4BG7PRWBinding24,
            76: chunkB4BG7PRWBinding25,
            78: chunkB4BG7PRWBinding26,
            82: chunkB4BG7PRWBinding27,
            83: chunkB4BG7PRWBinding28,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          }),
          {
            5: 88,
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
            33: chunkB4BG7PRWBinding8,
            35: chunkB4BG7PRWBinding9,
            37: chunkB4BG7PRWBinding10,
            38: 22,
            42: chunkB4BG7PRWBinding11,
            43: 23,
            46: chunkB4BG7PRWBinding12,
            49: chunkB4BG7PRWBinding13,
            51: chunkB4BG7PRWBinding14,
            52: chunkB4BG7PRWBinding15,
            54: chunkB4BG7PRWBinding16,
            56: chunkB4BG7PRWBinding17,
            57: chunkB4BG7PRWBinding18,
            60: chunkB4BG7PRWBinding19,
            62: chunkB4BG7PRWBinding20,
            63: chunkB4BG7PRWBinding21,
            64: chunkB4BG7PRWBinding22,
            65: chunkB4BG7PRWBinding23,
            75: chunkB4BG7PRWBinding24,
            76: chunkB4BG7PRWBinding25,
            78: chunkB4BG7PRWBinding26,
            82: chunkB4BG7PRWBinding27,
            83: chunkB4BG7PRWBinding28,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 20]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 31]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 32]),
          {
            13: [1, 90],
            16: 39,
            17: 40,
            19: 89,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            53: 91,
            66: 56,
            67: 57,
            68: chunkB4BG7PRWBinding35,
            69: chunkB4BG7PRWBinding36,
            70: _chunkB4BG7PRWN,
            71: chunkB4BG7PRWBinding37,
            72: chunkB4BG7PRWBinding38,
            73: chunkB4BG7PRWBinding39,
            74: chunkB4BG7PRWBinding40,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 54]),
          {
            67: 92,
            73: chunkB4BG7PRWBinding39,
            74: chunkB4BG7PRWBinding40,
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWI, [2, 73], {
            66: 93,
            68: chunkB4BG7PRWBinding35,
            69: chunkB4BG7PRWBinding36,
            70: _chunkB4BG7PRWN,
            71: chunkB4BG7PRWBinding37,
            72: chunkB4BG7PRWBinding38,
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding42, [2, 74]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding42, [2, 75]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding42, [2, 76]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding42, [2, 77]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding42, [2, 78]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding43, [2, 79]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding43, [2, 80]),
          {
            8: [1, 95],
            24: 96,
            40: 94,
            43: 23,
            46: chunkB4BG7PRWBinding12,
          },
          {
            16: 97,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
          },
          {
            41: [1, 99],
            45: 98,
            51: chunkB4BG7PRWBinding44,
          },
          {
            50: [1, 101],
          },
          {
            13: [1, 102],
          },
          {
            13: [1, 103],
          },
          {
            79: [1, 104],
            81: [1, 105],
          },
          {
            22: chunkB4BG7PRWBinding45,
            48: chunkB4BG7PRWBinding46,
            59: 106,
            60: chunkB4BG7PRWBinding47,
            82: chunkB4BG7PRWBinding48,
            84: 107,
            85: 108,
            86: chunkB4BG7PRWBinding49,
            87: chunkB4BG7PRWBinding50,
            88: chunkB4BG7PRWBinding51,
            89: chunkB4BG7PRWBinding52,
            90: chunkB4BG7PRWBinding53,
          },
          {
            60: [1, 118],
          },
          {
            13: _chunkB4BG7PRWT,
            55: 119,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 62]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 128]),
          {
            22: chunkB4BG7PRWBinding45,
            48: chunkB4BG7PRWBinding46,
            59: 120,
            60: chunkB4BG7PRWBinding47,
            61: [1, 121],
            82: chunkB4BG7PRWBinding48,
            84: 107,
            85: 108,
            86: chunkB4BG7PRWBinding49,
            87: chunkB4BG7PRWBinding50,
            88: chunkB4BG7PRWBinding51,
            89: chunkB4BG7PRWBinding52,
            90: chunkB4BG7PRWBinding53,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding54, [2, 64]),
          {
            16: 39,
            17: 40,
            19: 122,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 16]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 17]),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 18]),
          {
            39: [2, 36],
          },
          {
            15: 124,
            16: 84,
            17: 85,
            18: [1, 123],
            39: [2, 9],
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            39: [2, 10],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding55, [2, 45], {
            11: 125,
            12: [1, 126],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding33, [2, 7]),
          {
            9: [1, 127],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding56, [2, 57]),
          {
            16: 39,
            17: 40,
            19: 128,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            13: [1, 130],
            16: 39,
            17: 40,
            19: 129,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWI, [2, 72], {
            66: 131,
            68: chunkB4BG7PRWBinding35,
            69: chunkB4BG7PRWBinding36,
            70: _chunkB4BG7PRWN,
            71: chunkB4BG7PRWBinding37,
            72: chunkB4BG7PRWBinding38,
          }),
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWI, [2, 71]),
          {
            41: [1, 132],
          },
          {
            24: 96,
            40: 133,
            43: 23,
            46: chunkB4BG7PRWBinding12,
          },
          {
            8: [1, 134],
            41: [2, 37],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding41, [2, 41], {
            39: [1, 135],
          }),
          {
            41: [1, 136],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding41, [2, 43]),
          {
            41: [2, 51],
            45: 137,
            51: chunkB4BG7PRWBinding44,
          },
          {
            16: 39,
            17: 40,
            19: 138,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 81], {
            13: [1, 139],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 83], {
            13: [1, 141],
            77: [1, 140],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 87], {
            13: [1, 142],
            80: [1, 143],
          }),
          {
            13: [1, 144],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 95], {
            61: chunkB4BG7PRWBinding57,
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding58, [2, 97], {
            85: 146,
            22: chunkB4BG7PRWBinding45,
            48: chunkB4BG7PRWBinding46,
            60: chunkB4BG7PRWBinding47,
            82: chunkB4BG7PRWBinding48,
            86: chunkB4BG7PRWBinding49,
            87: chunkB4BG7PRWBinding50,
            88: chunkB4BG7PRWBinding51,
            89: chunkB4BG7PRWBinding52,
            90: chunkB4BG7PRWBinding53,
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 99]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 101]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 102]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 103]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 104]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 105]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 106]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 107]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 108]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 109]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 96]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 61]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 63], {
            61: chunkB4BG7PRWBinding57,
          }),
          {
            60: [1, 147],
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWA, [2, 14]),
          {
            15: 148,
            16: 84,
            17: 85,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          {
            39: [2, 12],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding55, [2, 46]),
          {
            13: [1, 149],
          },
          {
            1: [2, 4],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding56, [2, 59]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding56, [2, 58]),
          {
            16: 39,
            17: 40,
            19: 150,
            60: chunkB4BG7PRWBinding19,
            86: chunkB4BG7PRWBinding29,
            100: chunkB4BG7PRWBinding30,
            102: chunkB4BG7PRWBinding31,
            103: chunkB4BG7PRWBinding32,
          },
          chunkB4BG7PRWBinding7(_chunkB4BG7PRWI, [2, 70]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 34]),
          {
            41: [1, 151],
          },
          {
            24: 96,
            40: 152,
            41: [2, 38],
            43: 23,
            46: chunkB4BG7PRWBinding12,
          },
          {
            45: 153,
            51: chunkB4BG7PRWBinding44,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding41, [2, 42]),
          {
            41: [2, 52],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 50]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 82]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 84]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 85], {
            77: [1, 154],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 88]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 89], {
            13: [1, 155],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 91], {
            13: [1, 157],
            77: [1, 156],
          }),
          {
            22: chunkB4BG7PRWBinding45,
            48: chunkB4BG7PRWBinding46,
            60: chunkB4BG7PRWBinding47,
            82: chunkB4BG7PRWBinding48,
            84: 158,
            85: 108,
            86: chunkB4BG7PRWBinding49,
            87: chunkB4BG7PRWBinding50,
            88: chunkB4BG7PRWBinding51,
            89: chunkB4BG7PRWBinding52,
            90: chunkB4BG7PRWBinding53,
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding59, [2, 100]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding54, [2, 65]),
          {
            39: [2, 11],
          },
          {
            14: [1, 159],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding56, [2, 60]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 35]),
          {
            41: [2, 39],
          },
          {
            41: [1, 160],
          },
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 86]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 90]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 92]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 93], {
            77: [1, 161],
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding58, [2, 98], {
            85: 146,
            22: chunkB4BG7PRWBinding45,
            48: chunkB4BG7PRWBinding46,
            60: chunkB4BG7PRWBinding47,
            82: chunkB4BG7PRWBinding48,
            86: chunkB4BG7PRWBinding49,
            87: chunkB4BG7PRWBinding50,
            88: chunkB4BG7PRWBinding51,
            89: chunkB4BG7PRWBinding52,
            90: chunkB4BG7PRWBinding53,
          }),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding55, [2, 8]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding41, [2, 44]),
          chunkB4BG7PRWBinding7(chunkB4BG7PRWBinding34, [2, 94]),
        ],
        defaultActions: {
          2: [2, 1],
          3: [2, 2],
          4: [2, 3],
          83: [2, 36],
          85: [2, 10],
          124: [2, 12],
          127: [2, 4],
          137: [2, 52],
          148: [2, 11],
          152: [2, 39],
        },
        parseError: defineFunctionName(function (
          chunkB4BG7PRWInput56,
          chunkB4BG7PRWInput57,
        ) {
          if (chunkB4BG7PRWInput57.recoverable)
            this.trace(chunkB4BG7PRWInput56);
          else {
            var chunkB4BG7PRWBinding168 = Error(chunkB4BG7PRWInput56);
            throw (
              (chunkB4BG7PRWBinding168.hash = chunkB4BG7PRWInput57),
              chunkB4BG7PRWBinding168
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (chunkB4BG7PRWInput12) {
          var chunkB4BG7PRWBinding62 = this,
            chunkB4BG7PRWBinding63 = [0],
            chunkB4BG7PRWBinding64 = [],
            chunkB4BG7PRWBinding65 = [null],
            chunkB4BG7PRWBinding66 = [],
            chunkB4BG7PRWBinding67 = this.table,
            chunkB4BG7PRWBinding68 = "",
            chunkB4BG7PRWBinding69 = 0,
            chunkB4BG7PRWBinding70 = 0,
            chunkB4BG7PRWBinding71 = 0,
            chunkB4BG7PRWBinding74 = chunkB4BG7PRWBinding66.slice.call(
              arguments,
              1,
            ),
            chunkB4BG7PRWBinding75 = Object.create(this.lexer),
            chunkB4BG7PRWBinding76 = {
              yy: {},
            };
          for (var chunkB4BG7PRWBinding77 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              chunkB4BG7PRWBinding77,
            ) &&
              (chunkB4BG7PRWBinding76.yy[chunkB4BG7PRWBinding77] =
                this.yy[chunkB4BG7PRWBinding77]);
          chunkB4BG7PRWBinding75.setInput(
            chunkB4BG7PRWInput12,
            chunkB4BG7PRWBinding76.yy,
          );
          chunkB4BG7PRWBinding76.yy.lexer = chunkB4BG7PRWBinding75;
          chunkB4BG7PRWBinding76.yy.parser = this;
          chunkB4BG7PRWBinding75.yylloc === undefined &&
            (chunkB4BG7PRWBinding75.yylloc = {});
          var chunkB4BG7PRWBinding78 = chunkB4BG7PRWBinding75.yylloc;
          chunkB4BG7PRWBinding66.push(chunkB4BG7PRWBinding78);
          var chunkB4BG7PRWBinding79 =
            chunkB4BG7PRWBinding75.options &&
            chunkB4BG7PRWBinding75.options.ranges;
          typeof chunkB4BG7PRWBinding76.yy.parseError == "function"
            ? (this.parseError = chunkB4BG7PRWBinding76.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function chunkB4BG7PRWHelper1(chunkB4BG7PRWInput77) {
            chunkB4BG7PRWBinding63.length -= 2 * chunkB4BG7PRWInput77;
            chunkB4BG7PRWBinding65.length -= chunkB4BG7PRWInput77;
            chunkB4BG7PRWBinding66.length -= chunkB4BG7PRWInput77;
          }
          defineFunctionName(chunkB4BG7PRWHelper1, "popStack");
          function chunkB4BG7PRWHelper2() {
            var chunkB4BG7PRWBinding152 =
              chunkB4BG7PRWBinding64.pop() || chunkB4BG7PRWBinding75.lex() || 1;
            return (
              typeof chunkB4BG7PRWBinding152 != "number" &&
                (chunkB4BG7PRWBinding152 instanceof Array &&
                  ((chunkB4BG7PRWBinding64 = chunkB4BG7PRWBinding152),
                  (chunkB4BG7PRWBinding152 = chunkB4BG7PRWBinding64.pop())),
                (chunkB4BG7PRWBinding152 =
                  chunkB4BG7PRWBinding62.symbols_[chunkB4BG7PRWBinding152] ||
                  chunkB4BG7PRWBinding152)),
              chunkB4BG7PRWBinding152
            );
          }
          defineFunctionName(chunkB4BG7PRWHelper2, "lex");
          for (
            var chunkB4BG7PRWBinding80,
              chunkB4BG7PRWBinding81,
              chunkB4BG7PRWBinding82,
              chunkB4BG7PRWBinding83,
              chunkB4BG7PRWBinding84,
              chunkB4BG7PRWBinding85 = {},
              chunkB4BG7PRWBinding86,
              chunkB4BG7PRWBinding87,
              chunkB4BG7PRWBinding88,
              __chunkB4BG7PRWN;
            ;
          ) {
            if (
              ((chunkB4BG7PRWBinding82 =
                chunkB4BG7PRWBinding63[chunkB4BG7PRWBinding63.length - 1]),
              this.defaultActions[chunkB4BG7PRWBinding82]
                ? (chunkB4BG7PRWBinding83 =
                    this.defaultActions[chunkB4BG7PRWBinding82])
                : ((chunkB4BG7PRWBinding80 ??= chunkB4BG7PRWHelper2()),
                  (chunkB4BG7PRWBinding83 =
                    chunkB4BG7PRWBinding67[chunkB4BG7PRWBinding82] &&
                    chunkB4BG7PRWBinding67[chunkB4BG7PRWBinding82][
                      chunkB4BG7PRWBinding80
                    ])),
              chunkB4BG7PRWBinding83 === undefined ||
                !chunkB4BG7PRWBinding83.length ||
                !chunkB4BG7PRWBinding83[0])
            ) {
              var chunkB4BG7PRWBinding89 = "";
              for (chunkB4BG7PRWBinding86 in ((__chunkB4BG7PRWN = []),
              chunkB4BG7PRWBinding67[chunkB4BG7PRWBinding82]))
                this.terminals_[chunkB4BG7PRWBinding86] &&
                  chunkB4BG7PRWBinding86 > 2 &&
                  __chunkB4BG7PRWN.push(
                    "'" + this.terminals_[chunkB4BG7PRWBinding86] + "'",
                  );
              chunkB4BG7PRWBinding89 = chunkB4BG7PRWBinding75.showPosition
                ? "Parse error on line " +
                  (chunkB4BG7PRWBinding69 + 1) +
                  ":\n" +
                  chunkB4BG7PRWBinding75.showPosition() +
                  "\nExpecting " +
                  __chunkB4BG7PRWN.join(", ") +
                  ", got '" +
                  (this.terminals_[chunkB4BG7PRWBinding80] ||
                    chunkB4BG7PRWBinding80) +
                  "'"
                : "Parse error on line " +
                  (chunkB4BG7PRWBinding69 + 1) +
                  ": Unexpected " +
                  (chunkB4BG7PRWBinding80 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[chunkB4BG7PRWBinding80] ||
                        chunkB4BG7PRWBinding80) +
                      "'");
              this.parseError(chunkB4BG7PRWBinding89, {
                text: chunkB4BG7PRWBinding75.match,
                token:
                  this.terminals_[chunkB4BG7PRWBinding80] ||
                  chunkB4BG7PRWBinding80,
                line: chunkB4BG7PRWBinding75.yylineno,
                loc: chunkB4BG7PRWBinding78,
                expected: __chunkB4BG7PRWN,
              });
            }
            if (
              chunkB4BG7PRWBinding83[0] instanceof Array &&
              chunkB4BG7PRWBinding83.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  chunkB4BG7PRWBinding82 +
                  ", token: " +
                  chunkB4BG7PRWBinding80,
              );
            switch (chunkB4BG7PRWBinding83[0]) {
              case 1:
                chunkB4BG7PRWBinding63.push(chunkB4BG7PRWBinding80);
                chunkB4BG7PRWBinding65.push(chunkB4BG7PRWBinding75.yytext);
                chunkB4BG7PRWBinding66.push(chunkB4BG7PRWBinding75.yylloc);
                chunkB4BG7PRWBinding63.push(chunkB4BG7PRWBinding83[1]);
                chunkB4BG7PRWBinding80 = null;
                chunkB4BG7PRWBinding81
                  ? ((chunkB4BG7PRWBinding80 = chunkB4BG7PRWBinding81),
                    (chunkB4BG7PRWBinding81 = null))
                  : ((chunkB4BG7PRWBinding70 = chunkB4BG7PRWBinding75.yyleng),
                    (chunkB4BG7PRWBinding68 = chunkB4BG7PRWBinding75.yytext),
                    (chunkB4BG7PRWBinding69 = chunkB4BG7PRWBinding75.yylineno),
                    (chunkB4BG7PRWBinding78 = chunkB4BG7PRWBinding75.yylloc),
                    chunkB4BG7PRWBinding71 > 0 && chunkB4BG7PRWBinding71--);
                break;
              case 2:
                if (
                  ((chunkB4BG7PRWBinding87 =
                    this.productions_[chunkB4BG7PRWBinding83[1]][1]),
                  (chunkB4BG7PRWBinding85.$ =
                    chunkB4BG7PRWBinding65[
                      chunkB4BG7PRWBinding65.length - chunkB4BG7PRWBinding87
                    ]),
                  (chunkB4BG7PRWBinding85._$ = {
                    first_line:
                      chunkB4BG7PRWBinding66[
                        chunkB4BG7PRWBinding66.length -
                          (chunkB4BG7PRWBinding87 || 1)
                      ].first_line,
                    last_line:
                      chunkB4BG7PRWBinding66[chunkB4BG7PRWBinding66.length - 1]
                        .last_line,
                    first_column:
                      chunkB4BG7PRWBinding66[
                        chunkB4BG7PRWBinding66.length -
                          (chunkB4BG7PRWBinding87 || 1)
                      ].first_column,
                    last_column:
                      chunkB4BG7PRWBinding66[chunkB4BG7PRWBinding66.length - 1]
                        .last_column,
                  }),
                  chunkB4BG7PRWBinding79 &&
                    (chunkB4BG7PRWBinding85._$.range = [
                      chunkB4BG7PRWBinding66[
                        chunkB4BG7PRWBinding66.length -
                          (chunkB4BG7PRWBinding87 || 1)
                      ].range[0],
                      chunkB4BG7PRWBinding66[chunkB4BG7PRWBinding66.length - 1]
                        .range[1],
                    ]),
                  (chunkB4BG7PRWBinding84 = this.performAction.apply(
                    chunkB4BG7PRWBinding85,
                    [
                      chunkB4BG7PRWBinding68,
                      chunkB4BG7PRWBinding70,
                      chunkB4BG7PRWBinding69,
                      chunkB4BG7PRWBinding76.yy,
                      chunkB4BG7PRWBinding83[1],
                      chunkB4BG7PRWBinding65,
                      chunkB4BG7PRWBinding66,
                    ].concat(chunkB4BG7PRWBinding74),
                  )),
                  chunkB4BG7PRWBinding84 !== undefined)
                )
                  return chunkB4BG7PRWBinding84;
                chunkB4BG7PRWBinding87 &&
                  ((chunkB4BG7PRWBinding63 = chunkB4BG7PRWBinding63.slice(
                    0,
                    -1 * chunkB4BG7PRWBinding87 * 2,
                  )),
                  (chunkB4BG7PRWBinding65 = chunkB4BG7PRWBinding65.slice(
                    0,
                    -1 * chunkB4BG7PRWBinding87,
                  )),
                  (chunkB4BG7PRWBinding66 = chunkB4BG7PRWBinding66.slice(
                    0,
                    -1 * chunkB4BG7PRWBinding87,
                  )));
                chunkB4BG7PRWBinding63.push(
                  this.productions_[chunkB4BG7PRWBinding83[1]][0],
                );
                chunkB4BG7PRWBinding65.push(chunkB4BG7PRWBinding85.$);
                chunkB4BG7PRWBinding66.push(chunkB4BG7PRWBinding85._$);
                chunkB4BG7PRWBinding88 =
                  chunkB4BG7PRWBinding67[
                    chunkB4BG7PRWBinding63[chunkB4BG7PRWBinding63.length - 2]
                  ][chunkB4BG7PRWBinding63[chunkB4BG7PRWBinding63.length - 1]];
                chunkB4BG7PRWBinding63.push(chunkB4BG7PRWBinding88);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    chunkB4BG7PRWBinding60.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          chunkB4BG7PRWInput67,
          chunkB4BG7PRWInput68,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              chunkB4BG7PRWInput67,
              chunkB4BG7PRWInput68,
            );
          else throw Error(chunkB4BG7PRWInput67);
        }, "parseError"),
        setInput: defineFunctionName(function (
          chunkB4BG7PRWInput27,
          chunkB4BG7PRWInput28,
        ) {
          return (
            (this.yy = chunkB4BG7PRWInput28 || this.yy || {}),
            (this._input = chunkB4BG7PRWInput27),
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
          var chunkB4BG7PRWBinding131 = this._input[0];
          return (
            (this.yytext += chunkB4BG7PRWBinding131),
            this.yyleng++,
            this.offset++,
            (this.match += chunkB4BG7PRWBinding131),
            (this.matched += chunkB4BG7PRWBinding131),
            chunkB4BG7PRWBinding131.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            chunkB4BG7PRWBinding131
          );
        }, "input"),
        unput: defineFunctionName(function (chunkB4BG7PRWInput18) {
          var chunkB4BG7PRWBinding101 = chunkB4BG7PRWInput18.length,
            chunkB4BG7PRWBinding102 =
              chunkB4BG7PRWInput18.split(/(?:\r\n?|\n)/g);
          this._input = chunkB4BG7PRWInput18 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - chunkB4BG7PRWBinding101,
          );
          this.offset -= chunkB4BG7PRWBinding101;
          var chunkB4BG7PRWBinding103 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          chunkB4BG7PRWBinding102.length - 1 &&
            (this.yylineno -= chunkB4BG7PRWBinding102.length - 1);
          var chunkB4BG7PRWBinding104 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: chunkB4BG7PRWBinding102
                ? (chunkB4BG7PRWBinding102.length ===
                  chunkB4BG7PRWBinding103.length
                    ? this.yylloc.first_column
                    : 0) +
                  chunkB4BG7PRWBinding103[
                    chunkB4BG7PRWBinding103.length -
                      chunkB4BG7PRWBinding102.length
                  ].length -
                  chunkB4BG7PRWBinding102[0].length
                : this.yylloc.first_column - chunkB4BG7PRWBinding101,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                chunkB4BG7PRWBinding104[0],
                chunkB4BG7PRWBinding104[0] +
                  this.yyleng -
                  chunkB4BG7PRWBinding101,
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
        less: defineFunctionName(function (chunkB4BG7PRWInput80) {
          this.unput(this.match.slice(chunkB4BG7PRWInput80));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var chunkB4BG7PRWBinding157 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (chunkB4BG7PRWBinding157.length > 20 ? "..." : "") +
            chunkB4BG7PRWBinding157.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var chunkB4BG7PRWBinding149 = this.match;
          return (
            chunkB4BG7PRWBinding149.length < 20 &&
              (chunkB4BG7PRWBinding149 += this._input.substr(
                0,
                20 - chunkB4BG7PRWBinding149.length,
              )),
            (
              chunkB4BG7PRWBinding149.substr(0, 20) +
              (chunkB4BG7PRWBinding149.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var chunkB4BG7PRWBinding158 = this.pastInput(),
            chunkB4BG7PRWBinding159 = Array(
              chunkB4BG7PRWBinding158.length + 1,
            ).join("-");
          return (
            chunkB4BG7PRWBinding158 +
            this.upcomingInput() +
            "\n" +
            chunkB4BG7PRWBinding159 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          chunkB4BG7PRWInput13,
          chunkB4BG7PRWInput14,
        ) {
          var chunkB4BG7PRWBinding94,
            chunkB4BG7PRWBinding95,
            chunkB4BG7PRWBinding96;
          if (
            (this.options.backtrack_lexer &&
              ((chunkB4BG7PRWBinding96 = {
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
                (chunkB4BG7PRWBinding96.yylloc.range =
                  this.yylloc.range.slice(0))),
            (chunkB4BG7PRWBinding95 =
              chunkB4BG7PRWInput13[0].match(/(?:\r\n?|\n).*/g)),
            chunkB4BG7PRWBinding95 &&
              (this.yylineno += chunkB4BG7PRWBinding95.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: chunkB4BG7PRWBinding95
                ? chunkB4BG7PRWBinding95[chunkB4BG7PRWBinding95.length - 1]
                    .length -
                  chunkB4BG7PRWBinding95[
                    chunkB4BG7PRWBinding95.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + chunkB4BG7PRWInput13[0].length,
            }),
            (this.yytext += chunkB4BG7PRWInput13[0]),
            (this.match += chunkB4BG7PRWInput13[0]),
            (this.matches = chunkB4BG7PRWInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(chunkB4BG7PRWInput13[0].length)),
            (this.matched += chunkB4BG7PRWInput13[0]),
            (chunkB4BG7PRWBinding94 = this.performAction.call(
              this,
              this.yy,
              this,
              chunkB4BG7PRWInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            chunkB4BG7PRWBinding94)
          )
            return chunkB4BG7PRWBinding94;
          if (this._backtrack) {
            for (var chunkB4BG7PRWBinding97 in chunkB4BG7PRWBinding96)
              this[chunkB4BG7PRWBinding97] =
                chunkB4BG7PRWBinding96[chunkB4BG7PRWBinding97];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var chunkB4BG7PRWBinding105,
            chunkB4BG7PRWBinding106,
            chunkB4BG7PRWBinding107,
            chunkB4BG7PRWBinding108;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var chunkB4BG7PRWBinding109 = this._currentRules(),
              chunkB4BG7PRWBinding110 = 0;
            chunkB4BG7PRWBinding110 < chunkB4BG7PRWBinding109.length;
            chunkB4BG7PRWBinding110++
          )
            if (
              ((chunkB4BG7PRWBinding107 = this._input.match(
                this.rules[chunkB4BG7PRWBinding109[chunkB4BG7PRWBinding110]],
              )),
              chunkB4BG7PRWBinding107 &&
                (!chunkB4BG7PRWBinding106 ||
                  chunkB4BG7PRWBinding107[0].length >
                    chunkB4BG7PRWBinding106[0].length))
            ) {
              if (
                ((chunkB4BG7PRWBinding106 = chunkB4BG7PRWBinding107),
                (chunkB4BG7PRWBinding108 = chunkB4BG7PRWBinding110),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((chunkB4BG7PRWBinding105 = this.test_match(
                    chunkB4BG7PRWBinding107,
                    chunkB4BG7PRWBinding109[chunkB4BG7PRWBinding110],
                  )),
                  chunkB4BG7PRWBinding105 !== false)
                )
                  return chunkB4BG7PRWBinding105;
                if (this._backtrack) {
                  chunkB4BG7PRWBinding106 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return chunkB4BG7PRWBinding106
            ? ((chunkB4BG7PRWBinding105 = this.test_match(
                chunkB4BG7PRWBinding106,
                chunkB4BG7PRWBinding109[chunkB4BG7PRWBinding108],
              )),
              chunkB4BG7PRWBinding105 === false
                ? false
                : chunkB4BG7PRWBinding105)
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
        begin: defineFunctionName(function (chunkB4BG7PRWInput81) {
          this.conditionStack.push(chunkB4BG7PRWInput81);
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
        topState: defineFunctionName(function (chunkB4BG7PRWInput53) {
          return (
            (chunkB4BG7PRWInput53 =
              this.conditionStack.length -
              1 -
              Math.abs(chunkB4BG7PRWInput53 || 0)),
            chunkB4BG7PRWInput53 >= 0
              ? this.conditionStack[chunkB4BG7PRWInput53]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (chunkB4BG7PRWInput86) {
          this.begin(chunkB4BG7PRWInput86);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: defineFunctionName(function (
          chunkB4BG7PRWInput8,
          chunkB4BG7PRWInput9,
          chunkB4BG7PRWInput10,
          chunkB4BG7PRWInput11,
        ) {
          switch (chunkB4BG7PRWInput10) {
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
              return (this.begin("class"), 46);
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
              return 49;
            case 56:
              return 50;
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
              return 48;
            case 96:
              return 48;
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
    function $() {
      this.yy = {};
    }
    return (
      defineFunctionName($, "Parser"),
      ($.prototype = chunkB4BG7PRWBinding60),
      (chunkB4BG7PRWBinding60.Parser = $),
      new $()
    );
  })();
  chunkB4BG7PRWBinding1.parser = chunkB4BG7PRWBinding1;
  chunkB4BG7PRWN = chunkB4BG7PRWBinding1;
  chunkB4BG7PRWBinding2 = ["#", "+", "~", "-", ""];
  chunkB4BG7PRWBinding3 = class {
    static {
      defineFunctionName(this, "ClassMember");
    }
    constructor(chunkB4BG7PRWInput51, chunkB4BG7PRWInput52) {
      this.memberType = chunkB4BG7PRWInput52;
      this.visibility = "";
      this.classifier = "";
      this.text = "";
      let chunkB4BG7PRWBinding163 = L(chunkB4BG7PRWInput51, _chunkABZYJK2DB());
      this.parseMember(chunkB4BG7PRWBinding163);
    }
    getDisplayDetails() {
      let chunkB4BG7PRWBinding141 = this.visibility + j(this.id);
      this.memberType === "method" &&
        ((chunkB4BG7PRWBinding141 += `(${j(this.parameters.trim())})`),
        this.returnType &&
          (chunkB4BG7PRWBinding141 += " : " + j(this.returnType)));
      chunkB4BG7PRWBinding141 = chunkB4BG7PRWBinding141.trim();
      let chunkB4BG7PRWBinding142 = this.parseClassifier();
      return {
        displayText: chunkB4BG7PRWBinding141,
        cssStyle: chunkB4BG7PRWBinding142,
      };
    }
    parseMember(chunkB4BG7PRWInput16) {
      let chunkB4BG7PRWBinding98 = "";
      if (this.memberType === "method") {
        let chunkB4BG7PRWBinding125 =
          /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(
            chunkB4BG7PRWInput16,
          );
        if (chunkB4BG7PRWBinding125) {
          let chunkB4BG7PRWBinding126 = chunkB4BG7PRWBinding125[1]
            ? chunkB4BG7PRWBinding125[1].trim()
            : "";
          if (
            (chunkB4BG7PRWBinding2.includes(chunkB4BG7PRWBinding126) &&
              (this.visibility = chunkB4BG7PRWBinding126),
            (this.id = chunkB4BG7PRWBinding125[2]),
            (this.parameters = chunkB4BG7PRWBinding125[3]
              ? chunkB4BG7PRWBinding125[3].trim()
              : ""),
            (chunkB4BG7PRWBinding98 = chunkB4BG7PRWBinding125[4]
              ? chunkB4BG7PRWBinding125[4].trim()
              : ""),
            (this.returnType = chunkB4BG7PRWBinding125[5]
              ? chunkB4BG7PRWBinding125[5].trim()
              : ""),
            chunkB4BG7PRWBinding98 === "")
          ) {
            let chunkB4BG7PRWBinding150 = this.returnType.substring(
              this.returnType.length - 1,
            );
            /[$*]/.exec(chunkB4BG7PRWBinding150) &&
              ((chunkB4BG7PRWBinding98 = chunkB4BG7PRWBinding150),
              (this.returnType = this.returnType.substring(
                0,
                this.returnType.length - 1,
              )));
          }
        }
      } else {
        let chunkB4BG7PRWBinding143 = chunkB4BG7PRWInput16.length,
          chunkB4BG7PRWBinding144 = chunkB4BG7PRWInput16.substring(0, 1),
          chunkB4BG7PRWBinding145 = chunkB4BG7PRWInput16.substring(
            chunkB4BG7PRWBinding143 - 1,
          );
        chunkB4BG7PRWBinding2.includes(chunkB4BG7PRWBinding144) &&
          (this.visibility = chunkB4BG7PRWBinding144);
        /[$*]/.exec(chunkB4BG7PRWBinding145) &&
          (chunkB4BG7PRWBinding98 = chunkB4BG7PRWBinding145);
        this.id = chunkB4BG7PRWInput16.substring(
          this.visibility === "" ? 0 : 1,
          chunkB4BG7PRWBinding98 === ""
            ? chunkB4BG7PRWBinding143
            : chunkB4BG7PRWBinding143 - 1,
        );
      }
      this.classifier = chunkB4BG7PRWBinding98;
      this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
      let chunkB4BG7PRWBinding99 = `${this.visibility ? "\\" + this.visibility : ""}${j(this.id)}${this.memberType === "method" ? `(${j(this.parameters)})${this.returnType ? " : " + j(this.returnType) : ""}` : ""}`;
      this.text = chunkB4BG7PRWBinding99
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
  chunkB4BG7PRWBinding4 = "classId-";
  chunkB4BG7PRWBinding5 = 0;
  chunkB4BG7PRWBinding6 = defineFunctionName(
    (chunkB4BG7PRWInput88) =>
      s.sanitizeText(chunkB4BG7PRWInput88, _chunkABZYJK2DB()),
    "sanitizeText",
  );
  chunkB4BG7PRWT = class {
    constructor() {
      this.relations = [];
      this.classes = new Map();
      this.styleClasses = new Map();
      this.notes = [];
      this.interfaces = [];
      this.namespaces = new Map();
      this.namespaceCounter = 0;
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
      this.setupToolTips = defineFunctionName((chunkB4BG7PRWInput17) => {
        let chunkB4BG7PRWBinding100 = select(".mermaidTooltip");
        (chunkB4BG7PRWBinding100._groups || chunkB4BG7PRWBinding100)[0][0] ===
          null &&
          (chunkB4BG7PRWBinding100 = select("body")
            .append("div")
            .attr("class", "mermaidTooltip")
            .style("opacity", 0));
        select(chunkB4BG7PRWInput17)
          .select("svg")
          .selectAll("g.node")
          .on("mouseover", (event) => {
            let chunkB4BG7PRWBinding117 = select(event.currentTarget);
            if (chunkB4BG7PRWBinding117.attr("title") === null) return;
            let chunkB4BG7PRWBinding118 = this.getBoundingClientRect();
            chunkB4BG7PRWBinding100
              .transition()
              .duration(200)
              .style("opacity", ".9");
            chunkB4BG7PRWBinding100
              .text(chunkB4BG7PRWBinding117.attr("title"))
              .style(
                "left",
                window.scrollX +
                  chunkB4BG7PRWBinding118.left +
                  (chunkB4BG7PRWBinding118.right -
                    chunkB4BG7PRWBinding118.left) /
                    2 +
                  "px",
              )
              .style(
                "top",
                window.scrollY +
                  chunkB4BG7PRWBinding118.top -
                  14 +
                  document.body.scrollTop +
                  "px",
              );
            chunkB4BG7PRWBinding100.html(
              chunkB4BG7PRWBinding100.html().replace(/&lt;br\/&gt;/g, "<br/>"),
            );
            chunkB4BG7PRWBinding117.classed("hover", true);
          })
          .on("mouseout", (event) => {
            chunkB4BG7PRWBinding100
              .transition()
              .duration(500)
              .style("opacity", 0);
            select(event.currentTarget).classed("hover", false);
          });
      }, "setupToolTips");
      this.direction = "TB";
      this.setAccTitle = V;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setAccDescription = B;
      this.getAccDescription = _;
      this.setDiagramTitle = W;
      this.getDiagramTitle = C;
      this.getConfig = defineFunctionName(
        () => _chunkABZYJK2DB().class,
        "getConfig",
      );
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
    splitClassNameAndType(chunkB4BG7PRWInput43) {
      let chunkB4BG7PRWBinding153 = s.sanitizeText(
          chunkB4BG7PRWInput43,
          _chunkABZYJK2DB(),
        ),
        chunkB4BG7PRWBinding154 = "",
        chunkB4BG7PRWBinding155 = chunkB4BG7PRWBinding153;
      if (chunkB4BG7PRWBinding153.indexOf("~") > 0) {
        let chunkB4BG7PRWBinding179 = chunkB4BG7PRWBinding153.split("~");
        chunkB4BG7PRWBinding155 = chunkB4BG7PRWBinding6(
          chunkB4BG7PRWBinding179[0],
        );
        chunkB4BG7PRWBinding154 = chunkB4BG7PRWBinding6(
          chunkB4BG7PRWBinding179[1],
        );
      }
      return {
        className: chunkB4BG7PRWBinding155,
        type: chunkB4BG7PRWBinding154,
      };
    }
    setClassLabel(chunkB4BG7PRWInput38, chunkB4BG7PRWInput39) {
      let chunkB4BG7PRWBinding147 = s.sanitizeText(
        chunkB4BG7PRWInput38,
        _chunkABZYJK2DB(),
      );
      chunkB4BG7PRWInput39 &&= chunkB4BG7PRWBinding6(chunkB4BG7PRWInput39);
      let { className } = this.splitClassNameAndType(chunkB4BG7PRWBinding147);
      this.classes.get(className).label = chunkB4BG7PRWInput39;
      this.classes.get(className).text =
        `${chunkB4BG7PRWInput39}${this.classes.get(className).type ? `<${this.classes.get(className).type}>` : ""}`;
    }
    addClass(chunkB4BG7PRWInput31) {
      let chunkB4BG7PRWBinding129 = s.sanitizeText(
          chunkB4BG7PRWInput31,
          _chunkABZYJK2DB(),
        ),
        { className, type } = this.splitClassNameAndType(
          chunkB4BG7PRWBinding129,
        );
      if (this.classes.has(className)) return;
      let chunkB4BG7PRWBinding130 = s.sanitizeText(
        className,
        _chunkABZYJK2DB(),
      );
      this.classes.set(chunkB4BG7PRWBinding130, {
        id: chunkB4BG7PRWBinding130,
        type,
        label: chunkB4BG7PRWBinding130,
        text: `${chunkB4BG7PRWBinding130}${type ? `&lt;${type}&gt;` : ""}`,
        shape: "classBox",
        cssClasses: "default",
        methods: [],
        members: [],
        annotations: [],
        styles: [],
        domId:
          chunkB4BG7PRWBinding4 +
          chunkB4BG7PRWBinding130 +
          "-" +
          chunkB4BG7PRWBinding5,
      });
      chunkB4BG7PRWBinding5++;
    }
    addInterface(chunkB4BG7PRWInput54, chunkB4BG7PRWInput55) {
      let chunkB4BG7PRWBinding167 = {
        id: `interface${this.interfaces.length}`,
        label: chunkB4BG7PRWInput54,
        classId: chunkB4BG7PRWInput55,
      };
      this.interfaces.push(chunkB4BG7PRWBinding167);
    }
    lookUpDomId(chunkB4BG7PRWInput58) {
      let chunkB4BG7PRWBinding169 = s.sanitizeText(
        chunkB4BG7PRWInput58,
        _chunkABZYJK2DB(),
      );
      if (this.classes.has(chunkB4BG7PRWBinding169))
        return this.classes.get(chunkB4BG7PRWBinding169).domId;
      throw Error("Class not found: " + chunkB4BG7PRWBinding169);
    }
    clear() {
      this.relations = [];
      this.classes = new Map();
      this.notes = [];
      this.interfaces = [];
      this.functions = [];
      this.functions.push(this.setupToolTips.bind(this));
      this.namespaces = new Map();
      this.namespaceCounter = 0;
      this.direction = "TB";
      a();
    }
    getClass(chunkB4BG7PRWInput85) {
      return this.classes.get(chunkB4BG7PRWInput85);
    }
    getClasses() {
      return this.classes;
    }
    getRelations() {
      return this.relations;
    }
    getNotes() {
      return this.notes;
    }
    addRelation(chunkB4BG7PRWInput19) {
      logger.debug("Adding relation: " + JSON.stringify(chunkB4BG7PRWInput19));
      let chunkB4BG7PRWBinding111 = [
        this.relationType.LOLLIPOP,
        this.relationType.AGGREGATION,
        this.relationType.COMPOSITION,
        this.relationType.DEPENDENCY,
        this.relationType.EXTENSION,
      ];
      chunkB4BG7PRWInput19.relation.type1 === this.relationType.LOLLIPOP &&
      !chunkB4BG7PRWBinding111.includes(chunkB4BG7PRWInput19.relation.type2)
        ? (this.addClass(chunkB4BG7PRWInput19.id2),
          this.addInterface(chunkB4BG7PRWInput19.id1, chunkB4BG7PRWInput19.id2),
          (chunkB4BG7PRWInput19.id1 = `interface${this.interfaces.length - 1}`))
        : chunkB4BG7PRWInput19.relation.type2 === this.relationType.LOLLIPOP &&
            !chunkB4BG7PRWBinding111.includes(
              chunkB4BG7PRWInput19.relation.type1,
            )
          ? (this.addClass(chunkB4BG7PRWInput19.id1),
            this.addInterface(
              chunkB4BG7PRWInput19.id2,
              chunkB4BG7PRWInput19.id1,
            ),
            (chunkB4BG7PRWInput19.id2 = `interface${this.interfaces.length - 1}`))
          : (this.addClass(chunkB4BG7PRWInput19.id1),
            this.addClass(chunkB4BG7PRWInput19.id2));
      chunkB4BG7PRWInput19.id1 = this.splitClassNameAndType(
        chunkB4BG7PRWInput19.id1,
      ).className;
      chunkB4BG7PRWInput19.id2 = this.splitClassNameAndType(
        chunkB4BG7PRWInput19.id2,
      ).className;
      chunkB4BG7PRWInput19.relationTitle1 = s.sanitizeText(
        chunkB4BG7PRWInput19.relationTitle1.trim(),
        _chunkABZYJK2DB(),
      );
      chunkB4BG7PRWInput19.relationTitle2 = s.sanitizeText(
        chunkB4BG7PRWInput19.relationTitle2.trim(),
        _chunkABZYJK2DB(),
      );
      this.relations.push(chunkB4BG7PRWInput19);
    }
    addAnnotation(chunkB4BG7PRWInput65, chunkB4BG7PRWInput66) {
      let chunkB4BG7PRWBinding174 =
        this.splitClassNameAndType(chunkB4BG7PRWInput65).className;
      this.classes
        .get(chunkB4BG7PRWBinding174)
        .annotations.push(chunkB4BG7PRWInput66);
    }
    addMember(chunkB4BG7PRWInput36, chunkB4BG7PRWInput37) {
      this.addClass(chunkB4BG7PRWInput36);
      let chunkB4BG7PRWBinding135 =
          this.splitClassNameAndType(chunkB4BG7PRWInput36).className,
        chunkB4BG7PRWBinding136 = this.classes.get(chunkB4BG7PRWBinding135);
      if (typeof chunkB4BG7PRWInput37 == "string") {
        let chunkB4BG7PRWBinding151 = chunkB4BG7PRWInput37.trim();
        chunkB4BG7PRWBinding151.startsWith("<<") &&
        chunkB4BG7PRWBinding151.endsWith(">>")
          ? chunkB4BG7PRWBinding136.annotations.push(
              chunkB4BG7PRWBinding6(
                chunkB4BG7PRWBinding151.substring(
                  2,
                  chunkB4BG7PRWBinding151.length - 2,
                ),
              ),
            )
          : chunkB4BG7PRWBinding151.indexOf(")") > 0
            ? chunkB4BG7PRWBinding136.methods.push(
                new chunkB4BG7PRWBinding3(chunkB4BG7PRWBinding151, "method"),
              )
            : chunkB4BG7PRWBinding151 &&
              chunkB4BG7PRWBinding136.members.push(
                new chunkB4BG7PRWBinding3(chunkB4BG7PRWBinding151, "attribute"),
              );
      }
    }
    addMembers(chunkB4BG7PRWInput71, chunkB4BG7PRWInput72) {
      Array.isArray(chunkB4BG7PRWInput72) &&
        (chunkB4BG7PRWInput72.reverse(),
        chunkB4BG7PRWInput72.forEach((item) =>
          this.addMember(chunkB4BG7PRWInput71, item),
        ));
    }
    addNote(chunkB4BG7PRWInput69, chunkB4BG7PRWInput70) {
      let chunkB4BG7PRWBinding176 = {
        id: `note${this.notes.length}`,
        class: chunkB4BG7PRWInput70,
        text: chunkB4BG7PRWInput69,
      };
      this.notes.push(chunkB4BG7PRWBinding176);
    }
    cleanupLabel(chunkB4BG7PRWInput78) {
      return (
        chunkB4BG7PRWInput78.startsWith(":") &&
          (chunkB4BG7PRWInput78 = chunkB4BG7PRWInput78.substring(1)),
        chunkB4BG7PRWBinding6(chunkB4BG7PRWInput78.trim())
      );
    }
    setCssClass(chunkB4BG7PRWInput46, chunkB4BG7PRWInput47) {
      chunkB4BG7PRWInput46.split(",").forEach((item) => {
        let chunkB4BG7PRWBinding171 = item;
        /\d/.exec(item[0]) &&
          (chunkB4BG7PRWBinding171 =
            chunkB4BG7PRWBinding4 + chunkB4BG7PRWBinding171);
        let chunkB4BG7PRWBinding172 = this.classes.get(chunkB4BG7PRWBinding171);
        chunkB4BG7PRWBinding172 &&
          (chunkB4BG7PRWBinding172.cssClasses += " " + chunkB4BG7PRWInput47);
      });
    }
    defineClass(chunkB4BG7PRWInput29, chunkB4BG7PRWInput30) {
      for (let chunkB4BG7PRWBinding127 of chunkB4BG7PRWInput29) {
        let chunkB4BG7PRWBinding128 = this.styleClasses.get(
          chunkB4BG7PRWBinding127,
        );
        chunkB4BG7PRWBinding128 === undefined &&
          ((chunkB4BG7PRWBinding128 = {
            id: chunkB4BG7PRWBinding127,
            styles: [],
            textStyles: [],
          }),
          this.styleClasses.set(
            chunkB4BG7PRWBinding127,
            chunkB4BG7PRWBinding128,
          ));
        chunkB4BG7PRWInput30 &&
          chunkB4BG7PRWInput30.forEach((item) => {
            if (/color/.exec(item)) {
              let chunkB4BG7PRWBinding177 = item.replace("fill", "bgFill");
              chunkB4BG7PRWBinding128.textStyles.push(chunkB4BG7PRWBinding177);
            }
            chunkB4BG7PRWBinding128.styles.push(item);
          });
        this.classes.forEach((item) => {
          item.cssClasses.includes(chunkB4BG7PRWBinding127) &&
            item.styles.push(
              ...chunkB4BG7PRWInput30.flatMap((_item) => _item.split(",")),
            );
        });
      }
    }
    setTooltip(chunkB4BG7PRWInput63, chunkB4BG7PRWInput64) {
      chunkB4BG7PRWInput63.split(",").forEach((item) => {
        chunkB4BG7PRWInput64 !== undefined &&
          (this.classes.get(item).tooltip =
            chunkB4BG7PRWBinding6(chunkB4BG7PRWInput64));
      });
    }
    getTooltip(chunkB4BG7PRWInput59, chunkB4BG7PRWInput60) {
      return chunkB4BG7PRWInput60 && this.namespaces.has(chunkB4BG7PRWInput60)
        ? this.namespaces
            .get(chunkB4BG7PRWInput60)
            .classes.get(chunkB4BG7PRWInput59).tooltip
        : this.classes.get(chunkB4BG7PRWInput59).tooltip;
    }
    setLink(chunkB4BG7PRWInput32, chunkB4BG7PRWInput33, chunkB4BG7PRWInput34) {
      let chunkB4BG7PRWBinding132 = _chunkABZYJK2DB();
      chunkB4BG7PRWInput32.split(",").forEach((item) => {
        let chunkB4BG7PRWBinding139 = item;
        /\d/.exec(item[0]) &&
          (chunkB4BG7PRWBinding139 =
            chunkB4BG7PRWBinding4 + chunkB4BG7PRWBinding139);
        let chunkB4BG7PRWBinding140 = this.classes.get(chunkB4BG7PRWBinding139);
        chunkB4BG7PRWBinding140 &&
          ((chunkB4BG7PRWBinding140.link = chunkS3R3BYOJG.formatUrl(
            chunkB4BG7PRWInput33,
            chunkB4BG7PRWBinding132,
          )),
          chunkB4BG7PRWBinding132.securityLevel === "sandbox"
            ? (chunkB4BG7PRWBinding140.linkTarget = "_top")
            : typeof chunkB4BG7PRWInput34 == "string"
              ? (chunkB4BG7PRWBinding140.linkTarget =
                  chunkB4BG7PRWBinding6(chunkB4BG7PRWInput34))
              : (chunkB4BG7PRWBinding140.linkTarget = "_blank"));
      });
      this.setCssClass(chunkB4BG7PRWInput32, "clickable");
    }
    setClickEvent(
      chunkB4BG7PRWInput48,
      chunkB4BG7PRWInput49,
      chunkB4BG7PRWInput50,
    ) {
      chunkB4BG7PRWInput48.split(",").forEach((item) => {
        this.setClickFunc(item, chunkB4BG7PRWInput49, chunkB4BG7PRWInput50);
        this.classes.get(item).haveCallback = true;
      });
      this.setCssClass(chunkB4BG7PRWInput48, "clickable");
    }
    setClickFunc(
      chunkB4BG7PRWInput20,
      chunkB4BG7PRWInput21,
      chunkB4BG7PRWInput22,
    ) {
      let chunkB4BG7PRWBinding115 = s.sanitizeText(
        chunkB4BG7PRWInput20,
        _chunkABZYJK2DB(),
      );
      if (
        _chunkABZYJK2DB().securityLevel !== "loose" ||
        chunkB4BG7PRWInput21 === undefined
      )
        return;
      let chunkB4BG7PRWBinding116 = chunkB4BG7PRWBinding115;
      if (this.classes.has(chunkB4BG7PRWBinding116)) {
        let chunkB4BG7PRWBinding123 = this.lookUpDomId(chunkB4BG7PRWBinding116),
          chunkB4BG7PRWBinding124 = [];
        if (typeof chunkB4BG7PRWInput22 == "string") {
          chunkB4BG7PRWBinding124 = chunkB4BG7PRWInput22.split(
            /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
          );
          for (
            let chunkB4BG7PRWBinding161 = 0;
            chunkB4BG7PRWBinding161 < chunkB4BG7PRWBinding124.length;
            chunkB4BG7PRWBinding161++
          ) {
            let chunkB4BG7PRWBinding166 =
              chunkB4BG7PRWBinding124[chunkB4BG7PRWBinding161].trim();
            chunkB4BG7PRWBinding166.startsWith('"') &&
              chunkB4BG7PRWBinding166.endsWith('"') &&
              (chunkB4BG7PRWBinding166 = chunkB4BG7PRWBinding166.substr(
                1,
                chunkB4BG7PRWBinding166.length - 2,
              ));
            chunkB4BG7PRWBinding124[chunkB4BG7PRWBinding161] =
              chunkB4BG7PRWBinding166;
          }
        }
        chunkB4BG7PRWBinding124.length === 0 &&
          chunkB4BG7PRWBinding124.push(chunkB4BG7PRWBinding123);
        this.functions.push(() => {
          let chunkB4BG7PRWBinding148 = document.querySelector(
            `[id="${chunkB4BG7PRWBinding123}"]`,
          );
          chunkB4BG7PRWBinding148 !== null &&
            chunkB4BG7PRWBinding148.addEventListener(
              "click",
              () => {
                chunkS3R3BYOJG.runFunc(
                  chunkB4BG7PRWInput21,
                  ...chunkB4BG7PRWBinding124,
                );
              },
              false,
            );
        });
      }
    }
    bindFunctions(chunkB4BG7PRWInput79) {
      this.functions.forEach((item) => {
        item(chunkB4BG7PRWInput79);
      });
    }
    getDirection() {
      return this.direction;
    }
    setDirection(chunkB4BG7PRWInput87) {
      this.direction = chunkB4BG7PRWInput87;
    }
    addNamespace(chunkB4BG7PRWInput42) {
      this.namespaces.has(chunkB4BG7PRWInput42) ||
        (this.namespaces.set(chunkB4BG7PRWInput42, {
          id: chunkB4BG7PRWInput42,
          classes: new Map(),
          children: {},
          domId:
            chunkB4BG7PRWBinding4 +
            chunkB4BG7PRWInput42 +
            "-" +
            this.namespaceCounter,
        }),
        this.namespaceCounter++);
    }
    getNamespace(chunkB4BG7PRWInput82) {
      return this.namespaces.get(chunkB4BG7PRWInput82);
    }
    getNamespaces() {
      return this.namespaces;
    }
    addClassesToNamespace(chunkB4BG7PRWInput40, chunkB4BG7PRWInput41) {
      if (this.namespaces.has(chunkB4BG7PRWInput40))
        for (let chunkB4BG7PRWBinding164 of chunkB4BG7PRWInput41) {
          let { className } = this.splitClassNameAndType(
            chunkB4BG7PRWBinding164,
          );
          this.classes.get(className).parent = chunkB4BG7PRWInput40;
          this.namespaces
            .get(chunkB4BG7PRWInput40)
            .classes.set(className, this.classes.get(className));
        }
    }
    setCssStyle(chunkB4BG7PRWInput44, chunkB4BG7PRWInput45) {
      let chunkB4BG7PRWBinding162 = this.classes.get(chunkB4BG7PRWInput44);
      if (!(!chunkB4BG7PRWInput45 || !chunkB4BG7PRWBinding162))
        for (let chunkB4BG7PRWBinding175 of chunkB4BG7PRWInput45)
          chunkB4BG7PRWBinding175.includes(",")
            ? chunkB4BG7PRWBinding162.styles.push(
                ...chunkB4BG7PRWBinding175.split(","),
              )
            : chunkB4BG7PRWBinding162.styles.push(chunkB4BG7PRWBinding175);
    }
    getArrowMarker(chunkB4BG7PRWInput35) {
      let chunkB4BG7PRWBinding134;
      switch (chunkB4BG7PRWInput35) {
        case 0:
          chunkB4BG7PRWBinding134 = "aggregation";
          break;
        case 1:
          chunkB4BG7PRWBinding134 = "extension";
          break;
        case 2:
          chunkB4BG7PRWBinding134 = "composition";
          break;
        case 3:
          chunkB4BG7PRWBinding134 = "dependency";
          break;
        case 4:
          chunkB4BG7PRWBinding134 = "lollipop";
          break;
        default:
          chunkB4BG7PRWBinding134 = "none";
      }
      return chunkB4BG7PRWBinding134;
    }
    getData() {
      let chunkB4BG7PRWBinding90 = [],
        chunkB4BG7PRWBinding91 = [],
        chunkB4BG7PRWBinding92 = _chunkABZYJK2DB();
      for (let chunkB4BG7PRWBinding137 of this.namespaces.keys()) {
        let chunkB4BG7PRWBinding138 = this.namespaces.get(
          chunkB4BG7PRWBinding137,
        );
        if (chunkB4BG7PRWBinding138) {
          let chunkB4BG7PRWBinding146 = {
            id: chunkB4BG7PRWBinding138.id,
            label: chunkB4BG7PRWBinding138.id,
            isGroup: true,
            padding: chunkB4BG7PRWBinding92.class.padding ?? 16,
            shape: "rect",
            cssStyles: ["fill: none", "stroke: black"],
            look: chunkB4BG7PRWBinding92.look,
          };
          chunkB4BG7PRWBinding90.push(chunkB4BG7PRWBinding146);
        }
      }
      for (let chunkB4BG7PRWBinding165 of this.classes.keys()) {
        let chunkB4BG7PRWBinding170 = this.classes.get(chunkB4BG7PRWBinding165);
        if (chunkB4BG7PRWBinding170) {
          let chunkB4BG7PRWBinding178 = chunkB4BG7PRWBinding170;
          chunkB4BG7PRWBinding178.parentId = chunkB4BG7PRWBinding170.parent;
          chunkB4BG7PRWBinding178.look = chunkB4BG7PRWBinding92.look;
          chunkB4BG7PRWBinding90.push(chunkB4BG7PRWBinding178);
        }
      }
      let chunkB4BG7PRWBinding93 = 0;
      for (let chunkB4BG7PRWBinding112 of this.notes) {
        chunkB4BG7PRWBinding93++;
        let chunkB4BG7PRWBinding113 = {
          id: chunkB4BG7PRWBinding112.id,
          label: chunkB4BG7PRWBinding112.text,
          isGroup: false,
          shape: "note",
          padding: chunkB4BG7PRWBinding92.class.padding ?? 6,
          cssStyles: [
            "text-align: left",
            "white-space: nowrap",
            `fill: ${chunkB4BG7PRWBinding92.themeVariables.noteBkgColor}`,
            `stroke: ${chunkB4BG7PRWBinding92.themeVariables.noteBorderColor}`,
          ],
          look: chunkB4BG7PRWBinding92.look,
        };
        chunkB4BG7PRWBinding90.push(chunkB4BG7PRWBinding113);
        let chunkB4BG7PRWBinding114 =
          this.classes.get(chunkB4BG7PRWBinding112.class)?.id ?? "";
        if (chunkB4BG7PRWBinding114) {
          let chunkB4BG7PRWBinding133 = {
            id: `edgeNote${chunkB4BG7PRWBinding93}`,
            start: chunkB4BG7PRWBinding112.id,
            end: chunkB4BG7PRWBinding114,
            type: "normal",
            thickness: "normal",
            classes: "relation",
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            arrowheadStyle: "",
            labelStyle: [""],
            style: ["fill: none"],
            pattern: "dotted",
            look: chunkB4BG7PRWBinding92.look,
          };
          chunkB4BG7PRWBinding91.push(chunkB4BG7PRWBinding133);
        }
      }
      for (let chunkB4BG7PRWBinding156 of this.interfaces) {
        let chunkB4BG7PRWBinding160 = {
          id: chunkB4BG7PRWBinding156.id,
          label: chunkB4BG7PRWBinding156.label,
          isGroup: false,
          shape: "rect",
          cssStyles: ["opacity: 0;"],
          look: chunkB4BG7PRWBinding92.look,
        };
        chunkB4BG7PRWBinding90.push(chunkB4BG7PRWBinding160);
      }
      chunkB4BG7PRWBinding93 = 0;
      for (let chunkB4BG7PRWBinding119 of this.relations) {
        chunkB4BG7PRWBinding93++;
        let chunkB4BG7PRWBinding120 = {
          id: chunkS3R3BYOJS(
            chunkB4BG7PRWBinding119.id1,
            chunkB4BG7PRWBinding119.id2,
            {
              prefix: "id",
              counter: chunkB4BG7PRWBinding93,
            },
          ),
          start: chunkB4BG7PRWBinding119.id1,
          end: chunkB4BG7PRWBinding119.id2,
          type: "normal",
          label: chunkB4BG7PRWBinding119.title,
          labelpos: "c",
          thickness: "normal",
          classes: "relation",
          arrowTypeStart: this.getArrowMarker(
            chunkB4BG7PRWBinding119.relation.type1,
          ),
          arrowTypeEnd: this.getArrowMarker(
            chunkB4BG7PRWBinding119.relation.type2,
          ),
          startLabelRight:
            chunkB4BG7PRWBinding119.relationTitle1 === "none"
              ? ""
              : chunkB4BG7PRWBinding119.relationTitle1,
          endLabelLeft:
            chunkB4BG7PRWBinding119.relationTitle2 === "none"
              ? ""
              : chunkB4BG7PRWBinding119.relationTitle2,
          arrowheadStyle: "",
          labelStyle: ["display: inline-block"],
          style: chunkB4BG7PRWBinding119.style || "",
          pattern:
            chunkB4BG7PRWBinding119.relation.lineType == 1 ? "dashed" : "solid",
          look: chunkB4BG7PRWBinding92.look,
        };
        chunkB4BG7PRWBinding91.push(chunkB4BG7PRWBinding120);
      }
      return {
        nodes: chunkB4BG7PRWBinding90,
        edges: chunkB4BG7PRWBinding91,
        other: {},
        config: chunkB4BG7PRWBinding92,
        direction: this.getDirection(),
      };
    }
  };
  chunkB4BG7PRWA = defineFunctionName(
    (chunkB4BG7PRWInput15) => `g.classGroup text {
  fill: ${chunkB4BG7PRWInput15.nodeBorder || chunkB4BG7PRWInput15.classText};
  stroke: none;
  font-family: ${chunkB4BG7PRWInput15.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${chunkB4BG7PRWInput15.classText};
}
.edgeLabel .label rect {
  fill: ${chunkB4BG7PRWInput15.mainBkg};
}
.label text {
  fill: ${chunkB4BG7PRWInput15.classText};
}

.labelBkg {
  background: ${chunkB4BG7PRWInput15.mainBkg};
}
.edgeLabel .label span {
  background: ${chunkB4BG7PRWInput15.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${chunkB4BG7PRWInput15.mainBkg};
    stroke: ${chunkB4BG7PRWInput15.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${chunkB4BG7PRWInput15.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${chunkB4BG7PRWInput15.mainBkg};
  stroke: ${chunkB4BG7PRWInput15.nodeBorder};
}

g.classGroup line {
  stroke: ${chunkB4BG7PRWInput15.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${chunkB4BG7PRWInput15.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${chunkB4BG7PRWInput15.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${chunkB4BG7PRWInput15.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: transparent !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: transparent !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: transparent !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: transparent !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${chunkB4BG7PRWInput15.mainBkg} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${chunkB4BG7PRWInput15.mainBkg} !important;
  stroke: ${chunkB4BG7PRWInput15.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${chunkB4BG7PRWInput15.textColor};
}
  ${t()}
`,
    "getStyles",
  );
  chunkB4BG7PRWR = {
    getClasses: defineFunctionName(function (
      chunkB4BG7PRWInput83,
      chunkB4BG7PRWInput84,
    ) {
      return chunkB4BG7PRWInput84.db.getClasses();
    }, "getClasses"),
    draw: defineFunctionName(async function (
      chunkB4BG7PRWInput23,
      chunkB4BG7PRWInput24,
      chunkB4BG7PRWInput25,
      chunkB4BG7PRWInput26,
    ) {
      logger.info("REF0:");
      logger.info("Drawing class diagram (v3)", chunkB4BG7PRWInput24);
      let { securityLevel, state, layout } = _chunkABZYJK2DB(),
        chunkB4BG7PRWBinding121 = chunkB4BG7PRWInput26.db.getData(),
        chunkB4BG7PRWBinding122 = chunk55IACEB6T(
          chunkB4BG7PRWInput24,
          securityLevel,
        );
      chunkB4BG7PRWBinding121.type = chunkB4BG7PRWInput26.type;
      chunkB4BG7PRWBinding121.layoutAlgorithm = chunkN4CR4FBYT(layout);
      chunkB4BG7PRWBinding121.nodeSpacing = state?.nodeSpacing || 50;
      chunkB4BG7PRWBinding121.rankSpacing = state?.rankSpacing || 50;
      chunkB4BG7PRWBinding121.markers = [
        "aggregation",
        "extension",
        "composition",
        "dependency",
        "lollipop",
      ];
      chunkB4BG7PRWBinding121.diagramId = chunkB4BG7PRWInput24;
      await chunkN4CR4FBYI(chunkB4BG7PRWBinding121, chunkB4BG7PRWBinding122);
      chunkS3R3BYOJG.insertTitle(
        chunkB4BG7PRWBinding122,
        "classDiagramTitleText",
        state?.titleTopMargin ?? 25,
        chunkB4BG7PRWInput26.db.getDiagramTitle(),
      );
      chunkQN33PNHLN(
        chunkB4BG7PRWBinding122,
        8,
        "classDiagram",
        state?.useMaxWidth ?? true,
      );
    }, "draw"),
    getDir: defineFunctionName(
      (chunkB4BG7PRWInput61, chunkB4BG7PRWInput62 = "TB") => {
        if (!chunkB4BG7PRWInput61.doc) return chunkB4BG7PRWInput62;
        let chunkB4BG7PRWBinding173 = chunkB4BG7PRWInput62;
        for (let chunkB4BG7PRWBinding180 of chunkB4BG7PRWInput61.doc)
          chunkB4BG7PRWBinding180.stmt === "dir" &&
            (chunkB4BG7PRWBinding173 = chunkB4BG7PRWBinding180.value);
        return chunkB4BG7PRWBinding173;
      },
      "getDir",
    ),
  };
});
export { chunkB4BG7PRWA, chunkB4BG7PRWN, chunkB4BG7PRWR, chunkB4BG7PRWT };
