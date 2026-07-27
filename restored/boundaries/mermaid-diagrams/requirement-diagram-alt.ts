// Restored from ref/webview/assets/requirementDiagram-MS252O5E-Cpap0mp1.js
// Mermaid requirement diagram definition alt (db + renderer + parser). Unblocked by mermaid-layout-loaders-alt.
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
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWG, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk } from "../../diagrams/line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "../../diagrams/subgraph-title-margins-alt";
import { initGetDiagramElementChunk as n, getDiagramElement as t } from "../../diagrams/get-diagram-element-alt";
import { setupViewPortForSVG as chunkEDXVE4YYN, initSetupViewPortForSvgChunk as chunkEDXVE4YYT } from "../../diagrams/setup-viewport-for-svg-alt";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import {
  chunk336JU56OI,
  chunk336JU56ON,
  chunk336JU56OT,
} from "../../diagrams/mermaid-layout-loaders-alt";
var requirementDiagramMS252O5EBinding1,
  requirementDiagramMS252O5EBinding2,
  requirementDiagramMS252O5EBinding3,
  requirementDiagramMS252O5EBinding4,
  requirementDiagramMS252O5EBinding5,
  requirementDiagramMS252O5EBinding6,
  requirementDiagramMS252O5EBinding7,
  RequirementDiagramMS252O5E;
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
  requirementDiagramMS252O5EBinding1 = (function () {
    var requirementDiagramMS252O5EBinding8 = defineFunctionName(function (
        requirementDiagramMS252O5EInput40,
        requirementDiagramMS252O5EInput41,
        requirementDiagramMS252O5EInput42,
        requirementDiagramMS252O5EInput43,
      ) {
        for (
          requirementDiagramMS252O5EInput42 ||= {},
            requirementDiagramMS252O5EInput43 =
              requirementDiagramMS252O5EInput40.length;
          requirementDiagramMS252O5EInput43--;
          requirementDiagramMS252O5EInput42[
            requirementDiagramMS252O5EInput40[requirementDiagramMS252O5EInput43]
          ] = requirementDiagramMS252O5EInput41
        );
        return requirementDiagramMS252O5EInput42;
      }, "o"),
      requirementDiagramMS252O5EBinding9 = [1, 3],
      requirementDiagramMS252O5EBinding10 = [1, 4],
      requirementDiagramMS252O5EBinding11 = [1, 5],
      requirementDiagramMS252O5EBinding12 = [1, 6],
      requirementDiagramMS252O5EBinding13 = [
        5, 6, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74,
        77, 89, 90,
      ],
      requirementDiagramMS252O5EBinding14 = [1, 22],
      requirementDiagramMS252O5EBinding15 = [2, 7],
      requirementDiagramMS252O5EBinding16 = [1, 26],
      requirementDiagramMS252O5EBinding17 = [1, 27],
      requirementDiagramMS252O5EBinding18 = [1, 28],
      requirementDiagramMS252O5EBinding19 = [1, 29],
      requirementDiagramMS252O5EBinding20 = [1, 33],
      requirementDiagramMS252O5EBinding21 = [1, 34],
      requirementDiagramMS252O5EBinding22 = [1, 35],
      requirementDiagramMS252O5EBinding23 = [1, 36],
      requirementDiagramMS252O5EBinding24 = [1, 37],
      requirementDiagramMS252O5EBinding25 = [1, 38],
      requirementDiagramMS252O5EBinding26 = [1, 24],
      requirementDiagramMS252O5EBinding27 = [1, 31],
      requirementDiagramMS252O5EBinding28 = [1, 32],
      requirementDiagramMS252O5EBinding29 = [1, 30],
      requirementDiagramMS252O5EBinding30 = [1, 39],
      requirementDiagramMS252O5EBinding31 = [1, 40],
      requirementDiagramMS252O5EBinding32 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77,
        89, 90,
      ],
      requirementDiagramMS252O5EBinding33 = [1, 61],
      requirementDiagramMS252O5EBinding34 = [89, 90],
      requirementDiagramMS252O5EBinding35 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 29, 41, 42, 43, 44, 45, 46, 54, 61,
        63, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramMS252O5EBinding36 = [27, 29],
      requirementDiagramMS252O5EBinding37 = [1, 70],
      requirementDiagramMS252O5EBinding38 = [1, 71],
      requirementDiagramMS252O5EBinding39 = [1, 72],
      requirementDiagramMS252O5EBinding40 = [1, 73],
      requirementDiagramMS252O5EBinding41 = [1, 74],
      requirementDiagramMS252O5EBinding42 = [1, 75],
      requirementDiagramMS252O5EBinding43 = [1, 76],
      _RequirementDiagramMS252O5E = [1, 83],
      requirementDiagramMS252O5EBinding44 = [1, 80],
      requirementDiagramMS252O5EBinding45 = [1, 84],
      requirementDiagramMS252O5EBinding46 = [1, 85],
      requirementDiagramMS252O5EBinding47 = [1, 86],
      requirementDiagramMS252O5EBinding48 = [1, 87],
      requirementDiagramMS252O5EBinding49 = [1, 88],
      requirementDiagramMS252O5EBinding50 = [1, 89],
      requirementDiagramMS252O5EBinding51 = [1, 90],
      requirementDiagramMS252O5EBinding52 = [1, 91],
      requirementDiagramMS252O5EBinding53 = [1, 92],
      requirementDiagramMS252O5EBinding54 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 41, 42, 43, 44, 45, 46, 54, 72, 74,
        75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramMS252O5EBinding55 = [63, 64],
      requirementDiagramMS252O5EBinding56 = [1, 101],
      requirementDiagramMS252O5EBinding57 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 76,
        77, 89, 90,
      ],
      requirementDiagramMS252O5EBinding58 = [
        5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75,
        76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      ],
      requirementDiagramMS252O5EBinding59 = [1, 110],
      requirementDiagramMS252O5EBinding60 = [1, 106],
      requirementDiagramMS252O5EBinding61 = [1, 107],
      requirementDiagramMS252O5EBinding62 = [1, 108],
      requirementDiagramMS252O5EBinding63 = [1, 109],
      requirementDiagramMS252O5EBinding64 = [1, 111],
      requirementDiagramMS252O5EBinding65 = [1, 116],
      $ = [1, 117],
      requirementDiagramMS252O5EBinding66 = [1, 114],
      requirementDiagramMS252O5EBinding67 = [1, 115],
      requirementDiagramMS252O5EBinding68 = {
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
          requirementDiagramMS252O5EInput2,
          requirementDiagramMS252O5EInput3,
          requirementDiagramMS252O5EInput4,
          requirementDiagramMS252O5EInput5,
          requirementDiagramMS252O5EInput6,
          requirementDiagramMS252O5EInput7,
          requirementDiagramMS252O5EInput8,
        ) {
          var requirementDiagramMS252O5EBinding98 =
            requirementDiagramMS252O5EInput7.length - 1;
          switch (requirementDiagramMS252O5EInput6) {
            case 4:
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ].trim();
              requirementDiagramMS252O5EInput5.setAccTitle(this.$);
              break;
            case 5:
            case 6:
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ].trim();
              requirementDiagramMS252O5EInput5.setAccDescription(this.$);
              break;
            case 7:
              this.$ = [];
              break;
            case 17:
              requirementDiagramMS252O5EInput5.setDirection("TB");
              break;
            case 18:
              requirementDiagramMS252O5EInput5.setDirection("BT");
              break;
            case 19:
              requirementDiagramMS252O5EInput5.setDirection("RL");
              break;
            case 20:
              requirementDiagramMS252O5EInput5.setDirection("LR");
              break;
            case 21:
              requirementDiagramMS252O5EInput5.addRequirement(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 3
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 4
                ],
              );
              break;
            case 22:
              requirementDiagramMS252O5EInput5.addRequirement(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 5
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 6
                ],
              );
              requirementDiagramMS252O5EInput5.setClass(
                [
                  requirementDiagramMS252O5EInput7[
                    requirementDiagramMS252O5EBinding98 - 5
                  ],
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 3
                ],
              );
              break;
            case 23:
              requirementDiagramMS252O5EInput5.setNewReqId(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 24:
              requirementDiagramMS252O5EInput5.setNewReqText(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 25:
              requirementDiagramMS252O5EInput5.setNewReqRisk(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 26:
              requirementDiagramMS252O5EInput5.setNewReqVerifyMethod(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 29:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.REQUIREMENT;
              break;
            case 30:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.FUNCTIONAL_REQUIREMENT;
              break;
            case 31:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.INTERFACE_REQUIREMENT;
              break;
            case 32:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.PERFORMANCE_REQUIREMENT;
              break;
            case 33:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.PHYSICAL_REQUIREMENT;
              break;
            case 34:
              this.$ =
                requirementDiagramMS252O5EInput5.RequirementType.DESIGN_CONSTRAINT;
              break;
            case 35:
              this.$ = requirementDiagramMS252O5EInput5.RiskLevel.LOW_RISK;
              break;
            case 36:
              this.$ = requirementDiagramMS252O5EInput5.RiskLevel.MED_RISK;
              break;
            case 37:
              this.$ = requirementDiagramMS252O5EInput5.RiskLevel.HIGH_RISK;
              break;
            case 38:
              this.$ =
                requirementDiagramMS252O5EInput5.VerifyType.VERIFY_ANALYSIS;
              break;
            case 39:
              this.$ =
                requirementDiagramMS252O5EInput5.VerifyType.VERIFY_DEMONSTRATION;
              break;
            case 40:
              this.$ =
                requirementDiagramMS252O5EInput5.VerifyType.VERIFY_INSPECTION;
              break;
            case 41:
              this.$ = requirementDiagramMS252O5EInput5.VerifyType.VERIFY_TEST;
              break;
            case 42:
              requirementDiagramMS252O5EInput5.addElement(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 3
                ],
              );
              break;
            case 43:
              requirementDiagramMS252O5EInput5.addElement(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 5
                ],
              );
              requirementDiagramMS252O5EInput5.setClass(
                [
                  requirementDiagramMS252O5EInput7[
                    requirementDiagramMS252O5EBinding98 - 5
                  ],
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 3
                ],
              );
              break;
            case 44:
              requirementDiagramMS252O5EInput5.setNewElementType(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 45:
              requirementDiagramMS252O5EInput5.setNewElementDocRef(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
              );
              break;
            case 48:
              requirementDiagramMS252O5EInput5.addRelationship(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 4
                ],
              );
              break;
            case 49:
              requirementDiagramMS252O5EInput5.addRelationship(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 4
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              break;
            case 50:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.CONTAINS;
              break;
            case 51:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.COPIES;
              break;
            case 52:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.DERIVES;
              break;
            case 53:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.SATISFIES;
              break;
            case 54:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.VERIFIES;
              break;
            case 55:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.REFINES;
              break;
            case 56:
              this.$ = requirementDiagramMS252O5EInput5.Relationships.TRACES;
              break;
            case 57:
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ];
              requirementDiagramMS252O5EInput5.defineClass(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 1
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              break;
            case 58:
              requirementDiagramMS252O5EInput5.setClass(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 1
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              break;
            case 59:
              requirementDiagramMS252O5EInput5.setClass(
                [
                  requirementDiagramMS252O5EInput7[
                    requirementDiagramMS252O5EBinding98 - 2
                  ],
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              break;
            case 60:
            case 62:
              this.$ = [
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              ];
              break;
            case 61:
            case 63:
              this.$ = requirementDiagramMS252O5EInput7[
                requirementDiagramMS252O5EBinding98 - 2
              ].concat([
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              ]);
              break;
            case 64:
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ];
              requirementDiagramMS252O5EInput5.setCssStyle(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 1
                ],
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              break;
            case 65:
              this.$ = [
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              ];
              break;
            case 66:
              requirementDiagramMS252O5EInput7[
                requirementDiagramMS252O5EBinding98 - 2
              ].push(
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ],
              );
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 2
                ];
              break;
            case 68:
              this.$ =
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98 - 1
                ] +
                requirementDiagramMS252O5EInput7[
                  requirementDiagramMS252O5EBinding98
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            6: requirementDiagramMS252O5EBinding9,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
          },
          {
            1: [3],
          },
          {
            3: 8,
            4: 2,
            5: [1, 7],
            6: requirementDiagramMS252O5EBinding9,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding13,
            [2, 6],
          ),
          {
            3: 12,
            4: 2,
            6: requirementDiagramMS252O5EBinding9,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
          },
          {
            1: [2, 2],
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 13,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding13,
            [2, 4],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding13,
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
            5: requirementDiagramMS252O5EBinding14,
            7: 42,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 43,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 44,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 45,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 46,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 47,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 48,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 49,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            4: 17,
            5: requirementDiagramMS252O5EBinding14,
            7: 50,
            8: requirementDiagramMS252O5EBinding15,
            9: requirementDiagramMS252O5EBinding10,
            11: requirementDiagramMS252O5EBinding11,
            13: requirementDiagramMS252O5EBinding12,
            14: 14,
            15: 15,
            16: 16,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: requirementDiagramMS252O5EBinding16,
            22: requirementDiagramMS252O5EBinding17,
            23: requirementDiagramMS252O5EBinding18,
            24: requirementDiagramMS252O5EBinding19,
            25: 23,
            33: 25,
            41: requirementDiagramMS252O5EBinding20,
            42: requirementDiagramMS252O5EBinding21,
            43: requirementDiagramMS252O5EBinding22,
            44: requirementDiagramMS252O5EBinding23,
            45: requirementDiagramMS252O5EBinding24,
            46: requirementDiagramMS252O5EBinding25,
            54: requirementDiagramMS252O5EBinding26,
            72: requirementDiagramMS252O5EBinding27,
            74: requirementDiagramMS252O5EBinding28,
            77: requirementDiagramMS252O5EBinding29,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 17],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 18],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 19],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 20],
          ),
          {
            30: 60,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            30: 63,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            30: 64,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 29],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 30],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 31],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 32],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 33],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding34,
            [2, 34],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding35,
            [2, 81],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding35,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding36,
            [2, 79],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding36,
            [2, 80],
          ),
          {
            27: [1, 67],
            29: [1, 68],
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding36,
            [2, 85],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding36,
            [2, 86],
          ),
          {
            62: 69,
            65: requirementDiagramMS252O5EBinding37,
            66: requirementDiagramMS252O5EBinding38,
            67: requirementDiagramMS252O5EBinding39,
            68: requirementDiagramMS252O5EBinding40,
            69: requirementDiagramMS252O5EBinding41,
            70: requirementDiagramMS252O5EBinding42,
            71: requirementDiagramMS252O5EBinding43,
          },
          {
            62: 77,
            65: requirementDiagramMS252O5EBinding37,
            66: requirementDiagramMS252O5EBinding38,
            67: requirementDiagramMS252O5EBinding39,
            68: requirementDiagramMS252O5EBinding40,
            69: requirementDiagramMS252O5EBinding41,
            70: requirementDiagramMS252O5EBinding42,
            71: requirementDiagramMS252O5EBinding43,
          },
          {
            30: 78,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            73: 79,
            75: _RequirementDiagramMS252O5E,
            76: requirementDiagramMS252O5EBinding44,
            78: 81,
            79: 82,
            80: requirementDiagramMS252O5EBinding45,
            81: requirementDiagramMS252O5EBinding46,
            82: requirementDiagramMS252O5EBinding47,
            83: requirementDiagramMS252O5EBinding48,
            84: requirementDiagramMS252O5EBinding49,
            85: requirementDiagramMS252O5EBinding50,
            86: requirementDiagramMS252O5EBinding51,
            87: requirementDiagramMS252O5EBinding52,
            88: requirementDiagramMS252O5EBinding53,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding54,
            [2, 60],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding54,
            [2, 62],
          ),
          {
            73: 93,
            75: _RequirementDiagramMS252O5E,
            76: requirementDiagramMS252O5EBinding44,
            78: 81,
            79: 82,
            80: requirementDiagramMS252O5EBinding45,
            81: requirementDiagramMS252O5EBinding46,
            82: requirementDiagramMS252O5EBinding47,
            83: requirementDiagramMS252O5EBinding48,
            84: requirementDiagramMS252O5EBinding49,
            85: requirementDiagramMS252O5EBinding50,
            86: requirementDiagramMS252O5EBinding51,
            87: requirementDiagramMS252O5EBinding52,
            88: requirementDiagramMS252O5EBinding53,
          },
          {
            30: 94,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            76: requirementDiagramMS252O5EBinding44,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            5: [1, 95],
          },
          {
            30: 96,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            5: [1, 97],
          },
          {
            30: 98,
            33: 62,
            75: requirementDiagramMS252O5EBinding33,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            63: [1, 99],
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 50],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 51],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 52],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 53],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 54],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 55],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding55,
            [2, 56],
          ),
          {
            64: [1, 100],
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 59],
            {
              76: requirementDiagramMS252O5EBinding44,
            },
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 64],
            {
              76: requirementDiagramMS252O5EBinding56,
            },
          ),
          {
            33: 103,
            75: [1, 102],
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding57,
            [2, 65],
            {
              79: 104,
              75: _RequirementDiagramMS252O5E,
              80: requirementDiagramMS252O5EBinding45,
              81: requirementDiagramMS252O5EBinding46,
              82: requirementDiagramMS252O5EBinding47,
              83: requirementDiagramMS252O5EBinding48,
              84: requirementDiagramMS252O5EBinding49,
              85: requirementDiagramMS252O5EBinding50,
              86: requirementDiagramMS252O5EBinding51,
              87: requirementDiagramMS252O5EBinding52,
              88: requirementDiagramMS252O5EBinding53,
            },
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 67],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 69],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 70],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 71],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 72],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 73],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 74],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 75],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 76],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 77],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 78],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 57],
            {
              76: requirementDiagramMS252O5EBinding56,
            },
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 58],
            {
              76: requirementDiagramMS252O5EBinding44,
            },
          ),
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 105,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          {
            27: [1, 112],
            76: requirementDiagramMS252O5EBinding44,
          },
          {
            5: requirementDiagramMS252O5EBinding65,
            40: $,
            56: 113,
            57: requirementDiagramMS252O5EBinding66,
            59: requirementDiagramMS252O5EBinding67,
          },
          {
            27: [1, 118],
            76: requirementDiagramMS252O5EBinding44,
          },
          {
            33: 119,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            33: 120,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
          },
          {
            75: _RequirementDiagramMS252O5E,
            78: 121,
            79: 82,
            80: requirementDiagramMS252O5EBinding45,
            81: requirementDiagramMS252O5EBinding46,
            82: requirementDiagramMS252O5EBinding47,
            83: requirementDiagramMS252O5EBinding48,
            84: requirementDiagramMS252O5EBinding49,
            85: requirementDiagramMS252O5EBinding50,
            86: requirementDiagramMS252O5EBinding51,
            87: requirementDiagramMS252O5EBinding52,
            88: requirementDiagramMS252O5EBinding53,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding54,
            [2, 61],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding54,
            [2, 63],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding58,
            [2, 68],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
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
            5: requirementDiagramMS252O5EBinding59,
            28: 126,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 28],
          ),
          {
            5: [1, 127],
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 42],
          ),
          {
            32: [1, 128],
          },
          {
            32: [1, 129],
          },
          {
            5: requirementDiagramMS252O5EBinding65,
            40: $,
            56: 130,
            57: requirementDiagramMS252O5EBinding66,
            59: requirementDiagramMS252O5EBinding67,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 47],
          ),
          {
            5: [1, 131],
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 48],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 49],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding57,
            [2, 66],
            {
              79: 104,
              75: _RequirementDiagramMS252O5E,
              80: requirementDiagramMS252O5EBinding45,
              81: requirementDiagramMS252O5EBinding46,
              82: requirementDiagramMS252O5EBinding47,
              83: requirementDiagramMS252O5EBinding48,
              84: requirementDiagramMS252O5EBinding49,
              85: requirementDiagramMS252O5EBinding50,
              86: requirementDiagramMS252O5EBinding51,
              87: requirementDiagramMS252O5EBinding52,
              88: requirementDiagramMS252O5EBinding53,
            },
          ),
          {
            33: 132,
            89: requirementDiagramMS252O5EBinding30,
            90: requirementDiagramMS252O5EBinding31,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 27],
          ),
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 145,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 46],
          ),
          {
            5: requirementDiagramMS252O5EBinding65,
            40: $,
            56: 152,
            57: requirementDiagramMS252O5EBinding66,
            59: requirementDiagramMS252O5EBinding67,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
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
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 43],
          ),
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 159,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 160,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 161,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          {
            5: requirementDiagramMS252O5EBinding59,
            28: 162,
            31: requirementDiagramMS252O5EBinding60,
            34: requirementDiagramMS252O5EBinding61,
            36: requirementDiagramMS252O5EBinding62,
            38: requirementDiagramMS252O5EBinding63,
            40: requirementDiagramMS252O5EBinding64,
          },
          {
            5: requirementDiagramMS252O5EBinding65,
            40: $,
            56: 163,
            57: requirementDiagramMS252O5EBinding66,
            59: requirementDiagramMS252O5EBinding67,
          },
          {
            5: requirementDiagramMS252O5EBinding65,
            40: $,
            56: 164,
            57: requirementDiagramMS252O5EBinding66,
            59: requirementDiagramMS252O5EBinding67,
          },
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 23],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 24],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 25],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 26],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
            [2, 44],
          ),
          requirementDiagramMS252O5EBinding8(
            requirementDiagramMS252O5EBinding32,
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
          requirementDiagramMS252O5EInput34,
          requirementDiagramMS252O5EInput35,
        ) {
          if (requirementDiagramMS252O5EInput35.recoverable)
            this.trace(requirementDiagramMS252O5EInput34);
          else {
            var requirementDiagramMS252O5EBinding140 = Error(
              requirementDiagramMS252O5EInput34,
            );
            throw (
              (requirementDiagramMS252O5EBinding140.hash =
                requirementDiagramMS252O5EInput35),
              requirementDiagramMS252O5EBinding140
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (requirementDiagramMS252O5EInput1) {
          var requirementDiagramMS252O5EBinding69 = this,
            requirementDiagramMS252O5EBinding70 = [0],
            requirementDiagramMS252O5EBinding71 = [],
            requirementDiagramMS252O5EBinding72 = [null],
            requirementDiagramMS252O5EBinding73 = [],
            requirementDiagramMS252O5EBinding74 = this.table,
            requirementDiagramMS252O5EBinding75 = "",
            requirementDiagramMS252O5EBinding76 = 0,
            requirementDiagramMS252O5EBinding77 = 0,
            requirementDiagramMS252O5EBinding78 = 0,
            requirementDiagramMS252O5EBinding81 =
              requirementDiagramMS252O5EBinding73.slice.call(arguments, 1),
            requirementDiagramMS252O5EBinding82 = Object.create(this.lexer),
            requirementDiagramMS252O5EBinding83 = {
              yy: {},
            };
          for (var requirementDiagramMS252O5EBinding84 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              requirementDiagramMS252O5EBinding84,
            ) &&
              (requirementDiagramMS252O5EBinding83.yy[
                requirementDiagramMS252O5EBinding84
              ] = this.yy[requirementDiagramMS252O5EBinding84]);
          requirementDiagramMS252O5EBinding82.setInput(
            requirementDiagramMS252O5EInput1,
            requirementDiagramMS252O5EBinding83.yy,
          );
          requirementDiagramMS252O5EBinding83.yy.lexer =
            requirementDiagramMS252O5EBinding82;
          requirementDiagramMS252O5EBinding83.yy.parser = this;
          requirementDiagramMS252O5EBinding82.yylloc === undefined &&
            (requirementDiagramMS252O5EBinding82.yylloc = {});
          var requirementDiagramMS252O5EBinding85 =
            requirementDiagramMS252O5EBinding82.yylloc;
          requirementDiagramMS252O5EBinding73.push(
            requirementDiagramMS252O5EBinding85,
          );
          var requirementDiagramMS252O5EBinding86 =
            requirementDiagramMS252O5EBinding82.options &&
            requirementDiagramMS252O5EBinding82.options.ranges;
          typeof requirementDiagramMS252O5EBinding83.yy.parseError == "function"
            ? (this.parseError =
                requirementDiagramMS252O5EBinding83.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function requirementDiagramMS252O5EHelper2(
            requirementDiagramMS252O5EInput48,
          ) {
            requirementDiagramMS252O5EBinding70.length -=
              2 * requirementDiagramMS252O5EInput48;
            requirementDiagramMS252O5EBinding72.length -=
              requirementDiagramMS252O5EInput48;
            requirementDiagramMS252O5EBinding73.length -=
              requirementDiagramMS252O5EInput48;
          }
          defineFunctionName(requirementDiagramMS252O5EHelper2, "popStack");
          function requirementDiagramMS252O5EHelper3() {
            var requirementDiagramMS252O5EBinding132 =
              requirementDiagramMS252O5EBinding71.pop() ||
              requirementDiagramMS252O5EBinding82.lex() ||
              1;
            return (
              typeof requirementDiagramMS252O5EBinding132 != "number" &&
                (requirementDiagramMS252O5EBinding132 instanceof Array &&
                  ((requirementDiagramMS252O5EBinding71 =
                    requirementDiagramMS252O5EBinding132),
                  (requirementDiagramMS252O5EBinding132 =
                    requirementDiagramMS252O5EBinding71.pop())),
                (requirementDiagramMS252O5EBinding132 =
                  requirementDiagramMS252O5EBinding69.symbols_[
                    requirementDiagramMS252O5EBinding132
                  ] || requirementDiagramMS252O5EBinding132)),
              requirementDiagramMS252O5EBinding132
            );
          }
          defineFunctionName(requirementDiagramMS252O5EHelper3, "lex");
          for (
            var requirementDiagramMS252O5EBinding87,
              requirementDiagramMS252O5EBinding88,
              requirementDiagramMS252O5EBinding89,
              requirementDiagramMS252O5EBinding90,
              requirementDiagramMS252O5EBinding91,
              requirementDiagramMS252O5EBinding92 = {},
              requirementDiagramMS252O5EBinding93,
              requirementDiagramMS252O5EBinding94,
              requirementDiagramMS252O5EBinding95,
              requirementDiagramMS252O5EBinding96;
            ;
          ) {
            if (
              ((requirementDiagramMS252O5EBinding89 =
                requirementDiagramMS252O5EBinding70[
                  requirementDiagramMS252O5EBinding70.length - 1
                ]),
              this.defaultActions[requirementDiagramMS252O5EBinding89]
                ? (requirementDiagramMS252O5EBinding90 =
                    this.defaultActions[requirementDiagramMS252O5EBinding89])
                : ((requirementDiagramMS252O5EBinding87 ??=
                    requirementDiagramMS252O5EHelper3()),
                  (requirementDiagramMS252O5EBinding90 =
                    requirementDiagramMS252O5EBinding74[
                      requirementDiagramMS252O5EBinding89
                    ] &&
                    requirementDiagramMS252O5EBinding74[
                      requirementDiagramMS252O5EBinding89
                    ][requirementDiagramMS252O5EBinding87])),
              requirementDiagramMS252O5EBinding90 === undefined ||
                !requirementDiagramMS252O5EBinding90.length ||
                !requirementDiagramMS252O5EBinding90[0])
            ) {
              var requirementDiagramMS252O5EBinding97 = "";
              for (requirementDiagramMS252O5EBinding93 in ((requirementDiagramMS252O5EBinding96 =
                []),
              requirementDiagramMS252O5EBinding74[
                requirementDiagramMS252O5EBinding89
              ]))
                this.terminals_[requirementDiagramMS252O5EBinding93] &&
                  requirementDiagramMS252O5EBinding93 > 2 &&
                  requirementDiagramMS252O5EBinding96.push(
                    "'" +
                      this.terminals_[requirementDiagramMS252O5EBinding93] +
                      "'",
                  );
              requirementDiagramMS252O5EBinding97 =
                requirementDiagramMS252O5EBinding82.showPosition
                  ? "Parse error on line " +
                    (requirementDiagramMS252O5EBinding76 + 1) +
                    ":\n" +
                    requirementDiagramMS252O5EBinding82.showPosition() +
                    "\nExpecting " +
                    requirementDiagramMS252O5EBinding96.join(", ") +
                    ", got '" +
                    (this.terminals_[requirementDiagramMS252O5EBinding87] ||
                      requirementDiagramMS252O5EBinding87) +
                    "'"
                  : "Parse error on line " +
                    (requirementDiagramMS252O5EBinding76 + 1) +
                    ": Unexpected " +
                    (requirementDiagramMS252O5EBinding87 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[requirementDiagramMS252O5EBinding87] ||
                          requirementDiagramMS252O5EBinding87) +
                        "'");
              this.parseError(requirementDiagramMS252O5EBinding97, {
                text: requirementDiagramMS252O5EBinding82.match,
                token:
                  this.terminals_[requirementDiagramMS252O5EBinding87] ||
                  requirementDiagramMS252O5EBinding87,
                line: requirementDiagramMS252O5EBinding82.yylineno,
                loc: requirementDiagramMS252O5EBinding85,
                expected: requirementDiagramMS252O5EBinding96,
              });
            }
            if (
              requirementDiagramMS252O5EBinding90[0] instanceof Array &&
              requirementDiagramMS252O5EBinding90.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  requirementDiagramMS252O5EBinding89 +
                  ", token: " +
                  requirementDiagramMS252O5EBinding87,
              );
            switch (requirementDiagramMS252O5EBinding90[0]) {
              case 1:
                requirementDiagramMS252O5EBinding70.push(
                  requirementDiagramMS252O5EBinding87,
                );
                requirementDiagramMS252O5EBinding72.push(
                  requirementDiagramMS252O5EBinding82.yytext,
                );
                requirementDiagramMS252O5EBinding73.push(
                  requirementDiagramMS252O5EBinding82.yylloc,
                );
                requirementDiagramMS252O5EBinding70.push(
                  requirementDiagramMS252O5EBinding90[1],
                );
                requirementDiagramMS252O5EBinding87 = null;
                requirementDiagramMS252O5EBinding88
                  ? ((requirementDiagramMS252O5EBinding87 =
                      requirementDiagramMS252O5EBinding88),
                    (requirementDiagramMS252O5EBinding88 = null))
                  : ((requirementDiagramMS252O5EBinding77 =
                      requirementDiagramMS252O5EBinding82.yyleng),
                    (requirementDiagramMS252O5EBinding75 =
                      requirementDiagramMS252O5EBinding82.yytext),
                    (requirementDiagramMS252O5EBinding76 =
                      requirementDiagramMS252O5EBinding82.yylineno),
                    (requirementDiagramMS252O5EBinding85 =
                      requirementDiagramMS252O5EBinding82.yylloc),
                    requirementDiagramMS252O5EBinding78 > 0 &&
                      requirementDiagramMS252O5EBinding78--);
                break;
              case 2:
                if (
                  ((requirementDiagramMS252O5EBinding94 =
                    this.productions_[
                      requirementDiagramMS252O5EBinding90[1]
                    ][1]),
                  (requirementDiagramMS252O5EBinding92.$ =
                    requirementDiagramMS252O5EBinding72[
                      requirementDiagramMS252O5EBinding72.length -
                        requirementDiagramMS252O5EBinding94
                    ]),
                  (requirementDiagramMS252O5EBinding92._$ = {
                    first_line:
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length -
                          (requirementDiagramMS252O5EBinding94 || 1)
                      ].first_line,
                    last_line:
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length - 1
                      ].last_line,
                    first_column:
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length -
                          (requirementDiagramMS252O5EBinding94 || 1)
                      ].first_column,
                    last_column:
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length - 1
                      ].last_column,
                  }),
                  requirementDiagramMS252O5EBinding86 &&
                    (requirementDiagramMS252O5EBinding92._$.range = [
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length -
                          (requirementDiagramMS252O5EBinding94 || 1)
                      ].range[0],
                      requirementDiagramMS252O5EBinding73[
                        requirementDiagramMS252O5EBinding73.length - 1
                      ].range[1],
                    ]),
                  (requirementDiagramMS252O5EBinding91 =
                    this.performAction.apply(
                      requirementDiagramMS252O5EBinding92,
                      [
                        requirementDiagramMS252O5EBinding75,
                        requirementDiagramMS252O5EBinding77,
                        requirementDiagramMS252O5EBinding76,
                        requirementDiagramMS252O5EBinding83.yy,
                        requirementDiagramMS252O5EBinding90[1],
                        requirementDiagramMS252O5EBinding72,
                        requirementDiagramMS252O5EBinding73,
                      ].concat(requirementDiagramMS252O5EBinding81),
                    )),
                  requirementDiagramMS252O5EBinding91 !== undefined)
                )
                  return requirementDiagramMS252O5EBinding91;
                requirementDiagramMS252O5EBinding94 &&
                  ((requirementDiagramMS252O5EBinding70 =
                    requirementDiagramMS252O5EBinding70.slice(
                      0,
                      -1 * requirementDiagramMS252O5EBinding94 * 2,
                    )),
                  (requirementDiagramMS252O5EBinding72 =
                    requirementDiagramMS252O5EBinding72.slice(
                      0,
                      -1 * requirementDiagramMS252O5EBinding94,
                    )),
                  (requirementDiagramMS252O5EBinding73 =
                    requirementDiagramMS252O5EBinding73.slice(
                      0,
                      -1 * requirementDiagramMS252O5EBinding94,
                    )));
                requirementDiagramMS252O5EBinding70.push(
                  this.productions_[requirementDiagramMS252O5EBinding90[1]][0],
                );
                requirementDiagramMS252O5EBinding72.push(
                  requirementDiagramMS252O5EBinding92.$,
                );
                requirementDiagramMS252O5EBinding73.push(
                  requirementDiagramMS252O5EBinding92._$,
                );
                requirementDiagramMS252O5EBinding95 =
                  requirementDiagramMS252O5EBinding74[
                    requirementDiagramMS252O5EBinding70[
                      requirementDiagramMS252O5EBinding70.length - 2
                    ]
                  ][
                    requirementDiagramMS252O5EBinding70[
                      requirementDiagramMS252O5EBinding70.length - 1
                    ]
                  ];
                requirementDiagramMS252O5EBinding70.push(
                  requirementDiagramMS252O5EBinding95,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    requirementDiagramMS252O5EBinding68.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          requirementDiagramMS252O5EInput37,
          requirementDiagramMS252O5EInput38,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              requirementDiagramMS252O5EInput37,
              requirementDiagramMS252O5EInput38,
            );
          else throw Error(requirementDiagramMS252O5EInput37);
        }, "parseError"),
        setInput: defineFunctionName(function (
          requirementDiagramMS252O5EInput23,
          requirementDiagramMS252O5EInput24,
        ) {
          return (
            (this.yy = requirementDiagramMS252O5EInput24 || this.yy || {}),
            (this._input = requirementDiagramMS252O5EInput23),
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
          var requirementDiagramMS252O5EBinding124 = this._input[0];
          return (
            (this.yytext += requirementDiagramMS252O5EBinding124),
            this.yyleng++,
            this.offset++,
            (this.match += requirementDiagramMS252O5EBinding124),
            (this.matched += requirementDiagramMS252O5EBinding124),
            requirementDiagramMS252O5EBinding124.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            requirementDiagramMS252O5EBinding124
          );
        }, "input"),
        unput: defineFunctionName(function (requirementDiagramMS252O5EInput16) {
          var requirementDiagramMS252O5EBinding112 =
              requirementDiagramMS252O5EInput16.length,
            requirementDiagramMS252O5EBinding113 =
              requirementDiagramMS252O5EInput16.split(/(?:\r\n?|\n)/g);
          this._input = requirementDiagramMS252O5EInput16 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - requirementDiagramMS252O5EBinding112,
          );
          this.offset -= requirementDiagramMS252O5EBinding112;
          var requirementDiagramMS252O5EBinding114 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          requirementDiagramMS252O5EBinding113.length - 1 &&
            (this.yylineno -= requirementDiagramMS252O5EBinding113.length - 1);
          var requirementDiagramMS252O5EBinding115 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: requirementDiagramMS252O5EBinding113
                ? (requirementDiagramMS252O5EBinding113.length ===
                  requirementDiagramMS252O5EBinding114.length
                    ? this.yylloc.first_column
                    : 0) +
                  requirementDiagramMS252O5EBinding114[
                    requirementDiagramMS252O5EBinding114.length -
                      requirementDiagramMS252O5EBinding113.length
                  ].length -
                  requirementDiagramMS252O5EBinding113[0].length
                : this.yylloc.first_column -
                  requirementDiagramMS252O5EBinding112,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                requirementDiagramMS252O5EBinding115[0],
                requirementDiagramMS252O5EBinding115[0] +
                  this.yyleng -
                  requirementDiagramMS252O5EBinding112,
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
        less: defineFunctionName(function (requirementDiagramMS252O5EInput52) {
          this.unput(this.match.slice(requirementDiagramMS252O5EInput52));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var requirementDiagramMS252O5EBinding136 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (requirementDiagramMS252O5EBinding136.length > 20 ? "..." : "") +
            requirementDiagramMS252O5EBinding136.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var requirementDiagramMS252O5EBinding129 = this.match;
          return (
            requirementDiagramMS252O5EBinding129.length < 20 &&
              (requirementDiagramMS252O5EBinding129 += this._input.substr(
                0,
                20 - requirementDiagramMS252O5EBinding129.length,
              )),
            (
              requirementDiagramMS252O5EBinding129.substr(0, 20) +
              (requirementDiagramMS252O5EBinding129.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var requirementDiagramMS252O5EBinding137 = this.pastInput(),
            requirementDiagramMS252O5EBinding138 = Array(
              requirementDiagramMS252O5EBinding137.length + 1,
            ).join("-");
          return (
            requirementDiagramMS252O5EBinding137 +
            this.upcomingInput() +
            "\n" +
            requirementDiagramMS252O5EBinding138 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          requirementDiagramMS252O5EInput13,
          requirementDiagramMS252O5EInput14,
        ) {
          var requirementDiagramMS252O5EBinding99,
            requirementDiagramMS252O5EBinding100,
            requirementDiagramMS252O5EBinding101;
          if (
            (this.options.backtrack_lexer &&
              ((requirementDiagramMS252O5EBinding101 = {
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
                (requirementDiagramMS252O5EBinding101.yylloc.range =
                  this.yylloc.range.slice(0))),
            (requirementDiagramMS252O5EBinding100 =
              requirementDiagramMS252O5EInput13[0].match(/(?:\r\n?|\n).*/g)),
            requirementDiagramMS252O5EBinding100 &&
              (this.yylineno += requirementDiagramMS252O5EBinding100.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: requirementDiagramMS252O5EBinding100
                ? requirementDiagramMS252O5EBinding100[
                    requirementDiagramMS252O5EBinding100.length - 1
                  ].length -
                  requirementDiagramMS252O5EBinding100[
                    requirementDiagramMS252O5EBinding100.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  requirementDiagramMS252O5EInput13[0].length,
            }),
            (this.yytext += requirementDiagramMS252O5EInput13[0]),
            (this.match += requirementDiagramMS252O5EInput13[0]),
            (this.matches = requirementDiagramMS252O5EInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              requirementDiagramMS252O5EInput13[0].length,
            )),
            (this.matched += requirementDiagramMS252O5EInput13[0]),
            (requirementDiagramMS252O5EBinding99 = this.performAction.call(
              this,
              this.yy,
              this,
              requirementDiagramMS252O5EInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            requirementDiagramMS252O5EBinding99)
          )
            return requirementDiagramMS252O5EBinding99;
          if (this._backtrack) {
            for (var requirementDiagramMS252O5EBinding102 in requirementDiagramMS252O5EBinding101)
              this[requirementDiagramMS252O5EBinding102] =
                requirementDiagramMS252O5EBinding101[
                  requirementDiagramMS252O5EBinding102
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var requirementDiagramMS252O5EBinding106,
            requirementDiagramMS252O5EBinding107,
            requirementDiagramMS252O5EBinding108,
            requirementDiagramMS252O5EBinding109;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var requirementDiagramMS252O5EBinding110 = this._currentRules(),
              requirementDiagramMS252O5EBinding111 = 0;
            requirementDiagramMS252O5EBinding111 <
            requirementDiagramMS252O5EBinding110.length;
            requirementDiagramMS252O5EBinding111++
          )
            if (
              ((requirementDiagramMS252O5EBinding108 = this._input.match(
                this.rules[
                  requirementDiagramMS252O5EBinding110[
                    requirementDiagramMS252O5EBinding111
                  ]
                ],
              )),
              requirementDiagramMS252O5EBinding108 &&
                (!requirementDiagramMS252O5EBinding107 ||
                  requirementDiagramMS252O5EBinding108[0].length >
                    requirementDiagramMS252O5EBinding107[0].length))
            ) {
              if (
                ((requirementDiagramMS252O5EBinding107 =
                  requirementDiagramMS252O5EBinding108),
                (requirementDiagramMS252O5EBinding109 =
                  requirementDiagramMS252O5EBinding111),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((requirementDiagramMS252O5EBinding106 = this.test_match(
                    requirementDiagramMS252O5EBinding108,
                    requirementDiagramMS252O5EBinding110[
                      requirementDiagramMS252O5EBinding111
                    ],
                  )),
                  requirementDiagramMS252O5EBinding106 !== false)
                )
                  return requirementDiagramMS252O5EBinding106;
                if (this._backtrack) {
                  requirementDiagramMS252O5EBinding107 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return requirementDiagramMS252O5EBinding107
            ? ((requirementDiagramMS252O5EBinding106 = this.test_match(
                requirementDiagramMS252O5EBinding107,
                requirementDiagramMS252O5EBinding110[
                  requirementDiagramMS252O5EBinding109
                ],
              )),
              requirementDiagramMS252O5EBinding106 === false
                ? false
                : requirementDiagramMS252O5EBinding106)
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
        begin: defineFunctionName(function (requirementDiagramMS252O5EInput53) {
          this.conditionStack.push(requirementDiagramMS252O5EInput53);
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
          requirementDiagramMS252O5EInput33,
        ) {
          return (
            (requirementDiagramMS252O5EInput33 =
              this.conditionStack.length -
              1 -
              Math.abs(requirementDiagramMS252O5EInput33 || 0)),
            requirementDiagramMS252O5EInput33 >= 0
              ? this.conditionStack[requirementDiagramMS252O5EInput33]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          requirementDiagramMS252O5EInput54,
        ) {
          this.begin(requirementDiagramMS252O5EInput54);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          requirementDiagramMS252O5EInput9,
          requirementDiagramMS252O5EInput10,
          requirementDiagramMS252O5EInput11,
          requirementDiagramMS252O5EInput12,
        ) {
          switch (requirementDiagramMS252O5EInput11) {
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
                (requirementDiagramMS252O5EInput10.yytext =
                  requirementDiagramMS252O5EInput10.yytext.trim()),
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
    function requirementDiagramMS252O5EHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(requirementDiagramMS252O5EHelper1, "Parser"),
      (requirementDiagramMS252O5EHelper1.prototype =
        requirementDiagramMS252O5EBinding68),
      (requirementDiagramMS252O5EBinding68.Parser =
        requirementDiagramMS252O5EHelper1),
      new requirementDiagramMS252O5EHelper1()
    );
  })();
  requirementDiagramMS252O5EBinding1.parser =
    requirementDiagramMS252O5EBinding1;
  requirementDiagramMS252O5EBinding2 = requirementDiagramMS252O5EBinding1;
  requirementDiagramMS252O5EBinding3 = class {
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
      this.setAccTitle = chunkICPOFSXXH;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setAccDescription = chunkICPOFSXXV;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setDiagramTitle = chunkICPOFSXXG;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getConfig = defineFunctionName(
        () => chunkICPOFSXXB().requirement,
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
    setDirection(requirementDiagramMS252O5EInput55) {
      this.direction = requirementDiagramMS252O5EInput55;
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
      requirementDiagramMS252O5EInput25,
      requirementDiagramMS252O5EInput26,
    ) {
      return (
        this.requirements.has(requirementDiagramMS252O5EInput25) ||
          this.requirements.set(requirementDiagramMS252O5EInput25, {
            name: requirementDiagramMS252O5EInput25,
            type: requirementDiagramMS252O5EInput26,
            requirementId: this.latestRequirement.requirementId,
            text: this.latestRequirement.text,
            risk: this.latestRequirement.risk,
            verifyMethod: this.latestRequirement.verifyMethod,
            cssStyles: [],
            classes: ["default"],
          }),
        this.resetLatestRequirement(),
        this.requirements.get(requirementDiagramMS252O5EInput25)
      );
    }
    getRequirements() {
      return this.requirements;
    }
    setNewReqId(requirementDiagramMS252O5EInput39) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.requirementId =
          requirementDiagramMS252O5EInput39);
    }
    setNewReqText(requirementDiagramMS252O5EInput44) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.text = requirementDiagramMS252O5EInput44);
    }
    setNewReqRisk(requirementDiagramMS252O5EInput45) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.risk = requirementDiagramMS252O5EInput45);
    }
    setNewReqVerifyMethod(requirementDiagramMS252O5EInput36) {
      this.latestRequirement !== undefined &&
        (this.latestRequirement.verifyMethod =
          requirementDiagramMS252O5EInput36);
    }
    addElement(requirementDiagramMS252O5EInput28) {
      return (
        this.elements.has(requirementDiagramMS252O5EInput28) ||
          (this.elements.set(requirementDiagramMS252O5EInput28, {
            name: requirementDiagramMS252O5EInput28,
            type: this.latestElement.type,
            docRef: this.latestElement.docRef,
            cssStyles: [],
            classes: ["default"],
          }),
          logger.info(
            "Added new element: ",
            requirementDiagramMS252O5EInput28,
          )),
        this.resetLatestElement(),
        this.elements.get(requirementDiagramMS252O5EInput28)
      );
    }
    getElements() {
      return this.elements;
    }
    setNewElementType(requirementDiagramMS252O5EInput47) {
      this.latestElement !== undefined &&
        (this.latestElement.type = requirementDiagramMS252O5EInput47);
    }
    setNewElementDocRef(requirementDiagramMS252O5EInput46) {
      this.latestElement !== undefined &&
        (this.latestElement.docRef = requirementDiagramMS252O5EInput46);
    }
    addRelationship(
      requirementDiagramMS252O5EInput49,
      requirementDiagramMS252O5EInput50,
      requirementDiagramMS252O5EInput51,
    ) {
      this.relations.push({
        type: requirementDiagramMS252O5EInput49,
        src: requirementDiagramMS252O5EInput50,
        dst: requirementDiagramMS252O5EInput51,
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
      _chunkICPOFSXXA();
    }
    setCssStyle(
      requirementDiagramMS252O5EInput31,
      requirementDiagramMS252O5EInput32,
    ) {
      for (let requirementDiagramMS252O5EBinding134 of requirementDiagramMS252O5EInput31) {
        let requirementDiagramMS252O5EBinding139 =
          this.requirements.get(requirementDiagramMS252O5EBinding134) ??
          this.elements.get(requirementDiagramMS252O5EBinding134);
        if (
          !requirementDiagramMS252O5EInput32 ||
          !requirementDiagramMS252O5EBinding139
        )
          return;
        for (let requirementDiagramMS252O5EBinding143 of requirementDiagramMS252O5EInput32)
          requirementDiagramMS252O5EBinding143.includes(",")
            ? requirementDiagramMS252O5EBinding139.cssStyles.push(
                ...requirementDiagramMS252O5EBinding143.split(","),
              )
            : requirementDiagramMS252O5EBinding139.cssStyles.push(
                requirementDiagramMS252O5EBinding143,
              );
      }
    }
    setClass(
      requirementDiagramMS252O5EInput29,
      requirementDiagramMS252O5EInput30,
    ) {
      for (let requirementDiagramMS252O5EBinding133 of requirementDiagramMS252O5EInput29) {
        let requirementDiagramMS252O5EBinding135 =
          this.requirements.get(requirementDiagramMS252O5EBinding133) ??
          this.elements.get(requirementDiagramMS252O5EBinding133);
        if (requirementDiagramMS252O5EBinding135)
          for (let requirementDiagramMS252O5EBinding141 of requirementDiagramMS252O5EInput30) {
            requirementDiagramMS252O5EBinding135.classes.push(
              requirementDiagramMS252O5EBinding141,
            );
            let requirementDiagramMS252O5EBinding142 = this.classes.get(
              requirementDiagramMS252O5EBinding141,
            )?.styles;
            requirementDiagramMS252O5EBinding142 &&
              requirementDiagramMS252O5EBinding135.cssStyles.push(
                ...requirementDiagramMS252O5EBinding142,
              );
          }
      }
    }
    defineClass(
      requirementDiagramMS252O5EInput21,
      requirementDiagramMS252O5EInput22,
    ) {
      for (let requirementDiagramMS252O5EBinding122 of requirementDiagramMS252O5EInput21) {
        let requirementDiagramMS252O5EBinding123 = this.classes.get(
          requirementDiagramMS252O5EBinding122,
        );
        requirementDiagramMS252O5EBinding123 === undefined &&
          ((requirementDiagramMS252O5EBinding123 = {
            id: requirementDiagramMS252O5EBinding122,
            styles: [],
            textStyles: [],
          }),
          this.classes.set(
            requirementDiagramMS252O5EBinding122,
            requirementDiagramMS252O5EBinding123,
          ));
        requirementDiagramMS252O5EInput22 &&
          requirementDiagramMS252O5EInput22.forEach(function (item) {
            if (/color/.exec(item)) {
              let requirementDiagramMS252O5EBinding144 = item.replace(
                "fill",
                "bgFill",
              );
              requirementDiagramMS252O5EBinding123.textStyles.push(
                requirementDiagramMS252O5EBinding144,
              );
            }
            requirementDiagramMS252O5EBinding123.styles.push(item);
          });
        this.requirements.forEach((item) => {
          item.classes.includes(requirementDiagramMS252O5EBinding122) &&
            item.cssStyles.push(
              ...requirementDiagramMS252O5EInput22.flatMap((_item) =>
                _item.split(","),
              ),
            );
        });
        this.elements.forEach((item) => {
          item.classes.includes(requirementDiagramMS252O5EBinding122) &&
            item.cssStyles.push(
              ...requirementDiagramMS252O5EInput22.flatMap((_item) =>
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
      let requirementDiagramMS252O5EBinding103 = chunkICPOFSXXB(),
        requirementDiagramMS252O5EBinding104 = [],
        requirementDiagramMS252O5EBinding105 = [];
      for (let requirementDiagramMS252O5EBinding126 of this.requirements.values()) {
        let requirementDiagramMS252O5EBinding130 =
          requirementDiagramMS252O5EBinding126;
        requirementDiagramMS252O5EBinding130.id =
          requirementDiagramMS252O5EBinding126.name;
        requirementDiagramMS252O5EBinding130.cssStyles =
          requirementDiagramMS252O5EBinding126.cssStyles;
        requirementDiagramMS252O5EBinding130.cssClasses =
          requirementDiagramMS252O5EBinding126.classes.join(" ");
        requirementDiagramMS252O5EBinding130.shape = "requirementBox";
        requirementDiagramMS252O5EBinding130.look =
          requirementDiagramMS252O5EBinding103.look;
        requirementDiagramMS252O5EBinding130.colorIndex =
          requirementDiagramMS252O5EBinding104.length;
        requirementDiagramMS252O5EBinding104.push(
          requirementDiagramMS252O5EBinding130,
        );
      }
      for (let requirementDiagramMS252O5EBinding127 of this.elements.values()) {
        let requirementDiagramMS252O5EBinding131 =
          requirementDiagramMS252O5EBinding127;
        requirementDiagramMS252O5EBinding131.shape = "requirementBox";
        requirementDiagramMS252O5EBinding131.look =
          requirementDiagramMS252O5EBinding103.look;
        requirementDiagramMS252O5EBinding131.id =
          requirementDiagramMS252O5EBinding127.name;
        requirementDiagramMS252O5EBinding131.cssStyles =
          requirementDiagramMS252O5EBinding127.cssStyles;
        requirementDiagramMS252O5EBinding131.cssClasses =
          requirementDiagramMS252O5EBinding127.classes.join(" ");
        requirementDiagramMS252O5EBinding131.colorIndex =
          requirementDiagramMS252O5EBinding104.length;
        requirementDiagramMS252O5EBinding104.push(
          requirementDiagramMS252O5EBinding131,
        );
      }
      for (let requirementDiagramMS252O5EBinding116 of this.relations) {
        let requirementDiagramMS252O5EBinding117 = 0,
          requirementDiagramMS252O5EBinding118 =
            requirementDiagramMS252O5EBinding116.type ===
            this.Relationships.CONTAINS,
          requirementDiagramMS252O5EBinding119 = {
            id: `${requirementDiagramMS252O5EBinding116.src}-${requirementDiagramMS252O5EBinding116.dst}-${requirementDiagramMS252O5EBinding117}`,
            start:
              this.requirements.get(requirementDiagramMS252O5EBinding116.src)
                ?.name ??
              this.elements.get(requirementDiagramMS252O5EBinding116.src)?.name,
            end:
              this.requirements.get(requirementDiagramMS252O5EBinding116.dst)
                ?.name ??
              this.elements.get(requirementDiagramMS252O5EBinding116.dst)?.name,
            label: `&lt;&lt;${requirementDiagramMS252O5EBinding116.type}&gt;&gt;`,
            classes: "relationshipLine",
            style: [
              "fill:none",
              requirementDiagramMS252O5EBinding118
                ? ""
                : "stroke-dasharray: 10,7",
            ],
            labelpos: "c",
            thickness: "normal",
            type: "normal",
            pattern: requirementDiagramMS252O5EBinding118 ? "normal" : "dashed",
            arrowTypeStart: requirementDiagramMS252O5EBinding118
              ? "requirement_contains"
              : "",
            arrowTypeEnd: requirementDiagramMS252O5EBinding118
              ? ""
              : "requirement_arrow",
            look: requirementDiagramMS252O5EBinding103.look,
            labelType: "markdown",
          };
        requirementDiagramMS252O5EBinding105.push(
          requirementDiagramMS252O5EBinding119,
        );
        requirementDiagramMS252O5EBinding117++;
      }
      return {
        nodes: requirementDiagramMS252O5EBinding104,
        edges: requirementDiagramMS252O5EBinding105,
        other: {},
        config: requirementDiagramMS252O5EBinding103,
        direction: this.getDirection(),
      };
    }
  };
  requirementDiagramMS252O5EBinding4 = defineFunctionName(
    (requirementDiagramMS252O5EInput27) => {
      let { themeVariables, look } = chunkICPOFSXXY(),
        { bkgColorArray, borderColorArray } = themeVariables;
      if (!borderColorArray?.length) return "";
      let requirementDiagramMS252O5EBinding125 = "";
      for (
        let requirementDiagramMS252O5EBinding128 = 0;
        requirementDiagramMS252O5EBinding128 <
        requirementDiagramMS252O5EInput27.THEME_COLOR_LIMIT;
        requirementDiagramMS252O5EBinding128++
      )
        requirementDiagramMS252O5EBinding125 += `

    [data-look="${look}"][data-color-id="color-${requirementDiagramMS252O5EBinding128}"].node path {
    stroke: ${borderColorArray[requirementDiagramMS252O5EBinding128]};
    fill: ${bkgColorArray?.length ? bkgColorArray[requirementDiagramMS252O5EBinding128] : ""};
    }

    [data-look="${look}"][data-color-id="color-${requirementDiagramMS252O5EBinding128}"].node  rect {
    stroke: ${borderColorArray[requirementDiagramMS252O5EBinding128]};
    fill: ${bkgColorArray?.length ? bkgColorArray[requirementDiagramMS252O5EBinding128] : ""};
     }
    `;
      return requirementDiagramMS252O5EBinding125;
    },
    "genColor",
  );
  requirementDiagramMS252O5EBinding5 = defineFunctionName(
    (requirementDiagramMS252O5EInput15) => {
      let { look, themeVariables } = chunkICPOFSXXY(),
        { requirementEdgeLabelBackground } = themeVariables;
      return `
  ${requirementDiagramMS252O5EBinding4(requirementDiagramMS252O5EInput15)}
  marker {
    fill: ${requirementDiagramMS252O5EInput15.relationColor};
    stroke: ${requirementDiagramMS252O5EInput15.relationColor};
  }

  marker.cross {
    stroke: ${requirementDiagramMS252O5EInput15.lineColor};
  }

  svg {
    font-family: ${requirementDiagramMS252O5EInput15.fontFamily};
    font-size: ${requirementDiagramMS252O5EInput15.fontSize};
  }

  .reqBox {
    fill: ${requirementDiagramMS252O5EInput15.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${requirementDiagramMS252O5EInput15.requirementBorderColor};
    stroke-width: ${requirementDiagramMS252O5EInput15.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${requirementDiagramMS252O5EInput15.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${requirementDiagramMS252O5EInput15.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${requirementDiagramMS252O5EInput15.requirementBorderColor};
    stroke-width: ${requirementDiagramMS252O5EInput15.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${requirementDiagramMS252O5EInput15.relationColor};
    stroke-width: ${look === "neo" ? requirementDiagramMS252O5EInput15.strokeWidth : "1px"};
  }
  .relationshipLabel {
    fill: ${requirementDiagramMS252O5EInput15.relationLabelColor};
  }
    .edgeLabel {
    background-color: ${requirementDiagramMS252O5EInput15.edgeLabelBackground};
  }
  .edgeLabel .label rect {
    fill: ${requirementDiagramMS252O5EInput15.edgeLabelBackground};
  }
  .edgeLabel .label text {
    fill: ${requirementDiagramMS252O5EInput15.relationLabelColor};
  }
  .divider {
    stroke: ${requirementDiagramMS252O5EInput15.nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${requirementDiagramMS252O5EInput15.fontFamily};
    color: ${requirementDiagramMS252O5EInput15.nodeTextColor || requirementDiagramMS252O5EInput15.textColor};
  }
  .label text,span {
    fill: ${requirementDiagramMS252O5EInput15.nodeTextColor || requirementDiagramMS252O5EInput15.textColor};
    color: ${requirementDiagramMS252O5EInput15.nodeTextColor || requirementDiagramMS252O5EInput15.textColor};
  }
  .labelBkg {
    background-color: ${requirementEdgeLabelBackground ?? requirementDiagramMS252O5EInput15.edgeLabelBackground};
  }

`;
    },
    "getStyles",
  );
  requirementDiagramMS252O5EBinding6 = {};
  defineEnumerableGetters(requirementDiagramMS252O5EBinding6, {
    draw: () => requirementDiagramMS252O5EBinding7,
  });
  requirementDiagramMS252O5EBinding7 = defineFunctionName(async function (
    requirementDiagramMS252O5EInput17,
    requirementDiagramMS252O5EInput18,
    requirementDiagramMS252O5EInput19,
    requirementDiagramMS252O5EInput20,
  ) {
    logger.info("REF0:");
    logger.info(
      "Drawing requirement diagram (unified)",
      requirementDiagramMS252O5EInput18,
    );
    let { securityLevel, state, layout, look } = chunkICPOFSXXB(),
      requirementDiagramMS252O5EBinding120 =
        requirementDiagramMS252O5EInput20.db.getData(),
      requirementDiagramMS252O5EBinding121 = t(
        requirementDiagramMS252O5EInput18,
        securityLevel,
      );
    requirementDiagramMS252O5EBinding120.type =
      requirementDiagramMS252O5EInput20.type;
    requirementDiagramMS252O5EBinding120.layoutAlgorithm =
      chunk336JU56OT(layout);
    requirementDiagramMS252O5EBinding120.nodeSpacing = state?.nodeSpacing ?? 50;
    requirementDiagramMS252O5EBinding120.rankSpacing = state?.rankSpacing ?? 50;
    requirementDiagramMS252O5EBinding120.markers =
      look === "neo"
        ? ["requirement_contains_neo", "requirement_arrow_neo"]
        : ["requirement_contains", "requirement_arrow"];
    requirementDiagramMS252O5EBinding120.diagramId =
      requirementDiagramMS252O5EInput18;
    await chunk336JU56OI(
      requirementDiagramMS252O5EBinding120,
      requirementDiagramMS252O5EBinding121,
    );
    chunk5PVQY5BWG.insertTitle(
      requirementDiagramMS252O5EBinding121,
      "requirementDiagramTitleText",
      state?.titleTopMargin ?? 25,
      requirementDiagramMS252O5EInput20.db.getDiagramTitle(),
    );
    chunkEDXVE4YYN(
      requirementDiagramMS252O5EBinding121,
      8,
      "requirementDiagram",
      state?.useMaxWidth ?? true,
    );
  }, "draw");
  RequirementDiagramMS252O5E = {
    parser: requirementDiagramMS252O5EBinding2,
    get db() {
      return new requirementDiagramMS252O5EBinding3();
    },
    renderer: requirementDiagramMS252O5EBinding6,
    styles: requirementDiagramMS252O5EBinding5,
  };
})();
export { RequirementDiagramMS252O5E as diagram };
