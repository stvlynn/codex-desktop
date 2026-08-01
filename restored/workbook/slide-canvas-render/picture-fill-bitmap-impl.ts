// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolve picture-fill bitmap + content type (legacy workbookHelper654).
// Stage-3 wave-137.

async function workbookHelper654(scrIn7641, scrIn7642) {
  let scrBind18135 = await scrIn7641.getPictureFillBitmap();
  if (!scrBind18135) return;
  let scrBind18136 = scrIn7641.fill.imageReference?.id;
  return {
    bitmap: scrBind18135,
    contentType: (scrBind18136
      ? scrIn7642.images.getById(scrBind18136)
      : undefined
    )?.contentType,
  };
}
