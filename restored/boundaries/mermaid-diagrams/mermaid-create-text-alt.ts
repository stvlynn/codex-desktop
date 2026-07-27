// Restored from ref/webview/assets/chunk-U2HBQHQK-ggTnsiuo.js
// Mermaid createText / label rendering (alt). app-initial Frt → marked npm shim; Drt lazy-init dropped.
// Stage 3 candidate: IMPORT_MAP-rewritten npm aliases; no app-initial edge.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import { marked } from "../../vendor/marked";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { c, i, n, p, r, s, t, u } from "../iconify-utils";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A,
  F,
  k,
  R,
  s as chunkICPOFSXXS,
  y,
} from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWI, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
function chunkU2HBQHQKHelper1(chunkU2HBQHQKInput55, { markdownAutoWrap }) {
  return t(
    chunkU2HBQHQKInput55.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"),
  );
}
function chunkU2HBQHQKHelper2(chunkU2HBQHQKInput47) {
  return chunkU2HBQHQKInput47.split(/\\n|\n|<br\s*\/?>/gi).map(
    (item) =>
      item
        .trim()
        .match(/<[^>]+>|[^\s<>]+/g)
        ?.map((chunkU2HBQHQKInput66) => ({
          content: chunkU2HBQHQKInput66,
          type: "normal",
        })) ?? [],
  );
}
function chunkU2HBQHQKHelper3(chunkU2HBQHQKInput10, chunkU2HBQHQKInput11 = {}) {
  let chunkU2HBQHQKBinding14 = chunkU2HBQHQKHelper1(
      chunkU2HBQHQKInput10,
      chunkU2HBQHQKInput11,
    ),
    chunkU2HBQHQKBinding15 = marked.lexer(chunkU2HBQHQKBinding14),
    chunkU2HBQHQKBinding16 = [[]],
    chunkU2HBQHQKBinding17 = 0;
  function chunkU2HBQHQKHelper19(
    chunkU2HBQHQKInput22,
    chunkU2HBQHQKInput23 = "normal",
  ) {
    chunkU2HBQHQKInput22.type === "text"
      ? chunkU2HBQHQKInput22.text.split("\n").forEach((item, index) => {
          index !== 0 &&
            (chunkU2HBQHQKBinding17++, chunkU2HBQHQKBinding16.push([]));
          item.split(" ").forEach((_item) => {
            _item = _item.replace(/&#39;/g, "'");
            _item &&
              chunkU2HBQHQKBinding16[chunkU2HBQHQKBinding17].push({
                content: _item,
                type: chunkU2HBQHQKInput23,
              });
          });
        })
      : chunkU2HBQHQKInput22.type === "strong" ||
          chunkU2HBQHQKInput22.type === "em"
        ? chunkU2HBQHQKInput22.tokens.forEach((item) => {
            chunkU2HBQHQKHelper19(item, chunkU2HBQHQKInput22.type);
          })
        : chunkU2HBQHQKInput22.type === "html" &&
          chunkU2HBQHQKBinding16[chunkU2HBQHQKBinding17].push({
            content: chunkU2HBQHQKInput22.text,
            type: "normal",
          });
  }
  return (
    defineFunctionName(chunkU2HBQHQKHelper19, "processNode"),
    chunkU2HBQHQKBinding15.forEach((item) => {
      item.type === "paragraph"
        ? item.tokens?.forEach((chunkU2HBQHQKInput67) => {
            chunkU2HBQHQKHelper19(chunkU2HBQHQKInput67);
          })
        : item.type === "html"
          ? chunkU2HBQHQKBinding16[chunkU2HBQHQKBinding17].push({
              content: item.text,
              type: "normal",
            })
          : chunkU2HBQHQKBinding16[chunkU2HBQHQKBinding17].push({
              content: item.raw,
              type: "normal",
            });
    }),
    chunkU2HBQHQKBinding16
  );
}
function chunkU2HBQHQKHelper4(chunkU2HBQHQKInput61) {
  return chunkU2HBQHQKInput61
    ? `<p>${chunkU2HBQHQKInput61.replace(/\\n|\n/g, "<br />")}</p>`
    : "";
}
function chunkU2HBQHQKHelper5(chunkU2HBQHQKInput12, { markdownAutoWrap } = {}) {
  let chunkU2HBQHQKBinding18 = marked.lexer(chunkU2HBQHQKInput12);
  function chunkU2HBQHQKHelper20(chunkU2HBQHQKInput18) {
    return chunkU2HBQHQKInput18.type === "text"
      ? markdownAutoWrap === false
        ? chunkU2HBQHQKInput18.text
            .replace(/\n */g, "<br/>")
            .replace(/ /g, "&nbsp;")
        : chunkU2HBQHQKInput18.text.replace(/\n */g, "<br/>")
      : chunkU2HBQHQKInput18.type === "strong"
        ? `<strong>${chunkU2HBQHQKInput18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</strong>`
        : chunkU2HBQHQKInput18.type === "em"
          ? `<em>${chunkU2HBQHQKInput18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</em>`
          : chunkU2HBQHQKInput18.type === "paragraph"
            ? `<p>${chunkU2HBQHQKInput18.tokens?.map(chunkU2HBQHQKHelper20).join("")}</p>`
            : chunkU2HBQHQKInput18.type === "space"
              ? ""
              : chunkU2HBQHQKInput18.type === "html"
                ? `${chunkU2HBQHQKInput18.text}`
                : chunkU2HBQHQKInput18.type === "escape"
                  ? chunkU2HBQHQKInput18.text
                  : (logger.warn(
                      `Unsupported markdown: ${chunkU2HBQHQKInput18.type}`,
                    ),
                    chunkU2HBQHQKInput18.raw);
  }
  return (
    defineFunctionName(chunkU2HBQHQKHelper20, "output"),
    chunkU2HBQHQKBinding18.map(chunkU2HBQHQKHelper20).join("")
  );
}
function chunkU2HBQHQKHelper6(chunkU2HBQHQKInput59) {
  return Intl.Segmenter
    ? [...new Intl.Segmenter().segment(chunkU2HBQHQKInput59)].map(
        (item) => item.segment,
      )
    : [...chunkU2HBQHQKInput59];
}
function chunkU2HBQHQKHelper7(chunkU2HBQHQKInput62, chunkU2HBQHQKInput63) {
  return chunkU2HBQHQKHelper8(
    chunkU2HBQHQKInput62,
    [],
    chunkU2HBQHQKHelper6(chunkU2HBQHQKInput63.content),
    chunkU2HBQHQKInput63.type,
  );
}
function chunkU2HBQHQKHelper8(
  chunkU2HBQHQKInput30,
  chunkU2HBQHQKInput31,
  chunkU2HBQHQKInput32,
  chunkU2HBQHQKInput33,
) {
  if (chunkU2HBQHQKInput32.length === 0)
    return [
      {
        content: chunkU2HBQHQKInput31.join(""),
        type: chunkU2HBQHQKInput33,
      },
      {
        content: "",
        type: chunkU2HBQHQKInput33,
      },
    ];
  let [chunkU2HBQHQKBinding36, ...chunkU2HBQHQKBinding37] =
      chunkU2HBQHQKInput32,
    chunkU2HBQHQKBinding38 = [...chunkU2HBQHQKInput31, chunkU2HBQHQKBinding36];
  return chunkU2HBQHQKInput30([
    {
      content: chunkU2HBQHQKBinding38.join(""),
      type: chunkU2HBQHQKInput33,
    },
  ])
    ? chunkU2HBQHQKHelper8(
        chunkU2HBQHQKInput30,
        chunkU2HBQHQKBinding38,
        chunkU2HBQHQKBinding37,
        chunkU2HBQHQKInput33,
      )
    : (chunkU2HBQHQKInput31.length === 0 &&
        chunkU2HBQHQKBinding36 &&
        (chunkU2HBQHQKInput31.push(chunkU2HBQHQKBinding36),
        chunkU2HBQHQKInput32.shift()),
      [
        {
          content: chunkU2HBQHQKInput31.join(""),
          type: chunkU2HBQHQKInput33,
        },
        {
          content: chunkU2HBQHQKInput32.join(""),
          type: chunkU2HBQHQKInput33,
        },
      ]);
}
function chunkU2HBQHQKHelper9(chunkU2HBQHQKInput51, chunkU2HBQHQKInput52) {
  if (chunkU2HBQHQKInput51.some(({ content }) => content.includes("\n")))
    throw Error("splitLineToFitWidth does not support newlines in the line");
  return chunkU2HBQHQKHelper10(chunkU2HBQHQKInput51, chunkU2HBQHQKInput52);
}
function chunkU2HBQHQKHelper10(
  chunkU2HBQHQKInput24,
  chunkU2HBQHQKInput25,
  chunkU2HBQHQKInput26 = [],
  chunkU2HBQHQKInput27 = [],
) {
  if (chunkU2HBQHQKInput24.length === 0)
    return (
      chunkU2HBQHQKInput27.length > 0 &&
        chunkU2HBQHQKInput26.push(chunkU2HBQHQKInput27),
      chunkU2HBQHQKInput26.length > 0 ? chunkU2HBQHQKInput26 : []
    );
  let chunkU2HBQHQKBinding31 = "";
  chunkU2HBQHQKInput24[0].content === " " &&
    ((chunkU2HBQHQKBinding31 = " "), chunkU2HBQHQKInput24.shift());
  let chunkU2HBQHQKBinding32 = chunkU2HBQHQKInput24.shift() ?? {
      content: " ",
      type: "normal",
    },
    chunkU2HBQHQKBinding33 = [...chunkU2HBQHQKInput27];
  if (
    (chunkU2HBQHQKBinding31 !== "" &&
      chunkU2HBQHQKBinding33.push({
        content: chunkU2HBQHQKBinding31,
        type: "normal",
      }),
    chunkU2HBQHQKBinding33.push(chunkU2HBQHQKBinding32),
    chunkU2HBQHQKInput25(chunkU2HBQHQKBinding33))
  )
    return chunkU2HBQHQKHelper10(
      chunkU2HBQHQKInput24,
      chunkU2HBQHQKInput25,
      chunkU2HBQHQKInput26,
      chunkU2HBQHQKBinding33,
    );
  if (chunkU2HBQHQKInput27.length > 0) {
    chunkU2HBQHQKInput26.push(chunkU2HBQHQKInput27);
    chunkU2HBQHQKInput24.unshift(chunkU2HBQHQKBinding32);
  } else if (chunkU2HBQHQKBinding32.content) {
    let [chunkU2HBQHQKBinding59, chunkU2HBQHQKBinding60] = chunkU2HBQHQKHelper7(
      chunkU2HBQHQKInput25,
      chunkU2HBQHQKBinding32,
    );
    chunkU2HBQHQKInput26.push([chunkU2HBQHQKBinding59]);
    chunkU2HBQHQKBinding60.content &&
      chunkU2HBQHQKInput24.unshift(chunkU2HBQHQKBinding60);
  }
  return chunkU2HBQHQKHelper10(
    chunkU2HBQHQKInput24,
    chunkU2HBQHQKInput25,
    chunkU2HBQHQKInput26,
  );
}
function chunkU2HBQHQKHelper11(chunkU2HBQHQKInput64, chunkU2HBQHQKInput65) {
  chunkU2HBQHQKInput65 &&
    chunkU2HBQHQKInput64.attr("style", chunkU2HBQHQKInput65);
}
async function chunkU2HBQHQKHelper12(
  chunkU2HBQHQKInput4,
  chunkU2HBQHQKInput5,
  chunkU2HBQHQKInput6,
  chunkU2HBQHQKInput7,
  chunkU2HBQHQKInput8 = false,
  chunkU2HBQHQKInput9 = y(),
) {
  let chunkU2HBQHQKBinding8 = chunkU2HBQHQKInput4.append("foreignObject");
  chunkU2HBQHQKBinding8.attr(
    "width",
    `${Math.min(10 * chunkU2HBQHQKInput6, chunkU2HBQHQKBinding5)}px`,
  );
  chunkU2HBQHQKBinding8.attr(
    "height",
    `${Math.min(10 * chunkU2HBQHQKInput6, chunkU2HBQHQKBinding5)}px`,
  );
  let chunkU2HBQHQKBinding9 = chunkU2HBQHQKBinding8.append("xhtml:div"),
    chunkU2HBQHQKBinding10 = k(chunkU2HBQHQKInput5.label)
      ? await F(
          chunkU2HBQHQKInput5.label.replace(
            chunkICPOFSXXS.lineBreakRegex,
            "\n",
          ),
          chunkU2HBQHQKInput9,
        )
      : R(chunkU2HBQHQKInput5.label, chunkU2HBQHQKInput9),
    chunkU2HBQHQKBinding11 = chunkU2HBQHQKInput5.isNode
      ? "nodeLabel"
      : "edgeLabel",
    chunkU2HBQHQKBinding12 = chunkU2HBQHQKBinding9.append("span");
  chunkU2HBQHQKBinding12.html(chunkU2HBQHQKBinding10);
  chunkU2HBQHQKHelper11(chunkU2HBQHQKBinding12, chunkU2HBQHQKInput5.labelStyle);
  chunkU2HBQHQKBinding12.attr(
    "class",
    `${chunkU2HBQHQKBinding11} ${chunkU2HBQHQKInput7}`,
  );
  chunkU2HBQHQKHelper11(chunkU2HBQHQKBinding9, chunkU2HBQHQKInput5.labelStyle);
  chunkU2HBQHQKBinding9.style("display", "table-cell");
  chunkU2HBQHQKBinding9.style("white-space", "nowrap");
  chunkU2HBQHQKBinding9.style("line-height", "1.5");
  chunkU2HBQHQKInput6 !== 1 / 0 &&
    (chunkU2HBQHQKBinding9.style("max-width", chunkU2HBQHQKInput6 + "px"),
    chunkU2HBQHQKBinding9.style("text-align", "center"));
  chunkU2HBQHQKBinding9.attr("xmlns", "http://www.w3.org/1999/xhtml");
  chunkU2HBQHQKInput8 && chunkU2HBQHQKBinding9.attr("class", "labelBkg");
  let chunkU2HBQHQKBinding13 = chunkU2HBQHQKBinding9
    .node()
    .getBoundingClientRect();
  return (
    chunkU2HBQHQKBinding13.width === chunkU2HBQHQKInput6 &&
      (chunkU2HBQHQKBinding9.style("display", "table"),
      chunkU2HBQHQKBinding9.style("white-space", "break-spaces"),
      chunkU2HBQHQKBinding9.style("width", chunkU2HBQHQKInput6 + "px"),
      (chunkU2HBQHQKBinding13 = chunkU2HBQHQKBinding9
        .node()
        .getBoundingClientRect())),
    chunkU2HBQHQKBinding8.node()
  );
}
function chunkU2HBQHQKHelper13(
  chunkU2HBQHQKInput43,
  chunkU2HBQHQKInput44,
  chunkU2HBQHQKInput45,
  chunkU2HBQHQKInput46 = false,
) {
  let chunkU2HBQHQKBinding46 = chunkU2HBQHQKInput43
    .append("tspan")
    .attr("class", "text-outer-tspan")
    .attr("x", 0)
    .attr("y", chunkU2HBQHQKInput44 * chunkU2HBQHQKInput45 - 0.1 + "em")
    .attr("dy", chunkU2HBQHQKInput45 + "em");
  return (
    chunkU2HBQHQKInput46 &&
      chunkU2HBQHQKBinding46.attr("text-anchor", "middle"),
    chunkU2HBQHQKBinding46
  );
}
function chunkU2HBQHQKHelper14(
  chunkU2HBQHQKInput56,
  chunkU2HBQHQKInput57,
  chunkU2HBQHQKInput58,
) {
  let chunkU2HBQHQKBinding53 = chunkU2HBQHQKInput56.append("text"),
    chunkU2HBQHQKBinding54 = chunkU2HBQHQKHelper13(
      chunkU2HBQHQKBinding53,
      1,
      chunkU2HBQHQKInput57,
    );
  chunkU2HBQHQKHelper17(chunkU2HBQHQKBinding54, chunkU2HBQHQKInput58);
  let chunkU2HBQHQKBinding55 = chunkU2HBQHQKBinding54
    .node()
    .getComputedTextLength();
  return (chunkU2HBQHQKBinding53.remove(), chunkU2HBQHQKBinding55);
}
function chunkU2HBQHQKT(
  chunkU2HBQHQKInput48,
  chunkU2HBQHQKInput49,
  chunkU2HBQHQKInput50,
) {
  let chunkU2HBQHQKBinding49 = chunkU2HBQHQKInput48.append("text"),
    chunkU2HBQHQKBinding50 = chunkU2HBQHQKHelper13(
      chunkU2HBQHQKBinding49,
      1,
      chunkU2HBQHQKInput49,
    );
  chunkU2HBQHQKHelper17(chunkU2HBQHQKBinding50, [
    {
      content: chunkU2HBQHQKInput50,
      type: "normal",
    },
  ]);
  let chunkU2HBQHQKBinding51 = chunkU2HBQHQKBinding50
    .node()
    ?.getBoundingClientRect();
  return (
    chunkU2HBQHQKBinding51 && chunkU2HBQHQKBinding49.remove(),
    chunkU2HBQHQKBinding51
  );
}
function chunkU2HBQHQKHelper15(
  chunkU2HBQHQKInput13,
  chunkU2HBQHQKInput14,
  chunkU2HBQHQKInput15,
  chunkU2HBQHQKInput16 = false,
  chunkU2HBQHQKInput17 = false,
) {
  let chunkU2HBQHQKBinding20 = chunkU2HBQHQKInput14.append("g"),
    chunkU2HBQHQKBinding21 = chunkU2HBQHQKBinding20
      .insert("rect")
      .attr("class", "background")
      .attr("style", "stroke: none"),
    chunkU2HBQHQKBinding22 = chunkU2HBQHQKBinding20
      .append("text")
      .attr("y", "-10.1");
  chunkU2HBQHQKInput17 && chunkU2HBQHQKBinding22.attr("text-anchor", "middle");
  let chunkU2HBQHQKBinding23 = 0;
  for (let chunkU2HBQHQKBinding52 of chunkU2HBQHQKInput15) {
    let chunkU2HBQHQKBinding56 = defineFunctionName(
        (chunkU2HBQHQKInput68) =>
          chunkU2HBQHQKHelper14(
            chunkU2HBQHQKBinding20,
            1.1,
            chunkU2HBQHQKInput68,
          ) <= chunkU2HBQHQKInput13,
        "checkWidth",
      ),
      chunkU2HBQHQKBinding57 = chunkU2HBQHQKBinding56(chunkU2HBQHQKBinding52)
        ? [chunkU2HBQHQKBinding52]
        : chunkU2HBQHQKHelper9(chunkU2HBQHQKBinding52, chunkU2HBQHQKBinding56);
    for (let chunkU2HBQHQKBinding62 of chunkU2HBQHQKBinding57) {
      chunkU2HBQHQKHelper17(
        chunkU2HBQHQKHelper13(
          chunkU2HBQHQKBinding22,
          chunkU2HBQHQKBinding23,
          1.1,
          chunkU2HBQHQKInput17,
        ),
        chunkU2HBQHQKBinding62,
      );
      chunkU2HBQHQKBinding23++;
    }
  }
  if (chunkU2HBQHQKInput16) {
    let chunkU2HBQHQKBinding47 = chunkU2HBQHQKBinding22.node().getBBox();
    return (
      chunkU2HBQHQKBinding21
        .attr("x", chunkU2HBQHQKBinding47.x - 2)
        .attr("y", chunkU2HBQHQKBinding47.y - 2)
        .attr("width", chunkU2HBQHQKBinding47.width + 4)
        .attr("height", chunkU2HBQHQKBinding47.height + 4),
      chunkU2HBQHQKBinding20.node()
    );
  } else return chunkU2HBQHQKBinding22.node();
}
function chunkU2HBQHQKHelper16(chunkU2HBQHQKInput42) {
  return chunkU2HBQHQKInput42.replace(
    /&(amp|lt|gt);/g,
    (chunkU2HBQHQKInput53, chunkU2HBQHQKInput54) => {
      switch (chunkU2HBQHQKInput54) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        default:
          return chunkU2HBQHQKInput53;
      }
    },
  );
}
function chunkU2HBQHQKHelper17(chunkU2HBQHQKInput34, chunkU2HBQHQKInput35) {
  chunkU2HBQHQKInput34.text("");
  chunkU2HBQHQKInput35.forEach((item, index) => {
    let chunkU2HBQHQKBinding42 = chunkU2HBQHQKInput34
      .append("tspan")
      .attr("font-style", item.type === "em" ? "italic" : "normal")
      .attr("class", "text-inner-tspan")
      .attr("font-weight", item.type === "strong" ? "bold" : "normal");
    index === 0
      ? chunkU2HBQHQKBinding42.text(chunkU2HBQHQKHelper16(item.content))
      : chunkU2HBQHQKBinding42.text(" " + chunkU2HBQHQKHelper16(item.content));
  });
}
async function chunkU2HBQHQKHelper18(
  chunkU2HBQHQKInput28,
  chunkU2HBQHQKInput29 = {},
) {
  let chunkU2HBQHQKBinding34 = [];
  chunkU2HBQHQKInput28.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    (chunkU2HBQHQKInput36, chunkU2HBQHQKInput37, chunkU2HBQHQKInput38) => (
      chunkU2HBQHQKBinding34.push(
        (async () => {
          let chunkU2HBQHQKBinding48 = `${chunkU2HBQHQKInput37}:${chunkU2HBQHQKInput38}`;
          return (await chunkU2HBQHQKBinding4(chunkU2HBQHQKBinding48))
            ? await chunkU2HBQHQKR(chunkU2HBQHQKBinding48, undefined, {
                class: "label-icon",
              })
            : `<i class='${R(chunkU2HBQHQKInput36, chunkU2HBQHQKInput29).replace(":", " ")}'></i>`;
        })(),
      ),
      chunkU2HBQHQKInput36
    ),
  );
  let chunkU2HBQHQKBinding35 = await Promise.all(chunkU2HBQHQKBinding34);
  return chunkU2HBQHQKInput28.replace(
    /(fa[bklrs]?):fa-([\w-]+)/g,
    () => chunkU2HBQHQKBinding35.shift() ?? "",
  );
}
var chunkU2HBQHQKO,
  chunkU2HBQHQKBinding1,
  chunkU2HBQHQKBinding2,
  chunkU2HBQHQKA,
  chunkU2HBQHQKBinding3,
  chunkU2HBQHQKBinding4,
  chunkU2HBQHQKR,
  chunkU2HBQHQKBinding5,
  chunkU2HBQHQKN;
