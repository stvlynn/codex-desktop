// Restored from ref/webview/assets/mindmap-definition-QFDTVHPH-BzN2UeBm.js
// Mermaid mindmap diagram definition (alt). app-initial lrt/srt → uuid v4 + ensureUuidRuntime.
// Stage 3 candidate: app-initial aliases → vendor shims; auto-renamed export→local.
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
  v4 as appInitialLrt,
  ensureUuidRuntime as appInitialSrt,
} from "../../vendor/uuid";
import {
  c as distC,
  d as distD,
  p as distP,
  t as distT,
} from "../../vendor/khroma";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  O as chunkICPOFSXXO,
  R as chunkICPOFSXXR,
  b as chunkICPOFSXXB,
  d as chunkICPOFSXXD,
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA as chunkU2HBQHQKI } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk as chunkBSJP7CBPR } from "../../diagrams/line-offset-helpers-alt";
import { initSubGraphTitleMarginsAlt as chunkZZ45TVLER } from "../../diagrams/subgraph-title-margins-alt";
import { initGetDiagramElementChunk as chunk55IACEB6N, getDiagramElement as chunk55IACEB6T } from "../../diagrams/get-diagram-element-alt";
import { setupViewPortForSVG as chunkEDXVE4YYN, initSetupViewPortForSvgChunk as chunkEDXVE4YYT } from "../../diagrams/setup-viewport-for-svg-alt";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import { chunk5FUZZQ4RI } from "./mermaid-flowchart-nodes-alt";
import { chunkENJZ2VHEN } from "./mermaid-flowchart-edges-alt";
import {
  chunk336JU56OI,
  chunk336JU56ON,
  chunk336JU56OT,
} from "../../diagrams/mermaid-layout-loaders-alt";
var mindmapDefinitionQFDTVHPHBinding1,
  mindmapDefinitionQFDTVHPHBinding2,
  mindmapDefinitionQFDTVHPHBinding3,
  mindmapDefinitionQFDTVHPHBinding4,
  mindmapDefinitionQFDTVHPHBinding5,
  mindmapDefinitionQFDTVHPHBinding6,
  mindmapDefinitionQFDTVHPHBinding7,
  mindmapDefinitionQFDTVHPHBinding8,
  MindmapDefinitionQFDTVHPH;
