// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: formula char classifiers (legacy Vpe / digit / Hpe / Upe).

export function isFormulaWhitespace(formulaIn10384: unknown) {
  return formulaIn10384
    ? formulaIn10384 === " " ||
        formulaIn10384 === "\t" ||
        formulaIn10384 === "\n" ||
        formulaIn10384 === "\r"
    : false;
}
export function isDigitChar(formulaIn14009: unknown) {
  return formulaIn14009
    ? formulaIn14009 >= "0" && formulaIn14009 <= "9"
    : false;
}
export function isIdentStartChar(formulaIn9187: unknown) {
  return formulaIn9187
    ? (formulaIn9187 >= "A" && formulaIn9187 <= "Z") ||
        (formulaIn9187 >= "a" && formulaIn9187 <= "z") ||
        formulaIn9187 === "_" ||
        formulaIn9187 === "$" ||
        formulaIn9187 === "\\"
    : false;
}
export function isIdentContinueChar(formulaIn11670: unknown) {
  return formulaIn11670
    ? isIdentStartChar(formulaIn11670) ||
        isDigitChar(formulaIn11670) ||
        formulaIn11670 === "." ||
        formulaIn11670 === "?" ||
        formulaIn11670 === "#"
    : false;
}
