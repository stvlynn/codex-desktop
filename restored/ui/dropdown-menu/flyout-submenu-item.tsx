// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.FlyoutSubmenuItem (`mXi`) — radix nested submenu flyout.

import type { ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { OptionalTooltip } from "../optional-tooltip";
import { cx } from "../cx";
import { ITEM_CLASS } from "./constants";
import { DropdownMenuChevronRightIcon } from "./chevron-right-icon";
import {
  dropdownMenuContentWidthClass,
  dropdownMenuSurfaceClassName,
} from "./surface";
import type { DropdownMenuFlyoutSubmenuItemProps } from "./types";

/** Bundle `mXi` — nested radix Sub with trigger row + flyout content. */
export function DropdownMenuFlyoutSubmenuItem(
  props: DropdownMenuFlyoutSubmenuItemProps,
): ReactElement {
  const {
    ariaLabel,
    label,
    children,
    LeftIcon,
    leftIconClassName,
    className,
    disabled = false,
    alignToParentBottom,
    contentClassName,
    contentWidth,
    contentSurface = "menu",
    onSelect,
    triggerContent,
    tooltipText,
    tooltipDisabled,
    tooltipTextClassName,
    tooltipSide,
    tooltipAlign,
    tooltipOpenWhen,
    onOpenChange,
  } = props;

  const widthClass = dropdownMenuContentWidthClass(contentWidth);
  const contentChrome =
    contentSurface === "bare"
      ? "m-0 p-0"
      : cx("m-px px-1 py-1", dropdownMenuSurfaceClassName(contentSurface));

  const triggerBody =
    triggerContent ?? (
      <div className={ITEM_CLASS.content}>
        {LeftIcon ? (
          <LeftIcon
            className={cx(leftIconClassName ?? "icon-xs", ITEM_CLASS.icon)}
          />
        ) : null}
        <span className="min-w-0 flex-1 truncate">{label}</span>
        <DropdownMenuChevronRightIcon
          className={cx("icon-xs", ITEM_CLASS.icon)}
        />
      </div>
    );

  const trigger = (
    <DropdownMenuPrimitive.SubTrigger
      aria-label={ariaLabel}
      disabled={disabled}
      className={cx(
        ITEM_CLASS.itemBase,
        "flex w-full items-center",
        disabled ? "cursor-default opacity-50" : ITEM_CLASS.itemInteractive,
        className,
      )}
      onSelect={(event) => {
        if (disabled || onSelect == null) return;
        event.preventDefault();
        event.stopPropagation();
        onSelect();
      }}
    >
      {triggerBody}
    </DropdownMenuPrimitive.SubTrigger>
  );

  return (
    <DropdownMenuPrimitive.Sub onOpenChange={onOpenChange}>
      <OptionalTooltip
        delayOpen
        tooltipContent={tooltipText}
        disabled={tooltipDisabled || tooltipText == null}
        tooltipTextClassName={tooltipTextClassName}
        side={tooltipSide}
        align={tooltipAlign}
        openWhen={tooltipOpenWhen}
      >
        {trigger}
      </OptionalTooltip>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
          className={cx(
            "z-50 flex min-w-[180px] select-none flex-col overflow-y-auto",
            contentChrome,
            widthClass,
            alignToParentBottom && "origin-bottom",
            contentClassName,
          )}
        >
          {children}
        </DropdownMenuPrimitive.SubContent>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Sub>
  );
}
