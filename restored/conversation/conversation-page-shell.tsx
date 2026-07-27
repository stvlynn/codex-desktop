// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `A8`) / export `us`.
// Bundle A8 is sidebar nav item chrome (misnamed ConversationPageShell in early map).

import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { cx } from "../ui/cx";

export type ConversationPageShellProps = {
  activeVariant?: "default" | "accent" | string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  hideLabel?: boolean;
  hoverBackground?: boolean;
  icon?: ReactNode;
  iconClassName?: string;
  interactiveTrailing?: boolean;
  isActive?: boolean;
  label?: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  trailing?: ReactNode;
  weightClassName?: string;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "disabled" | "onClick" | "type"
>;

/**
 * Bundle export `us` / internal `A8`.
 * Sidebar list-row button used as conversation/page shell chrome.
 */
export function ConversationPageShell(
  props: ConversationPageShellProps,
): ReactElement {
  const {
    icon,
    label,
    hideLabel,
    fullWidth = true,
    hoverBackground = true,
    onClick,
    isActive = false,
    activeVariant = "default",
    disabled = false,
    className,
    weightClassName,
    iconClassName = "icon-xs",
    trailing,
    interactiveTrailing,
    ...rest
  } = props;

  const activeBg =
    activeVariant === "accent"
      ? "bg-token-text-link-foreground/10 hover:bg-token-text-link-foreground/15"
      : "bg-token-list-hover-background";
  const activeFg =
    activeVariant === "accent"
      ? "text-token-text-link-foreground"
      : "text-token-list-active-selection-foreground";
  const activeIconFg =
    activeVariant === "accent"
      ? "text-token-text-link-foreground"
      : "text-token-list-active-selection-icon-foreground";
  const widthClass = fullWidth ? "flex w-full" : "inline-flex w-auto";
  const hoverClass = isActive
    ? activeBg
    : hoverBackground && "hover:bg-token-list-hover-background";
  const buttonClassName = cx(
    "sidebar-item focus-visible:outline-token-border relative h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y cursor-interaction shrink-0 items-center overflow-hidden text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-2",
    widthClass,
    hoverClass,
    weightClassName,
    className,
  );

  const labelNode =
    hideLabel === true ? null : (
      <span
        className={cx(
          "min-w-0 flex-1 truncate",
          isActive ? activeFg : "text-token-foreground",
        )}
      >
        {label}
      </span>
    );
  const iconNode =
    icon == null ? null : (
      <span
        className={cx(
          "shrink-0",
          iconClassName,
          isActive ? activeIconFg : "text-token-text-secondary",
        )}
      >
        {icon}
      </span>
    );
  const trailingNode =
    trailing == null ? null : interactiveTrailing === true ? (
      trailing
    ) : (
      <span className="ms-auto shrink-0">{trailing}</span>
    );

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      disabled={disabled}
      {...rest}
    >
      {iconNode}
      {labelNode}
      {trailingNode}
    </button>
  );
}
