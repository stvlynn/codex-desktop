// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: grid frame + auto-layout (legacy bh672/ADe + Binding1372–1386).
// Stage-3 wave-118. Binding137x were exclusive to this cluster (jDe inlined).

/** Default grid column count (legacy Binding1372). */
export const DEFAULT_COLUMNS = 12;
/** Default gutter px (legacy Binding1373). */
export const DEFAULT_GUTTER = 24;
/** Default horizontal margin (legacy Binding1374). */
export const DEFAULT_MARGIN_X = 80;
/** Default vertical margin (legacy Binding1375). */
export const DEFAULT_MARGIN_Y = 64;
/** Default row height (legacy Binding1376). */
export const DEFAULT_ROW_HEIGHT = 72;
/** Default row gap (legacy Binding1377). */
export const DEFAULT_ROW_GAP = 16;
/** Default snap base unit (legacy Binding1378). */
export const DEFAULT_BASE_UNIT = 8;

export function positiveInt(value: any, fallback: any, label: any): any {
  if (value === undefined) return fallback;
  if (!Number.isFinite(value) || value <= 0 || !Number.isInteger(value))
    throw Error(`${label} must be a positive integer.`);
  return value;
}

export function positiveNumber(value: any, fallback: any, label: any): any {
  if (value === undefined) return fallback;
  if (!Number.isFinite(value) || value <= 0)
    throw Error(`${label} must be a positive number.`);
  return value;
}

export function nonNegativeNumber(value: any, fallback: any, label: any): any {
  if (value === undefined) return fallback;
  if (!Number.isFinite(value) || value < 0)
    throw Error(`${label} must be a non-negative number.`);
  return value;
}

export function snapToBaseUnit(value: any, baseUnit: any): any {
  return Math.round(value / baseUnit) * baseUnit;
}

export function resolveNamedArea(name: any, areas: any): any {
  if (typeof name != "string") return name;
  if (!areas)
    throw Error(
      `Named grid area "${name}" was provided, but options.areas is empty.`,
    );
  const area = areas[name];
  if (!area)
    throw Error(`Named grid area "${name}" was not found in options.areas.`);
  return area;
}

export function requirePositiveWhenNotStretch(
  value: any,
  label: any,
  alignLabel: any,
): any {
  if (!Number.isFinite(value) || value === undefined || value <= 0)
    throw Error(
      `${label} must be a positive number when ${alignLabel} is not "stretch".`,
    );
  return value;
}

export function alignOffset(
  start: any,
  container: any,
  size: any,
  align: any,
): any {
  return align === "start" || align === "stretch"
    ? start
    : align === "center"
      ? start + (container - size) / 2
      : start + (container - size);
}

export function resolveInsets(opts: any): any {
  const inset = nonNegativeNumber(opts.inset, 0, "inset");
  const insetX = nonNegativeNumber(opts.insetX, inset, "insetX");
  const insetY = nonNegativeNumber(opts.insetY, inset, "insetY");
  return {
    left: nonNegativeNumber(opts.insetLeft, insetX, "insetLeft"),
    right: nonNegativeNumber(opts.insetRight, insetX, "insetRight"),
    top: nonNegativeNumber(opts.insetTop, insetY, "insetTop"),
    bottom: nonNegativeNumber(opts.insetBottom, insetY, "insetBottom"),
  };
}

export function applyInsetsToFrame(frame: any, insets: any): any {
  const width = frame.width - insets.left - insets.right;
  const height = frame.height - insets.top - insets.bottom;
  if (width <= 0 || height <= 0)
    throw Error("Grid item insets collapse the area below zero width/height.");
  return {
    left: frame.left + insets.left,
    top: frame.top + insets.top,
    width,
    height,
  };
}

/** No-op: defaults/helpers are module-scoped (legacy jDe). */
export function ensureGridLayoutInit(): void {}

