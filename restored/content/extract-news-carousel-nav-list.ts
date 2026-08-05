// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lSa` / export `fI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";

export type NewsCarouselNavItem = {
  attribution: string;
  date_label: string | null;
  thumbnail_url: string | null;
  title: string;
  url: string;
};

export type NewsCarouselNavList = {
  items: NewsCarouselNavItem[];
  title: string | null;
  type: "nav_list";
};

export function extractNewsCarouselNavList(
  type: unknown,
  payload: unknown,
): NewsCarouselNavList | null {
  if (nonEmptyStringOrNull(type) !== "news_carousel") return null;
  const root = asRecord(payload);
  const props = asRecord(root?.props);
  const initialState =
    asRecord(root?.initialState) ?? asRecord(props?.initialState);
  const rawItems = Array.isArray(initialState?.items)
    ? (initialState.items as unknown[])
    : [];
  const items = rawItems.flatMap((entry) => {
    const item = asRecord(entry);
    const attribution = nonEmptyStringOrNull(item?.source_label);
    const title = nonEmptyStringOrNull(item?.title);
    const url = nonEmptyStringOrNull(item?.url);
    if (attribution == null || title == null || url == null) return [];
    return [
      {
        attribution,
        date_label: nonEmptyStringOrNull(item?.date_label),
        thumbnail_url: nonEmptyStringOrNull(item?.thumbnail_url),
        title,
        url,
      },
    ];
  });
  if (items.length === 0) return null;
  return {
    items,
    title: nonEmptyStringOrNull(initialState?.title),
    type: "nav_list",
  };
}
