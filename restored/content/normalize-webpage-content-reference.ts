// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `DSa` — wrap a webpage-like object into attributes + sources.

import { asRecord } from "../utils/as-record";
import { buildWebpageSource, type WebpageSource } from "./build-webpage-source";
import { buildWebpageAttributes } from "./build-webpage-attributes";

export type NormalizedWebpageContentReference = {
  attributes: ReturnType<typeof buildWebpageAttributes>;
  sources: WebpageSource[];
};

export function normalizeWebpageContentReference(value: unknown): NormalizedWebpageContentReference | null {
  const item = asRecord(value);
  if (item == null) return null;
  const primary = buildWebpageSource(item, "primary");
  if (primary == null) return null;
  const supporting = Array.isArray(item.supporting_websites)
    ? item.supporting_websites
        .map((entry) => buildWebpageSource(asRecord(entry), "supporting"))
        .filter((entry): entry is WebpageSource => entry != null)
    : [];
  return {
    attributes: buildWebpageAttributes(primary, supporting.length),
    sources: [primary, ...supporting],
  };
}
