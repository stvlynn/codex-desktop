// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Toolbar dropdown trigger button with trailing chevron (bundle `F2l` / export `Jr`).

import type { ReactNode } from "react";

import { Button, type ButtonProps } from "./button";
import { cx } from "./cx";

export type DropdownTriggerButtonProps = Omit<
  ButtonProps,
  "size" | "children"
> & {
  children?: ReactNode;
  contentClassName?: string;
  chevronClassName?: string;
};

/**
 * Outline toolbar button used as a dropdown trigger (bundle `F2l` / export `Jr`).
 * Chevron glyph is a lightweight SVG stand-in for the bundle `cd` icon.
 */
export function DropdownTriggerButton({
  children,
  className,
  contentClassName,
  chevronClassName,
  color = "outline",
  ...rest
}: DropdownTriggerButtonProps) {
  return (
    <Button
      color={color}
      size="toolbar"
      className={cx("max-w-full justify-between px-3", className)}
      {...rest}
    >
      <span
        className={cx(
          "flex min-w-0 flex-1 items-center gap-1.5",
          contentClassName,
        )}
      >
        {children}
      </span>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className={cx(
          "icon-2xs shrink-0 text-token-input-placeholder-foreground",
          chevronClassName,
        )}
      >
        <path
          d="M4.5 6.5 L8 10 L11.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
