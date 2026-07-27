// Restored from ref/webview/assets/erDiagram-SMLLAGMA-pPTg-g5G.js
// Mermaid ER diagram definition alt (db + renderer + parser). Unblocked by mermaid-layout-loaders-alt.
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
import { m, t, _ } from "../../vendor/khroma";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
  defineEnumerableGetters,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  v as _chunkICPOFSXXV,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWS,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk } from "../../diagrams/line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "../../diagrams/subgraph-title-margins-alt";
import { n, t as chunk55IACEB6T } from "../../diagrams/get-diagram-element-alt";
import {
  n as chunkEDXVE4YYN,
  t as chunkEDXVE4YYT,
} from "../../diagrams/setup-viewport-for-svg-alt";
import { n as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import {
  chunk336JU56OI,
  chunk336JU56ON,
  chunk336JU56OT,
} from "../../diagrams/mermaid-layout-loaders-alt";
var erDiagramSMLLAGMABinding1,
  erDiagramSMLLAGMABinding2,
  erDiagramSMLLAGMABinding3,
  erDiagramSMLLAGMABinding4,
  erDiagramSMLLAGMABinding5,
  erDiagramSMLLAGMABinding6,
  erDiagramSMLLAGMABinding7,
  erDiagramSMLLAGMABinding8,
  ErDiagramSMLLAGMA;
esmInit(() => {
  n();
  chunkEDXVE4YYT();
  chunk336JU56ON();
  chunkENJZ2VHEN();
  initMermaidLineOffsetAltChunk();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  t();
  erDiagramSMLLAGMABinding1 = (function () {
    var erDiagramSMLLAGMABinding9 = defineFunctionName(function (
        erDiagramSMLLAGMAInput44,
        erDiagramSMLLAGMAInput45,
        erDiagramSMLLAGMAInput46,
        erDiagramSMLLAGMAInput47,
      ) {
        for (
          erDiagramSMLLAGMAInput46 ||= {},
            erDiagramSMLLAGMAInput47 = erDiagramSMLLAGMAInput44.length;
          erDiagramSMLLAGMAInput47--;
          erDiagramSMLLAGMAInput46[
            erDiagramSMLLAGMAInput44[erDiagramSMLLAGMAInput47]
          ] = erDiagramSMLLAGMAInput45
        );
        return erDiagramSMLLAGMAInput46;
      }, "o"),
      erDiagramSMLLAGMABinding10 = [
        6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 48, 50, 51,
        52,
      ],
      erDiagramSMLLAGMABinding11 = [1, 10],
      erDiagramSMLLAGMABinding12 = [1, 11],
      erDiagramSMLLAGMABinding13 = [1, 12],
      erDiagramSMLLAGMABinding14 = [1, 13],
      erDiagramSMLLAGMABinding15 = [1, 23],
      erDiagramSMLLAGMABinding16 = [1, 24],
      erDiagramSMLLAGMABinding17 = [1, 25],
      erDiagramSMLLAGMABinding18 = [1, 26],
      erDiagramSMLLAGMABinding19 = [1, 27],
      erDiagramSMLLAGMABinding20 = [1, 19],
      erDiagramSMLLAGMABinding21 = [1, 28],
      erDiagramSMLLAGMABinding22 = [1, 29],
      erDiagramSMLLAGMABinding23 = [1, 20],
      erDiagramSMLLAGMABinding24 = [1, 18],
      erDiagramSMLLAGMABinding25 = [1, 21],
      erDiagramSMLLAGMABinding26 = [1, 22],
      erDiagramSMLLAGMABinding27 = [1, 36],
      erDiagramSMLLAGMABinding28 = [1, 37],
      erDiagramSMLLAGMABinding29 = [1, 38],
      erDiagramSMLLAGMABinding30 = [1, 39],
      erDiagramSMLLAGMABinding31 = [1, 40],
      erDiagramSMLLAGMABinding32 = [
        6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40,
        43, 44, 48, 50, 51, 52, 65, 66, 67, 68, 69,
      ],
      erDiagramSMLLAGMABinding33 = [1, 45],
      erDiagramSMLLAGMABinding34 = [1, 46],
      erDiagramSMLLAGMABinding35 = [1, 55],
      erDiagramSMLLAGMABinding36 = [40, 48, 50, 51, 52, 70, 71],
      erDiagramSMLLAGMABinding37 = [1, 66],
      erDiagramSMLLAGMABinding38 = [1, 64],
      erDiagramSMLLAGMABinding39 = [1, 61],
      erDiagramSMLLAGMABinding40 = [1, 65],
      erDiagramSMLLAGMABinding41 = [1, 67],
      erDiagramSMLLAGMABinding42 = [
        6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43,
        44, 48, 49, 50, 51, 52, 65, 66, 67, 68, 69,
      ],
      erDiagramSMLLAGMABinding43 = [65, 66, 67, 68, 69],
      erDiagramSMLLAGMABinding44 = [1, 84],
      erDiagramSMLLAGMABinding45 = [1, 83],
      erDiagramSMLLAGMABinding46 = [1, 81],
      erDiagramSMLLAGMABinding47 = [1, 82],
      erDiagramSMLLAGMABinding48 = [6, 10, 42, 47],
      erDiagramSMLLAGMABinding49 = [6, 10, 13, 41, 42, 47, 48, 49],
      erDiagramSMLLAGMABinding50 = [1, 92],
      _ErDiagramSMLLAGMA = [1, 91],
      erDiagramSMLLAGMABinding51 = [1, 90],
      erDiagramSMLLAGMABinding52 = [19, 58],
      erDiagramSMLLAGMABinding53 = [1, 101],
      erDiagramSMLLAGMABinding54 = [1, 100],
      erDiagramSMLLAGMABinding55 = [19, 58, 60, 62],
      erDiagramSMLLAGMABinding56 = {
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
          DECIMAL_NUM: 51,
          ENTITY_ONE: 52,
          attribute: 53,
          attributeType: 54,
          attributeName: 55,
          attributeKeyTypeList: 56,
          attributeComment: 57,
          ATTRIBUTE_WORD: 58,
          attributeKeyType: 59,
          ",": 60,
          ATTRIBUTE_KEY: 61,
          COMMENT: 62,
          cardinality: 63,
          relType: 64,
          ZERO_OR_ONE: 65,
          ZERO_OR_MORE: 66,
          ONE_OR_MORE: 67,
          ONLY_ONE: 68,
          MD_PARENT: 69,
          NON_IDENTIFYING: 70,
          IDENTIFYING: 71,
          WORD: 72,
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
          51: "DECIMAL_NUM",
          52: "ENTITY_ONE",
          58: "ATTRIBUTE_WORD",
          60: ",",
          61: "ATTRIBUTE_KEY",
          62: "COMMENT",
          65: "ZERO_OR_ONE",
          66: "ZERO_OR_MORE",
          67: "ONE_OR_MORE",
          68: "ONLY_ONE",
          69: "MD_PARENT",
          70: "NON_IDENTIFYING",
          71: "IDENTIFYING",
          72: "WORD",
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
          [11, 1],
          [11, 1],
          [11, 1],
          [18, 1],
          [18, 2],
          [53, 2],
          [53, 3],
          [53, 3],
          [53, 4],
          [54, 1],
          [55, 1],
          [56, 1],
          [56, 3],
          [59, 1],
          [57, 1],
          [12, 3],
          [63, 1],
          [63, 1],
          [63, 1],
          [63, 1],
          [63, 1],
          [64, 1],
          [64, 1],
          [14, 1],
          [14, 1],
          [14, 1],
        ],
        performAction: defineFunctionName(function (
          erDiagramSMLLAGMAInput1,
          erDiagramSMLLAGMAInput2,
          erDiagramSMLLAGMAInput3,
          erDiagramSMLLAGMAInput4,
          erDiagramSMLLAGMAInput5,
          erDiagramSMLLAGMAInput6,
          erDiagramSMLLAGMAInput7,
        ) {
          var erDiagramSMLLAGMABinding57 = erDiagramSMLLAGMAInput6.length - 1;
          switch (erDiagramSMLLAGMAInput5) {
            case 1:
              break;
            case 2:
              this.$ = [];
              break;
            case 3:
              erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1].push(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1];
              break;
            case 4:
            case 5:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              erDiagramSMLLAGMAInput4.addRelationship(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              break;
            case 9:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8],
              );
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              erDiagramSMLLAGMAInput4.addRelationship(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              break;
            case 10:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
              );
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              erDiagramSMLLAGMAInput4.addRelationship(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              break;
            case 11:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
              );
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              erDiagramSMLLAGMAInput4.addRelationship(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              break;
            case 12:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              erDiagramSMLLAGMAInput4.addAttributes(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              break;
            case 13:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
              );
              erDiagramSMLLAGMAInput4.addAttributes(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              break;
            case 14:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              break;
            case 15:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              break;
            case 16:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              break;
            case 17:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              break;
            case 18:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 4],
              );
              erDiagramSMLLAGMAInput4.addAttributes(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              break;
            case 19:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 6],
              );
              erDiagramSMLLAGMAInput4.addAttributes(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 8]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              break;
            case 20:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              break;
            case 21:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 7],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 7]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              );
              break;
            case 22:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              break;
            case 23:
              erDiagramSMLLAGMAInput4.addEntity(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
              );
              erDiagramSMLLAGMAInput4.setClass(
                [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 5]],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              break;
            case 24:
            case 25:
              this.$ =
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57].trim();
              erDiagramSMLLAGMAInput4.setAccTitle(this.$);
              break;
            case 26:
            case 27:
              this.$ =
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57].trim();
              erDiagramSMLLAGMAInput4.setAccDescription(this.$);
              break;
            case 32:
              erDiagramSMLLAGMAInput4.setDirection("TB");
              break;
            case 33:
              erDiagramSMLLAGMAInput4.setDirection("BT");
              break;
            case 34:
              erDiagramSMLLAGMAInput4.setDirection("RL");
              break;
            case 35:
              erDiagramSMLLAGMAInput4.setDirection("LR");
              break;
            case 36:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3];
              erDiagramSMLLAGMAInput4.addClass(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              break;
            case 37:
            case 38:
            case 59:
            case 67:
              this.$ = [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57]];
              break;
            case 39:
            case 40:
              this.$ = erDiagramSMLLAGMAInput6[
                erDiagramSMLLAGMABinding57 - 2
              ].concat([erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57]]);
              break;
            case 41:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2];
              erDiagramSMLLAGMAInput4.setClass(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              break;
            case 42:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3];
              erDiagramSMLLAGMAInput4.addCssStyles(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              break;
            case 43:
              this.$ = [erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57]];
              break;
            case 44:
              erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2].push(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2];
              break;
            case 46:
              this.$ =
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1] +
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57];
              break;
            case 54:
            case 79:
            case 80:
              this.$ = erDiagramSMLLAGMAInput6[
                erDiagramSMLLAGMABinding57
              ].replace(/"/g, "");
              break;
            case 55:
            case 56:
            case 57:
            case 58:
            case 81:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57];
              break;
            case 60:
              erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57].push(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
              );
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57];
              break;
            case 61:
              this.$ = {
                type: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                name: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              };
              break;
            case 62:
              this.$ = {
                type: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                name: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                keys: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              };
              break;
            case 63:
              this.$ = {
                type: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                name: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                comment: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              };
              break;
            case 64:
              this.$ = {
                type: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 3],
                name: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
                keys: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                comment: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              };
              break;
            case 65:
            case 66:
            case 69:
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57];
              break;
            case 68:
              erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2].push(
                erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
              );
              this.$ = erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2];
              break;
            case 70:
              this.$ = erDiagramSMLLAGMAInput6[
                erDiagramSMLLAGMABinding57
              ].replace(/"/g, "");
              break;
            case 71:
              this.$ = {
                cardA: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57],
                relType:
                  erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 1],
                cardB: erDiagramSMLLAGMAInput6[erDiagramSMLLAGMABinding57 - 2],
              };
              break;
            case 72:
              this.$ = erDiagramSMLLAGMAInput4.Cardinality.ZERO_OR_ONE;
              break;
            case 73:
              this.$ = erDiagramSMLLAGMAInput4.Cardinality.ZERO_OR_MORE;
              break;
            case 74:
              this.$ = erDiagramSMLLAGMAInput4.Cardinality.ONE_OR_MORE;
              break;
            case 75:
              this.$ = erDiagramSMLLAGMAInput4.Cardinality.ONLY_ONE;
              break;
            case 76:
              this.$ = erDiagramSMLLAGMAInput4.Cardinality.MD_PARENT;
              break;
            case 77:
              this.$ = erDiagramSMLLAGMAInput4.Identification.NON_IDENTIFYING;
              break;
            case 78:
              this.$ = erDiagramSMLLAGMAInput4.Identification.IDENTIFYING;
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
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 9,
            22: erDiagramSMLLAGMABinding11,
            24: erDiagramSMLLAGMABinding12,
            26: erDiagramSMLLAGMABinding13,
            28: erDiagramSMLLAGMABinding14,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: erDiagramSMLLAGMABinding15,
            34: erDiagramSMLLAGMABinding16,
            35: erDiagramSMLLAGMABinding17,
            36: erDiagramSMLLAGMABinding18,
            37: erDiagramSMLLAGMABinding19,
            40: erDiagramSMLLAGMABinding20,
            43: erDiagramSMLLAGMABinding21,
            44: erDiagramSMLLAGMABinding22,
            48: erDiagramSMLLAGMABinding23,
            50: erDiagramSMLLAGMABinding24,
            51: erDiagramSMLLAGMABinding25,
            52: erDiagramSMLLAGMABinding26,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 7], {
            1: [2, 1],
          }),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 3]),
          {
            9: 30,
            11: 9,
            22: erDiagramSMLLAGMABinding11,
            24: erDiagramSMLLAGMABinding12,
            26: erDiagramSMLLAGMABinding13,
            28: erDiagramSMLLAGMABinding14,
            29: 14,
            30: 15,
            31: 16,
            32: 17,
            33: erDiagramSMLLAGMABinding15,
            34: erDiagramSMLLAGMABinding16,
            35: erDiagramSMLLAGMABinding17,
            36: erDiagramSMLLAGMABinding18,
            37: erDiagramSMLLAGMABinding19,
            40: erDiagramSMLLAGMABinding20,
            43: erDiagramSMLLAGMABinding21,
            44: erDiagramSMLLAGMABinding22,
            48: erDiagramSMLLAGMABinding23,
            50: erDiagramSMLLAGMABinding24,
            51: erDiagramSMLLAGMABinding25,
            52: erDiagramSMLLAGMABinding26,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 5]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 6]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 16], {
            12: 31,
            63: 35,
            15: [1, 32],
            17: [1, 33],
            20: [1, 34],
            65: erDiagramSMLLAGMABinding27,
            66: erDiagramSMLLAGMABinding28,
            67: erDiagramSMLLAGMABinding29,
            68: erDiagramSMLLAGMABinding30,
            69: erDiagramSMLLAGMABinding31,
          }),
          {
            23: [1, 41],
          },
          {
            25: [1, 42],
          },
          {
            27: [1, 43],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 27]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 28]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 29]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 30]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 31]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding32, [2, 54]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding32, [2, 55]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding32, [2, 56]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding32, [2, 57]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding32, [2, 58]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 32]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 33]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 34]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 35]),
          {
            16: 44,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          {
            16: 47,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          {
            16: 48,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 4]),
          {
            11: 49,
            40: erDiagramSMLLAGMABinding20,
            48: erDiagramSMLLAGMABinding23,
            50: erDiagramSMLLAGMABinding24,
            51: erDiagramSMLLAGMABinding25,
            52: erDiagramSMLLAGMABinding26,
          },
          {
            16: 50,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          {
            18: 51,
            19: [1, 52],
            53: 53,
            54: 54,
            58: erDiagramSMLLAGMABinding35,
          },
          {
            11: 56,
            40: erDiagramSMLLAGMABinding20,
            48: erDiagramSMLLAGMABinding23,
            50: erDiagramSMLLAGMABinding24,
            51: erDiagramSMLLAGMABinding25,
            52: erDiagramSMLLAGMABinding26,
          },
          {
            64: 57,
            70: [1, 58],
            71: [1, 59],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding36, [2, 72]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding36, [2, 73]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding36, [2, 74]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding36, [2, 75]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding36, [2, 76]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 24]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 25]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 26]),
          {
            13: erDiagramSMLLAGMABinding37,
            38: 60,
            41: erDiagramSMLLAGMABinding38,
            42: erDiagramSMLLAGMABinding39,
            45: 62,
            46: 63,
            48: erDiagramSMLLAGMABinding40,
            49: erDiagramSMLLAGMABinding41,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding42, [2, 37]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding42, [2, 38]),
          {
            16: 68,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
            42: erDiagramSMLLAGMABinding39,
          },
          {
            13: erDiagramSMLLAGMABinding37,
            38: 69,
            41: erDiagramSMLLAGMABinding38,
            42: erDiagramSMLLAGMABinding39,
            45: 62,
            46: 63,
            48: erDiagramSMLLAGMABinding40,
            49: erDiagramSMLLAGMABinding41,
          },
          {
            13: [1, 70],
            15: [1, 71],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 17], {
            63: 35,
            12: 72,
            17: [1, 73],
            42: erDiagramSMLLAGMABinding39,
            65: erDiagramSMLLAGMABinding27,
            66: erDiagramSMLLAGMABinding28,
            67: erDiagramSMLLAGMABinding29,
            68: erDiagramSMLLAGMABinding30,
            69: erDiagramSMLLAGMABinding31,
          }),
          {
            19: [1, 74],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 14]),
          {
            18: 75,
            19: [2, 59],
            53: 53,
            54: 54,
            58: erDiagramSMLLAGMABinding35,
          },
          {
            55: 76,
            58: [1, 77],
          },
          {
            58: [2, 65],
          },
          {
            21: [1, 78],
          },
          {
            63: 79,
            65: erDiagramSMLLAGMABinding27,
            66: erDiagramSMLLAGMABinding28,
            67: erDiagramSMLLAGMABinding29,
            68: erDiagramSMLLAGMABinding30,
            69: erDiagramSMLLAGMABinding31,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding43, [2, 77]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding43, [2, 78]),
          {
            6: erDiagramSMLLAGMABinding44,
            10: erDiagramSMLLAGMABinding45,
            39: 80,
            42: erDiagramSMLLAGMABinding46,
            47: erDiagramSMLLAGMABinding47,
          },
          {
            40: [1, 85],
            41: [1, 86],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding48, [2, 43], {
            46: 87,
            13: erDiagramSMLLAGMABinding37,
            41: erDiagramSMLLAGMABinding38,
            48: erDiagramSMLLAGMABinding40,
            49: erDiagramSMLLAGMABinding41,
          }),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 45]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 50]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 51]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 52]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 53]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 41], {
            42: erDiagramSMLLAGMABinding39,
          }),
          {
            6: erDiagramSMLLAGMABinding44,
            10: erDiagramSMLLAGMABinding45,
            39: 88,
            42: erDiagramSMLLAGMABinding46,
            47: erDiagramSMLLAGMABinding47,
          },
          {
            14: 89,
            40: erDiagramSMLLAGMABinding50,
            50: _ErDiagramSMLLAGMA,
            72: erDiagramSMLLAGMABinding51,
          },
          {
            16: 93,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          {
            11: 94,
            40: erDiagramSMLLAGMABinding20,
            48: erDiagramSMLLAGMABinding23,
            50: erDiagramSMLLAGMABinding24,
            51: erDiagramSMLLAGMABinding25,
            52: erDiagramSMLLAGMABinding26,
          },
          {
            18: 95,
            19: [1, 96],
            53: 53,
            54: 54,
            58: erDiagramSMLLAGMABinding35,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 12]),
          {
            19: [2, 60],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding52, [2, 61], {
            56: 97,
            57: 98,
            59: 99,
            61: erDiagramSMLLAGMABinding53,
            62: erDiagramSMLLAGMABinding54,
          }),
          erDiagramSMLLAGMABinding9([19, 58, 61, 62], [2, 66]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 22], {
            15: [1, 103],
            17: [1, 102],
          }),
          erDiagramSMLLAGMABinding9([40, 48, 50, 51, 52], [2, 71]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 36]),
          {
            13: erDiagramSMLLAGMABinding37,
            41: erDiagramSMLLAGMABinding38,
            45: 104,
            46: 63,
            48: erDiagramSMLLAGMABinding40,
            49: erDiagramSMLLAGMABinding41,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 47]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 48]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 49]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding42, [2, 39]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding42, [2, 40]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding49, [2, 46]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 42]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 8]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 79]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 80]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 81]),
          {
            13: [1, 105],
            42: erDiagramSMLLAGMABinding39,
          },
          {
            13: [1, 107],
            15: [1, 106],
          },
          {
            19: [1, 108],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 15]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding52, [2, 62], {
            57: 109,
            60: [1, 110],
            62: erDiagramSMLLAGMABinding54,
          }),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding52, [2, 63]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding55, [2, 67]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding52, [2, 70]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding55, [2, 69]),
          {
            18: 111,
            19: [1, 112],
            53: 53,
            54: 54,
            58: erDiagramSMLLAGMABinding35,
          },
          {
            16: 113,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding48, [2, 44], {
            46: 87,
            13: erDiagramSMLLAGMABinding37,
            41: erDiagramSMLLAGMABinding38,
            48: erDiagramSMLLAGMABinding40,
            49: erDiagramSMLLAGMABinding41,
          }),
          {
            14: 114,
            40: erDiagramSMLLAGMABinding50,
            50: _ErDiagramSMLLAGMA,
            72: erDiagramSMLLAGMABinding51,
          },
          {
            16: 115,
            40: erDiagramSMLLAGMABinding33,
            41: erDiagramSMLLAGMABinding34,
          },
          {
            14: 116,
            40: erDiagramSMLLAGMABinding50,
            50: _ErDiagramSMLLAGMA,
            72: erDiagramSMLLAGMABinding51,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 13]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding52, [2, 64]),
          {
            59: 117,
            61: erDiagramSMLLAGMABinding53,
          },
          {
            19: [1, 118],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 20]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 23], {
            17: [1, 119],
            42: erDiagramSMLLAGMABinding39,
          }),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 11]),
          {
            13: [1, 120],
            42: erDiagramSMLLAGMABinding39,
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 10]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding55, [2, 68]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 18]),
          {
            18: 121,
            19: [1, 122],
            53: 53,
            54: 54,
            58: erDiagramSMLLAGMABinding35,
          },
          {
            14: 123,
            40: erDiagramSMLLAGMABinding50,
            50: _ErDiagramSMLLAGMA,
            72: erDiagramSMLLAGMABinding51,
          },
          {
            19: [1, 124],
          },
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 21]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 9]),
          erDiagramSMLLAGMABinding9(erDiagramSMLLAGMABinding10, [2, 19]),
        ],
        defaultActions: {
          55: [2, 65],
          75: [2, 60],
        },
        parseError: defineFunctionName(function (
          erDiagramSMLLAGMAInput38,
          erDiagramSMLLAGMAInput39,
        ) {
          if (erDiagramSMLLAGMAInput39.recoverable)
            this.trace(erDiagramSMLLAGMAInput38);
          else {
            var erDiagramSMLLAGMABinding134 = Error(erDiagramSMLLAGMAInput38);
            throw (
              (erDiagramSMLLAGMABinding134.hash = erDiagramSMLLAGMAInput39),
              erDiagramSMLLAGMABinding134
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (erDiagramSMLLAGMAInput8) {
          var erDiagramSMLLAGMABinding58 = this,
            erDiagramSMLLAGMABinding59 = [0],
            erDiagramSMLLAGMABinding60 = [],
            erDiagramSMLLAGMABinding61 = [null],
            erDiagramSMLLAGMABinding62 = [],
            erDiagramSMLLAGMABinding63 = this.table,
            erDiagramSMLLAGMABinding64 = "",
            erDiagramSMLLAGMABinding65 = 0,
            erDiagramSMLLAGMABinding66 = 0,
            erDiagramSMLLAGMABinding67 = 0,
            erDiagramSMLLAGMABinding70 = erDiagramSMLLAGMABinding62.slice.call(
              arguments,
              1,
            ),
            erDiagramSMLLAGMABinding71 = Object.create(this.lexer),
            erDiagramSMLLAGMABinding72 = {
              yy: {},
            };
          for (var erDiagramSMLLAGMABinding73 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              erDiagramSMLLAGMABinding73,
            ) &&
              (erDiagramSMLLAGMABinding72.yy[erDiagramSMLLAGMABinding73] =
                this.yy[erDiagramSMLLAGMABinding73]);
          erDiagramSMLLAGMABinding71.setInput(
            erDiagramSMLLAGMAInput8,
            erDiagramSMLLAGMABinding72.yy,
          );
          erDiagramSMLLAGMABinding72.yy.lexer = erDiagramSMLLAGMABinding71;
          erDiagramSMLLAGMABinding72.yy.parser = this;
          erDiagramSMLLAGMABinding71.yylloc === undefined &&
            (erDiagramSMLLAGMABinding71.yylloc = {});
          var erDiagramSMLLAGMABinding74 = erDiagramSMLLAGMABinding71.yylloc;
          erDiagramSMLLAGMABinding62.push(erDiagramSMLLAGMABinding74);
          var erDiagramSMLLAGMABinding75 =
            erDiagramSMLLAGMABinding71.options &&
            erDiagramSMLLAGMABinding71.options.ranges;
          typeof erDiagramSMLLAGMABinding72.yy.parseError == "function"
            ? (this.parseError = erDiagramSMLLAGMABinding72.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function erDiagramSMLLAGMAHelper2(erDiagramSMLLAGMAInput48) {
            erDiagramSMLLAGMABinding59.length -= 2 * erDiagramSMLLAGMAInput48;
            erDiagramSMLLAGMABinding61.length -= erDiagramSMLLAGMAInput48;
            erDiagramSMLLAGMABinding62.length -= erDiagramSMLLAGMAInput48;
          }
          defineFunctionName(erDiagramSMLLAGMAHelper2, "popStack");
          function erDiagramSMLLAGMAHelper3() {
            var erDiagramSMLLAGMABinding123 =
              erDiagramSMLLAGMABinding60.pop() ||
              erDiagramSMLLAGMABinding71.lex() ||
              1;
            return (
              typeof erDiagramSMLLAGMABinding123 != "number" &&
                (erDiagramSMLLAGMABinding123 instanceof Array &&
                  ((erDiagramSMLLAGMABinding60 = erDiagramSMLLAGMABinding123),
                  (erDiagramSMLLAGMABinding123 =
                    erDiagramSMLLAGMABinding60.pop())),
                (erDiagramSMLLAGMABinding123 =
                  erDiagramSMLLAGMABinding58.symbols_[
                    erDiagramSMLLAGMABinding123
                  ] || erDiagramSMLLAGMABinding123)),
              erDiagramSMLLAGMABinding123
            );
          }
          defineFunctionName(erDiagramSMLLAGMAHelper3, "lex");
          for (
            var erDiagramSMLLAGMABinding76,
              erDiagramSMLLAGMABinding77,
              erDiagramSMLLAGMABinding78,
              erDiagramSMLLAGMABinding79,
              erDiagramSMLLAGMABinding80,
              erDiagramSMLLAGMABinding81 = {},
              erDiagramSMLLAGMABinding82,
              erDiagramSMLLAGMABinding83,
              erDiagramSMLLAGMABinding84,
              erDiagramSMLLAGMABinding85;
            ;
          ) {
            if (
              ((erDiagramSMLLAGMABinding78 =
                erDiagramSMLLAGMABinding59[
                  erDiagramSMLLAGMABinding59.length - 1
                ]),
              this.defaultActions[erDiagramSMLLAGMABinding78]
                ? (erDiagramSMLLAGMABinding79 =
                    this.defaultActions[erDiagramSMLLAGMABinding78])
                : ((erDiagramSMLLAGMABinding76 ??= erDiagramSMLLAGMAHelper3()),
                  (erDiagramSMLLAGMABinding79 =
                    erDiagramSMLLAGMABinding63[erDiagramSMLLAGMABinding78] &&
                    erDiagramSMLLAGMABinding63[erDiagramSMLLAGMABinding78][
                      erDiagramSMLLAGMABinding76
                    ])),
              erDiagramSMLLAGMABinding79 === undefined ||
                !erDiagramSMLLAGMABinding79.length ||
                !erDiagramSMLLAGMABinding79[0])
            ) {
              var erDiagramSMLLAGMABinding86 = "";
              for (erDiagramSMLLAGMABinding82 in ((erDiagramSMLLAGMABinding85 =
                []),
              erDiagramSMLLAGMABinding63[erDiagramSMLLAGMABinding78]))
                this.terminals_[erDiagramSMLLAGMABinding82] &&
                  erDiagramSMLLAGMABinding82 > 2 &&
                  erDiagramSMLLAGMABinding85.push(
                    "'" + this.terminals_[erDiagramSMLLAGMABinding82] + "'",
                  );
              erDiagramSMLLAGMABinding86 =
                erDiagramSMLLAGMABinding71.showPosition
                  ? "Parse error on line " +
                    (erDiagramSMLLAGMABinding65 + 1) +
                    ":\n" +
                    erDiagramSMLLAGMABinding71.showPosition() +
                    "\nExpecting " +
                    erDiagramSMLLAGMABinding85.join(", ") +
                    ", got '" +
                    (this.terminals_[erDiagramSMLLAGMABinding76] ||
                      erDiagramSMLLAGMABinding76) +
                    "'"
                  : "Parse error on line " +
                    (erDiagramSMLLAGMABinding65 + 1) +
                    ": Unexpected " +
                    (erDiagramSMLLAGMABinding76 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[erDiagramSMLLAGMABinding76] ||
                          erDiagramSMLLAGMABinding76) +
                        "'");
              this.parseError(erDiagramSMLLAGMABinding86, {
                text: erDiagramSMLLAGMABinding71.match,
                token:
                  this.terminals_[erDiagramSMLLAGMABinding76] ||
                  erDiagramSMLLAGMABinding76,
                line: erDiagramSMLLAGMABinding71.yylineno,
                loc: erDiagramSMLLAGMABinding74,
                expected: erDiagramSMLLAGMABinding85,
              });
            }
            if (
              erDiagramSMLLAGMABinding79[0] instanceof Array &&
              erDiagramSMLLAGMABinding79.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  erDiagramSMLLAGMABinding78 +
                  ", token: " +
                  erDiagramSMLLAGMABinding76,
              );
            switch (erDiagramSMLLAGMABinding79[0]) {
              case 1:
                erDiagramSMLLAGMABinding59.push(erDiagramSMLLAGMABinding76);
                erDiagramSMLLAGMABinding61.push(
                  erDiagramSMLLAGMABinding71.yytext,
                );
                erDiagramSMLLAGMABinding62.push(
                  erDiagramSMLLAGMABinding71.yylloc,
                );
                erDiagramSMLLAGMABinding59.push(erDiagramSMLLAGMABinding79[1]);
                erDiagramSMLLAGMABinding76 = null;
                erDiagramSMLLAGMABinding77
                  ? ((erDiagramSMLLAGMABinding76 = erDiagramSMLLAGMABinding77),
                    (erDiagramSMLLAGMABinding77 = null))
                  : ((erDiagramSMLLAGMABinding66 =
                      erDiagramSMLLAGMABinding71.yyleng),
                    (erDiagramSMLLAGMABinding64 =
                      erDiagramSMLLAGMABinding71.yytext),
                    (erDiagramSMLLAGMABinding65 =
                      erDiagramSMLLAGMABinding71.yylineno),
                    (erDiagramSMLLAGMABinding74 =
                      erDiagramSMLLAGMABinding71.yylloc),
                    erDiagramSMLLAGMABinding67 > 0 &&
                      erDiagramSMLLAGMABinding67--);
                break;
              case 2:
                if (
                  ((erDiagramSMLLAGMABinding83 =
                    this.productions_[erDiagramSMLLAGMABinding79[1]][1]),
                  (erDiagramSMLLAGMABinding81.$ =
                    erDiagramSMLLAGMABinding61[
                      erDiagramSMLLAGMABinding61.length -
                        erDiagramSMLLAGMABinding83
                    ]),
                  (erDiagramSMLLAGMABinding81._$ = {
                    first_line:
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length -
                          (erDiagramSMLLAGMABinding83 || 1)
                      ].first_line,
                    last_line:
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length - 1
                      ].last_line,
                    first_column:
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length -
                          (erDiagramSMLLAGMABinding83 || 1)
                      ].first_column,
                    last_column:
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length - 1
                      ].last_column,
                  }),
                  erDiagramSMLLAGMABinding75 &&
                    (erDiagramSMLLAGMABinding81._$.range = [
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length -
                          (erDiagramSMLLAGMABinding83 || 1)
                      ].range[0],
                      erDiagramSMLLAGMABinding62[
                        erDiagramSMLLAGMABinding62.length - 1
                      ].range[1],
                    ]),
                  (erDiagramSMLLAGMABinding80 = this.performAction.apply(
                    erDiagramSMLLAGMABinding81,
                    [
                      erDiagramSMLLAGMABinding64,
                      erDiagramSMLLAGMABinding66,
                      erDiagramSMLLAGMABinding65,
                      erDiagramSMLLAGMABinding72.yy,
                      erDiagramSMLLAGMABinding79[1],
                      erDiagramSMLLAGMABinding61,
                      erDiagramSMLLAGMABinding62,
                    ].concat(erDiagramSMLLAGMABinding70),
                  )),
                  erDiagramSMLLAGMABinding80 !== undefined)
                )
                  return erDiagramSMLLAGMABinding80;
                erDiagramSMLLAGMABinding83 &&
                  ((erDiagramSMLLAGMABinding59 =
                    erDiagramSMLLAGMABinding59.slice(
                      0,
                      -1 * erDiagramSMLLAGMABinding83 * 2,
                    )),
                  (erDiagramSMLLAGMABinding61 =
                    erDiagramSMLLAGMABinding61.slice(
                      0,
                      -1 * erDiagramSMLLAGMABinding83,
                    )),
                  (erDiagramSMLLAGMABinding62 =
                    erDiagramSMLLAGMABinding62.slice(
                      0,
                      -1 * erDiagramSMLLAGMABinding83,
                    )));
                erDiagramSMLLAGMABinding59.push(
                  this.productions_[erDiagramSMLLAGMABinding79[1]][0],
                );
                erDiagramSMLLAGMABinding61.push(erDiagramSMLLAGMABinding81.$);
                erDiagramSMLLAGMABinding62.push(erDiagramSMLLAGMABinding81._$);
                erDiagramSMLLAGMABinding84 =
                  erDiagramSMLLAGMABinding63[
                    erDiagramSMLLAGMABinding59[
                      erDiagramSMLLAGMABinding59.length - 2
                    ]
                  ][
                    erDiagramSMLLAGMABinding59[
                      erDiagramSMLLAGMABinding59.length - 1
                    ]
                  ];
                erDiagramSMLLAGMABinding59.push(erDiagramSMLLAGMABinding84);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    erDiagramSMLLAGMABinding56.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          erDiagramSMLLAGMAInput42,
          erDiagramSMLLAGMAInput43,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              erDiagramSMLLAGMAInput42,
              erDiagramSMLLAGMAInput43,
            );
          else throw Error(erDiagramSMLLAGMAInput42);
        }, "parseError"),
        setInput: defineFunctionName(function (
          erDiagramSMLLAGMAInput23,
          erDiagramSMLLAGMAInput24,
        ) {
          return (
            (this.yy = erDiagramSMLLAGMAInput24 || this.yy || {}),
            (this._input = erDiagramSMLLAGMAInput23),
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
          var erDiagramSMLLAGMABinding111 = this._input[0];
          return (
            (this.yytext += erDiagramSMLLAGMABinding111),
            this.yyleng++,
            this.offset++,
            (this.match += erDiagramSMLLAGMABinding111),
            (this.matched += erDiagramSMLLAGMABinding111),
            erDiagramSMLLAGMABinding111.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            erDiagramSMLLAGMABinding111
          );
        }, "input"),
        unput: defineFunctionName(function (erDiagramSMLLAGMAInput20) {
          var erDiagramSMLLAGMABinding100 = erDiagramSMLLAGMAInput20.length,
            erDiagramSMLLAGMABinding101 =
              erDiagramSMLLAGMAInput20.split(/(?:\r\n?|\n)/g);
          this._input = erDiagramSMLLAGMAInput20 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - erDiagramSMLLAGMABinding100,
          );
          this.offset -= erDiagramSMLLAGMABinding100;
          var erDiagramSMLLAGMABinding102 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          erDiagramSMLLAGMABinding101.length - 1 &&
            (this.yylineno -= erDiagramSMLLAGMABinding101.length - 1);
          var erDiagramSMLLAGMABinding103 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: erDiagramSMLLAGMABinding101
                ? (erDiagramSMLLAGMABinding101.length ===
                  erDiagramSMLLAGMABinding102.length
                    ? this.yylloc.first_column
                    : 0) +
                  erDiagramSMLLAGMABinding102[
                    erDiagramSMLLAGMABinding102.length -
                      erDiagramSMLLAGMABinding101.length
                  ].length -
                  erDiagramSMLLAGMABinding101[0].length
                : this.yylloc.first_column - erDiagramSMLLAGMABinding100,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                erDiagramSMLLAGMABinding103[0],
                erDiagramSMLLAGMABinding103[0] +
                  this.yyleng -
                  erDiagramSMLLAGMABinding100,
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
        less: defineFunctionName(function (erDiagramSMLLAGMAInput51) {
          this.unput(this.match.slice(erDiagramSMLLAGMAInput51));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var erDiagramSMLLAGMABinding128 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (erDiagramSMLLAGMABinding128.length > 20 ? "..." : "") +
            erDiagramSMLLAGMABinding128.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var erDiagramSMLLAGMABinding119 = this.match;
          return (
            erDiagramSMLLAGMABinding119.length < 20 &&
              (erDiagramSMLLAGMABinding119 += this._input.substr(
                0,
                20 - erDiagramSMLLAGMABinding119.length,
              )),
            (
              erDiagramSMLLAGMABinding119.substr(0, 20) +
              (erDiagramSMLLAGMABinding119.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var erDiagramSMLLAGMABinding129 = this.pastInput(),
            erDiagramSMLLAGMABinding130 = Array(
              erDiagramSMLLAGMABinding129.length + 1,
            ).join("-");
          return (
            erDiagramSMLLAGMABinding129 +
            this.upcomingInput() +
            "\n" +
            erDiagramSMLLAGMABinding130 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          erDiagramSMLLAGMAInput13,
          erDiagramSMLLAGMAInput14,
        ) {
          var erDiagramSMLLAGMABinding87,
            erDiagramSMLLAGMABinding88,
            erDiagramSMLLAGMABinding89;
          if (
            (this.options.backtrack_lexer &&
              ((erDiagramSMLLAGMABinding89 = {
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
                (erDiagramSMLLAGMABinding89.yylloc.range =
                  this.yylloc.range.slice(0))),
            (erDiagramSMLLAGMABinding88 =
              erDiagramSMLLAGMAInput13[0].match(/(?:\r\n?|\n).*/g)),
            erDiagramSMLLAGMABinding88 &&
              (this.yylineno += erDiagramSMLLAGMABinding88.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: erDiagramSMLLAGMABinding88
                ? erDiagramSMLLAGMABinding88[
                    erDiagramSMLLAGMABinding88.length - 1
                  ].length -
                  erDiagramSMLLAGMABinding88[
                    erDiagramSMLLAGMABinding88.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + erDiagramSMLLAGMAInput13[0].length,
            }),
            (this.yytext += erDiagramSMLLAGMAInput13[0]),
            (this.match += erDiagramSMLLAGMAInput13[0]),
            (this.matches = erDiagramSMLLAGMAInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              erDiagramSMLLAGMAInput13[0].length,
            )),
            (this.matched += erDiagramSMLLAGMAInput13[0]),
            (erDiagramSMLLAGMABinding87 = this.performAction.call(
              this,
              this.yy,
              this,
              erDiagramSMLLAGMAInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            erDiagramSMLLAGMABinding87)
          )
            return erDiagramSMLLAGMABinding87;
          if (this._backtrack) {
            for (var erDiagramSMLLAGMABinding90 in erDiagramSMLLAGMABinding89)
              this[erDiagramSMLLAGMABinding90] =
                erDiagramSMLLAGMABinding89[erDiagramSMLLAGMABinding90];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var erDiagramSMLLAGMABinding94,
            erDiagramSMLLAGMABinding95,
            erDiagramSMLLAGMABinding96,
            erDiagramSMLLAGMABinding97;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var erDiagramSMLLAGMABinding98 = this._currentRules(),
              erDiagramSMLLAGMABinding99 = 0;
            erDiagramSMLLAGMABinding99 < erDiagramSMLLAGMABinding98.length;
            erDiagramSMLLAGMABinding99++
          )
            if (
              ((erDiagramSMLLAGMABinding96 = this._input.match(
                this.rules[
                  erDiagramSMLLAGMABinding98[erDiagramSMLLAGMABinding99]
                ],
              )),
              erDiagramSMLLAGMABinding96 &&
                (!erDiagramSMLLAGMABinding95 ||
                  erDiagramSMLLAGMABinding96[0].length >
                    erDiagramSMLLAGMABinding95[0].length))
            ) {
              if (
                ((erDiagramSMLLAGMABinding95 = erDiagramSMLLAGMABinding96),
                (erDiagramSMLLAGMABinding97 = erDiagramSMLLAGMABinding99),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((erDiagramSMLLAGMABinding94 = this.test_match(
                    erDiagramSMLLAGMABinding96,
                    erDiagramSMLLAGMABinding98[erDiagramSMLLAGMABinding99],
                  )),
                  erDiagramSMLLAGMABinding94 !== false)
                )
                  return erDiagramSMLLAGMABinding94;
                if (this._backtrack) {
                  erDiagramSMLLAGMABinding95 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return erDiagramSMLLAGMABinding95
            ? ((erDiagramSMLLAGMABinding94 = this.test_match(
                erDiagramSMLLAGMABinding95,
                erDiagramSMLLAGMABinding98[erDiagramSMLLAGMABinding97],
              )),
              erDiagramSMLLAGMABinding94 === false
                ? false
                : erDiagramSMLLAGMABinding94)
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
        begin: defineFunctionName(function (erDiagramSMLLAGMAInput52) {
          this.conditionStack.push(erDiagramSMLLAGMAInput52);
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
        topState: defineFunctionName(function (erDiagramSMLLAGMAInput35) {
          return (
            (erDiagramSMLLAGMAInput35 =
              this.conditionStack.length -
              1 -
              Math.abs(erDiagramSMLLAGMAInput35 || 0)),
            erDiagramSMLLAGMAInput35 >= 0
              ? this.conditionStack[erDiagramSMLLAGMAInput35]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (erDiagramSMLLAGMAInput54) {
          this.begin(erDiagramSMLLAGMAInput54);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          erDiagramSMLLAGMAInput9,
          erDiagramSMLLAGMAInput10,
          erDiagramSMLLAGMAInput11,
          erDiagramSMLLAGMAInput12,
        ) {
          switch (erDiagramSMLLAGMAInput11) {
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
              return 72;
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
              return 61;
            case 25:
              return 58;
            case 26:
              return 58;
            case 27:
              return 62;
            case 28:
              break;
            case 29:
              return (this.popState(), 19);
            case 30:
              return erDiagramSMLLAGMAInput10.yytext[0];
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
              return 65;
            case 42:
              return 67;
            case 43:
              return 67;
            case 44:
              return 67;
            case 45:
              return 65;
            case 46:
              return 65;
            case 47:
              return 66;
            case 48:
              return 66;
            case 49:
              return 66;
            case 50:
              return 66;
            case 51:
              return 66;
            case 52:
              return 67;
            case 53:
              return 66;
            case 54:
              return 67;
            case 55:
              return 68;
            case 56:
              return 68;
            case 57:
              return 51;
            case 58:
              return 68;
            case 59:
              return 68;
            case 60:
              return 68;
            case 61:
              return 52;
            case 62:
              return 48;
            case 63:
              return 68;
            case 64:
              return 65;
            case 65:
              return 66;
            case 66:
              return 67;
            case 67:
              return 69;
            case 68:
              return 70;
            case 69:
              return 71;
            case 70:
              return 71;
            case 71:
              return 70;
            case 72:
              return 70;
            case 73:
              return 70;
            case 74:
              return 41;
            case 75:
              return 47;
            case 76:
              return 40;
            case 77:
              return erDiagramSMLLAGMAInput10.yytext[0];
            case 78:
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
          /^(?:[0-9]+\.[0-9]+)/i,
          /^(?:1(?=\s+[A-Za-z_"']))/i,
          /^(?:1(?=\s+[0-9]))/i,
          /^(?:1(?=(--|\.\.|\.-|-\.)))/i,
          /^(?:1\b)/i,
          /^(?:[0-9]+)/i,
          /^(?:\|\|)/i,
          /^(?:o\|)/i,
          /^(?:o\{)/i,
          /^(?:\|\{)/i,
          /^(?:u(?=[\.\-\|]))/i,
          /^(?:\.\.)/i,
          /^(?:--)/i,
          /^(?:to\b)/i,
          /^(?:optionally to\b)/i,
          /^(?:\.-)/i,
          /^(?:-\.)/i,
          /^(?:([^\x00-\x7F]|\w|-|\*)+)/i,
          /^(?:;)/i,
          /^(?:([^\x00-\x7F]|\w|-|\*|\.)+)/i,
          /^(?:.)/i,
          /^(?:$)/i,
        ],
        conditions: {
          style: {
            rules: [34, 35, 36, 37, 38, 74, 75],
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
              67, 68, 69, 70, 71, 72, 73, 76, 77, 78,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function erDiagramSMLLAGMAHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(erDiagramSMLLAGMAHelper1, "Parser"),
      (erDiagramSMLLAGMAHelper1.prototype = erDiagramSMLLAGMABinding56),
      (erDiagramSMLLAGMABinding56.Parser = erDiagramSMLLAGMAHelper1),
      new erDiagramSMLLAGMAHelper1()
    );
  })();
  erDiagramSMLLAGMABinding1.parser = erDiagramSMLLAGMABinding1;
  erDiagramSMLLAGMABinding2 = erDiagramSMLLAGMABinding1;
  erDiagramSMLLAGMABinding3 = class {
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
      this.setAccTitle = chunkICPOFSXXH;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setAccDescription = chunkICPOFSXXV;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setDiagramTitle = chunkICPOFSXXG;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getConfig = defineFunctionName(
        () => chunkICPOFSXXB().er,
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
    addEntity(erDiagramSMLLAGMAInput21, erDiagramSMLLAGMAInput22 = "") {
      return (
        this.entities.has(erDiagramSMLLAGMAInput21)
          ? !this.entities.get(erDiagramSMLLAGMAInput21)?.alias &&
            erDiagramSMLLAGMAInput22 &&
            ((this.entities.get(erDiagramSMLLAGMAInput21).alias =
              erDiagramSMLLAGMAInput22),
            logger.info(
              `Add alias '${erDiagramSMLLAGMAInput22}' to entity '${erDiagramSMLLAGMAInput21}'`,
            ))
          : (this.entities.set(erDiagramSMLLAGMAInput21, {
              id: `entity-${erDiagramSMLLAGMAInput21}-${this.entities.size}`,
              label: erDiagramSMLLAGMAInput21,
              attributes: [],
              alias: erDiagramSMLLAGMAInput22,
              shape: "erBox",
              look: chunkICPOFSXXB().look ?? "default",
              cssClasses: "default",
              cssStyles: [],
              labelType: "markdown",
            }),
            logger.info("Added new entity :", erDiagramSMLLAGMAInput21)),
        this.entities.get(erDiagramSMLLAGMAInput21)
      );
    }
    getEntity(erDiagramSMLLAGMAInput53) {
      return this.entities.get(erDiagramSMLLAGMAInput53);
    }
    getEntities() {
      return this.entities;
    }
    getClasses() {
      return this.classes;
    }
    addAttributes(erDiagramSMLLAGMAInput29, erDiagramSMLLAGMAInput30) {
      let erDiagramSMLLAGMABinding117 = this.addEntity(
          erDiagramSMLLAGMAInput29,
        ),
        erDiagramSMLLAGMABinding118;
      for (
        erDiagramSMLLAGMABinding118 = erDiagramSMLLAGMAInput30.length - 1;
        erDiagramSMLLAGMABinding118 >= 0;
        erDiagramSMLLAGMABinding118--
      ) {
        erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118].keys ||
          (erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118].keys = []);
        erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118].comment ||
          (erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118].comment = "");
        erDiagramSMLLAGMABinding117.attributes.push(
          erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118],
        );
        logger.debug(
          "Added attribute ",
          erDiagramSMLLAGMAInput30[erDiagramSMLLAGMABinding118].name,
        );
      }
    }
    addRelationship(
      erDiagramSMLLAGMAInput31,
      erDiagramSMLLAGMAInput32,
      erDiagramSMLLAGMAInput33,
      erDiagramSMLLAGMAInput34,
    ) {
      let erDiagramSMLLAGMABinding120 = this.entities.get(
          erDiagramSMLLAGMAInput31,
        ),
        erDiagramSMLLAGMABinding121 = this.entities.get(
          erDiagramSMLLAGMAInput33,
        );
      if (!erDiagramSMLLAGMABinding120 || !erDiagramSMLLAGMABinding121) return;
      let erDiagramSMLLAGMABinding122 = {
        entityA: erDiagramSMLLAGMABinding120.id,
        roleA: erDiagramSMLLAGMAInput32,
        entityB: erDiagramSMLLAGMABinding121.id,
        relSpec: erDiagramSMLLAGMAInput34,
      };
      this.relationships.push(erDiagramSMLLAGMABinding122);
      logger.debug("Added new relationship :", erDiagramSMLLAGMABinding122);
    }
    getRelationships() {
      return this.relationships;
    }
    getDirection() {
      return this.direction;
    }
    setDirection(erDiagramSMLLAGMAInput55) {
      this.direction = erDiagramSMLLAGMAInput55;
    }
    getCompiledStyles(erDiagramSMLLAGMAInput28) {
      let erDiagramSMLLAGMABinding115 = [];
      for (let erDiagramSMLLAGMABinding131 of erDiagramSMLLAGMAInput28) {
        let erDiagramSMLLAGMABinding133 = this.classes.get(
          erDiagramSMLLAGMABinding131,
        );
        erDiagramSMLLAGMABinding133?.styles &&
          (erDiagramSMLLAGMABinding115 = [
            ...erDiagramSMLLAGMABinding115,
            ...(erDiagramSMLLAGMABinding133.styles ?? []),
          ].map((item) => item.trim()));
        erDiagramSMLLAGMABinding133?.textStyles &&
          (erDiagramSMLLAGMABinding115 = [
            ...erDiagramSMLLAGMABinding115,
            ...(erDiagramSMLLAGMABinding133.textStyles ?? []),
          ].map((item) => item.trim()));
      }
      return erDiagramSMLLAGMABinding115;
    }
    addCssStyles(erDiagramSMLLAGMAInput36, erDiagramSMLLAGMAInput37) {
      for (let erDiagramSMLLAGMABinding135 of erDiagramSMLLAGMAInput36) {
        let erDiagramSMLLAGMABinding136 = this.entities.get(
          erDiagramSMLLAGMABinding135,
        );
        if (!erDiagramSMLLAGMAInput37 || !erDiagramSMLLAGMABinding136) return;
        for (let erDiagramSMLLAGMABinding143 of erDiagramSMLLAGMAInput37)
          erDiagramSMLLAGMABinding136.cssStyles.push(
            erDiagramSMLLAGMABinding143,
          );
      }
    }
    addClass(erDiagramSMLLAGMAInput26, erDiagramSMLLAGMAInput27) {
      erDiagramSMLLAGMAInput26.forEach((item) => {
        let erDiagramSMLLAGMABinding114 = this.classes.get(item);
        erDiagramSMLLAGMABinding114 === undefined &&
          ((erDiagramSMLLAGMABinding114 = {
            id: item,
            styles: [],
            textStyles: [],
          }),
          this.classes.set(item, erDiagramSMLLAGMABinding114));
        erDiagramSMLLAGMAInput27 &&
          erDiagramSMLLAGMAInput27.forEach(function (_item) {
            if (/color/.exec(_item)) {
              let erDiagramSMLLAGMABinding138 = _item.replace("fill", "bgFill");
              erDiagramSMLLAGMABinding114.textStyles.push(
                erDiagramSMLLAGMABinding138,
              );
            }
            erDiagramSMLLAGMABinding114.styles.push(_item);
          });
      });
    }
    setClass(erDiagramSMLLAGMAInput40, erDiagramSMLLAGMAInput41) {
      for (let erDiagramSMLLAGMABinding137 of erDiagramSMLLAGMAInput40) {
        let erDiagramSMLLAGMABinding139 = this.entities.get(
          erDiagramSMLLAGMABinding137,
        );
        if (erDiagramSMLLAGMABinding139)
          for (let erDiagramSMLLAGMABinding142 of erDiagramSMLLAGMAInput41)
            erDiagramSMLLAGMABinding139.cssClasses +=
              " " + erDiagramSMLLAGMABinding142;
      }
    }
    clear() {
      this.entities = new Map();
      this.classes = new Map();
      this.relationships = [];
      _chunkICPOFSXXA();
    }
    getData() {
      let erDiagramSMLLAGMABinding104 = [],
        erDiagramSMLLAGMABinding105 = [],
        erDiagramSMLLAGMABinding106 = chunkICPOFSXXB(),
        erDiagramSMLLAGMABinding107 = 0;
      for (let erDiagramSMLLAGMABinding124 of this.entities.keys()) {
        let erDiagramSMLLAGMABinding132 = this.entities.get(
          erDiagramSMLLAGMABinding124,
        );
        erDiagramSMLLAGMABinding132 &&
          ((erDiagramSMLLAGMABinding132.cssCompiledStyles =
            this.getCompiledStyles(
              erDiagramSMLLAGMABinding132.cssClasses.split(" "),
            )),
          (erDiagramSMLLAGMABinding132.colorIndex =
            erDiagramSMLLAGMABinding107++),
          erDiagramSMLLAGMABinding104.push(erDiagramSMLLAGMABinding132));
      }
      let erDiagramSMLLAGMABinding108 = 0;
      for (let erDiagramSMLLAGMABinding109 of this.relationships) {
        let erDiagramSMLLAGMABinding110 = {
          id: chunk5PVQY5BWS(
            erDiagramSMLLAGMABinding109.entityA,
            erDiagramSMLLAGMABinding109.entityB,
            {
              prefix: "id",
              counter: erDiagramSMLLAGMABinding108++,
            },
          ),
          type: "normal",
          curve: "basis",
          start: erDiagramSMLLAGMABinding109.entityA,
          end: erDiagramSMLLAGMABinding109.entityB,
          label: erDiagramSMLLAGMABinding109.roleA,
          labelpos: "c",
          thickness: "normal",
          classes: "relationshipLine",
          arrowTypeStart:
            erDiagramSMLLAGMABinding109.relSpec.cardB.toLowerCase(),
          arrowTypeEnd: erDiagramSMLLAGMABinding109.relSpec.cardA.toLowerCase(),
          pattern:
            erDiagramSMLLAGMABinding109.relSpec.relType == "IDENTIFYING"
              ? "solid"
              : "dashed",
          look: erDiagramSMLLAGMABinding106.look,
          labelType: "markdown",
        };
        erDiagramSMLLAGMABinding105.push(erDiagramSMLLAGMABinding110);
      }
      return {
        nodes: erDiagramSMLLAGMABinding104,
        edges: erDiagramSMLLAGMABinding105,
        other: {},
        config: erDiagramSMLLAGMABinding106,
        direction: "TB",
      };
    }
  };
  erDiagramSMLLAGMABinding4 = {};
  defineEnumerableGetters(erDiagramSMLLAGMABinding4, {
    draw: () => erDiagramSMLLAGMABinding5,
  });
  erDiagramSMLLAGMABinding5 = defineFunctionName(async function (
    erDiagramSMLLAGMAInput15,
    erDiagramSMLLAGMAInput16,
    erDiagramSMLLAGMAInput17,
    erDiagramSMLLAGMAInput18,
  ) {
    logger.info("REF0:");
    logger.info("Drawing er diagram (unified)", erDiagramSMLLAGMAInput16);
    let { securityLevel, er, layout } = chunkICPOFSXXB(),
      erDiagramSMLLAGMABinding91 = erDiagramSMLLAGMAInput18.db.getData(),
      erDiagramSMLLAGMABinding92 = chunk55IACEB6T(
        erDiagramSMLLAGMAInput16,
        securityLevel,
      );
    erDiagramSMLLAGMABinding91.type = erDiagramSMLLAGMAInput18.type;
    erDiagramSMLLAGMABinding91.layoutAlgorithm = chunk336JU56OT(layout);
    erDiagramSMLLAGMABinding91.config.flowchart.nodeSpacing =
      er?.nodeSpacing || 140;
    erDiagramSMLLAGMABinding91.config.flowchart.rankSpacing =
      er?.rankSpacing || 80;
    erDiagramSMLLAGMABinding91.direction =
      erDiagramSMLLAGMAInput18.db.getDirection();
    let { config } = erDiagramSMLLAGMABinding91,
      { look } = config;
    look === "neo"
      ? (erDiagramSMLLAGMABinding91.markers = [
          "only_one_neo",
          "zero_or_one_neo",
          "one_or_more_neo",
          "zero_or_more_neo",
        ])
      : (erDiagramSMLLAGMABinding91.markers = [
          "only_one",
          "zero_or_one",
          "one_or_more",
          "zero_or_more",
        ]);
    erDiagramSMLLAGMABinding91.diagramId = erDiagramSMLLAGMAInput16;
    await chunk336JU56OI(
      erDiagramSMLLAGMABinding91,
      erDiagramSMLLAGMABinding92,
    );
    erDiagramSMLLAGMABinding91.layoutAlgorithm === "elk" &&
      erDiagramSMLLAGMABinding92.select(".edges").lower();
    let erDiagramSMLLAGMABinding93 = erDiagramSMLLAGMABinding92.selectAll(
      '[id*="-background"]',
    );
    Array.from(erDiagramSMLLAGMABinding93).length > 0 &&
      erDiagramSMLLAGMABinding93.each(function () {
        let erDiagramSMLLAGMABinding125 = select(this),
          erDiagramSMLLAGMABinding126 = erDiagramSMLLAGMABinding125
            .attr("id")
            .replace("-background", ""),
          erDiagramSMLLAGMABinding127 = erDiagramSMLLAGMABinding92.select(
            `#${CSS.escape(erDiagramSMLLAGMABinding126)}`,
          );
        if (!erDiagramSMLLAGMABinding127.empty()) {
          let erDiagramSMLLAGMABinding140 =
            erDiagramSMLLAGMABinding127.attr("transform");
          erDiagramSMLLAGMABinding125.attr(
            "transform",
            erDiagramSMLLAGMABinding140,
          );
        }
      });
    chunk5PVQY5BWG.insertTitle(
      erDiagramSMLLAGMABinding92,
      "erDiagramTitleText",
      er?.titleTopMargin ?? 25,
      erDiagramSMLLAGMAInput18.db.getDiagramTitle(),
    );
    chunkEDXVE4YYN(
      erDiagramSMLLAGMABinding92,
      8,
      "erDiagram",
      er?.useMaxWidth ?? true,
    );
  }, "draw");
  erDiagramSMLLAGMABinding6 = defineFunctionName(
    (erDiagramSMLLAGMAInput49, erDiagramSMLLAGMAInput50) => {
      let erDiagramSMLLAGMABinding141 = m;
      return _(
        erDiagramSMLLAGMABinding141(erDiagramSMLLAGMAInput49, "r"),
        erDiagramSMLLAGMABinding141(erDiagramSMLLAGMAInput49, "g"),
        erDiagramSMLLAGMABinding141(erDiagramSMLLAGMAInput49, "b"),
        erDiagramSMLLAGMAInput50,
      );
    },
    "fade",
  );
  erDiagramSMLLAGMABinding7 = new Set(["redux-color", "redux-dark-color"]);
  erDiagramSMLLAGMABinding8 = defineFunctionName((erDiagramSMLLAGMAInput25) => {
    let { theme, look, bkgColorArray, borderColorArray } =
      erDiagramSMLLAGMAInput25;
    if (!erDiagramSMLLAGMABinding7.has(theme)) return "";
    let erDiagramSMLLAGMABinding112 = bkgColorArray?.length > 0,
      erDiagramSMLLAGMABinding113 = "";
    for (
      let erDiagramSMLLAGMABinding116 = 0;
      erDiagramSMLLAGMABinding116 < erDiagramSMLLAGMAInput25.THEME_COLOR_LIMIT;
      erDiagramSMLLAGMABinding116++
    )
      erDiagramSMLLAGMABinding113 += `

    [data-look="${look}"][data-color-id="color-${erDiagramSMLLAGMABinding116}"].node path {
    stroke: ${borderColorArray[erDiagramSMLLAGMABinding116]};
    ${erDiagramSMLLAGMABinding112 ? `fill: ${bkgColorArray[erDiagramSMLLAGMABinding116]};` : ""}
    }

    [data-look="${look}"][data-color-id="color-${erDiagramSMLLAGMABinding116}"].node  rect {
    stroke: ${borderColorArray[erDiagramSMLLAGMABinding116]};
    ${erDiagramSMLLAGMABinding112 ? `fill: ${bkgColorArray[erDiagramSMLLAGMABinding116]};` : ""}
     }
    `;
    return erDiagramSMLLAGMABinding113;
  }, "genColor");
  ErDiagramSMLLAGMA = {
    parser: erDiagramSMLLAGMABinding2,
    get db() {
      return new erDiagramSMLLAGMABinding3();
    },
    renderer: erDiagramSMLLAGMABinding4,
    styles: defineFunctionName((erDiagramSMLLAGMAInput19) => {
      let { look, theme, erEdgeLabelBackground, strokeWidth } =
        erDiagramSMLLAGMAInput19;
      return `
    ${erDiagramSMLLAGMABinding8(erDiagramSMLLAGMAInput19)}
  .entityBox {
    fill: ${erDiagramSMLLAGMAInput19.mainBkg};
    stroke: ${erDiagramSMLLAGMAInput19.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${erDiagramSMLLAGMAInput19.tertiaryColor};
    opacity: 0.7;
    background-color: ${erDiagramSMLLAGMAInput19.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

  .labelBkg {
    background-color: ${erDiagramSMLLAGMABinding7.has(theme) && erEdgeLabelBackground ? erEdgeLabelBackground : erDiagramSMLLAGMABinding6(erDiagramSMLLAGMAInput19.tertiaryColor, 0.5)};
  }

  .edgeLabel {
    background-color: ${erDiagramSMLLAGMABinding7.has(theme) && erEdgeLabelBackground ? erEdgeLabelBackground : erDiagramSMLLAGMAInput19.edgeLabelBackground};
  }
  .edgeLabel .label rect {
    fill: ${erDiagramSMLLAGMABinding7.has(theme) && erEdgeLabelBackground ? erEdgeLabelBackground : erDiagramSMLLAGMAInput19.edgeLabelBackground};
  }
  .edgeLabel .label text {
    fill: ${erDiagramSMLLAGMAInput19.textColor};
  }

  .edgeLabel .label {
    fill: ${erDiagramSMLLAGMAInput19.nodeBorder};
    font-size: 14px;
  }

  .label {
    font-family: ${erDiagramSMLLAGMAInput19.fontFamily};
    color: ${erDiagramSMLLAGMAInput19.nodeTextColor || erDiagramSMLLAGMAInput19.textColor};
  }

  .edge-pattern-dashed {
    stroke-dasharray: 8,8;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon
  {
    fill: ${erDiagramSMLLAGMAInput19.mainBkg};
    stroke: ${erDiagramSMLLAGMAInput19.nodeBorder};
    stroke-width: ${look === "neo" ? strokeWidth : "1px"};
  }

  .relationshipLine {
    stroke: ${erDiagramSMLLAGMAInput19.lineColor};
    stroke-width: ${look === "neo" ? strokeWidth : "1px"};
    fill: none;
  }

  .marker {
    fill: none !important;
    stroke: ${erDiagramSMLLAGMAInput19.lineColor} !important;
    stroke-width: 1;
  }
  [data-look=neo].labelBkg {
    background-color: ${erDiagramSMLLAGMABinding6(erDiagramSMLLAGMAInput19.tertiaryColor, 0.5)};
  }
`;
    }, "getStyles"),
  };
})();
export { ErDiagramSMLLAGMA as diagram };
