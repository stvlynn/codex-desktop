// Restored from ref/webview/assets/sankeyDiagram-XADWPNL6-CGd8Hfol.js
// Mermaid sankey diagram definition alt (db + renderer + parser).
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
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  V as _chunkICPOFSXXV,
  A,
  b,
  C,
  G,
  H,
  q,
  s,
  u,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
var sankeyDiagramXADWPNL6Binding1,
  sankeyDiagramXADWPNL6Binding2,
  sankeyDiagramXADWPNL6Binding3,
  sankeyDiagramXADWPNL6Binding4,
  sankeyDiagramXADWPNL6Binding5,
  sankeyDiagramXADWPNL6Binding6,
  sankeyDiagramXADWPNL6Binding7,
  sankeyDiagramXADWPNL6Binding8,
  sankeyDiagramXADWPNL6Binding9,
  sankeyDiagramXADWPNL6Binding10,
  sankeyDiagramXADWPNL6Binding11,
  sankeyDiagramXADWPNL6Binding12,
  sankeyDiagramXADWPNL6Binding13,
  sankeyDiagramXADWPNL6Binding14,
  sankeyDiagramXADWPNL6Binding15,
  sankeyDiagramXADWPNL6Binding16,
  SankeyDiagramXADWPNL6;
esmInit(() => {
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  _srcT();
  sankeyDiagramXADWPNL6Binding1 = (function () {
    var sankeyDiagramXADWPNL6Binding17 = defineFunctionName(function (
        sankeyDiagramXADWPNL6Input29,
        sankeyDiagramXADWPNL6Input30,
        sankeyDiagramXADWPNL6Input31,
        sankeyDiagramXADWPNL6Input32,
      ) {
        for (
          sankeyDiagramXADWPNL6Input31 ||= {},
            sankeyDiagramXADWPNL6Input32 = sankeyDiagramXADWPNL6Input29.length;
          sankeyDiagramXADWPNL6Input32--;
          sankeyDiagramXADWPNL6Input31[
            sankeyDiagramXADWPNL6Input29[sankeyDiagramXADWPNL6Input32]
          ] = sankeyDiagramXADWPNL6Input30
        );
        return sankeyDiagramXADWPNL6Input31;
      }, "o"),
      sankeyDiagramXADWPNL6Binding18 = [1, 9],
      sankeyDiagramXADWPNL6Binding19 = [1, 10],
      sankeyDiagramXADWPNL6Binding20 = [1, 5, 10, 12],
      sankeyDiagramXADWPNL6Binding21 = {
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
          sankeyDiagramXADWPNL6Input11,
          sankeyDiagramXADWPNL6Input12,
          sankeyDiagramXADWPNL6Input13,
          sankeyDiagramXADWPNL6Input14,
          sankeyDiagramXADWPNL6Input15,
          sankeyDiagramXADWPNL6Input16,
          sankeyDiagramXADWPNL6Input17,
        ) {
          var sankeyDiagramXADWPNL6Binding83 =
            sankeyDiagramXADWPNL6Input16.length - 1;
          switch (sankeyDiagramXADWPNL6Input15) {
            case 7:
              let sankeyDiagramXADWPNL6Binding84 =
                  sankeyDiagramXADWPNL6Input14.findOrCreateNode(
                    sankeyDiagramXADWPNL6Input16[
                      sankeyDiagramXADWPNL6Binding83 - 4
                    ]
                      .trim()
                      .replaceAll('""', '"'),
                  ),
                sankeyDiagramXADWPNL6Binding85 =
                  sankeyDiagramXADWPNL6Input14.findOrCreateNode(
                    sankeyDiagramXADWPNL6Input16[
                      sankeyDiagramXADWPNL6Binding83 - 2
                    ]
                      .trim()
                      .replaceAll('""', '"'),
                  ),
                sankeyDiagramXADWPNL6Binding86 = parseFloat(
                  sankeyDiagramXADWPNL6Input16[
                    sankeyDiagramXADWPNL6Binding83
                  ].trim(),
                );
              sankeyDiagramXADWPNL6Input14.addLink(
                sankeyDiagramXADWPNL6Binding84,
                sankeyDiagramXADWPNL6Binding85,
                sankeyDiagramXADWPNL6Binding86,
              );
              break;
            case 8:
            case 9:
            case 11:
              this.$ =
                sankeyDiagramXADWPNL6Input16[sankeyDiagramXADWPNL6Binding83];
              break;
            case 10:
              this.$ =
                sankeyDiagramXADWPNL6Input16[
                  sankeyDiagramXADWPNL6Binding83 - 1
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
            18: sankeyDiagramXADWPNL6Binding18,
            20: sankeyDiagramXADWPNL6Binding19,
          },
          {
            1: [2, 6],
            7: 11,
            10: [1, 12],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding19,
            [2, 4],
            {
              9: 13,
              5: [1, 14],
            },
          ),
          {
            12: [1, 15],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding20,
            [2, 8],
          ),
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding20,
            [2, 9],
          ),
          {
            19: [1, 16],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding20,
            [2, 11],
          ),
          {
            1: [2, 1],
          },
          {
            1: [2, 5],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding19,
            [2, 2],
          ),
          {
            6: 17,
            8: 5,
            15: 6,
            16: 7,
            17: 8,
            18: sankeyDiagramXADWPNL6Binding18,
            20: sankeyDiagramXADWPNL6Binding19,
          },
          {
            15: 18,
            16: 7,
            17: 8,
            18: sankeyDiagramXADWPNL6Binding18,
            20: sankeyDiagramXADWPNL6Binding19,
          },
          {
            18: [1, 19],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding19,
            [2, 3],
          ),
          {
            12: [1, 20],
          },
          sankeyDiagramXADWPNL6Binding17(
            sankeyDiagramXADWPNL6Binding20,
            [2, 10],
          ),
          {
            15: 21,
            16: 7,
            17: 8,
            18: sankeyDiagramXADWPNL6Binding18,
            20: sankeyDiagramXADWPNL6Binding19,
          },
          sankeyDiagramXADWPNL6Binding17([1, 5, 10], [2, 7]),
        ],
        defaultActions: {
          11: [2, 1],
          12: [2, 5],
        },
        parseError: defineFunctionName(function (
          sankeyDiagramXADWPNL6Input23,
          sankeyDiagramXADWPNL6Input24,
        ) {
          if (sankeyDiagramXADWPNL6Input24.recoverable)
            this.trace(sankeyDiagramXADWPNL6Input23);
          else {
            var sankeyDiagramXADWPNL6Binding94 = Error(
              sankeyDiagramXADWPNL6Input23,
            );
            throw (
              (sankeyDiagramXADWPNL6Binding94.hash =
                sankeyDiagramXADWPNL6Input24),
              sankeyDiagramXADWPNL6Binding94
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (sankeyDiagramXADWPNL6Input1) {
          var sankeyDiagramXADWPNL6Binding22 = this,
            sankeyDiagramXADWPNL6Binding23 = [0],
            sankeyDiagramXADWPNL6Binding24 = [],
            sankeyDiagramXADWPNL6Binding25 = [null],
            sankeyDiagramXADWPNL6Binding26 = [],
            sankeyDiagramXADWPNL6Binding27 = this.table,
            sankeyDiagramXADWPNL6Binding28 = "",
            sankeyDiagramXADWPNL6Binding29 = 0,
            sankeyDiagramXADWPNL6Binding30 = 0,
            sankeyDiagramXADWPNL6Binding31 = 0,
            sankeyDiagramXADWPNL6Binding34 =
              sankeyDiagramXADWPNL6Binding26.slice.call(arguments, 1),
            sankeyDiagramXADWPNL6Binding35 = Object.create(this.lexer),
            sankeyDiagramXADWPNL6Binding36 = {
              yy: {},
            };
          for (var sankeyDiagramXADWPNL6Binding37 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              sankeyDiagramXADWPNL6Binding37,
            ) &&
              (sankeyDiagramXADWPNL6Binding36.yy[
                sankeyDiagramXADWPNL6Binding37
              ] = this.yy[sankeyDiagramXADWPNL6Binding37]);
          sankeyDiagramXADWPNL6Binding35.setInput(
            sankeyDiagramXADWPNL6Input1,
            sankeyDiagramXADWPNL6Binding36.yy,
          );
          sankeyDiagramXADWPNL6Binding36.yy.lexer =
            sankeyDiagramXADWPNL6Binding35;
          sankeyDiagramXADWPNL6Binding36.yy.parser = this;
          sankeyDiagramXADWPNL6Binding35.yylloc === undefined &&
            (sankeyDiagramXADWPNL6Binding35.yylloc = {});
          var sankeyDiagramXADWPNL6Binding38 =
            sankeyDiagramXADWPNL6Binding35.yylloc;
          sankeyDiagramXADWPNL6Binding26.push(sankeyDiagramXADWPNL6Binding38);
          var sankeyDiagramXADWPNL6Binding39 =
            sankeyDiagramXADWPNL6Binding35.options &&
            sankeyDiagramXADWPNL6Binding35.options.ranges;
          typeof sankeyDiagramXADWPNL6Binding36.yy.parseError == "function"
            ? (this.parseError = sankeyDiagramXADWPNL6Binding36.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function sankeyDiagramXADWPNL6Helper2(sankeyDiagramXADWPNL6Input33) {
            sankeyDiagramXADWPNL6Binding23.length -=
              2 * sankeyDiagramXADWPNL6Input33;
            sankeyDiagramXADWPNL6Binding25.length -=
              sankeyDiagramXADWPNL6Input33;
            sankeyDiagramXADWPNL6Binding26.length -=
              sankeyDiagramXADWPNL6Input33;
          }
          defineFunctionName(sankeyDiagramXADWPNL6Helper2, "popStack");
          function sankeyDiagramXADWPNL6Helper3() {
            var sankeyDiagramXADWPNL6Binding90 =
              sankeyDiagramXADWPNL6Binding24.pop() ||
              sankeyDiagramXADWPNL6Binding35.lex() ||
              1;
            return (
              typeof sankeyDiagramXADWPNL6Binding90 != "number" &&
                (sankeyDiagramXADWPNL6Binding90 instanceof Array &&
                  ((sankeyDiagramXADWPNL6Binding24 =
                    sankeyDiagramXADWPNL6Binding90),
                  (sankeyDiagramXADWPNL6Binding90 =
                    sankeyDiagramXADWPNL6Binding24.pop())),
                (sankeyDiagramXADWPNL6Binding90 =
                  sankeyDiagramXADWPNL6Binding22.symbols_[
                    sankeyDiagramXADWPNL6Binding90
                  ] || sankeyDiagramXADWPNL6Binding90)),
              sankeyDiagramXADWPNL6Binding90
            );
          }
          defineFunctionName(sankeyDiagramXADWPNL6Helper3, "lex");
          for (
            var sankeyDiagramXADWPNL6Binding40,
              sankeyDiagramXADWPNL6Binding41,
              sankeyDiagramXADWPNL6Binding42,
              sankeyDiagramXADWPNL6Binding43,
              sankeyDiagramXADWPNL6Binding44,
              sankeyDiagramXADWPNL6Binding45 = {},
              sankeyDiagramXADWPNL6Binding46,
              sankeyDiagramXADWPNL6Binding47,
              sankeyDiagramXADWPNL6Binding48,
              sankeyDiagramXADWPNL6Binding49;
            ;
          ) {
            if (
              ((sankeyDiagramXADWPNL6Binding42 =
                sankeyDiagramXADWPNL6Binding23[
                  sankeyDiagramXADWPNL6Binding23.length - 1
                ]),
              this.defaultActions[sankeyDiagramXADWPNL6Binding42]
                ? (sankeyDiagramXADWPNL6Binding43 =
                    this.defaultActions[sankeyDiagramXADWPNL6Binding42])
                : ((sankeyDiagramXADWPNL6Binding40 ??=
                    sankeyDiagramXADWPNL6Helper3()),
                  (sankeyDiagramXADWPNL6Binding43 =
                    sankeyDiagramXADWPNL6Binding27[
                      sankeyDiagramXADWPNL6Binding42
                    ] &&
                    sankeyDiagramXADWPNL6Binding27[
                      sankeyDiagramXADWPNL6Binding42
                    ][sankeyDiagramXADWPNL6Binding40])),
              sankeyDiagramXADWPNL6Binding43 === undefined ||
                !sankeyDiagramXADWPNL6Binding43.length ||
                !sankeyDiagramXADWPNL6Binding43[0])
            ) {
              var sankeyDiagramXADWPNL6Binding50 = "";
              for (sankeyDiagramXADWPNL6Binding46 in ((sankeyDiagramXADWPNL6Binding49 =
                []),
              sankeyDiagramXADWPNL6Binding27[sankeyDiagramXADWPNL6Binding42]))
                this.terminals_[sankeyDiagramXADWPNL6Binding46] &&
                  sankeyDiagramXADWPNL6Binding46 > 2 &&
                  sankeyDiagramXADWPNL6Binding49.push(
                    "'" + this.terminals_[sankeyDiagramXADWPNL6Binding46] + "'",
                  );
              sankeyDiagramXADWPNL6Binding50 =
                sankeyDiagramXADWPNL6Binding35.showPosition
                  ? "Parse error on line " +
                    (sankeyDiagramXADWPNL6Binding29 + 1) +
                    ":\n" +
                    sankeyDiagramXADWPNL6Binding35.showPosition() +
                    "\nExpecting " +
                    sankeyDiagramXADWPNL6Binding49.join(", ") +
                    ", got '" +
                    (this.terminals_[sankeyDiagramXADWPNL6Binding40] ||
                      sankeyDiagramXADWPNL6Binding40) +
                    "'"
                  : "Parse error on line " +
                    (sankeyDiagramXADWPNL6Binding29 + 1) +
                    ": Unexpected " +
                    (sankeyDiagramXADWPNL6Binding40 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[sankeyDiagramXADWPNL6Binding40] ||
                          sankeyDiagramXADWPNL6Binding40) +
                        "'");
              this.parseError(sankeyDiagramXADWPNL6Binding50, {
                text: sankeyDiagramXADWPNL6Binding35.match,
                token:
                  this.terminals_[sankeyDiagramXADWPNL6Binding40] ||
                  sankeyDiagramXADWPNL6Binding40,
                line: sankeyDiagramXADWPNL6Binding35.yylineno,
                loc: sankeyDiagramXADWPNL6Binding38,
                expected: sankeyDiagramXADWPNL6Binding49,
              });
            }
            if (
              sankeyDiagramXADWPNL6Binding43[0] instanceof Array &&
              sankeyDiagramXADWPNL6Binding43.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  sankeyDiagramXADWPNL6Binding42 +
                  ", token: " +
                  sankeyDiagramXADWPNL6Binding40,
              );
            switch (sankeyDiagramXADWPNL6Binding43[0]) {
              case 1:
                sankeyDiagramXADWPNL6Binding23.push(
                  sankeyDiagramXADWPNL6Binding40,
                );
                sankeyDiagramXADWPNL6Binding25.push(
                  sankeyDiagramXADWPNL6Binding35.yytext,
                );
                sankeyDiagramXADWPNL6Binding26.push(
                  sankeyDiagramXADWPNL6Binding35.yylloc,
                );
                sankeyDiagramXADWPNL6Binding23.push(
                  sankeyDiagramXADWPNL6Binding43[1],
                );
                sankeyDiagramXADWPNL6Binding40 = null;
                sankeyDiagramXADWPNL6Binding41
                  ? ((sankeyDiagramXADWPNL6Binding40 =
                      sankeyDiagramXADWPNL6Binding41),
                    (sankeyDiagramXADWPNL6Binding41 = null))
                  : ((sankeyDiagramXADWPNL6Binding30 =
                      sankeyDiagramXADWPNL6Binding35.yyleng),
                    (sankeyDiagramXADWPNL6Binding28 =
                      sankeyDiagramXADWPNL6Binding35.yytext),
                    (sankeyDiagramXADWPNL6Binding29 =
                      sankeyDiagramXADWPNL6Binding35.yylineno),
                    (sankeyDiagramXADWPNL6Binding38 =
                      sankeyDiagramXADWPNL6Binding35.yylloc),
                    sankeyDiagramXADWPNL6Binding31 > 0 &&
                      sankeyDiagramXADWPNL6Binding31--);
                break;
              case 2:
                if (
                  ((sankeyDiagramXADWPNL6Binding47 =
                    this.productions_[sankeyDiagramXADWPNL6Binding43[1]][1]),
                  (sankeyDiagramXADWPNL6Binding45.$ =
                    sankeyDiagramXADWPNL6Binding25[
                      sankeyDiagramXADWPNL6Binding25.length -
                        sankeyDiagramXADWPNL6Binding47
                    ]),
                  (sankeyDiagramXADWPNL6Binding45._$ = {
                    first_line:
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length -
                          (sankeyDiagramXADWPNL6Binding47 || 1)
                      ].first_line,
                    last_line:
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length - 1
                      ].last_line,
                    first_column:
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length -
                          (sankeyDiagramXADWPNL6Binding47 || 1)
                      ].first_column,
                    last_column:
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length - 1
                      ].last_column,
                  }),
                  sankeyDiagramXADWPNL6Binding39 &&
                    (sankeyDiagramXADWPNL6Binding45._$.range = [
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length -
                          (sankeyDiagramXADWPNL6Binding47 || 1)
                      ].range[0],
                      sankeyDiagramXADWPNL6Binding26[
                        sankeyDiagramXADWPNL6Binding26.length - 1
                      ].range[1],
                    ]),
                  (sankeyDiagramXADWPNL6Binding44 = this.performAction.apply(
                    sankeyDiagramXADWPNL6Binding45,
                    [
                      sankeyDiagramXADWPNL6Binding28,
                      sankeyDiagramXADWPNL6Binding30,
                      sankeyDiagramXADWPNL6Binding29,
                      sankeyDiagramXADWPNL6Binding36.yy,
                      sankeyDiagramXADWPNL6Binding43[1],
                      sankeyDiagramXADWPNL6Binding25,
                      sankeyDiagramXADWPNL6Binding26,
                    ].concat(sankeyDiagramXADWPNL6Binding34),
                  )),
                  sankeyDiagramXADWPNL6Binding44 !== undefined)
                )
                  return sankeyDiagramXADWPNL6Binding44;
                sankeyDiagramXADWPNL6Binding47 &&
                  ((sankeyDiagramXADWPNL6Binding23 =
                    sankeyDiagramXADWPNL6Binding23.slice(
                      0,
                      -1 * sankeyDiagramXADWPNL6Binding47 * 2,
                    )),
                  (sankeyDiagramXADWPNL6Binding25 =
                    sankeyDiagramXADWPNL6Binding25.slice(
                      0,
                      -1 * sankeyDiagramXADWPNL6Binding47,
                    )),
                  (sankeyDiagramXADWPNL6Binding26 =
                    sankeyDiagramXADWPNL6Binding26.slice(
                      0,
                      -1 * sankeyDiagramXADWPNL6Binding47,
                    )));
                sankeyDiagramXADWPNL6Binding23.push(
                  this.productions_[sankeyDiagramXADWPNL6Binding43[1]][0],
                );
                sankeyDiagramXADWPNL6Binding25.push(
                  sankeyDiagramXADWPNL6Binding45.$,
                );
                sankeyDiagramXADWPNL6Binding26.push(
                  sankeyDiagramXADWPNL6Binding45._$,
                );
                sankeyDiagramXADWPNL6Binding48 =
                  sankeyDiagramXADWPNL6Binding27[
                    sankeyDiagramXADWPNL6Binding23[
                      sankeyDiagramXADWPNL6Binding23.length - 2
                    ]
                  ][
                    sankeyDiagramXADWPNL6Binding23[
                      sankeyDiagramXADWPNL6Binding23.length - 1
                    ]
                  ];
                sankeyDiagramXADWPNL6Binding23.push(
                  sankeyDiagramXADWPNL6Binding48,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    sankeyDiagramXADWPNL6Binding21.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          sankeyDiagramXADWPNL6Input27,
          sankeyDiagramXADWPNL6Input28,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              sankeyDiagramXADWPNL6Input27,
              sankeyDiagramXADWPNL6Input28,
            );
          else throw Error(sankeyDiagramXADWPNL6Input27);
        }, "parseError"),
        setInput: defineFunctionName(function (
          sankeyDiagramXADWPNL6Input9,
          sankeyDiagramXADWPNL6Input10,
        ) {
          return (
            (this.yy = sankeyDiagramXADWPNL6Input10 || this.yy || {}),
            (this._input = sankeyDiagramXADWPNL6Input9),
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
          var sankeyDiagramXADWPNL6Binding88 = this._input[0];
          return (
            (this.yytext += sankeyDiagramXADWPNL6Binding88),
            this.yyleng++,
            this.offset++,
            (this.match += sankeyDiagramXADWPNL6Binding88),
            (this.matched += sankeyDiagramXADWPNL6Binding88),
            sankeyDiagramXADWPNL6Binding88.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            sankeyDiagramXADWPNL6Binding88
          );
        }, "input"),
        unput: defineFunctionName(function (sankeyDiagramXADWPNL6Input8) {
          var sankeyDiagramXADWPNL6Binding79 =
              sankeyDiagramXADWPNL6Input8.length,
            sankeyDiagramXADWPNL6Binding80 =
              sankeyDiagramXADWPNL6Input8.split(/(?:\r\n?|\n)/g);
          this._input = sankeyDiagramXADWPNL6Input8 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - sankeyDiagramXADWPNL6Binding79,
          );
          this.offset -= sankeyDiagramXADWPNL6Binding79;
          var sankeyDiagramXADWPNL6Binding81 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          sankeyDiagramXADWPNL6Binding80.length - 1 &&
            (this.yylineno -= sankeyDiagramXADWPNL6Binding80.length - 1);
          var sankeyDiagramXADWPNL6Binding82 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: sankeyDiagramXADWPNL6Binding80
                ? (sankeyDiagramXADWPNL6Binding80.length ===
                  sankeyDiagramXADWPNL6Binding81.length
                    ? this.yylloc.first_column
                    : 0) +
                  sankeyDiagramXADWPNL6Binding81[
                    sankeyDiagramXADWPNL6Binding81.length -
                      sankeyDiagramXADWPNL6Binding80.length
                  ].length -
                  sankeyDiagramXADWPNL6Binding80[0].length
                : this.yylloc.first_column - sankeyDiagramXADWPNL6Binding79,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                sankeyDiagramXADWPNL6Binding82[0],
                sankeyDiagramXADWPNL6Binding82[0] +
                  this.yyleng -
                  sankeyDiagramXADWPNL6Binding79,
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
        less: defineFunctionName(function (sankeyDiagramXADWPNL6Input39) {
          this.unput(this.match.slice(sankeyDiagramXADWPNL6Input39));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var sankeyDiagramXADWPNL6Binding91 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (sankeyDiagramXADWPNL6Binding91.length > 20 ? "..." : "") +
            sankeyDiagramXADWPNL6Binding91.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var sankeyDiagramXADWPNL6Binding89 = this.match;
          return (
            sankeyDiagramXADWPNL6Binding89.length < 20 &&
              (sankeyDiagramXADWPNL6Binding89 += this._input.substr(
                0,
                20 - sankeyDiagramXADWPNL6Binding89.length,
              )),
            (
              sankeyDiagramXADWPNL6Binding89.substr(0, 20) +
              (sankeyDiagramXADWPNL6Binding89.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var sankeyDiagramXADWPNL6Binding92 = this.pastInput(),
            sankeyDiagramXADWPNL6Binding93 = Array(
              sankeyDiagramXADWPNL6Binding92.length + 1,
            ).join("-");
          return (
            sankeyDiagramXADWPNL6Binding92 +
            this.upcomingInput() +
            "\n" +
            sankeyDiagramXADWPNL6Binding93 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          sankeyDiagramXADWPNL6Input6,
          sankeyDiagramXADWPNL6Input7,
        ) {
          var sankeyDiagramXADWPNL6Binding69,
            sankeyDiagramXADWPNL6Binding70,
            sankeyDiagramXADWPNL6Binding71;
          if (
            (this.options.backtrack_lexer &&
              ((sankeyDiagramXADWPNL6Binding71 = {
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
                (sankeyDiagramXADWPNL6Binding71.yylloc.range =
                  this.yylloc.range.slice(0))),
            (sankeyDiagramXADWPNL6Binding70 =
              sankeyDiagramXADWPNL6Input6[0].match(/(?:\r\n?|\n).*/g)),
            sankeyDiagramXADWPNL6Binding70 &&
              (this.yylineno += sankeyDiagramXADWPNL6Binding70.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: sankeyDiagramXADWPNL6Binding70
                ? sankeyDiagramXADWPNL6Binding70[
                    sankeyDiagramXADWPNL6Binding70.length - 1
                  ].length -
                  sankeyDiagramXADWPNL6Binding70[
                    sankeyDiagramXADWPNL6Binding70.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  sankeyDiagramXADWPNL6Input6[0].length,
            }),
            (this.yytext += sankeyDiagramXADWPNL6Input6[0]),
            (this.match += sankeyDiagramXADWPNL6Input6[0]),
            (this.matches = sankeyDiagramXADWPNL6Input6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              sankeyDiagramXADWPNL6Input6[0].length,
            )),
            (this.matched += sankeyDiagramXADWPNL6Input6[0]),
            (sankeyDiagramXADWPNL6Binding69 = this.performAction.call(
              this,
              this.yy,
              this,
              sankeyDiagramXADWPNL6Input7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            sankeyDiagramXADWPNL6Binding69)
          )
            return sankeyDiagramXADWPNL6Binding69;
          if (this._backtrack) {
            for (var sankeyDiagramXADWPNL6Binding72 in sankeyDiagramXADWPNL6Binding71)
              this[sankeyDiagramXADWPNL6Binding72] =
                sankeyDiagramXADWPNL6Binding71[sankeyDiagramXADWPNL6Binding72];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var sankeyDiagramXADWPNL6Binding73,
            sankeyDiagramXADWPNL6Binding74,
            sankeyDiagramXADWPNL6Binding75,
            sankeyDiagramXADWPNL6Binding76;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var sankeyDiagramXADWPNL6Binding77 = this._currentRules(),
              sankeyDiagramXADWPNL6Binding78 = 0;
            sankeyDiagramXADWPNL6Binding78 <
            sankeyDiagramXADWPNL6Binding77.length;
            sankeyDiagramXADWPNL6Binding78++
          )
            if (
              ((sankeyDiagramXADWPNL6Binding75 = this._input.match(
                this.rules[
                  sankeyDiagramXADWPNL6Binding77[sankeyDiagramXADWPNL6Binding78]
                ],
              )),
              sankeyDiagramXADWPNL6Binding75 &&
                (!sankeyDiagramXADWPNL6Binding74 ||
                  sankeyDiagramXADWPNL6Binding75[0].length >
                    sankeyDiagramXADWPNL6Binding74[0].length))
            ) {
              if (
                ((sankeyDiagramXADWPNL6Binding74 =
                  sankeyDiagramXADWPNL6Binding75),
                (sankeyDiagramXADWPNL6Binding76 =
                  sankeyDiagramXADWPNL6Binding78),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((sankeyDiagramXADWPNL6Binding73 = this.test_match(
                    sankeyDiagramXADWPNL6Binding75,
                    sankeyDiagramXADWPNL6Binding77[
                      sankeyDiagramXADWPNL6Binding78
                    ],
                  )),
                  sankeyDiagramXADWPNL6Binding73 !== false)
                )
                  return sankeyDiagramXADWPNL6Binding73;
                if (this._backtrack) {
                  sankeyDiagramXADWPNL6Binding74 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return sankeyDiagramXADWPNL6Binding74
            ? ((sankeyDiagramXADWPNL6Binding73 = this.test_match(
                sankeyDiagramXADWPNL6Binding74,
                sankeyDiagramXADWPNL6Binding77[sankeyDiagramXADWPNL6Binding76],
              )),
              sankeyDiagramXADWPNL6Binding73 === false
                ? false
                : sankeyDiagramXADWPNL6Binding73)
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
        begin: defineFunctionName(function (sankeyDiagramXADWPNL6Input40) {
          this.conditionStack.push(sankeyDiagramXADWPNL6Input40);
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
        topState: defineFunctionName(function (sankeyDiagramXADWPNL6Input22) {
          return (
            (sankeyDiagramXADWPNL6Input22 =
              this.conditionStack.length -
              1 -
              Math.abs(sankeyDiagramXADWPNL6Input22 || 0)),
            sankeyDiagramXADWPNL6Input22 >= 0
              ? this.conditionStack[sankeyDiagramXADWPNL6Input22]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (sankeyDiagramXADWPNL6Input43) {
          this.begin(sankeyDiagramXADWPNL6Input43);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          sankeyDiagramXADWPNL6Input18,
          sankeyDiagramXADWPNL6Input19,
          sankeyDiagramXADWPNL6Input20,
          sankeyDiagramXADWPNL6Input21,
        ) {
          switch (sankeyDiagramXADWPNL6Input20) {
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
    function sankeyDiagramXADWPNL6Helper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(sankeyDiagramXADWPNL6Helper1, "Parser"),
      (sankeyDiagramXADWPNL6Helper1.prototype = sankeyDiagramXADWPNL6Binding21),
      (sankeyDiagramXADWPNL6Binding21.Parser = sankeyDiagramXADWPNL6Helper1),
      new sankeyDiagramXADWPNL6Helper1()
    );
  })();
  sankeyDiagramXADWPNL6Binding1.parser = sankeyDiagramXADWPNL6Binding1;
  sankeyDiagramXADWPNL6Binding2 = sankeyDiagramXADWPNL6Binding1;
  sankeyDiagramXADWPNL6Binding3 = [];
  sankeyDiagramXADWPNL6Binding4 = [];
  sankeyDiagramXADWPNL6Binding5 = new Map();
  sankeyDiagramXADWPNL6Binding6 = defineFunctionName(() => {
    sankeyDiagramXADWPNL6Binding3 = [];
    sankeyDiagramXADWPNL6Binding4 = [];
    sankeyDiagramXADWPNL6Binding5 = new Map();
    _chunkICPOFSXXA();
  }, "clear");
  sankeyDiagramXADWPNL6Binding7 = class {
    constructor(
      sankeyDiagramXADWPNL6Input34,
      sankeyDiagramXADWPNL6Input35,
      sankeyDiagramXADWPNL6Input36 = 0,
    ) {
      this.source = sankeyDiagramXADWPNL6Input34;
      this.target = sankeyDiagramXADWPNL6Input35;
      this.value = sankeyDiagramXADWPNL6Input36;
    }
    static {
      defineFunctionName(this, "SankeyLink");
    }
  };
  sankeyDiagramXADWPNL6Binding8 = defineFunctionName(
    (
      sankeyDiagramXADWPNL6Input44,
      sankeyDiagramXADWPNL6Input45,
      sankeyDiagramXADWPNL6Input46,
    ) => {
      sankeyDiagramXADWPNL6Binding3.push(
        new sankeyDiagramXADWPNL6Binding7(
          sankeyDiagramXADWPNL6Input44,
          sankeyDiagramXADWPNL6Input45,
          sankeyDiagramXADWPNL6Input46,
        ),
      );
    },
    "addLink",
  );
  sankeyDiagramXADWPNL6Binding9 = class {
    constructor(sankeyDiagramXADWPNL6Input47) {
      this.ID = sankeyDiagramXADWPNL6Input47;
    }
    static {
      defineFunctionName(this, "SankeyNode");
    }
  };
  sankeyDiagramXADWPNL6Binding10 = {
    nodesMap: sankeyDiagramXADWPNL6Binding5,
    getConfig: defineFunctionName(() => b().sankey, "getConfig"),
    getNodes: defineFunctionName(
      () => sankeyDiagramXADWPNL6Binding4,
      "getNodes",
    ),
    getLinks: defineFunctionName(
      () => sankeyDiagramXADWPNL6Binding3,
      "getLinks",
    ),
    getGraph: defineFunctionName(
      () => ({
        nodes: sankeyDiagramXADWPNL6Binding4.map((item) => ({
          id: item.ID,
        })),
        links: sankeyDiagramXADWPNL6Binding3.map((item) => ({
          source: item.source.ID,
          target: item.target.ID,
          value: item.value,
        })),
      }),
      "getGraph",
    ),
    addLink: sankeyDiagramXADWPNL6Binding8,
    findOrCreateNode: defineFunctionName((sankeyDiagramXADWPNL6Input26) => {
      sankeyDiagramXADWPNL6Input26 = s.sanitizeText(
        sankeyDiagramXADWPNL6Input26,
        b(),
      );
      let sankeyDiagramXADWPNL6Binding95 = sankeyDiagramXADWPNL6Binding5.get(
        sankeyDiagramXADWPNL6Input26,
      );
      return (
        sankeyDiagramXADWPNL6Binding95 === undefined &&
          ((sankeyDiagramXADWPNL6Binding95 = new sankeyDiagramXADWPNL6Binding9(
            sankeyDiagramXADWPNL6Input26,
          )),
          sankeyDiagramXADWPNL6Binding5.set(
            sankeyDiagramXADWPNL6Input26,
            sankeyDiagramXADWPNL6Binding95,
          ),
          sankeyDiagramXADWPNL6Binding4.push(sankeyDiagramXADWPNL6Binding95)),
        sankeyDiagramXADWPNL6Binding95
      );
    }, "findOrCreateNode"),
    getAccTitle: _chunkICPOFSXXV,
    setAccTitle: H,
    getAccDescription: _,
    setAccDescription: V,
    getDiagramTitle: C,
    setDiagramTitle: G,
    clear: sankeyDiagramXADWPNL6Binding6,
  };
  sankeyDiagramXADWPNL6Binding11 = class SankeyDiagramXADWPNL6Class1 {
    static {
      defineFunctionName(this, "Uid");
    }
    static {
      this.count = 0;
    }
    static next(sankeyDiagramXADWPNL6Input41) {
      return new SankeyDiagramXADWPNL6Class1(
        sankeyDiagramXADWPNL6Input41 + ++SankeyDiagramXADWPNL6Class1.count,
      );
    }
    constructor(sankeyDiagramXADWPNL6Input38) {
      this.id = sankeyDiagramXADWPNL6Input38;
      this.href = `#${sankeyDiagramXADWPNL6Input38}`;
    }
    toString() {
      return "url(" + this.href + ")";
    }
  };
  sankeyDiagramXADWPNL6Binding12 = {
    left: sankeyLeft,
    right: sankeyRight,
    center: sankeyCenter,
    justify: sankeyJustify,
  };
  sankeyDiagramXADWPNL6Binding13 = {
    draw: defineFunctionName(function (
      sankeyDiagramXADWPNL6Input2,
      sankeyDiagramXADWPNL6Input3,
      sankeyDiagramXADWPNL6Input4,
      sankeyDiagramXADWPNL6Input5,
    ) {
      let { securityLevel, sankey } = b(),
        sankeyDiagramXADWPNL6Binding51 = u.sankey,
        sankeyDiagramXADWPNL6Binding52;
      securityLevel === "sandbox" &&
        (sankeyDiagramXADWPNL6Binding52 = select(
          "#i" + sankeyDiagramXADWPNL6Input3,
        ));
      let sankeyDiagramXADWPNL6Binding53 = select(
          securityLevel === "sandbox"
            ? sankeyDiagramXADWPNL6Binding52.nodes()[0].contentDocument.body
            : "body",
        ),
        sankeyDiagramXADWPNL6Binding54 =
          securityLevel === "sandbox"
            ? sankeyDiagramXADWPNL6Binding53.select(
                `[id="${sankeyDiagramXADWPNL6Input3}"]`,
              )
            : select(`[id="${sankeyDiagramXADWPNL6Input3}"]`),
        sankeyDiagramXADWPNL6Binding55 =
          sankey?.width ?? sankeyDiagramXADWPNL6Binding51.width,
        sankeyDiagramXADWPNL6Binding56 =
          sankey?.height ?? sankeyDiagramXADWPNL6Binding51.width,
        sankeyDiagramXADWPNL6Binding57 =
          sankey?.useMaxWidth ?? sankeyDiagramXADWPNL6Binding51.useMaxWidth,
        sankeyDiagramXADWPNL6Binding58 =
          sankey?.nodeAlignment ?? sankeyDiagramXADWPNL6Binding51.nodeAlignment,
        sankeyDiagramXADWPNL6Binding59 =
          sankey?.prefix ?? sankeyDiagramXADWPNL6Binding51.prefix,
        sankeyDiagramXADWPNL6Binding60 =
          sankey?.suffix ?? sankeyDiagramXADWPNL6Binding51.suffix,
        sankeyDiagramXADWPNL6Binding61 =
          sankey?.showValues ?? sankeyDiagramXADWPNL6Binding51.showValues,
        sankeyDiagramXADWPNL6Binding62 =
          sankeyDiagramXADWPNL6Input5.db.getGraph(),
        sankeyDiagramXADWPNL6Binding63 =
          sankeyDiagramXADWPNL6Binding12[sankeyDiagramXADWPNL6Binding58];
      sankey()
        .nodeId(
          (sankeyDiagramXADWPNL6Input62) => sankeyDiagramXADWPNL6Input62.id,
        )
        .nodeWidth(10)
        .nodePadding(10 + (sankeyDiagramXADWPNL6Binding61 ? 15 : 0))
        .nodeAlign(sankeyDiagramXADWPNL6Binding63)
        .extent([
          [0, 0],
          [sankeyDiagramXADWPNL6Binding55, sankeyDiagramXADWPNL6Binding56],
        ])(sankeyDiagramXADWPNL6Binding62);
      let sankeyDiagramXADWPNL6Binding64 = scaleOrdinal(d);
      sankeyDiagramXADWPNL6Binding54
        .append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(sankeyDiagramXADWPNL6Binding62.nodes)
        .join("g")
        .attr("class", "node")
        .attr(
          "id",
          (sankeyDiagramXADWPNL6Input51) =>
            (sankeyDiagramXADWPNL6Input51.uid =
              sankeyDiagramXADWPNL6Binding11.next("node-")).id,
        )
        .attr("transform", function (sankeyDiagramXADWPNL6Input37) {
          return (
            "translate(" +
            sankeyDiagramXADWPNL6Input37.x0 +
            "," +
            sankeyDiagramXADWPNL6Input37.y0 +
            ")"
          );
        })
        .attr(
          "x",
          (sankeyDiagramXADWPNL6Input63) => sankeyDiagramXADWPNL6Input63.x0,
        )
        .attr(
          "y",
          (sankeyDiagramXADWPNL6Input64) => sankeyDiagramXADWPNL6Input64.y0,
        )
        .append("rect")
        .attr(
          "height",
          (sankeyDiagramXADWPNL6Input56) =>
            sankeyDiagramXADWPNL6Input56.y1 - sankeyDiagramXADWPNL6Input56.y0,
        )
        .attr(
          "width",
          (sankeyDiagramXADWPNL6Input57) =>
            sankeyDiagramXADWPNL6Input57.x1 - sankeyDiagramXADWPNL6Input57.x0,
        )
        .attr("fill", (sankeyDiagramXADWPNL6Input59) =>
          sankeyDiagramXADWPNL6Binding64(sankeyDiagramXADWPNL6Input59.id),
        );
      let sankeyDiagramXADWPNL6Binding65 = defineFunctionName(
        ({ id, value }) =>
          sankeyDiagramXADWPNL6Binding61
            ? `${id}
${sankeyDiagramXADWPNL6Binding59}${Math.round(value * 100) / 100}${sankeyDiagramXADWPNL6Binding60}`
            : id,
        "getText",
      );
      sankeyDiagramXADWPNL6Binding54
        .append("g")
        .attr("class", "node-labels")
        .attr("font-size", 14)
        .selectAll("text")
        .data(sankeyDiagramXADWPNL6Binding62.nodes)
        .join("text")
        .attr("x", (sankeyDiagramXADWPNL6Input49) =>
          sankeyDiagramXADWPNL6Input49.x0 < sankeyDiagramXADWPNL6Binding55 / 2
            ? sankeyDiagramXADWPNL6Input49.x1 + 6
            : sankeyDiagramXADWPNL6Input49.x0 - 6,
        )
        .attr(
          "y",
          (sankeyDiagramXADWPNL6Input53) =>
            (sankeyDiagramXADWPNL6Input53.y1 +
              sankeyDiagramXADWPNL6Input53.y0) /
            2,
        )
        .attr("dy", `${sankeyDiagramXADWPNL6Binding61 ? "0" : "0.35"}em`)
        .attr("text-anchor", (sankeyDiagramXADWPNL6Input50) =>
          sankeyDiagramXADWPNL6Input50.x0 < sankeyDiagramXADWPNL6Binding55 / 2
            ? "start"
            : "end",
        )
        .text(sankeyDiagramXADWPNL6Binding65);
      let sankeyDiagramXADWPNL6Binding66 = sankeyDiagramXADWPNL6Binding54
          .append("g")
          .attr("class", "links")
          .attr("fill", "none")
          .attr("stroke-opacity", 0.5)
          .selectAll(".link")
          .data(sankeyDiagramXADWPNL6Binding62.links)
          .join("g")
          .attr("class", "link")
          .style("mix-blend-mode", "multiply"),
        sankeyDiagramXADWPNL6Binding67 = sankey?.linkColor ?? "gradient";
      if (sankeyDiagramXADWPNL6Binding67 === "gradient") {
        let sankeyDiagramXADWPNL6Binding87 = sankeyDiagramXADWPNL6Binding66
          .append("linearGradient")
          .attr(
            "id",
            (sankeyDiagramXADWPNL6Input48) =>
              (sankeyDiagramXADWPNL6Input48.uid =
                sankeyDiagramXADWPNL6Binding11.next("linearGradient-")).id,
          )
          .attr("gradientUnits", "userSpaceOnUse")
          .attr(
            "x1",
            (sankeyDiagramXADWPNL6Input58) =>
              sankeyDiagramXADWPNL6Input58.source.x1,
          )
          .attr("x2", (event) => event.target.x0);
        sankeyDiagramXADWPNL6Binding87
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", (sankeyDiagramXADWPNL6Input54) =>
            sankeyDiagramXADWPNL6Binding64(
              sankeyDiagramXADWPNL6Input54.source.id,
            ),
          );
        sankeyDiagramXADWPNL6Binding87
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", (event) =>
            sankeyDiagramXADWPNL6Binding64(event.target.id),
          );
      }
      let sankeyDiagramXADWPNL6Binding68;
      switch (sankeyDiagramXADWPNL6Binding67) {
        case "gradient":
          sankeyDiagramXADWPNL6Binding68 = defineFunctionName(
            (sankeyDiagramXADWPNL6Input61) => sankeyDiagramXADWPNL6Input61.uid,
            "coloring",
          );
          break;
        case "source":
          sankeyDiagramXADWPNL6Binding68 = defineFunctionName(
            (sankeyDiagramXADWPNL6Input55) =>
              sankeyDiagramXADWPNL6Binding64(
                sankeyDiagramXADWPNL6Input55.source.id,
              ),
            "coloring",
          );
          break;
        case "target":
          sankeyDiagramXADWPNL6Binding68 = defineFunctionName(
            (event) => sankeyDiagramXADWPNL6Binding64(event.target.id),
            "coloring",
          );
          break;
        default:
          sankeyDiagramXADWPNL6Binding68 = sankeyDiagramXADWPNL6Binding67;
      }
      sankeyDiagramXADWPNL6Binding66
        .append("path")
        .attr("d", _srcR())
        .attr("stroke", sankeyDiagramXADWPNL6Binding68)
        .attr("stroke-width", (sankeyDiagramXADWPNL6Input52) =>
          Math.max(1, sankeyDiagramXADWPNL6Input52.width),
        );
      q(
        undefined,
        sankeyDiagramXADWPNL6Binding54,
        0,
        sankeyDiagramXADWPNL6Binding57,
      );
    }, "draw"),
  };
  sankeyDiagramXADWPNL6Binding14 = defineFunctionName(
    (sankeyDiagramXADWPNL6Input25) =>
      sankeyDiagramXADWPNL6Input25
        .replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "")
        .replaceAll(/([\n\r])+/g, "\n")
        .trim(),
    "prepareTextForParsing",
  );
  sankeyDiagramXADWPNL6Binding15 = defineFunctionName(
    (sankeyDiagramXADWPNL6Input42) => `.label {
      font-family: ${sankeyDiagramXADWPNL6Input42.fontFamily};
    }`,
    "getStyles",
  );
  sankeyDiagramXADWPNL6Binding16 = sankeyDiagramXADWPNL6Binding2.parse.bind(
    sankeyDiagramXADWPNL6Binding2,
  );
  sankeyDiagramXADWPNL6Binding2.parse = (sankeyDiagramXADWPNL6Input60) =>
    sankeyDiagramXADWPNL6Binding16(
      sankeyDiagramXADWPNL6Binding14(sankeyDiagramXADWPNL6Input60),
    );
  SankeyDiagramXADWPNL6 = {
    styles: sankeyDiagramXADWPNL6Binding15,
    parser: sankeyDiagramXADWPNL6Binding2,
    db: sankeyDiagramXADWPNL6Binding10,
    renderer: sankeyDiagramXADWPNL6Binding13,
  };
})();
export { SankeyDiagramXADWPNL6 as diagram };
