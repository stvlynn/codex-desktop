// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: HTML table walk + cell style parse (legacy Ypt..Qpt / 1009–1013).
// Stage-3 wave-117.

import { htmH } from "./boundary-hooks";

export function Ypt(props: any) {
  let htmBind13364 = [];
  for (let htmBind14281 of props.childNodes)
    if (htmBind14281 instanceof htmBind1956.HTMLElement) {
      if (htmBind14281.rawTagName === "tr") {
        htmBind13364.push(htmBind14281);
        continue;
      }
      if (
        htmBind14281.rawTagName === "thead" ||
        htmBind14281.rawTagName === "tbody" ||
        htmBind14281.rawTagName === "tfoot"
      )
        for (let htmBind21694 of htmBind14281.childNodes)
          htmBind21694 instanceof htmBind1956.HTMLElement &&
            htmBind21694.rawTagName === "tr" &&
            htmBind13364.push(htmBind21694);
    }
  return htmBind13364;
}
export function Xpt(props: any) {
  let htmBind19213 = [];
  for (let htmBind20657 of props.childNodes)
    htmBind20657 instanceof htmBind1956.HTMLElement &&
      (htmBind20657.rawTagName === "td" || htmBind20657.rawTagName === "th") &&
      htmBind19213.push(htmBind20657);
  return htmBind19213;
}
export function Zpt(htmIn4672: any, htmIn4673: any) {
  let htmBind13950 = [],
    htmBind13951 = htmIn4672.childNodes.find(
      (item) =>
        item instanceof htmBind1956.HTMLElement &&
        item.rawTagName === "colgroup",
    );
  if (!htmBind13951) return htmBind13950;
  for (let htmBind17976 of htmBind13951.childNodes) {
    if (
      !(htmBind17976 instanceof htmBind1956.HTMLElement) ||
      htmBind17976.rawTagName !== "col"
    )
      continue;
    let htmBind18784 = parseTableRows(htmBind17976, htmIn4673),
      htmBind18785 = xmt(htmBind17976.getAttribute("width")),
      htmBind18786 = xmt(htmBind18784.get("width"));
    htmBind13950.push(htmBind18785 ?? htmBind18786 ?? 0);
  }
  return htmBind13950;
}
export function Qpt(htmIn1444: any, htmIn1445: any, htmIn1446: any) {
  let htmBind7351 = smt(
      omt(htmIn1445, parseTableRows(htmIn1444, htmIn1446)),
      imt(htmIn1444),
    ),
    htmBind7352 = emt($pt(htmIn1444)),
    htmBind7353 = cmt(htmBind7351),
    htmBind7354 = lmt(htmBind7351),
    htmBind7355 = fmt(htmBind7351.get("mso-number-format")),
    htmBind7356 = pmt(htmBind7351.get("font-size")),
    htmBind7357 = mmt(htmBind7351.get("font-family")),
    htmBind7358 = ymt(htmBind7351.get("text-decoration")),
    htmBind7359 = parseCssColor(
      htmBind7351.get("background-color") ?? Smt(htmBind7351.get("background")),
    ),
    htmBind7360 = hmt(htmBind7351.get("text-align")),
    htmBind7361 = gmt(htmBind7351.get("vertical-align")),
    htmBind7362 = dmt(htmBind7351.get("white-space")),
    htmBind7363 = _mt(htmBind7351.get("font-weight")),
    htmBind7364 = vmt(htmBind7351.get("font-style")),
    htmBind7365 = {};
  htmBind7363 !== undefined && (htmBind7365.bold = htmBind7363);
  htmBind7364 !== undefined && (htmBind7365.italic = htmBind7364);
  htmBind7358.underline !== undefined &&
    (htmBind7365.underline = htmBind7358.underline);
  htmBind7358.strike !== undefined && (htmBind7365.strike = htmBind7358.strike);
  let htmBind7366 = parseCssColor(htmBind7351.get("color"));
  return (
    htmBind7366 && (htmBind7365.color = htmBind7366),
    htmBind7359 && (htmBind7365.bg = htmBind7359),
    htmBind7360 && (htmBind7365.align = htmBind7360),
    htmBind7361 && (htmBind7365.valign = htmBind7361),
    htmBind7362 !== undefined && (htmBind7365.wrap = htmBind7362),
    htmBind7355 && (htmBind7365.numFmt = htmBind7355),
    htmBind7357 && (htmBind7365.fontFamily = htmBind7357),
    htmBind7356 !== undefined && (htmBind7365.fontSizePt = htmBind7356),
    Object.keys(htmBind7353).length > 0 && (htmBind7365.border = htmBind7353),
    htmBind7354 && (htmBind7365.diagonal = htmBind7354),
    Object.keys(htmBind7365).length > 0
      ? {
          v: htmBind7352,
          fmt: htmBind7365,
        }
      : {
          v: htmBind7352,
        }
  );
}
export function $pt(htmIn4899: any) {
  if (htmIn4899 instanceof htmBind1956.TextNode) return htmIn4899.text;
  let htmBind14303 = "";
  for (let htmBind16257 of htmIn4899.childNodes) {
    if (
      htmBind16257.nodeType === htmBind1956.NodeType.TEXT_NODE &&
      htmBind16257 instanceof htmBind1956.TextNode
    ) {
      htmBind14303 += htmBind16257.text;
      continue;
    }
    if (htmBind16257 instanceof htmBind1956.HTMLElement) {
      if (htmBind16257.rawTagName === "br") {
        htmBind14303 += "\n";
        continue;
      }
      htmBind14303 += $pt(htmBind16257);
    }
  }
  return htmBind14303;
}
export function emt(htmIn7729: any) {
  return htmIn7729
    .replace(/\r\n?/g, "\n")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}
