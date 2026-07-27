// Restored from ref/webview/assets/kanban-definition-6JOO6SKY-DD6CV1zR.js
// Mermaid kanban diagram definition (alt: db + renderer + jison parser).
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
import { c, d, p, t } from "../../vendor/khroma";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A,
  b,
  d as chunkICPOFSXXD,
  q,
  R,
} from "../../diagrams/mermaid-config-alt";
import { selectSvgElement as n, initSelectSvgElementChunk as chunk426QAEUCT } from "../../diagrams/select-svg-element-alt";
import { chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA } from "./mermaid-create-text-alt";
import { initGetIconStylesChunk as chunkFMBD7UC4N, getIconStyles as chunkFMBD7UC4T } from "../../diagrams/get-icon-styles";
import { initSubGraphTitleMarginsAlt } from "../../diagrams/subgraph-title-margins-alt";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import {
  chunk5FUZZQ4RI,
  chunk5FUZZQ4RD,
  chunk5FUZZQ4RL,
  chunk5FUZZQ4RO,
} from "./mermaid-flowchart-nodes-alt";
import { initMermaidJsYamlCore as chunkXPW4576IN, yamlLoad as chunkXPW4576IR, yamlCoreSchema as chunkXPW4576IT } from "../../utils/mermaid-js-yaml-core";
var kanbanDefinition6JOO6SKYBinding1,
  kanbanDefinition6JOO6SKYBinding2,
  kanbanDefinition6JOO6SKYBinding3,
  kanbanDefinition6JOO6SKYBinding4,
  kanbanDefinition6JOO6SKYBinding5,
  kanbanDefinition6JOO6SKYBinding6,
  kanbanDefinition6JOO6SKYBinding7,
  kanbanDefinition6JOO6SKYBinding8,
  kanbanDefinition6JOO6SKYBinding9,
  kanbanDefinition6JOO6SKYBinding10,
  kanbanDefinition6JOO6SKYBinding11,
  kanbanDefinition6JOO6SKYBinding12,
  kanbanDefinition6JOO6SKYBinding13,
  kanbanDefinition6JOO6SKYBinding14,
  kanbanDefinition6JOO6SKYBinding15,
  KanbanDefinition6JOO6SKY;
