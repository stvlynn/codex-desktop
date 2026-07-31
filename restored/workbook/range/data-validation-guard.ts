// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: Range.dataValidation config guard (legacy bme).

export function isDataValidationLike(value: unknown): boolean {
  if (!value || typeof value != "object") return false;
  let prompt = value.prompt;
  return (
    "rule" in value ||
    "errorAlert" in value ||
    "ignoreBlanks" in value ||
    "inCellDropDown" in value ||
    (prompt !== undefined && typeof prompt == "object" && !!prompt)
  );
}
