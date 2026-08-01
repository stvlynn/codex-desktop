// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clone presence cursor/selection snapshots (legacy 820/821).
// Stage-3 wave-139.

export function workbookHelper820(ppIn8776: any) {
  return ppIn8776
    ? {
        slideId: ppIn8776.slideId,
        point: {
          x: ppIn8776.point.x,
          y: ppIn8776.point.y,
        },
        label: ppIn8776.label,
        status: ppIn8776.status,
      }
    : null;
}
export function workbookHelper821(ppIn8548: any) {
  return ppIn8548
    ? {
        slideId: ppIn8548.slideId,
        selectedElementIds: [...ppIn8548.selectedElementIds],
        label: ppIn8548.label,
        status: ppIn8548.status,
      }
    : null;
}
