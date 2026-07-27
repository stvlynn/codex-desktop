// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uSa` — flatten nav_list / news_carousel items to label+url attrs.

import { asRecord } from "../utils/as-record";
import { hostnameFromUrl } from "../utils/hostname-from-url";
import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { extractNewsCarouselNavList } from "./extract-news-carousel-nav-list";

export type NavListContentReferenceAttributes = {
  label: string;
  title?: string;
  url: string;
};

/** Bundle `uSa`. */
export function extractNavListContentReferenceAttributes(
  ref: Record<string, unknown>,
): NavListContentReferenceAttributes[] {
  const navList =
    ref.type === "nav_list"
      ? ref
      : extractNewsCarouselNavList(ref.type, ref.dil);
  const items = Array.isArray(navList?.items) ? navList.items : [];
  return items.flatMap((entry) => {
    const item = asRecord(entry);
    const url = nonEmptyStringOrNull(item?.url);
    if (url == null) return [];
    const title = nonEmptyStringOrNull(item?.title);
    const label =
      nonEmptyStringOrNull(item?.attribution) ??
      nonEmptyStringOrNull(item?.source_label) ??
      hostnameFromUrl(url) ??
      url;
    return [
      {
        label,
        ...(title == null ? {} : { title }),
        url,
      },
    ];
  });
}
