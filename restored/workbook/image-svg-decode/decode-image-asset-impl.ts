// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: decode image asset → ImageBitmap with cache (legacy 603).
// Stage-3 wave-139. Local Map replaces Nwe/workbookBinding1253 ESM init.

import { Ige, Lge } from "../image-connector";
import { Dwe, Owe, kwe, Mwe } from "./svg-bitmap-helpers-impl";

/** Legacy workbookBinding1253 — ImageBitmap promise cache keyed by size+mime. */
const imageBitmapCache = new Map<string, Promise<ImageBitmap>>();

export async function workbookHelper603(isdIn2413: any, isdIn2414: any, isdIn2415: any) {
  let cacheKey = `${isdIn2413.data.byteLength}_${isdIn2413.contentType}`,
    cached = imageBitmapCache.get(cacheKey);
  if (cached) return cached;
  if (Ige(isdIn2413.contentType)) {
    let isdBind19000 = Lge(isdIn2413.contentType, isdIn2413.data).then(
      (value) => {
        if (!value)
          throw Error(
            `Unsupported image content type "${isdIn2413.contentType}"`,
          );
        return value;
      },
    );
    return (imageBitmapCache.set(cacheKey, isdBind19000), isdBind19000);
  }
  if (isdIn2413.contentType === "image/svg+xml") {
    let isdBind17537 = Math.round(isdIn2414 ?? 1),
      isdBind17538 = Math.round(isdIn2415 ?? 1),
      isdBind17539 = kwe(),
      isdBind17540 = Mwe(
        Owe(
          new TextDecoder().decode(isdIn2413.data),
          isdBind17537,
          isdBind17538,
        ),
        {
          resizeWidth: isdBind17537 * isdBind17539,
          resizeHeight: isdBind17538 * isdBind17539,
        },
      );
    return (imageBitmapCache.set(cacheKey, isdBind17540), isdBind17540);
  } else {
    let isdBind20903 = new Blob([Dwe(isdIn2413.data)], {
        type: isdIn2413.contentType,
      }),
      isdBind20904 = createImageBitmap(isdBind20903);
    return (imageBitmapCache.set(cacheKey, isdBind20904), isdBind20904);
  }
}
