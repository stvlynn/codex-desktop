// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.CheckboxItem (`rXi`).

import { Children, isValidElement, type ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cx } from "../cx";
import { DropdownMenuCheckIcon } from "./check-icon";
import { ITEM_CLASS } from "./constants";
import { DropdownMenuItemIcon } from "./item-icon";
import type { DropdownMenuCheckboxItemProps } from "./types";

/** Bundle `rXi` — checkbox menu item with optional leading ItemIcon. */
export function DropdownMenuCheckboxItem(
  props: DropdownMenuCheckboxItemProps,
): ReactElement {
  const {
    children,
    className,
    disabled,
    onSelect,
    SubText,
    ...rest
  } = props;

  const childArray = Children.toArray(children);
  const leadingItemIcon =
    isValidElement(childArray[0]) && childArray[0].type === DropdownMenuItemIcon
      ? childArray[0]
      : null;
  const labelChildren = leadingItemIcon ? childArray.slice(1) : children;

  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cx(
        "no-drag",
        ITEM_CLASS.itemBase,
        disabled ? "cursor-default opacity-50" : ITEM_CLASS.itemInteractive,
        className,
      )}
      disabled={disabled}
      onSelect={(event) => {
        event.preventDefault();
        onSelect?.(event);
      }}
      {...rest}
    >
      <div className={ITEM_CLASS.content}>
        {leadingItemIcon}
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate">{labelChildren}</span>
          {SubText == null ? null : (
            <span className="text-sm whitespace-normal text-token-text-secondary">
              {SubText}
            </span>
          )}
        </div>
        <DropdownMenuPrimitive.ItemIndicator>
          <DropdownMenuCheckIcon className="icon-xs" />
        </DropdownMenuPrimitive.ItemIndicator>
      </div>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
