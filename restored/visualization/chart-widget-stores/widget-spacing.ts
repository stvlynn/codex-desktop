// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Box spacing / margin / padding / CSS-var helpers (Y-init near B/X).

export type SpacingInput =
  | number
  | string
  | {
      top?: number | string;
      bottom?: number | string;
      left?: number | string;
      right?: number | string;
      x?: number | string;
      y?: number | string;
    }
  | null
  | undefined;

/** Map spacing units onto `calc(var(--spacing) * n)`. */
export function toSpacingCss(
  value: number | string | null | undefined,
): string | undefined {
  if (value == null) return undefined;
  return typeof value === "number"
    ? `calc(var(--spacing, 0.25rem) * ${value})`
    : value;
}

/** Promote plain keys to CSS custom properties. */
export function toCssVars(
  values: Record<string, string | number | null | undefined>,
): Record<string, string> {
  return Object.keys(values).reduce<Record<string, string>>((acc, key) => {
    const raw = values[key];
    if (raw || raw === 0) {
      const prefix = key.startsWith("--") ? "" : "--";
      acc[`${prefix}${key}`] = typeof raw === "number" ? `${raw}px` : raw;
    }
    return acc;
  }, {});
}

/** Margin style object (bundle `_H`). */
export function toMarginStyle(
  margin: SpacingInput,
): Record<string, string | undefined> | undefined {
  if (margin == null) return undefined;
  if (typeof margin === "number" || typeof margin === "string") {
    const all = toSpacingCss(margin);
    return {
      marginBlockStart: all,
      marginBlockEnd: all,
      marginInlineStart: all,
      marginInlineEnd: all,
    };
  }
  const top = toSpacingCss(margin.top ?? margin.y);
  const bottom = toSpacingCss(margin.bottom ?? margin.y);
  const left = toSpacingCss(margin.left ?? margin.x);
  const right = toSpacingCss(margin.right ?? margin.x);
  if (top == null && bottom == null && left == null && right == null) {
    return undefined;
  }
  return {
    marginBlockStart: top,
    marginBlockEnd: bottom,
    marginInlineStart: left,
    marginInlineEnd: right,
  };
}

/** Padding style + gutter CSS vars. */
export function toPaddingStyle(
  padding: SpacingInput,
): Record<string, string | undefined> | undefined {
  if (padding == null) return undefined;
  if (typeof padding === "number" || typeof padding === "string") {
    const all = toSpacingCss(padding);
    return {
      ...toCssVars({
        "w-box-gutter-block-start": all,
        "w-box-gutter-block-end": all,
        "w-box-gutter-inline-start": all,
        "w-box-gutter-inline-end": all,
      }),
      paddingBlock: all,
      paddingInline: all,
    };
  }
  const top = toSpacingCss(padding.top ?? padding.y);
  const bottom = toSpacingCss(padding.bottom ?? padding.y);
  const left = toSpacingCss(padding.left ?? padding.x);
  const right = toSpacingCss(padding.right ?? padding.x);
  if (top == null && bottom == null && left == null && right == null) {
    return undefined;
  }
  return {
    ...toCssVars({
      "w-box-gutter-block-start": top,
      "w-box-gutter-block-end": bottom,
      "w-box-gutter-inline-start": left,
      "w-box-gutter-inline-end": right,
    }),
    paddingBlockStart: top,
    paddingBlockEnd: bottom,
    paddingInlineStart: left,
    paddingInlineEnd: right,
  };
}

/** Compat alias matching mega `_H`. */
export { toMarginStyle as _H };
