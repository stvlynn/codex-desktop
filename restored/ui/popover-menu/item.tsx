// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu row shells (`Nqo`/`Pqo`/`Fqo`/`Iqo`).

import type { ReactElement } from "react";

import { cx } from "../cx";
import {
  FOCUS_RING_CLASS,
  ITEM_BASE_CLASS,
  ITEM_INTERACTION_CLASS,
  ITEM_INTERACTIVE_BACKGROUND_CLASS,
  ITEM_TONE_CLASS,
} from "./constants";
import type {
  PopoverMenuItemButtonProps,
  PopoverMenuItemGroupProps,
  PopoverMenuItemProps,
  PopoverMenuItemTriggerProps,
} from "./types";

/** Bundle `Nqo` — static row shell. */
export function PopoverMenuItem(props: PopoverMenuItemProps): ReactElement {
  const {
    children,
    className,
    disabled = false,
    interactive = false,
    ref,
    tone = "default",
    ...rest
  } = props;

  return (
    <div
      {...rest}
      aria-disabled={disabled || undefined}
      className={cx(
        ITEM_BASE_CLASS,
        ITEM_TONE_CLASS[tone],
        !disabled && interactive && ITEM_INTERACTIVE_BACKGROUND_CLASS,
        disabled && "cursor-not-allowed text-token-text-tertiary",
        className,
      )}
      data-slot="thread-summary-panel-item"
      ref={ref}
    >
      {children}
    </div>
  );
}

/** Bundle `Pqo` — clickable row button. */
export function PopoverMenuItemButton(
  props: PopoverMenuItemButtonProps,
): ReactElement {
  const {
    children,
    className,
    disabled = false,
    interaction = "background",
    ref,
    tone = "default",
    type = "button",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={cx(
        ITEM_BASE_CLASS,
        !disabled && ITEM_INTERACTION_CLASS[interaction],
        FOCUS_RING_CLASS,
        "disabled:cursor-not-allowed disabled:text-token-text-tertiary",
        ITEM_TONE_CLASS[tone],
        className,
      )}
      data-slot="thread-summary-panel-item-button"
      disabled={disabled}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  );
}

/** Bundle `Fqo` — nested trigger inside a composite Item. */
export function PopoverMenuItemTrigger(
  props: PopoverMenuItemTriggerProps,
): ReactElement {
  const { children, className, type = "button", ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(
        "flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap border-0 bg-transparent p-0 text-left text-inherit disabled:cursor-not-allowed",
        FOCUS_RING_CLASS,
        className,
      )}
      data-slot="thread-summary-panel-item-trigger"
      type={type}
    >
      {children}
    </button>
  );
}

/** Bundle `Iqo` — vertical item stack. */
export function PopoverMenuItemGroup(
  props: PopoverMenuItemGroupProps,
): ReactElement {
  const { children, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cx("relative z-10 flex min-w-0 flex-col gap-0.5", className)}
      data-slot="thread-summary-panel-item-group"
    >
      {children}
    </div>
  );
}
