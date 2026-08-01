// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clone theme color-scheme entries (legacy AXe/jXe).
// Stage-3 wave-136.

export function AXe(ptIn11610: any) {
  return {
    name: ptIn11610?.name ?? "Custom",
    colors: (ptIn11610?.colors ?? []).map(jXe),
  };
}
export function jXe(ptIn8071: any) {
  return {
    name: ptIn8071.name,
    color: ptIn8071.color
      ? {
          ...ptIn8071.color,
          transform: ptIn8071.color.transform
            ? {
                ...ptIn8071.color.transform,
              }
            : undefined,
        }
      : undefined,
  };
}
