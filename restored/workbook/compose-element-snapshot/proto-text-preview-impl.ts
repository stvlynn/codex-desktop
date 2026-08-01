// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: join paragraph runs to preview text (legacy eOe).
// Stage-3 wave-140.

import { trimNonEmpty } from "./layout-blob-impl";

export function eOe(cesIn9591: any) {
  if (cesIn9591?.paragraphs?.length)
    return trimNonEmpty(
      cesIn9591.paragraphs
        .map((item) => (item.runs ?? []).map((_item) => _item.text).join(""))
        .join("\n"),
    );
}
