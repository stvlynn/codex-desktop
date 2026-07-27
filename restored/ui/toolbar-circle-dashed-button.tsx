// Restored from ref/webview/assets/circle-dashed-Dwd5Aray.js
// Toolbar button wrapping a dashed-circle SVG; OptionalTooltip when disabled.
// Stage 3: but/yut→Button; wft→cx; Blt→OptionalTooltip; Hlt/Tft/Ivt/jvt/Lvt dropped.

import type { ReactElement, ReactNode, SVGProps } from "react";
import { Button, type ButtonProps } from "../ui/button";
import { cx } from "../ui/cx";
import { OptionalTooltip } from "../ui/optional-tooltip";

export type CircleDashedIconProps = SVGProps<SVGSVGElement>;

/** Bundle export `t` — dashed circle outline glyph. */
export function CircleDashedIcon(props: CircleDashedIconProps): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="m7.916 16.29.132.026.235.068a6.587 6.587 0 0 0 3.66-.067.666.666 0 0 1 .393 1.27 7.918 7.918 0 0 1-4.398.082l-.282-.082-.124-.053a.665.665 0 0 1 .384-1.244Zm-5.152-5.314a.666.666 0 0 1 .753.373l.042.128.058.235c.146.546.366 1.084.663 1.598l.131.217a6.6 6.6 0 0 0 .922 1.156l.175.168.089.102a.665.665 0 0 1-.887.955l-.108-.082-.209-.201a7.926 7.926 0 0 1-1.108-1.39l-.156-.26a7.94 7.94 0 0 1-.796-1.92l-.07-.282-.017-.134a.666.666 0 0 1 .518-.663Zm14.462 0a.666.666 0 0 1 .5.797l-.07.285a7.918 7.918 0 0 1-2.27 3.769l-.107.081a.666.666 0 0 1-.796-1.058l.182-.175a6.596 6.596 0 0 0 1.764-3.198l.043-.128a.666.666 0 0 1 .753-.373ZM4.71 4.114a.666.666 0 0 1 .797 1.058l-.182.174a6.596 6.596 0 0 0-1.764 3.199.665.665 0 0 1-1.296-.296 7.922 7.922 0 0 1 2.338-4.054l.108-.081Zm9.737.116a.666.666 0 0 1 .833-.116l.108.081.209.202a7.94 7.94 0 0 1 1.264 1.65l.148.265a7.88 7.88 0 0 1 .718 1.937.665.665 0 0 1-1.296.296 6.587 6.587 0 0 0-.599-1.612l-.122-.221a6.613 6.613 0 0 0-1.053-1.373l-.175-.168-.088-.102a.666.666 0 0 1 .053-.839ZM7.654 2.433a7.917 7.917 0 0 1 4.398-.08l.282.082.124.052a.665.665 0 0 1-.384 1.245l-.132-.026-.235-.068a6.587 6.587 0 0 0-3.66.066.665.665 0 0 1-.393-1.27Z" />
    </svg>
  );
}

export type ToolbarCircleDashedButtonProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  color?: ButtonProps["color"];
  disabled?: boolean;
  inset?: boolean;
  loading?: boolean;
  tooltipContent?: ReactNode;
  onClick?: ButtonProps["onClick"];
};

/**
 * Bundle export `r` — toolbar-sized Button with dashed-circle affordance.
 * When disabled, wraps in OptionalTooltip for the disabled reason.
 */
export function ToolbarCircleDashedButton(props: ToolbarCircleDashedButtonProps): ReactElement {
  const {
    ariaLabel,
    children,
    className,
    color = "ghostMuted",
    disabled,
    inset = false,
    loading = false,
    tooltipContent,
    onClick,
  } = props;
  const wrapClass = cx("inline-flex", !inset && "-me-1.5");
  const buttonClass = cx(disabled && "text-token-text-secondary", className);
  const button = (
    <Button
      aria-label={ariaLabel}
      className={buttonClass}
      color={disabled ? "ghost" : color}
      disabled={disabled}
      loading={loading}
      size="toolbar"
      onClick={onClick}
    >
      {children}
    </Button>
  );
  const wrapped = <span className={wrapClass}>{button}</span>;
  if (!disabled) return wrapped;
  return (
    <OptionalTooltip tooltipContent={tooltipContent}>{wrapped}</OptionalTooltip>
  );
}

/** Bundle export `i` / `n` — Rolldown ESM inits retained as no-ops. */
export function ensureToolbarCircleDashedButtonInit(): void {}
export function ensureCircleDashedIconInit(): void {}
