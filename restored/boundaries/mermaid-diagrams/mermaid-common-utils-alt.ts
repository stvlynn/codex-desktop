// Restored from ref/webview/assets/chunk-5PVQY5BW-CGFDLcnR.js
// Mermaid common rendering utils (alt). app-initial d3-shape curve aliases rewritten to vendor shim.
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
import { a, o } from "../lodash-base-for";
import { n, t } from "../lodash-merge-internals";
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
import { A, f, L, m, r, s } from "../../diagrams/mermaid-config-alt";
function chunk5PVQY5BWD(chunk5PVQY5BWInput49, chunk5PVQY5BWInput50) {
  return chunk5PVQY5BWInput49
    ? (chunk5PVQY5BWBinding2[
        `curve${chunk5PVQY5BWInput49.charAt(0).toUpperCase() + chunk5PVQY5BWInput49.slice(1)}`
      ] ?? chunk5PVQY5BWInput50)
    : chunk5PVQY5BWInput50;
}
function chunk5PVQY5BWHelper1(chunk5PVQY5BWInput44, chunk5PVQY5BWInput45) {
  let chunk5PVQY5BWBinding90 = chunk5PVQY5BWInput44.trim();
  if (chunk5PVQY5BWBinding90)
    return chunk5PVQY5BWInput45.securityLevel === "loose"
      ? chunk5PVQY5BWBinding90
      : chunk5PVQY5BWBinding1.sanitizeUrl(chunk5PVQY5BWBinding90);
}
function chunk5PVQY5BWHelper2(chunk5PVQY5BWInput51, chunk5PVQY5BWInput52) {
  return !chunk5PVQY5BWInput51 || !chunk5PVQY5BWInput52
    ? 0
    : Math.sqrt(
        (chunk5PVQY5BWInput52.x - chunk5PVQY5BWInput51.x) ** 2 +
          (chunk5PVQY5BWInput52.y - chunk5PVQY5BWInput51.y) ** 2,
      );
}
function chunk5PVQY5BWHelper3(chunk5PVQY5BWInput40) {
  let chunk5PVQY5BWBinding88,
    chunk5PVQY5BWBinding89 = 0;
  return (
    chunk5PVQY5BWInput40.forEach((item) => {
      chunk5PVQY5BWBinding89 += chunk5PVQY5BWHelper2(
        item,
        chunk5PVQY5BWBinding88,
      );
      chunk5PVQY5BWBinding88 = item;
    }),
    chunk5PVQY5BWBinding8(chunk5PVQY5BWInput40, chunk5PVQY5BWBinding89 / 2)
  );
}
function chunk5PVQY5BWHelper4(chunk5PVQY5BWInput66) {
  return chunk5PVQY5BWInput66.length === 1
    ? chunk5PVQY5BWInput66[0]
    : chunk5PVQY5BWHelper3(chunk5PVQY5BWInput66);
}
function chunk5PVQY5BWHelper5(
  chunk5PVQY5BWInput8,
  chunk5PVQY5BWInput9,
  chunk5PVQY5BWInput10,
) {
  let chunk5PVQY5BWBinding31 = structuredClone(chunk5PVQY5BWInput10);
  logger.info("our points", chunk5PVQY5BWBinding31);
  chunk5PVQY5BWInput9 !== "start_left" &&
    chunk5PVQY5BWInput9 !== "start_right" &&
    chunk5PVQY5BWBinding31.reverse();
  let chunk5PVQY5BWBinding32 = chunk5PVQY5BWBinding8(
      chunk5PVQY5BWBinding31,
      25 + chunk5PVQY5BWInput8,
    ),
    chunk5PVQY5BWBinding33 = 10 + chunk5PVQY5BWInput8 * 0.5,
    chunk5PVQY5BWBinding34 = Math.atan2(
      chunk5PVQY5BWBinding31[0].y - chunk5PVQY5BWBinding32.y,
      chunk5PVQY5BWBinding31[0].x - chunk5PVQY5BWBinding32.x,
    ),
    chunk5PVQY5BWBinding35 = {
      x: 0,
      y: 0,
    };
  return (
    chunk5PVQY5BWInput9 === "start_left"
      ? ((chunk5PVQY5BWBinding35.x =
          Math.sin(chunk5PVQY5BWBinding34 + Math.PI) * chunk5PVQY5BWBinding33 +
          (chunk5PVQY5BWBinding31[0].x + chunk5PVQY5BWBinding32.x) / 2),
        (chunk5PVQY5BWBinding35.y =
          -Math.cos(chunk5PVQY5BWBinding34 + Math.PI) * chunk5PVQY5BWBinding33 +
          (chunk5PVQY5BWBinding31[0].y + chunk5PVQY5BWBinding32.y) / 2))
      : chunk5PVQY5BWInput9 === "end_right"
        ? ((chunk5PVQY5BWBinding35.x =
            Math.sin(chunk5PVQY5BWBinding34 - Math.PI) *
              chunk5PVQY5BWBinding33 +
            (chunk5PVQY5BWBinding31[0].x + chunk5PVQY5BWBinding32.x) / 2 -
            5),
          (chunk5PVQY5BWBinding35.y =
            -Math.cos(chunk5PVQY5BWBinding34 - Math.PI) *
              chunk5PVQY5BWBinding33 +
            (chunk5PVQY5BWBinding31[0].y + chunk5PVQY5BWBinding32.y) / 2 -
            5))
        : chunk5PVQY5BWInput9 === "end_left"
          ? ((chunk5PVQY5BWBinding35.x =
              Math.sin(chunk5PVQY5BWBinding34) * chunk5PVQY5BWBinding33 +
              (chunk5PVQY5BWBinding31[0].x + chunk5PVQY5BWBinding32.x) / 2 -
              5),
            (chunk5PVQY5BWBinding35.y =
              -Math.cos(chunk5PVQY5BWBinding34) * chunk5PVQY5BWBinding33 +
              (chunk5PVQY5BWBinding31[0].y + chunk5PVQY5BWBinding32.y) / 2 -
              5))
          : ((chunk5PVQY5BWBinding35.x =
              Math.sin(chunk5PVQY5BWBinding34) * chunk5PVQY5BWBinding33 +
              (chunk5PVQY5BWBinding31[0].x + chunk5PVQY5BWBinding32.x) / 2),
            (chunk5PVQY5BWBinding35.y =
              -Math.cos(chunk5PVQY5BWBinding34) * chunk5PVQY5BWBinding33 +
              (chunk5PVQY5BWBinding31[0].y + chunk5PVQY5BWBinding32.y) / 2)),
    chunk5PVQY5BWBinding35
  );
}
function chunk5PVQY5BWC(chunk5PVQY5BWInput33) {
  let chunk5PVQY5BWBinding73 = "",
    chunk5PVQY5BWBinding74 = "";
  for (let chunk5PVQY5BWBinding85 of chunk5PVQY5BWInput33)
    chunk5PVQY5BWBinding85 !== undefined &&
      (chunk5PVQY5BWBinding85.startsWith("color:") ||
      chunk5PVQY5BWBinding85.startsWith("text-align:")
        ? (chunk5PVQY5BWBinding74 =
            chunk5PVQY5BWBinding74 + chunk5PVQY5BWBinding85 + ";")
        : (chunk5PVQY5BWBinding73 =
            chunk5PVQY5BWBinding73 + chunk5PVQY5BWBinding85 + ";"));
  return {
    style: chunk5PVQY5BWBinding73,
    labelStyle: chunk5PVQY5BWBinding74,
  };
}
function chunk5PVQY5BWHelper6(chunk5PVQY5BWInput39) {
  let chunk5PVQY5BWBinding87 = "";
  for (
    let chunk5PVQY5BWBinding91 = 0;
    chunk5PVQY5BWBinding91 < chunk5PVQY5BWInput39;
    chunk5PVQY5BWBinding91++
  )
    chunk5PVQY5BWBinding87 += "0123456789abcdef".charAt(
      Math.floor(Math.random() * 16),
    );
  return chunk5PVQY5BWBinding87;
}
function chunk5PVQY5BWT(chunk5PVQY5BWInput68, chunk5PVQY5BWInput69) {
  return chunk5PVQY5BWBinding14(chunk5PVQY5BWInput68, chunk5PVQY5BWInput69)
    .height;
}
function chunk5PVQY5BWN(chunk5PVQY5BWInput70, chunk5PVQY5BWInput71) {
  return chunk5PVQY5BWBinding14(chunk5PVQY5BWInput70, chunk5PVQY5BWInput71)
    .width;
}
function chunk5PVQY5BWF(chunk5PVQY5BWInput75) {
  return "str" in chunk5PVQY5BWInput75;
}
function chunk5PVQY5BWR(chunk5PVQY5BWInput72, chunk5PVQY5BWInput73) {
  return n({}, chunk5PVQY5BWInput72, chunk5PVQY5BWInput73);
}
function chunk5PVQY5BWL(chunk5PVQY5BWInput76) {
  return chunk5PVQY5BWInput76 ?? null;
}
function chunk5PVQY5BWHelper7(chunk5PVQY5BWInput34, chunk5PVQY5BWInput35) {
  let chunk5PVQY5BWBinding76 = Math.round(chunk5PVQY5BWInput34.x),
    chunk5PVQY5BWBinding77 = Math.round(chunk5PVQY5BWInput34.y),
    chunk5PVQY5BWBinding78 = chunk5PVQY5BWInput35.replace(
      /(\d+\.\d+)/g,
      (chunk5PVQY5BWInput74) =>
        Math.round(parseFloat(chunk5PVQY5BWInput74)).toString(),
    );
  return (
    chunk5PVQY5BWBinding78.includes(chunk5PVQY5BWBinding76.toString()) ||
    chunk5PVQY5BWBinding78.includes(chunk5PVQY5BWBinding77.toString())
  );
}
var chunk5PVQY5BWBinding1,
  chunk5PVQY5BWBinding2,
  be,
  chunk5PVQY5BWBinding3,
  chunk5PVQY5BWBinding4,
  chunk5PVQY5BWH,
  chunk5PVQY5BWBinding5,
  chunk5PVQY5BWBinding6,
  chunk5PVQY5BWBinding7,
  chunk5PVQY5BWBinding8,
  chunk5PVQY5BWBinding9,
  chunk5PVQY5BWBinding10,
  chunk5PVQY5BWO,
  chunk5PVQY5BWM,
  chunk5PVQY5BWBinding11,
  chunk5PVQY5BWBinding12,
  chunk5PVQY5BWUnderscore,
  chunk5PVQY5BWBinding13,
  chunk5PVQY5BWBinding14,
  chunk5PVQY5BWBinding15,
  chunk5PVQY5BWBinding16,
  chunk5PVQY5BWBinding17,
  chunk5PVQY5BWBinding18,
  chunk5PVQY5BWP,
  chunk5PVQY5BWG,
  chunk5PVQY5BWA,
  chunk5PVQY5BWI,
  chunk5PVQY5BWS;
