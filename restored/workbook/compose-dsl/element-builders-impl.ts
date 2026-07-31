// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose element builders row/col/grid/table/image (legacy OOe).
// Stage-3 wave-72 cohesive compose-dsl impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureDesignTokensInit, resolveSpaceToken } from "../design-tokens";
import { cdslH } from "./boundary-hooks";
import { ensureComposeSizeHelpersInit } from "./size-helpers-impl";
import {
  workbookBinding1490,
  workbookBinding1491,
  workbookBinding1492,
  workbookBinding1493,
  workbookBinding1494,
  workbookBinding1495,
  workbookBinding1496,
  workbookBinding1497,
  workbookBinding1498,
  $K,
  workbookBinding1500,
  workbookBinding1501,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1504,
  workbookBinding1505,
  workbookBinding1506,
  workbookBinding1507,
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1511,
  workbookBinding1512,
  workbookBinding1513,
  workbookBinding1514,
  workbookBinding1515,
  _q,
  workbookBinding1516,
  workbookBinding1517,
  workbookBinding1518,
  workbookBinding1519,
  workbookBinding1520,
  workbookBinding1521,
  workbookBinding1522,
  workbookBinding1523,
  workbookBinding1524,
  workbookBinding1525,
  workbookBinding1526,
  workbookBinding1527,
} from "./dsl-slots";

void ensureDesignTokensInit;
void resolveSpaceToken;
void cdslH;
void ensureComposeSizeHelpersInit;

