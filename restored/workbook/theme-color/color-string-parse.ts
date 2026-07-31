// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: CSS/named/hex color string parsing.

import { namedCssColors } from "./named-css-colors";
import { isThemeSchemeColorName } from "./is-theme-scheme-color-name";
import { themeSchemeColorAliases } from "./theme-scheme-color-names";
import { Zn as colorTypeEnum } from "../presentation-protobuf";
import { hexToRgb, rgbToHex } from "./rgb-hex";
import { applyColorTransform } from "./color-transform-ops";
import {
  clampByte,
  byteToHex,
  clampUnitInterval,
  parseUnitFraction,
} from "./color-unit-helpers";

const hexDigitsPattern = /^[0-9a-f]+$/i;
const rgbaCssPattern =
  /^rgba?\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})(?:\s*(?:\/|,)\s*([\d.]+%?))?\s*\)$/i;
const defaultHexBlack = "#000000";

function parseOpacityToken(token: string | undefined): number | undefined {
  if (!token) return;
  const trimmed = token.trim();
  if (!trimmed) return;
  if (trimmed.endsWith("%")) {
    const pct = Number(trimmed.slice(0, -1));
    return Number.isNaN(pct) ? undefined : clampUnitInterval(pct / 100);
  }
  const num = Number(trimmed);
  if (!Number.isNaN(num))
    return clampUnitInterval(
      num > 1 && num <= 100 ? num / 100 : num,
    );
}

function isThemeSchemeColorNameLocal(name: string): boolean {
  return isThemeSchemeColorName(name);
}

export function resolveNamedCssColor(
  raw: string,
): { hex: string; alpha?: number } | null {
  const colorCfg5279 = raw;

  let workbookBinding14883 = colorCfg5279.trim();
  if (!workbookBinding14883) return null;
  let workbookBinding14884 = workbookBinding14883.toLowerCase(),
    workbookBinding14885 = workbookBinding14884.indexOf("/"),
    workbookBinding14886 = (
      workbookBinding14885 >= 0
        ? workbookBinding14884.slice(0, workbookBinding14885)
        : workbookBinding14884
    ).trim(),
    workbookBinding14887 =
      workbookBinding14885 >= 0
        ? workbookBinding14884.slice(workbookBinding14885 + 1)
        : undefined;
  if (!workbookBinding14886) return null;
  let workbookBinding14888 = namedCssColors[workbookBinding14886];
  if (typeof workbookBinding14888 != "string") return null;
  let workbookBinding14889 = parseUnitFraction(workbookBinding14887);
  return workbookBinding14889 === undefined
    ? {
        hex: workbookBinding14888,
      }
    : {
        hex: workbookBinding14888,
        alpha: workbookBinding14889,
      };
}

function parseHexColor(colorCfg2553: string) {

  if (!colorCfg2553.startsWith("#")) return null;
  let workbookBinding9920 = colorCfg2553.slice(1);
  if (!hexDigitsPattern.test(workbookBinding9920)) return null;
  if (workbookBinding9920.length === 3 || workbookBinding9920.length === 4) {
    let [workbookBinding16284, workbookBinding16285, workbookBinding16286] =
        workbookBinding9920.slice(0, 3),
      workbookBinding16287 =
        `#${workbookBinding16284}${workbookBinding16284}${workbookBinding16285}${workbookBinding16285}${workbookBinding16286}${workbookBinding16286}`.toUpperCase();
    if (workbookBinding9920.length === 4) {
      let workbookBinding20251 = workbookBinding9920[3],
        workbookBinding20252 = `${workbookBinding20251}${workbookBinding20251}`,
        workbookBinding20253 = parseInt(workbookBinding20252, 16);
      return Number.isNaN(workbookBinding20253)
        ? null
        : {
            hex: workbookBinding16287,
            alpha: clampUnitInterval(workbookBinding20253 / 255),
          };
    }
    return {
      hex: workbookBinding16287,
    };
  }
  if (workbookBinding9920.length === 6)
    return {
      hex: `#${workbookBinding9920.toUpperCase()}`,
    };
  if (workbookBinding9920.length === 8) {
    let workbookBinding19329 = workbookBinding9920.slice(0, 6),
      workbookBinding19330 = workbookBinding9920.slice(6),
      workbookBinding19331 = parseInt(workbookBinding19330, 16);
    return Number.isNaN(workbookBinding19331)
      ? null
      : {
          hex: `#${workbookBinding19329.toUpperCase()}`,
          alpha: clampUnitInterval(workbookBinding19331 / 255),
        };
  }
  return null;
}

function parseRgbaColor(colorCfg7337: string) {

  let workbookBinding17721 = rgbaCssPattern.exec(colorCfg7337);
  if (!workbookBinding17721) return null;
  let workbookBinding17722 = clampByte(Number(workbookBinding17721[1])),
    workbookBinding17723 = clampByte(Number(workbookBinding17721[2])),
    workbookBinding17724 = clampByte(Number(workbookBinding17721[3])),
    workbookBinding17725 = parseOpacityToken(workbookBinding17721[4]);
  return {
    hex: `#${byteToHex(workbookBinding17722)}${byteToHex(workbookBinding17723)}${byteToHex(workbookBinding17724)}`.toUpperCase(),
    alpha: workbookBinding17725,
  };
}

