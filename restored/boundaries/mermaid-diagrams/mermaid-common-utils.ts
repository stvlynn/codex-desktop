// Restored from ref/webview/assets/chunk-S3R3BYOJ-CHIqNfyA.js
// Mermaid common rendering utils (primary). app-initial d3-shape curve aliases rewritten to vendor shim.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBumpX,
  curveBumpY,
  curveBundle,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveLinear,
  curveLinearClosed,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
} from "../../vendor/d3-shape-curves";
import { n as mergeN, t as mergeT } from "../../vendor/lodash-merge-runtime";
import { a as mergeX, o as mergeS } from "../lodash-base-for";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import { f, I, k, m, r, s } from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
function chunkS3R3BYOJD(chunkS3R3BYOJInput49, chunkS3R3BYOJInput50) {
  return chunkS3R3BYOJInput49
    ? (chunkS3R3BYOJBinding2[
        `curve${chunkS3R3BYOJInput49.charAt(0).toUpperCase() + chunkS3R3BYOJInput49.slice(1)}`
      ] ?? chunkS3R3BYOJInput50)
    : chunkS3R3BYOJInput50;
}
function chunkS3R3BYOJHelper1(chunkS3R3BYOJInput44, chunkS3R3BYOJInput45) {
  let chunkS3R3BYOJBinding91 = chunkS3R3BYOJInput44.trim();
  if (chunkS3R3BYOJBinding91)
    return chunkS3R3BYOJInput45.securityLevel === "loose"
      ? chunkS3R3BYOJBinding91
      : chunkS3R3BYOJBinding1.sanitizeUrl(chunkS3R3BYOJBinding91);
}
function chunkS3R3BYOJHelper2(chunkS3R3BYOJInput51, chunkS3R3BYOJInput52) {
  return !chunkS3R3BYOJInput51 || !chunkS3R3BYOJInput52
    ? 0
    : Math.sqrt(
        (chunkS3R3BYOJInput52.x - chunkS3R3BYOJInput51.x) ** 2 +
          (chunkS3R3BYOJInput52.y - chunkS3R3BYOJInput51.y) ** 2,
      );
}
function chunkS3R3BYOJHelper3(chunkS3R3BYOJInput40) {
  let chunkS3R3BYOJBinding89,
    chunkS3R3BYOJBinding90 = 0;
  return (
    chunkS3R3BYOJInput40.forEach((item) => {
      chunkS3R3BYOJBinding90 += chunkS3R3BYOJHelper2(
        item,
        chunkS3R3BYOJBinding89,
      );
      chunkS3R3BYOJBinding89 = item;
    }),
    chunkS3R3BYOJBinding9(chunkS3R3BYOJInput40, chunkS3R3BYOJBinding90 / 2)
  );
}
function chunkS3R3BYOJHelper4(chunkS3R3BYOJInput66) {
  return chunkS3R3BYOJInput66.length === 1
    ? chunkS3R3BYOJInput66[0]
    : chunkS3R3BYOJHelper3(chunkS3R3BYOJInput66);
}
function chunkS3R3BYOJHelper5(
  chunkS3R3BYOJInput8,
  chunkS3R3BYOJInput9,
  chunkS3R3BYOJInput10,
) {
  let chunkS3R3BYOJBinding32 = structuredClone(chunkS3R3BYOJInput10);
  logger.info("our points", chunkS3R3BYOJBinding32);
  chunkS3R3BYOJInput9 !== "start_left" &&
    chunkS3R3BYOJInput9 !== "start_right" &&
    chunkS3R3BYOJBinding32.reverse();
  let chunkS3R3BYOJBinding33 = chunkS3R3BYOJBinding9(
      chunkS3R3BYOJBinding32,
      25 + chunkS3R3BYOJInput8,
    ),
    chunkS3R3BYOJBinding34 = 10 + chunkS3R3BYOJInput8 * 0.5,
    chunkS3R3BYOJBinding35 = Math.atan2(
      chunkS3R3BYOJBinding32[0].y - chunkS3R3BYOJBinding33.y,
      chunkS3R3BYOJBinding32[0].x - chunkS3R3BYOJBinding33.x,
    ),
    chunkS3R3BYOJBinding36 = {
      x: 0,
      y: 0,
    };
  return (
    chunkS3R3BYOJInput9 === "start_left"
      ? ((chunkS3R3BYOJBinding36.x =
          Math.sin(chunkS3R3BYOJBinding35 + Math.PI) * chunkS3R3BYOJBinding34 +
          (chunkS3R3BYOJBinding32[0].x + chunkS3R3BYOJBinding33.x) / 2),
        (chunkS3R3BYOJBinding36.y =
          -Math.cos(chunkS3R3BYOJBinding35 + Math.PI) * chunkS3R3BYOJBinding34 +
          (chunkS3R3BYOJBinding32[0].y + chunkS3R3BYOJBinding33.y) / 2))
      : chunkS3R3BYOJInput9 === "end_right"
        ? ((chunkS3R3BYOJBinding36.x =
            Math.sin(chunkS3R3BYOJBinding35 - Math.PI) *
              chunkS3R3BYOJBinding34 +
            (chunkS3R3BYOJBinding32[0].x + chunkS3R3BYOJBinding33.x) / 2 -
            5),
          (chunkS3R3BYOJBinding36.y =
            -Math.cos(chunkS3R3BYOJBinding35 - Math.PI) *
              chunkS3R3BYOJBinding34 +
            (chunkS3R3BYOJBinding32[0].y + chunkS3R3BYOJBinding33.y) / 2 -
            5))
        : chunkS3R3BYOJInput9 === "end_left"
          ? ((chunkS3R3BYOJBinding36.x =
              Math.sin(chunkS3R3BYOJBinding35) * chunkS3R3BYOJBinding34 +
              (chunkS3R3BYOJBinding32[0].x + chunkS3R3BYOJBinding33.x) / 2 -
              5),
            (chunkS3R3BYOJBinding36.y =
              -Math.cos(chunkS3R3BYOJBinding35) * chunkS3R3BYOJBinding34 +
              (chunkS3R3BYOJBinding32[0].y + chunkS3R3BYOJBinding33.y) / 2 -
              5))
          : ((chunkS3R3BYOJBinding36.x =
              Math.sin(chunkS3R3BYOJBinding35) * chunkS3R3BYOJBinding34 +
              (chunkS3R3BYOJBinding32[0].x + chunkS3R3BYOJBinding33.x) / 2),
            (chunkS3R3BYOJBinding36.y =
              -Math.cos(chunkS3R3BYOJBinding35) * chunkS3R3BYOJBinding34 +
              (chunkS3R3BYOJBinding32[0].y + chunkS3R3BYOJBinding33.y) / 2)),
    chunkS3R3BYOJBinding36
  );
}
function chunkS3R3BYOJC(chunkS3R3BYOJInput33) {
  let chunkS3R3BYOJBinding74 = "",
    chunkS3R3BYOJBinding75 = "";
  for (let chunkS3R3BYOJBinding86 of chunkS3R3BYOJInput33)
    chunkS3R3BYOJBinding86 !== undefined &&
      (chunkS3R3BYOJBinding86.startsWith("color:") ||
      chunkS3R3BYOJBinding86.startsWith("text-align:")
        ? (chunkS3R3BYOJBinding75 =
            chunkS3R3BYOJBinding75 + chunkS3R3BYOJBinding86 + ";")
        : (chunkS3R3BYOJBinding74 =
            chunkS3R3BYOJBinding74 + chunkS3R3BYOJBinding86 + ";"));
  return {
    style: chunkS3R3BYOJBinding74,
    labelStyle: chunkS3R3BYOJBinding75,
  };
}
function chunkS3R3BYOJHelper6(chunkS3R3BYOJInput39) {
  let chunkS3R3BYOJBinding88 = "";
  for (
    let chunkS3R3BYOJBinding92 = 0;
    chunkS3R3BYOJBinding92 < chunkS3R3BYOJInput39;
    chunkS3R3BYOJBinding92++
  )
    chunkS3R3BYOJBinding88 += "0123456789abcdef".charAt(
      Math.floor(Math.random() * 16),
    );
  return chunkS3R3BYOJBinding88;
}
function chunkS3R3BYOJT(chunkS3R3BYOJInput68, chunkS3R3BYOJInput69) {
  return chunkS3R3BYOJBinding15(chunkS3R3BYOJInput68, chunkS3R3BYOJInput69)
    .height;
}
function chunkS3R3BYOJN(chunkS3R3BYOJInput70, chunkS3R3BYOJInput71) {
  return chunkS3R3BYOJBinding15(chunkS3R3BYOJInput70, chunkS3R3BYOJInput71)
    .width;
}
function chunkS3R3BYOJF(chunkS3R3BYOJInput75) {
  return "str" in chunkS3R3BYOJInput75;
}
function chunkS3R3BYOJR(chunkS3R3BYOJInput72, chunkS3R3BYOJInput73) {
  return mergeN({}, chunkS3R3BYOJInput72, chunkS3R3BYOJInput73);
}
function chunkS3R3BYOJL(chunkS3R3BYOJInput76) {
  return chunkS3R3BYOJInput76 ?? null;
}
function chunkS3R3BYOJHelper7(chunkS3R3BYOJInput34, chunkS3R3BYOJInput35) {
  let chunkS3R3BYOJBinding77 = Math.round(chunkS3R3BYOJInput34.x),
    chunkS3R3BYOJBinding78 = Math.round(chunkS3R3BYOJInput34.y),
    chunkS3R3BYOJBinding79 = chunkS3R3BYOJInput35.replace(
      /(\d+\.\d+)/g,
      (chunkS3R3BYOJInput74) =>
        Math.round(parseFloat(chunkS3R3BYOJInput74)).toString(),
    );
  return (
    chunkS3R3BYOJBinding79.includes(chunkS3R3BYOJBinding77.toString()) ||
    chunkS3R3BYOJBinding79.includes(chunkS3R3BYOJBinding78.toString())
  );
}
var chunkS3R3BYOJBinding1,
  chunkS3R3BYOJBinding2,
  chunkS3R3BYOJBinding3,
  chunkS3R3BYOJBinding4,
  chunkS3R3BYOJBinding5,
  chunkS3R3BYOJH,
  chunkS3R3BYOJBinding6,
  chunkS3R3BYOJBinding7,
  chunkS3R3BYOJBinding8,
  chunkS3R3BYOJBinding9,
  chunkS3R3BYOJBinding10,
  chunkS3R3BYOJBinding11,
  chunkS3R3BYOJO,
  chunkS3R3BYOJM,
  chunkS3R3BYOJBinding12,
  chunkS3R3BYOJBinding13,
  chunkS3R3BYOJUnderscore,
  chunkS3R3BYOJBinding14,
  chunkS3R3BYOJBinding15,
  chunkS3R3BYOJBinding16,
  chunkS3R3BYOJBinding17,
  chunkS3R3BYOJBinding18,
  chunkS3R3BYOJBinding19,
  chunkS3R3BYOJP,
  chunkS3R3BYOJG,
  chunkS3R3BYOJA,
  chunkS3R3BYOJI,
  chunkS3R3BYOJS;
