// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.Item (`BR`) — primary selectable row.

import { Children, isValidElement, type ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { OptionalTooltip } from "../optional-tooltip";
import { cx } from "../cx";
import { ITEM_CLASS } from "./constants";
import { DropdownMenuItemIcon } from "./item-icon";
import type { DropdownMenuItemProps } from "./types";

function preventDefaultSelect(event: Event): void {
  event.preventDefault();
}

/** Bundle `BR` — menu item with icons, subtext, href, and optional tooltip. */
export function DropdownMenuItem(props: DropdownMenuItemProps): ReactElement {
  const {
    children,
    LeftIcon,
    keyboardShortcut,
    leftIconClassName,
    RightIcon,
    rightIcon,
    rightIconClassName = "icon-xs",
    className,
    onClick,
    onSelect,
    disabled,
    focusableWhenDisabled = false,
    href,
    SubText,
    tooltipText,
    tooltipDisabled,
    tooltipTextClassName,
    tooltipInteractive,
    tooltipSide,
    tooltipAlign,
    tooltipOpenWhen,
    allowWrap = false,
    subTextAllowWrap = false,
    ...rest
  } = props;

  const childArray = Children.toArray(children);
  const leadingItemIcon =
    isValidElement(childArray[0]) && childArray[0].type === DropdownMenuItemIcon
      ? childArray[0]
      : null;
  const labelChildren = leadingItemIcon ? childArray.slice(1) : children;

  const leftIconSizeClass = SubText == null ? "icon-xs" : "icon-sm";
  const leading =
    leadingItemIcon ??
    (LeftIcon ? (
      <LeftIcon
        className={cx(leftIconClassName ?? leftIconSizeClass, ITEM_CLASS.icon)}
      />
    ) : null);

  const trailing =
    rightIcon ??
    (RightIcon ? (
      <RightIcon className={cx(rightIconClassName, ITEM_CLASS.icon)} />
    ) : null);

  const trailingCluster =
    keyboardShortcut || trailing ? (
      <>
        {keyboardShortcut ? (
          <span className="ml-2 shrink-0 text-xs text-token-description-foreground">
            {keyboardShortcut}
          </span>
        ) : null}
        {trailing}
      </>
    ) : null;

  const overflowTarget =
    tooltipOpenWhen === "trigger-overflows" ? "" : undefined;

  const body =
    SubText == null ? (
      <div className={ITEM_CLASS.content}>
        {leading}
        <span
          data-tooltip-overflow-target={overflowTarget}
          className={cx(
            "min-w-0 flex-1",
            allowWrap ? "whitespace-normal" : "truncate",
          )}
        >
          {labelChildren}
        </span>
        {trailingCluster}
      </div>
    ) : (
      <div
        className={
          leading == null
            ? ITEM_CLASS.content
            : ITEM_CLASS.contentWithIconAndSubText
        }
      >
        {leading}
        <div className="flex min-w-0 flex-1 flex-col">
          <span
            data-tooltip-overflow-target={overflowTarget}
            className={cx(
              "min-w-0",
              allowWrap ? "whitespace-normal" : "truncate",
            )}
          >
            {labelChildren}
          </span>
          <span
            className={cx(
              "min-w-0",
              subTextAllowWrap ? "whitespace-normal" : "truncate",
            )}
          >
            {SubText}
          </span>
        </div>
        {trailingCluster}
      </div>
    );

  const isInteractive = !disabled && (!!href || !!onClick || !!onSelect);
  const itemClassName = cx(
    "no-drag",
    ITEM_CLASS.itemBase,
    disabled
      ? "cursor-default opacity-50"
      : isInteractive && ITEM_CLASS.itemInteractive,
    className,
  );

  const focusableDisabled = !!disabled && focusableWhenDisabled;
  const selectHandler = focusableDisabled
    ? preventDefaultSelect
    : disabled
      ? undefined
      : onSelect;

  const innerNode = href ? (
    <a
      href={href}
      className="flex flex-col !text-token-foreground focus:!outline-none"
    >
      {body}
    </a>
  ) : (
    <div className="flex flex-col">{body}</div>
  );

  const item = (
    <DropdownMenuPrimitive.Item
      asChild
      className={itemClassName}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick}
      onSelect={selectHandler}
      disabled={!!disabled && !focusableWhenDisabled}
      {...rest}
    >
      {innerNode}
    </DropdownMenuPrimitive.Item>
  );

  return (
    <OptionalTooltip
      delayOpen
      tooltipContent={tooltipText}
      disabled={tooltipDisabled || tooltipText == null}
      tooltipTextClassName={tooltipTextClassName}
      interactive={tooltipInteractive}
      side={tooltipSide}
      align={tooltipAlign}
      openWhen={tooltipOpenWhen}
    >
      {item}
    </OptionalTooltip>
  );
}
