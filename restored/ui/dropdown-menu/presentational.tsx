// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Presentational DropdownMenu peers: Separator / SectionLabel / Message / Title / Section.

import type { ReactElement } from "react";

import { cx } from "../cx";
import { META_CLASS } from "./constants";
import type {
  DropdownMenuMessageProps,
  DropdownMenuSectionLabelProps,
  DropdownMenuSectionProps,
  DropdownMenuSeparatorProps,
  DropdownMenuTitleProps,
} from "./types";

/** Bundle `lXi` — horizontal rule between sections. */
export function DropdownMenuSeparator(
  props: DropdownMenuSeparatorProps = {},
): ReactElement {
  const { className, paddingClassName = "py-1" } = props;
  return (
    <div className={cx("w-full px-[var(--padding-row-x)]", paddingClassName, className)}>
      <div className="h-[1px] w-full bg-token-menu-border" />
    </div>
  );
}

/** Bundle `uXi` — small section caption. */
export function DropdownMenuSectionLabel(
  props: DropdownMenuSectionLabelProps,
): ReactElement {
  const { children, className } = props;
  return (
    <div className={cx(META_CLASS.sectionLabel, className)}>{children}</div>
  );
}

/** Bundle `dXi` — empty / error message row. */
export function DropdownMenuMessage(
  props: DropdownMenuMessageProps,
): ReactElement {
  const {
    children,
    className,
    tone = "muted",
    compact = false,
    centered = false,
    role,
  } = props;

  return (
    <div
      role={role}
      className={cx(
        META_CLASS.messageBase,
        compact ? "py-2" : "py-3",
        tone === "error"
          ? "text-token-error-foreground"
          : "text-token-description-foreground",
        centered && "self-center text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bundle `hXi` — menu title row. */
export function DropdownMenuTitle(props: DropdownMenuTitleProps): ReactElement {
  const { children, className } = props;
  return (
    <div
      className={cx(
        "text-token-description-foreground flex min-h-6 items-center truncate px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm leading-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bundle `gXi` — simple section wrapper. */
export function DropdownMenuSection(
  props: DropdownMenuSectionProps,
): ReactElement {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}
