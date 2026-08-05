// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: Stylesheet helpers — border/fill clone + theme-color dxf (legacy Nae–Rae).

import {
  tr as fillTypeEnum,
  dr as patternTypeEnum,
  Zn as colorTypeEnum,
} from "../presentation-protobuf";
import { WorkbookColor } from "../theme-color";
import { Fill } from "../fill";
import { BorderSide } from "./border-side";
import { Borders } from "./borders";
import {
  resolveColorProtoToRgbaString,
  spreadsheetMlColorSpace,
} from "./color-rgba-wire";

export function borderFromConfig(props: Record<string, unknown>): Borders {
  let styleBind16501 = new Borders();
  return (
    (styleBind16501.top = borderSideFromConfig(props.top)),
    (styleBind16501.bottom = borderSideFromConfig(props.bottom)),
    (styleBind16501.left = borderSideFromConfig(props.left)),
    (styleBind16501.right = borderSideFromConfig(props.right)),
    (styleBind16501.diagonal = borderSideFromConfig(props.diagonal)),
    (styleBind16501.diagonalUp = props.diagonalUp),
    (styleBind16501.diagonalDown = props.diagonalDown),
    styleBind16501
  );
}
export function borderSideFromConfig(
  styleCfg8054: Record<string, unknown> | null | undefined,
): BorderSide | undefined {
  if (!styleCfg8054) return;
  let styleBind18564 = new BorderSide();
  return (
    (styleBind18564.style = styleCfg8054.style),
    (styleBind18564.weight = styleCfg8054.weight),
    styleCfg8054.color &&
      (styleBind18564.color =
        styleCfg8054.color instanceof WorkbookColor
          ? styleCfg8054.color
          : new WorkbookColor(styleCfg8054.color)),
    styleBind18564
  );
}
export function cloneFill(props: Fill): Fill {
  let styleBind20495 = props.toProto();
  if (!styleBind20495) throw Error("Fill is missing proto data.");
  return new Fill({
    type: "proto",
    proto: styleBind20495,
  });
}

export function coerceSolidFillToPattern(
  props: Record<string, unknown>,
): Record<string, unknown> {
  return props.type === fillTypeEnum.FILL_TYPE_SOLID
    ? {
        ...props,
        type: fillTypeEnum.FILL_TYPE_PATTERN,
        pattern: {
          patternType: patternTypeEnum.PATTERN_TYPE_SOLID,
          color: props.color,
        },
      }
    : props;
}
export function applyThemeColorsToDxf(
  styleCfg3881: Record<string, any>,
  styleCfg3882: unknown,
): void {
  if (styleCfg3881.fill?.color) {
    let styleBind22337 = resolveSchemeColorToRgbProto(
      styleCfg3881.fill.color,
      styleCfg3882,
    );
    styleBind22337 &&
      (styleCfg3881.fill = {
        ...styleCfg3881.fill,
        color: styleBind22337,
      });
  }
  if (styleCfg3881.font?.fill?.color) {
    let styleBind21373 = resolveSchemeColorToRgbProto(
      styleCfg3881.font.fill.color,
      styleCfg3882,
    );
    styleBind21373 &&
      (styleCfg3881.font = {
        ...styleCfg3881.font,
        fill: {
          ...styleCfg3881.font.fill,
          color: styleBind21373,
        },
      });
  }
  styleCfg3881.border &&= {
    ...styleCfg3881.border,
    top: applyThemeColorToBorderSide(styleCfg3881.border.top, styleCfg3882),
    bottom: applyThemeColorToBorderSide(
      styleCfg3881.border.bottom,
      styleCfg3882,
    ),
    left: applyThemeColorToBorderSide(styleCfg3881.border.left, styleCfg3882),
    right: applyThemeColorToBorderSide(styleCfg3881.border.right, styleCfg3882),
    diagonal: applyThemeColorToBorderSide(
      styleCfg3881.border.diagonal,
      styleCfg3882,
    ),
  };
}
export function applyThemeColorToBorderSide(
  styleCfg10947: Record<string, any> | null | undefined,
  styleCfg10948: unknown,
): Record<string, any> | null | undefined {
  if (!styleCfg10947?.color) return styleCfg10947;
  let styleBind21453 = resolveSchemeColorToRgbProto(
    styleCfg10947.color,
    styleCfg10948,
  );
  return styleBind21453
    ? {
        ...styleCfg10947,
        color: styleBind21453,
      }
    : styleCfg10947;
}
export function resolveSchemeColorToRgbProto(
  styleCfg4443: Record<string, any>,
  styleCfg4444: unknown,
): Record<string, unknown> {
  if (
    styleCfg4443.type !== colorTypeEnum.COLOR_TYPE_SCHEME &&
    styleCfg4443.type !== colorTypeEnum.COLOR_TYPE_SYSTEM
  )
    return styleCfg4443;
  let styleBind13679 = parseRgbaCss(
    resolveColorProtoToRgbaString(
      styleCfg4443,
      styleCfg4444,
      spreadsheetMlColorSpace,
    ),
  );
  if (!styleBind13679) return styleCfg4443;
  let { r: styleBind13680, g, b, a } = styleBind13679,
    styleBind13681 = (styleCfg15593) =>
      styleCfg15593.toString(16).padStart(2, "0"),
    styleBind13682 = styleBind13681(
      Math.round(Math.max(0, Math.min(1, a)) * 255),
    );
  return {
    type: colorTypeEnum.COLOR_TYPE_RGB,
    value:
      `${styleBind13682}${styleBind13681(styleBind13680)}${styleBind13681(g)}${styleBind13681(b)}`.toUpperCase(),
    transform: undefined,
  };
}
export function parseRgbaCss(
  props: string,
): { r: number; g: number; b: number; a: number } | null {
  let styleBind13597 = props.match(
    /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i,
  );
  if (!styleBind13597) return null;
  let styleBind13598 = Math.max(0, Math.min(255, Number(styleBind13597[1]))),
    styleBind13599 = Math.max(0, Math.min(255, Number(styleBind13597[2]))),
    styleBind13600 = Math.max(0, Math.min(255, Number(styleBind13597[3]))),
    styleBind13601 =
      styleBind13597[4] === undefined ? 1 : Number(styleBind13597[4]);
  return [styleBind13598, styleBind13599, styleBind13600, styleBind13601].some(
    (item) => Number.isNaN(item),
  )
    ? null
    : {
        r: styleBind13598,
        g: styleBind13599,
        b: styleBind13600,
        a: styleBind13601,
      };
}
