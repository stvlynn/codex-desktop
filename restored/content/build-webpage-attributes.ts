// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kSa` — attributes object for a primary webpage source.

import type { WebpageSource } from "./build-webpage-source";

export type WebpageAttributes = {
  label: string | null;
  url: string;
  title?: string;
  supporting_count?: string;
};

export function buildWebpageAttributes(
  primary: WebpageSource,
  supportingCount: number,
): WebpageAttributes {
  return {
    label: primary.label,
    url: primary.url,
    ...(primary.title != null && primary.title !== primary.label
      ? { title: primary.title }
      : {}),
    ...(supportingCount > 0
      ? { supporting_count: String(supportingCount) }
      : {}),
  };
}