esmInit(() => {
  chunk55IACEB6N();
  chunkEDXVE4YYT();
  chunk336JU56ON();
  chunkENJZ2VHEN();
  chunkBSJP7CBPR();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKI();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  appInitialSrt();
  distT();
  mindmapDefinitionQFDTVHPHBinding1 = (function () {
    var mindmapDefinitionQFDTVHPHBinding9 = chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHInput48,
        mindmapDefinitionQFDTVHPHInput49,
        mindmapDefinitionQFDTVHPHInput50,
        mindmapDefinitionQFDTVHPHInput51,
      ) {
        for (
          mindmapDefinitionQFDTVHPHInput50 ||= {},
            mindmapDefinitionQFDTVHPHInput51 =
              mindmapDefinitionQFDTVHPHInput48.length;
          mindmapDefinitionQFDTVHPHInput51--;
          mindmapDefinitionQFDTVHPHInput50[
            mindmapDefinitionQFDTVHPHInput48[mindmapDefinitionQFDTVHPHInput51]
          ] = mindmapDefinitionQFDTVHPHInput49
        );
        return mindmapDefinitionQFDTVHPHInput50;
      }, "o"),
      mindmapDefinitionQFDTVHPHBinding10 = [1, 4],
      mindmapDefinitionQFDTVHPHBinding11 = [1, 13],
      mindmapDefinitionQFDTVHPHBinding12 = [1, 12],
      mindmapDefinitionQFDTVHPHBinding13 = [1, 15],
      mindmapDefinitionQFDTVHPHBinding14 = [1, 16],
      mindmapDefinitionQFDTVHPHBinding15 = [1, 20],
      mindmapDefinitionQFDTVHPHBinding16 = [1, 19],
      mindmapDefinitionQFDTVHPHBinding17 = [6, 7, 8],
      mindmapDefinitionQFDTVHPHBinding18 = [1, 26],
      mindmapDefinitionQFDTVHPHBinding19 = [1, 24],
      mindmapDefinitionQFDTVHPHBinding20 = [1, 25],
      mindmapDefinitionQFDTVHPHBinding21 = [6, 7, 11],
      mindmapDefinitionQFDTVHPHBinding22 = [1, 6, 13, 15, 16, 19, 22],
      mindmapDefinitionQFDTVHPHBinding23 = [1, 33],
      mindmapDefinitionQFDTVHPHBinding24 = [1, 34],
      mindmapDefinitionQFDTVHPHBinding25 = [1, 6, 7, 11, 13, 15, 16, 19, 22],
      mindmapDefinitionQFDTVHPHBinding26 = {
        trace: chunkAGHRB4JFN(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          mindMap: 4,
          spaceLines: 5,
          SPACELINE: 6,
          NL: 7,
          MINDMAP: 8,
          document: 9,
          stop: 10,
          EOF: 11,
          statement: 12,
          SPACELIST: 13,
          node: 14,
          ICON: 15,
          CLASS: 16,
          nodeWithId: 17,
          nodeWithoutId: 18,
          NODE_DSTART: 19,
          NODE_DESCR: 20,
          NODE_DEND: 21,
          NODE_ID: 22,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          6: "SPACELINE",
          7: "NL",
          8: "MINDMAP",
          11: "EOF",
          13: "SPACELIST",
          15: "ICON",
          16: "CLASS",
          19: "NODE_DSTART",
          20: "NODE_DESCR",
          21: "NODE_DEND",
          22: "NODE_ID",
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
          [12, 2],
          [12, 2],
          [12, 2],
          [12, 1],
          [12, 1],
          [12, 1],
          [12, 1],
          [12, 1],
          [14, 1],
          [14, 1],
          [18, 3],
          [17, 1],
          [17, 4],
        ],
        performAction: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput8,
          mindmapDefinitionQFDTVHPHInput9,
          mindmapDefinitionQFDTVHPHInput10,
          mindmapDefinitionQFDTVHPHInput11,
          mindmapDefinitionQFDTVHPHInput12,
          mindmapDefinitionQFDTVHPHInput13,
          mindmapDefinitionQFDTVHPHInput14,
        ) {
          var mindmapDefinitionQFDTVHPHBinding60 =
            mindmapDefinitionQFDTVHPHInput13.length - 1;
          switch (mindmapDefinitionQFDTVHPHInput12) {
            case 6:
            case 7:
              return mindmapDefinitionQFDTVHPHInput11;
            case 8:
              mindmapDefinitionQFDTVHPHInput11.getLogger().trace("Stop NL ");
              break;
            case 9:
              mindmapDefinitionQFDTVHPHInput11.getLogger().trace("Stop EOF ");
              break;
            case 11:
              mindmapDefinitionQFDTVHPHInput11.getLogger().trace("Stop NL2 ");
              break;
            case 12:
              mindmapDefinitionQFDTVHPHInput11.getLogger().trace("Stop EOF2 ");
              break;
            case 15:
              mindmapDefinitionQFDTVHPHInput11
                .getLogger()
                .info(
                  "Node: ",
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ].id,
                );
              mindmapDefinitionQFDTVHPHInput11.addNode(
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60 - 1
                ].length,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].id,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].descr,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].type,
              );
              break;
            case 16:
              mindmapDefinitionQFDTVHPHInput11
                .getLogger()
                .trace(
                  "Icon: ",
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ],
                );
              mindmapDefinitionQFDTVHPHInput11.decorateNode({
                icon: mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ],
              });
              break;
            case 17:
            case 21:
              mindmapDefinitionQFDTVHPHInput11.decorateNode({
                class:
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ],
              });
              break;
            case 18:
              mindmapDefinitionQFDTVHPHInput11.getLogger().trace("SPACELIST");
              break;
            case 19:
              mindmapDefinitionQFDTVHPHInput11
                .getLogger()
                .trace(
                  "Node: ",
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ].id,
                );
              mindmapDefinitionQFDTVHPHInput11.addNode(
                0,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].id,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].descr,
                mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ].type,
              );
              break;
            case 20:
              mindmapDefinitionQFDTVHPHInput11.decorateNode({
                icon: mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ],
              });
              break;
            case 25:
              mindmapDefinitionQFDTVHPHInput11
                .getLogger()
                .trace(
                  "node found ..",
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 2
                  ],
                );
              this.$ = {
                id: mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60 - 1
                ],
                descr:
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 1
                  ],
                type: mindmapDefinitionQFDTVHPHInput11.getType(
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 2
                  ],
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ],
                ),
              };
              break;
            case 26:
              this.$ = {
                id: mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60
                ],
                descr:
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ],
                type: mindmapDefinitionQFDTVHPHInput11.nodeType.DEFAULT,
              };
              break;
            case 27:
              mindmapDefinitionQFDTVHPHInput11
                .getLogger()
                .trace(
                  "node found ..",
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 3
                  ],
                );
              this.$ = {
                id: mindmapDefinitionQFDTVHPHInput13[
                  mindmapDefinitionQFDTVHPHBinding60 - 3
                ],
                descr:
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 1
                  ],
                type: mindmapDefinitionQFDTVHPHInput11.getType(
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60 - 2
                  ],
                  mindmapDefinitionQFDTVHPHInput13[
                    mindmapDefinitionQFDTVHPHBinding60
                  ],
                ),
              };
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            5: 3,
            6: [1, 5],
            8: mindmapDefinitionQFDTVHPHBinding10,
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
            8: mindmapDefinitionQFDTVHPHBinding10,
          },
          {
            6: mindmapDefinitionQFDTVHPHBinding11,
            7: [1, 10],
            9: 9,
            12: 11,
            13: mindmapDefinitionQFDTVHPHBinding12,
            14: 14,
            15: mindmapDefinitionQFDTVHPHBinding13,
            16: mindmapDefinitionQFDTVHPHBinding14,
            17: 17,
            18: 18,
            19: mindmapDefinitionQFDTVHPHBinding15,
            22: mindmapDefinitionQFDTVHPHBinding16,
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding17,
            [2, 3],
          ),
          {
            1: [2, 2],
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding17,
            [2, 4],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding17,
            [2, 5],
          ),
          {
            1: [2, 6],
            6: mindmapDefinitionQFDTVHPHBinding11,
            12: 21,
            13: mindmapDefinitionQFDTVHPHBinding12,
            14: 14,
            15: mindmapDefinitionQFDTVHPHBinding13,
            16: mindmapDefinitionQFDTVHPHBinding14,
            17: 17,
            18: 18,
            19: mindmapDefinitionQFDTVHPHBinding15,
            22: mindmapDefinitionQFDTVHPHBinding16,
          },
          {
            6: mindmapDefinitionQFDTVHPHBinding11,
            9: 22,
            12: 11,
            13: mindmapDefinitionQFDTVHPHBinding12,
            14: 14,
            15: mindmapDefinitionQFDTVHPHBinding13,
            16: mindmapDefinitionQFDTVHPHBinding14,
            17: 17,
            18: 18,
            19: mindmapDefinitionQFDTVHPHBinding15,
            22: mindmapDefinitionQFDTVHPHBinding16,
          },
          {
            6: mindmapDefinitionQFDTVHPHBinding18,
            7: mindmapDefinitionQFDTVHPHBinding19,
            10: 23,
            11: mindmapDefinitionQFDTVHPHBinding20,
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 22],
            {
              17: 17,
              18: 18,
              14: 27,
              15: [1, 28],
              16: [1, 29],
              19: mindmapDefinitionQFDTVHPHBinding15,
              22: mindmapDefinitionQFDTVHPHBinding16,
            },
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 18],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 19],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 20],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 21],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 23],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 24],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 26],
            {
              19: [1, 30],
            },
          ),
          {
            20: [1, 31],
          },
          {
            6: mindmapDefinitionQFDTVHPHBinding18,
            7: mindmapDefinitionQFDTVHPHBinding19,
            10: 32,
            11: mindmapDefinitionQFDTVHPHBinding20,
          },
          {
            1: [2, 7],
            6: mindmapDefinitionQFDTVHPHBinding11,
            12: 21,
            13: mindmapDefinitionQFDTVHPHBinding12,
            14: 14,
            15: mindmapDefinitionQFDTVHPHBinding13,
            16: mindmapDefinitionQFDTVHPHBinding14,
            17: 17,
            18: 18,
            19: mindmapDefinitionQFDTVHPHBinding15,
            22: mindmapDefinitionQFDTVHPHBinding16,
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding22,
            [2, 14],
            {
              7: mindmapDefinitionQFDTVHPHBinding23,
              11: mindmapDefinitionQFDTVHPHBinding24,
            },
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding25,
            [2, 8],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding25,
            [2, 9],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding25,
            [2, 10],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 15],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 16],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 17],
          ),
          {
            20: [1, 35],
          },
          {
            21: [1, 36],
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding22,
            [2, 13],
            {
              7: mindmapDefinitionQFDTVHPHBinding23,
              11: mindmapDefinitionQFDTVHPHBinding24,
            },
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding25,
            [2, 11],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding25,
            [2, 12],
          ),
          {
            21: [1, 37],
          },
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 25],
          ),
          mindmapDefinitionQFDTVHPHBinding9(
            mindmapDefinitionQFDTVHPHBinding21,
            [2, 27],
          ),
        ],
        defaultActions: {
          2: [2, 1],
          6: [2, 2],
        },
        parseError: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput43,
          mindmapDefinitionQFDTVHPHInput44,
        ) {
          if (mindmapDefinitionQFDTVHPHInput44.recoverable)
            this.trace(mindmapDefinitionQFDTVHPHInput43);
          else {
            var mindmapDefinitionQFDTVHPHBinding115 = Error(
              mindmapDefinitionQFDTVHPHInput43,
            );
            throw (
              (mindmapDefinitionQFDTVHPHBinding115.hash =
                mindmapDefinitionQFDTVHPHInput44),
              mindmapDefinitionQFDTVHPHBinding115
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput1) {
          var mindmapDefinitionQFDTVHPHBinding27 = this,
            mindmapDefinitionQFDTVHPHBinding28 = [0],
            mindmapDefinitionQFDTVHPHBinding29 = [],
            mindmapDefinitionQFDTVHPHBinding30 = [null],
            mindmapDefinitionQFDTVHPHBinding31 = [],
            mindmapDefinitionQFDTVHPHBinding32 = this.table,
            mindmapDefinitionQFDTVHPHBinding33 = "",
            mindmapDefinitionQFDTVHPHBinding34 = 0,
            mindmapDefinitionQFDTVHPHBinding35 = 0,
            mindmapDefinitionQFDTVHPHBinding36 = 0,
            mindmapDefinitionQFDTVHPHBinding39 =
              mindmapDefinitionQFDTVHPHBinding31.slice.call(arguments, 1),
            mindmapDefinitionQFDTVHPHBinding40 = Object.create(this.lexer),
            mindmapDefinitionQFDTVHPHBinding41 = {
              yy: {},
            };
          for (var mindmapDefinitionQFDTVHPHBinding42 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              mindmapDefinitionQFDTVHPHBinding42,
            ) &&
              (mindmapDefinitionQFDTVHPHBinding41.yy[
                mindmapDefinitionQFDTVHPHBinding42
              ] = this.yy[mindmapDefinitionQFDTVHPHBinding42]);
          mindmapDefinitionQFDTVHPHBinding40.setInput(
            mindmapDefinitionQFDTVHPHInput1,
            mindmapDefinitionQFDTVHPHBinding41.yy,
          );
          mindmapDefinitionQFDTVHPHBinding41.yy.lexer =
            mindmapDefinitionQFDTVHPHBinding40;
          mindmapDefinitionQFDTVHPHBinding41.yy.parser = this;
          mindmapDefinitionQFDTVHPHBinding40.yylloc === undefined &&
            (mindmapDefinitionQFDTVHPHBinding40.yylloc = {});
          var mindmapDefinitionQFDTVHPHBinding43 =
            mindmapDefinitionQFDTVHPHBinding40.yylloc;
          mindmapDefinitionQFDTVHPHBinding31.push(
            mindmapDefinitionQFDTVHPHBinding43,
          );
          var mindmapDefinitionQFDTVHPHBinding44 =
            mindmapDefinitionQFDTVHPHBinding40.options &&
            mindmapDefinitionQFDTVHPHBinding40.options.ranges;
          typeof mindmapDefinitionQFDTVHPHBinding41.yy.parseError == "function"
            ? (this.parseError =
                mindmapDefinitionQFDTVHPHBinding41.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function mindmapDefinitionQFDTVHPHHelper2(
            mindmapDefinitionQFDTVHPHInput52,
          ) {
            mindmapDefinitionQFDTVHPHBinding28.length -=
              2 * mindmapDefinitionQFDTVHPHInput52;
            mindmapDefinitionQFDTVHPHBinding30.length -=
              mindmapDefinitionQFDTVHPHInput52;
            mindmapDefinitionQFDTVHPHBinding31.length -=
              mindmapDefinitionQFDTVHPHInput52;
          }
          chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper2, "popStack");
          function mindmapDefinitionQFDTVHPHHelper3() {
            var mindmapDefinitionQFDTVHPHBinding108 =
              mindmapDefinitionQFDTVHPHBinding29.pop() ||
              mindmapDefinitionQFDTVHPHBinding40.lex() ||
              1;
            return (
              typeof mindmapDefinitionQFDTVHPHBinding108 != "number" &&
                (mindmapDefinitionQFDTVHPHBinding108 instanceof Array &&
                  ((mindmapDefinitionQFDTVHPHBinding29 =
                    mindmapDefinitionQFDTVHPHBinding108),
                  (mindmapDefinitionQFDTVHPHBinding108 =
                    mindmapDefinitionQFDTVHPHBinding29.pop())),
                (mindmapDefinitionQFDTVHPHBinding108 =
                  mindmapDefinitionQFDTVHPHBinding27.symbols_[
                    mindmapDefinitionQFDTVHPHBinding108
                  ] || mindmapDefinitionQFDTVHPHBinding108)),
              mindmapDefinitionQFDTVHPHBinding108
            );
          }
          chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper3, "lex");
          for (
            var mindmapDefinitionQFDTVHPHBinding45,
              mindmapDefinitionQFDTVHPHBinding46,
              mindmapDefinitionQFDTVHPHBinding47,
              mindmapDefinitionQFDTVHPHBinding48,
              mindmapDefinitionQFDTVHPHBinding49,
              mindmapDefinitionQFDTVHPHBinding50 = {},
              mindmapDefinitionQFDTVHPHBinding51,
              mindmapDefinitionQFDTVHPHBinding52,
              mindmapDefinitionQFDTVHPHBinding53,
              mindmapDefinitionQFDTVHPHBinding54;
            ;
          ) {
            if (
              ((mindmapDefinitionQFDTVHPHBinding47 =
                mindmapDefinitionQFDTVHPHBinding28[
                  mindmapDefinitionQFDTVHPHBinding28.length - 1
                ]),
              this.defaultActions[mindmapDefinitionQFDTVHPHBinding47]
                ? (mindmapDefinitionQFDTVHPHBinding48 =
                    this.defaultActions[mindmapDefinitionQFDTVHPHBinding47])
                : ((mindmapDefinitionQFDTVHPHBinding45 ??=
                    mindmapDefinitionQFDTVHPHHelper3()),
                  (mindmapDefinitionQFDTVHPHBinding48 =
                    mindmapDefinitionQFDTVHPHBinding32[
                      mindmapDefinitionQFDTVHPHBinding47
                    ] &&
                    mindmapDefinitionQFDTVHPHBinding32[
                      mindmapDefinitionQFDTVHPHBinding47
                    ][mindmapDefinitionQFDTVHPHBinding45])),
              mindmapDefinitionQFDTVHPHBinding48 === undefined ||
                !mindmapDefinitionQFDTVHPHBinding48.length ||
                !mindmapDefinitionQFDTVHPHBinding48[0])
            ) {
              var mindmapDefinitionQFDTVHPHBinding55 = "";
              for (mindmapDefinitionQFDTVHPHBinding51 in ((mindmapDefinitionQFDTVHPHBinding54 =
                []),
              mindmapDefinitionQFDTVHPHBinding32[
                mindmapDefinitionQFDTVHPHBinding47
              ]))
                this.terminals_[mindmapDefinitionQFDTVHPHBinding51] &&
                  mindmapDefinitionQFDTVHPHBinding51 > 2 &&
                  mindmapDefinitionQFDTVHPHBinding54.push(
                    "'" +
                      this.terminals_[mindmapDefinitionQFDTVHPHBinding51] +
                      "'",
                  );
              mindmapDefinitionQFDTVHPHBinding55 =
                mindmapDefinitionQFDTVHPHBinding40.showPosition
                  ? "Parse error on line " +
                    (mindmapDefinitionQFDTVHPHBinding34 + 1) +
                    ":\n" +
                    mindmapDefinitionQFDTVHPHBinding40.showPosition() +
                    "\nExpecting " +
                    mindmapDefinitionQFDTVHPHBinding54.join(", ") +
                    ", got '" +
                    (this.terminals_[mindmapDefinitionQFDTVHPHBinding45] ||
                      mindmapDefinitionQFDTVHPHBinding45) +
                    "'"
                  : "Parse error on line " +
                    (mindmapDefinitionQFDTVHPHBinding34 + 1) +
                    ": Unexpected " +
                    (mindmapDefinitionQFDTVHPHBinding45 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[mindmapDefinitionQFDTVHPHBinding45] ||
                          mindmapDefinitionQFDTVHPHBinding45) +
                        "'");
              this.parseError(mindmapDefinitionQFDTVHPHBinding55, {
                text: mindmapDefinitionQFDTVHPHBinding40.match,
                token:
                  this.terminals_[mindmapDefinitionQFDTVHPHBinding45] ||
                  mindmapDefinitionQFDTVHPHBinding45,
                line: mindmapDefinitionQFDTVHPHBinding40.yylineno,
                loc: mindmapDefinitionQFDTVHPHBinding43,
                expected: mindmapDefinitionQFDTVHPHBinding54,
              });
            }
            if (
              mindmapDefinitionQFDTVHPHBinding48[0] instanceof Array &&
              mindmapDefinitionQFDTVHPHBinding48.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  mindmapDefinitionQFDTVHPHBinding47 +
                  ", token: " +
                  mindmapDefinitionQFDTVHPHBinding45,
              );
            switch (mindmapDefinitionQFDTVHPHBinding48[0]) {
              case 1:
                mindmapDefinitionQFDTVHPHBinding28.push(
                  mindmapDefinitionQFDTVHPHBinding45,
                );
                mindmapDefinitionQFDTVHPHBinding30.push(
                  mindmapDefinitionQFDTVHPHBinding40.yytext,
                );
                mindmapDefinitionQFDTVHPHBinding31.push(
                  mindmapDefinitionQFDTVHPHBinding40.yylloc,
                );
                mindmapDefinitionQFDTVHPHBinding28.push(
                  mindmapDefinitionQFDTVHPHBinding48[1],
                );
                mindmapDefinitionQFDTVHPHBinding45 = null;
                mindmapDefinitionQFDTVHPHBinding46
                  ? ((mindmapDefinitionQFDTVHPHBinding45 =
                      mindmapDefinitionQFDTVHPHBinding46),
                    (mindmapDefinitionQFDTVHPHBinding46 = null))
                  : ((mindmapDefinitionQFDTVHPHBinding35 =
                      mindmapDefinitionQFDTVHPHBinding40.yyleng),
                    (mindmapDefinitionQFDTVHPHBinding33 =
                      mindmapDefinitionQFDTVHPHBinding40.yytext),
                    (mindmapDefinitionQFDTVHPHBinding34 =
                      mindmapDefinitionQFDTVHPHBinding40.yylineno),
                    (mindmapDefinitionQFDTVHPHBinding43 =
                      mindmapDefinitionQFDTVHPHBinding40.yylloc),
                    mindmapDefinitionQFDTVHPHBinding36 > 0 &&
                      mindmapDefinitionQFDTVHPHBinding36--);
                break;
              case 2:
                if (
                  ((mindmapDefinitionQFDTVHPHBinding52 =
                    this.productions_[
                      mindmapDefinitionQFDTVHPHBinding48[1]
                    ][1]),
                  (mindmapDefinitionQFDTVHPHBinding50.$ =
                    mindmapDefinitionQFDTVHPHBinding30[
                      mindmapDefinitionQFDTVHPHBinding30.length -
                        mindmapDefinitionQFDTVHPHBinding52
                    ]),
                  (mindmapDefinitionQFDTVHPHBinding50._$ = {
                    first_line:
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length -
                          (mindmapDefinitionQFDTVHPHBinding52 || 1)
                      ].first_line,
                    last_line:
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length - 1
                      ].last_line,
                    first_column:
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length -
                          (mindmapDefinitionQFDTVHPHBinding52 || 1)
                      ].first_column,
                    last_column:
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length - 1
                      ].last_column,
                  }),
                  mindmapDefinitionQFDTVHPHBinding44 &&
                    (mindmapDefinitionQFDTVHPHBinding50._$.range = [
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length -
                          (mindmapDefinitionQFDTVHPHBinding52 || 1)
                      ].range[0],
                      mindmapDefinitionQFDTVHPHBinding31[
                        mindmapDefinitionQFDTVHPHBinding31.length - 1
                      ].range[1],
                    ]),
                  (mindmapDefinitionQFDTVHPHBinding49 =
                    this.performAction.apply(
                      mindmapDefinitionQFDTVHPHBinding50,
                      [
                        mindmapDefinitionQFDTVHPHBinding33,
                        mindmapDefinitionQFDTVHPHBinding35,
                        mindmapDefinitionQFDTVHPHBinding34,
                        mindmapDefinitionQFDTVHPHBinding41.yy,
                        mindmapDefinitionQFDTVHPHBinding48[1],
                        mindmapDefinitionQFDTVHPHBinding30,
                        mindmapDefinitionQFDTVHPHBinding31,
                      ].concat(mindmapDefinitionQFDTVHPHBinding39),
                    )),
                  mindmapDefinitionQFDTVHPHBinding49 !== undefined)
                )
                  return mindmapDefinitionQFDTVHPHBinding49;
                mindmapDefinitionQFDTVHPHBinding52 &&
                  ((mindmapDefinitionQFDTVHPHBinding28 =
                    mindmapDefinitionQFDTVHPHBinding28.slice(
                      0,
                      -1 * mindmapDefinitionQFDTVHPHBinding52 * 2,
                    )),
                  (mindmapDefinitionQFDTVHPHBinding30 =
                    mindmapDefinitionQFDTVHPHBinding30.slice(
                      0,
                      -1 * mindmapDefinitionQFDTVHPHBinding52,
                    )),
                  (mindmapDefinitionQFDTVHPHBinding31 =
                    mindmapDefinitionQFDTVHPHBinding31.slice(
                      0,
                      -1 * mindmapDefinitionQFDTVHPHBinding52,
                    )));
                mindmapDefinitionQFDTVHPHBinding28.push(
                  this.productions_[mindmapDefinitionQFDTVHPHBinding48[1]][0],
                );
                mindmapDefinitionQFDTVHPHBinding30.push(
                  mindmapDefinitionQFDTVHPHBinding50.$,
                );
                mindmapDefinitionQFDTVHPHBinding31.push(
                  mindmapDefinitionQFDTVHPHBinding50._$,
                );
                mindmapDefinitionQFDTVHPHBinding53 =
                  mindmapDefinitionQFDTVHPHBinding32[
                    mindmapDefinitionQFDTVHPHBinding28[
                      mindmapDefinitionQFDTVHPHBinding28.length - 2
                    ]
                  ][
                    mindmapDefinitionQFDTVHPHBinding28[
                      mindmapDefinitionQFDTVHPHBinding28.length - 1
                    ]
                  ];
                mindmapDefinitionQFDTVHPHBinding28.push(
                  mindmapDefinitionQFDTVHPHBinding53,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    mindmapDefinitionQFDTVHPHBinding26.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput46,
          mindmapDefinitionQFDTVHPHInput47,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              mindmapDefinitionQFDTVHPHInput46,
              mindmapDefinitionQFDTVHPHInput47,
            );
          else throw Error(mindmapDefinitionQFDTVHPHInput46);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput31,
          mindmapDefinitionQFDTVHPHInput32,
        ) {
          return (
            (this.yy = mindmapDefinitionQFDTVHPHInput32 || this.yy || {}),
            (this._input = mindmapDefinitionQFDTVHPHInput31),
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
        input: chunkAGHRB4JFN(function () {
          var mindmapDefinitionQFDTVHPHBinding104 = this._input[0];
          return (
            (this.yytext += mindmapDefinitionQFDTVHPHBinding104),
            this.yyleng++,
            this.offset++,
            (this.match += mindmapDefinitionQFDTVHPHBinding104),
            (this.matched += mindmapDefinitionQFDTVHPHBinding104),
            mindmapDefinitionQFDTVHPHBinding104.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            mindmapDefinitionQFDTVHPHBinding104
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput23) {
          var mindmapDefinitionQFDTVHPHBinding80 =
              mindmapDefinitionQFDTVHPHInput23.length,
            mindmapDefinitionQFDTVHPHBinding81 =
              mindmapDefinitionQFDTVHPHInput23.split(/(?:\r\n?|\n)/g);
          this._input = mindmapDefinitionQFDTVHPHInput23 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - mindmapDefinitionQFDTVHPHBinding80,
          );
          this.offset -= mindmapDefinitionQFDTVHPHBinding80;
          var mindmapDefinitionQFDTVHPHBinding82 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          mindmapDefinitionQFDTVHPHBinding81.length - 1 &&
            (this.yylineno -= mindmapDefinitionQFDTVHPHBinding81.length - 1);
          var mindmapDefinitionQFDTVHPHBinding83 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: mindmapDefinitionQFDTVHPHBinding81
                ? (mindmapDefinitionQFDTVHPHBinding81.length ===
                  mindmapDefinitionQFDTVHPHBinding82.length
                    ? this.yylloc.first_column
                    : 0) +
                  mindmapDefinitionQFDTVHPHBinding82[
                    mindmapDefinitionQFDTVHPHBinding82.length -
                      mindmapDefinitionQFDTVHPHBinding81.length
                  ].length -
                  mindmapDefinitionQFDTVHPHBinding81[0].length
                : this.yylloc.first_column - mindmapDefinitionQFDTVHPHBinding80,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                mindmapDefinitionQFDTVHPHBinding83[0],
                mindmapDefinitionQFDTVHPHBinding83[0] +
                  this.yyleng -
                  mindmapDefinitionQFDTVHPHBinding80,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: chunkAGHRB4JFN(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: chunkAGHRB4JFN(function () {
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
        less: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput53) {
          this.unput(this.match.slice(mindmapDefinitionQFDTVHPHInput53));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var mindmapDefinitionQFDTVHPHBinding110 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (mindmapDefinitionQFDTVHPHBinding110.length > 20 ? "..." : "") +
            mindmapDefinitionQFDTVHPHBinding110.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var mindmapDefinitionQFDTVHPHBinding107 = this.match;
          return (
            mindmapDefinitionQFDTVHPHBinding107.length < 20 &&
              (mindmapDefinitionQFDTVHPHBinding107 += this._input.substr(
                0,
                20 - mindmapDefinitionQFDTVHPHBinding107.length,
              )),
            (
              mindmapDefinitionQFDTVHPHBinding107.substr(0, 20) +
              (mindmapDefinitionQFDTVHPHBinding107.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var mindmapDefinitionQFDTVHPHBinding111 = this.pastInput(),
            mindmapDefinitionQFDTVHPHBinding112 = Array(
              mindmapDefinitionQFDTVHPHBinding111.length + 1,
            ).join("-");
          return (
            mindmapDefinitionQFDTVHPHBinding111 +
            this.upcomingInput() +
            "\n" +
            mindmapDefinitionQFDTVHPHBinding112 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput6,
          mindmapDefinitionQFDTVHPHInput7,
        ) {
          var mindmapDefinitionQFDTVHPHBinding56,
            mindmapDefinitionQFDTVHPHBinding57,
            mindmapDefinitionQFDTVHPHBinding58;
          if (
            (this.options.backtrack_lexer &&
              ((mindmapDefinitionQFDTVHPHBinding58 = {
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
                (mindmapDefinitionQFDTVHPHBinding58.yylloc.range =
                  this.yylloc.range.slice(0))),
            (mindmapDefinitionQFDTVHPHBinding57 =
              mindmapDefinitionQFDTVHPHInput6[0].match(/(?:\r\n?|\n).*/g)),
            mindmapDefinitionQFDTVHPHBinding57 &&
              (this.yylineno += mindmapDefinitionQFDTVHPHBinding57.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: mindmapDefinitionQFDTVHPHBinding57
                ? mindmapDefinitionQFDTVHPHBinding57[
                    mindmapDefinitionQFDTVHPHBinding57.length - 1
                  ].length -
                  mindmapDefinitionQFDTVHPHBinding57[
                    mindmapDefinitionQFDTVHPHBinding57.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  mindmapDefinitionQFDTVHPHInput6[0].length,
            }),
            (this.yytext += mindmapDefinitionQFDTVHPHInput6[0]),
            (this.match += mindmapDefinitionQFDTVHPHInput6[0]),
            (this.matches = mindmapDefinitionQFDTVHPHInput6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              mindmapDefinitionQFDTVHPHInput6[0].length,
            )),
            (this.matched += mindmapDefinitionQFDTVHPHInput6[0]),
            (mindmapDefinitionQFDTVHPHBinding56 = this.performAction.call(
              this,
              this.yy,
              this,
              mindmapDefinitionQFDTVHPHInput7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            mindmapDefinitionQFDTVHPHBinding56)
          )
            return mindmapDefinitionQFDTVHPHBinding56;
          if (this._backtrack) {
            for (var mindmapDefinitionQFDTVHPHBinding59 in mindmapDefinitionQFDTVHPHBinding58)
              this[mindmapDefinitionQFDTVHPHBinding59] =
                mindmapDefinitionQFDTVHPHBinding58[
                  mindmapDefinitionQFDTVHPHBinding59
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var mindmapDefinitionQFDTVHPHBinding74,
            mindmapDefinitionQFDTVHPHBinding75,
            mindmapDefinitionQFDTVHPHBinding76,
            mindmapDefinitionQFDTVHPHBinding77;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var mindmapDefinitionQFDTVHPHBinding78 = this._currentRules(),
              mindmapDefinitionQFDTVHPHBinding79 = 0;
            mindmapDefinitionQFDTVHPHBinding79 <
            mindmapDefinitionQFDTVHPHBinding78.length;
            mindmapDefinitionQFDTVHPHBinding79++
          )
            if (
              ((mindmapDefinitionQFDTVHPHBinding76 = this._input.match(
                this.rules[
                  mindmapDefinitionQFDTVHPHBinding78[
                    mindmapDefinitionQFDTVHPHBinding79
                  ]
                ],
              )),
              mindmapDefinitionQFDTVHPHBinding76 &&
                (!mindmapDefinitionQFDTVHPHBinding75 ||
                  mindmapDefinitionQFDTVHPHBinding76[0].length >
                    mindmapDefinitionQFDTVHPHBinding75[0].length))
            ) {
              if (
                ((mindmapDefinitionQFDTVHPHBinding75 =
                  mindmapDefinitionQFDTVHPHBinding76),
                (mindmapDefinitionQFDTVHPHBinding77 =
                  mindmapDefinitionQFDTVHPHBinding79),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((mindmapDefinitionQFDTVHPHBinding74 = this.test_match(
                    mindmapDefinitionQFDTVHPHBinding76,
                    mindmapDefinitionQFDTVHPHBinding78[
                      mindmapDefinitionQFDTVHPHBinding79
                    ],
                  )),
                  mindmapDefinitionQFDTVHPHBinding74 !== false)
                )
                  return mindmapDefinitionQFDTVHPHBinding74;
                if (this._backtrack) {
                  mindmapDefinitionQFDTVHPHBinding75 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return mindmapDefinitionQFDTVHPHBinding75
            ? ((mindmapDefinitionQFDTVHPHBinding74 = this.test_match(
                mindmapDefinitionQFDTVHPHBinding75,
                mindmapDefinitionQFDTVHPHBinding78[
                  mindmapDefinitionQFDTVHPHBinding77
                ],
              )),
              mindmapDefinitionQFDTVHPHBinding74 === false
                ? false
                : mindmapDefinitionQFDTVHPHBinding74)
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
        lex: chunkAGHRB4JFN(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput54) {
          this.conditionStack.push(mindmapDefinitionQFDTVHPHInput54);
        }, "begin"),
        popState: chunkAGHRB4JFN(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: chunkAGHRB4JFN(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput42) {
          return (
            (mindmapDefinitionQFDTVHPHInput42 =
              this.conditionStack.length -
              1 -
              Math.abs(mindmapDefinitionQFDTVHPHInput42 || 0)),
            mindmapDefinitionQFDTVHPHInput42 >= 0
              ? this.conditionStack[mindmapDefinitionQFDTVHPHInput42]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHInput58) {
          this.begin(mindmapDefinitionQFDTVHPHInput58);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          mindmapDefinitionQFDTVHPHInput2,
          mindmapDefinitionQFDTVHPHInput3,
          mindmapDefinitionQFDTVHPHInput4,
          mindmapDefinitionQFDTVHPHInput5,
        ) {
          switch (mindmapDefinitionQFDTVHPHInput4) {
            case 0:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace(
                    "Found comment",
                    mindmapDefinitionQFDTVHPHInput3.yytext,
                  ),
                6
              );
            case 1:
              return 8;
            case 2:
              this.begin("CLASS");
              break;
            case 3:
              return (this.popState(), 16);
            case 4:
              this.popState();
              break;
            case 5:
              mindmapDefinitionQFDTVHPHInput2.getLogger().trace("Begin icon");
              this.begin("ICON");
              break;
            case 6:
              return (
                mindmapDefinitionQFDTVHPHInput2.getLogger().trace("SPACELINE"),
                6
              );
            case 7:
              return 7;
            case 8:
              return 15;
            case 9:
              mindmapDefinitionQFDTVHPHInput2.getLogger().trace("end icon");
              this.popState();
              break;
            case 10:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("Exploding node"),
                this.begin("NODE"),
                19
              );
            case 11:
              return (
                mindmapDefinitionQFDTVHPHInput2.getLogger().trace("Cloud"),
                this.begin("NODE"),
                19
              );
            case 12:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("Explosion Bang"),
                this.begin("NODE"),
                19
              );
            case 13:
              return (
                mindmapDefinitionQFDTVHPHInput2.getLogger().trace("Cloud Bang"),
                this.begin("NODE"),
                19
              );
            case 14:
              return (this.begin("NODE"), 19);
            case 15:
              return (this.begin("NODE"), 19);
            case 16:
              return (this.begin("NODE"), 19);
            case 17:
              return (this.begin("NODE"), 19);
            case 18:
              return 13;
            case 19:
              return 22;
            case 20:
              return 11;
            case 21:
              this.begin("NSTR2");
              break;
            case 22:
              return "NODE_DESCR";
            case 23:
              this.popState();
              break;
            case 24:
              mindmapDefinitionQFDTVHPHInput2
                .getLogger()
                .trace("Starting NSTR");
              this.begin("NSTR");
              break;
            case 25:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace(
                    "description:",
                    mindmapDefinitionQFDTVHPHInput3.yytext,
                  ),
                "NODE_DESCR"
              );
            case 26:
              this.popState();
              break;
            case 27:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end ))"),
                "NODE_DEND"
              );
            case 28:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2.getLogger().trace("node end )"),
                "NODE_DEND"
              );
            case 29:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace(
                    "node end ...",
                    mindmapDefinitionQFDTVHPHInput3.yytext,
                  ),
                "NODE_DEND"
              );
            case 30:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 31:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end (-"),
                "NODE_DEND"
              );
            case 32:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end (-"),
                "NODE_DEND"
              );
            case 33:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 34:
              return (
                this.popState(),
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 35:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    mindmapDefinitionQFDTVHPHInput3.yytext,
                  ),
                20
              );
            case 36:
              return (
                mindmapDefinitionQFDTVHPHInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    mindmapDefinitionQFDTVHPHInput3.yytext,
                  ),
                20
              );
          }
        }, "anonymous"),
        rules: [
          /^(?:\s*%%.*)/i,
          /^(?:mindmap\b)/i,
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
          /^(?:[^\(\[\n\)\{\}]+)/i,
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
          CLASS: {
            rules: [3, 4],
            inclusive: false,
          },
          ICON: {
            rules: [8, 9],
            inclusive: false,
          },
          NSTR2: {
            rules: [22, 23],
            inclusive: false,
          },
          NSTR: {
            rules: [25, 26],
            inclusive: false,
          },
          NODE: {
            rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function mindmapDefinitionQFDTVHPHHelper1() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper1, "Parser"),
      (mindmapDefinitionQFDTVHPHHelper1.prototype =
        mindmapDefinitionQFDTVHPHBinding26),
      (mindmapDefinitionQFDTVHPHBinding26.Parser =
        mindmapDefinitionQFDTVHPHHelper1),
      new mindmapDefinitionQFDTVHPHHelper1()
    );
  })();
  mindmapDefinitionQFDTVHPHBinding1.parser = mindmapDefinitionQFDTVHPHBinding1;
  mindmapDefinitionQFDTVHPHBinding2 = mindmapDefinitionQFDTVHPHBinding1;
  mindmapDefinitionQFDTVHPHBinding3 = 12;
  mindmapDefinitionQFDTVHPHBinding4 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  };
  mindmapDefinitionQFDTVHPHBinding5 = class {
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = mindmapDefinitionQFDTVHPHBinding4;
      this.clear();
      this.getType = this.getType.bind(this);
      this.getElementById = this.getElementById.bind(this);
      this.getParent = this.getParent.bind(this);
      this.getMindmap = this.getMindmap.bind(this);
      this.addNode = this.addNode.bind(this);
      this.decorateNode = this.decorateNode.bind(this);
    }
    static {
      chunkAGHRB4JFN(this, "MindmapDB");
    }
    clear() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.baseLevel = undefined;
    }
    getParent(mindmapDefinitionQFDTVHPHInput45) {
      for (
        let mindmapDefinitionQFDTVHPHBinding119 = this.nodes.length - 1;
        mindmapDefinitionQFDTVHPHBinding119 >= 0;
        mindmapDefinitionQFDTVHPHBinding119--
      )
        if (
          this.nodes[mindmapDefinitionQFDTVHPHBinding119].level <
          mindmapDefinitionQFDTVHPHInput45
        )
          return this.nodes[mindmapDefinitionQFDTVHPHBinding119];
      return null;
    }
    getMindmap() {
      return this.nodes.length > 0 ? this.nodes[0] : null;
    }
    addNode(
      mindmapDefinitionQFDTVHPHInput24,
      mindmapDefinitionQFDTVHPHInput25,
      mindmapDefinitionQFDTVHPHInput26,
      mindmapDefinitionQFDTVHPHInput27,
    ) {
      chunkAGHRB4JFI.info(
        "addNode",
        mindmapDefinitionQFDTVHPHInput24,
        mindmapDefinitionQFDTVHPHInput25,
        mindmapDefinitionQFDTVHPHInput26,
        mindmapDefinitionQFDTVHPHInput27,
      );
      let mindmapDefinitionQFDTVHPHBinding84 = false;
      this.nodes.length === 0
        ? ((this.baseLevel = mindmapDefinitionQFDTVHPHInput24),
          (mindmapDefinitionQFDTVHPHInput24 = 0),
          (mindmapDefinitionQFDTVHPHBinding84 = true))
        : this.baseLevel !== undefined &&
          ((mindmapDefinitionQFDTVHPHInput24 -= this.baseLevel),
          (mindmapDefinitionQFDTVHPHBinding84 = false));
      let mindmapDefinitionQFDTVHPHBinding85 = chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHBinding86 =
          mindmapDefinitionQFDTVHPHBinding85.mindmap?.padding ??
          chunkICPOFSXXD.mindmap.padding;
      switch (mindmapDefinitionQFDTVHPHInput27) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          mindmapDefinitionQFDTVHPHBinding86 *= 2;
          break;
      }
      let mindmapDefinitionQFDTVHPHBinding87 = {
          id: this.count++,
          nodeId: chunkICPOFSXXR(
            mindmapDefinitionQFDTVHPHInput25,
            mindmapDefinitionQFDTVHPHBinding85,
          ),
          level: mindmapDefinitionQFDTVHPHInput24,
          descr: chunkICPOFSXXR(
            mindmapDefinitionQFDTVHPHInput26,
            mindmapDefinitionQFDTVHPHBinding85,
          ),
          type: mindmapDefinitionQFDTVHPHInput27,
          children: [],
          width:
            mindmapDefinitionQFDTVHPHBinding85.mindmap?.maxNodeWidth ??
            chunkICPOFSXXD.mindmap.maxNodeWidth,
          padding: mindmapDefinitionQFDTVHPHBinding86,
          isRoot: mindmapDefinitionQFDTVHPHBinding84,
        },
        mindmapDefinitionQFDTVHPHBinding88 = this.getParent(
          mindmapDefinitionQFDTVHPHInput24,
        );
      if (mindmapDefinitionQFDTVHPHBinding88) {
        mindmapDefinitionQFDTVHPHBinding88.children.push(
          mindmapDefinitionQFDTVHPHBinding87,
        );
        this.nodes.push(mindmapDefinitionQFDTVHPHBinding87);
      } else if (mindmapDefinitionQFDTVHPHBinding84)
        this.nodes.push(mindmapDefinitionQFDTVHPHBinding87);
      else
        throw Error(
          `There can be only one root. No parent could be found for ("${mindmapDefinitionQFDTVHPHBinding87.descr}")`,
        );
    }
    getType(
      mindmapDefinitionQFDTVHPHInput34,
      mindmapDefinitionQFDTVHPHInput35,
    ) {
      switch (
        (chunkAGHRB4JFI.debug(
          "In get type",
          mindmapDefinitionQFDTVHPHInput34,
          mindmapDefinitionQFDTVHPHInput35,
        ),
        mindmapDefinitionQFDTVHPHInput34)
      ) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          return mindmapDefinitionQFDTVHPHInput35 === ")"
            ? this.nodeType.ROUNDED_RECT
            : this.nodeType.CLOUD;
        case "((":
          return this.nodeType.CIRCLE;
        case ")":
          return this.nodeType.CLOUD;
        case "))":
          return this.nodeType.BANG;
        case "{{":
          return this.nodeType.HEXAGON;
        default:
          return this.nodeType.DEFAULT;
      }
    }
    setElementForId(
      mindmapDefinitionQFDTVHPHInput55,
      mindmapDefinitionQFDTVHPHInput56,
    ) {
      this.elements[mindmapDefinitionQFDTVHPHInput55] =
        mindmapDefinitionQFDTVHPHInput56;
    }
    getElementById(mindmapDefinitionQFDTVHPHInput57) {
      return this.elements[mindmapDefinitionQFDTVHPHInput57];
    }
    decorateNode(mindmapDefinitionQFDTVHPHInput41) {
      if (!mindmapDefinitionQFDTVHPHInput41) return;
      let mindmapDefinitionQFDTVHPHBinding113 = chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHBinding114 = this.nodes[this.nodes.length - 1];
      mindmapDefinitionQFDTVHPHInput41.icon &&
        (mindmapDefinitionQFDTVHPHBinding114.icon = chunkICPOFSXXR(
          mindmapDefinitionQFDTVHPHInput41.icon,
          mindmapDefinitionQFDTVHPHBinding113,
        ));
      mindmapDefinitionQFDTVHPHInput41.class &&
        (mindmapDefinitionQFDTVHPHBinding114.class = chunkICPOFSXXR(
          mindmapDefinitionQFDTVHPHInput41.class,
          mindmapDefinitionQFDTVHPHBinding113,
        ));
    }
    type2Str(mindmapDefinitionQFDTVHPHInput33) {
      switch (mindmapDefinitionQFDTVHPHInput33) {
        case this.nodeType.DEFAULT:
          return "no-border";
        case this.nodeType.RECT:
          return "rect";
        case this.nodeType.ROUNDED_RECT:
          return "rounded-rect";
        case this.nodeType.CIRCLE:
          return "circle";
        case this.nodeType.CLOUD:
          return "cloud";
        case this.nodeType.BANG:
          return "bang";
        case this.nodeType.HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }
    assignSections(
      mindmapDefinitionQFDTVHPHInput39,
      mindmapDefinitionQFDTVHPHInput40,
    ) {
      if (
        (mindmapDefinitionQFDTVHPHInput39.level === 0
          ? (mindmapDefinitionQFDTVHPHInput39.section = undefined)
          : (mindmapDefinitionQFDTVHPHInput39.section =
              mindmapDefinitionQFDTVHPHInput40),
        mindmapDefinitionQFDTVHPHInput39.children)
      )
        for (let [
          mindmapDefinitionQFDTVHPHBinding117,
          mindmapDefinitionQFDTVHPHBinding118,
        ] of mindmapDefinitionQFDTVHPHInput39.children.entries()) {
          let mindmapDefinitionQFDTVHPHBinding120 =
            mindmapDefinitionQFDTVHPHInput39.level === 0
              ? mindmapDefinitionQFDTVHPHBinding117 %
                (mindmapDefinitionQFDTVHPHBinding3 - 1)
              : mindmapDefinitionQFDTVHPHInput40;
          this.assignSections(
            mindmapDefinitionQFDTVHPHBinding118,
            mindmapDefinitionQFDTVHPHBinding120,
          );
        }
    }
    flattenNodes(
      mindmapDefinitionQFDTVHPHInput20,
      mindmapDefinitionQFDTVHPHInput21,
    ) {
      let mindmapDefinitionQFDTVHPHBinding66 = chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHBinding67 = ["mindmap-node"];
      mindmapDefinitionQFDTVHPHInput20.isRoot === true
        ? mindmapDefinitionQFDTVHPHBinding67.push("section-root", "section--1")
        : mindmapDefinitionQFDTVHPHInput20.section !== undefined &&
          mindmapDefinitionQFDTVHPHBinding67.push(
            `section-${mindmapDefinitionQFDTVHPHInput20.section}`,
          );
      mindmapDefinitionQFDTVHPHInput20.class &&
        mindmapDefinitionQFDTVHPHBinding67.push(
          mindmapDefinitionQFDTVHPHInput20.class,
        );
      let mindmapDefinitionQFDTVHPHBinding68 =
          mindmapDefinitionQFDTVHPHBinding67.join(" "),
        mindmapDefinitionQFDTVHPHBinding69 = chunkAGHRB4JFN(
          (mindmapDefinitionQFDTVHPHInput28) => {
            let mindmapDefinitionQFDTVHPHBinding96 = (
              mindmapDefinitionQFDTVHPHBinding66.theme?.toLowerCase() ?? ""
            ).includes("redux");
            switch (mindmapDefinitionQFDTVHPHInput28) {
              case mindmapDefinitionQFDTVHPHBinding4.CIRCLE:
                return "mindmapCircle";
              case mindmapDefinitionQFDTVHPHBinding4.RECT:
                return "rect";
              case mindmapDefinitionQFDTVHPHBinding4.ROUNDED_RECT:
                return "rounded";
              case mindmapDefinitionQFDTVHPHBinding4.CLOUD:
                return "cloud";
              case mindmapDefinitionQFDTVHPHBinding4.BANG:
                return "bang";
              case mindmapDefinitionQFDTVHPHBinding4.HEXAGON:
                return "hexagon";
              case mindmapDefinitionQFDTVHPHBinding4.DEFAULT:
                return mindmapDefinitionQFDTVHPHBinding96
                  ? "rounded"
                  : "defaultMindmapNode";
              case mindmapDefinitionQFDTVHPHBinding4.NO_BORDER:
              default:
                return "rect";
            }
          },
          "getShapeFromType",
        ),
        mindmapDefinitionQFDTVHPHBinding70 = {
          id: mindmapDefinitionQFDTVHPHInput20.id.toString(),
          domId: "node_" + mindmapDefinitionQFDTVHPHInput20.id.toString(),
          label: mindmapDefinitionQFDTVHPHInput20.descr,
          labelType: "markdown",
          isGroup: false,
          shape: mindmapDefinitionQFDTVHPHBinding69(
            mindmapDefinitionQFDTVHPHInput20.type,
          ),
          width: mindmapDefinitionQFDTVHPHInput20.width,
          height: mindmapDefinitionQFDTVHPHInput20.height ?? 0,
          padding: mindmapDefinitionQFDTVHPHInput20.padding,
          cssClasses: mindmapDefinitionQFDTVHPHBinding68,
          cssStyles: [],
          look: mindmapDefinitionQFDTVHPHBinding66.look,
          icon: mindmapDefinitionQFDTVHPHInput20.icon,
          x: mindmapDefinitionQFDTVHPHInput20.x,
          y: mindmapDefinitionQFDTVHPHInput20.y,
          level: mindmapDefinitionQFDTVHPHInput20.level,
          nodeId: mindmapDefinitionQFDTVHPHInput20.nodeId,
          type: mindmapDefinitionQFDTVHPHInput20.type,
          section: mindmapDefinitionQFDTVHPHInput20.section,
        };
      if (
        (mindmapDefinitionQFDTVHPHInput21.push(
          mindmapDefinitionQFDTVHPHBinding70,
        ),
        mindmapDefinitionQFDTVHPHInput20.children)
      )
        for (let mindmapDefinitionQFDTVHPHBinding121 of mindmapDefinitionQFDTVHPHInput20.children)
          this.flattenNodes(
            mindmapDefinitionQFDTVHPHBinding121,
            mindmapDefinitionQFDTVHPHInput21,
          );
    }
    generateEdges(
      mindmapDefinitionQFDTVHPHInput29,
      mindmapDefinitionQFDTVHPHInput30,
    ) {
      if (!mindmapDefinitionQFDTVHPHInput29.children) return;
      let mindmapDefinitionQFDTVHPHBinding97 = chunkICPOFSXXB();
      for (let mindmapDefinitionQFDTVHPHBinding100 of mindmapDefinitionQFDTVHPHInput29.children) {
        let mindmapDefinitionQFDTVHPHBinding101 = "edge";
        mindmapDefinitionQFDTVHPHBinding100.section !== undefined &&
          (mindmapDefinitionQFDTVHPHBinding101 += ` section-edge-${mindmapDefinitionQFDTVHPHBinding100.section}`);
        let mindmapDefinitionQFDTVHPHBinding102 =
          mindmapDefinitionQFDTVHPHInput29.level + 1;
        mindmapDefinitionQFDTVHPHBinding101 += ` edge-depth-${mindmapDefinitionQFDTVHPHBinding102}`;
        let mindmapDefinitionQFDTVHPHBinding103 = {
          id: `edge_${mindmapDefinitionQFDTVHPHInput29.id}_${mindmapDefinitionQFDTVHPHBinding100.id}`,
          start: mindmapDefinitionQFDTVHPHInput29.id.toString(),
          end: mindmapDefinitionQFDTVHPHBinding100.id.toString(),
          type: "normal",
          curve: "basis",
          thickness: "normal",
          look: mindmapDefinitionQFDTVHPHBinding97.look,
          classes: mindmapDefinitionQFDTVHPHBinding101,
          depth: mindmapDefinitionQFDTVHPHInput29.level,
          section: mindmapDefinitionQFDTVHPHBinding100.section,
        };
        mindmapDefinitionQFDTVHPHInput30.push(
          mindmapDefinitionQFDTVHPHBinding103,
        );
        this.generateEdges(
          mindmapDefinitionQFDTVHPHBinding100,
          mindmapDefinitionQFDTVHPHInput30,
        );
      }
    }
    getData() {
      let mindmapDefinitionQFDTVHPHBinding89 = this.getMindmap(),
        mindmapDefinitionQFDTVHPHBinding90 = chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHBinding91 =
          chunkICPOFSXXO().layout !== undefined,
        mindmapDefinitionQFDTVHPHBinding92 = mindmapDefinitionQFDTVHPHBinding90;
      if (
        (mindmapDefinitionQFDTVHPHBinding91 ||
          (mindmapDefinitionQFDTVHPHBinding92.layout = "cose-bilkent"),
        !mindmapDefinitionQFDTVHPHBinding89)
      )
        return {
          nodes: [],
          edges: [],
          config: mindmapDefinitionQFDTVHPHBinding92,
        };
      chunkAGHRB4JFI.debug(
        "getData: mindmapRoot",
        mindmapDefinitionQFDTVHPHBinding89,
        mindmapDefinitionQFDTVHPHBinding90,
      );
      this.assignSections(mindmapDefinitionQFDTVHPHBinding89);
      let mindmapDefinitionQFDTVHPHBinding93 = [],
        mindmapDefinitionQFDTVHPHBinding94 = [];
      this.flattenNodes(
        mindmapDefinitionQFDTVHPHBinding89,
        mindmapDefinitionQFDTVHPHBinding93,
      );
      this.generateEdges(
        mindmapDefinitionQFDTVHPHBinding89,
        mindmapDefinitionQFDTVHPHBinding94,
      );
      chunkAGHRB4JFI.debug(
        `getData: processed ${mindmapDefinitionQFDTVHPHBinding93.length} nodes and ${mindmapDefinitionQFDTVHPHBinding94.length} edges`,
      );
      let mindmapDefinitionQFDTVHPHBinding95 = new Map();
      for (let mindmapDefinitionQFDTVHPHBinding116 of mindmapDefinitionQFDTVHPHBinding93)
        mindmapDefinitionQFDTVHPHBinding95.set(
          mindmapDefinitionQFDTVHPHBinding116.id,
          {
            shape: mindmapDefinitionQFDTVHPHBinding116.shape,
            width: mindmapDefinitionQFDTVHPHBinding116.width,
            height: mindmapDefinitionQFDTVHPHBinding116.height,
            padding: mindmapDefinitionQFDTVHPHBinding116.padding,
          },
        );
      return {
        nodes: mindmapDefinitionQFDTVHPHBinding93,
        edges: mindmapDefinitionQFDTVHPHBinding94,
        config: mindmapDefinitionQFDTVHPHBinding92,
        rootNode: mindmapDefinitionQFDTVHPHBinding89,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: Object.fromEntries(mindmapDefinitionQFDTVHPHBinding95),
        type: "mindmap",
        diagramId: "mindmap-" + appInitialLrt(),
      };
    }
    getLogger() {
      return chunkAGHRB4JFI;
    }
  };
  mindmapDefinitionQFDTVHPHBinding6 = {
    draw: chunkAGHRB4JFN(
      async (
        mindmapDefinitionQFDTVHPHInput16,
        mindmapDefinitionQFDTVHPHInput17,
        mindmapDefinitionQFDTVHPHInput18,
        mindmapDefinitionQFDTVHPHInput19,
      ) => {
        chunkAGHRB4JFI.debug(
          "Rendering mindmap diagram\n" + mindmapDefinitionQFDTVHPHInput16,
        );
        let mindmapDefinitionQFDTVHPHBinding62 =
            mindmapDefinitionQFDTVHPHInput19.db,
          mindmapDefinitionQFDTVHPHBinding63 =
            mindmapDefinitionQFDTVHPHBinding62.getData(),
          mindmapDefinitionQFDTVHPHBinding64 = chunk55IACEB6T(
            mindmapDefinitionQFDTVHPHInput17,
            mindmapDefinitionQFDTVHPHBinding63.config.securityLevel,
          );
        if (
          ((mindmapDefinitionQFDTVHPHBinding63.type =
            mindmapDefinitionQFDTVHPHInput19.type),
          (mindmapDefinitionQFDTVHPHBinding63.layoutAlgorithm = chunk336JU56OT(
            mindmapDefinitionQFDTVHPHBinding63.config.layout,
            {
              fallback: "cose-bilkent",
            },
          )),
          (mindmapDefinitionQFDTVHPHBinding63.diagramId =
            mindmapDefinitionQFDTVHPHInput17),
          !mindmapDefinitionQFDTVHPHBinding62.getMindmap())
        )
          return;
        mindmapDefinitionQFDTVHPHBinding63.nodes.forEach((item) => {
          item.shape === "rounded"
            ? ((item.radius = 15),
              (item.taper = 15),
              (item.stroke = "none"),
              (item.width = 0),
              (item.padding = 15))
            : item.shape === "circle"
              ? (item.padding = 10)
              : item.shape === "rect"
                ? ((item.width = 0), (item.padding = 10))
                : item.shape === "hexagon" &&
                  ((item.width = 0), (item.height = 0));
        });
        await chunk336JU56OI(
          mindmapDefinitionQFDTVHPHBinding63,
          mindmapDefinitionQFDTVHPHBinding64,
        );
        let { themeVariables } = chunkICPOFSXXY(),
          { useGradient, gradientStart, gradientStop } = themeVariables;
        if (useGradient && gradientStart && gradientStop) {
          let mindmapDefinitionQFDTVHPHBinding98 =
              mindmapDefinitionQFDTVHPHBinding64.attr("id"),
            mindmapDefinitionQFDTVHPHBinding99 =
              mindmapDefinitionQFDTVHPHBinding64
                .append("defs")
                .append("linearGradient")
                .attr("id", `${mindmapDefinitionQFDTVHPHBinding98}-gradient`)
                .attr("gradientUnits", "objectBoundingBox")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
          mindmapDefinitionQFDTVHPHBinding99
            .append("stop")
            .attr("offset", "0%")
            .attr("stop-color", gradientStart)
            .attr("stop-opacity", 1);
          mindmapDefinitionQFDTVHPHBinding99
            .append("stop")
            .attr("offset", "100%")
            .attr("stop-color", gradientStop)
            .attr("stop-opacity", 1);
        }
        chunkEDXVE4YYN(
          mindmapDefinitionQFDTVHPHBinding64,
          mindmapDefinitionQFDTVHPHBinding63.config.mindmap?.padding ??
            chunkICPOFSXXD.mindmap.padding,
          "mindmapDiagram",
          mindmapDefinitionQFDTVHPHBinding63.config.mindmap?.useMaxWidth ??
            chunkICPOFSXXD.mindmap.useMaxWidth,
        );
      },
      "draw",
    ),
  };
  mindmapDefinitionQFDTVHPHBinding7 = chunkAGHRB4JFN(
    (mindmapDefinitionQFDTVHPHInput15) => {
      let { theme, look } = mindmapDefinitionQFDTVHPHInput15,
        mindmapDefinitionQFDTVHPHBinding61 = "";
      for (
        let mindmapDefinitionQFDTVHPHBinding109 = 0;
        mindmapDefinitionQFDTVHPHBinding109 <
        mindmapDefinitionQFDTVHPHInput15.THEME_COLOR_LIMIT;
        mindmapDefinitionQFDTVHPHBinding109++
      ) {
        mindmapDefinitionQFDTVHPHInput15[
          "lineColor" + mindmapDefinitionQFDTVHPHBinding109
        ] =
          mindmapDefinitionQFDTVHPHInput15[
            "lineColor" + mindmapDefinitionQFDTVHPHBinding109
          ] ||
          mindmapDefinitionQFDTVHPHInput15[
            "cScaleInv" + mindmapDefinitionQFDTVHPHBinding109
          ];
        distP(
          mindmapDefinitionQFDTVHPHInput15[
            "lineColor" + mindmapDefinitionQFDTVHPHBinding109
          ],
        )
          ? (mindmapDefinitionQFDTVHPHInput15[
              "lineColor" + mindmapDefinitionQFDTVHPHBinding109
            ] = distD(
              mindmapDefinitionQFDTVHPHInput15[
                "lineColor" + mindmapDefinitionQFDTVHPHBinding109
              ],
              20,
            ))
          : (mindmapDefinitionQFDTVHPHInput15[
              "lineColor" + mindmapDefinitionQFDTVHPHBinding109
            ] = distC(
              mindmapDefinitionQFDTVHPHInput15[
                "lineColor" + mindmapDefinitionQFDTVHPHBinding109
              ],
              20,
            ));
      }
      for (
        let mindmapDefinitionQFDTVHPHBinding65 = 0;
        mindmapDefinitionQFDTVHPHBinding65 <
        mindmapDefinitionQFDTVHPHInput15.THEME_COLOR_LIMIT;
        mindmapDefinitionQFDTVHPHBinding65++
      ) {
        let mindmapDefinitionQFDTVHPHBinding71 =
          "" +
          (look === "neo"
            ? Math.max(10 - (mindmapDefinitionQFDTVHPHBinding65 - 1) * 2, 2)
            : 17 - 3 * mindmapDefinitionQFDTVHPHBinding65);
        mindmapDefinitionQFDTVHPHBinding61 += `
    .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} rect, .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} path, .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} circle, .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} polygon, .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} path  {
      fill: ${mindmapDefinitionQFDTVHPHInput15["cScale" + mindmapDefinitionQFDTVHPHBinding65]};
    }
    .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} text {
     fill: ${mindmapDefinitionQFDTVHPHInput15["cScaleLabel" + mindmapDefinitionQFDTVHPHBinding65]};
    }
     .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} span {
     color: ${mindmapDefinitionQFDTVHPHInput15["cScaleLabel" + mindmapDefinitionQFDTVHPHBinding65]};
    }
    .node-icon-${mindmapDefinitionQFDTVHPHBinding65 - 1} {
      font-size: 40px;
      color: ${mindmapDefinitionQFDTVHPHInput15["cScaleLabel" + mindmapDefinitionQFDTVHPHBinding65]};
    }
    .section-edge-${mindmapDefinitionQFDTVHPHBinding65 - 1}{
      stroke: ${mindmapDefinitionQFDTVHPHInput15["cScale" + mindmapDefinitionQFDTVHPHBinding65]};
    }
    .edge-depth-${mindmapDefinitionQFDTVHPHBinding65 - 1}{
      stroke-width: ${mindmapDefinitionQFDTVHPHBinding71};
    }
    .section-${mindmapDefinitionQFDTVHPHBinding65 - 1} line {
      stroke: ${mindmapDefinitionQFDTVHPHInput15["cScaleInv" + mindmapDefinitionQFDTVHPHBinding65]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding65 - 1} rect, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding65 - 1} path, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding65 - 1} circle, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding65 - 1} polygon {
      fill: ${theme === "redux" || theme === "redux-dark" || theme === "neutral" ? mindmapDefinitionQFDTVHPHInput15.mainBkg : mindmapDefinitionQFDTVHPHInput15["cScale" + mindmapDefinitionQFDTVHPHBinding65]};
      stroke: ${theme === "redux" || theme === "redux-dark" ? mindmapDefinitionQFDTVHPHInput15.nodeBorder : mindmapDefinitionQFDTVHPHInput15["cScale" + mindmapDefinitionQFDTVHPHBinding65]};
      stroke-width: ${mindmapDefinitionQFDTVHPHInput15.strokeWidth ?? 2}px;
    }
    [data-look="neo"].section-edge-${mindmapDefinitionQFDTVHPHBinding65 - 1}{
      stroke: ${theme?.includes("redux") || theme === "neo-dark" ? mindmapDefinitionQFDTVHPHInput15.nodeBorder : mindmapDefinitionQFDTVHPHInput15["cScale" + mindmapDefinitionQFDTVHPHBinding65]};
    }
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding65 - 1} text {
     fill: ${theme === "redux" || theme === "redux-dark" ? mindmapDefinitionQFDTVHPHInput15.nodeBorder : mindmapDefinitionQFDTVHPHInput15["cScaleLabel" + (theme === "neutral" ? 1 : mindmapDefinitionQFDTVHPHBinding65)]};
    }
    `;
      }
      return mindmapDefinitionQFDTVHPHBinding61;
    },
    "genSections",
  );
  mindmapDefinitionQFDTVHPHBinding8 = chunkAGHRB4JFN(
    (
      mindmapDefinitionQFDTVHPHInput36,
      mindmapDefinitionQFDTVHPHInput37,
      mindmapDefinitionQFDTVHPHInput38,
    ) => {
      let mindmapDefinitionQFDTVHPHBinding105 = "";
      for (
        let mindmapDefinitionQFDTVHPHBinding106 = 0;
        mindmapDefinitionQFDTVHPHBinding106 < mindmapDefinitionQFDTVHPHInput36;
        mindmapDefinitionQFDTVHPHBinding106++
      )
        mindmapDefinitionQFDTVHPHBinding105 += `
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding106 - 1} rect, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding106 - 1} path, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding106 - 1} circle, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHBinding106 - 1} polygon {
      stroke: url(${mindmapDefinitionQFDTVHPHInput37}-gradient);
      fill: ${mindmapDefinitionQFDTVHPHInput38};
    }
    .section-${mindmapDefinitionQFDTVHPHBinding106 - 1} line {
      stroke-width: 0;
    }`;
      return mindmapDefinitionQFDTVHPHBinding105;
    },
    "genGradient",
  );
  MindmapDefinitionQFDTVHPH = {
    get db() {
      return new mindmapDefinitionQFDTVHPHBinding5();
    },
    renderer: mindmapDefinitionQFDTVHPHBinding6,
    parser: mindmapDefinitionQFDTVHPHBinding2,
    styles: chunkAGHRB4JFN((mindmapDefinitionQFDTVHPHInput22) => {
      let { theme } = mindmapDefinitionQFDTVHPHInput22,
        mindmapDefinitionQFDTVHPHBinding72 =
          mindmapDefinitionQFDTVHPHInput22.svgId,
        mindmapDefinitionQFDTVHPHBinding73 =
          mindmapDefinitionQFDTVHPHInput22.dropShadow
            ? mindmapDefinitionQFDTVHPHInput22.dropShadow.replace(
                "url(#drop-shadow)",
                `url(${mindmapDefinitionQFDTVHPHBinding72}-drop-shadow)`,
              )
            : "none";
      return `
  .edge {
    stroke-width: 3;
  }
  ${mindmapDefinitionQFDTVHPHBinding7(mindmapDefinitionQFDTVHPHInput22)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${mindmapDefinitionQFDTVHPHInput22.git0};
  }
  .section-root text {
    fill: ${mindmapDefinitionQFDTVHPHInput22.gitBranchLabel0};
  }
  .section-root span {
    color: ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHInput22.nodeBorder : mindmapDefinitionQFDTVHPHInput22.gitBranchLabel0};
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
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
  [data-look="neo"].mindmap-node  {
    filter: ${mindmapDefinitionQFDTVHPHBinding73};
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHInput22.mainBkg : mindmapDefinitionQFDTVHPHInput22.git0};
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHInput22.nodeBorder : mindmapDefinitionQFDTVHPHInput22["cScaleLabel" + +(theme === "neutral")]};
  }
  ${mindmapDefinitionQFDTVHPHInput22.useGradient && mindmapDefinitionQFDTVHPHBinding72 && mindmapDefinitionQFDTVHPHInput22.mainBkg ? mindmapDefinitionQFDTVHPHBinding8(mindmapDefinitionQFDTVHPHInput22.THEME_COLOR_LIMIT, mindmapDefinitionQFDTVHPHBinding72, mindmapDefinitionQFDTVHPHInput22.mainBkg) : ""}
`;
    }, "getStyles"),
  };
})();
export { MindmapDefinitionQFDTVHPH as diagram };
