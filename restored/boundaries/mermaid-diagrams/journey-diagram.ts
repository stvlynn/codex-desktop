// Restored from ref/webview/assets/journeyDiagram-XKPGCS4Q-B2WVDSTX.js
// Mermaid journey diagram definition (db + renderer + parser). app-initial Nit → vendor/d3-shape-arc.
// Stage 3 candidate: IMPORT_MAP-rewritten Nit (arc); no app-initial edge.
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
import { arc as appInitialNit } from "../../vendor/d3-shape-arc";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  C as _chunkABZYJK2DC,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  k,
  _,
  V,
  W,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { n, t } from "../../diagrams/get-icon-styles-alt";
import {
  a as chunkTZMSLE5BA,
  c,
  i,
  o,
  t as chunkTZMSLE5BT,
} from "../../diagrams/svg-drawing-helpers";
function journeyDiagramXKPGCS4QHelper1(journeyDiagramXKPGCS4QInput11) {
  let journeyDiagramXKPGCS4QBinding98 = _chunkABZYJK2DB().journey,
    journeyDiagramXKPGCS4QBinding99 =
      journeyDiagramXKPGCS4QBinding98.maxLabelWidth;
  journeyDiagramXKPGCS4QBinding30 = 0;
  let journeyDiagramXKPGCS4QBinding100 = 60;
  Object.keys(journeyDiagramXKPGCS4QBinding29).forEach((item) => {
    let journeyDiagramXKPGCS4QBinding101 =
        journeyDiagramXKPGCS4QBinding29[item].color,
      journeyDiagramXKPGCS4QBinding102 = {
        cx: 20,
        cy: journeyDiagramXKPGCS4QBinding100,
        r: 7,
        fill: journeyDiagramXKPGCS4QBinding101,
        stroke: "#000",
        pos: journeyDiagramXKPGCS4QBinding29[item].position,
      };
    journeyDiagramXKPGCS4QBinding27.drawCircle(
      journeyDiagramXKPGCS4QInput11,
      journeyDiagramXKPGCS4QBinding102,
    );
    let journeyDiagramXKPGCS4QBinding103 = journeyDiagramXKPGCS4QInput11
        .append("text")
        .attr("visibility", "hidden")
        .text(item),
      journeyDiagramXKPGCS4QBinding104 = journeyDiagramXKPGCS4QBinding103
        .node()
        .getBoundingClientRect().width;
    journeyDiagramXKPGCS4QBinding103.remove();
    let journeyDiagramXKPGCS4QBinding105 = [];
    if (journeyDiagramXKPGCS4QBinding104 <= journeyDiagramXKPGCS4QBinding99)
      journeyDiagramXKPGCS4QBinding105 = [item];
    else {
      let journeyDiagramXKPGCS4QBinding135 = item.split(" "),
        journeyDiagramXKPGCS4QBinding136 = "";
      journeyDiagramXKPGCS4QBinding103 = journeyDiagramXKPGCS4QInput11
        .append("text")
        .attr("visibility", "hidden");
      journeyDiagramXKPGCS4QBinding135.forEach((_item) => {
        let journeyDiagramXKPGCS4QBinding144 = journeyDiagramXKPGCS4QBinding136
          ? `${journeyDiagramXKPGCS4QBinding136} ${_item}`
          : _item;
        if (
          (journeyDiagramXKPGCS4QBinding103.text(
            journeyDiagramXKPGCS4QBinding144,
          ),
          journeyDiagramXKPGCS4QBinding103.node().getBoundingClientRect()
            .width > journeyDiagramXKPGCS4QBinding99)
        ) {
          if (
            (journeyDiagramXKPGCS4QBinding136 &&
              journeyDiagramXKPGCS4QBinding105.push(
                journeyDiagramXKPGCS4QBinding136,
              ),
            (journeyDiagramXKPGCS4QBinding136 = _item),
            journeyDiagramXKPGCS4QBinding103.text(_item),
            journeyDiagramXKPGCS4QBinding103.node().getBoundingClientRect()
              .width > journeyDiagramXKPGCS4QBinding99)
          ) {
            let journeyDiagramXKPGCS4QBinding167 = "";
            for (let journeyDiagramXKPGCS4QBinding175 of _item) {
              journeyDiagramXKPGCS4QBinding167 +=
                journeyDiagramXKPGCS4QBinding175;
              journeyDiagramXKPGCS4QBinding103.text(
                journeyDiagramXKPGCS4QBinding167 + "-",
              );
              journeyDiagramXKPGCS4QBinding103.node().getBoundingClientRect()
                .width > journeyDiagramXKPGCS4QBinding99 &&
                (journeyDiagramXKPGCS4QBinding105.push(
                  journeyDiagramXKPGCS4QBinding167.slice(0, -1) + "-",
                ),
                (journeyDiagramXKPGCS4QBinding167 =
                  journeyDiagramXKPGCS4QBinding175));
            }
            journeyDiagramXKPGCS4QBinding136 = journeyDiagramXKPGCS4QBinding167;
          }
        } else
          journeyDiagramXKPGCS4QBinding136 = journeyDiagramXKPGCS4QBinding144;
      });
      journeyDiagramXKPGCS4QBinding136 &&
        journeyDiagramXKPGCS4QBinding105.push(journeyDiagramXKPGCS4QBinding136);
      journeyDiagramXKPGCS4QBinding103.remove();
    }
    journeyDiagramXKPGCS4QBinding105.forEach((_item, index) => {
      let journeyDiagramXKPGCS4QBinding164 = {
          x: 40,
          y: journeyDiagramXKPGCS4QBinding100 + 7 + index * 20,
          fill: "#666",
          text: _item,
          textMargin: journeyDiagramXKPGCS4QBinding98.boxTextMargin ?? 5,
        },
        journeyDiagramXKPGCS4QBinding165 = journeyDiagramXKPGCS4QBinding27
          .drawText(
            journeyDiagramXKPGCS4QInput11,
            journeyDiagramXKPGCS4QBinding164,
          )
          .node()
          .getBoundingClientRect().width;
      journeyDiagramXKPGCS4QBinding165 > journeyDiagramXKPGCS4QBinding30 &&
        journeyDiagramXKPGCS4QBinding165 >
          journeyDiagramXKPGCS4QBinding98.leftMargin -
            journeyDiagramXKPGCS4QBinding165 &&
        (journeyDiagramXKPGCS4QBinding30 = journeyDiagramXKPGCS4QBinding165);
    });
    journeyDiagramXKPGCS4QBinding100 += Math.max(
      20,
      journeyDiagramXKPGCS4QBinding105.length * 20,
    );
  });
}
var journeyDiagramXKPGCS4QBinding1,
  journeyDiagramXKPGCS4QBinding2,
  journeyDiagramXKPGCS4QBinding3,
  journeyDiagramXKPGCS4QBinding4,
  journeyDiagramXKPGCS4QBinding5,
  journeyDiagramXKPGCS4QBinding6,
  journeyDiagramXKPGCS4QBinding7,
  journeyDiagramXKPGCS4QBinding8,
  journeyDiagramXKPGCS4QBinding9,
  journeyDiagramXKPGCS4QBinding10,
  journeyDiagramXKPGCS4QBinding11,
  journeyDiagramXKPGCS4QBinding12,
  journeyDiagramXKPGCS4QBinding13,
  journeyDiagramXKPGCS4QBinding14,
  journeyDiagramXKPGCS4QBinding15,
  journeyDiagramXKPGCS4QBinding16,
  journeyDiagramXKPGCS4QBinding17,
  journeyDiagramXKPGCS4QBinding18,
  journeyDiagramXKPGCS4QBinding19,
  journeyDiagramXKPGCS4QBinding20,
  journeyDiagramXKPGCS4QBinding21,
  journeyDiagramXKPGCS4QBinding22,
  journeyDiagramXKPGCS4QBinding23,
  journeyDiagramXKPGCS4QBinding24,
  journeyDiagramXKPGCS4QBinding25,
  journeyDiagramXKPGCS4QBinding26,
  journeyDiagramXKPGCS4QBinding27,
  journeyDiagramXKPGCS4QBinding28,
  journeyDiagramXKPGCS4QBinding29,
  journeyDiagramXKPGCS4QBinding30,
  journeyDiagramXKPGCS4QBinding31,
  journeyDiagramXKPGCS4QBinding32,
  journeyDiagramXKPGCS4QBinding33,
  journeyDiagramXKPGCS4QBinding34,
  journeyDiagramXKPGCS4QBinding35,
  journeyDiagramXKPGCS4QBinding36,
  journeyDiagramXKPGCS4QBinding37,
  $,
  JourneyDiagramXKPGCS4Q;