export const chunkU2HBQHQKI = esmInit(() => {
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  r();
  ensureD3SelectionRuntimeT();
  n();
  chunkU2HBQHQKO = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80,
  };
  chunkU2HBQHQKBinding1 = new Map();
  chunkU2HBQHQKBinding2 = new Map();
  chunkU2HBQHQKA = defineFunctionName((chunkU2HBQHQKInput21) => {
    for (let chunkU2HBQHQKBinding30 of chunkU2HBQHQKInput21) {
      if (!chunkU2HBQHQKBinding30.name)
        throw Error(
          'Invalid icon loader. Must have a "name" property with non-empty string value.',
        );
      if (
        (logger.debug("Registering icon pack:", chunkU2HBQHQKBinding30.name),
        "loader" in chunkU2HBQHQKBinding30)
      )
        chunkU2HBQHQKBinding2.set(
          chunkU2HBQHQKBinding30.name,
          chunkU2HBQHQKBinding30.loader,
        );
      else if ("icons" in chunkU2HBQHQKBinding30)
        chunkU2HBQHQKBinding1.set(
          chunkU2HBQHQKBinding30.name,
          chunkU2HBQHQKBinding30.icons,
        );
      else
        throw (
          logger.error("Invalid icon loader:", chunkU2HBQHQKBinding30),
          Error(
            'Invalid icon loader. Must have either "icons" or "loader" property.',
          )
        );
    }
  }, "registerIconPacks");
  chunkU2HBQHQKBinding3 = defineFunctionName(
    async (chunkU2HBQHQKInput19, chunkU2HBQHQKInput20) => {
      let chunkU2HBQHQKBinding24 = p(
        chunkU2HBQHQKInput19,
        true,
        chunkU2HBQHQKInput20 !== undefined,
      );
      if (!chunkU2HBQHQKBinding24)
        throw Error(`Invalid icon name: ${chunkU2HBQHQKInput19}`);
      let chunkU2HBQHQKBinding25 =
        chunkU2HBQHQKBinding24.prefix || chunkU2HBQHQKInput20;
      if (!chunkU2HBQHQKBinding25)
        throw Error(`Icon name must contain a prefix: ${chunkU2HBQHQKInput19}`);
      let chunkU2HBQHQKBinding26 = chunkU2HBQHQKBinding1.get(
        chunkU2HBQHQKBinding25,
      );
      if (!chunkU2HBQHQKBinding26) {
        let chunkU2HBQHQKBinding43 = chunkU2HBQHQKBinding2.get(
          chunkU2HBQHQKBinding25,
        );
        if (!chunkU2HBQHQKBinding43)
          throw Error(`Icon set not found: ${chunkU2HBQHQKBinding24.prefix}`);
        try {
          chunkU2HBQHQKBinding26 = {
            ...(await chunkU2HBQHQKBinding43()),
            prefix: chunkU2HBQHQKBinding25,
          };
          chunkU2HBQHQKBinding1.set(
            chunkU2HBQHQKBinding25,
            chunkU2HBQHQKBinding26,
          );
        } catch (chunkU2HBQHQKBinding58) {
          throw (
            logger.error(chunkU2HBQHQKBinding58),
            Error(`Failed to load icon set: ${chunkU2HBQHQKBinding24.prefix}`)
          );
        }
      }
      let chunkU2HBQHQKBinding27 = u(
        chunkU2HBQHQKBinding26,
        chunkU2HBQHQKBinding24.name,
      );
      if (!chunkU2HBQHQKBinding27)
        throw Error(`Icon not found: ${chunkU2HBQHQKInput19}`);
      return chunkU2HBQHQKBinding27;
    },
    "getRegisteredIconData",
  );
  chunkU2HBQHQKBinding4 = defineFunctionName(async (chunkU2HBQHQKInput60) => {
    try {
      return (await chunkU2HBQHQKBinding3(chunkU2HBQHQKInput60), true);
    } catch {
      return false;
    }
  }, "isIconAvailable");
  chunkU2HBQHQKR = defineFunctionName(
    async (
      chunkU2HBQHQKInput39,
      chunkU2HBQHQKInput40,
      chunkU2HBQHQKInput41,
    ) => {
      let chunkU2HBQHQKBinding44;
      try {
        chunkU2HBQHQKBinding44 = await chunkU2HBQHQKBinding3(
          chunkU2HBQHQKInput39,
          chunkU2HBQHQKInput40?.fallbackPrefix,
        );
      } catch (chunkU2HBQHQKBinding61) {
        logger.error(chunkU2HBQHQKBinding61);
        chunkU2HBQHQKBinding44 = chunkU2HBQHQKO;
      }
      let chunkU2HBQHQKBinding45 = c(
        chunkU2HBQHQKBinding44,
        chunkU2HBQHQKInput40,
      );
      return R(
        i(s(chunkU2HBQHQKBinding45.body), {
          ...chunkU2HBQHQKBinding45.attributes,
          ...chunkU2HBQHQKInput41,
        }),
        y(),
      );
    },
    "getIconSVG",
  );
  defineFunctionName(chunkU2HBQHQKHelper1, "preprocessMarkdown");
  defineFunctionName(chunkU2HBQHQKHelper2, "nonMarkdownToLines");
  defineFunctionName(chunkU2HBQHQKHelper3, "markdownToLines");
  defineFunctionName(chunkU2HBQHQKHelper4, "nonMarkdownToHTML");
  defineFunctionName(chunkU2HBQHQKHelper5, "markdownToHTML");
  defineFunctionName(chunkU2HBQHQKHelper6, "splitTextToChars");
  defineFunctionName(chunkU2HBQHQKHelper7, "splitWordToFitWidth");
  defineFunctionName(chunkU2HBQHQKHelper8, "splitWordToFitWidthRecursion");
  defineFunctionName(chunkU2HBQHQKHelper9, "splitLineToFitWidth");
  defineFunctionName(chunkU2HBQHQKHelper10, "splitLineToFitWidthRecursion");
  defineFunctionName(chunkU2HBQHQKHelper11, "applyStyle");
  chunkU2HBQHQKBinding5 = 16384;
  defineFunctionName(chunkU2HBQHQKHelper12, "addHtmlSpan");
  defineFunctionName(chunkU2HBQHQKHelper13, "createTspan");
  defineFunctionName(chunkU2HBQHQKHelper14, "computeWidthOfText");
  defineFunctionName(chunkU2HBQHQKT, "computeDimensionOfText");
  defineFunctionName(chunkU2HBQHQKHelper15, "createFormattedText");
  defineFunctionName(chunkU2HBQHQKHelper16, "decodeHTMLEntities");
  defineFunctionName(chunkU2HBQHQKHelper17, "updateTextContentAndStyles");
  defineFunctionName(chunkU2HBQHQKHelper18, "replaceIconSubstring");
  chunkU2HBQHQKN = defineFunctionName(
    async (
      chunkU2HBQHQKInput1,
      chunkU2HBQHQKInput2 = "",
      {
        style = "",
        isTitle = false,
        classes = "",
        useHtmlLabels = true,
        markdown = true,
        isNode = true,
        width = 200,
        addSvgBackground = false,
      } = {},
      chunkU2HBQHQKInput3,
    ) => {
      if (
        (logger.debug(
          "XYZ createText",
          chunkU2HBQHQKInput2,
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
        let chunkU2HBQHQKBinding39 = await chunkU2HBQHQKHelper18(
            chunk5PVQY5BWI(
              markdown
                ? chunkU2HBQHQKHelper5(chunkU2HBQHQKInput2, chunkU2HBQHQKInput3)
                : chunkU2HBQHQKHelper4(chunkU2HBQHQKInput2),
            ),
            chunkU2HBQHQKInput3,
          ),
          chunkU2HBQHQKBinding40 = chunkU2HBQHQKInput2.replace(/\\\\/g, "\\");
        return await chunkU2HBQHQKHelper12(
          chunkU2HBQHQKInput1,
          {
            isNode,
            label: k(chunkU2HBQHQKInput2)
              ? chunkU2HBQHQKBinding40
              : chunkU2HBQHQKBinding39,
            labelStyle: style.replace("fill:", "color:"),
          },
          width,
          classes,
          addSvgBackground,
          chunkU2HBQHQKInput3,
        );
      } else {
        let chunkU2HBQHQKBinding6 = chunk5PVQY5BWI(
            chunkU2HBQHQKInput2.replace(/<br\s*\/?>/g, "<br/>"),
          ),
          chunkU2HBQHQKBinding7 = chunkU2HBQHQKHelper15(
            width,
            chunkU2HBQHQKInput1,
            markdown
              ? chunkU2HBQHQKHelper3(
                  chunkU2HBQHQKBinding6.replace("<br>", "<br/>"),
                  chunkU2HBQHQKInput3,
                )
              : chunkU2HBQHQKHelper2(chunkU2HBQHQKBinding6),
            chunkU2HBQHQKInput2 ? addSvgBackground : false,
            !isNode,
          );
        if (isNode) {
          /stroke:/.exec(style) &&
            (style = style.replace("stroke:", "lineColor:"));
          let chunkU2HBQHQKBinding41 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/color:/g, "fill:");
          select(chunkU2HBQHQKBinding7).attr("style", chunkU2HBQHQKBinding41);
        } else {
          let chunkU2HBQHQKBinding28 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/background:/g, "fill:");
          select(chunkU2HBQHQKBinding7)
            .select("rect")
            .attr(
              "style",
              chunkU2HBQHQKBinding28.replace(/background:/g, "fill:"),
            );
          let chunkU2HBQHQKBinding29 = style
            .replace(/stroke:[^;]+;?/g, "")
            .replace(/stroke-width:[^;]+;?/g, "")
            .replace(/fill:[^;]+;?/g, "")
            .replace(/color:/g, "fill:");
          select(chunkU2HBQHQKBinding7)
            .select("text")
            .attr("style", chunkU2HBQHQKBinding29);
        }
        return (
          isTitle
            ? select(chunkU2HBQHQKBinding7)
                .selectAll("tspan.text-outer-tspan")
                .classed("title-row", true)
            : select(chunkU2HBQHQKBinding7)
                .selectAll("tspan.text-outer-tspan")
                .classed("row", true),
          chunkU2HBQHQKBinding7
        );
      }
    },
    "createText",
  );
});
export {
  chunkU2HBQHQKA,
  chunkU2HBQHQKN,
  chunkU2HBQHQKO,
  chunkU2HBQHQKR,
  chunkU2HBQHQKT,
};
