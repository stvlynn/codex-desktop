// Restored from ref/webview/assets/journeyDiagram-VCZTEJTY-i5VlMdFL.js
// Mermaid journey diagram definition alt (db + renderer + parser). app-initial Nit → vendor/d3-shape-arc.
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
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
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
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
import { initGetIconStylesChunk as n, getIconStyles as t } from "../../diagrams/get-icon-styles";
import { drawRect as a, initSvgDrawingHelpersChunk as l, drawBackgroundRect as chunkYZCP3GAMN, drawText as o, getNoteRect as s } from "../../diagrams/svg-drawing-helpers-alt";
function journeyDiagramVCZTEJTYHelper1(journeyDiagramVCZTEJTYInput11) {
  let journeyDiagramVCZTEJTYBinding98 = b().journey,
    journeyDiagramVCZTEJTYBinding99 =
      journeyDiagramVCZTEJTYBinding98.maxLabelWidth;
  journeyDiagramVCZTEJTYBinding30 = 0;
  let journeyDiagramVCZTEJTYBinding100 = 60;
  Object.keys(journeyDiagramVCZTEJTYBinding29).forEach((item) => {
    let journeyDiagramVCZTEJTYBinding101 =
        journeyDiagramVCZTEJTYBinding29[item].color,
      journeyDiagramVCZTEJTYBinding102 = {
        cx: 20,
        cy: journeyDiagramVCZTEJTYBinding100,
        r: 7,
        fill: journeyDiagramVCZTEJTYBinding101,
        stroke: "#000",
        pos: journeyDiagramVCZTEJTYBinding29[item].position,
      };
    journeyDiagramVCZTEJTYBinding27.drawCircle(
      journeyDiagramVCZTEJTYInput11,
      journeyDiagramVCZTEJTYBinding102,
    );
    let journeyDiagramVCZTEJTYBinding103 = journeyDiagramVCZTEJTYInput11
        .append("text")
        .attr("visibility", "hidden")
        .text(item),
      journeyDiagramVCZTEJTYBinding104 = journeyDiagramVCZTEJTYBinding103
        .node()
        .getBoundingClientRect().width;
    journeyDiagramVCZTEJTYBinding103.remove();
    let journeyDiagramVCZTEJTYBinding105 = [];
    if (journeyDiagramVCZTEJTYBinding104 <= journeyDiagramVCZTEJTYBinding99)
      journeyDiagramVCZTEJTYBinding105 = [item];
    else {
      let journeyDiagramVCZTEJTYBinding135 = item.split(" "),
        journeyDiagramVCZTEJTYBinding136 = "";
      journeyDiagramVCZTEJTYBinding103 = journeyDiagramVCZTEJTYInput11
        .append("text")
        .attr("visibility", "hidden");
      journeyDiagramVCZTEJTYBinding135.forEach((_item) => {
        let journeyDiagramVCZTEJTYBinding144 = journeyDiagramVCZTEJTYBinding136
          ? `${journeyDiagramVCZTEJTYBinding136} ${_item}`
          : _item;
        if (
          (journeyDiagramVCZTEJTYBinding103.text(
            journeyDiagramVCZTEJTYBinding144,
          ),
          journeyDiagramVCZTEJTYBinding103.node().getBoundingClientRect()
            .width > journeyDiagramVCZTEJTYBinding99)
        ) {
          if (
            (journeyDiagramVCZTEJTYBinding136 &&
              journeyDiagramVCZTEJTYBinding105.push(
                journeyDiagramVCZTEJTYBinding136,
              ),
            (journeyDiagramVCZTEJTYBinding136 = _item),
            journeyDiagramVCZTEJTYBinding103.text(_item),
            journeyDiagramVCZTEJTYBinding103.node().getBoundingClientRect()
              .width > journeyDiagramVCZTEJTYBinding99)
          ) {
            let journeyDiagramVCZTEJTYBinding167 = "";
            for (let journeyDiagramVCZTEJTYBinding175 of _item) {
              journeyDiagramVCZTEJTYBinding167 +=
                journeyDiagramVCZTEJTYBinding175;
              journeyDiagramVCZTEJTYBinding103.text(
                journeyDiagramVCZTEJTYBinding167 + "-",
              );
              journeyDiagramVCZTEJTYBinding103.node().getBoundingClientRect()
                .width > journeyDiagramVCZTEJTYBinding99 &&
                (journeyDiagramVCZTEJTYBinding105.push(
                  journeyDiagramVCZTEJTYBinding167.slice(0, -1) + "-",
                ),
                (journeyDiagramVCZTEJTYBinding167 =
                  journeyDiagramVCZTEJTYBinding175));
            }
            journeyDiagramVCZTEJTYBinding136 = journeyDiagramVCZTEJTYBinding167;
          }
        } else
          journeyDiagramVCZTEJTYBinding136 = journeyDiagramVCZTEJTYBinding144;
      });
      journeyDiagramVCZTEJTYBinding136 &&
        journeyDiagramVCZTEJTYBinding105.push(journeyDiagramVCZTEJTYBinding136);
      journeyDiagramVCZTEJTYBinding103.remove();
    }
    journeyDiagramVCZTEJTYBinding105.forEach((_item, index) => {
      let journeyDiagramVCZTEJTYBinding164 = {
          x: 40,
          y: journeyDiagramVCZTEJTYBinding100 + 7 + index * 20,
          fill: "#666",
          text: _item,
          textMargin: journeyDiagramVCZTEJTYBinding98.boxTextMargin ?? 5,
        },
        journeyDiagramVCZTEJTYBinding165 = journeyDiagramVCZTEJTYBinding27
          .drawText(
            journeyDiagramVCZTEJTYInput11,
            journeyDiagramVCZTEJTYBinding164,
          )
          .node()
          .getBoundingClientRect().width;
      journeyDiagramVCZTEJTYBinding165 > journeyDiagramVCZTEJTYBinding30 &&
        journeyDiagramVCZTEJTYBinding165 >
          journeyDiagramVCZTEJTYBinding98.leftMargin -
            journeyDiagramVCZTEJTYBinding165 &&
        (journeyDiagramVCZTEJTYBinding30 = journeyDiagramVCZTEJTYBinding165);
    });
    journeyDiagramVCZTEJTYBinding100 += Math.max(
      20,
      journeyDiagramVCZTEJTYBinding105.length * 20,
    );
  });
}
var journeyDiagramVCZTEJTYBinding1,
  journeyDiagramVCZTEJTYBinding2,
  journeyDiagramVCZTEJTYBinding3,
  journeyDiagramVCZTEJTYBinding4,
  journeyDiagramVCZTEJTYBinding5,
  journeyDiagramVCZTEJTYBinding6,
  journeyDiagramVCZTEJTYBinding7,
  journeyDiagramVCZTEJTYBinding8,
  journeyDiagramVCZTEJTYBinding9,
  journeyDiagramVCZTEJTYBinding10,
  journeyDiagramVCZTEJTYBinding11,
  journeyDiagramVCZTEJTYBinding12,
  journeyDiagramVCZTEJTYBinding13,
  journeyDiagramVCZTEJTYBinding14,
  journeyDiagramVCZTEJTYBinding15,
  journeyDiagramVCZTEJTYBinding16,
  journeyDiagramVCZTEJTYBinding17,
  journeyDiagramVCZTEJTYBinding18,
  journeyDiagramVCZTEJTYBinding19,
  journeyDiagramVCZTEJTYBinding20,
  journeyDiagramVCZTEJTYBinding21,
  journeyDiagramVCZTEJTYBinding22,
  journeyDiagramVCZTEJTYBinding23,
  journeyDiagramVCZTEJTYBinding24,
  journeyDiagramVCZTEJTYBinding25,
  journeyDiagramVCZTEJTYBinding26,
  journeyDiagramVCZTEJTYBinding27,
  journeyDiagramVCZTEJTYBinding28,
  journeyDiagramVCZTEJTYBinding29,
  journeyDiagramVCZTEJTYBinding30,
  journeyDiagramVCZTEJTYBinding31,
  journeyDiagramVCZTEJTYBinding32,
  journeyDiagramVCZTEJTYBinding33,
  journeyDiagramVCZTEJTYBinding34,
  journeyDiagramVCZTEJTYBinding35,
  journeyDiagramVCZTEJTYBinding36,
  journeyDiagramVCZTEJTYBinding37,
  $,
  JourneyDiagramVCZTEJTY;
