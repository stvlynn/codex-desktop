// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart PNG raster + range paste helpers (legacy Amt..Zmt).
// Stage-3 wave-117.

import { computeColumnWidthsPx, computeRowHeightsPx } from "../cell-xf-format";
import { pointsToPixels } from "../../utils/spreadsheet-address-utils";
import { themeStyleMapsFromProto } from "../design-tokens";
import { paintChartFromProto } from "../chart-paint";
import { normalizeImagePayload } from "../image-source";

/** PNG mime (legacy Binding1957). */
export const CHART_PNG_MIME = "image/png";
/** Minimum raster dimension px (legacy Binding1958). */
export const CHART_MIN_PX = 1;
/** Default paste width hint (legacy Qmt). */
export const CHART_DEFAULT_WIDTH = 240;
/** Default paste height hint (legacy $mt). */
export const CHART_DEFAULT_HEIGHT = 160;

void computeColumnWidthsPx;
void computeRowHeightsPx;
void pointsToPixels;
void themeStyleMapsFromProto;
void paintChartFromProto;
void normalizeImagePayload;
void CHART_PNG_MIME;
void CHART_MIN_PX;
void CHART_DEFAULT_WIDTH;
void CHART_DEFAULT_HEIGHT;

export async function exportChartPng(props: any) {
  let { workbook, sheetIndex, chartId } = props,
    crBind5830 = workbook.worksheets.getSheetNameByIndex(sheetIndex);
  if (!crBind5830) throw Error(`Worksheet index ${sheetIndex} not found`);
  let crBind5831 = workbook.worksheets.getItem(crBind5830),
    crBind5832 = crBind5831.charts.items.find((item) => item.id === chartId);
  if (!crBind5832)
    throw Error(`Chart "${chartId}" not found on worksheet "${crBind5830}"`);
  workbook.recalculate();
  let crBind5833 = workbook.toProto(),
    crBind5834 = crBind5833.sheets[sheetIndex];
  if (!crBind5834) throw Error(`Worksheet index ${sheetIndex} not found`);
  let crBind5835 = crBind5832.toDrawingProto({
    preferPreview: true,
  });
  if (!crBind5835.chart)
    throw Error(`Chart "${chartId}" could not be rendered`);
  Hmt(crBind5835.chart, crBind5831, Umt(workbook));
  let crBind5836 = crBind5832.captureAnchorSnapshot(),
    crBind5837 = computeColumnWidthsPx(crBind5834),
    crBind5838 = computeRowHeightsPx(crBind5834);
  Nmt(
    crBind5837,
    Math.max(crBind5836.from.col, crBind5836.to?.col ?? crBind5836.from.col) +
      1,
    crBind5837[crBind5837.length - 1] ?? 59,
  );
  Nmt(
    crBind5838,
    Math.max(crBind5836.from.row, crBind5836.to?.row ?? crBind5836.from.row) +
      1,
    crBind5838[crBind5838.length - 1] ?? pointsToPixels(15),
  );
  let crBind5839 = crBind5832.resolveBoundsPx(
    {
      columnWidths: crBind5837,
      rowHeights: crBind5838,
    },
    {
      preferPreview: true,
    },
  );
  if (!crBind5839)
    throw Error(`Chart "${chartId}" bounds could not be resolved`);
  let crBind5840 = Math.max(CHART_MIN_PX, Math.round(crBind5839.width)),
    crBind5841 = Math.max(CHART_MIN_PX, Math.round(crBind5839.height)),
    { canvas, ctx: crBind5842 } = zmt(crBind5840, crBind5841);
  crBind5842.clearRect(0, 0, crBind5840, crBind5841);
  paintChartFromProto(
    crBind5842,
    crBind5835.chart,
    {
      x: 0,
      y: 0,
      width: crBind5840,
      height: crBind5841,
    },
    {
      themeMap: themeStyleMapsFromProto(crBind5833.theme),
      excelDefaults: true,
      elementId: crBind5832.id,
    },
  );
  let crBind5843 = await Rmt(canvas, CHART_PNG_MIME);
  return {
    bytes: await crBind5843.arrayBuffer(),
    contentType: crBind5843.type || CHART_PNG_MIME,
    widthPx: crBind5840,
    heightPx: crBind5841,
  };
}
export function pasteRangeValues(crIn2620: any) {
  let { workbook, sheetIndex, source, target, options } = crIn2620,
    crBind10078 = workbook.worksheets.getSheetNameByIndex(sheetIndex);
  if (!crBind10078) throw Error(`Worksheet index ${sheetIndex} not found`);
  let crBind10079 = Bmt({
      sheetName: crBind10078,
      target,
    }),
    crBind10080 = {
      r1: crBind10079.row,
      c1: crBind10079.col,
      r2: crBind10079.row,
      c2: crBind10079.col,
    },
    crBind10081 = Vmt(crBind10080),
    crBind10082 = Pmt(source),
    crBind10083 = Mmt(
      options?.widthPx ?? crBind10082.widthPx,
      CHART_DEFAULT_WIDTH,
    ),
    crBind10084 = Mmt(
      options?.heightPx ?? crBind10082.heightPx,
      CHART_DEFAULT_HEIGHT,
    );
  return {
    range: crBind10081,
    selectionRect: crBind10080,
    imageId: workbook.worksheets.getItem(crBind10078).images.add({
      dataUrl: crBind10082.dataUrl,
      anchor: {
        from: {
          row: crBind10079.row,
          col: crBind10079.col,
        },
        extent: {
          widthPx: crBind10083,
          heightPx: crBind10084,
        },
      },
    }).imageId,
    widthPx: crBind10083,
    heightPx: crBind10084,
  };
}
export function Mmt(crIn12156: any, crIn12157: any) {
  return Number.isFinite(crIn12156)
    ? Math.max(CHART_MIN_PX, Math.round(crIn12156))
    : crIn12157;
}
export function Nmt(crIn13753: any, crIn13754: any, crIn13755: any) {
  for (; crIn13753.length < crIn13754; ) crIn13753.push(crIn13755);
}
export function Pmt(props: any) {
  let crBind11836 =
    "dataUrl" in props
      ? normalizeImagePayload({
          dataUrl: props.dataUrl,
        })
      : normalizeImagePayload({
          blob: props.bytes,
          contentType: props.contentType,
        });
  if (!crBind11836.data || crBind11836.data.byteLength === 0)
    throw Error("Image import source did not resolve to bitmap bytes");
  let crBind11837 = crBind11836.contentType ?? Fmt(props);
  if (!crBind11837 || !crBind11837.startsWith("image/"))
    throw Error(`Unsupported image content type "${crBind11837 ?? ""}"`);
  let crBind11838 = crBind650(crBind11836.data, crBind11837);
  return {
    dataUrl:
      "dataUrl" in props ? props.dataUrl : Imt(crBind11836.data, crBind11837),
    widthPx: crBind11838?.width,
    heightPx: crBind11838?.height,
  };
}
export function Fmt(props: any) {
  return "dataUrl" in props ? undefined : props.contentType;
}
export function Imt(crIn13756: any, crIn13757: any) {
  return `data:${crIn13757};base64,${Lmt(crIn13756)}`;
}
export function Lmt(props: any) {
  let crBind13433 = globalThis,
    crBind13434 = crBind13433.Buffer;
  if (crBind13434 && typeof crBind13434.from == "function")
    return crBind13434.from(props).toString("base64");
  let crBind13435 = crBind13433.btoa;
  if (typeof crBind13435 == "function") {
    let crBind19404 = "";
    for (
      let crBind21252 = 0;
      crBind21252 < props.length;
      crBind21252 += 32768
    ) {
      let crBind22401 = props.subarray(crBind21252, crBind21252 + 32768);
      crBind19404 += String.fromCharCode(...crBind22401);
    }
    return crBind13435(crBind19404);
  }
  throw Error("Base64 encoding is unavailable in this environment");
}
export async function Rmt(crIn2461: any, crIn2462: any) {
  if (
    "convertToBlob" in crIn2461 &&
    typeof crIn2461.convertToBlob == "function"
  )
    return crIn2461.convertToBlob({
      type: crIn2462,
    });
  if ("toBlob" in crIn2461 && typeof crIn2461.toBlob == "function")
    return new Promise((crIn9015, crIn9016) => {
      crIn2461.toBlob((crIn10253) => {
        if (crIn10253) {
          crIn9015(crIn10253);
          return;
        }
        crIn9016(Error("Canvas export produced an empty blob"));
      }, crIn2462);
    });
  if ("toDataURL" in crIn2461 && typeof crIn2461.toDataURL == "function") {
    let crBind18070 = normalizeImagePayload({
      dataUrl: crIn2461.toDataURL(crIn2462),
    });
    if (!crBind18070.data || !crBind18070.contentType)
      throw Error("Canvas export data URL could not be decoded");
    return new Blob([Uint8Array.from(crBind18070.data)], {
      type: crBind18070.contentType,
    });
  }
  throw Error("Canvas export is unavailable in this environment");
}
export function zmt(crIn2762: any, crIn2763: any) {
  let crBind10401 = Math.max(CHART_MIN_PX, Math.round(crIn2762)),
    crBind10402 = Math.max(CHART_MIN_PX, Math.round(crIn2763));
  if (typeof OffscreenCanvas < "u") {
    let crBind19512 = new OffscreenCanvas(crBind10401, crBind10402),
      crBind19513 = crBind19512.getContext("2d");
    if (!crBind19513) throw Error("OffscreenCanvas 2D context unavailable");
    return {
      canvas: crBind19512,
      ctx: crBind19513,
    };
  }
  if (typeof document < "u" && typeof document.createElement == "function") {
    let crBind18388 = document.createElement("canvas");
    crBind18388.width = crBind10401;
    crBind18388.height = crBind10402;
    let crBind18389 = crBind18388.getContext("2d");
    if (!crBind18389) throw Error("Canvas 2D context unavailable");
    return {
      canvas: crBind18388,
      ctx: crBind18389,
    };
  }
  throw Error("No canvas implementation available for chart rasterization");
}
export function Bmt(props: any) {
  let { sheetName, target } = props;
  if (!target)
    return {
      row: 0,
      col: 0,
    };
  if (typeof target != "string")
    return {
      row: Math.max(0, Math.floor(target.row ?? 0)),
      col: Math.max(0, Math.floor(target.col ?? 0)),
    };
  let crBind9302 = target.trim();
  if (!crBind9302)
    return {
      row: 0,
      col: 0,
    };
  let crBind9303 = crBind9302.startsWith("=")
      ? crBind9302.slice(1)
      : crBind9302,
    crBind9304 = crBind9303.lastIndexOf("!"),
    crBind9305 =
      crBind9304 === -1 ? crBind9303 : crBind9303.slice(crBind9304 + 1);
  if (crBind9304 >= 0) {
    let crBind17439 = crBind9303.slice(0, crBind9304),
      crBind17440 = (
        crBind17439.startsWith("'") && crBind17439.endsWith("'")
          ? crBind17439.slice(1, -1).replace(/''/g, "'")
          : crBind17439
      ).trim();
    if (crBind17440 && crBind17440 !== sheetName)
      throw Error(
        `Target sheet "${crBind17440}" does not match "${sheetName}"`,
      );
  }
  let crBind9306 = parseA1Range(crBind9305);
  if (!crBind9306) throw Error(`Invalid image target "${target}"`);
  return {
    row: crBind9306.bounds.startRow,
    col: crBind9306.bounds.startCol,
  };
}
export function Vmt(props: any) {
  return formatA1Range({
    startRow: props.r1,
    startCol: props.c1,
    endRow: props.r2,
    endCol: props.c2,
  });
}
export function Hmt(crIn2827: any, crIn2828: any, crIn2829: any) {
  if (Array.isArray(crIn2827.series)) {
    for (let crBind16087 of crIn2827.series)
      if (crBind16087) {
        if (crBind16087.formula) {
          let crBind22067 = Wmt(crBind16087.formula, crIn2829, crIn2828);
          crBind22067.length > 0 && (crBind16087.values = crBind22067);
        }
        if (crBind16087.categoryFormula) {
          let crBind21663 = Gmt(
            crBind16087.categoryFormula,
            crIn2829,
            crIn2828,
          );
          crBind21663.length > 0 && (crBind16087.categories = crBind21663);
        }
      }
    if (crIn2827.categories.length === 0) {
      let crBind17198 =
        crIn2827.series.find((item) => item.categories.length > 0)
          ?.categories ??
        (() => {
          let crBind21664 = crIn2827.series[0]?.categoryFormula;
          return crBind21664 ? Gmt(crBind21664, crIn2829, crIn2828) : [];
        })();
      crBind17198.length > 0 && (crIn2827.categories = [...crBind17198]);
    }
  }
}
export function Umt(props: any) {
  let crBind18715 = new Map();
  for (
    let crBind20376 = 0;
    crBind20376 < props.worksheets.getSheetCount();
    crBind20376 += 1
  ) {
    let crBind22199 = props.worksheets.getItemAt(crBind20376),
      crBind22200 = Xmt(crBind22199.name);
    crBind22200 && crBind18715.set(crBind22200, crBind22199);
  }
  return crBind18715;
}
export function Wmt(crIn5275: any, crIn5276: any, crIn5277: any) {
  return Kmt(crIn5275, crIn5276, crIn5277, (crIn5905) => {
    if (!crIn5905 || crIn5905.value == null || crIn5905.value === "")
      return NaN;
    if (typeof crIn5905.value == "number") return crIn5905.value;
    if (typeof crIn5905.value == "string") {
      let crBind20840 = crIn5905.value.trim();
      if (!crBind20840) return NaN;
      let crBind20841 = Number(crBind20840);
      return Number.isFinite(crBind20841) ? crBind20841 : NaN;
    }
    return NaN;
  });
}
export function Gmt(crIn7431: any, crIn7432: any, crIn7433: any) {
  return Kmt(crIn7431, crIn7432, crIn7433, (crIn8936) =>
    !crIn8936 || crIn8936.value == null
      ? ""
      : typeof crIn8936.value == "string"
        ? crIn8936.value
        : typeof crIn8936.value == "number"
          ? String(crIn8936.value)
          : "",
  );
}
export function Kmt(
  crIn6716: any,
  crIn6717: any,
  crIn6718: any,
  crIn6719: any,
) {
  let crBind17009 = qmt(crIn6716);
  if (!crBind17009) return [];
  let crBind17010 = Zmt(crIn6717, crBind17009.sheetName, crIn6718),
    crBind17011 = [];
  for (
    let crBind20725 = crBind17009.startRow;
    crBind20725 <= crBind17009.endRow;
    crBind20725 += 1
  )
    for (
      let crBind22367 = crBind17009.startCol;
      crBind22367 <= crBind17009.endCol;
      crBind22367 += 1
    )
      crBind17011.push(
        crIn6719(crBind17010.__getCell(crBind20725, crBind22367)),
      );
  return crBind17011;
}
export function qmt(crIn2581: any) {
  if (!crIn2581) return null;
  let crBind9976 = crIn2581.trim();
  if (
    !crBind9976 ||
    (crBind9976.startsWith("=") && (crBind9976 = crBind9976.slice(1)),
    !crBind9976)
  )
    return null;
  let [crBind9977] = crBind9976.split(",");
  if (!crBind9977) return null;
  let crBind9978,
    crBind9979 = crBind9977,
    crBind9980 = crBind9977.lastIndexOf("!");
  if (
    (crBind9980 !== -1 &&
      ((crBind9978 = crBind9977.slice(0, crBind9980)),
      (crBind9979 = crBind9977.slice(crBind9980 + 1))),
    (crBind9979 = crBind9979.trim()),
    !crBind9979)
  )
    return null;
  let crBind9981 = crBind9979.indexOf(":"),
    crBind9982 =
      crBind9981 === -1 ? crBind9979 : crBind9979.slice(0, crBind9981),
    crBind9983 =
      crBind9981 === -1 ? crBind9979 : crBind9979.slice(crBind9981 + 1),
    crBind9984 = Jmt(crBind9982),
    crBind9985 = Jmt(crBind9983);
  return !crBind9984 || !crBind9985
    ? null
    : {
        sheetName: Ymt(crBind9978),
        startRow: Math.min(crBind9984.row, crBind9985.row),
        endRow: Math.max(crBind9984.row, crBind9985.row),
        startCol: Math.min(crBind9984.col, crBind9985.col),
        endCol: Math.max(crBind9984.col, crBind9985.col),
      };
}
export function Jmt(props: any) {
  if (!props) return null;
  let crBind14850 = props.replace(/\$/g, "").trim();
  if (!crBind14850) return null;
  let crBind14851 = crBind14850.match(/^([A-Za-z]+)(\d+)$/);
  if (!crBind14851) return null;
  let [, crBind14852, crBind14853] = crBind14851;
  if (!crBind14852 || !crBind14853) return null;
  let crBind14854 = lettersToColIndex(crBind14852.toUpperCase()),
    crBind14855 = Number.parseInt(crBind14853, 10) - 1;
  return crBind14854 < 0 || crBind14855 < 0 || !Number.isFinite(crBind14855)
    ? null
    : {
        row: crBind14855,
        col: crBind14854,
      };
}
export function Ymt(props: any) {
  if (!props) return;
  let crBind16623 = props.trim();
  if (!crBind16623) return;
  crBind16623.startsWith("'") &&
    crBind16623.endsWith("'") &&
    (crBind16623 = crBind16623.slice(1, -1).replace(/''/g, "'"));
  let crBind16624 = crBind16623.indexOf("["),
    crBind16625 = crBind16623.lastIndexOf("]");
  return (
    crBind16624 !== -1 &&
      crBind16625 > crBind16624 &&
      (crBind16623 = crBind16623.slice(crBind16625 + 1)),
    crBind16623
  );
}
export function Xmt(props: any) {
  if (!props) return null;
  let crBind21882 = props.trim();
  return crBind21882 ? crBind21882.toLowerCase() : null;
}
export function Zmt(crIn10171: any, crIn10172: any, crIn10173: any) {
  if (crIn10172) {
    let crBind22125 = Xmt(crIn10172);
    if (crBind22125) {
      let crBind22849 = crIn10171.get(crBind22125);
      if (crBind22849) return crBind22849;
    }
  }
  return crIn10173;
}
