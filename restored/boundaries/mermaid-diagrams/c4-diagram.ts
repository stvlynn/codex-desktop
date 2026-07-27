// Restored from ref/webview/assets/c4Diagram-YG6GDRKO-Bi-DS8bZ.js
// Mermaid C4 diagram definition primary (db + renderer + parser).
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
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  V as _chunkABZYJK2DV,
  B,
  c,
  k,
  L,
  r,
  s,
  _,
  V,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import {
  chunkS3R3BYOJN,
  chunkS3R3BYOJT,
  chunkS3R3BYOJU,
  chunkS3R3BYOJUnderscore,
} from "./mermaid-common-utils";
import { initSvgDrawingHelpersChunk as chunkTZMSLE5BC, drawRect as i, getNoteRect as o } from "../../diagrams/svg-drawing-helpers";
function c4DiagramYG6GDRKOHelper1(
  c4DiagramYG6GDRKOInput135,
  c4DiagramYG6GDRKOInput136,
  c4DiagramYG6GDRKOInput137,
  c4DiagramYG6GDRKOInput138,
  c4DiagramYG6GDRKOInput139,
) {
  if (!c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].width)
    if (c4DiagramYG6GDRKOInput137) {
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].text =
        chunkS3R3BYOJUnderscore(
          c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].text,
          c4DiagramYG6GDRKOInput139,
          c4DiagramYG6GDRKOInput138,
        );
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].textLines =
        c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].text.split(
          s.lineBreakRegex,
        ).length;
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].width =
        c4DiagramYG6GDRKOInput139;
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].height =
        chunkS3R3BYOJT(
          c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].text,
          c4DiagramYG6GDRKOInput138,
        );
    } else {
      let c4DiagramYG6GDRKOBinding277 = c4DiagramYG6GDRKOInput136[
        c4DiagramYG6GDRKOInput135
      ].text.split(s.lineBreakRegex);
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].textLines =
        c4DiagramYG6GDRKOBinding277.length;
      let c4DiagramYG6GDRKOBinding278 = 0;
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].height = 0;
      c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].width = 0;
      for (let c4DiagramYG6GDRKOBinding291 of c4DiagramYG6GDRKOBinding277) {
        c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].width = Math.max(
          chunkS3R3BYOJN(
            c4DiagramYG6GDRKOBinding291,
            c4DiagramYG6GDRKOInput138,
          ),
          c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].width,
        );
        c4DiagramYG6GDRKOBinding278 = chunkS3R3BYOJT(
          c4DiagramYG6GDRKOBinding291,
          c4DiagramYG6GDRKOInput138,
        );
        c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].height =
          c4DiagramYG6GDRKOInput136[c4DiagramYG6GDRKOInput135].height +
          c4DiagramYG6GDRKOBinding278;
      }
    }
}
function c4DiagramYG6GDRKOHelper2(
  c4DiagramYG6GDRKOInput26,
  c4DiagramYG6GDRKOInput27,
  c4DiagramYG6GDRKOInput28,
  c4DiagramYG6GDRKOInput29,
  c4DiagramYG6GDRKOInput30,
) {
  let c4DiagramYG6GDRKOBinding189 = new c4DiagramYG6GDRKOBinding61(
    c4DiagramYG6GDRKOInput30,
  );
  c4DiagramYG6GDRKOBinding189.data.widthLimit =
    c4DiagramYG6GDRKOInput28.data.widthLimit /
    Math.min(c4DiagramYG6GDRKOBinding59, c4DiagramYG6GDRKOInput29.length);
  for (let [
    c4DiagramYG6GDRKOBinding201,
    c4DiagramYG6GDRKOBinding202,
  ] of c4DiagramYG6GDRKOInput29.entries()) {
    let c4DiagramYG6GDRKOBinding203 = 0;
    c4DiagramYG6GDRKOBinding202.image = {
      width: 0,
      height: 0,
      Y: 0,
    };
    c4DiagramYG6GDRKOBinding202.sprite &&
      ((c4DiagramYG6GDRKOBinding202.image.width = 48),
      (c4DiagramYG6GDRKOBinding202.image.height = 48),
      (c4DiagramYG6GDRKOBinding202.image.Y = c4DiagramYG6GDRKOBinding203),
      (c4DiagramYG6GDRKOBinding203 =
        c4DiagramYG6GDRKOBinding202.image.Y +
        c4DiagramYG6GDRKOBinding202.image.height));
    let c4DiagramYG6GDRKOBinding204 =
        c4DiagramYG6GDRKOBinding202.wrap && c4DiagramYG6GDRKOBinding60.wrap,
      c4DiagramYG6GDRKOBinding205 = c4DiagramYG6GDRKOBinding64(
        c4DiagramYG6GDRKOBinding60,
      );
    if (
      ((c4DiagramYG6GDRKOBinding205.fontSize += 2),
      (c4DiagramYG6GDRKOBinding205.fontWeight = "bold"),
      c4DiagramYG6GDRKOHelper1(
        "label",
        c4DiagramYG6GDRKOBinding202,
        c4DiagramYG6GDRKOBinding204,
        c4DiagramYG6GDRKOBinding205,
        c4DiagramYG6GDRKOBinding189.data.widthLimit,
      ),
      (c4DiagramYG6GDRKOBinding202.label.Y = c4DiagramYG6GDRKOBinding203 + 8),
      (c4DiagramYG6GDRKOBinding203 =
        c4DiagramYG6GDRKOBinding202.label.Y +
        c4DiagramYG6GDRKOBinding202.label.height),
      c4DiagramYG6GDRKOBinding202.type &&
        c4DiagramYG6GDRKOBinding202.type.text !== "" &&
        ((c4DiagramYG6GDRKOBinding202.type.text =
          "[" + c4DiagramYG6GDRKOBinding202.type.text + "]"),
        c4DiagramYG6GDRKOHelper1(
          "type",
          c4DiagramYG6GDRKOBinding202,
          c4DiagramYG6GDRKOBinding204,
          c4DiagramYG6GDRKOBinding64(c4DiagramYG6GDRKOBinding60),
          c4DiagramYG6GDRKOBinding189.data.widthLimit,
        ),
        (c4DiagramYG6GDRKOBinding202.type.Y = c4DiagramYG6GDRKOBinding203 + 5),
        (c4DiagramYG6GDRKOBinding203 =
          c4DiagramYG6GDRKOBinding202.type.Y +
          c4DiagramYG6GDRKOBinding202.type.height)),
      c4DiagramYG6GDRKOBinding202.descr &&
        c4DiagramYG6GDRKOBinding202.descr.text !== "")
    ) {
      let c4DiagramYG6GDRKOBinding290 = c4DiagramYG6GDRKOBinding64(
        c4DiagramYG6GDRKOBinding60,
      );
      c4DiagramYG6GDRKOBinding290.fontSize -= 2;
      c4DiagramYG6GDRKOHelper1(
        "descr",
        c4DiagramYG6GDRKOBinding202,
        c4DiagramYG6GDRKOBinding204,
        c4DiagramYG6GDRKOBinding290,
        c4DiagramYG6GDRKOBinding189.data.widthLimit,
      );
      c4DiagramYG6GDRKOBinding202.descr.Y = c4DiagramYG6GDRKOBinding203 + 20;
      c4DiagramYG6GDRKOBinding203 =
        c4DiagramYG6GDRKOBinding202.descr.Y +
        c4DiagramYG6GDRKOBinding202.descr.height;
    }
    if (
      c4DiagramYG6GDRKOBinding201 == 0 ||
      c4DiagramYG6GDRKOBinding201 % c4DiagramYG6GDRKOBinding59 === 0
    ) {
      let c4DiagramYG6GDRKOBinding292 =
          c4DiagramYG6GDRKOInput28.data.startx +
          c4DiagramYG6GDRKOBinding60.diagramMarginX,
        c4DiagramYG6GDRKOBinding293 =
          c4DiagramYG6GDRKOInput28.data.stopy +
          c4DiagramYG6GDRKOBinding60.diagramMarginY +
          c4DiagramYG6GDRKOBinding203;
      c4DiagramYG6GDRKOBinding189.setData(
        c4DiagramYG6GDRKOBinding292,
        c4DiagramYG6GDRKOBinding292,
        c4DiagramYG6GDRKOBinding293,
        c4DiagramYG6GDRKOBinding293,
      );
    } else {
      let c4DiagramYG6GDRKOBinding287 =
          c4DiagramYG6GDRKOBinding189.data.stopx ===
          c4DiagramYG6GDRKOBinding189.data.startx
            ? c4DiagramYG6GDRKOBinding189.data.startx
            : c4DiagramYG6GDRKOBinding189.data.stopx +
              c4DiagramYG6GDRKOBinding60.diagramMarginX,
        c4DiagramYG6GDRKOBinding288 = c4DiagramYG6GDRKOBinding189.data.starty;
      c4DiagramYG6GDRKOBinding189.setData(
        c4DiagramYG6GDRKOBinding287,
        c4DiagramYG6GDRKOBinding287,
        c4DiagramYG6GDRKOBinding288,
        c4DiagramYG6GDRKOBinding288,
      );
    }
    c4DiagramYG6GDRKOBinding189.name = c4DiagramYG6GDRKOBinding202.alias;
    let c4DiagramYG6GDRKOBinding206 =
        c4DiagramYG6GDRKOInput30.db.getC4ShapeArray(
          c4DiagramYG6GDRKOBinding202.alias,
        ),
      c4DiagramYG6GDRKOBinding207 = c4DiagramYG6GDRKOInput30.db.getC4ShapeKeys(
        c4DiagramYG6GDRKOBinding202.alias,
      );
    c4DiagramYG6GDRKOBinding207.length > 0 &&
      c4DiagramYG6GDRKOBinding67(
        c4DiagramYG6GDRKOBinding189,
        c4DiagramYG6GDRKOInput26,
        c4DiagramYG6GDRKOBinding206,
        c4DiagramYG6GDRKOBinding207,
      );
    c4DiagramYG6GDRKOInput27 = c4DiagramYG6GDRKOBinding202.alias;
    let c4DiagramYG6GDRKOBinding208 = c4DiagramYG6GDRKOInput30.db.getBoundaries(
      c4DiagramYG6GDRKOInput27,
    );
    c4DiagramYG6GDRKOBinding208.length > 0 &&
      c4DiagramYG6GDRKOHelper2(
        c4DiagramYG6GDRKOInput26,
        c4DiagramYG6GDRKOInput27,
        c4DiagramYG6GDRKOBinding189,
        c4DiagramYG6GDRKOBinding208,
        c4DiagramYG6GDRKOInput30,
      );
    c4DiagramYG6GDRKOBinding202.alias !== "global" &&
      c4DiagramYG6GDRKOBinding66(
        c4DiagramYG6GDRKOInput26,
        c4DiagramYG6GDRKOBinding202,
        c4DiagramYG6GDRKOBinding189,
      );
    c4DiagramYG6GDRKOInput28.data.stopy = Math.max(
      c4DiagramYG6GDRKOBinding189.data.stopy +
        c4DiagramYG6GDRKOBinding60.c4ShapeMargin,
      c4DiagramYG6GDRKOInput28.data.stopy,
    );
    c4DiagramYG6GDRKOInput28.data.stopx = Math.max(
      c4DiagramYG6GDRKOBinding189.data.stopx +
        c4DiagramYG6GDRKOBinding60.c4ShapeMargin,
      c4DiagramYG6GDRKOInput28.data.stopx,
    );
    c4DiagramYG6GDRKOBinding56 = Math.max(
      c4DiagramYG6GDRKOBinding56,
      c4DiagramYG6GDRKOInput28.data.stopx,
    );
    c4DiagramYG6GDRKOBinding57 = Math.max(
      c4DiagramYG6GDRKOBinding57,
      c4DiagramYG6GDRKOInput28.data.stopy,
    );
  }
}
var c4DiagramYG6GDRKOBinding1,
  c4DiagramYG6GDRKOBinding2,
  c4DiagramYG6GDRKOBinding3,
  c4DiagramYG6GDRKOBinding4,
  c4DiagramYG6GDRKOBinding5,
  c4DiagramYG6GDRKOBinding6,
  c4DiagramYG6GDRKOBinding7,
  c4DiagramYG6GDRKOBinding8,
  c4DiagramYG6GDRKOBinding9,
  c4DiagramYG6GDRKOBinding10,
  c4DiagramYG6GDRKOBinding11,
  c4DiagramYG6GDRKOBinding12,
  c4DiagramYG6GDRKOBinding13,
  c4DiagramYG6GDRKOBinding14,
  c4DiagramYG6GDRKOBinding15,
  c4DiagramYG6GDRKOBinding16,
  c4DiagramYG6GDRKOBinding17,
  c4DiagramYG6GDRKOBinding18,
  c4DiagramYG6GDRKOBinding19,
  c4DiagramYG6GDRKOBinding20,
  c4DiagramYG6GDRKOBinding21,
  c4DiagramYG6GDRKOBinding22,
  c4DiagramYG6GDRKOBinding23,
  c4DiagramYG6GDRKOBinding24,
  c4DiagramYG6GDRKOBinding25,
  c4DiagramYG6GDRKOBinding26,
  c4DiagramYG6GDRKOBinding27,
  c4DiagramYG6GDRKOBinding28,
  c4DiagramYG6GDRKOBinding29,
  c4DiagramYG6GDRKOBinding30,
  c4DiagramYG6GDRKOBinding31,
  c4DiagramYG6GDRKOBinding32,
  c4DiagramYG6GDRKOBinding33,
  c4DiagramYG6GDRKOBinding34,
  c4DiagramYG6GDRKOBinding35,
  c4DiagramYG6GDRKOBinding36,
  c4DiagramYG6GDRKOBinding37,
  c4DiagramYG6GDRKOBinding38,
  c4DiagramYG6GDRKOBinding39,
  c4DiagramYG6GDRKOBinding40,
  _e,
  c4DiagramYG6GDRKOBinding41,
  c4DiagramYG6GDRKOBinding42,
  be,
  c4DiagramYG6GDRKOBinding43,
  c4DiagramYG6GDRKOBinding44,
  c4DiagramYG6GDRKOBinding45,
  c4DiagramYG6GDRKOBinding46,
  c4DiagramYG6GDRKOBinding47,
  c4DiagramYG6GDRKOBinding48,
  c4DiagramYG6GDRKOBinding49,
  c4DiagramYG6GDRKOBinding50,
  c4DiagramYG6GDRKOBinding51,
  c4DiagramYG6GDRKOBinding52,
  c4DiagramYG6GDRKOBinding53,
  c4DiagramYG6GDRKOBinding54,
  c4DiagramYG6GDRKOBinding55,
  c4DiagramYG6GDRKOBinding56,
  c4DiagramYG6GDRKOBinding57,
  c4DiagramYG6GDRKOBinding58,
  c4DiagramYG6GDRKOBinding59,
  c4DiagramYG6GDRKOBinding60,
  c4DiagramYG6GDRKOBinding61,
  c4DiagramYG6GDRKOBinding62,
  c4DiagramYG6GDRKOBinding63,
  c4DiagramYG6GDRKOBinding64,
  c4DiagramYG6GDRKOBinding65,
  c4DiagramYG6GDRKOBinding66,
  c4DiagramYG6GDRKOBinding67,
  $,
  c4DiagramYG6GDRKOBinding68,
  c4DiagramYG6GDRKOBinding69,
  c4DiagramYG6GDRKOBinding70,
  c4DiagramYG6GDRKOBinding71,
  C4DiagramYG6GDRKO;
