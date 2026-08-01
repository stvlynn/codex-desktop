// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: clone level-style with tabStops copy (legacy workbookHelper667).
// Stage-3 wave-141.

export function workbookHelper667(prIn8011: any) {
  return {
    ...prIn8011,
    paragraphStyle: prIn8011.paragraphStyle
      ? {
          ...prIn8011.paragraphStyle,
          tabStops: [...(prIn8011.paragraphStyle.tabStops ?? [])],
        }
      : undefined,
  };
}
