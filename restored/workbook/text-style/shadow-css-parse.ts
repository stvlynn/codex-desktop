// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: text-shadow CSS + preset parsers (legacy workbookHelper 82/83, _ae, noe).

import { D as effectTypeEnum } from "../presentation-protobuf";
import { WorkbookColor } from "../theme-color";
import { pointsToEmu } from "../line";
import {
  splitCssValueList,
  parseCssLengthPx,
} from "../fill/css-value-tokenize";

export type ShadowPresetName =
  | "shadow-none"
  | "shadow-sm"
  | "shadow"
  | "shadow-md"
  | "shadow-lg"
  | "shadow-xl"
  | "shadow-2xl";

export type ParsedShadowCss =
  | { kind: "none" }
  | {
      kind: "custom";
      effectStyle: {
        effects: Array<{
          type: unknown;
          shadow: {
            color?: unknown;
            blurRadius: number;
            distance: number;
            direction: number;
          };
        }>;
      };
    };

/** Legacy workbookHelper 82 — match Tailwind-like shadow preset name. */
export function matchShadowPresetName(raw: string): ShadowPresetName | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();
  switch (lower) {
    case "shadow-none":
    case "shadow-sm":
    case "shadow":
    case "shadow-md":
    case "shadow-lg":
    case "shadow-xl":
    case "shadow-2xl":
      return lower;
    default:
      return null;
  }
}

/** Legacy `_ae` — preset name → CSS shadow string. */
export function shadowPresetToCss(preset: ShadowPresetName | string): string {
  switch (preset) {
    case "shadow-sm":
      return "0px 1px 2px #000000/0.10";
    case "shadow":
      return "0px 2px 4px #000000/0.12";
    case "shadow-md":
      return "0px 4px 8px #000000/0.16";
    case "shadow-lg":
      return "0px 10px 15px #000000/0.16";
    case "shadow-xl":
      return "0px 20px 25px #000000/0.18";
    case "shadow-2xl":
      return "0px 25px 50px #000000/0.22";
    default:
      return "none";
  }
}

/** Legacy workbookHelper 83 — parse CSS / preset text-shadow → effect VO. */
export function parseTextShadowCss(raw: string): ParsedShadowCss | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (
    trimmed.toLowerCase() === "none" ||
    trimmed.toLowerCase() === "shadow-none"
  )
    return { kind: "none" };
  const preset = matchShadowPresetName(trimmed);
  if (preset) return parseTextShadowCss(shadowPresetToCss(preset));
  const tokens = splitCssValueList(trimmed);
  if (tokens.length < 3) return null;
  const offsetX = parseCssLengthPx(tokens[0] ?? "");
  const offsetY = parseCssLengthPx(tokens[1] ?? "");
  const blur = parseCssLengthPx(tokens[2] ?? "");
  if (offsetX === null || offsetY === null || blur === null) return null;
  let colorToken = tokens[3];
  if (!colorToken && tokens.length === 3) colorToken = "#000000/0.18";
  else if (!colorToken) return null;
  const color = new WorkbookColor(colorToken).toProto();
  const distancePx = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  const direction = Math.round(
    (Math.atan2(offsetY, offsetX) * 180 * 6e4) / Math.PI,
  );
  return {
    kind: "custom",
    effectStyle: {
      effects: [
        {
          type: effectTypeEnum.EFFECT_TYPE_OUTER_SHADOW,
          shadow: {
            color: color ?? undefined,
            blurRadius: pointsToEmu(blur),
            distance: pointsToEmu(distancePx),
            direction,
          },
        },
      ],
    },
  };
}

export type TextShadowFields = {
  color?: unknown;
  blurRadius?: unknown;
  distance?: unknown;
  direction?: unknown;
  alignment?: unknown;
  rotateWithShape?: unknown;
};

/**
 * Legacy `noe` — normalize TextStyle.shadow setter input.
 * String CSS → outer-shadow fields; non-strings pass through.
 */
export function normalizeTextShadowFromCss(value: unknown): unknown {
  if (value === undefined) return;
  if (typeof value != "string") return value;
  const parsed = parseTextShadowCss(value);
  if (!parsed || parsed.kind === "none") return;
  const shadow = parsed.effectStyle.effects.find((item) => item.shadow)?.shadow;
  if (shadow)
    return {
      color: shadow.color,
      blurRadius: shadow.blurRadius,
      distance: shadow.distance,
      direction: shadow.direction,
      alignment: (shadow as TextShadowFields).alignment,
      rotateWithShape: (shadow as TextShadowFields).rotateWithShape,
    };
}

/** Legacy Binding411 — shadow-CSS cluster ensure (eager parsers). */
export function ensureShadowCssParseInit(): void {}
