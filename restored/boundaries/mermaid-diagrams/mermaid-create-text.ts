// Restored from ref/webview/assets/chunk-JA3XYJ7Z-BlRaXERp.js
// Mermaid createText / label rendering (primary). app-initial Frt → marked npm shim; Drt lazy-init dropped.
// Stage 3 candidate: IMPORT_MAP-rewritten npm aliases; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import { marked } from "../../vendor/marked";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import { k, L, O, P, s, y } from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { chunkS3R3BYOJI, chunkS3R3BYOJU } from "./mermaid-common-utils";
import { c, i, n, p, r, s as esmS, t, u } from "../iconify-utils";
function chunkJA3XYJ7ZHelper1(chunkJA3XYJ7ZInput41, { markdownAutoWrap }) {
  let chunkJA3XYJ7ZBinding44 = t(
    chunkJA3XYJ7ZInput41.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"),
  );
  return markdownAutoWrap === false
    ? chunkJA3XYJ7ZBinding44.replace(/ /g, "&nbsp;")
    : chunkJA3XYJ7ZBinding44;
}
function chunkJA3XYJ7ZHelper2(chunkJA3XYJ7ZInput10, chunkJA3XYJ7ZInput11 = {}) {
  let chunkJA3XYJ7ZBinding12 = chunkJA3XYJ7ZHelper1(
      chunkJA3XYJ7ZInput10,
      chunkJA3XYJ7ZInput11,
    ),
    chunkJA3XYJ7ZBinding13 = marked.lexer(chunkJA3XYJ7ZBinding12),
    chunkJA3XYJ7ZBinding14 = [[]],
    chunkJA3XYJ7ZBinding15 = 0;
  function chunkJA3XYJ7ZHelper15(
    chunkJA3XYJ7ZInput21,
    chunkJA3XYJ7ZInput22 = "normal",
  ) {
    chunkJA3XYJ7ZInput21.type === "text"
      ? chunkJA3XYJ7ZInput21.text.split("\n").forEach((item, index) => {
          index !== 0 &&
            (chunkJA3XYJ7ZBinding15++, chunkJA3XYJ7ZBinding14.push([]));
          item.split(" ").forEach((_item) => {
            _item = _item.replace(/&#39;/g, "'");
            _item &&
              chunkJA3XYJ7ZBinding14[chunkJA3XYJ7ZBinding15].push({
                content: _item,
                type: chunkJA3XYJ7ZInput22,
              });
          });
        })
      : chunkJA3XYJ7ZInput21.type === "strong" ||
          chunkJA3XYJ7ZInput21.type === "em"
        ? chunkJA3XYJ7ZInput21.tokens.forEach((item) => {
            chunkJA3XYJ7ZHelper15(item, chunkJA3XYJ7ZInput21.type);
          })
        : chunkJA3XYJ7ZInput21.type === "html" &&
          chunkJA3XYJ7ZBinding14[chunkJA3XYJ7ZBinding15].push({
            content: chunkJA3XYJ7ZInput21.text,
            type: "normal",
          });
  }
  return (
    defineFunctionName(chunkJA3XYJ7ZHelper15, "processNode"),
    chunkJA3XYJ7ZBinding13.forEach((item) => {
      item.type === "paragraph"
        ? item.tokens?.forEach((chunkJA3XYJ7ZInput59) => {
            chunkJA3XYJ7ZHelper15(chunkJA3XYJ7ZInput59);
          })
        : item.type === "html"
          ? chunkJA3XYJ7ZBinding14[chunkJA3XYJ7ZBinding15].push({
              content: item.text,
              type: "normal",
            })
          : chunkJA3XYJ7ZBinding14[chunkJA3XYJ7ZBinding15].push({
              content: item.raw,
              type: "normal",
            });
    }),
    chunkJA3XYJ7ZBinding14
  );
}
function chunkJA3XYJ7ZHelper3(chunkJA3XYJ7ZInput12, { markdownAutoWrap } = {}) {
  let chunkJA3XYJ7ZBinding16 = marked.lexer(chunkJA3XYJ7ZInput12);
  function chunkJA3XYJ7ZHelper16(chunkJA3XYJ7ZInput13) {
    return chunkJA3XYJ7ZInput13.type === "text"
      ? markdownAutoWrap === false
        ? chunkJA3XYJ7ZInput13.text
            .replace(/\n */g, "<br/>")
            .replace(/ /g, "&nbsp;")
        : chunkJA3XYJ7ZInput13.text.replace(/\n */g, "<br/>")
      : chunkJA3XYJ7ZInput13.type === "strong"
        ? `<strong>${chunkJA3XYJ7ZInput13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</strong>`
        : chunkJA3XYJ7ZInput13.type === "em"
          ? `<em>${chunkJA3XYJ7ZInput13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</em>`
          : chunkJA3XYJ7ZInput13.type === "paragraph"
            ? `<p>${chunkJA3XYJ7ZInput13.tokens?.map(chunkJA3XYJ7ZHelper16).join("")}</p>`
            : chunkJA3XYJ7ZInput13.type === "space"
              ? ""
              : chunkJA3XYJ7ZInput13.type === "html"
                ? `${chunkJA3XYJ7ZInput13.text}`
                : chunkJA3XYJ7ZInput13.type === "escape"
                  ? chunkJA3XYJ7ZInput13.text
                  : (logger.warn(
                      `Unsupported markdown: ${chunkJA3XYJ7ZInput13.type}`,
                    ),
                    chunkJA3XYJ7ZInput13.raw);
  }
  return (
    defineFunctionName(chunkJA3XYJ7ZHelper16, "output"),
    chunkJA3XYJ7ZBinding16.map(chunkJA3XYJ7ZHelper16).join("")
  );
}
function chunkJA3XYJ7ZHelper4(chunkJA3XYJ7ZInput53) {
  return Intl.Segmenter
    ? [...new Intl.Segmenter().segment(chunkJA3XYJ7ZInput53)].map(
        (item) => item.segment,
      )
    : [...chunkJA3XYJ7ZInput53];
}
function chunkJA3XYJ7ZHelper5(chunkJA3XYJ7ZInput55, chunkJA3XYJ7ZInput56) {
  return chunkJA3XYJ7ZHelper6(
    chunkJA3XYJ7ZInput55,
    [],
    chunkJA3XYJ7ZHelper4(chunkJA3XYJ7ZInput56.content),
    chunkJA3XYJ7ZInput56.type,
  );
}
function chunkJA3XYJ7ZHelper6(
  chunkJA3XYJ7ZInput29,
  chunkJA3XYJ7ZInput30,
  chunkJA3XYJ7ZInput31,
  chunkJA3XYJ7ZInput32,
) {
  if (chunkJA3XYJ7ZInput31.length === 0)
    return [
      {
        content: chunkJA3XYJ7ZInput30.join(""),
        type: chunkJA3XYJ7ZInput32,
      },
      {
        content: "",
        type: chunkJA3XYJ7ZInput32,
      },
    ];
  let [chunkJA3XYJ7ZBinding34, ...chunkJA3XYJ7ZBinding35] =
      chunkJA3XYJ7ZInput31,
    chunkJA3XYJ7ZBinding36 = [...chunkJA3XYJ7ZInput30, chunkJA3XYJ7ZBinding34];
  return chunkJA3XYJ7ZInput29([
    {
      content: chunkJA3XYJ7ZBinding36.join(""),
      type: chunkJA3XYJ7ZInput32,
    },
  ])
    ? chunkJA3XYJ7ZHelper6(
        chunkJA3XYJ7ZInput29,
        chunkJA3XYJ7ZBinding36,
        chunkJA3XYJ7ZBinding35,
        chunkJA3XYJ7ZInput32,
      )
    : (chunkJA3XYJ7ZInput30.length === 0 &&
        chunkJA3XYJ7ZBinding34 &&
        (chunkJA3XYJ7ZInput30.push(chunkJA3XYJ7ZBinding34),
        chunkJA3XYJ7ZInput31.shift()),
      [
        {
          content: chunkJA3XYJ7ZInput30.join(""),
          type: chunkJA3XYJ7ZInput32,
        },
        {
          content: chunkJA3XYJ7ZInput31.join(""),
          type: chunkJA3XYJ7ZInput32,
        },
      ]);
}
function chunkJA3XYJ7ZHelper7(chunkJA3XYJ7ZInput45, chunkJA3XYJ7ZInput46) {
  if (chunkJA3XYJ7ZInput45.some(({ content }) => content.includes("\n")))
    throw Error("splitLineToFitWidth does not support newlines in the line");
  return chunkJA3XYJ7ZHelper8(chunkJA3XYJ7ZInput45, chunkJA3XYJ7ZInput46);
}
function chunkJA3XYJ7ZHelper8(
  chunkJA3XYJ7ZInput23,
  chunkJA3XYJ7ZInput24,
  chunkJA3XYJ7ZInput25 = [],
  chunkJA3XYJ7ZInput26 = [],
) {
  if (chunkJA3XYJ7ZInput23.length === 0)
    return (
      chunkJA3XYJ7ZInput26.length > 0 &&
        chunkJA3XYJ7ZInput25.push(chunkJA3XYJ7ZInput26),
      chunkJA3XYJ7ZInput25.length > 0 ? chunkJA3XYJ7ZInput25 : []
    );
  let chunkJA3XYJ7ZBinding29 = "";
  chunkJA3XYJ7ZInput23[0].content === " " &&
    ((chunkJA3XYJ7ZBinding29 = " "), chunkJA3XYJ7ZInput23.shift());
  let chunkJA3XYJ7ZBinding30 = chunkJA3XYJ7ZInput23.shift() ?? {
      content: " ",
      type: "normal",
    },
    chunkJA3XYJ7ZBinding31 = [...chunkJA3XYJ7ZInput26];
  if (
    (chunkJA3XYJ7ZBinding29 !== "" &&
      chunkJA3XYJ7ZBinding31.push({
        content: chunkJA3XYJ7ZBinding29,
        type: "normal",
      }),
    chunkJA3XYJ7ZBinding31.push(chunkJA3XYJ7ZBinding30),
    chunkJA3XYJ7ZInput24(chunkJA3XYJ7ZBinding31))
  )
    return chunkJA3XYJ7ZHelper8(
      chunkJA3XYJ7ZInput23,
      chunkJA3XYJ7ZInput24,
      chunkJA3XYJ7ZInput25,
      chunkJA3XYJ7ZBinding31,
    );
  if (chunkJA3XYJ7ZInput26.length > 0) {
    chunkJA3XYJ7ZInput25.push(chunkJA3XYJ7ZInput26);
    chunkJA3XYJ7ZInput23.unshift(chunkJA3XYJ7ZBinding30);
  } else if (chunkJA3XYJ7ZBinding30.content) {
    let [chunkJA3XYJ7ZBinding57, chunkJA3XYJ7ZBinding58] = chunkJA3XYJ7ZHelper5(
      chunkJA3XYJ7ZInput24,
      chunkJA3XYJ7ZBinding30,
    );
    chunkJA3XYJ7ZInput25.push([chunkJA3XYJ7ZBinding57]);
    chunkJA3XYJ7ZBinding58.content &&
      chunkJA3XYJ7ZInput23.unshift(chunkJA3XYJ7ZBinding58);
  }
  return chunkJA3XYJ7ZHelper8(
    chunkJA3XYJ7ZInput23,
    chunkJA3XYJ7ZInput24,
    chunkJA3XYJ7ZInput25,
  );
}
function chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZInput57, chunkJA3XYJ7ZInput58) {
  chunkJA3XYJ7ZInput58 &&
    chunkJA3XYJ7ZInput57.attr("style", chunkJA3XYJ7ZInput58);
}
async function chunkJA3XYJ7ZHelper10(
  chunkJA3XYJ7ZInput4,
  chunkJA3XYJ7ZInput5,
  chunkJA3XYJ7ZInput6,
  chunkJA3XYJ7ZInput7,
  chunkJA3XYJ7ZInput8 = false,
  chunkJA3XYJ7ZInput9 = y(),
) {
  let chunkJA3XYJ7ZBinding6 = chunkJA3XYJ7ZInput4.append("foreignObject");
  chunkJA3XYJ7ZBinding6.attr("width", `${10 * chunkJA3XYJ7ZInput6}px`);
  chunkJA3XYJ7ZBinding6.attr("height", `${10 * chunkJA3XYJ7ZInput6}px`);
  let chunkJA3XYJ7ZBinding7 = chunkJA3XYJ7ZBinding6.append("xhtml:div"),
    chunkJA3XYJ7ZBinding8 = O(chunkJA3XYJ7ZInput5.label)
      ? await P(
          chunkJA3XYJ7ZInput5.label.replace(s.lineBreakRegex, "\n"),
          chunkJA3XYJ7ZInput9,
        )
      : L(chunkJA3XYJ7ZInput5.label, chunkJA3XYJ7ZInput9),
    chunkJA3XYJ7ZBinding9 = chunkJA3XYJ7ZInput5.isNode
      ? "nodeLabel"
      : "edgeLabel",
    chunkJA3XYJ7ZBinding10 = chunkJA3XYJ7ZBinding7.append("span");
  chunkJA3XYJ7ZBinding10.html(chunkJA3XYJ7ZBinding8);
  chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZBinding10, chunkJA3XYJ7ZInput5.labelStyle);
  chunkJA3XYJ7ZBinding10.attr(
    "class",
    `${chunkJA3XYJ7ZBinding9} ${chunkJA3XYJ7ZInput7}`,
  );
  chunkJA3XYJ7ZHelper9(chunkJA3XYJ7ZBinding7, chunkJA3XYJ7ZInput5.labelStyle);
  chunkJA3XYJ7ZBinding7.style("display", "table-cell");
  chunkJA3XYJ7ZBinding7.style("white-space", "nowrap");
  chunkJA3XYJ7ZBinding7.style("line-height", "1.5");
  chunkJA3XYJ7ZBinding7.style("max-width", chunkJA3XYJ7ZInput6 + "px");
  chunkJA3XYJ7ZBinding7.style("text-align", "center");
  chunkJA3XYJ7ZBinding7.attr("xmlns", "http://www.w3.org/1999/xhtml");
  chunkJA3XYJ7ZInput8 && chunkJA3XYJ7ZBinding7.attr("class", "labelBkg");
  let chunkJA3XYJ7ZBinding11 = chunkJA3XYJ7ZBinding7
    .node()
    .getBoundingClientRect();
  return (
    chunkJA3XYJ7ZBinding11.width === chunkJA3XYJ7ZInput6 &&
      (chunkJA3XYJ7ZBinding7.style("display", "table"),
      chunkJA3XYJ7ZBinding7.style("white-space", "break-spaces"),
      chunkJA3XYJ7ZBinding7.style("width", chunkJA3XYJ7ZInput6 + "px"),
      (chunkJA3XYJ7ZBinding11 = chunkJA3XYJ7ZBinding7
        .node()
        .getBoundingClientRect())),
    chunkJA3XYJ7ZBinding6.node()
  );
}
function chunkJA3XYJ7ZHelper11(
  chunkJA3XYJ7ZInput47,
  chunkJA3XYJ7ZInput48,
  chunkJA3XYJ7ZInput49,
) {
  return chunkJA3XYJ7ZInput47
    .append("tspan")
    .attr("class", "text-outer-tspan")
    .attr("x", 0)
    .attr("y", chunkJA3XYJ7ZInput48 * chunkJA3XYJ7ZInput49 - 0.1 + "em")
    .attr("dy", chunkJA3XYJ7ZInput49 + "em");
}
function chunkJA3XYJ7ZHelper12(
  chunkJA3XYJ7ZInput50,
  chunkJA3XYJ7ZInput51,
  chunkJA3XYJ7ZInput52,
) {
  let chunkJA3XYJ7ZBinding51 = chunkJA3XYJ7ZInput50.append("text"),
    chunkJA3XYJ7ZBinding52 = chunkJA3XYJ7ZHelper11(
      chunkJA3XYJ7ZBinding51,
      1,
      chunkJA3XYJ7ZInput51,
    );
  chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZBinding52, chunkJA3XYJ7ZInput52);
  let chunkJA3XYJ7ZBinding53 = chunkJA3XYJ7ZBinding52
    .node()
    .getComputedTextLength();
  return (chunkJA3XYJ7ZBinding51.remove(), chunkJA3XYJ7ZBinding53);
}
function chunkJA3XYJ7ZT(
  chunkJA3XYJ7ZInput42,
  chunkJA3XYJ7ZInput43,
  chunkJA3XYJ7ZInput44,
) {
  let chunkJA3XYJ7ZBinding47 = chunkJA3XYJ7ZInput42.append("text"),
    chunkJA3XYJ7ZBinding48 = chunkJA3XYJ7ZHelper11(
      chunkJA3XYJ7ZBinding47,
      1,
      chunkJA3XYJ7ZInput43,
    );
  chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZBinding48, [
    {
      content: chunkJA3XYJ7ZInput44,
      type: "normal",
    },
  ]);
  let chunkJA3XYJ7ZBinding49 = chunkJA3XYJ7ZBinding48
    .node()
    ?.getBoundingClientRect();
  return (
    chunkJA3XYJ7ZBinding49 && chunkJA3XYJ7ZBinding47.remove(),
    chunkJA3XYJ7ZBinding49
  );
}
function chunkJA3XYJ7ZHelper13(
  chunkJA3XYJ7ZInput16,
  chunkJA3XYJ7ZInput17,
  chunkJA3XYJ7ZInput18,
  chunkJA3XYJ7ZInput19 = false,
) {
  let chunkJA3XYJ7ZBinding22 = chunkJA3XYJ7ZInput17.append("g"),
    chunkJA3XYJ7ZBinding23 = chunkJA3XYJ7ZBinding22
      .insert("rect")
      .attr("class", "background")
      .attr("style", "stroke: none"),
    chunkJA3XYJ7ZBinding24 = chunkJA3XYJ7ZBinding22
      .append("text")
      .attr("y", "-10.1"),
    chunkJA3XYJ7ZBinding25 = 0;
  for (let chunkJA3XYJ7ZBinding50 of chunkJA3XYJ7ZInput18) {
    let chunkJA3XYJ7ZBinding54 = defineFunctionName(
        (chunkJA3XYJ7ZInput60) =>
          chunkJA3XYJ7ZHelper12(
            chunkJA3XYJ7ZBinding22,
            1.1,
            chunkJA3XYJ7ZInput60,
          ) <= chunkJA3XYJ7ZInput16,
        "checkWidth",
      ),
      chunkJA3XYJ7ZBinding55 = chunkJA3XYJ7ZBinding54(chunkJA3XYJ7ZBinding50)
        ? [chunkJA3XYJ7ZBinding50]
        : chunkJA3XYJ7ZHelper7(chunkJA3XYJ7ZBinding50, chunkJA3XYJ7ZBinding54);
    for (let chunkJA3XYJ7ZBinding60 of chunkJA3XYJ7ZBinding55) {
      chunkJA3XYJ7ZHelper14(
        chunkJA3XYJ7ZHelper11(
          chunkJA3XYJ7ZBinding24,
          chunkJA3XYJ7ZBinding25,
          1.1,
        ),
        chunkJA3XYJ7ZBinding60,
      );
      chunkJA3XYJ7ZBinding25++;
    }
  }
  if (chunkJA3XYJ7ZInput19) {
    let chunkJA3XYJ7ZBinding45 = chunkJA3XYJ7ZBinding24.node().getBBox();
    return (
      chunkJA3XYJ7ZBinding23
        .attr("x", chunkJA3XYJ7ZBinding45.x - 2)
        .attr("y", chunkJA3XYJ7ZBinding45.y - 2)
        .attr("width", chunkJA3XYJ7ZBinding45.width + 4)
        .attr("height", chunkJA3XYJ7ZBinding45.height + 4),
      chunkJA3XYJ7ZBinding22.node()
    );
  } else return chunkJA3XYJ7ZBinding24.node();
}
function chunkJA3XYJ7ZHelper14(chunkJA3XYJ7ZInput33, chunkJA3XYJ7ZInput34) {
  chunkJA3XYJ7ZInput33.text("");
  chunkJA3XYJ7ZInput34.forEach((item, index) => {
    let chunkJA3XYJ7ZBinding40 = chunkJA3XYJ7ZInput33
      .append("tspan")
      .attr("font-style", item.type === "em" ? "italic" : "normal")
      .attr("class", "text-inner-tspan")
      .attr("font-weight", item.type === "strong" ? "bold" : "normal");
    index === 0
      ? chunkJA3XYJ7ZBinding40.text(item.content)
      : chunkJA3XYJ7ZBinding40.text(" " + item.content);
  });
}
async function chunkJA3XYJ7ZO(chunkJA3XYJ7ZInput27, chunkJA3XYJ7ZInput28 = {}) {
  let chunkJA3XYJ7ZBinding32 = [];
  chunkJA3XYJ7ZInput27.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    (chunkJA3XYJ7ZInput35, chunkJA3XYJ7ZInput36, chunkJA3XYJ7ZInput37) => (
      chunkJA3XYJ7ZBinding32.push(
        (async () => {
          let chunkJA3XYJ7ZBinding46 = `${chunkJA3XYJ7ZInput36}:${chunkJA3XYJ7ZInput37}`;
          return (await chunkJA3XYJ7ZBinding4(chunkJA3XYJ7ZBinding46))
            ? await chunkJA3XYJ7ZR(chunkJA3XYJ7ZBinding46, undefined, {
                class: "label-icon",
              })
            : `<i class='${L(chunkJA3XYJ7ZInput35, chunkJA3XYJ7ZInput28).replace(":", " ")}'></i>`;
        })(),
      ),
      chunkJA3XYJ7ZInput35
    ),
  );
  let chunkJA3XYJ7ZBinding33 = await Promise.all(chunkJA3XYJ7ZBinding32);
  return chunkJA3XYJ7ZInput27.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    () => chunkJA3XYJ7ZBinding33.shift() ?? "",
  );
}
var chunkJA3XYJ7ZS,
  chunkJA3XYJ7ZBinding1,
  chunkJA3XYJ7ZBinding2,
  chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZBinding3,
  chunkJA3XYJ7ZBinding4,
  chunkJA3XYJ7ZR,
  chunkJA3XYJ7ZN;
