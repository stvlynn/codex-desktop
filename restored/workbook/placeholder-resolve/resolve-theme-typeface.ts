// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: theme typeface token resolve (+mj-lt / +mn-ea / …) (helper 194–196).

export type ThemeFontScheme = {
  majorFont?: {
    latinTypeface?: string;
    eastAsianTypeface?: string;
    complexScriptTypeface?: string;
  };
  minorFont?: {
    latinTypeface?: string;
    eastAsianTypeface?: string;
    complexScriptTypeface?: string;
  };
};

/** Legacy `workbook helper 196` — non-empty typeface string. */
export function nonEmptyTypeface(
  value: string | null | undefined,
): string | undefined {
  return value === undefined || value.length === 0 ? undefined : value;
}

/** Legacy `workbook helper 195` — expand +mj/+mn theme typeface aliases. */
export function expandThemeTypefaceAlias(
  token: string,
  theme: ThemeFontScheme | null | undefined,
): string | undefined {
  if (theme === undefined || theme === null) return;
  if (token === "+mj-lt")
    return nonEmptyTypeface(theme.majorFont?.latinTypeface);
  if (token === "+mj-ea")
    return nonEmptyTypeface(theme.majorFont?.eastAsianTypeface);
  if (token === "+mj-cs")
    return nonEmptyTypeface(theme.majorFont?.complexScriptTypeface);
  if (token === "+mn-lt")
    return nonEmptyTypeface(theme.minorFont?.latinTypeface);
  if (token === "+mn-ea")
    return nonEmptyTypeface(theme.minorFont?.eastAsianTypeface);
  if (token === "+mn-cs")
    return nonEmptyTypeface(theme.minorFont?.complexScriptTypeface);
}

/** Legacy `workbook helper 194` — resolve typeface, expanding theme aliases. */
export function resolveThemeTypefaceToken(
  token: string | null | undefined,
  theme: ThemeFontScheme | null | undefined,
): string | undefined {
  const normalized = nonEmptyTypeface(token ?? undefined);
  if (normalized === undefined) return;
  return expandThemeTypefaceAlias(normalized, theme) ?? normalized;
}
