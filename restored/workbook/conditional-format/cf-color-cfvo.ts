// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: CF color resolve + cfvo helpers (legacy resolveCfFormatColor cluster).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import {} from "../../utils/spreadsheet-address-utils";
import { themeStyleMapsFromProto } from "../design-tokens";
import { WorkbookColor } from "../theme-color";
import { resolveColorProtoToRgbaString } from "../color-resolve";
import { resolveIconCount, defaultIconThresholds } from "../icon-set";

/** Legacy `bpe` — spreadsheetml color space for CF color resolve. */
export const SPREADSHEETML_COLOR_SPACE = {
  colorSpace: "spreadsheetml",
} as const;

/** Legacy `Yfe` — prefer `.format` object when present. */
export function coerceCfFormatBag(props: unknown): unknown {
  if (!props || typeof props != "object" || Array.isArray(props)) return;
  let format = (props as { format?: unknown }).format;
  return format && typeof format == "object" && !Array.isArray(format)
    ? format
    : props;
}

export function resolveCfFormatColor(cfIn9555: unknown, cfIn9556: unknown) {
  let cfBind20082 = coerceCfFormatBag(cfIn9556);
  if (cfBind20082)
    return cfIn9555.workbook
      .getStyleRegistry()
      .registerDifferentialFormat(
        cfBind20082,
        themeStyleMapsFromProto(cfIn9555.workbook.theme),
      );
}
export function normalizeFormulaString(cfIn10383: unknown) {
  if (typeof cfIn10383 == "number") return String(cfIn10383);
  let cfBind20855 = cfIn10383.trim();
  return cfBind20855.startsWith("=") ? cfBind20855.slice(1) : cfBind20855;
}
export function formulasFromInput(cfIn12596: unknown) {
  return (Array.isArray(cfIn12596) ? cfIn12596 : [cfIn12596]).map((item) =>
    normalizeFormulaString(item),
  );
}
export function defaultCfvoPair(cfIn9633: unknown) {
  return cfIn9633 <= 2
    ? [
        {
          type: "min",
        },
        {
          type: "max",
        },
      ]
    : [
        {
          type: "min",
        },
        {
          type: "percentile",
          val: "50",
        },
        {
          type: "max",
        },
      ];
}
export function normalizeCfvo(cfIn4474: unknown, cfIn4475: unknown) {
  if (typeof cfIn4474 == "number")
    return {
      type: "num",
      val: String(cfIn4474),
    };
  if (typeof cfIn4474 == "string") {
    let cfBind19127 = cfIn4474.trim();
    return cfBind19127 === "min" || cfBind19127 === "max"
      ? {
          type: cfBind19127,
        }
      : cfBind19127.endsWith("%")
        ? {
            type: cfIn4475,
            val: cfBind19127.slice(0, -1),
          }
        : {
            type: "num",
            val: cfBind19127,
          };
  }
  let cfBind13722 =
    cfIn4474.value === undefined || cfIn4474.value === null
      ? undefined
      : String(cfIn4474.value);
  return {
    type: cfIn4474.type,
    val: cfBind13722,
  };
}
export function buildCfvos(
  cfIn10455: unknown,
  cfIn10456: unknown,
  cfIn10457: unknown,
) {
  return (
    cfIn10455 && cfIn10455.length > 0
      ? cfIn10455.map((item) => normalizeCfvo(item, cfIn10457))
      : defaultCfvoPair(cfIn10456)
  ).slice(0, Math.max(1, cfIn10456));
}
export function buildIconSetCfvos(cfIn7834: unknown, cfIn7835: unknown) {
  let cfBind18330 = Math.max(1, cfIn7835),
    cfBind18331 =
      cfIn7834?.map((cfIn16173) => normalizeCfvo(cfIn16173, "percent")) ?? [];
  return defaultIconThresholds(cfBind18330)
    .map((item) => ({
      type: "percent",
      val: String(item),
    }))
    .map((item, index) => cfBind18331[index] ?? item)
    .slice(0, cfBind18330);
}
export function parseRgbaCss(cfIn4402: unknown) {
  let cfBind13603 = cfIn4402.match(
    /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i,
  );
  if (!cfBind13603) return null;
  let cfBind13604 = Math.max(0, Math.min(255, Number(cfBind13603[1]))),
    cfBind13605 = Math.max(0, Math.min(255, Number(cfBind13603[2]))),
    cfBind13606 = Math.max(0, Math.min(255, Number(cfBind13603[3]))),
    cfBind13607 = cfBind13603[4] === undefined ? 1 : Number(cfBind13603[4]);
  return [cfBind13604, cfBind13605, cfBind13606, cfBind13607].some((item) =>
    Number.isNaN(item),
  )
    ? null
    : {
        r: cfBind13604,
        g: cfBind13605,
        b: cfBind13606,
        a: cfBind13607,
      };
}
export function resolveSchemeColorToRgb(cfIn4012: unknown, cfIn4013: unknown) {
  if (!cfIn4012) return;
  if (
    cfIn4012.type !== colorTypeEnum.COLOR_TYPE_SCHEME &&
    cfIn4012.type !== colorTypeEnum.COLOR_TYPE_SYSTEM
  )
    return cfIn4012;
  let cfBind12923 = parseRgbaCss(
    resolveColorProtoToRgbaString(
      cfIn4012,
      cfIn4013,
      SPREADSHEETML_COLOR_SPACE,
    ),
  );
  if (!cfBind12923) return cfIn4012;
  let { r: cfBind12924, g, b, a } = cfBind12923,
    cfBind12925 = (cfIn15598) => cfIn15598.toString(16).padStart(2, "0"),
    cfBind12926 = cfBind12925(Math.round(Math.max(0, Math.min(1, a)) * 255));
  return {
    type: colorTypeEnum.COLOR_TYPE_RGB,
    value:
      `${cfBind12926}${cfBind12925(cfBind12924)}${cfBind12925(g)}${cfBind12925(b)}`.toUpperCase(),
    transform: undefined,
    lastColor: undefined,
  };
}