export const chunkJA3XYJ7ZI = esmInit(() => {
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  r();
  ensureD3SelectionRuntimeT();
  n();
  chunkJA3XYJ7ZS = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80,
  };
  chunkJA3XYJ7ZBinding1 = new Map();
  chunkJA3XYJ7ZBinding2 = new Map();
  chunkJA3XYJ7ZA = defineFunctionName((chunkJA3XYJ7ZInput20) => {
    for (let chunkJA3XYJ7ZBinding28 of chunkJA3XYJ7ZInput20) {
      if (!chunkJA3XYJ7ZBinding28.name)
        throw Error(
          'Invalid icon loader. Must have a "name" property with non-empty string value.',
        );
      if (
        (logger.debug("Registering icon pack:", chunkJA3XYJ7ZBinding28.name),
        "loader" in chunkJA3XYJ7ZBinding28)
      )
        chunkJA3XYJ7ZBinding2.set(
          chunkJA3XYJ7ZBinding28.name,
          chunkJA3XYJ7ZBinding28.loader,
        );
      else if ("icons" in chunkJA3XYJ7ZBinding28)
        chunkJA3XYJ7ZBinding1.set(
          chunkJA3XYJ7ZBinding28.name,
          chunkJA3XYJ7ZBinding28.icons,
        );
      else
        throw (
          logger.error("Invalid icon loader:", chunkJA3XYJ7ZBinding28),
          Error(
            'Invalid icon loader. Must have either "icons" or "loader" property.',
          )
        );
    }
  }, "registerIconPacks");
  chunkJA3XYJ7ZBinding3 = defineFunctionName(
    async (chunkJA3XYJ7ZInput14, chunkJA3XYJ7ZInput15) => {
      let chunkJA3XYJ7ZBinding17 = p(
        chunkJA3XYJ7ZInput14,
        true,
        chunkJA3XYJ7ZInput15 !== undefined,
      );
      if (!chunkJA3XYJ7ZBinding17)
        throw Error(`Invalid icon name: ${chunkJA3XYJ7ZInput14}`);
      let chunkJA3XYJ7ZBinding18 =
        chunkJA3XYJ7ZBinding17.prefix || chunkJA3XYJ7ZInput15;
      if (!chunkJA3XYJ7ZBinding18)
        throw Error(`Icon name must contain a prefix: ${chunkJA3XYJ7ZInput14}`);
      let chunkJA3XYJ7ZBinding19 = chunkJA3XYJ7ZBinding1.get(
        chunkJA3XYJ7ZBinding18,
      );
      if (!chunkJA3XYJ7ZBinding19) {
        let chunkJA3XYJ7ZBinding41 = chunkJA3XYJ7ZBinding2.get(
          chunkJA3XYJ7ZBinding18,
        );
        if (!chunkJA3XYJ7ZBinding41)
          throw Error(`Icon set not found: ${chunkJA3XYJ7ZBinding17.prefix}`);
        try {
          chunkJA3XYJ7ZBinding19 = {
            ...(await chunkJA3XYJ7ZBinding41()),
            prefix: chunkJA3XYJ7ZBinding18,
          };
          chunkJA3XYJ7ZBinding1.set(
            chunkJA3XYJ7ZBinding18,
            chunkJA3XYJ7ZBinding19,
          );
        } catch (chunkJA3XYJ7ZBinding56) {
          throw (
            logger.error(chunkJA3XYJ7ZBinding56),
            Error(`Failed to load icon set: ${chunkJA3XYJ7ZBinding17.prefix}`)
          );
        }
      }
      let chunkJA3XYJ7ZBinding20 = u(
        chunkJA3XYJ7ZBinding19,
        chunkJA3XYJ7ZBinding17.name,
      );
      if (!chunkJA3XYJ7ZBinding20)
        throw Error(`Icon not found: ${chunkJA3XYJ7ZInput14}`);
      return chunkJA3XYJ7ZBinding20;
    },
    "getRegisteredIconData",
  );
  chunkJA3XYJ7ZBinding4 = defineFunctionName(async (chunkJA3XYJ7ZInput54) => {
    try {
      return (await chunkJA3XYJ7ZBinding3(chunkJA3XYJ7ZInput54), true);
    } catch {
      return false;
    }
  }, "isIconAvailable");
  chunkJA3XYJ7ZR = defineFunctionName(
    async (
      chunkJA3XYJ7ZInput38,
      chunkJA3XYJ7ZInput39,
      chunkJA3XYJ7ZInput40,
    ) => {
      let chunkJA3XYJ7ZBinding42;
      try {
        chunkJA3XYJ7ZBinding42 = await chunkJA3XYJ7ZBinding3(
          chunkJA3XYJ7ZInput38,
          chunkJA3XYJ7ZInput39?.fallbackPrefix,
        );
      } catch (chunkJA3XYJ7ZBinding59) {
        logger.error(chunkJA3XYJ7ZBinding59);
        chunkJA3XYJ7ZBinding42 = chunkJA3XYJ7ZS;
      }
      let chunkJA3XYJ7ZBinding43 = c(
        chunkJA3XYJ7ZBinding42,
        chunkJA3XYJ7ZInput39,
      );
      return L(
        i(esmS(chunkJA3XYJ7ZBinding43.body), {
          ...chunkJA3XYJ7ZBinding43.attributes,
          ...chunkJA3XYJ7ZInput40,
        }),
        y(),
      );
    },
    "getIconSVG",
  );
  defineFunctionName(chunkJA3XYJ7ZHelper1, "preprocessMarkdown");
  defineFunctionName(chunkJA3XYJ7ZHelper2, "markdownToLines");
  defineFunctionName(chunkJA3XYJ7ZHelper3, "markdownToHTML");
  defineFunctionName(chunkJA3XYJ7ZHelper4, "splitTextToChars");
  defineFunctionName(chunkJA3XYJ7ZHelper5, "splitWordToFitWidth");
  defineFunctionName(chunkJA3XYJ7ZHelper6, "splitWordToFitWidthRecursion");
  defineFunctionName(chunkJA3XYJ7ZHelper7, "splitLineToFitWidth");
  defineFunctionName(chunkJA3XYJ7ZHelper8, "splitLineToFitWidthRecursion");
  defineFunctionName(chunkJA3XYJ7ZHelper9, "applyStyle");
  defineFunctionName(chunkJA3XYJ7ZHelper10, "addHtmlSpan");
  defineFunctionName(chunkJA3XYJ7ZHelper11, "createTspan");
  defineFunctionName(chunkJA3XYJ7ZHelper12, "computeWidthOfText");
  defineFunctionName(chunkJA3XYJ7ZT, "computeDimensionOfText");
  defineFunctionName(chunkJA3XYJ7ZHelper13, "createFormattedText");
  defineFunctionName(chunkJA3XYJ7ZHelper14, "updateTextContentAndStyles");
  defineFunctionName(chunkJA3XYJ7ZO, "replaceIconSubstring");
  chunkJA3XYJ7ZN = defineFunctionName(
    async (
      chunkJA3XYJ7ZInput1,
      chunkJA3XYJ7ZInput2 = "",
      {
        style = "",
        isTitle = false,
        classes = "",
        useHtmlLabels = true,
        isNode = true,
        width = 200,
        addSvgBackground = false,
      } = {},
      chunkJA3XYJ7ZInput3,
    ) => {
      if (
        (logger.debug(
          "XYZ createText",
          chunkJA3XYJ7ZInput2,
          style,
          isTitle,
          classes,
          useHtmlLabels,
          isNode,
          "addSvgBackground: ",
          addSvgBackground,
        ),
        useHtmlLabels)
      ) {
        let chunkJA3XYJ7ZBinding37 = await chunkJA3XYJ7ZO(
            chunkS3R3BYOJI(
              chunkJA3XYJ7ZHelper3(chunkJA3XYJ7ZInput2, chunkJA3XYJ7ZInput3),
            ),
            chunkJA3XYJ7ZInput3,
          ),
          chunkJA3XYJ7ZBinding38 = chunkJA3XYJ7ZInput2.replace(/\\\\/g, "\\");
        return await chunkJA3XYJ7ZHelper10(
          chunkJA3XYJ7ZInput1,
          {
            isNode,
            label: O(chunkJA3XYJ7ZInput2)
              ? chunkJA3XYJ7ZBinding38
              : chunkJA3XYJ7ZBinding37,
            labelStyle: style.replace("fill:", "color:"),
          },
          width,
          classes,
          addSvgBackground,
          chunkJA3XYJ7ZInput3,
        );
      } else {
        let chunkJA3XYJ7ZBinding5 = chunkJA3XYJ7ZHelper13(
          width,
          chunkJA3XYJ7ZInput1,
          chunkJA3XYJ7ZHelper2(
            chunkJA3XYJ7ZInput2
              .replace(/<br\s*\/?>/g, "<br/>")
              .replace("<br>", "<br/>"),
            chunkJA3XYJ7ZInput3,
          ),
          chunkJA3XYJ7ZInput2 ? addSvgBackground : false,
        );
        if (isNode) {
          /stroke:/.exec(style) &&
            (style = style.replace("stroke:", "lineColor:"));
          let chunkJA3XYJ7ZBinding39 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/color:/g, "fill:");
          select(chunkJA3XYJ7ZBinding5).attr("style", chunkJA3XYJ7ZBinding39);
        } else {
          let chunkJA3XYJ7ZBinding26 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/background:/g, "fill:");
          select(chunkJA3XYJ7ZBinding5)
            .select("rect")
            .attr(
              "style",
              chunkJA3XYJ7ZBinding26.replace(/background:/g, "fill:"),
            );
          let chunkJA3XYJ7ZBinding27 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/color:/g, "fill:");
          select(chunkJA3XYJ7ZBinding5)
            .select("text")
            .attr("style", chunkJA3XYJ7ZBinding27);
        }
        return chunkJA3XYJ7ZBinding5;
      }
    },
    "createText",
  );
});
export {
  chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZN,
  chunkJA3XYJ7ZO,
  chunkJA3XYJ7ZR,
  chunkJA3XYJ7ZS,
  chunkJA3XYJ7ZT,
};
