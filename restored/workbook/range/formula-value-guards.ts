// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: formula engine Array/Error value guards (legacy formula Array/Error value guards).

export function isFormulaArrayValue(value: unknown): boolean {
  return (
    typeof value == "object" &&
    !!value &&
    "kind" in value &&
    (value as { kind?: string }).kind === "Array"
  );
}

export function isFormulaErrorValue(value: unknown): boolean {
  return (
    typeof value == "object" &&
    !!value &&
    (value as { kind?: string }).kind === "Error"
  );
}
