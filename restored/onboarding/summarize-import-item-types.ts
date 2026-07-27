// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BNl` / export `Ts`.

import {
  importItemTypeOrder,
  isKnownImportItemType,
} from "./import-item-type-order";

export type ImportItemTypeSummary = {
  failedCount: number;
  importedCount: number;
  itemType: string;
};

/** Aggregate import successes/failures by known item type. */
export function summarizeImportItemTypes(result: {
  successes: Array<{ itemType: string }>;
  failures: Array<{ itemType: string }>;
}): ImportItemTypeSummary[] {
  const byType = new Map<string, ImportItemTypeSummary>();
  for (const success of result.successes) {
    if (!isKnownImportItemType(success.itemType)) continue;
    const row = byType.get(success.itemType) ?? {
      failedCount: 0,
      importedCount: 0,
      itemType: success.itemType,
    };
    row.importedCount += 1;
    byType.set(success.itemType, row);
  }
  for (const failure of result.failures) {
    if (!isKnownImportItemType(failure.itemType)) continue;
    const row = byType.get(failure.itemType) ?? {
      failedCount: 0,
      importedCount: 0,
      itemType: failure.itemType,
    };
    row.failedCount += 1;
    byType.set(failure.itemType, row);
  }
  return [...byType.values()].sort(
    (a, b) => importItemTypeOrder(a.itemType) - importItemTypeOrder(b.itemType),
  );
}
