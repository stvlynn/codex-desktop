// Restored from ref/webview/assets/chunk-OYMX7WX6-DGMTtU6t.js
// Mermaid state diagram core (alt: parser + db + renderer + styles). Unblocks stateDiagram-v2 alt wrappers.
// Stage 3 candidate: IMPORT_MAP-ready local deps; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  logger,
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
  s,
  _,
  V,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWO,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { initGetDiagramElementChunk as n, getDiagramElement as t } from "../../diagrams/get-diagram-element-alt";
import { setupViewPortForSVG as chunkEDXVE4YYN, initSetupViewPortForSvgChunk as chunkEDXVE4YYT } from "../../diagrams/setup-viewport-for-svg-alt";
import {
  chunk336JU56OI,
  chunk336JU56ON,
} from "../../diagrams/mermaid-layout-loaders-alt";
function chunkOYMX7WX6Helper1(
  chunkOYMX7WX6Input85 = "",
  chunkOYMX7WX6Input86 = 0,
  chunkOYMX7WX6Input87 = "",
  chunkOYMX7WX6Input88 = chunkOYMX7WX6Binding36,
) {
  return `${_e}-${chunkOYMX7WX6Input85}${chunkOYMX7WX6Input87 !== null && chunkOYMX7WX6Input87.length > 0 ? `${chunkOYMX7WX6Input88}${chunkOYMX7WX6Input87}` : ""}-${chunkOYMX7WX6Input86}`;
}
function chunkOYMX7WX6Helper2(
  chunkOYMX7WX6Input60,
  chunkOYMX7WX6Input61,
  chunkOYMX7WX6Input62,
) {
  if (
    !chunkOYMX7WX6Input61.id ||
    chunkOYMX7WX6Input61.id === "</join></fork>" ||
    chunkOYMX7WX6Input61.id === "</choice>"
  )
    return;
  chunkOYMX7WX6Input61.cssClasses &&
    (Array.isArray(chunkOYMX7WX6Input61.cssCompiledStyles) ||
      (chunkOYMX7WX6Input61.cssCompiledStyles = []),
    chunkOYMX7WX6Input61.cssClasses.split(" ").forEach((item) => {
      let chunkOYMX7WX6Binding192 = chunkOYMX7WX6Input62.get(item);
      chunkOYMX7WX6Binding192 &&
        (chunkOYMX7WX6Input61.cssCompiledStyles = [
          ...(chunkOYMX7WX6Input61.cssCompiledStyles ?? []),
          ...chunkOYMX7WX6Binding192.styles,
        ]);
    }));
  let chunkOYMX7WX6Binding168 = chunkOYMX7WX6Input60.find(
    (item) => item.id === chunkOYMX7WX6Input61.id,
  );
  chunkOYMX7WX6Binding168
    ? Object.assign(chunkOYMX7WX6Binding168, chunkOYMX7WX6Input61)
    : chunkOYMX7WX6Input60.push(chunkOYMX7WX6Input61);
}
function chunkOYMX7WX6Helper3(chunkOYMX7WX6Input111) {
  return chunkOYMX7WX6Input111?.classes?.join(" ") ?? "";
}
function chunkOYMX7WX6Helper4(chunkOYMX7WX6Input112) {
  return chunkOYMX7WX6Input112?.styles ?? [];
}
var chunkOYMX7WX6Binding1,
  chunkOYMX7WX6R,
  chunkOYMX7WX6Binding2,
  chunkOYMX7WX6Binding3,
  chunkOYMX7WX6Binding4,
  chunkOYMX7WX6Binding5,
  chunkOYMX7WX6Binding6,
  chunkOYMX7WX6Binding7,
  chunkOYMX7WX6Binding8,
  chunkOYMX7WX6Binding9,
  chunkOYMX7WX6Binding10,
  chunkOYMX7WX6Binding11,
  chunkOYMX7WX6Binding12,
  chunkOYMX7WX6Binding13,
  chunkOYMX7WX6Binding14,
  chunkOYMX7WX6Binding15,
  chunkOYMX7WX6Binding16,
  chunkOYMX7WX6Binding17,
  chunkOYMX7WX6Binding18,
  chunkOYMX7WX6Binding19,
  chunkOYMX7WX6Binding20,
  chunkOYMX7WX6Binding21,
  chunkOYMX7WX6Binding22,
  chunkOYMX7WX6Binding23,
  chunkOYMX7WX6Binding24,
  chunkOYMX7WX6Binding25,
  chunkOYMX7WX6Binding26,
  chunkOYMX7WX6Binding27,
  chunkOYMX7WX6Binding28,
  chunkOYMX7WX6Binding29,
  chunkOYMX7WX6Binding30,
  chunkOYMX7WX6Binding31,
  chunkOYMX7WX6Binding32,
  chunkOYMX7WX6Binding33,
  chunkOYMX7WX6Binding34,
  chunkOYMX7WX6Binding35,
  _e,
  chunkOYMX7WX6Binding36,
  chunkOYMX7WX6Binding37,
  chunkOYMX7WX6Binding38,
  chunkOYMX7WX6Binding39,
  chunkOYMX7WX6I,
  chunkOYMX7WX6Binding40,
  chunkOYMX7WX6Binding41,
  chunkOYMX7WX6Binding42,
  chunkOYMX7WX6Binding43,
  chunkOYMX7WX6Binding44,
  chunkOYMX7WX6Binding45,
  chunkOYMX7WX6Binding46,
  chunkOYMX7WX6Binding47,
  chunkOYMX7WX6Binding48,
  $,
  chunkOYMX7WX6T,
  chunkOYMX7WX6A;
