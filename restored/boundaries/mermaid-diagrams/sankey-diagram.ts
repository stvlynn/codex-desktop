// Restored from ref/webview/assets/sankeyDiagram-TZEHDZUN-D8Ou0Mc5.js
// Mermaid sankey diagram definition (db + renderer + parser).
// Stage 3 candidate: app-initial aliases rewritten to IMPORT_MAP semantic vendor paths.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import { scaleOrdinal } from "../../vendor/d3-scale-linear";
import { d } from "../d3-hierarchy";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  K as _chunkABZYJK2DK,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  K,
  s,
  u,
  _,
  V,
  W,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  sankeyLinkHorizontal as _srcR,
  ensureSankeyRuntimeT as _srcT,
  sankeyJustify,
  sankey,
  sankeyLeft,
  sankeyCenter,
  sankeyRight,
} from "../../vendor/d3-sankey";
var sankeyDiagramTZEHDZUNBinding1,
  sankeyDiagramTZEHDZUNBinding2,
  sankeyDiagramTZEHDZUNBinding3,
  sankeyDiagramTZEHDZUNBinding4,
  sankeyDiagramTZEHDZUNBinding5,
  sankeyDiagramTZEHDZUNBinding6,
  sankeyDiagramTZEHDZUNBinding7,
  sankeyDiagramTZEHDZUNBinding8,
  sankeyDiagramTZEHDZUNBinding9,
  sankeyDiagramTZEHDZUNBinding10,
  sankeyDiagramTZEHDZUNBinding11,
  sankeyDiagramTZEHDZUNBinding12,
  sankeyDiagramTZEHDZUNBinding13,
  sankeyDiagramTZEHDZUNBinding14,
  sankeyDiagramTZEHDZUNBinding15,
  sankeyDiagramTZEHDZUNBinding16,
  SankeyDiagramTZEHDZUN;
