// Restored from ref/webview/assets/requirementDiagram-UZGBJVZJ-CcQFOcwV.js
// Mermaid requirement diagram definition (primary: db + renderer + parser). Unblocked by mermaid-layout-loaders.
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
import { chunkS3R3BYOJG, chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA } from "./mermaid-create-text";
import { initMermaidLineOffsetChunk } from "../../diagrams/line-offset-helpers";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "../../diagrams/subgraph-title-margins";
import { initGetDiagramElementChunk as chunk55IACEB6N, getDiagramElement as t } from "../../diagrams/get-diagram-element";
import { setupViewPortForSVG as chunkQN33PNHLN, initSetupViewPortForSvgChunk as chunkQN33PNHLT } from "../../diagrams/setup-viewport-for-svg";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import { chunkJZLCHNYAI } from "./mermaid-flowchart-nodes";
import { chunkQXUST7PYN } from "./mermaid-flowchart-edges";
import {
  chunkN4CR4FBYI,
  chunkN4CR4FBYN,
  chunkN4CR4FBYT,
} from "../../diagrams/mermaid-layout-loaders";
var requirementDiagramUZGBJVZJBinding1,
  requirementDiagramUZGBJVZJBinding2,
  requirementDiagramUZGBJVZJBinding3,
  requirementDiagramUZGBJVZJBinding4,
  requirementDiagramUZGBJVZJBinding5,
  requirementDiagramUZGBJVZJBinding6,
  RequirementDiagramUZGBJVZJ;
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
  requirementDiagramUZGBJVZJBinding1 = (function () {
    var requirementDiagramUZGBJVZJBinding7 = defineFunctionName(function (
        requirementDiagramUZGBJVZJInput39,
        requirementDiagramUZGBJVZJInput40,
        requirementDiagramUZGBJVZJInput41,
        requirementDiagramUZGBJVZJInput42,
      ) {
        for (
          requirementDiagramUZGBJVZJInput41 ||= {},
            requirementDiagramUZGBJVZJInput42 =
              requirementDiagramUZGBJVZJInput39.length;
          requirementDiagramUZGBJVZJInput42--;
          requirementDiagramUZGBJVZJInput41[
            requirementDiagramUZGBJVZJInput39[requirementDiagramUZGBJVZJInput42]
          ] = requirementDiagramUZGBJVZJInput40
        );
        return requirementDiagramUZGBJVZJInput41;
      }, "o"),
      requirementDiagramUZGBJVZJBinding8 = [1, 3],
      requirementDiagramUZGBJVZJBinding9 = [1, 4],
      requirementDiagramUZGBJVZJBinding10 = [1, 5],
      requirementDiagramUZGBJVZJBinding11 = [1, 6],
      requirementDiagramUZGBJVZJBinding12 = [
        5, 6, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74,
        77, 89, 90,
      ],
      requirementDiagramUZGBJVZJBinding13 = [1, 22],
      requirementDiagramUZGBJVZJBinding14 = [2, 7],
      requirementDiagramUZGBJVZJBinding15 = [1, 26],
      requirementDiagramUZGBJVZJBinding16 = [1, 27],
      requirementDiagramUZGBJVZJBinding17 = [1, 28],
      requirementDiagramUZGBJVZJBinding18 = [1, 29],
      requirementDiagramUZGBJVZJBinding19 = [1, 33],
      requirementDiagramUZGBJVZJBinding20 = [1, 34],
      requirementDiagramUZGBJVZJBinding21 = [1, 35],
      requirementDiagramUZGBJVZJBinding22 = [1, 36],
      requirementDiagramUZGBJVZJBinding23 = [1, 37],
      requirementDiagramUZGBJVZJBinding24 = [1, 38],
      requirementDiagramUZGBJVZJBinding25 = [1, 24],
      requirementDiagramUZGBJVZJBinding26 = [1, 31],
      requirementDiagramUZGBJVZJBinding27 = [1, 32],
      requirementDiagramUZGBJVZJBinding28 = [1, 30],
      requirementDiagramUZGBJVZJBinding29 = [1, 39],
      requirementDiagramUZGBJVZJBinding30 = [1, 40],
      requirementDiagramUZGBJVZJBinding31 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77,
        89, 90,
      ],
      requirementDiagramUZGBJVZJBinding32 = [1, 61],
      requirementDiagramUZGBJVZJBinding33 = [89, 90],
      requirementDiagramUZGBJVZJBinding34 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 29, 41, 42, 43, 44, 45, 46, 54, 61,
        63, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramUZGBJVZJBinding35 = [27, 29],
      requirementDiagramUZGBJVZJBinding36 = [1, 70],
      requirementDiagramUZGBJVZJBinding37 = [1, 71],
      requirementDiagramUZGBJVZJBinding38 = [1, 72],
      requirementDiagramUZGBJVZJBinding39 = [1, 73],
      requirementDiagramUZGBJVZJBinding40 = [1, 74],
      _RequirementDiagramUZGBJVZJ = [1, 75],
      requirementDiagramUZGBJVZJBinding41 = [1, 76],
      requirementDiagramUZGBJVZJBinding42 = [1, 83],
      requirementDiagramUZGBJVZJBinding43 = [1, 80],
      requirementDiagramUZGBJVZJBinding44 = [1, 84],
      requirementDiagramUZGBJVZJBinding45 = [1, 85],
      requirementDiagramUZGBJVZJBinding46 = [1, 86],
      requirementDiagramUZGBJVZJBinding47 = [1, 87],
      requirementDiagramUZGBJVZJBinding48 = [1, 88],
      requirementDiagramUZGBJVZJBinding49 = [1, 89],
      requirementDiagramUZGBJVZJBinding50 = [1, 90],
      requirementDiagramUZGBJVZJBinding51 = [1, 91],
      requirementDiagramUZGBJVZJBinding52 = [1, 92],
      requirementDiagramUZGBJVZJBinding53 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 41, 42, 43, 44, 45, 46, 54, 72, 74,
        75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramUZGBJVZJBinding54 = [63, 64],
      requirementDiagramUZGBJVZJBinding55 = [1, 101],
      requirementDiagramUZGBJVZJBinding56 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 76,
        77, 89, 90,
      ],
      requirementDiagramUZGBJVZJBinding57 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75,
        76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramUZGBJVZJBinding58 = [1, 110],
      requirementDiagramUZGBJVZJBinding59 = [1, 106],
      requirementDiagramUZGBJVZJBinding60 = [1, 107],
      requirementDiagramUZGBJVZJBinding61 = [1, 108],
      requirementDiagramUZGBJVZJBinding62 = [1, 109],
      requirementDiagramUZGBJVZJBinding63 = [1, 111],
      requirementDiagramUZGBJVZJBinding64 = [1, 116],
      $ = [1, 117],
      requirementDiagramUZGBJVZJBinding65 = [1, 114],
      requirementDiagramUZGBJVZJBinding66 = [1, 115],
      requirementDiagramUZGBJVZJBinding67 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          directive: 4,
          NEWLINE: 5,
          RD: 6,
          diagram: 7,
          EOF: 8,
          acc_title: 9,
          acc_title_value: 10,
          acc_descr: 11,
          acc_descr_value: 12,
          acc_descr_multiline_value: 13,
          requirementDef: 14,
          elementDef: 15,
          relationshipDef: 16,
          direction: 17,
          styleStatement: 18,
          classDefStatement: 19,
          classStatement: 20,
          direction_tb: 21,
          direction_bt: 22,
          direction_rl: 23,
          direction_lr: 24,
          requirementType: 25,
          requirementName: 26,
          STRUCT_START: 27,
          requirementBody: 28,
          STYLE_SEPARATOR: 29,
          idList: 30,
          ID: 31,
          COLONSEP: 32,
          id: 33,
          TEXT: 34,
          text: 35,
          RISK: 36,
          riskLevel: 37,
          VERIFYMTHD: 38,
          verifyType: 39,
          STRUCT_STOP: 40,
          REQUIREMENT: 41,
          FUNCTIONAL_REQUIREMENT: 42,
          INTERFACE_REQUIREMENT: 43,
          PERFORMANCE_REQUIREMENT: 44,
          PHYSICAL_REQUIREMENT: 45,
          DESIGN_CONSTRAINT: 46,
          LOW_RISK: 47,
          MED_RISK: 48,
          HIGH_RISK: 49,
          VERIFY_ANALYSIS: 50,
          VERIFY_DEMONSTRATION: 51,
          VERIFY_INSPECTION: 52,
          VERIFY_TEST: 53,
          ELEMENT: 54,
          elementName: 55,
          elementBody: 56,
          TYPE: 57,
          type: 58,
          DOCREF: 59,
          ref: 60,
          END_ARROW_L: 61,
          relationship: 62,
          LINE: 63,
          END_ARROW_R: 64,
          CONTAINS: 65,
          COPIES: 66,
          DERIVES: 67,
          SATISFIES: 68,
          VERIFIES: 69,
          REFINES: 70,
          TRACES: 71,
          CLASSDEF: 72,
          stylesOpt: 73,
          CLASS: 74,
          ALPHA: 75,
          COMMA: 76,
          STYLE: 77,
          style: 78,
          styleComponent: 79,
          NUM: 80,
          COLON: 81,
          UNIT: 82,
          SPACE: 83,
          BRKT: 84,
          PCT: 85,
          MINUS: 86,
          LABEL: 87,
          SEMICOLON: 88,
          unqString: 89,
          qString: 90,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          5: "NEWLINE",
          6: "RD",
          8: "EOF",
          9: "acc_title",
          10: "acc_title_value",
          11: "acc_descr",
          12: "acc_descr_value",
          13: "acc_descr_multiline_value",
          21: "direction_tb",
          22: "direction_bt",
          23: "direction_rl",
          24: "direction_lr",
          27: "STRUCT_START",
          29: "STYLE_SEPARATOR",
          31: "ID",
          32: "COLONSEP",
          34: "TEXT",
          36: "RISK",
          38: "VERIFYMTHD",
          40: "STRUCT_STOP",
          41: "REQUIREMENT",
          42: "FUNCTIONAL_REQUIREMENT",
          43: "INTERFACE_REQUIREMENT",
          44: "PERFORMANCE_REQUIREMENT",
          45: "PHYSICAL_REQUIREMENT",
          46: "DESIGN_CONSTRAINT",
          47: "LOW_RISK",
          48: "MED_RISK",
          49: "HIGH_RISK",
          50: "VERIFY_ANALYSIS",
          51: "VERIFY_DEMONSTRATION",
          52: "VERIFY_INSPECTION",
          53: "VERIFY_TEST",
          54: "ELEMENT",
          57: "TYPE",
          59: "DOCREF",
          61: "END_ARROW_L",
          63: "LINE",
          64: "END_ARROW_R",
          65: "CONTAINS",
          66: "COPIES",
          67: "DERIVES",
          68: "SATISFIES",
          69: "VERIFIES",
          70: "REFINES",
          71: "TRACES",
          72: "CLASSDEF",
          74: "CLASS",
          75: "ALPHA",
          76: "COMMA",
          77: "STYLE",
          80: "NUM",
          81: "COLON",
          82: "UNIT",
          83: "SPACE",
          84: "BRKT",
          85: "PCT",
          86: "MINUS",
          87: "LABEL",
          88: "SEMICOLON",
          89: "unqString",
          90: "qString",
        },
        productions_: [
          0,
          [3, 3],
          [3, 2],
          [3, 4],
          [4, 2],
          [4, 2],
          [4, 1],
          [7, 0],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [7, 2],
          [17, 1],
          [17, 1],
          [17, 1],
          [17, 1],
          [14, 5],
          [14, 7],
          [28, 5],
          [28, 5],
          [28, 5],
          [28, 5],
          [28, 2],
          [28, 1],
          [25, 1],
          [25, 1],
          [25, 1],
          [25, 1],
          [25, 1],
          [25, 1],
          [37, 1],
          [37, 1],
          [37, 1],
          [39, 1],
          [39, 1],
          [39, 1],
          [39, 1],
          [15, 5],
          [15, 7],
          [56, 5],
          [56, 5],
          [56, 2],
          [56, 1],
          [16, 5],
          [16, 5],
          [62, 1],
          [62, 1],
          [62, 1],
          [62, 1],
          [62, 1],
          [62, 1],
          [62, 1],
          [19, 3],
          [20, 3],
          [20, 3],
          [30, 1],
          [30, 3],
          [30, 1],
          [30, 3],
          [18, 3],
          [73, 1],
          [73, 3],
          [78, 1],
          [78, 2],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [79, 1],
          [26, 1],
          [26, 1],
          [33, 1],
          [33, 1],
          [35, 1],
          [35, 1],
          [55, 1],
          [55, 1],
          [58, 1],
          [58, 1],
          [60, 1],
          [60, 1],
        ],
        performAction: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput2,
          requirementDiagramUZGBJVZJInput3,
          requirementDiagramUZGBJVZJInput4,
          requirementDiagramUZGBJVZJInput5,
          requirementDiagramUZGBJVZJInput6,
          requirementDiagramUZGBJVZJInput7,
          requirementDiagramUZGBJVZJInput8,
        ) {
          var requirementDiagramUZGBJVZJBinding97 =
            requirementDiagramUZGBJVZJInput7.length - 1;
          switch (requirementDiagramUZGBJVZJInput6) {
            case 4:
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ].trim();
              requirementDiagramUZGBJVZJInput5.setAccTitle(this.$);
              break;
            case 5:
            case 6:
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ].trim();
              requirementDiagramUZGBJVZJInput5.setAccDescription(this.$);
              break;
            case 7:
              this.$ = [];
              break;
            case 17:
              requirementDiagramUZGBJVZJInput5.setDirection("TB");
              break;
            case 18:
              requirementDiagramUZGBJVZJInput5.setDirection("BT");
              break;
            case 19:
              requirementDiagramUZGBJVZJInput5.setDirection("RL");
              break;
            case 20:
              requirementDiagramUZGBJVZJInput5.setDirection("LR");
              break;
            case 21:
              requirementDiagramUZGBJVZJInput5.addRequirement(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 3
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 4
                ],
              );
              break;
            case 22:
              requirementDiagramUZGBJVZJInput5.addRequirement(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 5
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 6
                ],
              );
              requirementDiagramUZGBJVZJInput5.setClass(
                [
                  requirementDiagramUZGBJVZJInput7[
                    requirementDiagramUZGBJVZJBinding97 - 5
                  ],
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 3
                ],
              );
              break;
            case 23:
              requirementDiagramUZGBJVZJInput5.setNewReqId(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 24:
              requirementDiagramUZGBJVZJInput5.setNewReqText(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 25:
              requirementDiagramUZGBJVZJInput5.setNewReqRisk(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 26:
              requirementDiagramUZGBJVZJInput5.setNewReqVerifyMethod(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 29:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.REQUIREMENT;
              break;
            case 30:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.FUNCTIONAL_REQUIREMENT;
              break;
            case 31:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.INTERFACE_REQUIREMENT;
              break;
            case 32:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.PERFORMANCE_REQUIREMENT;
              break;
            case 33:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.PHYSICAL_REQUIREMENT;
              break;
            case 34:
              this.$ =
                requirementDiagramUZGBJVZJInput5.RequirementType.DESIGN_CONSTRAINT;
              break;
            case 35:
              this.$ = requirementDiagramUZGBJVZJInput5.RiskLevel.LOW_RISK;
              break;
            case 36:
              this.$ = requirementDiagramUZGBJVZJInput5.RiskLevel.MED_RISK;
              break;
            case 37:
              this.$ = requirementDiagramUZGBJVZJInput5.RiskLevel.HIGH_RISK;
              break;
            case 38:
              this.$ =
                requirementDiagramUZGBJVZJInput5.VerifyType.VERIFY_ANALYSIS;
              break;
            case 39:
              this.$ =
                requirementDiagramUZGBJVZJInput5.VerifyType.VERIFY_DEMONSTRATION;
              break;
            case 40:
              this.$ =
                requirementDiagramUZGBJVZJInput5.VerifyType.VERIFY_INSPECTION;
              break;
            case 41:
              this.$ = requirementDiagramUZGBJVZJInput5.VerifyType.VERIFY_TEST;
              break;
            case 42:
              requirementDiagramUZGBJVZJInput5.addElement(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 3
                ],
              );
              break;
            case 43:
              requirementDiagramUZGBJVZJInput5.addElement(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 5
                ],
              );
              requirementDiagramUZGBJVZJInput5.setClass(
                [
                  requirementDiagramUZGBJVZJInput7[
                    requirementDiagramUZGBJVZJBinding97 - 5
                  ],
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 3
                ],
              );
              break;
            case 44:
              requirementDiagramUZGBJVZJInput5.setNewElementType(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 45:
              requirementDiagramUZGBJVZJInput5.setNewElementDocRef(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
              );
              break;
            case 48:
              requirementDiagramUZGBJVZJInput5.addRelationship(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 4
                ],
              );
              break;
            case 49:
              requirementDiagramUZGBJVZJInput5.addRelationship(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 4
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              break;
            case 50:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.CONTAINS;
              break;
            case 51:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.COPIES;
              break;
            case 52:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.DERIVES;
              break;
            case 53:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.SATISFIES;
              break;
            case 54:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.VERIFIES;
              break;
            case 55:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.REFINES;
              break;
            case 56:
              this.$ = requirementDiagramUZGBJVZJInput5.Relationships.TRACES;
              break;
            case 57:
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ];
              requirementDiagramUZGBJVZJInput5.defineClass(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 1
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              break;
            case 58:
              requirementDiagramUZGBJVZJInput5.setClass(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 1
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              break;
            case 59:
              requirementDiagramUZGBJVZJInput5.setClass(
                [
                  requirementDiagramUZGBJVZJInput7[
                    requirementDiagramUZGBJVZJBinding97 - 2
                  ],
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              break;
            case 60:
            case 62:
              this.$ = [
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              ];
              break;
            case 61:
            case 63:
              this.$ = requirementDiagramUZGBJVZJInput7[
                requirementDiagramUZGBJVZJBinding97 - 2
              ].concat([
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              ]);
              break;
            case 64:
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ];
              requirementDiagramUZGBJVZJInput5.setCssStyle(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 1
                ],
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              break;
            case 65:
              this.$ = [
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              ];
              break;
            case 66:
              requirementDiagramUZGBJVZJInput7[
                requirementDiagramUZGBJVZJBinding97 - 2
              ].push(
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ],
              );
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 2
                ];
              break;
            case 68:
              this.$ =
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97 - 1
                ] +
                requirementDiagramUZGBJVZJInput7[
                  requirementDiagramUZGBJVZJBinding97
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            6: requirementDiagramUZGBJVZJBinding8,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
          },
          {
            1: [3],
          },
          {
            3: 8,
            4: 2,
            5: [1, 7],
            6: requirementDiagramUZGBJVZJBinding8,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
          },
          {
            5: [1, 9],
          },
          {
            10: [1, 10],
          },
          {
            12: [1, 11],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding12,
            [2, 6],
          ),
          {
            3: 12,
            4: 2,
            6: requirementDiagramUZGBJVZJBinding8,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
          },
          {
            1: [2, 2],
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 13,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding12,
            [2, 4],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding12,
            [2, 5],
          ),
          {
            1: [2, 1],
          },
          {
            8: [1, 41],
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 42,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 43,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 44,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 45,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 46,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 47,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 48,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 49,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            4: 17,
            5: requirementDiagramUZGBJVZJBinding13,
            7: 50,
            8: requirementDiagramUZGBJVZJBinding14,
            9: requirementDiagramUZGBJVZJBinding9,
            11: requirementDiagramUZGBJVZJBinding10,
            13: requirementDiagramUZGBJVZJBinding11,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramUZGBJVZJBinding15,
            22: requirementDiagramUZGBJVZJBinding16,
            23: requirementDiagramUZGBJVZJBinding17,
            24: requirementDiagramUZGBJVZJBinding18,
            25: 23,
            33: 25,
            41: requirementDiagramUZGBJVZJBinding19,
            42: requirementDiagramUZGBJVZJBinding20,
            43: requirementDiagramUZGBJVZJBinding21,
            44: requirementDiagramUZGBJVZJBinding22,
            45: requirementDiagramUZGBJVZJBinding23,
            46: requirementDiagramUZGBJVZJBinding24,
            54: requirementDiagramUZGBJVZJBinding25,
            72: requirementDiagramUZGBJVZJBinding26,
            74: requirementDiagramUZGBJVZJBinding27,
            77: requirementDiagramUZGBJVZJBinding28,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            26: 51,
            89: [1, 52],
            90: [1, 53],
          },
          {
            55: 54,
            89: [1, 55],
            90: [1, 56],
          },
          {
            29: [1, 59],
            61: [1, 57],
            63: [1, 58],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 17],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 18],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 19],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 20],
          ),
          {
            30: 60,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            30: 63,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            30: 64,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 29],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 30],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 31],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 32],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 33],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding33,
            [2, 34],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding34,
            [2, 81],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding34,
            [2, 82],
          ),
          {
            1: [2, 3],
          },
          {
            8: [2, 8],
          },
          {
            8: [2, 9],
          },
          {
            8: [2, 10],
          },
          {
            8: [2, 11],
          },
          {
            8: [2, 12],
          },
          {
            8: [2, 13],
          },
          {
            8: [2, 14],
          },
          {
            8: [2, 15],
          },
          {
            8: [2, 16],
          },
          {
            27: [1, 65],
            29: [1, 66],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding35,
            [2, 79],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding35,
            [2, 80],
          ),
          {
            27: [1, 67],
            29: [1, 68],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding35,
            [2, 85],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding35,
            [2, 86],
          ),
          {
            62: 69,
            65: requirementDiagramUZGBJVZJBinding36,
            66: requirementDiagramUZGBJVZJBinding37,
            67: requirementDiagramUZGBJVZJBinding38,
            68: requirementDiagramUZGBJVZJBinding39,
            69: requirementDiagramUZGBJVZJBinding40,
            70: _RequirementDiagramUZGBJVZJ,
            71: requirementDiagramUZGBJVZJBinding41,
          },
          {
            62: 77,
            65: requirementDiagramUZGBJVZJBinding36,
            66: requirementDiagramUZGBJVZJBinding37,
            67: requirementDiagramUZGBJVZJBinding38,
            68: requirementDiagramUZGBJVZJBinding39,
            69: requirementDiagramUZGBJVZJBinding40,
            70: _RequirementDiagramUZGBJVZJ,
            71: requirementDiagramUZGBJVZJBinding41,
          },
          {
            30: 78,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            73: 79,
            75: requirementDiagramUZGBJVZJBinding42,
            76: requirementDiagramUZGBJVZJBinding43,
            78: 81,
            79: 82,
            80: requirementDiagramUZGBJVZJBinding44,
            81: requirementDiagramUZGBJVZJBinding45,
            82: requirementDiagramUZGBJVZJBinding46,
            83: requirementDiagramUZGBJVZJBinding47,
            84: requirementDiagramUZGBJVZJBinding48,
            85: requirementDiagramUZGBJVZJBinding49,
            86: requirementDiagramUZGBJVZJBinding50,
            87: requirementDiagramUZGBJVZJBinding51,
            88: requirementDiagramUZGBJVZJBinding52,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding53,
            [2, 60],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding53,
            [2, 62],
          ),
          {
            73: 93,
            75: requirementDiagramUZGBJVZJBinding42,
            76: requirementDiagramUZGBJVZJBinding43,
            78: 81,
            79: 82,
            80: requirementDiagramUZGBJVZJBinding44,
            81: requirementDiagramUZGBJVZJBinding45,
            82: requirementDiagramUZGBJVZJBinding46,
            83: requirementDiagramUZGBJVZJBinding47,
            84: requirementDiagramUZGBJVZJBinding48,
            85: requirementDiagramUZGBJVZJBinding49,
            86: requirementDiagramUZGBJVZJBinding50,
            87: requirementDiagramUZGBJVZJBinding51,
            88: requirementDiagramUZGBJVZJBinding52,
          },
          {
            30: 94,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            76: requirementDiagramUZGBJVZJBinding43,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            5: [1, 95],
          },
          {
            30: 96,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            5: [1, 97],
          },
          {
            30: 98,
            33: 62,
            75: requirementDiagramUZGBJVZJBinding32,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            63: [1, 99],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 50],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 51],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 52],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 53],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 54],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 55],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding54,
            [2, 56],
          ),
          {
            64: [1, 100],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 59],
            {
              76: requirementDiagramUZGBJVZJBinding43,
            },
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 64],
            {
              76: requirementDiagramUZGBJVZJBinding55,
            },
          ),
          {
            33: 103,
            75: [1, 102],
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding56,
            [2, 65],
            {
              79: 104,
              75: requirementDiagramUZGBJVZJBinding42,
              80: requirementDiagramUZGBJVZJBinding44,
              81: requirementDiagramUZGBJVZJBinding45,
              82: requirementDiagramUZGBJVZJBinding46,
              83: requirementDiagramUZGBJVZJBinding47,
              84: requirementDiagramUZGBJVZJBinding48,
              85: requirementDiagramUZGBJVZJBinding49,
              86: requirementDiagramUZGBJVZJBinding50,
              87: requirementDiagramUZGBJVZJBinding51,
              88: requirementDiagramUZGBJVZJBinding52,
            },
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 67],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 69],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 70],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 71],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 72],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 73],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 74],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 75],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 76],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 77],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 78],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 57],
            {
              76: requirementDiagramUZGBJVZJBinding55,
            },
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 58],
            {
              76: requirementDiagramUZGBJVZJBinding43,
            },
          ),
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 105,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            27: [1, 112],
            76: requirementDiagramUZGBJVZJBinding43,
          },
          {
            5: requirementDiagramUZGBJVZJBinding64,
            40: $,
            56: 113,
            57: requirementDiagramUZGBJVZJBinding65,
            59: requirementDiagramUZGBJVZJBinding66,
          },
          {
            27: [1, 118],
            76: requirementDiagramUZGBJVZJBinding43,
          },
          {
            33: 119,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            33: 120,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            75: requirementDiagramUZGBJVZJBinding42,
            78: 121,
            79: 82,
            80: requirementDiagramUZGBJVZJBinding44,
            81: requirementDiagramUZGBJVZJBinding45,
            82: requirementDiagramUZGBJVZJBinding46,
            83: requirementDiagramUZGBJVZJBinding47,
            84: requirementDiagramUZGBJVZJBinding48,
            85: requirementDiagramUZGBJVZJBinding49,
            86: requirementDiagramUZGBJVZJBinding50,
            87: requirementDiagramUZGBJVZJBinding51,
            88: requirementDiagramUZGBJVZJBinding52,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding53,
            [2, 61],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding53,
            [2, 63],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding57,
            [2, 68],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 21],
          ),
          {
            32: [1, 122],
          },
          {
            32: [1, 123],
          },
          {
            32: [1, 124],
          },
          {
            32: [1, 125],
          },
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 126,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 28],
          ),
          {
            5: [1, 127],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 42],
          ),
          {
            32: [1, 128],
          },
          {
            32: [1, 129],
          },
          {
            5: requirementDiagramUZGBJVZJBinding64,
            40: $,
            56: 130,
            57: requirementDiagramUZGBJVZJBinding65,
            59: requirementDiagramUZGBJVZJBinding66,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 47],
          ),
          {
            5: [1, 131],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 48],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 49],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding56,
            [2, 66],
            {
              79: 104,
              75: requirementDiagramUZGBJVZJBinding42,
              80: requirementDiagramUZGBJVZJBinding44,
              81: requirementDiagramUZGBJVZJBinding45,
              82: requirementDiagramUZGBJVZJBinding46,
              83: requirementDiagramUZGBJVZJBinding47,
              84: requirementDiagramUZGBJVZJBinding48,
              85: requirementDiagramUZGBJVZJBinding49,
              86: requirementDiagramUZGBJVZJBinding50,
              87: requirementDiagramUZGBJVZJBinding51,
              88: requirementDiagramUZGBJVZJBinding52,
            },
          ),
          {
            33: 132,
            89: requirementDiagramUZGBJVZJBinding29,
            90: requirementDiagramUZGBJVZJBinding30,
          },
          {
            35: 133,
            89: [1, 134],
            90: [1, 135],
          },
          {
            37: 136,
            47: [1, 137],
            48: [1, 138],
            49: [1, 139],
          },
          {
            39: 140,
            50: [1, 141],
            51: [1, 142],
            52: [1, 143],
            53: [1, 144],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 27],
          ),
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 145,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            58: 146,
            89: [1, 147],
            90: [1, 148],
          },
          {
            60: 149,
            89: [1, 150],
            90: [1, 151],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 46],
          ),
          {
            5: requirementDiagramUZGBJVZJBinding64,
            40: $,
            56: 152,
            57: requirementDiagramUZGBJVZJBinding65,
            59: requirementDiagramUZGBJVZJBinding66,
          },
          {
            5: [1, 153],
          },
          {
            5: [1, 154],
          },
          {
            5: [2, 83],
          },
          {
            5: [2, 84],
          },
          {
            5: [1, 155],
          },
          {
            5: [2, 35],
          },
          {
            5: [2, 36],
          },
          {
            5: [2, 37],
          },
          {
            5: [1, 156],
          },
          {
            5: [2, 38],
          },
          {
            5: [2, 39],
          },
          {
            5: [2, 40],
          },
          {
            5: [2, 41],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 22],
          ),
          {
            5: [1, 157],
          },
          {
            5: [2, 87],
          },
          {
            5: [2, 88],
          },
          {
            5: [1, 158],
          },
          {
            5: [2, 89],
          },
          {
            5: [2, 90],
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 43],
          ),
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 159,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 160,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 161,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            5: requirementDiagramUZGBJVZJBinding58,
            28: 162,
            31: requirementDiagramUZGBJVZJBinding59,
            34: requirementDiagramUZGBJVZJBinding60,
            36: requirementDiagramUZGBJVZJBinding61,
            38: requirementDiagramUZGBJVZJBinding62,
            40: requirementDiagramUZGBJVZJBinding63,
          },
          {
            5: requirementDiagramUZGBJVZJBinding64,
            40: $,
            56: 163,
            57: requirementDiagramUZGBJVZJBinding65,
            59: requirementDiagramUZGBJVZJBinding66,
          },
          {
            5: requirementDiagramUZGBJVZJBinding64,
            40: $,
            56: 164,
            57: requirementDiagramUZGBJVZJBinding65,
            59: requirementDiagramUZGBJVZJBinding66,
          },
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 23],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 24],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 25],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 26],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 44],
          ),
          requirementDiagramUZGBJVZJBinding7(
            requirementDiagramUZGBJVZJBinding31,
            [2, 45],
          ),
        ],
        defaultActions: {
          8: [2, 2],
          12: [2, 1],
          41: [2, 3],
          42: [2, 8],
          43: [2, 9],
          44: [2, 10],
          45: [2, 11],
          46: [2, 12],
          47: [2, 13],
          48: [2, 14],
          49: [2, 15],
          50: [2, 16],
          134: [2, 83],
          135: [2, 84],
          137: [2, 35],
          138: [2, 36],
          139: [2, 37],
          141: [2, 38],
          142: [2, 39],
          143: [2, 40],
          144: [2, 41],
          147: [2, 87],
          148: [2, 88],
          150: [2, 89],
          151: [2, 90],
        },
        parseError: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput33,
          requirementDiagramUZGBJVZJInput34,
        ) {
          if (requirementDiagramUZGBJVZJInput34.recoverable)
            this.trace(requirementDiagramUZGBJVZJInput33);
          else {
            var requirementDiagramUZGBJVZJBinding137 = Error(
              requirementDiagramUZGBJVZJInput33,
            );
            throw (
              (requirementDiagramUZGBJVZJBinding137.hash =
                requirementDiagramUZGBJVZJInput34),
              requirementDiagramUZGBJVZJBinding137
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (requirementDiagramUZGBJVZJInput1) {
          var requirementDiagramUZGBJVZJBinding68 = this,
            requirementDiagramUZGBJVZJBinding69 = [0],
            requirementDiagramUZGBJVZJBinding70 = [],
            requirementDiagramUZGBJVZJBinding71 = [null],
            requirementDiagramUZGBJVZJBinding72 = [],
            requirementDiagramUZGBJVZJBinding73 = this.table,
            requirementDiagramUZGBJVZJBinding74 = "",
            requirementDiagramUZGBJVZJBinding75 = 0,
            requirementDiagramUZGBJVZJBinding76 = 0,
            requirementDiagramUZGBJVZJBinding77 = 0,
            requirementDiagramUZGBJVZJBinding80 =
              requirementDiagramUZGBJVZJBinding72.slice.call(arguments, 1),
            requirementDiagramUZGBJVZJBinding81 = Object.create(this.lexer),
            requirementDiagramUZGBJVZJBinding82 = {
              yy: {},
            };
          for (var requirementDiagramUZGBJVZJBinding83 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              requirementDiagramUZGBJVZJBinding83,
            ) &&
              (requirementDiagramUZGBJVZJBinding82.yy[
                requirementDiagramUZGBJVZJBinding83
              ] = this.yy[requirementDiagramUZGBJVZJBinding83]);
          requirementDiagramUZGBJVZJBinding81.setInput(
            requirementDiagramUZGBJVZJInput1,
            requirementDiagramUZGBJVZJBinding82.yy,
          );
          requirementDiagramUZGBJVZJBinding82.yy.lexer =
            requirementDiagramUZGBJVZJBinding81;
          requirementDiagramUZGBJVZJBinding82.yy.parser = this;
          requirementDiagramUZGBJVZJBinding81.yylloc === undefined &&
            (requirementDiagramUZGBJVZJBinding81.yylloc = {});
          var requirementDiagramUZGBJVZJBinding84 =
            requirementDiagramUZGBJVZJBinding81.yylloc;
          requirementDiagramUZGBJVZJBinding72.push(
            requirementDiagramUZGBJVZJBinding84,
          );
          var requirementDiagramUZGBJVZJBinding85 =
            requirementDiagramUZGBJVZJBinding81.options &&
            requirementDiagramUZGBJVZJBinding81.options.ranges;
          typeof requirementDiagramUZGBJVZJBinding82.yy.parseError == "function"
            ? (this.parseError =
                requirementDiagramUZGBJVZJBinding82.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function requirementDiagramUZGBJVZJHelper2(
            requirementDiagramUZGBJVZJInput47,
          ) {
            requirementDiagramUZGBJVZJBinding69.length -=
              2 * requirementDiagramUZGBJVZJInput47;
            requirementDiagramUZGBJVZJBinding71.length -=
              requirementDiagramUZGBJVZJInput47;
            requirementDiagramUZGBJVZJBinding72.length -=
              requirementDiagramUZGBJVZJInput47;
          }
          defineFunctionName(requirementDiagramUZGBJVZJHelper2, "popStack");
          function requirementDiagramUZGBJVZJHelper3() {
            var requirementDiagramUZGBJVZJBinding127 =
              requirementDiagramUZGBJVZJBinding70.pop() ||
              requirementDiagramUZGBJVZJBinding81.lex() ||
              1;
            return (
              typeof requirementDiagramUZGBJVZJBinding127 != "number" &&
                (requirementDiagramUZGBJVZJBinding127 instanceof Array &&
                  ((requirementDiagramUZGBJVZJBinding70 =
                    requirementDiagramUZGBJVZJBinding127),
                  (requirementDiagramUZGBJVZJBinding127 =
                    requirementDiagramUZGBJVZJBinding70.pop())),
                (requirementDiagramUZGBJVZJBinding127 =
                  requirementDiagramUZGBJVZJBinding68.symbols_[
                    requirementDiagramUZGBJVZJBinding127
                  ] || requirementDiagramUZGBJVZJBinding127)),
              requirementDiagramUZGBJVZJBinding127
            );
          }
          defineFunctionName(requirementDiagramUZGBJVZJHelper3, "lex");
          for (
            var requirementDiagramUZGBJVZJBinding86,
              requirementDiagramUZGBJVZJBinding87,
              requirementDiagramUZGBJVZJBinding88,
              requirementDiagramUZGBJVZJBinding89,
              requirementDiagramUZGBJVZJBinding90,
              requirementDiagramUZGBJVZJBinding91 = {},
              requirementDiagramUZGBJVZJBinding92,
              requirementDiagramUZGBJVZJBinding93,
              requirementDiagramUZGBJVZJBinding94,
              requirementDiagramUZGBJVZJBinding95;
            ;
          ) {
            if (
              ((requirementDiagramUZGBJVZJBinding88 =
                requirementDiagramUZGBJVZJBinding69[
                  requirementDiagramUZGBJVZJBinding69.length - 1
                ]),
              this.defaultActions[requirementDiagramUZGBJVZJBinding88]
                ? (requirementDiagramUZGBJVZJBinding89 =
                    this.defaultActions[requirementDiagramUZGBJVZJBinding88])
                : ((requirementDiagramUZGBJVZJBinding86 ??=
                    requirementDiagramUZGBJVZJHelper3()),
                  (requirementDiagramUZGBJVZJBinding89 =
                    requirementDiagramUZGBJVZJBinding73[
                      requirementDiagramUZGBJVZJBinding88
                    ] &&
                    requirementDiagramUZGBJVZJBinding73[
                      requirementDiagramUZGBJVZJBinding88
                    ][requirementDiagramUZGBJVZJBinding86])),
              requirementDiagramUZGBJVZJBinding89 === undefined ||
                !requirementDiagramUZGBJVZJBinding89.length ||
                !requirementDiagramUZGBJVZJBinding89[0])
            ) {
              var requirementDiagramUZGBJVZJBinding96 = "";
              for (requirementDiagramUZGBJVZJBinding92 in ((requirementDiagramUZGBJVZJBinding95 =
                []),
              requirementDiagramUZGBJVZJBinding73[
                requirementDiagramUZGBJVZJBinding88
              ]))
                this.terminals_[requirementDiagramUZGBJVZJBinding92] &&
                  requirementDiagramUZGBJVZJBinding92 > 2 &&
                  requirementDiagramUZGBJVZJBinding95.push(
                    "'" +
                      this.terminals_[requirementDiagramUZGBJVZJBinding92] +
                      "'",
                  );
              requirementDiagramUZGBJVZJBinding96 =
                requirementDiagramUZGBJVZJBinding81.showPosition
                  ? "Parse error on line " +
                    (requirementDiagramUZGBJVZJBinding75 + 1) +
                    ":\n" +
                    requirementDiagramUZGBJVZJBinding81.showPosition() +
                    "\nExpecting " +
                    requirementDiagramUZGBJVZJBinding95.join(", ") +
                    ", got '" +
                    (this.terminals_[requirementDiagramUZGBJVZJBinding86] ||
                      requirementDiagramUZGBJVZJBinding86) +
                    "'"
                  : "Parse error on line " +
                    (requirementDiagramUZGBJVZJBinding75 + 1) +
                    ": Unexpected " +
                    (requirementDiagramUZGBJVZJBinding86 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[requirementDiagramUZGBJVZJBinding86] ||
                          requirementDiagramUZGBJVZJBinding86) +
                        "'");
              this.parseError(requirementDiagramUZGBJVZJBinding96, {
                text: requirementDiagramUZGBJVZJBinding81.match,
                token:
                  this.terminals_[requirementDiagramUZGBJVZJBinding86] ||
                  requirementDiagramUZGBJVZJBinding86,
                line: requirementDiagramUZGBJVZJBinding81.yylineno,
                loc: requirementDiagramUZGBJVZJBinding84,
                expected: requirementDiagramUZGBJVZJBinding95,
              });
            }
            if (
              requirementDiagramUZGBJVZJBinding89[0] instanceof Array &&
              requirementDiagramUZGBJVZJBinding89.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  requirementDiagramUZGBJVZJBinding88 +
                  ", token: " +
                  requirementDiagramUZGBJVZJBinding86,
              );
            switch (requirementDiagramUZGBJVZJBinding89[0]) {
              case 1:
                requirementDiagramUZGBJVZJBinding69.push(
                  requirementDiagramUZGBJVZJBinding86,
                );
                requirementDiagramUZGBJVZJBinding71.push(
                  requirementDiagramUZGBJVZJBinding81.yytext,
                );
                requirementDiagramUZGBJVZJBinding72.push(
                  requirementDiagramUZGBJVZJBinding81.yylloc,
                );
                requirementDiagramUZGBJVZJBinding69.push(
                  requirementDiagramUZGBJVZJBinding89[1],
                );
                requirementDiagramUZGBJVZJBinding86 = null;
                requirementDiagramUZGBJVZJBinding87
                  ? ((requirementDiagramUZGBJVZJBinding86 =
                      requirementDiagramUZGBJVZJBinding87),
                    (requirementDiagramUZGBJVZJBinding87 = null))
                  : ((requirementDiagramUZGBJVZJBinding76 =
                      requirementDiagramUZGBJVZJBinding81.yyleng),
                    (requirementDiagramUZGBJVZJBinding74 =
                      requirementDiagramUZGBJVZJBinding81.yytext),
                    (requirementDiagramUZGBJVZJBinding75 =
                      requirementDiagramUZGBJVZJBinding81.yylineno),
                    (requirementDiagramUZGBJVZJBinding84 =
                      requirementDiagramUZGBJVZJBinding81.yylloc),
                    requirementDiagramUZGBJVZJBinding77 > 0 &&
                      requirementDiagramUZGBJVZJBinding77--);
                break;
              case 2:
                if (
                  ((requirementDiagramUZGBJVZJBinding93 =
                    this.productions_[
                      requirementDiagramUZGBJVZJBinding89[1]
                    ][1]),
                  (requirementDiagramUZGBJVZJBinding91.$ =
                    requirementDiagramUZGBJVZJBinding71[
                      requirementDiagramUZGBJVZJBinding71.length -
                        requirementDiagramUZGBJVZJBinding93
                    ]),
                  (requirementDiagramUZGBJVZJBinding91._$ = {
                    first_line:
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length -
                          (requirementDiagramUZGBJVZJBinding93 || 1)
                      ].first_line,
                    last_line:
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length - 1
                      ].last_line,
                    first_column:
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length -
                          (requirementDiagramUZGBJVZJBinding93 || 1)
                      ].first_column,
                    last_column:
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length - 1
                      ].last_column,
                  }),
                  requirementDiagramUZGBJVZJBinding85 &&
                    (requirementDiagramUZGBJVZJBinding91._$.range = [
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length -
                          (requirementDiagramUZGBJVZJBinding93 || 1)
                      ].range[0],
                      requirementDiagramUZGBJVZJBinding72[
                        requirementDiagramUZGBJVZJBinding72.length - 1
                      ].range[1],
                    ]),
                  (requirementDiagramUZGBJVZJBinding90 =
                    this.performAction.apply(
                      requirementDiagramUZGBJVZJBinding91,
                      [
                        requirementDiagramUZGBJVZJBinding74,
                        requirementDiagramUZGBJVZJBinding76,
                        requirementDiagramUZGBJVZJBinding75,
                        requirementDiagramUZGBJVZJBinding82.yy,
                        requirementDiagramUZGBJVZJBinding89[1],
                        requirementDiagramUZGBJVZJBinding71,
                        requirementDiagramUZGBJVZJBinding72,
                      ].concat(requirementDiagramUZGBJVZJBinding80),
                    )),
                  requirementDiagramUZGBJVZJBinding90 !== undefined)
                )
                  return requirementDiagramUZGBJVZJBinding90;
                requirementDiagramUZGBJVZJBinding93 &&
                  ((requirementDiagramUZGBJVZJBinding69 =
                    requirementDiagramUZGBJVZJBinding69.slice(
                      0,
                      -1 * requirementDiagramUZGBJVZJBinding93 * 2,
                    )),
                  (requirementDiagramUZGBJVZJBinding71 =
                    requirementDiagramUZGBJVZJBinding71.slice(
                      0,
                      -1 * requirementDiagramUZGBJVZJBinding93,
                    )),
                  (requirementDiagramUZGBJVZJBinding72 =
                    requirementDiagramUZGBJVZJBinding72.slice(
                      0,
                      -1 * requirementDiagramUZGBJVZJBinding93,
                    )));
                requirementDiagramUZGBJVZJBinding69.push(
                  this.productions_[requirementDiagramUZGBJVZJBinding89[1]][0],
                );
                requirementDiagramUZGBJVZJBinding71.push(
                  requirementDiagramUZGBJVZJBinding91.$,
                );
                requirementDiagramUZGBJVZJBinding72.push(
                  requirementDiagramUZGBJVZJBinding91._$,
                );
                requirementDiagramUZGBJVZJBinding94 =
                  requirementDiagramUZGBJVZJBinding73[
                    requirementDiagramUZGBJVZJBinding69[
                      requirementDiagramUZGBJVZJBinding69.length - 2
                    ]
                  ][
                    requirementDiagramUZGBJVZJBinding69[
                      requirementDiagramUZGBJVZJBinding69.length - 1
                    ]
                  ];
                requirementDiagramUZGBJVZJBinding69.push(
                  requirementDiagramUZGBJVZJBinding94,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    requirementDiagramUZGBJVZJBinding67.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput36,
          requirementDiagramUZGBJVZJInput37,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              requirementDiagramUZGBJVZJInput36,
              requirementDiagramUZGBJVZJInput37,
            );
          else throw Error(requirementDiagramUZGBJVZJInput36);
        }, "parseError"),
        setInput: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput23,
          requirementDiagramUZGBJVZJInput24,
        ) {
          return (
            (this.yy = requirementDiagramUZGBJVZJInput24 || this.yy || {}),
            (this._input = requirementDiagramUZGBJVZJInput23),
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
          var requirementDiagramUZGBJVZJBinding123 = this._input[0];
          return (
            (this.yytext += requirementDiagramUZGBJVZJBinding123),
            this.yyleng++,
            this.offset++,
            (this.match += requirementDiagramUZGBJVZJBinding123),
            (this.matched += requirementDiagramUZGBJVZJBinding123),
            requirementDiagramUZGBJVZJBinding123.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            requirementDiagramUZGBJVZJBinding123
          );
        }, "input"),
        unput: defineFunctionName(function (requirementDiagramUZGBJVZJInput15) {
          var requirementDiagramUZGBJVZJBinding111 =
              requirementDiagramUZGBJVZJInput15.length,
            requirementDiagramUZGBJVZJBinding112 =
              requirementDiagramUZGBJVZJInput15.split(/(?:\r\n?|\n)/g);
          this._input = requirementDiagramUZGBJVZJInput15 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - requirementDiagramUZGBJVZJBinding111,
          );
          this.offset -= requirementDiagramUZGBJVZJBinding111;
          var requirementDiagramUZGBJVZJBinding113 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          requirementDiagramUZGBJVZJBinding112.length - 1 &&
            (this.yylineno -= requirementDiagramUZGBJVZJBinding112.length - 1);
          var requirementDiagramUZGBJVZJBinding114 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: requirementDiagramUZGBJVZJBinding112
                ? (requirementDiagramUZGBJVZJBinding112.length ===
                  requirementDiagramUZGBJVZJBinding113.length
                    ? this.yylloc.first_column
                    : 0) +
                  requirementDiagramUZGBJVZJBinding113[
                    requirementDiagramUZGBJVZJBinding113.length -
                      requirementDiagramUZGBJVZJBinding112.length
                  ].length -
                  requirementDiagramUZGBJVZJBinding112[0].length
                : this.yylloc.first_column -
                  requirementDiagramUZGBJVZJBinding111,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                requirementDiagramUZGBJVZJBinding114[0],
                requirementDiagramUZGBJVZJBinding114[0] +
                  this.yyleng -
                  requirementDiagramUZGBJVZJBinding111,
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
        less: defineFunctionName(function (requirementDiagramUZGBJVZJInput51) {
          this.unput(this.match.slice(requirementDiagramUZGBJVZJInput51));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var requirementDiagramUZGBJVZJBinding131 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (requirementDiagramUZGBJVZJBinding131.length > 20 ? "..." : "") +
            requirementDiagramUZGBJVZJBinding131.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var requirementDiagramUZGBJVZJBinding124 = this.match;
          return (
            requirementDiagramUZGBJVZJBinding124.length < 20 &&
              (requirementDiagramUZGBJVZJBinding124 += this._input.substr(
                0,
                20 - requirementDiagramUZGBJVZJBinding124.length,
              )),
            (
              requirementDiagramUZGBJVZJBinding124.substr(0, 20) +
              (requirementDiagramUZGBJVZJBinding124.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var requirementDiagramUZGBJVZJBinding132 = this.pastInput(),
            requirementDiagramUZGBJVZJBinding133 = Array(
              requirementDiagramUZGBJVZJBinding132.length + 1,
            ).join("-");
          return (
            requirementDiagramUZGBJVZJBinding132 +
            this.upcomingInput() +
            "\n" +
            requirementDiagramUZGBJVZJBinding133 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput13,
          requirementDiagramUZGBJVZJInput14,
        ) {
          var requirementDiagramUZGBJVZJBinding98,
            requirementDiagramUZGBJVZJBinding99,
            requirementDiagramUZGBJVZJBinding100;
          if (
            (this.options.backtrack_lexer &&
              ((requirementDiagramUZGBJVZJBinding100 = {
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
                (requirementDiagramUZGBJVZJBinding100.yylloc.range =
                  this.yylloc.range.slice(0))),
            (requirementDiagramUZGBJVZJBinding99 =
              requirementDiagramUZGBJVZJInput13[0].match(/(?:\r\n?|\n).*/g)),
            requirementDiagramUZGBJVZJBinding99 &&
              (this.yylineno += requirementDiagramUZGBJVZJBinding99.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: requirementDiagramUZGBJVZJBinding99
                ? requirementDiagramUZGBJVZJBinding99[
                    requirementDiagramUZGBJVZJBinding99.length - 1
                  ].length -
                  requirementDiagramUZGBJVZJBinding99[
                    requirementDiagramUZGBJVZJBinding99.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  requirementDiagramUZGBJVZJInput13[0].length,
            }),
            (this.yytext += requirementDiagramUZGBJVZJInput13[0]),
            (this.match += requirementDiagramUZGBJVZJInput13[0]),
            (this.matches = requirementDiagramUZGBJVZJInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              requirementDiagramUZGBJVZJInput13[0].length,
            )),
            (this.matched += requirementDiagramUZGBJVZJInput13[0]),
            (requirementDiagramUZGBJVZJBinding98 = this.performAction.call(
              this,
              this.yy,
              this,
              requirementDiagramUZGBJVZJInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            requirementDiagramUZGBJVZJBinding98)
          )
            return requirementDiagramUZGBJVZJBinding98;
          if (this._backtrack) {
            for (var requirementDiagramUZGBJVZJBinding101 in requirementDiagramUZGBJVZJBinding100)
              this[requirementDiagramUZGBJVZJBinding101] =
                requirementDiagramUZGBJVZJBinding100[
                  requirementDiagramUZGBJVZJBinding101
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var requirementDiagramUZGBJVZJBinding105,
            requirementDiagramUZGBJVZJBinding106,
            requirementDiagramUZGBJVZJBinding107,
            requirementDiagramUZGBJVZJBinding108;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var requirementDiagramUZGBJVZJBinding109 = this._currentRules(),
              requirementDiagramUZGBJVZJBinding110 = 0;
            requirementDiagramUZGBJVZJBinding110 <
            requirementDiagramUZGBJVZJBinding109.length;
            requirementDiagramUZGBJVZJBinding110++
          )
            if (
              ((requirementDiagramUZGBJVZJBinding107 = this._input.match(
                this.rules[
                  requirementDiagramUZGBJVZJBinding109[
                    requirementDiagramUZGBJVZJBinding110
                  ]
                ],
              )),
              requirementDiagramUZGBJVZJBinding107 &&
                (!requirementDiagramUZGBJVZJBinding106 ||
                  requirementDiagramUZGBJVZJBinding107[0].length >
                    requirementDiagramUZGBJVZJBinding106[0].length))
            ) {
              if (
                ((requirementDiagramUZGBJVZJBinding106 =
                  requirementDiagramUZGBJVZJBinding107),
                (requirementDiagramUZGBJVZJBinding108 =
                  requirementDiagramUZGBJVZJBinding110),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((requirementDiagramUZGBJVZJBinding105 = this.test_match(
                    requirementDiagramUZGBJVZJBinding107,
                    requirementDiagramUZGBJVZJBinding109[
                      requirementDiagramUZGBJVZJBinding110
                    ],
                  )),
                  requirementDiagramUZGBJVZJBinding105 !== false)
                )
                  return requirementDiagramUZGBJVZJBinding105;
                if (this._backtrack) {
                  requirementDiagramUZGBJVZJBinding106 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return requirementDiagramUZGBJVZJBinding106
            ? ((requirementDiagramUZGBJVZJBinding105 = this.test_match(
                requirementDiagramUZGBJVZJBinding106,
                requirementDiagramUZGBJVZJBinding109[
                  requirementDiagramUZGBJVZJBinding108
                ],
              )),
              requirementDiagramUZGBJVZJBinding105 === false
                ? false
                : requirementDiagramUZGBJVZJBinding105)
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
        begin: defineFunctionName(function (requirementDiagramUZGBJVZJInput52) {
          this.conditionStack.push(requirementDiagramUZGBJVZJInput52);
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
        topState: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput32,
        ) {
          return (
            (requirementDiagramUZGBJVZJInput32 =
              this.conditionStack.length -
              1 -
              Math.abs(requirementDiagramUZGBJVZJInput32 || 0)),
            requirementDiagramUZGBJVZJInput32 >= 0
              ? this.conditionStack[requirementDiagramUZGBJVZJInput32]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput53,
        ) {
          this.begin(requirementDiagramUZGBJVZJInput53);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          requirementDiagramUZGBJVZJInput9,
          requirementDiagramUZGBJVZJInput10,
          requirementDiagramUZGBJVZJInput11,
          requirementDiagramUZGBJVZJInput12,
        ) {
          switch (requirementDiagramUZGBJVZJInput11) {
            case 0:
              return "title";
            case 1:
              return (this.begin("acc_title"), 9);
            case 2:
              return (this.popState(), "acc_title_value");
            case 3:
              return (this.begin("acc_descr"), 11);
            case 4:
              return (this.popState(), "acc_descr_value");
            case 5:
              this.begin("acc_descr_multiline");
              break;
            case 6:
              this.popState();
              break;
            case 7:
              return "acc_descr_multiline_value";
            case 8:
              return 21;
            case 9:
              return 22;
            case 10:
              return 23;
            case 11:
              return 24;
            case 12:
              return 5;
            case 13:
              break;
            case 14:
              break;
            case 15:
              break;
            case 16:
              return 8;
            case 17:
              return 6;
            case 18:
              return 27;
            case 19:
              return 40;
            case 20:
              return 29;
            case 21:
              return 32;
            case 22:
              return 31;
            case 23:
              return 34;
            case 24:
              return 36;
            case 25:
              return 38;
            case 26:
              return 41;
            case 27:
              return 42;
            case 28:
              return 43;
            case 29:
              return 44;
            case 30:
              return 45;
            case 31:
              return 46;
            case 32:
              return 47;
            case 33:
              return 48;
            case 34:
              return 49;
            case 35:
              return 50;
            case 36:
              return 51;
            case 37:
              return 52;
            case 38:
              return 53;
            case 39:
              return 54;
            case 40:
              return 65;
            case 41:
              return 66;
            case 42:
              return 67;
            case 43:
              return 68;
            case 44:
              return 69;
            case 45:
              return 70;
            case 46:
              return 71;
            case 47:
              return 57;
            case 48:
              return 59;
            case 49:
              return (this.begin("style"), 77);
            case 50:
              return 75;
            case 51:
              return 81;
            case 52:
              return 88;
            case 53:
              return "PERCENT";
            case 54:
              return 86;
            case 55:
              return 84;
            case 56:
              break;
            case 57:
              this.begin("string");
              break;
            case 58:
              this.popState();
              break;
            case 59:
              return (this.begin("style"), 72);
            case 60:
              return (this.begin("style"), 74);
            case 61:
              return 61;
            case 62:
              return 64;
            case 63:
              return 63;
            case 64:
              this.begin("string");
              break;
            case 65:
              this.popState();
              break;
            case 66:
              return "qString";
            case 67:
              return (
                (requirementDiagramUZGBJVZJInput10.yytext =
                  requirementDiagramUZGBJVZJInput10.yytext.trim()),
                89
              );
            case 68:
              return 75;
            case 69:
              return 80;
            case 70:
              return 76;
          }
        }, "anonymous"),
        rules: [
          /^(?:title\s[^#\n;]+)/i,
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
          /^(?:(\r?\n)+)/i,
          /^(?:\s+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:%[^\n]*)/i,
          /^(?:$)/i,
          /^(?:requirementDiagram\b)/i,
          /^(?:\{)/i,
          /^(?:\})/i,
          /^(?::{3})/i,
          /^(?::)/i,
          /^(?:id\b)/i,
          /^(?:text\b)/i,
          /^(?:risk\b)/i,
          /^(?:verifyMethod\b)/i,
          /^(?:requirement\b)/i,
          /^(?:functionalRequirement\b)/i,
          /^(?:interfaceRequirement\b)/i,
          /^(?:performanceRequirement\b)/i,
          /^(?:physicalRequirement\b)/i,
          /^(?:designConstraint\b)/i,
          /^(?:low\b)/i,
          /^(?:medium\b)/i,
          /^(?:high\b)/i,
          /^(?:analysis\b)/i,
          /^(?:demonstration\b)/i,
          /^(?:inspection\b)/i,
          /^(?:test\b)/i,
          /^(?:element\b)/i,
          /^(?:contains\b)/i,
          /^(?:copies\b)/i,
          /^(?:derives\b)/i,
          /^(?:satisfies\b)/i,
          /^(?:verifies\b)/i,
          /^(?:refines\b)/i,
          /^(?:traces\b)/i,
          /^(?:type\b)/i,
          /^(?:docref\b)/i,
          /^(?:style\b)/i,
          /^(?:\w+)/i,
          /^(?::)/i,
          /^(?:;)/i,
          /^(?:%)/i,
          /^(?:-)/i,
          /^(?:#)/i,
          /^(?: )/i,
          /^(?:["])/i,
          /^(?:\n)/i,
          /^(?:classDef\b)/i,
          /^(?:class\b)/i,
          /^(?:<-)/i,
          /^(?:->)/i,
          /^(?:-)/i,
          /^(?:["])/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:[\w][^:,\r\n\{\<\>\-\=]*)/i,
          /^(?:\w+)/i,
          /^(?:[0-9]+)/i,
          /^(?:,)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [6, 7, 68, 69, 70],
            inclusive: false,
          },
          acc_descr: {
            rules: [4, 68, 69, 70],
            inclusive: false,
          },
          acc_title: {
            rules: [2, 68, 69, 70],
            inclusive: false,
          },
          style: {
            rules: [50, 51, 52, 53, 54, 55, 56, 57, 58, 68, 69, 70],
            inclusive: false,
          },
          unqString: {
            rules: [68, 69, 70],
            inclusive: false,
          },
          token: {
            rules: [68, 69, 70],
            inclusive: false,
          },
          string: {
            rules: [65, 66, 68, 69, 70],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
              38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 59, 60, 61, 62,
              63, 64, 67, 68, 69, 70,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function requirementDiagramUZGBJVZJHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(requirementDiagramUZGBJVZJHelper1, "Parser"),
      (requirementDiagramUZGBJVZJHelper1.prototype =
        requirementDiagramUZGBJVZJBinding67),
      (requirementDiagramUZGBJVZJBinding67.Parser =
        requirementDiagramUZGBJVZJHelper1),
      new requirementDiagramUZGBJVZJHelper1()
    );
  })();
  requirementDiagramUZGBJVZJBinding1.parser =
    requirementDiagramUZGBJVZJBinding1;
  requirementDiagramUZGBJVZJBinding2 = requirementDiagramUZGBJVZJBinding1;
  requirementDiagramUZGBJVZJBinding3 = class {
    constructor() {
      this.relations = [];
      this.latestRequirement = this.getInitialRequirement();
      this.requirements = new Map();
      this.latestElement = this.getInitialElement();
      this.elements = new Map();
      this.classes = new Map();
      this.direction = "TB";
      this.RequirementType = {
        REQUIREMENT: "Requirement",
        FUNCTIONAL_REQUIREMENT: "Functional Requirement",
        INTERFACE_REQUIREMENT: "Interface Requirement",
        PERFORMANCE_REQUIREMENT: "Performance Requirement",
        PHYSICAL_REQUIREMENT: "Physical Requirement",
        DESIGN_CONSTRAINT: "Design Constraint",
      };
      this.RiskLevel = {
        LOW_RISK: "Low",
        MED_RISK: "Medium",
        HIGH_RISK: "High",
      };
      this.VerifyType = {
        VERIFY_ANALYSIS: "Analysis",
        VERIFY_DEMONSTRATION: "Demonstration",
        VERIFY_INSPECTION: "Inspection",
        VERIFY_TEST: "Test",
      };
      this.Relationships = {
        CONTAINS: "contains",
        COPIES: "copies",
        DERIVES: "derives",
        SATISFIES: "satisfies",
        VERIFIES: "verifies",
        REFINES: "refines",
        TRACES: "traces",
      };
      this.setAccTitle = chunkABZYJK2DV;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setAccDescription = chunkABZYJK2DB;
      this.getAccDescription = chunkABZYJK2DUnderscore;
      this.setDiagramTitle = chunkABZYJK2DW;
      this.getDiagramTitle = chunkABZYJK2DC;
      this.getConfig = defineFunctionName(
        () => _chunkABZYJK2DB().requirement,
        "getConfig",
      );
      this.clear();
      this.setDirection = this.setDirection.bind(this);
      this.addRequirement = this.addRequirement.bind(this);
      this.setNewReqId = this.setNewReqId.bind(this);
      this.setNewReqRisk = this.setNewReqRisk.bind(this);
      this.setNewReqText = this.setNewReqText.bind(this);
      this.setNewReqVerifyMethod = this.setNewReqVerifyMethod.bind(this);
      this.addElement = this.addElement.bind(this);
      this.setNewElementType = this.setNewElementType.bind(this);
      this.setNewElementDocRef = this.setNewElementDocRef.bind(this);
      this.addRelationship = this.addRelationship.bind(this);
      this.setCssStyle = this.setCssStyle.bind(this);
      this.setClass = this.setClass.bind(this);
      this.defineClass = this.defineClass.bind(this);
      this.setAccTitle = this.setAccTitle.bind(this);
      this.setAccDescription = this.setAccDescription.bind(this);
    }
    static {
      defineFunctionName(this, "RequirementDB");
    }
    getDirection() {
      return this.direction;
    }
    setDirection(requirementDiagramUZGBJVZJInput54) {
      this.direction = requirementDiagramUZGBJVZJInput54;
    }
    resetLatestRequirement() {
      this.latestRequirement = this.getInitialRequirement();
    }
    resetLatestElement() {
      this.latestElement = this.getInitialElement();
    }
    getInitialRequirement() {
      return {
        requirementId: "",
        text: "",
        risk: "",
        verifyMethod: "",
        name: "",
        type: "",
        cssStyles: [],
        classes: ["default"],
      };
    }
    getInitialElement() {
      return {
        name: "",
        type: "",
        docRef: "",
        cssStyles: [],
        classes: ["default"],
      };
    }
    addRequirement(
      requirementDiagramUZGBJVZJInput25,
      requirementDiagramUZGBJVZJInput26,
    ) {
      return (
        this.requirements.has(requirementDiagramUZGBJVZJInput25) ||
          this.requirements.set(requirementDiagramUZGBJVZJInput25, {
            name: requirementDiagramUZGBJVZJInput25,
            type: requirementDiagramUZGBJVZJInput26,
            requirementId: this.latestRequirement.requirementId,
            text: this.latestRequirement.text,
            risk: this.latestRequirement.risk,
            verifyMethod: this.latestRequirement.verifyMethod,
            cssStyles: [],
            classes: ["default"],
          }),
        this.resetLatestRequirement(),
        this.requirements.get(requirementDiagramUZGBJVZJInput25)
      );
    }
    getRequirements() {
      return this.requirements;
    }
    setNewReqId(requirementDiagramUZGBJVZJInput38) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.requirementId =
          requirementDiagramUZGBJVZJInput38);
    }
    setNewReqText(requirementDiagramUZGBJVZJInput43) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.text = requirementDiagramUZGBJVZJInput43);
    }
    setNewReqRisk(requirementDiagramUZGBJVZJInput44) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.risk = requirementDiagramUZGBJVZJInput44);
    }
    setNewReqVerifyMethod(requirementDiagramUZGBJVZJInput35) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.verifyMethod =
          requirementDiagramUZGBJVZJInput35);
    }
    addElement(requirementDiagramUZGBJVZJInput27) {
      return (
        this.elements.has(requirementDiagramUZGBJVZJInput27) ||
          (this.elements.set(requirementDiagramUZGBJVZJInput27, {
            name: requirementDiagramUZGBJVZJInput27,
            type: this.latestElement.type,
            docRef: this.latestElement.docRef,
            cssStyles: [],
            classes: ["default"],
          }),
          logger.info(
            "Added new element: ",
            requirementDiagramUZGBJVZJInput27,
          )),
        this.resetLatestElement(),
        this.elements.get(requirementDiagramUZGBJVZJInput27)
      );
    }
    getElements() {
      return this.elements;
    }
    setNewElementType(requirementDiagramUZGBJVZJInput46) {
      this.latestElement !== undefined &&
        (this.latestElement.type = requirementDiagramUZGBJVZJInput46);
    }
    setNewElementDocRef(requirementDiagramUZGBJVZJInput45) {
      this.latestElement !== undefined &&
        (this.latestElement.docRef = requirementDiagramUZGBJVZJInput45);
    }
    addRelationship(
      requirementDiagramUZGBJVZJInput48,
      requirementDiagramUZGBJVZJInput49,
      requirementDiagramUZGBJVZJInput50,
    ) {
      this.relations.push({
        type: requirementDiagramUZGBJVZJInput48,
        src: requirementDiagramUZGBJVZJInput49,
        dst: requirementDiagramUZGBJVZJInput50,
      });
    }
    getRelationships() {
      return this.relations;
    }
    clear() {
      this.relations = [];
      this.resetLatestRequirement();
      this.requirements = new Map();
      this.resetLatestElement();
      this.elements = new Map();
      this.classes = new Map();
      chunkABZYJK2DA();
    }
    setCssStyle(
      requirementDiagramUZGBJVZJInput30,
      requirementDiagramUZGBJVZJInput31,
    ) {
      for (let requirementDiagramUZGBJVZJBinding129 of requirementDiagramUZGBJVZJInput30) {
        let requirementDiagramUZGBJVZJBinding134 =
          this.requirements.get(requirementDiagramUZGBJVZJBinding129) ??
          this.elements.get(requirementDiagramUZGBJVZJBinding129);
        if (
          !requirementDiagramUZGBJVZJInput31 ||
          !requirementDiagramUZGBJVZJBinding134
        )
          return;
        for (let requirementDiagramUZGBJVZJBinding140 of requirementDiagramUZGBJVZJInput31)
          requirementDiagramUZGBJVZJBinding140.includes(",")
            ? requirementDiagramUZGBJVZJBinding134.cssStyles.push(
                ...requirementDiagramUZGBJVZJBinding140.split(","),
              )
            : requirementDiagramUZGBJVZJBinding134.cssStyles.push(
                requirementDiagramUZGBJVZJBinding140,
              );
      }
    }
    setClass(
      requirementDiagramUZGBJVZJInput28,
      requirementDiagramUZGBJVZJInput29,
    ) {
      for (let requirementDiagramUZGBJVZJBinding128 of requirementDiagramUZGBJVZJInput28) {
        let requirementDiagramUZGBJVZJBinding130 =
          this.requirements.get(requirementDiagramUZGBJVZJBinding128) ??
          this.elements.get(requirementDiagramUZGBJVZJBinding128);
        if (requirementDiagramUZGBJVZJBinding130)
          for (let requirementDiagramUZGBJVZJBinding138 of requirementDiagramUZGBJVZJInput29) {
            requirementDiagramUZGBJVZJBinding130.classes.push(
              requirementDiagramUZGBJVZJBinding138,
            );
            let requirementDiagramUZGBJVZJBinding139 = this.classes.get(
              requirementDiagramUZGBJVZJBinding138,
            )?.styles;
            requirementDiagramUZGBJVZJBinding139 &&
              requirementDiagramUZGBJVZJBinding130.cssStyles.push(
                ...requirementDiagramUZGBJVZJBinding139,
              );
          }
      }
    }
    defineClass(
      requirementDiagramUZGBJVZJInput17,
      requirementDiagramUZGBJVZJInput18,
    ) {
      for (let requirementDiagramUZGBJVZJBinding119 of requirementDiagramUZGBJVZJInput17) {
        let requirementDiagramUZGBJVZJBinding120 = this.classes.get(
          requirementDiagramUZGBJVZJBinding119,
        );
        requirementDiagramUZGBJVZJBinding120 === undefined &&
          ((requirementDiagramUZGBJVZJBinding120 = {
            id: requirementDiagramUZGBJVZJBinding119,
            styles: [],
            textStyles: [],
          }),
          this.classes.set(
            requirementDiagramUZGBJVZJBinding119,
            requirementDiagramUZGBJVZJBinding120,
          ));
        requirementDiagramUZGBJVZJInput18 &&
          requirementDiagramUZGBJVZJInput18.forEach(function (item) {
            if (/color/.exec(item)) {
              let requirementDiagramUZGBJVZJBinding141 = item.replace(
                "fill",
                "bgFill",
              );
              requirementDiagramUZGBJVZJBinding120.textStyles.push(
                requirementDiagramUZGBJVZJBinding141,
              );
            }
            requirementDiagramUZGBJVZJBinding120.styles.push(item);
          });
        this.requirements.forEach((item) => {
          item.classes.includes(requirementDiagramUZGBJVZJBinding119) &&
            item.cssStyles.push(
              ...requirementDiagramUZGBJVZJInput18.flatMap((_item) =>
                _item.split(","),
              ),
            );
        });
        this.elements.forEach((item) => {
          item.classes.includes(requirementDiagramUZGBJVZJBinding119) &&
            item.cssStyles.push(
              ...requirementDiagramUZGBJVZJInput18.flatMap((_item) =>
                _item.split(","),
              ),
            );
        });
      }
    }
    getClasses() {
      return this.classes;
    }
    getData() {
      let requirementDiagramUZGBJVZJBinding102 = _chunkABZYJK2DB(),
        requirementDiagramUZGBJVZJBinding103 = [],
        requirementDiagramUZGBJVZJBinding104 = [];
      for (let requirementDiagramUZGBJVZJBinding125 of this.requirements.values()) {
        let requirementDiagramUZGBJVZJBinding135 =
          requirementDiagramUZGBJVZJBinding125;
        requirementDiagramUZGBJVZJBinding135.id =
          requirementDiagramUZGBJVZJBinding125.name;
        requirementDiagramUZGBJVZJBinding135.cssStyles =
          requirementDiagramUZGBJVZJBinding125.cssStyles;
        requirementDiagramUZGBJVZJBinding135.cssClasses =
          requirementDiagramUZGBJVZJBinding125.classes.join(" ");
        requirementDiagramUZGBJVZJBinding135.shape = "requirementBox";
        requirementDiagramUZGBJVZJBinding135.look =
          requirementDiagramUZGBJVZJBinding102.look;
        requirementDiagramUZGBJVZJBinding103.push(
          requirementDiagramUZGBJVZJBinding135,
        );
      }
      for (let requirementDiagramUZGBJVZJBinding126 of this.elements.values()) {
        let requirementDiagramUZGBJVZJBinding136 =
          requirementDiagramUZGBJVZJBinding126;
        requirementDiagramUZGBJVZJBinding136.shape = "requirementBox";
        requirementDiagramUZGBJVZJBinding136.look =
          requirementDiagramUZGBJVZJBinding102.look;
        requirementDiagramUZGBJVZJBinding136.id =
          requirementDiagramUZGBJVZJBinding126.name;
        requirementDiagramUZGBJVZJBinding136.cssStyles =
          requirementDiagramUZGBJVZJBinding126.cssStyles;
        requirementDiagramUZGBJVZJBinding136.cssClasses =
          requirementDiagramUZGBJVZJBinding126.classes.join(" ");
        requirementDiagramUZGBJVZJBinding103.push(
          requirementDiagramUZGBJVZJBinding136,
        );
      }
      for (let requirementDiagramUZGBJVZJBinding115 of this.relations) {
        let requirementDiagramUZGBJVZJBinding116 = 0,
          requirementDiagramUZGBJVZJBinding117 =
            requirementDiagramUZGBJVZJBinding115.type ===
            this.Relationships.CONTAINS,
          requirementDiagramUZGBJVZJBinding118 = {
            id: `${requirementDiagramUZGBJVZJBinding115.src}-${requirementDiagramUZGBJVZJBinding115.dst}-${requirementDiagramUZGBJVZJBinding116}`,
            start:
              this.requirements.get(requirementDiagramUZGBJVZJBinding115.src)
                ?.name ??
              this.elements.get(requirementDiagramUZGBJVZJBinding115.src)?.name,
            end:
              this.requirements.get(requirementDiagramUZGBJVZJBinding115.dst)
                ?.name ??
              this.elements.get(requirementDiagramUZGBJVZJBinding115.dst)?.name,
            label: `&lt;&lt;${requirementDiagramUZGBJVZJBinding115.type}&gt;&gt;`,
            classes: "relationshipLine",
            style: [
              "fill:none",
              requirementDiagramUZGBJVZJBinding117
                ? ""
                : "stroke-dasharray: 10,7",
            ],
            labelpos: "c",
            thickness: "normal",
            type: "normal",
            pattern: requirementDiagramUZGBJVZJBinding117 ? "normal" : "dashed",
            arrowTypeStart: requirementDiagramUZGBJVZJBinding117
              ? "requirement_contains"
              : "",
            arrowTypeEnd: requirementDiagramUZGBJVZJBinding117
              ? ""
              : "requirement_arrow",
            look: requirementDiagramUZGBJVZJBinding102.look,
          };
        requirementDiagramUZGBJVZJBinding104.push(
          requirementDiagramUZGBJVZJBinding118,
        );
        requirementDiagramUZGBJVZJBinding116++;
      }
      return {
        nodes: requirementDiagramUZGBJVZJBinding103,
        edges: requirementDiagramUZGBJVZJBinding104,
        other: {},
        config: requirementDiagramUZGBJVZJBinding102,
        direction: this.getDirection(),
      };
    }
  };
  requirementDiagramUZGBJVZJBinding4 = defineFunctionName(
    (requirementDiagramUZGBJVZJInput16) => `

  marker {
    fill: ${requirementDiagramUZGBJVZJInput16.relationColor};
    stroke: ${requirementDiagramUZGBJVZJInput16.relationColor};
  }

  marker.cross {
    stroke: ${requirementDiagramUZGBJVZJInput16.lineColor};
  }

  svg {
    font-family: ${requirementDiagramUZGBJVZJInput16.fontFamily};
    font-size: ${requirementDiagramUZGBJVZJInput16.fontSize};
  }

  .reqBox {
    fill: ${requirementDiagramUZGBJVZJInput16.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${requirementDiagramUZGBJVZJInput16.requirementBorderColor};
    stroke-width: ${requirementDiagramUZGBJVZJInput16.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${requirementDiagramUZGBJVZJInput16.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${requirementDiagramUZGBJVZJInput16.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${requirementDiagramUZGBJVZJInput16.requirementBorderColor};
    stroke-width: ${requirementDiagramUZGBJVZJInput16.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${requirementDiagramUZGBJVZJInput16.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${requirementDiagramUZGBJVZJInput16.relationLabelColor};
  }
  .divider {
    stroke: ${requirementDiagramUZGBJVZJInput16.nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${requirementDiagramUZGBJVZJInput16.fontFamily};
    color: ${requirementDiagramUZGBJVZJInput16.nodeTextColor || requirementDiagramUZGBJVZJInput16.textColor};
  }
  .label text,span {
    fill: ${requirementDiagramUZGBJVZJInput16.nodeTextColor || requirementDiagramUZGBJVZJInput16.textColor};
    color: ${requirementDiagramUZGBJVZJInput16.nodeTextColor || requirementDiagramUZGBJVZJInput16.textColor};
  }
  .labelBkg {
    background-color: ${requirementDiagramUZGBJVZJInput16.edgeLabelBackground};
  }

`,
    "getStyles",
  );
  requirementDiagramUZGBJVZJBinding5 = {};
  defineEnumerableGetters(requirementDiagramUZGBJVZJBinding5, {
    draw: () => requirementDiagramUZGBJVZJBinding6,
  });
  requirementDiagramUZGBJVZJBinding6 = defineFunctionName(async function (
    requirementDiagramUZGBJVZJInput19,
    requirementDiagramUZGBJVZJInput20,
    requirementDiagramUZGBJVZJInput21,
    requirementDiagramUZGBJVZJInput22,
  ) {
    logger.info("REF0:");
    logger.info(
      "Drawing requirement diagram (unified)",
      requirementDiagramUZGBJVZJInput20,
    );
    let { securityLevel, state, layout } = _chunkABZYJK2DB(),
      requirementDiagramUZGBJVZJBinding121 =
        requirementDiagramUZGBJVZJInput22.db.getData(),
      requirementDiagramUZGBJVZJBinding122 = t(
        requirementDiagramUZGBJVZJInput20,
        securityLevel,
      );
    requirementDiagramUZGBJVZJBinding121.type =
      requirementDiagramUZGBJVZJInput22.type;
    requirementDiagramUZGBJVZJBinding121.layoutAlgorithm =
      chunkN4CR4FBYT(layout);
    requirementDiagramUZGBJVZJBinding121.nodeSpacing = state?.nodeSpacing ?? 50;
    requirementDiagramUZGBJVZJBinding121.rankSpacing = state?.rankSpacing ?? 50;
    requirementDiagramUZGBJVZJBinding121.markers = [
      "requirement_contains",
      "requirement_arrow",
    ];
    requirementDiagramUZGBJVZJBinding121.diagramId =
      requirementDiagramUZGBJVZJInput20;
    await chunkN4CR4FBYI(
      requirementDiagramUZGBJVZJBinding121,
      requirementDiagramUZGBJVZJBinding122,
    );
    chunkS3R3BYOJG.insertTitle(
      requirementDiagramUZGBJVZJBinding122,
      "requirementDiagramTitleText",
      state?.titleTopMargin ?? 25,
      requirementDiagramUZGBJVZJInput22.db.getDiagramTitle(),
    );
    chunkQN33PNHLN(
      requirementDiagramUZGBJVZJBinding122,
      8,
      "requirementDiagram",
      state?.useMaxWidth ?? true,
    );
  }, "draw");
  RequirementDiagramUZGBJVZJ = {
    parser: requirementDiagramUZGBJVZJBinding2,
    get db() {
      return new requirementDiagramUZGBJVZJBinding3();
    },
    renderer: requirementDiagramUZGBJVZJBinding5,
    styles: requirementDiagramUZGBJVZJBinding4,
  };
})();
export { RequirementDiagramUZGBJVZJ as diagram };
