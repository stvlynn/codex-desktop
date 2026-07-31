// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-4: CSS-like linear/path/radial gradient fill string parser (legacy Yie).

import {
  extractCssFunctionArgs,
  parseAngleDeg,
  parsePercentNumber,
  splitRespectingQuotes,
} from "./css-value-tokenize";

export function parseGradientFillString(
  props: string,
): Record<string, unknown> | null {
  let fillBind16335 = props.trim();
  if (!fillBind16335) return null;
  if (fillBind16335.toLowerCase() === "none")
    return {
      type: "none",
    };
  let fillBind16336 = extractCssFunctionArgs(fillBind16335, [
    "linear",
    "gradient",
  ]);
  if (fillBind16336 !== null)
    return parseGradientFillArgs(fillBind16336, "linear");
  let fillBind16337 = extractCssFunctionArgs(fillBind16335, ["path", "radial"]);
  return fillBind16337 === null
    ? null
    : parseGradientFillArgs(fillBind16337, "path");
}
export function parseGradientFillArgs(
  fillCfg4242: string,
  fillCfg4243: string,
): Record<string, unknown> {
  let fillBind13302 = splitRespectingQuotes(fillCfg4242, ",");
  if (fillBind13302.length < 2)
    throw Error(`${fillCfg4243}(...) fill requires at least two color stops.`);
  let fillBind13303,
    fillBind13304 = fillBind13302,
    fillBind13305 = parseAngleDeg(fillBind13302[0] ?? "");
  if (
    (fillCfg4243 === "linear" &&
      fillBind13305 !== null &&
      ((fillBind13303 = fillBind13305),
      (fillBind13304 = fillBind13302.slice(1))),
    fillBind13304.length < 2)
  )
    throw Error(`${fillCfg4243}(...) fill requires at least two color stops.`);
  let fillBind13306 = normalizeGradientStops(
    fillBind13304.map(parseGradientStopToken),
  );
  return {
    type: "gradient",
    gradientKind: fillCfg4243,
    angleDeg: fillBind13303,
    stops: fillBind13306,
  };
}
export function parseGradientStopToken(props: string): {
  color: string;
  offset?: number;
} {
  let fillBind11412 = props.trim();
  if (!fillBind11412) throw Error("Gradient stop cannot be empty.");
  let fillBind11413 = 0;
  for (
    let fillBind13278 = fillBind11412.length - 1;
    fillBind13278 >= 0;
    --fillBind13278
  ) {
    let fillBind14047 = fillBind11412[fillBind13278];
    if (fillBind14047) {
      if (fillBind14047 === ")") {
        fillBind11413 += 1;
        continue;
      }
      if (fillBind14047 === "(") {
        fillBind11413 = Math.max(0, fillBind11413 - 1);
        continue;
      }
      if (fillBind11413 === 0 && /\s/.test(fillBind14047)) {
        let fillBind19469 = fillBind11412.slice(0, fillBind13278).trim(),
          fillBind19470 = parsePercentNumber(
            fillBind11412.slice(fillBind13278 + 1).trim(),
          );
        if (fillBind19469.length > 0 && fillBind19470 !== null)
          return {
            color: fillBind19469,
            offset: fillBind19470,
          };
        break;
      }
    }
  }
  return {
    color: fillBind11412,
  };
}
export function normalizeGradientStops(
  props: Array<{ color: string; offset?: number }>,
): Array<{ color: string; offset: number }> {
  if (props.every((item) => item.offset !== undefined))
    return props.map((item) => ({
      color: item.color,
      offset: percentToFixedThousandths(item.offset ?? 0),
    }));
  let fillBind17679 = props.length - 1;
  return props.map((item, index) => ({
    color: item.color,
    offset: percentToFixedThousandths((index / fillBind17679) * 100),
  }));
}
export function percentToFixedThousandths(fillCfg12591: number): number {
  return Math.max(0, Math.min(Math.round(fillCfg12591 * 1e3), 1e5));
}

let gradientFillParseReady = false;

/** Legacy eae — gradient parser has no lazy tables. */
export function ensureGradientFillParseInit(): void {
  if (gradientFillParseReady) return;
  gradientFillParseReady = true;
}
