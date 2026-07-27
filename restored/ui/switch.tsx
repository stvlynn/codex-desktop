// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Toggle switch control (bundle `Cis` / export `yC`; init `Ois` / export `bC`).

import type { ButtonHTMLAttributes, MouseEvent } from "react";

import { cx } from "./cx";

export type SwitchSize = "default" | "sm";

const TRACK_SIZE_CLASS: Record<SwitchSize, string> = {
  default: "h-5 w-8",
  sm: "h-4 w-7",
};

const THUMB_SIZE_CLASS: Record<SwitchSize, string> = {
  default:
    "h-4 w-4 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px]",
  sm: "h-3 w-3 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px]",
};

export type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  ariaLabel?: string;
  size?: SwitchSize;
  trackClassName?: string;
  thumbClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onChange"
  | "onClick"
  | "type"
  | "role"
  | "aria-checked"
  | "aria-label"
  | "disabled"
>;

/**
 * Accessible switch button used as a settings row control
 * (bundle `Cis` / export `yC`).
 */
export function Switch({
  checked,
  onChange,
  disabled = false,
  className,
  id,
  ariaLabel,
  size = "default",
  trackClassName,
  thumbClassName,
  onClick,
  ...rest
}: SwitchProps) {
  const state = checked ? "checked" : "unchecked";
  const toggle = () => {
    if (!disabled) onChange(!checked);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented) toggle();
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      id={id}
      className={cx(
        "inline-flex items-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:rounded-full",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-interaction",
        className,
      )}
      data-state={state}
      {...rest}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={cx(
          "relative inline-flex shrink-0 items-center rounded-full transition-colors duration-basic ease-out",
          checked ? "bg-token-charts-blue" : "bg-token-foreground/10",
          TRACK_SIZE_CLASS[size],
          trackClassName,
        )}
        data-state={state}
      >
        <span
          className={cx(
            "rounded-full border border-[color:var(--gray-0)] bg-[color:var(--gray-0)] shadow-sm transition-transform duration-basic ease-out data-[state=unchecked]:translate-x-0",
            THUMB_SIZE_CLASS[size],
            thumbClassName,
          )}
          data-state={state}
        />
      </span>
    </button>
  );
}

/** No-op Rolldown ESM init for switch size tables (export `bC` / bundle `Ois`). */
export function ensureSwitchInit(): void {}
