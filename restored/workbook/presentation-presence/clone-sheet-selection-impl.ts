// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clone sheet selection snapshot (legacy $7).
// Stage-3 wave-140.

export function $7(ppIn8625: any) {
  return {
    sheetName: ppIn8625.sheetName,
    rect: {
      ...ppIn8625.rect,
    },
    selectedElementIds: [...(ppIn8625.selectedElementIds ?? [])],
    label: ppIn8625.label,
    status: ppIn8625.status,
  };
}