export const chunkS3R3BYOJU = esmInit(() => {
  k();
  initDayjsLoggerRuntime();
  chunkS3R3BYOJBinding1 = dist();
  ensureD3SelectionRuntimeT();
  mergeX();
  mergeT();
  chunkS3R3BYOJBinding2 = {
    curveBasis,
    curveBasisClosed,
    curveBasisOpen,
    curveBumpX,
    curveBumpY,
    curveBundle,
    curveCardinalClosed,
    curveCardinalOpen,
    curveCardinal,
    curveCatmullRomClosed,
    curveCatmullRomOpen,
    curveCatmullRom,
    curveLinear,
    curveLinearClosed,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
  };
  chunkS3R3BYOJBinding3 =
    /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  chunkS3R3BYOJBinding4 = defineFunctionName(function (
    chunkS3R3BYOJInput20,
    chunkS3R3BYOJInput21,
  ) {
    let chunkS3R3BYOJBinding57 = chunkS3R3BYOJBinding5(
        chunkS3R3BYOJInput20,
        /(?:init\b)|(?:initialize\b)/,
      ),
      chunkS3R3BYOJBinding58 = {};
    if (Array.isArray(chunkS3R3BYOJBinding57)) {
      let chunkS3R3BYOJBinding93 = chunkS3R3BYOJBinding57.map(
        (item) => item.args,
      );
      I(chunkS3R3BYOJBinding93);
      chunkS3R3BYOJBinding58 = r(chunkS3R3BYOJBinding58, [
        ...chunkS3R3BYOJBinding93,
      ]);
    } else chunkS3R3BYOJBinding58 = chunkS3R3BYOJBinding57.args;
    if (!chunkS3R3BYOJBinding58) return;
    let chunkS3R3BYOJBinding59 = f(chunkS3R3BYOJInput20, chunkS3R3BYOJInput21);
    return (
      chunkS3R3BYOJBinding58.config !== undefined &&
        (chunkS3R3BYOJBinding59 === "flowchart-v2" &&
          (chunkS3R3BYOJBinding59 = "flowchart"),
        (chunkS3R3BYOJBinding58[chunkS3R3BYOJBinding59] =
          chunkS3R3BYOJBinding58.config),
        delete chunkS3R3BYOJBinding58.config),
      chunkS3R3BYOJBinding58
    );
  }, "detectInit");
  chunkS3R3BYOJBinding5 = defineFunctionName(function (
    chunkS3R3BYOJInput3,
    chunkS3R3BYOJInput4 = null,
  ) {
    try {
      let chunkS3R3BYOJBinding29 = RegExp(
        `[%]{2}(?![{]${chunkS3R3BYOJBinding3.source})(?=[}][%]{2}).*
`,
        "ig",
      );
      chunkS3R3BYOJInput3 = chunkS3R3BYOJInput3
        .trim()
        .replace(chunkS3R3BYOJBinding29, "")
        .replace(/'/gm, '"');
      logger.debug(
        `Detecting diagram directive${chunkS3R3BYOJInput4 === null ? "" : " type:" + chunkS3R3BYOJInput4} based on the text:${chunkS3R3BYOJInput3}`,
      );
      let chunkS3R3BYOJBinding30,
        chunkS3R3BYOJBinding31 = [];
      for (; (chunkS3R3BYOJBinding30 = m.exec(chunkS3R3BYOJInput3)) !== null; )
        if (
          (chunkS3R3BYOJBinding30.index === m.lastIndex && m.lastIndex++,
          (chunkS3R3BYOJBinding30 && !chunkS3R3BYOJInput4) ||
            (chunkS3R3BYOJInput4 &&
              chunkS3R3BYOJBinding30[1]?.match(chunkS3R3BYOJInput4)) ||
            (chunkS3R3BYOJInput4 &&
              chunkS3R3BYOJBinding30[2]?.match(chunkS3R3BYOJInput4)))
        ) {
          let chunkS3R3BYOJBinding80 = chunkS3R3BYOJBinding30[1]
              ? chunkS3R3BYOJBinding30[1]
              : chunkS3R3BYOJBinding30[2],
            chunkS3R3BYOJBinding81 = chunkS3R3BYOJBinding30[3]
              ? chunkS3R3BYOJBinding30[3].trim()
              : chunkS3R3BYOJBinding30[4]
                ? JSON.parse(chunkS3R3BYOJBinding30[4].trim())
                : null;
          chunkS3R3BYOJBinding31.push({
            type: chunkS3R3BYOJBinding80,
            args: chunkS3R3BYOJBinding81,
          });
        }
      return chunkS3R3BYOJBinding31.length === 0
        ? {
            type: chunkS3R3BYOJInput3,
            args: null,
          }
        : chunkS3R3BYOJBinding31.length === 1
          ? chunkS3R3BYOJBinding31[0]
          : chunkS3R3BYOJBinding31;
    } catch (chunkS3R3BYOJBinding76) {
      return (
        logger.error(
          `ERROR: ${chunkS3R3BYOJBinding76.message} - Unable to parse directive type: '${chunkS3R3BYOJInput4}' based on the text: '${chunkS3R3BYOJInput3}'`,
        ),
        {
          type: undefined,
          args: null,
        }
      );
    }
  }, "detectDirective");
  chunkS3R3BYOJH = defineFunctionName(function (chunkS3R3BYOJInput67) {
    return chunkS3R3BYOJInput67.replace(m, "");
  }, "removeDirectives");
  chunkS3R3BYOJBinding6 = defineFunctionName(function (
    chunkS3R3BYOJInput46,
    chunkS3R3BYOJInput47,
  ) {
    for (let [
      chunkS3R3BYOJBinding95,
      chunkS3R3BYOJBinding96,
    ] of chunkS3R3BYOJInput47.entries())
      if (chunkS3R3BYOJBinding96.match(chunkS3R3BYOJInput46))
        return chunkS3R3BYOJBinding95;
    return -1;
  }, "isSubstringInArray");
  defineFunctionName(chunkS3R3BYOJD, "interpolateToCurve");
  defineFunctionName(chunkS3R3BYOJHelper1, "formatUrl");
  chunkS3R3BYOJBinding7 = defineFunctionName(
    (chunkS3R3BYOJInput25, ...chunkS3R3BYOJInput26) => {
      let chunkS3R3BYOJBinding67 = chunkS3R3BYOJInput25.split("."),
        chunkS3R3BYOJBinding68 = chunkS3R3BYOJBinding67.length - 1,
        chunkS3R3BYOJBinding69 = chunkS3R3BYOJBinding67[chunkS3R3BYOJBinding68],
        chunkS3R3BYOJBinding70 = window;
      for (
        let chunkS3R3BYOJBinding85 = 0;
        chunkS3R3BYOJBinding85 < chunkS3R3BYOJBinding68;
        chunkS3R3BYOJBinding85++
      )
        if (
          ((chunkS3R3BYOJBinding70 =
            chunkS3R3BYOJBinding70[
              chunkS3R3BYOJBinding67[chunkS3R3BYOJBinding85]
            ]),
          !chunkS3R3BYOJBinding70)
        ) {
          logger.error(
            `Function name: ${chunkS3R3BYOJInput25} not found in window`,
          );
          return;
        }
      chunkS3R3BYOJBinding70[chunkS3R3BYOJBinding69](...chunkS3R3BYOJInput26);
    },
    "runFunc",
  );
  defineFunctionName(chunkS3R3BYOJHelper2, "distance");
  defineFunctionName(chunkS3R3BYOJHelper3, "traverseEdge");
  defineFunctionName(chunkS3R3BYOJHelper4, "calcLabelPosition");
  chunkS3R3BYOJBinding8 = defineFunctionName(
    (chunkS3R3BYOJInput60, chunkS3R3BYOJInput61 = 2) => {
      let chunkS3R3BYOJBinding94 = 10 ** chunkS3R3BYOJInput61;
      return (
        Math.round(chunkS3R3BYOJInput60 * chunkS3R3BYOJBinding94) /
        chunkS3R3BYOJBinding94
      );
    },
    "roundNumber",
  );
  chunkS3R3BYOJBinding9 = defineFunctionName(
    (chunkS3R3BYOJInput13, chunkS3R3BYOJInput14) => {
      let chunkS3R3BYOJBinding44,
        chunkS3R3BYOJBinding45 = chunkS3R3BYOJInput14;
      for (let chunkS3R3BYOJBinding56 of chunkS3R3BYOJInput13) {
        if (chunkS3R3BYOJBinding44) {
          let chunkS3R3BYOJBinding61 = chunkS3R3BYOJHelper2(
            chunkS3R3BYOJBinding56,
            chunkS3R3BYOJBinding44,
          );
          if (chunkS3R3BYOJBinding61 === 0) return chunkS3R3BYOJBinding44;
          if (chunkS3R3BYOJBinding61 < chunkS3R3BYOJBinding45)
            chunkS3R3BYOJBinding45 -= chunkS3R3BYOJBinding61;
          else {
            let chunkS3R3BYOJBinding66 =
              chunkS3R3BYOJBinding45 / chunkS3R3BYOJBinding61;
            if (chunkS3R3BYOJBinding66 <= 0) return chunkS3R3BYOJBinding44;
            if (chunkS3R3BYOJBinding66 >= 1)
              return {
                x: chunkS3R3BYOJBinding56.x,
                y: chunkS3R3BYOJBinding56.y,
              };
            if (chunkS3R3BYOJBinding66 > 0 && chunkS3R3BYOJBinding66 < 1)
              return {
                x: chunkS3R3BYOJBinding8(
                  (1 - chunkS3R3BYOJBinding66) * chunkS3R3BYOJBinding44.x +
                    chunkS3R3BYOJBinding66 * chunkS3R3BYOJBinding56.x,
                  5,
                ),
                y: chunkS3R3BYOJBinding8(
                  (1 - chunkS3R3BYOJBinding66) * chunkS3R3BYOJBinding44.y +
                    chunkS3R3BYOJBinding66 * chunkS3R3BYOJBinding56.y,
                  5,
                ),
              };
          }
        }
        chunkS3R3BYOJBinding44 = chunkS3R3BYOJBinding56;
      }
      throw Error("Could not find a suitable point for the given distance");
    },
    "calculatePoint",
  );
  chunkS3R3BYOJBinding10 = defineFunctionName(
    (chunkS3R3BYOJInput22, chunkS3R3BYOJInput23, chunkS3R3BYOJInput24) => {
      logger.info(`our points ${JSON.stringify(chunkS3R3BYOJInput23)}`);
      chunkS3R3BYOJInput23[0] !== chunkS3R3BYOJInput24 &&
        (chunkS3R3BYOJInput23 = chunkS3R3BYOJInput23.reverse());
      let chunkS3R3BYOJBinding62 = chunkS3R3BYOJBinding9(
          chunkS3R3BYOJInput23,
          25,
        ),
        chunkS3R3BYOJBinding63 = chunkS3R3BYOJInput22 ? 10 : 5,
        chunkS3R3BYOJBinding64 = Math.atan2(
          chunkS3R3BYOJInput23[0].y - chunkS3R3BYOJBinding62.y,
          chunkS3R3BYOJInput23[0].x - chunkS3R3BYOJBinding62.x,
        ),
        chunkS3R3BYOJBinding65 = {
          x: 0,
          y: 0,
        };
      return (
        (chunkS3R3BYOJBinding65.x =
          Math.sin(chunkS3R3BYOJBinding64) * chunkS3R3BYOJBinding63 +
          (chunkS3R3BYOJInput23[0].x + chunkS3R3BYOJBinding62.x) / 2),
        (chunkS3R3BYOJBinding65.y =
          -Math.cos(chunkS3R3BYOJBinding64) * chunkS3R3BYOJBinding63 +
          (chunkS3R3BYOJInput23[0].y + chunkS3R3BYOJBinding62.y) / 2),
        chunkS3R3BYOJBinding65
      );
    },
    "calcCardinalityPosition",
  );
  defineFunctionName(chunkS3R3BYOJHelper5, "calcTerminalLabelPosition");
  defineFunctionName(chunkS3R3BYOJC, "getStylesFromArray");
  chunkS3R3BYOJBinding11 = 0;
  chunkS3R3BYOJO = defineFunctionName(
    () => (
      chunkS3R3BYOJBinding11++,
      "id-" +
        Math.random().toString(36).substr(2, 12) +
        "-" +
        chunkS3R3BYOJBinding11
    ),
    "generateId",
  );
  defineFunctionName(chunkS3R3BYOJHelper6, "makeRandomHex");
  chunkS3R3BYOJM = defineFunctionName(
    (chunkS3R3BYOJInput77) => chunkS3R3BYOJHelper6(chunkS3R3BYOJInput77.length),
    "random",
  );
  chunkS3R3BYOJBinding12 = defineFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: undefined,
      text: "",
    };
  }, "getTextObj");
  chunkS3R3BYOJBinding13 = defineFunctionName(function (
    chunkS3R3BYOJInput11,
    chunkS3R3BYOJInput12,
  ) {
    let chunkS3R3BYOJBinding40 = chunkS3R3BYOJInput12.text.replace(
        s.lineBreakRegex,
        " ",
      ),
      [, chunkS3R3BYOJBinding41] = chunkS3R3BYOJP(
        chunkS3R3BYOJInput12.fontSize,
      ),
      chunkS3R3BYOJBinding42 = chunkS3R3BYOJInput11.append("text");
    chunkS3R3BYOJBinding42.attr("x", chunkS3R3BYOJInput12.x);
    chunkS3R3BYOJBinding42.attr("y", chunkS3R3BYOJInput12.y);
    chunkS3R3BYOJBinding42.style("text-anchor", chunkS3R3BYOJInput12.anchor);
    chunkS3R3BYOJBinding42.style(
      "font-family",
      chunkS3R3BYOJInput12.fontFamily,
    );
    chunkS3R3BYOJBinding42.style("font-size", chunkS3R3BYOJBinding41);
    chunkS3R3BYOJBinding42.style(
      "font-weight",
      chunkS3R3BYOJInput12.fontWeight,
    );
    chunkS3R3BYOJBinding42.attr("fill", chunkS3R3BYOJInput12.fill);
    chunkS3R3BYOJInput12.class !== undefined &&
      chunkS3R3BYOJBinding42.attr("class", chunkS3R3BYOJInput12.class);
    let chunkS3R3BYOJBinding43 = chunkS3R3BYOJBinding42.append("tspan");
    return (
      chunkS3R3BYOJBinding43.attr(
        "x",
        chunkS3R3BYOJInput12.x + chunkS3R3BYOJInput12.textMargin * 2,
      ),
      chunkS3R3BYOJBinding43.attr("fill", chunkS3R3BYOJInput12.fill),
      chunkS3R3BYOJBinding43.text(chunkS3R3BYOJBinding40),
      chunkS3R3BYOJBinding42
    );
  }, "drawSimpleText");
  chunkS3R3BYOJUnderscore = mergeS(
    (chunkS3R3BYOJInput5, chunkS3R3BYOJInput6, chunkS3R3BYOJInput7) => {
      if (
        !chunkS3R3BYOJInput5 ||
        ((chunkS3R3BYOJInput7 = Object.assign(
          {
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Arial",
            joinWith: "<br/>",
          },
          chunkS3R3BYOJInput7,
        )),
        s.lineBreakRegex.test(chunkS3R3BYOJInput5))
      )
        return chunkS3R3BYOJInput5;
      let chunkS3R3BYOJBinding26 = chunkS3R3BYOJInput5
          .split(" ")
          .filter(Boolean),
        chunkS3R3BYOJBinding27 = [],
        chunkS3R3BYOJBinding28 = "";
      return (
        chunkS3R3BYOJBinding26.forEach((item, index) => {
          let chunkS3R3BYOJBinding53 = chunkS3R3BYOJN(
              `${item} `,
              chunkS3R3BYOJInput7,
            ),
            chunkS3R3BYOJBinding54 = chunkS3R3BYOJN(
              chunkS3R3BYOJBinding28,
              chunkS3R3BYOJInput7,
            );
          if (chunkS3R3BYOJBinding53 > chunkS3R3BYOJInput6) {
            let { hyphenatedStrings, remainingWord } = chunkS3R3BYOJBinding14(
              item,
              chunkS3R3BYOJInput6,
              "-",
              chunkS3R3BYOJInput7,
            );
            chunkS3R3BYOJBinding27.push(
              chunkS3R3BYOJBinding28,
              ...hyphenatedStrings,
            );
            chunkS3R3BYOJBinding28 = remainingWord;
          } else
            chunkS3R3BYOJBinding54 + chunkS3R3BYOJBinding53 >=
            chunkS3R3BYOJInput6
              ? (chunkS3R3BYOJBinding27.push(chunkS3R3BYOJBinding28),
                (chunkS3R3BYOJBinding28 = item))
              : (chunkS3R3BYOJBinding28 = [chunkS3R3BYOJBinding28, item]
                  .filter(Boolean)
                  .join(" "));
          index + 1 === chunkS3R3BYOJBinding26.length &&
            chunkS3R3BYOJBinding27.push(chunkS3R3BYOJBinding28);
        }),
        chunkS3R3BYOJBinding27
          .filter((item) => item !== "")
          .join(chunkS3R3BYOJInput7.joinWith)
      );
    },
    (chunkS3R3BYOJInput53, chunkS3R3BYOJInput54, chunkS3R3BYOJInput55) =>
      `${chunkS3R3BYOJInput53}${chunkS3R3BYOJInput54}${chunkS3R3BYOJInput55.fontSize}${chunkS3R3BYOJInput55.fontWeight}${chunkS3R3BYOJInput55.fontFamily}${chunkS3R3BYOJInput55.joinWith}`,
  );
  chunkS3R3BYOJBinding14 = mergeS(
    (
      chunkS3R3BYOJInput15,
      chunkS3R3BYOJInput16,
      chunkS3R3BYOJInput17 = "-",
      chunkS3R3BYOJInput18,
    ) => {
      chunkS3R3BYOJInput18 = Object.assign(
        {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Arial",
          margin: 0,
        },
        chunkS3R3BYOJInput18,
      );
      let chunkS3R3BYOJBinding47 = [...chunkS3R3BYOJInput15],
        chunkS3R3BYOJBinding48 = [],
        chunkS3R3BYOJBinding49 = "";
      return (
        chunkS3R3BYOJBinding47.forEach((item, index) => {
          let chunkS3R3BYOJBinding72 = `${chunkS3R3BYOJBinding49}${item}`;
          if (
            chunkS3R3BYOJN(chunkS3R3BYOJBinding72, chunkS3R3BYOJInput18) >=
            chunkS3R3BYOJInput16
          ) {
            let chunkS3R3BYOJBinding82 = index + 1,
              chunkS3R3BYOJBinding83 =
                chunkS3R3BYOJBinding47.length === chunkS3R3BYOJBinding82,
              chunkS3R3BYOJBinding84 = `${chunkS3R3BYOJBinding72}${chunkS3R3BYOJInput17}`;
            chunkS3R3BYOJBinding48.push(
              chunkS3R3BYOJBinding83
                ? chunkS3R3BYOJBinding72
                : chunkS3R3BYOJBinding84,
            );
            chunkS3R3BYOJBinding49 = "";
          } else chunkS3R3BYOJBinding49 = chunkS3R3BYOJBinding72;
        }),
        {
          hyphenatedStrings: chunkS3R3BYOJBinding48,
          remainingWord: chunkS3R3BYOJBinding49,
        }
      );
    },
    (
      chunkS3R3BYOJInput56,
      chunkS3R3BYOJInput57,
      chunkS3R3BYOJInput58 = "-",
      chunkS3R3BYOJInput59,
    ) =>
      `${chunkS3R3BYOJInput56}${chunkS3R3BYOJInput57}${chunkS3R3BYOJInput58}${chunkS3R3BYOJInput59.fontSize}${chunkS3R3BYOJInput59.fontWeight}${chunkS3R3BYOJInput59.fontFamily}`,
  );
  defineFunctionName(chunkS3R3BYOJT, "calculateTextHeight");
  defineFunctionName(chunkS3R3BYOJN, "calculateTextWidth");
  chunkS3R3BYOJBinding15 = mergeS(
    (chunkS3R3BYOJInput1, chunkS3R3BYOJInput2) => {
      let {
        fontSize = 12,
        fontFamily = "Arial",
        fontWeight = 400,
      } = chunkS3R3BYOJInput2;
      if (!chunkS3R3BYOJInput1)
        return {
          width: 0,
          height: 0,
        };
      let [, chunkS3R3BYOJBinding20] = chunkS3R3BYOJP(fontSize),
        chunkS3R3BYOJBinding21 = ["sans-serif", fontFamily],
        chunkS3R3BYOJBinding22 = chunkS3R3BYOJInput1.split(s.lineBreakRegex),
        chunkS3R3BYOJBinding23 = [],
        chunkS3R3BYOJBinding24 = select("body");
      if (!chunkS3R3BYOJBinding24.remove)
        return {
          width: 0,
          height: 0,
          lineHeight: 0,
        };
      let chunkS3R3BYOJBinding25 = chunkS3R3BYOJBinding24.append("svg");
      for (let chunkS3R3BYOJBinding37 of chunkS3R3BYOJBinding21) {
        let chunkS3R3BYOJBinding38 = 0,
          chunkS3R3BYOJBinding39 = {
            width: 0,
            height: 0,
            lineHeight: 0,
          };
        for (let chunkS3R3BYOJBinding46 of chunkS3R3BYOJBinding22) {
          let chunkS3R3BYOJBinding50 = chunkS3R3BYOJBinding12();
          chunkS3R3BYOJBinding50.text = chunkS3R3BYOJBinding46 || "​";
          let chunkS3R3BYOJBinding51 = chunkS3R3BYOJBinding13(
              chunkS3R3BYOJBinding25,
              chunkS3R3BYOJBinding50,
            )
              .style("font-size", chunkS3R3BYOJBinding20)
              .style("font-weight", fontWeight)
              .style("font-family", chunkS3R3BYOJBinding37),
            chunkS3R3BYOJBinding52 = (chunkS3R3BYOJBinding51._groups ||
              chunkS3R3BYOJBinding51)[0][0].getBBox();
          if (
            chunkS3R3BYOJBinding52.width === 0 &&
            chunkS3R3BYOJBinding52.height === 0
          )
            throw Error("svg element not in render tree");
          chunkS3R3BYOJBinding39.width = Math.round(
            Math.max(
              chunkS3R3BYOJBinding39.width,
              chunkS3R3BYOJBinding52.width,
            ),
          );
          chunkS3R3BYOJBinding38 = Math.round(chunkS3R3BYOJBinding52.height);
          chunkS3R3BYOJBinding39.height += chunkS3R3BYOJBinding38;
          chunkS3R3BYOJBinding39.lineHeight = Math.round(
            Math.max(chunkS3R3BYOJBinding39.lineHeight, chunkS3R3BYOJBinding38),
          );
        }
        chunkS3R3BYOJBinding23.push(chunkS3R3BYOJBinding39);
      }
      return (
        chunkS3R3BYOJBinding25.remove(),
        chunkS3R3BYOJBinding23[
          isNaN(chunkS3R3BYOJBinding23[1].height) ||
          isNaN(chunkS3R3BYOJBinding23[1].width) ||
          isNaN(chunkS3R3BYOJBinding23[1].lineHeight) ||
          (chunkS3R3BYOJBinding23[0].height >
            chunkS3R3BYOJBinding23[1].height &&
            chunkS3R3BYOJBinding23[0].width > chunkS3R3BYOJBinding23[1].width &&
            chunkS3R3BYOJBinding23[0].lineHeight >
              chunkS3R3BYOJBinding23[1].lineHeight)
            ? 0
            : 1
        ]
      );
    },
    (chunkS3R3BYOJInput64, chunkS3R3BYOJInput65) =>
      `${chunkS3R3BYOJInput64}${chunkS3R3BYOJInput65.fontSize}${chunkS3R3BYOJInput65.fontWeight}${chunkS3R3BYOJInput65.fontFamily}`,
  );
  chunkS3R3BYOJBinding16 = class {
    constructor(chunkS3R3BYOJInput36 = false, chunkS3R3BYOJInput37) {
      this.count = 0;
      this.count = chunkS3R3BYOJInput37 ? chunkS3R3BYOJInput37.length : 0;
      this.next = chunkS3R3BYOJInput36 ? () => this.count++ : () => Date.now();
    }
    static {
      defineFunctionName(this, "InitIDGenerator");
    }
  };
  chunkS3R3BYOJBinding18 = defineFunctionName(function (chunkS3R3BYOJInput31) {
    return (
      (chunkS3R3BYOJBinding17 ||= document.createElement("div")),
      (chunkS3R3BYOJInput31 = escape(chunkS3R3BYOJInput31)
        .replace(/%26/g, "&")
        .replace(/%23/g, "#")
        .replace(/%3B/g, ";")),
      (chunkS3R3BYOJBinding17.innerHTML = chunkS3R3BYOJInput31),
      unescape(chunkS3R3BYOJBinding17.textContent)
    );
  }, "entityDecode");
  defineFunctionName(chunkS3R3BYOJF, "isDetailedError");
  chunkS3R3BYOJBinding19 = defineFunctionName(
    (
      chunkS3R3BYOJInput27,
      chunkS3R3BYOJInput28,
      chunkS3R3BYOJInput29,
      chunkS3R3BYOJInput30,
    ) => {
      if (!chunkS3R3BYOJInput30) return;
      let chunkS3R3BYOJBinding71 = chunkS3R3BYOJInput27.node()?.getBBox();
      chunkS3R3BYOJBinding71 &&
        chunkS3R3BYOJInput27
          .append("text")
          .text(chunkS3R3BYOJInput30)
          .attr("text-anchor", "middle")
          .attr(
            "x",
            chunkS3R3BYOJBinding71.x + chunkS3R3BYOJBinding71.width / 2,
          )
          .attr("y", -chunkS3R3BYOJInput29)
          .attr("class", chunkS3R3BYOJInput28);
    },
    "insertTitle",
  );
  chunkS3R3BYOJP = defineFunctionName((chunkS3R3BYOJInput32) => {
    if (typeof chunkS3R3BYOJInput32 == "number")
      return [chunkS3R3BYOJInput32, chunkS3R3BYOJInput32 + "px"];
    let chunkS3R3BYOJBinding73 = parseInt(chunkS3R3BYOJInput32 ?? "", 10);
    return Number.isNaN(chunkS3R3BYOJBinding73)
      ? [undefined, undefined]
      : chunkS3R3BYOJInput32 === String(chunkS3R3BYOJBinding73)
        ? [chunkS3R3BYOJBinding73, chunkS3R3BYOJInput32 + "px"]
        : [chunkS3R3BYOJBinding73, chunkS3R3BYOJInput32];
  }, "parseFontSize");
  defineFunctionName(chunkS3R3BYOJR, "cleanAndMerge");
  chunkS3R3BYOJG = {
    assignWithDepth: r,
    wrapLabel: chunkS3R3BYOJUnderscore,
    calculateTextHeight: chunkS3R3BYOJT,
    calculateTextWidth: chunkS3R3BYOJN,
    calculateTextDimensions: chunkS3R3BYOJBinding15,
    cleanAndMerge: chunkS3R3BYOJR,
    detectInit: chunkS3R3BYOJBinding4,
    detectDirective: chunkS3R3BYOJBinding5,
    isSubstringInArray: chunkS3R3BYOJBinding6,
    interpolateToCurve: chunkS3R3BYOJD,
    calcLabelPosition: chunkS3R3BYOJHelper4,
    calcCardinalityPosition: chunkS3R3BYOJBinding10,
    calcTerminalLabelPosition: chunkS3R3BYOJHelper5,
    formatUrl: chunkS3R3BYOJHelper1,
    getStylesFromArray: chunkS3R3BYOJC,
    generateId: chunkS3R3BYOJO,
    random: chunkS3R3BYOJM,
    runFunc: chunkS3R3BYOJBinding7,
    entityDecode: chunkS3R3BYOJBinding18,
    insertTitle: chunkS3R3BYOJBinding19,
    isLabelCoordinateInPath: chunkS3R3BYOJHelper7,
    parseFontSize: chunkS3R3BYOJP,
    InitIDGenerator: chunkS3R3BYOJBinding16,
  };
  chunkS3R3BYOJA = defineFunctionName(function (chunkS3R3BYOJInput19) {
    let chunkS3R3BYOJBinding55 = chunkS3R3BYOJInput19;
    return (
      (chunkS3R3BYOJBinding55 = chunkS3R3BYOJBinding55.replace(
        /style.*:\S*#.*;/g,
        function (chunkS3R3BYOJInput62) {
          return chunkS3R3BYOJInput62.substring(
            0,
            chunkS3R3BYOJInput62.length - 1,
          );
        },
      )),
      (chunkS3R3BYOJBinding55 = chunkS3R3BYOJBinding55.replace(
        /classDef.*:\S*#.*;/g,
        function (chunkS3R3BYOJInput63) {
          return chunkS3R3BYOJInput63.substring(
            0,
            chunkS3R3BYOJInput63.length - 1,
          );
        },
      )),
      (chunkS3R3BYOJBinding55 = chunkS3R3BYOJBinding55.replace(
        /#\w+;/g,
        function (chunkS3R3BYOJInput38) {
          let chunkS3R3BYOJBinding87 = chunkS3R3BYOJInput38.substring(
            1,
            chunkS3R3BYOJInput38.length - 1,
          );
          return /^\+?\d+$/.test(chunkS3R3BYOJBinding87)
            ? "ﬂ°°" + chunkS3R3BYOJBinding87 + "¶ß"
            : "ﬂ°" + chunkS3R3BYOJBinding87 + "¶ß";
        },
      )),
      chunkS3R3BYOJBinding55
    );
  }, "encodeEntities");
  chunkS3R3BYOJI = defineFunctionName(function (chunkS3R3BYOJInput48) {
    return chunkS3R3BYOJInput48
      .replace(/ﬂ°°/g, "&#")
      .replace(/ﬂ°/g, "&")
      .replace(/¶ß/g, ";");
  }, "decodeEntities");
  chunkS3R3BYOJS = defineFunctionName(
    (
      chunkS3R3BYOJInput41,
      chunkS3R3BYOJInput42,
      { counter = 0, prefix, suffix },
      chunkS3R3BYOJInput43,
    ) =>
      chunkS3R3BYOJInput43 ||
      `${prefix ? `${prefix}_` : ""}${chunkS3R3BYOJInput41}_${chunkS3R3BYOJInput42}_${counter}${suffix ? `_${suffix}` : ""}`,
    "getEdgeId",
  );
  defineFunctionName(chunkS3R3BYOJL, "handleUndefinedAttr");
  defineFunctionName(chunkS3R3BYOJHelper7, "isLabelCoordinateInPath");
});
export {
  chunkS3R3BYOJUnderscore,
  chunkS3R3BYOJA,
  chunkS3R3BYOJC,
  chunkS3R3BYOJD,
  chunkS3R3BYOJF,
  chunkS3R3BYOJG,
  chunkS3R3BYOJH,
  chunkS3R3BYOJI,
  chunkS3R3BYOJL,
  chunkS3R3BYOJM,
  chunkS3R3BYOJN,
  chunkS3R3BYOJO,
  chunkS3R3BYOJP,
  chunkS3R3BYOJR,
  chunkS3R3BYOJS,
  chunkS3R3BYOJT,
};
