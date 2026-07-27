// Restored from ref/webview/assets/timeline-definition-GMOUNBTQ-CuJ1KWYr.js
// Mermaid timeline diagram definition alt (db + renderer + parser).
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
import { c, d, p, t } from "../../vendor/khroma";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
  defineEnumerableGetters,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  A,
  b,
  o,
  q,
  y,
} from "../../diagrams/mermaid-config-alt";
import { n, t as chunk426QAEUCT } from "../../diagrams/select-svg-element-alt";
import { chunk5PVQY5BWP, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
function timelineDefinitionGMOUNBTQHelper1(
  timelineDefinitionGMOUNBTQInput58,
  timelineDefinitionGMOUNBTQInput59,
) {
  timelineDefinitionGMOUNBTQInput58.each(function () {
    var timelineDefinitionGMOUNBTQBinding193 = select(this),
      timelineDefinitionGMOUNBTQBinding194 =
        timelineDefinitionGMOUNBTQBinding193
          .text()
          .split(/(\s+|<br>)/)
          .reverse(),
      timelineDefinitionGMOUNBTQBinding195,
      timelineDefinitionGMOUNBTQBinding196 = [],
      timelineDefinitionGMOUNBTQBinding198 =
        timelineDefinitionGMOUNBTQBinding193.attr("y"),
      timelineDefinitionGMOUNBTQBinding199 = parseFloat(
        timelineDefinitionGMOUNBTQBinding193.attr("dy"),
      ),
      timelineDefinitionGMOUNBTQBinding200 =
        timelineDefinitionGMOUNBTQBinding193
          .text(null)
          .append("tspan")
          .attr("x", 0)
          .attr("y", timelineDefinitionGMOUNBTQBinding198)
          .attr("dy", timelineDefinitionGMOUNBTQBinding199 + "em");
    for (
      let timelineDefinitionGMOUNBTQBinding258 = 0;
      timelineDefinitionGMOUNBTQBinding258 <
      timelineDefinitionGMOUNBTQBinding194.length;
      timelineDefinitionGMOUNBTQBinding258++
    ) {
      timelineDefinitionGMOUNBTQBinding195 =
        timelineDefinitionGMOUNBTQBinding194[
          timelineDefinitionGMOUNBTQBinding194.length -
            1 -
            timelineDefinitionGMOUNBTQBinding258
        ];
      timelineDefinitionGMOUNBTQBinding196.push(
        timelineDefinitionGMOUNBTQBinding195,
      );
      timelineDefinitionGMOUNBTQBinding200.text(
        timelineDefinitionGMOUNBTQBinding196.join(" ").trim(),
      );
      (timelineDefinitionGMOUNBTQBinding200.node().getComputedTextLength() >
        timelineDefinitionGMOUNBTQInput59 ||
        timelineDefinitionGMOUNBTQBinding195 === "<br>") &&
        (timelineDefinitionGMOUNBTQBinding196.pop(),
        timelineDefinitionGMOUNBTQBinding200.text(
          timelineDefinitionGMOUNBTQBinding196.join(" ").trim(),
        ),
        (timelineDefinitionGMOUNBTQBinding196 =
          timelineDefinitionGMOUNBTQBinding195 === "<br>"
            ? [""]
            : [timelineDefinitionGMOUNBTQBinding195]),
        (timelineDefinitionGMOUNBTQBinding200 =
          timelineDefinitionGMOUNBTQBinding193
            .append("tspan")
            .attr("x", 0)
            .attr("y", timelineDefinitionGMOUNBTQBinding198)
            .attr("dy", "1.1em")
            .text(timelineDefinitionGMOUNBTQBinding195)));
    }
  });
}
var timelineDefinitionGMOUNBTQBinding1,
  timelineDefinitionGMOUNBTQBinding2,
  timelineDefinitionGMOUNBTQBinding3,
  timelineDefinitionGMOUNBTQBinding4,
  timelineDefinitionGMOUNBTQBinding5,
  timelineDefinitionGMOUNBTQBinding6,
  timelineDefinitionGMOUNBTQBinding7,
  timelineDefinitionGMOUNBTQBinding8,
  timelineDefinitionGMOUNBTQBinding9,
  timelineDefinitionGMOUNBTQBinding10,
  timelineDefinitionGMOUNBTQBinding11,
  timelineDefinitionGMOUNBTQBinding12,
  timelineDefinitionGMOUNBTQBinding13,
  timelineDefinitionGMOUNBTQBinding14,
  timelineDefinitionGMOUNBTQBinding15,
  timelineDefinitionGMOUNBTQBinding16,
  timelineDefinitionGMOUNBTQBinding17,
  timelineDefinitionGMOUNBTQBinding18,
  timelineDefinitionGMOUNBTQBinding19,
  timelineDefinitionGMOUNBTQBinding20,
  timelineDefinitionGMOUNBTQBinding21,
  timelineDefinitionGMOUNBTQBinding22,
  timelineDefinitionGMOUNBTQBinding23,
  timelineDefinitionGMOUNBTQBinding24,
  timelineDefinitionGMOUNBTQBinding25,
  timelineDefinitionGMOUNBTQBinding26,
  timelineDefinitionGMOUNBTQBinding27,
  timelineDefinitionGMOUNBTQBinding28,
  timelineDefinitionGMOUNBTQBinding29,
  timelineDefinitionGMOUNBTQBinding30,
  timelineDefinitionGMOUNBTQBinding31,
  timelineDefinitionGMOUNBTQBinding32,
  timelineDefinitionGMOUNBTQBinding33,
  timelineDefinitionGMOUNBTQBinding34,
  timelineDefinitionGMOUNBTQBinding35,
  timelineDefinitionGMOUNBTQBinding36,
  timelineDefinitionGMOUNBTQBinding37,
  timelineDefinitionGMOUNBTQBinding38,
  timelineDefinitionGMOUNBTQBinding39,
  timelineDefinitionGMOUNBTQBinding40,
  timelineDefinitionGMOUNBTQBinding41,
  timelineDefinitionGMOUNBTQBinding42,
  timelineDefinitionGMOUNBTQBinding43,
  timelineDefinitionGMOUNBTQBinding44,
  timelineDefinitionGMOUNBTQBinding45,
  timelineDefinitionGMOUNBTQBinding46,
  timelineDefinitionGMOUNBTQBinding47,
  _e,
  $,
  timelineDefinitionGMOUNBTQBinding48,
  timelineDefinitionGMOUNBTQBinding49,
  be,
  timelineDefinitionGMOUNBTQBinding50,
  timelineDefinitionGMOUNBTQBinding51,
  timelineDefinitionGMOUNBTQBinding52,
  timelineDefinitionGMOUNBTQBinding53,
  timelineDefinitionGMOUNBTQBinding54,
  timelineDefinitionGMOUNBTQBinding55,
  timelineDefinitionGMOUNBTQBinding56,
  timelineDefinitionGMOUNBTQBinding57,
  TimelineDefinitionGMOUNBTQ;
esmInit(() => {
  chunk426QAEUCT();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  t();
  timelineDefinitionGMOUNBTQBinding1 = (function () {
    var timelineDefinitionGMOUNBTQBinding58 = defineFunctionName(function (
        timelineDefinitionGMOUNBTQInput148,
        timelineDefinitionGMOUNBTQInput149,
        timelineDefinitionGMOUNBTQInput150,
        timelineDefinitionGMOUNBTQInput151,
      ) {
        for (
          timelineDefinitionGMOUNBTQInput150 ||= {},
            timelineDefinitionGMOUNBTQInput151 =
              timelineDefinitionGMOUNBTQInput148.length;
          timelineDefinitionGMOUNBTQInput151--;
          timelineDefinitionGMOUNBTQInput150[
            timelineDefinitionGMOUNBTQInput148[
              timelineDefinitionGMOUNBTQInput151
            ]
          ] = timelineDefinitionGMOUNBTQInput149
        );
        return timelineDefinitionGMOUNBTQInput150;
      }, "o"),
      timelineDefinitionGMOUNBTQBinding59 = [
        6, 11, 13, 14, 15, 17, 19, 20, 23, 24,
      ],
      timelineDefinitionGMOUNBTQBinding60 = [1, 12],
      timelineDefinitionGMOUNBTQBinding61 = [1, 13],
      timelineDefinitionGMOUNBTQBinding62 = [1, 14],
      timelineDefinitionGMOUNBTQBinding63 = [1, 15],
      timelineDefinitionGMOUNBTQBinding64 = [1, 16],
      timelineDefinitionGMOUNBTQBinding65 = [1, 19],
      timelineDefinitionGMOUNBTQBinding66 = [1, 20],
      timelineDefinitionGMOUNBTQBinding67 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          timeline_header: 4,
          document: 5,
          EOF: 6,
          timeline: 7,
          timeline_lr: 8,
          timeline_td: 9,
          line: 10,
          SPACE: 11,
          statement: 12,
          NEWLINE: 13,
          title: 14,
          acc_title: 15,
          acc_title_value: 16,
          acc_descr: 17,
          acc_descr_value: 18,
          acc_descr_multiline_value: 19,
          section: 20,
          period_statement: 21,
          event_statement: 22,
          period: 23,
          event: 24,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          6: "EOF",
          7: "timeline",
          8: "timeline_lr",
          9: "timeline_td",
          11: "SPACE",
          13: "NEWLINE",
          14: "title",
          15: "acc_title",
          16: "acc_title_value",
          17: "acc_descr",
          18: "acc_descr_value",
          19: "acc_descr_multiline_value",
          20: "section",
          23: "period",
          24: "event",
        },
        productions_: [
          0,
          [3, 3],
          [4, 1],
          [4, 1],
          [4, 1],
          [5, 0],
          [5, 2],
          [10, 2],
          [10, 1],
          [10, 1],
          [10, 1],
          [12, 1],
          [12, 2],
          [12, 2],
          [12, 1],
          [12, 1],
          [12, 1],
          [12, 1],
          [21, 1],
          [22, 1],
        ],
        performAction: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput20,
          timelineDefinitionGMOUNBTQInput21,
          timelineDefinitionGMOUNBTQInput22,
          timelineDefinitionGMOUNBTQInput23,
          timelineDefinitionGMOUNBTQInput24,
          timelineDefinitionGMOUNBTQInput25,
          timelineDefinitionGMOUNBTQInput26,
        ) {
          var timelineDefinitionGMOUNBTQBinding155 =
            timelineDefinitionGMOUNBTQInput25.length - 1;
          switch (timelineDefinitionGMOUNBTQInput24) {
            case 1:
              return timelineDefinitionGMOUNBTQInput25[
                timelineDefinitionGMOUNBTQBinding155 - 1
              ];
            case 3:
              timelineDefinitionGMOUNBTQInput23.setDirection("LR");
              break;
            case 4:
              timelineDefinitionGMOUNBTQInput23.setDirection("TD");
              break;
            case 5:
              this.$ = [];
              break;
            case 6:
              timelineDefinitionGMOUNBTQInput25[
                timelineDefinitionGMOUNBTQBinding155 - 1
              ].push(
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ],
              );
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155 - 1
                ];
              break;
            case 7:
            case 8:
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ];
              break;
            case 9:
            case 10:
              this.$ = [];
              break;
            case 11:
              timelineDefinitionGMOUNBTQInput23
                .getCommonDb()
                .setDiagramTitle(
                  timelineDefinitionGMOUNBTQInput25[
                    timelineDefinitionGMOUNBTQBinding155
                  ].substr(6),
                );
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].substr(6);
              break;
            case 12:
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].trim();
              timelineDefinitionGMOUNBTQInput23
                .getCommonDb()
                .setAccTitle(this.$);
              break;
            case 13:
            case 14:
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].trim();
              timelineDefinitionGMOUNBTQInput23
                .getCommonDb()
                .setAccDescription(this.$);
              break;
            case 15:
              timelineDefinitionGMOUNBTQInput23.addSection(
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].substr(8),
              );
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].substr(8);
              break;
            case 18:
              timelineDefinitionGMOUNBTQInput23.addTask(
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ],
                0,
                "",
              );
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ];
              break;
            case 19:
              timelineDefinitionGMOUNBTQInput23.addEvent(
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ].substr(2),
              );
              this.$ =
                timelineDefinitionGMOUNBTQInput25[
                  timelineDefinitionGMOUNBTQBinding155
                ];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            7: [1, 3],
            8: [1, 4],
            9: [1, 5],
          },
          {
            1: [3],
          },
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 5],
            {
              5: 6,
            },
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 2],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 3],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 4],
          ),
          {
            6: [1, 7],
            10: 8,
            11: [1, 9],
            12: 10,
            13: [1, 11],
            14: timelineDefinitionGMOUNBTQBinding60,
            15: timelineDefinitionGMOUNBTQBinding61,
            17: timelineDefinitionGMOUNBTQBinding62,
            19: timelineDefinitionGMOUNBTQBinding63,
            20: timelineDefinitionGMOUNBTQBinding64,
            21: 17,
            22: 18,
            23: timelineDefinitionGMOUNBTQBinding65,
            24: timelineDefinitionGMOUNBTQBinding66,
          },
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 10],
            {
              1: [2, 1],
            },
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 6],
          ),
          {
            12: 21,
            14: timelineDefinitionGMOUNBTQBinding60,
            15: timelineDefinitionGMOUNBTQBinding61,
            17: timelineDefinitionGMOUNBTQBinding62,
            19: timelineDefinitionGMOUNBTQBinding63,
            20: timelineDefinitionGMOUNBTQBinding64,
            21: 17,
            22: 18,
            23: timelineDefinitionGMOUNBTQBinding65,
            24: timelineDefinitionGMOUNBTQBinding66,
          },
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 8],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 9],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 11],
          ),
          {
            16: [1, 22],
          },
          {
            18: [1, 23],
          },
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 14],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 15],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 16],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 17],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 18],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 19],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 7],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 12],
          ),
          timelineDefinitionGMOUNBTQBinding58(
            timelineDefinitionGMOUNBTQBinding59,
            [2, 13],
          ),
        ],
        defaultActions: {},
        parseError: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput138,
          timelineDefinitionGMOUNBTQInput139,
        ) {
          if (timelineDefinitionGMOUNBTQInput139.recoverable)
            this.trace(timelineDefinitionGMOUNBTQInput138);
          else {
            var timelineDefinitionGMOUNBTQBinding288 = Error(
              timelineDefinitionGMOUNBTQInput138,
            );
            throw (
              (timelineDefinitionGMOUNBTQBinding288.hash =
                timelineDefinitionGMOUNBTQInput139),
              timelineDefinitionGMOUNBTQBinding288
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (timelineDefinitionGMOUNBTQInput1) {
          var timelineDefinitionGMOUNBTQBinding68 = this,
            timelineDefinitionGMOUNBTQBinding69 = [0],
            timelineDefinitionGMOUNBTQBinding70 = [],
            timelineDefinitionGMOUNBTQBinding71 = [null],
            timelineDefinitionGMOUNBTQBinding72 = [],
            timelineDefinitionGMOUNBTQBinding73 = this.table,
            timelineDefinitionGMOUNBTQBinding74 = "",
            timelineDefinitionGMOUNBTQBinding75 = 0,
            timelineDefinitionGMOUNBTQBinding76 = 0,
            timelineDefinitionGMOUNBTQBinding77 = 0,
            timelineDefinitionGMOUNBTQBinding80 =
              timelineDefinitionGMOUNBTQBinding72.slice.call(arguments, 1),
            timelineDefinitionGMOUNBTQBinding81 = Object.create(this.lexer),
            timelineDefinitionGMOUNBTQBinding82 = {
              yy: {},
            };
          for (var timelineDefinitionGMOUNBTQBinding83 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              timelineDefinitionGMOUNBTQBinding83,
            ) &&
              (timelineDefinitionGMOUNBTQBinding82.yy[
                timelineDefinitionGMOUNBTQBinding83
              ] = this.yy[timelineDefinitionGMOUNBTQBinding83]);
          timelineDefinitionGMOUNBTQBinding81.setInput(
            timelineDefinitionGMOUNBTQInput1,
            timelineDefinitionGMOUNBTQBinding82.yy,
          );
          timelineDefinitionGMOUNBTQBinding82.yy.lexer =
            timelineDefinitionGMOUNBTQBinding81;
          timelineDefinitionGMOUNBTQBinding82.yy.parser = this;
          timelineDefinitionGMOUNBTQBinding81.yylloc === undefined &&
            (timelineDefinitionGMOUNBTQBinding81.yylloc = {});
          var timelineDefinitionGMOUNBTQBinding84 =
            timelineDefinitionGMOUNBTQBinding81.yylloc;
          timelineDefinitionGMOUNBTQBinding72.push(
            timelineDefinitionGMOUNBTQBinding84,
          );
          var timelineDefinitionGMOUNBTQBinding85 =
            timelineDefinitionGMOUNBTQBinding81.options &&
            timelineDefinitionGMOUNBTQBinding81.options.ranges;
          typeof timelineDefinitionGMOUNBTQBinding82.yy.parseError == "function"
            ? (this.parseError =
                timelineDefinitionGMOUNBTQBinding82.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function timelineDefinitionGMOUNBTQHelper3(
            timelineDefinitionGMOUNBTQInput152,
          ) {
            timelineDefinitionGMOUNBTQBinding69.length -=
              2 * timelineDefinitionGMOUNBTQInput152;
            timelineDefinitionGMOUNBTQBinding71.length -=
              timelineDefinitionGMOUNBTQInput152;
            timelineDefinitionGMOUNBTQBinding72.length -=
              timelineDefinitionGMOUNBTQInput152;
          }
          defineFunctionName(timelineDefinitionGMOUNBTQHelper3, "popStack");
          function timelineDefinitionGMOUNBTQHelper4() {
            var timelineDefinitionGMOUNBTQBinding276 =
              timelineDefinitionGMOUNBTQBinding70.pop() ||
              timelineDefinitionGMOUNBTQBinding81.lex() ||
              1;
            return (
              typeof timelineDefinitionGMOUNBTQBinding276 != "number" &&
                (timelineDefinitionGMOUNBTQBinding276 instanceof Array &&
                  ((timelineDefinitionGMOUNBTQBinding70 =
                    timelineDefinitionGMOUNBTQBinding276),
                  (timelineDefinitionGMOUNBTQBinding276 =
                    timelineDefinitionGMOUNBTQBinding70.pop())),
                (timelineDefinitionGMOUNBTQBinding276 =
                  timelineDefinitionGMOUNBTQBinding68.symbols_[
                    timelineDefinitionGMOUNBTQBinding276
                  ] || timelineDefinitionGMOUNBTQBinding276)),
              timelineDefinitionGMOUNBTQBinding276
            );
          }
          defineFunctionName(timelineDefinitionGMOUNBTQHelper4, "lex");
          for (
            var timelineDefinitionGMOUNBTQBinding86,
              timelineDefinitionGMOUNBTQBinding87,
              timelineDefinitionGMOUNBTQBinding88,
              timelineDefinitionGMOUNBTQBinding89,
              timelineDefinitionGMOUNBTQBinding90,
              timelineDefinitionGMOUNBTQBinding91 = {},
              timelineDefinitionGMOUNBTQBinding92,
              timelineDefinitionGMOUNBTQBinding93,
              timelineDefinitionGMOUNBTQBinding94,
              timelineDefinitionGMOUNBTQBinding95;
            ;
          ) {
            if (
              ((timelineDefinitionGMOUNBTQBinding88 =
                timelineDefinitionGMOUNBTQBinding69[
                  timelineDefinitionGMOUNBTQBinding69.length - 1
                ]),
              this.defaultActions[timelineDefinitionGMOUNBTQBinding88]
                ? (timelineDefinitionGMOUNBTQBinding89 =
                    this.defaultActions[timelineDefinitionGMOUNBTQBinding88])
                : ((timelineDefinitionGMOUNBTQBinding86 ??=
                    timelineDefinitionGMOUNBTQHelper4()),
                  (timelineDefinitionGMOUNBTQBinding89 =
                    timelineDefinitionGMOUNBTQBinding73[
                      timelineDefinitionGMOUNBTQBinding88
                    ] &&
                    timelineDefinitionGMOUNBTQBinding73[
                      timelineDefinitionGMOUNBTQBinding88
                    ][timelineDefinitionGMOUNBTQBinding86])),
              timelineDefinitionGMOUNBTQBinding89 === undefined ||
                !timelineDefinitionGMOUNBTQBinding89.length ||
                !timelineDefinitionGMOUNBTQBinding89[0])
            ) {
              var timelineDefinitionGMOUNBTQBinding96 = "";
              for (timelineDefinitionGMOUNBTQBinding92 in ((timelineDefinitionGMOUNBTQBinding95 =
                []),
              timelineDefinitionGMOUNBTQBinding73[
                timelineDefinitionGMOUNBTQBinding88
              ]))
                this.terminals_[timelineDefinitionGMOUNBTQBinding92] &&
                  timelineDefinitionGMOUNBTQBinding92 > 2 &&
                  timelineDefinitionGMOUNBTQBinding95.push(
                    "'" +
                      this.terminals_[timelineDefinitionGMOUNBTQBinding92] +
                      "'",
                  );
              timelineDefinitionGMOUNBTQBinding96 =
                timelineDefinitionGMOUNBTQBinding81.showPosition
                  ? "Parse error on line " +
                    (timelineDefinitionGMOUNBTQBinding75 + 1) +
                    ":\n" +
                    timelineDefinitionGMOUNBTQBinding81.showPosition() +
                    "\nExpecting " +
                    timelineDefinitionGMOUNBTQBinding95.join(", ") +
                    ", got '" +
                    (this.terminals_[timelineDefinitionGMOUNBTQBinding86] ||
                      timelineDefinitionGMOUNBTQBinding86) +
                    "'"
                  : "Parse error on line " +
                    (timelineDefinitionGMOUNBTQBinding75 + 1) +
                    ": Unexpected " +
                    (timelineDefinitionGMOUNBTQBinding86 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[timelineDefinitionGMOUNBTQBinding86] ||
                          timelineDefinitionGMOUNBTQBinding86) +
                        "'");
              this.parseError(timelineDefinitionGMOUNBTQBinding96, {
                text: timelineDefinitionGMOUNBTQBinding81.match,
                token:
                  this.terminals_[timelineDefinitionGMOUNBTQBinding86] ||
                  timelineDefinitionGMOUNBTQBinding86,
                line: timelineDefinitionGMOUNBTQBinding81.yylineno,
                loc: timelineDefinitionGMOUNBTQBinding84,
                expected: timelineDefinitionGMOUNBTQBinding95,
              });
            }
            if (
              timelineDefinitionGMOUNBTQBinding89[0] instanceof Array &&
              timelineDefinitionGMOUNBTQBinding89.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  timelineDefinitionGMOUNBTQBinding88 +
                  ", token: " +
                  timelineDefinitionGMOUNBTQBinding86,
              );
            switch (timelineDefinitionGMOUNBTQBinding89[0]) {
              case 1:
                timelineDefinitionGMOUNBTQBinding69.push(
                  timelineDefinitionGMOUNBTQBinding86,
                );
                timelineDefinitionGMOUNBTQBinding71.push(
                  timelineDefinitionGMOUNBTQBinding81.yytext,
                );
                timelineDefinitionGMOUNBTQBinding72.push(
                  timelineDefinitionGMOUNBTQBinding81.yylloc,
                );
                timelineDefinitionGMOUNBTQBinding69.push(
                  timelineDefinitionGMOUNBTQBinding89[1],
                );
                timelineDefinitionGMOUNBTQBinding86 = null;
                timelineDefinitionGMOUNBTQBinding87
                  ? ((timelineDefinitionGMOUNBTQBinding86 =
                      timelineDefinitionGMOUNBTQBinding87),
                    (timelineDefinitionGMOUNBTQBinding87 = null))
                  : ((timelineDefinitionGMOUNBTQBinding76 =
                      timelineDefinitionGMOUNBTQBinding81.yyleng),
                    (timelineDefinitionGMOUNBTQBinding74 =
                      timelineDefinitionGMOUNBTQBinding81.yytext),
                    (timelineDefinitionGMOUNBTQBinding75 =
                      timelineDefinitionGMOUNBTQBinding81.yylineno),
                    (timelineDefinitionGMOUNBTQBinding84 =
                      timelineDefinitionGMOUNBTQBinding81.yylloc),
                    timelineDefinitionGMOUNBTQBinding77 > 0 &&
                      timelineDefinitionGMOUNBTQBinding77--);
                break;
              case 2:
                if (
                  ((timelineDefinitionGMOUNBTQBinding93 =
                    this.productions_[
                      timelineDefinitionGMOUNBTQBinding89[1]
                    ][1]),
                  (timelineDefinitionGMOUNBTQBinding91.$ =
                    timelineDefinitionGMOUNBTQBinding71[
                      timelineDefinitionGMOUNBTQBinding71.length -
                        timelineDefinitionGMOUNBTQBinding93
                    ]),
                  (timelineDefinitionGMOUNBTQBinding91._$ = {
                    first_line:
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length -
                          (timelineDefinitionGMOUNBTQBinding93 || 1)
                      ].first_line,
                    last_line:
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length - 1
                      ].last_line,
                    first_column:
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length -
                          (timelineDefinitionGMOUNBTQBinding93 || 1)
                      ].first_column,
                    last_column:
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length - 1
                      ].last_column,
                  }),
                  timelineDefinitionGMOUNBTQBinding85 &&
                    (timelineDefinitionGMOUNBTQBinding91._$.range = [
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length -
                          (timelineDefinitionGMOUNBTQBinding93 || 1)
                      ].range[0],
                      timelineDefinitionGMOUNBTQBinding72[
                        timelineDefinitionGMOUNBTQBinding72.length - 1
                      ].range[1],
                    ]),
                  (timelineDefinitionGMOUNBTQBinding90 =
                    this.performAction.apply(
                      timelineDefinitionGMOUNBTQBinding91,
                      [
                        timelineDefinitionGMOUNBTQBinding74,
                        timelineDefinitionGMOUNBTQBinding76,
                        timelineDefinitionGMOUNBTQBinding75,
                        timelineDefinitionGMOUNBTQBinding82.yy,
                        timelineDefinitionGMOUNBTQBinding89[1],
                        timelineDefinitionGMOUNBTQBinding71,
                        timelineDefinitionGMOUNBTQBinding72,
                      ].concat(timelineDefinitionGMOUNBTQBinding80),
                    )),
                  timelineDefinitionGMOUNBTQBinding90 !== undefined)
                )
                  return timelineDefinitionGMOUNBTQBinding90;
                timelineDefinitionGMOUNBTQBinding93 &&
                  ((timelineDefinitionGMOUNBTQBinding69 =
                    timelineDefinitionGMOUNBTQBinding69.slice(
                      0,
                      -1 * timelineDefinitionGMOUNBTQBinding93 * 2,
                    )),
                  (timelineDefinitionGMOUNBTQBinding71 =
                    timelineDefinitionGMOUNBTQBinding71.slice(
                      0,
                      -1 * timelineDefinitionGMOUNBTQBinding93,
                    )),
                  (timelineDefinitionGMOUNBTQBinding72 =
                    timelineDefinitionGMOUNBTQBinding72.slice(
                      0,
                      -1 * timelineDefinitionGMOUNBTQBinding93,
                    )));
                timelineDefinitionGMOUNBTQBinding69.push(
                  this.productions_[timelineDefinitionGMOUNBTQBinding89[1]][0],
                );
                timelineDefinitionGMOUNBTQBinding71.push(
                  timelineDefinitionGMOUNBTQBinding91.$,
                );
                timelineDefinitionGMOUNBTQBinding72.push(
                  timelineDefinitionGMOUNBTQBinding91._$,
                );
                timelineDefinitionGMOUNBTQBinding94 =
                  timelineDefinitionGMOUNBTQBinding73[
                    timelineDefinitionGMOUNBTQBinding69[
                      timelineDefinitionGMOUNBTQBinding69.length - 2
                    ]
                  ][
                    timelineDefinitionGMOUNBTQBinding69[
                      timelineDefinitionGMOUNBTQBinding69.length - 1
                    ]
                  ];
                timelineDefinitionGMOUNBTQBinding69.push(
                  timelineDefinitionGMOUNBTQBinding94,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    timelineDefinitionGMOUNBTQBinding67.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput145,
          timelineDefinitionGMOUNBTQInput146,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              timelineDefinitionGMOUNBTQInput145,
              timelineDefinitionGMOUNBTQInput146,
            );
          else throw Error(timelineDefinitionGMOUNBTQInput145);
        }, "parseError"),
        setInput: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput91,
          timelineDefinitionGMOUNBTQInput92,
        ) {
          return (
            (this.yy = timelineDefinitionGMOUNBTQInput92 || this.yy || {}),
            (this._input = timelineDefinitionGMOUNBTQInput91),
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
          var timelineDefinitionGMOUNBTQBinding253 = this._input[0];
          return (
            (this.yytext += timelineDefinitionGMOUNBTQBinding253),
            this.yyleng++,
            this.offset++,
            (this.match += timelineDefinitionGMOUNBTQBinding253),
            (this.matched += timelineDefinitionGMOUNBTQBinding253),
            timelineDefinitionGMOUNBTQBinding253.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            timelineDefinitionGMOUNBTQBinding253
          );
        }, "input"),
        unput: defineFunctionName(function (timelineDefinitionGMOUNBTQInput45) {
          var timelineDefinitionGMOUNBTQBinding168 =
              timelineDefinitionGMOUNBTQInput45.length,
            timelineDefinitionGMOUNBTQBinding169 =
              timelineDefinitionGMOUNBTQInput45.split(/(?:\r\n?|\n)/g);
          this._input = timelineDefinitionGMOUNBTQInput45 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - timelineDefinitionGMOUNBTQBinding168,
          );
          this.offset -= timelineDefinitionGMOUNBTQBinding168;
          var timelineDefinitionGMOUNBTQBinding170 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          timelineDefinitionGMOUNBTQBinding169.length - 1 &&
            (this.yylineno -= timelineDefinitionGMOUNBTQBinding169.length - 1);
          var timelineDefinitionGMOUNBTQBinding171 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: timelineDefinitionGMOUNBTQBinding169
                ? (timelineDefinitionGMOUNBTQBinding169.length ===
                  timelineDefinitionGMOUNBTQBinding170.length
                    ? this.yylloc.first_column
                    : 0) +
                  timelineDefinitionGMOUNBTQBinding170[
                    timelineDefinitionGMOUNBTQBinding170.length -
                      timelineDefinitionGMOUNBTQBinding169.length
                  ].length -
                  timelineDefinitionGMOUNBTQBinding169[0].length
                : this.yylloc.first_column -
                  timelineDefinitionGMOUNBTQBinding168,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                timelineDefinitionGMOUNBTQBinding171[0],
                timelineDefinitionGMOUNBTQBinding171[0] +
                  this.yyleng -
                  timelineDefinitionGMOUNBTQBinding168,
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
        less: defineFunctionName(function (timelineDefinitionGMOUNBTQInput156) {
          this.unput(this.match.slice(timelineDefinitionGMOUNBTQInput156));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var timelineDefinitionGMOUNBTQBinding280 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (timelineDefinitionGMOUNBTQBinding280.length > 20 ? "..." : "") +
            timelineDefinitionGMOUNBTQBinding280.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var timelineDefinitionGMOUNBTQBinding275 = this.match;
          return (
            timelineDefinitionGMOUNBTQBinding275.length < 20 &&
              (timelineDefinitionGMOUNBTQBinding275 += this._input.substr(
                0,
                20 - timelineDefinitionGMOUNBTQBinding275.length,
              )),
            (
              timelineDefinitionGMOUNBTQBinding275.substr(0, 20) +
              (timelineDefinitionGMOUNBTQBinding275.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var timelineDefinitionGMOUNBTQBinding281 = this.pastInput(),
            timelineDefinitionGMOUNBTQBinding282 = Array(
              timelineDefinitionGMOUNBTQBinding281.length + 1,
            ).join("-");
          return (
            timelineDefinitionGMOUNBTQBinding281 +
            this.upcomingInput() +
            "\n" +
            timelineDefinitionGMOUNBTQBinding282 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput10,
          timelineDefinitionGMOUNBTQInput11,
        ) {
          var timelineDefinitionGMOUNBTQBinding142,
            timelineDefinitionGMOUNBTQBinding143,
            timelineDefinitionGMOUNBTQBinding144;
          if (
            (this.options.backtrack_lexer &&
              ((timelineDefinitionGMOUNBTQBinding144 = {
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
                (timelineDefinitionGMOUNBTQBinding144.yylloc.range =
                  this.yylloc.range.slice(0))),
            (timelineDefinitionGMOUNBTQBinding143 =
              timelineDefinitionGMOUNBTQInput10[0].match(/(?:\r\n?|\n).*/g)),
            timelineDefinitionGMOUNBTQBinding143 &&
              (this.yylineno += timelineDefinitionGMOUNBTQBinding143.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: timelineDefinitionGMOUNBTQBinding143
                ? timelineDefinitionGMOUNBTQBinding143[
                    timelineDefinitionGMOUNBTQBinding143.length - 1
                  ].length -
                  timelineDefinitionGMOUNBTQBinding143[
                    timelineDefinitionGMOUNBTQBinding143.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  timelineDefinitionGMOUNBTQInput10[0].length,
            }),
            (this.yytext += timelineDefinitionGMOUNBTQInput10[0]),
            (this.match += timelineDefinitionGMOUNBTQInput10[0]),
            (this.matches = timelineDefinitionGMOUNBTQInput10),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              timelineDefinitionGMOUNBTQInput10[0].length,
            )),
            (this.matched += timelineDefinitionGMOUNBTQInput10[0]),
            (timelineDefinitionGMOUNBTQBinding142 = this.performAction.call(
              this,
              this.yy,
              this,
              timelineDefinitionGMOUNBTQInput11,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            timelineDefinitionGMOUNBTQBinding142)
          )
            return timelineDefinitionGMOUNBTQBinding142;
          if (this._backtrack) {
            for (var timelineDefinitionGMOUNBTQBinding145 in timelineDefinitionGMOUNBTQBinding144)
              this[timelineDefinitionGMOUNBTQBinding145] =
                timelineDefinitionGMOUNBTQBinding144[
                  timelineDefinitionGMOUNBTQBinding145
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var timelineDefinitionGMOUNBTQBinding161,
            timelineDefinitionGMOUNBTQBinding162,
            timelineDefinitionGMOUNBTQBinding163,
            timelineDefinitionGMOUNBTQBinding164;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var timelineDefinitionGMOUNBTQBinding165 = this._currentRules(),
              timelineDefinitionGMOUNBTQBinding166 = 0;
            timelineDefinitionGMOUNBTQBinding166 <
            timelineDefinitionGMOUNBTQBinding165.length;
            timelineDefinitionGMOUNBTQBinding166++
          )
            if (
              ((timelineDefinitionGMOUNBTQBinding163 = this._input.match(
                this.rules[
                  timelineDefinitionGMOUNBTQBinding165[
                    timelineDefinitionGMOUNBTQBinding166
                  ]
                ],
              )),
              timelineDefinitionGMOUNBTQBinding163 &&
                (!timelineDefinitionGMOUNBTQBinding162 ||
                  timelineDefinitionGMOUNBTQBinding163[0].length >
                    timelineDefinitionGMOUNBTQBinding162[0].length))
            ) {
              if (
                ((timelineDefinitionGMOUNBTQBinding162 =
                  timelineDefinitionGMOUNBTQBinding163),
                (timelineDefinitionGMOUNBTQBinding164 =
                  timelineDefinitionGMOUNBTQBinding166),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((timelineDefinitionGMOUNBTQBinding161 = this.test_match(
                    timelineDefinitionGMOUNBTQBinding163,
                    timelineDefinitionGMOUNBTQBinding165[
                      timelineDefinitionGMOUNBTQBinding166
                    ],
                  )),
                  timelineDefinitionGMOUNBTQBinding161 !== false)
                )
                  return timelineDefinitionGMOUNBTQBinding161;
                if (this._backtrack) {
                  timelineDefinitionGMOUNBTQBinding162 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return timelineDefinitionGMOUNBTQBinding162
            ? ((timelineDefinitionGMOUNBTQBinding161 = this.test_match(
                timelineDefinitionGMOUNBTQBinding162,
                timelineDefinitionGMOUNBTQBinding165[
                  timelineDefinitionGMOUNBTQBinding164
                ],
              )),
              timelineDefinitionGMOUNBTQBinding161 === false
                ? false
                : timelineDefinitionGMOUNBTQBinding161)
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
          timelineDefinitionGMOUNBTQInput157,
        ) {
          this.conditionStack.push(timelineDefinitionGMOUNBTQInput157);
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
          timelineDefinitionGMOUNBTQInput137,
        ) {
          return (
            (timelineDefinitionGMOUNBTQInput137 =
              this.conditionStack.length -
              1 -
              Math.abs(timelineDefinitionGMOUNBTQInput137 || 0)),
            timelineDefinitionGMOUNBTQInput137 >= 0
              ? this.conditionStack[timelineDefinitionGMOUNBTQInput137]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput159,
        ) {
          this.begin(timelineDefinitionGMOUNBTQInput159);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          timelineDefinitionGMOUNBTQInput28,
          timelineDefinitionGMOUNBTQInput29,
          timelineDefinitionGMOUNBTQInput30,
          timelineDefinitionGMOUNBTQInput31,
        ) {
          switch (timelineDefinitionGMOUNBTQInput30) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              return 13;
            case 3:
              break;
            case 4:
              break;
            case 5:
              return 8;
            case 6:
              return 9;
            case 7:
              return 7;
            case 8:
              return 14;
            case 9:
              return (this.begin("acc_title"), 15);
            case 10:
              return (this.popState(), "acc_title_value");
            case 11:
              return (this.begin("acc_descr"), 17);
            case 12:
              return (this.popState(), "acc_descr_value");
            case 13:
              this.begin("acc_descr_multiline");
              break;
            case 14:
              this.popState();
              break;
            case 15:
              return "acc_descr_multiline_value";
            case 16:
              return 20;
            case 17:
              return 24;
            case 18:
              return 23;
            case 19:
              return 6;
            case 20:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:timeline[ \t]+LR\b)/i,
          /^(?:timeline[ \t]+TD\b)/i,
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
            rules: [14, 15],
            inclusive: false,
          },
          acc_descr: {
            rules: [12],
            inclusive: false,
          },
          acc_title: {
            rules: [10],
            inclusive: false,
          },
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 16, 17, 18, 19, 20],
            inclusive: true,
          },
        },
      };
    })();
    function timelineDefinitionGMOUNBTQHelper2() {
      this.yy = {};
    }
    return (
      defineFunctionName(timelineDefinitionGMOUNBTQHelper2, "Parser"),
      (timelineDefinitionGMOUNBTQHelper2.prototype =
        timelineDefinitionGMOUNBTQBinding67),
      (timelineDefinitionGMOUNBTQBinding67.Parser =
        timelineDefinitionGMOUNBTQHelper2),
      new timelineDefinitionGMOUNBTQHelper2()
    );
  })();
  timelineDefinitionGMOUNBTQBinding1.parser =
    timelineDefinitionGMOUNBTQBinding1;
  timelineDefinitionGMOUNBTQBinding2 = timelineDefinitionGMOUNBTQBinding1;
  timelineDefinitionGMOUNBTQBinding3 = {};
  defineEnumerableGetters(timelineDefinitionGMOUNBTQBinding3, {
    addEvent: () => timelineDefinitionGMOUNBTQBinding18,
    addSection: () => timelineDefinitionGMOUNBTQBinding14,
    addTask: () => timelineDefinitionGMOUNBTQBinding17,
    addTaskOrg: () => timelineDefinitionGMOUNBTQBinding19,
    clear: () => timelineDefinitionGMOUNBTQBinding11,
    default: () => timelineDefinitionGMOUNBTQBinding21,
    getCommonDb: () => timelineDefinitionGMOUNBTQBinding10,
    getDirection: () => timelineDefinitionGMOUNBTQBinding13,
    getSections: () => timelineDefinitionGMOUNBTQBinding15,
    getTasks: () => timelineDefinitionGMOUNBTQBinding16,
    setDirection: () => timelineDefinitionGMOUNBTQBinding12,
  });
  timelineDefinitionGMOUNBTQBinding4 = "";
  timelineDefinitionGMOUNBTQBinding5 = 0;
  timelineDefinitionGMOUNBTQBinding6 = "LR";
  timelineDefinitionGMOUNBTQBinding7 = [];
  timelineDefinitionGMOUNBTQBinding8 = [];
  timelineDefinitionGMOUNBTQBinding9 = [];
  timelineDefinitionGMOUNBTQBinding10 = defineFunctionName(
    () => o,
    "getCommonDb",
  );
  timelineDefinitionGMOUNBTQBinding11 = defineFunctionName(function () {
    timelineDefinitionGMOUNBTQBinding7.length = 0;
    timelineDefinitionGMOUNBTQBinding8.length = 0;
    timelineDefinitionGMOUNBTQBinding4 = "";
    timelineDefinitionGMOUNBTQBinding9.length = 0;
    timelineDefinitionGMOUNBTQBinding6 = "LR";
    _chunkICPOFSXXA();
  }, "clear");
  timelineDefinitionGMOUNBTQBinding12 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput161,
  ) {
    timelineDefinitionGMOUNBTQBinding6 = timelineDefinitionGMOUNBTQInput161;
  }, "setDirection");
  timelineDefinitionGMOUNBTQBinding13 = defineFunctionName(function () {
    return timelineDefinitionGMOUNBTQBinding6;
  }, "getDirection");
  timelineDefinitionGMOUNBTQBinding14 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput160,
  ) {
    timelineDefinitionGMOUNBTQBinding4 = timelineDefinitionGMOUNBTQInput160;
    timelineDefinitionGMOUNBTQBinding7.push(timelineDefinitionGMOUNBTQInput160);
  }, "addSection");
  timelineDefinitionGMOUNBTQBinding15 = defineFunctionName(function () {
    return timelineDefinitionGMOUNBTQBinding7;
  }, "getSections");
  timelineDefinitionGMOUNBTQBinding16 = defineFunctionName(function () {
    let timelineDefinitionGMOUNBTQBinding289 =
        timelineDefinitionGMOUNBTQBinding20(),
      timelineDefinitionGMOUNBTQBinding290 = 0;
    for (
      ;
      !timelineDefinitionGMOUNBTQBinding289 &&
      timelineDefinitionGMOUNBTQBinding290 < 100;
    ) {
      timelineDefinitionGMOUNBTQBinding289 =
        timelineDefinitionGMOUNBTQBinding20();
      timelineDefinitionGMOUNBTQBinding290++;
    }
    return (
      timelineDefinitionGMOUNBTQBinding8.push(
        ...timelineDefinitionGMOUNBTQBinding9,
      ),
      timelineDefinitionGMOUNBTQBinding8
    );
  }, "getTasks");
  timelineDefinitionGMOUNBTQBinding17 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput134,
    timelineDefinitionGMOUNBTQInput135,
    timelineDefinitionGMOUNBTQInput136,
  ) {
    let timelineDefinitionGMOUNBTQBinding287 = {
      id: timelineDefinitionGMOUNBTQBinding5++,
      section: timelineDefinitionGMOUNBTQBinding4,
      type: timelineDefinitionGMOUNBTQBinding4,
      task: timelineDefinitionGMOUNBTQInput134,
      score: timelineDefinitionGMOUNBTQInput135 || 0,
      events: timelineDefinitionGMOUNBTQInput136
        ? [timelineDefinitionGMOUNBTQInput136]
        : [],
    };
    timelineDefinitionGMOUNBTQBinding9.push(
      timelineDefinitionGMOUNBTQBinding287,
    );
  }, "addTask");
  timelineDefinitionGMOUNBTQBinding18 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput155,
  ) {
    timelineDefinitionGMOUNBTQBinding9
      .find((item) => item.id === timelineDefinitionGMOUNBTQBinding5 - 1)
      .events.push(timelineDefinitionGMOUNBTQInput155);
  }, "addEvent");
  timelineDefinitionGMOUNBTQBinding19 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput147,
  ) {
    let timelineDefinitionGMOUNBTQBinding291 = {
      section: timelineDefinitionGMOUNBTQBinding4,
      type: timelineDefinitionGMOUNBTQBinding4,
      description: timelineDefinitionGMOUNBTQInput147,
      task: timelineDefinitionGMOUNBTQInput147,
      classes: [],
    };
    timelineDefinitionGMOUNBTQBinding8.push(
      timelineDefinitionGMOUNBTQBinding291,
    );
  }, "addTaskOrg");
  timelineDefinitionGMOUNBTQBinding20 = defineFunctionName(function () {
    let timelineDefinitionGMOUNBTQBinding285 = defineFunctionName(function (
        timelineDefinitionGMOUNBTQInput158,
      ) {
        return timelineDefinitionGMOUNBTQBinding9[
          timelineDefinitionGMOUNBTQInput158
        ].processed;
      }, "compileTask"),
      timelineDefinitionGMOUNBTQBinding286 = true;
    for (let [
      timelineDefinitionGMOUNBTQBinding294,
      timelineDefinitionGMOUNBTQBinding295,
    ] of timelineDefinitionGMOUNBTQBinding9.entries()) {
      timelineDefinitionGMOUNBTQBinding285(
        timelineDefinitionGMOUNBTQBinding294,
      );
      timelineDefinitionGMOUNBTQBinding286 &&=
        timelineDefinitionGMOUNBTQBinding295.processed;
    }
    return timelineDefinitionGMOUNBTQBinding286;
  }, "compileTasks");
  timelineDefinitionGMOUNBTQBinding21 = {
    clear: timelineDefinitionGMOUNBTQBinding11,
    getCommonDb: timelineDefinitionGMOUNBTQBinding10,
    getDirection: timelineDefinitionGMOUNBTQBinding13,
    setDirection: timelineDefinitionGMOUNBTQBinding12,
    addSection: timelineDefinitionGMOUNBTQBinding14,
    getSections: timelineDefinitionGMOUNBTQBinding15,
    getTasks: timelineDefinitionGMOUNBTQBinding16,
    addTask: timelineDefinitionGMOUNBTQBinding17,
    addTaskOrg: timelineDefinitionGMOUNBTQBinding19,
    addEvent: timelineDefinitionGMOUNBTQBinding18,
  };
  timelineDefinitionGMOUNBTQBinding22 = 0;
  timelineDefinitionGMOUNBTQBinding23 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput115,
    timelineDefinitionGMOUNBTQInput116,
  ) {
    let timelineDefinitionGMOUNBTQBinding265 =
      timelineDefinitionGMOUNBTQInput115.append("rect");
    return (
      timelineDefinitionGMOUNBTQBinding265.attr(
        "x",
        timelineDefinitionGMOUNBTQInput116.x,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "y",
        timelineDefinitionGMOUNBTQInput116.y,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "fill",
        timelineDefinitionGMOUNBTQInput116.fill,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "stroke",
        timelineDefinitionGMOUNBTQInput116.stroke,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "width",
        timelineDefinitionGMOUNBTQInput116.width,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "height",
        timelineDefinitionGMOUNBTQInput116.height,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "rx",
        timelineDefinitionGMOUNBTQInput116.rx,
      ),
      timelineDefinitionGMOUNBTQBinding265.attr(
        "ry",
        timelineDefinitionGMOUNBTQInput116.ry,
      ),
      timelineDefinitionGMOUNBTQInput116.class !== undefined &&
        timelineDefinitionGMOUNBTQBinding265.attr(
          "class",
          timelineDefinitionGMOUNBTQInput116.class,
        ),
      timelineDefinitionGMOUNBTQBinding265
    );
  }, "drawRect");
  timelineDefinitionGMOUNBTQBinding24 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput18,
    timelineDefinitionGMOUNBTQInput19,
  ) {
    let timelineDefinitionGMOUNBTQBinding153 = timelineDefinitionGMOUNBTQInput18
        .append("circle")
        .attr("cx", timelineDefinitionGMOUNBTQInput19.cx)
        .attr("cy", timelineDefinitionGMOUNBTQInput19.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      timelineDefinitionGMOUNBTQBinding154 =
        timelineDefinitionGMOUNBTQInput18.append("g");
    timelineDefinitionGMOUNBTQBinding154
      .append("circle")
      .attr("cx", timelineDefinitionGMOUNBTQInput19.cx - 5)
      .attr("cy", timelineDefinitionGMOUNBTQInput19.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    timelineDefinitionGMOUNBTQBinding154
      .append("circle")
      .attr("cx", timelineDefinitionGMOUNBTQInput19.cx + 5)
      .attr("cy", timelineDefinitionGMOUNBTQInput19.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function timelineDefinitionGMOUNBTQHelper9(
      timelineDefinitionGMOUNBTQInput123,
    ) {
      let timelineDefinitionGMOUNBTQBinding270 = arc()
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI / 2) * 3)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionGMOUNBTQInput123
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionGMOUNBTQBinding270)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionGMOUNBTQInput19.cx +
            "," +
            (timelineDefinitionGMOUNBTQInput19.cy + 2) +
            ")",
        );
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper9, "smile");
    function timelineDefinitionGMOUNBTQHelper10(
      timelineDefinitionGMOUNBTQInput121,
    ) {
      let timelineDefinitionGMOUNBTQBinding269 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle((Math.PI / 2) * 5)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionGMOUNBTQInput121
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionGMOUNBTQBinding269)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionGMOUNBTQInput19.cx +
            "," +
            (timelineDefinitionGMOUNBTQInput19.cy + 7) +
            ")",
        );
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper10, "sad");
    function timelineDefinitionGMOUNBTQHelper11(
      timelineDefinitionGMOUNBTQInput122,
    ) {
      timelineDefinitionGMOUNBTQInput122
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", timelineDefinitionGMOUNBTQInput19.cx - 5)
        .attr("y1", timelineDefinitionGMOUNBTQInput19.cy + 7)
        .attr("x2", timelineDefinitionGMOUNBTQInput19.cx + 5)
        .attr("y2", timelineDefinitionGMOUNBTQInput19.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      defineFunctionName(timelineDefinitionGMOUNBTQHelper11, "ambivalent"),
      timelineDefinitionGMOUNBTQInput19.score > 3
        ? timelineDefinitionGMOUNBTQHelper9(
            timelineDefinitionGMOUNBTQBinding154,
          )
        : timelineDefinitionGMOUNBTQInput19.score < 3
          ? timelineDefinitionGMOUNBTQHelper10(
              timelineDefinitionGMOUNBTQBinding154,
            )
          : timelineDefinitionGMOUNBTQHelper11(
              timelineDefinitionGMOUNBTQBinding154,
            ),
      timelineDefinitionGMOUNBTQBinding153
    );
  }, "drawFace");
  timelineDefinitionGMOUNBTQBinding25 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput108,
    timelineDefinitionGMOUNBTQInput109,
  ) {
    let timelineDefinitionGMOUNBTQBinding264 =
      timelineDefinitionGMOUNBTQInput108.append("circle");
    return (
      timelineDefinitionGMOUNBTQBinding264.attr(
        "cx",
        timelineDefinitionGMOUNBTQInput109.cx,
      ),
      timelineDefinitionGMOUNBTQBinding264.attr(
        "cy",
        timelineDefinitionGMOUNBTQInput109.cy,
      ),
      timelineDefinitionGMOUNBTQBinding264.attr(
        "class",
        "actor-" + timelineDefinitionGMOUNBTQInput109.pos,
      ),
      timelineDefinitionGMOUNBTQBinding264.attr(
        "fill",
        timelineDefinitionGMOUNBTQInput109.fill,
      ),
      timelineDefinitionGMOUNBTQBinding264.attr(
        "stroke",
        timelineDefinitionGMOUNBTQInput109.stroke,
      ),
      timelineDefinitionGMOUNBTQBinding264.attr(
        "r",
        timelineDefinitionGMOUNBTQInput109.r,
      ),
      timelineDefinitionGMOUNBTQBinding264.class !== undefined &&
        timelineDefinitionGMOUNBTQBinding264.attr(
          "class",
          timelineDefinitionGMOUNBTQBinding264.class,
        ),
      timelineDefinitionGMOUNBTQInput109.title !== undefined &&
        timelineDefinitionGMOUNBTQBinding264
          .append("title")
          .text(timelineDefinitionGMOUNBTQInput109.title),
      timelineDefinitionGMOUNBTQBinding264
    );
  }, "drawCircle");
  timelineDefinitionGMOUNBTQBinding26 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput117,
    timelineDefinitionGMOUNBTQInput118,
  ) {
    let timelineDefinitionGMOUNBTQBinding266 =
        timelineDefinitionGMOUNBTQInput118.text.replace(/<br\s*\/?>/gi, " "),
      timelineDefinitionGMOUNBTQBinding267 =
        timelineDefinitionGMOUNBTQInput117.append("text");
    timelineDefinitionGMOUNBTQBinding267.attr(
      "x",
      timelineDefinitionGMOUNBTQInput118.x,
    );
    timelineDefinitionGMOUNBTQBinding267.attr(
      "y",
      timelineDefinitionGMOUNBTQInput118.y,
    );
    timelineDefinitionGMOUNBTQBinding267.attr("class", "legend");
    timelineDefinitionGMOUNBTQBinding267.style(
      "text-anchor",
      timelineDefinitionGMOUNBTQInput118.anchor,
    );
    timelineDefinitionGMOUNBTQInput118.class !== undefined &&
      timelineDefinitionGMOUNBTQBinding267.attr(
        "class",
        timelineDefinitionGMOUNBTQInput118.class,
      );
    let timelineDefinitionGMOUNBTQBinding268 =
      timelineDefinitionGMOUNBTQBinding267.append("tspan");
    return (
      timelineDefinitionGMOUNBTQBinding268.attr(
        "x",
        timelineDefinitionGMOUNBTQInput118.x +
          timelineDefinitionGMOUNBTQInput118.textMargin * 2,
      ),
      timelineDefinitionGMOUNBTQBinding268.text(
        timelineDefinitionGMOUNBTQBinding266,
      ),
      timelineDefinitionGMOUNBTQBinding267
    );
  }, "drawText");
  timelineDefinitionGMOUNBTQBinding27 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput93,
    timelineDefinitionGMOUNBTQInput94,
  ) {
    function timelineDefinitionGMOUNBTQHelper12(
      timelineDefinitionGMOUNBTQInput110,
      timelineDefinitionGMOUNBTQInput111,
      timelineDefinitionGMOUNBTQInput112,
      timelineDefinitionGMOUNBTQInput113,
      timelineDefinitionGMOUNBTQInput114,
    ) {
      return (
        timelineDefinitionGMOUNBTQInput110 +
        "," +
        timelineDefinitionGMOUNBTQInput111 +
        " " +
        (timelineDefinitionGMOUNBTQInput110 +
          timelineDefinitionGMOUNBTQInput112) +
        "," +
        timelineDefinitionGMOUNBTQInput111 +
        " " +
        (timelineDefinitionGMOUNBTQInput110 +
          timelineDefinitionGMOUNBTQInput112) +
        "," +
        (timelineDefinitionGMOUNBTQInput111 +
          timelineDefinitionGMOUNBTQInput113 -
          timelineDefinitionGMOUNBTQInput114) +
        " " +
        (timelineDefinitionGMOUNBTQInput110 +
          timelineDefinitionGMOUNBTQInput112 -
          timelineDefinitionGMOUNBTQInput114 * 1.2) +
        "," +
        (timelineDefinitionGMOUNBTQInput111 +
          timelineDefinitionGMOUNBTQInput113) +
        " " +
        timelineDefinitionGMOUNBTQInput110 +
        "," +
        (timelineDefinitionGMOUNBTQInput111 +
          timelineDefinitionGMOUNBTQInput113)
      );
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper12, "genPoints");
    let timelineDefinitionGMOUNBTQBinding242 =
      timelineDefinitionGMOUNBTQInput93.append("polygon");
    timelineDefinitionGMOUNBTQBinding242.attr(
      "points",
      timelineDefinitionGMOUNBTQHelper12(
        timelineDefinitionGMOUNBTQInput94.x,
        timelineDefinitionGMOUNBTQInput94.y,
        50,
        20,
        7,
      ),
    );
    timelineDefinitionGMOUNBTQBinding242.attr("class", "labelBox");
    timelineDefinitionGMOUNBTQInput94.y +=
      timelineDefinitionGMOUNBTQInput94.labelMargin;
    timelineDefinitionGMOUNBTQInput94.x +=
      0.5 * timelineDefinitionGMOUNBTQInput94.labelMargin;
    timelineDefinitionGMOUNBTQBinding26(
      timelineDefinitionGMOUNBTQInput93,
      timelineDefinitionGMOUNBTQInput94,
    );
  }, "drawLabel");
  timelineDefinitionGMOUNBTQBinding28 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput102,
    timelineDefinitionGMOUNBTQInput103,
    timelineDefinitionGMOUNBTQInput104,
  ) {
    let timelineDefinitionGMOUNBTQBinding251 =
        timelineDefinitionGMOUNBTQInput102.append("g"),
      timelineDefinitionGMOUNBTQBinding252 =
        timelineDefinitionGMOUNBTQBinding33();
    timelineDefinitionGMOUNBTQBinding252.x =
      timelineDefinitionGMOUNBTQInput103.x;
    timelineDefinitionGMOUNBTQBinding252.y =
      timelineDefinitionGMOUNBTQInput103.y;
    timelineDefinitionGMOUNBTQBinding252.fill =
      timelineDefinitionGMOUNBTQInput103.fill;
    timelineDefinitionGMOUNBTQBinding252.width =
      timelineDefinitionGMOUNBTQInput104.width;
    timelineDefinitionGMOUNBTQBinding252.height =
      timelineDefinitionGMOUNBTQInput104.height;
    timelineDefinitionGMOUNBTQBinding252.class =
      "journey-section section-type-" + timelineDefinitionGMOUNBTQInput103.num;
    timelineDefinitionGMOUNBTQBinding252.rx = 3;
    timelineDefinitionGMOUNBTQBinding252.ry = 3;
    timelineDefinitionGMOUNBTQBinding23(
      timelineDefinitionGMOUNBTQBinding251,
      timelineDefinitionGMOUNBTQBinding252,
    );
    timelineDefinitionGMOUNBTQBinding34(timelineDefinitionGMOUNBTQInput104)(
      timelineDefinitionGMOUNBTQInput103.text,
      timelineDefinitionGMOUNBTQBinding251,
      timelineDefinitionGMOUNBTQBinding252.x,
      timelineDefinitionGMOUNBTQBinding252.y,
      timelineDefinitionGMOUNBTQBinding252.width,
      timelineDefinitionGMOUNBTQBinding252.height,
      {
        class:
          "journey-section section-type-" +
          timelineDefinitionGMOUNBTQInput103.num,
      },
      timelineDefinitionGMOUNBTQInput104,
      timelineDefinitionGMOUNBTQInput103.colour,
    );
  }, "drawSection");
  timelineDefinitionGMOUNBTQBinding29 = -1;
  timelineDefinitionGMOUNBTQBinding30 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput47,
    timelineDefinitionGMOUNBTQInput48,
    timelineDefinitionGMOUNBTQInput49,
    timelineDefinitionGMOUNBTQInput50,
  ) {
    let timelineDefinitionGMOUNBTQBinding184 =
        timelineDefinitionGMOUNBTQInput48.x +
        timelineDefinitionGMOUNBTQInput49.width / 2,
      timelineDefinitionGMOUNBTQBinding185 =
        timelineDefinitionGMOUNBTQInput47.append("g");
    timelineDefinitionGMOUNBTQBinding29++;
    timelineDefinitionGMOUNBTQBinding185
      .append("line")
      .attr(
        "id",
        timelineDefinitionGMOUNBTQInput50 +
          "-task" +
          timelineDefinitionGMOUNBTQBinding29,
      )
      .attr("x1", timelineDefinitionGMOUNBTQBinding184)
      .attr("y1", timelineDefinitionGMOUNBTQInput48.y)
      .attr("x2", timelineDefinitionGMOUNBTQBinding184)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    timelineDefinitionGMOUNBTQBinding24(timelineDefinitionGMOUNBTQBinding185, {
      cx: timelineDefinitionGMOUNBTQBinding184,
      cy: 300 + (5 - timelineDefinitionGMOUNBTQInput48.score) * 30,
      score: timelineDefinitionGMOUNBTQInput48.score,
    });
    let timelineDefinitionGMOUNBTQBinding186 =
      timelineDefinitionGMOUNBTQBinding33();
    timelineDefinitionGMOUNBTQBinding186.x =
      timelineDefinitionGMOUNBTQInput48.x;
    timelineDefinitionGMOUNBTQBinding186.y =
      timelineDefinitionGMOUNBTQInput48.y;
    timelineDefinitionGMOUNBTQBinding186.fill =
      timelineDefinitionGMOUNBTQInput48.fill;
    timelineDefinitionGMOUNBTQBinding186.width =
      timelineDefinitionGMOUNBTQInput49.width;
    timelineDefinitionGMOUNBTQBinding186.height =
      timelineDefinitionGMOUNBTQInput49.height;
    timelineDefinitionGMOUNBTQBinding186.class =
      "task task-type-" + timelineDefinitionGMOUNBTQInput48.num;
    timelineDefinitionGMOUNBTQBinding186.rx = 3;
    timelineDefinitionGMOUNBTQBinding186.ry = 3;
    timelineDefinitionGMOUNBTQBinding23(
      timelineDefinitionGMOUNBTQBinding185,
      timelineDefinitionGMOUNBTQBinding186,
    );
    timelineDefinitionGMOUNBTQBinding34(timelineDefinitionGMOUNBTQInput49)(
      timelineDefinitionGMOUNBTQInput48.task,
      timelineDefinitionGMOUNBTQBinding185,
      timelineDefinitionGMOUNBTQBinding186.x,
      timelineDefinitionGMOUNBTQBinding186.y,
      timelineDefinitionGMOUNBTQBinding186.width,
      timelineDefinitionGMOUNBTQBinding186.height,
      {
        class: "task",
      },
      timelineDefinitionGMOUNBTQInput49,
      timelineDefinitionGMOUNBTQInput48.colour,
    );
  }, "drawTask");
  timelineDefinitionGMOUNBTQBinding31 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput132,
    timelineDefinitionGMOUNBTQInput133,
  ) {
    timelineDefinitionGMOUNBTQBinding23(timelineDefinitionGMOUNBTQInput132, {
      x: timelineDefinitionGMOUNBTQInput133.startx,
      y: timelineDefinitionGMOUNBTQInput133.starty,
      width:
        timelineDefinitionGMOUNBTQInput133.stopx -
        timelineDefinitionGMOUNBTQInput133.startx,
      height:
        timelineDefinitionGMOUNBTQInput133.stopy -
        timelineDefinitionGMOUNBTQInput133.starty,
      fill: timelineDefinitionGMOUNBTQInput133.fill,
      class: "rect",
    }).lower();
  }, "drawBackgroundRect");
  timelineDefinitionGMOUNBTQBinding32 = defineFunctionName(function () {
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
  timelineDefinitionGMOUNBTQBinding33 = defineFunctionName(function () {
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
  timelineDefinitionGMOUNBTQBinding34 = (function () {
    function timelineDefinitionGMOUNBTQHelper5(
      timelineDefinitionGMOUNBTQInput124,
      timelineDefinitionGMOUNBTQInput125,
      timelineDefinitionGMOUNBTQInput126,
      timelineDefinitionGMOUNBTQInput127,
      timelineDefinitionGMOUNBTQInput128,
      timelineDefinitionGMOUNBTQInput129,
      timelineDefinitionGMOUNBTQInput130,
      timelineDefinitionGMOUNBTQInput131,
    ) {
      timelineDefinitionGMOUNBTQHelper8(
        timelineDefinitionGMOUNBTQInput125
          .append("text")
          .attr(
            "x",
            timelineDefinitionGMOUNBTQInput126 +
              timelineDefinitionGMOUNBTQInput128 / 2,
          )
          .attr(
            "y",
            timelineDefinitionGMOUNBTQInput127 +
              timelineDefinitionGMOUNBTQInput129 / 2 +
              5,
          )
          .style("font-color", timelineDefinitionGMOUNBTQInput131)
          .style("text-anchor", "middle")
          .text(timelineDefinitionGMOUNBTQInput124),
        timelineDefinitionGMOUNBTQInput130,
      );
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper5, "byText");
    function timelineDefinitionGMOUNBTQHelper6(
      timelineDefinitionGMOUNBTQInput60,
      timelineDefinitionGMOUNBTQInput61,
      timelineDefinitionGMOUNBTQInput62,
      timelineDefinitionGMOUNBTQInput63,
      timelineDefinitionGMOUNBTQInput64,
      timelineDefinitionGMOUNBTQInput65,
      timelineDefinitionGMOUNBTQInput66,
      timelineDefinitionGMOUNBTQInput67,
      timelineDefinitionGMOUNBTQInput68,
    ) {
      let { taskFontSize, taskFontFamily } = timelineDefinitionGMOUNBTQInput67,
        timelineDefinitionGMOUNBTQBinding190 =
          timelineDefinitionGMOUNBTQInput60.split(/<br\s*\/?>/gi);
      for (
        let timelineDefinitionGMOUNBTQBinding241 = 0;
        timelineDefinitionGMOUNBTQBinding241 <
        timelineDefinitionGMOUNBTQBinding190.length;
        timelineDefinitionGMOUNBTQBinding241++
      ) {
        let timelineDefinitionGMOUNBTQBinding245 =
            timelineDefinitionGMOUNBTQBinding241 * taskFontSize -
            (taskFontSize * (timelineDefinitionGMOUNBTQBinding190.length - 1)) /
              2,
          timelineDefinitionGMOUNBTQBinding246 =
            timelineDefinitionGMOUNBTQInput61
              .append("text")
              .attr(
                "x",
                timelineDefinitionGMOUNBTQInput62 +
                  timelineDefinitionGMOUNBTQInput64 / 2,
              )
              .attr("y", timelineDefinitionGMOUNBTQInput63)
              .attr("fill", timelineDefinitionGMOUNBTQInput68)
              .style("text-anchor", "middle")
              .style("font-size", taskFontSize)
              .style("font-family", taskFontFamily);
        timelineDefinitionGMOUNBTQBinding246
          .append("tspan")
          .attr(
            "x",
            timelineDefinitionGMOUNBTQInput62 +
              timelineDefinitionGMOUNBTQInput64 / 2,
          )
          .attr("dy", timelineDefinitionGMOUNBTQBinding245)
          .text(
            timelineDefinitionGMOUNBTQBinding190[
              timelineDefinitionGMOUNBTQBinding241
            ],
          );
        timelineDefinitionGMOUNBTQBinding246
          .attr(
            "y",
            timelineDefinitionGMOUNBTQInput63 +
              timelineDefinitionGMOUNBTQInput65 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        timelineDefinitionGMOUNBTQHelper8(
          timelineDefinitionGMOUNBTQBinding246,
          timelineDefinitionGMOUNBTQInput66,
        );
      }
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper6, "byTspan");
    function timelineDefinitionGMOUNBTQHelper7(
      timelineDefinitionGMOUNBTQInput83,
      timelineDefinitionGMOUNBTQInput84,
      timelineDefinitionGMOUNBTQInput85,
      timelineDefinitionGMOUNBTQInput86,
      timelineDefinitionGMOUNBTQInput87,
      timelineDefinitionGMOUNBTQInput88,
      timelineDefinitionGMOUNBTQInput89,
      timelineDefinitionGMOUNBTQInput90,
    ) {
      let timelineDefinitionGMOUNBTQBinding235 =
          timelineDefinitionGMOUNBTQInput84.append("switch"),
        timelineDefinitionGMOUNBTQBinding236 =
          timelineDefinitionGMOUNBTQBinding235
            .append("foreignObject")
            .attr("x", timelineDefinitionGMOUNBTQInput85)
            .attr("y", timelineDefinitionGMOUNBTQInput86)
            .attr("width", timelineDefinitionGMOUNBTQInput87)
            .attr("height", timelineDefinitionGMOUNBTQInput88)
            .attr("position", "fixed")
            .append("xhtml:div")
            .style("display", "table")
            .style("height", "100%")
            .style("width", "100%");
      timelineDefinitionGMOUNBTQBinding236
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(timelineDefinitionGMOUNBTQInput83);
      timelineDefinitionGMOUNBTQHelper6(
        timelineDefinitionGMOUNBTQInput83,
        timelineDefinitionGMOUNBTQBinding235,
        timelineDefinitionGMOUNBTQInput85,
        timelineDefinitionGMOUNBTQInput86,
        timelineDefinitionGMOUNBTQInput87,
        timelineDefinitionGMOUNBTQInput88,
        timelineDefinitionGMOUNBTQInput89,
        timelineDefinitionGMOUNBTQInput90,
      );
      timelineDefinitionGMOUNBTQHelper8(
        timelineDefinitionGMOUNBTQBinding236,
        timelineDefinitionGMOUNBTQInput89,
      );
    }
    defineFunctionName(timelineDefinitionGMOUNBTQHelper7, "byFo");
    function timelineDefinitionGMOUNBTQHelper8(
      timelineDefinitionGMOUNBTQInput153,
      timelineDefinitionGMOUNBTQInput154,
    ) {
      for (let timelineDefinitionGMOUNBTQBinding296 in timelineDefinitionGMOUNBTQInput154)
        timelineDefinitionGMOUNBTQBinding296 in
          timelineDefinitionGMOUNBTQInput154 &&
          timelineDefinitionGMOUNBTQInput153.attr(
            timelineDefinitionGMOUNBTQBinding296,
            timelineDefinitionGMOUNBTQInput154[
              timelineDefinitionGMOUNBTQBinding296
            ],
          );
    }
    return (
      defineFunctionName(timelineDefinitionGMOUNBTQHelper8, "_setTextAttrs"),
      function (timelineDefinitionGMOUNBTQInput140) {
        return timelineDefinitionGMOUNBTQInput140.textPlacement === "fo"
          ? timelineDefinitionGMOUNBTQHelper7
          : timelineDefinitionGMOUNBTQInput140.textPlacement === "old"
            ? timelineDefinitionGMOUNBTQHelper5
            : timelineDefinitionGMOUNBTQHelper6;
      }
    );
  })();
  timelineDefinitionGMOUNBTQBinding35 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput119,
    timelineDefinitionGMOUNBTQInput120,
  ) {
    timelineDefinitionGMOUNBTQBinding22 = 0;
    timelineDefinitionGMOUNBTQBinding29 = -1;
    timelineDefinitionGMOUNBTQInput119
      .append("defs")
      .append("marker")
      .attr("id", timelineDefinitionGMOUNBTQInput120 + "-arrowhead")
      .attr("refX", 5)
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
  defineFunctionName(timelineDefinitionGMOUNBTQHelper1, "wrap");
  timelineDefinitionGMOUNBTQBinding36 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput12,
    timelineDefinitionGMOUNBTQInput13,
    timelineDefinitionGMOUNBTQInput14,
    timelineDefinitionGMOUNBTQInput15,
    timelineDefinitionGMOUNBTQInput16,
    timelineDefinitionGMOUNBTQInput17 = false,
  ) {
    let { theme, look } = timelineDefinitionGMOUNBTQInput15,
      timelineDefinitionGMOUNBTQBinding146 = theme?.includes("redux"),
      timelineDefinitionGMOUNBTQBinding147 =
        (timelineDefinitionGMOUNBTQInput14 %
          (timelineDefinitionGMOUNBTQInput15?.themeVariables
            ?.THEME_COLOR_LIMIT ?? 12)) -
        1,
      timelineDefinitionGMOUNBTQBinding148 =
        timelineDefinitionGMOUNBTQInput12.append("g");
    timelineDefinitionGMOUNBTQInput13.section =
      timelineDefinitionGMOUNBTQBinding147;
    timelineDefinitionGMOUNBTQBinding148.attr(
      "class",
      (timelineDefinitionGMOUNBTQInput13.class
        ? timelineDefinitionGMOUNBTQInput13.class + " "
        : "") +
        "timeline-node " +
        ("section-" + timelineDefinitionGMOUNBTQBinding147),
    );
    let timelineDefinitionGMOUNBTQBinding149 =
        timelineDefinitionGMOUNBTQBinding148.append("g"),
      timelineDefinitionGMOUNBTQBinding150 =
        timelineDefinitionGMOUNBTQBinding148.append("g"),
      timelineDefinitionGMOUNBTQBinding151 =
        timelineDefinitionGMOUNBTQBinding150
          .append("text")
          .text(timelineDefinitionGMOUNBTQInput13.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(
            timelineDefinitionGMOUNBTQHelper1,
            timelineDefinitionGMOUNBTQInput13.width,
          )
          .node()
          .getBBox(),
      timelineDefinitionGMOUNBTQBinding152 = timelineDefinitionGMOUNBTQInput15
        .fontSize?.replace
        ? timelineDefinitionGMOUNBTQInput15.fontSize.replace("px", "")
        : timelineDefinitionGMOUNBTQInput15.fontSize;
    if (
      ((timelineDefinitionGMOUNBTQInput13.height =
        timelineDefinitionGMOUNBTQBinding151.height +
        timelineDefinitionGMOUNBTQBinding152 * 1.1 * 0.5 +
        timelineDefinitionGMOUNBTQInput13.padding),
      (timelineDefinitionGMOUNBTQInput13.height = Math.max(
        timelineDefinitionGMOUNBTQInput13.height,
        timelineDefinitionGMOUNBTQInput13.maxHeight,
      )),
      (timelineDefinitionGMOUNBTQInput13.width +=
        2 * timelineDefinitionGMOUNBTQInput13.padding),
      timelineDefinitionGMOUNBTQBinding150.attr(
        "transform",
        "translate(" +
          timelineDefinitionGMOUNBTQInput13.width / 2 +
          ", " +
          timelineDefinitionGMOUNBTQInput13.padding / 2 +
          ")",
      ),
      timelineDefinitionGMOUNBTQBinding146 &&
        timelineDefinitionGMOUNBTQBinding150.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQInput13.width / 2}, ${timelineDefinitionGMOUNBTQInput17 ? timelineDefinitionGMOUNBTQInput13.padding / 2 + 3 : timelineDefinitionGMOUNBTQInput13.padding})`,
        ),
      timelineDefinitionGMOUNBTQBinding38(
        timelineDefinitionGMOUNBTQBinding149,
        timelineDefinitionGMOUNBTQInput13,
        timelineDefinitionGMOUNBTQBinding147,
        timelineDefinitionGMOUNBTQInput16,
        timelineDefinitionGMOUNBTQInput15,
      ),
      look === "neo" &&
        (timelineDefinitionGMOUNBTQBinding148.attr("data-look", "neo"),
        timelineDefinitionGMOUNBTQBinding146))
    ) {
      let timelineDefinitionGMOUNBTQBinding237 = theme.includes("dark"),
        timelineDefinitionGMOUNBTQBinding238 = select(
          timelineDefinitionGMOUNBTQInput12.node()?.ownerSVGElement ??
            timelineDefinitionGMOUNBTQInput12.node(),
        ),
        timelineDefinitionGMOUNBTQBinding239 =
          timelineDefinitionGMOUNBTQBinding238.attr("id") ?? "",
        timelineDefinitionGMOUNBTQBinding240 =
          timelineDefinitionGMOUNBTQBinding239
            ? `${timelineDefinitionGMOUNBTQBinding239}-drop-shadow`
            : "drop-shadow";
      if (
        timelineDefinitionGMOUNBTQBinding238
          .select(`#${timelineDefinitionGMOUNBTQBinding240}`)
          .empty()
      ) {
        let timelineDefinitionGMOUNBTQBinding257 =
          timelineDefinitionGMOUNBTQBinding238.select("defs");
        (timelineDefinitionGMOUNBTQBinding257.empty()
          ? timelineDefinitionGMOUNBTQBinding238.append("defs")
          : timelineDefinitionGMOUNBTQBinding257
        )
          .append("filter")
          .attr("id", timelineDefinitionGMOUNBTQBinding240)
          .attr("height", "130%")
          .attr("width", "130%")
          .append("feDropShadow")
          .attr("dx", "4")
          .attr("dy", "4")
          .attr("stdDeviation", 0)
          .attr(
            "flood-opacity",
            timelineDefinitionGMOUNBTQBinding237 ? "0.2" : "0.06",
          )
          .attr(
            "flood-color",
            timelineDefinitionGMOUNBTQBinding237 ? "#FFFFFF" : "#000000",
          );
      }
    }
    return timelineDefinitionGMOUNBTQInput13;
  }, "drawNode");
  timelineDefinitionGMOUNBTQBinding37 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput105,
    timelineDefinitionGMOUNBTQInput106,
    timelineDefinitionGMOUNBTQInput107,
  ) {
    let timelineDefinitionGMOUNBTQBinding254 =
        timelineDefinitionGMOUNBTQInput105.append("g"),
      timelineDefinitionGMOUNBTQBinding255 =
        timelineDefinitionGMOUNBTQBinding254
          .append("text")
          .text(timelineDefinitionGMOUNBTQInput106.descr)
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .call(
            timelineDefinitionGMOUNBTQHelper1,
            timelineDefinitionGMOUNBTQInput106.width,
          )
          .node()
          .getBBox(),
      timelineDefinitionGMOUNBTQBinding256 = timelineDefinitionGMOUNBTQInput107
        .fontSize?.replace
        ? timelineDefinitionGMOUNBTQInput107.fontSize.replace("px", "")
        : timelineDefinitionGMOUNBTQInput107.fontSize;
    return (
      timelineDefinitionGMOUNBTQBinding254.remove(),
      timelineDefinitionGMOUNBTQBinding255.height +
        timelineDefinitionGMOUNBTQBinding256 * 1.1 * 0.5 +
        timelineDefinitionGMOUNBTQInput106.padding
    );
  }, "getVirtualNodeHeight");
  timelineDefinitionGMOUNBTQBinding38 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput78,
    timelineDefinitionGMOUNBTQInput79,
    timelineDefinitionGMOUNBTQInput80,
    timelineDefinitionGMOUNBTQInput81,
    timelineDefinitionGMOUNBTQInput82,
  ) {
    let { theme } = timelineDefinitionGMOUNBTQInput82,
      timelineDefinitionGMOUNBTQBinding224 = theme?.includes("redux") ? 0 : 5,
      timelineDefinitionGMOUNBTQBinding225 =
        timelineDefinitionGMOUNBTQBinding224 > 0
          ? `M0 ${timelineDefinitionGMOUNBTQInput79.height - 5} v${-timelineDefinitionGMOUNBTQInput79.height + 10} q0,-${timelineDefinitionGMOUNBTQBinding224},${timelineDefinitionGMOUNBTQBinding224},-${timelineDefinitionGMOUNBTQBinding224} h${timelineDefinitionGMOUNBTQInput79.width - 10} q${timelineDefinitionGMOUNBTQBinding224},0,${timelineDefinitionGMOUNBTQBinding224},${timelineDefinitionGMOUNBTQBinding224} v${timelineDefinitionGMOUNBTQInput79.height - 5} H0 Z`
          : `M0 ${timelineDefinitionGMOUNBTQInput79.height - 5} v${-(timelineDefinitionGMOUNBTQInput79.height - 5)} h${timelineDefinitionGMOUNBTQInput79.width} v${timelineDefinitionGMOUNBTQInput79.height} H0 Z`;
    timelineDefinitionGMOUNBTQInput78
      .append("path")
      .attr(
        "id",
        timelineDefinitionGMOUNBTQInput81 +
          "-node-" +
          timelineDefinitionGMOUNBTQBinding22++,
      )
      .attr("class", "node-bkg node-" + timelineDefinitionGMOUNBTQInput79.type)
      .attr("d", timelineDefinitionGMOUNBTQBinding225);
    theme?.includes("redux") ||
      timelineDefinitionGMOUNBTQInput78
        .append("line")
        .attr("class", "node-line-" + timelineDefinitionGMOUNBTQInput80)
        .attr("x1", 0)
        .attr("y1", timelineDefinitionGMOUNBTQInput79.height)
        .attr("x2", timelineDefinitionGMOUNBTQInput79.width)
        .attr("y2", timelineDefinitionGMOUNBTQInput79.height);
  }, "defaultBkg");
  timelineDefinitionGMOUNBTQBinding39 = {
    drawRect: timelineDefinitionGMOUNBTQBinding23,
    drawCircle: timelineDefinitionGMOUNBTQBinding25,
    drawSection: timelineDefinitionGMOUNBTQBinding28,
    drawText: timelineDefinitionGMOUNBTQBinding26,
    drawLabel: timelineDefinitionGMOUNBTQBinding27,
    drawTask: timelineDefinitionGMOUNBTQBinding30,
    drawBackgroundRect: timelineDefinitionGMOUNBTQBinding31,
    getTextObj: timelineDefinitionGMOUNBTQBinding32,
    getNoteRect: timelineDefinitionGMOUNBTQBinding33,
    initGraphics: timelineDefinitionGMOUNBTQBinding35,
    drawNode: timelineDefinitionGMOUNBTQBinding36,
    getVirtualNodeHeight: timelineDefinitionGMOUNBTQBinding37,
  };
  timelineDefinitionGMOUNBTQBinding40 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput2,
    timelineDefinitionGMOUNBTQInput3,
    timelineDefinitionGMOUNBTQInput4,
    timelineDefinitionGMOUNBTQInput5,
  ) {
    let timelineDefinitionGMOUNBTQBinding97 = b(),
      { look, theme, themeVariables } = timelineDefinitionGMOUNBTQBinding97,
      { useGradient, gradientStart, gradientStop } = themeVariables,
      timelineDefinitionGMOUNBTQBinding98 =
        timelineDefinitionGMOUNBTQBinding97.timeline?.leftMargin ?? 50;
    logger.debug("timeline", timelineDefinitionGMOUNBTQInput5.db);
    let timelineDefinitionGMOUNBTQBinding99 =
        timelineDefinitionGMOUNBTQBinding97.securityLevel,
      timelineDefinitionGMOUNBTQBinding100;
    timelineDefinitionGMOUNBTQBinding99 === "sandbox" &&
      (timelineDefinitionGMOUNBTQBinding100 = select(
        "#i" + timelineDefinitionGMOUNBTQInput3,
      ));
    let timelineDefinitionGMOUNBTQBinding101 = select(
      timelineDefinitionGMOUNBTQBinding99 === "sandbox"
        ? timelineDefinitionGMOUNBTQBinding100.nodes()[0].contentDocument.body
        : "body",
    ).select("#" + timelineDefinitionGMOUNBTQInput3);
    timelineDefinitionGMOUNBTQBinding101.append("g");
    let timelineDefinitionGMOUNBTQBinding102 =
        timelineDefinitionGMOUNBTQInput5.db.getTasks(),
      timelineDefinitionGMOUNBTQBinding103 = timelineDefinitionGMOUNBTQInput5.db
        .getCommonDb()
        .getDiagramTitle();
    logger.debug("task", timelineDefinitionGMOUNBTQBinding102);
    timelineDefinitionGMOUNBTQBinding39.initGraphics(
      timelineDefinitionGMOUNBTQBinding101,
      timelineDefinitionGMOUNBTQInput3,
    );
    let timelineDefinitionGMOUNBTQBinding104 =
      timelineDefinitionGMOUNBTQInput5.db.getSections();
    logger.debug("sections", timelineDefinitionGMOUNBTQBinding104);
    let timelineDefinitionGMOUNBTQBinding105 = 0,
      timelineDefinitionGMOUNBTQBinding106 = 0,
      timelineDefinitionGMOUNBTQBinding107 = 0,
      timelineDefinitionGMOUNBTQBinding108 = 0,
      timelineDefinitionGMOUNBTQBinding109 =
        50 + timelineDefinitionGMOUNBTQBinding98,
      timelineDefinitionGMOUNBTQBinding110 = 50;
    timelineDefinitionGMOUNBTQBinding108 = 50;
    let timelineDefinitionGMOUNBTQBinding111 = 0,
      timelineDefinitionGMOUNBTQBinding112 = true;
    timelineDefinitionGMOUNBTQBinding104.forEach(function (item) {
      let timelineDefinitionGMOUNBTQBinding271 = {
          number: timelineDefinitionGMOUNBTQBinding111,
          descr: item,
          section: timelineDefinitionGMOUNBTQBinding111,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionGMOUNBTQBinding105,
        },
        timelineDefinitionGMOUNBTQBinding272 =
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding101,
            timelineDefinitionGMOUNBTQBinding271,
            timelineDefinitionGMOUNBTQBinding97,
          );
      logger.debug(
        "sectionHeight before draw",
        timelineDefinitionGMOUNBTQBinding272,
      );
      timelineDefinitionGMOUNBTQBinding105 = Math.max(
        timelineDefinitionGMOUNBTQBinding105,
        timelineDefinitionGMOUNBTQBinding272 + 20,
      );
    });
    let timelineDefinitionGMOUNBTQBinding113 = 0,
      timelineDefinitionGMOUNBTQBinding114 = 0;
    logger.debug("tasks.length", timelineDefinitionGMOUNBTQBinding102.length);
    for (let [
      timelineDefinitionGMOUNBTQBinding191,
      timelineDefinitionGMOUNBTQBinding192,
    ] of timelineDefinitionGMOUNBTQBinding102.entries()) {
      let timelineDefinitionGMOUNBTQBinding202 = {
          number: timelineDefinitionGMOUNBTQBinding191,
          descr: timelineDefinitionGMOUNBTQBinding192,
          section: timelineDefinitionGMOUNBTQBinding192.section,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionGMOUNBTQBinding106,
        },
        timelineDefinitionGMOUNBTQBinding203 =
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding101,
            timelineDefinitionGMOUNBTQBinding202,
            timelineDefinitionGMOUNBTQBinding97,
          );
      logger.debug(
        "taskHeight before draw",
        timelineDefinitionGMOUNBTQBinding203,
      );
      timelineDefinitionGMOUNBTQBinding106 = Math.max(
        timelineDefinitionGMOUNBTQBinding106,
        timelineDefinitionGMOUNBTQBinding203 + 20,
      );
      timelineDefinitionGMOUNBTQBinding113 = Math.max(
        timelineDefinitionGMOUNBTQBinding113,
        timelineDefinitionGMOUNBTQBinding192.events.length,
      );
      let timelineDefinitionGMOUNBTQBinding204 = 0;
      for (let timelineDefinitionGMOUNBTQBinding278 of timelineDefinitionGMOUNBTQBinding192.events) {
        let timelineDefinitionGMOUNBTQBinding283 = {
          descr: timelineDefinitionGMOUNBTQBinding278,
          section: timelineDefinitionGMOUNBTQBinding192.section,
          number: timelineDefinitionGMOUNBTQBinding192.section,
          width: 150,
          padding: 20,
          maxHeight: 50,
        };
        timelineDefinitionGMOUNBTQBinding204 +=
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding101,
            timelineDefinitionGMOUNBTQBinding283,
            timelineDefinitionGMOUNBTQBinding97,
          );
      }
      timelineDefinitionGMOUNBTQBinding192.events.length > 0 &&
        (timelineDefinitionGMOUNBTQBinding204 +=
          (timelineDefinitionGMOUNBTQBinding192.events.length - 1) * 10);
      timelineDefinitionGMOUNBTQBinding114 = Math.max(
        timelineDefinitionGMOUNBTQBinding114,
        timelineDefinitionGMOUNBTQBinding204,
      );
    }
    logger.debug(
      "maxSectionHeight before draw",
      timelineDefinitionGMOUNBTQBinding105,
    );
    logger.debug(
      "maxTaskHeight before draw",
      timelineDefinitionGMOUNBTQBinding106,
    );
    timelineDefinitionGMOUNBTQBinding104 &&
    timelineDefinitionGMOUNBTQBinding104.length > 0
      ? timelineDefinitionGMOUNBTQBinding104.forEach((item) => {
          let timelineDefinitionGMOUNBTQBinding210 =
              timelineDefinitionGMOUNBTQBinding102.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionGMOUNBTQBinding211 = {
              number: timelineDefinitionGMOUNBTQBinding111,
              descr: item,
              section: timelineDefinitionGMOUNBTQBinding111,
              width:
                200 * Math.max(timelineDefinitionGMOUNBTQBinding210.length, 1) -
                50,
              padding: 20,
              maxHeight: timelineDefinitionGMOUNBTQBinding105,
            };
          logger.debug("sectionNode", timelineDefinitionGMOUNBTQBinding211);
          let timelineDefinitionGMOUNBTQBinding212 =
              timelineDefinitionGMOUNBTQBinding101.append("g"),
            timelineDefinitionGMOUNBTQBinding213 =
              timelineDefinitionGMOUNBTQBinding39.drawNode(
                timelineDefinitionGMOUNBTQBinding212,
                timelineDefinitionGMOUNBTQBinding211,
                timelineDefinitionGMOUNBTQBinding111,
                timelineDefinitionGMOUNBTQBinding97,
                timelineDefinitionGMOUNBTQInput3,
              );
          logger.debug(
            "sectionNode output",
            timelineDefinitionGMOUNBTQBinding213,
          );
          timelineDefinitionGMOUNBTQBinding212.attr(
            "transform",
            `translate(${timelineDefinitionGMOUNBTQBinding109}, ${timelineDefinitionGMOUNBTQBinding108})`,
          );
          timelineDefinitionGMOUNBTQBinding110 +=
            timelineDefinitionGMOUNBTQBinding105 + 50;
          timelineDefinitionGMOUNBTQBinding210.length > 0 &&
            timelineDefinitionGMOUNBTQBinding41(
              timelineDefinitionGMOUNBTQBinding101,
              timelineDefinitionGMOUNBTQBinding210,
              timelineDefinitionGMOUNBTQBinding111,
              timelineDefinitionGMOUNBTQBinding109,
              timelineDefinitionGMOUNBTQBinding110,
              timelineDefinitionGMOUNBTQBinding106,
              timelineDefinitionGMOUNBTQBinding97,
              timelineDefinitionGMOUNBTQBinding113,
              timelineDefinitionGMOUNBTQBinding114,
              timelineDefinitionGMOUNBTQBinding105,
              false,
              timelineDefinitionGMOUNBTQInput3,
            );
          timelineDefinitionGMOUNBTQBinding109 +=
            200 * Math.max(timelineDefinitionGMOUNBTQBinding210.length, 1);
          timelineDefinitionGMOUNBTQBinding110 =
            timelineDefinitionGMOUNBTQBinding108;
          timelineDefinitionGMOUNBTQBinding111++;
        })
      : ((timelineDefinitionGMOUNBTQBinding112 = false),
        timelineDefinitionGMOUNBTQBinding41(
          timelineDefinitionGMOUNBTQBinding101,
          timelineDefinitionGMOUNBTQBinding102,
          timelineDefinitionGMOUNBTQBinding111,
          timelineDefinitionGMOUNBTQBinding109,
          timelineDefinitionGMOUNBTQBinding110,
          timelineDefinitionGMOUNBTQBinding106,
          timelineDefinitionGMOUNBTQBinding97,
          timelineDefinitionGMOUNBTQBinding113,
          timelineDefinitionGMOUNBTQBinding114,
          timelineDefinitionGMOUNBTQBinding105,
          true,
          timelineDefinitionGMOUNBTQInput3,
        ));
    let timelineDefinitionGMOUNBTQBinding115 =
      timelineDefinitionGMOUNBTQBinding101.node().getBBox();
    if (
      (logger.debug("bounds", timelineDefinitionGMOUNBTQBinding115),
      timelineDefinitionGMOUNBTQBinding103 &&
        timelineDefinitionGMOUNBTQBinding101
          .append("text")
          .text(timelineDefinitionGMOUNBTQBinding103)
          .attr(
            "x",
            look === "neo"
              ? timelineDefinitionGMOUNBTQBinding115.x * 2 +
                  timelineDefinitionGMOUNBTQBinding98
              : timelineDefinitionGMOUNBTQBinding115.width / 2 -
                  timelineDefinitionGMOUNBTQBinding98,
          )
          .attr("font-size", "4ex")
          .attr("font-weight", "bold")
          .attr("y", 20),
      (timelineDefinitionGMOUNBTQBinding107 =
        timelineDefinitionGMOUNBTQBinding112
          ? timelineDefinitionGMOUNBTQBinding105 +
            timelineDefinitionGMOUNBTQBinding106 +
            150
          : timelineDefinitionGMOUNBTQBinding106 + 100),
      timelineDefinitionGMOUNBTQBinding101
        .append("g")
        .attr("class", "lineWrapper")
        .append("line")
        .attr("x1", timelineDefinitionGMOUNBTQBinding98)
        .attr("y1", timelineDefinitionGMOUNBTQBinding107)
        .attr(
          "x2",
          timelineDefinitionGMOUNBTQBinding115.width +
            3 * timelineDefinitionGMOUNBTQBinding98,
        )
        .attr("y2", timelineDefinitionGMOUNBTQBinding107)
        .attr("stroke-width", 4)
        .attr("stroke", "black")
        .attr(
          "marker-end",
          `url(#${timelineDefinitionGMOUNBTQInput3}-arrowhead)`,
        ),
      look === "neo" && useGradient && theme !== "neutral")
    ) {
      let timelineDefinitionGMOUNBTQBinding243 =
          timelineDefinitionGMOUNBTQBinding101.select("defs"),
        timelineDefinitionGMOUNBTQBinding244 = (
          timelineDefinitionGMOUNBTQBinding243.empty()
            ? timelineDefinitionGMOUNBTQBinding101.append("defs")
            : timelineDefinitionGMOUNBTQBinding243
        )
          .append("linearGradient")
          .attr(
            "id",
            timelineDefinitionGMOUNBTQBinding101.attr("id") + "-gradient",
          )
          .attr("gradientUnits", "objectBoundingBox")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "0%");
      timelineDefinitionGMOUNBTQBinding244
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", gradientStart)
        .attr("stop-opacity", 1);
      timelineDefinitionGMOUNBTQBinding244
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", gradientStop)
        .attr("stop-opacity", 1);
    }
    q(
      undefined,
      timelineDefinitionGMOUNBTQBinding101,
      timelineDefinitionGMOUNBTQBinding97.timeline?.padding ?? 50,
      timelineDefinitionGMOUNBTQBinding97.timeline?.useMaxWidth ?? false,
    );
  }, "draw");
  timelineDefinitionGMOUNBTQBinding41 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput32,
    timelineDefinitionGMOUNBTQInput33,
    timelineDefinitionGMOUNBTQInput34,
    timelineDefinitionGMOUNBTQInput35,
    timelineDefinitionGMOUNBTQInput36,
    timelineDefinitionGMOUNBTQInput37,
    timelineDefinitionGMOUNBTQInput38,
    timelineDefinitionGMOUNBTQInput39,
    timelineDefinitionGMOUNBTQInput40,
    timelineDefinitionGMOUNBTQInput41,
    timelineDefinitionGMOUNBTQInput42,
    timelineDefinitionGMOUNBTQInput43,
  ) {
    for (let timelineDefinitionGMOUNBTQBinding172 of timelineDefinitionGMOUNBTQInput33) {
      let timelineDefinitionGMOUNBTQBinding173 = {
        descr: timelineDefinitionGMOUNBTQBinding172.task,
        section: timelineDefinitionGMOUNBTQInput34,
        number: timelineDefinitionGMOUNBTQInput34,
        width: 150,
        padding: 20,
        maxHeight: timelineDefinitionGMOUNBTQInput37,
      };
      logger.debug("taskNode", timelineDefinitionGMOUNBTQBinding173);
      let timelineDefinitionGMOUNBTQBinding174 =
          timelineDefinitionGMOUNBTQInput32
            .append("g")
            .attr("class", "taskWrapper"),
        timelineDefinitionGMOUNBTQBinding175 =
          timelineDefinitionGMOUNBTQBinding39.drawNode(
            timelineDefinitionGMOUNBTQBinding174,
            timelineDefinitionGMOUNBTQBinding173,
            timelineDefinitionGMOUNBTQInput34,
            timelineDefinitionGMOUNBTQInput38,
            timelineDefinitionGMOUNBTQInput43,
          ).height;
      if (
        (logger.debug(
          "taskHeight after draw",
          timelineDefinitionGMOUNBTQBinding175,
        ),
        timelineDefinitionGMOUNBTQBinding174.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQInput35}, ${timelineDefinitionGMOUNBTQInput36})`,
        ),
        (timelineDefinitionGMOUNBTQInput37 = Math.max(
          timelineDefinitionGMOUNBTQInput37,
          timelineDefinitionGMOUNBTQBinding175,
        )),
        timelineDefinitionGMOUNBTQBinding172.events)
      ) {
        let timelineDefinitionGMOUNBTQBinding247 =
            timelineDefinitionGMOUNBTQInput32
              .append("g")
              .attr("class", "lineWrapper"),
          timelineDefinitionGMOUNBTQBinding248 =
            timelineDefinitionGMOUNBTQInput37;
        timelineDefinitionGMOUNBTQInput36 += 100;
        timelineDefinitionGMOUNBTQBinding248 +=
          timelineDefinitionGMOUNBTQBinding42(
            timelineDefinitionGMOUNBTQInput32,
            timelineDefinitionGMOUNBTQBinding172.events,
            timelineDefinitionGMOUNBTQInput34,
            timelineDefinitionGMOUNBTQInput35,
            timelineDefinitionGMOUNBTQInput36,
            timelineDefinitionGMOUNBTQInput38,
            timelineDefinitionGMOUNBTQInput43,
          );
        timelineDefinitionGMOUNBTQInput36 -= 100;
        timelineDefinitionGMOUNBTQBinding247
          .append("line")
          .attr("x1", timelineDefinitionGMOUNBTQInput35 + 95)
          .attr(
            "y1",
            timelineDefinitionGMOUNBTQInput36 +
              timelineDefinitionGMOUNBTQInput37,
          )
          .attr("x2", timelineDefinitionGMOUNBTQInput35 + 95)
          .attr(
            "y2",
            timelineDefinitionGMOUNBTQInput36 +
              timelineDefinitionGMOUNBTQInput37 +
              100 +
              timelineDefinitionGMOUNBTQInput40 +
              100,
          )
          .attr("stroke-width", 2)
          .attr("stroke", "black")
          .attr(
            "marker-end",
            `url(#${timelineDefinitionGMOUNBTQInput43}-arrowhead)`,
          )
          .attr("stroke-dasharray", "5,5");
      }
      timelineDefinitionGMOUNBTQInput35 += 200;
      timelineDefinitionGMOUNBTQInput42 &&
        !timelineDefinitionGMOUNBTQInput38.timeline?.disableMulticolor &&
        timelineDefinitionGMOUNBTQInput34++;
    }
    timelineDefinitionGMOUNBTQInput36 -= 10;
  }, "drawTasks");
  timelineDefinitionGMOUNBTQBinding42 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput95,
    timelineDefinitionGMOUNBTQInput96,
    timelineDefinitionGMOUNBTQInput97,
    timelineDefinitionGMOUNBTQInput98,
    timelineDefinitionGMOUNBTQInput99,
    timelineDefinitionGMOUNBTQInput100,
    timelineDefinitionGMOUNBTQInput101,
  ) {
    let timelineDefinitionGMOUNBTQBinding249 = 0,
      timelineDefinitionGMOUNBTQBinding250 = timelineDefinitionGMOUNBTQInput99;
    timelineDefinitionGMOUNBTQInput99 += 100;
    for (let timelineDefinitionGMOUNBTQBinding259 of timelineDefinitionGMOUNBTQInput96) {
      let timelineDefinitionGMOUNBTQBinding261 = {
        descr: timelineDefinitionGMOUNBTQBinding259,
        section: timelineDefinitionGMOUNBTQInput97,
        number: timelineDefinitionGMOUNBTQInput97,
        width: 150,
        padding: 20,
        maxHeight: 50,
      };
      logger.debug("eventNode", timelineDefinitionGMOUNBTQBinding261);
      let timelineDefinitionGMOUNBTQBinding262 =
          timelineDefinitionGMOUNBTQInput95
            .append("g")
            .attr("class", "eventWrapper"),
        timelineDefinitionGMOUNBTQBinding263 =
          timelineDefinitionGMOUNBTQBinding39.drawNode(
            timelineDefinitionGMOUNBTQBinding262,
            timelineDefinitionGMOUNBTQBinding261,
            timelineDefinitionGMOUNBTQInput97,
            timelineDefinitionGMOUNBTQInput100,
            timelineDefinitionGMOUNBTQInput101,
            true,
          ).height;
      timelineDefinitionGMOUNBTQBinding249 +=
        timelineDefinitionGMOUNBTQBinding263;
      timelineDefinitionGMOUNBTQBinding262.attr(
        "transform",
        `translate(${timelineDefinitionGMOUNBTQInput98}, ${timelineDefinitionGMOUNBTQInput99})`,
      );
      timelineDefinitionGMOUNBTQInput99 =
        timelineDefinitionGMOUNBTQInput99 +
        10 +
        timelineDefinitionGMOUNBTQBinding263;
    }
    return (
      (timelineDefinitionGMOUNBTQInput99 =
        timelineDefinitionGMOUNBTQBinding250),
      timelineDefinitionGMOUNBTQBinding249
    );
  }, "drawEvents");
  timelineDefinitionGMOUNBTQBinding43 = {
    setConf: defineFunctionName(() => {}, "setConf"),
    draw: timelineDefinitionGMOUNBTQBinding40,
  };
  timelineDefinitionGMOUNBTQBinding44 = 200;
  timelineDefinitionGMOUNBTQBinding45 = 5;
  timelineDefinitionGMOUNBTQBinding46 =
    timelineDefinitionGMOUNBTQBinding44 +
    timelineDefinitionGMOUNBTQBinding45 * 2;
  timelineDefinitionGMOUNBTQBinding47 =
    timelineDefinitionGMOUNBTQBinding44 + 100;
  _e =
    timelineDefinitionGMOUNBTQBinding47 +
    timelineDefinitionGMOUNBTQBinding45 * 2;
  $ = 10;
  timelineDefinitionGMOUNBTQBinding48 = 0;
  timelineDefinitionGMOUNBTQBinding49 = 20;
  be = 20;
  timelineDefinitionGMOUNBTQBinding50 = 30;
  timelineDefinitionGMOUNBTQBinding51 = 50;
  timelineDefinitionGMOUNBTQBinding52 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput6,
    timelineDefinitionGMOUNBTQInput7,
    timelineDefinitionGMOUNBTQInput8,
    timelineDefinitionGMOUNBTQInput9,
  ) {
    let timelineDefinitionGMOUNBTQBinding116 = b(),
      timelineDefinitionGMOUNBTQBinding117 =
        timelineDefinitionGMOUNBTQBinding116.timeline?.leftMargin ?? 50;
    logger.debug("timeline", timelineDefinitionGMOUNBTQInput9.db);
    let timelineDefinitionGMOUNBTQBinding118 = n(
      timelineDefinitionGMOUNBTQInput7,
    );
    timelineDefinitionGMOUNBTQBinding118.append("g");
    let timelineDefinitionGMOUNBTQBinding119 =
        timelineDefinitionGMOUNBTQInput9.db.getTasks(),
      timelineDefinitionGMOUNBTQBinding120 = timelineDefinitionGMOUNBTQInput9.db
        .getCommonDb()
        .getDiagramTitle();
    logger.debug("task", timelineDefinitionGMOUNBTQBinding119);
    timelineDefinitionGMOUNBTQBinding39.initGraphics(
      timelineDefinitionGMOUNBTQBinding118,
    );
    let timelineDefinitionGMOUNBTQBinding121 =
      timelineDefinitionGMOUNBTQInput9.db.getSections();
    logger.debug("sections", timelineDefinitionGMOUNBTQBinding121);
    let timelineDefinitionGMOUNBTQBinding122 = 0,
      timelineDefinitionGMOUNBTQBinding123 = 0,
      timelineDefinitionGMOUNBTQBinding124 =
        50 + timelineDefinitionGMOUNBTQBinding117,
      timelineDefinitionGMOUNBTQBinding125 = 50,
      timelineDefinitionGMOUNBTQBinding126 =
        timelineDefinitionGMOUNBTQBinding125,
      timelineDefinitionGMOUNBTQBinding127 =
        timelineDefinitionGMOUNBTQBinding124,
      timelineDefinitionGMOUNBTQBinding128 =
        timelineDefinitionGMOUNBTQBinding46 + be,
      timelineDefinitionGMOUNBTQBinding129 =
        _e + timelineDefinitionGMOUNBTQBinding51,
      timelineDefinitionGMOUNBTQBinding130 =
        timelineDefinitionGMOUNBTQBinding127 +
        timelineDefinitionGMOUNBTQBinding128,
      timelineDefinitionGMOUNBTQBinding131 = 0,
      timelineDefinitionGMOUNBTQBinding132 =
        timelineDefinitionGMOUNBTQBinding121 &&
        timelineDefinitionGMOUNBTQBinding121.length > 0,
      timelineDefinitionGMOUNBTQBinding133 =
        timelineDefinitionGMOUNBTQBinding132
          ? timelineDefinitionGMOUNBTQBinding130
          : timelineDefinitionGMOUNBTQBinding124 +
            timelineDefinitionGMOUNBTQBinding128,
      timelineDefinitionGMOUNBTQBinding134 = Math.max(
        50,
        timelineDefinitionGMOUNBTQBinding128 +
          timelineDefinitionGMOUNBTQBinding129 -
          timelineDefinitionGMOUNBTQBinding45 * 2,
      );
    timelineDefinitionGMOUNBTQBinding121.forEach(function (item) {
      let timelineDefinitionGMOUNBTQBinding273 = {
          number: timelineDefinitionGMOUNBTQBinding131,
          descr: item,
          section: timelineDefinitionGMOUNBTQBinding131,
          width: timelineDefinitionGMOUNBTQBinding134,
          padding: timelineDefinitionGMOUNBTQBinding45,
          maxHeight: timelineDefinitionGMOUNBTQBinding122,
        },
        timelineDefinitionGMOUNBTQBinding274 =
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding118,
            timelineDefinitionGMOUNBTQBinding273,
            timelineDefinitionGMOUNBTQBinding116,
          );
      logger.debug(
        "sectionHeight before draw",
        timelineDefinitionGMOUNBTQBinding274,
      );
      timelineDefinitionGMOUNBTQBinding122 = Math.max(
        timelineDefinitionGMOUNBTQBinding122,
        timelineDefinitionGMOUNBTQBinding274,
      );
    });
    let timelineDefinitionGMOUNBTQBinding135 = 0;
    logger.debug("tasks.length", timelineDefinitionGMOUNBTQBinding119.length);
    for (let [
      timelineDefinitionGMOUNBTQBinding222,
      timelineDefinitionGMOUNBTQBinding223,
    ] of timelineDefinitionGMOUNBTQBinding119.entries()) {
      let timelineDefinitionGMOUNBTQBinding232 = {
          number: timelineDefinitionGMOUNBTQBinding222,
          descr: timelineDefinitionGMOUNBTQBinding223,
          section: timelineDefinitionGMOUNBTQBinding223.section,
          width: timelineDefinitionGMOUNBTQBinding44,
          padding: timelineDefinitionGMOUNBTQBinding45,
          maxHeight: timelineDefinitionGMOUNBTQBinding123,
        },
        timelineDefinitionGMOUNBTQBinding233 =
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding118,
            timelineDefinitionGMOUNBTQBinding232,
            timelineDefinitionGMOUNBTQBinding116,
          );
      logger.debug(
        "taskHeight before draw",
        timelineDefinitionGMOUNBTQBinding233,
      );
      timelineDefinitionGMOUNBTQBinding123 = Math.max(
        timelineDefinitionGMOUNBTQBinding123,
        timelineDefinitionGMOUNBTQBinding233,
      );
      let timelineDefinitionGMOUNBTQBinding234 = 0;
      for (let timelineDefinitionGMOUNBTQBinding279 of timelineDefinitionGMOUNBTQBinding223.events) {
        let timelineDefinitionGMOUNBTQBinding284 = {
          descr: timelineDefinitionGMOUNBTQBinding279,
          section: timelineDefinitionGMOUNBTQBinding223.section,
          number: timelineDefinitionGMOUNBTQBinding223.section,
          width: timelineDefinitionGMOUNBTQBinding47,
          padding: timelineDefinitionGMOUNBTQBinding45,
          maxHeight: 50,
        };
        timelineDefinitionGMOUNBTQBinding234 +=
          timelineDefinitionGMOUNBTQBinding39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQBinding118,
            timelineDefinitionGMOUNBTQBinding284,
            timelineDefinitionGMOUNBTQBinding116,
          );
      }
      timelineDefinitionGMOUNBTQBinding223.events.length > 0 &&
        (timelineDefinitionGMOUNBTQBinding234 +=
          (timelineDefinitionGMOUNBTQBinding223.events.length - 1) * $);
      timelineDefinitionGMOUNBTQBinding135 =
        Math.max(
          timelineDefinitionGMOUNBTQBinding135,
          timelineDefinitionGMOUNBTQBinding234,
        ) + timelineDefinitionGMOUNBTQBinding48;
    }
    logger.debug(
      "maxSectionHeight before draw",
      timelineDefinitionGMOUNBTQBinding122,
    );
    logger.debug(
      "maxTaskHeight before draw",
      timelineDefinitionGMOUNBTQBinding123,
    );
    let timelineDefinitionGMOUNBTQBinding136 =
      Math.max(
        timelineDefinitionGMOUNBTQBinding123,
        timelineDefinitionGMOUNBTQBinding135,
      ) + timelineDefinitionGMOUNBTQBinding50;
    timelineDefinitionGMOUNBTQBinding132
      ? timelineDefinitionGMOUNBTQBinding121.forEach((item) => {
          let timelineDefinitionGMOUNBTQBinding214 =
              timelineDefinitionGMOUNBTQBinding119.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionGMOUNBTQBinding215 = {
              number: timelineDefinitionGMOUNBTQBinding131,
              descr: item,
              section: timelineDefinitionGMOUNBTQBinding131,
              width: timelineDefinitionGMOUNBTQBinding134,
              padding: timelineDefinitionGMOUNBTQBinding45,
              maxHeight: timelineDefinitionGMOUNBTQBinding122,
            };
          logger.debug("sectionNode", timelineDefinitionGMOUNBTQBinding215);
          let timelineDefinitionGMOUNBTQBinding216 =
              timelineDefinitionGMOUNBTQBinding118.append("g"),
            timelineDefinitionGMOUNBTQBinding217 =
              timelineDefinitionGMOUNBTQBinding39.drawNode(
                timelineDefinitionGMOUNBTQBinding216,
                timelineDefinitionGMOUNBTQBinding215,
                timelineDefinitionGMOUNBTQBinding131,
                timelineDefinitionGMOUNBTQBinding116,
              );
          logger.debug(
            "sectionNode output",
            timelineDefinitionGMOUNBTQBinding217,
          );
          let timelineDefinitionGMOUNBTQBinding218 =
            timelineDefinitionGMOUNBTQBinding133 -
            timelineDefinitionGMOUNBTQBinding128;
          timelineDefinitionGMOUNBTQBinding216.attr(
            "transform",
            `translate(${timelineDefinitionGMOUNBTQBinding218}, ${timelineDefinitionGMOUNBTQBinding125})`,
          );
          let timelineDefinitionGMOUNBTQBinding219 =
            timelineDefinitionGMOUNBTQBinding125 +
            timelineDefinitionGMOUNBTQBinding217.height +
            timelineDefinitionGMOUNBTQBinding49;
          timelineDefinitionGMOUNBTQBinding214.length > 0 &&
            timelineDefinitionGMOUNBTQBinding53(
              timelineDefinitionGMOUNBTQBinding118,
              timelineDefinitionGMOUNBTQBinding214,
              timelineDefinitionGMOUNBTQBinding131,
              timelineDefinitionGMOUNBTQBinding133,
              timelineDefinitionGMOUNBTQBinding219,
              timelineDefinitionGMOUNBTQBinding123,
              timelineDefinitionGMOUNBTQBinding116,
              timelineDefinitionGMOUNBTQBinding136,
              false,
            );
          let timelineDefinitionGMOUNBTQBinding220 =
              timelineDefinitionGMOUNBTQBinding214.length,
            timelineDefinitionGMOUNBTQBinding221 =
              timelineDefinitionGMOUNBTQBinding217.height +
              timelineDefinitionGMOUNBTQBinding49 +
              timelineDefinitionGMOUNBTQBinding136 *
                Math.max(timelineDefinitionGMOUNBTQBinding220, 1) -
              (timelineDefinitionGMOUNBTQBinding220 > 0
                ? timelineDefinitionGMOUNBTQBinding50 * 2
                : 0);
          timelineDefinitionGMOUNBTQBinding125 +=
            timelineDefinitionGMOUNBTQBinding221;
          timelineDefinitionGMOUNBTQBinding131++;
        })
      : timelineDefinitionGMOUNBTQBinding53(
          timelineDefinitionGMOUNBTQBinding118,
          timelineDefinitionGMOUNBTQBinding119,
          timelineDefinitionGMOUNBTQBinding131,
          timelineDefinitionGMOUNBTQBinding133,
          timelineDefinitionGMOUNBTQBinding125,
          timelineDefinitionGMOUNBTQBinding123,
          timelineDefinitionGMOUNBTQBinding116,
          timelineDefinitionGMOUNBTQBinding136,
          true,
        );
    let timelineDefinitionGMOUNBTQBinding137 =
      timelineDefinitionGMOUNBTQBinding118.node()?.getBBox();
    if (!timelineDefinitionGMOUNBTQBinding137) throw Error("bbox not found");
    if (
      (logger.debug("bounds", timelineDefinitionGMOUNBTQBinding137),
      timelineDefinitionGMOUNBTQBinding120)
    ) {
      if (
        (timelineDefinitionGMOUNBTQBinding118
          .append("text")
          .text(timelineDefinitionGMOUNBTQBinding120)
          .attr(
            "x",
            timelineDefinitionGMOUNBTQBinding137.width / 2 -
              timelineDefinitionGMOUNBTQBinding117,
          )
          .attr("font-size", "4ex")
          .attr("font-weight", "bold")
          .attr("y", 20),
        (timelineDefinitionGMOUNBTQBinding137 =
          timelineDefinitionGMOUNBTQBinding118.node()?.getBBox()),
        !timelineDefinitionGMOUNBTQBinding137)
      )
        throw Error("bbox not found");
      logger.debug("bounds after title", timelineDefinitionGMOUNBTQBinding137);
    }
    let [timelineDefinitionGMOUNBTQBinding138] = chunk5PVQY5BWP(
        timelineDefinitionGMOUNBTQBinding116.fontSize,
      ),
      timelineDefinitionGMOUNBTQBinding139 =
        (timelineDefinitionGMOUNBTQBinding138 ?? 16) * 2,
      timelineDefinitionGMOUNBTQBinding140 =
        (timelineDefinitionGMOUNBTQBinding138 ?? 16) * 0.5 + 20,
      timelineDefinitionGMOUNBTQBinding141 =
        timelineDefinitionGMOUNBTQBinding118
          .append("g")
          .attr("class", "lineWrapper");
    timelineDefinitionGMOUNBTQBinding141
      .append("line")
      .attr("x1", timelineDefinitionGMOUNBTQBinding133)
      .attr(
        "y1",
        timelineDefinitionGMOUNBTQBinding126 -
          timelineDefinitionGMOUNBTQBinding139,
      )
      .attr("x2", timelineDefinitionGMOUNBTQBinding133)
      .attr(
        "y2",
        timelineDefinitionGMOUNBTQBinding137.y +
          timelineDefinitionGMOUNBTQBinding137.height +
          timelineDefinitionGMOUNBTQBinding140,
      )
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    timelineDefinitionGMOUNBTQBinding141.lower();
    q(
      undefined,
      timelineDefinitionGMOUNBTQBinding118,
      timelineDefinitionGMOUNBTQBinding116.timeline?.padding ?? 50,
      timelineDefinitionGMOUNBTQBinding116.timeline?.useMaxWidth ?? false,
    );
  }, "draw");
  timelineDefinitionGMOUNBTQBinding53 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput69,
    timelineDefinitionGMOUNBTQInput70,
    timelineDefinitionGMOUNBTQInput71,
    timelineDefinitionGMOUNBTQInput72,
    timelineDefinitionGMOUNBTQInput73,
    timelineDefinitionGMOUNBTQInput74,
    timelineDefinitionGMOUNBTQInput75,
    timelineDefinitionGMOUNBTQInput76,
    timelineDefinitionGMOUNBTQInput77,
  ) {
    for (let timelineDefinitionGMOUNBTQBinding226 of timelineDefinitionGMOUNBTQInput70) {
      let timelineDefinitionGMOUNBTQBinding227 = {
        descr: timelineDefinitionGMOUNBTQBinding226.task,
        section: timelineDefinitionGMOUNBTQInput71,
        number: timelineDefinitionGMOUNBTQInput71,
        width: timelineDefinitionGMOUNBTQBinding44,
        padding: timelineDefinitionGMOUNBTQBinding45,
        maxHeight: timelineDefinitionGMOUNBTQInput74,
      };
      logger.debug("taskNode", timelineDefinitionGMOUNBTQBinding227);
      let timelineDefinitionGMOUNBTQBinding228 =
          timelineDefinitionGMOUNBTQInput69
            .append("g")
            .attr("class", "taskWrapper"),
        timelineDefinitionGMOUNBTQBinding229 =
          timelineDefinitionGMOUNBTQBinding39.drawNode(
            timelineDefinitionGMOUNBTQBinding228,
            timelineDefinitionGMOUNBTQBinding227,
            timelineDefinitionGMOUNBTQInput71,
            timelineDefinitionGMOUNBTQInput75,
          ),
        timelineDefinitionGMOUNBTQBinding230 =
          timelineDefinitionGMOUNBTQBinding229.height;
      logger.debug(
        "taskHeight after draw",
        timelineDefinitionGMOUNBTQBinding230,
      );
      let timelineDefinitionGMOUNBTQBinding231 =
        timelineDefinitionGMOUNBTQInput72 -
        be -
        timelineDefinitionGMOUNBTQBinding229.width;
      if (
        (timelineDefinitionGMOUNBTQBinding228.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQBinding231}, ${timelineDefinitionGMOUNBTQInput73})`,
        ),
        (timelineDefinitionGMOUNBTQInput74 = Math.max(
          timelineDefinitionGMOUNBTQInput74,
          timelineDefinitionGMOUNBTQBinding230,
        )),
        timelineDefinitionGMOUNBTQBinding226.events &&
          timelineDefinitionGMOUNBTQBinding226.events.length > 0)
      ) {
        let timelineDefinitionGMOUNBTQBinding292 =
            timelineDefinitionGMOUNBTQInput73,
          timelineDefinitionGMOUNBTQBinding293 =
            timelineDefinitionGMOUNBTQInput72 +
            timelineDefinitionGMOUNBTQBinding51;
        timelineDefinitionGMOUNBTQBinding54(
          timelineDefinitionGMOUNBTQInput69,
          timelineDefinitionGMOUNBTQBinding226.events,
          timelineDefinitionGMOUNBTQInput71,
          timelineDefinitionGMOUNBTQInput72,
          timelineDefinitionGMOUNBTQBinding293,
          timelineDefinitionGMOUNBTQBinding292,
          timelineDefinitionGMOUNBTQInput75,
        );
      }
      timelineDefinitionGMOUNBTQInput73 += timelineDefinitionGMOUNBTQInput76;
      timelineDefinitionGMOUNBTQInput77 &&
        !timelineDefinitionGMOUNBTQInput75.timeline?.disableMulticolor &&
        timelineDefinitionGMOUNBTQInput71++;
    }
  }, "drawTasks");
  timelineDefinitionGMOUNBTQBinding54 = defineFunctionName(function (
    timelineDefinitionGMOUNBTQInput51,
    timelineDefinitionGMOUNBTQInput52,
    timelineDefinitionGMOUNBTQInput53,
    timelineDefinitionGMOUNBTQInput54,
    timelineDefinitionGMOUNBTQInput55,
    timelineDefinitionGMOUNBTQInput56,
    timelineDefinitionGMOUNBTQInput57,
  ) {
    let timelineDefinitionGMOUNBTQBinding188 =
      timelineDefinitionGMOUNBTQInput56;
    for (let timelineDefinitionGMOUNBTQBinding201 of timelineDefinitionGMOUNBTQInput52) {
      let timelineDefinitionGMOUNBTQBinding205 = {
        descr: timelineDefinitionGMOUNBTQBinding201,
        section: timelineDefinitionGMOUNBTQInput53,
        number: timelineDefinitionGMOUNBTQInput53,
        width: timelineDefinitionGMOUNBTQBinding47,
        padding: timelineDefinitionGMOUNBTQBinding45,
        maxHeight: 0,
      };
      logger.debug("eventNode", timelineDefinitionGMOUNBTQBinding205);
      let timelineDefinitionGMOUNBTQBinding206 =
          timelineDefinitionGMOUNBTQInput51
            .append("g")
            .attr("class", "eventWrapper"),
        timelineDefinitionGMOUNBTQBinding207 =
          timelineDefinitionGMOUNBTQBinding39.drawNode(
            timelineDefinitionGMOUNBTQBinding206,
            timelineDefinitionGMOUNBTQBinding205,
            timelineDefinitionGMOUNBTQInput53,
            timelineDefinitionGMOUNBTQInput57,
          ).height;
      timelineDefinitionGMOUNBTQBinding206.attr(
        "transform",
        `translate(${timelineDefinitionGMOUNBTQInput55}, ${timelineDefinitionGMOUNBTQBinding188})`,
      );
      let timelineDefinitionGMOUNBTQBinding208 =
          timelineDefinitionGMOUNBTQInput51
            .append("g")
            .attr("class", "lineWrapper"),
        timelineDefinitionGMOUNBTQBinding209 =
          timelineDefinitionGMOUNBTQBinding188 +
          timelineDefinitionGMOUNBTQBinding207 / 2;
      timelineDefinitionGMOUNBTQBinding208
        .append("line")
        .attr("x1", timelineDefinitionGMOUNBTQInput54)
        .attr("y1", timelineDefinitionGMOUNBTQBinding209)
        .attr("x2", timelineDefinitionGMOUNBTQInput55)
        .attr("y2", timelineDefinitionGMOUNBTQBinding209)
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .attr("marker-end", "url(#arrowhead)")
        .attr("stroke-dasharray", "5,5");
      timelineDefinitionGMOUNBTQBinding188 =
        timelineDefinitionGMOUNBTQBinding188 +
        timelineDefinitionGMOUNBTQBinding207 +
        $;
    }
    return (
      timelineDefinitionGMOUNBTQBinding188 - timelineDefinitionGMOUNBTQInput56
    );
  }, "drawEvents");
  timelineDefinitionGMOUNBTQBinding55 = {
    setConf: defineFunctionName(() => {}, "setConf"),
    draw: timelineDefinitionGMOUNBTQBinding52,
  };
  timelineDefinitionGMOUNBTQBinding56 = defineFunctionName(
    (timelineDefinitionGMOUNBTQInput27) => {
      let { theme } = y(),
        timelineDefinitionGMOUNBTQBinding156 = theme?.includes("dark"),
        timelineDefinitionGMOUNBTQBinding157 = theme?.includes("color"),
        timelineDefinitionGMOUNBTQBinding158 =
          timelineDefinitionGMOUNBTQInput27.svgId?.replace(/^#/, "") ?? "",
        timelineDefinitionGMOUNBTQBinding159 =
          timelineDefinitionGMOUNBTQBinding158
            ? `url(#${timelineDefinitionGMOUNBTQBinding158}-drop-shadow)`
            : (timelineDefinitionGMOUNBTQInput27.dropShadow ?? "none"),
        timelineDefinitionGMOUNBTQBinding160 = "";
      for (
        let timelineDefinitionGMOUNBTQBinding176 = 0;
        timelineDefinitionGMOUNBTQBinding176 <
        timelineDefinitionGMOUNBTQInput27.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQBinding176++
      ) {
        let timelineDefinitionGMOUNBTQBinding181 = `${17 - 3 * timelineDefinitionGMOUNBTQBinding176}`,
          timelineDefinitionGMOUNBTQBinding182 =
            timelineDefinitionGMOUNBTQBinding157
              ? timelineDefinitionGMOUNBTQInput27.borderColorArray[
                  timelineDefinitionGMOUNBTQBinding176
                ]
              : timelineDefinitionGMOUNBTQInput27.mainBkg,
          timelineDefinitionGMOUNBTQBinding183 =
            timelineDefinitionGMOUNBTQBinding157
              ? timelineDefinitionGMOUNBTQInput27.borderColorArray[
                  timelineDefinitionGMOUNBTQBinding176
                ]
              : timelineDefinitionGMOUNBTQInput27.nodeBorder;
        timelineDefinitionGMOUNBTQBinding160 += `
    .section-${timelineDefinitionGMOUNBTQBinding176 - 1} rect,
    .section-${timelineDefinitionGMOUNBTQBinding176 - 1} path,
    .section-${timelineDefinitionGMOUNBTQBinding176 - 1} circle {
      fill: ${timelineDefinitionGMOUNBTQBinding156 && timelineDefinitionGMOUNBTQBinding157 ? timelineDefinitionGMOUNBTQInput27.mainBkg : timelineDefinitionGMOUNBTQBinding182};
      stroke: ${timelineDefinitionGMOUNBTQBinding183};
      stroke-width: ${timelineDefinitionGMOUNBTQInput27.strokeWidth};
      filter: ${timelineDefinitionGMOUNBTQBinding159};
    }

    .section-${timelineDefinitionGMOUNBTQBinding176 - 1} text {
      fill: ${timelineDefinitionGMOUNBTQInput27.nodeBorder};
      font-weight: ${timelineDefinitionGMOUNBTQInput27.fontWeight}
    }

    .node-icon-${timelineDefinitionGMOUNBTQBinding176 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionGMOUNBTQInput27["cScaleLabel" + timelineDefinitionGMOUNBTQBinding176]};
    }

    .section-edge-${timelineDefinitionGMOUNBTQBinding176 - 1} {
      stroke: ${timelineDefinitionGMOUNBTQInput27["cScale" + timelineDefinitionGMOUNBTQBinding176]};
    }

    .edge-depth-${timelineDefinitionGMOUNBTQBinding176 - 1} {
      stroke-width: ${timelineDefinitionGMOUNBTQBinding181};
    }

    .section-${timelineDefinitionGMOUNBTQBinding176 - 1} line {
      stroke: ${timelineDefinitionGMOUNBTQInput27["cScaleInv" + timelineDefinitionGMOUNBTQBinding176]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${timelineDefinitionGMOUNBTQInput27.nodeBorder};
      stroke-width:${timelineDefinitionGMOUNBTQInput27.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQInput27.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQInput27.clusterBorder ?? "#efefef"};
    }
    `;
      }
      return timelineDefinitionGMOUNBTQBinding160;
    },
    "genReduxSections",
  );
  timelineDefinitionGMOUNBTQBinding57 = defineFunctionName(
    (timelineDefinitionGMOUNBTQInput44) => {
      let timelineDefinitionGMOUNBTQBinding167 = "";
      for (
        let timelineDefinitionGMOUNBTQBinding277 = 0;
        timelineDefinitionGMOUNBTQBinding277 <
        timelineDefinitionGMOUNBTQInput44.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQBinding277++
      ) {
        timelineDefinitionGMOUNBTQInput44[
          "lineColor" + timelineDefinitionGMOUNBTQBinding277
        ] =
          timelineDefinitionGMOUNBTQInput44[
            "lineColor" + timelineDefinitionGMOUNBTQBinding277
          ] ||
          timelineDefinitionGMOUNBTQInput44[
            "cScaleInv" + timelineDefinitionGMOUNBTQBinding277
          ];
        p(
          timelineDefinitionGMOUNBTQInput44[
            "lineColor" + timelineDefinitionGMOUNBTQBinding277
          ],
        )
          ? (timelineDefinitionGMOUNBTQInput44[
              "lineColor" + timelineDefinitionGMOUNBTQBinding277
            ] = d(
              timelineDefinitionGMOUNBTQInput44[
                "lineColor" + timelineDefinitionGMOUNBTQBinding277
              ],
              20,
            ))
          : (timelineDefinitionGMOUNBTQInput44[
              "lineColor" + timelineDefinitionGMOUNBTQBinding277
            ] = c(
              timelineDefinitionGMOUNBTQInput44[
                "lineColor" + timelineDefinitionGMOUNBTQBinding277
              ],
              20,
            ));
      }
      for (
        let timelineDefinitionGMOUNBTQBinding187 = 0;
        timelineDefinitionGMOUNBTQBinding187 <
        timelineDefinitionGMOUNBTQInput44.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQBinding187++
      ) {
        let timelineDefinitionGMOUNBTQBinding189 =
          "" + (17 - 3 * timelineDefinitionGMOUNBTQBinding187);
        timelineDefinitionGMOUNBTQBinding167 += `
    .section-${timelineDefinitionGMOUNBTQBinding187 - 1} rect, .section-${timelineDefinitionGMOUNBTQBinding187 - 1} path, .section-${timelineDefinitionGMOUNBTQBinding187 - 1} circle, .section-${timelineDefinitionGMOUNBTQBinding187 - 1} path  {
      fill: ${timelineDefinitionGMOUNBTQInput44["cScale" + timelineDefinitionGMOUNBTQBinding187]};
    }
    .section-${timelineDefinitionGMOUNBTQBinding187 - 1} text {
     fill: ${timelineDefinitionGMOUNBTQInput44["cScaleLabel" + timelineDefinitionGMOUNBTQBinding187]};
    }
    .node-icon-${timelineDefinitionGMOUNBTQBinding187 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionGMOUNBTQInput44["cScaleLabel" + timelineDefinitionGMOUNBTQBinding187]};
    }
    .section-edge-${timelineDefinitionGMOUNBTQBinding187 - 1}{
      stroke: ${timelineDefinitionGMOUNBTQInput44["cScale" + timelineDefinitionGMOUNBTQBinding187]};
    }
    .edge-depth-${timelineDefinitionGMOUNBTQBinding187 - 1}{
      stroke-width: ${timelineDefinitionGMOUNBTQBinding189};
    }
    .section-${timelineDefinitionGMOUNBTQBinding187 - 1} line {
      stroke: ${timelineDefinitionGMOUNBTQInput44["cScaleInv" + timelineDefinitionGMOUNBTQBinding187]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${timelineDefinitionGMOUNBTQInput44["cScaleLabel" + timelineDefinitionGMOUNBTQBinding187]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${timelineDefinitionGMOUNBTQInput44.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQInput44.clusterBorder ?? "#efefef"};
    }
    `;
      }
      return timelineDefinitionGMOUNBTQBinding167;
    },
    "genSections",
  );
  TimelineDefinitionGMOUNBTQ = {
    db: timelineDefinitionGMOUNBTQBinding3,
    renderer: {
      setConf: defineFunctionName(() => {}, "setConf"),
      draw: defineFunctionName(
        (
          timelineDefinitionGMOUNBTQInput141,
          timelineDefinitionGMOUNBTQInput142,
          timelineDefinitionGMOUNBTQInput143,
          timelineDefinitionGMOUNBTQInput144,
        ) =>
          (timelineDefinitionGMOUNBTQInput144?.db?.getDirection?.() ?? "LR") ===
          "TD"
            ? timelineDefinitionGMOUNBTQBinding55.draw(
                timelineDefinitionGMOUNBTQInput141,
                timelineDefinitionGMOUNBTQInput142,
                timelineDefinitionGMOUNBTQInput143,
                timelineDefinitionGMOUNBTQInput144,
              )
            : timelineDefinitionGMOUNBTQBinding43.draw(
                timelineDefinitionGMOUNBTQInput141,
                timelineDefinitionGMOUNBTQInput142,
                timelineDefinitionGMOUNBTQInput143,
                timelineDefinitionGMOUNBTQInput144,
              ),
        "draw",
      ),
    },
    parser: timelineDefinitionGMOUNBTQBinding2,
    styles: defineFunctionName((timelineDefinitionGMOUNBTQInput46) => {
      let { theme } = y(),
        timelineDefinitionGMOUNBTQBinding177 = theme?.includes("redux"),
        timelineDefinitionGMOUNBTQBinding178 = theme === "neutral",
        timelineDefinitionGMOUNBTQBinding179 =
          timelineDefinitionGMOUNBTQInput46.svgId?.replace(/^#/, "") ?? "",
        timelineDefinitionGMOUNBTQBinding180 = "";
      if (
        timelineDefinitionGMOUNBTQInput46.useGradient &&
        timelineDefinitionGMOUNBTQBinding179 &&
        timelineDefinitionGMOUNBTQInput46.THEME_COLOR_LIMIT &&
        !timelineDefinitionGMOUNBTQBinding178
      )
        for (
          let timelineDefinitionGMOUNBTQBinding260 = 0;
          timelineDefinitionGMOUNBTQBinding260 <
          timelineDefinitionGMOUNBTQInput46.THEME_COLOR_LIMIT;
          timelineDefinitionGMOUNBTQBinding260++
        )
          timelineDefinitionGMOUNBTQBinding180 += `
      .section-${timelineDefinitionGMOUNBTQBinding260 - 1}[data-look="neo"] rect,
      .section-${timelineDefinitionGMOUNBTQBinding260 - 1}[data-look="neo"] path,
      .section-${timelineDefinitionGMOUNBTQBinding260 - 1}[data-look="neo"] circle {
        fill: ${timelineDefinitionGMOUNBTQInput46.mainBkg};
        stroke: url(#${timelineDefinitionGMOUNBTQBinding179}-gradient);
        stroke-width: 2;
      }
      .section-${timelineDefinitionGMOUNBTQBinding260 - 1}[data-look="neo"] line {
        stroke: url(#${timelineDefinitionGMOUNBTQBinding179}-gradient);
        stroke-width: 2;
      }`;
      return `
  .edge {
    stroke-width: 3;
  }
  ${timelineDefinitionGMOUNBTQBinding177 ? timelineDefinitionGMOUNBTQBinding56(timelineDefinitionGMOUNBTQInput46) : timelineDefinitionGMOUNBTQBinding57(timelineDefinitionGMOUNBTQInput46)}
  ${timelineDefinitionGMOUNBTQBinding180}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${timelineDefinitionGMOUNBTQInput46.git0};
  }
  .section-root text {
    fill: ${timelineDefinitionGMOUNBTQInput46.gitBranchLabel0};
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
`;
    }, "getStyles"),
  };
})();
export { TimelineDefinitionGMOUNBTQ as diagram };
