// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Surface / width / max-height helpers (`HYi` / `UYi` / `WYi`).

import { CONTENT_MAX_HEIGHT_PX, CONTENT_WIDTH_CLASS } from "./constants";
import type {
  DropdownMenuContentMaxHeight,
  DropdownMenuContentWidth,
  DropdownMenuSurface,
} from "./types";

/** Bundle `HYi` — surface chrome for dropdown content shells. */
export function dropdownMenuSurfaceClassName(
  surface: DropdownMenuSurface | undefined,
): string {
  const base =
    surface === "opaque"
      ? "bg-token-dropdown-background text-token-foreground rounded-2xl shadow-xl-spread"
      : "bg-token-dropdown-background/90 text-token-foreground ring-token-border rounded-xl ring-[0.5px] shadow-xl-spread backdrop-blur-sm";
  if (surface === "panel") {
    return `${base} rounded-2xl p-4 shadow-2xl backdrop-blur-lg`;
  }
  return base;
}

/** Bundle `UYi` — content width token → class. */
export function dropdownMenuContentWidthClass(
  width: DropdownMenuContentWidth | undefined,
): string | undefined {
  if (width == null) return undefined;
  return CONTENT_WIDTH_CLASS[width];
}

/** Bundle `WYi` — content max-height token → CSS min() expression. */
export function dropdownMenuMaxHeight(
  maxHeight: DropdownMenuContentMaxHeight | undefined,
  availableVar: string,
): string | undefined {
  if (maxHeight == null) return undefined;
  return `min(${CONTENT_MAX_HEIGHT_PX[maxHeight]}px, ${availableVar}, calc(100vh - 16px))`;
}
