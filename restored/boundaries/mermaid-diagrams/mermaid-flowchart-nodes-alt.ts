// Restored from ref/webview/assets/chunk-5FUZZQ4R-ahKtDU8f.js
// Mermaid flowchart node/shape renderers (alt). No app-initial edge after createText-alt promote.
// Stage 3 candidate: IMPORT_MAP-rewritten npm aliases; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import rough from "roughjs";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import { A, b, h, k, M, R, w, y, z } from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWI,
  chunk5PVQY5BWL,
  chunk5PVQY5BWN,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import {
  chunkU2HBQHQKA,
  chunkU2HBQHQKN,
  chunkU2HBQHQKR,
} from "./mermaid-create-text-alt";
import {
  getSubGraphTitleMargins,
  initSubGraphTitleMarginsAlt,
  configureLabelImages,
} from "../../diagrams/subgraph-title-margins-alt";
import { styles2String as a, solidStateFill as i, initStyleHelpersChunk as chunkX2U36JSPN, userNodeOverrides as o, compileStyles as chunkX2U36JSPT } from "../../diagrams/style-helpers-alt";
function chunk5FUZZQ4RHelper1(chunk5FUZZQ4RInput314) {
  let chunk5FUZZQ4RBinding1212 = chunk5FUZZQ4RInput314.map(
    (item, index) => `${index === 0 ? "M" : "L"}${item.x},${item.y}`,
  );
  return (
    chunk5FUZZQ4RBinding1212.push("Z"),
    chunk5FUZZQ4RBinding1212.join(" ")
  );
}
function chunk5FUZZQ4RHelper2(
  chunk5FUZZQ4RInput252,
  chunk5FUZZQ4RInput253,
  chunk5FUZZQ4RInput254,
  chunk5FUZZQ4RInput255,
  chunk5FUZZQ4RInput256,
  chunk5FUZZQ4RInput257,
) {
  let chunk5FUZZQ4RBinding1075 = [],
    chunk5FUZZQ4RBinding1076 = chunk5FUZZQ4RInput254 - chunk5FUZZQ4RInput252,
    chunk5FUZZQ4RBinding1077 = chunk5FUZZQ4RInput255 - chunk5FUZZQ4RInput253,
    chunk5FUZZQ4RBinding1078 = chunk5FUZZQ4RBinding1076 / chunk5FUZZQ4RInput257,
    chunk5FUZZQ4RBinding1079 = (2 * Math.PI) / chunk5FUZZQ4RBinding1078,
    chunk5FUZZQ4RBinding1080 =
      chunk5FUZZQ4RInput253 + chunk5FUZZQ4RBinding1077 / 2;
  for (
    let chunk5FUZZQ4RBinding1203 = 0;
    chunk5FUZZQ4RBinding1203 <= 50;
    chunk5FUZZQ4RBinding1203++
  ) {
    let chunk5FUZZQ4RBinding1230 =
        chunk5FUZZQ4RInput252 +
        (chunk5FUZZQ4RBinding1203 / 50) * chunk5FUZZQ4RBinding1076,
      chunk5FUZZQ4RBinding1231 =
        chunk5FUZZQ4RBinding1080 +
        chunk5FUZZQ4RInput256 *
          Math.sin(
            chunk5FUZZQ4RBinding1079 *
              (chunk5FUZZQ4RBinding1230 - chunk5FUZZQ4RInput252),
          );
    chunk5FUZZQ4RBinding1075.push({
      x: chunk5FUZZQ4RBinding1230,
      y: chunk5FUZZQ4RBinding1231,
    });
  }
  return chunk5FUZZQ4RBinding1075;
}
function chunk5FUZZQ4RHelper3(
  chunk5FUZZQ4RInput258,
  chunk5FUZZQ4RInput259,
  chunk5FUZZQ4RInput260,
  chunk5FUZZQ4RInput261,
  chunk5FUZZQ4RInput262,
  chunk5FUZZQ4RInput263,
) {
  let chunk5FUZZQ4RBinding1083 = [],
    chunk5FUZZQ4RBinding1084 = (chunk5FUZZQ4RInput262 * Math.PI) / 180,
    chunk5FUZZQ4RBinding1085 =
      ((chunk5FUZZQ4RInput263 * Math.PI) / 180 - chunk5FUZZQ4RBinding1084) /
      (chunk5FUZZQ4RInput261 - 1);
  for (
    let chunk5FUZZQ4RBinding1197 = 0;
    chunk5FUZZQ4RBinding1197 < chunk5FUZZQ4RInput261;
    chunk5FUZZQ4RBinding1197++
  ) {
    let chunk5FUZZQ4RBinding1213 =
        chunk5FUZZQ4RBinding1084 +
        chunk5FUZZQ4RBinding1197 * chunk5FUZZQ4RBinding1085,
      chunk5FUZZQ4RBinding1214 =
        chunk5FUZZQ4RInput258 +
        chunk5FUZZQ4RInput260 * Math.cos(chunk5FUZZQ4RBinding1213),
      chunk5FUZZQ4RBinding1215 =
        chunk5FUZZQ4RInput259 +
        chunk5FUZZQ4RInput260 * Math.sin(chunk5FUZZQ4RBinding1213);
    chunk5FUZZQ4RBinding1083.push({
      x: -chunk5FUZZQ4RBinding1214,
      y: -chunk5FUZZQ4RBinding1215,
    });
  }
  return chunk5FUZZQ4RBinding1083;
}
function chunk5FUZZQ4RHelper4(chunk5FUZZQ4RInput133) {
  let chunk5FUZZQ4RBinding799 = Array.from(
      chunk5FUZZQ4RInput133.childNodes,
    ).filter((item) => item.tagName === "path"),
    chunk5FUZZQ4RBinding800 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    ),
    chunk5FUZZQ4RBinding801 = chunk5FUZZQ4RBinding799
      .map((item) => item.getAttribute("d"))
      .filter((item) => item !== null)
      .join(" ");
  chunk5FUZZQ4RBinding800.setAttribute("d", chunk5FUZZQ4RBinding801);
  let chunk5FUZZQ4RBinding802 = chunk5FUZZQ4RBinding799.find(
      (item) => item.getAttribute("fill") !== "none",
    ),
    chunk5FUZZQ4RBinding803 = chunk5FUZZQ4RBinding799.find(
      (item) => item.getAttribute("stroke") !== "none",
    ),
    chunk5FUZZQ4RBinding804 = defineFunctionName(
      (chunk5FUZZQ4RInput422, chunk5FUZZQ4RInput423) =>
        chunk5FUZZQ4RInput422?.getAttribute(chunk5FUZZQ4RInput423) ?? undefined,
      "getAttr",
    );
  if (chunk5FUZZQ4RBinding802) {
    let chunk5FUZZQ4RBinding1180 = {
      fill: chunk5FUZZQ4RBinding804(chunk5FUZZQ4RBinding802, "fill"),
      "fill-opacity":
        chunk5FUZZQ4RBinding804(chunk5FUZZQ4RBinding802, "fill-opacity") ?? "1",
    };
    Object.entries(chunk5FUZZQ4RBinding1180).forEach(
      ([chunk5FUZZQ4RInput388, chunk5FUZZQ4RInput389]) => {
        chunk5FUZZQ4RInput389 &&
          chunk5FUZZQ4RBinding800.setAttribute(
            chunk5FUZZQ4RInput388,
            chunk5FUZZQ4RInput389,
          );
      },
    );
  }
  if (chunk5FUZZQ4RBinding803) {
    let chunk5FUZZQ4RBinding1109 = {
      stroke: chunk5FUZZQ4RBinding804(chunk5FUZZQ4RBinding803, "stroke"),
      "stroke-width":
        chunk5FUZZQ4RBinding804(chunk5FUZZQ4RBinding803, "stroke-width") ?? "1",
      "stroke-opacity":
        chunk5FUZZQ4RBinding804(chunk5FUZZQ4RBinding803, "stroke-opacity") ??
        "1",
    };
    Object.entries(chunk5FUZZQ4RBinding1109).forEach(
      ([chunk5FUZZQ4RInput390, chunk5FUZZQ4RInput391]) => {
        chunk5FUZZQ4RInput391 &&
          chunk5FUZZQ4RBinding800.setAttribute(
            chunk5FUZZQ4RInput390,
            chunk5FUZZQ4RInput391,
          );
      },
    );
  }
  let chunk5FUZZQ4RBinding805 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g",
  );
  return (
    chunk5FUZZQ4RBinding805.appendChild(chunk5FUZZQ4RBinding800),
    chunk5FUZZQ4RBinding805
  );
}
function chunk5FUZZQ4RHelper5(chunk5FUZZQ4RInput416, chunk5FUZZQ4RInput417) {
  return chunk5FUZZQ4RInput416.intersect(chunk5FUZZQ4RInput417);
}
function chunk5FUZZQ4RHelper6(
  chunk5FUZZQ4RInput248,
  chunk5FUZZQ4RInput249,
  chunk5FUZZQ4RInput250,
  chunk5FUZZQ4RInput251,
) {
  var chunk5FUZZQ4RBinding1068 = chunk5FUZZQ4RInput248.x,
    chunk5FUZZQ4RBinding1069 = chunk5FUZZQ4RInput248.y,
    chunk5FUZZQ4RBinding1070 =
      chunk5FUZZQ4RBinding1068 - chunk5FUZZQ4RInput251.x,
    chunk5FUZZQ4RBinding1071 =
      chunk5FUZZQ4RBinding1069 - chunk5FUZZQ4RInput251.y,
    chunk5FUZZQ4RBinding1072 = Math.sqrt(
      chunk5FUZZQ4RInput249 *
        chunk5FUZZQ4RInput249 *
        chunk5FUZZQ4RBinding1071 *
        chunk5FUZZQ4RBinding1071 +
        chunk5FUZZQ4RInput250 *
          chunk5FUZZQ4RInput250 *
          chunk5FUZZQ4RBinding1070 *
          chunk5FUZZQ4RBinding1070,
    ),
    chunk5FUZZQ4RBinding1073 = Math.abs(
      (chunk5FUZZQ4RInput249 *
        chunk5FUZZQ4RInput250 *
        chunk5FUZZQ4RBinding1070) /
        chunk5FUZZQ4RBinding1072,
    );
  chunk5FUZZQ4RInput251.x < chunk5FUZZQ4RBinding1068 &&
    (chunk5FUZZQ4RBinding1073 = -chunk5FUZZQ4RBinding1073);
  var chunk5FUZZQ4RBinding1074 = Math.abs(
    (chunk5FUZZQ4RInput249 * chunk5FUZZQ4RInput250 * chunk5FUZZQ4RBinding1071) /
      chunk5FUZZQ4RBinding1072,
  );
  return (
    chunk5FUZZQ4RInput251.y < chunk5FUZZQ4RBinding1069 &&
      (chunk5FUZZQ4RBinding1074 = -chunk5FUZZQ4RBinding1074),
    {
      x: chunk5FUZZQ4RBinding1068 + chunk5FUZZQ4RBinding1073,
      y: chunk5FUZZQ4RBinding1069 + chunk5FUZZQ4RBinding1074,
    }
  );
}
function chunk5FUZZQ4RHelper7(
  chunk5FUZZQ4RInput400,
  chunk5FUZZQ4RInput401,
  chunk5FUZZQ4RInput402,
) {
  return chunk5FUZZQ4RBinding9(
    chunk5FUZZQ4RInput400,
    chunk5FUZZQ4RInput401,
    chunk5FUZZQ4RInput401,
    chunk5FUZZQ4RInput402,
  );
}
function chunk5FUZZQ4RHelper8(
  chunk5FUZZQ4RInput178,
  chunk5FUZZQ4RInput179,
  chunk5FUZZQ4RInput180,
  chunk5FUZZQ4RInput181,
) {
  {
    let chunk5FUZZQ4RBinding906 =
        chunk5FUZZQ4RInput179.y - chunk5FUZZQ4RInput178.y,
      chunk5FUZZQ4RBinding907 =
        chunk5FUZZQ4RInput178.x - chunk5FUZZQ4RInput179.x,
      chunk5FUZZQ4RBinding908 =
        chunk5FUZZQ4RInput179.x * chunk5FUZZQ4RInput178.y -
        chunk5FUZZQ4RInput178.x * chunk5FUZZQ4RInput179.y,
      chunk5FUZZQ4RBinding909 =
        chunk5FUZZQ4RBinding906 * chunk5FUZZQ4RInput180.x +
        chunk5FUZZQ4RBinding907 * chunk5FUZZQ4RInput180.y +
        chunk5FUZZQ4RBinding908,
      chunk5FUZZQ4RBinding910 =
        chunk5FUZZQ4RBinding906 * chunk5FUZZQ4RInput181.x +
        chunk5FUZZQ4RBinding907 * chunk5FUZZQ4RInput181.y +
        chunk5FUZZQ4RBinding908;
    if (
      chunk5FUZZQ4RBinding909 !== 0 &&
      chunk5FUZZQ4RBinding910 !== 0 &&
      chunk5FUZZQ4RHelper9(chunk5FUZZQ4RBinding909, chunk5FUZZQ4RBinding910)
    )
      return;
    let chunk5FUZZQ4RBinding912 =
        chunk5FUZZQ4RInput181.y - chunk5FUZZQ4RInput180.y,
      chunk5FUZZQ4RBinding913 =
        chunk5FUZZQ4RInput180.x - chunk5FUZZQ4RInput181.x,
      chunk5FUZZQ4RBinding914 =
        chunk5FUZZQ4RInput181.x * chunk5FUZZQ4RInput180.y -
        chunk5FUZZQ4RInput180.x * chunk5FUZZQ4RInput181.y,
      chunk5FUZZQ4RBinding915 =
        chunk5FUZZQ4RBinding912 * chunk5FUZZQ4RInput178.x +
        chunk5FUZZQ4RBinding913 * chunk5FUZZQ4RInput178.y +
        chunk5FUZZQ4RBinding914,
      chunk5FUZZQ4RBinding916 =
        chunk5FUZZQ4RBinding912 * chunk5FUZZQ4RInput179.x +
        chunk5FUZZQ4RBinding913 * chunk5FUZZQ4RInput179.y +
        chunk5FUZZQ4RBinding914;
    if (
      Math.abs(chunk5FUZZQ4RBinding915) < 1e-6 &&
      Math.abs(chunk5FUZZQ4RBinding916) < 1e-6 &&
      chunk5FUZZQ4RHelper9(chunk5FUZZQ4RBinding915, chunk5FUZZQ4RBinding916)
    )
      return;
    let chunk5FUZZQ4RBinding917 =
      chunk5FUZZQ4RBinding906 * chunk5FUZZQ4RBinding913 -
      chunk5FUZZQ4RBinding912 * chunk5FUZZQ4RBinding907;
    if (chunk5FUZZQ4RBinding917 === 0) return;
    let chunk5FUZZQ4RBinding918 = Math.abs(chunk5FUZZQ4RBinding917 / 2),
      chunk5FUZZQ4RBinding919 =
        chunk5FUZZQ4RBinding907 * chunk5FUZZQ4RBinding914 -
        chunk5FUZZQ4RBinding913 * chunk5FUZZQ4RBinding908,
      chunk5FUZZQ4RBinding920 =
        chunk5FUZZQ4RBinding919 < 0
          ? (chunk5FUZZQ4RBinding919 - chunk5FUZZQ4RBinding918) /
            chunk5FUZZQ4RBinding917
          : (chunk5FUZZQ4RBinding919 + chunk5FUZZQ4RBinding918) /
            chunk5FUZZQ4RBinding917;
    return (
      (chunk5FUZZQ4RBinding919 =
        chunk5FUZZQ4RBinding912 * chunk5FUZZQ4RBinding908 -
        chunk5FUZZQ4RBinding906 * chunk5FUZZQ4RBinding914),
      {
        x: chunk5FUZZQ4RBinding920,
        y:
          chunk5FUZZQ4RBinding919 < 0
            ? (chunk5FUZZQ4RBinding919 - chunk5FUZZQ4RBinding918) /
              chunk5FUZZQ4RBinding917
            : (chunk5FUZZQ4RBinding919 + chunk5FUZZQ4RBinding918) /
              chunk5FUZZQ4RBinding917,
      }
    );
  }
}
function chunk5FUZZQ4RHelper9(chunk5FUZZQ4RInput420, chunk5FUZZQ4RInput421) {
  return chunk5FUZZQ4RInput420 * chunk5FUZZQ4RInput421 > 0;
}
function chunk5FUZZQ4RHelper10(
  chunk5FUZZQ4RInput151,
  chunk5FUZZQ4RInput152,
  chunk5FUZZQ4RInput153,
) {
  let chunk5FUZZQ4RBinding859 = chunk5FUZZQ4RInput151.x,
    chunk5FUZZQ4RBinding860 = chunk5FUZZQ4RInput151.y,
    chunk5FUZZQ4RBinding861 = [],
    chunk5FUZZQ4RBinding862 = 1 / 0,
    chunk5FUZZQ4RBinding863 = 1 / 0;
  typeof chunk5FUZZQ4RInput152.forEach == "function"
    ? chunk5FUZZQ4RInput152.forEach(function (item) {
        chunk5FUZZQ4RBinding862 = Math.min(chunk5FUZZQ4RBinding862, item.x);
        chunk5FUZZQ4RBinding863 = Math.min(chunk5FUZZQ4RBinding863, item.y);
      })
    : ((chunk5FUZZQ4RBinding862 = Math.min(
        chunk5FUZZQ4RBinding862,
        chunk5FUZZQ4RInput152.x,
      )),
      (chunk5FUZZQ4RBinding863 = Math.min(
        chunk5FUZZQ4RBinding863,
        chunk5FUZZQ4RInput152.y,
      )));
  let chunk5FUZZQ4RBinding864 =
      chunk5FUZZQ4RBinding859 -
      chunk5FUZZQ4RInput151.width / 2 -
      chunk5FUZZQ4RBinding862,
    chunk5FUZZQ4RBinding865 =
      chunk5FUZZQ4RBinding860 -
      chunk5FUZZQ4RInput151.height / 2 -
      chunk5FUZZQ4RBinding863;
  for (
    let chunk5FUZZQ4RBinding1162 = 0;
    chunk5FUZZQ4RBinding1162 < chunk5FUZZQ4RInput152.length;
    chunk5FUZZQ4RBinding1162++
  ) {
    let chunk5FUZZQ4RBinding1183 =
        chunk5FUZZQ4RInput152[chunk5FUZZQ4RBinding1162],
      chunk5FUZZQ4RBinding1184 =
        chunk5FUZZQ4RInput152[
          chunk5FUZZQ4RBinding1162 < chunk5FUZZQ4RInput152.length - 1
            ? chunk5FUZZQ4RBinding1162 + 1
            : 0
        ],
      chunk5FUZZQ4RBinding1185 = chunk5FUZZQ4RBinding11(
        chunk5FUZZQ4RInput151,
        chunk5FUZZQ4RInput153,
        {
          x: chunk5FUZZQ4RBinding864 + chunk5FUZZQ4RBinding1183.x,
          y: chunk5FUZZQ4RBinding865 + chunk5FUZZQ4RBinding1183.y,
        },
        {
          x: chunk5FUZZQ4RBinding864 + chunk5FUZZQ4RBinding1184.x,
          y: chunk5FUZZQ4RBinding865 + chunk5FUZZQ4RBinding1184.y,
        },
      );
    chunk5FUZZQ4RBinding1185 &&
      chunk5FUZZQ4RBinding861.push(chunk5FUZZQ4RBinding1185);
  }
  return chunk5FUZZQ4RBinding861.length
    ? (chunk5FUZZQ4RBinding861.length > 1 &&
        chunk5FUZZQ4RBinding861.sort(
          function (chunk5FUZZQ4RInput271, chunk5FUZZQ4RInput272) {
            let chunk5FUZZQ4RBinding1092 =
                chunk5FUZZQ4RInput271.x - chunk5FUZZQ4RInput153.x,
              chunk5FUZZQ4RBinding1093 =
                chunk5FUZZQ4RInput271.y - chunk5FUZZQ4RInput153.y,
              chunk5FUZZQ4RBinding1094 = Math.sqrt(
                chunk5FUZZQ4RBinding1092 * chunk5FUZZQ4RBinding1092 +
                  chunk5FUZZQ4RBinding1093 * chunk5FUZZQ4RBinding1093,
              ),
              chunk5FUZZQ4RBinding1095 =
                chunk5FUZZQ4RInput272.x - chunk5FUZZQ4RInput153.x,
              chunk5FUZZQ4RBinding1096 =
                chunk5FUZZQ4RInput272.y - chunk5FUZZQ4RInput153.y,
              chunk5FUZZQ4RBinding1097 = Math.sqrt(
                chunk5FUZZQ4RBinding1095 * chunk5FUZZQ4RBinding1095 +
                  chunk5FUZZQ4RBinding1096 * chunk5FUZZQ4RBinding1096,
              );
            return chunk5FUZZQ4RBinding1094 < chunk5FUZZQ4RBinding1097
              ? -1
              : chunk5FUZZQ4RBinding1094 === chunk5FUZZQ4RBinding1097
                ? 0
                : 1;
          },
        ),
      chunk5FUZZQ4RBinding861[0])
    : chunk5FUZZQ4RInput151;
}
function chunk5FUZZQ4RHelper11(chunk5FUZZQ4RInput185, chunk5FUZZQ4RInput186) {
  let { labelStyles } = a(chunk5FUZZQ4RInput186);
  chunk5FUZZQ4RInput186.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding925 = chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput186),
    chunk5FUZZQ4RBinding926 = chunk5FUZZQ4RBinding925;
  chunk5FUZZQ4RBinding925 || (chunk5FUZZQ4RBinding926 = "anchor");
  let chunk5FUZZQ4RBinding927 = chunk5FUZZQ4RInput185
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding926)
      .attr("id", chunk5FUZZQ4RInput186.domId || chunk5FUZZQ4RInput186.id),
    { cssStyles } = chunk5FUZZQ4RInput186,
    chunk5FUZZQ4RBinding928 = rough.svg(chunk5FUZZQ4RBinding927),
    chunk5FUZZQ4RBinding929 = o(chunk5FUZZQ4RInput186, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid",
    });
  chunk5FUZZQ4RInput186.look !== "handDrawn" &&
    (chunk5FUZZQ4RBinding929.roughness = 0);
  let chunk5FUZZQ4RBinding930 = chunk5FUZZQ4RBinding928.circle(
      0,
      0,
      2,
      chunk5FUZZQ4RBinding929,
    ),
    chunk5FUZZQ4RBinding931 = chunk5FUZZQ4RBinding927.insert(
      () => chunk5FUZZQ4RBinding930,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding931
      .attr("class", "anchor")
      .attr("style", chunk5PVQY5BWL(cssStyles)),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput186, chunk5FUZZQ4RBinding931),
    (chunk5FUZZQ4RInput186.intersect = function (chunk5FUZZQ4RInput345) {
      return (
        logger.info(
          "Circle intersect",
          chunk5FUZZQ4RInput186,
          1,
          chunk5FUZZQ4RInput345,
        ),
        chunk5FUZZQ4RBinding12.circle(
          chunk5FUZZQ4RInput186,
          1,
          chunk5FUZZQ4RInput345,
        )
      );
    }),
    chunk5FUZZQ4RBinding927
  );
}
function chunk5FUZZQ4RHelper12(
  chunk5FUZZQ4RInput156,
  chunk5FUZZQ4RInput157,
  chunk5FUZZQ4RInput158,
  chunk5FUZZQ4RInput159,
  chunk5FUZZQ4RInput160,
  chunk5FUZZQ4RInput161,
  chunk5FUZZQ4RInput162,
) {
  let chunk5FUZZQ4RBinding875 =
      (chunk5FUZZQ4RInput156 + chunk5FUZZQ4RInput158) / 2,
    chunk5FUZZQ4RBinding876 =
      (chunk5FUZZQ4RInput157 + chunk5FUZZQ4RInput159) / 2,
    chunk5FUZZQ4RBinding877 = Math.atan2(
      chunk5FUZZQ4RInput159 - chunk5FUZZQ4RInput157,
      chunk5FUZZQ4RInput158 - chunk5FUZZQ4RInput156,
    ),
    chunk5FUZZQ4RBinding878 =
      (chunk5FUZZQ4RInput158 - chunk5FUZZQ4RInput156) / 2,
    chunk5FUZZQ4RBinding879 =
      (chunk5FUZZQ4RInput159 - chunk5FUZZQ4RInput157) / 2,
    chunk5FUZZQ4RBinding880 = chunk5FUZZQ4RBinding878 / chunk5FUZZQ4RInput160,
    chunk5FUZZQ4RBinding881 = chunk5FUZZQ4RBinding879 / chunk5FUZZQ4RInput161,
    chunk5FUZZQ4RBinding882 = Math.sqrt(
      chunk5FUZZQ4RBinding880 ** 2 + chunk5FUZZQ4RBinding881 ** 2,
    );
  if (chunk5FUZZQ4RBinding882 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunk5FUZZQ4RBinding883 = Math.sqrt(1 - chunk5FUZZQ4RBinding882 ** 2),
    chunk5FUZZQ4RBinding884 =
      chunk5FUZZQ4RBinding875 +
      chunk5FUZZQ4RBinding883 *
        chunk5FUZZQ4RInput161 *
        Math.sin(chunk5FUZZQ4RBinding877) *
        (chunk5FUZZQ4RInput162 ? -1 : 1),
    chunk5FUZZQ4RBinding885 =
      chunk5FUZZQ4RBinding876 -
      chunk5FUZZQ4RBinding883 *
        chunk5FUZZQ4RInput160 *
        Math.cos(chunk5FUZZQ4RBinding877) *
        (chunk5FUZZQ4RInput162 ? -1 : 1),
    chunk5FUZZQ4RBinding886 = Math.atan2(
      (chunk5FUZZQ4RInput157 - chunk5FUZZQ4RBinding885) / chunk5FUZZQ4RInput161,
      (chunk5FUZZQ4RInput156 - chunk5FUZZQ4RBinding884) / chunk5FUZZQ4RInput160,
    ),
    chunk5FUZZQ4RBinding887 =
      Math.atan2(
        (chunk5FUZZQ4RInput159 - chunk5FUZZQ4RBinding885) /
          chunk5FUZZQ4RInput161,
        (chunk5FUZZQ4RInput158 - chunk5FUZZQ4RBinding884) /
          chunk5FUZZQ4RInput160,
      ) - chunk5FUZZQ4RBinding886;
  chunk5FUZZQ4RInput162 &&
    chunk5FUZZQ4RBinding887 < 0 &&
    (chunk5FUZZQ4RBinding887 += 2 * Math.PI);
  !chunk5FUZZQ4RInput162 &&
    chunk5FUZZQ4RBinding887 > 0 &&
    (chunk5FUZZQ4RBinding887 -= 2 * Math.PI);
  let chunk5FUZZQ4RBinding888 = [];
  for (
    let chunk5FUZZQ4RBinding1191 = 0;
    chunk5FUZZQ4RBinding1191 < 20;
    chunk5FUZZQ4RBinding1191++
  ) {
    let chunk5FUZZQ4RBinding1207 =
        chunk5FUZZQ4RBinding886 +
        (chunk5FUZZQ4RBinding1191 / 19) * chunk5FUZZQ4RBinding887,
      chunk5FUZZQ4RBinding1208 =
        chunk5FUZZQ4RBinding884 +
        chunk5FUZZQ4RInput160 * Math.cos(chunk5FUZZQ4RBinding1207),
      chunk5FUZZQ4RBinding1209 =
        chunk5FUZZQ4RBinding885 +
        chunk5FUZZQ4RInput161 * Math.sin(chunk5FUZZQ4RBinding1207);
    chunk5FUZZQ4RBinding888.push({
      x: chunk5FUZZQ4RBinding1208,
      y: chunk5FUZZQ4RBinding1209,
    });
  }
  return chunk5FUZZQ4RBinding888;
}
function chunk5FUZZQ4RHelper13(
  chunk5FUZZQ4RInput311,
  chunk5FUZZQ4RInput312,
  chunk5FUZZQ4RInput313,
) {
  let [chunk5FUZZQ4RBinding1210, chunk5FUZZQ4RBinding1211] = [
    chunk5FUZZQ4RInput312,
    chunk5FUZZQ4RInput313,
  ].sort(
    (chunk5FUZZQ4RInput426, chunk5FUZZQ4RInput427) =>
      chunk5FUZZQ4RInput427 - chunk5FUZZQ4RInput426,
  );
  return (
    chunk5FUZZQ4RBinding1211 *
    (1 -
      Math.sqrt(
        1 - (chunk5FUZZQ4RInput311 / chunk5FUZZQ4RBinding1210 / 2) ** 2,
      ))
  );
}
async function chunk5FUZZQ4RHelper14(
  chunk5FUZZQ4RInput83,
  chunk5FUZZQ4RInput84,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput84);
  chunk5FUZZQ4RInput84.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding614 = chunk5FUZZQ4RInput84.padding ?? 0,
    chunk5FUZZQ4RBinding615 =
      chunk5FUZZQ4RInput84.look === "neo" ? 16 : chunk5FUZZQ4RBinding614,
    chunk5FUZZQ4RBinding616 =
      chunk5FUZZQ4RInput84.look === "neo" ? 12 : chunk5FUZZQ4RBinding614,
    chunk5FUZZQ4RBinding617 = defineFunctionName(
      (chunk5FUZZQ4RInput429) =>
        chunk5FUZZQ4RInput429 + chunk5FUZZQ4RBinding616,
      "calcTotalHeight",
    ),
    chunk5FUZZQ4RBinding618 = defineFunctionName((chunk5FUZZQ4RInput354) => {
      let chunk5FUZZQ4RBinding1245 = chunk5FUZZQ4RInput354 / 2;
      return [
        chunk5FUZZQ4RBinding1245 / (2.5 + chunk5FUZZQ4RInput354 / 50),
        chunk5FUZZQ4RBinding1245,
      ];
    }, "calcEllipseRadius"),
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput83,
      chunk5FUZZQ4RInput84,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput84),
    ),
    chunk5FUZZQ4RBinding619 = chunk5FUZZQ4RBinding617(
      chunk5FUZZQ4RInput84?.height ? chunk5FUZZQ4RInput84?.height : bbox.height,
    ),
    [chunk5FUZZQ4RBinding620, chunk5FUZZQ4RBinding621] =
      chunk5FUZZQ4RBinding618(chunk5FUZZQ4RBinding619),
    chunk5FUZZQ4RBinding622 = chunk5FUZZQ4RHelper13(
      chunk5FUZZQ4RBinding619,
      chunk5FUZZQ4RBinding620,
      chunk5FUZZQ4RBinding621,
    ),
    chunk5FUZZQ4RBinding623 =
      (chunk5FUZZQ4RInput84?.width ? chunk5FUZZQ4RInput84?.width : bbox.width) +
      chunk5FUZZQ4RBinding615 * 2 +
      chunk5FUZZQ4RBinding622 -
      chunk5FUZZQ4RBinding622,
    chunk5FUZZQ4RBinding624 = chunk5FUZZQ4RBinding619,
    { cssStyles } = chunk5FUZZQ4RInput84,
    chunk5FUZZQ4RBinding625 = [
      {
        x: chunk5FUZZQ4RBinding623 / 2,
        y: -chunk5FUZZQ4RBinding624 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding623 / 2,
        y: -chunk5FUZZQ4RBinding624 / 2,
      },
      ...chunk5FUZZQ4RHelper12(
        -chunk5FUZZQ4RBinding623 / 2,
        -chunk5FUZZQ4RBinding624 / 2,
        -chunk5FUZZQ4RBinding623 / 2,
        chunk5FUZZQ4RBinding624 / 2,
        chunk5FUZZQ4RBinding620,
        chunk5FUZZQ4RBinding621,
        false,
      ),
      {
        x: chunk5FUZZQ4RBinding623 / 2,
        y: chunk5FUZZQ4RBinding624 / 2,
      },
      ...chunk5FUZZQ4RHelper12(
        chunk5FUZZQ4RBinding623 / 2,
        chunk5FUZZQ4RBinding624 / 2,
        chunk5FUZZQ4RBinding623 / 2,
        -chunk5FUZZQ4RBinding624 / 2,
        chunk5FUZZQ4RBinding620,
        chunk5FUZZQ4RBinding621,
        true,
      ),
    ],
    chunk5FUZZQ4RBinding626 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding627 = o(chunk5FUZZQ4RInput84, {});
  chunk5FUZZQ4RInput84.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding627.roughness = 0),
    (chunk5FUZZQ4RBinding627.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding628 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding625),
    chunk5FUZZQ4RBinding629 = chunk5FUZZQ4RBinding626.path(
      chunk5FUZZQ4RBinding628,
      chunk5FUZZQ4RBinding627,
    ),
    chunk5FUZZQ4RBinding630 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding629,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding630.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput84.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding630.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput84.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding630.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding630.attr(
      "transform",
      `translate(${chunk5FUZZQ4RBinding620 / 2}, 0)`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput84, chunk5FUZZQ4RBinding630),
    (chunk5FUZZQ4RInput84.intersect = function (chunk5FUZZQ4RInput363) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput84,
        chunk5FUZZQ4RBinding625,
        chunk5FUZZQ4RInput363,
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper15(
  chunk5FUZZQ4RInput225,
  chunk5FUZZQ4RInput226,
  chunk5FUZZQ4RInput227,
  chunk5FUZZQ4RInput228,
) {
  return chunk5FUZZQ4RInput225
    .insert("polygon", ":first-child")
    .attr(
      "points",
      chunk5FUZZQ4RInput228
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -chunk5FUZZQ4RInput226 / 2 +
        "," +
        chunk5FUZZQ4RInput227 / 2 +
        ")",
    );
}
async function chunk5FUZZQ4RHelper16(
  chunk5FUZZQ4RInput131,
  chunk5FUZZQ4RInput132,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput132);
  chunk5FUZZQ4RInput132.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding790 = chunk5FUZZQ4RInput132.padding ?? 0,
    chunk5FUZZQ4RBinding791 =
      chunk5FUZZQ4RInput132.look === "neo" ? 28 : chunk5FUZZQ4RBinding790,
    chunk5FUZZQ4RBinding792 =
      chunk5FUZZQ4RInput132.look === "neo" ? 24 : chunk5FUZZQ4RBinding790,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput131,
      chunk5FUZZQ4RInput132,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput132),
    ),
    chunk5FUZZQ4RBinding793 =
      (chunk5FUZZQ4RInput132?.width ?? bbox.width) +
      (chunk5FUZZQ4RInput132.look === "neo"
        ? chunk5FUZZQ4RBinding791 * 2
        : chunk5FUZZQ4RBinding791 + chunk5FUZZQ4RBinding13),
    chunk5FUZZQ4RBinding794 =
      (chunk5FUZZQ4RInput132?.height ?? bbox.height) +
      (chunk5FUZZQ4RInput132.look === "neo"
        ? chunk5FUZZQ4RBinding792 * 2
        : chunk5FUZZQ4RBinding792),
    chunk5FUZZQ4RBinding795 = chunk5FUZZQ4RBinding793,
    chunk5FUZZQ4RBinding796 = -chunk5FUZZQ4RBinding794,
    chunk5FUZZQ4RBinding797 = [
      {
        x: chunk5FUZZQ4RBinding13,
        y: chunk5FUZZQ4RBinding796,
      },
      {
        x: chunk5FUZZQ4RBinding795,
        y: chunk5FUZZQ4RBinding796,
      },
      {
        x: chunk5FUZZQ4RBinding795,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RBinding796 + chunk5FUZZQ4RBinding13,
      },
      {
        x: chunk5FUZZQ4RBinding13,
        y: chunk5FUZZQ4RBinding796,
      },
    ],
    chunk5FUZZQ4RBinding798,
    { cssStyles } = chunk5FUZZQ4RInput132;
  if (chunk5FUZZQ4RInput132.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1120 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1121 = o(chunk5FUZZQ4RInput132, {}),
      chunk5FUZZQ4RBinding1122 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding797),
      chunk5FUZZQ4RBinding1123 = chunk5FUZZQ4RBinding1120.path(
        chunk5FUZZQ4RBinding1122,
        chunk5FUZZQ4RBinding1121,
      );
    chunk5FUZZQ4RBinding798 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1123, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding793 / 2}, ${chunk5FUZZQ4RBinding794 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding798.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding798 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding793,
      chunk5FUZZQ4RBinding794,
      chunk5FUZZQ4RBinding797,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding798.attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput132, chunk5FUZZQ4RBinding798),
    (chunk5FUZZQ4RInput132.intersect = function (chunk5FUZZQ4RInput364) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput132,
        chunk5FUZZQ4RBinding797,
        chunk5FUZZQ4RInput364,
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper17(chunk5FUZZQ4RInput154, chunk5FUZZQ4RInput155) {
  let { nodeStyles } = a(chunk5FUZZQ4RInput155);
  chunk5FUZZQ4RInput155.label = "";
  let chunk5FUZZQ4RBinding867 = chunk5FUZZQ4RInput154
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput155))
      .attr("id", chunk5FUZZQ4RInput155.domId ?? chunk5FUZZQ4RInput155.id),
    { cssStyles } = chunk5FUZZQ4RInput155,
    chunk5FUZZQ4RBinding868 = Math.max(28, chunk5FUZZQ4RInput155.width ?? 0),
    chunk5FUZZQ4RBinding869 = [
      {
        x: 0,
        y: chunk5FUZZQ4RBinding868 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding868 / 2,
        y: 0,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding868 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding868 / 2,
        y: 0,
      },
    ],
    chunk5FUZZQ4RBinding870 = rough.svg(chunk5FUZZQ4RBinding867),
    chunk5FUZZQ4RBinding871 = o(chunk5FUZZQ4RInput155, {});
  chunk5FUZZQ4RInput155.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding871.roughness = 0),
    (chunk5FUZZQ4RBinding871.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding872 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding869),
    chunk5FUZZQ4RBinding873 = chunk5FUZZQ4RBinding870.path(
      chunk5FUZZQ4RBinding872,
      chunk5FUZZQ4RBinding871,
    ),
    chunk5FUZZQ4RBinding874 = chunk5FUZZQ4RBinding867.insert(
      () => chunk5FUZZQ4RBinding873,
      ":first-child",
    );
  return (
    cssStyles &&
      chunk5FUZZQ4RInput155.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding874.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput155.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding874.selectAll("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RInput155.width = 28),
    (chunk5FUZZQ4RInput155.height = 28),
    (chunk5FUZZQ4RInput155.intersect = function (chunk5FUZZQ4RInput365) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput155,
        chunk5FUZZQ4RBinding869,
        chunk5FUZZQ4RInput365,
      );
    }),
    chunk5FUZZQ4RBinding867
  );
}
async function chunk5FUZZQ4RHelper18(
  chunk5FUZZQ4RInput138,
  chunk5FUZZQ4RInput139,
  chunk5FUZZQ4RInput140,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput139);
  chunk5FUZZQ4RInput139.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput138,
      chunk5FUZZQ4RInput139,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput139),
    ),
    chunk5FUZZQ4RBinding821 = chunk5FUZZQ4RInput140?.padding ?? halfPadding,
    chunk5FUZZQ4RBinding822 =
      chunk5FUZZQ4RInput139.look === "neo"
        ? bbox.width / 2 + 32
        : bbox.width / 2 + chunk5FUZZQ4RBinding821,
    chunk5FUZZQ4RBinding823,
    { cssStyles } = chunk5FUZZQ4RInput139;
  if (chunk5FUZZQ4RInput139.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1159 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1160 = o(chunk5FUZZQ4RInput139, {}),
      chunk5FUZZQ4RBinding1161 = chunk5FUZZQ4RBinding1159.circle(
        0,
        0,
        chunk5FUZZQ4RBinding822 * 2,
        chunk5FUZZQ4RBinding1160,
      );
    chunk5FUZZQ4RBinding823 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1161,
      ":first-child",
    );
    chunk5FUZZQ4RBinding823
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles));
  } else
    chunk5FUZZQ4RBinding823 = shapeSvg
      .insert("circle", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RBinding822)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput139, chunk5FUZZQ4RBinding823),
    (chunk5FUZZQ4RInput139.calcIntersect = function (
      chunk5FUZZQ4RInput348,
      chunk5FUZZQ4RInput349,
    ) {
      let chunk5FUZZQ4RBinding1241 = chunk5FUZZQ4RInput348.width / 2;
      return chunk5FUZZQ4RBinding12.circle(
        chunk5FUZZQ4RInput348,
        chunk5FUZZQ4RBinding1241,
        chunk5FUZZQ4RInput349,
      );
    }),
    (chunk5FUZZQ4RInput139.intersect = function (chunk5FUZZQ4RInput346) {
      return (
        logger.info(
          "Circle intersect",
          chunk5FUZZQ4RInput139,
          chunk5FUZZQ4RBinding822,
          chunk5FUZZQ4RInput346,
        ),
        chunk5FUZZQ4RBinding12.circle(
          chunk5FUZZQ4RInput139,
          chunk5FUZZQ4RBinding822,
          chunk5FUZZQ4RInput346,
        )
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper19(chunk5FUZZQ4RInput205) {
  let chunk5FUZZQ4RBinding1018 = Math.cos(Math.PI / 4),
    chunk5FUZZQ4RBinding1019 = Math.sin(Math.PI / 4),
    chunk5FUZZQ4RBinding1020 = chunk5FUZZQ4RInput205 * 2,
    chunk5FUZZQ4RBinding1021 = {
      x: (chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1018,
      y: (chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1019,
    },
    chunk5FUZZQ4RBinding1022 = {
      x: -(chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1018,
      y: (chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1019,
    },
    chunk5FUZZQ4RBinding1023 = {
      x: -(chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1018,
      y: -(chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1019,
    },
    chunk5FUZZQ4RBinding1024 = {
      x: (chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1018,
      y: -(chunk5FUZZQ4RBinding1020 / 2) * chunk5FUZZQ4RBinding1019,
    };
  return `M ${chunk5FUZZQ4RBinding1022.x},${chunk5FUZZQ4RBinding1022.y} L ${chunk5FUZZQ4RBinding1024.x},${chunk5FUZZQ4RBinding1024.y}
                   M ${chunk5FUZZQ4RBinding1021.x},${chunk5FUZZQ4RBinding1021.y} L ${chunk5FUZZQ4RBinding1023.x},${chunk5FUZZQ4RBinding1023.y}`;
}
function chunk5FUZZQ4RHelper20(chunk5FUZZQ4RInput149, chunk5FUZZQ4RInput150) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput150);
  chunk5FUZZQ4RInput150.labelStyle = labelStyles;
  chunk5FUZZQ4RInput150.label = "";
  let chunk5FUZZQ4RBinding851 = chunk5FUZZQ4RInput149
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput150))
      .attr("id", chunk5FUZZQ4RInput150.domId ?? chunk5FUZZQ4RInput150.id),
    chunk5FUZZQ4RBinding852 = Math.max(30, chunk5FUZZQ4RInput150?.width ?? 0),
    { cssStyles } = chunk5FUZZQ4RInput150,
    chunk5FUZZQ4RBinding853 = rough.svg(chunk5FUZZQ4RBinding851),
    chunk5FUZZQ4RBinding854 = o(chunk5FUZZQ4RInput150, {});
  chunk5FUZZQ4RInput150.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding854.roughness = 0),
    (chunk5FUZZQ4RBinding854.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding855 = chunk5FUZZQ4RBinding853.circle(
      0,
      0,
      chunk5FUZZQ4RBinding852 * 2,
      chunk5FUZZQ4RBinding854,
    ),
    chunk5FUZZQ4RBinding856 = chunk5FUZZQ4RHelper19(chunk5FUZZQ4RBinding852),
    chunk5FUZZQ4RBinding857 = chunk5FUZZQ4RBinding853.path(
      chunk5FUZZQ4RBinding856,
      chunk5FUZZQ4RBinding854,
    ),
    chunk5FUZZQ4RBinding858 = chunk5FUZZQ4RBinding851.insert(
      () => chunk5FUZZQ4RBinding855,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding858.insert(() => chunk5FUZZQ4RBinding857),
    chunk5FUZZQ4RBinding858.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput150.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding858.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput150.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding858.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput150, chunk5FUZZQ4RBinding858),
    (chunk5FUZZQ4RInput150.intersect = function (chunk5FUZZQ4RInput308) {
      return (
        logger.info("crossedCircle intersect", chunk5FUZZQ4RInput150, {
          radius: chunk5FUZZQ4RBinding852,
          point: chunk5FUZZQ4RInput308,
        }),
        chunk5FUZZQ4RBinding12.circle(
          chunk5FUZZQ4RInput150,
          chunk5FUZZQ4RBinding852,
          chunk5FUZZQ4RInput308,
        )
      );
    }),
    chunk5FUZZQ4RBinding851
  );
}
function chunk5FUZZQ4RHelper21(
  chunk5FUZZQ4RInput230,
  chunk5FUZZQ4RInput231,
  chunk5FUZZQ4RInput232,
  chunk5FUZZQ4RInput233 = 100,
  chunk5FUZZQ4RInput234 = 0,
  chunk5FUZZQ4RInput235 = 180,
) {
  let chunk5FUZZQ4RBinding1059 = [],
    chunk5FUZZQ4RBinding1060 = (chunk5FUZZQ4RInput234 * Math.PI) / 180,
    chunk5FUZZQ4RBinding1061 =
      ((chunk5FUZZQ4RInput235 * Math.PI) / 180 - chunk5FUZZQ4RBinding1060) /
      (chunk5FUZZQ4RInput233 - 1);
  for (
    let chunk5FUZZQ4RBinding1198 = 0;
    chunk5FUZZQ4RBinding1198 < chunk5FUZZQ4RInput233;
    chunk5FUZZQ4RBinding1198++
  ) {
    let chunk5FUZZQ4RBinding1216 =
        chunk5FUZZQ4RBinding1060 +
        chunk5FUZZQ4RBinding1198 * chunk5FUZZQ4RBinding1061,
      chunk5FUZZQ4RBinding1217 =
        chunk5FUZZQ4RInput230 +
        chunk5FUZZQ4RInput232 * Math.cos(chunk5FUZZQ4RBinding1216),
      chunk5FUZZQ4RBinding1218 =
        chunk5FUZZQ4RInput231 +
        chunk5FUZZQ4RInput232 * Math.sin(chunk5FUZZQ4RBinding1216);
    chunk5FUZZQ4RBinding1059.push({
      x: -chunk5FUZZQ4RBinding1217,
      y: -chunk5FUZZQ4RBinding1218,
    });
  }
  return chunk5FUZZQ4RBinding1059;
}
async function chunk5FUZZQ4RHelper22(
  chunk5FUZZQ4RInput40,
  chunk5FUZZQ4RInput41,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput41);
  chunk5FUZZQ4RInput41.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput40,
      chunk5FUZZQ4RInput41,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput41),
    ),
    chunk5FUZZQ4RBinding361 =
      chunk5FUZZQ4RInput41.look === "neo"
        ? 18
        : (chunk5FUZZQ4RInput41.padding ?? 0),
    chunk5FUZZQ4RBinding362 =
      chunk5FUZZQ4RInput41.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput41.padding ?? 0),
    chunk5FUZZQ4RBinding363 = bbox.width + chunk5FUZZQ4RBinding361,
    chunk5FUZZQ4RBinding364 = bbox.height + chunk5FUZZQ4RBinding362,
    chunk5FUZZQ4RBinding365 = Math.max(5, chunk5FUZZQ4RBinding364 * 0.1),
    { cssStyles } = chunk5FUZZQ4RInput41,
    chunk5FUZZQ4RBinding366 = [
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2,
        -chunk5FUZZQ4RBinding364 / 2,
        chunk5FUZZQ4RBinding365,
        30,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RBinding363 / 2 - chunk5FUZZQ4RBinding365,
        y: chunk5FUZZQ4RBinding365,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2 + chunk5FUZZQ4RBinding365 * 2,
        -chunk5FUZZQ4RBinding365,
        chunk5FUZZQ4RBinding365,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2 + chunk5FUZZQ4RBinding365 * 2,
        chunk5FUZZQ4RBinding365,
        chunk5FUZZQ4RBinding365,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RBinding363 / 2 - chunk5FUZZQ4RBinding365,
        y: -chunk5FUZZQ4RBinding364 / 2,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2,
        chunk5FUZZQ4RBinding364 / 2,
        chunk5FUZZQ4RBinding365,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RBinding367 = [
      {
        x: chunk5FUZZQ4RBinding363 / 2,
        y: -chunk5FUZZQ4RBinding364 / 2 - chunk5FUZZQ4RBinding365,
      },
      {
        x: -chunk5FUZZQ4RBinding363 / 2,
        y: -chunk5FUZZQ4RBinding364 / 2 - chunk5FUZZQ4RBinding365,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2,
        -chunk5FUZZQ4RBinding364 / 2,
        chunk5FUZZQ4RBinding365,
        20,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RBinding363 / 2 - chunk5FUZZQ4RBinding365,
        y: -chunk5FUZZQ4RBinding365,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2 + chunk5FUZZQ4RBinding363 * 0.1,
        -chunk5FUZZQ4RBinding365,
        chunk5FUZZQ4RBinding365,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2 + chunk5FUZZQ4RBinding363 * 0.1,
        chunk5FUZZQ4RBinding365,
        chunk5FUZZQ4RBinding365,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RBinding363 / 2 - chunk5FUZZQ4RBinding365,
        y: chunk5FUZZQ4RBinding364 / 2,
      },
      ...chunk5FUZZQ4RHelper21(
        chunk5FUZZQ4RBinding363 / 2,
        chunk5FUZZQ4RBinding364 / 2,
        chunk5FUZZQ4RBinding365,
        20,
        0,
        90,
      ),
      {
        x: -chunk5FUZZQ4RBinding363 / 2,
        y: chunk5FUZZQ4RBinding364 / 2 + chunk5FUZZQ4RBinding365,
      },
      {
        x: chunk5FUZZQ4RBinding363 / 2,
        y: chunk5FUZZQ4RBinding364 / 2 + chunk5FUZZQ4RBinding365,
      },
    ],
    chunk5FUZZQ4RBinding368 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding369 = o(chunk5FUZZQ4RInput41, {
      fill: "none",
    });
  chunk5FUZZQ4RInput41.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding369.roughness = 0),
    (chunk5FUZZQ4RBinding369.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding370 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RBinding366,
    ).replace("Z", ""),
    chunk5FUZZQ4RBinding371 = chunk5FUZZQ4RBinding368.path(
      chunk5FUZZQ4RBinding370,
      chunk5FUZZQ4RBinding369,
    ),
    chunk5FUZZQ4RBinding372 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding367),
    chunk5FUZZQ4RBinding373 = chunk5FUZZQ4RBinding368.path(
      chunk5FUZZQ4RBinding372,
      {
        ...chunk5FUZZQ4RBinding369,
      },
    ),
    chunk5FUZZQ4RBinding374 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RBinding374
      .insert(() => chunk5FUZZQ4RBinding373, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RBinding374.insert(
      () => chunk5FUZZQ4RBinding371,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding374.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RInput41.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding374.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput41.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding374.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding374.attr(
      "transform",
      `translate(${chunk5FUZZQ4RBinding365}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding363 / 2 + chunk5FUZZQ4RBinding365 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding364 / 2 + (chunk5FUZZQ4RInput41.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput41, chunk5FUZZQ4RBinding374),
    (chunk5FUZZQ4RInput41.intersect = function (chunk5FUZZQ4RInput366) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput41,
        chunk5FUZZQ4RBinding367,
        chunk5FUZZQ4RInput366,
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper23(
  chunk5FUZZQ4RInput242,
  chunk5FUZZQ4RInput243,
  chunk5FUZZQ4RInput244,
  chunk5FUZZQ4RInput245 = 100,
  chunk5FUZZQ4RInput246 = 0,
  chunk5FUZZQ4RInput247 = 180,
) {
  let chunk5FUZZQ4RBinding1065 = [],
    chunk5FUZZQ4RBinding1066 = (chunk5FUZZQ4RInput246 * Math.PI) / 180,
    chunk5FUZZQ4RBinding1067 =
      ((chunk5FUZZQ4RInput247 * Math.PI) / 180 - chunk5FUZZQ4RBinding1066) /
      (chunk5FUZZQ4RInput245 - 1);
  for (
    let chunk5FUZZQ4RBinding1200 = 0;
    chunk5FUZZQ4RBinding1200 < chunk5FUZZQ4RInput245;
    chunk5FUZZQ4RBinding1200++
  ) {
    let chunk5FUZZQ4RBinding1223 =
        chunk5FUZZQ4RBinding1066 +
        chunk5FUZZQ4RBinding1200 * chunk5FUZZQ4RBinding1067,
      chunk5FUZZQ4RBinding1224 =
        chunk5FUZZQ4RInput242 +
        chunk5FUZZQ4RInput244 * Math.cos(chunk5FUZZQ4RBinding1223),
      chunk5FUZZQ4RBinding1225 =
        chunk5FUZZQ4RInput243 +
        chunk5FUZZQ4RInput244 * Math.sin(chunk5FUZZQ4RBinding1223);
    chunk5FUZZQ4RBinding1065.push({
      x: chunk5FUZZQ4RBinding1224,
      y: chunk5FUZZQ4RBinding1225,
    });
  }
  return chunk5FUZZQ4RBinding1065;
}
async function chunk5FUZZQ4RHelper24(
  chunk5FUZZQ4RInput38,
  chunk5FUZZQ4RInput39,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput39);
  chunk5FUZZQ4RInput39.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput38,
      chunk5FUZZQ4RInput39,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput39),
    ),
    chunk5FUZZQ4RBinding347 =
      chunk5FUZZQ4RInput39.look === "neo"
        ? 18
        : (chunk5FUZZQ4RInput39.padding ?? 0),
    chunk5FUZZQ4RBinding348 =
      chunk5FUZZQ4RInput39.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput39.padding ?? 0),
    chunk5FUZZQ4RBinding349 =
      bbox.width +
      (chunk5FUZZQ4RInput39.look === "neo"
        ? chunk5FUZZQ4RBinding347 * 2
        : chunk5FUZZQ4RBinding347),
    chunk5FUZZQ4RBinding350 =
      bbox.height +
      (chunk5FUZZQ4RInput39.look === "neo"
        ? chunk5FUZZQ4RBinding348 * 2
        : chunk5FUZZQ4RBinding348),
    chunk5FUZZQ4RBinding351 = Math.max(5, chunk5FUZZQ4RBinding350 * 0.1),
    { cssStyles } = chunk5FUZZQ4RInput39,
    chunk5FUZZQ4RBinding352 = [
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2,
        -chunk5FUZZQ4RBinding350 / 2,
        chunk5FUZZQ4RBinding351,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351,
        y: -chunk5FUZZQ4RBinding351,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351 * 2,
        -chunk5FUZZQ4RBinding351,
        chunk5FUZZQ4RBinding351,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351 * 2,
        chunk5FUZZQ4RBinding351,
        chunk5FUZZQ4RBinding351,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351,
        y: chunk5FUZZQ4RBinding350 / 2,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2,
        chunk5FUZZQ4RBinding350 / 2,
        chunk5FUZZQ4RBinding351,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RBinding353 = [
      {
        x: -chunk5FUZZQ4RBinding349 / 2,
        y: -chunk5FUZZQ4RBinding350 / 2 - chunk5FUZZQ4RBinding351,
      },
      {
        x: chunk5FUZZQ4RBinding349 / 2,
        y: -chunk5FUZZQ4RBinding350 / 2 - chunk5FUZZQ4RBinding351,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2,
        -chunk5FUZZQ4RBinding350 / 2,
        chunk5FUZZQ4RBinding351,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351,
        y: -chunk5FUZZQ4RBinding351,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351 * 2,
        -chunk5FUZZQ4RBinding351,
        chunk5FUZZQ4RBinding351,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351 * 2,
        chunk5FUZZQ4RBinding351,
        chunk5FUZZQ4RBinding351,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RBinding349 / 2 + chunk5FUZZQ4RBinding351,
        y: chunk5FUZZQ4RBinding350 / 2,
      },
      ...chunk5FUZZQ4RHelper23(
        chunk5FUZZQ4RBinding349 / 2,
        chunk5FUZZQ4RBinding350 / 2,
        chunk5FUZZQ4RBinding351,
        20,
        0,
        90,
      ),
      {
        x: chunk5FUZZQ4RBinding349 / 2,
        y: chunk5FUZZQ4RBinding350 / 2 + chunk5FUZZQ4RBinding351,
      },
      {
        x: -chunk5FUZZQ4RBinding349 / 2,
        y: chunk5FUZZQ4RBinding350 / 2 + chunk5FUZZQ4RBinding351,
      },
    ],
    chunk5FUZZQ4RBinding354 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding355 = o(chunk5FUZZQ4RInput39, {
      fill: "none",
    });
  chunk5FUZZQ4RInput39.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding355.roughness = 0),
    (chunk5FUZZQ4RBinding355.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding356 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RBinding352,
    ).replace("Z", ""),
    chunk5FUZZQ4RBinding357 = chunk5FUZZQ4RBinding354.path(
      chunk5FUZZQ4RBinding356,
      chunk5FUZZQ4RBinding355,
    ),
    chunk5FUZZQ4RBinding358 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding353),
    chunk5FUZZQ4RBinding359 = chunk5FUZZQ4RBinding354.path(
      chunk5FUZZQ4RBinding358,
      {
        ...chunk5FUZZQ4RBinding355,
      },
    ),
    chunk5FUZZQ4RBinding360 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RBinding360
      .insert(() => chunk5FUZZQ4RBinding359, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RBinding360.insert(
      () => chunk5FUZZQ4RBinding357,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding360.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RInput39.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding360.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput39.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding360.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding360.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding351}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding349 / 2 + (chunk5FUZZQ4RInput39.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding350 / 2 + (chunk5FUZZQ4RInput39.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput39, chunk5FUZZQ4RBinding360),
    (chunk5FUZZQ4RInput39.intersect = function (chunk5FUZZQ4RInput367) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput39,
        chunk5FUZZQ4RBinding353,
        chunk5FUZZQ4RInput367,
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper25(
  chunk5FUZZQ4RInput236,
  chunk5FUZZQ4RInput237,
  chunk5FUZZQ4RInput238,
  chunk5FUZZQ4RInput239 = 100,
  chunk5FUZZQ4RInput240 = 0,
  chunk5FUZZQ4RInput241 = 180,
) {
  let chunk5FUZZQ4RBinding1062 = [],
    chunk5FUZZQ4RBinding1063 = (chunk5FUZZQ4RInput240 * Math.PI) / 180,
    chunk5FUZZQ4RBinding1064 =
      ((chunk5FUZZQ4RInput241 * Math.PI) / 180 - chunk5FUZZQ4RBinding1063) /
      (chunk5FUZZQ4RInput239 - 1);
  for (
    let chunk5FUZZQ4RBinding1199 = 0;
    chunk5FUZZQ4RBinding1199 < chunk5FUZZQ4RInput239;
    chunk5FUZZQ4RBinding1199++
  ) {
    let chunk5FUZZQ4RBinding1219 =
        chunk5FUZZQ4RBinding1063 +
        chunk5FUZZQ4RBinding1199 * chunk5FUZZQ4RBinding1064,
      chunk5FUZZQ4RBinding1220 =
        chunk5FUZZQ4RInput236 +
        chunk5FUZZQ4RInput238 * Math.cos(chunk5FUZZQ4RBinding1219),
      chunk5FUZZQ4RBinding1221 =
        chunk5FUZZQ4RInput237 +
        chunk5FUZZQ4RInput238 * Math.sin(chunk5FUZZQ4RBinding1219);
    chunk5FUZZQ4RBinding1062.push({
      x: -chunk5FUZZQ4RBinding1220,
      y: -chunk5FUZZQ4RBinding1221,
    });
  }
  return chunk5FUZZQ4RBinding1062;
}
async function chunk5FUZZQ4RHelper26(
  chunk5FUZZQ4RInput22,
  chunk5FUZZQ4RInput23,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput23);
  chunk5FUZZQ4RInput23.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput22,
      chunk5FUZZQ4RInput23,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput23),
    ),
    chunk5FUZZQ4RBinding258 =
      chunk5FUZZQ4RInput23.look === "neo"
        ? 18
        : (chunk5FUZZQ4RInput23.padding ?? 0),
    chunk5FUZZQ4RBinding259 =
      chunk5FUZZQ4RInput23.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput23.padding ?? 0),
    chunk5FUZZQ4RBinding260 =
      bbox.width +
      (chunk5FUZZQ4RInput23.look === "neo"
        ? chunk5FUZZQ4RBinding258 * 2
        : chunk5FUZZQ4RBinding258),
    chunk5FUZZQ4RBinding261 =
      bbox.height +
      (chunk5FUZZQ4RInput23.look === "neo"
        ? chunk5FUZZQ4RBinding259 * 2
        : chunk5FUZZQ4RBinding259),
    chunk5FUZZQ4RBinding262 = Math.max(5, chunk5FUZZQ4RBinding261 * 0.1),
    { cssStyles } = chunk5FUZZQ4RInput23,
    chunk5FUZZQ4RBinding263 = [
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2,
        -chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        30,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262,
        y: chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2 + chunk5FUZZQ4RBinding262 * 2,
        -chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2 + chunk5FUZZQ4RBinding262 * 2,
        chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262,
        y: -chunk5FUZZQ4RBinding261 / 2,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2,
        chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        20,
        0,
        90,
      ),
    ],
    chunk5FUZZQ4RBinding264 = [
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 +
          chunk5FUZZQ4RBinding262 +
          chunk5FUZZQ4RBinding262 / 2,
        -chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        y: chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        -chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        0,
        90,
      ),
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        y: -chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 +
          chunk5FUZZQ4RBinding262 +
          chunk5FUZZQ4RBinding262 / 2,
        chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        30,
        -180,
        -270,
      ),
    ],
    chunk5FUZZQ4RBinding265 = [
      {
        x: chunk5FUZZQ4RBinding260 / 2,
        y: -chunk5FUZZQ4RBinding261 / 2 - chunk5FUZZQ4RBinding262,
      },
      {
        x: -chunk5FUZZQ4RBinding260 / 2,
        y: -chunk5FUZZQ4RBinding261 / 2 - chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2,
        -chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        0,
      ),
      {
        x: -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262,
        y: -chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2 + chunk5FUZZQ4RBinding262 * 2,
        -chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -180,
        -270,
      ),
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2 + chunk5FUZZQ4RBinding262 * 2,
        chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        -180,
      ),
      {
        x: -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262,
        y: chunk5FUZZQ4RBinding261 / 2,
      },
      ...chunk5FUZZQ4RHelper25(
        chunk5FUZZQ4RBinding260 / 2,
        chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        20,
        0,
        90,
      ),
      {
        x: -chunk5FUZZQ4RBinding260 / 2,
        y: chunk5FUZZQ4RBinding261 / 2 + chunk5FUZZQ4RBinding262,
      },
      {
        x:
          chunk5FUZZQ4RBinding260 / 2 -
          chunk5FUZZQ4RBinding262 -
          chunk5FUZZQ4RBinding262 / 2,
        y: chunk5FUZZQ4RBinding261 / 2 + chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 +
          chunk5FUZZQ4RBinding262 +
          chunk5FUZZQ4RBinding262 / 2,
        -chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        -180,
      ),
      {
        x: chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        y: chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        -chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        0,
        90,
      ),
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        chunk5FUZZQ4RBinding262,
        chunk5FUZZQ4RBinding262,
        20,
        -90,
        0,
      ),
      {
        x: chunk5FUZZQ4RBinding260 / 2 - chunk5FUZZQ4RBinding262 / 2,
        y: -chunk5FUZZQ4RBinding262,
      },
      ...chunk5FUZZQ4RHelper25(
        -chunk5FUZZQ4RBinding260 / 2 +
          chunk5FUZZQ4RBinding262 +
          chunk5FUZZQ4RBinding262 / 2,
        chunk5FUZZQ4RBinding261 / 2,
        chunk5FUZZQ4RBinding262,
        30,
        -180,
        -270,
      ),
    ],
    chunk5FUZZQ4RBinding266 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding267 = o(chunk5FUZZQ4RInput23, {
      fill: "none",
    });
  chunk5FUZZQ4RInput23.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding267.roughness = 0),
    (chunk5FUZZQ4RBinding267.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding268 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RBinding263,
    ).replace("Z", ""),
    chunk5FUZZQ4RBinding269 = chunk5FUZZQ4RBinding266.path(
      chunk5FUZZQ4RBinding268,
      chunk5FUZZQ4RBinding267,
    ),
    chunk5FUZZQ4RBinding270 = chunk5FUZZQ4RHelper1(
      chunk5FUZZQ4RBinding264,
    ).replace("Z", ""),
    chunk5FUZZQ4RBinding271 = chunk5FUZZQ4RBinding266.path(
      chunk5FUZZQ4RBinding270,
      chunk5FUZZQ4RBinding267,
    ),
    chunk5FUZZQ4RBinding272 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding265),
    chunk5FUZZQ4RBinding273 = chunk5FUZZQ4RBinding266.path(
      chunk5FUZZQ4RBinding272,
      {
        ...chunk5FUZZQ4RBinding267,
      },
    ),
    chunk5FUZZQ4RBinding274 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RBinding274
      .insert(() => chunk5FUZZQ4RBinding273, ":first-child")
      .attr("stroke-opacity", 0),
    chunk5FUZZQ4RBinding274.insert(
      () => chunk5FUZZQ4RBinding269,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding274.insert(
      () => chunk5FUZZQ4RBinding271,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding274.attr("class", "text"),
    cssStyles &&
      chunk5FUZZQ4RInput23.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding274.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput23.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding274.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding274.attr(
      "transform",
      `translate(${chunk5FUZZQ4RBinding262 - chunk5FUZZQ4RBinding262 / 4}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding260 / 2 + (chunk5FUZZQ4RInput23.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding261 / 2 + (chunk5FUZZQ4RInput23.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput23, chunk5FUZZQ4RBinding274),
    (chunk5FUZZQ4RInput23.intersect = function (chunk5FUZZQ4RInput368) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput23,
        chunk5FUZZQ4RBinding265,
        chunk5FUZZQ4RInput368,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper27(
  chunk5FUZZQ4RInput102,
  chunk5FUZZQ4RInput103,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput103);
  chunk5FUZZQ4RInput103.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding702 = chunk5FUZZQ4RInput103.padding ?? 0,
    chunk5FUZZQ4RBinding703 =
      chunk5FUZZQ4RInput103.look === "neo" ? 16 : chunk5FUZZQ4RBinding702,
    chunk5FUZZQ4RBinding704 =
      chunk5FUZZQ4RInput103.look === "neo" ? 12 : chunk5FUZZQ4RBinding702,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput102,
      chunk5FUZZQ4RInput103,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput103),
    ),
    chunk5FUZZQ4RBinding705 = Math.max(
      20,
      (bbox.width + chunk5FUZZQ4RBinding703 * 2) * 1.25,
      chunk5FUZZQ4RInput103?.width ?? 0,
    ),
    chunk5FUZZQ4RBinding706 = Math.max(
      5,
      bbox.height + chunk5FUZZQ4RBinding704 * 2,
      chunk5FUZZQ4RInput103?.height ?? 0,
    ),
    chunk5FUZZQ4RBinding707 = chunk5FUZZQ4RBinding706 / 2,
    { cssStyles } = chunk5FUZZQ4RInput103,
    chunk5FUZZQ4RBinding708 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding709 = o(chunk5FUZZQ4RInput103, {});
  chunk5FUZZQ4RInput103.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding709.roughness = 0),
    (chunk5FUZZQ4RBinding709.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding710 = chunk5FUZZQ4RBinding705,
    chunk5FUZZQ4RBinding711 = chunk5FUZZQ4RBinding706,
    chunk5FUZZQ4RBinding712 = chunk5FUZZQ4RBinding710 - chunk5FUZZQ4RBinding707,
    chunk5FUZZQ4RBinding713 = chunk5FUZZQ4RBinding711 / 4,
    chunk5FUZZQ4RBinding714 = [
      {
        x: chunk5FUZZQ4RBinding712,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding713,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RBinding711 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding713,
        y: chunk5FUZZQ4RBinding711,
      },
      {
        x: chunk5FUZZQ4RBinding712,
        y: chunk5FUZZQ4RBinding711,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RBinding712,
        -chunk5FUZZQ4RBinding711 / 2,
        chunk5FUZZQ4RBinding707,
        50,
        270,
        90,
      ),
    ],
    chunk5FUZZQ4RBinding715 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding714),
    chunk5FUZZQ4RBinding716 = chunk5FUZZQ4RBinding708.path(
      chunk5FUZZQ4RBinding715,
      chunk5FUZZQ4RBinding709,
    ),
    chunk5FUZZQ4RBinding717 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding716,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding717.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput103.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding717.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput103.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding717.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding717.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding705 / 2}, ${-chunk5FUZZQ4RBinding706 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput103, chunk5FUZZQ4RBinding717),
    (chunk5FUZZQ4RInput103.intersect = function (chunk5FUZZQ4RInput369) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput103,
        chunk5FUZZQ4RBinding714,
        chunk5FUZZQ4RInput369,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper28(
  chunk5FUZZQ4RInput32,
  chunk5FUZZQ4RInput33,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput33);
  chunk5FUZZQ4RInput33.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding299 = chunk5FUZZQ4RInput33.padding ?? 0,
    chunk5FUZZQ4RBinding300 =
      chunk5FUZZQ4RInput33.look === "neo" ? 24 : chunk5FUZZQ4RBinding299,
    chunk5FUZZQ4RBinding301 =
      chunk5FUZZQ4RInput33.look === "neo" ? 24 : chunk5FUZZQ4RBinding299;
  if (chunk5FUZZQ4RInput33.width || chunk5FUZZQ4RInput33.height) {
    let chunk5FUZZQ4RBinding1140 = chunk5FUZZQ4RInput33.width ?? 0;
    chunk5FUZZQ4RInput33.width =
      (chunk5FUZZQ4RInput33.width ?? 0) - chunk5FUZZQ4RBinding301;
    chunk5FUZZQ4RInput33.width < chunk5FUZZQ4RBinding18 &&
      (chunk5FUZZQ4RInput33.width = chunk5FUZZQ4RBinding18);
    let chunk5FUZZQ4RBinding1141 =
      chunk5FUZZQ4RBinding1140 / 2 / (2.5 + chunk5FUZZQ4RBinding1140 / 50);
    chunk5FUZZQ4RInput33.height =
      (chunk5FUZZQ4RInput33.height ?? 0) -
      chunk5FUZZQ4RBinding300 -
      chunk5FUZZQ4RBinding1141 * 3;
    chunk5FUZZQ4RInput33.height < chunk5FUZZQ4RBinding17 &&
      (chunk5FUZZQ4RInput33.height = chunk5FUZZQ4RBinding17);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput32,
      chunk5FUZZQ4RInput33,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput33),
    ),
    chunk5FUZZQ4RBinding302 =
      (chunk5FUZZQ4RInput33.width ? chunk5FUZZQ4RInput33.width : bbox.width) +
      chunk5FUZZQ4RBinding301,
    chunk5FUZZQ4RBinding303 = chunk5FUZZQ4RBinding302 / 2,
    chunk5FUZZQ4RBinding304 =
      chunk5FUZZQ4RBinding303 / (2.5 + chunk5FUZZQ4RBinding302 / 50),
    chunk5FUZZQ4RBinding305 =
      (chunk5FUZZQ4RInput33.height
        ? chunk5FUZZQ4RInput33.height
        : bbox.height) +
      chunk5FUZZQ4RBinding300 +
      chunk5FUZZQ4RBinding304,
    chunk5FUZZQ4RBinding306,
    { cssStyles } = chunk5FUZZQ4RInput33;
  if (chunk5FUZZQ4RInput33.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1027 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1028 = chunk5FUZZQ4RBinding15(
        0,
        0,
        chunk5FUZZQ4RBinding302,
        chunk5FUZZQ4RBinding305,
        chunk5FUZZQ4RBinding303,
        chunk5FUZZQ4RBinding304,
      ),
      chunk5FUZZQ4RBinding1029 = chunk5FUZZQ4RBinding16(
        0,
        chunk5FUZZQ4RBinding304,
        chunk5FUZZQ4RBinding302,
        chunk5FUZZQ4RBinding305,
        chunk5FUZZQ4RBinding303,
        chunk5FUZZQ4RBinding304,
      ),
      chunk5FUZZQ4RBinding1030 = o(chunk5FUZZQ4RInput33, {}),
      chunk5FUZZQ4RBinding1031 = chunk5FUZZQ4RBinding1027.path(
        chunk5FUZZQ4RBinding1028,
        chunk5FUZZQ4RBinding1030,
      ),
      chunk5FUZZQ4RBinding1032 = chunk5FUZZQ4RBinding1027.path(
        chunk5FUZZQ4RBinding1029,
        o(chunk5FUZZQ4RInput33, {
          fill: "none",
        }),
      );
    chunk5FUZZQ4RBinding306 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1032,
      ":first-child",
    );
    chunk5FUZZQ4RBinding306 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1031,
      ":first-child",
    );
    chunk5FUZZQ4RBinding306.attr("class", "basic label-container");
    cssStyles && chunk5FUZZQ4RBinding306.attr("style", cssStyles);
  } else {
    let chunk5FUZZQ4RBinding1147 = chunk5FUZZQ4RBinding14(
      0,
      0,
      chunk5FUZZQ4RBinding302,
      chunk5FUZZQ4RBinding305,
      chunk5FUZZQ4RBinding303,
      chunk5FUZZQ4RBinding304,
    );
    chunk5FUZZQ4RBinding306 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RBinding1147)
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWL(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RBinding306.attr("label-offset-y", chunk5FUZZQ4RBinding304),
    chunk5FUZZQ4RBinding306.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding302 / 2}, ${-(chunk5FUZZQ4RBinding305 / 2 + chunk5FUZZQ4RBinding304)})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput33, chunk5FUZZQ4RBinding306),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (chunk5FUZZQ4RInput33.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RInput33.intersect = function (chunk5FUZZQ4RInput191) {
      let chunk5FUZZQ4RBinding961 = chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput33,
          chunk5FUZZQ4RInput191,
        ),
        chunk5FUZZQ4RBinding962 =
          chunk5FUZZQ4RBinding961.x - (chunk5FUZZQ4RInput33.x ?? 0);
      if (
        chunk5FUZZQ4RBinding303 != 0 &&
        (Math.abs(chunk5FUZZQ4RBinding962) <
          (chunk5FUZZQ4RInput33.width ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RBinding962) ==
            (chunk5FUZZQ4RInput33.width ?? 0) / 2 &&
            Math.abs(
              chunk5FUZZQ4RBinding961.y - (chunk5FUZZQ4RInput33.y ?? 0),
            ) >
              (chunk5FUZZQ4RInput33.height ?? 0) / 2 - chunk5FUZZQ4RBinding304))
      ) {
        let chunk5FUZZQ4RBinding1171 =
          chunk5FUZZQ4RBinding304 *
          chunk5FUZZQ4RBinding304 *
          (1 -
            (chunk5FUZZQ4RBinding962 * chunk5FUZZQ4RBinding962) /
              (chunk5FUZZQ4RBinding303 * chunk5FUZZQ4RBinding303));
        chunk5FUZZQ4RBinding1171 > 0 &&
          (chunk5FUZZQ4RBinding1171 = Math.sqrt(chunk5FUZZQ4RBinding1171));
        chunk5FUZZQ4RBinding1171 =
          chunk5FUZZQ4RBinding304 - chunk5FUZZQ4RBinding1171;
        chunk5FUZZQ4RInput191.y - (chunk5FUZZQ4RInput33.y ?? 0) > 0 &&
          (chunk5FUZZQ4RBinding1171 = -chunk5FUZZQ4RBinding1171);
        chunk5FUZZQ4RBinding961.y += chunk5FUZZQ4RBinding1171;
      }
      return chunk5FUZZQ4RBinding961;
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper29(
  chunk5FUZZQ4RInput91,
  chunk5FUZZQ4RInput92,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput92);
  chunk5FUZZQ4RInput92.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding664 =
      chunk5FUZZQ4RInput92.look === "neo"
        ? 16
        : (chunk5FUZZQ4RInput92.padding ?? 0),
    chunk5FUZZQ4RBinding665 =
      chunk5FUZZQ4RInput92.look === "neo"
        ? 16
        : (chunk5FUZZQ4RInput92.padding ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput91,
      chunk5FUZZQ4RInput92,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput92),
    ),
    chunk5FUZZQ4RBinding666 = bbox.width + chunk5FUZZQ4RBinding664,
    chunk5FUZZQ4RBinding667 = bbox.height + chunk5FUZZQ4RBinding665,
    chunk5FUZZQ4RBinding668 = chunk5FUZZQ4RBinding667 * 0.2,
    chunk5FUZZQ4RBinding669 = -chunk5FUZZQ4RBinding666 / 2,
    chunk5FUZZQ4RBinding670 =
      -chunk5FUZZQ4RBinding667 / 2 - chunk5FUZZQ4RBinding668 / 2,
    { cssStyles } = chunk5FUZZQ4RInput92,
    chunk5FUZZQ4RBinding671 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding672 = o(chunk5FUZZQ4RInput92, {});
  chunk5FUZZQ4RInput92.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding672.roughness = 0),
    (chunk5FUZZQ4RBinding672.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding673 = [
      {
        x: chunk5FUZZQ4RBinding669,
        y: chunk5FUZZQ4RBinding670 + chunk5FUZZQ4RBinding668,
      },
      {
        x: -chunk5FUZZQ4RBinding669,
        y: chunk5FUZZQ4RBinding670 + chunk5FUZZQ4RBinding668,
      },
      {
        x: -chunk5FUZZQ4RBinding669,
        y: -chunk5FUZZQ4RBinding670,
      },
      {
        x: chunk5FUZZQ4RBinding669,
        y: -chunk5FUZZQ4RBinding670,
      },
      {
        x: chunk5FUZZQ4RBinding669,
        y: chunk5FUZZQ4RBinding670,
      },
      {
        x: -chunk5FUZZQ4RBinding669,
        y: chunk5FUZZQ4RBinding670,
      },
      {
        x: -chunk5FUZZQ4RBinding669,
        y: chunk5FUZZQ4RBinding670 + chunk5FUZZQ4RBinding668,
      },
    ],
    chunk5FUZZQ4RBinding674 = chunk5FUZZQ4RBinding671.polygon(
      chunk5FUZZQ4RBinding673.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding672,
    ),
    chunk5FUZZQ4RBinding675 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding674,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding675.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput92.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding675.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput92.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding675.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${chunk5FUZZQ4RBinding669 + (chunk5FUZZQ4RInput92.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunk5FUZZQ4RBinding670 + chunk5FUZZQ4RBinding668 + (chunk5FUZZQ4RInput92.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput92, chunk5FUZZQ4RBinding675),
    (chunk5FUZZQ4RInput92.intersect = function (chunk5FUZZQ4RInput403) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput92,
        chunk5FUZZQ4RInput403,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper30(
  chunk5FUZZQ4RInput77,
  chunk5FUZZQ4RInput78,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput78),
    chunk5FUZZQ4RBinding582 = chunk5FUZZQ4RInput78.look === "neo" ? 12 : 5;
  chunk5FUZZQ4RInput78.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding583 = chunk5FUZZQ4RInput78.padding ?? 0,
    chunk5FUZZQ4RBinding584 =
      chunk5FUZZQ4RInput78.look === "neo" ? 16 : chunk5FUZZQ4RBinding583,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput77,
      chunk5FUZZQ4RInput78,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput78),
    ),
    chunk5FUZZQ4RBinding585 =
      (chunk5FUZZQ4RInput78?.width
        ? chunk5FUZZQ4RInput78?.width / 2
        : bbox.width / 2) + (chunk5FUZZQ4RBinding584 ?? 0),
    chunk5FUZZQ4RBinding586 = chunk5FUZZQ4RBinding585 - chunk5FUZZQ4RBinding582,
    chunk5FUZZQ4RBinding587,
    { cssStyles } = chunk5FUZZQ4RInput78;
  if (chunk5FUZZQ4RInput78.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1013 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1014 = o(chunk5FUZZQ4RInput78, {
        roughness: 0.2,
        strokeWidth: 2.5,
      }),
      chunk5FUZZQ4RBinding1015 = o(chunk5FUZZQ4RInput78, {
        roughness: 0.2,
        strokeWidth: 1.5,
      }),
      chunk5FUZZQ4RBinding1016 = chunk5FUZZQ4RBinding1013.circle(
        0,
        0,
        chunk5FUZZQ4RBinding585 * 2,
        chunk5FUZZQ4RBinding1014,
      ),
      chunk5FUZZQ4RBinding1017 = chunk5FUZZQ4RBinding1013.circle(
        0,
        0,
        chunk5FUZZQ4RBinding586 * 2,
        chunk5FUZZQ4RBinding1015,
      );
    chunk5FUZZQ4RBinding587 = shapeSvg.insert("g", ":first-child");
    chunk5FUZZQ4RBinding587
      .attr("class", chunk5PVQY5BWL(chunk5FUZZQ4RInput78.cssClasses))
      .attr("style", chunk5PVQY5BWL(cssStyles));
    chunk5FUZZQ4RBinding587.node()?.appendChild(chunk5FUZZQ4RBinding1016);
    chunk5FUZZQ4RBinding587.node()?.appendChild(chunk5FUZZQ4RBinding1017);
  } else {
    chunk5FUZZQ4RBinding587 = shapeSvg.insert("g", ":first-child");
    let chunk5FUZZQ4RBinding965 = chunk5FUZZQ4RBinding587.insert(
        "circle",
        ":first-child",
      ),
      chunk5FUZZQ4RBinding966 = chunk5FUZZQ4RBinding587.insert("circle");
    chunk5FUZZQ4RBinding587
      .attr("class", "basic label-container")
      .attr("style", nodeStyles);
    chunk5FUZZQ4RBinding965
      .attr("class", "outer-circle")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RBinding585)
      .attr("cx", 0)
      .attr("cy", 0);
    chunk5FUZZQ4RBinding966
      .attr("class", "inner-circle")
      .attr("style", nodeStyles)
      .attr("r", chunk5FUZZQ4RBinding586)
      .attr("cx", 0)
      .attr("cy", 0);
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput78, chunk5FUZZQ4RBinding587),
    (chunk5FUZZQ4RInput78.intersect = function (chunk5FUZZQ4RInput323) {
      return (
        logger.info(
          "DoubleCircle intersect",
          chunk5FUZZQ4RInput78,
          chunk5FUZZQ4RBinding585,
          chunk5FUZZQ4RInput323,
        ),
        chunk5FUZZQ4RBinding12.circle(
          chunk5FUZZQ4RInput78,
          chunk5FUZZQ4RBinding585,
          chunk5FUZZQ4RInput323,
        )
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper31(
  chunk5FUZZQ4RInput147,
  chunk5FUZZQ4RInput148,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput148);
  chunk5FUZZQ4RInput148.label = "";
  chunk5FUZZQ4RInput148.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding846 = chunk5FUZZQ4RInput147
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput148))
      .attr("id", chunk5FUZZQ4RInput148.domId ?? chunk5FUZZQ4RInput148.id),
    { cssStyles } = chunk5FUZZQ4RInput148,
    chunk5FUZZQ4RBinding847 = rough.svg(chunk5FUZZQ4RBinding846),
    { nodeBorder } = themeVariables,
    chunk5FUZZQ4RBinding848 = o(chunk5FUZZQ4RInput148, {
      fillStyle: "solid",
    });
  chunk5FUZZQ4RInput148.look !== "handDrawn" &&
    (chunk5FUZZQ4RBinding848.roughness = 0);
  let chunk5FUZZQ4RBinding849 = chunk5FUZZQ4RBinding847.circle(
      0,
      0,
      14,
      chunk5FUZZQ4RBinding848,
    ),
    chunk5FUZZQ4RBinding850 = chunk5FUZZQ4RBinding846.insert(
      () => chunk5FUZZQ4RBinding849,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding850
      .selectAll("path")
      .attr("style", `fill: ${nodeBorder} !important;`),
    cssStyles &&
      cssStyles.length > 0 &&
      chunk5FUZZQ4RInput148.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding850.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput148.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding850.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput148, chunk5FUZZQ4RBinding850),
    (chunk5FUZZQ4RInput148.intersect = function (chunk5FUZZQ4RInput309) {
      return (
        logger.info("filledCircle intersect", chunk5FUZZQ4RInput148, {
          radius: 7,
          point: chunk5FUZZQ4RInput309,
        }),
        chunk5FUZZQ4RBinding12.circle(
          chunk5FUZZQ4RInput148,
          7,
          chunk5FUZZQ4RInput309,
        )
      );
    }),
    chunk5FUZZQ4RBinding846
  );
}
async function chunk5FUZZQ4RHelper32(
  chunk5FUZZQ4RInput71,
  chunk5FUZZQ4RInput72,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput72);
  chunk5FUZZQ4RInput72.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding552 = chunk5FUZZQ4RInput72.padding ?? 0,
    chunk5FUZZQ4RBinding553 =
      chunk5FUZZQ4RInput72.look === "neo"
        ? chunk5FUZZQ4RBinding552 * 2
        : chunk5FUZZQ4RBinding552;
  (chunk5FUZZQ4RInput72.width || chunk5FUZZQ4RInput72.height) &&
    ((chunk5FUZZQ4RInput72.height = chunk5FUZZQ4RInput72?.height ?? 0),
    chunk5FUZZQ4RInput72.height < chunk5FUZZQ4RBinding19 &&
      (chunk5FUZZQ4RInput72.height = chunk5FUZZQ4RBinding19),
    (chunk5FUZZQ4RInput72.width =
      (chunk5FUZZQ4RInput72?.width ?? 0) -
      chunk5FUZZQ4RBinding553 -
      chunk5FUZZQ4RBinding553 / 2),
    chunk5FUZZQ4RInput72.width < chunk5FUZZQ4RBinding20 &&
      (chunk5FUZZQ4RInput72.width = chunk5FUZZQ4RBinding20));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput71,
      chunk5FUZZQ4RInput72,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput72),
    ),
    chunk5FUZZQ4RBinding554 =
      (chunk5FUZZQ4RInput72?.width ? chunk5FUZZQ4RInput72?.width : bbox.width) +
      (chunk5FUZZQ4RBinding553 ?? 0),
    chunk5FUZZQ4RBinding555 = chunk5FUZZQ4RInput72?.height
      ? chunk5FUZZQ4RInput72?.height
      : chunk5FUZZQ4RBinding554 + bbox.height,
    chunk5FUZZQ4RBinding556 = chunk5FUZZQ4RBinding555,
    chunk5FUZZQ4RBinding557 = [
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding555,
      },
      {
        x: chunk5FUZZQ4RBinding556,
        y: -chunk5FUZZQ4RBinding555,
      },
      {
        x: chunk5FUZZQ4RBinding556 / 2,
        y: 0,
      },
    ],
    { cssStyles } = chunk5FUZZQ4RInput72,
    chunk5FUZZQ4RBinding558 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding559 = o(chunk5FUZZQ4RInput72, {});
  chunk5FUZZQ4RInput72.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding559.roughness = 0),
    (chunk5FUZZQ4RBinding559.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding560 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding557),
    chunk5FUZZQ4RBinding561 = chunk5FUZZQ4RBinding558.path(
      chunk5FUZZQ4RBinding560,
      chunk5FUZZQ4RBinding559,
    ),
    chunk5FUZZQ4RBinding562 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding561, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding555 / 2}, ${chunk5FUZZQ4RBinding555 / 2})`,
      )
      .attr("class", "outer-path");
  return (
    cssStyles &&
      chunk5FUZZQ4RInput72.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding562.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput72.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding562.selectChildren("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RInput72.width = chunk5FUZZQ4RBinding554),
    (chunk5FUZZQ4RInput72.height = chunk5FUZZQ4RBinding555),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput72, chunk5FUZZQ4RBinding562),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-chunk5FUZZQ4RBinding555 / 2 + (chunk5FUZZQ4RInput72.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RInput72.intersect = function (chunk5FUZZQ4RInput343) {
      return (
        logger.info(
          "Triangle intersect",
          chunk5FUZZQ4RInput72,
          chunk5FUZZQ4RBinding557,
          chunk5FUZZQ4RInput343,
        ),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput72,
          chunk5FUZZQ4RBinding557,
          chunk5FUZZQ4RInput343,
        )
      );
    }),
    shapeSvg
  );
}
function _e(
  chunk5FUZZQ4RInput129,
  chunk5FUZZQ4RInput130,
  { dir, config: { state, themeVariables } },
) {
  let { nodeStyles } = a(chunk5FUZZQ4RInput130);
  chunk5FUZZQ4RInput130.label = "";
  let chunk5FUZZQ4RBinding780 = chunk5FUZZQ4RInput129
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput130))
      .attr("id", chunk5FUZZQ4RInput130.domId ?? chunk5FUZZQ4RInput130.id),
    { cssStyles } = chunk5FUZZQ4RInput130,
    chunk5FUZZQ4RBinding781 = Math.max(70, chunk5FUZZQ4RInput130?.width ?? 0),
    chunk5FUZZQ4RBinding782 = Math.max(10, chunk5FUZZQ4RInput130?.height ?? 0);
  dir === "LR" &&
    ((chunk5FUZZQ4RBinding781 = Math.max(
      10,
      chunk5FUZZQ4RInput130?.width ?? 0,
    )),
    (chunk5FUZZQ4RBinding782 = Math.max(
      70,
      chunk5FUZZQ4RInput130?.height ?? 0,
    )));
  let chunk5FUZZQ4RBinding783 = (-1 * chunk5FUZZQ4RBinding781) / 2,
    chunk5FUZZQ4RBinding784 = (-1 * chunk5FUZZQ4RBinding782) / 2,
    chunk5FUZZQ4RBinding785 = rough.svg(chunk5FUZZQ4RBinding780),
    chunk5FUZZQ4RBinding786 = o(chunk5FUZZQ4RInput130, {
      stroke: themeVariables.lineColor,
      fill: themeVariables.lineColor,
    });
  chunk5FUZZQ4RInput130.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding786.roughness = 0),
    (chunk5FUZZQ4RBinding786.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding787 = chunk5FUZZQ4RBinding785.rectangle(
      chunk5FUZZQ4RBinding783,
      chunk5FUZZQ4RBinding784,
      chunk5FUZZQ4RBinding781,
      chunk5FUZZQ4RBinding782,
      chunk5FUZZQ4RBinding786,
    ),
    chunk5FUZZQ4RBinding788 = chunk5FUZZQ4RBinding780.insert(
      () => chunk5FUZZQ4RBinding787,
      ":first-child",
    );
  cssStyles &&
    chunk5FUZZQ4RInput130.look !== "handDrawn" &&
    chunk5FUZZQ4RBinding788.selectAll("path").attr("style", cssStyles);
  nodeStyles &&
    chunk5FUZZQ4RInput130.look !== "handDrawn" &&
    chunk5FUZZQ4RBinding788.selectAll("path").attr("style", nodeStyles);
  chunk5FUZZQ4RD(chunk5FUZZQ4RInput130, chunk5FUZZQ4RBinding788);
  let chunk5FUZZQ4RBinding789 = state?.padding ?? 0;
  return (
    chunk5FUZZQ4RInput130.width &&
      chunk5FUZZQ4RInput130.height &&
      ((chunk5FUZZQ4RInput130.width += chunk5FUZZQ4RBinding789 / 2 || 0),
      (chunk5FUZZQ4RInput130.height += chunk5FUZZQ4RBinding789 / 2 || 0)),
    (chunk5FUZZQ4RInput130.intersect = function (chunk5FUZZQ4RInput404) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput130,
        chunk5FUZZQ4RInput404,
      );
    }),
    chunk5FUZZQ4RBinding780
  );
}
async function chunk5FUZZQ4RHelper33(
  chunk5FUZZQ4RInput75,
  chunk5FUZZQ4RInput76,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput76);
  chunk5FUZZQ4RInput76.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding571 =
      chunk5FUZZQ4RInput76.look === "neo"
        ? 16
        : (chunk5FUZZQ4RInput76.padding ?? 0),
    chunk5FUZZQ4RBinding572 =
      chunk5FUZZQ4RInput76.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput76.padding ?? 0);
  (chunk5FUZZQ4RInput76.width || chunk5FUZZQ4RInput76.height) &&
    ((chunk5FUZZQ4RInput76.height =
      (chunk5FUZZQ4RInput76?.height ?? 0) - chunk5FUZZQ4RBinding572 * 2),
    chunk5FUZZQ4RInput76.height < 10 && (chunk5FUZZQ4RInput76.height = 10),
    (chunk5FUZZQ4RInput76.width =
      (chunk5FUZZQ4RInput76?.width ?? 0) - chunk5FUZZQ4RBinding571 * 2),
    chunk5FUZZQ4RInput76.width < 15 && (chunk5FUZZQ4RInput76.width = 15));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput75,
      chunk5FUZZQ4RInput76,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput76),
    ),
    chunk5FUZZQ4RBinding573 =
      (chunk5FUZZQ4RInput76?.width
        ? chunk5FUZZQ4RInput76?.width
        : Math.max(15, bbox.width)) +
      chunk5FUZZQ4RBinding571 * 2,
    chunk5FUZZQ4RBinding574 =
      (chunk5FUZZQ4RInput76?.height
        ? chunk5FUZZQ4RInput76?.height
        : Math.max(10, bbox.height)) +
      chunk5FUZZQ4RBinding572 * 2,
    chunk5FUZZQ4RBinding575 = chunk5FUZZQ4RBinding574 / 2,
    { cssStyles } = chunk5FUZZQ4RInput76,
    chunk5FUZZQ4RBinding576 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding577 = o(chunk5FUZZQ4RInput76, {});
  chunk5FUZZQ4RInput76.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding577.roughness = 0),
    (chunk5FUZZQ4RBinding577.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding578 = [
      {
        x: -chunk5FUZZQ4RBinding573 / 2,
        y: -chunk5FUZZQ4RBinding574 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding573 / 2 - chunk5FUZZQ4RBinding575,
        y: -chunk5FUZZQ4RBinding574 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RBinding573 / 2 + chunk5FUZZQ4RBinding575,
        0,
        chunk5FUZZQ4RBinding575,
        50,
        90,
        270,
      ),
      {
        x: chunk5FUZZQ4RBinding573 / 2 - chunk5FUZZQ4RBinding575,
        y: chunk5FUZZQ4RBinding574 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding573 / 2,
        y: chunk5FUZZQ4RBinding574 / 2,
      },
    ],
    chunk5FUZZQ4RBinding579 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding578),
    chunk5FUZZQ4RBinding580 = chunk5FUZZQ4RBinding576.path(
      chunk5FUZZQ4RBinding579,
      chunk5FUZZQ4RBinding577,
    ),
    chunk5FUZZQ4RBinding581 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding580,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding581.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput76.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding581.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput76.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding581.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput76, chunk5FUZZQ4RBinding581),
    (chunk5FUZZQ4RInput76.intersect = function (chunk5FUZZQ4RInput310) {
      return (
        logger.info("Pill intersect", chunk5FUZZQ4RInput76, {
          radius: chunk5FUZZQ4RBinding575,
          point: chunk5FUZZQ4RInput310,
        }),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput76,
          chunk5FUZZQ4RBinding578,
          chunk5FUZZQ4RInput310,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper34(
  chunk5FUZZQ4RInput95,
  chunk5FUZZQ4RInput96,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput96),
    chunk5FUZZQ4RBinding686 = chunk5FUZZQ4RInput96.look === "neo" ? 3.5 : 4;
  chunk5FUZZQ4RInput96.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding687 = chunk5FUZZQ4RInput96.padding ?? 0,
    chunk5FUZZQ4RBinding688 =
      chunk5FUZZQ4RInput96.look === "neo" ? 70 : chunk5FUZZQ4RBinding687,
    chunk5FUZZQ4RBinding689 =
      chunk5FUZZQ4RInput96.look === "neo" ? 32 : chunk5FUZZQ4RBinding687;
  if (chunk5FUZZQ4RInput96.width || chunk5FUZZQ4RInput96.height) {
    let chunk5FUZZQ4RBinding1222 =
      (chunk5FUZZQ4RInput96.height ?? 0) / chunk5FUZZQ4RBinding686;
    chunk5FUZZQ4RInput96.width =
      (chunk5FUZZQ4RInput96?.width ?? 0) -
      2 * chunk5FUZZQ4RBinding1222 -
      chunk5FUZZQ4RBinding689;
    chunk5FUZZQ4RInput96.height =
      (chunk5FUZZQ4RInput96.height ?? 0) - chunk5FUZZQ4RBinding688;
  }
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput95,
      chunk5FUZZQ4RInput96,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput96),
    ),
    chunk5FUZZQ4RBinding690 =
      (chunk5FUZZQ4RInput96?.height
        ? chunk5FUZZQ4RInput96?.height
        : bbox.height) + chunk5FUZZQ4RBinding688,
    chunk5FUZZQ4RBinding691 = chunk5FUZZQ4RBinding690 / chunk5FUZZQ4RBinding686,
    chunk5FUZZQ4RBinding692 =
      (chunk5FUZZQ4RInput96?.width ? chunk5FUZZQ4RInput96?.width : bbox.width) +
      2 * chunk5FUZZQ4RBinding691 +
      chunk5FUZZQ4RBinding689,
    chunk5FUZZQ4RBinding693 = [
      {
        x: chunk5FUZZQ4RBinding691,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding692 - chunk5FUZZQ4RBinding691,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding692,
        y: -chunk5FUZZQ4RBinding690 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding692 - chunk5FUZZQ4RBinding691,
        y: -chunk5FUZZQ4RBinding690,
      },
      {
        x: chunk5FUZZQ4RBinding691,
        y: -chunk5FUZZQ4RBinding690,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding690 / 2,
      },
    ],
    chunk5FUZZQ4RBinding694,
    { cssStyles } = chunk5FUZZQ4RInput96;
  if (chunk5FUZZQ4RInput96.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1110 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1111 = o(chunk5FUZZQ4RInput96, {}),
      chunk5FUZZQ4RBinding1112 = chunk5FUZZQ4RBinding21(
        0,
        0,
        chunk5FUZZQ4RBinding692,
        chunk5FUZZQ4RBinding690,
        chunk5FUZZQ4RBinding691,
      ),
      chunk5FUZZQ4RBinding1113 = chunk5FUZZQ4RBinding1110.path(
        chunk5FUZZQ4RBinding1112,
        chunk5FUZZQ4RBinding1111,
      );
    chunk5FUZZQ4RBinding694 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1113, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding692 / 2}, ${chunk5FUZZQ4RBinding690 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding694.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding694 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding692,
      chunk5FUZZQ4RBinding690,
      chunk5FUZZQ4RBinding693,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding694.attr("style", nodeStyles),
    (chunk5FUZZQ4RInput96.width = chunk5FUZZQ4RBinding692),
    (chunk5FUZZQ4RInput96.height = chunk5FUZZQ4RBinding690),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput96, chunk5FUZZQ4RBinding694),
    (chunk5FUZZQ4RInput96.intersect = function (chunk5FUZZQ4RInput370) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput96,
        chunk5FUZZQ4RBinding693,
        chunk5FUZZQ4RInput370,
      );
    }),
    shapeSvg
  );
}
async function be(chunk5FUZZQ4RInput134, chunk5FUZZQ4RInput135) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput135);
  chunk5FUZZQ4RInput135.label = "";
  chunk5FUZZQ4RInput135.labelStyle = labelStyles;
  let { shapeSvg } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput134,
      chunk5FUZZQ4RInput135,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput135),
    ),
    chunk5FUZZQ4RBinding806 = Math.max(30, chunk5FUZZQ4RInput135?.width ?? 0),
    chunk5FUZZQ4RBinding807 = Math.max(30, chunk5FUZZQ4RInput135?.height ?? 0),
    { cssStyles } = chunk5FUZZQ4RInput135,
    chunk5FUZZQ4RBinding808 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding809 = o(chunk5FUZZQ4RInput135, {});
  chunk5FUZZQ4RInput135.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding809.roughness = 0),
    (chunk5FUZZQ4RBinding809.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding810 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding806,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RBinding807,
      },
      {
        x: chunk5FUZZQ4RBinding806,
        y: chunk5FUZZQ4RBinding807,
      },
    ],
    chunk5FUZZQ4RBinding811 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding810),
    chunk5FUZZQ4RBinding812 = chunk5FUZZQ4RBinding808.path(
      chunk5FUZZQ4RBinding811,
      chunk5FUZZQ4RBinding809,
    ),
    chunk5FUZZQ4RBinding813 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding812,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding813.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput135.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding813.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput135.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding813.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding813.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding806 / 2}, ${-chunk5FUZZQ4RBinding807 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput135, chunk5FUZZQ4RBinding813),
    (chunk5FUZZQ4RInput135.intersect = function (chunk5FUZZQ4RInput322) {
      return (
        logger.info("Pill intersect", chunk5FUZZQ4RInput135, {
          points: chunk5FUZZQ4RBinding810,
        }),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput135,
          chunk5FUZZQ4RBinding810,
          chunk5FUZZQ4RInput322,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper35(
  chunk5FUZZQ4RInput14,
  chunk5FUZZQ4RInput15,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunk5FUZZQ4RInput15);
  chunk5FUZZQ4RInput15.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding191 = chunk5FUZZQ4RInput15.assetHeight ?? 48,
    chunk5FUZZQ4RBinding192 = chunk5FUZZQ4RInput15.assetWidth ?? 48,
    chunk5FUZZQ4RBinding193 = Math.max(
      chunk5FUZZQ4RBinding191,
      chunk5FUZZQ4RBinding192,
    ),
    chunk5FUZZQ4RBinding194 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RInput15.width = Math.max(
    chunk5FUZZQ4RBinding193,
    chunk5FUZZQ4RBinding194 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput14,
      chunk5FUZZQ4RInput15,
      "icon-shape default",
    ),
    chunk5FUZZQ4RBinding195 = chunk5FUZZQ4RInput15.pos === "t",
    chunk5FUZZQ4RBinding196 = chunk5FUZZQ4RBinding193,
    chunk5FUZZQ4RBinding197 = chunk5FUZZQ4RBinding193,
    { nodeBorder: chunk5FUZZQ4RBinding198 } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RInput15),
    chunk5FUZZQ4RBinding199 = -chunk5FUZZQ4RBinding197 / 2,
    chunk5FUZZQ4RBinding200 = -chunk5FUZZQ4RBinding196 / 2,
    chunk5FUZZQ4RBinding201 = chunk5FUZZQ4RInput15.label ? 8 : 0,
    chunk5FUZZQ4RBinding202 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding203 = o(chunk5FUZZQ4RInput15, {
      stroke: "none",
      fill: "none",
    });
  chunk5FUZZQ4RInput15.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding203.roughness = 0),
    (chunk5FUZZQ4RBinding203.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding204 = chunk5FUZZQ4RBinding202.rectangle(
      chunk5FUZZQ4RBinding199,
      chunk5FUZZQ4RBinding200,
      chunk5FUZZQ4RBinding197,
      chunk5FUZZQ4RBinding196,
      chunk5FUZZQ4RBinding203,
    ),
    chunk5FUZZQ4RBinding205 = Math.max(chunk5FUZZQ4RBinding197, bbox.width),
    chunk5FUZZQ4RBinding206 =
      chunk5FUZZQ4RBinding196 + bbox.height + chunk5FUZZQ4RBinding201,
    chunk5FUZZQ4RBinding207 = chunk5FUZZQ4RBinding202.rectangle(
      -chunk5FUZZQ4RBinding205 / 2,
      -chunk5FUZZQ4RBinding206 / 2,
      chunk5FUZZQ4RBinding205,
      chunk5FUZZQ4RBinding206,
      {
        ...chunk5FUZZQ4RBinding203,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RBinding208 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding204,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding209 = shapeSvg.insert(() => chunk5FUZZQ4RBinding207);
  if (chunk5FUZZQ4RInput15.icon) {
    let chunk5FUZZQ4RBinding979 = shapeSvg.append("g");
    chunk5FUZZQ4RBinding979.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RInput15.icon, {
        height: chunk5FUZZQ4RBinding193,
        width: chunk5FUZZQ4RBinding193,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RBinding980 = chunk5FUZZQ4RBinding979.node().getBBox(),
      chunk5FUZZQ4RBinding981 = chunk5FUZZQ4RBinding980.width,
      chunk5FUZZQ4RBinding982 = chunk5FUZZQ4RBinding980.height,
      chunk5FUZZQ4RBinding983 = chunk5FUZZQ4RBinding980.x,
      chunk5FUZZQ4RBinding984 = chunk5FUZZQ4RBinding980.y;
    chunk5FUZZQ4RBinding979.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding981 / 2 - chunk5FUZZQ4RBinding983},${chunk5FUZZQ4RBinding195 ? bbox.height / 2 + chunk5FUZZQ4RBinding201 / 2 - chunk5FUZZQ4RBinding982 / 2 - chunk5FUZZQ4RBinding984 : -bbox.height / 2 - chunk5FUZZQ4RBinding201 / 2 - chunk5FUZZQ4RBinding982 / 2 - chunk5FUZZQ4RBinding984})`,
    );
    chunk5FUZZQ4RBinding979.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunk5FUZZQ4RBinding198};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RBinding195 ? -chunk5FUZZQ4RBinding206 / 2 : chunk5FUZZQ4RBinding206 / 2 - bbox.height})`,
    ),
    chunk5FUZZQ4RBinding208.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RBinding195 ? bbox.height / 2 + chunk5FUZZQ4RBinding201 / 2 : -bbox.height / 2 - chunk5FUZZQ4RBinding201 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput15, chunk5FUZZQ4RBinding209),
    (chunk5FUZZQ4RInput15.intersect = function (chunk5FUZZQ4RInput106) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunk5FUZZQ4RInput15,
          chunk5FUZZQ4RInput106,
        ),
        !chunk5FUZZQ4RInput15.label)
      )
        return chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput15,
          chunk5FUZZQ4RInput106,
        );
      let chunk5FUZZQ4RBinding722 = chunk5FUZZQ4RInput15.x ?? 0,
        chunk5FUZZQ4RBinding723 = chunk5FUZZQ4RInput15.y ?? 0,
        chunk5FUZZQ4RBinding724 = chunk5FUZZQ4RInput15.height ?? 0,
        chunk5FUZZQ4RBinding725 = [];
      return (
        (chunk5FUZZQ4RBinding725 = chunk5FUZZQ4RBinding195
          ? [
              {
                x: chunk5FUZZQ4RBinding722 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding723 - chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 + bbox.width / 2,
                y: chunk5FUZZQ4RBinding723 - chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding201,
              },
              {
                x: chunk5FUZZQ4RBinding722 + chunk5FUZZQ4RBinding197 / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding201,
              },
              {
                x: chunk5FUZZQ4RBinding722 + chunk5FUZZQ4RBinding197 / 2,
                y: chunk5FUZZQ4RBinding723 + chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 - chunk5FUZZQ4RBinding197 / 2,
                y: chunk5FUZZQ4RBinding723 + chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 - chunk5FUZZQ4RBinding197 / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding201,
              },
              {
                x: chunk5FUZZQ4RBinding722 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding201,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RBinding722 - chunk5FUZZQ4RBinding197 / 2,
                y: chunk5FUZZQ4RBinding723 - chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 + chunk5FUZZQ4RBinding197 / 2,
                y: chunk5FUZZQ4RBinding723 - chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 + chunk5FUZZQ4RBinding197 / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  chunk5FUZZQ4RBinding196,
              },
              {
                x: chunk5FUZZQ4RBinding722 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  chunk5FUZZQ4RBinding196,
              },
              {
                x: chunk5FUZZQ4RBinding722 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RBinding723 + chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding723 + chunk5FUZZQ4RBinding724 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding722 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  chunk5FUZZQ4RBinding196,
              },
              {
                x: chunk5FUZZQ4RBinding722 - chunk5FUZZQ4RBinding197 / 2,
                y:
                  chunk5FUZZQ4RBinding723 -
                  chunk5FUZZQ4RBinding724 / 2 +
                  chunk5FUZZQ4RBinding196,
              },
            ]),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput15,
          chunk5FUZZQ4RBinding725,
          chunk5FUZZQ4RInput106,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper36(
  chunk5FUZZQ4RInput49,
  chunk5FUZZQ4RInput50,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunk5FUZZQ4RInput50);
  chunk5FUZZQ4RInput50.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding406 = chunk5FUZZQ4RInput50.assetHeight ?? 48,
    chunk5FUZZQ4RBinding407 = chunk5FUZZQ4RInput50.assetWidth ?? 48,
    chunk5FUZZQ4RBinding408 = Math.max(
      chunk5FUZZQ4RBinding406,
      chunk5FUZZQ4RBinding407,
    ),
    chunk5FUZZQ4RBinding409 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RInput50.width = Math.max(
    chunk5FUZZQ4RBinding408,
    chunk5FUZZQ4RBinding409 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput49,
      chunk5FUZZQ4RInput50,
      "icon-shape default",
    ),
    chunk5FUZZQ4RBinding410 = chunk5FUZZQ4RInput50.label ? 8 : 0,
    chunk5FUZZQ4RBinding411 = chunk5FUZZQ4RInput50.pos === "t",
    { nodeBorder, mainBkg: chunk5FUZZQ4RBinding412 } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RInput50),
    chunk5FUZZQ4RBinding413 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding414 = o(chunk5FUZZQ4RInput50, {});
  chunk5FUZZQ4RInput50.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding414.roughness = 0),
    (chunk5FUZZQ4RBinding414.fillStyle = "solid"));
  chunk5FUZZQ4RBinding414.stroke =
    stylesMap.get("fill") ?? chunk5FUZZQ4RBinding412;
  let chunk5FUZZQ4RBinding415 = shapeSvg.append("g");
  chunk5FUZZQ4RInput50.icon &&
    chunk5FUZZQ4RBinding415.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RInput50.icon, {
        height: chunk5FUZZQ4RBinding408,
        width: chunk5FUZZQ4RBinding408,
        fallbackPrefix: "",
      })}</g>`,
    );
  let chunk5FUZZQ4RBinding416 = chunk5FUZZQ4RBinding415.node().getBBox(),
    chunk5FUZZQ4RBinding417 = chunk5FUZZQ4RBinding416.width,
    chunk5FUZZQ4RBinding418 = chunk5FUZZQ4RBinding416.height,
    chunk5FUZZQ4RBinding419 = chunk5FUZZQ4RBinding416.x,
    chunk5FUZZQ4RBinding420 = chunk5FUZZQ4RBinding416.y,
    chunk5FUZZQ4RBinding421 =
      Math.max(chunk5FUZZQ4RBinding417, chunk5FUZZQ4RBinding418) * Math.SQRT2 +
      40,
    chunk5FUZZQ4RBinding422 = chunk5FUZZQ4RBinding413.circle(
      0,
      0,
      chunk5FUZZQ4RBinding421,
      chunk5FUZZQ4RBinding414,
    ),
    chunk5FUZZQ4RBinding423 = Math.max(chunk5FUZZQ4RBinding421, bbox.width),
    chunk5FUZZQ4RBinding424 =
      chunk5FUZZQ4RBinding421 + bbox.height + chunk5FUZZQ4RBinding410,
    chunk5FUZZQ4RBinding425 = chunk5FUZZQ4RBinding413.rectangle(
      -chunk5FUZZQ4RBinding423 / 2,
      -chunk5FUZZQ4RBinding424 / 2,
      chunk5FUZZQ4RBinding423,
      chunk5FUZZQ4RBinding424,
      {
        ...chunk5FUZZQ4RBinding414,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RBinding426 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding422,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding427 = shapeSvg.insert(() => chunk5FUZZQ4RBinding425);
  return (
    chunk5FUZZQ4RBinding415.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding417 / 2 - chunk5FUZZQ4RBinding419},${chunk5FUZZQ4RBinding411 ? bbox.height / 2 + chunk5FUZZQ4RBinding410 / 2 - chunk5FUZZQ4RBinding418 / 2 - chunk5FUZZQ4RBinding420 : -bbox.height / 2 - chunk5FUZZQ4RBinding410 / 2 - chunk5FUZZQ4RBinding418 / 2 - chunk5FUZZQ4RBinding420})`,
    ),
    chunk5FUZZQ4RBinding415.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    ),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RBinding411 ? -chunk5FUZZQ4RBinding424 / 2 : chunk5FUZZQ4RBinding424 / 2 - bbox.height})`,
    ),
    chunk5FUZZQ4RBinding426.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RBinding411 ? bbox.height / 2 + chunk5FUZZQ4RBinding410 / 2 : -bbox.height / 2 - chunk5FUZZQ4RBinding410 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput50, chunk5FUZZQ4RBinding427),
    (chunk5FUZZQ4RInput50.intersect = function (chunk5FUZZQ4RInput347) {
      return (
        logger.info(
          "iconSquare intersect",
          chunk5FUZZQ4RInput50,
          chunk5FUZZQ4RInput347,
        ),
        chunk5FUZZQ4RBinding12.rect(chunk5FUZZQ4RInput50, chunk5FUZZQ4RInput347)
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper37(
  chunk5FUZZQ4RInput10,
  chunk5FUZZQ4RInput11,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunk5FUZZQ4RInput11);
  chunk5FUZZQ4RInput11.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding155 = chunk5FUZZQ4RInput11.assetHeight ?? 48,
    chunk5FUZZQ4RBinding156 = chunk5FUZZQ4RInput11.assetWidth ?? 48,
    chunk5FUZZQ4RBinding157 = Math.max(
      chunk5FUZZQ4RBinding155,
      chunk5FUZZQ4RBinding156,
    ),
    chunk5FUZZQ4RBinding158 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RInput11.width = Math.max(
    chunk5FUZZQ4RBinding157,
    chunk5FUZZQ4RBinding158 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput10,
      chunk5FUZZQ4RInput11,
      "icon-shape default",
    ),
    chunk5FUZZQ4RBinding159 = chunk5FUZZQ4RInput11.pos === "t",
    chunk5FUZZQ4RBinding160 = chunk5FUZZQ4RBinding157 + halfPadding * 2,
    chunk5FUZZQ4RBinding161 = chunk5FUZZQ4RBinding157 + halfPadding * 2,
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RInput11),
    chunk5FUZZQ4RBinding162 = -chunk5FUZZQ4RBinding161 / 2,
    chunk5FUZZQ4RBinding163 = -chunk5FUZZQ4RBinding160 / 2,
    chunk5FUZZQ4RBinding164 = chunk5FUZZQ4RInput11.label ? 8 : 0,
    chunk5FUZZQ4RBinding165 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding166 = o(chunk5FUZZQ4RInput11, {});
  chunk5FUZZQ4RInput11.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding166.roughness = 0),
    (chunk5FUZZQ4RBinding166.fillStyle = "solid"));
  chunk5FUZZQ4RBinding166.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunk5FUZZQ4RBinding167 = chunk5FUZZQ4RBinding165.path(
      chunk5FUZZQ4RBinding4(
        chunk5FUZZQ4RBinding162,
        chunk5FUZZQ4RBinding163,
        chunk5FUZZQ4RBinding161,
        chunk5FUZZQ4RBinding160,
        5,
      ),
      chunk5FUZZQ4RBinding166,
    ),
    chunk5FUZZQ4RBinding168 = Math.max(chunk5FUZZQ4RBinding161, bbox.width),
    chunk5FUZZQ4RBinding169 =
      chunk5FUZZQ4RBinding160 + bbox.height + chunk5FUZZQ4RBinding164,
    chunk5FUZZQ4RBinding170 = chunk5FUZZQ4RBinding165.rectangle(
      -chunk5FUZZQ4RBinding168 / 2,
      -chunk5FUZZQ4RBinding169 / 2,
      chunk5FUZZQ4RBinding168,
      chunk5FUZZQ4RBinding169,
      {
        ...chunk5FUZZQ4RBinding166,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RBinding171 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding167, ":first-child")
      .attr("class", "icon-shape2"),
    chunk5FUZZQ4RBinding172 = shapeSvg.insert(() => chunk5FUZZQ4RBinding170);
  if (chunk5FUZZQ4RInput11.icon) {
    let chunk5FUZZQ4RBinding985 = shapeSvg.append("g");
    chunk5FUZZQ4RBinding985.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RInput11.icon, {
        height: chunk5FUZZQ4RBinding157,
        width: chunk5FUZZQ4RBinding157,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RBinding986 = chunk5FUZZQ4RBinding985.node().getBBox(),
      chunk5FUZZQ4RBinding987 = chunk5FUZZQ4RBinding986.width,
      chunk5FUZZQ4RBinding988 = chunk5FUZZQ4RBinding986.height,
      chunk5FUZZQ4RBinding989 = chunk5FUZZQ4RBinding986.x,
      chunk5FUZZQ4RBinding990 = chunk5FUZZQ4RBinding986.y;
    chunk5FUZZQ4RBinding985.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding987 / 2 - chunk5FUZZQ4RBinding989},${chunk5FUZZQ4RBinding159 ? bbox.height / 2 + chunk5FUZZQ4RBinding164 / 2 - chunk5FUZZQ4RBinding988 / 2 - chunk5FUZZQ4RBinding990 : -bbox.height / 2 - chunk5FUZZQ4RBinding164 / 2 - chunk5FUZZQ4RBinding988 / 2 - chunk5FUZZQ4RBinding990})`,
    );
    chunk5FUZZQ4RBinding985.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RBinding159 ? -chunk5FUZZQ4RBinding169 / 2 : chunk5FUZZQ4RBinding169 / 2 - bbox.height})`,
    ),
    chunk5FUZZQ4RBinding171.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RBinding159 ? bbox.height / 2 + chunk5FUZZQ4RBinding164 / 2 : -bbox.height / 2 - chunk5FUZZQ4RBinding164 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput11, chunk5FUZZQ4RBinding172),
    (chunk5FUZZQ4RInput11.intersect = function (chunk5FUZZQ4RInput107) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunk5FUZZQ4RInput11,
          chunk5FUZZQ4RInput107,
        ),
        !chunk5FUZZQ4RInput11.label)
      )
        return chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput11,
          chunk5FUZZQ4RInput107,
        );
      let chunk5FUZZQ4RBinding726 = chunk5FUZZQ4RInput11.x ?? 0,
        chunk5FUZZQ4RBinding727 = chunk5FUZZQ4RInput11.y ?? 0,
        chunk5FUZZQ4RBinding728 = chunk5FUZZQ4RInput11.height ?? 0,
        chunk5FUZZQ4RBinding729 = [];
      return (
        (chunk5FUZZQ4RBinding729 = chunk5FUZZQ4RBinding159
          ? [
              {
                x: chunk5FUZZQ4RBinding726 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding727 - chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 + bbox.width / 2,
                y: chunk5FUZZQ4RBinding727 - chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding164,
              },
              {
                x: chunk5FUZZQ4RBinding726 + chunk5FUZZQ4RBinding161 / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding164,
              },
              {
                x: chunk5FUZZQ4RBinding726 + chunk5FUZZQ4RBinding161 / 2,
                y: chunk5FUZZQ4RBinding727 + chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 - chunk5FUZZQ4RBinding161 / 2,
                y: chunk5FUZZQ4RBinding727 + chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 - chunk5FUZZQ4RBinding161 / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding164,
              },
              {
                x: chunk5FUZZQ4RBinding726 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding164,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RBinding726 - chunk5FUZZQ4RBinding161 / 2,
                y: chunk5FUZZQ4RBinding727 - chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 + chunk5FUZZQ4RBinding161 / 2,
                y: chunk5FUZZQ4RBinding727 - chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 + chunk5FUZZQ4RBinding161 / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  chunk5FUZZQ4RBinding160,
              },
              {
                x: chunk5FUZZQ4RBinding726 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  chunk5FUZZQ4RBinding160,
              },
              {
                x: chunk5FUZZQ4RBinding726 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RBinding727 + chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding727 + chunk5FUZZQ4RBinding728 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding726 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  chunk5FUZZQ4RBinding160,
              },
              {
                x: chunk5FUZZQ4RBinding726 - chunk5FUZZQ4RBinding161 / 2,
                y:
                  chunk5FUZZQ4RBinding727 -
                  chunk5FUZZQ4RBinding728 / 2 +
                  chunk5FUZZQ4RBinding160,
              },
            ]),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput11,
          chunk5FUZZQ4RBinding729,
          chunk5FUZZQ4RInput107,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper38(
  chunk5FUZZQ4RInput12,
  chunk5FUZZQ4RInput13,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunk5FUZZQ4RInput13);
  chunk5FUZZQ4RInput13.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding173 = chunk5FUZZQ4RInput13.assetHeight ?? 48,
    chunk5FUZZQ4RBinding174 = chunk5FUZZQ4RInput13.assetWidth ?? 48,
    chunk5FUZZQ4RBinding175 = Math.max(
      chunk5FUZZQ4RBinding173,
      chunk5FUZZQ4RBinding174,
    ),
    chunk5FUZZQ4RBinding176 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RInput13.width = Math.max(
    chunk5FUZZQ4RBinding175,
    chunk5FUZZQ4RBinding176 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput12,
      chunk5FUZZQ4RInput13,
      "icon-shape default",
    ),
    chunk5FUZZQ4RBinding177 = chunk5FUZZQ4RInput13.pos === "t",
    chunk5FUZZQ4RBinding178 = chunk5FUZZQ4RBinding175 + halfPadding * 2,
    chunk5FUZZQ4RBinding179 = chunk5FUZZQ4RBinding175 + halfPadding * 2,
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap } = chunkX2U36JSPT(chunk5FUZZQ4RInput13),
    chunk5FUZZQ4RBinding180 = -chunk5FUZZQ4RBinding179 / 2,
    chunk5FUZZQ4RBinding181 = -chunk5FUZZQ4RBinding178 / 2,
    chunk5FUZZQ4RBinding182 = chunk5FUZZQ4RInput13.label ? 8 : 0,
    chunk5FUZZQ4RBinding183 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding184 = o(chunk5FUZZQ4RInput13, {});
  chunk5FUZZQ4RInput13.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding184.roughness = 0),
    (chunk5FUZZQ4RBinding184.fillStyle = "solid"));
  chunk5FUZZQ4RBinding184.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunk5FUZZQ4RBinding185 = chunk5FUZZQ4RBinding183.path(
      chunk5FUZZQ4RBinding4(
        chunk5FUZZQ4RBinding180,
        chunk5FUZZQ4RBinding181,
        chunk5FUZZQ4RBinding179,
        chunk5FUZZQ4RBinding178,
        0.1,
      ),
      chunk5FUZZQ4RBinding184,
    ),
    chunk5FUZZQ4RBinding186 = Math.max(chunk5FUZZQ4RBinding179, bbox.width),
    chunk5FUZZQ4RBinding187 =
      chunk5FUZZQ4RBinding178 + bbox.height + chunk5FUZZQ4RBinding182,
    chunk5FUZZQ4RBinding188 = chunk5FUZZQ4RBinding183.rectangle(
      -chunk5FUZZQ4RBinding186 / 2,
      -chunk5FUZZQ4RBinding187 / 2,
      chunk5FUZZQ4RBinding186,
      chunk5FUZZQ4RBinding187,
      {
        ...chunk5FUZZQ4RBinding184,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RBinding189 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding185,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding190 = shapeSvg.insert(() => chunk5FUZZQ4RBinding188);
  if (chunk5FUZZQ4RInput13.icon) {
    let chunk5FUZZQ4RBinding991 = shapeSvg.append("g");
    chunk5FUZZQ4RBinding991.html(
      `<g>${await chunkU2HBQHQKR(chunk5FUZZQ4RInput13.icon, {
        height: chunk5FUZZQ4RBinding175,
        width: chunk5FUZZQ4RBinding175,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunk5FUZZQ4RBinding992 = chunk5FUZZQ4RBinding991.node().getBBox(),
      chunk5FUZZQ4RBinding993 = chunk5FUZZQ4RBinding992.width,
      chunk5FUZZQ4RBinding994 = chunk5FUZZQ4RBinding992.height,
      chunk5FUZZQ4RBinding995 = chunk5FUZZQ4RBinding992.x,
      chunk5FUZZQ4RBinding996 = chunk5FUZZQ4RBinding992.y;
    chunk5FUZZQ4RBinding991.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding993 / 2 - chunk5FUZZQ4RBinding995},${chunk5FUZZQ4RBinding177 ? bbox.height / 2 + chunk5FUZZQ4RBinding182 / 2 - chunk5FUZZQ4RBinding994 / 2 - chunk5FUZZQ4RBinding996 : -bbox.height / 2 - chunk5FUZZQ4RBinding182 / 2 - chunk5FUZZQ4RBinding994 / 2 - chunk5FUZZQ4RBinding996})`,
    );
    chunk5FUZZQ4RBinding991.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RBinding177 ? -chunk5FUZZQ4RBinding187 / 2 : chunk5FUZZQ4RBinding187 / 2 - bbox.height})`,
    ),
    chunk5FUZZQ4RBinding189.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RBinding177 ? bbox.height / 2 + chunk5FUZZQ4RBinding182 / 2 : -bbox.height / 2 - chunk5FUZZQ4RBinding182 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput13, chunk5FUZZQ4RBinding190),
    (chunk5FUZZQ4RInput13.intersect = function (chunk5FUZZQ4RInput108) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunk5FUZZQ4RInput13,
          chunk5FUZZQ4RInput108,
        ),
        !chunk5FUZZQ4RInput13.label)
      )
        return chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput13,
          chunk5FUZZQ4RInput108,
        );
      let chunk5FUZZQ4RBinding730 = chunk5FUZZQ4RInput13.x ?? 0,
        chunk5FUZZQ4RBinding731 = chunk5FUZZQ4RInput13.y ?? 0,
        chunk5FUZZQ4RBinding732 = chunk5FUZZQ4RInput13.height ?? 0,
        chunk5FUZZQ4RBinding733 = [];
      return (
        (chunk5FUZZQ4RBinding733 = chunk5FUZZQ4RBinding177
          ? [
              {
                x: chunk5FUZZQ4RBinding730 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding731 - chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 + bbox.width / 2,
                y: chunk5FUZZQ4RBinding731 - chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding182,
              },
              {
                x: chunk5FUZZQ4RBinding730 + chunk5FUZZQ4RBinding179 / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding182,
              },
              {
                x: chunk5FUZZQ4RBinding730 + chunk5FUZZQ4RBinding179 / 2,
                y: chunk5FUZZQ4RBinding731 + chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 - chunk5FUZZQ4RBinding179 / 2,
                y: chunk5FUZZQ4RBinding731 + chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 - chunk5FUZZQ4RBinding179 / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding182,
              },
              {
                x: chunk5FUZZQ4RBinding730 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding182,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RBinding730 - chunk5FUZZQ4RBinding179 / 2,
                y: chunk5FUZZQ4RBinding731 - chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 + chunk5FUZZQ4RBinding179 / 2,
                y: chunk5FUZZQ4RBinding731 - chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 + chunk5FUZZQ4RBinding179 / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  chunk5FUZZQ4RBinding178,
              },
              {
                x: chunk5FUZZQ4RBinding730 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  chunk5FUZZQ4RBinding178,
              },
              {
                x: chunk5FUZZQ4RBinding730 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RBinding731 + chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding731 + chunk5FUZZQ4RBinding732 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding730 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  chunk5FUZZQ4RBinding178,
              },
              {
                x: chunk5FUZZQ4RBinding730 - chunk5FUZZQ4RBinding179 / 2,
                y:
                  chunk5FUZZQ4RBinding731 -
                  chunk5FUZZQ4RBinding732 / 2 +
                  chunk5FUZZQ4RBinding178,
              },
            ]),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput13,
          chunk5FUZZQ4RBinding733,
          chunk5FUZZQ4RInput108,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper39(
  chunk5FUZZQ4RInput8,
  chunk5FUZZQ4RInput9,
  { config: { flowchart } },
) {
  let chunk5FUZZQ4RBinding136 = new Image();
  chunk5FUZZQ4RBinding136.src = chunk5FUZZQ4RInput9?.img ?? "";
  await chunk5FUZZQ4RBinding136.decode();
  let chunk5FUZZQ4RBinding137 = Number(
      chunk5FUZZQ4RBinding136.naturalWidth.toString().replace("px", ""),
    ),
    chunk5FUZZQ4RBinding138 = Number(
      chunk5FUZZQ4RBinding136.naturalHeight.toString().replace("px", ""),
    );
  chunk5FUZZQ4RInput9.imageAspectRatio =
    chunk5FUZZQ4RBinding137 / chunk5FUZZQ4RBinding138;
  let { labelStyles } = a(chunk5FUZZQ4RInput9);
  chunk5FUZZQ4RInput9.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding139 = flowchart?.wrappingWidth;
  chunk5FUZZQ4RInput9.defaultWidth = flowchart?.wrappingWidth;
  let chunk5FUZZQ4RBinding140 = Math.max(
      chunk5FUZZQ4RInput9.label ? (chunk5FUZZQ4RBinding139 ?? 0) : 0,
      chunk5FUZZQ4RInput9?.assetWidth ?? chunk5FUZZQ4RBinding137,
    ),
    chunk5FUZZQ4RBinding141 =
      chunk5FUZZQ4RInput9.constraint === "on" &&
      chunk5FUZZQ4RInput9?.assetHeight
        ? chunk5FUZZQ4RInput9.assetHeight * chunk5FUZZQ4RInput9.imageAspectRatio
        : chunk5FUZZQ4RBinding140,
    chunk5FUZZQ4RBinding142 =
      chunk5FUZZQ4RInput9.constraint === "on"
        ? chunk5FUZZQ4RBinding141 / chunk5FUZZQ4RInput9.imageAspectRatio
        : (chunk5FUZZQ4RInput9?.assetHeight ?? chunk5FUZZQ4RBinding138);
  chunk5FUZZQ4RInput9.width = Math.max(
    chunk5FUZZQ4RBinding141,
    chunk5FUZZQ4RBinding139 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput8,
      chunk5FUZZQ4RInput9,
      "image-shape default",
    ),
    chunk5FUZZQ4RBinding143 = chunk5FUZZQ4RInput9.pos === "t",
    chunk5FUZZQ4RBinding144 = -chunk5FUZZQ4RBinding141 / 2,
    chunk5FUZZQ4RBinding145 = -chunk5FUZZQ4RBinding142 / 2,
    chunk5FUZZQ4RBinding146 = chunk5FUZZQ4RInput9.label ? 8 : 0,
    chunk5FUZZQ4RBinding147 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding148 = o(chunk5FUZZQ4RInput9, {});
  chunk5FUZZQ4RInput9.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding148.roughness = 0),
    (chunk5FUZZQ4RBinding148.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding149 = chunk5FUZZQ4RBinding147.rectangle(
      chunk5FUZZQ4RBinding144,
      chunk5FUZZQ4RBinding145,
      chunk5FUZZQ4RBinding141,
      chunk5FUZZQ4RBinding142,
      chunk5FUZZQ4RBinding148,
    ),
    chunk5FUZZQ4RBinding150 = Math.max(chunk5FUZZQ4RBinding141, bbox.width),
    chunk5FUZZQ4RBinding151 =
      chunk5FUZZQ4RBinding142 + bbox.height + chunk5FUZZQ4RBinding146,
    chunk5FUZZQ4RBinding152 = chunk5FUZZQ4RBinding147.rectangle(
      -chunk5FUZZQ4RBinding150 / 2,
      -chunk5FUZZQ4RBinding151 / 2,
      chunk5FUZZQ4RBinding150,
      chunk5FUZZQ4RBinding151,
      {
        ...chunk5FUZZQ4RBinding148,
        fill: "none",
        stroke: "none",
      },
    ),
    chunk5FUZZQ4RBinding153 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding149,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding154 = shapeSvg.insert(() => chunk5FUZZQ4RBinding152);
  if (chunk5FUZZQ4RInput9.img) {
    let chunk5FUZZQ4RBinding1118 = shapeSvg.append("image");
    chunk5FUZZQ4RBinding1118.attr("href", chunk5FUZZQ4RInput9.img);
    chunk5FUZZQ4RBinding1118.attr("width", chunk5FUZZQ4RBinding141);
    chunk5FUZZQ4RBinding1118.attr("height", chunk5FUZZQ4RBinding142);
    chunk5FUZZQ4RBinding1118.attr("preserveAspectRatio", "none");
    chunk5FUZZQ4RBinding1118.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding141 / 2},${chunk5FUZZQ4RBinding143 ? chunk5FUZZQ4RBinding151 / 2 - chunk5FUZZQ4RBinding142 : -chunk5FUZZQ4RBinding151 / 2})`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunk5FUZZQ4RBinding143 ? -chunk5FUZZQ4RBinding142 / 2 - bbox.height / 2 - chunk5FUZZQ4RBinding146 / 2 : chunk5FUZZQ4RBinding142 / 2 - bbox.height / 2 + chunk5FUZZQ4RBinding146 / 2})`,
    ),
    chunk5FUZZQ4RBinding153.attr(
      "transform",
      `translate(0,${chunk5FUZZQ4RBinding143 ? bbox.height / 2 + chunk5FUZZQ4RBinding146 / 2 : -bbox.height / 2 - chunk5FUZZQ4RBinding146 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput9, chunk5FUZZQ4RBinding154),
    (chunk5FUZZQ4RInput9.intersect = function (chunk5FUZZQ4RInput109) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunk5FUZZQ4RInput9,
          chunk5FUZZQ4RInput109,
        ),
        !chunk5FUZZQ4RInput9.label)
      )
        return chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput9,
          chunk5FUZZQ4RInput109,
        );
      let chunk5FUZZQ4RBinding734 = chunk5FUZZQ4RInput9.x ?? 0,
        chunk5FUZZQ4RBinding735 = chunk5FUZZQ4RInput9.y ?? 0,
        chunk5FUZZQ4RBinding736 = chunk5FUZZQ4RInput9.height ?? 0,
        chunk5FUZZQ4RBinding737 = [];
      return (
        (chunk5FUZZQ4RBinding737 = chunk5FUZZQ4RBinding143
          ? [
              {
                x: chunk5FUZZQ4RBinding734 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding735 - chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 + bbox.width / 2,
                y: chunk5FUZZQ4RBinding735 - chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding146,
              },
              {
                x: chunk5FUZZQ4RBinding734 + chunk5FUZZQ4RBinding141 / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding146,
              },
              {
                x: chunk5FUZZQ4RBinding734 + chunk5FUZZQ4RBinding141 / 2,
                y: chunk5FUZZQ4RBinding735 + chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 - chunk5FUZZQ4RBinding141 / 2,
                y: chunk5FUZZQ4RBinding735 + chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 - chunk5FUZZQ4RBinding141 / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding146,
              },
              {
                x: chunk5FUZZQ4RBinding734 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  bbox.height +
                  chunk5FUZZQ4RBinding146,
              },
            ]
          : [
              {
                x: chunk5FUZZQ4RBinding734 - chunk5FUZZQ4RBinding141 / 2,
                y: chunk5FUZZQ4RBinding735 - chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 + chunk5FUZZQ4RBinding141 / 2,
                y: chunk5FUZZQ4RBinding735 - chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 + chunk5FUZZQ4RBinding141 / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  chunk5FUZZQ4RBinding142,
              },
              {
                x: chunk5FUZZQ4RBinding734 + bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  chunk5FUZZQ4RBinding142,
              },
              {
                x: chunk5FUZZQ4RBinding734 + bbox.width / 2 / 2,
                y: chunk5FUZZQ4RBinding735 + chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 - bbox.width / 2,
                y: chunk5FUZZQ4RBinding735 + chunk5FUZZQ4RBinding736 / 2,
              },
              {
                x: chunk5FUZZQ4RBinding734 - bbox.width / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  chunk5FUZZQ4RBinding142,
              },
              {
                x: chunk5FUZZQ4RBinding734 - chunk5FUZZQ4RBinding141 / 2,
                y:
                  chunk5FUZZQ4RBinding735 -
                  chunk5FUZZQ4RBinding736 / 2 +
                  chunk5FUZZQ4RBinding142,
              },
            ]),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput9,
          chunk5FUZZQ4RBinding737,
          chunk5FUZZQ4RInput109,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper40(
  chunk5FUZZQ4RInput136,
  chunk5FUZZQ4RInput137,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput137);
  chunk5FUZZQ4RInput137.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding814 = chunk5FUZZQ4RInput137.padding ?? 0,
    chunk5FUZZQ4RBinding815 = chunk5FUZZQ4RBinding814,
    chunk5FUZZQ4RBinding816 =
      chunk5FUZZQ4RInput137.look === "neo"
        ? chunk5FUZZQ4RBinding814 * 2
        : chunk5FUZZQ4RBinding814,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput136,
      chunk5FUZZQ4RInput137,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput137),
    ),
    chunk5FUZZQ4RBinding817 = Math.max(
      bbox.width + (chunk5FUZZQ4RBinding816 ?? 0) * 2,
      chunk5FUZZQ4RInput137?.width ?? 0,
    ),
    chunk5FUZZQ4RBinding818 = Math.max(
      bbox.height + (chunk5FUZZQ4RBinding815 ?? 0) * 2,
      chunk5FUZZQ4RInput137?.height ?? 0,
    ),
    chunk5FUZZQ4RBinding819 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding817,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding817 + (3 * chunk5FUZZQ4RBinding818) / 6,
        y: -chunk5FUZZQ4RBinding818,
      },
      {
        x: (-3 * chunk5FUZZQ4RBinding818) / 6,
        y: -chunk5FUZZQ4RBinding818,
      },
    ],
    chunk5FUZZQ4RBinding820,
    { cssStyles } = chunk5FUZZQ4RInput137;
  if (chunk5FUZZQ4RInput137.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1124 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1125 = o(chunk5FUZZQ4RInput137, {}),
      chunk5FUZZQ4RBinding1126 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding819),
      chunk5FUZZQ4RBinding1127 = chunk5FUZZQ4RBinding1124.path(
        chunk5FUZZQ4RBinding1126,
        chunk5FUZZQ4RBinding1125,
      );
    chunk5FUZZQ4RBinding820 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1127, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding817 / 2}, ${chunk5FUZZQ4RBinding818 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding820.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding820 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding817,
      chunk5FUZZQ4RBinding818,
      chunk5FUZZQ4RBinding819,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding820.attr("style", nodeStyles),
    (chunk5FUZZQ4RInput137.width = chunk5FUZZQ4RBinding817),
    (chunk5FUZZQ4RInput137.height = chunk5FUZZQ4RBinding818),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput137, chunk5FUZZQ4RBinding820),
    (chunk5FUZZQ4RInput137.intersect = function (chunk5FUZZQ4RInput371) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput137,
        chunk5FUZZQ4RBinding819,
        chunk5FUZZQ4RInput371,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper41(
  chunk5FUZZQ4RInput112,
  chunk5FUZZQ4RInput113,
  chunk5FUZZQ4RInput114,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput113);
  chunk5FUZZQ4RInput113.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput112,
      chunk5FUZZQ4RInput113,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput113),
    ),
    chunk5FUZZQ4RBinding746 = Math.max(
      bbox.width + chunk5FUZZQ4RInput114.labelPaddingX * 2,
      chunk5FUZZQ4RInput113?.width || 0,
    ),
    chunk5FUZZQ4RBinding747 = Math.max(
      bbox.height + chunk5FUZZQ4RInput114.labelPaddingY * 2,
      chunk5FUZZQ4RInput113?.height || 0,
    ),
    chunk5FUZZQ4RBinding748 = -chunk5FUZZQ4RBinding746 / 2,
    chunk5FUZZQ4RBinding749 = -chunk5FUZZQ4RBinding747 / 2,
    chunk5FUZZQ4RBinding750,
    { rx, ry } = chunk5FUZZQ4RInput113,
    { cssStyles } = chunk5FUZZQ4RInput113;
  if (
    (chunk5FUZZQ4RInput114?.rx &&
      chunk5FUZZQ4RInput114.ry &&
      ((rx = chunk5FUZZQ4RInput114.rx), (ry = chunk5FUZZQ4RInput114.ry)),
    chunk5FUZZQ4RInput113.look === "handDrawn")
  ) {
    let chunk5FUZZQ4RBinding1104 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1105 = o(chunk5FUZZQ4RInput113, {}),
      chunk5FUZZQ4RBinding1106 =
        rx || ry
          ? chunk5FUZZQ4RBinding1104.path(
              chunk5FUZZQ4RBinding4(
                chunk5FUZZQ4RBinding748,
                chunk5FUZZQ4RBinding749,
                chunk5FUZZQ4RBinding746,
                chunk5FUZZQ4RBinding747,
                rx || 0,
              ),
              chunk5FUZZQ4RBinding1105,
            )
          : chunk5FUZZQ4RBinding1104.rectangle(
              chunk5FUZZQ4RBinding748,
              chunk5FUZZQ4RBinding749,
              chunk5FUZZQ4RBinding746,
              chunk5FUZZQ4RBinding747,
              chunk5FUZZQ4RBinding1105,
            );
    chunk5FUZZQ4RBinding750 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1106,
      ":first-child",
    );
    chunk5FUZZQ4RBinding750
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles));
  } else {
    chunk5FUZZQ4RBinding750 = shapeSvg.insert("rect", ":first-child");
    chunk5FUZZQ4RBinding750
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("rx", chunk5PVQY5BWL(rx))
      .attr("ry", chunk5PVQY5BWL(ry))
      .attr("x", chunk5FUZZQ4RBinding748)
      .attr("y", chunk5FUZZQ4RBinding749)
      .attr("width", chunk5FUZZQ4RBinding746)
      .attr("height", chunk5FUZZQ4RBinding747);
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput113, chunk5FUZZQ4RBinding750),
    (chunk5FUZZQ4RInput113.calcIntersect = function (
      chunk5FUZZQ4RInput392,
      chunk5FUZZQ4RInput393,
    ) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput392,
        chunk5FUZZQ4RInput393,
      );
    }),
    (chunk5FUZZQ4RInput113.intersect = function (chunk5FUZZQ4RInput405) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput113,
        chunk5FUZZQ4RInput405,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper42(
  chunk5FUZZQ4RInput193,
  chunk5FUZZQ4RInput194,
) {
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput193,
      chunk5FUZZQ4RInput194,
      "label",
    ),
    chunk5FUZZQ4RBinding967 = shapeSvg.insert("rect", ":first-child");
  return (
    chunk5FUZZQ4RBinding967.attr("width", 0.1).attr("height", 0.1),
    shapeSvg.attr("class", "label edgeLabel"),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput194, chunk5FUZZQ4RBinding967),
    (chunk5FUZZQ4RInput194.intersect = function (chunk5FUZZQ4RInput406) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput194,
        chunk5FUZZQ4RInput406,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper43(
  chunk5FUZZQ4RInput143,
  chunk5FUZZQ4RInput144,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput144);
  chunk5FUZZQ4RInput144.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding832 = chunk5FUZZQ4RInput144.padding ?? 0,
    chunk5FUZZQ4RBinding833 = chunk5FUZZQ4RBinding832,
    chunk5FUZZQ4RBinding834 =
      chunk5FUZZQ4RInput144.look === "neo"
        ? chunk5FUZZQ4RBinding832 * 2
        : chunk5FUZZQ4RBinding832,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput143,
      chunk5FUZZQ4RInput144,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput144),
    ),
    chunk5FUZZQ4RBinding835 =
      (chunk5FUZZQ4RInput144?.height ?? bbox.height) + chunk5FUZZQ4RBinding833,
    chunk5FUZZQ4RBinding836 =
      (chunk5FUZZQ4RInput144?.width ?? bbox.width) + chunk5FUZZQ4RBinding834,
    chunk5FUZZQ4RBinding837 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding836 + (3 * chunk5FUZZQ4RBinding835) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding836,
        y: -chunk5FUZZQ4RBinding835,
      },
      {
        x: -(3 * chunk5FUZZQ4RBinding835) / 6,
        y: -chunk5FUZZQ4RBinding835,
      },
    ],
    chunk5FUZZQ4RBinding838,
    { cssStyles } = chunk5FUZZQ4RInput144;
  if (chunk5FUZZQ4RInput144.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1128 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1129 = o(chunk5FUZZQ4RInput144, {}),
      chunk5FUZZQ4RBinding1130 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding837),
      chunk5FUZZQ4RBinding1131 = chunk5FUZZQ4RBinding1128.path(
        chunk5FUZZQ4RBinding1130,
        chunk5FUZZQ4RBinding1129,
      );
    chunk5FUZZQ4RBinding838 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1131, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding836 / 2}, ${chunk5FUZZQ4RBinding835 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding838.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding838 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding836,
      chunk5FUZZQ4RBinding835,
      chunk5FUZZQ4RBinding837,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding838.attr("style", nodeStyles),
    (chunk5FUZZQ4RInput144.width = chunk5FUZZQ4RBinding836),
    (chunk5FUZZQ4RInput144.height = chunk5FUZZQ4RBinding835),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput144, chunk5FUZZQ4RBinding838),
    (chunk5FUZZQ4RInput144.intersect = function (chunk5FUZZQ4RInput372) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput144,
        chunk5FUZZQ4RBinding837,
        chunk5FUZZQ4RInput372,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper44(
  chunk5FUZZQ4RInput145,
  chunk5FUZZQ4RInput146,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput146);
  chunk5FUZZQ4RInput146.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding839 = chunk5FUZZQ4RInput146.padding ?? 0,
    chunk5FUZZQ4RBinding840 = chunk5FUZZQ4RBinding839,
    chunk5FUZZQ4RBinding841 =
      chunk5FUZZQ4RInput146.look === "neo"
        ? chunk5FUZZQ4RBinding839 * 2
        : chunk5FUZZQ4RBinding839,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput145,
      chunk5FUZZQ4RInput146,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput146),
    ),
    chunk5FUZZQ4RBinding842 =
      (chunk5FUZZQ4RInput146?.height ?? bbox.height) + chunk5FUZZQ4RBinding840,
    chunk5FUZZQ4RBinding843 =
      (chunk5FUZZQ4RInput146?.width ?? bbox.width) + chunk5FUZZQ4RBinding841,
    chunk5FUZZQ4RBinding844 = [
      {
        x: (-3 * chunk5FUZZQ4RBinding842) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding843,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding843 + (3 * chunk5FUZZQ4RBinding842) / 6,
        y: -chunk5FUZZQ4RBinding842,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding842,
      },
    ],
    chunk5FUZZQ4RBinding845,
    { cssStyles } = chunk5FUZZQ4RInput146;
  if (chunk5FUZZQ4RInput146.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1132 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1133 = o(chunk5FUZZQ4RInput146, {}),
      chunk5FUZZQ4RBinding1134 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding844),
      chunk5FUZZQ4RBinding1135 = chunk5FUZZQ4RBinding1132.path(
        chunk5FUZZQ4RBinding1134,
        chunk5FUZZQ4RBinding1133,
      );
    chunk5FUZZQ4RBinding845 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1135, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding843 / 2}, ${chunk5FUZZQ4RBinding842 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding845.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding845 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding843,
      chunk5FUZZQ4RBinding842,
      chunk5FUZZQ4RBinding844,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding845.attr("style", nodeStyles),
    (chunk5FUZZQ4RInput146.width = chunk5FUZZQ4RBinding843),
    (chunk5FUZZQ4RInput146.height = chunk5FUZZQ4RBinding842),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput146, chunk5FUZZQ4RBinding845),
    (chunk5FUZZQ4RInput146.intersect = function (chunk5FUZZQ4RInput373) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput146,
        chunk5FUZZQ4RBinding844,
        chunk5FUZZQ4RInput373,
      );
    }),
    shapeSvg
  );
}
function chunk5FUZZQ4RHelper45(chunk5FUZZQ4RInput127, chunk5FUZZQ4RInput128) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput128);
  chunk5FUZZQ4RInput128.label = "";
  chunk5FUZZQ4RInput128.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding771 = chunk5FUZZQ4RInput127
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput128))
      .attr("id", chunk5FUZZQ4RInput128.domId ?? chunk5FUZZQ4RInput128.id),
    { cssStyles } = chunk5FUZZQ4RInput128,
    chunk5FUZZQ4RBinding772 = Math.max(35, chunk5FUZZQ4RInput128?.width ?? 0),
    chunk5FUZZQ4RBinding773 = Math.max(35, chunk5FUZZQ4RInput128?.height ?? 0),
    chunk5FUZZQ4RBinding774 = [
      {
        x: chunk5FUZZQ4RBinding772,
        y: 0,
      },
      {
        x: 0,
        y: chunk5FUZZQ4RBinding773 + 3.5,
      },
      {
        x: chunk5FUZZQ4RBinding772 - 14,
        y: chunk5FUZZQ4RBinding773 + 3.5,
      },
      {
        x: 0,
        y: 2 * chunk5FUZZQ4RBinding773,
      },
      {
        x: chunk5FUZZQ4RBinding772,
        y: chunk5FUZZQ4RBinding773 - 3.5,
      },
      {
        x: 14,
        y: chunk5FUZZQ4RBinding773 - 3.5,
      },
    ],
    chunk5FUZZQ4RBinding775 = rough.svg(chunk5FUZZQ4RBinding771),
    chunk5FUZZQ4RBinding776 = o(chunk5FUZZQ4RInput128, {});
  chunk5FUZZQ4RInput128.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding776.roughness = 0),
    (chunk5FUZZQ4RBinding776.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding777 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding774),
    chunk5FUZZQ4RBinding778 = chunk5FUZZQ4RBinding775.path(
      chunk5FUZZQ4RBinding777,
      chunk5FUZZQ4RBinding776,
    ),
    chunk5FUZZQ4RBinding779 = chunk5FUZZQ4RBinding771.insert(
      () => chunk5FUZZQ4RBinding778,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding779.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput128.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding779.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput128.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding779.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding779.attr(
      "transform",
      `translate(-${chunk5FUZZQ4RBinding772 / 2},${-chunk5FUZZQ4RBinding773})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput128, chunk5FUZZQ4RBinding779),
    (chunk5FUZZQ4RInput128.intersect = function (chunk5FUZZQ4RInput324) {
      return (
        logger.info(
          "lightningBolt intersect",
          chunk5FUZZQ4RInput128,
          chunk5FUZZQ4RInput324,
        ),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput128,
          chunk5FUZZQ4RBinding774,
          chunk5FUZZQ4RInput324,
        )
      );
    }),
    chunk5FUZZQ4RBinding771
  );
}
async function chunk5FUZZQ4RHelper46(
  chunk5FUZZQ4RInput30,
  chunk5FUZZQ4RInput31,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput31);
  chunk5FUZZQ4RInput31.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding289 = chunk5FUZZQ4RInput31.padding ?? 0,
    chunk5FUZZQ4RBinding290 =
      chunk5FUZZQ4RInput31.look === "neo" ? 16 : chunk5FUZZQ4RBinding289,
    chunk5FUZZQ4RBinding291 =
      chunk5FUZZQ4RInput31.look === "neo" ? 24 : chunk5FUZZQ4RBinding289;
  if (chunk5FUZZQ4RInput31.width || chunk5FUZZQ4RInput31.height) {
    let chunk5FUZZQ4RBinding1142 = chunk5FUZZQ4RInput31.width ?? 0;
    chunk5FUZZQ4RInput31.width =
      (chunk5FUZZQ4RInput31.width ?? 0) - chunk5FUZZQ4RBinding290;
    chunk5FUZZQ4RInput31.width < chunk5FUZZQ4RBinding26 &&
      (chunk5FUZZQ4RInput31.width = chunk5FUZZQ4RBinding26);
    let chunk5FUZZQ4RBinding1143 =
      chunk5FUZZQ4RBinding1142 / 2 / (2.5 + chunk5FUZZQ4RBinding1142 / 50);
    chunk5FUZZQ4RInput31.height =
      (chunk5FUZZQ4RInput31.height ?? 0) -
      chunk5FUZZQ4RBinding291 -
      chunk5FUZZQ4RBinding1143 * 3;
    chunk5FUZZQ4RInput31.height < chunk5FUZZQ4RBinding25 &&
      (chunk5FUZZQ4RInput31.height = chunk5FUZZQ4RBinding25);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput30,
      chunk5FUZZQ4RInput31,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput31),
    ),
    chunk5FUZZQ4RBinding292 =
      (chunk5FUZZQ4RInput31?.width ? chunk5FUZZQ4RInput31?.width : bbox.width) +
      chunk5FUZZQ4RBinding290 * 2,
    chunk5FUZZQ4RBinding293 = chunk5FUZZQ4RBinding292 / 2,
    chunk5FUZZQ4RBinding294 =
      chunk5FUZZQ4RBinding293 / (2.5 + chunk5FUZZQ4RBinding292 / 50),
    chunk5FUZZQ4RBinding295 =
      (chunk5FUZZQ4RInput31?.height
        ? chunk5FUZZQ4RInput31?.height
        : bbox.height) +
      chunk5FUZZQ4RBinding294 +
      chunk5FUZZQ4RBinding291 * 2,
    chunk5FUZZQ4RBinding296 = chunk5FUZZQ4RBinding295 * 0.1,
    chunk5FUZZQ4RBinding297,
    { cssStyles: chunk5FUZZQ4RBinding298 } = chunk5FUZZQ4RInput31;
  if (chunk5FUZZQ4RInput31.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1033 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1034 = chunk5FUZZQ4RBinding23(
        0,
        0,
        chunk5FUZZQ4RBinding292,
        chunk5FUZZQ4RBinding295,
        chunk5FUZZQ4RBinding293,
        chunk5FUZZQ4RBinding294,
        chunk5FUZZQ4RBinding296,
      ),
      chunk5FUZZQ4RBinding1035 = chunk5FUZZQ4RBinding24(
        0,
        chunk5FUZZQ4RBinding294,
        chunk5FUZZQ4RBinding292,
        chunk5FUZZQ4RBinding295,
        chunk5FUZZQ4RBinding293,
        chunk5FUZZQ4RBinding294,
      ),
      chunk5FUZZQ4RBinding1036 = o(chunk5FUZZQ4RInput31, {}),
      chunk5FUZZQ4RBinding1037 = chunk5FUZZQ4RBinding1033.path(
        chunk5FUZZQ4RBinding1034,
        chunk5FUZZQ4RBinding1036,
      ),
      chunk5FUZZQ4RBinding1038 = chunk5FUZZQ4RBinding1033.path(
        chunk5FUZZQ4RBinding1035,
        chunk5FUZZQ4RBinding1036,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1038, ":first-child")
      .attr("class", "line");
    chunk5FUZZQ4RBinding297 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1037,
      ":first-child",
    );
    chunk5FUZZQ4RBinding297.attr("class", "basic label-container");
    chunk5FUZZQ4RBinding298 &&
      chunk5FUZZQ4RBinding297.attr("style", chunk5FUZZQ4RBinding298);
  } else {
    let chunk5FUZZQ4RBinding1146 = chunk5FUZZQ4RBinding22(
      0,
      0,
      chunk5FUZZQ4RBinding292,
      chunk5FUZZQ4RBinding295,
      chunk5FUZZQ4RBinding293,
      chunk5FUZZQ4RBinding294,
      chunk5FUZZQ4RBinding296,
    );
    chunk5FUZZQ4RBinding297 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RBinding1146)
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWL(chunk5FUZZQ4RBinding298))
      .attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RBinding297.attr("label-offset-y", chunk5FUZZQ4RBinding294),
    chunk5FUZZQ4RBinding297.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding292 / 2}, ${-(chunk5FUZZQ4RBinding295 / 2 + chunk5FUZZQ4RBinding294)})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput31, chunk5FUZZQ4RBinding297),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunk5FUZZQ4RBinding294 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunk5FUZZQ4RInput31.intersect = function (chunk5FUZZQ4RInput192) {
      let chunk5FUZZQ4RBinding963 = chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput31,
          chunk5FUZZQ4RInput192,
        ),
        chunk5FUZZQ4RBinding964 =
          chunk5FUZZQ4RBinding963.x - (chunk5FUZZQ4RInput31.x ?? 0);
      if (
        chunk5FUZZQ4RBinding293 != 0 &&
        (Math.abs(chunk5FUZZQ4RBinding964) <
          (chunk5FUZZQ4RInput31.width ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RBinding964) ==
            (chunk5FUZZQ4RInput31.width ?? 0) / 2 &&
            Math.abs(
              chunk5FUZZQ4RBinding963.y - (chunk5FUZZQ4RInput31.y ?? 0),
            ) >
              (chunk5FUZZQ4RInput31.height ?? 0) / 2 - chunk5FUZZQ4RBinding294))
      ) {
        let chunk5FUZZQ4RBinding1172 =
          chunk5FUZZQ4RBinding294 *
          chunk5FUZZQ4RBinding294 *
          (1 -
            (chunk5FUZZQ4RBinding964 * chunk5FUZZQ4RBinding964) /
              (chunk5FUZZQ4RBinding293 * chunk5FUZZQ4RBinding293));
        chunk5FUZZQ4RBinding1172 > 0 &&
          (chunk5FUZZQ4RBinding1172 = Math.sqrt(chunk5FUZZQ4RBinding1172));
        chunk5FUZZQ4RBinding1172 =
          chunk5FUZZQ4RBinding294 - chunk5FUZZQ4RBinding1172;
        chunk5FUZZQ4RInput192.y - (chunk5FUZZQ4RInput31.y ?? 0) > 0 &&
          (chunk5FUZZQ4RBinding1172 = -chunk5FUZZQ4RBinding1172);
        chunk5FUZZQ4RBinding963.y += chunk5FUZZQ4RBinding1172;
      }
      return chunk5FUZZQ4RBinding963;
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper47(
  chunk5FUZZQ4RInput42,
  chunk5FUZZQ4RInput43,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput43);
  chunk5FUZZQ4RInput43.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding375 = chunk5FUZZQ4RInput43.padding ?? 0,
    chunk5FUZZQ4RBinding376 =
      chunk5FUZZQ4RInput43.look === "neo" ? 16 : chunk5FUZZQ4RBinding375,
    chunk5FUZZQ4RBinding377 =
      chunk5FUZZQ4RInput43.look === "neo" ? 12 : chunk5FUZZQ4RBinding375;
  (chunk5FUZZQ4RInput43.width || chunk5FUZZQ4RInput43.height) &&
    ((chunk5FUZZQ4RInput43.width =
      ((chunk5FUZZQ4RInput43.width ?? 0) * 10) / 11 -
      chunk5FUZZQ4RBinding376 * 2),
    chunk5FUZZQ4RInput43.width < 10 && (chunk5FUZZQ4RInput43.width = 10),
    (chunk5FUZZQ4RInput43.height =
      (chunk5FUZZQ4RInput43?.height ?? 0) - chunk5FUZZQ4RBinding377 * 2),
    chunk5FUZZQ4RInput43.height < 10 && (chunk5FUZZQ4RInput43.height = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput42,
      chunk5FUZZQ4RInput43,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput43),
    ),
    chunk5FUZZQ4RBinding378 =
      (chunk5FUZZQ4RInput43?.width ? chunk5FUZZQ4RInput43?.width : bbox.width) +
      (chunk5FUZZQ4RBinding376 ?? 0) * 2,
    chunk5FUZZQ4RBinding379 =
      (chunk5FUZZQ4RInput43?.height
        ? chunk5FUZZQ4RInput43?.height
        : bbox.height) +
      (chunk5FUZZQ4RBinding377 ?? 0) * 2,
    chunk5FUZZQ4RBinding380 =
      chunk5FUZZQ4RInput43.look === "neo"
        ? chunk5FUZZQ4RBinding379 / 4
        : chunk5FUZZQ4RBinding379 / 8,
    chunk5FUZZQ4RBinding381 = chunk5FUZZQ4RBinding379 + chunk5FUZZQ4RBinding380,
    { cssStyles } = chunk5FUZZQ4RInput43,
    chunk5FUZZQ4RBinding382 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding383 = o(chunk5FUZZQ4RInput43, {});
  chunk5FUZZQ4RInput43.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding383.roughness = 0),
    (chunk5FUZZQ4RBinding383.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding384 = [
      {
        x: -chunk5FUZZQ4RBinding378 / 2 - (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        y: -chunk5FUZZQ4RBinding381 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding378 / 2 - (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        y: chunk5FUZZQ4RBinding381 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RBinding378 / 2 - (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        chunk5FUZZQ4RBinding381 / 2,
        chunk5FUZZQ4RBinding378 / 2 + (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        chunk5FUZZQ4RBinding381 / 2,
        chunk5FUZZQ4RBinding380,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RBinding378 / 2 + (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        y: -chunk5FUZZQ4RBinding381 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding378 / 2 - (chunk5FUZZQ4RBinding378 / 2) * 0.1,
        y: -chunk5FUZZQ4RBinding381 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding378 / 2,
        y: -chunk5FUZZQ4RBinding381 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding378 / 2,
        y: (chunk5FUZZQ4RBinding381 / 2) * 1.1,
      },
      {
        x: -chunk5FUZZQ4RBinding378 / 2,
        y: -chunk5FUZZQ4RBinding381 / 2,
      },
    ],
    chunk5FUZZQ4RBinding385 = chunk5FUZZQ4RBinding382.polygon(
      chunk5FUZZQ4RBinding384.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding383,
    ),
    chunk5FUZZQ4RBinding386 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding385,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding386.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput43.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding386.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput43.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding386.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding386.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RBinding380 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding378 / 2 + (chunk5FUZZQ4RInput43.padding ?? 0) + ((chunk5FUZZQ4RBinding378 / 2) * 0.1) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding379 / 2 + (chunk5FUZZQ4RInput43.padding ?? 0) - chunk5FUZZQ4RBinding380 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput43, chunk5FUZZQ4RBinding386),
    (chunk5FUZZQ4RInput43.intersect = function (chunk5FUZZQ4RInput374) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput43,
        chunk5FUZZQ4RBinding384,
        chunk5FUZZQ4RInput374,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper48(
  chunk5FUZZQ4RInput36,
  chunk5FUZZQ4RInput37,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput37);
  chunk5FUZZQ4RInput37.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding328 = chunk5FUZZQ4RInput37.padding ?? 0,
    chunk5FUZZQ4RBinding329 =
      chunk5FUZZQ4RInput37.look === "neo" ? 16 : chunk5FUZZQ4RBinding328,
    chunk5FUZZQ4RBinding330 =
      chunk5FUZZQ4RInput37.look === "neo" ? 12 : chunk5FUZZQ4RBinding328,
    chunk5FUZZQ4RBinding331 = chunk5FUZZQ4RInput37.look === "neo" ? 10 : 5;
  (chunk5FUZZQ4RInput37.width || chunk5FUZZQ4RInput37.height) &&
    ((chunk5FUZZQ4RInput37.width = Math.max(
      (chunk5FUZZQ4RInput37?.width ?? 0) -
        chunk5FUZZQ4RBinding329 * 2 -
        2 * chunk5FUZZQ4RBinding331,
      10,
    )),
    (chunk5FUZZQ4RInput37.height = Math.max(
      (chunk5FUZZQ4RInput37?.height ?? 0) -
        chunk5FUZZQ4RBinding330 * 2 -
        2 * chunk5FUZZQ4RBinding331,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput36,
      chunk5FUZZQ4RInput37,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput37),
    ),
    chunk5FUZZQ4RBinding332 =
      (chunk5FUZZQ4RInput37?.width ? chunk5FUZZQ4RInput37?.width : bbox.width) +
      chunk5FUZZQ4RBinding329 * 2 +
      2 * chunk5FUZZQ4RBinding331,
    chunk5FUZZQ4RBinding333 =
      (chunk5FUZZQ4RInput37?.height
        ? chunk5FUZZQ4RInput37?.height
        : bbox.height) +
      chunk5FUZZQ4RBinding330 * 2 +
      2 * chunk5FUZZQ4RBinding331,
    chunk5FUZZQ4RBinding334 =
      chunk5FUZZQ4RBinding332 - 2 * chunk5FUZZQ4RBinding331,
    chunk5FUZZQ4RBinding335 =
      chunk5FUZZQ4RBinding333 - 2 * chunk5FUZZQ4RBinding331,
    chunk5FUZZQ4RBinding336 = -chunk5FUZZQ4RBinding334 / 2,
    chunk5FUZZQ4RBinding337 = -chunk5FUZZQ4RBinding335 / 2,
    { cssStyles } = chunk5FUZZQ4RInput37,
    chunk5FUZZQ4RBinding338 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding339 = o(chunk5FUZZQ4RInput37, {}),
    chunk5FUZZQ4RBinding340 = [
      {
        x: chunk5FUZZQ4RBinding336 - chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding331,
      },
      {
        x: chunk5FUZZQ4RBinding336 - chunk5FUZZQ4RBinding331,
        y:
          chunk5FUZZQ4RBinding337 +
          chunk5FUZZQ4RBinding335 +
          chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 -
          chunk5FUZZQ4RBinding331,
        y:
          chunk5FUZZQ4RBinding337 +
          chunk5FUZZQ4RBinding335 +
          chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 -
          chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding335,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding334,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding335,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding334,
        y:
          chunk5FUZZQ4RBinding337 +
          chunk5FUZZQ4RBinding335 -
          chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 +
          chunk5FUZZQ4RBinding331,
        y:
          chunk5FUZZQ4RBinding337 +
          chunk5FUZZQ4RBinding335 -
          chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 +
          chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 - chunk5FUZZQ4RBinding331,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 - chunk5FUZZQ4RBinding331,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337,
      },
      {
        x: chunk5FUZZQ4RBinding336,
        y: chunk5FUZZQ4RBinding337,
      },
      {
        x: chunk5FUZZQ4RBinding336,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding331,
      },
    ],
    chunk5FUZZQ4RBinding341 = [
      {
        x: chunk5FUZZQ4RBinding336,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 -
          chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding331,
      },
      {
        x:
          chunk5FUZZQ4RBinding336 +
          chunk5FUZZQ4RBinding334 -
          chunk5FUZZQ4RBinding331,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding335,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding334,
        y: chunk5FUZZQ4RBinding337 + chunk5FUZZQ4RBinding335,
      },
      {
        x: chunk5FUZZQ4RBinding336 + chunk5FUZZQ4RBinding334,
        y: chunk5FUZZQ4RBinding337,
      },
      {
        x: chunk5FUZZQ4RBinding336,
        y: chunk5FUZZQ4RBinding337,
      },
    ];
  chunk5FUZZQ4RInput37.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding339.roughness = 0),
    (chunk5FUZZQ4RBinding339.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding342 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding340),
    chunk5FUZZQ4RBinding343 = chunk5FUZZQ4RBinding338.path(
      chunk5FUZZQ4RBinding342,
      chunk5FUZZQ4RBinding339,
    ),
    chunk5FUZZQ4RBinding344 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding341),
    chunk5FUZZQ4RBinding345 = chunk5FUZZQ4RBinding338.path(
      chunk5FUZZQ4RBinding344,
      chunk5FUZZQ4RBinding339,
    );
  chunk5FUZZQ4RInput37.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding343 = chunk5FUZZQ4RHelper4(chunk5FUZZQ4RBinding343)),
    (chunk5FUZZQ4RBinding345 = chunk5FUZZQ4RHelper4(chunk5FUZZQ4RBinding345)));
  let chunk5FUZZQ4RBinding346 = shapeSvg.insert("g", ":first-child");
  return (
    chunk5FUZZQ4RBinding346.insert(() => chunk5FUZZQ4RBinding343),
    chunk5FUZZQ4RBinding346.insert(() => chunk5FUZZQ4RBinding345),
    chunk5FUZZQ4RBinding346.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput37.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding346.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput37.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding346.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunk5FUZZQ4RBinding331 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunk5FUZZQ4RBinding331 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput37, chunk5FUZZQ4RBinding346),
    (chunk5FUZZQ4RInput37.intersect = function (chunk5FUZZQ4RInput375) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput37,
        chunk5FUZZQ4RBinding340,
        chunk5FUZZQ4RInput375,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper49(
  chunk5FUZZQ4RInput34,
  chunk5FUZZQ4RInput35,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput35);
  chunk5FUZZQ4RInput35.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput34,
      chunk5FUZZQ4RInput35,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput35),
    ),
    chunk5FUZZQ4RBinding307 = chunk5FUZZQ4RInput35.padding ?? 0,
    chunk5FUZZQ4RBinding308 =
      chunk5FUZZQ4RInput35.look === "neo" ? 16 : chunk5FUZZQ4RBinding307,
    chunk5FUZZQ4RBinding309 =
      chunk5FUZZQ4RInput35.look === "neo" ? 12 : chunk5FUZZQ4RBinding307,
    chunk5FUZZQ4RBinding310 = true;
  (chunk5FUZZQ4RInput35.width || chunk5FUZZQ4RInput35.height) &&
    ((chunk5FUZZQ4RBinding310 = false),
    (chunk5FUZZQ4RInput35.width =
      (chunk5FUZZQ4RInput35?.width ?? 0) - chunk5FUZZQ4RBinding308 * 2),
    (chunk5FUZZQ4RInput35.height =
      (chunk5FUZZQ4RInput35?.height ?? 0) - chunk5FUZZQ4RBinding309 * 3));
  let chunk5FUZZQ4RBinding311 =
      Math.max(bbox.width, chunk5FUZZQ4RInput35?.width ?? 0) +
      chunk5FUZZQ4RBinding308 * 2,
    chunk5FUZZQ4RBinding312 =
      Math.max(bbox.height, chunk5FUZZQ4RInput35?.height ?? 0) +
      chunk5FUZZQ4RBinding309 * 3,
    chunk5FUZZQ4RBinding313 =
      chunk5FUZZQ4RInput35.look === "neo"
        ? chunk5FUZZQ4RBinding312 / 4
        : chunk5FUZZQ4RBinding312 / 8,
    chunk5FUZZQ4RBinding314 =
      chunk5FUZZQ4RBinding312 +
      (chunk5FUZZQ4RBinding310
        ? chunk5FUZZQ4RBinding313 / 2
        : -chunk5FUZZQ4RBinding313 / 2),
    chunk5FUZZQ4RBinding315 = -chunk5FUZZQ4RBinding311 / 2,
    chunk5FUZZQ4RBinding316 = -chunk5FUZZQ4RBinding314 / 2,
    { cssStyles } = chunk5FUZZQ4RInput35,
    chunk5FUZZQ4RBinding317 = chunk5FUZZQ4RHelper2(
      chunk5FUZZQ4RBinding315 - 10,
      chunk5FUZZQ4RBinding316 + chunk5FUZZQ4RBinding314 + 10,
      chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 - 10,
      chunk5FUZZQ4RBinding316 + chunk5FUZZQ4RBinding314 + 10,
      chunk5FUZZQ4RBinding313,
      0.8,
    ),
    chunk5FUZZQ4RBinding318 =
      chunk5FUZZQ4RBinding317?.[chunk5FUZZQ4RBinding317.length - 1],
    chunk5FUZZQ4RBinding319 = [
      {
        x: chunk5FUZZQ4RBinding315 - 10,
        y: chunk5FUZZQ4RBinding316 + 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 - 10,
        y: chunk5FUZZQ4RBinding316 + chunk5FUZZQ4RBinding314 + 10,
      },
      ...chunk5FUZZQ4RBinding317,
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 - 10,
        y: chunk5FUZZQ4RBinding318.y - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311,
        y: chunk5FUZZQ4RBinding318.y - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311,
        y: chunk5FUZZQ4RBinding318.y - 20,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 + 10,
        y: chunk5FUZZQ4RBinding318.y - 20,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 + 10,
        y: chunk5FUZZQ4RBinding316 - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + 10,
        y: chunk5FUZZQ4RBinding316 - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + 10,
        y: chunk5FUZZQ4RBinding316,
      },
      {
        x: chunk5FUZZQ4RBinding315,
        y: chunk5FUZZQ4RBinding316,
      },
      {
        x: chunk5FUZZQ4RBinding315,
        y: chunk5FUZZQ4RBinding316 + 10,
      },
    ],
    chunk5FUZZQ4RBinding320 = [
      {
        x: chunk5FUZZQ4RBinding315,
        y: chunk5FUZZQ4RBinding316 + 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 - 10,
        y: chunk5FUZZQ4RBinding316 + 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311 - 10,
        y: chunk5FUZZQ4RBinding318.y - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311,
        y: chunk5FUZZQ4RBinding318.y - 10,
      },
      {
        x: chunk5FUZZQ4RBinding315 + chunk5FUZZQ4RBinding311,
        y: chunk5FUZZQ4RBinding316,
      },
      {
        x: chunk5FUZZQ4RBinding315,
        y: chunk5FUZZQ4RBinding316,
      },
    ],
    chunk5FUZZQ4RBinding321 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding322 = o(chunk5FUZZQ4RInput35, {});
  chunk5FUZZQ4RInput35.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding322.roughness = 0),
    (chunk5FUZZQ4RBinding322.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding323 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding319),
    chunk5FUZZQ4RBinding324 = chunk5FUZZQ4RBinding321.path(
      chunk5FUZZQ4RBinding323,
      chunk5FUZZQ4RBinding322,
    ),
    chunk5FUZZQ4RBinding325 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding320),
    chunk5FUZZQ4RBinding326 = chunk5FUZZQ4RBinding321.path(
      chunk5FUZZQ4RBinding325,
      chunk5FUZZQ4RBinding322,
    ),
    chunk5FUZZQ4RBinding327 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding324,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding327.insert(() => chunk5FUZZQ4RBinding326),
    chunk5FUZZQ4RBinding327.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput35.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding327.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput35.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding327.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding327.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RBinding313 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 10 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 10 - chunk5FUZZQ4RBinding313 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput35, chunk5FUZZQ4RBinding327),
    (chunk5FUZZQ4RInput35.intersect = function (chunk5FUZZQ4RInput376) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput35,
        chunk5FUZZQ4RBinding319,
        chunk5FUZZQ4RInput376,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper50(
  chunk5FUZZQ4RInput110,
  chunk5FUZZQ4RInput111,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput111);
  chunk5FUZZQ4RInput111.labelStyle = labelStyles;
  chunk5FUZZQ4RInput111.useHtmlLabels ||
    w(y()) ||
    (chunk5FUZZQ4RInput111.centerLabel = true);
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput110,
      chunk5FUZZQ4RInput111,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput111),
    ),
    chunk5FUZZQ4RBinding738 = Math.max(
      bbox.width + (chunk5FUZZQ4RInput111.padding ?? 0) * 2,
      chunk5FUZZQ4RInput111?.width ?? 0,
    ),
    chunk5FUZZQ4RBinding739 = Math.max(
      bbox.height + (chunk5FUZZQ4RInput111.padding ?? 0) * 2,
      chunk5FUZZQ4RInput111?.height ?? 0,
    ),
    chunk5FUZZQ4RBinding740 = -chunk5FUZZQ4RBinding738 / 2,
    chunk5FUZZQ4RBinding741 = -chunk5FUZZQ4RBinding739 / 2,
    { cssStyles } = chunk5FUZZQ4RInput111,
    chunk5FUZZQ4RBinding742 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding743 = o(chunk5FUZZQ4RInput111, {
      fill: themeVariables.noteBkgColor,
      stroke: themeVariables.noteBorderColor,
    });
  chunk5FUZZQ4RInput111.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding743.roughness = 0),
    (chunk5FUZZQ4RBinding743.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding744 = chunk5FUZZQ4RBinding742.rectangle(
      chunk5FUZZQ4RBinding740,
      chunk5FUZZQ4RBinding741,
      chunk5FUZZQ4RBinding738,
      chunk5FUZZQ4RBinding739,
      chunk5FUZZQ4RBinding743,
    ),
    chunk5FUZZQ4RBinding745 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding744,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding745.attr("class", "basic label-container outer-path"),
    label.attr("class", "label noteLabel"),
    cssStyles &&
      chunk5FUZZQ4RInput111.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding745.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput111.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding745.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput111, chunk5FUZZQ4RBinding745),
    (chunk5FUZZQ4RInput111.intersect = function (chunk5FUZZQ4RInput407) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput111,
        chunk5FUZZQ4RInput407,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper51(
  chunk5FUZZQ4RInput104,
  chunk5FUZZQ4RInput105,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput105);
  chunk5FUZZQ4RInput105.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput104,
      chunk5FUZZQ4RInput105,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput105),
    ),
    chunk5FUZZQ4RBinding718 =
      bbox.width +
      (chunk5FUZZQ4RInput105.padding ?? 0) +
      (bbox.height + (chunk5FUZZQ4RInput105.padding ?? 0)),
    chunk5FUZZQ4RBinding720 = [
      {
        x: chunk5FUZZQ4RBinding718 / 2,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding718,
        y: -chunk5FUZZQ4RBinding718 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding718 / 2,
        y: -chunk5FUZZQ4RBinding718,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding718 / 2,
      },
    ],
    chunk5FUZZQ4RBinding721,
    { cssStyles } = chunk5FUZZQ4RInput105;
  if (chunk5FUZZQ4RInput105.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1114 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1115 = o(chunk5FUZZQ4RInput105, {}),
      chunk5FUZZQ4RBinding1116 = chunk5FUZZQ4RBinding27(
        0,
        0,
        chunk5FUZZQ4RBinding718,
      ),
      chunk5FUZZQ4RBinding1117 = chunk5FUZZQ4RBinding1114.path(
        chunk5FUZZQ4RBinding1116,
        chunk5FUZZQ4RBinding1115,
      );
    chunk5FUZZQ4RBinding721 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1117, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding718 / 2 + 0.5}, ${chunk5FUZZQ4RBinding718 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding721.attr("style", cssStyles);
  } else {
    chunk5FUZZQ4RBinding721 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding718,
      chunk5FUZZQ4RBinding718,
      chunk5FUZZQ4RBinding720,
    );
    chunk5FUZZQ4RBinding721.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding718 / 2 + 0.5}, ${chunk5FUZZQ4RBinding718 / 2})`,
    );
  }
  return (
    nodeStyles && chunk5FUZZQ4RBinding721.attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput105, chunk5FUZZQ4RBinding721),
    (chunk5FUZZQ4RInput105.calcIntersect = function (
      chunk5FUZZQ4RInput269,
      chunk5FUZZQ4RInput270,
    ) {
      let chunk5FUZZQ4RBinding1089 = chunk5FUZZQ4RInput269.width,
        chunk5FUZZQ4RBinding1090 = [
          {
            x: chunk5FUZZQ4RBinding1089 / 2,
            y: 0,
          },
          {
            x: chunk5FUZZQ4RBinding1089,
            y: -chunk5FUZZQ4RBinding1089 / 2,
          },
          {
            x: chunk5FUZZQ4RBinding1089 / 2,
            y: -chunk5FUZZQ4RBinding1089,
          },
          {
            x: 0,
            y: -chunk5FUZZQ4RBinding1089 / 2,
          },
        ],
        chunk5FUZZQ4RBinding1091 = chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput269,
          chunk5FUZZQ4RBinding1090,
          chunk5FUZZQ4RInput270,
        );
      return {
        x: chunk5FUZZQ4RBinding1091.x - 0.5,
        y: chunk5FUZZQ4RBinding1091.y - 0.5,
      };
    }),
    (chunk5FUZZQ4RInput105.intersect = function (chunk5FUZZQ4RInput357) {
      return this.calcIntersect(chunk5FUZZQ4RInput105, chunk5FUZZQ4RInput357);
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper52(
  chunk5FUZZQ4RInput85,
  chunk5FUZZQ4RInput86,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput86);
  chunk5FUZZQ4RInput86.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding631 = chunk5FUZZQ4RInput86.padding ?? 0,
    chunk5FUZZQ4RBinding632 =
      chunk5FUZZQ4RInput86.look === "neo" ? 21 : (chunk5FUZZQ4RBinding631 ?? 0),
    chunk5FUZZQ4RBinding633 =
      chunk5FUZZQ4RInput86.look === "neo" ? 12 : (chunk5FUZZQ4RBinding631 ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput85,
      chunk5FUZZQ4RInput86,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput86),
    ),
    chunk5FUZZQ4RBinding634 =
      (chunk5FUZZQ4RInput86?.width ?? bbox.width) +
      (chunk5FUZZQ4RInput86.look === "neo"
        ? chunk5FUZZQ4RBinding632 * 2
        : chunk5FUZZQ4RBinding632),
    chunk5FUZZQ4RBinding635 =
      (chunk5FUZZQ4RInput86?.height ?? bbox.height) +
      (chunk5FUZZQ4RInput86.look === "neo"
        ? chunk5FUZZQ4RBinding633 * 2
        : chunk5FUZZQ4RBinding633),
    chunk5FUZZQ4RBinding636 = -chunk5FUZZQ4RBinding634 / 2,
    chunk5FUZZQ4RBinding637 = -chunk5FUZZQ4RBinding635 / 2,
    chunk5FUZZQ4RBinding638 = chunk5FUZZQ4RBinding637 / 2,
    chunk5FUZZQ4RBinding639 = [
      {
        x: chunk5FUZZQ4RBinding636 + chunk5FUZZQ4RBinding638,
        y: chunk5FUZZQ4RBinding637,
      },
      {
        x: chunk5FUZZQ4RBinding636,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding636 + chunk5FUZZQ4RBinding638,
        y: -chunk5FUZZQ4RBinding637,
      },
      {
        x: -chunk5FUZZQ4RBinding636,
        y: -chunk5FUZZQ4RBinding637,
      },
      {
        x: -chunk5FUZZQ4RBinding636,
        y: chunk5FUZZQ4RBinding637,
      },
    ],
    { cssStyles: chunk5FUZZQ4RBinding640 } = chunk5FUZZQ4RInput86,
    chunk5FUZZQ4RBinding641 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding642 = o(chunk5FUZZQ4RInput86, {});
  chunk5FUZZQ4RInput86.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding642.roughness = 0),
    (chunk5FUZZQ4RBinding642.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding643 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding639),
    chunk5FUZZQ4RBinding644 = chunk5FUZZQ4RBinding641.path(
      chunk5FUZZQ4RBinding643,
      chunk5FUZZQ4RBinding642,
    ),
    chunk5FUZZQ4RBinding645 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding644,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding645.attr("class", "basic label-container outer-path"),
    chunk5FUZZQ4RBinding640 &&
      chunk5FUZZQ4RInput86.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding645
        .selectAll("path")
        .attr("style", chunk5FUZZQ4RBinding640),
    nodeStyles &&
      chunk5FUZZQ4RInput86.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding645.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding645.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding638 / 2},0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding638 / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput86, chunk5FUZZQ4RBinding645),
    (chunk5FUZZQ4RInput86.intersect = function (chunk5FUZZQ4RInput377) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput86,
        chunk5FUZZQ4RBinding639,
        chunk5FUZZQ4RInput377,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper53(
  chunk5FUZZQ4RInput20,
  chunk5FUZZQ4RInput21,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput21);
  chunk5FUZZQ4RInput21.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding238;
  chunk5FUZZQ4RBinding238 = chunk5FUZZQ4RInput21.cssClasses
    ? "node " + chunk5FUZZQ4RInput21.cssClasses
    : "node default";
  let chunk5FUZZQ4RBinding239 = chunk5FUZZQ4RInput20
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding238)
      .attr("id", chunk5FUZZQ4RInput21.domId || chunk5FUZZQ4RInput21.id),
    chunk5FUZZQ4RBinding240 = chunk5FUZZQ4RBinding239.insert("g"),
    chunk5FUZZQ4RBinding241 = chunk5FUZZQ4RBinding239
      .insert("g")
      .attr("class", "label")
      .attr("style", nodeStyles),
    chunk5FUZZQ4RBinding242 = chunk5FUZZQ4RInput21.description,
    chunk5FUZZQ4RBinding243 = chunk5FUZZQ4RInput21.label,
    chunk5FUZZQ4RBinding244 = await chunk5FUZZQ4RR(
      chunk5FUZZQ4RBinding241,
      chunk5FUZZQ4RBinding243,
      chunk5FUZZQ4RInput21.labelStyle,
      true,
      true,
    ),
    chunk5FUZZQ4RBinding245 = {
      width: 0,
      height: 0,
    };
  if (w(b())) {
    let chunk5FUZZQ4RBinding1192 = chunk5FUZZQ4RBinding244.children[0],
      chunk5FUZZQ4RBinding1193 = select(chunk5FUZZQ4RBinding244);
    chunk5FUZZQ4RBinding245 = chunk5FUZZQ4RBinding1192.getBoundingClientRect();
    chunk5FUZZQ4RBinding1193.attr("width", chunk5FUZZQ4RBinding245.width);
    chunk5FUZZQ4RBinding1193.attr("height", chunk5FUZZQ4RBinding245.height);
  }
  logger.info("Text 2", chunk5FUZZQ4RBinding242);
  let chunk5FUZZQ4RBinding246 = chunk5FUZZQ4RBinding242 || [],
    chunk5FUZZQ4RBinding247 = chunk5FUZZQ4RBinding244.getBBox(),
    chunk5FUZZQ4RBinding248 = await chunk5FUZZQ4RR(
      chunk5FUZZQ4RBinding241,
      Array.isArray(chunk5FUZZQ4RBinding246)
        ? chunk5FUZZQ4RBinding246.join("<br/>")
        : chunk5FUZZQ4RBinding246,
      chunk5FUZZQ4RInput21.labelStyle,
      true,
      true,
    ),
    chunk5FUZZQ4RBinding249 = chunk5FUZZQ4RBinding248.children[0],
    chunk5FUZZQ4RBinding250 = select(chunk5FUZZQ4RBinding248);
  chunk5FUZZQ4RBinding245 = chunk5FUZZQ4RBinding249.getBoundingClientRect();
  chunk5FUZZQ4RBinding250.attr("width", chunk5FUZZQ4RBinding245.width);
  chunk5FUZZQ4RBinding250.attr("height", chunk5FUZZQ4RBinding245.height);
  let chunk5FUZZQ4RBinding251 = (chunk5FUZZQ4RInput21.padding || 0) / 2;
  select(chunk5FUZZQ4RBinding248).attr(
    "transform",
    "translate( " +
      (chunk5FUZZQ4RBinding245.width > chunk5FUZZQ4RBinding247.width
        ? 0
        : (chunk5FUZZQ4RBinding247.width - chunk5FUZZQ4RBinding245.width) / 2) +
      ", " +
      (chunk5FUZZQ4RBinding247.height + chunk5FUZZQ4RBinding251 + 5) +
      ")",
  );
  select(chunk5FUZZQ4RBinding244).attr(
    "transform",
    "translate( " +
      (chunk5FUZZQ4RBinding245.width < chunk5FUZZQ4RBinding247.width
        ? 0
        : -(chunk5FUZZQ4RBinding247.width - chunk5FUZZQ4RBinding245.width) /
          2) +
      ", 0)",
  );
  chunk5FUZZQ4RBinding245 = chunk5FUZZQ4RBinding241.node().getBBox();
  chunk5FUZZQ4RBinding241.attr(
    "transform",
    "translate(" +
      -chunk5FUZZQ4RBinding245.width / 2 +
      ", " +
      (-chunk5FUZZQ4RBinding245.height / 2 - chunk5FUZZQ4RBinding251 + 3) +
      ")",
  );
  let chunk5FUZZQ4RBinding252 =
      chunk5FUZZQ4RBinding245.width + (chunk5FUZZQ4RInput21.padding || 0),
    chunk5FUZZQ4RBinding253 =
      chunk5FUZZQ4RBinding245.height + (chunk5FUZZQ4RInput21.padding || 0),
    chunk5FUZZQ4RBinding254 =
      -chunk5FUZZQ4RBinding245.width / 2 - chunk5FUZZQ4RBinding251,
    chunk5FUZZQ4RBinding255 =
      -chunk5FUZZQ4RBinding245.height / 2 - chunk5FUZZQ4RBinding251,
    chunk5FUZZQ4RBinding256,
    chunk5FUZZQ4RBinding257;
  if (chunk5FUZZQ4RInput21.look === "handDrawn") {
    let chunk5FUZZQ4RBinding957 = rough.svg(chunk5FUZZQ4RBinding239),
      chunk5FUZZQ4RBinding958 = o(chunk5FUZZQ4RInput21, {}),
      chunk5FUZZQ4RBinding959 = chunk5FUZZQ4RBinding957.path(
        chunk5FUZZQ4RBinding4(
          chunk5FUZZQ4RBinding254,
          chunk5FUZZQ4RBinding255,
          chunk5FUZZQ4RBinding252,
          chunk5FUZZQ4RBinding253,
          chunk5FUZZQ4RInput21.rx || 0,
        ),
        chunk5FUZZQ4RBinding958,
      ),
      chunk5FUZZQ4RBinding960 = chunk5FUZZQ4RBinding957.line(
        -chunk5FUZZQ4RBinding245.width / 2 - chunk5FUZZQ4RBinding251,
        -chunk5FUZZQ4RBinding245.height / 2 -
          chunk5FUZZQ4RBinding251 +
          chunk5FUZZQ4RBinding247.height +
          chunk5FUZZQ4RBinding251,
        chunk5FUZZQ4RBinding245.width / 2 + chunk5FUZZQ4RBinding251,
        -chunk5FUZZQ4RBinding245.height / 2 -
          chunk5FUZZQ4RBinding251 +
          chunk5FUZZQ4RBinding247.height +
          chunk5FUZZQ4RBinding251,
        chunk5FUZZQ4RBinding958,
      );
    chunk5FUZZQ4RBinding257 = chunk5FUZZQ4RBinding239.insert(
      () => (
        logger.debug("Rough node insert CXC", chunk5FUZZQ4RBinding959),
        chunk5FUZZQ4RBinding960
      ),
      ":first-child",
    );
    chunk5FUZZQ4RBinding256 = chunk5FUZZQ4RBinding239.insert(
      () => (
        logger.debug("Rough node insert CXC", chunk5FUZZQ4RBinding959),
        chunk5FUZZQ4RBinding959
      ),
      ":first-child",
    );
  } else {
    chunk5FUZZQ4RBinding256 = chunk5FUZZQ4RBinding240.insert(
      "rect",
      ":first-child",
    );
    chunk5FUZZQ4RBinding257 = chunk5FUZZQ4RBinding240.insert("line");
    chunk5FUZZQ4RBinding256
      .attr("class", "outer title-state")
      .attr("style", nodeStyles)
      .attr("x", -chunk5FUZZQ4RBinding245.width / 2 - chunk5FUZZQ4RBinding251)
      .attr("y", -chunk5FUZZQ4RBinding245.height / 2 - chunk5FUZZQ4RBinding251)
      .attr(
        "width",
        chunk5FUZZQ4RBinding245.width + (chunk5FUZZQ4RInput21.padding || 0),
      )
      .attr(
        "height",
        chunk5FUZZQ4RBinding245.height + (chunk5FUZZQ4RInput21.padding || 0),
      );
    chunk5FUZZQ4RBinding257
      .attr("class", "divider")
      .attr("x1", -chunk5FUZZQ4RBinding245.width / 2 - chunk5FUZZQ4RBinding251)
      .attr("x2", chunk5FUZZQ4RBinding245.width / 2 + chunk5FUZZQ4RBinding251)
      .attr(
        "y1",
        -chunk5FUZZQ4RBinding245.height / 2 -
          chunk5FUZZQ4RBinding251 +
          chunk5FUZZQ4RBinding247.height +
          chunk5FUZZQ4RBinding251,
      )
      .attr(
        "y2",
        -chunk5FUZZQ4RBinding245.height / 2 -
          chunk5FUZZQ4RBinding251 +
          chunk5FUZZQ4RBinding247.height +
          chunk5FUZZQ4RBinding251,
      );
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput21, chunk5FUZZQ4RBinding256),
    (chunk5FUZZQ4RInput21.intersect = function (chunk5FUZZQ4RInput408) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput21,
        chunk5FUZZQ4RInput408,
      );
    }),
    chunk5FUZZQ4RBinding239
  );
}
async function chunk5FUZZQ4RHelper54(
  chunk5FUZZQ4RInput287,
  chunk5FUZZQ4RInput288,
  { config: { themeVariables } },
) {
  let chunk5FUZZQ4RBinding1119 = themeVariables?.radius ?? 5;
  return chunk5FUZZQ4RHelper41(chunk5FUZZQ4RInput287, chunk5FUZZQ4RInput288, {
    rx: chunk5FUZZQ4RBinding1119,
    ry: chunk5FUZZQ4RBinding1119,
    classes: "",
    labelPaddingX: chunk5FUZZQ4RInput288?.padding ?? 0,
    labelPaddingY: chunk5FUZZQ4RInput288?.padding ?? 0,
  });
}
async function chunk5FUZZQ4RHelper55(
  chunk5FUZZQ4RInput81,
  chunk5FUZZQ4RInput82,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput82);
  chunk5FUZZQ4RInput82.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding601 =
      chunk5FUZZQ4RInput82.look === "neo"
        ? 16
        : (chunk5FUZZQ4RInput82.padding ?? 0),
    chunk5FUZZQ4RBinding602 =
      chunk5FUZZQ4RInput82.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput82.padding ?? 0),
    { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput81,
      chunk5FUZZQ4RInput82,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput82),
    ),
    chunk5FUZZQ4RBinding603 =
      (chunk5FUZZQ4RInput82?.width ?? bbox.width) +
      chunk5FUZZQ4RBinding601 * 2 +
      (chunk5FUZZQ4RInput82.look === "neo"
        ? chunk5FUZZQ4RBinding28
        : chunk5FUZZQ4RBinding28 * 2),
    chunk5FUZZQ4RBinding604 =
      (chunk5FUZZQ4RInput82?.height ?? bbox.height) +
      chunk5FUZZQ4RBinding602 * 2,
    chunk5FUZZQ4RBinding605 = chunk5FUZZQ4RBinding603 - chunk5FUZZQ4RBinding28,
    chunk5FUZZQ4RBinding606 = chunk5FUZZQ4RBinding604,
    chunk5FUZZQ4RBinding607 =
      chunk5FUZZQ4RBinding28 - chunk5FUZZQ4RBinding603 / 2,
    chunk5FUZZQ4RBinding608 = -chunk5FUZZQ4RBinding604 / 2,
    { cssStyles } = chunk5FUZZQ4RInput82,
    chunk5FUZZQ4RBinding609 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding610 = o(chunk5FUZZQ4RInput82, {});
  chunk5FUZZQ4RInput82.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding610.roughness = 0),
    (chunk5FUZZQ4RBinding610.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding611 = [
      {
        x: chunk5FUZZQ4RBinding607,
        y: chunk5FUZZQ4RBinding608,
      },
      {
        x: chunk5FUZZQ4RBinding607 + chunk5FUZZQ4RBinding605,
        y: chunk5FUZZQ4RBinding608,
      },
      {
        x: chunk5FUZZQ4RBinding607 + chunk5FUZZQ4RBinding605,
        y: chunk5FUZZQ4RBinding608 + chunk5FUZZQ4RBinding606,
      },
      {
        x: chunk5FUZZQ4RBinding607 - chunk5FUZZQ4RBinding28,
        y: chunk5FUZZQ4RBinding608 + chunk5FUZZQ4RBinding606,
      },
      {
        x: chunk5FUZZQ4RBinding607 - chunk5FUZZQ4RBinding28,
        y: chunk5FUZZQ4RBinding608,
      },
      {
        x: chunk5FUZZQ4RBinding607,
        y: chunk5FUZZQ4RBinding608,
      },
      {
        x: chunk5FUZZQ4RBinding607,
        y: chunk5FUZZQ4RBinding608 + chunk5FUZZQ4RBinding606,
      },
    ],
    chunk5FUZZQ4RBinding612 = chunk5FUZZQ4RBinding609.polygon(
      chunk5FUZZQ4RBinding611.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding610,
    ),
    chunk5FUZZQ4RBinding613 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding612,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding613
      .attr("class", "basic label-container outer-path")
      .attr("style", chunk5PVQY5BWL(cssStyles)),
    nodeStyles &&
      chunk5FUZZQ4RInput82.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding613.selectAll("path").attr("style", nodeStyles),
    cssStyles &&
      chunk5FUZZQ4RInput82.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding613.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${chunk5FUZZQ4RBinding28 / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput82, chunk5FUZZQ4RBinding613),
    (chunk5FUZZQ4RInput82.intersect = function (chunk5FUZZQ4RInput409) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput82,
        chunk5FUZZQ4RInput409,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper56(
  chunk5FUZZQ4RInput69,
  chunk5FUZZQ4RInput70,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput70);
  chunk5FUZZQ4RInput70.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding536 = chunk5FUZZQ4RInput70.padding ?? 0,
    chunk5FUZZQ4RBinding537 =
      chunk5FUZZQ4RInput70.look === "neo" ? 16 : chunk5FUZZQ4RBinding536,
    chunk5FUZZQ4RBinding538 =
      chunk5FUZZQ4RInput70.look === "neo" ? 12 : chunk5FUZZQ4RBinding536;
  (chunk5FUZZQ4RInput70.width || chunk5FUZZQ4RInput70.height) &&
    ((chunk5FUZZQ4RInput70.width = Math.max(
      (chunk5FUZZQ4RInput70?.width ?? 0) - chunk5FUZZQ4RBinding537 * 2,
      10,
    )),
    (chunk5FUZZQ4RInput70.height = Math.max(
      (chunk5FUZZQ4RInput70?.height ?? 0) / 1.5 - chunk5FUZZQ4RBinding538 * 2,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput69,
      chunk5FUZZQ4RInput70,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput70),
    ),
    chunk5FUZZQ4RBinding539 =
      (chunk5FUZZQ4RInput70?.width ? chunk5FUZZQ4RInput70?.width : bbox.width) +
      chunk5FUZZQ4RBinding537 * 2,
    chunk5FUZZQ4RBinding540 =
      ((chunk5FUZZQ4RInput70?.height
        ? chunk5FUZZQ4RInput70?.height
        : bbox.height) +
        chunk5FUZZQ4RBinding538 * 2) *
      1.5,
    chunk5FUZZQ4RBinding541 = chunk5FUZZQ4RBinding539,
    chunk5FUZZQ4RBinding542 = chunk5FUZZQ4RBinding540 / 1.5,
    chunk5FUZZQ4RBinding543 = -chunk5FUZZQ4RBinding541 / 2,
    chunk5FUZZQ4RBinding544 = -chunk5FUZZQ4RBinding542 / 2,
    { cssStyles: chunk5FUZZQ4RBinding545 } = chunk5FUZZQ4RInput70,
    chunk5FUZZQ4RBinding546 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding547 = o(chunk5FUZZQ4RInput70, {});
  chunk5FUZZQ4RInput70.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding547.roughness = 0),
    (chunk5FUZZQ4RBinding547.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding548 = [
      {
        x: chunk5FUZZQ4RBinding543,
        y: chunk5FUZZQ4RBinding544,
      },
      {
        x: chunk5FUZZQ4RBinding543,
        y: chunk5FUZZQ4RBinding544 + chunk5FUZZQ4RBinding542,
      },
      {
        x: chunk5FUZZQ4RBinding543 + chunk5FUZZQ4RBinding541,
        y: chunk5FUZZQ4RBinding544 + chunk5FUZZQ4RBinding542,
      },
      {
        x: chunk5FUZZQ4RBinding543 + chunk5FUZZQ4RBinding541,
        y: chunk5FUZZQ4RBinding544 - chunk5FUZZQ4RBinding542 / 2,
      },
    ],
    chunk5FUZZQ4RBinding549 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding548),
    chunk5FUZZQ4RBinding550 = chunk5FUZZQ4RBinding546.path(
      chunk5FUZZQ4RBinding549,
      chunk5FUZZQ4RBinding547,
    ),
    chunk5FUZZQ4RBinding551 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding550,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding551.attr("class", "basic label-container  outer-path"),
    chunk5FUZZQ4RBinding545 &&
      chunk5FUZZQ4RInput70.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding551
        .selectChildren("path")
        .attr("style", chunk5FUZZQ4RBinding545),
    nodeStyles &&
      chunk5FUZZQ4RInput70.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding551.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding551.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RBinding542 / 4})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding541 / 2 + (chunk5FUZZQ4RInput70.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-chunk5FUZZQ4RBinding542 / 4 + (chunk5FUZZQ4RInput70.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput70, chunk5FUZZQ4RBinding551),
    (chunk5FUZZQ4RInput70.intersect = function (chunk5FUZZQ4RInput378) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput70,
        chunk5FUZZQ4RBinding548,
        chunk5FUZZQ4RInput378,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper57(
  chunk5FUZZQ4RInput273,
  chunk5FUZZQ4RInput274,
) {
  let chunk5FUZZQ4RBinding1101 = chunk5FUZZQ4RInput274.padding ?? 0,
    chunk5FUZZQ4RBinding1102 =
      chunk5FUZZQ4RInput274.look === "neo" ? 16 : chunk5FUZZQ4RBinding1101 * 2,
    chunk5FUZZQ4RBinding1103 =
      chunk5FUZZQ4RInput274.look === "neo" ? 12 : chunk5FUZZQ4RBinding1101;
  return chunk5FUZZQ4RHelper41(chunk5FUZZQ4RInput273, chunk5FUZZQ4RInput274, {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX:
      chunk5FUZZQ4RInput274.labelPaddingX ?? chunk5FUZZQ4RBinding1102,
    labelPaddingY: chunk5FUZZQ4RBinding1103,
  });
}
async function chunk5FUZZQ4RHelper58(
  chunk5FUZZQ4RInput115,
  chunk5FUZZQ4RInput116,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput116);
  chunk5FUZZQ4RInput116.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding751 = chunk5FUZZQ4RInput116.padding ?? 0,
    chunk5FUZZQ4RBinding752 =
      chunk5FUZZQ4RInput116.look === "neo" ? 20 : chunk5FUZZQ4RBinding751,
    chunk5FUZZQ4RBinding753 =
      chunk5FUZZQ4RInput116.look === "neo" ? 12 : chunk5FUZZQ4RBinding751,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput115,
      chunk5FUZZQ4RInput116,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput116),
    ),
    chunk5FUZZQ4RBinding754 =
      bbox.height +
      (chunk5FUZZQ4RInput116.look === "neo"
        ? chunk5FUZZQ4RBinding753 * 2
        : chunk5FUZZQ4RBinding753),
    chunk5FUZZQ4RBinding755 =
      bbox.width +
      chunk5FUZZQ4RBinding754 / 4 +
      (chunk5FUZZQ4RInput116.look === "neo"
        ? chunk5FUZZQ4RBinding752 * 2
        : chunk5FUZZQ4RBinding752),
    chunk5FUZZQ4RBinding756 = chunk5FUZZQ4RBinding754 / 2,
    { cssStyles } = chunk5FUZZQ4RInput116,
    chunk5FUZZQ4RBinding757 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding758 = o(chunk5FUZZQ4RInput116, {});
  chunk5FUZZQ4RInput116.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding758.roughness = 0),
    (chunk5FUZZQ4RBinding758.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding759 = [
      {
        x: -chunk5FUZZQ4RBinding755 / 2 + chunk5FUZZQ4RBinding756,
        y: -chunk5FUZZQ4RBinding754 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding755 / 2 - chunk5FUZZQ4RBinding756,
        y: -chunk5FUZZQ4RBinding754 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        -chunk5FUZZQ4RBinding755 / 2 + chunk5FUZZQ4RBinding756,
        0,
        chunk5FUZZQ4RBinding756,
        50,
        90,
        270,
      ),
      {
        x: chunk5FUZZQ4RBinding755 / 2 - chunk5FUZZQ4RBinding756,
        y: chunk5FUZZQ4RBinding754 / 2,
      },
      ...chunk5FUZZQ4RHelper3(
        chunk5FUZZQ4RBinding755 / 2 - chunk5FUZZQ4RBinding756,
        0,
        chunk5FUZZQ4RBinding756,
        50,
        270,
        450,
      ),
    ],
    chunk5FUZZQ4RBinding760 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding759),
    chunk5FUZZQ4RBinding761 = chunk5FUZZQ4RBinding757.path(
      chunk5FUZZQ4RBinding760,
      chunk5FUZZQ4RBinding758,
    ),
    chunk5FUZZQ4RBinding762 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding761,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding762.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput116.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding762.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput116.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding762.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput116, chunk5FUZZQ4RBinding762),
    (chunk5FUZZQ4RInput116.intersect = function (chunk5FUZZQ4RInput379) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput116,
        chunk5FUZZQ4RBinding759,
        chunk5FUZZQ4RInput379,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper59(
  chunk5FUZZQ4RInput304,
  chunk5FUZZQ4RInput305,
) {
  return chunk5FUZZQ4RHelper41(chunk5FUZZQ4RInput304, chunk5FUZZQ4RInput305, {
    rx: chunk5FUZZQ4RInput305.look === "neo" ? 3 : 5,
    ry: chunk5FUZZQ4RInput305.look === "neo" ? 3 : 5,
    classes: "flowchart-node",
  });
}
function chunk5FUZZQ4RHelper60(
  chunk5FUZZQ4RInput73,
  chunk5FUZZQ4RInput74,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput74);
  chunk5FUZZQ4RInput74.labelStyle = labelStyles;
  let { cssStyles } = chunk5FUZZQ4RInput74,
    { lineColor, stateBorder, nodeBorder, nodeShadow } = themeVariables;
  (chunk5FUZZQ4RInput74.width || chunk5FUZZQ4RInput74.height) &&
    ((chunk5FUZZQ4RInput74.width ?? 0) < 14 &&
      (chunk5FUZZQ4RInput74.width = 14),
    (chunk5FUZZQ4RInput74.height ?? 0) < 14 &&
      (chunk5FUZZQ4RInput74.height = 14));
  chunk5FUZZQ4RInput74.width ||= 14;
  chunk5FUZZQ4RInput74.height ||= 14;
  let chunk5FUZZQ4RBinding563 = chunk5FUZZQ4RInput73
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunk5FUZZQ4RInput74.domId ?? chunk5FUZZQ4RInput74.id),
    chunk5FUZZQ4RBinding564 = rough.svg(chunk5FUZZQ4RBinding563),
    chunk5FUZZQ4RBinding565 = o(chunk5FUZZQ4RInput74, {});
  chunk5FUZZQ4RInput74.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding565.roughness = 0),
    (chunk5FUZZQ4RBinding565.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding566 = chunk5FUZZQ4RBinding564.circle(
      0,
      0,
      chunk5FUZZQ4RInput74.width,
      {
        ...chunk5FUZZQ4RBinding565,
        stroke: lineColor,
        strokeWidth: 2,
      },
    ),
    chunk5FUZZQ4RBinding567 = stateBorder ?? nodeBorder,
    chunk5FUZZQ4RBinding568 = ((chunk5FUZZQ4RInput74.width ?? 0) * 5) / 14,
    chunk5FUZZQ4RBinding569 = chunk5FUZZQ4RBinding564.circle(
      0,
      0,
      chunk5FUZZQ4RBinding568,
      {
        ...chunk5FUZZQ4RBinding565,
        fill: chunk5FUZZQ4RBinding567,
        stroke: chunk5FUZZQ4RBinding567,
        strokeWidth: 2,
        fillStyle: "solid",
      },
    ),
    chunk5FUZZQ4RBinding570 = chunk5FUZZQ4RBinding563.insert(
      () => chunk5FUZZQ4RBinding566,
      ":first-child",
    );
  if (
    (chunk5FUZZQ4RBinding570.insert(() => chunk5FUZZQ4RBinding569),
    chunk5FUZZQ4RInput74.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding570.attr("class", "outer-path"),
    cssStyles &&
      chunk5FUZZQ4RBinding570.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RBinding570.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RInput74.width < 25 &&
      nodeShadow &&
      chunk5FUZZQ4RInput74.look !== "handDrawn")
  ) {
    let chunk5FUZZQ4RBinding1186 =
        chunk5FUZZQ4RInput73.node()?.ownerSVGElement?.id ?? "",
      chunk5FUZZQ4RBinding1187 = chunk5FUZZQ4RBinding1186
        ? `${chunk5FUZZQ4RBinding1186}-drop-shadow-small`
        : "drop-shadow-small";
    chunk5FUZZQ4RBinding570.attr(
      "style",
      `filter:url(#${chunk5FUZZQ4RBinding1187})`,
    );
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput74, chunk5FUZZQ4RBinding570),
    (chunk5FUZZQ4RInput74.intersect = function (chunk5FUZZQ4RInput355) {
      return chunk5FUZZQ4RBinding12.circle(
        chunk5FUZZQ4RInput74,
        (chunk5FUZZQ4RInput74.width ?? 0) / 2,
        chunk5FUZZQ4RInput355,
      );
    }),
    chunk5FUZZQ4RBinding563
  );
}
function chunk5FUZZQ4RHelper61(
  chunk5FUZZQ4RInput100,
  chunk5FUZZQ4RInput101,
  { config: { themeVariables } },
) {
  let { lineColor, nodeShadow } = themeVariables;
  (chunk5FUZZQ4RInput101.width || chunk5FUZZQ4RInput101.height) &&
    ((chunk5FUZZQ4RInput101.width ?? 0) < 14 &&
      (chunk5FUZZQ4RInput101.width = 14),
    (chunk5FUZZQ4RInput101.height ?? 0) < 14 &&
      (chunk5FUZZQ4RInput101.height = 14));
  chunk5FUZZQ4RInput101.width ||= 14;
  chunk5FUZZQ4RInput101.height ||= 14;
  let chunk5FUZZQ4RBinding700 = chunk5FUZZQ4RInput100
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunk5FUZZQ4RInput101.domId || chunk5FUZZQ4RInput101.id),
    chunk5FUZZQ4RBinding701;
  if (chunk5FUZZQ4RInput101.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1108 = rough
      .svg(chunk5FUZZQ4RBinding700)
      .circle(0, 0, chunk5FUZZQ4RInput101.width, i(lineColor));
    chunk5FUZZQ4RBinding701 = chunk5FUZZQ4RBinding700.insert(
      () => chunk5FUZZQ4RBinding1108,
    );
    chunk5FUZZQ4RBinding701
      .attr("class", "state-start")
      .attr("r", (chunk5FUZZQ4RInput101.width ?? 7) / 2)
      .attr("width", chunk5FUZZQ4RInput101.width ?? 14)
      .attr("height", chunk5FUZZQ4RInput101.height ?? 14);
  } else {
    chunk5FUZZQ4RBinding701 = chunk5FUZZQ4RBinding700.insert(
      "circle",
      ":first-child",
    );
    chunk5FUZZQ4RBinding701
      .attr("class", "state-start")
      .attr("r", (chunk5FUZZQ4RInput101.width ?? 7) / 2)
      .attr("width", chunk5FUZZQ4RInput101.width ?? 14)
      .attr("height", chunk5FUZZQ4RInput101.height ?? 14);
  }
  if (
    chunk5FUZZQ4RInput101.width < 25 &&
    nodeShadow &&
    chunk5FUZZQ4RInput101.look !== "handDrawn"
  ) {
    let chunk5FUZZQ4RBinding1188 =
        chunk5FUZZQ4RInput100.node()?.ownerSVGElement?.id ?? "",
      chunk5FUZZQ4RBinding1189 = chunk5FUZZQ4RBinding1188
        ? `${chunk5FUZZQ4RBinding1188}-drop-shadow-small`
        : "drop-shadow-small";
    chunk5FUZZQ4RBinding701.attr(
      "style",
      `filter:url(#${chunk5FUZZQ4RBinding1189})`,
    );
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput101, chunk5FUZZQ4RBinding701),
    (chunk5FUZZQ4RInput101.intersect = function (chunk5FUZZQ4RInput356) {
      return chunk5FUZZQ4RBinding12.circle(
        chunk5FUZZQ4RInput101,
        (chunk5FUZZQ4RInput101.width ?? 7) / 2,
        chunk5FUZZQ4RInput356,
      );
    }),
    chunk5FUZZQ4RBinding700
  );
}
async function chunk5FUZZQ4RHelper62(
  chunk5FUZZQ4RInput93,
  chunk5FUZZQ4RInput94,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput94);
  chunk5FUZZQ4RInput94.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding676 = chunk5FUZZQ4RInput94?.padding ?? 8,
    chunk5FUZZQ4RBinding677 =
      chunk5FUZZQ4RInput94.look === "neo" ? 28 : chunk5FUZZQ4RBinding676,
    chunk5FUZZQ4RBinding678 =
      chunk5FUZZQ4RInput94.look === "neo" ? 12 : chunk5FUZZQ4RBinding676,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput93,
      chunk5FUZZQ4RInput94,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput94),
    ),
    chunk5FUZZQ4RBinding679 =
      (chunk5FUZZQ4RInput94?.width ?? bbox.width) +
      2 * chunk5FUZZQ4RBinding29 +
      chunk5FUZZQ4RBinding677,
    chunk5FUZZQ4RBinding680 =
      (chunk5FUZZQ4RInput94?.height ?? bbox.height) + chunk5FUZZQ4RBinding678,
    chunk5FUZZQ4RBinding681 =
      chunk5FUZZQ4RBinding679 - 2 * chunk5FUZZQ4RBinding29,
    chunk5FUZZQ4RBinding682 = chunk5FUZZQ4RBinding680,
    chunk5FUZZQ4RBinding683 = -chunk5FUZZQ4RBinding679 / 2,
    chunk5FUZZQ4RBinding684 = -chunk5FUZZQ4RBinding680 / 2,
    chunk5FUZZQ4RBinding685 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding681,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding681,
        y: -chunk5FUZZQ4RBinding682,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding682,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: -8,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding681 + 8,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding681 + 8,
        y: -chunk5FUZZQ4RBinding682,
      },
      {
        x: -8,
        y: -chunk5FUZZQ4RBinding682,
      },
      {
        x: -8,
        y: 0,
      },
    ];
  if (chunk5FUZZQ4RInput94.look === "handDrawn") {
    let chunk5FUZZQ4RBinding997 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding998 = o(chunk5FUZZQ4RInput94, {}),
      chunk5FUZZQ4RBinding999 = chunk5FUZZQ4RBinding997.rectangle(
        chunk5FUZZQ4RBinding683,
        chunk5FUZZQ4RBinding684,
        chunk5FUZZQ4RBinding681 + 16,
        chunk5FUZZQ4RBinding682,
        chunk5FUZZQ4RBinding998,
      ),
      chunk5FUZZQ4RBinding1000 = chunk5FUZZQ4RBinding997.line(
        chunk5FUZZQ4RBinding683 + chunk5FUZZQ4RBinding29,
        chunk5FUZZQ4RBinding684,
        chunk5FUZZQ4RBinding683 + chunk5FUZZQ4RBinding29,
        chunk5FUZZQ4RBinding684 + chunk5FUZZQ4RBinding682,
        chunk5FUZZQ4RBinding998,
      ),
      chunk5FUZZQ4RBinding1001 = chunk5FUZZQ4RBinding997.line(
        chunk5FUZZQ4RBinding683 +
          chunk5FUZZQ4RBinding29 +
          chunk5FUZZQ4RBinding681,
        chunk5FUZZQ4RBinding684,
        chunk5FUZZQ4RBinding683 +
          chunk5FUZZQ4RBinding29 +
          chunk5FUZZQ4RBinding681,
        chunk5FUZZQ4RBinding684 + chunk5FUZZQ4RBinding682,
        chunk5FUZZQ4RBinding998,
      );
    shapeSvg.insert(() => chunk5FUZZQ4RBinding1000, ":first-child");
    shapeSvg.insert(() => chunk5FUZZQ4RBinding1001, ":first-child");
    let chunk5FUZZQ4RBinding1002 = shapeSvg.insert(
        () => chunk5FUZZQ4RBinding999,
        ":first-child",
      ),
      { cssStyles } = chunk5FUZZQ4RInput94;
    chunk5FUZZQ4RBinding1002
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles));
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput94, chunk5FUZZQ4RBinding1002);
  } else {
    let chunk5FUZZQ4RBinding1246 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding681,
      chunk5FUZZQ4RBinding682,
      chunk5FUZZQ4RBinding685,
    );
    nodeStyles && chunk5FUZZQ4RBinding1246.attr("style", nodeStyles);
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput94, chunk5FUZZQ4RBinding1246);
  }
  return (
    (chunk5FUZZQ4RInput94.intersect = function (chunk5FUZZQ4RInput380) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput94,
        chunk5FUZZQ4RBinding685,
        chunk5FUZZQ4RInput380,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper63(
  chunk5FUZZQ4RInput59,
  chunk5FUZZQ4RInput60,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput60);
  chunk5FUZZQ4RInput60.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding483 = chunk5FUZZQ4RInput60.padding ?? 0,
    chunk5FUZZQ4RBinding484 =
      chunk5FUZZQ4RInput60.look === "neo" ? 16 : chunk5FUZZQ4RBinding483,
    chunk5FUZZQ4RBinding485 =
      chunk5FUZZQ4RInput60.look === "neo" ? 12 : chunk5FUZZQ4RBinding483;
  (chunk5FUZZQ4RInput60.width || chunk5FUZZQ4RInput60.height) &&
    ((chunk5FUZZQ4RInput60.height = Math.max(
      (chunk5FUZZQ4RInput60?.height ?? 0) - chunk5FUZZQ4RBinding485 * 2,
      10,
    )),
    (chunk5FUZZQ4RInput60.width = Math.max(
      (chunk5FUZZQ4RInput60?.width ?? 0) -
        chunk5FUZZQ4RBinding484 * 2 -
        chunk5FUZZQ4RBinding30 *
          (chunk5FUZZQ4RInput60.height + chunk5FUZZQ4RBinding485 * 2),
      10,
    )));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput59,
      chunk5FUZZQ4RInput60,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput60),
    ),
    chunk5FUZZQ4RBinding486 =
      (chunk5FUZZQ4RInput60?.height
        ? chunk5FUZZQ4RInput60?.height
        : bbox.height) +
      chunk5FUZZQ4RBinding485 * 2,
    chunk5FUZZQ4RBinding487 = chunk5FUZZQ4RBinding30 * chunk5FUZZQ4RBinding486,
    chunk5FUZZQ4RBinding488 = chunk5FUZZQ4RBinding30 * chunk5FUZZQ4RBinding486,
    chunk5FUZZQ4RBinding489 =
      (chunk5FUZZQ4RInput60?.width ? chunk5FUZZQ4RInput60?.width : bbox.width) +
      chunk5FUZZQ4RBinding484 * 2 +
      chunk5FUZZQ4RBinding487 -
      chunk5FUZZQ4RBinding487,
    chunk5FUZZQ4RBinding490 = chunk5FUZZQ4RBinding486,
    chunk5FUZZQ4RBinding491 = -chunk5FUZZQ4RBinding489 / 2,
    chunk5FUZZQ4RBinding492 = -chunk5FUZZQ4RBinding490 / 2,
    { cssStyles: chunk5FUZZQ4RBinding493 } = chunk5FUZZQ4RInput60,
    chunk5FUZZQ4RBinding494 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding495 = o(chunk5FUZZQ4RInput60, {}),
    chunk5FUZZQ4RBinding496 = [
      {
        x: chunk5FUZZQ4RBinding491 - chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492,
      },
      {
        x:
          chunk5FUZZQ4RBinding491 +
          chunk5FUZZQ4RBinding489 +
          chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492,
      },
      {
        x:
          chunk5FUZZQ4RBinding491 +
          chunk5FUZZQ4RBinding489 +
          chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492 + chunk5FUZZQ4RBinding490,
      },
      {
        x: chunk5FUZZQ4RBinding491 - chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492 + chunk5FUZZQ4RBinding490,
      },
    ],
    chunk5FUZZQ4RBinding497 = [
      {
        x:
          chunk5FUZZQ4RBinding491 +
          chunk5FUZZQ4RBinding489 -
          chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492 + chunk5FUZZQ4RBinding490,
      },
      {
        x:
          chunk5FUZZQ4RBinding491 +
          chunk5FUZZQ4RBinding489 +
          chunk5FUZZQ4RBinding487 / 2,
        y: chunk5FUZZQ4RBinding492 + chunk5FUZZQ4RBinding490,
      },
      {
        x:
          chunk5FUZZQ4RBinding491 +
          chunk5FUZZQ4RBinding489 +
          chunk5FUZZQ4RBinding487 / 2,
        y:
          chunk5FUZZQ4RBinding492 +
          chunk5FUZZQ4RBinding490 -
          chunk5FUZZQ4RBinding488,
      },
    ];
  chunk5FUZZQ4RInput60.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding495.roughness = 0),
    (chunk5FUZZQ4RBinding495.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding498 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding496),
    chunk5FUZZQ4RBinding499 = chunk5FUZZQ4RBinding494.path(
      chunk5FUZZQ4RBinding498,
      chunk5FUZZQ4RBinding495,
    ),
    chunk5FUZZQ4RBinding500 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding497),
    chunk5FUZZQ4RBinding501 = chunk5FUZZQ4RBinding494.path(
      chunk5FUZZQ4RBinding500,
      {
        ...chunk5FUZZQ4RBinding495,
        fillStyle: "solid",
      },
    ),
    chunk5FUZZQ4RBinding502 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding501,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding502.insert(
      () => chunk5FUZZQ4RBinding499,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding502.attr("class", "basic label-container outer-path"),
    chunk5FUZZQ4RBinding493 &&
      chunk5FUZZQ4RInput60.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding502
        .selectAll("path")
        .attr("style", chunk5FUZZQ4RBinding493),
    nodeStyles &&
      chunk5FUZZQ4RInput60.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding502.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput60, chunk5FUZZQ4RBinding502),
    (chunk5FUZZQ4RInput60.intersect = function (chunk5FUZZQ4RInput381) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput60,
        chunk5FUZZQ4RBinding496,
        chunk5FUZZQ4RInput381,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper64(
  chunk5FUZZQ4RInput51,
  chunk5FUZZQ4RInput52,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput52);
  chunk5FUZZQ4RInput52.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput51,
      chunk5FUZZQ4RInput52,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput52),
    ),
    chunk5FUZZQ4RBinding428 = Math.max(
      bbox.width + (chunk5FUZZQ4RInput52.padding ?? 0) * 2,
      chunk5FUZZQ4RInput52?.width ?? 0,
    ),
    chunk5FUZZQ4RBinding429 = Math.max(
      bbox.height + (chunk5FUZZQ4RInput52.padding ?? 0) * 2,
      chunk5FUZZQ4RInput52?.height ?? 0,
    ),
    chunk5FUZZQ4RBinding430 = chunk5FUZZQ4RBinding429 / 8,
    chunk5FUZZQ4RBinding431 = 0.2 * chunk5FUZZQ4RBinding428,
    chunk5FUZZQ4RBinding432 = 0.2 * chunk5FUZZQ4RBinding429,
    chunk5FUZZQ4RBinding433 = chunk5FUZZQ4RBinding429 + chunk5FUZZQ4RBinding430,
    { cssStyles } = chunk5FUZZQ4RInput52,
    chunk5FUZZQ4RBinding434 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding435 = o(chunk5FUZZQ4RInput52, {});
  chunk5FUZZQ4RInput52.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding435.roughness = 0),
    (chunk5FUZZQ4RBinding435.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding436 = [
      {
        x: -chunk5FUZZQ4RBinding428 / 2 - (chunk5FUZZQ4RBinding428 / 2) * 0.1,
        y: chunk5FUZZQ4RBinding433 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RBinding428 / 2 - (chunk5FUZZQ4RBinding428 / 2) * 0.1,
        chunk5FUZZQ4RBinding433 / 2,
        chunk5FUZZQ4RBinding428 / 2 + (chunk5FUZZQ4RBinding428 / 2) * 0.1,
        chunk5FUZZQ4RBinding433 / 2,
        chunk5FUZZQ4RBinding430,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RBinding428 / 2 + (chunk5FUZZQ4RBinding428 / 2) * 0.1,
        y: -chunk5FUZZQ4RBinding433 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding428 / 2 - (chunk5FUZZQ4RBinding428 / 2) * 0.1,
        y: -chunk5FUZZQ4RBinding433 / 2,
      },
    ],
    chunk5FUZZQ4RBinding437 =
      -chunk5FUZZQ4RBinding428 / 2 + (chunk5FUZZQ4RBinding428 / 2) * 0.1,
    chunk5FUZZQ4RBinding438 =
      -chunk5FUZZQ4RBinding433 / 2 - chunk5FUZZQ4RBinding432 * 0.4,
    chunk5FUZZQ4RBinding439 = [
      {
        x:
          chunk5FUZZQ4RBinding437 +
          chunk5FUZZQ4RBinding428 -
          chunk5FUZZQ4RBinding431,
        y: (chunk5FUZZQ4RBinding438 + chunk5FUZZQ4RBinding429) * 1.3,
      },
      {
        x: chunk5FUZZQ4RBinding437 + chunk5FUZZQ4RBinding428,
        y:
          chunk5FUZZQ4RBinding438 +
          chunk5FUZZQ4RBinding429 -
          chunk5FUZZQ4RBinding432,
      },
      {
        x: chunk5FUZZQ4RBinding437 + chunk5FUZZQ4RBinding428,
        y: (chunk5FUZZQ4RBinding438 + chunk5FUZZQ4RBinding429) * 0.9,
      },
      ...chunk5FUZZQ4RHelper2(
        chunk5FUZZQ4RBinding437 + chunk5FUZZQ4RBinding428,
        (chunk5FUZZQ4RBinding438 + chunk5FUZZQ4RBinding429) * 1.25,
        chunk5FUZZQ4RBinding437 +
          chunk5FUZZQ4RBinding428 -
          chunk5FUZZQ4RBinding431,
        (chunk5FUZZQ4RBinding438 + chunk5FUZZQ4RBinding429) * 1.3,
        -chunk5FUZZQ4RBinding429 * 0.02,
        0.5,
      ),
    ],
    chunk5FUZZQ4RBinding440 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding436),
    chunk5FUZZQ4RBinding441 = chunk5FUZZQ4RBinding434.path(
      chunk5FUZZQ4RBinding440,
      chunk5FUZZQ4RBinding435,
    ),
    chunk5FUZZQ4RBinding442 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding439),
    chunk5FUZZQ4RBinding443 = chunk5FUZZQ4RBinding434.path(
      chunk5FUZZQ4RBinding442,
      {
        ...chunk5FUZZQ4RBinding435,
        fillStyle: "solid",
      },
    ),
    chunk5FUZZQ4RBinding444 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding443,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding444.insert(
      () => chunk5FUZZQ4RBinding441,
      ":first-child",
    ),
    chunk5FUZZQ4RBinding444.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput52.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding444.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput52.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding444.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding444.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RBinding430 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding428 / 2 + (chunk5FUZZQ4RInput52.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding429 / 2 + (chunk5FUZZQ4RInput52.padding ?? 0) - chunk5FUZZQ4RBinding430 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput52, chunk5FUZZQ4RBinding444),
    (chunk5FUZZQ4RInput52.intersect = function (chunk5FUZZQ4RInput382) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput52,
        chunk5FUZZQ4RBinding436,
        chunk5FUZZQ4RInput382,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper65(
  chunk5FUZZQ4RInput187,
  chunk5FUZZQ4RInput188,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput188);
  chunk5FUZZQ4RInput188.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput187,
      chunk5FUZZQ4RInput188,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput188),
    ),
    chunk5FUZZQ4RBinding933 = Math.max(
      bbox.width + (chunk5FUZZQ4RInput188.padding ?? 0),
      chunk5FUZZQ4RInput188?.width || 0,
    ),
    chunk5FUZZQ4RBinding934 = Math.max(
      bbox.height + (chunk5FUZZQ4RInput188.padding ?? 0),
      chunk5FUZZQ4RInput188?.height || 0,
    ),
    chunk5FUZZQ4RBinding935 = -chunk5FUZZQ4RBinding933 / 2,
    chunk5FUZZQ4RBinding936 = -chunk5FUZZQ4RBinding934 / 2,
    chunk5FUZZQ4RBinding937 = shapeSvg.insert("rect", ":first-child");
  return (
    chunk5FUZZQ4RBinding937
      .attr("class", "text")
      .attr("style", nodeStyles)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", chunk5FUZZQ4RBinding935)
      .attr("y", chunk5FUZZQ4RBinding936)
      .attr("width", chunk5FUZZQ4RBinding933)
      .attr("height", chunk5FUZZQ4RBinding934),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput188, chunk5FUZZQ4RBinding937),
    (chunk5FUZZQ4RInput188.intersect = function (chunk5FUZZQ4RInput410) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput188,
        chunk5FUZZQ4RInput410,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper66(
  chunk5FUZZQ4RInput28,
  chunk5FUZZQ4RInput29,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput29);
  chunk5FUZZQ4RInput29.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding282 = chunk5FUZZQ4RInput29.padding ?? 0,
    chunk5FUZZQ4RBinding283 =
      chunk5FUZZQ4RInput29.look === "neo" ? 12 : chunk5FUZZQ4RBinding282 / 2;
  if (chunk5FUZZQ4RInput29.width || chunk5FUZZQ4RInput29.height) {
    let chunk5FUZZQ4RBinding1144 = chunk5FUZZQ4RInput29.height ?? 0;
    chunk5FUZZQ4RInput29.height =
      (chunk5FUZZQ4RInput29.height ?? 0) - chunk5FUZZQ4RBinding283;
    chunk5FUZZQ4RInput29.height < chunk5FUZZQ4RBinding34 &&
      (chunk5FUZZQ4RInput29.height = chunk5FUZZQ4RBinding34);
    let chunk5FUZZQ4RBinding1145 =
      chunk5FUZZQ4RBinding1144 / 2 / (2.5 + chunk5FUZZQ4RBinding1144 / 50);
    chunk5FUZZQ4RInput29.width =
      (chunk5FUZZQ4RInput29.width ?? 0) -
      chunk5FUZZQ4RBinding283 -
      chunk5FUZZQ4RBinding1145 * 3;
    chunk5FUZZQ4RInput29.width < $t && (chunk5FUZZQ4RInput29.width = $t);
  }
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput28,
      chunk5FUZZQ4RInput29,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput29),
    ),
    chunk5FUZZQ4RBinding284 =
      (chunk5FUZZQ4RInput29.height
        ? chunk5FUZZQ4RInput29.height
        : bbox.height) + chunk5FUZZQ4RBinding283,
    chunk5FUZZQ4RBinding285 = chunk5FUZZQ4RBinding284 / 2,
    chunk5FUZZQ4RBinding286 =
      chunk5FUZZQ4RBinding285 / (2.5 + chunk5FUZZQ4RBinding284 / 50),
    chunk5FUZZQ4RBinding287 =
      (chunk5FUZZQ4RInput29.width ? chunk5FUZZQ4RInput29.width : bbox.width) +
      chunk5FUZZQ4RBinding286 +
      chunk5FUZZQ4RBinding283,
    { cssStyles } = chunk5FUZZQ4RInput29,
    chunk5FUZZQ4RBinding288;
  if (chunk5FUZZQ4RInput29.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1041 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1042 = chunk5FUZZQ4RBinding32(
        0,
        0,
        chunk5FUZZQ4RBinding287,
        chunk5FUZZQ4RBinding284,
        chunk5FUZZQ4RBinding286,
        chunk5FUZZQ4RBinding285,
      ),
      chunk5FUZZQ4RBinding1043 = chunk5FUZZQ4RBinding33(
        0,
        0,
        chunk5FUZZQ4RBinding287,
        chunk5FUZZQ4RBinding284,
        chunk5FUZZQ4RBinding286,
        chunk5FUZZQ4RBinding285,
      ),
      chunk5FUZZQ4RBinding1044 = chunk5FUZZQ4RBinding1041.path(
        chunk5FUZZQ4RBinding1042,
        o(chunk5FUZZQ4RInput29, {}),
      ),
      chunk5FUZZQ4RBinding1045 = chunk5FUZZQ4RBinding1041.path(
        chunk5FUZZQ4RBinding1043,
        o(chunk5FUZZQ4RInput29, {
          fill: "none",
        }),
      );
    chunk5FUZZQ4RBinding288 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1045,
      ":first-child",
    );
    chunk5FUZZQ4RBinding288 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1044,
      ":first-child",
    );
    chunk5FUZZQ4RBinding288.attr("class", "basic label-container");
    cssStyles && chunk5FUZZQ4RBinding288.attr("style", cssStyles);
  } else {
    let chunk5FUZZQ4RBinding1025 = chunk5FUZZQ4RBinding31(
      0,
      0,
      chunk5FUZZQ4RBinding287,
      chunk5FUZZQ4RBinding284,
      chunk5FUZZQ4RBinding286,
      chunk5FUZZQ4RBinding285,
    );
    chunk5FUZZQ4RBinding288 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunk5FUZZQ4RBinding1025)
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles))
      .attr("style", nodeStyles);
    chunk5FUZZQ4RBinding288.attr("class", "basic label-container outer-path");
    cssStyles &&
      chunk5FUZZQ4RBinding288.selectAll("path").attr("style", cssStyles);
    nodeStyles &&
      chunk5FUZZQ4RBinding288.selectAll("path").attr("style", nodeStyles);
  }
  return (
    chunk5FUZZQ4RBinding288.attr("label-offset-x", chunk5FUZZQ4RBinding286),
    chunk5FUZZQ4RBinding288.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding287 / 2}, ${chunk5FUZZQ4RBinding284 / 2} )`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunk5FUZZQ4RBinding286 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput29, chunk5FUZZQ4RBinding288),
    (chunk5FUZZQ4RInput29.intersect = function (chunk5FUZZQ4RInput190) {
      let chunk5FUZZQ4RBinding955 = chunk5FUZZQ4RBinding12.rect(
          chunk5FUZZQ4RInput29,
          chunk5FUZZQ4RInput190,
        ),
        chunk5FUZZQ4RBinding956 =
          chunk5FUZZQ4RBinding955.y - (chunk5FUZZQ4RInput29.y ?? 0);
      if (
        chunk5FUZZQ4RBinding285 != 0 &&
        (Math.abs(chunk5FUZZQ4RBinding956) <
          (chunk5FUZZQ4RInput29.height ?? 0) / 2 ||
          (Math.abs(chunk5FUZZQ4RBinding956) ==
            (chunk5FUZZQ4RInput29.height ?? 0) / 2 &&
            Math.abs(
              chunk5FUZZQ4RBinding955.x - (chunk5FUZZQ4RInput29.x ?? 0),
            ) >
              (chunk5FUZZQ4RInput29.width ?? 0) / 2 - chunk5FUZZQ4RBinding286))
      ) {
        let chunk5FUZZQ4RBinding1163 =
          chunk5FUZZQ4RBinding286 *
          chunk5FUZZQ4RBinding286 *
          (1 -
            (chunk5FUZZQ4RBinding956 * chunk5FUZZQ4RBinding956) /
              (chunk5FUZZQ4RBinding285 * chunk5FUZZQ4RBinding285));
        chunk5FUZZQ4RBinding1163 != 0 &&
          (chunk5FUZZQ4RBinding1163 = Math.sqrt(
            Math.abs(chunk5FUZZQ4RBinding1163),
          ));
        chunk5FUZZQ4RBinding1163 =
          chunk5FUZZQ4RBinding286 - chunk5FUZZQ4RBinding1163;
        chunk5FUZZQ4RInput190.x - (chunk5FUZZQ4RInput29.x ?? 0) > 0 &&
          (chunk5FUZZQ4RBinding1163 = -chunk5FUZZQ4RBinding1163);
        chunk5FUZZQ4RBinding955.x += chunk5FUZZQ4RBinding1163;
      }
      return chunk5FUZZQ4RBinding955;
    }),
    shapeSvg
  );
}
async function $e(chunk5FUZZQ4RInput141, chunk5FUZZQ4RInput142) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput142);
  chunk5FUZZQ4RInput142.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding825 = chunk5FUZZQ4RInput142.padding ?? 0,
    chunk5FUZZQ4RBinding826 =
      (chunk5FUZZQ4RInput142.look, chunk5FUZZQ4RBinding825),
    chunk5FUZZQ4RBinding827 =
      chunk5FUZZQ4RInput142.look === "neo"
        ? chunk5FUZZQ4RBinding825 * 2
        : chunk5FUZZQ4RBinding825,
    { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput141,
      chunk5FUZZQ4RInput142,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput142),
    ),
    chunk5FUZZQ4RBinding828 =
      (chunk5FUZZQ4RInput142?.height ?? bbox.height) + chunk5FUZZQ4RBinding826,
    chunk5FUZZQ4RBinding829 =
      (chunk5FUZZQ4RInput142?.width ?? bbox.width) + chunk5FUZZQ4RBinding827,
    chunk5FUZZQ4RBinding830 = [
      {
        x: (-3 * chunk5FUZZQ4RBinding828) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding829 + (3 * chunk5FUZZQ4RBinding828) / 6,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding829,
        y: -chunk5FUZZQ4RBinding828,
      },
      {
        x: 0,
        y: -chunk5FUZZQ4RBinding828,
      },
    ],
    chunk5FUZZQ4RBinding831,
    { cssStyles } = chunk5FUZZQ4RInput142;
  if (chunk5FUZZQ4RInput142.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1136 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1137 = o(chunk5FUZZQ4RInput142, {}),
      chunk5FUZZQ4RBinding1138 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding830),
      chunk5FUZZQ4RBinding1139 = chunk5FUZZQ4RBinding1136.path(
        chunk5FUZZQ4RBinding1138,
        chunk5FUZZQ4RBinding1137,
      );
    chunk5FUZZQ4RBinding831 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1139, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding829 / 2}, ${chunk5FUZZQ4RBinding828 / 2})`,
      );
    cssStyles && chunk5FUZZQ4RBinding831.attr("style", cssStyles);
  } else
    chunk5FUZZQ4RBinding831 = chunk5FUZZQ4RHelper15(
      shapeSvg,
      chunk5FUZZQ4RBinding829,
      chunk5FUZZQ4RBinding828,
      chunk5FUZZQ4RBinding830,
    );
  return (
    nodeStyles && chunk5FUZZQ4RBinding831.attr("style", nodeStyles),
    (chunk5FUZZQ4RInput142.width = chunk5FUZZQ4RBinding829),
    (chunk5FUZZQ4RInput142.height = chunk5FUZZQ4RBinding828),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput142, chunk5FUZZQ4RBinding831),
    (chunk5FUZZQ4RInput142.intersect = function (chunk5FUZZQ4RInput383) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput142,
        chunk5FUZZQ4RBinding830,
        chunk5FUZZQ4RInput383,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper67(
  chunk5FUZZQ4RInput89,
  chunk5FUZZQ4RInput90,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput90);
  chunk5FUZZQ4RInput90.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding653 = chunk5FUZZQ4RInput90.padding ?? 0,
    chunk5FUZZQ4RBinding654 =
      chunk5FUZZQ4RInput90.look === "neo" ? 16 : chunk5FUZZQ4RBinding653,
    chunk5FUZZQ4RBinding655 =
      chunk5FUZZQ4RInput90.look === "neo" ? 12 : chunk5FUZZQ4RBinding653;
  (chunk5FUZZQ4RInput90.width || chunk5FUZZQ4RInput90.height) &&
    ((chunk5FUZZQ4RInput90.height =
      (chunk5FUZZQ4RInput90.height ?? 0) - chunk5FUZZQ4RBinding655 * 2),
    chunk5FUZZQ4RInput90.height < 5 && (chunk5FUZZQ4RInput90.height = 5),
    (chunk5FUZZQ4RInput90.width =
      (chunk5FUZZQ4RInput90.width ?? 0) - chunk5FUZZQ4RBinding654 * 2),
    chunk5FUZZQ4RInput90.width < 15 && (chunk5FUZZQ4RInput90.width = 15));
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput89,
      chunk5FUZZQ4RInput90,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput90),
    ),
    chunk5FUZZQ4RBinding656 =
      (chunk5FUZZQ4RInput90?.width ? chunk5FUZZQ4RInput90?.width : bbox.width) +
      chunk5FUZZQ4RBinding654 * 2,
    chunk5FUZZQ4RBinding657 =
      (chunk5FUZZQ4RInput90?.height
        ? chunk5FUZZQ4RInput90?.height
        : bbox.height) +
      chunk5FUZZQ4RBinding655 * 2,
    { cssStyles } = chunk5FUZZQ4RInput90,
    chunk5FUZZQ4RBinding658 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding659 = o(chunk5FUZZQ4RInput90, {});
  chunk5FUZZQ4RInput90.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding659.roughness = 0),
    (chunk5FUZZQ4RBinding659.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding660 = [
      {
        x: (-chunk5FUZZQ4RBinding656 / 2) * 0.8,
        y: -chunk5FUZZQ4RBinding657 / 2,
      },
      {
        x: (chunk5FUZZQ4RBinding656 / 2) * 0.8,
        y: -chunk5FUZZQ4RBinding657 / 2,
      },
      {
        x: chunk5FUZZQ4RBinding656 / 2,
        y: (-chunk5FUZZQ4RBinding657 / 2) * 0.6,
      },
      {
        x: chunk5FUZZQ4RBinding656 / 2,
        y: chunk5FUZZQ4RBinding657 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding656 / 2,
        y: chunk5FUZZQ4RBinding657 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding656 / 2,
        y: (-chunk5FUZZQ4RBinding657 / 2) * 0.6,
      },
    ],
    chunk5FUZZQ4RBinding661 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding660),
    chunk5FUZZQ4RBinding662 = chunk5FUZZQ4RBinding658.path(
      chunk5FUZZQ4RBinding661,
      chunk5FUZZQ4RBinding659,
    ),
    chunk5FUZZQ4RBinding663 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding662,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding663.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput90.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding663.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput90.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding663.selectChildren("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput90, chunk5FUZZQ4RBinding663),
    (chunk5FUZZQ4RInput90.intersect = function (chunk5FUZZQ4RInput384) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput90,
        chunk5FUZZQ4RBinding660,
        chunk5FUZZQ4RInput384,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper68(
  chunk5FUZZQ4RInput67,
  chunk5FUZZQ4RInput68,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput68);
  chunk5FUZZQ4RInput68.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding524 = chunk5FUZZQ4RInput68.padding ?? 0,
    chunk5FUZZQ4RBinding525 =
      chunk5FUZZQ4RInput68.look === "neo"
        ? chunk5FUZZQ4RBinding524 * 2
        : chunk5FUZZQ4RBinding524;
  (chunk5FUZZQ4RInput68.width || chunk5FUZZQ4RInput68.height) &&
    ((chunk5FUZZQ4RInput68.width =
      ((chunk5FUZZQ4RInput68?.width ?? 0) - chunk5FUZZQ4RBinding525) / 2),
    chunk5FUZZQ4RInput68.width < chunk5FUZZQ4RBinding36 &&
      (chunk5FUZZQ4RInput68.width = chunk5FUZZQ4RBinding36),
    (chunk5FUZZQ4RInput68.height = chunk5FUZZQ4RInput68?.height ?? 0),
    chunk5FUZZQ4RInput68.height < chunk5FUZZQ4RBinding35 &&
      (chunk5FUZZQ4RInput68.height = chunk5FUZZQ4RBinding35));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput67,
      chunk5FUZZQ4RInput68,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput68),
    ),
    chunk5FUZZQ4RBinding526 = h(b().flowchart?.htmlLabels),
    chunk5FUZZQ4RBinding527 =
      (chunk5FUZZQ4RInput68?.width ? chunk5FUZZQ4RInput68?.width : bbox.width) +
      chunk5FUZZQ4RBinding525,
    chunk5FUZZQ4RBinding528 = chunk5FUZZQ4RInput68?.height
      ? chunk5FUZZQ4RInput68?.height
      : chunk5FUZZQ4RBinding527 + bbox.height,
    chunk5FUZZQ4RBinding529 = chunk5FUZZQ4RBinding528,
    chunk5FUZZQ4RBinding530 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding529,
        y: 0,
      },
      {
        x: chunk5FUZZQ4RBinding529 / 2,
        y: -chunk5FUZZQ4RBinding528,
      },
    ],
    { cssStyles } = chunk5FUZZQ4RInput68,
    chunk5FUZZQ4RBinding531 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding532 = o(chunk5FUZZQ4RInput68, {});
  chunk5FUZZQ4RInput68.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding532.roughness = 0),
    (chunk5FUZZQ4RBinding532.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding533 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding530),
    chunk5FUZZQ4RBinding534 = chunk5FUZZQ4RBinding531.path(
      chunk5FUZZQ4RBinding533,
      chunk5FUZZQ4RBinding532,
    ),
    chunk5FUZZQ4RBinding535 = shapeSvg
      .insert(() => chunk5FUZZQ4RBinding534, ":first-child")
      .attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding528 / 2}, ${chunk5FUZZQ4RBinding528 / 2})`,
      )
      .attr("class", "outer-path");
  return (
    cssStyles &&
      chunk5FUZZQ4RInput68.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding535.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput68.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding535.selectChildren("path").attr("style", nodeStyles),
    (chunk5FUZZQ4RInput68.width = chunk5FUZZQ4RBinding527),
    (chunk5FUZZQ4RInput68.height = chunk5FUZZQ4RBinding528),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput68, chunk5FUZZQ4RBinding535),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunk5FUZZQ4RBinding528 / 2 - (bbox.height + (chunk5FUZZQ4RInput68.padding ?? 0) / (chunk5FUZZQ4RBinding526 ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`,
    ),
    (chunk5FUZZQ4RInput68.intersect = function (chunk5FUZZQ4RInput344) {
      return (
        logger.info(
          "Triangle intersect",
          chunk5FUZZQ4RInput68,
          chunk5FUZZQ4RBinding530,
          chunk5FUZZQ4RInput344,
        ),
        chunk5FUZZQ4RBinding12.polygon(
          chunk5FUZZQ4RInput68,
          chunk5FUZZQ4RBinding530,
          chunk5FUZZQ4RInput344,
        )
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper69(
  chunk5FUZZQ4RInput55,
  chunk5FUZZQ4RInput56,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput56);
  chunk5FUZZQ4RInput56.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding459 = chunk5FUZZQ4RInput56.padding ?? 0,
    chunk5FUZZQ4RBinding460 =
      chunk5FUZZQ4RInput56.look === "neo" ? 16 : chunk5FUZZQ4RBinding459,
    chunk5FUZZQ4RBinding461 =
      chunk5FUZZQ4RInput56.look === "neo" ? 12 : chunk5FUZZQ4RBinding459,
    chunk5FUZZQ4RBinding462 = true;
  (chunk5FUZZQ4RInput56.width || chunk5FUZZQ4RInput56.height) &&
    ((chunk5FUZZQ4RBinding462 = false),
    (chunk5FUZZQ4RInput56.width =
      (chunk5FUZZQ4RInput56?.width ?? 0) - chunk5FUZZQ4RBinding460 * 2),
    chunk5FUZZQ4RInput56.width < 10 && (chunk5FUZZQ4RInput56.width = 10),
    (chunk5FUZZQ4RInput56.height =
      (chunk5FUZZQ4RInput56?.height ?? 0) - chunk5FUZZQ4RBinding461 * 2),
    chunk5FUZZQ4RInput56.height < 10 && (chunk5FUZZQ4RInput56.height = 10));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput55,
      chunk5FUZZQ4RInput56,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput56),
    ),
    chunk5FUZZQ4RBinding463 =
      (chunk5FUZZQ4RInput56?.width ? chunk5FUZZQ4RInput56?.width : bbox.width) +
      (chunk5FUZZQ4RBinding460 ?? 0) * 2,
    chunk5FUZZQ4RBinding464 =
      (chunk5FUZZQ4RInput56?.height
        ? chunk5FUZZQ4RInput56?.height
        : bbox.height) +
      (chunk5FUZZQ4RBinding461 ?? 0) * 2,
    chunk5FUZZQ4RBinding465 =
      chunk5FUZZQ4RInput56.look === "neo"
        ? chunk5FUZZQ4RBinding464 / 4
        : chunk5FUZZQ4RBinding464 / 8,
    chunk5FUZZQ4RBinding466 =
      chunk5FUZZQ4RBinding464 +
      (chunk5FUZZQ4RBinding462
        ? chunk5FUZZQ4RBinding465
        : -chunk5FUZZQ4RBinding465),
    { cssStyles } = chunk5FUZZQ4RInput56,
    chunk5FUZZQ4RBinding467 = 14 - chunk5FUZZQ4RBinding463,
    chunk5FUZZQ4RBinding468 =
      chunk5FUZZQ4RBinding467 > 0 ? chunk5FUZZQ4RBinding467 / 2 : 0,
    chunk5FUZZQ4RBinding469 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding470 = o(chunk5FUZZQ4RInput56, {});
  chunk5FUZZQ4RInput56.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding470.roughness = 0),
    (chunk5FUZZQ4RBinding470.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding471 = [
      {
        x: -chunk5FUZZQ4RBinding463 / 2 - chunk5FUZZQ4RBinding468,
        y: chunk5FUZZQ4RBinding466 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RBinding463 / 2 - chunk5FUZZQ4RBinding468,
        chunk5FUZZQ4RBinding466 / 2,
        chunk5FUZZQ4RBinding463 / 2 + chunk5FUZZQ4RBinding468,
        chunk5FUZZQ4RBinding466 / 2,
        chunk5FUZZQ4RBinding465,
        0.8,
      ),
      {
        x: chunk5FUZZQ4RBinding463 / 2 + chunk5FUZZQ4RBinding468,
        y: -chunk5FUZZQ4RBinding466 / 2,
      },
      {
        x: -chunk5FUZZQ4RBinding463 / 2 - chunk5FUZZQ4RBinding468,
        y: -chunk5FUZZQ4RBinding466 / 2,
      },
    ],
    chunk5FUZZQ4RBinding472 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding471),
    chunk5FUZZQ4RBinding473 = chunk5FUZZQ4RBinding469.path(
      chunk5FUZZQ4RBinding472,
      chunk5FUZZQ4RBinding470,
    ),
    chunk5FUZZQ4RBinding474 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding473,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding474.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput56.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding474.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput56.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding474.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding474.attr(
      "transform",
      `translate(0,${-chunk5FUZZQ4RBinding465 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding463 / 2 + (chunk5FUZZQ4RInput56.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunk5FUZZQ4RBinding464 / 2 + (chunk5FUZZQ4RInput56.padding ?? 0) - chunk5FUZZQ4RBinding465 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput56, chunk5FUZZQ4RBinding474),
    (chunk5FUZZQ4RInput56.intersect = function (chunk5FUZZQ4RInput385) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput56,
        chunk5FUZZQ4RBinding471,
        chunk5FUZZQ4RInput385,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper70(
  chunk5FUZZQ4RInput79,
  chunk5FUZZQ4RInput80,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput80);
  chunk5FUZZQ4RInput80.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding588 = chunk5FUZZQ4RInput80.padding ?? 0,
    chunk5FUZZQ4RBinding589 =
      chunk5FUZZQ4RInput80.look === "neo" ? 16 : chunk5FUZZQ4RBinding588,
    chunk5FUZZQ4RBinding590 =
      chunk5FUZZQ4RInput80.look === "neo" ? 20 : chunk5FUZZQ4RBinding588;
  if (chunk5FUZZQ4RInput80.width || chunk5FUZZQ4RInput80.height) {
    chunk5FUZZQ4RInput80.width = chunk5FUZZQ4RInput80?.width ?? 0;
    chunk5FUZZQ4RInput80.width < 20 && (chunk5FUZZQ4RInput80.width = 20);
    chunk5FUZZQ4RInput80.height = chunk5FUZZQ4RInput80?.height ?? 0;
    chunk5FUZZQ4RInput80.height < 10 && (chunk5FUZZQ4RInput80.height = 10);
    let chunk5FUZZQ4RBinding1086 = Math.min(
      chunk5FUZZQ4RInput80.height * 0.2,
      chunk5FUZZQ4RInput80.height / 4,
    );
    chunk5FUZZQ4RInput80.height = Math.ceil(
      chunk5FUZZQ4RInput80.height -
        chunk5FUZZQ4RBinding590 -
        2.2222222222222223 * chunk5FUZZQ4RBinding1086,
    );
    chunk5FUZZQ4RInput80.width -= chunk5FUZZQ4RBinding589 * 2;
  }
  let { shapeSvg, bbox } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput79,
      chunk5FUZZQ4RInput80,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput80),
    ),
    chunk5FUZZQ4RBinding591 =
      (chunk5FUZZQ4RInput80?.width ? chunk5FUZZQ4RInput80?.width : bbox.width) +
      chunk5FUZZQ4RBinding589 * 2,
    chunk5FUZZQ4RBinding592 =
      (chunk5FUZZQ4RInput80?.height
        ? chunk5FUZZQ4RInput80?.height
        : bbox.height) + chunk5FUZZQ4RBinding590,
    chunk5FUZZQ4RBinding593 = chunk5FUZZQ4RBinding592 / 8,
    chunk5FUZZQ4RBinding594 =
      chunk5FUZZQ4RBinding592 + chunk5FUZZQ4RBinding593 * 2,
    { cssStyles } = chunk5FUZZQ4RInput80,
    chunk5FUZZQ4RBinding595 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding596 = o(chunk5FUZZQ4RInput80, {});
  chunk5FUZZQ4RInput80.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding596.roughness = 0),
    (chunk5FUZZQ4RBinding596.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding597 = [
      {
        x: -chunk5FUZZQ4RBinding591 / 2,
        y: chunk5FUZZQ4RBinding594 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        -chunk5FUZZQ4RBinding591 / 2,
        chunk5FUZZQ4RBinding594 / 2,
        chunk5FUZZQ4RBinding591 / 2,
        chunk5FUZZQ4RBinding594 / 2,
        chunk5FUZZQ4RBinding593,
        1,
      ),
      {
        x: chunk5FUZZQ4RBinding591 / 2,
        y: -chunk5FUZZQ4RBinding594 / 2,
      },
      ...chunk5FUZZQ4RHelper2(
        chunk5FUZZQ4RBinding591 / 2,
        -chunk5FUZZQ4RBinding594 / 2,
        -chunk5FUZZQ4RBinding591 / 2,
        -chunk5FUZZQ4RBinding594 / 2,
        chunk5FUZZQ4RBinding593,
        -1,
      ),
    ],
    chunk5FUZZQ4RBinding598 = chunk5FUZZQ4RHelper1(chunk5FUZZQ4RBinding597),
    chunk5FUZZQ4RBinding599 = chunk5FUZZQ4RBinding595.path(
      chunk5FUZZQ4RBinding598,
      chunk5FUZZQ4RBinding596,
    ),
    chunk5FUZZQ4RBinding600 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding599,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding600.attr("class", "basic label-container"),
    cssStyles &&
      chunk5FUZZQ4RInput80.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding600.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput80.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding600.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput80, chunk5FUZZQ4RBinding600),
    (chunk5FUZZQ4RInput80.intersect = function (chunk5FUZZQ4RInput386) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput80,
        chunk5FUZZQ4RBinding597,
        chunk5FUZZQ4RInput386,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper71(
  chunk5FUZZQ4RInput53,
  chunk5FUZZQ4RInput54,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput54);
  chunk5FUZZQ4RInput54.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding445 =
      chunk5FUZZQ4RInput54.look === "neo"
        ? 16
        : (chunk5FUZZQ4RInput54.padding ?? 0),
    chunk5FUZZQ4RBinding446 =
      chunk5FUZZQ4RInput54.look === "neo"
        ? 12
        : (chunk5FUZZQ4RInput54.padding ?? 0);
  (chunk5FUZZQ4RInput54.width || chunk5FUZZQ4RInput54.height) &&
    ((chunk5FUZZQ4RInput54.width = Math.max(
      (chunk5FUZZQ4RInput54?.width ?? 0) - chunk5FUZZQ4RBinding445 * 2 - $,
      10,
    )),
    (chunk5FUZZQ4RInput54.height = Math.max(
      (chunk5FUZZQ4RInput54?.height ?? 0) - chunk5FUZZQ4RBinding446 * 2 - $,
      10,
    )));
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput53,
      chunk5FUZZQ4RInput54,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput54),
    ),
    chunk5FUZZQ4RBinding447 =
      (chunk5FUZZQ4RInput54?.width ? chunk5FUZZQ4RInput54?.width : bbox.width) +
      chunk5FUZZQ4RBinding445 * 2 +
      $,
    chunk5FUZZQ4RBinding448 =
      (chunk5FUZZQ4RInput54?.height
        ? chunk5FUZZQ4RInput54?.height
        : bbox.height) +
      chunk5FUZZQ4RBinding446 * 2 +
      $,
    chunk5FUZZQ4RBinding449 = chunk5FUZZQ4RBinding447 - $,
    chunk5FUZZQ4RBinding450 = chunk5FUZZQ4RBinding448 - $,
    chunk5FUZZQ4RBinding451 = -chunk5FUZZQ4RBinding449 / 2,
    chunk5FUZZQ4RBinding452 = -chunk5FUZZQ4RBinding450 / 2,
    { cssStyles } = chunk5FUZZQ4RInput54,
    chunk5FUZZQ4RBinding453 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding454 = o(chunk5FUZZQ4RInput54, {}),
    chunk5FUZZQ4RBinding455 = [
      {
        x: chunk5FUZZQ4RBinding451 - $,
        y: chunk5FUZZQ4RBinding452 - $,
      },
      {
        x: chunk5FUZZQ4RBinding451 - $,
        y: chunk5FUZZQ4RBinding452 + chunk5FUZZQ4RBinding450,
      },
      {
        x: chunk5FUZZQ4RBinding451 + chunk5FUZZQ4RBinding449,
        y: chunk5FUZZQ4RBinding452 + chunk5FUZZQ4RBinding450,
      },
      {
        x: chunk5FUZZQ4RBinding451 + chunk5FUZZQ4RBinding449,
        y: chunk5FUZZQ4RBinding452 - $,
      },
    ],
    chunk5FUZZQ4RBinding456 = `M${chunk5FUZZQ4RBinding451 - $},${chunk5FUZZQ4RBinding452 - $} L${chunk5FUZZQ4RBinding451 + chunk5FUZZQ4RBinding449},${chunk5FUZZQ4RBinding452 - $} L${chunk5FUZZQ4RBinding451 + chunk5FUZZQ4RBinding449},${chunk5FUZZQ4RBinding452 + chunk5FUZZQ4RBinding450} L${chunk5FUZZQ4RBinding451 - $},${chunk5FUZZQ4RBinding452 + chunk5FUZZQ4RBinding450} L${chunk5FUZZQ4RBinding451 - $},${chunk5FUZZQ4RBinding452 - $}
                M${chunk5FUZZQ4RBinding451 - $},${chunk5FUZZQ4RBinding452} L${chunk5FUZZQ4RBinding451 + chunk5FUZZQ4RBinding449},${chunk5FUZZQ4RBinding452}
                M${chunk5FUZZQ4RBinding451},${chunk5FUZZQ4RBinding452 - $} L${chunk5FUZZQ4RBinding451},${chunk5FUZZQ4RBinding452 + chunk5FUZZQ4RBinding450}`;
  chunk5FUZZQ4RInput54.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding454.roughness = 0),
    (chunk5FUZZQ4RBinding454.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding457 = chunk5FUZZQ4RBinding453.path(
      chunk5FUZZQ4RBinding456,
      chunk5FUZZQ4RBinding454,
    ),
    chunk5FUZZQ4RBinding458 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding457,
      ":first-child",
    );
  return (
    chunk5FUZZQ4RBinding458.attr("transform", `translate(${$ / 2}, ${$ / 2})`),
    chunk5FUZZQ4RBinding458.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunk5FUZZQ4RInput54.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding458.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunk5FUZZQ4RInput54.look !== "handDrawn" &&
      chunk5FUZZQ4RBinding458.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) + $ / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + $ / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput54, chunk5FUZZQ4RBinding458),
    (chunk5FUZZQ4RInput54.intersect = function (chunk5FUZZQ4RInput387) {
      return chunk5FUZZQ4RBinding12.polygon(
        chunk5FUZZQ4RInput54,
        chunk5FUZZQ4RBinding455,
        chunk5FUZZQ4RInput387,
      );
    }),
    shapeSvg
  );
}
async function at(chunk5FUZZQ4RInput1, chunk5FUZZQ4RInput2) {
  let chunk5FUZZQ4RBinding42 = chunk5FUZZQ4RInput2;
  chunk5FUZZQ4RBinding42.alias &&
    (chunk5FUZZQ4RInput2.label = chunk5FUZZQ4RBinding42.alias);
  let { theme, themeVariables } = y(),
    { rowEven, rowOdd, nodeBorder, borderColorArray } = themeVariables;
  if (chunk5FUZZQ4RInput2.look === "handDrawn") {
    let { themeVariables: _themeVariables } = y(),
      { background } = _themeVariables;
    await at(chunk5FUZZQ4RInput1, {
      ...chunk5FUZZQ4RInput2,
      id: chunk5FUZZQ4RInput2.id + "-background",
      domId:
        (chunk5FUZZQ4RInput2.domId || chunk5FUZZQ4RInput2.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${background}`],
    });
  }
  let chunk5FUZZQ4RBinding43 = y();
  chunk5FUZZQ4RInput2.useHtmlLabels = chunk5FUZZQ4RBinding43.htmlLabels;
  let chunk5FUZZQ4RBinding44 = chunk5FUZZQ4RBinding43.er?.diagramPadding ?? 10,
    chunk5FUZZQ4RBinding45 = chunk5FUZZQ4RBinding43.er?.entityPadding ?? 6,
    { cssStyles } = chunk5FUZZQ4RInput2,
    { labelStyles: chunk5FUZZQ4RBinding46, nodeStyles } =
      a(chunk5FUZZQ4RInput2);
  if (
    chunk5FUZZQ4RBinding42.attributes.length === 0 &&
    chunk5FUZZQ4RInput2.label
  ) {
    let chunk5FUZZQ4RBinding946 = {
      rx: 0,
      ry: 0,
      labelPaddingX: chunk5FUZZQ4RBinding44,
      labelPaddingY: chunk5FUZZQ4RBinding44 * 1.5,
      classes: "",
    };
    chunk5PVQY5BWN(chunk5FUZZQ4RInput2.label, chunk5FUZZQ4RBinding43) +
      chunk5FUZZQ4RBinding946.labelPaddingX * 2 <
      chunk5FUZZQ4RBinding43.er.minEntityWidth &&
      (chunk5FUZZQ4RInput2.width = chunk5FUZZQ4RBinding43.er.minEntityWidth);
    let chunk5FUZZQ4RBinding947 = await chunk5FUZZQ4RHelper41(
      chunk5FUZZQ4RInput1,
      chunk5FUZZQ4RInput2,
      chunk5FUZZQ4RBinding946,
    );
    if (theme != null && chunk5FUZZQ4RBinding37.has(theme)) {
      let chunk5FUZZQ4RBinding1236 = chunk5FUZZQ4RBinding42.colorIndex ?? 0;
      chunk5FUZZQ4RBinding947.attr(
        "data-color-id",
        `color-${chunk5FUZZQ4RBinding1236 % borderColorArray.length}`,
      );
    }
    if (!h(chunk5FUZZQ4RBinding43.htmlLabels)) {
      let chunk5FUZZQ4RBinding1204 = chunk5FUZZQ4RBinding947.select("text"),
        chunk5FUZZQ4RBinding1205 = chunk5FUZZQ4RBinding1204.node()?.getBBox();
      chunk5FUZZQ4RBinding1204.attr(
        "transform",
        `translate(${-chunk5FUZZQ4RBinding1205.width / 2}, 0)`,
      );
    }
    return chunk5FUZZQ4RBinding947;
  }
  chunk5FUZZQ4RBinding43.htmlLabels ||
    ((chunk5FUZZQ4RBinding44 *= 1.25), (chunk5FUZZQ4RBinding45 *= 1.25));
  let chunk5FUZZQ4RBinding47 = chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput2);
  chunk5FUZZQ4RBinding47 ||= "node default";
  let chunk5FUZZQ4RBinding48 = chunk5FUZZQ4RInput1
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding47)
      .attr("id", chunk5FUZZQ4RInput2.domId || chunk5FUZZQ4RInput2.id),
    chunk5FUZZQ4RBinding49 = await chunk5FUZZQ4RHelper72(
      chunk5FUZZQ4RBinding48,
      chunk5FUZZQ4RInput2.label ?? "",
      chunk5FUZZQ4RBinding43,
      0,
      0,
      ["name"],
      chunk5FUZZQ4RBinding46,
    );
  chunk5FUZZQ4RBinding49.height += chunk5FUZZQ4RBinding45;
  let chunk5FUZZQ4RBinding50 = 0,
    chunk5FUZZQ4RBinding51 = [],
    chunk5FUZZQ4RBinding52 = [],
    chunk5FUZZQ4RBinding53 = 0,
    chunk5FUZZQ4RBinding54 = 0,
    chunk5FUZZQ4RBinding55 = 0,
    chunk5FUZZQ4RBinding56 = 0,
    chunk5FUZZQ4RBinding57 = true,
    chunk5FUZZQ4RBinding58 = true;
  for (let chunk5FUZZQ4RBinding948 of chunk5FUZZQ4RBinding42.attributes) {
    let chunk5FUZZQ4RBinding949 = await chunk5FUZZQ4RHelper72(
      chunk5FUZZQ4RBinding48,
      chunk5FUZZQ4RBinding948.type,
      chunk5FUZZQ4RBinding43,
      0,
      chunk5FUZZQ4RBinding50,
      ["attribute-type"],
      chunk5FUZZQ4RBinding46,
    );
    chunk5FUZZQ4RBinding53 = Math.max(
      chunk5FUZZQ4RBinding53,
      chunk5FUZZQ4RBinding949.width + chunk5FUZZQ4RBinding44,
    );
    let chunk5FUZZQ4RBinding950 = await chunk5FUZZQ4RHelper72(
      chunk5FUZZQ4RBinding48,
      chunk5FUZZQ4RBinding948.name,
      chunk5FUZZQ4RBinding43,
      0,
      chunk5FUZZQ4RBinding50,
      ["attribute-name"],
      chunk5FUZZQ4RBinding46,
    );
    chunk5FUZZQ4RBinding54 = Math.max(
      chunk5FUZZQ4RBinding54,
      chunk5FUZZQ4RBinding950.width + chunk5FUZZQ4RBinding44,
    );
    let chunk5FUZZQ4RBinding951 = await chunk5FUZZQ4RHelper72(
      chunk5FUZZQ4RBinding48,
      chunk5FUZZQ4RBinding948.keys.join(),
      chunk5FUZZQ4RBinding43,
      0,
      chunk5FUZZQ4RBinding50,
      ["attribute-keys"],
      chunk5FUZZQ4RBinding46,
    );
    chunk5FUZZQ4RBinding55 = Math.max(
      chunk5FUZZQ4RBinding55,
      chunk5FUZZQ4RBinding951.width + chunk5FUZZQ4RBinding44,
    );
    let chunk5FUZZQ4RBinding952 = await chunk5FUZZQ4RHelper72(
      chunk5FUZZQ4RBinding48,
      chunk5FUZZQ4RBinding948.comment,
      chunk5FUZZQ4RBinding43,
      0,
      chunk5FUZZQ4RBinding50,
      ["attribute-comment"],
      chunk5FUZZQ4RBinding46,
    );
    chunk5FUZZQ4RBinding56 = Math.max(
      chunk5FUZZQ4RBinding56,
      chunk5FUZZQ4RBinding952.width + chunk5FUZZQ4RBinding44,
    );
    let chunk5FUZZQ4RBinding953 =
      Math.max(
        chunk5FUZZQ4RBinding949.height,
        chunk5FUZZQ4RBinding950.height,
        chunk5FUZZQ4RBinding951.height,
        chunk5FUZZQ4RBinding952.height,
      ) + chunk5FUZZQ4RBinding45;
    chunk5FUZZQ4RBinding52.push({
      yOffset: chunk5FUZZQ4RBinding50,
      rowHeight: chunk5FUZZQ4RBinding953,
    });
    chunk5FUZZQ4RBinding50 += chunk5FUZZQ4RBinding953;
  }
  let chunk5FUZZQ4RBinding59 = 4;
  chunk5FUZZQ4RBinding55 <= chunk5FUZZQ4RBinding44 &&
    ((chunk5FUZZQ4RBinding57 = false),
    (chunk5FUZZQ4RBinding55 = 0),
    chunk5FUZZQ4RBinding59--);
  chunk5FUZZQ4RBinding56 <= chunk5FUZZQ4RBinding44 &&
    ((chunk5FUZZQ4RBinding58 = false),
    (chunk5FUZZQ4RBinding56 = 0),
    chunk5FUZZQ4RBinding59--);
  let chunk5FUZZQ4RBinding60 = chunk5FUZZQ4RBinding48.node().getBBox();
  if (
    chunk5FUZZQ4RBinding49.width +
      chunk5FUZZQ4RBinding44 * 2 -
      (chunk5FUZZQ4RBinding53 +
        chunk5FUZZQ4RBinding54 +
        chunk5FUZZQ4RBinding55 +
        chunk5FUZZQ4RBinding56) >
    0
  ) {
    let chunk5FUZZQ4RBinding1206 =
      chunk5FUZZQ4RBinding49.width +
      chunk5FUZZQ4RBinding44 * 2 -
      (chunk5FUZZQ4RBinding53 +
        chunk5FUZZQ4RBinding54 +
        chunk5FUZZQ4RBinding55 +
        chunk5FUZZQ4RBinding56);
    chunk5FUZZQ4RBinding53 += chunk5FUZZQ4RBinding1206 / chunk5FUZZQ4RBinding59;
    chunk5FUZZQ4RBinding54 += chunk5FUZZQ4RBinding1206 / chunk5FUZZQ4RBinding59;
    chunk5FUZZQ4RBinding55 > 0 &&
      (chunk5FUZZQ4RBinding55 +=
        chunk5FUZZQ4RBinding1206 / chunk5FUZZQ4RBinding59);
    chunk5FUZZQ4RBinding56 > 0 &&
      (chunk5FUZZQ4RBinding56 +=
        chunk5FUZZQ4RBinding1206 / chunk5FUZZQ4RBinding59);
  }
  let chunk5FUZZQ4RBinding61 =
      chunk5FUZZQ4RBinding53 +
      chunk5FUZZQ4RBinding54 +
      chunk5FUZZQ4RBinding55 +
      chunk5FUZZQ4RBinding56,
    chunk5FUZZQ4RBinding62 = rough.svg(chunk5FUZZQ4RBinding48),
    chunk5FUZZQ4RBinding63 = o(chunk5FUZZQ4RInput2, {});
  chunk5FUZZQ4RInput2.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding63.roughness = 0),
    (chunk5FUZZQ4RBinding63.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding64 = 0;
  chunk5FUZZQ4RBinding52.length > 0 &&
    (chunk5FUZZQ4RBinding64 = chunk5FUZZQ4RBinding52.reduce(
      (accumulator, current) => accumulator + (current?.rowHeight ?? 0),
      0,
    ));
  let chunk5FUZZQ4RBinding65 = Math.max(
      chunk5FUZZQ4RBinding60.width + chunk5FUZZQ4RBinding44 * 2,
      chunk5FUZZQ4RInput2?.width || 0,
      chunk5FUZZQ4RBinding61,
    ),
    chunk5FUZZQ4RBinding66 = Math.max(
      (chunk5FUZZQ4RBinding64 ?? 0) + chunk5FUZZQ4RBinding49.height,
      chunk5FUZZQ4RInput2?.height || 0,
    ),
    chunk5FUZZQ4RBinding67 = -chunk5FUZZQ4RBinding65 / 2,
    chunk5FUZZQ4RBinding68 = -chunk5FUZZQ4RBinding66 / 2;
  if (
    (chunk5FUZZQ4RBinding48
      .selectAll("g:not(:first-child)")
      .each(
        (
          chunk5FUZZQ4RInput182,
          chunk5FUZZQ4RInput183,
          chunk5FUZZQ4RInput184,
        ) => {
          let chunk5FUZZQ4RBinding921 = select(
              chunk5FUZZQ4RInput184[chunk5FUZZQ4RInput183],
            ),
            chunk5FUZZQ4RBinding922 = chunk5FUZZQ4RBinding921.attr("transform"),
            chunk5FUZZQ4RBinding923 = 0,
            chunk5FUZZQ4RBinding924 = 0;
          if (chunk5FUZZQ4RBinding922) {
            let chunk5FUZZQ4RBinding1003 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RBinding922);
            chunk5FUZZQ4RBinding1003 &&
              ((chunk5FUZZQ4RBinding923 = parseFloat(
                chunk5FUZZQ4RBinding1003[1],
              )),
              (chunk5FUZZQ4RBinding924 = parseFloat(
                chunk5FUZZQ4RBinding1003[2],
              )),
              chunk5FUZZQ4RBinding921.attr("class").includes("attribute-name")
                ? (chunk5FUZZQ4RBinding923 += chunk5FUZZQ4RBinding53)
                : chunk5FUZZQ4RBinding921
                      .attr("class")
                      .includes("attribute-keys")
                  ? (chunk5FUZZQ4RBinding923 +=
                      chunk5FUZZQ4RBinding53 + chunk5FUZZQ4RBinding54)
                  : chunk5FUZZQ4RBinding921
                      .attr("class")
                      .includes("attribute-comment") &&
                    (chunk5FUZZQ4RBinding923 +=
                      chunk5FUZZQ4RBinding53 +
                      chunk5FUZZQ4RBinding54 +
                      chunk5FUZZQ4RBinding55));
          }
          chunk5FUZZQ4RBinding921.attr(
            "transform",
            `translate(${chunk5FUZZQ4RBinding67 + chunk5FUZZQ4RBinding44 / 2 + chunk5FUZZQ4RBinding923}, ${chunk5FUZZQ4RBinding924 + chunk5FUZZQ4RBinding68 + chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding45 / 2})`,
          );
        },
      ),
    chunk5FUZZQ4RBinding48
      .select(".name")
      .attr(
        "transform",
        "translate(" +
          -chunk5FUZZQ4RBinding49.width / 2 +
          ", " +
          (chunk5FUZZQ4RBinding68 + chunk5FUZZQ4RBinding45 / 2) +
          ")",
      ),
    theme != null && chunk5FUZZQ4RBinding37.has(theme))
  ) {
    let chunk5FUZZQ4RBinding1238 = chunk5FUZZQ4RBinding42.colorIndex ?? 0;
    chunk5FUZZQ4RBinding48.attr(
      "data-color-id",
      `color-${chunk5FUZZQ4RBinding1238 % borderColorArray.length}`,
    );
  }
  let chunk5FUZZQ4RBinding69 = chunk5FUZZQ4RBinding62.rectangle(
      chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding68,
      chunk5FUZZQ4RBinding65,
      chunk5FUZZQ4RBinding66,
      chunk5FUZZQ4RBinding63,
    ),
    chunk5FUZZQ4RBinding70 = chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding69, ":first-child")
      .attr("class", "outer-path")
      .attr("style", cssStyles.join(""));
  chunk5FUZZQ4RBinding51.push(0);
  for (let [
    chunk5FUZZQ4RBinding1039,
    chunk5FUZZQ4RBinding1040,
  ] of chunk5FUZZQ4RBinding52.entries()) {
    let chunk5FUZZQ4RBinding1051 =
        (chunk5FUZZQ4RBinding1039 + 1) % 2 == 0 &&
        chunk5FUZZQ4RBinding1040.yOffset !== 0,
      chunk5FUZZQ4RBinding1052 = chunk5FUZZQ4RBinding62.rectangle(
        chunk5FUZZQ4RBinding67,
        chunk5FUZZQ4RBinding49.height +
          chunk5FUZZQ4RBinding68 +
          chunk5FUZZQ4RBinding1040?.yOffset,
        chunk5FUZZQ4RBinding65,
        chunk5FUZZQ4RBinding1040?.rowHeight,
        {
          ...chunk5FUZZQ4RBinding63,
          fill: chunk5FUZZQ4RBinding1051 ? rowEven : rowOdd,
          stroke: nodeBorder,
        },
      );
    chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding1052, "g.label")
      .attr("style", cssStyles.join(""))
      .attr("class", `row-rect-${chunk5FUZZQ4RBinding1051 ? "even" : "odd"}`);
  }
  let chunk5FUZZQ4RBinding72 = chunk5FUZZQ4RHelper73(
      chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding68,
      chunk5FUZZQ4RBinding65 + chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding68,
      1e-4,
    ),
    chunk5FUZZQ4RBinding73 = chunk5FUZZQ4RBinding62.polygon(
      chunk5FUZZQ4RBinding72.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding63,
    );
  if (
    (chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding73)
      .attr("class", "divider"),
    (chunk5FUZZQ4RBinding72 = chunk5FUZZQ4RHelper73(
      chunk5FUZZQ4RBinding53 + chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding68,
      chunk5FUZZQ4RBinding53 + chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding66 + chunk5FUZZQ4RBinding68,
      1e-4,
    )),
    (chunk5FUZZQ4RBinding73 = chunk5FUZZQ4RBinding62.polygon(
      chunk5FUZZQ4RBinding72.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding63,
    )),
    chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding73)
      .attr("class", "divider"),
    chunk5FUZZQ4RBinding57)
  ) {
    let chunk5FUZZQ4RBinding1154 =
      chunk5FUZZQ4RBinding53 + chunk5FUZZQ4RBinding54 + chunk5FUZZQ4RBinding67;
    chunk5FUZZQ4RBinding72 = chunk5FUZZQ4RHelper73(
      chunk5FUZZQ4RBinding1154,
      chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding68,
      chunk5FUZZQ4RBinding1154,
      chunk5FUZZQ4RBinding66 + chunk5FUZZQ4RBinding68,
      1e-4,
    );
    chunk5FUZZQ4RBinding73 = chunk5FUZZQ4RBinding62.polygon(
      chunk5FUZZQ4RBinding72.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding63,
    );
    chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding73)
      .attr("class", "divider");
  }
  if (chunk5FUZZQ4RBinding58) {
    let chunk5FUZZQ4RBinding1153 =
      chunk5FUZZQ4RBinding53 +
      chunk5FUZZQ4RBinding54 +
      chunk5FUZZQ4RBinding55 +
      chunk5FUZZQ4RBinding67;
    chunk5FUZZQ4RBinding72 = chunk5FUZZQ4RHelper73(
      chunk5FUZZQ4RBinding1153,
      chunk5FUZZQ4RBinding49.height + chunk5FUZZQ4RBinding68,
      chunk5FUZZQ4RBinding1153,
      chunk5FUZZQ4RBinding66 + chunk5FUZZQ4RBinding68,
      1e-4,
    );
    chunk5FUZZQ4RBinding73 = chunk5FUZZQ4RBinding62.polygon(
      chunk5FUZZQ4RBinding72.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding63,
    );
    chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding73)
      .attr("class", "divider");
  }
  for (let chunk5FUZZQ4RBinding1150 of chunk5FUZZQ4RBinding51) {
    let chunk5FUZZQ4RBinding1164 =
      chunk5FUZZQ4RBinding49.height +
      chunk5FUZZQ4RBinding68 +
      chunk5FUZZQ4RBinding1150;
    chunk5FUZZQ4RBinding72 = chunk5FUZZQ4RHelper73(
      chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding1164,
      chunk5FUZZQ4RBinding65 + chunk5FUZZQ4RBinding67,
      chunk5FUZZQ4RBinding1164,
      1e-4,
    );
    chunk5FUZZQ4RBinding73 = chunk5FUZZQ4RBinding62.polygon(
      chunk5FUZZQ4RBinding72.map((item) => [item.x, item.y]),
      chunk5FUZZQ4RBinding63,
    );
    chunk5FUZZQ4RBinding48
      .insert(() => chunk5FUZZQ4RBinding73)
      .attr("class", "divider");
  }
  if (
    (chunk5FUZZQ4RD(chunk5FUZZQ4RInput2, chunk5FUZZQ4RBinding70),
    nodeStyles && chunk5FUZZQ4RInput2.look !== "handDrawn")
  )
    if (theme != null && chunk5FUZZQ4RBinding38.has(theme))
      chunk5FUZZQ4RBinding48.selectAll("path").attr("style", nodeStyles);
    else {
      let chunk5FUZZQ4RBinding1107 = nodeStyles
        .split(";")
        ?.filter((chunk5FUZZQ4RInput425) =>
          chunk5FUZZQ4RInput425.includes("stroke"),
        )
        ?.map((chunk5FUZZQ4RInput428) => `${chunk5FUZZQ4RInput428}`)
        .join("; ");
      chunk5FUZZQ4RBinding48
        .selectAll("path")
        .attr("style", chunk5FUZZQ4RBinding1107 ?? "");
      chunk5FUZZQ4RBinding48
        .selectAll(".row-rect-even path")
        .attr("style", nodeStyles);
    }
  return (
    (chunk5FUZZQ4RInput2.intersect = function (chunk5FUZZQ4RInput411) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput2,
        chunk5FUZZQ4RInput411,
      );
    }),
    chunk5FUZZQ4RBinding48
  );
}
async function chunk5FUZZQ4RHelper72(
  chunk5FUZZQ4RInput120,
  chunk5FUZZQ4RInput121,
  chunk5FUZZQ4RInput122,
  chunk5FUZZQ4RInput123 = 0,
  chunk5FUZZQ4RInput124 = 0,
  chunk5FUZZQ4RInput125 = [],
  chunk5FUZZQ4RInput126 = "",
) {
  let chunk5FUZZQ4RBinding768 = chunk5FUZZQ4RInput120
    .insert("g")
    .attr("class", `label ${chunk5FUZZQ4RInput125.join(" ")}`)
    .attr(
      "transform",
      `translate(${chunk5FUZZQ4RInput123}, ${chunk5FUZZQ4RInput124})`,
    )
    .attr("style", chunk5FUZZQ4RInput126);
  chunk5FUZZQ4RInput121 !== M(chunk5FUZZQ4RInput121) &&
    ((chunk5FUZZQ4RInput121 = M(chunk5FUZZQ4RInput121)),
    (chunk5FUZZQ4RInput121 = chunk5FUZZQ4RInput121
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")));
  let chunk5FUZZQ4RBinding769 = chunk5FUZZQ4RBinding768.node().appendChild(
    await chunkU2HBQHQKN(
      chunk5FUZZQ4RBinding768,
      chunk5FUZZQ4RInput121,
      {
        width:
          chunk5PVQY5BWN(chunk5FUZZQ4RInput121, chunk5FUZZQ4RInput122) + 100,
        style: chunk5FUZZQ4RInput126,
        useHtmlLabels: chunk5FUZZQ4RInput122.htmlLabels,
      },
      chunk5FUZZQ4RInput122,
    ),
  );
  if (
    chunk5FUZZQ4RInput121.includes("&lt;") ||
    chunk5FUZZQ4RInput121.includes("&gt;")
  ) {
    let chunk5FUZZQ4RBinding1050 = chunk5FUZZQ4RBinding769.children[0];
    for (
      chunk5FUZZQ4RBinding1050.textContent =
        chunk5FUZZQ4RBinding1050.textContent
          .replaceAll("&lt;", "<")
          .replaceAll("&gt;", ">");
      chunk5FUZZQ4RBinding1050.childNodes[0];
    ) {
      chunk5FUZZQ4RBinding1050 = chunk5FUZZQ4RBinding1050.childNodes[0];
      chunk5FUZZQ4RBinding1050.textContent =
        chunk5FUZZQ4RBinding1050.textContent
          .replaceAll("&lt;", "<")
          .replaceAll("&gt;", ">");
    }
  }
  let chunk5FUZZQ4RBinding770 = chunk5FUZZQ4RBinding769.getBBox();
  if (h(chunk5FUZZQ4RInput122.htmlLabels)) {
    let chunk5FUZZQ4RBinding1169 = chunk5FUZZQ4RBinding769.children[0];
    chunk5FUZZQ4RBinding1169.style.textAlign = "start";
    let chunk5FUZZQ4RBinding1170 = select(chunk5FUZZQ4RBinding769);
    chunk5FUZZQ4RBinding770 = chunk5FUZZQ4RBinding1169.getBoundingClientRect();
    chunk5FUZZQ4RBinding1170.attr("width", chunk5FUZZQ4RBinding770.width);
    chunk5FUZZQ4RBinding1170.attr("height", chunk5FUZZQ4RBinding770.height);
  }
  return chunk5FUZZQ4RBinding770;
}
function chunk5FUZZQ4RHelper73(
  chunk5FUZZQ4RInput206,
  chunk5FUZZQ4RInput207,
  chunk5FUZZQ4RInput208,
  chunk5FUZZQ4RInput209,
  chunk5FUZZQ4RInput210,
) {
  return chunk5FUZZQ4RInput206 === chunk5FUZZQ4RInput208
    ? [
        {
          x: chunk5FUZZQ4RInput206 - chunk5FUZZQ4RInput210 / 2,
          y: chunk5FUZZQ4RInput207,
        },
        {
          x: chunk5FUZZQ4RInput206 + chunk5FUZZQ4RInput210 / 2,
          y: chunk5FUZZQ4RInput207,
        },
        {
          x: chunk5FUZZQ4RInput208 + chunk5FUZZQ4RInput210 / 2,
          y: chunk5FUZZQ4RInput209,
        },
        {
          x: chunk5FUZZQ4RInput208 - chunk5FUZZQ4RInput210 / 2,
          y: chunk5FUZZQ4RInput209,
        },
      ]
    : [
        {
          x: chunk5FUZZQ4RInput206,
          y: chunk5FUZZQ4RInput207 - chunk5FUZZQ4RInput210 / 2,
        },
        {
          x: chunk5FUZZQ4RInput206,
          y: chunk5FUZZQ4RInput207 + chunk5FUZZQ4RInput210 / 2,
        },
        {
          x: chunk5FUZZQ4RInput208,
          y: chunk5FUZZQ4RInput209 + chunk5FUZZQ4RInput210 / 2,
        },
        {
          x: chunk5FUZZQ4RInput208,
          y: chunk5FUZZQ4RInput209 - chunk5FUZZQ4RInput210 / 2,
        },
      ];
}
async function chunk5FUZZQ4RHelper74(
  chunk5FUZZQ4RInput61,
  chunk5FUZZQ4RInput62,
  chunk5FUZZQ4RInput63,
  chunk5FUZZQ4RInput64,
  chunk5FUZZQ4RInput65 = chunk5FUZZQ4RInput63.class.padding ?? 12,
) {
  let chunk5FUZZQ4RBinding503 = chunk5FUZZQ4RInput64 ? 0 : 3,
    chunk5FUZZQ4RBinding504 = chunk5FUZZQ4RInput61
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput62))
      .attr("id", chunk5FUZZQ4RInput62.domId || chunk5FUZZQ4RInput62.id),
    chunk5FUZZQ4RBinding505 = null,
    chunk5FUZZQ4RBinding506 = null,
    chunk5FUZZQ4RBinding507 = null,
    chunk5FUZZQ4RBinding508 = null,
    chunk5FUZZQ4RBinding509 = 0,
    chunk5FUZZQ4RBinding510 = 0,
    chunk5FUZZQ4RBinding511 = 0;
  if (
    ((chunk5FUZZQ4RBinding505 = chunk5FUZZQ4RBinding504
      .insert("g")
      .attr("class", "annotation-group text")),
    chunk5FUZZQ4RInput62.annotations.length > 0)
  ) {
    let chunk5FUZZQ4RBinding1226 = chunk5FUZZQ4RInput62.annotations[0];
    await chunk5FUZZQ4RHelper75(
      chunk5FUZZQ4RBinding505,
      {
        text: `\xAB${chunk5FUZZQ4RBinding1226}\xBB`,
      },
      0,
    );
    chunk5FUZZQ4RBinding509 = chunk5FUZZQ4RBinding505.node().getBBox().height;
  }
  chunk5FUZZQ4RBinding506 = chunk5FUZZQ4RBinding504
    .insert("g")
    .attr("class", "label-group text");
  await chunk5FUZZQ4RHelper75(
    chunk5FUZZQ4RBinding506,
    chunk5FUZZQ4RInput62,
    0,
    ["font-weight: bolder"],
  );
  let chunk5FUZZQ4RBinding512 = chunk5FUZZQ4RBinding506.node().getBBox();
  chunk5FUZZQ4RBinding510 = chunk5FUZZQ4RBinding512.height;
  chunk5FUZZQ4RBinding507 = chunk5FUZZQ4RBinding504
    .insert("g")
    .attr("class", "members-group text");
  let chunk5FUZZQ4RBinding513 = 0;
  for (let chunk5FUZZQ4RBinding1233 of chunk5FUZZQ4RInput62.members) {
    let chunk5FUZZQ4RBinding1243 = await chunk5FUZZQ4RHelper75(
      chunk5FUZZQ4RBinding507,
      chunk5FUZZQ4RBinding1233,
      chunk5FUZZQ4RBinding513,
      [chunk5FUZZQ4RBinding1233.parseClassifier()],
    );
    chunk5FUZZQ4RBinding513 +=
      chunk5FUZZQ4RBinding1243 + chunk5FUZZQ4RBinding503;
  }
  chunk5FUZZQ4RBinding511 = chunk5FUZZQ4RBinding507.node().getBBox().height;
  chunk5FUZZQ4RBinding511 <= 0 &&
    (chunk5FUZZQ4RBinding511 = chunk5FUZZQ4RInput65 / 2);
  chunk5FUZZQ4RBinding508 = chunk5FUZZQ4RBinding504
    .insert("g")
    .attr("class", "methods-group text");
  let chunk5FUZZQ4RBinding514 = 0;
  for (let chunk5FUZZQ4RBinding1234 of chunk5FUZZQ4RInput62.methods) {
    let chunk5FUZZQ4RBinding1244 = await chunk5FUZZQ4RHelper75(
      chunk5FUZZQ4RBinding508,
      chunk5FUZZQ4RBinding1234,
      chunk5FUZZQ4RBinding514,
      [chunk5FUZZQ4RBinding1234.parseClassifier()],
    );
    chunk5FUZZQ4RBinding514 +=
      chunk5FUZZQ4RBinding1244 + chunk5FUZZQ4RBinding503;
  }
  let chunk5FUZZQ4RBinding515 = chunk5FUZZQ4RBinding504.node().getBBox();
  if (chunk5FUZZQ4RBinding505 !== null) {
    let chunk5FUZZQ4RBinding1237 = chunk5FUZZQ4RBinding505.node().getBBox();
    chunk5FUZZQ4RBinding505.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding1237.width / 2})`,
    );
  }
  return (
    chunk5FUZZQ4RBinding506.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding512.width / 2}, ${chunk5FUZZQ4RBinding509})`,
    ),
    (chunk5FUZZQ4RBinding515 = chunk5FUZZQ4RBinding504.node().getBBox()),
    chunk5FUZZQ4RBinding507.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RBinding509 + chunk5FUZZQ4RBinding510 + chunk5FUZZQ4RInput65 * 2})`,
    ),
    (chunk5FUZZQ4RBinding515 = chunk5FUZZQ4RBinding504.node().getBBox()),
    chunk5FUZZQ4RBinding508.attr(
      "transform",
      `translate(0, ${chunk5FUZZQ4RBinding509 + chunk5FUZZQ4RBinding510 + (chunk5FUZZQ4RBinding511 ? chunk5FUZZQ4RBinding511 + chunk5FUZZQ4RInput65 * 4 : chunk5FUZZQ4RInput65 * 2)})`,
    ),
    (chunk5FUZZQ4RBinding515 = chunk5FUZZQ4RBinding504.node().getBBox()),
    {
      shapeSvg: chunk5FUZZQ4RBinding504,
      bbox: chunk5FUZZQ4RBinding515,
    }
  );
}
async function chunk5FUZZQ4RHelper75(
  chunk5FUZZQ4RInput24,
  chunk5FUZZQ4RInput25,
  chunk5FUZZQ4RInput26,
  chunk5FUZZQ4RInput27 = [],
) {
  let chunk5FUZZQ4RBinding275 = chunk5FUZZQ4RInput24
      .insert("g")
      .attr("class", "label")
      .attr("style", chunk5FUZZQ4RInput27.join("; ")),
    chunk5FUZZQ4RBinding276 = y(),
    chunk5FUZZQ4RBinding277 =
      "useHtmlLabels" in chunk5FUZZQ4RInput25
        ? chunk5FUZZQ4RInput25.useHtmlLabels
        : (h(chunk5FUZZQ4RBinding276.htmlLabels) ?? true),
    chunk5FUZZQ4RBinding278 = "";
  chunk5FUZZQ4RBinding278 =
    "text" in chunk5FUZZQ4RInput25
      ? chunk5FUZZQ4RInput25.text
      : chunk5FUZZQ4RInput25.label;
  !chunk5FUZZQ4RBinding277 &&
    chunk5FUZZQ4RBinding278.startsWith("\\") &&
    (chunk5FUZZQ4RBinding278 = chunk5FUZZQ4RBinding278.substring(1));
  k(chunk5FUZZQ4RBinding278) && (chunk5FUZZQ4RBinding277 = true);
  let chunk5FUZZQ4RBinding279 = await chunkU2HBQHQKN(
      chunk5FUZZQ4RBinding275,
      z(chunk5PVQY5BWI(chunk5FUZZQ4RBinding278)),
      {
        width:
          chunk5PVQY5BWN(chunk5FUZZQ4RBinding278, chunk5FUZZQ4RBinding276) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunk5FUZZQ4RBinding277,
      },
      chunk5FUZZQ4RBinding276,
    ),
    chunk5FUZZQ4RBinding280,
    chunk5FUZZQ4RBinding281 = 1;
  if (chunk5FUZZQ4RBinding277) {
    let chunk5FUZZQ4RBinding646 = chunk5FUZZQ4RBinding279.children[0],
      chunk5FUZZQ4RBinding647 = select(chunk5FUZZQ4RBinding279);
    chunk5FUZZQ4RBinding281 =
      chunk5FUZZQ4RBinding646.innerHTML.split("<br>").length;
    chunk5FUZZQ4RBinding646.innerHTML.includes("</math>") &&
      (chunk5FUZZQ4RBinding281 +=
        chunk5FUZZQ4RBinding646.innerHTML.split("<mrow>").length - 1);
    let chunk5FUZZQ4RBinding648 =
      chunk5FUZZQ4RBinding646.getElementsByTagName("img");
    if (chunk5FUZZQ4RBinding648) {
      let chunk5FUZZQ4RBinding824 =
        chunk5FUZZQ4RBinding278.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...chunk5FUZZQ4RBinding648].map(
          (item) =>
            new Promise((chunk5FUZZQ4RInput173) => {
              function chunk5FUZZQ4RHelper84() {
                if (
                  ((item.style.display = "flex"),
                  (item.style.flexDirection = "column"),
                  chunk5FUZZQ4RBinding824)
                ) {
                  let chunk5FUZZQ4RBinding1081 =
                      chunk5FUZZQ4RBinding276.fontSize?.toString() ??
                      window.getComputedStyle(document.body).fontSize,
                    chunk5FUZZQ4RBinding1082 =
                      parseInt(chunk5FUZZQ4RBinding1081, 10) * 5 + "px";
                  item.style.minWidth = chunk5FUZZQ4RBinding1082;
                  item.style.maxWidth = chunk5FUZZQ4RBinding1082;
                } else item.style.width = "100%";
                chunk5FUZZQ4RInput173(item);
              }
              defineFunctionName(chunk5FUZZQ4RHelper84, "setupImage");
              setTimeout(() => {
                item.complete && chunk5FUZZQ4RHelper84();
              });
              item.addEventListener("error", chunk5FUZZQ4RHelper84);
              item.addEventListener("load", chunk5FUZZQ4RHelper84);
            }),
        ),
      );
    }
    chunk5FUZZQ4RBinding280 = chunk5FUZZQ4RBinding646.getBoundingClientRect();
    chunk5FUZZQ4RBinding647.attr("width", chunk5FUZZQ4RBinding280.width);
    chunk5FUZZQ4RBinding647.attr("height", chunk5FUZZQ4RBinding280.height);
  } else {
    chunk5FUZZQ4RInput27.includes("font-weight: bolder") &&
      select(chunk5FUZZQ4RBinding279)
        .selectAll("tspan")
        .attr("font-weight", "");
    chunk5FUZZQ4RBinding281 = chunk5FUZZQ4RBinding279.children.length;
    let chunk5FUZZQ4RBinding954 = chunk5FUZZQ4RBinding279.children[0];
    (chunk5FUZZQ4RBinding279.textContent === "" ||
      chunk5FUZZQ4RBinding279.textContent.includes("&gt")) &&
      ((chunk5FUZZQ4RBinding954.textContent =
        chunk5FUZZQ4RBinding278[0] +
        chunk5FUZZQ4RBinding278
          .substring(1)
          .replaceAll("&gt;", ">")
          .replaceAll("&lt;", "<")
          .trim()),
      chunk5FUZZQ4RBinding278[1] === " " &&
        (chunk5FUZZQ4RBinding954.textContent =
          chunk5FUZZQ4RBinding954.textContent[0] +
          " " +
          chunk5FUZZQ4RBinding954.textContent.substring(1)));
    chunk5FUZZQ4RBinding954.textContent === "undefined" &&
      (chunk5FUZZQ4RBinding954.textContent = "");
    chunk5FUZZQ4RBinding280 = chunk5FUZZQ4RBinding279.getBBox();
  }
  return (
    chunk5FUZZQ4RBinding275.attr(
      "transform",
      "translate(0," +
        (-chunk5FUZZQ4RBinding280.height / (2 * chunk5FUZZQ4RBinding281) +
          chunk5FUZZQ4RInput26) +
        ")",
    ),
    chunk5FUZZQ4RBinding280.height
  );
}
async function chunk5FUZZQ4RHelper76(chunk5FUZZQ4RInput3, chunk5FUZZQ4RInput4) {
  let chunk5FUZZQ4RBinding74 = b(),
    { themeVariables } = chunk5FUZZQ4RBinding74,
    { useGradient } = themeVariables,
    chunk5FUZZQ4RBinding75 = chunk5FUZZQ4RBinding74.class.padding ?? 12,
    chunk5FUZZQ4RBinding76 = chunk5FUZZQ4RBinding75,
    chunk5FUZZQ4RBinding77 =
      chunk5FUZZQ4RInput4.useHtmlLabels ??
      h(chunk5FUZZQ4RBinding74.htmlLabels) ??
      true,
    chunk5FUZZQ4RBinding78 = chunk5FUZZQ4RInput4;
  chunk5FUZZQ4RBinding78.annotations = chunk5FUZZQ4RBinding78.annotations ?? [];
  chunk5FUZZQ4RBinding78.members = chunk5FUZZQ4RBinding78.members ?? [];
  chunk5FUZZQ4RBinding78.methods = chunk5FUZZQ4RBinding78.methods ?? [];
  let { shapeSvg, bbox } = await chunk5FUZZQ4RHelper74(
      chunk5FUZZQ4RInput3,
      chunk5FUZZQ4RInput4,
      chunk5FUZZQ4RBinding74,
      chunk5FUZZQ4RBinding77,
      chunk5FUZZQ4RBinding76,
    ),
    { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput4);
  chunk5FUZZQ4RInput4.labelStyle = labelStyles;
  chunk5FUZZQ4RInput4.cssStyles = chunk5FUZZQ4RBinding78.styles || "";
  let chunk5FUZZQ4RBinding79 =
    chunk5FUZZQ4RBinding78.styles?.join(";") || nodeStyles || "";
  chunk5FUZZQ4RInput4.cssStyles ||= chunk5FUZZQ4RBinding79
    .replaceAll("!important", "")
    .split(";");
  let chunk5FUZZQ4RBinding80 =
      chunk5FUZZQ4RBinding78.members.length === 0 &&
      chunk5FUZZQ4RBinding78.methods.length === 0 &&
      !chunk5FUZZQ4RBinding74.class?.hideEmptyMembersBox,
    chunk5FUZZQ4RBinding81 = rough.svg(shapeSvg),
    chunk5FUZZQ4RBinding82 = o(chunk5FUZZQ4RInput4, {});
  chunk5FUZZQ4RInput4.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding82.roughness = 0),
    (chunk5FUZZQ4RBinding82.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding83 = Math.max(
      chunk5FUZZQ4RInput4.width ?? 0,
      bbox.width,
    ),
    chunk5FUZZQ4RBinding84 = Math.max(
      chunk5FUZZQ4RInput4.height ?? 0,
      bbox.height,
    ),
    chunk5FUZZQ4RBinding85 = (chunk5FUZZQ4RInput4.height ?? 0) > bbox.height;
  chunk5FUZZQ4RBinding78.members.length === 0 &&
  chunk5FUZZQ4RBinding78.methods.length === 0
    ? (chunk5FUZZQ4RBinding84 += chunk5FUZZQ4RBinding76)
    : chunk5FUZZQ4RBinding78.members.length > 0 &&
      chunk5FUZZQ4RBinding78.methods.length === 0 &&
      (chunk5FUZZQ4RBinding84 += chunk5FUZZQ4RBinding76 * 2);
  let chunk5FUZZQ4RBinding86 = -chunk5FUZZQ4RBinding83 / 2,
    chunk5FUZZQ4RBinding87 = -chunk5FUZZQ4RBinding84 / 2,
    chunk5FUZZQ4RBinding88 = chunk5FUZZQ4RBinding80
      ? chunk5FUZZQ4RBinding75 * 2
      : chunk5FUZZQ4RBinding78.members.length === 0 &&
          chunk5FUZZQ4RBinding78.methods.length === 0
        ? -chunk5FUZZQ4RBinding75
        : 0;
  chunk5FUZZQ4RBinding85 &&
    (chunk5FUZZQ4RBinding88 = chunk5FUZZQ4RBinding75 * 2);
  let chunk5FUZZQ4RBinding89 = chunk5FUZZQ4RBinding81.rectangle(
      chunk5FUZZQ4RBinding86 - chunk5FUZZQ4RBinding75,
      chunk5FUZZQ4RBinding87 -
        chunk5FUZZQ4RBinding75 -
        (chunk5FUZZQ4RBinding80
          ? chunk5FUZZQ4RBinding75
          : chunk5FUZZQ4RBinding78.members.length === 0 &&
              chunk5FUZZQ4RBinding78.methods.length === 0
            ? -chunk5FUZZQ4RBinding75 / 2
            : 0),
      chunk5FUZZQ4RBinding83 + 2 * chunk5FUZZQ4RBinding75,
      chunk5FUZZQ4RBinding84 +
        2 * chunk5FUZZQ4RBinding75 +
        chunk5FUZZQ4RBinding88,
      chunk5FUZZQ4RBinding82,
    ),
    chunk5FUZZQ4RBinding90 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding89,
      ":first-child",
    );
  chunk5FUZZQ4RBinding90.attr("class", "basic label-container outer-path");
  let chunk5FUZZQ4RBinding91 = chunk5FUZZQ4RBinding90.node().getBBox(),
    chunk5FUZZQ4RBinding92 =
      shapeSvg.select(".annotation-group").node().getBBox().height -
        (chunk5FUZZQ4RBinding80 ? chunk5FUZZQ4RBinding75 / 2 : 0) || 0,
    chunk5FUZZQ4RBinding93 =
      shapeSvg.select(".label-group").node().getBBox().height -
        (chunk5FUZZQ4RBinding80 ? chunk5FUZZQ4RBinding75 / 2 : 0) || 0,
    chunk5FUZZQ4RBinding94 =
      shapeSvg.select(".members-group").node().getBBox().height -
        (chunk5FUZZQ4RBinding80 ? chunk5FUZZQ4RBinding75 / 2 : 0) || 0,
    chunk5FUZZQ4RBinding95 =
      (chunk5FUZZQ4RBinding92 +
        chunk5FUZZQ4RBinding93 +
        chunk5FUZZQ4RBinding87 +
        chunk5FUZZQ4RBinding75 -
        (chunk5FUZZQ4RBinding87 -
          chunk5FUZZQ4RBinding75 -
          (chunk5FUZZQ4RBinding80
            ? chunk5FUZZQ4RBinding75
            : chunk5FUZZQ4RBinding78.members.length === 0 &&
                chunk5FUZZQ4RBinding78.methods.length === 0
              ? -chunk5FUZZQ4RBinding75 / 2
              : 0))) /
      2;
  if (
    (shapeSvg
      .selectAll(".text")
      .each(
        (
          chunk5FUZZQ4RInput117,
          chunk5FUZZQ4RInput118,
          chunk5FUZZQ4RInput119,
        ) => {
          let chunk5FUZZQ4RBinding763 = select(
              chunk5FUZZQ4RInput119[chunk5FUZZQ4RInput118],
            ),
            chunk5FUZZQ4RBinding764 = chunk5FUZZQ4RBinding763.attr("transform"),
            chunk5FUZZQ4RBinding765 = 0;
          if (chunk5FUZZQ4RBinding764) {
            let chunk5FUZZQ4RBinding1228 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RBinding764);
            chunk5FUZZQ4RBinding1228 &&
              (chunk5FUZZQ4RBinding765 = parseFloat(
                chunk5FUZZQ4RBinding1228[2],
              ));
          }
          let chunk5FUZZQ4RBinding766 =
            chunk5FUZZQ4RBinding765 +
            chunk5FUZZQ4RBinding87 +
            chunk5FUZZQ4RBinding75 -
            (chunk5FUZZQ4RBinding80
              ? chunk5FUZZQ4RBinding75
              : chunk5FUZZQ4RBinding78.members.length === 0 &&
                  chunk5FUZZQ4RBinding78.methods.length === 0
                ? -chunk5FUZZQ4RBinding75 / 2
                : 0);
          if (chunk5FUZZQ4RBinding763.attr("class").includes("methods-group")) {
            let chunk5FUZZQ4RBinding1190 = Math.max(
              chunk5FUZZQ4RBinding94,
              chunk5FUZZQ4RBinding76 / 2,
            );
            chunk5FUZZQ4RBinding766 = chunk5FUZZQ4RBinding85
              ? Math.max(
                  chunk5FUZZQ4RBinding95,
                  chunk5FUZZQ4RBinding92 +
                    chunk5FUZZQ4RBinding93 +
                    chunk5FUZZQ4RBinding1190 +
                    chunk5FUZZQ4RBinding87 +
                    chunk5FUZZQ4RBinding76 * 2 +
                    chunk5FUZZQ4RBinding75,
                ) +
                chunk5FUZZQ4RBinding76 * 2
              : chunk5FUZZQ4RBinding92 +
                chunk5FUZZQ4RBinding93 +
                chunk5FUZZQ4RBinding1190 +
                chunk5FUZZQ4RBinding87 +
                chunk5FUZZQ4RBinding76 * 4 +
                chunk5FUZZQ4RBinding75;
          }
          chunk5FUZZQ4RBinding78.members.length === 0 &&
            chunk5FUZZQ4RBinding78.methods.length === 0 &&
            chunk5FUZZQ4RBinding74.class?.hideEmptyMembersBox &&
            (chunk5FUZZQ4RBinding766 =
              chunk5FUZZQ4RBinding78.annotations.length > 0
                ? chunk5FUZZQ4RBinding765 - chunk5FUZZQ4RBinding76
                : chunk5FUZZQ4RBinding765);
          chunk5FUZZQ4RBinding77 || (chunk5FUZZQ4RBinding766 -= 4);
          let chunk5FUZZQ4RBinding767 = chunk5FUZZQ4RBinding86;
          (chunk5FUZZQ4RBinding763.attr("class").includes("label-group") ||
            chunk5FUZZQ4RBinding763
              .attr("class")
              .includes("annotation-group")) &&
            ((chunk5FUZZQ4RBinding767 =
              -chunk5FUZZQ4RBinding763.node()?.getBBox().width / 2 || 0),
            shapeSvg
              .selectAll("text")
              .each(
                function (
                  chunk5FUZZQ4RInput319,
                  chunk5FUZZQ4RInput320,
                  chunk5FUZZQ4RInput321,
                ) {
                  window.getComputedStyle(
                    chunk5FUZZQ4RInput321[chunk5FUZZQ4RInput320],
                  ).textAnchor === "middle" && (chunk5FUZZQ4RBinding767 = 0);
                },
              ));
          chunk5FUZZQ4RBinding763.attr(
            "transform",
            `translate(${chunk5FUZZQ4RBinding767}, ${chunk5FUZZQ4RBinding766})`,
          );
        },
      ),
    chunk5FUZZQ4RBinding78.members.length > 0 ||
      chunk5FUZZQ4RBinding78.methods.length > 0 ||
      chunk5FUZZQ4RBinding80)
  ) {
    let chunk5FUZZQ4RBinding1151 =
        chunk5FUZZQ4RBinding92 +
        chunk5FUZZQ4RBinding93 +
        chunk5FUZZQ4RBinding87 +
        chunk5FUZZQ4RBinding75,
      chunk5FUZZQ4RBinding1152 = chunk5FUZZQ4RBinding81.line(
        chunk5FUZZQ4RBinding91.x,
        chunk5FUZZQ4RBinding1151,
        chunk5FUZZQ4RBinding91.x + chunk5FUZZQ4RBinding91.width,
        chunk5FUZZQ4RBinding1151 + 0.001,
        chunk5FUZZQ4RBinding82,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1152)
      .attr(
        "class",
        `divider${chunk5FUZZQ4RInput4.look === "neo" && !useGradient ? " neo-line" : ""}`,
      )
      .attr("style", chunk5FUZZQ4RBinding79);
  }
  if (
    chunk5FUZZQ4RBinding80 ||
    chunk5FUZZQ4RBinding78.members.length > 0 ||
    chunk5FUZZQ4RBinding78.methods.length > 0
  ) {
    let chunk5FUZZQ4RBinding1053 =
        chunk5FUZZQ4RBinding92 +
        chunk5FUZZQ4RBinding93 +
        chunk5FUZZQ4RBinding94 +
        chunk5FUZZQ4RBinding87 +
        chunk5FUZZQ4RBinding76 * 2 +
        chunk5FUZZQ4RBinding75,
      chunk5FUZZQ4RBinding1054 = chunk5FUZZQ4RBinding81.line(
        chunk5FUZZQ4RBinding91.x,
        chunk5FUZZQ4RBinding85
          ? Math.max(chunk5FUZZQ4RBinding95, chunk5FUZZQ4RBinding1053)
          : chunk5FUZZQ4RBinding1053,
        chunk5FUZZQ4RBinding91.x + chunk5FUZZQ4RBinding91.width,
        (chunk5FUZZQ4RBinding85
          ? Math.max(chunk5FUZZQ4RBinding95, chunk5FUZZQ4RBinding1053)
          : chunk5FUZZQ4RBinding1053) + 0.001,
        chunk5FUZZQ4RBinding82,
      );
    shapeSvg
      .insert(() => chunk5FUZZQ4RBinding1054)
      .attr(
        "class",
        `divider${chunk5FUZZQ4RInput4.look === "neo" && !useGradient ? " neo-line" : ""}`,
      )
      .attr("style", chunk5FUZZQ4RBinding79);
  }
  if (
    (chunk5FUZZQ4RBinding78.look !== "handDrawn" &&
      shapeSvg.selectAll("path").attr("style", chunk5FUZZQ4RBinding79),
    chunk5FUZZQ4RBinding90
      .select(":nth-child(2)")
      .attr("style", chunk5FUZZQ4RBinding79),
    shapeSvg
      .selectAll(".divider")
      .select("path")
      .attr("style", chunk5FUZZQ4RBinding79),
    chunk5FUZZQ4RInput4.labelStyle
      ? shapeSvg.selectAll("span").attr("style", chunk5FUZZQ4RInput4.labelStyle)
      : shapeSvg.selectAll("span").attr("style", chunk5FUZZQ4RBinding79),
    !chunk5FUZZQ4RBinding77)
  ) {
    let chunk5FUZZQ4RBinding1046 = RegExp(/color\s*:\s*([^;]*)/),
      chunk5FUZZQ4RBinding1047 = chunk5FUZZQ4RBinding1046.exec(
        chunk5FUZZQ4RBinding79,
      );
    if (chunk5FUZZQ4RBinding1047) {
      let chunk5FUZZQ4RBinding1235 = chunk5FUZZQ4RBinding1047[0].replace(
        "color",
        "fill",
      );
      shapeSvg.selectAll("tspan").attr("style", chunk5FUZZQ4RBinding1235);
    } else if (labelStyles) {
      let chunk5FUZZQ4RBinding1196 = chunk5FUZZQ4RBinding1046.exec(labelStyles);
      if (chunk5FUZZQ4RBinding1196) {
        let chunk5FUZZQ4RBinding1232 = chunk5FUZZQ4RBinding1196[0].replace(
          "color",
          "fill",
        );
        shapeSvg.selectAll("tspan").attr("style", chunk5FUZZQ4RBinding1232);
      }
    }
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput4, chunk5FUZZQ4RBinding90),
    (chunk5FUZZQ4RInput4.intersect = function (chunk5FUZZQ4RInput412) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput4,
        chunk5FUZZQ4RInput412,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper77(
  chunk5FUZZQ4RInput16,
  chunk5FUZZQ4RInput17,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput17);
  chunk5FUZZQ4RInput17.labelStyle = labelStyles;
  let chunk5FUZZQ4RBinding210 = chunk5FUZZQ4RInput17,
    chunk5FUZZQ4RBinding211 = chunk5FUZZQ4RInput17,
    chunk5FUZZQ4RBinding212 = "verifyMethod" in chunk5FUZZQ4RInput17,
    chunk5FUZZQ4RBinding213 = chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput17),
    { themeVariables } = b(),
    { borderColorArray, requirementEdgeLabelBackground } = themeVariables,
    chunk5FUZZQ4RBinding214 = chunk5FUZZQ4RInput16
      .insert("g")
      .attr("class", chunk5FUZZQ4RBinding213)
      .attr("id", chunk5FUZZQ4RInput17.domId ?? chunk5FUZZQ4RInput17.id),
    chunk5FUZZQ4RBinding215;
  chunk5FUZZQ4RBinding215 = chunk5FUZZQ4RBinding212
    ? await chunk5FUZZQ4RHelper78(
        chunk5FUZZQ4RBinding214,
        `&lt;&lt;${chunk5FUZZQ4RBinding210.type}&gt;&gt;`,
        0,
        chunk5FUZZQ4RInput17.labelStyle,
      )
    : await chunk5FUZZQ4RHelper78(
        chunk5FUZZQ4RBinding214,
        "&lt;&lt;Element&gt;&gt;",
        0,
        chunk5FUZZQ4RInput17.labelStyle,
      );
  let chunk5FUZZQ4RBinding216 = chunk5FUZZQ4RBinding215,
    chunk5FUZZQ4RBinding217 = await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      chunk5FUZZQ4RBinding210.name,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle + "; font-weight: bold;",
    );
  if (
    ((chunk5FUZZQ4RBinding216 += chunk5FUZZQ4RBinding217 + 20),
    chunk5FUZZQ4RBinding212)
  ) {
    let chunk5FUZZQ4RBinding968 = await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding210.requirementId ? `ID: ${chunk5FUZZQ4RBinding210.requirementId}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
    chunk5FUZZQ4RBinding216 += chunk5FUZZQ4RBinding968;
    let chunk5FUZZQ4RBinding969 = await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding210.text ? `Text: ${chunk5FUZZQ4RBinding210.text}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
    chunk5FUZZQ4RBinding216 += chunk5FUZZQ4RBinding969;
    let chunk5FUZZQ4RBinding970 = await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding210.risk ? `Risk: ${chunk5FUZZQ4RBinding210.risk}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
    chunk5FUZZQ4RBinding216 += chunk5FUZZQ4RBinding970;
    await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding210.verifyMethod ? `Verification: ${chunk5FUZZQ4RBinding210.verifyMethod}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
  } else {
    let chunk5FUZZQ4RBinding1179 = await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding211.type ? `Type: ${chunk5FUZZQ4RBinding211.type}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
    chunk5FUZZQ4RBinding216 += chunk5FUZZQ4RBinding1179;
    await chunk5FUZZQ4RHelper78(
      chunk5FUZZQ4RBinding214,
      `${chunk5FUZZQ4RBinding211.docRef ? `Doc Ref: ${chunk5FUZZQ4RBinding211.docRef}` : ""}`,
      chunk5FUZZQ4RBinding216,
      chunk5FUZZQ4RInput17.labelStyle,
    );
  }
  let chunk5FUZZQ4RBinding218 =
      (chunk5FUZZQ4RBinding214.node()?.getBBox().width ?? 200) + 20,
    chunk5FUZZQ4RBinding219 =
      (chunk5FUZZQ4RBinding214.node()?.getBBox().height ?? 200) + 20,
    chunk5FUZZQ4RBinding220 = -chunk5FUZZQ4RBinding218 / 2,
    chunk5FUZZQ4RBinding221 = -chunk5FUZZQ4RBinding219 / 2,
    chunk5FUZZQ4RBinding222 = rough.svg(chunk5FUZZQ4RBinding214),
    chunk5FUZZQ4RBinding223 = o(chunk5FUZZQ4RInput17, {});
  chunk5FUZZQ4RInput17.look !== "handDrawn" &&
    ((chunk5FUZZQ4RBinding223.roughness = 0),
    (chunk5FUZZQ4RBinding223.fillStyle = "solid"));
  let chunk5FUZZQ4RBinding224 = chunk5FUZZQ4RBinding222.rectangle(
      chunk5FUZZQ4RBinding220,
      chunk5FUZZQ4RBinding221,
      chunk5FUZZQ4RBinding218,
      chunk5FUZZQ4RBinding219,
      chunk5FUZZQ4RBinding223,
    ),
    chunk5FUZZQ4RBinding225 = chunk5FUZZQ4RBinding214.insert(
      () => chunk5FUZZQ4RBinding224,
      ":first-child",
    );
  if (
    (chunk5FUZZQ4RBinding225
      .attr("class", "basic label-container outer-path")
      .attr("style", nodeStyles),
    borderColorArray?.length)
  ) {
    let chunk5FUZZQ4RBinding1239 = chunk5FUZZQ4RInput17.colorIndex ?? 0;
    chunk5FUZZQ4RBinding214.attr(
      "data-color-id",
      `color-${chunk5FUZZQ4RBinding1239 % borderColorArray.length}`,
    );
  }
  if (
    (chunk5FUZZQ4RBinding214
      .selectAll(".label")
      .each(
        (
          chunk5FUZZQ4RInput197,
          chunk5FUZZQ4RInput198,
          chunk5FUZZQ4RInput199,
        ) => {
          let chunk5FUZZQ4RBinding1004 = select(
              chunk5FUZZQ4RInput199[chunk5FUZZQ4RInput198],
            ),
            chunk5FUZZQ4RBinding1005 =
              chunk5FUZZQ4RBinding1004.attr("transform"),
            chunk5FUZZQ4RBinding1006 = 0,
            chunk5FUZZQ4RBinding1007 = 0;
          if (chunk5FUZZQ4RBinding1005) {
            let chunk5FUZZQ4RBinding1202 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunk5FUZZQ4RBinding1005);
            chunk5FUZZQ4RBinding1202 &&
              ((chunk5FUZZQ4RBinding1006 = parseFloat(
                chunk5FUZZQ4RBinding1202[1],
              )),
              (chunk5FUZZQ4RBinding1007 = parseFloat(
                chunk5FUZZQ4RBinding1202[2],
              )));
          }
          let chunk5FUZZQ4RBinding1008 =
              chunk5FUZZQ4RBinding1007 - chunk5FUZZQ4RBinding219 / 2,
            chunk5FUZZQ4RBinding1009 = chunk5FUZZQ4RBinding220 + 10;
          (chunk5FUZZQ4RInput198 === 0 || chunk5FUZZQ4RInput198 === 1) &&
            (chunk5FUZZQ4RBinding1009 = chunk5FUZZQ4RBinding1006);
          chunk5FUZZQ4RBinding1004.attr(
            "transform",
            `translate(${chunk5FUZZQ4RBinding1009}, ${chunk5FUZZQ4RBinding1008 + 20})`,
          );
        },
      ),
    chunk5FUZZQ4RBinding216 >
      chunk5FUZZQ4RBinding215 + chunk5FUZZQ4RBinding217 + 20)
  ) {
    let chunk5FUZZQ4RBinding1048 =
        chunk5FUZZQ4RBinding221 +
        chunk5FUZZQ4RBinding215 +
        chunk5FUZZQ4RBinding217 +
        20,
      chunk5FUZZQ4RBinding1049;
    if (chunk5FUZZQ4RInput17.look === "neo") {
      let chunk5FUZZQ4RBinding1182 = [
        [chunk5FUZZQ4RBinding220, chunk5FUZZQ4RBinding1048],
        [
          chunk5FUZZQ4RBinding220 + chunk5FUZZQ4RBinding218,
          chunk5FUZZQ4RBinding1048,
        ],
        [
          chunk5FUZZQ4RBinding220 + chunk5FUZZQ4RBinding218,
          chunk5FUZZQ4RBinding1048 + 0.001,
        ],
        [chunk5FUZZQ4RBinding220, chunk5FUZZQ4RBinding1048 + 0.001],
      ];
      chunk5FUZZQ4RBinding1049 = chunk5FUZZQ4RBinding222.polygon(
        chunk5FUZZQ4RBinding1182,
        chunk5FUZZQ4RBinding223,
      );
    } else
      chunk5FUZZQ4RBinding1049 = chunk5FUZZQ4RBinding222.line(
        chunk5FUZZQ4RBinding220,
        chunk5FUZZQ4RBinding1048,
        chunk5FUZZQ4RBinding220 + chunk5FUZZQ4RBinding218,
        chunk5FUZZQ4RBinding1048,
        chunk5FUZZQ4RBinding223,
      );
    chunk5FUZZQ4RBinding214
      .insert(() => chunk5FUZZQ4RBinding1049)
      .attr("class", "divider");
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput17, chunk5FUZZQ4RBinding225),
    (chunk5FUZZQ4RInput17.intersect = function (chunk5FUZZQ4RInput413) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput17,
        chunk5FUZZQ4RInput413,
      );
    }),
    nodeStyles &&
      chunk5FUZZQ4RInput17.look !== "handDrawn" &&
      (requirementEdgeLabelBackground || borderColorArray?.length) &&
      chunk5FUZZQ4RBinding214.selectAll("path").attr("style", nodeStyles),
    chunk5FUZZQ4RBinding214
  );
}
async function chunk5FUZZQ4RHelper78(
  chunk5FUZZQ4RInput174,
  chunk5FUZZQ4RInput175,
  chunk5FUZZQ4RInput176,
  chunk5FUZZQ4RInput177 = "",
) {
  if (chunk5FUZZQ4RInput175 === "") return 0;
  let chunk5FUZZQ4RBinding901 = chunk5FUZZQ4RInput174
      .insert("g")
      .attr("class", "label")
      .attr("style", chunk5FUZZQ4RInput177),
    chunk5FUZZQ4RBinding902 = b(),
    chunk5FUZZQ4RBinding903 = chunk5FUZZQ4RBinding902.htmlLabels ?? true,
    chunk5FUZZQ4RBinding904 = await chunkU2HBQHQKN(
      chunk5FUZZQ4RBinding901,
      z(chunk5PVQY5BWI(chunk5FUZZQ4RInput175)),
      {
        width:
          chunk5PVQY5BWN(chunk5FUZZQ4RInput175, chunk5FUZZQ4RBinding902) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunk5FUZZQ4RBinding903,
        style: chunk5FUZZQ4RInput177,
      },
      chunk5FUZZQ4RBinding902,
    ),
    chunk5FUZZQ4RBinding905;
  if (chunk5FUZZQ4RBinding903) {
    let chunk5FUZZQ4RBinding1194 = chunk5FUZZQ4RBinding904.children[0],
      chunk5FUZZQ4RBinding1195 = select(chunk5FUZZQ4RBinding904);
    chunk5FUZZQ4RBinding905 = chunk5FUZZQ4RBinding1194.getBoundingClientRect();
    chunk5FUZZQ4RBinding1195.attr("width", chunk5FUZZQ4RBinding905.width);
    chunk5FUZZQ4RBinding1195.attr("height", chunk5FUZZQ4RBinding905.height);
  } else {
    let chunk5FUZZQ4RBinding1201 = chunk5FUZZQ4RBinding904.children[0];
    for (let chunk5FUZZQ4RBinding1247 of chunk5FUZZQ4RBinding1201.children)
      chunk5FUZZQ4RInput177 &&
        chunk5FUZZQ4RBinding1247.setAttribute("style", chunk5FUZZQ4RInput177);
    chunk5FUZZQ4RBinding905 = chunk5FUZZQ4RBinding904.getBBox();
    chunk5FUZZQ4RBinding905.height += 6;
  }
  return (
    chunk5FUZZQ4RBinding901.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding905.width / 2},${-chunk5FUZZQ4RBinding905.height / 2 + chunk5FUZZQ4RInput176})`,
    ),
    chunk5FUZZQ4RBinding905.height
  );
}
async function chunk5FUZZQ4RHelper79(
  chunk5FUZZQ4RInput18,
  chunk5FUZZQ4RInput19,
  { config },
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput19);
  chunk5FUZZQ4RInput19.labelStyle = labelStyles || "";
  let chunk5FUZZQ4RBinding226 = chunk5FUZZQ4RInput19.width;
  chunk5FUZZQ4RInput19.width = (chunk5FUZZQ4RInput19.width ?? 200) - 10;
  let { shapeSvg, bbox, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput18,
      chunk5FUZZQ4RInput19,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput19),
    ),
    chunk5FUZZQ4RBinding227 = chunk5FUZZQ4RInput19.padding || 10,
    chunk5FUZZQ4RBinding228 = "",
    chunk5FUZZQ4RBinding229;
  "ticket" in chunk5FUZZQ4RInput19 &&
    chunk5FUZZQ4RInput19.ticket &&
    config?.kanban?.ticketBaseUrl &&
    ((chunk5FUZZQ4RBinding228 = config?.kanban?.ticketBaseUrl.replace(
      "#TICKET#",
      chunk5FUZZQ4RInput19.ticket,
    )),
    (chunk5FUZZQ4RBinding229 = shapeSvg
      .insert("svg:a", ":first-child")
      .attr("class", "kanban-ticket-link")
      .attr("xlink:href", chunk5FUZZQ4RBinding228)
      .attr("target", "_blank")));
  let chunk5FUZZQ4RBinding230 = {
      useHtmlLabels: chunk5FUZZQ4RInput19.useHtmlLabels,
      labelStyle: chunk5FUZZQ4RInput19.labelStyle || "",
      width: chunk5FUZZQ4RInput19.width,
      img: chunk5FUZZQ4RInput19.img,
      padding: chunk5FUZZQ4RInput19.padding || 8,
      centerLabel: false,
    },
    _label,
    _bbox;
  chunk5FUZZQ4RBinding229
    ? ({ label: _label, bbox: _bbox } = await chunk5FUZZQ4RBinding1(
        chunk5FUZZQ4RBinding229,
        ("ticket" in chunk5FUZZQ4RInput19 && chunk5FUZZQ4RInput19.ticket) || "",
        chunk5FUZZQ4RBinding230,
      ))
    : ({ label: _label, bbox: _bbox } = await chunk5FUZZQ4RBinding1(
        shapeSvg,
        ("ticket" in chunk5FUZZQ4RInput19 && chunk5FUZZQ4RInput19.ticket) || "",
        chunk5FUZZQ4RBinding230,
      ));
  let { label: __label, bbox: chunk5FUZZQ4RBinding231 } =
    await chunk5FUZZQ4RBinding1(
      shapeSvg,
      ("assigned" in chunk5FUZZQ4RInput19 && chunk5FUZZQ4RInput19.assigned) ||
        "",
      chunk5FUZZQ4RBinding230,
    );
  chunk5FUZZQ4RInput19.width = chunk5FUZZQ4RBinding226;
  let chunk5FUZZQ4RBinding232 = chunk5FUZZQ4RInput19?.width || 0,
    chunk5FUZZQ4RBinding233 =
      Math.max(_bbox.height, chunk5FUZZQ4RBinding231.height) / 2,
    chunk5FUZZQ4RBinding234 =
      Math.max(bbox.height + 20, chunk5FUZZQ4RInput19?.height || 0) +
      chunk5FUZZQ4RBinding233,
    chunk5FUZZQ4RBinding235 = -chunk5FUZZQ4RBinding232 / 2,
    chunk5FUZZQ4RBinding236 = -chunk5FUZZQ4RBinding234 / 2;
  label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RBinding227 - chunk5FUZZQ4RBinding232 / 2) +
      ", " +
      (-chunk5FUZZQ4RBinding233 - bbox.height / 2) +
      ")",
  );
  _label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RBinding227 - chunk5FUZZQ4RBinding232 / 2) +
      ", " +
      (-chunk5FUZZQ4RBinding233 + bbox.height / 2) +
      ")",
  );
  __label.attr(
    "transform",
    "translate(" +
      (chunk5FUZZQ4RBinding227 +
        chunk5FUZZQ4RBinding232 / 2 -
        chunk5FUZZQ4RBinding231.width -
        20) +
      ", " +
      (-chunk5FUZZQ4RBinding233 + bbox.height / 2) +
      ")",
  );
  let chunk5FUZZQ4RBinding237,
    { rx, ry } = chunk5FUZZQ4RInput19,
    { cssStyles } = chunk5FUZZQ4RInput19;
  if (chunk5FUZZQ4RInput19.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1098 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1099 = o(chunk5FUZZQ4RInput19, {}),
      chunk5FUZZQ4RBinding1100 =
        rx || ry
          ? chunk5FUZZQ4RBinding1098.path(
              chunk5FUZZQ4RBinding4(
                chunk5FUZZQ4RBinding235,
                chunk5FUZZQ4RBinding236,
                chunk5FUZZQ4RBinding232,
                chunk5FUZZQ4RBinding234,
                rx || 0,
              ),
              chunk5FUZZQ4RBinding1099,
            )
          : chunk5FUZZQ4RBinding1098.rectangle(
              chunk5FUZZQ4RBinding235,
              chunk5FUZZQ4RBinding236,
              chunk5FUZZQ4RBinding232,
              chunk5FUZZQ4RBinding234,
              chunk5FUZZQ4RBinding1099,
            );
    chunk5FUZZQ4RBinding237 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1100,
      ":first-child",
    );
    chunk5FUZZQ4RBinding237
      .attr("class", "basic label-container")
      .attr("style", cssStyles || null);
  } else {
    chunk5FUZZQ4RBinding237 = shapeSvg.insert("rect", ":first-child");
    chunk5FUZZQ4RBinding237
      .attr("class", "basic label-container __APA__")
      .attr("style", nodeStyles)
      .attr("rx", rx ?? 5)
      .attr("ry", ry ?? 5)
      .attr("x", chunk5FUZZQ4RBinding235)
      .attr("y", chunk5FUZZQ4RBinding236)
      .attr("width", chunk5FUZZQ4RBinding232)
      .attr("height", chunk5FUZZQ4RBinding234);
    let chunk5FUZZQ4RBinding932 =
      "priority" in chunk5FUZZQ4RInput19 && chunk5FUZZQ4RInput19.priority;
    if (chunk5FUZZQ4RBinding932) {
      let chunk5FUZZQ4RBinding1055 = shapeSvg.append("line"),
        chunk5FUZZQ4RBinding1056 = chunk5FUZZQ4RBinding235 + 2,
        chunk5FUZZQ4RBinding1057 =
          chunk5FUZZQ4RBinding236 + Math.floor((rx ?? 0) / 2),
        chunk5FUZZQ4RBinding1058 =
          chunk5FUZZQ4RBinding236 +
          chunk5FUZZQ4RBinding234 -
          Math.floor((rx ?? 0) / 2);
      chunk5FUZZQ4RBinding1055
        .attr("x1", chunk5FUZZQ4RBinding1056)
        .attr("y1", chunk5FUZZQ4RBinding1057)
        .attr("x2", chunk5FUZZQ4RBinding1056)
        .attr("y2", chunk5FUZZQ4RBinding1058)
        .attr("stroke-width", "4")
        .attr("stroke", chunk5FUZZQ4RBinding39(chunk5FUZZQ4RBinding932));
    }
  }
  return (
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput19, chunk5FUZZQ4RBinding237),
    (chunk5FUZZQ4RInput19.height = chunk5FUZZQ4RBinding234),
    (chunk5FUZZQ4RInput19.intersect = function (chunk5FUZZQ4RInput414) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput19,
        chunk5FUZZQ4RInput414,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper80(
  chunk5FUZZQ4RInput47,
  chunk5FUZZQ4RInput48,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput48);
  chunk5FUZZQ4RInput48.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput47,
      chunk5FUZZQ4RInput48,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput48),
    ),
    chunk5FUZZQ4RBinding397 = bbox.width + 10 * halfPadding,
    chunk5FUZZQ4RBinding398 = bbox.height + 8 * halfPadding,
    chunk5FUZZQ4RBinding399 = 0.15 * chunk5FUZZQ4RBinding397,
    { cssStyles } = chunk5FUZZQ4RInput48,
    chunk5FUZZQ4RBinding400 = bbox.width + 20,
    chunk5FUZZQ4RBinding401 = bbox.height + 20,
    chunk5FUZZQ4RBinding402 = Math.max(
      chunk5FUZZQ4RBinding397,
      chunk5FUZZQ4RBinding400,
    ),
    chunk5FUZZQ4RBinding403 = Math.max(
      chunk5FUZZQ4RBinding398,
      chunk5FUZZQ4RBinding401,
    );
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  let chunk5FUZZQ4RBinding404,
    chunk5FUZZQ4RBinding405 = `M0 0 
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.25},${-1 * chunk5FUZZQ4RBinding403 * 0.1}
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.25},0
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.25},0
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.25},${chunk5FUZZQ4RBinding403 * 0.1}

    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.15},${chunk5FUZZQ4RBinding403 * 0.33}
    a${chunk5FUZZQ4RBinding399 * 0.8},${chunk5FUZZQ4RBinding399 * 0.8} 1 0,0 0,${chunk5FUZZQ4RBinding403 * 0.34}
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.15},${chunk5FUZZQ4RBinding403 * 0.33}

    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.25},${chunk5FUZZQ4RBinding403 * 0.15}
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.25},0
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.25},0
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.25},${-1 * chunk5FUZZQ4RBinding403 * 0.15}

    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${-1 * chunk5FUZZQ4RBinding402 * 0.1},${-1 * chunk5FUZZQ4RBinding403 * 0.33}
    a${chunk5FUZZQ4RBinding399 * 0.8},${chunk5FUZZQ4RBinding399 * 0.8} 1 0,0 0,${-1 * chunk5FUZZQ4RBinding403 * 0.34}
    a${chunk5FUZZQ4RBinding399},${chunk5FUZZQ4RBinding399} 1 0,0 ${chunk5FUZZQ4RBinding402 * 0.1},${-1 * chunk5FUZZQ4RBinding403 * 0.33}
  H0 V0 Z`;
  if (chunk5FUZZQ4RInput48.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1173 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1174 = o(chunk5FUZZQ4RInput48, {}),
      chunk5FUZZQ4RBinding1175 = chunk5FUZZQ4RBinding1173.path(
        chunk5FUZZQ4RBinding405,
        chunk5FUZZQ4RBinding1174,
      );
    chunk5FUZZQ4RBinding404 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1175,
      ":first-child",
    );
    chunk5FUZZQ4RBinding404
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles));
  } else
    chunk5FUZZQ4RBinding404 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunk5FUZZQ4RBinding405);
  return (
    chunk5FUZZQ4RBinding404.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding402 / 2}, ${-chunk5FUZZQ4RBinding403 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput48, chunk5FUZZQ4RBinding404),
    (chunk5FUZZQ4RInput48.calcIntersect = function (
      chunk5FUZZQ4RInput394,
      chunk5FUZZQ4RInput395,
    ) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput394,
        chunk5FUZZQ4RInput395,
      );
    }),
    (chunk5FUZZQ4RInput48.intersect = function (chunk5FUZZQ4RInput351) {
      return (
        logger.info(
          "Bang intersect",
          chunk5FUZZQ4RInput48,
          chunk5FUZZQ4RInput351,
        ),
        chunk5FUZZQ4RBinding12.rect(chunk5FUZZQ4RInput48, chunk5FUZZQ4RInput351)
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper81(
  chunk5FUZZQ4RInput57,
  chunk5FUZZQ4RInput58,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput58);
  chunk5FUZZQ4RInput58.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput57,
      chunk5FUZZQ4RInput58,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput58),
    ),
    chunk5FUZZQ4RBinding475 = bbox.width + 2 * halfPadding,
    chunk5FUZZQ4RBinding476 = bbox.height + 2 * halfPadding,
    chunk5FUZZQ4RBinding477 = 0.15 * chunk5FUZZQ4RBinding475,
    chunk5FUZZQ4RBinding478 = 0.25 * chunk5FUZZQ4RBinding475,
    chunk5FUZZQ4RBinding479 = 0.35 * chunk5FUZZQ4RBinding475,
    chunk5FUZZQ4RBinding480 = 0.2 * chunk5FUZZQ4RBinding475,
    { cssStyles } = chunk5FUZZQ4RInput58,
    chunk5FUZZQ4RBinding481,
    chunk5FUZZQ4RBinding482 = `M0 0 
    a${chunk5FUZZQ4RBinding477},${chunk5FUZZQ4RBinding477} 0 0,1 ${chunk5FUZZQ4RBinding475 * 0.25},${-1 * chunk5FUZZQ4RBinding475 * 0.1}
    a${chunk5FUZZQ4RBinding479},${chunk5FUZZQ4RBinding479} 1 0,1 ${chunk5FUZZQ4RBinding475 * 0.4},${-1 * chunk5FUZZQ4RBinding475 * 0.1}
    a${chunk5FUZZQ4RBinding478},${chunk5FUZZQ4RBinding478} 1 0,1 ${chunk5FUZZQ4RBinding475 * 0.35},${chunk5FUZZQ4RBinding475 * 0.2}

    a${chunk5FUZZQ4RBinding477},${chunk5FUZZQ4RBinding477} 1 0,1 ${chunk5FUZZQ4RBinding475 * 0.15},${chunk5FUZZQ4RBinding476 * 0.35}
    a${chunk5FUZZQ4RBinding480},${chunk5FUZZQ4RBinding480} 1 0,1 ${-1 * chunk5FUZZQ4RBinding475 * 0.15},${chunk5FUZZQ4RBinding476 * 0.65}

    a${chunk5FUZZQ4RBinding478},${chunk5FUZZQ4RBinding477} 1 0,1 ${-1 * chunk5FUZZQ4RBinding475 * 0.25},${chunk5FUZZQ4RBinding475 * 0.15}
    a${chunk5FUZZQ4RBinding479},${chunk5FUZZQ4RBinding479} 1 0,1 ${-1 * chunk5FUZZQ4RBinding475 * 0.5},0
    a${chunk5FUZZQ4RBinding477},${chunk5FUZZQ4RBinding477} 1 0,1 ${-1 * chunk5FUZZQ4RBinding475 * 0.25},${-1 * chunk5FUZZQ4RBinding475 * 0.15}

    a${chunk5FUZZQ4RBinding477},${chunk5FUZZQ4RBinding477} 1 0,1 ${-1 * chunk5FUZZQ4RBinding475 * 0.1},${-1 * chunk5FUZZQ4RBinding476 * 0.35}
    a${chunk5FUZZQ4RBinding480},${chunk5FUZZQ4RBinding480} 1 0,1 ${chunk5FUZZQ4RBinding475 * 0.1},${-1 * chunk5FUZZQ4RBinding476 * 0.65}
  H0 V0 Z`;
  if (chunk5FUZZQ4RInput58.look === "handDrawn") {
    let chunk5FUZZQ4RBinding1176 = rough.svg(shapeSvg),
      chunk5FUZZQ4RBinding1177 = o(chunk5FUZZQ4RInput58, {}),
      chunk5FUZZQ4RBinding1178 = chunk5FUZZQ4RBinding1176.path(
        chunk5FUZZQ4RBinding482,
        chunk5FUZZQ4RBinding1177,
      );
    chunk5FUZZQ4RBinding481 = shapeSvg.insert(
      () => chunk5FUZZQ4RBinding1178,
      ":first-child",
    );
    chunk5FUZZQ4RBinding481
      .attr("class", "basic label-container")
      .attr("style", chunk5PVQY5BWL(cssStyles));
  } else
    chunk5FUZZQ4RBinding481 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunk5FUZZQ4RBinding482);
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    chunk5FUZZQ4RBinding481.attr(
      "transform",
      `translate(${-chunk5FUZZQ4RBinding475 / 2}, ${-chunk5FUZZQ4RBinding476 / 2})`,
    ),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput58, chunk5FUZZQ4RBinding481),
    (chunk5FUZZQ4RInput58.calcIntersect = function (
      chunk5FUZZQ4RInput396,
      chunk5FUZZQ4RInput397,
    ) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput396,
        chunk5FUZZQ4RInput397,
      );
    }),
    (chunk5FUZZQ4RInput58.intersect = function (chunk5FUZZQ4RInput350) {
      return (
        logger.info(
          "Cloud intersect",
          chunk5FUZZQ4RInput58,
          chunk5FUZZQ4RInput350,
        ),
        chunk5FUZZQ4RBinding12.rect(chunk5FUZZQ4RInput58, chunk5FUZZQ4RInput350)
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper82(
  chunk5FUZZQ4RInput87,
  chunk5FUZZQ4RInput88,
) {
  let { labelStyles, nodeStyles } = a(chunk5FUZZQ4RInput88);
  chunk5FUZZQ4RInput88.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunk5FUZZQ4RC(
      chunk5FUZZQ4RInput87,
      chunk5FUZZQ4RInput88,
      chunk5FUZZQ4RBinding2(chunk5FUZZQ4RInput88),
    ),
    chunk5FUZZQ4RBinding649 = bbox.width + 8 * halfPadding,
    chunk5FUZZQ4RBinding650 = bbox.height + 2 * halfPadding,
    chunk5FUZZQ4RBinding651 =
      chunk5FUZZQ4RInput88.look === "neo"
        ? `
    M${-chunk5FUZZQ4RBinding649 / 2} ${chunk5FUZZQ4RBinding650 / 2 - 5}
    v${-chunk5FUZZQ4RBinding650 + 10}
    q0,-5 5,-5
    h${chunk5FUZZQ4RBinding649 - 10}
    q5,0 5,5
    v${chunk5FUZZQ4RBinding650 - 5}
    H${-chunk5FUZZQ4RBinding649 / 2}
    Z
  `
        : `
    M${-chunk5FUZZQ4RBinding649 / 2} ${chunk5FUZZQ4RBinding650 / 2 - 5}
    v${-chunk5FUZZQ4RBinding650 + 10}
    q0,-5 5,-5
    h${chunk5FUZZQ4RBinding649 - 10}
    q5,0 5,5
    v${chunk5FUZZQ4RBinding650 - 10}
    q0,5 -5,5
    h${-(chunk5FUZZQ4RBinding649 - 10)}
    q-5,0 -5,-5
    Z
  `;
  if (!chunk5FUZZQ4RInput88.domId)
    throw Error(
      `defaultMindmapNode: node "${chunk5FUZZQ4RInput88.id}" is missing a domId \u2014 was render.ts domId prefixing skipped?`,
    );
  let chunk5FUZZQ4RBinding652 = shapeSvg
    .append("path")
    .attr("id", chunk5FUZZQ4RInput88.domId)
    .attr("class", "node-bkg node-" + chunk5FUZZQ4RInput88.type)
    .attr("style", nodeStyles)
    .attr("d", chunk5FUZZQ4RBinding651);
  return (
    shapeSvg
      .append("line")
      .attr("class", "node-line-")
      .attr("x1", -chunk5FUZZQ4RBinding649 / 2)
      .attr("y1", chunk5FUZZQ4RBinding650 / 2)
      .attr("x2", chunk5FUZZQ4RBinding649 / 2)
      .attr("y2", chunk5FUZZQ4RBinding650 / 2),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    shapeSvg.append(() => label.node()),
    chunk5FUZZQ4RD(chunk5FUZZQ4RInput88, chunk5FUZZQ4RBinding652),
    (chunk5FUZZQ4RInput88.calcIntersect = function (
      chunk5FUZZQ4RInput398,
      chunk5FUZZQ4RInput399,
    ) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput398,
        chunk5FUZZQ4RInput399,
      );
    }),
    (chunk5FUZZQ4RInput88.intersect = function (chunk5FUZZQ4RInput415) {
      return chunk5FUZZQ4RBinding12.rect(
        chunk5FUZZQ4RInput88,
        chunk5FUZZQ4RInput415,
      );
    }),
    shapeSvg
  );
}
async function chunk5FUZZQ4RHelper83(
  chunk5FUZZQ4RInput352,
  chunk5FUZZQ4RInput353,
) {
  return chunk5FUZZQ4RHelper18(chunk5FUZZQ4RInput352, chunk5FUZZQ4RInput353, {
    padding: chunk5FUZZQ4RInput353.padding ?? 0,
  });
}
function chunk5FUZZQ4RS(chunk5FUZZQ4RInput424) {
  return chunk5FUZZQ4RInput424 in chunk5FUZZQ4RBinding40;
}
async function chunk5FUZZQ4RO(
  chunk5FUZZQ4RInput170,
  chunk5FUZZQ4RInput171,
  chunk5FUZZQ4RInput172,
) {
  let chunk5FUZZQ4RBinding894, chunk5FUZZQ4RBinding895;
  chunk5FUZZQ4RInput171.shape === "rect" &&
    (chunk5FUZZQ4RInput171.rx && chunk5FUZZQ4RInput171.ry
      ? (chunk5FUZZQ4RInput171.shape = "roundedRect")
      : (chunk5FUZZQ4RInput171.shape = "squareRect"));
  let chunk5FUZZQ4RBinding896 = chunk5FUZZQ4RInput171.shape
    ? chunk5FUZZQ4RBinding40[chunk5FUZZQ4RInput171.shape]
    : undefined;
  if (!chunk5FUZZQ4RBinding896)
    throw Error(
      `No such shape: ${chunk5FUZZQ4RInput171.shape}. Please check your syntax.`,
    );
  if (chunk5FUZZQ4RInput171.link) {
    let chunk5FUZZQ4RBinding1088;
    chunk5FUZZQ4RInput172.config.securityLevel === "sandbox"
      ? (chunk5FUZZQ4RBinding1088 = "_top")
      : chunk5FUZZQ4RInput171.linkTarget &&
        (chunk5FUZZQ4RBinding1088 =
          chunk5FUZZQ4RInput171.linkTarget || "_blank");
    chunk5FUZZQ4RBinding894 = chunk5FUZZQ4RInput170
      .insert("svg:a")
      .attr("xlink:href", chunk5FUZZQ4RInput171.link)
      .attr("target", chunk5FUZZQ4RBinding1088 ?? null);
    chunk5FUZZQ4RBinding895 = await chunk5FUZZQ4RBinding896(
      chunk5FUZZQ4RBinding894,
      chunk5FUZZQ4RInput171,
      chunk5FUZZQ4RInput172,
    );
  } else {
    chunk5FUZZQ4RBinding895 = await chunk5FUZZQ4RBinding896(
      chunk5FUZZQ4RInput170,
      chunk5FUZZQ4RInput171,
      chunk5FUZZQ4RInput172,
    );
    chunk5FUZZQ4RBinding894 = chunk5FUZZQ4RBinding895;
  }
  return (
    chunk5FUZZQ4RBinding894.attr(
      "data-look",
      chunk5PVQY5BWL(chunk5FUZZQ4RInput171.look),
    ),
    chunk5FUZZQ4RInput171.tooltip &&
      chunk5FUZZQ4RBinding895.attr("title", chunk5FUZZQ4RInput171.tooltip),
    chunk5FUZZQ4RBinding41.set(
      chunk5FUZZQ4RInput171.id,
      chunk5FUZZQ4RBinding894,
    ),
    chunk5FUZZQ4RInput171.haveCallback &&
      chunk5FUZZQ4RBinding894.attr(
        "class",
        chunk5FUZZQ4RBinding894.attr("class") + " clickable",
      ),
    chunk5FUZZQ4RBinding894
  );
}
var chunk5FUZZQ4RC,
  chunk5FUZZQ4RBinding1,
  chunk5FUZZQ4RD,
  chunk5FUZZQ4RBinding2,
  chunk5FUZZQ4RBinding3,
  chunk5FUZZQ4RR,
  chunk5FUZZQ4RBinding4,
  chunk5FUZZQ4RBinding5,
  chunk5FUZZQ4RBinding6,
  chunk5FUZZQ4RBinding7,
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RT,
  chunk5FUZZQ4RBinding8,
  chunk5FUZZQ4RBinding9,
  chunk5FUZZQ4RBinding10,
  chunk5FUZZQ4RBinding11,
  chunk5FUZZQ4RBinding12,
  chunk5FUZZQ4RBinding13,
  chunk5FUZZQ4RBinding14,
  chunk5FUZZQ4RBinding15,
  chunk5FUZZQ4RBinding16,
  chunk5FUZZQ4RBinding17,
  chunk5FUZZQ4RBinding18,
  chunk5FUZZQ4RBinding19,
  chunk5FUZZQ4RBinding20,
  chunk5FUZZQ4RBinding21,
  chunk5FUZZQ4RBinding22,
  chunk5FUZZQ4RBinding23,
  chunk5FUZZQ4RBinding24,
  chunk5FUZZQ4RBinding25,
  chunk5FUZZQ4RBinding26,
  chunk5FUZZQ4RBinding27,
  chunk5FUZZQ4RBinding28,
  chunk5FUZZQ4RBinding29,
  chunk5FUZZQ4RBinding30,
  chunk5FUZZQ4RBinding31,
  chunk5FUZZQ4RBinding32,
  chunk5FUZZQ4RBinding33,
  chunk5FUZZQ4RBinding34,
  $t,
  chunk5FUZZQ4RBinding35,
  chunk5FUZZQ4RBinding36,
  $,
  chunk5FUZZQ4RBinding37,
  chunk5FUZZQ4RBinding38,
  chunk5FUZZQ4RBinding39,
  on,
  chunk5FUZZQ4RBinding40,
  chunk5FUZZQ4RBinding41,
  chunk5FUZZQ4RU,
  chunk5FUZZQ4RN,
  chunk5FUZZQ4RL;
export const chunk5FUZZQ4RI = esmInit(() => {
  initSubGraphTitleMarginsAlt();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  rough();
  chunk5FUZZQ4RC = defineFunctionName(
    async (
      chunk5FUZZQ4RInput44,
      chunk5FUZZQ4RInput45,
      chunk5FUZZQ4RInput46,
    ) => {
      let chunk5FUZZQ4RBinding387,
        chunk5FUZZQ4RBinding388 =
          chunk5FUZZQ4RInput45.useHtmlLabels || h(b()?.htmlLabels);
      chunk5FUZZQ4RBinding387 = chunk5FUZZQ4RInput46 || "node default";
      let chunk5FUZZQ4RBinding389 = chunk5FUZZQ4RInput44
          .insert("g")
          .attr("class", chunk5FUZZQ4RBinding387)
          .attr("id", chunk5FUZZQ4RInput45.domId || chunk5FUZZQ4RInput45.id),
        chunk5FUZZQ4RBinding390 = chunk5FUZZQ4RBinding389
          .insert("g")
          .attr("class", "label")
          .attr("style", chunk5PVQY5BWL(chunk5FUZZQ4RInput45.labelStyle)),
        chunk5FUZZQ4RBinding391;
      chunk5FUZZQ4RBinding391 =
        chunk5FUZZQ4RInput45.label === undefined
          ? ""
          : typeof chunk5FUZZQ4RInput45.label == "string"
            ? chunk5FUZZQ4RInput45.label
            : chunk5FUZZQ4RInput45.label[0];
      let chunk5FUZZQ4RBinding392 =
          !!chunk5FUZZQ4RInput45.icon || !!chunk5FUZZQ4RInput45.img,
        chunk5FUZZQ4RBinding393 = chunk5FUZZQ4RInput45.labelType === "markdown",
        chunk5FUZZQ4RBinding394 = await chunkU2HBQHQKN(
          chunk5FUZZQ4RBinding390,
          R(chunk5PVQY5BWI(chunk5FUZZQ4RBinding391), b()),
          {
            useHtmlLabels: chunk5FUZZQ4RBinding388,
            width: chunk5FUZZQ4RInput45.width || b().flowchart?.wrappingWidth,
            classes: chunk5FUZZQ4RBinding393 ? "markdown-node-label" : "",
            style: chunk5FUZZQ4RInput45.labelStyle,
            addSvgBackground: chunk5FUZZQ4RBinding392,
            markdown: chunk5FUZZQ4RBinding393,
          },
          b(),
        ),
        chunk5FUZZQ4RBinding395 = chunk5FUZZQ4RBinding394.getBBox(),
        chunk5FUZZQ4RBinding396 = (chunk5FUZZQ4RInput45?.padding ?? 0) / 2;
      if (chunk5FUZZQ4RBinding388) {
        let chunk5FUZZQ4RBinding1148 = chunk5FUZZQ4RBinding394.children[0],
          chunk5FUZZQ4RBinding1149 = select(chunk5FUZZQ4RBinding394);
        await configureLabelImages(
          chunk5FUZZQ4RBinding1148,
          chunk5FUZZQ4RBinding391,
        );
        chunk5FUZZQ4RBinding395 =
          chunk5FUZZQ4RBinding1148.getBoundingClientRect();
        chunk5FUZZQ4RBinding1149.attr("width", chunk5FUZZQ4RBinding395.width);
        chunk5FUZZQ4RBinding1149.attr("height", chunk5FUZZQ4RBinding395.height);
      }
      return (
        chunk5FUZZQ4RBinding388
          ? chunk5FUZZQ4RBinding390.attr(
              "transform",
              "translate(" +
                -chunk5FUZZQ4RBinding395.width / 2 +
                ", " +
                -chunk5FUZZQ4RBinding395.height / 2 +
                ")",
            )
          : chunk5FUZZQ4RBinding390.attr(
              "transform",
              "translate(0, " + -chunk5FUZZQ4RBinding395.height / 2 + ")",
            ),
        chunk5FUZZQ4RInput45.centerLabel &&
          chunk5FUZZQ4RBinding390.attr(
            "transform",
            "translate(" +
              -chunk5FUZZQ4RBinding395.width / 2 +
              ", " +
              -chunk5FUZZQ4RBinding395.height / 2 +
              ")",
          ),
        chunk5FUZZQ4RBinding390.insert("rect", ":first-child"),
        {
          shapeSvg: chunk5FUZZQ4RBinding389,
          bbox: chunk5FUZZQ4RBinding395,
          halfPadding: chunk5FUZZQ4RBinding396,
          label: chunk5FUZZQ4RBinding390,
        }
      );
    },
    "labelHelper",
  );
  chunk5FUZZQ4RBinding1 = defineFunctionName(
    async (
      chunk5FUZZQ4RInput97,
      chunk5FUZZQ4RInput98,
      chunk5FUZZQ4RInput99,
    ) => {
      let chunk5FUZZQ4RBinding695 =
          chunk5FUZZQ4RInput99.useHtmlLabels ?? w(b()),
        chunk5FUZZQ4RBinding696 = chunk5FUZZQ4RInput97
          .insert("g")
          .attr("class", "label")
          .attr("style", chunk5FUZZQ4RInput99.labelStyle || ""),
        chunk5FUZZQ4RBinding697 = await chunkU2HBQHQKN(
          chunk5FUZZQ4RBinding696,
          R(chunk5PVQY5BWI(chunk5FUZZQ4RInput98), b()),
          {
            useHtmlLabels: chunk5FUZZQ4RBinding695,
            width: chunk5FUZZQ4RInput99.width || b()?.flowchart?.wrappingWidth,
            style: chunk5FUZZQ4RInput99.labelStyle,
            addSvgBackground:
              !!chunk5FUZZQ4RInput99.icon || !!chunk5FUZZQ4RInput99.img,
          },
        ),
        chunk5FUZZQ4RBinding698 = chunk5FUZZQ4RBinding697.getBBox(),
        chunk5FUZZQ4RBinding699 = chunk5FUZZQ4RInput99.padding / 2;
      if (w(b())) {
        let chunk5FUZZQ4RBinding1165 = chunk5FUZZQ4RBinding697.children[0],
          chunk5FUZZQ4RBinding1166 = select(chunk5FUZZQ4RBinding697);
        chunk5FUZZQ4RBinding698 =
          chunk5FUZZQ4RBinding1165.getBoundingClientRect();
        chunk5FUZZQ4RBinding1166.attr("width", chunk5FUZZQ4RBinding698.width);
        chunk5FUZZQ4RBinding1166.attr("height", chunk5FUZZQ4RBinding698.height);
      }
      return (
        chunk5FUZZQ4RBinding695
          ? chunk5FUZZQ4RBinding696.attr(
              "transform",
              "translate(" +
                -chunk5FUZZQ4RBinding698.width / 2 +
                ", " +
                -chunk5FUZZQ4RBinding698.height / 2 +
                ")",
            )
          : chunk5FUZZQ4RBinding696.attr(
              "transform",
              "translate(0, " + -chunk5FUZZQ4RBinding698.height / 2 + ")",
            ),
        chunk5FUZZQ4RInput99.centerLabel &&
          chunk5FUZZQ4RBinding696.attr(
            "transform",
            "translate(" +
              -chunk5FUZZQ4RBinding698.width / 2 +
              ", " +
              -chunk5FUZZQ4RBinding698.height / 2 +
              ")",
          ),
        chunk5FUZZQ4RBinding696.insert("rect", ":first-child"),
        {
          shapeSvg: chunk5FUZZQ4RInput97,
          bbox: chunk5FUZZQ4RBinding698,
          halfPadding: chunk5FUZZQ4RBinding699,
          label: chunk5FUZZQ4RBinding696,
        }
      );
    },
    "insertLabel",
  );
  chunk5FUZZQ4RD = defineFunctionName(
    (chunk5FUZZQ4RInput317, chunk5FUZZQ4RInput318) => {
      let chunk5FUZZQ4RBinding1229 = chunk5FUZZQ4RInput318.node().getBBox();
      chunk5FUZZQ4RInput317.width = chunk5FUZZQ4RBinding1229.width;
      chunk5FUZZQ4RInput317.height = chunk5FUZZQ4RBinding1229.height;
    },
    "updateNodeBounds",
  );
  chunk5FUZZQ4RBinding2 = defineFunctionName(
    (chunk5FUZZQ4RInput306, chunk5FUZZQ4RInput307) =>
      (chunk5FUZZQ4RInput306.look === "handDrawn" ? "rough-node" : "node") +
      " " +
      chunk5FUZZQ4RInput306.cssClasses +
      " " +
      (chunk5FUZZQ4RInput307 || ""),
    "getNodeClasses",
  );
  defineFunctionName(chunk5FUZZQ4RHelper1, "createPathFromPoints");
  defineFunctionName(chunk5FUZZQ4RHelper2, "generateFullSineWavePoints");
  defineFunctionName(chunk5FUZZQ4RHelper3, "generateCirclePoints");
  defineFunctionName(chunk5FUZZQ4RHelper4, "mergePaths");
  chunk5FUZZQ4RBinding3 = defineFunctionName(
    (chunk5FUZZQ4RInput195, chunk5FUZZQ4RInput196) => {
      var chunk5FUZZQ4RBinding971 = chunk5FUZZQ4RInput195.x,
        chunk5FUZZQ4RBinding972 = chunk5FUZZQ4RInput195.y,
        chunk5FUZZQ4RBinding973 =
          chunk5FUZZQ4RInput196.x - chunk5FUZZQ4RBinding971,
        chunk5FUZZQ4RBinding974 =
          chunk5FUZZQ4RInput196.y - chunk5FUZZQ4RBinding972,
        chunk5FUZZQ4RBinding975 = chunk5FUZZQ4RInput195.width / 2,
        chunk5FUZZQ4RBinding976 = chunk5FUZZQ4RInput195.height / 2,
        chunk5FUZZQ4RBinding977,
        chunk5FUZZQ4RBinding978;
      return (
        Math.abs(chunk5FUZZQ4RBinding974) * chunk5FUZZQ4RBinding975 >
        Math.abs(chunk5FUZZQ4RBinding973) * chunk5FUZZQ4RBinding976
          ? (chunk5FUZZQ4RBinding974 < 0 &&
              (chunk5FUZZQ4RBinding976 = -chunk5FUZZQ4RBinding976),
            (chunk5FUZZQ4RBinding977 =
              chunk5FUZZQ4RBinding974 === 0
                ? 0
                : (chunk5FUZZQ4RBinding976 * chunk5FUZZQ4RBinding973) /
                  chunk5FUZZQ4RBinding974),
            (chunk5FUZZQ4RBinding978 = chunk5FUZZQ4RBinding976))
          : (chunk5FUZZQ4RBinding973 < 0 &&
              (chunk5FUZZQ4RBinding975 = -chunk5FUZZQ4RBinding975),
            (chunk5FUZZQ4RBinding977 = chunk5FUZZQ4RBinding975),
            (chunk5FUZZQ4RBinding978 =
              chunk5FUZZQ4RBinding973 === 0
                ? 0
                : (chunk5FUZZQ4RBinding975 * chunk5FUZZQ4RBinding974) /
                  chunk5FUZZQ4RBinding973)),
        {
          x: chunk5FUZZQ4RBinding971 + chunk5FUZZQ4RBinding977,
          y: chunk5FUZZQ4RBinding972 + chunk5FUZZQ4RBinding978,
        }
      );
    },
    "intersectRect",
  );
  chunk5FUZZQ4RR = defineFunctionName(
    async (
      chunk5FUZZQ4RInput200,
      chunk5FUZZQ4RInput201,
      chunk5FUZZQ4RInput202,
      chunk5FUZZQ4RInput203 = false,
      chunk5FUZZQ4RInput204 = false,
    ) => {
      let chunk5FUZZQ4RBinding1010 = chunk5FUZZQ4RInput201 || "";
      typeof chunk5FUZZQ4RBinding1010 == "object" &&
        (chunk5FUZZQ4RBinding1010 = chunk5FUZZQ4RBinding1010[0]);
      let chunk5FUZZQ4RBinding1011 = b(),
        chunk5FUZZQ4RBinding1012 = w(chunk5FUZZQ4RBinding1011);
      return await chunkU2HBQHQKN(
        chunk5FUZZQ4RInput200,
        chunk5FUZZQ4RBinding1010,
        {
          style: chunk5FUZZQ4RInput202,
          isTitle: chunk5FUZZQ4RInput203,
          useHtmlLabels: chunk5FUZZQ4RBinding1012,
          markdown: false,
          isNode: chunk5FUZZQ4RInput204,
          width: 1 / 0,
        },
        chunk5FUZZQ4RBinding1011,
      );
    },
    "createLabel",
  );
  chunk5FUZZQ4RBinding4 = defineFunctionName(
    (
      chunk5FUZZQ4RInput165,
      chunk5FUZZQ4RInput166,
      chunk5FUZZQ4RInput167,
      chunk5FUZZQ4RInput168,
      chunk5FUZZQ4RInput169,
    ) =>
      [
        "M",
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput166,
        "H",
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput167 - chunk5FUZZQ4RInput169,
        "A",
        chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput169,
        0,
        0,
        1,
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput167,
        chunk5FUZZQ4RInput166 + chunk5FUZZQ4RInput169,
        "V",
        chunk5FUZZQ4RInput166 + chunk5FUZZQ4RInput168 - chunk5FUZZQ4RInput169,
        "A",
        chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput169,
        0,
        0,
        1,
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput167 - chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput166 + chunk5FUZZQ4RInput168,
        "H",
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput169,
        "A",
        chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput169,
        0,
        0,
        1,
        chunk5FUZZQ4RInput165,
        chunk5FUZZQ4RInput166 + chunk5FUZZQ4RInput168 - chunk5FUZZQ4RInput169,
        "V",
        chunk5FUZZQ4RInput166 + chunk5FUZZQ4RInput169,
        "A",
        chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput169,
        0,
        0,
        1,
        chunk5FUZZQ4RInput165 + chunk5FUZZQ4RInput169,
        chunk5FUZZQ4RInput166,
        "Z",
      ].join(" "),
    "createRoundedRectPathD",
  );
  chunk5FUZZQ4RBinding5 = defineFunctionName(
    async (chunk5FUZZQ4RInput7, event) => {
      logger.info("Creating subgraph rect for ", event.id, event);
      let chunk5FUZZQ4RBinding124 = b(),
        { themeVariables, handDrawnSeed } = chunk5FUZZQ4RBinding124,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } = a(event),
        chunk5FUZZQ4RBinding125 = chunk5FUZZQ4RInput7
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.domId)
          .attr("data-look", event.look),
        chunk5FUZZQ4RBinding126 = w(chunk5FUZZQ4RBinding124),
        chunk5FUZZQ4RBinding127 = chunk5FUZZQ4RBinding125
          .insert("g")
          .attr("class", "cluster-label "),
        chunk5FUZZQ4RBinding128;
      chunk5FUZZQ4RBinding128 =
        event.labelType === "markdown"
          ? await chunkU2HBQHQKN(chunk5FUZZQ4RBinding127, event.label, {
              style: event.labelStyle,
              useHtmlLabels: chunk5FUZZQ4RBinding126,
              isNode: true,
              width: event.width,
            })
          : await chunk5FUZZQ4RR(
              chunk5FUZZQ4RBinding127,
              event.label,
              event.labelStyle || "",
              false,
              true,
            );
      let chunk5FUZZQ4RBinding129 = chunk5FUZZQ4RBinding128.getBBox();
      if (w(chunk5FUZZQ4RBinding124)) {
        let chunk5FUZZQ4RBinding1167 = chunk5FUZZQ4RBinding128.children[0],
          chunk5FUZZQ4RBinding1168 = select(chunk5FUZZQ4RBinding128);
        chunk5FUZZQ4RBinding129 =
          chunk5FUZZQ4RBinding1167.getBoundingClientRect();
        chunk5FUZZQ4RBinding1168.attr("width", chunk5FUZZQ4RBinding129.width);
        chunk5FUZZQ4RBinding1168.attr("height", chunk5FUZZQ4RBinding129.height);
      }
      let chunk5FUZZQ4RBinding130 =
        event.width <= chunk5FUZZQ4RBinding129.width + event.padding
          ? chunk5FUZZQ4RBinding129.width + event.padding
          : event.width;
      event.width <= chunk5FUZZQ4RBinding129.width + event.padding
        ? (event.diff =
            (chunk5FUZZQ4RBinding130 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunk5FUZZQ4RBinding131 = event.height,
        chunk5FUZZQ4RBinding132 = event.x - chunk5FUZZQ4RBinding130 / 2,
        chunk5FUZZQ4RBinding133 = event.y - chunk5FUZZQ4RBinding131 / 2;
      logger.trace("Data ", event, JSON.stringify(event));
      let chunk5FUZZQ4RBinding134;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RBinding943 = rough.svg(chunk5FUZZQ4RBinding125),
          chunk5FUZZQ4RBinding944 = o(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 3,
            seed: handDrawnSeed,
          }),
          chunk5FUZZQ4RBinding945 = chunk5FUZZQ4RBinding943.path(
            chunk5FUZZQ4RBinding4(
              chunk5FUZZQ4RBinding132,
              chunk5FUZZQ4RBinding133,
              chunk5FUZZQ4RBinding130,
              chunk5FUZZQ4RBinding131,
              0,
            ),
            chunk5FUZZQ4RBinding944,
          );
        chunk5FUZZQ4RBinding134 = chunk5FUZZQ4RBinding125.insert(
          () => (
            logger.debug("Rough node insert CXC", chunk5FUZZQ4RBinding945),
            chunk5FUZZQ4RBinding945
          ),
          ":first-child",
        );
        chunk5FUZZQ4RBinding134
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunk5FUZZQ4RBinding134
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunk5FUZZQ4RBinding134 = chunk5FUZZQ4RBinding125.insert(
          "rect",
          ":first-child",
        );
        chunk5FUZZQ4RBinding134
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", chunk5FUZZQ4RBinding132)
          .attr("y", chunk5FUZZQ4RBinding133)
          .attr("width", chunk5FUZZQ4RBinding130)
          .attr("height", chunk5FUZZQ4RBinding131);
      }
      let { subGraphTitleTopMargin } = getSubGraphTitleMargins(
        chunk5FUZZQ4RBinding124,
      );
      if (
        (chunk5FUZZQ4RBinding127.attr(
          "transform",
          `translate(${event.x - chunk5FUZZQ4RBinding129.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunk5FUZZQ4RBinding1242 = chunk5FUZZQ4RBinding127.select("span");
        chunk5FUZZQ4RBinding1242 &&
          chunk5FUZZQ4RBinding1242.attr("style", labelStyles);
      }
      let chunk5FUZZQ4RBinding135 = chunk5FUZZQ4RBinding134.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = chunk5FUZZQ4RBinding135.width),
        (event.height = chunk5FUZZQ4RBinding135.height),
        (event.offsetY = chunk5FUZZQ4RBinding129.height - event.padding / 2),
        (event.intersect = function (chunk5FUZZQ4RInput362) {
          return chunk5FUZZQ4RBinding3(event, chunk5FUZZQ4RInput362);
        }),
        {
          cluster: chunk5FUZZQ4RBinding125,
          labelBBox: chunk5FUZZQ4RBinding129,
        }
      );
    },
    "rect",
  );
  chunk5FUZZQ4RBinding6 = {
    rect: chunk5FUZZQ4RBinding5,
    squareRect: chunk5FUZZQ4RBinding5,
    roundedWithTitle: defineFunctionName(async (chunk5FUZZQ4RInput5, event) => {
      let chunk5FUZZQ4RBinding96 = b(),
        { themeVariables, handDrawnSeed } = chunk5FUZZQ4RBinding96,
        {
          altBackground,
          compositeBackground,
          compositeTitleBackground,
          nodeBorder,
        } = themeVariables,
        chunk5FUZZQ4RBinding97 = chunk5FUZZQ4RInput5
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.domId)
          .attr("data-id", event.id)
          .attr("data-look", event.look),
        chunk5FUZZQ4RBinding98 = chunk5FUZZQ4RBinding97.insert(
          "g",
          ":first-child",
        ),
        chunk5FUZZQ4RBinding99 = chunk5FUZZQ4RBinding97
          .insert("g")
          .attr("class", "cluster-label"),
        chunk5FUZZQ4RBinding100 = chunk5FUZZQ4RBinding97.append("rect"),
        chunk5FUZZQ4RBinding101 = await chunk5FUZZQ4RR(
          chunk5FUZZQ4RBinding99,
          event.label,
          event.labelStyle,
          undefined,
          true,
        ),
        chunk5FUZZQ4RBinding102 = chunk5FUZZQ4RBinding101.getBBox();
      if (w(chunk5FUZZQ4RBinding96)) {
        let chunk5FUZZQ4RBinding1155 = chunk5FUZZQ4RBinding101.children[0],
          chunk5FUZZQ4RBinding1156 = select(chunk5FUZZQ4RBinding101);
        chunk5FUZZQ4RBinding102 =
          chunk5FUZZQ4RBinding1155.getBoundingClientRect();
        chunk5FUZZQ4RBinding1156.attr("width", chunk5FUZZQ4RBinding102.width);
        chunk5FUZZQ4RBinding1156.attr("height", chunk5FUZZQ4RBinding102.height);
      }
      let chunk5FUZZQ4RBinding103 = 0 * event.padding,
        chunk5FUZZQ4RBinding104 = chunk5FUZZQ4RBinding103 / 2,
        chunk5FUZZQ4RBinding105 =
          (event.width <= chunk5FUZZQ4RBinding102.width + event.padding
            ? chunk5FUZZQ4RBinding102.width + event.padding
            : event.width) + chunk5FUZZQ4RBinding103;
      event.width <= chunk5FUZZQ4RBinding102.width + event.padding
        ? (event.diff =
            (chunk5FUZZQ4RBinding105 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunk5FUZZQ4RBinding106 = event.height + chunk5FUZZQ4RBinding103,
        chunk5FUZZQ4RBinding107 =
          event.height +
          chunk5FUZZQ4RBinding103 -
          chunk5FUZZQ4RBinding102.height -
          6,
        chunk5FUZZQ4RBinding108 = event.x - chunk5FUZZQ4RBinding105 / 2,
        chunk5FUZZQ4RBinding109 = event.y - chunk5FUZZQ4RBinding106 / 2;
      event.width = chunk5FUZZQ4RBinding105;
      let chunk5FUZZQ4RBinding110 =
          event.y -
          event.height / 2 -
          chunk5FUZZQ4RBinding104 +
          chunk5FUZZQ4RBinding102.height +
          2,
        chunk5FUZZQ4RBinding111;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RBinding897 = event.cssClasses.includes(
            "statediagram-cluster-alt",
          ),
          chunk5FUZZQ4RBinding898 = rough.svg(chunk5FUZZQ4RBinding97),
          chunk5FUZZQ4RBinding899 =
            event.rx || event.ry
              ? chunk5FUZZQ4RBinding898.path(
                  chunk5FUZZQ4RBinding4(
                    chunk5FUZZQ4RBinding108,
                    chunk5FUZZQ4RBinding109,
                    chunk5FUZZQ4RBinding105,
                    chunk5FUZZQ4RBinding106,
                    10,
                  ),
                  {
                    roughness: 0.7,
                    fill: compositeTitleBackground,
                    fillStyle: "solid",
                    stroke: nodeBorder,
                    seed: handDrawnSeed,
                  },
                )
              : chunk5FUZZQ4RBinding898.rectangle(
                  chunk5FUZZQ4RBinding108,
                  chunk5FUZZQ4RBinding109,
                  chunk5FUZZQ4RBinding105,
                  chunk5FUZZQ4RBinding106,
                  {
                    seed: handDrawnSeed,
                  },
                );
        chunk5FUZZQ4RBinding111 = chunk5FUZZQ4RBinding97.insert(
          () => chunk5FUZZQ4RBinding899,
          ":first-child",
        );
        let chunk5FUZZQ4RBinding900 = chunk5FUZZQ4RBinding898.rectangle(
          chunk5FUZZQ4RBinding108,
          chunk5FUZZQ4RBinding110,
          chunk5FUZZQ4RBinding105,
          chunk5FUZZQ4RBinding107,
          {
            fill: chunk5FUZZQ4RBinding897 ? altBackground : compositeBackground,
            fillStyle: chunk5FUZZQ4RBinding897 ? "hachure" : "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed,
          },
        );
        chunk5FUZZQ4RBinding111 = chunk5FUZZQ4RBinding97.insert(
          () => chunk5FUZZQ4RBinding899,
          ":first-child",
        );
        chunk5FUZZQ4RBinding100 = chunk5FUZZQ4RBinding97.insert(
          () => chunk5FUZZQ4RBinding900,
        );
      } else {
        chunk5FUZZQ4RBinding111 = chunk5FUZZQ4RBinding98.insert(
          "rect",
          ":first-child",
        );
        chunk5FUZZQ4RBinding111
          .attr("class", "outer")
          .attr("x", chunk5FUZZQ4RBinding108)
          .attr("y", chunk5FUZZQ4RBinding109)
          .attr("width", chunk5FUZZQ4RBinding105)
          .attr("height", chunk5FUZZQ4RBinding106)
          .attr("data-look", event.look);
        chunk5FUZZQ4RBinding100
          .attr("class", "inner")
          .attr("x", chunk5FUZZQ4RBinding108)
          .attr("y", chunk5FUZZQ4RBinding110)
          .attr("width", chunk5FUZZQ4RBinding105)
          .attr("height", chunk5FUZZQ4RBinding107);
      }
      return (
        chunk5FUZZQ4RBinding99.attr(
          "transform",
          `translate(${event.x - chunk5FUZZQ4RBinding102.width / 2}, ${chunk5FUZZQ4RBinding109 + 1 - (w(chunk5FUZZQ4RBinding96) ? 0 : 3)})`,
        ),
        (event.height = chunk5FUZZQ4RBinding111.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = chunk5FUZZQ4RBinding102.height - event.padding / 2),
        (event.labelBBox = chunk5FUZZQ4RBinding102),
        (event.intersect = function (chunk5FUZZQ4RInput358) {
          return chunk5FUZZQ4RBinding3(event, chunk5FUZZQ4RInput358);
        }),
        {
          cluster: chunk5FUZZQ4RBinding97,
          labelBBox: chunk5FUZZQ4RBinding102,
        }
      );
    }, "roundedWithTitle"),
    noteGroup: defineFunctionName(
      (chunk5FUZZQ4RInput163, chunk5FUZZQ4RInput164) => {
        let chunk5FUZZQ4RBinding889 = chunk5FUZZQ4RInput163
            .insert("g")
            .attr("class", "note-cluster")
            .attr("id", chunk5FUZZQ4RInput164.domId),
          chunk5FUZZQ4RBinding890 = chunk5FUZZQ4RBinding889.insert(
            "rect",
            ":first-child",
          ),
          chunk5FUZZQ4RBinding891 = 0 * chunk5FUZZQ4RInput164.padding,
          chunk5FUZZQ4RBinding892 = chunk5FUZZQ4RBinding891 / 2;
        chunk5FUZZQ4RBinding890
          .attr("rx", chunk5FUZZQ4RInput164.rx)
          .attr("ry", chunk5FUZZQ4RInput164.ry)
          .attr(
            "x",
            chunk5FUZZQ4RInput164.x -
              chunk5FUZZQ4RInput164.width / 2 -
              chunk5FUZZQ4RBinding892,
          )
          .attr(
            "y",
            chunk5FUZZQ4RInput164.y -
              chunk5FUZZQ4RInput164.height / 2 -
              chunk5FUZZQ4RBinding892,
          )
          .attr("width", chunk5FUZZQ4RInput164.width + chunk5FUZZQ4RBinding891)
          .attr(
            "height",
            chunk5FUZZQ4RInput164.height + chunk5FUZZQ4RBinding891,
          )
          .attr("fill", "none");
        let chunk5FUZZQ4RBinding893 = chunk5FUZZQ4RBinding890.node().getBBox();
        return (
          (chunk5FUZZQ4RInput164.width = chunk5FUZZQ4RBinding893.width),
          (chunk5FUZZQ4RInput164.height = chunk5FUZZQ4RBinding893.height),
          (chunk5FUZZQ4RInput164.intersect = function (chunk5FUZZQ4RInput359) {
            return chunk5FUZZQ4RBinding3(
              chunk5FUZZQ4RInput164,
              chunk5FUZZQ4RInput359,
            );
          }),
          {
            cluster: chunk5FUZZQ4RBinding889,
            labelBBox: {
              width: 0,
              height: 0,
            },
          }
        );
      },
      "noteGroup",
    ),
    divider: defineFunctionName((chunk5FUZZQ4RInput66, event) => {
      let { themeVariables, handDrawnSeed } = b(),
        { nodeBorder } = themeVariables,
        chunk5FUZZQ4RBinding516 = chunk5FUZZQ4RInput66
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.domId)
          .attr("data-look", event.look),
        chunk5FUZZQ4RBinding517 = chunk5FUZZQ4RBinding516.insert(
          "g",
          ":first-child",
        ),
        chunk5FUZZQ4RBinding518 = 0 * event.padding,
        chunk5FUZZQ4RBinding519 = event.width + chunk5FUZZQ4RBinding518;
      event.diff = -event.padding;
      let chunk5FUZZQ4RBinding520 = event.height + chunk5FUZZQ4RBinding518,
        chunk5FUZZQ4RBinding521 = event.x - chunk5FUZZQ4RBinding519 / 2,
        chunk5FUZZQ4RBinding522 = event.y - chunk5FUZZQ4RBinding520 / 2;
      event.width = chunk5FUZZQ4RBinding519;
      let chunk5FUZZQ4RBinding523;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RBinding1087 = rough
          .svg(chunk5FUZZQ4RBinding516)
          .rectangle(
            chunk5FUZZQ4RBinding521,
            chunk5FUZZQ4RBinding522,
            chunk5FUZZQ4RBinding519,
            chunk5FUZZQ4RBinding520,
            {
              fill: "lightgrey",
              roughness: 0.5,
              strokeLineDash: [5],
              stroke: nodeBorder,
              seed: handDrawnSeed,
            },
          );
        chunk5FUZZQ4RBinding523 = chunk5FUZZQ4RBinding516.insert(
          () => chunk5FUZZQ4RBinding1087,
          ":first-child",
        );
      } else {
        chunk5FUZZQ4RBinding523 = chunk5FUZZQ4RBinding517.insert(
          "rect",
          ":first-child",
        );
        let chunk5FUZZQ4RBinding1026 = "outer";
        chunk5FUZZQ4RBinding1026 = (event.look, "divider");
        chunk5FUZZQ4RBinding523
          .attr("class", chunk5FUZZQ4RBinding1026)
          .attr("x", chunk5FUZZQ4RBinding521)
          .attr("y", chunk5FUZZQ4RBinding522)
          .attr("width", chunk5FUZZQ4RBinding519)
          .attr("height", chunk5FUZZQ4RBinding520)
          .attr("data-look", event.look);
      }
      return (
        (event.height = chunk5FUZZQ4RBinding523.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = 0),
        (event.intersect = function (chunk5FUZZQ4RInput360) {
          return chunk5FUZZQ4RBinding3(event, chunk5FUZZQ4RInput360);
        }),
        {
          cluster: chunk5FUZZQ4RBinding516,
          labelBBox: {},
        }
      );
    }, "divider"),
    kanbanSection: defineFunctionName(async (chunk5FUZZQ4RInput6, event) => {
      logger.info("Creating subgraph rect for ", event.id, event);
      let chunk5FUZZQ4RBinding112 = b(),
        { themeVariables, handDrawnSeed } = chunk5FUZZQ4RBinding112,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } = a(event),
        chunk5FUZZQ4RBinding113 = chunk5FUZZQ4RInput6
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.domId)
          .attr("data-look", event.look),
        chunk5FUZZQ4RBinding114 = w(chunk5FUZZQ4RBinding112),
        chunk5FUZZQ4RBinding115 = chunk5FUZZQ4RBinding113
          .insert("g")
          .attr("class", "cluster-label "),
        chunk5FUZZQ4RBinding116 = await chunkU2HBQHQKN(
          chunk5FUZZQ4RBinding115,
          event.label,
          {
            style: event.labelStyle,
            useHtmlLabels: chunk5FUZZQ4RBinding114,
            isNode: true,
            width: event.width,
          },
        ),
        chunk5FUZZQ4RBinding117 = chunk5FUZZQ4RBinding116.getBBox();
      if (w(chunk5FUZZQ4RBinding112)) {
        let chunk5FUZZQ4RBinding1157 = chunk5FUZZQ4RBinding116.children[0],
          chunk5FUZZQ4RBinding1158 = select(chunk5FUZZQ4RBinding116);
        chunk5FUZZQ4RBinding117 =
          chunk5FUZZQ4RBinding1157.getBoundingClientRect();
        chunk5FUZZQ4RBinding1158.attr("width", chunk5FUZZQ4RBinding117.width);
        chunk5FUZZQ4RBinding1158.attr("height", chunk5FUZZQ4RBinding117.height);
      }
      let chunk5FUZZQ4RBinding118 =
        event.width <= chunk5FUZZQ4RBinding117.width + event.padding
          ? chunk5FUZZQ4RBinding117.width + event.padding
          : event.width;
      event.width <= chunk5FUZZQ4RBinding117.width + event.padding
        ? (event.diff =
            (chunk5FUZZQ4RBinding118 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunk5FUZZQ4RBinding119 = event.height,
        chunk5FUZZQ4RBinding120 = event.x - chunk5FUZZQ4RBinding118 / 2,
        chunk5FUZZQ4RBinding121 = event.y - chunk5FUZZQ4RBinding119 / 2;
      logger.trace("Data ", event, JSON.stringify(event));
      let chunk5FUZZQ4RBinding122;
      if (event.look === "handDrawn") {
        let chunk5FUZZQ4RBinding938 = rough.svg(chunk5FUZZQ4RBinding113),
          chunk5FUZZQ4RBinding939 = o(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 4,
            seed: handDrawnSeed,
          }),
          chunk5FUZZQ4RBinding940 = chunk5FUZZQ4RBinding938.path(
            chunk5FUZZQ4RBinding4(
              chunk5FUZZQ4RBinding120,
              chunk5FUZZQ4RBinding121,
              chunk5FUZZQ4RBinding118,
              chunk5FUZZQ4RBinding119,
              event.rx,
            ),
            chunk5FUZZQ4RBinding939,
          );
        chunk5FUZZQ4RBinding122 = chunk5FUZZQ4RBinding113.insert(
          () => (
            logger.debug("Rough node insert CXC", chunk5FUZZQ4RBinding940),
            chunk5FUZZQ4RBinding940
          ),
          ":first-child",
        );
        chunk5FUZZQ4RBinding122
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunk5FUZZQ4RBinding122
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunk5FUZZQ4RBinding122 = chunk5FUZZQ4RBinding113.insert(
          "rect",
          ":first-child",
        );
        chunk5FUZZQ4RBinding122
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", chunk5FUZZQ4RBinding120)
          .attr("y", chunk5FUZZQ4RBinding121)
          .attr("width", chunk5FUZZQ4RBinding118)
          .attr("height", chunk5FUZZQ4RBinding119);
      }
      let { subGraphTitleTopMargin } = getSubGraphTitleMargins(
        chunk5FUZZQ4RBinding112,
      );
      if (
        (chunk5FUZZQ4RBinding115.attr(
          "transform",
          `translate(${event.x - chunk5FUZZQ4RBinding117.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunk5FUZZQ4RBinding1240 = chunk5FUZZQ4RBinding115.select("span");
        chunk5FUZZQ4RBinding1240 &&
          chunk5FUZZQ4RBinding1240.attr("style", labelStyles);
      }
      let chunk5FUZZQ4RBinding123 = chunk5FUZZQ4RBinding122.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = chunk5FUZZQ4RBinding123.width),
        (event.height = chunk5FUZZQ4RBinding123.height),
        (event.offsetY = chunk5FUZZQ4RBinding117.height - event.padding / 2),
        (event.intersect = function (chunk5FUZZQ4RInput361) {
          return chunk5FUZZQ4RBinding3(event, chunk5FUZZQ4RInput361);
        }),
        {
          cluster: chunk5FUZZQ4RBinding113,
          labelBBox: chunk5FUZZQ4RBinding117,
        }
      );
    }, "kanbanSection"),
  };
  chunk5FUZZQ4RBinding7 = new Map();
  chunk5FUZZQ4RA = defineFunctionName(
    async (chunk5FUZZQ4RInput315, chunk5FUZZQ4RInput316) => {
      let chunk5FUZZQ4RBinding1227 = await chunk5FUZZQ4RBinding6[
        chunk5FUZZQ4RInput316.shape || "rect"
      ](chunk5FUZZQ4RInput315, chunk5FUZZQ4RInput316);
      return (
        chunk5FUZZQ4RBinding7.set(
          chunk5FUZZQ4RInput316.id,
          chunk5FUZZQ4RBinding1227,
        ),
        chunk5FUZZQ4RBinding1227
      );
    },
    "insertCluster",
  );
  chunk5FUZZQ4RT = defineFunctionName(() => {
    chunk5FUZZQ4RBinding7 = new Map();
  }, "clear");
  defineFunctionName(chunk5FUZZQ4RHelper5, "intersectNode");
  chunk5FUZZQ4RBinding8 = chunk5FUZZQ4RHelper5;
  defineFunctionName(chunk5FUZZQ4RHelper6, "intersectEllipse");
  chunk5FUZZQ4RBinding9 = chunk5FUZZQ4RHelper6;
  defineFunctionName(chunk5FUZZQ4RHelper7, "intersectCircle");
  chunk5FUZZQ4RBinding10 = chunk5FUZZQ4RHelper7;
  defineFunctionName(chunk5FUZZQ4RHelper8, "intersectLine");
  defineFunctionName(chunk5FUZZQ4RHelper9, "sameSign");
  chunk5FUZZQ4RBinding11 = chunk5FUZZQ4RHelper8;
  defineFunctionName(chunk5FUZZQ4RHelper10, "intersectPolygon");
  chunk5FUZZQ4RBinding12 = {
    node: chunk5FUZZQ4RBinding8,
    circle: chunk5FUZZQ4RBinding10,
    ellipse: chunk5FUZZQ4RBinding9,
    polygon: chunk5FUZZQ4RHelper10,
    rect: chunk5FUZZQ4RBinding3,
  };
  defineFunctionName(chunk5FUZZQ4RHelper11, "anchor");
  defineFunctionName(chunk5FUZZQ4RHelper12, "generateArcPoints");
  defineFunctionName(chunk5FUZZQ4RHelper13, "calculateArcSagitta");
  defineFunctionName(chunk5FUZZQ4RHelper14, "bowTieRect");
  defineFunctionName(chunk5FUZZQ4RHelper15, "insertPolygonShape");
  chunk5FUZZQ4RBinding13 = 12;
  defineFunctionName(chunk5FUZZQ4RHelper16, "card");
  defineFunctionName(chunk5FUZZQ4RHelper17, "choice");
  defineFunctionName(chunk5FUZZQ4RHelper18, "circle");
  defineFunctionName(chunk5FUZZQ4RHelper19, "createLine");
  defineFunctionName(chunk5FUZZQ4RHelper20, "crossedCircle");
  defineFunctionName(chunk5FUZZQ4RHelper21, "generateCirclePoints");
  defineFunctionName(chunk5FUZZQ4RHelper22, "curlyBraceLeft");
  defineFunctionName(chunk5FUZZQ4RHelper23, "generateCirclePoints");
  defineFunctionName(chunk5FUZZQ4RHelper24, "curlyBraceRight");
  defineFunctionName(chunk5FUZZQ4RHelper25, "generateCirclePoints");
  defineFunctionName(chunk5FUZZQ4RHelper26, "curlyBraces");
  defineFunctionName(chunk5FUZZQ4RHelper27, "curvedTrapezoid");
  chunk5FUZZQ4RBinding14 = defineFunctionName(
    (
      chunk5FUZZQ4RInput275,
      chunk5FUZZQ4RInput276,
      chunk5FUZZQ4RInput277,
      chunk5FUZZQ4RInput278,
      chunk5FUZZQ4RInput279,
      chunk5FUZZQ4RInput280,
    ) =>
      [
        `M${chunk5FUZZQ4RInput275},${chunk5FUZZQ4RInput276 + chunk5FUZZQ4RInput280}`,
        `a${chunk5FUZZQ4RInput279},${chunk5FUZZQ4RInput280} 0,0,0 ${chunk5FUZZQ4RInput277},0`,
        `a${chunk5FUZZQ4RInput279},${chunk5FUZZQ4RInput280} 0,0,0 ${-chunk5FUZZQ4RInput277},0`,
        `l0,${chunk5FUZZQ4RInput278}`,
        `a${chunk5FUZZQ4RInput279},${chunk5FUZZQ4RInput280} 0,0,0 ${chunk5FUZZQ4RInput277},0`,
        `l0,${-chunk5FUZZQ4RInput278}`,
      ].join(" "),
    "createCylinderPathD",
  );
  chunk5FUZZQ4RBinding15 = defineFunctionName(
    (
      chunk5FUZZQ4RInput281,
      chunk5FUZZQ4RInput282,
      chunk5FUZZQ4RInput283,
      chunk5FUZZQ4RInput284,
      chunk5FUZZQ4RInput285,
      chunk5FUZZQ4RInput286,
    ) =>
      [
        `M${chunk5FUZZQ4RInput281},${chunk5FUZZQ4RInput282 + chunk5FUZZQ4RInput286}`,
        `M${chunk5FUZZQ4RInput281 + chunk5FUZZQ4RInput283},${chunk5FUZZQ4RInput282 + chunk5FUZZQ4RInput286}`,
        `a${chunk5FUZZQ4RInput285},${chunk5FUZZQ4RInput286} 0,0,0 ${-chunk5FUZZQ4RInput283},0`,
        `l0,${chunk5FUZZQ4RInput284}`,
        `a${chunk5FUZZQ4RInput285},${chunk5FUZZQ4RInput286} 0,0,0 ${chunk5FUZZQ4RInput283},0`,
        `l0,${-chunk5FUZZQ4RInput284}`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunk5FUZZQ4RBinding16 = defineFunctionName(
    (
      chunk5FUZZQ4RInput325,
      chunk5FUZZQ4RInput326,
      chunk5FUZZQ4RInput327,
      chunk5FUZZQ4RInput328,
      chunk5FUZZQ4RInput329,
      chunk5FUZZQ4RInput330,
    ) =>
      [
        `M${chunk5FUZZQ4RInput325 - chunk5FUZZQ4RInput327 / 2},${-chunk5FUZZQ4RInput328 / 2}`,
        `a${chunk5FUZZQ4RInput329},${chunk5FUZZQ4RInput330} 0,0,0 ${chunk5FUZZQ4RInput327},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  chunk5FUZZQ4RBinding17 = 8;
  chunk5FUZZQ4RBinding18 = 8;
  defineFunctionName(chunk5FUZZQ4RHelper28, "cylinder");
  defineFunctionName(chunk5FUZZQ4RHelper29, "dividedRectangle");
  defineFunctionName(chunk5FUZZQ4RHelper30, "doublecircle");
  defineFunctionName(chunk5FUZZQ4RHelper31, "filledCircle");
  chunk5FUZZQ4RBinding19 = 10;
  chunk5FUZZQ4RBinding20 = 10;
  defineFunctionName(chunk5FUZZQ4RHelper32, "flippedTriangle");
  defineFunctionName(_e, "forkJoin");
  defineFunctionName(chunk5FUZZQ4RHelper33, "halfRoundedRectangle");
  chunk5FUZZQ4RBinding21 = defineFunctionName(
    (
      chunk5FUZZQ4RInput264,
      chunk5FUZZQ4RInput265,
      chunk5FUZZQ4RInput266,
      chunk5FUZZQ4RInput267,
      chunk5FUZZQ4RInput268,
    ) =>
      [
        `M${chunk5FUZZQ4RInput264 + chunk5FUZZQ4RInput268},${chunk5FUZZQ4RInput265}`,
        `L${chunk5FUZZQ4RInput264 + chunk5FUZZQ4RInput266 - chunk5FUZZQ4RInput268},${chunk5FUZZQ4RInput265}`,
        `L${chunk5FUZZQ4RInput264 + chunk5FUZZQ4RInput266},${chunk5FUZZQ4RInput265 - chunk5FUZZQ4RInput267 / 2}`,
        `L${chunk5FUZZQ4RInput264 + chunk5FUZZQ4RInput266 - chunk5FUZZQ4RInput268},${chunk5FUZZQ4RInput265 - chunk5FUZZQ4RInput267}`,
        `L${chunk5FUZZQ4RInput264 + chunk5FUZZQ4RInput268},${chunk5FUZZQ4RInput265 - chunk5FUZZQ4RInput267}`,
        `L${chunk5FUZZQ4RInput264},${chunk5FUZZQ4RInput265 - chunk5FUZZQ4RInput267 / 2}`,
        "Z",
      ].join(" "),
    "createHexagonPathD",
  );
  defineFunctionName(chunk5FUZZQ4RHelper34, "hexagon");
  defineFunctionName(be, "hourglass");
  defineFunctionName(chunk5FUZZQ4RHelper35, "icon");
  defineFunctionName(chunk5FUZZQ4RHelper36, "iconCircle");
  defineFunctionName(chunk5FUZZQ4RHelper37, "iconRounded");
  defineFunctionName(chunk5FUZZQ4RHelper38, "iconSquare");
  defineFunctionName(chunk5FUZZQ4RHelper39, "imageSquare");
  defineFunctionName(chunk5FUZZQ4RHelper40, "inv_trapezoid");
  defineFunctionName(chunk5FUZZQ4RHelper41, "drawRect");
  defineFunctionName(chunk5FUZZQ4RHelper42, "labelRect");
  defineFunctionName(chunk5FUZZQ4RHelper43, "lean_left");
  defineFunctionName(chunk5FUZZQ4RHelper44, "lean_right");
  defineFunctionName(chunk5FUZZQ4RHelper45, "lightningBolt");
  chunk5FUZZQ4RBinding22 = defineFunctionName(
    (
      chunk5FUZZQ4RInput211,
      chunk5FUZZQ4RInput212,
      chunk5FUZZQ4RInput213,
      chunk5FUZZQ4RInput214,
      chunk5FUZZQ4RInput215,
      chunk5FUZZQ4RInput216,
      chunk5FUZZQ4RInput217,
    ) =>
      [
        `M${chunk5FUZZQ4RInput211},${chunk5FUZZQ4RInput212 + chunk5FUZZQ4RInput216}`,
        `a${chunk5FUZZQ4RInput215},${chunk5FUZZQ4RInput216} 0,0,0 ${chunk5FUZZQ4RInput213},0`,
        `a${chunk5FUZZQ4RInput215},${chunk5FUZZQ4RInput216} 0,0,0 ${-chunk5FUZZQ4RInput213},0`,
        `l0,${chunk5FUZZQ4RInput214}`,
        `a${chunk5FUZZQ4RInput215},${chunk5FUZZQ4RInput216} 0,0,0 ${chunk5FUZZQ4RInput213},0`,
        `l0,${-chunk5FUZZQ4RInput214}`,
        `M${chunk5FUZZQ4RInput211},${chunk5FUZZQ4RInput212 + chunk5FUZZQ4RInput216 + chunk5FUZZQ4RInput217}`,
        `a${chunk5FUZZQ4RInput215},${chunk5FUZZQ4RInput216} 0,0,0 ${chunk5FUZZQ4RInput213},0`,
      ].join(" "),
    "createCylinderPathD",
  );
  chunk5FUZZQ4RBinding23 = defineFunctionName(
    (
      chunk5FUZZQ4RInput218,
      chunk5FUZZQ4RInput219,
      chunk5FUZZQ4RInput220,
      chunk5FUZZQ4RInput221,
      chunk5FUZZQ4RInput222,
      chunk5FUZZQ4RInput223,
      chunk5FUZZQ4RInput224,
    ) =>
      [
        `M${chunk5FUZZQ4RInput218},${chunk5FUZZQ4RInput219 + chunk5FUZZQ4RInput223}`,
        `M${chunk5FUZZQ4RInput218 + chunk5FUZZQ4RInput220},${chunk5FUZZQ4RInput219 + chunk5FUZZQ4RInput223}`,
        `a${chunk5FUZZQ4RInput222},${chunk5FUZZQ4RInput223} 0,0,0 ${-chunk5FUZZQ4RInput220},0`,
        `l0,${chunk5FUZZQ4RInput221}`,
        `a${chunk5FUZZQ4RInput222},${chunk5FUZZQ4RInput223} 0,0,0 ${chunk5FUZZQ4RInput220},0`,
        `l0,${-chunk5FUZZQ4RInput221}`,
        `M${chunk5FUZZQ4RInput218},${chunk5FUZZQ4RInput219 + chunk5FUZZQ4RInput223 + chunk5FUZZQ4RInput224}`,
        `a${chunk5FUZZQ4RInput222},${chunk5FUZZQ4RInput223} 0,0,0 ${chunk5FUZZQ4RInput220},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunk5FUZZQ4RBinding24 = defineFunctionName(
    (
      chunk5FUZZQ4RInput331,
      chunk5FUZZQ4RInput332,
      chunk5FUZZQ4RInput333,
      chunk5FUZZQ4RInput334,
      chunk5FUZZQ4RInput335,
      chunk5FUZZQ4RInput336,
    ) =>
      [
        `M${chunk5FUZZQ4RInput331 - chunk5FUZZQ4RInput333 / 2},${-chunk5FUZZQ4RInput334 / 2}`,
        `a${chunk5FUZZQ4RInput335},${chunk5FUZZQ4RInput336} 0,0,0 ${chunk5FUZZQ4RInput333},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  chunk5FUZZQ4RBinding25 = 10;
  chunk5FUZZQ4RBinding26 = 10;
  defineFunctionName(chunk5FUZZQ4RHelper46, "linedCylinder");
  defineFunctionName(chunk5FUZZQ4RHelper47, "linedWaveEdgedRect");
  defineFunctionName(chunk5FUZZQ4RHelper48, "multiRect");
  defineFunctionName(chunk5FUZZQ4RHelper49, "multiWaveEdgedRectangle");
  defineFunctionName(chunk5FUZZQ4RHelper50, "note");
  chunk5FUZZQ4RBinding27 = defineFunctionName(
    (chunk5FUZZQ4RInput295, chunk5FUZZQ4RInput296, chunk5FUZZQ4RInput297) =>
      [
        `M${chunk5FUZZQ4RInput295 + chunk5FUZZQ4RInput297 / 2},${chunk5FUZZQ4RInput296}`,
        `L${chunk5FUZZQ4RInput295 + chunk5FUZZQ4RInput297},${chunk5FUZZQ4RInput296 - chunk5FUZZQ4RInput297 / 2}`,
        `L${chunk5FUZZQ4RInput295 + chunk5FUZZQ4RInput297 / 2},${chunk5FUZZQ4RInput296 - chunk5FUZZQ4RInput297}`,
        `L${chunk5FUZZQ4RInput295},${chunk5FUZZQ4RInput296 - chunk5FUZZQ4RInput297 / 2}`,
        "Z",
      ].join(" "),
    "createDecisionBoxPathD",
  );
  defineFunctionName(chunk5FUZZQ4RHelper51, "question");
  defineFunctionName(chunk5FUZZQ4RHelper52, "rect_left_inv_arrow");
  defineFunctionName(chunk5FUZZQ4RHelper53, "rectWithTitle");
  defineFunctionName(chunk5FUZZQ4RHelper54, "roundedRect");
  chunk5FUZZQ4RBinding28 = 8;
  defineFunctionName(chunk5FUZZQ4RHelper55, "shadedProcess");
  defineFunctionName(chunk5FUZZQ4RHelper56, "slopedRect");
  defineFunctionName(chunk5FUZZQ4RHelper57, "squareRect");
  defineFunctionName(chunk5FUZZQ4RHelper58, "stadium");
  defineFunctionName(chunk5FUZZQ4RHelper59, "state");
  defineFunctionName(chunk5FUZZQ4RHelper60, "stateEnd");
  defineFunctionName(chunk5FUZZQ4RHelper61, "stateStart");
  chunk5FUZZQ4RBinding29 = 8;
  defineFunctionName(chunk5FUZZQ4RHelper62, "subroutine");
  chunk5FUZZQ4RBinding30 = 0.2;
  defineFunctionName(chunk5FUZZQ4RHelper63, "taggedRect");
  defineFunctionName(chunk5FUZZQ4RHelper64, "taggedWaveEdgedRectangle");
  defineFunctionName(chunk5FUZZQ4RHelper65, "text");
  chunk5FUZZQ4RBinding31 = defineFunctionName(
    (
      chunk5FUZZQ4RInput298,
      chunk5FUZZQ4RInput299,
      chunk5FUZZQ4RInput300,
      chunk5FUZZQ4RInput301,
      chunk5FUZZQ4RInput302,
      chunk5FUZZQ4RInput303,
    ) => `M${chunk5FUZZQ4RInput298},${chunk5FUZZQ4RInput299}
    a${chunk5FUZZQ4RInput302},${chunk5FUZZQ4RInput303} 0,0,1 0,${-chunk5FUZZQ4RInput301}
    l${chunk5FUZZQ4RInput300},0
    a${chunk5FUZZQ4RInput302},${chunk5FUZZQ4RInput303} 0,0,1 0,${chunk5FUZZQ4RInput301}
    M${chunk5FUZZQ4RInput300},${-chunk5FUZZQ4RInput301}
    a${chunk5FUZZQ4RInput302},${chunk5FUZZQ4RInput303} 0,0,0 0,${chunk5FUZZQ4RInput301}
    l${-chunk5FUZZQ4RInput300},0`,
    "createCylinderPathD",
  );
  chunk5FUZZQ4RBinding32 = defineFunctionName(
    (
      chunk5FUZZQ4RInput289,
      chunk5FUZZQ4RInput290,
      chunk5FUZZQ4RInput291,
      chunk5FUZZQ4RInput292,
      chunk5FUZZQ4RInput293,
      chunk5FUZZQ4RInput294,
    ) =>
      [
        `M${chunk5FUZZQ4RInput289},${chunk5FUZZQ4RInput290}`,
        `M${chunk5FUZZQ4RInput289 + chunk5FUZZQ4RInput291},${chunk5FUZZQ4RInput290}`,
        `a${chunk5FUZZQ4RInput293},${chunk5FUZZQ4RInput294} 0,0,0 0,${-chunk5FUZZQ4RInput292}`,
        `l${-chunk5FUZZQ4RInput291},0`,
        `a${chunk5FUZZQ4RInput293},${chunk5FUZZQ4RInput294} 0,0,0 0,${chunk5FUZZQ4RInput292}`,
        `l${chunk5FUZZQ4RInput291},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunk5FUZZQ4RBinding33 = defineFunctionName(
    (
      chunk5FUZZQ4RInput337,
      chunk5FUZZQ4RInput338,
      chunk5FUZZQ4RInput339,
      chunk5FUZZQ4RInput340,
      chunk5FUZZQ4RInput341,
      chunk5FUZZQ4RInput342,
    ) =>
      [
        `M${chunk5FUZZQ4RInput337 + chunk5FUZZQ4RInput339 / 2},${-chunk5FUZZQ4RInput340 / 2}`,
        `a${chunk5FUZZQ4RInput341},${chunk5FUZZQ4RInput342} 0,0,0 0,${chunk5FUZZQ4RInput340}`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  chunk5FUZZQ4RBinding34 = 5;
  $t = 10;
  defineFunctionName(chunk5FUZZQ4RHelper66, "tiltedCylinder");
  defineFunctionName($e, "trapezoid");
  defineFunctionName(chunk5FUZZQ4RHelper67, "trapezoidalPentagon");
  chunk5FUZZQ4RBinding35 = 10;
  chunk5FUZZQ4RBinding36 = 10;
  defineFunctionName(chunk5FUZZQ4RHelper68, "triangle");
  defineFunctionName(chunk5FUZZQ4RHelper69, "waveEdgedRectangle");
  defineFunctionName(chunk5FUZZQ4RHelper70, "waveRectangle");
  $ = 10;
  defineFunctionName(chunk5FUZZQ4RHelper71, "windowPane");
  chunk5FUZZQ4RBinding37 = new Set(["redux-color", "redux-dark-color"]);
  chunk5FUZZQ4RBinding38 = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
  ]);
  defineFunctionName(at, "erBox");
  defineFunctionName(chunk5FUZZQ4RHelper72, "addText");
  defineFunctionName(chunk5FUZZQ4RHelper73, "lineToPolygon");
  defineFunctionName(chunk5FUZZQ4RHelper74, "textHelper");
  defineFunctionName(chunk5FUZZQ4RHelper75, "addText");
  defineFunctionName(chunk5FUZZQ4RHelper76, "classBox");
  defineFunctionName(chunk5FUZZQ4RHelper77, "requirementBox");
  defineFunctionName(chunk5FUZZQ4RHelper78, "addText");
  chunk5FUZZQ4RBinding39 = defineFunctionName((chunk5FUZZQ4RInput229) => {
    switch (chunk5FUZZQ4RInput229) {
      case "Very High":
        return "red";
      case "High":
        return "orange";
      case "Medium":
        return null;
      case "Low":
        return "blue";
      case "Very Low":
        return "lightblue";
    }
  }, "colorFromPriority");
  defineFunctionName(chunk5FUZZQ4RHelper79, "kanbanItem");
  defineFunctionName(chunk5FUZZQ4RHelper80, "bang");
  defineFunctionName(chunk5FUZZQ4RHelper81, "cloud");
  defineFunctionName(chunk5FUZZQ4RHelper82, "defaultMindmapNode");
  defineFunctionName(chunk5FUZZQ4RHelper83, "mindmapCircle");
  on = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: ["proc", "process", "rectangle"],
      internalAliases: ["squareRect"],
      handler: chunk5FUZZQ4RHelper57,
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: ["event"],
      internalAliases: ["roundedRect"],
      handler: chunk5FUZZQ4RHelper54,
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: ["terminal", "pill"],
      handler: chunk5FUZZQ4RHelper58,
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
      handler: chunk5FUZZQ4RHelper62,
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: ["db", "database", "cylinder"],
      handler: chunk5FUZZQ4RHelper28,
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: ["circ"],
      handler: chunk5FUZZQ4RHelper18,
    },
    {
      semanticName: "Bang",
      name: "Bang",
      shortName: "bang",
      description: "Bang",
      aliases: ["bang"],
      handler: chunk5FUZZQ4RHelper80,
    },
    {
      semanticName: "Cloud",
      name: "Cloud",
      shortName: "cloud",
      description: "cloud",
      aliases: ["cloud"],
      handler: chunk5FUZZQ4RHelper81,
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: ["decision", "diamond", "question"],
      handler: chunk5FUZZQ4RHelper51,
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: ["hexagon", "prepare"],
      handler: chunk5FUZZQ4RHelper34,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: ["lean-right", "in-out"],
      internalAliases: ["lean_right"],
      handler: chunk5FUZZQ4RHelper44,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: ["lean-left", "out-in"],
      internalAliases: ["lean_left"],
      handler: chunk5FUZZQ4RHelper43,
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: ["priority", "trapezoid-bottom", "trapezoid"],
      handler: $e,
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
      internalAliases: ["inv_trapezoid"],
      handler: chunk5FUZZQ4RHelper40,
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: ["double-circle"],
      internalAliases: ["doublecircle"],
      handler: chunk5FUZZQ4RHelper30,
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: chunk5FUZZQ4RHelper65,
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: ["card", "notched-rectangle"],
      handler: chunk5FUZZQ4RHelper16,
    },
    {
      semanticName: "Lined/Shaded Process",
      name: "Lined Rectangle",
      shortName: "lin-rect",
      description: "Lined process shape",
      aliases: [
        "lined-rectangle",
        "lined-process",
        "lin-proc",
        "shaded-process",
      ],
      handler: chunk5FUZZQ4RHelper55,
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: ["start", "small-circle"],
      internalAliases: ["stateStart"],
      handler: chunk5FUZZQ4RHelper61,
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: ["stop", "framed-circle"],
      internalAliases: ["stateEnd"],
      handler: chunk5FUZZQ4RHelper60,
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: ["join"],
      internalAliases: ["forkJoin"],
      handler: _e,
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: ["hourglass", "collate"],
      handler: be,
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: ["comment", "brace-l"],
      handler: chunk5FUZZQ4RHelper22,
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: chunk5FUZZQ4RHelper24,
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: chunk5FUZZQ4RHelper26,
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: ["com-link", "lightning-bolt"],
      handler: chunk5FUZZQ4RHelper45,
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: ["doc", "document"],
      handler: chunk5FUZZQ4RHelper69,
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: ["half-rounded-rectangle"],
      handler: chunk5FUZZQ4RHelper33,
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: ["das", "horizontal-cylinder"],
      handler: chunk5FUZZQ4RHelper66,
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: ["disk", "lined-cylinder"],
      handler: chunk5FUZZQ4RHelper46,
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: ["curved-trapezoid", "display"],
      handler: chunk5FUZZQ4RHelper27,
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: ["div-proc", "divided-rectangle", "divided-process"],
      handler: chunk5FUZZQ4RHelper29,
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: ["extract", "triangle"],
      handler: chunk5FUZZQ4RHelper68,
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: ["internal-storage", "window-pane"],
      handler: chunk5FUZZQ4RHelper71,
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: ["junction", "filled-circle"],
      handler: chunk5FUZZQ4RHelper31,
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: ["loop-limit", "notched-pentagon"],
      handler: chunk5FUZZQ4RHelper67,
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: ["manual-file", "flipped-triangle"],
      handler: chunk5FUZZQ4RHelper32,
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: ["manual-input", "sloped-rectangle"],
      handler: chunk5FUZZQ4RHelper56,
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: ["documents", "st-doc", "stacked-document"],
      handler: chunk5FUZZQ4RHelper49,
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: ["procs", "processes", "stacked-rectangle"],
      handler: chunk5FUZZQ4RHelper48,
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: ["stored-data", "bow-tie-rectangle"],
      handler: chunk5FUZZQ4RHelper14,
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: ["summary", "crossed-circle"],
      handler: chunk5FUZZQ4RHelper20,
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: ["tag-doc", "tagged-document"],
      handler: chunk5FUZZQ4RHelper64,
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
      handler: chunk5FUZZQ4RHelper63,
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: ["paper-tape"],
      handler: chunk5FUZZQ4RHelper70,
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: ["rect_left_inv_arrow"],
      handler: chunk5FUZZQ4RHelper52,
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: ["lined-document"],
      handler: chunk5FUZZQ4RHelper47,
    },
  ];
  chunk5FUZZQ4RBinding40 = defineFunctionName(() => {
    let chunk5FUZZQ4RBinding866 = [
      ...Object.entries({
        state: chunk5FUZZQ4RHelper59,
        choice: chunk5FUZZQ4RHelper17,
        note: chunk5FUZZQ4RHelper50,
        rectWithTitle: chunk5FUZZQ4RHelper53,
        labelRect: chunk5FUZZQ4RHelper42,
        iconSquare: chunk5FUZZQ4RHelper38,
        iconCircle: chunk5FUZZQ4RHelper36,
        icon: chunk5FUZZQ4RHelper35,
        iconRounded: chunk5FUZZQ4RHelper37,
        imageSquare: chunk5FUZZQ4RHelper39,
        anchor: chunk5FUZZQ4RHelper11,
        kanbanItem: chunk5FUZZQ4RHelper79,
        mindmapCircle: chunk5FUZZQ4RHelper83,
        defaultMindmapNode: chunk5FUZZQ4RHelper82,
        classBox: chunk5FUZZQ4RHelper76,
        erBox: at,
        requirementBox: chunk5FUZZQ4RHelper77,
      }),
      ...on.flatMap((item) =>
        [
          item.shortName,
          ...("aliases" in item ? item.aliases : []),
          ...("internalAliases" in item ? item.internalAliases : []),
        ].map((_item) => [_item, item.handler]),
      ),
    ];
    return Object.fromEntries(chunk5FUZZQ4RBinding866);
  }, "generateShapeMap")();
  defineFunctionName(chunk5FUZZQ4RS, "isValidShape");
  chunk5FUZZQ4RBinding41 = new Map();
  defineFunctionName(chunk5FUZZQ4RO, "insertNode");
  chunk5FUZZQ4RU = defineFunctionName(
    (chunk5FUZZQ4RInput418, chunk5FUZZQ4RInput419) => {
      chunk5FUZZQ4RBinding41.set(
        chunk5FUZZQ4RInput419.id,
        chunk5FUZZQ4RInput418,
      );
    },
    "setNodeElem",
  );
  chunk5FUZZQ4RN = defineFunctionName(() => {
    chunk5FUZZQ4RBinding41.clear();
  }, "clear");
  chunk5FUZZQ4RL = defineFunctionName((chunk5FUZZQ4RInput189) => {
    let chunk5FUZZQ4RBinding941 = chunk5FUZZQ4RBinding41.get(
      chunk5FUZZQ4RInput189.id,
    );
    logger.trace(
      "Transforming node",
      chunk5FUZZQ4RInput189.diff,
      chunk5FUZZQ4RInput189,
      "translate(" +
        (chunk5FUZZQ4RInput189.x - chunk5FUZZQ4RInput189.width / 2 - 5) +
        ", " +
        chunk5FUZZQ4RInput189.width / 2 +
        ")",
    );
    let chunk5FUZZQ4RBinding942 = chunk5FUZZQ4RInput189.diff || 0;
    return (
      chunk5FUZZQ4RInput189.clusterNode
        ? chunk5FUZZQ4RBinding941.attr(
            "transform",
            "translate(" +
              (chunk5FUZZQ4RInput189.x +
                chunk5FUZZQ4RBinding942 -
                chunk5FUZZQ4RInput189.width / 2) +
              ", " +
              (chunk5FUZZQ4RInput189.y - chunk5FUZZQ4RInput189.height / 2 - 8) +
              ")",
          )
        : chunk5FUZZQ4RBinding941.attr(
            "transform",
            "translate(" +
              chunk5FUZZQ4RInput189.x +
              ", " +
              chunk5FUZZQ4RInput189.y +
              ")",
          ),
      chunk5FUZZQ4RBinding942
    );
  }, "positionNode");
});
export {
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RC,
  chunk5FUZZQ4RD,
  chunk5FUZZQ4RL,
  chunk5FUZZQ4RN,
  chunk5FUZZQ4RO,
  chunk5FUZZQ4RR,
  chunk5FUZZQ4RS,
  chunk5FUZZQ4RT,
  chunk5FUZZQ4RU,
};
