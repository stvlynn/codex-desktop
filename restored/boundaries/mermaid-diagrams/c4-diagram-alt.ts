// Restored from ref/webview/assets/c4Diagram-AHTNJAMY-VWCORO7k.js
// Mermaid C4 diagram definition alt (db + renderer + parser).
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
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  R as _chunkICPOFSXXR,
  V as _chunkICPOFSXXV,
  A,
  b,
  c,
  H,
  R,
  s,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWN,
  chunk5PVQY5BWT,
  chunk5PVQY5BWU,
  chunk5PVQY5BWUnderscore,
} from "./mermaid-common-utils-alt";
import {
  a,
  l,
  s as chunkYZCP3GAMS,
} from "../../diagrams/svg-drawing-helpers-alt";
function c4DiagramAHTNJAMYHelper1(
  c4DiagramAHTNJAMYInput140,
  c4DiagramAHTNJAMYInput141,
  c4DiagramAHTNJAMYInput142,
  c4DiagramAHTNJAMYInput143,
  c4DiagramAHTNJAMYInput144,
) {
  if (!c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].width)
    if (c4DiagramAHTNJAMYInput142) {
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].text =
        chunk5PVQY5BWUnderscore(
          c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].text,
          c4DiagramAHTNJAMYInput144,
          c4DiagramAHTNJAMYInput143,
        );
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].textLines =
        c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].text.split(
          s.lineBreakRegex,
        ).length;
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].width =
        c4DiagramAHTNJAMYInput144;
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].height =
        chunk5PVQY5BWT(
          c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].text,
          c4DiagramAHTNJAMYInput143,
        );
    } else {
      let c4DiagramAHTNJAMYBinding276 = c4DiagramAHTNJAMYInput141[
        c4DiagramAHTNJAMYInput140
      ].text.split(s.lineBreakRegex);
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].textLines =
        c4DiagramAHTNJAMYBinding276.length;
      let c4DiagramAHTNJAMYBinding277 = 0;
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].height = 0;
      c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].width = 0;
      for (let c4DiagramAHTNJAMYBinding290 of c4DiagramAHTNJAMYBinding276) {
        c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].width = Math.max(
          chunk5PVQY5BWN(
            c4DiagramAHTNJAMYBinding290,
            c4DiagramAHTNJAMYInput143,
          ),
          c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].width,
        );
        c4DiagramAHTNJAMYBinding277 = chunk5PVQY5BWT(
          c4DiagramAHTNJAMYBinding290,
          c4DiagramAHTNJAMYInput143,
        );
        c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].height =
          c4DiagramAHTNJAMYInput141[c4DiagramAHTNJAMYInput140].height +
          c4DiagramAHTNJAMYBinding277;
      }
    }
}
function c4DiagramAHTNJAMYHelper2(
  c4DiagramAHTNJAMYInput28,
  c4DiagramAHTNJAMYInput29,
  c4DiagramAHTNJAMYInput30,
  c4DiagramAHTNJAMYInput31,
  c4DiagramAHTNJAMYInput32,
) {
  let c4DiagramAHTNJAMYBinding188 = new c4DiagramAHTNJAMYBinding60(
    c4DiagramAHTNJAMYInput32,
  );
  c4DiagramAHTNJAMYBinding188.data.widthLimit =
    c4DiagramAHTNJAMYInput30.data.widthLimit /
    Math.min(c4DiagramAHTNJAMYBinding58, c4DiagramAHTNJAMYInput31.length);
  for (let [
    c4DiagramAHTNJAMYBinding200,
    c4DiagramAHTNJAMYBinding201,
  ] of c4DiagramAHTNJAMYInput31.entries()) {
    let c4DiagramAHTNJAMYBinding202 = 0;
    c4DiagramAHTNJAMYBinding201.image = {
      width: 0,
      height: 0,
      Y: 0,
    };
    c4DiagramAHTNJAMYBinding201.sprite &&
      ((c4DiagramAHTNJAMYBinding201.image.width = 48),
      (c4DiagramAHTNJAMYBinding201.image.height = 48),
      (c4DiagramAHTNJAMYBinding201.image.Y = c4DiagramAHTNJAMYBinding202),
      (c4DiagramAHTNJAMYBinding202 =
        c4DiagramAHTNJAMYBinding201.image.Y +
        c4DiagramAHTNJAMYBinding201.image.height));
    let c4DiagramAHTNJAMYBinding203 =
        c4DiagramAHTNJAMYBinding201.wrap && c4DiagramAHTNJAMYBinding59.wrap,
      c4DiagramAHTNJAMYBinding204 = c4DiagramAHTNJAMYBinding63(
        c4DiagramAHTNJAMYBinding59,
      );
    if (
      ((c4DiagramAHTNJAMYBinding204.fontSize += 2),
      (c4DiagramAHTNJAMYBinding204.fontWeight = "bold"),
      c4DiagramAHTNJAMYHelper1(
        "label",
        c4DiagramAHTNJAMYBinding201,
        c4DiagramAHTNJAMYBinding203,
        c4DiagramAHTNJAMYBinding204,
        c4DiagramAHTNJAMYBinding188.data.widthLimit,
      ),
      (c4DiagramAHTNJAMYBinding201.label.Y = c4DiagramAHTNJAMYBinding202 + 8),
      (c4DiagramAHTNJAMYBinding202 =
        c4DiagramAHTNJAMYBinding201.label.Y +
        c4DiagramAHTNJAMYBinding201.label.height),
      c4DiagramAHTNJAMYBinding201.type &&
        c4DiagramAHTNJAMYBinding201.type.text !== "" &&
        ((c4DiagramAHTNJAMYBinding201.type.text =
          "[" + c4DiagramAHTNJAMYBinding201.type.text + "]"),
        c4DiagramAHTNJAMYHelper1(
          "type",
          c4DiagramAHTNJAMYBinding201,
          c4DiagramAHTNJAMYBinding203,
          c4DiagramAHTNJAMYBinding63(c4DiagramAHTNJAMYBinding59),
          c4DiagramAHTNJAMYBinding188.data.widthLimit,
        ),
        (c4DiagramAHTNJAMYBinding201.type.Y = c4DiagramAHTNJAMYBinding202 + 5),
        (c4DiagramAHTNJAMYBinding202 =
          c4DiagramAHTNJAMYBinding201.type.Y +
          c4DiagramAHTNJAMYBinding201.type.height)),
      c4DiagramAHTNJAMYBinding201.descr &&
        c4DiagramAHTNJAMYBinding201.descr.text !== "")
    ) {
      let c4DiagramAHTNJAMYBinding289 = c4DiagramAHTNJAMYBinding63(
        c4DiagramAHTNJAMYBinding59,
      );
      c4DiagramAHTNJAMYBinding289.fontSize -= 2;
      c4DiagramAHTNJAMYHelper1(
        "descr",
        c4DiagramAHTNJAMYBinding201,
        c4DiagramAHTNJAMYBinding203,
        c4DiagramAHTNJAMYBinding289,
        c4DiagramAHTNJAMYBinding188.data.widthLimit,
      );
      c4DiagramAHTNJAMYBinding201.descr.Y = c4DiagramAHTNJAMYBinding202 + 20;
      c4DiagramAHTNJAMYBinding202 =
        c4DiagramAHTNJAMYBinding201.descr.Y +
        c4DiagramAHTNJAMYBinding201.descr.height;
    }
    if (
      c4DiagramAHTNJAMYBinding200 == 0 ||
      c4DiagramAHTNJAMYBinding200 % c4DiagramAHTNJAMYBinding58 === 0
    ) {
      let c4DiagramAHTNJAMYBinding291 =
          c4DiagramAHTNJAMYInput30.data.startx +
          c4DiagramAHTNJAMYBinding59.diagramMarginX,
        c4DiagramAHTNJAMYBinding292 =
          c4DiagramAHTNJAMYInput30.data.stopy +
          c4DiagramAHTNJAMYBinding59.diagramMarginY +
          c4DiagramAHTNJAMYBinding202;
      c4DiagramAHTNJAMYBinding188.setData(
        c4DiagramAHTNJAMYBinding291,
        c4DiagramAHTNJAMYBinding291,
        c4DiagramAHTNJAMYBinding292,
        c4DiagramAHTNJAMYBinding292,
      );
    } else {
      let c4DiagramAHTNJAMYBinding286 =
          c4DiagramAHTNJAMYBinding188.data.stopx ===
          c4DiagramAHTNJAMYBinding188.data.startx
            ? c4DiagramAHTNJAMYBinding188.data.startx
            : c4DiagramAHTNJAMYBinding188.data.stopx +
              c4DiagramAHTNJAMYBinding59.diagramMarginX,
        c4DiagramAHTNJAMYBinding287 = c4DiagramAHTNJAMYBinding188.data.starty;
      c4DiagramAHTNJAMYBinding188.setData(
        c4DiagramAHTNJAMYBinding286,
        c4DiagramAHTNJAMYBinding286,
        c4DiagramAHTNJAMYBinding287,
        c4DiagramAHTNJAMYBinding287,
      );
    }
    c4DiagramAHTNJAMYBinding188.name = c4DiagramAHTNJAMYBinding201.alias;
    let c4DiagramAHTNJAMYBinding205 =
        c4DiagramAHTNJAMYInput32.db.getC4ShapeArray(
          c4DiagramAHTNJAMYBinding201.alias,
        ),
      c4DiagramAHTNJAMYBinding206 = c4DiagramAHTNJAMYInput32.db.getC4ShapeKeys(
        c4DiagramAHTNJAMYBinding201.alias,
      );
    c4DiagramAHTNJAMYBinding206.length > 0 &&
      c4DiagramAHTNJAMYBinding66(
        c4DiagramAHTNJAMYBinding188,
        c4DiagramAHTNJAMYInput28,
        c4DiagramAHTNJAMYBinding205,
        c4DiagramAHTNJAMYBinding206,
      );
    c4DiagramAHTNJAMYInput29 = c4DiagramAHTNJAMYBinding201.alias;
    let c4DiagramAHTNJAMYBinding207 = c4DiagramAHTNJAMYInput32.db.getBoundaries(
      c4DiagramAHTNJAMYInput29,
    );
    c4DiagramAHTNJAMYBinding207.length > 0 &&
      c4DiagramAHTNJAMYHelper2(
        c4DiagramAHTNJAMYInput28,
        c4DiagramAHTNJAMYInput29,
        c4DiagramAHTNJAMYBinding188,
        c4DiagramAHTNJAMYBinding207,
        c4DiagramAHTNJAMYInput32,
      );
    c4DiagramAHTNJAMYBinding201.alias !== "global" &&
      c4DiagramAHTNJAMYBinding65(
        c4DiagramAHTNJAMYInput28,
        c4DiagramAHTNJAMYBinding201,
        c4DiagramAHTNJAMYBinding188,
      );
    c4DiagramAHTNJAMYInput30.data.stopy = Math.max(
      c4DiagramAHTNJAMYBinding188.data.stopy +
        c4DiagramAHTNJAMYBinding59.c4ShapeMargin,
      c4DiagramAHTNJAMYInput30.data.stopy,
    );
    c4DiagramAHTNJAMYInput30.data.stopx = Math.max(
      c4DiagramAHTNJAMYBinding188.data.stopx +
        c4DiagramAHTNJAMYBinding59.c4ShapeMargin,
      c4DiagramAHTNJAMYInput30.data.stopx,
    );
    c4DiagramAHTNJAMYBinding55 = Math.max(
      c4DiagramAHTNJAMYBinding55,
      c4DiagramAHTNJAMYInput30.data.stopx,
    );
    c4DiagramAHTNJAMYBinding56 = Math.max(
      c4DiagramAHTNJAMYBinding56,
      c4DiagramAHTNJAMYInput30.data.stopy,
    );
  }
}
var c4DiagramAHTNJAMYBinding1,
  c4DiagramAHTNJAMYBinding2,
  c4DiagramAHTNJAMYBinding3,
  c4DiagramAHTNJAMYBinding4,
  c4DiagramAHTNJAMYBinding5,
  c4DiagramAHTNJAMYBinding6,
  c4DiagramAHTNJAMYBinding7,
  c4DiagramAHTNJAMYBinding8,
  c4DiagramAHTNJAMYBinding9,
  c4DiagramAHTNJAMYBinding10,
  c4DiagramAHTNJAMYBinding11,
  c4DiagramAHTNJAMYBinding12,
  c4DiagramAHTNJAMYBinding13,
  c4DiagramAHTNJAMYBinding14,
  c4DiagramAHTNJAMYBinding15,
  c4DiagramAHTNJAMYBinding16,
  c4DiagramAHTNJAMYBinding17,
  c4DiagramAHTNJAMYBinding18,
  c4DiagramAHTNJAMYBinding19,
  c4DiagramAHTNJAMYBinding20,
  c4DiagramAHTNJAMYBinding21,
  c4DiagramAHTNJAMYBinding22,
  c4DiagramAHTNJAMYBinding23,
  c4DiagramAHTNJAMYBinding24,
  c4DiagramAHTNJAMYBinding25,
  c4DiagramAHTNJAMYBinding26,
  c4DiagramAHTNJAMYBinding27,
  c4DiagramAHTNJAMYBinding28,
  c4DiagramAHTNJAMYBinding29,
  c4DiagramAHTNJAMYBinding30,
  c4DiagramAHTNJAMYBinding31,
  c4DiagramAHTNJAMYBinding32,
  c4DiagramAHTNJAMYBinding33,
  c4DiagramAHTNJAMYBinding34,
  c4DiagramAHTNJAMYBinding35,
  c4DiagramAHTNJAMYBinding36,
  c4DiagramAHTNJAMYBinding37,
  c4DiagramAHTNJAMYBinding38,
  c4DiagramAHTNJAMYBinding39,
  c4DiagramAHTNJAMYBinding40,
  _e,
  c4DiagramAHTNJAMYBinding41,
  c4DiagramAHTNJAMYBinding42,
  be,
  c4DiagramAHTNJAMYBinding43,
  c4DiagramAHTNJAMYBinding44,
  c4DiagramAHTNJAMYBinding45,
  c4DiagramAHTNJAMYBinding46,
  c4DiagramAHTNJAMYBinding47,
  c4DiagramAHTNJAMYBinding48,
  c4DiagramAHTNJAMYBinding49,
  c4DiagramAHTNJAMYBinding50,
  c4DiagramAHTNJAMYBinding51,
  c4DiagramAHTNJAMYBinding52,
  c4DiagramAHTNJAMYBinding53,
  c4DiagramAHTNJAMYBinding54,
  c4DiagramAHTNJAMYBinding55,
  c4DiagramAHTNJAMYBinding56,
  c4DiagramAHTNJAMYBinding57,
  c4DiagramAHTNJAMYBinding58,
  c4DiagramAHTNJAMYBinding59,
  c4DiagramAHTNJAMYBinding60,
  c4DiagramAHTNJAMYBinding61,
  c4DiagramAHTNJAMYBinding62,
  c4DiagramAHTNJAMYBinding63,
  c4DiagramAHTNJAMYBinding64,
  c4DiagramAHTNJAMYBinding65,
  c4DiagramAHTNJAMYBinding66,
  $,
  c4DiagramAHTNJAMYBinding67,
  c4DiagramAHTNJAMYBinding68,
  c4DiagramAHTNJAMYBinding69,
  c4DiagramAHTNJAMYBinding70,
  C4DiagramAHTNJAMY;
