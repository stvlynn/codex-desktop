// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `H1c`) / export `Zl`.

import type { ComponentType, ReactElement } from "react";

export type IconXsShrinkSlotParts = {
  Icon: ComponentType<{ className?: string }>;
};

let parts: IconXsShrinkSlotParts | null = null;

/** Wire the glyph once companions land. */
export function setIconXsShrinkSlotParts(next: IconXsShrinkSlotParts): void {
  parts = next;
}

/**
 * Bundle export `Zl` / internal `H1c`.
 * Memoized icon-xs shrink-0 glyph slot.
 */
export function IconXsShrinkSlot(): ReactElement {
  if (parts == null) {
    throw new Error("IconXsShrinkSlot parts are not configured");
  }
  return <parts.Icon className="icon-xs shrink-0" />;
}
