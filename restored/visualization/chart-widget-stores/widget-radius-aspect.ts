// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Box aspect-ratio + border-radius token helpers (Y-init near B/X).

export type AspectRatioInput = number | string | null | undefined;

export type RadiusToken = string | null | undefined;
export type RadiusInput =
  | RadiusToken
  | {
      topLeft?: RadiusToken;
      topRight?: RadiusToken;
      bottomRight?: RadiusToken;
      bottomLeft?: RadiusToken;
    }
  | null
  | undefined;

export function parseAspectRatio(
  value: AspectRatioInput,
): { width: number; height: number } | undefined {
  if (value == null) return undefined;
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value <= 0) return undefined;
    return { width: value, height: 1 };
  }
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const match = trimmed.match(
    /^([0-9]+(?:\.[0-9]+)?)\s*[:/]\s*([0-9]+(?:\.[0-9]+)?)$/,
  );
  if (!match) return undefined;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    return undefined;
  }
  return { width, height };
}

/** CSS `aspect-ratio` value (bundle `$V`). */
export function toAspectRatioCss(
  value: AspectRatioInput,
): string | number | undefined {
  if (value == null) return undefined;
  const parsed = parseAspectRatio(value);
  if (parsed) return `${parsed.width} / ${parsed.height}`;
  if (typeof value === "number") return value;
  return value.trim() || undefined;
}

function toRadiusTokenCss(token: RadiusToken): string | undefined {
  if (!token) return undefined;
  switch (token) {
    case "none":
      return "0";
    case "100%":
      return "100%";
    default:
      return `var(--radius-${token})`;
  }
}

/** Border-radius style object from token or corner map. */
export function toRadiusStyle(
  radius: RadiusInput,
): Record<string, string | undefined> | undefined {
  if (radius == null) return undefined;
  if (typeof radius === "string") {
    const css = toRadiusTokenCss(radius);
    return css == null ? undefined : { borderRadius: css };
  }
  const topLeft = toRadiusTokenCss(radius.topLeft);
  const topRight = toRadiusTokenCss(radius.topRight);
  const bottomRight = toRadiusTokenCss(radius.bottomRight);
  const bottomLeft = toRadiusTokenCss(radius.bottomLeft);
  if (
    topLeft == null &&
    topRight == null &&
    bottomLeft == null &&
    bottomRight == null
  ) {
    return undefined;
  }
  return {
    borderStartStartRadius: topLeft,
    borderStartEndRadius: topRight,
    borderEndStartRadius: bottomLeft,
    borderEndEndRadius: bottomRight,
  };
}

/** Compat alias matching mega `$V`. */
export { toAspectRatioCss as $V };
