// Restored from ref/webview/assets/chunk-DI55MBZ5-8l9x0Yji.js
// Mermaid state diagram core (primary: parser + db + renderer + styles). Unblocks stateDiagram-v2 wrappers.
// Stage 3 candidate: IMPORT_MAP-ready local deps; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  k,
  s,
  _,
  V,
  W,
} from "../../diagrams/mermaid-config";
import {
  chunkS3R3BYOJG,
  chunkS3R3BYOJO,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { initGetDiagramElementChunk as n, getDiagramElement as t } from "../../diagrams/get-diagram-element";
import { setupViewPortForSVG as chunkQN33PNHLN, initSetupViewPortForSvgChunk as chunkQN33PNHLT } from "../../diagrams/setup-viewport-for-svg";
import {
  chunkN4CR4FBYI,
  chunkN4CR4FBYN,
} from "../../diagrams/mermaid-layout-loaders";
function chunkDI55MBZ5Helper1(
  chunkDI55MBZ5Input85 = "",
  chunkDI55MBZ5Input86 = 0,
  chunkDI55MBZ5Input87 = "",
  chunkDI55MBZ5Input88 = chunkDI55MBZ5Binding36,
) {
  return `${_e}-${chunkDI55MBZ5Input85}${chunkDI55MBZ5Input87 !== null && chunkDI55MBZ5Input87.length > 0 ? `${chunkDI55MBZ5Input88}${chunkDI55MBZ5Input87}` : ""}-${chunkDI55MBZ5Input86}`;
}
function chunkDI55MBZ5Helper2(
  chunkDI55MBZ5Input60,
  chunkDI55MBZ5Input61,
  chunkDI55MBZ5Input62,
) {
  if (
    !chunkDI55MBZ5Input61.id ||
    chunkDI55MBZ5Input61.id === "</join></fork>" ||
    chunkDI55MBZ5Input61.id === "</choice>"
  )
    return;
  chunkDI55MBZ5Input61.cssClasses &&
    (Array.isArray(chunkDI55MBZ5Input61.cssCompiledStyles) ||
      (chunkDI55MBZ5Input61.cssCompiledStyles = []),
    chunkDI55MBZ5Input61.cssClasses.split(" ").forEach((item) => {
      let chunkDI55MBZ5Binding191 = chunkDI55MBZ5Input62.get(item);
      chunkDI55MBZ5Binding191 &&
        (chunkDI55MBZ5Input61.cssCompiledStyles = [
          ...(chunkDI55MBZ5Input61.cssCompiledStyles ?? []),
          ...chunkDI55MBZ5Binding191.styles,
        ]);
    }));
  let chunkDI55MBZ5Binding167 = chunkDI55MBZ5Input60.find(
    (item) => item.id === chunkDI55MBZ5Input61.id,
  );
  chunkDI55MBZ5Binding167
    ? Object.assign(chunkDI55MBZ5Binding167, chunkDI55MBZ5Input61)
    : chunkDI55MBZ5Input60.push(chunkDI55MBZ5Input61);
}
function chunkDI55MBZ5Helper3(chunkDI55MBZ5Input111) {
  return chunkDI55MBZ5Input111?.classes?.join(" ") ?? "";
}
function chunkDI55MBZ5Helper4(chunkDI55MBZ5Input112) {
  return chunkDI55MBZ5Input112?.styles ?? [];
}
var chunkDI55MBZ5Binding1,
  chunkDI55MBZ5R,
  chunkDI55MBZ5Binding2,
  chunkDI55MBZ5Binding3,
  chunkDI55MBZ5Binding4,
  chunkDI55MBZ5Binding5,
  chunkDI55MBZ5Binding6,
  chunkDI55MBZ5Binding7,
  chunkDI55MBZ5Binding8,
  chunkDI55MBZ5Binding9,
  chunkDI55MBZ5Binding10,
  chunkDI55MBZ5Binding11,
  chunkDI55MBZ5Binding12,
  chunkDI55MBZ5Binding13,
  chunkDI55MBZ5Binding14,
  chunkDI55MBZ5Binding15,
  chunkDI55MBZ5Binding16,
  chunkDI55MBZ5Binding17,
  chunkDI55MBZ5Binding18,
  chunkDI55MBZ5Binding19,
  chunkDI55MBZ5Binding20,
  chunkDI55MBZ5Binding21,
  chunkDI55MBZ5Binding22,
  chunkDI55MBZ5Binding23,
  chunkDI55MBZ5Binding24,
  chunkDI55MBZ5Binding25,
  chunkDI55MBZ5Binding26,
  chunkDI55MBZ5Binding27,
  chunkDI55MBZ5Binding28,
  chunkDI55MBZ5Binding29,
  chunkDI55MBZ5Binding30,
  chunkDI55MBZ5Binding31,
  chunkDI55MBZ5Binding32,
  chunkDI55MBZ5Binding33,
  chunkDI55MBZ5Binding34,
  chunkDI55MBZ5Binding35,
  _e,
  chunkDI55MBZ5Binding36,
  chunkDI55MBZ5Binding37,
  chunkDI55MBZ5Binding38,
  chunkDI55MBZ5Binding39,
  chunkDI55MBZ5I,
  chunkDI55MBZ5Binding40,
  chunkDI55MBZ5Binding41,
  chunkDI55MBZ5Binding42,
  chunkDI55MBZ5Binding43,
  chunkDI55MBZ5Binding44,
  chunkDI55MBZ5Binding45,
  chunkDI55MBZ5Binding46,
  chunkDI55MBZ5Binding47,
  chunkDI55MBZ5Binding48,
  $,
  chunkDI55MBZ5T,
  chunkDI55MBZ5A;
export const chunkDI55MBZ5N = esmInit(() => {
  n();
  chunkQN33PNHLT();
  chunkN4CR4FBYN();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  chunkDI55MBZ5Binding1 = (function () {
    var chunkDI55MBZ5Binding49 = defineFunctionName(function (
        chunkDI55MBZ5Input89,
        chunkDI55MBZ5Input90,
        chunkDI55MBZ5Input91,
        chunkDI55MBZ5Input92,
      ) {
        for (
          chunkDI55MBZ5Input91 ||= {},
            chunkDI55MBZ5Input92 = chunkDI55MBZ5Input89.length;
          chunkDI55MBZ5Input92--;
          chunkDI55MBZ5Input91[chunkDI55MBZ5Input89[chunkDI55MBZ5Input92]] =
            chunkDI55MBZ5Input90
        );
        return chunkDI55MBZ5Input91;
      }, "o"),
      chunkDI55MBZ5Binding50 = [1, 2],
      chunkDI55MBZ5Binding51 = [1, 3],
      chunkDI55MBZ5Binding52 = [1, 4],
      chunkDI55MBZ5Binding53 = [2, 4],
      chunkDI55MBZ5Binding54 = [1, 9],
      chunkDI55MBZ5Binding55 = [1, 11],
      chunkDI55MBZ5Binding56 = [1, 16],
      chunkDI55MBZ5Binding57 = [1, 17],
      chunkDI55MBZ5Binding58 = [1, 18],
      chunkDI55MBZ5Binding59 = [1, 19],
      chunkDI55MBZ5Binding60 = [1, 33],
      chunkDI55MBZ5Binding61 = [1, 20],
      chunkDI55MBZ5Binding62 = [1, 21],
      chunkDI55MBZ5Binding63 = [1, 22],
      chunkDI55MBZ5Binding64 = [1, 23],
      chunkDI55MBZ5Binding65 = [1, 24],
      chunkDI55MBZ5Binding66 = [1, 26],
      chunkDI55MBZ5Binding67 = [1, 27],
      chunkDI55MBZ5Binding68 = [1, 28],
      chunkDI55MBZ5Binding69 = [1, 29],
      chunkDI55MBZ5Binding70 = [1, 30],
      chunkDI55MBZ5Binding71 = [1, 31],
      chunkDI55MBZ5Binding72 = [1, 32],
      chunkDI55MBZ5Binding73 = [1, 35],
      chunkDI55MBZ5Binding74 = [1, 36],
      chunkDI55MBZ5Binding75 = [1, 37],
      _chunkDI55MBZ5R = [1, 38],
      chunkDI55MBZ5Binding76 = [1, 34],
      chunkDI55MBZ5Binding77 = [
        1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41,
        45, 48, 51, 52, 53, 54, 57,
      ],
      chunkDI55MBZ5Binding78 = [
        1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37,
        38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57,
      ],
      chunkDI55MBZ5Binding79 = [
        4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41,
        45, 48, 51, 52, 53, 54, 57,
      ],
      chunkDI55MBZ5Binding80 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          SPACE: 4,
          NL: 5,
          SD: 6,
          document: 7,
          line: 8,
          statement: 9,
          classDefStatement: 10,
          styleStatement: 11,
          cssClassStatement: 12,
          idStatement: 13,
          DESCR: 14,
          "-->": 15,
          HIDE_EMPTY: 16,
          scale: 17,
          WIDTH: 18,
          COMPOSIT_STATE: 19,
          STRUCT_START: 20,
          STRUCT_STOP: 21,
          STATE_DESCR: 22,
          AS: 23,
          ID: 24,
          FORK: 25,
          JOIN: 26,
          CHOICE: 27,
          CONCURRENT: 28,
          note: 29,
          notePosition: 30,
          NOTE_TEXT: 31,
          direction: 32,
          acc_title: 33,
          acc_title_value: 34,
          acc_descr: 35,
          acc_descr_value: 36,
          acc_descr_multiline_value: 37,
          CLICK: 38,
          STRING: 39,
          HREF: 40,
          classDef: 41,
          CLASSDEF_ID: 42,
          CLASSDEF_STYLEOPTS: 43,
          DEFAULT: 44,
          style: 45,
          STYLE_IDS: 46,
          STYLEDEF_STYLEOPTS: 47,
          class: 48,
          CLASSENTITY_IDS: 49,
          STYLECLASS: 50,
          direction_tb: 51,
          direction_bt: 52,
          direction_rl: 53,
          direction_lr: 54,
          eol: 55,
          ";": 56,
          EDGE_STATE: 57,
          STYLE_SEPARATOR: 58,
          left_of: 59,
          right_of: 60,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "SPACE",
          5: "NL",
          6: "SD",
          14: "DESCR",
          15: "-->",
          16: "HIDE_EMPTY",
          17: "scale",
          18: "WIDTH",
          19: "COMPOSIT_STATE",
          20: "STRUCT_START",
          21: "STRUCT_STOP",
          22: "STATE_DESCR",
          23: "AS",
          24: "ID",
          25: "FORK",
          26: "JOIN",
          27: "CHOICE",
          28: "CONCURRENT",
          29: "note",
          31: "NOTE_TEXT",
          33: "acc_title",
          34: "acc_title_value",
          35: "acc_descr",
          36: "acc_descr_value",
          37: "acc_descr_multiline_value",
          38: "CLICK",
          39: "STRING",
          40: "HREF",
          41: "classDef",
          42: "CLASSDEF_ID",
          43: "CLASSDEF_STYLEOPTS",
          44: "DEFAULT",
          45: "style",
          46: "STYLE_IDS",
          47: "STYLEDEF_STYLEOPTS",
          48: "class",
          49: "CLASSENTITY_IDS",
          50: "STYLECLASS",
          51: "direction_tb",
          52: "direction_bt",
          53: "direction_rl",
          54: "direction_lr",
          56: ";",
          57: "EDGE_STATE",
          58: "STYLE_SEPARATOR",
          59: "left_of",
          60: "right_of",
        },
        productions_: [
          0,
          [3, 2],
          [3, 2],
          [3, 2],
          [7, 0],
          [7, 2],
          [8, 2],
          [8, 1],
          [8, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 2],
          [9, 3],
          [9, 4],
          [9, 1],
          [9, 2],
          [9, 1],
          [9, 4],
          [9, 3],
          [9, 6],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 4],
          [9, 4],
          [9, 1],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 5],
          [9, 5],
          [10, 3],
          [10, 3],
          [11, 3],
          [12, 3],
          [32, 1],
          [32, 1],
          [32, 1],
          [32, 1],
          [55, 1],
          [55, 1],
          [13, 1],
          [13, 1],
          [13, 3],
          [13, 3],
          [30, 1],
          [30, 1],
        ],
        performAction: defineFunctionName(function (
          chunkDI55MBZ5Input5,
          chunkDI55MBZ5Input6,
          chunkDI55MBZ5Input7,
          chunkDI55MBZ5Input8,
          chunkDI55MBZ5Input9,
          chunkDI55MBZ5Input10,
          chunkDI55MBZ5Input11,
        ) {
          var chunkDI55MBZ5Binding81 = chunkDI55MBZ5Input10.length - 1;
          switch (chunkDI55MBZ5Input9) {
            case 3:
              return (
                chunkDI55MBZ5Input8.setRootDoc(
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                ),
                chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81]
              );
            case 4:
              this.$ = [];
              break;
            case 5:
              chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81] != "nl" &&
                (chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1].push(
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                ),
                (this.$ = chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1]));
              break;
            case 6:
            case 7:
              this.$ = chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81];
              break;
            case 8:
              this.$ = "nl";
              break;
            case 12:
              this.$ = chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81];
              break;
            case 13:
              let chunkDI55MBZ5Binding85 =
                chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1];
              chunkDI55MBZ5Binding85.description =
                chunkDI55MBZ5Input8.trimColon(
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                );
              this.$ = chunkDI55MBZ5Binding85;
              break;
            case 14:
              this.$ = {
                stmt: "relation",
                state1: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2],
                state2: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
              };
              break;
            case 15:
              let chunkDI55MBZ5Binding86 = chunkDI55MBZ5Input8.trimColon(
                chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
              );
              this.$ = {
                stmt: "relation",
                state1: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 3],
                state2: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1],
                description: chunkDI55MBZ5Binding86,
              };
              break;
            case 19:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 3],
                type: "default",
                description: "",
                doc: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1],
              };
              break;
            case 20:
              var chunkDI55MBZ5Binding82 =
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                chunkDI55MBZ5Binding83 =
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2].trim();
              if (chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].match(":")) {
                var chunkDI55MBZ5Binding84 =
                  chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].split(":");
                chunkDI55MBZ5Binding82 = chunkDI55MBZ5Binding84[0];
                chunkDI55MBZ5Binding83 = [
                  chunkDI55MBZ5Binding83,
                  chunkDI55MBZ5Binding84[1],
                ];
              }
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Binding82,
                type: "default",
                description: chunkDI55MBZ5Binding83,
              };
              break;
            case 21:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 3],
                type: "default",
                description: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 5],
                doc: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1],
              };
              break;
            case 22:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                type: "fork",
              };
              break;
            case 23:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                type: "join",
              };
              break;
            case 24:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81],
                type: "choice",
              };
              break;
            case 25:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input8.getDividerId(),
                type: "divider",
              };
              break;
            case 26:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1].trim(),
                note: {
                  position:
                    chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2].trim(),
                  text: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim(),
                },
              };
              break;
            case 29:
              this.$ = chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim();
              chunkDI55MBZ5Input8.setAccTitle(this.$);
              break;
            case 30:
            case 31:
              this.$ = chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim();
              chunkDI55MBZ5Input8.setAccDescription(this.$);
              break;
            case 32:
              this.$ = {
                stmt: "click",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 3],
                url: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2],
                tooltip: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1],
              };
              break;
            case 33:
              this.$ = {
                stmt: "click",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 3],
                url: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1],
                tooltip: "",
              };
              break;
            case 34:
            case 35:
              this.$ = {
                stmt: "classDef",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1].trim(),
                classes: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim(),
              };
              break;
            case 36:
              this.$ = {
                stmt: "style",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1].trim(),
                styleClass: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim(),
              };
              break;
            case 37:
              this.$ = {
                stmt: "applyClass",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 1].trim(),
                styleClass: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim(),
              };
              break;
            case 38:
              chunkDI55MBZ5Input8.setDirection("TB");
              this.$ = {
                stmt: "dir",
                value: "TB",
              };
              break;
            case 39:
              chunkDI55MBZ5Input8.setDirection("BT");
              this.$ = {
                stmt: "dir",
                value: "BT",
              };
              break;
            case 40:
              chunkDI55MBZ5Input8.setDirection("RL");
              this.$ = {
                stmt: "dir",
                value: "RL",
              };
              break;
            case 41:
              chunkDI55MBZ5Input8.setDirection("LR");
              this.$ = {
                stmt: "dir",
                value: "LR",
              };
              break;
            case 44:
            case 45:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim(),
                type: "default",
                description: "",
              };
              break;
            case 46:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2].trim(),
                classes: [chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim()],
                type: "default",
                description: "",
              };
              break;
            case 47:
              this.$ = {
                stmt: "state",
                id: chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81 - 2].trim(),
                classes: [chunkDI55MBZ5Input10[chunkDI55MBZ5Binding81].trim()],
                type: "default",
                description: "",
              };
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: chunkDI55MBZ5Binding50,
            5: chunkDI55MBZ5Binding51,
            6: chunkDI55MBZ5Binding52,
          },
          {
            1: [3],
          },
          {
            3: 5,
            4: chunkDI55MBZ5Binding50,
            5: chunkDI55MBZ5Binding51,
            6: chunkDI55MBZ5Binding52,
          },
          {
            3: 6,
            4: chunkDI55MBZ5Binding50,
            5: chunkDI55MBZ5Binding51,
            6: chunkDI55MBZ5Binding52,
          },
          chunkDI55MBZ5Binding49(
            [
              1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38,
              41, 45, 48, 51, 52, 53, 54, 57,
            ],
            chunkDI55MBZ5Binding53,
            {
              7: 7,
            },
          ),
          {
            1: [2, 1],
          },
          {
            1: [2, 2],
          },
          {
            1: [2, 3],
            4: chunkDI55MBZ5Binding54,
            5: chunkDI55MBZ5Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkDI55MBZ5Binding56,
            17: chunkDI55MBZ5Binding57,
            19: chunkDI55MBZ5Binding58,
            22: chunkDI55MBZ5Binding59,
            24: chunkDI55MBZ5Binding60,
            25: chunkDI55MBZ5Binding61,
            26: chunkDI55MBZ5Binding62,
            27: chunkDI55MBZ5Binding63,
            28: chunkDI55MBZ5Binding64,
            29: chunkDI55MBZ5Binding65,
            32: 25,
            33: chunkDI55MBZ5Binding66,
            35: chunkDI55MBZ5Binding67,
            37: chunkDI55MBZ5Binding68,
            38: chunkDI55MBZ5Binding69,
            41: chunkDI55MBZ5Binding70,
            45: chunkDI55MBZ5Binding71,
            48: chunkDI55MBZ5Binding72,
            51: chunkDI55MBZ5Binding73,
            52: chunkDI55MBZ5Binding74,
            53: chunkDI55MBZ5Binding75,
            54: _chunkDI55MBZ5R,
            57: chunkDI55MBZ5Binding76,
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 5]),
          {
            9: 39,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkDI55MBZ5Binding56,
            17: chunkDI55MBZ5Binding57,
            19: chunkDI55MBZ5Binding58,
            22: chunkDI55MBZ5Binding59,
            24: chunkDI55MBZ5Binding60,
            25: chunkDI55MBZ5Binding61,
            26: chunkDI55MBZ5Binding62,
            27: chunkDI55MBZ5Binding63,
            28: chunkDI55MBZ5Binding64,
            29: chunkDI55MBZ5Binding65,
            32: 25,
            33: chunkDI55MBZ5Binding66,
            35: chunkDI55MBZ5Binding67,
            37: chunkDI55MBZ5Binding68,
            38: chunkDI55MBZ5Binding69,
            41: chunkDI55MBZ5Binding70,
            45: chunkDI55MBZ5Binding71,
            48: chunkDI55MBZ5Binding72,
            51: chunkDI55MBZ5Binding73,
            52: chunkDI55MBZ5Binding74,
            53: chunkDI55MBZ5Binding75,
            54: _chunkDI55MBZ5R,
            57: chunkDI55MBZ5Binding76,
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 7]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 8]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 9]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 10]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 11]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 12], {
            14: [1, 40],
            15: [1, 41],
          }),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 16]),
          {
            18: [1, 42],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 18], {
            20: [1, 43],
          }),
          {
            23: [1, 44],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 22]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 23]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 24]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 25]),
          {
            30: 45,
            31: [1, 46],
            59: [1, 47],
            60: [1, 48],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 28]),
          {
            34: [1, 49],
          },
          {
            36: [1, 50],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 31]),
          {
            13: 51,
            24: chunkDI55MBZ5Binding60,
            57: chunkDI55MBZ5Binding76,
          },
          {
            42: [1, 52],
            44: [1, 53],
          },
          {
            46: [1, 54],
          },
          {
            49: [1, 55],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding78, [2, 44], {
            58: [1, 56],
          }),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding78, [2, 45], {
            58: [1, 57],
          }),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 38]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 39]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 40]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 41]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 6]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 13]),
          {
            13: 58,
            24: chunkDI55MBZ5Binding60,
            57: chunkDI55MBZ5Binding76,
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 17]),
          chunkDI55MBZ5Binding49(
            chunkDI55MBZ5Binding79,
            chunkDI55MBZ5Binding53,
            {
              7: 59,
            },
          ),
          {
            24: [1, 60],
          },
          {
            24: [1, 61],
          },
          {
            23: [1, 62],
          },
          {
            24: [2, 48],
          },
          {
            24: [2, 49],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 29]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 30]),
          {
            39: [1, 63],
            40: [1, 64],
          },
          {
            43: [1, 65],
          },
          {
            43: [1, 66],
          },
          {
            47: [1, 67],
          },
          {
            50: [1, 68],
          },
          {
            24: [1, 69],
          },
          {
            24: [1, 70],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 14], {
            14: [1, 71],
          }),
          {
            4: chunkDI55MBZ5Binding54,
            5: chunkDI55MBZ5Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkDI55MBZ5Binding56,
            17: chunkDI55MBZ5Binding57,
            19: chunkDI55MBZ5Binding58,
            21: [1, 72],
            22: chunkDI55MBZ5Binding59,
            24: chunkDI55MBZ5Binding60,
            25: chunkDI55MBZ5Binding61,
            26: chunkDI55MBZ5Binding62,
            27: chunkDI55MBZ5Binding63,
            28: chunkDI55MBZ5Binding64,
            29: chunkDI55MBZ5Binding65,
            32: 25,
            33: chunkDI55MBZ5Binding66,
            35: chunkDI55MBZ5Binding67,
            37: chunkDI55MBZ5Binding68,
            38: chunkDI55MBZ5Binding69,
            41: chunkDI55MBZ5Binding70,
            45: chunkDI55MBZ5Binding71,
            48: chunkDI55MBZ5Binding72,
            51: chunkDI55MBZ5Binding73,
            52: chunkDI55MBZ5Binding74,
            53: chunkDI55MBZ5Binding75,
            54: _chunkDI55MBZ5R,
            57: chunkDI55MBZ5Binding76,
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 20], {
            20: [1, 73],
          }),
          {
            31: [1, 74],
          },
          {
            24: [1, 75],
          },
          {
            39: [1, 76],
          },
          {
            39: [1, 77],
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 34]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 35]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 36]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 37]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding78, [2, 46]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding78, [2, 47]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 15]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 19]),
          chunkDI55MBZ5Binding49(
            chunkDI55MBZ5Binding79,
            chunkDI55MBZ5Binding53,
            {
              7: 78,
            },
          ),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 26]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 27]),
          {
            5: [1, 79],
          },
          {
            5: [1, 80],
          },
          {
            4: chunkDI55MBZ5Binding54,
            5: chunkDI55MBZ5Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkDI55MBZ5Binding56,
            17: chunkDI55MBZ5Binding57,
            19: chunkDI55MBZ5Binding58,
            21: [1, 81],
            22: chunkDI55MBZ5Binding59,
            24: chunkDI55MBZ5Binding60,
            25: chunkDI55MBZ5Binding61,
            26: chunkDI55MBZ5Binding62,
            27: chunkDI55MBZ5Binding63,
            28: chunkDI55MBZ5Binding64,
            29: chunkDI55MBZ5Binding65,
            32: 25,
            33: chunkDI55MBZ5Binding66,
            35: chunkDI55MBZ5Binding67,
            37: chunkDI55MBZ5Binding68,
            38: chunkDI55MBZ5Binding69,
            41: chunkDI55MBZ5Binding70,
            45: chunkDI55MBZ5Binding71,
            48: chunkDI55MBZ5Binding72,
            51: chunkDI55MBZ5Binding73,
            52: chunkDI55MBZ5Binding74,
            53: chunkDI55MBZ5Binding75,
            54: _chunkDI55MBZ5R,
            57: chunkDI55MBZ5Binding76,
          },
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 32]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 33]),
          chunkDI55MBZ5Binding49(chunkDI55MBZ5Binding77, [2, 21]),
        ],
        defaultActions: {
          5: [2, 1],
          6: [2, 2],
          47: [2, 48],
          48: [2, 49],
        },
        parseError: defineFunctionName(function (
          chunkDI55MBZ5Input71,
          chunkDI55MBZ5Input72,
        ) {
          if (chunkDI55MBZ5Input72.recoverable)
            this.trace(chunkDI55MBZ5Input71);
          else {
            var chunkDI55MBZ5Binding185 = Error(chunkDI55MBZ5Input71);
            throw (
              (chunkDI55MBZ5Binding185.hash = chunkDI55MBZ5Input72),
              chunkDI55MBZ5Binding185
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (chunkDI55MBZ5Input12) {
          var chunkDI55MBZ5Binding87 = this,
            chunkDI55MBZ5Binding88 = [0],
            chunkDI55MBZ5Binding89 = [],
            chunkDI55MBZ5Binding90 = [null],
            chunkDI55MBZ5Binding91 = [],
            chunkDI55MBZ5Binding92 = this.table,
            chunkDI55MBZ5Binding93 = "",
            chunkDI55MBZ5Binding94 = 0,
            chunkDI55MBZ5Binding95 = 0,
            chunkDI55MBZ5Binding96 = 0,
            chunkDI55MBZ5Binding99 = chunkDI55MBZ5Binding91.slice.call(
              arguments,
              1,
            ),
            chunkDI55MBZ5Binding100 = Object.create(this.lexer),
            chunkDI55MBZ5Binding101 = {
              yy: {},
            };
          for (var chunkDI55MBZ5Binding102 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              chunkDI55MBZ5Binding102,
            ) &&
              (chunkDI55MBZ5Binding101.yy[chunkDI55MBZ5Binding102] =
                this.yy[chunkDI55MBZ5Binding102]);
          chunkDI55MBZ5Binding100.setInput(
            chunkDI55MBZ5Input12,
            chunkDI55MBZ5Binding101.yy,
          );
          chunkDI55MBZ5Binding101.yy.lexer = chunkDI55MBZ5Binding100;
          chunkDI55MBZ5Binding101.yy.parser = this;
          chunkDI55MBZ5Binding100.yylloc === undefined &&
            (chunkDI55MBZ5Binding100.yylloc = {});
          var chunkDI55MBZ5Binding103 = chunkDI55MBZ5Binding100.yylloc;
          chunkDI55MBZ5Binding91.push(chunkDI55MBZ5Binding103);
          var chunkDI55MBZ5Binding104 =
            chunkDI55MBZ5Binding100.options &&
            chunkDI55MBZ5Binding100.options.ranges;
          typeof chunkDI55MBZ5Binding101.yy.parseError == "function"
            ? (this.parseError = chunkDI55MBZ5Binding101.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function chunkDI55MBZ5Helper6(chunkDI55MBZ5Input93) {
            chunkDI55MBZ5Binding88.length -= 2 * chunkDI55MBZ5Input93;
            chunkDI55MBZ5Binding90.length -= chunkDI55MBZ5Input93;
            chunkDI55MBZ5Binding91.length -= chunkDI55MBZ5Input93;
          }
          defineFunctionName(chunkDI55MBZ5Helper6, "popStack");
          function chunkDI55MBZ5Helper7() {
            var chunkDI55MBZ5Binding173 =
              chunkDI55MBZ5Binding89.pop() ||
              chunkDI55MBZ5Binding100.lex() ||
              1;
            return (
              typeof chunkDI55MBZ5Binding173 != "number" &&
                (chunkDI55MBZ5Binding173 instanceof Array &&
                  ((chunkDI55MBZ5Binding89 = chunkDI55MBZ5Binding173),
                  (chunkDI55MBZ5Binding173 = chunkDI55MBZ5Binding89.pop())),
                (chunkDI55MBZ5Binding173 =
                  chunkDI55MBZ5Binding87.symbols_[chunkDI55MBZ5Binding173] ||
                  chunkDI55MBZ5Binding173)),
              chunkDI55MBZ5Binding173
            );
          }
          defineFunctionName(chunkDI55MBZ5Helper7, "lex");
          for (
            var chunkDI55MBZ5Binding105,
              chunkDI55MBZ5Binding106,
              chunkDI55MBZ5Binding107,
              chunkDI55MBZ5Binding108,
              chunkDI55MBZ5Binding109,
              chunkDI55MBZ5Binding110 = {},
              __chunkDI55MBZ5R,
              chunkDI55MBZ5Binding111,
              chunkDI55MBZ5Binding112,
              chunkDI55MBZ5Binding113;
            ;
          ) {
            if (
              ((chunkDI55MBZ5Binding107 =
                chunkDI55MBZ5Binding88[chunkDI55MBZ5Binding88.length - 1]),
              this.defaultActions[chunkDI55MBZ5Binding107]
                ? (chunkDI55MBZ5Binding108 =
                    this.defaultActions[chunkDI55MBZ5Binding107])
                : ((chunkDI55MBZ5Binding105 ??= chunkDI55MBZ5Helper7()),
                  (chunkDI55MBZ5Binding108 =
                    chunkDI55MBZ5Binding92[chunkDI55MBZ5Binding107] &&
                    chunkDI55MBZ5Binding92[chunkDI55MBZ5Binding107][
                      chunkDI55MBZ5Binding105
                    ])),
              chunkDI55MBZ5Binding108 === undefined ||
                !chunkDI55MBZ5Binding108.length ||
                !chunkDI55MBZ5Binding108[0])
            ) {
              var chunkDI55MBZ5Binding114 = "";
              for (__chunkDI55MBZ5R in ((chunkDI55MBZ5Binding113 = []),
              chunkDI55MBZ5Binding92[chunkDI55MBZ5Binding107]))
                this.terminals_[__chunkDI55MBZ5R] &&
                  __chunkDI55MBZ5R > 2 &&
                  chunkDI55MBZ5Binding113.push(
                    "'" + this.terminals_[__chunkDI55MBZ5R] + "'",
                  );
              chunkDI55MBZ5Binding114 = chunkDI55MBZ5Binding100.showPosition
                ? "Parse error on line " +
                  (chunkDI55MBZ5Binding94 + 1) +
                  ":\n" +
                  chunkDI55MBZ5Binding100.showPosition() +
                  "\nExpecting " +
                  chunkDI55MBZ5Binding113.join(", ") +
                  ", got '" +
                  (this.terminals_[chunkDI55MBZ5Binding105] ||
                    chunkDI55MBZ5Binding105) +
                  "'"
                : "Parse error on line " +
                  (chunkDI55MBZ5Binding94 + 1) +
                  ": Unexpected " +
                  (chunkDI55MBZ5Binding105 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[chunkDI55MBZ5Binding105] ||
                        chunkDI55MBZ5Binding105) +
                      "'");
              this.parseError(chunkDI55MBZ5Binding114, {
                text: chunkDI55MBZ5Binding100.match,
                token:
                  this.terminals_[chunkDI55MBZ5Binding105] ||
                  chunkDI55MBZ5Binding105,
                line: chunkDI55MBZ5Binding100.yylineno,
                loc: chunkDI55MBZ5Binding103,
                expected: chunkDI55MBZ5Binding113,
              });
            }
            if (
              chunkDI55MBZ5Binding108[0] instanceof Array &&
              chunkDI55MBZ5Binding108.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  chunkDI55MBZ5Binding107 +
                  ", token: " +
                  chunkDI55MBZ5Binding105,
              );
            switch (chunkDI55MBZ5Binding108[0]) {
              case 1:
                chunkDI55MBZ5Binding88.push(chunkDI55MBZ5Binding105);
                chunkDI55MBZ5Binding90.push(chunkDI55MBZ5Binding100.yytext);
                chunkDI55MBZ5Binding91.push(chunkDI55MBZ5Binding100.yylloc);
                chunkDI55MBZ5Binding88.push(chunkDI55MBZ5Binding108[1]);
                chunkDI55MBZ5Binding105 = null;
                chunkDI55MBZ5Binding106
                  ? ((chunkDI55MBZ5Binding105 = chunkDI55MBZ5Binding106),
                    (chunkDI55MBZ5Binding106 = null))
                  : ((chunkDI55MBZ5Binding95 = chunkDI55MBZ5Binding100.yyleng),
                    (chunkDI55MBZ5Binding93 = chunkDI55MBZ5Binding100.yytext),
                    (chunkDI55MBZ5Binding94 = chunkDI55MBZ5Binding100.yylineno),
                    (chunkDI55MBZ5Binding103 = chunkDI55MBZ5Binding100.yylloc),
                    chunkDI55MBZ5Binding96 > 0 && chunkDI55MBZ5Binding96--);
                break;
              case 2:
                if (
                  ((chunkDI55MBZ5Binding111 =
                    this.productions_[chunkDI55MBZ5Binding108[1]][1]),
                  (chunkDI55MBZ5Binding110.$ =
                    chunkDI55MBZ5Binding90[
                      chunkDI55MBZ5Binding90.length - chunkDI55MBZ5Binding111
                    ]),
                  (chunkDI55MBZ5Binding110._$ = {
                    first_line:
                      chunkDI55MBZ5Binding91[
                        chunkDI55MBZ5Binding91.length -
                          (chunkDI55MBZ5Binding111 || 1)
                      ].first_line,
                    last_line:
                      chunkDI55MBZ5Binding91[chunkDI55MBZ5Binding91.length - 1]
                        .last_line,
                    first_column:
                      chunkDI55MBZ5Binding91[
                        chunkDI55MBZ5Binding91.length -
                          (chunkDI55MBZ5Binding111 || 1)
                      ].first_column,
                    last_column:
                      chunkDI55MBZ5Binding91[chunkDI55MBZ5Binding91.length - 1]
                        .last_column,
                  }),
                  chunkDI55MBZ5Binding104 &&
                    (chunkDI55MBZ5Binding110._$.range = [
                      chunkDI55MBZ5Binding91[
                        chunkDI55MBZ5Binding91.length -
                          (chunkDI55MBZ5Binding111 || 1)
                      ].range[0],
                      chunkDI55MBZ5Binding91[chunkDI55MBZ5Binding91.length - 1]
                        .range[1],
                    ]),
                  (chunkDI55MBZ5Binding109 = this.performAction.apply(
                    chunkDI55MBZ5Binding110,
                    [
                      chunkDI55MBZ5Binding93,
                      chunkDI55MBZ5Binding95,
                      chunkDI55MBZ5Binding94,
                      chunkDI55MBZ5Binding101.yy,
                      chunkDI55MBZ5Binding108[1],
                      chunkDI55MBZ5Binding90,
                      chunkDI55MBZ5Binding91,
                    ].concat(chunkDI55MBZ5Binding99),
                  )),
                  chunkDI55MBZ5Binding109 !== undefined)
                )
                  return chunkDI55MBZ5Binding109;
                chunkDI55MBZ5Binding111 &&
                  ((chunkDI55MBZ5Binding88 = chunkDI55MBZ5Binding88.slice(
                    0,
                    -1 * chunkDI55MBZ5Binding111 * 2,
                  )),
                  (chunkDI55MBZ5Binding90 = chunkDI55MBZ5Binding90.slice(
                    0,
                    -1 * chunkDI55MBZ5Binding111,
                  )),
                  (chunkDI55MBZ5Binding91 = chunkDI55MBZ5Binding91.slice(
                    0,
                    -1 * chunkDI55MBZ5Binding111,
                  )));
                chunkDI55MBZ5Binding88.push(
                  this.productions_[chunkDI55MBZ5Binding108[1]][0],
                );
                chunkDI55MBZ5Binding90.push(chunkDI55MBZ5Binding110.$);
                chunkDI55MBZ5Binding91.push(chunkDI55MBZ5Binding110._$);
                chunkDI55MBZ5Binding112 =
                  chunkDI55MBZ5Binding92[
                    chunkDI55MBZ5Binding88[chunkDI55MBZ5Binding88.length - 2]
                  ][chunkDI55MBZ5Binding88[chunkDI55MBZ5Binding88.length - 1]];
                chunkDI55MBZ5Binding88.push(chunkDI55MBZ5Binding112);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    chunkDI55MBZ5Binding80.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          chunkDI55MBZ5Input80,
          chunkDI55MBZ5Input81,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              chunkDI55MBZ5Input80,
              chunkDI55MBZ5Input81,
            );
          else throw Error(chunkDI55MBZ5Input80);
        }, "parseError"),
        setInput: defineFunctionName(function (
          chunkDI55MBZ5Input53,
          chunkDI55MBZ5Input54,
        ) {
          return (
            (this.yy = chunkDI55MBZ5Input54 || this.yy || {}),
            (this._input = chunkDI55MBZ5Input53),
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
          var chunkDI55MBZ5Binding162 = this._input[0];
          return (
            (this.yytext += chunkDI55MBZ5Binding162),
            this.yyleng++,
            this.offset++,
            (this.match += chunkDI55MBZ5Binding162),
            (this.matched += chunkDI55MBZ5Binding162),
            chunkDI55MBZ5Binding162.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            chunkDI55MBZ5Binding162
          );
        }, "input"),
        unput: defineFunctionName(function (chunkDI55MBZ5Input37) {
          var chunkDI55MBZ5Binding143 = chunkDI55MBZ5Input37.length,
            chunkDI55MBZ5Binding144 =
              chunkDI55MBZ5Input37.split(/(?:\r\n?|\n)/g);
          this._input = chunkDI55MBZ5Input37 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - chunkDI55MBZ5Binding143,
          );
          this.offset -= chunkDI55MBZ5Binding143;
          var chunkDI55MBZ5Binding145 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          chunkDI55MBZ5Binding144.length - 1 &&
            (this.yylineno -= chunkDI55MBZ5Binding144.length - 1);
          var chunkDI55MBZ5Binding146 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: chunkDI55MBZ5Binding144
                ? (chunkDI55MBZ5Binding144.length ===
                  chunkDI55MBZ5Binding145.length
                    ? this.yylloc.first_column
                    : 0) +
                  chunkDI55MBZ5Binding145[
                    chunkDI55MBZ5Binding145.length -
                      chunkDI55MBZ5Binding144.length
                  ].length -
                  chunkDI55MBZ5Binding144[0].length
                : this.yylloc.first_column - chunkDI55MBZ5Binding143,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                chunkDI55MBZ5Binding146[0],
                chunkDI55MBZ5Binding146[0] +
                  this.yyleng -
                  chunkDI55MBZ5Binding143,
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
        less: defineFunctionName(function (chunkDI55MBZ5Input104) {
          this.unput(this.match.slice(chunkDI55MBZ5Input104));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var chunkDI55MBZ5Binding174 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (chunkDI55MBZ5Binding174.length > 20 ? "..." : "") +
            chunkDI55MBZ5Binding174.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var chunkDI55MBZ5Binding172 = this.match;
          return (
            chunkDI55MBZ5Binding172.length < 20 &&
              (chunkDI55MBZ5Binding172 += this._input.substr(
                0,
                20 - chunkDI55MBZ5Binding172.length,
              )),
            (
              chunkDI55MBZ5Binding172.substr(0, 20) +
              (chunkDI55MBZ5Binding172.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var chunkDI55MBZ5Binding175 = this.pastInput(),
            chunkDI55MBZ5Binding176 = Array(
              chunkDI55MBZ5Binding175.length + 1,
            ).join("-");
          return (
            chunkDI55MBZ5Binding175 +
            this.upcomingInput() +
            "\n" +
            chunkDI55MBZ5Binding176 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          chunkDI55MBZ5Input22,
          chunkDI55MBZ5Input23,
        ) {
          var chunkDI55MBZ5Binding123,
            chunkDI55MBZ5Binding124,
            chunkDI55MBZ5Binding125;
          if (
            (this.options.backtrack_lexer &&
              ((chunkDI55MBZ5Binding125 = {
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
                (chunkDI55MBZ5Binding125.yylloc.range =
                  this.yylloc.range.slice(0))),
            (chunkDI55MBZ5Binding124 =
              chunkDI55MBZ5Input22[0].match(/(?:\r\n?|\n).*/g)),
            chunkDI55MBZ5Binding124 &&
              (this.yylineno += chunkDI55MBZ5Binding124.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: chunkDI55MBZ5Binding124
                ? chunkDI55MBZ5Binding124[chunkDI55MBZ5Binding124.length - 1]
                    .length -
                  chunkDI55MBZ5Binding124[
                    chunkDI55MBZ5Binding124.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + chunkDI55MBZ5Input22[0].length,
            }),
            (this.yytext += chunkDI55MBZ5Input22[0]),
            (this.match += chunkDI55MBZ5Input22[0]),
            (this.matches = chunkDI55MBZ5Input22),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(chunkDI55MBZ5Input22[0].length)),
            (this.matched += chunkDI55MBZ5Input22[0]),
            (chunkDI55MBZ5Binding123 = this.performAction.call(
              this,
              this.yy,
              this,
              chunkDI55MBZ5Input23,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            chunkDI55MBZ5Binding123)
          )
            return chunkDI55MBZ5Binding123;
          if (this._backtrack) {
            for (var chunkDI55MBZ5Binding126 in chunkDI55MBZ5Binding125)
              this[chunkDI55MBZ5Binding126] =
                chunkDI55MBZ5Binding125[chunkDI55MBZ5Binding126];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var chunkDI55MBZ5Binding147,
            chunkDI55MBZ5Binding148,
            chunkDI55MBZ5Binding149,
            chunkDI55MBZ5Binding150;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var chunkDI55MBZ5Binding151 = this._currentRules(),
              chunkDI55MBZ5Binding152 = 0;
            chunkDI55MBZ5Binding152 < chunkDI55MBZ5Binding151.length;
            chunkDI55MBZ5Binding152++
          )
            if (
              ((chunkDI55MBZ5Binding149 = this._input.match(
                this.rules[chunkDI55MBZ5Binding151[chunkDI55MBZ5Binding152]],
              )),
              chunkDI55MBZ5Binding149 &&
                (!chunkDI55MBZ5Binding148 ||
                  chunkDI55MBZ5Binding149[0].length >
                    chunkDI55MBZ5Binding148[0].length))
            ) {
              if (
                ((chunkDI55MBZ5Binding148 = chunkDI55MBZ5Binding149),
                (chunkDI55MBZ5Binding150 = chunkDI55MBZ5Binding152),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((chunkDI55MBZ5Binding147 = this.test_match(
                    chunkDI55MBZ5Binding149,
                    chunkDI55MBZ5Binding151[chunkDI55MBZ5Binding152],
                  )),
                  chunkDI55MBZ5Binding147 !== false)
                )
                  return chunkDI55MBZ5Binding147;
                if (this._backtrack) {
                  chunkDI55MBZ5Binding148 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return chunkDI55MBZ5Binding148
            ? ((chunkDI55MBZ5Binding147 = this.test_match(
                chunkDI55MBZ5Binding148,
                chunkDI55MBZ5Binding151[chunkDI55MBZ5Binding150],
              )),
              chunkDI55MBZ5Binding147 === false
                ? false
                : chunkDI55MBZ5Binding147)
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
        begin: defineFunctionName(function (chunkDI55MBZ5Input105) {
          this.conditionStack.push(chunkDI55MBZ5Input105);
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
        topState: defineFunctionName(function (chunkDI55MBZ5Input70) {
          return (
            (chunkDI55MBZ5Input70 =
              this.conditionStack.length -
              1 -
              Math.abs(chunkDI55MBZ5Input70 || 0)),
            chunkDI55MBZ5Input70 >= 0
              ? this.conditionStack[chunkDI55MBZ5Input70]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (chunkDI55MBZ5Input110) {
          this.begin(chunkDI55MBZ5Input110);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          chunkDI55MBZ5Input1,
          chunkDI55MBZ5Input2,
          chunkDI55MBZ5Input3,
          chunkDI55MBZ5Input4,
        ) {
          switch (chunkDI55MBZ5Input3) {
            case 0:
              return 38;
            case 1:
              return 40;
            case 2:
              return 39;
            case 3:
              return 44;
            case 4:
              return 51;
            case 5:
              return 52;
            case 6:
              return 53;
            case 7:
              return 54;
            case 8:
              break;
            case 9:
              break;
            case 10:
              return 5;
            case 11:
              break;
            case 12:
              break;
            case 13:
              break;
            case 14:
              break;
            case 15:
              return (this.pushState("SCALE"), 17);
            case 16:
              return 18;
            case 17:
              this.popState();
              break;
            case 18:
              return (this.begin("acc_title"), 33);
            case 19:
              return (this.popState(), "acc_title_value");
            case 20:
              return (this.begin("acc_descr"), 35);
            case 21:
              return (this.popState(), "acc_descr_value");
            case 22:
              this.begin("acc_descr_multiline");
              break;
            case 23:
              this.popState();
              break;
            case 24:
              return "acc_descr_multiline_value";
            case 25:
              return (this.pushState("CLASSDEF"), 41);
            case 26:
              return (
                this.popState(),
                this.pushState("CLASSDEFID"),
                "DEFAULT_CLASSDEF_ID"
              );
            case 27:
              return (this.popState(), this.pushState("CLASSDEFID"), 42);
            case 28:
              return (this.popState(), 43);
            case 29:
              return (this.pushState("CLASS"), 48);
            case 30:
              return (this.popState(), this.pushState("CLASS_STYLE"), 49);
            case 31:
              return (this.popState(), 50);
            case 32:
              return (this.pushState("STYLE"), 45);
            case 33:
              return (this.popState(), this.pushState("STYLEDEF_STYLES"), 46);
            case 34:
              return (this.popState(), 47);
            case 35:
              return (this.pushState("SCALE"), 17);
            case 36:
              return 18;
            case 37:
              this.popState();
              break;
            case 38:
              this.pushState("STATE");
              break;
            case 39:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -8)
                  .trim()),
                25
              );
            case 40:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -8)
                  .trim()),
                26
              );
            case 41:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -10)
                  .trim()),
                27
              );
            case 42:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -8)
                  .trim()),
                25
              );
            case 43:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -8)
                  .trim()),
                26
              );
            case 44:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -10)
                  .trim()),
                27
              );
            case 45:
              return 51;
            case 46:
              return 52;
            case 47:
              return 53;
            case 48:
              return 54;
            case 49:
              this.pushState("STATE_STRING");
              break;
            case 50:
              return (this.pushState("STATE_ID"), "AS");
            case 51:
              return (this.popState(), "ID");
            case 52:
              this.popState();
              break;
            case 53:
              return "STATE_DESCR";
            case 54:
              return 19;
            case 55:
              this.popState();
              break;
            case 56:
              return (this.popState(), this.pushState("struct"), 20);
            case 57:
              break;
            case 58:
              return (this.popState(), 21);
            case 59:
              break;
            case 60:
              return (this.begin("NOTE"), 29);
            case 61:
              return (this.popState(), this.pushState("NOTE_ID"), 59);
            case 62:
              return (this.popState(), this.pushState("NOTE_ID"), 60);
            case 63:
              this.popState();
              this.pushState("FLOATING_NOTE");
              break;
            case 64:
              return (
                this.popState(),
                this.pushState("FLOATING_NOTE_ID"),
                "AS"
              );
            case 65:
              break;
            case 66:
              return "NOTE_TEXT";
            case 67:
              return (this.popState(), "ID");
            case 68:
              return (this.popState(), this.pushState("NOTE_TEXT"), 24);
            case 69:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .substr(2)
                  .trim()),
                31
              );
            case 70:
              return (
                this.popState(),
                (chunkDI55MBZ5Input2.yytext = chunkDI55MBZ5Input2.yytext
                  .slice(0, -8)
                  .trim()),
                31
              );
            case 71:
              return 6;
            case 72:
              return 6;
            case 73:
              return 16;
            case 74:
              return 57;
            case 75:
              return 24;
            case 76:
              return (
                (chunkDI55MBZ5Input2.yytext =
                  chunkDI55MBZ5Input2.yytext.trim()),
                14
              );
            case 77:
              return 15;
            case 78:
              return 28;
            case 79:
              return 58;
            case 80:
              return 5;
            case 81:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:click\b)/i,
          /^(?:href\b)/i,
          /^(?:"[^"]*")/i,
          /^(?:default\b)/i,
          /^(?:.*direction\s+TB[^\n]*)/i,
          /^(?:.*direction\s+BT[^\n]*)/i,
          /^(?:.*direction\s+RL[^\n]*)/i,
          /^(?:.*direction\s+LR[^\n]*)/i,
          /^(?:%%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:[\s]+)/i,
          /^(?:((?!\n)\s)+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:%[^\n]*)/i,
          /^(?:scale\s+)/i,
          /^(?:\d+)/i,
          /^(?:\s+width\b)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:classDef\s+)/i,
          /^(?:DEFAULT\s+)/i,
          /^(?:\w+\s+)/i,
          /^(?:[^\n]*)/i,
          /^(?:class\s+)/i,
          /^(?:(\w+)+((,\s*\w+)*))/i,
          /^(?:[^\n]*)/i,
          /^(?:style\s+)/i,
          /^(?:[\w,]+\s+)/i,
          /^(?:[^\n]*)/i,
          /^(?:scale\s+)/i,
          /^(?:\d+)/i,
          /^(?:\s+width\b)/i,
          /^(?:state\s+)/i,
          /^(?:.*<<fork>>)/i,
          /^(?:.*<<join>>)/i,
          /^(?:.*<<choice>>)/i,
          /^(?:.*\[\[fork\]\])/i,
          /^(?:.*\[\[join\]\])/i,
          /^(?:.*\[\[choice\]\])/i,
          /^(?:.*direction\s+TB[^\n]*)/i,
          /^(?:.*direction\s+BT[^\n]*)/i,
          /^(?:.*direction\s+RL[^\n]*)/i,
          /^(?:.*direction\s+LR[^\n]*)/i,
          /^(?:["])/i,
          /^(?:\s*as\s+)/i,
          /^(?:[^\n\{]*)/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:[^\n\s\{]+)/i,
          /^(?:\n)/i,
          /^(?:\{)/i,
          /^(?:%%(?!\{)[^\n]*)/i,
          /^(?:\})/i,
          /^(?:[\n])/i,
          /^(?:note\s+)/i,
          /^(?:left of\b)/i,
          /^(?:right of\b)/i,
          /^(?:")/i,
          /^(?:\s*as\s*)/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:[^\n]*)/i,
          /^(?:\s*[^:\n\s\-]+)/i,
          /^(?:\s*:[^:\n;]+)/i,
          /^(?:[\s\S]*?end note\b)/i,
          /^(?:stateDiagram\s+)/i,
          /^(?:stateDiagram-v2\s+)/i,
          /^(?:hide empty description\b)/i,
          /^(?:\[\*\])/i,
          /^(?:[^:\n\s\-\{]+)/i,
          /^(?:\s*:[^:\n;]+)/i,
          /^(?:-->)/i,
          /^(?:--)/i,
          /^(?::::)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          LINE: {
            rules: [12, 13],
            inclusive: false,
          },
          struct: {
            rules: [
              12, 13, 25, 29, 32, 38, 45, 46, 47, 48, 57, 58, 59, 60, 74, 75,
              76, 77, 78,
            ],
            inclusive: false,
          },
          FLOATING_NOTE_ID: {
            rules: [67],
            inclusive: false,
          },
          FLOATING_NOTE: {
            rules: [64, 65, 66],
            inclusive: false,
          },
          NOTE_TEXT: {
            rules: [69, 70],
            inclusive: false,
          },
          NOTE_ID: {
            rules: [68],
            inclusive: false,
          },
          NOTE: {
            rules: [61, 62, 63],
            inclusive: false,
          },
          STYLEDEF_STYLEOPTS: {
            rules: [],
            inclusive: false,
          },
          STYLEDEF_STYLES: {
            rules: [34],
            inclusive: false,
          },
          STYLE_IDS: {
            rules: [],
            inclusive: false,
          },
          STYLE: {
            rules: [33],
            inclusive: false,
          },
          CLASS_STYLE: {
            rules: [31],
            inclusive: false,
          },
          CLASS: {
            rules: [30],
            inclusive: false,
          },
          CLASSDEFID: {
            rules: [28],
            inclusive: false,
          },
          CLASSDEF: {
            rules: [26, 27],
            inclusive: false,
          },
          acc_descr_multiline: {
            rules: [23, 24],
            inclusive: false,
          },
          acc_descr: {
            rules: [21],
            inclusive: false,
          },
          acc_title: {
            rules: [19],
            inclusive: false,
          },
          SCALE: {
            rules: [16, 17, 36, 37],
            inclusive: false,
          },
          ALIAS: {
            rules: [],
            inclusive: false,
          },
          STATE_ID: {
            rules: [51],
            inclusive: false,
          },
          STATE_STRING: {
            rules: [52, 53],
            inclusive: false,
          },
          FORK_STATE: {
            rules: [],
            inclusive: false,
          },
          STATE: {
            rules: [12, 13, 39, 40, 41, 42, 43, 44, 49, 50, 54, 55, 56],
            inclusive: false,
          },
          ID: {
            rules: [12, 13],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 20, 22, 25,
              29, 32, 35, 38, 56, 60, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function chunkDI55MBZ5Helper5() {
      this.yy = {};
    }
    return (
      defineFunctionName(chunkDI55MBZ5Helper5, "Parser"),
      (chunkDI55MBZ5Helper5.prototype = chunkDI55MBZ5Binding80),
      (chunkDI55MBZ5Binding80.Parser = chunkDI55MBZ5Helper5),
      new chunkDI55MBZ5Helper5()
    );
  })();
  chunkDI55MBZ5Binding1.parser = chunkDI55MBZ5Binding1;
  chunkDI55MBZ5R = chunkDI55MBZ5Binding1;
  chunkDI55MBZ5Binding2 = "TB";
  chunkDI55MBZ5Binding3 = "TB";
  chunkDI55MBZ5Binding4 = "dir";
  chunkDI55MBZ5Binding5 = "state";
  chunkDI55MBZ5Binding6 = "root";
  chunkDI55MBZ5Binding7 = "relation";
  chunkDI55MBZ5Binding8 = "classDef";
  chunkDI55MBZ5Binding9 = "style";
  chunkDI55MBZ5Binding10 = "applyClass";
  chunkDI55MBZ5Binding11 = "default";
  chunkDI55MBZ5Binding12 = "divider";
  chunkDI55MBZ5Binding13 = "fill:none";
  chunkDI55MBZ5Binding14 = "fill: #333";
  chunkDI55MBZ5Binding15 = "c";
  chunkDI55MBZ5Binding16 = "text";
  chunkDI55MBZ5Binding17 = "normal";
  chunkDI55MBZ5Binding18 = "rect";
  chunkDI55MBZ5Binding19 = "rectWithTitle";
  chunkDI55MBZ5Binding20 = "stateStart";
  chunkDI55MBZ5Binding21 = "stateEnd";
  chunkDI55MBZ5Binding22 = "divider";
  chunkDI55MBZ5Binding23 = "roundedWithTitle";
  chunkDI55MBZ5Binding24 = "note";
  chunkDI55MBZ5Binding25 = "noteGroup";
  chunkDI55MBZ5Binding26 = "statediagram";
  chunkDI55MBZ5Binding27 = `${chunkDI55MBZ5Binding26}-state`;
  chunkDI55MBZ5Binding28 = "transition";
  chunkDI55MBZ5Binding29 = "note";
  chunkDI55MBZ5Binding30 = `${chunkDI55MBZ5Binding28} note-edge`;
  chunkDI55MBZ5Binding31 = `${chunkDI55MBZ5Binding26}-${chunkDI55MBZ5Binding29}`;
  chunkDI55MBZ5Binding32 = `${chunkDI55MBZ5Binding26}-cluster`;
  chunkDI55MBZ5Binding33 = `${chunkDI55MBZ5Binding26}-cluster-alt`;
  chunkDI55MBZ5Binding34 = "parent";
  chunkDI55MBZ5Binding35 = "note";
  _e = "state";
  chunkDI55MBZ5Binding36 = "----";
  chunkDI55MBZ5Binding37 = `${chunkDI55MBZ5Binding36}${chunkDI55MBZ5Binding35}`;
  chunkDI55MBZ5Binding38 = `${chunkDI55MBZ5Binding36}${chunkDI55MBZ5Binding34}`;
  chunkDI55MBZ5Binding39 = defineFunctionName(
    (chunkDI55MBZ5Input75, chunkDI55MBZ5Input76 = chunkDI55MBZ5Binding3) => {
      if (!chunkDI55MBZ5Input75.doc) return chunkDI55MBZ5Input76;
      let chunkDI55MBZ5Binding188 = chunkDI55MBZ5Input76;
      for (let chunkDI55MBZ5Binding198 of chunkDI55MBZ5Input75.doc)
        chunkDI55MBZ5Binding198.stmt === "dir" &&
          (chunkDI55MBZ5Binding188 = chunkDI55MBZ5Binding198.value);
      return chunkDI55MBZ5Binding188;
    },
    "getDir",
  );
  chunkDI55MBZ5I = {
    getClasses: defineFunctionName(function (
      chunkDI55MBZ5Input108,
      chunkDI55MBZ5Input109,
    ) {
      return chunkDI55MBZ5Input109.db.getClasses();
    }, "getClasses"),
    draw: defineFunctionName(async function (
      chunkDI55MBZ5Input24,
      chunkDI55MBZ5Input25,
      chunkDI55MBZ5Input26,
      chunkDI55MBZ5Input27,
    ) {
      logger.info("REF0:");
      logger.info("Drawing state diagram (v2)", chunkDI55MBZ5Input25);
      let { securityLevel, state, layout } = _chunkABZYJK2DB();
      chunkDI55MBZ5Input27.db.extract(chunkDI55MBZ5Input27.db.getRootDocV2());
      let chunkDI55MBZ5Binding127 = chunkDI55MBZ5Input27.db.getData(),
        chunkDI55MBZ5Binding128 = t(chunkDI55MBZ5Input25, securityLevel);
      chunkDI55MBZ5Binding127.type = chunkDI55MBZ5Input27.type;
      chunkDI55MBZ5Binding127.layoutAlgorithm = layout;
      chunkDI55MBZ5Binding127.nodeSpacing = state?.nodeSpacing || 50;
      chunkDI55MBZ5Binding127.rankSpacing = state?.rankSpacing || 50;
      chunkDI55MBZ5Binding127.markers = ["barb"];
      chunkDI55MBZ5Binding127.diagramId = chunkDI55MBZ5Input25;
      await chunkN4CR4FBYI(chunkDI55MBZ5Binding127, chunkDI55MBZ5Binding128);
      try {
        (typeof chunkDI55MBZ5Input27.db.getLinks == "function"
          ? chunkDI55MBZ5Input27.db.getLinks()
          : new Map()
        ).forEach((item, index) => {
          let chunkDI55MBZ5Binding137 =
            typeof index == "string"
              ? index
              : typeof index?.id == "string"
                ? index.id
                : "";
          if (!chunkDI55MBZ5Binding137) {
            logger.warn(
              "⚠️ Invalid or missing stateId from key:",
              JSON.stringify(index),
            );
            return;
          }
          let chunkDI55MBZ5Binding138 = chunkDI55MBZ5Binding128
              .node()
              ?.querySelectorAll("g"),
            chunkDI55MBZ5Binding139;
          if (
            (chunkDI55MBZ5Binding138?.forEach((chunkDI55MBZ5Input100) => {
              chunkDI55MBZ5Input100.textContent?.trim() ===
                chunkDI55MBZ5Binding137 &&
                (chunkDI55MBZ5Binding139 = chunkDI55MBZ5Input100);
            }),
            !chunkDI55MBZ5Binding139)
          ) {
            logger.warn(
              "⚠️ Could not find node matching text:",
              chunkDI55MBZ5Binding137,
            );
            return;
          }
          let chunkDI55MBZ5Binding140 = chunkDI55MBZ5Binding139.parentNode;
          if (!chunkDI55MBZ5Binding140) {
            logger.warn(
              "⚠️ Node has no parent, cannot wrap:",
              chunkDI55MBZ5Binding137,
            );
            return;
          }
          let chunkDI55MBZ5Binding141 = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "a",
            ),
            chunkDI55MBZ5Binding142 = item.url.replace(/^"+|"+$/g, "");
          if (
            (chunkDI55MBZ5Binding141.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              chunkDI55MBZ5Binding142,
            ),
            chunkDI55MBZ5Binding141.setAttribute("target", "_blank"),
            item.tooltip)
          ) {
            let chunkDI55MBZ5Binding193 = item.tooltip.replace(/^"+|"+$/g, "");
            chunkDI55MBZ5Binding141.setAttribute(
              "title",
              chunkDI55MBZ5Binding193,
            );
          }
          chunkDI55MBZ5Binding140.replaceChild(
            chunkDI55MBZ5Binding141,
            chunkDI55MBZ5Binding139,
          );
          chunkDI55MBZ5Binding141.appendChild(chunkDI55MBZ5Binding139);
          logger.info(
            "🔗 Wrapped node in <a> tag for:",
            chunkDI55MBZ5Binding137,
            item.url,
          );
        });
      } catch (chunkDI55MBZ5Binding197) {
        logger.error(
          "❌ Error injecting clickable links:",
          chunkDI55MBZ5Binding197,
        );
      }
      chunkS3R3BYOJG.insertTitle(
        chunkDI55MBZ5Binding128,
        "statediagramTitleText",
        state?.titleTopMargin ?? 25,
        chunkDI55MBZ5Input27.db.getDiagramTitle(),
      );
      chunkQN33PNHLN(
        chunkDI55MBZ5Binding128,
        8,
        chunkDI55MBZ5Binding26,
        state?.useMaxWidth ?? true,
      );
    }, "draw"),
    getDir: chunkDI55MBZ5Binding39,
  };
  chunkDI55MBZ5Binding40 = new Map();
  chunkDI55MBZ5Binding41 = 0;
  defineFunctionName(chunkDI55MBZ5Helper1, "stateDomId");
  chunkDI55MBZ5Binding42 = defineFunctionName(
    (
      chunkDI55MBZ5Input38,
      chunkDI55MBZ5Input39,
      chunkDI55MBZ5Input40,
      chunkDI55MBZ5Input41,
      chunkDI55MBZ5Input42,
      chunkDI55MBZ5Input43,
      chunkDI55MBZ5Input44,
      chunkDI55MBZ5Input45,
    ) => {
      logger.trace("items", chunkDI55MBZ5Input39);
      chunkDI55MBZ5Input39.forEach((item) => {
        switch (item.stmt) {
          case chunkDI55MBZ5Binding5:
            chunkDI55MBZ5Binding44(
              chunkDI55MBZ5Input38,
              item,
              chunkDI55MBZ5Input40,
              chunkDI55MBZ5Input41,
              chunkDI55MBZ5Input42,
              chunkDI55MBZ5Input43,
              chunkDI55MBZ5Input44,
              chunkDI55MBZ5Input45,
            );
            break;
          case chunkDI55MBZ5Binding11:
            chunkDI55MBZ5Binding44(
              chunkDI55MBZ5Input38,
              item,
              chunkDI55MBZ5Input40,
              chunkDI55MBZ5Input41,
              chunkDI55MBZ5Input42,
              chunkDI55MBZ5Input43,
              chunkDI55MBZ5Input44,
              chunkDI55MBZ5Input45,
            );
            break;
          case chunkDI55MBZ5Binding7:
            {
              chunkDI55MBZ5Binding44(
                chunkDI55MBZ5Input38,
                item.state1,
                chunkDI55MBZ5Input40,
                chunkDI55MBZ5Input41,
                chunkDI55MBZ5Input42,
                chunkDI55MBZ5Input43,
                chunkDI55MBZ5Input44,
                chunkDI55MBZ5Input45,
              );
              chunkDI55MBZ5Binding44(
                chunkDI55MBZ5Input38,
                item.state2,
                chunkDI55MBZ5Input40,
                chunkDI55MBZ5Input41,
                chunkDI55MBZ5Input42,
                chunkDI55MBZ5Input43,
                chunkDI55MBZ5Input44,
                chunkDI55MBZ5Input45,
              );
              let chunkDI55MBZ5Binding160 = {
                id: "edge" + chunkDI55MBZ5Binding41,
                start: item.state1.id,
                end: item.state2.id,
                arrowhead: "normal",
                arrowTypeEnd: "arrow_barb",
                style: chunkDI55MBZ5Binding13,
                labelStyle: "",
                label: s.sanitizeText(
                  item.description ?? "",
                  _chunkABZYJK2DB(),
                ),
                arrowheadStyle: chunkDI55MBZ5Binding14,
                labelpos: chunkDI55MBZ5Binding15,
                labelType: chunkDI55MBZ5Binding16,
                thickness: chunkDI55MBZ5Binding17,
                classes: chunkDI55MBZ5Binding28,
                look: chunkDI55MBZ5Input44,
              };
              chunkDI55MBZ5Input42.push(chunkDI55MBZ5Binding160);
              chunkDI55MBZ5Binding41++;
            }
            break;
        }
      });
    },
    "setupDoc",
  );
  chunkDI55MBZ5Binding43 = defineFunctionName(
    (chunkDI55MBZ5Input78, chunkDI55MBZ5Input79 = chunkDI55MBZ5Binding3) => {
      let chunkDI55MBZ5Binding190 = chunkDI55MBZ5Input79;
      if (chunkDI55MBZ5Input78.doc)
        for (let chunkDI55MBZ5Binding199 of chunkDI55MBZ5Input78.doc)
          chunkDI55MBZ5Binding199.stmt === "dir" &&
            (chunkDI55MBZ5Binding190 = chunkDI55MBZ5Binding199.value);
      return chunkDI55MBZ5Binding190;
    },
    "getDir",
  );
  defineFunctionName(chunkDI55MBZ5Helper2, "insertOrUpdateNode");
  defineFunctionName(chunkDI55MBZ5Helper3, "getClassesFromDbInfo");
  defineFunctionName(chunkDI55MBZ5Helper4, "getStylesFromDbInfo");
  chunkDI55MBZ5Binding44 = defineFunctionName(
    (
      chunkDI55MBZ5Input13,
      chunkDI55MBZ5Input14,
      chunkDI55MBZ5Input15,
      chunkDI55MBZ5Input16,
      chunkDI55MBZ5Input17,
      chunkDI55MBZ5Input18,
      chunkDI55MBZ5Input19,
      chunkDI55MBZ5Input20,
    ) => {
      let chunkDI55MBZ5Binding115 = chunkDI55MBZ5Input14.id,
        chunkDI55MBZ5Binding116 = chunkDI55MBZ5Input15.get(
          chunkDI55MBZ5Binding115,
        ),
        chunkDI55MBZ5Binding117 = chunkDI55MBZ5Helper3(chunkDI55MBZ5Binding116),
        chunkDI55MBZ5Binding118 = chunkDI55MBZ5Helper4(chunkDI55MBZ5Binding116),
        chunkDI55MBZ5Binding119 = _chunkABZYJK2DB();
      if (
        (logger.info(
          "dataFetcher parsedItem",
          chunkDI55MBZ5Input14,
          chunkDI55MBZ5Binding116,
          chunkDI55MBZ5Binding118,
        ),
        chunkDI55MBZ5Binding115 !== "root")
      ) {
        let chunkDI55MBZ5Binding120 = chunkDI55MBZ5Binding18;
        chunkDI55MBZ5Input14.start === true
          ? (chunkDI55MBZ5Binding120 = chunkDI55MBZ5Binding20)
          : chunkDI55MBZ5Input14.start === false &&
            (chunkDI55MBZ5Binding120 = chunkDI55MBZ5Binding21);
        chunkDI55MBZ5Input14.type !== chunkDI55MBZ5Binding11 &&
          (chunkDI55MBZ5Binding120 = chunkDI55MBZ5Input14.type);
        chunkDI55MBZ5Binding40.get(chunkDI55MBZ5Binding115) ||
          chunkDI55MBZ5Binding40.set(chunkDI55MBZ5Binding115, {
            id: chunkDI55MBZ5Binding115,
            shape: chunkDI55MBZ5Binding120,
            description: s.sanitizeText(
              chunkDI55MBZ5Binding115,
              chunkDI55MBZ5Binding119,
            ),
            cssClasses: `${chunkDI55MBZ5Binding117} ${chunkDI55MBZ5Binding27}`,
            cssStyles: chunkDI55MBZ5Binding118,
          });
        let chunkDI55MBZ5Binding121 = chunkDI55MBZ5Binding40.get(
          chunkDI55MBZ5Binding115,
        );
        chunkDI55MBZ5Input14.description &&
          (Array.isArray(chunkDI55MBZ5Binding121.description)
            ? ((chunkDI55MBZ5Binding121.shape = chunkDI55MBZ5Binding19),
              chunkDI55MBZ5Binding121.description.push(
                chunkDI55MBZ5Input14.description,
              ))
            : chunkDI55MBZ5Binding121.description?.length &&
                chunkDI55MBZ5Binding121.description.length > 0
              ? ((chunkDI55MBZ5Binding121.shape = chunkDI55MBZ5Binding19),
                chunkDI55MBZ5Binding121.description === chunkDI55MBZ5Binding115
                  ? (chunkDI55MBZ5Binding121.description = [
                      chunkDI55MBZ5Input14.description,
                    ])
                  : (chunkDI55MBZ5Binding121.description = [
                      chunkDI55MBZ5Binding121.description,
                      chunkDI55MBZ5Input14.description,
                    ]))
              : ((chunkDI55MBZ5Binding121.shape = chunkDI55MBZ5Binding18),
                (chunkDI55MBZ5Binding121.description =
                  chunkDI55MBZ5Input14.description)),
          (chunkDI55MBZ5Binding121.description = s.sanitizeTextOrArray(
            chunkDI55MBZ5Binding121.description,
            chunkDI55MBZ5Binding119,
          )));
        chunkDI55MBZ5Binding121.description?.length === 1 &&
          chunkDI55MBZ5Binding121.shape === chunkDI55MBZ5Binding19 &&
          (chunkDI55MBZ5Binding121.type === "group"
            ? (chunkDI55MBZ5Binding121.shape = chunkDI55MBZ5Binding23)
            : (chunkDI55MBZ5Binding121.shape = chunkDI55MBZ5Binding18));
        !chunkDI55MBZ5Binding121.type &&
          chunkDI55MBZ5Input14.doc &&
          (logger.info(
            "Setting cluster for XCX",
            chunkDI55MBZ5Binding115,
            chunkDI55MBZ5Binding43(chunkDI55MBZ5Input14),
          ),
          (chunkDI55MBZ5Binding121.type = "group"),
          (chunkDI55MBZ5Binding121.isGroup = true),
          (chunkDI55MBZ5Binding121.dir =
            chunkDI55MBZ5Binding43(chunkDI55MBZ5Input14)),
          (chunkDI55MBZ5Binding121.shape =
            chunkDI55MBZ5Input14.type === chunkDI55MBZ5Binding12
              ? chunkDI55MBZ5Binding22
              : chunkDI55MBZ5Binding23),
          (chunkDI55MBZ5Binding121.cssClasses = `${chunkDI55MBZ5Binding121.cssClasses} ${chunkDI55MBZ5Binding32} ${chunkDI55MBZ5Input18 ? chunkDI55MBZ5Binding33 : ""}`));
        let chunkDI55MBZ5Binding122 = {
          labelStyle: "",
          shape: chunkDI55MBZ5Binding121.shape,
          label: chunkDI55MBZ5Binding121.description,
          cssClasses: chunkDI55MBZ5Binding121.cssClasses,
          cssCompiledStyles: [],
          cssStyles: chunkDI55MBZ5Binding121.cssStyles,
          id: chunkDI55MBZ5Binding115,
          dir: chunkDI55MBZ5Binding121.dir,
          domId: chunkDI55MBZ5Helper1(
            chunkDI55MBZ5Binding115,
            chunkDI55MBZ5Binding41,
          ),
          type: chunkDI55MBZ5Binding121.type,
          isGroup: chunkDI55MBZ5Binding121.type === "group",
          padding: 8,
          rx: 10,
          ry: 10,
          look: chunkDI55MBZ5Input19,
        };
        if (
          (chunkDI55MBZ5Binding122.shape === chunkDI55MBZ5Binding22 &&
            (chunkDI55MBZ5Binding122.label = ""),
          chunkDI55MBZ5Input13 &&
            chunkDI55MBZ5Input13.id !== "root" &&
            (logger.trace(
              "Setting node ",
              chunkDI55MBZ5Binding115,
              " to be child of its parent ",
              chunkDI55MBZ5Input13.id,
            ),
            (chunkDI55MBZ5Binding122.parentId = chunkDI55MBZ5Input13.id)),
          (chunkDI55MBZ5Binding122.centerLabel = true),
          chunkDI55MBZ5Input14.note)
        ) {
          let chunkDI55MBZ5Binding130 = {
              labelStyle: "",
              shape: chunkDI55MBZ5Binding24,
              label: chunkDI55MBZ5Input14.note.text,
              cssClasses: chunkDI55MBZ5Binding31,
              cssStyles: [],
              cssCompiledStyles: [],
              id:
                chunkDI55MBZ5Binding115 +
                chunkDI55MBZ5Binding37 +
                "-" +
                chunkDI55MBZ5Binding41,
              domId: chunkDI55MBZ5Helper1(
                chunkDI55MBZ5Binding115,
                chunkDI55MBZ5Binding41,
                chunkDI55MBZ5Binding35,
              ),
              type: chunkDI55MBZ5Binding121.type,
              isGroup: chunkDI55MBZ5Binding121.type === "group",
              padding: chunkDI55MBZ5Binding119.flowchart?.padding,
              look: chunkDI55MBZ5Input19,
              position: chunkDI55MBZ5Input14.note.position,
            },
            chunkDI55MBZ5Binding131 =
              chunkDI55MBZ5Binding115 + chunkDI55MBZ5Binding38,
            chunkDI55MBZ5Binding132 = {
              labelStyle: "",
              shape: chunkDI55MBZ5Binding25,
              label: chunkDI55MBZ5Input14.note.text,
              cssClasses: chunkDI55MBZ5Binding121.cssClasses,
              cssStyles: [],
              id: chunkDI55MBZ5Binding115 + chunkDI55MBZ5Binding38,
              domId: chunkDI55MBZ5Helper1(
                chunkDI55MBZ5Binding115,
                chunkDI55MBZ5Binding41,
                chunkDI55MBZ5Binding34,
              ),
              type: "group",
              isGroup: true,
              padding: 16,
              look: chunkDI55MBZ5Input19,
              position: chunkDI55MBZ5Input14.note.position,
            };
          chunkDI55MBZ5Binding41++;
          chunkDI55MBZ5Binding132.id = chunkDI55MBZ5Binding131;
          chunkDI55MBZ5Binding130.parentId = chunkDI55MBZ5Binding131;
          chunkDI55MBZ5Helper2(
            chunkDI55MBZ5Input16,
            chunkDI55MBZ5Binding132,
            chunkDI55MBZ5Input20,
          );
          chunkDI55MBZ5Helper2(
            chunkDI55MBZ5Input16,
            chunkDI55MBZ5Binding130,
            chunkDI55MBZ5Input20,
          );
          chunkDI55MBZ5Helper2(
            chunkDI55MBZ5Input16,
            chunkDI55MBZ5Binding122,
            chunkDI55MBZ5Input20,
          );
          let chunkDI55MBZ5Binding133 = chunkDI55MBZ5Binding115,
            chunkDI55MBZ5Binding134 = chunkDI55MBZ5Binding130.id;
          chunkDI55MBZ5Input14.note.position === "left of" &&
            ((chunkDI55MBZ5Binding133 = chunkDI55MBZ5Binding130.id),
            (chunkDI55MBZ5Binding134 = chunkDI55MBZ5Binding115));
          chunkDI55MBZ5Input17.push({
            id: chunkDI55MBZ5Binding133 + "-" + chunkDI55MBZ5Binding134,
            start: chunkDI55MBZ5Binding133,
            end: chunkDI55MBZ5Binding134,
            arrowhead: "none",
            arrowTypeEnd: "",
            style: chunkDI55MBZ5Binding13,
            labelStyle: "",
            classes: chunkDI55MBZ5Binding30,
            arrowheadStyle: chunkDI55MBZ5Binding14,
            labelpos: chunkDI55MBZ5Binding15,
            labelType: chunkDI55MBZ5Binding16,
            thickness: chunkDI55MBZ5Binding17,
            look: chunkDI55MBZ5Input19,
          });
        } else
          chunkDI55MBZ5Helper2(
            chunkDI55MBZ5Input16,
            chunkDI55MBZ5Binding122,
            chunkDI55MBZ5Input20,
          );
      }
      chunkDI55MBZ5Input14.doc &&
        (logger.trace("Adding nodes children "),
        chunkDI55MBZ5Binding42(
          chunkDI55MBZ5Input14,
          chunkDI55MBZ5Input14.doc,
          chunkDI55MBZ5Input15,
          chunkDI55MBZ5Input16,
          chunkDI55MBZ5Input17,
          !chunkDI55MBZ5Input18,
          chunkDI55MBZ5Input19,
          chunkDI55MBZ5Input20,
        ));
    },
    "dataFetcher",
  );
  chunkDI55MBZ5Binding45 = defineFunctionName(() => {
    chunkDI55MBZ5Binding40.clear();
    chunkDI55MBZ5Binding41 = 0;
  }, "reset");
  chunkDI55MBZ5Binding46 = {
    START_NODE: "[*]",
    START_TYPE: "start",
    END_NODE: "[*]",
    END_TYPE: "end",
    COLOR_KEYWORD: "color",
    FILL_KEYWORD: "fill",
    BG_FILL: "bgFill",
    STYLECLASS_SEP: ",",
  };
  chunkDI55MBZ5Binding47 = defineFunctionName(
    () => new Map(),
    "newClassesList",
  );
  chunkDI55MBZ5Binding48 = defineFunctionName(
    () => ({
      relations: [],
      states: new Map(),
      documents: {},
    }),
    "newDoc",
  );
  $ = defineFunctionName(
    (chunkDI55MBZ5Input113) =>
      JSON.parse(JSON.stringify(chunkDI55MBZ5Input113)),
    "clone",
  );
  chunkDI55MBZ5T = class {
    constructor(chunkDI55MBZ5Input49) {
      this.version = chunkDI55MBZ5Input49;
      this.nodes = [];
      this.edges = [];
      this.rootDoc = [];
      this.classes = chunkDI55MBZ5Binding47();
      this.documents = {
        root: chunkDI55MBZ5Binding48(),
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.dividerCnt = 0;
      this.links = new Map();
      this.getAccTitle = _chunkABZYJK2DV;
      this.setAccTitle = V;
      this.getAccDescription = _;
      this.setAccDescription = B;
      this.setDiagramTitle = W;
      this.getDiagramTitle = C;
      this.clear();
      this.setRootDoc = this.setRootDoc.bind(this);
      this.getDividerId = this.getDividerId.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.trimColon = this.trimColon.bind(this);
    }
    static {
      defineFunctionName(this, "StateDB");
    }
    static {
      this.relationType = {
        AGGREGATION: 0,
        EXTENSION: 1,
        COMPOSITION: 2,
        DEPENDENCY: 3,
      };
    }
    extract(chunkDI55MBZ5Input36) {
      this.clear(true);
      for (let chunkDI55MBZ5Binding159 of Array.isArray(chunkDI55MBZ5Input36)
        ? chunkDI55MBZ5Input36
        : chunkDI55MBZ5Input36.doc)
        switch (chunkDI55MBZ5Binding159.stmt) {
          case chunkDI55MBZ5Binding5:
            this.addState(
              chunkDI55MBZ5Binding159.id.trim(),
              chunkDI55MBZ5Binding159.type,
              chunkDI55MBZ5Binding159.doc,
              chunkDI55MBZ5Binding159.description,
              chunkDI55MBZ5Binding159.note,
            );
            break;
          case chunkDI55MBZ5Binding7:
            this.addRelation(
              chunkDI55MBZ5Binding159.state1,
              chunkDI55MBZ5Binding159.state2,
              chunkDI55MBZ5Binding159.description,
            );
            break;
          case chunkDI55MBZ5Binding8:
            this.addStyleClass(
              chunkDI55MBZ5Binding159.id.trim(),
              chunkDI55MBZ5Binding159.classes,
            );
            break;
          case chunkDI55MBZ5Binding9:
            this.handleStyleDef(chunkDI55MBZ5Binding159);
            break;
          case chunkDI55MBZ5Binding10:
            this.setCssClass(
              chunkDI55MBZ5Binding159.id.trim(),
              chunkDI55MBZ5Binding159.styleClass,
            );
            break;
          case "click":
            this.addLink(
              chunkDI55MBZ5Binding159.id,
              chunkDI55MBZ5Binding159.url,
              chunkDI55MBZ5Binding159.tooltip,
            );
            break;
        }
      let chunkDI55MBZ5Binding135 = this.getStates(),
        chunkDI55MBZ5Binding136 = _chunkABZYJK2DB();
      chunkDI55MBZ5Binding45();
      chunkDI55MBZ5Binding44(
        undefined,
        this.getRootDocV2(),
        chunkDI55MBZ5Binding135,
        this.nodes,
        this.edges,
        true,
        chunkDI55MBZ5Binding136.look,
        this.classes,
      );
      for (let chunkDI55MBZ5Binding168 of this.nodes)
        if (Array.isArray(chunkDI55MBZ5Binding168.label)) {
          if (
            ((chunkDI55MBZ5Binding168.description =
              chunkDI55MBZ5Binding168.label.slice(1)),
            chunkDI55MBZ5Binding168.isGroup &&
              chunkDI55MBZ5Binding168.description.length > 0)
          )
            throw Error(
              `Group nodes can only have label. Remove the additional description for node [${chunkDI55MBZ5Binding168.id}]`,
            );
          chunkDI55MBZ5Binding168.label = chunkDI55MBZ5Binding168.label[0];
        }
    }
    handleStyleDef(chunkDI55MBZ5Input63) {
      let chunkDI55MBZ5Binding169 = chunkDI55MBZ5Input63.id.trim().split(","),
        chunkDI55MBZ5Binding170 = chunkDI55MBZ5Input63.styleClass.split(",");
      for (let chunkDI55MBZ5Binding177 of chunkDI55MBZ5Binding169) {
        let chunkDI55MBZ5Binding178 = this.getState(chunkDI55MBZ5Binding177);
        if (!chunkDI55MBZ5Binding178) {
          let chunkDI55MBZ5Binding194 = chunkDI55MBZ5Binding177.trim();
          this.addState(chunkDI55MBZ5Binding194);
          chunkDI55MBZ5Binding178 = this.getState(chunkDI55MBZ5Binding194);
        }
        chunkDI55MBZ5Binding178 &&
          (chunkDI55MBZ5Binding178.styles = chunkDI55MBZ5Binding170.map(
            (item) => item.replace(/;/g, "")?.trim(),
          ));
      }
    }
    setRootDoc(chunkDI55MBZ5Input67) {
      logger.info("Setting root doc", chunkDI55MBZ5Input67);
      this.rootDoc = chunkDI55MBZ5Input67;
      this.version === 1
        ? this.extract(chunkDI55MBZ5Input67)
        : this.extract(this.getRootDocV2());
    }
    docTranslator(
      chunkDI55MBZ5Input46,
      chunkDI55MBZ5Input47,
      chunkDI55MBZ5Input48,
    ) {
      if (chunkDI55MBZ5Input47.stmt === chunkDI55MBZ5Binding7) {
        this.docTranslator(
          chunkDI55MBZ5Input46,
          chunkDI55MBZ5Input47.state1,
          true,
        );
        this.docTranslator(
          chunkDI55MBZ5Input46,
          chunkDI55MBZ5Input47.state2,
          false,
        );
        return;
      }
      if (
        (chunkDI55MBZ5Input47.stmt === chunkDI55MBZ5Binding5 &&
          (chunkDI55MBZ5Input47.id === chunkDI55MBZ5Binding46.START_NODE
            ? ((chunkDI55MBZ5Input47.id =
                chunkDI55MBZ5Input46.id +
                (chunkDI55MBZ5Input48 ? "_start" : "_end")),
              (chunkDI55MBZ5Input47.start = chunkDI55MBZ5Input48))
            : (chunkDI55MBZ5Input47.id = chunkDI55MBZ5Input47.id.trim())),
        (chunkDI55MBZ5Input47.stmt !== chunkDI55MBZ5Binding6 &&
          chunkDI55MBZ5Input47.stmt !== chunkDI55MBZ5Binding5) ||
          !chunkDI55MBZ5Input47.doc)
      )
        return;
      let chunkDI55MBZ5Binding153 = [],
        chunkDI55MBZ5Binding154 = [];
      for (let chunkDI55MBZ5Binding187 of chunkDI55MBZ5Input47.doc)
        if (chunkDI55MBZ5Binding187.type === chunkDI55MBZ5Binding12) {
          let chunkDI55MBZ5Binding196 = $(chunkDI55MBZ5Binding187);
          chunkDI55MBZ5Binding196.doc = $(chunkDI55MBZ5Binding154);
          chunkDI55MBZ5Binding153.push(chunkDI55MBZ5Binding196);
          chunkDI55MBZ5Binding154 = [];
        } else chunkDI55MBZ5Binding154.push(chunkDI55MBZ5Binding187);
      if (
        chunkDI55MBZ5Binding153.length > 0 &&
        chunkDI55MBZ5Binding154.length > 0
      ) {
        let chunkDI55MBZ5Binding192 = {
          stmt: chunkDI55MBZ5Binding5,
          id: chunkS3R3BYOJO(),
          type: "divider",
          doc: $(chunkDI55MBZ5Binding154),
        };
        chunkDI55MBZ5Binding153.push($(chunkDI55MBZ5Binding192));
        chunkDI55MBZ5Input47.doc = chunkDI55MBZ5Binding153;
      }
      chunkDI55MBZ5Input47.doc.forEach((item) =>
        this.docTranslator(chunkDI55MBZ5Input47, item, true),
      );
    }
    getRootDocV2() {
      return (
        this.docTranslator(
          {
            id: chunkDI55MBZ5Binding6,
            stmt: chunkDI55MBZ5Binding6,
          },
          {
            id: chunkDI55MBZ5Binding6,
            stmt: chunkDI55MBZ5Binding6,
            doc: this.rootDoc,
          },
          true,
        ),
        {
          id: chunkDI55MBZ5Binding6,
          doc: this.rootDoc,
        }
      );
    }
    addState(
      chunkDI55MBZ5Input28,
      chunkDI55MBZ5Input29 = chunkDI55MBZ5Binding11,
      chunkDI55MBZ5Input30 = undefined,
      chunkDI55MBZ5Input31 = undefined,
      chunkDI55MBZ5Input32 = undefined,
      chunkDI55MBZ5Input33 = undefined,
      chunkDI55MBZ5Input34 = undefined,
      chunkDI55MBZ5Input35 = undefined,
    ) {
      let chunkDI55MBZ5Binding129 = chunkDI55MBZ5Input28?.trim();
      if (!this.currentDocument.states.has(chunkDI55MBZ5Binding129)) {
        logger.info(
          "Adding state ",
          chunkDI55MBZ5Binding129,
          chunkDI55MBZ5Input31,
        );
        this.currentDocument.states.set(chunkDI55MBZ5Binding129, {
          stmt: chunkDI55MBZ5Binding5,
          id: chunkDI55MBZ5Binding129,
          descriptions: [],
          type: chunkDI55MBZ5Input29,
          doc: chunkDI55MBZ5Input30,
          note: chunkDI55MBZ5Input32,
          classes: [],
          styles: [],
          textStyles: [],
        });
      } else {
        let chunkDI55MBZ5Binding186 = this.currentDocument.states.get(
          chunkDI55MBZ5Binding129,
        );
        if (!chunkDI55MBZ5Binding186)
          throw Error(`State not found: ${chunkDI55MBZ5Binding129}`);
        chunkDI55MBZ5Binding186.doc ||= chunkDI55MBZ5Input30;
        chunkDI55MBZ5Binding186.type ||= chunkDI55MBZ5Input29;
      }
      if (
        (chunkDI55MBZ5Input31 &&
          (logger.info(
            "Setting state description",
            chunkDI55MBZ5Binding129,
            chunkDI55MBZ5Input31,
          ),
          (Array.isArray(chunkDI55MBZ5Input31)
            ? chunkDI55MBZ5Input31
            : [chunkDI55MBZ5Input31]
          ).forEach((item) =>
            this.addDescription(chunkDI55MBZ5Binding129, item.trim()),
          )),
        chunkDI55MBZ5Input32)
      ) {
        let chunkDI55MBZ5Binding183 = this.currentDocument.states.get(
          chunkDI55MBZ5Binding129,
        );
        if (!chunkDI55MBZ5Binding183)
          throw Error(`State not found: ${chunkDI55MBZ5Binding129}`);
        chunkDI55MBZ5Binding183.note = chunkDI55MBZ5Input32;
        chunkDI55MBZ5Binding183.note.text = s.sanitizeText(
          chunkDI55MBZ5Binding183.note.text,
          _chunkABZYJK2DB(),
        );
      }
      chunkDI55MBZ5Input33 &&
        (logger.info(
          "Setting state classes",
          chunkDI55MBZ5Binding129,
          chunkDI55MBZ5Input33,
        ),
        (Array.isArray(chunkDI55MBZ5Input33)
          ? chunkDI55MBZ5Input33
          : [chunkDI55MBZ5Input33]
        ).forEach((item) =>
          this.setCssClass(chunkDI55MBZ5Binding129, item.trim()),
        ));
      chunkDI55MBZ5Input34 &&
        (logger.info(
          "Setting state styles",
          chunkDI55MBZ5Binding129,
          chunkDI55MBZ5Input34,
        ),
        (Array.isArray(chunkDI55MBZ5Input34)
          ? chunkDI55MBZ5Input34
          : [chunkDI55MBZ5Input34]
        ).forEach((item) =>
          this.setStyle(chunkDI55MBZ5Binding129, item.trim()),
        ));
      chunkDI55MBZ5Input35 &&
        (logger.info(
          "Setting state styles",
          chunkDI55MBZ5Binding129,
          chunkDI55MBZ5Input34,
        ),
        (Array.isArray(chunkDI55MBZ5Input35)
          ? chunkDI55MBZ5Input35
          : [chunkDI55MBZ5Input35]
        ).forEach((item) =>
          this.setTextStyle(chunkDI55MBZ5Binding129, item.trim()),
        ));
    }
    clear(chunkDI55MBZ5Input64) {
      this.nodes = [];
      this.edges = [];
      this.documents = {
        root: chunkDI55MBZ5Binding48(),
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.classes = chunkDI55MBZ5Binding47();
      chunkDI55MBZ5Input64 || ((this.links = new Map()), a());
    }
    getState(chunkDI55MBZ5Input103) {
      return this.currentDocument.states.get(chunkDI55MBZ5Input103);
    }
    getStates() {
      return this.currentDocument.states;
    }
    logDocuments() {
      logger.info("Documents = ", this.documents);
    }
    getRelations() {
      return this.currentDocument.relations;
    }
    addLink(chunkDI55MBZ5Input82, chunkDI55MBZ5Input83, chunkDI55MBZ5Input84) {
      this.links.set(chunkDI55MBZ5Input82, {
        url: chunkDI55MBZ5Input83,
        tooltip: chunkDI55MBZ5Input84,
      });
      logger.warn(
        "Adding link",
        chunkDI55MBZ5Input82,
        chunkDI55MBZ5Input83,
        chunkDI55MBZ5Input84,
      );
    }
    getLinks() {
      return this.links;
    }
    startIdIfNeeded(chunkDI55MBZ5Input73 = "") {
      return chunkDI55MBZ5Input73 === chunkDI55MBZ5Binding46.START_NODE
        ? (this.startEndCount++,
          `${chunkDI55MBZ5Binding46.START_TYPE}${this.startEndCount}`)
        : chunkDI55MBZ5Input73;
    }
    startTypeIfNeeded(
      chunkDI55MBZ5Input94 = "",
      chunkDI55MBZ5Input95 = chunkDI55MBZ5Binding11,
    ) {
      return chunkDI55MBZ5Input94 === chunkDI55MBZ5Binding46.START_NODE
        ? chunkDI55MBZ5Binding46.START_TYPE
        : chunkDI55MBZ5Input95;
    }
    endIdIfNeeded(chunkDI55MBZ5Input74 = "") {
      return chunkDI55MBZ5Input74 === chunkDI55MBZ5Binding46.END_NODE
        ? (this.startEndCount++,
          `${chunkDI55MBZ5Binding46.END_TYPE}${this.startEndCount}`)
        : chunkDI55MBZ5Input74;
    }
    endTypeIfNeeded(
      chunkDI55MBZ5Input96 = "",
      chunkDI55MBZ5Input97 = chunkDI55MBZ5Binding11,
    ) {
      return chunkDI55MBZ5Input96 === chunkDI55MBZ5Binding46.END_NODE
        ? chunkDI55MBZ5Binding46.END_TYPE
        : chunkDI55MBZ5Input97;
    }
    addRelationObjs(
      chunkDI55MBZ5Input50,
      chunkDI55MBZ5Input51,
      chunkDI55MBZ5Input52 = "",
    ) {
      let chunkDI55MBZ5Binding155 = this.startIdIfNeeded(
          chunkDI55MBZ5Input50.id.trim(),
        ),
        chunkDI55MBZ5Binding156 = this.startTypeIfNeeded(
          chunkDI55MBZ5Input50.id.trim(),
          chunkDI55MBZ5Input50.type,
        ),
        chunkDI55MBZ5Binding157 = this.startIdIfNeeded(
          chunkDI55MBZ5Input51.id.trim(),
        ),
        chunkDI55MBZ5Binding158 = this.startTypeIfNeeded(
          chunkDI55MBZ5Input51.id.trim(),
          chunkDI55MBZ5Input51.type,
        );
      this.addState(
        chunkDI55MBZ5Binding155,
        chunkDI55MBZ5Binding156,
        chunkDI55MBZ5Input50.doc,
        chunkDI55MBZ5Input50.description,
        chunkDI55MBZ5Input50.note,
        chunkDI55MBZ5Input50.classes,
        chunkDI55MBZ5Input50.styles,
        chunkDI55MBZ5Input50.textStyles,
      );
      this.addState(
        chunkDI55MBZ5Binding157,
        chunkDI55MBZ5Binding158,
        chunkDI55MBZ5Input51.doc,
        chunkDI55MBZ5Input51.description,
        chunkDI55MBZ5Input51.note,
        chunkDI55MBZ5Input51.classes,
        chunkDI55MBZ5Input51.styles,
        chunkDI55MBZ5Input51.textStyles,
      );
      this.currentDocument.relations.push({
        id1: chunkDI55MBZ5Binding155,
        id2: chunkDI55MBZ5Binding157,
        relationTitle: s.sanitizeText(chunkDI55MBZ5Input52, _chunkABZYJK2DB()),
      });
    }
    addRelation(
      chunkDI55MBZ5Input55,
      chunkDI55MBZ5Input56,
      chunkDI55MBZ5Input57,
    ) {
      if (
        typeof chunkDI55MBZ5Input55 == "object" &&
        typeof chunkDI55MBZ5Input56 == "object"
      )
        this.addRelationObjs(
          chunkDI55MBZ5Input55,
          chunkDI55MBZ5Input56,
          chunkDI55MBZ5Input57,
        );
      else if (
        typeof chunkDI55MBZ5Input55 == "string" &&
        typeof chunkDI55MBZ5Input56 == "string"
      ) {
        let chunkDI55MBZ5Binding163 = this.startIdIfNeeded(
            chunkDI55MBZ5Input55.trim(),
          ),
          chunkDI55MBZ5Binding164 =
            this.startTypeIfNeeded(chunkDI55MBZ5Input55),
          chunkDI55MBZ5Binding165 = this.endIdIfNeeded(
            chunkDI55MBZ5Input56.trim(),
          ),
          chunkDI55MBZ5Binding166 = this.endTypeIfNeeded(chunkDI55MBZ5Input56);
        this.addState(chunkDI55MBZ5Binding163, chunkDI55MBZ5Binding164);
        this.addState(chunkDI55MBZ5Binding165, chunkDI55MBZ5Binding166);
        this.currentDocument.relations.push({
          id1: chunkDI55MBZ5Binding163,
          id2: chunkDI55MBZ5Binding165,
          relationTitle: chunkDI55MBZ5Input57
            ? s.sanitizeText(chunkDI55MBZ5Input57, _chunkABZYJK2DB())
            : undefined,
        });
      }
    }
    addDescription(chunkDI55MBZ5Input68, chunkDI55MBZ5Input69) {
      let chunkDI55MBZ5Binding181 =
          this.currentDocument.states.get(chunkDI55MBZ5Input68),
        chunkDI55MBZ5Binding182 = chunkDI55MBZ5Input69.startsWith(":")
          ? chunkDI55MBZ5Input69.replace(":", "").trim()
          : chunkDI55MBZ5Input69;
      chunkDI55MBZ5Binding181?.descriptions?.push(
        s.sanitizeText(chunkDI55MBZ5Binding182, _chunkABZYJK2DB()),
      );
    }
    cleanupLabel(chunkDI55MBZ5Input98) {
      return chunkDI55MBZ5Input98.startsWith(":")
        ? chunkDI55MBZ5Input98.slice(2).trim()
        : chunkDI55MBZ5Input98.trim();
    }
    getDividerId() {
      return (this.dividerCnt++, `divider-id-${this.dividerCnt}`);
    }
    addStyleClass(chunkDI55MBZ5Input58, chunkDI55MBZ5Input59 = "") {
      this.classes.has(chunkDI55MBZ5Input58) ||
        this.classes.set(chunkDI55MBZ5Input58, {
          id: chunkDI55MBZ5Input58,
          styles: [],
          textStyles: [],
        });
      let chunkDI55MBZ5Binding161 = this.classes.get(chunkDI55MBZ5Input58);
      chunkDI55MBZ5Input59 &&
        chunkDI55MBZ5Binding161 &&
        chunkDI55MBZ5Input59
          .split(chunkDI55MBZ5Binding46.STYLECLASS_SEP)
          .forEach((item) => {
            let chunkDI55MBZ5Binding171 = item.replace(/([^;]*);/, "$1").trim();
            if (RegExp(chunkDI55MBZ5Binding46.COLOR_KEYWORD).exec(item)) {
              let chunkDI55MBZ5Binding184 = chunkDI55MBZ5Binding171
                .replace(
                  chunkDI55MBZ5Binding46.FILL_KEYWORD,
                  chunkDI55MBZ5Binding46.BG_FILL,
                )
                .replace(
                  chunkDI55MBZ5Binding46.COLOR_KEYWORD,
                  chunkDI55MBZ5Binding46.FILL_KEYWORD,
                );
              chunkDI55MBZ5Binding161.textStyles.push(chunkDI55MBZ5Binding184);
            }
            chunkDI55MBZ5Binding161.styles.push(chunkDI55MBZ5Binding171);
          });
    }
    getClasses() {
      return this.classes;
    }
    setCssClass(chunkDI55MBZ5Input65, chunkDI55MBZ5Input66) {
      chunkDI55MBZ5Input65.split(",").forEach((item) => {
        let chunkDI55MBZ5Binding180 = this.getState(item);
        if (!chunkDI55MBZ5Binding180) {
          let chunkDI55MBZ5Binding195 = item.trim();
          this.addState(chunkDI55MBZ5Binding195);
          chunkDI55MBZ5Binding180 = this.getState(chunkDI55MBZ5Binding195);
        }
        chunkDI55MBZ5Binding180?.classes?.push(chunkDI55MBZ5Input66);
      });
    }
    setStyle(chunkDI55MBZ5Input106, chunkDI55MBZ5Input107) {
      this.getState(chunkDI55MBZ5Input106)?.styles?.push(chunkDI55MBZ5Input107);
    }
    setTextStyle(chunkDI55MBZ5Input101, chunkDI55MBZ5Input102) {
      this.getState(chunkDI55MBZ5Input101)?.textStyles?.push(
        chunkDI55MBZ5Input102,
      );
    }
    getDirectionStatement() {
      return this.rootDoc.find((item) => item.stmt === chunkDI55MBZ5Binding4);
    }
    getDirection() {
      return this.getDirectionStatement()?.value ?? chunkDI55MBZ5Binding2;
    }
    setDirection(chunkDI55MBZ5Input77) {
      let chunkDI55MBZ5Binding189 = this.getDirectionStatement();
      chunkDI55MBZ5Binding189
        ? (chunkDI55MBZ5Binding189.value = chunkDI55MBZ5Input77)
        : this.rootDoc.unshift({
            stmt: chunkDI55MBZ5Binding4,
            value: chunkDI55MBZ5Input77,
          });
    }
    trimColon(chunkDI55MBZ5Input99) {
      return chunkDI55MBZ5Input99.startsWith(":")
        ? chunkDI55MBZ5Input99.slice(1).trim()
        : chunkDI55MBZ5Input99.trim();
    }
    getData() {
      let chunkDI55MBZ5Binding179 = _chunkABZYJK2DB();
      return {
        nodes: this.nodes,
        edges: this.edges,
        other: {},
        config: chunkDI55MBZ5Binding179,
        direction: chunkDI55MBZ5Binding39(this.getRootDocV2()),
      };
    }
    getConfig() {
      return _chunkABZYJK2DB().state;
    }
  };
  chunkDI55MBZ5A = defineFunctionName(
    (chunkDI55MBZ5Input21) => `
defs #statediagram-barbEnd {
    fill: ${chunkDI55MBZ5Input21.transitionColor};
    stroke: ${chunkDI55MBZ5Input21.transitionColor};
  }
g.stateGroup text {
  fill: ${chunkDI55MBZ5Input21.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${chunkDI55MBZ5Input21.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${chunkDI55MBZ5Input21.stateLabelColor};
}

g.stateGroup rect {
  fill: ${chunkDI55MBZ5Input21.mainBkg};
  stroke: ${chunkDI55MBZ5Input21.nodeBorder};
}

g.stateGroup line {
  stroke: ${chunkDI55MBZ5Input21.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${chunkDI55MBZ5Input21.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${chunkDI55MBZ5Input21.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${chunkDI55MBZ5Input21.noteBorderColor};
  fill: ${chunkDI55MBZ5Input21.noteBkgColor};

  text {
    fill: ${chunkDI55MBZ5Input21.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${chunkDI55MBZ5Input21.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${chunkDI55MBZ5Input21.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${chunkDI55MBZ5Input21.edgeLabelBackground};
  p {
    background-color: ${chunkDI55MBZ5Input21.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${chunkDI55MBZ5Input21.edgeLabelBackground};
    fill: ${chunkDI55MBZ5Input21.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${chunkDI55MBZ5Input21.transitionLabelColor || chunkDI55MBZ5Input21.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${chunkDI55MBZ5Input21.transitionLabelColor || chunkDI55MBZ5Input21.tertiaryTextColor};
}

.stateLabel text {
  fill: ${chunkDI55MBZ5Input21.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${chunkDI55MBZ5Input21.specialStateColor};
  stroke: ${chunkDI55MBZ5Input21.specialStateColor};
}

.node .fork-join {
  fill: ${chunkDI55MBZ5Input21.specialStateColor};
  stroke: ${chunkDI55MBZ5Input21.specialStateColor};
}

.node circle.state-end {
  fill: ${chunkDI55MBZ5Input21.innerEndBackground};
  stroke: ${chunkDI55MBZ5Input21.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${chunkDI55MBZ5Input21.compositeBackground || chunkDI55MBZ5Input21.background};
  // stroke: ${chunkDI55MBZ5Input21.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${chunkDI55MBZ5Input21.stateBkg || chunkDI55MBZ5Input21.mainBkg};
  stroke: ${chunkDI55MBZ5Input21.stateBorder || chunkDI55MBZ5Input21.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${chunkDI55MBZ5Input21.mainBkg};
  stroke: ${chunkDI55MBZ5Input21.stateBorder || chunkDI55MBZ5Input21.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${chunkDI55MBZ5Input21.lineColor};
}

.statediagram-cluster rect {
  fill: ${chunkDI55MBZ5Input21.compositeTitleBackground};
  stroke: ${chunkDI55MBZ5Input21.stateBorder || chunkDI55MBZ5Input21.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${chunkDI55MBZ5Input21.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${chunkDI55MBZ5Input21.stateBorder || chunkDI55MBZ5Input21.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${chunkDI55MBZ5Input21.compositeBackground || chunkDI55MBZ5Input21.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${chunkDI55MBZ5Input21.altBackground ? chunkDI55MBZ5Input21.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${chunkDI55MBZ5Input21.altBackground ? chunkDI55MBZ5Input21.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${chunkDI55MBZ5Input21.noteBkgColor};
  stroke: ${chunkDI55MBZ5Input21.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${chunkDI55MBZ5Input21.noteBkgColor};
  stroke: ${chunkDI55MBZ5Input21.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${chunkDI55MBZ5Input21.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${chunkDI55MBZ5Input21.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${chunkDI55MBZ5Input21.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${chunkDI55MBZ5Input21.lineColor};
  stroke: ${chunkDI55MBZ5Input21.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${chunkDI55MBZ5Input21.textColor};
}
`,
    "getStyles",
  );
});
export { chunkDI55MBZ5A, chunkDI55MBZ5I, chunkDI55MBZ5R, chunkDI55MBZ5T };