export function tmt(htmIn4175: any) {
  let htmBind13198 = [];
  for (let htmBind14117 of htmIn4175.querySelectorAll("style")) {
    let htmBind14938 = nmt(htmBind14117.text);
    for (let htmBind15646 of htmBind14938.matchAll(/([^{}]+)\{([^{}]*)\}/gms)) {
      let htmBind16891 = htmBind15646[1]?.trim(),
        htmBind16892 = htmBind15646[2]?.trim();
      if (!htmBind16891 || !htmBind16892 || htmBind16891.startsWith("@"))
        continue;
      let htmBind16893 = htmBind16891
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      htmBind16893.length !== 0 &&
        htmBind13198.push({
          selectors: htmBind16893,
          style: parseInlineStyle(htmBind16892),
        });
    }
  }
  return htmBind13198;
}
export function nmt(htmIn12961: any) {
  return htmIn12961.replace(/<!--/g, "").replace(/-->/g, "");
}
export function parseTableRows(htmIn9273: any, htmIn9274: any) {
  let htmBind19830 = new Map();
  for (let htmBind22564 of htmIn9274)
    htmBind22564.selectors.some((item) => rmt(htmIn9273, item)) &&
      assignStyleMap(htmBind19830, htmBind22564.style);
  return (
    assignStyleMap(
      htmBind19830,
      parseInlineStyle(htmIn9273.getAttribute("style")),
    ),
    htmBind19830
  );
}
export function rmt(htmIn3384: any, htmIn3385: any) {
  let htmBind11733 = htmIn3385.trim().toLowerCase();
  if (
    !htmBind11733 ||
    htmBind11733.includes(" ") ||
    htmBind11733.includes(">") ||
    htmBind11733.includes(":") ||
    htmBind11733.includes("[") ||
    htmBind11733.includes("#")
  )
    return false;
  let htmBind11734 = htmBind11733.split(".").filter(Boolean),
    htmBind11735 = htmBind11733.startsWith(".")
      ? undefined
      : htmBind11734.shift();
  if (htmBind11735 && htmIn3384.rawTagName !== htmBind11735) return false;
  if (htmBind11734.length === 0) return true;
  let htmBind11736 = new Set(
    (htmIn3384.getAttribute("class") ?? "")
      .split(/\s+/)
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean),
  );
  return htmBind11734.every((item) => htmBind11736.has(item));
}
export function imt(htmIn8526: any) {
  let htmBind19041 = new Map();
  for (let htmBind20689 of htmIn8526.childNodes)
    htmBind20689 instanceof htmBind1956.HTMLElement &&
      (assignStyleMap(htmBind19041, amt(htmBind20689)),
      assignStyleMap(
        htmBind19041,
        parseInlineStyle(htmBind20689.getAttribute("style")),
      ),
      assignStyleMap(htmBind19041, imt(htmBind20689)));
  return htmBind19041;
}
export function amt(htmIn4363: any) {
  switch (htmIn4363.rawTagName) {
    case "b":
    case "strong":
      return new Map([["font-weight", "bold"]]);
    case "i":
    case "em":
      return new Map([["font-style", "italic"]]);
    case "u":
      return new Map([["text-decoration", "underline"]]);
    case "s":
    case "strike":
    case "del":
      return new Map([["text-decoration", "line-through"]]);
    default:
      return new Map();
  }
}
export function parseInlineStyle(props: any) {
  let htmBind16816 = new Map();
  if (!props) return htmBind16816;
  for (let htmBind18849 of props.split(";")) {
    let htmBind19724 = htmBind18849.indexOf(":");
    if (htmBind19724 === -1) continue;
    let htmBind19725 = htmBind18849.slice(0, htmBind19724).trim().toLowerCase(),
      htmBind19726 = htmBind18849.slice(htmBind19724 + 1).trim();
    htmBind19725 &&
      htmBind19726 &&
      htmBind16816.set(htmBind19725, htmBind19726);
  }
  return htmBind16816;
}
export function omt(...htmIn11942: any[]) {
  let htmBind22198 = new Map();
  for (let htmBind23077 of htmIn11942)
    htmBind23077 && assignStyleMap(htmBind22198, htmBind23077);
  return htmBind22198;
}
export function smt(htmIn11179: any, htmIn11180: any) {
  let htmBind21662 = new Map(htmIn11179);
  for (let [htmBind22953, htmBind22954] of htmIn11180)
    htmBind21662.has(htmBind22953) ||
      htmBind21662.set(htmBind22953, htmBind22954);
  return htmBind21662;
}
export function assignStyleMap(htmIn14130: any, htmIn14131: any) {
  for (let [htmBind23069, htmBind23070] of htmIn14131)
    htmIn14130.set(htmBind23069, htmBind23070);
}
export function cmt(htmIn7526: any) {
  let htmBind18007 = {};
  for (let htmBind19448 of ["top", "right", "bottom", "left"]) {
    let htmBind20942 = parseDiagonalBorder(
      htmIn7526.get(`mso-border-${htmBind19448}-alt`) ??
        htmIn7526.get(`border-${htmBind19448}`) ??
        htmIn7526.get("border"),
    );
    htmBind20942 && (htmBind18007[htmBind19448] = htmBind20942);
  }
  return htmBind18007;
}
export function lmt(htmIn7248: any) {
  let htmBind17609 = parseDiagonalBorder(htmIn7248.get("mso-diagonal-up")),
    htmBind17610 = parseDiagonalBorder(htmIn7248.get("mso-diagonal-down"));
  if (!(!htmBind17609 && !htmBind17610))
    return {
      style: htmBind17609?.style ?? htmBind17610?.style,
      color: htmBind17609?.color ?? htmBind17610?.color,
      up: !!htmBind17609,
      down: !!htmBind17610,
    };
}
export function parseDiagonalBorder(props: any) {
  if (!props) return;
  let htmBind13505 = props.replaceAll('"', "").trim().toLowerCase();
  if (
    !htmBind13505 ||
    htmBind13505 === "none" ||
    htmBind13505.includes("transparent")
  )
    return;
  let htmBind13506 = htmBind13505.match(
      /\b(double|dotted|dashed|solid|hair|thin|medium|thick)\b/,
    )?.[1],
    htmBind13507 = htmBind13505.match(/(\d+(?:\.\d+)?)(px|pt)\b/) ?? undefined,
    htmBind13508 = Smt(props),
    htmBind13509 = parseCssColor(htmBind13508);
  if (htmBind13508 && !htmBind13509) return;
  let htmBind13510 = umt(htmBind13506, htmBind13507);
  if (!(!htmBind13510 && !htmBind13509))
    return {
      style: htmBind13510,
      color: htmBind13509,
    };
}
export function umt(htmIn4240: any, htmIn4241: any) {
  if (htmIn4240)
    switch (htmIn4240) {
      case "double":
      case "dotted":
      case "dashed":
      case "hair":
      case "thin":
      case "medium":
      case "thick":
        return htmIn4240;
      case "solid": {
        let htmBind19543 = htmIn4241 ? Number(htmIn4241[1]) : 1,
          htmBind19544 =
            (htmIn4241?.[2] ?? "px") === "pt"
              ? (htmBind19543 * 96) / 72
              : htmBind19543;
        return htmBind19544 >= 2.5
          ? "thick"
          : htmBind19544 >= 1.5
            ? "medium"
            : "thin";
      }
      default:
        return;
    }
}
export function dmt(htmIn7754: any) {
  if (!htmIn7754) return;
  let htmBind18234 = htmIn7754.toLowerCase();
  if (htmBind18234.includes("nowrap")) return false;
  if (
    htmBind18234.includes("normal") ||
    htmBind18234.includes("pre-wrap") ||
    htmBind18234.includes("break-spaces")
  )
    return true;
}
export function fmt(htmIn7730: any) {
  if (!htmIn7730) return;
  let htmBind18215 = htmIn7730.trim();
  return (
    (htmBind18215.startsWith('"') && htmBind18215.endsWith('"')) ||
    (htmBind18215.startsWith("'") && htmBind18215.endsWith("'"))
      ? htmBind18215.slice(1, -1)
      : htmBind18215
  ).replace(/\\(.)/g, "$1");
}
export function pmt(htmIn7144: any) {
  if (!htmIn7144) return;
  let htmBind17491 = htmIn7144.trim().match(/^(\d+(?:\.\d+)?)(px|pt)$/i);
  if (!htmBind17491) return;
  let htmBind17492 = Number(htmBind17491[1]);
  if (!(!Number.isFinite(htmBind17492) || htmBind17492 <= 0))
    return (htmBind17491[2] ?? "px").toLowerCase() === "px"
      ? (htmBind17492 * 72) / 96
      : htmBind17492;
}
export function mmt(htmIn9990: any) {
  if (htmIn9990)
    return (
      htmIn9990
        .split(",")[0]
        ?.trim()
        .replace(/^['"]|['"]$/g, "") || undefined
    );
}
export function hmt(htmIn8047: any) {
  switch (htmIn8047?.trim().toLowerCase()) {
    case "left":
      return "left";
    case "center":
      return "center";
    case "right":
      return "right";
    default:
      return;
  }
}
export function gmt(htmIn7527: any) {
  switch (htmIn7527?.trim().toLowerCase()) {
    case "top":
      return "top";
    case "center":
    case "middle":
      return "middle";
    case "bottom":
      return "bottom";
    default:
      return;
  }
}
export function _mt(htmIn8287: any) {
  if (!htmIn8287) return;
  let htmBind18787 = htmIn8287.trim().toLowerCase();
  if (htmBind18787 === "bold") return true;
  if (htmBind18787 === "normal") return false;
  let htmBind18788 = Number(htmBind18787);
  if (Number.isFinite(htmBind18788)) return htmBind18788 >= 600;
}
export function vmt(htmIn8107: any) {
  if (htmIn8107)
    switch (htmIn8107.trim().toLowerCase()) {
      case "italic":
      case "oblique":
        return true;
      case "normal":
        return false;
      default:
        return;
    }
}
export function ymt(htmIn6980: any) {
  if (!htmIn6980) return {};
  let htmBind17333 = htmIn6980.trim().toLowerCase();
  return {
    underline: htmBind17333.includes("underline")
      ? true
      : htmBind17333.includes("none")
        ? false
        : undefined,
    strike: htmBind17333.includes("line-through")
      ? true
      : htmBind17333.includes("none")
        ? false
        : undefined,
  };
}
export function bmt(htmIn11503: any) {
  let htmBind21914 = Number(htmIn11503);
  return Number.isFinite(htmBind21914) && htmBind21914 > 1
    ? Math.floor(htmBind21914)
    : 1;
}
export function xmt(htmIn7334: any) {
  if (!htmIn7334) return;
  let htmBind17717 = htmIn7334.trim().match(/^(\d+(?:\.\d+)?)(px|pt)?$/i);
  if (!htmBind17717) return;
  let htmBind17718 = Number(htmBind17717[1]);
  if (!(!Number.isFinite(htmBind17718) || htmBind17718 <= 0))
    return htmBind17717[2]?.toLowerCase() === "pt"
      ? (htmBind17718 * 96) / 72
      : htmBind17718;
}
export function Smt(props: any) {
  if (!props) return;
  let htmBind16734 = props.match(
    /#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b|rgba?\([^)]+\)/i,
  );
  return htmBind16734?.[0]
    ? htmBind16734[0]
    : props.match(
        /\b(black|white|red|green|blue|yellow|cyan|magenta|gray|grey|orange|purple|brown|pink)\b/i,
      )?.[1];
}
export function parseCssColor(props: any) {
  if (!props) return;
  let htmBind7197 = props.trim();
  if (!htmBind7197) return;
  if (/^#[0-9a-f]{3}$/i.test(htmBind7197)) {
    let [htmBind21816, htmBind21817, htmBind21818] = htmBind7197
      .slice(1)
      .split("");
    return `#${htmBind21816}${htmBind21816}${htmBind21817}${htmBind21817}${htmBind21818}${htmBind21818}`.toUpperCase();
  }
  if (/^#[0-9a-f]{6}$/i.test(htmBind7197)) return htmBind7197.toUpperCase();
  if (/^#[0-9a-f]{8}$/i.test(htmBind7197))
    return `#${htmBind7197.slice(1, 7).toUpperCase()}`;
  let htmBind7198 = htmBind7197.match(
    /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i,
  );
  if (htmBind7198) {
    let htmBind16103 = htmBind7198[4] == null ? 1 : Number(htmBind7198[4]);
    if (!Number.isFinite(htmBind16103) || htmBind16103 <= 0) return;
    let htmBind16104 = (htmIn10678) =>
      Math.max(0, Math.min(255, Number(htmIn10678)))
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();
    return `#${htmBind16104(htmBind7198[1] ?? "0")}${htmBind16104(htmBind7198[2] ?? "0")}${htmBind16104(htmBind7198[3] ?? "0")}`;
  }
  return (
    {
      black: "#000000",
      white: "#FFFFFF",
      red: "#FF0000",
      green: "#008000",
      blue: "#0000FF",
      yellow: "#FFFF00",
      cyan: "#00FFFF",
      magenta: "#FF00FF",
      gray: "#808080",
      grey: "#808080",
      orange: "#FFA500",
      purple: "#800080",
      brown: "#A52A2A",
      pink: "#FFC0CB",
    }[htmBind7197.toLowerCase()] ?? htmBind7197
  );
}

/** Semantic aliases for html-paste hooks. */
export const eachTableRow = Ypt;
export const eachRowCell = Xpt;
export const colWidthPx = Zpt;
export const buildHtmlCell = Qpt;
export const normalizeTextCell = emt;
export const findTableRoot = tmt;
export const mergeCellMaps = omt;
export const parseSpanAttr = bmt;