export const chunkOYMX7WX6N = esmInit(() => {
  n();
  chunkEDXVE4YYT();
  chunk336JU56ON();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  chunkOYMX7WX6Binding1 = (function () {
    var chunkOYMX7WX6Binding49 = defineFunctionName(function (
        chunkOYMX7WX6Input89,
        chunkOYMX7WX6Input90,
        chunkOYMX7WX6Input91,
        chunkOYMX7WX6Input92,
      ) {
        for (
          chunkOYMX7WX6Input91 ||= {},
            chunkOYMX7WX6Input92 = chunkOYMX7WX6Input89.length;
          chunkOYMX7WX6Input92--;
          chunkOYMX7WX6Input91[chunkOYMX7WX6Input89[chunkOYMX7WX6Input92]] =
            chunkOYMX7WX6Input90
        );
        return chunkOYMX7WX6Input91;
      }, "o"),
      chunkOYMX7WX6Binding50 = [1, 2],
      chunkOYMX7WX6Binding51 = [1, 3],
      chunkOYMX7WX6Binding52 = [1, 4],
      chunkOYMX7WX6Binding53 = [2, 4],
      chunkOYMX7WX6Binding54 = [1, 9],
      chunkOYMX7WX6Binding55 = [1, 11],
      chunkOYMX7WX6Binding56 = [1, 16],
      chunkOYMX7WX6Binding57 = [1, 17],
      chunkOYMX7WX6Binding58 = [1, 18],
      chunkOYMX7WX6Binding59 = [1, 19],
      chunkOYMX7WX6Binding60 = [1, 33],
      chunkOYMX7WX6Binding61 = [1, 20],
      chunkOYMX7WX6Binding62 = [1, 21],
      chunkOYMX7WX6Binding63 = [1, 22],
      chunkOYMX7WX6Binding64 = [1, 23],
      chunkOYMX7WX6Binding65 = [1, 24],
      chunkOYMX7WX6Binding66 = [1, 26],
      chunkOYMX7WX6Binding67 = [1, 27],
      chunkOYMX7WX6Binding68 = [1, 28],
      chunkOYMX7WX6Binding69 = [1, 29],
      chunkOYMX7WX6Binding70 = [1, 30],
      chunkOYMX7WX6Binding71 = [1, 31],
      chunkOYMX7WX6Binding72 = [1, 32],
      chunkOYMX7WX6Binding73 = [1, 35],
      chunkOYMX7WX6Binding74 = [1, 36],
      chunkOYMX7WX6Binding75 = [1, 37],
      _chunkOYMX7WX6R = [1, 38],
      chunkOYMX7WX6Binding76 = [1, 34],
      chunkOYMX7WX6Binding77 = [
        1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41,
        45, 48, 51, 52, 53, 54, 57,
      ],
      chunkOYMX7WX6Binding78 = [
        1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37,
        38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57,
      ],
      chunkOYMX7WX6Binding79 = [
        4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41,
        45, 48, 51, 52, 53, 54, 57,
      ],
      chunkOYMX7WX6Binding80 = {
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
          chunkOYMX7WX6Input5,
          chunkOYMX7WX6Input6,
          chunkOYMX7WX6Input7,
          chunkOYMX7WX6Input8,
          chunkOYMX7WX6Input9,
          chunkOYMX7WX6Input10,
          chunkOYMX7WX6Input11,
        ) {
          var chunkOYMX7WX6Binding81 = chunkOYMX7WX6Input10.length - 1;
          switch (chunkOYMX7WX6Input9) {
            case 3:
              return (
                chunkOYMX7WX6Input8.setRootDoc(
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                ),
                chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81]
              );
            case 4:
              this.$ = [];
              break;
            case 5:
              chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81] != "nl" &&
                (chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1].push(
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                ),
                (this.$ = chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1]));
              break;
            case 6:
            case 7:
              this.$ = chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81];
              break;
            case 8:
              this.$ = "nl";
              break;
            case 12:
              this.$ = chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81];
              break;
            case 13:
              let chunkOYMX7WX6Binding85 =
                chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1];
              chunkOYMX7WX6Binding85.description =
                chunkOYMX7WX6Input8.trimColon(
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                );
              this.$ = chunkOYMX7WX6Binding85;
              break;
            case 14:
              this.$ = {
                stmt: "relation",
                state1: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2],
                state2: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
              };
              break;
            case 15:
              let chunkOYMX7WX6Binding86 = chunkOYMX7WX6Input8.trimColon(
                chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
              );
              this.$ = {
                stmt: "relation",
                state1: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 3],
                state2: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1],
                description: chunkOYMX7WX6Binding86,
              };
              break;
            case 19:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 3],
                type: "default",
                description: "",
                doc: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1],
              };
              break;
            case 20:
              var chunkOYMX7WX6Binding82 =
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                chunkOYMX7WX6Binding83 =
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2].trim();
              if (chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].match(":")) {
                var chunkOYMX7WX6Binding84 =
                  chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].split(":");
                chunkOYMX7WX6Binding82 = chunkOYMX7WX6Binding84[0];
                chunkOYMX7WX6Binding83 = [
                  chunkOYMX7WX6Binding83,
                  chunkOYMX7WX6Binding84[1],
                ];
              }
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Binding82,
                type: "default",
                description: chunkOYMX7WX6Binding83,
              };
              break;
            case 21:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 3],
                type: "default",
                description: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 5],
                doc: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1],
              };
              break;
            case 22:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                type: "fork",
              };
              break;
            case 23:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                type: "join",
              };
              break;
            case 24:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81],
                type: "choice",
              };
              break;
            case 25:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input8.getDividerId(),
                type: "divider",
              };
              break;
            case 26:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1].trim(),
                note: {
                  position:
                    chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2].trim(),
                  text: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim(),
                },
              };
              break;
            case 29:
              this.$ = chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim();
              chunkOYMX7WX6Input8.setAccTitle(this.$);
              break;
            case 30:
            case 31:
              this.$ = chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim();
              chunkOYMX7WX6Input8.setAccDescription(this.$);
              break;
            case 32:
              this.$ = {
                stmt: "click",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 3],
                url: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2],
                tooltip: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1],
              };
              break;
            case 33:
              this.$ = {
                stmt: "click",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 3],
                url: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1],
                tooltip: "",
              };
              break;
            case 34:
            case 35:
              this.$ = {
                stmt: "classDef",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1].trim(),
                classes: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim(),
              };
              break;
            case 36:
              this.$ = {
                stmt: "style",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1].trim(),
                styleClass: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim(),
              };
              break;
            case 37:
              this.$ = {
                stmt: "applyClass",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 1].trim(),
                styleClass: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim(),
              };
              break;
            case 38:
              chunkOYMX7WX6Input8.setDirection("TB");
              this.$ = {
                stmt: "dir",
                value: "TB",
              };
              break;
            case 39:
              chunkOYMX7WX6Input8.setDirection("BT");
              this.$ = {
                stmt: "dir",
                value: "BT",
              };
              break;
            case 40:
              chunkOYMX7WX6Input8.setDirection("RL");
              this.$ = {
                stmt: "dir",
                value: "RL",
              };
              break;
            case 41:
              chunkOYMX7WX6Input8.setDirection("LR");
              this.$ = {
                stmt: "dir",
                value: "LR",
              };
              break;
            case 44:
            case 45:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim(),
                type: "default",
                description: "",
              };
              break;
            case 46:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2].trim(),
                classes: [chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim()],
                type: "default",
                description: "",
              };
              break;
            case 47:
              this.$ = {
                stmt: "state",
                id: chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81 - 2].trim(),
                classes: [chunkOYMX7WX6Input10[chunkOYMX7WX6Binding81].trim()],
                type: "default",
                description: "",
              };
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: chunkOYMX7WX6Binding50,
            5: chunkOYMX7WX6Binding51,
            6: chunkOYMX7WX6Binding52,
          },
          {
            1: [3],
          },
          {
            3: 5,
            4: chunkOYMX7WX6Binding50,
            5: chunkOYMX7WX6Binding51,
            6: chunkOYMX7WX6Binding52,
          },
          {
            3: 6,
            4: chunkOYMX7WX6Binding50,
            5: chunkOYMX7WX6Binding51,
            6: chunkOYMX7WX6Binding52,
          },
          chunkOYMX7WX6Binding49(
            [
              1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38,
              41, 45, 48, 51, 52, 53, 54, 57,
            ],
            chunkOYMX7WX6Binding53,
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
            4: chunkOYMX7WX6Binding54,
            5: chunkOYMX7WX6Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkOYMX7WX6Binding56,
            17: chunkOYMX7WX6Binding57,
            19: chunkOYMX7WX6Binding58,
            22: chunkOYMX7WX6Binding59,
            24: chunkOYMX7WX6Binding60,
            25: chunkOYMX7WX6Binding61,
            26: chunkOYMX7WX6Binding62,
            27: chunkOYMX7WX6Binding63,
            28: chunkOYMX7WX6Binding64,
            29: chunkOYMX7WX6Binding65,
            32: 25,
            33: chunkOYMX7WX6Binding66,
            35: chunkOYMX7WX6Binding67,
            37: chunkOYMX7WX6Binding68,
            38: chunkOYMX7WX6Binding69,
            41: chunkOYMX7WX6Binding70,
            45: chunkOYMX7WX6Binding71,
            48: chunkOYMX7WX6Binding72,
            51: chunkOYMX7WX6Binding73,
            52: chunkOYMX7WX6Binding74,
            53: chunkOYMX7WX6Binding75,
            54: _chunkOYMX7WX6R,
            57: chunkOYMX7WX6Binding76,
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 5]),
          {
            9: 39,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkOYMX7WX6Binding56,
            17: chunkOYMX7WX6Binding57,
            19: chunkOYMX7WX6Binding58,
            22: chunkOYMX7WX6Binding59,
            24: chunkOYMX7WX6Binding60,
            25: chunkOYMX7WX6Binding61,
            26: chunkOYMX7WX6Binding62,
            27: chunkOYMX7WX6Binding63,
            28: chunkOYMX7WX6Binding64,
            29: chunkOYMX7WX6Binding65,
            32: 25,
            33: chunkOYMX7WX6Binding66,
            35: chunkOYMX7WX6Binding67,
            37: chunkOYMX7WX6Binding68,
            38: chunkOYMX7WX6Binding69,
            41: chunkOYMX7WX6Binding70,
            45: chunkOYMX7WX6Binding71,
            48: chunkOYMX7WX6Binding72,
            51: chunkOYMX7WX6Binding73,
            52: chunkOYMX7WX6Binding74,
            53: chunkOYMX7WX6Binding75,
            54: _chunkOYMX7WX6R,
            57: chunkOYMX7WX6Binding76,
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 7]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 8]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 9]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 10]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 11]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 12], {
            14: [1, 40],
            15: [1, 41],
          }),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 16]),
          {
            18: [1, 42],
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 18], {
            20: [1, 43],
          }),
          {
            23: [1, 44],
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 22]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 23]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 24]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 25]),
          {
            30: 45,
            31: [1, 46],
            59: [1, 47],
            60: [1, 48],
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 28]),
          {
            34: [1, 49],
          },
          {
            36: [1, 50],
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 31]),
          {
            13: 51,
            24: chunkOYMX7WX6Binding60,
            57: chunkOYMX7WX6Binding76,
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
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding78, [2, 44], {
            58: [1, 56],
          }),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding78, [2, 45], {
            58: [1, 57],
          }),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 38]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 39]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 40]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 41]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 6]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 13]),
          {
            13: 58,
            24: chunkOYMX7WX6Binding60,
            57: chunkOYMX7WX6Binding76,
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 17]),
          chunkOYMX7WX6Binding49(
            chunkOYMX7WX6Binding79,
            chunkOYMX7WX6Binding53,
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
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 29]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 30]),
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
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 14], {
            14: [1, 71],
          }),
          {
            4: chunkOYMX7WX6Binding54,
            5: chunkOYMX7WX6Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkOYMX7WX6Binding56,
            17: chunkOYMX7WX6Binding57,
            19: chunkOYMX7WX6Binding58,
            21: [1, 72],
            22: chunkOYMX7WX6Binding59,
            24: chunkOYMX7WX6Binding60,
            25: chunkOYMX7WX6Binding61,
            26: chunkOYMX7WX6Binding62,
            27: chunkOYMX7WX6Binding63,
            28: chunkOYMX7WX6Binding64,
            29: chunkOYMX7WX6Binding65,
            32: 25,
            33: chunkOYMX7WX6Binding66,
            35: chunkOYMX7WX6Binding67,
            37: chunkOYMX7WX6Binding68,
            38: chunkOYMX7WX6Binding69,
            41: chunkOYMX7WX6Binding70,
            45: chunkOYMX7WX6Binding71,
            48: chunkOYMX7WX6Binding72,
            51: chunkOYMX7WX6Binding73,
            52: chunkOYMX7WX6Binding74,
            53: chunkOYMX7WX6Binding75,
            54: _chunkOYMX7WX6R,
            57: chunkOYMX7WX6Binding76,
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 20], {
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
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 34]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 35]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 36]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 37]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding78, [2, 46]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding78, [2, 47]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 15]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 19]),
          chunkOYMX7WX6Binding49(
            chunkOYMX7WX6Binding79,
            chunkOYMX7WX6Binding53,
            {
              7: 78,
            },
          ),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 26]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 27]),
          {
            5: [1, 79],
          },
          {
            5: [1, 80],
          },
          {
            4: chunkOYMX7WX6Binding54,
            5: chunkOYMX7WX6Binding55,
            8: 8,
            9: 10,
            10: 12,
            11: 13,
            12: 14,
            13: 15,
            16: chunkOYMX7WX6Binding56,
            17: chunkOYMX7WX6Binding57,
            19: chunkOYMX7WX6Binding58,
            21: [1, 81],
            22: chunkOYMX7WX6Binding59,
            24: chunkOYMX7WX6Binding60,
            25: chunkOYMX7WX6Binding61,
            26: chunkOYMX7WX6Binding62,
            27: chunkOYMX7WX6Binding63,
            28: chunkOYMX7WX6Binding64,
            29: chunkOYMX7WX6Binding65,
            32: 25,
            33: chunkOYMX7WX6Binding66,
            35: chunkOYMX7WX6Binding67,
            37: chunkOYMX7WX6Binding68,
            38: chunkOYMX7WX6Binding69,
            41: chunkOYMX7WX6Binding70,
            45: chunkOYMX7WX6Binding71,
            48: chunkOYMX7WX6Binding72,
            51: chunkOYMX7WX6Binding73,
            52: chunkOYMX7WX6Binding74,
            53: chunkOYMX7WX6Binding75,
            54: _chunkOYMX7WX6R,
            57: chunkOYMX7WX6Binding76,
          },
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 32]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 33]),
          chunkOYMX7WX6Binding49(chunkOYMX7WX6Binding77, [2, 21]),
        ],
        defaultActions: {
          5: [2, 1],
          6: [2, 2],
          47: [2, 48],
          48: [2, 49],
        },
        parseError: defineFunctionName(function (
          chunkOYMX7WX6Input71,
          chunkOYMX7WX6Input72,
        ) {
          if (chunkOYMX7WX6Input72.recoverable)
            this.trace(chunkOYMX7WX6Input71);
          else {
            var chunkOYMX7WX6Binding186 = Error(chunkOYMX7WX6Input71);
            throw (
              (chunkOYMX7WX6Binding186.hash = chunkOYMX7WX6Input72),
              chunkOYMX7WX6Binding186
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (chunkOYMX7WX6Input12) {
          var chunkOYMX7WX6Binding87 = this,
            chunkOYMX7WX6Binding88 = [0],
            chunkOYMX7WX6Binding89 = [],
            chunkOYMX7WX6Binding90 = [null],
            chunkOYMX7WX6Binding91 = [],
            chunkOYMX7WX6Binding92 = this.table,
            chunkOYMX7WX6Binding93 = "",
            chunkOYMX7WX6Binding94 = 0,
            chunkOYMX7WX6Binding95 = 0,
            chunkOYMX7WX6Binding96 = 0,
            chunkOYMX7WX6Binding99 = chunkOYMX7WX6Binding91.slice.call(
              arguments,
              1,
            ),
            chunkOYMX7WX6Binding100 = Object.create(this.lexer),
            chunkOYMX7WX6Binding101 = {
              yy: {},
            };
          for (var chunkOYMX7WX6Binding102 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              chunkOYMX7WX6Binding102,
            ) &&
              (chunkOYMX7WX6Binding101.yy[chunkOYMX7WX6Binding102] =
                this.yy[chunkOYMX7WX6Binding102]);
          chunkOYMX7WX6Binding100.setInput(
            chunkOYMX7WX6Input12,
            chunkOYMX7WX6Binding101.yy,
          );
          chunkOYMX7WX6Binding101.yy.lexer = chunkOYMX7WX6Binding100;
          chunkOYMX7WX6Binding101.yy.parser = this;
          chunkOYMX7WX6Binding100.yylloc === undefined &&
            (chunkOYMX7WX6Binding100.yylloc = {});
          var chunkOYMX7WX6Binding103 = chunkOYMX7WX6Binding100.yylloc;
          chunkOYMX7WX6Binding91.push(chunkOYMX7WX6Binding103);
          var chunkOYMX7WX6Binding104 =
            chunkOYMX7WX6Binding100.options &&
            chunkOYMX7WX6Binding100.options.ranges;
          typeof chunkOYMX7WX6Binding101.yy.parseError == "function"
            ? (this.parseError = chunkOYMX7WX6Binding101.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function chunkOYMX7WX6Helper6(chunkOYMX7WX6Input93) {
            chunkOYMX7WX6Binding88.length -= 2 * chunkOYMX7WX6Input93;
            chunkOYMX7WX6Binding90.length -= chunkOYMX7WX6Input93;
            chunkOYMX7WX6Binding91.length -= chunkOYMX7WX6Input93;
          }
          defineFunctionName(chunkOYMX7WX6Helper6, "popStack");
          function chunkOYMX7WX6Helper7() {
            var chunkOYMX7WX6Binding174 =
              chunkOYMX7WX6Binding89.pop() ||
              chunkOYMX7WX6Binding100.lex() ||
              1;
            return (
              typeof chunkOYMX7WX6Binding174 != "number" &&
                (chunkOYMX7WX6Binding174 instanceof Array &&
                  ((chunkOYMX7WX6Binding89 = chunkOYMX7WX6Binding174),
                  (chunkOYMX7WX6Binding174 = chunkOYMX7WX6Binding89.pop())),
                (chunkOYMX7WX6Binding174 =
                  chunkOYMX7WX6Binding87.symbols_[chunkOYMX7WX6Binding174] ||
                  chunkOYMX7WX6Binding174)),
              chunkOYMX7WX6Binding174
            );
          }
          defineFunctionName(chunkOYMX7WX6Helper7, "lex");
          for (
            var chunkOYMX7WX6Binding105,
              chunkOYMX7WX6Binding106,
              chunkOYMX7WX6Binding107,
              chunkOYMX7WX6Binding108,
              chunkOYMX7WX6Binding109,
              chunkOYMX7WX6Binding110 = {},
              __chunkOYMX7WX6R,
              chunkOYMX7WX6Binding111,
              chunkOYMX7WX6Binding112,
              chunkOYMX7WX6Binding113;
            ;
          ) {
            if (
              ((chunkOYMX7WX6Binding107 =
                chunkOYMX7WX6Binding88[chunkOYMX7WX6Binding88.length - 1]),
              this.defaultActions[chunkOYMX7WX6Binding107]
                ? (chunkOYMX7WX6Binding108 =
                    this.defaultActions[chunkOYMX7WX6Binding107])
                : ((chunkOYMX7WX6Binding105 ??= chunkOYMX7WX6Helper7()),
                  (chunkOYMX7WX6Binding108 =
                    chunkOYMX7WX6Binding92[chunkOYMX7WX6Binding107] &&
                    chunkOYMX7WX6Binding92[chunkOYMX7WX6Binding107][
                      chunkOYMX7WX6Binding105
                    ])),
              chunkOYMX7WX6Binding108 === undefined ||
                !chunkOYMX7WX6Binding108.length ||
                !chunkOYMX7WX6Binding108[0])
            ) {
              var chunkOYMX7WX6Binding114 = "";
              for (__chunkOYMX7WX6R in ((chunkOYMX7WX6Binding113 = []),
              chunkOYMX7WX6Binding92[chunkOYMX7WX6Binding107]))
                this.terminals_[__chunkOYMX7WX6R] &&
                  __chunkOYMX7WX6R > 2 &&
                  chunkOYMX7WX6Binding113.push(
                    "'" + this.terminals_[__chunkOYMX7WX6R] + "'",
                  );
              chunkOYMX7WX6Binding114 = chunkOYMX7WX6Binding100.showPosition
                ? "Parse error on line " +
                  (chunkOYMX7WX6Binding94 + 1) +
                  ":\n" +
                  chunkOYMX7WX6Binding100.showPosition() +
                  "\nExpecting " +
                  chunkOYMX7WX6Binding113.join(", ") +
                  ", got '" +
                  (this.terminals_[chunkOYMX7WX6Binding105] ||
                    chunkOYMX7WX6Binding105) +
                  "'"
                : "Parse error on line " +
                  (chunkOYMX7WX6Binding94 + 1) +
                  ": Unexpected " +
                  (chunkOYMX7WX6Binding105 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[chunkOYMX7WX6Binding105] ||
                        chunkOYMX7WX6Binding105) +
                      "'");
              this.parseError(chunkOYMX7WX6Binding114, {
                text: chunkOYMX7WX6Binding100.match,
                token:
                  this.terminals_[chunkOYMX7WX6Binding105] ||
                  chunkOYMX7WX6Binding105,
                line: chunkOYMX7WX6Binding100.yylineno,
                loc: chunkOYMX7WX6Binding103,
                expected: chunkOYMX7WX6Binding113,
              });
            }
            if (
              chunkOYMX7WX6Binding108[0] instanceof Array &&
              chunkOYMX7WX6Binding108.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  chunkOYMX7WX6Binding107 +
                  ", token: " +
                  chunkOYMX7WX6Binding105,
              );
            switch (chunkOYMX7WX6Binding108[0]) {
              case 1:
                chunkOYMX7WX6Binding88.push(chunkOYMX7WX6Binding105);
                chunkOYMX7WX6Binding90.push(chunkOYMX7WX6Binding100.yytext);
                chunkOYMX7WX6Binding91.push(chunkOYMX7WX6Binding100.yylloc);
                chunkOYMX7WX6Binding88.push(chunkOYMX7WX6Binding108[1]);
                chunkOYMX7WX6Binding105 = null;
                chunkOYMX7WX6Binding106
                  ? ((chunkOYMX7WX6Binding105 = chunkOYMX7WX6Binding106),
                    (chunkOYMX7WX6Binding106 = null))
                  : ((chunkOYMX7WX6Binding95 = chunkOYMX7WX6Binding100.yyleng),
                    (chunkOYMX7WX6Binding93 = chunkOYMX7WX6Binding100.yytext),
                    (chunkOYMX7WX6Binding94 = chunkOYMX7WX6Binding100.yylineno),
                    (chunkOYMX7WX6Binding103 = chunkOYMX7WX6Binding100.yylloc),
                    chunkOYMX7WX6Binding96 > 0 && chunkOYMX7WX6Binding96--);
                break;
              case 2:
                if (
                  ((chunkOYMX7WX6Binding111 =
                    this.productions_[chunkOYMX7WX6Binding108[1]][1]),
                  (chunkOYMX7WX6Binding110.$ =
                    chunkOYMX7WX6Binding90[
                      chunkOYMX7WX6Binding90.length - chunkOYMX7WX6Binding111
                    ]),
                  (chunkOYMX7WX6Binding110._$ = {
                    first_line:
                      chunkOYMX7WX6Binding91[
                        chunkOYMX7WX6Binding91.length -
                          (chunkOYMX7WX6Binding111 || 1)
                      ].first_line,
                    last_line:
                      chunkOYMX7WX6Binding91[chunkOYMX7WX6Binding91.length - 1]
                        .last_line,
                    first_column:
                      chunkOYMX7WX6Binding91[
                        chunkOYMX7WX6Binding91.length -
                          (chunkOYMX7WX6Binding111 || 1)
                      ].first_column,
                    last_column:
                      chunkOYMX7WX6Binding91[chunkOYMX7WX6Binding91.length - 1]
                        .last_column,
                  }),
                  chunkOYMX7WX6Binding104 &&
                    (chunkOYMX7WX6Binding110._$.range = [
                      chunkOYMX7WX6Binding91[
                        chunkOYMX7WX6Binding91.length -
                          (chunkOYMX7WX6Binding111 || 1)
                      ].range[0],
                      chunkOYMX7WX6Binding91[chunkOYMX7WX6Binding91.length - 1]
                        .range[1],
                    ]),
                  (chunkOYMX7WX6Binding109 = this.performAction.apply(
                    chunkOYMX7WX6Binding110,
                    [
                      chunkOYMX7WX6Binding93,
                      chunkOYMX7WX6Binding95,
                      chunkOYMX7WX6Binding94,
                      chunkOYMX7WX6Binding101.yy,
                      chunkOYMX7WX6Binding108[1],
                      chunkOYMX7WX6Binding90,
                      chunkOYMX7WX6Binding91,
                    ].concat(chunkOYMX7WX6Binding99),
                  )),
                  chunkOYMX7WX6Binding109 !== undefined)
                )
                  return chunkOYMX7WX6Binding109;
                chunkOYMX7WX6Binding111 &&
                  ((chunkOYMX7WX6Binding88 = chunkOYMX7WX6Binding88.slice(
                    0,
                    -1 * chunkOYMX7WX6Binding111 * 2,
                  )),
                  (chunkOYMX7WX6Binding90 = chunkOYMX7WX6Binding90.slice(
                    0,
                    -1 * chunkOYMX7WX6Binding111,
                  )),
                  (chunkOYMX7WX6Binding91 = chunkOYMX7WX6Binding91.slice(
                    0,
                    -1 * chunkOYMX7WX6Binding111,
                  )));
                chunkOYMX7WX6Binding88.push(
                  this.productions_[chunkOYMX7WX6Binding108[1]][0],
                );
                chunkOYMX7WX6Binding90.push(chunkOYMX7WX6Binding110.$);
                chunkOYMX7WX6Binding91.push(chunkOYMX7WX6Binding110._$);
                chunkOYMX7WX6Binding112 =
                  chunkOYMX7WX6Binding92[
                    chunkOYMX7WX6Binding88[chunkOYMX7WX6Binding88.length - 2]
                  ][chunkOYMX7WX6Binding88[chunkOYMX7WX6Binding88.length - 1]];
                chunkOYMX7WX6Binding88.push(chunkOYMX7WX6Binding112);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    chunkOYMX7WX6Binding80.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          chunkOYMX7WX6Input80,
          chunkOYMX7WX6Input81,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              chunkOYMX7WX6Input80,
              chunkOYMX7WX6Input81,
            );
          else throw Error(chunkOYMX7WX6Input80);
        }, "parseError"),
        setInput: defineFunctionName(function (
          chunkOYMX7WX6Input53,
          chunkOYMX7WX6Input54,
        ) {
          return (
            (this.yy = chunkOYMX7WX6Input54 || this.yy || {}),
            (this._input = chunkOYMX7WX6Input53),
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
          var chunkOYMX7WX6Binding163 = this._input[0];
          return (
            (this.yytext += chunkOYMX7WX6Binding163),
            this.yyleng++,
            this.offset++,
            (this.match += chunkOYMX7WX6Binding163),
            (this.matched += chunkOYMX7WX6Binding163),
            chunkOYMX7WX6Binding163.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            chunkOYMX7WX6Binding163
          );
        }, "input"),
        unput: defineFunctionName(function (chunkOYMX7WX6Input37) {
          var chunkOYMX7WX6Binding143 = chunkOYMX7WX6Input37.length,
            chunkOYMX7WX6Binding144 =
              chunkOYMX7WX6Input37.split(/(?:\r\n?|\n)/g);
          this._input = chunkOYMX7WX6Input37 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - chunkOYMX7WX6Binding143,
          );
          this.offset -= chunkOYMX7WX6Binding143;
          var chunkOYMX7WX6Binding145 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          chunkOYMX7WX6Binding144.length - 1 &&
            (this.yylineno -= chunkOYMX7WX6Binding144.length - 1);
          var chunkOYMX7WX6Binding146 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: chunkOYMX7WX6Binding144
                ? (chunkOYMX7WX6Binding144.length ===
                  chunkOYMX7WX6Binding145.length
                    ? this.yylloc.first_column
                    : 0) +
                  chunkOYMX7WX6Binding145[
                    chunkOYMX7WX6Binding145.length -
                      chunkOYMX7WX6Binding144.length
                  ].length -
                  chunkOYMX7WX6Binding144[0].length
                : this.yylloc.first_column - chunkOYMX7WX6Binding143,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                chunkOYMX7WX6Binding146[0],
                chunkOYMX7WX6Binding146[0] +
                  this.yyleng -
                  chunkOYMX7WX6Binding143,
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
        less: defineFunctionName(function (chunkOYMX7WX6Input104) {
          this.unput(this.match.slice(chunkOYMX7WX6Input104));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var chunkOYMX7WX6Binding175 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (chunkOYMX7WX6Binding175.length > 20 ? "..." : "") +
            chunkOYMX7WX6Binding175.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var chunkOYMX7WX6Binding173 = this.match;
          return (
            chunkOYMX7WX6Binding173.length < 20 &&
              (chunkOYMX7WX6Binding173 += this._input.substr(
                0,
                20 - chunkOYMX7WX6Binding173.length,
              )),
            (
              chunkOYMX7WX6Binding173.substr(0, 20) +
              (chunkOYMX7WX6Binding173.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var chunkOYMX7WX6Binding176 = this.pastInput(),
            chunkOYMX7WX6Binding177 = Array(
              chunkOYMX7WX6Binding176.length + 1,
            ).join("-");
          return (
            chunkOYMX7WX6Binding176 +
            this.upcomingInput() +
            "\n" +
            chunkOYMX7WX6Binding177 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          chunkOYMX7WX6Input26,
          chunkOYMX7WX6Input27,
        ) {
          var chunkOYMX7WX6Binding125,
            chunkOYMX7WX6Binding126,
            chunkOYMX7WX6Binding127;
          if (
            (this.options.backtrack_lexer &&
              ((chunkOYMX7WX6Binding127 = {
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
                (chunkOYMX7WX6Binding127.yylloc.range =
                  this.yylloc.range.slice(0))),
            (chunkOYMX7WX6Binding126 =
              chunkOYMX7WX6Input26[0].match(/(?:\r\n?|\n).*/g)),
            chunkOYMX7WX6Binding126 &&
              (this.yylineno += chunkOYMX7WX6Binding126.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: chunkOYMX7WX6Binding126
                ? chunkOYMX7WX6Binding126[chunkOYMX7WX6Binding126.length - 1]
                    .length -
                  chunkOYMX7WX6Binding126[
                    chunkOYMX7WX6Binding126.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column + chunkOYMX7WX6Input26[0].length,
            }),
            (this.yytext += chunkOYMX7WX6Input26[0]),
            (this.match += chunkOYMX7WX6Input26[0]),
            (this.matches = chunkOYMX7WX6Input26),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(chunkOYMX7WX6Input26[0].length)),
            (this.matched += chunkOYMX7WX6Input26[0]),
            (chunkOYMX7WX6Binding125 = this.performAction.call(
              this,
              this.yy,
              this,
              chunkOYMX7WX6Input27,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            chunkOYMX7WX6Binding125)
          )
            return chunkOYMX7WX6Binding125;
          if (this._backtrack) {
            for (var chunkOYMX7WX6Binding128 in chunkOYMX7WX6Binding127)
              this[chunkOYMX7WX6Binding128] =
                chunkOYMX7WX6Binding127[chunkOYMX7WX6Binding128];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var chunkOYMX7WX6Binding147,
            chunkOYMX7WX6Binding148,
            chunkOYMX7WX6Binding149,
            chunkOYMX7WX6Binding150;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var chunkOYMX7WX6Binding151 = this._currentRules(),
              chunkOYMX7WX6Binding152 = 0;
            chunkOYMX7WX6Binding152 < chunkOYMX7WX6Binding151.length;
            chunkOYMX7WX6Binding152++
          )
            if (
              ((chunkOYMX7WX6Binding149 = this._input.match(
                this.rules[chunkOYMX7WX6Binding151[chunkOYMX7WX6Binding152]],
              )),
              chunkOYMX7WX6Binding149 &&
                (!chunkOYMX7WX6Binding148 ||
                  chunkOYMX7WX6Binding149[0].length >
                    chunkOYMX7WX6Binding148[0].length))
            ) {
              if (
                ((chunkOYMX7WX6Binding148 = chunkOYMX7WX6Binding149),
                (chunkOYMX7WX6Binding150 = chunkOYMX7WX6Binding152),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((chunkOYMX7WX6Binding147 = this.test_match(
                    chunkOYMX7WX6Binding149,
                    chunkOYMX7WX6Binding151[chunkOYMX7WX6Binding152],
                  )),
                  chunkOYMX7WX6Binding147 !== false)
                )
                  return chunkOYMX7WX6Binding147;
                if (this._backtrack) {
                  chunkOYMX7WX6Binding148 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return chunkOYMX7WX6Binding148
            ? ((chunkOYMX7WX6Binding147 = this.test_match(
                chunkOYMX7WX6Binding148,
                chunkOYMX7WX6Binding151[chunkOYMX7WX6Binding150],
              )),
              chunkOYMX7WX6Binding147 === false
                ? false
                : chunkOYMX7WX6Binding147)
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
        begin: defineFunctionName(function (chunkOYMX7WX6Input105) {
          this.conditionStack.push(chunkOYMX7WX6Input105);
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
        topState: defineFunctionName(function (chunkOYMX7WX6Input70) {
          return (
            (chunkOYMX7WX6Input70 =
              this.conditionStack.length -
              1 -
              Math.abs(chunkOYMX7WX6Input70 || 0)),
            chunkOYMX7WX6Input70 >= 0
              ? this.conditionStack[chunkOYMX7WX6Input70]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (chunkOYMX7WX6Input110) {
          this.begin(chunkOYMX7WX6Input110);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          chunkOYMX7WX6Input1,
          chunkOYMX7WX6Input2,
          chunkOYMX7WX6Input3,
          chunkOYMX7WX6Input4,
        ) {
          switch (chunkOYMX7WX6Input3) {
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
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .slice(0, -8)
                  .trim()),
                25
              );
            case 40:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .slice(0, -8)
                  .trim()),
                26
              );
            case 41:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .slice(0, -10)
                  .trim()),
                27
              );
            case 42:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .slice(0, -8)
                  .trim()),
                25
              );
            case 43:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .slice(0, -8)
                  .trim()),
                26
              );
            case 44:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
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
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
                  .substr(2)
                  .trim()),
                31
              );
            case 70:
              return (
                this.popState(),
                (chunkOYMX7WX6Input2.yytext = chunkOYMX7WX6Input2.yytext
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
                (chunkOYMX7WX6Input2.yytext =
                  chunkOYMX7WX6Input2.yytext.trim()),
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
          /^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,
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
              76, 77, 78, 79,
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
    function chunkOYMX7WX6Helper5() {
      this.yy = {};
    }
    return (
      defineFunctionName(chunkOYMX7WX6Helper5, "Parser"),
      (chunkOYMX7WX6Helper5.prototype = chunkOYMX7WX6Binding80),
      (chunkOYMX7WX6Binding80.Parser = chunkOYMX7WX6Helper5),
      new chunkOYMX7WX6Helper5()
    );
  })();
  chunkOYMX7WX6Binding1.parser = chunkOYMX7WX6Binding1;
  chunkOYMX7WX6R = chunkOYMX7WX6Binding1;
  chunkOYMX7WX6Binding2 = "TB";
  chunkOYMX7WX6Binding3 = "TB";
  chunkOYMX7WX6Binding4 = "dir";
  chunkOYMX7WX6Binding5 = "state";
  chunkOYMX7WX6Binding6 = "root";
  chunkOYMX7WX6Binding7 = "relation";
  chunkOYMX7WX6Binding8 = "classDef";
  chunkOYMX7WX6Binding9 = "style";
  chunkOYMX7WX6Binding10 = "applyClass";
  chunkOYMX7WX6Binding11 = "default";
  chunkOYMX7WX6Binding12 = "divider";
  chunkOYMX7WX6Binding13 = "fill:none";
  chunkOYMX7WX6Binding14 = "fill: #333";
  chunkOYMX7WX6Binding15 = "c";
  chunkOYMX7WX6Binding16 = "markdown";
  chunkOYMX7WX6Binding17 = "normal";
  chunkOYMX7WX6Binding18 = "rect";
  chunkOYMX7WX6Binding19 = "rectWithTitle";
  chunkOYMX7WX6Binding20 = "stateStart";
  chunkOYMX7WX6Binding21 = "stateEnd";
  chunkOYMX7WX6Binding22 = "divider";
  chunkOYMX7WX6Binding23 = "roundedWithTitle";
  chunkOYMX7WX6Binding24 = "note";
  chunkOYMX7WX6Binding25 = "noteGroup";
  chunkOYMX7WX6Binding26 = "statediagram";
  chunkOYMX7WX6Binding27 = `${chunkOYMX7WX6Binding26}-state`;
  chunkOYMX7WX6Binding28 = "transition";
  chunkOYMX7WX6Binding29 = "note";
  chunkOYMX7WX6Binding30 = `${chunkOYMX7WX6Binding28} note-edge`;
  chunkOYMX7WX6Binding31 = `${chunkOYMX7WX6Binding26}-${chunkOYMX7WX6Binding29}`;
  chunkOYMX7WX6Binding32 = `${chunkOYMX7WX6Binding26}-cluster`;
  chunkOYMX7WX6Binding33 = `${chunkOYMX7WX6Binding26}-cluster-alt`;
  chunkOYMX7WX6Binding34 = "parent";
  chunkOYMX7WX6Binding35 = "note";
  _e = "state";
  chunkOYMX7WX6Binding36 = "----";
  chunkOYMX7WX6Binding37 = `${chunkOYMX7WX6Binding36}${chunkOYMX7WX6Binding35}`;
  chunkOYMX7WX6Binding38 = `${chunkOYMX7WX6Binding36}${chunkOYMX7WX6Binding34}`;
  chunkOYMX7WX6Binding39 = defineFunctionName(
    (chunkOYMX7WX6Input75, chunkOYMX7WX6Input76 = chunkOYMX7WX6Binding3) => {
      if (!chunkOYMX7WX6Input75.doc) return chunkOYMX7WX6Input76;
      let chunkOYMX7WX6Binding189 = chunkOYMX7WX6Input76;
      for (let chunkOYMX7WX6Binding199 of chunkOYMX7WX6Input75.doc)
        chunkOYMX7WX6Binding199.stmt === "dir" &&
          (chunkOYMX7WX6Binding189 = chunkOYMX7WX6Binding199.value);
      return chunkOYMX7WX6Binding189;
    },
    "getDir",
  );
  chunkOYMX7WX6I = {
    getClasses: defineFunctionName(function (
      chunkOYMX7WX6Input108,
      chunkOYMX7WX6Input109,
    ) {
      return chunkOYMX7WX6Input109.db.getClasses();
    }, "getClasses"),
    draw: defineFunctionName(async function (
      chunkOYMX7WX6Input22,
      chunkOYMX7WX6Input23,
      chunkOYMX7WX6Input24,
      chunkOYMX7WX6Input25,
    ) {
      logger.info("REF0:");
      logger.info("Drawing state diagram (v2)", chunkOYMX7WX6Input23);
      let { securityLevel, state, layout } = b();
      chunkOYMX7WX6Input25.db.extract(chunkOYMX7WX6Input25.db.getRootDocV2());
      let chunkOYMX7WX6Binding123 = chunkOYMX7WX6Input25.db.getData(),
        chunkOYMX7WX6Binding124 = t(chunkOYMX7WX6Input23, securityLevel);
      chunkOYMX7WX6Binding123.type = chunkOYMX7WX6Input25.type;
      chunkOYMX7WX6Binding123.layoutAlgorithm = layout;
      chunkOYMX7WX6Binding123.nodeSpacing = state?.nodeSpacing || 50;
      chunkOYMX7WX6Binding123.rankSpacing = state?.rankSpacing || 50;
      b().look === "neo"
        ? (chunkOYMX7WX6Binding123.markers = ["barbNeo"])
        : (chunkOYMX7WX6Binding123.markers = ["barb"]);
      chunkOYMX7WX6Binding123.diagramId = chunkOYMX7WX6Input23;
      await chunk336JU56OI(chunkOYMX7WX6Binding123, chunkOYMX7WX6Binding124);
      try {
        (typeof chunkOYMX7WX6Input25.db.getLinks == "function"
          ? chunkOYMX7WX6Input25.db.getLinks()
          : new Map()
        ).forEach((item, index) => {
          let chunkOYMX7WX6Binding137 =
            typeof index == "string"
              ? index
              : typeof index?.id == "string"
                ? index.id
                : "";
          if (!chunkOYMX7WX6Binding137) {
            logger.warn(
              "⚠️ Invalid or missing stateId from key:",
              JSON.stringify(index),
            );
            return;
          }
          let chunkOYMX7WX6Binding138 = chunkOYMX7WX6Binding124
              .node()
              ?.querySelectorAll("g"),
            chunkOYMX7WX6Binding139;
          if (
            (chunkOYMX7WX6Binding138?.forEach((chunkOYMX7WX6Input100) => {
              chunkOYMX7WX6Input100.textContent?.trim() ===
                chunkOYMX7WX6Binding137 &&
                (chunkOYMX7WX6Binding139 = chunkOYMX7WX6Input100);
            }),
            !chunkOYMX7WX6Binding139)
          ) {
            logger.warn(
              "⚠️ Could not find node matching text:",
              chunkOYMX7WX6Binding137,
            );
            return;
          }
          let chunkOYMX7WX6Binding140 = chunkOYMX7WX6Binding139.parentNode;
          if (!chunkOYMX7WX6Binding140) {
            logger.warn(
              "⚠️ Node has no parent, cannot wrap:",
              chunkOYMX7WX6Binding137,
            );
            return;
          }
          let chunkOYMX7WX6Binding141 = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "a",
            ),
            chunkOYMX7WX6Binding142 = item.url.replace(/^"+|"+$/g, "");
          if (
            (chunkOYMX7WX6Binding141.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              chunkOYMX7WX6Binding142,
            ),
            chunkOYMX7WX6Binding141.setAttribute("target", "_blank"),
            item.tooltip)
          ) {
            let chunkOYMX7WX6Binding194 = item.tooltip.replace(/^"+|"+$/g, "");
            chunkOYMX7WX6Binding141.setAttribute(
              "title",
              chunkOYMX7WX6Binding194,
            );
          }
          chunkOYMX7WX6Binding140.replaceChild(
            chunkOYMX7WX6Binding141,
            chunkOYMX7WX6Binding139,
          );
          chunkOYMX7WX6Binding141.appendChild(chunkOYMX7WX6Binding139);
          logger.info(
            "🔗 Wrapped node in <a> tag for:",
            chunkOYMX7WX6Binding137,
            item.url,
          );
        });
      } catch (chunkOYMX7WX6Binding198) {
        logger.error(
          "❌ Error injecting clickable links:",
          chunkOYMX7WX6Binding198,
        );
      }
      chunk5PVQY5BWG.insertTitle(
        chunkOYMX7WX6Binding124,
        "statediagramTitleText",
        state?.titleTopMargin ?? 25,
        chunkOYMX7WX6Input25.db.getDiagramTitle(),
      );
      chunkEDXVE4YYN(
        chunkOYMX7WX6Binding124,
        8,
        chunkOYMX7WX6Binding26,
        state?.useMaxWidth ?? true,
      );
    }, "draw"),
    getDir: chunkOYMX7WX6Binding39,
  };
  chunkOYMX7WX6Binding40 = new Map();
  chunkOYMX7WX6Binding41 = 0;
  defineFunctionName(chunkOYMX7WX6Helper1, "stateDomId");
  chunkOYMX7WX6Binding42 = defineFunctionName(
    (
      chunkOYMX7WX6Input38,
      chunkOYMX7WX6Input39,
      chunkOYMX7WX6Input40,
      chunkOYMX7WX6Input41,
      chunkOYMX7WX6Input42,
      chunkOYMX7WX6Input43,
      chunkOYMX7WX6Input44,
      chunkOYMX7WX6Input45,
    ) => {
      logger.trace("items", chunkOYMX7WX6Input39);
      chunkOYMX7WX6Input39.forEach((item) => {
        switch (item.stmt) {
          case chunkOYMX7WX6Binding5:
            chunkOYMX7WX6Binding44(
              chunkOYMX7WX6Input38,
              item,
              chunkOYMX7WX6Input40,
              chunkOYMX7WX6Input41,
              chunkOYMX7WX6Input42,
              chunkOYMX7WX6Input43,
              chunkOYMX7WX6Input44,
              chunkOYMX7WX6Input45,
            );
            break;
          case chunkOYMX7WX6Binding11:
            chunkOYMX7WX6Binding44(
              chunkOYMX7WX6Input38,
              item,
              chunkOYMX7WX6Input40,
              chunkOYMX7WX6Input41,
              chunkOYMX7WX6Input42,
              chunkOYMX7WX6Input43,
              chunkOYMX7WX6Input44,
              chunkOYMX7WX6Input45,
            );
            break;
          case chunkOYMX7WX6Binding7:
            {
              chunkOYMX7WX6Binding44(
                chunkOYMX7WX6Input38,
                item.state1,
                chunkOYMX7WX6Input40,
                chunkOYMX7WX6Input41,
                chunkOYMX7WX6Input42,
                chunkOYMX7WX6Input43,
                chunkOYMX7WX6Input44,
                chunkOYMX7WX6Input45,
              );
              chunkOYMX7WX6Binding44(
                chunkOYMX7WX6Input38,
                item.state2,
                chunkOYMX7WX6Input40,
                chunkOYMX7WX6Input41,
                chunkOYMX7WX6Input42,
                chunkOYMX7WX6Input43,
                chunkOYMX7WX6Input44,
                chunkOYMX7WX6Input45,
              );
              let chunkOYMX7WX6Binding159 = chunkOYMX7WX6Input44 === "neo",
                chunkOYMX7WX6Binding160 = {
                  id: "edge" + chunkOYMX7WX6Binding41,
                  start: item.state1.id,
                  end: item.state2.id,
                  arrowhead: "normal",
                  arrowTypeEnd: chunkOYMX7WX6Binding159
                    ? "arrow_barb_neo"
                    : "arrow_barb",
                  style: chunkOYMX7WX6Binding13,
                  labelStyle: "",
                  label: s.sanitizeText(item.description ?? "", b()),
                  arrowheadStyle: chunkOYMX7WX6Binding14,
                  labelpos: chunkOYMX7WX6Binding15,
                  labelType: chunkOYMX7WX6Binding16,
                  thickness: chunkOYMX7WX6Binding17,
                  classes: chunkOYMX7WX6Binding28,
                  look: chunkOYMX7WX6Input44,
                };
              chunkOYMX7WX6Input42.push(chunkOYMX7WX6Binding160);
              chunkOYMX7WX6Binding41++;
            }
            break;
        }
      });
    },
    "setupDoc",
  );
  chunkOYMX7WX6Binding43 = defineFunctionName(
    (chunkOYMX7WX6Input78, chunkOYMX7WX6Input79 = chunkOYMX7WX6Binding3) => {
      let chunkOYMX7WX6Binding191 = chunkOYMX7WX6Input79;
      if (chunkOYMX7WX6Input78.doc)
        for (let chunkOYMX7WX6Binding200 of chunkOYMX7WX6Input78.doc)
          chunkOYMX7WX6Binding200.stmt === "dir" &&
            (chunkOYMX7WX6Binding191 = chunkOYMX7WX6Binding200.value);
      return chunkOYMX7WX6Binding191;
    },
    "getDir",
  );
  defineFunctionName(chunkOYMX7WX6Helper2, "insertOrUpdateNode");
  defineFunctionName(chunkOYMX7WX6Helper3, "getClassesFromDbInfo");
  defineFunctionName(chunkOYMX7WX6Helper4, "getStylesFromDbInfo");
  chunkOYMX7WX6Binding44 = defineFunctionName(
    (
      chunkOYMX7WX6Input14,
      chunkOYMX7WX6Input15,
      chunkOYMX7WX6Input16,
      chunkOYMX7WX6Input17,
      chunkOYMX7WX6Input18,
      chunkOYMX7WX6Input19,
      chunkOYMX7WX6Input20,
      chunkOYMX7WX6Input21,
    ) => {
      let chunkOYMX7WX6Binding115 = chunkOYMX7WX6Input15.id,
        chunkOYMX7WX6Binding116 = chunkOYMX7WX6Input16.get(
          chunkOYMX7WX6Binding115,
        ),
        chunkOYMX7WX6Binding117 = chunkOYMX7WX6Helper3(chunkOYMX7WX6Binding116),
        chunkOYMX7WX6Binding118 = chunkOYMX7WX6Helper4(chunkOYMX7WX6Binding116),
        chunkOYMX7WX6Binding119 = b();
      if (
        (logger.info(
          "dataFetcher parsedItem",
          chunkOYMX7WX6Input15,
          chunkOYMX7WX6Binding116,
          chunkOYMX7WX6Binding118,
        ),
        chunkOYMX7WX6Binding115 !== "root")
      ) {
        let chunkOYMX7WX6Binding120 = chunkOYMX7WX6Binding18;
        chunkOYMX7WX6Input15.start === true
          ? (chunkOYMX7WX6Binding120 = chunkOYMX7WX6Binding20)
          : chunkOYMX7WX6Input15.start === false &&
            (chunkOYMX7WX6Binding120 = chunkOYMX7WX6Binding21);
        chunkOYMX7WX6Input15.type !== chunkOYMX7WX6Binding11 &&
          (chunkOYMX7WX6Binding120 = chunkOYMX7WX6Input15.type);
        chunkOYMX7WX6Binding40.get(chunkOYMX7WX6Binding115) ||
          chunkOYMX7WX6Binding40.set(chunkOYMX7WX6Binding115, {
            id: chunkOYMX7WX6Binding115,
            shape: chunkOYMX7WX6Binding120,
            description: s.sanitizeText(
              chunkOYMX7WX6Binding115,
              chunkOYMX7WX6Binding119,
            ),
            cssClasses: `${chunkOYMX7WX6Binding117} ${chunkOYMX7WX6Binding27}`,
            cssStyles: chunkOYMX7WX6Binding118,
          });
        let chunkOYMX7WX6Binding121 = chunkOYMX7WX6Binding40.get(
          chunkOYMX7WX6Binding115,
        );
        chunkOYMX7WX6Input15.description &&
          (Array.isArray(chunkOYMX7WX6Binding121.description)
            ? ((chunkOYMX7WX6Binding121.shape = chunkOYMX7WX6Binding19),
              chunkOYMX7WX6Binding121.description.push(
                chunkOYMX7WX6Input15.description,
              ))
            : chunkOYMX7WX6Binding121.description?.length &&
                chunkOYMX7WX6Binding121.description.length > 0
              ? ((chunkOYMX7WX6Binding121.shape = chunkOYMX7WX6Binding19),
                chunkOYMX7WX6Binding121.description === chunkOYMX7WX6Binding115
                  ? (chunkOYMX7WX6Binding121.description = [
                      chunkOYMX7WX6Input15.description,
                    ])
                  : (chunkOYMX7WX6Binding121.description = [
                      chunkOYMX7WX6Binding121.description,
                      chunkOYMX7WX6Input15.description,
                    ]))
              : ((chunkOYMX7WX6Binding121.shape = chunkOYMX7WX6Binding18),
                (chunkOYMX7WX6Binding121.description =
                  chunkOYMX7WX6Input15.description)),
          (chunkOYMX7WX6Binding121.description = s.sanitizeTextOrArray(
            chunkOYMX7WX6Binding121.description,
            chunkOYMX7WX6Binding119,
          )));
        chunkOYMX7WX6Binding121.description?.length === 1 &&
          chunkOYMX7WX6Binding121.shape === chunkOYMX7WX6Binding19 &&
          (chunkOYMX7WX6Binding121.type === "group"
            ? (chunkOYMX7WX6Binding121.shape = chunkOYMX7WX6Binding23)
            : (chunkOYMX7WX6Binding121.shape = chunkOYMX7WX6Binding18));
        !chunkOYMX7WX6Binding121.type &&
          chunkOYMX7WX6Input15.doc &&
          (logger.info(
            "Setting cluster for XCX",
            chunkOYMX7WX6Binding115,
            chunkOYMX7WX6Binding43(chunkOYMX7WX6Input15),
          ),
          (chunkOYMX7WX6Binding121.type = "group"),
          (chunkOYMX7WX6Binding121.isGroup = true),
          (chunkOYMX7WX6Binding121.dir =
            chunkOYMX7WX6Binding43(chunkOYMX7WX6Input15)),
          (chunkOYMX7WX6Binding121.shape =
            chunkOYMX7WX6Input15.type === chunkOYMX7WX6Binding12
              ? chunkOYMX7WX6Binding22
              : chunkOYMX7WX6Binding23),
          (chunkOYMX7WX6Binding121.cssClasses = `${chunkOYMX7WX6Binding121.cssClasses} ${chunkOYMX7WX6Binding32} ${chunkOYMX7WX6Input19 ? chunkOYMX7WX6Binding33 : ""}`));
        let chunkOYMX7WX6Binding122 = {
          labelStyle: "",
          shape: chunkOYMX7WX6Binding121.shape,
          label: chunkOYMX7WX6Binding121.description,
          cssClasses: chunkOYMX7WX6Binding121.cssClasses,
          cssCompiledStyles: [],
          cssStyles: chunkOYMX7WX6Binding121.cssStyles,
          id: chunkOYMX7WX6Binding115,
          dir: chunkOYMX7WX6Binding121.dir,
          domId: chunkOYMX7WX6Helper1(
            chunkOYMX7WX6Binding115,
            chunkOYMX7WX6Binding41,
          ),
          type: chunkOYMX7WX6Binding121.type,
          isGroup: chunkOYMX7WX6Binding121.type === "group",
          padding: 8,
          rx: 10,
          ry: 10,
          look: chunkOYMX7WX6Input20,
          labelType: "markdown",
        };
        if (
          (chunkOYMX7WX6Binding122.shape === chunkOYMX7WX6Binding22 &&
            (chunkOYMX7WX6Binding122.label = ""),
          chunkOYMX7WX6Input14 &&
            chunkOYMX7WX6Input14.id !== "root" &&
            (logger.trace(
              "Setting node ",
              chunkOYMX7WX6Binding115,
              " to be child of its parent ",
              chunkOYMX7WX6Input14.id,
            ),
            (chunkOYMX7WX6Binding122.parentId = chunkOYMX7WX6Input14.id)),
          (chunkOYMX7WX6Binding122.centerLabel = true),
          chunkOYMX7WX6Input15.note)
        ) {
          let chunkOYMX7WX6Binding130 = {
              labelStyle: "",
              shape: chunkOYMX7WX6Binding24,
              label: chunkOYMX7WX6Input15.note.text,
              labelType: "markdown",
              cssClasses: chunkOYMX7WX6Binding31,
              cssStyles: [],
              cssCompiledStyles: [],
              id:
                chunkOYMX7WX6Binding115 +
                chunkOYMX7WX6Binding37 +
                "-" +
                chunkOYMX7WX6Binding41,
              domId: chunkOYMX7WX6Helper1(
                chunkOYMX7WX6Binding115,
                chunkOYMX7WX6Binding41,
                chunkOYMX7WX6Binding35,
              ),
              type: chunkOYMX7WX6Binding121.type,
              isGroup: chunkOYMX7WX6Binding121.type === "group",
              padding: chunkOYMX7WX6Binding119.flowchart?.padding,
              look: chunkOYMX7WX6Input20,
              position: chunkOYMX7WX6Input15.note.position,
            },
            chunkOYMX7WX6Binding131 =
              chunkOYMX7WX6Binding115 + chunkOYMX7WX6Binding38,
            chunkOYMX7WX6Binding132 = {
              labelStyle: "",
              shape: chunkOYMX7WX6Binding25,
              label: chunkOYMX7WX6Input15.note.text,
              cssClasses: chunkOYMX7WX6Binding121.cssClasses,
              cssStyles: [],
              id: chunkOYMX7WX6Binding115 + chunkOYMX7WX6Binding38,
              domId: chunkOYMX7WX6Helper1(
                chunkOYMX7WX6Binding115,
                chunkOYMX7WX6Binding41,
                chunkOYMX7WX6Binding34,
              ),
              type: "group",
              isGroup: true,
              padding: 16,
              look: chunkOYMX7WX6Input20,
              position: chunkOYMX7WX6Input15.note.position,
            };
          chunkOYMX7WX6Binding41++;
          chunkOYMX7WX6Binding132.id = chunkOYMX7WX6Binding131;
          chunkOYMX7WX6Binding130.parentId = chunkOYMX7WX6Binding131;
          chunkOYMX7WX6Helper2(
            chunkOYMX7WX6Input17,
            chunkOYMX7WX6Binding132,
            chunkOYMX7WX6Input21,
          );
          chunkOYMX7WX6Helper2(
            chunkOYMX7WX6Input17,
            chunkOYMX7WX6Binding130,
            chunkOYMX7WX6Input21,
          );
          chunkOYMX7WX6Helper2(
            chunkOYMX7WX6Input17,
            chunkOYMX7WX6Binding122,
            chunkOYMX7WX6Input21,
          );
          let chunkOYMX7WX6Binding133 = chunkOYMX7WX6Binding115,
            chunkOYMX7WX6Binding134 = chunkOYMX7WX6Binding130.id;
          chunkOYMX7WX6Input15.note.position === "left of" &&
            ((chunkOYMX7WX6Binding133 = chunkOYMX7WX6Binding130.id),
            (chunkOYMX7WX6Binding134 = chunkOYMX7WX6Binding115));
          chunkOYMX7WX6Input18.push({
            id: chunkOYMX7WX6Binding133 + "-" + chunkOYMX7WX6Binding134,
            start: chunkOYMX7WX6Binding133,
            end: chunkOYMX7WX6Binding134,
            arrowhead: "none",
            arrowTypeEnd: "",
            style: chunkOYMX7WX6Binding13,
            labelStyle: "",
            classes: chunkOYMX7WX6Binding30,
            arrowheadStyle: chunkOYMX7WX6Binding14,
            labelpos: chunkOYMX7WX6Binding15,
            labelType: chunkOYMX7WX6Binding16,
            thickness: chunkOYMX7WX6Binding17,
            look: chunkOYMX7WX6Input20,
          });
        } else
          chunkOYMX7WX6Helper2(
            chunkOYMX7WX6Input17,
            chunkOYMX7WX6Binding122,
            chunkOYMX7WX6Input21,
          );
      }
      chunkOYMX7WX6Input15.doc &&
        (logger.trace("Adding nodes children "),
        chunkOYMX7WX6Binding42(
          chunkOYMX7WX6Input15,
          chunkOYMX7WX6Input15.doc,
          chunkOYMX7WX6Input16,
          chunkOYMX7WX6Input17,
          chunkOYMX7WX6Input18,
          !chunkOYMX7WX6Input19,
          chunkOYMX7WX6Input20,
          chunkOYMX7WX6Input21,
        ));
    },
    "dataFetcher",
  );
  chunkOYMX7WX6Binding45 = defineFunctionName(() => {
    chunkOYMX7WX6Binding40.clear();
    chunkOYMX7WX6Binding41 = 0;
  }, "reset");
  chunkOYMX7WX6Binding46 = {
    START_NODE: "[*]",
    START_TYPE: "start",
    END_NODE: "[*]",
    END_TYPE: "end",
    COLOR_KEYWORD: "color",
    FILL_KEYWORD: "fill",
    BG_FILL: "bgFill",
    STYLECLASS_SEP: ",",
  };
  chunkOYMX7WX6Binding47 = defineFunctionName(
    () => new Map(),
    "newClassesList",
  );
  chunkOYMX7WX6Binding48 = defineFunctionName(
    () => ({
      relations: [],
      states: new Map(),
      documents: {},
    }),
    "newDoc",
  );
  $ = defineFunctionName(
    (chunkOYMX7WX6Input113) =>
      JSON.parse(JSON.stringify(chunkOYMX7WX6Input113)),
    "clone",
  );
  chunkOYMX7WX6T = class {
    constructor(chunkOYMX7WX6Input49) {
      this.version = chunkOYMX7WX6Input49;
      this.nodes = [];
      this.edges = [];
      this.rootDoc = [];
      this.classes = chunkOYMX7WX6Binding47();
      this.documents = {
        root: chunkOYMX7WX6Binding48(),
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.dividerCnt = 0;
      this.links = new Map();
      this.getAccTitle = _chunkICPOFSXXV;
      this.setAccTitle = H;
      this.getAccDescription = _;
      this.setAccDescription = V;
      this.setDiagramTitle = G;
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
    extract(chunkOYMX7WX6Input36) {
      this.clear(true);
      for (let chunkOYMX7WX6Binding161 of Array.isArray(chunkOYMX7WX6Input36)
        ? chunkOYMX7WX6Input36
        : chunkOYMX7WX6Input36.doc)
        switch (chunkOYMX7WX6Binding161.stmt) {
          case chunkOYMX7WX6Binding5:
            this.addState(
              chunkOYMX7WX6Binding161.id.trim(),
              chunkOYMX7WX6Binding161.type,
              chunkOYMX7WX6Binding161.doc,
              chunkOYMX7WX6Binding161.description,
              chunkOYMX7WX6Binding161.note,
            );
            break;
          case chunkOYMX7WX6Binding7:
            this.addRelation(
              chunkOYMX7WX6Binding161.state1,
              chunkOYMX7WX6Binding161.state2,
              chunkOYMX7WX6Binding161.description,
            );
            break;
          case chunkOYMX7WX6Binding8:
            this.addStyleClass(
              chunkOYMX7WX6Binding161.id.trim(),
              chunkOYMX7WX6Binding161.classes,
            );
            break;
          case chunkOYMX7WX6Binding9:
            this.handleStyleDef(chunkOYMX7WX6Binding161);
            break;
          case chunkOYMX7WX6Binding10:
            this.setCssClass(
              chunkOYMX7WX6Binding161.id.trim(),
              chunkOYMX7WX6Binding161.styleClass,
            );
            break;
          case "click":
            this.addLink(
              chunkOYMX7WX6Binding161.id,
              chunkOYMX7WX6Binding161.url,
              chunkOYMX7WX6Binding161.tooltip,
            );
            break;
        }
      let chunkOYMX7WX6Binding135 = this.getStates(),
        chunkOYMX7WX6Binding136 = b();
      chunkOYMX7WX6Binding45();
      chunkOYMX7WX6Binding44(
        undefined,
        this.getRootDocV2(),
        chunkOYMX7WX6Binding135,
        this.nodes,
        this.edges,
        true,
        chunkOYMX7WX6Binding136.look,
        this.classes,
      );
      for (let chunkOYMX7WX6Binding169 of this.nodes)
        if (Array.isArray(chunkOYMX7WX6Binding169.label)) {
          if (
            ((chunkOYMX7WX6Binding169.description =
              chunkOYMX7WX6Binding169.label.slice(1)),
            chunkOYMX7WX6Binding169.isGroup &&
              chunkOYMX7WX6Binding169.description.length > 0)
          )
            throw Error(
              `Group nodes can only have label. Remove the additional description for node [${chunkOYMX7WX6Binding169.id}]`,
            );
          chunkOYMX7WX6Binding169.label = chunkOYMX7WX6Binding169.label[0];
        }
    }
    handleStyleDef(chunkOYMX7WX6Input63) {
      let chunkOYMX7WX6Binding170 = chunkOYMX7WX6Input63.id.trim().split(","),
        chunkOYMX7WX6Binding171 = chunkOYMX7WX6Input63.styleClass.split(",");
      for (let chunkOYMX7WX6Binding178 of chunkOYMX7WX6Binding170) {
        let chunkOYMX7WX6Binding179 = this.getState(chunkOYMX7WX6Binding178);
        if (!chunkOYMX7WX6Binding179) {
          let chunkOYMX7WX6Binding195 = chunkOYMX7WX6Binding178.trim();
          this.addState(chunkOYMX7WX6Binding195);
          chunkOYMX7WX6Binding179 = this.getState(chunkOYMX7WX6Binding195);
        }
        chunkOYMX7WX6Binding179 &&
          (chunkOYMX7WX6Binding179.styles = chunkOYMX7WX6Binding171.map(
            (item) => item.replace(/;/g, "")?.trim(),
          ));
      }
    }
    setRootDoc(chunkOYMX7WX6Input67) {
      logger.info("Setting root doc", chunkOYMX7WX6Input67);
      this.rootDoc = chunkOYMX7WX6Input67;
      this.version === 1
        ? this.extract(chunkOYMX7WX6Input67)
        : this.extract(this.getRootDocV2());
    }
    docTranslator(
      chunkOYMX7WX6Input46,
      chunkOYMX7WX6Input47,
      chunkOYMX7WX6Input48,
    ) {
      if (chunkOYMX7WX6Input47.stmt === chunkOYMX7WX6Binding7) {
        this.docTranslator(
          chunkOYMX7WX6Input46,
          chunkOYMX7WX6Input47.state1,
          true,
        );
        this.docTranslator(
          chunkOYMX7WX6Input46,
          chunkOYMX7WX6Input47.state2,
          false,
        );
        return;
      }
      if (
        (chunkOYMX7WX6Input47.stmt === chunkOYMX7WX6Binding5 &&
          (chunkOYMX7WX6Input47.id === chunkOYMX7WX6Binding46.START_NODE
            ? ((chunkOYMX7WX6Input47.id =
                chunkOYMX7WX6Input46.id +
                (chunkOYMX7WX6Input48 ? "_start" : "_end")),
              (chunkOYMX7WX6Input47.start = chunkOYMX7WX6Input48))
            : (chunkOYMX7WX6Input47.id = chunkOYMX7WX6Input47.id.trim())),
        (chunkOYMX7WX6Input47.stmt !== chunkOYMX7WX6Binding6 &&
          chunkOYMX7WX6Input47.stmt !== chunkOYMX7WX6Binding5) ||
          !chunkOYMX7WX6Input47.doc)
      )
        return;
      let chunkOYMX7WX6Binding153 = [],
        chunkOYMX7WX6Binding154 = [];
      for (let chunkOYMX7WX6Binding188 of chunkOYMX7WX6Input47.doc)
        if (chunkOYMX7WX6Binding188.type === chunkOYMX7WX6Binding12) {
          let chunkOYMX7WX6Binding197 = $(chunkOYMX7WX6Binding188);
          chunkOYMX7WX6Binding197.doc = $(chunkOYMX7WX6Binding154);
          chunkOYMX7WX6Binding153.push(chunkOYMX7WX6Binding197);
          chunkOYMX7WX6Binding154 = [];
        } else chunkOYMX7WX6Binding154.push(chunkOYMX7WX6Binding188);
      if (
        chunkOYMX7WX6Binding153.length > 0 &&
        chunkOYMX7WX6Binding154.length > 0
      ) {
        let chunkOYMX7WX6Binding193 = {
          stmt: chunkOYMX7WX6Binding5,
          id: chunk5PVQY5BWO(),
          type: "divider",
          doc: $(chunkOYMX7WX6Binding154),
        };
        chunkOYMX7WX6Binding153.push($(chunkOYMX7WX6Binding193));
        chunkOYMX7WX6Input47.doc = chunkOYMX7WX6Binding153;
      }
      chunkOYMX7WX6Input47.doc.forEach((item) =>
        this.docTranslator(chunkOYMX7WX6Input47, item, true),
      );
    }
    getRootDocV2() {
      return (
        this.docTranslator(
          {
            id: chunkOYMX7WX6Binding6,
            stmt: chunkOYMX7WX6Binding6,
          },
          {
            id: chunkOYMX7WX6Binding6,
            stmt: chunkOYMX7WX6Binding6,
            doc: this.rootDoc,
          },
          true,
        ),
        {
          id: chunkOYMX7WX6Binding6,
          doc: this.rootDoc,
        }
      );
    }
    addState(
      chunkOYMX7WX6Input28,
      chunkOYMX7WX6Input29 = chunkOYMX7WX6Binding11,
      chunkOYMX7WX6Input30 = undefined,
      chunkOYMX7WX6Input31 = undefined,
      chunkOYMX7WX6Input32 = undefined,
      chunkOYMX7WX6Input33 = undefined,
      chunkOYMX7WX6Input34 = undefined,
      chunkOYMX7WX6Input35 = undefined,
    ) {
      let chunkOYMX7WX6Binding129 = chunkOYMX7WX6Input28?.trim();
      if (!this.currentDocument.states.has(chunkOYMX7WX6Binding129)) {
        logger.info(
          "Adding state ",
          chunkOYMX7WX6Binding129,
          chunkOYMX7WX6Input31,
        );
        this.currentDocument.states.set(chunkOYMX7WX6Binding129, {
          stmt: chunkOYMX7WX6Binding5,
          id: chunkOYMX7WX6Binding129,
          descriptions: [],
          type: chunkOYMX7WX6Input29,
          doc: chunkOYMX7WX6Input30,
          note: chunkOYMX7WX6Input32,
          classes: [],
          styles: [],
          textStyles: [],
        });
      } else {
        let chunkOYMX7WX6Binding187 = this.currentDocument.states.get(
          chunkOYMX7WX6Binding129,
        );
        if (!chunkOYMX7WX6Binding187)
          throw Error(`State not found: ${chunkOYMX7WX6Binding129}`);
        chunkOYMX7WX6Binding187.doc ||= chunkOYMX7WX6Input30;
        chunkOYMX7WX6Binding187.type ||= chunkOYMX7WX6Input29;
      }
      if (
        (chunkOYMX7WX6Input31 &&
          (logger.info(
            "Setting state description",
            chunkOYMX7WX6Binding129,
            chunkOYMX7WX6Input31,
          ),
          (Array.isArray(chunkOYMX7WX6Input31)
            ? chunkOYMX7WX6Input31
            : [chunkOYMX7WX6Input31]
          ).forEach((item) =>
            this.addDescription(chunkOYMX7WX6Binding129, item.trim()),
          )),
        chunkOYMX7WX6Input32)
      ) {
        let chunkOYMX7WX6Binding184 = this.currentDocument.states.get(
          chunkOYMX7WX6Binding129,
        );
        if (!chunkOYMX7WX6Binding184)
          throw Error(`State not found: ${chunkOYMX7WX6Binding129}`);
        chunkOYMX7WX6Binding184.note = chunkOYMX7WX6Input32;
        chunkOYMX7WX6Binding184.note.text = s.sanitizeText(
          chunkOYMX7WX6Binding184.note.text,
          b(),
        );
      }
      chunkOYMX7WX6Input33 &&
        (logger.info(
          "Setting state classes",
          chunkOYMX7WX6Binding129,
          chunkOYMX7WX6Input33,
        ),
        (Array.isArray(chunkOYMX7WX6Input33)
          ? chunkOYMX7WX6Input33
          : [chunkOYMX7WX6Input33]
        ).forEach((item) =>
          this.setCssClass(chunkOYMX7WX6Binding129, item.trim()),
        ));
      chunkOYMX7WX6Input34 &&
        (logger.info(
          "Setting state styles",
          chunkOYMX7WX6Binding129,
          chunkOYMX7WX6Input34,
        ),
        (Array.isArray(chunkOYMX7WX6Input34)
          ? chunkOYMX7WX6Input34
          : [chunkOYMX7WX6Input34]
        ).forEach((item) =>
          this.setStyle(chunkOYMX7WX6Binding129, item.trim()),
        ));
      chunkOYMX7WX6Input35 &&
        (logger.info(
          "Setting state styles",
          chunkOYMX7WX6Binding129,
          chunkOYMX7WX6Input34,
        ),
        (Array.isArray(chunkOYMX7WX6Input35)
          ? chunkOYMX7WX6Input35
          : [chunkOYMX7WX6Input35]
        ).forEach((item) =>
          this.setTextStyle(chunkOYMX7WX6Binding129, item.trim()),
        ));
    }
    clear(chunkOYMX7WX6Input64) {
      this.nodes = [];
      this.edges = [];
      this.documents = {
        root: chunkOYMX7WX6Binding48(),
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.classes = chunkOYMX7WX6Binding47();
      chunkOYMX7WX6Input64 || ((this.links = new Map()), _chunkICPOFSXXA());
    }
    getState(chunkOYMX7WX6Input103) {
      return this.currentDocument.states.get(chunkOYMX7WX6Input103);
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
    addLink(chunkOYMX7WX6Input82, chunkOYMX7WX6Input83, chunkOYMX7WX6Input84) {
      this.links.set(chunkOYMX7WX6Input82, {
        url: chunkOYMX7WX6Input83,
        tooltip: chunkOYMX7WX6Input84,
      });
      logger.warn(
        "Adding link",
        chunkOYMX7WX6Input82,
        chunkOYMX7WX6Input83,
        chunkOYMX7WX6Input84,
      );
    }
    getLinks() {
      return this.links;
    }
    startIdIfNeeded(chunkOYMX7WX6Input73 = "") {
      return chunkOYMX7WX6Input73 === chunkOYMX7WX6Binding46.START_NODE
        ? (this.startEndCount++,
          `${chunkOYMX7WX6Binding46.START_TYPE}${this.startEndCount}`)
        : chunkOYMX7WX6Input73;
    }
    startTypeIfNeeded(
      chunkOYMX7WX6Input94 = "",
      chunkOYMX7WX6Input95 = chunkOYMX7WX6Binding11,
    ) {
      return chunkOYMX7WX6Input94 === chunkOYMX7WX6Binding46.START_NODE
        ? chunkOYMX7WX6Binding46.START_TYPE
        : chunkOYMX7WX6Input95;
    }
    endIdIfNeeded(chunkOYMX7WX6Input74 = "") {
      return chunkOYMX7WX6Input74 === chunkOYMX7WX6Binding46.END_NODE
        ? (this.startEndCount++,
          `${chunkOYMX7WX6Binding46.END_TYPE}${this.startEndCount}`)
        : chunkOYMX7WX6Input74;
    }
    endTypeIfNeeded(
      chunkOYMX7WX6Input96 = "",
      chunkOYMX7WX6Input97 = chunkOYMX7WX6Binding11,
    ) {
      return chunkOYMX7WX6Input96 === chunkOYMX7WX6Binding46.END_NODE
        ? chunkOYMX7WX6Binding46.END_TYPE
        : chunkOYMX7WX6Input97;
    }
    addRelationObjs(
      chunkOYMX7WX6Input50,
      chunkOYMX7WX6Input51,
      chunkOYMX7WX6Input52 = "",
    ) {
      let chunkOYMX7WX6Binding155 = this.startIdIfNeeded(
          chunkOYMX7WX6Input50.id.trim(),
        ),
        chunkOYMX7WX6Binding156 = this.startTypeIfNeeded(
          chunkOYMX7WX6Input50.id.trim(),
          chunkOYMX7WX6Input50.type,
        ),
        chunkOYMX7WX6Binding157 = this.startIdIfNeeded(
          chunkOYMX7WX6Input51.id.trim(),
        ),
        chunkOYMX7WX6Binding158 = this.startTypeIfNeeded(
          chunkOYMX7WX6Input51.id.trim(),
          chunkOYMX7WX6Input51.type,
        );
      this.addState(
        chunkOYMX7WX6Binding155,
        chunkOYMX7WX6Binding156,
        chunkOYMX7WX6Input50.doc,
        chunkOYMX7WX6Input50.description,
        chunkOYMX7WX6Input50.note,
        chunkOYMX7WX6Input50.classes,
        chunkOYMX7WX6Input50.styles,
        chunkOYMX7WX6Input50.textStyles,
      );
      this.addState(
        chunkOYMX7WX6Binding157,
        chunkOYMX7WX6Binding158,
        chunkOYMX7WX6Input51.doc,
        chunkOYMX7WX6Input51.description,
        chunkOYMX7WX6Input51.note,
        chunkOYMX7WX6Input51.classes,
        chunkOYMX7WX6Input51.styles,
        chunkOYMX7WX6Input51.textStyles,
      );
      this.currentDocument.relations.push({
        id1: chunkOYMX7WX6Binding155,
        id2: chunkOYMX7WX6Binding157,
        relationTitle: s.sanitizeText(chunkOYMX7WX6Input52, b()),
      });
    }
    addRelation(
      chunkOYMX7WX6Input55,
      chunkOYMX7WX6Input56,
      chunkOYMX7WX6Input57,
    ) {
      if (
        typeof chunkOYMX7WX6Input55 == "object" &&
        typeof chunkOYMX7WX6Input56 == "object"
      )
        this.addRelationObjs(
          chunkOYMX7WX6Input55,
          chunkOYMX7WX6Input56,
          chunkOYMX7WX6Input57,
        );
      else if (
        typeof chunkOYMX7WX6Input55 == "string" &&
        typeof chunkOYMX7WX6Input56 == "string"
      ) {
        let chunkOYMX7WX6Binding164 = this.startIdIfNeeded(
            chunkOYMX7WX6Input55.trim(),
          ),
          chunkOYMX7WX6Binding165 =
            this.startTypeIfNeeded(chunkOYMX7WX6Input55),
          chunkOYMX7WX6Binding166 = this.endIdIfNeeded(
            chunkOYMX7WX6Input56.trim(),
          ),
          chunkOYMX7WX6Binding167 = this.endTypeIfNeeded(chunkOYMX7WX6Input56);
        this.addState(chunkOYMX7WX6Binding164, chunkOYMX7WX6Binding165);
        this.addState(chunkOYMX7WX6Binding166, chunkOYMX7WX6Binding167);
        this.currentDocument.relations.push({
          id1: chunkOYMX7WX6Binding164,
          id2: chunkOYMX7WX6Binding166,
          relationTitle: chunkOYMX7WX6Input57
            ? s.sanitizeText(chunkOYMX7WX6Input57, b())
            : undefined,
        });
      }
    }
    addDescription(chunkOYMX7WX6Input68, chunkOYMX7WX6Input69) {
      let chunkOYMX7WX6Binding182 =
          this.currentDocument.states.get(chunkOYMX7WX6Input68),
        chunkOYMX7WX6Binding183 = chunkOYMX7WX6Input69.startsWith(":")
          ? chunkOYMX7WX6Input69.replace(":", "").trim()
          : chunkOYMX7WX6Input69;
      chunkOYMX7WX6Binding182?.descriptions?.push(
        s.sanitizeText(chunkOYMX7WX6Binding183, b()),
      );
    }
    cleanupLabel(chunkOYMX7WX6Input98) {
      return chunkOYMX7WX6Input98.startsWith(":")
        ? chunkOYMX7WX6Input98.slice(2).trim()
        : chunkOYMX7WX6Input98.trim();
    }
    getDividerId() {
      return (this.dividerCnt++, `divider-id-${this.dividerCnt}`);
    }
    addStyleClass(chunkOYMX7WX6Input58, chunkOYMX7WX6Input59 = "") {
      this.classes.has(chunkOYMX7WX6Input58) ||
        this.classes.set(chunkOYMX7WX6Input58, {
          id: chunkOYMX7WX6Input58,
          styles: [],
          textStyles: [],
        });
      let chunkOYMX7WX6Binding162 = this.classes.get(chunkOYMX7WX6Input58);
      chunkOYMX7WX6Input59 &&
        chunkOYMX7WX6Binding162 &&
        chunkOYMX7WX6Input59
          .split(chunkOYMX7WX6Binding46.STYLECLASS_SEP)
          .forEach((item) => {
            let chunkOYMX7WX6Binding172 = item.replace(/([^;]*);/, "$1").trim();
            if (RegExp(chunkOYMX7WX6Binding46.COLOR_KEYWORD).exec(item)) {
              let chunkOYMX7WX6Binding185 = chunkOYMX7WX6Binding172
                .replace(
                  chunkOYMX7WX6Binding46.FILL_KEYWORD,
                  chunkOYMX7WX6Binding46.BG_FILL,
                )
                .replace(
                  chunkOYMX7WX6Binding46.COLOR_KEYWORD,
                  chunkOYMX7WX6Binding46.FILL_KEYWORD,
                );
              chunkOYMX7WX6Binding162.textStyles.push(chunkOYMX7WX6Binding185);
            }
            chunkOYMX7WX6Binding162.styles.push(chunkOYMX7WX6Binding172);
          });
    }
    getClasses() {
      return this.classes;
    }
    setCssClass(chunkOYMX7WX6Input65, chunkOYMX7WX6Input66) {
      chunkOYMX7WX6Input65.split(",").forEach((item) => {
        let chunkOYMX7WX6Binding181 = this.getState(item);
        if (!chunkOYMX7WX6Binding181) {
          let chunkOYMX7WX6Binding196 = item.trim();
          this.addState(chunkOYMX7WX6Binding196);
          chunkOYMX7WX6Binding181 = this.getState(chunkOYMX7WX6Binding196);
        }
        chunkOYMX7WX6Binding181?.classes?.push(chunkOYMX7WX6Input66);
      });
    }
    setStyle(chunkOYMX7WX6Input106, chunkOYMX7WX6Input107) {
      this.getState(chunkOYMX7WX6Input106)?.styles?.push(chunkOYMX7WX6Input107);
    }
    setTextStyle(chunkOYMX7WX6Input101, chunkOYMX7WX6Input102) {
      this.getState(chunkOYMX7WX6Input101)?.textStyles?.push(
        chunkOYMX7WX6Input102,
      );
    }
    getDirectionStatement() {
      return this.rootDoc.find((item) => item.stmt === chunkOYMX7WX6Binding4);
    }
    getDirection() {
      return this.getDirectionStatement()?.value ?? chunkOYMX7WX6Binding2;
    }
    setDirection(chunkOYMX7WX6Input77) {
      let chunkOYMX7WX6Binding190 = this.getDirectionStatement();
      chunkOYMX7WX6Binding190
        ? (chunkOYMX7WX6Binding190.value = chunkOYMX7WX6Input77)
        : this.rootDoc.unshift({
            stmt: chunkOYMX7WX6Binding4,
            value: chunkOYMX7WX6Input77,
          });
    }
    trimColon(chunkOYMX7WX6Input99) {
      return chunkOYMX7WX6Input99.startsWith(":")
        ? chunkOYMX7WX6Input99.slice(1).trim()
        : chunkOYMX7WX6Input99.trim();
    }
    getData() {
      let chunkOYMX7WX6Binding180 = b();
      return {
        nodes: this.nodes,
        edges: this.edges,
        other: {},
        config: chunkOYMX7WX6Binding180,
        direction: chunkOYMX7WX6Binding39(this.getRootDocV2()),
      };
    }
    getConfig() {
      return b().state;
    }
  };
  chunkOYMX7WX6A = defineFunctionName(
    (chunkOYMX7WX6Input13) => `
defs [id$="-barbEnd"] {
    fill: ${chunkOYMX7WX6Input13.transitionColor};
    stroke: ${chunkOYMX7WX6Input13.transitionColor};
  }
g.stateGroup text {
  fill: ${chunkOYMX7WX6Input13.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${chunkOYMX7WX6Input13.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${chunkOYMX7WX6Input13.stateLabelColor};
}

g.stateGroup rect {
  fill: ${chunkOYMX7WX6Input13.mainBkg};
  stroke: ${chunkOYMX7WX6Input13.nodeBorder};
}

g.stateGroup line {
  stroke: ${chunkOYMX7WX6Input13.lineColor};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1};
}

.transition {
  stroke: ${chunkOYMX7WX6Input13.transitionColor};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1};
  fill: none;
}

.stateGroup .composit {
  fill: ${chunkOYMX7WX6Input13.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${chunkOYMX7WX6Input13.noteBorderColor};
  fill: ${chunkOYMX7WX6Input13.noteBkgColor};

  text {
    fill: ${chunkOYMX7WX6Input13.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${chunkOYMX7WX6Input13.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${chunkOYMX7WX6Input13.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${chunkOYMX7WX6Input13.edgeLabelBackground};
  p {
    background-color: ${chunkOYMX7WX6Input13.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${chunkOYMX7WX6Input13.edgeLabelBackground};
    fill: ${chunkOYMX7WX6Input13.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${chunkOYMX7WX6Input13.transitionLabelColor || chunkOYMX7WX6Input13.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${chunkOYMX7WX6Input13.transitionLabelColor || chunkOYMX7WX6Input13.tertiaryTextColor};
}

.stateLabel text {
  fill: ${chunkOYMX7WX6Input13.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${chunkOYMX7WX6Input13.specialStateColor};
  stroke: ${chunkOYMX7WX6Input13.specialStateColor};
}

.node .fork-join {
  fill: ${chunkOYMX7WX6Input13.specialStateColor};
  stroke: ${chunkOYMX7WX6Input13.specialStateColor};
}

.node circle.state-end {
  fill: ${chunkOYMX7WX6Input13.innerEndBackground};
  stroke: ${chunkOYMX7WX6Input13.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${chunkOYMX7WX6Input13.compositeBackground || chunkOYMX7WX6Input13.background};
  // stroke: ${chunkOYMX7WX6Input13.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${chunkOYMX7WX6Input13.stateBkg || chunkOYMX7WX6Input13.mainBkg};
  stroke: ${chunkOYMX7WX6Input13.stateBorder || chunkOYMX7WX6Input13.nodeBorder};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1}px;
}
.node polygon {
  fill: ${chunkOYMX7WX6Input13.mainBkg};
  stroke: ${chunkOYMX7WX6Input13.stateBorder || chunkOYMX7WX6Input13.nodeBorder};;
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1}px;
}
[id$="-barbEnd"] {
  fill: ${chunkOYMX7WX6Input13.lineColor};
}

.statediagram-cluster rect {
  fill: ${chunkOYMX7WX6Input13.compositeTitleBackground};
  stroke: ${chunkOYMX7WX6Input13.stateBorder || chunkOYMX7WX6Input13.nodeBorder};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1}px;
}

.cluster-label, .nodeLabel {
  color: ${chunkOYMX7WX6Input13.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${chunkOYMX7WX6Input13.stateBorder || chunkOYMX7WX6Input13.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${chunkOYMX7WX6Input13.compositeBackground || chunkOYMX7WX6Input13.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${chunkOYMX7WX6Input13.altBackground ? chunkOYMX7WX6Input13.altBackground : "#efefef"};
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
  fill: ${chunkOYMX7WX6Input13.altBackground ? chunkOYMX7WX6Input13.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${chunkOYMX7WX6Input13.noteBkgColor};
  stroke: ${chunkOYMX7WX6Input13.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${chunkOYMX7WX6Input13.noteBkgColor};
  stroke: ${chunkOYMX7WX6Input13.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${chunkOYMX7WX6Input13.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${chunkOYMX7WX6Input13.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${chunkOYMX7WX6Input13.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${chunkOYMX7WX6Input13.lineColor};
  stroke: ${chunkOYMX7WX6Input13.lineColor};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth || 1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${chunkOYMX7WX6Input13.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${chunkOYMX7WX6Input13.mainBkg};
  stroke: ${chunkOYMX7WX6Input13.useGradient ? "url(" + chunkOYMX7WX6Input13.svgId + "-gradient)" : chunkOYMX7WX6Input13.stateBorder || chunkOYMX7WX6Input13.nodeBorder};
  stroke-width: ${chunkOYMX7WX6Input13.strokeWidth ?? 1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${chunkOYMX7WX6Input13.radius}px;
  ry: ${chunkOYMX7WX6Input13.radius}px;
  filter: ${chunkOYMX7WX6Input13.dropShadow ? chunkOYMX7WX6Input13.dropShadow.replace("url(#drop-shadow)", `url(${chunkOYMX7WX6Input13.svgId}-drop-shadow)`) : "none"}
}
`,
    "getStyles",
  );
});
export { chunkOYMX7WX6A, chunkOYMX7WX6I, chunkOYMX7WX6R, chunkOYMX7WX6T };