esmInit(() => {
  l();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  c4DiagramAHTNJAMYBinding1 = dist();
  c4DiagramAHTNJAMYBinding2 = (function () {
    var c4DiagramAHTNJAMYBinding71 = defineFunctionName(function (
        c4DiagramAHTNJAMYInput192,
        c4DiagramAHTNJAMYInput193,
        c4DiagramAHTNJAMYInput194,
        c4DiagramAHTNJAMYInput195,
      ) {
        for (
          c4DiagramAHTNJAMYInput194 ||= {},
            c4DiagramAHTNJAMYInput195 = c4DiagramAHTNJAMYInput192.length;
          c4DiagramAHTNJAMYInput195--;
          c4DiagramAHTNJAMYInput194[
            c4DiagramAHTNJAMYInput192[c4DiagramAHTNJAMYInput195]
          ] = c4DiagramAHTNJAMYInput193
        );
        return c4DiagramAHTNJAMYInput194;
      }, "o"),
      c4DiagramAHTNJAMYBinding72 = [1, 24],
      c4DiagramAHTNJAMYBinding73 = [1, 25],
      c4DiagramAHTNJAMYBinding74 = [1, 26],
      c4DiagramAHTNJAMYBinding75 = [1, 27],
      c4DiagramAHTNJAMYBinding76 = [1, 28],
      c4DiagramAHTNJAMYBinding77 = [1, 63],
      c4DiagramAHTNJAMYBinding78 = [1, 64],
      c4DiagramAHTNJAMYBinding79 = [1, 65],
      c4DiagramAHTNJAMYBinding80 = [1, 66],
      c4DiagramAHTNJAMYBinding81 = [1, 67],
      c4DiagramAHTNJAMYBinding82 = [1, 68],
      c4DiagramAHTNJAMYBinding83 = [1, 69],
      c4DiagramAHTNJAMYBinding84 = [1, 29],
      c4DiagramAHTNJAMYBinding85 = [1, 30],
      c4DiagramAHTNJAMYBinding86 = [1, 31],
      c4DiagramAHTNJAMYBinding87 = [1, 32],
      c4DiagramAHTNJAMYBinding88 = [1, 33],
      c4DiagramAHTNJAMYBinding89 = [1, 34],
      c4DiagramAHTNJAMYBinding90 = [1, 35],
      c4DiagramAHTNJAMYBinding91 = [1, 36],
      c4DiagramAHTNJAMYBinding92 = [1, 37],
      c4DiagramAHTNJAMYBinding93 = [1, 38],
      c4DiagramAHTNJAMYBinding94 = [1, 39],
      c4DiagramAHTNJAMYBinding95 = [1, 40],
      c4DiagramAHTNJAMYBinding96 = [1, 41],
      c4DiagramAHTNJAMYBinding97 = [1, 42],
      c4DiagramAHTNJAMYBinding98 = [1, 43],
      c4DiagramAHTNJAMYBinding99 = [1, 44],
      c4DiagramAHTNJAMYBinding100 = [1, 45],
      c4DiagramAHTNJAMYBinding101 = [1, 46],
      c4DiagramAHTNJAMYBinding102 = [1, 47],
      c4DiagramAHTNJAMYBinding103 = [1, 48],
      c4DiagramAHTNJAMYBinding104 = [1, 50],
      c4DiagramAHTNJAMYBinding105 = [1, 51],
      c4DiagramAHTNJAMYBinding106 = [1, 52],
      c4DiagramAHTNJAMYBinding107 = [1, 53],
      c4DiagramAHTNJAMYBinding108 = [1, 54],
      c4DiagramAHTNJAMYBinding109 = [1, 55],
      c4DiagramAHTNJAMYBinding110 = [1, 56],
      c4DiagramAHTNJAMYBinding111 = [1, 57],
      c4DiagramAHTNJAMYBinding112 = [1, 58],
      c4DiagramAHTNJAMYBinding113 = [1, 59],
      c4DiagramAHTNJAMYBinding114 = [1, 60],
      c4DiagramAHTNJAMYBinding115 = [14, 42],
      c4DiagramAHTNJAMYBinding116 = [
        14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74,
      ],
      c4DiagramAHTNJAMYBinding117 = [
        12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74,
      ],
      c4DiagramAHTNJAMYBinding118 = [1, 82],
      c4DiagramAHTNJAMYBinding119 = [1, 83],
      c4DiagramAHTNJAMYBinding120 = [1, 84],
      c4DiagramAHTNJAMYBinding121 = [1, 85],
      c4DiagramAHTNJAMYBinding122 = [12, 14, 42],
      c4DiagramAHTNJAMYBinding123 = [12, 14, 33, 42],
      c4DiagramAHTNJAMYBinding124 = [12, 14, 33, 42, 76, 77, 79, 80],
      c4DiagramAHTNJAMYBinding125 = [12, 33],
      c4DiagramAHTNJAMYBinding126 = [
        34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        73, 74,
      ],
      c4DiagramAHTNJAMYBinding127 = {
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
          c4DiagramAHTNJAMYInput6,
          c4DiagramAHTNJAMYInput7,
          c4DiagramAHTNJAMYInput8,
          c4DiagramAHTNJAMYInput9,
          c4DiagramAHTNJAMYInput10,
          c4DiagramAHTNJAMYInput11,
          c4DiagramAHTNJAMYInput12,
        ) {
          var c4DiagramAHTNJAMYBinding136 = c4DiagramAHTNJAMYInput11.length - 1;
          switch (c4DiagramAHTNJAMYInput10) {
            case 3:
              c4DiagramAHTNJAMYInput9.setDirection("TB");
              break;
            case 4:
              c4DiagramAHTNJAMYInput9.setDirection("BT");
              break;
            case 5:
              c4DiagramAHTNJAMYInput9.setDirection("RL");
              break;
            case 6:
              c4DiagramAHTNJAMYInput9.setDirection("LR");
              break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
              c4DiagramAHTNJAMYInput9.setC4Type(
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136 - 3],
              );
              break;
            case 19:
              c4DiagramAHTNJAMYInput9.setTitle(
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].substring(
                  6,
                ),
              );
              this.$ =
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].substring(
                  6,
                );
              break;
            case 20:
              c4DiagramAHTNJAMYInput9.setAccDescription(
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].substring(
                  15,
                ),
              );
              this.$ =
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].substring(
                  15,
                );
              break;
            case 21:
              this.$ =
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].trim();
              c4DiagramAHTNJAMYInput9.setTitle(this.$);
              break;
            case 22:
            case 23:
              this.$ =
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].trim();
              c4DiagramAHTNJAMYInput9.setAccDescription(this.$);
              break;
            case 28:
              c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].splice(
                2,
                0,
                "ENTERPRISE",
              );
              c4DiagramAHTNJAMYInput9.addPersonOrSystemBoundary(
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 29:
              c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].splice(
                2,
                0,
                "SYSTEM",
              );
              c4DiagramAHTNJAMYInput9.addPersonOrSystemBoundary(
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 30:
              c4DiagramAHTNJAMYInput9.addPersonOrSystemBoundary(
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 31:
              c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].splice(
                2,
                0,
                "CONTAINER",
              );
              c4DiagramAHTNJAMYInput9.addContainerBoundary(
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 32:
              c4DiagramAHTNJAMYInput9.addDeploymentNode(
                "node",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 33:
              c4DiagramAHTNJAMYInput9.addDeploymentNode(
                "nodeL",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 34:
              c4DiagramAHTNJAMYInput9.addDeploymentNode(
                "nodeR",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 35:
              c4DiagramAHTNJAMYInput9.popBoundaryParseStack();
              break;
            case 39:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "person",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 40:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "external_person",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 41:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "system",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 42:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "system_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 43:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "system_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 44:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "external_system",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 45:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "external_system_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 46:
              c4DiagramAHTNJAMYInput9.addPersonOrSystem(
                "external_system_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 47:
              c4DiagramAHTNJAMYInput9.addContainer(
                "container",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 48:
              c4DiagramAHTNJAMYInput9.addContainer(
                "container_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 49:
              c4DiagramAHTNJAMYInput9.addContainer(
                "container_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 50:
              c4DiagramAHTNJAMYInput9.addContainer(
                "external_container",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 51:
              c4DiagramAHTNJAMYInput9.addContainer(
                "external_container_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 52:
              c4DiagramAHTNJAMYInput9.addContainer(
                "external_container_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 53:
              c4DiagramAHTNJAMYInput9.addComponent(
                "component",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 54:
              c4DiagramAHTNJAMYInput9.addComponent(
                "component_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 55:
              c4DiagramAHTNJAMYInput9.addComponent(
                "component_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 56:
              c4DiagramAHTNJAMYInput9.addComponent(
                "external_component",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 57:
              c4DiagramAHTNJAMYInput9.addComponent(
                "external_component_db",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 58:
              c4DiagramAHTNJAMYInput9.addComponent(
                "external_component_queue",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 60:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 61:
              c4DiagramAHTNJAMYInput9.addRel(
                "birel",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 62:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel_u",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 63:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel_d",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 64:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel_l",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 65:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel_r",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 66:
              c4DiagramAHTNJAMYInput9.addRel(
                "rel_b",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 67:
              c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].splice(
                0,
                1,
              );
              c4DiagramAHTNJAMYInput9.addRel(
                "rel",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 68:
              c4DiagramAHTNJAMYInput9.updateElStyle(
                "update_el_style",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 69:
              c4DiagramAHTNJAMYInput9.updateRelStyle(
                "update_rel_style",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 70:
              c4DiagramAHTNJAMYInput9.updateLayoutConfig(
                "update_layout_config",
                ...c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 71:
              this.$ = [c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136]];
              break;
            case 72:
              c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].unshift(
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136 - 1],
              );
              this.$ = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136];
              break;
            case 73:
            case 75:
              this.$ =
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].trim();
              break;
            case 74:
              let c4DiagramAHTNJAMYBinding137 = {};
              c4DiagramAHTNJAMYBinding137[
                c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136 - 1].trim()
              ] = c4DiagramAHTNJAMYInput11[c4DiagramAHTNJAMYBinding136].trim();
              this.$ = c4DiagramAHTNJAMYBinding137;
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
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            13: 70,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            13: 71,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            13: 72,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            13: 73,
            19: 20,
            20: 21,
            21: 22,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            14: [1, 74],
          },
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 13], {
            43: 23,
            29: 49,
            30: 61,
            32: 62,
            20: 75,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 14]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding116, [2, 16], {
            12: [1, 76],
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 36], {
            12: [1, 77],
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding117, [2, 19]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding117, [2, 20]),
          {
            25: [1, 78],
          },
          {
            27: [1, 79],
          },
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding117, [2, 23]),
          {
            35: 80,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 86,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 87,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 88,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 89,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 90,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 91,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 92,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 93,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 94,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 95,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 96,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 97,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 98,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 99,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 100,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 101,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 102,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 103,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 104,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 59]),
          {
            35: 105,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 106,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 107,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 108,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 109,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 110,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 111,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 112,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 113,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 114,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 115,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            20: 116,
            29: 49,
            30: 61,
            32: 62,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            43: 23,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          },
          {
            12: [1, 118],
            33: [1, 117],
          },
          {
            35: 119,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 120,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 121,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 122,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 123,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 124,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          },
          {
            35: 125,
            75: 81,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
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
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 15]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding116, [2, 17], {
            21: 22,
            19: 130,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 37], {
            19: 20,
            20: 21,
            21: 22,
            43: 23,
            29: 49,
            30: 61,
            32: 62,
            13: 131,
            22: c4DiagramAHTNJAMYBinding72,
            23: c4DiagramAHTNJAMYBinding73,
            24: c4DiagramAHTNJAMYBinding74,
            26: c4DiagramAHTNJAMYBinding75,
            28: c4DiagramAHTNJAMYBinding76,
            34: c4DiagramAHTNJAMYBinding77,
            36: c4DiagramAHTNJAMYBinding78,
            37: c4DiagramAHTNJAMYBinding79,
            38: c4DiagramAHTNJAMYBinding80,
            39: c4DiagramAHTNJAMYBinding81,
            40: c4DiagramAHTNJAMYBinding82,
            41: c4DiagramAHTNJAMYBinding83,
            44: c4DiagramAHTNJAMYBinding84,
            45: c4DiagramAHTNJAMYBinding85,
            46: c4DiagramAHTNJAMYBinding86,
            47: c4DiagramAHTNJAMYBinding87,
            48: c4DiagramAHTNJAMYBinding88,
            49: c4DiagramAHTNJAMYBinding89,
            50: c4DiagramAHTNJAMYBinding90,
            51: c4DiagramAHTNJAMYBinding91,
            52: c4DiagramAHTNJAMYBinding92,
            53: c4DiagramAHTNJAMYBinding93,
            54: c4DiagramAHTNJAMYBinding94,
            55: c4DiagramAHTNJAMYBinding95,
            56: c4DiagramAHTNJAMYBinding96,
            57: c4DiagramAHTNJAMYBinding97,
            58: c4DiagramAHTNJAMYBinding98,
            59: c4DiagramAHTNJAMYBinding99,
            60: c4DiagramAHTNJAMYBinding100,
            61: c4DiagramAHTNJAMYBinding101,
            62: c4DiagramAHTNJAMYBinding102,
            63: c4DiagramAHTNJAMYBinding103,
            64: c4DiagramAHTNJAMYBinding104,
            65: c4DiagramAHTNJAMYBinding105,
            66: c4DiagramAHTNJAMYBinding106,
            67: c4DiagramAHTNJAMYBinding107,
            68: c4DiagramAHTNJAMYBinding108,
            69: c4DiagramAHTNJAMYBinding109,
            70: c4DiagramAHTNJAMYBinding110,
            71: c4DiagramAHTNJAMYBinding111,
            72: c4DiagramAHTNJAMYBinding112,
            73: c4DiagramAHTNJAMYBinding113,
            74: c4DiagramAHTNJAMYBinding114,
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding117, [2, 21]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding117, [2, 22]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 39]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding123, [2, 71], {
            75: 81,
            35: 132,
            76: c4DiagramAHTNJAMYBinding118,
            77: c4DiagramAHTNJAMYBinding119,
            79: c4DiagramAHTNJAMYBinding120,
            80: c4DiagramAHTNJAMYBinding121,
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding124, [2, 73]),
          {
            78: [1, 133],
          },
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding124, [2, 75]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding124, [2, 76]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 40]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 41]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 42]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 43]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 44]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 45]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 46]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 47]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 48]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 49]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 50]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 51]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 52]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 53]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 54]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 55]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 56]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 57]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 58]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 60]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 61]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 62]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 63]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 64]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 65]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 66]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 67]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 68]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 69]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 70]),
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
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 28]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 29]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 30]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 31]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 32]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 33]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding125, [2, 34]),
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
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding116, [2, 18]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding115, [2, 38]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding123, [2, 72]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding124, [2, 74]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 24]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding122, [2, 35]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding126, [2, 25]),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding126, [2, 26], {
            12: [1, 138],
          }),
          c4DiagramAHTNJAMYBinding71(c4DiagramAHTNJAMYBinding126, [2, 27]),
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
          c4DiagramAHTNJAMYInput181,
          c4DiagramAHTNJAMYInput182,
        ) {
          if (c4DiagramAHTNJAMYInput182.recoverable)
            this.trace(c4DiagramAHTNJAMYInput181);
          else {
            var c4DiagramAHTNJAMYBinding288 = Error(c4DiagramAHTNJAMYInput181);
            throw (
              (c4DiagramAHTNJAMYBinding288.hash = c4DiagramAHTNJAMYInput182),
              c4DiagramAHTNJAMYBinding288
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (c4DiagramAHTNJAMYInput17) {
          var c4DiagramAHTNJAMYBinding138 = this,
            c4DiagramAHTNJAMYBinding139 = [0],
            c4DiagramAHTNJAMYBinding140 = [],
            c4DiagramAHTNJAMYBinding141 = [null],
            c4DiagramAHTNJAMYBinding142 = [],
            c4DiagramAHTNJAMYBinding143 = this.table,
            c4DiagramAHTNJAMYBinding144 = "",
            c4DiagramAHTNJAMYBinding145 = 0,
            c4DiagramAHTNJAMYBinding146 = 0,
            c4DiagramAHTNJAMYBinding147 = 0,
            c4DiagramAHTNJAMYBinding150 =
              c4DiagramAHTNJAMYBinding142.slice.call(arguments, 1),
            c4DiagramAHTNJAMYBinding151 = Object.create(this.lexer),
            c4DiagramAHTNJAMYBinding152 = {
              yy: {},
            };
          for (var c4DiagramAHTNJAMYBinding153 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              c4DiagramAHTNJAMYBinding153,
            ) &&
              (c4DiagramAHTNJAMYBinding152.yy[c4DiagramAHTNJAMYBinding153] =
                this.yy[c4DiagramAHTNJAMYBinding153]);
          c4DiagramAHTNJAMYBinding151.setInput(
            c4DiagramAHTNJAMYInput17,
            c4DiagramAHTNJAMYBinding152.yy,
          );
          c4DiagramAHTNJAMYBinding152.yy.lexer = c4DiagramAHTNJAMYBinding151;
          c4DiagramAHTNJAMYBinding152.yy.parser = this;
          c4DiagramAHTNJAMYBinding151.yylloc === undefined &&
            (c4DiagramAHTNJAMYBinding151.yylloc = {});
          var c4DiagramAHTNJAMYBinding154 = c4DiagramAHTNJAMYBinding151.yylloc;
          c4DiagramAHTNJAMYBinding142.push(c4DiagramAHTNJAMYBinding154);
          var c4DiagramAHTNJAMYBinding155 =
            c4DiagramAHTNJAMYBinding151.options &&
            c4DiagramAHTNJAMYBinding151.options.ranges;
          typeof c4DiagramAHTNJAMYBinding152.yy.parseError == "function"
            ? (this.parseError = c4DiagramAHTNJAMYBinding152.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function c4DiagramAHTNJAMYHelper4(c4DiagramAHTNJAMYInput196) {
            c4DiagramAHTNJAMYBinding139.length -= 2 * c4DiagramAHTNJAMYInput196;
            c4DiagramAHTNJAMYBinding141.length -= c4DiagramAHTNJAMYInput196;
            c4DiagramAHTNJAMYBinding142.length -= c4DiagramAHTNJAMYInput196;
          }
          defineFunctionName(c4DiagramAHTNJAMYHelper4, "popStack");
          function c4DiagramAHTNJAMYHelper5() {
            var c4DiagramAHTNJAMYBinding278 =
              c4DiagramAHTNJAMYBinding140.pop() ||
              c4DiagramAHTNJAMYBinding151.lex() ||
              1;
            return (
              typeof c4DiagramAHTNJAMYBinding278 != "number" &&
                (c4DiagramAHTNJAMYBinding278 instanceof Array &&
                  ((c4DiagramAHTNJAMYBinding140 = c4DiagramAHTNJAMYBinding278),
                  (c4DiagramAHTNJAMYBinding278 =
                    c4DiagramAHTNJAMYBinding140.pop())),
                (c4DiagramAHTNJAMYBinding278 =
                  c4DiagramAHTNJAMYBinding138.symbols_[
                    c4DiagramAHTNJAMYBinding278
                  ] || c4DiagramAHTNJAMYBinding278)),
              c4DiagramAHTNJAMYBinding278
            );
          }
          defineFunctionName(c4DiagramAHTNJAMYHelper5, "lex");
          for (
            var c4DiagramAHTNJAMYBinding156,
              c4DiagramAHTNJAMYBinding157,
              c4DiagramAHTNJAMYBinding158,
              c4DiagramAHTNJAMYBinding159,
              c4DiagramAHTNJAMYBinding160,
              c4DiagramAHTNJAMYBinding161 = {},
              c4DiagramAHTNJAMYBinding162,
              c4DiagramAHTNJAMYBinding163,
              c4DiagramAHTNJAMYBinding164,
              c4DiagramAHTNJAMYBinding165;
            ;
          ) {
            if (
              ((c4DiagramAHTNJAMYBinding158 =
                c4DiagramAHTNJAMYBinding139[
                  c4DiagramAHTNJAMYBinding139.length - 1
                ]),
              this.defaultActions[c4DiagramAHTNJAMYBinding158]
                ? (c4DiagramAHTNJAMYBinding159 =
                    this.defaultActions[c4DiagramAHTNJAMYBinding158])
                : ((c4DiagramAHTNJAMYBinding156 ??= c4DiagramAHTNJAMYHelper5()),
                  (c4DiagramAHTNJAMYBinding159 =
                    c4DiagramAHTNJAMYBinding143[c4DiagramAHTNJAMYBinding158] &&
                    c4DiagramAHTNJAMYBinding143[c4DiagramAHTNJAMYBinding158][
                      c4DiagramAHTNJAMYBinding156
                    ])),
              c4DiagramAHTNJAMYBinding159 === undefined ||
                !c4DiagramAHTNJAMYBinding159.length ||
                !c4DiagramAHTNJAMYBinding159[0])
            ) {
              var c4DiagramAHTNJAMYBinding166 = "";
              for (c4DiagramAHTNJAMYBinding162 in ((c4DiagramAHTNJAMYBinding165 =
                []),
              c4DiagramAHTNJAMYBinding143[c4DiagramAHTNJAMYBinding158]))
                this.terminals_[c4DiagramAHTNJAMYBinding162] &&
                  c4DiagramAHTNJAMYBinding162 > 2 &&
                  c4DiagramAHTNJAMYBinding165.push(
                    "'" + this.terminals_[c4DiagramAHTNJAMYBinding162] + "'",
                  );
              c4DiagramAHTNJAMYBinding166 =
                c4DiagramAHTNJAMYBinding151.showPosition
                  ? "Parse error on line " +
                    (c4DiagramAHTNJAMYBinding145 + 1) +
                    ":\n" +
                    c4DiagramAHTNJAMYBinding151.showPosition() +
                    "\nExpecting " +
                    c4DiagramAHTNJAMYBinding165.join(", ") +
                    ", got '" +
                    (this.terminals_[c4DiagramAHTNJAMYBinding156] ||
                      c4DiagramAHTNJAMYBinding156) +
                    "'"
                  : "Parse error on line " +
                    (c4DiagramAHTNJAMYBinding145 + 1) +
                    ": Unexpected " +
                    (c4DiagramAHTNJAMYBinding156 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[c4DiagramAHTNJAMYBinding156] ||
                          c4DiagramAHTNJAMYBinding156) +
                        "'");
              this.parseError(c4DiagramAHTNJAMYBinding166, {
                text: c4DiagramAHTNJAMYBinding151.match,
                token:
                  this.terminals_[c4DiagramAHTNJAMYBinding156] ||
                  c4DiagramAHTNJAMYBinding156,
                line: c4DiagramAHTNJAMYBinding151.yylineno,
                loc: c4DiagramAHTNJAMYBinding154,
                expected: c4DiagramAHTNJAMYBinding165,
              });
            }
            if (
              c4DiagramAHTNJAMYBinding159[0] instanceof Array &&
              c4DiagramAHTNJAMYBinding159.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  c4DiagramAHTNJAMYBinding158 +
                  ", token: " +
                  c4DiagramAHTNJAMYBinding156,
              );
            switch (c4DiagramAHTNJAMYBinding159[0]) {
              case 1:
                c4DiagramAHTNJAMYBinding139.push(c4DiagramAHTNJAMYBinding156);
                c4DiagramAHTNJAMYBinding141.push(
                  c4DiagramAHTNJAMYBinding151.yytext,
                );
                c4DiagramAHTNJAMYBinding142.push(
                  c4DiagramAHTNJAMYBinding151.yylloc,
                );
                c4DiagramAHTNJAMYBinding139.push(
                  c4DiagramAHTNJAMYBinding159[1],
                );
                c4DiagramAHTNJAMYBinding156 = null;
                c4DiagramAHTNJAMYBinding157
                  ? ((c4DiagramAHTNJAMYBinding156 =
                      c4DiagramAHTNJAMYBinding157),
                    (c4DiagramAHTNJAMYBinding157 = null))
                  : ((c4DiagramAHTNJAMYBinding146 =
                      c4DiagramAHTNJAMYBinding151.yyleng),
                    (c4DiagramAHTNJAMYBinding144 =
                      c4DiagramAHTNJAMYBinding151.yytext),
                    (c4DiagramAHTNJAMYBinding145 =
                      c4DiagramAHTNJAMYBinding151.yylineno),
                    (c4DiagramAHTNJAMYBinding154 =
                      c4DiagramAHTNJAMYBinding151.yylloc),
                    c4DiagramAHTNJAMYBinding147 > 0 &&
                      c4DiagramAHTNJAMYBinding147--);
                break;
              case 2:
                if (
                  ((c4DiagramAHTNJAMYBinding163 =
                    this.productions_[c4DiagramAHTNJAMYBinding159[1]][1]),
                  (c4DiagramAHTNJAMYBinding161.$ =
                    c4DiagramAHTNJAMYBinding141[
                      c4DiagramAHTNJAMYBinding141.length -
                        c4DiagramAHTNJAMYBinding163
                    ]),
                  (c4DiagramAHTNJAMYBinding161._$ = {
                    first_line:
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length -
                          (c4DiagramAHTNJAMYBinding163 || 1)
                      ].first_line,
                    last_line:
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length - 1
                      ].last_line,
                    first_column:
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length -
                          (c4DiagramAHTNJAMYBinding163 || 1)
                      ].first_column,
                    last_column:
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length - 1
                      ].last_column,
                  }),
                  c4DiagramAHTNJAMYBinding155 &&
                    (c4DiagramAHTNJAMYBinding161._$.range = [
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length -
                          (c4DiagramAHTNJAMYBinding163 || 1)
                      ].range[0],
                      c4DiagramAHTNJAMYBinding142[
                        c4DiagramAHTNJAMYBinding142.length - 1
                      ].range[1],
                    ]),
                  (c4DiagramAHTNJAMYBinding160 = this.performAction.apply(
                    c4DiagramAHTNJAMYBinding161,
                    [
                      c4DiagramAHTNJAMYBinding144,
                      c4DiagramAHTNJAMYBinding146,
                      c4DiagramAHTNJAMYBinding145,
                      c4DiagramAHTNJAMYBinding152.yy,
                      c4DiagramAHTNJAMYBinding159[1],
                      c4DiagramAHTNJAMYBinding141,
                      c4DiagramAHTNJAMYBinding142,
                    ].concat(c4DiagramAHTNJAMYBinding150),
                  )),
                  c4DiagramAHTNJAMYBinding160 !== undefined)
                )
                  return c4DiagramAHTNJAMYBinding160;
                c4DiagramAHTNJAMYBinding163 &&
                  ((c4DiagramAHTNJAMYBinding139 =
                    c4DiagramAHTNJAMYBinding139.slice(
                      0,
                      -1 * c4DiagramAHTNJAMYBinding163 * 2,
                    )),
                  (c4DiagramAHTNJAMYBinding141 =
                    c4DiagramAHTNJAMYBinding141.slice(
                      0,
                      -1 * c4DiagramAHTNJAMYBinding163,
                    )),
                  (c4DiagramAHTNJAMYBinding142 =
                    c4DiagramAHTNJAMYBinding142.slice(
                      0,
                      -1 * c4DiagramAHTNJAMYBinding163,
                    )));
                c4DiagramAHTNJAMYBinding139.push(
                  this.productions_[c4DiagramAHTNJAMYBinding159[1]][0],
                );
                c4DiagramAHTNJAMYBinding141.push(c4DiagramAHTNJAMYBinding161.$);
                c4DiagramAHTNJAMYBinding142.push(
                  c4DiagramAHTNJAMYBinding161._$,
                );
                c4DiagramAHTNJAMYBinding164 =
                  c4DiagramAHTNJAMYBinding143[
                    c4DiagramAHTNJAMYBinding139[
                      c4DiagramAHTNJAMYBinding139.length - 2
                    ]
                  ][
                    c4DiagramAHTNJAMYBinding139[
                      c4DiagramAHTNJAMYBinding139.length - 1
                    ]
                  ];
                c4DiagramAHTNJAMYBinding139.push(c4DiagramAHTNJAMYBinding164);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    c4DiagramAHTNJAMYBinding127.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          c4DiagramAHTNJAMYInput190,
          c4DiagramAHTNJAMYInput191,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              c4DiagramAHTNJAMYInput190,
              c4DiagramAHTNJAMYInput191,
            );
          else throw Error(c4DiagramAHTNJAMYInput190);
        }, "parseError"),
        setInput: defineFunctionName(function (
          c4DiagramAHTNJAMYInput127,
          c4DiagramAHTNJAMYInput128,
        ) {
          return (
            (this.yy = c4DiagramAHTNJAMYInput128 || this.yy || {}),
            (this._input = c4DiagramAHTNJAMYInput127),
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
          var c4DiagramAHTNJAMYBinding270 = this._input[0];
          return (
            (this.yytext += c4DiagramAHTNJAMYBinding270),
            this.yyleng++,
            this.offset++,
            (this.match += c4DiagramAHTNJAMYBinding270),
            (this.matched += c4DiagramAHTNJAMYBinding270),
            c4DiagramAHTNJAMYBinding270.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            c4DiagramAHTNJAMYBinding270
          );
        }, "input"),
        unput: defineFunctionName(function (c4DiagramAHTNJAMYInput54) {
          var c4DiagramAHTNJAMYBinding236 = c4DiagramAHTNJAMYInput54.length,
            c4DiagramAHTNJAMYBinding237 =
              c4DiagramAHTNJAMYInput54.split(/(?:\r\n?|\n)/g);
          this._input = c4DiagramAHTNJAMYInput54 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - c4DiagramAHTNJAMYBinding236,
          );
          this.offset -= c4DiagramAHTNJAMYBinding236;
          var c4DiagramAHTNJAMYBinding238 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          c4DiagramAHTNJAMYBinding237.length - 1 &&
            (this.yylineno -= c4DiagramAHTNJAMYBinding237.length - 1);
          var c4DiagramAHTNJAMYBinding239 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: c4DiagramAHTNJAMYBinding237
                ? (c4DiagramAHTNJAMYBinding237.length ===
                  c4DiagramAHTNJAMYBinding238.length
                    ? this.yylloc.first_column
                    : 0) +
                  c4DiagramAHTNJAMYBinding238[
                    c4DiagramAHTNJAMYBinding238.length -
                      c4DiagramAHTNJAMYBinding237.length
                  ].length -
                  c4DiagramAHTNJAMYBinding237[0].length
                : this.yylloc.first_column - c4DiagramAHTNJAMYBinding236,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                c4DiagramAHTNJAMYBinding239[0],
                c4DiagramAHTNJAMYBinding239[0] +
                  this.yyleng -
                  c4DiagramAHTNJAMYBinding236,
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
        less: defineFunctionName(function (c4DiagramAHTNJAMYInput207) {
          this.unput(this.match.slice(c4DiagramAHTNJAMYInput207));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var c4DiagramAHTNJAMYBinding281 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (c4DiagramAHTNJAMYBinding281.length > 20 ? "..." : "") +
            c4DiagramAHTNJAMYBinding281.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var c4DiagramAHTNJAMYBinding275 = this.match;
          return (
            c4DiagramAHTNJAMYBinding275.length < 20 &&
              (c4DiagramAHTNJAMYBinding275 += this._input.substr(
                0,
                20 - c4DiagramAHTNJAMYBinding275.length,
              )),
            (
              c4DiagramAHTNJAMYBinding275.substr(0, 20) +
              (c4DiagramAHTNJAMYBinding275.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var c4DiagramAHTNJAMYBinding284 = this.pastInput(),
            c4DiagramAHTNJAMYBinding285 = Array(
              c4DiagramAHTNJAMYBinding284.length + 1,
            ).join("-");
          return (
            c4DiagramAHTNJAMYBinding284 +
            this.upcomingInput() +
            "\n" +
            c4DiagramAHTNJAMYBinding285 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          c4DiagramAHTNJAMYInput22,
          c4DiagramAHTNJAMYInput23,
        ) {
          var c4DiagramAHTNJAMYBinding175,
            c4DiagramAHTNJAMYBinding176,
            c4DiagramAHTNJAMYBinding177;
          if (
            (this.options.backtrack_lexer &&
              ((c4DiagramAHTNJAMYBinding177 = {
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
                (c4DiagramAHTNJAMYBinding177.yylloc.range =
                  this.yylloc.range.slice(0))),
            (c4DiagramAHTNJAMYBinding176 =
              c4DiagramAHTNJAMYInput22[0].match(/(?:\r\n?|\n).*/g)),
            c4DiagramAHTNJAMYBinding176 &&
              (this.yylineno += c4DiagramAHTNJAMYBinding176.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: c4DiagramAHTNJAMYBinding176
                ? c4DiagramAHTNJAMYBinding176[
                    c4DiagramAHTNJAMYBinding176.length - 1
                  ].length -
                  c4DiagramAHTNJAMYBinding176[
                    c4DiagramAHTNJAMYBinding176.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + c4DiagramAHTNJAMYInput22[0].length,
            }),
            (this.yytext += c4DiagramAHTNJAMYInput22[0]),
            (this.match += c4DiagramAHTNJAMYInput22[0]),
            (this.matches = c4DiagramAHTNJAMYInput22),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              c4DiagramAHTNJAMYInput22[0].length,
            )),
            (this.matched += c4DiagramAHTNJAMYInput22[0]),
            (c4DiagramAHTNJAMYBinding175 = this.performAction.call(
              this,
              this.yy,
              this,
              c4DiagramAHTNJAMYInput23,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            c4DiagramAHTNJAMYBinding175)
          )
            return c4DiagramAHTNJAMYBinding175;
          if (this._backtrack) {
            for (var c4DiagramAHTNJAMYBinding178 in c4DiagramAHTNJAMYBinding177)
              this[c4DiagramAHTNJAMYBinding178] =
                c4DiagramAHTNJAMYBinding177[c4DiagramAHTNJAMYBinding178];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var c4DiagramAHTNJAMYBinding230,
            c4DiagramAHTNJAMYBinding231,
            c4DiagramAHTNJAMYBinding232,
            c4DiagramAHTNJAMYBinding233;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var c4DiagramAHTNJAMYBinding234 = this._currentRules(),
              c4DiagramAHTNJAMYBinding235 = 0;
            c4DiagramAHTNJAMYBinding235 < c4DiagramAHTNJAMYBinding234.length;
            c4DiagramAHTNJAMYBinding235++
          )
            if (
              ((c4DiagramAHTNJAMYBinding232 = this._input.match(
                this.rules[
                  c4DiagramAHTNJAMYBinding234[c4DiagramAHTNJAMYBinding235]
                ],
              )),
              c4DiagramAHTNJAMYBinding232 &&
                (!c4DiagramAHTNJAMYBinding231 ||
                  c4DiagramAHTNJAMYBinding232[0].length >
                    c4DiagramAHTNJAMYBinding231[0].length))
            ) {
              if (
                ((c4DiagramAHTNJAMYBinding231 = c4DiagramAHTNJAMYBinding232),
                (c4DiagramAHTNJAMYBinding233 = c4DiagramAHTNJAMYBinding235),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((c4DiagramAHTNJAMYBinding230 = this.test_match(
                    c4DiagramAHTNJAMYBinding232,
                    c4DiagramAHTNJAMYBinding234[c4DiagramAHTNJAMYBinding235],
                  )),
                  c4DiagramAHTNJAMYBinding230 !== false)
                )
                  return c4DiagramAHTNJAMYBinding230;
                if (this._backtrack) {
                  c4DiagramAHTNJAMYBinding231 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return c4DiagramAHTNJAMYBinding231
            ? ((c4DiagramAHTNJAMYBinding230 = this.test_match(
                c4DiagramAHTNJAMYBinding231,
                c4DiagramAHTNJAMYBinding234[c4DiagramAHTNJAMYBinding233],
              )),
              c4DiagramAHTNJAMYBinding230 === false
                ? false
                : c4DiagramAHTNJAMYBinding230)
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
        begin: defineFunctionName(function (c4DiagramAHTNJAMYInput208) {
          this.conditionStack.push(c4DiagramAHTNJAMYInput208);
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
        topState: defineFunctionName(function (c4DiagramAHTNJAMYInput180) {
          return (
            (c4DiagramAHTNJAMYInput180 =
              this.conditionStack.length -
              1 -
              Math.abs(c4DiagramAHTNJAMYInput180 || 0)),
            c4DiagramAHTNJAMYInput180 >= 0
              ? this.conditionStack[c4DiagramAHTNJAMYInput180]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (c4DiagramAHTNJAMYInput212) {
          this.begin(c4DiagramAHTNJAMYInput212);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: defineFunctionName(function (
          c4DiagramAHTNJAMYInput13,
          c4DiagramAHTNJAMYInput14,
          c4DiagramAHTNJAMYInput15,
          c4DiagramAHTNJAMYInput16,
        ) {
          switch (c4DiagramAHTNJAMYInput15) {
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
            rules: [65, 66, 67, 68],
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
    function c4DiagramAHTNJAMYHelper3() {
      this.yy = {};
    }
    return (
      defineFunctionName(c4DiagramAHTNJAMYHelper3, "Parser"),
      (c4DiagramAHTNJAMYHelper3.prototype = c4DiagramAHTNJAMYBinding127),
      (c4DiagramAHTNJAMYBinding127.Parser = c4DiagramAHTNJAMYHelper3),
      new c4DiagramAHTNJAMYHelper3()
    );
  })();
  c4DiagramAHTNJAMYBinding2.parser = c4DiagramAHTNJAMYBinding2;
  c4DiagramAHTNJAMYBinding3 = c4DiagramAHTNJAMYBinding2;
  c4DiagramAHTNJAMYBinding4 = [];
  c4DiagramAHTNJAMYBinding5 = [""];
  c4DiagramAHTNJAMYBinding6 = "global";
  c4DiagramAHTNJAMYBinding7 = "";
  c4DiagramAHTNJAMYBinding8 = [
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
  c4DiagramAHTNJAMYBinding9 = [];
  c4DiagramAHTNJAMYBinding10 = "";
  c4DiagramAHTNJAMYBinding11 = false;
  c4DiagramAHTNJAMYBinding12 = 4;
  c4DiagramAHTNJAMYBinding13 = 2;
  c4DiagramAHTNJAMYBinding15 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding14;
  }, "getC4Type");
  c4DiagramAHTNJAMYBinding16 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput217,
  ) {
    c4DiagramAHTNJAMYBinding14 = R(c4DiagramAHTNJAMYInput217, b());
  }, "setC4Type");
  c4DiagramAHTNJAMYBinding17 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput71,
    c4DiagramAHTNJAMYInput72,
    c4DiagramAHTNJAMYInput73,
    c4DiagramAHTNJAMYInput74,
    c4DiagramAHTNJAMYInput75,
    c4DiagramAHTNJAMYInput76,
    c4DiagramAHTNJAMYInput77,
    c4DiagramAHTNJAMYInput78,
    c4DiagramAHTNJAMYInput79,
  ) {
    if (
      c4DiagramAHTNJAMYInput71 == null ||
      c4DiagramAHTNJAMYInput72 == null ||
      c4DiagramAHTNJAMYInput73 == null ||
      c4DiagramAHTNJAMYInput74 == null
    )
      return;
    let c4DiagramAHTNJAMYBinding244 = {},
      c4DiagramAHTNJAMYBinding245 = c4DiagramAHTNJAMYBinding9.find(
        (item) =>
          item.from === c4DiagramAHTNJAMYInput72 &&
          item.to === c4DiagramAHTNJAMYInput73,
      );
    if (
      (c4DiagramAHTNJAMYBinding245
        ? (c4DiagramAHTNJAMYBinding244 = c4DiagramAHTNJAMYBinding245)
        : c4DiagramAHTNJAMYBinding9.push(c4DiagramAHTNJAMYBinding244),
      (c4DiagramAHTNJAMYBinding244.type = c4DiagramAHTNJAMYInput71),
      (c4DiagramAHTNJAMYBinding244.from = c4DiagramAHTNJAMYInput72),
      (c4DiagramAHTNJAMYBinding244.to = c4DiagramAHTNJAMYInput73),
      (c4DiagramAHTNJAMYBinding244.label = {
        text: c4DiagramAHTNJAMYInput74,
      }),
      c4DiagramAHTNJAMYInput75 == null)
    )
      c4DiagramAHTNJAMYBinding244.techn = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput75 == "object") {
      let [c4DiagramAHTNJAMYBinding319, c4DiagramAHTNJAMYBinding320] =
        Object.entries(c4DiagramAHTNJAMYInput75)[0];
      c4DiagramAHTNJAMYBinding244[c4DiagramAHTNJAMYBinding319] = {
        text: c4DiagramAHTNJAMYBinding320,
      };
    } else
      c4DiagramAHTNJAMYBinding244.techn = {
        text: c4DiagramAHTNJAMYInput75,
      };
    if (c4DiagramAHTNJAMYInput76 == null)
      c4DiagramAHTNJAMYBinding244.descr = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput76 == "object") {
      let [c4DiagramAHTNJAMYBinding321, c4DiagramAHTNJAMYBinding322] =
        Object.entries(c4DiagramAHTNJAMYInput76)[0];
      c4DiagramAHTNJAMYBinding244[c4DiagramAHTNJAMYBinding321] = {
        text: c4DiagramAHTNJAMYBinding322,
      };
    } else
      c4DiagramAHTNJAMYBinding244.descr = {
        text: c4DiagramAHTNJAMYInput76,
      };
    if (typeof c4DiagramAHTNJAMYInput77 == "object") {
      let [c4DiagramAHTNJAMYBinding343, c4DiagramAHTNJAMYBinding344] =
        Object.entries(c4DiagramAHTNJAMYInput77)[0];
      c4DiagramAHTNJAMYBinding244[c4DiagramAHTNJAMYBinding343] =
        c4DiagramAHTNJAMYBinding344;
    } else c4DiagramAHTNJAMYBinding244.sprite = c4DiagramAHTNJAMYInput77;
    if (typeof c4DiagramAHTNJAMYInput78 == "object") {
      let [c4DiagramAHTNJAMYBinding345, c4DiagramAHTNJAMYBinding346] =
        Object.entries(c4DiagramAHTNJAMYInput78)[0];
      c4DiagramAHTNJAMYBinding244[c4DiagramAHTNJAMYBinding345] =
        c4DiagramAHTNJAMYBinding346;
    } else c4DiagramAHTNJAMYBinding244.tags = c4DiagramAHTNJAMYInput78;
    if (typeof c4DiagramAHTNJAMYInput79 == "object") {
      let [c4DiagramAHTNJAMYBinding347, c4DiagramAHTNJAMYBinding348] =
        Object.entries(c4DiagramAHTNJAMYInput79)[0];
      c4DiagramAHTNJAMYBinding244[c4DiagramAHTNJAMYBinding347] =
        c4DiagramAHTNJAMYBinding348;
    } else c4DiagramAHTNJAMYBinding244.link = c4DiagramAHTNJAMYInput79;
    c4DiagramAHTNJAMYBinding244.wrap = c4DiagramAHTNJAMYBinding40();
  }, "addRel");
  c4DiagramAHTNJAMYBinding18 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput88,
    c4DiagramAHTNJAMYInput89,
    c4DiagramAHTNJAMYInput90,
    c4DiagramAHTNJAMYInput91,
    c4DiagramAHTNJAMYInput92,
    c4DiagramAHTNJAMYInput93,
    c4DiagramAHTNJAMYInput94,
  ) {
    if (c4DiagramAHTNJAMYInput89 === null || c4DiagramAHTNJAMYInput90 === null)
      return;
    let c4DiagramAHTNJAMYBinding249 = {},
      c4DiagramAHTNJAMYBinding250 = c4DiagramAHTNJAMYBinding4.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput89,
      );
    if (
      (c4DiagramAHTNJAMYBinding250 &&
      c4DiagramAHTNJAMYInput89 === c4DiagramAHTNJAMYBinding250.alias
        ? (c4DiagramAHTNJAMYBinding249 = c4DiagramAHTNJAMYBinding250)
        : ((c4DiagramAHTNJAMYBinding249.alias = c4DiagramAHTNJAMYInput89),
          c4DiagramAHTNJAMYBinding4.push(c4DiagramAHTNJAMYBinding249)),
      c4DiagramAHTNJAMYInput90 == null
        ? (c4DiagramAHTNJAMYBinding249.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding249.label = {
            text: c4DiagramAHTNJAMYInput90,
          }),
      c4DiagramAHTNJAMYInput91 == null)
    )
      c4DiagramAHTNJAMYBinding249.descr = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput91 == "object") {
      let [c4DiagramAHTNJAMYBinding323, c4DiagramAHTNJAMYBinding324] =
        Object.entries(c4DiagramAHTNJAMYInput91)[0];
      c4DiagramAHTNJAMYBinding249[c4DiagramAHTNJAMYBinding323] = {
        text: c4DiagramAHTNJAMYBinding324,
      };
    } else
      c4DiagramAHTNJAMYBinding249.descr = {
        text: c4DiagramAHTNJAMYInput91,
      };
    if (typeof c4DiagramAHTNJAMYInput92 == "object") {
      let [c4DiagramAHTNJAMYBinding349, c4DiagramAHTNJAMYBinding350] =
        Object.entries(c4DiagramAHTNJAMYInput92)[0];
      c4DiagramAHTNJAMYBinding249[c4DiagramAHTNJAMYBinding349] =
        c4DiagramAHTNJAMYBinding350;
    } else c4DiagramAHTNJAMYBinding249.sprite = c4DiagramAHTNJAMYInput92;
    if (typeof c4DiagramAHTNJAMYInput93 == "object") {
      let [c4DiagramAHTNJAMYBinding351, c4DiagramAHTNJAMYBinding352] =
        Object.entries(c4DiagramAHTNJAMYInput93)[0];
      c4DiagramAHTNJAMYBinding249[c4DiagramAHTNJAMYBinding351] =
        c4DiagramAHTNJAMYBinding352;
    } else c4DiagramAHTNJAMYBinding249.tags = c4DiagramAHTNJAMYInput93;
    if (typeof c4DiagramAHTNJAMYInput94 == "object") {
      let [c4DiagramAHTNJAMYBinding353, c4DiagramAHTNJAMYBinding354] =
        Object.entries(c4DiagramAHTNJAMYInput94)[0];
      c4DiagramAHTNJAMYBinding249[c4DiagramAHTNJAMYBinding353] =
        c4DiagramAHTNJAMYBinding354;
    } else c4DiagramAHTNJAMYBinding249.link = c4DiagramAHTNJAMYInput94;
    c4DiagramAHTNJAMYBinding249.typeC4Shape = {
      text: c4DiagramAHTNJAMYInput88,
    };
    c4DiagramAHTNJAMYBinding249.parentBoundary = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding249.wrap = c4DiagramAHTNJAMYBinding40();
  }, "addPersonOrSystem");
  c4DiagramAHTNJAMYBinding19 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput55,
    c4DiagramAHTNJAMYInput56,
    c4DiagramAHTNJAMYInput57,
    c4DiagramAHTNJAMYInput58,
    c4DiagramAHTNJAMYInput59,
    c4DiagramAHTNJAMYInput60,
    c4DiagramAHTNJAMYInput61,
    c4DiagramAHTNJAMYInput62,
  ) {
    if (c4DiagramAHTNJAMYInput56 === null || c4DiagramAHTNJAMYInput57 === null)
      return;
    let c4DiagramAHTNJAMYBinding240 = {},
      c4DiagramAHTNJAMYBinding241 = c4DiagramAHTNJAMYBinding4.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput56,
      );
    if (
      (c4DiagramAHTNJAMYBinding241 &&
      c4DiagramAHTNJAMYInput56 === c4DiagramAHTNJAMYBinding241.alias
        ? (c4DiagramAHTNJAMYBinding240 = c4DiagramAHTNJAMYBinding241)
        : ((c4DiagramAHTNJAMYBinding240.alias = c4DiagramAHTNJAMYInput56),
          c4DiagramAHTNJAMYBinding4.push(c4DiagramAHTNJAMYBinding240)),
      c4DiagramAHTNJAMYInput57 == null
        ? (c4DiagramAHTNJAMYBinding240.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding240.label = {
            text: c4DiagramAHTNJAMYInput57,
          }),
      c4DiagramAHTNJAMYInput58 == null)
    )
      c4DiagramAHTNJAMYBinding240.techn = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput58 == "object") {
      let [c4DiagramAHTNJAMYBinding325, c4DiagramAHTNJAMYBinding326] =
        Object.entries(c4DiagramAHTNJAMYInput58)[0];
      c4DiagramAHTNJAMYBinding240[c4DiagramAHTNJAMYBinding325] = {
        text: c4DiagramAHTNJAMYBinding326,
      };
    } else
      c4DiagramAHTNJAMYBinding240.techn = {
        text: c4DiagramAHTNJAMYInput58,
      };
    if (c4DiagramAHTNJAMYInput59 == null)
      c4DiagramAHTNJAMYBinding240.descr = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput59 == "object") {
      let [c4DiagramAHTNJAMYBinding327, c4DiagramAHTNJAMYBinding328] =
        Object.entries(c4DiagramAHTNJAMYInput59)[0];
      c4DiagramAHTNJAMYBinding240[c4DiagramAHTNJAMYBinding327] = {
        text: c4DiagramAHTNJAMYBinding328,
      };
    } else
      c4DiagramAHTNJAMYBinding240.descr = {
        text: c4DiagramAHTNJAMYInput59,
      };
    if (typeof c4DiagramAHTNJAMYInput60 == "object") {
      let [c4DiagramAHTNJAMYBinding355, c4DiagramAHTNJAMYBinding356] =
        Object.entries(c4DiagramAHTNJAMYInput60)[0];
      c4DiagramAHTNJAMYBinding240[c4DiagramAHTNJAMYBinding355] =
        c4DiagramAHTNJAMYBinding356;
    } else c4DiagramAHTNJAMYBinding240.sprite = c4DiagramAHTNJAMYInput60;
    if (typeof c4DiagramAHTNJAMYInput61 == "object") {
      let [c4DiagramAHTNJAMYBinding357, c4DiagramAHTNJAMYBinding358] =
        Object.entries(c4DiagramAHTNJAMYInput61)[0];
      c4DiagramAHTNJAMYBinding240[c4DiagramAHTNJAMYBinding357] =
        c4DiagramAHTNJAMYBinding358;
    } else c4DiagramAHTNJAMYBinding240.tags = c4DiagramAHTNJAMYInput61;
    if (typeof c4DiagramAHTNJAMYInput62 == "object") {
      let [c4DiagramAHTNJAMYBinding359, c4DiagramAHTNJAMYBinding360] =
        Object.entries(c4DiagramAHTNJAMYInput62)[0];
      c4DiagramAHTNJAMYBinding240[c4DiagramAHTNJAMYBinding359] =
        c4DiagramAHTNJAMYBinding360;
    } else c4DiagramAHTNJAMYBinding240.link = c4DiagramAHTNJAMYInput62;
    c4DiagramAHTNJAMYBinding240.wrap = c4DiagramAHTNJAMYBinding40();
    c4DiagramAHTNJAMYBinding240.typeC4Shape = {
      text: c4DiagramAHTNJAMYInput55,
    };
    c4DiagramAHTNJAMYBinding240.parentBoundary = c4DiagramAHTNJAMYBinding6;
  }, "addContainer");
  c4DiagramAHTNJAMYBinding20 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput63,
    c4DiagramAHTNJAMYInput64,
    c4DiagramAHTNJAMYInput65,
    c4DiagramAHTNJAMYInput66,
    c4DiagramAHTNJAMYInput67,
    c4DiagramAHTNJAMYInput68,
    c4DiagramAHTNJAMYInput69,
    c4DiagramAHTNJAMYInput70,
  ) {
    if (c4DiagramAHTNJAMYInput64 === null || c4DiagramAHTNJAMYInput65 === null)
      return;
    let c4DiagramAHTNJAMYBinding242 = {},
      c4DiagramAHTNJAMYBinding243 = c4DiagramAHTNJAMYBinding4.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput64,
      );
    if (
      (c4DiagramAHTNJAMYBinding243 &&
      c4DiagramAHTNJAMYInput64 === c4DiagramAHTNJAMYBinding243.alias
        ? (c4DiagramAHTNJAMYBinding242 = c4DiagramAHTNJAMYBinding243)
        : ((c4DiagramAHTNJAMYBinding242.alias = c4DiagramAHTNJAMYInput64),
          c4DiagramAHTNJAMYBinding4.push(c4DiagramAHTNJAMYBinding242)),
      c4DiagramAHTNJAMYInput65 == null
        ? (c4DiagramAHTNJAMYBinding242.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding242.label = {
            text: c4DiagramAHTNJAMYInput65,
          }),
      c4DiagramAHTNJAMYInput66 == null)
    )
      c4DiagramAHTNJAMYBinding242.techn = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput66 == "object") {
      let [c4DiagramAHTNJAMYBinding329, c4DiagramAHTNJAMYBinding330] =
        Object.entries(c4DiagramAHTNJAMYInput66)[0];
      c4DiagramAHTNJAMYBinding242[c4DiagramAHTNJAMYBinding329] = {
        text: c4DiagramAHTNJAMYBinding330,
      };
    } else
      c4DiagramAHTNJAMYBinding242.techn = {
        text: c4DiagramAHTNJAMYInput66,
      };
    if (c4DiagramAHTNJAMYInput67 == null)
      c4DiagramAHTNJAMYBinding242.descr = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput67 == "object") {
      let [c4DiagramAHTNJAMYBinding331, c4DiagramAHTNJAMYBinding332] =
        Object.entries(c4DiagramAHTNJAMYInput67)[0];
      c4DiagramAHTNJAMYBinding242[c4DiagramAHTNJAMYBinding331] = {
        text: c4DiagramAHTNJAMYBinding332,
      };
    } else
      c4DiagramAHTNJAMYBinding242.descr = {
        text: c4DiagramAHTNJAMYInput67,
      };
    if (typeof c4DiagramAHTNJAMYInput68 == "object") {
      let [c4DiagramAHTNJAMYBinding361, c4DiagramAHTNJAMYBinding362] =
        Object.entries(c4DiagramAHTNJAMYInput68)[0];
      c4DiagramAHTNJAMYBinding242[c4DiagramAHTNJAMYBinding361] =
        c4DiagramAHTNJAMYBinding362;
    } else c4DiagramAHTNJAMYBinding242.sprite = c4DiagramAHTNJAMYInput68;
    if (typeof c4DiagramAHTNJAMYInput69 == "object") {
      let [c4DiagramAHTNJAMYBinding363, c4DiagramAHTNJAMYBinding364] =
        Object.entries(c4DiagramAHTNJAMYInput69)[0];
      c4DiagramAHTNJAMYBinding242[c4DiagramAHTNJAMYBinding363] =
        c4DiagramAHTNJAMYBinding364;
    } else c4DiagramAHTNJAMYBinding242.tags = c4DiagramAHTNJAMYInput69;
    if (typeof c4DiagramAHTNJAMYInput70 == "object") {
      let [c4DiagramAHTNJAMYBinding365, c4DiagramAHTNJAMYBinding366] =
        Object.entries(c4DiagramAHTNJAMYInput70)[0];
      c4DiagramAHTNJAMYBinding242[c4DiagramAHTNJAMYBinding365] =
        c4DiagramAHTNJAMYBinding366;
    } else c4DiagramAHTNJAMYBinding242.link = c4DiagramAHTNJAMYInput70;
    c4DiagramAHTNJAMYBinding242.wrap = c4DiagramAHTNJAMYBinding40();
    c4DiagramAHTNJAMYBinding242.typeC4Shape = {
      text: c4DiagramAHTNJAMYInput63,
    };
    c4DiagramAHTNJAMYBinding242.parentBoundary = c4DiagramAHTNJAMYBinding6;
  }, "addComponent");
  c4DiagramAHTNJAMYBinding21 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput107,
    c4DiagramAHTNJAMYInput108,
    c4DiagramAHTNJAMYInput109,
    c4DiagramAHTNJAMYInput110,
    c4DiagramAHTNJAMYInput111,
  ) {
    if (
      c4DiagramAHTNJAMYInput107 === null ||
      c4DiagramAHTNJAMYInput108 === null
    )
      return;
    let c4DiagramAHTNJAMYBinding254 = {},
      c4DiagramAHTNJAMYBinding255 = c4DiagramAHTNJAMYBinding8.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput107,
      );
    if (
      (c4DiagramAHTNJAMYBinding255 &&
      c4DiagramAHTNJAMYInput107 === c4DiagramAHTNJAMYBinding255.alias
        ? (c4DiagramAHTNJAMYBinding254 = c4DiagramAHTNJAMYBinding255)
        : ((c4DiagramAHTNJAMYBinding254.alias = c4DiagramAHTNJAMYInput107),
          c4DiagramAHTNJAMYBinding8.push(c4DiagramAHTNJAMYBinding254)),
      c4DiagramAHTNJAMYInput108 == null
        ? (c4DiagramAHTNJAMYBinding254.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding254.label = {
            text: c4DiagramAHTNJAMYInput108,
          }),
      c4DiagramAHTNJAMYInput109 == null)
    )
      c4DiagramAHTNJAMYBinding254.type = {
        text: "system",
      };
    else if (typeof c4DiagramAHTNJAMYInput109 == "object") {
      let [c4DiagramAHTNJAMYBinding333, c4DiagramAHTNJAMYBinding334] =
        Object.entries(c4DiagramAHTNJAMYInput109)[0];
      c4DiagramAHTNJAMYBinding254[c4DiagramAHTNJAMYBinding333] = {
        text: c4DiagramAHTNJAMYBinding334,
      };
    } else
      c4DiagramAHTNJAMYBinding254.type = {
        text: c4DiagramAHTNJAMYInput109,
      };
    if (typeof c4DiagramAHTNJAMYInput110 == "object") {
      let [c4DiagramAHTNJAMYBinding367, c4DiagramAHTNJAMYBinding368] =
        Object.entries(c4DiagramAHTNJAMYInput110)[0];
      c4DiagramAHTNJAMYBinding254[c4DiagramAHTNJAMYBinding367] =
        c4DiagramAHTNJAMYBinding368;
    } else c4DiagramAHTNJAMYBinding254.tags = c4DiagramAHTNJAMYInput110;
    if (typeof c4DiagramAHTNJAMYInput111 == "object") {
      let [c4DiagramAHTNJAMYBinding369, c4DiagramAHTNJAMYBinding370] =
        Object.entries(c4DiagramAHTNJAMYInput111)[0];
      c4DiagramAHTNJAMYBinding254[c4DiagramAHTNJAMYBinding369] =
        c4DiagramAHTNJAMYBinding370;
    } else c4DiagramAHTNJAMYBinding254.link = c4DiagramAHTNJAMYInput111;
    c4DiagramAHTNJAMYBinding254.parentBoundary = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding254.wrap = c4DiagramAHTNJAMYBinding40();
    c4DiagramAHTNJAMYBinding7 = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding6 = c4DiagramAHTNJAMYInput107;
    c4DiagramAHTNJAMYBinding5.push(c4DiagramAHTNJAMYBinding7);
  }, "addPersonOrSystemBoundary");
  c4DiagramAHTNJAMYBinding22 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput102,
    c4DiagramAHTNJAMYInput103,
    c4DiagramAHTNJAMYInput104,
    c4DiagramAHTNJAMYInput105,
    c4DiagramAHTNJAMYInput106,
  ) {
    if (
      c4DiagramAHTNJAMYInput102 === null ||
      c4DiagramAHTNJAMYInput103 === null
    )
      return;
    let c4DiagramAHTNJAMYBinding252 = {},
      c4DiagramAHTNJAMYBinding253 = c4DiagramAHTNJAMYBinding8.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput102,
      );
    if (
      (c4DiagramAHTNJAMYBinding253 &&
      c4DiagramAHTNJAMYInput102 === c4DiagramAHTNJAMYBinding253.alias
        ? (c4DiagramAHTNJAMYBinding252 = c4DiagramAHTNJAMYBinding253)
        : ((c4DiagramAHTNJAMYBinding252.alias = c4DiagramAHTNJAMYInput102),
          c4DiagramAHTNJAMYBinding8.push(c4DiagramAHTNJAMYBinding252)),
      c4DiagramAHTNJAMYInput103 == null
        ? (c4DiagramAHTNJAMYBinding252.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding252.label = {
            text: c4DiagramAHTNJAMYInput103,
          }),
      c4DiagramAHTNJAMYInput104 == null)
    )
      c4DiagramAHTNJAMYBinding252.type = {
        text: "container",
      };
    else if (typeof c4DiagramAHTNJAMYInput104 == "object") {
      let [c4DiagramAHTNJAMYBinding335, c4DiagramAHTNJAMYBinding336] =
        Object.entries(c4DiagramAHTNJAMYInput104)[0];
      c4DiagramAHTNJAMYBinding252[c4DiagramAHTNJAMYBinding335] = {
        text: c4DiagramAHTNJAMYBinding336,
      };
    } else
      c4DiagramAHTNJAMYBinding252.type = {
        text: c4DiagramAHTNJAMYInput104,
      };
    if (typeof c4DiagramAHTNJAMYInput105 == "object") {
      let [c4DiagramAHTNJAMYBinding371, c4DiagramAHTNJAMYBinding372] =
        Object.entries(c4DiagramAHTNJAMYInput105)[0];
      c4DiagramAHTNJAMYBinding252[c4DiagramAHTNJAMYBinding371] =
        c4DiagramAHTNJAMYBinding372;
    } else c4DiagramAHTNJAMYBinding252.tags = c4DiagramAHTNJAMYInput105;
    if (typeof c4DiagramAHTNJAMYInput106 == "object") {
      let [c4DiagramAHTNJAMYBinding373, c4DiagramAHTNJAMYBinding374] =
        Object.entries(c4DiagramAHTNJAMYInput106)[0];
      c4DiagramAHTNJAMYBinding252[c4DiagramAHTNJAMYBinding373] =
        c4DiagramAHTNJAMYBinding374;
    } else c4DiagramAHTNJAMYBinding252.link = c4DiagramAHTNJAMYInput106;
    c4DiagramAHTNJAMYBinding252.parentBoundary = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding252.wrap = c4DiagramAHTNJAMYBinding40();
    c4DiagramAHTNJAMYBinding7 = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding6 = c4DiagramAHTNJAMYInput102;
    c4DiagramAHTNJAMYBinding5.push(c4DiagramAHTNJAMYBinding7);
  }, "addContainerBoundary");
  c4DiagramAHTNJAMYBinding23 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput80,
    c4DiagramAHTNJAMYInput81,
    c4DiagramAHTNJAMYInput82,
    c4DiagramAHTNJAMYInput83,
    c4DiagramAHTNJAMYInput84,
    c4DiagramAHTNJAMYInput85,
    c4DiagramAHTNJAMYInput86,
    c4DiagramAHTNJAMYInput87,
  ) {
    if (c4DiagramAHTNJAMYInput81 === null || c4DiagramAHTNJAMYInput82 === null)
      return;
    let c4DiagramAHTNJAMYBinding247 = {},
      c4DiagramAHTNJAMYBinding248 = c4DiagramAHTNJAMYBinding8.find(
        (item) => item.alias === c4DiagramAHTNJAMYInput81,
      );
    if (
      (c4DiagramAHTNJAMYBinding248 &&
      c4DiagramAHTNJAMYInput81 === c4DiagramAHTNJAMYBinding248.alias
        ? (c4DiagramAHTNJAMYBinding247 = c4DiagramAHTNJAMYBinding248)
        : ((c4DiagramAHTNJAMYBinding247.alias = c4DiagramAHTNJAMYInput81),
          c4DiagramAHTNJAMYBinding8.push(c4DiagramAHTNJAMYBinding247)),
      c4DiagramAHTNJAMYInput82 == null
        ? (c4DiagramAHTNJAMYBinding247.label = {
            text: "",
          })
        : (c4DiagramAHTNJAMYBinding247.label = {
            text: c4DiagramAHTNJAMYInput82,
          }),
      c4DiagramAHTNJAMYInput83 == null)
    )
      c4DiagramAHTNJAMYBinding247.type = {
        text: "node",
      };
    else if (typeof c4DiagramAHTNJAMYInput83 == "object") {
      let [c4DiagramAHTNJAMYBinding337, c4DiagramAHTNJAMYBinding338] =
        Object.entries(c4DiagramAHTNJAMYInput83)[0];
      c4DiagramAHTNJAMYBinding247[c4DiagramAHTNJAMYBinding337] = {
        text: c4DiagramAHTNJAMYBinding338,
      };
    } else
      c4DiagramAHTNJAMYBinding247.type = {
        text: c4DiagramAHTNJAMYInput83,
      };
    if (c4DiagramAHTNJAMYInput84 == null)
      c4DiagramAHTNJAMYBinding247.descr = {
        text: "",
      };
    else if (typeof c4DiagramAHTNJAMYInput84 == "object") {
      let [c4DiagramAHTNJAMYBinding339, c4DiagramAHTNJAMYBinding340] =
        Object.entries(c4DiagramAHTNJAMYInput84)[0];
      c4DiagramAHTNJAMYBinding247[c4DiagramAHTNJAMYBinding339] = {
        text: c4DiagramAHTNJAMYBinding340,
      };
    } else
      c4DiagramAHTNJAMYBinding247.descr = {
        text: c4DiagramAHTNJAMYInput84,
      };
    if (typeof c4DiagramAHTNJAMYInput86 == "object") {
      let [c4DiagramAHTNJAMYBinding375, c4DiagramAHTNJAMYBinding376] =
        Object.entries(c4DiagramAHTNJAMYInput86)[0];
      c4DiagramAHTNJAMYBinding247[c4DiagramAHTNJAMYBinding375] =
        c4DiagramAHTNJAMYBinding376;
    } else c4DiagramAHTNJAMYBinding247.tags = c4DiagramAHTNJAMYInput86;
    if (typeof c4DiagramAHTNJAMYInput87 == "object") {
      let [c4DiagramAHTNJAMYBinding377, c4DiagramAHTNJAMYBinding378] =
        Object.entries(c4DiagramAHTNJAMYInput87)[0];
      c4DiagramAHTNJAMYBinding247[c4DiagramAHTNJAMYBinding377] =
        c4DiagramAHTNJAMYBinding378;
    } else c4DiagramAHTNJAMYBinding247.link = c4DiagramAHTNJAMYInput87;
    c4DiagramAHTNJAMYBinding247.nodeType = c4DiagramAHTNJAMYInput80;
    c4DiagramAHTNJAMYBinding247.parentBoundary = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding247.wrap = c4DiagramAHTNJAMYBinding40();
    c4DiagramAHTNJAMYBinding7 = c4DiagramAHTNJAMYBinding6;
    c4DiagramAHTNJAMYBinding6 = c4DiagramAHTNJAMYInput81;
    c4DiagramAHTNJAMYBinding5.push(c4DiagramAHTNJAMYBinding7);
  }, "addDeploymentNode");
  c4DiagramAHTNJAMYBinding24 = defineFunctionName(function () {
    c4DiagramAHTNJAMYBinding6 = c4DiagramAHTNJAMYBinding7;
    c4DiagramAHTNJAMYBinding5.pop();
    c4DiagramAHTNJAMYBinding7 = c4DiagramAHTNJAMYBinding5.pop();
    c4DiagramAHTNJAMYBinding5.push(c4DiagramAHTNJAMYBinding7);
  }, "popBoundaryParseStack");
  c4DiagramAHTNJAMYBinding25 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput37,
    c4DiagramAHTNJAMYInput38,
    c4DiagramAHTNJAMYInput39,
    c4DiagramAHTNJAMYInput40,
    c4DiagramAHTNJAMYInput41,
    c4DiagramAHTNJAMYInput42,
    c4DiagramAHTNJAMYInput43,
    c4DiagramAHTNJAMYInput44,
    c4DiagramAHTNJAMYInput45,
    c4DiagramAHTNJAMYInput46,
    c4DiagramAHTNJAMYInput47,
  ) {
    let c4DiagramAHTNJAMYBinding208 = c4DiagramAHTNJAMYBinding4.find(
      (item) => item.alias === c4DiagramAHTNJAMYInput38,
    );
    if (
      !(
        c4DiagramAHTNJAMYBinding208 === undefined &&
        ((c4DiagramAHTNJAMYBinding208 = c4DiagramAHTNJAMYBinding8.find(
          (item) => item.alias === c4DiagramAHTNJAMYInput38,
        )),
        c4DiagramAHTNJAMYBinding208 === undefined)
      )
    ) {
      if (c4DiagramAHTNJAMYInput39 != null)
        if (typeof c4DiagramAHTNJAMYInput39 == "object") {
          let [c4DiagramAHTNJAMYBinding297, c4DiagramAHTNJAMYBinding298] =
            Object.entries(c4DiagramAHTNJAMYInput39)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding297] =
            c4DiagramAHTNJAMYBinding298;
        } else c4DiagramAHTNJAMYBinding208.bgColor = c4DiagramAHTNJAMYInput39;
      if (c4DiagramAHTNJAMYInput40 != null)
        if (typeof c4DiagramAHTNJAMYInput40 == "object") {
          let [c4DiagramAHTNJAMYBinding299, c4DiagramAHTNJAMYBinding300] =
            Object.entries(c4DiagramAHTNJAMYInput40)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding299] =
            c4DiagramAHTNJAMYBinding300;
        } else c4DiagramAHTNJAMYBinding208.fontColor = c4DiagramAHTNJAMYInput40;
      if (c4DiagramAHTNJAMYInput41 != null)
        if (typeof c4DiagramAHTNJAMYInput41 == "object") {
          let [c4DiagramAHTNJAMYBinding301, c4DiagramAHTNJAMYBinding302] =
            Object.entries(c4DiagramAHTNJAMYInput41)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding301] =
            c4DiagramAHTNJAMYBinding302;
        } else
          c4DiagramAHTNJAMYBinding208.borderColor = c4DiagramAHTNJAMYInput41;
      if (c4DiagramAHTNJAMYInput42 != null)
        if (typeof c4DiagramAHTNJAMYInput42 == "object") {
          let [c4DiagramAHTNJAMYBinding303, c4DiagramAHTNJAMYBinding304] =
            Object.entries(c4DiagramAHTNJAMYInput42)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding303] =
            c4DiagramAHTNJAMYBinding304;
        } else c4DiagramAHTNJAMYBinding208.shadowing = c4DiagramAHTNJAMYInput42;
      if (c4DiagramAHTNJAMYInput43 != null)
        if (typeof c4DiagramAHTNJAMYInput43 == "object") {
          let [c4DiagramAHTNJAMYBinding305, c4DiagramAHTNJAMYBinding306] =
            Object.entries(c4DiagramAHTNJAMYInput43)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding305] =
            c4DiagramAHTNJAMYBinding306;
        } else c4DiagramAHTNJAMYBinding208.shape = c4DiagramAHTNJAMYInput43;
      if (c4DiagramAHTNJAMYInput44 != null)
        if (typeof c4DiagramAHTNJAMYInput44 == "object") {
          let [c4DiagramAHTNJAMYBinding307, c4DiagramAHTNJAMYBinding308] =
            Object.entries(c4DiagramAHTNJAMYInput44)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding307] =
            c4DiagramAHTNJAMYBinding308;
        } else c4DiagramAHTNJAMYBinding208.sprite = c4DiagramAHTNJAMYInput44;
      if (c4DiagramAHTNJAMYInput45 != null)
        if (typeof c4DiagramAHTNJAMYInput45 == "object") {
          let [c4DiagramAHTNJAMYBinding309, c4DiagramAHTNJAMYBinding310] =
            Object.entries(c4DiagramAHTNJAMYInput45)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding309] =
            c4DiagramAHTNJAMYBinding310;
        } else c4DiagramAHTNJAMYBinding208.techn = c4DiagramAHTNJAMYInput45;
      if (c4DiagramAHTNJAMYInput46 != null)
        if (typeof c4DiagramAHTNJAMYInput46 == "object") {
          let [c4DiagramAHTNJAMYBinding311, c4DiagramAHTNJAMYBinding312] =
            Object.entries(c4DiagramAHTNJAMYInput46)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding311] =
            c4DiagramAHTNJAMYBinding312;
        } else
          c4DiagramAHTNJAMYBinding208.legendText = c4DiagramAHTNJAMYInput46;
      if (c4DiagramAHTNJAMYInput47 != null)
        if (typeof c4DiagramAHTNJAMYInput47 == "object") {
          let [c4DiagramAHTNJAMYBinding313, c4DiagramAHTNJAMYBinding314] =
            Object.entries(c4DiagramAHTNJAMYInput47)[0];
          c4DiagramAHTNJAMYBinding208[c4DiagramAHTNJAMYBinding313] =
            c4DiagramAHTNJAMYBinding314;
        } else
          c4DiagramAHTNJAMYBinding208.legendSprite = c4DiagramAHTNJAMYInput47;
    }
  }, "updateElStyle");
  c4DiagramAHTNJAMYBinding26 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput95,
    c4DiagramAHTNJAMYInput96,
    c4DiagramAHTNJAMYInput97,
    c4DiagramAHTNJAMYInput98,
    c4DiagramAHTNJAMYInput99,
    c4DiagramAHTNJAMYInput100,
    c4DiagramAHTNJAMYInput101,
  ) {
    let c4DiagramAHTNJAMYBinding251 = c4DiagramAHTNJAMYBinding9.find(
      (item) =>
        item.from === c4DiagramAHTNJAMYInput96 &&
        item.to === c4DiagramAHTNJAMYInput97,
    );
    if (c4DiagramAHTNJAMYBinding251 !== undefined) {
      if (c4DiagramAHTNJAMYInput98 != null)
        if (typeof c4DiagramAHTNJAMYInput98 == "object") {
          let [c4DiagramAHTNJAMYBinding315, c4DiagramAHTNJAMYBinding316] =
            Object.entries(c4DiagramAHTNJAMYInput98)[0];
          c4DiagramAHTNJAMYBinding251[c4DiagramAHTNJAMYBinding315] =
            c4DiagramAHTNJAMYBinding316;
        } else c4DiagramAHTNJAMYBinding251.textColor = c4DiagramAHTNJAMYInput98;
      if (c4DiagramAHTNJAMYInput99 != null)
        if (typeof c4DiagramAHTNJAMYInput99 == "object") {
          let [c4DiagramAHTNJAMYBinding317, c4DiagramAHTNJAMYBinding318] =
            Object.entries(c4DiagramAHTNJAMYInput99)[0];
          c4DiagramAHTNJAMYBinding251[c4DiagramAHTNJAMYBinding317] =
            c4DiagramAHTNJAMYBinding318;
        } else c4DiagramAHTNJAMYBinding251.lineColor = c4DiagramAHTNJAMYInput99;
      if (c4DiagramAHTNJAMYInput100 != null)
        if (typeof c4DiagramAHTNJAMYInput100 == "object") {
          let [c4DiagramAHTNJAMYBinding293, c4DiagramAHTNJAMYBinding294] =
            Object.entries(c4DiagramAHTNJAMYInput100)[0];
          c4DiagramAHTNJAMYBinding251[c4DiagramAHTNJAMYBinding293] = parseInt(
            c4DiagramAHTNJAMYBinding294,
          );
        } else
          c4DiagramAHTNJAMYBinding251.offsetX = parseInt(
            c4DiagramAHTNJAMYInput100,
          );
      if (c4DiagramAHTNJAMYInput101 != null)
        if (typeof c4DiagramAHTNJAMYInput101 == "object") {
          let [c4DiagramAHTNJAMYBinding295, c4DiagramAHTNJAMYBinding296] =
            Object.entries(c4DiagramAHTNJAMYInput101)[0];
          c4DiagramAHTNJAMYBinding251[c4DiagramAHTNJAMYBinding295] = parseInt(
            c4DiagramAHTNJAMYBinding296,
          );
        } else
          c4DiagramAHTNJAMYBinding251.offsetY = parseInt(
            c4DiagramAHTNJAMYInput101,
          );
    }
  }, "updateRelStyle");
  c4DiagramAHTNJAMYBinding27 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput156,
    c4DiagramAHTNJAMYInput157,
    c4DiagramAHTNJAMYInput158,
  ) {
    let c4DiagramAHTNJAMYBinding273 = c4DiagramAHTNJAMYBinding12,
      c4DiagramAHTNJAMYBinding274 = c4DiagramAHTNJAMYBinding13;
    if (typeof c4DiagramAHTNJAMYInput157 == "object") {
      let c4DiagramAHTNJAMYBinding341 = Object.values(
        c4DiagramAHTNJAMYInput157,
      )[0];
      c4DiagramAHTNJAMYBinding273 = parseInt(c4DiagramAHTNJAMYBinding341);
    } else c4DiagramAHTNJAMYBinding273 = parseInt(c4DiagramAHTNJAMYInput157);
    if (typeof c4DiagramAHTNJAMYInput158 == "object") {
      let c4DiagramAHTNJAMYBinding342 = Object.values(
        c4DiagramAHTNJAMYInput158,
      )[0];
      c4DiagramAHTNJAMYBinding274 = parseInt(c4DiagramAHTNJAMYBinding342);
    } else c4DiagramAHTNJAMYBinding274 = parseInt(c4DiagramAHTNJAMYInput158);
    c4DiagramAHTNJAMYBinding273 >= 1 &&
      (c4DiagramAHTNJAMYBinding12 = c4DiagramAHTNJAMYBinding273);
    c4DiagramAHTNJAMYBinding274 >= 1 &&
      (c4DiagramAHTNJAMYBinding13 = c4DiagramAHTNJAMYBinding274);
  }, "updateLayoutConfig");
  c4DiagramAHTNJAMYBinding28 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding12;
  }, "getC4ShapeInRow");
  c4DiagramAHTNJAMYBinding29 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding13;
  }, "getC4BoundaryInRow");
  c4DiagramAHTNJAMYBinding30 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding6;
  }, "getCurrentBoundaryParse");
  c4DiagramAHTNJAMYBinding31 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding7;
  }, "getParentBoundaryParse");
  c4DiagramAHTNJAMYBinding32 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput203,
  ) {
    return c4DiagramAHTNJAMYInput203 == null
      ? c4DiagramAHTNJAMYBinding4
      : c4DiagramAHTNJAMYBinding4.filter(
          (item) => item.parentBoundary === c4DiagramAHTNJAMYInput203,
        );
  }, "getC4ShapeArray");
  c4DiagramAHTNJAMYBinding33 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput211,
  ) {
    return c4DiagramAHTNJAMYBinding4.find(
      (item) => item.alias === c4DiagramAHTNJAMYInput211,
    );
  }, "getC4Shape");
  c4DiagramAHTNJAMYBinding34 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput213,
  ) {
    return Object.keys(c4DiagramAHTNJAMYBinding32(c4DiagramAHTNJAMYInput213));
  }, "getC4ShapeKeys");
  c4DiagramAHTNJAMYBinding35 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput204,
  ) {
    return c4DiagramAHTNJAMYInput204 == null
      ? c4DiagramAHTNJAMYBinding8
      : c4DiagramAHTNJAMYBinding8.filter(
          (item) => item.parentBoundary === c4DiagramAHTNJAMYInput204,
        );
  }, "getBoundaries");
  c4DiagramAHTNJAMYBinding36 = c4DiagramAHTNJAMYBinding35;
  c4DiagramAHTNJAMYBinding37 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding9;
  }, "getRels");
  c4DiagramAHTNJAMYBinding38 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding10;
  }, "getTitle");
  c4DiagramAHTNJAMYBinding39 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput218,
  ) {
    c4DiagramAHTNJAMYBinding11 = c4DiagramAHTNJAMYInput218;
  }, "setWrap");
  c4DiagramAHTNJAMYBinding40 = defineFunctionName(function () {
    return c4DiagramAHTNJAMYBinding11;
  }, "autoWrap");
  _e = {
    addPersonOrSystem: c4DiagramAHTNJAMYBinding18,
    addPersonOrSystemBoundary: c4DiagramAHTNJAMYBinding21,
    addContainer: c4DiagramAHTNJAMYBinding19,
    addContainerBoundary: c4DiagramAHTNJAMYBinding22,
    addComponent: c4DiagramAHTNJAMYBinding20,
    addDeploymentNode: c4DiagramAHTNJAMYBinding23,
    popBoundaryParseStack: c4DiagramAHTNJAMYBinding24,
    addRel: c4DiagramAHTNJAMYBinding17,
    updateElStyle: c4DiagramAHTNJAMYBinding25,
    updateRelStyle: c4DiagramAHTNJAMYBinding26,
    updateLayoutConfig: c4DiagramAHTNJAMYBinding27,
    autoWrap: c4DiagramAHTNJAMYBinding40,
    setWrap: c4DiagramAHTNJAMYBinding39,
    getC4ShapeArray: c4DiagramAHTNJAMYBinding32,
    getC4Shape: c4DiagramAHTNJAMYBinding33,
    getC4ShapeKeys: c4DiagramAHTNJAMYBinding34,
    getBoundaries: c4DiagramAHTNJAMYBinding35,
    getBoundarys: c4DiagramAHTNJAMYBinding36,
    getCurrentBoundaryParse: c4DiagramAHTNJAMYBinding30,
    getParentBoundaryParse: c4DiagramAHTNJAMYBinding31,
    getRels: c4DiagramAHTNJAMYBinding37,
    getTitle: c4DiagramAHTNJAMYBinding38,
    getC4Type: c4DiagramAHTNJAMYBinding15,
    getC4ShapeInRow: c4DiagramAHTNJAMYBinding28,
    getC4BoundaryInRow: c4DiagramAHTNJAMYBinding29,
    setAccTitle: H,
    getAccTitle: _chunkICPOFSXXV,
    getAccDescription: _,
    setAccDescription: V,
    getConfig: defineFunctionName(() => b().c4, "getConfig"),
    clear: defineFunctionName(function () {
      c4DiagramAHTNJAMYBinding4 = [];
      c4DiagramAHTNJAMYBinding8 = [
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
      c4DiagramAHTNJAMYBinding7 = "";
      c4DiagramAHTNJAMYBinding6 = "global";
      c4DiagramAHTNJAMYBinding5 = [""];
      c4DiagramAHTNJAMYBinding9 = [];
      c4DiagramAHTNJAMYBinding5 = [""];
      c4DiagramAHTNJAMYBinding10 = "";
      c4DiagramAHTNJAMYBinding11 = false;
      c4DiagramAHTNJAMYBinding12 = 4;
      c4DiagramAHTNJAMYBinding13 = 2;
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
    setTitle: defineFunctionName(function (c4DiagramAHTNJAMYInput214) {
      c4DiagramAHTNJAMYBinding10 = R(c4DiagramAHTNJAMYInput214, b());
    }, "setTitle"),
    setC4Type: c4DiagramAHTNJAMYBinding16,
  };
  c4DiagramAHTNJAMYBinding41 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput215,
    c4DiagramAHTNJAMYInput216,
  ) {
    return a(c4DiagramAHTNJAMYInput215, c4DiagramAHTNJAMYInput216);
  }, "drawRect");
  c4DiagramAHTNJAMYBinding42 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput163,
    c4DiagramAHTNJAMYInput164,
    c4DiagramAHTNJAMYInput165,
    c4DiagramAHTNJAMYInput166,
    c4DiagramAHTNJAMYInput167,
    c4DiagramAHTNJAMYInput168,
  ) {
    let c4DiagramAHTNJAMYBinding282 = c4DiagramAHTNJAMYInput163.append("image");
    c4DiagramAHTNJAMYBinding282.attr("width", c4DiagramAHTNJAMYInput164);
    c4DiagramAHTNJAMYBinding282.attr("height", c4DiagramAHTNJAMYInput165);
    c4DiagramAHTNJAMYBinding282.attr("x", c4DiagramAHTNJAMYInput166);
    c4DiagramAHTNJAMYBinding282.attr("y", c4DiagramAHTNJAMYInput167);
    let c4DiagramAHTNJAMYBinding283 = c4DiagramAHTNJAMYInput168.startsWith(
      "data:image/png;base64",
    )
      ? c4DiagramAHTNJAMYInput168
      : c4DiagramAHTNJAMYBinding1.sanitizeUrl(c4DiagramAHTNJAMYInput168);
    c4DiagramAHTNJAMYBinding282.attr("xlink:href", c4DiagramAHTNJAMYBinding283);
  }, "drawImage");
  be = defineFunctionName(
    (
      c4DiagramAHTNJAMYInput18,
      c4DiagramAHTNJAMYInput19,
      c4DiagramAHTNJAMYInput20,
      c4DiagramAHTNJAMYInput21,
    ) => {
      let c4DiagramAHTNJAMYBinding167 = c4DiagramAHTNJAMYInput18.append("g"),
        c4DiagramAHTNJAMYBinding168 = 0;
      for (let c4DiagramAHTNJAMYBinding169 of c4DiagramAHTNJAMYInput19) {
        let c4DiagramAHTNJAMYBinding170 = c4DiagramAHTNJAMYBinding169.textColor
            ? c4DiagramAHTNJAMYBinding169.textColor
            : "#444444",
          c4DiagramAHTNJAMYBinding171 = c4DiagramAHTNJAMYBinding169.lineColor
            ? c4DiagramAHTNJAMYBinding169.lineColor
            : "#444444",
          c4DiagramAHTNJAMYBinding172 = c4DiagramAHTNJAMYBinding169.offsetX
            ? parseInt(c4DiagramAHTNJAMYBinding169.offsetX)
            : 0,
          c4DiagramAHTNJAMYBinding173 = c4DiagramAHTNJAMYBinding169.offsetY
            ? parseInt(c4DiagramAHTNJAMYBinding169.offsetY)
            : 0;
        if (c4DiagramAHTNJAMYBinding168 === 0) {
          let c4DiagramAHTNJAMYBinding267 =
            c4DiagramAHTNJAMYBinding167.append("line");
          c4DiagramAHTNJAMYBinding267.attr(
            "x1",
            c4DiagramAHTNJAMYBinding169.startPoint.x,
          );
          c4DiagramAHTNJAMYBinding267.attr(
            "y1",
            c4DiagramAHTNJAMYBinding169.startPoint.y,
          );
          c4DiagramAHTNJAMYBinding267.attr(
            "x2",
            c4DiagramAHTNJAMYBinding169.endPoint.x,
          );
          c4DiagramAHTNJAMYBinding267.attr(
            "y2",
            c4DiagramAHTNJAMYBinding169.endPoint.y,
          );
          c4DiagramAHTNJAMYBinding267.attr("stroke-width", "1");
          c4DiagramAHTNJAMYBinding267.attr(
            "stroke",
            c4DiagramAHTNJAMYBinding171,
          );
          c4DiagramAHTNJAMYBinding267.style("fill", "none");
          c4DiagramAHTNJAMYBinding169.type !== "rel_b" &&
            c4DiagramAHTNJAMYBinding267.attr(
              "marker-end",
              "url(#" + c4DiagramAHTNJAMYInput21 + "-arrowhead)",
            );
          (c4DiagramAHTNJAMYBinding169.type === "birel" ||
            c4DiagramAHTNJAMYBinding169.type === "rel_b") &&
            c4DiagramAHTNJAMYBinding267.attr(
              "marker-start",
              "url(#" + c4DiagramAHTNJAMYInput21 + "-arrowend)",
            );
          c4DiagramAHTNJAMYBinding168 = -1;
        } else {
          let c4DiagramAHTNJAMYBinding246 =
            c4DiagramAHTNJAMYBinding167.append("path");
          c4DiagramAHTNJAMYBinding246
            .attr("fill", "none")
            .attr("stroke-width", "1")
            .attr("stroke", c4DiagramAHTNJAMYBinding171)
            .attr(
              "d",
              "Mstartx,starty Qcontrolx,controly stopx,stopy "
                .replaceAll("startx", c4DiagramAHTNJAMYBinding169.startPoint.x)
                .replaceAll("starty", c4DiagramAHTNJAMYBinding169.startPoint.y)
                .replaceAll(
                  "controlx",
                  c4DiagramAHTNJAMYBinding169.startPoint.x +
                    (c4DiagramAHTNJAMYBinding169.endPoint.x -
                      c4DiagramAHTNJAMYBinding169.startPoint.x) /
                      2 -
                    (c4DiagramAHTNJAMYBinding169.endPoint.x -
                      c4DiagramAHTNJAMYBinding169.startPoint.x) /
                      4,
                )
                .replaceAll(
                  "controly",
                  c4DiagramAHTNJAMYBinding169.startPoint.y +
                    (c4DiagramAHTNJAMYBinding169.endPoint.y -
                      c4DiagramAHTNJAMYBinding169.startPoint.y) /
                      2,
                )
                .replaceAll("stopx", c4DiagramAHTNJAMYBinding169.endPoint.x)
                .replaceAll("stopy", c4DiagramAHTNJAMYBinding169.endPoint.y),
            );
          c4DiagramAHTNJAMYBinding169.type !== "rel_b" &&
            c4DiagramAHTNJAMYBinding246.attr(
              "marker-end",
              "url(#" + c4DiagramAHTNJAMYInput21 + "-arrowhead)",
            );
          (c4DiagramAHTNJAMYBinding169.type === "birel" ||
            c4DiagramAHTNJAMYBinding169.type === "rel_b") &&
            c4DiagramAHTNJAMYBinding246.attr(
              "marker-start",
              "url(#" + c4DiagramAHTNJAMYInput21 + "-arrowend)",
            );
        }
        let c4DiagramAHTNJAMYBinding174 =
          c4DiagramAHTNJAMYInput20.messageFont();
        c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput20)(
          c4DiagramAHTNJAMYBinding169.label.text,
          c4DiagramAHTNJAMYBinding167,
          Math.min(
            c4DiagramAHTNJAMYBinding169.startPoint.x,
            c4DiagramAHTNJAMYBinding169.endPoint.x,
          ) +
            Math.abs(
              c4DiagramAHTNJAMYBinding169.endPoint.x -
                c4DiagramAHTNJAMYBinding169.startPoint.x,
            ) /
              2 +
            c4DiagramAHTNJAMYBinding172,
          Math.min(
            c4DiagramAHTNJAMYBinding169.startPoint.y,
            c4DiagramAHTNJAMYBinding169.endPoint.y,
          ) +
            Math.abs(
              c4DiagramAHTNJAMYBinding169.endPoint.y -
                c4DiagramAHTNJAMYBinding169.startPoint.y,
            ) /
              2 +
            c4DiagramAHTNJAMYBinding173,
          c4DiagramAHTNJAMYBinding169.label.width,
          c4DiagramAHTNJAMYBinding169.label.height,
          {
            fill: c4DiagramAHTNJAMYBinding170,
          },
          c4DiagramAHTNJAMYBinding174,
        );
        c4DiagramAHTNJAMYBinding169.techn &&
          c4DiagramAHTNJAMYBinding169.techn.text !== "" &&
          ((c4DiagramAHTNJAMYBinding174 =
            c4DiagramAHTNJAMYInput20.messageFont()),
          c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput20)(
            "[" + c4DiagramAHTNJAMYBinding169.techn.text + "]",
            c4DiagramAHTNJAMYBinding167,
            Math.min(
              c4DiagramAHTNJAMYBinding169.startPoint.x,
              c4DiagramAHTNJAMYBinding169.endPoint.x,
            ) +
              Math.abs(
                c4DiagramAHTNJAMYBinding169.endPoint.x -
                  c4DiagramAHTNJAMYBinding169.startPoint.x,
              ) /
                2 +
              c4DiagramAHTNJAMYBinding172,
            Math.min(
              c4DiagramAHTNJAMYBinding169.startPoint.y,
              c4DiagramAHTNJAMYBinding169.endPoint.y,
            ) +
              Math.abs(
                c4DiagramAHTNJAMYBinding169.endPoint.y -
                  c4DiagramAHTNJAMYBinding169.startPoint.y,
              ) /
                2 +
              c4DiagramAHTNJAMYInput20.messageFontSize +
              5 +
              c4DiagramAHTNJAMYBinding173,
            Math.max(
              c4DiagramAHTNJAMYBinding169.label.width,
              c4DiagramAHTNJAMYBinding169.techn.width,
            ),
            c4DiagramAHTNJAMYBinding169.techn.height,
            {
              fill: c4DiagramAHTNJAMYBinding170,
              "font-style": "italic",
            },
            c4DiagramAHTNJAMYBinding174,
          ));
      }
    },
    "drawRels",
  );
  c4DiagramAHTNJAMYBinding43 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput48,
    c4DiagramAHTNJAMYInput49,
    c4DiagramAHTNJAMYInput50,
  ) {
    let c4DiagramAHTNJAMYBinding209 = c4DiagramAHTNJAMYInput48.append("g"),
      c4DiagramAHTNJAMYBinding210 = c4DiagramAHTNJAMYInput49.bgColor
        ? c4DiagramAHTNJAMYInput49.bgColor
        : "none",
      c4DiagramAHTNJAMYBinding211 = c4DiagramAHTNJAMYInput49.borderColor
        ? c4DiagramAHTNJAMYInput49.borderColor
        : "#444444",
      c4DiagramAHTNJAMYBinding212 = c4DiagramAHTNJAMYInput49.fontColor
        ? c4DiagramAHTNJAMYInput49.fontColor
        : "black",
      c4DiagramAHTNJAMYBinding213 = {
        "stroke-width": 1,
        "stroke-dasharray": "7.0,7.0",
      };
    c4DiagramAHTNJAMYInput49.nodeType &&
      (c4DiagramAHTNJAMYBinding213 = {
        "stroke-width": 1,
      });
    c4DiagramAHTNJAMYBinding41(c4DiagramAHTNJAMYBinding209, {
      x: c4DiagramAHTNJAMYInput49.x,
      y: c4DiagramAHTNJAMYInput49.y,
      fill: c4DiagramAHTNJAMYBinding210,
      stroke: c4DiagramAHTNJAMYBinding211,
      width: c4DiagramAHTNJAMYInput49.width,
      height: c4DiagramAHTNJAMYInput49.height,
      rx: 2.5,
      ry: 2.5,
      attrs: c4DiagramAHTNJAMYBinding213,
    });
    let c4DiagramAHTNJAMYBinding214 = c4DiagramAHTNJAMYInput50.boundaryFont();
    c4DiagramAHTNJAMYBinding214.fontWeight = "bold";
    c4DiagramAHTNJAMYBinding214.fontSize += 2;
    c4DiagramAHTNJAMYBinding214.fontColor = c4DiagramAHTNJAMYBinding212;
    c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput50)(
      c4DiagramAHTNJAMYInput49.label.text,
      c4DiagramAHTNJAMYBinding209,
      c4DiagramAHTNJAMYInput49.x,
      c4DiagramAHTNJAMYInput49.y + c4DiagramAHTNJAMYInput49.label.Y,
      c4DiagramAHTNJAMYInput49.width,
      c4DiagramAHTNJAMYInput49.height,
      {
        fill: "#444444",
      },
      c4DiagramAHTNJAMYBinding214,
    );
    c4DiagramAHTNJAMYInput49.type &&
      c4DiagramAHTNJAMYInput49.type.text !== "" &&
      ((c4DiagramAHTNJAMYBinding214 = c4DiagramAHTNJAMYInput50.boundaryFont()),
      (c4DiagramAHTNJAMYBinding214.fontColor = c4DiagramAHTNJAMYBinding212),
      c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput50)(
        c4DiagramAHTNJAMYInput49.type.text,
        c4DiagramAHTNJAMYBinding209,
        c4DiagramAHTNJAMYInput49.x,
        c4DiagramAHTNJAMYInput49.y + c4DiagramAHTNJAMYInput49.type.Y,
        c4DiagramAHTNJAMYInput49.width,
        c4DiagramAHTNJAMYInput49.height,
        {
          fill: "#444444",
        },
        c4DiagramAHTNJAMYBinding214,
      ));
    c4DiagramAHTNJAMYInput49.descr &&
      c4DiagramAHTNJAMYInput49.descr.text !== "" &&
      ((c4DiagramAHTNJAMYBinding214 = c4DiagramAHTNJAMYInput50.boundaryFont()),
      (c4DiagramAHTNJAMYBinding214.fontSize -= 2),
      (c4DiagramAHTNJAMYBinding214.fontColor = c4DiagramAHTNJAMYBinding212),
      c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput50)(
        c4DiagramAHTNJAMYInput49.descr.text,
        c4DiagramAHTNJAMYBinding209,
        c4DiagramAHTNJAMYInput49.x,
        c4DiagramAHTNJAMYInput49.y + c4DiagramAHTNJAMYInput49.descr.Y,
        c4DiagramAHTNJAMYInput49.width,
        c4DiagramAHTNJAMYInput49.height,
        {
          fill: "#444444",
        },
        c4DiagramAHTNJAMYBinding214,
      ));
  }, "drawBoundary");
  c4DiagramAHTNJAMYBinding44 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput3,
    c4DiagramAHTNJAMYInput4,
    c4DiagramAHTNJAMYInput5,
  ) {
    let c4DiagramAHTNJAMYBinding128 = c4DiagramAHTNJAMYInput4.bgColor
        ? c4DiagramAHTNJAMYInput4.bgColor
        : c4DiagramAHTNJAMYInput5[
            c4DiagramAHTNJAMYInput4.typeC4Shape.text + "_bg_color"
          ],
      c4DiagramAHTNJAMYBinding129 = c4DiagramAHTNJAMYInput4.borderColor
        ? c4DiagramAHTNJAMYInput4.borderColor
        : c4DiagramAHTNJAMYInput5[
            c4DiagramAHTNJAMYInput4.typeC4Shape.text + "_border_color"
          ],
      c4DiagramAHTNJAMYBinding130 = c4DiagramAHTNJAMYInput4.fontColor
        ? c4DiagramAHTNJAMYInput4.fontColor
        : "#FFFFFF",
      c4DiagramAHTNJAMYBinding131 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
    switch (c4DiagramAHTNJAMYInput4.typeC4Shape.text) {
      case "person":
        c4DiagramAHTNJAMYBinding131 =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
        break;
      case "external_person":
        c4DiagramAHTNJAMYBinding131 =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
        break;
    }
    let c4DiagramAHTNJAMYBinding132 = c4DiagramAHTNJAMYInput3.append("g");
    c4DiagramAHTNJAMYBinding132.attr("class", "person-man");
    let c4DiagramAHTNJAMYBinding133 = chunkYZCP3GAMS();
    switch (c4DiagramAHTNJAMYInput4.typeC4Shape.text) {
      case "person":
      case "external_person":
      case "system":
      case "external_system":
      case "container":
      case "external_container":
      case "component":
      case "external_component":
        c4DiagramAHTNJAMYBinding133.x = c4DiagramAHTNJAMYInput4.x;
        c4DiagramAHTNJAMYBinding133.y = c4DiagramAHTNJAMYInput4.y;
        c4DiagramAHTNJAMYBinding133.fill = c4DiagramAHTNJAMYBinding128;
        c4DiagramAHTNJAMYBinding133.width = c4DiagramAHTNJAMYInput4.width;
        c4DiagramAHTNJAMYBinding133.height = c4DiagramAHTNJAMYInput4.height;
        c4DiagramAHTNJAMYBinding133.stroke = c4DiagramAHTNJAMYBinding129;
        c4DiagramAHTNJAMYBinding133.rx = 2.5;
        c4DiagramAHTNJAMYBinding133.ry = 2.5;
        c4DiagramAHTNJAMYBinding133.attrs = {
          "stroke-width": 0.5,
        };
        c4DiagramAHTNJAMYBinding41(
          c4DiagramAHTNJAMYBinding132,
          c4DiagramAHTNJAMYBinding133,
        );
        break;
      case "system_db":
      case "external_system_db":
      case "container_db":
      case "external_container_db":
      case "component_db":
      case "external_component_db":
        c4DiagramAHTNJAMYBinding132
          .append("path")
          .attr("fill", c4DiagramAHTNJAMYBinding128)
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramAHTNJAMYBinding129)
          .attr(
            "d",
            "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height"
              .replaceAll("startx", c4DiagramAHTNJAMYInput4.x)
              .replaceAll("starty", c4DiagramAHTNJAMYInput4.y)
              .replaceAll("half", c4DiagramAHTNJAMYInput4.width / 2)
              .replaceAll("height", c4DiagramAHTNJAMYInput4.height),
          );
        c4DiagramAHTNJAMYBinding132
          .append("path")
          .attr("fill", "none")
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramAHTNJAMYBinding129)
          .attr(
            "d",
            "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10"
              .replaceAll("startx", c4DiagramAHTNJAMYInput4.x)
              .replaceAll("starty", c4DiagramAHTNJAMYInput4.y)
              .replaceAll("half", c4DiagramAHTNJAMYInput4.width / 2),
          );
        break;
      case "system_queue":
      case "external_system_queue":
      case "container_queue":
      case "external_container_queue":
      case "component_queue":
      case "external_component_queue":
        c4DiagramAHTNJAMYBinding132
          .append("path")
          .attr("fill", c4DiagramAHTNJAMYBinding128)
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramAHTNJAMYBinding129)
          .attr(
            "d",
            "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half"
              .replaceAll("startx", c4DiagramAHTNJAMYInput4.x)
              .replaceAll("starty", c4DiagramAHTNJAMYInput4.y)
              .replaceAll("width", c4DiagramAHTNJAMYInput4.width)
              .replaceAll("half", c4DiagramAHTNJAMYInput4.height / 2),
          );
        c4DiagramAHTNJAMYBinding132
          .append("path")
          .attr("fill", "none")
          .attr("stroke-width", "0.5")
          .attr("stroke", c4DiagramAHTNJAMYBinding129)
          .attr(
            "d",
            "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half"
              .replaceAll(
                "startx",
                c4DiagramAHTNJAMYInput4.x + c4DiagramAHTNJAMYInput4.width,
              )
              .replaceAll("starty", c4DiagramAHTNJAMYInput4.y)
              .replaceAll("half", c4DiagramAHTNJAMYInput4.height / 2),
          );
        break;
    }
    let c4DiagramAHTNJAMYBinding134 = c4DiagramAHTNJAMYBinding52(
      c4DiagramAHTNJAMYInput5,
      c4DiagramAHTNJAMYInput4.typeC4Shape.text,
    );
    switch (
      (c4DiagramAHTNJAMYBinding132
        .append("text")
        .attr("fill", c4DiagramAHTNJAMYBinding130)
        .attr("font-family", c4DiagramAHTNJAMYBinding134.fontFamily)
        .attr("font-size", c4DiagramAHTNJAMYBinding134.fontSize - 2)
        .attr("font-style", "italic")
        .attr("lengthAdjust", "spacing")
        .attr("textLength", c4DiagramAHTNJAMYInput4.typeC4Shape.width)
        .attr(
          "x",
          c4DiagramAHTNJAMYInput4.x +
            c4DiagramAHTNJAMYInput4.width / 2 -
            c4DiagramAHTNJAMYInput4.typeC4Shape.width / 2,
        )
        .attr(
          "y",
          c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.typeC4Shape.Y,
        )
        .text("<<" + c4DiagramAHTNJAMYInput4.typeC4Shape.text + ">>"),
      c4DiagramAHTNJAMYInput4.typeC4Shape.text)
    ) {
      case "person":
      case "external_person":
        c4DiagramAHTNJAMYBinding42(
          c4DiagramAHTNJAMYBinding132,
          48,
          48,
          c4DiagramAHTNJAMYInput4.x + c4DiagramAHTNJAMYInput4.width / 2 - 24,
          c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.image.Y,
          c4DiagramAHTNJAMYBinding131,
        );
        break;
    }
    let c4DiagramAHTNJAMYBinding135 =
      c4DiagramAHTNJAMYInput5[
        c4DiagramAHTNJAMYInput4.typeC4Shape.text + "Font"
      ]();
    return (
      (c4DiagramAHTNJAMYBinding135.fontWeight = "bold"),
      (c4DiagramAHTNJAMYBinding135.fontSize += 2),
      (c4DiagramAHTNJAMYBinding135.fontColor = c4DiagramAHTNJAMYBinding130),
      c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput5)(
        c4DiagramAHTNJAMYInput4.label.text,
        c4DiagramAHTNJAMYBinding132,
        c4DiagramAHTNJAMYInput4.x,
        c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.label.Y,
        c4DiagramAHTNJAMYInput4.width,
        c4DiagramAHTNJAMYInput4.height,
        {
          fill: c4DiagramAHTNJAMYBinding130,
        },
        c4DiagramAHTNJAMYBinding135,
      ),
      (c4DiagramAHTNJAMYBinding135 =
        c4DiagramAHTNJAMYInput5[
          c4DiagramAHTNJAMYInput4.typeC4Shape.text + "Font"
        ]()),
      (c4DiagramAHTNJAMYBinding135.fontColor = c4DiagramAHTNJAMYBinding130),
      c4DiagramAHTNJAMYInput4.techn &&
      c4DiagramAHTNJAMYInput4.techn?.text !== ""
        ? c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput5)(
            c4DiagramAHTNJAMYInput4.techn.text,
            c4DiagramAHTNJAMYBinding132,
            c4DiagramAHTNJAMYInput4.x,
            c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.techn.Y,
            c4DiagramAHTNJAMYInput4.width,
            c4DiagramAHTNJAMYInput4.height,
            {
              fill: c4DiagramAHTNJAMYBinding130,
              "font-style": "italic",
            },
            c4DiagramAHTNJAMYBinding135,
          )
        : c4DiagramAHTNJAMYInput4.type &&
          c4DiagramAHTNJAMYInput4.type.text !== "" &&
          c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput5)(
            c4DiagramAHTNJAMYInput4.type.text,
            c4DiagramAHTNJAMYBinding132,
            c4DiagramAHTNJAMYInput4.x,
            c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.type.Y,
            c4DiagramAHTNJAMYInput4.width,
            c4DiagramAHTNJAMYInput4.height,
            {
              fill: c4DiagramAHTNJAMYBinding130,
              "font-style": "italic",
            },
            c4DiagramAHTNJAMYBinding135,
          ),
      c4DiagramAHTNJAMYInput4.descr &&
        c4DiagramAHTNJAMYInput4.descr.text !== "" &&
        ((c4DiagramAHTNJAMYBinding135 = c4DiagramAHTNJAMYInput5.personFont()),
        (c4DiagramAHTNJAMYBinding135.fontColor = c4DiagramAHTNJAMYBinding130),
        c4DiagramAHTNJAMYBinding53(c4DiagramAHTNJAMYInput5)(
          c4DiagramAHTNJAMYInput4.descr.text,
          c4DiagramAHTNJAMYBinding132,
          c4DiagramAHTNJAMYInput4.x,
          c4DiagramAHTNJAMYInput4.y + c4DiagramAHTNJAMYInput4.descr.Y,
          c4DiagramAHTNJAMYInput4.width,
          c4DiagramAHTNJAMYInput4.height,
          {
            fill: c4DiagramAHTNJAMYBinding130,
          },
          c4DiagramAHTNJAMYBinding135,
        )),
      c4DiagramAHTNJAMYInput4.height
    );
  }, "drawC4Shape");
  c4DiagramAHTNJAMYBinding45 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput1,
    c4DiagramAHTNJAMYInput2,
  ) {
    c4DiagramAHTNJAMYInput1
      .append("defs")
      .append("symbol")
      .attr("id", c4DiagramAHTNJAMYInput2 + "-database")
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z",
      );
  }, "insertDatabaseIcon");
  c4DiagramAHTNJAMYBinding46 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput146,
    c4DiagramAHTNJAMYInput147,
  ) {
    c4DiagramAHTNJAMYInput146
      .append("defs")
      .append("symbol")
      .attr("id", c4DiagramAHTNJAMYInput147 + "-computer")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z",
      );
  }, "insertComputerIcon");
  c4DiagramAHTNJAMYBinding47 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput137,
    c4DiagramAHTNJAMYInput138,
  ) {
    c4DiagramAHTNJAMYInput137
      .append("defs")
      .append("symbol")
      .attr("id", c4DiagramAHTNJAMYInput138 + "-clock")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z",
      );
  }, "insertClockIcon");
  c4DiagramAHTNJAMYBinding48 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput152,
    c4DiagramAHTNJAMYInput153,
  ) {
    c4DiagramAHTNJAMYInput152
      .append("defs")
      .append("marker")
      .attr("id", c4DiagramAHTNJAMYInput153 + "-arrowhead")
      .attr("refX", 9)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  c4DiagramAHTNJAMYBinding49 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput154,
    c4DiagramAHTNJAMYInput155,
  ) {
    c4DiagramAHTNJAMYInput154
      .append("defs")
      .append("marker")
      .attr("id", c4DiagramAHTNJAMYInput155 + "-arrowend")
      .attr("refX", 1)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 10 0 L 0 5 L 10 10 z");
  }, "insertArrowEnd");
  c4DiagramAHTNJAMYBinding50 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput159,
    c4DiagramAHTNJAMYInput160,
  ) {
    c4DiagramAHTNJAMYInput159
      .append("defs")
      .append("marker")
      .attr("id", c4DiagramAHTNJAMYInput160 + "-filled-head")
      .attr("refX", 18)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  c4DiagramAHTNJAMYBinding51 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput120,
    c4DiagramAHTNJAMYInput121,
  ) {
    let c4DiagramAHTNJAMYBinding257 = c4DiagramAHTNJAMYInput120
      .append("defs")
      .append("marker")
      .attr("id", c4DiagramAHTNJAMYInput121 + "-crosshead")
      .attr("markerWidth", 15)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .attr("refX", 16)
      .attr("refY", 4);
    c4DiagramAHTNJAMYBinding257
      .append("path")
      .attr("fill", "black")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", "0, 0")
      .attr("stroke-width", "1px")
      .attr("d", "M 9,2 V 6 L16,4 Z");
    c4DiagramAHTNJAMYBinding257
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", "0, 0")
      .attr("stroke-width", "1px")
      .attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
  }, "insertArrowCrossHead");
  c4DiagramAHTNJAMYBinding52 = defineFunctionName(
    (c4DiagramAHTNJAMYInput184, c4DiagramAHTNJAMYInput185) => ({
      fontFamily:
        c4DiagramAHTNJAMYInput184[c4DiagramAHTNJAMYInput185 + "FontFamily"],
      fontSize:
        c4DiagramAHTNJAMYInput184[c4DiagramAHTNJAMYInput185 + "FontSize"],
      fontWeight:
        c4DiagramAHTNJAMYInput184[c4DiagramAHTNJAMYInput185 + "FontWeight"],
    }),
    "getC4ShapeFont",
  );
  c4DiagramAHTNJAMYBinding53 = (function () {
    function c4DiagramAHTNJAMYHelper6(
      c4DiagramAHTNJAMYInput169,
      c4DiagramAHTNJAMYInput170,
      c4DiagramAHTNJAMYInput171,
      c4DiagramAHTNJAMYInput172,
      c4DiagramAHTNJAMYInput173,
      c4DiagramAHTNJAMYInput174,
      c4DiagramAHTNJAMYInput175,
    ) {
      c4DiagramAHTNJAMYHelper9(
        c4DiagramAHTNJAMYInput170
          .append("text")
          .attr("x", c4DiagramAHTNJAMYInput171 + c4DiagramAHTNJAMYInput173 / 2)
          .attr(
            "y",
            c4DiagramAHTNJAMYInput172 + c4DiagramAHTNJAMYInput174 / 2 + 5,
          )
          .style("text-anchor", "middle")
          .text(c4DiagramAHTNJAMYInput169),
        c4DiagramAHTNJAMYInput175,
      );
    }
    defineFunctionName(c4DiagramAHTNJAMYHelper6, "byText");
    function c4DiagramAHTNJAMYHelper7(
      c4DiagramAHTNJAMYInput112,
      c4DiagramAHTNJAMYInput113,
      c4DiagramAHTNJAMYInput114,
      c4DiagramAHTNJAMYInput115,
      c4DiagramAHTNJAMYInput116,
      c4DiagramAHTNJAMYInput117,
      c4DiagramAHTNJAMYInput118,
      c4DiagramAHTNJAMYInput119,
    ) {
      let { fontSize, fontFamily, fontWeight } = c4DiagramAHTNJAMYInput119,
        c4DiagramAHTNJAMYBinding256 = c4DiagramAHTNJAMYInput112.split(
          s.lineBreakRegex,
        );
      for (
        let c4DiagramAHTNJAMYBinding262 = 0;
        c4DiagramAHTNJAMYBinding262 < c4DiagramAHTNJAMYBinding256.length;
        c4DiagramAHTNJAMYBinding262++
      ) {
        let c4DiagramAHTNJAMYBinding268 =
            c4DiagramAHTNJAMYBinding262 * fontSize -
            (fontSize * (c4DiagramAHTNJAMYBinding256.length - 1)) / 2,
          c4DiagramAHTNJAMYBinding269 = c4DiagramAHTNJAMYInput113
            .append("text")
            .attr(
              "x",
              c4DiagramAHTNJAMYInput114 + c4DiagramAHTNJAMYInput116 / 2,
            )
            .attr("y", c4DiagramAHTNJAMYInput115)
            .style("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .style("font-size", fontSize)
            .style("font-weight", fontWeight)
            .style("font-family", fontFamily);
        c4DiagramAHTNJAMYBinding269
          .append("tspan")
          .attr("dy", c4DiagramAHTNJAMYBinding268)
          .text(c4DiagramAHTNJAMYBinding256[c4DiagramAHTNJAMYBinding262])
          .attr("alignment-baseline", "mathematical");
        c4DiagramAHTNJAMYHelper9(
          c4DiagramAHTNJAMYBinding269,
          c4DiagramAHTNJAMYInput118,
        );
      }
    }
    defineFunctionName(c4DiagramAHTNJAMYHelper7, "byTspan");
    function c4DiagramAHTNJAMYHelper8(
      c4DiagramAHTNJAMYInput129,
      c4DiagramAHTNJAMYInput130,
      c4DiagramAHTNJAMYInput131,
      c4DiagramAHTNJAMYInput132,
      c4DiagramAHTNJAMYInput133,
      c4DiagramAHTNJAMYInput134,
      c4DiagramAHTNJAMYInput135,
      c4DiagramAHTNJAMYInput136,
    ) {
      let c4DiagramAHTNJAMYBinding259 =
          c4DiagramAHTNJAMYInput130.append("switch"),
        c4DiagramAHTNJAMYBinding260 = c4DiagramAHTNJAMYBinding259
          .append("foreignObject")
          .attr("x", c4DiagramAHTNJAMYInput131)
          .attr("y", c4DiagramAHTNJAMYInput132)
          .attr("width", c4DiagramAHTNJAMYInput133)
          .attr("height", c4DiagramAHTNJAMYInput134)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      c4DiagramAHTNJAMYBinding260
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(c4DiagramAHTNJAMYInput129);
      c4DiagramAHTNJAMYHelper7(
        c4DiagramAHTNJAMYInput129,
        c4DiagramAHTNJAMYBinding259,
        c4DiagramAHTNJAMYInput131,
        c4DiagramAHTNJAMYInput132,
        c4DiagramAHTNJAMYInput133,
        c4DiagramAHTNJAMYInput134,
        c4DiagramAHTNJAMYInput135,
        c4DiagramAHTNJAMYInput136,
      );
      c4DiagramAHTNJAMYHelper9(
        c4DiagramAHTNJAMYBinding260,
        c4DiagramAHTNJAMYInput135,
      );
    }
    defineFunctionName(c4DiagramAHTNJAMYHelper8, "byFo");
    function c4DiagramAHTNJAMYHelper9(
      c4DiagramAHTNJAMYInput197,
      c4DiagramAHTNJAMYInput198,
    ) {
      for (let c4DiagramAHTNJAMYBinding379 in c4DiagramAHTNJAMYInput198)
        c4DiagramAHTNJAMYInput198.hasOwnProperty(c4DiagramAHTNJAMYBinding379) &&
          c4DiagramAHTNJAMYInput197.attr(
            c4DiagramAHTNJAMYBinding379,
            c4DiagramAHTNJAMYInput198[c4DiagramAHTNJAMYBinding379],
          );
    }
    return (
      defineFunctionName(c4DiagramAHTNJAMYHelper9, "_setTextAttrs"),
      function (c4DiagramAHTNJAMYInput183) {
        return c4DiagramAHTNJAMYInput183.textPlacement === "fo"
          ? c4DiagramAHTNJAMYHelper8
          : c4DiagramAHTNJAMYInput183.textPlacement === "old"
            ? c4DiagramAHTNJAMYHelper6
            : c4DiagramAHTNJAMYHelper7;
      }
    );
  })();
  c4DiagramAHTNJAMYBinding54 = {
    drawRect: c4DiagramAHTNJAMYBinding41,
    drawBoundary: c4DiagramAHTNJAMYBinding43,
    drawC4Shape: c4DiagramAHTNJAMYBinding44,
    drawRels: be,
    drawImage: c4DiagramAHTNJAMYBinding42,
    insertArrowHead: c4DiagramAHTNJAMYBinding48,
    insertArrowEnd: c4DiagramAHTNJAMYBinding49,
    insertArrowFilledHead: c4DiagramAHTNJAMYBinding50,
    insertArrowCrossHead: c4DiagramAHTNJAMYBinding51,
    insertDatabaseIcon: c4DiagramAHTNJAMYBinding45,
    insertComputerIcon: c4DiagramAHTNJAMYBinding46,
    insertClockIcon: c4DiagramAHTNJAMYBinding47,
  };
  c4DiagramAHTNJAMYBinding55 = 0;
  c4DiagramAHTNJAMYBinding56 = 0;
  c4DiagramAHTNJAMYBinding57 = 4;
  c4DiagramAHTNJAMYBinding58 = 2;
  c4DiagramAHTNJAMYBinding2.yy = _e;
  c4DiagramAHTNJAMYBinding59 = {};
  c4DiagramAHTNJAMYBinding60 = class {
    static {
      defineFunctionName(this, "Bounds");
    }
    constructor(c4DiagramAHTNJAMYInput139) {
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
      c4DiagramAHTNJAMYBinding61(c4DiagramAHTNJAMYInput139.db.getConfig());
    }
    setData(
      c4DiagramAHTNJAMYInput176,
      c4DiagramAHTNJAMYInput177,
      c4DiagramAHTNJAMYInput178,
      c4DiagramAHTNJAMYInput179,
    ) {
      this.nextData.startx = this.data.startx = c4DiagramAHTNJAMYInput176;
      this.nextData.stopx = this.data.stopx = c4DiagramAHTNJAMYInput177;
      this.nextData.starty = this.data.starty = c4DiagramAHTNJAMYInput178;
      this.nextData.stopy = this.data.stopy = c4DiagramAHTNJAMYInput179;
    }
    updateVal(
      c4DiagramAHTNJAMYInput199,
      c4DiagramAHTNJAMYInput200,
      c4DiagramAHTNJAMYInput201,
      c4DiagramAHTNJAMYInput202,
    ) {
      c4DiagramAHTNJAMYInput199[c4DiagramAHTNJAMYInput200] === undefined
        ? (c4DiagramAHTNJAMYInput199[c4DiagramAHTNJAMYInput200] =
            c4DiagramAHTNJAMYInput201)
        : (c4DiagramAHTNJAMYInput199[c4DiagramAHTNJAMYInput200] =
            c4DiagramAHTNJAMYInput202(
              c4DiagramAHTNJAMYInput201,
              c4DiagramAHTNJAMYInput199[c4DiagramAHTNJAMYInput200],
            ));
    }
    insert(c4DiagramAHTNJAMYInput53) {
      this.nextData.cnt = this.nextData.cnt + 1;
      let c4DiagramAHTNJAMYBinding226 =
          this.nextData.startx === this.nextData.stopx
            ? this.nextData.stopx + c4DiagramAHTNJAMYInput53.margin
            : this.nextData.stopx + c4DiagramAHTNJAMYInput53.margin * 2,
        c4DiagramAHTNJAMYBinding227 =
          c4DiagramAHTNJAMYBinding226 + c4DiagramAHTNJAMYInput53.width,
        c4DiagramAHTNJAMYBinding228 =
          this.nextData.starty + c4DiagramAHTNJAMYInput53.margin * 2,
        c4DiagramAHTNJAMYBinding229 =
          c4DiagramAHTNJAMYBinding228 + c4DiagramAHTNJAMYInput53.height;
      (c4DiagramAHTNJAMYBinding226 >= this.data.widthLimit ||
        c4DiagramAHTNJAMYBinding227 >= this.data.widthLimit ||
        this.nextData.cnt > c4DiagramAHTNJAMYBinding57) &&
        ((c4DiagramAHTNJAMYBinding226 =
          this.nextData.startx +
          c4DiagramAHTNJAMYInput53.margin +
          c4DiagramAHTNJAMYBinding59.nextLinePaddingX),
        (c4DiagramAHTNJAMYBinding228 =
          this.nextData.stopy + c4DiagramAHTNJAMYInput53.margin * 2),
        (this.nextData.stopx = c4DiagramAHTNJAMYBinding227 =
          c4DiagramAHTNJAMYBinding226 + c4DiagramAHTNJAMYInput53.width),
        (this.nextData.starty = this.nextData.stopy),
        (this.nextData.stopy = c4DiagramAHTNJAMYBinding229 =
          c4DiagramAHTNJAMYBinding228 + c4DiagramAHTNJAMYInput53.height),
        (this.nextData.cnt = 1));
      c4DiagramAHTNJAMYInput53.x = c4DiagramAHTNJAMYBinding226;
      c4DiagramAHTNJAMYInput53.y = c4DiagramAHTNJAMYBinding228;
      this.updateVal(
        this.data,
        "startx",
        c4DiagramAHTNJAMYBinding226,
        Math.min,
      );
      this.updateVal(
        this.data,
        "starty",
        c4DiagramAHTNJAMYBinding228,
        Math.min,
      );
      this.updateVal(this.data, "stopx", c4DiagramAHTNJAMYBinding227, Math.max);
      this.updateVal(this.data, "stopy", c4DiagramAHTNJAMYBinding229, Math.max);
      this.updateVal(
        this.nextData,
        "startx",
        c4DiagramAHTNJAMYBinding226,
        Math.min,
      );
      this.updateVal(
        this.nextData,
        "starty",
        c4DiagramAHTNJAMYBinding228,
        Math.min,
      );
      this.updateVal(
        this.nextData,
        "stopx",
        c4DiagramAHTNJAMYBinding227,
        Math.max,
      );
      this.updateVal(
        this.nextData,
        "stopy",
        c4DiagramAHTNJAMYBinding229,
        Math.max,
      );
    }
    init(c4DiagramAHTNJAMYInput148) {
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
      c4DiagramAHTNJAMYBinding61(c4DiagramAHTNJAMYInput148.db.getConfig());
    }
    bumpLastMargin(c4DiagramAHTNJAMYInput205) {
      this.data.stopx += c4DiagramAHTNJAMYInput205;
      this.data.stopy += c4DiagramAHTNJAMYInput205;
    }
  };
  c4DiagramAHTNJAMYBinding61 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput145,
  ) {
    _chunkICPOFSXXR(c4DiagramAHTNJAMYBinding59, c4DiagramAHTNJAMYInput145);
    c4DiagramAHTNJAMYInput145.fontFamily &&
      (c4DiagramAHTNJAMYBinding59.personFontFamily =
        c4DiagramAHTNJAMYBinding59.systemFontFamily =
        c4DiagramAHTNJAMYBinding59.messageFontFamily =
          c4DiagramAHTNJAMYInput145.fontFamily);
    c4DiagramAHTNJAMYInput145.fontSize &&
      (c4DiagramAHTNJAMYBinding59.personFontSize =
        c4DiagramAHTNJAMYBinding59.systemFontSize =
        c4DiagramAHTNJAMYBinding59.messageFontSize =
          c4DiagramAHTNJAMYInput145.fontSize);
    c4DiagramAHTNJAMYInput145.fontWeight &&
      (c4DiagramAHTNJAMYBinding59.personFontWeight =
        c4DiagramAHTNJAMYBinding59.systemFontWeight =
        c4DiagramAHTNJAMYBinding59.messageFontWeight =
          c4DiagramAHTNJAMYInput145.fontWeight);
  }, "setConf");
  c4DiagramAHTNJAMYBinding62 = defineFunctionName(
    (c4DiagramAHTNJAMYInput186, c4DiagramAHTNJAMYInput187) => ({
      fontFamily:
        c4DiagramAHTNJAMYInput186[c4DiagramAHTNJAMYInput187 + "FontFamily"],
      fontSize:
        c4DiagramAHTNJAMYInput186[c4DiagramAHTNJAMYInput187 + "FontSize"],
      fontWeight:
        c4DiagramAHTNJAMYInput186[c4DiagramAHTNJAMYInput187 + "FontWeight"],
    }),
    "c4ShapeFont",
  );
  c4DiagramAHTNJAMYBinding63 = defineFunctionName(
    (c4DiagramAHTNJAMYInput188) => ({
      fontFamily: c4DiagramAHTNJAMYInput188.boundaryFontFamily,
      fontSize: c4DiagramAHTNJAMYInput188.boundaryFontSize,
      fontWeight: c4DiagramAHTNJAMYInput188.boundaryFontWeight,
    }),
    "boundaryFont",
  );
  c4DiagramAHTNJAMYBinding64 = defineFunctionName(
    (c4DiagramAHTNJAMYInput189) => ({
      fontFamily: c4DiagramAHTNJAMYInput189.messageFontFamily,
      fontSize: c4DiagramAHTNJAMYInput189.messageFontSize,
      fontWeight: c4DiagramAHTNJAMYInput189.messageFontWeight,
    }),
    "messageFont",
  );
  defineFunctionName(c4DiagramAHTNJAMYHelper1, "calcC4ShapeTextWH");
  c4DiagramAHTNJAMYBinding65 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput149,
    c4DiagramAHTNJAMYInput150,
    c4DiagramAHTNJAMYInput151,
  ) {
    c4DiagramAHTNJAMYInput150.x = c4DiagramAHTNJAMYInput151.data.startx;
    c4DiagramAHTNJAMYInput150.y = c4DiagramAHTNJAMYInput151.data.starty;
    c4DiagramAHTNJAMYInput150.width =
      c4DiagramAHTNJAMYInput151.data.stopx -
      c4DiagramAHTNJAMYInput151.data.startx;
    c4DiagramAHTNJAMYInput150.height =
      c4DiagramAHTNJAMYInput151.data.stopy -
      c4DiagramAHTNJAMYInput151.data.starty;
    c4DiagramAHTNJAMYInput150.label.y =
      c4DiagramAHTNJAMYBinding59.c4ShapeMargin - 35;
    let c4DiagramAHTNJAMYBinding271 =
        c4DiagramAHTNJAMYInput150.wrap && c4DiagramAHTNJAMYBinding59.wrap,
      c4DiagramAHTNJAMYBinding272 = c4DiagramAHTNJAMYBinding63(
        c4DiagramAHTNJAMYBinding59,
      );
    c4DiagramAHTNJAMYBinding272.fontSize += 2;
    c4DiagramAHTNJAMYBinding272.fontWeight = "bold";
    c4DiagramAHTNJAMYHelper1(
      "label",
      c4DiagramAHTNJAMYInput150,
      c4DiagramAHTNJAMYBinding271,
      c4DiagramAHTNJAMYBinding272,
      chunk5PVQY5BWN(
        c4DiagramAHTNJAMYInput150.label.text,
        c4DiagramAHTNJAMYBinding272,
      ),
    );
    c4DiagramAHTNJAMYBinding54.drawBoundary(
      c4DiagramAHTNJAMYInput149,
      c4DiagramAHTNJAMYInput150,
      c4DiagramAHTNJAMYBinding59,
    );
  }, "drawBoundary");
  c4DiagramAHTNJAMYBinding66 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput24,
    c4DiagramAHTNJAMYInput25,
    c4DiagramAHTNJAMYInput26,
    c4DiagramAHTNJAMYInput27,
  ) {
    let c4DiagramAHTNJAMYBinding179 = 0;
    for (let c4DiagramAHTNJAMYBinding180 of c4DiagramAHTNJAMYInput27) {
      c4DiagramAHTNJAMYBinding179 = 0;
      let c4DiagramAHTNJAMYBinding181 =
          c4DiagramAHTNJAMYInput26[c4DiagramAHTNJAMYBinding180],
        c4DiagramAHTNJAMYBinding182 = c4DiagramAHTNJAMYBinding62(
          c4DiagramAHTNJAMYBinding59,
          c4DiagramAHTNJAMYBinding181.typeC4Shape.text,
        );
      switch (
        ((c4DiagramAHTNJAMYBinding182.fontSize -= 2),
        (c4DiagramAHTNJAMYBinding181.typeC4Shape.width = chunk5PVQY5BWN(
          "«" + c4DiagramAHTNJAMYBinding181.typeC4Shape.text + "»",
          c4DiagramAHTNJAMYBinding182,
        )),
        (c4DiagramAHTNJAMYBinding181.typeC4Shape.height =
          c4DiagramAHTNJAMYBinding182.fontSize + 2),
        (c4DiagramAHTNJAMYBinding181.typeC4Shape.Y =
          c4DiagramAHTNJAMYBinding59.c4ShapePadding),
        (c4DiagramAHTNJAMYBinding179 =
          c4DiagramAHTNJAMYBinding181.typeC4Shape.Y +
          c4DiagramAHTNJAMYBinding181.typeC4Shape.height -
          4),
        (c4DiagramAHTNJAMYBinding181.image = {
          width: 0,
          height: 0,
          Y: 0,
        }),
        c4DiagramAHTNJAMYBinding181.typeC4Shape.text)
      ) {
        case "person":
        case "external_person":
          c4DiagramAHTNJAMYBinding181.image.width = 48;
          c4DiagramAHTNJAMYBinding181.image.height = 48;
          c4DiagramAHTNJAMYBinding181.image.Y = c4DiagramAHTNJAMYBinding179;
          c4DiagramAHTNJAMYBinding179 =
            c4DiagramAHTNJAMYBinding181.image.Y +
            c4DiagramAHTNJAMYBinding181.image.height;
          break;
      }
      c4DiagramAHTNJAMYBinding181.sprite &&
        ((c4DiagramAHTNJAMYBinding181.image.width = 48),
        (c4DiagramAHTNJAMYBinding181.image.height = 48),
        (c4DiagramAHTNJAMYBinding181.image.Y = c4DiagramAHTNJAMYBinding179),
        (c4DiagramAHTNJAMYBinding179 =
          c4DiagramAHTNJAMYBinding181.image.Y +
          c4DiagramAHTNJAMYBinding181.image.height));
      let c4DiagramAHTNJAMYBinding183 =
          c4DiagramAHTNJAMYBinding181.wrap && c4DiagramAHTNJAMYBinding59.wrap,
        c4DiagramAHTNJAMYBinding184 =
          c4DiagramAHTNJAMYBinding59.width -
          c4DiagramAHTNJAMYBinding59.c4ShapePadding * 2,
        c4DiagramAHTNJAMYBinding185 = c4DiagramAHTNJAMYBinding62(
          c4DiagramAHTNJAMYBinding59,
          c4DiagramAHTNJAMYBinding181.typeC4Shape.text,
        );
      c4DiagramAHTNJAMYBinding185.fontSize += 2;
      c4DiagramAHTNJAMYBinding185.fontWeight = "bold";
      c4DiagramAHTNJAMYHelper1(
        "label",
        c4DiagramAHTNJAMYBinding181,
        c4DiagramAHTNJAMYBinding183,
        c4DiagramAHTNJAMYBinding185,
        c4DiagramAHTNJAMYBinding184,
      );
      c4DiagramAHTNJAMYBinding181.label.Y = c4DiagramAHTNJAMYBinding179 + 8;
      c4DiagramAHTNJAMYBinding179 =
        c4DiagramAHTNJAMYBinding181.label.Y +
        c4DiagramAHTNJAMYBinding181.label.height;
      c4DiagramAHTNJAMYBinding181.type &&
      c4DiagramAHTNJAMYBinding181.type.text !== ""
        ? ((c4DiagramAHTNJAMYBinding181.type.text =
            "[" + c4DiagramAHTNJAMYBinding181.type.text + "]"),
          c4DiagramAHTNJAMYHelper1(
            "type",
            c4DiagramAHTNJAMYBinding181,
            c4DiagramAHTNJAMYBinding183,
            c4DiagramAHTNJAMYBinding62(
              c4DiagramAHTNJAMYBinding59,
              c4DiagramAHTNJAMYBinding181.typeC4Shape.text,
            ),
            c4DiagramAHTNJAMYBinding184,
          ),
          (c4DiagramAHTNJAMYBinding181.type.Y =
            c4DiagramAHTNJAMYBinding179 + 5),
          (c4DiagramAHTNJAMYBinding179 =
            c4DiagramAHTNJAMYBinding181.type.Y +
            c4DiagramAHTNJAMYBinding181.type.height))
        : c4DiagramAHTNJAMYBinding181.techn &&
          c4DiagramAHTNJAMYBinding181.techn.text !== "" &&
          ((c4DiagramAHTNJAMYBinding181.techn.text =
            "[" + c4DiagramAHTNJAMYBinding181.techn.text + "]"),
          c4DiagramAHTNJAMYHelper1(
            "techn",
            c4DiagramAHTNJAMYBinding181,
            c4DiagramAHTNJAMYBinding183,
            c4DiagramAHTNJAMYBinding62(
              c4DiagramAHTNJAMYBinding59,
              c4DiagramAHTNJAMYBinding181.techn.text,
            ),
            c4DiagramAHTNJAMYBinding184,
          ),
          (c4DiagramAHTNJAMYBinding181.techn.Y =
            c4DiagramAHTNJAMYBinding179 + 5),
          (c4DiagramAHTNJAMYBinding179 =
            c4DiagramAHTNJAMYBinding181.techn.Y +
            c4DiagramAHTNJAMYBinding181.techn.height));
      let c4DiagramAHTNJAMYBinding186 = c4DiagramAHTNJAMYBinding179,
        c4DiagramAHTNJAMYBinding187 = c4DiagramAHTNJAMYBinding181.label.width;
      c4DiagramAHTNJAMYBinding181.descr &&
        c4DiagramAHTNJAMYBinding181.descr.text !== "" &&
        (c4DiagramAHTNJAMYHelper1(
          "descr",
          c4DiagramAHTNJAMYBinding181,
          c4DiagramAHTNJAMYBinding183,
          c4DiagramAHTNJAMYBinding62(
            c4DiagramAHTNJAMYBinding59,
            c4DiagramAHTNJAMYBinding181.typeC4Shape.text,
          ),
          c4DiagramAHTNJAMYBinding184,
        ),
        (c4DiagramAHTNJAMYBinding181.descr.Y =
          c4DiagramAHTNJAMYBinding179 + 20),
        (c4DiagramAHTNJAMYBinding179 =
          c4DiagramAHTNJAMYBinding181.descr.Y +
          c4DiagramAHTNJAMYBinding181.descr.height),
        (c4DiagramAHTNJAMYBinding187 = Math.max(
          c4DiagramAHTNJAMYBinding181.label.width,
          c4DiagramAHTNJAMYBinding181.descr.width,
        )),
        (c4DiagramAHTNJAMYBinding186 =
          c4DiagramAHTNJAMYBinding179 -
          c4DiagramAHTNJAMYBinding181.descr.textLines * 5));
      c4DiagramAHTNJAMYBinding187 += c4DiagramAHTNJAMYBinding59.c4ShapePadding;
      c4DiagramAHTNJAMYBinding181.width = Math.max(
        c4DiagramAHTNJAMYBinding181.width || c4DiagramAHTNJAMYBinding59.width,
        c4DiagramAHTNJAMYBinding187,
        c4DiagramAHTNJAMYBinding59.width,
      );
      c4DiagramAHTNJAMYBinding181.height = Math.max(
        c4DiagramAHTNJAMYBinding181.height || c4DiagramAHTNJAMYBinding59.height,
        c4DiagramAHTNJAMYBinding186,
        c4DiagramAHTNJAMYBinding59.height,
      );
      c4DiagramAHTNJAMYBinding181.margin =
        c4DiagramAHTNJAMYBinding181.margin ||
        c4DiagramAHTNJAMYBinding59.c4ShapeMargin;
      c4DiagramAHTNJAMYInput24.insert(c4DiagramAHTNJAMYBinding181);
      c4DiagramAHTNJAMYBinding54.drawC4Shape(
        c4DiagramAHTNJAMYInput25,
        c4DiagramAHTNJAMYBinding181,
        c4DiagramAHTNJAMYBinding59,
      );
    }
    c4DiagramAHTNJAMYInput24.bumpLastMargin(
      c4DiagramAHTNJAMYBinding59.c4ShapeMargin,
    );
  }, "drawC4ShapeArray");
  $ = class {
    static {
      defineFunctionName(this, "Point");
    }
    constructor(c4DiagramAHTNJAMYInput209, c4DiagramAHTNJAMYInput210) {
      this.x = c4DiagramAHTNJAMYInput209;
      this.y = c4DiagramAHTNJAMYInput210;
    }
  };
  c4DiagramAHTNJAMYBinding67 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput51,
    c4DiagramAHTNJAMYInput52,
  ) {
    let c4DiagramAHTNJAMYBinding215 = c4DiagramAHTNJAMYInput51.x,
      c4DiagramAHTNJAMYBinding216 = c4DiagramAHTNJAMYInput51.y,
      c4DiagramAHTNJAMYBinding217 = c4DiagramAHTNJAMYInput52.x,
      c4DiagramAHTNJAMYBinding218 = c4DiagramAHTNJAMYInput52.y,
      c4DiagramAHTNJAMYBinding219 =
        c4DiagramAHTNJAMYBinding215 + c4DiagramAHTNJAMYInput51.width / 2,
      c4DiagramAHTNJAMYBinding220 =
        c4DiagramAHTNJAMYBinding216 + c4DiagramAHTNJAMYInput51.height / 2,
      c4DiagramAHTNJAMYBinding221 = Math.abs(
        c4DiagramAHTNJAMYBinding215 - c4DiagramAHTNJAMYBinding217,
      ),
      c4DiagramAHTNJAMYBinding222 = Math.abs(
        c4DiagramAHTNJAMYBinding216 - c4DiagramAHTNJAMYBinding218,
      ),
      c4DiagramAHTNJAMYBinding223 =
        c4DiagramAHTNJAMYBinding222 / c4DiagramAHTNJAMYBinding221,
      c4DiagramAHTNJAMYBinding224 =
        c4DiagramAHTNJAMYInput51.height / c4DiagramAHTNJAMYInput51.width,
      c4DiagramAHTNJAMYBinding225 = null;
    return (
      c4DiagramAHTNJAMYBinding216 == c4DiagramAHTNJAMYBinding218 &&
      c4DiagramAHTNJAMYBinding215 < c4DiagramAHTNJAMYBinding217
        ? (c4DiagramAHTNJAMYBinding225 = new $(
            c4DiagramAHTNJAMYBinding215 + c4DiagramAHTNJAMYInput51.width,
            c4DiagramAHTNJAMYBinding220,
          ))
        : c4DiagramAHTNJAMYBinding216 == c4DiagramAHTNJAMYBinding218 &&
            c4DiagramAHTNJAMYBinding215 > c4DiagramAHTNJAMYBinding217
          ? (c4DiagramAHTNJAMYBinding225 = new $(
              c4DiagramAHTNJAMYBinding215,
              c4DiagramAHTNJAMYBinding220,
            ))
          : c4DiagramAHTNJAMYBinding215 == c4DiagramAHTNJAMYBinding217 &&
              c4DiagramAHTNJAMYBinding216 < c4DiagramAHTNJAMYBinding218
            ? (c4DiagramAHTNJAMYBinding225 = new $(
                c4DiagramAHTNJAMYBinding219,
                c4DiagramAHTNJAMYBinding216 + c4DiagramAHTNJAMYInput51.height,
              ))
            : c4DiagramAHTNJAMYBinding215 == c4DiagramAHTNJAMYBinding217 &&
              c4DiagramAHTNJAMYBinding216 > c4DiagramAHTNJAMYBinding218 &&
              (c4DiagramAHTNJAMYBinding225 = new $(
                c4DiagramAHTNJAMYBinding219,
                c4DiagramAHTNJAMYBinding216,
              )),
      c4DiagramAHTNJAMYBinding215 > c4DiagramAHTNJAMYBinding217 &&
      c4DiagramAHTNJAMYBinding216 < c4DiagramAHTNJAMYBinding218
        ? (c4DiagramAHTNJAMYBinding225 =
            c4DiagramAHTNJAMYBinding224 >= c4DiagramAHTNJAMYBinding223
              ? new $(
                  c4DiagramAHTNJAMYBinding215,
                  c4DiagramAHTNJAMYBinding220 +
                    (c4DiagramAHTNJAMYBinding223 *
                      c4DiagramAHTNJAMYInput51.width) /
                      2,
                )
              : new $(
                  c4DiagramAHTNJAMYBinding219 -
                    ((c4DiagramAHTNJAMYBinding221 /
                      c4DiagramAHTNJAMYBinding222) *
                      c4DiagramAHTNJAMYInput51.height) /
                      2,
                  c4DiagramAHTNJAMYBinding216 + c4DiagramAHTNJAMYInput51.height,
                ))
        : c4DiagramAHTNJAMYBinding215 < c4DiagramAHTNJAMYBinding217 &&
            c4DiagramAHTNJAMYBinding216 < c4DiagramAHTNJAMYBinding218
          ? (c4DiagramAHTNJAMYBinding225 =
              c4DiagramAHTNJAMYBinding224 >= c4DiagramAHTNJAMYBinding223
                ? new $(
                    c4DiagramAHTNJAMYBinding215 +
                      c4DiagramAHTNJAMYInput51.width,
                    c4DiagramAHTNJAMYBinding220 +
                      (c4DiagramAHTNJAMYBinding223 *
                        c4DiagramAHTNJAMYInput51.width) /
                        2,
                  )
                : new $(
                    c4DiagramAHTNJAMYBinding219 +
                      ((c4DiagramAHTNJAMYBinding221 /
                        c4DiagramAHTNJAMYBinding222) *
                        c4DiagramAHTNJAMYInput51.height) /
                        2,
                    c4DiagramAHTNJAMYBinding216 +
                      c4DiagramAHTNJAMYInput51.height,
                  ))
          : c4DiagramAHTNJAMYBinding215 < c4DiagramAHTNJAMYBinding217 &&
              c4DiagramAHTNJAMYBinding216 > c4DiagramAHTNJAMYBinding218
            ? (c4DiagramAHTNJAMYBinding225 =
                c4DiagramAHTNJAMYBinding224 >= c4DiagramAHTNJAMYBinding223
                  ? new $(
                      c4DiagramAHTNJAMYBinding215 +
                        c4DiagramAHTNJAMYInput51.width,
                      c4DiagramAHTNJAMYBinding220 -
                        (c4DiagramAHTNJAMYBinding223 *
                          c4DiagramAHTNJAMYInput51.width) /
                          2,
                    )
                  : new $(
                      c4DiagramAHTNJAMYBinding219 +
                        ((c4DiagramAHTNJAMYInput51.height / 2) *
                          c4DiagramAHTNJAMYBinding221) /
                          c4DiagramAHTNJAMYBinding222,
                      c4DiagramAHTNJAMYBinding216,
                    ))
            : c4DiagramAHTNJAMYBinding215 > c4DiagramAHTNJAMYBinding217 &&
              c4DiagramAHTNJAMYBinding216 > c4DiagramAHTNJAMYBinding218 &&
              (c4DiagramAHTNJAMYBinding225 =
                c4DiagramAHTNJAMYBinding224 >= c4DiagramAHTNJAMYBinding223
                  ? new $(
                      c4DiagramAHTNJAMYBinding215,
                      c4DiagramAHTNJAMYBinding220 -
                        (c4DiagramAHTNJAMYInput51.width / 2) *
                          c4DiagramAHTNJAMYBinding223,
                    )
                  : new $(
                      c4DiagramAHTNJAMYBinding219 -
                        ((c4DiagramAHTNJAMYInput51.height / 2) *
                          c4DiagramAHTNJAMYBinding221) /
                          c4DiagramAHTNJAMYBinding222,
                      c4DiagramAHTNJAMYBinding216,
                    )),
      c4DiagramAHTNJAMYBinding225
    );
  }, "getIntersectPoint");
  c4DiagramAHTNJAMYBinding68 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput161,
    c4DiagramAHTNJAMYInput162,
  ) {
    let c4DiagramAHTNJAMYBinding279 = {
      x: 0,
      y: 0,
    };
    c4DiagramAHTNJAMYBinding279.x =
      c4DiagramAHTNJAMYInput162.x + c4DiagramAHTNJAMYInput162.width / 2;
    c4DiagramAHTNJAMYBinding279.y =
      c4DiagramAHTNJAMYInput162.y + c4DiagramAHTNJAMYInput162.height / 2;
    let c4DiagramAHTNJAMYBinding280 = c4DiagramAHTNJAMYBinding67(
      c4DiagramAHTNJAMYInput161,
      c4DiagramAHTNJAMYBinding279,
    );
    return (
      (c4DiagramAHTNJAMYBinding279.x =
        c4DiagramAHTNJAMYInput161.x + c4DiagramAHTNJAMYInput161.width / 2),
      (c4DiagramAHTNJAMYBinding279.y =
        c4DiagramAHTNJAMYInput161.y + c4DiagramAHTNJAMYInput161.height / 2),
      {
        startPoint: c4DiagramAHTNJAMYBinding280,
        endPoint: c4DiagramAHTNJAMYBinding67(
          c4DiagramAHTNJAMYInput162,
          c4DiagramAHTNJAMYBinding279,
        ),
      }
    );
  }, "getIntersectPoints");
  c4DiagramAHTNJAMYBinding69 = defineFunctionName(function (
    c4DiagramAHTNJAMYInput122,
    c4DiagramAHTNJAMYInput123,
    c4DiagramAHTNJAMYInput124,
    c4DiagramAHTNJAMYInput125,
    c4DiagramAHTNJAMYInput126,
  ) {
    let c4DiagramAHTNJAMYBinding258 = 0;
    for (let c4DiagramAHTNJAMYBinding261 of c4DiagramAHTNJAMYInput123) {
      c4DiagramAHTNJAMYBinding258 += 1;
      let c4DiagramAHTNJAMYBinding263 =
          c4DiagramAHTNJAMYBinding261.wrap && c4DiagramAHTNJAMYBinding59.wrap,
        c4DiagramAHTNJAMYBinding264 = c4DiagramAHTNJAMYBinding64(
          c4DiagramAHTNJAMYBinding59,
        );
      c4DiagramAHTNJAMYInput125.db.getC4Type() === "C4Dynamic" &&
        (c4DiagramAHTNJAMYBinding261.label.text =
          c4DiagramAHTNJAMYBinding258 +
          ": " +
          c4DiagramAHTNJAMYBinding261.label.text);
      let c4DiagramAHTNJAMYBinding265 = chunk5PVQY5BWN(
        c4DiagramAHTNJAMYBinding261.label.text,
        c4DiagramAHTNJAMYBinding264,
      );
      c4DiagramAHTNJAMYHelper1(
        "label",
        c4DiagramAHTNJAMYBinding261,
        c4DiagramAHTNJAMYBinding263,
        c4DiagramAHTNJAMYBinding264,
        c4DiagramAHTNJAMYBinding265,
      );
      c4DiagramAHTNJAMYBinding261.techn &&
        c4DiagramAHTNJAMYBinding261.techn.text !== "" &&
        ((c4DiagramAHTNJAMYBinding265 = chunk5PVQY5BWN(
          c4DiagramAHTNJAMYBinding261.techn.text,
          c4DiagramAHTNJAMYBinding264,
        )),
        c4DiagramAHTNJAMYHelper1(
          "techn",
          c4DiagramAHTNJAMYBinding261,
          c4DiagramAHTNJAMYBinding263,
          c4DiagramAHTNJAMYBinding264,
          c4DiagramAHTNJAMYBinding265,
        ));
      c4DiagramAHTNJAMYBinding261.descr &&
        c4DiagramAHTNJAMYBinding261.descr.text !== "" &&
        ((c4DiagramAHTNJAMYBinding265 = chunk5PVQY5BWN(
          c4DiagramAHTNJAMYBinding261.descr.text,
          c4DiagramAHTNJAMYBinding264,
        )),
        c4DiagramAHTNJAMYHelper1(
          "descr",
          c4DiagramAHTNJAMYBinding261,
          c4DiagramAHTNJAMYBinding263,
          c4DiagramAHTNJAMYBinding264,
          c4DiagramAHTNJAMYBinding265,
        ));
      let c4DiagramAHTNJAMYBinding266 = c4DiagramAHTNJAMYBinding68(
        c4DiagramAHTNJAMYInput124(c4DiagramAHTNJAMYBinding261.from),
        c4DiagramAHTNJAMYInput124(c4DiagramAHTNJAMYBinding261.to),
      );
      c4DiagramAHTNJAMYBinding261.startPoint =
        c4DiagramAHTNJAMYBinding266.startPoint;
      c4DiagramAHTNJAMYBinding261.endPoint =
        c4DiagramAHTNJAMYBinding266.endPoint;
    }
    c4DiagramAHTNJAMYBinding54.drawRels(
      c4DiagramAHTNJAMYInput122,
      c4DiagramAHTNJAMYInput123,
      c4DiagramAHTNJAMYBinding59,
      c4DiagramAHTNJAMYInput126,
    );
  }, "drawRels");
  defineFunctionName(c4DiagramAHTNJAMYHelper2, "drawInsideBoundary");
  c4DiagramAHTNJAMYBinding70 = {
    drawPersonOrSystemArray: c4DiagramAHTNJAMYBinding66,
    drawBoundary: c4DiagramAHTNJAMYBinding65,
    setConf: c4DiagramAHTNJAMYBinding61,
    draw: defineFunctionName(function (
      c4DiagramAHTNJAMYInput33,
      c4DiagramAHTNJAMYInput34,
      c4DiagramAHTNJAMYInput35,
      c4DiagramAHTNJAMYInput36,
    ) {
      c4DiagramAHTNJAMYBinding59 = b().c4;
      let c4DiagramAHTNJAMYBinding189 = b().securityLevel,
        c4DiagramAHTNJAMYBinding190;
      c4DiagramAHTNJAMYBinding189 === "sandbox" &&
        (c4DiagramAHTNJAMYBinding190 = select("#i" + c4DiagramAHTNJAMYInput34));
      let c4DiagramAHTNJAMYBinding191 = select(
          c4DiagramAHTNJAMYBinding189 === "sandbox"
            ? c4DiagramAHTNJAMYBinding190.nodes()[0].contentDocument.body
            : "body",
        ),
        c4DiagramAHTNJAMYBinding192 = c4DiagramAHTNJAMYInput36.db;
      c4DiagramAHTNJAMYInput36.db.setWrap(c4DiagramAHTNJAMYBinding59.wrap);
      c4DiagramAHTNJAMYBinding57 =
        c4DiagramAHTNJAMYBinding192.getC4ShapeInRow();
      c4DiagramAHTNJAMYBinding58 =
        c4DiagramAHTNJAMYBinding192.getC4BoundaryInRow();
      logger.debug(`C:${JSON.stringify(c4DiagramAHTNJAMYBinding59, null, 2)}`);
      let c4DiagramAHTNJAMYBinding193 =
        c4DiagramAHTNJAMYBinding189 === "sandbox"
          ? c4DiagramAHTNJAMYBinding191.select(
              `[id="${c4DiagramAHTNJAMYInput34}"]`,
            )
          : select(`[id="${c4DiagramAHTNJAMYInput34}"]`);
      c4DiagramAHTNJAMYBinding54.insertComputerIcon(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding54.insertDatabaseIcon(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding54.insertClockIcon(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      let c4DiagramAHTNJAMYBinding194 = new c4DiagramAHTNJAMYBinding60(
        c4DiagramAHTNJAMYInput36,
      );
      c4DiagramAHTNJAMYBinding194.setData(
        c4DiagramAHTNJAMYBinding59.diagramMarginX,
        c4DiagramAHTNJAMYBinding59.diagramMarginX,
        c4DiagramAHTNJAMYBinding59.diagramMarginY,
        c4DiagramAHTNJAMYBinding59.diagramMarginY,
      );
      c4DiagramAHTNJAMYBinding194.data.widthLimit = screen.availWidth;
      c4DiagramAHTNJAMYBinding55 = c4DiagramAHTNJAMYBinding59.diagramMarginX;
      c4DiagramAHTNJAMYBinding56 = c4DiagramAHTNJAMYBinding59.diagramMarginY;
      let c4DiagramAHTNJAMYBinding195 = c4DiagramAHTNJAMYInput36.db.getTitle();
      c4DiagramAHTNJAMYHelper2(
        c4DiagramAHTNJAMYBinding193,
        "",
        c4DiagramAHTNJAMYBinding194,
        c4DiagramAHTNJAMYInput36.db.getBoundaries(""),
        c4DiagramAHTNJAMYInput36,
      );
      c4DiagramAHTNJAMYBinding54.insertArrowHead(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding54.insertArrowEnd(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding54.insertArrowCrossHead(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding54.insertArrowFilledHead(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding69(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYInput36.db.getRels(),
        c4DiagramAHTNJAMYInput36.db.getC4Shape,
        c4DiagramAHTNJAMYInput36,
        c4DiagramAHTNJAMYInput34,
      );
      c4DiagramAHTNJAMYBinding194.data.stopx = c4DiagramAHTNJAMYBinding55;
      c4DiagramAHTNJAMYBinding194.data.stopy = c4DiagramAHTNJAMYBinding56;
      let c4DiagramAHTNJAMYBinding196 = c4DiagramAHTNJAMYBinding194.data,
        c4DiagramAHTNJAMYBinding197 =
          c4DiagramAHTNJAMYBinding196.stopy -
          c4DiagramAHTNJAMYBinding196.starty +
          2 * c4DiagramAHTNJAMYBinding59.diagramMarginY,
        c4DiagramAHTNJAMYBinding198 =
          c4DiagramAHTNJAMYBinding196.stopx -
          c4DiagramAHTNJAMYBinding196.startx +
          2 * c4DiagramAHTNJAMYBinding59.diagramMarginX;
      c4DiagramAHTNJAMYBinding195 &&
        c4DiagramAHTNJAMYBinding193
          .append("text")
          .text(c4DiagramAHTNJAMYBinding195)
          .attr(
            "x",
            (c4DiagramAHTNJAMYBinding196.stopx -
              c4DiagramAHTNJAMYBinding196.startx) /
              2 -
              4 * c4DiagramAHTNJAMYBinding59.diagramMarginX,
          )
          .attr(
            "y",
            c4DiagramAHTNJAMYBinding196.starty +
              c4DiagramAHTNJAMYBinding59.diagramMarginY,
          );
      c(
        c4DiagramAHTNJAMYBinding193,
        c4DiagramAHTNJAMYBinding197,
        c4DiagramAHTNJAMYBinding198,
        c4DiagramAHTNJAMYBinding59.useMaxWidth,
      );
      let c4DiagramAHTNJAMYBinding199 = c4DiagramAHTNJAMYBinding195 ? 60 : 0;
      c4DiagramAHTNJAMYBinding193.attr(
        "viewBox",
        c4DiagramAHTNJAMYBinding196.startx -
          c4DiagramAHTNJAMYBinding59.diagramMarginX +
          " -" +
          (c4DiagramAHTNJAMYBinding59.diagramMarginY +
            c4DiagramAHTNJAMYBinding199) +
          " " +
          c4DiagramAHTNJAMYBinding198 +
          " " +
          (c4DiagramAHTNJAMYBinding197 + c4DiagramAHTNJAMYBinding199),
      );
      logger.debug("models:", c4DiagramAHTNJAMYBinding196);
    }, "draw"),
  };
  C4DiagramAHTNJAMY = {
    parser: c4DiagramAHTNJAMYBinding3,
    db: _e,
    renderer: c4DiagramAHTNJAMYBinding70,
    styles: defineFunctionName(
      (c4DiagramAHTNJAMYInput206) => `.person {
    stroke: ${c4DiagramAHTNJAMYInput206.personBorder};
    fill: ${c4DiagramAHTNJAMYInput206.personBkg};
  }
`,
      "getStyles",
    ),
    init: defineFunctionName(({ c4, wrap }) => {
      c4DiagramAHTNJAMYBinding70.setConf(c4);
      _e.setWrap(wrap);
    }, "init"),
  };
})();
export { C4DiagramAHTNJAMY as diagram };