esmInit(() => {
  _chunkABZYJK2DK();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  _srcT();
  sankeyDiagramTZEHDZUNBinding1 = (function () {
    var sankeyDiagramTZEHDZUNBinding17 = defineFunctionName(function (
        sankeyDiagramTZEHDZUNInput29,
        sankeyDiagramTZEHDZUNInput30,
        sankeyDiagramTZEHDZUNInput31,
        sankeyDiagramTZEHDZUNInput32,
      ) {
        for (
          sankeyDiagramTZEHDZUNInput31 ||= {},
            sankeyDiagramTZEHDZUNInput32 = sankeyDiagramTZEHDZUNInput29.length;
          sankeyDiagramTZEHDZUNInput32--;
          sankeyDiagramTZEHDZUNInput31[
            sankeyDiagramTZEHDZUNInput29[sankeyDiagramTZEHDZUNInput32]
          ] = sankeyDiagramTZEHDZUNInput30
        );
        return sankeyDiagramTZEHDZUNInput31;
      }, "o"),
      sankeyDiagramTZEHDZUNBinding18 = [1, 9],
      sankeyDiagramTZEHDZUNBinding19 = [1, 10],
      sankeyDiagramTZEHDZUNBinding20 = [1, 5, 10, 12],
      sankeyDiagramTZEHDZUNBinding21 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          SANKEY: 4,
          NEWLINE: 5,
          csv: 6,
          opt_eof: 7,
          record: 8,
          csv_tail: 9,
          EOF: 10,
          "field[source]": 11,
          COMMA: 12,
          "field[target]": 13,
          "field[value]": 14,
          field: 15,
          escaped: 16,
          non_escaped: 17,
          DQUOTE: 18,
          ESCAPED_TEXT: 19,
          NON_ESCAPED_TEXT: 20,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "SANKEY",
          5: "NEWLINE",
          10: "EOF",
          11: "field[source]",
          12: "COMMA",
          13: "field[target]",
          14: "field[value]",
          18: "DQUOTE",
          19: "ESCAPED_TEXT",
          20: "NON_ESCAPED_TEXT",
        },
        productions_: [
          0,
          [3, 4],
          [6, 2],
          [9, 2],
          [9, 0],
          [7, 1],
          [7, 0],
          [8, 5],
          [15, 1],
          [15, 1],
          [16, 3],
          [17, 1],
        ],
        performAction: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput11,
          sankeyDiagramTZEHDZUNInput12,
          sankeyDiagramTZEHDZUNInput13,
          sankeyDiagramTZEHDZUNInput14,
          sankeyDiagramTZEHDZUNInput15,
          sankeyDiagramTZEHDZUNInput16,
          sankeyDiagramTZEHDZUNInput17,
        ) {
          var sankeyDiagramTZEHDZUNBinding83 =
            sankeyDiagramTZEHDZUNInput16.length - 1;
          switch (sankeyDiagramTZEHDZUNInput15) {
            case 7:
              let sankeyDiagramTZEHDZUNBinding84 =
                  sankeyDiagramTZEHDZUNInput14.findOrCreateNode(
                    sankeyDiagramTZEHDZUNInput16[
                      sankeyDiagramTZEHDZUNBinding83 - 4
                    ]
                      .trim()
                      .replaceAll('""', '"'),
                  ),
                sankeyDiagramTZEHDZUNBinding85 =
                  sankeyDiagramTZEHDZUNInput14.findOrCreateNode(
                    sankeyDiagramTZEHDZUNInput16[
                      sankeyDiagramTZEHDZUNBinding83 - 2
                    ]
                      .trim()
                      .replaceAll('""', '"'),
                  ),
                sankeyDiagramTZEHDZUNBinding86 = parseFloat(
                  sankeyDiagramTZEHDZUNInput16[
                    sankeyDiagramTZEHDZUNBinding83
                  ].trim(),
                );
              sankeyDiagramTZEHDZUNInput14.addLink(
                sankeyDiagramTZEHDZUNBinding84,
                sankeyDiagramTZEHDZUNBinding85,
                sankeyDiagramTZEHDZUNBinding86,
              );
              break;
            case 8:
            case 9:
            case 11:
              this.$ =
                sankeyDiagramTZEHDZUNInput16[sankeyDiagramTZEHDZUNBinding83];
              break;
            case 10:
              this.$ =
                sankeyDiagramTZEHDZUNInput16[
                  sankeyDiagramTZEHDZUNBinding83 - 1
                ];
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
          {
            5: [1, 3],
          },
          {
            6: 4,
            8: 5,
            15: 6,
            16: 7,
            17: 8,
            18: sankeyDiagramTZEHDZUNBinding18,
            20: sankeyDiagramTZEHDZUNBinding19,
          },
          {
            1: [2, 6],
            7: 11,
            10: [1, 12],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding19,
            [2, 4],
            {
              9: 13,
              5: [1, 14],
            },
          ),
          {
            12: [1, 15],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding20,
            [2, 8],
          ),
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding20,
            [2, 9],
          ),
          {
            19: [1, 16],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding20,
            [2, 11],
          ),
          {
            1: [2, 1],
          },
          {
            1: [2, 5],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding19,
            [2, 2],
          ),
          {
            6: 17,
            8: 5,
            15: 6,
            16: 7,
            17: 8,
            18: sankeyDiagramTZEHDZUNBinding18,
            20: sankeyDiagramTZEHDZUNBinding19,
          },
          {
            15: 18,
            16: 7,
            17: 8,
            18: sankeyDiagramTZEHDZUNBinding18,
            20: sankeyDiagramTZEHDZUNBinding19,
          },
          {
            18: [1, 19],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding19,
            [2, 3],
          ),
          {
            12: [1, 20],
          },
          sankeyDiagramTZEHDZUNBinding17(
            sankeyDiagramTZEHDZUNBinding20,
            [2, 10],
          ),
          {
            15: 21,
            16: 7,
            17: 8,
            18: sankeyDiagramTZEHDZUNBinding18,
            20: sankeyDiagramTZEHDZUNBinding19,
          },
          sankeyDiagramTZEHDZUNBinding17([1, 5, 10], [2, 7]),
        ],
        defaultActions: {
          11: [2, 1],
          12: [2, 5],
        },
        parseError: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput23,
          sankeyDiagramTZEHDZUNInput24,
        ) {
          if (sankeyDiagramTZEHDZUNInput24.recoverable)
            this.trace(sankeyDiagramTZEHDZUNInput23);
          else {
            var sankeyDiagramTZEHDZUNBinding94 = Error(
              sankeyDiagramTZEHDZUNInput23,
            );
            throw (
              (sankeyDiagramTZEHDZUNBinding94.hash =
                sankeyDiagramTZEHDZUNInput24),
              sankeyDiagramTZEHDZUNBinding94
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (sankeyDiagramTZEHDZUNInput1) {
          var sankeyDiagramTZEHDZUNBinding22 = this,
            sankeyDiagramTZEHDZUNBinding23 = [0],
            sankeyDiagramTZEHDZUNBinding24 = [],
            sankeyDiagramTZEHDZUNBinding25 = [null],
            sankeyDiagramTZEHDZUNBinding26 = [],
            sankeyDiagramTZEHDZUNBinding27 = this.table,
            sankeyDiagramTZEHDZUNBinding28 = "",
            sankeyDiagramTZEHDZUNBinding29 = 0,
            sankeyDiagramTZEHDZUNBinding30 = 0,
            sankeyDiagramTZEHDZUNBinding31 = 0,
            sankeyDiagramTZEHDZUNBinding34 =
              sankeyDiagramTZEHDZUNBinding26.slice.call(arguments, 1),
            sankeyDiagramTZEHDZUNBinding35 = Object.create(this.lexer),
            sankeyDiagramTZEHDZUNBinding36 = {
              yy: {},
            };
          for (var sankeyDiagramTZEHDZUNBinding37 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              sankeyDiagramTZEHDZUNBinding37,
            ) &&
              (sankeyDiagramTZEHDZUNBinding36.yy[
                sankeyDiagramTZEHDZUNBinding37
              ] = this.yy[sankeyDiagramTZEHDZUNBinding37]);
          sankeyDiagramTZEHDZUNBinding35.setInput(
            sankeyDiagramTZEHDZUNInput1,
            sankeyDiagramTZEHDZUNBinding36.yy,
          );
          sankeyDiagramTZEHDZUNBinding36.yy.lexer =
            sankeyDiagramTZEHDZUNBinding35;
          sankeyDiagramTZEHDZUNBinding36.yy.parser = this;
          sankeyDiagramTZEHDZUNBinding35.yylloc === undefined &&
            (sankeyDiagramTZEHDZUNBinding35.yylloc = {});
          var sankeyDiagramTZEHDZUNBinding38 =
            sankeyDiagramTZEHDZUNBinding35.yylloc;
          sankeyDiagramTZEHDZUNBinding26.push(sankeyDiagramTZEHDZUNBinding38);
          var sankeyDiagramTZEHDZUNBinding39 =
            sankeyDiagramTZEHDZUNBinding35.options &&
            sankeyDiagramTZEHDZUNBinding35.options.ranges;
          typeof sankeyDiagramTZEHDZUNBinding36.yy.parseError == "function"
            ? (this.parseError = sankeyDiagramTZEHDZUNBinding36.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function sankeyDiagramTZEHDZUNHelper2(sankeyDiagramTZEHDZUNInput33) {
            sankeyDiagramTZEHDZUNBinding23.length -=
              2 * sankeyDiagramTZEHDZUNInput33;
            sankeyDiagramTZEHDZUNBinding25.length -=
              sankeyDiagramTZEHDZUNInput33;
            sankeyDiagramTZEHDZUNBinding26.length -=
              sankeyDiagramTZEHDZUNInput33;
          }
          defineFunctionName(sankeyDiagramTZEHDZUNHelper2, "popStack");
          function sankeyDiagramTZEHDZUNHelper3() {
            var sankeyDiagramTZEHDZUNBinding90 =
              sankeyDiagramTZEHDZUNBinding24.pop() ||
              sankeyDiagramTZEHDZUNBinding35.lex() ||
              1;
            return (
              typeof sankeyDiagramTZEHDZUNBinding90 != "number" &&
                (sankeyDiagramTZEHDZUNBinding90 instanceof Array &&
                  ((sankeyDiagramTZEHDZUNBinding24 =
                    sankeyDiagramTZEHDZUNBinding90),
                  (sankeyDiagramTZEHDZUNBinding90 =
                    sankeyDiagramTZEHDZUNBinding24.pop())),
                (sankeyDiagramTZEHDZUNBinding90 =
                  sankeyDiagramTZEHDZUNBinding22.symbols_[
                    sankeyDiagramTZEHDZUNBinding90
                  ] || sankeyDiagramTZEHDZUNBinding90)),
              sankeyDiagramTZEHDZUNBinding90
            );
          }
          defineFunctionName(sankeyDiagramTZEHDZUNHelper3, "lex");
          for (
            var sankeyDiagramTZEHDZUNBinding40,
              sankeyDiagramTZEHDZUNBinding41,
              sankeyDiagramTZEHDZUNBinding42,
              sankeyDiagramTZEHDZUNBinding43,
              sankeyDiagramTZEHDZUNBinding44,
              sankeyDiagramTZEHDZUNBinding45 = {},
              sankeyDiagramTZEHDZUNBinding46,
              sankeyDiagramTZEHDZUNBinding47,
              sankeyDiagramTZEHDZUNBinding48,
              sankeyDiagramTZEHDZUNBinding49;
            ;
          ) {
            if (
              ((sankeyDiagramTZEHDZUNBinding42 =
                sankeyDiagramTZEHDZUNBinding23[
                  sankeyDiagramTZEHDZUNBinding23.length - 1
                ]),
              this.defaultActions[sankeyDiagramTZEHDZUNBinding42]
                ? (sankeyDiagramTZEHDZUNBinding43 =
                    this.defaultActions[sankeyDiagramTZEHDZUNBinding42])
                : ((sankeyDiagramTZEHDZUNBinding40 ??=
                    sankeyDiagramTZEHDZUNHelper3()),
                  (sankeyDiagramTZEHDZUNBinding43 =
                    sankeyDiagramTZEHDZUNBinding27[
                      sankeyDiagramTZEHDZUNBinding42
                    ] &&
                    sankeyDiagramTZEHDZUNBinding27[
                      sankeyDiagramTZEHDZUNBinding42
                    ][sankeyDiagramTZEHDZUNBinding40])),
              sankeyDiagramTZEHDZUNBinding43 === undefined ||
                !sankeyDiagramTZEHDZUNBinding43.length ||
                !sankeyDiagramTZEHDZUNBinding43[0])
            ) {
              var sankeyDiagramTZEHDZUNBinding50 = "";
              for (sankeyDiagramTZEHDZUNBinding46 in ((sankeyDiagramTZEHDZUNBinding49 =
                []),
              sankeyDiagramTZEHDZUNBinding27[sankeyDiagramTZEHDZUNBinding42]))
                this.terminals_[sankeyDiagramTZEHDZUNBinding46] &&
                  sankeyDiagramTZEHDZUNBinding46 > 2 &&
                  sankeyDiagramTZEHDZUNBinding49.push(
                    "'" + this.terminals_[sankeyDiagramTZEHDZUNBinding46] + "'",
                  );
              sankeyDiagramTZEHDZUNBinding50 =
                sankeyDiagramTZEHDZUNBinding35.showPosition
                  ? "Parse error on line " +
                    (sankeyDiagramTZEHDZUNBinding29 + 1) +
                    ":\n" +
                    sankeyDiagramTZEHDZUNBinding35.showPosition() +
                    "\nExpecting " +
                    sankeyDiagramTZEHDZUNBinding49.join(", ") +
                    ", got '" +
                    (this.terminals_[sankeyDiagramTZEHDZUNBinding40] ||
                      sankeyDiagramTZEHDZUNBinding40) +
                    "'"
                  : "Parse error on line " +
                    (sankeyDiagramTZEHDZUNBinding29 + 1) +
                    ": Unexpected " +
                    (sankeyDiagramTZEHDZUNBinding40 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[sankeyDiagramTZEHDZUNBinding40] ||
                          sankeyDiagramTZEHDZUNBinding40) +
                        "'");
              this.parseError(sankeyDiagramTZEHDZUNBinding50, {
                text: sankeyDiagramTZEHDZUNBinding35.match,
                token:
                  this.terminals_[sankeyDiagramTZEHDZUNBinding40] ||
                  sankeyDiagramTZEHDZUNBinding40,
                line: sankeyDiagramTZEHDZUNBinding35.yylineno,
                loc: sankeyDiagramTZEHDZUNBinding38,
                expected: sankeyDiagramTZEHDZUNBinding49,
              });
            }
            if (
              sankeyDiagramTZEHDZUNBinding43[0] instanceof Array &&
              sankeyDiagramTZEHDZUNBinding43.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  sankeyDiagramTZEHDZUNBinding42 +
                  ", token: " +
                  sankeyDiagramTZEHDZUNBinding40,
              );
            switch (sankeyDiagramTZEHDZUNBinding43[0]) {
              case 1:
                sankeyDiagramTZEHDZUNBinding23.push(
                  sankeyDiagramTZEHDZUNBinding40,
                );
                sankeyDiagramTZEHDZUNBinding25.push(
                  sankeyDiagramTZEHDZUNBinding35.yytext,
                );
                sankeyDiagramTZEHDZUNBinding26.push(
                  sankeyDiagramTZEHDZUNBinding35.yylloc,
                );
                sankeyDiagramTZEHDZUNBinding23.push(
                  sankeyDiagramTZEHDZUNBinding43[1],
                );
                sankeyDiagramTZEHDZUNBinding40 = null;
                sankeyDiagramTZEHDZUNBinding41
                  ? ((sankeyDiagramTZEHDZUNBinding40 =
                      sankeyDiagramTZEHDZUNBinding41),
                    (sankeyDiagramTZEHDZUNBinding41 = null))
                  : ((sankeyDiagramTZEHDZUNBinding30 =
                      sankeyDiagramTZEHDZUNBinding35.yyleng),
                    (sankeyDiagramTZEHDZUNBinding28 =
                      sankeyDiagramTZEHDZUNBinding35.yytext),
                    (sankeyDiagramTZEHDZUNBinding29 =
                      sankeyDiagramTZEHDZUNBinding35.yylineno),
                    (sankeyDiagramTZEHDZUNBinding38 =
                      sankeyDiagramTZEHDZUNBinding35.yylloc),
                    sankeyDiagramTZEHDZUNBinding31 > 0 &&
                      sankeyDiagramTZEHDZUNBinding31--);
                break;
              case 2:
                if (
                  ((sankeyDiagramTZEHDZUNBinding47 =
                    this.productions_[sankeyDiagramTZEHDZUNBinding43[1]][1]),
                  (sankeyDiagramTZEHDZUNBinding45.$ =
                    sankeyDiagramTZEHDZUNBinding25[
                      sankeyDiagramTZEHDZUNBinding25.length -
                        sankeyDiagramTZEHDZUNBinding47
                    ]),
                  (sankeyDiagramTZEHDZUNBinding45._$ = {
                    first_line:
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length -
                          (sankeyDiagramTZEHDZUNBinding47 || 1)
                      ].first_line,
                    last_line:
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length - 1
                      ].last_line,
                    first_column:
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length -
                          (sankeyDiagramTZEHDZUNBinding47 || 1)
                      ].first_column,
                    last_column:
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length - 1
                      ].last_column,
                  }),
                  sankeyDiagramTZEHDZUNBinding39 &&
                    (sankeyDiagramTZEHDZUNBinding45._$.range = [
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length -
                          (sankeyDiagramTZEHDZUNBinding47 || 1)
                      ].range[0],
                      sankeyDiagramTZEHDZUNBinding26[
                        sankeyDiagramTZEHDZUNBinding26.length - 1
                      ].range[1],
                    ]),
                  (sankeyDiagramTZEHDZUNBinding44 = this.performAction.apply(
                    sankeyDiagramTZEHDZUNBinding45,
                    [
                      sankeyDiagramTZEHDZUNBinding28,
                      sankeyDiagramTZEHDZUNBinding30,
                      sankeyDiagramTZEHDZUNBinding29,
                      sankeyDiagramTZEHDZUNBinding36.yy,
                      sankeyDiagramTZEHDZUNBinding43[1],
                      sankeyDiagramTZEHDZUNBinding25,
                      sankeyDiagramTZEHDZUNBinding26,
                    ].concat(sankeyDiagramTZEHDZUNBinding34),
                  )),
                  sankeyDiagramTZEHDZUNBinding44 !== undefined)
                )
                  return sankeyDiagramTZEHDZUNBinding44;
                sankeyDiagramTZEHDZUNBinding47 &&
                  ((sankeyDiagramTZEHDZUNBinding23 =
                    sankeyDiagramTZEHDZUNBinding23.slice(
                      0,
                      -1 * sankeyDiagramTZEHDZUNBinding47 * 2,
                    )),
                  (sankeyDiagramTZEHDZUNBinding25 =
                    sankeyDiagramTZEHDZUNBinding25.slice(
                      0,
                      -1 * sankeyDiagramTZEHDZUNBinding47,
                    )),
                  (sankeyDiagramTZEHDZUNBinding26 =
                    sankeyDiagramTZEHDZUNBinding26.slice(
                      0,
                      -1 * sankeyDiagramTZEHDZUNBinding47,
                    )));
                sankeyDiagramTZEHDZUNBinding23.push(
                  this.productions_[sankeyDiagramTZEHDZUNBinding43[1]][0],
                );
                sankeyDiagramTZEHDZUNBinding25.push(
                  sankeyDiagramTZEHDZUNBinding45.$,
                );
                sankeyDiagramTZEHDZUNBinding26.push(
                  sankeyDiagramTZEHDZUNBinding45._$,
                );
                sankeyDiagramTZEHDZUNBinding48 =
                  sankeyDiagramTZEHDZUNBinding27[
                    sankeyDiagramTZEHDZUNBinding23[
                      sankeyDiagramTZEHDZUNBinding23.length - 2
                    ]
                  ][
                    sankeyDiagramTZEHDZUNBinding23[
                      sankeyDiagramTZEHDZUNBinding23.length - 1
                    ]
                  ];
                sankeyDiagramTZEHDZUNBinding23.push(
                  sankeyDiagramTZEHDZUNBinding48,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    sankeyDiagramTZEHDZUNBinding21.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput27,
          sankeyDiagramTZEHDZUNInput28,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              sankeyDiagramTZEHDZUNInput27,
              sankeyDiagramTZEHDZUNInput28,
            );
          else throw Error(sankeyDiagramTZEHDZUNInput27);
        }, "parseError"),
        setInput: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput9,
          sankeyDiagramTZEHDZUNInput10,
        ) {
          return (
            (this.yy = sankeyDiagramTZEHDZUNInput10 || this.yy || {}),
            (this._input = sankeyDiagramTZEHDZUNInput9),
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
          var sankeyDiagramTZEHDZUNBinding88 = this._input[0];
          return (
            (this.yytext += sankeyDiagramTZEHDZUNBinding88),
            this.yyleng++,
            this.offset++,
            (this.match += sankeyDiagramTZEHDZUNBinding88),
            (this.matched += sankeyDiagramTZEHDZUNBinding88),
            sankeyDiagramTZEHDZUNBinding88.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            sankeyDiagramTZEHDZUNBinding88
          );
        }, "input"),
        unput: defineFunctionName(function (sankeyDiagramTZEHDZUNInput8) {
          var sankeyDiagramTZEHDZUNBinding79 =
              sankeyDiagramTZEHDZUNInput8.length,
            sankeyDiagramTZEHDZUNBinding80 =
              sankeyDiagramTZEHDZUNInput8.split(/(?:\r\n?|\n)/g);
          this._input = sankeyDiagramTZEHDZUNInput8 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - sankeyDiagramTZEHDZUNBinding79,
          );
          this.offset -= sankeyDiagramTZEHDZUNBinding79;
          var sankeyDiagramTZEHDZUNBinding81 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          sankeyDiagramTZEHDZUNBinding80.length - 1 &&
            (this.yylineno -= sankeyDiagramTZEHDZUNBinding80.length - 1);
          var sankeyDiagramTZEHDZUNBinding82 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: sankeyDiagramTZEHDZUNBinding80
                ? (sankeyDiagramTZEHDZUNBinding80.length ===
                  sankeyDiagramTZEHDZUNBinding81.length
                    ? this.yylloc.first_column
                    : 0) +
                  sankeyDiagramTZEHDZUNBinding81[
                    sankeyDiagramTZEHDZUNBinding81.length -
                      sankeyDiagramTZEHDZUNBinding80.length
                  ].length -
                  sankeyDiagramTZEHDZUNBinding80[0].length
                : this.yylloc.first_column - sankeyDiagramTZEHDZUNBinding79,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                sankeyDiagramTZEHDZUNBinding82[0],
                sankeyDiagramTZEHDZUNBinding82[0] +
                  this.yyleng -
                  sankeyDiagramTZEHDZUNBinding79,
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
        less: defineFunctionName(function (sankeyDiagramTZEHDZUNInput39) {
          this.unput(this.match.slice(sankeyDiagramTZEHDZUNInput39));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var sankeyDiagramTZEHDZUNBinding91 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (sankeyDiagramTZEHDZUNBinding91.length > 20 ? "..." : "") +
            sankeyDiagramTZEHDZUNBinding91.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var sankeyDiagramTZEHDZUNBinding89 = this.match;
          return (
            sankeyDiagramTZEHDZUNBinding89.length < 20 &&
              (sankeyDiagramTZEHDZUNBinding89 += this._input.substr(
                0,
                20 - sankeyDiagramTZEHDZUNBinding89.length,
              )),
            (
              sankeyDiagramTZEHDZUNBinding89.substr(0, 20) +
              (sankeyDiagramTZEHDZUNBinding89.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var sankeyDiagramTZEHDZUNBinding92 = this.pastInput(),
            sankeyDiagramTZEHDZUNBinding93 = Array(
              sankeyDiagramTZEHDZUNBinding92.length + 1,
            ).join("-");
          return (
            sankeyDiagramTZEHDZUNBinding92 +
            this.upcomingInput() +
            "\n" +
            sankeyDiagramTZEHDZUNBinding93 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput6,
          sankeyDiagramTZEHDZUNInput7,
        ) {
          var sankeyDiagramTZEHDZUNBinding69,
            sankeyDiagramTZEHDZUNBinding70,
            sankeyDiagramTZEHDZUNBinding71;
          if (
            (this.options.backtrack_lexer &&
              ((sankeyDiagramTZEHDZUNBinding71 = {
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
                (sankeyDiagramTZEHDZUNBinding71.yylloc.range =
                  this.yylloc.range.slice(0))),
            (sankeyDiagramTZEHDZUNBinding70 =
              sankeyDiagramTZEHDZUNInput6[0].match(/(?:\r\n?|\n).*/g)),
            sankeyDiagramTZEHDZUNBinding70 &&
              (this.yylineno += sankeyDiagramTZEHDZUNBinding70.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: sankeyDiagramTZEHDZUNBinding70
                ? sankeyDiagramTZEHDZUNBinding70[
                    sankeyDiagramTZEHDZUNBinding70.length - 1
                  ].length -
                  sankeyDiagramTZEHDZUNBinding70[
                    sankeyDiagramTZEHDZUNBinding70.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  sankeyDiagramTZEHDZUNInput6[0].length,
            }),
            (this.yytext += sankeyDiagramTZEHDZUNInput6[0]),
            (this.match += sankeyDiagramTZEHDZUNInput6[0]),
            (this.matches = sankeyDiagramTZEHDZUNInput6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              sankeyDiagramTZEHDZUNInput6[0].length,
            )),
            (this.matched += sankeyDiagramTZEHDZUNInput6[0]),
            (sankeyDiagramTZEHDZUNBinding69 = this.performAction.call(
              this,
              this.yy,
              this,
              sankeyDiagramTZEHDZUNInput7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            sankeyDiagramTZEHDZUNBinding69)
          )
            return sankeyDiagramTZEHDZUNBinding69;
          if (this._backtrack) {
            for (var sankeyDiagramTZEHDZUNBinding72 in sankeyDiagramTZEHDZUNBinding71)
              this[sankeyDiagramTZEHDZUNBinding72] =
                sankeyDiagramTZEHDZUNBinding71[sankeyDiagramTZEHDZUNBinding72];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var sankeyDiagramTZEHDZUNBinding73,
            sankeyDiagramTZEHDZUNBinding74,
            sankeyDiagramTZEHDZUNBinding75,
            sankeyDiagramTZEHDZUNBinding76;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var sankeyDiagramTZEHDZUNBinding77 = this._currentRules(),
              sankeyDiagramTZEHDZUNBinding78 = 0;
            sankeyDiagramTZEHDZUNBinding78 <
            sankeyDiagramTZEHDZUNBinding77.length;
            sankeyDiagramTZEHDZUNBinding78++
          )
            if (
              ((sankeyDiagramTZEHDZUNBinding75 = this._input.match(
                this.rules[
                  sankeyDiagramTZEHDZUNBinding77[sankeyDiagramTZEHDZUNBinding78]
                ],
              )),
              sankeyDiagramTZEHDZUNBinding75 &&
                (!sankeyDiagramTZEHDZUNBinding74 ||
                  sankeyDiagramTZEHDZUNBinding75[0].length >
                    sankeyDiagramTZEHDZUNBinding74[0].length))
            ) {
              if (
                ((sankeyDiagramTZEHDZUNBinding74 =
                  sankeyDiagramTZEHDZUNBinding75),
                (sankeyDiagramTZEHDZUNBinding76 =
                  sankeyDiagramTZEHDZUNBinding78),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((sankeyDiagramTZEHDZUNBinding73 = this.test_match(
                    sankeyDiagramTZEHDZUNBinding75,
                    sankeyDiagramTZEHDZUNBinding77[
                      sankeyDiagramTZEHDZUNBinding78
                    ],
                  )),
                  sankeyDiagramTZEHDZUNBinding73 !== false)
                )
                  return sankeyDiagramTZEHDZUNBinding73;
                if (this._backtrack) {
                  sankeyDiagramTZEHDZUNBinding74 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return sankeyDiagramTZEHDZUNBinding74
            ? ((sankeyDiagramTZEHDZUNBinding73 = this.test_match(
                sankeyDiagramTZEHDZUNBinding74,
                sankeyDiagramTZEHDZUNBinding77[sankeyDiagramTZEHDZUNBinding76],
              )),
              sankeyDiagramTZEHDZUNBinding73 === false
                ? false
                : sankeyDiagramTZEHDZUNBinding73)
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
        begin: defineFunctionName(function (sankeyDiagramTZEHDZUNInput40) {
          this.conditionStack.push(sankeyDiagramTZEHDZUNInput40);
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
        topState: defineFunctionName(function (sankeyDiagramTZEHDZUNInput22) {
          return (
            (sankeyDiagramTZEHDZUNInput22 =
              this.conditionStack.length -
              1 -
              Math.abs(sankeyDiagramTZEHDZUNInput22 || 0)),
            sankeyDiagramTZEHDZUNInput22 >= 0
              ? this.conditionStack[sankeyDiagramTZEHDZUNInput22]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (sankeyDiagramTZEHDZUNInput43) {
          this.begin(sankeyDiagramTZEHDZUNInput43);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          sankeyDiagramTZEHDZUNInput18,
          sankeyDiagramTZEHDZUNInput19,
          sankeyDiagramTZEHDZUNInput20,
          sankeyDiagramTZEHDZUNInput21,
        ) {
          switch (sankeyDiagramTZEHDZUNInput20) {
            case 0:
              return (this.pushState("csv"), 4);
            case 1:
              return (this.pushState("csv"), 4);
            case 2:
              return 10;
            case 3:
              return 5;
            case 4:
              return 12;
            case 5:
              return (this.pushState("escaped_text"), 18);
            case 6:
              return 20;
            case 7:
              return (this.popState("escaped_text"), 18);
            case 8:
              return 19;
          }
        }, "anonymous"),
        rules: [
          /^(?:sankey-beta\b)/i,
          /^(?:sankey\b)/i,
          /^(?:$)/i,
          /^(?:((\u000D\u000A)|(\u000A)))/i,
          /^(?:(\u002C))/i,
          /^(?:(\u0022))/i,
          /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
          /^(?:(\u0022)(?!(\u0022)))/i,
          /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i,
        ],
        conditions: {
          csv: {
            rules: [2, 3, 4, 5, 6, 7, 8],
            inclusive: false,
          },
          escaped_text: {
            rules: [7, 8],
            inclusive: false,
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            inclusive: true,
          },
        },
      };
    })();
    function sankeyDiagramTZEHDZUNHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(sankeyDiagramTZEHDZUNHelper1, "Parser"),
      (sankeyDiagramTZEHDZUNHelper1.prototype = sankeyDiagramTZEHDZUNBinding21),
      (sankeyDiagramTZEHDZUNBinding21.Parser = sankeyDiagramTZEHDZUNHelper1),
      new sankeyDiagramTZEHDZUNHelper1()
    );
  })();
  sankeyDiagramTZEHDZUNBinding1.parser = sankeyDiagramTZEHDZUNBinding1;
  sankeyDiagramTZEHDZUNBinding2 = sankeyDiagramTZEHDZUNBinding1;
  sankeyDiagramTZEHDZUNBinding3 = [];
  sankeyDiagramTZEHDZUNBinding4 = [];
  sankeyDiagramTZEHDZUNBinding5 = new Map();
  sankeyDiagramTZEHDZUNBinding6 = defineFunctionName(() => {
    sankeyDiagramTZEHDZUNBinding3 = [];
    sankeyDiagramTZEHDZUNBinding4 = [];
    sankeyDiagramTZEHDZUNBinding5 = new Map();
    a();
  }, "clear");
  sankeyDiagramTZEHDZUNBinding7 = class {
    constructor(
      sankeyDiagramTZEHDZUNInput34,
      sankeyDiagramTZEHDZUNInput35,
      sankeyDiagramTZEHDZUNInput36 = 0,
    ) {
      this.source = sankeyDiagramTZEHDZUNInput34;
      this.target = sankeyDiagramTZEHDZUNInput35;
      this.value = sankeyDiagramTZEHDZUNInput36;
    }
    static {
      defineFunctionName(this, "SankeyLink");
    }
  };
  sankeyDiagramTZEHDZUNBinding8 = defineFunctionName(
    (
      sankeyDiagramTZEHDZUNInput44,
      sankeyDiagramTZEHDZUNInput45,
      sankeyDiagramTZEHDZUNInput46,
    ) => {
      sankeyDiagramTZEHDZUNBinding3.push(
        new sankeyDiagramTZEHDZUNBinding7(
          sankeyDiagramTZEHDZUNInput44,
          sankeyDiagramTZEHDZUNInput45,
          sankeyDiagramTZEHDZUNInput46,
        ),
      );
    },
    "addLink",
  );
  sankeyDiagramTZEHDZUNBinding9 = class {
    constructor(sankeyDiagramTZEHDZUNInput47) {
      this.ID = sankeyDiagramTZEHDZUNInput47;
    }
    static {
      defineFunctionName(this, "SankeyNode");
    }
  };
  sankeyDiagramTZEHDZUNBinding10 = {
    nodesMap: sankeyDiagramTZEHDZUNBinding5,
    getConfig: defineFunctionName(() => _chunkABZYJK2DB().sankey, "getConfig"),
    getNodes: defineFunctionName(
      () => sankeyDiagramTZEHDZUNBinding4,
      "getNodes",
    ),
    getLinks: defineFunctionName(
      () => sankeyDiagramTZEHDZUNBinding3,
      "getLinks",
    ),
    getGraph: defineFunctionName(
      () => ({
        nodes: sankeyDiagramTZEHDZUNBinding4.map((item) => ({
          id: item.ID,
        })),
        links: sankeyDiagramTZEHDZUNBinding3.map((item) => ({
          source: item.source.ID,
          target: item.target.ID,
          value: item.value,
        })),
      }),
      "getGraph",
    ),
    addLink: sankeyDiagramTZEHDZUNBinding8,
    findOrCreateNode: defineFunctionName((sankeyDiagramTZEHDZUNInput26) => {
      sankeyDiagramTZEHDZUNInput26 = s.sanitizeText(
        sankeyDiagramTZEHDZUNInput26,
        _chunkABZYJK2DB(),
      );
      let sankeyDiagramTZEHDZUNBinding95 = sankeyDiagramTZEHDZUNBinding5.get(
        sankeyDiagramTZEHDZUNInput26,
      );
      return (
        sankeyDiagramTZEHDZUNBinding95 === undefined &&
          ((sankeyDiagramTZEHDZUNBinding95 = new sankeyDiagramTZEHDZUNBinding9(
            sankeyDiagramTZEHDZUNInput26,
          )),
          sankeyDiagramTZEHDZUNBinding5.set(
            sankeyDiagramTZEHDZUNInput26,
            sankeyDiagramTZEHDZUNBinding95,
          ),
          sankeyDiagramTZEHDZUNBinding4.push(sankeyDiagramTZEHDZUNBinding95)),
        sankeyDiagramTZEHDZUNBinding95
      );
    }, "findOrCreateNode"),
    getAccTitle: _chunkABZYJK2DV,
    setAccTitle: V,
    getAccDescription: _,
    setAccDescription: B,
    getDiagramTitle: C,
    setDiagramTitle: W,
    clear: sankeyDiagramTZEHDZUNBinding6,
  };
  sankeyDiagramTZEHDZUNBinding11 = class SankeyDiagramTZEHDZUNClass1 {
    static {
      defineFunctionName(this, "Uid");
    }
    static {
      this.count = 0;
    }
    static next(sankeyDiagramTZEHDZUNInput41) {
      return new SankeyDiagramTZEHDZUNClass1(
        sankeyDiagramTZEHDZUNInput41 + ++SankeyDiagramTZEHDZUNClass1.count,
      );
    }
    constructor(sankeyDiagramTZEHDZUNInput38) {
      this.id = sankeyDiagramTZEHDZUNInput38;
      this.href = `#${sankeyDiagramTZEHDZUNInput38}`;
    }
    toString() {
      return "url(" + this.href + ")";
    }
  };
  sankeyDiagramTZEHDZUNBinding12 = {
    left: sankeyLeft,
    right: sankeyRight,
    center: sankeyCenter,
    justify: sankeyJustify,
  };
  sankeyDiagramTZEHDZUNBinding13 = {
    draw: defineFunctionName(function (
      sankeyDiagramTZEHDZUNInput2,
      sankeyDiagramTZEHDZUNInput3,
      sankeyDiagramTZEHDZUNInput4,
      sankeyDiagramTZEHDZUNInput5,
    ) {
      let { securityLevel, sankey } = _chunkABZYJK2DB(),
        sankeyDiagramTZEHDZUNBinding51 = u.sankey,
        sankeyDiagramTZEHDZUNBinding52;
      securityLevel === "sandbox" &&
        (sankeyDiagramTZEHDZUNBinding52 = select(
          "#i" + sankeyDiagramTZEHDZUNInput3,
        ));
      let sankeyDiagramTZEHDZUNBinding53 = select(
          securityLevel === "sandbox"
            ? sankeyDiagramTZEHDZUNBinding52.nodes()[0].contentDocument.body
            : "body",
        ),
        sankeyDiagramTZEHDZUNBinding54 =
          securityLevel === "sandbox"
            ? sankeyDiagramTZEHDZUNBinding53.select(
                `[id="${sankeyDiagramTZEHDZUNInput3}"]`,
              )
            : select(`[id="${sankeyDiagramTZEHDZUNInput3}"]`),
        sankeyDiagramTZEHDZUNBinding55 =
          sankey?.width ?? sankeyDiagramTZEHDZUNBinding51.width,
        sankeyDiagramTZEHDZUNBinding56 =
          sankey?.height ?? sankeyDiagramTZEHDZUNBinding51.width,
        sankeyDiagramTZEHDZUNBinding57 =
          sankey?.useMaxWidth ?? sankeyDiagramTZEHDZUNBinding51.useMaxWidth,
        sankeyDiagramTZEHDZUNBinding58 =
          sankey?.nodeAlignment ?? sankeyDiagramTZEHDZUNBinding51.nodeAlignment,
        sankeyDiagramTZEHDZUNBinding59 =
          sankey?.prefix ?? sankeyDiagramTZEHDZUNBinding51.prefix,
        sankeyDiagramTZEHDZUNBinding60 =
          sankey?.suffix ?? sankeyDiagramTZEHDZUNBinding51.suffix,
        sankeyDiagramTZEHDZUNBinding61 =
          sankey?.showValues ?? sankeyDiagramTZEHDZUNBinding51.showValues,
        sankeyDiagramTZEHDZUNBinding62 =
          sankeyDiagramTZEHDZUNInput5.db.getGraph(),
        sankeyDiagramTZEHDZUNBinding63 =
          sankeyDiagramTZEHDZUNBinding12[sankeyDiagramTZEHDZUNBinding58];
      sankey()
        .nodeId(
          (sankeyDiagramTZEHDZUNInput62) => sankeyDiagramTZEHDZUNInput62.id,
        )
        .nodeWidth(10)
        .nodePadding(10 + (sankeyDiagramTZEHDZUNBinding61 ? 15 : 0))
        .nodeAlign(sankeyDiagramTZEHDZUNBinding63)
        .extent([
          [0, 0],
          [sankeyDiagramTZEHDZUNBinding55, sankeyDiagramTZEHDZUNBinding56],
        ])(sankeyDiagramTZEHDZUNBinding62);
      let sankeyDiagramTZEHDZUNBinding64 = scaleOrdinal(d);
      sankeyDiagramTZEHDZUNBinding54
        .append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(sankeyDiagramTZEHDZUNBinding62.nodes)
        .join("g")
        .attr("class", "node")
        .attr(
          "id",
          (sankeyDiagramTZEHDZUNInput51) =>
            (sankeyDiagramTZEHDZUNInput51.uid =
              sankeyDiagramTZEHDZUNBinding11.next("node-")).id,
        )
        .attr("transform", function (sankeyDiagramTZEHDZUNInput37) {
          return (
            "translate(" +
            sankeyDiagramTZEHDZUNInput37.x0 +
            "," +
            sankeyDiagramTZEHDZUNInput37.y0 +
            ")"
          );
        })
        .attr(
          "x",
          (sankeyDiagramTZEHDZUNInput63) => sankeyDiagramTZEHDZUNInput63.x0,
        )
        .attr(
          "y",
          (sankeyDiagramTZEHDZUNInput64) => sankeyDiagramTZEHDZUNInput64.y0,
        )
        .append("rect")
        .attr(
          "height",
          (sankeyDiagramTZEHDZUNInput56) =>
            sankeyDiagramTZEHDZUNInput56.y1 - sankeyDiagramTZEHDZUNInput56.y0,
        )
        .attr(
          "width",
          (sankeyDiagramTZEHDZUNInput57) =>
            sankeyDiagramTZEHDZUNInput57.x1 - sankeyDiagramTZEHDZUNInput57.x0,
        )
        .attr("fill", (sankeyDiagramTZEHDZUNInput59) =>
          sankeyDiagramTZEHDZUNBinding64(sankeyDiagramTZEHDZUNInput59.id),
        );
      let sankeyDiagramTZEHDZUNBinding65 = defineFunctionName(
        ({ id, value }) =>
          sankeyDiagramTZEHDZUNBinding61
            ? `${id}
${sankeyDiagramTZEHDZUNBinding59}${Math.round(value * 100) / 100}${sankeyDiagramTZEHDZUNBinding60}`
            : id,
        "getText",
      );
      sankeyDiagramTZEHDZUNBinding54
        .append("g")
        .attr("class", "node-labels")
        .attr("font-size", 14)
        .selectAll("text")
        .data(sankeyDiagramTZEHDZUNBinding62.nodes)
        .join("text")
        .attr("x", (sankeyDiagramTZEHDZUNInput49) =>
          sankeyDiagramTZEHDZUNInput49.x0 < sankeyDiagramTZEHDZUNBinding55 / 2
            ? sankeyDiagramTZEHDZUNInput49.x1 + 6
            : sankeyDiagramTZEHDZUNInput49.x0 - 6,
        )
        .attr(
          "y",
          (sankeyDiagramTZEHDZUNInput53) =>
            (sankeyDiagramTZEHDZUNInput53.y1 +
              sankeyDiagramTZEHDZUNInput53.y0) /
            2,
        )
        .attr("dy", `${sankeyDiagramTZEHDZUNBinding61 ? "0" : "0.35"}em`)
        .attr("text-anchor", (sankeyDiagramTZEHDZUNInput50) =>
          sankeyDiagramTZEHDZUNInput50.x0 < sankeyDiagramTZEHDZUNBinding55 / 2
            ? "start"
            : "end",
        )
        .text(sankeyDiagramTZEHDZUNBinding65);
      let sankeyDiagramTZEHDZUNBinding66 = sankeyDiagramTZEHDZUNBinding54
          .append("g")
          .attr("class", "links")
          .attr("fill", "none")
          .attr("stroke-opacity", 0.5)
          .selectAll(".link")
          .data(sankeyDiagramTZEHDZUNBinding62.links)
          .join("g")
          .attr("class", "link")
          .style("mix-blend-mode", "multiply"),
        sankeyDiagramTZEHDZUNBinding67 = sankey?.linkColor ?? "gradient";
      if (sankeyDiagramTZEHDZUNBinding67 === "gradient") {
        let sankeyDiagramTZEHDZUNBinding87 = sankeyDiagramTZEHDZUNBinding66
          .append("linearGradient")
          .attr(
            "id",
            (sankeyDiagramTZEHDZUNInput48) =>
              (sankeyDiagramTZEHDZUNInput48.uid =
                sankeyDiagramTZEHDZUNBinding11.next("linearGradient-")).id,
          )
          .attr("gradientUnits", "userSpaceOnUse")
          .attr(
            "x1",
            (sankeyDiagramTZEHDZUNInput58) =>
              sankeyDiagramTZEHDZUNInput58.source.x1,
          )
          .attr("x2", (event) => event.target.x0);
        sankeyDiagramTZEHDZUNBinding87
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", (sankeyDiagramTZEHDZUNInput54) =>
            sankeyDiagramTZEHDZUNBinding64(
              sankeyDiagramTZEHDZUNInput54.source.id,
            ),
          );
        sankeyDiagramTZEHDZUNBinding87
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", (event) =>
            sankeyDiagramTZEHDZUNBinding64(event.target.id),
          );
      }
      let sankeyDiagramTZEHDZUNBinding68;
      switch (sankeyDiagramTZEHDZUNBinding67) {
        case "gradient":
          sankeyDiagramTZEHDZUNBinding68 = defineFunctionName(
            (sankeyDiagramTZEHDZUNInput61) => sankeyDiagramTZEHDZUNInput61.uid,
            "coloring",
          );
          break;
        case "source":
          sankeyDiagramTZEHDZUNBinding68 = defineFunctionName(
            (sankeyDiagramTZEHDZUNInput55) =>
              sankeyDiagramTZEHDZUNBinding64(
                sankeyDiagramTZEHDZUNInput55.source.id,
              ),
            "coloring",
          );
          break;
        case "target":
          sankeyDiagramTZEHDZUNBinding68 = defineFunctionName(
            (event) => sankeyDiagramTZEHDZUNBinding64(event.target.id),
            "coloring",
          );
          break;
        default:
          sankeyDiagramTZEHDZUNBinding68 = sankeyDiagramTZEHDZUNBinding67;
      }
      sankeyDiagramTZEHDZUNBinding66
        .append("path")
        .attr("d", _srcR())
        .attr("stroke", sankeyDiagramTZEHDZUNBinding68)
        .attr("stroke-width", (sankeyDiagramTZEHDZUNInput52) =>
          Math.max(1, sankeyDiagramTZEHDZUNInput52.width),
        );
      K(
        undefined,
        sankeyDiagramTZEHDZUNBinding54,
        0,
        sankeyDiagramTZEHDZUNBinding57,
      );
    }, "draw"),
  };
  sankeyDiagramTZEHDZUNBinding14 = defineFunctionName(
    (sankeyDiagramTZEHDZUNInput25) =>
      sankeyDiagramTZEHDZUNInput25
        .replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "")
        .replaceAll(/([\n\r])+/g, "\n")
        .trim(),
    "prepareTextForParsing",
  );
  sankeyDiagramTZEHDZUNBinding15 = defineFunctionName(
    (sankeyDiagramTZEHDZUNInput42) => `.label {
      font-family: ${sankeyDiagramTZEHDZUNInput42.fontFamily};
    }`,
    "getStyles",
  );
  sankeyDiagramTZEHDZUNBinding16 = sankeyDiagramTZEHDZUNBinding2.parse.bind(
    sankeyDiagramTZEHDZUNBinding2,
  );
  sankeyDiagramTZEHDZUNBinding2.parse = (sankeyDiagramTZEHDZUNInput60) =>
    sankeyDiagramTZEHDZUNBinding16(
      sankeyDiagramTZEHDZUNBinding14(sankeyDiagramTZEHDZUNInput60),
    );
  SankeyDiagramTZEHDZUN = {
    styles: sankeyDiagramTZEHDZUNBinding15,
    parser: sankeyDiagramTZEHDZUNBinding2,
    db: sankeyDiagramTZEHDZUNBinding10,
    renderer: sankeyDiagramTZEHDZUNBinding13,
  };
})();
export { SankeyDiagramTZEHDZUN as diagram };