function parseNumericToken(colorCfg7436: string) {

  let workbookBinding17907 = colorCfg7436.trim();
  if (!workbookBinding17907) return;
  if (workbookBinding17907.endsWith("%")) {
    let workbookBinding22285 = Number(workbookBinding17907.slice(0, -1));
    return Number.isFinite(workbookBinding22285)
      ? workbookBinding22285
      : undefined;
  }
  let workbookBinding17908 = Number(workbookBinding17907);
  return Number.isFinite(workbookBinding17908)
    ? workbookBinding17908
    : undefined;
}

export function parseLightenDarkenSuffix(colorCfg3187: string) {

  let workbookBinding11359 = colorCfg3187.trim();
  if (!workbookBinding11359 || workbookBinding11359.includes("(")) return null;
  let workbookBinding11360 = workbookBinding11359,
    workbookBinding11361,
    workbookBinding11362,
    workbookBinding11363,
    workbookBinding11364 = /^(.*)\/([\d.]+%?)$/.exec(workbookBinding11360);
  if (
    workbookBinding11364 &&
    ((workbookBinding11360 = workbookBinding11364[1]?.trim() ?? ""),
    (workbookBinding11361 = parseNumericToken(workbookBinding11364[2] ?? "")),
    workbookBinding11361 === undefined)
  )
    return null;
  let workbookBinding11365 = /^(.*?)([+-])([\d.]+%?)$/.exec(
    workbookBinding11360,
  );
  if (workbookBinding11365) {
    workbookBinding11360 = workbookBinding11365[1]?.trim() ?? "";
    let workbookBinding20695 = parseNumericToken(workbookBinding11365[3] ?? "");
    if (workbookBinding20695 === undefined) return null;
    workbookBinding11365[2] === "+"
      ? (workbookBinding11362 = workbookBinding20695)
      : (workbookBinding11363 = workbookBinding20695);
  }
  return !workbookBinding11360 ||
    (workbookBinding11361 === undefined &&
      workbookBinding11362 === undefined &&
      workbookBinding11363 === undefined)
    ? null
    : {
        base: workbookBinding11360,
        transform: {
          opacity: workbookBinding11361,
          lighten: workbookBinding11362,
          darken: workbookBinding11363,
        },
      };
}

export function parseColorString(colorCfg2584: string) {

  let workbookBinding9995 = colorCfg2584.trim();
  if (!workbookBinding9995) return null;
  let workbookBinding9996 = workbookBinding9995.toLowerCase(),
    workbookBinding9997 = themeSchemeColorAliases[workbookBinding9996] ?? workbookBinding9996;
  if (isThemeSchemeColorName(workbookBinding9997))
    return {
      type: colorTypeEnum.COLOR_TYPE_SCHEME,
      value: workbookBinding9997,
    };
  if (workbookBinding9996 === "transparent")
    return {
      type: colorTypeEnum.COLOR_TYPE_RGB,
      value: defaultHexBlack,
      alpha: 0,
    };
  if (
    !workbookBinding9995.startsWith("#") &&
    hexDigitsPattern.test(workbookBinding9995) &&
    [3, 4, 6, 8].includes(workbookBinding9995.length)
  ) {
    let workbookBinding21615 = parseHexColor(`#${workbookBinding9995}`);
    if (workbookBinding21615)
      return {
        type: colorTypeEnum.COLOR_TYPE_RGB,
        value: workbookBinding21615.hex,
        alpha: workbookBinding21615.alpha,
      };
  }
  let workbookBinding9998 = parseHexColor(workbookBinding9995);
  if (workbookBinding9998)
    return {
      type: colorTypeEnum.COLOR_TYPE_RGB,
      value: workbookBinding9998.hex,
      alpha: workbookBinding9998.alpha,
    };
  let workbookBinding9999 = parseRgbaColor(workbookBinding9995);
  if (workbookBinding9999)
    return {
      type: colorTypeEnum.COLOR_TYPE_RGB,
      value: workbookBinding9999.hex,
      alpha: workbookBinding9999.alpha,
    };
  let workbookBinding10000 = resolveNamedCssColor(workbookBinding9995);
  return workbookBinding10000
    ? {
        type: colorTypeEnum.COLOR_TYPE_RGB,
        value: workbookBinding10000.hex,
        alpha: workbookBinding10000.alpha,
      }
    : null;
}

export function normalizeHexColor(colorCfg10661: string): string {

  if (!colorCfg10661) return defaultHexBlack;
  let workbookBinding21163 = parseHexColor(
    colorCfg10661.startsWith("#")
      ? colorCfg10661
      : `#${colorCfg10661}`,
  );
  return workbookBinding21163
    ? workbookBinding21163.hex
    : (`${colorCfg10661}`, defaultHexBlack);
}

export function applyTransformToHex(
  colorCfg11072: string,
  colorCfg11073: Record<string, number> | null | undefined,
): string {

  let workbookBinding21584 = normalizeHexColor(colorCfg11072);
  return colorCfg11073
    ? rgbToHex(
        applyColorTransform(
          hexToRgb(workbookBinding21584),
          colorCfg11073,
          "drawingml-crgb",
        ),
      )
    : workbookBinding21584.toUpperCase();
}
