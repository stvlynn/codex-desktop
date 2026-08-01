// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: decode SVG blob via Image + createImageBitmap (legacy jwe).
// Stage-3 wave-129.

export function getGlobalImageCtor() {
  let isdBind22651 = globalThis.Image;
  if (isdBind22651) return isdBind22651;
}
async function decodeSvgBlobToImageBitmap(isdIn3036: any, isdIn3037: any) {
  let isdBind11089 = getGlobalImageCtor();
  if (
    !isdBind11089 ||
    typeof URL > "u" ||
    typeof URL.createObjectURL != "function"
  )
    return;
  let isdBind11090 = URL.createObjectURL(isdIn3036);
  try {
    let isdBind15123 = new isdBind11089();
    if (typeof isdBind15123.decode == "function") {
      isdBind15123.src = isdBind11090;
      await isdBind15123.decode();
    } else {
      let isdBind18809 = new Promise((isdIn10327, isdIn10328) => {
        isdBind15123.onload = () => isdIn10327();
        isdBind15123.onerror = () =>
          isdIn10328(Error("Failed to decode SVG image payload."));
      });
      isdBind15123.src = isdBind11090;
      await isdBind18809;
    }
    return await createImageBitmap(isdBind15123, isdIn3037);
  } finally {
    typeof URL.revokeObjectURL == "function" &&
      URL.revokeObjectURL(isdBind11090);
  }
}

export const Awe = getGlobalImageCtor;
export const jwe = decodeSvgBlobToImageBitmap;