/** Initialize compose element builders (legacy OOe). */
export const ensureComposeElementBuildersInit = esmInit(() => {
  ensureDesignTokensInit();
  ensureComposeSizeHelpersInit();
  cdslH.ensureBinding1330();
  workbookBinding1500 = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  workbookBinding1501 = (cdslIn4049, cdslIn4050 = {}) => ({
    kind: "text",
    value: cdslIn4049,
    name: workbookBinding1516(cdslIn4050.name),
    style: cdslIn4050.style,
    shadow: cdslIn4050.shadow,
    transform: cdslIn4050.transform ?? "none",
    width: workbookBinding1497(cdslIn4050.width, "hug", "compose.text.width"),
    height: workbookBinding1497(
      cdslIn4050.height,
      "hug",
      "compose.text.height",
    ),
    position: workbookBinding1515(cdslIn4050.position),
    columnSpan: workbookBinding1523(
      cdslIn4050.columnSpan,
      "compose.text.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn4050.rowSpan, "compose.text.rowSpan"),
  });
  workbookBinding1502 = (cdslIn3248) => {
    let workbookBinding11458 = workbookBinding1521(
        cdslIn3248.weight ?? 1,
        "compose.rule.weight",
      ),
      workbookBinding11459 = workbookBinding1524(
        cdslIn3248.opacity,
        "compose.rule.opacity",
      );
    return {
      kind: "rule",
      name: workbookBinding1516(cdslIn3248.name),
      stroke: cdslIn3248.stroke,
      opacity: workbookBinding11459,
      weight: workbookBinding11458,
      width: workbookBinding1497(
        cdslIn3248.width,
        "fill",
        "compose.rule.width",
      ),
      height: workbookBinding1497(
        cdslIn3248.height ?? workbookBinding1494(workbookBinding11458),
        "hug",
        "compose.rule.height",
      ),
      position: workbookBinding1515(cdslIn3248.position),
      columnSpan: workbookBinding1523(
        cdslIn3248.columnSpan,
        "compose.rule.columnSpan",
      ),
      rowSpan: workbookBinding1523(cdslIn3248.rowSpan, "compose.rule.rowSpan"),
    };
  };
  workbookBinding1503 = (cdslIn1562 = {}) => {
    let workbookBinding7657 = cdslIn1562.geometry ?? "rect",
      workbookBinding7658 = {
        kind: "shape",
        name: workbookBinding1516(cdslIn1562.name),
        fill: cdslIn1562.fill,
        line: cdslIn1562.line,
        borderRadius: cdslIn1562.borderRadius,
        shadow: cdslIn1562.shadow,
        width: workbookBinding1497(
          cdslIn1562.width,
          workbookBinding1494(24),
          "compose.shape.width",
        ),
        height: workbookBinding1497(
          cdslIn1562.height,
          workbookBinding1494(24),
          "compose.shape.height",
        ),
        position: workbookBinding1515(cdslIn1562.position),
        columnSpan: workbookBinding1523(
          cdslIn1562.columnSpan,
          "compose.shape.columnSpan",
        ),
        rowSpan: workbookBinding1523(
          cdslIn1562.rowSpan,
          "compose.shape.rowSpan",
        ),
      };
    if (workbookBinding7657 === "custom") {
      let workbookBinding17077 = cdslIn1562.customPaths;
      if (!workbookBinding17077 || workbookBinding17077.length === 0)
        throw Error(
          'compose.shape geometry "custom" requires at least one custom path.',
        );
      return {
        ...workbookBinding7658,
        geometry: workbookBinding7657,
        customPaths: workbookBinding17077,
      };
    }
    if (cdslIn1562.customPaths !== undefined)
      throw Error(
        'compose.shape customPaths can only be used with geometry "custom".',
      );
    return {
      ...workbookBinding7658,
      geometry: workbookBinding7657,
    };
  };
  workbookBinding1504 = (cdslIn1801 = {}) => {
    let workbookBinding8326 = _q(cdslIn1801.from, cdslIn1801.to);
    return {
      kind: "connector",
      name: workbookBinding1516(cdslIn1801.name),
      connectorKind: cdslIn1801.kind ?? "straight",
      orientation: cdslIn1801.orientation ?? "horizontal",
      from: workbookBinding8326?.from,
      to: workbookBinding8326?.to,
      fromElement: cdslIn1801.fromElement,
      toElement: cdslIn1801.toElement,
      fromSide: cdslIn1801.fromSide,
      toSide: cdslIn1801.toSide,
      fromIdx: cdslIn1801.fromIdx,
      toIdx: cdslIn1801.toIdx,
      line: cdslIn1801.line,
      head: cdslIn1801.head,
      tail: cdslIn1801.tail,
      cap: cdslIn1801.cap,
      join: cdslIn1801.join,
      width: workbookBinding1497(
        cdslIn1801.width,
        workbookBinding8326?.width ?? workbookBinding1494(160),
        "compose.connector.width",
      ),
      height: workbookBinding1497(
        cdslIn1801.height,
        workbookBinding8326?.height ?? workbookBinding1494(16),
        "compose.connector.height",
      ),
      position:
        workbookBinding8326?.position ??
        workbookBinding1515(cdslIn1801.position),
      columnSpan: workbookBinding1523(
        cdslIn1801.columnSpan,
        "compose.connector.columnSpan",
      ),
      rowSpan: workbookBinding1523(
        cdslIn1801.rowSpan,
        "compose.connector.rowSpan",
      ),
    };
  };
  workbookBinding1505 = (cdslIn2128) => ({
    kind: "image",
    name: workbookBinding1516(cdslIn2128.name),
    source: workbookBinding1527(cdslIn2128),
    contentType: workbookBinding1516(cdslIn2128.contentType),
    fit: cdslIn2128.fit,
    alt: cdslIn2128.alt,
    geometry: cdslIn2128.geometry,
    borderRadius: cdslIn2128.borderRadius,
    crop: cdslIn2128.crop,
    rotation: workbookBinding1526(
      cdslIn2128.rotation,
      "compose.image.rotation",
    ),
    flipHorizontal: workbookBinding1525(
      cdslIn2128.flipHorizontal,
      "compose.image.flipHorizontal",
    ),
    flipVertical: workbookBinding1525(
      cdslIn2128.flipVertical,
      "compose.image.flipVertical",
    ),
    lockAspectRatio: workbookBinding1525(
      cdslIn2128.lockAspectRatio,
      "compose.image.lockAspectRatio",
    ),
    width: workbookBinding1497(cdslIn2128.width, "fill", "compose.image.width"),
    height: workbookBinding1497(
      cdslIn2128.height,
      "fill",
      "compose.image.height",
    ),
    position: workbookBinding1515(cdslIn2128.position),
    columnSpan: workbookBinding1523(
      cdslIn2128.columnSpan,
      "compose.image.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn2128.rowSpan, "compose.image.rowSpan"),
  });
  workbookBinding1506 = (cdslIn2983) => ({
    kind: "table",
    name: workbookBinding1516(cdslIn2983.name),
    rows: workbookBinding1522(cdslIn2983.rows, "compose.table.rows"),
    columns: workbookBinding1522(cdslIn2983.columns, "compose.table.columns"),
    values: cdslIn2983.values,
    columnWidths: cdslIn2983.columnWidths,
    columnTracks: cdslIn2983.columnTracks,
    style: workbookBinding1516(cdslIn2983.style),
    styleOptions: cdslIn2983.styleOptions,
    width: workbookBinding1497(cdslIn2983.width, "fill", "compose.table.width"),
    height: workbookBinding1497(
      cdslIn2983.height,
      "fill",
      "compose.table.height",
    ),
    position: workbookBinding1515(cdslIn2983.position),
    columnSpan: workbookBinding1523(
      cdslIn2983.columnSpan,
      "compose.table.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn2983.rowSpan, "compose.table.rowSpan"),
  });
  workbookBinding1507 = (cdslIn4696) => ({
    kind: "chart",
    name: workbookBinding1516(cdslIn4696.name),
    chartType: cdslIn4696.chartType,
    config: cdslIn4696.config,
    width: workbookBinding1497(cdslIn4696.width, "fill", "compose.chart.width"),
    height: workbookBinding1497(
      cdslIn4696.height,
      "fill",
      "compose.chart.height",
    ),
    position: workbookBinding1515(cdslIn4696.position),
    columnSpan: workbookBinding1523(
      cdslIn4696.columnSpan,
      "compose.chart.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn4696.rowSpan, "compose.chart.rowSpan"),
  });
  workbookBinding1508 = (cdslIn3200 = {}, cdslIn3201 = []) => ({
    kind: "row",
    name: workbookBinding1516(cdslIn3200.name),
    width: workbookBinding1497(cdslIn3200.width, "hug", "compose.row.width"),
    height: workbookBinding1497(cdslIn3200.height, "hug", "compose.row.height"),
    gap: workbookBinding1519(cdslIn3200.gap ?? 0, "compose.row.gap"),
    align: workbookBinding1517(
      cdslIn3200.align ?? "start",
      "compose.row.align",
    ),
    justify: workbookBinding1518(
      cdslIn3200.justify ?? "start",
      "compose.row.justify",
    ),
    padding: workbookBinding1514(cdslIn3200.padding),
    children: [...cdslIn3201],
    position: workbookBinding1515(cdslIn3200.position),
    columnSpan: workbookBinding1523(
      cdslIn3200.columnSpan,
      "compose.row.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn3200.rowSpan, "compose.row.rowSpan"),
  });
  workbookBinding1509 = (cdslIn3071 = {}, cdslIn3072 = []) => ({
    kind: "column",
    name: workbookBinding1516(cdslIn3071.name),
    width: workbookBinding1497(cdslIn3071.width, "hug", "compose.column.width"),
    height: workbookBinding1497(
      cdslIn3071.height,
      "hug",
      "compose.column.height",
    ),
    gap: workbookBinding1519(cdslIn3071.gap ?? 0, "compose.column.gap"),
    align: workbookBinding1517(
      cdslIn3071.align ?? "start",
      "compose.column.align",
    ),
    justify: workbookBinding1518(
      cdslIn3071.justify ?? "start",
      "compose.column.justify",
    ),
    padding: workbookBinding1514(cdslIn3071.padding),
    children: [...cdslIn3072],
    position: workbookBinding1515(cdslIn3071.position),
    columnSpan: workbookBinding1523(
      cdslIn3071.columnSpan,
      "compose.column.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn3071.rowSpan, "compose.column.rowSpan"),
  });
  workbookBinding1510 = (cdslIn1934, cdslIn1935 = []) => ({
    kind: "grid",
    name: workbookBinding1516(cdslIn1934.name),
    width: workbookBinding1497(cdslIn1934.width, "hug", "compose.grid.width"),
    height: workbookBinding1497(
      cdslIn1934.height,
      "hug",
      "compose.grid.height",
    ),
    columns: cdslH.parseComposeTracks(
      cdslIn1934.columns,
      "compose.grid.columns",
    ),
    rows: cdslIn1934.rows
      ? cdslH.parseComposeTracks(cdslIn1934.rows, "compose.grid.rows")
      : undefined,
    autoRows: cdslIn1934.autoRows ?? "auto",
    columnGap: workbookBinding1519(
      cdslIn1934.columnGap ?? 0,
      "compose.grid.columnGap",
    ),
    rowGap: workbookBinding1519(cdslIn1934.rowGap ?? 0, "compose.grid.rowGap"),
    alignItems: workbookBinding1517(
      cdslIn1934.alignItems ?? "stretch",
      "compose.grid.alignItems",
    ),
    justifyItems: workbookBinding1517(
      cdslIn1934.justifyItems ?? "stretch",
      "compose.grid.justifyItems",
    ),
    padding: workbookBinding1514(cdslIn1934.padding),
    children: [...cdslIn1935],
    position: workbookBinding1515(cdslIn1934.position),
    columnSpan: workbookBinding1523(
      cdslIn1934.columnSpan,
      "compose.grid.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn1934.rowSpan, "compose.grid.rowSpan"),
  });
  workbookBinding1511 = (cdslIn1919 = {}, cdslIn1920) => {
    let workbookBinding8632 =
      cdslIn1919.fill !== undefined ||
      cdslIn1919.line !== undefined ||
      cdslIn1919.borderRadius !== undefined ||
      cdslIn1919.shadow !== undefined;
    return {
      kind: "panel",
      name: workbookBinding1516(cdslIn1919.name),
      fill: cdslIn1919.fill,
      line: cdslIn1919.line,
      borderRadius: cdslIn1919.borderRadius,
      shadow: cdslIn1919.shadow,
      materialize: cdslIn1919.materialize ?? workbookBinding8632,
      align: workbookBinding1517(
        cdslIn1919.align ?? "start",
        "compose.panel.align",
      ),
      justify: workbookBinding1517(
        cdslIn1919.justify ?? "start",
        "compose.panel.justify",
      ),
      width: workbookBinding1497(
        cdslIn1919.width,
        "fill",
        "compose.panel.width",
      ),
      height: workbookBinding1497(
        cdslIn1919.height,
        "hug",
        "compose.panel.height",
      ),
      padding: workbookBinding1514(cdslIn1919.padding),
      child: cdslIn1920,
      position: workbookBinding1515(cdslIn1919.position),
      columnSpan: workbookBinding1523(
        cdslIn1919.columnSpan,
        "compose.panel.columnSpan",
      ),
      rowSpan: workbookBinding1523(cdslIn1919.rowSpan, "compose.panel.rowSpan"),
    };
  };
  workbookBinding1512 = workbookBinding1511;
  workbookBinding1513 = (cdslIn2997 = {}, cdslIn2998 = []) => ({
    kind: "layers",
    name: workbookBinding1516(cdslIn2997.name),
    width: workbookBinding1497(cdslIn2997.width, "hug", "compose.layers.width"),
    height: workbookBinding1497(
      cdslIn2997.height,
      "hug",
      "compose.layers.height",
    ),
    alignItems: workbookBinding1517(
      cdslIn2997.alignItems ?? "stretch",
      "compose.layers.alignItems",
    ),
    justifyItems: workbookBinding1517(
      cdslIn2997.justifyItems ?? "stretch",
      "compose.layers.justifyItems",
    ),
    padding: workbookBinding1514(cdslIn2997.padding),
    children: [...cdslIn2998],
    position: workbookBinding1515(cdslIn2997.position),
    columnSpan: workbookBinding1523(
      cdslIn2997.columnSpan,
      "compose.layers.columnSpan",
    ),
    rowSpan: workbookBinding1523(cdslIn2997.rowSpan, "compose.layers.rowSpan"),
  });
  workbookBinding1514 = (cdslIn3114) => {
    if (cdslIn3114 === undefined)
      return {
        ...workbookBinding1500,
      };
    if (typeof cdslIn3114 == "number" || typeof cdslIn3114 == "string") {
      let workbookBinding21385 = workbookBinding1519(
        cdslIn3114,
        "compose.padding",
      );
      return {
        top: workbookBinding21385,
        right: workbookBinding21385,
        bottom: workbookBinding21385,
        left: workbookBinding21385,
      };
    }
    let workbookBinding11216 = workbookBinding1519(
        cdslIn3114.x ?? 0,
        "compose.padding.x",
      ),
      workbookBinding11217 = workbookBinding1519(
        cdslIn3114.y ?? 0,
        "compose.padding.y",
      );
    return {
      top: workbookBinding1519(
        cdslIn3114.top ?? workbookBinding11217,
        "compose.padding.top",
      ),
      right: workbookBinding1519(
        cdslIn3114.right ?? workbookBinding11216,
        "compose.padding.right",
      ),
      bottom: workbookBinding1519(
        cdslIn3114.bottom ?? workbookBinding11217,
        "compose.padding.bottom",
      ),
      left: workbookBinding1519(
        cdslIn3114.left ?? workbookBinding11216,
        "compose.padding.left",
      ),
    };
  };
  workbookBinding1515 = (cdslIn3759) => {
    if (cdslIn3759 === undefined) return;
    let workbookBinding12484 = {};
    return (
      cdslIn3759.left !== undefined &&
        (workbookBinding12484.left = workbookBinding1520(
          cdslIn3759.left,
          "compose.position.left",
        )),
      cdslIn3759.top !== undefined &&
        (workbookBinding12484.top = workbookBinding1520(
          cdslIn3759.top,
          "compose.position.top",
        )),
      cdslIn3759.right !== undefined &&
        (workbookBinding12484.right = workbookBinding1520(
          cdslIn3759.right,
          "compose.position.right",
        )),
      cdslIn3759.bottom !== undefined &&
        (workbookBinding12484.bottom = workbookBinding1520(
          cdslIn3759.bottom,
          "compose.position.bottom",
        )),
      Object.keys(workbookBinding12484).length > 0
        ? workbookBinding12484
        : undefined
    );
  };
  _q = (cdslIn1911, cdslIn1912) => {
    if (cdslIn1911 === undefined && cdslIn1912 === undefined) return;
    if (cdslIn1911 === undefined || cdslIn1912 === undefined)
      throw Error("compose.connector requires both from and to points.");
    let workbookBinding8608 = {
        left: workbookBinding1520(
          cdslIn1911.left,
          "compose.connector.from.left",
        ),
        top: workbookBinding1520(cdslIn1911.top, "compose.connector.from.top"),
      },
      workbookBinding8609 = {
        left: workbookBinding1520(cdslIn1912.left, "compose.connector.to.left"),
        top: workbookBinding1520(cdslIn1912.top, "compose.connector.to.top"),
      },
      workbookBinding8610 = Math.min(
        workbookBinding8608.left,
        workbookBinding8609.left,
      ),
      workbookBinding8611 = Math.min(
        workbookBinding8608.top,
        workbookBinding8609.top,
      ),
      workbookBinding8612 = Math.max(
        1,
        Math.abs(workbookBinding8609.left - workbookBinding8608.left),
      ),
      workbookBinding8613 = Math.max(
        1,
        Math.abs(workbookBinding8609.top - workbookBinding8608.top),
      );
    return {
      position: {
        left: workbookBinding8610,
        top: workbookBinding8611,
      },
      width: workbookBinding1494(workbookBinding8612),
      height: workbookBinding1494(workbookBinding8613),
      from: {
        left: workbookBinding8608.left - workbookBinding8610,
        top: workbookBinding8608.top - workbookBinding8611,
      },
      to: {
        left: workbookBinding8609.left - workbookBinding8610,
        top: workbookBinding8609.top - workbookBinding8611,
      },
    };
  };
  workbookBinding1516 = (cdslIn10753) => {
    if (cdslIn10753 === undefined) return;
    let workbookBinding21273 = cdslIn10753.trim();
    return workbookBinding21273.length > 0 ? workbookBinding21273 : undefined;
  };
  workbookBinding1517 = (cdslIn8636, cdslIn8637) => {
    if (
      cdslIn8636 === "start" ||
      cdslIn8636 === "center" ||
      cdslIn8636 === "end" ||
      cdslIn8636 === "stretch"
    )
      return cdslIn8636;
    throw Error(`${cdslIn8637} must be start, center, end, or stretch.`);
  };
  workbookBinding1518 = (cdslIn8638, cdslIn8639) => {
    if (
      cdslIn8638 === "start" ||
      cdslIn8638 === "center" ||
      cdslIn8638 === "end" ||
      cdslIn8638 === "between"
    )
      return cdslIn8638;
    throw Error(`${cdslIn8639} must be start, center, end, or between.`);
  };
  workbookBinding1519 = (cdslIn15943, cdslIn15944) =>
    resolveSpaceToken(cdslIn15943, {
      name: cdslIn15944,
    });
  workbookBinding1520 = (cdslIn6026, cdslIn6027) => {
    if (typeof cdslIn6026 == "number") {
      if (!Number.isFinite(cdslIn6026))
        throw Error(`${cdslIn6027} must be a finite number.`);
      return cdslIn6026;
    }
    let workbookBinding16068 = cdslIn6026.trim().toLowerCase(),
      workbookBinding16069 = /^(-?\d+(?:\.\d+)?)\s*px$/i.exec(
        workbookBinding16068,
      );
    return workbookBinding16069
      ? Number(workbookBinding16069[1])
      : workbookBinding1519(cdslIn6026, cdslIn6027);
  };
  workbookBinding1521 = (cdslIn10156, cdslIn10157) => {
    if (!Number.isFinite(cdslIn10156) || cdslIn10156 <= 0)
      throw Error(`${cdslIn10157} must be a positive number.`);
    return cdslIn10156;
  };
  workbookBinding1522 = (cdslIn9319, cdslIn9320) => {
    if (
      !Number.isFinite(cdslIn9319) ||
      cdslIn9319 <= 0 ||
      !Number.isInteger(cdslIn9319)
    )
      throw Error(`${cdslIn9320} must be a positive integer.`);
    return cdslIn9319;
  };
  workbookBinding1523 = (cdslIn15576, cdslIn15577) =>
    cdslIn15576 === undefined
      ? 1
      : workbookBinding1522(cdslIn15576, cdslIn15577);
  workbookBinding1524 = (cdslIn8604, cdslIn8605) => {
    if (cdslIn8604 !== undefined) {
      if (!Number.isFinite(cdslIn8604) || cdslIn8604 < 0 || cdslIn8604 > 1)
        throw Error(`${cdslIn8605} must be between 0 and 1.`);
      return cdslIn8604;
    }
  };
  workbookBinding1525 = (cdslIn9607, cdslIn9608) => {
    if (cdslIn9607 !== undefined) {
      if (typeof cdslIn9607 != "boolean")
        throw Error(`${cdslIn9608} must be a boolean.`);
      return cdslIn9607;
    }
  };
  workbookBinding1526 = (cdslIn9505, cdslIn9506) => {
    if (cdslIn9505 !== undefined) {
      if (!Number.isFinite(cdslIn9505))
        throw Error(`${cdslIn9506} must be a finite number.`);
      return cdslIn9505;
    }
  };
  workbookBinding1527 = (cdslIn6441) =>
    "path" in cdslIn6441
      ? {
          path: cdslIn6441.path,
        }
      : "dataUrl" in cdslIn6441
        ? {
            dataUrl: cdslIn6441.dataUrl,
          }
        : "blob" in cdslIn6441
          ? {
              blob: cdslIn6441.blob,
            }
          : "uri" in cdslIn6441
            ? {
                uri: cdslIn6441.uri,
              }
            : {
                prompt: cdslIn6441.prompt,
              };
});

/** Legacy OOe. */
export const OOe = ensureComposeElementBuildersInit;
