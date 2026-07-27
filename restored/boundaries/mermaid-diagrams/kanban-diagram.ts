// Restored from ref/webview/assets/kanban-definition-3W4ZIXB7-D2wfD8hF.js
// Mermaid kanban diagram definition (primary: db + renderer + jison parser).
// Stage 3 candidate: frontier drain after flowchart createText/nodes/edges promote.
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
} from "../../utils/dayjs-core-alt-dup";
import { c, d, p, t } from "../../vendor/khroma";
import {
  K as _chunkABZYJK2DK,
  b,
  d as chunkABZYJK2DD,
  K,
  L,
} from "../../diagrams/mermaid-config";
import { selectSvgElement as n, initSelectSvgElementChunk as chunkEXTU4WIET } from "../../diagrams/select-svg-element";
import { chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA } from "./mermaid-create-text";
import { initGetIconStylesChunk as chunkFMBD7UC4N, getIconStyles as chunkFMBD7UC4T } from "../../diagrams/get-icon-styles-alt";
import { initSubGraphTitleMarginsChunk as chunkCVBHYZKIN } from "../../diagrams/subgraph-title-margins";
import { initStyleHelpersChunk as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import {
  chunkJZLCHNYAI,
  chunkJZLCHNYAD,
  chunkJZLCHNYAL,
  chunkJZLCHNYAO,
} from "./mermaid-flowchart-nodes";
import { initMermaidJsYamlAlt as chunkMI3HLSF2N, yamlLoad as r, yamlCoreSchema as chunkMI3HLSF2T } from "../../utils/mermaid-js-yaml-alt";
var kanbanDefinition3W4ZIXB7Binding1,
  kanbanDefinition3W4ZIXB7Binding2,
  kanbanDefinition3W4ZIXB7Binding3,
  kanbanDefinition3W4ZIXB7Binding4,
  kanbanDefinition3W4ZIXB7Binding5,
  kanbanDefinition3W4ZIXB7Binding6,
  kanbanDefinition3W4ZIXB7Binding7,
  kanbanDefinition3W4ZIXB7Binding8,
  kanbanDefinition3W4ZIXB7Binding9,
  kanbanDefinition3W4ZIXB7Binding10,
  kanbanDefinition3W4ZIXB7Binding11,
  kanbanDefinition3W4ZIXB7Binding12,
  kanbanDefinition3W4ZIXB7Binding13,
  kanbanDefinition3W4ZIXB7Binding14,
  kanbanDefinition3W4ZIXB7Binding15,
  KanbanDefinition3W4ZIXB7;
esmInit(() => {
  chunkEXTU4WIET();
  chunkFMBD7UC4N();
  chunkMI3HLSF2N();
  chunkJZLCHNYAD();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  _chunkABZYJK2DK();
  initDayjsLoggerRuntime();
  t();
  kanbanDefinition3W4ZIXB7Binding1 = (function () {
    var kanbanDefinition3W4ZIXB7Binding16 = defineFunctionName(function (
        kanbanDefinition3W4ZIXB7Input39,
        kanbanDefinition3W4ZIXB7Input40,
        kanbanDefinition3W4ZIXB7Input41,
        kanbanDefinition3W4ZIXB7Input42,
      ) {
        for (
          kanbanDefinition3W4ZIXB7Input41 ||= {},
            kanbanDefinition3W4ZIXB7Input42 =
              kanbanDefinition3W4ZIXB7Input39.length;
          kanbanDefinition3W4ZIXB7Input42--;
          kanbanDefinition3W4ZIXB7Input41[
            kanbanDefinition3W4ZIXB7Input39[kanbanDefinition3W4ZIXB7Input42]
          ] = kanbanDefinition3W4ZIXB7Input40
        );
        return kanbanDefinition3W4ZIXB7Input41;
      }, "o"),
      kanbanDefinition3W4ZIXB7Binding17 = [1, 4],
      kanbanDefinition3W4ZIXB7Binding18 = [1, 13],
      kanbanDefinition3W4ZIXB7Binding19 = [1, 12],
      kanbanDefinition3W4ZIXB7Binding20 = [1, 15],
      kanbanDefinition3W4ZIXB7Binding21 = [1, 16],
      kanbanDefinition3W4ZIXB7Binding22 = [1, 20],
      kanbanDefinition3W4ZIXB7Binding23 = [1, 19],
      kanbanDefinition3W4ZIXB7Binding24 = [6, 7, 8],
      kanbanDefinition3W4ZIXB7Binding25 = [1, 26],
      kanbanDefinition3W4ZIXB7Binding26 = [1, 24],
      kanbanDefinition3W4ZIXB7Binding27 = [1, 25],
      kanbanDefinition3W4ZIXB7Binding28 = [6, 7, 11],
      kanbanDefinition3W4ZIXB7Binding29 = [1, 31],
      kanbanDefinition3W4ZIXB7Binding30 = [6, 7, 11, 24],
      kanbanDefinition3W4ZIXB7Binding31 = [1, 6, 13, 16, 17, 20, 23],
      kanbanDefinition3W4ZIXB7Binding32 = [1, 35],
      kanbanDefinition3W4ZIXB7Binding33 = [1, 36],
      kanbanDefinition3W4ZIXB7Binding34 = [1, 6, 7, 11, 13, 16, 17, 20, 23],
      kanbanDefinition3W4ZIXB7Binding35 = [1, 38],
      kanbanDefinition3W4ZIXB7Binding36 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          mindMap: 4,
          spaceLines: 5,
          SPACELINE: 6,
          NL: 7,
          KANBAN: 8,
          document: 9,
          stop: 10,
          EOF: 11,
          statement: 12,
          SPACELIST: 13,
          node: 14,
          shapeData: 15,
          ICON: 16,
          CLASS: 17,
          nodeWithId: 18,
          nodeWithoutId: 19,
          NODE_DSTART: 20,
          NODE_DESCR: 21,
          NODE_DEND: 22,
          NODE_ID: 23,
          SHAPE_DATA: 24,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          6: "SPACELINE",
          7: "NL",
          8: "KANBAN",
          11: "EOF",
          13: "SPACELIST",
          16: "ICON",
          17: "CLASS",
          20: "NODE_DSTART",
          21: "NODE_DESCR",
          22: "NODE_DEND",
          23: "NODE_ID",
          24: "SHAPE_DATA",
        },
        productions_: [
          0,
          [3, 1],
          [3, 2],
          [5, 1],
          [5, 2],
          [5, 2],
          [4, 2],
          [4, 3],
          [10, 1],
          [10, 1],
          [10, 1],
          [10, 2],
          [10, 2],
          [9, 3],
          [9, 2],
          [12, 3],
          [12, 2],
          [12, 2],
          [12, 2],
          [12, 1],
          [12, 2],
          [12, 1],
          [12, 1],
          [12, 1],
          [12, 1],
          [14, 1],
          [14, 1],
          [19, 3],
          [18, 1],
          [18, 4],
          [15, 2],
          [15, 1],
        ],
        performAction: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input6,
          kanbanDefinition3W4ZIXB7Input7,
          kanbanDefinition3W4ZIXB7Input8,
          kanbanDefinition3W4ZIXB7Input9,
          kanbanDefinition3W4ZIXB7Input10,
          kanbanDefinition3W4ZIXB7Input11,
          kanbanDefinition3W4ZIXB7Input12,
        ) {
          var kanbanDefinition3W4ZIXB7Binding66 =
            kanbanDefinition3W4ZIXB7Input11.length - 1;
          switch (kanbanDefinition3W4ZIXB7Input10) {
            case 6:
            case 7:
              return kanbanDefinition3W4ZIXB7Input9;
            case 8:
              kanbanDefinition3W4ZIXB7Input9.getLogger().trace("Stop NL ");
              break;
            case 9:
              kanbanDefinition3W4ZIXB7Input9.getLogger().trace("Stop EOF ");
              break;
            case 11:
              kanbanDefinition3W4ZIXB7Input9.getLogger().trace("Stop NL2 ");
              break;
            case 12:
              kanbanDefinition3W4ZIXB7Input9.getLogger().trace("Stop EOF2 ");
              break;
            case 15:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .info(
                  "Node: ",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 1
                  ].id,
                );
              kanbanDefinition3W4ZIXB7Input9.addNode(
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 2
                ].length,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].id,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].descr,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].type,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ],
              );
              break;
            case 16:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .info(
                  "Node: ",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ].id,
                );
              kanbanDefinition3W4ZIXB7Input9.addNode(
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].length,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].id,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].descr,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].type,
              );
              break;
            case 17:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .trace(
                  "Icon: ",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ],
                );
              kanbanDefinition3W4ZIXB7Input9.decorateNode({
                icon: kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ],
              });
              break;
            case 18:
            case 23:
              kanbanDefinition3W4ZIXB7Input9.decorateNode({
                class:
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ],
              });
              break;
            case 19:
              kanbanDefinition3W4ZIXB7Input9.getLogger().trace("SPACELIST");
              break;
            case 20:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .trace(
                  "Node: ",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 1
                  ].id,
                );
              kanbanDefinition3W4ZIXB7Input9.addNode(
                0,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].id,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].descr,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ].type,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ],
              );
              break;
            case 21:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .trace(
                  "Node: ",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ].id,
                );
              kanbanDefinition3W4ZIXB7Input9.addNode(
                0,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].id,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].descr,
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ].type,
              );
              break;
            case 22:
              kanbanDefinition3W4ZIXB7Input9.decorateNode({
                icon: kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ],
              });
              break;
            case 27:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .trace(
                  "node found ..",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 2
                  ],
                );
              this.$ = {
                id: kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ],
                descr:
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 1
                  ],
                type: kanbanDefinition3W4ZIXB7Input9.getType(
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 2
                  ],
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ],
                ),
              };
              break;
            case 28:
              this.$ = {
                id: kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ],
                descr:
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ],
                type: 0,
              };
              break;
            case 29:
              kanbanDefinition3W4ZIXB7Input9
                .getLogger()
                .trace(
                  "node found ..",
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 3
                  ],
                );
              this.$ = {
                id: kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 3
                ],
                descr:
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 1
                  ],
                type: kanbanDefinition3W4ZIXB7Input9.getType(
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66 - 2
                  ],
                  kanbanDefinition3W4ZIXB7Input11[
                    kanbanDefinition3W4ZIXB7Binding66
                  ],
                ),
              };
              break;
            case 30:
              this.$ =
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66 - 1
                ] +
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ];
              break;
            case 31:
              this.$ =
                kanbanDefinition3W4ZIXB7Input11[
                  kanbanDefinition3W4ZIXB7Binding66
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            5: 3,
            6: [1, 5],
            8: kanbanDefinition3W4ZIXB7Binding17,
          },
          {
            1: [3],
          },
          {
            1: [2, 1],
          },
          {
            4: 6,
            6: [1, 7],
            7: [1, 8],
            8: kanbanDefinition3W4ZIXB7Binding17,
          },
          {
            6: kanbanDefinition3W4ZIXB7Binding18,
            7: [1, 10],
            9: 9,
            12: 11,
            13: kanbanDefinition3W4ZIXB7Binding19,
            14: 14,
            16: kanbanDefinition3W4ZIXB7Binding20,
            17: kanbanDefinition3W4ZIXB7Binding21,
            18: 17,
            19: 18,
            20: kanbanDefinition3W4ZIXB7Binding22,
            23: kanbanDefinition3W4ZIXB7Binding23,
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding24,
            [2, 3],
          ),
          {
            1: [2, 2],
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding24,
            [2, 4],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding24,
            [2, 5],
          ),
          {
            1: [2, 6],
            6: kanbanDefinition3W4ZIXB7Binding18,
            12: 21,
            13: kanbanDefinition3W4ZIXB7Binding19,
            14: 14,
            16: kanbanDefinition3W4ZIXB7Binding20,
            17: kanbanDefinition3W4ZIXB7Binding21,
            18: 17,
            19: 18,
            20: kanbanDefinition3W4ZIXB7Binding22,
            23: kanbanDefinition3W4ZIXB7Binding23,
          },
          {
            6: kanbanDefinition3W4ZIXB7Binding18,
            9: 22,
            12: 11,
            13: kanbanDefinition3W4ZIXB7Binding19,
            14: 14,
            16: kanbanDefinition3W4ZIXB7Binding20,
            17: kanbanDefinition3W4ZIXB7Binding21,
            18: 17,
            19: 18,
            20: kanbanDefinition3W4ZIXB7Binding22,
            23: kanbanDefinition3W4ZIXB7Binding23,
          },
          {
            6: kanbanDefinition3W4ZIXB7Binding25,
            7: kanbanDefinition3W4ZIXB7Binding26,
            10: 23,
            11: kanbanDefinition3W4ZIXB7Binding27,
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 24],
            {
              18: 17,
              19: 18,
              14: 27,
              16: [1, 28],
              17: [1, 29],
              20: kanbanDefinition3W4ZIXB7Binding22,
              23: kanbanDefinition3W4ZIXB7Binding23,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 19],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 21],
            {
              15: 30,
              24: kanbanDefinition3W4ZIXB7Binding29,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 22],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 23],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 25],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 26],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 28],
            {
              20: [1, 32],
            },
          ),
          {
            21: [1, 33],
          },
          {
            6: kanbanDefinition3W4ZIXB7Binding25,
            7: kanbanDefinition3W4ZIXB7Binding26,
            10: 34,
            11: kanbanDefinition3W4ZIXB7Binding27,
          },
          {
            1: [2, 7],
            6: kanbanDefinition3W4ZIXB7Binding18,
            12: 21,
            13: kanbanDefinition3W4ZIXB7Binding19,
            14: 14,
            16: kanbanDefinition3W4ZIXB7Binding20,
            17: kanbanDefinition3W4ZIXB7Binding21,
            18: 17,
            19: 18,
            20: kanbanDefinition3W4ZIXB7Binding22,
            23: kanbanDefinition3W4ZIXB7Binding23,
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding31,
            [2, 14],
            {
              7: kanbanDefinition3W4ZIXB7Binding32,
              11: kanbanDefinition3W4ZIXB7Binding33,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding34,
            [2, 8],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding34,
            [2, 9],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding34,
            [2, 10],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 16],
            {
              15: 37,
              24: kanbanDefinition3W4ZIXB7Binding29,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 17],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 18],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 20],
            {
              24: kanbanDefinition3W4ZIXB7Binding35,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 31],
          ),
          {
            21: [1, 39],
          },
          {
            22: [1, 40],
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding31,
            [2, 13],
            {
              7: kanbanDefinition3W4ZIXB7Binding32,
              11: kanbanDefinition3W4ZIXB7Binding33,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding34,
            [2, 11],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding34,
            [2, 12],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding28,
            [2, 15],
            {
              24: kanbanDefinition3W4ZIXB7Binding35,
            },
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 30],
          ),
          {
            22: [1, 41],
          },
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 27],
          ),
          kanbanDefinition3W4ZIXB7Binding16(
            kanbanDefinition3W4ZIXB7Binding30,
            [2, 29],
          ),
        ],
        defaultActions: {
          2: [2, 1],
          6: [2, 2],
        },
        parseError: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input35,
          kanbanDefinition3W4ZIXB7Input36,
        ) {
          if (kanbanDefinition3W4ZIXB7Input36.recoverable)
            this.trace(kanbanDefinition3W4ZIXB7Input35);
          else {
            var kanbanDefinition3W4ZIXB7Binding135 = Error(
              kanbanDefinition3W4ZIXB7Input35,
            );
            throw (
              (kanbanDefinition3W4ZIXB7Binding135.hash =
                kanbanDefinition3W4ZIXB7Input36),
              kanbanDefinition3W4ZIXB7Binding135
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (kanbanDefinition3W4ZIXB7Input1) {
          var kanbanDefinition3W4ZIXB7Binding37 = this,
            kanbanDefinition3W4ZIXB7Binding38 = [0],
            kanbanDefinition3W4ZIXB7Binding39 = [],
            kanbanDefinition3W4ZIXB7Binding40 = [null],
            kanbanDefinition3W4ZIXB7Binding41 = [],
            kanbanDefinition3W4ZIXB7Binding42 = this.table,
            kanbanDefinition3W4ZIXB7Binding43 = "",
            kanbanDefinition3W4ZIXB7Binding44 = 0,
            kanbanDefinition3W4ZIXB7Binding45 = 0,
            kanbanDefinition3W4ZIXB7Binding46 = 0,
            kanbanDefinition3W4ZIXB7Binding49 =
              kanbanDefinition3W4ZIXB7Binding41.slice.call(arguments, 1),
            kanbanDefinition3W4ZIXB7Binding50 = Object.create(this.lexer),
            kanbanDefinition3W4ZIXB7Binding51 = {
              yy: {},
            };
          for (var kanbanDefinition3W4ZIXB7Binding52 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              kanbanDefinition3W4ZIXB7Binding52,
            ) &&
              (kanbanDefinition3W4ZIXB7Binding51.yy[
                kanbanDefinition3W4ZIXB7Binding52
              ] = this.yy[kanbanDefinition3W4ZIXB7Binding52]);
          kanbanDefinition3W4ZIXB7Binding50.setInput(
            kanbanDefinition3W4ZIXB7Input1,
            kanbanDefinition3W4ZIXB7Binding51.yy,
          );
          kanbanDefinition3W4ZIXB7Binding51.yy.lexer =
            kanbanDefinition3W4ZIXB7Binding50;
          kanbanDefinition3W4ZIXB7Binding51.yy.parser = this;
          kanbanDefinition3W4ZIXB7Binding50.yylloc === undefined &&
            (kanbanDefinition3W4ZIXB7Binding50.yylloc = {});
          var kanbanDefinition3W4ZIXB7Binding53 =
            kanbanDefinition3W4ZIXB7Binding50.yylloc;
          kanbanDefinition3W4ZIXB7Binding41.push(
            kanbanDefinition3W4ZIXB7Binding53,
          );
          var kanbanDefinition3W4ZIXB7Binding54 =
            kanbanDefinition3W4ZIXB7Binding50.options &&
            kanbanDefinition3W4ZIXB7Binding50.options.ranges;
          typeof kanbanDefinition3W4ZIXB7Binding51.yy.parseError == "function"
            ? (this.parseError =
                kanbanDefinition3W4ZIXB7Binding51.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function kanbanDefinition3W4ZIXB7Helper2(
            kanbanDefinition3W4ZIXB7Input43,
          ) {
            kanbanDefinition3W4ZIXB7Binding38.length -=
              2 * kanbanDefinition3W4ZIXB7Input43;
            kanbanDefinition3W4ZIXB7Binding40.length -=
              kanbanDefinition3W4ZIXB7Input43;
            kanbanDefinition3W4ZIXB7Binding41.length -=
              kanbanDefinition3W4ZIXB7Input43;
          }
          defineFunctionName(kanbanDefinition3W4ZIXB7Helper2, "popStack");
          function kanbanDefinition3W4ZIXB7Helper3() {
            var kanbanDefinition3W4ZIXB7Binding127 =
              kanbanDefinition3W4ZIXB7Binding39.pop() ||
              kanbanDefinition3W4ZIXB7Binding50.lex() ||
              1;
            return (
              typeof kanbanDefinition3W4ZIXB7Binding127 != "number" &&
                (kanbanDefinition3W4ZIXB7Binding127 instanceof Array &&
                  ((kanbanDefinition3W4ZIXB7Binding39 =
                    kanbanDefinition3W4ZIXB7Binding127),
                  (kanbanDefinition3W4ZIXB7Binding127 =
                    kanbanDefinition3W4ZIXB7Binding39.pop())),
                (kanbanDefinition3W4ZIXB7Binding127 =
                  kanbanDefinition3W4ZIXB7Binding37.symbols_[
                    kanbanDefinition3W4ZIXB7Binding127
                  ] || kanbanDefinition3W4ZIXB7Binding127)),
              kanbanDefinition3W4ZIXB7Binding127
            );
          }
          defineFunctionName(kanbanDefinition3W4ZIXB7Helper3, "lex");
          for (
            var kanbanDefinition3W4ZIXB7Binding55,
              kanbanDefinition3W4ZIXB7Binding56,
              kanbanDefinition3W4ZIXB7Binding57,
              kanbanDefinition3W4ZIXB7Binding58,
              kanbanDefinition3W4ZIXB7Binding59,
              kanbanDefinition3W4ZIXB7Binding60 = {},
              kanbanDefinition3W4ZIXB7Binding61,
              kanbanDefinition3W4ZIXB7Binding62,
              kanbanDefinition3W4ZIXB7Binding63,
              kanbanDefinition3W4ZIXB7Binding64;
            ;
          ) {
            if (
              ((kanbanDefinition3W4ZIXB7Binding57 =
                kanbanDefinition3W4ZIXB7Binding38[
                  kanbanDefinition3W4ZIXB7Binding38.length - 1
                ]),
              this.defaultActions[kanbanDefinition3W4ZIXB7Binding57]
                ? (kanbanDefinition3W4ZIXB7Binding58 =
                    this.defaultActions[kanbanDefinition3W4ZIXB7Binding57])
                : ((kanbanDefinition3W4ZIXB7Binding55 ??=
                    kanbanDefinition3W4ZIXB7Helper3()),
                  (kanbanDefinition3W4ZIXB7Binding58 =
                    kanbanDefinition3W4ZIXB7Binding42[
                      kanbanDefinition3W4ZIXB7Binding57
                    ] &&
                    kanbanDefinition3W4ZIXB7Binding42[
                      kanbanDefinition3W4ZIXB7Binding57
                    ][kanbanDefinition3W4ZIXB7Binding55])),
              kanbanDefinition3W4ZIXB7Binding58 === undefined ||
                !kanbanDefinition3W4ZIXB7Binding58.length ||
                !kanbanDefinition3W4ZIXB7Binding58[0])
            ) {
              var kanbanDefinition3W4ZIXB7Binding65 = "";
              for (kanbanDefinition3W4ZIXB7Binding61 in ((kanbanDefinition3W4ZIXB7Binding64 =
                []),
              kanbanDefinition3W4ZIXB7Binding42[
                kanbanDefinition3W4ZIXB7Binding57
              ]))
                this.terminals_[kanbanDefinition3W4ZIXB7Binding61] &&
                  kanbanDefinition3W4ZIXB7Binding61 > 2 &&
                  kanbanDefinition3W4ZIXB7Binding64.push(
                    "'" +
                      this.terminals_[kanbanDefinition3W4ZIXB7Binding61] +
                      "'",
                  );
              kanbanDefinition3W4ZIXB7Binding65 =
                kanbanDefinition3W4ZIXB7Binding50.showPosition
                  ? "Parse error on line " +
                    (kanbanDefinition3W4ZIXB7Binding44 + 1) +
                    ":\n" +
                    kanbanDefinition3W4ZIXB7Binding50.showPosition() +
                    "\nExpecting " +
                    kanbanDefinition3W4ZIXB7Binding64.join(", ") +
                    ", got '" +
                    (this.terminals_[kanbanDefinition3W4ZIXB7Binding55] ||
                      kanbanDefinition3W4ZIXB7Binding55) +
                    "'"
                  : "Parse error on line " +
                    (kanbanDefinition3W4ZIXB7Binding44 + 1) +
                    ": Unexpected " +
                    (kanbanDefinition3W4ZIXB7Binding55 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[kanbanDefinition3W4ZIXB7Binding55] ||
                          kanbanDefinition3W4ZIXB7Binding55) +
                        "'");
              this.parseError(kanbanDefinition3W4ZIXB7Binding65, {
                text: kanbanDefinition3W4ZIXB7Binding50.match,
                token:
                  this.terminals_[kanbanDefinition3W4ZIXB7Binding55] ||
                  kanbanDefinition3W4ZIXB7Binding55,
                line: kanbanDefinition3W4ZIXB7Binding50.yylineno,
                loc: kanbanDefinition3W4ZIXB7Binding53,
                expected: kanbanDefinition3W4ZIXB7Binding64,
              });
            }
            if (
              kanbanDefinition3W4ZIXB7Binding58[0] instanceof Array &&
              kanbanDefinition3W4ZIXB7Binding58.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  kanbanDefinition3W4ZIXB7Binding57 +
                  ", token: " +
                  kanbanDefinition3W4ZIXB7Binding55,
              );
            switch (kanbanDefinition3W4ZIXB7Binding58[0]) {
              case 1:
                kanbanDefinition3W4ZIXB7Binding38.push(
                  kanbanDefinition3W4ZIXB7Binding55,
                );
                kanbanDefinition3W4ZIXB7Binding40.push(
                  kanbanDefinition3W4ZIXB7Binding50.yytext,
                );
                kanbanDefinition3W4ZIXB7Binding41.push(
                  kanbanDefinition3W4ZIXB7Binding50.yylloc,
                );
                kanbanDefinition3W4ZIXB7Binding38.push(
                  kanbanDefinition3W4ZIXB7Binding58[1],
                );
                kanbanDefinition3W4ZIXB7Binding55 = null;
                kanbanDefinition3W4ZIXB7Binding56
                  ? ((kanbanDefinition3W4ZIXB7Binding55 =
                      kanbanDefinition3W4ZIXB7Binding56),
                    (kanbanDefinition3W4ZIXB7Binding56 = null))
                  : ((kanbanDefinition3W4ZIXB7Binding45 =
                      kanbanDefinition3W4ZIXB7Binding50.yyleng),
                    (kanbanDefinition3W4ZIXB7Binding43 =
                      kanbanDefinition3W4ZIXB7Binding50.yytext),
                    (kanbanDefinition3W4ZIXB7Binding44 =
                      kanbanDefinition3W4ZIXB7Binding50.yylineno),
                    (kanbanDefinition3W4ZIXB7Binding53 =
                      kanbanDefinition3W4ZIXB7Binding50.yylloc),
                    kanbanDefinition3W4ZIXB7Binding46 > 0 &&
                      kanbanDefinition3W4ZIXB7Binding46--);
                break;
              case 2:
                if (
                  ((kanbanDefinition3W4ZIXB7Binding62 =
                    this.productions_[kanbanDefinition3W4ZIXB7Binding58[1]][1]),
                  (kanbanDefinition3W4ZIXB7Binding60.$ =
                    kanbanDefinition3W4ZIXB7Binding40[
                      kanbanDefinition3W4ZIXB7Binding40.length -
                        kanbanDefinition3W4ZIXB7Binding62
                    ]),
                  (kanbanDefinition3W4ZIXB7Binding60._$ = {
                    first_line:
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length -
                          (kanbanDefinition3W4ZIXB7Binding62 || 1)
                      ].first_line,
                    last_line:
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length - 1
                      ].last_line,
                    first_column:
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length -
                          (kanbanDefinition3W4ZIXB7Binding62 || 1)
                      ].first_column,
                    last_column:
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length - 1
                      ].last_column,
                  }),
                  kanbanDefinition3W4ZIXB7Binding54 &&
                    (kanbanDefinition3W4ZIXB7Binding60._$.range = [
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length -
                          (kanbanDefinition3W4ZIXB7Binding62 || 1)
                      ].range[0],
                      kanbanDefinition3W4ZIXB7Binding41[
                        kanbanDefinition3W4ZIXB7Binding41.length - 1
                      ].range[1],
                    ]),
                  (kanbanDefinition3W4ZIXB7Binding59 = this.performAction.apply(
                    kanbanDefinition3W4ZIXB7Binding60,
                    [
                      kanbanDefinition3W4ZIXB7Binding43,
                      kanbanDefinition3W4ZIXB7Binding45,
                      kanbanDefinition3W4ZIXB7Binding44,
                      kanbanDefinition3W4ZIXB7Binding51.yy,
                      kanbanDefinition3W4ZIXB7Binding58[1],
                      kanbanDefinition3W4ZIXB7Binding40,
                      kanbanDefinition3W4ZIXB7Binding41,
                    ].concat(kanbanDefinition3W4ZIXB7Binding49),
                  )),
                  kanbanDefinition3W4ZIXB7Binding59 !== undefined)
                )
                  return kanbanDefinition3W4ZIXB7Binding59;
                kanbanDefinition3W4ZIXB7Binding62 &&
                  ((kanbanDefinition3W4ZIXB7Binding38 =
                    kanbanDefinition3W4ZIXB7Binding38.slice(
                      0,
                      -1 * kanbanDefinition3W4ZIXB7Binding62 * 2,
                    )),
                  (kanbanDefinition3W4ZIXB7Binding40 =
                    kanbanDefinition3W4ZIXB7Binding40.slice(
                      0,
                      -1 * kanbanDefinition3W4ZIXB7Binding62,
                    )),
                  (kanbanDefinition3W4ZIXB7Binding41 =
                    kanbanDefinition3W4ZIXB7Binding41.slice(
                      0,
                      -1 * kanbanDefinition3W4ZIXB7Binding62,
                    )));
                kanbanDefinition3W4ZIXB7Binding38.push(
                  this.productions_[kanbanDefinition3W4ZIXB7Binding58[1]][0],
                );
                kanbanDefinition3W4ZIXB7Binding40.push(
                  kanbanDefinition3W4ZIXB7Binding60.$,
                );
                kanbanDefinition3W4ZIXB7Binding41.push(
                  kanbanDefinition3W4ZIXB7Binding60._$,
                );
                kanbanDefinition3W4ZIXB7Binding63 =
                  kanbanDefinition3W4ZIXB7Binding42[
                    kanbanDefinition3W4ZIXB7Binding38[
                      kanbanDefinition3W4ZIXB7Binding38.length - 2
                    ]
                  ][
                    kanbanDefinition3W4ZIXB7Binding38[
                      kanbanDefinition3W4ZIXB7Binding38.length - 1
                    ]
                  ];
                kanbanDefinition3W4ZIXB7Binding38.push(
                  kanbanDefinition3W4ZIXB7Binding63,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    kanbanDefinition3W4ZIXB7Binding36.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input37,
          kanbanDefinition3W4ZIXB7Input38,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              kanbanDefinition3W4ZIXB7Input37,
              kanbanDefinition3W4ZIXB7Input38,
            );
          else throw Error(kanbanDefinition3W4ZIXB7Input37);
        }, "parseError"),
        setInput: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input26,
          kanbanDefinition3W4ZIXB7Input27,
        ) {
          return (
            (this.yy = kanbanDefinition3W4ZIXB7Input27 || this.yy || {}),
            (this._input = kanbanDefinition3W4ZIXB7Input26),
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
          var kanbanDefinition3W4ZIXB7Binding116 = this._input[0];
          return (
            (this.yytext += kanbanDefinition3W4ZIXB7Binding116),
            this.yyleng++,
            this.offset++,
            (this.match += kanbanDefinition3W4ZIXB7Binding116),
            (this.matched += kanbanDefinition3W4ZIXB7Binding116),
            kanbanDefinition3W4ZIXB7Binding116.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            kanbanDefinition3W4ZIXB7Binding116
          );
        }, "input"),
        unput: defineFunctionName(function (kanbanDefinition3W4ZIXB7Input25) {
          var kanbanDefinition3W4ZIXB7Binding93 =
              kanbanDefinition3W4ZIXB7Input25.length,
            kanbanDefinition3W4ZIXB7Binding94 =
              kanbanDefinition3W4ZIXB7Input25.split(/(?:\r\n?|\n)/g);
          this._input = kanbanDefinition3W4ZIXB7Input25 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - kanbanDefinition3W4ZIXB7Binding93,
          );
          this.offset -= kanbanDefinition3W4ZIXB7Binding93;
          var kanbanDefinition3W4ZIXB7Binding95 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          kanbanDefinition3W4ZIXB7Binding94.length - 1 &&
            (this.yylineno -= kanbanDefinition3W4ZIXB7Binding94.length - 1);
          var kanbanDefinition3W4ZIXB7Binding96 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: kanbanDefinition3W4ZIXB7Binding94
                ? (kanbanDefinition3W4ZIXB7Binding94.length ===
                  kanbanDefinition3W4ZIXB7Binding95.length
                    ? this.yylloc.first_column
                    : 0) +
                  kanbanDefinition3W4ZIXB7Binding95[
                    kanbanDefinition3W4ZIXB7Binding95.length -
                      kanbanDefinition3W4ZIXB7Binding94.length
                  ].length -
                  kanbanDefinition3W4ZIXB7Binding94[0].length
                : this.yylloc.first_column - kanbanDefinition3W4ZIXB7Binding93,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                kanbanDefinition3W4ZIXB7Binding96[0],
                kanbanDefinition3W4ZIXB7Binding96[0] +
                  this.yyleng -
                  kanbanDefinition3W4ZIXB7Binding93,
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
        less: defineFunctionName(function (kanbanDefinition3W4ZIXB7Input44) {
          this.unput(this.match.slice(kanbanDefinition3W4ZIXB7Input44));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var kanbanDefinition3W4ZIXB7Binding129 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (kanbanDefinition3W4ZIXB7Binding129.length > 20 ? "..." : "") +
            kanbanDefinition3W4ZIXB7Binding129.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var kanbanDefinition3W4ZIXB7Binding126 = this.match;
          return (
            kanbanDefinition3W4ZIXB7Binding126.length < 20 &&
              (kanbanDefinition3W4ZIXB7Binding126 += this._input.substr(
                0,
                20 - kanbanDefinition3W4ZIXB7Binding126.length,
              )),
            (
              kanbanDefinition3W4ZIXB7Binding126.substr(0, 20) +
              (kanbanDefinition3W4ZIXB7Binding126.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var kanbanDefinition3W4ZIXB7Binding130 = this.pastInput(),
            kanbanDefinition3W4ZIXB7Binding131 = Array(
              kanbanDefinition3W4ZIXB7Binding130.length + 1,
            ).join("-");
          return (
            kanbanDefinition3W4ZIXB7Binding130 +
            this.upcomingInput() +
            "\n" +
            kanbanDefinition3W4ZIXB7Binding131 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input13,
          kanbanDefinition3W4ZIXB7Input14,
        ) {
          var kanbanDefinition3W4ZIXB7Binding67,
            kanbanDefinition3W4ZIXB7Binding68,
            kanbanDefinition3W4ZIXB7Binding69;
          if (
            (this.options.backtrack_lexer &&
              ((kanbanDefinition3W4ZIXB7Binding69 = {
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
                (kanbanDefinition3W4ZIXB7Binding69.yylloc.range =
                  this.yylloc.range.slice(0))),
            (kanbanDefinition3W4ZIXB7Binding68 =
              kanbanDefinition3W4ZIXB7Input13[0].match(/(?:\r\n?|\n).*/g)),
            kanbanDefinition3W4ZIXB7Binding68 &&
              (this.yylineno += kanbanDefinition3W4ZIXB7Binding68.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: kanbanDefinition3W4ZIXB7Binding68
                ? kanbanDefinition3W4ZIXB7Binding68[
                    kanbanDefinition3W4ZIXB7Binding68.length - 1
                  ].length -
                  kanbanDefinition3W4ZIXB7Binding68[
                    kanbanDefinition3W4ZIXB7Binding68.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  kanbanDefinition3W4ZIXB7Input13[0].length,
            }),
            (this.yytext += kanbanDefinition3W4ZIXB7Input13[0]),
            (this.match += kanbanDefinition3W4ZIXB7Input13[0]),
            (this.matches = kanbanDefinition3W4ZIXB7Input13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              kanbanDefinition3W4ZIXB7Input13[0].length,
            )),
            (this.matched += kanbanDefinition3W4ZIXB7Input13[0]),
            (kanbanDefinition3W4ZIXB7Binding67 = this.performAction.call(
              this,
              this.yy,
              this,
              kanbanDefinition3W4ZIXB7Input14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            kanbanDefinition3W4ZIXB7Binding67)
          )
            return kanbanDefinition3W4ZIXB7Binding67;
          if (this._backtrack) {
            for (var kanbanDefinition3W4ZIXB7Binding70 in kanbanDefinition3W4ZIXB7Binding69)
              this[kanbanDefinition3W4ZIXB7Binding70] =
                kanbanDefinition3W4ZIXB7Binding69[
                  kanbanDefinition3W4ZIXB7Binding70
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var kanbanDefinition3W4ZIXB7Binding87,
            kanbanDefinition3W4ZIXB7Binding88,
            kanbanDefinition3W4ZIXB7Binding89,
            kanbanDefinition3W4ZIXB7Binding90;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var kanbanDefinition3W4ZIXB7Binding91 = this._currentRules(),
              kanbanDefinition3W4ZIXB7Binding92 = 0;
            kanbanDefinition3W4ZIXB7Binding92 <
            kanbanDefinition3W4ZIXB7Binding91.length;
            kanbanDefinition3W4ZIXB7Binding92++
          )
            if (
              ((kanbanDefinition3W4ZIXB7Binding89 = this._input.match(
                this.rules[
                  kanbanDefinition3W4ZIXB7Binding91[
                    kanbanDefinition3W4ZIXB7Binding92
                  ]
                ],
              )),
              kanbanDefinition3W4ZIXB7Binding89 &&
                (!kanbanDefinition3W4ZIXB7Binding88 ||
                  kanbanDefinition3W4ZIXB7Binding89[0].length >
                    kanbanDefinition3W4ZIXB7Binding88[0].length))
            ) {
              if (
                ((kanbanDefinition3W4ZIXB7Binding88 =
                  kanbanDefinition3W4ZIXB7Binding89),
                (kanbanDefinition3W4ZIXB7Binding90 =
                  kanbanDefinition3W4ZIXB7Binding92),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((kanbanDefinition3W4ZIXB7Binding87 = this.test_match(
                    kanbanDefinition3W4ZIXB7Binding89,
                    kanbanDefinition3W4ZIXB7Binding91[
                      kanbanDefinition3W4ZIXB7Binding92
                    ],
                  )),
                  kanbanDefinition3W4ZIXB7Binding87 !== false)
                )
                  return kanbanDefinition3W4ZIXB7Binding87;
                if (this._backtrack) {
                  kanbanDefinition3W4ZIXB7Binding88 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return kanbanDefinition3W4ZIXB7Binding88
            ? ((kanbanDefinition3W4ZIXB7Binding87 = this.test_match(
                kanbanDefinition3W4ZIXB7Binding88,
                kanbanDefinition3W4ZIXB7Binding91[
                  kanbanDefinition3W4ZIXB7Binding90
                ],
              )),
              kanbanDefinition3W4ZIXB7Binding87 === false
                ? false
                : kanbanDefinition3W4ZIXB7Binding87)
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
        begin: defineFunctionName(function (kanbanDefinition3W4ZIXB7Input45) {
          this.conditionStack.push(kanbanDefinition3W4ZIXB7Input45);
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
          kanbanDefinition3W4ZIXB7Input33,
        ) {
          return (
            (kanbanDefinition3W4ZIXB7Input33 =
              this.conditionStack.length -
              1 -
              Math.abs(kanbanDefinition3W4ZIXB7Input33 || 0)),
            kanbanDefinition3W4ZIXB7Input33 >= 0
              ? this.conditionStack[kanbanDefinition3W4ZIXB7Input33]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input46,
        ) {
          this.begin(kanbanDefinition3W4ZIXB7Input46);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          kanbanDefinition3W4ZIXB7Input2,
          kanbanDefinition3W4ZIXB7Input3,
          kanbanDefinition3W4ZIXB7Input4,
          kanbanDefinition3W4ZIXB7Input5,
        ) {
          switch (kanbanDefinition3W4ZIXB7Input4) {
            case 0:
              return (
                this.pushState("shapeData"),
                (kanbanDefinition3W4ZIXB7Input3.yytext = ""),
                24
              );
            case 1:
              return (this.pushState("shapeDataStr"), 24);
            case 2:
              return (this.popState(), 24);
            case 3:
              return (
                (kanbanDefinition3W4ZIXB7Input3.yytext =
                  kanbanDefinition3W4ZIXB7Input3.yytext.replace(
                    /\n\s*/g,
                    "<br/>",
                  )),
                24
              );
            case 4:
              return 24;
            case 5:
              this.popState();
              break;
            case 6:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace(
                    "Found comment",
                    kanbanDefinition3W4ZIXB7Input3.yytext,
                  ),
                6
              );
            case 7:
              return 8;
            case 8:
              this.begin("CLASS");
              break;
            case 9:
              return (this.popState(), 17);
            case 10:
              this.popState();
              break;
            case 11:
              kanbanDefinition3W4ZIXB7Input2.getLogger().trace("Begin icon");
              this.begin("ICON");
              break;
            case 12:
              return (
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("SPACELINE"),
                6
              );
            case 13:
              return 7;
            case 14:
              return 16;
            case 15:
              kanbanDefinition3W4ZIXB7Input2.getLogger().trace("end icon");
              this.popState();
              break;
            case 16:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace("Exploding node"),
                this.begin("NODE"),
                20
              );
            case 17:
              return (
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("Cloud"),
                this.begin("NODE"),
                20
              );
            case 18:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace("Explosion Bang"),
                this.begin("NODE"),
                20
              );
            case 19:
              return (
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("Cloud Bang"),
                this.begin("NODE"),
                20
              );
            case 20:
              return (this.begin("NODE"), 20);
            case 21:
              return (this.begin("NODE"), 20);
            case 22:
              return (this.begin("NODE"), 20);
            case 23:
              return (this.begin("NODE"), 20);
            case 24:
              return 13;
            case 25:
              return 23;
            case 26:
              return 11;
            case 27:
              this.begin("NSTR2");
              break;
            case 28:
              return "NODE_DESCR";
            case 29:
              this.popState();
              break;
            case 30:
              kanbanDefinition3W4ZIXB7Input2.getLogger().trace("Starting NSTR");
              this.begin("NSTR");
              break;
            case 31:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace("description:", kanbanDefinition3W4ZIXB7Input3.yytext),
                "NODE_DESCR"
              );
            case 32:
              this.popState();
              break;
            case 33:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end ))"),
                "NODE_DEND"
              );
            case 34:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end )"),
                "NODE_DEND"
              );
            case 35:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace("node end ...", kanbanDefinition3W4ZIXB7Input3.yytext),
                "NODE_DEND"
              );
            case 36:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 37:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end (-"),
                "NODE_DEND"
              );
            case 38:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end (-"),
                "NODE_DEND"
              );
            case 39:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 40:
              return (
                this.popState(),
                kanbanDefinition3W4ZIXB7Input2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 41:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace(
                    "Long description:",
                    kanbanDefinition3W4ZIXB7Input3.yytext,
                  ),
                21
              );
            case 42:
              return (
                kanbanDefinition3W4ZIXB7Input2
                  .getLogger()
                  .trace(
                    "Long description:",
                    kanbanDefinition3W4ZIXB7Input3.yytext,
                  ),
                21
              );
          }
        }, "anonymous"),
        rules: [
          /^(?:@\{)/i,
          /^(?:["])/i,
          /^(?:["])/i,
          /^(?:[^\"]+)/i,
          /^(?:[^}^"]+)/i,
          /^(?:\})/i,
          /^(?:\s*%%.*)/i,
          /^(?:kanban\b)/i,
          /^(?::::)/i,
          /^(?:.+)/i,
          /^(?:\n)/i,
          /^(?:::icon\()/i,
          /^(?:[\s]+[\n])/i,
          /^(?:[\n]+)/i,
          /^(?:[^\)]+)/i,
          /^(?:\))/i,
          /^(?:-\))/i,
          /^(?:\(-)/i,
          /^(?:\)\))/i,
          /^(?:\))/i,
          /^(?:\(\()/i,
          /^(?:\{\{)/i,
          /^(?:\()/i,
          /^(?:\[)/i,
          /^(?:[\s]+)/i,
          /^(?:[^\(\[\n\)\{\}@]+)/i,
          /^(?:$)/i,
          /^(?:["][`])/i,
          /^(?:[^`"]+)/i,
          /^(?:[`]["])/i,
          /^(?:["])/i,
          /^(?:[^"]+)/i,
          /^(?:["])/i,
          /^(?:[\)]\))/i,
          /^(?:[\)])/i,
          /^(?:[\]])/i,
          /^(?:\}\})/i,
          /^(?:\(-)/i,
          /^(?:-\))/i,
          /^(?:\(\()/i,
          /^(?:\()/i,
          /^(?:[^\)\]\(\}]+)/i,
          /^(?:.+(?!\(\())/i,
        ],
        conditions: {
          shapeDataEndBracket: {
            rules: [],
            inclusive: false,
          },
          shapeDataStr: {
            rules: [2, 3],
            inclusive: false,
          },
          shapeData: {
            rules: [1, 4, 5],
            inclusive: false,
          },
          CLASS: {
            rules: [9, 10],
            inclusive: false,
          },
          ICON: {
            rules: [14, 15],
            inclusive: false,
          },
          NSTR2: {
            rules: [28, 29],
            inclusive: false,
          },
          NSTR: {
            rules: [31, 32],
            inclusive: false,
          },
          NODE: {
            rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function kanbanDefinition3W4ZIXB7Helper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(kanbanDefinition3W4ZIXB7Helper1, "Parser"),
      (kanbanDefinition3W4ZIXB7Helper1.prototype =
        kanbanDefinition3W4ZIXB7Binding36),
      (kanbanDefinition3W4ZIXB7Binding36.Parser =
        kanbanDefinition3W4ZIXB7Helper1),
      new kanbanDefinition3W4ZIXB7Helper1()
    );
  })();
  kanbanDefinition3W4ZIXB7Binding1.parser = kanbanDefinition3W4ZIXB7Binding1;
  kanbanDefinition3W4ZIXB7Binding2 = kanbanDefinition3W4ZIXB7Binding1;
  kanbanDefinition3W4ZIXB7Binding3 = [];
  kanbanDefinition3W4ZIXB7Binding4 = [];
  kanbanDefinition3W4ZIXB7Binding5 = 0;
  kanbanDefinition3W4ZIXB7Binding6 = {};
  kanbanDefinition3W4ZIXB7Binding7 = defineFunctionName(() => {
    kanbanDefinition3W4ZIXB7Binding3 = [];
    kanbanDefinition3W4ZIXB7Binding4 = [];
    kanbanDefinition3W4ZIXB7Binding5 = 0;
    kanbanDefinition3W4ZIXB7Binding6 = {};
  }, "clear");
  kanbanDefinition3W4ZIXB7Binding8 = defineFunctionName(
    (kanbanDefinition3W4ZIXB7Input32) => {
      if (kanbanDefinition3W4ZIXB7Binding3.length === 0) return null;
      let kanbanDefinition3W4ZIXB7Binding123 =
          kanbanDefinition3W4ZIXB7Binding3[0].level,
        kanbanDefinition3W4ZIXB7Binding124 = null;
      for (
        let kanbanDefinition3W4ZIXB7Binding132 =
          kanbanDefinition3W4ZIXB7Binding3.length - 1;
        kanbanDefinition3W4ZIXB7Binding132 >= 0;
        kanbanDefinition3W4ZIXB7Binding132--
      )
        if (
          (kanbanDefinition3W4ZIXB7Binding3[kanbanDefinition3W4ZIXB7Binding132]
            .level === kanbanDefinition3W4ZIXB7Binding123 &&
            !kanbanDefinition3W4ZIXB7Binding124 &&
            (kanbanDefinition3W4ZIXB7Binding124 =
              kanbanDefinition3W4ZIXB7Binding3[
                kanbanDefinition3W4ZIXB7Binding132
              ]),
          kanbanDefinition3W4ZIXB7Binding3[kanbanDefinition3W4ZIXB7Binding132]
            .level < kanbanDefinition3W4ZIXB7Binding123)
        )
          throw Error(
            'Items without section detected, found section ("' +
              kanbanDefinition3W4ZIXB7Binding3[
                kanbanDefinition3W4ZIXB7Binding132
              ].label +
              '")',
          );
      return kanbanDefinition3W4ZIXB7Input32 ===
        kanbanDefinition3W4ZIXB7Binding124?.level
        ? null
        : kanbanDefinition3W4ZIXB7Binding124;
    },
    "getSection",
  );
  kanbanDefinition3W4ZIXB7Binding9 = defineFunctionName(function () {
    return kanbanDefinition3W4ZIXB7Binding4;
  }, "getSections");
  kanbanDefinition3W4ZIXB7Binding10 = defineFunctionName(function () {
    let kanbanDefinition3W4ZIXB7Binding99 = [],
      kanbanDefinition3W4ZIXB7Binding100 = [],
      kanbanDefinition3W4ZIXB7Binding101 = kanbanDefinition3W4ZIXB7Binding9(),
      kanbanDefinition3W4ZIXB7Binding102 = b();
    for (let kanbanDefinition3W4ZIXB7Binding103 of kanbanDefinition3W4ZIXB7Binding101) {
      let kanbanDefinition3W4ZIXB7Binding105 = {
        id: kanbanDefinition3W4ZIXB7Binding103.id,
        label: L(
          kanbanDefinition3W4ZIXB7Binding103.label ?? "",
          kanbanDefinition3W4ZIXB7Binding102,
        ),
        isGroup: true,
        ticket: kanbanDefinition3W4ZIXB7Binding103.ticket,
        shape: "kanbanSection",
        level: kanbanDefinition3W4ZIXB7Binding103.level,
        look: kanbanDefinition3W4ZIXB7Binding102.look,
      };
      kanbanDefinition3W4ZIXB7Binding100.push(
        kanbanDefinition3W4ZIXB7Binding105,
      );
      let kanbanDefinition3W4ZIXB7Binding106 =
        kanbanDefinition3W4ZIXB7Binding3.filter(
          (item) => item.parentId === kanbanDefinition3W4ZIXB7Binding103.id,
        );
      for (let kanbanDefinition3W4ZIXB7Binding117 of kanbanDefinition3W4ZIXB7Binding106) {
        let kanbanDefinition3W4ZIXB7Binding118 = {
          id: kanbanDefinition3W4ZIXB7Binding117.id,
          parentId: kanbanDefinition3W4ZIXB7Binding103.id,
          label: L(
            kanbanDefinition3W4ZIXB7Binding117.label ?? "",
            kanbanDefinition3W4ZIXB7Binding102,
          ),
          isGroup: false,
          ticket: kanbanDefinition3W4ZIXB7Binding117?.ticket,
          priority: kanbanDefinition3W4ZIXB7Binding117?.priority,
          assigned: kanbanDefinition3W4ZIXB7Binding117?.assigned,
          icon: kanbanDefinition3W4ZIXB7Binding117?.icon,
          shape: "kanbanItem",
          level: kanbanDefinition3W4ZIXB7Binding117.level,
          rx: 5,
          ry: 5,
          cssStyles: ["text-align: left"],
        };
        kanbanDefinition3W4ZIXB7Binding100.push(
          kanbanDefinition3W4ZIXB7Binding118,
        );
      }
    }
    return {
      nodes: kanbanDefinition3W4ZIXB7Binding100,
      edges: kanbanDefinition3W4ZIXB7Binding99,
      other: {},
      config: b(),
    };
  }, "getData");
  kanbanDefinition3W4ZIXB7Binding11 = defineFunctionName(
    (
      kanbanDefinition3W4ZIXB7Input20,
      kanbanDefinition3W4ZIXB7Input21,
      kanbanDefinition3W4ZIXB7Input22,
      kanbanDefinition3W4ZIXB7Input23,
      kanbanDefinition3W4ZIXB7Input24,
    ) => {
      let kanbanDefinition3W4ZIXB7Binding83 = b(),
        kanbanDefinition3W4ZIXB7Binding84 =
          kanbanDefinition3W4ZIXB7Binding83.mindmap?.padding ??
          chunkABZYJK2DD.mindmap.padding;
      switch (kanbanDefinition3W4ZIXB7Input23) {
        case kanbanDefinition3W4ZIXB7Binding12.ROUNDED_RECT:
        case kanbanDefinition3W4ZIXB7Binding12.RECT:
        case kanbanDefinition3W4ZIXB7Binding12.HEXAGON:
          kanbanDefinition3W4ZIXB7Binding84 *= 2;
      }
      let kanbanDefinition3W4ZIXB7Binding85 = {
        id:
          L(
            kanbanDefinition3W4ZIXB7Input21,
            kanbanDefinition3W4ZIXB7Binding83,
          ) || "kbn" + kanbanDefinition3W4ZIXB7Binding5++,
        level: kanbanDefinition3W4ZIXB7Input20,
        label: L(
          kanbanDefinition3W4ZIXB7Input22,
          kanbanDefinition3W4ZIXB7Binding83,
        ),
        width:
          kanbanDefinition3W4ZIXB7Binding83.mindmap?.maxNodeWidth ??
          chunkABZYJK2DD.mindmap.maxNodeWidth,
        padding: kanbanDefinition3W4ZIXB7Binding84,
        isGroup: false,
      };
      if (kanbanDefinition3W4ZIXB7Input24 !== undefined) {
        let kanbanDefinition3W4ZIXB7Binding114;
        kanbanDefinition3W4ZIXB7Binding114 =
          kanbanDefinition3W4ZIXB7Input24.includes("\n")
            ? kanbanDefinition3W4ZIXB7Input24 + "\n"
            : "{\n" + kanbanDefinition3W4ZIXB7Input24 + "\n}";
        let kanbanDefinition3W4ZIXB7Binding115 = r(
          kanbanDefinition3W4ZIXB7Binding114,
          {
            schema: chunkMI3HLSF2T,
          },
        );
        if (
          kanbanDefinition3W4ZIXB7Binding115.shape &&
          (kanbanDefinition3W4ZIXB7Binding115.shape !==
            kanbanDefinition3W4ZIXB7Binding115.shape.toLowerCase() ||
            kanbanDefinition3W4ZIXB7Binding115.shape.includes("_"))
        )
          throw Error(
            `No such shape: ${kanbanDefinition3W4ZIXB7Binding115.shape}. Shape names should be lowercase.`,
          );
        kanbanDefinition3W4ZIXB7Binding115?.shape &&
          kanbanDefinition3W4ZIXB7Binding115.shape === "kanbanItem" &&
          (kanbanDefinition3W4ZIXB7Binding85.shape =
            kanbanDefinition3W4ZIXB7Binding115?.shape);
        kanbanDefinition3W4ZIXB7Binding115?.label &&
          (kanbanDefinition3W4ZIXB7Binding85.label =
            kanbanDefinition3W4ZIXB7Binding115?.label);
        kanbanDefinition3W4ZIXB7Binding115?.icon &&
          (kanbanDefinition3W4ZIXB7Binding85.icon =
            kanbanDefinition3W4ZIXB7Binding115?.icon.toString());
        kanbanDefinition3W4ZIXB7Binding115?.assigned &&
          (kanbanDefinition3W4ZIXB7Binding85.assigned =
            kanbanDefinition3W4ZIXB7Binding115?.assigned.toString());
        kanbanDefinition3W4ZIXB7Binding115?.ticket &&
          (kanbanDefinition3W4ZIXB7Binding85.ticket =
            kanbanDefinition3W4ZIXB7Binding115?.ticket.toString());
        kanbanDefinition3W4ZIXB7Binding115?.priority &&
          (kanbanDefinition3W4ZIXB7Binding85.priority =
            kanbanDefinition3W4ZIXB7Binding115?.priority);
      }
      let kanbanDefinition3W4ZIXB7Binding86 = kanbanDefinition3W4ZIXB7Binding8(
        kanbanDefinition3W4ZIXB7Input20,
      );
      kanbanDefinition3W4ZIXB7Binding86
        ? (kanbanDefinition3W4ZIXB7Binding85.parentId =
            kanbanDefinition3W4ZIXB7Binding86.id ||
            "kbn" + kanbanDefinition3W4ZIXB7Binding5++)
        : kanbanDefinition3W4ZIXB7Binding4.push(
            kanbanDefinition3W4ZIXB7Binding85,
          );
      kanbanDefinition3W4ZIXB7Binding3.push(kanbanDefinition3W4ZIXB7Binding85);
    },
    "addNode",
  );
  kanbanDefinition3W4ZIXB7Binding12 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  };
  kanbanDefinition3W4ZIXB7Binding13 = {
    clear: kanbanDefinition3W4ZIXB7Binding7,
    addNode: kanbanDefinition3W4ZIXB7Binding11,
    getSections: kanbanDefinition3W4ZIXB7Binding9,
    getData: kanbanDefinition3W4ZIXB7Binding10,
    nodeType: kanbanDefinition3W4ZIXB7Binding12,
    getType: defineFunctionName(
      (kanbanDefinition3W4ZIXB7Input30, kanbanDefinition3W4ZIXB7Input31) => {
        switch (
          (logger.debug(
            "In get type",
            kanbanDefinition3W4ZIXB7Input30,
            kanbanDefinition3W4ZIXB7Input31,
          ),
          kanbanDefinition3W4ZIXB7Input30)
        ) {
          case "[":
            return kanbanDefinition3W4ZIXB7Binding12.RECT;
          case "(":
            return kanbanDefinition3W4ZIXB7Input31 === ")"
              ? kanbanDefinition3W4ZIXB7Binding12.ROUNDED_RECT
              : kanbanDefinition3W4ZIXB7Binding12.CLOUD;
          case "((":
            return kanbanDefinition3W4ZIXB7Binding12.CIRCLE;
          case ")":
            return kanbanDefinition3W4ZIXB7Binding12.CLOUD;
          case "))":
            return kanbanDefinition3W4ZIXB7Binding12.BANG;
          case "{{":
            return kanbanDefinition3W4ZIXB7Binding12.HEXAGON;
          default:
            return kanbanDefinition3W4ZIXB7Binding12.DEFAULT;
        }
      },
      "getType",
    ),
    setElementForId: defineFunctionName(
      (kanbanDefinition3W4ZIXB7Input49, kanbanDefinition3W4ZIXB7Input50) => {
        kanbanDefinition3W4ZIXB7Binding6[kanbanDefinition3W4ZIXB7Input49] =
          kanbanDefinition3W4ZIXB7Input50;
      },
      "setElementForId",
    ),
    decorateNode: defineFunctionName((kanbanDefinition3W4ZIXB7Input34) => {
      if (!kanbanDefinition3W4ZIXB7Input34) return;
      let kanbanDefinition3W4ZIXB7Binding133 = b(),
        kanbanDefinition3W4ZIXB7Binding134 =
          kanbanDefinition3W4ZIXB7Binding3[
            kanbanDefinition3W4ZIXB7Binding3.length - 1
          ];
      kanbanDefinition3W4ZIXB7Input34.icon &&
        (kanbanDefinition3W4ZIXB7Binding134.icon = L(
          kanbanDefinition3W4ZIXB7Input34.icon,
          kanbanDefinition3W4ZIXB7Binding133,
        ));
      kanbanDefinition3W4ZIXB7Input34.class &&
        (kanbanDefinition3W4ZIXB7Binding134.cssClasses = L(
          kanbanDefinition3W4ZIXB7Input34.class,
          kanbanDefinition3W4ZIXB7Binding133,
        ));
    }, "decorateNode"),
    type2Str: defineFunctionName((kanbanDefinition3W4ZIXB7Input29) => {
      switch (kanbanDefinition3W4ZIXB7Input29) {
        case kanbanDefinition3W4ZIXB7Binding12.DEFAULT:
          return "no-border";
        case kanbanDefinition3W4ZIXB7Binding12.RECT:
          return "rect";
        case kanbanDefinition3W4ZIXB7Binding12.ROUNDED_RECT:
          return "rounded-rect";
        case kanbanDefinition3W4ZIXB7Binding12.CIRCLE:
          return "circle";
        case kanbanDefinition3W4ZIXB7Binding12.CLOUD:
          return "cloud";
        case kanbanDefinition3W4ZIXB7Binding12.BANG:
          return "bang";
        case kanbanDefinition3W4ZIXB7Binding12.HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }, "type2Str"),
    getLogger: defineFunctionName(() => logger, "getLogger"),
    getElementById: defineFunctionName(
      (kanbanDefinition3W4ZIXB7Input51) =>
        kanbanDefinition3W4ZIXB7Binding6[kanbanDefinition3W4ZIXB7Input51],
      "getElementById",
    ),
  };
  kanbanDefinition3W4ZIXB7Binding14 = {
    draw: defineFunctionName(
      async (
        kanbanDefinition3W4ZIXB7Input15,
        kanbanDefinition3W4ZIXB7Input16,
        kanbanDefinition3W4ZIXB7Input17,
        kanbanDefinition3W4ZIXB7Input18,
      ) => {
        logger.debug(
          "Rendering kanban diagram\n" + kanbanDefinition3W4ZIXB7Input15,
        );
        let kanbanDefinition3W4ZIXB7Binding71 =
            kanbanDefinition3W4ZIXB7Input18.db.getData(),
          kanbanDefinition3W4ZIXB7Binding72 = b();
        kanbanDefinition3W4ZIXB7Binding72.htmlLabels = false;
        let kanbanDefinition3W4ZIXB7Binding73 = n(
            kanbanDefinition3W4ZIXB7Input16,
          ),
          kanbanDefinition3W4ZIXB7Binding74 =
            kanbanDefinition3W4ZIXB7Binding73.append("g");
        kanbanDefinition3W4ZIXB7Binding74.attr("class", "sections");
        let kanbanDefinition3W4ZIXB7Binding75 =
          kanbanDefinition3W4ZIXB7Binding73.append("g");
        kanbanDefinition3W4ZIXB7Binding75.attr("class", "items");
        let kanbanDefinition3W4ZIXB7Binding76 =
            kanbanDefinition3W4ZIXB7Binding71.nodes.filter(
              (item) => item.isGroup,
            ),
          kanbanDefinition3W4ZIXB7Binding77 = 0,
          kanbanDefinition3W4ZIXB7Binding78 = [],
          kanbanDefinition3W4ZIXB7Binding79 = 25;
        for (let kanbanDefinition3W4ZIXB7Binding119 of kanbanDefinition3W4ZIXB7Binding76) {
          let kanbanDefinition3W4ZIXB7Binding120 =
            kanbanDefinition3W4ZIXB7Binding72?.kanban?.sectionWidth || 200;
          kanbanDefinition3W4ZIXB7Binding77 += 1;
          kanbanDefinition3W4ZIXB7Binding119.x =
            kanbanDefinition3W4ZIXB7Binding120 *
              kanbanDefinition3W4ZIXB7Binding77 +
            ((kanbanDefinition3W4ZIXB7Binding77 - 1) * 10) / 2;
          kanbanDefinition3W4ZIXB7Binding119.width =
            kanbanDefinition3W4ZIXB7Binding120;
          kanbanDefinition3W4ZIXB7Binding119.y = 0;
          kanbanDefinition3W4ZIXB7Binding119.height =
            kanbanDefinition3W4ZIXB7Binding120 * 3;
          kanbanDefinition3W4ZIXB7Binding119.rx = 5;
          kanbanDefinition3W4ZIXB7Binding119.ry = 5;
          kanbanDefinition3W4ZIXB7Binding119.cssClasses =
            kanbanDefinition3W4ZIXB7Binding119.cssClasses +
            " section-" +
            kanbanDefinition3W4ZIXB7Binding77;
          let kanbanDefinition3W4ZIXB7Binding121 = await chunkJZLCHNYAD(
            kanbanDefinition3W4ZIXB7Binding74,
            kanbanDefinition3W4ZIXB7Binding119,
          );
          kanbanDefinition3W4ZIXB7Binding79 = Math.max(
            kanbanDefinition3W4ZIXB7Binding79,
            kanbanDefinition3W4ZIXB7Binding121?.labelBBox?.height,
          );
          kanbanDefinition3W4ZIXB7Binding78.push(
            kanbanDefinition3W4ZIXB7Binding121,
          );
        }
        let kanbanDefinition3W4ZIXB7Binding80 = 0;
        for (let kanbanDefinition3W4ZIXB7Binding104 of kanbanDefinition3W4ZIXB7Binding76) {
          let kanbanDefinition3W4ZIXB7Binding107 =
            kanbanDefinition3W4ZIXB7Binding78[
              kanbanDefinition3W4ZIXB7Binding80
            ];
          kanbanDefinition3W4ZIXB7Binding80 += 1;
          let kanbanDefinition3W4ZIXB7Binding108 =
              kanbanDefinition3W4ZIXB7Binding72?.kanban?.sectionWidth || 200,
            kanbanDefinition3W4ZIXB7Binding109 =
              (-kanbanDefinition3W4ZIXB7Binding108 * 3) / 2 +
              kanbanDefinition3W4ZIXB7Binding79,
            kanbanDefinition3W4ZIXB7Binding110 =
              kanbanDefinition3W4ZIXB7Binding109,
            kanbanDefinition3W4ZIXB7Binding111 =
              kanbanDefinition3W4ZIXB7Binding71.nodes.filter(
                (item) =>
                  item.parentId === kanbanDefinition3W4ZIXB7Binding104.id,
              );
          for (let kanbanDefinition3W4ZIXB7Binding122 of kanbanDefinition3W4ZIXB7Binding111) {
            if (kanbanDefinition3W4ZIXB7Binding122.isGroup)
              throw Error(
                "Groups within groups are not allowed in Kanban diagrams",
              );
            kanbanDefinition3W4ZIXB7Binding122.x =
              kanbanDefinition3W4ZIXB7Binding104.x;
            kanbanDefinition3W4ZIXB7Binding122.width =
              kanbanDefinition3W4ZIXB7Binding108 - 15;
            let kanbanDefinition3W4ZIXB7Binding125 = (
              await chunkJZLCHNYAO(
                kanbanDefinition3W4ZIXB7Binding75,
                kanbanDefinition3W4ZIXB7Binding122,
                {
                  config: kanbanDefinition3W4ZIXB7Binding72,
                },
              )
            )
              .node()
              .getBBox();
            kanbanDefinition3W4ZIXB7Binding122.y =
              kanbanDefinition3W4ZIXB7Binding110 +
              kanbanDefinition3W4ZIXB7Binding125.height / 2;
            await chunkJZLCHNYAL(kanbanDefinition3W4ZIXB7Binding122);
            kanbanDefinition3W4ZIXB7Binding110 =
              kanbanDefinition3W4ZIXB7Binding122.y +
              kanbanDefinition3W4ZIXB7Binding125.height / 2 +
              5;
          }
          let kanbanDefinition3W4ZIXB7Binding112 =
              kanbanDefinition3W4ZIXB7Binding107.cluster.select("rect"),
            kanbanDefinition3W4ZIXB7Binding113 =
              Math.max(
                kanbanDefinition3W4ZIXB7Binding110 -
                  kanbanDefinition3W4ZIXB7Binding109 +
                  30,
                50,
              ) +
              (kanbanDefinition3W4ZIXB7Binding79 - 25);
          kanbanDefinition3W4ZIXB7Binding112.attr(
            "height",
            kanbanDefinition3W4ZIXB7Binding113,
          );
        }
        K(
          undefined,
          kanbanDefinition3W4ZIXB7Binding73,
          kanbanDefinition3W4ZIXB7Binding72.mindmap?.padding ??
            chunkABZYJK2DD.kanban.padding,
          kanbanDefinition3W4ZIXB7Binding72.mindmap?.useMaxWidth ??
            chunkABZYJK2DD.kanban.useMaxWidth,
        );
      },
      "draw",
    ),
  };
  kanbanDefinition3W4ZIXB7Binding15 = defineFunctionName(
    (kanbanDefinition3W4ZIXB7Input19) => {
      let kanbanDefinition3W4ZIXB7Binding81 = "";
      for (
        let kanbanDefinition3W4ZIXB7Binding128 = 0;
        kanbanDefinition3W4ZIXB7Binding128 <
        kanbanDefinition3W4ZIXB7Input19.THEME_COLOR_LIMIT;
        kanbanDefinition3W4ZIXB7Binding128++
      ) {
        kanbanDefinition3W4ZIXB7Input19[
          "lineColor" + kanbanDefinition3W4ZIXB7Binding128
        ] =
          kanbanDefinition3W4ZIXB7Input19[
            "lineColor" + kanbanDefinition3W4ZIXB7Binding128
          ] ||
          kanbanDefinition3W4ZIXB7Input19[
            "cScaleInv" + kanbanDefinition3W4ZIXB7Binding128
          ];
        p(
          kanbanDefinition3W4ZIXB7Input19[
            "lineColor" + kanbanDefinition3W4ZIXB7Binding128
          ],
        )
          ? (kanbanDefinition3W4ZIXB7Input19[
              "lineColor" + kanbanDefinition3W4ZIXB7Binding128
            ] = d(
              kanbanDefinition3W4ZIXB7Input19[
                "lineColor" + kanbanDefinition3W4ZIXB7Binding128
              ],
              20,
            ))
          : (kanbanDefinition3W4ZIXB7Input19[
              "lineColor" + kanbanDefinition3W4ZIXB7Binding128
            ] = c(
              kanbanDefinition3W4ZIXB7Input19[
                "lineColor" + kanbanDefinition3W4ZIXB7Binding128
              ],
              20,
            ));
      }
      let kanbanDefinition3W4ZIXB7Binding82 = defineFunctionName(
        (kanbanDefinition3W4ZIXB7Input47, kanbanDefinition3W4ZIXB7Input48) =>
          kanbanDefinition3W4ZIXB7Input19.darkMode
            ? c(
                kanbanDefinition3W4ZIXB7Input47,
                kanbanDefinition3W4ZIXB7Input48,
              )
            : d(
                kanbanDefinition3W4ZIXB7Input47,
                kanbanDefinition3W4ZIXB7Input48,
              ),
        "adjuster",
      );
      for (
        let kanbanDefinition3W4ZIXB7Binding97 = 0;
        kanbanDefinition3W4ZIXB7Binding97 <
        kanbanDefinition3W4ZIXB7Input19.THEME_COLOR_LIMIT;
        kanbanDefinition3W4ZIXB7Binding97++
      ) {
        let kanbanDefinition3W4ZIXB7Binding98 =
          "" + (17 - 3 * kanbanDefinition3W4ZIXB7Binding97);
        kanbanDefinition3W4ZIXB7Binding81 += `
    .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} rect, .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} path, .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} circle, .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} polygon, .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} path  {
      fill: ${kanbanDefinition3W4ZIXB7Binding82(kanbanDefinition3W4ZIXB7Input19["cScale" + kanbanDefinition3W4ZIXB7Binding97], 10)};
      stroke: ${kanbanDefinition3W4ZIXB7Binding82(kanbanDefinition3W4ZIXB7Input19["cScale" + kanbanDefinition3W4ZIXB7Binding97], 10)};

    }
    .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} text {
     fill: ${kanbanDefinition3W4ZIXB7Input19["cScaleLabel" + kanbanDefinition3W4ZIXB7Binding97]};
    }
    .node-icon-${kanbanDefinition3W4ZIXB7Binding97 - 1} {
      font-size: 40px;
      color: ${kanbanDefinition3W4ZIXB7Input19["cScaleLabel" + kanbanDefinition3W4ZIXB7Binding97]};
    }
    .section-edge-${kanbanDefinition3W4ZIXB7Binding97 - 1}{
      stroke: ${kanbanDefinition3W4ZIXB7Input19["cScale" + kanbanDefinition3W4ZIXB7Binding97]};
    }
    .edge-depth-${kanbanDefinition3W4ZIXB7Binding97 - 1}{
      stroke-width: ${kanbanDefinition3W4ZIXB7Binding98};
    }
    .section-${kanbanDefinition3W4ZIXB7Binding97 - 1} line {
      stroke: ${kanbanDefinition3W4ZIXB7Input19["cScaleInv" + kanbanDefinition3W4ZIXB7Binding97]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${kanbanDefinition3W4ZIXB7Input19.background};
    stroke: ${kanbanDefinition3W4ZIXB7Input19.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${kanbanDefinition3W4ZIXB7Input19.background};
    stroke: ${kanbanDefinition3W4ZIXB7Input19.nodeBorder};
    text-decoration: underline;
  }
    `;
      }
      return kanbanDefinition3W4ZIXB7Binding81;
    },
    "genSections",
  );
  KanbanDefinition3W4ZIXB7 = {
    db: kanbanDefinition3W4ZIXB7Binding13,
    renderer: kanbanDefinition3W4ZIXB7Binding14,
    parser: kanbanDefinition3W4ZIXB7Binding2,
    styles: defineFunctionName(
      (kanbanDefinition3W4ZIXB7Input28) => `
  .edge {
    stroke-width: 3;
  }
  ${kanbanDefinition3W4ZIXB7Binding15(kanbanDefinition3W4ZIXB7Input28)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${kanbanDefinition3W4ZIXB7Input28.git0};
  }
  .section-root text {
    fill: ${kanbanDefinition3W4ZIXB7Input28.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${kanbanDefinition3W4ZIXB7Input28.textColor};
    fill: ${kanbanDefinition3W4ZIXB7Input28.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${chunkFMBD7UC4T()}
`,
      "getStyles",
    ),
  };
})();
export { KanbanDefinition3W4ZIXB7 as diagram };
