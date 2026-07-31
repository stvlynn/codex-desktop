// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection equality helpers (legacy WorkbookClass6 #T/#E/#O/#k/#A/#j).

/** Legacy #T — Object.is. */
export function sameSelectionValue(a: unknown, b: unknown): boolean {
  return Object.is(a, b);
}

/** Legacy #E — shallow array equality via Object.is. */
export function sameSelectionArray(
  a: unknown[] | null | undefined,
  b: unknown[] | null | undefined,
): boolean {
  if (!a && !b) return true;
  if (!a || !b || a.length !== b.length) return false;
  return a.every((item, index) => Object.is(item, b[index]));
}

/** Legacy #O — JSON equality for hyperlink-like objects. */
export function sameSelectionJson(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return JSON.stringify(a) === JSON.stringify(b);
}

function sameToProtoJson(a: any, b: any): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  const leftProto = a.toProto();
  const rightProto = b.toProto();
  if (!leftProto && !rightProto) return true;
  if (!leftProto || !rightProto) return false;
  return JSON.stringify(leftProto) === JSON.stringify(rightProto);
}

/** Legacy #k — WorkbookColor-like proto equality. */
export function sameSelectionColor(a: any, b: any): boolean {
  return sameToProtoJson(a, b);
}

/** Legacy #A — Fill-like proto equality. */
export function sameSelectionFill(a: any, b: any): boolean {
  return sameToProtoJson(a, b);
}

/** Legacy #j — Outline/Line-like proto equality. */
export function sameSelectionOutline(a: any, b: any): boolean {
  return sameToProtoJson(a, b);
}
