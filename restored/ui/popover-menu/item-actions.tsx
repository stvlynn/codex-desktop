// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu action peers (`Hqo`/`Uqo`/`Wqo`/`Gqo`).

import type { ReactElement } from "react";

import { Button, type ButtonColor } from "../button";
import { OptionalTooltip } from "../optional-tooltip";
import { cx } from "../cx";
import { FOCUS_RING_CLASS, ICON_SLOT_CLASS } from "./constants";
import type {
  PopoverMenuIconButtonProps,
  PopoverMenuItemActionLinkProps,
  PopoverMenuItemActionsProps,
  PopoverMenuSectionActionsProps,
} from "./types";

/** Bundle `Hqo` — action cluster that stops event bubbling. */
export function PopoverMenuItemActions(
  props: PopoverMenuItemActionsProps,
): ReactElement {
  const {
    children,
    className,
    onClick,
    onKeyDown,
    onPointerDown,
    visibility = "always",
    ...rest
  } = props;

  return (
    <span
      {...rest}
      className={cx(
        "flex h-5 shrink-0 items-center",
        visibility === "interaction" &&
          "pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100",
        className,
      )}
      data-slot="thread-summary-panel-item-actions"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        onKeyDown?.(event);
      }}
      onPointerDown={(event) => {
        event.stopPropagation();
        onPointerDown?.(event);
      }}
    >
      {children}
    </span>
  );
}

/** Bundle `Uqo` — tooltip-wrapped action link. */
export function PopoverMenuItemActionLink(
  props: PopoverMenuItemActionLinkProps,
): ReactElement {
  const { children, className, label, ...rest } = props;

  const link = (
    <a
      {...rest}
      aria-label={label}
      className={cx(
        "-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-token-text-tertiary hover:text-token-foreground",
        FOCUS_RING_CLASS,
        className,
      )}
      data-slot="thread-summary-panel-item-action-link"
    >
      <span className={ICON_SLOT_CLASS}>{children}</span>
    </a>
  );

  return (
    <OptionalTooltip delayOpen tooltipContent={label}>
      {link}
    </OptionalTooltip>
  );
}

/** Bundle `Wqo` — section header trailing actions. */
export function PopoverMenuSectionActions(
  props: PopoverMenuSectionActionsProps,
): ReactElement {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={cx("ms-auto flex items-center gap-0.5", className)}
      data-slot="thread-summary-panel-section-actions"
    >
      {children}
    </span>
  );
}

/** Bundle `Gqo` — icon toolbar button with optional tooltip. */
export function PopoverMenuIconButton(
  props: PopoverMenuIconButtonProps,
): ReactElement {
  const {
    children,
    className,
    color = "ghost",
    disableTooltip,
    label,
    shortcut,
    ...rest
  } = props;

  const button = (
    <Button
      {...rest}
      aria-label={label}
      className={cx("size-token-button-composer", FOCUS_RING_CLASS, className)}
      color={color as ButtonColor}
      data-slot="thread-summary-panel-icon-button"
      size="icon"
      uniform
    >
      <span className={ICON_SLOT_CLASS}>{children}</span>
    </Button>
  );

  return (
    <OptionalTooltip
      delayOpen
      disabled={disableTooltip}
      shortcut={shortcut}
      tooltipContent={label}
    >
      {button}
    </OptionalTooltip>
  );
}
