// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// DropdownMenu.Input (`aXi`) + SearchInput (`oXi`) + arrow focus helpers.

import type { KeyboardEvent, ReactElement } from "react";

import { cx } from "../cx";
import { ITEM_CLASS } from "./constants";
import { DropdownMenuSearchIcon } from "./search-icon";
import type {
  DropdownMenuInputProps,
  DropdownMenuSearchInputProps,
} from "./types";

function focusNeighborMenuItem(
  from: HTMLElement,
  direction: "next" | "previous",
): HTMLElement | null {
  const menu = from.closest('[role="menu"]');
  if (menu == null) return null;
  const all = Array.from(
    menu.querySelectorAll(
      '[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]',
    ),
  ).filter((node) => {
    return (
      !node.hasAttribute("data-disabled") &&
      node.getAttribute("aria-disabled") !== "true"
    );
  }) as HTMLElement[];
  const target = direction === "next" ? all[0] : all[all.length - 1];
  target?.focus();
  return target ?? null;
}

/** Bundle `aXi` — autofocus text input inside a menu. */
export function DropdownMenuInput(props: DropdownMenuInputProps): ReactElement {
  const { onKeyDown, className, ...rest } = props;

  return (
    <input
      className={cx(
        "w-full min-w-0 rounded-sm border border-none px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm !outline-none",
        className,
      )}
      autoFocus
      onKeyDown={(event) => {
        event.stopPropagation();
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "a") {
          event.preventDefault();
          event.currentTarget.select();
          return;
        }
        onKeyDown?.(event);
      }}
      {...rest}
    />
  );
}

/** Bundle `oXi` — search field with leading magnifier. */
export function DropdownMenuSearchInput(
  props: DropdownMenuSearchInputProps,
): ReactElement {
  const {
    className,
    inputClassName,
    onKeyDown,
    trailingContent,
    variant = "default",
    ...rest
  } = props;

  const insetClass =
    variant === "inset"
      ? "m-2 !w-auto rounded-lg border border-token-input-border"
      : null;

  return (
    <div
      className={cx(
        ITEM_CLASS.content,
        "px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
        insetClass,
        className,
      )}
    >
      <DropdownMenuSearchIcon className="icon-2xs shrink-0 text-token-text-tertiary" />
      <DropdownMenuInput
        className={cx(
          "!w-auto flex-1 appearance-none !rounded-none !border-none bg-transparent !px-0 !py-0 text-token-foreground placeholder:text-token-input-placeholder-foreground",
          inputClassName,
        )}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(event);
          if (event.defaultPrevented) return;
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            if (
              focusNeighborMenuItem(
                event.currentTarget,
                event.key === "ArrowDown" ? "next" : "previous",
              )
            ) {
              event.preventDefault();
            }
          }
        }}
        {...rest}
      />
      {trailingContent == null ? null : (
        <div className="shrink-0">{trailingContent}</div>
      )}
    </div>
  );
}