esmInit(() => {
  chunk426QAEUCT();
  chunkFMBD7UC4N();
  chunkXPW4576IN();
  chunk5FUZZQ4RD();
  initSubGraphTitleMarginsAlt();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  t();
  kanbanDefinition6JOO6SKYBinding1 = (function () {
    var kanbanDefinition6JOO6SKYBinding16 = defineFunctionName(function (
        kanbanDefinition6JOO6SKYInput39,
        kanbanDefinition6JOO6SKYInput40,
        kanbanDefinition6JOO6SKYInput41,
        kanbanDefinition6JOO6SKYInput42,
      ) {
        for (
          kanbanDefinition6JOO6SKYInput41 ||= {},
            kanbanDefinition6JOO6SKYInput42 =
              kanbanDefinition6JOO6SKYInput39.length;
          kanbanDefinition6JOO6SKYInput42--;
          kanbanDefinition6JOO6SKYInput41[
            kanbanDefinition6JOO6SKYInput39[kanbanDefinition6JOO6SKYInput42]
          ] = kanbanDefinition6JOO6SKYInput40
        );
        return kanbanDefinition6JOO6SKYInput41;
      }, "o"),
      kanbanDefinition6JOO6SKYBinding17 = [1, 4],
      kanbanDefinition6JOO6SKYBinding18 = [1, 13],
      kanbanDefinition6JOO6SKYBinding19 = [1, 12],
      kanbanDefinition6JOO6SKYBinding20 = [1, 15],
      kanbanDefinition6JOO6SKYBinding21 = [1, 16],
      kanbanDefinition6JOO6SKYBinding22 = [1, 20],
      kanbanDefinition6JOO6SKYBinding23 = [1, 19],
      kanbanDefinition6JOO6SKYBinding24 = [6, 7, 8],
      kanbanDefinition6JOO6SKYBinding25 = [1, 26],
      kanbanDefinition6JOO6SKYBinding26 = [1, 24],
      kanbanDefinition6JOO6SKYBinding27 = [1, 25],
      kanbanDefinition6JOO6SKYBinding28 = [6, 7, 11],
      kanbanDefinition6JOO6SKYBinding29 = [1, 31],
      kanbanDefinition6JOO6SKYBinding30 = [6, 7, 11, 24],
      kanbanDefinition6JOO6SKYBinding31 = [1, 6, 13, 16, 17, 20, 23],
      kanbanDefinition6JOO6SKYBinding32 = [1, 35],
      kanbanDefinition6JOO6SKYBinding33 = [1, 36],
      kanbanDefinition6JOO6SKYBinding34 = [1, 6, 7, 11, 13, 16, 17, 20, 23],
      kanbanDefinition6JOO6SKYBinding35 = [1, 38],
      kanbanDefinition6JOO6SKYBinding36 = {
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
          kanbanDefinition6JOO6SKYInput6,
          kanbanDefinition6JOO6SKYInput7,
          kanbanDefinition6JOO6SKYInput8,
          kanbanDefinition6JOO6SKYInput9,
          kanbanDefinition6JOO6SKYInput10,
          kanbanDefinition6JOO6SKYInput11,
          kanbanDefinition6JOO6SKYInput12,
        ) {
          var kanbanDefinition6JOO6SKYBinding66 =
            kanbanDefinition6JOO6SKYInput11.length - 1;
          switch (kanbanDefinition6JOO6SKYInput10) {
            case 6:
            case 7:
              return kanbanDefinition6JOO6SKYInput9;
            case 8:
              kanbanDefinition6JOO6SKYInput9.getLogger().trace("Stop NL ");
              break;
            case 9:
              kanbanDefinition6JOO6SKYInput9.getLogger().trace("Stop EOF ");
              break;
            case 11:
              kanbanDefinition6JOO6SKYInput9.getLogger().trace("Stop NL2 ");
              break;
            case 12:
              kanbanDefinition6JOO6SKYInput9.getLogger().trace("Stop EOF2 ");
              break;
            case 15:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .info(
                  "Node: ",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 1
                  ].id,
                );
              kanbanDefinition6JOO6SKYInput9.addNode(
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 2
                ].length,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].id,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].descr,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].type,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ],
              );
              break;
            case 16:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .info(
                  "Node: ",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ].id,
                );
              kanbanDefinition6JOO6SKYInput9.addNode(
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].length,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].id,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].descr,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].type,
              );
              break;
            case 17:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .trace(
                  "Icon: ",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ],
                );
              kanbanDefinition6JOO6SKYInput9.decorateNode({
                icon: kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ],
              });
              break;
            case 18:
            case 23:
              kanbanDefinition6JOO6SKYInput9.decorateNode({
                class:
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ],
              });
              break;
            case 19:
              kanbanDefinition6JOO6SKYInput9.getLogger().trace("SPACELIST");
              break;
            case 20:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .trace(
                  "Node: ",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 1
                  ].id,
                );
              kanbanDefinition6JOO6SKYInput9.addNode(
                0,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].id,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].descr,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ].type,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ],
              );
              break;
            case 21:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .trace(
                  "Node: ",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ].id,
                );
              kanbanDefinition6JOO6SKYInput9.addNode(
                0,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].id,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].descr,
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ].type,
              );
              break;
            case 22:
              kanbanDefinition6JOO6SKYInput9.decorateNode({
                icon: kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ],
              });
              break;
            case 27:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .trace(
                  "node found ..",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 2
                  ],
                );
              this.$ = {
                id: kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ],
                descr:
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 1
                  ],
                type: kanbanDefinition6JOO6SKYInput9.getType(
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 2
                  ],
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ],
                ),
              };
              break;
            case 28:
              this.$ = {
                id: kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ],
                descr:
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ],
                type: 0,
              };
              break;
            case 29:
              kanbanDefinition6JOO6SKYInput9
                .getLogger()
                .trace(
                  "node found ..",
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 3
                  ],
                );
              this.$ = {
                id: kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 3
                ],
                descr:
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 1
                  ],
                type: kanbanDefinition6JOO6SKYInput9.getType(
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66 - 2
                  ],
                  kanbanDefinition6JOO6SKYInput11[
                    kanbanDefinition6JOO6SKYBinding66
                  ],
                ),
              };
              break;
            case 30:
              this.$ =
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66 - 1
                ] +
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
                ];
              break;
            case 31:
              this.$ =
                kanbanDefinition6JOO6SKYInput11[
                  kanbanDefinition6JOO6SKYBinding66
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
            8: kanbanDefinition6JOO6SKYBinding17,
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
            8: kanbanDefinition6JOO6SKYBinding17,
          },
          {
            6: kanbanDefinition6JOO6SKYBinding18,
            7: [1, 10],
            9: 9,
            12: 11,
            13: kanbanDefinition6JOO6SKYBinding19,
            14: 14,
            16: kanbanDefinition6JOO6SKYBinding20,
            17: kanbanDefinition6JOO6SKYBinding21,
            18: 17,
            19: 18,
            20: kanbanDefinition6JOO6SKYBinding22,
            23: kanbanDefinition6JOO6SKYBinding23,
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding24,
            [2, 3],
          ),
          {
            1: [2, 2],
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding24,
            [2, 4],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding24,
            [2, 5],
          ),
          {
            1: [2, 6],
            6: kanbanDefinition6JOO6SKYBinding18,
            12: 21,
            13: kanbanDefinition6JOO6SKYBinding19,
            14: 14,
            16: kanbanDefinition6JOO6SKYBinding20,
            17: kanbanDefinition6JOO6SKYBinding21,
            18: 17,
            19: 18,
            20: kanbanDefinition6JOO6SKYBinding22,
            23: kanbanDefinition6JOO6SKYBinding23,
          },
          {
            6: kanbanDefinition6JOO6SKYBinding18,
            9: 22,
            12: 11,
            13: kanbanDefinition6JOO6SKYBinding19,
            14: 14,
            16: kanbanDefinition6JOO6SKYBinding20,
            17: kanbanDefinition6JOO6SKYBinding21,
            18: 17,
            19: 18,
            20: kanbanDefinition6JOO6SKYBinding22,
            23: kanbanDefinition6JOO6SKYBinding23,
          },
          {
            6: kanbanDefinition6JOO6SKYBinding25,
            7: kanbanDefinition6JOO6SKYBinding26,
            10: 23,
            11: kanbanDefinition6JOO6SKYBinding27,
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 24],
            {
              18: 17,
              19: 18,
              14: 27,
              16: [1, 28],
              17: [1, 29],
              20: kanbanDefinition6JOO6SKYBinding22,
              23: kanbanDefinition6JOO6SKYBinding23,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 19],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 21],
            {
              15: 30,
              24: kanbanDefinition6JOO6SKYBinding29,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 22],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 23],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 25],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 26],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 28],
            {
              20: [1, 32],
            },
          ),
          {
            21: [1, 33],
          },
          {
            6: kanbanDefinition6JOO6SKYBinding25,
            7: kanbanDefinition6JOO6SKYBinding26,
            10: 34,
            11: kanbanDefinition6JOO6SKYBinding27,
          },
          {
            1: [2, 7],
            6: kanbanDefinition6JOO6SKYBinding18,
            12: 21,
            13: kanbanDefinition6JOO6SKYBinding19,
            14: 14,
            16: kanbanDefinition6JOO6SKYBinding20,
            17: kanbanDefinition6JOO6SKYBinding21,
            18: 17,
            19: 18,
            20: kanbanDefinition6JOO6SKYBinding22,
            23: kanbanDefinition6JOO6SKYBinding23,
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding31,
            [2, 14],
            {
              7: kanbanDefinition6JOO6SKYBinding32,
              11: kanbanDefinition6JOO6SKYBinding33,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding34,
            [2, 8],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding34,
            [2, 9],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding34,
            [2, 10],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 16],
            {
              15: 37,
              24: kanbanDefinition6JOO6SKYBinding29,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 17],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 18],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 20],
            {
              24: kanbanDefinition6JOO6SKYBinding35,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 31],
          ),
          {
            21: [1, 39],
          },
          {
            22: [1, 40],
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding31,
            [2, 13],
            {
              7: kanbanDefinition6JOO6SKYBinding32,
              11: kanbanDefinition6JOO6SKYBinding33,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding34,
            [2, 11],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding34,
            [2, 12],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding28,
            [2, 15],
            {
              24: kanbanDefinition6JOO6SKYBinding35,
            },
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 30],
          ),
          {
            22: [1, 41],
          },
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 27],
          ),
          kanbanDefinition6JOO6SKYBinding16(
            kanbanDefinition6JOO6SKYBinding30,
            [2, 29],
          ),
        ],
        defaultActions: {
          2: [2, 1],
          6: [2, 2],
        },
        parseError: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput35,
          kanbanDefinition6JOO6SKYInput36,
        ) {
          if (kanbanDefinition6JOO6SKYInput36.recoverable)
            this.trace(kanbanDefinition6JOO6SKYInput35);
          else {
            var kanbanDefinition6JOO6SKYBinding135 = Error(
              kanbanDefinition6JOO6SKYInput35,
            );
            throw (
              (kanbanDefinition6JOO6SKYBinding135.hash =
                kanbanDefinition6JOO6SKYInput36),
              kanbanDefinition6JOO6SKYBinding135
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (kanbanDefinition6JOO6SKYInput1) {
          var kanbanDefinition6JOO6SKYBinding37 = this,
            kanbanDefinition6JOO6SKYBinding38 = [0],
            kanbanDefinition6JOO6SKYBinding39 = [],
            kanbanDefinition6JOO6SKYBinding40 = [null],
            kanbanDefinition6JOO6SKYBinding41 = [],
            kanbanDefinition6JOO6SKYBinding42 = this.table,
            kanbanDefinition6JOO6SKYBinding43 = "",
            kanbanDefinition6JOO6SKYBinding44 = 0,
            kanbanDefinition6JOO6SKYBinding45 = 0,
            kanbanDefinition6JOO6SKYBinding46 = 0,
            kanbanDefinition6JOO6SKYBinding49 =
              kanbanDefinition6JOO6SKYBinding41.slice.call(arguments, 1),
            kanbanDefinition6JOO6SKYBinding50 = Object.create(this.lexer),
            kanbanDefinition6JOO6SKYBinding51 = {
              yy: {},
            };
          for (var kanbanDefinition6JOO6SKYBinding52 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              kanbanDefinition6JOO6SKYBinding52,
            ) &&
              (kanbanDefinition6JOO6SKYBinding51.yy[
                kanbanDefinition6JOO6SKYBinding52
              ] = this.yy[kanbanDefinition6JOO6SKYBinding52]);
          kanbanDefinition6JOO6SKYBinding50.setInput(
            kanbanDefinition6JOO6SKYInput1,
            kanbanDefinition6JOO6SKYBinding51.yy,
          );
          kanbanDefinition6JOO6SKYBinding51.yy.lexer =
            kanbanDefinition6JOO6SKYBinding50;
          kanbanDefinition6JOO6SKYBinding51.yy.parser = this;
          kanbanDefinition6JOO6SKYBinding50.yylloc === undefined &&
            (kanbanDefinition6JOO6SKYBinding50.yylloc = {});
          var kanbanDefinition6JOO6SKYBinding53 =
            kanbanDefinition6JOO6SKYBinding50.yylloc;
          kanbanDefinition6JOO6SKYBinding41.push(
            kanbanDefinition6JOO6SKYBinding53,
          );
          var kanbanDefinition6JOO6SKYBinding54 =
            kanbanDefinition6JOO6SKYBinding50.options &&
            kanbanDefinition6JOO6SKYBinding50.options.ranges;
          typeof kanbanDefinition6JOO6SKYBinding51.yy.parseError == "function"
            ? (this.parseError =
                kanbanDefinition6JOO6SKYBinding51.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function kanbanDefinition6JOO6SKYHelper2(
            kanbanDefinition6JOO6SKYInput43,
          ) {
            kanbanDefinition6JOO6SKYBinding38.length -=
              2 * kanbanDefinition6JOO6SKYInput43;
            kanbanDefinition6JOO6SKYBinding40.length -=
              kanbanDefinition6JOO6SKYInput43;
            kanbanDefinition6JOO6SKYBinding41.length -=
              kanbanDefinition6JOO6SKYInput43;
          }
          defineFunctionName(kanbanDefinition6JOO6SKYHelper2, "popStack");
          function kanbanDefinition6JOO6SKYHelper3() {
            var kanbanDefinition6JOO6SKYBinding127 =
              kanbanDefinition6JOO6SKYBinding39.pop() ||
              kanbanDefinition6JOO6SKYBinding50.lex() ||
              1;
            return (
              typeof kanbanDefinition6JOO6SKYBinding127 != "number" &&
                (kanbanDefinition6JOO6SKYBinding127 instanceof Array &&
                  ((kanbanDefinition6JOO6SKYBinding39 =
                    kanbanDefinition6JOO6SKYBinding127),
                  (kanbanDefinition6JOO6SKYBinding127 =
                    kanbanDefinition6JOO6SKYBinding39.pop())),
                (kanbanDefinition6JOO6SKYBinding127 =
                  kanbanDefinition6JOO6SKYBinding37.symbols_[
                    kanbanDefinition6JOO6SKYBinding127
                  ] || kanbanDefinition6JOO6SKYBinding127)),
              kanbanDefinition6JOO6SKYBinding127
            );
          }
          defineFunctionName(kanbanDefinition6JOO6SKYHelper3, "lex");
          for (
            var kanbanDefinition6JOO6SKYBinding55,
              kanbanDefinition6JOO6SKYBinding56,
              kanbanDefinition6JOO6SKYBinding57,
              kanbanDefinition6JOO6SKYBinding58,
              kanbanDefinition6JOO6SKYBinding59,
              kanbanDefinition6JOO6SKYBinding60 = {},
              kanbanDefinition6JOO6SKYBinding61,
              kanbanDefinition6JOO6SKYBinding62,
              kanbanDefinition6JOO6SKYBinding63,
              kanbanDefinition6JOO6SKYBinding64;
            ;
          ) {
            if (
              ((kanbanDefinition6JOO6SKYBinding57 =
                kanbanDefinition6JOO6SKYBinding38[
                  kanbanDefinition6JOO6SKYBinding38.length - 1
                ]),
              this.defaultActions[kanbanDefinition6JOO6SKYBinding57]
                ? (kanbanDefinition6JOO6SKYBinding58 =
                    this.defaultActions[kanbanDefinition6JOO6SKYBinding57])
                : ((kanbanDefinition6JOO6SKYBinding55 ??=
                    kanbanDefinition6JOO6SKYHelper3()),
                  (kanbanDefinition6JOO6SKYBinding58 =
                    kanbanDefinition6JOO6SKYBinding42[
                      kanbanDefinition6JOO6SKYBinding57
                    ] &&
                    kanbanDefinition6JOO6SKYBinding42[
                      kanbanDefinition6JOO6SKYBinding57
                    ][kanbanDefinition6JOO6SKYBinding55])),
              kanbanDefinition6JOO6SKYBinding58 === undefined ||
                !kanbanDefinition6JOO6SKYBinding58.length ||
                !kanbanDefinition6JOO6SKYBinding58[0])
            ) {
              var kanbanDefinition6JOO6SKYBinding65 = "";
              for (kanbanDefinition6JOO6SKYBinding61 in ((kanbanDefinition6JOO6SKYBinding64 =
                []),
              kanbanDefinition6JOO6SKYBinding42[
                kanbanDefinition6JOO6SKYBinding57
              ]))
                this.terminals_[kanbanDefinition6JOO6SKYBinding61] &&
                  kanbanDefinition6JOO6SKYBinding61 > 2 &&
                  kanbanDefinition6JOO6SKYBinding64.push(
                    "'" +
                      this.terminals_[kanbanDefinition6JOO6SKYBinding61] +
                      "'",
                  );
              kanbanDefinition6JOO6SKYBinding65 =
                kanbanDefinition6JOO6SKYBinding50.showPosition
                  ? "Parse error on line " +
                    (kanbanDefinition6JOO6SKYBinding44 + 1) +
                    ":\n" +
                    kanbanDefinition6JOO6SKYBinding50.showPosition() +
                    "\nExpecting " +
                    kanbanDefinition6JOO6SKYBinding64.join(", ") +
                    ", got '" +
                    (this.terminals_[kanbanDefinition6JOO6SKYBinding55] ||
                      kanbanDefinition6JOO6SKYBinding55) +
                    "'"
                  : "Parse error on line " +
                    (kanbanDefinition6JOO6SKYBinding44 + 1) +
                    ": Unexpected " +
                    (kanbanDefinition6JOO6SKYBinding55 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[kanbanDefinition6JOO6SKYBinding55] ||
                          kanbanDefinition6JOO6SKYBinding55) +
                        "'");
              this.parseError(kanbanDefinition6JOO6SKYBinding65, {
                text: kanbanDefinition6JOO6SKYBinding50.match,
                token:
                  this.terminals_[kanbanDefinition6JOO6SKYBinding55] ||
                  kanbanDefinition6JOO6SKYBinding55,
                line: kanbanDefinition6JOO6SKYBinding50.yylineno,
                loc: kanbanDefinition6JOO6SKYBinding53,
                expected: kanbanDefinition6JOO6SKYBinding64,
              });
            }
            if (
              kanbanDefinition6JOO6SKYBinding58[0] instanceof Array &&
              kanbanDefinition6JOO6SKYBinding58.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  kanbanDefinition6JOO6SKYBinding57 +
                  ", token: " +
                  kanbanDefinition6JOO6SKYBinding55,
              );
            switch (kanbanDefinition6JOO6SKYBinding58[0]) {
              case 1:
                kanbanDefinition6JOO6SKYBinding38.push(
                  kanbanDefinition6JOO6SKYBinding55,
                );
                kanbanDefinition6JOO6SKYBinding40.push(
                  kanbanDefinition6JOO6SKYBinding50.yytext,
                );
                kanbanDefinition6JOO6SKYBinding41.push(
                  kanbanDefinition6JOO6SKYBinding50.yylloc,
                );
                kanbanDefinition6JOO6SKYBinding38.push(
                  kanbanDefinition6JOO6SKYBinding58[1],
                );
                kanbanDefinition6JOO6SKYBinding55 = null;
                kanbanDefinition6JOO6SKYBinding56
                  ? ((kanbanDefinition6JOO6SKYBinding55 =
                      kanbanDefinition6JOO6SKYBinding56),
                    (kanbanDefinition6JOO6SKYBinding56 = null))
                  : ((kanbanDefinition6JOO6SKYBinding45 =
                      kanbanDefinition6JOO6SKYBinding50.yyleng),
                    (kanbanDefinition6JOO6SKYBinding43 =
                      kanbanDefinition6JOO6SKYBinding50.yytext),
                    (kanbanDefinition6JOO6SKYBinding44 =
                      kanbanDefinition6JOO6SKYBinding50.yylineno),
                    (kanbanDefinition6JOO6SKYBinding53 =
                      kanbanDefinition6JOO6SKYBinding50.yylloc),
                    kanbanDefinition6JOO6SKYBinding46 > 0 &&
                      kanbanDefinition6JOO6SKYBinding46--);
                break;
              case 2:
                if (
                  ((kanbanDefinition6JOO6SKYBinding62 =
                    this.productions_[kanbanDefinition6JOO6SKYBinding58[1]][1]),
                  (kanbanDefinition6JOO6SKYBinding60.$ =
                    kanbanDefinition6JOO6SKYBinding40[
                      kanbanDefinition6JOO6SKYBinding40.length -
                        kanbanDefinition6JOO6SKYBinding62
                    ]),
                  (kanbanDefinition6JOO6SKYBinding60._$ = {
                    first_line:
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length -
                          (kanbanDefinition6JOO6SKYBinding62 || 1)
                      ].first_line,
                    last_line:
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length - 1
                      ].last_line,
                    first_column:
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length -
                          (kanbanDefinition6JOO6SKYBinding62 || 1)
                      ].first_column,
                    last_column:
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length - 1
                      ].last_column,
                  }),
                  kanbanDefinition6JOO6SKYBinding54 &&
                    (kanbanDefinition6JOO6SKYBinding60._$.range = [
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length -
                          (kanbanDefinition6JOO6SKYBinding62 || 1)
                      ].range[0],
                      kanbanDefinition6JOO6SKYBinding41[
                        kanbanDefinition6JOO6SKYBinding41.length - 1
                      ].range[1],
                    ]),
                  (kanbanDefinition6JOO6SKYBinding59 = this.performAction.apply(
                    kanbanDefinition6JOO6SKYBinding60,
                    [
                      kanbanDefinition6JOO6SKYBinding43,
                      kanbanDefinition6JOO6SKYBinding45,
                      kanbanDefinition6JOO6SKYBinding44,
                      kanbanDefinition6JOO6SKYBinding51.yy,
                      kanbanDefinition6JOO6SKYBinding58[1],
                      kanbanDefinition6JOO6SKYBinding40,
                      kanbanDefinition6JOO6SKYBinding41,
                    ].concat(kanbanDefinition6JOO6SKYBinding49),
                  )),
                  kanbanDefinition6JOO6SKYBinding59 !== undefined)
                )
                  return kanbanDefinition6JOO6SKYBinding59;
                kanbanDefinition6JOO6SKYBinding62 &&
                  ((kanbanDefinition6JOO6SKYBinding38 =
                    kanbanDefinition6JOO6SKYBinding38.slice(
                      0,
                      -1 * kanbanDefinition6JOO6SKYBinding62 * 2,
                    )),
                  (kanbanDefinition6JOO6SKYBinding40 =
                    kanbanDefinition6JOO6SKYBinding40.slice(
                      0,
                      -1 * kanbanDefinition6JOO6SKYBinding62,
                    )),
                  (kanbanDefinition6JOO6SKYBinding41 =
                    kanbanDefinition6JOO6SKYBinding41.slice(
                      0,
                      -1 * kanbanDefinition6JOO6SKYBinding62,
                    )));
                kanbanDefinition6JOO6SKYBinding38.push(
                  this.productions_[kanbanDefinition6JOO6SKYBinding58[1]][0],
                );
                kanbanDefinition6JOO6SKYBinding40.push(
                  kanbanDefinition6JOO6SKYBinding60.$,
                );
                kanbanDefinition6JOO6SKYBinding41.push(
                  kanbanDefinition6JOO6SKYBinding60._$,
                );
                kanbanDefinition6JOO6SKYBinding63 =
                  kanbanDefinition6JOO6SKYBinding42[
                    kanbanDefinition6JOO6SKYBinding38[
                      kanbanDefinition6JOO6SKYBinding38.length - 2
                    ]
                  ][
                    kanbanDefinition6JOO6SKYBinding38[
                      kanbanDefinition6JOO6SKYBinding38.length - 1
                    ]
                  ];
                kanbanDefinition6JOO6SKYBinding38.push(
                  kanbanDefinition6JOO6SKYBinding63,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    kanbanDefinition6JOO6SKYBinding36.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput37,
          kanbanDefinition6JOO6SKYInput38,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              kanbanDefinition6JOO6SKYInput37,
              kanbanDefinition6JOO6SKYInput38,
            );
          else throw Error(kanbanDefinition6JOO6SKYInput37);
        }, "parseError"),
        setInput: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput26,
          kanbanDefinition6JOO6SKYInput27,
        ) {
          return (
            (this.yy = kanbanDefinition6JOO6SKYInput27 || this.yy || {}),
            (this._input = kanbanDefinition6JOO6SKYInput26),
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
          var kanbanDefinition6JOO6SKYBinding116 = this._input[0];
          return (
            (this.yytext += kanbanDefinition6JOO6SKYBinding116),
            this.yyleng++,
            this.offset++,
            (this.match += kanbanDefinition6JOO6SKYBinding116),
            (this.matched += kanbanDefinition6JOO6SKYBinding116),
            kanbanDefinition6JOO6SKYBinding116.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            kanbanDefinition6JOO6SKYBinding116
          );
        }, "input"),
        unput: defineFunctionName(function (kanbanDefinition6JOO6SKYInput25) {
          var kanbanDefinition6JOO6SKYBinding93 =
              kanbanDefinition6JOO6SKYInput25.length,
            kanbanDefinition6JOO6SKYBinding94 =
              kanbanDefinition6JOO6SKYInput25.split(/(?:\r\n?|\n)/g);
          this._input = kanbanDefinition6JOO6SKYInput25 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - kanbanDefinition6JOO6SKYBinding93,
          );
          this.offset -= kanbanDefinition6JOO6SKYBinding93;
          var kanbanDefinition6JOO6SKYBinding95 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          kanbanDefinition6JOO6SKYBinding94.length - 1 &&
            (this.yylineno -= kanbanDefinition6JOO6SKYBinding94.length - 1);
          var kanbanDefinition6JOO6SKYBinding96 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: kanbanDefinition6JOO6SKYBinding94
                ? (kanbanDefinition6JOO6SKYBinding94.length ===
                  kanbanDefinition6JOO6SKYBinding95.length
                    ? this.yylloc.first_column
                    : 0) +
                  kanbanDefinition6JOO6SKYBinding95[
                    kanbanDefinition6JOO6SKYBinding95.length -
                      kanbanDefinition6JOO6SKYBinding94.length
                  ].length -
                  kanbanDefinition6JOO6SKYBinding94[0].length
                : this.yylloc.first_column - kanbanDefinition6JOO6SKYBinding93,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                kanbanDefinition6JOO6SKYBinding96[0],
                kanbanDefinition6JOO6SKYBinding96[0] +
                  this.yyleng -
                  kanbanDefinition6JOO6SKYBinding93,
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
        less: defineFunctionName(function (kanbanDefinition6JOO6SKYInput44) {
          this.unput(this.match.slice(kanbanDefinition6JOO6SKYInput44));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var kanbanDefinition6JOO6SKYBinding129 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (kanbanDefinition6JOO6SKYBinding129.length > 20 ? "..." : "") +
            kanbanDefinition6JOO6SKYBinding129.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var kanbanDefinition6JOO6SKYBinding126 = this.match;
          return (
            kanbanDefinition6JOO6SKYBinding126.length < 20 &&
              (kanbanDefinition6JOO6SKYBinding126 += this._input.substr(
                0,
                20 - kanbanDefinition6JOO6SKYBinding126.length,
              )),
            (
              kanbanDefinition6JOO6SKYBinding126.substr(0, 20) +
              (kanbanDefinition6JOO6SKYBinding126.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var kanbanDefinition6JOO6SKYBinding130 = this.pastInput(),
            kanbanDefinition6JOO6SKYBinding131 = Array(
              kanbanDefinition6JOO6SKYBinding130.length + 1,
            ).join("-");
          return (
            kanbanDefinition6JOO6SKYBinding130 +
            this.upcomingInput() +
            "\n" +
            kanbanDefinition6JOO6SKYBinding131 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput13,
          kanbanDefinition6JOO6SKYInput14,
        ) {
          var kanbanDefinition6JOO6SKYBinding67,
            kanbanDefinition6JOO6SKYBinding68,
            kanbanDefinition6JOO6SKYBinding69;
          if (
            (this.options.backtrack_lexer &&
              ((kanbanDefinition6JOO6SKYBinding69 = {
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
                (kanbanDefinition6JOO6SKYBinding69.yylloc.range =
                  this.yylloc.range.slice(0))),
            (kanbanDefinition6JOO6SKYBinding68 =
              kanbanDefinition6JOO6SKYInput13[0].match(/(?:\r\n?|\n).*/g)),
            kanbanDefinition6JOO6SKYBinding68 &&
              (this.yylineno += kanbanDefinition6JOO6SKYBinding68.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: kanbanDefinition6JOO6SKYBinding68
                ? kanbanDefinition6JOO6SKYBinding68[
                    kanbanDefinition6JOO6SKYBinding68.length - 1
                  ].length -
                  kanbanDefinition6JOO6SKYBinding68[
                    kanbanDefinition6JOO6SKYBinding68.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  kanbanDefinition6JOO6SKYInput13[0].length,
            }),
            (this.yytext += kanbanDefinition6JOO6SKYInput13[0]),
            (this.match += kanbanDefinition6JOO6SKYInput13[0]),
            (this.matches = kanbanDefinition6JOO6SKYInput13),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              kanbanDefinition6JOO6SKYInput13[0].length,
            )),
            (this.matched += kanbanDefinition6JOO6SKYInput13[0]),
            (kanbanDefinition6JOO6SKYBinding67 = this.performAction.call(
              this,
              this.yy,
              this,
              kanbanDefinition6JOO6SKYInput14,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            kanbanDefinition6JOO6SKYBinding67)
          )
            return kanbanDefinition6JOO6SKYBinding67;
          if (this._backtrack) {
            for (var kanbanDefinition6JOO6SKYBinding70 in kanbanDefinition6JOO6SKYBinding69)
              this[kanbanDefinition6JOO6SKYBinding70] =
                kanbanDefinition6JOO6SKYBinding69[
                  kanbanDefinition6JOO6SKYBinding70
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var kanbanDefinition6JOO6SKYBinding87,
            kanbanDefinition6JOO6SKYBinding88,
            kanbanDefinition6JOO6SKYBinding89,
            kanbanDefinition6JOO6SKYBinding90;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var kanbanDefinition6JOO6SKYBinding91 = this._currentRules(),
              kanbanDefinition6JOO6SKYBinding92 = 0;
            kanbanDefinition6JOO6SKYBinding92 <
            kanbanDefinition6JOO6SKYBinding91.length;
            kanbanDefinition6JOO6SKYBinding92++
          )
            if (
              ((kanbanDefinition6JOO6SKYBinding89 = this._input.match(
                this.rules[
                  kanbanDefinition6JOO6SKYBinding91[
                    kanbanDefinition6JOO6SKYBinding92
                  ]
                ],
              )),
              kanbanDefinition6JOO6SKYBinding89 &&
                (!kanbanDefinition6JOO6SKYBinding88 ||
                  kanbanDefinition6JOO6SKYBinding89[0].length >
                    kanbanDefinition6JOO6SKYBinding88[0].length))
            ) {
              if (
                ((kanbanDefinition6JOO6SKYBinding88 =
                  kanbanDefinition6JOO6SKYBinding89),
                (kanbanDefinition6JOO6SKYBinding90 =
                  kanbanDefinition6JOO6SKYBinding92),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((kanbanDefinition6JOO6SKYBinding87 = this.test_match(
                    kanbanDefinition6JOO6SKYBinding89,
                    kanbanDefinition6JOO6SKYBinding91[
                      kanbanDefinition6JOO6SKYBinding92
                    ],
                  )),
                  kanbanDefinition6JOO6SKYBinding87 !== false)
                )
                  return kanbanDefinition6JOO6SKYBinding87;
                if (this._backtrack) {
                  kanbanDefinition6JOO6SKYBinding88 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return kanbanDefinition6JOO6SKYBinding88
            ? ((kanbanDefinition6JOO6SKYBinding87 = this.test_match(
                kanbanDefinition6JOO6SKYBinding88,
                kanbanDefinition6JOO6SKYBinding91[
                  kanbanDefinition6JOO6SKYBinding90
                ],
              )),
              kanbanDefinition6JOO6SKYBinding87 === false
                ? false
                : kanbanDefinition6JOO6SKYBinding87)
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
        begin: defineFunctionName(function (kanbanDefinition6JOO6SKYInput45) {
          this.conditionStack.push(kanbanDefinition6JOO6SKYInput45);
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
          kanbanDefinition6JOO6SKYInput33,
        ) {
          return (
            (kanbanDefinition6JOO6SKYInput33 =
              this.conditionStack.length -
              1 -
              Math.abs(kanbanDefinition6JOO6SKYInput33 || 0)),
            kanbanDefinition6JOO6SKYInput33 >= 0
              ? this.conditionStack[kanbanDefinition6JOO6SKYInput33]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput46,
        ) {
          this.begin(kanbanDefinition6JOO6SKYInput46);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          kanbanDefinition6JOO6SKYInput2,
          kanbanDefinition6JOO6SKYInput3,
          kanbanDefinition6JOO6SKYInput4,
          kanbanDefinition6JOO6SKYInput5,
        ) {
          switch (kanbanDefinition6JOO6SKYInput4) {
            case 0:
              return (
                this.pushState("shapeData"),
                (kanbanDefinition6JOO6SKYInput3.yytext = ""),
                24
              );
            case 1:
              return (this.pushState("shapeDataStr"), 24);
            case 2:
              return (this.popState(), 24);
            case 3:
              return (
                (kanbanDefinition6JOO6SKYInput3.yytext =
                  kanbanDefinition6JOO6SKYInput3.yytext.replace(
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
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace(
                    "Found comment",
                    kanbanDefinition6JOO6SKYInput3.yytext,
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
              kanbanDefinition6JOO6SKYInput2.getLogger().trace("Begin icon");
              this.begin("ICON");
              break;
            case 12:
              return (
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("SPACELINE"),
                6
              );
            case 13:
              return 7;
            case 14:
              return 16;
            case 15:
              kanbanDefinition6JOO6SKYInput2.getLogger().trace("end icon");
              this.popState();
              break;
            case 16:
              return (
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace("Exploding node"),
                this.begin("NODE"),
                20
              );
            case 17:
              return (
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("Cloud"),
                this.begin("NODE"),
                20
              );
            case 18:
              return (
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace("Explosion Bang"),
                this.begin("NODE"),
                20
              );
            case 19:
              return (
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("Cloud Bang"),
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
              kanbanDefinition6JOO6SKYInput2.getLogger().trace("Starting NSTR");
              this.begin("NSTR");
              break;
            case 31:
              return (
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace("description:", kanbanDefinition6JOO6SKYInput3.yytext),
                "NODE_DESCR"
              );
            case 32:
              this.popState();
              break;
            case 33:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end ))"),
                "NODE_DEND"
              );
            case 34:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end )"),
                "NODE_DEND"
              );
            case 35:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace("node end ...", kanbanDefinition6JOO6SKYInput3.yytext),
                "NODE_DEND"
              );
            case 36:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 37:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end (-"),
                "NODE_DEND"
              );
            case 38:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end (-"),
                "NODE_DEND"
              );
            case 39:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 40:
              return (
                this.popState(),
                kanbanDefinition6JOO6SKYInput2.getLogger().trace("node end (("),
                "NODE_DEND"
              );
            case 41:
              return (
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    kanbanDefinition6JOO6SKYInput3.yytext,
                  ),
                21
              );
            case 42:
              return (
                kanbanDefinition6JOO6SKYInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    kanbanDefinition6JOO6SKYInput3.yytext,
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
    function kanbanDefinition6JOO6SKYHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(kanbanDefinition6JOO6SKYHelper1, "Parser"),
      (kanbanDefinition6JOO6SKYHelper1.prototype =
        kanbanDefinition6JOO6SKYBinding36),
      (kanbanDefinition6JOO6SKYBinding36.Parser =
        kanbanDefinition6JOO6SKYHelper1),
      new kanbanDefinition6JOO6SKYHelper1()
    );
  })();
  kanbanDefinition6JOO6SKYBinding1.parser = kanbanDefinition6JOO6SKYBinding1;
  kanbanDefinition6JOO6SKYBinding2 = kanbanDefinition6JOO6SKYBinding1;
  kanbanDefinition6JOO6SKYBinding3 = [];
  kanbanDefinition6JOO6SKYBinding4 = [];
  kanbanDefinition6JOO6SKYBinding5 = 0;
  kanbanDefinition6JOO6SKYBinding6 = {};
  kanbanDefinition6JOO6SKYBinding7 = defineFunctionName(() => {
    kanbanDefinition6JOO6SKYBinding3 = [];
    kanbanDefinition6JOO6SKYBinding4 = [];
    kanbanDefinition6JOO6SKYBinding5 = 0;
    kanbanDefinition6JOO6SKYBinding6 = {};
  }, "clear");
  kanbanDefinition6JOO6SKYBinding8 = defineFunctionName(
    (kanbanDefinition6JOO6SKYInput32) => {
      if (kanbanDefinition6JOO6SKYBinding3.length === 0) return null;
      let kanbanDefinition6JOO6SKYBinding123 =
          kanbanDefinition6JOO6SKYBinding3[0].level,
        kanbanDefinition6JOO6SKYBinding124 = null;
      for (
        let kanbanDefinition6JOO6SKYBinding132 =
          kanbanDefinition6JOO6SKYBinding3.length - 1;
        kanbanDefinition6JOO6SKYBinding132 >= 0;
        kanbanDefinition6JOO6SKYBinding132--
      )
        if (
          (kanbanDefinition6JOO6SKYBinding3[kanbanDefinition6JOO6SKYBinding132]
            .level === kanbanDefinition6JOO6SKYBinding123 &&
            !kanbanDefinition6JOO6SKYBinding124 &&
            (kanbanDefinition6JOO6SKYBinding124 =
              kanbanDefinition6JOO6SKYBinding3[
                kanbanDefinition6JOO6SKYBinding132
              ]),
          kanbanDefinition6JOO6SKYBinding3[kanbanDefinition6JOO6SKYBinding132]
            .level < kanbanDefinition6JOO6SKYBinding123)
        )
          throw Error(
            'Items without section detected, found section ("' +
              kanbanDefinition6JOO6SKYBinding3[
                kanbanDefinition6JOO6SKYBinding132
              ].label +
              '")',
          );
      return kanbanDefinition6JOO6SKYInput32 ===
        kanbanDefinition6JOO6SKYBinding124?.level
        ? null
        : kanbanDefinition6JOO6SKYBinding124;
    },
    "getSection",
  );
  kanbanDefinition6JOO6SKYBinding9 = defineFunctionName(function () {
    return kanbanDefinition6JOO6SKYBinding4;
  }, "getSections");
  kanbanDefinition6JOO6SKYBinding10 = defineFunctionName(function () {
    let kanbanDefinition6JOO6SKYBinding99 = [],
      kanbanDefinition6JOO6SKYBinding100 = [],
      kanbanDefinition6JOO6SKYBinding101 = kanbanDefinition6JOO6SKYBinding9(),
      kanbanDefinition6JOO6SKYBinding102 = b();
    for (let kanbanDefinition6JOO6SKYBinding103 of kanbanDefinition6JOO6SKYBinding101) {
      let kanbanDefinition6JOO6SKYBinding104 = {
        id: kanbanDefinition6JOO6SKYBinding103.id,
        label: R(
          kanbanDefinition6JOO6SKYBinding103.label ?? "",
          kanbanDefinition6JOO6SKYBinding102,
        ),
        labelType: "markdown",
        isGroup: true,
        ticket: kanbanDefinition6JOO6SKYBinding103.ticket,
        shape: "kanbanSection",
        level: kanbanDefinition6JOO6SKYBinding103.level,
        look: kanbanDefinition6JOO6SKYBinding102.look,
      };
      kanbanDefinition6JOO6SKYBinding100.push(
        kanbanDefinition6JOO6SKYBinding104,
      );
      let kanbanDefinition6JOO6SKYBinding105 =
        kanbanDefinition6JOO6SKYBinding3.filter(
          (item) => item.parentId === kanbanDefinition6JOO6SKYBinding103.id,
        );
      for (let kanbanDefinition6JOO6SKYBinding117 of kanbanDefinition6JOO6SKYBinding105) {
        let kanbanDefinition6JOO6SKYBinding118 = {
          id: kanbanDefinition6JOO6SKYBinding117.id,
          parentId: kanbanDefinition6JOO6SKYBinding103.id,
          label: R(
            kanbanDefinition6JOO6SKYBinding117.label ?? "",
            kanbanDefinition6JOO6SKYBinding102,
          ),
          labelType: "markdown",
          isGroup: false,
          ticket: kanbanDefinition6JOO6SKYBinding117?.ticket,
          priority: kanbanDefinition6JOO6SKYBinding117?.priority,
          assigned: kanbanDefinition6JOO6SKYBinding117?.assigned,
          icon: kanbanDefinition6JOO6SKYBinding117?.icon,
          shape: "kanbanItem",
          level: kanbanDefinition6JOO6SKYBinding117.level,
          rx: 5,
          ry: 5,
          cssStyles: ["text-align: left"],
        };
        kanbanDefinition6JOO6SKYBinding100.push(
          kanbanDefinition6JOO6SKYBinding118,
        );
      }
    }
    return {
      nodes: kanbanDefinition6JOO6SKYBinding100,
      edges: kanbanDefinition6JOO6SKYBinding99,
      other: {},
      config: b(),
    };
  }, "getData");
  kanbanDefinition6JOO6SKYBinding11 = defineFunctionName(
    (
      kanbanDefinition6JOO6SKYInput20,
      kanbanDefinition6JOO6SKYInput21,
      kanbanDefinition6JOO6SKYInput22,
      kanbanDefinition6JOO6SKYInput23,
      kanbanDefinition6JOO6SKYInput24,
    ) => {
      let kanbanDefinition6JOO6SKYBinding83 = b(),
        kanbanDefinition6JOO6SKYBinding84 =
          kanbanDefinition6JOO6SKYBinding83.mindmap?.padding ??
          chunkICPOFSXXD.mindmap.padding;
      switch (kanbanDefinition6JOO6SKYInput23) {
        case kanbanDefinition6JOO6SKYBinding12.ROUNDED_RECT:
        case kanbanDefinition6JOO6SKYBinding12.RECT:
        case kanbanDefinition6JOO6SKYBinding12.HEXAGON:
          kanbanDefinition6JOO6SKYBinding84 *= 2;
      }
      let kanbanDefinition6JOO6SKYBinding85 = {
        id:
          R(
            kanbanDefinition6JOO6SKYInput21,
            kanbanDefinition6JOO6SKYBinding83,
          ) || "kbn" + kanbanDefinition6JOO6SKYBinding5++,
        level: kanbanDefinition6JOO6SKYInput20,
        label: R(
          kanbanDefinition6JOO6SKYInput22,
          kanbanDefinition6JOO6SKYBinding83,
        ),
        width:
          kanbanDefinition6JOO6SKYBinding83.mindmap?.maxNodeWidth ??
          chunkICPOFSXXD.mindmap.maxNodeWidth,
        padding: kanbanDefinition6JOO6SKYBinding84,
        isGroup: false,
      };
      if (kanbanDefinition6JOO6SKYInput24 !== undefined) {
        let kanbanDefinition6JOO6SKYBinding114;
        kanbanDefinition6JOO6SKYBinding114 =
          kanbanDefinition6JOO6SKYInput24.includes("\n")
            ? kanbanDefinition6JOO6SKYInput24 + "\n"
            : "{\n" + kanbanDefinition6JOO6SKYInput24 + "\n}";
        let kanbanDefinition6JOO6SKYBinding115 = chunkXPW4576IR(
          kanbanDefinition6JOO6SKYBinding114,
          {
            schema: chunkXPW4576IT,
          },
        );
        if (
          kanbanDefinition6JOO6SKYBinding115.shape &&
          (kanbanDefinition6JOO6SKYBinding115.shape !==
            kanbanDefinition6JOO6SKYBinding115.shape.toLowerCase() ||
            kanbanDefinition6JOO6SKYBinding115.shape.includes("_"))
        )
          throw Error(
            `No such shape: ${kanbanDefinition6JOO6SKYBinding115.shape}. Shape names should be lowercase.`,
          );
        kanbanDefinition6JOO6SKYBinding115?.shape &&
          kanbanDefinition6JOO6SKYBinding115.shape === "kanbanItem" &&
          (kanbanDefinition6JOO6SKYBinding85.shape =
            kanbanDefinition6JOO6SKYBinding115?.shape);
        kanbanDefinition6JOO6SKYBinding115?.label &&
          (kanbanDefinition6JOO6SKYBinding85.label =
            kanbanDefinition6JOO6SKYBinding115?.label);
        kanbanDefinition6JOO6SKYBinding115?.icon &&
          (kanbanDefinition6JOO6SKYBinding85.icon =
            kanbanDefinition6JOO6SKYBinding115?.icon.toString());
        kanbanDefinition6JOO6SKYBinding115?.assigned &&
          (kanbanDefinition6JOO6SKYBinding85.assigned =
            kanbanDefinition6JOO6SKYBinding115?.assigned.toString());
        kanbanDefinition6JOO6SKYBinding115?.ticket &&
          (kanbanDefinition6JOO6SKYBinding85.ticket =
            kanbanDefinition6JOO6SKYBinding115?.ticket.toString());
        kanbanDefinition6JOO6SKYBinding115?.priority &&
          (kanbanDefinition6JOO6SKYBinding85.priority =
            kanbanDefinition6JOO6SKYBinding115?.priority);
      }
      let kanbanDefinition6JOO6SKYBinding86 = kanbanDefinition6JOO6SKYBinding8(
        kanbanDefinition6JOO6SKYInput20,
      );
      kanbanDefinition6JOO6SKYBinding86
        ? (kanbanDefinition6JOO6SKYBinding85.parentId =
            kanbanDefinition6JOO6SKYBinding86.id ||
            "kbn" + kanbanDefinition6JOO6SKYBinding5++)
        : kanbanDefinition6JOO6SKYBinding4.push(
            kanbanDefinition6JOO6SKYBinding85,
          );
      kanbanDefinition6JOO6SKYBinding3.push(kanbanDefinition6JOO6SKYBinding85);
    },
    "addNode",
  );
  kanbanDefinition6JOO6SKYBinding12 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  };
  kanbanDefinition6JOO6SKYBinding13 = {
    clear: kanbanDefinition6JOO6SKYBinding7,
    addNode: kanbanDefinition6JOO6SKYBinding11,
    getSections: kanbanDefinition6JOO6SKYBinding9,
    getData: kanbanDefinition6JOO6SKYBinding10,
    nodeType: kanbanDefinition6JOO6SKYBinding12,
    getType: defineFunctionName(
      (kanbanDefinition6JOO6SKYInput30, kanbanDefinition6JOO6SKYInput31) => {
        switch (
          (logger.debug(
            "In get type",
            kanbanDefinition6JOO6SKYInput30,
            kanbanDefinition6JOO6SKYInput31,
          ),
          kanbanDefinition6JOO6SKYInput30)
        ) {
          case "[":
            return kanbanDefinition6JOO6SKYBinding12.RECT;
          case "(":
            return kanbanDefinition6JOO6SKYInput31 === ")"
              ? kanbanDefinition6JOO6SKYBinding12.ROUNDED_RECT
              : kanbanDefinition6JOO6SKYBinding12.CLOUD;
          case "((":
            return kanbanDefinition6JOO6SKYBinding12.CIRCLE;
          case ")":
            return kanbanDefinition6JOO6SKYBinding12.CLOUD;
          case "))":
            return kanbanDefinition6JOO6SKYBinding12.BANG;
          case "{{":
            return kanbanDefinition6JOO6SKYBinding12.HEXAGON;
          default:
            return kanbanDefinition6JOO6SKYBinding12.DEFAULT;
        }
      },
      "getType",
    ),
    setElementForId: defineFunctionName(
      (kanbanDefinition6JOO6SKYInput49, kanbanDefinition6JOO6SKYInput50) => {
        kanbanDefinition6JOO6SKYBinding6[kanbanDefinition6JOO6SKYInput49] =
          kanbanDefinition6JOO6SKYInput50;
      },
      "setElementForId",
    ),
    decorateNode: defineFunctionName((kanbanDefinition6JOO6SKYInput34) => {
      if (!kanbanDefinition6JOO6SKYInput34) return;
      let kanbanDefinition6JOO6SKYBinding133 = b(),
        kanbanDefinition6JOO6SKYBinding134 =
          kanbanDefinition6JOO6SKYBinding3[
            kanbanDefinition6JOO6SKYBinding3.length - 1
          ];
      kanbanDefinition6JOO6SKYInput34.icon &&
        (kanbanDefinition6JOO6SKYBinding134.icon = R(
          kanbanDefinition6JOO6SKYInput34.icon,
          kanbanDefinition6JOO6SKYBinding133,
        ));
      kanbanDefinition6JOO6SKYInput34.class &&
        (kanbanDefinition6JOO6SKYBinding134.cssClasses = R(
          kanbanDefinition6JOO6SKYInput34.class,
          kanbanDefinition6JOO6SKYBinding133,
        ));
    }, "decorateNode"),
    type2Str: defineFunctionName((kanbanDefinition6JOO6SKYInput29) => {
      switch (kanbanDefinition6JOO6SKYInput29) {
        case kanbanDefinition6JOO6SKYBinding12.DEFAULT:
          return "no-border";
        case kanbanDefinition6JOO6SKYBinding12.RECT:
          return "rect";
        case kanbanDefinition6JOO6SKYBinding12.ROUNDED_RECT:
          return "rounded-rect";
        case kanbanDefinition6JOO6SKYBinding12.CIRCLE:
          return "circle";
        case kanbanDefinition6JOO6SKYBinding12.CLOUD:
          return "cloud";
        case kanbanDefinition6JOO6SKYBinding12.BANG:
          return "bang";
        case kanbanDefinition6JOO6SKYBinding12.HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }, "type2Str"),
    getLogger: defineFunctionName(() => logger, "getLogger"),
    getElementById: defineFunctionName(
      (kanbanDefinition6JOO6SKYInput51) =>
        kanbanDefinition6JOO6SKYBinding6[kanbanDefinition6JOO6SKYInput51],
      "getElementById",
    ),
  };
  kanbanDefinition6JOO6SKYBinding14 = {
    draw: defineFunctionName(
      async (
        kanbanDefinition6JOO6SKYInput15,
        kanbanDefinition6JOO6SKYInput16,
        kanbanDefinition6JOO6SKYInput17,
        kanbanDefinition6JOO6SKYInput18,
      ) => {
        logger.debug(
          "Rendering kanban diagram\n" + kanbanDefinition6JOO6SKYInput15,
        );
        let kanbanDefinition6JOO6SKYBinding71 =
            kanbanDefinition6JOO6SKYInput18.db.getData(),
          kanbanDefinition6JOO6SKYBinding72 = b();
        kanbanDefinition6JOO6SKYBinding72.htmlLabels = false;
        let kanbanDefinition6JOO6SKYBinding73 = n(
          kanbanDefinition6JOO6SKYInput16,
        );
        for (let kanbanDefinition6JOO6SKYBinding136 of kanbanDefinition6JOO6SKYBinding71.nodes)
          kanbanDefinition6JOO6SKYBinding136.domId = `${kanbanDefinition6JOO6SKYInput16}-${kanbanDefinition6JOO6SKYBinding136.id}`;
        let kanbanDefinition6JOO6SKYBinding74 =
          kanbanDefinition6JOO6SKYBinding73.append("g");
        kanbanDefinition6JOO6SKYBinding74.attr("class", "sections");
        let kanbanDefinition6JOO6SKYBinding75 =
          kanbanDefinition6JOO6SKYBinding73.append("g");
        kanbanDefinition6JOO6SKYBinding75.attr("class", "items");
        let kanbanDefinition6JOO6SKYBinding76 =
            kanbanDefinition6JOO6SKYBinding71.nodes.filter(
              (item) => item.isGroup,
            ),
          kanbanDefinition6JOO6SKYBinding77 = 0,
          kanbanDefinition6JOO6SKYBinding78 = [],
          kanbanDefinition6JOO6SKYBinding79 = 25;
        for (let kanbanDefinition6JOO6SKYBinding119 of kanbanDefinition6JOO6SKYBinding76) {
          let kanbanDefinition6JOO6SKYBinding120 =
            kanbanDefinition6JOO6SKYBinding72?.kanban?.sectionWidth || 200;
          kanbanDefinition6JOO6SKYBinding77 += 1;
          kanbanDefinition6JOO6SKYBinding119.x =
            kanbanDefinition6JOO6SKYBinding120 *
              kanbanDefinition6JOO6SKYBinding77 +
            ((kanbanDefinition6JOO6SKYBinding77 - 1) * 10) / 2;
          kanbanDefinition6JOO6SKYBinding119.width =
            kanbanDefinition6JOO6SKYBinding120;
          kanbanDefinition6JOO6SKYBinding119.y = 0;
          kanbanDefinition6JOO6SKYBinding119.height =
            kanbanDefinition6JOO6SKYBinding120 * 3;
          kanbanDefinition6JOO6SKYBinding119.rx = 5;
          kanbanDefinition6JOO6SKYBinding119.ry = 5;
          kanbanDefinition6JOO6SKYBinding119.cssClasses =
            kanbanDefinition6JOO6SKYBinding119.cssClasses +
            " section-" +
            kanbanDefinition6JOO6SKYBinding77;
          let kanbanDefinition6JOO6SKYBinding121 = await chunk5FUZZQ4RD(
            kanbanDefinition6JOO6SKYBinding74,
            kanbanDefinition6JOO6SKYBinding119,
          );
          kanbanDefinition6JOO6SKYBinding79 = Math.max(
            kanbanDefinition6JOO6SKYBinding79,
            kanbanDefinition6JOO6SKYBinding121?.labelBBox?.height,
          );
          kanbanDefinition6JOO6SKYBinding78.push(
            kanbanDefinition6JOO6SKYBinding121,
          );
        }
        let kanbanDefinition6JOO6SKYBinding80 = 0;
        for (let kanbanDefinition6JOO6SKYBinding106 of kanbanDefinition6JOO6SKYBinding76) {
          let kanbanDefinition6JOO6SKYBinding107 =
            kanbanDefinition6JOO6SKYBinding78[
              kanbanDefinition6JOO6SKYBinding80
            ];
          kanbanDefinition6JOO6SKYBinding80 += 1;
          let kanbanDefinition6JOO6SKYBinding108 =
              kanbanDefinition6JOO6SKYBinding72?.kanban?.sectionWidth || 200,
            kanbanDefinition6JOO6SKYBinding109 =
              (-kanbanDefinition6JOO6SKYBinding108 * 3) / 2 +
              kanbanDefinition6JOO6SKYBinding79,
            kanbanDefinition6JOO6SKYBinding110 =
              kanbanDefinition6JOO6SKYBinding109,
            kanbanDefinition6JOO6SKYBinding111 =
              kanbanDefinition6JOO6SKYBinding71.nodes.filter(
                (item) =>
                  item.parentId === kanbanDefinition6JOO6SKYBinding106.id,
              );
          for (let kanbanDefinition6JOO6SKYBinding122 of kanbanDefinition6JOO6SKYBinding111) {
            if (kanbanDefinition6JOO6SKYBinding122.isGroup)
              throw Error(
                "Groups within groups are not allowed in Kanban diagrams",
              );
            kanbanDefinition6JOO6SKYBinding122.x =
              kanbanDefinition6JOO6SKYBinding106.x;
            kanbanDefinition6JOO6SKYBinding122.width =
              kanbanDefinition6JOO6SKYBinding108 - 15;
            let kanbanDefinition6JOO6SKYBinding125 = (
              await chunk5FUZZQ4RO(
                kanbanDefinition6JOO6SKYBinding75,
                kanbanDefinition6JOO6SKYBinding122,
                {
                  config: kanbanDefinition6JOO6SKYBinding72,
                },
              )
            )
              .node()
              .getBBox();
            kanbanDefinition6JOO6SKYBinding122.y =
              kanbanDefinition6JOO6SKYBinding110 +
              kanbanDefinition6JOO6SKYBinding125.height / 2;
            await chunk5FUZZQ4RL(kanbanDefinition6JOO6SKYBinding122);
            kanbanDefinition6JOO6SKYBinding110 =
              kanbanDefinition6JOO6SKYBinding122.y +
              kanbanDefinition6JOO6SKYBinding125.height / 2 +
              5;
          }
          let kanbanDefinition6JOO6SKYBinding112 =
              kanbanDefinition6JOO6SKYBinding107.cluster.select("rect"),
            kanbanDefinition6JOO6SKYBinding113 =
              Math.max(
                kanbanDefinition6JOO6SKYBinding110 -
                  kanbanDefinition6JOO6SKYBinding109 +
                  30,
                50,
              ) +
              (kanbanDefinition6JOO6SKYBinding79 - 25);
          kanbanDefinition6JOO6SKYBinding112.attr(
            "height",
            kanbanDefinition6JOO6SKYBinding113,
          );
        }
        q(
          undefined,
          kanbanDefinition6JOO6SKYBinding73,
          kanbanDefinition6JOO6SKYBinding72.mindmap?.padding ??
            chunkICPOFSXXD.kanban.padding,
          kanbanDefinition6JOO6SKYBinding72.mindmap?.useMaxWidth ??
            chunkICPOFSXXD.kanban.useMaxWidth,
        );
      },
      "draw",
    ),
  };
  kanbanDefinition6JOO6SKYBinding15 = defineFunctionName(
    (kanbanDefinition6JOO6SKYInput19) => {
      let kanbanDefinition6JOO6SKYBinding81 = "";
      for (
        let kanbanDefinition6JOO6SKYBinding128 = 0;
        kanbanDefinition6JOO6SKYBinding128 <
        kanbanDefinition6JOO6SKYInput19.THEME_COLOR_LIMIT;
        kanbanDefinition6JOO6SKYBinding128++
      ) {
        kanbanDefinition6JOO6SKYInput19[
          "lineColor" + kanbanDefinition6JOO6SKYBinding128
        ] =
          kanbanDefinition6JOO6SKYInput19[
            "lineColor" + kanbanDefinition6JOO6SKYBinding128
          ] ||
          kanbanDefinition6JOO6SKYInput19[
            "cScaleInv" + kanbanDefinition6JOO6SKYBinding128
          ];
        p(
          kanbanDefinition6JOO6SKYInput19[
            "lineColor" + kanbanDefinition6JOO6SKYBinding128
          ],
        )
          ? (kanbanDefinition6JOO6SKYInput19[
              "lineColor" + kanbanDefinition6JOO6SKYBinding128
            ] = d(
              kanbanDefinition6JOO6SKYInput19[
                "lineColor" + kanbanDefinition6JOO6SKYBinding128
              ],
              20,
            ))
          : (kanbanDefinition6JOO6SKYInput19[
              "lineColor" + kanbanDefinition6JOO6SKYBinding128
            ] = c(
              kanbanDefinition6JOO6SKYInput19[
                "lineColor" + kanbanDefinition6JOO6SKYBinding128
              ],
              20,
            ));
      }
      let kanbanDefinition6JOO6SKYBinding82 = defineFunctionName(
        (kanbanDefinition6JOO6SKYInput47, kanbanDefinition6JOO6SKYInput48) =>
          kanbanDefinition6JOO6SKYInput19.darkMode
            ? c(
                kanbanDefinition6JOO6SKYInput47,
                kanbanDefinition6JOO6SKYInput48,
              )
            : d(
                kanbanDefinition6JOO6SKYInput47,
                kanbanDefinition6JOO6SKYInput48,
              ),
        "adjuster",
      );
      for (
        let kanbanDefinition6JOO6SKYBinding97 = 0;
        kanbanDefinition6JOO6SKYBinding97 <
        kanbanDefinition6JOO6SKYInput19.THEME_COLOR_LIMIT;
        kanbanDefinition6JOO6SKYBinding97++
      ) {
        let kanbanDefinition6JOO6SKYBinding98 =
          "" + (17 - 3 * kanbanDefinition6JOO6SKYBinding97);
        kanbanDefinition6JOO6SKYBinding81 += `
    .section-${kanbanDefinition6JOO6SKYBinding97 - 1} rect, .section-${kanbanDefinition6JOO6SKYBinding97 - 1} path, .section-${kanbanDefinition6JOO6SKYBinding97 - 1} circle, .section-${kanbanDefinition6JOO6SKYBinding97 - 1} polygon, .section-${kanbanDefinition6JOO6SKYBinding97 - 1} path  {
      fill: ${kanbanDefinition6JOO6SKYBinding82(kanbanDefinition6JOO6SKYInput19["cScale" + kanbanDefinition6JOO6SKYBinding97], 10)};
      stroke: ${kanbanDefinition6JOO6SKYBinding82(kanbanDefinition6JOO6SKYInput19["cScale" + kanbanDefinition6JOO6SKYBinding97], 10)};

    }
    .section-${kanbanDefinition6JOO6SKYBinding97 - 1} text {
     fill: ${kanbanDefinition6JOO6SKYInput19["cScaleLabel" + kanbanDefinition6JOO6SKYBinding97]};
    }
    .node-icon-${kanbanDefinition6JOO6SKYBinding97 - 1} {
      font-size: 40px;
      color: ${kanbanDefinition6JOO6SKYInput19["cScaleLabel" + kanbanDefinition6JOO6SKYBinding97]};
    }
    .section-edge-${kanbanDefinition6JOO6SKYBinding97 - 1}{
      stroke: ${kanbanDefinition6JOO6SKYInput19["cScale" + kanbanDefinition6JOO6SKYBinding97]};
    }
    .edge-depth-${kanbanDefinition6JOO6SKYBinding97 - 1}{
      stroke-width: ${kanbanDefinition6JOO6SKYBinding98};
    }
    .section-${kanbanDefinition6JOO6SKYBinding97 - 1} line {
      stroke: ${kanbanDefinition6JOO6SKYInput19["cScaleInv" + kanbanDefinition6JOO6SKYBinding97]} ;
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
    fill: ${kanbanDefinition6JOO6SKYInput19.background};
    stroke: ${kanbanDefinition6JOO6SKYInput19.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${kanbanDefinition6JOO6SKYInput19.background};
    stroke: ${kanbanDefinition6JOO6SKYInput19.nodeBorder};
    text-decoration: underline;
  }
    `;
      }
      return kanbanDefinition6JOO6SKYBinding81;
    },
    "genSections",
  );
  KanbanDefinition6JOO6SKY = {
    db: kanbanDefinition6JOO6SKYBinding13,
    renderer: kanbanDefinition6JOO6SKYBinding14,
    parser: kanbanDefinition6JOO6SKYBinding2,
    styles: defineFunctionName(
      (kanbanDefinition6JOO6SKYInput28) => `
  .edge {
    stroke-width: 3;
  }
  ${kanbanDefinition6JOO6SKYBinding15(kanbanDefinition6JOO6SKYInput28)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${kanbanDefinition6JOO6SKYInput28.git0};
  }
  .section-root text {
    fill: ${kanbanDefinition6JOO6SKYInput28.gitBranchLabel0};
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
    color: ${kanbanDefinition6JOO6SKYInput28.textColor};
    fill: ${kanbanDefinition6JOO6SKYInput28.textColor};
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
export { KanbanDefinition6JOO6SKY as diagram };
