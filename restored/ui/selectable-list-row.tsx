// Restored from ref/webview/assets/selectable-list-row-BP16-KrR.js
// Selectable list row with optional icon, second line, and keyboard activation.
// Stage 3: Ivt/jvt/Tft/wft → react/jsx dropped + cx; ESM inits dropped.

import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { cx } from "./cx";

export type SelectableListRowActivationProps = {
  onSelect?: (() => void) | null;
  isDisabled?: boolean;
};

/**
 * Bundle export `i` — role/tabIndex/click/keydown props for a selectable row.
 */
export function selectableListRowActivationProps({
  onSelect,
  isDisabled = false,
}: SelectableListRowActivationProps): {
  role: "button";
  tabIndex: number;
  "aria-disabled": boolean;
  onClick: (event: MouseEvent) => void;
  onKeyDown: (event: KeyboardEvent) => void;
} {
  const disabled = isDisabled || onSelect == null;
  return {
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled,
    onClick: (event) => {
      if (disabled || event.defaultPrevented) return;
      onSelect?.();
    },
    onKeyDown: (event) => {
      if (disabled || event.defaultPrevented) return;
      if (event.currentTarget !== event.target) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect?.();
      }
    },
  };
}

/** Bundle export `r` — empty ESM init for activation helpers. */
export function ensureSelectableListRowActivationInit(): void {}

export type SelectableListRowProps = {
  ariaCurrent?: string | boolean;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  className?: string;
  compactSecondLine?: boolean;
  density?: "default" | "compact";
  hasInteractiveContent?: boolean;
  icon?: ReactNode;
  isDisabled?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onContextMenu?: (event: MouseEvent) => void;
  rightText?: ReactNode;
  rightTextPosition?: "top" | "center";
  secondaryTitle?: ReactNode;
  secondLine?: ReactNode;
  secondLineRightText?: ReactNode;
  title: ReactNode;
  titleAdornment?: ReactNode;
};

/**
 * Bundle export `t` — primary selectable list row surface.
 */
export function SelectableListRow({
  ariaCurrent,
  ariaDescribedBy,
  ariaLabel,
  className,
  compactSecondLine = false,
  density = "default",
  hasInteractiveContent = false,
  icon,
  isDisabled = false,
  isSelected,
  onSelect,
  onContextMenu,
  rightText,
  rightTextPosition = "top",
  secondaryTitle,
  secondLine,
  secondLineRightText,
  title,
  titleAdornment,
}: SelectableListRowProps): ReactNode {
  const activation = selectableListRowActivationProps({ onSelect, isDisabled });
  const rightCentered = rightText != null && rightTextPosition === "center";
  const alignClass = density === "compact" ? "items-center" : "items-start";
  const padRight = rightCentered ? "pr-16" : null;
  const rowInnerClass = cx("relative flex min-w-0 gap-2", alignClass, padRight);

  const iconNode = icon ? (
    <span
      className={cx(
        "flex shrink-0 items-center",
        density === "compact" ? "min-h-5" : "min-h-6",
      )}
    >
      {icon}
    </span>
  ) : null;

  const stackGap = compactSecondLine
    ? "gap-0"
    : density === "compact"
      ? "gap-0.5"
      : "gap-1";
  const stackClass = cx("flex min-w-0 flex-1 flex-col", stackGap);

  const titleRowAlign =
    density === "compact" ? "items-start" : "items-baseline";
  const titleRowClass = cx("flex min-w-0 gap-3", titleRowAlign);

  const titleNode = (
    <span className="min-w-0 truncate text-token-foreground">{title}</span>
  );
  const secondaryTitleNode =
    secondaryTitle == null ? null : (
      <span className="max-w-48 shrink-0 truncate text-token-description-foreground">
        {secondaryTitle}
      </span>
    );
  const adornmentNode =
    titleAdornment == null ? null : (
      <span className="flex min-w-0 shrink self-center">{titleAdornment}</span>
    );

  const titleBlock = (
    <div className="flex min-w-0 flex-1 items-baseline gap-2 text-base leading-6">
      {titleNode}
      {secondaryTitleNode}
      {adornmentNode}
    </div>
  );

  const rightTop =
    rightText != null && !rightCentered ? (
      <div
        className={cx(
          "flex shrink-0 items-center text-token-description-foreground",
          density === "compact" ? "min-h-5 text-xs" : "min-h-6 text-base",
        )}
      >
        {rightText}
      </div>
    ) : null;

  const firstLine = (
    <div className={titleRowClass}>
      {titleBlock}
      {rightTop}
    </div>
  );

  const secondLineNode = secondLine ? (
    <div
      className={cx(
        "flex min-w-0 items-center justify-between text-token-description-foreground",
        density === "compact" ? "gap-2 text-xs" : "gap-3 text-sm",
        density === "compact" || compactSecondLine
          ? "leading-4"
          : "leading-[22px]",
      )}
    >
      <div className="min-w-0 flex-1">{secondLine}</div>
      {secondLineRightText ? (
        <div
          className={cx(
            "flex shrink-0 items-center",
            density === "compact" ? "min-h-4" : "min-h-[22px]",
          )}
        >
          {secondLineRightText}
        </div>
      ) : null}
    </div>
  ) : null;

  const contentStack = (
    <div className={stackClass}>
      {firstLine}
      {secondLineNode}
    </div>
  );

  const rightCenterNode = rightCentered ? (
    <div className="absolute top-1/2 right-0 flex min-h-6 -translate-y-1/2 items-center text-base text-token-description-foreground">
      {rightText}
    </div>
  ) : null;

  const body = (
    <div className={rowInnerClass}>
      {iconNode}
      {contentStack}
      {rightCenterNode}
    </div>
  );

  const surfaceClass = cx(
    "group min-h-10 w-full px-3 text-left text-base",
    density === "compact"
      ? "rounded-xl py-2.5 outline-none focus-visible:ring-1 focus-visible:ring-token-text-link-foreground"
      : "rounded-lg py-3",
    isDisabled
      ? "cursor-default opacity-50"
      : isSelected
        ? "cursor-interaction bg-token-list-active-selection-background"
        : "cursor-interaction hover:bg-token-list-hover-background",
    className,
  );

  if (hasInteractiveContent) {
    return (
      <div
        className={cx("relative", surfaceClass)}
        onContextMenu={onContextMenu}
      >
        <button
          type="button"
          className="focus-visible:ring-token-border-focus absolute inset-0 cursor-interaction rounded-lg outline-none focus-visible:ring-2 disabled:cursor-default"
          aria-current={ariaCurrent as string | undefined}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          disabled={isDisabled}
          onClick={onSelect}
        />
        <div className="pointer-events-none relative">{body}</div>
      </div>
    );
  }

  const interactiveProps = isDisabled ? {} : activation;
  return (
    <div
      aria-current={ariaCurrent as string | undefined}
      aria-label={ariaLabel}
      aria-disabled={isDisabled}
      className={surfaceClass}
      onContextMenu={onContextMenu}
      {...interactiveProps}
    >
      {body}
    </div>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureSelectableListRowInit(): void {}

// --- missing-relative-export aliases ---
export { ensureSelectableListRowInit as EnsureSelectableListRowInit };
