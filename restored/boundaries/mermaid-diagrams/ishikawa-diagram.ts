// Restored from ref/webview/assets/ishikawaDiagram-UXIWVN3A-CtnHaub7.js
// Mermaid Ishikawa (fishbone) diagram definition (db + renderer + parser).
// Stage 3 candidate: IMPORT_MAP-ready local deps (no app-initial edge).
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
import rough from "roughjs";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  C as _chunkICPOFSXXC,
  V as _chunkICPOFSXXV,
  A,
  b,
  C,
  G,
  H,
  s,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
import { selectSvgElement as n, initSelectSvgElementChunk as t } from "../../diagrams/select-svg-element-alt";
import { chunk5PVQY5BWP, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
var ishikawaDiagramUXIWVN3ABinding1,
  ishikawaDiagramUXIWVN3ABinding2,
  ishikawaDiagramUXIWVN3ABinding3,
  ishikawaDiagramUXIWVN3ABinding4,
  ishikawaDiagramUXIWVN3ABinding5,
  ishikawaDiagramUXIWVN3ABinding6,
  ishikawaDiagramUXIWVN3ABinding7,
  ishikawaDiagramUXIWVN3ABinding8,
  ishikawaDiagramUXIWVN3ABinding9,
  ishikawaDiagramUXIWVN3ABinding10,
  ishikawaDiagramUXIWVN3ABinding11,
  ishikawaDiagramUXIWVN3ABinding12,
  ishikawaDiagramUXIWVN3ABinding13,
  ishikawaDiagramUXIWVN3ABinding14,
  ishikawaDiagramUXIWVN3ABinding15,
  ishikawaDiagramUXIWVN3ABinding16,
  ishikawaDiagramUXIWVN3ABinding17,
  ishikawaDiagramUXIWVN3ABinding18,
  ishikawaDiagramUXIWVN3ABinding19,
  ishikawaDiagramUXIWVN3ABinding20,
  ishikawaDiagramUXIWVN3ABinding21,
  ishikawaDiagramUXIWVN3ABinding22,
  ishikawaDiagramUXIWVN3ABinding23,
  ishikawaDiagramUXIWVN3ABinding24,
  IshikawaDiagramUXIWVN3A;
esmInit(() => {
  t();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ishikawaDiagramUXIWVN3ABinding1 = (function () {
    var ishikawaDiagramUXIWVN3ABinding25 = defineFunctionName(function (
        ishikawaDiagramUXIWVN3AInput82,
        ishikawaDiagramUXIWVN3AInput83,
        ishikawaDiagramUXIWVN3AInput84,
        ishikawaDiagramUXIWVN3AInput85,
      ) {
        for (
          ishikawaDiagramUXIWVN3AInput84 ||= {},
            ishikawaDiagramUXIWVN3AInput85 =
              ishikawaDiagramUXIWVN3AInput82.length;
          ishikawaDiagramUXIWVN3AInput85--;
          ishikawaDiagramUXIWVN3AInput84[
            ishikawaDiagramUXIWVN3AInput82[ishikawaDiagramUXIWVN3AInput85]
          ] = ishikawaDiagramUXIWVN3AInput83
        );
        return ishikawaDiagramUXIWVN3AInput84;
      }, "o"),
      ishikawaDiagramUXIWVN3ABinding26 = [1, 4],
      ishikawaDiagramUXIWVN3ABinding27 = [1, 14],
      ishikawaDiagramUXIWVN3ABinding28 = [1, 12],
      ishikawaDiagramUXIWVN3ABinding29 = [1, 13],
      ishikawaDiagramUXIWVN3ABinding30 = [6, 7, 8],
      ishikawaDiagramUXIWVN3ABinding31 = [1, 20],
      ishikawaDiagramUXIWVN3ABinding32 = [1, 18],
      ishikawaDiagramUXIWVN3ABinding33 = [1, 19],
      ishikawaDiagramUXIWVN3ABinding34 = [6, 7, 11],
      ishikawaDiagramUXIWVN3ABinding35 = [1, 6, 13, 14],
      ishikawaDiagramUXIWVN3ABinding36 = [1, 23],
      ishikawaDiagramUXIWVN3ABinding37 = [1, 24],
      ishikawaDiagramUXIWVN3ABinding38 = [1, 6, 7, 11, 13, 14],
      ishikawaDiagramUXIWVN3ABinding39 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          ishikawa: 4,
          spaceLines: 5,
          SPACELINE: 6,
          NL: 7,
          ISHIKAWA: 8,
          document: 9,
          stop: 10,
          EOF: 11,
          statement: 12,
          SPACELIST: 13,
          TEXT: 14,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          6: "SPACELINE",
          7: "NL",
          8: "ISHIKAWA",
          11: "EOF",
          13: "SPACELIST",
          14: "TEXT",
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
          [12, 1],
          [12, 1],
          [12, 1],
        ],
        performAction: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput64,
          ishikawaDiagramUXIWVN3AInput65,
          ishikawaDiagramUXIWVN3AInput66,
          ishikawaDiagramUXIWVN3AInput67,
          ishikawaDiagramUXIWVN3AInput68,
          ishikawaDiagramUXIWVN3AInput69,
          ishikawaDiagramUXIWVN3AInput70,
        ) {
          var ishikawaDiagramUXIWVN3ABinding161 =
            ishikawaDiagramUXIWVN3AInput69.length - 1;
          switch (ishikawaDiagramUXIWVN3AInput68) {
            case 6:
            case 7:
              return ishikawaDiagramUXIWVN3AInput67;
            case 15:
              ishikawaDiagramUXIWVN3AInput67.addNode(
                ishikawaDiagramUXIWVN3AInput69[
                  ishikawaDiagramUXIWVN3ABinding161 - 1
                ].length,
                ishikawaDiagramUXIWVN3AInput69[
                  ishikawaDiagramUXIWVN3ABinding161
                ].trim(),
              );
              break;
            case 16:
              ishikawaDiagramUXIWVN3AInput67.addNode(
                0,
                ishikawaDiagramUXIWVN3AInput69[
                  ishikawaDiagramUXIWVN3ABinding161
                ].trim(),
              );
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            5: 3,
            6: [1, 5],
            8: ishikawaDiagramUXIWVN3ABinding26,
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
            8: ishikawaDiagramUXIWVN3ABinding26,
          },
          {
            6: ishikawaDiagramUXIWVN3ABinding27,
            7: [1, 10],
            9: 9,
            12: 11,
            13: ishikawaDiagramUXIWVN3ABinding28,
            14: ishikawaDiagramUXIWVN3ABinding29,
          },
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding30,
            [2, 3],
          ),
          {
            1: [2, 2],
          },
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding30,
            [2, 4],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding30,
            [2, 5],
          ),
          {
            1: [2, 6],
            6: ishikawaDiagramUXIWVN3ABinding27,
            12: 15,
            13: ishikawaDiagramUXIWVN3ABinding28,
            14: ishikawaDiagramUXIWVN3ABinding29,
          },
          {
            6: ishikawaDiagramUXIWVN3ABinding27,
            9: 16,
            12: 11,
            13: ishikawaDiagramUXIWVN3ABinding28,
            14: ishikawaDiagramUXIWVN3ABinding29,
          },
          {
            6: ishikawaDiagramUXIWVN3ABinding31,
            7: ishikawaDiagramUXIWVN3ABinding32,
            10: 17,
            11: ishikawaDiagramUXIWVN3ABinding33,
          },
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding34,
            [2, 18],
            {
              14: [1, 21],
            },
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding34,
            [2, 16],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding34,
            [2, 17],
          ),
          {
            6: ishikawaDiagramUXIWVN3ABinding31,
            7: ishikawaDiagramUXIWVN3ABinding32,
            10: 22,
            11: ishikawaDiagramUXIWVN3ABinding33,
          },
          {
            1: [2, 7],
            6: ishikawaDiagramUXIWVN3ABinding27,
            12: 15,
            13: ishikawaDiagramUXIWVN3ABinding28,
            14: ishikawaDiagramUXIWVN3ABinding29,
          },
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding35,
            [2, 14],
            {
              7: ishikawaDiagramUXIWVN3ABinding36,
              11: ishikawaDiagramUXIWVN3ABinding37,
            },
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding38,
            [2, 8],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding38,
            [2, 9],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding38,
            [2, 10],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding34,
            [2, 15],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding35,
            [2, 13],
            {
              7: ishikawaDiagramUXIWVN3ABinding36,
              11: ishikawaDiagramUXIWVN3ABinding37,
            },
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding38,
            [2, 11],
          ),
          ishikawaDiagramUXIWVN3ABinding25(
            ishikawaDiagramUXIWVN3ABinding38,
            [2, 12],
          ),
        ],
        defaultActions: {
          2: [2, 1],
          6: [2, 2],
        },
        parseError: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput78,
          ishikawaDiagramUXIWVN3AInput79,
        ) {
          if (ishikawaDiagramUXIWVN3AInput79.recoverable)
            this.trace(ishikawaDiagramUXIWVN3AInput78);
          else {
            var ishikawaDiagramUXIWVN3ABinding179 = Error(
              ishikawaDiagramUXIWVN3AInput78,
            );
            throw (
              (ishikawaDiagramUXIWVN3ABinding179.hash =
                ishikawaDiagramUXIWVN3AInput79),
              ishikawaDiagramUXIWVN3ABinding179
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (ishikawaDiagramUXIWVN3AInput1) {
          var ishikawaDiagramUXIWVN3ABinding40 = this,
            ishikawaDiagramUXIWVN3ABinding41 = [0],
            ishikawaDiagramUXIWVN3ABinding42 = [],
            ishikawaDiagramUXIWVN3ABinding43 = [null],
            ishikawaDiagramUXIWVN3ABinding44 = [],
            ishikawaDiagramUXIWVN3ABinding45 = this.table,
            ishikawaDiagramUXIWVN3ABinding46 = "",
            ishikawaDiagramUXIWVN3ABinding47 = 0,
            ishikawaDiagramUXIWVN3ABinding48 = 0,
            ishikawaDiagramUXIWVN3ABinding49 = 0,
            ishikawaDiagramUXIWVN3ABinding52 =
              ishikawaDiagramUXIWVN3ABinding44.slice.call(arguments, 1),
            ishikawaDiagramUXIWVN3ABinding53 = Object.create(this.lexer),
            ishikawaDiagramUXIWVN3ABinding54 = {
              yy: {},
            };
          for (var ishikawaDiagramUXIWVN3ABinding55 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              ishikawaDiagramUXIWVN3ABinding55,
            ) &&
              (ishikawaDiagramUXIWVN3ABinding54.yy[
                ishikawaDiagramUXIWVN3ABinding55
              ] = this.yy[ishikawaDiagramUXIWVN3ABinding55]);
          ishikawaDiagramUXIWVN3ABinding53.setInput(
            ishikawaDiagramUXIWVN3AInput1,
            ishikawaDiagramUXIWVN3ABinding54.yy,
          );
          ishikawaDiagramUXIWVN3ABinding54.yy.lexer =
            ishikawaDiagramUXIWVN3ABinding53;
          ishikawaDiagramUXIWVN3ABinding54.yy.parser = this;
          ishikawaDiagramUXIWVN3ABinding53.yylloc === undefined &&
            (ishikawaDiagramUXIWVN3ABinding53.yylloc = {});
          var ishikawaDiagramUXIWVN3ABinding56 =
            ishikawaDiagramUXIWVN3ABinding53.yylloc;
          ishikawaDiagramUXIWVN3ABinding44.push(
            ishikawaDiagramUXIWVN3ABinding56,
          );
          var ishikawaDiagramUXIWVN3ABinding57 =
            ishikawaDiagramUXIWVN3ABinding53.options &&
            ishikawaDiagramUXIWVN3ABinding53.options.ranges;
          typeof ishikawaDiagramUXIWVN3ABinding54.yy.parseError == "function"
            ? (this.parseError = ishikawaDiagramUXIWVN3ABinding54.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function ishikawaDiagramUXIWVN3AHelper2(
            ishikawaDiagramUXIWVN3AInput86,
          ) {
            ishikawaDiagramUXIWVN3ABinding41.length -=
              2 * ishikawaDiagramUXIWVN3AInput86;
            ishikawaDiagramUXIWVN3ABinding43.length -=
              ishikawaDiagramUXIWVN3AInput86;
            ishikawaDiagramUXIWVN3ABinding44.length -=
              ishikawaDiagramUXIWVN3AInput86;
          }
          defineFunctionName(ishikawaDiagramUXIWVN3AHelper2, "popStack");
          function ishikawaDiagramUXIWVN3AHelper3() {
            var ishikawaDiagramUXIWVN3ABinding169 =
              ishikawaDiagramUXIWVN3ABinding42.pop() ||
              ishikawaDiagramUXIWVN3ABinding53.lex() ||
              1;
            return (
              typeof ishikawaDiagramUXIWVN3ABinding169 != "number" &&
                (ishikawaDiagramUXIWVN3ABinding169 instanceof Array &&
                  ((ishikawaDiagramUXIWVN3ABinding42 =
                    ishikawaDiagramUXIWVN3ABinding169),
                  (ishikawaDiagramUXIWVN3ABinding169 =
                    ishikawaDiagramUXIWVN3ABinding42.pop())),
                (ishikawaDiagramUXIWVN3ABinding169 =
                  ishikawaDiagramUXIWVN3ABinding40.symbols_[
                    ishikawaDiagramUXIWVN3ABinding169
                  ] || ishikawaDiagramUXIWVN3ABinding169)),
              ishikawaDiagramUXIWVN3ABinding169
            );
          }
          defineFunctionName(ishikawaDiagramUXIWVN3AHelper3, "lex");
          for (
            var ishikawaDiagramUXIWVN3ABinding58,
              ishikawaDiagramUXIWVN3ABinding59,
              ishikawaDiagramUXIWVN3ABinding60,
              ishikawaDiagramUXIWVN3ABinding61,
              ishikawaDiagramUXIWVN3ABinding62,
              ishikawaDiagramUXIWVN3ABinding63 = {},
              ishikawaDiagramUXIWVN3ABinding64,
              ishikawaDiagramUXIWVN3ABinding65,
              ishikawaDiagramUXIWVN3ABinding66,
              ishikawaDiagramUXIWVN3ABinding67;
            ;
          ) {
            if (
              ((ishikawaDiagramUXIWVN3ABinding60 =
                ishikawaDiagramUXIWVN3ABinding41[
                  ishikawaDiagramUXIWVN3ABinding41.length - 1
                ]),
              this.defaultActions[ishikawaDiagramUXIWVN3ABinding60]
                ? (ishikawaDiagramUXIWVN3ABinding61 =
                    this.defaultActions[ishikawaDiagramUXIWVN3ABinding60])
                : ((ishikawaDiagramUXIWVN3ABinding58 ??=
                    ishikawaDiagramUXIWVN3AHelper3()),
                  (ishikawaDiagramUXIWVN3ABinding61 =
                    ishikawaDiagramUXIWVN3ABinding45[
                      ishikawaDiagramUXIWVN3ABinding60
                    ] &&
                    ishikawaDiagramUXIWVN3ABinding45[
                      ishikawaDiagramUXIWVN3ABinding60
                    ][ishikawaDiagramUXIWVN3ABinding58])),
              ishikawaDiagramUXIWVN3ABinding61 === undefined ||
                !ishikawaDiagramUXIWVN3ABinding61.length ||
                !ishikawaDiagramUXIWVN3ABinding61[0])
            ) {
              var ishikawaDiagramUXIWVN3ABinding68 = "";
              for (ishikawaDiagramUXIWVN3ABinding64 in ((ishikawaDiagramUXIWVN3ABinding67 =
                []),
              ishikawaDiagramUXIWVN3ABinding45[
                ishikawaDiagramUXIWVN3ABinding60
              ]))
                this.terminals_[ishikawaDiagramUXIWVN3ABinding64] &&
                  ishikawaDiagramUXIWVN3ABinding64 > 2 &&
                  ishikawaDiagramUXIWVN3ABinding67.push(
                    "'" +
                      this.terminals_[ishikawaDiagramUXIWVN3ABinding64] +
                      "'",
                  );
              ishikawaDiagramUXIWVN3ABinding68 =
                ishikawaDiagramUXIWVN3ABinding53.showPosition
                  ? "Parse error on line " +
                    (ishikawaDiagramUXIWVN3ABinding47 + 1) +
                    ":\n" +
                    ishikawaDiagramUXIWVN3ABinding53.showPosition() +
                    "\nExpecting " +
                    ishikawaDiagramUXIWVN3ABinding67.join(", ") +
                    ", got '" +
                    (this.terminals_[ishikawaDiagramUXIWVN3ABinding58] ||
                      ishikawaDiagramUXIWVN3ABinding58) +
                    "'"
                  : "Parse error on line " +
                    (ishikawaDiagramUXIWVN3ABinding47 + 1) +
                    ": Unexpected " +
                    (ishikawaDiagramUXIWVN3ABinding58 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[ishikawaDiagramUXIWVN3ABinding58] ||
                          ishikawaDiagramUXIWVN3ABinding58) +
                        "'");
              this.parseError(ishikawaDiagramUXIWVN3ABinding68, {
                text: ishikawaDiagramUXIWVN3ABinding53.match,
                token:
                  this.terminals_[ishikawaDiagramUXIWVN3ABinding58] ||
                  ishikawaDiagramUXIWVN3ABinding58,
                line: ishikawaDiagramUXIWVN3ABinding53.yylineno,
                loc: ishikawaDiagramUXIWVN3ABinding56,
                expected: ishikawaDiagramUXIWVN3ABinding67,
              });
            }
            if (
              ishikawaDiagramUXIWVN3ABinding61[0] instanceof Array &&
              ishikawaDiagramUXIWVN3ABinding61.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  ishikawaDiagramUXIWVN3ABinding60 +
                  ", token: " +
                  ishikawaDiagramUXIWVN3ABinding58,
              );
            switch (ishikawaDiagramUXIWVN3ABinding61[0]) {
              case 1:
                ishikawaDiagramUXIWVN3ABinding41.push(
                  ishikawaDiagramUXIWVN3ABinding58,
                );
                ishikawaDiagramUXIWVN3ABinding43.push(
                  ishikawaDiagramUXIWVN3ABinding53.yytext,
                );
                ishikawaDiagramUXIWVN3ABinding44.push(
                  ishikawaDiagramUXIWVN3ABinding53.yylloc,
                );
                ishikawaDiagramUXIWVN3ABinding41.push(
                  ishikawaDiagramUXIWVN3ABinding61[1],
                );
                ishikawaDiagramUXIWVN3ABinding58 = null;
                ishikawaDiagramUXIWVN3ABinding59
                  ? ((ishikawaDiagramUXIWVN3ABinding58 =
                      ishikawaDiagramUXIWVN3ABinding59),
                    (ishikawaDiagramUXIWVN3ABinding59 = null))
                  : ((ishikawaDiagramUXIWVN3ABinding48 =
                      ishikawaDiagramUXIWVN3ABinding53.yyleng),
                    (ishikawaDiagramUXIWVN3ABinding46 =
                      ishikawaDiagramUXIWVN3ABinding53.yytext),
                    (ishikawaDiagramUXIWVN3ABinding47 =
                      ishikawaDiagramUXIWVN3ABinding53.yylineno),
                    (ishikawaDiagramUXIWVN3ABinding56 =
                      ishikawaDiagramUXIWVN3ABinding53.yylloc),
                    ishikawaDiagramUXIWVN3ABinding49 > 0 &&
                      ishikawaDiagramUXIWVN3ABinding49--);
                break;
              case 2:
                if (
                  ((ishikawaDiagramUXIWVN3ABinding65 =
                    this.productions_[ishikawaDiagramUXIWVN3ABinding61[1]][1]),
                  (ishikawaDiagramUXIWVN3ABinding63.$ =
                    ishikawaDiagramUXIWVN3ABinding43[
                      ishikawaDiagramUXIWVN3ABinding43.length -
                        ishikawaDiagramUXIWVN3ABinding65
                    ]),
                  (ishikawaDiagramUXIWVN3ABinding63._$ = {
                    first_line:
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length -
                          (ishikawaDiagramUXIWVN3ABinding65 || 1)
                      ].first_line,
                    last_line:
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length - 1
                      ].last_line,
                    first_column:
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length -
                          (ishikawaDiagramUXIWVN3ABinding65 || 1)
                      ].first_column,
                    last_column:
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length - 1
                      ].last_column,
                  }),
                  ishikawaDiagramUXIWVN3ABinding57 &&
                    (ishikawaDiagramUXIWVN3ABinding63._$.range = [
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length -
                          (ishikawaDiagramUXIWVN3ABinding65 || 1)
                      ].range[0],
                      ishikawaDiagramUXIWVN3ABinding44[
                        ishikawaDiagramUXIWVN3ABinding44.length - 1
                      ].range[1],
                    ]),
                  (ishikawaDiagramUXIWVN3ABinding62 = this.performAction.apply(
                    ishikawaDiagramUXIWVN3ABinding63,
                    [
                      ishikawaDiagramUXIWVN3ABinding46,
                      ishikawaDiagramUXIWVN3ABinding48,
                      ishikawaDiagramUXIWVN3ABinding47,
                      ishikawaDiagramUXIWVN3ABinding54.yy,
                      ishikawaDiagramUXIWVN3ABinding61[1],
                      ishikawaDiagramUXIWVN3ABinding43,
                      ishikawaDiagramUXIWVN3ABinding44,
                    ].concat(ishikawaDiagramUXIWVN3ABinding52),
                  )),
                  ishikawaDiagramUXIWVN3ABinding62 !== undefined)
                )
                  return ishikawaDiagramUXIWVN3ABinding62;
                ishikawaDiagramUXIWVN3ABinding65 &&
                  ((ishikawaDiagramUXIWVN3ABinding41 =
                    ishikawaDiagramUXIWVN3ABinding41.slice(
                      0,
                      -1 * ishikawaDiagramUXIWVN3ABinding65 * 2,
                    )),
                  (ishikawaDiagramUXIWVN3ABinding43 =
                    ishikawaDiagramUXIWVN3ABinding43.slice(
                      0,
                      -1 * ishikawaDiagramUXIWVN3ABinding65,
                    )),
                  (ishikawaDiagramUXIWVN3ABinding44 =
                    ishikawaDiagramUXIWVN3ABinding44.slice(
                      0,
                      -1 * ishikawaDiagramUXIWVN3ABinding65,
                    )));
                ishikawaDiagramUXIWVN3ABinding41.push(
                  this.productions_[ishikawaDiagramUXIWVN3ABinding61[1]][0],
                );
                ishikawaDiagramUXIWVN3ABinding43.push(
                  ishikawaDiagramUXIWVN3ABinding63.$,
                );
                ishikawaDiagramUXIWVN3ABinding44.push(
                  ishikawaDiagramUXIWVN3ABinding63._$,
                );
                ishikawaDiagramUXIWVN3ABinding66 =
                  ishikawaDiagramUXIWVN3ABinding45[
                    ishikawaDiagramUXIWVN3ABinding41[
                      ishikawaDiagramUXIWVN3ABinding41.length - 2
                    ]
                  ][
                    ishikawaDiagramUXIWVN3ABinding41[
                      ishikawaDiagramUXIWVN3ABinding41.length - 1
                    ]
                  ];
                ishikawaDiagramUXIWVN3ABinding41.push(
                  ishikawaDiagramUXIWVN3ABinding66,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    ishikawaDiagramUXIWVN3ABinding39.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput80,
          ishikawaDiagramUXIWVN3AInput81,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              ishikawaDiagramUXIWVN3AInput80,
              ishikawaDiagramUXIWVN3AInput81,
            );
          else throw Error(ishikawaDiagramUXIWVN3AInput80);
        }, "parseError"),
        setInput: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput31,
          ishikawaDiagramUXIWVN3AInput32,
        ) {
          return (
            (this.yy = ishikawaDiagramUXIWVN3AInput32 || this.yy || {}),
            (this._input = ishikawaDiagramUXIWVN3AInput31),
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
          var ishikawaDiagramUXIWVN3ABinding152 = this._input[0];
          return (
            (this.yytext += ishikawaDiagramUXIWVN3ABinding152),
            this.yyleng++,
            this.offset++,
            (this.match += ishikawaDiagramUXIWVN3ABinding152),
            (this.matched += ishikawaDiagramUXIWVN3ABinding152),
            ishikawaDiagramUXIWVN3ABinding152.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            ishikawaDiagramUXIWVN3ABinding152
          );
        }, "input"),
        unput: defineFunctionName(function (ishikawaDiagramUXIWVN3AInput16) {
          var ishikawaDiagramUXIWVN3ABinding115 =
              ishikawaDiagramUXIWVN3AInput16.length,
            ishikawaDiagramUXIWVN3ABinding116 =
              ishikawaDiagramUXIWVN3AInput16.split(/(?:\r\n?|\n)/g);
          this._input = ishikawaDiagramUXIWVN3AInput16 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - ishikawaDiagramUXIWVN3ABinding115,
          );
          this.offset -= ishikawaDiagramUXIWVN3ABinding115;
          var ishikawaDiagramUXIWVN3ABinding117 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          ishikawaDiagramUXIWVN3ABinding116.length - 1 &&
            (this.yylineno -= ishikawaDiagramUXIWVN3ABinding116.length - 1);
          var ishikawaDiagramUXIWVN3ABinding118 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: ishikawaDiagramUXIWVN3ABinding116
                ? (ishikawaDiagramUXIWVN3ABinding116.length ===
                  ishikawaDiagramUXIWVN3ABinding117.length
                    ? this.yylloc.first_column
                    : 0) +
                  ishikawaDiagramUXIWVN3ABinding117[
                    ishikawaDiagramUXIWVN3ABinding117.length -
                      ishikawaDiagramUXIWVN3ABinding116.length
                  ].length -
                  ishikawaDiagramUXIWVN3ABinding116[0].length
                : this.yylloc.first_column - ishikawaDiagramUXIWVN3ABinding115,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                ishikawaDiagramUXIWVN3ABinding118[0],
                ishikawaDiagramUXIWVN3ABinding118[0] +
                  this.yyleng -
                  ishikawaDiagramUXIWVN3ABinding115,
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
        less: defineFunctionName(function (ishikawaDiagramUXIWVN3AInput87) {
          this.unput(this.match.slice(ishikawaDiagramUXIWVN3AInput87));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var ishikawaDiagramUXIWVN3ABinding171 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (ishikawaDiagramUXIWVN3ABinding171.length > 20 ? "..." : "") +
            ishikawaDiagramUXIWVN3ABinding171.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var ishikawaDiagramUXIWVN3ABinding168 = this.match;
          return (
            ishikawaDiagramUXIWVN3ABinding168.length < 20 &&
              (ishikawaDiagramUXIWVN3ABinding168 += this._input.substr(
                0,
                20 - ishikawaDiagramUXIWVN3ABinding168.length,
              )),
            (
              ishikawaDiagramUXIWVN3ABinding168.substr(0, 20) +
              (ishikawaDiagramUXIWVN3ABinding168.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var ishikawaDiagramUXIWVN3ABinding172 = this.pastInput(),
            ishikawaDiagramUXIWVN3ABinding173 = Array(
              ishikawaDiagramUXIWVN3ABinding172.length + 1,
            ).join("-");
          return (
            ishikawaDiagramUXIWVN3ABinding172 +
            this.upcomingInput() +
            "\n" +
            ishikawaDiagramUXIWVN3ABinding173 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput6,
          ishikawaDiagramUXIWVN3AInput7,
        ) {
          var ishikawaDiagramUXIWVN3ABinding93,
            ishikawaDiagramUXIWVN3ABinding94,
            ishikawaDiagramUXIWVN3ABinding95;
          if (
            (this.options.backtrack_lexer &&
              ((ishikawaDiagramUXIWVN3ABinding95 = {
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
                (ishikawaDiagramUXIWVN3ABinding95.yylloc.range =
                  this.yylloc.range.slice(0))),
            (ishikawaDiagramUXIWVN3ABinding94 =
              ishikawaDiagramUXIWVN3AInput6[0].match(/(?:\r\n?|\n).*/g)),
            ishikawaDiagramUXIWVN3ABinding94 &&
              (this.yylineno += ishikawaDiagramUXIWVN3ABinding94.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: ishikawaDiagramUXIWVN3ABinding94
                ? ishikawaDiagramUXIWVN3ABinding94[
                    ishikawaDiagramUXIWVN3ABinding94.length - 1
                  ].length -
                  ishikawaDiagramUXIWVN3ABinding94[
                    ishikawaDiagramUXIWVN3ABinding94.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  ishikawaDiagramUXIWVN3AInput6[0].length,
            }),
            (this.yytext += ishikawaDiagramUXIWVN3AInput6[0]),
            (this.match += ishikawaDiagramUXIWVN3AInput6[0]),
            (this.matches = ishikawaDiagramUXIWVN3AInput6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              ishikawaDiagramUXIWVN3AInput6[0].length,
            )),
            (this.matched += ishikawaDiagramUXIWVN3AInput6[0]),
            (ishikawaDiagramUXIWVN3ABinding93 = this.performAction.call(
              this,
              this.yy,
              this,
              ishikawaDiagramUXIWVN3AInput7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            ishikawaDiagramUXIWVN3ABinding93)
          )
            return ishikawaDiagramUXIWVN3ABinding93;
          if (this._backtrack) {
            for (var ishikawaDiagramUXIWVN3ABinding96 in ishikawaDiagramUXIWVN3ABinding95)
              this[ishikawaDiagramUXIWVN3ABinding96] =
                ishikawaDiagramUXIWVN3ABinding95[
                  ishikawaDiagramUXIWVN3ABinding96
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var ishikawaDiagramUXIWVN3ABinding109,
            ishikawaDiagramUXIWVN3ABinding110,
            ishikawaDiagramUXIWVN3ABinding111,
            ishikawaDiagramUXIWVN3ABinding112;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var ishikawaDiagramUXIWVN3ABinding113 = this._currentRules(),
              ishikawaDiagramUXIWVN3ABinding114 = 0;
            ishikawaDiagramUXIWVN3ABinding114 <
            ishikawaDiagramUXIWVN3ABinding113.length;
            ishikawaDiagramUXIWVN3ABinding114++
          )
            if (
              ((ishikawaDiagramUXIWVN3ABinding111 = this._input.match(
                this.rules[
                  ishikawaDiagramUXIWVN3ABinding113[
                    ishikawaDiagramUXIWVN3ABinding114
                  ]
                ],
              )),
              ishikawaDiagramUXIWVN3ABinding111 &&
                (!ishikawaDiagramUXIWVN3ABinding110 ||
                  ishikawaDiagramUXIWVN3ABinding111[0].length >
                    ishikawaDiagramUXIWVN3ABinding110[0].length))
            ) {
              if (
                ((ishikawaDiagramUXIWVN3ABinding110 =
                  ishikawaDiagramUXIWVN3ABinding111),
                (ishikawaDiagramUXIWVN3ABinding112 =
                  ishikawaDiagramUXIWVN3ABinding114),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((ishikawaDiagramUXIWVN3ABinding109 = this.test_match(
                    ishikawaDiagramUXIWVN3ABinding111,
                    ishikawaDiagramUXIWVN3ABinding113[
                      ishikawaDiagramUXIWVN3ABinding114
                    ],
                  )),
                  ishikawaDiagramUXIWVN3ABinding109 !== false)
                )
                  return ishikawaDiagramUXIWVN3ABinding109;
                if (this._backtrack) {
                  ishikawaDiagramUXIWVN3ABinding110 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return ishikawaDiagramUXIWVN3ABinding110
            ? ((ishikawaDiagramUXIWVN3ABinding109 = this.test_match(
                ishikawaDiagramUXIWVN3ABinding110,
                ishikawaDiagramUXIWVN3ABinding113[
                  ishikawaDiagramUXIWVN3ABinding112
                ],
              )),
              ishikawaDiagramUXIWVN3ABinding109 === false
                ? false
                : ishikawaDiagramUXIWVN3ABinding109)
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
        begin: defineFunctionName(function (ishikawaDiagramUXIWVN3AInput88) {
          this.conditionStack.push(ishikawaDiagramUXIWVN3AInput88);
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
        topState: defineFunctionName(function (ishikawaDiagramUXIWVN3AInput74) {
          return (
            (ishikawaDiagramUXIWVN3AInput74 =
              this.conditionStack.length -
              1 -
              Math.abs(ishikawaDiagramUXIWVN3AInput74 || 0)),
            ishikawaDiagramUXIWVN3AInput74 >= 0
              ? this.conditionStack[ishikawaDiagramUXIWVN3AInput74]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput89,
        ) {
          this.begin(ishikawaDiagramUXIWVN3AInput89);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          ishikawaDiagramUXIWVN3AInput46,
          ishikawaDiagramUXIWVN3AInput47,
          ishikawaDiagramUXIWVN3AInput48,
          ishikawaDiagramUXIWVN3AInput49,
        ) {
          switch (ishikawaDiagramUXIWVN3AInput48) {
            case 0:
              return 6;
            case 1:
              return 8;
            case 2:
              return 8;
            case 3:
              return 6;
            case 4:
              return 7;
            case 5:
              return 13;
            case 6:
              return 14;
            case 7:
              return 11;
          }
        }, "anonymous"),
        rules: [
          /^(?:\s*%%.*)/i,
          /^(?:ishikawa-beta\b)/i,
          /^(?:ishikawa\b)/i,
          /^(?:[\s]+[\n])/i,
          /^(?:[\n]+)/i,
          /^(?:[\s]+)/i,
          /^(?:[^\n]+)/i,
          /^(?:$)/i,
        ],
        conditions: {
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7],
            inclusive: true,
          },
        },
      };
    })();
    function ishikawaDiagramUXIWVN3AHelper1() {
      this.yy = {};
    }
    return (
      defineFunctionName(ishikawaDiagramUXIWVN3AHelper1, "Parser"),
      (ishikawaDiagramUXIWVN3AHelper1.prototype =
        ishikawaDiagramUXIWVN3ABinding39),
      (ishikawaDiagramUXIWVN3ABinding39.Parser =
        ishikawaDiagramUXIWVN3AHelper1),
      new ishikawaDiagramUXIWVN3AHelper1()
    );
  })();
  ishikawaDiagramUXIWVN3ABinding1.parser = ishikawaDiagramUXIWVN3ABinding1;
  ishikawaDiagramUXIWVN3ABinding2 = ishikawaDiagramUXIWVN3ABinding1;
  ishikawaDiagramUXIWVN3ABinding3 = class {
    constructor() {
      this.stack = [];
      this.clear = this.clear.bind(this);
      this.addNode = this.addNode.bind(this);
      this.getRoot = this.getRoot.bind(this);
    }
    static {
      defineFunctionName(this, "IshikawaDB");
    }
    clear() {
      this.root = undefined;
      this.stack = [];
      this.baseLevel = undefined;
      _chunkICPOFSXXA();
    }
    getRoot() {
      return this.root;
    }
    addNode(ishikawaDiagramUXIWVN3AInput33, ishikawaDiagramUXIWVN3AInput34) {
      let ishikawaDiagramUXIWVN3ABinding136 = s.sanitizeText(
        ishikawaDiagramUXIWVN3AInput34,
        b(),
      );
      if (!this.root) {
        this.root = {
          text: ishikawaDiagramUXIWVN3ABinding136,
          children: [],
        };
        this.stack = [
          {
            level: 0,
            node: this.root,
          },
        ];
        G(ishikawaDiagramUXIWVN3ABinding136);
        return;
      }
      this.baseLevel ??= ishikawaDiagramUXIWVN3AInput33;
      let ishikawaDiagramUXIWVN3ABinding137 =
        ishikawaDiagramUXIWVN3AInput33 - this.baseLevel + 1;
      for (
        ishikawaDiagramUXIWVN3ABinding137 <= 0 &&
        (ishikawaDiagramUXIWVN3ABinding137 = 1);
        this.stack.length > 1 &&
        this.stack[this.stack.length - 1].level >=
          ishikawaDiagramUXIWVN3ABinding137;
      )
        this.stack.pop();
      let ishikawaDiagramUXIWVN3ABinding138 =
          this.stack[this.stack.length - 1].node,
        ishikawaDiagramUXIWVN3ABinding139 = {
          text: ishikawaDiagramUXIWVN3ABinding136,
          children: [],
        };
      ishikawaDiagramUXIWVN3ABinding138.children.push(
        ishikawaDiagramUXIWVN3ABinding139,
      );
      this.stack.push({
        level: ishikawaDiagramUXIWVN3ABinding137,
        node: ishikawaDiagramUXIWVN3ABinding139,
      });
    }
    getAccTitle() {
      return _chunkICPOFSXXV();
    }
    setAccTitle(ishikawaDiagramUXIWVN3AInput93) {
      H(ishikawaDiagramUXIWVN3AInput93);
    }
    getAccDescription() {
      return _();
    }
    setAccDescription(ishikawaDiagramUXIWVN3AInput91) {
      V(ishikawaDiagramUXIWVN3AInput91);
    }
    getDiagramTitle() {
      return C();
    }
    setDiagramTitle(ishikawaDiagramUXIWVN3AInput92) {
      G(ishikawaDiagramUXIWVN3AInput92);
    }
  };
  ishikawaDiagramUXIWVN3ABinding4 = 14;
  ishikawaDiagramUXIWVN3ABinding5 = 250;
  ishikawaDiagramUXIWVN3ABinding6 = 30;
  ishikawaDiagramUXIWVN3ABinding7 = 60;
  ishikawaDiagramUXIWVN3ABinding8 = 5;
  ishikawaDiagramUXIWVN3ABinding9 = (82 * Math.PI) / 180;
  ishikawaDiagramUXIWVN3ABinding10 = Math.cos(ishikawaDiagramUXIWVN3ABinding9);
  ishikawaDiagramUXIWVN3ABinding11 = Math.sin(ishikawaDiagramUXIWVN3ABinding9);
  ishikawaDiagramUXIWVN3ABinding12 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput75,
      ishikawaDiagramUXIWVN3AInput76,
      ishikawaDiagramUXIWVN3AInput77,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding175 = ishikawaDiagramUXIWVN3AInput75
          .node()
          .getBBox(),
        ishikawaDiagramUXIWVN3ABinding176 =
          ishikawaDiagramUXIWVN3ABinding175.width +
          ishikawaDiagramUXIWVN3AInput76 * 2,
        ishikawaDiagramUXIWVN3ABinding177 =
          ishikawaDiagramUXIWVN3ABinding175.height +
          ishikawaDiagramUXIWVN3AInput76 * 2;
      _chunkICPOFSXXC(
        ishikawaDiagramUXIWVN3AInput75,
        ishikawaDiagramUXIWVN3ABinding177,
        ishikawaDiagramUXIWVN3ABinding176,
        ishikawaDiagramUXIWVN3AInput77,
      );
      ishikawaDiagramUXIWVN3AInput75.attr(
        "viewBox",
        `${ishikawaDiagramUXIWVN3ABinding175.x - ishikawaDiagramUXIWVN3AInput76} ${ishikawaDiagramUXIWVN3ABinding175.y - ishikawaDiagramUXIWVN3AInput76} ${ishikawaDiagramUXIWVN3ABinding176} ${ishikawaDiagramUXIWVN3ABinding177}`,
      );
    },
    "applyPaddedViewBox",
  );
  ishikawaDiagramUXIWVN3ABinding13 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput2,
      ishikawaDiagramUXIWVN3AInput3,
      ishikawaDiagramUXIWVN3AInput4,
      ishikawaDiagramUXIWVN3AInput5,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding69 =
        ishikawaDiagramUXIWVN3AInput5.db.getRoot();
      if (!ishikawaDiagramUXIWVN3ABinding69) return;
      let ishikawaDiagramUXIWVN3ABinding70 = b(),
        { look, handDrawnSeed, themeVariables } =
          ishikawaDiagramUXIWVN3ABinding70,
        ishikawaDiagramUXIWVN3ABinding71 =
          chunk5PVQY5BWP(ishikawaDiagramUXIWVN3ABinding70.fontSize)[0] ??
          ishikawaDiagramUXIWVN3ABinding4,
        ishikawaDiagramUXIWVN3ABinding72 = look === "handDrawn",
        ishikawaDiagramUXIWVN3ABinding73 =
          ishikawaDiagramUXIWVN3ABinding69.children ?? [],
        ishikawaDiagramUXIWVN3ABinding74 =
          ishikawaDiagramUXIWVN3ABinding70.ishikawa?.diagramPadding ?? 20,
        ishikawaDiagramUXIWVN3ABinding75 =
          ishikawaDiagramUXIWVN3ABinding70.ishikawa?.useMaxWidth ?? false,
        ishikawaDiagramUXIWVN3ABinding76 = n(ishikawaDiagramUXIWVN3AInput3),
        ishikawaDiagramUXIWVN3ABinding77 = ishikawaDiagramUXIWVN3ABinding76
          .append("g")
          .attr("class", "ishikawa"),
        ishikawaDiagramUXIWVN3ABinding78 = ishikawaDiagramUXIWVN3ABinding72
          ? rough.svg(ishikawaDiagramUXIWVN3ABinding76.node())
          : undefined,
        ishikawaDiagramUXIWVN3ABinding79 = ishikawaDiagramUXIWVN3ABinding78
          ? {
              roughSvg: ishikawaDiagramUXIWVN3ABinding78,
              seed: handDrawnSeed ?? 0,
              lineColor: themeVariables?.lineColor ?? "#333",
              fillColor: themeVariables?.mainBkg ?? "#fff",
            }
          : undefined,
        ishikawaDiagramUXIWVN3ABinding80 = `ishikawa-arrow-${ishikawaDiagramUXIWVN3AInput3}`;
      ishikawaDiagramUXIWVN3ABinding72 ||
        ishikawaDiagramUXIWVN3ABinding77
          .append("defs")
          .append("marker")
          .attr("id", ishikawaDiagramUXIWVN3ABinding80)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 0)
          .attr("refY", 5)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 10 0 L 0 5 L 10 10 Z")
          .attr("class", "ishikawa-arrow");
      let ishikawaDiagramUXIWVN3ABinding81 = 0,
        ishikawaDiagramUXIWVN3ABinding82 = ishikawaDiagramUXIWVN3ABinding5,
        ishikawaDiagramUXIWVN3ABinding83 = ishikawaDiagramUXIWVN3ABinding72
          ? undefined
          : ishikawaDiagramUXIWVN3ABinding24(
              ishikawaDiagramUXIWVN3ABinding77,
              ishikawaDiagramUXIWVN3ABinding81,
              ishikawaDiagramUXIWVN3ABinding82,
              ishikawaDiagramUXIWVN3ABinding81,
              ishikawaDiagramUXIWVN3ABinding82,
              "ishikawa-spine",
            );
      if (
        (ishikawaDiagramUXIWVN3ABinding15(
          ishikawaDiagramUXIWVN3ABinding77,
          ishikawaDiagramUXIWVN3ABinding81,
          ishikawaDiagramUXIWVN3ABinding82,
          ishikawaDiagramUXIWVN3ABinding69.text,
          ishikawaDiagramUXIWVN3ABinding71,
          ishikawaDiagramUXIWVN3ABinding79,
        ),
        !ishikawaDiagramUXIWVN3ABinding73.length)
      ) {
        ishikawaDiagramUXIWVN3ABinding72 &&
          ishikawaDiagramUXIWVN3ABinding24(
            ishikawaDiagramUXIWVN3ABinding77,
            ishikawaDiagramUXIWVN3ABinding81,
            ishikawaDiagramUXIWVN3ABinding82,
            ishikawaDiagramUXIWVN3ABinding81,
            ishikawaDiagramUXIWVN3ABinding82,
            "ishikawa-spine",
            ishikawaDiagramUXIWVN3ABinding79,
          );
        ishikawaDiagramUXIWVN3ABinding12(
          ishikawaDiagramUXIWVN3ABinding76,
          ishikawaDiagramUXIWVN3ABinding74,
          ishikawaDiagramUXIWVN3ABinding75,
        );
        return;
      }
      ishikawaDiagramUXIWVN3ABinding81 -= 20;
      let ishikawaDiagramUXIWVN3ABinding84 =
          ishikawaDiagramUXIWVN3ABinding73.filter(
            (item, index) => index % 2 == 0,
          ),
        ishikawaDiagramUXIWVN3ABinding85 =
          ishikawaDiagramUXIWVN3ABinding73.filter(
            (item, index) => index % 2 == 1,
          ),
        ishikawaDiagramUXIWVN3ABinding86 = ishikawaDiagramUXIWVN3ABinding14(
          ishikawaDiagramUXIWVN3ABinding84,
        ),
        ishikawaDiagramUXIWVN3ABinding87 = ishikawaDiagramUXIWVN3ABinding14(
          ishikawaDiagramUXIWVN3ABinding85,
        ),
        ishikawaDiagramUXIWVN3ABinding88 =
          ishikawaDiagramUXIWVN3ABinding86.total +
          ishikawaDiagramUXIWVN3ABinding87.total,
        ishikawaDiagramUXIWVN3ABinding89 = ishikawaDiagramUXIWVN3ABinding5,
        ishikawaDiagramUXIWVN3ABinding90 = ishikawaDiagramUXIWVN3ABinding5;
      if (ishikawaDiagramUXIWVN3ABinding88 > 0) {
        let ishikawaDiagramUXIWVN3ABinding181 =
            ishikawaDiagramUXIWVN3ABinding5 * 2,
          ishikawaDiagramUXIWVN3ABinding182 =
            ishikawaDiagramUXIWVN3ABinding5 * 0.3;
        ishikawaDiagramUXIWVN3ABinding89 = Math.max(
          ishikawaDiagramUXIWVN3ABinding182,
          ishikawaDiagramUXIWVN3ABinding181 *
            (ishikawaDiagramUXIWVN3ABinding86.total /
              ishikawaDiagramUXIWVN3ABinding88),
        );
        ishikawaDiagramUXIWVN3ABinding90 = Math.max(
          ishikawaDiagramUXIWVN3ABinding182,
          ishikawaDiagramUXIWVN3ABinding181 *
            (ishikawaDiagramUXIWVN3ABinding87.total /
              ishikawaDiagramUXIWVN3ABinding88),
        );
      }
      let ishikawaDiagramUXIWVN3ABinding91 =
        ishikawaDiagramUXIWVN3ABinding71 * 2;
      ishikawaDiagramUXIWVN3ABinding89 = Math.max(
        ishikawaDiagramUXIWVN3ABinding89,
        ishikawaDiagramUXIWVN3ABinding86.max * ishikawaDiagramUXIWVN3ABinding91,
      );
      ishikawaDiagramUXIWVN3ABinding90 = Math.max(
        ishikawaDiagramUXIWVN3ABinding90,
        ishikawaDiagramUXIWVN3ABinding87.max * ishikawaDiagramUXIWVN3ABinding91,
      );
      ishikawaDiagramUXIWVN3ABinding82 = Math.max(
        ishikawaDiagramUXIWVN3ABinding89,
        ishikawaDiagramUXIWVN3ABinding5,
      );
      ishikawaDiagramUXIWVN3ABinding83 &&
        ishikawaDiagramUXIWVN3ABinding83
          .attr("y1", ishikawaDiagramUXIWVN3ABinding82)
          .attr("y2", ishikawaDiagramUXIWVN3ABinding82);
      ishikawaDiagramUXIWVN3ABinding77
        .select(".ishikawa-head-group")
        .attr("transform", `translate(0,${ishikawaDiagramUXIWVN3ABinding82})`);
      let ishikawaDiagramUXIWVN3ABinding92 = Math.ceil(
        ishikawaDiagramUXIWVN3ABinding73.length / 2,
      );
      for (
        let ishikawaDiagramUXIWVN3ABinding162 = 0;
        ishikawaDiagramUXIWVN3ABinding162 < ishikawaDiagramUXIWVN3ABinding92;
        ishikawaDiagramUXIWVN3ABinding162++
      ) {
        let ishikawaDiagramUXIWVN3ABinding165 = ishikawaDiagramUXIWVN3ABinding77
          .append("g")
          .attr("class", "ishikawa-pair");
        for (let [
          ishikawaDiagramUXIWVN3ABinding186,
          ishikawaDiagramUXIWVN3ABinding187,
          ishikawaDiagramUXIWVN3ABinding188,
        ] of [
          [
            ishikawaDiagramUXIWVN3ABinding73[
              ishikawaDiagramUXIWVN3ABinding162 * 2
            ],
            -1,
            ishikawaDiagramUXIWVN3ABinding89,
          ],
          [
            ishikawaDiagramUXIWVN3ABinding73[
              ishikawaDiagramUXIWVN3ABinding162 * 2 + 1
            ],
            1,
            ishikawaDiagramUXIWVN3ABinding90,
          ],
        ])
          ishikawaDiagramUXIWVN3ABinding186 &&
            ishikawaDiagramUXIWVN3ABinding19(
              ishikawaDiagramUXIWVN3ABinding165,
              ishikawaDiagramUXIWVN3ABinding186,
              ishikawaDiagramUXIWVN3ABinding81,
              ishikawaDiagramUXIWVN3ABinding82,
              ishikawaDiagramUXIWVN3ABinding187,
              ishikawaDiagramUXIWVN3ABinding188,
              ishikawaDiagramUXIWVN3ABinding71,
              ishikawaDiagramUXIWVN3ABinding79,
            );
        ishikawaDiagramUXIWVN3ABinding81 = ishikawaDiagramUXIWVN3ABinding165
          .selectAll("text")
          .nodes()
          .reduce(
            (accumulator, current) =>
              Math.min(accumulator, current.getBBox().x),
            1 / 0,
          );
      }
      if (ishikawaDiagramUXIWVN3ABinding72)
        ishikawaDiagramUXIWVN3ABinding24(
          ishikawaDiagramUXIWVN3ABinding77,
          ishikawaDiagramUXIWVN3ABinding81,
          ishikawaDiagramUXIWVN3ABinding82,
          0,
          ishikawaDiagramUXIWVN3ABinding82,
          "ishikawa-spine",
          ishikawaDiagramUXIWVN3ABinding79,
        );
      else {
        ishikawaDiagramUXIWVN3ABinding83.attr(
          "x1",
          ishikawaDiagramUXIWVN3ABinding81,
        );
        let ishikawaDiagramUXIWVN3ABinding178 = `url(#${ishikawaDiagramUXIWVN3ABinding80})`;
        ishikawaDiagramUXIWVN3ABinding77
          .selectAll("line.ishikawa-branch, line.ishikawa-sub-branch")
          .attr("marker-start", ishikawaDiagramUXIWVN3ABinding178);
      }
      ishikawaDiagramUXIWVN3ABinding12(
        ishikawaDiagramUXIWVN3ABinding76,
        ishikawaDiagramUXIWVN3ABinding74,
        ishikawaDiagramUXIWVN3ABinding75,
      );
    },
    "draw",
  );
  ishikawaDiagramUXIWVN3ABinding14 = defineFunctionName(
    (ishikawaDiagramUXIWVN3AInput71) => {
      let ishikawaDiagramUXIWVN3ABinding167 = defineFunctionName(
        (ishikawaDiagramUXIWVN3AInput90) =>
          ishikawaDiagramUXIWVN3AInput90.children.reduce(
            (accumulator, current) =>
              accumulator + 1 + ishikawaDiagramUXIWVN3ABinding167(current),
            0,
          ),
        "countDescendants",
      );
      return ishikawaDiagramUXIWVN3AInput71.reduce(
        (accumulator, current) => {
          let ishikawaDiagramUXIWVN3ABinding189 =
            ishikawaDiagramUXIWVN3ABinding167(current);
          return (
            (accumulator.total += ishikawaDiagramUXIWVN3ABinding189),
            (accumulator.max = Math.max(
              accumulator.max,
              ishikawaDiagramUXIWVN3ABinding189,
            )),
            accumulator
          );
        },
        {
          total: 0,
          max: 0,
        },
      );
    },
    "sideStats",
  );
  ishikawaDiagramUXIWVN3ABinding15 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput17,
      ishikawaDiagramUXIWVN3AInput18,
      ishikawaDiagramUXIWVN3AInput19,
      ishikawaDiagramUXIWVN3AInput20,
      ishikawaDiagramUXIWVN3AInput21,
      ishikawaDiagramUXIWVN3AInput22,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding127 = Math.max(
          6,
          Math.floor(110 / (ishikawaDiagramUXIWVN3AInput21 * 0.6)),
        ),
        ishikawaDiagramUXIWVN3ABinding128 = ishikawaDiagramUXIWVN3AInput17
          .append("g")
          .attr("class", "ishikawa-head-group")
          .attr(
            "transform",
            `translate(${ishikawaDiagramUXIWVN3AInput18},${ishikawaDiagramUXIWVN3AInput19})`,
          ),
        ishikawaDiagramUXIWVN3ABinding129 = ishikawaDiagramUXIWVN3ABinding22(
          ishikawaDiagramUXIWVN3ABinding128,
          ishikawaDiagramUXIWVN3ABinding21(
            ishikawaDiagramUXIWVN3AInput20,
            ishikawaDiagramUXIWVN3ABinding127,
          ),
          0,
          0,
          "ishikawa-head-label",
          "start",
          ishikawaDiagramUXIWVN3AInput21,
        ),
        ishikawaDiagramUXIWVN3ABinding130 = ishikawaDiagramUXIWVN3ABinding129
          .node()
          .getBBox(),
        ishikawaDiagramUXIWVN3ABinding131 = Math.max(
          60,
          ishikawaDiagramUXIWVN3ABinding130.width + 6,
        ),
        ishikawaDiagramUXIWVN3ABinding132 = Math.max(
          40,
          ishikawaDiagramUXIWVN3ABinding130.height * 2 + 40,
        ),
        ishikawaDiagramUXIWVN3ABinding133 = `M 0 ${-ishikawaDiagramUXIWVN3ABinding132 / 2} L 0 ${ishikawaDiagramUXIWVN3ABinding132 / 2} Q ${ishikawaDiagramUXIWVN3ABinding131 * 2.4} 0 0 ${-ishikawaDiagramUXIWVN3ABinding132 / 2} Z`;
      if (ishikawaDiagramUXIWVN3AInput22) {
        let ishikawaDiagramUXIWVN3ABinding163 =
          ishikawaDiagramUXIWVN3AInput22.roughSvg.path(
            ishikawaDiagramUXIWVN3ABinding133,
            {
              roughness: 1.5,
              seed: ishikawaDiagramUXIWVN3AInput22.seed,
              fill: ishikawaDiagramUXIWVN3AInput22.fillColor,
              fillStyle: "hachure",
              fillWeight: 2.5,
              hachureGap: 5,
              stroke: ishikawaDiagramUXIWVN3AInput22.lineColor,
              strokeWidth: 2,
            },
          );
        ishikawaDiagramUXIWVN3ABinding128
          .insert(() => ishikawaDiagramUXIWVN3ABinding163, ":first-child")
          .attr("class", "ishikawa-head");
      } else
        ishikawaDiagramUXIWVN3ABinding128
          .insert("path", ":first-child")
          .attr("class", "ishikawa-head")
          .attr("d", ishikawaDiagramUXIWVN3ABinding133);
      ishikawaDiagramUXIWVN3ABinding129.attr(
        "transform",
        `translate(${(ishikawaDiagramUXIWVN3ABinding131 - ishikawaDiagramUXIWVN3ABinding130.width) / 2 - ishikawaDiagramUXIWVN3ABinding130.x + 3},${-ishikawaDiagramUXIWVN3ABinding130.y - ishikawaDiagramUXIWVN3ABinding130.height / 2})`,
      );
    },
    "drawHead",
  );
  ishikawaDiagramUXIWVN3ABinding16 = defineFunctionName(
    (ishikawaDiagramUXIWVN3AInput35, ishikawaDiagramUXIWVN3AInput36) => {
      let ishikawaDiagramUXIWVN3ABinding140 = [],
        ishikawaDiagramUXIWVN3ABinding141 = [],
        ishikawaDiagramUXIWVN3ABinding142 = defineFunctionName(
          (
            ishikawaDiagramUXIWVN3AInput43,
            ishikawaDiagramUXIWVN3AInput44,
            ishikawaDiagramUXIWVN3AInput45,
          ) => {
            let ishikawaDiagramUXIWVN3ABinding153 =
              ishikawaDiagramUXIWVN3AInput36 === -1
                ? [...ishikawaDiagramUXIWVN3AInput43].reverse()
                : ishikawaDiagramUXIWVN3AInput43;
            for (let ishikawaDiagramUXIWVN3ABinding158 of ishikawaDiagramUXIWVN3ABinding153) {
              let ishikawaDiagramUXIWVN3ABinding159 =
                  ishikawaDiagramUXIWVN3ABinding140.length,
                ishikawaDiagramUXIWVN3ABinding160 =
                  ishikawaDiagramUXIWVN3ABinding158.children ?? [];
              ishikawaDiagramUXIWVN3ABinding140.push({
                depth: ishikawaDiagramUXIWVN3AInput45,
                text: ishikawaDiagramUXIWVN3ABinding21(
                  ishikawaDiagramUXIWVN3ABinding158.text,
                  15,
                ),
                parentIndex: ishikawaDiagramUXIWVN3AInput44,
                childCount: ishikawaDiagramUXIWVN3ABinding160.length,
              });
              ishikawaDiagramUXIWVN3AInput45 % 2 == 0
                ? (ishikawaDiagramUXIWVN3ABinding141.push(
                    ishikawaDiagramUXIWVN3ABinding159,
                  ),
                  ishikawaDiagramUXIWVN3ABinding160.length &&
                    ishikawaDiagramUXIWVN3ABinding142(
                      ishikawaDiagramUXIWVN3ABinding160,
                      ishikawaDiagramUXIWVN3ABinding159,
                      ishikawaDiagramUXIWVN3AInput45 + 1,
                    ))
                : (ishikawaDiagramUXIWVN3ABinding160.length &&
                    ishikawaDiagramUXIWVN3ABinding142(
                      ishikawaDiagramUXIWVN3ABinding160,
                      ishikawaDiagramUXIWVN3ABinding159,
                      ishikawaDiagramUXIWVN3AInput45 + 1,
                    ),
                  ishikawaDiagramUXIWVN3ABinding141.push(
                    ishikawaDiagramUXIWVN3ABinding159,
                  ));
            }
          },
          "walk",
        );
      return (
        ishikawaDiagramUXIWVN3ABinding142(
          ishikawaDiagramUXIWVN3AInput35,
          -1,
          2,
        ),
        {
          entries: ishikawaDiagramUXIWVN3ABinding140,
          yOrder: ishikawaDiagramUXIWVN3ABinding141,
        }
      );
    },
    "flattenTree",
  );
  ishikawaDiagramUXIWVN3ABinding17 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput24,
      ishikawaDiagramUXIWVN3AInput25,
      ishikawaDiagramUXIWVN3AInput26,
      ishikawaDiagramUXIWVN3AInput27,
      ishikawaDiagramUXIWVN3AInput28,
      ishikawaDiagramUXIWVN3AInput29,
      ishikawaDiagramUXIWVN3AInput30,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding134 = ishikawaDiagramUXIWVN3AInput24
          .append("g")
          .attr("class", "ishikawa-label-group"),
        ishikawaDiagramUXIWVN3ABinding135 = ishikawaDiagramUXIWVN3ABinding22(
          ishikawaDiagramUXIWVN3ABinding134,
          ishikawaDiagramUXIWVN3AInput25,
          ishikawaDiagramUXIWVN3AInput26,
          ishikawaDiagramUXIWVN3AInput27 + 11 * ishikawaDiagramUXIWVN3AInput28,
          "ishikawa-label cause",
          "middle",
          ishikawaDiagramUXIWVN3AInput29,
        )
          .node()
          .getBBox();
      if (ishikawaDiagramUXIWVN3AInput30) {
        let ishikawaDiagramUXIWVN3ABinding154 =
          ishikawaDiagramUXIWVN3AInput30.roughSvg.rectangle(
            ishikawaDiagramUXIWVN3ABinding135.x - 20,
            ishikawaDiagramUXIWVN3ABinding135.y - 2,
            ishikawaDiagramUXIWVN3ABinding135.width + 40,
            ishikawaDiagramUXIWVN3ABinding135.height + 4,
            {
              roughness: 1.5,
              seed: ishikawaDiagramUXIWVN3AInput30.seed,
              fill: ishikawaDiagramUXIWVN3AInput30.fillColor,
              fillStyle: "hachure",
              fillWeight: 2.5,
              hachureGap: 5,
              stroke: ishikawaDiagramUXIWVN3AInput30.lineColor,
              strokeWidth: 2,
            },
          );
        ishikawaDiagramUXIWVN3ABinding134
          .insert(() => ishikawaDiagramUXIWVN3ABinding154, ":first-child")
          .attr("class", "ishikawa-label-box");
      } else
        ishikawaDiagramUXIWVN3ABinding134
          .insert("rect", ":first-child")
          .attr("class", "ishikawa-label-box")
          .attr("x", ishikawaDiagramUXIWVN3ABinding135.x - 20)
          .attr("y", ishikawaDiagramUXIWVN3ABinding135.y - 2)
          .attr("width", ishikawaDiagramUXIWVN3ABinding135.width + 40)
          .attr("height", ishikawaDiagramUXIWVN3ABinding135.height + 4);
    },
    "drawCauseLabel",
  );
  ishikawaDiagramUXIWVN3ABinding18 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput37,
      ishikawaDiagramUXIWVN3AInput38,
      ishikawaDiagramUXIWVN3AInput39,
      ishikawaDiagramUXIWVN3AInput40,
      ishikawaDiagramUXIWVN3AInput41,
      ishikawaDiagramUXIWVN3AInput42,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding143 = Math.sqrt(
        ishikawaDiagramUXIWVN3AInput40 * ishikawaDiagramUXIWVN3AInput40 +
          ishikawaDiagramUXIWVN3AInput41 * ishikawaDiagramUXIWVN3AInput41,
      );
      if (ishikawaDiagramUXIWVN3ABinding143 === 0) return;
      let ishikawaDiagramUXIWVN3ABinding144 =
          ishikawaDiagramUXIWVN3AInput40 / ishikawaDiagramUXIWVN3ABinding143,
        ishikawaDiagramUXIWVN3ABinding145 =
          ishikawaDiagramUXIWVN3AInput41 / ishikawaDiagramUXIWVN3ABinding143,
        ishikawaDiagramUXIWVN3ABinding146 =
          -ishikawaDiagramUXIWVN3ABinding145 * 6,
        ishikawaDiagramUXIWVN3ABinding147 =
          ishikawaDiagramUXIWVN3ABinding144 * 6,
        ishikawaDiagramUXIWVN3ABinding148 = ishikawaDiagramUXIWVN3AInput38,
        ishikawaDiagramUXIWVN3ABinding149 = ishikawaDiagramUXIWVN3AInput39,
        ishikawaDiagramUXIWVN3ABinding150 = `M ${ishikawaDiagramUXIWVN3ABinding148} ${ishikawaDiagramUXIWVN3ABinding149} L ${ishikawaDiagramUXIWVN3ABinding148 - ishikawaDiagramUXIWVN3ABinding144 * 6 * 2 + ishikawaDiagramUXIWVN3ABinding146} ${ishikawaDiagramUXIWVN3ABinding149 - ishikawaDiagramUXIWVN3ABinding145 * 6 * 2 + ishikawaDiagramUXIWVN3ABinding147} L ${ishikawaDiagramUXIWVN3ABinding148 - ishikawaDiagramUXIWVN3ABinding144 * 6 * 2 - ishikawaDiagramUXIWVN3ABinding146} ${ishikawaDiagramUXIWVN3ABinding149 - ishikawaDiagramUXIWVN3ABinding145 * 6 * 2 - ishikawaDiagramUXIWVN3ABinding147} Z`,
        ishikawaDiagramUXIWVN3ABinding151 =
          ishikawaDiagramUXIWVN3AInput42.roughSvg.path(
            ishikawaDiagramUXIWVN3ABinding150,
            {
              roughness: 1,
              seed: ishikawaDiagramUXIWVN3AInput42.seed,
              fill: ishikawaDiagramUXIWVN3AInput42.lineColor,
              fillStyle: "solid",
              stroke: ishikawaDiagramUXIWVN3AInput42.lineColor,
              strokeWidth: 1,
            },
          );
      ishikawaDiagramUXIWVN3AInput37.append(
        () => ishikawaDiagramUXIWVN3ABinding151,
      );
    },
    "drawArrowMarker",
  );
  ishikawaDiagramUXIWVN3ABinding19 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput8,
      ishikawaDiagramUXIWVN3AInput9,
      ishikawaDiagramUXIWVN3AInput10,
      ishikawaDiagramUXIWVN3AInput11,
      ishikawaDiagramUXIWVN3AInput12,
      ishikawaDiagramUXIWVN3AInput13,
      ishikawaDiagramUXIWVN3AInput14,
      ishikawaDiagramUXIWVN3AInput15,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding97 =
          ishikawaDiagramUXIWVN3AInput9.children ?? [],
        ishikawaDiagramUXIWVN3ABinding98 =
          ishikawaDiagramUXIWVN3AInput13 *
          (ishikawaDiagramUXIWVN3ABinding97.length ? 1 : 0.2),
        ishikawaDiagramUXIWVN3ABinding99 =
          -ishikawaDiagramUXIWVN3ABinding10 * ishikawaDiagramUXIWVN3ABinding98,
        ishikawaDiagramUXIWVN3ABinding100 =
          ishikawaDiagramUXIWVN3ABinding11 *
          ishikawaDiagramUXIWVN3ABinding98 *
          ishikawaDiagramUXIWVN3AInput12,
        ishikawaDiagramUXIWVN3ABinding101 =
          ishikawaDiagramUXIWVN3AInput10 + ishikawaDiagramUXIWVN3ABinding99,
        ishikawaDiagramUXIWVN3ABinding102 =
          ishikawaDiagramUXIWVN3AInput11 + ishikawaDiagramUXIWVN3ABinding100;
      if (
        (ishikawaDiagramUXIWVN3ABinding24(
          ishikawaDiagramUXIWVN3AInput8,
          ishikawaDiagramUXIWVN3AInput10,
          ishikawaDiagramUXIWVN3AInput11,
          ishikawaDiagramUXIWVN3ABinding101,
          ishikawaDiagramUXIWVN3ABinding102,
          "ishikawa-branch",
          ishikawaDiagramUXIWVN3AInput15,
        ),
        ishikawaDiagramUXIWVN3AInput15 &&
          ishikawaDiagramUXIWVN3ABinding18(
            ishikawaDiagramUXIWVN3AInput8,
            ishikawaDiagramUXIWVN3AInput10,
            ishikawaDiagramUXIWVN3AInput11,
            ishikawaDiagramUXIWVN3AInput10 - ishikawaDiagramUXIWVN3ABinding101,
            ishikawaDiagramUXIWVN3AInput11 - ishikawaDiagramUXIWVN3ABinding102,
            ishikawaDiagramUXIWVN3AInput15,
          ),
        ishikawaDiagramUXIWVN3ABinding17(
          ishikawaDiagramUXIWVN3AInput8,
          ishikawaDiagramUXIWVN3AInput9.text,
          ishikawaDiagramUXIWVN3ABinding101,
          ishikawaDiagramUXIWVN3ABinding102,
          ishikawaDiagramUXIWVN3AInput12,
          ishikawaDiagramUXIWVN3AInput14,
          ishikawaDiagramUXIWVN3AInput15,
        ),
        !ishikawaDiagramUXIWVN3ABinding97.length)
      )
        return;
      let { entries, yOrder } = ishikawaDiagramUXIWVN3ABinding16(
          ishikawaDiagramUXIWVN3ABinding97,
          ishikawaDiagramUXIWVN3AInput12,
        ),
        ishikawaDiagramUXIWVN3ABinding103 = entries.length,
        ishikawaDiagramUXIWVN3ABinding104 = Array(
          ishikawaDiagramUXIWVN3ABinding103,
        );
      for (let [
        ishikawaDiagramUXIWVN3ABinding190,
        ishikawaDiagramUXIWVN3ABinding191,
      ] of yOrder.entries())
        ishikawaDiagramUXIWVN3ABinding104[ishikawaDiagramUXIWVN3ABinding191] =
          ishikawaDiagramUXIWVN3AInput11 +
          ishikawaDiagramUXIWVN3ABinding100 *
            ((ishikawaDiagramUXIWVN3ABinding190 + 1) /
              (ishikawaDiagramUXIWVN3ABinding103 + 1));
      let ishikawaDiagramUXIWVN3ABinding105 = new Map();
      ishikawaDiagramUXIWVN3ABinding105.set(-1, {
        x0: ishikawaDiagramUXIWVN3AInput10,
        y0: ishikawaDiagramUXIWVN3AInput11,
        x1: ishikawaDiagramUXIWVN3ABinding101,
        y1: ishikawaDiagramUXIWVN3ABinding102,
        childCount: ishikawaDiagramUXIWVN3ABinding97.length,
        childrenDrawn: 0,
      });
      let ishikawaDiagramUXIWVN3ABinding106 = -ishikawaDiagramUXIWVN3ABinding10,
        ishikawaDiagramUXIWVN3ABinding107 =
          ishikawaDiagramUXIWVN3ABinding11 * ishikawaDiagramUXIWVN3AInput12,
        ishikawaDiagramUXIWVN3ABinding108 =
          ishikawaDiagramUXIWVN3AInput12 < 0
            ? "ishikawa-label up"
            : "ishikawa-label down";
      for (let [
        ishikawaDiagramUXIWVN3ABinding119,
        ishikawaDiagramUXIWVN3ABinding120,
      ] of entries.entries()) {
        let ishikawaDiagramUXIWVN3ABinding121 =
            ishikawaDiagramUXIWVN3ABinding104[
              ishikawaDiagramUXIWVN3ABinding119
            ],
          ishikawaDiagramUXIWVN3ABinding122 =
            ishikawaDiagramUXIWVN3ABinding105.get(
              ishikawaDiagramUXIWVN3ABinding120.parentIndex,
            ),
          ishikawaDiagramUXIWVN3ABinding123 = ishikawaDiagramUXIWVN3AInput8
            .append("g")
            .attr("class", "ishikawa-sub-group"),
          ishikawaDiagramUXIWVN3ABinding124 = 0,
          ishikawaDiagramUXIWVN3ABinding125 = 0,
          ishikawaDiagramUXIWVN3ABinding126 = 0;
        if (ishikawaDiagramUXIWVN3ABinding120.depth % 2 == 0) {
          let ishikawaDiagramUXIWVN3ABinding164 =
            ishikawaDiagramUXIWVN3ABinding122.y1 -
            ishikawaDiagramUXIWVN3ABinding122.y0;
          ishikawaDiagramUXIWVN3ABinding124 = ishikawaDiagramUXIWVN3ABinding23(
            ishikawaDiagramUXIWVN3ABinding122.x0,
            ishikawaDiagramUXIWVN3ABinding122.x1,
            ishikawaDiagramUXIWVN3ABinding164
              ? (ishikawaDiagramUXIWVN3ABinding121 -
                  ishikawaDiagramUXIWVN3ABinding122.y0) /
                  ishikawaDiagramUXIWVN3ABinding164
              : 0.5,
          );
          ishikawaDiagramUXIWVN3ABinding125 = ishikawaDiagramUXIWVN3ABinding121;
          ishikawaDiagramUXIWVN3ABinding126 =
            ishikawaDiagramUXIWVN3ABinding124 -
            (ishikawaDiagramUXIWVN3ABinding120.childCount > 0
              ? ishikawaDiagramUXIWVN3ABinding7 +
                ishikawaDiagramUXIWVN3ABinding120.childCount *
                  ishikawaDiagramUXIWVN3ABinding8
              : ishikawaDiagramUXIWVN3ABinding6);
          ishikawaDiagramUXIWVN3ABinding24(
            ishikawaDiagramUXIWVN3ABinding123,
            ishikawaDiagramUXIWVN3ABinding124,
            ishikawaDiagramUXIWVN3ABinding121,
            ishikawaDiagramUXIWVN3ABinding126,
            ishikawaDiagramUXIWVN3ABinding121,
            "ishikawa-sub-branch",
            ishikawaDiagramUXIWVN3AInput15,
          );
          ishikawaDiagramUXIWVN3AInput15 &&
            ishikawaDiagramUXIWVN3ABinding18(
              ishikawaDiagramUXIWVN3ABinding123,
              ishikawaDiagramUXIWVN3ABinding124,
              ishikawaDiagramUXIWVN3ABinding121,
              1,
              0,
              ishikawaDiagramUXIWVN3AInput15,
            );
          ishikawaDiagramUXIWVN3ABinding22(
            ishikawaDiagramUXIWVN3ABinding123,
            ishikawaDiagramUXIWVN3ABinding120.text,
            ishikawaDiagramUXIWVN3ABinding126,
            ishikawaDiagramUXIWVN3ABinding121,
            "ishikawa-label align",
            "end",
            ishikawaDiagramUXIWVN3AInput14,
          );
        } else {
          let ishikawaDiagramUXIWVN3ABinding166 =
            ishikawaDiagramUXIWVN3ABinding122.childrenDrawn++;
          ishikawaDiagramUXIWVN3ABinding124 = ishikawaDiagramUXIWVN3ABinding23(
            ishikawaDiagramUXIWVN3ABinding122.x0,
            ishikawaDiagramUXIWVN3ABinding122.x1,
            (ishikawaDiagramUXIWVN3ABinding122.childCount -
              ishikawaDiagramUXIWVN3ABinding166) /
              (ishikawaDiagramUXIWVN3ABinding122.childCount + 1),
          );
          ishikawaDiagramUXIWVN3ABinding125 =
            ishikawaDiagramUXIWVN3ABinding122.y0;
          ishikawaDiagramUXIWVN3ABinding126 =
            ishikawaDiagramUXIWVN3ABinding124 +
            ishikawaDiagramUXIWVN3ABinding106 *
              ((ishikawaDiagramUXIWVN3ABinding121 -
                ishikawaDiagramUXIWVN3ABinding125) /
                ishikawaDiagramUXIWVN3ABinding107);
          ishikawaDiagramUXIWVN3ABinding24(
            ishikawaDiagramUXIWVN3ABinding123,
            ishikawaDiagramUXIWVN3ABinding124,
            ishikawaDiagramUXIWVN3ABinding125,
            ishikawaDiagramUXIWVN3ABinding126,
            ishikawaDiagramUXIWVN3ABinding121,
            "ishikawa-sub-branch",
            ishikawaDiagramUXIWVN3AInput15,
          );
          ishikawaDiagramUXIWVN3AInput15 &&
            ishikawaDiagramUXIWVN3ABinding18(
              ishikawaDiagramUXIWVN3ABinding123,
              ishikawaDiagramUXIWVN3ABinding124,
              ishikawaDiagramUXIWVN3ABinding125,
              ishikawaDiagramUXIWVN3ABinding124 -
                ishikawaDiagramUXIWVN3ABinding126,
              ishikawaDiagramUXIWVN3ABinding125 -
                ishikawaDiagramUXIWVN3ABinding121,
              ishikawaDiagramUXIWVN3AInput15,
            );
          ishikawaDiagramUXIWVN3ABinding22(
            ishikawaDiagramUXIWVN3ABinding123,
            ishikawaDiagramUXIWVN3ABinding120.text,
            ishikawaDiagramUXIWVN3ABinding126,
            ishikawaDiagramUXIWVN3ABinding121,
            ishikawaDiagramUXIWVN3ABinding108,
            "end",
            ishikawaDiagramUXIWVN3AInput14,
          );
        }
        ishikawaDiagramUXIWVN3ABinding120.childCount > 0 &&
          ishikawaDiagramUXIWVN3ABinding105.set(
            ishikawaDiagramUXIWVN3ABinding119,
            {
              x0: ishikawaDiagramUXIWVN3ABinding124,
              y0: ishikawaDiagramUXIWVN3ABinding125,
              x1: ishikawaDiagramUXIWVN3ABinding126,
              y1: ishikawaDiagramUXIWVN3ABinding121,
              childCount: ishikawaDiagramUXIWVN3ABinding120.childCount,
              childrenDrawn: 0,
            },
          );
      }
    },
    "drawBranch",
  );
  ishikawaDiagramUXIWVN3ABinding20 = defineFunctionName(
    (ishikawaDiagramUXIWVN3AInput94) =>
      ishikawaDiagramUXIWVN3AInput94.split(/<br\s*\/?>|\n/),
    "splitLines",
  );
  ishikawaDiagramUXIWVN3ABinding21 = defineFunctionName(
    (ishikawaDiagramUXIWVN3AInput72, ishikawaDiagramUXIWVN3AInput73) => {
      if (
        ishikawaDiagramUXIWVN3AInput72.length <= ishikawaDiagramUXIWVN3AInput73
      )
        return ishikawaDiagramUXIWVN3AInput72;
      let ishikawaDiagramUXIWVN3ABinding170 = [];
      for (let ishikawaDiagramUXIWVN3ABinding180 of ishikawaDiagramUXIWVN3AInput72.split(
        /\s+/,
      )) {
        let ishikawaDiagramUXIWVN3ABinding183 =
          ishikawaDiagramUXIWVN3ABinding170.length - 1;
        ishikawaDiagramUXIWVN3ABinding183 >= 0 &&
        ishikawaDiagramUXIWVN3ABinding170[ishikawaDiagramUXIWVN3ABinding183]
          .length +
          1 +
          ishikawaDiagramUXIWVN3ABinding180.length <=
          ishikawaDiagramUXIWVN3AInput73
          ? (ishikawaDiagramUXIWVN3ABinding170[
              ishikawaDiagramUXIWVN3ABinding183
            ] += " " + ishikawaDiagramUXIWVN3ABinding180)
          : ishikawaDiagramUXIWVN3ABinding170.push(
              ishikawaDiagramUXIWVN3ABinding180,
            );
      }
      return ishikawaDiagramUXIWVN3ABinding170.join("\n");
    },
    "wrapText",
  );
  ishikawaDiagramUXIWVN3ABinding22 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput57,
      ishikawaDiagramUXIWVN3AInput58,
      ishikawaDiagramUXIWVN3AInput59,
      ishikawaDiagramUXIWVN3AInput60,
      ishikawaDiagramUXIWVN3AInput61,
      ishikawaDiagramUXIWVN3AInput62,
      ishikawaDiagramUXIWVN3AInput63,
    ) => {
      let ishikawaDiagramUXIWVN3ABinding155 = ishikawaDiagramUXIWVN3ABinding20(
          ishikawaDiagramUXIWVN3AInput58,
        ),
        ishikawaDiagramUXIWVN3ABinding156 =
          ishikawaDiagramUXIWVN3AInput63 * 1.05,
        ishikawaDiagramUXIWVN3ABinding157 = ishikawaDiagramUXIWVN3AInput57
          .append("text")
          .attr("class", ishikawaDiagramUXIWVN3AInput61)
          .attr("text-anchor", ishikawaDiagramUXIWVN3AInput62)
          .attr("x", ishikawaDiagramUXIWVN3AInput59)
          .attr(
            "y",
            ishikawaDiagramUXIWVN3AInput60 -
              ((ishikawaDiagramUXIWVN3ABinding155.length - 1) *
                ishikawaDiagramUXIWVN3ABinding156) /
                2,
          );
      for (let [
        ishikawaDiagramUXIWVN3ABinding184,
        ishikawaDiagramUXIWVN3ABinding185,
      ] of ishikawaDiagramUXIWVN3ABinding155.entries())
        ishikawaDiagramUXIWVN3ABinding157
          .append("tspan")
          .attr("x", ishikawaDiagramUXIWVN3AInput59)
          .attr(
            "dy",
            ishikawaDiagramUXIWVN3ABinding184 === 0
              ? 0
              : ishikawaDiagramUXIWVN3ABinding156,
          )
          .text(ishikawaDiagramUXIWVN3ABinding185);
      return ishikawaDiagramUXIWVN3ABinding157;
    },
    "drawMultilineText",
  );
  ishikawaDiagramUXIWVN3ABinding23 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput95,
      ishikawaDiagramUXIWVN3AInput96,
      ishikawaDiagramUXIWVN3AInput97,
    ) =>
      ishikawaDiagramUXIWVN3AInput95 +
      (ishikawaDiagramUXIWVN3AInput96 - ishikawaDiagramUXIWVN3AInput95) *
        ishikawaDiagramUXIWVN3AInput97,
    "lerp",
  );
  ishikawaDiagramUXIWVN3ABinding24 = defineFunctionName(
    (
      ishikawaDiagramUXIWVN3AInput50,
      ishikawaDiagramUXIWVN3AInput51,
      ishikawaDiagramUXIWVN3AInput52,
      ishikawaDiagramUXIWVN3AInput53,
      ishikawaDiagramUXIWVN3AInput54,
      ishikawaDiagramUXIWVN3AInput55,
      ishikawaDiagramUXIWVN3AInput56,
    ) => {
      if (ishikawaDiagramUXIWVN3AInput56) {
        let ishikawaDiagramUXIWVN3ABinding174 =
          ishikawaDiagramUXIWVN3AInput56.roughSvg.line(
            ishikawaDiagramUXIWVN3AInput51,
            ishikawaDiagramUXIWVN3AInput52,
            ishikawaDiagramUXIWVN3AInput53,
            ishikawaDiagramUXIWVN3AInput54,
            {
              roughness: 1.5,
              seed: ishikawaDiagramUXIWVN3AInput56.seed,
              stroke: ishikawaDiagramUXIWVN3AInput56.lineColor,
              strokeWidth: 2,
            },
          );
        ishikawaDiagramUXIWVN3AInput50
          .append(() => ishikawaDiagramUXIWVN3ABinding174)
          .attr("class", ishikawaDiagramUXIWVN3AInput55);
        return;
      }
      return ishikawaDiagramUXIWVN3AInput50
        .append("line")
        .attr("class", ishikawaDiagramUXIWVN3AInput55)
        .attr("x1", ishikawaDiagramUXIWVN3AInput51)
        .attr("y1", ishikawaDiagramUXIWVN3AInput52)
        .attr("x2", ishikawaDiagramUXIWVN3AInput53)
        .attr("y2", ishikawaDiagramUXIWVN3AInput54);
    },
    "drawLine",
  );
  IshikawaDiagramUXIWVN3A = {
    parser: ishikawaDiagramUXIWVN3ABinding2,
    get db() {
      return new ishikawaDiagramUXIWVN3ABinding3();
    },
    renderer: {
      draw: ishikawaDiagramUXIWVN3ABinding13,
    },
    styles: defineFunctionName(
      (ishikawaDiagramUXIWVN3AInput23) => `
.ishikawa .ishikawa-spine,
.ishikawa .ishikawa-branch,
.ishikawa .ishikawa-sub-branch {
  stroke: ${ishikawaDiagramUXIWVN3AInput23.lineColor};
  stroke-width: 2;
  fill: none;
}

.ishikawa .ishikawa-sub-branch {
  stroke-width: 1;
}

.ishikawa .ishikawa-arrow {
  fill: ${ishikawaDiagramUXIWVN3AInput23.lineColor};
}

.ishikawa .ishikawa-head {
  fill: ${ishikawaDiagramUXIWVN3AInput23.mainBkg};
  stroke: ${ishikawaDiagramUXIWVN3AInput23.lineColor};
  stroke-width: 2;
}

.ishikawa .ishikawa-label-box {
  fill: ${ishikawaDiagramUXIWVN3AInput23.mainBkg};
  stroke: ${ishikawaDiagramUXIWVN3AInput23.lineColor};
  stroke-width: 2;
}

.ishikawa text {
  font-family: ${ishikawaDiagramUXIWVN3AInput23.fontFamily};
  font-size: ${ishikawaDiagramUXIWVN3AInput23.fontSize};
  fill: ${ishikawaDiagramUXIWVN3AInput23.textColor};
}

.ishikawa .ishikawa-head-label {
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 14px;
}

.ishikawa .ishikawa-label {
  text-anchor: end;
}

.ishikawa .ishikawa-label.cause {
  text-anchor: middle;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.align {
  text-anchor: end;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.up {
  dominant-baseline: baseline;
}

.ishikawa .ishikawa-label.down {
  dominant-baseline: hanging;
}
`,
      "getStyles",
    ),
  };
})();
export { IshikawaDiagramUXIWVN3A as diagram };
