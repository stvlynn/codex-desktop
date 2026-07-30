// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.ItemIcon (`iXi`).

import type { ReactElement } from "react";

import { cx } from "../cx";
import { ITEM_CLASS, ITEM_ICON_SIZE_CLASS } from "./constants";
import type { DropdownMenuItemIconProps } from "./types";

/** Bundle `iXi` — leading/trailing icon slot inside an Item. */
export function DropdownMenuItemIcon(
  props: DropdownMenuItemIconProps,
): ReactElement {
  const { children, className, size = "sm" } = props;

  return (
    <span
      className={cx(
        "inline-flex items-center justify-center leading-none",
        ITEM_ICON_SIZE_CLASS[size],
        ITEM_CLASS.icon,
        className,
      )}
    >
      {children}
    </span>
  );
}
