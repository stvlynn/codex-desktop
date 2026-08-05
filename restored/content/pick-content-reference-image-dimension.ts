// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ESa` — read width/height from image or nested image_result.

import { asRecord } from "../utils/as-record";
import { positiveFiniteNumberOrNull } from "../utils/positive-finite-number-or-null";

export function pickContentReferenceImageDimension(
  image: Record<string, unknown> | null | undefined,
  key: "height" | "width",
): number | null {
  const result = asRecord(image?.image_result);
  return (
    positiveFiniteNumberOrNull(image?.[key]) ??
    positiveFiniteNumberOrNull(result?.[key])
  );
}
