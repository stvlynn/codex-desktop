// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenuPopover (`VR` / export `KB`) — Root + Trigger + Content portal.

import type { ReactElement } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cx } from "../cx";
import { CONTENT_AVAILABLE_STYLE } from "./constants";
import { DropdownMenuContent } from "./content";
import { DropdownMenuTrigger } from "./trigger";
import {
  dropdownMenuContentWidthClass,
  dropdownMenuMaxHeight,
} from "./surface";
import type { DropdownMenuPopoverProps } from "./types";
import { useDropdownMenuOpenState } from "./use-open-state";

/**
 * Bundle export `KB` / internal `VR`.
 * Convenience wrapper used by PopoverMenu.Section dropdown mode and headers.
 */
export function DropdownMenuPopover(
  props: DropdownMenuPopoverProps,
): ReactElement {
  const {
    triggerButton,
    disabled,
    children,
    open,
    onOpenChange,
    dir,
    side,
    align,
    sideOffset,
    alignOffset,
    contentRef,
    onContentFocus,
    onCloseAutoFocus,
    onEscapeKeyDown,
    contentClassName,
    contentStyle,
    surface = "menu",
    contentWidth,
    contentMaxHeight,
    portalContainer,
  } = props;

  const { handleOpenChange, open: resolvedOpen } = useDropdownMenuOpenState(
    open,
    onOpenChange,
  );

  const trigger = (
    <DropdownMenuTrigger asChild disabled={disabled}>
      {triggerButton}
    </DropdownMenuTrigger>
  );

  const content = !disabled && (
    <DropdownMenuPrimitive.Portal container={portalContainer ?? undefined}>
      <DropdownMenuContent
        ref={contentRef}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        onFocus={onContentFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        surface={surface}
        className={cx(
          dropdownMenuContentWidthClass(contentWidth),
          contentClassName,
        )}
        style={{
          ...contentStyle,
          maxHeight:
            dropdownMenuMaxHeight(
              contentMaxHeight,
              "var(--radix-dropdown-menu-content-available-height)",
            ) ?? CONTENT_AVAILABLE_STYLE.maxHeight,
        }}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenuPrimitive.Portal>
  );

  return (
    <DropdownMenuPrimitive.Root
      dir={dir}
      modal={false}
      open={resolvedOpen}
      onOpenChange={handleOpenChange}
    >
      {trigger}
      {content}
    </DropdownMenuPrimitive.Root>
  );
}
