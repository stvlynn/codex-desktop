// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oxt` companion for `Qbt` / `dst`.

import { decodeXmlEntities } from "./decode-xml-entities";

/** Extract and decode the inner text of `<tag>...</tag>`. */
export function extractXmlTagContent(xml: string, tag: string): string | null {
  const match = RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*</${tag}>`, "i")
    .exec(xml)?.[1]
    ?.trim();
  return match == null ? null : decodeXmlEntities(match);
}
