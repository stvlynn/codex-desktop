// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: deck kind/field token maps, parsers, and NDJSON builders
// (legacy qRe / Binding1738–1748 / TRe…KRe).
// Stage-3 wave-79 cohesive deck-kinds impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureStableIdConstantsInit } from "../stable-id";
import {
  workbookBinding1738,
  TRe,
  ERe,
  DRe,
  ORe,
  kRe,
  ARe,
  workbookBinding1739,
  jRe,
  workbookBinding1740,
  MRe,
  NRe,
  PRe,
  FRe,
  workbookBinding1741,
  workbookBinding1742,
  IRe,
  LRe,
  RRe,
  zRe,
  BRe,
  VRe,
  HRe,
  URe,
  WRe,
  workbookBinding1743,
  workbookBinding1744,
  GRe,
  workbookBinding1745,
  workbookBinding1746,
  KRe,
  workbookBinding1747,
  workbookBinding1748,
} from "./dk-slots";

export const qRe = esmInit(() => {
  ensureStableIdConstantsInit();
  workbookBinding1738 = [
    "deck",
    "slide",
    "textbox",
    "shape",
    "table",
    "chart",
    "image",
    "notes",
    "thread",
  ];
  TRe = {
    charts: "chart",
    comments: "thread",
    decks: "deck",
    images: "image",
    layout: "layout",
    layoutlist: "layout",
    layoutlists: "layout",
    layouts: "layout",
    shapes: "shape",
    slides: "slide",
    table: "table",
    tables: "table",
    text: "textbox",
    textboxes: "textbox",
    texts: "textbox",
    textranges: "textrange",
    threads: "thread",
  };
  ERe = new Set([...workbookBinding1738, "layout", "notice", "textrange"]);
  DRe = {
    bboxunit: "bboxUnit",
    charttype: "chartType",
    colcount: "cols",
    columncount: "cols",
    columns: "cols",
    isplaceholder: "isPlaceholder",
    layoutid: "layoutId",
    placeholdertext: "textPreview",
    rowcount: "rows",
    textchars: "textChars",
    textlines: "textLines",
    textpreview: "textPreview",
    textshapes: "textShapes",
  };
  ORe = new Set(
    "alt.bbox.bboxUnit.chartType.comments.geometry.id.layoutId.length.message.name.placeholder.placeholders.preview.prompt.rows.cols.slide.status.target.text.textChars.textLines.textPreview.textShapes.title.type.isPlaceholder".split(
      ".",
    ),
  );
  kRe = {
    deck: ["id", "name"],
    slide: ["id", "slide", "title", "textShapes"],
    textbox: [
      "id",
      "slide",
      "name",
      "placeholder",
      "text",
      "textPreview",
      "textChars",
      "textLines",
      "bbox",
      "bboxUnit",
    ],
    shape: ["id", "slide", "name", "placeholder", "bbox", "bboxUnit"],
    table: [
      "id",
      "slide",
      "name",
      "rows",
      "cols",
      "preview",
      "bbox",
      "bboxUnit",
    ],
    chart: ["id", "slide", "name", "chartType", "title", "bbox", "bboxUnit"],
    image: [
      "id",
      "slide",
      "name",
      "geometry",
      "alt",
      "prompt",
      "isPlaceholder",
      "bbox",
      "bboxUnit",
    ],
    notes: ["id", "slide", "text"],
    thread: ["id", "slide", "target", "status", "comments"],
    textrange: ["id", "slide", "target", "length"],
    layout: ["layoutId", "name", "type", "placeholders"],
    notice: ["message"],
  };
  ARe = 12e3;
  workbookBinding1739 = 80;
  jRe = (dkIn2918) => {
    let dkBind10804 = (dkIn2918 ?? workbookBinding1738.join(","))
        .split(/[^A-Za-z0-9-]+/)
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
      dkBind10805 = [],
      dkBind10806 = new Set(),
      dkBind10807 = [];
    for (let dkBind17943 of dkBind10804) {
      let dkBind18412 = TRe[dkBind17943] ?? dkBind17943;
      if (!ERe.has(dkBind18412)) {
        dkBind10807.includes(dkBind17943) || dkBind10807.push(dkBind17943);
        continue;
      }
      let dkBind18413 = dkBind18412;
      dkBind10806.has(dkBind18413) ||
        (dkBind10806.add(dkBind18413), dkBind10805.push(dkBind18413));
    }
    let dkBind10808 = [];
    return (
      dkBind10807.length > 0 &&
        dkBind10808.push(`Unknown kind tokens: ${dkBind10807.join(", ")}`),
      {
        tokens: dkBind10805,
        tokenSet: dkBind10806,
        notices: dkBind10808,
      }
    );
  };
  workbookBinding1740 = (dkIn2432, dkIn2433) => {
    if (!dkIn2432)
      return {
        tokens: [],
        tokenSet: new Set(),
        notices: [],
      };
    let dkBind9671 = dkIn2432
        .split(/[^A-Za-z0-9-]+/)
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean),
      dkBind9672 = [],
      dkBind9673 = new Set(),
      dkBind9674 = [];
    for (let dkBind18541 of dkBind9671) {
      let dkBind19048 = DRe[dkBind18541] ?? dkBind18541;
      if (!ORe.has(dkBind19048)) {
        dkBind9674.includes(dkBind18541) || dkBind9674.push(dkBind18541);
        continue;
      }
      dkBind9673.has(dkBind19048) ||
        (dkBind9673.add(dkBind19048), dkBind9672.push(dkBind19048));
    }
    let dkBind9675 = [];
    return (
      dkBind9674.length > 0 &&
        dkBind9675.push(
          `Unknown ${dkIn2433 === "include" ? "include" : "exclude"} tokens: ${dkBind9674.join(", ")}`,
        ),
      {
        tokens: dkBind9672,
        tokenSet: dkBind9673,
        notices: dkBind9675,
      }
    );
  };
  MRe = (dkIn15580, dkIn15581, dkIn15582) =>
    dkIn15580.map((item) => NRe(item, dkIn15581, dkIn15582));
  NRe = (dkIn5507, dkIn5508, dkIn5509) => {
    let dkBind15304 = kRe[dkIn5507.kind] ?? [],
      dkBind15305 = new Set(dkBind15304);
    dkIn5508.tokens.forEach((item) => dkBind15305.add(item));
    dkIn5509.tokens.forEach((item) => dkBind15305.delete(item));
    let dkBind15306 = {
      kind: dkIn5507.kind,
    };
    for (let [dkBind21711, dkBind21712] of Object.entries(dkIn5507))
      dkBind21711 !== "kind" &&
        dkBind15305.has(dkBind21711) &&
        dkBind21712 !== undefined &&
        (dkBind15306[dkBind21711] = dkBind21712);
    return dkBind15306;
  };
  PRe = (dkIn3980, dkIn3981, dkIn3982) => {
    if (!dkIn3981) return dkIn3980;
    let dkBind12877;
    try {
      dkBind12877 = new RegExp(dkIn3981, "i");
    } catch (dkBind20125) {
      let dkBind20126 =
        dkBind20125 instanceof Error
          ? dkBind20125.message
          : "Invalid regular expression";
      throw Error(`Invalid search regex: ${dkBind20126}`);
    }
    let dkBind12878 = dkIn3980.filter((item) => dkBind12877.test(item));
    return (
      dkBind12878.length === 0 &&
        ((dkIn3982.notices ??= []),
        dkIn3982.notices.push("Search matched 0 entries")),
      dkBind12878
    );
  };
  FRe = (dkIn5285, dkIn5286) => {
    if (!dkIn5285)
      return {
        id: dkIn5286,
      };
    let dkBind14896 = {
      id: dkIn5285.id,
    };
    return (
      Number.isFinite(dkIn5285.beforeLines) &&
        (dkBind14896.beforeLines = Math.max(
          0,
          Math.floor(dkIn5285.beforeLines ?? 0),
        )),
      Number.isFinite(dkIn5285.afterLines) &&
        (dkBind14896.afterLines = Math.max(
          0,
          Math.floor(dkIn5285.afterLines ?? 0),
        )),
      dkBind14896
    );
  };
  workbookBinding1741 = (dkIn9536) =>
    JSON.stringify({
      kind: "notice",
      message: `Truncated: omitted ${dkIn9536} lines. Increase maxChars or narrow target.`,
    });
  workbookBinding1742 = (dkIn1802) => {
    try {
      let dkBind8725 = JSON.parse(dkIn1802),
        dkBind8726 = dkBind8725.title;
      if (dkBind8725.kind === "slide" && typeof dkBind8726 == "string") {
        let dkBind21627 = {
          ...dkBind8725,
        };
        return (
          (dkBind21627.title = workbookBinding1745(
            dkBind8726,
            workbookBinding1739,
          )),
          JSON.stringify(dkBind21627)
        );
      }
      let dkBind8727 = dkBind8725.text;
      if (dkBind8725.kind === "textbox" && typeof dkBind8727 == "string") {
        let dkBind14720 = dkBind8725.textChars,
          dkBind14721 = dkBind8725.textLines,
          dkBind14722 = {
            kind: dkBind8725.kind,
            id: dkBind8725.id,
            slide: dkBind8725.slide,
            textChars:
              typeof dkBind14720 == "number" ? dkBind14720 : dkBind8727.length,
            textLines:
              typeof dkBind14721 == "number"
                ? dkBind14721
                : workbookBinding1746(dkBind8727),
          };
        return JSON.stringify(dkBind14722);
      }
      if (dkBind8725.kind === "notes" && typeof dkBind8727 == "string") {
        let dkBind21649 = {
          ...dkBind8725,
        };
        return (
          (dkBind21649.text = workbookBinding1745(
            dkBind8727,
            workbookBinding1739,
          )),
          JSON.stringify(dkBind21649)
        );
      }
      return dkIn1802;
    } catch {
      return dkIn1802;
    }
  };
  IRe = (dkIn1707, dkIn1708) => {
    let dkBind8021 = dkIn1707.join("\n");
    if (dkIn1708 <= 0 || dkBind8021.length <= dkIn1708)
      return {
        ndjson: dkBind8021,
        truncated: false,
      };
    let dkBind8022 = dkIn1707.map((item) => workbookBinding1742(item)),
      dkBind8023 = dkIn1707.length,
      dkBind8024 = workbookBinding1741(dkBind8023),
      dkBind8025 = [];
    for (let dkBind11259 = 0; dkBind11259 < 3; dkBind11259 += 1) {
      dkBind8025 = [];
      let dkBind11615 = 0;
      for (let dkBind14179 of dkBind8022) {
        let dkBind14453 = dkBind14179,
          dkBind14454 = dkBind14453.length + +(dkBind8025.length > 0),
          dkBind14455 = dkBind8024.length + +(dkBind8025.length > 0);
        if (dkBind11615 + dkBind14454 + dkBind14455 > dkIn1708) {
          let dkBind19261 = workbookBinding1742(dkBind14179),
            dkBind19262 = dkBind19261.length + +(dkBind8025.length > 0);
          if (
            dkBind19261 !== dkBind14179 &&
            dkBind11615 + dkBind19262 + dkBind14455 <= dkIn1708
          ) {
            dkBind14453 = dkBind19261;
            dkBind14454 = dkBind19262;
          } else break;
        }
        dkBind8025.push(dkBind14453);
        dkBind11615 += dkBind14454;
      }
      let dkBind11616 = dkBind8022.length - dkBind8025.length;
      if (dkBind11616 === dkBind8023) break;
      dkBind8023 = dkBind11616;
      dkBind8024 = workbookBinding1741(dkBind8023);
    }
    return {
      ndjson:
        dkBind8025.length > 0
          ? `${dkBind8025.join("\n")}\n${dkBind8024}`
          : dkBind8024,
      truncated: true,
    };
  };
  LRe = (dkIn1676, dkIn1677) => {
    let { prefix, suffix } = workbookBinding1747(dkIn1677);
    if (prefix === "pr") return dkIn1676.slides;
    if (prefix === "sl" || prefix === "nt")
      return dkIn1676.slides.filter((item) => item.id === suffix);
    if (
      prefix === "sh" ||
      prefix === "ch" ||
      prefix === "im" ||
      prefix === "tb"
    ) {
      let dkBind21479 = workbookBinding1748(dkIn1676, `${prefix}/${suffix}`);
      return dkBind21479
        ? dkIn1676.slides.filter((item) => item.id === dkBind21479)
        : [];
    }
    if (prefix === "tr") {
      let dkBind13813 = /^([a-z]+)\/([^/]+)\//.exec(suffix);
      if (!dkBind13813) return [];
      let dkBind13814 = dkBind13813[1],
        dkBind13815 = dkBind13813[2];
      if (!dkBind13814 || !dkBind13815) return [];
      if (
        dkBind13814 === "sh" ||
        dkBind13814 === "ch" ||
        dkBind13814 === "im"
      ) {
        let dkBind21306 = workbookBinding1748(
          dkIn1676,
          `${dkBind13814}/${dkBind13815}`,
        );
        return dkBind21306
          ? dkIn1676.slides.filter((item) => item.id === dkBind21306)
          : [];
      }
      return dkBind13814 === "nt"
        ? dkIn1676.slides.filter((item) => item.id === dkBind13815)
        : [];
    }
    if (prefix === "th") {
      let dkBind20490 = dkIn1676.threads.find((item) => item.id === suffix)
        ?.target?.slideId;
      return dkBind20490
        ? dkIn1676.slides.filter((item) => item.id === dkBind20490)
        : [];
    }
    return dkIn1676.slides;
  };
  RRe = (dkIn5573, dkIn5574) => {
    let dkBind15392 = new Set(dkIn5574.map((item) => item.id)),
      dkBind15393 = new Map();
    return (
      dkIn5573.threads.forEach((item) => {
        let dkBind19533 = item.target?.slideId;
        if (!dkBind19533 || !dkBind15392.has(dkBind19533)) return;
        let dkBind19534 = dkBind15393.get(dkBind19533) ?? [];
        dkBind19534.push(item);
        dkBind15393.set(dkBind19533, dkBind19534);
      }),
      dkBind15393
    );
  };
  zRe = (dkIn5248, dkIn5249, dkIn5250, dkIn5251, dkIn5252) => {
    let dkBind14819 = [];
    if (dkIn5252.tokenSet.has("deck")) {
      let dkBind22028 = {
        kind: "deck",
        id: dkIn5248.aid,
        name: dkIn5248.title,
      };
      dkBind14819.push(dkBind22028);
    }
    dkIn5252.tokenSet.has("layout") && dkBind14819.push(...BRe(dkIn5251));
    for (let dkBind21846 of dkIn5249) {
      let dkBind22359 = VRe(
        dkBind21846,
        dkIn5252,
        dkIn5250.get(dkBind21846.id) ?? [],
      );
      dkBind14819.push(...dkBind22359);
    }
    return dkBind14819;
  };
  BRe = (props) =>
    props.map((item) => {
      let dkBind12771 = item.placeholders.summary().map((_item) => {
          let dkBind19959 = {
              name: _item.name,
              type: _item.type,
            },
            dkBind19960 = workbookBinding1745(_item.text);
          return (
            dkBind19960 && (dkBind19959.textPreview = dkBind19960),
            dkBind19959
          );
        }),
        dkBind12772 = item.type?.trim();
      return {
        kind: "layout",
        layoutId: item.id,
        name: item.name,
        type: dkBind12772 && dkBind12772.length > 0 ? dkBind12772 : undefined,
        placeholders: dkBind12771.length > 0 ? dkBind12771 : undefined,
      };
    });
  VRe = (dkIn206, dkIn207, dkIn208) => {
    let dkBind3140 = [],
      dkBind3141 = dkIn206.index + 1,
      dkBind3142 = dkIn207.tokenSet.has("slide"),
      dkBind3143 = dkIn207.tokenSet.has("textbox"),
      dkBind3144 = dkIn207.tokenSet.has("shape"),
      dkBind3145 = dkIn207.tokenSet.has("table"),
      dkBind3146 = dkIn207.tokenSet.has("chart"),
      dkBind3147 = dkIn207.tokenSet.has("image"),
      dkBind3148 = dkIn207.tokenSet.has("notes"),
      dkBind3149 = dkIn207.tokenSet.has("thread"),
      dkBind3150 = dkIn207.tokenSet.has("textrange");
    if (dkBind3142) {
      let dkBind16640 = dkIn206.shapes.filter(
          (item) => item.text.trim().length > 0,
        ).length,
        dkBind16641 = {
          kind: "slide",
          id: dkIn206.aid,
          slide: dkBind3141,
          title: dkIn206.title,
          textShapes: dkBind16640,
        };
      dkBind3140.push(dkBind16641);
    }
    if (
      (dkIn206.shapes.forEach((item) => {
        let dkBind6446 = item.text,
          dkBind6447 = dkBind6446.trim().length > 0;
        if (dkBind6447 && dkBind3143) {
          let dkBind12773 = {
            kind: "textbox",
            id: item.aid,
            slide: dkBind3141,
          };
          item.name && (dkBind12773.name = item.name);
          item.placeholderType &&
            (dkBind12773.placeholder = item.placeholderType);
          dkBind12773.text = dkBind6446;
          dkBind12773.textPreview = workbookBinding1745(dkBind6446);
          dkBind12773.textChars = dkBind6446.length;
          dkBind12773.textLines = workbookBinding1746(dkBind6446);
          let { bbox, bboxUnit } = workbookBinding1743(item.frame);
          bbox && (dkBind12773.bbox = bbox);
          bboxUnit && (dkBind12773.bboxUnit = bboxUnit);
          dkBind3140.push(dkBind12773);
        }
        if (!dkBind6447 && dkBind3144) {
          let dkBind15608 = {
            kind: "shape",
            id: item.aid,
            slide: dkBind3141,
          };
          item.name && (dkBind15608.name = item.name);
          item.placeholderType &&
            (dkBind15608.placeholder = item.placeholderType);
          let { bbox, bboxUnit } = workbookBinding1743(item.frame);
          bbox && (dkBind15608.bbox = bbox);
          bboxUnit && (dkBind15608.bboxUnit = bboxUnit);
          dkBind3140.push(dkBind15608);
        }
        if (dkBind3150 && dkBind6447) {
          let dkBind15325 = HRe(item.aid, item.text.length);
          if (dkBind15325) {
            let dkBind17272 = {
              kind: "textrange",
              id: dkBind15325,
              slide: dkBind3141,
              target: item.aid,
              length: item.text.length,
            };
            dkBind3140.push(dkBind17272);
          }
        }
      }),
      dkBind3146 &&
        dkIn206.charts.forEach((item) => {
          let dkBind14260 = {
            kind: "chart",
            id: item.aid,
            slide: dkBind3141,
            name: item.name,
            chartType: item.chartType,
          };
          item.title && (dkBind14260.title = item.title);
          let { bbox, bboxUnit } = workbookBinding1743(item.frame);
          bbox && (dkBind14260.bbox = bbox);
          bboxUnit && (dkBind14260.bboxUnit = bboxUnit);
          dkBind3140.push(dkBind14260);
        }),
      dkBind3145 &&
        dkIn206.tables.forEach((item) => {
          let dkBind13816 = {
              kind: "table",
              id: item.aid,
              slide: dkBind3141,
              name: item.name,
              rows: item.rows,
              cols: item.cols,
              preview: item.preview,
            },
            { bbox, bboxUnit } = workbookBinding1743(item.frame);
          bbox && (dkBind13816.bbox = bbox);
          bboxUnit && (dkBind13816.bboxUnit = bboxUnit);
          dkBind3140.push(dkBind13816);
        }),
      dkBind3147 &&
        dkIn206.images.forEach((item) => {
          let dkBind12504 = {
            kind: "image",
            id: item.aid,
            slide: dkBind3141,
            name: item.name,
            geometry: item.geometry,
          };
          item.alt && (dkBind12504.alt = item.alt);
          item.prompt && (dkBind12504.prompt = item.prompt);
          item.isPlaceholder && (dkBind12504.isPlaceholder = true);
          let { bbox, bboxUnit } = workbookBinding1743(item.frame);
          bbox && (dkBind12504.bbox = bbox);
          bboxUnit && (dkBind12504.bboxUnit = bboxUnit);
          dkBind3140.push(dkBind12504);
        }),
      dkBind3148)
    ) {
      let dkBind19353 = {
        kind: "notes",
        id: dkIn206.notes.aid,
        slide: dkBind3141,
        text: dkIn206.notes.text ?? "",
      };
      dkBind3140.push(dkBind19353);
    }
    return (
      dkBind3149 &&
        dkIn208.length > 0 &&
        dkIn208.forEach((item) => {
          let dkBind11243 = URe(item, dkIn206),
            dkBind11244 = item.comments
              .filter((_item) => _item.text)
              .map((_item) => ({
                id: _item.id,
                text: _item.text,
                authorId: _item.authorId,
                createdAt: _item.createdAt,
              })),
            dkBind11245 = {
              kind: "thread",
              id: item.aid,
              slide: dkBind3141,
              target: dkBind11243,
              status: WRe(item.status),
              comments: dkBind11244,
            };
          dkBind3140.push(dkBind11245);
        }),
      dkBind3140
    );
  };
  HRe = (dkIn9795, dkIn9796) => {
    if (dkIn9796 <= 0) return;
    let { prefix, suffix } = workbookBinding1747(dkIn9795);
    if (!(!prefix || !suffix)) return `tr/${prefix}/${suffix}/0/${dkIn9796}`;
  };
  URe = (event, dkIn5111) => {
    if (event.target?.elementId) {
      let dkBind17483 = event.target.elementId,
        dkBind17484 =
          dkIn5111.shapes.find((item) => item.id === dkBind17483) ??
          dkIn5111.charts.find((item) => item.id === dkBind17483) ??
          dkIn5111.images.find((item) => item.id === dkBind17483);
      if (dkBind17484) return dkBind17484.aid;
    }
    if (event.target?.slideId && event.target.slideId === dkIn5111.id)
      return dkIn5111.aid;
  };
  WRe = (props) => {
    if (typeof props == "string")
      return props.toLowerCase().replace("thread_status_", "");
  };
  workbookBinding1743 = (dkIn6112) => {
    if (!dkIn6112) return {};
    let dkBind16183 = workbookBinding1744(dkIn6112.left),
      dkBind16184 = workbookBinding1744(dkIn6112.top),
      dkBind16185 = workbookBinding1744(dkIn6112.width),
      dkBind16186 = workbookBinding1744(dkIn6112.height);
    return dkBind16183 === undefined ||
      dkBind16184 === undefined ||
      dkBind16185 === undefined ||
      dkBind16186 === undefined
      ? {}
      : {
          bbox: [dkBind16183, dkBind16184, dkBind16185, dkBind16186],
          bboxUnit: dkIn6112.unit,
        };
  };
  workbookBinding1744 = (dkIn10926) => {
    if (!(dkIn10926 === undefined || !Number.isFinite(dkIn10926)))
      return Math.round(dkIn10926 * 100) / 100;
  };
  GRe = (props) => props.split(/\r?\n/);
  workbookBinding1745 = (dkIn7850, dkIn7851 = 140) => {
    let dkBind18335 = dkIn7850.replace(/\r?\n/g, " | ").trim();
    if (!dkBind18335) return "";
    if (dkBind18335.length <= dkIn7851) return dkBind18335;
    let dkBind18336 = Math.max(1, dkIn7851 - 3);
    return `${dkBind18335.slice(0, dkBind18336)}...`;
  };
  workbookBinding1746 = (dkIn16336) => GRe(dkIn16336).length;
  KRe = (dkIn2220, dkIn2221) => {
    let dkBind9249 = dkIn2221.beforeLines ?? 0,
      dkBind9250 = dkIn2221.afterLines ?? 0;
    if (dkBind9249 <= 0 && dkBind9250 <= 0) return dkIn2220;
    let dkBind9251 = dkIn2220
      .map((item) => JSON.stringify(item))
      .findIndex((item) => item.includes(dkIn2221.id));
    if (dkBind9251 === -1) return dkIn2220;
    let dkBind9252 = Math.max(0, dkBind9251 - dkBind9249),
      dkBind9253 = Math.min(dkIn2220.length, dkBind9251 + dkBind9250 + 1),
      dkBind9254 = dkIn2220.slice(dkBind9252, dkBind9253),
      dkBind9255 = dkIn2220.filter(
        (item) =>
          item.kind === "deck" ||
          item.kind === "slide" ||
          item.kind === "layout",
      ),
      dkBind9256 = [],
      dkBind9257 = new Set();
    for (let dkBind21514 of dkBind9255) {
      let dkBind22057 = JSON.stringify(dkBind21514);
      dkBind9257.has(dkBind22057) ||
        (dkBind9257.add(dkBind22057), dkBind9256.push(dkBind21514));
    }
    for (let dkBind21515 of dkBind9254) {
      let dkBind22058 = JSON.stringify(dkBind21515);
      dkBind9257.has(dkBind22058) ||
        (dkBind9257.add(dkBind22058), dkBind9256.push(dkBind21515));
    }
    return dkBind9256;
  };
  workbookBinding1747 = (props) => {
    let dkBind18931 = props.indexOf("/");
    return dkBind18931 <= 0 || dkBind18931 === props.length - 1
      ? {
          prefix: "",
          suffix: "",
        }
      : {
          prefix: props.slice(0, dkBind18931),
          suffix: props.slice(dkBind18931 + 1),
        };
  };
  workbookBinding1748 = (dkIn6113, dkIn6114) => {
    for (let dkBind16885 of dkIn6113.slides)
      if (
        dkBind16885.shapes.some((item) => item.aid === dkIn6114) ||
        dkBind16885.charts.some((item) => item.aid === dkIn6114) ||
        dkBind16885.images.some((item) => item.aid === dkIn6114) ||
        dkBind16885.tables.some((item) => item.aid === dkIn6114)
      )
        return dkBind16885.id;
  };
});
