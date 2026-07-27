// Restored from ref/webview/assets/mindmap-definition-VGOIOE7T-DV1QeWQx.js
// Mermaid mindmap diagram definition (primary). app-initial lrt/srt → uuid v4 + ensureUuidRuntime.
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
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  c as distC,
  d as distD,
  p as distP,
  t as distT,
} from "../../vendor/khroma";
import {
  D as chunkABZYJK2DD,
  L as chunkABZYJK2DL,
  b as chunkABZYJK2DB,
  d as _chunkABZYJK2DD,
  k as chunkABZYJK2DK,
} from "../../diagrams/mermaid-config";
import { chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA as chunkJA3XYJ7ZI } from "./mermaid-create-text";
import { initMermaidLineOffsetChunk as chunkHN2XXSSUN } from "../../diagrams/line-offset-helpers";
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
var mindmapDefinitionVGOIOE7TBinding1,
  mindmapDefinitionVGOIOE7TBinding2,
  mindmapDefinitionVGOIOE7TBinding3,
  mindmapDefinitionVGOIOE7TBinding4,
  mindmapDefinitionVGOIOE7TBinding5,
  mindmapDefinitionVGOIOE7TBinding6,
  MindmapDefinitionVGOIOE7T;
esmInit(() => {
  chunk55IACEB6N();
  chunkQN33PNHLT();
  chunkN4CR4FBYN();
  chunkQXUST7PYN();
  chunkHN2XXSSUN();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZI();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  appInitialSrt();
  distT();
  mindmapDefinitionVGOIOE7TBinding1 = (function () {
    var mindmapDefinitionVGOIOE7TBinding7 = chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TInput45,
        mindmapDefinitionVGOIOE7TInput46,
        mindmapDefinitionVGOIOE7TInput47,
        mindmapDefinitionVGOIOE7TInput48,
      ) {
        for (
          mindmapDefinitionVGOIOE7TInput47 ||= {},
            mindmapDefinitionVGOIOE7TInput48 =
              mindmapDefinitionVGOIOE7TInput45.length;
          mindmapDefinitionVGOIOE7TInput48--;
          mindmapDefinitionVGOIOE7TInput47[
            mindmapDefinitionVGOIOE7TInput45[mindmapDefinitionVGOIOE7TInput48]
          ] = mindmapDefinitionVGOIOE7TInput46
        );
        return mindmapDefinitionVGOIOE7TInput47;
      }, "o"),
      mindmapDefinitionVGOIOE7TBinding8 = [1, 4],
      mindmapDefinitionVGOIOE7TBinding9 = [1, 13],
      mindmapDefinitionVGOIOE7TBinding10 = [1, 12],
      mindmapDefinitionVGOIOE7TBinding11 = [1, 15],
      mindmapDefinitionVGOIOE7TBinding12 = [1, 16],
      mindmapDefinitionVGOIOE7TBinding13 = [1, 20],
      mindmapDefinitionVGOIOE7TBinding14 = [1, 19],
      mindmapDefinitionVGOIOE7TBinding15 = [6, 7, 8],
      mindmapDefinitionVGOIOE7TBinding16 = [1, 26],
      mindmapDefinitionVGOIOE7TBinding17 = [1, 24],
      mindmapDefinitionVGOIOE7TBinding18 = [1, 25],
      mindmapDefinitionVGOIOE7TBinding19 = [6, 7, 11],
      mindmapDefinitionVGOIOE7TBinding20 = [1, 6, 13, 15, 16, 19, 22],
      mindmapDefinitionVGOIOE7TBinding21 = [1, 33],
      mindmapDefinitionVGOIOE7TBinding22 = [1, 34],
      mindmapDefinitionVGOIOE7TBinding23 = [1, 6, 7, 11, 13, 15, 16, 19, 22],
      mindmapDefinitionVGOIOE7TBinding24 = {
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
          mindmapDefinitionVGOIOE7TInput8,
          mindmapDefinitionVGOIOE7TInput9,
          mindmapDefinitionVGOIOE7TInput10,
          mindmapDefinitionVGOIOE7TInput11,
          mindmapDefinitionVGOIOE7TInput12,
          mindmapDefinitionVGOIOE7TInput13,
          mindmapDefinitionVGOIOE7TInput14,
        ) {
          var mindmapDefinitionVGOIOE7TBinding58 =
            mindmapDefinitionVGOIOE7TInput13.length - 1;
          switch (mindmapDefinitionVGOIOE7TInput12) {
            case 6:
            case 7:
              return mindmapDefinitionVGOIOE7TInput11;
            case 8:
              mindmapDefinitionVGOIOE7TInput11.getLogger().trace("Stop NL ");
              break;
            case 9:
              mindmapDefinitionVGOIOE7TInput11.getLogger().trace("Stop EOF ");
              break;
            case 11:
              mindmapDefinitionVGOIOE7TInput11.getLogger().trace("Stop NL2 ");
              break;
            case 12:
              mindmapDefinitionVGOIOE7TInput11.getLogger().trace("Stop EOF2 ");
              break;
            case 15:
              mindmapDefinitionVGOIOE7TInput11
                .getLogger()
                .info(
                  "Node: ",
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ].id,
                );
              mindmapDefinitionVGOIOE7TInput11.addNode(
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58 - 1
                ].length,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].id,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].descr,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].type,
              );
              break;
            case 16:
              mindmapDefinitionVGOIOE7TInput11
                .getLogger()
                .trace(
                  "Icon: ",
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ],
                );
              mindmapDefinitionVGOIOE7TInput11.decorateNode({
                icon: mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ],
              });
              break;
            case 17:
            case 21:
              mindmapDefinitionVGOIOE7TInput11.decorateNode({
                class:
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ],
              });
              break;
            case 18:
              mindmapDefinitionVGOIOE7TInput11.getLogger().trace("SPACELIST");
              break;
            case 19:
              mindmapDefinitionVGOIOE7TInput11
                .getLogger()
                .trace(
                  "Node: ",
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ].id,
                );
              mindmapDefinitionVGOIOE7TInput11.addNode(
                0,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].id,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].descr,
                mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ].type,
              );
              break;
            case 20:
              mindmapDefinitionVGOIOE7TInput11.decorateNode({
                icon: mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ],
              });
              break;
            case 25:
              mindmapDefinitionVGOIOE7TInput11
                .getLogger()
                .trace(
                  "node found ..",
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 2
                  ],
                );
              this.$ = {
                id: mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58 - 1
                ],
                descr:
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 1
                  ],
                type: mindmapDefinitionVGOIOE7TInput11.getType(
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 2
                  ],
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ],
                ),
              };
              break;
            case 26:
              this.$ = {
                id: mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58
                ],
                descr:
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
                  ],
                type: mindmapDefinitionVGOIOE7TInput11.nodeType.DEFAULT,
              };
              break;
            case 27:
              mindmapDefinitionVGOIOE7TInput11
                .getLogger()
                .trace(
                  "node found ..",
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 3
                  ],
                );
              this.$ = {
                id: mindmapDefinitionVGOIOE7TInput13[
                  mindmapDefinitionVGOIOE7TBinding58 - 3
                ],
                descr:
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 1
                  ],
                type: mindmapDefinitionVGOIOE7TInput11.getType(
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58 - 2
                  ],
                  mindmapDefinitionVGOIOE7TInput13[
                    mindmapDefinitionVGOIOE7TBinding58
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
            8: mindmapDefinitionVGOIOE7TBinding8,
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
            8: mindmapDefinitionVGOIOE7TBinding8,
          },
          {
            6: mindmapDefinitionVGOIOE7TBinding9,
            7: [1, 10],
            9: 9,
            12: 11,
            13: mindmapDefinitionVGOIOE7TBinding10,
            14: 14,
            15: mindmapDefinitionVGOIOE7TBinding11,
            16: mindmapDefinitionVGOIOE7TBinding12,
            17: 17,
            18: 18,
            19: mindmapDefinitionVGOIOE7TBinding13,
            22: mindmapDefinitionVGOIOE7TBinding14,
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding15,
            [2, 3],
          ),
          {
            1: [2, 2],
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding15,
            [2, 4],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding15,
            [2, 5],
          ),
          {
            1: [2, 6],
            6: mindmapDefinitionVGOIOE7TBinding9,
            12: 21,
            13: mindmapDefinitionVGOIOE7TBinding10,
            14: 14,
            15: mindmapDefinitionVGOIOE7TBinding11,
            16: mindmapDefinitionVGOIOE7TBinding12,
            17: 17,
            18: 18,
            19: mindmapDefinitionVGOIOE7TBinding13,
            22: mindmapDefinitionVGOIOE7TBinding14,
          },
          {
            6: mindmapDefinitionVGOIOE7TBinding9,
            9: 22,
            12: 11,
            13: mindmapDefinitionVGOIOE7TBinding10,
            14: 14,
            15: mindmapDefinitionVGOIOE7TBinding11,
            16: mindmapDefinitionVGOIOE7TBinding12,
            17: 17,
            18: 18,
            19: mindmapDefinitionVGOIOE7TBinding13,
            22: mindmapDefinitionVGOIOE7TBinding14,
          },
          {
            6: mindmapDefinitionVGOIOE7TBinding16,
            7: mindmapDefinitionVGOIOE7TBinding17,
            10: 23,
            11: mindmapDefinitionVGOIOE7TBinding18,
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 22],
            {
              17: 17,
              18: 18,
              14: 27,
              15: [1, 28],
              16: [1, 29],
              19: mindmapDefinitionVGOIOE7TBinding13,
              22: mindmapDefinitionVGOIOE7TBinding14,
            },
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 18],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 19],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 20],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 21],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 23],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 24],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 26],
            {
              19: [1, 30],
            },
          ),
          {
            20: [1, 31],
          },
          {
            6: mindmapDefinitionVGOIOE7TBinding16,
            7: mindmapDefinitionVGOIOE7TBinding17,
            10: 32,
            11: mindmapDefinitionVGOIOE7TBinding18,
          },
          {
            1: [2, 7],
            6: mindmapDefinitionVGOIOE7TBinding9,
            12: 21,
            13: mindmapDefinitionVGOIOE7TBinding10,
            14: 14,
            15: mindmapDefinitionVGOIOE7TBinding11,
            16: mindmapDefinitionVGOIOE7TBinding12,
            17: 17,
            18: 18,
            19: mindmapDefinitionVGOIOE7TBinding13,
            22: mindmapDefinitionVGOIOE7TBinding14,
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding20,
            [2, 14],
            {
              7: mindmapDefinitionVGOIOE7TBinding21,
              11: mindmapDefinitionVGOIOE7TBinding22,
            },
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding23,
            [2, 8],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding23,
            [2, 9],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding23,
            [2, 10],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 15],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 16],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 17],
          ),
          {
            20: [1, 35],
          },
          {
            21: [1, 36],
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding20,
            [2, 13],
            {
              7: mindmapDefinitionVGOIOE7TBinding21,
              11: mindmapDefinitionVGOIOE7TBinding22,
            },
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding23,
            [2, 11],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding23,
            [2, 12],
          ),
          {
            21: [1, 37],
          },
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 25],
          ),
          mindmapDefinitionVGOIOE7TBinding7(
            mindmapDefinitionVGOIOE7TBinding19,
            [2, 27],
          ),
        ],
        defaultActions: {
          2: [2, 1],
          6: [2, 2],
        },
        parseError: chunkAGHRB4JFN(function (
          mindmapDefinitionVGOIOE7TInput40,
          mindmapDefinitionVGOIOE7TInput41,
        ) {
          if (mindmapDefinitionVGOIOE7TInput41.recoverable)
            this.trace(mindmapDefinitionVGOIOE7TInput40);
          else {
            var mindmapDefinitionVGOIOE7TBinding104 = Error(
              mindmapDefinitionVGOIOE7TInput40,
            );
            throw (
              (mindmapDefinitionVGOIOE7TBinding104.hash =
                mindmapDefinitionVGOIOE7TInput41),
              mindmapDefinitionVGOIOE7TBinding104
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput1) {
          var mindmapDefinitionVGOIOE7TBinding25 = this,
            mindmapDefinitionVGOIOE7TBinding26 = [0],
            mindmapDefinitionVGOIOE7TBinding27 = [],
            mindmapDefinitionVGOIOE7TBinding28 = [null],
            mindmapDefinitionVGOIOE7TBinding29 = [],
            mindmapDefinitionVGOIOE7TBinding30 = this.table,
            mindmapDefinitionVGOIOE7TBinding31 = "",
            mindmapDefinitionVGOIOE7TBinding32 = 0,
            mindmapDefinitionVGOIOE7TBinding33 = 0,
            mindmapDefinitionVGOIOE7TBinding34 = 0,
            mindmapDefinitionVGOIOE7TBinding37 =
              mindmapDefinitionVGOIOE7TBinding29.slice.call(arguments, 1),
            mindmapDefinitionVGOIOE7TBinding38 = Object.create(this.lexer),
            mindmapDefinitionVGOIOE7TBinding39 = {
              yy: {},
            };
          for (var mindmapDefinitionVGOIOE7TBinding40 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              mindmapDefinitionVGOIOE7TBinding40,
            ) &&
              (mindmapDefinitionVGOIOE7TBinding39.yy[
                mindmapDefinitionVGOIOE7TBinding40
              ] = this.yy[mindmapDefinitionVGOIOE7TBinding40]);
          mindmapDefinitionVGOIOE7TBinding38.setInput(
            mindmapDefinitionVGOIOE7TInput1,
            mindmapDefinitionVGOIOE7TBinding39.yy,
          );
          mindmapDefinitionVGOIOE7TBinding39.yy.lexer =
            mindmapDefinitionVGOIOE7TBinding38;
          mindmapDefinitionVGOIOE7TBinding39.yy.parser = this;
          mindmapDefinitionVGOIOE7TBinding38.yylloc === undefined &&
            (mindmapDefinitionVGOIOE7TBinding38.yylloc = {});
          var mindmapDefinitionVGOIOE7TBinding41 =
            mindmapDefinitionVGOIOE7TBinding38.yylloc;
          mindmapDefinitionVGOIOE7TBinding29.push(
            mindmapDefinitionVGOIOE7TBinding41,
          );
          var mindmapDefinitionVGOIOE7TBinding42 =
            mindmapDefinitionVGOIOE7TBinding38.options &&
            mindmapDefinitionVGOIOE7TBinding38.options.ranges;
          typeof mindmapDefinitionVGOIOE7TBinding39.yy.parseError == "function"
            ? (this.parseError =
                mindmapDefinitionVGOIOE7TBinding39.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function mindmapDefinitionVGOIOE7THelper2(
            mindmapDefinitionVGOIOE7TInput49,
          ) {
            mindmapDefinitionVGOIOE7TBinding26.length -=
              2 * mindmapDefinitionVGOIOE7TInput49;
            mindmapDefinitionVGOIOE7TBinding28.length -=
              mindmapDefinitionVGOIOE7TInput49;
            mindmapDefinitionVGOIOE7TBinding29.length -=
              mindmapDefinitionVGOIOE7TInput49;
          }
          chunkAGHRB4JFN(mindmapDefinitionVGOIOE7THelper2, "popStack");
          function mindmapDefinitionVGOIOE7THelper3() {
            var mindmapDefinitionVGOIOE7TBinding97 =
              mindmapDefinitionVGOIOE7TBinding27.pop() ||
              mindmapDefinitionVGOIOE7TBinding38.lex() ||
              1;
            return (
              typeof mindmapDefinitionVGOIOE7TBinding97 != "number" &&
                (mindmapDefinitionVGOIOE7TBinding97 instanceof Array &&
                  ((mindmapDefinitionVGOIOE7TBinding27 =
                    mindmapDefinitionVGOIOE7TBinding97),
                  (mindmapDefinitionVGOIOE7TBinding97 =
                    mindmapDefinitionVGOIOE7TBinding27.pop())),
                (mindmapDefinitionVGOIOE7TBinding97 =
                  mindmapDefinitionVGOIOE7TBinding25.symbols_[
                    mindmapDefinitionVGOIOE7TBinding97
                  ] || mindmapDefinitionVGOIOE7TBinding97)),
              mindmapDefinitionVGOIOE7TBinding97
            );
          }
          chunkAGHRB4JFN(mindmapDefinitionVGOIOE7THelper3, "lex");
          for (
            var mindmapDefinitionVGOIOE7TBinding43,
              mindmapDefinitionVGOIOE7TBinding44,
              mindmapDefinitionVGOIOE7TBinding45,
              mindmapDefinitionVGOIOE7TBinding46,
              mindmapDefinitionVGOIOE7TBinding47,
              mindmapDefinitionVGOIOE7TBinding48 = {},
              mindmapDefinitionVGOIOE7TBinding49,
              mindmapDefinitionVGOIOE7TBinding50,
              mindmapDefinitionVGOIOE7TBinding51,
              mindmapDefinitionVGOIOE7TBinding52;
            ;
          ) {
            if (
              ((mindmapDefinitionVGOIOE7TBinding45 =
                mindmapDefinitionVGOIOE7TBinding26[
                  mindmapDefinitionVGOIOE7TBinding26.length - 1
                ]),
              this.defaultActions[mindmapDefinitionVGOIOE7TBinding45]
                ? (mindmapDefinitionVGOIOE7TBinding46 =
                    this.defaultActions[mindmapDefinitionVGOIOE7TBinding45])
                : ((mindmapDefinitionVGOIOE7TBinding43 ??=
                    mindmapDefinitionVGOIOE7THelper3()),
                  (mindmapDefinitionVGOIOE7TBinding46 =
                    mindmapDefinitionVGOIOE7TBinding30[
                      mindmapDefinitionVGOIOE7TBinding45
                    ] &&
                    mindmapDefinitionVGOIOE7TBinding30[
                      mindmapDefinitionVGOIOE7TBinding45
                    ][mindmapDefinitionVGOIOE7TBinding43])),
              mindmapDefinitionVGOIOE7TBinding46 === undefined ||
                !mindmapDefinitionVGOIOE7TBinding46.length ||
                !mindmapDefinitionVGOIOE7TBinding46[0])
            ) {
              var mindmapDefinitionVGOIOE7TBinding53 = "";
              for (mindmapDefinitionVGOIOE7TBinding49 in ((mindmapDefinitionVGOIOE7TBinding52 =
                []),
              mindmapDefinitionVGOIOE7TBinding30[
                mindmapDefinitionVGOIOE7TBinding45
              ]))
                this.terminals_[mindmapDefinitionVGOIOE7TBinding49] &&
                  mindmapDefinitionVGOIOE7TBinding49 > 2 &&
                  mindmapDefinitionVGOIOE7TBinding52.push(
                    "'" +
                      this.terminals_[mindmapDefinitionVGOIOE7TBinding49] +
                      "'",
                  );
              mindmapDefinitionVGOIOE7TBinding53 =
                mindmapDefinitionVGOIOE7TBinding38.showPosition
                  ? "Parse error on line " +
                    (mindmapDefinitionVGOIOE7TBinding32 + 1) +
                    ":\n" +
                    mindmapDefinitionVGOIOE7TBinding38.showPosition() +
                    "\nExpecting " +
                    mindmapDefinitionVGOIOE7TBinding52.join(", ") +
                    ", got '" +
                    (this.terminals_[mindmapDefinitionVGOIOE7TBinding43] ||
                      mindmapDefinitionVGOIOE7TBinding43) +
                    "'"
                  : "Parse error on line " +
                    (mindmapDefinitionVGOIOE7TBinding32 + 1) +
                    ": Unexpected " +
                    (mindmapDefinitionVGOIOE7TBinding43 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[mindmapDefinitionVGOIOE7TBinding43] ||
                          mindmapDefinitionVGOIOE7TBinding43) +
                        "'");
              this.parseError(mindmapDefinitionVGOIOE7TBinding53, {
                text: mindmapDefinitionVGOIOE7TBinding38.match,
                token:
                  this.terminals_[mindmapDefinitionVGOIOE7TBinding43] ||
                  mindmapDefinitionVGOIOE7TBinding43,
                line: mindmapDefinitionVGOIOE7TBinding38.yylineno,
                loc: mindmapDefinitionVGOIOE7TBinding41,
                expected: mindmapDefinitionVGOIOE7TBinding52,
              });
            }
            if (
              mindmapDefinitionVGOIOE7TBinding46[0] instanceof Array &&
              mindmapDefinitionVGOIOE7TBinding46.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  mindmapDefinitionVGOIOE7TBinding45 +
                  ", token: " +
                  mindmapDefinitionVGOIOE7TBinding43,
              );
            switch (mindmapDefinitionVGOIOE7TBinding46[0]) {
              case 1:
                mindmapDefinitionVGOIOE7TBinding26.push(
                  mindmapDefinitionVGOIOE7TBinding43,
                );
                mindmapDefinitionVGOIOE7TBinding28.push(
                  mindmapDefinitionVGOIOE7TBinding38.yytext,
                );
                mindmapDefinitionVGOIOE7TBinding29.push(
                  mindmapDefinitionVGOIOE7TBinding38.yylloc,
                );
                mindmapDefinitionVGOIOE7TBinding26.push(
                  mindmapDefinitionVGOIOE7TBinding46[1],
                );
                mindmapDefinitionVGOIOE7TBinding43 = null;
                mindmapDefinitionVGOIOE7TBinding44
                  ? ((mindmapDefinitionVGOIOE7TBinding43 =
                      mindmapDefinitionVGOIOE7TBinding44),
                    (mindmapDefinitionVGOIOE7TBinding44 = null))
                  : ((mindmapDefinitionVGOIOE7TBinding33 =
                      mindmapDefinitionVGOIOE7TBinding38.yyleng),
                    (mindmapDefinitionVGOIOE7TBinding31 =
                      mindmapDefinitionVGOIOE7TBinding38.yytext),
                    (mindmapDefinitionVGOIOE7TBinding32 =
                      mindmapDefinitionVGOIOE7TBinding38.yylineno),
                    (mindmapDefinitionVGOIOE7TBinding41 =
                      mindmapDefinitionVGOIOE7TBinding38.yylloc),
                    mindmapDefinitionVGOIOE7TBinding34 > 0 &&
                      mindmapDefinitionVGOIOE7TBinding34--);
                break;
              case 2:
                if (
                  ((mindmapDefinitionVGOIOE7TBinding50 =
                    this.productions_[
                      mindmapDefinitionVGOIOE7TBinding46[1]
                    ][1]),
                  (mindmapDefinitionVGOIOE7TBinding48.$ =
                    mindmapDefinitionVGOIOE7TBinding28[
                      mindmapDefinitionVGOIOE7TBinding28.length -
                        mindmapDefinitionVGOIOE7TBinding50
                    ]),
                  (mindmapDefinitionVGOIOE7TBinding48._$ = {
                    first_line:
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length -
                          (mindmapDefinitionVGOIOE7TBinding50 || 1)
                      ].first_line,
                    last_line:
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length - 1
                      ].last_line,
                    first_column:
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length -
                          (mindmapDefinitionVGOIOE7TBinding50 || 1)
                      ].first_column,
                    last_column:
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length - 1
                      ].last_column,
                  }),
                  mindmapDefinitionVGOIOE7TBinding42 &&
                    (mindmapDefinitionVGOIOE7TBinding48._$.range = [
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length -
                          (mindmapDefinitionVGOIOE7TBinding50 || 1)
                      ].range[0],
                      mindmapDefinitionVGOIOE7TBinding29[
                        mindmapDefinitionVGOIOE7TBinding29.length - 1
                      ].range[1],
                    ]),
                  (mindmapDefinitionVGOIOE7TBinding47 =
                    this.performAction.apply(
                      mindmapDefinitionVGOIOE7TBinding48,
                      [
                        mindmapDefinitionVGOIOE7TBinding31,
                        mindmapDefinitionVGOIOE7TBinding33,
                        mindmapDefinitionVGOIOE7TBinding32,
                        mindmapDefinitionVGOIOE7TBinding39.yy,
                        mindmapDefinitionVGOIOE7TBinding46[1],
                        mindmapDefinitionVGOIOE7TBinding28,
                        mindmapDefinitionVGOIOE7TBinding29,
                      ].concat(mindmapDefinitionVGOIOE7TBinding37),
                    )),
                  mindmapDefinitionVGOIOE7TBinding47 !== undefined)
                )
                  return mindmapDefinitionVGOIOE7TBinding47;
                mindmapDefinitionVGOIOE7TBinding50 &&
                  ((mindmapDefinitionVGOIOE7TBinding26 =
                    mindmapDefinitionVGOIOE7TBinding26.slice(
                      0,
                      -1 * mindmapDefinitionVGOIOE7TBinding50 * 2,
                    )),
                  (mindmapDefinitionVGOIOE7TBinding28 =
                    mindmapDefinitionVGOIOE7TBinding28.slice(
                      0,
                      -1 * mindmapDefinitionVGOIOE7TBinding50,
                    )),
                  (mindmapDefinitionVGOIOE7TBinding29 =
                    mindmapDefinitionVGOIOE7TBinding29.slice(
                      0,
                      -1 * mindmapDefinitionVGOIOE7TBinding50,
                    )));
                mindmapDefinitionVGOIOE7TBinding26.push(
                  this.productions_[mindmapDefinitionVGOIOE7TBinding46[1]][0],
                );
                mindmapDefinitionVGOIOE7TBinding28.push(
                  mindmapDefinitionVGOIOE7TBinding48.$,
                );
                mindmapDefinitionVGOIOE7TBinding29.push(
                  mindmapDefinitionVGOIOE7TBinding48._$,
                );
                mindmapDefinitionVGOIOE7TBinding51 =
                  mindmapDefinitionVGOIOE7TBinding30[
                    mindmapDefinitionVGOIOE7TBinding26[
                      mindmapDefinitionVGOIOE7TBinding26.length - 2
                    ]
                  ][
                    mindmapDefinitionVGOIOE7TBinding26[
                      mindmapDefinitionVGOIOE7TBinding26.length - 1
                    ]
                  ];
                mindmapDefinitionVGOIOE7TBinding26.push(
                  mindmapDefinitionVGOIOE7TBinding51,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    mindmapDefinitionVGOIOE7TBinding24.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          mindmapDefinitionVGOIOE7TInput43,
          mindmapDefinitionVGOIOE7TInput44,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              mindmapDefinitionVGOIOE7TInput43,
              mindmapDefinitionVGOIOE7TInput44,
            );
          else throw Error(mindmapDefinitionVGOIOE7TInput43);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          mindmapDefinitionVGOIOE7TInput29,
          mindmapDefinitionVGOIOE7TInput30,
        ) {
          return (
            (this.yy = mindmapDefinitionVGOIOE7TInput30 || this.yy || {}),
            (this._input = mindmapDefinitionVGOIOE7TInput29),
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
          var mindmapDefinitionVGOIOE7TBinding95 = this._input[0];
          return (
            (this.yytext += mindmapDefinitionVGOIOE7TBinding95),
            this.yyleng++,
            this.offset++,
            (this.match += mindmapDefinitionVGOIOE7TBinding95),
            (this.matched += mindmapDefinitionVGOIOE7TBinding95),
            mindmapDefinitionVGOIOE7TBinding95.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            mindmapDefinitionVGOIOE7TBinding95
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput17) {
          var mindmapDefinitionVGOIOE7TBinding69 =
              mindmapDefinitionVGOIOE7TInput17.length,
            mindmapDefinitionVGOIOE7TBinding70 =
              mindmapDefinitionVGOIOE7TInput17.split(/(?:\r\n?|\n)/g);
          this._input = mindmapDefinitionVGOIOE7TInput17 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - mindmapDefinitionVGOIOE7TBinding69,
          );
          this.offset -= mindmapDefinitionVGOIOE7TBinding69;
          var mindmapDefinitionVGOIOE7TBinding71 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          mindmapDefinitionVGOIOE7TBinding70.length - 1 &&
            (this.yylineno -= mindmapDefinitionVGOIOE7TBinding70.length - 1);
          var mindmapDefinitionVGOIOE7TBinding72 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: mindmapDefinitionVGOIOE7TBinding70
                ? (mindmapDefinitionVGOIOE7TBinding70.length ===
                  mindmapDefinitionVGOIOE7TBinding71.length
                    ? this.yylloc.first_column
                    : 0) +
                  mindmapDefinitionVGOIOE7TBinding71[
                    mindmapDefinitionVGOIOE7TBinding71.length -
                      mindmapDefinitionVGOIOE7TBinding70.length
                  ].length -
                  mindmapDefinitionVGOIOE7TBinding70[0].length
                : this.yylloc.first_column - mindmapDefinitionVGOIOE7TBinding69,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                mindmapDefinitionVGOIOE7TBinding72[0],
                mindmapDefinitionVGOIOE7TBinding72[0] +
                  this.yyleng -
                  mindmapDefinitionVGOIOE7TBinding69,
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
        less: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput50) {
          this.unput(this.match.slice(mindmapDefinitionVGOIOE7TInput50));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var mindmapDefinitionVGOIOE7TBinding99 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (mindmapDefinitionVGOIOE7TBinding99.length > 20 ? "..." : "") +
            mindmapDefinitionVGOIOE7TBinding99.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var mindmapDefinitionVGOIOE7TBinding96 = this.match;
          return (
            mindmapDefinitionVGOIOE7TBinding96.length < 20 &&
              (mindmapDefinitionVGOIOE7TBinding96 += this._input.substr(
                0,
                20 - mindmapDefinitionVGOIOE7TBinding96.length,
              )),
            (
              mindmapDefinitionVGOIOE7TBinding96.substr(0, 20) +
              (mindmapDefinitionVGOIOE7TBinding96.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var mindmapDefinitionVGOIOE7TBinding100 = this.pastInput(),
            mindmapDefinitionVGOIOE7TBinding101 = Array(
              mindmapDefinitionVGOIOE7TBinding100.length + 1,
            ).join("-");
          return (
            mindmapDefinitionVGOIOE7TBinding100 +
            this.upcomingInput() +
            "\n" +
            mindmapDefinitionVGOIOE7TBinding101 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          mindmapDefinitionVGOIOE7TInput6,
          mindmapDefinitionVGOIOE7TInput7,
        ) {
          var mindmapDefinitionVGOIOE7TBinding54,
            mindmapDefinitionVGOIOE7TBinding55,
            mindmapDefinitionVGOIOE7TBinding56;
          if (
            (this.options.backtrack_lexer &&
              ((mindmapDefinitionVGOIOE7TBinding56 = {
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
                (mindmapDefinitionVGOIOE7TBinding56.yylloc.range =
                  this.yylloc.range.slice(0))),
            (mindmapDefinitionVGOIOE7TBinding55 =
              mindmapDefinitionVGOIOE7TInput6[0].match(/(?:\r\n?|\n).*/g)),
            mindmapDefinitionVGOIOE7TBinding55 &&
              (this.yylineno += mindmapDefinitionVGOIOE7TBinding55.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: mindmapDefinitionVGOIOE7TBinding55
                ? mindmapDefinitionVGOIOE7TBinding55[
                    mindmapDefinitionVGOIOE7TBinding55.length - 1
                  ].length -
                  mindmapDefinitionVGOIOE7TBinding55[
                    mindmapDefinitionVGOIOE7TBinding55.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  mindmapDefinitionVGOIOE7TInput6[0].length,
            }),
            (this.yytext += mindmapDefinitionVGOIOE7TInput6[0]),
            (this.match += mindmapDefinitionVGOIOE7TInput6[0]),
            (this.matches = mindmapDefinitionVGOIOE7TInput6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              mindmapDefinitionVGOIOE7TInput6[0].length,
            )),
            (this.matched += mindmapDefinitionVGOIOE7TInput6[0]),
            (mindmapDefinitionVGOIOE7TBinding54 = this.performAction.call(
              this,
              this.yy,
              this,
              mindmapDefinitionVGOIOE7TInput7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            mindmapDefinitionVGOIOE7TBinding54)
          )
            return mindmapDefinitionVGOIOE7TBinding54;
          if (this._backtrack) {
            for (var mindmapDefinitionVGOIOE7TBinding57 in mindmapDefinitionVGOIOE7TBinding56)
              this[mindmapDefinitionVGOIOE7TBinding57] =
                mindmapDefinitionVGOIOE7TBinding56[
                  mindmapDefinitionVGOIOE7TBinding57
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var mindmapDefinitionVGOIOE7TBinding63,
            mindmapDefinitionVGOIOE7TBinding64,
            mindmapDefinitionVGOIOE7TBinding65,
            mindmapDefinitionVGOIOE7TBinding66;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var mindmapDefinitionVGOIOE7TBinding67 = this._currentRules(),
              mindmapDefinitionVGOIOE7TBinding68 = 0;
            mindmapDefinitionVGOIOE7TBinding68 <
            mindmapDefinitionVGOIOE7TBinding67.length;
            mindmapDefinitionVGOIOE7TBinding68++
          )
            if (
              ((mindmapDefinitionVGOIOE7TBinding65 = this._input.match(
                this.rules[
                  mindmapDefinitionVGOIOE7TBinding67[
                    mindmapDefinitionVGOIOE7TBinding68
                  ]
                ],
              )),
              mindmapDefinitionVGOIOE7TBinding65 &&
                (!mindmapDefinitionVGOIOE7TBinding64 ||
                  mindmapDefinitionVGOIOE7TBinding65[0].length >
                    mindmapDefinitionVGOIOE7TBinding64[0].length))
            ) {
              if (
                ((mindmapDefinitionVGOIOE7TBinding64 =
                  mindmapDefinitionVGOIOE7TBinding65),
                (mindmapDefinitionVGOIOE7TBinding66 =
                  mindmapDefinitionVGOIOE7TBinding68),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((mindmapDefinitionVGOIOE7TBinding63 = this.test_match(
                    mindmapDefinitionVGOIOE7TBinding65,
                    mindmapDefinitionVGOIOE7TBinding67[
                      mindmapDefinitionVGOIOE7TBinding68
                    ],
                  )),
                  mindmapDefinitionVGOIOE7TBinding63 !== false)
                )
                  return mindmapDefinitionVGOIOE7TBinding63;
                if (this._backtrack) {
                  mindmapDefinitionVGOIOE7TBinding64 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return mindmapDefinitionVGOIOE7TBinding64
            ? ((mindmapDefinitionVGOIOE7TBinding63 = this.test_match(
                mindmapDefinitionVGOIOE7TBinding64,
                mindmapDefinitionVGOIOE7TBinding67[
                  mindmapDefinitionVGOIOE7TBinding66
                ],
              )),
              mindmapDefinitionVGOIOE7TBinding63 === false
                ? false
                : mindmapDefinitionVGOIOE7TBinding63)
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
        begin: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput51) {
          this.conditionStack.push(mindmapDefinitionVGOIOE7TInput51);
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
        topState: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput39) {
          return (
            (mindmapDefinitionVGOIOE7TInput39 =
              this.conditionStack.length -
              1 -
              Math.abs(mindmapDefinitionVGOIOE7TInput39 || 0)),
            mindmapDefinitionVGOIOE7TInput39 >= 0
              ? this.conditionStack[mindmapDefinitionVGOIOE7TInput39]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TInput55) {
          this.begin(mindmapDefinitionVGOIOE7TInput55);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          mindmapDefinitionVGOIOE7TInput2,
          mindmapDefinitionVGOIOE7TInput3,
          mindmapDefinitionVGOIOE7TInput4,
          mindmapDefinitionVGOIOE7TInput5,
        ) {
          switch (mindmapDefinitionVGOIOE7TInput4) {
            case 0:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace(
                    "Found comment",
                    mindmapDefinitionVGOIOE7TInput3.yytext,
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
              mindmapDefinitionVGOIOE7TInput2.getLogger().trace("Begin icon");
              this.begin("ICON");
              break;
            case 6:
              return (
                mindmapDefinitionVGOIOE7TInput2.getLogger().trace("SPACELINE"),
                6
              );
            case 7:
              return 7;
            case 8:
              return 15;
            case 9:
              mindmapDefinitionVGOIOE7TInput2.getLogger().trace("end icon");
              this.popState();
              break;
            case 10:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("Exploding node"),
                this.begin("NODE"),
                19
              );
            case 11:
              return (
                mindmapDefinitionVGOIOE7TInput2.getLogger().trace("Cloud"),
                this.begin("NODE"),
                19
              );
            case 12:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("Explosion Bang"),
                this.begin("NODE"),
                19
              );
            case 13:
              return (
                mindmapDefinitionVGOIOE7TInput2.getLogger().trace("Cloud Bang"),
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
              mindmapDefinitionVGOIOE7TInput2
                .getLogger()
                .trace("Starting NSTR");
              this.begin("NSTR");
              break;
            case 25:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace(
                    "description:",
                    mindmapDefinitionVGOIOE7TInput3.yytext,
                  ),
                "NODE_DESCR"
              );
            case 26:
              this.popState();
              break;
            case 27:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end ))"),
                "NODE_DEND"
              );
            case 28:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2.getLogger().trace("node end )"),
                "NODE_DEND"
              );
            case 29:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace(
                    "node end ...",
                    mindmapDefinitionVGOIOE7TInput3.yytext,
                  ),
                "NODE_DEND"
              );
            case 30:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 31:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end (-"),
                "NODE_DEND"
              );
            case 32:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end (-"),
                "NODE_DEND"
              );
            case 33:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 34:
              return (
                this.popState(),
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace("node end (("),
                "NODE_DEND"
              );
            case 35:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    mindmapDefinitionVGOIOE7TInput3.yytext,
                  ),
                20
              );
            case 36:
              return (
                mindmapDefinitionVGOIOE7TInput2
                  .getLogger()
                  .trace(
                    "Long description:",
                    mindmapDefinitionVGOIOE7TInput3.yytext,
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
    function mindmapDefinitionVGOIOE7THelper1() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(mindmapDefinitionVGOIOE7THelper1, "Parser"),
      (mindmapDefinitionVGOIOE7THelper1.prototype =
        mindmapDefinitionVGOIOE7TBinding24),
      (mindmapDefinitionVGOIOE7TBinding24.Parser =
        mindmapDefinitionVGOIOE7THelper1),
      new mindmapDefinitionVGOIOE7THelper1()
    );
  })();
  mindmapDefinitionVGOIOE7TBinding1.parser = mindmapDefinitionVGOIOE7TBinding1;
  mindmapDefinitionVGOIOE7TBinding2 = mindmapDefinitionVGOIOE7TBinding1;
  mindmapDefinitionVGOIOE7TBinding3 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  };
  mindmapDefinitionVGOIOE7TBinding4 = class {
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = mindmapDefinitionVGOIOE7TBinding3;
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
    getParent(mindmapDefinitionVGOIOE7TInput42) {
      for (
        let mindmapDefinitionVGOIOE7TBinding108 = this.nodes.length - 1;
        mindmapDefinitionVGOIOE7TBinding108 >= 0;
        mindmapDefinitionVGOIOE7TBinding108--
      )
        if (
          this.nodes[mindmapDefinitionVGOIOE7TBinding108].level <
          mindmapDefinitionVGOIOE7TInput42
        )
          return this.nodes[mindmapDefinitionVGOIOE7TBinding108];
      return null;
    }
    getMindmap() {
      return this.nodes.length > 0 ? this.nodes[0] : null;
    }
    addNode(
      mindmapDefinitionVGOIOE7TInput19,
      mindmapDefinitionVGOIOE7TInput20,
      mindmapDefinitionVGOIOE7TInput21,
      mindmapDefinitionVGOIOE7TInput22,
    ) {
      chunkAGHRB4JFI.info(
        "addNode",
        mindmapDefinitionVGOIOE7TInput19,
        mindmapDefinitionVGOIOE7TInput20,
        mindmapDefinitionVGOIOE7TInput21,
        mindmapDefinitionVGOIOE7TInput22,
      );
      let mindmapDefinitionVGOIOE7TBinding74 = false;
      this.nodes.length === 0
        ? ((this.baseLevel = mindmapDefinitionVGOIOE7TInput19),
          (mindmapDefinitionVGOIOE7TInput19 = 0),
          (mindmapDefinitionVGOIOE7TBinding74 = true))
        : this.baseLevel !== undefined &&
          ((mindmapDefinitionVGOIOE7TInput19 -= this.baseLevel),
          (mindmapDefinitionVGOIOE7TBinding74 = false));
      let mindmapDefinitionVGOIOE7TBinding75 = chunkABZYJK2DB(),
        mindmapDefinitionVGOIOE7TBinding76 =
          mindmapDefinitionVGOIOE7TBinding75.mindmap?.padding ??
          _chunkABZYJK2DD.mindmap.padding;
      switch (mindmapDefinitionVGOIOE7TInput22) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          mindmapDefinitionVGOIOE7TBinding76 *= 2;
          break;
      }
      let mindmapDefinitionVGOIOE7TBinding77 = {
          id: this.count++,
          nodeId: chunkABZYJK2DL(
            mindmapDefinitionVGOIOE7TInput20,
            mindmapDefinitionVGOIOE7TBinding75,
          ),
          level: mindmapDefinitionVGOIOE7TInput19,
          descr: chunkABZYJK2DL(
            mindmapDefinitionVGOIOE7TInput21,
            mindmapDefinitionVGOIOE7TBinding75,
          ),
          type: mindmapDefinitionVGOIOE7TInput22,
          children: [],
          width:
            mindmapDefinitionVGOIOE7TBinding75.mindmap?.maxNodeWidth ??
            _chunkABZYJK2DD.mindmap.maxNodeWidth,
          padding: mindmapDefinitionVGOIOE7TBinding76,
          isRoot: mindmapDefinitionVGOIOE7TBinding74,
        },
        mindmapDefinitionVGOIOE7TBinding78 = this.getParent(
          mindmapDefinitionVGOIOE7TInput19,
        );
      if (mindmapDefinitionVGOIOE7TBinding78) {
        mindmapDefinitionVGOIOE7TBinding78.children.push(
          mindmapDefinitionVGOIOE7TBinding77,
        );
        this.nodes.push(mindmapDefinitionVGOIOE7TBinding77);
      } else if (mindmapDefinitionVGOIOE7TBinding74)
        this.nodes.push(mindmapDefinitionVGOIOE7TBinding77);
      else
        throw Error(
          `There can be only one root. No parent could be found for ("${mindmapDefinitionVGOIOE7TBinding77.descr}")`,
        );
    }
    getType(
      mindmapDefinitionVGOIOE7TInput34,
      mindmapDefinitionVGOIOE7TInput35,
    ) {
      switch (
        (chunkAGHRB4JFI.debug(
          "In get type",
          mindmapDefinitionVGOIOE7TInput34,
          mindmapDefinitionVGOIOE7TInput35,
        ),
        mindmapDefinitionVGOIOE7TInput34)
      ) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          return mindmapDefinitionVGOIOE7TInput35 === ")"
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
      mindmapDefinitionVGOIOE7TInput52,
      mindmapDefinitionVGOIOE7TInput53,
    ) {
      this.elements[mindmapDefinitionVGOIOE7TInput52] =
        mindmapDefinitionVGOIOE7TInput53;
    }
    getElementById(mindmapDefinitionVGOIOE7TInput54) {
      return this.elements[mindmapDefinitionVGOIOE7TInput54];
    }
    decorateNode(mindmapDefinitionVGOIOE7TInput38) {
      if (!mindmapDefinitionVGOIOE7TInput38) return;
      let mindmapDefinitionVGOIOE7TBinding102 = chunkABZYJK2DB(),
        mindmapDefinitionVGOIOE7TBinding103 = this.nodes[this.nodes.length - 1];
      mindmapDefinitionVGOIOE7TInput38.icon &&
        (mindmapDefinitionVGOIOE7TBinding103.icon = chunkABZYJK2DL(
          mindmapDefinitionVGOIOE7TInput38.icon,
          mindmapDefinitionVGOIOE7TBinding102,
        ));
      mindmapDefinitionVGOIOE7TInput38.class &&
        (mindmapDefinitionVGOIOE7TBinding103.class = chunkABZYJK2DL(
          mindmapDefinitionVGOIOE7TInput38.class,
          mindmapDefinitionVGOIOE7TBinding102,
        ));
    }
    type2Str(mindmapDefinitionVGOIOE7TInput33) {
      switch (mindmapDefinitionVGOIOE7TInput33) {
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
      mindmapDefinitionVGOIOE7TInput36,
      mindmapDefinitionVGOIOE7TInput37,
    ) {
      if (
        (mindmapDefinitionVGOIOE7TInput36.level === 0
          ? (mindmapDefinitionVGOIOE7TInput36.section = undefined)
          : (mindmapDefinitionVGOIOE7TInput36.section =
              mindmapDefinitionVGOIOE7TInput37),
        mindmapDefinitionVGOIOE7TInput36.children)
      )
        for (let [
          mindmapDefinitionVGOIOE7TBinding106,
          mindmapDefinitionVGOIOE7TBinding107,
        ] of mindmapDefinitionVGOIOE7TInput36.children.entries()) {
          let mindmapDefinitionVGOIOE7TBinding109 =
            mindmapDefinitionVGOIOE7TInput36.level === 0
              ? mindmapDefinitionVGOIOE7TBinding106
              : mindmapDefinitionVGOIOE7TInput37;
          this.assignSections(
            mindmapDefinitionVGOIOE7TBinding107,
            mindmapDefinitionVGOIOE7TBinding109,
          );
        }
    }
    flattenNodes(
      mindmapDefinitionVGOIOE7TInput15,
      mindmapDefinitionVGOIOE7TInput16,
    ) {
      let mindmapDefinitionVGOIOE7TBinding59 = ["mindmap-node"];
      mindmapDefinitionVGOIOE7TInput15.isRoot === true
        ? mindmapDefinitionVGOIOE7TBinding59.push("section-root", "section--1")
        : mindmapDefinitionVGOIOE7TInput15.section !== undefined &&
          mindmapDefinitionVGOIOE7TBinding59.push(
            `section-${mindmapDefinitionVGOIOE7TInput15.section}`,
          );
      mindmapDefinitionVGOIOE7TInput15.class &&
        mindmapDefinitionVGOIOE7TBinding59.push(
          mindmapDefinitionVGOIOE7TInput15.class,
        );
      let mindmapDefinitionVGOIOE7TBinding60 =
          mindmapDefinitionVGOIOE7TBinding59.join(" "),
        mindmapDefinitionVGOIOE7TBinding61 = chunkAGHRB4JFN(
          (mindmapDefinitionVGOIOE7TInput32) => {
            switch (mindmapDefinitionVGOIOE7TInput32) {
              case mindmapDefinitionVGOIOE7TBinding3.CIRCLE:
                return "mindmapCircle";
              case mindmapDefinitionVGOIOE7TBinding3.RECT:
                return "rect";
              case mindmapDefinitionVGOIOE7TBinding3.ROUNDED_RECT:
                return "rounded";
              case mindmapDefinitionVGOIOE7TBinding3.CLOUD:
                return "cloud";
              case mindmapDefinitionVGOIOE7TBinding3.BANG:
                return "bang";
              case mindmapDefinitionVGOIOE7TBinding3.HEXAGON:
                return "hexagon";
              case mindmapDefinitionVGOIOE7TBinding3.DEFAULT:
                return "defaultMindmapNode";
              case mindmapDefinitionVGOIOE7TBinding3.NO_BORDER:
              default:
                return "rect";
            }
          },
          "getShapeFromType",
        ),
        mindmapDefinitionVGOIOE7TBinding62 = {
          id: mindmapDefinitionVGOIOE7TInput15.id.toString(),
          domId: "node_" + mindmapDefinitionVGOIOE7TInput15.id.toString(),
          label: mindmapDefinitionVGOIOE7TInput15.descr,
          isGroup: false,
          shape: mindmapDefinitionVGOIOE7TBinding61(
            mindmapDefinitionVGOIOE7TInput15.type,
          ),
          width: mindmapDefinitionVGOIOE7TInput15.width,
          height: mindmapDefinitionVGOIOE7TInput15.height ?? 0,
          padding: mindmapDefinitionVGOIOE7TInput15.padding,
          cssClasses: mindmapDefinitionVGOIOE7TBinding60,
          cssStyles: [],
          look: "default",
          icon: mindmapDefinitionVGOIOE7TInput15.icon,
          x: mindmapDefinitionVGOIOE7TInput15.x,
          y: mindmapDefinitionVGOIOE7TInput15.y,
          level: mindmapDefinitionVGOIOE7TInput15.level,
          nodeId: mindmapDefinitionVGOIOE7TInput15.nodeId,
          type: mindmapDefinitionVGOIOE7TInput15.type,
          section: mindmapDefinitionVGOIOE7TInput15.section,
        };
      if (
        (mindmapDefinitionVGOIOE7TInput16.push(
          mindmapDefinitionVGOIOE7TBinding62,
        ),
        mindmapDefinitionVGOIOE7TInput15.children)
      )
        for (let mindmapDefinitionVGOIOE7TBinding110 of mindmapDefinitionVGOIOE7TInput15.children)
          this.flattenNodes(
            mindmapDefinitionVGOIOE7TBinding110,
            mindmapDefinitionVGOIOE7TInput16,
          );
    }
    generateEdges(
      mindmapDefinitionVGOIOE7TInput27,
      mindmapDefinitionVGOIOE7TInput28,
    ) {
      if (mindmapDefinitionVGOIOE7TInput27.children)
        for (let mindmapDefinitionVGOIOE7TBinding91 of mindmapDefinitionVGOIOE7TInput27.children) {
          let mindmapDefinitionVGOIOE7TBinding92 = "edge";
          mindmapDefinitionVGOIOE7TBinding91.section !== undefined &&
            (mindmapDefinitionVGOIOE7TBinding92 += ` section-edge-${mindmapDefinitionVGOIOE7TBinding91.section}`);
          let mindmapDefinitionVGOIOE7TBinding93 =
            mindmapDefinitionVGOIOE7TInput27.level + 1;
          mindmapDefinitionVGOIOE7TBinding92 += ` edge-depth-${mindmapDefinitionVGOIOE7TBinding93}`;
          let mindmapDefinitionVGOIOE7TBinding94 = {
            id: `edge_${mindmapDefinitionVGOIOE7TInput27.id}_${mindmapDefinitionVGOIOE7TBinding91.id}`,
            start: mindmapDefinitionVGOIOE7TInput27.id.toString(),
            end: mindmapDefinitionVGOIOE7TBinding91.id.toString(),
            type: "normal",
            curve: "basis",
            thickness: "normal",
            look: "default",
            classes: mindmapDefinitionVGOIOE7TBinding92,
            depth: mindmapDefinitionVGOIOE7TInput27.level,
            section: mindmapDefinitionVGOIOE7TBinding91.section,
          };
          mindmapDefinitionVGOIOE7TInput28.push(
            mindmapDefinitionVGOIOE7TBinding94,
          );
          this.generateEdges(
            mindmapDefinitionVGOIOE7TBinding91,
            mindmapDefinitionVGOIOE7TInput28,
          );
        }
    }
    getData() {
      let mindmapDefinitionVGOIOE7TBinding79 = this.getMindmap(),
        mindmapDefinitionVGOIOE7TBinding80 = chunkABZYJK2DB(),
        mindmapDefinitionVGOIOE7TBinding81 =
          chunkABZYJK2DD().layout !== undefined,
        mindmapDefinitionVGOIOE7TBinding82 = mindmapDefinitionVGOIOE7TBinding80;
      if (
        (mindmapDefinitionVGOIOE7TBinding81 ||
          (mindmapDefinitionVGOIOE7TBinding82.layout = "cose-bilkent"),
        !mindmapDefinitionVGOIOE7TBinding79)
      )
        return {
          nodes: [],
          edges: [],
          config: mindmapDefinitionVGOIOE7TBinding82,
        };
      chunkAGHRB4JFI.debug(
        "getData: mindmapRoot",
        mindmapDefinitionVGOIOE7TBinding79,
        mindmapDefinitionVGOIOE7TBinding80,
      );
      this.assignSections(mindmapDefinitionVGOIOE7TBinding79);
      let mindmapDefinitionVGOIOE7TBinding83 = [],
        mindmapDefinitionVGOIOE7TBinding84 = [];
      this.flattenNodes(
        mindmapDefinitionVGOIOE7TBinding79,
        mindmapDefinitionVGOIOE7TBinding83,
      );
      this.generateEdges(
        mindmapDefinitionVGOIOE7TBinding79,
        mindmapDefinitionVGOIOE7TBinding84,
      );
      chunkAGHRB4JFI.debug(
        `getData: processed ${mindmapDefinitionVGOIOE7TBinding83.length} nodes and ${mindmapDefinitionVGOIOE7TBinding84.length} edges`,
      );
      let mindmapDefinitionVGOIOE7TBinding85 = new Map();
      for (let mindmapDefinitionVGOIOE7TBinding105 of mindmapDefinitionVGOIOE7TBinding83)
        mindmapDefinitionVGOIOE7TBinding85.set(
          mindmapDefinitionVGOIOE7TBinding105.id,
          {
            shape: mindmapDefinitionVGOIOE7TBinding105.shape,
            width: mindmapDefinitionVGOIOE7TBinding105.width,
            height: mindmapDefinitionVGOIOE7TBinding105.height,
            padding: mindmapDefinitionVGOIOE7TBinding105.padding,
          },
        );
      return {
        nodes: mindmapDefinitionVGOIOE7TBinding83,
        edges: mindmapDefinitionVGOIOE7TBinding84,
        config: mindmapDefinitionVGOIOE7TBinding82,
        rootNode: mindmapDefinitionVGOIOE7TBinding79,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: Object.fromEntries(mindmapDefinitionVGOIOE7TBinding85),
        type: "mindmap",
        diagramId: "mindmap-" + appInitialLrt(),
      };
    }
    getLogger() {
      return chunkAGHRB4JFI;
    }
  };
  mindmapDefinitionVGOIOE7TBinding5 = {
    draw: chunkAGHRB4JFN(
      async (
        mindmapDefinitionVGOIOE7TInput23,
        mindmapDefinitionVGOIOE7TInput24,
        mindmapDefinitionVGOIOE7TInput25,
        mindmapDefinitionVGOIOE7TInput26,
      ) => {
        chunkAGHRB4JFI.debug(
          "Rendering mindmap diagram\n" + mindmapDefinitionVGOIOE7TInput23,
        );
        let mindmapDefinitionVGOIOE7TBinding86 =
            mindmapDefinitionVGOIOE7TInput26.db,
          mindmapDefinitionVGOIOE7TBinding87 =
            mindmapDefinitionVGOIOE7TBinding86.getData(),
          mindmapDefinitionVGOIOE7TBinding88 = chunk55IACEB6T(
            mindmapDefinitionVGOIOE7TInput24,
            mindmapDefinitionVGOIOE7TBinding87.config.securityLevel,
          );
        mindmapDefinitionVGOIOE7TBinding87.type =
          mindmapDefinitionVGOIOE7TInput26.type;
        mindmapDefinitionVGOIOE7TBinding87.layoutAlgorithm = chunkN4CR4FBYT(
          mindmapDefinitionVGOIOE7TBinding87.config.layout,
          {
            fallback: "cose-bilkent",
          },
        );
        mindmapDefinitionVGOIOE7TBinding87.diagramId =
          mindmapDefinitionVGOIOE7TInput24;
        mindmapDefinitionVGOIOE7TBinding86.getMindmap() &&
          (mindmapDefinitionVGOIOE7TBinding87.nodes.forEach((item) => {
            item.shape === "rounded"
              ? ((item.radius = 15),
                (item.taper = 15),
                (item.stroke = "none"),
                (item.width = 0),
                (item.padding = 15))
              : item.shape === "circle"
                ? (item.padding = 10)
                : item.shape === "rect" &&
                  ((item.width = 0), (item.padding = 10));
          }),
          await chunkN4CR4FBYI(
            mindmapDefinitionVGOIOE7TBinding87,
            mindmapDefinitionVGOIOE7TBinding88,
          ),
          chunkQN33PNHLN(
            mindmapDefinitionVGOIOE7TBinding88,
            mindmapDefinitionVGOIOE7TBinding87.config.mindmap?.padding ??
              _chunkABZYJK2DD.mindmap.padding,
            "mindmapDiagram",
            mindmapDefinitionVGOIOE7TBinding87.config.mindmap?.useMaxWidth ??
              _chunkABZYJK2DD.mindmap.useMaxWidth,
          ));
      },
      "draw",
    ),
  };
  mindmapDefinitionVGOIOE7TBinding6 = chunkAGHRB4JFN(
    (mindmapDefinitionVGOIOE7TInput18) => {
      let mindmapDefinitionVGOIOE7TBinding73 = "";
      for (
        let mindmapDefinitionVGOIOE7TBinding98 = 0;
        mindmapDefinitionVGOIOE7TBinding98 <
        mindmapDefinitionVGOIOE7TInput18.THEME_COLOR_LIMIT;
        mindmapDefinitionVGOIOE7TBinding98++
      ) {
        mindmapDefinitionVGOIOE7TInput18[
          "lineColor" + mindmapDefinitionVGOIOE7TBinding98
        ] =
          mindmapDefinitionVGOIOE7TInput18[
            "lineColor" + mindmapDefinitionVGOIOE7TBinding98
          ] ||
          mindmapDefinitionVGOIOE7TInput18[
            "cScaleInv" + mindmapDefinitionVGOIOE7TBinding98
          ];
        distP(
          mindmapDefinitionVGOIOE7TInput18[
            "lineColor" + mindmapDefinitionVGOIOE7TBinding98
          ],
        )
          ? (mindmapDefinitionVGOIOE7TInput18[
              "lineColor" + mindmapDefinitionVGOIOE7TBinding98
            ] = distD(
              mindmapDefinitionVGOIOE7TInput18[
                "lineColor" + mindmapDefinitionVGOIOE7TBinding98
              ],
              20,
            ))
          : (mindmapDefinitionVGOIOE7TInput18[
              "lineColor" + mindmapDefinitionVGOIOE7TBinding98
            ] = distC(
              mindmapDefinitionVGOIOE7TInput18[
                "lineColor" + mindmapDefinitionVGOIOE7TBinding98
              ],
              20,
            ));
      }
      for (
        let mindmapDefinitionVGOIOE7TBinding89 = 0;
        mindmapDefinitionVGOIOE7TBinding89 <
        mindmapDefinitionVGOIOE7TInput18.THEME_COLOR_LIMIT;
        mindmapDefinitionVGOIOE7TBinding89++
      ) {
        let mindmapDefinitionVGOIOE7TBinding90 =
          "" + (17 - 3 * mindmapDefinitionVGOIOE7TBinding89);
        mindmapDefinitionVGOIOE7TBinding73 += `
    .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} rect, .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} path, .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} circle, .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} polygon, .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} path  {
      fill: ${mindmapDefinitionVGOIOE7TInput18["cScale" + mindmapDefinitionVGOIOE7TBinding89]};
    }
    .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} text {
     fill: ${mindmapDefinitionVGOIOE7TInput18["cScaleLabel" + mindmapDefinitionVGOIOE7TBinding89]};
    }
    .node-icon-${mindmapDefinitionVGOIOE7TBinding89 - 1} {
      font-size: 40px;
      color: ${mindmapDefinitionVGOIOE7TInput18["cScaleLabel" + mindmapDefinitionVGOIOE7TBinding89]};
    }
    .section-edge-${mindmapDefinitionVGOIOE7TBinding89 - 1}{
      stroke: ${mindmapDefinitionVGOIOE7TInput18["cScale" + mindmapDefinitionVGOIOE7TBinding89]};
    }
    .edge-depth-${mindmapDefinitionVGOIOE7TBinding89 - 1}{
      stroke-width: ${mindmapDefinitionVGOIOE7TBinding90};
    }
    .section-${mindmapDefinitionVGOIOE7TBinding89 - 1} line {
      stroke: ${mindmapDefinitionVGOIOE7TInput18["cScaleInv" + mindmapDefinitionVGOIOE7TBinding89]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
      }
      return mindmapDefinitionVGOIOE7TBinding73;
    },
    "genSections",
  );
  MindmapDefinitionVGOIOE7T = {
    get db() {
      return new mindmapDefinitionVGOIOE7TBinding4();
    },
    renderer: mindmapDefinitionVGOIOE7TBinding5,
    parser: mindmapDefinitionVGOIOE7TBinding2,
    styles: chunkAGHRB4JFN(
      (mindmapDefinitionVGOIOE7TInput31) => `
  .edge {
    stroke-width: 3;
  }
  ${mindmapDefinitionVGOIOE7TBinding6(mindmapDefinitionVGOIOE7TInput31)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${mindmapDefinitionVGOIOE7TInput31.git0};
  }
  .section-root text {
    fill: ${mindmapDefinitionVGOIOE7TInput31.gitBranchLabel0};
  }
  .section-root span {
    color: ${mindmapDefinitionVGOIOE7TInput31.gitBranchLabel0};
  }
  .section-2 span {
    color: ${mindmapDefinitionVGOIOE7TInput31.gitBranchLabel0};
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
`,
      "getStyles",
    ),
  };
})();
export { MindmapDefinitionVGOIOE7T as diagram };
