// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared Button control with color / size / radius variants (bundle `Np`).

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cx } from "./cx";
import {
  BUTTON_COLOR_CLASS,
  BUTTON_RADIUS_CLASS,
  BUTTON_SIZE_CLASS,
  type ButtonColor,
  type ButtonContentLayout,
  type ButtonRadius,
  type ButtonSize,
} from "./button-variants";
import { Spinner } from "./spinner";

export type {
  ButtonColor,
  ButtonContentLayout,
  ButtonRadius,
  ButtonSize,
} from "./button-variants";

export type ButtonProps = {
  uniform?: boolean;
  allowShrink?: boolean;
  color?: ButtonColor;
  contentLayout?: ButtonContentLayout;
  /** When `large`, forces `rounded-lg`; otherwise uses the size radius map. */
  radius?: ButtonRadius | "large";
  size?: ButtonSize;
  loading?: boolean;
  children?: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">;

/**
 * Codex button with tokenized color/size variants and an optional loading spinner
 * (bundle `Np` / export `yut`).
 */
export function Button({
  uniform = false,
  allowShrink = false,
  color = "primary",
  contentLayout = "default",
  radius = "default",
  size = "default",
  disabled = false,
  className,
  children,
  type,
  loading = false,
  ...rest
}: ButtonProps) {
  const layoutClass =
    contentLayout === "balanced" ? "grid grid-cols-[1fr_auto_1fr]" : "flex";
  const radiusClass =
    radius === "large" ? "rounded-lg" : BUTTON_RADIUS_CLASS[size];
  const colorClass = BUTTON_COLOR_CLASS[color];
  const sizeClass = BUTTON_SIZE_CLASS[size];

  const mergedClassName = cx(
    "border-token-border no-drag cursor-interaction items-center gap-1 border whitespace-nowrap select-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-40",
    layoutClass,
    radiusClass,
    colorClass,
    sizeClass,
    allowShrink && "min-w-0",
    uniform && "aspect-square shrink-0 items-center justify-center !px-0",
    className,
  );

  const isDisabled = disabled || loading;

  return (
    <button
      type={type ?? "button"}
      className={mergedClassName}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? <Spinner className="icon-xxs" /> : null}
      {children}
    </button>
  );
}
