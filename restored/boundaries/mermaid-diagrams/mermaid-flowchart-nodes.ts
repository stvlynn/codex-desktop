// Restored from ref/webview/assets/chunk-JZLCHNYA-CQUu4a75.js
// Mermaid flowchart node/shape renderers (primary). No app-initial edge after createText promote.
// Stage 3 candidate: IMPORT_MAP-rewritten npm aliases; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import { b, d, h, j, k, L, O, P, R, s, y } from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import {
  chunkS3R3BYOJI,
  chunkS3R3BYOJL,
  chunkS3R3BYOJN,
  chunkS3R3BYOJP,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import {
  chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZN,
  chunkJA3XYJ7ZR,
} from "./mermaid-create-text";
import {
  initSubGraphTitleMarginsChunk,
  getSubGraphTitleMargins,
} from "../../diagrams/subgraph-title-margins";
import { styles2String as a, solidStateFill as i, initStyleHelpersChunk as chunkATLVNIR6N, userNodeOverrides as o, compileStyles as chunkATLVNIR6T } from "../../diagrams/style-helpers";
import rough from "roughjs";
function chunkJZLCHNYAHelper1(chunkJZLCHNYAInput306) {
  let chunkJZLCHNYABinding1093 = chunkJZLCHNYAInput306.map(
    (item, index) => `${index === 0 ? "M" : "L"}${item.x},${item.y}`,
  );
  return (
    chunkJZLCHNYABinding1093.push("Z"),
    chunkJZLCHNYABinding1093.join(" ")
  );
}
function chunkJZLCHNYAHelper2(
  chunkJZLCHNYAInput256,
  chunkJZLCHNYAInput257,
  chunkJZLCHNYAInput258,
  chunkJZLCHNYAInput259,
  chunkJZLCHNYAInput260,
  chunkJZLCHNYAInput261,
) {
  let chunkJZLCHNYABinding982 = [],
    chunkJZLCHNYABinding983 = chunkJZLCHNYAInput258 - chunkJZLCHNYAInput256,
    chunkJZLCHNYABinding984 = chunkJZLCHNYAInput259 - chunkJZLCHNYAInput257,
    chunkJZLCHNYABinding985 = chunkJZLCHNYABinding983 / chunkJZLCHNYAInput261,
    chunkJZLCHNYABinding986 = (2 * Math.PI) / chunkJZLCHNYABinding985,
    chunkJZLCHNYABinding987 =
      chunkJZLCHNYAInput257 + chunkJZLCHNYABinding984 / 2;
  for (
    let chunkJZLCHNYABinding1083 = 0;
    chunkJZLCHNYABinding1083 <= 50;
    chunkJZLCHNYABinding1083++
  ) {
    let chunkJZLCHNYABinding1110 =
        chunkJZLCHNYAInput256 +
        (chunkJZLCHNYABinding1083 / 50) * chunkJZLCHNYABinding983,
      chunkJZLCHNYABinding1111 =
        chunkJZLCHNYABinding987 +
        chunkJZLCHNYAInput260 *
          Math.sin(
            chunkJZLCHNYABinding986 *
              (chunkJZLCHNYABinding1110 - chunkJZLCHNYAInput256),
          );
    chunkJZLCHNYABinding982.push({
      x: chunkJZLCHNYABinding1110,
      y: chunkJZLCHNYABinding1111,
    });
  }
  return chunkJZLCHNYABinding982;
}
function chunkJZLCHNYAHelper3(
  chunkJZLCHNYAInput262,
  chunkJZLCHNYAInput263,
  chunkJZLCHNYAInput264,
  chunkJZLCHNYAInput265,
  chunkJZLCHNYAInput266,
  chunkJZLCHNYAInput267,
) {
  let chunkJZLCHNYABinding990 = [],
    chunkJZLCHNYABinding991 = (chunkJZLCHNYAInput266 * Math.PI) / 180,
    chunkJZLCHNYABinding992 =
      ((chunkJZLCHNYAInput267 * Math.PI) / 180 - chunkJZLCHNYABinding991) /
      (chunkJZLCHNYAInput265 - 1);
  for (
    let chunkJZLCHNYABinding1077 = 0;
    chunkJZLCHNYABinding1077 < chunkJZLCHNYAInput265;
    chunkJZLCHNYABinding1077++
  ) {
    let chunkJZLCHNYABinding1094 =
        chunkJZLCHNYABinding991 +
        chunkJZLCHNYABinding1077 * chunkJZLCHNYABinding992,
      chunkJZLCHNYABinding1095 =
        chunkJZLCHNYAInput262 +
        chunkJZLCHNYAInput264 * Math.cos(chunkJZLCHNYABinding1094),
      chunkJZLCHNYABinding1096 =
        chunkJZLCHNYAInput263 +
        chunkJZLCHNYAInput264 * Math.sin(chunkJZLCHNYABinding1094);
    chunkJZLCHNYABinding990.push({
      x: -chunkJZLCHNYABinding1095,
      y: -chunkJZLCHNYABinding1096,
    });
  }
  return chunkJZLCHNYABinding990;
}
function chunkJZLCHNYAHelper4(chunkJZLCHNYAInput393, chunkJZLCHNYAInput394) {
  chunkJZLCHNYAInput394 &&
    chunkJZLCHNYAInput393.attr("style", chunkJZLCHNYAInput394);
}
async function chunkJZLCHNYAHelper5(chunkJZLCHNYAInput186) {
  let chunkJZLCHNYABinding806 = select(
      document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"),
    ),
    chunkJZLCHNYABinding807 = chunkJZLCHNYABinding806.append("xhtml:div"),
    chunkJZLCHNYABinding808 = b(),
    chunkJZLCHNYABinding809 = chunkJZLCHNYAInput186.label;
  chunkJZLCHNYAInput186.label &&
    O(chunkJZLCHNYAInput186.label) &&
    (chunkJZLCHNYABinding809 = await P(
      chunkJZLCHNYAInput186.label.replace(s.lineBreakRegex, "\n"),
      chunkJZLCHNYABinding808,
    ));
  let chunkJZLCHNYABinding810 =
    '<span class="' +
    (chunkJZLCHNYAInput186.isNode ? "nodeLabel" : "edgeLabel") +
    '" ' +
    (chunkJZLCHNYAInput186.labelStyle
      ? 'style="' + chunkJZLCHNYAInput186.labelStyle + '"'
      : "") +
    ">" +
    chunkJZLCHNYABinding809 +
    "</span>";
  return (
    chunkJZLCHNYABinding807.html(
      L(chunkJZLCHNYABinding810, chunkJZLCHNYABinding808),
    ),
    chunkJZLCHNYAHelper4(
      chunkJZLCHNYABinding807,
      chunkJZLCHNYAInput186.labelStyle,
    ),
    chunkJZLCHNYABinding807.style("display", "inline-block"),
    chunkJZLCHNYABinding807.style("padding-right", "1px"),
    chunkJZLCHNYABinding807.style("white-space", "nowrap"),
    chunkJZLCHNYABinding807.attr("xmlns", "http://www.w3.org/1999/xhtml"),
    chunkJZLCHNYABinding806.node()
  );
}
function chunkJZLCHNYAHelper6(chunkJZLCHNYAInput409, chunkJZLCHNYAInput410) {
  return chunkJZLCHNYAInput409.intersect(chunkJZLCHNYAInput410);
}
function chunkJZLCHNYAHelper7(
  chunkJZLCHNYAInput252,
  chunkJZLCHNYAInput253,
  chunkJZLCHNYAInput254,
  chunkJZLCHNYAInput255,
) {
  var chunkJZLCHNYABinding975 = chunkJZLCHNYAInput252.x,
    chunkJZLCHNYABinding976 = chunkJZLCHNYAInput252.y,
    chunkJZLCHNYABinding977 = chunkJZLCHNYABinding975 - chunkJZLCHNYAInput255.x,
    chunkJZLCHNYABinding978 = chunkJZLCHNYABinding976 - chunkJZLCHNYAInput255.y,
    chunkJZLCHNYABinding979 = Math.sqrt(
      chunkJZLCHNYAInput253 *
        chunkJZLCHNYAInput253 *
        chunkJZLCHNYABinding978 *
        chunkJZLCHNYABinding978 +
        chunkJZLCHNYAInput254 *
          chunkJZLCHNYAInput254 *
          chunkJZLCHNYABinding977 *
          chunkJZLCHNYABinding977,
    ),
    chunkJZLCHNYABinding980 = Math.abs(
      (chunkJZLCHNYAInput253 *
        chunkJZLCHNYAInput254 *
        chunkJZLCHNYABinding977) /
        chunkJZLCHNYABinding979,
    );
  chunkJZLCHNYAInput255.x < chunkJZLCHNYABinding975 &&
    (chunkJZLCHNYABinding980 = -chunkJZLCHNYABinding980);
  var chunkJZLCHNYABinding981 = Math.abs(
    (chunkJZLCHNYAInput253 * chunkJZLCHNYAInput254 * chunkJZLCHNYABinding978) /
      chunkJZLCHNYABinding979,
  );
  return (
    chunkJZLCHNYAInput255.y < chunkJZLCHNYABinding976 &&
      (chunkJZLCHNYABinding981 = -chunkJZLCHNYABinding981),
    {
      x: chunkJZLCHNYABinding975 + chunkJZLCHNYABinding980,
      y: chunkJZLCHNYABinding976 + chunkJZLCHNYABinding981,
    }
  );
}
function chunkJZLCHNYAHelper8(
  chunkJZLCHNYAInput390,
  chunkJZLCHNYAInput391,
  chunkJZLCHNYAInput392,
) {
  return chunkJZLCHNYABinding9(
    chunkJZLCHNYAInput390,
    chunkJZLCHNYAInput391,
    chunkJZLCHNYAInput391,
    chunkJZLCHNYAInput392,
  );
}
function chunkJZLCHNYAHelper9(
  chunkJZLCHNYAInput189,
  chunkJZLCHNYAInput190,
  chunkJZLCHNYAInput191,
  chunkJZLCHNYAInput192,
) {
  {
    let chunkJZLCHNYABinding818 =
        chunkJZLCHNYAInput190.y - chunkJZLCHNYAInput189.y,
      chunkJZLCHNYABinding819 =
        chunkJZLCHNYAInput189.x - chunkJZLCHNYAInput190.x,
      chunkJZLCHNYABinding820 =
        chunkJZLCHNYAInput190.x * chunkJZLCHNYAInput189.y -
        chunkJZLCHNYAInput189.x * chunkJZLCHNYAInput190.y,
      chunkJZLCHNYABinding821 =
        chunkJZLCHNYABinding818 * chunkJZLCHNYAInput191.x +
        chunkJZLCHNYABinding819 * chunkJZLCHNYAInput191.y +
        chunkJZLCHNYABinding820,
      chunkJZLCHNYABinding822 =
        chunkJZLCHNYABinding818 * chunkJZLCHNYAInput192.x +
        chunkJZLCHNYABinding819 * chunkJZLCHNYAInput192.y +
        chunkJZLCHNYABinding820;
    if (
      chunkJZLCHNYABinding821 !== 0 &&
      chunkJZLCHNYABinding822 !== 0 &&
      chunkJZLCHNYAHelper10(chunkJZLCHNYABinding821, chunkJZLCHNYABinding822)
    )
      return;
    let chunkJZLCHNYABinding824 =
        chunkJZLCHNYAInput192.y - chunkJZLCHNYAInput191.y,
      chunkJZLCHNYABinding825 =
        chunkJZLCHNYAInput191.x - chunkJZLCHNYAInput192.x,
      chunkJZLCHNYABinding826 =
        chunkJZLCHNYAInput192.x * chunkJZLCHNYAInput191.y -
        chunkJZLCHNYAInput191.x * chunkJZLCHNYAInput192.y,
      chunkJZLCHNYABinding827 =
        chunkJZLCHNYABinding824 * chunkJZLCHNYAInput189.x +
        chunkJZLCHNYABinding825 * chunkJZLCHNYAInput189.y +
        chunkJZLCHNYABinding826,
      chunkJZLCHNYABinding828 =
        chunkJZLCHNYABinding824 * chunkJZLCHNYAInput190.x +
        chunkJZLCHNYABinding825 * chunkJZLCHNYAInput190.y +
        chunkJZLCHNYABinding826;
    if (
      Math.abs(chunkJZLCHNYABinding827) < 1e-6 &&
      Math.abs(chunkJZLCHNYABinding828) < 1e-6 &&
      chunkJZLCHNYAHelper10(chunkJZLCHNYABinding827, chunkJZLCHNYABinding828)
    )
      return;
    let chunkJZLCHNYABinding829 =
      chunkJZLCHNYABinding818 * chunkJZLCHNYABinding825 -
      chunkJZLCHNYABinding824 * chunkJZLCHNYABinding819;
    if (chunkJZLCHNYABinding829 === 0) return;
    let chunkJZLCHNYABinding830 = Math.abs(chunkJZLCHNYABinding829 / 2),
      chunkJZLCHNYABinding831 =
        chunkJZLCHNYABinding819 * chunkJZLCHNYABinding826 -
        chunkJZLCHNYABinding825 * chunkJZLCHNYABinding820,
      chunkJZLCHNYABinding832 =
        chunkJZLCHNYABinding831 < 0
          ? (chunkJZLCHNYABinding831 - chunkJZLCHNYABinding830) /
            chunkJZLCHNYABinding829
          : (chunkJZLCHNYABinding831 + chunkJZLCHNYABinding830) /
            chunkJZLCHNYABinding829;
    return (
      (chunkJZLCHNYABinding831 =
        chunkJZLCHNYABinding824 * chunkJZLCHNYABinding820 -
        chunkJZLCHNYABinding818 * chunkJZLCHNYABinding826),
      {
        x: chunkJZLCHNYABinding832,
        y:
          chunkJZLCHNYABinding831 < 0
            ? (chunkJZLCHNYABinding831 - chunkJZLCHNYABinding830) /
              chunkJZLCHNYABinding829
            : (chunkJZLCHNYABinding831 + chunkJZLCHNYABinding830) /
              chunkJZLCHNYABinding829,
      }
    );
  }
}
function chunkJZLCHNYAHelper10(chunkJZLCHNYAInput413, chunkJZLCHNYAInput414) {
  return chunkJZLCHNYAInput413 * chunkJZLCHNYAInput414 > 0;
}
function chunkJZLCHNYAHelper11(
  chunkJZLCHNYAInput146,
  chunkJZLCHNYAInput147,
  chunkJZLCHNYAInput148,
) {
  let chunkJZLCHNYABinding727 = chunkJZLCHNYAInput146.x,
    chunkJZLCHNYABinding728 = chunkJZLCHNYAInput146.y,
    chunkJZLCHNYABinding729 = [],
    chunkJZLCHNYABinding730 = 1 / 0,
    chunkJZLCHNYABinding731 = 1 / 0;
  typeof chunkJZLCHNYAInput147.forEach == "function"
    ? chunkJZLCHNYAInput147.forEach(function (item) {
        chunkJZLCHNYABinding730 = Math.min(chunkJZLCHNYABinding730, item.x);
        chunkJZLCHNYABinding731 = Math.min(chunkJZLCHNYABinding731, item.y);
      })
    : ((chunkJZLCHNYABinding730 = Math.min(
        chunkJZLCHNYABinding730,
        chunkJZLCHNYAInput147.x,
      )),
      (chunkJZLCHNYABinding731 = Math.min(
        chunkJZLCHNYABinding731,
        chunkJZLCHNYAInput147.y,
      )));
  let chunkJZLCHNYABinding732 =
      chunkJZLCHNYABinding727 -
      chunkJZLCHNYAInput146.width / 2 -
      chunkJZLCHNYABinding730,
    chunkJZLCHNYABinding733 =
      chunkJZLCHNYABinding728 -
      chunkJZLCHNYAInput146.height / 2 -
      chunkJZLCHNYABinding731;
  for (
    let chunkJZLCHNYABinding1048 = 0;
    chunkJZLCHNYABinding1048 < chunkJZLCHNYAInput147.length;
    chunkJZLCHNYABinding1048++
  ) {
    let chunkJZLCHNYABinding1066 =
        chunkJZLCHNYAInput147[chunkJZLCHNYABinding1048],
      chunkJZLCHNYABinding1067 =
        chunkJZLCHNYAInput147[
          chunkJZLCHNYABinding1048 < chunkJZLCHNYAInput147.length - 1
            ? chunkJZLCHNYABinding1048 + 1
            : 0
        ],
      chunkJZLCHNYABinding1068 = chunkJZLCHNYABinding11(
        chunkJZLCHNYAInput146,
        chunkJZLCHNYAInput148,
        {
          x: chunkJZLCHNYABinding732 + chunkJZLCHNYABinding1066.x,
          y: chunkJZLCHNYABinding733 + chunkJZLCHNYABinding1066.y,
        },
        {
          x: chunkJZLCHNYABinding732 + chunkJZLCHNYABinding1067.x,
          y: chunkJZLCHNYABinding733 + chunkJZLCHNYABinding1067.y,
        },
      );
    chunkJZLCHNYABinding1068 &&
      chunkJZLCHNYABinding729.push(chunkJZLCHNYABinding1068);
  }
  return chunkJZLCHNYABinding729.length
    ? (chunkJZLCHNYABinding729.length > 1 &&
        chunkJZLCHNYABinding729.sort(
          function (chunkJZLCHNYAInput270, chunkJZLCHNYAInput271) {
            let chunkJZLCHNYABinding998 =
                chunkJZLCHNYAInput270.x - chunkJZLCHNYAInput148.x,
              chunkJZLCHNYABinding999 =
                chunkJZLCHNYAInput270.y - chunkJZLCHNYAInput148.y,
              chunkJZLCHNYABinding1000 = Math.sqrt(
                chunkJZLCHNYABinding998 * chunkJZLCHNYABinding998 +
                  chunkJZLCHNYABinding999 * chunkJZLCHNYABinding999,
              ),
              chunkJZLCHNYABinding1001 =
                chunkJZLCHNYAInput271.x - chunkJZLCHNYAInput148.x,
              chunkJZLCHNYABinding1002 =
                chunkJZLCHNYAInput271.y - chunkJZLCHNYAInput148.y,
              chunkJZLCHNYABinding1003 = Math.sqrt(
                chunkJZLCHNYABinding1001 * chunkJZLCHNYABinding1001 +
                  chunkJZLCHNYABinding1002 * chunkJZLCHNYABinding1002,
              );
            return chunkJZLCHNYABinding1000 < chunkJZLCHNYABinding1003
              ? -1
              : chunkJZLCHNYABinding1000 === chunkJZLCHNYABinding1003
                ? 0
                : 1;
          },
        ),
      chunkJZLCHNYABinding729[0])
    : chunkJZLCHNYAInput146;
}
function chunkJZLCHNYAHelper12(chunkJZLCHNYAInput196, chunkJZLCHNYAInput197) {
  let { labelStyles } = a(chunkJZLCHNYAInput197);
  chunkJZLCHNYAInput197.labelStyle = labelStyles;
  let chunkJZLCHNYABinding833 = chunkJZLCHNYABinding2(chunkJZLCHNYAInput197),
    chunkJZLCHNYABinding834 = chunkJZLCHNYABinding833;
  chunkJZLCHNYABinding833 || (chunkJZLCHNYABinding834 = "anchor");
  let chunkJZLCHNYABinding835 = chunkJZLCHNYAInput196
      .insert("g")
      .attr("class", chunkJZLCHNYABinding834)
      .attr("id", chunkJZLCHNYAInput197.domId || chunkJZLCHNYAInput197.id),
    { cssStyles } = chunkJZLCHNYAInput197,
    chunkJZLCHNYABinding836 = rough.svg(chunkJZLCHNYABinding835),
    chunkJZLCHNYABinding837 = o(chunkJZLCHNYAInput197, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid",
    });
  chunkJZLCHNYAInput197.look !== "handDrawn" &&
    (chunkJZLCHNYABinding837.roughness = 0);
  let chunkJZLCHNYABinding838 = chunkJZLCHNYABinding836.circle(
      0,
      0,
      2,
      chunkJZLCHNYABinding837,
    ),
    chunkJZLCHNYABinding839 = chunkJZLCHNYABinding835.insert(
      () => chunkJZLCHNYABinding838,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding839
      .attr("class", "anchor")
      .attr("style", chunkS3R3BYOJL(cssStyles)),
    chunkJZLCHNYAD(chunkJZLCHNYAInput197, chunkJZLCHNYABinding839),
    (chunkJZLCHNYAInput197.intersect = function (chunkJZLCHNYAInput337) {
      return (
        logger.info(
          "Circle intersect",
          chunkJZLCHNYAInput197,
          1,
          chunkJZLCHNYAInput337,
        ),
        $.circle(chunkJZLCHNYAInput197, 1, chunkJZLCHNYAInput337)
      );
    }),
    chunkJZLCHNYABinding835
  );
}
function chunkJZLCHNYAHelper13(
  chunkJZLCHNYAInput161,
  chunkJZLCHNYAInput162,
  chunkJZLCHNYAInput163,
  chunkJZLCHNYAInput164,
  chunkJZLCHNYAInput165,
  chunkJZLCHNYAInput166,
  chunkJZLCHNYAInput167,
) {
  let chunkJZLCHNYABinding766 =
      (chunkJZLCHNYAInput161 + chunkJZLCHNYAInput163) / 2,
    chunkJZLCHNYABinding767 =
      (chunkJZLCHNYAInput162 + chunkJZLCHNYAInput164) / 2,
    chunkJZLCHNYABinding768 = Math.atan2(
      chunkJZLCHNYAInput164 - chunkJZLCHNYAInput162,
      chunkJZLCHNYAInput163 - chunkJZLCHNYAInput161,
    ),
    chunkJZLCHNYABinding769 =
      (chunkJZLCHNYAInput163 - chunkJZLCHNYAInput161) / 2,
    chunkJZLCHNYABinding770 =
      (chunkJZLCHNYAInput164 - chunkJZLCHNYAInput162) / 2,
    chunkJZLCHNYABinding771 = chunkJZLCHNYABinding769 / chunkJZLCHNYAInput165,
    chunkJZLCHNYABinding772 = chunkJZLCHNYABinding770 / chunkJZLCHNYAInput166,
    chunkJZLCHNYABinding773 = Math.sqrt(
      chunkJZLCHNYABinding771 ** 2 + chunkJZLCHNYABinding772 ** 2,
    );
  if (chunkJZLCHNYABinding773 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunkJZLCHNYABinding774 = Math.sqrt(1 - chunkJZLCHNYABinding773 ** 2),
    chunkJZLCHNYABinding775 =
      chunkJZLCHNYABinding766 +
      chunkJZLCHNYABinding774 *
        chunkJZLCHNYAInput166 *
        Math.sin(chunkJZLCHNYABinding768) *
        (chunkJZLCHNYAInput167 ? -1 : 1),
    chunkJZLCHNYABinding776 =
      chunkJZLCHNYABinding767 -
      chunkJZLCHNYABinding774 *
        chunkJZLCHNYAInput165 *
        Math.cos(chunkJZLCHNYABinding768) *
        (chunkJZLCHNYAInput167 ? -1 : 1),
    chunkJZLCHNYABinding777 = Math.atan2(
      (chunkJZLCHNYAInput162 - chunkJZLCHNYABinding776) / chunkJZLCHNYAInput166,
      (chunkJZLCHNYAInput161 - chunkJZLCHNYABinding775) / chunkJZLCHNYAInput165,
    ),
    chunkJZLCHNYABinding778 =
      Math.atan2(
        (chunkJZLCHNYAInput164 - chunkJZLCHNYABinding776) /
          chunkJZLCHNYAInput166,
        (chunkJZLCHNYAInput163 - chunkJZLCHNYABinding775) /
          chunkJZLCHNYAInput165,
      ) - chunkJZLCHNYABinding777;
  chunkJZLCHNYAInput167 &&
    chunkJZLCHNYABinding778 < 0 &&
    (chunkJZLCHNYABinding778 += 2 * Math.PI);
  !chunkJZLCHNYAInput167 &&
    chunkJZLCHNYABinding778 > 0 &&
    (chunkJZLCHNYABinding778 -= 2 * Math.PI);
  let chunkJZLCHNYABinding779 = [];
  for (
    let chunkJZLCHNYABinding1070 = 0;
    chunkJZLCHNYABinding1070 < 20;
    chunkJZLCHNYABinding1070++
  ) {
    let chunkJZLCHNYABinding1087 =
        chunkJZLCHNYABinding777 +
        (chunkJZLCHNYABinding1070 / 19) * chunkJZLCHNYABinding778,
      chunkJZLCHNYABinding1088 =
        chunkJZLCHNYABinding775 +
        chunkJZLCHNYAInput165 * Math.cos(chunkJZLCHNYABinding1087),
      chunkJZLCHNYABinding1089 =
        chunkJZLCHNYABinding776 +
        chunkJZLCHNYAInput166 * Math.sin(chunkJZLCHNYABinding1087);
    chunkJZLCHNYABinding779.push({
      x: chunkJZLCHNYABinding1088,
      y: chunkJZLCHNYABinding1089,
    });
  }
  return chunkJZLCHNYABinding779;
}
async function chunkJZLCHNYAHelper14(
  chunkJZLCHNYAInput122,
  chunkJZLCHNYAInput123,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput123);
  chunkJZLCHNYAInput123.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput122,
      chunkJZLCHNYAInput123,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput123),
    ),
    chunkJZLCHNYABinding657 = bbox.width + chunkJZLCHNYAInput123.padding + 20,
    chunkJZLCHNYABinding658 = bbox.height + chunkJZLCHNYAInput123.padding,
    chunkJZLCHNYABinding659 = chunkJZLCHNYABinding658 / 2,
    chunkJZLCHNYABinding660 =
      chunkJZLCHNYABinding659 / (2.5 + chunkJZLCHNYABinding658 / 50),
    { cssStyles } = chunkJZLCHNYAInput123,
    chunkJZLCHNYABinding661 = [
      {
        x: chunkJZLCHNYABinding657 / 2,
        y: -chunkJZLCHNYABinding658 / 2,
      },
      {
        x: -chunkJZLCHNYABinding657 / 2,
        y: -chunkJZLCHNYABinding658 / 2,
      },
      ...chunkJZLCHNYAHelper13(
        -chunkJZLCHNYABinding657 / 2,
        -chunkJZLCHNYABinding658 / 2,
        -chunkJZLCHNYABinding657 / 2,
        chunkJZLCHNYABinding658 / 2,
        chunkJZLCHNYABinding660,
        chunkJZLCHNYABinding659,
        false,
      ),
      {
        x: chunkJZLCHNYABinding657 / 2,
        y: chunkJZLCHNYABinding658 / 2,
      },
      ...chunkJZLCHNYAHelper13(
        chunkJZLCHNYABinding657 / 2,
        chunkJZLCHNYABinding658 / 2,
        chunkJZLCHNYABinding657 / 2,
        -chunkJZLCHNYABinding658 / 2,
        chunkJZLCHNYABinding660,
        chunkJZLCHNYABinding659,
        true,
      ),
    ],
    chunkJZLCHNYABinding662 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding663 = o(chunkJZLCHNYAInput123, {});
  chunkJZLCHNYAInput123.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding663.roughness = 0),
    (chunkJZLCHNYABinding663.fillStyle = "solid"));
  let chunkJZLCHNYABinding664 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding661),
    chunkJZLCHNYABinding665 = chunkJZLCHNYABinding662.path(
      chunkJZLCHNYABinding664,
      chunkJZLCHNYABinding663,
    ),
    chunkJZLCHNYABinding666 = shapeSvg.insert(
      () => chunkJZLCHNYABinding665,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding666.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput123.look !== "handDrawn" &&
      chunkJZLCHNYABinding666.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput123.look !== "handDrawn" &&
      chunkJZLCHNYABinding666.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding666.attr(
      "transform",
      `translate(${chunkJZLCHNYABinding660 / 2}, 0)`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput123, chunkJZLCHNYABinding666),
    (chunkJZLCHNYAInput123.intersect = function (chunkJZLCHNYAInput354) {
      return $.polygon(
        chunkJZLCHNYAInput123,
        chunkJZLCHNYABinding661,
        chunkJZLCHNYAInput354,
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper15(
  chunkJZLCHNYAInput229,
  chunkJZLCHNYAInput230,
  chunkJZLCHNYAInput231,
  chunkJZLCHNYAInput232,
) {
  return chunkJZLCHNYAInput229
    .insert("polygon", ":first-child")
    .attr(
      "points",
      chunkJZLCHNYAInput232
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -chunkJZLCHNYAInput230 / 2 +
        "," +
        chunkJZLCHNYAInput231 / 2 +
        ")",
    );
}
async function chunkJZLCHNYAHelper16(
  chunkJZLCHNYAInput155,
  chunkJZLCHNYAInput156,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput156);
  chunkJZLCHNYAInput156.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput155,
      chunkJZLCHNYAInput156,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput156),
    ),
    chunkJZLCHNYABinding747 = bbox.height + chunkJZLCHNYAInput156.padding,
    chunkJZLCHNYABinding748 = bbox.width + chunkJZLCHNYAInput156.padding + 12,
    chunkJZLCHNYABinding749 = chunkJZLCHNYABinding748,
    chunkJZLCHNYABinding750 = -chunkJZLCHNYABinding747,
    chunkJZLCHNYABinding751 = [
      {
        x: 12,
        y: chunkJZLCHNYABinding750,
      },
      {
        x: chunkJZLCHNYABinding749,
        y: chunkJZLCHNYABinding750,
      },
      {
        x: chunkJZLCHNYABinding749,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYABinding750 + 12,
      },
      {
        x: 12,
        y: chunkJZLCHNYABinding750,
      },
    ],
    chunkJZLCHNYABinding752,
    { cssStyles } = chunkJZLCHNYAInput156;
  if (chunkJZLCHNYAInput156.look === "handDrawn") {
    let chunkJZLCHNYABinding1017 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1018 = o(chunkJZLCHNYAInput156, {}),
      chunkJZLCHNYABinding1019 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding751),
      chunkJZLCHNYABinding1020 = chunkJZLCHNYABinding1017.path(
        chunkJZLCHNYABinding1019,
        chunkJZLCHNYABinding1018,
      );
    chunkJZLCHNYABinding752 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1020, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding748 / 2}, ${chunkJZLCHNYABinding747 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding752.attr("style", cssStyles);
  } else
    chunkJZLCHNYABinding752 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding748,
      chunkJZLCHNYABinding747,
      chunkJZLCHNYABinding751,
    );
  return (
    nodeStyles && chunkJZLCHNYABinding752.attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput156, chunkJZLCHNYABinding752),
    (chunkJZLCHNYAInput156.intersect = function (chunkJZLCHNYAInput355) {
      return $.polygon(
        chunkJZLCHNYAInput156,
        chunkJZLCHNYABinding751,
        chunkJZLCHNYAInput355,
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper17(chunkJZLCHNYAInput159, chunkJZLCHNYAInput160) {
  let { nodeStyles } = a(chunkJZLCHNYAInput160);
  chunkJZLCHNYAInput160.label = "";
  let chunkJZLCHNYABinding758 = chunkJZLCHNYAInput159
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput160))
      .attr("id", chunkJZLCHNYAInput160.domId ?? chunkJZLCHNYAInput160.id),
    { cssStyles } = chunkJZLCHNYAInput160,
    chunkJZLCHNYABinding759 = Math.max(28, chunkJZLCHNYAInput160.width ?? 0),
    chunkJZLCHNYABinding760 = [
      {
        x: 0,
        y: chunkJZLCHNYABinding759 / 2,
      },
      {
        x: chunkJZLCHNYABinding759 / 2,
        y: 0,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding759 / 2,
      },
      {
        x: -chunkJZLCHNYABinding759 / 2,
        y: 0,
      },
    ],
    chunkJZLCHNYABinding761 = rough.svg(chunkJZLCHNYABinding758),
    chunkJZLCHNYABinding762 = o(chunkJZLCHNYAInput160, {});
  chunkJZLCHNYAInput160.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding762.roughness = 0),
    (chunkJZLCHNYABinding762.fillStyle = "solid"));
  let chunkJZLCHNYABinding763 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding760),
    chunkJZLCHNYABinding764 = chunkJZLCHNYABinding761.path(
      chunkJZLCHNYABinding763,
      chunkJZLCHNYABinding762,
    ),
    chunkJZLCHNYABinding765 = chunkJZLCHNYABinding758.insert(
      () => chunkJZLCHNYABinding764,
      ":first-child",
    );
  return (
    cssStyles &&
      chunkJZLCHNYAInput160.look !== "handDrawn" &&
      chunkJZLCHNYABinding765.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput160.look !== "handDrawn" &&
      chunkJZLCHNYABinding765.selectAll("path").attr("style", nodeStyles),
    (chunkJZLCHNYAInput160.width = 28),
    (chunkJZLCHNYAInput160.height = 28),
    (chunkJZLCHNYAInput160.intersect = function (chunkJZLCHNYAInput356) {
      return $.polygon(
        chunkJZLCHNYAInput160,
        chunkJZLCHNYABinding760,
        chunkJZLCHNYAInput356,
      );
    }),
    chunkJZLCHNYABinding758
  );
}
async function chunkJZLCHNYAHelper18(
  chunkJZLCHNYAInput133,
  chunkJZLCHNYAInput134,
  chunkJZLCHNYAInput135,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput134);
  chunkJZLCHNYAInput134.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput133,
      chunkJZLCHNYAInput134,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput134),
    ),
    chunkJZLCHNYABinding700 = chunkJZLCHNYAInput135?.padding ?? halfPadding,
    chunkJZLCHNYABinding701 = bbox.width / 2 + chunkJZLCHNYABinding700,
    chunkJZLCHNYABinding702,
    { cssStyles } = chunkJZLCHNYAInput134;
  if (chunkJZLCHNYAInput134.look === "handDrawn") {
    let chunkJZLCHNYABinding1045 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1046 = o(chunkJZLCHNYAInput134, {}),
      chunkJZLCHNYABinding1047 = chunkJZLCHNYABinding1045.circle(
        0,
        0,
        chunkJZLCHNYABinding701 * 2,
        chunkJZLCHNYABinding1046,
      );
    chunkJZLCHNYABinding702 = shapeSvg.insert(
      () => chunkJZLCHNYABinding1047,
      ":first-child",
    );
    chunkJZLCHNYABinding702
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles));
  } else
    chunkJZLCHNYABinding702 = shapeSvg
      .insert("circle", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYABinding701)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput134, chunkJZLCHNYABinding702),
    (chunkJZLCHNYAInput134.calcIntersect = function (
      chunkJZLCHNYAInput342,
      chunkJZLCHNYAInput343,
    ) {
      let chunkJZLCHNYABinding1119 = chunkJZLCHNYAInput342.width / 2;
      return $.circle(
        chunkJZLCHNYAInput342,
        chunkJZLCHNYABinding1119,
        chunkJZLCHNYAInput343,
      );
    }),
    (chunkJZLCHNYAInput134.intersect = function (chunkJZLCHNYAInput338) {
      return (
        logger.info(
          "Circle intersect",
          chunkJZLCHNYAInput134,
          chunkJZLCHNYABinding701,
          chunkJZLCHNYAInput338,
        ),
        $.circle(
          chunkJZLCHNYAInput134,
          chunkJZLCHNYABinding701,
          chunkJZLCHNYAInput338,
        )
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper19(chunkJZLCHNYAInput214) {
  let chunkJZLCHNYABinding931 = Math.cos(Math.PI / 4),
    chunkJZLCHNYABinding932 = Math.sin(Math.PI / 4),
    chunkJZLCHNYABinding933 = chunkJZLCHNYAInput214 * 2,
    chunkJZLCHNYABinding934 = {
      x: (chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding931,
      y: (chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding932,
    },
    chunkJZLCHNYABinding935 = {
      x: -(chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding931,
      y: (chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding932,
    },
    chunkJZLCHNYABinding936 = {
      x: -(chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding931,
      y: -(chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding932,
    },
    chunkJZLCHNYABinding937 = {
      x: (chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding931,
      y: -(chunkJZLCHNYABinding933 / 2) * chunkJZLCHNYABinding932,
    };
  return `M ${chunkJZLCHNYABinding935.x},${chunkJZLCHNYABinding935.y} L ${chunkJZLCHNYABinding937.x},${chunkJZLCHNYABinding937.y}
                   M ${chunkJZLCHNYABinding934.x},${chunkJZLCHNYABinding934.y} L ${chunkJZLCHNYABinding936.x},${chunkJZLCHNYABinding936.y}`;
}
function chunkJZLCHNYAHelper20(chunkJZLCHNYAInput153, chunkJZLCHNYAInput154) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput154);
  chunkJZLCHNYAInput154.labelStyle = labelStyles;
  chunkJZLCHNYAInput154.label = "";
  let chunkJZLCHNYABinding739 = chunkJZLCHNYAInput153
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput154))
      .attr("id", chunkJZLCHNYAInput154.domId ?? chunkJZLCHNYAInput154.id),
    chunkJZLCHNYABinding740 = Math.max(30, chunkJZLCHNYAInput154?.width ?? 0),
    { cssStyles } = chunkJZLCHNYAInput154,
    chunkJZLCHNYABinding741 = rough.svg(chunkJZLCHNYABinding739),
    chunkJZLCHNYABinding742 = o(chunkJZLCHNYAInput154, {});
  chunkJZLCHNYAInput154.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding742.roughness = 0),
    (chunkJZLCHNYABinding742.fillStyle = "solid"));
  let chunkJZLCHNYABinding743 = chunkJZLCHNYABinding741.circle(
      0,
      0,
      chunkJZLCHNYABinding740 * 2,
      chunkJZLCHNYABinding742,
    ),
    chunkJZLCHNYABinding744 = chunkJZLCHNYAHelper19(chunkJZLCHNYABinding740),
    chunkJZLCHNYABinding745 = chunkJZLCHNYABinding741.path(
      chunkJZLCHNYABinding744,
      chunkJZLCHNYABinding742,
    ),
    chunkJZLCHNYABinding746 = chunkJZLCHNYABinding739.insert(
      () => chunkJZLCHNYABinding743,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding746.insert(() => chunkJZLCHNYABinding745),
    cssStyles &&
      chunkJZLCHNYAInput154.look !== "handDrawn" &&
      chunkJZLCHNYABinding746.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput154.look !== "handDrawn" &&
      chunkJZLCHNYABinding746.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput154, chunkJZLCHNYABinding746),
    (chunkJZLCHNYAInput154.intersect = function (chunkJZLCHNYAInput303) {
      return (
        logger.info("crossedCircle intersect", chunkJZLCHNYAInput154, {
          radius: chunkJZLCHNYABinding740,
          point: chunkJZLCHNYAInput303,
        }),
        $.circle(
          chunkJZLCHNYAInput154,
          chunkJZLCHNYABinding740,
          chunkJZLCHNYAInput303,
        )
      );
    }),
    chunkJZLCHNYABinding739
  );
}
function chunkJZLCHNYAHelper21(
  chunkJZLCHNYAInput234,
  chunkJZLCHNYAInput235,
  chunkJZLCHNYAInput236,
  chunkJZLCHNYAInput237 = 100,
  chunkJZLCHNYAInput238 = 0,
  chunkJZLCHNYAInput239 = 180,
) {
  let chunkJZLCHNYABinding966 = [],
    chunkJZLCHNYABinding967 = (chunkJZLCHNYAInput238 * Math.PI) / 180,
    chunkJZLCHNYABinding968 =
      ((chunkJZLCHNYAInput239 * Math.PI) / 180 - chunkJZLCHNYABinding967) /
      (chunkJZLCHNYAInput237 - 1);
  for (
    let chunkJZLCHNYABinding1078 = 0;
    chunkJZLCHNYABinding1078 < chunkJZLCHNYAInput237;
    chunkJZLCHNYABinding1078++
  ) {
    let chunkJZLCHNYABinding1097 =
        chunkJZLCHNYABinding967 +
        chunkJZLCHNYABinding1078 * chunkJZLCHNYABinding968,
      chunkJZLCHNYABinding1098 =
        chunkJZLCHNYAInput234 +
        chunkJZLCHNYAInput236 * Math.cos(chunkJZLCHNYABinding1097),
      chunkJZLCHNYABinding1099 =
        chunkJZLCHNYAInput235 +
        chunkJZLCHNYAInput236 * Math.sin(chunkJZLCHNYABinding1097);
    chunkJZLCHNYABinding966.push({
      x: -chunkJZLCHNYABinding1098,
      y: -chunkJZLCHNYABinding1099,
    });
  }
  return chunkJZLCHNYABinding966;
}
async function chunkJZLCHNYAHelper22(
  chunkJZLCHNYAInput35,
  chunkJZLCHNYAInput36,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput36);
  chunkJZLCHNYAInput36.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput35,
      chunkJZLCHNYAInput36,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput36),
    ),
    chunkJZLCHNYABinding285 = bbox.width + (chunkJZLCHNYAInput36.padding ?? 0),
    chunkJZLCHNYABinding286 = bbox.height + (chunkJZLCHNYAInput36.padding ?? 0),
    chunkJZLCHNYABinding287 = Math.max(5, chunkJZLCHNYABinding286 * 0.1),
    { cssStyles } = chunkJZLCHNYAInput36,
    chunkJZLCHNYABinding288 = [
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2,
        -chunkJZLCHNYABinding286 / 2,
        chunkJZLCHNYABinding287,
        30,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYABinding285 / 2 - chunkJZLCHNYABinding287,
        y: chunkJZLCHNYABinding287,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2 + chunkJZLCHNYABinding287 * 2,
        -chunkJZLCHNYABinding287,
        chunkJZLCHNYABinding287,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2 + chunkJZLCHNYABinding287 * 2,
        chunkJZLCHNYABinding287,
        chunkJZLCHNYABinding287,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYABinding285 / 2 - chunkJZLCHNYABinding287,
        y: -chunkJZLCHNYABinding286 / 2,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2,
        chunkJZLCHNYABinding286 / 2,
        chunkJZLCHNYABinding287,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYABinding289 = [
      {
        x: chunkJZLCHNYABinding285 / 2,
        y: -chunkJZLCHNYABinding286 / 2 - chunkJZLCHNYABinding287,
      },
      {
        x: -chunkJZLCHNYABinding285 / 2,
        y: -chunkJZLCHNYABinding286 / 2 - chunkJZLCHNYABinding287,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2,
        -chunkJZLCHNYABinding286 / 2,
        chunkJZLCHNYABinding287,
        20,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYABinding285 / 2 - chunkJZLCHNYABinding287,
        y: -chunkJZLCHNYABinding287,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2 + chunkJZLCHNYABinding285 * 0.1,
        -chunkJZLCHNYABinding287,
        chunkJZLCHNYABinding287,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2 + chunkJZLCHNYABinding285 * 0.1,
        chunkJZLCHNYABinding287,
        chunkJZLCHNYABinding287,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYABinding285 / 2 - chunkJZLCHNYABinding287,
        y: chunkJZLCHNYABinding286 / 2,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYABinding285 / 2,
        chunkJZLCHNYABinding286 / 2,
        chunkJZLCHNYABinding287,
        20,
        0,
        90,
      ),
      {
        x: -chunkJZLCHNYABinding285 / 2,
        y: chunkJZLCHNYABinding286 / 2 + chunkJZLCHNYABinding287,
      },
      {
        x: chunkJZLCHNYABinding285 / 2,
        y: chunkJZLCHNYABinding286 / 2 + chunkJZLCHNYABinding287,
      },
    ],
    chunkJZLCHNYABinding290 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding291 = o(chunkJZLCHNYAInput36, {
      fill: "none",
    });
  chunkJZLCHNYAInput36.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding291.roughness = 0),
    (chunkJZLCHNYABinding291.fillStyle = "solid"));
  let chunkJZLCHNYABinding292 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYABinding288,
    ).replace("Z", ""),
    chunkJZLCHNYABinding293 = chunkJZLCHNYABinding290.path(
      chunkJZLCHNYABinding292,
      chunkJZLCHNYABinding291,
    ),
    chunkJZLCHNYABinding294 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding289),
    chunkJZLCHNYABinding295 = chunkJZLCHNYABinding290.path(
      chunkJZLCHNYABinding294,
      {
        ...chunkJZLCHNYABinding291,
      },
    ),
    chunkJZLCHNYABinding296 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYABinding296
      .insert(() => chunkJZLCHNYABinding295, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYABinding296.insert(
      () => chunkJZLCHNYABinding293,
      ":first-child",
    ),
    chunkJZLCHNYABinding296.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAInput36.look !== "handDrawn" &&
      chunkJZLCHNYABinding296.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput36.look !== "handDrawn" &&
      chunkJZLCHNYABinding296.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding296.attr(
      "transform",
      `translate(${chunkJZLCHNYABinding287}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding285 / 2 + chunkJZLCHNYABinding287 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding286 / 2 + (chunkJZLCHNYAInput36.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput36, chunkJZLCHNYABinding296),
    (chunkJZLCHNYAInput36.intersect = function (chunkJZLCHNYAInput357) {
      return $.polygon(
        chunkJZLCHNYAInput36,
        chunkJZLCHNYABinding289,
        chunkJZLCHNYAInput357,
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper23(
  chunkJZLCHNYAInput246,
  chunkJZLCHNYAInput247,
  chunkJZLCHNYAInput248,
  chunkJZLCHNYAInput249 = 100,
  chunkJZLCHNYAInput250 = 0,
  chunkJZLCHNYAInput251 = 180,
) {
  let chunkJZLCHNYABinding972 = [],
    chunkJZLCHNYABinding973 = (chunkJZLCHNYAInput250 * Math.PI) / 180,
    chunkJZLCHNYABinding974 =
      ((chunkJZLCHNYAInput251 * Math.PI) / 180 - chunkJZLCHNYABinding973) /
      (chunkJZLCHNYAInput249 - 1);
  for (
    let chunkJZLCHNYABinding1080 = 0;
    chunkJZLCHNYABinding1080 < chunkJZLCHNYAInput249;
    chunkJZLCHNYABinding1080++
  ) {
    let chunkJZLCHNYABinding1103 =
        chunkJZLCHNYABinding973 +
        chunkJZLCHNYABinding1080 * chunkJZLCHNYABinding974,
      chunkJZLCHNYABinding1104 =
        chunkJZLCHNYAInput246 +
        chunkJZLCHNYAInput248 * Math.cos(chunkJZLCHNYABinding1103),
      chunkJZLCHNYABinding1105 =
        chunkJZLCHNYAInput247 +
        chunkJZLCHNYAInput248 * Math.sin(chunkJZLCHNYABinding1103);
    chunkJZLCHNYABinding972.push({
      x: chunkJZLCHNYABinding1104,
      y: chunkJZLCHNYABinding1105,
    });
  }
  return chunkJZLCHNYABinding972;
}
async function chunkJZLCHNYAHelper24(
  chunkJZLCHNYAInput33,
  chunkJZLCHNYAInput34,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput34);
  chunkJZLCHNYAInput34.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput33,
      chunkJZLCHNYAInput34,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput34),
    ),
    chunkJZLCHNYABinding273 = bbox.width + (chunkJZLCHNYAInput34.padding ?? 0),
    chunkJZLCHNYABinding274 = bbox.height + (chunkJZLCHNYAInput34.padding ?? 0),
    chunkJZLCHNYABinding275 = Math.max(5, chunkJZLCHNYABinding274 * 0.1),
    { cssStyles } = chunkJZLCHNYAInput34,
    chunkJZLCHNYABinding276 = [
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2,
        -chunkJZLCHNYABinding274 / 2,
        chunkJZLCHNYABinding275,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275,
        y: -chunkJZLCHNYABinding275,
      },
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275 * 2,
        -chunkJZLCHNYABinding275,
        chunkJZLCHNYABinding275,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275 * 2,
        chunkJZLCHNYABinding275,
        chunkJZLCHNYABinding275,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275,
        y: chunkJZLCHNYABinding274 / 2,
      },
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2,
        chunkJZLCHNYABinding274 / 2,
        chunkJZLCHNYABinding275,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYABinding277 = [
      {
        x: -chunkJZLCHNYABinding273 / 2,
        y: -chunkJZLCHNYABinding274 / 2 - chunkJZLCHNYABinding275,
      },
      {
        x: chunkJZLCHNYABinding273 / 2,
        y: -chunkJZLCHNYABinding274 / 2 - chunkJZLCHNYABinding275,
      },
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2,
        -chunkJZLCHNYABinding274 / 2,
        chunkJZLCHNYABinding275,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275,
        y: -chunkJZLCHNYABinding275,
      },
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275 * 2,
        -chunkJZLCHNYABinding275,
        chunkJZLCHNYABinding275,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275 * 2,
        chunkJZLCHNYABinding275,
        chunkJZLCHNYABinding275,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYABinding273 / 2 + chunkJZLCHNYABinding275,
        y: chunkJZLCHNYABinding274 / 2,
      },
      ...chunkJZLCHNYAHelper23(
        chunkJZLCHNYABinding273 / 2,
        chunkJZLCHNYABinding274 / 2,
        chunkJZLCHNYABinding275,
        20,
        0,
        90,
      ),
      {
        x: chunkJZLCHNYABinding273 / 2,
        y: chunkJZLCHNYABinding274 / 2 + chunkJZLCHNYABinding275,
      },
      {
        x: -chunkJZLCHNYABinding273 / 2,
        y: chunkJZLCHNYABinding274 / 2 + chunkJZLCHNYABinding275,
      },
    ],
    chunkJZLCHNYABinding278 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding279 = o(chunkJZLCHNYAInput34, {
      fill: "none",
    });
  chunkJZLCHNYAInput34.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding279.roughness = 0),
    (chunkJZLCHNYABinding279.fillStyle = "solid"));
  let chunkJZLCHNYABinding280 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYABinding276,
    ).replace("Z", ""),
    chunkJZLCHNYABinding281 = chunkJZLCHNYABinding278.path(
      chunkJZLCHNYABinding280,
      chunkJZLCHNYABinding279,
    ),
    chunkJZLCHNYABinding282 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding277),
    chunkJZLCHNYABinding283 = chunkJZLCHNYABinding278.path(
      chunkJZLCHNYABinding282,
      {
        ...chunkJZLCHNYABinding279,
      },
    ),
    chunkJZLCHNYABinding284 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYABinding284
      .insert(() => chunkJZLCHNYABinding283, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYABinding284.insert(
      () => chunkJZLCHNYABinding281,
      ":first-child",
    ),
    chunkJZLCHNYABinding284.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAInput34.look !== "handDrawn" &&
      chunkJZLCHNYABinding284.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput34.look !== "handDrawn" &&
      chunkJZLCHNYABinding284.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding284.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding275}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding273 / 2 + (chunkJZLCHNYAInput34.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding274 / 2 + (chunkJZLCHNYAInput34.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput34, chunkJZLCHNYABinding284),
    (chunkJZLCHNYAInput34.intersect = function (chunkJZLCHNYAInput358) {
      return $.polygon(
        chunkJZLCHNYAInput34,
        chunkJZLCHNYABinding277,
        chunkJZLCHNYAInput358,
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper25(
  chunkJZLCHNYAInput240,
  chunkJZLCHNYAInput241,
  chunkJZLCHNYAInput242,
  chunkJZLCHNYAInput243 = 100,
  chunkJZLCHNYAInput244 = 0,
  chunkJZLCHNYAInput245 = 180,
) {
  let chunkJZLCHNYABinding969 = [],
    chunkJZLCHNYABinding970 = (chunkJZLCHNYAInput244 * Math.PI) / 180,
    chunkJZLCHNYABinding971 =
      ((chunkJZLCHNYAInput245 * Math.PI) / 180 - chunkJZLCHNYABinding970) /
      (chunkJZLCHNYAInput243 - 1);
  for (
    let chunkJZLCHNYABinding1079 = 0;
    chunkJZLCHNYABinding1079 < chunkJZLCHNYAInput243;
    chunkJZLCHNYABinding1079++
  ) {
    let chunkJZLCHNYABinding1100 =
        chunkJZLCHNYABinding970 +
        chunkJZLCHNYABinding1079 * chunkJZLCHNYABinding971,
      chunkJZLCHNYABinding1101 =
        chunkJZLCHNYAInput240 +
        chunkJZLCHNYAInput242 * Math.cos(chunkJZLCHNYABinding1100),
      chunkJZLCHNYABinding1102 =
        chunkJZLCHNYAInput241 +
        chunkJZLCHNYAInput242 * Math.sin(chunkJZLCHNYABinding1100);
    chunkJZLCHNYABinding969.push({
      x: -chunkJZLCHNYABinding1101,
      y: -chunkJZLCHNYABinding1102,
    });
  }
  return chunkJZLCHNYABinding969;
}
async function chunkJZLCHNYAHelper26(
  chunkJZLCHNYAInput23,
  chunkJZLCHNYAInput24,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput24);
  chunkJZLCHNYAInput24.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput23,
      chunkJZLCHNYAInput24,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput24),
    ),
    chunkJZLCHNYABinding229 = bbox.width + (chunkJZLCHNYAInput24.padding ?? 0),
    chunkJZLCHNYABinding230 = bbox.height + (chunkJZLCHNYAInput24.padding ?? 0),
    chunkJZLCHNYABinding231 = Math.max(5, chunkJZLCHNYABinding230 * 0.1),
    { cssStyles } = chunkJZLCHNYAInput24,
    chunkJZLCHNYABinding232 = [
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2,
        -chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        30,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231,
        y: chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2 + chunkJZLCHNYABinding231 * 2,
        -chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2 + chunkJZLCHNYABinding231 * 2,
        chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231,
        y: -chunkJZLCHNYABinding230 / 2,
      },
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2,
        chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYABinding233 = [
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 +
          chunkJZLCHNYABinding231 +
          chunkJZLCHNYABinding231 / 2,
        -chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        y: chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        -chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        0,
        90,
      ),
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        y: -chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 +
          chunkJZLCHNYABinding231 +
          chunkJZLCHNYABinding231 / 2,
        chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        30,
        -180,
        -270,
      ),
    ],
    chunkJZLCHNYABinding234 = [
      {
        x: chunkJZLCHNYABinding229 / 2,
        y: -chunkJZLCHNYABinding230 / 2 - chunkJZLCHNYABinding231,
      },
      {
        x: -chunkJZLCHNYABinding229 / 2,
        y: -chunkJZLCHNYABinding230 / 2 - chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2,
        -chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        20,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231,
        y: -chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2 + chunkJZLCHNYABinding231 * 2,
        -chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2 + chunkJZLCHNYABinding231 * 2,
        chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231,
        y: chunkJZLCHNYABinding230 / 2,
      },
      ...chunkJZLCHNYAHelper25(
        chunkJZLCHNYABinding229 / 2,
        chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        20,
        0,
        90,
      ),
      {
        x: -chunkJZLCHNYABinding229 / 2,
        y: chunkJZLCHNYABinding230 / 2 + chunkJZLCHNYABinding231,
      },
      {
        x:
          chunkJZLCHNYABinding229 / 2 -
          chunkJZLCHNYABinding231 -
          chunkJZLCHNYABinding231 / 2,
        y: chunkJZLCHNYABinding230 / 2 + chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 +
          chunkJZLCHNYABinding231 +
          chunkJZLCHNYABinding231 / 2,
        -chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        y: chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        -chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        0,
        90,
      ),
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        chunkJZLCHNYABinding231,
        chunkJZLCHNYABinding231,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYABinding229 / 2 - chunkJZLCHNYABinding231 / 2,
        y: -chunkJZLCHNYABinding231,
      },
      ...chunkJZLCHNYAHelper25(
        -chunkJZLCHNYABinding229 / 2 +
          chunkJZLCHNYABinding231 +
          chunkJZLCHNYABinding231 / 2,
        chunkJZLCHNYABinding230 / 2,
        chunkJZLCHNYABinding231,
        30,
        -180,
        -270,
      ),
    ],
    chunkJZLCHNYABinding235 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding236 = o(chunkJZLCHNYAInput24, {
      fill: "none",
    });
  chunkJZLCHNYAInput24.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding236.roughness = 0),
    (chunkJZLCHNYABinding236.fillStyle = "solid"));
  let chunkJZLCHNYABinding237 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYABinding232,
    ).replace("Z", ""),
    chunkJZLCHNYABinding238 = chunkJZLCHNYABinding235.path(
      chunkJZLCHNYABinding237,
      chunkJZLCHNYABinding236,
    ),
    chunkJZLCHNYABinding239 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYABinding233,
    ).replace("Z", ""),
    chunkJZLCHNYABinding240 = chunkJZLCHNYABinding235.path(
      chunkJZLCHNYABinding239,
      chunkJZLCHNYABinding236,
    ),
    chunkJZLCHNYABinding241 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding234),
    chunkJZLCHNYABinding242 = chunkJZLCHNYABinding235.path(
      chunkJZLCHNYABinding241,
      {
        ...chunkJZLCHNYABinding236,
      },
    ),
    chunkJZLCHNYABinding243 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYABinding243
      .insert(() => chunkJZLCHNYABinding242, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYABinding243.insert(
      () => chunkJZLCHNYABinding238,
      ":first-child",
    ),
    chunkJZLCHNYABinding243.insert(
      () => chunkJZLCHNYABinding240,
      ":first-child",
    ),
    chunkJZLCHNYABinding243.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAInput24.look !== "handDrawn" &&
      chunkJZLCHNYABinding243.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput24.look !== "handDrawn" &&
      chunkJZLCHNYABinding243.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding243.attr(
      "transform",
      `translate(${chunkJZLCHNYABinding231 - chunkJZLCHNYABinding231 / 4}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding229 / 2 + (chunkJZLCHNYAInput24.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding230 / 2 + (chunkJZLCHNYAInput24.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput24, chunkJZLCHNYABinding243),
    (chunkJZLCHNYAInput24.intersect = function (chunkJZLCHNYAInput359) {
      return $.polygon(
        chunkJZLCHNYAInput24,
        chunkJZLCHNYABinding234,
        chunkJZLCHNYAInput359,
      );
    }),
    shapeSvg
  );
}
async function _e(chunkJZLCHNYAInput103, chunkJZLCHNYAInput104) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput104);
  chunkJZLCHNYAInput104.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput103,
      chunkJZLCHNYAInput104,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput104),
    ),
    chunkJZLCHNYABinding592 = Math.max(
      80,
      (bbox.width + (chunkJZLCHNYAInput104.padding ?? 0) * 2) * 1.25,
      chunkJZLCHNYAInput104?.width ?? 0,
    ),
    chunkJZLCHNYABinding593 = Math.max(
      20,
      bbox.height + (chunkJZLCHNYAInput104.padding ?? 0) * 2,
      chunkJZLCHNYAInput104?.height ?? 0,
    ),
    chunkJZLCHNYABinding594 = chunkJZLCHNYABinding593 / 2,
    { cssStyles } = chunkJZLCHNYAInput104,
    chunkJZLCHNYABinding595 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding596 = o(chunkJZLCHNYAInput104, {});
  chunkJZLCHNYAInput104.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding596.roughness = 0),
    (chunkJZLCHNYABinding596.fillStyle = "solid"));
  let chunkJZLCHNYABinding597 = chunkJZLCHNYABinding592,
    chunkJZLCHNYABinding598 = chunkJZLCHNYABinding593,
    chunkJZLCHNYABinding599 = chunkJZLCHNYABinding597 - chunkJZLCHNYABinding594,
    chunkJZLCHNYABinding600 = chunkJZLCHNYABinding598 / 4,
    chunkJZLCHNYABinding601 = [
      {
        x: chunkJZLCHNYABinding599,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding600,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYABinding598 / 2,
      },
      {
        x: chunkJZLCHNYABinding600,
        y: chunkJZLCHNYABinding598,
      },
      {
        x: chunkJZLCHNYABinding599,
        y: chunkJZLCHNYABinding598,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYABinding599,
        -chunkJZLCHNYABinding598 / 2,
        chunkJZLCHNYABinding594,
        50,
        270,
        90,
      ),
    ],
    chunkJZLCHNYABinding602 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding601),
    chunkJZLCHNYABinding603 = chunkJZLCHNYABinding595.path(
      chunkJZLCHNYABinding602,
      chunkJZLCHNYABinding596,
    ),
    chunkJZLCHNYABinding604 = shapeSvg.insert(
      () => chunkJZLCHNYABinding603,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding604.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput104.look !== "handDrawn" &&
      chunkJZLCHNYABinding604.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput104.look !== "handDrawn" &&
      chunkJZLCHNYABinding604.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding604.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding592 / 2}, ${-chunkJZLCHNYABinding593 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput104, chunkJZLCHNYABinding604),
    (chunkJZLCHNYAInput104.intersect = function (chunkJZLCHNYAInput360) {
      return $.polygon(
        chunkJZLCHNYAInput104,
        chunkJZLCHNYABinding601,
        chunkJZLCHNYAInput360,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper27(
  chunkJZLCHNYAInput45,
  chunkJZLCHNYAInput46,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput46);
  chunkJZLCHNYAInput46.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput45,
      chunkJZLCHNYAInput46,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput46),
    ),
    chunkJZLCHNYABinding351 = Math.max(
      bbox.width + chunkJZLCHNYAInput46.padding,
      chunkJZLCHNYAInput46.width ?? 0,
    ),
    chunkJZLCHNYABinding352 = chunkJZLCHNYABinding351 / 2,
    chunkJZLCHNYABinding353 =
      chunkJZLCHNYABinding352 / (2.5 + chunkJZLCHNYABinding351 / 50),
    chunkJZLCHNYABinding354 = Math.max(
      bbox.height + chunkJZLCHNYABinding353 + chunkJZLCHNYAInput46.padding,
      chunkJZLCHNYAInput46.height ?? 0,
    ),
    chunkJZLCHNYABinding355,
    { cssStyles } = chunkJZLCHNYAInput46;
  if (chunkJZLCHNYAInput46.look === "handDrawn") {
    let chunkJZLCHNYABinding947 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding948 = chunkJZLCHNYABinding13(
        0,
        0,
        chunkJZLCHNYABinding351,
        chunkJZLCHNYABinding354,
        chunkJZLCHNYABinding352,
        chunkJZLCHNYABinding353,
      ),
      chunkJZLCHNYABinding949 = chunkJZLCHNYABinding14(
        0,
        chunkJZLCHNYABinding353,
        chunkJZLCHNYABinding351,
        chunkJZLCHNYABinding354,
        chunkJZLCHNYABinding352,
        chunkJZLCHNYABinding353,
      ),
      chunkJZLCHNYABinding950 = chunkJZLCHNYABinding947.path(
        chunkJZLCHNYABinding948,
        o(chunkJZLCHNYAInput46, {}),
      ),
      chunkJZLCHNYABinding951 = chunkJZLCHNYABinding947.path(
        chunkJZLCHNYABinding949,
        o(chunkJZLCHNYAInput46, {
          fill: "none",
        }),
      );
    chunkJZLCHNYABinding355 = shapeSvg.insert(
      () => chunkJZLCHNYABinding951,
      ":first-child",
    );
    chunkJZLCHNYABinding355 = shapeSvg.insert(
      () => chunkJZLCHNYABinding950,
      ":first-child",
    );
    chunkJZLCHNYABinding355.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYABinding355.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYABinding1039 = chunkJZLCHNYABinding12(
      0,
      0,
      chunkJZLCHNYABinding351,
      chunkJZLCHNYABinding354,
      chunkJZLCHNYABinding352,
      chunkJZLCHNYABinding353,
    );
    chunkJZLCHNYABinding355 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYABinding1039)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYABinding355.attr("label-offset-y", chunkJZLCHNYABinding353),
    chunkJZLCHNYABinding355.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding351 / 2}, ${-(chunkJZLCHNYABinding354 / 2 + chunkJZLCHNYABinding353)})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput46, chunkJZLCHNYABinding355),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (chunkJZLCHNYAInput46.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAInput46.intersect = function (chunkJZLCHNYAInput205) {
      let chunkJZLCHNYABinding873 = $.rect(
          chunkJZLCHNYAInput46,
          chunkJZLCHNYAInput205,
        ),
        chunkJZLCHNYABinding874 =
          chunkJZLCHNYABinding873.x - (chunkJZLCHNYAInput46.x ?? 0);
      if (
        chunkJZLCHNYABinding352 != 0 &&
        (Math.abs(chunkJZLCHNYABinding874) <
          (chunkJZLCHNYAInput46.width ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYABinding874) ==
            (chunkJZLCHNYAInput46.width ?? 0) / 2 &&
            Math.abs(
              chunkJZLCHNYABinding873.y - (chunkJZLCHNYAInput46.y ?? 0),
            ) >
              (chunkJZLCHNYAInput46.height ?? 0) / 2 - chunkJZLCHNYABinding353))
      ) {
        let chunkJZLCHNYABinding1056 =
          chunkJZLCHNYABinding353 *
          chunkJZLCHNYABinding353 *
          (1 -
            (chunkJZLCHNYABinding874 * chunkJZLCHNYABinding874) /
              (chunkJZLCHNYABinding352 * chunkJZLCHNYABinding352));
        chunkJZLCHNYABinding1056 > 0 &&
          (chunkJZLCHNYABinding1056 = Math.sqrt(chunkJZLCHNYABinding1056));
        chunkJZLCHNYABinding1056 =
          chunkJZLCHNYABinding353 - chunkJZLCHNYABinding1056;
        chunkJZLCHNYAInput205.y - (chunkJZLCHNYAInput46.y ?? 0) > 0 &&
          (chunkJZLCHNYABinding1056 = -chunkJZLCHNYABinding1056);
        chunkJZLCHNYABinding873.y += chunkJZLCHNYABinding1056;
      }
      return chunkJZLCHNYABinding873;
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper28(
  chunkJZLCHNYAInput90,
  chunkJZLCHNYAInput91,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput91);
  chunkJZLCHNYAInput91.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput90,
      chunkJZLCHNYAInput91,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput91),
    ),
    chunkJZLCHNYABinding540 = bbox.width + chunkJZLCHNYAInput91.padding,
    chunkJZLCHNYABinding541 = bbox.height + chunkJZLCHNYAInput91.padding,
    chunkJZLCHNYABinding542 = chunkJZLCHNYABinding541 * 0.2,
    chunkJZLCHNYABinding543 = -chunkJZLCHNYABinding540 / 2,
    chunkJZLCHNYABinding544 =
      -chunkJZLCHNYABinding541 / 2 - chunkJZLCHNYABinding542 / 2,
    { cssStyles } = chunkJZLCHNYAInput91,
    chunkJZLCHNYABinding545 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding546 = o(chunkJZLCHNYAInput91, {});
  chunkJZLCHNYAInput91.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding546.roughness = 0),
    (chunkJZLCHNYABinding546.fillStyle = "solid"));
  let chunkJZLCHNYABinding547 = [
      {
        x: chunkJZLCHNYABinding543,
        y: chunkJZLCHNYABinding544 + chunkJZLCHNYABinding542,
      },
      {
        x: -chunkJZLCHNYABinding543,
        y: chunkJZLCHNYABinding544 + chunkJZLCHNYABinding542,
      },
      {
        x: -chunkJZLCHNYABinding543,
        y: -chunkJZLCHNYABinding544,
      },
      {
        x: chunkJZLCHNYABinding543,
        y: -chunkJZLCHNYABinding544,
      },
      {
        x: chunkJZLCHNYABinding543,
        y: chunkJZLCHNYABinding544,
      },
      {
        x: -chunkJZLCHNYABinding543,
        y: chunkJZLCHNYABinding544,
      },
      {
        x: -chunkJZLCHNYABinding543,
        y: chunkJZLCHNYABinding544 + chunkJZLCHNYABinding542,
      },
    ],
    chunkJZLCHNYABinding548 = chunkJZLCHNYABinding545.polygon(
      chunkJZLCHNYABinding547.map((item) => [item.x, item.y]),
      chunkJZLCHNYABinding546,
    ),
    chunkJZLCHNYABinding549 = shapeSvg.insert(
      () => chunkJZLCHNYABinding548,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding549.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput91.look !== "handDrawn" &&
      chunkJZLCHNYABinding549.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput91.look !== "handDrawn" &&
      chunkJZLCHNYABinding549.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${chunkJZLCHNYABinding543 + (chunkJZLCHNYAInput91.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunkJZLCHNYABinding544 + chunkJZLCHNYABinding542 + (chunkJZLCHNYAInput91.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput91, chunkJZLCHNYABinding549),
    (chunkJZLCHNYAInput91.intersect = function (chunkJZLCHNYAInput395) {
      return $.rect(chunkJZLCHNYAInput91, chunkJZLCHNYAInput395);
    }),
    shapeSvg
  );
}
async function be(chunkJZLCHNYAInput71, chunkJZLCHNYAInput72) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput72);
  chunkJZLCHNYAInput72.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput71,
      chunkJZLCHNYAInput72,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput72),
    ),
    chunkJZLCHNYABinding463 = bbox.width / 2 + halfPadding + 5,
    chunkJZLCHNYABinding464 = bbox.width / 2 + halfPadding,
    chunkJZLCHNYABinding465,
    { cssStyles } = chunkJZLCHNYAInput72;
  if (chunkJZLCHNYAInput72.look === "handDrawn") {
    let chunkJZLCHNYABinding926 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding927 = o(chunkJZLCHNYAInput72, {
        roughness: 0.2,
        strokeWidth: 2.5,
      }),
      chunkJZLCHNYABinding928 = o(chunkJZLCHNYAInput72, {
        roughness: 0.2,
        strokeWidth: 1.5,
      }),
      chunkJZLCHNYABinding929 = chunkJZLCHNYABinding926.circle(
        0,
        0,
        chunkJZLCHNYABinding463 * 2,
        chunkJZLCHNYABinding927,
      ),
      chunkJZLCHNYABinding930 = chunkJZLCHNYABinding926.circle(
        0,
        0,
        chunkJZLCHNYABinding464 * 2,
        chunkJZLCHNYABinding928,
      );
    chunkJZLCHNYABinding465 = shapeSvg.insert("g", ":first-child");
    chunkJZLCHNYABinding465
      .attr("class", chunkS3R3BYOJL(chunkJZLCHNYAInput72.cssClasses))
      .attr("style", chunkS3R3BYOJL(cssStyles));
    chunkJZLCHNYABinding465.node()?.appendChild(chunkJZLCHNYABinding929);
    chunkJZLCHNYABinding465.node()?.appendChild(chunkJZLCHNYABinding930);
  } else {
    chunkJZLCHNYABinding465 = shapeSvg.insert("g", ":first-child");
    let chunkJZLCHNYABinding877 = chunkJZLCHNYABinding465.insert(
        "circle",
        ":first-child",
      ),
      chunkJZLCHNYABinding878 = chunkJZLCHNYABinding465.insert("circle");
    chunkJZLCHNYABinding465
      .attr("class", "basic label-container")
      .attr("style", nodeStyles);
    chunkJZLCHNYABinding877
      .attr("class", "outer-circle")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYABinding463)
      .attr("cx", 0)
      .attr("cy", 0);
    chunkJZLCHNYABinding878
      .attr("class", "inner-circle")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYABinding464)
      .attr("cx", 0)
      .attr("cy", 0);
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput72, chunkJZLCHNYABinding465),
    (chunkJZLCHNYAInput72.intersect = function (chunkJZLCHNYAInput315) {
      return (
        logger.info(
          "DoubleCircle intersect",
          chunkJZLCHNYAInput72,
          chunkJZLCHNYABinding463,
          chunkJZLCHNYAInput315,
        ),
        $.circle(
          chunkJZLCHNYAInput72,
          chunkJZLCHNYABinding463,
          chunkJZLCHNYAInput315,
        )
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper29(
  chunkJZLCHNYAInput136,
  chunkJZLCHNYAInput137,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput137);
  chunkJZLCHNYAInput137.label = "";
  chunkJZLCHNYAInput137.labelStyle = labelStyles;
  let chunkJZLCHNYABinding703 = chunkJZLCHNYAInput136
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput137))
      .attr("id", chunkJZLCHNYAInput137.domId ?? chunkJZLCHNYAInput137.id),
    { cssStyles } = chunkJZLCHNYAInput137,
    chunkJZLCHNYABinding704 = rough.svg(chunkJZLCHNYABinding703),
    { nodeBorder } = themeVariables,
    chunkJZLCHNYABinding705 = o(chunkJZLCHNYAInput137, {
      fillStyle: "solid",
    });
  chunkJZLCHNYAInput137.look !== "handDrawn" &&
    (chunkJZLCHNYABinding705.roughness = 0);
  let chunkJZLCHNYABinding706 = chunkJZLCHNYABinding704.circle(
      0,
      0,
      14,
      chunkJZLCHNYABinding705,
    ),
    chunkJZLCHNYABinding707 = chunkJZLCHNYABinding703.insert(
      () => chunkJZLCHNYABinding706,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding707
      .selectAll("path")
      .attr("style", `fill: ${nodeBorder} !important;`),
    cssStyles &&
      cssStyles.length > 0 &&
      chunkJZLCHNYAInput137.look !== "handDrawn" &&
      chunkJZLCHNYABinding707.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput137.look !== "handDrawn" &&
      chunkJZLCHNYABinding707.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput137, chunkJZLCHNYABinding707),
    (chunkJZLCHNYAInput137.intersect = function (chunkJZLCHNYAInput304) {
      return (
        logger.info("filledCircle intersect", chunkJZLCHNYAInput137, {
          radius: 7,
          point: chunkJZLCHNYAInput304,
        }),
        $.circle(chunkJZLCHNYAInput137, 7, chunkJZLCHNYAInput304)
      );
    }),
    chunkJZLCHNYABinding703
  );
}
async function chunkJZLCHNYAHelper30(
  chunkJZLCHNYAInput105,
  chunkJZLCHNYAInput106,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput106);
  chunkJZLCHNYAInput106.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput105,
      chunkJZLCHNYAInput106,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput106),
    ),
    chunkJZLCHNYABinding605 = bbox.width + (chunkJZLCHNYAInput106.padding ?? 0),
    chunkJZLCHNYABinding606 = chunkJZLCHNYABinding605 + bbox.height,
    chunkJZLCHNYABinding607 = chunkJZLCHNYABinding605 + bbox.height,
    chunkJZLCHNYABinding608 = [
      {
        x: 0,
        y: -chunkJZLCHNYABinding606,
      },
      {
        x: chunkJZLCHNYABinding607,
        y: -chunkJZLCHNYABinding606,
      },
      {
        x: chunkJZLCHNYABinding607 / 2,
        y: 0,
      },
    ],
    { cssStyles } = chunkJZLCHNYAInput106,
    chunkJZLCHNYABinding609 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding610 = o(chunkJZLCHNYAInput106, {});
  chunkJZLCHNYAInput106.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding610.roughness = 0),
    (chunkJZLCHNYABinding610.fillStyle = "solid"));
  let chunkJZLCHNYABinding611 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding608),
    chunkJZLCHNYABinding612 = chunkJZLCHNYABinding609.path(
      chunkJZLCHNYABinding611,
      chunkJZLCHNYABinding610,
    ),
    chunkJZLCHNYABinding613 = shapeSvg
      .insert(() => chunkJZLCHNYABinding612, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding606 / 2}, ${chunkJZLCHNYABinding606 / 2})`,
      );
  return (
    cssStyles &&
      chunkJZLCHNYAInput106.look !== "handDrawn" &&
      chunkJZLCHNYABinding613.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput106.look !== "handDrawn" &&
      chunkJZLCHNYABinding613.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAInput106.width = chunkJZLCHNYABinding605),
    (chunkJZLCHNYAInput106.height = chunkJZLCHNYABinding606),
    chunkJZLCHNYAD(chunkJZLCHNYAInput106, chunkJZLCHNYABinding613),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-chunkJZLCHNYABinding606 / 2 + (chunkJZLCHNYAInput106.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAInput106.intersect = function (chunkJZLCHNYAInput335) {
      return (
        logger.info(
          "Triangle intersect",
          chunkJZLCHNYAInput106,
          chunkJZLCHNYABinding608,
          chunkJZLCHNYAInput335,
        ),
        $.polygon(
          chunkJZLCHNYAInput106,
          chunkJZLCHNYABinding608,
          chunkJZLCHNYAInput335,
        )
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper31(
  chunkJZLCHNYAInput120,
  chunkJZLCHNYAInput121,
  { dir, config: { state, themeVariables } },
) {
  let { nodeStyles } = a(chunkJZLCHNYAInput121);
  chunkJZLCHNYAInput121.label = "";
  let chunkJZLCHNYABinding647 = chunkJZLCHNYAInput120
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput121))
      .attr("id", chunkJZLCHNYAInput121.domId ?? chunkJZLCHNYAInput121.id),
    { cssStyles } = chunkJZLCHNYAInput121,
    chunkJZLCHNYABinding648 = Math.max(70, chunkJZLCHNYAInput121?.width ?? 0),
    chunkJZLCHNYABinding649 = Math.max(10, chunkJZLCHNYAInput121?.height ?? 0);
  dir === "LR" &&
    ((chunkJZLCHNYABinding648 = Math.max(
      10,
      chunkJZLCHNYAInput121?.width ?? 0,
    )),
    (chunkJZLCHNYABinding649 = Math.max(
      70,
      chunkJZLCHNYAInput121?.height ?? 0,
    )));
  let chunkJZLCHNYABinding650 = (-1 * chunkJZLCHNYABinding648) / 2,
    chunkJZLCHNYABinding651 = (-1 * chunkJZLCHNYABinding649) / 2,
    chunkJZLCHNYABinding652 = rough.svg(chunkJZLCHNYABinding647),
    chunkJZLCHNYABinding653 = o(chunkJZLCHNYAInput121, {
      stroke: themeVariables.lineColor,
      fill: themeVariables.lineColor,
    });
  chunkJZLCHNYAInput121.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding653.roughness = 0),
    (chunkJZLCHNYABinding653.fillStyle = "solid"));
  let chunkJZLCHNYABinding654 = chunkJZLCHNYABinding652.rectangle(
      chunkJZLCHNYABinding650,
      chunkJZLCHNYABinding651,
      chunkJZLCHNYABinding648,
      chunkJZLCHNYABinding649,
      chunkJZLCHNYABinding653,
    ),
    chunkJZLCHNYABinding655 = chunkJZLCHNYABinding647.insert(
      () => chunkJZLCHNYABinding654,
      ":first-child",
    );
  cssStyles &&
    chunkJZLCHNYAInput121.look !== "handDrawn" &&
    chunkJZLCHNYABinding655.selectAll("path").attr("style", cssStyles);
  nodeStyles &&
    chunkJZLCHNYAInput121.look !== "handDrawn" &&
    chunkJZLCHNYABinding655.selectAll("path").attr("style", nodeStyles);
  chunkJZLCHNYAD(chunkJZLCHNYAInput121, chunkJZLCHNYABinding655);
  let chunkJZLCHNYABinding656 = state?.padding ?? 0;
  return (
    chunkJZLCHNYAInput121.width &&
      chunkJZLCHNYAInput121.height &&
      ((chunkJZLCHNYAInput121.width += chunkJZLCHNYABinding656 / 2 || 0),
      (chunkJZLCHNYAInput121.height += chunkJZLCHNYABinding656 / 2 || 0)),
    (chunkJZLCHNYAInput121.intersect = function (chunkJZLCHNYAInput396) {
      return $.rect(chunkJZLCHNYAInput121, chunkJZLCHNYAInput396);
    }),
    chunkJZLCHNYABinding647
  );
}
async function chunkJZLCHNYAHelper32(
  chunkJZLCHNYAInput107,
  chunkJZLCHNYAInput108,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput108);
  chunkJZLCHNYAInput108.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput107,
      chunkJZLCHNYAInput108,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput108),
    ),
    chunkJZLCHNYABinding614 = Math.max(
      80,
      bbox.width + (chunkJZLCHNYAInput108.padding ?? 0) * 2,
      chunkJZLCHNYAInput108?.width ?? 0,
    ),
    chunkJZLCHNYABinding615 = Math.max(
      50,
      bbox.height + (chunkJZLCHNYAInput108.padding ?? 0) * 2,
      chunkJZLCHNYAInput108?.height ?? 0,
    ),
    chunkJZLCHNYABinding616 = chunkJZLCHNYABinding615 / 2,
    { cssStyles } = chunkJZLCHNYAInput108,
    chunkJZLCHNYABinding617 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding618 = o(chunkJZLCHNYAInput108, {});
  chunkJZLCHNYAInput108.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding618.roughness = 0),
    (chunkJZLCHNYABinding618.fillStyle = "solid"));
  let chunkJZLCHNYABinding619 = [
      {
        x: -chunkJZLCHNYABinding614 / 2,
        y: -chunkJZLCHNYABinding615 / 2,
      },
      {
        x: chunkJZLCHNYABinding614 / 2 - chunkJZLCHNYABinding616,
        y: -chunkJZLCHNYABinding615 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYABinding614 / 2 + chunkJZLCHNYABinding616,
        0,
        chunkJZLCHNYABinding616,
        50,
        90,
        270,
      ),
      {
        x: chunkJZLCHNYABinding614 / 2 - chunkJZLCHNYABinding616,
        y: chunkJZLCHNYABinding615 / 2,
      },
      {
        x: -chunkJZLCHNYABinding614 / 2,
        y: chunkJZLCHNYABinding615 / 2,
      },
    ],
    chunkJZLCHNYABinding620 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding619),
    chunkJZLCHNYABinding621 = chunkJZLCHNYABinding617.path(
      chunkJZLCHNYABinding620,
      chunkJZLCHNYABinding618,
    ),
    chunkJZLCHNYABinding622 = shapeSvg.insert(
      () => chunkJZLCHNYABinding621,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding622.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput108.look !== "handDrawn" &&
      chunkJZLCHNYABinding622.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput108.look !== "handDrawn" &&
      chunkJZLCHNYABinding622.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput108, chunkJZLCHNYABinding622),
    (chunkJZLCHNYAInput108.intersect = function (chunkJZLCHNYAInput305) {
      return (
        logger.info("Pill intersect", chunkJZLCHNYAInput108, {
          radius: chunkJZLCHNYABinding616,
          point: chunkJZLCHNYAInput305,
        }),
        $.polygon(
          chunkJZLCHNYAInput108,
          chunkJZLCHNYABinding619,
          chunkJZLCHNYAInput305,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper33(
  chunkJZLCHNYAInput116,
  chunkJZLCHNYAInput117,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput117);
  chunkJZLCHNYAInput117.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput116,
      chunkJZLCHNYAInput117,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput117),
    ),
    chunkJZLCHNYABinding626 =
      bbox.height + (chunkJZLCHNYAInput117.padding ?? 0),
    chunkJZLCHNYABinding627 =
      bbox.width + (chunkJZLCHNYAInput117.padding ?? 0) * 2.5,
    { cssStyles } = chunkJZLCHNYAInput117,
    chunkJZLCHNYABinding628 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding629 = o(chunkJZLCHNYAInput117, {});
  chunkJZLCHNYAInput117.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding629.roughness = 0),
    (chunkJZLCHNYABinding629.fillStyle = "solid"));
  let chunkJZLCHNYABinding630 = chunkJZLCHNYABinding627 / 2,
    chunkJZLCHNYABinding631 = chunkJZLCHNYABinding630 / 6;
  chunkJZLCHNYABinding630 += chunkJZLCHNYABinding631;
  let chunkJZLCHNYABinding632 = chunkJZLCHNYABinding626 / 2,
    chunkJZLCHNYABinding633 = chunkJZLCHNYABinding632 / 2,
    chunkJZLCHNYABinding634 = chunkJZLCHNYABinding630 - chunkJZLCHNYABinding633,
    chunkJZLCHNYABinding635 = [
      {
        x: -chunkJZLCHNYABinding634,
        y: -chunkJZLCHNYABinding632,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding632,
      },
      {
        x: chunkJZLCHNYABinding634,
        y: -chunkJZLCHNYABinding632,
      },
      {
        x: chunkJZLCHNYABinding630,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding634,
        y: chunkJZLCHNYABinding632,
      },
      {
        x: 0,
        y: chunkJZLCHNYABinding632,
      },
      {
        x: -chunkJZLCHNYABinding634,
        y: chunkJZLCHNYABinding632,
      },
      {
        x: -chunkJZLCHNYABinding630,
        y: 0,
      },
    ],
    chunkJZLCHNYABinding636 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding635),
    chunkJZLCHNYABinding637 = chunkJZLCHNYABinding628.path(
      chunkJZLCHNYABinding636,
      chunkJZLCHNYABinding629,
    ),
    chunkJZLCHNYABinding638 = shapeSvg.insert(
      () => chunkJZLCHNYABinding637,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding638.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput117.look !== "handDrawn" &&
      chunkJZLCHNYABinding638.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput117.look !== "handDrawn" &&
      chunkJZLCHNYABinding638.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAInput117.width = chunkJZLCHNYABinding627),
    (chunkJZLCHNYAInput117.height = chunkJZLCHNYABinding626),
    chunkJZLCHNYAD(chunkJZLCHNYAInput117, chunkJZLCHNYABinding638),
    (chunkJZLCHNYAInput117.intersect = function (chunkJZLCHNYAInput361) {
      return $.polygon(
        chunkJZLCHNYAInput117,
        chunkJZLCHNYABinding635,
        chunkJZLCHNYAInput361,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper34(
  chunkJZLCHNYAInput131,
  chunkJZLCHNYAInput132,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput132);
  chunkJZLCHNYAInput132.label = "";
  chunkJZLCHNYAInput132.labelStyle = labelStyles;
  let { shapeSvg } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput131,
      chunkJZLCHNYAInput132,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput132),
    ),
    chunkJZLCHNYABinding691 = Math.max(30, chunkJZLCHNYAInput132?.width ?? 0),
    chunkJZLCHNYABinding692 = Math.max(30, chunkJZLCHNYAInput132?.height ?? 0),
    { cssStyles } = chunkJZLCHNYAInput132,
    chunkJZLCHNYABinding693 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding694 = o(chunkJZLCHNYAInput132, {});
  chunkJZLCHNYAInput132.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding694.roughness = 0),
    (chunkJZLCHNYABinding694.fillStyle = "solid"));
  let chunkJZLCHNYABinding695 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding691,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYABinding692,
      },
      {
        x: chunkJZLCHNYABinding691,
        y: chunkJZLCHNYABinding692,
      },
    ],
    chunkJZLCHNYABinding696 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding695),
    chunkJZLCHNYABinding697 = chunkJZLCHNYABinding693.path(
      chunkJZLCHNYABinding696,
      chunkJZLCHNYABinding694,
    ),
    chunkJZLCHNYABinding698 = shapeSvg.insert(
      () => chunkJZLCHNYABinding697,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding698.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput132.look !== "handDrawn" &&
      chunkJZLCHNYABinding698.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput132.look !== "handDrawn" &&
      chunkJZLCHNYABinding698.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding698.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding691 / 2}, ${-chunkJZLCHNYABinding692 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput132, chunkJZLCHNYABinding698),
    (chunkJZLCHNYAInput132.intersect = function (chunkJZLCHNYAInput314) {
      return (
        logger.info("Pill intersect", chunkJZLCHNYAInput132, {
          points: chunkJZLCHNYABinding695,
        }),
        $.polygon(
          chunkJZLCHNYAInput132,
          chunkJZLCHNYABinding695,
          chunkJZLCHNYAInput314,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper35(
  chunkJZLCHNYAInput17,
  chunkJZLCHNYAInput18,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunkJZLCHNYAInput18);
  chunkJZLCHNYAInput18.labelStyle = labelStyles;
  let chunkJZLCHNYABinding179 = chunkJZLCHNYAInput18.assetHeight ?? 48,
    chunkJZLCHNYABinding180 = chunkJZLCHNYAInput18.assetWidth ?? 48,
    chunkJZLCHNYABinding181 = Math.max(
      chunkJZLCHNYABinding179,
      chunkJZLCHNYABinding180,
    ),
    chunkJZLCHNYABinding182 = flowchart?.wrappingWidth;
  chunkJZLCHNYAInput18.width = Math.max(
    chunkJZLCHNYABinding181,
    chunkJZLCHNYABinding182 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput17,
      chunkJZLCHNYAInput18,
      "icon-shape default",
    ),
    chunkJZLCHNYABinding183 = chunkJZLCHNYAInput18.pos === "t",
    chunkJZLCHNYABinding184 = chunkJZLCHNYABinding181,
    chunkJZLCHNYABinding185 = chunkJZLCHNYABinding181,
    { nodeBorder } = themeVariables,
    { stylesMap: chunkJZLCHNYABinding186 } =
      chunkATLVNIR6T(chunkJZLCHNYAInput18),
    chunkJZLCHNYABinding187 = -chunkJZLCHNYABinding185 / 2,
    chunkJZLCHNYABinding188 = -chunkJZLCHNYABinding184 / 2,
    chunkJZLCHNYABinding189 = chunkJZLCHNYAInput18.label ? 8 : 0,
    chunkJZLCHNYABinding190 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding191 = o(chunkJZLCHNYAInput18, {
      stroke: "none",
      fill: "none",
    });
  chunkJZLCHNYAInput18.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding191.roughness = 0),
    (chunkJZLCHNYABinding191.fillStyle = "solid"));
  let chunkJZLCHNYABinding192 = chunkJZLCHNYABinding190.rectangle(
      chunkJZLCHNYABinding187,
      chunkJZLCHNYABinding188,
      chunkJZLCHNYABinding185,
      chunkJZLCHNYABinding184,
      chunkJZLCHNYABinding191,
    ),
    chunkJZLCHNYABinding193 = Math.max(chunkJZLCHNYABinding185, bbox.width),
    chunkJZLCHNYABinding194 =
      chunkJZLCHNYABinding184 + bbox.height + chunkJZLCHNYABinding189,
    chunkJZLCHNYABinding195 = chunkJZLCHNYABinding190.rectangle(
      -chunkJZLCHNYABinding193 / 2,
      -chunkJZLCHNYABinding194 / 2,
      chunkJZLCHNYABinding193,
      chunkJZLCHNYABinding194,
      {
        ...chunkJZLCHNYABinding191,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYABinding196 = shapeSvg.insert(
      () => chunkJZLCHNYABinding192,
      ":first-child",
    ),
    chunkJZLCHNYABinding197 = shapeSvg.insert(() => chunkJZLCHNYABinding195);
  if (chunkJZLCHNYAInput18.icon) {
    let chunkJZLCHNYABinding891 = shapeSvg.append("g");
    chunkJZLCHNYABinding891.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAInput18.icon, {
        height: chunkJZLCHNYABinding181,
        width: chunkJZLCHNYABinding181,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYABinding892 = chunkJZLCHNYABinding891.node().getBBox(),
      chunkJZLCHNYABinding893 = chunkJZLCHNYABinding892.width,
      chunkJZLCHNYABinding894 = chunkJZLCHNYABinding892.height,
      chunkJZLCHNYABinding895 = chunkJZLCHNYABinding892.x,
      chunkJZLCHNYABinding896 = chunkJZLCHNYABinding892.y;
    chunkJZLCHNYABinding891.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding893 / 2 - chunkJZLCHNYABinding895},${chunkJZLCHNYABinding183 ? bbox.height / 2 + chunkJZLCHNYABinding189 / 2 - chunkJZLCHNYABinding894 / 2 - chunkJZLCHNYABinding896 : -bbox.height / 2 - chunkJZLCHNYABinding189 / 2 - chunkJZLCHNYABinding894 / 2 - chunkJZLCHNYABinding896})`,
    );
    chunkJZLCHNYABinding891.attr(
      "style",
      `color: ${chunkJZLCHNYABinding186.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYABinding183 ? -chunkJZLCHNYABinding194 / 2 : chunkJZLCHNYABinding194 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYABinding196.attr(
      "transform",
      `translate(0,${chunkJZLCHNYABinding183 ? bbox.height / 2 + chunkJZLCHNYABinding189 / 2 : -bbox.height / 2 - chunkJZLCHNYABinding189 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput18, chunkJZLCHNYABinding197),
    (chunkJZLCHNYAInput18.intersect = function (chunkJZLCHNYAInput86) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunkJZLCHNYAInput18,
          chunkJZLCHNYAInput86,
        ),
        !chunkJZLCHNYAInput18.label)
      )
        return $.rect(chunkJZLCHNYAInput18, chunkJZLCHNYAInput86);
      let chunkJZLCHNYABinding524 = chunkJZLCHNYAInput18.x ?? 0,
        chunkJZLCHNYABinding525 = chunkJZLCHNYAInput18.y ?? 0,
        chunkJZLCHNYABinding526 = chunkJZLCHNYAInput18.height ?? 0,
        chunkJZLCHNYABinding527 = [];
      return (
        (chunkJZLCHNYABinding527 = chunkJZLCHNYABinding183
          ? [
              {
                x: chunkJZLCHNYABinding524 - bbox.width / 2,
                y: chunkJZLCHNYABinding525 - chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 + bbox.width / 2,
                y: chunkJZLCHNYABinding525 - chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding189,
              },
              {
                x: chunkJZLCHNYABinding524 + chunkJZLCHNYABinding185 / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding189,
              },
              {
                x: chunkJZLCHNYABinding524 + chunkJZLCHNYABinding185 / 2,
                y: chunkJZLCHNYABinding525 + chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 - chunkJZLCHNYABinding185 / 2,
                y: chunkJZLCHNYABinding525 + chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 - chunkJZLCHNYABinding185 / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding189,
              },
              {
                x: chunkJZLCHNYABinding524 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding189,
              },
            ]
          : [
              {
                x: chunkJZLCHNYABinding524 - chunkJZLCHNYABinding185 / 2,
                y: chunkJZLCHNYABinding525 - chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 + chunkJZLCHNYABinding185 / 2,
                y: chunkJZLCHNYABinding525 - chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 + chunkJZLCHNYABinding185 / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  chunkJZLCHNYABinding184,
              },
              {
                x: chunkJZLCHNYABinding524 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  chunkJZLCHNYABinding184,
              },
              {
                x: chunkJZLCHNYABinding524 + bbox.width / 2 / 2,
                y: chunkJZLCHNYABinding525 + chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 - bbox.width / 2,
                y: chunkJZLCHNYABinding525 + chunkJZLCHNYABinding526 / 2,
              },
              {
                x: chunkJZLCHNYABinding524 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  chunkJZLCHNYABinding184,
              },
              {
                x: chunkJZLCHNYABinding524 - chunkJZLCHNYABinding185 / 2,
                y:
                  chunkJZLCHNYABinding525 -
                  chunkJZLCHNYABinding526 / 2 +
                  chunkJZLCHNYABinding184,
              },
            ]),
        $.polygon(
          chunkJZLCHNYAInput18,
          chunkJZLCHNYABinding527,
          chunkJZLCHNYAInput86,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper36(
  chunkJZLCHNYAInput43,
  chunkJZLCHNYAInput44,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunkJZLCHNYAInput44);
  chunkJZLCHNYAInput44.labelStyle = labelStyles;
  let chunkJZLCHNYABinding329 = chunkJZLCHNYAInput44.assetHeight ?? 48,
    chunkJZLCHNYABinding330 = chunkJZLCHNYAInput44.assetWidth ?? 48,
    chunkJZLCHNYABinding331 = Math.max(
      chunkJZLCHNYABinding329,
      chunkJZLCHNYABinding330,
    ),
    chunkJZLCHNYABinding332 = flowchart?.wrappingWidth;
  chunkJZLCHNYAInput44.width = Math.max(
    chunkJZLCHNYABinding331,
    chunkJZLCHNYABinding332 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput43,
      chunkJZLCHNYAInput44,
      "icon-shape default",
    ),
    chunkJZLCHNYABinding333 = chunkJZLCHNYAInput44.label ? 8 : 0,
    chunkJZLCHNYABinding334 = chunkJZLCHNYAInput44.pos === "t",
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap: chunkJZLCHNYABinding335 } =
      chunkATLVNIR6T(chunkJZLCHNYAInput44),
    chunkJZLCHNYABinding336 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding337 = o(chunkJZLCHNYAInput44, {});
  chunkJZLCHNYAInput44.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding337.roughness = 0),
    (chunkJZLCHNYABinding337.fillStyle = "solid"));
  chunkJZLCHNYABinding337.stroke =
    chunkJZLCHNYABinding335.get("fill") ?? mainBkg;
  let chunkJZLCHNYABinding338 = shapeSvg.append("g");
  chunkJZLCHNYAInput44.icon &&
    chunkJZLCHNYABinding338.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAInput44.icon, {
        height: chunkJZLCHNYABinding331,
        width: chunkJZLCHNYABinding331,
        fallbackPrefix: "",
      })}</g>`,
    );
  let chunkJZLCHNYABinding339 = chunkJZLCHNYABinding338.node().getBBox(),
    chunkJZLCHNYABinding340 = chunkJZLCHNYABinding339.width,
    chunkJZLCHNYABinding341 = chunkJZLCHNYABinding339.height,
    chunkJZLCHNYABinding342 = chunkJZLCHNYABinding339.x,
    chunkJZLCHNYABinding343 = chunkJZLCHNYABinding339.y,
    chunkJZLCHNYABinding344 =
      Math.max(chunkJZLCHNYABinding340, chunkJZLCHNYABinding341) * Math.SQRT2 +
      40,
    chunkJZLCHNYABinding345 = chunkJZLCHNYABinding336.circle(
      0,
      0,
      chunkJZLCHNYABinding344,
      chunkJZLCHNYABinding337,
    ),
    chunkJZLCHNYABinding346 = Math.max(chunkJZLCHNYABinding344, bbox.width),
    chunkJZLCHNYABinding347 =
      chunkJZLCHNYABinding344 + bbox.height + chunkJZLCHNYABinding333,
    chunkJZLCHNYABinding348 = chunkJZLCHNYABinding336.rectangle(
      -chunkJZLCHNYABinding346 / 2,
      -chunkJZLCHNYABinding347 / 2,
      chunkJZLCHNYABinding346,
      chunkJZLCHNYABinding347,
      {
        ...chunkJZLCHNYABinding337,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYABinding349 = shapeSvg.insert(
      () => chunkJZLCHNYABinding345,
      ":first-child",
    ),
    chunkJZLCHNYABinding350 = shapeSvg.insert(() => chunkJZLCHNYABinding348);
  return (
    chunkJZLCHNYABinding338.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding340 / 2 - chunkJZLCHNYABinding342},${chunkJZLCHNYABinding334 ? bbox.height / 2 + chunkJZLCHNYABinding333 / 2 - chunkJZLCHNYABinding341 / 2 - chunkJZLCHNYABinding343 : -bbox.height / 2 - chunkJZLCHNYABinding333 / 2 - chunkJZLCHNYABinding341 / 2 - chunkJZLCHNYABinding343})`,
    ),
    chunkJZLCHNYABinding338.attr(
      "style",
      `color: ${chunkJZLCHNYABinding335.get("stroke") ?? nodeBorder};`,
    ),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYABinding334 ? -chunkJZLCHNYABinding347 / 2 : chunkJZLCHNYABinding347 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYABinding349.attr(
      "transform",
      `translate(0,${chunkJZLCHNYABinding334 ? bbox.height / 2 + chunkJZLCHNYABinding333 / 2 : -bbox.height / 2 - chunkJZLCHNYABinding333 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput44, chunkJZLCHNYABinding350),
    (chunkJZLCHNYAInput44.intersect = function (chunkJZLCHNYAInput341) {
      return (
        logger.info(
          "iconSquare intersect",
          chunkJZLCHNYAInput44,
          chunkJZLCHNYAInput341,
        ),
        $.rect(chunkJZLCHNYAInput44, chunkJZLCHNYAInput341)
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper37(
  chunkJZLCHNYAInput9,
  chunkJZLCHNYAInput10,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunkJZLCHNYAInput10);
  chunkJZLCHNYAInput10.labelStyle = labelStyles;
  let chunkJZLCHNYABinding121 = chunkJZLCHNYAInput10.assetHeight ?? 48,
    chunkJZLCHNYABinding122 = chunkJZLCHNYAInput10.assetWidth ?? 48,
    chunkJZLCHNYABinding123 = Math.max(
      chunkJZLCHNYABinding121,
      chunkJZLCHNYABinding122,
    ),
    chunkJZLCHNYABinding124 = flowchart?.wrappingWidth;
  chunkJZLCHNYAInput10.width = Math.max(
    chunkJZLCHNYABinding123,
    chunkJZLCHNYABinding124 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput9,
      chunkJZLCHNYAInput10,
      "icon-shape default",
    ),
    chunkJZLCHNYABinding125 = chunkJZLCHNYAInput10.pos === "t",
    chunkJZLCHNYABinding126 = chunkJZLCHNYABinding123 + halfPadding * 2,
    chunkJZLCHNYABinding127 = chunkJZLCHNYABinding123 + halfPadding * 2,
    { nodeBorder: chunkJZLCHNYABinding128, mainBkg } = themeVariables,
    { stylesMap } = chunkATLVNIR6T(chunkJZLCHNYAInput10),
    chunkJZLCHNYABinding129 = -chunkJZLCHNYABinding127 / 2,
    chunkJZLCHNYABinding130 = -chunkJZLCHNYABinding126 / 2,
    chunkJZLCHNYABinding131 = chunkJZLCHNYAInput10.label ? 8 : 0,
    chunkJZLCHNYABinding132 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding133 = o(chunkJZLCHNYAInput10, {});
  chunkJZLCHNYAInput10.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding133.roughness = 0),
    (chunkJZLCHNYABinding133.fillStyle = "solid"));
  chunkJZLCHNYABinding133.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunkJZLCHNYABinding134 = chunkJZLCHNYABinding132.path(
      chunkJZLCHNYABinding4(
        chunkJZLCHNYABinding129,
        chunkJZLCHNYABinding130,
        chunkJZLCHNYABinding127,
        chunkJZLCHNYABinding126,
        5,
      ),
      chunkJZLCHNYABinding133,
    ),
    chunkJZLCHNYABinding135 = Math.max(chunkJZLCHNYABinding127, bbox.width),
    chunkJZLCHNYABinding136 =
      chunkJZLCHNYABinding126 + bbox.height + chunkJZLCHNYABinding131,
    chunkJZLCHNYABinding137 = chunkJZLCHNYABinding132.rectangle(
      -chunkJZLCHNYABinding135 / 2,
      -chunkJZLCHNYABinding136 / 2,
      chunkJZLCHNYABinding135,
      chunkJZLCHNYABinding136,
      {
        ...chunkJZLCHNYABinding133,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYABinding138 = shapeSvg
      .insert(() => chunkJZLCHNYABinding134, ":first-child")
      .attr("class", "icon-shape2"),
    chunkJZLCHNYABinding139 = shapeSvg.insert(() => chunkJZLCHNYABinding137);
  if (chunkJZLCHNYAInput10.icon) {
    let chunkJZLCHNYABinding897 = shapeSvg.append("g");
    chunkJZLCHNYABinding897.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAInput10.icon, {
        height: chunkJZLCHNYABinding123,
        width: chunkJZLCHNYABinding123,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYABinding898 = chunkJZLCHNYABinding897.node().getBBox(),
      chunkJZLCHNYABinding899 = chunkJZLCHNYABinding898.width,
      chunkJZLCHNYABinding900 = chunkJZLCHNYABinding898.height,
      chunkJZLCHNYABinding901 = chunkJZLCHNYABinding898.x,
      chunkJZLCHNYABinding902 = chunkJZLCHNYABinding898.y;
    chunkJZLCHNYABinding897.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding899 / 2 - chunkJZLCHNYABinding901},${chunkJZLCHNYABinding125 ? bbox.height / 2 + chunkJZLCHNYABinding131 / 2 - chunkJZLCHNYABinding900 / 2 - chunkJZLCHNYABinding902 : -bbox.height / 2 - chunkJZLCHNYABinding131 / 2 - chunkJZLCHNYABinding900 / 2 - chunkJZLCHNYABinding902})`,
    );
    chunkJZLCHNYABinding897.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunkJZLCHNYABinding128};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYABinding125 ? -chunkJZLCHNYABinding136 / 2 : chunkJZLCHNYABinding136 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYABinding138.attr(
      "transform",
      `translate(0,${chunkJZLCHNYABinding125 ? bbox.height / 2 + chunkJZLCHNYABinding131 / 2 : -bbox.height / 2 - chunkJZLCHNYABinding131 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput10, chunkJZLCHNYABinding139),
    (chunkJZLCHNYAInput10.intersect = function (chunkJZLCHNYAInput87) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunkJZLCHNYAInput10,
          chunkJZLCHNYAInput87,
        ),
        !chunkJZLCHNYAInput10.label)
      )
        return $.rect(chunkJZLCHNYAInput10, chunkJZLCHNYAInput87);
      let chunkJZLCHNYABinding528 = chunkJZLCHNYAInput10.x ?? 0,
        chunkJZLCHNYABinding529 = chunkJZLCHNYAInput10.y ?? 0,
        chunkJZLCHNYABinding530 = chunkJZLCHNYAInput10.height ?? 0,
        chunkJZLCHNYABinding531 = [];
      return (
        (chunkJZLCHNYABinding531 = chunkJZLCHNYABinding125
          ? [
              {
                x: chunkJZLCHNYABinding528 - bbox.width / 2,
                y: chunkJZLCHNYABinding529 - chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 + bbox.width / 2,
                y: chunkJZLCHNYABinding529 - chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding131,
              },
              {
                x: chunkJZLCHNYABinding528 + chunkJZLCHNYABinding127 / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding131,
              },
              {
                x: chunkJZLCHNYABinding528 + chunkJZLCHNYABinding127 / 2,
                y: chunkJZLCHNYABinding529 + chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 - chunkJZLCHNYABinding127 / 2,
                y: chunkJZLCHNYABinding529 + chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 - chunkJZLCHNYABinding127 / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding131,
              },
              {
                x: chunkJZLCHNYABinding528 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding131,
              },
            ]
          : [
              {
                x: chunkJZLCHNYABinding528 - chunkJZLCHNYABinding127 / 2,
                y: chunkJZLCHNYABinding529 - chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 + chunkJZLCHNYABinding127 / 2,
                y: chunkJZLCHNYABinding529 - chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 + chunkJZLCHNYABinding127 / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  chunkJZLCHNYABinding126,
              },
              {
                x: chunkJZLCHNYABinding528 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  chunkJZLCHNYABinding126,
              },
              {
                x: chunkJZLCHNYABinding528 + bbox.width / 2 / 2,
                y: chunkJZLCHNYABinding529 + chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 - bbox.width / 2,
                y: chunkJZLCHNYABinding529 + chunkJZLCHNYABinding530 / 2,
              },
              {
                x: chunkJZLCHNYABinding528 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  chunkJZLCHNYABinding126,
              },
              {
                x: chunkJZLCHNYABinding528 - chunkJZLCHNYABinding127 / 2,
                y:
                  chunkJZLCHNYABinding529 -
                  chunkJZLCHNYABinding530 / 2 +
                  chunkJZLCHNYABinding126,
              },
            ]),
        $.polygon(
          chunkJZLCHNYAInput10,
          chunkJZLCHNYABinding531,
          chunkJZLCHNYAInput87,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper38(
  chunkJZLCHNYAInput11,
  chunkJZLCHNYAInput12,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = a(chunkJZLCHNYAInput12);
  chunkJZLCHNYAInput12.labelStyle = labelStyles;
  let chunkJZLCHNYABinding140 = chunkJZLCHNYAInput12.assetHeight ?? 48,
    chunkJZLCHNYABinding141 = chunkJZLCHNYAInput12.assetWidth ?? 48,
    chunkJZLCHNYABinding142 = Math.max(
      chunkJZLCHNYABinding140,
      chunkJZLCHNYABinding141,
    ),
    chunkJZLCHNYABinding143 = flowchart?.wrappingWidth;
  chunkJZLCHNYAInput12.width = Math.max(
    chunkJZLCHNYABinding142,
    chunkJZLCHNYABinding143 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput11,
      chunkJZLCHNYAInput12,
      "icon-shape default",
    ),
    chunkJZLCHNYABinding144 = chunkJZLCHNYAInput12.pos === "t",
    chunkJZLCHNYABinding145 = chunkJZLCHNYABinding142 + halfPadding * 2,
    chunkJZLCHNYABinding146 = chunkJZLCHNYABinding142 + halfPadding * 2,
    { nodeBorder: chunkJZLCHNYABinding147, mainBkg } = themeVariables,
    { stylesMap } = chunkATLVNIR6T(chunkJZLCHNYAInput12),
    chunkJZLCHNYABinding148 = -chunkJZLCHNYABinding146 / 2,
    chunkJZLCHNYABinding149 = -chunkJZLCHNYABinding145 / 2,
    chunkJZLCHNYABinding150 = chunkJZLCHNYAInput12.label ? 8 : 0,
    chunkJZLCHNYABinding151 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding152 = o(chunkJZLCHNYAInput12, {});
  chunkJZLCHNYAInput12.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding152.roughness = 0),
    (chunkJZLCHNYABinding152.fillStyle = "solid"));
  chunkJZLCHNYABinding152.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunkJZLCHNYABinding153 = chunkJZLCHNYABinding151.path(
      chunkJZLCHNYABinding4(
        chunkJZLCHNYABinding148,
        chunkJZLCHNYABinding149,
        chunkJZLCHNYABinding146,
        chunkJZLCHNYABinding145,
        0.1,
      ),
      chunkJZLCHNYABinding152,
    ),
    chunkJZLCHNYABinding154 = Math.max(chunkJZLCHNYABinding146, bbox.width),
    chunkJZLCHNYABinding155 =
      chunkJZLCHNYABinding145 + bbox.height + chunkJZLCHNYABinding150,
    chunkJZLCHNYABinding156 = chunkJZLCHNYABinding151.rectangle(
      -chunkJZLCHNYABinding154 / 2,
      -chunkJZLCHNYABinding155 / 2,
      chunkJZLCHNYABinding154,
      chunkJZLCHNYABinding155,
      {
        ...chunkJZLCHNYABinding152,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYABinding157 = shapeSvg.insert(
      () => chunkJZLCHNYABinding153,
      ":first-child",
    ),
    chunkJZLCHNYABinding158 = shapeSvg.insert(() => chunkJZLCHNYABinding156);
  if (chunkJZLCHNYAInput12.icon) {
    let chunkJZLCHNYABinding903 = shapeSvg.append("g");
    chunkJZLCHNYABinding903.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAInput12.icon, {
        height: chunkJZLCHNYABinding142,
        width: chunkJZLCHNYABinding142,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYABinding904 = chunkJZLCHNYABinding903.node().getBBox(),
      chunkJZLCHNYABinding905 = chunkJZLCHNYABinding904.width,
      chunkJZLCHNYABinding906 = chunkJZLCHNYABinding904.height,
      chunkJZLCHNYABinding907 = chunkJZLCHNYABinding904.x,
      chunkJZLCHNYABinding908 = chunkJZLCHNYABinding904.y;
    chunkJZLCHNYABinding903.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding905 / 2 - chunkJZLCHNYABinding907},${chunkJZLCHNYABinding144 ? bbox.height / 2 + chunkJZLCHNYABinding150 / 2 - chunkJZLCHNYABinding906 / 2 - chunkJZLCHNYABinding908 : -bbox.height / 2 - chunkJZLCHNYABinding150 / 2 - chunkJZLCHNYABinding906 / 2 - chunkJZLCHNYABinding908})`,
    );
    chunkJZLCHNYABinding903.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunkJZLCHNYABinding147};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYABinding144 ? -chunkJZLCHNYABinding155 / 2 : chunkJZLCHNYABinding155 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYABinding157.attr(
      "transform",
      `translate(0,${chunkJZLCHNYABinding144 ? bbox.height / 2 + chunkJZLCHNYABinding150 / 2 : -bbox.height / 2 - chunkJZLCHNYABinding150 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput12, chunkJZLCHNYABinding158),
    (chunkJZLCHNYAInput12.intersect = function (chunkJZLCHNYAInput88) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunkJZLCHNYAInput12,
          chunkJZLCHNYAInput88,
        ),
        !chunkJZLCHNYAInput12.label)
      )
        return $.rect(chunkJZLCHNYAInput12, chunkJZLCHNYAInput88);
      let chunkJZLCHNYABinding532 = chunkJZLCHNYAInput12.x ?? 0,
        chunkJZLCHNYABinding533 = chunkJZLCHNYAInput12.y ?? 0,
        chunkJZLCHNYABinding534 = chunkJZLCHNYAInput12.height ?? 0,
        chunkJZLCHNYABinding535 = [];
      return (
        (chunkJZLCHNYABinding535 = chunkJZLCHNYABinding144
          ? [
              {
                x: chunkJZLCHNYABinding532 - bbox.width / 2,
                y: chunkJZLCHNYABinding533 - chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 + bbox.width / 2,
                y: chunkJZLCHNYABinding533 - chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding150,
              },
              {
                x: chunkJZLCHNYABinding532 + chunkJZLCHNYABinding146 / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding150,
              },
              {
                x: chunkJZLCHNYABinding532 + chunkJZLCHNYABinding146 / 2,
                y: chunkJZLCHNYABinding533 + chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 - chunkJZLCHNYABinding146 / 2,
                y: chunkJZLCHNYABinding533 + chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 - chunkJZLCHNYABinding146 / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding150,
              },
              {
                x: chunkJZLCHNYABinding532 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding150,
              },
            ]
          : [
              {
                x: chunkJZLCHNYABinding532 - chunkJZLCHNYABinding146 / 2,
                y: chunkJZLCHNYABinding533 - chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 + chunkJZLCHNYABinding146 / 2,
                y: chunkJZLCHNYABinding533 - chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 + chunkJZLCHNYABinding146 / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  chunkJZLCHNYABinding145,
              },
              {
                x: chunkJZLCHNYABinding532 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  chunkJZLCHNYABinding145,
              },
              {
                x: chunkJZLCHNYABinding532 + bbox.width / 2 / 2,
                y: chunkJZLCHNYABinding533 + chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 - bbox.width / 2,
                y: chunkJZLCHNYABinding533 + chunkJZLCHNYABinding534 / 2,
              },
              {
                x: chunkJZLCHNYABinding532 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  chunkJZLCHNYABinding145,
              },
              {
                x: chunkJZLCHNYABinding532 - chunkJZLCHNYABinding146 / 2,
                y:
                  chunkJZLCHNYABinding533 -
                  chunkJZLCHNYABinding534 / 2 +
                  chunkJZLCHNYABinding145,
              },
            ]),
        $.polygon(
          chunkJZLCHNYAInput12,
          chunkJZLCHNYABinding535,
          chunkJZLCHNYAInput88,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper39(
  chunkJZLCHNYAInput7,
  chunkJZLCHNYAInput8,
  { config: { flowchart } },
) {
  let chunkJZLCHNYABinding102 = new Image();
  chunkJZLCHNYABinding102.src = chunkJZLCHNYAInput8?.img ?? "";
  await chunkJZLCHNYABinding102.decode();
  let chunkJZLCHNYABinding103 = Number(
      chunkJZLCHNYABinding102.naturalWidth.toString().replace("px", ""),
    ),
    chunkJZLCHNYABinding104 = Number(
      chunkJZLCHNYABinding102.naturalHeight.toString().replace("px", ""),
    );
  chunkJZLCHNYAInput8.imageAspectRatio =
    chunkJZLCHNYABinding103 / chunkJZLCHNYABinding104;
  let { labelStyles } = a(chunkJZLCHNYAInput8);
  chunkJZLCHNYAInput8.labelStyle = labelStyles;
  let chunkJZLCHNYABinding105 = flowchart?.wrappingWidth;
  chunkJZLCHNYAInput8.defaultWidth = flowchart?.wrappingWidth;
  let chunkJZLCHNYABinding106 = Math.max(
      chunkJZLCHNYAInput8.label ? (chunkJZLCHNYABinding105 ?? 0) : 0,
      chunkJZLCHNYAInput8?.assetWidth ?? chunkJZLCHNYABinding103,
    ),
    chunkJZLCHNYABinding107 =
      chunkJZLCHNYAInput8.constraint === "on" &&
      chunkJZLCHNYAInput8?.assetHeight
        ? chunkJZLCHNYAInput8.assetHeight * chunkJZLCHNYAInput8.imageAspectRatio
        : chunkJZLCHNYABinding106,
    chunkJZLCHNYABinding108 =
      chunkJZLCHNYAInput8.constraint === "on"
        ? chunkJZLCHNYABinding107 / chunkJZLCHNYAInput8.imageAspectRatio
        : (chunkJZLCHNYAInput8?.assetHeight ?? chunkJZLCHNYABinding104);
  chunkJZLCHNYAInput8.width = Math.max(
    chunkJZLCHNYABinding107,
    chunkJZLCHNYABinding105 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput7,
      chunkJZLCHNYAInput8,
      "image-shape default",
    ),
    chunkJZLCHNYABinding109 = chunkJZLCHNYAInput8.pos === "t",
    chunkJZLCHNYABinding110 = -chunkJZLCHNYABinding107 / 2,
    chunkJZLCHNYABinding111 = -chunkJZLCHNYABinding108 / 2,
    chunkJZLCHNYABinding112 = chunkJZLCHNYAInput8.label ? 8 : 0,
    chunkJZLCHNYABinding113 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding114 = o(chunkJZLCHNYAInput8, {});
  chunkJZLCHNYAInput8.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding114.roughness = 0),
    (chunkJZLCHNYABinding114.fillStyle = "solid"));
  let chunkJZLCHNYABinding115 = chunkJZLCHNYABinding113.rectangle(
      chunkJZLCHNYABinding110,
      chunkJZLCHNYABinding111,
      chunkJZLCHNYABinding107,
      chunkJZLCHNYABinding108,
      chunkJZLCHNYABinding114,
    ),
    chunkJZLCHNYABinding116 = Math.max(chunkJZLCHNYABinding107, bbox.width),
    chunkJZLCHNYABinding117 =
      chunkJZLCHNYABinding108 + bbox.height + chunkJZLCHNYABinding112,
    chunkJZLCHNYABinding118 = chunkJZLCHNYABinding113.rectangle(
      -chunkJZLCHNYABinding116 / 2,
      -chunkJZLCHNYABinding117 / 2,
      chunkJZLCHNYABinding116,
      chunkJZLCHNYABinding117,
      {
        ...chunkJZLCHNYABinding114,
        fill: "none",
        stroke: "none",
      },
    ),
    chunkJZLCHNYABinding119 = shapeSvg.insert(
      () => chunkJZLCHNYABinding115,
      ":first-child",
    ),
    chunkJZLCHNYABinding120 = shapeSvg.insert(() => chunkJZLCHNYABinding118);
  if (chunkJZLCHNYAInput8.img) {
    let chunkJZLCHNYABinding1015 = shapeSvg.append("image");
    chunkJZLCHNYABinding1015.attr("href", chunkJZLCHNYAInput8.img);
    chunkJZLCHNYABinding1015.attr("width", chunkJZLCHNYABinding107);
    chunkJZLCHNYABinding1015.attr("height", chunkJZLCHNYABinding108);
    chunkJZLCHNYABinding1015.attr("preserveAspectRatio", "none");
    chunkJZLCHNYABinding1015.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding107 / 2},${chunkJZLCHNYABinding109 ? chunkJZLCHNYABinding117 / 2 - chunkJZLCHNYABinding108 : -chunkJZLCHNYABinding117 / 2})`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYABinding109 ? -chunkJZLCHNYABinding108 / 2 - bbox.height / 2 - chunkJZLCHNYABinding112 / 2 : chunkJZLCHNYABinding108 / 2 - bbox.height / 2 + chunkJZLCHNYABinding112 / 2})`,
    ),
    chunkJZLCHNYABinding119.attr(
      "transform",
      `translate(0,${chunkJZLCHNYABinding109 ? bbox.height / 2 + chunkJZLCHNYABinding112 / 2 : -bbox.height / 2 - chunkJZLCHNYABinding112 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput8, chunkJZLCHNYABinding120),
    (chunkJZLCHNYAInput8.intersect = function (chunkJZLCHNYAInput89) {
      if (
        (logger.info(
          "iconSquare intersect",
          chunkJZLCHNYAInput8,
          chunkJZLCHNYAInput89,
        ),
        !chunkJZLCHNYAInput8.label)
      )
        return $.rect(chunkJZLCHNYAInput8, chunkJZLCHNYAInput89);
      let chunkJZLCHNYABinding536 = chunkJZLCHNYAInput8.x ?? 0,
        chunkJZLCHNYABinding537 = chunkJZLCHNYAInput8.y ?? 0,
        chunkJZLCHNYABinding538 = chunkJZLCHNYAInput8.height ?? 0,
        chunkJZLCHNYABinding539 = [];
      return (
        (chunkJZLCHNYABinding539 = chunkJZLCHNYABinding109
          ? [
              {
                x: chunkJZLCHNYABinding536 - bbox.width / 2,
                y: chunkJZLCHNYABinding537 - chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 + bbox.width / 2,
                y: chunkJZLCHNYABinding537 - chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding112,
              },
              {
                x: chunkJZLCHNYABinding536 + chunkJZLCHNYABinding107 / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding112,
              },
              {
                x: chunkJZLCHNYABinding536 + chunkJZLCHNYABinding107 / 2,
                y: chunkJZLCHNYABinding537 + chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 - chunkJZLCHNYABinding107 / 2,
                y: chunkJZLCHNYABinding537 + chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 - chunkJZLCHNYABinding107 / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding112,
              },
              {
                x: chunkJZLCHNYABinding536 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  bbox.height +
                  chunkJZLCHNYABinding112,
              },
            ]
          : [
              {
                x: chunkJZLCHNYABinding536 - chunkJZLCHNYABinding107 / 2,
                y: chunkJZLCHNYABinding537 - chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 + chunkJZLCHNYABinding107 / 2,
                y: chunkJZLCHNYABinding537 - chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 + chunkJZLCHNYABinding107 / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  chunkJZLCHNYABinding108,
              },
              {
                x: chunkJZLCHNYABinding536 + bbox.width / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  chunkJZLCHNYABinding108,
              },
              {
                x: chunkJZLCHNYABinding536 + bbox.width / 2 / 2,
                y: chunkJZLCHNYABinding537 + chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 - bbox.width / 2,
                y: chunkJZLCHNYABinding537 + chunkJZLCHNYABinding538 / 2,
              },
              {
                x: chunkJZLCHNYABinding536 - bbox.width / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  chunkJZLCHNYABinding108,
              },
              {
                x: chunkJZLCHNYABinding536 - chunkJZLCHNYABinding107 / 2,
                y:
                  chunkJZLCHNYABinding537 -
                  chunkJZLCHNYABinding538 / 2 +
                  chunkJZLCHNYABinding108,
              },
            ]),
        $.polygon(
          chunkJZLCHNYAInput8,
          chunkJZLCHNYABinding539,
          chunkJZLCHNYAInput89,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper40(
  chunkJZLCHNYAInput138,
  chunkJZLCHNYAInput139,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput139);
  chunkJZLCHNYAInput139.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput138,
      chunkJZLCHNYAInput139,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput139),
    ),
    chunkJZLCHNYABinding708 = Math.max(
      bbox.width + (chunkJZLCHNYAInput139.padding ?? 0) * 2,
      chunkJZLCHNYAInput139?.width ?? 0,
    ),
    chunkJZLCHNYABinding709 = Math.max(
      bbox.height + (chunkJZLCHNYAInput139.padding ?? 0) * 2,
      chunkJZLCHNYAInput139?.height ?? 0,
    ),
    chunkJZLCHNYABinding710 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding708,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding708 + (3 * chunkJZLCHNYABinding709) / 6,
        y: -chunkJZLCHNYABinding709,
      },
      {
        x: (-3 * chunkJZLCHNYABinding709) / 6,
        y: -chunkJZLCHNYABinding709,
      },
    ],
    chunkJZLCHNYABinding711,
    { cssStyles } = chunkJZLCHNYAInput139;
  if (chunkJZLCHNYAInput139.look === "handDrawn") {
    let chunkJZLCHNYABinding1021 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1022 = o(chunkJZLCHNYAInput139, {}),
      chunkJZLCHNYABinding1023 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding710),
      chunkJZLCHNYABinding1024 = chunkJZLCHNYABinding1021.path(
        chunkJZLCHNYABinding1023,
        chunkJZLCHNYABinding1022,
      );
    chunkJZLCHNYABinding711 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1024, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding708 / 2}, ${chunkJZLCHNYABinding709 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding711.attr("style", cssStyles);
  } else
    chunkJZLCHNYABinding711 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding708,
      chunkJZLCHNYABinding709,
      chunkJZLCHNYABinding710,
    );
  return (
    nodeStyles && chunkJZLCHNYABinding711.attr("style", nodeStyles),
    (chunkJZLCHNYAInput139.width = chunkJZLCHNYABinding708),
    (chunkJZLCHNYAInput139.height = chunkJZLCHNYABinding709),
    chunkJZLCHNYAD(chunkJZLCHNYAInput139, chunkJZLCHNYABinding711),
    (chunkJZLCHNYAInput139.intersect = function (chunkJZLCHNYAInput362) {
      return $.polygon(
        chunkJZLCHNYAInput139,
        chunkJZLCHNYABinding710,
        chunkJZLCHNYAInput362,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper41(
  chunkJZLCHNYAInput96,
  chunkJZLCHNYAInput97,
  chunkJZLCHNYAInput98,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput97);
  chunkJZLCHNYAInput97.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput96,
      chunkJZLCHNYAInput97,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput97),
    ),
    chunkJZLCHNYABinding573 = Math.max(
      bbox.width + chunkJZLCHNYAInput98.labelPaddingX * 2,
      chunkJZLCHNYAInput97?.width || 0,
    ),
    chunkJZLCHNYABinding574 = Math.max(
      bbox.height + chunkJZLCHNYAInput98.labelPaddingY * 2,
      chunkJZLCHNYAInput97?.height || 0,
    ),
    chunkJZLCHNYABinding575 = -chunkJZLCHNYABinding573 / 2,
    chunkJZLCHNYABinding576 = -chunkJZLCHNYABinding574 / 2,
    chunkJZLCHNYABinding577,
    { rx, ry } = chunkJZLCHNYAInput97,
    { cssStyles } = chunkJZLCHNYAInput97;
  if (
    (chunkJZLCHNYAInput98?.rx &&
      chunkJZLCHNYAInput98.ry &&
      ((rx = chunkJZLCHNYAInput98.rx), (ry = chunkJZLCHNYAInput98.ry)),
    chunkJZLCHNYAInput97.look === "handDrawn")
  ) {
    let chunkJZLCHNYABinding1007 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1008 = o(chunkJZLCHNYAInput97, {}),
      chunkJZLCHNYABinding1009 =
        rx || ry
          ? chunkJZLCHNYABinding1007.path(
              chunkJZLCHNYABinding4(
                chunkJZLCHNYABinding575,
                chunkJZLCHNYABinding576,
                chunkJZLCHNYABinding573,
                chunkJZLCHNYABinding574,
                rx || 0,
              ),
              chunkJZLCHNYABinding1008,
            )
          : chunkJZLCHNYABinding1007.rectangle(
              chunkJZLCHNYABinding575,
              chunkJZLCHNYABinding576,
              chunkJZLCHNYABinding573,
              chunkJZLCHNYABinding574,
              chunkJZLCHNYABinding1008,
            );
    chunkJZLCHNYABinding577 = shapeSvg.insert(
      () => chunkJZLCHNYABinding1009,
      ":first-child",
    );
    chunkJZLCHNYABinding577
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles));
  } else {
    chunkJZLCHNYABinding577 = shapeSvg.insert("rect", ":first-child");
    chunkJZLCHNYABinding577
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("rx", chunkS3R3BYOJL(rx))
      .attr("ry", chunkS3R3BYOJL(ry))
      .attr("x", chunkJZLCHNYABinding575)
      .attr("y", chunkJZLCHNYABinding576)
      .attr("width", chunkJZLCHNYABinding573)
      .attr("height", chunkJZLCHNYABinding574);
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput97, chunkJZLCHNYABinding577),
    (chunkJZLCHNYAInput97.calcIntersect = function (
      chunkJZLCHNYAInput382,
      chunkJZLCHNYAInput383,
    ) {
      return $.rect(chunkJZLCHNYAInput382, chunkJZLCHNYAInput383);
    }),
    (chunkJZLCHNYAInput97.intersect = function (chunkJZLCHNYAInput397) {
      return $.rect(chunkJZLCHNYAInput97, chunkJZLCHNYAInput397);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper42(
  chunkJZLCHNYAInput207,
  chunkJZLCHNYAInput208,
) {
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput207,
      chunkJZLCHNYAInput208,
      "label",
    ),
    chunkJZLCHNYABinding879 = shapeSvg.insert("rect", ":first-child");
  return (
    chunkJZLCHNYABinding879.attr("width", 0.1).attr("height", 0.1),
    shapeSvg.attr("class", "label edgeLabel"),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput208, chunkJZLCHNYABinding879),
    (chunkJZLCHNYAInput208.intersect = function (chunkJZLCHNYAInput398) {
      return $.rect(chunkJZLCHNYAInput208, chunkJZLCHNYAInput398);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper43(
  chunkJZLCHNYAInput140,
  chunkJZLCHNYAInput141,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput141);
  chunkJZLCHNYAInput141.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput140,
      chunkJZLCHNYAInput141,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput141),
    ),
    chunkJZLCHNYABinding712 = Math.max(
      bbox.width + (chunkJZLCHNYAInput141.padding ?? 0),
      chunkJZLCHNYAInput141?.width ?? 0,
    ),
    chunkJZLCHNYABinding713 = Math.max(
      bbox.height + (chunkJZLCHNYAInput141.padding ?? 0),
      chunkJZLCHNYAInput141?.height ?? 0,
    ),
    chunkJZLCHNYABinding714 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding712 + (3 * chunkJZLCHNYABinding713) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding712,
        y: -chunkJZLCHNYABinding713,
      },
      {
        x: -(3 * chunkJZLCHNYABinding713) / 6,
        y: -chunkJZLCHNYABinding713,
      },
    ],
    chunkJZLCHNYABinding715,
    { cssStyles } = chunkJZLCHNYAInput141;
  if (chunkJZLCHNYAInput141.look === "handDrawn") {
    let chunkJZLCHNYABinding1025 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1026 = o(chunkJZLCHNYAInput141, {}),
      chunkJZLCHNYABinding1027 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding714),
      chunkJZLCHNYABinding1028 = chunkJZLCHNYABinding1025.path(
        chunkJZLCHNYABinding1027,
        chunkJZLCHNYABinding1026,
      );
    chunkJZLCHNYABinding715 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1028, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding712 / 2}, ${chunkJZLCHNYABinding713 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding715.attr("style", cssStyles);
  } else
    chunkJZLCHNYABinding715 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding712,
      chunkJZLCHNYABinding713,
      chunkJZLCHNYABinding714,
    );
  return (
    nodeStyles && chunkJZLCHNYABinding715.attr("style", nodeStyles),
    (chunkJZLCHNYAInput141.width = chunkJZLCHNYABinding712),
    (chunkJZLCHNYAInput141.height = chunkJZLCHNYABinding713),
    chunkJZLCHNYAD(chunkJZLCHNYAInput141, chunkJZLCHNYABinding715),
    (chunkJZLCHNYAInput141.intersect = function (chunkJZLCHNYAInput363) {
      return $.polygon(
        chunkJZLCHNYAInput141,
        chunkJZLCHNYABinding714,
        chunkJZLCHNYAInput363,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper44(
  chunkJZLCHNYAInput142,
  chunkJZLCHNYAInput143,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput143);
  chunkJZLCHNYAInput143.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput142,
      chunkJZLCHNYAInput143,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput143),
    ),
    chunkJZLCHNYABinding716 = Math.max(
      bbox.width + (chunkJZLCHNYAInput143.padding ?? 0),
      chunkJZLCHNYAInput143?.width ?? 0,
    ),
    chunkJZLCHNYABinding717 = Math.max(
      bbox.height + (chunkJZLCHNYAInput143.padding ?? 0),
      chunkJZLCHNYAInput143?.height ?? 0,
    ),
    chunkJZLCHNYABinding718 = [
      {
        x: (-3 * chunkJZLCHNYABinding717) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding716,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding716 + (3 * chunkJZLCHNYABinding717) / 6,
        y: -chunkJZLCHNYABinding717,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding717,
      },
    ],
    chunkJZLCHNYABinding719,
    { cssStyles } = chunkJZLCHNYAInput143;
  if (chunkJZLCHNYAInput143.look === "handDrawn") {
    let chunkJZLCHNYABinding1029 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1030 = o(chunkJZLCHNYAInput143, {}),
      chunkJZLCHNYABinding1031 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding718),
      chunkJZLCHNYABinding1032 = chunkJZLCHNYABinding1029.path(
        chunkJZLCHNYABinding1031,
        chunkJZLCHNYABinding1030,
      );
    chunkJZLCHNYABinding719 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1032, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding716 / 2}, ${chunkJZLCHNYABinding717 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding719.attr("style", cssStyles);
  } else
    chunkJZLCHNYABinding719 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding716,
      chunkJZLCHNYABinding717,
      chunkJZLCHNYABinding718,
    );
  return (
    nodeStyles && chunkJZLCHNYABinding719.attr("style", nodeStyles),
    (chunkJZLCHNYAInput143.width = chunkJZLCHNYABinding716),
    (chunkJZLCHNYAInput143.height = chunkJZLCHNYABinding717),
    chunkJZLCHNYAD(chunkJZLCHNYAInput143, chunkJZLCHNYABinding719),
    (chunkJZLCHNYAInput143.intersect = function (chunkJZLCHNYAInput364) {
      return $.polygon(
        chunkJZLCHNYAInput143,
        chunkJZLCHNYABinding718,
        chunkJZLCHNYAInput364,
      );
    }),
    shapeSvg
  );
}
function chunkJZLCHNYAHelper45(chunkJZLCHNYAInput124, chunkJZLCHNYAInput125) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput125);
  chunkJZLCHNYAInput125.label = "";
  chunkJZLCHNYAInput125.labelStyle = labelStyles;
  let chunkJZLCHNYABinding667 = chunkJZLCHNYAInput124
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput125))
      .attr("id", chunkJZLCHNYAInput125.domId ?? chunkJZLCHNYAInput125.id),
    { cssStyles } = chunkJZLCHNYAInput125,
    chunkJZLCHNYABinding668 = Math.max(35, chunkJZLCHNYAInput125?.width ?? 0),
    chunkJZLCHNYABinding669 = Math.max(35, chunkJZLCHNYAInput125?.height ?? 0),
    chunkJZLCHNYABinding670 = [
      {
        x: chunkJZLCHNYABinding668,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYABinding669 + 3.5,
      },
      {
        x: chunkJZLCHNYABinding668 - 14,
        y: chunkJZLCHNYABinding669 + 3.5,
      },
      {
        x: 0,
        y: 2 * chunkJZLCHNYABinding669,
      },
      {
        x: chunkJZLCHNYABinding668,
        y: chunkJZLCHNYABinding669 - 3.5,
      },
      {
        x: 14,
        y: chunkJZLCHNYABinding669 - 3.5,
      },
    ],
    chunkJZLCHNYABinding671 = rough.svg(chunkJZLCHNYABinding667),
    chunkJZLCHNYABinding672 = o(chunkJZLCHNYAInput125, {});
  chunkJZLCHNYAInput125.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding672.roughness = 0),
    (chunkJZLCHNYABinding672.fillStyle = "solid"));
  let chunkJZLCHNYABinding673 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding670),
    chunkJZLCHNYABinding674 = chunkJZLCHNYABinding671.path(
      chunkJZLCHNYABinding673,
      chunkJZLCHNYABinding672,
    ),
    chunkJZLCHNYABinding675 = chunkJZLCHNYABinding667.insert(
      () => chunkJZLCHNYABinding674,
      ":first-child",
    );
  return (
    cssStyles &&
      chunkJZLCHNYAInput125.look !== "handDrawn" &&
      chunkJZLCHNYABinding675.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput125.look !== "handDrawn" &&
      chunkJZLCHNYABinding675.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding675.attr(
      "transform",
      `translate(-${chunkJZLCHNYABinding668 / 2},${-chunkJZLCHNYABinding669})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput125, chunkJZLCHNYABinding675),
    (chunkJZLCHNYAInput125.intersect = function (chunkJZLCHNYAInput316) {
      return (
        logger.info(
          "lightningBolt intersect",
          chunkJZLCHNYAInput125,
          chunkJZLCHNYAInput316,
        ),
        $.polygon(
          chunkJZLCHNYAInput125,
          chunkJZLCHNYABinding670,
          chunkJZLCHNYAInput316,
        )
      );
    }),
    chunkJZLCHNYABinding667
  );
}
async function chunkJZLCHNYAHelper46(
  chunkJZLCHNYAInput39,
  chunkJZLCHNYAInput40,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput40);
  chunkJZLCHNYAInput40.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput39,
      chunkJZLCHNYAInput40,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput40),
    ),
    chunkJZLCHNYABinding314 = Math.max(
      bbox.width + (chunkJZLCHNYAInput40.padding ?? 0),
      chunkJZLCHNYAInput40.width ?? 0,
    ),
    chunkJZLCHNYABinding315 = chunkJZLCHNYABinding314 / 2,
    chunkJZLCHNYABinding316 =
      chunkJZLCHNYABinding315 / (2.5 + chunkJZLCHNYABinding314 / 50),
    chunkJZLCHNYABinding317 = Math.max(
      bbox.height +
        chunkJZLCHNYABinding316 +
        (chunkJZLCHNYAInput40.padding ?? 0),
      chunkJZLCHNYAInput40.height ?? 0,
    ),
    chunkJZLCHNYABinding318 = chunkJZLCHNYABinding317 * 0.1,
    chunkJZLCHNYABinding319,
    { cssStyles } = chunkJZLCHNYAInput40;
  if (chunkJZLCHNYAInput40.look === "handDrawn") {
    let chunkJZLCHNYABinding939 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding940 = chunkJZLCHNYABinding16(
        0,
        0,
        chunkJZLCHNYABinding314,
        chunkJZLCHNYABinding317,
        chunkJZLCHNYABinding315,
        chunkJZLCHNYABinding316,
        chunkJZLCHNYABinding318,
      ),
      chunkJZLCHNYABinding941 = chunkJZLCHNYABinding17(
        0,
        chunkJZLCHNYABinding316,
        chunkJZLCHNYABinding314,
        chunkJZLCHNYABinding317,
        chunkJZLCHNYABinding315,
        chunkJZLCHNYABinding316,
      ),
      chunkJZLCHNYABinding942 = o(chunkJZLCHNYAInput40, {}),
      chunkJZLCHNYABinding943 = chunkJZLCHNYABinding939.path(
        chunkJZLCHNYABinding940,
        chunkJZLCHNYABinding942,
      ),
      chunkJZLCHNYABinding944 = chunkJZLCHNYABinding939.path(
        chunkJZLCHNYABinding941,
        chunkJZLCHNYABinding942,
      );
    shapeSvg
      .insert(() => chunkJZLCHNYABinding944, ":first-child")
      .attr("class", "line");
    chunkJZLCHNYABinding319 = shapeSvg.insert(
      () => chunkJZLCHNYABinding943,
      ":first-child",
    );
    chunkJZLCHNYABinding319.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYABinding319.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYABinding1038 = chunkJZLCHNYABinding15(
      0,
      0,
      chunkJZLCHNYABinding314,
      chunkJZLCHNYABinding317,
      chunkJZLCHNYABinding315,
      chunkJZLCHNYABinding316,
      chunkJZLCHNYABinding318,
    );
    chunkJZLCHNYABinding319 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYABinding1038)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYABinding319.attr("label-offset-y", chunkJZLCHNYABinding316),
    chunkJZLCHNYABinding319.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding314 / 2}, ${-(chunkJZLCHNYABinding317 / 2 + chunkJZLCHNYABinding316)})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput40, chunkJZLCHNYABinding319),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunkJZLCHNYABinding316 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAInput40.intersect = function (chunkJZLCHNYAInput206) {
      let chunkJZLCHNYABinding875 = $.rect(
          chunkJZLCHNYAInput40,
          chunkJZLCHNYAInput206,
        ),
        chunkJZLCHNYABinding876 =
          chunkJZLCHNYABinding875.x - (chunkJZLCHNYAInput40.x ?? 0);
      if (
        chunkJZLCHNYABinding315 != 0 &&
        (Math.abs(chunkJZLCHNYABinding876) <
          (chunkJZLCHNYAInput40.width ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYABinding876) ==
            (chunkJZLCHNYAInput40.width ?? 0) / 2 &&
            Math.abs(
              chunkJZLCHNYABinding875.y - (chunkJZLCHNYAInput40.y ?? 0),
            ) >
              (chunkJZLCHNYAInput40.height ?? 0) / 2 - chunkJZLCHNYABinding316))
      ) {
        let chunkJZLCHNYABinding1057 =
          chunkJZLCHNYABinding316 *
          chunkJZLCHNYABinding316 *
          (1 -
            (chunkJZLCHNYABinding876 * chunkJZLCHNYABinding876) /
              (chunkJZLCHNYABinding315 * chunkJZLCHNYABinding315));
        chunkJZLCHNYABinding1057 > 0 &&
          (chunkJZLCHNYABinding1057 = Math.sqrt(chunkJZLCHNYABinding1057));
        chunkJZLCHNYABinding1057 =
          chunkJZLCHNYABinding316 - chunkJZLCHNYABinding1057;
        chunkJZLCHNYAInput206.y - (chunkJZLCHNYAInput40.y ?? 0) > 0 &&
          (chunkJZLCHNYABinding1057 = -chunkJZLCHNYABinding1057);
        chunkJZLCHNYABinding875.y += chunkJZLCHNYABinding1057;
      }
      return chunkJZLCHNYABinding875;
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper47(
  chunkJZLCHNYAInput62,
  chunkJZLCHNYAInput63,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput63);
  chunkJZLCHNYAInput63.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput62,
      chunkJZLCHNYAInput63,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput63),
    ),
    chunkJZLCHNYABinding408 = Math.max(
      bbox.width + (chunkJZLCHNYAInput63.padding ?? 0) * 2,
      chunkJZLCHNYAInput63?.width ?? 0,
    ),
    chunkJZLCHNYABinding409 = Math.max(
      bbox.height + (chunkJZLCHNYAInput63.padding ?? 0) * 2,
      chunkJZLCHNYAInput63?.height ?? 0,
    ),
    chunkJZLCHNYABinding410 = chunkJZLCHNYABinding409 / 4,
    chunkJZLCHNYABinding411 = chunkJZLCHNYABinding409 + chunkJZLCHNYABinding410,
    { cssStyles } = chunkJZLCHNYAInput63,
    chunkJZLCHNYABinding412 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding413 = o(chunkJZLCHNYAInput63, {});
  chunkJZLCHNYAInput63.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding413.roughness = 0),
    (chunkJZLCHNYABinding413.fillStyle = "solid"));
  let chunkJZLCHNYABinding414 = [
      {
        x: -chunkJZLCHNYABinding408 / 2 - (chunkJZLCHNYABinding408 / 2) * 0.1,
        y: -chunkJZLCHNYABinding411 / 2,
      },
      {
        x: -chunkJZLCHNYABinding408 / 2 - (chunkJZLCHNYABinding408 / 2) * 0.1,
        y: chunkJZLCHNYABinding411 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYABinding408 / 2 - (chunkJZLCHNYABinding408 / 2) * 0.1,
        chunkJZLCHNYABinding411 / 2,
        chunkJZLCHNYABinding408 / 2 + (chunkJZLCHNYABinding408 / 2) * 0.1,
        chunkJZLCHNYABinding411 / 2,
        chunkJZLCHNYABinding410,
        0.8,
      ),
      {
        x: chunkJZLCHNYABinding408 / 2 + (chunkJZLCHNYABinding408 / 2) * 0.1,
        y: -chunkJZLCHNYABinding411 / 2,
      },
      {
        x: -chunkJZLCHNYABinding408 / 2 - (chunkJZLCHNYABinding408 / 2) * 0.1,
        y: -chunkJZLCHNYABinding411 / 2,
      },
      {
        x: -chunkJZLCHNYABinding408 / 2,
        y: -chunkJZLCHNYABinding411 / 2,
      },
      {
        x: -chunkJZLCHNYABinding408 / 2,
        y: (chunkJZLCHNYABinding411 / 2) * 1.1,
      },
      {
        x: -chunkJZLCHNYABinding408 / 2,
        y: -chunkJZLCHNYABinding411 / 2,
      },
    ],
    chunkJZLCHNYABinding415 = chunkJZLCHNYABinding412.polygon(
      chunkJZLCHNYABinding414.map((item) => [item.x, item.y]),
      chunkJZLCHNYABinding413,
    ),
    chunkJZLCHNYABinding416 = shapeSvg.insert(
      () => chunkJZLCHNYABinding415,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding416.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput63.look !== "handDrawn" &&
      chunkJZLCHNYABinding416.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput63.look !== "handDrawn" &&
      chunkJZLCHNYABinding416.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding416.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYABinding410 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding408 / 2 + (chunkJZLCHNYAInput63.padding ?? 0) + ((chunkJZLCHNYABinding408 / 2) * 0.1) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding409 / 2 + (chunkJZLCHNYAInput63.padding ?? 0) - chunkJZLCHNYABinding410 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput63, chunkJZLCHNYABinding416),
    (chunkJZLCHNYAInput63.intersect = function (chunkJZLCHNYAInput365) {
      return $.polygon(
        chunkJZLCHNYAInput63,
        chunkJZLCHNYABinding414,
        chunkJZLCHNYAInput365,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper48(
  chunkJZLCHNYAInput49,
  chunkJZLCHNYAInput50,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput50);
  chunkJZLCHNYAInput50.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput49,
      chunkJZLCHNYAInput50,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput50),
    ),
    chunkJZLCHNYABinding373 = Math.max(
      bbox.width + (chunkJZLCHNYAInput50.padding ?? 0) * 2,
      chunkJZLCHNYAInput50?.width ?? 0,
    ),
    chunkJZLCHNYABinding374 = Math.max(
      bbox.height + (chunkJZLCHNYAInput50.padding ?? 0) * 2,
      chunkJZLCHNYAInput50?.height ?? 0,
    ),
    chunkJZLCHNYABinding375 = -chunkJZLCHNYABinding373 / 2,
    chunkJZLCHNYABinding376 = -chunkJZLCHNYABinding374 / 2,
    { cssStyles } = chunkJZLCHNYAInput50,
    chunkJZLCHNYABinding377 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding378 = o(chunkJZLCHNYAInput50, {}),
    chunkJZLCHNYABinding379 = [
      {
        x: chunkJZLCHNYABinding375 - 5,
        y: chunkJZLCHNYABinding376 + 5,
      },
      {
        x: chunkJZLCHNYABinding375 - 5,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374 + 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 - 5,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374 + 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 - 5,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374 - 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 + 5,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374 - 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 + 5,
        y: chunkJZLCHNYABinding376 - 5,
      },
      {
        x: chunkJZLCHNYABinding375 + 5,
        y: chunkJZLCHNYABinding376 - 5,
      },
      {
        x: chunkJZLCHNYABinding375 + 5,
        y: chunkJZLCHNYABinding376,
      },
      {
        x: chunkJZLCHNYABinding375,
        y: chunkJZLCHNYABinding376,
      },
      {
        x: chunkJZLCHNYABinding375,
        y: chunkJZLCHNYABinding376 + 5,
      },
    ],
    chunkJZLCHNYABinding380 = [
      {
        x: chunkJZLCHNYABinding375,
        y: chunkJZLCHNYABinding376 + 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 - 5,
        y: chunkJZLCHNYABinding376 + 5,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373 - 5,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373,
        y: chunkJZLCHNYABinding376 + chunkJZLCHNYABinding374,
      },
      {
        x: chunkJZLCHNYABinding375 + chunkJZLCHNYABinding373,
        y: chunkJZLCHNYABinding376,
      },
      {
        x: chunkJZLCHNYABinding375,
        y: chunkJZLCHNYABinding376,
      },
    ];
  chunkJZLCHNYAInput50.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding378.roughness = 0),
    (chunkJZLCHNYABinding378.fillStyle = "solid"));
  let chunkJZLCHNYABinding381 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding379),
    chunkJZLCHNYABinding382 = chunkJZLCHNYABinding377.path(
      chunkJZLCHNYABinding381,
      chunkJZLCHNYABinding378,
    ),
    chunkJZLCHNYABinding383 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding380),
    chunkJZLCHNYABinding384 = chunkJZLCHNYABinding377.path(
      chunkJZLCHNYABinding383,
      {
        ...chunkJZLCHNYABinding378,
        fill: "none",
      },
    ),
    chunkJZLCHNYABinding385 = shapeSvg.insert(
      () => chunkJZLCHNYABinding384,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding385.insert(
      () => chunkJZLCHNYABinding382,
      ":first-child",
    ),
    chunkJZLCHNYABinding385.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput50.look !== "handDrawn" &&
      chunkJZLCHNYABinding385.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput50.look !== "handDrawn" &&
      chunkJZLCHNYABinding385.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput50, chunkJZLCHNYABinding385),
    (chunkJZLCHNYAInput50.intersect = function (chunkJZLCHNYAInput366) {
      return $.polygon(
        chunkJZLCHNYAInput50,
        chunkJZLCHNYABinding379,
        chunkJZLCHNYAInput366,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper49(
  chunkJZLCHNYAInput37,
  chunkJZLCHNYAInput38,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput38);
  chunkJZLCHNYAInput38.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput37,
      chunkJZLCHNYAInput38,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput38),
    ),
    chunkJZLCHNYABinding297 = Math.max(
      bbox.width + (chunkJZLCHNYAInput38.padding ?? 0) * 2,
      chunkJZLCHNYAInput38?.width ?? 0,
    ),
    chunkJZLCHNYABinding298 = Math.max(
      bbox.height + (chunkJZLCHNYAInput38.padding ?? 0) * 2,
      chunkJZLCHNYAInput38?.height ?? 0,
    ),
    chunkJZLCHNYABinding299 = chunkJZLCHNYABinding298 / 4,
    chunkJZLCHNYABinding300 = chunkJZLCHNYABinding298 + chunkJZLCHNYABinding299,
    chunkJZLCHNYABinding301 = -chunkJZLCHNYABinding297 / 2,
    chunkJZLCHNYABinding302 = -chunkJZLCHNYABinding300 / 2,
    { cssStyles } = chunkJZLCHNYAInput38,
    chunkJZLCHNYABinding303 = chunkJZLCHNYAHelper2(
      chunkJZLCHNYABinding301 - 5,
      chunkJZLCHNYABinding302 + chunkJZLCHNYABinding300 + 5,
      chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 - 5,
      chunkJZLCHNYABinding302 + chunkJZLCHNYABinding300 + 5,
      chunkJZLCHNYABinding299,
      0.8,
    ),
    chunkJZLCHNYABinding304 =
      chunkJZLCHNYABinding303?.[chunkJZLCHNYABinding303.length - 1],
    chunkJZLCHNYABinding305 = [
      {
        x: chunkJZLCHNYABinding301 - 5,
        y: chunkJZLCHNYABinding302 + 5,
      },
      {
        x: chunkJZLCHNYABinding301 - 5,
        y: chunkJZLCHNYABinding302 + chunkJZLCHNYABinding300 + 5,
      },
      ...chunkJZLCHNYABinding303,
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 - 5,
        y: chunkJZLCHNYABinding304.y - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297,
        y: chunkJZLCHNYABinding304.y - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297,
        y: chunkJZLCHNYABinding304.y - 10,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 + 5,
        y: chunkJZLCHNYABinding304.y - 10,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 + 5,
        y: chunkJZLCHNYABinding302 - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + 5,
        y: chunkJZLCHNYABinding302 - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + 5,
        y: chunkJZLCHNYABinding302,
      },
      {
        x: chunkJZLCHNYABinding301,
        y: chunkJZLCHNYABinding302,
      },
      {
        x: chunkJZLCHNYABinding301,
        y: chunkJZLCHNYABinding302 + 5,
      },
    ],
    chunkJZLCHNYABinding306 = [
      {
        x: chunkJZLCHNYABinding301,
        y: chunkJZLCHNYABinding302 + 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 - 5,
        y: chunkJZLCHNYABinding302 + 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297 - 5,
        y: chunkJZLCHNYABinding304.y - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297,
        y: chunkJZLCHNYABinding304.y - 5,
      },
      {
        x: chunkJZLCHNYABinding301 + chunkJZLCHNYABinding297,
        y: chunkJZLCHNYABinding302,
      },
      {
        x: chunkJZLCHNYABinding301,
        y: chunkJZLCHNYABinding302,
      },
    ],
    chunkJZLCHNYABinding307 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding308 = o(chunkJZLCHNYAInput38, {});
  chunkJZLCHNYAInput38.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding308.roughness = 0),
    (chunkJZLCHNYABinding308.fillStyle = "solid"));
  let chunkJZLCHNYABinding309 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding305),
    chunkJZLCHNYABinding310 = chunkJZLCHNYABinding307.path(
      chunkJZLCHNYABinding309,
      chunkJZLCHNYABinding308,
    ),
    chunkJZLCHNYABinding311 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding306),
    chunkJZLCHNYABinding312 = chunkJZLCHNYABinding307.path(
      chunkJZLCHNYABinding311,
      chunkJZLCHNYABinding308,
    ),
    chunkJZLCHNYABinding313 = shapeSvg.insert(
      () => chunkJZLCHNYABinding310,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding313.insert(() => chunkJZLCHNYABinding312),
    chunkJZLCHNYABinding313.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput38.look !== "handDrawn" &&
      chunkJZLCHNYABinding313.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput38.look !== "handDrawn" &&
      chunkJZLCHNYABinding313.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding313.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYABinding299 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 5 - chunkJZLCHNYABinding299 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput38, chunkJZLCHNYABinding313),
    (chunkJZLCHNYAInput38.intersect = function (chunkJZLCHNYAInput367) {
      return $.polygon(
        chunkJZLCHNYAInput38,
        chunkJZLCHNYABinding305,
        chunkJZLCHNYAInput367,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper50(
  chunkJZLCHNYAInput99,
  chunkJZLCHNYAInput100,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput100);
  chunkJZLCHNYAInput100.labelStyle = labelStyles;
  chunkJZLCHNYAInput100.useHtmlLabels ||
    y().flowchart?.htmlLabels !== false ||
    (chunkJZLCHNYAInput100.centerLabel = true);
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput99,
      chunkJZLCHNYAInput100,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput100),
    ),
    chunkJZLCHNYABinding578 = Math.max(
      bbox.width + (chunkJZLCHNYAInput100.padding ?? 0) * 2,
      chunkJZLCHNYAInput100?.width ?? 0,
    ),
    chunkJZLCHNYABinding579 = Math.max(
      bbox.height + (chunkJZLCHNYAInput100.padding ?? 0) * 2,
      chunkJZLCHNYAInput100?.height ?? 0,
    ),
    chunkJZLCHNYABinding580 = -chunkJZLCHNYABinding578 / 2,
    chunkJZLCHNYABinding581 = -chunkJZLCHNYABinding579 / 2,
    { cssStyles } = chunkJZLCHNYAInput100,
    chunkJZLCHNYABinding582 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding583 = o(chunkJZLCHNYAInput100, {
      fill: themeVariables.noteBkgColor,
      stroke: themeVariables.noteBorderColor,
    });
  chunkJZLCHNYAInput100.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding583.roughness = 0),
    (chunkJZLCHNYABinding583.fillStyle = "solid"));
  let chunkJZLCHNYABinding584 = chunkJZLCHNYABinding582.rectangle(
      chunkJZLCHNYABinding580,
      chunkJZLCHNYABinding581,
      chunkJZLCHNYABinding578,
      chunkJZLCHNYABinding579,
      chunkJZLCHNYABinding583,
    ),
    chunkJZLCHNYABinding585 = shapeSvg.insert(
      () => chunkJZLCHNYABinding584,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding585.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput100.look !== "handDrawn" &&
      chunkJZLCHNYABinding585.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput100.look !== "handDrawn" &&
      chunkJZLCHNYABinding585.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput100, chunkJZLCHNYABinding585),
    (chunkJZLCHNYAInput100.intersect = function (chunkJZLCHNYAInput399) {
      return $.rect(chunkJZLCHNYAInput100, chunkJZLCHNYAInput399);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper51(
  chunkJZLCHNYAInput84,
  chunkJZLCHNYAInput85,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput85);
  chunkJZLCHNYAInput85.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput84,
      chunkJZLCHNYAInput85,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput85),
    ),
    chunkJZLCHNYABinding520 =
      bbox.width +
      chunkJZLCHNYAInput85.padding +
      (bbox.height + chunkJZLCHNYAInput85.padding),
    chunkJZLCHNYABinding522 = [
      {
        x: chunkJZLCHNYABinding520 / 2,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding520,
        y: -chunkJZLCHNYABinding520 / 2,
      },
      {
        x: chunkJZLCHNYABinding520 / 2,
        y: -chunkJZLCHNYABinding520,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding520 / 2,
      },
    ],
    chunkJZLCHNYABinding523,
    { cssStyles } = chunkJZLCHNYAInput85;
  if (chunkJZLCHNYAInput85.look === "handDrawn") {
    let chunkJZLCHNYABinding1011 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1012 = o(chunkJZLCHNYAInput85, {}),
      chunkJZLCHNYABinding1013 = chunkJZLCHNYABinding18(
        0,
        0,
        chunkJZLCHNYABinding520,
      ),
      chunkJZLCHNYABinding1014 = chunkJZLCHNYABinding1011.path(
        chunkJZLCHNYABinding1013,
        chunkJZLCHNYABinding1012,
      );
    chunkJZLCHNYABinding523 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1014, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding520 / 2 + 0.5}, ${chunkJZLCHNYABinding520 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding523.attr("style", cssStyles);
  } else {
    chunkJZLCHNYABinding523 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding520,
      chunkJZLCHNYABinding520,
      chunkJZLCHNYABinding522,
    );
    chunkJZLCHNYABinding523.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding520 / 2 + 0.5}, ${chunkJZLCHNYABinding520 / 2})`,
    );
  }
  return (
    nodeStyles && chunkJZLCHNYABinding523.attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput85, chunkJZLCHNYABinding523),
    (chunkJZLCHNYAInput85.calcIntersect = function (
      chunkJZLCHNYAInput268,
      chunkJZLCHNYAInput269,
    ) {
      let chunkJZLCHNYABinding995 = chunkJZLCHNYAInput268.width,
        chunkJZLCHNYABinding996 = [
          {
            x: chunkJZLCHNYABinding995 / 2,
            y: 0,
          },
          {
            x: chunkJZLCHNYABinding995,
            y: -chunkJZLCHNYABinding995 / 2,
          },
          {
            x: chunkJZLCHNYABinding995 / 2,
            y: -chunkJZLCHNYABinding995,
          },
          {
            x: 0,
            y: -chunkJZLCHNYABinding995 / 2,
          },
        ],
        chunkJZLCHNYABinding997 = $.polygon(
          chunkJZLCHNYAInput268,
          chunkJZLCHNYABinding996,
          chunkJZLCHNYAInput269,
        );
      return {
        x: chunkJZLCHNYABinding997.x - 0.5,
        y: chunkJZLCHNYABinding997.y - 0.5,
      };
    }),
    (chunkJZLCHNYAInput85.intersect = function (chunkJZLCHNYAInput348) {
      return this.calcIntersect(chunkJZLCHNYAInput85, chunkJZLCHNYAInput348);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper52(
  chunkJZLCHNYAInput82,
  chunkJZLCHNYAInput83,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput83);
  chunkJZLCHNYAInput83.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput82,
      chunkJZLCHNYAInput83,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput83),
    ),
    chunkJZLCHNYABinding509 = Math.max(
      bbox.width + (chunkJZLCHNYAInput83.padding ?? 0),
      chunkJZLCHNYAInput83?.width ?? 0,
    ),
    chunkJZLCHNYABinding510 = Math.max(
      bbox.height + (chunkJZLCHNYAInput83.padding ?? 0),
      chunkJZLCHNYAInput83?.height ?? 0,
    ),
    chunkJZLCHNYABinding511 = -chunkJZLCHNYABinding509 / 2,
    chunkJZLCHNYABinding512 = -chunkJZLCHNYABinding510 / 2,
    chunkJZLCHNYABinding513 = chunkJZLCHNYABinding512 / 2,
    chunkJZLCHNYABinding514 = [
      {
        x: chunkJZLCHNYABinding511 + chunkJZLCHNYABinding513,
        y: chunkJZLCHNYABinding512,
      },
      {
        x: chunkJZLCHNYABinding511,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding511 + chunkJZLCHNYABinding513,
        y: -chunkJZLCHNYABinding512,
      },
      {
        x: -chunkJZLCHNYABinding511,
        y: -chunkJZLCHNYABinding512,
      },
      {
        x: -chunkJZLCHNYABinding511,
        y: chunkJZLCHNYABinding512,
      },
    ],
    { cssStyles } = chunkJZLCHNYAInput83,
    chunkJZLCHNYABinding515 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding516 = o(chunkJZLCHNYAInput83, {});
  chunkJZLCHNYAInput83.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding516.roughness = 0),
    (chunkJZLCHNYABinding516.fillStyle = "solid"));
  let chunkJZLCHNYABinding517 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding514),
    chunkJZLCHNYABinding518 = chunkJZLCHNYABinding515.path(
      chunkJZLCHNYABinding517,
      chunkJZLCHNYABinding516,
    ),
    chunkJZLCHNYABinding519 = shapeSvg.insert(
      () => chunkJZLCHNYABinding518,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding519.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput83.look !== "handDrawn" &&
      chunkJZLCHNYABinding519.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput83.look !== "handDrawn" &&
      chunkJZLCHNYABinding519.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding519.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding513 / 2},0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding513 / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput83, chunkJZLCHNYABinding519),
    (chunkJZLCHNYAInput83.intersect = function (chunkJZLCHNYAInput368) {
      return $.polygon(
        chunkJZLCHNYAInput83,
        chunkJZLCHNYABinding514,
        chunkJZLCHNYAInput368,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper53(
  chunkJZLCHNYAInput19,
  chunkJZLCHNYAInput20,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput20);
  chunkJZLCHNYAInput20.labelStyle = labelStyles;
  let chunkJZLCHNYABinding198;
  chunkJZLCHNYABinding198 = chunkJZLCHNYAInput20.cssClasses
    ? "node " + chunkJZLCHNYAInput20.cssClasses
    : "node default";
  let chunkJZLCHNYABinding199 = chunkJZLCHNYAInput19
      .insert("g")
      .attr("class", chunkJZLCHNYABinding198)
      .attr("id", chunkJZLCHNYAInput20.domId || chunkJZLCHNYAInput20.id),
    chunkJZLCHNYABinding200 = chunkJZLCHNYABinding199.insert("g"),
    chunkJZLCHNYABinding201 = chunkJZLCHNYABinding199
      .insert("g")
      .attr("class", "label")
      .attr("style", nodeStyles),
    chunkJZLCHNYABinding202 = chunkJZLCHNYAInput20.description,
    chunkJZLCHNYABinding203 = chunkJZLCHNYAInput20.label,
    chunkJZLCHNYABinding204 = chunkJZLCHNYABinding201
      .node()
      .appendChild(
        await chunkJZLCHNYAR(
          chunkJZLCHNYABinding203,
          chunkJZLCHNYAInput20.labelStyle,
          true,
          true,
        ),
      ),
    chunkJZLCHNYABinding205 = {
      width: 0,
      height: 0,
    };
  if (h(b()?.flowchart?.htmlLabels)) {
    let chunkJZLCHNYABinding1072 = chunkJZLCHNYABinding204.children[0],
      chunkJZLCHNYABinding1073 = select(chunkJZLCHNYABinding204);
    chunkJZLCHNYABinding205 = chunkJZLCHNYABinding1072.getBoundingClientRect();
    chunkJZLCHNYABinding1073.attr("width", chunkJZLCHNYABinding205.width);
    chunkJZLCHNYABinding1073.attr("height", chunkJZLCHNYABinding205.height);
  }
  logger.info("Text 2", chunkJZLCHNYABinding202);
  let chunkJZLCHNYABinding206 = chunkJZLCHNYABinding202 || [],
    chunkJZLCHNYABinding207 = chunkJZLCHNYABinding204.getBBox(),
    chunkJZLCHNYABinding208 = chunkJZLCHNYABinding201
      .node()
      .appendChild(
        await chunkJZLCHNYAR(
          chunkJZLCHNYABinding206.join
            ? chunkJZLCHNYABinding206.join("<br/>")
            : chunkJZLCHNYABinding206,
          chunkJZLCHNYAInput20.labelStyle,
          true,
          true,
        ),
      ),
    chunkJZLCHNYABinding209 = chunkJZLCHNYABinding208.children[0],
    chunkJZLCHNYABinding210 = select(chunkJZLCHNYABinding208);
  chunkJZLCHNYABinding205 = chunkJZLCHNYABinding209.getBoundingClientRect();
  chunkJZLCHNYABinding210.attr("width", chunkJZLCHNYABinding205.width);
  chunkJZLCHNYABinding210.attr("height", chunkJZLCHNYABinding205.height);
  let chunkJZLCHNYABinding211 = (chunkJZLCHNYAInput20.padding || 0) / 2;
  select(chunkJZLCHNYABinding208).attr(
    "transform",
    "translate( " +
      (chunkJZLCHNYABinding205.width > chunkJZLCHNYABinding207.width
        ? 0
        : (chunkJZLCHNYABinding207.width - chunkJZLCHNYABinding205.width) / 2) +
      ", " +
      (chunkJZLCHNYABinding207.height + chunkJZLCHNYABinding211 + 5) +
      ")",
  );
  select(chunkJZLCHNYABinding204).attr(
    "transform",
    "translate( " +
      (chunkJZLCHNYABinding205.width < chunkJZLCHNYABinding207.width
        ? 0
        : -(chunkJZLCHNYABinding207.width - chunkJZLCHNYABinding205.width) /
          2) +
      ", 0)",
  );
  chunkJZLCHNYABinding205 = chunkJZLCHNYABinding201.node().getBBox();
  chunkJZLCHNYABinding201.attr(
    "transform",
    "translate(" +
      -chunkJZLCHNYABinding205.width / 2 +
      ", " +
      (-chunkJZLCHNYABinding205.height / 2 - chunkJZLCHNYABinding211 + 3) +
      ")",
  );
  let chunkJZLCHNYABinding212 =
      chunkJZLCHNYABinding205.width + (chunkJZLCHNYAInput20.padding || 0),
    chunkJZLCHNYABinding213 =
      chunkJZLCHNYABinding205.height + (chunkJZLCHNYAInput20.padding || 0),
    chunkJZLCHNYABinding214 =
      -chunkJZLCHNYABinding205.width / 2 - chunkJZLCHNYABinding211,
    chunkJZLCHNYABinding215 =
      -chunkJZLCHNYABinding205.height / 2 - chunkJZLCHNYABinding211,
    chunkJZLCHNYABinding216,
    chunkJZLCHNYABinding217;
  if (chunkJZLCHNYAInput20.look === "handDrawn") {
    let chunkJZLCHNYABinding869 = rough.svg(chunkJZLCHNYABinding199),
      chunkJZLCHNYABinding870 = o(chunkJZLCHNYAInput20, {}),
      chunkJZLCHNYABinding871 = chunkJZLCHNYABinding869.path(
        chunkJZLCHNYABinding4(
          chunkJZLCHNYABinding214,
          chunkJZLCHNYABinding215,
          chunkJZLCHNYABinding212,
          chunkJZLCHNYABinding213,
          chunkJZLCHNYAInput20.rx || 0,
        ),
        chunkJZLCHNYABinding870,
      ),
      chunkJZLCHNYABinding872 = chunkJZLCHNYABinding869.line(
        -chunkJZLCHNYABinding205.width / 2 - chunkJZLCHNYABinding211,
        -chunkJZLCHNYABinding205.height / 2 -
          chunkJZLCHNYABinding211 +
          chunkJZLCHNYABinding207.height +
          chunkJZLCHNYABinding211,
        chunkJZLCHNYABinding205.width / 2 + chunkJZLCHNYABinding211,
        -chunkJZLCHNYABinding205.height / 2 -
          chunkJZLCHNYABinding211 +
          chunkJZLCHNYABinding207.height +
          chunkJZLCHNYABinding211,
        chunkJZLCHNYABinding870,
      );
    chunkJZLCHNYABinding217 = chunkJZLCHNYABinding199.insert(
      () => (
        logger.debug("Rough node insert CXC", chunkJZLCHNYABinding871),
        chunkJZLCHNYABinding872
      ),
      ":first-child",
    );
    chunkJZLCHNYABinding216 = chunkJZLCHNYABinding199.insert(
      () => (
        logger.debug("Rough node insert CXC", chunkJZLCHNYABinding871),
        chunkJZLCHNYABinding871
      ),
      ":first-child",
    );
  } else {
    chunkJZLCHNYABinding216 = chunkJZLCHNYABinding200.insert(
      "rect",
      ":first-child",
    );
    chunkJZLCHNYABinding217 = chunkJZLCHNYABinding200.insert("line");
    chunkJZLCHNYABinding216
      .attr("class", "outer title-state")
      .attr("style", nodeStyles)
      .attr("x", -chunkJZLCHNYABinding205.width / 2 - chunkJZLCHNYABinding211)
      .attr("y", -chunkJZLCHNYABinding205.height / 2 - chunkJZLCHNYABinding211)
      .attr(
        "width",
        chunkJZLCHNYABinding205.width + (chunkJZLCHNYAInput20.padding || 0),
      )
      .attr(
        "height",
        chunkJZLCHNYABinding205.height + (chunkJZLCHNYAInput20.padding || 0),
      );
    chunkJZLCHNYABinding217
      .attr("class", "divider")
      .attr("x1", -chunkJZLCHNYABinding205.width / 2 - chunkJZLCHNYABinding211)
      .attr("x2", chunkJZLCHNYABinding205.width / 2 + chunkJZLCHNYABinding211)
      .attr(
        "y1",
        -chunkJZLCHNYABinding205.height / 2 -
          chunkJZLCHNYABinding211 +
          chunkJZLCHNYABinding207.height +
          chunkJZLCHNYABinding211,
      )
      .attr(
        "y2",
        -chunkJZLCHNYABinding205.height / 2 -
          chunkJZLCHNYABinding211 +
          chunkJZLCHNYABinding207.height +
          chunkJZLCHNYABinding211,
      );
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput20, chunkJZLCHNYABinding216),
    (chunkJZLCHNYAInput20.intersect = function (chunkJZLCHNYAInput400) {
      return $.rect(chunkJZLCHNYAInput20, chunkJZLCHNYAInput400);
    }),
    chunkJZLCHNYABinding199
  );
}
function chunkJZLCHNYAHelper54(
  chunkJZLCHNYAInput168,
  chunkJZLCHNYAInput169,
  chunkJZLCHNYAInput170,
  chunkJZLCHNYAInput171,
  chunkJZLCHNYAInput172,
  chunkJZLCHNYAInput173,
  chunkJZLCHNYAInput174,
) {
  let chunkJZLCHNYABinding780 =
      (chunkJZLCHNYAInput168 + chunkJZLCHNYAInput170) / 2,
    chunkJZLCHNYABinding781 =
      (chunkJZLCHNYAInput169 + chunkJZLCHNYAInput171) / 2,
    chunkJZLCHNYABinding782 = Math.atan2(
      chunkJZLCHNYAInput171 - chunkJZLCHNYAInput169,
      chunkJZLCHNYAInput170 - chunkJZLCHNYAInput168,
    ),
    chunkJZLCHNYABinding783 =
      (chunkJZLCHNYAInput170 - chunkJZLCHNYAInput168) / 2,
    chunkJZLCHNYABinding784 =
      (chunkJZLCHNYAInput171 - chunkJZLCHNYAInput169) / 2,
    chunkJZLCHNYABinding785 = chunkJZLCHNYABinding783 / chunkJZLCHNYAInput172,
    chunkJZLCHNYABinding786 = chunkJZLCHNYABinding784 / chunkJZLCHNYAInput173,
    chunkJZLCHNYABinding787 = Math.sqrt(
      chunkJZLCHNYABinding785 ** 2 + chunkJZLCHNYABinding786 ** 2,
    );
  if (chunkJZLCHNYABinding787 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunkJZLCHNYABinding788 = Math.sqrt(1 - chunkJZLCHNYABinding787 ** 2),
    chunkJZLCHNYABinding789 =
      chunkJZLCHNYABinding780 +
      chunkJZLCHNYABinding788 *
        chunkJZLCHNYAInput173 *
        Math.sin(chunkJZLCHNYABinding782) *
        (chunkJZLCHNYAInput174 ? -1 : 1),
    chunkJZLCHNYABinding790 =
      chunkJZLCHNYABinding781 -
      chunkJZLCHNYABinding788 *
        chunkJZLCHNYAInput172 *
        Math.cos(chunkJZLCHNYABinding782) *
        (chunkJZLCHNYAInput174 ? -1 : 1),
    chunkJZLCHNYABinding791 = Math.atan2(
      (chunkJZLCHNYAInput169 - chunkJZLCHNYABinding790) / chunkJZLCHNYAInput173,
      (chunkJZLCHNYAInput168 - chunkJZLCHNYABinding789) / chunkJZLCHNYAInput172,
    ),
    chunkJZLCHNYABinding792 =
      Math.atan2(
        (chunkJZLCHNYAInput171 - chunkJZLCHNYABinding790) /
          chunkJZLCHNYAInput173,
        (chunkJZLCHNYAInput170 - chunkJZLCHNYABinding789) /
          chunkJZLCHNYAInput172,
      ) - chunkJZLCHNYABinding791;
  chunkJZLCHNYAInput174 &&
    chunkJZLCHNYABinding792 < 0 &&
    (chunkJZLCHNYABinding792 += 2 * Math.PI);
  !chunkJZLCHNYAInput174 &&
    chunkJZLCHNYABinding792 > 0 &&
    (chunkJZLCHNYABinding792 -= 2 * Math.PI);
  let chunkJZLCHNYABinding793 = [];
  for (
    let chunkJZLCHNYABinding1071 = 0;
    chunkJZLCHNYABinding1071 < 20;
    chunkJZLCHNYABinding1071++
  ) {
    let chunkJZLCHNYABinding1090 =
        chunkJZLCHNYABinding791 +
        (chunkJZLCHNYABinding1071 / 19) * chunkJZLCHNYABinding792,
      chunkJZLCHNYABinding1091 =
        chunkJZLCHNYABinding789 +
        chunkJZLCHNYAInput172 * Math.cos(chunkJZLCHNYABinding1090),
      chunkJZLCHNYABinding1092 =
        chunkJZLCHNYABinding790 +
        chunkJZLCHNYAInput173 * Math.sin(chunkJZLCHNYABinding1090);
    chunkJZLCHNYABinding793.push({
      x: chunkJZLCHNYABinding1091,
      y: chunkJZLCHNYABinding1092,
    });
  }
  return chunkJZLCHNYABinding793;
}
async function chunkJZLCHNYAHelper55(
  chunkJZLCHNYAInput64,
  chunkJZLCHNYAInput65,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput65);
  chunkJZLCHNYAInput65.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput64,
      chunkJZLCHNYAInput65,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput65),
    ),
    chunkJZLCHNYABinding417 = chunkJZLCHNYAInput65?.padding ?? 0,
    chunkJZLCHNYABinding418 = chunkJZLCHNYAInput65?.padding ?? 0,
    chunkJZLCHNYABinding419 =
      (chunkJZLCHNYAInput65?.width ? chunkJZLCHNYAInput65?.width : bbox.width) +
      chunkJZLCHNYABinding417 * 2,
    chunkJZLCHNYABinding420 =
      (chunkJZLCHNYAInput65?.height
        ? chunkJZLCHNYAInput65?.height
        : bbox.height) +
      chunkJZLCHNYABinding418 * 2,
    chunkJZLCHNYABinding421 = chunkJZLCHNYAInput65.radius || 5,
    chunkJZLCHNYABinding422 = chunkJZLCHNYAInput65.taper || 5,
    { cssStyles } = chunkJZLCHNYAInput65,
    chunkJZLCHNYABinding423 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding424 = o(chunkJZLCHNYAInput65, {});
  chunkJZLCHNYAInput65.stroke &&
    (chunkJZLCHNYABinding424.stroke = chunkJZLCHNYAInput65.stroke);
  chunkJZLCHNYAInput65.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding424.roughness = 0),
    (chunkJZLCHNYABinding424.fillStyle = "solid"));
  let chunkJZLCHNYABinding425 = [
      {
        x: -chunkJZLCHNYABinding419 / 2 + chunkJZLCHNYABinding422,
        y: -chunkJZLCHNYABinding420 / 2,
      },
      {
        x: chunkJZLCHNYABinding419 / 2 - chunkJZLCHNYABinding422,
        y: -chunkJZLCHNYABinding420 / 2,
      },
      ...chunkJZLCHNYAHelper54(
        chunkJZLCHNYABinding419 / 2 - chunkJZLCHNYABinding422,
        -chunkJZLCHNYABinding420 / 2,
        chunkJZLCHNYABinding419 / 2,
        -chunkJZLCHNYABinding420 / 2 + chunkJZLCHNYABinding422,
        chunkJZLCHNYABinding421,
        chunkJZLCHNYABinding421,
        true,
      ),
      {
        x: chunkJZLCHNYABinding419 / 2,
        y: -chunkJZLCHNYABinding420 / 2 + chunkJZLCHNYABinding422,
      },
      {
        x: chunkJZLCHNYABinding419 / 2,
        y: chunkJZLCHNYABinding420 / 2 - chunkJZLCHNYABinding422,
      },
      ...chunkJZLCHNYAHelper54(
        chunkJZLCHNYABinding419 / 2,
        chunkJZLCHNYABinding420 / 2 - chunkJZLCHNYABinding422,
        chunkJZLCHNYABinding419 / 2 - chunkJZLCHNYABinding422,
        chunkJZLCHNYABinding420 / 2,
        chunkJZLCHNYABinding421,
        chunkJZLCHNYABinding421,
        true,
      ),
      {
        x: chunkJZLCHNYABinding419 / 2 - chunkJZLCHNYABinding422,
        y: chunkJZLCHNYABinding420 / 2,
      },
      {
        x: -chunkJZLCHNYABinding419 / 2 + chunkJZLCHNYABinding422,
        y: chunkJZLCHNYABinding420 / 2,
      },
      ...chunkJZLCHNYAHelper54(
        -chunkJZLCHNYABinding419 / 2 + chunkJZLCHNYABinding422,
        chunkJZLCHNYABinding420 / 2,
        -chunkJZLCHNYABinding419 / 2,
        chunkJZLCHNYABinding420 / 2 - chunkJZLCHNYABinding422,
        chunkJZLCHNYABinding421,
        chunkJZLCHNYABinding421,
        true,
      ),
      {
        x: -chunkJZLCHNYABinding419 / 2,
        y: chunkJZLCHNYABinding420 / 2 - chunkJZLCHNYABinding422,
      },
      {
        x: -chunkJZLCHNYABinding419 / 2,
        y: -chunkJZLCHNYABinding420 / 2 + chunkJZLCHNYABinding422,
      },
      ...chunkJZLCHNYAHelper54(
        -chunkJZLCHNYABinding419 / 2,
        -chunkJZLCHNYABinding420 / 2 + chunkJZLCHNYABinding422,
        -chunkJZLCHNYABinding419 / 2 + chunkJZLCHNYABinding422,
        -chunkJZLCHNYABinding420 / 2,
        chunkJZLCHNYABinding421,
        chunkJZLCHNYABinding421,
        true,
      ),
    ],
    chunkJZLCHNYABinding426 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding425),
    chunkJZLCHNYABinding427 = chunkJZLCHNYABinding423.path(
      chunkJZLCHNYABinding426,
      chunkJZLCHNYABinding424,
    ),
    chunkJZLCHNYABinding428 = shapeSvg.insert(
      () => chunkJZLCHNYABinding427,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding428.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunkJZLCHNYAInput65.look !== "handDrawn" &&
      chunkJZLCHNYABinding428.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput65.look !== "handDrawn" &&
      chunkJZLCHNYABinding428.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput65, chunkJZLCHNYABinding428),
    (chunkJZLCHNYAInput65.intersect = function (chunkJZLCHNYAInput369) {
      return $.polygon(
        chunkJZLCHNYAInput65,
        chunkJZLCHNYABinding425,
        chunkJZLCHNYAInput369,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper56(
  chunkJZLCHNYAInput69,
  chunkJZLCHNYAInput70,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput70);
  chunkJZLCHNYAInput70.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput69,
      chunkJZLCHNYAInput70,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput70),
    ),
    chunkJZLCHNYABinding453 = chunkJZLCHNYAInput70?.padding ?? 0,
    chunkJZLCHNYABinding454 = Math.max(
      bbox.width + (chunkJZLCHNYAInput70.padding ?? 0) * 2,
      chunkJZLCHNYAInput70?.width ?? 0,
    ),
    chunkJZLCHNYABinding455 = Math.max(
      bbox.height + (chunkJZLCHNYAInput70.padding ?? 0) * 2,
      chunkJZLCHNYAInput70?.height ?? 0,
    ),
    chunkJZLCHNYABinding456 = -bbox.width / 2 - chunkJZLCHNYABinding453,
    chunkJZLCHNYABinding457 = -bbox.height / 2 - chunkJZLCHNYABinding453,
    { cssStyles } = chunkJZLCHNYAInput70,
    chunkJZLCHNYABinding458 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding459 = o(chunkJZLCHNYAInput70, {});
  chunkJZLCHNYAInput70.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding459.roughness = 0),
    (chunkJZLCHNYABinding459.fillStyle = "solid"));
  let chunkJZLCHNYABinding460 = [
      {
        x: chunkJZLCHNYABinding456,
        y: chunkJZLCHNYABinding457,
      },
      {
        x: chunkJZLCHNYABinding456 + chunkJZLCHNYABinding454 + 8,
        y: chunkJZLCHNYABinding457,
      },
      {
        x: chunkJZLCHNYABinding456 + chunkJZLCHNYABinding454 + 8,
        y: chunkJZLCHNYABinding457 + chunkJZLCHNYABinding455,
      },
      {
        x: chunkJZLCHNYABinding456 - 8,
        y: chunkJZLCHNYABinding457 + chunkJZLCHNYABinding455,
      },
      {
        x: chunkJZLCHNYABinding456 - 8,
        y: chunkJZLCHNYABinding457,
      },
      {
        x: chunkJZLCHNYABinding456,
        y: chunkJZLCHNYABinding457,
      },
      {
        x: chunkJZLCHNYABinding456,
        y: chunkJZLCHNYABinding457 + chunkJZLCHNYABinding455,
      },
    ],
    chunkJZLCHNYABinding461 = chunkJZLCHNYABinding458.polygon(
      chunkJZLCHNYABinding460.map((item) => [item.x, item.y]),
      chunkJZLCHNYABinding459,
    ),
    chunkJZLCHNYABinding462 = shapeSvg.insert(
      () => chunkJZLCHNYABinding461,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding462
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles)),
    nodeStyles &&
      chunkJZLCHNYAInput70.look !== "handDrawn" &&
      chunkJZLCHNYABinding462.selectAll("path").attr("style", nodeStyles),
    cssStyles &&
      chunkJZLCHNYAInput70.look !== "handDrawn" &&
      chunkJZLCHNYABinding462.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding454 / 2 + 4 + (chunkJZLCHNYAInput70.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding455 / 2 + (chunkJZLCHNYAInput70.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput70, chunkJZLCHNYABinding462),
    (chunkJZLCHNYAInput70.intersect = function (chunkJZLCHNYAInput401) {
      return $.rect(chunkJZLCHNYAInput70, chunkJZLCHNYAInput401);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper57(
  chunkJZLCHNYAInput80,
  chunkJZLCHNYAInput81,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput81);
  chunkJZLCHNYAInput81.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput80,
      chunkJZLCHNYAInput81,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput81),
    ),
    chunkJZLCHNYABinding499 = Math.max(
      bbox.width + (chunkJZLCHNYAInput81.padding ?? 0) * 2,
      chunkJZLCHNYAInput81?.width ?? 0,
    ),
    chunkJZLCHNYABinding500 = Math.max(
      bbox.height + (chunkJZLCHNYAInput81.padding ?? 0) * 2,
      chunkJZLCHNYAInput81?.height ?? 0,
    ),
    chunkJZLCHNYABinding501 = -chunkJZLCHNYABinding499 / 2,
    chunkJZLCHNYABinding502 = -chunkJZLCHNYABinding500 / 2,
    { cssStyles } = chunkJZLCHNYAInput81,
    chunkJZLCHNYABinding503 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding504 = o(chunkJZLCHNYAInput81, {});
  chunkJZLCHNYAInput81.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding504.roughness = 0),
    (chunkJZLCHNYABinding504.fillStyle = "solid"));
  let chunkJZLCHNYABinding505 = [
      {
        x: chunkJZLCHNYABinding501,
        y: chunkJZLCHNYABinding502,
      },
      {
        x: chunkJZLCHNYABinding501,
        y: chunkJZLCHNYABinding502 + chunkJZLCHNYABinding500,
      },
      {
        x: chunkJZLCHNYABinding501 + chunkJZLCHNYABinding499,
        y: chunkJZLCHNYABinding502 + chunkJZLCHNYABinding500,
      },
      {
        x: chunkJZLCHNYABinding501 + chunkJZLCHNYABinding499,
        y: chunkJZLCHNYABinding502 - chunkJZLCHNYABinding500 / 2,
      },
    ],
    chunkJZLCHNYABinding506 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding505),
    chunkJZLCHNYABinding507 = chunkJZLCHNYABinding503.path(
      chunkJZLCHNYABinding506,
      chunkJZLCHNYABinding504,
    ),
    chunkJZLCHNYABinding508 = shapeSvg.insert(
      () => chunkJZLCHNYABinding507,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding508.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput81.look !== "handDrawn" &&
      chunkJZLCHNYABinding508.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput81.look !== "handDrawn" &&
      chunkJZLCHNYABinding508.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding508.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYABinding500 / 4})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding499 / 2 + (chunkJZLCHNYAInput81.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-chunkJZLCHNYABinding500 / 4 + (chunkJZLCHNYAInput81.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput81, chunkJZLCHNYABinding508),
    (chunkJZLCHNYAInput81.intersect = function (chunkJZLCHNYAInput370) {
      return $.polygon(
        chunkJZLCHNYAInput81,
        chunkJZLCHNYABinding505,
        chunkJZLCHNYAInput370,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper58(
  chunkJZLCHNYAInput293,
  chunkJZLCHNYAInput294,
) {
  return chunkJZLCHNYAHelper41(chunkJZLCHNYAInput293, chunkJZLCHNYAInput294, {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX:
      chunkJZLCHNYAInput294.labelPaddingX ??
      (chunkJZLCHNYAInput294?.padding || 0) * 2,
    labelPaddingY: chunkJZLCHNYAInput294?.padding || 0,
  });
}
async function chunkJZLCHNYAHelper59(
  chunkJZLCHNYAInput129,
  chunkJZLCHNYAInput130,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput130);
  chunkJZLCHNYAInput130.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput129,
      chunkJZLCHNYAInput130,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput130),
    ),
    chunkJZLCHNYABinding682 = bbox.height + chunkJZLCHNYAInput130.padding,
    chunkJZLCHNYABinding683 =
      bbox.width + chunkJZLCHNYABinding682 / 4 + chunkJZLCHNYAInput130.padding,
    chunkJZLCHNYABinding684 = chunkJZLCHNYABinding682 / 2,
    { cssStyles } = chunkJZLCHNYAInput130,
    chunkJZLCHNYABinding685 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding686 = o(chunkJZLCHNYAInput130, {});
  chunkJZLCHNYAInput130.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding686.roughness = 0),
    (chunkJZLCHNYABinding686.fillStyle = "solid"));
  let chunkJZLCHNYABinding687 = [
      {
        x: -chunkJZLCHNYABinding683 / 2 + chunkJZLCHNYABinding684,
        y: -chunkJZLCHNYABinding682 / 2,
      },
      {
        x: chunkJZLCHNYABinding683 / 2 - chunkJZLCHNYABinding684,
        y: -chunkJZLCHNYABinding682 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYABinding683 / 2 + chunkJZLCHNYABinding684,
        0,
        chunkJZLCHNYABinding684,
        50,
        90,
        270,
      ),
      {
        x: chunkJZLCHNYABinding683 / 2 - chunkJZLCHNYABinding684,
        y: chunkJZLCHNYABinding682 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        chunkJZLCHNYABinding683 / 2 - chunkJZLCHNYABinding684,
        0,
        chunkJZLCHNYABinding684,
        50,
        270,
        450,
      ),
    ],
    chunkJZLCHNYABinding688 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding687),
    chunkJZLCHNYABinding689 = chunkJZLCHNYABinding685.path(
      chunkJZLCHNYABinding688,
      chunkJZLCHNYABinding686,
    ),
    chunkJZLCHNYABinding690 = shapeSvg.insert(
      () => chunkJZLCHNYABinding689,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding690.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunkJZLCHNYAInput130.look !== "handDrawn" &&
      chunkJZLCHNYABinding690.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput130.look !== "handDrawn" &&
      chunkJZLCHNYABinding690.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput130, chunkJZLCHNYABinding690),
    (chunkJZLCHNYAInput130.intersect = function (chunkJZLCHNYAInput371) {
      return $.polygon(
        chunkJZLCHNYAInput130,
        chunkJZLCHNYABinding687,
        chunkJZLCHNYAInput371,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper60(
  chunkJZLCHNYAInput339,
  chunkJZLCHNYAInput340,
) {
  return chunkJZLCHNYAHelper41(chunkJZLCHNYAInput339, chunkJZLCHNYAInput340, {
    rx: 5,
    ry: 5,
    classes: "flowchart-node",
  });
}
function chunkJZLCHNYAHelper61(
  chunkJZLCHNYAInput144,
  chunkJZLCHNYAInput145,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput145);
  chunkJZLCHNYAInput145.labelStyle = labelStyles;
  let { cssStyles } = chunkJZLCHNYAInput145,
    { lineColor, stateBorder, nodeBorder } = themeVariables,
    chunkJZLCHNYABinding720 = chunkJZLCHNYAInput144
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunkJZLCHNYAInput145.domId || chunkJZLCHNYAInput145.id),
    chunkJZLCHNYABinding721 = rough.svg(chunkJZLCHNYABinding720),
    chunkJZLCHNYABinding722 = o(chunkJZLCHNYAInput145, {});
  chunkJZLCHNYAInput145.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding722.roughness = 0),
    (chunkJZLCHNYABinding722.fillStyle = "solid"));
  let chunkJZLCHNYABinding723 = chunkJZLCHNYABinding721.circle(0, 0, 14, {
      ...chunkJZLCHNYABinding722,
      stroke: lineColor,
      strokeWidth: 2,
    }),
    chunkJZLCHNYABinding724 = stateBorder ?? nodeBorder,
    chunkJZLCHNYABinding725 = chunkJZLCHNYABinding721.circle(0, 0, 5, {
      ...chunkJZLCHNYABinding722,
      fill: chunkJZLCHNYABinding724,
      stroke: chunkJZLCHNYABinding724,
      strokeWidth: 2,
      fillStyle: "solid",
    }),
    chunkJZLCHNYABinding726 = chunkJZLCHNYABinding720.insert(
      () => chunkJZLCHNYABinding723,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding726.insert(() => chunkJZLCHNYABinding725),
    cssStyles &&
      chunkJZLCHNYABinding726.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYABinding726.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput145, chunkJZLCHNYABinding726),
    (chunkJZLCHNYAInput145.intersect = function (chunkJZLCHNYAInput380) {
      return $.circle(chunkJZLCHNYAInput145, 7, chunkJZLCHNYAInput380);
    }),
    chunkJZLCHNYABinding720
  );
}
function $e(
  chunkJZLCHNYAInput187,
  chunkJZLCHNYAInput188,
  { config: { themeVariables } },
) {
  let { lineColor } = themeVariables,
    chunkJZLCHNYABinding811 = chunkJZLCHNYAInput187
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunkJZLCHNYAInput188.domId || chunkJZLCHNYAInput188.id),
    chunkJZLCHNYABinding812;
  if (chunkJZLCHNYAInput188.look === "handDrawn") {
    let chunkJZLCHNYABinding1040 = rough
      .svg(chunkJZLCHNYABinding811)
      .circle(0, 0, 14, i(lineColor));
    chunkJZLCHNYABinding812 = chunkJZLCHNYABinding811.insert(
      () => chunkJZLCHNYABinding1040,
    );
    chunkJZLCHNYABinding812
      .attr("class", "state-start")
      .attr("r", 7)
      .attr("width", 14)
      .attr("height", 14);
  } else {
    chunkJZLCHNYABinding812 = chunkJZLCHNYABinding811.insert(
      "circle",
      ":first-child",
    );
    chunkJZLCHNYABinding812
      .attr("class", "state-start")
      .attr("r", 7)
      .attr("width", 14)
      .attr("height", 14);
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput188, chunkJZLCHNYABinding812),
    (chunkJZLCHNYAInput188.intersect = function (chunkJZLCHNYAInput381) {
      return $.circle(chunkJZLCHNYAInput188, 7, chunkJZLCHNYAInput381);
    }),
    chunkJZLCHNYABinding811
  );
}
async function chunkJZLCHNYAHelper62(
  chunkJZLCHNYAInput101,
  chunkJZLCHNYAInput102,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput102);
  chunkJZLCHNYAInput102.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput101,
      chunkJZLCHNYAInput102,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput102),
    ),
    chunkJZLCHNYABinding586 = (chunkJZLCHNYAInput102?.padding || 0) / 2,
    chunkJZLCHNYABinding587 = bbox.width + chunkJZLCHNYAInput102.padding,
    chunkJZLCHNYABinding588 = bbox.height + chunkJZLCHNYAInput102.padding,
    chunkJZLCHNYABinding589 = -bbox.width / 2 - chunkJZLCHNYABinding586,
    chunkJZLCHNYABinding590 = -bbox.height / 2 - chunkJZLCHNYABinding586,
    chunkJZLCHNYABinding591 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding587,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding587,
        y: -chunkJZLCHNYABinding588,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding588,
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
        x: chunkJZLCHNYABinding587 + 8,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding587 + 8,
        y: -chunkJZLCHNYABinding588,
      },
      {
        x: -8,
        y: -chunkJZLCHNYABinding588,
      },
      {
        x: -8,
        y: 0,
      },
    ];
  if (chunkJZLCHNYAInput102.look === "handDrawn") {
    let chunkJZLCHNYABinding917 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding918 = o(chunkJZLCHNYAInput102, {}),
      chunkJZLCHNYABinding919 = chunkJZLCHNYABinding917.rectangle(
        chunkJZLCHNYABinding589 - 8,
        chunkJZLCHNYABinding590,
        chunkJZLCHNYABinding587 + 16,
        chunkJZLCHNYABinding588,
        chunkJZLCHNYABinding918,
      ),
      chunkJZLCHNYABinding920 = chunkJZLCHNYABinding917.line(
        chunkJZLCHNYABinding589,
        chunkJZLCHNYABinding590,
        chunkJZLCHNYABinding589,
        chunkJZLCHNYABinding590 + chunkJZLCHNYABinding588,
        chunkJZLCHNYABinding918,
      ),
      chunkJZLCHNYABinding921 = chunkJZLCHNYABinding917.line(
        chunkJZLCHNYABinding589 + chunkJZLCHNYABinding587,
        chunkJZLCHNYABinding590,
        chunkJZLCHNYABinding589 + chunkJZLCHNYABinding587,
        chunkJZLCHNYABinding590 + chunkJZLCHNYABinding588,
        chunkJZLCHNYABinding918,
      );
    shapeSvg.insert(() => chunkJZLCHNYABinding920, ":first-child");
    shapeSvg.insert(() => chunkJZLCHNYABinding921, ":first-child");
    let chunkJZLCHNYABinding922 = shapeSvg.insert(
        () => chunkJZLCHNYABinding919,
        ":first-child",
      ),
      { cssStyles } = chunkJZLCHNYAInput102;
    chunkJZLCHNYABinding922
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles));
    chunkJZLCHNYAD(chunkJZLCHNYAInput102, chunkJZLCHNYABinding922);
  } else {
    let chunkJZLCHNYABinding1123 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding587,
      chunkJZLCHNYABinding588,
      chunkJZLCHNYABinding591,
    );
    nodeStyles && chunkJZLCHNYABinding1123.attr("style", nodeStyles);
    chunkJZLCHNYAD(chunkJZLCHNYAInput102, chunkJZLCHNYABinding1123);
  }
  return (
    (chunkJZLCHNYAInput102.intersect = function (chunkJZLCHNYAInput372) {
      return $.polygon(
        chunkJZLCHNYAInput102,
        chunkJZLCHNYABinding591,
        chunkJZLCHNYAInput372,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper63(
  chunkJZLCHNYAInput78,
  chunkJZLCHNYAInput79,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput79);
  chunkJZLCHNYAInput79.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput78,
      chunkJZLCHNYAInput79,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput79),
    ),
    chunkJZLCHNYABinding483 = Math.max(
      bbox.width + (chunkJZLCHNYAInput79.padding ?? 0) * 2,
      chunkJZLCHNYAInput79?.width ?? 0,
    ),
    chunkJZLCHNYABinding484 = Math.max(
      bbox.height + (chunkJZLCHNYAInput79.padding ?? 0) * 2,
      chunkJZLCHNYAInput79?.height ?? 0,
    ),
    chunkJZLCHNYABinding485 = -chunkJZLCHNYABinding483 / 2,
    chunkJZLCHNYABinding486 = -chunkJZLCHNYABinding484 / 2,
    chunkJZLCHNYABinding487 = 0.2 * chunkJZLCHNYABinding484,
    chunkJZLCHNYABinding488 = 0.2 * chunkJZLCHNYABinding484,
    { cssStyles } = chunkJZLCHNYAInput79,
    chunkJZLCHNYABinding489 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding490 = o(chunkJZLCHNYAInput79, {}),
    chunkJZLCHNYABinding491 = [
      {
        x: chunkJZLCHNYABinding485 - chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486,
      },
      {
        x:
          chunkJZLCHNYABinding485 +
          chunkJZLCHNYABinding483 +
          chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486,
      },
      {
        x:
          chunkJZLCHNYABinding485 +
          chunkJZLCHNYABinding483 +
          chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486 + chunkJZLCHNYABinding484,
      },
      {
        x: chunkJZLCHNYABinding485 - chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486 + chunkJZLCHNYABinding484,
      },
    ],
    chunkJZLCHNYABinding492 = [
      {
        x:
          chunkJZLCHNYABinding485 +
          chunkJZLCHNYABinding483 -
          chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486 + chunkJZLCHNYABinding484,
      },
      {
        x:
          chunkJZLCHNYABinding485 +
          chunkJZLCHNYABinding483 +
          chunkJZLCHNYABinding487 / 2,
        y: chunkJZLCHNYABinding486 + chunkJZLCHNYABinding484,
      },
      {
        x:
          chunkJZLCHNYABinding485 +
          chunkJZLCHNYABinding483 +
          chunkJZLCHNYABinding487 / 2,
        y:
          chunkJZLCHNYABinding486 +
          chunkJZLCHNYABinding484 -
          chunkJZLCHNYABinding488,
      },
    ];
  chunkJZLCHNYAInput79.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding490.roughness = 0),
    (chunkJZLCHNYABinding490.fillStyle = "solid"));
  let chunkJZLCHNYABinding493 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding491),
    chunkJZLCHNYABinding494 = chunkJZLCHNYABinding489.path(
      chunkJZLCHNYABinding493,
      chunkJZLCHNYABinding490,
    ),
    chunkJZLCHNYABinding495 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding492),
    chunkJZLCHNYABinding496 = chunkJZLCHNYABinding489.path(
      chunkJZLCHNYABinding495,
      {
        ...chunkJZLCHNYABinding490,
        fillStyle: "solid",
      },
    ),
    chunkJZLCHNYABinding497 = shapeSvg.insert(
      () => chunkJZLCHNYABinding496,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding497.insert(
      () => chunkJZLCHNYABinding494,
      ":first-child",
    ),
    chunkJZLCHNYABinding497.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput79.look !== "handDrawn" &&
      chunkJZLCHNYABinding497.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput79.look !== "handDrawn" &&
      chunkJZLCHNYABinding497.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput79, chunkJZLCHNYABinding497),
    (chunkJZLCHNYAInput79.intersect = function (chunkJZLCHNYAInput373) {
      return $.polygon(
        chunkJZLCHNYAInput79,
        chunkJZLCHNYABinding491,
        chunkJZLCHNYAInput373,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper64(
  chunkJZLCHNYAInput47,
  chunkJZLCHNYAInput48,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput48);
  chunkJZLCHNYAInput48.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput47,
      chunkJZLCHNYAInput48,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput48),
    ),
    chunkJZLCHNYABinding356 = Math.max(
      bbox.width + (chunkJZLCHNYAInput48.padding ?? 0) * 2,
      chunkJZLCHNYAInput48?.width ?? 0,
    ),
    chunkJZLCHNYABinding357 = Math.max(
      bbox.height + (chunkJZLCHNYAInput48.padding ?? 0) * 2,
      chunkJZLCHNYAInput48?.height ?? 0,
    ),
    chunkJZLCHNYABinding358 = chunkJZLCHNYABinding357 / 4,
    chunkJZLCHNYABinding359 = 0.2 * chunkJZLCHNYABinding356,
    chunkJZLCHNYABinding360 = 0.2 * chunkJZLCHNYABinding357,
    chunkJZLCHNYABinding361 = chunkJZLCHNYABinding357 + chunkJZLCHNYABinding358,
    { cssStyles } = chunkJZLCHNYAInput48,
    chunkJZLCHNYABinding362 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding363 = o(chunkJZLCHNYAInput48, {});
  chunkJZLCHNYAInput48.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding363.roughness = 0),
    (chunkJZLCHNYABinding363.fillStyle = "solid"));
  let chunkJZLCHNYABinding364 = [
      {
        x: -chunkJZLCHNYABinding356 / 2 - (chunkJZLCHNYABinding356 / 2) * 0.1,
        y: chunkJZLCHNYABinding361 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYABinding356 / 2 - (chunkJZLCHNYABinding356 / 2) * 0.1,
        chunkJZLCHNYABinding361 / 2,
        chunkJZLCHNYABinding356 / 2 + (chunkJZLCHNYABinding356 / 2) * 0.1,
        chunkJZLCHNYABinding361 / 2,
        chunkJZLCHNYABinding358,
        0.8,
      ),
      {
        x: chunkJZLCHNYABinding356 / 2 + (chunkJZLCHNYABinding356 / 2) * 0.1,
        y: -chunkJZLCHNYABinding361 / 2,
      },
      {
        x: -chunkJZLCHNYABinding356 / 2 - (chunkJZLCHNYABinding356 / 2) * 0.1,
        y: -chunkJZLCHNYABinding361 / 2,
      },
    ],
    chunkJZLCHNYABinding365 =
      -chunkJZLCHNYABinding356 / 2 + (chunkJZLCHNYABinding356 / 2) * 0.1,
    chunkJZLCHNYABinding366 =
      -chunkJZLCHNYABinding361 / 2 - chunkJZLCHNYABinding360 * 0.4,
    chunkJZLCHNYABinding367 = [
      {
        x:
          chunkJZLCHNYABinding365 +
          chunkJZLCHNYABinding356 -
          chunkJZLCHNYABinding359,
        y: (chunkJZLCHNYABinding366 + chunkJZLCHNYABinding357) * 1.4,
      },
      {
        x: chunkJZLCHNYABinding365 + chunkJZLCHNYABinding356,
        y:
          chunkJZLCHNYABinding366 +
          chunkJZLCHNYABinding357 -
          chunkJZLCHNYABinding360,
      },
      {
        x: chunkJZLCHNYABinding365 + chunkJZLCHNYABinding356,
        y: (chunkJZLCHNYABinding366 + chunkJZLCHNYABinding357) * 0.9,
      },
      ...chunkJZLCHNYAHelper2(
        chunkJZLCHNYABinding365 + chunkJZLCHNYABinding356,
        (chunkJZLCHNYABinding366 + chunkJZLCHNYABinding357) * 1.3,
        chunkJZLCHNYABinding365 +
          chunkJZLCHNYABinding356 -
          chunkJZLCHNYABinding359,
        (chunkJZLCHNYABinding366 + chunkJZLCHNYABinding357) * 1.5,
        -chunkJZLCHNYABinding357 * 0.03,
        0.5,
      ),
    ],
    chunkJZLCHNYABinding368 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding364),
    chunkJZLCHNYABinding369 = chunkJZLCHNYABinding362.path(
      chunkJZLCHNYABinding368,
      chunkJZLCHNYABinding363,
    ),
    chunkJZLCHNYABinding370 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding367),
    chunkJZLCHNYABinding371 = chunkJZLCHNYABinding362.path(
      chunkJZLCHNYABinding370,
      {
        ...chunkJZLCHNYABinding363,
        fillStyle: "solid",
      },
    ),
    chunkJZLCHNYABinding372 = shapeSvg.insert(
      () => chunkJZLCHNYABinding371,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding372.insert(
      () => chunkJZLCHNYABinding369,
      ":first-child",
    ),
    chunkJZLCHNYABinding372.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput48.look !== "handDrawn" &&
      chunkJZLCHNYABinding372.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput48.look !== "handDrawn" &&
      chunkJZLCHNYABinding372.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding372.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYABinding358 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding356 / 2 + (chunkJZLCHNYAInput48.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding357 / 2 + (chunkJZLCHNYAInput48.padding ?? 0) - chunkJZLCHNYABinding358 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput48, chunkJZLCHNYABinding372),
    (chunkJZLCHNYAInput48.intersect = function (chunkJZLCHNYAInput374) {
      return $.polygon(
        chunkJZLCHNYAInput48,
        chunkJZLCHNYABinding364,
        chunkJZLCHNYAInput374,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper65(
  chunkJZLCHNYAInput198,
  chunkJZLCHNYAInput199,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput199);
  chunkJZLCHNYAInput199.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput198,
      chunkJZLCHNYAInput199,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput199),
    ),
    chunkJZLCHNYABinding841 = Math.max(
      bbox.width + chunkJZLCHNYAInput199.padding,
      chunkJZLCHNYAInput199?.width || 0,
    ),
    chunkJZLCHNYABinding842 = Math.max(
      bbox.height + chunkJZLCHNYAInput199.padding,
      chunkJZLCHNYAInput199?.height || 0,
    ),
    chunkJZLCHNYABinding843 = -chunkJZLCHNYABinding841 / 2,
    chunkJZLCHNYABinding844 = -chunkJZLCHNYABinding842 / 2,
    chunkJZLCHNYABinding845 = shapeSvg.insert("rect", ":first-child");
  return (
    chunkJZLCHNYABinding845
      .attr("class", "text")
      .attr("style", nodeStyles)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", chunkJZLCHNYABinding843)
      .attr("y", chunkJZLCHNYABinding844)
      .attr("width", chunkJZLCHNYABinding841)
      .attr("height", chunkJZLCHNYABinding842),
    chunkJZLCHNYAD(chunkJZLCHNYAInput199, chunkJZLCHNYABinding845),
    (chunkJZLCHNYAInput199.intersect = function (chunkJZLCHNYAInput402) {
      return $.rect(chunkJZLCHNYAInput199, chunkJZLCHNYAInput402);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper66(
  chunkJZLCHNYAInput31,
  chunkJZLCHNYAInput32,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput32);
  chunkJZLCHNYAInput32.labelStyle = labelStyles;
  let { shapeSvg, bbox, label, halfPadding } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput31,
      chunkJZLCHNYAInput32,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput32),
    ),
    chunkJZLCHNYABinding267 =
      chunkJZLCHNYAInput32.look === "neo" ? halfPadding * 2 : halfPadding,
    chunkJZLCHNYABinding268 = bbox.height + chunkJZLCHNYABinding267,
    chunkJZLCHNYABinding269 = chunkJZLCHNYABinding268 / 2,
    chunkJZLCHNYABinding270 =
      chunkJZLCHNYABinding269 / (2.5 + chunkJZLCHNYABinding268 / 50),
    chunkJZLCHNYABinding271 =
      bbox.width + chunkJZLCHNYABinding270 + chunkJZLCHNYABinding267,
    { cssStyles } = chunkJZLCHNYAInput32,
    chunkJZLCHNYABinding272;
  if (chunkJZLCHNYAInput32.look === "handDrawn") {
    let chunkJZLCHNYABinding952 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding953 = chunkJZLCHNYABinding20(
        0,
        0,
        chunkJZLCHNYABinding271,
        chunkJZLCHNYABinding268,
        chunkJZLCHNYABinding270,
        chunkJZLCHNYABinding269,
      ),
      chunkJZLCHNYABinding954 = chunkJZLCHNYABinding21(
        0,
        0,
        chunkJZLCHNYABinding271,
        chunkJZLCHNYABinding268,
        chunkJZLCHNYABinding270,
        chunkJZLCHNYABinding269,
      ),
      chunkJZLCHNYABinding955 = chunkJZLCHNYABinding952.path(
        chunkJZLCHNYABinding953,
        o(chunkJZLCHNYAInput32, {}),
      ),
      chunkJZLCHNYABinding956 = chunkJZLCHNYABinding952.path(
        chunkJZLCHNYABinding954,
        o(chunkJZLCHNYAInput32, {
          fill: "none",
        }),
      );
    chunkJZLCHNYABinding272 = shapeSvg.insert(
      () => chunkJZLCHNYABinding956,
      ":first-child",
    );
    chunkJZLCHNYABinding272 = shapeSvg.insert(
      () => chunkJZLCHNYABinding955,
      ":first-child",
    );
    chunkJZLCHNYABinding272.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYABinding272.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYABinding938 = chunkJZLCHNYABinding19(
      0,
      0,
      chunkJZLCHNYABinding271,
      chunkJZLCHNYABinding268,
      chunkJZLCHNYABinding270,
      chunkJZLCHNYABinding269,
    );
    chunkJZLCHNYABinding272 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYABinding938)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles))
      .attr("style", nodeStyles);
    chunkJZLCHNYABinding272.attr("class", "basic label-container");
    cssStyles &&
      chunkJZLCHNYABinding272.selectAll("path").attr("style", cssStyles);
    nodeStyles &&
      chunkJZLCHNYABinding272.selectAll("path").attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYABinding272.attr("label-offset-x", chunkJZLCHNYABinding270),
    chunkJZLCHNYABinding272.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding271 / 2}, ${chunkJZLCHNYABinding268 / 2} )`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunkJZLCHNYABinding270 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput32, chunkJZLCHNYABinding272),
    (chunkJZLCHNYAInput32.intersect = function (chunkJZLCHNYAInput204) {
      let chunkJZLCHNYABinding867 = $.rect(
          chunkJZLCHNYAInput32,
          chunkJZLCHNYAInput204,
        ),
        chunkJZLCHNYABinding868 =
          chunkJZLCHNYABinding867.y - (chunkJZLCHNYAInput32.y ?? 0);
      if (
        chunkJZLCHNYABinding269 != 0 &&
        (Math.abs(chunkJZLCHNYABinding868) <
          (chunkJZLCHNYAInput32.height ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYABinding868) ==
            (chunkJZLCHNYAInput32.height ?? 0) / 2 &&
            Math.abs(
              chunkJZLCHNYABinding867.x - (chunkJZLCHNYAInput32.x ?? 0),
            ) >
              (chunkJZLCHNYAInput32.width ?? 0) / 2 - chunkJZLCHNYABinding270))
      ) {
        let chunkJZLCHNYABinding1049 =
          chunkJZLCHNYABinding270 *
          chunkJZLCHNYABinding270 *
          (1 -
            (chunkJZLCHNYABinding868 * chunkJZLCHNYABinding868) /
              (chunkJZLCHNYABinding269 * chunkJZLCHNYABinding269));
        chunkJZLCHNYABinding1049 != 0 &&
          (chunkJZLCHNYABinding1049 = Math.sqrt(
            Math.abs(chunkJZLCHNYABinding1049),
          ));
        chunkJZLCHNYABinding1049 =
          chunkJZLCHNYABinding270 - chunkJZLCHNYABinding1049;
        chunkJZLCHNYAInput204.x - (chunkJZLCHNYAInput32.x ?? 0) > 0 &&
          (chunkJZLCHNYABinding1049 = -chunkJZLCHNYABinding1049);
        chunkJZLCHNYABinding867.x += chunkJZLCHNYABinding1049;
      }
      return chunkJZLCHNYABinding867;
    }),
    shapeSvg
  );
}
async function at(chunkJZLCHNYAInput157, chunkJZLCHNYAInput158) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput158);
  chunkJZLCHNYAInput158.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput157,
      chunkJZLCHNYAInput158,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput158),
    ),
    chunkJZLCHNYABinding753 = bbox.width + chunkJZLCHNYAInput158.padding,
    chunkJZLCHNYABinding754 = bbox.height + chunkJZLCHNYAInput158.padding,
    chunkJZLCHNYABinding755 = [
      {
        x: (-3 * chunkJZLCHNYABinding754) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding753 + (3 * chunkJZLCHNYABinding754) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding753,
        y: -chunkJZLCHNYABinding754,
      },
      {
        x: 0,
        y: -chunkJZLCHNYABinding754,
      },
    ],
    chunkJZLCHNYABinding756,
    { cssStyles } = chunkJZLCHNYAInput158;
  if (chunkJZLCHNYAInput158.look === "handDrawn") {
    let chunkJZLCHNYABinding1033 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1034 = o(chunkJZLCHNYAInput158, {}),
      chunkJZLCHNYABinding1035 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding755),
      chunkJZLCHNYABinding1036 = chunkJZLCHNYABinding1033.path(
        chunkJZLCHNYABinding1035,
        chunkJZLCHNYABinding1034,
      );
    chunkJZLCHNYABinding756 = shapeSvg
      .insert(() => chunkJZLCHNYABinding1036, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding753 / 2}, ${chunkJZLCHNYABinding754 / 2})`,
      );
    cssStyles && chunkJZLCHNYABinding756.attr("style", cssStyles);
  } else
    chunkJZLCHNYABinding756 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYABinding753,
      chunkJZLCHNYABinding754,
      chunkJZLCHNYABinding755,
    );
  return (
    nodeStyles && chunkJZLCHNYABinding756.attr("style", nodeStyles),
    (chunkJZLCHNYAInput158.width = chunkJZLCHNYABinding753),
    (chunkJZLCHNYAInput158.height = chunkJZLCHNYABinding754),
    chunkJZLCHNYAD(chunkJZLCHNYAInput158, chunkJZLCHNYABinding756),
    (chunkJZLCHNYAInput158.intersect = function (chunkJZLCHNYAInput375) {
      return $.polygon(
        chunkJZLCHNYAInput158,
        chunkJZLCHNYABinding755,
        chunkJZLCHNYAInput375,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper67(
  chunkJZLCHNYAInput118,
  chunkJZLCHNYAInput119,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput119);
  chunkJZLCHNYAInput119.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput118,
      chunkJZLCHNYAInput119,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput119),
    ),
    chunkJZLCHNYABinding639 = Math.max(
      60,
      bbox.width + (chunkJZLCHNYAInput119.padding ?? 0) * 2,
      chunkJZLCHNYAInput119?.width ?? 0,
    ),
    chunkJZLCHNYABinding640 = Math.max(
      20,
      bbox.height + (chunkJZLCHNYAInput119.padding ?? 0) * 2,
      chunkJZLCHNYAInput119?.height ?? 0,
    ),
    { cssStyles } = chunkJZLCHNYAInput119,
    chunkJZLCHNYABinding641 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding642 = o(chunkJZLCHNYAInput119, {});
  chunkJZLCHNYAInput119.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding642.roughness = 0),
    (chunkJZLCHNYABinding642.fillStyle = "solid"));
  let chunkJZLCHNYABinding643 = [
      {
        x: (-chunkJZLCHNYABinding639 / 2) * 0.8,
        y: -chunkJZLCHNYABinding640 / 2,
      },
      {
        x: (chunkJZLCHNYABinding639 / 2) * 0.8,
        y: -chunkJZLCHNYABinding640 / 2,
      },
      {
        x: chunkJZLCHNYABinding639 / 2,
        y: (-chunkJZLCHNYABinding640 / 2) * 0.6,
      },
      {
        x: chunkJZLCHNYABinding639 / 2,
        y: chunkJZLCHNYABinding640 / 2,
      },
      {
        x: -chunkJZLCHNYABinding639 / 2,
        y: chunkJZLCHNYABinding640 / 2,
      },
      {
        x: -chunkJZLCHNYABinding639 / 2,
        y: (-chunkJZLCHNYABinding640 / 2) * 0.6,
      },
    ],
    chunkJZLCHNYABinding644 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding643),
    chunkJZLCHNYABinding645 = chunkJZLCHNYABinding641.path(
      chunkJZLCHNYABinding644,
      chunkJZLCHNYABinding642,
    ),
    chunkJZLCHNYABinding646 = shapeSvg.insert(
      () => chunkJZLCHNYABinding645,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding646.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput119.look !== "handDrawn" &&
      chunkJZLCHNYABinding646.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput119.look !== "handDrawn" &&
      chunkJZLCHNYABinding646.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput119, chunkJZLCHNYABinding646),
    (chunkJZLCHNYAInput119.intersect = function (chunkJZLCHNYAInput376) {
      return $.polygon(
        chunkJZLCHNYAInput119,
        chunkJZLCHNYABinding643,
        chunkJZLCHNYAInput376,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper68(
  chunkJZLCHNYAInput92,
  chunkJZLCHNYAInput93,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput93);
  chunkJZLCHNYAInput93.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput92,
      chunkJZLCHNYAInput93,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput93),
    ),
    chunkJZLCHNYABinding550 = h(b().flowchart?.htmlLabels),
    chunkJZLCHNYABinding551 = bbox.width + (chunkJZLCHNYAInput93.padding ?? 0),
    chunkJZLCHNYABinding552 = chunkJZLCHNYABinding551 + bbox.height,
    chunkJZLCHNYABinding553 = chunkJZLCHNYABinding551 + bbox.height,
    chunkJZLCHNYABinding554 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding553,
        y: 0,
      },
      {
        x: chunkJZLCHNYABinding553 / 2,
        y: -chunkJZLCHNYABinding552,
      },
    ],
    { cssStyles } = chunkJZLCHNYAInput93,
    chunkJZLCHNYABinding555 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding556 = o(chunkJZLCHNYAInput93, {});
  chunkJZLCHNYAInput93.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding556.roughness = 0),
    (chunkJZLCHNYABinding556.fillStyle = "solid"));
  let chunkJZLCHNYABinding557 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding554),
    chunkJZLCHNYABinding558 = chunkJZLCHNYABinding555.path(
      chunkJZLCHNYABinding557,
      chunkJZLCHNYABinding556,
    ),
    chunkJZLCHNYABinding559 = shapeSvg
      .insert(() => chunkJZLCHNYABinding558, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding552 / 2}, ${chunkJZLCHNYABinding552 / 2})`,
      );
  return (
    cssStyles &&
      chunkJZLCHNYAInput93.look !== "handDrawn" &&
      chunkJZLCHNYABinding559.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput93.look !== "handDrawn" &&
      chunkJZLCHNYABinding559.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAInput93.width = chunkJZLCHNYABinding551),
    (chunkJZLCHNYAInput93.height = chunkJZLCHNYABinding552),
    chunkJZLCHNYAD(chunkJZLCHNYAInput93, chunkJZLCHNYABinding559),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunkJZLCHNYABinding552 / 2 - (bbox.height + (chunkJZLCHNYAInput93.padding ?? 0) / (chunkJZLCHNYABinding550 ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`,
    ),
    (chunkJZLCHNYAInput93.intersect = function (chunkJZLCHNYAInput336) {
      return (
        logger.info(
          "Triangle intersect",
          chunkJZLCHNYAInput93,
          chunkJZLCHNYABinding554,
          chunkJZLCHNYAInput336,
        ),
        $.polygon(
          chunkJZLCHNYAInput93,
          chunkJZLCHNYABinding554,
          chunkJZLCHNYAInput336,
        )
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper69(
  chunkJZLCHNYAInput73,
  chunkJZLCHNYAInput74,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput74);
  chunkJZLCHNYAInput74.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput73,
      chunkJZLCHNYAInput74,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput74),
    ),
    chunkJZLCHNYABinding466 = Math.max(
      bbox.width + (chunkJZLCHNYAInput74.padding ?? 0) * 2,
      chunkJZLCHNYAInput74?.width ?? 0,
    ),
    chunkJZLCHNYABinding467 = Math.max(
      bbox.height + (chunkJZLCHNYAInput74.padding ?? 0) * 2,
      chunkJZLCHNYAInput74?.height ?? 0,
    ),
    chunkJZLCHNYABinding468 = chunkJZLCHNYABinding467 / 8,
    chunkJZLCHNYABinding469 = chunkJZLCHNYABinding467 + chunkJZLCHNYABinding468,
    { cssStyles } = chunkJZLCHNYAInput74,
    chunkJZLCHNYABinding470 = 70 - chunkJZLCHNYABinding466,
    chunkJZLCHNYABinding471 =
      chunkJZLCHNYABinding470 > 0 ? chunkJZLCHNYABinding470 / 2 : 0,
    chunkJZLCHNYABinding472 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding473 = o(chunkJZLCHNYAInput74, {});
  chunkJZLCHNYAInput74.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding473.roughness = 0),
    (chunkJZLCHNYABinding473.fillStyle = "solid"));
  let chunkJZLCHNYABinding474 = [
      {
        x: -chunkJZLCHNYABinding466 / 2 - chunkJZLCHNYABinding471,
        y: chunkJZLCHNYABinding469 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYABinding466 / 2 - chunkJZLCHNYABinding471,
        chunkJZLCHNYABinding469 / 2,
        chunkJZLCHNYABinding466 / 2 + chunkJZLCHNYABinding471,
        chunkJZLCHNYABinding469 / 2,
        chunkJZLCHNYABinding468,
        0.8,
      ),
      {
        x: chunkJZLCHNYABinding466 / 2 + chunkJZLCHNYABinding471,
        y: -chunkJZLCHNYABinding469 / 2,
      },
      {
        x: -chunkJZLCHNYABinding466 / 2 - chunkJZLCHNYABinding471,
        y: -chunkJZLCHNYABinding469 / 2,
      },
    ],
    chunkJZLCHNYABinding475 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding474),
    chunkJZLCHNYABinding476 = chunkJZLCHNYABinding472.path(
      chunkJZLCHNYABinding475,
      chunkJZLCHNYABinding473,
    ),
    chunkJZLCHNYABinding477 = shapeSvg.insert(
      () => chunkJZLCHNYABinding476,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding477.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput74.look !== "handDrawn" &&
      chunkJZLCHNYABinding477.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput74.look !== "handDrawn" &&
      chunkJZLCHNYABinding477.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYABinding477.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYABinding468 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding466 / 2 + (chunkJZLCHNYAInput74.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYABinding467 / 2 + (chunkJZLCHNYAInput74.padding ?? 0) - chunkJZLCHNYABinding468 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput74, chunkJZLCHNYABinding477),
    (chunkJZLCHNYAInput74.intersect = function (chunkJZLCHNYAInput377) {
      return $.polygon(
        chunkJZLCHNYAInput74,
        chunkJZLCHNYABinding474,
        chunkJZLCHNYAInput377,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper70(
  chunkJZLCHNYAInput94,
  chunkJZLCHNYAInput95,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput95);
  chunkJZLCHNYAInput95.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput94,
      chunkJZLCHNYAInput95,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput95),
    ),
    chunkJZLCHNYABinding560 = Math.max(
      bbox.width + (chunkJZLCHNYAInput95.padding ?? 0) * 2,
      chunkJZLCHNYAInput95?.width ?? 0,
    ),
    chunkJZLCHNYABinding561 = Math.max(
      bbox.height + (chunkJZLCHNYAInput95.padding ?? 0) * 2,
      chunkJZLCHNYAInput95?.height ?? 0,
    ),
    chunkJZLCHNYABinding562 = chunkJZLCHNYABinding560 / chunkJZLCHNYABinding561,
    chunkJZLCHNYABinding563 = chunkJZLCHNYABinding560,
    chunkJZLCHNYABinding564 = chunkJZLCHNYABinding561;
  chunkJZLCHNYABinding563 > chunkJZLCHNYABinding564 * chunkJZLCHNYABinding562
    ? (chunkJZLCHNYABinding564 =
        chunkJZLCHNYABinding563 / chunkJZLCHNYABinding562)
    : (chunkJZLCHNYABinding563 =
        chunkJZLCHNYABinding564 * chunkJZLCHNYABinding562);
  chunkJZLCHNYABinding563 = Math.max(chunkJZLCHNYABinding563, 100);
  chunkJZLCHNYABinding564 = Math.max(chunkJZLCHNYABinding564, 50);
  let chunkJZLCHNYABinding565 = Math.min(
      chunkJZLCHNYABinding564 * 0.2,
      chunkJZLCHNYABinding564 / 4,
    ),
    chunkJZLCHNYABinding566 =
      chunkJZLCHNYABinding564 + chunkJZLCHNYABinding565 * 2,
    { cssStyles } = chunkJZLCHNYAInput95,
    chunkJZLCHNYABinding567 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding568 = o(chunkJZLCHNYAInput95, {});
  chunkJZLCHNYAInput95.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding568.roughness = 0),
    (chunkJZLCHNYABinding568.fillStyle = "solid"));
  let chunkJZLCHNYABinding569 = [
      {
        x: -chunkJZLCHNYABinding563 / 2,
        y: chunkJZLCHNYABinding566 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYABinding563 / 2,
        chunkJZLCHNYABinding566 / 2,
        chunkJZLCHNYABinding563 / 2,
        chunkJZLCHNYABinding566 / 2,
        chunkJZLCHNYABinding565,
        1,
      ),
      {
        x: chunkJZLCHNYABinding563 / 2,
        y: -chunkJZLCHNYABinding566 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        chunkJZLCHNYABinding563 / 2,
        -chunkJZLCHNYABinding566 / 2,
        -chunkJZLCHNYABinding563 / 2,
        -chunkJZLCHNYABinding566 / 2,
        chunkJZLCHNYABinding565,
        -1,
      ),
    ],
    chunkJZLCHNYABinding570 = chunkJZLCHNYAHelper1(chunkJZLCHNYABinding569),
    chunkJZLCHNYABinding571 = chunkJZLCHNYABinding567.path(
      chunkJZLCHNYABinding570,
      chunkJZLCHNYABinding568,
    ),
    chunkJZLCHNYABinding572 = shapeSvg.insert(
      () => chunkJZLCHNYABinding571,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding572.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput95.look !== "handDrawn" &&
      chunkJZLCHNYABinding572.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput95.look !== "handDrawn" &&
      chunkJZLCHNYABinding572.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAD(chunkJZLCHNYAInput95, chunkJZLCHNYABinding572),
    (chunkJZLCHNYAInput95.intersect = function (chunkJZLCHNYAInput378) {
      return $.polygon(
        chunkJZLCHNYAInput95,
        chunkJZLCHNYABinding569,
        chunkJZLCHNYAInput378,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper71(
  chunkJZLCHNYAInput67,
  chunkJZLCHNYAInput68,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput68);
  chunkJZLCHNYAInput68.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput67,
      chunkJZLCHNYAInput68,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput68),
    ),
    chunkJZLCHNYABinding440 = Math.max(
      bbox.width + (chunkJZLCHNYAInput68.padding ?? 0) * 2,
      chunkJZLCHNYAInput68?.width ?? 0,
    ),
    chunkJZLCHNYABinding441 = Math.max(
      bbox.height + (chunkJZLCHNYAInput68.padding ?? 0) * 2,
      chunkJZLCHNYAInput68?.height ?? 0,
    ),
    chunkJZLCHNYABinding442 = -chunkJZLCHNYABinding440 / 2,
    chunkJZLCHNYABinding443 = -chunkJZLCHNYABinding441 / 2,
    { cssStyles } = chunkJZLCHNYAInput68,
    chunkJZLCHNYABinding444 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding445 = o(chunkJZLCHNYAInput68, {}),
    chunkJZLCHNYABinding446 = [
      {
        x: chunkJZLCHNYABinding442 - 5,
        y: chunkJZLCHNYABinding443 - 5,
      },
      {
        x: chunkJZLCHNYABinding442 - 5,
        y: chunkJZLCHNYABinding443 + chunkJZLCHNYABinding441,
      },
      {
        x: chunkJZLCHNYABinding442 + chunkJZLCHNYABinding440,
        y: chunkJZLCHNYABinding443 + chunkJZLCHNYABinding441,
      },
      {
        x: chunkJZLCHNYABinding442 + chunkJZLCHNYABinding440,
        y: chunkJZLCHNYABinding443 - 5,
      },
    ],
    chunkJZLCHNYABinding447 = `M${chunkJZLCHNYABinding442 - 5},${chunkJZLCHNYABinding443 - 5} L${chunkJZLCHNYABinding442 + chunkJZLCHNYABinding440},${chunkJZLCHNYABinding443 - 5} L${chunkJZLCHNYABinding442 + chunkJZLCHNYABinding440},${chunkJZLCHNYABinding443 + chunkJZLCHNYABinding441} L${chunkJZLCHNYABinding442 - 5},${chunkJZLCHNYABinding443 + chunkJZLCHNYABinding441} L${chunkJZLCHNYABinding442 - 5},${chunkJZLCHNYABinding443 - 5}
                M${chunkJZLCHNYABinding442 - 5},${chunkJZLCHNYABinding443} L${chunkJZLCHNYABinding442 + chunkJZLCHNYABinding440},${chunkJZLCHNYABinding443}
                M${chunkJZLCHNYABinding442},${chunkJZLCHNYABinding443 - 5} L${chunkJZLCHNYABinding442},${chunkJZLCHNYABinding443 + chunkJZLCHNYABinding441}`;
  chunkJZLCHNYAInput68.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding445.roughness = 0),
    (chunkJZLCHNYABinding445.fillStyle = "solid"));
  let chunkJZLCHNYABinding448 = chunkJZLCHNYABinding444.path(
      chunkJZLCHNYABinding447,
      chunkJZLCHNYABinding445,
    ),
    chunkJZLCHNYABinding449 = shapeSvg.insert(
      () => chunkJZLCHNYABinding448,
      ":first-child",
    );
  return (
    chunkJZLCHNYABinding449.attr("transform", `translate(${2.5}, ${2.5})`),
    chunkJZLCHNYABinding449.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAInput68.look !== "handDrawn" &&
      chunkJZLCHNYABinding449.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAInput68.look !== "handDrawn" &&
      chunkJZLCHNYABinding449.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) + 2.5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 2.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput68, chunkJZLCHNYABinding449),
    (chunkJZLCHNYAInput68.intersect = function (chunkJZLCHNYAInput379) {
      return $.polygon(
        chunkJZLCHNYAInput68,
        chunkJZLCHNYABinding446,
        chunkJZLCHNYAInput379,
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper72(chunkJZLCHNYAInput1, chunkJZLCHNYAInput2) {
  let chunkJZLCHNYABinding26 = chunkJZLCHNYAInput2;
  if (
    (chunkJZLCHNYABinding26.alias &&
      (chunkJZLCHNYAInput2.label = chunkJZLCHNYABinding26.alias),
    chunkJZLCHNYAInput2.look === "handDrawn")
  ) {
    let { themeVariables: _themeVariables } = y(),
      { background } = _themeVariables;
    await chunkJZLCHNYAHelper72(chunkJZLCHNYAInput1, {
      ...chunkJZLCHNYAInput2,
      id: chunkJZLCHNYAInput2.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${background}`],
    });
  }
  let chunkJZLCHNYABinding27 = y();
  chunkJZLCHNYAInput2.useHtmlLabels = chunkJZLCHNYABinding27.htmlLabels;
  let chunkJZLCHNYABinding28 = chunkJZLCHNYABinding27.er?.diagramPadding ?? 10,
    chunkJZLCHNYABinding29 = chunkJZLCHNYABinding27.er?.entityPadding ?? 6,
    { cssStyles } = chunkJZLCHNYAInput2,
    { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput2);
  if (
    chunkJZLCHNYABinding26.attributes.length === 0 &&
    chunkJZLCHNYAInput2.label
  ) {
    let chunkJZLCHNYABinding909 = {
      rx: 0,
      ry: 0,
      labelPaddingX: chunkJZLCHNYABinding28,
      labelPaddingY: chunkJZLCHNYABinding28 * 1.5,
      classes: "",
    };
    chunkS3R3BYOJN(chunkJZLCHNYAInput2.label, chunkJZLCHNYABinding27) +
      chunkJZLCHNYABinding909.labelPaddingX * 2 <
      chunkJZLCHNYABinding27.er.minEntityWidth &&
      (chunkJZLCHNYAInput2.width = chunkJZLCHNYABinding27.er.minEntityWidth);
    let chunkJZLCHNYABinding910 = await chunkJZLCHNYAHelper41(
      chunkJZLCHNYAInput1,
      chunkJZLCHNYAInput2,
      chunkJZLCHNYABinding909,
    );
    if (!h(chunkJZLCHNYABinding27.htmlLabels)) {
      let chunkJZLCHNYABinding1084 = chunkJZLCHNYABinding910.select("text"),
        chunkJZLCHNYABinding1085 = chunkJZLCHNYABinding1084.node()?.getBBox();
      chunkJZLCHNYABinding1084.attr(
        "transform",
        `translate(${-chunkJZLCHNYABinding1085.width / 2}, 0)`,
      );
    }
    return chunkJZLCHNYABinding910;
  }
  chunkJZLCHNYABinding27.htmlLabels ||
    ((chunkJZLCHNYABinding28 *= 1.25), (chunkJZLCHNYABinding29 *= 1.25));
  let chunkJZLCHNYABinding30 = chunkJZLCHNYABinding2(chunkJZLCHNYAInput2);
  chunkJZLCHNYABinding30 ||= "node default";
  let chunkJZLCHNYABinding31 = chunkJZLCHNYAInput1
      .insert("g")
      .attr("class", chunkJZLCHNYABinding30)
      .attr("id", chunkJZLCHNYAInput2.domId || chunkJZLCHNYAInput2.id),
    chunkJZLCHNYABinding32 = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYABinding31,
      chunkJZLCHNYAInput2.label ?? "",
      chunkJZLCHNYABinding27,
      0,
      0,
      ["name"],
      labelStyles,
    );
  chunkJZLCHNYABinding32.height += chunkJZLCHNYABinding29;
  let chunkJZLCHNYABinding33 = 0,
    chunkJZLCHNYABinding34 = [],
    chunkJZLCHNYABinding35 = [],
    chunkJZLCHNYABinding36 = 0,
    chunkJZLCHNYABinding37 = 0,
    chunkJZLCHNYABinding38 = 0,
    chunkJZLCHNYABinding39 = 0,
    chunkJZLCHNYABinding40 = true,
    chunkJZLCHNYABinding41 = true;
  for (let chunkJZLCHNYABinding860 of chunkJZLCHNYABinding26.attributes) {
    let chunkJZLCHNYABinding862 = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYABinding31,
      chunkJZLCHNYABinding860.type,
      chunkJZLCHNYABinding27,
      0,
      chunkJZLCHNYABinding33,
      ["attribute-type"],
      labelStyles,
    );
    chunkJZLCHNYABinding36 = Math.max(
      chunkJZLCHNYABinding36,
      chunkJZLCHNYABinding862.width + chunkJZLCHNYABinding28,
    );
    let chunkJZLCHNYABinding863 = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYABinding31,
      chunkJZLCHNYABinding860.name,
      chunkJZLCHNYABinding27,
      0,
      chunkJZLCHNYABinding33,
      ["attribute-name"],
      labelStyles,
    );
    chunkJZLCHNYABinding37 = Math.max(
      chunkJZLCHNYABinding37,
      chunkJZLCHNYABinding863.width + chunkJZLCHNYABinding28,
    );
    let chunkJZLCHNYABinding864 = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYABinding31,
      chunkJZLCHNYABinding860.keys.join(),
      chunkJZLCHNYABinding27,
      0,
      chunkJZLCHNYABinding33,
      ["attribute-keys"],
      labelStyles,
    );
    chunkJZLCHNYABinding38 = Math.max(
      chunkJZLCHNYABinding38,
      chunkJZLCHNYABinding864.width + chunkJZLCHNYABinding28,
    );
    let chunkJZLCHNYABinding865 = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYABinding31,
      chunkJZLCHNYABinding860.comment,
      chunkJZLCHNYABinding27,
      0,
      chunkJZLCHNYABinding33,
      ["attribute-comment"],
      labelStyles,
    );
    chunkJZLCHNYABinding39 = Math.max(
      chunkJZLCHNYABinding39,
      chunkJZLCHNYABinding865.width + chunkJZLCHNYABinding28,
    );
    let chunkJZLCHNYABinding866 =
      Math.max(
        chunkJZLCHNYABinding862.height,
        chunkJZLCHNYABinding863.height,
        chunkJZLCHNYABinding864.height,
        chunkJZLCHNYABinding865.height,
      ) + chunkJZLCHNYABinding29;
    chunkJZLCHNYABinding35.push({
      yOffset: chunkJZLCHNYABinding33,
      rowHeight: chunkJZLCHNYABinding866,
    });
    chunkJZLCHNYABinding33 += chunkJZLCHNYABinding866;
  }
  let chunkJZLCHNYABinding42 = 4;
  chunkJZLCHNYABinding38 <= chunkJZLCHNYABinding28 &&
    ((chunkJZLCHNYABinding40 = false),
    (chunkJZLCHNYABinding38 = 0),
    chunkJZLCHNYABinding42--);
  chunkJZLCHNYABinding39 <= chunkJZLCHNYABinding28 &&
    ((chunkJZLCHNYABinding41 = false),
    (chunkJZLCHNYABinding39 = 0),
    chunkJZLCHNYABinding42--);
  let chunkJZLCHNYABinding43 = chunkJZLCHNYABinding31.node().getBBox();
  if (
    chunkJZLCHNYABinding32.width +
      chunkJZLCHNYABinding28 * 2 -
      (chunkJZLCHNYABinding36 +
        chunkJZLCHNYABinding37 +
        chunkJZLCHNYABinding38 +
        chunkJZLCHNYABinding39) >
    0
  ) {
    let chunkJZLCHNYABinding1086 =
      chunkJZLCHNYABinding32.width +
      chunkJZLCHNYABinding28 * 2 -
      (chunkJZLCHNYABinding36 +
        chunkJZLCHNYABinding37 +
        chunkJZLCHNYABinding38 +
        chunkJZLCHNYABinding39);
    chunkJZLCHNYABinding36 += chunkJZLCHNYABinding1086 / chunkJZLCHNYABinding42;
    chunkJZLCHNYABinding37 += chunkJZLCHNYABinding1086 / chunkJZLCHNYABinding42;
    chunkJZLCHNYABinding38 > 0 &&
      (chunkJZLCHNYABinding38 +=
        chunkJZLCHNYABinding1086 / chunkJZLCHNYABinding42);
    chunkJZLCHNYABinding39 > 0 &&
      (chunkJZLCHNYABinding39 +=
        chunkJZLCHNYABinding1086 / chunkJZLCHNYABinding42);
  }
  let chunkJZLCHNYABinding44 =
      chunkJZLCHNYABinding36 +
      chunkJZLCHNYABinding37 +
      chunkJZLCHNYABinding38 +
      chunkJZLCHNYABinding39,
    chunkJZLCHNYABinding45 = rough.svg(chunkJZLCHNYABinding31),
    chunkJZLCHNYABinding46 = o(chunkJZLCHNYAInput2, {});
  chunkJZLCHNYAInput2.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding46.roughness = 0),
    (chunkJZLCHNYABinding46.fillStyle = "solid"));
  let chunkJZLCHNYABinding47 = 0;
  chunkJZLCHNYABinding35.length > 0 &&
    (chunkJZLCHNYABinding47 = chunkJZLCHNYABinding35.reduce(
      (accumulator, current) => accumulator + (current?.rowHeight ?? 0),
      0,
    ));
  let chunkJZLCHNYABinding48 = Math.max(
      chunkJZLCHNYABinding43.width + chunkJZLCHNYABinding28 * 2,
      chunkJZLCHNYAInput2?.width || 0,
      chunkJZLCHNYABinding44,
    ),
    chunkJZLCHNYABinding49 = Math.max(
      (chunkJZLCHNYABinding47 ?? 0) + chunkJZLCHNYABinding32.height,
      chunkJZLCHNYAInput2?.height || 0,
    ),
    chunkJZLCHNYABinding50 = -chunkJZLCHNYABinding48 / 2,
    chunkJZLCHNYABinding51 = -chunkJZLCHNYABinding49 / 2;
  chunkJZLCHNYABinding31
    .selectAll("g:not(:first-child)")
    .each(
      (chunkJZLCHNYAInput201, chunkJZLCHNYAInput202, chunkJZLCHNYAInput203) => {
        let chunkJZLCHNYABinding851 = select(
            chunkJZLCHNYAInput203[chunkJZLCHNYAInput202],
          ),
          chunkJZLCHNYABinding852 = chunkJZLCHNYABinding851.attr("transform"),
          chunkJZLCHNYABinding853 = 0,
          chunkJZLCHNYABinding854 = 0;
        if (chunkJZLCHNYABinding852) {
          let chunkJZLCHNYABinding923 = RegExp(
            /translate\(([^,]+),([^)]+)\)/,
          ).exec(chunkJZLCHNYABinding852);
          chunkJZLCHNYABinding923 &&
            ((chunkJZLCHNYABinding853 = parseFloat(chunkJZLCHNYABinding923[1])),
            (chunkJZLCHNYABinding854 = parseFloat(chunkJZLCHNYABinding923[2])),
            chunkJZLCHNYABinding851.attr("class").includes("attribute-name")
              ? (chunkJZLCHNYABinding853 += chunkJZLCHNYABinding36)
              : chunkJZLCHNYABinding851.attr("class").includes("attribute-keys")
                ? (chunkJZLCHNYABinding853 +=
                    chunkJZLCHNYABinding36 + chunkJZLCHNYABinding37)
                : chunkJZLCHNYABinding851
                    .attr("class")
                    .includes("attribute-comment") &&
                  (chunkJZLCHNYABinding853 +=
                    chunkJZLCHNYABinding36 +
                    chunkJZLCHNYABinding37 +
                    chunkJZLCHNYABinding38));
        }
        chunkJZLCHNYABinding851.attr(
          "transform",
          `translate(${chunkJZLCHNYABinding50 + chunkJZLCHNYABinding28 / 2 + chunkJZLCHNYABinding853}, ${chunkJZLCHNYABinding854 + chunkJZLCHNYABinding51 + chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding29 / 2})`,
        );
      },
    );
  chunkJZLCHNYABinding31
    .select(".name")
    .attr(
      "transform",
      "translate(" +
        -chunkJZLCHNYABinding32.width / 2 +
        ", " +
        (chunkJZLCHNYABinding51 + chunkJZLCHNYABinding29 / 2) +
        ")",
    );
  let chunkJZLCHNYABinding52 = chunkJZLCHNYABinding45.rectangle(
      chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding51,
      chunkJZLCHNYABinding48,
      chunkJZLCHNYABinding49,
      chunkJZLCHNYABinding46,
    ),
    chunkJZLCHNYABinding53 = chunkJZLCHNYABinding31
      .insert(() => chunkJZLCHNYABinding52, ":first-child")
      .attr("style", cssStyles.join("")),
    { themeVariables } = y(),
    { rowEven, rowOdd, nodeBorder } = themeVariables;
  chunkJZLCHNYABinding34.push(0);
  for (let [
    chunkJZLCHNYABinding945,
    chunkJZLCHNYABinding946,
  ] of chunkJZLCHNYABinding35.entries()) {
    let chunkJZLCHNYABinding959 =
        (chunkJZLCHNYABinding945 + 1) % 2 == 0 &&
        chunkJZLCHNYABinding946.yOffset !== 0,
      chunkJZLCHNYABinding960 = chunkJZLCHNYABinding45.rectangle(
        chunkJZLCHNYABinding50,
        chunkJZLCHNYABinding32.height +
          chunkJZLCHNYABinding51 +
          chunkJZLCHNYABinding946?.yOffset,
        chunkJZLCHNYABinding48,
        chunkJZLCHNYABinding946?.rowHeight,
        {
          ...chunkJZLCHNYABinding46,
          fill: chunkJZLCHNYABinding959 ? rowEven : rowOdd,
          stroke: nodeBorder,
        },
      );
    chunkJZLCHNYABinding31
      .insert(() => chunkJZLCHNYABinding960, "g.label")
      .attr("style", cssStyles.join(""))
      .attr("class", `row-rect-${chunkJZLCHNYABinding959 ? "even" : "odd"}`);
  }
  let chunkJZLCHNYABinding54 = chunkJZLCHNYABinding45.line(
    chunkJZLCHNYABinding50,
    chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding51,
    chunkJZLCHNYABinding48 + chunkJZLCHNYABinding50,
    chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding51,
    chunkJZLCHNYABinding46,
  );
  chunkJZLCHNYABinding31
    .insert(() => chunkJZLCHNYABinding54)
    .attr("class", "divider");
  chunkJZLCHNYABinding54 = chunkJZLCHNYABinding45.line(
    chunkJZLCHNYABinding36 + chunkJZLCHNYABinding50,
    chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding51,
    chunkJZLCHNYABinding36 + chunkJZLCHNYABinding50,
    chunkJZLCHNYABinding49 + chunkJZLCHNYABinding51,
    chunkJZLCHNYABinding46,
  );
  chunkJZLCHNYABinding31
    .insert(() => chunkJZLCHNYABinding54)
    .attr("class", "divider");
  chunkJZLCHNYABinding40 &&
    ((chunkJZLCHNYABinding54 = chunkJZLCHNYABinding45.line(
      chunkJZLCHNYABinding36 + chunkJZLCHNYABinding37 + chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding51,
      chunkJZLCHNYABinding36 + chunkJZLCHNYABinding37 + chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding49 + chunkJZLCHNYABinding51,
      chunkJZLCHNYABinding46,
    )),
    chunkJZLCHNYABinding31
      .insert(() => chunkJZLCHNYABinding54)
      .attr("class", "divider"));
  chunkJZLCHNYABinding41 &&
    ((chunkJZLCHNYABinding54 = chunkJZLCHNYABinding45.line(
      chunkJZLCHNYABinding36 +
        chunkJZLCHNYABinding37 +
        chunkJZLCHNYABinding38 +
        chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding32.height + chunkJZLCHNYABinding51,
      chunkJZLCHNYABinding36 +
        chunkJZLCHNYABinding37 +
        chunkJZLCHNYABinding38 +
        chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding49 + chunkJZLCHNYABinding51,
      chunkJZLCHNYABinding46,
    )),
    chunkJZLCHNYABinding31
      .insert(() => chunkJZLCHNYABinding54)
      .attr("class", "divider"));
  for (let chunkJZLCHNYABinding1082 of chunkJZLCHNYABinding34) {
    chunkJZLCHNYABinding54 = chunkJZLCHNYABinding45.line(
      chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding32.height +
        chunkJZLCHNYABinding51 +
        chunkJZLCHNYABinding1082,
      chunkJZLCHNYABinding48 + chunkJZLCHNYABinding50,
      chunkJZLCHNYABinding32.height +
        chunkJZLCHNYABinding51 +
        chunkJZLCHNYABinding1082,
      chunkJZLCHNYABinding46,
    );
    chunkJZLCHNYABinding31
      .insert(() => chunkJZLCHNYABinding54)
      .attr("class", "divider");
  }
  if (
    (chunkJZLCHNYAD(chunkJZLCHNYAInput2, chunkJZLCHNYABinding53),
    nodeStyles && chunkJZLCHNYAInput2.look !== "handDrawn")
  ) {
    let chunkJZLCHNYABinding1016 = nodeStyles
      .split(";")
      ?.filter((chunkJZLCHNYAInput416) =>
        chunkJZLCHNYAInput416.includes("stroke"),
      )
      ?.map((chunkJZLCHNYAInput417) => `${chunkJZLCHNYAInput417}`)
      .join("; ");
    chunkJZLCHNYABinding31
      .selectAll("path")
      .attr("style", chunkJZLCHNYABinding1016 ?? "");
    chunkJZLCHNYABinding31
      .selectAll(".row-rect-even path")
      .attr("style", nodeStyles);
  }
  return (
    (chunkJZLCHNYAInput2.intersect = function (chunkJZLCHNYAInput403) {
      return $.rect(chunkJZLCHNYAInput2, chunkJZLCHNYAInput403);
    }),
    chunkJZLCHNYABinding31
  );
}
async function chunkJZLCHNYAHelper73(
  chunkJZLCHNYAInput109,
  chunkJZLCHNYAInput110,
  chunkJZLCHNYAInput111,
  chunkJZLCHNYAInput112 = 0,
  chunkJZLCHNYAInput113 = 0,
  chunkJZLCHNYAInput114 = [],
  chunkJZLCHNYAInput115 = "",
) {
  let chunkJZLCHNYABinding623 = chunkJZLCHNYAInput109
    .insert("g")
    .attr("class", `label ${chunkJZLCHNYAInput114.join(" ")}`)
    .attr(
      "transform",
      `translate(${chunkJZLCHNYAInput112}, ${chunkJZLCHNYAInput113})`,
    )
    .attr("style", chunkJZLCHNYAInput115);
  chunkJZLCHNYAInput110 !== j(chunkJZLCHNYAInput110) &&
    ((chunkJZLCHNYAInput110 = j(chunkJZLCHNYAInput110)),
    (chunkJZLCHNYAInput110 = chunkJZLCHNYAInput110
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")));
  let chunkJZLCHNYABinding624 = chunkJZLCHNYABinding623.node().appendChild(
    await chunkJA3XYJ7ZN(
      chunkJZLCHNYABinding623,
      chunkJZLCHNYAInput110,
      {
        width:
          chunkS3R3BYOJN(chunkJZLCHNYAInput110, chunkJZLCHNYAInput111) + 100,
        style: chunkJZLCHNYAInput115,
        useHtmlLabels: chunkJZLCHNYAInput111.htmlLabels,
      },
      chunkJZLCHNYAInput111,
    ),
  );
  if (
    chunkJZLCHNYAInput110.includes("&lt;") ||
    chunkJZLCHNYAInput110.includes("&gt;")
  ) {
    let chunkJZLCHNYABinding961 = chunkJZLCHNYABinding624.children[0];
    for (
      chunkJZLCHNYABinding961.textContent = chunkJZLCHNYABinding961.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
      chunkJZLCHNYABinding961.childNodes[0];
    ) {
      chunkJZLCHNYABinding961 = chunkJZLCHNYABinding961.childNodes[0];
      chunkJZLCHNYABinding961.textContent = chunkJZLCHNYABinding961.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
    }
  }
  let chunkJZLCHNYABinding625 = chunkJZLCHNYABinding624.getBBox();
  if (h(chunkJZLCHNYAInput111.htmlLabels)) {
    let chunkJZLCHNYABinding1054 = chunkJZLCHNYABinding624.children[0];
    chunkJZLCHNYABinding1054.style.textAlign = "start";
    let chunkJZLCHNYABinding1055 = select(chunkJZLCHNYABinding624);
    chunkJZLCHNYABinding625 = chunkJZLCHNYABinding1054.getBoundingClientRect();
    chunkJZLCHNYABinding1055.attr("width", chunkJZLCHNYABinding625.width);
    chunkJZLCHNYABinding1055.attr("height", chunkJZLCHNYABinding625.height);
  }
  return chunkJZLCHNYABinding625;
}
async function chunkJZLCHNYAHelper74(
  chunkJZLCHNYAInput57,
  chunkJZLCHNYAInput58,
  chunkJZLCHNYAInput59,
  chunkJZLCHNYAInput60,
  chunkJZLCHNYAInput61 = chunkJZLCHNYAInput59.class.padding ?? 12,
) {
  let chunkJZLCHNYABinding395 = chunkJZLCHNYAInput60 ? 0 : 3,
    chunkJZLCHNYABinding396 = chunkJZLCHNYAInput57
      .insert("g")
      .attr("class", chunkJZLCHNYABinding2(chunkJZLCHNYAInput58))
      .attr("id", chunkJZLCHNYAInput58.domId || chunkJZLCHNYAInput58.id),
    chunkJZLCHNYABinding397 = null,
    chunkJZLCHNYABinding398 = null,
    chunkJZLCHNYABinding399 = null,
    chunkJZLCHNYABinding400 = null,
    chunkJZLCHNYABinding401 = 0,
    chunkJZLCHNYABinding402 = 0,
    chunkJZLCHNYABinding403 = 0;
  if (
    ((chunkJZLCHNYABinding397 = chunkJZLCHNYABinding396
      .insert("g")
      .attr("class", "annotation-group text")),
    chunkJZLCHNYAInput58.annotations.length > 0)
  ) {
    let chunkJZLCHNYABinding1106 = chunkJZLCHNYAInput58.annotations[0];
    await chunkJZLCHNYAHelper75(
      chunkJZLCHNYABinding397,
      {
        text: `\xAB${chunkJZLCHNYABinding1106}\xBB`,
      },
      0,
    );
    chunkJZLCHNYABinding401 = chunkJZLCHNYABinding397.node().getBBox().height;
  }
  chunkJZLCHNYABinding398 = chunkJZLCHNYABinding396
    .insert("g")
    .attr("class", "label-group text");
  await chunkJZLCHNYAHelper75(
    chunkJZLCHNYABinding398,
    chunkJZLCHNYAInput58,
    0,
    ["font-weight: bolder"],
  );
  let chunkJZLCHNYABinding404 = chunkJZLCHNYABinding398.node().getBBox();
  chunkJZLCHNYABinding402 = chunkJZLCHNYABinding404.height;
  chunkJZLCHNYABinding399 = chunkJZLCHNYABinding396
    .insert("g")
    .attr("class", "members-group text");
  let chunkJZLCHNYABinding405 = 0;
  for (let chunkJZLCHNYABinding1114 of chunkJZLCHNYAInput58.members) {
    let chunkJZLCHNYABinding1121 = await chunkJZLCHNYAHelper75(
      chunkJZLCHNYABinding399,
      chunkJZLCHNYABinding1114,
      chunkJZLCHNYABinding405,
      [chunkJZLCHNYABinding1114.parseClassifier()],
    );
    chunkJZLCHNYABinding405 +=
      chunkJZLCHNYABinding1121 + chunkJZLCHNYABinding395;
  }
  chunkJZLCHNYABinding403 = chunkJZLCHNYABinding399.node().getBBox().height;
  chunkJZLCHNYABinding403 <= 0 &&
    (chunkJZLCHNYABinding403 = chunkJZLCHNYAInput61 / 2);
  chunkJZLCHNYABinding400 = chunkJZLCHNYABinding396
    .insert("g")
    .attr("class", "methods-group text");
  let chunkJZLCHNYABinding406 = 0;
  for (let chunkJZLCHNYABinding1115 of chunkJZLCHNYAInput58.methods) {
    let chunkJZLCHNYABinding1122 = await chunkJZLCHNYAHelper75(
      chunkJZLCHNYABinding400,
      chunkJZLCHNYABinding1115,
      chunkJZLCHNYABinding406,
      [chunkJZLCHNYABinding1115.parseClassifier()],
    );
    chunkJZLCHNYABinding406 +=
      chunkJZLCHNYABinding1122 + chunkJZLCHNYABinding395;
  }
  let chunkJZLCHNYABinding407 = chunkJZLCHNYABinding396.node().getBBox();
  if (chunkJZLCHNYABinding397 !== null) {
    let chunkJZLCHNYABinding1117 = chunkJZLCHNYABinding397.node().getBBox();
    chunkJZLCHNYABinding397.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding1117.width / 2})`,
    );
  }
  return (
    chunkJZLCHNYABinding398.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding404.width / 2}, ${chunkJZLCHNYABinding401})`,
    ),
    (chunkJZLCHNYABinding407 = chunkJZLCHNYABinding396.node().getBBox()),
    chunkJZLCHNYABinding399.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYABinding401 + chunkJZLCHNYABinding402 + chunkJZLCHNYAInput61 * 2})`,
    ),
    (chunkJZLCHNYABinding407 = chunkJZLCHNYABinding396.node().getBBox()),
    chunkJZLCHNYABinding400.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYABinding401 + chunkJZLCHNYABinding402 + (chunkJZLCHNYABinding403 ? chunkJZLCHNYABinding403 + chunkJZLCHNYAInput61 * 4 : chunkJZLCHNYAInput61 * 2)})`,
    ),
    (chunkJZLCHNYABinding407 = chunkJZLCHNYABinding396.node().getBBox()),
    {
      shapeSvg: chunkJZLCHNYABinding396,
      bbox: chunkJZLCHNYABinding407,
    }
  );
}
async function chunkJZLCHNYAHelper75(
  chunkJZLCHNYAInput25,
  chunkJZLCHNYAInput26,
  chunkJZLCHNYAInput27,
  chunkJZLCHNYAInput28 = [],
) {
  let chunkJZLCHNYABinding244 = chunkJZLCHNYAInput25
      .insert("g")
      .attr("class", "label")
      .attr("style", chunkJZLCHNYAInput28.join("; ")),
    chunkJZLCHNYABinding245 = y(),
    chunkJZLCHNYABinding246 =
      "useHtmlLabels" in chunkJZLCHNYAInput26
        ? chunkJZLCHNYAInput26.useHtmlLabels
        : (h(chunkJZLCHNYABinding245.htmlLabels) ?? true),
    chunkJZLCHNYABinding247 = "";
  chunkJZLCHNYABinding247 =
    "text" in chunkJZLCHNYAInput26
      ? chunkJZLCHNYAInput26.text
      : chunkJZLCHNYAInput26.label;
  !chunkJZLCHNYABinding246 &&
    chunkJZLCHNYABinding247.startsWith("\\") &&
    (chunkJZLCHNYABinding247 = chunkJZLCHNYABinding247.substring(1));
  O(chunkJZLCHNYABinding247) && (chunkJZLCHNYABinding246 = true);
  let chunkJZLCHNYABinding248 = await chunkJA3XYJ7ZN(
      chunkJZLCHNYABinding244,
      R(chunkS3R3BYOJI(chunkJZLCHNYABinding247)),
      {
        width:
          chunkS3R3BYOJN(chunkJZLCHNYABinding247, chunkJZLCHNYABinding245) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunkJZLCHNYABinding246,
      },
      chunkJZLCHNYABinding245,
    ),
    chunkJZLCHNYABinding249,
    chunkJZLCHNYABinding250 = 1;
  if (chunkJZLCHNYABinding246) {
    let chunkJZLCHNYABinding450 = chunkJZLCHNYABinding248.children[0],
      chunkJZLCHNYABinding451 = select(chunkJZLCHNYABinding248);
    chunkJZLCHNYABinding250 =
      chunkJZLCHNYABinding450.innerHTML.split("<br>").length;
    chunkJZLCHNYABinding450.innerHTML.includes("</math>") &&
      (chunkJZLCHNYABinding250 +=
        chunkJZLCHNYABinding450.innerHTML.split("<mrow>").length - 1);
    let chunkJZLCHNYABinding452 =
      chunkJZLCHNYABinding450.getElementsByTagName("img");
    if (chunkJZLCHNYABinding452) {
      let chunkJZLCHNYABinding699 =
        chunkJZLCHNYABinding247.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...chunkJZLCHNYABinding452].map(
          (item) =>
            new Promise((chunkJZLCHNYAInput180) => {
              function chunkJZLCHNYAHelper84() {
                if (
                  ((item.style.display = "flex"),
                  (item.style.flexDirection = "column"),
                  chunkJZLCHNYABinding699)
                ) {
                  let chunkJZLCHNYABinding988 =
                      chunkJZLCHNYABinding245.fontSize?.toString() ??
                      window.getComputedStyle(document.body).fontSize,
                    chunkJZLCHNYABinding989 =
                      parseInt(chunkJZLCHNYABinding988, 10) * 5 + "px";
                  item.style.minWidth = chunkJZLCHNYABinding989;
                  item.style.maxWidth = chunkJZLCHNYABinding989;
                } else item.style.width = "100%";
                chunkJZLCHNYAInput180(item);
              }
              defineFunctionName(chunkJZLCHNYAHelper84, "setupImage");
              setTimeout(() => {
                item.complete && chunkJZLCHNYAHelper84();
              });
              item.addEventListener("error", chunkJZLCHNYAHelper84);
              item.addEventListener("load", chunkJZLCHNYAHelper84);
            }),
        ),
      );
    }
    chunkJZLCHNYABinding249 = chunkJZLCHNYABinding450.getBoundingClientRect();
    chunkJZLCHNYABinding451.attr("width", chunkJZLCHNYABinding249.width);
    chunkJZLCHNYABinding451.attr("height", chunkJZLCHNYABinding249.height);
  } else {
    chunkJZLCHNYAInput28.includes("font-weight: bolder") &&
      select(chunkJZLCHNYABinding248)
        .selectAll("tspan")
        .attr("font-weight", "");
    chunkJZLCHNYABinding250 = chunkJZLCHNYABinding248.children.length;
    let chunkJZLCHNYABinding861 = chunkJZLCHNYABinding248.children[0];
    (chunkJZLCHNYABinding248.textContent === "" ||
      chunkJZLCHNYABinding248.textContent.includes("&gt")) &&
      ((chunkJZLCHNYABinding861.textContent =
        chunkJZLCHNYABinding247[0] +
        chunkJZLCHNYABinding247
          .substring(1)
          .replaceAll("&gt;", ">")
          .replaceAll("&lt;", "<")
          .trim()),
      chunkJZLCHNYABinding247[1] === " " &&
        (chunkJZLCHNYABinding861.textContent =
          chunkJZLCHNYABinding861.textContent[0] +
          " " +
          chunkJZLCHNYABinding861.textContent.substring(1)));
    chunkJZLCHNYABinding861.textContent === "undefined" &&
      (chunkJZLCHNYABinding861.textContent = "");
    chunkJZLCHNYABinding249 = chunkJZLCHNYABinding248.getBBox();
  }
  return (
    chunkJZLCHNYABinding244.attr(
      "transform",
      "translate(0," +
        (-chunkJZLCHNYABinding249.height / (2 * chunkJZLCHNYABinding250) +
          chunkJZLCHNYAInput27) +
        ")",
    ),
    chunkJZLCHNYABinding249.height
  );
}
async function chunkJZLCHNYAHelper76(chunkJZLCHNYAInput3, chunkJZLCHNYAInput4) {
  let chunkJZLCHNYABinding55 = b(),
    chunkJZLCHNYABinding56 = chunkJZLCHNYABinding55.class.padding ?? 12,
    chunkJZLCHNYABinding57 = chunkJZLCHNYABinding56,
    chunkJZLCHNYABinding58 =
      chunkJZLCHNYAInput4.useHtmlLabels ??
      h(chunkJZLCHNYABinding55.htmlLabels) ??
      true,
    chunkJZLCHNYABinding59 = chunkJZLCHNYAInput4;
  chunkJZLCHNYABinding59.annotations = chunkJZLCHNYABinding59.annotations ?? [];
  chunkJZLCHNYABinding59.members = chunkJZLCHNYABinding59.members ?? [];
  chunkJZLCHNYABinding59.methods = chunkJZLCHNYABinding59.methods ?? [];
  let { shapeSvg, bbox } = await chunkJZLCHNYAHelper74(
      chunkJZLCHNYAInput3,
      chunkJZLCHNYAInput4,
      chunkJZLCHNYABinding55,
      chunkJZLCHNYABinding58,
      chunkJZLCHNYABinding57,
    ),
    { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput4);
  chunkJZLCHNYAInput4.labelStyle = labelStyles;
  chunkJZLCHNYAInput4.cssStyles = chunkJZLCHNYABinding59.styles || "";
  let chunkJZLCHNYABinding60 =
    chunkJZLCHNYABinding59.styles?.join(";") || nodeStyles || "";
  chunkJZLCHNYAInput4.cssStyles ||= chunkJZLCHNYABinding60
    .replaceAll("!important", "")
    .split(";");
  let chunkJZLCHNYABinding61 =
      chunkJZLCHNYABinding59.members.length === 0 &&
      chunkJZLCHNYABinding59.methods.length === 0 &&
      !chunkJZLCHNYABinding55.class?.hideEmptyMembersBox,
    chunkJZLCHNYABinding62 = rough.svg(shapeSvg),
    chunkJZLCHNYABinding63 = o(chunkJZLCHNYAInput4, {});
  chunkJZLCHNYAInput4.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding63.roughness = 0),
    (chunkJZLCHNYABinding63.fillStyle = "solid"));
  let chunkJZLCHNYABinding64 = bbox.width,
    chunkJZLCHNYABinding65 = bbox.height;
  chunkJZLCHNYABinding59.members.length === 0 &&
  chunkJZLCHNYABinding59.methods.length === 0
    ? (chunkJZLCHNYABinding65 += chunkJZLCHNYABinding57)
    : chunkJZLCHNYABinding59.members.length > 0 &&
      chunkJZLCHNYABinding59.methods.length === 0 &&
      (chunkJZLCHNYABinding65 += chunkJZLCHNYABinding57 * 2);
  let chunkJZLCHNYABinding66 = -chunkJZLCHNYABinding64 / 2,
    chunkJZLCHNYABinding67 = -chunkJZLCHNYABinding65 / 2,
    chunkJZLCHNYABinding68 = chunkJZLCHNYABinding62.rectangle(
      chunkJZLCHNYABinding66 - chunkJZLCHNYABinding56,
      chunkJZLCHNYABinding67 -
        chunkJZLCHNYABinding56 -
        (chunkJZLCHNYABinding61
          ? chunkJZLCHNYABinding56
          : chunkJZLCHNYABinding59.members.length === 0 &&
              chunkJZLCHNYABinding59.methods.length === 0
            ? -chunkJZLCHNYABinding56 / 2
            : 0),
      chunkJZLCHNYABinding64 + 2 * chunkJZLCHNYABinding56,
      chunkJZLCHNYABinding65 +
        2 * chunkJZLCHNYABinding56 +
        (chunkJZLCHNYABinding61
          ? chunkJZLCHNYABinding56 * 2
          : chunkJZLCHNYABinding59.members.length === 0 &&
              chunkJZLCHNYABinding59.methods.length === 0
            ? -chunkJZLCHNYABinding56
            : 0),
      chunkJZLCHNYABinding63,
    ),
    chunkJZLCHNYABinding69 = shapeSvg.insert(
      () => chunkJZLCHNYABinding68,
      ":first-child",
    );
  chunkJZLCHNYABinding69.attr("class", "basic label-container");
  let chunkJZLCHNYABinding70 = chunkJZLCHNYABinding69.node().getBBox();
  shapeSvg
    .selectAll(".text")
    .each(
      (chunkJZLCHNYAInput193, chunkJZLCHNYAInput194, chunkJZLCHNYAInput195) => {
        let chunkJZLCHNYABinding813 = select(
            chunkJZLCHNYAInput195[chunkJZLCHNYAInput194],
          ),
          chunkJZLCHNYABinding814 = chunkJZLCHNYABinding813.attr("transform"),
          chunkJZLCHNYABinding815 = 0;
        if (chunkJZLCHNYABinding814) {
          let chunkJZLCHNYABinding1112 = RegExp(
            /translate\(([^,]+),([^)]+)\)/,
          ).exec(chunkJZLCHNYABinding814);
          chunkJZLCHNYABinding1112 &&
            (chunkJZLCHNYABinding815 = parseFloat(chunkJZLCHNYABinding1112[2]));
        }
        let chunkJZLCHNYABinding816 =
          chunkJZLCHNYABinding815 +
          chunkJZLCHNYABinding67 +
          chunkJZLCHNYABinding56 -
          (chunkJZLCHNYABinding61
            ? chunkJZLCHNYABinding56
            : chunkJZLCHNYABinding59.members.length === 0 &&
                chunkJZLCHNYABinding59.methods.length === 0
              ? -chunkJZLCHNYABinding56 / 2
              : 0);
        chunkJZLCHNYABinding58 || (chunkJZLCHNYABinding816 -= 4);
        let chunkJZLCHNYABinding817 = chunkJZLCHNYABinding66;
        (chunkJZLCHNYABinding813.attr("class").includes("label-group") ||
          chunkJZLCHNYABinding813.attr("class").includes("annotation-group")) &&
          ((chunkJZLCHNYABinding817 =
            -chunkJZLCHNYABinding813.node()?.getBBox().width / 2 || 0),
          shapeSvg
            .selectAll("text")
            .each(
              function (
                chunkJZLCHNYAInput311,
                chunkJZLCHNYAInput312,
                chunkJZLCHNYAInput313,
              ) {
                window.getComputedStyle(
                  chunkJZLCHNYAInput313[chunkJZLCHNYAInput312],
                ).textAnchor === "middle" && (chunkJZLCHNYABinding817 = 0);
              },
            ));
        chunkJZLCHNYABinding813.attr(
          "transform",
          `translate(${chunkJZLCHNYABinding817}, ${chunkJZLCHNYABinding816})`,
        );
      },
    );
  let chunkJZLCHNYABinding71 =
      shapeSvg.select(".annotation-group").node().getBBox().height -
        (chunkJZLCHNYABinding61 ? chunkJZLCHNYABinding56 / 2 : 0) || 0,
    chunkJZLCHNYABinding72 =
      shapeSvg.select(".label-group").node().getBBox().height -
        (chunkJZLCHNYABinding61 ? chunkJZLCHNYABinding56 / 2 : 0) || 0,
    chunkJZLCHNYABinding73 =
      shapeSvg.select(".members-group").node().getBBox().height -
        (chunkJZLCHNYABinding61 ? chunkJZLCHNYABinding56 / 2 : 0) || 0;
  if (
    chunkJZLCHNYABinding59.members.length > 0 ||
    chunkJZLCHNYABinding59.methods.length > 0 ||
    chunkJZLCHNYABinding61
  ) {
    let chunkJZLCHNYABinding1069 = chunkJZLCHNYABinding62.line(
      chunkJZLCHNYABinding70.x,
      chunkJZLCHNYABinding71 +
        chunkJZLCHNYABinding72 +
        chunkJZLCHNYABinding67 +
        chunkJZLCHNYABinding56,
      chunkJZLCHNYABinding70.x + chunkJZLCHNYABinding70.width,
      chunkJZLCHNYABinding71 +
        chunkJZLCHNYABinding72 +
        chunkJZLCHNYABinding67 +
        chunkJZLCHNYABinding56,
      chunkJZLCHNYABinding63,
    );
    shapeSvg
      .insert(() => chunkJZLCHNYABinding1069)
      .attr("class", "divider")
      .attr("style", chunkJZLCHNYABinding60);
  }
  if (
    chunkJZLCHNYABinding61 ||
    chunkJZLCHNYABinding59.members.length > 0 ||
    chunkJZLCHNYABinding59.methods.length > 0
  ) {
    let chunkJZLCHNYABinding1037 = chunkJZLCHNYABinding62.line(
      chunkJZLCHNYABinding70.x,
      chunkJZLCHNYABinding71 +
        chunkJZLCHNYABinding72 +
        chunkJZLCHNYABinding73 +
        chunkJZLCHNYABinding67 +
        chunkJZLCHNYABinding57 * 2 +
        chunkJZLCHNYABinding56,
      chunkJZLCHNYABinding70.x + chunkJZLCHNYABinding70.width,
      chunkJZLCHNYABinding71 +
        chunkJZLCHNYABinding72 +
        chunkJZLCHNYABinding73 +
        chunkJZLCHNYABinding67 +
        chunkJZLCHNYABinding56 +
        chunkJZLCHNYABinding57 * 2,
      chunkJZLCHNYABinding63,
    );
    shapeSvg
      .insert(() => chunkJZLCHNYABinding1037)
      .attr("class", "divider")
      .attr("style", chunkJZLCHNYABinding60);
  }
  if (
    (chunkJZLCHNYABinding59.look !== "handDrawn" &&
      shapeSvg.selectAll("path").attr("style", chunkJZLCHNYABinding60),
    chunkJZLCHNYABinding69
      .select(":nth-child(2)")
      .attr("style", chunkJZLCHNYABinding60),
    shapeSvg
      .selectAll(".divider")
      .select("path")
      .attr("style", chunkJZLCHNYABinding60),
    chunkJZLCHNYAInput4.labelStyle
      ? shapeSvg.selectAll("span").attr("style", chunkJZLCHNYAInput4.labelStyle)
      : shapeSvg.selectAll("span").attr("style", chunkJZLCHNYABinding60),
    !chunkJZLCHNYABinding58)
  ) {
    let chunkJZLCHNYABinding957 = RegExp(/color\s*:\s*([^;]*)/),
      chunkJZLCHNYABinding958 = chunkJZLCHNYABinding957.exec(
        chunkJZLCHNYABinding60,
      );
    if (chunkJZLCHNYABinding958) {
      let chunkJZLCHNYABinding1116 = chunkJZLCHNYABinding958[0].replace(
        "color",
        "fill",
      );
      shapeSvg.selectAll("tspan").attr("style", chunkJZLCHNYABinding1116);
    } else if (labelStyles) {
      let chunkJZLCHNYABinding1076 = chunkJZLCHNYABinding957.exec(labelStyles);
      if (chunkJZLCHNYABinding1076) {
        let chunkJZLCHNYABinding1113 = chunkJZLCHNYABinding1076[0].replace(
          "color",
          "fill",
        );
        shapeSvg.selectAll("tspan").attr("style", chunkJZLCHNYABinding1113);
      }
    }
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput4, chunkJZLCHNYABinding69),
    (chunkJZLCHNYAInput4.intersect = function (chunkJZLCHNYAInput404) {
      return $.rect(chunkJZLCHNYAInput4, chunkJZLCHNYAInput404);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper77(
  chunkJZLCHNYAInput29,
  chunkJZLCHNYAInput30,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput30);
  chunkJZLCHNYAInput30.labelStyle = labelStyles;
  let chunkJZLCHNYABinding251 = chunkJZLCHNYAInput30,
    chunkJZLCHNYABinding252 = chunkJZLCHNYAInput30,
    chunkJZLCHNYABinding253 = "verifyMethod" in chunkJZLCHNYAInput30,
    chunkJZLCHNYABinding254 = chunkJZLCHNYABinding2(chunkJZLCHNYAInput30),
    chunkJZLCHNYABinding255 = chunkJZLCHNYAInput29
      .insert("g")
      .attr("class", chunkJZLCHNYABinding254)
      .attr("id", chunkJZLCHNYAInput30.domId ?? chunkJZLCHNYAInput30.id),
    chunkJZLCHNYABinding256;
  chunkJZLCHNYABinding256 = chunkJZLCHNYABinding253
    ? await chunkJZLCHNYAHelper78(
        chunkJZLCHNYABinding255,
        `&lt;&lt;${chunkJZLCHNYABinding251.type}&gt;&gt;`,
        0,
        chunkJZLCHNYAInput30.labelStyle,
      )
    : await chunkJZLCHNYAHelper78(
        chunkJZLCHNYABinding255,
        "&lt;&lt;Element&gt;&gt;",
        0,
        chunkJZLCHNYAInput30.labelStyle,
      );
  let chunkJZLCHNYABinding257 = chunkJZLCHNYABinding256,
    chunkJZLCHNYABinding258 = await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      chunkJZLCHNYABinding251.name,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle + "; font-weight: bold;",
    );
  if (
    ((chunkJZLCHNYABinding257 += chunkJZLCHNYABinding258 + 20),
    chunkJZLCHNYABinding253)
  ) {
    let chunkJZLCHNYABinding880 = await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding251.requirementId ? `ID: ${chunkJZLCHNYABinding251.requirementId}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
    chunkJZLCHNYABinding257 += chunkJZLCHNYABinding880;
    let chunkJZLCHNYABinding881 = await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding251.text ? `Text: ${chunkJZLCHNYABinding251.text}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
    chunkJZLCHNYABinding257 += chunkJZLCHNYABinding881;
    let chunkJZLCHNYABinding882 = await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding251.risk ? `Risk: ${chunkJZLCHNYABinding251.risk}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
    chunkJZLCHNYABinding257 += chunkJZLCHNYABinding882;
    await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding251.verifyMethod ? `Verification: ${chunkJZLCHNYABinding251.verifyMethod}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
  } else {
    let chunkJZLCHNYABinding1064 = await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding252.type ? `Type: ${chunkJZLCHNYABinding252.type}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
    chunkJZLCHNYABinding257 += chunkJZLCHNYABinding1064;
    await chunkJZLCHNYAHelper78(
      chunkJZLCHNYABinding255,
      `${chunkJZLCHNYABinding252.docRef ? `Doc Ref: ${chunkJZLCHNYABinding252.docRef}` : ""}`,
      chunkJZLCHNYABinding257,
      chunkJZLCHNYAInput30.labelStyle,
    );
  }
  let chunkJZLCHNYABinding259 =
      (chunkJZLCHNYABinding255.node()?.getBBox().width ?? 200) + 20,
    chunkJZLCHNYABinding260 =
      (chunkJZLCHNYABinding255.node()?.getBBox().height ?? 200) + 20,
    chunkJZLCHNYABinding261 = -chunkJZLCHNYABinding259 / 2,
    chunkJZLCHNYABinding262 = -chunkJZLCHNYABinding260 / 2,
    chunkJZLCHNYABinding263 = rough.svg(chunkJZLCHNYABinding255),
    chunkJZLCHNYABinding264 = o(chunkJZLCHNYAInput30, {});
  chunkJZLCHNYAInput30.look !== "handDrawn" &&
    ((chunkJZLCHNYABinding264.roughness = 0),
    (chunkJZLCHNYABinding264.fillStyle = "solid"));
  let chunkJZLCHNYABinding265 = chunkJZLCHNYABinding263.rectangle(
      chunkJZLCHNYABinding261,
      chunkJZLCHNYABinding262,
      chunkJZLCHNYABinding259,
      chunkJZLCHNYABinding260,
      chunkJZLCHNYABinding264,
    ),
    chunkJZLCHNYABinding266 = chunkJZLCHNYABinding255.insert(
      () => chunkJZLCHNYABinding265,
      ":first-child",
    );
  if (
    (chunkJZLCHNYABinding266
      .attr("class", "basic label-container")
      .attr("style", nodeStyles),
    chunkJZLCHNYABinding255
      .selectAll(".label")
      .each(
        (
          chunkJZLCHNYAInput211,
          chunkJZLCHNYAInput212,
          chunkJZLCHNYAInput213,
        ) => {
          let chunkJZLCHNYABinding911 = select(
              chunkJZLCHNYAInput213[chunkJZLCHNYAInput212],
            ),
            chunkJZLCHNYABinding912 = chunkJZLCHNYABinding911.attr("transform"),
            chunkJZLCHNYABinding913 = 0,
            chunkJZLCHNYABinding914 = 0;
          if (chunkJZLCHNYABinding912) {
            let chunkJZLCHNYABinding1081 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunkJZLCHNYABinding912);
            chunkJZLCHNYABinding1081 &&
              ((chunkJZLCHNYABinding913 = parseFloat(
                chunkJZLCHNYABinding1081[1],
              )),
              (chunkJZLCHNYABinding914 = parseFloat(
                chunkJZLCHNYABinding1081[2],
              )));
          }
          let chunkJZLCHNYABinding915 =
              chunkJZLCHNYABinding914 - chunkJZLCHNYABinding260 / 2,
            chunkJZLCHNYABinding916 = chunkJZLCHNYABinding261 + 10;
          (chunkJZLCHNYAInput212 === 0 || chunkJZLCHNYAInput212 === 1) &&
            (chunkJZLCHNYABinding916 = chunkJZLCHNYABinding913);
          chunkJZLCHNYABinding911.attr(
            "transform",
            `translate(${chunkJZLCHNYABinding916}, ${chunkJZLCHNYABinding915 + 20})`,
          );
        },
      ),
    chunkJZLCHNYABinding257 >
      chunkJZLCHNYABinding256 + chunkJZLCHNYABinding258 + 20)
  ) {
    let chunkJZLCHNYABinding1108 = chunkJZLCHNYABinding263.line(
      chunkJZLCHNYABinding261,
      chunkJZLCHNYABinding262 +
        chunkJZLCHNYABinding256 +
        chunkJZLCHNYABinding258 +
        20,
      chunkJZLCHNYABinding261 + chunkJZLCHNYABinding259,
      chunkJZLCHNYABinding262 +
        chunkJZLCHNYABinding256 +
        chunkJZLCHNYABinding258 +
        20,
      chunkJZLCHNYABinding264,
    );
    chunkJZLCHNYABinding255
      .insert(() => chunkJZLCHNYABinding1108)
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput30, chunkJZLCHNYABinding266),
    (chunkJZLCHNYAInput30.intersect = function (chunkJZLCHNYAInput405) {
      return $.rect(chunkJZLCHNYAInput30, chunkJZLCHNYAInput405);
    }),
    chunkJZLCHNYABinding255
  );
}
async function chunkJZLCHNYAHelper78(
  chunkJZLCHNYAInput149,
  chunkJZLCHNYAInput150,
  chunkJZLCHNYAInput151,
  chunkJZLCHNYAInput152 = "",
) {
  if (chunkJZLCHNYAInput150 === "") return 0;
  let chunkJZLCHNYABinding734 = chunkJZLCHNYAInput149
      .insert("g")
      .attr("class", "label")
      .attr("style", chunkJZLCHNYAInput152),
    chunkJZLCHNYABinding735 = b(),
    chunkJZLCHNYABinding736 = chunkJZLCHNYABinding735.htmlLabels ?? true,
    chunkJZLCHNYABinding737 = await chunkJA3XYJ7ZN(
      chunkJZLCHNYABinding734,
      R(chunkS3R3BYOJI(chunkJZLCHNYAInput150)),
      {
        width:
          chunkS3R3BYOJN(chunkJZLCHNYAInput150, chunkJZLCHNYABinding735) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunkJZLCHNYABinding736,
        style: chunkJZLCHNYAInput152,
      },
      chunkJZLCHNYABinding735,
    ),
    chunkJZLCHNYABinding738;
  if (chunkJZLCHNYABinding736) {
    let chunkJZLCHNYABinding1074 = chunkJZLCHNYABinding737.children[0],
      chunkJZLCHNYABinding1075 = select(chunkJZLCHNYABinding737);
    chunkJZLCHNYABinding738 = chunkJZLCHNYABinding1074.getBoundingClientRect();
    chunkJZLCHNYABinding1075.attr("width", chunkJZLCHNYABinding738.width);
    chunkJZLCHNYABinding1075.attr("height", chunkJZLCHNYABinding738.height);
  } else {
    let chunkJZLCHNYABinding1010 = chunkJZLCHNYABinding737.children[0];
    for (let chunkJZLCHNYABinding1065 of chunkJZLCHNYABinding1010.children) {
      chunkJZLCHNYABinding1065.textContent =
        chunkJZLCHNYABinding1065.textContent
          .replaceAll("&gt;", ">")
          .replaceAll("&lt;", "<");
      chunkJZLCHNYAInput152 &&
        chunkJZLCHNYABinding1065.setAttribute("style", chunkJZLCHNYAInput152);
    }
    chunkJZLCHNYABinding738 = chunkJZLCHNYABinding737.getBBox();
    chunkJZLCHNYABinding738.height += 6;
  }
  return (
    chunkJZLCHNYABinding734.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding738.width / 2},${-chunkJZLCHNYABinding738.height / 2 + chunkJZLCHNYAInput151})`,
    ),
    chunkJZLCHNYABinding738.height
  );
}
async function chunkJZLCHNYAHelper79(
  chunkJZLCHNYAInput21,
  chunkJZLCHNYAInput22,
  { config },
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput22);
  chunkJZLCHNYAInput22.labelStyle = labelStyles || "";
  let chunkJZLCHNYABinding218 = chunkJZLCHNYAInput22.width;
  chunkJZLCHNYAInput22.width = (chunkJZLCHNYAInput22.width ?? 200) - 10;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput21,
      chunkJZLCHNYAInput22,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput22),
    ),
    chunkJZLCHNYABinding219 = chunkJZLCHNYAInput22.padding || 10,
    chunkJZLCHNYABinding220 = "",
    chunkJZLCHNYABinding221;
  "ticket" in chunkJZLCHNYAInput22 &&
    chunkJZLCHNYAInput22.ticket &&
    config?.kanban?.ticketBaseUrl &&
    ((chunkJZLCHNYABinding220 = config?.kanban?.ticketBaseUrl.replace(
      "#TICKET#",
      chunkJZLCHNYAInput22.ticket,
    )),
    (chunkJZLCHNYABinding221 = shapeSvg
      .insert("svg:a", ":first-child")
      .attr("class", "kanban-ticket-link")
      .attr("xlink:href", chunkJZLCHNYABinding220)
      .attr("target", "_blank")));
  let chunkJZLCHNYABinding222 = {
      useHtmlLabels: chunkJZLCHNYAInput22.useHtmlLabels,
      labelStyle: chunkJZLCHNYAInput22.labelStyle || "",
      width: chunkJZLCHNYAInput22.width,
      img: chunkJZLCHNYAInput22.img,
      padding: chunkJZLCHNYAInput22.padding || 8,
      centerLabel: false,
    },
    _label,
    _bbox;
  chunkJZLCHNYABinding221
    ? ({ label: _label, bbox: _bbox } = await chunkJZLCHNYABinding1(
        chunkJZLCHNYABinding221,
        ("ticket" in chunkJZLCHNYAInput22 && chunkJZLCHNYAInput22.ticket) || "",
        chunkJZLCHNYABinding222,
      ))
    : ({ label: _label, bbox: _bbox } = await chunkJZLCHNYABinding1(
        shapeSvg,
        ("ticket" in chunkJZLCHNYAInput22 && chunkJZLCHNYAInput22.ticket) || "",
        chunkJZLCHNYABinding222,
      ));
  let { label: __label, bbox: __bbox } = await chunkJZLCHNYABinding1(
    shapeSvg,
    ("assigned" in chunkJZLCHNYAInput22 && chunkJZLCHNYAInput22.assigned) || "",
    chunkJZLCHNYABinding222,
  );
  chunkJZLCHNYAInput22.width = chunkJZLCHNYABinding218;
  let chunkJZLCHNYABinding223 = chunkJZLCHNYAInput22?.width || 0,
    chunkJZLCHNYABinding224 = Math.max(_bbox.height, __bbox.height) / 2,
    chunkJZLCHNYABinding225 =
      Math.max(bbox.height + 20, chunkJZLCHNYAInput22?.height || 0) +
      chunkJZLCHNYABinding224,
    chunkJZLCHNYABinding226 = -chunkJZLCHNYABinding223 / 2,
    chunkJZLCHNYABinding227 = -chunkJZLCHNYABinding225 / 2;
  label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYABinding219 - chunkJZLCHNYABinding223 / 2) +
      ", " +
      (-chunkJZLCHNYABinding224 - bbox.height / 2) +
      ")",
  );
  _label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYABinding219 - chunkJZLCHNYABinding223 / 2) +
      ", " +
      (-chunkJZLCHNYABinding224 + bbox.height / 2) +
      ")",
  );
  __label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYABinding219 +
        chunkJZLCHNYABinding223 / 2 -
        __bbox.width -
        20) +
      ", " +
      (-chunkJZLCHNYABinding224 + bbox.height / 2) +
      ")",
  );
  let chunkJZLCHNYABinding228,
    { rx, ry } = chunkJZLCHNYAInput22,
    { cssStyles } = chunkJZLCHNYAInput22;
  if (chunkJZLCHNYAInput22.look === "handDrawn") {
    let chunkJZLCHNYABinding1004 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1005 = o(chunkJZLCHNYAInput22, {}),
      chunkJZLCHNYABinding1006 =
        rx || ry
          ? chunkJZLCHNYABinding1004.path(
              chunkJZLCHNYABinding4(
                chunkJZLCHNYABinding226,
                chunkJZLCHNYABinding227,
                chunkJZLCHNYABinding223,
                chunkJZLCHNYABinding225,
                rx || 0,
              ),
              chunkJZLCHNYABinding1005,
            )
          : chunkJZLCHNYABinding1004.rectangle(
              chunkJZLCHNYABinding226,
              chunkJZLCHNYABinding227,
              chunkJZLCHNYABinding223,
              chunkJZLCHNYABinding225,
              chunkJZLCHNYABinding1005,
            );
    chunkJZLCHNYABinding228 = shapeSvg.insert(
      () => chunkJZLCHNYABinding1006,
      ":first-child",
    );
    chunkJZLCHNYABinding228
      .attr("class", "basic label-container")
      .attr("style", cssStyles || null);
  } else {
    chunkJZLCHNYABinding228 = shapeSvg.insert("rect", ":first-child");
    chunkJZLCHNYABinding228
      .attr("class", "basic label-container __APA__")
      .attr("style", nodeStyles)
      .attr("rx", rx ?? 5)
      .attr("ry", ry ?? 5)
      .attr("x", chunkJZLCHNYABinding226)
      .attr("y", chunkJZLCHNYABinding227)
      .attr("width", chunkJZLCHNYABinding223)
      .attr("height", chunkJZLCHNYABinding225);
    let chunkJZLCHNYABinding840 =
      "priority" in chunkJZLCHNYAInput22 && chunkJZLCHNYAInput22.priority;
    if (chunkJZLCHNYABinding840) {
      let chunkJZLCHNYABinding962 = shapeSvg.append("line"),
        chunkJZLCHNYABinding963 = chunkJZLCHNYABinding226 + 2,
        chunkJZLCHNYABinding964 =
          chunkJZLCHNYABinding227 + Math.floor((rx ?? 0) / 2),
        chunkJZLCHNYABinding965 =
          chunkJZLCHNYABinding227 +
          chunkJZLCHNYABinding225 -
          Math.floor((rx ?? 0) / 2);
      chunkJZLCHNYABinding962
        .attr("x1", chunkJZLCHNYABinding963)
        .attr("y1", chunkJZLCHNYABinding964)
        .attr("x2", chunkJZLCHNYABinding963)
        .attr("y2", chunkJZLCHNYABinding965)
        .attr("stroke-width", "4")
        .attr("stroke", chunkJZLCHNYABinding22(chunkJZLCHNYABinding840));
    }
  }
  return (
    chunkJZLCHNYAD(chunkJZLCHNYAInput22, chunkJZLCHNYABinding228),
    (chunkJZLCHNYAInput22.height = chunkJZLCHNYABinding225),
    (chunkJZLCHNYAInput22.intersect = function (chunkJZLCHNYAInput406) {
      return $.rect(chunkJZLCHNYAInput22, chunkJZLCHNYAInput406);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper80(
  chunkJZLCHNYAInput41,
  chunkJZLCHNYAInput42,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput42);
  chunkJZLCHNYAInput42.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput41,
      chunkJZLCHNYAInput42,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput42),
    ),
    chunkJZLCHNYABinding320 = bbox.width + 10 * halfPadding,
    chunkJZLCHNYABinding321 = bbox.height + 8 * halfPadding,
    chunkJZLCHNYABinding322 = 0.15 * chunkJZLCHNYABinding320,
    { cssStyles } = chunkJZLCHNYAInput42,
    chunkJZLCHNYABinding323 = bbox.width + 20,
    chunkJZLCHNYABinding324 = bbox.height + 20,
    chunkJZLCHNYABinding325 = Math.max(
      chunkJZLCHNYABinding320,
      chunkJZLCHNYABinding323,
    ),
    chunkJZLCHNYABinding326 = Math.max(
      chunkJZLCHNYABinding321,
      chunkJZLCHNYABinding324,
    );
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  let chunkJZLCHNYABinding327,
    chunkJZLCHNYABinding328 = `M0 0 
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.25},${-1 * chunkJZLCHNYABinding326 * 0.1}
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.25},0
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.25},0
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.25},${chunkJZLCHNYABinding326 * 0.1}

    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.15},${chunkJZLCHNYABinding326 * 0.33}
    a${chunkJZLCHNYABinding322 * 0.8},${chunkJZLCHNYABinding322 * 0.8} 1 0,0 0,${chunkJZLCHNYABinding326 * 0.34}
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.15},${chunkJZLCHNYABinding326 * 0.33}

    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.25},${chunkJZLCHNYABinding326 * 0.15}
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.25},0
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.25},0
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.25},${-1 * chunkJZLCHNYABinding326 * 0.15}

    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${-1 * chunkJZLCHNYABinding325 * 0.1},${-1 * chunkJZLCHNYABinding326 * 0.33}
    a${chunkJZLCHNYABinding322 * 0.8},${chunkJZLCHNYABinding322 * 0.8} 1 0,0 0,${-1 * chunkJZLCHNYABinding326 * 0.34}
    a${chunkJZLCHNYABinding322},${chunkJZLCHNYABinding322} 1 0,0 ${chunkJZLCHNYABinding325 * 0.1},${-1 * chunkJZLCHNYABinding326 * 0.33}
  H0 V0 Z`;
  if (chunkJZLCHNYAInput42.look === "handDrawn") {
    let chunkJZLCHNYABinding1058 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1059 = o(chunkJZLCHNYAInput42, {}),
      chunkJZLCHNYABinding1060 = chunkJZLCHNYABinding1058.path(
        chunkJZLCHNYABinding328,
        chunkJZLCHNYABinding1059,
      );
    chunkJZLCHNYABinding327 = shapeSvg.insert(
      () => chunkJZLCHNYABinding1060,
      ":first-child",
    );
    chunkJZLCHNYABinding327
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles));
  } else
    chunkJZLCHNYABinding327 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYABinding328);
  return (
    chunkJZLCHNYABinding327.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding325 / 2}, ${-chunkJZLCHNYABinding326 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput42, chunkJZLCHNYABinding327),
    (chunkJZLCHNYAInput42.calcIntersect = function (
      chunkJZLCHNYAInput384,
      chunkJZLCHNYAInput385,
    ) {
      return $.rect(chunkJZLCHNYAInput384, chunkJZLCHNYAInput385);
    }),
    (chunkJZLCHNYAInput42.intersect = function (chunkJZLCHNYAInput345) {
      return (
        logger.info(
          "Bang intersect",
          chunkJZLCHNYAInput42,
          chunkJZLCHNYAInput345,
        ),
        $.rect(chunkJZLCHNYAInput42, chunkJZLCHNYAInput345)
      );
    }),
    shapeSvg
  );
}
async function _t(chunkJZLCHNYAInput51, chunkJZLCHNYAInput52) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput52);
  chunkJZLCHNYAInput52.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput51,
      chunkJZLCHNYAInput52,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput52),
    ),
    chunkJZLCHNYABinding386 = bbox.width + 2 * halfPadding,
    chunkJZLCHNYABinding387 = bbox.height + 2 * halfPadding,
    chunkJZLCHNYABinding388 = 0.15 * chunkJZLCHNYABinding386,
    chunkJZLCHNYABinding389 = 0.25 * chunkJZLCHNYABinding386,
    chunkJZLCHNYABinding390 = 0.35 * chunkJZLCHNYABinding386,
    chunkJZLCHNYABinding391 = 0.2 * chunkJZLCHNYABinding386,
    { cssStyles } = chunkJZLCHNYAInput52,
    chunkJZLCHNYABinding392,
    chunkJZLCHNYABinding393 = `M0 0 
    a${chunkJZLCHNYABinding388},${chunkJZLCHNYABinding388} 0 0,1 ${chunkJZLCHNYABinding386 * 0.25},${-1 * chunkJZLCHNYABinding386 * 0.1}
    a${chunkJZLCHNYABinding390},${chunkJZLCHNYABinding390} 1 0,1 ${chunkJZLCHNYABinding386 * 0.4},${-1 * chunkJZLCHNYABinding386 * 0.1}
    a${chunkJZLCHNYABinding389},${chunkJZLCHNYABinding389} 1 0,1 ${chunkJZLCHNYABinding386 * 0.35},${chunkJZLCHNYABinding386 * 0.2}

    a${chunkJZLCHNYABinding388},${chunkJZLCHNYABinding388} 1 0,1 ${chunkJZLCHNYABinding386 * 0.15},${chunkJZLCHNYABinding387 * 0.35}
    a${chunkJZLCHNYABinding391},${chunkJZLCHNYABinding391} 1 0,1 ${-1 * chunkJZLCHNYABinding386 * 0.15},${chunkJZLCHNYABinding387 * 0.65}

    a${chunkJZLCHNYABinding389},${chunkJZLCHNYABinding388} 1 0,1 ${-1 * chunkJZLCHNYABinding386 * 0.25},${chunkJZLCHNYABinding386 * 0.15}
    a${chunkJZLCHNYABinding390},${chunkJZLCHNYABinding390} 1 0,1 ${-1 * chunkJZLCHNYABinding386 * 0.5},0
    a${chunkJZLCHNYABinding388},${chunkJZLCHNYABinding388} 1 0,1 ${-1 * chunkJZLCHNYABinding386 * 0.25},${-1 * chunkJZLCHNYABinding386 * 0.15}

    a${chunkJZLCHNYABinding388},${chunkJZLCHNYABinding388} 1 0,1 ${-1 * chunkJZLCHNYABinding386 * 0.1},${-1 * chunkJZLCHNYABinding387 * 0.35}
    a${chunkJZLCHNYABinding391},${chunkJZLCHNYABinding391} 1 0,1 ${chunkJZLCHNYABinding386 * 0.1},${-1 * chunkJZLCHNYABinding387 * 0.65}
  H0 V0 Z`;
  if (chunkJZLCHNYAInput52.look === "handDrawn") {
    let chunkJZLCHNYABinding1061 = rough.svg(shapeSvg),
      chunkJZLCHNYABinding1062 = o(chunkJZLCHNYAInput52, {}),
      chunkJZLCHNYABinding1063 = chunkJZLCHNYABinding1061.path(
        chunkJZLCHNYABinding393,
        chunkJZLCHNYABinding1062,
      );
    chunkJZLCHNYABinding392 = shapeSvg.insert(
      () => chunkJZLCHNYABinding1063,
      ":first-child",
    );
    chunkJZLCHNYABinding392
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJL(cssStyles));
  } else
    chunkJZLCHNYABinding392 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYABinding393);
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    chunkJZLCHNYABinding392.attr(
      "transform",
      `translate(${-chunkJZLCHNYABinding386 / 2}, ${-chunkJZLCHNYABinding387 / 2})`,
    ),
    chunkJZLCHNYAD(chunkJZLCHNYAInput52, chunkJZLCHNYABinding392),
    (chunkJZLCHNYAInput52.calcIntersect = function (
      chunkJZLCHNYAInput386,
      chunkJZLCHNYAInput387,
    ) {
      return $.rect(chunkJZLCHNYAInput386, chunkJZLCHNYAInput387);
    }),
    (chunkJZLCHNYAInput52.intersect = function (chunkJZLCHNYAInput344) {
      return (
        logger.info(
          "Cloud intersect",
          chunkJZLCHNYAInput52,
          chunkJZLCHNYAInput344,
        ),
        $.rect(chunkJZLCHNYAInput52, chunkJZLCHNYAInput344)
      );
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper81(
  chunkJZLCHNYAInput126,
  chunkJZLCHNYAInput127,
) {
  let { labelStyles, nodeStyles } = a(chunkJZLCHNYAInput127);
  chunkJZLCHNYAInput127.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAC(
      chunkJZLCHNYAInput126,
      chunkJZLCHNYAInput127,
      chunkJZLCHNYABinding2(chunkJZLCHNYAInput127),
    ),
    chunkJZLCHNYABinding678 = bbox.width + 8 * halfPadding,
    chunkJZLCHNYABinding679 = bbox.height + 2 * halfPadding,
    chunkJZLCHNYABinding680 = `
    M${-chunkJZLCHNYABinding678 / 2} ${chunkJZLCHNYABinding679 / 2 - 5}
    v${-chunkJZLCHNYABinding679 + 10}
    q0,-5 5,-5
    h${chunkJZLCHNYABinding678 - 10}
    q5,0 5,5
    v${chunkJZLCHNYABinding679 - 10}
    q0,5 -5,5
    h${-chunkJZLCHNYABinding678 + 10}
    q-5,0 -5,-5
    Z
  `,
    chunkJZLCHNYABinding681 = shapeSvg
      .append("path")
      .attr("id", "node-" + chunkJZLCHNYAInput127.id)
      .attr("class", "node-bkg node-" + chunkJZLCHNYAInput127.type)
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYABinding680);
  return (
    shapeSvg
      .append("line")
      .attr("class", "node-line-")
      .attr("x1", -chunkJZLCHNYABinding678 / 2)
      .attr("y1", chunkJZLCHNYABinding679 / 2)
      .attr("x2", chunkJZLCHNYABinding678 / 2)
      .attr("y2", chunkJZLCHNYABinding679 / 2),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    shapeSvg.append(() => label.node()),
    chunkJZLCHNYAD(chunkJZLCHNYAInput127, chunkJZLCHNYABinding681),
    (chunkJZLCHNYAInput127.calcIntersect = function (
      chunkJZLCHNYAInput388,
      chunkJZLCHNYAInput389,
    ) {
      return $.rect(chunkJZLCHNYAInput388, chunkJZLCHNYAInput389);
    }),
    (chunkJZLCHNYAInput127.intersect = function (chunkJZLCHNYAInput407) {
      return $.rect(chunkJZLCHNYAInput127, chunkJZLCHNYAInput407);
    }),
    shapeSvg
  );
}
async function chunkJZLCHNYAHelper82(
  chunkJZLCHNYAInput346,
  chunkJZLCHNYAInput347,
) {
  return chunkJZLCHNYAHelper18(chunkJZLCHNYAInput346, chunkJZLCHNYAInput347, {
    padding: chunkJZLCHNYAInput347.padding ?? 0,
  });
}
function chunkJZLCHNYAS(chunkJZLCHNYAInput415) {
  return chunkJZLCHNYAInput415 in chunkJZLCHNYABinding24;
}
async function chunkJZLCHNYAO(
  chunkJZLCHNYAInput183,
  chunkJZLCHNYAInput184,
  chunkJZLCHNYAInput185,
) {
  let chunkJZLCHNYABinding803, chunkJZLCHNYABinding804;
  chunkJZLCHNYAInput184.shape === "rect" &&
    (chunkJZLCHNYAInput184.rx && chunkJZLCHNYAInput184.ry
      ? (chunkJZLCHNYAInput184.shape = "roundedRect")
      : (chunkJZLCHNYAInput184.shape = "squareRect"));
  let chunkJZLCHNYABinding805 = chunkJZLCHNYAInput184.shape
    ? chunkJZLCHNYABinding24[chunkJZLCHNYAInput184.shape]
    : undefined;
  if (!chunkJZLCHNYABinding805)
    throw Error(
      `No such shape: ${chunkJZLCHNYAInput184.shape}. Please check your syntax.`,
    );
  if (chunkJZLCHNYAInput184.link) {
    let chunkJZLCHNYABinding994;
    chunkJZLCHNYAInput185.config.securityLevel === "sandbox"
      ? (chunkJZLCHNYABinding994 = "_top")
      : chunkJZLCHNYAInput184.linkTarget &&
        (chunkJZLCHNYABinding994 =
          chunkJZLCHNYAInput184.linkTarget || "_blank");
    chunkJZLCHNYABinding803 = chunkJZLCHNYAInput183
      .insert("svg:a")
      .attr("xlink:href", chunkJZLCHNYAInput184.link)
      .attr("target", chunkJZLCHNYABinding994 ?? null);
    chunkJZLCHNYABinding804 = await chunkJZLCHNYABinding805(
      chunkJZLCHNYABinding803,
      chunkJZLCHNYAInput184,
      chunkJZLCHNYAInput185,
    );
  } else {
    chunkJZLCHNYABinding804 = await chunkJZLCHNYABinding805(
      chunkJZLCHNYAInput183,
      chunkJZLCHNYAInput184,
      chunkJZLCHNYAInput185,
    );
    chunkJZLCHNYABinding803 = chunkJZLCHNYABinding804;
  }
  return (
    chunkJZLCHNYAInput184.tooltip &&
      chunkJZLCHNYABinding804.attr("title", chunkJZLCHNYAInput184.tooltip),
    chunkJZLCHNYABinding25.set(
      chunkJZLCHNYAInput184.id,
      chunkJZLCHNYABinding803,
    ),
    chunkJZLCHNYAInput184.haveCallback &&
      chunkJZLCHNYABinding803.attr(
        "class",
        chunkJZLCHNYABinding803.attr("class") + " clickable",
      ),
    chunkJZLCHNYABinding803
  );
}
var chunkJZLCHNYAC,
  chunkJZLCHNYABinding1,
  chunkJZLCHNYAD,
  chunkJZLCHNYABinding2,
  chunkJZLCHNYABinding3,
  chunkJZLCHNYAR,
  chunkJZLCHNYABinding4,
  chunkJZLCHNYABinding5,
  chunkJZLCHNYABinding6,
  chunkJZLCHNYABinding7,
  chunkJZLCHNYAA,
  chunkJZLCHNYAT,
  chunkJZLCHNYABinding8,
  chunkJZLCHNYABinding9,
  chunkJZLCHNYABinding10,
  chunkJZLCHNYABinding11,
  $,
  chunkJZLCHNYABinding12,
  chunkJZLCHNYABinding13,
  chunkJZLCHNYABinding14,
  chunkJZLCHNYABinding15,
  chunkJZLCHNYABinding16,
  chunkJZLCHNYABinding17,
  chunkJZLCHNYABinding18,
  chunkJZLCHNYABinding19,
  chunkJZLCHNYABinding20,
  chunkJZLCHNYABinding21,
  chunkJZLCHNYABinding22,
  chunkJZLCHNYABinding23,
  chunkJZLCHNYABinding24,
  chunkJZLCHNYABinding25,
  chunkJZLCHNYAU,
  chunkJZLCHNYAN,
  chunkJZLCHNYAL;
export const chunkJZLCHNYAI = esmInit(() => {
  initSubGraphTitleMarginsChunk();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  rough();
  chunkJZLCHNYAC = defineFunctionName(
    async (
      chunkJZLCHNYAInput14,
      chunkJZLCHNYAInput15,
      chunkJZLCHNYAInput16,
    ) => {
      let chunkJZLCHNYABinding171,
        chunkJZLCHNYABinding172 =
          chunkJZLCHNYAInput15.useHtmlLabels || h(b()?.htmlLabels);
      chunkJZLCHNYABinding171 = chunkJZLCHNYAInput16 || "node default";
      let chunkJZLCHNYABinding173 = chunkJZLCHNYAInput14
          .insert("g")
          .attr("class", chunkJZLCHNYABinding171)
          .attr("id", chunkJZLCHNYAInput15.domId || chunkJZLCHNYAInput15.id),
        chunkJZLCHNYABinding174 = chunkJZLCHNYABinding173
          .insert("g")
          .attr("class", "label")
          .attr("style", chunkS3R3BYOJL(chunkJZLCHNYAInput15.labelStyle)),
        chunkJZLCHNYABinding175;
      chunkJZLCHNYABinding175 =
        chunkJZLCHNYAInput15.label === undefined
          ? ""
          : typeof chunkJZLCHNYAInput15.label == "string"
            ? chunkJZLCHNYAInput15.label
            : chunkJZLCHNYAInput15.label[0];
      let chunkJZLCHNYABinding176 = await chunkJA3XYJ7ZN(
          chunkJZLCHNYABinding174,
          L(chunkS3R3BYOJI(chunkJZLCHNYABinding175), b()),
          {
            useHtmlLabels: chunkJZLCHNYABinding172,
            width: chunkJZLCHNYAInput15.width || b().flowchart?.wrappingWidth,
            cssClasses: "markdown-node-label",
            style: chunkJZLCHNYAInput15.labelStyle,
            addSvgBackground:
              !!chunkJZLCHNYAInput15.icon || !!chunkJZLCHNYAInput15.img,
          },
        ),
        chunkJZLCHNYABinding177 = chunkJZLCHNYABinding176.getBBox(),
        chunkJZLCHNYABinding178 = (chunkJZLCHNYAInput15?.padding ?? 0) / 2;
      if (chunkJZLCHNYABinding172) {
        let chunkJZLCHNYABinding429 = chunkJZLCHNYABinding176.children[0],
          chunkJZLCHNYABinding430 = select(chunkJZLCHNYABinding176),
          chunkJZLCHNYABinding431 =
            chunkJZLCHNYABinding429.getElementsByTagName("img");
        if (chunkJZLCHNYABinding431) {
          let chunkJZLCHNYABinding498 =
            chunkJZLCHNYABinding175.replace(/<img[^>]*>/g, "").trim() === "";
          await Promise.all(
            [...chunkJZLCHNYABinding431].map(
              (item) =>
                new Promise((chunkJZLCHNYAInput128) => {
                  function chunkJZLCHNYAHelper83() {
                    if (
                      ((item.style.display = "flex"),
                      (item.style.flexDirection = "column"),
                      chunkJZLCHNYABinding498)
                    ) {
                      let [chunkJZLCHNYABinding924 = d.fontSize] =
                          chunkS3R3BYOJP(
                            b().fontSize
                              ? b().fontSize
                              : window.getComputedStyle(document.body).fontSize,
                          ),
                        chunkJZLCHNYABinding925 =
                          chunkJZLCHNYABinding924 * 5 + "px";
                      item.style.minWidth = chunkJZLCHNYABinding925;
                      item.style.maxWidth = chunkJZLCHNYABinding925;
                    } else item.style.width = "100%";
                    chunkJZLCHNYAInput128(item);
                  }
                  defineFunctionName(chunkJZLCHNYAHelper83, "setupImage");
                  setTimeout(() => {
                    item.complete && chunkJZLCHNYAHelper83();
                  });
                  item.addEventListener("error", chunkJZLCHNYAHelper83);
                  item.addEventListener("load", chunkJZLCHNYAHelper83);
                }),
            ),
          );
        }
        chunkJZLCHNYABinding177 =
          chunkJZLCHNYABinding429.getBoundingClientRect();
        chunkJZLCHNYABinding430.attr("width", chunkJZLCHNYABinding177.width);
        chunkJZLCHNYABinding430.attr("height", chunkJZLCHNYABinding177.height);
      }
      return (
        chunkJZLCHNYABinding172
          ? chunkJZLCHNYABinding174.attr(
              "transform",
              "translate(" +
                -chunkJZLCHNYABinding177.width / 2 +
                ", " +
                -chunkJZLCHNYABinding177.height / 2 +
                ")",
            )
          : chunkJZLCHNYABinding174.attr(
              "transform",
              "translate(0, " + -chunkJZLCHNYABinding177.height / 2 + ")",
            ),
        chunkJZLCHNYAInput15.centerLabel &&
          chunkJZLCHNYABinding174.attr(
            "transform",
            "translate(" +
              -chunkJZLCHNYABinding177.width / 2 +
              ", " +
              -chunkJZLCHNYABinding177.height / 2 +
              ")",
          ),
        chunkJZLCHNYABinding174.insert("rect", ":first-child"),
        {
          shapeSvg: chunkJZLCHNYABinding173,
          bbox: chunkJZLCHNYABinding177,
          halfPadding: chunkJZLCHNYABinding178,
          label: chunkJZLCHNYABinding174,
        }
      );
    },
    "labelHelper",
  );
  chunkJZLCHNYABinding1 = defineFunctionName(
    async (
      chunkJZLCHNYAInput75,
      chunkJZLCHNYAInput76,
      chunkJZLCHNYAInput77,
    ) => {
      let chunkJZLCHNYABinding478 =
          chunkJZLCHNYAInput77.useHtmlLabels || h(b()?.flowchart?.htmlLabels),
        chunkJZLCHNYABinding479 = chunkJZLCHNYAInput75
          .insert("g")
          .attr("class", "label")
          .attr("style", chunkJZLCHNYAInput77.labelStyle || ""),
        chunkJZLCHNYABinding480 = await chunkJA3XYJ7ZN(
          chunkJZLCHNYABinding479,
          L(chunkS3R3BYOJI(chunkJZLCHNYAInput76), b()),
          {
            useHtmlLabels: chunkJZLCHNYABinding478,
            width: chunkJZLCHNYAInput77.width || b()?.flowchart?.wrappingWidth,
            style: chunkJZLCHNYAInput77.labelStyle,
            addSvgBackground:
              !!chunkJZLCHNYAInput77.icon || !!chunkJZLCHNYAInput77.img,
          },
        ),
        chunkJZLCHNYABinding481 = chunkJZLCHNYABinding480.getBBox(),
        chunkJZLCHNYABinding482 = chunkJZLCHNYAInput77.padding / 2;
      if (h(b()?.flowchart?.htmlLabels)) {
        let chunkJZLCHNYABinding1050 = chunkJZLCHNYABinding480.children[0],
          chunkJZLCHNYABinding1051 = select(chunkJZLCHNYABinding480);
        chunkJZLCHNYABinding481 =
          chunkJZLCHNYABinding1050.getBoundingClientRect();
        chunkJZLCHNYABinding1051.attr("width", chunkJZLCHNYABinding481.width);
        chunkJZLCHNYABinding1051.attr("height", chunkJZLCHNYABinding481.height);
      }
      return (
        chunkJZLCHNYABinding478
          ? chunkJZLCHNYABinding479.attr(
              "transform",
              "translate(" +
                -chunkJZLCHNYABinding481.width / 2 +
                ", " +
                -chunkJZLCHNYABinding481.height / 2 +
                ")",
            )
          : chunkJZLCHNYABinding479.attr(
              "transform",
              "translate(0, " + -chunkJZLCHNYABinding481.height / 2 + ")",
            ),
        chunkJZLCHNYAInput77.centerLabel &&
          chunkJZLCHNYABinding479.attr(
            "transform",
            "translate(" +
              -chunkJZLCHNYABinding481.width / 2 +
              ", " +
              -chunkJZLCHNYABinding481.height / 2 +
              ")",
          ),
        chunkJZLCHNYABinding479.insert("rect", ":first-child"),
        {
          shapeSvg: chunkJZLCHNYAInput75,
          bbox: chunkJZLCHNYABinding481,
          halfPadding: chunkJZLCHNYABinding482,
          label: chunkJZLCHNYABinding479,
        }
      );
    },
    "insertLabel",
  );
  chunkJZLCHNYAD = defineFunctionName(
    (chunkJZLCHNYAInput309, chunkJZLCHNYAInput310) => {
      let chunkJZLCHNYABinding1109 = chunkJZLCHNYAInput310.node().getBBox();
      chunkJZLCHNYAInput309.width = chunkJZLCHNYABinding1109.width;
      chunkJZLCHNYAInput309.height = chunkJZLCHNYABinding1109.height;
    },
    "updateNodeBounds",
  );
  chunkJZLCHNYABinding2 = defineFunctionName(
    (chunkJZLCHNYAInput301, chunkJZLCHNYAInput302) =>
      (chunkJZLCHNYAInput301.look === "handDrawn" ? "rough-node" : "node") +
      " " +
      chunkJZLCHNYAInput301.cssClasses +
      " " +
      (chunkJZLCHNYAInput302 || ""),
    "getNodeClasses",
  );
  defineFunctionName(chunkJZLCHNYAHelper1, "createPathFromPoints");
  defineFunctionName(chunkJZLCHNYAHelper2, "generateFullSineWavePoints");
  defineFunctionName(chunkJZLCHNYAHelper3, "generateCirclePoints");
  chunkJZLCHNYABinding3 = defineFunctionName(
    (chunkJZLCHNYAInput209, chunkJZLCHNYAInput210) => {
      var chunkJZLCHNYABinding883 = chunkJZLCHNYAInput209.x,
        chunkJZLCHNYABinding884 = chunkJZLCHNYAInput209.y,
        chunkJZLCHNYABinding885 =
          chunkJZLCHNYAInput210.x - chunkJZLCHNYABinding883,
        chunkJZLCHNYABinding886 =
          chunkJZLCHNYAInput210.y - chunkJZLCHNYABinding884,
        chunkJZLCHNYABinding887 = chunkJZLCHNYAInput209.width / 2,
        chunkJZLCHNYABinding888 = chunkJZLCHNYAInput209.height / 2,
        chunkJZLCHNYABinding889,
        chunkJZLCHNYABinding890;
      return (
        Math.abs(chunkJZLCHNYABinding886) * chunkJZLCHNYABinding887 >
        Math.abs(chunkJZLCHNYABinding885) * chunkJZLCHNYABinding888
          ? (chunkJZLCHNYABinding886 < 0 &&
              (chunkJZLCHNYABinding888 = -chunkJZLCHNYABinding888),
            (chunkJZLCHNYABinding889 =
              chunkJZLCHNYABinding886 === 0
                ? 0
                : (chunkJZLCHNYABinding888 * chunkJZLCHNYABinding885) /
                  chunkJZLCHNYABinding886),
            (chunkJZLCHNYABinding890 = chunkJZLCHNYABinding888))
          : (chunkJZLCHNYABinding885 < 0 &&
              (chunkJZLCHNYABinding887 = -chunkJZLCHNYABinding887),
            (chunkJZLCHNYABinding889 = chunkJZLCHNYABinding887),
            (chunkJZLCHNYABinding890 =
              chunkJZLCHNYABinding885 === 0
                ? 0
                : (chunkJZLCHNYABinding887 * chunkJZLCHNYABinding886) /
                  chunkJZLCHNYABinding885)),
        {
          x: chunkJZLCHNYABinding883 + chunkJZLCHNYABinding889,
          y: chunkJZLCHNYABinding884 + chunkJZLCHNYABinding890,
        }
      );
    },
    "intersectRect",
  );
  defineFunctionName(chunkJZLCHNYAHelper4, "applyStyle");
  defineFunctionName(chunkJZLCHNYAHelper5, "addHtmlLabel");
  chunkJZLCHNYAR = defineFunctionName(
    async (
      chunkJZLCHNYAInput53,
      chunkJZLCHNYAInput54,
      chunkJZLCHNYAInput55,
      chunkJZLCHNYAInput56,
    ) => {
      let chunkJZLCHNYABinding394 = chunkJZLCHNYAInput53 || "";
      if (
        (typeof chunkJZLCHNYABinding394 == "object" &&
          (chunkJZLCHNYABinding394 = chunkJZLCHNYABinding394[0]),
        h(b().flowchart.htmlLabels))
      )
        return (
          (chunkJZLCHNYABinding394 = chunkJZLCHNYABinding394.replace(
            /\\n|\n/g,
            "<br />",
          )),
          logger.info("vertexText" + chunkJZLCHNYABinding394),
          await chunkJZLCHNYAHelper5({
            isNode: chunkJZLCHNYAInput56,
            label: chunkS3R3BYOJI(chunkJZLCHNYABinding394).replace(
              /fa[blrs]?:fa-[\w-]+/g,
              (chunkJZLCHNYAInput408) =>
                `<i class='${chunkJZLCHNYAInput408.replace(":", " ")}'></i>`,
            ),
            labelStyle:
              chunkJZLCHNYAInput54 &&
              chunkJZLCHNYAInput54.replace("fill:", "color:"),
          })
        );
      {
        let chunkJZLCHNYABinding676 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );
        chunkJZLCHNYABinding676.setAttribute(
          "style",
          chunkJZLCHNYAInput54.replace("color:", "fill:"),
        );
        let chunkJZLCHNYABinding677 = [];
        chunkJZLCHNYABinding677 =
          typeof chunkJZLCHNYABinding394 == "string"
            ? chunkJZLCHNYABinding394.split(/\\n|\n|<br\s*\/?>/gi)
            : Array.isArray(chunkJZLCHNYABinding394)
              ? chunkJZLCHNYABinding394
              : [];
        for (let chunkJZLCHNYABinding855 of chunkJZLCHNYABinding677) {
          let chunkJZLCHNYABinding859 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          chunkJZLCHNYABinding859.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          chunkJZLCHNYABinding859.setAttribute("dy", "1em");
          chunkJZLCHNYABinding859.setAttribute("x", "0");
          chunkJZLCHNYAInput55
            ? chunkJZLCHNYABinding859.setAttribute("class", "title-row")
            : chunkJZLCHNYABinding859.setAttribute("class", "row");
          chunkJZLCHNYABinding859.textContent = chunkJZLCHNYABinding855.trim();
          chunkJZLCHNYABinding676.appendChild(chunkJZLCHNYABinding859);
        }
        return chunkJZLCHNYABinding676;
      }
    },
    "createLabel",
  );
  chunkJZLCHNYABinding4 = defineFunctionName(
    (
      chunkJZLCHNYAInput175,
      chunkJZLCHNYAInput176,
      chunkJZLCHNYAInput177,
      chunkJZLCHNYAInput178,
      chunkJZLCHNYAInput179,
    ) =>
      [
        "M",
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput176,
        "H",
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput177 - chunkJZLCHNYAInput179,
        "A",
        chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput179,
        0,
        0,
        1,
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput177,
        chunkJZLCHNYAInput176 + chunkJZLCHNYAInput179,
        "V",
        chunkJZLCHNYAInput176 + chunkJZLCHNYAInput178 - chunkJZLCHNYAInput179,
        "A",
        chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput179,
        0,
        0,
        1,
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput177 - chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput176 + chunkJZLCHNYAInput178,
        "H",
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput179,
        "A",
        chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput179,
        0,
        0,
        1,
        chunkJZLCHNYAInput175,
        chunkJZLCHNYAInput176 + chunkJZLCHNYAInput178 - chunkJZLCHNYAInput179,
        "V",
        chunkJZLCHNYAInput176 + chunkJZLCHNYAInput179,
        "A",
        chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput179,
        0,
        0,
        1,
        chunkJZLCHNYAInput175 + chunkJZLCHNYAInput179,
        chunkJZLCHNYAInput176,
        "Z",
      ].join(" "),
    "createRoundedRectPathD",
  );
  chunkJZLCHNYABinding5 = defineFunctionName(
    async (chunkJZLCHNYAInput13, event) => {
      logger.info("Creating subgraph rect for ", event.id, event);
      let chunkJZLCHNYABinding159 = b(),
        { themeVariables, handDrawnSeed } = chunkJZLCHNYABinding159,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } = a(event),
        chunkJZLCHNYABinding160 = chunkJZLCHNYAInput13
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYABinding161 = h(
          chunkJZLCHNYABinding159.flowchart.htmlLabels,
        ),
        chunkJZLCHNYABinding162 = chunkJZLCHNYABinding160
          .insert("g")
          .attr("class", "cluster-label "),
        chunkJZLCHNYABinding163 = await chunkJA3XYJ7ZN(
          chunkJZLCHNYABinding162,
          event.label,
          {
            style: event.labelStyle,
            useHtmlLabels: chunkJZLCHNYABinding161,
            isNode: true,
          },
        ),
        chunkJZLCHNYABinding164 = chunkJZLCHNYABinding163.getBBox();
      if (h(chunkJZLCHNYABinding159.flowchart.htmlLabels)) {
        let chunkJZLCHNYABinding1052 = chunkJZLCHNYABinding163.children[0],
          chunkJZLCHNYABinding1053 = select(chunkJZLCHNYABinding163);
        chunkJZLCHNYABinding164 =
          chunkJZLCHNYABinding1052.getBoundingClientRect();
        chunkJZLCHNYABinding1053.attr("width", chunkJZLCHNYABinding164.width);
        chunkJZLCHNYABinding1053.attr("height", chunkJZLCHNYABinding164.height);
      }
      let chunkJZLCHNYABinding165 =
        event.width <= chunkJZLCHNYABinding164.width + event.padding
          ? chunkJZLCHNYABinding164.width + event.padding
          : event.width;
      event.width <= chunkJZLCHNYABinding164.width + event.padding
        ? (event.diff =
            (chunkJZLCHNYABinding165 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunkJZLCHNYABinding166 = event.height,
        chunkJZLCHNYABinding167 = event.x - chunkJZLCHNYABinding165 / 2,
        chunkJZLCHNYABinding168 = event.y - chunkJZLCHNYABinding166 / 2;
      logger.trace("Data ", event, JSON.stringify(event));
      let chunkJZLCHNYABinding169;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYABinding856 = rough.svg(chunkJZLCHNYABinding160),
          chunkJZLCHNYABinding857 = o(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 3,
            seed: handDrawnSeed,
          }),
          chunkJZLCHNYABinding858 = chunkJZLCHNYABinding856.path(
            chunkJZLCHNYABinding4(
              chunkJZLCHNYABinding167,
              chunkJZLCHNYABinding168,
              chunkJZLCHNYABinding165,
              chunkJZLCHNYABinding166,
              0,
            ),
            chunkJZLCHNYABinding857,
          );
        chunkJZLCHNYABinding169 = chunkJZLCHNYABinding160.insert(
          () => (
            logger.debug("Rough node insert CXC", chunkJZLCHNYABinding858),
            chunkJZLCHNYABinding858
          ),
          ":first-child",
        );
        chunkJZLCHNYABinding169
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunkJZLCHNYABinding169
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunkJZLCHNYABinding169 = chunkJZLCHNYABinding160.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYABinding169
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", chunkJZLCHNYABinding167)
          .attr("y", chunkJZLCHNYABinding168)
          .attr("width", chunkJZLCHNYABinding165)
          .attr("height", chunkJZLCHNYABinding166);
      }
      let { subGraphTitleTopMargin } = getSubGraphTitleMargins(
        chunkJZLCHNYABinding159,
      );
      if (
        (chunkJZLCHNYABinding162.attr(
          "transform",
          `translate(${event.x - chunkJZLCHNYABinding164.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunkJZLCHNYABinding1120 = chunkJZLCHNYABinding162.select("span");
        chunkJZLCHNYABinding1120 &&
          chunkJZLCHNYABinding1120.attr("style", labelStyles);
      }
      let chunkJZLCHNYABinding170 = chunkJZLCHNYABinding169.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = chunkJZLCHNYABinding170.width),
        (event.height = chunkJZLCHNYABinding170.height),
        (event.offsetY = chunkJZLCHNYABinding164.height - event.padding / 2),
        (event.intersect = function (chunkJZLCHNYAInput353) {
          return chunkJZLCHNYABinding3(event, chunkJZLCHNYAInput353);
        }),
        {
          cluster: chunkJZLCHNYABinding160,
          labelBBox: chunkJZLCHNYABinding164,
        }
      );
    },
    "rect",
  );
  chunkJZLCHNYABinding6 = {
    rect: chunkJZLCHNYABinding5,
    squareRect: chunkJZLCHNYABinding5,
    roundedWithTitle: defineFunctionName(async (chunkJZLCHNYAInput5, event) => {
      let chunkJZLCHNYABinding74 = b(),
        { themeVariables, handDrawnSeed } = chunkJZLCHNYABinding74,
        {
          altBackground,
          compositeBackground,
          compositeTitleBackground,
          nodeBorder,
        } = themeVariables,
        chunkJZLCHNYABinding75 = chunkJZLCHNYAInput5
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.id)
          .attr("data-id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYABinding76 = chunkJZLCHNYABinding75.insert(
          "g",
          ":first-child",
        ),
        chunkJZLCHNYABinding77 = chunkJZLCHNYABinding75
          .insert("g")
          .attr("class", "cluster-label"),
        chunkJZLCHNYABinding78 = chunkJZLCHNYABinding75.append("rect"),
        chunkJZLCHNYABinding79 = chunkJZLCHNYABinding77
          .node()
          .appendChild(
            await chunkJZLCHNYAR(
              event.label,
              event.labelStyle,
              undefined,
              true,
            ),
          ),
        chunkJZLCHNYABinding80 = chunkJZLCHNYABinding79.getBBox();
      if (h(chunkJZLCHNYABinding74.flowchart.htmlLabels)) {
        let chunkJZLCHNYABinding1041 = chunkJZLCHNYABinding79.children[0],
          chunkJZLCHNYABinding1042 = select(chunkJZLCHNYABinding79);
        chunkJZLCHNYABinding80 =
          chunkJZLCHNYABinding1041.getBoundingClientRect();
        chunkJZLCHNYABinding1042.attr("width", chunkJZLCHNYABinding80.width);
        chunkJZLCHNYABinding1042.attr("height", chunkJZLCHNYABinding80.height);
      }
      let chunkJZLCHNYABinding81 = 0 * event.padding,
        chunkJZLCHNYABinding82 = chunkJZLCHNYABinding81 / 2,
        chunkJZLCHNYABinding83 =
          (event.width <= chunkJZLCHNYABinding80.width + event.padding
            ? chunkJZLCHNYABinding80.width + event.padding
            : event.width) + chunkJZLCHNYABinding81;
      event.width <= chunkJZLCHNYABinding80.width + event.padding
        ? (event.diff =
            (chunkJZLCHNYABinding83 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunkJZLCHNYABinding84 = event.height + chunkJZLCHNYABinding81,
        chunkJZLCHNYABinding85 =
          event.height +
          chunkJZLCHNYABinding81 -
          chunkJZLCHNYABinding80.height -
          6,
        chunkJZLCHNYABinding86 = event.x - chunkJZLCHNYABinding83 / 2,
        chunkJZLCHNYABinding87 = event.y - chunkJZLCHNYABinding84 / 2;
      event.width = chunkJZLCHNYABinding83;
      let chunkJZLCHNYABinding88 =
          event.y -
          event.height / 2 -
          chunkJZLCHNYABinding82 +
          chunkJZLCHNYABinding80.height +
          2,
        chunkJZLCHNYABinding89;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYABinding794 = event.cssClasses.includes(
            "statediagram-cluster-alt",
          ),
          chunkJZLCHNYABinding795 = rough.svg(chunkJZLCHNYABinding75),
          chunkJZLCHNYABinding796 =
            event.rx || event.ry
              ? chunkJZLCHNYABinding795.path(
                  chunkJZLCHNYABinding4(
                    chunkJZLCHNYABinding86,
                    chunkJZLCHNYABinding87,
                    chunkJZLCHNYABinding83,
                    chunkJZLCHNYABinding84,
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
              : chunkJZLCHNYABinding795.rectangle(
                  chunkJZLCHNYABinding86,
                  chunkJZLCHNYABinding87,
                  chunkJZLCHNYABinding83,
                  chunkJZLCHNYABinding84,
                  {
                    seed: handDrawnSeed,
                  },
                );
        chunkJZLCHNYABinding89 = chunkJZLCHNYABinding75.insert(
          () => chunkJZLCHNYABinding796,
          ":first-child",
        );
        let chunkJZLCHNYABinding797 = chunkJZLCHNYABinding795.rectangle(
          chunkJZLCHNYABinding86,
          chunkJZLCHNYABinding88,
          chunkJZLCHNYABinding83,
          chunkJZLCHNYABinding85,
          {
            fill: chunkJZLCHNYABinding794 ? altBackground : compositeBackground,
            fillStyle: chunkJZLCHNYABinding794 ? "hachure" : "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed,
          },
        );
        chunkJZLCHNYABinding89 = chunkJZLCHNYABinding75.insert(
          () => chunkJZLCHNYABinding796,
          ":first-child",
        );
        chunkJZLCHNYABinding78 = chunkJZLCHNYABinding75.insert(
          () => chunkJZLCHNYABinding797,
        );
      } else {
        chunkJZLCHNYABinding89 = chunkJZLCHNYABinding76.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYABinding89
          .attr("class", "outer")
          .attr("x", chunkJZLCHNYABinding86)
          .attr("y", chunkJZLCHNYABinding87)
          .attr("width", chunkJZLCHNYABinding83)
          .attr("height", chunkJZLCHNYABinding84)
          .attr("data-look", event.look);
        chunkJZLCHNYABinding78
          .attr("class", "inner")
          .attr("x", chunkJZLCHNYABinding86)
          .attr("y", chunkJZLCHNYABinding88)
          .attr("width", chunkJZLCHNYABinding83)
          .attr("height", chunkJZLCHNYABinding85);
      }
      return (
        chunkJZLCHNYABinding77.attr(
          "transform",
          `translate(${event.x - chunkJZLCHNYABinding80.width / 2}, ${chunkJZLCHNYABinding87 + 1 - (h(chunkJZLCHNYABinding74.flowchart.htmlLabels) ? 0 : 3)})`,
        ),
        (event.height = chunkJZLCHNYABinding89.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = chunkJZLCHNYABinding80.height - event.padding / 2),
        (event.labelBBox = chunkJZLCHNYABinding80),
        (event.intersect = function (chunkJZLCHNYAInput349) {
          return chunkJZLCHNYABinding3(event, chunkJZLCHNYAInput349);
        }),
        {
          cluster: chunkJZLCHNYABinding75,
          labelBBox: chunkJZLCHNYABinding80,
        }
      );
    }, "roundedWithTitle"),
    noteGroup: defineFunctionName(
      (chunkJZLCHNYAInput181, chunkJZLCHNYAInput182) => {
        let chunkJZLCHNYABinding798 = chunkJZLCHNYAInput181
            .insert("g")
            .attr("class", "note-cluster")
            .attr("id", chunkJZLCHNYAInput182.id),
          chunkJZLCHNYABinding799 = chunkJZLCHNYABinding798.insert(
            "rect",
            ":first-child",
          ),
          chunkJZLCHNYABinding800 = 0 * chunkJZLCHNYAInput182.padding,
          chunkJZLCHNYABinding801 = chunkJZLCHNYABinding800 / 2;
        chunkJZLCHNYABinding799
          .attr("rx", chunkJZLCHNYAInput182.rx)
          .attr("ry", chunkJZLCHNYAInput182.ry)
          .attr(
            "x",
            chunkJZLCHNYAInput182.x -
              chunkJZLCHNYAInput182.width / 2 -
              chunkJZLCHNYABinding801,
          )
          .attr(
            "y",
            chunkJZLCHNYAInput182.y -
              chunkJZLCHNYAInput182.height / 2 -
              chunkJZLCHNYABinding801,
          )
          .attr("width", chunkJZLCHNYAInput182.width + chunkJZLCHNYABinding800)
          .attr(
            "height",
            chunkJZLCHNYAInput182.height + chunkJZLCHNYABinding800,
          )
          .attr("fill", "none");
        let chunkJZLCHNYABinding802 = chunkJZLCHNYABinding799.node().getBBox();
        return (
          (chunkJZLCHNYAInput182.width = chunkJZLCHNYABinding802.width),
          (chunkJZLCHNYAInput182.height = chunkJZLCHNYABinding802.height),
          (chunkJZLCHNYAInput182.intersect = function (chunkJZLCHNYAInput350) {
            return chunkJZLCHNYABinding3(
              chunkJZLCHNYAInput182,
              chunkJZLCHNYAInput350,
            );
          }),
          {
            cluster: chunkJZLCHNYABinding798,
            labelBBox: {
              width: 0,
              height: 0,
            },
          }
        );
      },
      "noteGroup",
    ),
    divider: defineFunctionName((chunkJZLCHNYAInput66, event) => {
      let { themeVariables, handDrawnSeed } = b(),
        { nodeBorder } = themeVariables,
        chunkJZLCHNYABinding432 = chunkJZLCHNYAInput66
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYABinding433 = chunkJZLCHNYABinding432.insert(
          "g",
          ":first-child",
        ),
        chunkJZLCHNYABinding434 = 0 * event.padding,
        chunkJZLCHNYABinding435 = event.width + chunkJZLCHNYABinding434;
      event.diff = -event.padding;
      let chunkJZLCHNYABinding436 = event.height + chunkJZLCHNYABinding434,
        chunkJZLCHNYABinding437 = event.x - chunkJZLCHNYABinding435 / 2,
        chunkJZLCHNYABinding438 = event.y - chunkJZLCHNYABinding436 / 2;
      event.width = chunkJZLCHNYABinding435;
      let chunkJZLCHNYABinding439;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYABinding993 = rough
          .svg(chunkJZLCHNYABinding432)
          .rectangle(
            chunkJZLCHNYABinding437,
            chunkJZLCHNYABinding438,
            chunkJZLCHNYABinding435,
            chunkJZLCHNYABinding436,
            {
              fill: "lightgrey",
              roughness: 0.5,
              strokeLineDash: [5],
              stroke: nodeBorder,
              seed: handDrawnSeed,
            },
          );
        chunkJZLCHNYABinding439 = chunkJZLCHNYABinding432.insert(
          () => chunkJZLCHNYABinding993,
          ":first-child",
        );
      } else {
        chunkJZLCHNYABinding439 = chunkJZLCHNYABinding433.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYABinding439
          .attr("class", "divider")
          .attr("x", chunkJZLCHNYABinding437)
          .attr("y", chunkJZLCHNYABinding438)
          .attr("width", chunkJZLCHNYABinding435)
          .attr("height", chunkJZLCHNYABinding436)
          .attr("data-look", event.look);
      }
      return (
        (event.height = chunkJZLCHNYABinding439.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = 0),
        (event.intersect = function (chunkJZLCHNYAInput351) {
          return chunkJZLCHNYABinding3(event, chunkJZLCHNYAInput351);
        }),
        {
          cluster: chunkJZLCHNYABinding432,
          labelBBox: {},
        }
      );
    }, "divider"),
    kanbanSection: defineFunctionName(async (chunkJZLCHNYAInput6, event) => {
      logger.info("Creating subgraph rect for ", event.id, event);
      let chunkJZLCHNYABinding90 = b(),
        { themeVariables, handDrawnSeed } = chunkJZLCHNYABinding90,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } = a(event),
        chunkJZLCHNYABinding91 = chunkJZLCHNYAInput6
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYABinding92 = h(chunkJZLCHNYABinding90.flowchart.htmlLabels),
        chunkJZLCHNYABinding93 = chunkJZLCHNYABinding91
          .insert("g")
          .attr("class", "cluster-label "),
        chunkJZLCHNYABinding94 = await chunkJA3XYJ7ZN(
          chunkJZLCHNYABinding93,
          event.label,
          {
            style: event.labelStyle,
            useHtmlLabels: chunkJZLCHNYABinding92,
            isNode: true,
            width: event.width,
          },
        ),
        chunkJZLCHNYABinding95 = chunkJZLCHNYABinding94.getBBox();
      if (h(chunkJZLCHNYABinding90.flowchart.htmlLabels)) {
        let chunkJZLCHNYABinding1043 = chunkJZLCHNYABinding94.children[0],
          chunkJZLCHNYABinding1044 = select(chunkJZLCHNYABinding94);
        chunkJZLCHNYABinding95 =
          chunkJZLCHNYABinding1043.getBoundingClientRect();
        chunkJZLCHNYABinding1044.attr("width", chunkJZLCHNYABinding95.width);
        chunkJZLCHNYABinding1044.attr("height", chunkJZLCHNYABinding95.height);
      }
      let chunkJZLCHNYABinding96 =
        event.width <= chunkJZLCHNYABinding95.width + event.padding
          ? chunkJZLCHNYABinding95.width + event.padding
          : event.width;
      event.width <= chunkJZLCHNYABinding95.width + event.padding
        ? (event.diff =
            (chunkJZLCHNYABinding96 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunkJZLCHNYABinding97 = event.height,
        chunkJZLCHNYABinding98 = event.x - chunkJZLCHNYABinding96 / 2,
        chunkJZLCHNYABinding99 = event.y - chunkJZLCHNYABinding97 / 2;
      logger.trace("Data ", event, JSON.stringify(event));
      let chunkJZLCHNYABinding100;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYABinding846 = rough.svg(chunkJZLCHNYABinding91),
          chunkJZLCHNYABinding847 = o(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 4,
            seed: handDrawnSeed,
          }),
          chunkJZLCHNYABinding848 = chunkJZLCHNYABinding846.path(
            chunkJZLCHNYABinding4(
              chunkJZLCHNYABinding98,
              chunkJZLCHNYABinding99,
              chunkJZLCHNYABinding96,
              chunkJZLCHNYABinding97,
              event.rx,
            ),
            chunkJZLCHNYABinding847,
          );
        chunkJZLCHNYABinding100 = chunkJZLCHNYABinding91.insert(
          () => (
            logger.debug("Rough node insert CXC", chunkJZLCHNYABinding848),
            chunkJZLCHNYABinding848
          ),
          ":first-child",
        );
        chunkJZLCHNYABinding100
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunkJZLCHNYABinding100
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunkJZLCHNYABinding100 = chunkJZLCHNYABinding91.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYABinding100
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", chunkJZLCHNYABinding98)
          .attr("y", chunkJZLCHNYABinding99)
          .attr("width", chunkJZLCHNYABinding96)
          .attr("height", chunkJZLCHNYABinding97);
      }
      let { subGraphTitleTopMargin } = getSubGraphTitleMargins(
        chunkJZLCHNYABinding90,
      );
      if (
        (chunkJZLCHNYABinding93.attr(
          "transform",
          `translate(${event.x - chunkJZLCHNYABinding95.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunkJZLCHNYABinding1118 = chunkJZLCHNYABinding93.select("span");
        chunkJZLCHNYABinding1118 &&
          chunkJZLCHNYABinding1118.attr("style", labelStyles);
      }
      let chunkJZLCHNYABinding101 = chunkJZLCHNYABinding100.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = chunkJZLCHNYABinding101.width),
        (event.height = chunkJZLCHNYABinding101.height),
        (event.offsetY = chunkJZLCHNYABinding95.height - event.padding / 2),
        (event.intersect = function (chunkJZLCHNYAInput352) {
          return chunkJZLCHNYABinding3(event, chunkJZLCHNYAInput352);
        }),
        {
          cluster: chunkJZLCHNYABinding91,
          labelBBox: chunkJZLCHNYABinding95,
        }
      );
    }, "kanbanSection"),
  };
  chunkJZLCHNYABinding7 = new Map();
  chunkJZLCHNYAA = defineFunctionName(
    async (chunkJZLCHNYAInput307, chunkJZLCHNYAInput308) => {
      let chunkJZLCHNYABinding1107 = await chunkJZLCHNYABinding6[
        chunkJZLCHNYAInput308.shape || "rect"
      ](chunkJZLCHNYAInput307, chunkJZLCHNYAInput308);
      return (
        chunkJZLCHNYABinding7.set(
          chunkJZLCHNYAInput308.id,
          chunkJZLCHNYABinding1107,
        ),
        chunkJZLCHNYABinding1107
      );
    },
    "insertCluster",
  );
  chunkJZLCHNYAT = defineFunctionName(() => {
    chunkJZLCHNYABinding7 = new Map();
  }, "clear");
  defineFunctionName(chunkJZLCHNYAHelper6, "intersectNode");
  chunkJZLCHNYABinding8 = chunkJZLCHNYAHelper6;
  defineFunctionName(chunkJZLCHNYAHelper7, "intersectEllipse");
  chunkJZLCHNYABinding9 = chunkJZLCHNYAHelper7;
  defineFunctionName(chunkJZLCHNYAHelper8, "intersectCircle");
  chunkJZLCHNYABinding10 = chunkJZLCHNYAHelper8;
  defineFunctionName(chunkJZLCHNYAHelper9, "intersectLine");
  defineFunctionName(chunkJZLCHNYAHelper10, "sameSign");
  chunkJZLCHNYABinding11 = chunkJZLCHNYAHelper9;
  defineFunctionName(chunkJZLCHNYAHelper11, "intersectPolygon");
  $ = {
    node: chunkJZLCHNYABinding8,
    circle: chunkJZLCHNYABinding10,
    ellipse: chunkJZLCHNYABinding9,
    polygon: chunkJZLCHNYAHelper11,
    rect: chunkJZLCHNYABinding3,
  };
  defineFunctionName(chunkJZLCHNYAHelper12, "anchor");
  defineFunctionName(chunkJZLCHNYAHelper13, "generateArcPoints");
  defineFunctionName(chunkJZLCHNYAHelper14, "bowTieRect");
  defineFunctionName(chunkJZLCHNYAHelper15, "insertPolygonShape");
  defineFunctionName(chunkJZLCHNYAHelper16, "card");
  defineFunctionName(chunkJZLCHNYAHelper17, "choice");
  defineFunctionName(chunkJZLCHNYAHelper18, "circle");
  defineFunctionName(chunkJZLCHNYAHelper19, "createLine");
  defineFunctionName(chunkJZLCHNYAHelper20, "crossedCircle");
  defineFunctionName(chunkJZLCHNYAHelper21, "generateCirclePoints");
  defineFunctionName(chunkJZLCHNYAHelper22, "curlyBraceLeft");
  defineFunctionName(chunkJZLCHNYAHelper23, "generateCirclePoints");
  defineFunctionName(chunkJZLCHNYAHelper24, "curlyBraceRight");
  defineFunctionName(chunkJZLCHNYAHelper25, "generateCirclePoints");
  defineFunctionName(chunkJZLCHNYAHelper26, "curlyBraces");
  defineFunctionName(_e, "curvedTrapezoid");
  chunkJZLCHNYABinding12 = defineFunctionName(
    (
      chunkJZLCHNYAInput272,
      chunkJZLCHNYAInput273,
      chunkJZLCHNYAInput274,
      chunkJZLCHNYAInput275,
      chunkJZLCHNYAInput276,
      chunkJZLCHNYAInput277,
    ) =>
      [
        `M${chunkJZLCHNYAInput272},${chunkJZLCHNYAInput273 + chunkJZLCHNYAInput277}`,
        `a${chunkJZLCHNYAInput276},${chunkJZLCHNYAInput277} 0,0,0 ${chunkJZLCHNYAInput274},0`,
        `a${chunkJZLCHNYAInput276},${chunkJZLCHNYAInput277} 0,0,0 ${-chunkJZLCHNYAInput274},0`,
        `l0,${chunkJZLCHNYAInput275}`,
        `a${chunkJZLCHNYAInput276},${chunkJZLCHNYAInput277} 0,0,0 ${chunkJZLCHNYAInput274},0`,
        `l0,${-chunkJZLCHNYAInput275}`,
      ].join(" "),
    "createCylinderPathD",
  );
  chunkJZLCHNYABinding13 = defineFunctionName(
    (
      chunkJZLCHNYAInput278,
      chunkJZLCHNYAInput279,
      chunkJZLCHNYAInput280,
      chunkJZLCHNYAInput281,
      chunkJZLCHNYAInput282,
      chunkJZLCHNYAInput283,
    ) =>
      [
        `M${chunkJZLCHNYAInput278},${chunkJZLCHNYAInput279 + chunkJZLCHNYAInput283}`,
        `M${chunkJZLCHNYAInput278 + chunkJZLCHNYAInput280},${chunkJZLCHNYAInput279 + chunkJZLCHNYAInput283}`,
        `a${chunkJZLCHNYAInput282},${chunkJZLCHNYAInput283} 0,0,0 ${-chunkJZLCHNYAInput280},0`,
        `l0,${chunkJZLCHNYAInput281}`,
        `a${chunkJZLCHNYAInput282},${chunkJZLCHNYAInput283} 0,0,0 ${chunkJZLCHNYAInput280},0`,
        `l0,${-chunkJZLCHNYAInput281}`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunkJZLCHNYABinding14 = defineFunctionName(
    (
      chunkJZLCHNYAInput317,
      chunkJZLCHNYAInput318,
      chunkJZLCHNYAInput319,
      chunkJZLCHNYAInput320,
      chunkJZLCHNYAInput321,
      chunkJZLCHNYAInput322,
    ) =>
      [
        `M${chunkJZLCHNYAInput317 - chunkJZLCHNYAInput319 / 2},${-chunkJZLCHNYAInput320 / 2}`,
        `a${chunkJZLCHNYAInput321},${chunkJZLCHNYAInput322} 0,0,0 ${chunkJZLCHNYAInput319},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  defineFunctionName(chunkJZLCHNYAHelper27, "cylinder");
  defineFunctionName(chunkJZLCHNYAHelper28, "dividedRectangle");
  defineFunctionName(be, "doublecircle");
  defineFunctionName(chunkJZLCHNYAHelper29, "filledCircle");
  defineFunctionName(chunkJZLCHNYAHelper30, "flippedTriangle");
  defineFunctionName(chunkJZLCHNYAHelper31, "forkJoin");
  defineFunctionName(chunkJZLCHNYAHelper32, "halfRoundedRectangle");
  defineFunctionName(chunkJZLCHNYAHelper33, "hexagon");
  defineFunctionName(chunkJZLCHNYAHelper34, "hourglass");
  defineFunctionName(chunkJZLCHNYAHelper35, "icon");
  defineFunctionName(chunkJZLCHNYAHelper36, "iconCircle");
  defineFunctionName(chunkJZLCHNYAHelper37, "iconRounded");
  defineFunctionName(chunkJZLCHNYAHelper38, "iconSquare");
  defineFunctionName(chunkJZLCHNYAHelper39, "imageSquare");
  defineFunctionName(chunkJZLCHNYAHelper40, "inv_trapezoid");
  defineFunctionName(chunkJZLCHNYAHelper41, "drawRect");
  defineFunctionName(chunkJZLCHNYAHelper42, "labelRect");
  defineFunctionName(chunkJZLCHNYAHelper43, "lean_left");
  defineFunctionName(chunkJZLCHNYAHelper44, "lean_right");
  defineFunctionName(chunkJZLCHNYAHelper45, "lightningBolt");
  chunkJZLCHNYABinding15 = defineFunctionName(
    (
      chunkJZLCHNYAInput215,
      chunkJZLCHNYAInput216,
      chunkJZLCHNYAInput217,
      chunkJZLCHNYAInput218,
      chunkJZLCHNYAInput219,
      chunkJZLCHNYAInput220,
      chunkJZLCHNYAInput221,
    ) =>
      [
        `M${chunkJZLCHNYAInput215},${chunkJZLCHNYAInput216 + chunkJZLCHNYAInput220}`,
        `a${chunkJZLCHNYAInput219},${chunkJZLCHNYAInput220} 0,0,0 ${chunkJZLCHNYAInput217},0`,
        `a${chunkJZLCHNYAInput219},${chunkJZLCHNYAInput220} 0,0,0 ${-chunkJZLCHNYAInput217},0`,
        `l0,${chunkJZLCHNYAInput218}`,
        `a${chunkJZLCHNYAInput219},${chunkJZLCHNYAInput220} 0,0,0 ${chunkJZLCHNYAInput217},0`,
        `l0,${-chunkJZLCHNYAInput218}`,
        `M${chunkJZLCHNYAInput215},${chunkJZLCHNYAInput216 + chunkJZLCHNYAInput220 + chunkJZLCHNYAInput221}`,
        `a${chunkJZLCHNYAInput219},${chunkJZLCHNYAInput220} 0,0,0 ${chunkJZLCHNYAInput217},0`,
      ].join(" "),
    "createCylinderPathD",
  );
  chunkJZLCHNYABinding16 = defineFunctionName(
    (
      chunkJZLCHNYAInput222,
      chunkJZLCHNYAInput223,
      chunkJZLCHNYAInput224,
      chunkJZLCHNYAInput225,
      chunkJZLCHNYAInput226,
      chunkJZLCHNYAInput227,
      chunkJZLCHNYAInput228,
    ) =>
      [
        `M${chunkJZLCHNYAInput222},${chunkJZLCHNYAInput223 + chunkJZLCHNYAInput227}`,
        `M${chunkJZLCHNYAInput222 + chunkJZLCHNYAInput224},${chunkJZLCHNYAInput223 + chunkJZLCHNYAInput227}`,
        `a${chunkJZLCHNYAInput226},${chunkJZLCHNYAInput227} 0,0,0 ${-chunkJZLCHNYAInput224},0`,
        `l0,${chunkJZLCHNYAInput225}`,
        `a${chunkJZLCHNYAInput226},${chunkJZLCHNYAInput227} 0,0,0 ${chunkJZLCHNYAInput224},0`,
        `l0,${-chunkJZLCHNYAInput225}`,
        `M${chunkJZLCHNYAInput222},${chunkJZLCHNYAInput223 + chunkJZLCHNYAInput227 + chunkJZLCHNYAInput228}`,
        `a${chunkJZLCHNYAInput226},${chunkJZLCHNYAInput227} 0,0,0 ${chunkJZLCHNYAInput224},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunkJZLCHNYABinding17 = defineFunctionName(
    (
      chunkJZLCHNYAInput323,
      chunkJZLCHNYAInput324,
      chunkJZLCHNYAInput325,
      chunkJZLCHNYAInput326,
      chunkJZLCHNYAInput327,
      chunkJZLCHNYAInput328,
    ) =>
      [
        `M${chunkJZLCHNYAInput323 - chunkJZLCHNYAInput325 / 2},${-chunkJZLCHNYAInput326 / 2}`,
        `a${chunkJZLCHNYAInput327},${chunkJZLCHNYAInput328} 0,0,0 ${chunkJZLCHNYAInput325},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  defineFunctionName(chunkJZLCHNYAHelper46, "linedCylinder");
  defineFunctionName(chunkJZLCHNYAHelper47, "linedWaveEdgedRect");
  defineFunctionName(chunkJZLCHNYAHelper48, "multiRect");
  defineFunctionName(chunkJZLCHNYAHelper49, "multiWaveEdgedRectangle");
  defineFunctionName(chunkJZLCHNYAHelper50, "note");
  chunkJZLCHNYABinding18 = defineFunctionName(
    (chunkJZLCHNYAInput290, chunkJZLCHNYAInput291, chunkJZLCHNYAInput292) =>
      [
        `M${chunkJZLCHNYAInput290 + chunkJZLCHNYAInput292 / 2},${chunkJZLCHNYAInput291}`,
        `L${chunkJZLCHNYAInput290 + chunkJZLCHNYAInput292},${chunkJZLCHNYAInput291 - chunkJZLCHNYAInput292 / 2}`,
        `L${chunkJZLCHNYAInput290 + chunkJZLCHNYAInput292 / 2},${chunkJZLCHNYAInput291 - chunkJZLCHNYAInput292}`,
        `L${chunkJZLCHNYAInput290},${chunkJZLCHNYAInput291 - chunkJZLCHNYAInput292 / 2}`,
        "Z",
      ].join(" "),
    "createDecisionBoxPathD",
  );
  defineFunctionName(chunkJZLCHNYAHelper51, "question");
  defineFunctionName(chunkJZLCHNYAHelper52, "rect_left_inv_arrow");
  defineFunctionName(chunkJZLCHNYAHelper53, "rectWithTitle");
  defineFunctionName(chunkJZLCHNYAHelper54, "generateArcPoints");
  defineFunctionName(chunkJZLCHNYAHelper55, "roundedRect");
  defineFunctionName(chunkJZLCHNYAHelper56, "shadedProcess");
  defineFunctionName(chunkJZLCHNYAHelper57, "slopedRect");
  defineFunctionName(chunkJZLCHNYAHelper58, "squareRect");
  defineFunctionName(chunkJZLCHNYAHelper59, "stadium");
  defineFunctionName(chunkJZLCHNYAHelper60, "state");
  defineFunctionName(chunkJZLCHNYAHelper61, "stateEnd");
  defineFunctionName($e, "stateStart");
  defineFunctionName(chunkJZLCHNYAHelper62, "subroutine");
  defineFunctionName(chunkJZLCHNYAHelper63, "taggedRect");
  defineFunctionName(chunkJZLCHNYAHelper64, "taggedWaveEdgedRectangle");
  defineFunctionName(chunkJZLCHNYAHelper65, "text");
  chunkJZLCHNYABinding19 = defineFunctionName(
    (
      chunkJZLCHNYAInput295,
      chunkJZLCHNYAInput296,
      chunkJZLCHNYAInput297,
      chunkJZLCHNYAInput298,
      chunkJZLCHNYAInput299,
      chunkJZLCHNYAInput300,
    ) => `M${chunkJZLCHNYAInput295},${chunkJZLCHNYAInput296}
    a${chunkJZLCHNYAInput299},${chunkJZLCHNYAInput300} 0,0,1 0,${-chunkJZLCHNYAInput298}
    l${chunkJZLCHNYAInput297},0
    a${chunkJZLCHNYAInput299},${chunkJZLCHNYAInput300} 0,0,1 0,${chunkJZLCHNYAInput298}
    M${chunkJZLCHNYAInput297},${-chunkJZLCHNYAInput298}
    a${chunkJZLCHNYAInput299},${chunkJZLCHNYAInput300} 0,0,0 0,${chunkJZLCHNYAInput298}
    l${-chunkJZLCHNYAInput297},0`,
    "createCylinderPathD",
  );
  chunkJZLCHNYABinding20 = defineFunctionName(
    (
      chunkJZLCHNYAInput284,
      chunkJZLCHNYAInput285,
      chunkJZLCHNYAInput286,
      chunkJZLCHNYAInput287,
      chunkJZLCHNYAInput288,
      chunkJZLCHNYAInput289,
    ) =>
      [
        `M${chunkJZLCHNYAInput284},${chunkJZLCHNYAInput285}`,
        `M${chunkJZLCHNYAInput284 + chunkJZLCHNYAInput286},${chunkJZLCHNYAInput285}`,
        `a${chunkJZLCHNYAInput288},${chunkJZLCHNYAInput289} 0,0,0 0,${-chunkJZLCHNYAInput287}`,
        `l${-chunkJZLCHNYAInput286},0`,
        `a${chunkJZLCHNYAInput288},${chunkJZLCHNYAInput289} 0,0,0 0,${chunkJZLCHNYAInput287}`,
        `l${chunkJZLCHNYAInput286},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  );
  chunkJZLCHNYABinding21 = defineFunctionName(
    (
      chunkJZLCHNYAInput329,
      chunkJZLCHNYAInput330,
      chunkJZLCHNYAInput331,
      chunkJZLCHNYAInput332,
      chunkJZLCHNYAInput333,
      chunkJZLCHNYAInput334,
    ) =>
      [
        `M${chunkJZLCHNYAInput329 + chunkJZLCHNYAInput331 / 2},${-chunkJZLCHNYAInput332 / 2}`,
        `a${chunkJZLCHNYAInput333},${chunkJZLCHNYAInput334} 0,0,0 0,${chunkJZLCHNYAInput332}`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
  defineFunctionName(chunkJZLCHNYAHelper66, "tiltedCylinder");
  defineFunctionName(at, "trapezoid");
  defineFunctionName(chunkJZLCHNYAHelper67, "trapezoidalPentagon");
  defineFunctionName(chunkJZLCHNYAHelper68, "triangle");
  defineFunctionName(chunkJZLCHNYAHelper69, "waveEdgedRectangle");
  defineFunctionName(chunkJZLCHNYAHelper70, "waveRectangle");
  defineFunctionName(chunkJZLCHNYAHelper71, "windowPane");
  defineFunctionName(chunkJZLCHNYAHelper72, "erBox");
  defineFunctionName(chunkJZLCHNYAHelper73, "addText");
  defineFunctionName(chunkJZLCHNYAHelper74, "textHelper");
  defineFunctionName(chunkJZLCHNYAHelper75, "addText");
  defineFunctionName(chunkJZLCHNYAHelper76, "classBox");
  defineFunctionName(chunkJZLCHNYAHelper77, "requirementBox");
  defineFunctionName(chunkJZLCHNYAHelper78, "addText");
  chunkJZLCHNYABinding22 = defineFunctionName((chunkJZLCHNYAInput233) => {
    switch (chunkJZLCHNYAInput233) {
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
  defineFunctionName(chunkJZLCHNYAHelper79, "kanbanItem");
  defineFunctionName(chunkJZLCHNYAHelper80, "bang");
  defineFunctionName(_t, "cloud");
  defineFunctionName(chunkJZLCHNYAHelper81, "defaultMindmapNode");
  defineFunctionName(chunkJZLCHNYAHelper82, "mindmapCircle");
  chunkJZLCHNYABinding23 = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: ["proc", "process", "rectangle"],
      internalAliases: ["squareRect"],
      handler: chunkJZLCHNYAHelper58,
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: ["event"],
      internalAliases: ["roundedRect"],
      handler: chunkJZLCHNYAHelper55,
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: ["terminal", "pill"],
      handler: chunkJZLCHNYAHelper59,
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
      handler: chunkJZLCHNYAHelper62,
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: ["db", "database", "cylinder"],
      handler: chunkJZLCHNYAHelper27,
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: ["circ"],
      handler: chunkJZLCHNYAHelper18,
    },
    {
      semanticName: "Bang",
      name: "Bang",
      shortName: "bang",
      description: "Bang",
      aliases: ["bang"],
      handler: chunkJZLCHNYAHelper80,
    },
    {
      semanticName: "Cloud",
      name: "Cloud",
      shortName: "cloud",
      description: "cloud",
      aliases: ["cloud"],
      handler: _t,
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: ["decision", "diamond", "question"],
      handler: chunkJZLCHNYAHelper51,
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: ["hexagon", "prepare"],
      handler: chunkJZLCHNYAHelper33,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: ["lean-right", "in-out"],
      internalAliases: ["lean_right"],
      handler: chunkJZLCHNYAHelper44,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: ["lean-left", "out-in"],
      internalAliases: ["lean_left"],
      handler: chunkJZLCHNYAHelper43,
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: ["priority", "trapezoid-bottom", "trapezoid"],
      handler: at,
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
      internalAliases: ["inv_trapezoid"],
      handler: chunkJZLCHNYAHelper40,
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: ["double-circle"],
      internalAliases: ["doublecircle"],
      handler: be,
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: chunkJZLCHNYAHelper65,
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: ["card", "notched-rectangle"],
      handler: chunkJZLCHNYAHelper16,
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
      handler: chunkJZLCHNYAHelper56,
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: ["start", "small-circle"],
      internalAliases: ["stateStart"],
      handler: $e,
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: ["stop", "framed-circle"],
      internalAliases: ["stateEnd"],
      handler: chunkJZLCHNYAHelper61,
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: ["join"],
      internalAliases: ["forkJoin"],
      handler: chunkJZLCHNYAHelper31,
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: ["hourglass", "collate"],
      handler: chunkJZLCHNYAHelper34,
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: ["comment", "brace-l"],
      handler: chunkJZLCHNYAHelper22,
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: chunkJZLCHNYAHelper24,
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: chunkJZLCHNYAHelper26,
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: ["com-link", "lightning-bolt"],
      handler: chunkJZLCHNYAHelper45,
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: ["doc", "document"],
      handler: chunkJZLCHNYAHelper69,
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: ["half-rounded-rectangle"],
      handler: chunkJZLCHNYAHelper32,
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: ["das", "horizontal-cylinder"],
      handler: chunkJZLCHNYAHelper66,
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: ["disk", "lined-cylinder"],
      handler: chunkJZLCHNYAHelper46,
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: ["curved-trapezoid", "display"],
      handler: _e,
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: ["div-proc", "divided-rectangle", "divided-process"],
      handler: chunkJZLCHNYAHelper28,
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: ["extract", "triangle"],
      handler: chunkJZLCHNYAHelper68,
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: ["internal-storage", "window-pane"],
      handler: chunkJZLCHNYAHelper71,
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: ["junction", "filled-circle"],
      handler: chunkJZLCHNYAHelper29,
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: ["loop-limit", "notched-pentagon"],
      handler: chunkJZLCHNYAHelper67,
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: ["manual-file", "flipped-triangle"],
      handler: chunkJZLCHNYAHelper30,
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: ["manual-input", "sloped-rectangle"],
      handler: chunkJZLCHNYAHelper57,
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: ["documents", "st-doc", "stacked-document"],
      handler: chunkJZLCHNYAHelper49,
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: ["procs", "processes", "stacked-rectangle"],
      handler: chunkJZLCHNYAHelper48,
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: ["stored-data", "bow-tie-rectangle"],
      handler: chunkJZLCHNYAHelper14,
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: ["summary", "crossed-circle"],
      handler: chunkJZLCHNYAHelper20,
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: ["tag-doc", "tagged-document"],
      handler: chunkJZLCHNYAHelper64,
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
      handler: chunkJZLCHNYAHelper63,
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: ["paper-tape"],
      handler: chunkJZLCHNYAHelper70,
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: ["rect_left_inv_arrow"],
      handler: chunkJZLCHNYAHelper52,
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: ["lined-document"],
      handler: chunkJZLCHNYAHelper47,
    },
  ];
  chunkJZLCHNYABinding24 = defineFunctionName(() => {
    let chunkJZLCHNYABinding757 = [
      ...Object.entries({
        state: chunkJZLCHNYAHelper60,
        choice: chunkJZLCHNYAHelper17,
        note: chunkJZLCHNYAHelper50,
        rectWithTitle: chunkJZLCHNYAHelper53,
        labelRect: chunkJZLCHNYAHelper42,
        iconSquare: chunkJZLCHNYAHelper38,
        iconCircle: chunkJZLCHNYAHelper36,
        icon: chunkJZLCHNYAHelper35,
        iconRounded: chunkJZLCHNYAHelper37,
        imageSquare: chunkJZLCHNYAHelper39,
        anchor: chunkJZLCHNYAHelper12,
        kanbanItem: chunkJZLCHNYAHelper79,
        mindmapCircle: chunkJZLCHNYAHelper82,
        defaultMindmapNode: chunkJZLCHNYAHelper81,
        classBox: chunkJZLCHNYAHelper76,
        erBox: chunkJZLCHNYAHelper72,
        requirementBox: chunkJZLCHNYAHelper77,
      }),
      ...chunkJZLCHNYABinding23.flatMap((item) =>
        [
          item.shortName,
          ...("aliases" in item ? item.aliases : []),
          ...("internalAliases" in item ? item.internalAliases : []),
        ].map((_item) => [_item, item.handler]),
      ),
    ];
    return Object.fromEntries(chunkJZLCHNYABinding757);
  }, "generateShapeMap")();
  defineFunctionName(chunkJZLCHNYAS, "isValidShape");
  chunkJZLCHNYABinding25 = new Map();
  defineFunctionName(chunkJZLCHNYAO, "insertNode");
  chunkJZLCHNYAU = defineFunctionName(
    (chunkJZLCHNYAInput411, chunkJZLCHNYAInput412) => {
      chunkJZLCHNYABinding25.set(
        chunkJZLCHNYAInput412.id,
        chunkJZLCHNYAInput411,
      );
    },
    "setNodeElem",
  );
  chunkJZLCHNYAN = defineFunctionName(() => {
    chunkJZLCHNYABinding25.clear();
  }, "clear");
  chunkJZLCHNYAL = defineFunctionName((chunkJZLCHNYAInput200) => {
    let chunkJZLCHNYABinding849 = chunkJZLCHNYABinding25.get(
      chunkJZLCHNYAInput200.id,
    );
    logger.trace(
      "Transforming node",
      chunkJZLCHNYAInput200.diff,
      chunkJZLCHNYAInput200,
      "translate(" +
        (chunkJZLCHNYAInput200.x - chunkJZLCHNYAInput200.width / 2 - 5) +
        ", " +
        chunkJZLCHNYAInput200.width / 2 +
        ")",
    );
    let chunkJZLCHNYABinding850 = chunkJZLCHNYAInput200.diff || 0;
    return (
      chunkJZLCHNYAInput200.clusterNode
        ? chunkJZLCHNYABinding849.attr(
            "transform",
            "translate(" +
              (chunkJZLCHNYAInput200.x +
                chunkJZLCHNYABinding850 -
                chunkJZLCHNYAInput200.width / 2) +
              ", " +
              (chunkJZLCHNYAInput200.y - chunkJZLCHNYAInput200.height / 2 - 8) +
              ")",
          )
        : chunkJZLCHNYABinding849.attr(
            "transform",
            "translate(" +
              chunkJZLCHNYAInput200.x +
              ", " +
              chunkJZLCHNYAInput200.y +
              ")",
          ),
      chunkJZLCHNYABinding850
    );
  }, "positionNode");
});
export {
  chunkJZLCHNYAA,
  chunkJZLCHNYAC,
  chunkJZLCHNYAD,
  chunkJZLCHNYAL,
  chunkJZLCHNYAN,
  chunkJZLCHNYAO,
  chunkJZLCHNYAR,
  chunkJZLCHNYAS,
  chunkJZLCHNYAT,
  chunkJZLCHNYAU,
};
