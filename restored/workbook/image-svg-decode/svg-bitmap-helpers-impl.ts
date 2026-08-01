// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: SVG/blob → ImageBitmap helpers (legacy Dwe/Owe/kwe/Mwe).
// Stage-3 wave-138.

import { jwe } from "./image-svg-decode-impl";

export function Dwe(props: any) {
  if (props.buffer instanceof ArrayBuffer) return props;
  let isdBind20795 = new Uint8Array(props.byteLength);
  return (isdBind20795.set(props), isdBind20795);
}
export function Owe(isdIn7010: any, isdIn7011: any, isdIn7012: any) {
  if (/\bwidth\s*=|\bheight\s*=/.test(isdIn7010))
    return new Blob([isdIn7010], {
      type: "image/svg+xml",
    });
  let isdBind17368 = isdIn7010.replace(
    /<svg\b([^>]*)>/,
    `<svg$1 width="${isdIn7011}" height="${isdIn7012}">`,
  );
  return new Blob([isdBind17368], {
    type: "image/svg+xml",
  });
}
export function kwe() {
  let isdBind20961 = globalThis.devicePixelRatio;
  return typeof isdBind20961 == "number" &&
    Number.isFinite(isdBind20961) &&
    isdBind20961 > 0
    ? isdBind20961
    : 1;
}
export async function Mwe(isdIn10299: any, isdIn10300: any) {
  try {
    let isdBind22822 = await jwe(isdIn10299, isdIn10300);
    if (isdBind22822) return isdBind22822;
  } catch {}
  return createImageBitmap(isdIn10299, isdIn10300);
}
