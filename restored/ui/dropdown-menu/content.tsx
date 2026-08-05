// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.Content (`tXi`) + focus helpers (`cXi`).

import type { KeyboardEvent, ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cx } from "../cx";
import { CONTENT_AVAILABLE_STYLE } from "./constants";
import { dropdownMenuSurfaceClassName } from "./surface";
import type { DropdownMenuContentProps } from "./types";

/** Focusable menu items after `from` within the nearest `[role=menu]`. */
export function queryFocusableMenuItemsAfter(from: Element): HTMLElement[] {
  const menu = from.closest('[role="menu"]');
  if (menu == null) return [];
  const nodes = Array.from(
    menu.querySelectorAll(
      'input, [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]',
    ),
  );
  return nodes.slice(nodes.indexOf(from) + 1).filter((node) => {
    const role = node.getAttribute("role");
    return (
      (role === "menuitem" ||
        role === "menuitemcheckbox" ||
        role === "menuitemradio") &&
      !node.hasAttribute("data-disabled") &&
      node.getAttribute("aria-disabled") !== "true"
    );
  }) as HTMLElement[];
}

/** Bundle `tXi` — styled portal content shell. */
export function DropdownMenuContent(
  props: DropdownMenuContentProps,
): ReactElement {
  const {
    children,
    className,
    align,
    onKeyDownCapture,
    sideOffset = 1,
    surface = "menu",
    ref,
    style,
    ...rest
  } = props;

  const handleKeyDownCapture = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDownCapture?.(event);
    if (event.defaultPrevented) return;
    if (event.key !== "ArrowUp" && !(event.key === "Tab" && event.shiftKey)) {
      return;
    }
    const input = event.currentTarget.querySelector("input");
    const firstItem =
      input == null ? undefined : queryFocusableMenuItemsAfter(input)[0];
    if (
      !(event.target instanceof HTMLElement) ||
      event.target.closest(
        '[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]',
      ) !== firstItem
    ) {
      return;
    }
    input?.focus();
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={cx(
        "no-drag z-50 m-px flex select-none flex-col overflow-y-auto px-1 py-1",
        dropdownMenuSurfaceClassName(surface),
        className,
      )}
      align={align ?? "start"}
      collisionPadding={6}
      onKeyDownCapture={handleKeyDownCapture}
      sideOffset={sideOffset}
      style={{ ...CONTENT_AVAILABLE_STYLE, ...style }}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
}
