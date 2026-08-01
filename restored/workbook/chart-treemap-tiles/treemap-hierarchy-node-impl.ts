// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: treemap hierarchy node normalize (legacy helper476).
// Stage-3 wave-135.

export function workbookHelper476(cttIn8177: any) {
  let cttBind18687 = Array.from(cttIn8177.children.values()).map(
    workbookHelper476,
  );
  return cttBind18687.length === 0
    ? {
        name: cttIn8177.name,
        path: cttIn8177.path,
        value: cttIn8177.value ?? 0,
      }
    : {
        name: cttIn8177.name,
        path: cttIn8177.path,
        children: cttBind18687,
      };
}
