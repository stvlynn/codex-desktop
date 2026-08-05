// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-42: worksheet owner WeakMap (legacy getAttachedWorksheet / Binding669).

export type WorksheetLike = { name?: string };

const worksheetOwnerMap = new WeakMap<object, WorksheetLike>();

export function getAttachedWorksheet(value: object): WorksheetLike | undefined {
  return worksheetOwnerMap.get(value);
}

export function setAttachedWorksheet(
  value: object,
  worksheet: WorksheetLike,
): void {
  worksheetOwnerMap.set(value, worksheet);
}

/** Shared map identity so boundary Binding669 stays the same WeakMap. */
export function getWorksheetOwnerMap(): WeakMap<object, WorksheetLike> {
  return worksheetOwnerMap;
}