export function computeGridFrame(
  gflIn1358: any,
  gflIn1359: any,
  gflIn1360: any = {},
) {
  let gflBind7114 = positiveInt(gflIn1360.columns, DEFAULT_COLUMNS, "columns"),
    gflBind7115 = nonNegativeNumber(gflIn1360.gutter, DEFAULT_GUTTER, "gutter"),
    gflBind7116 = nonNegativeNumber(
      gflIn1360.marginX,
      DEFAULT_MARGIN_X,
      "marginX",
    ),
    gflBind7117 = nonNegativeNumber(
      gflIn1360.marginY,
      DEFAULT_MARGIN_Y,
      "marginY",
    ),
    gflBind7118 = positiveNumber(
      gflIn1360.rowHeight,
      DEFAULT_ROW_HEIGHT,
      "rowHeight",
    ),
    gflBind7119 = nonNegativeNumber(
      gflIn1360.rowGap,
      DEFAULT_ROW_GAP,
      "rowGap",
    ),
    gflBind7120 = positiveNumber(
      gflIn1360.baseUnit,
      DEFAULT_BASE_UNIT,
      "baseUnit",
    ),
    gflBind7121 = positiveInt(gflIn1359.colStart, 1, "colStart"),
    gflBind7122 = positiveInt(gflIn1359.colSpan, 1, "colSpan");
  if (gflBind7121 + gflBind7122 - 1 > gflBind7114)
    throw Error(
      `Grid area exceeds column count: colStart=${gflBind7121}, colSpan=${gflBind7122}, columns=${gflBind7114}.`,
    );
  let gflBind7123 =
    gflIn1358.width -
    gflBind7116 * 2 -
    gflBind7115 * Math.max(0, gflBind7114 - 1);
  if (gflBind7123 <= 0)
    throw Error(
      `Grid width is not positive. Check marginX/gutter/columns for frame width ${gflIn1358.width}.`,
    );
  let gflBind7124 = gflBind7123 / gflBind7114,
    gflBind7125 =
      gflIn1358.left +
      gflBind7116 +
      (gflBind7121 - 1) * (gflBind7124 + gflBind7115),
    gflBind7126 =
      gflBind7122 * gflBind7124 + Math.max(0, gflBind7122 - 1) * gflBind7115,
    gflBind7127 =
      gflIn1359.rowStart === undefined
        ? 1
        : positiveInt(gflIn1359.rowStart, 1, "rowStart"),
    gflBind7128 =
      gflIn1359.rowSpan === undefined
        ? 1
        : positiveInt(gflIn1359.rowSpan, 1, "rowSpan"),
    gflBind7129 =
      gflIn1359.top ??
      gflIn1358.top +
        gflBind7117 +
        (gflBind7127 - 1) * (gflBind7118 + gflBind7119),
    gflBind7130 =
      gflIn1359.height ??
      gflBind7128 * gflBind7118 + Math.max(0, gflBind7128 - 1) * gflBind7119;
  return {
    left: snapToBaseUnit(gflBind7125, gflBind7120),
    top: snapToBaseUnit(gflBind7129, gflBind7120),
    width: Math.max(1, snapToBaseUnit(gflBind7126, gflBind7120)),
    height: Math.max(1, snapToBaseUnit(gflBind7130, gflBind7120)),
  };
}
export function autoLayoutFrames(
  gflIn1988: any,
  gflIn1989: any,
  gflIn1990: any = {},
) {
  if (gflIn1989.length === 0) return [];
  let gflBind8779 = positiveNumber(
      gflIn1990.baseUnit,
      DEFAULT_BASE_UNIT,
      "baseUnit",
    ),
    gflBind8780 = gflIn1990.defaultAlignX ?? "stretch",
    gflBind8781 = gflIn1990.defaultAlignY ?? "stretch";
  return gflIn1989.map((item) => {
    let gflBind10509 = computeGridFrame(
        gflIn1988,
        resolveNamedArea(item.area, gflIn1990.areas),
        gflIn1990,
      ),
      gflBind10510 = resolveInsets(item),
      gflBind10511 = applyInsetsToFrame(gflBind10509, gflBind10510),
      gflBind10512 = item.alignX ?? gflBind8780,
      gflBind10513 = item.alignY ?? gflBind8781,
      gflBind10514 =
        gflBind10512 === "stretch"
          ? gflBind10511.width
          : _W(item.shape.position.width, "shape.position.width", "alignX"),
      gflBind10515 =
        gflBind10513 === "stretch"
          ? gflBind10511.height
          : _W(item.shape.position.height, "shape.position.height", "alignY"),
      gflBind10516 = alignOffset(
        gflBind10511.left,
        gflBind10511.width,
        gflBind10514,
        gflBind10512,
      ),
      gflBind10517 = alignOffset(
        gflBind10511.top,
        gflBind10511.height,
        gflBind10515,
        gflBind10513,
      );
    return {
      shape: item.shape,
      frame: {
        left: snapToBaseUnit(gflBind10516, gflBind8779),
        top: snapToBaseUnit(gflBind10517, gflBind8779),
        width: Math.max(1, snapToBaseUnit(gflBind10514, gflBind8779)),
        height: Math.max(1, snapToBaseUnit(gflBind10515, gflBind8779)),
      },
    };
  });
}