esmInit(() => {
  chunkTZMSLE5BC();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  c4DiagramYG6GDRKOBinding1 = dist();
  c4DiagramYG6GDRKOBinding2 = (function () {
    var c4DiagramYG6GDRKOBinding72 = defineFunctionName(function (
        c4DiagramYG6GDRKOInput184,
        c4DiagramYG6GDRKOInput185,
        c4DiagramYG6GDRKOInput186,
        c4DiagramYG6GDRKOInput187,
      ) {
        for (
          c4DiagramYG6GDRKOInput186 ||= {},
            c4DiagramYG6GDRKOInput187 = c4DiagramYG6GDRKOInput184.length;
          c4DiagramYG6GDRKOInput187--;
          c4DiagramYG6GDRKOInput186[
            c4DiagramYG6GDRKOInput184[c4DiagramYG6GDRKOInput187]
          ] = c4DiagramYG6GDRKOInput185
        );
        return c4DiagramYG6GDRKOInput186;
      }, "o"),
      c4DiagramYG6GDRKOBinding73 = [1, 24],
      c4DiagramYG6GDRKOBinding74 = [1, 25],
      c4DiagramYG6GDRKOBinding75 = [1, 26],
      c4DiagramYG6GDRKOBinding76 = [1, 27],
      c4DiagramYG6GDRKOBinding77 = [1, 28],
      c4DiagramYG6GDRKOBinding78 = [1, 63],
      c4DiagramYG6GDRKOBinding79 = [1, 64],
      c4DiagramYG6GDRKOBinding80 = [1, 65],
      c4DiagramYG6GDRKOBinding81 = [1, 66],
      c4DiagramYG6GDRKOBinding82 = [1, 67],
      c4DiagramYG6GDRKOBinding83 = [1, 68],
      c4DiagramYG6GDRKOBinding84 = [1, 69],
      c4DiagramYG6GDRKOBinding85 = [1, 29],
      c4DiagramYG6GDRKOBinding86 = [1, 30],
      c4DiagramYG6GDRKOBinding87 = [1, 31],
      c4DiagramYG6GDRKOBinding88 = [1, 32],
      c4DiagramYG6GDRKOBinding89 = [1, 33],
      c4DiagramYG6GDRKOBinding90 = [1, 34],
      c4DiagramYG6GDRKOBinding91 = [1, 35],
      c4DiagramYG6GDRKOBinding92 = [1, 36],
      c4DiagramYG6GDRKOBinding93 = [1, 37],
      c4DiagramYG6GDRKOBinding94 = [1, 38],
      c4DiagramYG6GDRKOBinding95 = [1, 39],
      c4DiagramYG6GDRKOBinding96 = [1, 40],
      c4DiagramYG6GDRKOBinding97 = [1, 41],
      c4DiagramYG6GDRKOBinding98 = [1, 42],
      c4DiagramYG6GDRKOBinding99 = [1, 43],
      c4DiagramYG6GDRKOBinding100 = [1, 44],
      c4DiagramYG6GDRKOBinding101 = [1, 45],
      c4DiagramYG6GDRKOBinding102 = [1, 46],
      c4DiagramYG6GDRKOBinding103 = [1, 47],
      c4DiagramYG6GDRKOBinding104 = [1, 48],
      c4DiagramYG6GDRKOBinding105 = [1, 50],
      c4DiagramYG6GDRKOBinding106 = [1, 51],
      c4DiagramYG6GDRKOBinding107 = [1, 52],
      c4DiagramYG6GDRKOBinding108 = [1, 53],
      c4DiagramYG6GDRKOBinding109 = [1, 54],
      c4DiagramYG6GDRKOBinding110 = [1, 55],
      c4DiagramYG6GDRKOBinding111 = [1, 56],
      c4DiagramYG6GDRKOBinding112 = [1, 57],
      c4DiagramYG6GDRKOBinding113 = [1, 58],
      c4DiagramYG6GDRKOBinding114 = [1, 59],
      c4DiagramYG6GDRKOBinding115 = [1, 60],
      c4DiagramYG6GDRKOBinding116 = [14, 42],
      c4DiagramYG6GDRKOBinding117 = [
        14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74,
      ],
      c4DiagramYG6GDRKOBinding118 = [
        12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74,
      ],
      c4DiagramYG6GDRKOBinding119 = [1, 82],
      c4DiagramYG6GDRKOBinding120 = [1, 83],
      c4DiagramYG6GDRKOBinding121 = [1, 84],
      c4DiagramYG6GDRKOBinding122 = [1, 85],
      c4DiagramYG6GDRKOBinding123 = [12, 14, 42],
      c4DiagramYG6GDRKOBinding124 = [12, 14, 33, 42],
      c4DiagramYG6GDRKOBinding125 = [12, 14, 33, 42, 76, 77, 79, 80],
      c4DiagramYG6GDRKOBinding126 = [12, 33],
      c4DiagramYG6GDRKOBinding127 = [
        34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        73, 74,
      ],
      c4DiagramYG6GDRKOBinding128 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          mermaidDoc: 4,
          direction: 5,
          direction_tb: 6,
          direction_bt: 7,
          direction_rl: 8,
          direction_lr: 9,
          graphConfig: 10,
          C4_CONTEXT: 11,
          NEWLINE: 12,
          statements: 13,
          EOF: 14,
          C4_CONTAINER: 15,
          C4_COMPONENT: 16,
          C4_DYNAMIC: 17,
          C4_DEPLOYMENT: 18,
          otherStatements: 19,
          diagramStatements: 20,
          otherStatement: 21,
          title: 22,
          accDescription: 23,
          acc_title: 24,
          acc_title_value: 25,
          acc_descr: 26,
          acc_descr_value: 27,
          acc_descr_multiline_value: 28,
          boundaryStatement: 29,
          boundaryStartStatement: 30,
          boundaryStopStatement: 31,
          boundaryStart: 32,
          LBRACE: 33,
          ENTERPRISE_BOUNDARY: 34,
          attributes: 35,
          SYSTEM_BOUNDARY: 36,
          BOUNDARY: 37,
          CONTAINER_BOUNDARY: 38,
          NODE: 39,
          NODE_L: 40,
          NODE_R: 41,
          RBRACE: 42,
          diagramStatement: 43,
          PERSON: 44,
          PERSON_EXT: 45,
          SYSTEM: 46,
          SYSTEM_DB: 47,
          SYSTEM_QUEUE: 48,
          SYSTEM_EXT: 49,
          SYSTEM_EXT_DB: 50,
          SYSTEM_EXT_QUEUE: 51,
          CONTAINER: 52,
          CONTAINER_DB: 53,
          CONTAINER_QUEUE: 54,
          CONTAINER_EXT: 55,
          CONTAINER_EXT_DB: 56,
          CONTAINER_EXT_QUEUE: 57,
          COMPONENT: 58,
          COMPONENT_DB: 59,
          COMPONENT_QUEUE: 60,
          COMPONENT_EXT: 61,
          COMPONENT_EXT_DB: 62,
          COMPONENT_EXT_QUEUE: 63,
          REL: 64,
          BIREL: 65,
          REL_U: 66,
          REL_D: 67,
          REL_L: 68,
          REL_R: 69,
          REL_B: 70,
          REL_INDEX: 71,
          UPDATE_EL_STYLE: 72,
          UPDATE_REL_STYLE: 73,
          UPDATE_LAYOUT_CONFIG: 74,
          attribute: 75,
          STR: 76,
          STR_KEY: 77,
          STR_VALUE: 78,
          ATTRIBUTE: 79,
          ATTRIBUTE_EMPTY: 80,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          6: "direction_tb",
          7: "direction_bt",
          8: "direction_rl",
          9: "direction_lr",
          11: "C4_CONTEXT",
          12: "NEWLINE",
          14: "EOF",
          15: "C4_CONTAINER",
          16: "C4_COMPONENT",
          17: "C4_DYNAMIC",
          18: "C4_DEPLOYMENT",
          22: "title",
          23: "accDescription",
          24: "acc_title",
          25: "acc_title_value",
          26: "acc_descr",
          27: "acc_descr_value",
          28: "acc_descr_multiline_value",
          33: "LBRACE",
          34: "ENTERPRISE_BOUNDARY",
          36: "SYSTEM_BOUNDARY",
          37: "BOUNDARY",
          38: "CONTAINER_BOUNDARY",
          39: "NODE",
          40: "NODE_L",
          41: "NODE_R",
          42: "RBRACE",
          44: "PERSON",
          45: "PERSON_EXT",
          46: "SYSTEM",
          47: "SYSTEM_DB",
          48: "SYSTEM_QUEUE",
          49: "SYSTEM_EXT",
          50: "SYSTEM_EXT_DB",
          51: "SYSTEM_EXT_QUEUE",
          52: "CONTAINER",
          53: "CONTAINER_DB",
          54: "CONTAINER_QUEUE",
          55: "CONTAINER_EXT",
          56: "CONTAINER_EXT_DB",
          57: "CONTAINER_EXT_QUEUE",
          58: "COMPONENT",
          59: "COMPONENT_DB",
          60: "COMPONENT_QUEUE",
          61: "COMPONENT_EXT",
          62: "COMPONENT_EXT_DB",
          63: "COMPONENT_EXT_QUEUE",
          64: "REL",
          65: "BIREL",
          66: "REL_U",
          67: "REL_D",
          68: "REL_L",
          69: "REL_R",
          70: "REL_B",
          71: "REL_INDEX",
          72: "UPDATE_EL_STYLE",
          73: "UPDATE_REL_STYLE",
          74: "UPDATE_LAYOUT_CONFIG",
          76: "STR",
          77: "STR_KEY",
          78: "STR_VALUE",
          79: "ATTRIBUTE",
          80: "ATTRIBUTE_EMPTY",
        },
        productions_: [
          0,
          [3, 1],
          [3, 1],
          [5, 1],
          [5, 1],
          [5, 1],
          [5, 1],
          [4, 1],
          [10, 4],
          [10, 4],
          [10, 4],
          [10, 4],
          [10, 4],
          [13, 1],
          [13, 1],
          [13, 2],
          [19, 1],
          [19, 2],
          [19, 3],
          [21, 1],
          [21, 1],
          [21, 2],
          [21, 2],
          [21, 1],
          [29, 3],
          [30, 3],
          [30, 3],
          [30, 4],
          [32, 2],
          [32, 2],
          [32, 2],
          [32, 2],
          [32, 2],
          [32, 2],
          [32, 2],
          [31, 1],
          [20, 1],
          [20, 2],
          [20, 3],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 1],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [43, 2],
          [35, 1],
          [35, 2],
          [75, 1],
          [75, 2],
          [75, 1],
          [75, 1],
        ],
        performAction: defineFunctionName(function (
          c4DiagramYG6GDRKOInput5,
          c4DiagramYG6GDRKOInput6,
          c4DiagramYG6GDRKOInput7,
          c4DiagramYG6GDRKOInput8,
          c4DiagramYG6GDRKOInput9,
          c4DiagramYG6GDRKOInput10,
          c4DiagramYG6GDRKOInput11,
        ) {
          var c4DiagramYG6GDRKOBinding137 = c4DiagramYG6GDRKOInput10.length - 1;
          switch (c4DiagramYG6GDRKOInput9) {
            case 3:
              c4DiagramYG6GDRKOInput8.setDirection("TB");
              break;
            case 4:
              c4DiagramYG6GDRKOInput8.setDirection("BT");
              break;
            case 5:
              c4DiagramYG6GDRKOInput8.setDirection("RL");
              break;
            case 6:
              c4DiagramYG6GDRKOInput8.setDirection("LR");
              break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
              c4DiagramYG6GDRKOInput8.setC4Type(
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137 - 3],
              );
              break;
            case 19:
              c4DiagramYG6GDRKOInput8.setTitle(
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].substring(
                  6,
                ),
              );
              this.$ =
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].substring(
                  6,
                );
              break;
            case 20:
              c4DiagramYG6GDRKOInput8.setAccDescription(
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].substring(
                  15,
                ),
              );
              this.$ =
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].substring(
                  15,
                );
              break;
            case 21:
              this.$ =
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].trim();
              c4DiagramYG6GDRKOInput8.setTitle(this.$);
              break;
            case 22:
            case 23:
              this.$ =
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].trim();
              c4DiagramYG6GDRKOInput8.setAccDescription(this.$);
              break;
            case 28:
              c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].splice(
                2,
                0,
                "ENTERPRISE",
              );
              c4DiagramYG6GDRKOInput8.addPersonOrSystemBoundary(
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 29:
              c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].splice(
                2,
                0,
                "SYSTEM",
              );
              c4DiagramYG6GDRKOInput8.addPersonOrSystemBoundary(
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 30:
              c4DiagramYG6GDRKOInput8.addPersonOrSystemBoundary(
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 31:
              c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].splice(
                2,
                0,
                "CONTAINER",
              );
              c4DiagramYG6GDRKOInput8.addContainerBoundary(
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 32:
              c4DiagramYG6GDRKOInput8.addDeploymentNode(
                "node",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 33:
              c4DiagramYG6GDRKOInput8.addDeploymentNode(
                "nodeL",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 34:
              c4DiagramYG6GDRKOInput8.addDeploymentNode(
                "nodeR",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 35:
              c4DiagramYG6GDRKOInput8.popBoundaryParseStack();
              break;
            case 39:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "person",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 40:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "external_person",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 41:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "system",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 42:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "system_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 43:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "system_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 44:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "external_system",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 45:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "external_system_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 46:
              c4DiagramYG6GDRKOInput8.addPersonOrSystem(
                "external_system_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 47:
              c4DiagramYG6GDRKOInput8.addContainer(
                "container",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 48:
              c4DiagramYG6GDRKOInput8.addContainer(
                "container_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 49:
              c4DiagramYG6GDRKOInput8.addContainer(
                "container_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 50:
              c4DiagramYG6GDRKOInput8.addContainer(
                "external_container",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 51:
              c4DiagramYG6GDRKOInput8.addContainer(
                "external_container_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 52:
              c4DiagramYG6GDRKOInput8.addContainer(
                "external_container_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 53:
              c4DiagramYG6GDRKOInput8.addComponent(
                "component",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 54:
              c4DiagramYG6GDRKOInput8.addComponent(
                "component_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 55:
              c4DiagramYG6GDRKOInput8.addComponent(
                "component_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 56:
              c4DiagramYG6GDRKOInput8.addComponent(
                "external_component",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 57:
              c4DiagramYG6GDRKOInput8.addComponent(
                "external_component_db",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 58:
              c4DiagramYG6GDRKOInput8.addComponent(
                "external_component_queue",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 60:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 61:
              c4DiagramYG6GDRKOInput8.addRel(
                "birel",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 62:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel_u",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 63:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel_d",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 64:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel_l",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 65:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel_r",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 66:
              c4DiagramYG6GDRKOInput8.addRel(
                "rel_b",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 67:
              c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].splice(
                0,
                1,
              );
              c4DiagramYG6GDRKOInput8.addRel(
                "rel",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 68:
              c4DiagramYG6GDRKOInput8.updateElStyle(
                "update_el_style",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 69:
              c4DiagramYG6GDRKOInput8.updateRelStyle(
                "update_rel_style",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 70:
              c4DiagramYG6GDRKOInput8.updateLayoutConfig(
                "update_layout_config",
                ...c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 71:
              this.$ = [c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137]];
              break;
            case 72:
              c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].unshift(
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137 - 1],
              );
              this.$ = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137];
              break;
            case 73:
            case 75:
              this.$ =
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].trim();
              break;
            case 74:
              let c4DiagramYG6GDRKOBinding138 = {};
              c4DiagramYG6GDRKOBinding138[
                c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137 - 1].trim()
              ] = c4DiagramYG6GDRKOInput10[c4DiagramYG6GDRKOBinding137].trim();
              this.$ = c4DiagramYG6GDRKOBinding138;
              break;
            case 76:
              this.$ = "";
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: 2,
            5: 3,
            6: [1, 5],
            7: [1, 6],
            8: [1, 7],
            9: [1, 8],
            10: 4,
            11: [1, 9],
            15: [1, 10],
            16: [1, 11],
            17: [1, 12],
            18: [1, 13],
          },
          {
            1: [3],
          },
          {
            1: [2, 1],
          },
          {
            1: [2, 2],
          },
          {
            1: [2, 7],
          },
          {
            1: [2, 3],
          },
          {
            1: [2, 4],
          },
          {
            1: [2, 5],
          },
          {
            1: [2, 6],
          },
          {
            12: [1, 14],
          },
          {
            12: [1, 15],
          },
          {
            12: [1, 16],
          },
          {
            12: [1, 17],
          },
          {
            12: [1, 18],
          },
          {
            13: 19,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            13: 70,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            13: 71,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            13: 72,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            13: 73,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            14: [1, 74],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 13], {
            43: 23,
            29: 49,
            30: 61,
            32: 62,
            20: 75,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 14]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding117, [2, 16], {
            12: [1, 76],
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 36], {
            12: [1, 77],
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding118, [2, 19]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding118, [2, 20]),
          {
            25: [1, 78],
          },
          {
            27: [1, 79],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding118, [2, 23]),
          {
            35: 80,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 86,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 87,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 88,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 89,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 90,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 91,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 92,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 93,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 94,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 95,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 96,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 97,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 98,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 99,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 100,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 101,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 102,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 103,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 104,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 59]),
          {
            35: 105,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 106,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 107,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 108,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 109,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 110,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 111,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 112,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 113,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 114,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 115,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            20: 116,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            43: 23,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          },
          {
            12: [1, 118],
            33: [1, 117],
          },
          {
            35: 119,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 120,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 121,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 122,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 123,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 124,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            35: 125,
            75: 81,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          },
          {
            14: [1, 126],
          },
          {
            14: [1, 127],
          },
          {
            14: [1, 128],
          },
          {
            14: [1, 129],
          },
          {
            1: [2, 8],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 15]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding117, [2, 17], {
            21: 22,
            19: 130,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 37], {
            19: 20,
            20: 21,
            21: 22,
            43: 23,
            29: 49,
            30: 61,
            32: 62,
            13: 131,
            22: c4DiagramYG6GDRKOBinding73,
            23: c4DiagramYG6GDRKOBinding74,
            24: c4DiagramYG6GDRKOBinding75,
            26: c4DiagramYG6GDRKOBinding76,
            28: c4DiagramYG6GDRKOBinding77,
            34: c4DiagramYG6GDRKOBinding78,
            36: c4DiagramYG6GDRKOBinding79,
            37: c4DiagramYG6GDRKOBinding80,
            38: c4DiagramYG6GDRKOBinding81,
            39: c4DiagramYG6GDRKOBinding82,
            40: c4DiagramYG6GDRKOBinding83,
            41: c4DiagramYG6GDRKOBinding84,
            44: c4DiagramYG6GDRKOBinding85,
            45: c4DiagramYG6GDRKOBinding86,
            46: c4DiagramYG6GDRKOBinding87,
            47: c4DiagramYG6GDRKOBinding88,
            48: c4DiagramYG6GDRKOBinding89,
            49: c4DiagramYG6GDRKOBinding90,
            50: c4DiagramYG6GDRKOBinding91,
            51: c4DiagramYG6GDRKOBinding92,
            52: c4DiagramYG6GDRKOBinding93,
            53: c4DiagramYG6GDRKOBinding94,
            54: c4DiagramYG6GDRKOBinding95,
            55: c4DiagramYG6GDRKOBinding96,
            56: c4DiagramYG6GDRKOBinding97,
            57: c4DiagramYG6GDRKOBinding98,
            58: c4DiagramYG6GDRKOBinding99,
            59: c4DiagramYG6GDRKOBinding100,
            60: c4DiagramYG6GDRKOBinding101,
            61: c4DiagramYG6GDRKOBinding102,
            62: c4DiagramYG6GDRKOBinding103,
            63: c4DiagramYG6GDRKOBinding104,
            64: c4DiagramYG6GDRKOBinding105,
            65: c4DiagramYG6GDRKOBinding106,
            66: c4DiagramYG6GDRKOBinding107,
            67: c4DiagramYG6GDRKOBinding108,
            68: c4DiagramYG6GDRKOBinding109,
            69: c4DiagramYG6GDRKOBinding110,
            70: c4DiagramYG6GDRKOBinding111,
            71: c4DiagramYG6GDRKOBinding112,
            72: c4DiagramYG6GDRKOBinding113,
            73: c4DiagramYG6GDRKOBinding114,
            74: c4DiagramYG6GDRKOBinding115,
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding118, [2, 21]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding118, [2, 22]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 39]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding124, [2, 71], {
            75: 81,
            35: 132,
            76: c4DiagramYG6GDRKOBinding119,
            77: c4DiagramYG6GDRKOBinding120,
            79: c4DiagramYG6GDRKOBinding121,
            80: c4DiagramYG6GDRKOBinding122,
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding125, [2, 73]),
          {
            78: [1, 133],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding125, [2, 75]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding125, [2, 76]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 40]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 41]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 42]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 43]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 44]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 45]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 46]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 47]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 48]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 49]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 50]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 51]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 52]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 53]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 54]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 55]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 56]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 57]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 58]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 60]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 61]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 62]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 63]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 64]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 65]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 66]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 67]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 68]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 69]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 70]),
          {
            31: 134,
            42: [1, 135],
          },
          {
            12: [1, 136],
          },
          {
            33: [1, 137],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 28]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 29]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 30]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 31]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 32]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 33]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding126, [2, 34]),
          {
            1: [2, 9],
          },
          {
            1: [2, 10],
          },
          {
            1: [2, 11],
          },
          {
            1: [2, 12],
          },
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding117, [2, 18]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding116, [2, 38]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding124, [2, 72]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding125, [2, 74]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 24]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding123, [2, 35]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding127, [2, 25]),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding127, [2, 26], {
            12: [1, 138],
          }),
          c4DiagramYG6GDRKOBinding72(c4DiagramYG6GDRKOBinding127, [2, 27]),
        ],
        defaultActions: {
          2: [2, 1],
          3: [2, 2],
          4: [2, 7],
          5: [2, 3],
          6: [2, 4],
          7: [2, 5],
          8: [2, 6],
          74: [2, 8],
          126: [2, 9],
          127: [2, 10],
          128: [2, 11],
          129: [2, 12],
        },
        parseError: defineFunctionName(function (
          c4DiagramYG6GDRKOInput173,
          c4DiagramYG6GDRKOInput174,
        ) {
          if (c4DiagramYG6GDRKOInput174.recoverable)
            this.trace(c4DiagramYG6GDRKOInput173);
          else {
            var c4DiagramYG6GDRKOBinding289 = Error(c4DiagramYG6GDRKOInput173);
            throw (
              (c4DiagramYG6GDRKOBinding289.hash = c4DiagramYG6GDRKOInput174),
              c4DiagramYG6GDRKOBinding289
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (c4DiagramYG6GDRKOInput16) {
          var c4DiagramYG6GDRKOBinding139 = this,
            c4DiagramYG6GDRKOBinding140 = [0],
            c4DiagramYG6GDRKOBinding141 = [],
            c4DiagramYG6GDRKOBinding142 = [null],
            c4DiagramYG6GDRKOBinding143 = [],
            c4DiagramYG6GDRKOBinding144 = this.table,
            c4DiagramYG6GDRKOBinding145 = "",
            c4DiagramYG6GDRKOBinding146 = 0,
            c4DiagramYG6GDRKOBinding147 = 0,
            c4DiagramYG6GDRKOBinding148 = 0,
            c4DiagramYG6GDRKOBinding151 =
              c4DiagramYG6GDRKOBinding143.slice.call(arguments, 1),
            c4DiagramYG6GDRKOBinding152 = Object.create(this.lexer),
            c4DiagramYG6GDRKOBinding153 = {
              yy: {},
            };
          for (var c4DiagramYG6GDRKOBinding154 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              c4DiagramYG6GDRKOBinding154,
            ) &&
              (c4DiagramYG6GDRKOBinding153.yy[c4DiagramYG6GDRKOBinding154] =
                this.yy[c4DiagramYG6GDRKOBinding154]);
          c4DiagramYG6GDRKOBinding152.setInput(
            c4DiagramYG6GDRKOInput16,
            c4DiagramYG6GDRKOBinding153.yy,
          );
          c4DiagramYG6GDRKOBinding153.yy.lexer = c4DiagramYG6GDRKOBinding152;
          c4DiagramYG6GDRKOBinding153.yy.parser = this;
          c4DiagramYG6GDRKOBinding152.yylloc === undefined &&
            (c4DiagramYG6GDRKOBinding152.yylloc = {});
          var c4DiagramYG6GDRKOBinding155 = c4DiagramYG6GDRKOBinding152.yylloc;
          c4DiagramYG6GDRKOBinding143.push(c4DiagramYG6GDRKOBinding155);
          var c4DiagramYG6GDRKOBinding156 =
            c4DiagramYG6GDRKOBinding152.options &&
            c4DiagramYG6GDRKOBinding152.options.ranges;
          typeof c4DiagramYG6GDRKOBinding153.yy.parseError == "function"
            ? (this.parseError = c4DiagramYG6GDRKOBinding153.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function c4DiagramYG6GDRKOHelper4(c4DiagramYG6GDRKOInput188) {
            c4DiagramYG6GDRKOBinding140.length -= 2 * c4DiagramYG6GDRKOInput188;
            c4DiagramYG6GDRKOBinding142.length -= c4DiagramYG6GDRKOInput188;
            c4DiagramYG6GDRKOBinding143.length -= c4DiagramYG6GDRKOInput188;
          }
          defineFunctionName(c4DiagramYG6GDRKOHelper4, "popStack");
          function c4DiagramYG6GDRKOHelper5() {
            var c4DiagramYG6GDRKOBinding279 =
              c4DiagramYG6GDRKOBinding141.pop() ||
              c4DiagramYG6GDRKOBinding152.lex() ||
              1;
            return (
              typeof c4DiagramYG6GDRKOBinding279 != "number" &&
                (c4DiagramYG6GDRKOBinding279 instanceof Array &&
                  ((c4DiagramYG6GDRKOBinding141 = c4DiagramYG6GDRKOBinding279),
                  (c4DiagramYG6GDRKOBinding279 =
                    c4DiagramYG6GDRKOBinding141.pop())),
                (c4DiagramYG6GDRKOBinding279 =
                  c4DiagramYG6GDRKOBinding139.symbols_[
                    c4DiagramYG6GDRKOBinding279
                  ] || c4DiagramYG6GDRKOBinding279)),
              c4DiagramYG6GDRKOBinding279
            );
          }
          defineFunctionName(c4DiagramYG6GDRKOHelper5, "lex");
          for (
            var c4DiagramYG6GDRKOBinding157,
              c4DiagramYG6GDRKOBinding158,
              c4DiagramYG6GDRKOBinding159,
              c4DiagramYG6GDRKOBinding160,
              c4DiagramYG6GDRKOBinding161,
              c4DiagramYG6GDRKOBinding162 = {},
              c4DiagramYG6GDRKOBinding163,
              c4DiagramYG6GDRKOBinding164,
              c4DiagramYG6GDRKOBinding165,
              c4DiagramYG6GDRKOBinding166;
            ;
          ) {
            if (
              ((c4DiagramYG6GDRKOBinding159 =
                c4DiagramYG6GDRKOBinding140[
                  c4DiagramYG6GDRKOBinding140.length - 1
                ]),
              this.defaultActions[c4DiagramYG6GDRKOBinding159]
                ? (c4DiagramYG6GDRKOBinding160 =
                    this.defaultActions[c4DiagramYG6GDRKOBinding159])
                : ((c4DiagramYG6GDRKOBinding157 ??= c4DiagramYG6GDRKOHelper5()),
                  (c4DiagramYG6GDRKOBinding160 =
                    c4DiagramYG6GDRKOBinding144[c4DiagramYG6GDRKOBinding159] &&
                    c4DiagramYG6GDRKOBinding144[c4DiagramYG6GDRKOBinding159][
                      c4DiagramYG6GDRKOBinding157
                    ])),
              c4DiagramYG6GDRKOBinding160 === undefined ||
                !c4DiagramYG6GDRKOBinding160.length ||
                !c4DiagramYG6GDRKOBinding160[0])
            ) {
              var c4DiagramYG6GDRKOBinding167 = "";
              for (c4DiagramYG6GDRKOBinding163 in ((c4DiagramYG6GDRKOBinding166 =
                []),
              c4DiagramYG6GDRKOBinding144[c4DiagramYG6GDRKOBinding159]))
                this.terminals_[c4DiagramYG6GDRKOBinding163] &&
                  c4DiagramYG6GDRKOBinding163 > 2 &&
                  c4DiagramYG6GDRKOBinding166.push(
                    "'" + this.terminals_[c4DiagramYG6GDRKOBinding163] + "'",
                  );
              c4DiagramYG6GDRKOBinding167 =
                c4DiagramYG6GDRKOBinding152.showPosition
                  ? "Parse error on line " +
                    (c4DiagramYG6GDRKOBinding146 + 1) +
                    ":\n" +
                    c4DiagramYG6GDRKOBinding152.showPosition() +
                    "\nExpecting " +
                    c4DiagramYG6GDRKOBinding166.join(", ") +
                    ", got '" +
                    (this.terminals_[c4DiagramYG6GDRKOBinding157] ||
                      c4DiagramYG6GDRKOBinding157) +
                    "'"
                  : "Parse error on line " +
                    (c4DiagramYG6GDRKOBinding146 + 1) +
                    ": Unexpected " +
                    (c4DiagramYG6GDRKOBinding157 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[c4DiagramYG6GDRKOBinding157] ||
                          c4DiagramYG6GDRKOBinding157) +
                        "'");
              this.parseError(c4DiagramYG6GDRKOBinding167, {
                text: c4DiagramYG6GDRKOBinding152.match,
                token:
                  this.terminals_[c4DiagramYG6GDRKOBinding157] ||
                  c4DiagramYG6GDRKOBinding157,
                line: c4DiagramYG6GDRKOBinding152.yylineno,
                loc: c4DiagramYG6GDRKOBinding155,
                expected: c4DiagramYG6GDRKOBinding166,
              });
            }
            if (
              c4DiagramYG6GDRKOBinding160[0] instanceof Array &&
              c4DiagramYG6GDRKOBinding160.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  c4DiagramYG6GDRKOBinding159 +
                  ", token: " +
                  c4DiagramYG6GDRKOBinding157,
              );
            switch (c4DiagramYG6GDRKOBinding160[0]) {
              case 1:
                c4DiagramYG6GDRKOBinding140.push(c4DiagramYG6GDRKOBinding157);
                c4DiagramYG6GDRKOBinding142.push(
                  c4DiagramYG6GDRKOBinding152.yytext,
                );
                c4DiagramYG6GDRKOBinding143.push(
                  c4DiagramYG6GDRKOBinding152.yylloc,
                );
                c4DiagramYG6GDRKOBinding140.push(
                  c4DiagramYG6GDRKOBinding160[1],
                );
                c4DiagramYG6GDRKOBinding157 = null;
                c4DiagramYG6GDRKOBinding158
                  ? ((c4DiagramYG6GDRKOBinding157 =
                      c4DiagramYG6GDRKOBinding158),
                    (c4DiagramYG6GDRKOBinding158 = null))
                  : ((c4DiagramYG6GDRKOBinding147 =
                      c4DiagramYG6GDRKOBinding152.yyleng),
                    (c4DiagramYG6GDRKOBinding145 =
                      c4DiagramYG6GDRKOBinding152.yytext),
                    (c4DiagramYG6GDRKOBinding146 =
                      c4DiagramYG6GDRKOBinding152.yylineno),
                    (c4DiagramYG6GDRKOBinding155 =
                      c4DiagramYG6GDRKOBinding152.yylloc),
                    c4DiagramYG6GDRKOBinding148 > 0 &&
                      c4DiagramYG6GDRKOBinding148--);
                break;
              case 2:
                if (
                  ((c4DiagramYG6GDRKOBinding164 =
                    this.productions_[c4DiagramYG6GDRKOBinding160[1]][1]),
                  (c4DiagramYG6GDRKOBinding162.$ =
                    c4DiagramYG6GDRKOBinding142[
                      c4DiagramYG6GDRKOBinding142.length -
                        c4DiagramYG6GDRKOBinding164
                    ]),
                  (c4DiagramYG6GDRKOBinding162._$ = {
                    first_line:
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length -
                          (c4DiagramYG6GDRKOBinding164 || 1)
                      ].first_line,
                    last_line:
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length - 1
                      ].last_line,
                    first_column:
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length -
                          (c4DiagramYG6GDRKOBinding164 || 1)
                      ].first_column,
                    last_column:
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length - 1
                      ].last_column,
                  }),
                  c4DiagramYG6GDRKOBinding156 &&
                    (c4DiagramYG6GDRKOBinding162._$.range = [
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length -
                          (c4DiagramYG6GDRKOBinding164 || 1)
                      ].range[0],
                      c4DiagramYG6GDRKOBinding143[
                        c4DiagramYG6GDRKOBinding143.length - 1
                      ].range[1],
                    ]),
                  (c4DiagramYG6GDRKOBinding161 = this.performAction.apply(
                    c4DiagramYG6GDRKOBinding162,
                    [
                      c4DiagramYG6GDRKOBinding145,
                      c4DiagramYG6GDRKOBinding147,
                      c4DiagramYG6GDRKOBinding146,
                      c4DiagramYG6GDRKOBinding153.yy,
                      c4DiagramYG6GDRKOBinding160[1],
                      c4DiagramYG6GDRKOBinding142,
                      c4DiagramYG6GDRKOBinding143,
                    ].concat(c4DiagramYG6GDRKOBinding151),
                  )),
                  c4DiagramYG6GDRKOBinding161 !== undefined)
                )
                  return c4DiagramYG6GDRKOBinding161;
                c4DiagramYG6GDRKOBinding164 &&
                  ((c4DiagramYG6GDRKOBinding140 =
                    c4DiagramYG6GDRKOBinding140.slice(
                      0,
                      -1 * c4DiagramYG6GDRKOBinding164 * 2,
                    )),
                  (c4DiagramYG6GDRKOBinding142 =
                    c4DiagramYG6GDRKOBinding142.slice(
                      0,
                      -1 * c4DiagramYG6GDRKOBinding164,
                    )),
                  (c4DiagramYG6GDRKOBinding143 =
                    c4DiagramYG6GDRKOBinding143.slice(
                      0,
                      -1 * c4DiagramYG6GDRKOBinding164,
                    )));
                c4DiagramYG6GDRKOBinding140.push(
                  this.productions_[c4DiagramYG6GDRKOBinding160[1]][0],
                );
                c4DiagramYG6GDRKOBinding142.push(c4DiagramYG6GDRKOBinding162.$);
                c4DiagramYG6GDRKOBinding143.push(
                  c4DiagramYG6GDRKOBinding162._$,
                );
                c4DiagramYG6GDRKOBinding165 =
                  c4DiagramYG6GDRKOBinding144[
                    c4DiagramYG6GDRKOBinding140[
                      c4DiagramYG6GDRKOBinding140.length - 2
                    ]
                  ][
                    c4DiagramYG6GDRKOBinding140[
                      c4DiagramYG6GDRKOBinding140.length - 1
                    ]
                  ];
                c4DiagramYG6GDRKOBinding140.push(c4DiagramYG6GDRKOBinding165);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    c4DiagramYG6GDRKOBinding128.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          c4DiagramYG6GDRKOInput182,
          c4DiagramYG6GDRKOInput183,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              c4DiagramYG6GDRKOInput182,
              c4DiagramYG6GDRKOInput183,
            );
          else throw Error(c4DiagramYG6GDRKOInput182);
        }, "parseError"),
        setInput: defineFunctionName(function (
          c4DiagramYG6GDRKOInput123,
          c4DiagramYG6GDRKOInput124,
        ) {
          return (
            (this.yy = c4DiagramYG6GDRKOInput124 || this.yy || {}),
            (this._input = c4DiagramYG6GDRKOInput123),
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
          var c4DiagramYG6GDRKOBinding270 = this._input[0];
          return (
            (this.yytext += c4DiagramYG6GDRKOBinding270),
            this.yyleng++,
            this.offset++,
            (this.match += c4DiagramYG6GDRKOBinding270),
            (this.matched += c4DiagramYG6GDRKOBinding270),
            c4DiagramYG6GDRKOBinding270.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            c4DiagramYG6GDRKOBinding270
          );
        }, "input"),
        unput: defineFunctionName(function (c4DiagramYG6GDRKOInput52) {
          var c4DiagramYG6GDRKOBinding237 = c4DiagramYG6GDRKOInput52.length,
            c4DiagramYG6GDRKOBinding238 =
              c4DiagramYG6GDRKOInput52.split(/(?:\r\n?|\n)/g);
          this._input = c4DiagramYG6GDRKOInput52 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - c4DiagramYG6GDRKOBinding237,
          );
          this.offset -= c4DiagramYG6GDRKOBinding237;
          var c4DiagramYG6GDRKOBinding239 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          c4DiagramYG6GDRKOBinding238.length - 1 &&
            (this.yylineno -= c4DiagramYG6GDRKOBinding238.length - 1);
          var c4DiagramYG6GDRKOBinding240 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: c4DiagramYG6GDRKOBinding238
                ? (c4DiagramYG6GDRKOBinding238.length ===
                  c4DiagramYG6GDRKOBinding239.length
                    ? this.yylloc.first_column
                    : 0) +
                  c4DiagramYG6GDRKOBinding239[
                    c4DiagramYG6GDRKOBinding239.length -
                      c4DiagramYG6GDRKOBinding238.length
                  ].length -
                  c4DiagramYG6GDRKOBinding238[0].length
                : this.yylloc.first_column - c4DiagramYG6GDRKOBinding237,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                c4DiagramYG6GDRKOBinding240[0],
                c4DiagramYG6GDRKOBinding240[0] +
                  this.yyleng -
                  c4DiagramYG6GDRKOBinding237,
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
        less: defineFunctionName(function (c4DiagramYG6GDRKOInput199) {
          this.unput(this.match.slice(c4DiagramYG6GDRKOInput199));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var c4DiagramYG6GDRKOBinding282 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (c4DiagramYG6GDRKOBinding282.length > 20 ? "..." : "") +
            c4DiagramYG6GDRKOBinding282.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var c4DiagramYG6GDRKOBinding276 = this.match;
          return (
            c4DiagramYG6GDRKOBinding276.length < 20 &&
              (c4DiagramYG6GDRKOBinding276 += this._input.substr(
                0,
                20 - c4DiagramYG6GDRKOBinding276.length,
              )),
            (
              c4DiagramYG6GDRKOBinding276.substr(0, 20) +
              (c4DiagramYG6GDRKOBinding276.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var c4DiagramYG6GDRKOBinding285 = this.pastInput(),
            c4DiagramYG6GDRKOBinding286 = Array(
              c4DiagramYG6GDRKOBinding285.length + 1,
            ).join("-");
          return (
            c4DiagramYG6GDRKOBinding285 +
            this.upcomingInput() +
            "\n" +
            c4DiagramYG6GDRKOBinding286 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          c4DiagramYG6GDRKOInput20,
          c4DiagramYG6GDRKOInput21,
        ) {
          var c4DiagramYG6GDRKOBinding176,
            c4DiagramYG6GDRKOBinding177,
            c4DiagramYG6GDRKOBinding178;
          if (
            (this.options.backtrack_lexer &&
              ((c4DiagramYG6GDRKOBinding178 = {
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
                (c4DiagramYG6GDRKOBinding178.yylloc.range =
                  this.yylloc.range.slice(0))),
            (c4DiagramYG6GDRKOBinding177 =
              c4DiagramYG6GDRKOInput20[0].match(/(?:\r\n?|\n).*/g)),
            c4DiagramYG6GDRKOBinding177 &&
              (this.yylineno += c4DiagramYG6GDRKOBinding177.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: c4DiagramYG6GDRKOBinding177
                ? c4DiagramYG6GDRKOBinding177[
                    c4DiagramYG6GDRKOBinding177.length - 1
                  ].length -
                  c4DiagramYG6GDRKOBinding177[
                    c4DiagramYG6GDRKOBinding177.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + c4DiagramYG6GDRKOInput20[0].length,
            }),
            (this.yytext += c4DiagramYG6GDRKOInput20[0]),
            (this.match += c4DiagramYG6GDRKOInput20[0]),
            (this.matches = c4DiagramYG6GDRKOInput20),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              c4DiagramYG6GDRKOInput20[0].length,
            )),
            (this.matched += c4DiagramYG6GDRKOInput20[0]),
            (c4DiagramYG6GDRKOBinding176 = this.performAction.call(
              this,
              this.yy,
              this,
              c4DiagramYG6GDRKOInput21,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            c4DiagramYG6GDRKOBinding176)
          )
            return c4DiagramYG6GDRKOBinding176;
          if (this._backtrack) {
            for (var c4DiagramYG6GDRKOBinding179 in c4DiagramYG6GDRKOBinding178)
              this[c4DiagramYG6GDRKOBinding179] =
                c4DiagramYG6GDRKOBinding178[c4DiagramYG6GDRKOBinding179];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var c4DiagramYG6GDRKOBinding231,
            c4DiagramYG6GDRKOBinding232,
            c4DiagramYG6GDRKOBinding233,
            c4DiagramYG6GDRKOBinding234;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var c4DiagramYG6GDRKOBinding235 = this._currentRules(),
              c4DiagramYG6GDRKOBinding236 = 0;
            c4DiagramYG6GDRKOBinding236 < c4DiagramYG6GDRKOBinding235.length;
            c4DiagramYG6GDRKOBinding236++
          )
            if (
              ((c4DiagramYG6GDRKOBinding233 = this._input.match(
                this.rules[
                  c4DiagramYG6GDRKOBinding235[c4DiagramYG6GDRKOBinding236]
                ],
              )),
              c4DiagramYG6GDRKOBinding233 &&
                (!c4DiagramYG6GDRKOBinding232 ||
                  c4DiagramYG6GDRKOBinding233[0].length >
                    c4DiagramYG6GDRKOBinding232[0].length))
            ) {
              if (
                ((c4DiagramYG6GDRKOBinding232 = c4DiagramYG6GDRKOBinding233),
                (c4DiagramYG6GDRKOBinding234 = c4DiagramYG6GDRKOBinding236),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((c4DiagramYG6GDRKOBinding231 = this.test_match(
                    c4DiagramYG6GDRKOBinding233,
                    c4DiagramYG6GDRKOBinding235[c4DiagramYG6GDRKOBinding236],
                  )),
                  c4DiagramYG6GDRKOBinding231 !== false)
                )
                  return c4DiagramYG6GDRKOBinding231;
                if (this._backtrack) {
                  c4DiagramYG6GDRKOBinding232 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return c4DiagramYG6GDRKOBinding232
            ? ((c4DiagramYG6GDRKOBinding231 = this.test_match(
                c4DiagramYG6GDRKOBinding232,
                c4DiagramYG6GDRKOBinding235[c4DiagramYG6GDRKOBinding234],
              )),
              c4DiagramYG6GDRKOBinding231 === false
                ? false
                : c4DiagramYG6GDRKOBinding231)
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
        begin: defineFunctionName(function (c4DiagramYG6GDRKOInput200) {
          this.conditionStack.push(c4DiagramYG6GDRKOInput200);
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
        topState: defineFunctionName(function (c4DiagramYG6GDRKOInput172) {
          return (
            (c4DiagramYG6GDRKOInput172 =
              this.conditionStack.length -
              1 -
              Math.abs(c4DiagramYG6GDRKOInput172 || 0)),
            c4DiagramYG6GDRKOInput172 >= 0
              ? this.conditionStack[c4DiagramYG6GDRKOInput172]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (c4DiagramYG6GDRKOInput204) {
          this.begin(c4DiagramYG6GDRKOInput204);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: defineFunctionName(function (
          c4DiagramYG6GDRKOInput12,
          c4DiagramYG6GDRKOInput13,
          c4DiagramYG6GDRKOInput14,
          c4DiagramYG6GDRKOInput15,
        ) {
          switch (c4DiagramYG6GDRKOInput14) {
            case 0:
              return 6;
            case 1:
              return 7;
            case 2:
              return 8;
            case 3:
              return 9;
            case 4:
              return 22;
            case 5:
              return 23;
            case 6:
              return (this.begin("acc_title"), 24);
            case 7:
              return (this.popState(), "acc_title_value");
            case 8:
              return (this.begin("acc_descr"), 26);
            case 9:
              return (this.popState(), "acc_descr_value");
            case 10:
              this.begin("acc_descr_multiline");
              break;
            case 11:
              this.popState();
              break;
            case 12:
              return "acc_descr_multiline_value";
            case 13:
              break;
            case 14:
              c;
              break;
            case 15:
              return 12;
            case 16:
              break;
            case 17:
              return 11;
            case 18:
              return 15;
            case 19:
              return 16;
            case 20:
              return 17;
            case 21:
              return 18;
            case 22:
              return (this.begin("person_ext"), 45);
            case 23:
              return (this.begin("person"), 44);
            case 24:
              return (this.begin("system_ext_queue"), 51);
            case 25:
              return (this.begin("system_ext_db"), 50);
            case 26:
              return (this.begin("system_ext"), 49);
            case 27:
              return (this.begin("system_queue"), 48);
            case 28:
              return (this.begin("system_db"), 47);
            case 29:
              return (this.begin("system"), 46);
            case 30:
              return (this.begin("boundary"), 37);
            case 31:
              return (this.begin("enterprise_boundary"), 34);
            case 32:
              return (this.begin("system_boundary"), 36);
            case 33:
              return (this.begin("container_ext_queue"), 57);
            case 34:
              return (this.begin("container_ext_db"), 56);
            case 35:
              return (this.begin("container_ext"), 55);
            case 36:
              return (this.begin("container_queue"), 54);
            case 37:
              return (this.begin("container_db"), 53);
            case 38:
              return (this.begin("container"), 52);
            case 39:
              return (this.begin("container_boundary"), 38);
            case 40:
              return (this.begin("component_ext_queue"), 63);
            case 41:
              return (this.begin("component_ext_db"), 62);
            case 42:
              return (this.begin("component_ext"), 61);
            case 43:
              return (this.begin("component_queue"), 60);
            case 44:
              return (this.begin("component_db"), 59);
            case 45:
              return (this.begin("component"), 58);
            case 46:
              return (this.begin("node"), 39);
            case 47:
              return (this.begin("node"), 39);
            case 48:
              return (this.begin("node_l"), 40);
            case 49:
              return (this.begin("node_r"), 41);
            case 50:
              return (this.begin("rel"), 64);
            case 51:
              return (this.begin("birel"), 65);
            case 52:
              return (this.begin("rel_u"), 66);
            case 53:
              return (this.begin("rel_u"), 66);
            case 54:
              return (this.begin("rel_d"), 67);
            case 55:
              return (this.begin("rel_d"), 67);
            case 56:
              return (this.begin("rel_l"), 68);
            case 57:
              return (this.begin("rel_l"), 68);
            case 58:
              return (this.begin("rel_r"), 69);
            case 59:
              return (this.begin("rel_r"), 69);
            case 60:
              return (this.begin("rel_b"), 70);
            case 61:
              return (this.begin("rel_index"), 71);
            case 62:
              return (this.begin("update_el_style"), 72);
            case 63:
              return (this.begin("update_rel_style"), 73);
            case 64:
              return (this.begin("update_layout_config"), 74);
            case 65:
              return "EOF_IN_STRUCT";
            case 66:
              return (this.begin("attribute"), "ATTRIBUTE_EMPTY");
            case 67:
              this.begin("attribute");
              break;
            case 68:
              this.popState();
              this.popState();
              break;
            case 69:
              return 80;
            case 70:
              break;
            case 71:
              return 80;
            case 72:
              this.begin("string");
              break;
            case 73:
              this.popState();
              break;
            case 74:
              return "STR";
            case 75:
              this.begin("string_kv");
              break;
            case 76:
              return (this.begin("string_kv_key"), "STR_KEY");
            case 77:
              this.popState();
              this.begin("string_kv_value");
              break;
            case 78:
              return "STR_VALUE";
            case 79:
              this.popState();
              this.popState();
              break;
            case 80:
              return "STR";
            case 81:
              return "LBRACE";
            case 82:
              return "RBRACE";
            case 83:
              return "SPACE";
            case 84:
              return "EOL";
            case 85:
              return 14;
          }
        }, "anonymous"),
        rules: [
          /^(?:.*direction\s+TB[^\n]*)/,
          /^(?:.*direction\s+BT[^\n]*)/,
          /^(?:.*direction\s+RL[^\n]*)/,
          /^(?:.*direction\s+LR[^\n]*)/,
          /^(?:title\s[^#\n;]+)/,
          /^(?:accDescription\s[^#\n;]+)/,
          /^(?:accTitle\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*\{\s*)/,
          /^(?:[\}])/,
          /^(?:[^\}]*)/,
          /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,
          /^(?:%%[^\n]*(\r?\n)*)/,
          /^(?:\s*(\r?\n)+)/,
          /^(?:\s+)/,
          /^(?:C4Context\b)/,
          /^(?:C4Container\b)/,
          /^(?:C4Component\b)/,
          /^(?:C4Dynamic\b)/,
          /^(?:C4Deployment\b)/,
          /^(?:Person_Ext\b)/,
          /^(?:Person\b)/,
          /^(?:SystemQueue_Ext\b)/,
          /^(?:SystemDb_Ext\b)/,
          /^(?:System_Ext\b)/,
          /^(?:SystemQueue\b)/,
          /^(?:SystemDb\b)/,
          /^(?:System\b)/,
          /^(?:Boundary\b)/,
          /^(?:Enterprise_Boundary\b)/,
          /^(?:System_Boundary\b)/,
          /^(?:ContainerQueue_Ext\b)/,
          /^(?:ContainerDb_Ext\b)/,
          /^(?:Container_Ext\b)/,
          /^(?:ContainerQueue\b)/,
          /^(?:ContainerDb\b)/,
          /^(?:Container\b)/,
          /^(?:Container_Boundary\b)/,
          /^(?:ComponentQueue_Ext\b)/,
          /^(?:ComponentDb_Ext\b)/,
          /^(?:Component_Ext\b)/,
          /^(?:ComponentQueue\b)/,
          /^(?:ComponentDb\b)/,
          /^(?:Component\b)/,
          /^(?:Deployment_Node\b)/,
          /^(?:Node\b)/,
          /^(?:Node_L\b)/,
          /^(?:Node_R\b)/,
          /^(?:Rel\b)/,
          /^(?:BiRel\b)/,
          /^(?:Rel_Up\b)/,
          /^(?:Rel_U\b)/,
          /^(?:Rel_Down\b)/,
          /^(?:Rel_D\b)/,
          /^(?:Rel_Left\b)/,
          /^(?:Rel_L\b)/,
          /^(?:Rel_Right\b)/,
          /^(?:Rel_R\b)/,
          /^(?:Rel_Back\b)/,
          /^(?:RelIndex\b)/,
          /^(?:UpdateElementStyle\b)/,
          /^(?:UpdateRelStyle\b)/,
          /^(?:UpdateLayoutConfig\b)/,
          /^(?:$)/,
          /^(?:[(][ ]*[,])/,
          /^(?:[(])/,
          /^(?:[)])/,
          /^(?:,,)/,
          /^(?:,)/,
          /^(?:[ ]*["]["])/,
          /^(?:[ ]*["])/,
          /^(?:["])/,
          /^(?:[^"]*)/,
          /^(?:[ ]*[\$])/,
          /^(?:[^=]*)/,
          /^(?:[=][ ]*["])/,
          /^(?:[^"]+)/,
          /^(?:["])/,
          /^(?:[^,]+)/,
          /^(?:\{)/,
          /^(?:\})/,
          /^(?:[\s]+)/,
          /^(?:[\n\r]+)/,
          /^(?:$)/,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [11, 12],
            inclusive: false,
          },
          acc_descr: {
            rules: [9],
            inclusive: false,
          },
          acc_title: {
            rules: [7],
            inclusive: false,
          },
          string_kv_value: {
            rules: [78, 79],
            inclusive: false,
          },
          string_kv_key: {
            rules: [77],
            inclusive: false,
          },
          string_kv: {
            rules: [76],
            inclusive: false,
          },
          string: {
            rules: [73, 74],
            inclusive: false,
          },
          attribute: {
            rules: [68, 69, 70, 71, 72, 75, 80],
            inclusive: false,
          },
          update_layout_config: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          update_rel_style: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          update_el_style: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_b: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_r: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_l: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_d: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_u: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          rel_bi: {
            rules: [],
            inclusive: false,
          },
          rel: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          node_r: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          node_l: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          node: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          index: {
            rules: [],
            inclusive: false,
          },
          rel_index: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          component_ext_queue: {
            rules: [],
            inclusive: false,
          },
          component_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          component_ext: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          component_queue: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          component_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          component: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_ext_queue: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_ext: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_queue: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          container: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          birel: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          enterprise_boundary: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          boundary: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_ext_queue: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_ext_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_ext: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_queue: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system_db: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          system: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          person_ext: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          person: {
            rules: [65, 66, 67, 68],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
              38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
              54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 81, 82, 83, 84, 85,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function c4DiagramYG6GDRKOHelper3() {
      this.yy = {};
    }
    return (
      defineFunctionName(c4DiagramYG6GDRKOHelper3, "Parser"),
      (c4DiagramYG6GDRKOHelper3.prototype = c4DiagramYG6GDRKOBinding128),
      (c4DiagramYG6GDRKOBinding128.Parser = c4DiagramYG6GDRKOHelper3),
      new c4DiagramYG6GDRKOHelper3()
    );
  })();
  c4DiagramYG6GDRKOBinding2.parser = c4DiagramYG6GDRKOBinding2;
  c4DiagramYG6GDRKOBinding3 = c4DiagramYG6GDRKOBinding2;
  c4DiagramYG6GDRKOBinding4 = [];
  c4DiagramYG6GDRKOBinding5 = [""];
  c4DiagramYG6GDRKOBinding6 = "global";
  c4DiagramYG6GDRKOBinding7 = "";
  c4DiagramYG6GDRKOBinding8 = [
    {
      alias: "global",
      label: {
        text: "global",
      },
      type: {
        text: "global",
      },
      tags: null,
      link: null,
      parentBoundary: "",
    },
  ];
  c4DiagramYG6GDRKOBinding9 = [];
  c4DiagramYG6GDRKOBinding10 = "";
  c4DiagramYG6GDRKOBinding11 = false;
  c4DiagramYG6GDRKOBinding12 = 4;
  c4DiagramYG6GDRKOBinding13 = 2;
  c4DiagramYG6GDRKOBinding15 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding14;
  }, "getC4Type");
  c4DiagramYG6GDRKOBinding16 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput209,
  ) {
    c4DiagramYG6GDRKOBinding14 = L(
      c4DiagramYG6GDRKOInput209,
      _chunkABZYJK2DB(),
    );
  }, "setC4Type");
  c4DiagramYG6GDRKOBinding17 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput69,
    c4DiagramYG6GDRKOInput70,
    c4DiagramYG6GDRKOInput71,
    c4DiagramYG6GDRKOInput72,
    c4DiagramYG6GDRKOInput73,
    c4DiagramYG6GDRKOInput74,
    c4DiagramYG6GDRKOInput75,
    c4DiagramYG6GDRKOInput76,
    c4DiagramYG6GDRKOInput77,
  ) {
    if (
      c4DiagramYG6GDRKOInput69 == null ||
      c4DiagramYG6GDRKOInput70 == null ||
      c4DiagramYG6GDRKOInput71 == null ||
      c4DiagramYG6GDRKOInput72 == null
    )
      return;
    let c4DiagramYG6GDRKOBinding245 = {},
      c4DiagramYG6GDRKOBinding246 = c4DiagramYG6GDRKOBinding9.find(
        (item) =>
          item.from === c4DiagramYG6GDRKOInput70 &&
          item.to === c4DiagramYG6GDRKOInput71,
      );
    if (
      (c4DiagramYG6GDRKOBinding246
        ? (c4DiagramYG6GDRKOBinding245 = c4DiagramYG6GDRKOBinding246)
        : c4DiagramYG6GDRKOBinding9.push(c4DiagramYG6GDRKOBinding245),
      (c4DiagramYG6GDRKOBinding245.type = c4DiagramYG6GDRKOInput69),
      (c4DiagramYG6GDRKOBinding245.from = c4DiagramYG6GDRKOInput70),
      (c4DiagramYG6GDRKOBinding245.to = c4DiagramYG6GDRKOInput71),
      (c4DiagramYG6GDRKOBinding245.label = {
        text: c4DiagramYG6GDRKOInput72,
      }),
      c4DiagramYG6GDRKOInput73 == null)
    )
      c4DiagramYG6GDRKOBinding245.techn = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput73 == "object") {
      let [c4DiagramYG6GDRKOBinding320, c4DiagramYG6GDRKOBinding321] =
        Object.entries(c4DiagramYG6GDRKOInput73)[0];
      c4DiagramYG6GDRKOBinding245[c4DiagramYG6GDRKOBinding320] = {
        text: c4DiagramYG6GDRKOBinding321,
      };
    } else
      c4DiagramYG6GDRKOBinding245.techn = {
        text: c4DiagramYG6GDRKOInput73,
      };
    if (c4DiagramYG6GDRKOInput74 == null)
      c4DiagramYG6GDRKOBinding245.descr = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput74 == "object") {
      let [c4DiagramYG6GDRKOBinding322, c4DiagramYG6GDRKOBinding323] =
        Object.entries(c4DiagramYG6GDRKOInput74)[0];
      c4DiagramYG6GDRKOBinding245[c4DiagramYG6GDRKOBinding322] = {
        text: c4DiagramYG6GDRKOBinding323,
      };
    } else
      c4DiagramYG6GDRKOBinding245.descr = {
        text: c4DiagramYG6GDRKOInput74,
      };
    if (typeof c4DiagramYG6GDRKOInput75 == "object") {
      let [c4DiagramYG6GDRKOBinding344, c4DiagramYG6GDRKOBinding345] =
        Object.entries(c4DiagramYG6GDRKOInput75)[0];
      c4DiagramYG6GDRKOBinding245[c4DiagramYG6GDRKOBinding344] =
        c4DiagramYG6GDRKOBinding345;
    } else c4DiagramYG6GDRKOBinding245.sprite = c4DiagramYG6GDRKOInput75;
    if (typeof c4DiagramYG6GDRKOInput76 == "object") {
      let [c4DiagramYG6GDRKOBinding346, c4DiagramYG6GDRKOBinding347] =
        Object.entries(c4DiagramYG6GDRKOInput76)[0];
      c4DiagramYG6GDRKOBinding245[c4DiagramYG6GDRKOBinding346] =
        c4DiagramYG6GDRKOBinding347;
    } else c4DiagramYG6GDRKOBinding245.tags = c4DiagramYG6GDRKOInput76;
    if (typeof c4DiagramYG6GDRKOInput77 == "object") {
      let [c4DiagramYG6GDRKOBinding348, c4DiagramYG6GDRKOBinding349] =
        Object.entries(c4DiagramYG6GDRKOInput77)[0];
      c4DiagramYG6GDRKOBinding245[c4DiagramYG6GDRKOBinding348] =
        c4DiagramYG6GDRKOBinding349;
    } else c4DiagramYG6GDRKOBinding245.link = c4DiagramYG6GDRKOInput77;
    c4DiagramYG6GDRKOBinding245.wrap = c4DiagramYG6GDRKOBinding40();
  }, "addRel");
  c4DiagramYG6GDRKOBinding18 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput86,
    c4DiagramYG6GDRKOInput87,
    c4DiagramYG6GDRKOInput88,
    c4DiagramYG6GDRKOInput89,
    c4DiagramYG6GDRKOInput90,
    c4DiagramYG6GDRKOInput91,
    c4DiagramYG6GDRKOInput92,
  ) {
    if (c4DiagramYG6GDRKOInput87 === null || c4DiagramYG6GDRKOInput88 === null)
      return;
    let c4DiagramYG6GDRKOBinding250 = {},
      c4DiagramYG6GDRKOBinding251 = c4DiagramYG6GDRKOBinding4.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput87,
      );
    if (
      (c4DiagramYG6GDRKOBinding251 &&
      c4DiagramYG6GDRKOInput87 === c4DiagramYG6GDRKOBinding251.alias
        ? (c4DiagramYG6GDRKOBinding250 = c4DiagramYG6GDRKOBinding251)
        : ((c4DiagramYG6GDRKOBinding250.alias = c4DiagramYG6GDRKOInput87),
          c4DiagramYG6GDRKOBinding4.push(c4DiagramYG6GDRKOBinding250)),
      c4DiagramYG6GDRKOInput88 == null
        ? (c4DiagramYG6GDRKOBinding250.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding250.label = {
            text: c4DiagramYG6GDRKOInput88,
          }),
      c4DiagramYG6GDRKOInput89 == null)
    )
      c4DiagramYG6GDRKOBinding250.descr = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput89 == "object") {
      let [c4DiagramYG6GDRKOBinding324, c4DiagramYG6GDRKOBinding325] =
        Object.entries(c4DiagramYG6GDRKOInput89)[0];
      c4DiagramYG6GDRKOBinding250[c4DiagramYG6GDRKOBinding324] = {
        text: c4DiagramYG6GDRKOBinding325,
      };
    } else
      c4DiagramYG6GDRKOBinding250.descr = {
        text: c4DiagramYG6GDRKOInput89,
      };
    if (typeof c4DiagramYG6GDRKOInput90 == "object") {
      let [c4DiagramYG6GDRKOBinding350, c4DiagramYG6GDRKOBinding351] =
        Object.entries(c4DiagramYG6GDRKOInput90)[0];
      c4DiagramYG6GDRKOBinding250[c4DiagramYG6GDRKOBinding350] =
        c4DiagramYG6GDRKOBinding351;
    } else c4DiagramYG6GDRKOBinding250.sprite = c4DiagramYG6GDRKOInput90;
    if (typeof c4DiagramYG6GDRKOInput91 == "object") {
      let [c4DiagramYG6GDRKOBinding352, c4DiagramYG6GDRKOBinding353] =
        Object.entries(c4DiagramYG6GDRKOInput91)[0];
      c4DiagramYG6GDRKOBinding250[c4DiagramYG6GDRKOBinding352] =
        c4DiagramYG6GDRKOBinding353;
    } else c4DiagramYG6GDRKOBinding250.tags = c4DiagramYG6GDRKOInput91;
    if (typeof c4DiagramYG6GDRKOInput92 == "object") {
      let [c4DiagramYG6GDRKOBinding354, c4DiagramYG6GDRKOBinding355] =
        Object.entries(c4DiagramYG6GDRKOInput92)[0];
      c4DiagramYG6GDRKOBinding250[c4DiagramYG6GDRKOBinding354] =
        c4DiagramYG6GDRKOBinding355;
    } else c4DiagramYG6GDRKOBinding250.link = c4DiagramYG6GDRKOInput92;
    c4DiagramYG6GDRKOBinding250.typeC4Shape = {
      text: c4DiagramYG6GDRKOInput86,
    };
    c4DiagramYG6GDRKOBinding250.parentBoundary = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding250.wrap = c4DiagramYG6GDRKOBinding40();
  }, "addPersonOrSystem");
  c4DiagramYG6GDRKOBinding19 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput53,
    c4DiagramYG6GDRKOInput54,
    c4DiagramYG6GDRKOInput55,
    c4DiagramYG6GDRKOInput56,
    c4DiagramYG6GDRKOInput57,
    c4DiagramYG6GDRKOInput58,
    c4DiagramYG6GDRKOInput59,
    c4DiagramYG6GDRKOInput60,
  ) {
    if (c4DiagramYG6GDRKOInput54 === null || c4DiagramYG6GDRKOInput55 === null)
      return;
    let c4DiagramYG6GDRKOBinding241 = {},
      c4DiagramYG6GDRKOBinding242 = c4DiagramYG6GDRKOBinding4.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput54,
      );
    if (
      (c4DiagramYG6GDRKOBinding242 &&
      c4DiagramYG6GDRKOInput54 === c4DiagramYG6GDRKOBinding242.alias
        ? (c4DiagramYG6GDRKOBinding241 = c4DiagramYG6GDRKOBinding242)
        : ((c4DiagramYG6GDRKOBinding241.alias = c4DiagramYG6GDRKOInput54),
          c4DiagramYG6GDRKOBinding4.push(c4DiagramYG6GDRKOBinding241)),
      c4DiagramYG6GDRKOInput55 == null
        ? (c4DiagramYG6GDRKOBinding241.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding241.label = {
            text: c4DiagramYG6GDRKOInput55,
          }),
      c4DiagramYG6GDRKOInput56 == null)
    )
      c4DiagramYG6GDRKOBinding241.techn = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput56 == "object") {
      let [c4DiagramYG6GDRKOBinding326, c4DiagramYG6GDRKOBinding327] =
        Object.entries(c4DiagramYG6GDRKOInput56)[0];
      c4DiagramYG6GDRKOBinding241[c4DiagramYG6GDRKOBinding326] = {
        text: c4DiagramYG6GDRKOBinding327,
      };
    } else
      c4DiagramYG6GDRKOBinding241.techn = {
        text: c4DiagramYG6GDRKOInput56,
      };
    if (c4DiagramYG6GDRKOInput57 == null)
      c4DiagramYG6GDRKOBinding241.descr = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput57 == "object") {
      let [c4DiagramYG6GDRKOBinding328, c4DiagramYG6GDRKOBinding329] =
        Object.entries(c4DiagramYG6GDRKOInput57)[0];
      c4DiagramYG6GDRKOBinding241[c4DiagramYG6GDRKOBinding328] = {
        text: c4DiagramYG6GDRKOBinding329,
      };
    } else
      c4DiagramYG6GDRKOBinding241.descr = {
        text: c4DiagramYG6GDRKOInput57,
      };
    if (typeof c4DiagramYG6GDRKOInput58 == "object") {
      let [c4DiagramYG6GDRKOBinding356, c4DiagramYG6GDRKOBinding357] =
        Object.entries(c4DiagramYG6GDRKOInput58)[0];
      c4DiagramYG6GDRKOBinding241[c4DiagramYG6GDRKOBinding356] =
        c4DiagramYG6GDRKOBinding357;
    } else c4DiagramYG6GDRKOBinding241.sprite = c4DiagramYG6GDRKOInput58;
    if (typeof c4DiagramYG6GDRKOInput59 == "object") {
      let [c4DiagramYG6GDRKOBinding358, c4DiagramYG6GDRKOBinding359] =
        Object.entries(c4DiagramYG6GDRKOInput59)[0];
      c4DiagramYG6GDRKOBinding241[c4DiagramYG6GDRKOBinding358] =
        c4DiagramYG6GDRKOBinding359;
    } else c4DiagramYG6GDRKOBinding241.tags = c4DiagramYG6GDRKOInput59;
    if (typeof c4DiagramYG6GDRKOInput60 == "object") {
      let [c4DiagramYG6GDRKOBinding360, c4DiagramYG6GDRKOBinding361] =
        Object.entries(c4DiagramYG6GDRKOInput60)[0];
      c4DiagramYG6GDRKOBinding241[c4DiagramYG6GDRKOBinding360] =
        c4DiagramYG6GDRKOBinding361;
    } else c4DiagramYG6GDRKOBinding241.link = c4DiagramYG6GDRKOInput60;
    c4DiagramYG6GDRKOBinding241.wrap = c4DiagramYG6GDRKOBinding40();
    c4DiagramYG6GDRKOBinding241.typeC4Shape = {
      text: c4DiagramYG6GDRKOInput53,
    };
    c4DiagramYG6GDRKOBinding241.parentBoundary = c4DiagramYG6GDRKOBinding6;
  }, "addContainer");
  c4DiagramYG6GDRKOBinding20 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput61,
    c4DiagramYG6GDRKOInput62,
    c4DiagramYG6GDRKOInput63,
    c4DiagramYG6GDRKOInput64,
    c4DiagramYG6GDRKOInput65,
    c4DiagramYG6GDRKOInput66,
    c4DiagramYG6GDRKOInput67,
    c4DiagramYG6GDRKOInput68,
  ) {
    if (c4DiagramYG6GDRKOInput62 === null || c4DiagramYG6GDRKOInput63 === null)
      return;
    let c4DiagramYG6GDRKOBinding243 = {},
      c4DiagramYG6GDRKOBinding244 = c4DiagramYG6GDRKOBinding4.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput62,
      );
    if (
      (c4DiagramYG6GDRKOBinding244 &&
      c4DiagramYG6GDRKOInput62 === c4DiagramYG6GDRKOBinding244.alias
        ? (c4DiagramYG6GDRKOBinding243 = c4DiagramYG6GDRKOBinding244)
        : ((c4DiagramYG6GDRKOBinding243.alias = c4DiagramYG6GDRKOInput62),
          c4DiagramYG6GDRKOBinding4.push(c4DiagramYG6GDRKOBinding243)),
      c4DiagramYG6GDRKOInput63 == null
        ? (c4DiagramYG6GDRKOBinding243.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding243.label = {
            text: c4DiagramYG6GDRKOInput63,
          }),
      c4DiagramYG6GDRKOInput64 == null)
    )
      c4DiagramYG6GDRKOBinding243.techn = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput64 == "object") {
      let [c4DiagramYG6GDRKOBinding330, c4DiagramYG6GDRKOBinding331] =
        Object.entries(c4DiagramYG6GDRKOInput64)[0];
      c4DiagramYG6GDRKOBinding243[c4DiagramYG6GDRKOBinding330] = {
        text: c4DiagramYG6GDRKOBinding331,
      };
    } else
      c4DiagramYG6GDRKOBinding243.techn = {
        text: c4DiagramYG6GDRKOInput64,
      };
    if (c4DiagramYG6GDRKOInput65 == null)
      c4DiagramYG6GDRKOBinding243.descr = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput65 == "object") {
      let [c4DiagramYG6GDRKOBinding332, c4DiagramYG6GDRKOBinding333] =
        Object.entries(c4DiagramYG6GDRKOInput65)[0];
      c4DiagramYG6GDRKOBinding243[c4DiagramYG6GDRKOBinding332] = {
        text: c4DiagramYG6GDRKOBinding333,
      };
    } else
      c4DiagramYG6GDRKOBinding243.descr = {
        text: c4DiagramYG6GDRKOInput65,
      };
    if (typeof c4DiagramYG6GDRKOInput66 == "object") {
      let [c4DiagramYG6GDRKOBinding362, c4DiagramYG6GDRKOBinding363] =
        Object.entries(c4DiagramYG6GDRKOInput66)[0];
      c4DiagramYG6GDRKOBinding243[c4DiagramYG6GDRKOBinding362] =
        c4DiagramYG6GDRKOBinding363;
    } else c4DiagramYG6GDRKOBinding243.sprite = c4DiagramYG6GDRKOInput66;
    if (typeof c4DiagramYG6GDRKOInput67 == "object") {
      let [c4DiagramYG6GDRKOBinding364, c4DiagramYG6GDRKOBinding365] =
        Object.entries(c4DiagramYG6GDRKOInput67)[0];
      c4DiagramYG6GDRKOBinding243[c4DiagramYG6GDRKOBinding364] =
        c4DiagramYG6GDRKOBinding365;
    } else c4DiagramYG6GDRKOBinding243.tags = c4DiagramYG6GDRKOInput67;
    if (typeof c4DiagramYG6GDRKOInput68 == "object") {
      let [c4DiagramYG6GDRKOBinding366, c4DiagramYG6GDRKOBinding367] =
        Object.entries(c4DiagramYG6GDRKOInput68)[0];
      c4DiagramYG6GDRKOBinding243[c4DiagramYG6GDRKOBinding366] =
        c4DiagramYG6GDRKOBinding367;
    } else c4DiagramYG6GDRKOBinding243.link = c4DiagramYG6GDRKOInput68;
    c4DiagramYG6GDRKOBinding243.wrap = c4DiagramYG6GDRKOBinding40();
    c4DiagramYG6GDRKOBinding243.typeC4Shape = {
      text: c4DiagramYG6GDRKOInput61,
    };
    c4DiagramYG6GDRKOBinding243.parentBoundary = c4DiagramYG6GDRKOBinding6;
  }, "addComponent");
  c4DiagramYG6GDRKOBinding21 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput105,
    c4DiagramYG6GDRKOInput106,
    c4DiagramYG6GDRKOInput107,
    c4DiagramYG6GDRKOInput108,
    c4DiagramYG6GDRKOInput109,
  ) {
    if (
      c4DiagramYG6GDRKOInput105 === null ||
      c4DiagramYG6GDRKOInput106 === null
    )
      return;
    let c4DiagramYG6GDRKOBinding255 = {},
      c4DiagramYG6GDRKOBinding256 = c4DiagramYG6GDRKOBinding8.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput105,
      );
    if (
      (c4DiagramYG6GDRKOBinding256 &&
      c4DiagramYG6GDRKOInput105 === c4DiagramYG6GDRKOBinding256.alias
        ? (c4DiagramYG6GDRKOBinding255 = c4DiagramYG6GDRKOBinding256)
        : ((c4DiagramYG6GDRKOBinding255.alias = c4DiagramYG6GDRKOInput105),
          c4DiagramYG6GDRKOBinding8.push(c4DiagramYG6GDRKOBinding255)),
      c4DiagramYG6GDRKOInput106 == null
        ? (c4DiagramYG6GDRKOBinding255.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding255.label = {
            text: c4DiagramYG6GDRKOInput106,
          }),
      c4DiagramYG6GDRKOInput107 == null)
    )
      c4DiagramYG6GDRKOBinding255.type = {
        text: "system",
      };
    else if (typeof c4DiagramYG6GDRKOInput107 == "object") {
      let [c4DiagramYG6GDRKOBinding334, c4DiagramYG6GDRKOBinding335] =
        Object.entries(c4DiagramYG6GDRKOInput107)[0];
      c4DiagramYG6GDRKOBinding255[c4DiagramYG6GDRKOBinding334] = {
        text: c4DiagramYG6GDRKOBinding335,
      };
    } else
      c4DiagramYG6GDRKOBinding255.type = {
        text: c4DiagramYG6GDRKOInput107,
      };
    if (typeof c4DiagramYG6GDRKOInput108 == "object") {
      let [c4DiagramYG6GDRKOBinding368, c4DiagramYG6GDRKOBinding369] =
        Object.entries(c4DiagramYG6GDRKOInput108)[0];
      c4DiagramYG6GDRKOBinding255[c4DiagramYG6GDRKOBinding368] =
        c4DiagramYG6GDRKOBinding369;
    } else c4DiagramYG6GDRKOBinding255.tags = c4DiagramYG6GDRKOInput108;
    if (typeof c4DiagramYG6GDRKOInput109 == "object") {
      let [c4DiagramYG6GDRKOBinding370, c4DiagramYG6GDRKOBinding371] =
        Object.entries(c4DiagramYG6GDRKOInput109)[0];
      c4DiagramYG6GDRKOBinding255[c4DiagramYG6GDRKOBinding370] =
        c4DiagramYG6GDRKOBinding371;
    } else c4DiagramYG6GDRKOBinding255.link = c4DiagramYG6GDRKOInput109;
    c4DiagramYG6GDRKOBinding255.parentBoundary = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding255.wrap = c4DiagramYG6GDRKOBinding40();
    c4DiagramYG6GDRKOBinding7 = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding6 = c4DiagramYG6GDRKOInput105;
    c4DiagramYG6GDRKOBinding5.push(c4DiagramYG6GDRKOBinding7);
  }, "addPersonOrSystemBoundary");
  c4DiagramYG6GDRKOBinding22 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput100,
    c4DiagramYG6GDRKOInput101,
    c4DiagramYG6GDRKOInput102,
    c4DiagramYG6GDRKOInput103,
    c4DiagramYG6GDRKOInput104,
  ) {
    if (
      c4DiagramYG6GDRKOInput100 === null ||
      c4DiagramYG6GDRKOInput101 === null
    )
      return;
    let c4DiagramYG6GDRKOBinding253 = {},
      c4DiagramYG6GDRKOBinding254 = c4DiagramYG6GDRKOBinding8.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput100,
      );
    if (
      (c4DiagramYG6GDRKOBinding254 &&
      c4DiagramYG6GDRKOInput100 === c4DiagramYG6GDRKOBinding254.alias
        ? (c4DiagramYG6GDRKOBinding253 = c4DiagramYG6GDRKOBinding254)
        : ((c4DiagramYG6GDRKOBinding253.alias = c4DiagramYG6GDRKOInput100),
          c4DiagramYG6GDRKOBinding8.push(c4DiagramYG6GDRKOBinding253)),
      c4DiagramYG6GDRKOInput101 == null
        ? (c4DiagramYG6GDRKOBinding253.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding253.label = {
            text: c4DiagramYG6GDRKOInput101,
          }),
      c4DiagramYG6GDRKOInput102 == null)
    )
      c4DiagramYG6GDRKOBinding253.type = {
        text: "container",
      };
    else if (typeof c4DiagramYG6GDRKOInput102 == "object") {
      let [c4DiagramYG6GDRKOBinding336, c4DiagramYG6GDRKOBinding337] =
        Object.entries(c4DiagramYG6GDRKOInput102)[0];
      c4DiagramYG6GDRKOBinding253[c4DiagramYG6GDRKOBinding336] = {
        text: c4DiagramYG6GDRKOBinding337,
      };
    } else
      c4DiagramYG6GDRKOBinding253.type = {
        text: c4DiagramYG6GDRKOInput102,
      };
    if (typeof c4DiagramYG6GDRKOInput103 == "object") {
      let [c4DiagramYG6GDRKOBinding372, c4DiagramYG6GDRKOBinding373] =
        Object.entries(c4DiagramYG6GDRKOInput103)[0];
      c4DiagramYG6GDRKOBinding253[c4DiagramYG6GDRKOBinding372] =
        c4DiagramYG6GDRKOBinding373;
    } else c4DiagramYG6GDRKOBinding253.tags = c4DiagramYG6GDRKOInput103;
    if (typeof c4DiagramYG6GDRKOInput104 == "object") {
      let [c4DiagramYG6GDRKOBinding374, c4DiagramYG6GDRKOBinding375] =
        Object.entries(c4DiagramYG6GDRKOInput104)[0];
      c4DiagramYG6GDRKOBinding253[c4DiagramYG6GDRKOBinding374] =
        c4DiagramYG6GDRKOBinding375;
    } else c4DiagramYG6GDRKOBinding253.link = c4DiagramYG6GDRKOInput104;
    c4DiagramYG6GDRKOBinding253.parentBoundary = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding253.wrap = c4DiagramYG6GDRKOBinding40();
    c4DiagramYG6GDRKOBinding7 = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding6 = c4DiagramYG6GDRKOInput100;
    c4DiagramYG6GDRKOBinding5.push(c4DiagramYG6GDRKOBinding7);
  }, "addContainerBoundary");
  c4DiagramYG6GDRKOBinding23 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput78,
    c4DiagramYG6GDRKOInput79,
    c4DiagramYG6GDRKOInput80,
    c4DiagramYG6GDRKOInput81,
    c4DiagramYG6GDRKOInput82,
    c4DiagramYG6GDRKOInput83,
    c4DiagramYG6GDRKOInput84,
    c4DiagramYG6GDRKOInput85,
  ) {
    if (c4DiagramYG6GDRKOInput79 === null || c4DiagramYG6GDRKOInput80 === null)
      return;
    let c4DiagramYG6GDRKOBinding247 = {},
      c4DiagramYG6GDRKOBinding248 = c4DiagramYG6GDRKOBinding8.find(
        (item) => item.alias === c4DiagramYG6GDRKOInput79,
      );
    if (
      (c4DiagramYG6GDRKOBinding248 &&
      c4DiagramYG6GDRKOInput79 === c4DiagramYG6GDRKOBinding248.alias
        ? (c4DiagramYG6GDRKOBinding247 = c4DiagramYG6GDRKOBinding248)
        : ((c4DiagramYG6GDRKOBinding247.alias = c4DiagramYG6GDRKOInput79),
          c4DiagramYG6GDRKOBinding8.push(c4DiagramYG6GDRKOBinding247)),
      c4DiagramYG6GDRKOInput80 == null
        ? (c4DiagramYG6GDRKOBinding247.label = {
            text: "",
          })
        : (c4DiagramYG6GDRKOBinding247.label = {
            text: c4DiagramYG6GDRKOInput80,
          }),
      c4DiagramYG6GDRKOInput81 == null)
    )
      c4DiagramYG6GDRKOBinding247.type = {
        text: "node",
      };
    else if (typeof c4DiagramYG6GDRKOInput81 == "object") {
      let [c4DiagramYG6GDRKOBinding338, c4DiagramYG6GDRKOBinding339] =
        Object.entries(c4DiagramYG6GDRKOInput81)[0];
      c4DiagramYG6GDRKOBinding247[c4DiagramYG6GDRKOBinding338] = {
        text: c4DiagramYG6GDRKOBinding339,
      };
    } else
      c4DiagramYG6GDRKOBinding247.type = {
        text: c4DiagramYG6GDRKOInput81,
      };
    if (c4DiagramYG6GDRKOInput82 == null)
      c4DiagramYG6GDRKOBinding247.descr = {
        text: "",
      };
    else if (typeof c4DiagramYG6GDRKOInput82 == "object") {
      let [c4DiagramYG6GDRKOBinding340, c4DiagramYG6GDRKOBinding341] =
        Object.entries(c4DiagramYG6GDRKOInput82)[0];
      c4DiagramYG6GDRKOBinding247[c4DiagramYG6GDRKOBinding340] = {
        text: c4DiagramYG6GDRKOBinding341,
      };
    } else
      c4DiagramYG6GDRKOBinding247.descr = {
        text: c4DiagramYG6GDRKOInput82,
      };
    if (typeof c4DiagramYG6GDRKOInput84 == "object") {
      let [c4DiagramYG6GDRKOBinding376, c4DiagramYG6GDRKOBinding377] =
        Object.entries(c4DiagramYG6GDRKOInput84)[0];
      c4DiagramYG6GDRKOBinding247[c4DiagramYG6GDRKOBinding376] =
        c4DiagramYG6GDRKOBinding377;
    } else c4DiagramYG6GDRKOBinding247.tags = c4DiagramYG6GDRKOInput84;
    if (typeof c4DiagramYG6GDRKOInput85 == "object") {
      let [c4DiagramYG6GDRKOBinding378, c4DiagramYG6GDRKOBinding379] =
        Object.entries(c4DiagramYG6GDRKOInput85)[0];
      c4DiagramYG6GDRKOBinding247[c4DiagramYG6GDRKOBinding378] =
        c4DiagramYG6GDRKOBinding379;
    } else c4DiagramYG6GDRKOBinding247.link = c4DiagramYG6GDRKOInput85;
    c4DiagramYG6GDRKOBinding247.nodeType = c4DiagramYG6GDRKOInput78;
    c4DiagramYG6GDRKOBinding247.parentBoundary = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding247.wrap = c4DiagramYG6GDRKOBinding40();
    c4DiagramYG6GDRKOBinding7 = c4DiagramYG6GDRKOBinding6;
    c4DiagramYG6GDRKOBinding6 = c4DiagramYG6GDRKOInput79;
    c4DiagramYG6GDRKOBinding5.push(c4DiagramYG6GDRKOBinding7);
  }, "addDeploymentNode");
  c4DiagramYG6GDRKOBinding24 = defineFunctionName(function () {
    c4DiagramYG6GDRKOBinding6 = c4DiagramYG6GDRKOBinding7;
    c4DiagramYG6GDRKOBinding5.pop();
    c4DiagramYG6GDRKOBinding7 = c4DiagramYG6GDRKOBinding5.pop();
    c4DiagramYG6GDRKOBinding5.push(c4DiagramYG6GDRKOBinding7);
  }, "popBoundaryParseStack");
  c4DiagramYG6GDRKOBinding25 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput35,
    c4DiagramYG6GDRKOInput36,
    c4DiagramYG6GDRKOInput37,
    c4DiagramYG6GDRKOInput38,
    c4DiagramYG6GDRKOInput39,
    c4DiagramYG6GDRKOInput40,
    c4DiagramYG6GDRKOInput41,
    c4DiagramYG6GDRKOInput42,
    c4DiagramYG6GDRKOInput43,
    c4DiagramYG6GDRKOInput44,
    c4DiagramYG6GDRKOInput45,
  ) {
    let c4DiagramYG6GDRKOBinding209 = c4DiagramYG6GDRKOBinding4.find(
      (item) => item.alias === c4DiagramYG6GDRKOInput36,
    );
    if (
      !(
        c4DiagramYG6GDRKOBinding209 === undefined &&
        ((c4DiagramYG6GDRKOBinding209 = c4DiagramYG6GDRKOBinding8.find(
          (item) => item.alias === c4DiagramYG6GDRKOInput36,
        )),
        c4DiagramYG6GDRKOBinding209 === undefined)
      )
    ) {
      if (c4DiagramYG6GDRKOInput37 != null)
        if (typeof c4DiagramYG6GDRKOInput37 == "object") {
          let [c4DiagramYG6GDRKOBinding298, c4DiagramYG6GDRKOBinding299] =
            Object.entries(c4DiagramYG6GDRKOInput37)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding298] =
            c4DiagramYG6GDRKOBinding299;
        } else c4DiagramYG6GDRKOBinding209.bgColor = c4DiagramYG6GDRKOInput37;
      if (c4DiagramYG6GDRKOInput38 != null)
        if (typeof c4DiagramYG6GDRKOInput38 == "object") {
          let [c4DiagramYG6GDRKOBinding300, c4DiagramYG6GDRKOBinding301] =
            Object.entries(c4DiagramYG6GDRKOInput38)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding300] =
            c4DiagramYG6GDRKOBinding301;
        } else c4DiagramYG6GDRKOBinding209.fontColor = c4DiagramYG6GDRKOInput38;
      if (c4DiagramYG6GDRKOInput39 != null)
        if (typeof c4DiagramYG6GDRKOInput39 == "object") {
          let [c4DiagramYG6GDRKOBinding302, c4DiagramYG6GDRKOBinding303] =
            Object.entries(c4DiagramYG6GDRKOInput39)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding302] =
            c4DiagramYG6GDRKOBinding303;
        } else
          c4DiagramYG6GDRKOBinding209.borderColor = c4DiagramYG6GDRKOInput39;
      if (c4DiagramYG6GDRKOInput40 != null)
        if (typeof c4DiagramYG6GDRKOInput40 == "object") {
          let [c4DiagramYG6GDRKOBinding304, c4DiagramYG6GDRKOBinding305] =
            Object.entries(c4DiagramYG6GDRKOInput40)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding304] =
            c4DiagramYG6GDRKOBinding305;
        } else c4DiagramYG6GDRKOBinding209.shadowing = c4DiagramYG6GDRKOInput40;
      if (c4DiagramYG6GDRKOInput41 != null)
        if (typeof c4DiagramYG6GDRKOInput41 == "object") {
          let [c4DiagramYG6GDRKOBinding306, c4DiagramYG6GDRKOBinding307] =
            Object.entries(c4DiagramYG6GDRKOInput41)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding306] =
            c4DiagramYG6GDRKOBinding307;
        } else c4DiagramYG6GDRKOBinding209.shape = c4DiagramYG6GDRKOInput41;
      if (c4DiagramYG6GDRKOInput42 != null)
        if (typeof c4DiagramYG6GDRKOInput42 == "object") {
          let [c4DiagramYG6GDRKOBinding308, c4DiagramYG6GDRKOBinding309] =
            Object.entries(c4DiagramYG6GDRKOInput42)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding308] =
            c4DiagramYG6GDRKOBinding309;
        } else c4DiagramYG6GDRKOBinding209.sprite = c4DiagramYG6GDRKOInput42;
      if (c4DiagramYG6GDRKOInput43 != null)
        if (typeof c4DiagramYG6GDRKOInput43 == "object") {
          let [c4DiagramYG6GDRKOBinding310, c4DiagramYG6GDRKOBinding311] =
            Object.entries(c4DiagramYG6GDRKOInput43)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding310] =
            c4DiagramYG6GDRKOBinding311;
        } else c4DiagramYG6GDRKOBinding209.techn = c4DiagramYG6GDRKOInput43;
      if (c4DiagramYG6GDRKOInput44 != null)
        if (typeof c4DiagramYG6GDRKOInput44 == "object") {
          let [c4DiagramYG6GDRKOBinding312, c4DiagramYG6GDRKOBinding313] =
            Object.entries(c4DiagramYG6GDRKOInput44)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding312] =
            c4DiagramYG6GDRKOBinding313;
        } else
          c4DiagramYG6GDRKOBinding209.legendText = c4DiagramYG6GDRKOInput44;
      if (c4DiagramYG6GDRKOInput45 != null)
        if (typeof c4DiagramYG6GDRKOInput45 == "object") {
          let [c4DiagramYG6GDRKOBinding314, c4DiagramYG6GDRKOBinding315] =
            Object.entries(c4DiagramYG6GDRKOInput45)[0];
          c4DiagramYG6GDRKOBinding209[c4DiagramYG6GDRKOBinding314] =
            c4DiagramYG6GDRKOBinding315;
        } else
          c4DiagramYG6GDRKOBinding209.legendSprite = c4DiagramYG6GDRKOInput45;
    }
  }, "updateElStyle");
  c4DiagramYG6GDRKOBinding26 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput93,
    c4DiagramYG6GDRKOInput94,
    c4DiagramYG6GDRKOInput95,
    c4DiagramYG6GDRKOInput96,
    c4DiagramYG6GDRKOInput97,
    c4DiagramYG6GDRKOInput98,
    c4DiagramYG6GDRKOInput99,
  ) {
    let c4DiagramYG6GDRKOBinding252 = c4DiagramYG6GDRKOBinding9.find(
      (item) =>
        item.from === c4DiagramYG6GDRKOInput94 &&
        item.to === c4DiagramYG6GDRKOInput95,
    );
    if (c4DiagramYG6GDRKOBinding252 !== undefined) {
      if (c4DiagramYG6GDRKOInput96 != null)
        if (typeof c4DiagramYG6GDRKOInput96 == "object") {
          let [c4DiagramYG6GDRKOBinding316, c4DiagramYG6GDRKOBinding317] =
            Object.entries(c4DiagramYG6GDRKOInput96)[0];
          c4DiagramYG6GDRKOBinding252[c4DiagramYG6GDRKOBinding316] =
            c4DiagramYG6GDRKOBinding317;
        } else c4DiagramYG6GDRKOBinding252.textColor = c4DiagramYG6GDRKOInput96;
      if (c4DiagramYG6GDRKOInput97 != null)
        if (typeof c4DiagramYG6GDRKOInput97 == "object") {
          let [c4DiagramYG6GDRKOBinding318, c4DiagramYG6GDRKOBinding319] =
            Object.entries(c4DiagramYG6GDRKOInput97)[0];
          c4DiagramYG6GDRKOBinding252[c4DiagramYG6GDRKOBinding318] =
            c4DiagramYG6GDRKOBinding319;
        } else c4DiagramYG6GDRKOBinding252.lineColor = c4DiagramYG6GDRKOInput97;
      if (c4DiagramYG6GDRKOInput98 != null)
        if (typeof c4DiagramYG6GDRKOInput98 == "object") {
          let [c4DiagramYG6GDRKOBinding294, c4DiagramYG6GDRKOBinding295] =
            Object.entries(c4DiagramYG6GDRKOInput98)[0];
          c4DiagramYG6GDRKOBinding252[c4DiagramYG6GDRKOBinding294] = parseInt(
            c4DiagramYG6GDRKOBinding295,
          );
        } else
          c4DiagramYG6GDRKOBinding252.offsetX = parseInt(
            c4DiagramYG6GDRKOInput98,
          );
      if (c4DiagramYG6GDRKOInput99 != null)
        if (typeof c4DiagramYG6GDRKOInput99 == "object") {
          let [c4DiagramYG6GDRKOBinding296, c4DiagramYG6GDRKOBinding297] =
            Object.entries(c4DiagramYG6GDRKOInput99)[0];
          c4DiagramYG6GDRKOBinding252[c4DiagramYG6GDRKOBinding296] = parseInt(
            c4DiagramYG6GDRKOBinding297,
          );
        } else
          c4DiagramYG6GDRKOBinding252.offsetY = parseInt(
            c4DiagramYG6GDRKOInput99,
          );
    }
  }, "updateRelStyle");
  c4DiagramYG6GDRKOBinding27 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput148,
    c4DiagramYG6GDRKOInput149,
    c4DiagramYG6GDRKOInput150,
  ) {
    let c4DiagramYG6GDRKOBinding274 = c4DiagramYG6GDRKOBinding12,
      c4DiagramYG6GDRKOBinding275 = c4DiagramYG6GDRKOBinding13;
    if (typeof c4DiagramYG6GDRKOInput149 == "object") {
      let c4DiagramYG6GDRKOBinding342 = Object.values(
        c4DiagramYG6GDRKOInput149,
      )[0];
      c4DiagramYG6GDRKOBinding274 = parseInt(c4DiagramYG6GDRKOBinding342);
    } else c4DiagramYG6GDRKOBinding274 = parseInt(c4DiagramYG6GDRKOInput149);
    if (typeof c4DiagramYG6GDRKOInput150 == "object") {
      let c4DiagramYG6GDRKOBinding343 = Object.values(
        c4DiagramYG6GDRKOInput150,
      )[0];
      c4DiagramYG6GDRKOBinding275 = parseInt(c4DiagramYG6GDRKOBinding343);
    } else c4DiagramYG6GDRKOBinding275 = parseInt(c4DiagramYG6GDRKOInput150);
    c4DiagramYG6GDRKOBinding274 >= 1 &&
      (c4DiagramYG6GDRKOBinding12 = c4DiagramYG6GDRKOBinding274);
    c4DiagramYG6GDRKOBinding275 >= 1 &&
      (c4DiagramYG6GDRKOBinding13 = c4DiagramYG6GDRKOBinding275);
  }, "updateLayoutConfig");
  c4DiagramYG6GDRKOBinding28 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding12;
  }, "getC4ShapeInRow");
  c4DiagramYG6GDRKOBinding29 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding13;
  }, "getC4BoundaryInRow");
  c4DiagramYG6GDRKOBinding30 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding6;
  }, "getCurrentBoundaryParse");
  c4DiagramYG6GDRKOBinding31 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding7;
  }, "getParentBoundaryParse");
  c4DiagramYG6GDRKOBinding32 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput195,
  ) {
    return c4DiagramYG6GDRKOInput195 == null
      ? c4DiagramYG6GDRKOBinding4
      : c4DiagramYG6GDRKOBinding4.filter(
          (item) => item.parentBoundary === c4DiagramYG6GDRKOInput195,
        );
  }, "getC4ShapeArray");
  c4DiagramYG6GDRKOBinding33 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput203,
  ) {
    return c4DiagramYG6GDRKOBinding4.find(
      (item) => item.alias === c4DiagramYG6GDRKOInput203,
    );
  }, "getC4Shape");
  c4DiagramYG6GDRKOBinding34 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput205,
  ) {
    return Object.keys(c4DiagramYG6GDRKOBinding32(c4DiagramYG6GDRKOInput205));
  }, "getC4ShapeKeys");
  c4DiagramYG6GDRKOBinding35 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput196,
  ) {
    return c4DiagramYG6GDRKOInput196 == null
      ? c4DiagramYG6GDRKOBinding8
      : c4DiagramYG6GDRKOBinding8.filter(
          (item) => item.parentBoundary === c4DiagramYG6GDRKOInput196,
        );
  }, "getBoundaries");
  c4DiagramYG6GDRKOBinding36 = c4DiagramYG6GDRKOBinding35;
  c4DiagramYG6GDRKOBinding37 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding9;
  }, "getRels");
  c4DiagramYG6GDRKOBinding38 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding10;
  }, "getTitle");
  c4DiagramYG6GDRKOBinding39 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput210,
  ) {
    c4DiagramYG6GDRKOBinding11 = c4DiagramYG6GDRKOInput210;
  }, "setWrap");
  c4DiagramYG6GDRKOBinding40 = defineFunctionName(function () {
    return c4DiagramYG6GDRKOBinding11;
  }, "autoWrap");
  _e = {
    addPersonOrSystem: c4DiagramYG6GDRKOBinding18,
    addPersonOrSystemBoundary: c4DiagramYG6GDRKOBinding21,
    addContainer: c4DiagramYG6GDRKOBinding19,
    addContainerBoundary: c4DiagramYG6GDRKOBinding22,
    addComponent: c4DiagramYG6GDRKOBinding20,
    addDeploymentNode: c4DiagramYG6GDRKOBinding23,
    popBoundaryParseStack: c4DiagramYG6GDRKOBinding24,
    addRel: c4DiagramYG6GDRKOBinding17,
    updateElStyle: c4DiagramYG6GDRKOBinding25,
    updateRelStyle: c4DiagramYG6GDRKOBinding26,
    updateLayoutConfig: c4DiagramYG6GDRKOBinding27,
    autoWrap: c4DiagramYG6GDRKOBinding40,
    setWrap: c4DiagramYG6GDRKOBinding39,
    getC4ShapeArray: c4DiagramYG6GDRKOBinding32,
    getC4Shape: c4DiagramYG6GDRKOBinding33,
    getC4ShapeKeys: c4DiagramYG6GDRKOBinding34,
    getBoundaries: c4DiagramYG6GDRKOBinding35,
    getBoundarys: c4DiagramYG6GDRKOBinding36,
    getCurrentBoundaryParse: c4DiagramYG6GDRKOBinding30,
    getParentBoundaryParse: c4DiagramYG6GDRKOBinding31,
    getRels: c4DiagramYG6GDRKOBinding37,
    getTitle: c4DiagramYG6GDRKOBinding38,
    getC4Type: c4DiagramYG6GDRKOBinding15,
    getC4ShapeInRow: c4DiagramYG6GDRKOBinding28,
    getC4BoundaryInRow: c4DiagramYG6GDRKOBinding29,
    setAccTitle: V,
    getAccTitle: _chunkABZYJK2DV,
    getAccDescription: _,
    setAccDescription: B,
    getConfig: defineFunctionName(() => _chunkABZYJK2DB().c4, "getConfig"),
    clear: defineFunctionName(function () {
      c4DiagramYG6GDRKOBinding4 = [];
      c4DiagramYG6GDRKOBinding8 = [
        {
          alias: "global",
          label: {
            text: "global",
          },
          type: {
            text: "global",
          },
          tags: null,
          link: null,
          parentBoundary: "",
        },
      ];
      c4DiagramYG6GDRKOBinding7 = "";
      c4DiagramYG6GDRKOBinding6 = "global";
      c4DiagramYG6GDRKOBinding5 = [""];
      c4DiagramYG6GDRKOBinding9 = [];
      c4DiagramYG6GDRKOBinding5 = [""];
      c4DiagramYG6GDRKOBinding10 = "";
      c4DiagramYG6GDRKOBinding11 = false;
      c4DiagramYG6GDRKOBinding12 = 4;
      c4DiagramYG6GDRKOBinding13 = 2;
    }, "clear"),
    LINETYPE: {
      SOLID: 0,
      DOTTED: 1,
      NOTE: 2,
      SOLID_CROSS: 3,
      DOTTED_CROSS: 4,
      SOLID_OPEN: 5,
      DOTTED_OPEN: 6,
      LOOP_START: 10,
      LOOP_END: 11,
      ALT_START: 12,
      ALT_ELSE: 13,
      ALT_END: 14,
      OPT_START: 15,
      OPT_END: 16,
      ACTIVE_START: 17,
      ACTIVE_END: 18,
      PAR_START: 19,
      PAR_AND: 20,
      PAR_END: 21,
      RECT_START: 22,
      RECT_END: 23,
      SOLID_POINT: 24,
      DOTTED_POINT: 25,
    },
    ARROWTYPE: {
      FILLED: 0,
      OPEN: 1,
    },
    PLACEMENT: {
      LEFTOF: 0,
      RIGHTOF: 1,
      OVER: 2,
    },
    setTitle: defineFunctionName(function (c4DiagramYG6GDRKOInput206) {
      c4DiagramYG6GDRKOBinding10 = L(
        c4DiagramYG6GDRKOInput206,
        _chunkABZYJK2DB(),
      );
    }, "setTitle"),
    setC4Type: c4DiagramYG6GDRKOBinding16,
  };
  c4DiagramYG6GDRKOBinding41 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput207,
    c4DiagramYG6GDRKOInput208,
  ) {
    return i(c4DiagramYG6GDRKOInput207, c4DiagramYG6GDRKOInput208);
  }, "drawRect");
  c4DiagramYG6GDRKOBinding42 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput155,
    c4DiagramYG6GDRKOInput156,
    c4DiagramYG6GDRKOInput157,
    c4DiagramYG6GDRKOInput158,
    c4DiagramYG6GDRKOInput159,
    c4DiagramYG6GDRKOInput160,
  ) {
    let c4DiagramYG6GDRKOBinding283 = c4DiagramYG6GDRKOInput155.append("image");
    c4DiagramYG6GDRKOBinding283.attr("width", c4DiagramYG6GDRKOInput156);
    c4DiagramYG6GDRKOBinding283.attr("height", c4DiagramYG6GDRKOInput157);
    c4DiagramYG6GDRKOBinding283.attr("x", c4DiagramYG6GDRKOInput158);
    c4DiagramYG6GDRKOBinding283.attr("y", c4DiagramYG6GDRKOInput159);
    let c4DiagramYG6GDRKOBinding284 = c4DiagramYG6GDRKOInput160.startsWith(
      "data:image/png;base64",
    )
      ? c4DiagramYG6GDRKOInput160
      : c4DiagramYG6GDRKOBinding1.sanitizeUrl(c4DiagramYG6GDRKOInput160);
    c4DiagramYG6GDRKOBinding283.attr("xlink:href", c4DiagramYG6GDRKOBinding284);
  }, "drawImage");
  be = defineFunctionName(
    (
      c4DiagramYG6GDRKOInput17,
      c4DiagramYG6GDRKOInput18,
      c4DiagramYG6GDRKOInput19,
    ) => {
      let c4DiagramYG6GDRKOBinding168 = c4DiagramYG6GDRKOInput17.append("g"),
        c4DiagramYG6GDRKOBinding169 = 0;
      for (let c4DiagramYG6GDRKOBinding170 of c4DiagramYG6GDRKOInput18) {
        let c4DiagramYG6GDRKOBinding171 = c4DiagramYG6GDRKOBinding170.textColor
            ? c4DiagramYG6GDRKOBinding170.textColor
            : "#444444",
          c4DiagramYG6GDRKOBinding172 = c4DiagramYG6GDRKOBinding170.lineColor
            ? c4DiagramYG6GDRKOBinding170.lineColor
            : "#444444",
          c4DiagramYG6GDRKOBinding173 = c4DiagramYG6GDRKOBinding170.offsetX
            ? parseInt(c4DiagramYG6GDRKOBinding170.offsetX)
            : 0,
          c4DiagramYG6GDRKOBinding174 = c4DiagramYG6GDRKOBinding170.offsetY
            ? parseInt(c4DiagramYG6GDRKOBinding170.offsetY)
            : 0;
        if (c4DiagramYG6GDRKOBinding169 === 0) {
          let c4DiagramYG6GDRKOBinding271 =
            c4DiagramYG6GDRKOBinding168.append("line");
          c4DiagramYG6GDRKOBinding271.attr(
            "x1",
            c4DiagramYG6GDRKOBinding170.startPoint.x,
          );
          c4DiagramYG6GDRKOBinding271.attr(
            "y1",
            c4DiagramYG6GDRKOBinding170.startPoint.y,
          );
          c4DiagramYG6GDRKOBinding271.attr(
            "x2",
            c4DiagramYG6GDRKOBinding170.endPoint.x,
          );
          c4DiagramYG6GDRKOBinding271.attr(
            "y2",
            c4DiagramYG6GDRKOBinding170.endPoint.y,
          );
          c4DiagramYG6GDRKOBinding271.attr("stroke-width", "1");
          c4DiagramYG6GDRKOBinding271.attr(
            "stroke",
            c4DiagramYG6GDRKOBinding172,
          );
          c4DiagramYG6GDRKOBinding271.style("fill", "none");
          c4DiagramYG6GDRKOBinding170.type !== "rel_b" &&
            c4DiagramYG6GDRKOBinding271.attr("marker-end", "url(#arrowhead)");
          (c4DiagramYG6GDRKOBinding170.type === "birel" ||
            c4DiagramYG6GDRKOBinding170.type === "rel_b") &&
            c4DiagramYG6GDRKOBinding271.attr("marker-start", "url(#arrowend)");
          c4DiagramYG6GDRKOBinding169 = -1;
        } else {
          let c4DiagramYG6GDRKOBinding249 =
            c4DiagramYG6GDRKOBinding168.append("path");
          c4DiagramYG6GDRKOBinding249
            .attr("fill", "none")
            .attr("stroke-width", "1")
            .attr("stroke", c4DiagramYG6GDRKOBinding172)
            .attr(
              "d",
              "Mstartx,starty Qcontrolx,controly stopx,stopy "
                .replaceAll("startx", c4DiagramYG6GDRKOBinding170.startPoint.x)
                .replaceAll("starty", c4DiagramYG6GDRKOBinding170.startPoint.y)
                .replaceAll(
                  "controlx",
                  c4DiagramYG6GDRKOBinding170.startPoint.x +
                    (c4DiagramYG6GDRKOBinding170.endPoint.x -
                      c4DiagramYG6GDRKOBinding170.startPoint.x) /
                      2 -
                    (c4DiagramYG6GDRKOBinding170.endPoint.x -
                      c4DiagramYG6GDRKOBinding170.startPoint.x) /
                      4,
                )
                .replaceAll(
                  "controly",
                  c4DiagramYG6GDRKOBinding170.startPoint.y +
                    (c4DiagramYG6GDRKOBinding170.endPoint.y -
                      c4DiagramYG6GDRKOBinding170.startPoint.y) /
                      2,
                )
                .replaceAll("stopx", c4DiagramYG6GDRKOBinding170.endPoint.x)
                .replaceAll("stopy", c4DiagramYG6GDRKOBinding170.endPoint.y),
            );
          c4DiagramYG6GDRKOBinding170.type !== "rel_b" &&
            c4DiagramYG6GDRKOBinding249.attr("marker-end", "url(#arrowhead)");
          (c4DiagramYG6GDRKOBinding170.type === "birel" ||
            c4DiagramYG6GDRKOBinding170.type === "rel_b") &&
            c4DiagramYG6GDRKOBinding249.attr("marker-start", "url(#arrowend)");
        }
        let c4DiagramYG6GDRKOBinding175 =
          c4DiagramYG6GDRKOInput19.messageFont();
        c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput19)(
          c4DiagramYG6GDRKOBinding170.label.text,
          c4DiagramYG6GDRKOBinding168,
          Math.min(
            c4DiagramYG6GDRKOBinding170.startPoint.x,
            c4DiagramYG6GDRKOBinding170.endPoint.x,
          ) +
            Math.abs(
              c4DiagramYG6GDRKOBinding170.endPoint.x -
                c4DiagramYG6GDRKOBinding170.startPoint.x,
            ) /
              2 +
            c4DiagramYG6GDRKOBinding173,
          Math.min(
            c4DiagramYG6GDRKOBinding170.startPoint.y,
            c4DiagramYG6GDRKOBinding170.endPoint.y,
          ) +
            Math.abs(
              c4DiagramYG6GDRKOBinding170.endPoint.y -
                c4DiagramYG6GDRKOBinding170.startPoint.y,
            ) /
              2 +
            c4DiagramYG6GDRKOBinding174,
          c4DiagramYG6GDRKOBinding170.label.width,
          c4DiagramYG6GDRKOBinding170.label.height,
          {
            fill: c4DiagramYG6GDRKOBinding171,
          },
          c4DiagramYG6GDRKOBinding175,
        );
        c4DiagramYG6GDRKOBinding170.techn &&
          c4DiagramYG6GDRKOBinding170.techn.text !== "" &&
          ((c4DiagramYG6GDRKOBinding175 =
            c4DiagramYG6GDRKOInput19.messageFont()),
          c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput19)(
            "[" + c4DiagramYG6GDRKOBinding170.techn.text + "]",
            c4DiagramYG6GDRKOBinding168,
            Math.min(
              c4DiagramYG6GDRKOBinding170.startPoint.x,
              c4DiagramYG6GDRKOBinding170.endPoint.x,
            ) +
              Math.abs(
                c4DiagramYG6GDRKOBinding170.endPoint.x -
                  c4DiagramYG6GDRKOBinding170.startPoint.x,
              ) /
                2 +
              c4DiagramYG6GDRKOBinding173,
            Math.min(
              c4DiagramYG6GDRKOBinding170.startPoint.y,
              c4DiagramYG6GDRKOBinding170.endPoint.y,
            ) +
              Math.abs(
                c4DiagramYG6GDRKOBinding170.endPoint.y -
                  c4DiagramYG6GDRKOBinding170.startPoint.y,
              ) /
                2 +
              c4DiagramYG6GDRKOInput19.messageFontSize +
              5 +
              c4DiagramYG6GDRKOBinding174,
            Math.max(
              c4DiagramYG6GDRKOBinding170.label.width,
              c4DiagramYG6GDRKOBinding170.techn.width,
            ),
            c4DiagramYG6GDRKOBinding170.techn.height,
            {
              fill: c4DiagramYG6GDRKOBinding171,
              "font-style": "italic",
            },
            c4DiagramYG6GDRKOBinding175,
          ));
      }
    },
    "drawRels",
  );
  c4DiagramYG6GDRKOBinding43 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput46,
    c4DiagramYG6GDRKOInput47,
    c4DiagramYG6GDRKOInput48,
  ) {
    let c4DiagramYG6GDRKOBinding210 = c4DiagramYG6GDRKOInput46.append("g"),
      c4DiagramYG6GDRKOBinding211 = c4DiagramYG6GDRKOInput47.bgColor
        ? c4DiagramYG6GDRKOInput47.bgColor
        : "none",
      c4DiagramYG6GDRKOBinding212 = c4DiagramYG6GDRKOInput47.borderColor
        ? c4DiagramYG6GDRKOInput47.borderColor
        : "#444444",
      c4DiagramYG6GDRKOBinding213 = c4DiagramYG6GDRKOInput47.fontColor
        ? c4DiagramYG6GDRKOInput47.fontColor
        : "black",
      c4DiagramYG6GDRKOBinding214 = {
        "stroke-width": 1,
        "stroke-dasharray": "7.0,7.0",
      };
    c4DiagramYG6GDRKOInput47.nodeType &&
      (c4DiagramYG6GDRKOBinding214 = {
        "stroke-width": 1,
      });
    c4DiagramYG6GDRKOBinding41(c4DiagramYG6GDRKOBinding210, {
      x: c4DiagramYG6GDRKOInput47.x,
      y: c4DiagramYG6GDRKOInput47.y,
      fill: c4DiagramYG6GDRKOBinding211,
      stroke: c4DiagramYG6GDRKOBinding212,
      width: c4DiagramYG6GDRKOInput47.width,
      height: c4DiagramYG6GDRKOInput47.height,
      rx: 2.5,
      ry: 2.5,
      attrs: c4DiagramYG6GDRKOBinding214,
    });
    let c4DiagramYG6GDRKOBinding215 = c4DiagramYG6GDRKOInput48.boundaryFont();
    c4DiagramYG6GDRKOBinding215.fontWeight = "bold";
    c4DiagramYG6GDRKOBinding215.fontSize += 2;
    c4DiagramYG6GDRKOBinding215.fontColor = c4DiagramYG6GDRKOBinding213;
    c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput48)(
      c4DiagramYG6GDRKOInput47.label.text,
      c4DiagramYG6GDRKOBinding210,
      c4DiagramYG6GDRKOInput47.x,
      c4DiagramYG6GDRKOInput47.y + c4DiagramYG6GDRKOInput47.label.Y,
      c4DiagramYG6GDRKOInput47.width,
      c4DiagramYG6GDRKOInput47.height,
      {
        fill: "#444444",
      },
      c4DiagramYG6GDRKOBinding215,
    );
    c4DiagramYG6GDRKOInput47.type &&
      c4DiagramYG6GDRKOInput47.type.text !== "" &&
      ((c4DiagramYG6GDRKOBinding215 = c4DiagramYG6GDRKOInput48.boundaryFont()),
      (c4DiagramYG6GDRKOBinding215.fontColor = c4DiagramYG6GDRKOBinding213),
      c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput48)(
        c4DiagramYG6GDRKOInput47.type.text,
        c4DiagramYG6GDRKOBinding210,
        c4DiagramYG6GDRKOInput47.x,
        c4DiagramYG6GDRKOInput47.y + c4DiagramYG6GDRKOInput47.type.Y,
        c4DiagramYG6GDRKOInput47.width,
        c4DiagramYG6GDRKOInput47.height,
        {
          fill: "#444444",
        },
        c4DiagramYG6GDRKOBinding215,
      ));
    c4DiagramYG6GDRKOInput47.descr &&
      c4DiagramYG6GDRKOInput47.descr.text !== "" &&
      ((c4DiagramYG6GDRKOBinding215 = c4DiagramYG6GDRKOInput48.boundaryFont()),
      (c4DiagramYG6GDRKOBinding215.fontSize -= 2),
      (c4DiagramYG6GDRKOBinding215.fontColor = c4DiagramYG6GDRKOBinding213),
      c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput48)(
        c4DiagramYG6GDRKOInput47.descr.text,
        c4DiagramYG6GDRKOBinding210,
        c4DiagramYG6GDRKOInput47.x,
        c4DiagramYG6GDRKOInput47.y + c4DiagramYG6GDRKOInput47.descr.Y,
        c4DiagramYG6GDRKOInput47.width,
        c4DiagramYG6GDRKOInput47.height,
        {
          fill: "#444444",
        },
        c4DiagramYG6GDRKOBinding215,
      ));
  }, "drawBoundary");
  c4DiagramYG6GDRKOBinding44 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput2,
    c4DiagramYG6GDRKOInput3,
    c4DiagramYG6GDRKOInput4,
  ) {
    let c4DiagramYG6GDRKOBinding129 = c4DiagramYG6GDRKOInput3.bgColor
        ? c4DiagramYG6GDRKOInput3.bgColor
        : c4DiagramYG6GDRKOInput4[
            c4DiagramYG6GDRKOInput3.typeC4Shape.text + "_bg_color"
          ],
      c4DiagramYG6GDRKOBinding130 = c4DiagramYG6GDRKOInput3.borderColor
        ? c4DiagramYG6GDRKOInput3.borderColor
        : c4DiagramYG6GDRKOInput4[
            c4DiagramYG6GDRKOInput3.typeC4Shape.text + "_border_color"
          ],
      c4DiagramYG6GDRKOBinding131 = c4DiagramYG6GDRKOInput3.fontColor
        ? c4DiagramYG6GDRKOInput3.fontColor
        : "#FFFFFF",
      c4DiagramYG6GDRKOBinding132 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
    switch (c4DiagramYG6GDRKOInput3.typeC4Shape.text) {
      case "person":
        c4DiagramYG6GDRKOBinding132 =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
        break;
      case "external_person":
        c4DiagramYG6GDRKOBinding132 =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
        break;
    }
    let c4DiagramYG6GDRKOBinding133 = c4DiagramYG6GDRKOInput2.append("g");
    c4DiagramYG6GDRKOBinding133.attr("class", "person-man");
    let c4DiagramYG6GDRKOBinding134 = o();
    switch (c4DiagramYG6GDRKOInput3.typeC4Shape.text) {
      case "person":
      case "external_person":
      case "system":
      case "external_system":
      case "container":
      case "external_container":
      case "component":
      case "external_component":
        c4DiagramYG6GDRKOBinding134.x = c4DiagramYG6GDRKOInput3.x;
        c4DiagramYG6GDRKOBinding134.y = c4DiagramYG6GDRKOInput3.y;
        c4DiagramYG6GDRKOBinding134.fill = c4DiagramYG6GDRKOBinding129;
        c4DiagramYG6GDRKOBinding134.width = c4DiagramYG6GDRKOInput3.width;
        c4DiagramYG6GDRKOBinding134.height = c4DiagramYG6GDRKOInput3.height;
        c4DiagramYG6GDRKOBinding134.stroke = c4DiagramYG6GDRKOBinding130;
        c4DiagramYG6GDRKOBinding134.rx = 2.5;
        c4DiagramYG6GDRKOBinding134.ry = 2.5;
        c4DiagramYG6GDRKOBinding134.attrs = {
          "stroke-width": 0.5,
        };
        c4DiagramYG6GDRKOBinding41(
          c4DiagramYG6GDRKOBinding133,
          c4DiagramYG6GDRKOBinding134,
        );
        break;
      case "system_db":
      case "external_system_db":
      case "container_db":
      case "external_container_db":
      case "component_db":
      case "external_component_db":
        c4DiagramYG6GDRKOBinding133
          .append("path")
          .attr("fill", c4DiagramYG6GDRKOBinding129)
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramYG6GDRKOBinding130)
          .attr(
            "d",
            "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height"
              .replaceAll("startx", c4DiagramYG6GDRKOInput3.x)
              .replaceAll("starty", c4DiagramYG6GDRKOInput3.y)
              .replaceAll("half", c4DiagramYG6GDRKOInput3.width / 2)
              .replaceAll("height", c4DiagramYG6GDRKOInput3.height),
          );
        c4DiagramYG6GDRKOBinding133
          .append("path")
          .attr("fill", "none")
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramYG6GDRKOBinding130)
          .attr(
            "d",
            "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10"
              .replaceAll("startx", c4DiagramYG6GDRKOInput3.x)
              .replaceAll("starty", c4DiagramYG6GDRKOInput3.y)
              .replaceAll("half", c4DiagramYG6GDRKOInput3.width / 2),
          );
        break;
      case "system_queue":
      case "external_system_queue":
      case "container_queue":
      case "external_container_queue":
      case "component_queue":
      case "external_component_queue":
        c4DiagramYG6GDRKOBinding133
          .append("path")
          .attr("fill", c4DiagramYG6GDRKOBinding129)
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramYG6GDRKOBinding130)
          .attr(
            "d",
            "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half"
              .replaceAll("startx", c4DiagramYG6GDRKOInput3.x)
              .replaceAll("starty", c4DiagramYG6GDRKOInput3.y)
              .replaceAll("width", c4DiagramYG6GDRKOInput3.width)
              .replaceAll("half", c4DiagramYG6GDRKOInput3.height / 2),
          );
        c4DiagramYG6GDRKOBinding133
          .append("path")
          .attr("fill", "none")
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramYG6GDRKOBinding130)
          .attr(
            "d",
            "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half"
              .replaceAll(
                "startx",
                c4DiagramYG6GDRKOInput3.x + c4DiagramYG6GDRKOInput3.width,
              )
              .replaceAll("starty", c4DiagramYG6GDRKOInput3.y)
              .replaceAll("half", c4DiagramYG6GDRKOInput3.height / 2),
          );
        break;
    }
    let c4DiagramYG6GDRKOBinding135 = c4DiagramYG6GDRKOBinding53(
      c4DiagramYG6GDRKOInput4,
      c4DiagramYG6GDRKOInput3.typeC4Shape.text,
    );
    switch (
      (c4DiagramYG6GDRKOBinding133
        .append("text")
        .attr("fill", c4DiagramYG6GDRKOBinding131)
        .attr("font-family", c4DiagramYG6GDRKOBinding135.fontFamily)
        .attr("font-size", c4DiagramYG6GDRKOBinding135.fontSize - 2)
        .attr("font-style", "italic")
        .attr("lengthAdjust", "spacing")
        .attr("textLength", c4DiagramYG6GDRKOInput3.typeC4Shape.width)
        .attr(
          "x",
          c4DiagramYG6GDRKOInput3.x +
            c4DiagramYG6GDRKOInput3.width / 2 -
            c4DiagramYG6GDRKOInput3.typeC4Shape.width / 2,
        )
        .attr(
          "y",
          c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.typeC4Shape.Y,
        )
        .text("<<" + c4DiagramYG6GDRKOInput3.typeC4Shape.text + ">>"),
      c4DiagramYG6GDRKOInput3.typeC4Shape.text)
    ) {
      case "person":
      case "external_person":
        c4DiagramYG6GDRKOBinding42(
          c4DiagramYG6GDRKOBinding133,
          48,
          48,
          c4DiagramYG6GDRKOInput3.x + c4DiagramYG6GDRKOInput3.width / 2 - 24,
          c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.image.Y,
          c4DiagramYG6GDRKOBinding132,
        );
        break;
    }
    let c4DiagramYG6GDRKOBinding136 =
      c4DiagramYG6GDRKOInput4[
        c4DiagramYG6GDRKOInput3.typeC4Shape.text + "Font"
      ]();
    return (
      (c4DiagramYG6GDRKOBinding136.fontWeight = "bold"),
      (c4DiagramYG6GDRKOBinding136.fontSize += 2),
      (c4DiagramYG6GDRKOBinding136.fontColor = c4DiagramYG6GDRKOBinding131),
      c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput4)(
        c4DiagramYG6GDRKOInput3.label.text,
        c4DiagramYG6GDRKOBinding133,
        c4DiagramYG6GDRKOInput3.x,
        c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.label.Y,
        c4DiagramYG6GDRKOInput3.width,
        c4DiagramYG6GDRKOInput3.height,
        {
          fill: c4DiagramYG6GDRKOBinding131,
        },
        c4DiagramYG6GDRKOBinding136,
      ),
      (c4DiagramYG6GDRKOBinding136 =
        c4DiagramYG6GDRKOInput4[
          c4DiagramYG6GDRKOInput3.typeC4Shape.text + "Font"
        ]()),
      (c4DiagramYG6GDRKOBinding136.fontColor = c4DiagramYG6GDRKOBinding131),
      c4DiagramYG6GDRKOInput3.techn &&
      c4DiagramYG6GDRKOInput3.techn?.text !== ""
        ? c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput4)(
            c4DiagramYG6GDRKOInput3.techn.text,
            c4DiagramYG6GDRKOBinding133,
            c4DiagramYG6GDRKOInput3.x,
            c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.techn.Y,
            c4DiagramYG6GDRKOInput3.width,
            c4DiagramYG6GDRKOInput3.height,
            {
              fill: c4DiagramYG6GDRKOBinding131,
              "font-style": "italic",
            },
            c4DiagramYG6GDRKOBinding136,
          )
        : c4DiagramYG6GDRKOInput3.type &&
          c4DiagramYG6GDRKOInput3.type.text !== "" &&
          c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput4)(
            c4DiagramYG6GDRKOInput3.type.text,
            c4DiagramYG6GDRKOBinding133,
            c4DiagramYG6GDRKOInput3.x,
            c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.type.Y,
            c4DiagramYG6GDRKOInput3.width,
            c4DiagramYG6GDRKOInput3.height,
            {
              fill: c4DiagramYG6GDRKOBinding131,
              "font-style": "italic",
            },
            c4DiagramYG6GDRKOBinding136,
          ),
      c4DiagramYG6GDRKOInput3.descr &&
        c4DiagramYG6GDRKOInput3.descr.text !== "" &&
        ((c4DiagramYG6GDRKOBinding136 = c4DiagramYG6GDRKOInput4.personFont()),
        (c4DiagramYG6GDRKOBinding136.fontColor = c4DiagramYG6GDRKOBinding131),
        c4DiagramYG6GDRKOBinding54(c4DiagramYG6GDRKOInput4)(
          c4DiagramYG6GDRKOInput3.descr.text,
          c4DiagramYG6GDRKOBinding133,
          c4DiagramYG6GDRKOInput3.x,
          c4DiagramYG6GDRKOInput3.y + c4DiagramYG6GDRKOInput3.descr.Y,
          c4DiagramYG6GDRKOInput3.width,
          c4DiagramYG6GDRKOInput3.height,
          {
            fill: c4DiagramYG6GDRKOBinding131,
          },
          c4DiagramYG6GDRKOBinding136,
        )),
      c4DiagramYG6GDRKOInput3.height
    );
  }, "drawC4Shape");
  c4DiagramYG6GDRKOBinding45 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput1,
  ) {
    c4DiagramYG6GDRKOInput1
      .append("defs")
      .append("symbol")
      .attr("id", "database")
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z",
      );
  }, "insertDatabaseIcon");
  c4DiagramYG6GDRKOBinding46 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput141,
  ) {
    c4DiagramYG6GDRKOInput141
      .append("defs")
      .append("symbol")
      .attr("id", "computer")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z",
      );
  }, "insertComputerIcon");
  c4DiagramYG6GDRKOBinding47 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput133,
  ) {
    c4DiagramYG6GDRKOInput133
      .append("defs")
      .append("symbol")
      .attr("id", "clock")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z",
      );
  }, "insertClockIcon");
  c4DiagramYG6GDRKOBinding48 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput146,
  ) {
    c4DiagramYG6GDRKOInput146
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("refX", 9)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  c4DiagramYG6GDRKOBinding49 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput147,
  ) {
    c4DiagramYG6GDRKOInput147
      .append("defs")
      .append("marker")
      .attr("id", "arrowend")
      .attr("refX", 1)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 10 0 L 0 5 L 10 10 z");
  }, "insertArrowEnd");
  c4DiagramYG6GDRKOBinding50 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput152,
  ) {
    c4DiagramYG6GDRKOInput152
      .append("defs")
      .append("marker")
      .attr("id", "filled-head")
      .attr("refX", 18)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  c4DiagramYG6GDRKOBinding51 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput151,
  ) {
    c4DiagramYG6GDRKOInput151
      .append("defs")
      .append("marker")
      .attr("id", "sequencenumber")
      .attr("refX", 15)
      .attr("refY", 15)
      .attr("markerWidth", 60)
      .attr("markerHeight", 40)
      .attr("orient", "auto")
      .append("circle")
      .attr("cx", 15)
      .attr("cy", 15)
      .attr("r", 6);
  }, "insertDynamicNumber");
  c4DiagramYG6GDRKOBinding52 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput118,
  ) {
    let c4DiagramYG6GDRKOBinding258 = c4DiagramYG6GDRKOInput118
      .append("defs")
      .append("marker")
      .attr("id", "crosshead")
      .attr("markerWidth", 15)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .attr("refX", 16)
      .attr("refY", 4);
    c4DiagramYG6GDRKOBinding258
      .append("path")
      .attr("fill", "black")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", "0, 0")
      .attr("stroke-width", "1px")
      .attr("d", "M 9,2 V 6 L16,4 Z");
    c4DiagramYG6GDRKOBinding258
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", "0, 0")
      .attr("stroke-width", "1px")
      .attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
  }, "insertArrowCrossHead");
  c4DiagramYG6GDRKOBinding53 = defineFunctionName(
    (c4DiagramYG6GDRKOInput176, c4DiagramYG6GDRKOInput177) => ({
      fontFamily:
        c4DiagramYG6GDRKOInput176[c4DiagramYG6GDRKOInput177 + "FontFamily"],
      fontSize:
        c4DiagramYG6GDRKOInput176[c4DiagramYG6GDRKOInput177 + "FontSize"],
      fontWeight:
        c4DiagramYG6GDRKOInput176[c4DiagramYG6GDRKOInput177 + "FontWeight"],
    }),
    "getC4ShapeFont",
  );
  c4DiagramYG6GDRKOBinding54 = (function () {
    function c4DiagramYG6GDRKOHelper6(
      c4DiagramYG6GDRKOInput161,
      c4DiagramYG6GDRKOInput162,
      c4DiagramYG6GDRKOInput163,
      c4DiagramYG6GDRKOInput164,
      c4DiagramYG6GDRKOInput165,
      c4DiagramYG6GDRKOInput166,
      c4DiagramYG6GDRKOInput167,
    ) {
      c4DiagramYG6GDRKOHelper9(
        c4DiagramYG6GDRKOInput162
          .append("text")
          .attr("x", c4DiagramYG6GDRKOInput163 + c4DiagramYG6GDRKOInput165 / 2)
          .attr(
            "y",
            c4DiagramYG6GDRKOInput164 + c4DiagramYG6GDRKOInput166 / 2 + 5,
          )
          .style("text-anchor", "middle")
          .text(c4DiagramYG6GDRKOInput161),
        c4DiagramYG6GDRKOInput167,
      );
    }
    defineFunctionName(c4DiagramYG6GDRKOHelper6, "byText");
    function c4DiagramYG6GDRKOHelper7(
      c4DiagramYG6GDRKOInput110,
      c4DiagramYG6GDRKOInput111,
      c4DiagramYG6GDRKOInput112,
      c4DiagramYG6GDRKOInput113,
      c4DiagramYG6GDRKOInput114,
      c4DiagramYG6GDRKOInput115,
      c4DiagramYG6GDRKOInput116,
      c4DiagramYG6GDRKOInput117,
    ) {
      let { fontSize, fontFamily, fontWeight } = c4DiagramYG6GDRKOInput117,
        c4DiagramYG6GDRKOBinding257 = c4DiagramYG6GDRKOInput110.split(
          s.lineBreakRegex,
        );
      for (
        let c4DiagramYG6GDRKOBinding263 = 0;
        c4DiagramYG6GDRKOBinding263 < c4DiagramYG6GDRKOBinding257.length;
        c4DiagramYG6GDRKOBinding263++
      ) {
        let c4DiagramYG6GDRKOBinding268 =
            c4DiagramYG6GDRKOBinding263 * fontSize -
            (fontSize * (c4DiagramYG6GDRKOBinding257.length - 1)) / 2,
          c4DiagramYG6GDRKOBinding269 = c4DiagramYG6GDRKOInput111
            .append("text")
            .attr(
              "x",
              c4DiagramYG6GDRKOInput112 + c4DiagramYG6GDRKOInput114 / 2,
            )
            .attr("y", c4DiagramYG6GDRKOInput113)
            .style("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .style("font-size", fontSize)
            .style("font-weight", fontWeight)
            .style("font-family", fontFamily);
        c4DiagramYG6GDRKOBinding269
          .append("tspan")
          .attr("dy", c4DiagramYG6GDRKOBinding268)
          .text(c4DiagramYG6GDRKOBinding257[c4DiagramYG6GDRKOBinding263])
          .attr("alignment-baseline", "mathematical");
        c4DiagramYG6GDRKOHelper9(
          c4DiagramYG6GDRKOBinding269,
          c4DiagramYG6GDRKOInput116,
        );
      }
    }
    defineFunctionName(c4DiagramYG6GDRKOHelper7, "byTspan");
    function c4DiagramYG6GDRKOHelper8(
      c4DiagramYG6GDRKOInput125,
      c4DiagramYG6GDRKOInput126,
      c4DiagramYG6GDRKOInput127,
      c4DiagramYG6GDRKOInput128,
      c4DiagramYG6GDRKOInput129,
      c4DiagramYG6GDRKOInput130,
      c4DiagramYG6GDRKOInput131,
      c4DiagramYG6GDRKOInput132,
    ) {
      let c4DiagramYG6GDRKOBinding260 =
          c4DiagramYG6GDRKOInput126.append("switch"),
        c4DiagramYG6GDRKOBinding261 = c4DiagramYG6GDRKOBinding260
          .append("foreignObject")
          .attr("x", c4DiagramYG6GDRKOInput127)
          .attr("y", c4DiagramYG6GDRKOInput128)
          .attr("width", c4DiagramYG6GDRKOInput129)
          .attr("height", c4DiagramYG6GDRKOInput130)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      c4DiagramYG6GDRKOBinding261
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(c4DiagramYG6GDRKOInput125);
      c4DiagramYG6GDRKOHelper7(
        c4DiagramYG6GDRKOInput125,
        c4DiagramYG6GDRKOBinding260,
        c4DiagramYG6GDRKOInput127,
        c4DiagramYG6GDRKOInput128,
        c4DiagramYG6GDRKOInput129,
        c4DiagramYG6GDRKOInput130,
        c4DiagramYG6GDRKOInput131,
        c4DiagramYG6GDRKOInput132,
      );
      c4DiagramYG6GDRKOHelper9(
        c4DiagramYG6GDRKOBinding261,
        c4DiagramYG6GDRKOInput131,
      );
    }
    defineFunctionName(c4DiagramYG6GDRKOHelper8, "byFo");
    function c4DiagramYG6GDRKOHelper9(
      c4DiagramYG6GDRKOInput189,
      c4DiagramYG6GDRKOInput190,
    ) {
      for (let c4DiagramYG6GDRKOBinding380 in c4DiagramYG6GDRKOInput190)
        c4DiagramYG6GDRKOInput190.hasOwnProperty(c4DiagramYG6GDRKOBinding380) &&
          c4DiagramYG6GDRKOInput189.attr(
            c4DiagramYG6GDRKOBinding380,
            c4DiagramYG6GDRKOInput190[c4DiagramYG6GDRKOBinding380],
          );
    }
    return (
      defineFunctionName(c4DiagramYG6GDRKOHelper9, "_setTextAttrs"),
      function (c4DiagramYG6GDRKOInput175) {
        return c4DiagramYG6GDRKOInput175.textPlacement === "fo"
          ? c4DiagramYG6GDRKOHelper8
          : c4DiagramYG6GDRKOInput175.textPlacement === "old"
            ? c4DiagramYG6GDRKOHelper6
            : c4DiagramYG6GDRKOHelper7;
      }
    );
  })();
  c4DiagramYG6GDRKOBinding55 = {
    drawRect: c4DiagramYG6GDRKOBinding41,
    drawBoundary: c4DiagramYG6GDRKOBinding43,
    drawC4Shape: c4DiagramYG6GDRKOBinding44,
    drawRels: be,
    drawImage: c4DiagramYG6GDRKOBinding42,
    insertArrowHead: c4DiagramYG6GDRKOBinding48,
    insertArrowEnd: c4DiagramYG6GDRKOBinding49,
    insertArrowFilledHead: c4DiagramYG6GDRKOBinding50,
    insertDynamicNumber: c4DiagramYG6GDRKOBinding51,
    insertArrowCrossHead: c4DiagramYG6GDRKOBinding52,
    insertDatabaseIcon: c4DiagramYG6GDRKOBinding45,
    insertComputerIcon: c4DiagramYG6GDRKOBinding46,
    insertClockIcon: c4DiagramYG6GDRKOBinding47,
  };
  c4DiagramYG6GDRKOBinding56 = 0;
  c4DiagramYG6GDRKOBinding57 = 0;
  c4DiagramYG6GDRKOBinding58 = 4;
  c4DiagramYG6GDRKOBinding59 = 2;
  c4DiagramYG6GDRKOBinding2.yy = _e;
  c4DiagramYG6GDRKOBinding60 = {};
  c4DiagramYG6GDRKOBinding61 = class {
    static {
      defineFunctionName(this, "Bounds");
    }
    constructor(c4DiagramYG6GDRKOInput134) {
      this.name = "";
      this.data = {};
      this.data.startx = undefined;
      this.data.stopx = undefined;
      this.data.starty = undefined;
      this.data.stopy = undefined;
      this.data.widthLimit = undefined;
      this.nextData = {};
      this.nextData.startx = undefined;
      this.nextData.stopx = undefined;
      this.nextData.starty = undefined;
      this.nextData.stopy = undefined;
      this.nextData.cnt = 0;
      c4DiagramYG6GDRKOBinding62(c4DiagramYG6GDRKOInput134.db.getConfig());
    }
    setData(
      c4DiagramYG6GDRKOInput168,
      c4DiagramYG6GDRKOInput169,
      c4DiagramYG6GDRKOInput170,
      c4DiagramYG6GDRKOInput171,
    ) {
      this.nextData.startx = this.data.startx = c4DiagramYG6GDRKOInput168;
      this.nextData.stopx = this.data.stopx = c4DiagramYG6GDRKOInput169;
      this.nextData.starty = this.data.starty = c4DiagramYG6GDRKOInput170;
      this.nextData.stopy = this.data.stopy = c4DiagramYG6GDRKOInput171;
    }
    updateVal(
      c4DiagramYG6GDRKOInput191,
      c4DiagramYG6GDRKOInput192,
      c4DiagramYG6GDRKOInput193,
      c4DiagramYG6GDRKOInput194,
    ) {
      c4DiagramYG6GDRKOInput191[c4DiagramYG6GDRKOInput192] === undefined
        ? (c4DiagramYG6GDRKOInput191[c4DiagramYG6GDRKOInput192] =
            c4DiagramYG6GDRKOInput193)
        : (c4DiagramYG6GDRKOInput191[c4DiagramYG6GDRKOInput192] =
            c4DiagramYG6GDRKOInput194(
              c4DiagramYG6GDRKOInput193,
              c4DiagramYG6GDRKOInput191[c4DiagramYG6GDRKOInput192],
            ));
    }
    insert(c4DiagramYG6GDRKOInput51) {
      this.nextData.cnt = this.nextData.cnt + 1;
      let c4DiagramYG6GDRKOBinding227 =
          this.nextData.startx === this.nextData.stopx
            ? this.nextData.stopx + c4DiagramYG6GDRKOInput51.margin
            : this.nextData.stopx + c4DiagramYG6GDRKOInput51.margin * 2,
        c4DiagramYG6GDRKOBinding228 =
          c4DiagramYG6GDRKOBinding227 + c4DiagramYG6GDRKOInput51.width,
        c4DiagramYG6GDRKOBinding229 =
          this.nextData.starty + c4DiagramYG6GDRKOInput51.margin * 2,
        c4DiagramYG6GDRKOBinding230 =
          c4DiagramYG6GDRKOBinding229 + c4DiagramYG6GDRKOInput51.height;
      (c4DiagramYG6GDRKOBinding227 >= this.data.widthLimit ||
        c4DiagramYG6GDRKOBinding228 >= this.data.widthLimit ||
        this.nextData.cnt > c4DiagramYG6GDRKOBinding58) &&
        ((c4DiagramYG6GDRKOBinding227 =
          this.nextData.startx +
          c4DiagramYG6GDRKOInput51.margin +
          c4DiagramYG6GDRKOBinding60.nextLinePaddingX),
        (c4DiagramYG6GDRKOBinding229 =
          this.nextData.stopy + c4DiagramYG6GDRKOInput51.margin * 2),
        (this.nextData.stopx = c4DiagramYG6GDRKOBinding228 =
          c4DiagramYG6GDRKOBinding227 + c4DiagramYG6GDRKOInput51.width),
        (this.nextData.starty = this.nextData.stopy),
        (this.nextData.stopy = c4DiagramYG6GDRKOBinding230 =
          c4DiagramYG6GDRKOBinding229 + c4DiagramYG6GDRKOInput51.height),
        (this.nextData.cnt = 1));
      c4DiagramYG6GDRKOInput51.x = c4DiagramYG6GDRKOBinding227;
      c4DiagramYG6GDRKOInput51.y = c4DiagramYG6GDRKOBinding229;
      this.updateVal(
        this.data,
        "startx",
        c4DiagramYG6GDRKOBinding227,
        Math.min,
      );
      this.updateVal(
        this.data,
        "starty",
        c4DiagramYG6GDRKOBinding229,
        Math.min,
      );
      this.updateVal(this.data, "stopx", c4DiagramYG6GDRKOBinding228, Math.max);
      this.updateVal(this.data, "stopy", c4DiagramYG6GDRKOBinding230, Math.max);
      this.updateVal(
        this.nextData,
        "startx",
        c4DiagramYG6GDRKOBinding227,
        Math.min,
      );
      this.updateVal(
        this.nextData,
        "starty",
        c4DiagramYG6GDRKOBinding229,
        Math.min,
      );
      this.updateVal(
        this.nextData,
        "stopx",
        c4DiagramYG6GDRKOBinding228,
        Math.max,
      );
      this.updateVal(
        this.nextData,
        "stopy",
        c4DiagramYG6GDRKOBinding230,
        Math.max,
      );
    }
    init(c4DiagramYG6GDRKOInput142) {
      this.name = "";
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
        widthLimit: undefined,
      };
      this.nextData = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
        cnt: 0,
      };
      c4DiagramYG6GDRKOBinding62(c4DiagramYG6GDRKOInput142.db.getConfig());
    }
    bumpLastMargin(c4DiagramYG6GDRKOInput197) {
      this.data.stopx += c4DiagramYG6GDRKOInput197;
      this.data.stopy += c4DiagramYG6GDRKOInput197;
    }
  };
  c4DiagramYG6GDRKOBinding62 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput140,
  ) {
    r(c4DiagramYG6GDRKOBinding60, c4DiagramYG6GDRKOInput140);
    c4DiagramYG6GDRKOInput140.fontFamily &&
      (c4DiagramYG6GDRKOBinding60.personFontFamily =
        c4DiagramYG6GDRKOBinding60.systemFontFamily =
        c4DiagramYG6GDRKOBinding60.messageFontFamily =
          c4DiagramYG6GDRKOInput140.fontFamily);
    c4DiagramYG6GDRKOInput140.fontSize &&
      (c4DiagramYG6GDRKOBinding60.personFontSize =
        c4DiagramYG6GDRKOBinding60.systemFontSize =
        c4DiagramYG6GDRKOBinding60.messageFontSize =
          c4DiagramYG6GDRKOInput140.fontSize);
    c4DiagramYG6GDRKOInput140.fontWeight &&
      (c4DiagramYG6GDRKOBinding60.personFontWeight =
        c4DiagramYG6GDRKOBinding60.systemFontWeight =
        c4DiagramYG6GDRKOBinding60.messageFontWeight =
          c4DiagramYG6GDRKOInput140.fontWeight);
  }, "setConf");
  c4DiagramYG6GDRKOBinding63 = defineFunctionName(
    (c4DiagramYG6GDRKOInput178, c4DiagramYG6GDRKOInput179) => ({
      fontFamily:
        c4DiagramYG6GDRKOInput178[c4DiagramYG6GDRKOInput179 + "FontFamily"],
      fontSize:
        c4DiagramYG6GDRKOInput178[c4DiagramYG6GDRKOInput179 + "FontSize"],
      fontWeight:
        c4DiagramYG6GDRKOInput178[c4DiagramYG6GDRKOInput179 + "FontWeight"],
    }),
    "c4ShapeFont",
  );
  c4DiagramYG6GDRKOBinding64 = defineFunctionName(
    (c4DiagramYG6GDRKOInput180) => ({
      fontFamily: c4DiagramYG6GDRKOInput180.boundaryFontFamily,
      fontSize: c4DiagramYG6GDRKOInput180.boundaryFontSize,
      fontWeight: c4DiagramYG6GDRKOInput180.boundaryFontWeight,
    }),
    "boundaryFont",
  );
  c4DiagramYG6GDRKOBinding65 = defineFunctionName(
    (c4DiagramYG6GDRKOInput181) => ({
      fontFamily: c4DiagramYG6GDRKOInput181.messageFontFamily,
      fontSize: c4DiagramYG6GDRKOInput181.messageFontSize,
      fontWeight: c4DiagramYG6GDRKOInput181.messageFontWeight,
    }),
    "messageFont",
  );
  defineFunctionName(c4DiagramYG6GDRKOHelper1, "calcC4ShapeTextWH");
  c4DiagramYG6GDRKOBinding66 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput143,
    c4DiagramYG6GDRKOInput144,
    c4DiagramYG6GDRKOInput145,
  ) {
    c4DiagramYG6GDRKOInput144.x = c4DiagramYG6GDRKOInput145.data.startx;
    c4DiagramYG6GDRKOInput144.y = c4DiagramYG6GDRKOInput145.data.starty;
    c4DiagramYG6GDRKOInput144.width =
      c4DiagramYG6GDRKOInput145.data.stopx -
      c4DiagramYG6GDRKOInput145.data.startx;
    c4DiagramYG6GDRKOInput144.height =
      c4DiagramYG6GDRKOInput145.data.stopy -
      c4DiagramYG6GDRKOInput145.data.starty;
    c4DiagramYG6GDRKOInput144.label.y =
      c4DiagramYG6GDRKOBinding60.c4ShapeMargin - 35;
    let c4DiagramYG6GDRKOBinding272 =
        c4DiagramYG6GDRKOInput144.wrap && c4DiagramYG6GDRKOBinding60.wrap,
      c4DiagramYG6GDRKOBinding273 = c4DiagramYG6GDRKOBinding64(
        c4DiagramYG6GDRKOBinding60,
      );
    c4DiagramYG6GDRKOBinding273.fontSize += 2;
    c4DiagramYG6GDRKOBinding273.fontWeight = "bold";
    c4DiagramYG6GDRKOHelper1(
      "label",
      c4DiagramYG6GDRKOInput144,
      c4DiagramYG6GDRKOBinding272,
      c4DiagramYG6GDRKOBinding273,
      chunkS3R3BYOJN(
        c4DiagramYG6GDRKOInput144.label.text,
        c4DiagramYG6GDRKOBinding273,
      ),
    );
    c4DiagramYG6GDRKOBinding55.drawBoundary(
      c4DiagramYG6GDRKOInput143,
      c4DiagramYG6GDRKOInput144,
      c4DiagramYG6GDRKOBinding60,
    );
  }, "drawBoundary");
  c4DiagramYG6GDRKOBinding67 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput22,
    c4DiagramYG6GDRKOInput23,
    c4DiagramYG6GDRKOInput24,
    c4DiagramYG6GDRKOInput25,
  ) {
    let c4DiagramYG6GDRKOBinding180 = 0;
    for (let c4DiagramYG6GDRKOBinding181 of c4DiagramYG6GDRKOInput25) {
      c4DiagramYG6GDRKOBinding180 = 0;
      let c4DiagramYG6GDRKOBinding182 =
          c4DiagramYG6GDRKOInput24[c4DiagramYG6GDRKOBinding181],
        c4DiagramYG6GDRKOBinding183 = c4DiagramYG6GDRKOBinding63(
          c4DiagramYG6GDRKOBinding60,
          c4DiagramYG6GDRKOBinding182.typeC4Shape.text,
        );
      switch (
        ((c4DiagramYG6GDRKOBinding183.fontSize -= 2),
        (c4DiagramYG6GDRKOBinding182.typeC4Shape.width = chunkS3R3BYOJN(
          "«" + c4DiagramYG6GDRKOBinding182.typeC4Shape.text + "»",
          c4DiagramYG6GDRKOBinding183,
        )),
        (c4DiagramYG6GDRKOBinding182.typeC4Shape.height =
          c4DiagramYG6GDRKOBinding183.fontSize + 2),
        (c4DiagramYG6GDRKOBinding182.typeC4Shape.Y =
          c4DiagramYG6GDRKOBinding60.c4ShapePadding),
        (c4DiagramYG6GDRKOBinding180 =
          c4DiagramYG6GDRKOBinding182.typeC4Shape.Y +
          c4DiagramYG6GDRKOBinding182.typeC4Shape.height -
          4),
        (c4DiagramYG6GDRKOBinding182.image = {
          width: 0,
          height: 0,
          Y: 0,
        }),
        c4DiagramYG6GDRKOBinding182.typeC4Shape.text)
      ) {
        case "person":
        case "external_person":
          c4DiagramYG6GDRKOBinding182.image.width = 48;
          c4DiagramYG6GDRKOBinding182.image.height = 48;
          c4DiagramYG6GDRKOBinding182.image.Y = c4DiagramYG6GDRKOBinding180;
          c4DiagramYG6GDRKOBinding180 =
            c4DiagramYG6GDRKOBinding182.image.Y +
            c4DiagramYG6GDRKOBinding182.image.height;
          break;
      }
      c4DiagramYG6GDRKOBinding182.sprite &&
        ((c4DiagramYG6GDRKOBinding182.image.width = 48),
        (c4DiagramYG6GDRKOBinding182.image.height = 48),
        (c4DiagramYG6GDRKOBinding182.image.Y = c4DiagramYG6GDRKOBinding180),
        (c4DiagramYG6GDRKOBinding180 =
          c4DiagramYG6GDRKOBinding182.image.Y +
          c4DiagramYG6GDRKOBinding182.image.height));
      let c4DiagramYG6GDRKOBinding184 =
          c4DiagramYG6GDRKOBinding182.wrap && c4DiagramYG6GDRKOBinding60.wrap,
        c4DiagramYG6GDRKOBinding185 =
          c4DiagramYG6GDRKOBinding60.width -
          c4DiagramYG6GDRKOBinding60.c4ShapePadding * 2,
        c4DiagramYG6GDRKOBinding186 = c4DiagramYG6GDRKOBinding63(
          c4DiagramYG6GDRKOBinding60,
          c4DiagramYG6GDRKOBinding182.typeC4Shape.text,
        );
      c4DiagramYG6GDRKOBinding186.fontSize += 2;
      c4DiagramYG6GDRKOBinding186.fontWeight = "bold";
      c4DiagramYG6GDRKOHelper1(
        "label",
        c4DiagramYG6GDRKOBinding182,
        c4DiagramYG6GDRKOBinding184,
        c4DiagramYG6GDRKOBinding186,
        c4DiagramYG6GDRKOBinding185,
      );
      c4DiagramYG6GDRKOBinding182.label.Y = c4DiagramYG6GDRKOBinding180 + 8;
      c4DiagramYG6GDRKOBinding180 =
        c4DiagramYG6GDRKOBinding182.label.Y +
        c4DiagramYG6GDRKOBinding182.label.height;
      c4DiagramYG6GDRKOBinding182.type &&
      c4DiagramYG6GDRKOBinding182.type.text !== ""
        ? ((c4DiagramYG6GDRKOBinding182.type.text =
            "[" + c4DiagramYG6GDRKOBinding182.type.text + "]"),
          c4DiagramYG6GDRKOHelper1(
            "type",
            c4DiagramYG6GDRKOBinding182,
            c4DiagramYG6GDRKOBinding184,
            c4DiagramYG6GDRKOBinding63(
              c4DiagramYG6GDRKOBinding60,
              c4DiagramYG6GDRKOBinding182.typeC4Shape.text,
            ),
            c4DiagramYG6GDRKOBinding185,
          ),
          (c4DiagramYG6GDRKOBinding182.type.Y =
            c4DiagramYG6GDRKOBinding180 + 5),
          (c4DiagramYG6GDRKOBinding180 =
            c4DiagramYG6GDRKOBinding182.type.Y +
            c4DiagramYG6GDRKOBinding182.type.height))
        : c4DiagramYG6GDRKOBinding182.techn &&
          c4DiagramYG6GDRKOBinding182.techn.text !== "" &&
          ((c4DiagramYG6GDRKOBinding182.techn.text =
            "[" + c4DiagramYG6GDRKOBinding182.techn.text + "]"),
          c4DiagramYG6GDRKOHelper1(
            "techn",
            c4DiagramYG6GDRKOBinding182,
            c4DiagramYG6GDRKOBinding184,
            c4DiagramYG6GDRKOBinding63(
              c4DiagramYG6GDRKOBinding60,
              c4DiagramYG6GDRKOBinding182.techn.text,
            ),
            c4DiagramYG6GDRKOBinding185,
          ),
          (c4DiagramYG6GDRKOBinding182.techn.Y =
            c4DiagramYG6GDRKOBinding180 + 5),
          (c4DiagramYG6GDRKOBinding180 =
            c4DiagramYG6GDRKOBinding182.techn.Y +
            c4DiagramYG6GDRKOBinding182.techn.height));
      let c4DiagramYG6GDRKOBinding187 = c4DiagramYG6GDRKOBinding180,
        c4DiagramYG6GDRKOBinding188 = c4DiagramYG6GDRKOBinding182.label.width;
      c4DiagramYG6GDRKOBinding182.descr &&
        c4DiagramYG6GDRKOBinding182.descr.text !== "" &&
        (c4DiagramYG6GDRKOHelper1(
          "descr",
          c4DiagramYG6GDRKOBinding182,
          c4DiagramYG6GDRKOBinding184,
          c4DiagramYG6GDRKOBinding63(
            c4DiagramYG6GDRKOBinding60,
            c4DiagramYG6GDRKOBinding182.typeC4Shape.text,
          ),
          c4DiagramYG6GDRKOBinding185,
        ),
        (c4DiagramYG6GDRKOBinding182.descr.Y =
          c4DiagramYG6GDRKOBinding180 + 20),
        (c4DiagramYG6GDRKOBinding180 =
          c4DiagramYG6GDRKOBinding182.descr.Y +
          c4DiagramYG6GDRKOBinding182.descr.height),
        (c4DiagramYG6GDRKOBinding188 = Math.max(
          c4DiagramYG6GDRKOBinding182.label.width,
          c4DiagramYG6GDRKOBinding182.descr.width,
        )),
        (c4DiagramYG6GDRKOBinding187 =
          c4DiagramYG6GDRKOBinding180 -
          c4DiagramYG6GDRKOBinding182.descr.textLines * 5));
      c4DiagramYG6GDRKOBinding188 += c4DiagramYG6GDRKOBinding60.c4ShapePadding;
      c4DiagramYG6GDRKOBinding182.width = Math.max(
        c4DiagramYG6GDRKOBinding182.width || c4DiagramYG6GDRKOBinding60.width,
        c4DiagramYG6GDRKOBinding188,
        c4DiagramYG6GDRKOBinding60.width,
      );
      c4DiagramYG6GDRKOBinding182.height = Math.max(
        c4DiagramYG6GDRKOBinding182.height || c4DiagramYG6GDRKOBinding60.height,
        c4DiagramYG6GDRKOBinding187,
        c4DiagramYG6GDRKOBinding60.height,
      );
      c4DiagramYG6GDRKOBinding182.margin =
        c4DiagramYG6GDRKOBinding182.margin ||
        c4DiagramYG6GDRKOBinding60.c4ShapeMargin;
      c4DiagramYG6GDRKOInput22.insert(c4DiagramYG6GDRKOBinding182);
      c4DiagramYG6GDRKOBinding55.drawC4Shape(
        c4DiagramYG6GDRKOInput23,
        c4DiagramYG6GDRKOBinding182,
        c4DiagramYG6GDRKOBinding60,
      );
    }
    c4DiagramYG6GDRKOInput22.bumpLastMargin(
      c4DiagramYG6GDRKOBinding60.c4ShapeMargin,
    );
  }, "drawC4ShapeArray");
  $ = class {
    static {
      defineFunctionName(this, "Point");
    }
    constructor(c4DiagramYG6GDRKOInput201, c4DiagramYG6GDRKOInput202) {
      this.x = c4DiagramYG6GDRKOInput201;
      this.y = c4DiagramYG6GDRKOInput202;
    }
  };
  c4DiagramYG6GDRKOBinding68 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput49,
    c4DiagramYG6GDRKOInput50,
  ) {
    let c4DiagramYG6GDRKOBinding216 = c4DiagramYG6GDRKOInput49.x,
      c4DiagramYG6GDRKOBinding217 = c4DiagramYG6GDRKOInput49.y,
      c4DiagramYG6GDRKOBinding218 = c4DiagramYG6GDRKOInput50.x,
      c4DiagramYG6GDRKOBinding219 = c4DiagramYG6GDRKOInput50.y,
      c4DiagramYG6GDRKOBinding220 =
        c4DiagramYG6GDRKOBinding216 + c4DiagramYG6GDRKOInput49.width / 2,
      c4DiagramYG6GDRKOBinding221 =
        c4DiagramYG6GDRKOBinding217 + c4DiagramYG6GDRKOInput49.height / 2,
      c4DiagramYG6GDRKOBinding222 = Math.abs(
        c4DiagramYG6GDRKOBinding216 - c4DiagramYG6GDRKOBinding218,
      ),
      c4DiagramYG6GDRKOBinding223 = Math.abs(
        c4DiagramYG6GDRKOBinding217 - c4DiagramYG6GDRKOBinding219,
      ),
      c4DiagramYG6GDRKOBinding224 =
        c4DiagramYG6GDRKOBinding223 / c4DiagramYG6GDRKOBinding222,
      c4DiagramYG6GDRKOBinding225 =
        c4DiagramYG6GDRKOInput49.height / c4DiagramYG6GDRKOInput49.width,
      c4DiagramYG6GDRKOBinding226 = null;
    return (
      c4DiagramYG6GDRKOBinding217 == c4DiagramYG6GDRKOBinding219 &&
      c4DiagramYG6GDRKOBinding216 < c4DiagramYG6GDRKOBinding218
        ? (c4DiagramYG6GDRKOBinding226 = new $(
            c4DiagramYG6GDRKOBinding216 + c4DiagramYG6GDRKOInput49.width,
            c4DiagramYG6GDRKOBinding221,
          ))
        : c4DiagramYG6GDRKOBinding217 == c4DiagramYG6GDRKOBinding219 &&
            c4DiagramYG6GDRKOBinding216 > c4DiagramYG6GDRKOBinding218
          ? (c4DiagramYG6GDRKOBinding226 = new $(
              c4DiagramYG6GDRKOBinding216,
              c4DiagramYG6GDRKOBinding221,
            ))
          : c4DiagramYG6GDRKOBinding216 == c4DiagramYG6GDRKOBinding218 &&
              c4DiagramYG6GDRKOBinding217 < c4DiagramYG6GDRKOBinding219
            ? (c4DiagramYG6GDRKOBinding226 = new $(
                c4DiagramYG6GDRKOBinding220,
                c4DiagramYG6GDRKOBinding217 + c4DiagramYG6GDRKOInput49.height,
              ))
            : c4DiagramYG6GDRKOBinding216 == c4DiagramYG6GDRKOBinding218 &&
              c4DiagramYG6GDRKOBinding217 > c4DiagramYG6GDRKOBinding219 &&
              (c4DiagramYG6GDRKOBinding226 = new $(
                c4DiagramYG6GDRKOBinding220,
                c4DiagramYG6GDRKOBinding217,
              )),
      c4DiagramYG6GDRKOBinding216 > c4DiagramYG6GDRKOBinding218 &&
      c4DiagramYG6GDRKOBinding217 < c4DiagramYG6GDRKOBinding219
        ? (c4DiagramYG6GDRKOBinding226 =
            c4DiagramYG6GDRKOBinding225 >= c4DiagramYG6GDRKOBinding224
              ? new $(
                  c4DiagramYG6GDRKOBinding216,
                  c4DiagramYG6GDRKOBinding221 +
                    (c4DiagramYG6GDRKOBinding224 *
                      c4DiagramYG6GDRKOInput49.width) /
                      2,
                )
              : new $(
                  c4DiagramYG6GDRKOBinding220 -
                    ((c4DiagramYG6GDRKOBinding222 /
                      c4DiagramYG6GDRKOBinding223) *
                      c4DiagramYG6GDRKOInput49.height) /
                      2,
                  c4DiagramYG6GDRKOBinding217 + c4DiagramYG6GDRKOInput49.height,
                ))
        : c4DiagramYG6GDRKOBinding216 < c4DiagramYG6GDRKOBinding218 &&
            c4DiagramYG6GDRKOBinding217 < c4DiagramYG6GDRKOBinding219
          ? (c4DiagramYG6GDRKOBinding226 =
              c4DiagramYG6GDRKOBinding225 >= c4DiagramYG6GDRKOBinding224
                ? new $(
                    c4DiagramYG6GDRKOBinding216 +
                      c4DiagramYG6GDRKOInput49.width,
                    c4DiagramYG6GDRKOBinding221 +
                      (c4DiagramYG6GDRKOBinding224 *
                        c4DiagramYG6GDRKOInput49.width) /
                        2,
                  )
                : new $(
                    c4DiagramYG6GDRKOBinding220 +
                      ((c4DiagramYG6GDRKOBinding222 /
                        c4DiagramYG6GDRKOBinding223) *
                        c4DiagramYG6GDRKOInput49.height) /
                        2,
                    c4DiagramYG6GDRKOBinding217 +
                      c4DiagramYG6GDRKOInput49.height,
                  ))
          : c4DiagramYG6GDRKOBinding216 < c4DiagramYG6GDRKOBinding218 &&
              c4DiagramYG6GDRKOBinding217 > c4DiagramYG6GDRKOBinding219
            ? (c4DiagramYG6GDRKOBinding226 =
                c4DiagramYG6GDRKOBinding225 >= c4DiagramYG6GDRKOBinding224
                  ? new $(
                      c4DiagramYG6GDRKOBinding216 +
                        c4DiagramYG6GDRKOInput49.width,
                      c4DiagramYG6GDRKOBinding221 -
                        (c4DiagramYG6GDRKOBinding224 *
                          c4DiagramYG6GDRKOInput49.width) /
                          2,
                    )
                  : new $(
                      c4DiagramYG6GDRKOBinding220 +
                        ((c4DiagramYG6GDRKOInput49.height / 2) *
                          c4DiagramYG6GDRKOBinding222) /
                          c4DiagramYG6GDRKOBinding223,
                      c4DiagramYG6GDRKOBinding217,
                    ))
            : c4DiagramYG6GDRKOBinding216 > c4DiagramYG6GDRKOBinding218 &&
              c4DiagramYG6GDRKOBinding217 > c4DiagramYG6GDRKOBinding219 &&
              (c4DiagramYG6GDRKOBinding226 =
                c4DiagramYG6GDRKOBinding225 >= c4DiagramYG6GDRKOBinding224
                  ? new $(
                      c4DiagramYG6GDRKOBinding216,
                      c4DiagramYG6GDRKOBinding221 -
                        (c4DiagramYG6GDRKOInput49.width / 2) *
                          c4DiagramYG6GDRKOBinding224,
                    )
                  : new $(
                      c4DiagramYG6GDRKOBinding220 -
                        ((c4DiagramYG6GDRKOInput49.height / 2) *
                          c4DiagramYG6GDRKOBinding222) /
                          c4DiagramYG6GDRKOBinding223,
                      c4DiagramYG6GDRKOBinding217,
                    )),
      c4DiagramYG6GDRKOBinding226
    );
  }, "getIntersectPoint");
  c4DiagramYG6GDRKOBinding69 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput153,
    c4DiagramYG6GDRKOInput154,
  ) {
    let c4DiagramYG6GDRKOBinding280 = {
      x: 0,
      y: 0,
    };
    c4DiagramYG6GDRKOBinding280.x =
      c4DiagramYG6GDRKOInput154.x + c4DiagramYG6GDRKOInput154.width / 2;
    c4DiagramYG6GDRKOBinding280.y =
      c4DiagramYG6GDRKOInput154.y + c4DiagramYG6GDRKOInput154.height / 2;
    let c4DiagramYG6GDRKOBinding281 = c4DiagramYG6GDRKOBinding68(
      c4DiagramYG6GDRKOInput153,
      c4DiagramYG6GDRKOBinding280,
    );
    return (
      (c4DiagramYG6GDRKOBinding280.x =
        c4DiagramYG6GDRKOInput153.x + c4DiagramYG6GDRKOInput153.width / 2),
      (c4DiagramYG6GDRKOBinding280.y =
        c4DiagramYG6GDRKOInput153.y + c4DiagramYG6GDRKOInput153.height / 2),
      {
        startPoint: c4DiagramYG6GDRKOBinding281,
        endPoint: c4DiagramYG6GDRKOBinding68(
          c4DiagramYG6GDRKOInput154,
          c4DiagramYG6GDRKOBinding280,
        ),
      }
    );
  }, "getIntersectPoints");
  c4DiagramYG6GDRKOBinding70 = defineFunctionName(function (
    c4DiagramYG6GDRKOInput119,
    c4DiagramYG6GDRKOInput120,
    c4DiagramYG6GDRKOInput121,
    c4DiagramYG6GDRKOInput122,
  ) {
    let c4DiagramYG6GDRKOBinding259 = 0;
    for (let c4DiagramYG6GDRKOBinding262 of c4DiagramYG6GDRKOInput120) {
      c4DiagramYG6GDRKOBinding259 += 1;
      let c4DiagramYG6GDRKOBinding264 =
          c4DiagramYG6GDRKOBinding262.wrap && c4DiagramYG6GDRKOBinding60.wrap,
        c4DiagramYG6GDRKOBinding265 = c4DiagramYG6GDRKOBinding65(
          c4DiagramYG6GDRKOBinding60,
        );
      c4DiagramYG6GDRKOInput122.db.getC4Type() === "C4Dynamic" &&
        (c4DiagramYG6GDRKOBinding262.label.text =
          c4DiagramYG6GDRKOBinding259 +
          ": " +
          c4DiagramYG6GDRKOBinding262.label.text);
      let c4DiagramYG6GDRKOBinding266 = chunkS3R3BYOJN(
        c4DiagramYG6GDRKOBinding262.label.text,
        c4DiagramYG6GDRKOBinding265,
      );
      c4DiagramYG6GDRKOHelper1(
        "label",
        c4DiagramYG6GDRKOBinding262,
        c4DiagramYG6GDRKOBinding264,
        c4DiagramYG6GDRKOBinding265,
        c4DiagramYG6GDRKOBinding266,
      );
      c4DiagramYG6GDRKOBinding262.techn &&
        c4DiagramYG6GDRKOBinding262.techn.text !== "" &&
        ((c4DiagramYG6GDRKOBinding266 = chunkS3R3BYOJN(
          c4DiagramYG6GDRKOBinding262.techn.text,
          c4DiagramYG6GDRKOBinding265,
        )),
        c4DiagramYG6GDRKOHelper1(
          "techn",
          c4DiagramYG6GDRKOBinding262,
          c4DiagramYG6GDRKOBinding264,
          c4DiagramYG6GDRKOBinding265,
          c4DiagramYG6GDRKOBinding266,
        ));
      c4DiagramYG6GDRKOBinding262.descr &&
        c4DiagramYG6GDRKOBinding262.descr.text !== "" &&
        ((c4DiagramYG6GDRKOBinding266 = chunkS3R3BYOJN(
          c4DiagramYG6GDRKOBinding262.descr.text,
          c4DiagramYG6GDRKOBinding265,
        )),
        c4DiagramYG6GDRKOHelper1(
          "descr",
          c4DiagramYG6GDRKOBinding262,
          c4DiagramYG6GDRKOBinding264,
          c4DiagramYG6GDRKOBinding265,
          c4DiagramYG6GDRKOBinding266,
        ));
      let c4DiagramYG6GDRKOBinding267 = c4DiagramYG6GDRKOBinding69(
        c4DiagramYG6GDRKOInput121(c4DiagramYG6GDRKOBinding262.from),
        c4DiagramYG6GDRKOInput121(c4DiagramYG6GDRKOBinding262.to),
      );
      c4DiagramYG6GDRKOBinding262.startPoint =
        c4DiagramYG6GDRKOBinding267.startPoint;
      c4DiagramYG6GDRKOBinding262.endPoint =
        c4DiagramYG6GDRKOBinding267.endPoint;
    }
    c4DiagramYG6GDRKOBinding55.drawRels(
      c4DiagramYG6GDRKOInput119,
      c4DiagramYG6GDRKOInput120,
      c4DiagramYG6GDRKOBinding60,
    );
  }, "drawRels");
  defineFunctionName(c4DiagramYG6GDRKOHelper2, "drawInsideBoundary");
  c4DiagramYG6GDRKOBinding71 = {
    drawPersonOrSystemArray: c4DiagramYG6GDRKOBinding67,
    drawBoundary: c4DiagramYG6GDRKOBinding66,
    setConf: c4DiagramYG6GDRKOBinding62,
    draw: defineFunctionName(function (
      c4DiagramYG6GDRKOInput31,
      c4DiagramYG6GDRKOInput32,
      c4DiagramYG6GDRKOInput33,
      c4DiagramYG6GDRKOInput34,
    ) {
      c4DiagramYG6GDRKOBinding60 = _chunkABZYJK2DB().c4;
      let c4DiagramYG6GDRKOBinding190 = _chunkABZYJK2DB().securityLevel,
        c4DiagramYG6GDRKOBinding191;
      c4DiagramYG6GDRKOBinding190 === "sandbox" &&
        (c4DiagramYG6GDRKOBinding191 = select("#i" + c4DiagramYG6GDRKOInput32));
      let c4DiagramYG6GDRKOBinding192 = select(
          c4DiagramYG6GDRKOBinding190 === "sandbox"
            ? c4DiagramYG6GDRKOBinding191.nodes()[0].contentDocument.body
            : "body",
        ),
        c4DiagramYG6GDRKOBinding193 = c4DiagramYG6GDRKOInput34.db;
      c4DiagramYG6GDRKOInput34.db.setWrap(c4DiagramYG6GDRKOBinding60.wrap);
      c4DiagramYG6GDRKOBinding58 =
        c4DiagramYG6GDRKOBinding193.getC4ShapeInRow();
      c4DiagramYG6GDRKOBinding59 =
        c4DiagramYG6GDRKOBinding193.getC4BoundaryInRow();
      logger.debug(`C:${JSON.stringify(c4DiagramYG6GDRKOBinding60, null, 2)}`);
      let c4DiagramYG6GDRKOBinding194 =
        c4DiagramYG6GDRKOBinding190 === "sandbox"
          ? c4DiagramYG6GDRKOBinding192.select(
              `[id="${c4DiagramYG6GDRKOInput32}"]`,
            )
          : select(`[id="${c4DiagramYG6GDRKOInput32}"]`);
      c4DiagramYG6GDRKOBinding55.insertComputerIcon(
        c4DiagramYG6GDRKOBinding194,
      );
      c4DiagramYG6GDRKOBinding55.insertDatabaseIcon(
        c4DiagramYG6GDRKOBinding194,
      );
      c4DiagramYG6GDRKOBinding55.insertClockIcon(c4DiagramYG6GDRKOBinding194);
      let c4DiagramYG6GDRKOBinding195 = new c4DiagramYG6GDRKOBinding61(
        c4DiagramYG6GDRKOInput34,
      );
      c4DiagramYG6GDRKOBinding195.setData(
        c4DiagramYG6GDRKOBinding60.diagramMarginX,
        c4DiagramYG6GDRKOBinding60.diagramMarginX,
        c4DiagramYG6GDRKOBinding60.diagramMarginY,
        c4DiagramYG6GDRKOBinding60.diagramMarginY,
      );
      c4DiagramYG6GDRKOBinding195.data.widthLimit = screen.availWidth;
      c4DiagramYG6GDRKOBinding56 = c4DiagramYG6GDRKOBinding60.diagramMarginX;
      c4DiagramYG6GDRKOBinding57 = c4DiagramYG6GDRKOBinding60.diagramMarginY;
      let c4DiagramYG6GDRKOBinding196 = c4DiagramYG6GDRKOInput34.db.getTitle();
      c4DiagramYG6GDRKOHelper2(
        c4DiagramYG6GDRKOBinding194,
        "",
        c4DiagramYG6GDRKOBinding195,
        c4DiagramYG6GDRKOInput34.db.getBoundaries(""),
        c4DiagramYG6GDRKOInput34,
      );
      c4DiagramYG6GDRKOBinding55.insertArrowHead(c4DiagramYG6GDRKOBinding194);
      c4DiagramYG6GDRKOBinding55.insertArrowEnd(c4DiagramYG6GDRKOBinding194);
      c4DiagramYG6GDRKOBinding55.insertArrowCrossHead(
        c4DiagramYG6GDRKOBinding194,
      );
      c4DiagramYG6GDRKOBinding55.insertArrowFilledHead(
        c4DiagramYG6GDRKOBinding194,
      );
      c4DiagramYG6GDRKOBinding70(
        c4DiagramYG6GDRKOBinding194,
        c4DiagramYG6GDRKOInput34.db.getRels(),
        c4DiagramYG6GDRKOInput34.db.getC4Shape,
        c4DiagramYG6GDRKOInput34,
      );
      c4DiagramYG6GDRKOBinding195.data.stopx = c4DiagramYG6GDRKOBinding56;
      c4DiagramYG6GDRKOBinding195.data.stopy = c4DiagramYG6GDRKOBinding57;
      let c4DiagramYG6GDRKOBinding197 = c4DiagramYG6GDRKOBinding195.data,
        c4DiagramYG6GDRKOBinding198 =
          c4DiagramYG6GDRKOBinding197.stopy -
          c4DiagramYG6GDRKOBinding197.starty +
          2 * c4DiagramYG6GDRKOBinding60.diagramMarginY,
        c4DiagramYG6GDRKOBinding199 =
          c4DiagramYG6GDRKOBinding197.stopx -
          c4DiagramYG6GDRKOBinding197.startx +
          2 * c4DiagramYG6GDRKOBinding60.diagramMarginX;
      c4DiagramYG6GDRKOBinding196 &&
        c4DiagramYG6GDRKOBinding194
          .append("text")
          .text(c4DiagramYG6GDRKOBinding196)
          .attr(
            "x",
            (c4DiagramYG6GDRKOBinding197.stopx -
              c4DiagramYG6GDRKOBinding197.startx) /
              2 -
              4 * c4DiagramYG6GDRKOBinding60.diagramMarginX,
          )
          .attr(
            "y",
            c4DiagramYG6GDRKOBinding197.starty +
              c4DiagramYG6GDRKOBinding60.diagramMarginY,
          );
      c(
        c4DiagramYG6GDRKOBinding194,
        c4DiagramYG6GDRKOBinding198,
        c4DiagramYG6GDRKOBinding199,
        c4DiagramYG6GDRKOBinding60.useMaxWidth,
      );
      let c4DiagramYG6GDRKOBinding200 = c4DiagramYG6GDRKOBinding196 ? 60 : 0;
      c4DiagramYG6GDRKOBinding194.attr(
        "viewBox",
        c4DiagramYG6GDRKOBinding197.startx -
          c4DiagramYG6GDRKOBinding60.diagramMarginX +
          " -" +
          (c4DiagramYG6GDRKOBinding60.diagramMarginY +
            c4DiagramYG6GDRKOBinding200) +
          " " +
          c4DiagramYG6GDRKOBinding199 +
          " " +
          (c4DiagramYG6GDRKOBinding198 + c4DiagramYG6GDRKOBinding200),
      );
      logger.debug("models:", c4DiagramYG6GDRKOBinding197);
    }, "draw"),
  };
  C4DiagramYG6GDRKO = {
    parser: c4DiagramYG6GDRKOBinding3,
    db: _e,
    renderer: c4DiagramYG6GDRKOBinding71,
    styles: defineFunctionName(
      (c4DiagramYG6GDRKOInput198) => `.person {
    stroke: ${c4DiagramYG6GDRKOInput198.personBorder};
    fill: ${c4DiagramYG6GDRKOInput198.personBkg};
  }
`,
      "getStyles",
    ),
    init: defineFunctionName(({ c4, wrap }) => {
      c4DiagramYG6GDRKOBinding71.setConf(c4);
      _e.setWrap(wrap);
    }, "init"),
  };
})();
export { C4DiagramYG6GDRKO as diagram };
