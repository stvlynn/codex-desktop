// Restored from ref/webview/assets/timeline-definition-IT6M3QCI-CbhzipbM.js
// Mermaid timeline diagram definition (db + renderer + parser).
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
import { arc } from "../../vendor/d3-shape-arc";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
  defineEnumerableGetters,
} from "../../utils/dayjs-core-alt-dup";
import { c, d, p, t } from "../../vendor/khroma";
import {
  K as _chunkABZYJK2DK,
  a,
  b,
  K,
  o,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
function timelineDefinitionIT6M3QCIHelper1(
  timelineDefinitionIT6M3QCIInput41,
  timelineDefinitionIT6M3QCIInput42,
) {
  timelineDefinitionIT6M3QCIInput41.each(function () {
    var timelineDefinitionIT6M3QCIBinding134 = select(this),
      timelineDefinitionIT6M3QCIBinding135 =
        timelineDefinitionIT6M3QCIBinding134
          .text()
          .split(/(\s+|<br>)/)
          .reverse(),
      timelineDefinitionIT6M3QCIBinding136,
      timelineDefinitionIT6M3QCIBinding137 = [],
      timelineDefinitionIT6M3QCIBinding139 =
        timelineDefinitionIT6M3QCIBinding134.attr("y"),
      timelineDefinitionIT6M3QCIBinding140 = parseFloat(
        timelineDefinitionIT6M3QCIBinding134.attr("dy"),
      ),
      timelineDefinitionIT6M3QCIBinding141 =
        timelineDefinitionIT6M3QCIBinding134
          .text(null)
          .append("tspan")
          .attr("x", 0)
          .attr("y", timelineDefinitionIT6M3QCIBinding139)
          .attr("dy", timelineDefinitionIT6M3QCIBinding140 + "em");
    for (
      let timelineDefinitionIT6M3QCIBinding166 = 0;
      timelineDefinitionIT6M3QCIBinding166 <
      timelineDefinitionIT6M3QCIBinding135.length;
      timelineDefinitionIT6M3QCIBinding166++
    ) {
      timelineDefinitionIT6M3QCIBinding136 =
        timelineDefinitionIT6M3QCIBinding135[
          timelineDefinitionIT6M3QCIBinding135.length -
            1 -
            timelineDefinitionIT6M3QCIBinding166
        ];
      timelineDefinitionIT6M3QCIBinding137.push(
        timelineDefinitionIT6M3QCIBinding136,
      );
      timelineDefinitionIT6M3QCIBinding141.text(
        timelineDefinitionIT6M3QCIBinding137.join(" ").trim(),
      );
      (timelineDefinitionIT6M3QCIBinding141.node().getComputedTextLength() >
        timelineDefinitionIT6M3QCIInput42 ||
        timelineDefinitionIT6M3QCIBinding136 === "<br>") &&
        (timelineDefinitionIT6M3QCIBinding137.pop(),
        timelineDefinitionIT6M3QCIBinding141.text(
          timelineDefinitionIT6M3QCIBinding137.join(" ").trim(),
        ),
        (timelineDefinitionIT6M3QCIBinding137 =
          timelineDefinitionIT6M3QCIBinding136 === "<br>"
            ? [""]
            : [timelineDefinitionIT6M3QCIBinding136]),
        (timelineDefinitionIT6M3QCIBinding141 =
          timelineDefinitionIT6M3QCIBinding134
            .append("tspan")
            .attr("x", 0)
            .attr("y", timelineDefinitionIT6M3QCIBinding139)
            .attr("dy", "1.1em")
            .text(timelineDefinitionIT6M3QCIBinding136)));
    }
  });
}
var timelineDefinitionIT6M3QCIBinding1,
  timelineDefinitionIT6M3QCIBinding2,
  timelineDefinitionIT6M3QCIBinding3,
  timelineDefinitionIT6M3QCIBinding4,
  timelineDefinitionIT6M3QCIBinding5,
  timelineDefinitionIT6M3QCIBinding6,
  timelineDefinitionIT6M3QCIBinding7,
  timelineDefinitionIT6M3QCIBinding8,
  timelineDefinitionIT6M3QCIBinding9,
  timelineDefinitionIT6M3QCIBinding10,
  timelineDefinitionIT6M3QCIBinding11,
  timelineDefinitionIT6M3QCIBinding12,
  timelineDefinitionIT6M3QCIBinding13,
  timelineDefinitionIT6M3QCIBinding14,
  timelineDefinitionIT6M3QCIBinding15,
  timelineDefinitionIT6M3QCIBinding16,
  timelineDefinitionIT6M3QCIBinding17,
  timelineDefinitionIT6M3QCIBinding18,
  timelineDefinitionIT6M3QCIBinding19,
  timelineDefinitionIT6M3QCIBinding20,
  timelineDefinitionIT6M3QCIBinding21,
  timelineDefinitionIT6M3QCIBinding22,
  timelineDefinitionIT6M3QCIBinding23,
  timelineDefinitionIT6M3QCIBinding24,
  timelineDefinitionIT6M3QCIBinding25,
  timelineDefinitionIT6M3QCIBinding26,
  timelineDefinitionIT6M3QCIBinding27,
  timelineDefinitionIT6M3QCIBinding28,
  timelineDefinitionIT6M3QCIBinding29,
  timelineDefinitionIT6M3QCIBinding30,
  timelineDefinitionIT6M3QCIBinding31,
  timelineDefinitionIT6M3QCIBinding32,
  timelineDefinitionIT6M3QCIBinding33,
  timelineDefinitionIT6M3QCIBinding34,
  timelineDefinitionIT6M3QCIBinding35,
  timelineDefinitionIT6M3QCIBinding36,
  timelineDefinitionIT6M3QCIBinding37,
  $,
  timelineDefinitionIT6M3QCIBinding38,
  timelineDefinitionIT6M3QCIBinding39,
  timelineDefinitionIT6M3QCIBinding40,
  TimelineDefinitionIT6M3QCI;
esmInit(() => {
  _chunkABZYJK2DK();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  t();
  timelineDefinitionIT6M3QCIBinding1 = (function () {
    var timelineDefinitionIT6M3QCIBinding41 = defineFunctionName(function (
        timelineDefinitionIT6M3QCIInput115,
        timelineDefinitionIT6M3QCIInput116,
        timelineDefinitionIT6M3QCIInput117,
        timelineDefinitionIT6M3QCIInput118,
      ) {
        for (
          timelineDefinitionIT6M3QCIInput117 ||= {},
            timelineDefinitionIT6M3QCIInput118 =
              timelineDefinitionIT6M3QCIInput115.length;
          timelineDefinitionIT6M3QCIInput118--;
          timelineDefinitionIT6M3QCIInput117[
            timelineDefinitionIT6M3QCIInput115[
              timelineDefinitionIT6M3QCIInput118
            ]
          ] = timelineDefinitionIT6M3QCIInput116
        );
        return timelineDefinitionIT6M3QCIInput117;
      }, "o"),
      timelineDefinitionIT6M3QCIBinding42 = [
        6, 8, 10, 11, 12, 14, 16, 17, 20, 21,
      ],
      timelineDefinitionIT6M3QCIBinding43 = [1, 9],
      timelineDefinitionIT6M3QCIBinding44 = [1, 10],
      timelineDefinitionIT6M3QCIBinding45 = [1, 11],
      timelineDefinitionIT6M3QCIBinding46 = [1, 12],
      timelineDefinitionIT6M3QCIBinding47 = [1, 13],
      timelineDefinitionIT6M3QCIBinding48 = [1, 16],
      timelineDefinitionIT6M3QCIBinding49 = [1, 17],
      timelineDefinitionIT6M3QCIBinding50 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          timeline: 4,
          document: 5,
          EOF: 6,
          line: 7,
          SPACE: 8,
          statement: 9,
          NEWLINE: 10,
          title: 11,
          acc_title: 12,
          acc_title_value: 13,
          acc_descr: 14,
          acc_descr_value: 15,
          acc_descr_multiline_value: 16,
          section: 17,
          period_statement: 18,
          event_statement: 19,
          period: 20,
          event: 21,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "timeline",
          6: "EOF",
          8: "SPACE",
          10: "NEWLINE",
          11: "title",
          12: "acc_title",
          13: "acc_title_value",
          14: "acc_descr",
          15: "acc_descr_value",
          16: "acc_descr_multiline_value",
          17: "section",
          20: "period",
          21: "event",
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
          [9, 1],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [18, 1],
          [19, 1],
        ],
        performAction: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput10,
          timelineDefinitionIT6M3QCIInput11,
          timelineDefinitionIT6M3QCIInput12,
          timelineDefinitionIT6M3QCIInput13,
          timelineDefinitionIT6M3QCIInput14,
          timelineDefinitionIT6M3QCIInput15,
          timelineDefinitionIT6M3QCIInput16,
        ) {
          var timelineDefinitionIT6M3QCIBinding105 =
            timelineDefinitionIT6M3QCIInput15.length - 1;
          switch (timelineDefinitionIT6M3QCIInput14) {
            case 1:
              return timelineDefinitionIT6M3QCIInput15[
                timelineDefinitionIT6M3QCIBinding105 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              timelineDefinitionIT6M3QCIInput15[
                timelineDefinitionIT6M3QCIBinding105 - 1
              ].push(
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ],
              );
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105 - 1
                ];
              break;
            case 4:
            case 5:
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              timelineDefinitionIT6M3QCIInput13
                .getCommonDb()
                .setDiagramTitle(
                  timelineDefinitionIT6M3QCIInput15[
                    timelineDefinitionIT6M3QCIBinding105
                  ].substr(6),
                );
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].substr(6);
              break;
            case 9:
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].trim();
              timelineDefinitionIT6M3QCIInput13
                .getCommonDb()
                .setAccTitle(this.$);
              break;
            case 10:
            case 11:
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].trim();
              timelineDefinitionIT6M3QCIInput13
                .getCommonDb()
                .setAccDescription(this.$);
              break;
            case 12:
              timelineDefinitionIT6M3QCIInput13.addSection(
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].substr(8),
              );
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].substr(8);
              break;
            case 15:
              timelineDefinitionIT6M3QCIInput13.addTask(
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ],
                0,
                "",
              );
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ];
              break;
            case 16:
              timelineDefinitionIT6M3QCIInput13.addEvent(
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
                ].substr(2),
              );
              this.$ =
                timelineDefinitionIT6M3QCIInput15[
                  timelineDefinitionIT6M3QCIBinding105
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
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 2],
            {
              5: 3,
            },
          ),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: timelineDefinitionIT6M3QCIBinding43,
            12: timelineDefinitionIT6M3QCIBinding44,
            14: timelineDefinitionIT6M3QCIBinding45,
            16: timelineDefinitionIT6M3QCIBinding46,
            17: timelineDefinitionIT6M3QCIBinding47,
            18: 14,
            19: 15,
            20: timelineDefinitionIT6M3QCIBinding48,
            21: timelineDefinitionIT6M3QCIBinding49,
          },
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 7],
            {
              1: [2, 1],
            },
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 3],
          ),
          {
            9: 18,
            11: timelineDefinitionIT6M3QCIBinding43,
            12: timelineDefinitionIT6M3QCIBinding44,
            14: timelineDefinitionIT6M3QCIBinding45,
            16: timelineDefinitionIT6M3QCIBinding46,
            17: timelineDefinitionIT6M3QCIBinding47,
            18: 14,
            19: 15,
            20: timelineDefinitionIT6M3QCIBinding48,
            21: timelineDefinitionIT6M3QCIBinding49,
          },
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 5],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 6],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 8],
          ),
          {
            13: [1, 19],
          },
          {
            15: [1, 20],
          },
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 11],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 12],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 13],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 14],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 15],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 16],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 4],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 9],
          ),
          timelineDefinitionIT6M3QCIBinding41(
            timelineDefinitionIT6M3QCIBinding42,
            [2, 10],
          ),
        ],
        defaultActions: {},
        parseError: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput109,
          timelineDefinitionIT6M3QCIInput110,
        ) {
          if (timelineDefinitionIT6M3QCIInput110.recoverable)
            this.trace(timelineDefinitionIT6M3QCIInput109);
          else {
            var timelineDefinitionIT6M3QCIBinding191 = Error(
              timelineDefinitionIT6M3QCIInput109,
            );
            throw (
              (timelineDefinitionIT6M3QCIBinding191.hash =
                timelineDefinitionIT6M3QCIInput110),
              timelineDefinitionIT6M3QCIBinding191
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (timelineDefinitionIT6M3QCIInput1) {
          var timelineDefinitionIT6M3QCIBinding51 = this,
            timelineDefinitionIT6M3QCIBinding52 = [0],
            timelineDefinitionIT6M3QCIBinding53 = [],
            timelineDefinitionIT6M3QCIBinding54 = [null],
            timelineDefinitionIT6M3QCIBinding55 = [],
            timelineDefinitionIT6M3QCIBinding56 = this.table,
            timelineDefinitionIT6M3QCIBinding57 = "",
            timelineDefinitionIT6M3QCIBinding58 = 0,
            timelineDefinitionIT6M3QCIBinding59 = 0,
            timelineDefinitionIT6M3QCIBinding60 = 0,
            timelineDefinitionIT6M3QCIBinding63 =
              timelineDefinitionIT6M3QCIBinding55.slice.call(arguments, 1),
            timelineDefinitionIT6M3QCIBinding64 = Object.create(this.lexer),
            timelineDefinitionIT6M3QCIBinding65 = {
              yy: {},
            };
          for (var timelineDefinitionIT6M3QCIBinding66 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              timelineDefinitionIT6M3QCIBinding66,
            ) &&
              (timelineDefinitionIT6M3QCIBinding65.yy[
                timelineDefinitionIT6M3QCIBinding66
              ] = this.yy[timelineDefinitionIT6M3QCIBinding66]);
          timelineDefinitionIT6M3QCIBinding64.setInput(
            timelineDefinitionIT6M3QCIInput1,
            timelineDefinitionIT6M3QCIBinding65.yy,
          );
          timelineDefinitionIT6M3QCIBinding65.yy.lexer =
            timelineDefinitionIT6M3QCIBinding64;
          timelineDefinitionIT6M3QCIBinding65.yy.parser = this;
          timelineDefinitionIT6M3QCIBinding64.yylloc === undefined &&
            (timelineDefinitionIT6M3QCIBinding64.yylloc = {});
          var timelineDefinitionIT6M3QCIBinding67 =
            timelineDefinitionIT6M3QCIBinding64.yylloc;
          timelineDefinitionIT6M3QCIBinding55.push(
            timelineDefinitionIT6M3QCIBinding67,
          );
          var timelineDefinitionIT6M3QCIBinding68 =
            timelineDefinitionIT6M3QCIBinding64.options &&
            timelineDefinitionIT6M3QCIBinding64.options.ranges;
          typeof timelineDefinitionIT6M3QCIBinding65.yy.parseError == "function"
            ? (this.parseError =
                timelineDefinitionIT6M3QCIBinding65.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function timelineDefinitionIT6M3QCIHelper3(
            timelineDefinitionIT6M3QCIInput119,
          ) {
            timelineDefinitionIT6M3QCIBinding52.length -=
              2 * timelineDefinitionIT6M3QCIInput119;
            timelineDefinitionIT6M3QCIBinding54.length -=
              timelineDefinitionIT6M3QCIInput119;
            timelineDefinitionIT6M3QCIBinding55.length -=
              timelineDefinitionIT6M3QCIInput119;
          }
          defineFunctionName(timelineDefinitionIT6M3QCIHelper3, "popStack");
          function timelineDefinitionIT6M3QCIHelper4() {
            var timelineDefinitionIT6M3QCIBinding181 =
              timelineDefinitionIT6M3QCIBinding53.pop() ||
              timelineDefinitionIT6M3QCIBinding64.lex() ||
              1;
            return (
              typeof timelineDefinitionIT6M3QCIBinding181 != "number" &&
                (timelineDefinitionIT6M3QCIBinding181 instanceof Array &&
                  ((timelineDefinitionIT6M3QCIBinding53 =
                    timelineDefinitionIT6M3QCIBinding181),
                  (timelineDefinitionIT6M3QCIBinding181 =
                    timelineDefinitionIT6M3QCIBinding53.pop())),
                (timelineDefinitionIT6M3QCIBinding181 =
                  timelineDefinitionIT6M3QCIBinding51.symbols_[
                    timelineDefinitionIT6M3QCIBinding181
                  ] || timelineDefinitionIT6M3QCIBinding181)),
              timelineDefinitionIT6M3QCIBinding181
            );
          }
          defineFunctionName(timelineDefinitionIT6M3QCIHelper4, "lex");
          for (
            var timelineDefinitionIT6M3QCIBinding69,
              timelineDefinitionIT6M3QCIBinding70,
              timelineDefinitionIT6M3QCIBinding71,
              timelineDefinitionIT6M3QCIBinding72,
              timelineDefinitionIT6M3QCIBinding73,
              timelineDefinitionIT6M3QCIBinding74 = {},
              timelineDefinitionIT6M3QCIBinding75,
              timelineDefinitionIT6M3QCIBinding76,
              timelineDefinitionIT6M3QCIBinding77,
              timelineDefinitionIT6M3QCIBinding78;
            ;
          ) {
            if (
              ((timelineDefinitionIT6M3QCIBinding71 =
                timelineDefinitionIT6M3QCIBinding52[
                  timelineDefinitionIT6M3QCIBinding52.length - 1
                ]),
              this.defaultActions[timelineDefinitionIT6M3QCIBinding71]
                ? (timelineDefinitionIT6M3QCIBinding72 =
                    this.defaultActions[timelineDefinitionIT6M3QCIBinding71])
                : ((timelineDefinitionIT6M3QCIBinding69 ??=
                    timelineDefinitionIT6M3QCIHelper4()),
                  (timelineDefinitionIT6M3QCIBinding72 =
                    timelineDefinitionIT6M3QCIBinding56[
                      timelineDefinitionIT6M3QCIBinding71
                    ] &&
                    timelineDefinitionIT6M3QCIBinding56[
                      timelineDefinitionIT6M3QCIBinding71
                    ][timelineDefinitionIT6M3QCIBinding69])),
              timelineDefinitionIT6M3QCIBinding72 === undefined ||
                !timelineDefinitionIT6M3QCIBinding72.length ||
                !timelineDefinitionIT6M3QCIBinding72[0])
            ) {
              var timelineDefinitionIT6M3QCIBinding79 = "";
              for (timelineDefinitionIT6M3QCIBinding75 in ((timelineDefinitionIT6M3QCIBinding78 =
                []),
              timelineDefinitionIT6M3QCIBinding56[
                timelineDefinitionIT6M3QCIBinding71
              ]))
                this.terminals_[timelineDefinitionIT6M3QCIBinding75] &&
                  timelineDefinitionIT6M3QCIBinding75 > 2 &&
                  timelineDefinitionIT6M3QCIBinding78.push(
                    "'" +
                      this.terminals_[timelineDefinitionIT6M3QCIBinding75] +
                      "'",
                  );
              timelineDefinitionIT6M3QCIBinding79 =
                timelineDefinitionIT6M3QCIBinding64.showPosition
                  ? "Parse error on line " +
                    (timelineDefinitionIT6M3QCIBinding58 + 1) +
                    ":\n" +
                    timelineDefinitionIT6M3QCIBinding64.showPosition() +
                    "\nExpecting " +
                    timelineDefinitionIT6M3QCIBinding78.join(", ") +
                    ", got '" +
                    (this.terminals_[timelineDefinitionIT6M3QCIBinding69] ||
                      timelineDefinitionIT6M3QCIBinding69) +
                    "'"
                  : "Parse error on line " +
                    (timelineDefinitionIT6M3QCIBinding58 + 1) +
                    ": Unexpected " +
                    (timelineDefinitionIT6M3QCIBinding69 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[timelineDefinitionIT6M3QCIBinding69] ||
                          timelineDefinitionIT6M3QCIBinding69) +
                        "'");
              this.parseError(timelineDefinitionIT6M3QCIBinding79, {
                text: timelineDefinitionIT6M3QCIBinding64.match,
                token:
                  this.terminals_[timelineDefinitionIT6M3QCIBinding69] ||
                  timelineDefinitionIT6M3QCIBinding69,
                line: timelineDefinitionIT6M3QCIBinding64.yylineno,
                loc: timelineDefinitionIT6M3QCIBinding67,
                expected: timelineDefinitionIT6M3QCIBinding78,
              });
            }
            if (
              timelineDefinitionIT6M3QCIBinding72[0] instanceof Array &&
              timelineDefinitionIT6M3QCIBinding72.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  timelineDefinitionIT6M3QCIBinding71 +
                  ", token: " +
                  timelineDefinitionIT6M3QCIBinding69,
              );
            switch (timelineDefinitionIT6M3QCIBinding72[0]) {
              case 1:
                timelineDefinitionIT6M3QCIBinding52.push(
                  timelineDefinitionIT6M3QCIBinding69,
                );
                timelineDefinitionIT6M3QCIBinding54.push(
                  timelineDefinitionIT6M3QCIBinding64.yytext,
                );
                timelineDefinitionIT6M3QCIBinding55.push(
                  timelineDefinitionIT6M3QCIBinding64.yylloc,
                );
                timelineDefinitionIT6M3QCIBinding52.push(
                  timelineDefinitionIT6M3QCIBinding72[1],
                );
                timelineDefinitionIT6M3QCIBinding69 = null;
                timelineDefinitionIT6M3QCIBinding70
                  ? ((timelineDefinitionIT6M3QCIBinding69 =
                      timelineDefinitionIT6M3QCIBinding70),
                    (timelineDefinitionIT6M3QCIBinding70 = null))
                  : ((timelineDefinitionIT6M3QCIBinding59 =
                      timelineDefinitionIT6M3QCIBinding64.yyleng),
                    (timelineDefinitionIT6M3QCIBinding57 =
                      timelineDefinitionIT6M3QCIBinding64.yytext),
                    (timelineDefinitionIT6M3QCIBinding58 =
                      timelineDefinitionIT6M3QCIBinding64.yylineno),
                    (timelineDefinitionIT6M3QCIBinding67 =
                      timelineDefinitionIT6M3QCIBinding64.yylloc),
                    timelineDefinitionIT6M3QCIBinding60 > 0 &&
                      timelineDefinitionIT6M3QCIBinding60--);
                break;
              case 2:
                if (
                  ((timelineDefinitionIT6M3QCIBinding76 =
                    this.productions_[
                      timelineDefinitionIT6M3QCIBinding72[1]
                    ][1]),
                  (timelineDefinitionIT6M3QCIBinding74.$ =
                    timelineDefinitionIT6M3QCIBinding54[
                      timelineDefinitionIT6M3QCIBinding54.length -
                        timelineDefinitionIT6M3QCIBinding76
                    ]),
                  (timelineDefinitionIT6M3QCIBinding74._$ = {
                    first_line:
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length -
                          (timelineDefinitionIT6M3QCIBinding76 || 1)
                      ].first_line,
                    last_line:
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length - 1
                      ].last_line,
                    first_column:
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length -
                          (timelineDefinitionIT6M3QCIBinding76 || 1)
                      ].first_column,
                    last_column:
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length - 1
                      ].last_column,
                  }),
                  timelineDefinitionIT6M3QCIBinding68 &&
                    (timelineDefinitionIT6M3QCIBinding74._$.range = [
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length -
                          (timelineDefinitionIT6M3QCIBinding76 || 1)
                      ].range[0],
                      timelineDefinitionIT6M3QCIBinding55[
                        timelineDefinitionIT6M3QCIBinding55.length - 1
                      ].range[1],
                    ]),
                  (timelineDefinitionIT6M3QCIBinding73 =
                    this.performAction.apply(
                      timelineDefinitionIT6M3QCIBinding74,
                      [
                        timelineDefinitionIT6M3QCIBinding57,
                        timelineDefinitionIT6M3QCIBinding59,
                        timelineDefinitionIT6M3QCIBinding58,
                        timelineDefinitionIT6M3QCIBinding65.yy,
                        timelineDefinitionIT6M3QCIBinding72[1],
                        timelineDefinitionIT6M3QCIBinding54,
                        timelineDefinitionIT6M3QCIBinding55,
                      ].concat(timelineDefinitionIT6M3QCIBinding63),
                    )),
                  timelineDefinitionIT6M3QCIBinding73 !== undefined)
                )
                  return timelineDefinitionIT6M3QCIBinding73;
                timelineDefinitionIT6M3QCIBinding76 &&
                  ((timelineDefinitionIT6M3QCIBinding52 =
                    timelineDefinitionIT6M3QCIBinding52.slice(
                      0,
                      -1 * timelineDefinitionIT6M3QCIBinding76 * 2,
                    )),
                  (timelineDefinitionIT6M3QCIBinding54 =
                    timelineDefinitionIT6M3QCIBinding54.slice(
                      0,
                      -1 * timelineDefinitionIT6M3QCIBinding76,
                    )),
                  (timelineDefinitionIT6M3QCIBinding55 =
                    timelineDefinitionIT6M3QCIBinding55.slice(
                      0,
                      -1 * timelineDefinitionIT6M3QCIBinding76,
                    )));
                timelineDefinitionIT6M3QCIBinding52.push(
                  this.productions_[timelineDefinitionIT6M3QCIBinding72[1]][0],
                );
                timelineDefinitionIT6M3QCIBinding54.push(
                  timelineDefinitionIT6M3QCIBinding74.$,
                );
                timelineDefinitionIT6M3QCIBinding55.push(
                  timelineDefinitionIT6M3QCIBinding74._$,
                );
                timelineDefinitionIT6M3QCIBinding77 =
                  timelineDefinitionIT6M3QCIBinding56[
                    timelineDefinitionIT6M3QCIBinding52[
                      timelineDefinitionIT6M3QCIBinding52.length - 2
                    ]
                  ][
                    timelineDefinitionIT6M3QCIBinding52[
                      timelineDefinitionIT6M3QCIBinding52.length - 1
                    ]
                  ];
                timelineDefinitionIT6M3QCIBinding52.push(
                  timelineDefinitionIT6M3QCIBinding77,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    timelineDefinitionIT6M3QCIBinding50.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput112,
          timelineDefinitionIT6M3QCIInput113,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              timelineDefinitionIT6M3QCIInput112,
              timelineDefinitionIT6M3QCIInput113,
            );
          else throw Error(timelineDefinitionIT6M3QCIInput112);
        }, "parseError"),
        setInput: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput60,
          timelineDefinitionIT6M3QCIInput61,
        ) {
          return (
            (this.yy = timelineDefinitionIT6M3QCIInput61 || this.yy || {}),
            (this._input = timelineDefinitionIT6M3QCIInput60),
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
          var timelineDefinitionIT6M3QCIBinding162 = this._input[0];
          return (
            (this.yytext += timelineDefinitionIT6M3QCIBinding162),
            this.yyleng++,
            this.offset++,
            (this.match += timelineDefinitionIT6M3QCIBinding162),
            (this.matched += timelineDefinitionIT6M3QCIBinding162),
            timelineDefinitionIT6M3QCIBinding162.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            timelineDefinitionIT6M3QCIBinding162
          );
        }, "input"),
        unput: defineFunctionName(function (timelineDefinitionIT6M3QCIInput17) {
          var timelineDefinitionIT6M3QCIBinding112 =
              timelineDefinitionIT6M3QCIInput17.length,
            timelineDefinitionIT6M3QCIBinding113 =
              timelineDefinitionIT6M3QCIInput17.split(/(?:\r\n?|\n)/g);
          this._input = timelineDefinitionIT6M3QCIInput17 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - timelineDefinitionIT6M3QCIBinding112,
          );
          this.offset -= timelineDefinitionIT6M3QCIBinding112;
          var timelineDefinitionIT6M3QCIBinding114 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          timelineDefinitionIT6M3QCIBinding113.length - 1 &&
            (this.yylineno -= timelineDefinitionIT6M3QCIBinding113.length - 1);
          var timelineDefinitionIT6M3QCIBinding115 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: timelineDefinitionIT6M3QCIBinding113
                ? (timelineDefinitionIT6M3QCIBinding113.length ===
                  timelineDefinitionIT6M3QCIBinding114.length
                    ? this.yylloc.first_column
                    : 0) +
                  timelineDefinitionIT6M3QCIBinding114[
                    timelineDefinitionIT6M3QCIBinding114.length -
                      timelineDefinitionIT6M3QCIBinding113.length
                  ].length -
                  timelineDefinitionIT6M3QCIBinding113[0].length
                : this.yylloc.first_column -
                  timelineDefinitionIT6M3QCIBinding112,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                timelineDefinitionIT6M3QCIBinding115[0],
                timelineDefinitionIT6M3QCIBinding115[0] +
                  this.yyleng -
                  timelineDefinitionIT6M3QCIBinding112,
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
        less: defineFunctionName(function (timelineDefinitionIT6M3QCIInput123) {
          this.unput(this.match.slice(timelineDefinitionIT6M3QCIInput123));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var timelineDefinitionIT6M3QCIBinding184 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (timelineDefinitionIT6M3QCIBinding184.length > 20 ? "..." : "") +
            timelineDefinitionIT6M3QCIBinding184.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var timelineDefinitionIT6M3QCIBinding180 = this.match;
          return (
            timelineDefinitionIT6M3QCIBinding180.length < 20 &&
              (timelineDefinitionIT6M3QCIBinding180 += this._input.substr(
                0,
                20 - timelineDefinitionIT6M3QCIBinding180.length,
              )),
            (
              timelineDefinitionIT6M3QCIBinding180.substr(0, 20) +
              (timelineDefinitionIT6M3QCIBinding180.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var timelineDefinitionIT6M3QCIBinding185 = this.pastInput(),
            timelineDefinitionIT6M3QCIBinding186 = Array(
              timelineDefinitionIT6M3QCIBinding185.length + 1,
            ).join("-");
          return (
            timelineDefinitionIT6M3QCIBinding185 +
            this.upcomingInput() +
            "\n" +
            timelineDefinitionIT6M3QCIBinding186 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput6,
          timelineDefinitionIT6M3QCIInput7,
        ) {
          var timelineDefinitionIT6M3QCIBinding99,
            timelineDefinitionIT6M3QCIBinding100,
            timelineDefinitionIT6M3QCIBinding101;
          if (
            (this.options.backtrack_lexer &&
              ((timelineDefinitionIT6M3QCIBinding101 = {
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
                (timelineDefinitionIT6M3QCIBinding101.yylloc.range =
                  this.yylloc.range.slice(0))),
            (timelineDefinitionIT6M3QCIBinding100 =
              timelineDefinitionIT6M3QCIInput6[0].match(/(?:\r\n?|\n).*/g)),
            timelineDefinitionIT6M3QCIBinding100 &&
              (this.yylineno += timelineDefinitionIT6M3QCIBinding100.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: timelineDefinitionIT6M3QCIBinding100
                ? timelineDefinitionIT6M3QCIBinding100[
                    timelineDefinitionIT6M3QCIBinding100.length - 1
                  ].length -
                  timelineDefinitionIT6M3QCIBinding100[
                    timelineDefinitionIT6M3QCIBinding100.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  timelineDefinitionIT6M3QCIInput6[0].length,
            }),
            (this.yytext += timelineDefinitionIT6M3QCIInput6[0]),
            (this.match += timelineDefinitionIT6M3QCIInput6[0]),
            (this.matches = timelineDefinitionIT6M3QCIInput6),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              timelineDefinitionIT6M3QCIInput6[0].length,
            )),
            (this.matched += timelineDefinitionIT6M3QCIInput6[0]),
            (timelineDefinitionIT6M3QCIBinding99 = this.performAction.call(
              this,
              this.yy,
              this,
              timelineDefinitionIT6M3QCIInput7,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            timelineDefinitionIT6M3QCIBinding99)
          )
            return timelineDefinitionIT6M3QCIBinding99;
          if (this._backtrack) {
            for (var timelineDefinitionIT6M3QCIBinding102 in timelineDefinitionIT6M3QCIBinding101)
              this[timelineDefinitionIT6M3QCIBinding102] =
                timelineDefinitionIT6M3QCIBinding101[
                  timelineDefinitionIT6M3QCIBinding102
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var timelineDefinitionIT6M3QCIBinding106,
            timelineDefinitionIT6M3QCIBinding107,
            timelineDefinitionIT6M3QCIBinding108,
            timelineDefinitionIT6M3QCIBinding109;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var timelineDefinitionIT6M3QCIBinding110 = this._currentRules(),
              timelineDefinitionIT6M3QCIBinding111 = 0;
            timelineDefinitionIT6M3QCIBinding111 <
            timelineDefinitionIT6M3QCIBinding110.length;
            timelineDefinitionIT6M3QCIBinding111++
          )
            if (
              ((timelineDefinitionIT6M3QCIBinding108 = this._input.match(
                this.rules[
                  timelineDefinitionIT6M3QCIBinding110[
                    timelineDefinitionIT6M3QCIBinding111
                  ]
                ],
              )),
              timelineDefinitionIT6M3QCIBinding108 &&
                (!timelineDefinitionIT6M3QCIBinding107 ||
                  timelineDefinitionIT6M3QCIBinding108[0].length >
                    timelineDefinitionIT6M3QCIBinding107[0].length))
            ) {
              if (
                ((timelineDefinitionIT6M3QCIBinding107 =
                  timelineDefinitionIT6M3QCIBinding108),
                (timelineDefinitionIT6M3QCIBinding109 =
                  timelineDefinitionIT6M3QCIBinding111),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((timelineDefinitionIT6M3QCIBinding106 = this.test_match(
                    timelineDefinitionIT6M3QCIBinding108,
                    timelineDefinitionIT6M3QCIBinding110[
                      timelineDefinitionIT6M3QCIBinding111
                    ],
                  )),
                  timelineDefinitionIT6M3QCIBinding106 !== false)
                )
                  return timelineDefinitionIT6M3QCIBinding106;
                if (this._backtrack) {
                  timelineDefinitionIT6M3QCIBinding107 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return timelineDefinitionIT6M3QCIBinding107
            ? ((timelineDefinitionIT6M3QCIBinding106 = this.test_match(
                timelineDefinitionIT6M3QCIBinding107,
                timelineDefinitionIT6M3QCIBinding110[
                  timelineDefinitionIT6M3QCIBinding109
                ],
              )),
              timelineDefinitionIT6M3QCIBinding106 === false
                ? false
                : timelineDefinitionIT6M3QCIBinding106)
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
        begin: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput124,
        ) {
          this.conditionStack.push(timelineDefinitionIT6M3QCIInput124);
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
          timelineDefinitionIT6M3QCIInput108,
        ) {
          return (
            (timelineDefinitionIT6M3QCIInput108 =
              this.conditionStack.length -
              1 -
              Math.abs(timelineDefinitionIT6M3QCIInput108 || 0)),
            timelineDefinitionIT6M3QCIInput108 >= 0
              ? this.conditionStack[timelineDefinitionIT6M3QCIInput108]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput126,
        ) {
          this.begin(timelineDefinitionIT6M3QCIInput126);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          timelineDefinitionIT6M3QCIInput18,
          timelineDefinitionIT6M3QCIInput19,
          timelineDefinitionIT6M3QCIInput20,
          timelineDefinitionIT6M3QCIInput21,
        ) {
          switch (timelineDefinitionIT6M3QCIInput20) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 10;
            case 3:
              break;
            case 4:
              break;
            case 5:
              return 4;
            case 6:
              return 11;
            case 7:
              return (this.begin("acc_title"), 12);
            case 8:
              return (this.popState(), "acc_title_value");
            case 9:
              return (this.begin("acc_descr"), 14);
            case 10:
              return (this.popState(), "acc_descr_value");
            case 11:
              this.begin("acc_descr_multiline");
              break;
            case 12:
              this.popState();
              break;
            case 13:
              return "acc_descr_multiline_value";
            case 14:
              return 17;
            case 15:
              return 21;
            case 16:
              return 20;
            case 17:
              return 6;
            case 18:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:timeline\b)/i,
          /^(?:title\s[^\n]+)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:section\s[^:\n]+)/i,
          /^(?::\s(?:[^:\n]|:(?!\s))+)/i,
          /^(?:[^#:\n]+)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [12, 13],
            inclusive: false,
          },
          acc_descr: {
            rules: [10],
            inclusive: false,
          },
          acc_title: {
            rules: [8],
            inclusive: false,
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18],
            inclusive: true,
          },
        },
      };
    })();
    function timelineDefinitionIT6M3QCIHelper2() {
      this.yy = {};
    }
    return (
      defineFunctionName(timelineDefinitionIT6M3QCIHelper2, "Parser"),
      (timelineDefinitionIT6M3QCIHelper2.prototype =
        timelineDefinitionIT6M3QCIBinding50),
      (timelineDefinitionIT6M3QCIBinding50.Parser =
        timelineDefinitionIT6M3QCIHelper2),
      new timelineDefinitionIT6M3QCIHelper2()
    );
  })();
  timelineDefinitionIT6M3QCIBinding1.parser =
    timelineDefinitionIT6M3QCIBinding1;
  timelineDefinitionIT6M3QCIBinding2 = timelineDefinitionIT6M3QCIBinding1;
  timelineDefinitionIT6M3QCIBinding3 = {};
  defineEnumerableGetters(timelineDefinitionIT6M3QCIBinding3, {
    addEvent: () => timelineDefinitionIT6M3QCIBinding15,
    addSection: () => timelineDefinitionIT6M3QCIBinding11,
    addTask: () => timelineDefinitionIT6M3QCIBinding14,
    addTaskOrg: () => timelineDefinitionIT6M3QCIBinding16,
    clear: () => timelineDefinitionIT6M3QCIBinding10,
    default: () => timelineDefinitionIT6M3QCIBinding18,
    getCommonDb: () => timelineDefinitionIT6M3QCIBinding9,
    getSections: () => timelineDefinitionIT6M3QCIBinding12,
    getTasks: () => timelineDefinitionIT6M3QCIBinding13,
  });
  timelineDefinitionIT6M3QCIBinding4 = "";
  timelineDefinitionIT6M3QCIBinding5 = 0;
  timelineDefinitionIT6M3QCIBinding6 = [];
  timelineDefinitionIT6M3QCIBinding7 = [];
  timelineDefinitionIT6M3QCIBinding8 = [];
  timelineDefinitionIT6M3QCIBinding9 = defineFunctionName(
    () => o,
    "getCommonDb",
  );
  timelineDefinitionIT6M3QCIBinding10 = defineFunctionName(function () {
    timelineDefinitionIT6M3QCIBinding6.length = 0;
    timelineDefinitionIT6M3QCIBinding7.length = 0;
    timelineDefinitionIT6M3QCIBinding4 = "";
    timelineDefinitionIT6M3QCIBinding8.length = 0;
    a();
  }, "clear");
  timelineDefinitionIT6M3QCIBinding11 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput127,
  ) {
    timelineDefinitionIT6M3QCIBinding4 = timelineDefinitionIT6M3QCIInput127;
    timelineDefinitionIT6M3QCIBinding6.push(timelineDefinitionIT6M3QCIInput127);
  }, "addSection");
  timelineDefinitionIT6M3QCIBinding12 = defineFunctionName(function () {
    return timelineDefinitionIT6M3QCIBinding6;
  }, "getSections");
  timelineDefinitionIT6M3QCIBinding13 = defineFunctionName(function () {
    let timelineDefinitionIT6M3QCIBinding192 =
        timelineDefinitionIT6M3QCIBinding17(),
      timelineDefinitionIT6M3QCIBinding193 = 0;
    for (
      ;
      !timelineDefinitionIT6M3QCIBinding192 &&
      timelineDefinitionIT6M3QCIBinding193 < 100;
    ) {
      timelineDefinitionIT6M3QCIBinding192 =
        timelineDefinitionIT6M3QCIBinding17();
      timelineDefinitionIT6M3QCIBinding193++;
    }
    return (
      timelineDefinitionIT6M3QCIBinding7.push(
        ...timelineDefinitionIT6M3QCIBinding8,
      ),
      timelineDefinitionIT6M3QCIBinding7
    );
  }, "getTasks");
  timelineDefinitionIT6M3QCIBinding14 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput105,
    timelineDefinitionIT6M3QCIInput106,
    timelineDefinitionIT6M3QCIInput107,
  ) {
    let timelineDefinitionIT6M3QCIBinding190 = {
      id: timelineDefinitionIT6M3QCIBinding5++,
      section: timelineDefinitionIT6M3QCIBinding4,
      type: timelineDefinitionIT6M3QCIBinding4,
      task: timelineDefinitionIT6M3QCIInput105,
      score: timelineDefinitionIT6M3QCIInput106 || 0,
      events: timelineDefinitionIT6M3QCIInput107
        ? [timelineDefinitionIT6M3QCIInput107]
        : [],
    };
    timelineDefinitionIT6M3QCIBinding8.push(
      timelineDefinitionIT6M3QCIBinding190,
    );
  }, "addTask");
  timelineDefinitionIT6M3QCIBinding15 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput122,
  ) {
    timelineDefinitionIT6M3QCIBinding8
      .find((item) => item.id === timelineDefinitionIT6M3QCIBinding5 - 1)
      .events.push(timelineDefinitionIT6M3QCIInput122);
  }, "addEvent");
  timelineDefinitionIT6M3QCIBinding16 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput114,
  ) {
    let timelineDefinitionIT6M3QCIBinding194 = {
      section: timelineDefinitionIT6M3QCIBinding4,
      type: timelineDefinitionIT6M3QCIBinding4,
      description: timelineDefinitionIT6M3QCIInput114,
      task: timelineDefinitionIT6M3QCIInput114,
      classes: [],
    };
    timelineDefinitionIT6M3QCIBinding7.push(
      timelineDefinitionIT6M3QCIBinding194,
    );
  }, "addTaskOrg");
  timelineDefinitionIT6M3QCIBinding17 = defineFunctionName(function () {
    let timelineDefinitionIT6M3QCIBinding188 = defineFunctionName(function (
        timelineDefinitionIT6M3QCIInput125,
      ) {
        return timelineDefinitionIT6M3QCIBinding8[
          timelineDefinitionIT6M3QCIInput125
        ].processed;
      }, "compileTask"),
      timelineDefinitionIT6M3QCIBinding189 = true;
    for (let [
      timelineDefinitionIT6M3QCIBinding195,
      timelineDefinitionIT6M3QCIBinding196,
    ] of timelineDefinitionIT6M3QCIBinding8.entries()) {
      timelineDefinitionIT6M3QCIBinding188(
        timelineDefinitionIT6M3QCIBinding195,
      );
      timelineDefinitionIT6M3QCIBinding189 &&=
        timelineDefinitionIT6M3QCIBinding196.processed;
    }
    return timelineDefinitionIT6M3QCIBinding189;
  }, "compileTasks");
  timelineDefinitionIT6M3QCIBinding18 = {
    clear: timelineDefinitionIT6M3QCIBinding10,
    getCommonDb: timelineDefinitionIT6M3QCIBinding9,
    addSection: timelineDefinitionIT6M3QCIBinding11,
    getSections: timelineDefinitionIT6M3QCIBinding12,
    getTasks: timelineDefinitionIT6M3QCIBinding13,
    addTask: timelineDefinitionIT6M3QCIBinding14,
    addTaskOrg: timelineDefinitionIT6M3QCIBinding16,
    addEvent: timelineDefinitionIT6M3QCIBinding15,
  };
  timelineDefinitionIT6M3QCIBinding19 = 12;
  timelineDefinitionIT6M3QCIBinding20 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput87,
    timelineDefinitionIT6M3QCIInput88,
  ) {
    let timelineDefinitionIT6M3QCIBinding172 =
      timelineDefinitionIT6M3QCIInput87.append("rect");
    return (
      timelineDefinitionIT6M3QCIBinding172.attr(
        "x",
        timelineDefinitionIT6M3QCIInput88.x,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "y",
        timelineDefinitionIT6M3QCIInput88.y,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "fill",
        timelineDefinitionIT6M3QCIInput88.fill,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "stroke",
        timelineDefinitionIT6M3QCIInput88.stroke,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "width",
        timelineDefinitionIT6M3QCIInput88.width,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "height",
        timelineDefinitionIT6M3QCIInput88.height,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "rx",
        timelineDefinitionIT6M3QCIInput88.rx,
      ),
      timelineDefinitionIT6M3QCIBinding172.attr(
        "ry",
        timelineDefinitionIT6M3QCIInput88.ry,
      ),
      timelineDefinitionIT6M3QCIInput88.class !== undefined &&
        timelineDefinitionIT6M3QCIBinding172.attr(
          "class",
          timelineDefinitionIT6M3QCIInput88.class,
        ),
      timelineDefinitionIT6M3QCIBinding172
    );
  }, "drawRect");
  timelineDefinitionIT6M3QCIBinding21 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput8,
    timelineDefinitionIT6M3QCIInput9,
  ) {
    let timelineDefinitionIT6M3QCIBinding103 = timelineDefinitionIT6M3QCIInput8
        .append("circle")
        .attr("cx", timelineDefinitionIT6M3QCIInput9.cx)
        .attr("cy", timelineDefinitionIT6M3QCIInput9.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      timelineDefinitionIT6M3QCIBinding104 =
        timelineDefinitionIT6M3QCIInput8.append("g");
    timelineDefinitionIT6M3QCIBinding104
      .append("circle")
      .attr("cx", timelineDefinitionIT6M3QCIInput9.cx - 5)
      .attr("cy", timelineDefinitionIT6M3QCIInput9.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    timelineDefinitionIT6M3QCIBinding104
      .append("circle")
      .attr("cx", timelineDefinitionIT6M3QCIInput9.cx + 5)
      .attr("cy", timelineDefinitionIT6M3QCIInput9.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function timelineDefinitionIT6M3QCIHelper9(
      timelineDefinitionIT6M3QCIInput93,
    ) {
      let timelineDefinitionIT6M3QCIBinding177 = arc()
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI / 2) * 3)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionIT6M3QCIInput93
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionIT6M3QCIBinding177)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionIT6M3QCIInput9.cx +
            "," +
            (timelineDefinitionIT6M3QCIInput9.cy + 2) +
            ")",
        );
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper9, "smile");
    function timelineDefinitionIT6M3QCIHelper10(
      timelineDefinitionIT6M3QCIInput91,
    ) {
      let timelineDefinitionIT6M3QCIBinding176 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle((Math.PI / 2) * 5)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionIT6M3QCIInput91
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionIT6M3QCIBinding176)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionIT6M3QCIInput9.cx +
            "," +
            (timelineDefinitionIT6M3QCIInput9.cy + 7) +
            ")",
        );
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper10, "sad");
    function timelineDefinitionIT6M3QCIHelper11(
      timelineDefinitionIT6M3QCIInput92,
    ) {
      timelineDefinitionIT6M3QCIInput92
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", timelineDefinitionIT6M3QCIInput9.cx - 5)
        .attr("y1", timelineDefinitionIT6M3QCIInput9.cy + 7)
        .attr("x2", timelineDefinitionIT6M3QCIInput9.cx + 5)
        .attr("y2", timelineDefinitionIT6M3QCIInput9.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      defineFunctionName(timelineDefinitionIT6M3QCIHelper11, "ambivalent"),
      timelineDefinitionIT6M3QCIInput9.score > 3
        ? timelineDefinitionIT6M3QCIHelper9(
            timelineDefinitionIT6M3QCIBinding104,
          )
        : timelineDefinitionIT6M3QCIInput9.score < 3
          ? timelineDefinitionIT6M3QCIHelper10(
              timelineDefinitionIT6M3QCIBinding104,
            )
          : timelineDefinitionIT6M3QCIHelper11(
              timelineDefinitionIT6M3QCIBinding104,
            ),
      timelineDefinitionIT6M3QCIBinding103
    );
  }, "drawFace");
  timelineDefinitionIT6M3QCIBinding22 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput79,
    timelineDefinitionIT6M3QCIInput80,
  ) {
    let timelineDefinitionIT6M3QCIBinding171 =
      timelineDefinitionIT6M3QCIInput79.append("circle");
    return (
      timelineDefinitionIT6M3QCIBinding171.attr(
        "cx",
        timelineDefinitionIT6M3QCIInput80.cx,
      ),
      timelineDefinitionIT6M3QCIBinding171.attr(
        "cy",
        timelineDefinitionIT6M3QCIInput80.cy,
      ),
      timelineDefinitionIT6M3QCIBinding171.attr(
        "class",
        "actor-" + timelineDefinitionIT6M3QCIInput80.pos,
      ),
      timelineDefinitionIT6M3QCIBinding171.attr(
        "fill",
        timelineDefinitionIT6M3QCIInput80.fill,
      ),
      timelineDefinitionIT6M3QCIBinding171.attr(
        "stroke",
        timelineDefinitionIT6M3QCIInput80.stroke,
      ),
      timelineDefinitionIT6M3QCIBinding171.attr(
        "r",
        timelineDefinitionIT6M3QCIInput80.r,
      ),
      timelineDefinitionIT6M3QCIBinding171.class !== undefined &&
        timelineDefinitionIT6M3QCIBinding171.attr(
          "class",
          timelineDefinitionIT6M3QCIBinding171.class,
        ),
      timelineDefinitionIT6M3QCIInput80.title !== undefined &&
        timelineDefinitionIT6M3QCIBinding171
          .append("title")
          .text(timelineDefinitionIT6M3QCIInput80.title),
      timelineDefinitionIT6M3QCIBinding171
    );
  }, "drawCircle");
  timelineDefinitionIT6M3QCIBinding23 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput89,
    timelineDefinitionIT6M3QCIInput90,
  ) {
    let timelineDefinitionIT6M3QCIBinding173 =
        timelineDefinitionIT6M3QCIInput90.text.replace(/<br\s*\/?>/gi, " "),
      timelineDefinitionIT6M3QCIBinding174 =
        timelineDefinitionIT6M3QCIInput89.append("text");
    timelineDefinitionIT6M3QCIBinding174.attr(
      "x",
      timelineDefinitionIT6M3QCIInput90.x,
    );
    timelineDefinitionIT6M3QCIBinding174.attr(
      "y",
      timelineDefinitionIT6M3QCIInput90.y,
    );
    timelineDefinitionIT6M3QCIBinding174.attr("class", "legend");
    timelineDefinitionIT6M3QCIBinding174.style(
      "text-anchor",
      timelineDefinitionIT6M3QCIInput90.anchor,
    );
    timelineDefinitionIT6M3QCIInput90.class !== undefined &&
      timelineDefinitionIT6M3QCIBinding174.attr(
        "class",
        timelineDefinitionIT6M3QCIInput90.class,
      );
    let timelineDefinitionIT6M3QCIBinding175 =
      timelineDefinitionIT6M3QCIBinding174.append("tspan");
    return (
      timelineDefinitionIT6M3QCIBinding175.attr(
        "x",
        timelineDefinitionIT6M3QCIInput90.x +
          timelineDefinitionIT6M3QCIInput90.textMargin * 2,
      ),
      timelineDefinitionIT6M3QCIBinding175.text(
        timelineDefinitionIT6M3QCIBinding173,
      ),
      timelineDefinitionIT6M3QCIBinding174
    );
  }, "drawText");
  timelineDefinitionIT6M3QCIBinding24 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput62,
    timelineDefinitionIT6M3QCIInput63,
  ) {
    function timelineDefinitionIT6M3QCIHelper12(
      timelineDefinitionIT6M3QCIInput82,
      timelineDefinitionIT6M3QCIInput83,
      timelineDefinitionIT6M3QCIInput84,
      timelineDefinitionIT6M3QCIInput85,
      timelineDefinitionIT6M3QCIInput86,
    ) {
      return (
        timelineDefinitionIT6M3QCIInput82 +
        "," +
        timelineDefinitionIT6M3QCIInput83 +
        " " +
        (timelineDefinitionIT6M3QCIInput82 +
          timelineDefinitionIT6M3QCIInput84) +
        "," +
        timelineDefinitionIT6M3QCIInput83 +
        " " +
        (timelineDefinitionIT6M3QCIInput82 +
          timelineDefinitionIT6M3QCIInput84) +
        "," +
        (timelineDefinitionIT6M3QCIInput83 +
          timelineDefinitionIT6M3QCIInput85 -
          timelineDefinitionIT6M3QCIInput86) +
        " " +
        (timelineDefinitionIT6M3QCIInput82 +
          timelineDefinitionIT6M3QCIInput84 -
          timelineDefinitionIT6M3QCIInput86 * 1.2) +
        "," +
        (timelineDefinitionIT6M3QCIInput83 +
          timelineDefinitionIT6M3QCIInput85) +
        " " +
        timelineDefinitionIT6M3QCIInput82 +
        "," +
        (timelineDefinitionIT6M3QCIInput83 + timelineDefinitionIT6M3QCIInput85)
      );
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper12, "genPoints");
    let timelineDefinitionIT6M3QCIBinding153 =
      timelineDefinitionIT6M3QCIInput62.append("polygon");
    timelineDefinitionIT6M3QCIBinding153.attr(
      "points",
      timelineDefinitionIT6M3QCIHelper12(
        timelineDefinitionIT6M3QCIInput63.x,
        timelineDefinitionIT6M3QCIInput63.y,
        50,
        20,
        7,
      ),
    );
    timelineDefinitionIT6M3QCIBinding153.attr("class", "labelBox");
    timelineDefinitionIT6M3QCIInput63.y +=
      timelineDefinitionIT6M3QCIInput63.labelMargin;
    timelineDefinitionIT6M3QCIInput63.x +=
      0.5 * timelineDefinitionIT6M3QCIInput63.labelMargin;
    timelineDefinitionIT6M3QCIBinding23(
      timelineDefinitionIT6M3QCIInput62,
      timelineDefinitionIT6M3QCIInput63,
    );
  }, "drawLabel");
  timelineDefinitionIT6M3QCIBinding25 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput70,
    timelineDefinitionIT6M3QCIInput71,
    timelineDefinitionIT6M3QCIInput72,
  ) {
    let timelineDefinitionIT6M3QCIBinding160 =
        timelineDefinitionIT6M3QCIInput70.append("g"),
      timelineDefinitionIT6M3QCIBinding161 =
        timelineDefinitionIT6M3QCIBinding30();
    timelineDefinitionIT6M3QCIBinding161.x =
      timelineDefinitionIT6M3QCIInput71.x;
    timelineDefinitionIT6M3QCIBinding161.y =
      timelineDefinitionIT6M3QCIInput71.y;
    timelineDefinitionIT6M3QCIBinding161.fill =
      timelineDefinitionIT6M3QCIInput71.fill;
    timelineDefinitionIT6M3QCIBinding161.width =
      timelineDefinitionIT6M3QCIInput72.width;
    timelineDefinitionIT6M3QCIBinding161.height =
      timelineDefinitionIT6M3QCIInput72.height;
    timelineDefinitionIT6M3QCIBinding161.class =
      "journey-section section-type-" + timelineDefinitionIT6M3QCIInput71.num;
    timelineDefinitionIT6M3QCIBinding161.rx = 3;
    timelineDefinitionIT6M3QCIBinding161.ry = 3;
    timelineDefinitionIT6M3QCIBinding20(
      timelineDefinitionIT6M3QCIBinding160,
      timelineDefinitionIT6M3QCIBinding161,
    );
    timelineDefinitionIT6M3QCIBinding31(timelineDefinitionIT6M3QCIInput72)(
      timelineDefinitionIT6M3QCIInput71.text,
      timelineDefinitionIT6M3QCIBinding160,
      timelineDefinitionIT6M3QCIBinding161.x,
      timelineDefinitionIT6M3QCIBinding161.y,
      timelineDefinitionIT6M3QCIBinding161.width,
      timelineDefinitionIT6M3QCIBinding161.height,
      {
        class:
          "journey-section section-type-" +
          timelineDefinitionIT6M3QCIInput71.num,
      },
      timelineDefinitionIT6M3QCIInput72,
      timelineDefinitionIT6M3QCIInput71.colour,
    );
  }, "drawSection");
  timelineDefinitionIT6M3QCIBinding26 = -1;
  timelineDefinitionIT6M3QCIBinding27 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput38,
    timelineDefinitionIT6M3QCIInput39,
    timelineDefinitionIT6M3QCIInput40,
  ) {
    let timelineDefinitionIT6M3QCIBinding127 =
        timelineDefinitionIT6M3QCIInput39.x +
        timelineDefinitionIT6M3QCIInput40.width / 2,
      timelineDefinitionIT6M3QCIBinding128 =
        timelineDefinitionIT6M3QCIInput38.append("g");
    timelineDefinitionIT6M3QCIBinding26++;
    timelineDefinitionIT6M3QCIBinding128
      .append("line")
      .attr("id", "task" + timelineDefinitionIT6M3QCIBinding26)
      .attr("x1", timelineDefinitionIT6M3QCIBinding127)
      .attr("y1", timelineDefinitionIT6M3QCIInput39.y)
      .attr("x2", timelineDefinitionIT6M3QCIBinding127)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    timelineDefinitionIT6M3QCIBinding21(timelineDefinitionIT6M3QCIBinding128, {
      cx: timelineDefinitionIT6M3QCIBinding127,
      cy: 300 + (5 - timelineDefinitionIT6M3QCIInput39.score) * 30,
      score: timelineDefinitionIT6M3QCIInput39.score,
    });
    let timelineDefinitionIT6M3QCIBinding129 =
      timelineDefinitionIT6M3QCIBinding30();
    timelineDefinitionIT6M3QCIBinding129.x =
      timelineDefinitionIT6M3QCIInput39.x;
    timelineDefinitionIT6M3QCIBinding129.y =
      timelineDefinitionIT6M3QCIInput39.y;
    timelineDefinitionIT6M3QCIBinding129.fill =
      timelineDefinitionIT6M3QCIInput39.fill;
    timelineDefinitionIT6M3QCIBinding129.width =
      timelineDefinitionIT6M3QCIInput40.width;
    timelineDefinitionIT6M3QCIBinding129.height =
      timelineDefinitionIT6M3QCIInput40.height;
    timelineDefinitionIT6M3QCIBinding129.class =
      "task task-type-" + timelineDefinitionIT6M3QCIInput39.num;
    timelineDefinitionIT6M3QCIBinding129.rx = 3;
    timelineDefinitionIT6M3QCIBinding129.ry = 3;
    timelineDefinitionIT6M3QCIBinding20(
      timelineDefinitionIT6M3QCIBinding128,
      timelineDefinitionIT6M3QCIBinding129,
    );
    timelineDefinitionIT6M3QCIBinding31(timelineDefinitionIT6M3QCIInput40)(
      timelineDefinitionIT6M3QCIInput39.task,
      timelineDefinitionIT6M3QCIBinding128,
      timelineDefinitionIT6M3QCIBinding129.x,
      timelineDefinitionIT6M3QCIBinding129.y,
      timelineDefinitionIT6M3QCIBinding129.width,
      timelineDefinitionIT6M3QCIBinding129.height,
      {
        class: "task",
      },
      timelineDefinitionIT6M3QCIInput40,
      timelineDefinitionIT6M3QCIInput39.colour,
    );
  }, "drawTask");
  timelineDefinitionIT6M3QCIBinding28 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput103,
    timelineDefinitionIT6M3QCIInput104,
  ) {
    timelineDefinitionIT6M3QCIBinding20(timelineDefinitionIT6M3QCIInput103, {
      x: timelineDefinitionIT6M3QCIInput104.startx,
      y: timelineDefinitionIT6M3QCIInput104.starty,
      width:
        timelineDefinitionIT6M3QCIInput104.stopx -
        timelineDefinitionIT6M3QCIInput104.startx,
      height:
        timelineDefinitionIT6M3QCIInput104.stopy -
        timelineDefinitionIT6M3QCIInput104.starty,
      fill: timelineDefinitionIT6M3QCIInput104.fill,
      class: "rect",
    }).lower();
  }, "drawBackgroundRect");
  timelineDefinitionIT6M3QCIBinding29 = defineFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      "text-anchor": "start",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
    };
  }, "getTextObj");
  timelineDefinitionIT6M3QCIBinding30 = defineFunctionName(function () {
    return {
      x: 0,
      y: 0,
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0,
    };
  }, "getNoteRect");
  timelineDefinitionIT6M3QCIBinding31 = (function () {
    function timelineDefinitionIT6M3QCIHelper5(
      timelineDefinitionIT6M3QCIInput95,
      timelineDefinitionIT6M3QCIInput96,
      timelineDefinitionIT6M3QCIInput97,
      timelineDefinitionIT6M3QCIInput98,
      timelineDefinitionIT6M3QCIInput99,
      timelineDefinitionIT6M3QCIInput100,
      timelineDefinitionIT6M3QCIInput101,
      timelineDefinitionIT6M3QCIInput102,
    ) {
      timelineDefinitionIT6M3QCIHelper8(
        timelineDefinitionIT6M3QCIInput96
          .append("text")
          .attr(
            "x",
            timelineDefinitionIT6M3QCIInput97 +
              timelineDefinitionIT6M3QCIInput99 / 2,
          )
          .attr(
            "y",
            timelineDefinitionIT6M3QCIInput98 +
              timelineDefinitionIT6M3QCIInput100 / 2 +
              5,
          )
          .style("font-color", timelineDefinitionIT6M3QCIInput102)
          .style("text-anchor", "middle")
          .text(timelineDefinitionIT6M3QCIInput95),
        timelineDefinitionIT6M3QCIInput101,
      );
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper5, "byText");
    function timelineDefinitionIT6M3QCIHelper6(
      timelineDefinitionIT6M3QCIInput43,
      timelineDefinitionIT6M3QCIInput44,
      timelineDefinitionIT6M3QCIInput45,
      timelineDefinitionIT6M3QCIInput46,
      timelineDefinitionIT6M3QCIInput47,
      timelineDefinitionIT6M3QCIInput48,
      timelineDefinitionIT6M3QCIInput49,
      timelineDefinitionIT6M3QCIInput50,
      timelineDefinitionIT6M3QCIInput51,
    ) {
      let { taskFontSize, taskFontFamily } = timelineDefinitionIT6M3QCIInput50,
        timelineDefinitionIT6M3QCIBinding131 =
          timelineDefinitionIT6M3QCIInput43.split(/<br\s*\/?>/gi);
      for (
        let timelineDefinitionIT6M3QCIBinding152 = 0;
        timelineDefinitionIT6M3QCIBinding152 <
        timelineDefinitionIT6M3QCIBinding131.length;
        timelineDefinitionIT6M3QCIBinding152++
      ) {
        let timelineDefinitionIT6M3QCIBinding154 =
            timelineDefinitionIT6M3QCIBinding152 * taskFontSize -
            (taskFontSize * (timelineDefinitionIT6M3QCIBinding131.length - 1)) /
              2,
          timelineDefinitionIT6M3QCIBinding155 =
            timelineDefinitionIT6M3QCIInput44
              .append("text")
              .attr(
                "x",
                timelineDefinitionIT6M3QCIInput45 +
                  timelineDefinitionIT6M3QCIInput47 / 2,
              )
              .attr("y", timelineDefinitionIT6M3QCIInput46)
              .attr("fill", timelineDefinitionIT6M3QCIInput51)
              .style("text-anchor", "middle")
              .style("font-size", taskFontSize)
              .style("font-family", taskFontFamily);
        timelineDefinitionIT6M3QCIBinding155
          .append("tspan")
          .attr(
            "x",
            timelineDefinitionIT6M3QCIInput45 +
              timelineDefinitionIT6M3QCIInput47 / 2,
          )
          .attr("dy", timelineDefinitionIT6M3QCIBinding154)
          .text(
            timelineDefinitionIT6M3QCIBinding131[
              timelineDefinitionIT6M3QCIBinding152
            ],
          );
        timelineDefinitionIT6M3QCIBinding155
          .attr(
            "y",
            timelineDefinitionIT6M3QCIInput46 +
              timelineDefinitionIT6M3QCIInput48 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        timelineDefinitionIT6M3QCIHelper8(
          timelineDefinitionIT6M3QCIBinding155,
          timelineDefinitionIT6M3QCIInput49,
        );
      }
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper6, "byTspan");
    function timelineDefinitionIT6M3QCIHelper7(
      timelineDefinitionIT6M3QCIInput52,
      timelineDefinitionIT6M3QCIInput53,
      timelineDefinitionIT6M3QCIInput54,
      timelineDefinitionIT6M3QCIInput55,
      timelineDefinitionIT6M3QCIInput56,
      timelineDefinitionIT6M3QCIInput57,
      timelineDefinitionIT6M3QCIInput58,
      timelineDefinitionIT6M3QCIInput59,
    ) {
      let timelineDefinitionIT6M3QCIBinding150 =
          timelineDefinitionIT6M3QCIInput53.append("switch"),
        timelineDefinitionIT6M3QCIBinding151 =
          timelineDefinitionIT6M3QCIBinding150
            .append("foreignObject")
            .attr("x", timelineDefinitionIT6M3QCIInput54)
            .attr("y", timelineDefinitionIT6M3QCIInput55)
            .attr("width", timelineDefinitionIT6M3QCIInput56)
            .attr("height", timelineDefinitionIT6M3QCIInput57)
            .attr("position", "fixed")
            .append("xhtml:div")
            .style("display", "table")
            .style("height", "100%")
            .style("width", "100%");
      timelineDefinitionIT6M3QCIBinding151
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(timelineDefinitionIT6M3QCIInput52);
      timelineDefinitionIT6M3QCIHelper6(
        timelineDefinitionIT6M3QCIInput52,
        timelineDefinitionIT6M3QCIBinding150,
        timelineDefinitionIT6M3QCIInput54,
        timelineDefinitionIT6M3QCIInput55,
        timelineDefinitionIT6M3QCIInput56,
        timelineDefinitionIT6M3QCIInput57,
        timelineDefinitionIT6M3QCIInput58,
        timelineDefinitionIT6M3QCIInput59,
      );
      timelineDefinitionIT6M3QCIHelper8(
        timelineDefinitionIT6M3QCIBinding151,
        timelineDefinitionIT6M3QCIInput58,
      );
    }
    defineFunctionName(timelineDefinitionIT6M3QCIHelper7, "byFo");
    function timelineDefinitionIT6M3QCIHelper8(
      timelineDefinitionIT6M3QCIInput120,
      timelineDefinitionIT6M3QCIInput121,
    ) {
      for (let timelineDefinitionIT6M3QCIBinding197 in timelineDefinitionIT6M3QCIInput121)
        timelineDefinitionIT6M3QCIBinding197 in
          timelineDefinitionIT6M3QCIInput121 &&
          timelineDefinitionIT6M3QCIInput120.attr(
            timelineDefinitionIT6M3QCIBinding197,
            timelineDefinitionIT6M3QCIInput121[
              timelineDefinitionIT6M3QCIBinding197
            ],
          );
    }
    return (
      defineFunctionName(timelineDefinitionIT6M3QCIHelper8, "_setTextAttrs"),
      function (timelineDefinitionIT6M3QCIInput111) {
        return timelineDefinitionIT6M3QCIInput111.textPlacement === "fo"
          ? timelineDefinitionIT6M3QCIHelper7
          : timelineDefinitionIT6M3QCIInput111.textPlacement === "old"
            ? timelineDefinitionIT6M3QCIHelper5
            : timelineDefinitionIT6M3QCIHelper6;
      }
    );
  })();
  timelineDefinitionIT6M3QCIBinding32 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput94,
  ) {
    timelineDefinitionIT6M3QCIInput94
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("refX", 5)
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
  defineFunctionName(timelineDefinitionIT6M3QCIHelper1, "wrap");
  timelineDefinitionIT6M3QCIBinding33 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput34,
    timelineDefinitionIT6M3QCIInput35,
    timelineDefinitionIT6M3QCIInput36,
    timelineDefinitionIT6M3QCIInput37,
  ) {
    let timelineDefinitionIT6M3QCIBinding121 =
        (timelineDefinitionIT6M3QCIInput36 %
          timelineDefinitionIT6M3QCIBinding19) -
        1,
      timelineDefinitionIT6M3QCIBinding122 =
        timelineDefinitionIT6M3QCIInput34.append("g");
    timelineDefinitionIT6M3QCIInput35.section =
      timelineDefinitionIT6M3QCIBinding121;
    timelineDefinitionIT6M3QCIBinding122.attr(
      "class",
      (timelineDefinitionIT6M3QCIInput35.class
        ? timelineDefinitionIT6M3QCIInput35.class + " "
        : "") +
        "timeline-node " +
        ("section-" + timelineDefinitionIT6M3QCIBinding121),
    );
    let timelineDefinitionIT6M3QCIBinding123 =
        timelineDefinitionIT6M3QCIBinding122.append("g"),
      timelineDefinitionIT6M3QCIBinding124 =
        timelineDefinitionIT6M3QCIBinding122.append("g"),
      timelineDefinitionIT6M3QCIBinding125 =
        timelineDefinitionIT6M3QCIBinding124
          .append("text")
          .text(timelineDefinitionIT6M3QCIInput35.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(
            timelineDefinitionIT6M3QCIHelper1,
            timelineDefinitionIT6M3QCIInput35.width,
          )
          .node()
          .getBBox(),
      timelineDefinitionIT6M3QCIBinding126 = timelineDefinitionIT6M3QCIInput37
        .fontSize?.replace
        ? timelineDefinitionIT6M3QCIInput37.fontSize.replace("px", "")
        : timelineDefinitionIT6M3QCIInput37.fontSize;
    return (
      (timelineDefinitionIT6M3QCIInput35.height =
        timelineDefinitionIT6M3QCIBinding125.height +
        timelineDefinitionIT6M3QCIBinding126 * 1.1 * 0.5 +
        timelineDefinitionIT6M3QCIInput35.padding),
      (timelineDefinitionIT6M3QCIInput35.height = Math.max(
        timelineDefinitionIT6M3QCIInput35.height,
        timelineDefinitionIT6M3QCIInput35.maxHeight,
      )),
      (timelineDefinitionIT6M3QCIInput35.width +=
        2 * timelineDefinitionIT6M3QCIInput35.padding),
      timelineDefinitionIT6M3QCIBinding124.attr(
        "transform",
        "translate(" +
          timelineDefinitionIT6M3QCIInput35.width / 2 +
          ", " +
          timelineDefinitionIT6M3QCIInput35.padding / 2 +
          ")",
      ),
      timelineDefinitionIT6M3QCIBinding35(
        timelineDefinitionIT6M3QCIBinding123,
        timelineDefinitionIT6M3QCIInput35,
        timelineDefinitionIT6M3QCIBinding121,
        timelineDefinitionIT6M3QCIInput37,
      ),
      timelineDefinitionIT6M3QCIInput35
    );
  }, "drawNode");
  timelineDefinitionIT6M3QCIBinding34 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput76,
    timelineDefinitionIT6M3QCIInput77,
    timelineDefinitionIT6M3QCIInput78,
  ) {
    let timelineDefinitionIT6M3QCIBinding163 =
        timelineDefinitionIT6M3QCIInput76.append("g"),
      timelineDefinitionIT6M3QCIBinding164 =
        timelineDefinitionIT6M3QCIBinding163
          .append("text")
          .text(timelineDefinitionIT6M3QCIInput77.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(
            timelineDefinitionIT6M3QCIHelper1,
            timelineDefinitionIT6M3QCIInput77.width,
          )
          .node()
          .getBBox(),
      timelineDefinitionIT6M3QCIBinding165 = timelineDefinitionIT6M3QCIInput78
        .fontSize?.replace
        ? timelineDefinitionIT6M3QCIInput78.fontSize.replace("px", "")
        : timelineDefinitionIT6M3QCIInput78.fontSize;
    return (
      timelineDefinitionIT6M3QCIBinding163.remove(),
      timelineDefinitionIT6M3QCIBinding164.height +
        timelineDefinitionIT6M3QCIBinding165 * 1.1 * 0.5 +
        timelineDefinitionIT6M3QCIInput77.padding
    );
  }, "getVirtualNodeHeight");
  timelineDefinitionIT6M3QCIBinding35 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput73,
    timelineDefinitionIT6M3QCIInput74,
    timelineDefinitionIT6M3QCIInput75,
  ) {
    timelineDefinitionIT6M3QCIInput73
      .append("path")
      .attr("id", "node-" + timelineDefinitionIT6M3QCIInput74.id)
      .attr("class", "node-bkg node-" + timelineDefinitionIT6M3QCIInput74.type)
      .attr(
        "d",
        `M0 ${timelineDefinitionIT6M3QCIInput74.height - 5} v${-timelineDefinitionIT6M3QCIInput74.height + 10} q0,-5 5,-5 h${timelineDefinitionIT6M3QCIInput74.width - 10} q5,0 5,5 v${timelineDefinitionIT6M3QCIInput74.height - 5} H0 Z`,
      );
    timelineDefinitionIT6M3QCIInput73
      .append("line")
      .attr("class", "node-line-" + timelineDefinitionIT6M3QCIInput75)
      .attr("x1", 0)
      .attr("y1", timelineDefinitionIT6M3QCIInput74.height)
      .attr("x2", timelineDefinitionIT6M3QCIInput74.width)
      .attr("y2", timelineDefinitionIT6M3QCIInput74.height);
  }, "defaultBkg");
  timelineDefinitionIT6M3QCIBinding36 = {
    drawRect: timelineDefinitionIT6M3QCIBinding20,
    drawCircle: timelineDefinitionIT6M3QCIBinding22,
    drawSection: timelineDefinitionIT6M3QCIBinding25,
    drawText: timelineDefinitionIT6M3QCIBinding23,
    drawLabel: timelineDefinitionIT6M3QCIBinding24,
    drawTask: timelineDefinitionIT6M3QCIBinding27,
    drawBackgroundRect: timelineDefinitionIT6M3QCIBinding28,
    getTextObj: timelineDefinitionIT6M3QCIBinding29,
    getNoteRect: timelineDefinitionIT6M3QCIBinding30,
    initGraphics: timelineDefinitionIT6M3QCIBinding32,
    drawNode: timelineDefinitionIT6M3QCIBinding33,
    getVirtualNodeHeight: timelineDefinitionIT6M3QCIBinding34,
  };
  timelineDefinitionIT6M3QCIBinding37 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput2,
    timelineDefinitionIT6M3QCIInput3,
    timelineDefinitionIT6M3QCIInput4,
    timelineDefinitionIT6M3QCIInput5,
  ) {
    let timelineDefinitionIT6M3QCIBinding80 = b(),
      timelineDefinitionIT6M3QCIBinding81 =
        timelineDefinitionIT6M3QCIBinding80.timeline?.leftMargin ?? 50;
    logger.debug("timeline", timelineDefinitionIT6M3QCIInput5.db);
    let timelineDefinitionIT6M3QCIBinding82 =
        timelineDefinitionIT6M3QCIBinding80.securityLevel,
      timelineDefinitionIT6M3QCIBinding83;
    timelineDefinitionIT6M3QCIBinding82 === "sandbox" &&
      (timelineDefinitionIT6M3QCIBinding83 = select(
        "#i" + timelineDefinitionIT6M3QCIInput3,
      ));
    let timelineDefinitionIT6M3QCIBinding84 = select(
      timelineDefinitionIT6M3QCIBinding82 === "sandbox"
        ? timelineDefinitionIT6M3QCIBinding83.nodes()[0].contentDocument.body
        : "body",
    ).select("#" + timelineDefinitionIT6M3QCIInput3);
    timelineDefinitionIT6M3QCIBinding84.append("g");
    let timelineDefinitionIT6M3QCIBinding85 =
        timelineDefinitionIT6M3QCIInput5.db.getTasks(),
      timelineDefinitionIT6M3QCIBinding86 = timelineDefinitionIT6M3QCIInput5.db
        .getCommonDb()
        .getDiagramTitle();
    logger.debug("task", timelineDefinitionIT6M3QCIBinding85);
    timelineDefinitionIT6M3QCIBinding36.initGraphics(
      timelineDefinitionIT6M3QCIBinding84,
    );
    let timelineDefinitionIT6M3QCIBinding87 =
      timelineDefinitionIT6M3QCIInput5.db.getSections();
    logger.debug("sections", timelineDefinitionIT6M3QCIBinding87);
    let timelineDefinitionIT6M3QCIBinding88 = 0,
      timelineDefinitionIT6M3QCIBinding89 = 0,
      timelineDefinitionIT6M3QCIBinding90 = 0,
      timelineDefinitionIT6M3QCIBinding91 = 0,
      timelineDefinitionIT6M3QCIBinding92 =
        50 + timelineDefinitionIT6M3QCIBinding81,
      timelineDefinitionIT6M3QCIBinding93 = 50;
    timelineDefinitionIT6M3QCIBinding91 = 50;
    let timelineDefinitionIT6M3QCIBinding94 = 0,
      timelineDefinitionIT6M3QCIBinding95 = true;
    timelineDefinitionIT6M3QCIBinding87.forEach(function (item) {
      let timelineDefinitionIT6M3QCIBinding178 = {
          number: timelineDefinitionIT6M3QCIBinding94,
          descr: item,
          section: timelineDefinitionIT6M3QCIBinding94,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionIT6M3QCIBinding88,
        },
        timelineDefinitionIT6M3QCIBinding179 =
          timelineDefinitionIT6M3QCIBinding36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIBinding84,
            timelineDefinitionIT6M3QCIBinding178,
            timelineDefinitionIT6M3QCIBinding80,
          );
      logger.debug(
        "sectionHeight before draw",
        timelineDefinitionIT6M3QCIBinding179,
      );
      timelineDefinitionIT6M3QCIBinding88 = Math.max(
        timelineDefinitionIT6M3QCIBinding88,
        timelineDefinitionIT6M3QCIBinding179 + 20,
      );
    });
    let timelineDefinitionIT6M3QCIBinding96 = 0,
      timelineDefinitionIT6M3QCIBinding97 = 0;
    logger.debug("tasks.length", timelineDefinitionIT6M3QCIBinding85.length);
    for (let [
      timelineDefinitionIT6M3QCIBinding132,
      timelineDefinitionIT6M3QCIBinding133,
    ] of timelineDefinitionIT6M3QCIBinding85.entries()) {
      let timelineDefinitionIT6M3QCIBinding143 = {
          number: timelineDefinitionIT6M3QCIBinding132,
          descr: timelineDefinitionIT6M3QCIBinding133,
          section: timelineDefinitionIT6M3QCIBinding133.section,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionIT6M3QCIBinding89,
        },
        timelineDefinitionIT6M3QCIBinding144 =
          timelineDefinitionIT6M3QCIBinding36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIBinding84,
            timelineDefinitionIT6M3QCIBinding143,
            timelineDefinitionIT6M3QCIBinding80,
          );
      logger.debug(
        "taskHeight before draw",
        timelineDefinitionIT6M3QCIBinding144,
      );
      timelineDefinitionIT6M3QCIBinding89 = Math.max(
        timelineDefinitionIT6M3QCIBinding89,
        timelineDefinitionIT6M3QCIBinding144 + 20,
      );
      timelineDefinitionIT6M3QCIBinding96 = Math.max(
        timelineDefinitionIT6M3QCIBinding96,
        timelineDefinitionIT6M3QCIBinding133.events.length,
      );
      let timelineDefinitionIT6M3QCIBinding145 = 0;
      for (let timelineDefinitionIT6M3QCIBinding183 of timelineDefinitionIT6M3QCIBinding133.events) {
        let timelineDefinitionIT6M3QCIBinding187 = {
          descr: timelineDefinitionIT6M3QCIBinding183,
          section: timelineDefinitionIT6M3QCIBinding133.section,
          number: timelineDefinitionIT6M3QCIBinding133.section,
          width: 150,
          padding: 20,
          maxHeight: 50,
        };
        timelineDefinitionIT6M3QCIBinding145 +=
          timelineDefinitionIT6M3QCIBinding36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIBinding84,
            timelineDefinitionIT6M3QCIBinding187,
            timelineDefinitionIT6M3QCIBinding80,
          );
      }
      timelineDefinitionIT6M3QCIBinding133.events.length > 0 &&
        (timelineDefinitionIT6M3QCIBinding145 +=
          (timelineDefinitionIT6M3QCIBinding133.events.length - 1) * 10);
      timelineDefinitionIT6M3QCIBinding97 = Math.max(
        timelineDefinitionIT6M3QCIBinding97,
        timelineDefinitionIT6M3QCIBinding145,
      );
    }
    logger.debug(
      "maxSectionHeight before draw",
      timelineDefinitionIT6M3QCIBinding88,
    );
    logger.debug(
      "maxTaskHeight before draw",
      timelineDefinitionIT6M3QCIBinding89,
    );
    timelineDefinitionIT6M3QCIBinding87 &&
    timelineDefinitionIT6M3QCIBinding87.length > 0
      ? timelineDefinitionIT6M3QCIBinding87.forEach((item) => {
          let timelineDefinitionIT6M3QCIBinding146 =
              timelineDefinitionIT6M3QCIBinding85.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionIT6M3QCIBinding147 = {
              number: timelineDefinitionIT6M3QCIBinding94,
              descr: item,
              section: timelineDefinitionIT6M3QCIBinding94,
              width:
                200 * Math.max(timelineDefinitionIT6M3QCIBinding146.length, 1) -
                50,
              padding: 20,
              maxHeight: timelineDefinitionIT6M3QCIBinding88,
            };
          logger.debug("sectionNode", timelineDefinitionIT6M3QCIBinding147);
          let timelineDefinitionIT6M3QCIBinding148 =
              timelineDefinitionIT6M3QCIBinding84.append("g"),
            timelineDefinitionIT6M3QCIBinding149 =
              timelineDefinitionIT6M3QCIBinding36.drawNode(
                timelineDefinitionIT6M3QCIBinding148,
                timelineDefinitionIT6M3QCIBinding147,
                timelineDefinitionIT6M3QCIBinding94,
                timelineDefinitionIT6M3QCIBinding80,
              );
          logger.debug(
            "sectionNode output",
            timelineDefinitionIT6M3QCIBinding149,
          );
          timelineDefinitionIT6M3QCIBinding148.attr(
            "transform",
            `translate(${timelineDefinitionIT6M3QCIBinding92}, ${timelineDefinitionIT6M3QCIBinding91})`,
          );
          timelineDefinitionIT6M3QCIBinding93 +=
            timelineDefinitionIT6M3QCIBinding88 + 50;
          timelineDefinitionIT6M3QCIBinding146.length > 0 &&
            $(
              timelineDefinitionIT6M3QCIBinding84,
              timelineDefinitionIT6M3QCIBinding146,
              timelineDefinitionIT6M3QCIBinding94,
              timelineDefinitionIT6M3QCIBinding92,
              timelineDefinitionIT6M3QCIBinding93,
              timelineDefinitionIT6M3QCIBinding89,
              timelineDefinitionIT6M3QCIBinding80,
              timelineDefinitionIT6M3QCIBinding96,
              timelineDefinitionIT6M3QCIBinding97,
              timelineDefinitionIT6M3QCIBinding88,
              false,
            );
          timelineDefinitionIT6M3QCIBinding92 +=
            200 * Math.max(timelineDefinitionIT6M3QCIBinding146.length, 1);
          timelineDefinitionIT6M3QCIBinding93 =
            timelineDefinitionIT6M3QCIBinding91;
          timelineDefinitionIT6M3QCIBinding94++;
        })
      : ((timelineDefinitionIT6M3QCIBinding95 = false),
        $(
          timelineDefinitionIT6M3QCIBinding84,
          timelineDefinitionIT6M3QCIBinding85,
          timelineDefinitionIT6M3QCIBinding94,
          timelineDefinitionIT6M3QCIBinding92,
          timelineDefinitionIT6M3QCIBinding93,
          timelineDefinitionIT6M3QCIBinding89,
          timelineDefinitionIT6M3QCIBinding80,
          timelineDefinitionIT6M3QCIBinding96,
          timelineDefinitionIT6M3QCIBinding97,
          timelineDefinitionIT6M3QCIBinding88,
          true,
        ));
    let timelineDefinitionIT6M3QCIBinding98 =
      timelineDefinitionIT6M3QCIBinding84.node().getBBox();
    logger.debug("bounds", timelineDefinitionIT6M3QCIBinding98);
    timelineDefinitionIT6M3QCIBinding86 &&
      timelineDefinitionIT6M3QCIBinding84
        .append("text")
        .text(timelineDefinitionIT6M3QCIBinding86)
        .attr(
          "x",
          timelineDefinitionIT6M3QCIBinding98.width / 2 -
            timelineDefinitionIT6M3QCIBinding81,
        )
        .attr("font-size", "4ex")
        .attr("font-weight", "bold")
        .attr("y", 20);
    timelineDefinitionIT6M3QCIBinding90 = timelineDefinitionIT6M3QCIBinding95
      ? timelineDefinitionIT6M3QCIBinding88 +
        timelineDefinitionIT6M3QCIBinding89 +
        150
      : timelineDefinitionIT6M3QCIBinding89 + 100;
    timelineDefinitionIT6M3QCIBinding84
      .append("g")
      .attr("class", "lineWrapper")
      .append("line")
      .attr("x1", timelineDefinitionIT6M3QCIBinding81)
      .attr("y1", timelineDefinitionIT6M3QCIBinding90)
      .attr(
        "x2",
        timelineDefinitionIT6M3QCIBinding98.width +
          3 * timelineDefinitionIT6M3QCIBinding81,
      )
      .attr("y2", timelineDefinitionIT6M3QCIBinding90)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    K(
      undefined,
      timelineDefinitionIT6M3QCIBinding84,
      timelineDefinitionIT6M3QCIBinding80.timeline?.padding ?? 50,
      timelineDefinitionIT6M3QCIBinding80.timeline?.useMaxWidth ?? false,
    );
  }, "draw");
  $ = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput22,
    timelineDefinitionIT6M3QCIInput23,
    timelineDefinitionIT6M3QCIInput24,
    timelineDefinitionIT6M3QCIInput25,
    timelineDefinitionIT6M3QCIInput26,
    timelineDefinitionIT6M3QCIInput27,
    timelineDefinitionIT6M3QCIInput28,
    timelineDefinitionIT6M3QCIInput29,
    timelineDefinitionIT6M3QCIInput30,
    timelineDefinitionIT6M3QCIInput31,
    timelineDefinitionIT6M3QCIInput32,
  ) {
    for (let timelineDefinitionIT6M3QCIBinding117 of timelineDefinitionIT6M3QCIInput23) {
      let timelineDefinitionIT6M3QCIBinding118 = {
        descr: timelineDefinitionIT6M3QCIBinding117.task,
        section: timelineDefinitionIT6M3QCIInput24,
        number: timelineDefinitionIT6M3QCIInput24,
        width: 150,
        padding: 20,
        maxHeight: timelineDefinitionIT6M3QCIInput27,
      };
      logger.debug("taskNode", timelineDefinitionIT6M3QCIBinding118);
      let timelineDefinitionIT6M3QCIBinding119 =
          timelineDefinitionIT6M3QCIInput22
            .append("g")
            .attr("class", "taskWrapper"),
        timelineDefinitionIT6M3QCIBinding120 =
          timelineDefinitionIT6M3QCIBinding36.drawNode(
            timelineDefinitionIT6M3QCIBinding119,
            timelineDefinitionIT6M3QCIBinding118,
            timelineDefinitionIT6M3QCIInput24,
            timelineDefinitionIT6M3QCIInput28,
          ).height;
      if (
        (logger.debug(
          "taskHeight after draw",
          timelineDefinitionIT6M3QCIBinding120,
        ),
        timelineDefinitionIT6M3QCIBinding119.attr(
          "transform",
          `translate(${timelineDefinitionIT6M3QCIInput25}, ${timelineDefinitionIT6M3QCIInput26})`,
        ),
        (timelineDefinitionIT6M3QCIInput27 = Math.max(
          timelineDefinitionIT6M3QCIInput27,
          timelineDefinitionIT6M3QCIBinding120,
        )),
        timelineDefinitionIT6M3QCIBinding117.events)
      ) {
        let timelineDefinitionIT6M3QCIBinding156 =
            timelineDefinitionIT6M3QCIInput22
              .append("g")
              .attr("class", "lineWrapper"),
          timelineDefinitionIT6M3QCIBinding157 =
            timelineDefinitionIT6M3QCIInput27;
        timelineDefinitionIT6M3QCIInput26 += 100;
        timelineDefinitionIT6M3QCIBinding157 +=
          timelineDefinitionIT6M3QCIBinding38(
            timelineDefinitionIT6M3QCIInput22,
            timelineDefinitionIT6M3QCIBinding117.events,
            timelineDefinitionIT6M3QCIInput24,
            timelineDefinitionIT6M3QCIInput25,
            timelineDefinitionIT6M3QCIInput26,
            timelineDefinitionIT6M3QCIInput28,
          );
        timelineDefinitionIT6M3QCIInput26 -= 100;
        timelineDefinitionIT6M3QCIBinding156
          .append("line")
          .attr("x1", timelineDefinitionIT6M3QCIInput25 + 95)
          .attr(
            "y1",
            timelineDefinitionIT6M3QCIInput26 +
              timelineDefinitionIT6M3QCIInput27,
          )
          .attr("x2", timelineDefinitionIT6M3QCIInput25 + 95)
          .attr(
            "y2",
            timelineDefinitionIT6M3QCIInput26 +
              timelineDefinitionIT6M3QCIInput27 +
              100 +
              timelineDefinitionIT6M3QCIInput30 +
              100,
          )
          .attr("stroke-width", 2)
          .attr("stroke", "black")
          .attr("marker-end", "url(#arrowhead)")
          .attr("stroke-dasharray", "5,5");
      }
      timelineDefinitionIT6M3QCIInput25 += 200;
      timelineDefinitionIT6M3QCIInput32 &&
        !timelineDefinitionIT6M3QCIInput28.timeline?.disableMulticolor &&
        timelineDefinitionIT6M3QCIInput24++;
    }
    timelineDefinitionIT6M3QCIInput26 -= 10;
  }, "drawTasks");
  timelineDefinitionIT6M3QCIBinding38 = defineFunctionName(function (
    timelineDefinitionIT6M3QCIInput64,
    timelineDefinitionIT6M3QCIInput65,
    timelineDefinitionIT6M3QCIInput66,
    timelineDefinitionIT6M3QCIInput67,
    timelineDefinitionIT6M3QCIInput68,
    timelineDefinitionIT6M3QCIInput69,
  ) {
    let timelineDefinitionIT6M3QCIBinding158 = 0,
      timelineDefinitionIT6M3QCIBinding159 = timelineDefinitionIT6M3QCIInput68;
    timelineDefinitionIT6M3QCIInput68 += 100;
    for (let timelineDefinitionIT6M3QCIBinding167 of timelineDefinitionIT6M3QCIInput65) {
      let timelineDefinitionIT6M3QCIBinding168 = {
        descr: timelineDefinitionIT6M3QCIBinding167,
        section: timelineDefinitionIT6M3QCIInput66,
        number: timelineDefinitionIT6M3QCIInput66,
        width: 150,
        padding: 20,
        maxHeight: 50,
      };
      logger.debug("eventNode", timelineDefinitionIT6M3QCIBinding168);
      let timelineDefinitionIT6M3QCIBinding169 =
          timelineDefinitionIT6M3QCIInput64
            .append("g")
            .attr("class", "eventWrapper"),
        timelineDefinitionIT6M3QCIBinding170 =
          timelineDefinitionIT6M3QCIBinding36.drawNode(
            timelineDefinitionIT6M3QCIBinding169,
            timelineDefinitionIT6M3QCIBinding168,
            timelineDefinitionIT6M3QCIInput66,
            timelineDefinitionIT6M3QCIInput69,
          ).height;
      timelineDefinitionIT6M3QCIBinding158 +=
        timelineDefinitionIT6M3QCIBinding170;
      timelineDefinitionIT6M3QCIBinding169.attr(
        "transform",
        `translate(${timelineDefinitionIT6M3QCIInput67}, ${timelineDefinitionIT6M3QCIInput68})`,
      );
      timelineDefinitionIT6M3QCIInput68 =
        timelineDefinitionIT6M3QCIInput68 +
        10 +
        timelineDefinitionIT6M3QCIBinding170;
    }
    return (
      (timelineDefinitionIT6M3QCIInput68 =
        timelineDefinitionIT6M3QCIBinding159),
      timelineDefinitionIT6M3QCIBinding158
    );
  }, "drawEvents");
  timelineDefinitionIT6M3QCIBinding39 = {
    setConf: defineFunctionName(() => {}, "setConf"),
    draw: timelineDefinitionIT6M3QCIBinding37,
  };
  timelineDefinitionIT6M3QCIBinding40 = defineFunctionName(
    (timelineDefinitionIT6M3QCIInput33) => {
      let timelineDefinitionIT6M3QCIBinding116 = "";
      for (
        let timelineDefinitionIT6M3QCIBinding182 = 0;
        timelineDefinitionIT6M3QCIBinding182 <
        timelineDefinitionIT6M3QCIInput33.THEME_COLOR_LIMIT;
        timelineDefinitionIT6M3QCIBinding182++
      ) {
        timelineDefinitionIT6M3QCIInput33[
          "lineColor" + timelineDefinitionIT6M3QCIBinding182
        ] =
          timelineDefinitionIT6M3QCIInput33[
            "lineColor" + timelineDefinitionIT6M3QCIBinding182
          ] ||
          timelineDefinitionIT6M3QCIInput33[
            "cScaleInv" + timelineDefinitionIT6M3QCIBinding182
          ];
        p(
          timelineDefinitionIT6M3QCIInput33[
            "lineColor" + timelineDefinitionIT6M3QCIBinding182
          ],
        )
          ? (timelineDefinitionIT6M3QCIInput33[
              "lineColor" + timelineDefinitionIT6M3QCIBinding182
            ] = d(
              timelineDefinitionIT6M3QCIInput33[
                "lineColor" + timelineDefinitionIT6M3QCIBinding182
              ],
              20,
            ))
          : (timelineDefinitionIT6M3QCIInput33[
              "lineColor" + timelineDefinitionIT6M3QCIBinding182
            ] = c(
              timelineDefinitionIT6M3QCIInput33[
                "lineColor" + timelineDefinitionIT6M3QCIBinding182
              ],
              20,
            ));
      }
      for (
        let timelineDefinitionIT6M3QCIBinding130 = 0;
        timelineDefinitionIT6M3QCIBinding130 <
        timelineDefinitionIT6M3QCIInput33.THEME_COLOR_LIMIT;
        timelineDefinitionIT6M3QCIBinding130++
      ) {
        let timelineDefinitionIT6M3QCIBinding142 =
          "" + (17 - 3 * timelineDefinitionIT6M3QCIBinding130);
        timelineDefinitionIT6M3QCIBinding116 += `
    .section-${timelineDefinitionIT6M3QCIBinding130 - 1} rect, .section-${timelineDefinitionIT6M3QCIBinding130 - 1} path, .section-${timelineDefinitionIT6M3QCIBinding130 - 1} circle, .section-${timelineDefinitionIT6M3QCIBinding130 - 1} path  {
      fill: ${timelineDefinitionIT6M3QCIInput33["cScale" + timelineDefinitionIT6M3QCIBinding130]};
    }
    .section-${timelineDefinitionIT6M3QCIBinding130 - 1} text {
     fill: ${timelineDefinitionIT6M3QCIInput33["cScaleLabel" + timelineDefinitionIT6M3QCIBinding130]};
    }
    .node-icon-${timelineDefinitionIT6M3QCIBinding130 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionIT6M3QCIInput33["cScaleLabel" + timelineDefinitionIT6M3QCIBinding130]};
    }
    .section-edge-${timelineDefinitionIT6M3QCIBinding130 - 1}{
      stroke: ${timelineDefinitionIT6M3QCIInput33["cScale" + timelineDefinitionIT6M3QCIBinding130]};
    }
    .edge-depth-${timelineDefinitionIT6M3QCIBinding130 - 1}{
      stroke-width: ${timelineDefinitionIT6M3QCIBinding142};
    }
    .section-${timelineDefinitionIT6M3QCIBinding130 - 1} line {
      stroke: ${timelineDefinitionIT6M3QCIInput33["cScaleInv" + timelineDefinitionIT6M3QCIBinding130]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${timelineDefinitionIT6M3QCIInput33["cScaleLabel" + timelineDefinitionIT6M3QCIBinding130]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
      }
      return timelineDefinitionIT6M3QCIBinding116;
    },
    "genSections",
  );
  TimelineDefinitionIT6M3QCI = {
    db: timelineDefinitionIT6M3QCIBinding3,
    renderer: timelineDefinitionIT6M3QCIBinding39,
    parser: timelineDefinitionIT6M3QCIBinding2,
    styles: defineFunctionName(
      (timelineDefinitionIT6M3QCIInput81) => `
  .edge {
    stroke-width: 3;
  }
  ${timelineDefinitionIT6M3QCIBinding40(timelineDefinitionIT6M3QCIInput81)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${timelineDefinitionIT6M3QCIInput81.git0};
  }
  .section-root text {
    fill: ${timelineDefinitionIT6M3QCIInput81.gitBranchLabel0};
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`,
      "getStyles",
    ),
  };
})();
export { TimelineDefinitionIT6M3QCI as diagram };
