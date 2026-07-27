// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NZi` / export `OB`.

import { areStringArraysEqual } from "../utils/are-string-arrays-equal";

type ThreadKeyGroup = {
  threadKeys: string[];
  [key: string]: unknown;
};

/** Reorder each group's threadKeys to match the provided order list. */
export function sortGroupThreadKeysByOrder<T extends ThreadKeyGroup>(
  groups: T[],
  order: string[],
): T[] {
  const rank = new Map(order.map((key, index) => [key, index]));
  return groups.map((group) => {
    const sorted = [...group.threadKeys].sort(
      (a, b) =>
        (rank.get(a) ?? Number.MAX_SAFE_INTEGER) -
        (rank.get(b) ?? Number.MAX_SAFE_INTEGER),
    );
    return areStringArraysEqual(sorted, group.threadKeys)
      ? group
      : { ...group, threadKeys: sorted };
  });
}
