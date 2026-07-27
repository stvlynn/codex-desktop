// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OSa` — normalize a webpage/url item into a labeled source.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { hostnameFromUrl } from "../utils/hostname-from-url";

export type WebpageSourceKind = "primary" | "supporting";

export type WebpageSource = {
  kind: WebpageSourceKind;
  label: string | null;
  title: string | null;
  url: string;
};

export function buildWebpageSource(item: Record<string, unknown> | null | undefined, kind: WebpageSourceKind): WebpageSource | null {
  if (item == null) return null;
  const url = nonEmptyStringOrNull(item.url);
  if (url == null) return null;
  return {
    kind,
    label:
      nonEmptyStringOrNull(item.attribution) ??
      nonEmptyStringOrNull(item.title) ??
      hostnameFromUrl(url),
    title: nonEmptyStringOrNull(item.title),
    url,
  };
}
