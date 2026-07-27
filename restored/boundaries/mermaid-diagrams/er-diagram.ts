// Restored from ref/webview/assets/erDiagram-Q2GNP2WA-BD1ftZqj.js
// Mermaid ER diagram definition (primary: db + renderer + parser). Unblocked by mermaid-layout-loaders.
// Stage 3 candidate: IMPORT_MAP-ready local deps (layout-loaders promoted; no app-initial edge).
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
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
  defineEnumerableGetters,
} from "../../utils/dayjs-core-alt-dup";
import { m, t, _ } from "../../vendor/khroma";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  b as _chunkABZYJK2DB,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
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
import { chunkJA3XYJ7ZA } from "./mermaid-create-text";
import { initMermaidLineOffsetChunk } from "../../diagrams/line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "../../diagrams/subgraph-title-margins";
import {
  n as chunk55IACEB6N,
  t as chunk55IACEB6T,
} from "../../diagrams/get-diagram-element";
import {
  n as chunkQN33PNHLN,
  t as chunkQN33PNHLT,
} from "../../diagrams/setup-viewport-for-svg";
import { n as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import {
  chunkN4CR4FBYI,
  chunkN4CR4FBYN,
  chunkN4CR4FBYT,
} from "../../diagrams/mermaid-layout-loaders";
var erDiagramQ2GNP2WABinding1,
  erDiagramQ2GNP2WABinding2,
  erDiagramQ2GNP2WABinding3,
  erDiagramQ2GNP2WABinding4,
  erDiagramQ2GNP2WABinding5,
  erDiagramQ2GNP2WABinding6,
  ErDiagramQ2GNP2WA;
esmInit(() => {
  chunk55IACEB6N();
  chunkQN33PNHLT();
  chunkN4CR4FBYN();
  chunkQXUST7PYN();
  initMermaidLineOffsetChunk();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  t();
  erDiagramQ2GNP2WABinding1 = (function () {
    var erDiagramQ2GNP2WABinding7 = defineFunctionName(function (
        erDiagramQ2GNP2WAInput43,
        erDiagramQ2GNP2WAInput44,
        erDiagramQ2GNP2WAInput45,
        erDiagramQ2GNP2WAInput46,
      ) {
        for (
          erDiagramQ2GNP2WAInput45 ||= {},
            erDiagramQ2GNP2WAInput46 = erDiagramQ2GNP2WAInput43.length;
          erDiagramQ2GNP2WAInput46--;
          erDiagramQ2GNP2WAInput45[
            erDiagramQ2GNP2WAInput43[erDiagramQ2GNP2WAInput46]
          ] = erDiagramQ2GNP2WAInput44
        );
        return erDiagramQ2GNP2WAInput45;
      }, "o"),
      erDiagramQ2GNP2WABinding8 = [
        6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50,
      ],
      erDiagramQ2GNP2WABinding9 = [1, 10],
      erDiagramQ2GNP2WABinding10 = [1, 11],
      erDiagramQ2GNP2WABinding11 = [1, 12],
      erDiagramQ2GNP2WABinding12 = [1, 13],
      erDiagramQ2GNP2WABinding13 = [1, 20],
      erDiagramQ2GNP2WABinding14 = [1, 21],
      erDiagramQ2GNP2WABinding15 = [1, 22],
      erDiagramQ2GNP2WABinding16 = [1, 23],
      erDiagramQ2GNP2WABinding17 = [1, 24],
      erDiagramQ2GNP2WABinding18 = [1, 19],
      erDiagramQ2GNP2WABinding19 = [1, 25],
      erDiagramQ2GNP2WABinding20 = [1, 26],
      erDiagramQ2GNP2WABinding21 = [1, 18],
      erDiagramQ2GNP2WABinding22 = [1, 33],
      erDiagramQ2GNP2WABinding23 = [1, 34],
      erDiagramQ2GNP2WABinding24 = [1, 35],
      erDiagramQ2GNP2WABinding25 = [1, 36],
      erDiagramQ2GNP2WABinding26 = [1, 37],
      erDiagramQ2GNP2WABinding27 = [
        6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40,
        43, 44, 50, 63, 64, 65, 66, 67,
      ],
      erDiagramQ2GNP2WABinding28 = [1, 42],
      erDiagramQ2GNP2WABinding29 = [1, 43],
      erDiagramQ2GNP2WABinding30 = [1, 52],
      erDiagramQ2GNP2WABinding31 = [40, 50, 68, 69],
      erDiagramQ2GNP2WABinding32 = [1, 63],
      erDiagramQ2GNP2WABinding33 = [1, 61],
      erDiagramQ2GNP2WABinding34 = [1, 58],
      erDiagramQ2GNP2WABinding35 = [1, 62],
      erDiagramQ2GNP2WABinding36 = [1, 64],
      erDiagramQ2GNP2WABinding37 = [
        6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43,
        44, 48, 49, 50, 63, 64, 65, 66, 67,
      ],
      erDiagramQ2GNP2WABinding38 = [63, 64, 65, 66, 67],
      erDiagramQ2GNP2WABinding39 = [1, 81],
      erDiagramQ2GNP2WABinding40 = [1, 80],
      erDiagramQ2GNP2WABinding41 = [1, 78],
      erDiagramQ2GNP2WABinding42 = [1, 79],
      erDiagramQ2GNP2WABinding43 = [6, 10, 42, 47],
      erDiagramQ2GNP2WABinding44 = [6, 10, 13, 41, 42, 47, 48, 49],
      erDiagramQ2GNP2WABinding45 = [1, 89],
      erDiagramQ2GNP2WABinding46 = [1, 88],
      _ErDiagramQ2GNP2WA = [1, 87],
      erDiagramQ2GNP2WABinding47 = [19, 56],
      erDiagramQ2GNP2WABinding48 = [1, 98],
      erDiagramQ2GNP2WABinding49 = [1, 97],
      erDiagramQ2GNP2WABinding50 = [19, 56, 58, 60],
      erDiagramQ2GNP2WABinding51 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          ER_DIAGRAM: 4,
          document: 5,
          EOF: 6,
          line: 7,
          SPACE: 8,
          statement: 9,
          NEWLINE: 10,
          entityName: 11,
          relSpec: 12,
          COLON: 13,
          role: 14,
          STYLE_SEPARATOR: 15,
          idList: 16,
          BLOCK_START: 17,
          attributes: 18,
          BLOCK_STOP: 19,
          SQS: 20,
          SQE: 21,
          title: 22,
          title_value: 23,
          acc_title: 24,
          acc_title_value: 25,
          acc_descr: 26,
          acc_descr_value: 27,
          acc_descr_multiline_value: 28,
          direction: 29,
          classDefStatement: 30,
          classStatement: 31,
          styleStatement: 32,
          direction_tb: 33,
          direction_bt: 34,
          direction_rl: 35,
          direction_lr: 36,
          CLASSDEF: 37,
          stylesOpt: 38,
          separator: 39,
          UNICODE_TEXT: 40,
          STYLE_TEXT: 41,
          COMMA: 42,
          CLASS: 43,
          STYLE: 44,
          style: 45,
          styleComponent: 46,
          SEMI: 47,
          NUM: 48,
          BRKT: 49,
          ENTITY_NAME: 50,
          attribute: 51,
          attributeType: 52,
          attributeName: 53,
          attributeKeyTypeList: 54,
          attributeComment: 55,
          ATTRIBUTE_WORD: 56,
          attributeKeyType: 57,
          ",": 58,
          ATTRIBUTE_KEY: 59,
          COMMENT: 60,
          cardinality: 61,
          relType: 62,
          ZERO_OR_ONE: 63,
          ZERO_OR_MORE: 64,
          ONE_OR_MORE: 65,
          ONLY_ONE: 66,
          MD_PARENT: 67,
          NON_IDENTIFYING: 68,
          IDENTIFYING: 69,
          WORD: 70,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "ER_DIAGRAM",
          6: "EOF",
          8: "SPACE",
          10: "NEWLINE",
          13: "COLON",
          15: "STYLE_SEPARATOR",
          17: "BLOCK_START",
          19: "BLOCK_STOP",
          20: "SQS",
          21: "SQE",
          22: "title",
          23: "title_value",
          24: "acc_title",
          25: "acc_title_value",
          26: "acc_descr",
          27: "acc_descr_value",
          28: "acc_descr_multiline_value",
          33: "direction_tb",
          34: "direction_bt",
          35: "direction_rl",
          36: "direction_lr",
          37: "CLASSDEF",
          40: "UNICODE_TEXT",
          41: "STYLE_TEXT",
          42: "COMMA",
          43: "CLASS",
          44: "STYLE",
          47: "SEMI",
          48: "NUM",
          49: "BRKT",
          50: "ENTITY_NAME",
          56: "ATTRIBUTE_WORD",
          58: ",",
          59: "ATTRIBUTE_KEY",
          60: "COMMENT",
          63: "ZERO_OR_ONE",
          64: "ZERO_OR_MORE",
          65: "ONE_OR_MORE",
          66: "ONLY_ONE",
          67: "MD_PARENT",
          68: "NON_IDENTIFYING",
          69: "IDENTIFYING",
          70: "WORD",
        },
        productions_: [
          0,
          [3, 3],
          [5, 0],
          [5, 2],
          [7, 2],
          [7, 1],
          [7, 1],
          [7, 1],
          [9, 5],
          [9, 9],
          [9, 7],
          [9, 7],
          [9, 4],
          [9, 6],
          [9, 3],
          [9, 5],
          [9, 1],
          [9, 3],
          [9, 7],
          [9, 9],
          [9, 6],
          [9, 8],
          [9, 4],
          [9, 6],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [29, 1],
          [29, 1],
          [29, 1],
          [29, 1],
          [30, 4],
          [16, 1],
          [16, 1],
          [16, 3],
          [16, 3],
          [31, 3],
          [32, 4],
          [38, 1],
          [38, 3],
          [45, 1],
          [45, 2],
          [39, 1],
          [39, 1],
          [39, 1],
          [46, 1],
          [46, 1],
          [46, 1],
          [46, 1],
          [11, 1],
          [11, 1],
          [18, 1],
          [18, 2],
          [51, 2],
          [51, 3],
          [51, 3],
          [51, 4],
          [52, 1],
          [53, 1],
          [54, 1],
          [54, 3],
          [57, 1],
          [55, 1],
          [12, 3],
          [61, 1],
          [61, 1],
          [61, 1],
          [61, 1],
          [61, 1],
          [62, 1],
          [62, 1],
          [14, 1],
          [14, 1],
          [14, 1],
        ],
        performAction: defineFunctionName(function (
          erDiagramQ2GNP2WAInput1,
          erDiagramQ2GNP2WAInput2,
          erDiagramQ2GNP2WAInput3,
          erDiagramQ2GNP2WAInput4,
          erDiagramQ2GNP2WAInput5,
          erDiagramQ2GNP2WAInput6,
          erDiagramQ2GNP2WAInput7,
        ) {
          var erDiagramQ2GNP2WABinding52 = erDiagramQ2GNP2WAInput6.length - 1;
          switch (erDiagramQ2GNP2WAInput5) {
            case 1:
              break;
            case 2:
              this.$ = [];
              break;
            case 3:
              erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1].push(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1];
              break;
            case 4:
            case 5:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              erDiagramQ2GNP2WAInput4.addRelationship(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              break;
            case 9:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8],
              );
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              erDiagramQ2GNP2WAInput4.addRelationship(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              break;
            case 10:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
              );
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              erDiagramQ2GNP2WAInput4.addRelationship(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              break;
            case 11:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
              );
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              erDiagramQ2GNP2WAInput4.addRelationship(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              break;
            case 12:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              erDiagramQ2GNP2WAInput4.addAttributes(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              break;
            case 13:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
              );
              erDiagramQ2GNP2WAInput4.addAttributes(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              break;
            case 14:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              break;
            case 15:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              break;
            case 16:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              break;
            case 17:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              break;
            case 18:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 4],
              );
              erDiagramQ2GNP2WAInput4.addAttributes(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              break;
            case 19:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 6],
              );
              erDiagramQ2GNP2WAInput4.addAttributes(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 8]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              break;
            case 20:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              break;
            case 21:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 7],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 7]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              );
              break;
            case 22:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              break;
            case 23:
              erDiagramQ2GNP2WAInput4.addEntity(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
              );
              erDiagramQ2GNP2WAInput4.setClass(
                [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 5]],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              break;
            case 24:
            case 25:
              this.$ =
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52].trim();
              erDiagramQ2GNP2WAInput4.setAccTitle(this.$);
              break;
            case 26:
            case 27:
              this.$ =
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52].trim();
              erDiagramQ2GNP2WAInput4.setAccDescription(this.$);
              break;
            case 32:
              erDiagramQ2GNP2WAInput4.setDirection("TB");
              break;
            case 33:
              erDiagramQ2GNP2WAInput4.setDirection("BT");
              break;
            case 34:
              erDiagramQ2GNP2WAInput4.setDirection("RL");
              break;
            case 35:
              erDiagramQ2GNP2WAInput4.setDirection("LR");
              break;
            case 36:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3];
              erDiagramQ2GNP2WAInput4.addClass(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              break;
            case 37:
            case 38:
            case 56:
            case 64:
              this.$ = [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52]];
              break;
            case 39:
            case 40:
              this.$ = erDiagramQ2GNP2WAInput6[
                erDiagramQ2GNP2WABinding52 - 2
              ].concat([erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52]]);
              break;
            case 41:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2];
              erDiagramQ2GNP2WAInput4.setClass(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              break;
            case 42:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3];
              erDiagramQ2GNP2WAInput4.addCssStyles(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              break;
            case 43:
              this.$ = [erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52]];
              break;
            case 44:
              erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2].push(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2];
              break;
            case 46:
              this.$ =
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1] +
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52];
              break;
            case 54:
            case 76:
            case 77:
              this.$ = erDiagramQ2GNP2WAInput6[
                erDiagramQ2GNP2WABinding52
              ].replace(/"/g, "");
              break;
            case 55:
            case 78:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52];
              break;
            case 57:
              erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52].push(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
              );
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52];
              break;
            case 58:
              this.$ = {
                type: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                name: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              };
              break;
            case 59:
              this.$ = {
                type: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                name: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                keys: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              };
              break;
            case 60:
              this.$ = {
                type: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                name: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                comment: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              };
              break;
            case 61:
              this.$ = {
                type: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 3],
                name: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
                keys: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                comment: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              };
              break;
            case 62:
            case 63:
            case 66:
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52];
              break;
            case 65:
              erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2].push(
                erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
              );
              this.$ = erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2];
              break;
            case 67:
              this.$ = erDiagramQ2GNP2WAInput6[
                erDiagramQ2GNP2WABinding52
              ].replace(/"/g, "");
              break;
            case 68:
              this.$ = {
                cardA: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52],
                relType:
                  erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 1],
                cardB: erDiagramQ2GNP2WAInput6[erDiagramQ2GNP2WABinding52 - 2],
              };
              break;
            case 69:
              this.$ = erDiagramQ2GNP2WAInput4.Cardinality.ZERO_OR_ONE;
              break;
            case 70:
              this.$ = erDiagramQ2GNP2WAInput4.Cardinality.ZERO_OR_MORE;
              break;
            case 71:
              this.$ = erDiagramQ2GNP2WAInput4.Cardinality.ONE_OR_MORE;
              break;
            case 72:
              this.$ = erDiagramQ2GNP2WAInput4.Cardinality.ONLY_ONE;
              break;
            case 73:
              this.$ = erDiagramQ2GNP2WAInput4.Cardinality.MD_PARENT;
              break;
            case 74:
              this.$ = erDiagramQ2GNP2WAInput4.Identification.NON_IDENTIFYING;
              break;
            case 75:
              this.$ = erDiagramQ2GNP2WAInput4.Identification.IDENTIFYING;
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: [1, 2],
          },
          {
            1: [3],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 9,
            22: erDiagramQ2GNP2WABinding9,
            24: erDiagramQ2GNP2WABinding10,
            26: erDiagramQ2GNP2WABinding11,
            28: erDiagramQ2GNP2WABinding12,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: erDiagramQ2GNP2WABinding13,
            34: erDiagramQ2GNP2WABinding14,
            35: erDiagramQ2GNP2WABinding15,
            36: erDiagramQ2GNP2WABinding16,
            37: erDiagramQ2GNP2WABinding17,
            40: erDiagramQ2GNP2WABinding18,
            43: erDiagramQ2GNP2WABinding19,
            44: erDiagramQ2GNP2WABinding20,
            50: erDiagramQ2GNP2WABinding21,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 7], {
            1: [2, 1],
          }),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 3]),
          {
            9: 27,
            11: 9,
            22: erDiagramQ2GNP2WABinding9,
            24: erDiagramQ2GNP2WABinding10,
            26: erDiagramQ2GNP2WABinding11,
            28: erDiagramQ2GNP2WABinding12,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: erDiagramQ2GNP2WABinding13,
            34: erDiagramQ2GNP2WABinding14,
            35: erDiagramQ2GNP2WABinding15,
            36: erDiagramQ2GNP2WABinding16,
            37: erDiagramQ2GNP2WABinding17,
            40: erDiagramQ2GNP2WABinding18,
            43: erDiagramQ2GNP2WABinding19,
            44: erDiagramQ2GNP2WABinding20,
            50: erDiagramQ2GNP2WABinding21,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 5]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 6]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 16], {
            12: 28,
            61: 32,
            15: [1, 29],
            17: [1, 30],
            20: [1, 31],
            63: erDiagramQ2GNP2WABinding22,
            64: erDiagramQ2GNP2WABinding23,
            65: erDiagramQ2GNP2WABinding24,
            66: erDiagramQ2GNP2WABinding25,
            67: erDiagramQ2GNP2WABinding26,
          }),
          {
            23: [1, 38],
          },
          {
            25: [1, 39],
          },
          {
            27: [1, 40],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 27]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 28]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 29]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 30]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 31]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding27, [2, 54]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding27, [2, 55]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 32]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 33]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 34]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 35]),
          {
            16: 41,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          {
            16: 44,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          {
            16: 45,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 4]),
          {
            11: 46,
            40: erDiagramQ2GNP2WABinding18,
            50: erDiagramQ2GNP2WABinding21,
          },
          {
            16: 47,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          {
            18: 48,
            19: [1, 49],
            51: 50,
            52: 51,
            56: erDiagramQ2GNP2WABinding30,
          },
          {
            11: 53,
            40: erDiagramQ2GNP2WABinding18,
            50: erDiagramQ2GNP2WABinding21,
          },
          {
            62: 54,
            68: [1, 55],
            69: [1, 56],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding31, [2, 69]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding31, [2, 70]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding31, [2, 71]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding31, [2, 72]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding31, [2, 73]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 24]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 25]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 26]),
          {
            13: erDiagramQ2GNP2WABinding32,
            38: 57,
            41: erDiagramQ2GNP2WABinding33,
            42: erDiagramQ2GNP2WABinding34,
            45: 59,
            46: 60,
            48: erDiagramQ2GNP2WABinding35,
            49: erDiagramQ2GNP2WABinding36,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding37, [2, 37]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding37, [2, 38]),
          {
            16: 65,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
            42: erDiagramQ2GNP2WABinding34,
          },
          {
            13: erDiagramQ2GNP2WABinding32,
            38: 66,
            41: erDiagramQ2GNP2WABinding33,
            42: erDiagramQ2GNP2WABinding34,
            45: 59,
            46: 60,
            48: erDiagramQ2GNP2WABinding35,
            49: erDiagramQ2GNP2WABinding36,
          },
          {
            13: [1, 67],
            15: [1, 68],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 17], {
            61: 32,
            12: 69,
            17: [1, 70],
            42: erDiagramQ2GNP2WABinding34,
            63: erDiagramQ2GNP2WABinding22,
            64: erDiagramQ2GNP2WABinding23,
            65: erDiagramQ2GNP2WABinding24,
            66: erDiagramQ2GNP2WABinding25,
            67: erDiagramQ2GNP2WABinding26,
          }),
          {
            19: [1, 71],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 14]),
          {
            18: 72,
            19: [2, 56],
            51: 50,
            52: 51,
            56: erDiagramQ2GNP2WABinding30,
          },
          {
            53: 73,
            56: [1, 74],
          },
          {
            56: [2, 62],
          },
          {
            21: [1, 75],
          },
          {
            61: 76,
            63: erDiagramQ2GNP2WABinding22,
            64: erDiagramQ2GNP2WABinding23,
            65: erDiagramQ2GNP2WABinding24,
            66: erDiagramQ2GNP2WABinding25,
            67: erDiagramQ2GNP2WABinding26,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding38, [2, 74]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding38, [2, 75]),
          {
            6: erDiagramQ2GNP2WABinding39,
            10: erDiagramQ2GNP2WABinding40,
            39: 77,
            42: erDiagramQ2GNP2WABinding41,
            47: erDiagramQ2GNP2WABinding42,
          },
          {
            40: [1, 82],
            41: [1, 83],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding43, [2, 43], {
            46: 84,
            13: erDiagramQ2GNP2WABinding32,
            41: erDiagramQ2GNP2WABinding33,
            48: erDiagramQ2GNP2WABinding35,
            49: erDiagramQ2GNP2WABinding36,
          }),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 45]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 50]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 51]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 52]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 53]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 41], {
            42: erDiagramQ2GNP2WABinding34,
          }),
          {
            6: erDiagramQ2GNP2WABinding39,
            10: erDiagramQ2GNP2WABinding40,
            39: 85,
            42: erDiagramQ2GNP2WABinding41,
            47: erDiagramQ2GNP2WABinding42,
          },
          {
            14: 86,
            40: erDiagramQ2GNP2WABinding45,
            50: erDiagramQ2GNP2WABinding46,
            70: _ErDiagramQ2GNP2WA,
          },
          {
            16: 90,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          {
            11: 91,
            40: erDiagramQ2GNP2WABinding18,
            50: erDiagramQ2GNP2WABinding21,
          },
          {
            18: 92,
            19: [1, 93],
            51: 50,
            52: 51,
            56: erDiagramQ2GNP2WABinding30,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 12]),
          {
            19: [2, 57],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding47, [2, 58], {
            54: 94,
            55: 95,
            57: 96,
            59: erDiagramQ2GNP2WABinding48,
            60: erDiagramQ2GNP2WABinding49,
          }),
          erDiagramQ2GNP2WABinding7([19, 56, 59, 60], [2, 63]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 22], {
            15: [1, 100],
            17: [1, 99],
          }),
          erDiagramQ2GNP2WABinding7([40, 50], [2, 68]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 36]),
          {
            13: erDiagramQ2GNP2WABinding32,
            41: erDiagramQ2GNP2WABinding33,
            45: 101,
            46: 60,
            48: erDiagramQ2GNP2WABinding35,
            49: erDiagramQ2GNP2WABinding36,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 47]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 48]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 49]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding37, [2, 39]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding37, [2, 40]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding44, [2, 46]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 42]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 8]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 76]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 77]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 78]),
          {
            13: [1, 102],
            42: erDiagramQ2GNP2WABinding34,
          },
          {
            13: [1, 104],
            15: [1, 103],
          },
          {
            19: [1, 105],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 15]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding47, [2, 59], {
            55: 106,
            58: [1, 107],
            60: erDiagramQ2GNP2WABinding49,
          }),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding47, [2, 60]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding50, [2, 64]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding47, [2, 67]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding50, [2, 66]),
          {
            18: 108,
            19: [1, 109],
            51: 50,
            52: 51,
            56: erDiagramQ2GNP2WABinding30,
          },
          {
            16: 110,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding43, [2, 44], {
            46: 84,
            13: erDiagramQ2GNP2WABinding32,
            41: erDiagramQ2GNP2WABinding33,
            48: erDiagramQ2GNP2WABinding35,
            49: erDiagramQ2GNP2WABinding36,
          }),
          {
            14: 111,
            40: erDiagramQ2GNP2WABinding45,
            50: erDiagramQ2GNP2WABinding46,
            70: _ErDiagramQ2GNP2WA,
          },
          {
            16: 112,
            40: erDiagramQ2GNP2WABinding28,
            41: erDiagramQ2GNP2WABinding29,
          },
          {
            14: 113,
            40: erDiagramQ2GNP2WABinding45,
            50: erDiagramQ2GNP2WABinding46,
            70: _ErDiagramQ2GNP2WA,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 13]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding47, [2, 61]),
          {
            57: 114,
            59: erDiagramQ2GNP2WABinding48,
          },
          {
            19: [1, 115],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 20]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 23], {
            17: [1, 116],
            42: erDiagramQ2GNP2WABinding34,
          }),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 11]),
          {
            13: [1, 117],
            42: erDiagramQ2GNP2WABinding34,
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 10]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding50, [2, 65]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 18]),
          {
            18: 118,
            19: [1, 119],
            51: 50,
            52: 51,
            56: erDiagramQ2GNP2WABinding30,
          },
          {
            14: 120,
            40: erDiagramQ2GNP2WABinding45,
            50: erDiagramQ2GNP2WABinding46,
            70: _ErDiagramQ2GNP2WA,
          },
          {
            19: [1, 121],
          },
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 21]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 9]),
          erDiagramQ2GNP2WABinding7(erDiagramQ2GNP2WABinding8, [2, 19]),
        ],
        defaultActions: {
          52: [2, 62],
          72: [2, 57],
        },
        parseError: defineFunctionName(function (
          erDiagramQ2GNP2WAInput37,
          erDiagramQ2GNP2WAInput38,
        ) {
          if (erDiagramQ2GNP2WAInput38.recoverable)
            this.trace(erDiagramQ2GNP2WAInput37);
          else {
            var erDiagramQ2GNP2WABinding125 = Error(erDiagramQ2GNP2WAInput37);
            throw (
              (erDiagramQ2GNP2WABinding125.hash = erDiagramQ2GNP2WAInput38),
              erDiagramQ2GNP2WABinding125
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (erDiagramQ2GNP2WAInput8) {
          var erDiagramQ2GNP2WABinding53 = this,
            erDiagramQ2GNP2WABinding54 = [0],
            erDiagramQ2GNP2WABinding55 = [],
            erDiagramQ2GNP2WABinding56 = [null],
            erDiagramQ2GNP2WABinding57 = [],
            erDiagramQ2GNP2WABinding58 = this.table,
            erDiagramQ2GNP2WABinding59 = "",
            erDiagramQ2GNP2WABinding60 = 0,
            erDiagramQ2GNP2WABinding61 = 0,
            erDiagramQ2GNP2WABinding62 = 0,
            erDiagramQ2GNP2WABinding65 = erDiagramQ2GNP2WABinding57.slice.call(
              arguments,
              1,
            ),
            erDiagramQ2GNP2WABinding66 = Object.create(this.lexer),
            erDiagramQ2GNP2WABinding67 = {
              yy: {},
            };
          for (var erDiagramQ2GNP2WABinding68 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              erDiagramQ2GNP2WABinding68,
            ) &&
              (erDiagramQ2GNP2WABinding67.yy[erDiagramQ2GNP2WABinding68] =
                this.yy[erDiagramQ2GNP2WABinding68]);
          erDiagramQ2GNP2WABinding66.setInput(
            erDiagramQ2GNP2WAInput8,
            erDiagramQ2GNP2WABinding67.yy,
          );
          erDiagramQ2GNP2WABinding67.yy.lexer = erDiagramQ2GNP2WABinding66;
          erDiagramQ2GNP2WABinding67.yy.parser = this;
          erDiagramQ2GNP2WABinding66.yylloc === undefined &&
            (erDiagramQ2GNP2WABinding66.yylloc = {});
          var erDiagramQ2GNP2WABinding69 = erDiagramQ2GNP2WABinding66.yylloc;
          erDiagramQ2GNP2WABinding57.push(erDiagramQ2GNP2WABinding69);
          var erDiagramQ2GNP2WABinding70 =
            erDiagramQ2GNP2WABinding66.options &&
            erDiagramQ2GNP2WABinding66.options.ranges;
          typeof erDiagramQ2GNP2WABinding67.yy.parseError == "function"
            ? (this.parseError = erDiagramQ2GNP2WABinding67.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function erDiagramQ2GNP2WAHelper2(erDiagramQ2GNP2WAInput47) {
            erDiagramQ2GNP2WABinding54.length -= 2 * erDiagramQ2GNP2WAInput47;
            erDiagramQ2GNP2WABinding56.length -= erDiagramQ2GNP2WAInput47;
            erDiagramQ2GNP2WABinding57.length -= erDiagramQ2GNP2WAInput47;
          }
          defineFunctionName(erDiagramQ2GNP2WAHelper2, "popStack");
          function erDiagramQ2GNP2WAHelper3() {
            var erDiagramQ2GNP2WABinding114 =
              erDiagramQ2GNP2WABinding55.pop() ||
              erDiagramQ2GNP2WABinding66.lex() ||
              1;
            return (
              typeof erDiagramQ2GNP2WABinding114 != "number" &&
                (erDiagramQ2GNP2WABinding114 instanceof Array &&
                  ((erDiagramQ2GNP2WABinding55 = erDiagramQ2GNP2WABinding114),
                  (erDiagramQ2GNP2WABinding114 =
                    erDiagramQ2GNP2WABinding55.pop())),
                (erDiagramQ2GNP2WABinding114 =
                  erDiagramQ2GNP2WABinding53.symbols_[
                    erDiagramQ2GNP2WABinding114
                  ] || erDiagramQ2GNP2WABinding114)),
              erDiagramQ2GNP2WABinding114
            );
          }
          defineFunctionName(erDiagramQ2GNP2WAHelper3, "lex");
          for (
            var erDiagramQ2GNP2WABinding71,
              erDiagramQ2GNP2WABinding72,
              erDiagramQ2GNP2WABinding73,
              erDiagramQ2GNP2WABinding74,
              erDiagramQ2GNP2WABinding75,
              erDiagramQ2GNP2WABinding76 = {},
              erDiagramQ2GNP2WABinding77,
              erDiagramQ2GNP2WABinding78,
              erDiagramQ2GNP2WABinding79,
              erDiagramQ2GNP2WABinding80;
            ;
          ) {
            if (
              ((erDiagramQ2GNP2WABinding73 =
                erDiagramQ2GNP2WABinding54[
                  erDiagramQ2GNP2WABinding54.length - 1
                ]),
              this.defaultActions[erDiagramQ2GNP2WABinding73]
                ? (erDiagramQ2GNP2WABinding74 =
                    this.defaultActions[erDiagramQ2GNP2WABinding73])
                : ((erDiagramQ2GNP2WABinding71 ??= erDiagramQ2GNP2WAHelper3()),
                  (erDiagramQ2GNP2WABinding74 =
                    erDiagramQ2GNP2WABinding58[erDiagramQ2GNP2WABinding73] &&
                    erDiagramQ2GNP2WABinding58[erDiagramQ2GNP2WABinding73][
                      erDiagramQ2GNP2WABinding71
                    ])),
              erDiagramQ2GNP2WABinding74 === undefined ||
                !erDiagramQ2GNP2WABinding74.length ||
                !erDiagramQ2GNP2WABinding74[0])
            ) {
              var erDiagramQ2GNP2WABinding81 = "";
              for (erDiagramQ2GNP2WABinding77 in ((erDiagramQ2GNP2WABinding80 =
                []),
              erDiagramQ2GNP2WABinding58[erDiagramQ2GNP2WABinding73]))
                this.terminals_[erDiagramQ2GNP2WABinding77] &&
                  erDiagramQ2GNP2WABinding77 > 2 &&
                  erDiagramQ2GNP2WABinding80.push(
                    "'" + this.terminals_[erDiagramQ2GNP2WABinding77] + "'",
                  );
              erDiagramQ2GNP2WABinding81 =
                erDiagramQ2GNP2WABinding66.showPosition
                  ? "Parse error on line " +
                    (erDiagramQ2GNP2WABinding60 + 1) +
                    ":\n" +
                    erDiagramQ2GNP2WABinding66.showPosition() +
                    "\nExpecting " +
                    erDiagramQ2GNP2WABinding80.join(", ") +
                    ", got '" +
                    (this.terminals_[erDiagramQ2GNP2WABinding71] ||
                      erDiagramQ2GNP2WABinding71) +
                    "'"
                  : "Parse error on line " +
                    (erDiagramQ2GNP2WABinding60 + 1) +
                    ": Unexpected " +
                    (erDiagramQ2GNP2WABinding71 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[erDiagramQ2GNP2WABinding71] ||
                          erDiagramQ2GNP2WABinding71) +
                        "'");
              this.parseError(erDiagramQ2GNP2WABinding81, {
                text: erDiagramQ2GNP2WABinding66.match,
                token:
                  this.terminals_[erDiagramQ2GNP2WABinding71] ||
                  erDiagramQ2GNP2WABinding71,
                line: erDiagramQ2GNP2WABinding66.yylineno,
                loc: erDiagramQ2GNP2WABinding69,
                expected: erDiagramQ2GNP2WABinding80,
              });
            }
            if (
              erDiagramQ2GNP2WABinding74[0] instanceof Array &&
              erDiagramQ2GNP2WABinding74.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  erDiagramQ2GNP2WABinding73 +
                  ", token: " +
                  erDiagramQ2GNP2WABinding71,
              );
            switch (erDiagramQ2GNP2WABinding74[0]) {
              case 1:
                erDiagramQ2GNP2WABinding54.push(erDiagramQ2GNP2WABinding71);
                erDiagramQ2GNP2WABinding56.push(
                  erDiagramQ2GNP2WABinding66.yytext,
                );
                erDiagramQ2GNP2WABinding57.push(
                  erDiagramQ2GNP2WABinding66.yylloc,
                );
                erDiagramQ2GNP2WABinding54.push(erDiagramQ2GNP2WABinding74[1]);
                erDiagramQ2GNP2WABinding71 = null;
                erDiagramQ2GNP2WABinding72
                  ? ((erDiagramQ2GNP2WABinding71 = erDiagramQ2GNP2WABinding72),
                    (erDiagramQ2GNP2WABinding72 = null))
                  : ((erDiagramQ2GNP2WABinding61 =
                      erDiagramQ2GNP2WABinding66.yyleng),
                    (erDiagramQ2GNP2WABinding59 =
                      erDiagramQ2GNP2WABinding66.yytext),
                    (erDiagramQ2GNP2WABinding60 =
                      erDiagramQ2GNP2WABinding66.yylineno),
                    (erDiagramQ2GNP2WABinding69 =
                      erDiagramQ2GNP2WABinding66.yylloc),
                    erDiagramQ2GNP2WABinding62 > 0 &&
                      erDiagramQ2GNP2WABinding62--);
                break;
              case 2:
                if (
                  ((erDiagramQ2GNP2WABinding78 =
                    this.productions_[erDiagramQ2GNP2WABinding74[1]][1]),
                  (erDiagramQ2GNP2WABinding76.$ =
                    erDiagramQ2GNP2WABinding56[
                      erDiagramQ2GNP2WABinding56.length -
                        erDiagramQ2GNP2WABinding78
                    ]),
                  (erDiagramQ2GNP2WABinding76._$ = {
                    first_line:
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length -
                          (erDiagramQ2GNP2WABinding78 || 1)
                      ].first_line,
                    last_line:
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length - 1
                      ].last_line,
                    first_column:
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length -
                          (erDiagramQ2GNP2WABinding78 || 1)
                      ].first_column,
                    last_column:
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length - 1
                      ].last_column,
                  }),
                  erDiagramQ2GNP2WABinding70 &&
                    (erDiagramQ2GNP2WABinding76._$.range = [
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length -
                          (erDiagramQ2GNP2WABinding78 || 1)
                      ].range[0],
                      erDiagramQ2GNP2WABinding57[
                        erDiagramQ2GNP2WABinding57.length - 1
                      ].range[1],
                    ]),
                  (erDiagramQ2GNP2WABinding75 = this.performAction.apply(
                    erDiagramQ2GNP2WABinding76,
                    [
                      erDiagramQ2GNP2WABinding59,
                      erDiagramQ2GNP2WABinding61,
                      erDiagramQ2GNP2WABinding60,
                      erDiagramQ2GNP2WABinding67.yy,
                      erDiagramQ2GNP2WABinding74[1],
                      erDiagramQ2GNP2WABinding56,
                      erDiagramQ2GNP2WABinding57,
                    ].concat(erDiagramQ2GNP2WABinding65),
                  )),
                  erDiagramQ2GNP2WABinding75 !== undefined)
                )
                  return erDiagramQ2GNP2WABinding75;
                erDiagramQ2GNP2WABinding78 &&
                  ((erDiagramQ2GNP2WABinding54 =
                    erDiagramQ2GNP2WABinding54.slice(
                      0,
                      -1 * erDiagramQ2GNP2WABinding78 * 2,
                    )),
                  (erDiagramQ2GNP2WABinding56 =
                    erDiagramQ2GNP2WABinding56.slice(
                      0,
                      -1 * erDiagramQ2GNP2WABinding78,
                    )),
                  (erDiagramQ2GNP2WABinding57 =
                    erDiagramQ2GNP2WABinding57.slice(
                      0,
                      -1 * erDiagramQ2GNP2WABinding78,
                    )));
                erDiagramQ2GNP2WABinding54.push(
                  this.productions_[erDiagramQ2GNP2WABinding74[1]][0],
                );
                erDiagramQ2GNP2WABinding56.push(erDiagramQ2GNP2WABinding76.$);
                erDiagramQ2GNP2WABinding57.push(erDiagramQ2GNP2WABinding76._$);
                erDiagramQ2GNP2WABinding79 =
                  erDiagramQ2GNP2WABinding58[
                    erDiagramQ2GNP2WABinding54[
                      erDiagramQ2GNP2WABinding54.length - 2
                    ]
                  ][
                    erDiagramQ2GNP2WABinding54[
                      erDiagramQ2GNP2WABinding54.length - 1
                    ]
                  ];
                erDiagramQ2GNP2WABinding54.push(erDiagramQ2GNP2WABinding79);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    erDiagramQ2GNP2WABinding51.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          erDiagramQ2GNP2WAInput41,
          erDiagramQ2GNP2WAInput42,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              erDiagramQ2GNP2WAInput41,
              erDiagramQ2GNP2WAInput42,
            );
          else throw Error(erDiagramQ2GNP2WAInput41);
        }, "parseError"),
        setInput: defineFunctionName(function (
          erDiagramQ2GNP2WAInput23,
          erDiagramQ2GNP2WAInput24,
        ) {
          return (
            (this.yy = erDiagramQ2GNP2WAInput24 || this.yy || {}),
            (this._input = erDiagramQ2GNP2WAInput23),
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
          var erDiagramQ2GNP2WABinding105 = this._input[0];
          return (
            (this.yytext += erDiagramQ2GNP2WABinding105),
            this.yyleng++,
            this.offset++,
            (this.match += erDiagramQ2GNP2WABinding105),
            (this.matched += erDiagramQ2GNP2WABinding105),
            erDiagramQ2GNP2WABinding105.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            erDiagramQ2GNP2WABinding105
          );
        }, "input"),
        unput: defineFunctionName(function (erDiagramQ2GNP2WAInput19) {
          var erDiagramQ2GNP2WABinding95 = erDiagramQ2GNP2WAInput19.length,
            erDiagramQ2GNP2WABinding96 =
              erDiagramQ2GNP2WAInput19.split(/(?:\r\n?|\n)/g);
          this._input = erDiagramQ2GNP2WAInput19 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - erDiagramQ2GNP2WABinding95,
          );
          this.offset -= erDiagramQ2GNP2WABinding95;
          var erDiagramQ2GNP2WABinding97 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          erDiagramQ2GNP2WABinding96.length - 1 &&
            (this.yylineno -= erDiagramQ2GNP2WABinding96.length - 1);
          var erDiagramQ2GNP2WABinding98 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: erDiagramQ2GNP2WABinding96
                ? (erDiagramQ2GNP2WABinding96.length ===
                  erDiagramQ2GNP2WABinding97.length
                    ? this.yylloc.first_column
                    : 0) +
                  erDiagramQ2GNP2WABinding97[
                    erDiagramQ2GNP2WABinding97.length -
                      erDiagramQ2GNP2WABinding96.length
                  ].length -
                  erDiagramQ2GNP2WABinding96[0].length
                : this.yylloc.first_column - erDiagramQ2GNP2WABinding95,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                erDiagramQ2GNP2WABinding98[0],
                erDiagramQ2GNP2WABinding98[0] +
                  this.yyleng -
                  erDiagramQ2GNP2WABinding95,
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
        less: defineFunctionName(function (erDiagramQ2GNP2WAInput50) {
          this.unput(this.match.slice(erDiagramQ2GNP2WAInput50));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var erDiagramQ2GNP2WABinding118 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (erDiagramQ2GNP2WABinding118.length > 20 ? "..." : "") +
            erDiagramQ2GNP2WABinding118.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var erDiagramQ2GNP2WABinding110 = this.match;
          return (
            erDiagramQ2GNP2WABinding110.length < 20 &&
              (erDiagramQ2GNP2WABinding110 += this._input.substr(
                0,
                20 - erDiagramQ2GNP2WABinding110.length,
              )),
            (
              erDiagramQ2GNP2WABinding110.substr(0, 20) +
              (erDiagramQ2GNP2WABinding110.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var erDiagramQ2GNP2WABinding119 = this.pastInput(),
            erDiagramQ2GNP2WABinding120 = Array(
              erDiagramQ2GNP2WABinding119.length + 1,
            ).join("-");
          return (
            erDiagramQ2GNP2WABinding119 +
            this.upcomingInput() +
            "\n" +
            erDiagramQ2GNP2WABinding120 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          erDiagramQ2GNP2WAInput13,
          erDiagramQ2GNP2WAInput14,
        ) {
          var erDiagramQ2GNP2WABinding82,
            erDiagramQ2GNP2WABinding83,
            erDiagramQ2GNP2WABinding84;
          if (
            (this.options.backtrack_lexer &&
              ((erDiagramQ2GNP2WABinding84 = {
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
                (erDiagramQ2GNP2WABinding84.yylloc.range =
                  this.yylloc.range.slice(0))),
            (erDiagramQ2GNP2WABinding83 =
              erDiagramQ2GNP2WAInput13[0].match(/(?:\r\n?|\n).*/g)),
            erDiagramQ2GNP2WABinding83 &&
              (this.yylineno += erDiagramQ2GNP2WABinding83.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: erDiagramQ2GNP2WABinding83
                ? erDiagramQ2GNP2WABinding83[
                    erDiagramQ2GNP2WABinding83.length - 1
                  ].length -
                  erDiagramQ2GNP2WABinding83[
                    erDiagramQ2GNP2WABinding83.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + erDiagramQ2GNP2WAInput13[0].length,
            }),
            (this.yytext += erDiagramQ2GNP2WAInput13[0]),
            (this.match += erDiagramQ2GNP2WAInput13[0]),
            (this.matches = erDiagramQ2GNP2WAInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              erDiagramQ2GNP2WAInput13[0].length,
            )),
            (this.matched += erDiagramQ2GNP2WAInput13[0]),
            (erDiagramQ2GNP2WABinding82 = this.performAction.call(
              this,
              this.yy,
              this,
              erDiagramQ2GNP2WAInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            erDiagramQ2GNP2WABinding82)
          )
            return erDiagramQ2GNP2WABinding82;
          if (this._backtrack) {
            for (var erDiagramQ2GNP2WABinding85 in erDiagramQ2GNP2WABinding84)
              this[erDiagramQ2GNP2WABinding85] =
                erDiagramQ2GNP2WABinding84[erDiagramQ2GNP2WABinding85];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var erDiagramQ2GNP2WABinding89,
            erDiagramQ2GNP2WABinding90,
            erDiagramQ2GNP2WABinding91,
            erDiagramQ2GNP2WABinding92;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var erDiagramQ2GNP2WABinding93 = this._currentRules(),
              erDiagramQ2GNP2WABinding94 = 0;
            erDiagramQ2GNP2WABinding94 < erDiagramQ2GNP2WABinding93.length;
            erDiagramQ2GNP2WABinding94++
          )
            if (
              ((erDiagramQ2GNP2WABinding91 = this._input.match(
                this.rules[
                  erDiagramQ2GNP2WABinding93[erDiagramQ2GNP2WABinding94]
                ],
              )),
              erDiagramQ2GNP2WABinding91 &&
                (!erDiagramQ2GNP2WABinding90 ||
                  erDiagramQ2GNP2WABinding91[0].length >
                    erDiagramQ2GNP2WABinding90[0].length))
            ) {
              if (
                ((erDiagramQ2GNP2WABinding90 = erDiagramQ2GNP2WABinding91),
                (erDiagramQ2GNP2WABinding92 = erDiagramQ2GNP2WABinding94),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((erDiagramQ2GNP2WABinding89 = this.test_match(
                    erDiagramQ2GNP2WABinding91,
                    erDiagramQ2GNP2WABinding93[erDiagramQ2GNP2WABinding94],
                  )),
                  erDiagramQ2GNP2WABinding89 !== false)
                )
                  return erDiagramQ2GNP2WABinding89;
                if (this._backtrack) {
                  erDiagramQ2GNP2WABinding90 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return erDiagramQ2GNP2WABinding90
            ? ((erDiagramQ2GNP2WABinding89 = this.test_match(
                erDiagramQ2GNP2WABinding90,
                erDiagramQ2GNP2WABinding93[erDiagramQ2GNP2WABinding92],
              )),
              erDiagramQ2GNP2WABinding89 === false
                ? false
                : erDiagramQ2GNP2WABinding89)
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
        begin: defineFunctionName(function (erDiagramQ2GNP2WAInput51) {
          this.conditionStack.push(erDiagramQ2GNP2WAInput51);
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
        topState: defineFunctionName(function (erDiagramQ2GNP2WAInput34) {
          return (
            (erDiagramQ2GNP2WAInput34 =
              this.conditionStack.length -
              1 -
              Math.abs(erDiagramQ2GNP2WAInput34 || 0)),
            erDiagramQ2GNP2WAInput34 >= 0
              ? this.conditionStack[erDiagramQ2GNP2WAInput34]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (erDiagramQ2GNP2WAInput53) {
          this.begin(erDiagramQ2GNP2WAInput53);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          erDiagramQ2GNP2WAInput9,
          erDiagramQ2GNP2WAInput10,
          erDiagramQ2GNP2WAInput11,
          erDiagramQ2GNP2WAInput12,
        ) {
          switch (erDiagramQ2GNP2WAInput11) {
            case 0:
              return (this.begin("acc_title"), 24);
            case 1:
              return (this.popState(), "acc_title_value");
            case 2:
              return (this.begin("acc_descr"), 26);
            case 3:
              return (this.popState(), "acc_descr_value");
            case 4:
              this.begin("acc_descr_multiline");
              break;
            case 5:
              this.popState();
              break;
            case 6:
              return "acc_descr_multiline_value";
            case 7:
              return 33;
            case 8:
              return 34;
            case 9:
              return 35;
            case 10:
              return 36;
            case 11:
              return 10;
            case 12:
              break;
            case 13:
              return 8;
            case 14:
              return 50;
            case 15:
              return 70;
            case 16:
              return 4;
            case 17:
              return (this.begin("block"), 17);
            case 18:
              return 49;
            case 19:
              return 49;
            case 20:
              return 42;
            case 21:
              return 15;
            case 22:
              return 13;
            case 23:
              break;
            case 24:
              return 59;
            case 25:
              return 56;
            case 26:
              return 56;
            case 27:
              return 60;
            case 28:
              break;
            case 29:
              return (this.popState(), 19);
            case 30:
              return erDiagramQ2GNP2WAInput10.yytext[0];
            case 31:
              return 20;
            case 32:
              return 21;
            case 33:
              return (this.begin("style"), 44);
            case 34:
              return (this.popState(), 10);
            case 35:
              break;
            case 36:
              return 13;
            case 37:
              return 42;
            case 38:
              return 49;
            case 39:
              return (this.begin("style"), 37);
            case 40:
              return 43;
            case 41:
              return 63;
            case 42:
              return 65;
            case 43:
              return 65;
            case 44:
              return 65;
            case 45:
              return 63;
            case 46:
              return 63;
            case 47:
              return 64;
            case 48:
              return 64;
            case 49:
              return 64;
            case 50:
              return 64;
            case 51:
              return 64;
            case 52:
              return 65;
            case 53:
              return 64;
            case 54:
              return 65;
            case 55:
              return 66;
            case 56:
              return 66;
            case 57:
              return 66;
            case 58:
              return 66;
            case 59:
              return 63;
            case 60:
              return 64;
            case 61:
              return 65;
            case 62:
              return 67;
            case 63:
              return 68;
            case 64:
              return 69;
            case 65:
              return 69;
            case 66:
              return 68;
            case 67:
              return 68;
            case 68:
              return 68;
            case 69:
              return 41;
            case 70:
              return 47;
            case 71:
              return 40;
            case 72:
              return 48;
            case 73:
              return erDiagramQ2GNP2WAInput10.yytext[0];
            case 74:
              return 6;
          }
        }, "anonymous"),
        rules: [
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:.*direction\s+TB[^\n]*)/i,
          /^(?:.*direction\s+BT[^\n]*)/i,
          /^(?:.*direction\s+RL[^\n]*)/i,
          /^(?:.*direction\s+LR[^\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:[\s]+)/i,
          /^(?:"[^"%\r\n\v\b\\]+")/i,
          /^(?:"[^"]*")/i,
          /^(?:erDiagram\b)/i,
          /^(?:\{)/i,
          /^(?:#)/i,
          /^(?:#)/i,
          /^(?:,)/i,
          /^(?::::)/i,
          /^(?::)/i,
          /^(?:\s+)/i,
          /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,
          /^(?:([^\s]*)[~].*[~]([^\s]*))/i,
          /^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\u00C0-\uFFFF\*]*))/i,
          /^(?:"[^"]*")/i,
          /^(?:[\n]+)/i,
          /^(?:\})/i,
          /^(?:.)/i,
          /^(?:\[)/i,
          /^(?:\])/i,
          /^(?:style\b)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?::)/i,
          /^(?:,)/i,
          /^(?:#)/i,
          /^(?:classDef\b)/i,
          /^(?:class\b)/i,
          /^(?:one or zero\b)/i,
          /^(?:one or more\b)/i,
          /^(?:one or many\b)/i,
          /^(?:1\+)/i,
          /^(?:\|o\b)/i,
          /^(?:zero or one\b)/i,
          /^(?:zero or more\b)/i,
          /^(?:zero or many\b)/i,
          /^(?:0\+)/i,
          /^(?:\}o\b)/i,
          /^(?:many\(0\))/i,
          /^(?:many\(1\))/i,
          /^(?:many\b)/i,
          /^(?:\}\|)/i,
          /^(?:one\b)/i,
          /^(?:only one\b)/i,
          /^(?:1\b)/i,
          /^(?:\|\|)/i,
          /^(?:o\|)/i,
          /^(?:o\{)/i,
          /^(?:\|\{)/i,
          /^(?:\s*u\b)/i,
          /^(?:\.\.)/i,
          /^(?:--)/i,
          /^(?:to\b)/i,
          /^(?:optionally to\b)/i,
          /^(?:\.-)/i,
          /^(?:-\.)/i,
          /^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
          /^(?:;)/i,
          /^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
          /^(?:[0-9])/i,
          /^(?:.)/i,
          /^(?:$)/i,
        ],
        conditions: {
          style: {
            rules: [34, 35, 36, 37, 38, 69, 70],
            inclusive: false,
          },
          acc_descr_multiline: {
            rules: [5, 6],
            inclusive: false,
          },
          acc_descr: {
            rules: [3],
            inclusive: false,
          },
          acc_title: {
            rules: [1],
            inclusive: false,
          },
          block: {
            rules: [23, 24, 25, 26, 27, 28, 29, 30],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 31, 32, 33, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
              51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
              67, 68, 71, 72, 73, 74,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function erDiagramQ2GNP2WAHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(erDiagramQ2GNP2WAHelper1, "Parser"),
      (erDiagramQ2GNP2WAHelper1.prototype = erDiagramQ2GNP2WABinding51),
      (erDiagramQ2GNP2WABinding51.Parser = erDiagramQ2GNP2WAHelper1),
      new erDiagramQ2GNP2WAHelper1()
    );
  })();
  erDiagramQ2GNP2WABinding1.parser = erDiagramQ2GNP2WABinding1;
  erDiagramQ2GNP2WABinding2 = erDiagramQ2GNP2WABinding1;
  erDiagramQ2GNP2WABinding3 = class {
    constructor() {
      this.entities = new Map();
      this.relationships = [];
      this.classes = new Map();
      this.direction = "TB";
      this.Cardinality = {
        ZERO_OR_ONE: "ZERO_OR_ONE",
        ZERO_OR_MORE: "ZERO_OR_MORE",
        ONE_OR_MORE: "ONE_OR_MORE",
        ONLY_ONE: "ONLY_ONE",
        MD_PARENT: "MD_PARENT",
      };
      this.Identification = {
        NON_IDENTIFYING: "NON_IDENTIFYING",
        IDENTIFYING: "IDENTIFYING",
      };
      this.setAccTitle = chunkABZYJK2DV;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setAccDescription = chunkABZYJK2DB;
      this.getAccDescription = chunkABZYJK2DUnderscore;
      this.setDiagramTitle = chunkABZYJK2DW;
      this.getDiagramTitle = chunkABZYJK2DC;
      this.getConfig = defineFunctionName(
        () => _chunkABZYJK2DB().er,
        "getConfig",
      );
      this.clear();
      this.addEntity = this.addEntity.bind(this);
      this.addAttributes = this.addAttributes.bind(this);
      this.addRelationship = this.addRelationship.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.addCssStyles = this.addCssStyles.bind(this);
      this.addClass = this.addClass.bind(this);
      this.setClass = this.setClass.bind(this);
      this.setAccTitle = this.setAccTitle.bind(this);
      this.setAccDescription = this.setAccDescription.bind(this);
    }
    static {
      defineFunctionName(this, "ErDB");
    }
    addEntity(erDiagramQ2GNP2WAInput21, erDiagramQ2GNP2WAInput22 = "") {
      return (
        this.entities.has(erDiagramQ2GNP2WAInput21)
          ? !this.entities.get(erDiagramQ2GNP2WAInput21)?.alias &&
            erDiagramQ2GNP2WAInput22 &&
            ((this.entities.get(erDiagramQ2GNP2WAInput21).alias =
              erDiagramQ2GNP2WAInput22),
            logger.info(
              `Add alias '${erDiagramQ2GNP2WAInput22}' to entity '${erDiagramQ2GNP2WAInput21}'`,
            ))
          : (this.entities.set(erDiagramQ2GNP2WAInput21, {
              id: `entity-${erDiagramQ2GNP2WAInput21}-${this.entities.size}`,
              label: erDiagramQ2GNP2WAInput21,
              attributes: [],
              alias: erDiagramQ2GNP2WAInput22,
              shape: "erBox",
              look: _chunkABZYJK2DB().look ?? "default",
              cssClasses: "default",
              cssStyles: [],
            }),
            logger.info("Added new entity :", erDiagramQ2GNP2WAInput21)),
        this.entities.get(erDiagramQ2GNP2WAInput21)
      );
    }
    getEntity(erDiagramQ2GNP2WAInput52) {
      return this.entities.get(erDiagramQ2GNP2WAInput52);
    }
    getEntities() {
      return this.entities;
    }
    getClasses() {
      return this.classes;
    }
    addAttributes(erDiagramQ2GNP2WAInput28, erDiagramQ2GNP2WAInput29) {
      let erDiagramQ2GNP2WABinding108 = this.addEntity(
          erDiagramQ2GNP2WAInput28,
        ),
        erDiagramQ2GNP2WABinding109;
      for (
        erDiagramQ2GNP2WABinding109 = erDiagramQ2GNP2WAInput29.length - 1;
        erDiagramQ2GNP2WABinding109 >= 0;
        erDiagramQ2GNP2WABinding109--
      ) {
        erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109].keys ||
          (erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109].keys = []);
        erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109].comment ||
          (erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109].comment = "");
        erDiagramQ2GNP2WABinding108.attributes.push(
          erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109],
        );
        logger.debug(
          "Added attribute ",
          erDiagramQ2GNP2WAInput29[erDiagramQ2GNP2WABinding109].name,
        );
      }
    }
    addRelationship(
      erDiagramQ2GNP2WAInput30,
      erDiagramQ2GNP2WAInput31,
      erDiagramQ2GNP2WAInput32,
      erDiagramQ2GNP2WAInput33,
    ) {
      let erDiagramQ2GNP2WABinding111 = this.entities.get(
          erDiagramQ2GNP2WAInput30,
        ),
        erDiagramQ2GNP2WABinding112 = this.entities.get(
          erDiagramQ2GNP2WAInput32,
        );
      if (!erDiagramQ2GNP2WABinding111 || !erDiagramQ2GNP2WABinding112) return;
      let erDiagramQ2GNP2WABinding113 = {
        entityA: erDiagramQ2GNP2WABinding111.id,
        roleA: erDiagramQ2GNP2WAInput31,
        entityB: erDiagramQ2GNP2WABinding112.id,
        relSpec: erDiagramQ2GNP2WAInput33,
      };
      this.relationships.push(erDiagramQ2GNP2WABinding113);
      logger.debug("Added new relationship :", erDiagramQ2GNP2WABinding113);
    }
    getRelationships() {
      return this.relationships;
    }
    getDirection() {
      return this.direction;
    }
    setDirection(erDiagramQ2GNP2WAInput54) {
      this.direction = erDiagramQ2GNP2WAInput54;
    }
    getCompiledStyles(erDiagramQ2GNP2WAInput27) {
      let erDiagramQ2GNP2WABinding107 = [];
      for (let erDiagramQ2GNP2WABinding121 of erDiagramQ2GNP2WAInput27) {
        let erDiagramQ2GNP2WABinding123 = this.classes.get(
          erDiagramQ2GNP2WABinding121,
        );
        erDiagramQ2GNP2WABinding123?.styles &&
          (erDiagramQ2GNP2WABinding107 = [
            ...erDiagramQ2GNP2WABinding107,
            ...(erDiagramQ2GNP2WABinding123.styles ?? []),
          ].map((item) => item.trim()));
        erDiagramQ2GNP2WABinding123?.textStyles &&
          (erDiagramQ2GNP2WABinding107 = [
            ...erDiagramQ2GNP2WABinding107,
            ...(erDiagramQ2GNP2WABinding123.textStyles ?? []),
          ].map((item) => item.trim()));
      }
      return erDiagramQ2GNP2WABinding107;
    }
    addCssStyles(erDiagramQ2GNP2WAInput35, erDiagramQ2GNP2WAInput36) {
      for (let erDiagramQ2GNP2WABinding126 of erDiagramQ2GNP2WAInput35) {
        let erDiagramQ2GNP2WABinding127 = this.entities.get(
          erDiagramQ2GNP2WABinding126,
        );
        if (!erDiagramQ2GNP2WAInput36 || !erDiagramQ2GNP2WABinding127) return;
        for (let erDiagramQ2GNP2WABinding134 of erDiagramQ2GNP2WAInput36)
          erDiagramQ2GNP2WABinding127.cssStyles.push(
            erDiagramQ2GNP2WABinding134,
          );
      }
    }
    addClass(erDiagramQ2GNP2WAInput25, erDiagramQ2GNP2WAInput26) {
      erDiagramQ2GNP2WAInput25.forEach((item) => {
        let erDiagramQ2GNP2WABinding106 = this.classes.get(item);
        erDiagramQ2GNP2WABinding106 === undefined &&
          ((erDiagramQ2GNP2WABinding106 = {
            id: item,
            styles: [],
            textStyles: [],
          }),
          this.classes.set(item, erDiagramQ2GNP2WABinding106));
        erDiagramQ2GNP2WAInput26 &&
          erDiagramQ2GNP2WAInput26.forEach(function (_item) {
            if (/color/.exec(_item)) {
              let erDiagramQ2GNP2WABinding129 = _item.replace("fill", "bgFill");
              erDiagramQ2GNP2WABinding106.textStyles.push(
                erDiagramQ2GNP2WABinding129,
              );
            }
            erDiagramQ2GNP2WABinding106.styles.push(_item);
          });
      });
    }
    setClass(erDiagramQ2GNP2WAInput39, erDiagramQ2GNP2WAInput40) {
      for (let erDiagramQ2GNP2WABinding128 of erDiagramQ2GNP2WAInput39) {
        let erDiagramQ2GNP2WABinding130 = this.entities.get(
          erDiagramQ2GNP2WABinding128,
        );
        if (erDiagramQ2GNP2WABinding130)
          for (let erDiagramQ2GNP2WABinding133 of erDiagramQ2GNP2WAInput40)
            erDiagramQ2GNP2WABinding130.cssClasses +=
              " " + erDiagramQ2GNP2WABinding133;
      }
    }
    clear() {
      this.entities = new Map();
      this.classes = new Map();
      this.relationships = [];
      chunkABZYJK2DA();
    }
    getData() {
      let erDiagramQ2GNP2WABinding99 = [],
        erDiagramQ2GNP2WABinding100 = [],
        erDiagramQ2GNP2WABinding101 = _chunkABZYJK2DB();
      for (let erDiagramQ2GNP2WABinding122 of this.entities.keys()) {
        let erDiagramQ2GNP2WABinding124 = this.entities.get(
          erDiagramQ2GNP2WABinding122,
        );
        erDiagramQ2GNP2WABinding124 &&
          ((erDiagramQ2GNP2WABinding124.cssCompiledStyles =
            this.getCompiledStyles(
              erDiagramQ2GNP2WABinding124.cssClasses.split(" "),
            )),
          erDiagramQ2GNP2WABinding99.push(erDiagramQ2GNP2WABinding124));
      }
      let erDiagramQ2GNP2WABinding102 = 0;
      for (let erDiagramQ2GNP2WABinding103 of this.relationships) {
        let erDiagramQ2GNP2WABinding104 = {
          id: chunkS3R3BYOJS(
            erDiagramQ2GNP2WABinding103.entityA,
            erDiagramQ2GNP2WABinding103.entityB,
            {
              prefix: "id",
              counter: erDiagramQ2GNP2WABinding102++,
            },
          ),
          type: "normal",
          curve: "basis",
          start: erDiagramQ2GNP2WABinding103.entityA,
          end: erDiagramQ2GNP2WABinding103.entityB,
          label: erDiagramQ2GNP2WABinding103.roleA,
          labelpos: "c",
          thickness: "normal",
          classes: "relationshipLine",
          arrowTypeStart:
            erDiagramQ2GNP2WABinding103.relSpec.cardB.toLowerCase(),
          arrowTypeEnd: erDiagramQ2GNP2WABinding103.relSpec.cardA.toLowerCase(),
          pattern:
            erDiagramQ2GNP2WABinding103.relSpec.relType == "IDENTIFYING"
              ? "solid"
              : "dashed",
          look: erDiagramQ2GNP2WABinding101.look,
        };
        erDiagramQ2GNP2WABinding100.push(erDiagramQ2GNP2WABinding104);
      }
      return {
        nodes: erDiagramQ2GNP2WABinding99,
        edges: erDiagramQ2GNP2WABinding100,
        other: {},
        config: erDiagramQ2GNP2WABinding101,
        direction: "TB",
      };
    }
  };
  erDiagramQ2GNP2WABinding4 = {};
  defineEnumerableGetters(erDiagramQ2GNP2WABinding4, {
    draw: () => erDiagramQ2GNP2WABinding5,
  });
  erDiagramQ2GNP2WABinding5 = defineFunctionName(async function (
    erDiagramQ2GNP2WAInput15,
    erDiagramQ2GNP2WAInput16,
    erDiagramQ2GNP2WAInput17,
    erDiagramQ2GNP2WAInput18,
  ) {
    logger.info("REF0:");
    logger.info("Drawing er diagram (unified)", erDiagramQ2GNP2WAInput16);
    let { securityLevel, er, layout } = _chunkABZYJK2DB(),
      erDiagramQ2GNP2WABinding86 = erDiagramQ2GNP2WAInput18.db.getData(),
      erDiagramQ2GNP2WABinding87 = chunk55IACEB6T(
        erDiagramQ2GNP2WAInput16,
        securityLevel,
      );
    erDiagramQ2GNP2WABinding86.type = erDiagramQ2GNP2WAInput18.type;
    erDiagramQ2GNP2WABinding86.layoutAlgorithm = chunkN4CR4FBYT(layout);
    erDiagramQ2GNP2WABinding86.config.flowchart.nodeSpacing =
      er?.nodeSpacing || 140;
    erDiagramQ2GNP2WABinding86.config.flowchart.rankSpacing =
      er?.rankSpacing || 80;
    erDiagramQ2GNP2WABinding86.direction =
      erDiagramQ2GNP2WAInput18.db.getDirection();
    erDiagramQ2GNP2WABinding86.markers = [
      "only_one",
      "zero_or_one",
      "one_or_more",
      "zero_or_more",
    ];
    erDiagramQ2GNP2WABinding86.diagramId = erDiagramQ2GNP2WAInput16;
    await chunkN4CR4FBYI(
      erDiagramQ2GNP2WABinding86,
      erDiagramQ2GNP2WABinding87,
    );
    erDiagramQ2GNP2WABinding86.layoutAlgorithm === "elk" &&
      erDiagramQ2GNP2WABinding87.select(".edges").lower();
    let erDiagramQ2GNP2WABinding88 = erDiagramQ2GNP2WABinding87.selectAll(
      '[id*="-background"]',
    );
    Array.from(erDiagramQ2GNP2WABinding88).length > 0 &&
      erDiagramQ2GNP2WABinding88.each(function () {
        let erDiagramQ2GNP2WABinding115 = select(this),
          erDiagramQ2GNP2WABinding116 = erDiagramQ2GNP2WABinding115
            .attr("id")
            .replace("-background", ""),
          erDiagramQ2GNP2WABinding117 = erDiagramQ2GNP2WABinding87.select(
            `#${CSS.escape(erDiagramQ2GNP2WABinding116)}`,
          );
        if (!erDiagramQ2GNP2WABinding117.empty()) {
          let erDiagramQ2GNP2WABinding131 =
            erDiagramQ2GNP2WABinding117.attr("transform");
          erDiagramQ2GNP2WABinding115.attr(
            "transform",
            erDiagramQ2GNP2WABinding131,
          );
        }
      });
    chunkS3R3BYOJG.insertTitle(
      erDiagramQ2GNP2WABinding87,
      "erDiagramTitleText",
      er?.titleTopMargin ?? 25,
      erDiagramQ2GNP2WAInput18.db.getDiagramTitle(),
    );
    chunkQN33PNHLN(
      erDiagramQ2GNP2WABinding87,
      8,
      "erDiagram",
      er?.useMaxWidth ?? true,
    );
  }, "draw");
  erDiagramQ2GNP2WABinding6 = defineFunctionName(
    (erDiagramQ2GNP2WAInput48, erDiagramQ2GNP2WAInput49) => {
      let erDiagramQ2GNP2WABinding132 = m;
      return _(
        erDiagramQ2GNP2WABinding132(erDiagramQ2GNP2WAInput48, "r"),
        erDiagramQ2GNP2WABinding132(erDiagramQ2GNP2WAInput48, "g"),
        erDiagramQ2GNP2WABinding132(erDiagramQ2GNP2WAInput48, "b"),
        erDiagramQ2GNP2WAInput49,
      );
    },
    "fade",
  );
  ErDiagramQ2GNP2WA = {
    parser: erDiagramQ2GNP2WABinding2,
    get db() {
      return new erDiagramQ2GNP2WABinding3();
    },
    renderer: erDiagramQ2GNP2WABinding4,
    styles: defineFunctionName(
      (erDiagramQ2GNP2WAInput20) => `
  .entityBox {
    fill: ${erDiagramQ2GNP2WAInput20.mainBkg};
    stroke: ${erDiagramQ2GNP2WAInput20.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${erDiagramQ2GNP2WAInput20.tertiaryColor};
    opacity: 0.7;
    background-color: ${erDiagramQ2GNP2WAInput20.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

  .labelBkg {
    background-color: ${erDiagramQ2GNP2WABinding6(erDiagramQ2GNP2WAInput20.tertiaryColor, 0.5)};
  }

  .edgeLabel .label {
    fill: ${erDiagramQ2GNP2WAInput20.nodeBorder};
    font-size: 14px;
  }

  .label {
    font-family: ${erDiagramQ2GNP2WAInput20.fontFamily};
    color: ${erDiagramQ2GNP2WAInput20.nodeTextColor || erDiagramQ2GNP2WAInput20.textColor};
  }

  .edge-pattern-dashed {
    stroke-dasharray: 8,8;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon
  {
    fill: ${erDiagramQ2GNP2WAInput20.mainBkg};
    stroke: ${erDiagramQ2GNP2WAInput20.nodeBorder};
    stroke-width: 1px;
  }

  .relationshipLine {
    stroke: ${erDiagramQ2GNP2WAInput20.lineColor};
    stroke-width: 1;
    fill: none;
  }

  .marker {
    fill: none !important;
    stroke: ${erDiagramQ2GNP2WAInput20.lineColor} !important;
    stroke-width: 1;
  }
`,
      "getStyles",
    ),
  };
})();
export { ErDiagramQ2GNP2WA as diagram };