export const chunk5PVQY5BWU = esmInit(() => {
  A();
  initDayjsLoggerRuntime();
  chunk5PVQY5BWBinding1 = dist();
  ensureD3SelectionRuntimeT();
  a();
  t();
  chunk5PVQY5BWBinding2 = {
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
  be =
    /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  chunk5PVQY5BWBinding3 = defineFunctionName(function (
    chunk5PVQY5BWInput20,
    chunk5PVQY5BWInput21,
  ) {
    let chunk5PVQY5BWBinding56 = chunk5PVQY5BWBinding4(
        chunk5PVQY5BWInput20,
        /(?:init\b)|(?:initialize\b)/,
      ),
      chunk5PVQY5BWBinding57 = {};
    if (Array.isArray(chunk5PVQY5BWBinding56)) {
      let chunk5PVQY5BWBinding92 = chunk5PVQY5BWBinding56.map(
        (item) => item.args,
      );
      L(chunk5PVQY5BWBinding92);
      chunk5PVQY5BWBinding57 = r(chunk5PVQY5BWBinding57, [
        ...chunk5PVQY5BWBinding92,
      ]);
    } else chunk5PVQY5BWBinding57 = chunk5PVQY5BWBinding56.args;
    if (!chunk5PVQY5BWBinding57) return;
    let chunk5PVQY5BWBinding58 = f(chunk5PVQY5BWInput20, chunk5PVQY5BWInput21);
    return (
      chunk5PVQY5BWBinding57.config !== undefined &&
        (chunk5PVQY5BWBinding58 === "flowchart-v2" &&
          (chunk5PVQY5BWBinding58 = "flowchart"),
        (chunk5PVQY5BWBinding57[chunk5PVQY5BWBinding58] =
          chunk5PVQY5BWBinding57.config),
        delete chunk5PVQY5BWBinding57.config),
      chunk5PVQY5BWBinding57
    );
  }, "detectInit");
  chunk5PVQY5BWBinding4 = defineFunctionName(function (
    chunk5PVQY5BWInput3,
    chunk5PVQY5BWInput4 = null,
  ) {
    try {
      let chunk5PVQY5BWBinding28 = RegExp(
        `[%]{2}(?![{]${be.source})(?=[}][%]{2}).*
`,
        "ig",
      );
      chunk5PVQY5BWInput3 = chunk5PVQY5BWInput3
        .trim()
        .replace(chunk5PVQY5BWBinding28, "")
        .replace(/'/gm, '"');
      logger.debug(
        `Detecting diagram directive${chunk5PVQY5BWInput4 === null ? "" : " type:" + chunk5PVQY5BWInput4} based on the text:${chunk5PVQY5BWInput3}`,
      );
      let chunk5PVQY5BWBinding29,
        chunk5PVQY5BWBinding30 = [];
      for (; (chunk5PVQY5BWBinding29 = m.exec(chunk5PVQY5BWInput3)) !== null; )
        if (
          (chunk5PVQY5BWBinding29.index === m.lastIndex && m.lastIndex++,
          (chunk5PVQY5BWBinding29 && !chunk5PVQY5BWInput4) ||
            (chunk5PVQY5BWInput4 &&
              chunk5PVQY5BWBinding29[1]?.match(chunk5PVQY5BWInput4)) ||
            (chunk5PVQY5BWInput4 &&
              chunk5PVQY5BWBinding29[2]?.match(chunk5PVQY5BWInput4)))
        ) {
          let chunk5PVQY5BWBinding79 = chunk5PVQY5BWBinding29[1]
              ? chunk5PVQY5BWBinding29[1]
              : chunk5PVQY5BWBinding29[2],
            chunk5PVQY5BWBinding80 = chunk5PVQY5BWBinding29[3]
              ? chunk5PVQY5BWBinding29[3].trim()
              : chunk5PVQY5BWBinding29[4]
                ? JSON.parse(chunk5PVQY5BWBinding29[4].trim())
                : null;
          chunk5PVQY5BWBinding30.push({
            type: chunk5PVQY5BWBinding79,
            args: chunk5PVQY5BWBinding80,
          });
        }
      return chunk5PVQY5BWBinding30.length === 0
        ? {
            type: chunk5PVQY5BWInput3,
            args: null,
          }
        : chunk5PVQY5BWBinding30.length === 1
          ? chunk5PVQY5BWBinding30[0]
          : chunk5PVQY5BWBinding30;
    } catch (chunk5PVQY5BWBinding75) {
      return (
        logger.error(
          `ERROR: ${chunk5PVQY5BWBinding75.message} - Unable to parse directive type: '${chunk5PVQY5BWInput4}' based on the text: '${chunk5PVQY5BWInput3}'`,
        ),
        {
          type: undefined,
          args: null,
        }
      );
    }
  }, "detectDirective");
  chunk5PVQY5BWH = defineFunctionName(function (chunk5PVQY5BWInput67) {
    return chunk5PVQY5BWInput67.replace(m, "");
  }, "removeDirectives");
  chunk5PVQY5BWBinding5 = defineFunctionName(function (
    chunk5PVQY5BWInput46,
    chunk5PVQY5BWInput47,
  ) {
    for (let [
      chunk5PVQY5BWBinding94,
      chunk5PVQY5BWBinding95,
    ] of chunk5PVQY5BWInput47.entries())
      if (chunk5PVQY5BWBinding95.match(chunk5PVQY5BWInput46))
        return chunk5PVQY5BWBinding94;
    return -1;
  }, "isSubstringInArray");
  defineFunctionName(chunk5PVQY5BWD, "interpolateToCurve");
  defineFunctionName(chunk5PVQY5BWHelper1, "formatUrl");
  chunk5PVQY5BWBinding6 = defineFunctionName(
    (chunk5PVQY5BWInput25, ...chunk5PVQY5BWInput26) => {
      let chunk5PVQY5BWBinding66 = chunk5PVQY5BWInput25.split("."),
        chunk5PVQY5BWBinding67 = chunk5PVQY5BWBinding66.length - 1,
        chunk5PVQY5BWBinding68 = chunk5PVQY5BWBinding66[chunk5PVQY5BWBinding67],
        chunk5PVQY5BWBinding69 = window;
      for (
        let chunk5PVQY5BWBinding84 = 0;
        chunk5PVQY5BWBinding84 < chunk5PVQY5BWBinding67;
        chunk5PVQY5BWBinding84++
      )
        if (
          ((chunk5PVQY5BWBinding69 =
            chunk5PVQY5BWBinding69[
              chunk5PVQY5BWBinding66[chunk5PVQY5BWBinding84]
            ]),
          !chunk5PVQY5BWBinding69)
        ) {
          logger.error(
            `Function name: ${chunk5PVQY5BWInput25} not found in window`,
          );
          return;
        }
      chunk5PVQY5BWBinding69[chunk5PVQY5BWBinding68](...chunk5PVQY5BWInput26);
    },
    "runFunc",
  );
  defineFunctionName(chunk5PVQY5BWHelper2, "distance");
  defineFunctionName(chunk5PVQY5BWHelper3, "traverseEdge");
  defineFunctionName(chunk5PVQY5BWHelper4, "calcLabelPosition");
  chunk5PVQY5BWBinding7 = defineFunctionName(
    (chunk5PVQY5BWInput60, chunk5PVQY5BWInput61 = 2) => {
      let chunk5PVQY5BWBinding93 = 10 ** chunk5PVQY5BWInput61;
      return (
        Math.round(chunk5PVQY5BWInput60 * chunk5PVQY5BWBinding93) /
        chunk5PVQY5BWBinding93
      );
    },
    "roundNumber",
  );
  chunk5PVQY5BWBinding8 = defineFunctionName(
    (chunk5PVQY5BWInput13, chunk5PVQY5BWInput14) => {
      let chunk5PVQY5BWBinding43,
        chunk5PVQY5BWBinding44 = chunk5PVQY5BWInput14;
      for (let chunk5PVQY5BWBinding55 of chunk5PVQY5BWInput13) {
        if (chunk5PVQY5BWBinding43) {
          let chunk5PVQY5BWBinding60 = chunk5PVQY5BWHelper2(
            chunk5PVQY5BWBinding55,
            chunk5PVQY5BWBinding43,
          );
          if (chunk5PVQY5BWBinding60 === 0) return chunk5PVQY5BWBinding43;
          if (chunk5PVQY5BWBinding60 < chunk5PVQY5BWBinding44)
            chunk5PVQY5BWBinding44 -= chunk5PVQY5BWBinding60;
          else {
            let chunk5PVQY5BWBinding65 =
              chunk5PVQY5BWBinding44 / chunk5PVQY5BWBinding60;
            if (chunk5PVQY5BWBinding65 <= 0) return chunk5PVQY5BWBinding43;
            if (chunk5PVQY5BWBinding65 >= 1)
              return {
                x: chunk5PVQY5BWBinding55.x,
                y: chunk5PVQY5BWBinding55.y,
              };
            if (chunk5PVQY5BWBinding65 > 0 && chunk5PVQY5BWBinding65 < 1)
              return {
                x: chunk5PVQY5BWBinding7(
                  (1 - chunk5PVQY5BWBinding65) * chunk5PVQY5BWBinding43.x +
                    chunk5PVQY5BWBinding65 * chunk5PVQY5BWBinding55.x,
                  5,
                ),
                y: chunk5PVQY5BWBinding7(
                  (1 - chunk5PVQY5BWBinding65) * chunk5PVQY5BWBinding43.y +
                    chunk5PVQY5BWBinding65 * chunk5PVQY5BWBinding55.y,
                  5,
                ),
              };
          }
        }
        chunk5PVQY5BWBinding43 = chunk5PVQY5BWBinding55;
      }
      throw Error("Could not find a suitable point for the given distance");
    },
    "calculatePoint",
  );
  chunk5PVQY5BWBinding9 = defineFunctionName(
    (chunk5PVQY5BWInput22, chunk5PVQY5BWInput23, chunk5PVQY5BWInput24) => {
      logger.info(`our points ${JSON.stringify(chunk5PVQY5BWInput23)}`);
      chunk5PVQY5BWInput23[0] !== chunk5PVQY5BWInput24 &&
        (chunk5PVQY5BWInput23 = chunk5PVQY5BWInput23.reverse());
      let chunk5PVQY5BWBinding61 = chunk5PVQY5BWBinding8(
          chunk5PVQY5BWInput23,
          25,
        ),
        chunk5PVQY5BWBinding62 = chunk5PVQY5BWInput22 ? 10 : 5,
        chunk5PVQY5BWBinding63 = Math.atan2(
          chunk5PVQY5BWInput23[0].y - chunk5PVQY5BWBinding61.y,
          chunk5PVQY5BWInput23[0].x - chunk5PVQY5BWBinding61.x,
        ),
        chunk5PVQY5BWBinding64 = {
          x: 0,
          y: 0,
        };
      return (
        (chunk5PVQY5BWBinding64.x =
          Math.sin(chunk5PVQY5BWBinding63) * chunk5PVQY5BWBinding62 +
          (chunk5PVQY5BWInput23[0].x + chunk5PVQY5BWBinding61.x) / 2),
        (chunk5PVQY5BWBinding64.y =
          -Math.cos(chunk5PVQY5BWBinding63) * chunk5PVQY5BWBinding62 +
          (chunk5PVQY5BWInput23[0].y + chunk5PVQY5BWBinding61.y) / 2),
        chunk5PVQY5BWBinding64
      );
    },
    "calcCardinalityPosition",
  );
  defineFunctionName(chunk5PVQY5BWHelper5, "calcTerminalLabelPosition");
  defineFunctionName(chunk5PVQY5BWC, "getStylesFromArray");
  chunk5PVQY5BWBinding10 = 0;
  chunk5PVQY5BWO = defineFunctionName(
    () => (
      chunk5PVQY5BWBinding10++,
      "id-" +
        Math.random().toString(36).substr(2, 12) +
        "-" +
        chunk5PVQY5BWBinding10
    ),
    "generateId",
  );
  defineFunctionName(chunk5PVQY5BWHelper6, "makeRandomHex");
  chunk5PVQY5BWM = defineFunctionName(
    (chunk5PVQY5BWInput77) => chunk5PVQY5BWHelper6(chunk5PVQY5BWInput77.length),
    "random",
  );
  chunk5PVQY5BWBinding11 = defineFunctionName(function () {
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
  chunk5PVQY5BWBinding12 = defineFunctionName(function (
    chunk5PVQY5BWInput11,
    chunk5PVQY5BWInput12,
  ) {
    let chunk5PVQY5BWBinding39 = chunk5PVQY5BWInput12.text.replace(
        s.lineBreakRegex,
        " ",
      ),
      [, chunk5PVQY5BWBinding40] = chunk5PVQY5BWP(
        chunk5PVQY5BWInput12.fontSize,
      ),
      chunk5PVQY5BWBinding41 = chunk5PVQY5BWInput11.append("text");
    chunk5PVQY5BWBinding41.attr("x", chunk5PVQY5BWInput12.x);
    chunk5PVQY5BWBinding41.attr("y", chunk5PVQY5BWInput12.y);
    chunk5PVQY5BWBinding41.style("text-anchor", chunk5PVQY5BWInput12.anchor);
    chunk5PVQY5BWBinding41.style(
      "font-family",
      chunk5PVQY5BWInput12.fontFamily,
    );
    chunk5PVQY5BWBinding41.style("font-size", chunk5PVQY5BWBinding40);
    chunk5PVQY5BWBinding41.style(
      "font-weight",
      chunk5PVQY5BWInput12.fontWeight,
    );
    chunk5PVQY5BWBinding41.attr("fill", chunk5PVQY5BWInput12.fill);
    chunk5PVQY5BWInput12.class !== undefined &&
      chunk5PVQY5BWBinding41.attr("class", chunk5PVQY5BWInput12.class);
    let chunk5PVQY5BWBinding42 = chunk5PVQY5BWBinding41.append("tspan");
    return (
      chunk5PVQY5BWBinding42.attr(
        "x",
        chunk5PVQY5BWInput12.x + chunk5PVQY5BWInput12.textMargin * 2,
      ),
      chunk5PVQY5BWBinding42.attr("fill", chunk5PVQY5BWInput12.fill),
      chunk5PVQY5BWBinding42.text(chunk5PVQY5BWBinding39),
      chunk5PVQY5BWBinding41
    );
  }, "drawSimpleText");
  chunk5PVQY5BWUnderscore = o(
    (chunk5PVQY5BWInput5, chunk5PVQY5BWInput6, chunk5PVQY5BWInput7) => {
      if (
        !chunk5PVQY5BWInput5 ||
        ((chunk5PVQY5BWInput7 = Object.assign(
          {
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Arial",
            joinWith: "<br/>",
          },
          chunk5PVQY5BWInput7,
        )),
        s.lineBreakRegex.test(chunk5PVQY5BWInput5))
      )
        return chunk5PVQY5BWInput5;
      let chunk5PVQY5BWBinding25 = chunk5PVQY5BWInput5
          .split(" ")
          .filter(Boolean),
        chunk5PVQY5BWBinding26 = [],
        chunk5PVQY5BWBinding27 = "";
      return (
        chunk5PVQY5BWBinding25.forEach((item, index) => {
          let chunk5PVQY5BWBinding52 = chunk5PVQY5BWN(
              `${item} `,
              chunk5PVQY5BWInput7,
            ),
            chunk5PVQY5BWBinding53 = chunk5PVQY5BWN(
              chunk5PVQY5BWBinding27,
              chunk5PVQY5BWInput7,
            );
          if (chunk5PVQY5BWBinding52 > chunk5PVQY5BWInput6) {
            let { hyphenatedStrings, remainingWord } = chunk5PVQY5BWBinding13(
              item,
              chunk5PVQY5BWInput6,
              "-",
              chunk5PVQY5BWInput7,
            );
            chunk5PVQY5BWBinding26.push(
              chunk5PVQY5BWBinding27,
              ...hyphenatedStrings,
            );
            chunk5PVQY5BWBinding27 = remainingWord;
          } else
            chunk5PVQY5BWBinding53 + chunk5PVQY5BWBinding52 >=
            chunk5PVQY5BWInput6
              ? (chunk5PVQY5BWBinding26.push(chunk5PVQY5BWBinding27),
                (chunk5PVQY5BWBinding27 = item))
              : (chunk5PVQY5BWBinding27 = [chunk5PVQY5BWBinding27, item]
                  .filter(Boolean)
                  .join(" "));
          index + 1 === chunk5PVQY5BWBinding25.length &&
            chunk5PVQY5BWBinding26.push(chunk5PVQY5BWBinding27);
        }),
        chunk5PVQY5BWBinding26
          .filter((item) => item !== "")
          .join(chunk5PVQY5BWInput7.joinWith)
      );
    },
    (chunk5PVQY5BWInput53, chunk5PVQY5BWInput54, chunk5PVQY5BWInput55) =>
      `${chunk5PVQY5BWInput53}${chunk5PVQY5BWInput54}${chunk5PVQY5BWInput55.fontSize}${chunk5PVQY5BWInput55.fontWeight}${chunk5PVQY5BWInput55.fontFamily}${chunk5PVQY5BWInput55.joinWith}`,
  );
  chunk5PVQY5BWBinding13 = o(
    (
      chunk5PVQY5BWInput15,
      chunk5PVQY5BWInput16,
      chunk5PVQY5BWInput17 = "-",
      chunk5PVQY5BWInput18,
    ) => {
      chunk5PVQY5BWInput18 = Object.assign(
        {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Arial",
          margin: 0,
        },
        chunk5PVQY5BWInput18,
      );
      let chunk5PVQY5BWBinding46 = [...chunk5PVQY5BWInput15],
        chunk5PVQY5BWBinding47 = [],
        chunk5PVQY5BWBinding48 = "";
      return (
        chunk5PVQY5BWBinding46.forEach((item, index) => {
          let chunk5PVQY5BWBinding71 = `${chunk5PVQY5BWBinding48}${item}`;
          if (
            chunk5PVQY5BWN(chunk5PVQY5BWBinding71, chunk5PVQY5BWInput18) >=
            chunk5PVQY5BWInput16
          ) {
            let chunk5PVQY5BWBinding81 = index + 1,
              chunk5PVQY5BWBinding82 =
                chunk5PVQY5BWBinding46.length === chunk5PVQY5BWBinding81,
              chunk5PVQY5BWBinding83 = `${chunk5PVQY5BWBinding71}${chunk5PVQY5BWInput17}`;
            chunk5PVQY5BWBinding47.push(
              chunk5PVQY5BWBinding82
                ? chunk5PVQY5BWBinding71
                : chunk5PVQY5BWBinding83,
            );
            chunk5PVQY5BWBinding48 = "";
          } else chunk5PVQY5BWBinding48 = chunk5PVQY5BWBinding71;
        }),
        {
          hyphenatedStrings: chunk5PVQY5BWBinding47,
          remainingWord: chunk5PVQY5BWBinding48,
        }
      );
    },
    (
      chunk5PVQY5BWInput56,
      chunk5PVQY5BWInput57,
      chunk5PVQY5BWInput58 = "-",
      chunk5PVQY5BWInput59,
    ) =>
      `${chunk5PVQY5BWInput56}${chunk5PVQY5BWInput57}${chunk5PVQY5BWInput58}${chunk5PVQY5BWInput59.fontSize}${chunk5PVQY5BWInput59.fontWeight}${chunk5PVQY5BWInput59.fontFamily}`,
  );
  defineFunctionName(chunk5PVQY5BWT, "calculateTextHeight");
  defineFunctionName(chunk5PVQY5BWN, "calculateTextWidth");
  chunk5PVQY5BWBinding14 = o(
    (chunk5PVQY5BWInput1, chunk5PVQY5BWInput2) => {
      let {
        fontSize = 12,
        fontFamily = "Arial",
        fontWeight = 400,
      } = chunk5PVQY5BWInput2;
      if (!chunk5PVQY5BWInput1)
        return {
          width: 0,
          height: 0,
        };
      let [, chunk5PVQY5BWBinding19] = chunk5PVQY5BWP(fontSize),
        chunk5PVQY5BWBinding20 = ["sans-serif", fontFamily],
        chunk5PVQY5BWBinding21 = chunk5PVQY5BWInput1.split(s.lineBreakRegex),
        chunk5PVQY5BWBinding22 = [],
        chunk5PVQY5BWBinding23 = select("body");
      if (!chunk5PVQY5BWBinding23.remove)
        return {
          width: 0,
          height: 0,
          lineHeight: 0,
        };
      let chunk5PVQY5BWBinding24 = chunk5PVQY5BWBinding23.append("svg");
      for (let chunk5PVQY5BWBinding36 of chunk5PVQY5BWBinding20) {
        let chunk5PVQY5BWBinding37 = 0,
          chunk5PVQY5BWBinding38 = {
            width: 0,
            height: 0,
            lineHeight: 0,
          };
        for (let chunk5PVQY5BWBinding45 of chunk5PVQY5BWBinding21) {
          let chunk5PVQY5BWBinding49 = chunk5PVQY5BWBinding11();
          chunk5PVQY5BWBinding49.text = chunk5PVQY5BWBinding45 || "​";
          let chunk5PVQY5BWBinding50 = chunk5PVQY5BWBinding12(
              chunk5PVQY5BWBinding24,
              chunk5PVQY5BWBinding49,
            )
              .style("font-size", chunk5PVQY5BWBinding19)
              .style("font-weight", fontWeight)
              .style("font-family", chunk5PVQY5BWBinding36),
            chunk5PVQY5BWBinding51 = (chunk5PVQY5BWBinding50._groups ||
              chunk5PVQY5BWBinding50)[0][0].getBBox();
          if (
            chunk5PVQY5BWBinding51.width === 0 &&
            chunk5PVQY5BWBinding51.height === 0
          )
            throw Error("svg element not in render tree");
          chunk5PVQY5BWBinding38.width = Math.round(
            Math.max(
              chunk5PVQY5BWBinding38.width,
              chunk5PVQY5BWBinding51.width,
            ),
          );
          chunk5PVQY5BWBinding37 = Math.round(chunk5PVQY5BWBinding51.height);
          chunk5PVQY5BWBinding38.height += chunk5PVQY5BWBinding37;
          chunk5PVQY5BWBinding38.lineHeight = Math.round(
            Math.max(chunk5PVQY5BWBinding38.lineHeight, chunk5PVQY5BWBinding37),
          );
        }
        chunk5PVQY5BWBinding22.push(chunk5PVQY5BWBinding38);
      }
      return (
        chunk5PVQY5BWBinding24.remove(),
        chunk5PVQY5BWBinding22[
          isNaN(chunk5PVQY5BWBinding22[1].height) ||
          isNaN(chunk5PVQY5BWBinding22[1].width) ||
          isNaN(chunk5PVQY5BWBinding22[1].lineHeight) ||
          (chunk5PVQY5BWBinding22[0].height >
            chunk5PVQY5BWBinding22[1].height &&
            chunk5PVQY5BWBinding22[0].width > chunk5PVQY5BWBinding22[1].width &&
            chunk5PVQY5BWBinding22[0].lineHeight >
              chunk5PVQY5BWBinding22[1].lineHeight)
            ? 0
            : 1
        ]
      );
    },
    (chunk5PVQY5BWInput64, chunk5PVQY5BWInput65) =>
      `${chunk5PVQY5BWInput64}${chunk5PVQY5BWInput65.fontSize}${chunk5PVQY5BWInput65.fontWeight}${chunk5PVQY5BWInput65.fontFamily}`,
  );
  chunk5PVQY5BWBinding15 = class {
    constructor(chunk5PVQY5BWInput36 = false, chunk5PVQY5BWInput37) {
      this.count = 0;
      this.count = chunk5PVQY5BWInput37 ? chunk5PVQY5BWInput37.length : 0;
      this.next = chunk5PVQY5BWInput36 ? () => this.count++ : () => Date.now();
    }
    static {
      defineFunctionName(this, "InitIDGenerator");
    }
  };
  chunk5PVQY5BWBinding17 = defineFunctionName(function (chunk5PVQY5BWInput31) {
    return (
      (chunk5PVQY5BWBinding16 ||= document.createElement("div")),
      (chunk5PVQY5BWInput31 = escape(chunk5PVQY5BWInput31)
        .replace(/%26/g, "&")
        .replace(/%23/g, "#")
        .replace(/%3B/g, ";")),
      (chunk5PVQY5BWBinding16.innerHTML = chunk5PVQY5BWInput31),
      unescape(chunk5PVQY5BWBinding16.textContent)
    );
  }, "entityDecode");
  defineFunctionName(chunk5PVQY5BWF, "isDetailedError");
  chunk5PVQY5BWBinding18 = defineFunctionName(
    (
      chunk5PVQY5BWInput27,
      chunk5PVQY5BWInput28,
      chunk5PVQY5BWInput29,
      chunk5PVQY5BWInput30,
    ) => {
      if (!chunk5PVQY5BWInput30) return;
      let chunk5PVQY5BWBinding70 = chunk5PVQY5BWInput27.node()?.getBBox();
      chunk5PVQY5BWBinding70 &&
        chunk5PVQY5BWInput27
          .append("text")
          .text(chunk5PVQY5BWInput30)
          .attr("text-anchor", "middle")
          .attr(
            "x",
            chunk5PVQY5BWBinding70.x + chunk5PVQY5BWBinding70.width / 2,
          )
          .attr("y", -chunk5PVQY5BWInput29)
          .attr("class", chunk5PVQY5BWInput28);
    },
    "insertTitle",
  );
  chunk5PVQY5BWP = defineFunctionName((chunk5PVQY5BWInput32) => {
    if (typeof chunk5PVQY5BWInput32 == "number")
      return [chunk5PVQY5BWInput32, chunk5PVQY5BWInput32 + "px"];
    let chunk5PVQY5BWBinding72 = parseInt(chunk5PVQY5BWInput32 ?? "", 10);
    return Number.isNaN(chunk5PVQY5BWBinding72)
      ? [undefined, undefined]
      : chunk5PVQY5BWInput32 === String(chunk5PVQY5BWBinding72)
        ? [chunk5PVQY5BWBinding72, chunk5PVQY5BWInput32 + "px"]
        : [chunk5PVQY5BWBinding72, chunk5PVQY5BWInput32];
  }, "parseFontSize");
  defineFunctionName(chunk5PVQY5BWR, "cleanAndMerge");
  chunk5PVQY5BWG = {
    assignWithDepth: r,
    wrapLabel: chunk5PVQY5BWUnderscore,
    calculateTextHeight: chunk5PVQY5BWT,
    calculateTextWidth: chunk5PVQY5BWN,
    calculateTextDimensions: chunk5PVQY5BWBinding14,
    cleanAndMerge: chunk5PVQY5BWR,
    detectInit: chunk5PVQY5BWBinding3,
    detectDirective: chunk5PVQY5BWBinding4,
    isSubstringInArray: chunk5PVQY5BWBinding5,
    interpolateToCurve: chunk5PVQY5BWD,
    calcLabelPosition: chunk5PVQY5BWHelper4,
    calcCardinalityPosition: chunk5PVQY5BWBinding9,
    calcTerminalLabelPosition: chunk5PVQY5BWHelper5,
    formatUrl: chunk5PVQY5BWHelper1,
    getStylesFromArray: chunk5PVQY5BWC,
    generateId: chunk5PVQY5BWO,
    random: chunk5PVQY5BWM,
    runFunc: chunk5PVQY5BWBinding6,
    entityDecode: chunk5PVQY5BWBinding17,
    insertTitle: chunk5PVQY5BWBinding18,
    isLabelCoordinateInPath: chunk5PVQY5BWHelper7,
    parseFontSize: chunk5PVQY5BWP,
    InitIDGenerator: chunk5PVQY5BWBinding15,
  };
  chunk5PVQY5BWA = defineFunctionName(function (chunk5PVQY5BWInput19) {
    let chunk5PVQY5BWBinding54 = chunk5PVQY5BWInput19;
    return (
      (chunk5PVQY5BWBinding54 = chunk5PVQY5BWBinding54.replace(
        /style.*:\S*#.*;/g,
        function (chunk5PVQY5BWInput62) {
          return chunk5PVQY5BWInput62.substring(
            0,
            chunk5PVQY5BWInput62.length - 1,
          );
        },
      )),
      (chunk5PVQY5BWBinding54 = chunk5PVQY5BWBinding54.replace(
        /classDef.*:\S*#.*;/g,
        function (chunk5PVQY5BWInput63) {
          return chunk5PVQY5BWInput63.substring(
            0,
            chunk5PVQY5BWInput63.length - 1,
          );
        },
      )),
      (chunk5PVQY5BWBinding54 = chunk5PVQY5BWBinding54.replace(
        /#\w+;/g,
        function (chunk5PVQY5BWInput38) {
          let chunk5PVQY5BWBinding86 = chunk5PVQY5BWInput38.substring(
            1,
            chunk5PVQY5BWInput38.length - 1,
          );
          return /^\+?\d+$/.test(chunk5PVQY5BWBinding86)
            ? "ﬂ°°" + chunk5PVQY5BWBinding86 + "¶ß"
            : "ﬂ°" + chunk5PVQY5BWBinding86 + "¶ß";
        },
      )),
      chunk5PVQY5BWBinding54
    );
  }, "encodeEntities");
  chunk5PVQY5BWI = defineFunctionName(function (chunk5PVQY5BWInput48) {
    return chunk5PVQY5BWInput48
      .replace(/ﬂ°°/g, "&#")
      .replace(/ﬂ°/g, "&")
      .replace(/¶ß/g, ";");
  }, "decodeEntities");
  chunk5PVQY5BWS = defineFunctionName(
    (
      chunk5PVQY5BWInput41,
      chunk5PVQY5BWInput42,
      { counter = 0, prefix, suffix },
      chunk5PVQY5BWInput43,
    ) =>
      chunk5PVQY5BWInput43 ||
      `${prefix ? `${prefix}_` : ""}${chunk5PVQY5BWInput41}_${chunk5PVQY5BWInput42}_${counter}${suffix ? `_${suffix}` : ""}`,
    "getEdgeId",
  );
  defineFunctionName(chunk5PVQY5BWL, "handleUndefinedAttr");
  defineFunctionName(chunk5PVQY5BWHelper7, "isLabelCoordinateInPath");
});
export {
  chunk5PVQY5BWUnderscore,
  chunk5PVQY5BWA,
  chunk5PVQY5BWC,
  chunk5PVQY5BWD,
  chunk5PVQY5BWF,
  chunk5PVQY5BWG,
  chunk5PVQY5BWH,
  chunk5PVQY5BWI,
  chunk5PVQY5BWL,
  chunk5PVQY5BWM,
  chunk5PVQY5BWN,
  chunk5PVQY5BWO,
  chunk5PVQY5BWP,
  chunk5PVQY5BWR,
  chunk5PVQY5BWS,
  chunk5PVQY5BWT,
};
