// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: alpha/roman list labels + auto-number format (i_ / a_ / vce).

/** Legacy `i_` — 1-based index → alphabetic label (a, b, …, aa). */
export function toAlphaListLabel(index: number, uppercase: boolean): string {
  let n = Math.max(1, Math.floor(index));
  let out = "";
  while (n > 0) {
    n--;
    out = String.fromCharCode(97 + (n % 26)) + out;
    n = Math.floor(n / 26);
  }
  return uppercase ? out.toUpperCase() : out;
}

/** Legacy `a_` — 1-based index → roman numerals (I–MMMCMXCIX). */
export function toRomanListLabel(index: number, uppercase: boolean): string {
  let n = Math.max(1, Math.min(3999, Math.floor(index)));
  const table: Array<[number, string]> = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  for (const [value, glyph] of table) {
    while (n >= value) {
      out += glyph;
      n -= value;
    }
  }
  return uppercase ? out : out.toLowerCase();
}

/** Legacy `vce` — format auto-number label by OOXML autoNumberType. */
export function formatAutoNumberLabel(
  index: number,
  autoNumberType: string | null | undefined,
): string {
  switch (autoNumberType) {
    case "arabicBracketBoth":
      return `[${index}]`;
    case "arabicPeriod":
      return `${index}.`;
    case "arabicPlain":
      return `${index}`;
    case "alphaLcPeriod":
      return `${toAlphaListLabel(index, false)}.`;
    case "alphaUcPeriod":
      return `${toAlphaListLabel(index, true)}.`;
    case "alphaLcParenR":
      return `${toAlphaListLabel(index, false)})`;
    case "alphaUcParenR":
      return `${toAlphaListLabel(index, true)})`;
    case "romanLcPeriod":
      return `${toRomanListLabel(index, false)}.`;
    case "romanUcPeriod":
      return `${toRomanListLabel(index, true)}.`;
    default:
      return `${index}.`;
  }
}