esmInit(() => {
  c();
  n();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  journeyDiagramXKPGCS4QBinding1 = (function () {
    var journeyDiagramXKPGCS4QBinding38 = defineFunctionName(function (
        journeyDiagramXKPGCS4QInput92,
        journeyDiagramXKPGCS4QInput93,
        journeyDiagramXKPGCS4QInput94,
        journeyDiagramXKPGCS4QInput95,
      ) {
        for (
          journeyDiagramXKPGCS4QInput94 ||= {},
            journeyDiagramXKPGCS4QInput95 =
              journeyDiagramXKPGCS4QInput92.length;
          journeyDiagramXKPGCS4QInput95--;
          journeyDiagramXKPGCS4QInput94[
            journeyDiagramXKPGCS4QInput92[journeyDiagramXKPGCS4QInput95]
          ] = journeyDiagramXKPGCS4QInput93
        );
        return journeyDiagramXKPGCS4QInput94;
      }, "o"),
      journeyDiagramXKPGCS4QBinding39 = [6, 8, 10, 11, 12, 14, 16, 17, 18],
      journeyDiagramXKPGCS4QBinding40 = [1, 9],
      journeyDiagramXKPGCS4QBinding41 = [1, 10],
      journeyDiagramXKPGCS4QBinding42 = [1, 11],
      journeyDiagramXKPGCS4QBinding43 = [1, 12],
      journeyDiagramXKPGCS4QBinding44 = [1, 13],
      journeyDiagramXKPGCS4QBinding45 = [1, 14],
      journeyDiagramXKPGCS4QBinding46 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          journey: 4,
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
          taskName: 18,
          taskData: 19,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "journey",
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
          18: "taskName",
          19: "taskData",
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
          [9, 2],
        ],
        performAction: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput23,
          journeyDiagramXKPGCS4QInput24,
          journeyDiagramXKPGCS4QInput25,
          journeyDiagramXKPGCS4QInput26,
          journeyDiagramXKPGCS4QInput27,
          journeyDiagramXKPGCS4QInput28,
          journeyDiagramXKPGCS4QInput29,
        ) {
          var journeyDiagramXKPGCS4QBinding127 =
            journeyDiagramXKPGCS4QInput28.length - 1;
          switch (journeyDiagramXKPGCS4QInput27) {
            case 1:
              return journeyDiagramXKPGCS4QInput28[
                journeyDiagramXKPGCS4QBinding127 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              journeyDiagramXKPGCS4QInput28[
                journeyDiagramXKPGCS4QBinding127 - 1
              ].push(
                journeyDiagramXKPGCS4QInput28[journeyDiagramXKPGCS4QBinding127],
              );
              this.$ =
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127 - 1
                ];
              break;
            case 4:
            case 5:
              this.$ =
                journeyDiagramXKPGCS4QInput28[journeyDiagramXKPGCS4QBinding127];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              journeyDiagramXKPGCS4QInput26.setDiagramTitle(
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].substr(6),
              );
              this.$ =
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].substr(6);
              break;
            case 9:
              this.$ =
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].trim();
              journeyDiagramXKPGCS4QInput26.setAccTitle(this.$);
              break;
            case 10:
            case 11:
              this.$ =
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].trim();
              journeyDiagramXKPGCS4QInput26.setAccDescription(this.$);
              break;
            case 12:
              journeyDiagramXKPGCS4QInput26.addSection(
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].substr(8),
              );
              this.$ =
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127
                ].substr(8);
              break;
            case 13:
              journeyDiagramXKPGCS4QInput26.addTask(
                journeyDiagramXKPGCS4QInput28[
                  journeyDiagramXKPGCS4QBinding127 - 1
                ],
                journeyDiagramXKPGCS4QInput28[journeyDiagramXKPGCS4QBinding127],
              );
              this.$ = "task";
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
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
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
            11: journeyDiagramXKPGCS4QBinding40,
            12: journeyDiagramXKPGCS4QBinding41,
            14: journeyDiagramXKPGCS4QBinding42,
            16: journeyDiagramXKPGCS4QBinding43,
            17: journeyDiagramXKPGCS4QBinding44,
            18: journeyDiagramXKPGCS4QBinding45,
          },
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 7],
            {
              1: [2, 1],
            },
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 3],
          ),
          {
            9: 15,
            11: journeyDiagramXKPGCS4QBinding40,
            12: journeyDiagramXKPGCS4QBinding41,
            14: journeyDiagramXKPGCS4QBinding42,
            16: journeyDiagramXKPGCS4QBinding43,
            17: journeyDiagramXKPGCS4QBinding44,
            18: journeyDiagramXKPGCS4QBinding45,
          },
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 5],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 6],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 8],
          ),
          {
            13: [1, 16],
          },
          {
            15: [1, 17],
          },
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 11],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 12],
          ),
          {
            19: [1, 18],
          },
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 4],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 9],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 10],
          ),
          journeyDiagramXKPGCS4QBinding38(
            journeyDiagramXKPGCS4QBinding39,
            [2, 13],
          ),
        ],
        defaultActions: {},
        parseError: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput86,
          journeyDiagramXKPGCS4QInput87,
        ) {
          if (journeyDiagramXKPGCS4QInput87.recoverable)
            this.trace(journeyDiagramXKPGCS4QInput86);
          else {
            var journeyDiagramXKPGCS4QBinding176 = Error(
              journeyDiagramXKPGCS4QInput86,
            );
            throw (
              (journeyDiagramXKPGCS4QBinding176.hash =
                journeyDiagramXKPGCS4QInput87),
              journeyDiagramXKPGCS4QBinding176
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (journeyDiagramXKPGCS4QInput1) {
          var journeyDiagramXKPGCS4QBinding47 = this,
            journeyDiagramXKPGCS4QBinding48 = [0],
            journeyDiagramXKPGCS4QBinding49 = [],
            journeyDiagramXKPGCS4QBinding50 = [null],
            journeyDiagramXKPGCS4QBinding51 = [],
            journeyDiagramXKPGCS4QBinding52 = this.table,
            journeyDiagramXKPGCS4QBinding53 = "",
            journeyDiagramXKPGCS4QBinding54 = 0,
            journeyDiagramXKPGCS4QBinding55 = 0,
            journeyDiagramXKPGCS4QBinding56 = 0,
            journeyDiagramXKPGCS4QBinding59 =
              journeyDiagramXKPGCS4QBinding51.slice.call(arguments, 1),
            journeyDiagramXKPGCS4QBinding60 = Object.create(this.lexer),
            journeyDiagramXKPGCS4QBinding61 = {
              yy: {},
            };
          for (var journeyDiagramXKPGCS4QBinding62 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              journeyDiagramXKPGCS4QBinding62,
            ) &&
              (journeyDiagramXKPGCS4QBinding61.yy[
                journeyDiagramXKPGCS4QBinding62
              ] = this.yy[journeyDiagramXKPGCS4QBinding62]);
          journeyDiagramXKPGCS4QBinding60.setInput(
            journeyDiagramXKPGCS4QInput1,
            journeyDiagramXKPGCS4QBinding61.yy,
          );
          journeyDiagramXKPGCS4QBinding61.yy.lexer =
            journeyDiagramXKPGCS4QBinding60;
          journeyDiagramXKPGCS4QBinding61.yy.parser = this;
          journeyDiagramXKPGCS4QBinding60.yylloc === undefined &&
            (journeyDiagramXKPGCS4QBinding60.yylloc = {});
          var journeyDiagramXKPGCS4QBinding63 =
            journeyDiagramXKPGCS4QBinding60.yylloc;
          journeyDiagramXKPGCS4QBinding51.push(journeyDiagramXKPGCS4QBinding63);
          var journeyDiagramXKPGCS4QBinding64 =
            journeyDiagramXKPGCS4QBinding60.options &&
            journeyDiagramXKPGCS4QBinding60.options.ranges;
          typeof journeyDiagramXKPGCS4QBinding61.yy.parseError == "function"
            ? (this.parseError = journeyDiagramXKPGCS4QBinding61.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function journeyDiagramXKPGCS4QHelper3(
            journeyDiagramXKPGCS4QInput96,
          ) {
            journeyDiagramXKPGCS4QBinding48.length -=
              2 * journeyDiagramXKPGCS4QInput96;
            journeyDiagramXKPGCS4QBinding50.length -=
              journeyDiagramXKPGCS4QInput96;
            journeyDiagramXKPGCS4QBinding51.length -=
              journeyDiagramXKPGCS4QInput96;
          }
          defineFunctionName(journeyDiagramXKPGCS4QHelper3, "popStack");
          function journeyDiagramXKPGCS4QHelper4() {
            var journeyDiagramXKPGCS4QBinding166 =
              journeyDiagramXKPGCS4QBinding49.pop() ||
              journeyDiagramXKPGCS4QBinding60.lex() ||
              1;
            return (
              typeof journeyDiagramXKPGCS4QBinding166 != "number" &&
                (journeyDiagramXKPGCS4QBinding166 instanceof Array &&
                  ((journeyDiagramXKPGCS4QBinding49 =
                    journeyDiagramXKPGCS4QBinding166),
                  (journeyDiagramXKPGCS4QBinding166 =
                    journeyDiagramXKPGCS4QBinding49.pop())),
                (journeyDiagramXKPGCS4QBinding166 =
                  journeyDiagramXKPGCS4QBinding47.symbols_[
                    journeyDiagramXKPGCS4QBinding166
                  ] || journeyDiagramXKPGCS4QBinding166)),
              journeyDiagramXKPGCS4QBinding166
            );
          }
          defineFunctionName(journeyDiagramXKPGCS4QHelper4, "lex");
          for (
            var journeyDiagramXKPGCS4QBinding65,
              journeyDiagramXKPGCS4QBinding66,
              journeyDiagramXKPGCS4QBinding67,
              journeyDiagramXKPGCS4QBinding68,
              journeyDiagramXKPGCS4QBinding69,
              journeyDiagramXKPGCS4QBinding70 = {},
              journeyDiagramXKPGCS4QBinding71,
              journeyDiagramXKPGCS4QBinding72,
              journeyDiagramXKPGCS4QBinding73,
              journeyDiagramXKPGCS4QBinding74;
            ;
          ) {
            if (
              ((journeyDiagramXKPGCS4QBinding67 =
                journeyDiagramXKPGCS4QBinding48[
                  journeyDiagramXKPGCS4QBinding48.length - 1
                ]),
              this.defaultActions[journeyDiagramXKPGCS4QBinding67]
                ? (journeyDiagramXKPGCS4QBinding68 =
                    this.defaultActions[journeyDiagramXKPGCS4QBinding67])
                : ((journeyDiagramXKPGCS4QBinding65 ??=
                    journeyDiagramXKPGCS4QHelper4()),
                  (journeyDiagramXKPGCS4QBinding68 =
                    journeyDiagramXKPGCS4QBinding52[
                      journeyDiagramXKPGCS4QBinding67
                    ] &&
                    journeyDiagramXKPGCS4QBinding52[
                      journeyDiagramXKPGCS4QBinding67
                    ][journeyDiagramXKPGCS4QBinding65])),
              journeyDiagramXKPGCS4QBinding68 === undefined ||
                !journeyDiagramXKPGCS4QBinding68.length ||
                !journeyDiagramXKPGCS4QBinding68[0])
            ) {
              var journeyDiagramXKPGCS4QBinding75 = "";
              for (journeyDiagramXKPGCS4QBinding71 in ((journeyDiagramXKPGCS4QBinding74 =
                []),
              journeyDiagramXKPGCS4QBinding52[journeyDiagramXKPGCS4QBinding67]))
                this.terminals_[journeyDiagramXKPGCS4QBinding71] &&
                  journeyDiagramXKPGCS4QBinding71 > 2 &&
                  journeyDiagramXKPGCS4QBinding74.push(
                    "'" +
                      this.terminals_[journeyDiagramXKPGCS4QBinding71] +
                      "'",
                  );
              journeyDiagramXKPGCS4QBinding75 =
                journeyDiagramXKPGCS4QBinding60.showPosition
                  ? "Parse error on line " +
                    (journeyDiagramXKPGCS4QBinding54 + 1) +
                    ":\n" +
                    journeyDiagramXKPGCS4QBinding60.showPosition() +
                    "\nExpecting " +
                    journeyDiagramXKPGCS4QBinding74.join(", ") +
                    ", got '" +
                    (this.terminals_[journeyDiagramXKPGCS4QBinding65] ||
                      journeyDiagramXKPGCS4QBinding65) +
                    "'"
                  : "Parse error on line " +
                    (journeyDiagramXKPGCS4QBinding54 + 1) +
                    ": Unexpected " +
                    (journeyDiagramXKPGCS4QBinding65 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[journeyDiagramXKPGCS4QBinding65] ||
                          journeyDiagramXKPGCS4QBinding65) +
                        "'");
              this.parseError(journeyDiagramXKPGCS4QBinding75, {
                text: journeyDiagramXKPGCS4QBinding60.match,
                token:
                  this.terminals_[journeyDiagramXKPGCS4QBinding65] ||
                  journeyDiagramXKPGCS4QBinding65,
                line: journeyDiagramXKPGCS4QBinding60.yylineno,
                loc: journeyDiagramXKPGCS4QBinding63,
                expected: journeyDiagramXKPGCS4QBinding74,
              });
            }
            if (
              journeyDiagramXKPGCS4QBinding68[0] instanceof Array &&
              journeyDiagramXKPGCS4QBinding68.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  journeyDiagramXKPGCS4QBinding67 +
                  ", token: " +
                  journeyDiagramXKPGCS4QBinding65,
              );
            switch (journeyDiagramXKPGCS4QBinding68[0]) {
              case 1:
                journeyDiagramXKPGCS4QBinding48.push(
                  journeyDiagramXKPGCS4QBinding65,
                );
                journeyDiagramXKPGCS4QBinding50.push(
                  journeyDiagramXKPGCS4QBinding60.yytext,
                );
                journeyDiagramXKPGCS4QBinding51.push(
                  journeyDiagramXKPGCS4QBinding60.yylloc,
                );
                journeyDiagramXKPGCS4QBinding48.push(
                  journeyDiagramXKPGCS4QBinding68[1],
                );
                journeyDiagramXKPGCS4QBinding65 = null;
                journeyDiagramXKPGCS4QBinding66
                  ? ((journeyDiagramXKPGCS4QBinding65 =
                      journeyDiagramXKPGCS4QBinding66),
                    (journeyDiagramXKPGCS4QBinding66 = null))
                  : ((journeyDiagramXKPGCS4QBinding55 =
                      journeyDiagramXKPGCS4QBinding60.yyleng),
                    (journeyDiagramXKPGCS4QBinding53 =
                      journeyDiagramXKPGCS4QBinding60.yytext),
                    (journeyDiagramXKPGCS4QBinding54 =
                      journeyDiagramXKPGCS4QBinding60.yylineno),
                    (journeyDiagramXKPGCS4QBinding63 =
                      journeyDiagramXKPGCS4QBinding60.yylloc),
                    journeyDiagramXKPGCS4QBinding56 > 0 &&
                      journeyDiagramXKPGCS4QBinding56--);
                break;
              case 2:
                if (
                  ((journeyDiagramXKPGCS4QBinding72 =
                    this.productions_[journeyDiagramXKPGCS4QBinding68[1]][1]),
                  (journeyDiagramXKPGCS4QBinding70.$ =
                    journeyDiagramXKPGCS4QBinding50[
                      journeyDiagramXKPGCS4QBinding50.length -
                        journeyDiagramXKPGCS4QBinding72
                    ]),
                  (journeyDiagramXKPGCS4QBinding70._$ = {
                    first_line:
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length -
                          (journeyDiagramXKPGCS4QBinding72 || 1)
                      ].first_line,
                    last_line:
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length - 1
                      ].last_line,
                    first_column:
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length -
                          (journeyDiagramXKPGCS4QBinding72 || 1)
                      ].first_column,
                    last_column:
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length - 1
                      ].last_column,
                  }),
                  journeyDiagramXKPGCS4QBinding64 &&
                    (journeyDiagramXKPGCS4QBinding70._$.range = [
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length -
                          (journeyDiagramXKPGCS4QBinding72 || 1)
                      ].range[0],
                      journeyDiagramXKPGCS4QBinding51[
                        journeyDiagramXKPGCS4QBinding51.length - 1
                      ].range[1],
                    ]),
                  (journeyDiagramXKPGCS4QBinding69 = this.performAction.apply(
                    journeyDiagramXKPGCS4QBinding70,
                    [
                      journeyDiagramXKPGCS4QBinding53,
                      journeyDiagramXKPGCS4QBinding55,
                      journeyDiagramXKPGCS4QBinding54,
                      journeyDiagramXKPGCS4QBinding61.yy,
                      journeyDiagramXKPGCS4QBinding68[1],
                      journeyDiagramXKPGCS4QBinding50,
                      journeyDiagramXKPGCS4QBinding51,
                    ].concat(journeyDiagramXKPGCS4QBinding59),
                  )),
                  journeyDiagramXKPGCS4QBinding69 !== undefined)
                )
                  return journeyDiagramXKPGCS4QBinding69;
                journeyDiagramXKPGCS4QBinding72 &&
                  ((journeyDiagramXKPGCS4QBinding48 =
                    journeyDiagramXKPGCS4QBinding48.slice(
                      0,
                      -1 * journeyDiagramXKPGCS4QBinding72 * 2,
                    )),
                  (journeyDiagramXKPGCS4QBinding50 =
                    journeyDiagramXKPGCS4QBinding50.slice(
                      0,
                      -1 * journeyDiagramXKPGCS4QBinding72,
                    )),
                  (journeyDiagramXKPGCS4QBinding51 =
                    journeyDiagramXKPGCS4QBinding51.slice(
                      0,
                      -1 * journeyDiagramXKPGCS4QBinding72,
                    )));
                journeyDiagramXKPGCS4QBinding48.push(
                  this.productions_[journeyDiagramXKPGCS4QBinding68[1]][0],
                );
                journeyDiagramXKPGCS4QBinding50.push(
                  journeyDiagramXKPGCS4QBinding70.$,
                );
                journeyDiagramXKPGCS4QBinding51.push(
                  journeyDiagramXKPGCS4QBinding70._$,
                );
                journeyDiagramXKPGCS4QBinding73 =
                  journeyDiagramXKPGCS4QBinding52[
                    journeyDiagramXKPGCS4QBinding48[
                      journeyDiagramXKPGCS4QBinding48.length - 2
                    ]
                  ][
                    journeyDiagramXKPGCS4QBinding48[
                      journeyDiagramXKPGCS4QBinding48.length - 1
                    ]
                  ];
                journeyDiagramXKPGCS4QBinding48.push(
                  journeyDiagramXKPGCS4QBinding73,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    journeyDiagramXKPGCS4QBinding46.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput89,
          journeyDiagramXKPGCS4QInput90,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              journeyDiagramXKPGCS4QInput89,
              journeyDiagramXKPGCS4QInput90,
            );
          else throw Error(journeyDiagramXKPGCS4QInput89);
        }, "parseError"),
        setInput: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput53,
          journeyDiagramXKPGCS4QInput54,
        ) {
          return (
            (this.yy = journeyDiagramXKPGCS4QInput54 || this.yy || {}),
            (this._input = journeyDiagramXKPGCS4QInput53),
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
          var journeyDiagramXKPGCS4QBinding147 = this._input[0];
          return (
            (this.yytext += journeyDiagramXKPGCS4QBinding147),
            this.yyleng++,
            this.offset++,
            (this.match += journeyDiagramXKPGCS4QBinding147),
            (this.matched += journeyDiagramXKPGCS4QBinding147),
            journeyDiagramXKPGCS4QBinding147.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            journeyDiagramXKPGCS4QBinding147
          );
        }, "input"),
        unput: defineFunctionName(function (journeyDiagramXKPGCS4QInput19) {
          var journeyDiagramXKPGCS4QBinding116 =
              journeyDiagramXKPGCS4QInput19.length,
            journeyDiagramXKPGCS4QBinding117 =
              journeyDiagramXKPGCS4QInput19.split(/(?:\r\n?|\n)/g);
          this._input = journeyDiagramXKPGCS4QInput19 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - journeyDiagramXKPGCS4QBinding116,
          );
          this.offset -= journeyDiagramXKPGCS4QBinding116;
          var journeyDiagramXKPGCS4QBinding118 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          journeyDiagramXKPGCS4QBinding117.length - 1 &&
            (this.yylineno -= journeyDiagramXKPGCS4QBinding117.length - 1);
          var journeyDiagramXKPGCS4QBinding119 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: journeyDiagramXKPGCS4QBinding117
                ? (journeyDiagramXKPGCS4QBinding117.length ===
                  journeyDiagramXKPGCS4QBinding118.length
                    ? this.yylloc.first_column
                    : 0) +
                  journeyDiagramXKPGCS4QBinding118[
                    journeyDiagramXKPGCS4QBinding118.length -
                      journeyDiagramXKPGCS4QBinding117.length
                  ].length -
                  journeyDiagramXKPGCS4QBinding117[0].length
                : this.yylloc.first_column - journeyDiagramXKPGCS4QBinding116,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                journeyDiagramXKPGCS4QBinding119[0],
                journeyDiagramXKPGCS4QBinding119[0] +
                  this.yyleng -
                  journeyDiagramXKPGCS4QBinding116,
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
        less: defineFunctionName(function (journeyDiagramXKPGCS4QInput105) {
          this.unput(this.match.slice(journeyDiagramXKPGCS4QInput105));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var journeyDiagramXKPGCS4QBinding170 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (journeyDiagramXKPGCS4QBinding170.length > 20 ? "..." : "") +
            journeyDiagramXKPGCS4QBinding170.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var journeyDiagramXKPGCS4QBinding163 = this.match;
          return (
            journeyDiagramXKPGCS4QBinding163.length < 20 &&
              (journeyDiagramXKPGCS4QBinding163 += this._input.substr(
                0,
                20 - journeyDiagramXKPGCS4QBinding163.length,
              )),
            (
              journeyDiagramXKPGCS4QBinding163.substr(0, 20) +
              (journeyDiagramXKPGCS4QBinding163.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var journeyDiagramXKPGCS4QBinding171 = this.pastInput(),
            journeyDiagramXKPGCS4QBinding172 = Array(
              journeyDiagramXKPGCS4QBinding171.length + 1,
            ).join("-");
          return (
            journeyDiagramXKPGCS4QBinding171 +
            this.upcomingInput() +
            "\n" +
            journeyDiagramXKPGCS4QBinding172 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput2,
          journeyDiagramXKPGCS4QInput3,
        ) {
          var journeyDiagramXKPGCS4QBinding76,
            journeyDiagramXKPGCS4QBinding77,
            journeyDiagramXKPGCS4QBinding78;
          if (
            (this.options.backtrack_lexer &&
              ((journeyDiagramXKPGCS4QBinding78 = {
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
                (journeyDiagramXKPGCS4QBinding78.yylloc.range =
                  this.yylloc.range.slice(0))),
            (journeyDiagramXKPGCS4QBinding77 =
              journeyDiagramXKPGCS4QInput2[0].match(/(?:\r\n?|\n).*/g)),
            journeyDiagramXKPGCS4QBinding77 &&
              (this.yylineno += journeyDiagramXKPGCS4QBinding77.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: journeyDiagramXKPGCS4QBinding77
                ? journeyDiagramXKPGCS4QBinding77[
                    journeyDiagramXKPGCS4QBinding77.length - 1
                  ].length -
                  journeyDiagramXKPGCS4QBinding77[
                    journeyDiagramXKPGCS4QBinding77.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  journeyDiagramXKPGCS4QInput2[0].length,
            }),
            (this.yytext += journeyDiagramXKPGCS4QInput2[0]),
            (this.match += journeyDiagramXKPGCS4QInput2[0]),
            (this.matches = journeyDiagramXKPGCS4QInput2),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              journeyDiagramXKPGCS4QInput2[0].length,
            )),
            (this.matched += journeyDiagramXKPGCS4QInput2[0]),
            (journeyDiagramXKPGCS4QBinding76 = this.performAction.call(
              this,
              this.yy,
              this,
              journeyDiagramXKPGCS4QInput3,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            journeyDiagramXKPGCS4QBinding76)
          )
            return journeyDiagramXKPGCS4QBinding76;
          if (this._backtrack) {
            for (var journeyDiagramXKPGCS4QBinding79 in journeyDiagramXKPGCS4QBinding78)
              this[journeyDiagramXKPGCS4QBinding79] =
                journeyDiagramXKPGCS4QBinding78[
                  journeyDiagramXKPGCS4QBinding79
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var journeyDiagramXKPGCS4QBinding110,
            journeyDiagramXKPGCS4QBinding111,
            journeyDiagramXKPGCS4QBinding112,
            journeyDiagramXKPGCS4QBinding113;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var journeyDiagramXKPGCS4QBinding114 = this._currentRules(),
              journeyDiagramXKPGCS4QBinding115 = 0;
            journeyDiagramXKPGCS4QBinding115 <
            journeyDiagramXKPGCS4QBinding114.length;
            journeyDiagramXKPGCS4QBinding115++
          )
            if (
              ((journeyDiagramXKPGCS4QBinding112 = this._input.match(
                this.rules[
                  journeyDiagramXKPGCS4QBinding114[
                    journeyDiagramXKPGCS4QBinding115
                  ]
                ],
              )),
              journeyDiagramXKPGCS4QBinding112 &&
                (!journeyDiagramXKPGCS4QBinding111 ||
                  journeyDiagramXKPGCS4QBinding112[0].length >
                    journeyDiagramXKPGCS4QBinding111[0].length))
            ) {
              if (
                ((journeyDiagramXKPGCS4QBinding111 =
                  journeyDiagramXKPGCS4QBinding112),
                (journeyDiagramXKPGCS4QBinding113 =
                  journeyDiagramXKPGCS4QBinding115),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((journeyDiagramXKPGCS4QBinding110 = this.test_match(
                    journeyDiagramXKPGCS4QBinding112,
                    journeyDiagramXKPGCS4QBinding114[
                      journeyDiagramXKPGCS4QBinding115
                    ],
                  )),
                  journeyDiagramXKPGCS4QBinding110 !== false)
                )
                  return journeyDiagramXKPGCS4QBinding110;
                if (this._backtrack) {
                  journeyDiagramXKPGCS4QBinding111 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return journeyDiagramXKPGCS4QBinding111
            ? ((journeyDiagramXKPGCS4QBinding110 = this.test_match(
                journeyDiagramXKPGCS4QBinding111,
                journeyDiagramXKPGCS4QBinding114[
                  journeyDiagramXKPGCS4QBinding113
                ],
              )),
              journeyDiagramXKPGCS4QBinding110 === false
                ? false
                : journeyDiagramXKPGCS4QBinding110)
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
        begin: defineFunctionName(function (journeyDiagramXKPGCS4QInput106) {
          this.conditionStack.push(journeyDiagramXKPGCS4QInput106);
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
        topState: defineFunctionName(function (journeyDiagramXKPGCS4QInput85) {
          return (
            (journeyDiagramXKPGCS4QInput85 =
              this.conditionStack.length -
              1 -
              Math.abs(journeyDiagramXKPGCS4QInput85 || 0)),
            journeyDiagramXKPGCS4QInput85 >= 0
              ? this.conditionStack[journeyDiagramXKPGCS4QInput85]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput109,
        ) {
          this.begin(journeyDiagramXKPGCS4QInput109);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          journeyDiagramXKPGCS4QInput12,
          journeyDiagramXKPGCS4QInput13,
          journeyDiagramXKPGCS4QInput14,
          journeyDiagramXKPGCS4QInput15,
        ) {
          switch (journeyDiagramXKPGCS4QInput14) {
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
              return 18;
            case 16:
              return 19;
            case 17:
              return ":";
            case 18:
              return 6;
            case 19:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:journey\b)/i,
          /^(?:title\s[^#\n;]+)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:section\s[^#:\n;]+)/i,
          /^(?:[^#:\n;]+)/i,
          /^(?::[^#\n;]+)/i,
          /^(?::)/i,
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
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19],
            inclusive: true,
          },
        },
      };
    })();
    function journeyDiagramXKPGCS4QHelper2() {
      this.yy = {};
    }
    return (
      defineFunctionName(journeyDiagramXKPGCS4QHelper2, "Parser"),
      (journeyDiagramXKPGCS4QHelper2.prototype =
        journeyDiagramXKPGCS4QBinding46),
      (journeyDiagramXKPGCS4QBinding46.Parser = journeyDiagramXKPGCS4QHelper2),
      new journeyDiagramXKPGCS4QHelper2()
    );
  })();
  journeyDiagramXKPGCS4QBinding1.parser = journeyDiagramXKPGCS4QBinding1;
  journeyDiagramXKPGCS4QBinding2 = journeyDiagramXKPGCS4QBinding1;
  journeyDiagramXKPGCS4QBinding3 = "";
  journeyDiagramXKPGCS4QBinding4 = [];
  journeyDiagramXKPGCS4QBinding5 = [];
  journeyDiagramXKPGCS4QBinding6 = [];
  journeyDiagramXKPGCS4QBinding7 = defineFunctionName(function () {
    journeyDiagramXKPGCS4QBinding4.length = 0;
    journeyDiagramXKPGCS4QBinding5.length = 0;
    journeyDiagramXKPGCS4QBinding3 = "";
    journeyDiagramXKPGCS4QBinding6.length = 0;
    a();
  }, "clear");
  journeyDiagramXKPGCS4QBinding8 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput110,
  ) {
    journeyDiagramXKPGCS4QBinding3 = journeyDiagramXKPGCS4QInput110;
    journeyDiagramXKPGCS4QBinding4.push(journeyDiagramXKPGCS4QInput110);
  }, "addSection");
  journeyDiagramXKPGCS4QBinding9 = defineFunctionName(function () {
    return journeyDiagramXKPGCS4QBinding4;
  }, "getSections");
  journeyDiagramXKPGCS4QBinding10 = defineFunctionName(function () {
    let journeyDiagramXKPGCS4QBinding178 = journeyDiagramXKPGCS4QBinding14(),
      journeyDiagramXKPGCS4QBinding179 = 0;
    for (
      ;
      !journeyDiagramXKPGCS4QBinding178 &&
      journeyDiagramXKPGCS4QBinding179 < 100;
    ) {
      journeyDiagramXKPGCS4QBinding178 = journeyDiagramXKPGCS4QBinding14();
      journeyDiagramXKPGCS4QBinding179++;
    }
    return (
      journeyDiagramXKPGCS4QBinding5.push(...journeyDiagramXKPGCS4QBinding6),
      journeyDiagramXKPGCS4QBinding5
    );
  }, "getTasks");
  journeyDiagramXKPGCS4QBinding11 = defineFunctionName(function () {
    let journeyDiagramXKPGCS4QBinding177 = [];
    return (
      journeyDiagramXKPGCS4QBinding5.forEach((item) => {
        item.people && journeyDiagramXKPGCS4QBinding177.push(...item.people);
      }),
      [...new Set(journeyDiagramXKPGCS4QBinding177)].sort()
    );
  }, "updateActors");
  journeyDiagramXKPGCS4QBinding12 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput75,
    journeyDiagramXKPGCS4QInput76,
  ) {
    let journeyDiagramXKPGCS4QBinding158 = journeyDiagramXKPGCS4QInput76
        .substr(1)
        .split(":"),
      journeyDiagramXKPGCS4QBinding159 = 0,
      journeyDiagramXKPGCS4QBinding160 = [];
    journeyDiagramXKPGCS4QBinding158.length === 1
      ? ((journeyDiagramXKPGCS4QBinding159 = Number(
          journeyDiagramXKPGCS4QBinding158[0],
        )),
        (journeyDiagramXKPGCS4QBinding160 = []))
      : ((journeyDiagramXKPGCS4QBinding159 = Number(
          journeyDiagramXKPGCS4QBinding158[0],
        )),
        (journeyDiagramXKPGCS4QBinding160 =
          journeyDiagramXKPGCS4QBinding158[1].split(",")));
    let journeyDiagramXKPGCS4QBinding161 = journeyDiagramXKPGCS4QBinding160.map(
        (item) => item.trim(),
      ),
      journeyDiagramXKPGCS4QBinding162 = {
        section: journeyDiagramXKPGCS4QBinding3,
        type: journeyDiagramXKPGCS4QBinding3,
        people: journeyDiagramXKPGCS4QBinding161,
        task: journeyDiagramXKPGCS4QInput75,
        score: journeyDiagramXKPGCS4QBinding159,
      };
    journeyDiagramXKPGCS4QBinding6.push(journeyDiagramXKPGCS4QBinding162);
  }, "addTask");
  journeyDiagramXKPGCS4QBinding13 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput91,
  ) {
    let journeyDiagramXKPGCS4QBinding180 = {
      section: journeyDiagramXKPGCS4QBinding3,
      type: journeyDiagramXKPGCS4QBinding3,
      description: journeyDiagramXKPGCS4QInput91,
      task: journeyDiagramXKPGCS4QInput91,
      classes: [],
    };
    journeyDiagramXKPGCS4QBinding5.push(journeyDiagramXKPGCS4QBinding180);
  }, "addTaskOrg");
  journeyDiagramXKPGCS4QBinding14 = defineFunctionName(function () {
    let journeyDiagramXKPGCS4QBinding173 = defineFunctionName(function (
        journeyDiagramXKPGCS4QInput108,
      ) {
        return journeyDiagramXKPGCS4QBinding6[journeyDiagramXKPGCS4QInput108]
          .processed;
      }, "compileTask"),
      journeyDiagramXKPGCS4QBinding174 = true;
    for (let [
      journeyDiagramXKPGCS4QBinding182,
      journeyDiagramXKPGCS4QBinding183,
    ] of journeyDiagramXKPGCS4QBinding6.entries()) {
      journeyDiagramXKPGCS4QBinding173(journeyDiagramXKPGCS4QBinding182);
      journeyDiagramXKPGCS4QBinding174 &&=
        journeyDiagramXKPGCS4QBinding183.processed;
    }
    return journeyDiagramXKPGCS4QBinding174;
  }, "compileTasks");
  journeyDiagramXKPGCS4QBinding15 = {
    getConfig: defineFunctionName(() => _chunkABZYJK2DB().journey, "getConfig"),
    clear: journeyDiagramXKPGCS4QBinding7,
    setDiagramTitle: W,
    getDiagramTitle: C,
    setAccTitle: V,
    getAccTitle: _chunkABZYJK2DV,
    setAccDescription: B,
    getAccDescription: _,
    addSection: journeyDiagramXKPGCS4QBinding8,
    getSections: journeyDiagramXKPGCS4QBinding9,
    getTasks: journeyDiagramXKPGCS4QBinding10,
    addTask: journeyDiagramXKPGCS4QBinding12,
    addTaskOrg: journeyDiagramXKPGCS4QBinding13,
    getActors: defineFunctionName(function () {
      return journeyDiagramXKPGCS4QBinding11();
    }, "getActors"),
  };
  journeyDiagramXKPGCS4QBinding16 = defineFunctionName(
    (journeyDiagramXKPGCS4QInput4) => `.label {
    font-family: ${journeyDiagramXKPGCS4QInput4.fontFamily};
    color: ${journeyDiagramXKPGCS4QInput4.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${journeyDiagramXKPGCS4QInput4.textColor}
  }

  .legend {
    fill: ${journeyDiagramXKPGCS4QInput4.textColor};
    font-family: ${journeyDiagramXKPGCS4QInput4.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${journeyDiagramXKPGCS4QInput4.textColor}
  }

  .face {
    ${journeyDiagramXKPGCS4QInput4.faceColor ? `fill: ${journeyDiagramXKPGCS4QInput4.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${journeyDiagramXKPGCS4QInput4.mainBkg};
    stroke: ${journeyDiagramXKPGCS4QInput4.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${journeyDiagramXKPGCS4QInput4.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${journeyDiagramXKPGCS4QInput4.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${journeyDiagramXKPGCS4QInput4.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${journeyDiagramXKPGCS4QInput4.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${journeyDiagramXKPGCS4QInput4.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${journeyDiagramXKPGCS4QInput4.fontFamily};
    font-size: 12px;
    background: ${journeyDiagramXKPGCS4QInput4.tertiaryColor};
    border: 1px solid ${journeyDiagramXKPGCS4QInput4.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${journeyDiagramXKPGCS4QInput4.fillType0 ? `fill: ${journeyDiagramXKPGCS4QInput4.fillType7}` : ""};
  }

  .actor-0 {
    ${journeyDiagramXKPGCS4QInput4.actor0 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor0}` : ""};
  }
  .actor-1 {
    ${journeyDiagramXKPGCS4QInput4.actor1 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor1}` : ""};
  }
  .actor-2 {
    ${journeyDiagramXKPGCS4QInput4.actor2 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor2}` : ""};
  }
  .actor-3 {
    ${journeyDiagramXKPGCS4QInput4.actor3 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor3}` : ""};
  }
  .actor-4 {
    ${journeyDiagramXKPGCS4QInput4.actor4 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor4}` : ""};
  }
  .actor-5 {
    ${journeyDiagramXKPGCS4QInput4.actor5 ? `fill: ${journeyDiagramXKPGCS4QInput4.actor5}` : ""};
  }
  ${t()}
`,
    "getStyles",
  );
  journeyDiagramXKPGCS4QBinding17 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput111,
    journeyDiagramXKPGCS4QInput112,
  ) {
    return i(journeyDiagramXKPGCS4QInput111, journeyDiagramXKPGCS4QInput112);
  }, "drawRect");
  journeyDiagramXKPGCS4QBinding18 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput5,
    journeyDiagramXKPGCS4QInput6,
  ) {
    let journeyDiagramXKPGCS4QBinding80 = journeyDiagramXKPGCS4QInput5
        .append("circle")
        .attr("cx", journeyDiagramXKPGCS4QInput6.cx)
        .attr("cy", journeyDiagramXKPGCS4QInput6.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      journeyDiagramXKPGCS4QBinding81 =
        journeyDiagramXKPGCS4QInput5.append("g");
    journeyDiagramXKPGCS4QBinding81
      .append("circle")
      .attr("cx", journeyDiagramXKPGCS4QInput6.cx - 5)
      .attr("cy", journeyDiagramXKPGCS4QInput6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    journeyDiagramXKPGCS4QBinding81
      .append("circle")
      .attr("cx", journeyDiagramXKPGCS4QInput6.cx + 5)
      .attr("cy", journeyDiagramXKPGCS4QInput6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function journeyDiagramXKPGCS4QHelper9(journeyDiagramXKPGCS4QInput73) {
      let journeyDiagramXKPGCS4QBinding157 = appInitialNit()
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI / 2) * 3)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramXKPGCS4QInput73
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramXKPGCS4QBinding157)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramXKPGCS4QInput6.cx +
            "," +
            (journeyDiagramXKPGCS4QInput6.cy + 2) +
            ")",
        );
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper9, "smile");
    function journeyDiagramXKPGCS4QHelper10(journeyDiagramXKPGCS4QInput71) {
      let journeyDiagramXKPGCS4QBinding156 = appInitialNit()
        .startAngle((3 * Math.PI) / 2)
        .endAngle((Math.PI / 2) * 5)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramXKPGCS4QInput71
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramXKPGCS4QBinding156)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramXKPGCS4QInput6.cx +
            "," +
            (journeyDiagramXKPGCS4QInput6.cy + 7) +
            ")",
        );
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper10, "sad");
    function journeyDiagramXKPGCS4QHelper11(journeyDiagramXKPGCS4QInput72) {
      journeyDiagramXKPGCS4QInput72
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", journeyDiagramXKPGCS4QInput6.cx - 5)
        .attr("y1", journeyDiagramXKPGCS4QInput6.cy + 7)
        .attr("x2", journeyDiagramXKPGCS4QInput6.cx + 5)
        .attr("y2", journeyDiagramXKPGCS4QInput6.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      defineFunctionName(journeyDiagramXKPGCS4QHelper11, "ambivalent"),
      journeyDiagramXKPGCS4QInput6.score > 3
        ? journeyDiagramXKPGCS4QHelper9(journeyDiagramXKPGCS4QBinding81)
        : journeyDiagramXKPGCS4QInput6.score < 3
          ? journeyDiagramXKPGCS4QHelper10(journeyDiagramXKPGCS4QBinding81)
          : journeyDiagramXKPGCS4QHelper11(journeyDiagramXKPGCS4QBinding81),
      journeyDiagramXKPGCS4QBinding80
    );
  }, "drawFace");
  journeyDiagramXKPGCS4QBinding19 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput64,
    journeyDiagramXKPGCS4QInput65,
  ) {
    let journeyDiagramXKPGCS4QBinding155 =
      journeyDiagramXKPGCS4QInput64.append("circle");
    return (
      journeyDiagramXKPGCS4QBinding155.attr(
        "cx",
        journeyDiagramXKPGCS4QInput65.cx,
      ),
      journeyDiagramXKPGCS4QBinding155.attr(
        "cy",
        journeyDiagramXKPGCS4QInput65.cy,
      ),
      journeyDiagramXKPGCS4QBinding155.attr(
        "class",
        "actor-" + journeyDiagramXKPGCS4QInput65.pos,
      ),
      journeyDiagramXKPGCS4QBinding155.attr(
        "fill",
        journeyDiagramXKPGCS4QInput65.fill,
      ),
      journeyDiagramXKPGCS4QBinding155.attr(
        "stroke",
        journeyDiagramXKPGCS4QInput65.stroke,
      ),
      journeyDiagramXKPGCS4QBinding155.attr(
        "r",
        journeyDiagramXKPGCS4QInput65.r,
      ),
      journeyDiagramXKPGCS4QBinding155.class !== undefined &&
        journeyDiagramXKPGCS4QBinding155.attr(
          "class",
          journeyDiagramXKPGCS4QBinding155.class,
        ),
      journeyDiagramXKPGCS4QInput65.title !== undefined &&
        journeyDiagramXKPGCS4QBinding155
          .append("title")
          .text(journeyDiagramXKPGCS4QInput65.title),
      journeyDiagramXKPGCS4QBinding155
    );
  }, "drawCircle");
  journeyDiagramXKPGCS4QBinding20 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput113,
    journeyDiagramXKPGCS4QInput114,
  ) {
    return chunkTZMSLE5BA(
      journeyDiagramXKPGCS4QInput113,
      journeyDiagramXKPGCS4QInput114,
    );
  }, "drawText");
  journeyDiagramXKPGCS4QBinding21 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput55,
    journeyDiagramXKPGCS4QInput56,
  ) {
    function journeyDiagramXKPGCS4QHelper13(
      journeyDiagramXKPGCS4QInput66,
      journeyDiagramXKPGCS4QInput67,
      journeyDiagramXKPGCS4QInput68,
      journeyDiagramXKPGCS4QInput69,
      journeyDiagramXKPGCS4QInput70,
    ) {
      return (
        journeyDiagramXKPGCS4QInput66 +
        "," +
        journeyDiagramXKPGCS4QInput67 +
        " " +
        (journeyDiagramXKPGCS4QInput66 + journeyDiagramXKPGCS4QInput68) +
        "," +
        journeyDiagramXKPGCS4QInput67 +
        " " +
        (journeyDiagramXKPGCS4QInput66 + journeyDiagramXKPGCS4QInput68) +
        "," +
        (journeyDiagramXKPGCS4QInput67 +
          journeyDiagramXKPGCS4QInput69 -
          journeyDiagramXKPGCS4QInput70) +
        " " +
        (journeyDiagramXKPGCS4QInput66 +
          journeyDiagramXKPGCS4QInput68 -
          journeyDiagramXKPGCS4QInput70 * 1.2) +
        "," +
        (journeyDiagramXKPGCS4QInput67 + journeyDiagramXKPGCS4QInput69) +
        " " +
        journeyDiagramXKPGCS4QInput66 +
        "," +
        (journeyDiagramXKPGCS4QInput67 + journeyDiagramXKPGCS4QInput69)
      );
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper13, "genPoints");
    let journeyDiagramXKPGCS4QBinding141 =
      journeyDiagramXKPGCS4QInput55.append("polygon");
    journeyDiagramXKPGCS4QBinding141.attr(
      "points",
      journeyDiagramXKPGCS4QHelper13(
        journeyDiagramXKPGCS4QInput56.x,
        journeyDiagramXKPGCS4QInput56.y,
        50,
        20,
        7,
      ),
    );
    journeyDiagramXKPGCS4QBinding141.attr("class", "labelBox");
    journeyDiagramXKPGCS4QInput56.y +=
      journeyDiagramXKPGCS4QInput56.labelMargin;
    journeyDiagramXKPGCS4QInput56.x +=
      0.5 * journeyDiagramXKPGCS4QInput56.labelMargin;
    journeyDiagramXKPGCS4QBinding20(
      journeyDiagramXKPGCS4QInput55,
      journeyDiagramXKPGCS4QInput56,
    );
  }, "drawLabel");
  journeyDiagramXKPGCS4QBinding22 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput57,
    journeyDiagramXKPGCS4QInput58,
    journeyDiagramXKPGCS4QInput59,
  ) {
    let journeyDiagramXKPGCS4QBinding145 =
        journeyDiagramXKPGCS4QInput57.append("g"),
      journeyDiagramXKPGCS4QBinding146 = o();
    journeyDiagramXKPGCS4QBinding146.x = journeyDiagramXKPGCS4QInput58.x;
    journeyDiagramXKPGCS4QBinding146.y = journeyDiagramXKPGCS4QInput58.y;
    journeyDiagramXKPGCS4QBinding146.fill = journeyDiagramXKPGCS4QInput58.fill;
    journeyDiagramXKPGCS4QBinding146.width =
      journeyDiagramXKPGCS4QInput59.width *
        journeyDiagramXKPGCS4QInput58.taskCount +
      journeyDiagramXKPGCS4QInput59.diagramMarginX *
        (journeyDiagramXKPGCS4QInput58.taskCount - 1);
    journeyDiagramXKPGCS4QBinding146.height =
      journeyDiagramXKPGCS4QInput59.height;
    journeyDiagramXKPGCS4QBinding146.class =
      "journey-section section-type-" + journeyDiagramXKPGCS4QInput58.num;
    journeyDiagramXKPGCS4QBinding146.rx = 3;
    journeyDiagramXKPGCS4QBinding146.ry = 3;
    journeyDiagramXKPGCS4QBinding17(
      journeyDiagramXKPGCS4QBinding145,
      journeyDiagramXKPGCS4QBinding146,
    );
    journeyDiagramXKPGCS4QBinding26(journeyDiagramXKPGCS4QInput59)(
      journeyDiagramXKPGCS4QInput58.text,
      journeyDiagramXKPGCS4QBinding145,
      journeyDiagramXKPGCS4QBinding146.x,
      journeyDiagramXKPGCS4QBinding146.y,
      journeyDiagramXKPGCS4QBinding146.width,
      journeyDiagramXKPGCS4QBinding146.height,
      {
        class:
          "journey-section section-type-" + journeyDiagramXKPGCS4QInput58.num,
      },
      journeyDiagramXKPGCS4QInput59,
      journeyDiagramXKPGCS4QInput58.colour,
    );
  }, "drawSection");
  journeyDiagramXKPGCS4QBinding23 = -1;
  journeyDiagramXKPGCS4QBinding24 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput16,
    journeyDiagramXKPGCS4QInput17,
    journeyDiagramXKPGCS4QInput18,
  ) {
    let journeyDiagramXKPGCS4QBinding106 =
        journeyDiagramXKPGCS4QInput17.x +
        journeyDiagramXKPGCS4QInput18.width / 2,
      journeyDiagramXKPGCS4QBinding107 =
        journeyDiagramXKPGCS4QInput16.append("g");
    journeyDiagramXKPGCS4QBinding23++;
    journeyDiagramXKPGCS4QBinding107
      .append("line")
      .attr("id", "task" + journeyDiagramXKPGCS4QBinding23)
      .attr("x1", journeyDiagramXKPGCS4QBinding106)
      .attr("y1", journeyDiagramXKPGCS4QInput17.y)
      .attr("x2", journeyDiagramXKPGCS4QBinding106)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    journeyDiagramXKPGCS4QBinding18(journeyDiagramXKPGCS4QBinding107, {
      cx: journeyDiagramXKPGCS4QBinding106,
      cy: 300 + (5 - journeyDiagramXKPGCS4QInput17.score) * 30,
      score: journeyDiagramXKPGCS4QInput17.score,
    });
    let journeyDiagramXKPGCS4QBinding108 = o();
    journeyDiagramXKPGCS4QBinding108.x = journeyDiagramXKPGCS4QInput17.x;
    journeyDiagramXKPGCS4QBinding108.y = journeyDiagramXKPGCS4QInput17.y;
    journeyDiagramXKPGCS4QBinding108.fill = journeyDiagramXKPGCS4QInput17.fill;
    journeyDiagramXKPGCS4QBinding108.width =
      journeyDiagramXKPGCS4QInput18.width;
    journeyDiagramXKPGCS4QBinding108.height =
      journeyDiagramXKPGCS4QInput18.height;
    journeyDiagramXKPGCS4QBinding108.class =
      "task task-type-" + journeyDiagramXKPGCS4QInput17.num;
    journeyDiagramXKPGCS4QBinding108.rx = 3;
    journeyDiagramXKPGCS4QBinding108.ry = 3;
    journeyDiagramXKPGCS4QBinding17(
      journeyDiagramXKPGCS4QBinding107,
      journeyDiagramXKPGCS4QBinding108,
    );
    let journeyDiagramXKPGCS4QBinding109 = journeyDiagramXKPGCS4QInput17.x + 14;
    journeyDiagramXKPGCS4QInput17.people.forEach((item) => {
      let journeyDiagramXKPGCS4QBinding168 =
          journeyDiagramXKPGCS4QInput17.actors[item].color,
        journeyDiagramXKPGCS4QBinding169 = {
          cx: journeyDiagramXKPGCS4QBinding109,
          cy: journeyDiagramXKPGCS4QInput17.y,
          r: 7,
          fill: journeyDiagramXKPGCS4QBinding168,
          stroke: "#000",
          title: item,
          pos: journeyDiagramXKPGCS4QInput17.actors[item].position,
        };
      journeyDiagramXKPGCS4QBinding19(
        journeyDiagramXKPGCS4QBinding107,
        journeyDiagramXKPGCS4QBinding169,
      );
      journeyDiagramXKPGCS4QBinding109 += 10;
    });
    journeyDiagramXKPGCS4QBinding26(journeyDiagramXKPGCS4QInput18)(
      journeyDiagramXKPGCS4QInput17.task,
      journeyDiagramXKPGCS4QBinding107,
      journeyDiagramXKPGCS4QBinding108.x,
      journeyDiagramXKPGCS4QBinding108.y,
      journeyDiagramXKPGCS4QBinding108.width,
      journeyDiagramXKPGCS4QBinding108.height,
      {
        class: "task",
      },
      journeyDiagramXKPGCS4QInput18,
      journeyDiagramXKPGCS4QInput17.colour,
    );
  }, "drawTask");
  journeyDiagramXKPGCS4QBinding25 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput115,
    journeyDiagramXKPGCS4QInput116,
  ) {
    chunkTZMSLE5BT(
      journeyDiagramXKPGCS4QInput115,
      journeyDiagramXKPGCS4QInput116,
    );
  }, "drawBackgroundRect");
  journeyDiagramXKPGCS4QBinding26 = (function () {
    function journeyDiagramXKPGCS4QHelper5(
      journeyDiagramXKPGCS4QInput77,
      journeyDiagramXKPGCS4QInput78,
      journeyDiagramXKPGCS4QInput79,
      journeyDiagramXKPGCS4QInput80,
      journeyDiagramXKPGCS4QInput81,
      journeyDiagramXKPGCS4QInput82,
      journeyDiagramXKPGCS4QInput83,
      journeyDiagramXKPGCS4QInput84,
    ) {
      journeyDiagramXKPGCS4QHelper8(
        journeyDiagramXKPGCS4QInput78
          .append("text")
          .attr(
            "x",
            journeyDiagramXKPGCS4QInput79 + journeyDiagramXKPGCS4QInput81 / 2,
          )
          .attr(
            "y",
            journeyDiagramXKPGCS4QInput80 +
              journeyDiagramXKPGCS4QInput82 / 2 +
              5,
          )
          .style("font-color", journeyDiagramXKPGCS4QInput84)
          .style("text-anchor", "middle")
          .text(journeyDiagramXKPGCS4QInput77),
        journeyDiagramXKPGCS4QInput83,
      );
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper5, "byText");
    function journeyDiagramXKPGCS4QHelper6(
      journeyDiagramXKPGCS4QInput34,
      journeyDiagramXKPGCS4QInput35,
      journeyDiagramXKPGCS4QInput36,
      journeyDiagramXKPGCS4QInput37,
      journeyDiagramXKPGCS4QInput38,
      journeyDiagramXKPGCS4QInput39,
      journeyDiagramXKPGCS4QInput40,
      journeyDiagramXKPGCS4QInput41,
      journeyDiagramXKPGCS4QInput42,
    ) {
      let { taskFontSize, taskFontFamily } = journeyDiagramXKPGCS4QInput41,
        journeyDiagramXKPGCS4QBinding134 =
          journeyDiagramXKPGCS4QInput34.split(/<br\s*\/?>/gi);
      for (
        let journeyDiagramXKPGCS4QBinding140 = 0;
        journeyDiagramXKPGCS4QBinding140 <
        journeyDiagramXKPGCS4QBinding134.length;
        journeyDiagramXKPGCS4QBinding140++
      ) {
        let journeyDiagramXKPGCS4QBinding142 =
            journeyDiagramXKPGCS4QBinding140 * taskFontSize -
            (taskFontSize * (journeyDiagramXKPGCS4QBinding134.length - 1)) / 2,
          journeyDiagramXKPGCS4QBinding143 = journeyDiagramXKPGCS4QInput35
            .append("text")
            .attr(
              "x",
              journeyDiagramXKPGCS4QInput36 + journeyDiagramXKPGCS4QInput38 / 2,
            )
            .attr("y", journeyDiagramXKPGCS4QInput37)
            .attr("fill", journeyDiagramXKPGCS4QInput42)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        journeyDiagramXKPGCS4QBinding143
          .append("tspan")
          .attr(
            "x",
            journeyDiagramXKPGCS4QInput36 + journeyDiagramXKPGCS4QInput38 / 2,
          )
          .attr("dy", journeyDiagramXKPGCS4QBinding142)
          .text(
            journeyDiagramXKPGCS4QBinding134[journeyDiagramXKPGCS4QBinding140],
          );
        journeyDiagramXKPGCS4QBinding143
          .attr(
            "y",
            journeyDiagramXKPGCS4QInput37 + journeyDiagramXKPGCS4QInput39 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        journeyDiagramXKPGCS4QHelper8(
          journeyDiagramXKPGCS4QBinding143,
          journeyDiagramXKPGCS4QInput40,
        );
      }
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper6, "byTspan");
    function journeyDiagramXKPGCS4QHelper7(
      journeyDiagramXKPGCS4QInput45,
      journeyDiagramXKPGCS4QInput46,
      journeyDiagramXKPGCS4QInput47,
      journeyDiagramXKPGCS4QInput48,
      journeyDiagramXKPGCS4QInput49,
      journeyDiagramXKPGCS4QInput50,
      journeyDiagramXKPGCS4QInput51,
      journeyDiagramXKPGCS4QInput52,
    ) {
      let journeyDiagramXKPGCS4QBinding138 =
          journeyDiagramXKPGCS4QInput46.append("switch"),
        journeyDiagramXKPGCS4QBinding139 = journeyDiagramXKPGCS4QBinding138
          .append("foreignObject")
          .attr("x", journeyDiagramXKPGCS4QInput47)
          .attr("y", journeyDiagramXKPGCS4QInput48)
          .attr("width", journeyDiagramXKPGCS4QInput49)
          .attr("height", journeyDiagramXKPGCS4QInput50)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      journeyDiagramXKPGCS4QBinding139
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(journeyDiagramXKPGCS4QInput45);
      journeyDiagramXKPGCS4QHelper6(
        journeyDiagramXKPGCS4QInput45,
        journeyDiagramXKPGCS4QBinding138,
        journeyDiagramXKPGCS4QInput47,
        journeyDiagramXKPGCS4QInput48,
        journeyDiagramXKPGCS4QInput49,
        journeyDiagramXKPGCS4QInput50,
        journeyDiagramXKPGCS4QInput51,
        journeyDiagramXKPGCS4QInput52,
      );
      journeyDiagramXKPGCS4QHelper8(
        journeyDiagramXKPGCS4QBinding139,
        journeyDiagramXKPGCS4QInput51,
      );
    }
    defineFunctionName(journeyDiagramXKPGCS4QHelper7, "byFo");
    function journeyDiagramXKPGCS4QHelper8(
      journeyDiagramXKPGCS4QInput103,
      journeyDiagramXKPGCS4QInput104,
    ) {
      for (let journeyDiagramXKPGCS4QBinding184 in journeyDiagramXKPGCS4QInput104)
        journeyDiagramXKPGCS4QBinding184 in journeyDiagramXKPGCS4QInput104 &&
          journeyDiagramXKPGCS4QInput103.attr(
            journeyDiagramXKPGCS4QBinding184,
            journeyDiagramXKPGCS4QInput104[journeyDiagramXKPGCS4QBinding184],
          );
    }
    return (
      defineFunctionName(journeyDiagramXKPGCS4QHelper8, "_setTextAttrs"),
      function (journeyDiagramXKPGCS4QInput88) {
        return journeyDiagramXKPGCS4QInput88.textPlacement === "fo"
          ? journeyDiagramXKPGCS4QHelper7
          : journeyDiagramXKPGCS4QInput88.textPlacement === "old"
            ? journeyDiagramXKPGCS4QHelper5
            : journeyDiagramXKPGCS4QHelper6;
      }
    );
  })();
  journeyDiagramXKPGCS4QBinding27 = {
    drawRect: journeyDiagramXKPGCS4QBinding17,
    drawCircle: journeyDiagramXKPGCS4QBinding19,
    drawSection: journeyDiagramXKPGCS4QBinding22,
    drawText: journeyDiagramXKPGCS4QBinding20,
    drawLabel: journeyDiagramXKPGCS4QBinding21,
    drawTask: journeyDiagramXKPGCS4QBinding24,
    drawBackgroundRect: journeyDiagramXKPGCS4QBinding25,
    initGraphics: defineFunctionName(function (journeyDiagramXKPGCS4QInput74) {
      journeyDiagramXKPGCS4QInput74
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
    }, "initGraphics"),
  };
  journeyDiagramXKPGCS4QBinding28 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput97,
  ) {
    Object.keys(journeyDiagramXKPGCS4QInput97).forEach(function (item) {
      journeyDiagramXKPGCS4QBinding31[item] =
        journeyDiagramXKPGCS4QInput97[item];
    });
  }, "setConf");
  journeyDiagramXKPGCS4QBinding29 = {};
  journeyDiagramXKPGCS4QBinding30 = 0;
  defineFunctionName(journeyDiagramXKPGCS4QHelper1, "drawActorLegend");
  journeyDiagramXKPGCS4QBinding31 = _chunkABZYJK2DB().journey;
  journeyDiagramXKPGCS4QBinding32 = 0;
  journeyDiagramXKPGCS4QBinding33 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput7,
    journeyDiagramXKPGCS4QInput8,
    journeyDiagramXKPGCS4QInput9,
    journeyDiagramXKPGCS4QInput10,
  ) {
    let journeyDiagramXKPGCS4QBinding82 = _chunkABZYJK2DB(),
      journeyDiagramXKPGCS4QBinding83 =
        journeyDiagramXKPGCS4QBinding82.journey.titleColor,
      journeyDiagramXKPGCS4QBinding84 =
        journeyDiagramXKPGCS4QBinding82.journey.titleFontSize,
      journeyDiagramXKPGCS4QBinding85 =
        journeyDiagramXKPGCS4QBinding82.journey.titleFontFamily,
      journeyDiagramXKPGCS4QBinding86 =
        journeyDiagramXKPGCS4QBinding82.securityLevel,
      journeyDiagramXKPGCS4QBinding87;
    journeyDiagramXKPGCS4QBinding86 === "sandbox" &&
      (journeyDiagramXKPGCS4QBinding87 = select(
        "#i" + journeyDiagramXKPGCS4QInput8,
      ));
    let journeyDiagramXKPGCS4QBinding88 = select(
      journeyDiagramXKPGCS4QBinding86 === "sandbox"
        ? journeyDiagramXKPGCS4QBinding87.nodes()[0].contentDocument.body
        : "body",
    );
    journeyDiagramXKPGCS4QBinding34.init();
    let journeyDiagramXKPGCS4QBinding89 =
      journeyDiagramXKPGCS4QBinding88.select(
        "#" + journeyDiagramXKPGCS4QInput8,
      );
    journeyDiagramXKPGCS4QBinding27.initGraphics(
      journeyDiagramXKPGCS4QBinding89,
    );
    let journeyDiagramXKPGCS4QBinding90 =
        journeyDiagramXKPGCS4QInput10.db.getTasks(),
      journeyDiagramXKPGCS4QBinding91 =
        journeyDiagramXKPGCS4QInput10.db.getDiagramTitle(),
      journeyDiagramXKPGCS4QBinding92 =
        journeyDiagramXKPGCS4QInput10.db.getActors();
    for (let journeyDiagramXKPGCS4QBinding185 in journeyDiagramXKPGCS4QBinding29)
      delete journeyDiagramXKPGCS4QBinding29[journeyDiagramXKPGCS4QBinding185];
    let journeyDiagramXKPGCS4QBinding93 = 0;
    journeyDiagramXKPGCS4QBinding92.forEach((item) => {
      journeyDiagramXKPGCS4QBinding29[item] = {
        color:
          journeyDiagramXKPGCS4QBinding31.actorColours[
            journeyDiagramXKPGCS4QBinding93 %
              journeyDiagramXKPGCS4QBinding31.actorColours.length
          ],
        position: journeyDiagramXKPGCS4QBinding93,
      };
      journeyDiagramXKPGCS4QBinding93++;
    });
    journeyDiagramXKPGCS4QHelper1(journeyDiagramXKPGCS4QBinding89);
    journeyDiagramXKPGCS4QBinding32 =
      journeyDiagramXKPGCS4QBinding31.leftMargin +
      journeyDiagramXKPGCS4QBinding30;
    journeyDiagramXKPGCS4QBinding34.insert(
      0,
      0,
      journeyDiagramXKPGCS4QBinding32,
      Object.keys(journeyDiagramXKPGCS4QBinding29).length * 50,
    );
    journeyDiagramXKPGCS4QBinding37(
      journeyDiagramXKPGCS4QBinding89,
      journeyDiagramXKPGCS4QBinding90,
      0,
    );
    let journeyDiagramXKPGCS4QBinding94 =
      journeyDiagramXKPGCS4QBinding34.getBounds();
    journeyDiagramXKPGCS4QBinding91 &&
      journeyDiagramXKPGCS4QBinding89
        .append("text")
        .text(journeyDiagramXKPGCS4QBinding91)
        .attr("x", journeyDiagramXKPGCS4QBinding32)
        .attr("font-size", journeyDiagramXKPGCS4QBinding84)
        .attr("font-weight", "bold")
        .attr("y", 25)
        .attr("fill", journeyDiagramXKPGCS4QBinding83)
        .attr("font-family", journeyDiagramXKPGCS4QBinding85);
    let journeyDiagramXKPGCS4QBinding95 =
        journeyDiagramXKPGCS4QBinding94.stopy -
        journeyDiagramXKPGCS4QBinding94.starty +
        2 * journeyDiagramXKPGCS4QBinding31.diagramMarginY,
      journeyDiagramXKPGCS4QBinding96 =
        journeyDiagramXKPGCS4QBinding32 +
        journeyDiagramXKPGCS4QBinding94.stopx +
        2 * journeyDiagramXKPGCS4QBinding31.diagramMarginX;
    _chunkABZYJK2DC(
      journeyDiagramXKPGCS4QBinding89,
      journeyDiagramXKPGCS4QBinding95,
      journeyDiagramXKPGCS4QBinding96,
      journeyDiagramXKPGCS4QBinding31.useMaxWidth,
    );
    journeyDiagramXKPGCS4QBinding89
      .append("line")
      .attr("x1", journeyDiagramXKPGCS4QBinding32)
      .attr("y1", journeyDiagramXKPGCS4QBinding31.height * 4)
      .attr(
        "x2",
        journeyDiagramXKPGCS4QBinding96 - journeyDiagramXKPGCS4QBinding32 - 4,
      )
      .attr("y2", journeyDiagramXKPGCS4QBinding31.height * 4)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    let journeyDiagramXKPGCS4QBinding97 = journeyDiagramXKPGCS4QBinding91
      ? 70
      : 0;
    journeyDiagramXKPGCS4QBinding89.attr(
      "viewBox",
      `${journeyDiagramXKPGCS4QBinding94.startx} -25 ${journeyDiagramXKPGCS4QBinding96} ${journeyDiagramXKPGCS4QBinding95 + journeyDiagramXKPGCS4QBinding97}`,
    );
    journeyDiagramXKPGCS4QBinding89.attr(
      "preserveAspectRatio",
      "xMinYMin meet",
    );
    journeyDiagramXKPGCS4QBinding89.attr(
      "height",
      journeyDiagramXKPGCS4QBinding95 + journeyDiagramXKPGCS4QBinding97 + 25,
    );
  }, "draw");
  journeyDiagramXKPGCS4QBinding34 = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined,
    },
    verticalPos: 0,
    sequenceItems: [],
    init: defineFunctionName(function () {
      this.sequenceItems = [];
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
      };
      this.verticalPos = 0;
    }, "init"),
    updateVal: defineFunctionName(function (
      journeyDiagramXKPGCS4QInput99,
      journeyDiagramXKPGCS4QInput100,
      journeyDiagramXKPGCS4QInput101,
      journeyDiagramXKPGCS4QInput102,
    ) {
      journeyDiagramXKPGCS4QInput99[journeyDiagramXKPGCS4QInput100] ===
      undefined
        ? (journeyDiagramXKPGCS4QInput99[journeyDiagramXKPGCS4QInput100] =
            journeyDiagramXKPGCS4QInput101)
        : (journeyDiagramXKPGCS4QInput99[journeyDiagramXKPGCS4QInput100] =
            journeyDiagramXKPGCS4QInput102(
              journeyDiagramXKPGCS4QInput101,
              journeyDiagramXKPGCS4QInput99[journeyDiagramXKPGCS4QInput100],
            ));
    }, "updateVal"),
    updateBounds: defineFunctionName(function (
      journeyDiagramXKPGCS4QInput30,
      journeyDiagramXKPGCS4QInput31,
      journeyDiagramXKPGCS4QInput32,
      journeyDiagramXKPGCS4QInput33,
    ) {
      let journeyDiagramXKPGCS4QBinding130 = _chunkABZYJK2DB().journey,
        journeyDiagramXKPGCS4QBinding131 = this,
        journeyDiagramXKPGCS4QBinding132 = 0;
      function journeyDiagramXKPGCS4QHelper12(journeyDiagramXKPGCS4QInput43) {
        return defineFunctionName(function (journeyDiagramXKPGCS4QInput44) {
          journeyDiagramXKPGCS4QBinding132++;
          let journeyDiagramXKPGCS4QBinding137 =
            journeyDiagramXKPGCS4QBinding131.sequenceItems.length -
            journeyDiagramXKPGCS4QBinding132 +
            1;
          journeyDiagramXKPGCS4QBinding131.updateVal(
            journeyDiagramXKPGCS4QInput44,
            "starty",
            journeyDiagramXKPGCS4QInput31 -
              journeyDiagramXKPGCS4QBinding137 *
                journeyDiagramXKPGCS4QBinding130.boxMargin,
            Math.min,
          );
          journeyDiagramXKPGCS4QBinding131.updateVal(
            journeyDiagramXKPGCS4QInput44,
            "stopy",
            journeyDiagramXKPGCS4QInput33 +
              journeyDiagramXKPGCS4QBinding137 *
                journeyDiagramXKPGCS4QBinding130.boxMargin,
            Math.max,
          );
          journeyDiagramXKPGCS4QBinding131.updateVal(
            journeyDiagramXKPGCS4QBinding34.data,
            "startx",
            journeyDiagramXKPGCS4QInput30 -
              journeyDiagramXKPGCS4QBinding137 *
                journeyDiagramXKPGCS4QBinding130.boxMargin,
            Math.min,
          );
          journeyDiagramXKPGCS4QBinding131.updateVal(
            journeyDiagramXKPGCS4QBinding34.data,
            "stopx",
            journeyDiagramXKPGCS4QInput32 +
              journeyDiagramXKPGCS4QBinding137 *
                journeyDiagramXKPGCS4QBinding130.boxMargin,
            Math.max,
          );
          journeyDiagramXKPGCS4QInput43 !== "activation" &&
            (journeyDiagramXKPGCS4QBinding131.updateVal(
              journeyDiagramXKPGCS4QInput44,
              "startx",
              journeyDiagramXKPGCS4QInput30 -
                journeyDiagramXKPGCS4QBinding137 *
                  journeyDiagramXKPGCS4QBinding130.boxMargin,
              Math.min,
            ),
            journeyDiagramXKPGCS4QBinding131.updateVal(
              journeyDiagramXKPGCS4QInput44,
              "stopx",
              journeyDiagramXKPGCS4QInput32 +
                journeyDiagramXKPGCS4QBinding137 *
                  journeyDiagramXKPGCS4QBinding130.boxMargin,
              Math.max,
            ),
            journeyDiagramXKPGCS4QBinding131.updateVal(
              journeyDiagramXKPGCS4QBinding34.data,
              "starty",
              journeyDiagramXKPGCS4QInput31 -
                journeyDiagramXKPGCS4QBinding137 *
                  journeyDiagramXKPGCS4QBinding130.boxMargin,
              Math.min,
            ),
            journeyDiagramXKPGCS4QBinding131.updateVal(
              journeyDiagramXKPGCS4QBinding34.data,
              "stopy",
              journeyDiagramXKPGCS4QInput33 +
                journeyDiagramXKPGCS4QBinding137 *
                  journeyDiagramXKPGCS4QBinding130.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      defineFunctionName(journeyDiagramXKPGCS4QHelper12, "updateFn");
      this.sequenceItems.forEach(journeyDiagramXKPGCS4QHelper12());
    }, "updateBounds"),
    insert: defineFunctionName(function (
      journeyDiagramXKPGCS4QInput60,
      journeyDiagramXKPGCS4QInput61,
      journeyDiagramXKPGCS4QInput62,
      journeyDiagramXKPGCS4QInput63,
    ) {
      let journeyDiagramXKPGCS4QBinding151 = Math.min(
          journeyDiagramXKPGCS4QInput60,
          journeyDiagramXKPGCS4QInput62,
        ),
        journeyDiagramXKPGCS4QBinding152 = Math.max(
          journeyDiagramXKPGCS4QInput60,
          journeyDiagramXKPGCS4QInput62,
        ),
        journeyDiagramXKPGCS4QBinding153 = Math.min(
          journeyDiagramXKPGCS4QInput61,
          journeyDiagramXKPGCS4QInput63,
        ),
        journeyDiagramXKPGCS4QBinding154 = Math.max(
          journeyDiagramXKPGCS4QInput61,
          journeyDiagramXKPGCS4QInput63,
        );
      this.updateVal(
        journeyDiagramXKPGCS4QBinding34.data,
        "startx",
        journeyDiagramXKPGCS4QBinding151,
        Math.min,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QBinding34.data,
        "starty",
        journeyDiagramXKPGCS4QBinding153,
        Math.min,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QBinding34.data,
        "stopx",
        journeyDiagramXKPGCS4QBinding152,
        Math.max,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QBinding34.data,
        "stopy",
        journeyDiagramXKPGCS4QBinding154,
        Math.max,
      );
      this.updateBounds(
        journeyDiagramXKPGCS4QBinding151,
        journeyDiagramXKPGCS4QBinding153,
        journeyDiagramXKPGCS4QBinding152,
        journeyDiagramXKPGCS4QBinding154,
      );
    }, "insert"),
    bumpVerticalPos: defineFunctionName(function (
      journeyDiagramXKPGCS4QInput98,
    ) {
      this.verticalPos += journeyDiagramXKPGCS4QInput98;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: defineFunctionName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: defineFunctionName(function () {
      return this.data;
    }, "getBounds"),
  };
  journeyDiagramXKPGCS4QBinding35 =
    journeyDiagramXKPGCS4QBinding31.sectionFills;
  journeyDiagramXKPGCS4QBinding36 =
    journeyDiagramXKPGCS4QBinding31.sectionColours;
  journeyDiagramXKPGCS4QBinding37 = defineFunctionName(function (
    journeyDiagramXKPGCS4QInput20,
    journeyDiagramXKPGCS4QInput21,
    journeyDiagramXKPGCS4QInput22,
  ) {
    let journeyDiagramXKPGCS4QBinding120 = _chunkABZYJK2DB().journey,
      journeyDiagramXKPGCS4QBinding121 = "",
      journeyDiagramXKPGCS4QBinding122 =
        journeyDiagramXKPGCS4QInput22 +
        (journeyDiagramXKPGCS4QBinding120.height * 2 +
          journeyDiagramXKPGCS4QBinding120.diagramMarginY),
      journeyDiagramXKPGCS4QBinding123 = 0,
      journeyDiagramXKPGCS4QBinding124 = "#CCC",
      journeyDiagramXKPGCS4QBinding125 = "black",
      journeyDiagramXKPGCS4QBinding126 = 0;
    for (let [
      journeyDiagramXKPGCS4QBinding128,
      journeyDiagramXKPGCS4QBinding129,
    ] of journeyDiagramXKPGCS4QInput21.entries()) {
      if (
        journeyDiagramXKPGCS4QBinding121 !==
        journeyDiagramXKPGCS4QBinding129.section
      ) {
        journeyDiagramXKPGCS4QBinding124 =
          journeyDiagramXKPGCS4QBinding35[
            journeyDiagramXKPGCS4QBinding123 %
              journeyDiagramXKPGCS4QBinding35.length
          ];
        journeyDiagramXKPGCS4QBinding126 =
          journeyDiagramXKPGCS4QBinding123 %
          journeyDiagramXKPGCS4QBinding35.length;
        journeyDiagramXKPGCS4QBinding125 =
          journeyDiagramXKPGCS4QBinding36[
            journeyDiagramXKPGCS4QBinding123 %
              journeyDiagramXKPGCS4QBinding36.length
          ];
        let journeyDiagramXKPGCS4QBinding148 = 0,
          journeyDiagramXKPGCS4QBinding149 =
            journeyDiagramXKPGCS4QBinding129.section;
        for (
          let journeyDiagramXKPGCS4QBinding181 =
            journeyDiagramXKPGCS4QBinding128;
          journeyDiagramXKPGCS4QBinding181 <
            journeyDiagramXKPGCS4QInput21.length &&
          journeyDiagramXKPGCS4QInput21[journeyDiagramXKPGCS4QBinding181]
            .section == journeyDiagramXKPGCS4QBinding149;
          journeyDiagramXKPGCS4QBinding181++
        )
          journeyDiagramXKPGCS4QBinding148 += 1;
        let journeyDiagramXKPGCS4QBinding150 = {
          x:
            journeyDiagramXKPGCS4QBinding128 *
              journeyDiagramXKPGCS4QBinding120.taskMargin +
            journeyDiagramXKPGCS4QBinding128 *
              journeyDiagramXKPGCS4QBinding120.width +
            journeyDiagramXKPGCS4QBinding32,
          y: 50,
          text: journeyDiagramXKPGCS4QBinding129.section,
          fill: journeyDiagramXKPGCS4QBinding124,
          num: journeyDiagramXKPGCS4QBinding126,
          colour: journeyDiagramXKPGCS4QBinding125,
          taskCount: journeyDiagramXKPGCS4QBinding148,
        };
        journeyDiagramXKPGCS4QBinding27.drawSection(
          journeyDiagramXKPGCS4QInput20,
          journeyDiagramXKPGCS4QBinding150,
          journeyDiagramXKPGCS4QBinding120,
        );
        journeyDiagramXKPGCS4QBinding121 =
          journeyDiagramXKPGCS4QBinding129.section;
        journeyDiagramXKPGCS4QBinding123++;
      }
      let journeyDiagramXKPGCS4QBinding133 =
        journeyDiagramXKPGCS4QBinding129.people.reduce(
          (accumulator, current) => (
            journeyDiagramXKPGCS4QBinding29[current] &&
              (accumulator[current] = journeyDiagramXKPGCS4QBinding29[current]),
            accumulator
          ),
          {},
        );
      journeyDiagramXKPGCS4QBinding129.x =
        journeyDiagramXKPGCS4QBinding128 *
          journeyDiagramXKPGCS4QBinding120.taskMargin +
        journeyDiagramXKPGCS4QBinding128 *
          journeyDiagramXKPGCS4QBinding120.width +
        journeyDiagramXKPGCS4QBinding32;
      journeyDiagramXKPGCS4QBinding129.y = journeyDiagramXKPGCS4QBinding122;
      journeyDiagramXKPGCS4QBinding129.width =
        journeyDiagramXKPGCS4QBinding120.diagramMarginX;
      journeyDiagramXKPGCS4QBinding129.height =
        journeyDiagramXKPGCS4QBinding120.diagramMarginY;
      journeyDiagramXKPGCS4QBinding129.colour =
        journeyDiagramXKPGCS4QBinding125;
      journeyDiagramXKPGCS4QBinding129.fill = journeyDiagramXKPGCS4QBinding124;
      journeyDiagramXKPGCS4QBinding129.num = journeyDiagramXKPGCS4QBinding126;
      journeyDiagramXKPGCS4QBinding129.actors =
        journeyDiagramXKPGCS4QBinding133;
      journeyDiagramXKPGCS4QBinding27.drawTask(
        journeyDiagramXKPGCS4QInput20,
        journeyDiagramXKPGCS4QBinding129,
        journeyDiagramXKPGCS4QBinding120,
      );
      journeyDiagramXKPGCS4QBinding34.insert(
        journeyDiagramXKPGCS4QBinding129.x,
        journeyDiagramXKPGCS4QBinding129.y,
        journeyDiagramXKPGCS4QBinding129.x +
          journeyDiagramXKPGCS4QBinding129.width +
          journeyDiagramXKPGCS4QBinding120.taskMargin,
        450,
      );
    }
  }, "drawTasks");
  $ = {
    setConf: journeyDiagramXKPGCS4QBinding28,
    draw: journeyDiagramXKPGCS4QBinding33,
  };
  JourneyDiagramXKPGCS4Q = {
    parser: journeyDiagramXKPGCS4QBinding2,
    db: journeyDiagramXKPGCS4QBinding15,
    renderer: $,
    styles: journeyDiagramXKPGCS4QBinding16,
    init: defineFunctionName((journeyDiagramXKPGCS4QInput107) => {
      $.setConf(journeyDiagramXKPGCS4QInput107.journey);
      journeyDiagramXKPGCS4QBinding15.clear();
    }, "init"),
  };
})();
export { JourneyDiagramXKPGCS4Q as diagram };