esmInit(() => {
  n();
  l();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  journeyDiagramVCZTEJTYBinding1 = (function () {
    var journeyDiagramVCZTEJTYBinding38 = defineFunctionName(function (
        journeyDiagramVCZTEJTYInput95,
        journeyDiagramVCZTEJTYInput96,
        journeyDiagramVCZTEJTYInput97,
        journeyDiagramVCZTEJTYInput98,
      ) {
        for (
          journeyDiagramVCZTEJTYInput97 ||= {},
            journeyDiagramVCZTEJTYInput98 =
              journeyDiagramVCZTEJTYInput95.length;
          journeyDiagramVCZTEJTYInput98--;
          journeyDiagramVCZTEJTYInput97[
            journeyDiagramVCZTEJTYInput95[journeyDiagramVCZTEJTYInput98]
          ] = journeyDiagramVCZTEJTYInput96
        );
        return journeyDiagramVCZTEJTYInput97;
      }, "o"),
      journeyDiagramVCZTEJTYBinding39 = [6, 8, 10, 11, 12, 14, 16, 17, 18],
      journeyDiagramVCZTEJTYBinding40 = [1, 9],
      journeyDiagramVCZTEJTYBinding41 = [1, 10],
      journeyDiagramVCZTEJTYBinding42 = [1, 11],
      journeyDiagramVCZTEJTYBinding43 = [1, 12],
      journeyDiagramVCZTEJTYBinding44 = [1, 13],
      journeyDiagramVCZTEJTYBinding45 = [1, 14],
      journeyDiagramVCZTEJTYBinding46 = {
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
          journeyDiagramVCZTEJTYInput25,
          journeyDiagramVCZTEJTYInput26,
          journeyDiagramVCZTEJTYInput27,
          journeyDiagramVCZTEJTYInput28,
          journeyDiagramVCZTEJTYInput29,
          journeyDiagramVCZTEJTYInput30,
          journeyDiagramVCZTEJTYInput31,
        ) {
          var journeyDiagramVCZTEJTYBinding127 =
            journeyDiagramVCZTEJTYInput30.length - 1;
          switch (journeyDiagramVCZTEJTYInput29) {
            case 1:
              return journeyDiagramVCZTEJTYInput30[
                journeyDiagramVCZTEJTYBinding127 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              journeyDiagramVCZTEJTYInput30[
                journeyDiagramVCZTEJTYBinding127 - 1
              ].push(
                journeyDiagramVCZTEJTYInput30[journeyDiagramVCZTEJTYBinding127],
              );
              this.$ =
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127 - 1
                ];
              break;
            case 4:
            case 5:
              this.$ =
                journeyDiagramVCZTEJTYInput30[journeyDiagramVCZTEJTYBinding127];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              journeyDiagramVCZTEJTYInput28.setDiagramTitle(
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].substr(6),
              );
              this.$ =
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].substr(6);
              break;
            case 9:
              this.$ =
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].trim();
              journeyDiagramVCZTEJTYInput28.setAccTitle(this.$);
              break;
            case 10:
            case 11:
              this.$ =
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].trim();
              journeyDiagramVCZTEJTYInput28.setAccDescription(this.$);
              break;
            case 12:
              journeyDiagramVCZTEJTYInput28.addSection(
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].substr(8),
              );
              this.$ =
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127
                ].substr(8);
              break;
            case 13:
              journeyDiagramVCZTEJTYInput28.addTask(
                journeyDiagramVCZTEJTYInput30[
                  journeyDiagramVCZTEJTYBinding127 - 1
                ],
                journeyDiagramVCZTEJTYInput30[journeyDiagramVCZTEJTYBinding127],
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
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
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
            11: journeyDiagramVCZTEJTYBinding40,
            12: journeyDiagramVCZTEJTYBinding41,
            14: journeyDiagramVCZTEJTYBinding42,
            16: journeyDiagramVCZTEJTYBinding43,
            17: journeyDiagramVCZTEJTYBinding44,
            18: journeyDiagramVCZTEJTYBinding45,
          },
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 7],
            {
              1: [2, 1],
            },
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 3],
          ),
          {
            9: 15,
            11: journeyDiagramVCZTEJTYBinding40,
            12: journeyDiagramVCZTEJTYBinding41,
            14: journeyDiagramVCZTEJTYBinding42,
            16: journeyDiagramVCZTEJTYBinding43,
            17: journeyDiagramVCZTEJTYBinding44,
            18: journeyDiagramVCZTEJTYBinding45,
          },
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 5],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 6],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 8],
          ),
          {
            13: [1, 16],
          },
          {
            15: [1, 17],
          },
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 11],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 12],
          ),
          {
            19: [1, 18],
          },
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 4],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 9],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 10],
          ),
          journeyDiagramVCZTEJTYBinding38(
            journeyDiagramVCZTEJTYBinding39,
            [2, 13],
          ),
        ],
        defaultActions: {},
        parseError: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput89,
          journeyDiagramVCZTEJTYInput90,
        ) {
          if (journeyDiagramVCZTEJTYInput90.recoverable)
            this.trace(journeyDiagramVCZTEJTYInput89);
          else {
            var journeyDiagramVCZTEJTYBinding176 = Error(
              journeyDiagramVCZTEJTYInput89,
            );
            throw (
              (journeyDiagramVCZTEJTYBinding176.hash =
                journeyDiagramVCZTEJTYInput90),
              journeyDiagramVCZTEJTYBinding176
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (journeyDiagramVCZTEJTYInput1) {
          var journeyDiagramVCZTEJTYBinding47 = this,
            journeyDiagramVCZTEJTYBinding48 = [0],
            journeyDiagramVCZTEJTYBinding49 = [],
            journeyDiagramVCZTEJTYBinding50 = [null],
            journeyDiagramVCZTEJTYBinding51 = [],
            journeyDiagramVCZTEJTYBinding52 = this.table,
            journeyDiagramVCZTEJTYBinding53 = "",
            journeyDiagramVCZTEJTYBinding54 = 0,
            journeyDiagramVCZTEJTYBinding55 = 0,
            journeyDiagramVCZTEJTYBinding56 = 0,
            journeyDiagramVCZTEJTYBinding59 =
              journeyDiagramVCZTEJTYBinding51.slice.call(arguments, 1),
            journeyDiagramVCZTEJTYBinding60 = Object.create(this.lexer),
            journeyDiagramVCZTEJTYBinding61 = {
              yy: {},
            };
          for (var journeyDiagramVCZTEJTYBinding62 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              journeyDiagramVCZTEJTYBinding62,
            ) &&
              (journeyDiagramVCZTEJTYBinding61.yy[
                journeyDiagramVCZTEJTYBinding62
              ] = this.yy[journeyDiagramVCZTEJTYBinding62]);
          journeyDiagramVCZTEJTYBinding60.setInput(
            journeyDiagramVCZTEJTYInput1,
            journeyDiagramVCZTEJTYBinding61.yy,
          );
          journeyDiagramVCZTEJTYBinding61.yy.lexer =
            journeyDiagramVCZTEJTYBinding60;
          journeyDiagramVCZTEJTYBinding61.yy.parser = this;
          journeyDiagramVCZTEJTYBinding60.yylloc === undefined &&
            (journeyDiagramVCZTEJTYBinding60.yylloc = {});
          var journeyDiagramVCZTEJTYBinding63 =
            journeyDiagramVCZTEJTYBinding60.yylloc;
          journeyDiagramVCZTEJTYBinding51.push(journeyDiagramVCZTEJTYBinding63);
          var journeyDiagramVCZTEJTYBinding64 =
            journeyDiagramVCZTEJTYBinding60.options &&
            journeyDiagramVCZTEJTYBinding60.options.ranges;
          typeof journeyDiagramVCZTEJTYBinding61.yy.parseError == "function"
            ? (this.parseError = journeyDiagramVCZTEJTYBinding61.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function journeyDiagramVCZTEJTYHelper3(
            journeyDiagramVCZTEJTYInput99,
          ) {
            journeyDiagramVCZTEJTYBinding48.length -=
              2 * journeyDiagramVCZTEJTYInput99;
            journeyDiagramVCZTEJTYBinding50.length -=
              journeyDiagramVCZTEJTYInput99;
            journeyDiagramVCZTEJTYBinding51.length -=
              journeyDiagramVCZTEJTYInput99;
          }
          defineFunctionName(journeyDiagramVCZTEJTYHelper3, "popStack");
          function journeyDiagramVCZTEJTYHelper4() {
            var journeyDiagramVCZTEJTYBinding166 =
              journeyDiagramVCZTEJTYBinding49.pop() ||
              journeyDiagramVCZTEJTYBinding60.lex() ||
              1;
            return (
              typeof journeyDiagramVCZTEJTYBinding166 != "number" &&
                (journeyDiagramVCZTEJTYBinding166 instanceof Array &&
                  ((journeyDiagramVCZTEJTYBinding49 =
                    journeyDiagramVCZTEJTYBinding166),
                  (journeyDiagramVCZTEJTYBinding166 =
                    journeyDiagramVCZTEJTYBinding49.pop())),
                (journeyDiagramVCZTEJTYBinding166 =
                  journeyDiagramVCZTEJTYBinding47.symbols_[
                    journeyDiagramVCZTEJTYBinding166
                  ] || journeyDiagramVCZTEJTYBinding166)),
              journeyDiagramVCZTEJTYBinding166
            );
          }
          defineFunctionName(journeyDiagramVCZTEJTYHelper4, "lex");
          for (
            var journeyDiagramVCZTEJTYBinding65,
              journeyDiagramVCZTEJTYBinding66,
              journeyDiagramVCZTEJTYBinding67,
              journeyDiagramVCZTEJTYBinding68,
              journeyDiagramVCZTEJTYBinding69,
              journeyDiagramVCZTEJTYBinding70 = {},
              journeyDiagramVCZTEJTYBinding71,
              journeyDiagramVCZTEJTYBinding72,
              journeyDiagramVCZTEJTYBinding73,
              journeyDiagramVCZTEJTYBinding74;
            ;
          ) {
            if (
              ((journeyDiagramVCZTEJTYBinding67 =
                journeyDiagramVCZTEJTYBinding48[
                  journeyDiagramVCZTEJTYBinding48.length - 1
                ]),
              this.defaultActions[journeyDiagramVCZTEJTYBinding67]
                ? (journeyDiagramVCZTEJTYBinding68 =
                    this.defaultActions[journeyDiagramVCZTEJTYBinding67])
                : ((journeyDiagramVCZTEJTYBinding65 ??=
                    journeyDiagramVCZTEJTYHelper4()),
                  (journeyDiagramVCZTEJTYBinding68 =
                    journeyDiagramVCZTEJTYBinding52[
                      journeyDiagramVCZTEJTYBinding67
                    ] &&
                    journeyDiagramVCZTEJTYBinding52[
                      journeyDiagramVCZTEJTYBinding67
                    ][journeyDiagramVCZTEJTYBinding65])),
              journeyDiagramVCZTEJTYBinding68 === undefined ||
                !journeyDiagramVCZTEJTYBinding68.length ||
                !journeyDiagramVCZTEJTYBinding68[0])
            ) {
              var journeyDiagramVCZTEJTYBinding75 = "";
              for (journeyDiagramVCZTEJTYBinding71 in ((journeyDiagramVCZTEJTYBinding74 =
                []),
              journeyDiagramVCZTEJTYBinding52[journeyDiagramVCZTEJTYBinding67]))
                this.terminals_[journeyDiagramVCZTEJTYBinding71] &&
                  journeyDiagramVCZTEJTYBinding71 > 2 &&
                  journeyDiagramVCZTEJTYBinding74.push(
                    "'" +
                      this.terminals_[journeyDiagramVCZTEJTYBinding71] +
                      "'",
                  );
              journeyDiagramVCZTEJTYBinding75 =
                journeyDiagramVCZTEJTYBinding60.showPosition
                  ? "Parse error on line " +
                    (journeyDiagramVCZTEJTYBinding54 + 1) +
                    ":\n" +
                    journeyDiagramVCZTEJTYBinding60.showPosition() +
                    "\nExpecting " +
                    journeyDiagramVCZTEJTYBinding74.join(", ") +
                    ", got '" +
                    (this.terminals_[journeyDiagramVCZTEJTYBinding65] ||
                      journeyDiagramVCZTEJTYBinding65) +
                    "'"
                  : "Parse error on line " +
                    (journeyDiagramVCZTEJTYBinding54 + 1) +
                    ": Unexpected " +
                    (journeyDiagramVCZTEJTYBinding65 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[journeyDiagramVCZTEJTYBinding65] ||
                          journeyDiagramVCZTEJTYBinding65) +
                        "'");
              this.parseError(journeyDiagramVCZTEJTYBinding75, {
                text: journeyDiagramVCZTEJTYBinding60.match,
                token:
                  this.terminals_[journeyDiagramVCZTEJTYBinding65] ||
                  journeyDiagramVCZTEJTYBinding65,
                line: journeyDiagramVCZTEJTYBinding60.yylineno,
                loc: journeyDiagramVCZTEJTYBinding63,
                expected: journeyDiagramVCZTEJTYBinding74,
              });
            }
            if (
              journeyDiagramVCZTEJTYBinding68[0] instanceof Array &&
              journeyDiagramVCZTEJTYBinding68.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  journeyDiagramVCZTEJTYBinding67 +
                  ", token: " +
                  journeyDiagramVCZTEJTYBinding65,
              );
            switch (journeyDiagramVCZTEJTYBinding68[0]) {
              case 1:
                journeyDiagramVCZTEJTYBinding48.push(
                  journeyDiagramVCZTEJTYBinding65,
                );
                journeyDiagramVCZTEJTYBinding50.push(
                  journeyDiagramVCZTEJTYBinding60.yytext,
                );
                journeyDiagramVCZTEJTYBinding51.push(
                  journeyDiagramVCZTEJTYBinding60.yylloc,
                );
                journeyDiagramVCZTEJTYBinding48.push(
                  journeyDiagramVCZTEJTYBinding68[1],
                );
                journeyDiagramVCZTEJTYBinding65 = null;
                journeyDiagramVCZTEJTYBinding66
                  ? ((journeyDiagramVCZTEJTYBinding65 =
                      journeyDiagramVCZTEJTYBinding66),
                    (journeyDiagramVCZTEJTYBinding66 = null))
                  : ((journeyDiagramVCZTEJTYBinding55 =
                      journeyDiagramVCZTEJTYBinding60.yyleng),
                    (journeyDiagramVCZTEJTYBinding53 =
                      journeyDiagramVCZTEJTYBinding60.yytext),
                    (journeyDiagramVCZTEJTYBinding54 =
                      journeyDiagramVCZTEJTYBinding60.yylineno),
                    (journeyDiagramVCZTEJTYBinding63 =
                      journeyDiagramVCZTEJTYBinding60.yylloc),
                    journeyDiagramVCZTEJTYBinding56 > 0 &&
                      journeyDiagramVCZTEJTYBinding56--);
                break;
              case 2:
                if (
                  ((journeyDiagramVCZTEJTYBinding72 =
                    this.productions_[journeyDiagramVCZTEJTYBinding68[1]][1]),
                  (journeyDiagramVCZTEJTYBinding70.$ =
                    journeyDiagramVCZTEJTYBinding50[
                      journeyDiagramVCZTEJTYBinding50.length -
                        journeyDiagramVCZTEJTYBinding72
                    ]),
                  (journeyDiagramVCZTEJTYBinding70._$ = {
                    first_line:
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length -
                          (journeyDiagramVCZTEJTYBinding72 || 1)
                      ].first_line,
                    last_line:
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length - 1
                      ].last_line,
                    first_column:
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length -
                          (journeyDiagramVCZTEJTYBinding72 || 1)
                      ].first_column,
                    last_column:
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length - 1
                      ].last_column,
                  }),
                  journeyDiagramVCZTEJTYBinding64 &&
                    (journeyDiagramVCZTEJTYBinding70._$.range = [
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length -
                          (journeyDiagramVCZTEJTYBinding72 || 1)
                      ].range[0],
                      journeyDiagramVCZTEJTYBinding51[
                        journeyDiagramVCZTEJTYBinding51.length - 1
                      ].range[1],
                    ]),
                  (journeyDiagramVCZTEJTYBinding69 = this.performAction.apply(
                    journeyDiagramVCZTEJTYBinding70,
                    [
                      journeyDiagramVCZTEJTYBinding53,
                      journeyDiagramVCZTEJTYBinding55,
                      journeyDiagramVCZTEJTYBinding54,
                      journeyDiagramVCZTEJTYBinding61.yy,
                      journeyDiagramVCZTEJTYBinding68[1],
                      journeyDiagramVCZTEJTYBinding50,
                      journeyDiagramVCZTEJTYBinding51,
                    ].concat(journeyDiagramVCZTEJTYBinding59),
                  )),
                  journeyDiagramVCZTEJTYBinding69 !== undefined)
                )
                  return journeyDiagramVCZTEJTYBinding69;
                journeyDiagramVCZTEJTYBinding72 &&
                  ((journeyDiagramVCZTEJTYBinding48 =
                    journeyDiagramVCZTEJTYBinding48.slice(
                      0,
                      -1 * journeyDiagramVCZTEJTYBinding72 * 2,
                    )),
                  (journeyDiagramVCZTEJTYBinding50 =
                    journeyDiagramVCZTEJTYBinding50.slice(
                      0,
                      -1 * journeyDiagramVCZTEJTYBinding72,
                    )),
                  (journeyDiagramVCZTEJTYBinding51 =
                    journeyDiagramVCZTEJTYBinding51.slice(
                      0,
                      -1 * journeyDiagramVCZTEJTYBinding72,
                    )));
                journeyDiagramVCZTEJTYBinding48.push(
                  this.productions_[journeyDiagramVCZTEJTYBinding68[1]][0],
                );
                journeyDiagramVCZTEJTYBinding50.push(
                  journeyDiagramVCZTEJTYBinding70.$,
                );
                journeyDiagramVCZTEJTYBinding51.push(
                  journeyDiagramVCZTEJTYBinding70._$,
                );
                journeyDiagramVCZTEJTYBinding73 =
                  journeyDiagramVCZTEJTYBinding52[
                    journeyDiagramVCZTEJTYBinding48[
                      journeyDiagramVCZTEJTYBinding48.length - 2
                    ]
                  ][
                    journeyDiagramVCZTEJTYBinding48[
                      journeyDiagramVCZTEJTYBinding48.length - 1
                    ]
                  ];
                journeyDiagramVCZTEJTYBinding48.push(
                  journeyDiagramVCZTEJTYBinding73,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    journeyDiagramVCZTEJTYBinding46.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput92,
          journeyDiagramVCZTEJTYInput93,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              journeyDiagramVCZTEJTYInput92,
              journeyDiagramVCZTEJTYInput93,
            );
          else throw Error(journeyDiagramVCZTEJTYInput92);
        }, "parseError"),
        setInput: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput55,
          journeyDiagramVCZTEJTYInput56,
        ) {
          return (
            (this.yy = journeyDiagramVCZTEJTYInput56 || this.yy || {}),
            (this._input = journeyDiagramVCZTEJTYInput55),
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
          var journeyDiagramVCZTEJTYBinding147 = this._input[0];
          return (
            (this.yytext += journeyDiagramVCZTEJTYBinding147),
            this.yyleng++,
            this.offset++,
            (this.match += journeyDiagramVCZTEJTYBinding147),
            (this.matched += journeyDiagramVCZTEJTYBinding147),
            journeyDiagramVCZTEJTYBinding147.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            journeyDiagramVCZTEJTYBinding147
          );
        }, "input"),
        unput: defineFunctionName(function (journeyDiagramVCZTEJTYInput20) {
          var journeyDiagramVCZTEJTYBinding116 =
              journeyDiagramVCZTEJTYInput20.length,
            journeyDiagramVCZTEJTYBinding117 =
              journeyDiagramVCZTEJTYInput20.split(/(?:\r\n?|\n)/g);
          this._input = journeyDiagramVCZTEJTYInput20 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - journeyDiagramVCZTEJTYBinding116,
          );
          this.offset -= journeyDiagramVCZTEJTYBinding116;
          var journeyDiagramVCZTEJTYBinding118 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          journeyDiagramVCZTEJTYBinding117.length - 1 &&
            (this.yylineno -= journeyDiagramVCZTEJTYBinding117.length - 1);
          var journeyDiagramVCZTEJTYBinding119 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: journeyDiagramVCZTEJTYBinding117
                ? (journeyDiagramVCZTEJTYBinding117.length ===
                  journeyDiagramVCZTEJTYBinding118.length
                    ? this.yylloc.first_column
                    : 0) +
                  journeyDiagramVCZTEJTYBinding118[
                    journeyDiagramVCZTEJTYBinding118.length -
                      journeyDiagramVCZTEJTYBinding117.length
                  ].length -
                  journeyDiagramVCZTEJTYBinding117[0].length
                : this.yylloc.first_column - journeyDiagramVCZTEJTYBinding116,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                journeyDiagramVCZTEJTYBinding119[0],
                journeyDiagramVCZTEJTYBinding119[0] +
                  this.yyleng -
                  journeyDiagramVCZTEJTYBinding116,
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
        less: defineFunctionName(function (journeyDiagramVCZTEJTYInput108) {
          this.unput(this.match.slice(journeyDiagramVCZTEJTYInput108));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var journeyDiagramVCZTEJTYBinding170 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (journeyDiagramVCZTEJTYBinding170.length > 20 ? "..." : "") +
            journeyDiagramVCZTEJTYBinding170.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var journeyDiagramVCZTEJTYBinding163 = this.match;
          return (
            journeyDiagramVCZTEJTYBinding163.length < 20 &&
              (journeyDiagramVCZTEJTYBinding163 += this._input.substr(
                0,
                20 - journeyDiagramVCZTEJTYBinding163.length,
              )),
            (
              journeyDiagramVCZTEJTYBinding163.substr(0, 20) +
              (journeyDiagramVCZTEJTYBinding163.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var journeyDiagramVCZTEJTYBinding171 = this.pastInput(),
            journeyDiagramVCZTEJTYBinding172 = Array(
              journeyDiagramVCZTEJTYBinding171.length + 1,
            ).join("-");
          return (
            journeyDiagramVCZTEJTYBinding171 +
            this.upcomingInput() +
            "\n" +
            journeyDiagramVCZTEJTYBinding172 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput2,
          journeyDiagramVCZTEJTYInput3,
        ) {
          var journeyDiagramVCZTEJTYBinding76,
            journeyDiagramVCZTEJTYBinding77,
            journeyDiagramVCZTEJTYBinding78;
          if (
            (this.options.backtrack_lexer &&
              ((journeyDiagramVCZTEJTYBinding78 = {
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
                (journeyDiagramVCZTEJTYBinding78.yylloc.range =
                  this.yylloc.range.slice(0))),
            (journeyDiagramVCZTEJTYBinding77 =
              journeyDiagramVCZTEJTYInput2[0].match(/(?:\r\n?|\n).*/g)),
            journeyDiagramVCZTEJTYBinding77 &&
              (this.yylineno += journeyDiagramVCZTEJTYBinding77.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: journeyDiagramVCZTEJTYBinding77
                ? journeyDiagramVCZTEJTYBinding77[
                    journeyDiagramVCZTEJTYBinding77.length - 1
                  ].length -
                  journeyDiagramVCZTEJTYBinding77[
                    journeyDiagramVCZTEJTYBinding77.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  journeyDiagramVCZTEJTYInput2[0].length,
            }),
            (this.yytext += journeyDiagramVCZTEJTYInput2[0]),
            (this.match += journeyDiagramVCZTEJTYInput2[0]),
            (this.matches = journeyDiagramVCZTEJTYInput2),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              journeyDiagramVCZTEJTYInput2[0].length,
            )),
            (this.matched += journeyDiagramVCZTEJTYInput2[0]),
            (journeyDiagramVCZTEJTYBinding76 = this.performAction.call(
              this,
              this.yy,
              this,
              journeyDiagramVCZTEJTYInput3,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            journeyDiagramVCZTEJTYBinding76)
          )
            return journeyDiagramVCZTEJTYBinding76;
          if (this._backtrack) {
            for (var journeyDiagramVCZTEJTYBinding79 in journeyDiagramVCZTEJTYBinding78)
              this[journeyDiagramVCZTEJTYBinding79] =
                journeyDiagramVCZTEJTYBinding78[
                  journeyDiagramVCZTEJTYBinding79
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var journeyDiagramVCZTEJTYBinding110,
            journeyDiagramVCZTEJTYBinding111,
            journeyDiagramVCZTEJTYBinding112,
            journeyDiagramVCZTEJTYBinding113;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var journeyDiagramVCZTEJTYBinding114 = this._currentRules(),
              journeyDiagramVCZTEJTYBinding115 = 0;
            journeyDiagramVCZTEJTYBinding115 <
            journeyDiagramVCZTEJTYBinding114.length;
            journeyDiagramVCZTEJTYBinding115++
          )
            if (
              ((journeyDiagramVCZTEJTYBinding112 = this._input.match(
                this.rules[
                  journeyDiagramVCZTEJTYBinding114[
                    journeyDiagramVCZTEJTYBinding115
                  ]
                ],
              )),
              journeyDiagramVCZTEJTYBinding112 &&
                (!journeyDiagramVCZTEJTYBinding111 ||
                  journeyDiagramVCZTEJTYBinding112[0].length >
                    journeyDiagramVCZTEJTYBinding111[0].length))
            ) {
              if (
                ((journeyDiagramVCZTEJTYBinding111 =
                  journeyDiagramVCZTEJTYBinding112),
                (journeyDiagramVCZTEJTYBinding113 =
                  journeyDiagramVCZTEJTYBinding115),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((journeyDiagramVCZTEJTYBinding110 = this.test_match(
                    journeyDiagramVCZTEJTYBinding112,
                    journeyDiagramVCZTEJTYBinding114[
                      journeyDiagramVCZTEJTYBinding115
                    ],
                  )),
                  journeyDiagramVCZTEJTYBinding110 !== false)
                )
                  return journeyDiagramVCZTEJTYBinding110;
                if (this._backtrack) {
                  journeyDiagramVCZTEJTYBinding111 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return journeyDiagramVCZTEJTYBinding111
            ? ((journeyDiagramVCZTEJTYBinding110 = this.test_match(
                journeyDiagramVCZTEJTYBinding111,
                journeyDiagramVCZTEJTYBinding114[
                  journeyDiagramVCZTEJTYBinding113
                ],
              )),
              journeyDiagramVCZTEJTYBinding110 === false
                ? false
                : journeyDiagramVCZTEJTYBinding110)
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
        begin: defineFunctionName(function (journeyDiagramVCZTEJTYInput109) {
          this.conditionStack.push(journeyDiagramVCZTEJTYInput109);
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
        topState: defineFunctionName(function (journeyDiagramVCZTEJTYInput88) {
          return (
            (journeyDiagramVCZTEJTYInput88 =
              this.conditionStack.length -
              1 -
              Math.abs(journeyDiagramVCZTEJTYInput88 || 0)),
            journeyDiagramVCZTEJTYInput88 >= 0
              ? this.conditionStack[journeyDiagramVCZTEJTYInput88]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput112,
        ) {
          this.begin(journeyDiagramVCZTEJTYInput112);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          journeyDiagramVCZTEJTYInput12,
          journeyDiagramVCZTEJTYInput13,
          journeyDiagramVCZTEJTYInput14,
          journeyDiagramVCZTEJTYInput15,
        ) {
          switch (journeyDiagramVCZTEJTYInput14) {
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
    function journeyDiagramVCZTEJTYHelper2() {
      this.yy = {};
    }
    return (
      defineFunctionName(journeyDiagramVCZTEJTYHelper2, "Parser"),
      (journeyDiagramVCZTEJTYHelper2.prototype =
        journeyDiagramVCZTEJTYBinding46),
      (journeyDiagramVCZTEJTYBinding46.Parser = journeyDiagramVCZTEJTYHelper2),
      new journeyDiagramVCZTEJTYHelper2()
    );
  })();
  journeyDiagramVCZTEJTYBinding1.parser = journeyDiagramVCZTEJTYBinding1;
  journeyDiagramVCZTEJTYBinding2 = journeyDiagramVCZTEJTYBinding1;
  journeyDiagramVCZTEJTYBinding3 = "";
  journeyDiagramVCZTEJTYBinding4 = [];
  journeyDiagramVCZTEJTYBinding5 = [];
  journeyDiagramVCZTEJTYBinding6 = [];
  journeyDiagramVCZTEJTYBinding7 = defineFunctionName(function () {
    journeyDiagramVCZTEJTYBinding4.length = 0;
    journeyDiagramVCZTEJTYBinding5.length = 0;
    journeyDiagramVCZTEJTYBinding3 = "";
    journeyDiagramVCZTEJTYBinding6.length = 0;
    _chunkICPOFSXXA();
  }, "clear");
  journeyDiagramVCZTEJTYBinding8 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput113,
  ) {
    journeyDiagramVCZTEJTYBinding3 = journeyDiagramVCZTEJTYInput113;
    journeyDiagramVCZTEJTYBinding4.push(journeyDiagramVCZTEJTYInput113);
  }, "addSection");
  journeyDiagramVCZTEJTYBinding9 = defineFunctionName(function () {
    return journeyDiagramVCZTEJTYBinding4;
  }, "getSections");
  journeyDiagramVCZTEJTYBinding10 = defineFunctionName(function () {
    let journeyDiagramVCZTEJTYBinding178 = journeyDiagramVCZTEJTYBinding14(),
      journeyDiagramVCZTEJTYBinding179 = 0;
    for (
      ;
      !journeyDiagramVCZTEJTYBinding178 &&
      journeyDiagramVCZTEJTYBinding179 < 100;
    ) {
      journeyDiagramVCZTEJTYBinding178 = journeyDiagramVCZTEJTYBinding14();
      journeyDiagramVCZTEJTYBinding179++;
    }
    return (
      journeyDiagramVCZTEJTYBinding5.push(...journeyDiagramVCZTEJTYBinding6),
      journeyDiagramVCZTEJTYBinding5
    );
  }, "getTasks");
  journeyDiagramVCZTEJTYBinding11 = defineFunctionName(function () {
    let journeyDiagramVCZTEJTYBinding177 = [];
    return (
      journeyDiagramVCZTEJTYBinding5.forEach((item) => {
        item.people && journeyDiagramVCZTEJTYBinding177.push(...item.people);
      }),
      [...new Set(journeyDiagramVCZTEJTYBinding177)].sort()
    );
  }, "updateActors");
  journeyDiagramVCZTEJTYBinding12 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput78,
    journeyDiagramVCZTEJTYInput79,
  ) {
    let journeyDiagramVCZTEJTYBinding158 = journeyDiagramVCZTEJTYInput79
        .substr(1)
        .split(":"),
      journeyDiagramVCZTEJTYBinding159 = 0,
      journeyDiagramVCZTEJTYBinding160 = [];
    journeyDiagramVCZTEJTYBinding158.length === 1
      ? ((journeyDiagramVCZTEJTYBinding159 = Number(
          journeyDiagramVCZTEJTYBinding158[0],
        )),
        (journeyDiagramVCZTEJTYBinding160 = []))
      : ((journeyDiagramVCZTEJTYBinding159 = Number(
          journeyDiagramVCZTEJTYBinding158[0],
        )),
        (journeyDiagramVCZTEJTYBinding160 =
          journeyDiagramVCZTEJTYBinding158[1].split(",")));
    let journeyDiagramVCZTEJTYBinding161 = journeyDiagramVCZTEJTYBinding160.map(
        (item) => item.trim(),
      ),
      journeyDiagramVCZTEJTYBinding162 = {
        section: journeyDiagramVCZTEJTYBinding3,
        type: journeyDiagramVCZTEJTYBinding3,
        people: journeyDiagramVCZTEJTYBinding161,
        task: journeyDiagramVCZTEJTYInput78,
        score: journeyDiagramVCZTEJTYBinding159,
      };
    journeyDiagramVCZTEJTYBinding6.push(journeyDiagramVCZTEJTYBinding162);
  }, "addTask");
  journeyDiagramVCZTEJTYBinding13 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput94,
  ) {
    let journeyDiagramVCZTEJTYBinding180 = {
      section: journeyDiagramVCZTEJTYBinding3,
      type: journeyDiagramVCZTEJTYBinding3,
      description: journeyDiagramVCZTEJTYInput94,
      task: journeyDiagramVCZTEJTYInput94,
      classes: [],
    };
    journeyDiagramVCZTEJTYBinding5.push(journeyDiagramVCZTEJTYBinding180);
  }, "addTaskOrg");
  journeyDiagramVCZTEJTYBinding14 = defineFunctionName(function () {
    let journeyDiagramVCZTEJTYBinding173 = defineFunctionName(function (
        journeyDiagramVCZTEJTYInput111,
      ) {
        return journeyDiagramVCZTEJTYBinding6[journeyDiagramVCZTEJTYInput111]
          .processed;
      }, "compileTask"),
      journeyDiagramVCZTEJTYBinding174 = true;
    for (let [
      journeyDiagramVCZTEJTYBinding182,
      journeyDiagramVCZTEJTYBinding183,
    ] of journeyDiagramVCZTEJTYBinding6.entries()) {
      journeyDiagramVCZTEJTYBinding173(journeyDiagramVCZTEJTYBinding182);
      journeyDiagramVCZTEJTYBinding174 &&=
        journeyDiagramVCZTEJTYBinding183.processed;
    }
    return journeyDiagramVCZTEJTYBinding174;
  }, "compileTasks");
  journeyDiagramVCZTEJTYBinding15 = {
    getConfig: defineFunctionName(() => b().journey, "getConfig"),
    clear: journeyDiagramVCZTEJTYBinding7,
    setDiagramTitle: G,
    getDiagramTitle: C,
    setAccTitle: H,
    getAccTitle: _chunkICPOFSXXV,
    setAccDescription: V,
    getAccDescription: _,
    addSection: journeyDiagramVCZTEJTYBinding8,
    getSections: journeyDiagramVCZTEJTYBinding9,
    getTasks: journeyDiagramVCZTEJTYBinding10,
    addTask: journeyDiagramVCZTEJTYBinding12,
    addTaskOrg: journeyDiagramVCZTEJTYBinding13,
    getActors: defineFunctionName(function () {
      return journeyDiagramVCZTEJTYBinding11();
    }, "getActors"),
  };
  journeyDiagramVCZTEJTYBinding16 = defineFunctionName(
    (journeyDiagramVCZTEJTYInput4) => `.label {
    font-family: ${journeyDiagramVCZTEJTYInput4.fontFamily};
    color: ${journeyDiagramVCZTEJTYInput4.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${journeyDiagramVCZTEJTYInput4.textColor}
  }

  .legend {
    fill: ${journeyDiagramVCZTEJTYInput4.textColor};
    font-family: ${journeyDiagramVCZTEJTYInput4.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${journeyDiagramVCZTEJTYInput4.textColor}
  }

  .face {
    ${journeyDiagramVCZTEJTYInput4.faceColor ? `fill: ${journeyDiagramVCZTEJTYInput4.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${journeyDiagramVCZTEJTYInput4.mainBkg};
    stroke: ${journeyDiagramVCZTEJTYInput4.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${journeyDiagramVCZTEJTYInput4.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${journeyDiagramVCZTEJTYInput4.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${journeyDiagramVCZTEJTYInput4.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${journeyDiagramVCZTEJTYInput4.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${journeyDiagramVCZTEJTYInput4.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${journeyDiagramVCZTEJTYInput4.fontFamily};
    font-size: 12px;
    background: ${journeyDiagramVCZTEJTYInput4.tertiaryColor};
    border: 1px solid ${journeyDiagramVCZTEJTYInput4.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${journeyDiagramVCZTEJTYInput4.fillType0 ? `fill: ${journeyDiagramVCZTEJTYInput4.fillType7}` : ""};
  }

  .actor-0 {
    ${journeyDiagramVCZTEJTYInput4.actor0 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor0}` : ""};
  }
  .actor-1 {
    ${journeyDiagramVCZTEJTYInput4.actor1 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor1}` : ""};
  }
  .actor-2 {
    ${journeyDiagramVCZTEJTYInput4.actor2 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor2}` : ""};
  }
  .actor-3 {
    ${journeyDiagramVCZTEJTYInput4.actor3 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor3}` : ""};
  }
  .actor-4 {
    ${journeyDiagramVCZTEJTYInput4.actor4 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor4}` : ""};
  }
  .actor-5 {
    ${journeyDiagramVCZTEJTYInput4.actor5 ? `fill: ${journeyDiagramVCZTEJTYInput4.actor5}` : ""};
  }
  ${t()}
`,
    "getStyles",
  );
  journeyDiagramVCZTEJTYBinding17 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput114,
    journeyDiagramVCZTEJTYInput115,
  ) {
    return a(journeyDiagramVCZTEJTYInput114, journeyDiagramVCZTEJTYInput115);
  }, "drawRect");
  journeyDiagramVCZTEJTYBinding18 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput5,
    journeyDiagramVCZTEJTYInput6,
  ) {
    let journeyDiagramVCZTEJTYBinding80 = journeyDiagramVCZTEJTYInput5
        .append("circle")
        .attr("cx", journeyDiagramVCZTEJTYInput6.cx)
        .attr("cy", journeyDiagramVCZTEJTYInput6.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      journeyDiagramVCZTEJTYBinding81 =
        journeyDiagramVCZTEJTYInput5.append("g");
    journeyDiagramVCZTEJTYBinding81
      .append("circle")
      .attr("cx", journeyDiagramVCZTEJTYInput6.cx - 5)
      .attr("cy", journeyDiagramVCZTEJTYInput6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    journeyDiagramVCZTEJTYBinding81
      .append("circle")
      .attr("cx", journeyDiagramVCZTEJTYInput6.cx + 5)
      .attr("cy", journeyDiagramVCZTEJTYInput6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function journeyDiagramVCZTEJTYHelper9(journeyDiagramVCZTEJTYInput77) {
      let journeyDiagramVCZTEJTYBinding157 = appInitialNit()
        .startAngle(Math.PI / 2)
        .endAngle((Math.PI / 2) * 3)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramVCZTEJTYInput77
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramVCZTEJTYBinding157)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramVCZTEJTYInput6.cx +
            "," +
            (journeyDiagramVCZTEJTYInput6.cy + 2) +
            ")",
        );
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper9, "smile");
    function journeyDiagramVCZTEJTYHelper10(journeyDiagramVCZTEJTYInput75) {
      let journeyDiagramVCZTEJTYBinding156 = appInitialNit()
        .startAngle((3 * Math.PI) / 2)
        .endAngle((Math.PI / 2) * 5)
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramVCZTEJTYInput75
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramVCZTEJTYBinding156)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramVCZTEJTYInput6.cx +
            "," +
            (journeyDiagramVCZTEJTYInput6.cy + 7) +
            ")",
        );
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper10, "sad");
    function journeyDiagramVCZTEJTYHelper11(journeyDiagramVCZTEJTYInput76) {
      journeyDiagramVCZTEJTYInput76
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", journeyDiagramVCZTEJTYInput6.cx - 5)
        .attr("y1", journeyDiagramVCZTEJTYInput6.cy + 7)
        .attr("x2", journeyDiagramVCZTEJTYInput6.cx + 5)
        .attr("y2", journeyDiagramVCZTEJTYInput6.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      defineFunctionName(journeyDiagramVCZTEJTYHelper11, "ambivalent"),
      journeyDiagramVCZTEJTYInput6.score > 3
        ? journeyDiagramVCZTEJTYHelper9(journeyDiagramVCZTEJTYBinding81)
        : journeyDiagramVCZTEJTYInput6.score < 3
          ? journeyDiagramVCZTEJTYHelper10(journeyDiagramVCZTEJTYBinding81)
          : journeyDiagramVCZTEJTYHelper11(journeyDiagramVCZTEJTYBinding81),
      journeyDiagramVCZTEJTYBinding80
    );
  }, "drawFace");
  journeyDiagramVCZTEJTYBinding19 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput66,
    journeyDiagramVCZTEJTYInput67,
  ) {
    let journeyDiagramVCZTEJTYBinding155 =
      journeyDiagramVCZTEJTYInput66.append("circle");
    return (
      journeyDiagramVCZTEJTYBinding155.attr(
        "cx",
        journeyDiagramVCZTEJTYInput67.cx,
      ),
      journeyDiagramVCZTEJTYBinding155.attr(
        "cy",
        journeyDiagramVCZTEJTYInput67.cy,
      ),
      journeyDiagramVCZTEJTYBinding155.attr(
        "class",
        "actor-" + journeyDiagramVCZTEJTYInput67.pos,
      ),
      journeyDiagramVCZTEJTYBinding155.attr(
        "fill",
        journeyDiagramVCZTEJTYInput67.fill,
      ),
      journeyDiagramVCZTEJTYBinding155.attr(
        "stroke",
        journeyDiagramVCZTEJTYInput67.stroke,
      ),
      journeyDiagramVCZTEJTYBinding155.attr(
        "r",
        journeyDiagramVCZTEJTYInput67.r,
      ),
      journeyDiagramVCZTEJTYBinding155.class !== undefined &&
        journeyDiagramVCZTEJTYBinding155.attr(
          "class",
          journeyDiagramVCZTEJTYBinding155.class,
        ),
      journeyDiagramVCZTEJTYInput67.title !== undefined &&
        journeyDiagramVCZTEJTYBinding155
          .append("title")
          .text(journeyDiagramVCZTEJTYInput67.title),
      journeyDiagramVCZTEJTYBinding155
    );
  }, "drawCircle");
  journeyDiagramVCZTEJTYBinding20 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput116,
    journeyDiagramVCZTEJTYInput117,
  ) {
    return o(journeyDiagramVCZTEJTYInput116, journeyDiagramVCZTEJTYInput117);
  }, "drawText");
  journeyDiagramVCZTEJTYBinding21 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput57,
    journeyDiagramVCZTEJTYInput58,
  ) {
    function journeyDiagramVCZTEJTYHelper13(
      journeyDiagramVCZTEJTYInput70,
      journeyDiagramVCZTEJTYInput71,
      journeyDiagramVCZTEJTYInput72,
      journeyDiagramVCZTEJTYInput73,
      journeyDiagramVCZTEJTYInput74,
    ) {
      return (
        journeyDiagramVCZTEJTYInput70 +
        "," +
        journeyDiagramVCZTEJTYInput71 +
        " " +
        (journeyDiagramVCZTEJTYInput70 + journeyDiagramVCZTEJTYInput72) +
        "," +
        journeyDiagramVCZTEJTYInput71 +
        " " +
        (journeyDiagramVCZTEJTYInput70 + journeyDiagramVCZTEJTYInput72) +
        "," +
        (journeyDiagramVCZTEJTYInput71 +
          journeyDiagramVCZTEJTYInput73 -
          journeyDiagramVCZTEJTYInput74) +
        " " +
        (journeyDiagramVCZTEJTYInput70 +
          journeyDiagramVCZTEJTYInput72 -
          journeyDiagramVCZTEJTYInput74 * 1.2) +
        "," +
        (journeyDiagramVCZTEJTYInput71 + journeyDiagramVCZTEJTYInput73) +
        " " +
        journeyDiagramVCZTEJTYInput70 +
        "," +
        (journeyDiagramVCZTEJTYInput71 + journeyDiagramVCZTEJTYInput73)
      );
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper13, "genPoints");
    let journeyDiagramVCZTEJTYBinding141 =
      journeyDiagramVCZTEJTYInput57.append("polygon");
    journeyDiagramVCZTEJTYBinding141.attr(
      "points",
      journeyDiagramVCZTEJTYHelper13(
        journeyDiagramVCZTEJTYInput58.x,
        journeyDiagramVCZTEJTYInput58.y,
        50,
        20,
        7,
      ),
    );
    journeyDiagramVCZTEJTYBinding141.attr("class", "labelBox");
    journeyDiagramVCZTEJTYInput58.y +=
      journeyDiagramVCZTEJTYInput58.labelMargin;
    journeyDiagramVCZTEJTYInput58.x +=
      0.5 * journeyDiagramVCZTEJTYInput58.labelMargin;
    journeyDiagramVCZTEJTYBinding20(
      journeyDiagramVCZTEJTYInput57,
      journeyDiagramVCZTEJTYInput58,
    );
  }, "drawLabel");
  journeyDiagramVCZTEJTYBinding22 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput59,
    journeyDiagramVCZTEJTYInput60,
    journeyDiagramVCZTEJTYInput61,
  ) {
    let journeyDiagramVCZTEJTYBinding145 =
        journeyDiagramVCZTEJTYInput59.append("g"),
      journeyDiagramVCZTEJTYBinding146 = s();
    journeyDiagramVCZTEJTYBinding146.x = journeyDiagramVCZTEJTYInput60.x;
    journeyDiagramVCZTEJTYBinding146.y = journeyDiagramVCZTEJTYInput60.y;
    journeyDiagramVCZTEJTYBinding146.fill = journeyDiagramVCZTEJTYInput60.fill;
    journeyDiagramVCZTEJTYBinding146.width =
      journeyDiagramVCZTEJTYInput61.width *
        journeyDiagramVCZTEJTYInput60.taskCount +
      journeyDiagramVCZTEJTYInput61.diagramMarginX *
        (journeyDiagramVCZTEJTYInput60.taskCount - 1);
    journeyDiagramVCZTEJTYBinding146.height =
      journeyDiagramVCZTEJTYInput61.height;
    journeyDiagramVCZTEJTYBinding146.class =
      "journey-section section-type-" + journeyDiagramVCZTEJTYInput60.num;
    journeyDiagramVCZTEJTYBinding146.rx = 3;
    journeyDiagramVCZTEJTYBinding146.ry = 3;
    journeyDiagramVCZTEJTYBinding17(
      journeyDiagramVCZTEJTYBinding145,
      journeyDiagramVCZTEJTYBinding146,
    );
    journeyDiagramVCZTEJTYBinding26(journeyDiagramVCZTEJTYInput61)(
      journeyDiagramVCZTEJTYInput60.text,
      journeyDiagramVCZTEJTYBinding145,
      journeyDiagramVCZTEJTYBinding146.x,
      journeyDiagramVCZTEJTYBinding146.y,
      journeyDiagramVCZTEJTYBinding146.width,
      journeyDiagramVCZTEJTYBinding146.height,
      {
        class:
          "journey-section section-type-" + journeyDiagramVCZTEJTYInput60.num,
      },
      journeyDiagramVCZTEJTYInput61,
      journeyDiagramVCZTEJTYInput60.colour,
    );
  }, "drawSection");
  journeyDiagramVCZTEJTYBinding23 = -1;
  journeyDiagramVCZTEJTYBinding24 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput16,
    journeyDiagramVCZTEJTYInput17,
    journeyDiagramVCZTEJTYInput18,
    journeyDiagramVCZTEJTYInput19,
  ) {
    let journeyDiagramVCZTEJTYBinding106 =
        journeyDiagramVCZTEJTYInput17.x +
        journeyDiagramVCZTEJTYInput18.width / 2,
      journeyDiagramVCZTEJTYBinding107 =
        journeyDiagramVCZTEJTYInput16.append("g");
    journeyDiagramVCZTEJTYBinding23++;
    journeyDiagramVCZTEJTYBinding107
      .append("line")
      .attr(
        "id",
        journeyDiagramVCZTEJTYInput19 +
          "-task" +
          journeyDiagramVCZTEJTYBinding23,
      )
      .attr("x1", journeyDiagramVCZTEJTYBinding106)
      .attr("y1", journeyDiagramVCZTEJTYInput17.y)
      .attr("x2", journeyDiagramVCZTEJTYBinding106)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    journeyDiagramVCZTEJTYBinding18(journeyDiagramVCZTEJTYBinding107, {
      cx: journeyDiagramVCZTEJTYBinding106,
      cy: 300 + (5 - journeyDiagramVCZTEJTYInput17.score) * 30,
      score: journeyDiagramVCZTEJTYInput17.score,
    });
    let journeyDiagramVCZTEJTYBinding108 = s();
    journeyDiagramVCZTEJTYBinding108.x = journeyDiagramVCZTEJTYInput17.x;
    journeyDiagramVCZTEJTYBinding108.y = journeyDiagramVCZTEJTYInput17.y;
    journeyDiagramVCZTEJTYBinding108.fill = journeyDiagramVCZTEJTYInput17.fill;
    journeyDiagramVCZTEJTYBinding108.width =
      journeyDiagramVCZTEJTYInput18.width;
    journeyDiagramVCZTEJTYBinding108.height =
      journeyDiagramVCZTEJTYInput18.height;
    journeyDiagramVCZTEJTYBinding108.class =
      "task task-type-" + journeyDiagramVCZTEJTYInput17.num;
    journeyDiagramVCZTEJTYBinding108.rx = 3;
    journeyDiagramVCZTEJTYBinding108.ry = 3;
    journeyDiagramVCZTEJTYBinding17(
      journeyDiagramVCZTEJTYBinding107,
      journeyDiagramVCZTEJTYBinding108,
    );
    let journeyDiagramVCZTEJTYBinding109 = journeyDiagramVCZTEJTYInput17.x + 14;
    journeyDiagramVCZTEJTYInput17.people.forEach((item) => {
      let journeyDiagramVCZTEJTYBinding168 =
          journeyDiagramVCZTEJTYInput17.actors[item].color,
        journeyDiagramVCZTEJTYBinding169 = {
          cx: journeyDiagramVCZTEJTYBinding109,
          cy: journeyDiagramVCZTEJTYInput17.y,
          r: 7,
          fill: journeyDiagramVCZTEJTYBinding168,
          stroke: "#000",
          title: item,
          pos: journeyDiagramVCZTEJTYInput17.actors[item].position,
        };
      journeyDiagramVCZTEJTYBinding19(
        journeyDiagramVCZTEJTYBinding107,
        journeyDiagramVCZTEJTYBinding169,
      );
      journeyDiagramVCZTEJTYBinding109 += 10;
    });
    journeyDiagramVCZTEJTYBinding26(journeyDiagramVCZTEJTYInput18)(
      journeyDiagramVCZTEJTYInput17.task,
      journeyDiagramVCZTEJTYBinding107,
      journeyDiagramVCZTEJTYBinding108.x,
      journeyDiagramVCZTEJTYBinding108.y,
      journeyDiagramVCZTEJTYBinding108.width,
      journeyDiagramVCZTEJTYBinding108.height,
      {
        class: "task",
      },
      journeyDiagramVCZTEJTYInput18,
      journeyDiagramVCZTEJTYInput17.colour,
    );
  }, "drawTask");
  journeyDiagramVCZTEJTYBinding25 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput118,
    journeyDiagramVCZTEJTYInput119,
  ) {
    chunkYZCP3GAMN(
      journeyDiagramVCZTEJTYInput118,
      journeyDiagramVCZTEJTYInput119,
    );
  }, "drawBackgroundRect");
  journeyDiagramVCZTEJTYBinding26 = (function () {
    function journeyDiagramVCZTEJTYHelper5(
      journeyDiagramVCZTEJTYInput80,
      journeyDiagramVCZTEJTYInput81,
      journeyDiagramVCZTEJTYInput82,
      journeyDiagramVCZTEJTYInput83,
      journeyDiagramVCZTEJTYInput84,
      journeyDiagramVCZTEJTYInput85,
      journeyDiagramVCZTEJTYInput86,
      journeyDiagramVCZTEJTYInput87,
    ) {
      journeyDiagramVCZTEJTYHelper8(
        journeyDiagramVCZTEJTYInput81
          .append("text")
          .attr(
            "x",
            journeyDiagramVCZTEJTYInput82 + journeyDiagramVCZTEJTYInput84 / 2,
          )
          .attr(
            "y",
            journeyDiagramVCZTEJTYInput83 +
              journeyDiagramVCZTEJTYInput85 / 2 +
              5,
          )
          .style("font-color", journeyDiagramVCZTEJTYInput87)
          .style("text-anchor", "middle")
          .text(journeyDiagramVCZTEJTYInput80),
        journeyDiagramVCZTEJTYInput86,
      );
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper5, "byText");
    function journeyDiagramVCZTEJTYHelper6(
      journeyDiagramVCZTEJTYInput36,
      journeyDiagramVCZTEJTYInput37,
      journeyDiagramVCZTEJTYInput38,
      journeyDiagramVCZTEJTYInput39,
      journeyDiagramVCZTEJTYInput40,
      journeyDiagramVCZTEJTYInput41,
      journeyDiagramVCZTEJTYInput42,
      journeyDiagramVCZTEJTYInput43,
      journeyDiagramVCZTEJTYInput44,
    ) {
      let { taskFontSize, taskFontFamily } = journeyDiagramVCZTEJTYInput43,
        journeyDiagramVCZTEJTYBinding134 =
          journeyDiagramVCZTEJTYInput36.split(/<br\s*\/?>/gi);
      for (
        let journeyDiagramVCZTEJTYBinding140 = 0;
        journeyDiagramVCZTEJTYBinding140 <
        journeyDiagramVCZTEJTYBinding134.length;
        journeyDiagramVCZTEJTYBinding140++
      ) {
        let journeyDiagramVCZTEJTYBinding142 =
            journeyDiagramVCZTEJTYBinding140 * taskFontSize -
            (taskFontSize * (journeyDiagramVCZTEJTYBinding134.length - 1)) / 2,
          journeyDiagramVCZTEJTYBinding143 = journeyDiagramVCZTEJTYInput37
            .append("text")
            .attr(
              "x",
              journeyDiagramVCZTEJTYInput38 + journeyDiagramVCZTEJTYInput40 / 2,
            )
            .attr("y", journeyDiagramVCZTEJTYInput39)
            .attr("fill", journeyDiagramVCZTEJTYInput44)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        journeyDiagramVCZTEJTYBinding143
          .append("tspan")
          .attr(
            "x",
            journeyDiagramVCZTEJTYInput38 + journeyDiagramVCZTEJTYInput40 / 2,
          )
          .attr("dy", journeyDiagramVCZTEJTYBinding142)
          .text(
            journeyDiagramVCZTEJTYBinding134[journeyDiagramVCZTEJTYBinding140],
          );
        journeyDiagramVCZTEJTYBinding143
          .attr(
            "y",
            journeyDiagramVCZTEJTYInput39 + journeyDiagramVCZTEJTYInput41 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        journeyDiagramVCZTEJTYHelper8(
          journeyDiagramVCZTEJTYBinding143,
          journeyDiagramVCZTEJTYInput42,
        );
      }
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper6, "byTspan");
    function journeyDiagramVCZTEJTYHelper7(
      journeyDiagramVCZTEJTYInput47,
      journeyDiagramVCZTEJTYInput48,
      journeyDiagramVCZTEJTYInput49,
      journeyDiagramVCZTEJTYInput50,
      journeyDiagramVCZTEJTYInput51,
      journeyDiagramVCZTEJTYInput52,
      journeyDiagramVCZTEJTYInput53,
      journeyDiagramVCZTEJTYInput54,
    ) {
      let journeyDiagramVCZTEJTYBinding138 =
          journeyDiagramVCZTEJTYInput48.append("switch"),
        journeyDiagramVCZTEJTYBinding139 = journeyDiagramVCZTEJTYBinding138
          .append("foreignObject")
          .attr("x", journeyDiagramVCZTEJTYInput49)
          .attr("y", journeyDiagramVCZTEJTYInput50)
          .attr("width", journeyDiagramVCZTEJTYInput51)
          .attr("height", journeyDiagramVCZTEJTYInput52)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      journeyDiagramVCZTEJTYBinding139
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(journeyDiagramVCZTEJTYInput47);
      journeyDiagramVCZTEJTYHelper6(
        journeyDiagramVCZTEJTYInput47,
        journeyDiagramVCZTEJTYBinding138,
        journeyDiagramVCZTEJTYInput49,
        journeyDiagramVCZTEJTYInput50,
        journeyDiagramVCZTEJTYInput51,
        journeyDiagramVCZTEJTYInput52,
        journeyDiagramVCZTEJTYInput53,
        journeyDiagramVCZTEJTYInput54,
      );
      journeyDiagramVCZTEJTYHelper8(
        journeyDiagramVCZTEJTYBinding139,
        journeyDiagramVCZTEJTYInput53,
      );
    }
    defineFunctionName(journeyDiagramVCZTEJTYHelper7, "byFo");
    function journeyDiagramVCZTEJTYHelper8(
      journeyDiagramVCZTEJTYInput106,
      journeyDiagramVCZTEJTYInput107,
    ) {
      for (let journeyDiagramVCZTEJTYBinding184 in journeyDiagramVCZTEJTYInput107)
        journeyDiagramVCZTEJTYBinding184 in journeyDiagramVCZTEJTYInput107 &&
          journeyDiagramVCZTEJTYInput106.attr(
            journeyDiagramVCZTEJTYBinding184,
            journeyDiagramVCZTEJTYInput107[journeyDiagramVCZTEJTYBinding184],
          );
    }
    return (
      defineFunctionName(journeyDiagramVCZTEJTYHelper8, "_setTextAttrs"),
      function (journeyDiagramVCZTEJTYInput91) {
        return journeyDiagramVCZTEJTYInput91.textPlacement === "fo"
          ? journeyDiagramVCZTEJTYHelper7
          : journeyDiagramVCZTEJTYInput91.textPlacement === "old"
            ? journeyDiagramVCZTEJTYHelper5
            : journeyDiagramVCZTEJTYHelper6;
      }
    );
  })();
  journeyDiagramVCZTEJTYBinding27 = {
    drawRect: journeyDiagramVCZTEJTYBinding17,
    drawCircle: journeyDiagramVCZTEJTYBinding19,
    drawSection: journeyDiagramVCZTEJTYBinding22,
    drawText: journeyDiagramVCZTEJTYBinding20,
    drawLabel: journeyDiagramVCZTEJTYBinding21,
    drawTask: journeyDiagramVCZTEJTYBinding24,
    drawBackgroundRect: journeyDiagramVCZTEJTYBinding25,
    initGraphics: defineFunctionName(function (
      journeyDiagramVCZTEJTYInput68,
      journeyDiagramVCZTEJTYInput69,
    ) {
      journeyDiagramVCZTEJTYBinding23 = -1;
      journeyDiagramVCZTEJTYInput68
        .append("defs")
        .append("marker")
        .attr("id", journeyDiagramVCZTEJTYInput69 + "-arrowhead")
        .attr("refX", 5)
        .attr("refY", 2)
        .attr("markerWidth", 6)
        .attr("markerHeight", 4)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0,0 V 4 L6,2 Z");
    }, "initGraphics"),
  };
  journeyDiagramVCZTEJTYBinding28 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput100,
  ) {
    Object.keys(journeyDiagramVCZTEJTYInput100).forEach(function (item) {
      journeyDiagramVCZTEJTYBinding31[item] =
        journeyDiagramVCZTEJTYInput100[item];
    });
  }, "setConf");
  journeyDiagramVCZTEJTYBinding29 = {};
  journeyDiagramVCZTEJTYBinding30 = 0;
  defineFunctionName(journeyDiagramVCZTEJTYHelper1, "drawActorLegend");
  journeyDiagramVCZTEJTYBinding31 = b().journey;
  journeyDiagramVCZTEJTYBinding32 = 0;
  journeyDiagramVCZTEJTYBinding33 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput7,
    journeyDiagramVCZTEJTYInput8,
    journeyDiagramVCZTEJTYInput9,
    journeyDiagramVCZTEJTYInput10,
  ) {
    let journeyDiagramVCZTEJTYBinding82 = b(),
      journeyDiagramVCZTEJTYBinding83 =
        journeyDiagramVCZTEJTYBinding82.journey.titleColor,
      journeyDiagramVCZTEJTYBinding84 =
        journeyDiagramVCZTEJTYBinding82.journey.titleFontSize,
      journeyDiagramVCZTEJTYBinding85 =
        journeyDiagramVCZTEJTYBinding82.journey.titleFontFamily,
      journeyDiagramVCZTEJTYBinding86 =
        journeyDiagramVCZTEJTYBinding82.securityLevel,
      journeyDiagramVCZTEJTYBinding87;
    journeyDiagramVCZTEJTYBinding86 === "sandbox" &&
      (journeyDiagramVCZTEJTYBinding87 = select(
        "#i" + journeyDiagramVCZTEJTYInput8,
      ));
    let journeyDiagramVCZTEJTYBinding88 = select(
      journeyDiagramVCZTEJTYBinding86 === "sandbox"
        ? journeyDiagramVCZTEJTYBinding87.nodes()[0].contentDocument.body
        : "body",
    );
    journeyDiagramVCZTEJTYBinding34.init();
    let journeyDiagramVCZTEJTYBinding89 =
      journeyDiagramVCZTEJTYBinding88.select(
        "#" + journeyDiagramVCZTEJTYInput8,
      );
    journeyDiagramVCZTEJTYBinding27.initGraphics(
      journeyDiagramVCZTEJTYBinding89,
      journeyDiagramVCZTEJTYInput8,
    );
    let journeyDiagramVCZTEJTYBinding90 =
        journeyDiagramVCZTEJTYInput10.db.getTasks(),
      journeyDiagramVCZTEJTYBinding91 =
        journeyDiagramVCZTEJTYInput10.db.getDiagramTitle(),
      journeyDiagramVCZTEJTYBinding92 =
        journeyDiagramVCZTEJTYInput10.db.getActors();
    for (let journeyDiagramVCZTEJTYBinding185 in journeyDiagramVCZTEJTYBinding29)
      delete journeyDiagramVCZTEJTYBinding29[journeyDiagramVCZTEJTYBinding185];
    let journeyDiagramVCZTEJTYBinding93 = 0;
    journeyDiagramVCZTEJTYBinding92.forEach((item) => {
      journeyDiagramVCZTEJTYBinding29[item] = {
        color:
          journeyDiagramVCZTEJTYBinding31.actorColours[
            journeyDiagramVCZTEJTYBinding93 %
              journeyDiagramVCZTEJTYBinding31.actorColours.length
          ],
        position: journeyDiagramVCZTEJTYBinding93,
      };
      journeyDiagramVCZTEJTYBinding93++;
    });
    journeyDiagramVCZTEJTYHelper1(journeyDiagramVCZTEJTYBinding89);
    journeyDiagramVCZTEJTYBinding32 =
      journeyDiagramVCZTEJTYBinding31.leftMargin +
      journeyDiagramVCZTEJTYBinding30;
    journeyDiagramVCZTEJTYBinding34.insert(
      0,
      0,
      journeyDiagramVCZTEJTYBinding32,
      Object.keys(journeyDiagramVCZTEJTYBinding29).length * 50,
    );
    journeyDiagramVCZTEJTYBinding37(
      journeyDiagramVCZTEJTYBinding89,
      journeyDiagramVCZTEJTYBinding90,
      0,
      journeyDiagramVCZTEJTYInput8,
    );
    let journeyDiagramVCZTEJTYBinding94 =
      journeyDiagramVCZTEJTYBinding34.getBounds();
    journeyDiagramVCZTEJTYBinding91 &&
      journeyDiagramVCZTEJTYBinding89
        .append("text")
        .text(journeyDiagramVCZTEJTYBinding91)
        .attr("x", journeyDiagramVCZTEJTYBinding32)
        .attr("font-size", journeyDiagramVCZTEJTYBinding84)
        .attr("font-weight", "bold")
        .attr("y", 25)
        .attr("fill", journeyDiagramVCZTEJTYBinding83)
        .attr("font-family", journeyDiagramVCZTEJTYBinding85);
    let journeyDiagramVCZTEJTYBinding95 =
        journeyDiagramVCZTEJTYBinding94.stopy -
        journeyDiagramVCZTEJTYBinding94.starty +
        2 * journeyDiagramVCZTEJTYBinding31.diagramMarginY,
      journeyDiagramVCZTEJTYBinding96 =
        journeyDiagramVCZTEJTYBinding32 +
        journeyDiagramVCZTEJTYBinding94.stopx +
        2 * journeyDiagramVCZTEJTYBinding31.diagramMarginX;
    _chunkICPOFSXXC(
      journeyDiagramVCZTEJTYBinding89,
      journeyDiagramVCZTEJTYBinding95,
      journeyDiagramVCZTEJTYBinding96,
      journeyDiagramVCZTEJTYBinding31.useMaxWidth,
    );
    journeyDiagramVCZTEJTYBinding89
      .append("line")
      .attr("x1", journeyDiagramVCZTEJTYBinding32)
      .attr("y1", journeyDiagramVCZTEJTYBinding31.height * 4)
      .attr(
        "x2",
        journeyDiagramVCZTEJTYBinding96 - journeyDiagramVCZTEJTYBinding32 - 4,
      )
      .attr("y2", journeyDiagramVCZTEJTYBinding31.height * 4)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr(
        "marker-end",
        "url(#" + journeyDiagramVCZTEJTYInput8 + "-arrowhead)",
      );
    let journeyDiagramVCZTEJTYBinding97 = journeyDiagramVCZTEJTYBinding91
      ? 70
      : 0;
    journeyDiagramVCZTEJTYBinding89.attr(
      "viewBox",
      `${journeyDiagramVCZTEJTYBinding94.startx} -25 ${journeyDiagramVCZTEJTYBinding96} ${journeyDiagramVCZTEJTYBinding95 + journeyDiagramVCZTEJTYBinding97}`,
    );
    journeyDiagramVCZTEJTYBinding89.attr(
      "preserveAspectRatio",
      "xMinYMin meet",
    );
    journeyDiagramVCZTEJTYBinding89.attr(
      "height",
      journeyDiagramVCZTEJTYBinding95 + journeyDiagramVCZTEJTYBinding97 + 25,
    );
  }, "draw");
  journeyDiagramVCZTEJTYBinding34 = {
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
      journeyDiagramVCZTEJTYInput102,
      journeyDiagramVCZTEJTYInput103,
      journeyDiagramVCZTEJTYInput104,
      journeyDiagramVCZTEJTYInput105,
    ) {
      journeyDiagramVCZTEJTYInput102[journeyDiagramVCZTEJTYInput103] ===
      undefined
        ? (journeyDiagramVCZTEJTYInput102[journeyDiagramVCZTEJTYInput103] =
            journeyDiagramVCZTEJTYInput104)
        : (journeyDiagramVCZTEJTYInput102[journeyDiagramVCZTEJTYInput103] =
            journeyDiagramVCZTEJTYInput105(
              journeyDiagramVCZTEJTYInput104,
              journeyDiagramVCZTEJTYInput102[journeyDiagramVCZTEJTYInput103],
            ));
    }, "updateVal"),
    updateBounds: defineFunctionName(function (
      journeyDiagramVCZTEJTYInput32,
      journeyDiagramVCZTEJTYInput33,
      journeyDiagramVCZTEJTYInput34,
      journeyDiagramVCZTEJTYInput35,
    ) {
      let journeyDiagramVCZTEJTYBinding130 = b().journey,
        journeyDiagramVCZTEJTYBinding131 = this,
        journeyDiagramVCZTEJTYBinding132 = 0;
      function journeyDiagramVCZTEJTYHelper12(journeyDiagramVCZTEJTYInput45) {
        return defineFunctionName(function (journeyDiagramVCZTEJTYInput46) {
          journeyDiagramVCZTEJTYBinding132++;
          let journeyDiagramVCZTEJTYBinding137 =
            journeyDiagramVCZTEJTYBinding131.sequenceItems.length -
            journeyDiagramVCZTEJTYBinding132 +
            1;
          journeyDiagramVCZTEJTYBinding131.updateVal(
            journeyDiagramVCZTEJTYInput46,
            "starty",
            journeyDiagramVCZTEJTYInput33 -
              journeyDiagramVCZTEJTYBinding137 *
                journeyDiagramVCZTEJTYBinding130.boxMargin,
            Math.min,
          );
          journeyDiagramVCZTEJTYBinding131.updateVal(
            journeyDiagramVCZTEJTYInput46,
            "stopy",
            journeyDiagramVCZTEJTYInput35 +
              journeyDiagramVCZTEJTYBinding137 *
                journeyDiagramVCZTEJTYBinding130.boxMargin,
            Math.max,
          );
          journeyDiagramVCZTEJTYBinding131.updateVal(
            journeyDiagramVCZTEJTYBinding34.data,
            "startx",
            journeyDiagramVCZTEJTYInput32 -
              journeyDiagramVCZTEJTYBinding137 *
                journeyDiagramVCZTEJTYBinding130.boxMargin,
            Math.min,
          );
          journeyDiagramVCZTEJTYBinding131.updateVal(
            journeyDiagramVCZTEJTYBinding34.data,
            "stopx",
            journeyDiagramVCZTEJTYInput34 +
              journeyDiagramVCZTEJTYBinding137 *
                journeyDiagramVCZTEJTYBinding130.boxMargin,
            Math.max,
          );
          journeyDiagramVCZTEJTYInput45 !== "activation" &&
            (journeyDiagramVCZTEJTYBinding131.updateVal(
              journeyDiagramVCZTEJTYInput46,
              "startx",
              journeyDiagramVCZTEJTYInput32 -
                journeyDiagramVCZTEJTYBinding137 *
                  journeyDiagramVCZTEJTYBinding130.boxMargin,
              Math.min,
            ),
            journeyDiagramVCZTEJTYBinding131.updateVal(
              journeyDiagramVCZTEJTYInput46,
              "stopx",
              journeyDiagramVCZTEJTYInput34 +
                journeyDiagramVCZTEJTYBinding137 *
                  journeyDiagramVCZTEJTYBinding130.boxMargin,
              Math.max,
            ),
            journeyDiagramVCZTEJTYBinding131.updateVal(
              journeyDiagramVCZTEJTYBinding34.data,
              "starty",
              journeyDiagramVCZTEJTYInput33 -
                journeyDiagramVCZTEJTYBinding137 *
                  journeyDiagramVCZTEJTYBinding130.boxMargin,
              Math.min,
            ),
            journeyDiagramVCZTEJTYBinding131.updateVal(
              journeyDiagramVCZTEJTYBinding34.data,
              "stopy",
              journeyDiagramVCZTEJTYInput35 +
                journeyDiagramVCZTEJTYBinding137 *
                  journeyDiagramVCZTEJTYBinding130.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      defineFunctionName(journeyDiagramVCZTEJTYHelper12, "updateFn");
      this.sequenceItems.forEach(journeyDiagramVCZTEJTYHelper12());
    }, "updateBounds"),
    insert: defineFunctionName(function (
      journeyDiagramVCZTEJTYInput62,
      journeyDiagramVCZTEJTYInput63,
      journeyDiagramVCZTEJTYInput64,
      journeyDiagramVCZTEJTYInput65,
    ) {
      let journeyDiagramVCZTEJTYBinding151 = Math.min(
          journeyDiagramVCZTEJTYInput62,
          journeyDiagramVCZTEJTYInput64,
        ),
        journeyDiagramVCZTEJTYBinding152 = Math.max(
          journeyDiagramVCZTEJTYInput62,
          journeyDiagramVCZTEJTYInput64,
        ),
        journeyDiagramVCZTEJTYBinding153 = Math.min(
          journeyDiagramVCZTEJTYInput63,
          journeyDiagramVCZTEJTYInput65,
        ),
        journeyDiagramVCZTEJTYBinding154 = Math.max(
          journeyDiagramVCZTEJTYInput63,
          journeyDiagramVCZTEJTYInput65,
        );
      this.updateVal(
        journeyDiagramVCZTEJTYBinding34.data,
        "startx",
        journeyDiagramVCZTEJTYBinding151,
        Math.min,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYBinding34.data,
        "starty",
        journeyDiagramVCZTEJTYBinding153,
        Math.min,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYBinding34.data,
        "stopx",
        journeyDiagramVCZTEJTYBinding152,
        Math.max,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYBinding34.data,
        "stopy",
        journeyDiagramVCZTEJTYBinding154,
        Math.max,
      );
      this.updateBounds(
        journeyDiagramVCZTEJTYBinding151,
        journeyDiagramVCZTEJTYBinding153,
        journeyDiagramVCZTEJTYBinding152,
        journeyDiagramVCZTEJTYBinding154,
      );
    }, "insert"),
    bumpVerticalPos: defineFunctionName(function (
      journeyDiagramVCZTEJTYInput101,
    ) {
      this.verticalPos += journeyDiagramVCZTEJTYInput101;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: defineFunctionName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: defineFunctionName(function () {
      return this.data;
    }, "getBounds"),
  };
  journeyDiagramVCZTEJTYBinding35 =
    journeyDiagramVCZTEJTYBinding31.sectionFills;
  journeyDiagramVCZTEJTYBinding36 =
    journeyDiagramVCZTEJTYBinding31.sectionColours;
  journeyDiagramVCZTEJTYBinding37 = defineFunctionName(function (
    journeyDiagramVCZTEJTYInput21,
    journeyDiagramVCZTEJTYInput22,
    journeyDiagramVCZTEJTYInput23,
    journeyDiagramVCZTEJTYInput24,
  ) {
    let journeyDiagramVCZTEJTYBinding120 = b().journey,
      journeyDiagramVCZTEJTYBinding121 = "",
      journeyDiagramVCZTEJTYBinding122 =
        journeyDiagramVCZTEJTYInput23 +
        (journeyDiagramVCZTEJTYBinding120.height * 2 +
          journeyDiagramVCZTEJTYBinding120.diagramMarginY),
      journeyDiagramVCZTEJTYBinding123 = 0,
      journeyDiagramVCZTEJTYBinding124 = "#CCC",
      journeyDiagramVCZTEJTYBinding125 = "black",
      journeyDiagramVCZTEJTYBinding126 = 0;
    for (let [
      journeyDiagramVCZTEJTYBinding128,
      journeyDiagramVCZTEJTYBinding129,
    ] of journeyDiagramVCZTEJTYInput22.entries()) {
      if (
        journeyDiagramVCZTEJTYBinding121 !==
        journeyDiagramVCZTEJTYBinding129.section
      ) {
        journeyDiagramVCZTEJTYBinding124 =
          journeyDiagramVCZTEJTYBinding35[
            journeyDiagramVCZTEJTYBinding123 %
              journeyDiagramVCZTEJTYBinding35.length
          ];
        journeyDiagramVCZTEJTYBinding126 =
          journeyDiagramVCZTEJTYBinding123 %
          journeyDiagramVCZTEJTYBinding35.length;
        journeyDiagramVCZTEJTYBinding125 =
          journeyDiagramVCZTEJTYBinding36[
            journeyDiagramVCZTEJTYBinding123 %
              journeyDiagramVCZTEJTYBinding36.length
          ];
        let journeyDiagramVCZTEJTYBinding148 = 0,
          journeyDiagramVCZTEJTYBinding149 =
            journeyDiagramVCZTEJTYBinding129.section;
        for (
          let journeyDiagramVCZTEJTYBinding181 =
            journeyDiagramVCZTEJTYBinding128;
          journeyDiagramVCZTEJTYBinding181 <
            journeyDiagramVCZTEJTYInput22.length &&
          journeyDiagramVCZTEJTYInput22[journeyDiagramVCZTEJTYBinding181]
            .section == journeyDiagramVCZTEJTYBinding149;
          journeyDiagramVCZTEJTYBinding181++
        )
          journeyDiagramVCZTEJTYBinding148 += 1;
        let journeyDiagramVCZTEJTYBinding150 = {
          x:
            journeyDiagramVCZTEJTYBinding128 *
              journeyDiagramVCZTEJTYBinding120.taskMargin +
            journeyDiagramVCZTEJTYBinding128 *
              journeyDiagramVCZTEJTYBinding120.width +
            journeyDiagramVCZTEJTYBinding32,
          y: 50,
          text: journeyDiagramVCZTEJTYBinding129.section,
          fill: journeyDiagramVCZTEJTYBinding124,
          num: journeyDiagramVCZTEJTYBinding126,
          colour: journeyDiagramVCZTEJTYBinding125,
          taskCount: journeyDiagramVCZTEJTYBinding148,
        };
        journeyDiagramVCZTEJTYBinding27.drawSection(
          journeyDiagramVCZTEJTYInput21,
          journeyDiagramVCZTEJTYBinding150,
          journeyDiagramVCZTEJTYBinding120,
        );
        journeyDiagramVCZTEJTYBinding121 =
          journeyDiagramVCZTEJTYBinding129.section;
        journeyDiagramVCZTEJTYBinding123++;
      }
      let journeyDiagramVCZTEJTYBinding133 =
        journeyDiagramVCZTEJTYBinding129.people.reduce(
          (accumulator, current) => (
            journeyDiagramVCZTEJTYBinding29[current] &&
              (accumulator[current] = journeyDiagramVCZTEJTYBinding29[current]),
            accumulator
          ),
          {},
        );
      journeyDiagramVCZTEJTYBinding129.x =
        journeyDiagramVCZTEJTYBinding128 *
          journeyDiagramVCZTEJTYBinding120.taskMargin +
        journeyDiagramVCZTEJTYBinding128 *
          journeyDiagramVCZTEJTYBinding120.width +
        journeyDiagramVCZTEJTYBinding32;
      journeyDiagramVCZTEJTYBinding129.y = journeyDiagramVCZTEJTYBinding122;
      journeyDiagramVCZTEJTYBinding129.width =
        journeyDiagramVCZTEJTYBinding120.diagramMarginX;
      journeyDiagramVCZTEJTYBinding129.height =
        journeyDiagramVCZTEJTYBinding120.diagramMarginY;
      journeyDiagramVCZTEJTYBinding129.colour =
        journeyDiagramVCZTEJTYBinding125;
      journeyDiagramVCZTEJTYBinding129.fill = journeyDiagramVCZTEJTYBinding124;
      journeyDiagramVCZTEJTYBinding129.num = journeyDiagramVCZTEJTYBinding126;
      journeyDiagramVCZTEJTYBinding129.actors =
        journeyDiagramVCZTEJTYBinding133;
      journeyDiagramVCZTEJTYBinding27.drawTask(
        journeyDiagramVCZTEJTYInput21,
        journeyDiagramVCZTEJTYBinding129,
        journeyDiagramVCZTEJTYBinding120,
        journeyDiagramVCZTEJTYInput24,
      );
      journeyDiagramVCZTEJTYBinding34.insert(
        journeyDiagramVCZTEJTYBinding129.x,
        journeyDiagramVCZTEJTYBinding129.y,
        journeyDiagramVCZTEJTYBinding129.x +
          journeyDiagramVCZTEJTYBinding129.width +
          journeyDiagramVCZTEJTYBinding120.taskMargin,
        450,
      );
    }
  }, "drawTasks");
  $ = {
    setConf: journeyDiagramVCZTEJTYBinding28,
    draw: journeyDiagramVCZTEJTYBinding33,
  };
  JourneyDiagramVCZTEJTY = {
    parser: journeyDiagramVCZTEJTYBinding2,
    db: journeyDiagramVCZTEJTYBinding15,
    renderer: $,
    styles: journeyDiagramVCZTEJTYBinding16,
    init: defineFunctionName((journeyDiagramVCZTEJTYInput110) => {
      $.setConf(journeyDiagramVCZTEJTYInput110.journey);
      journeyDiagramVCZTEJTYBinding15.clear();
    }, "init"),
  };
})();
export { JourneyDiagramVCZTEJTY as diagram };
