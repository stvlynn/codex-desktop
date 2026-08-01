// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: layout rect for unsupported icon-set badge (legacy lwe).
// Stage-3 wave-124.

import { lookupIconSet } from "../icon-set";

export function layoutUnsupportedIconBadge(ispIn2952: any) {
  let ispBind10878 = lookupIconSet(ispIn2952.iconSetName);
  if (!ispBind10878) return null;
  let ispBind10879 = Math.max(0, ispIn2952.width - 4),
    ispBind10880 = Math.max(0, ispIn2952.height - 4);
  if (ispBind10879 <= 0 || ispBind10880 <= 0) return null;
  let ispBind10881 = Math.max(8, ispIn2952.fontSizePx * 0.96),
    ispBind10882 = Math.min(ispBind10880, ispBind10881),
    ispBind10883 = Math.min(
      ispBind10879,
      ispBind10882 * ispBind10878.slotAspectRatio,
    );
  if (ispBind10883 <= 0 || ispBind10882 <= 0) return null;
  let ispBind10884 = ispIn2952.showValue
      ? Math.max(2, Math.min(6, ispBind10882 * 0.22))
      : 0,
    ispBind10885 = Math.max(2, Math.min(6, ispIn2952.fontSizePx * 0.18));
  return {
    x: ispIn2952.showValue
      ? ispIn2952.x + ispBind10885
      : ispIn2952.x + (ispIn2952.width - ispBind10883) / 2,
    y: ispIn2952.y + (ispIn2952.height - ispBind10882) / 2,
    width: ispBind10883,
    height: ispBind10882,
    reservedWidth: ispIn2952.showValue
      ? ispBind10885 + ispBind10883 + ispBind10884
      : 0,
  };
}

/** Legacy alias (wave-124). */
export const lwe = layoutUnsupportedIconBadge;
