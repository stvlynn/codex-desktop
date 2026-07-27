// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kis` / export `hC` — clickable settings list row with icon + trailing.

import type { ReactElement, ReactNode } from "react";
import { cx } from "./cx";

export type ActionListRowProps = {
  actions?: ReactNode;
  ariaLabel?: string;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  onClick?: () => void;
  trailing?: ReactNode;
  variant?: "default" | "nested";
};

/**
 * Full-width button row used by hooks-settings source pickers.
 */
export function ActionListRow({
  actions,
  ariaLabel,
  className,
  description,
  disabled = false,
  icon,
  label,
  onClick,
  trailing,
  variant = "default",
}: ActionListRowProps): ReactElement {
  const hoverClass =
    !disabled &&
    "hover:bg-token-list-hover-background focus-within:bg-token-list-hover-background";
  const rowClass = cx("group flex w-full items-center", hoverClass);
  const buttonPad =
    variant === "nested" ? "min-h-10 gap-3 py-0.5" : "gap-6 py-3";
  const buttonClass = cx(
    "focus-visible:outline-token-focus flex min-w-0 flex-1 cursor-interaction items-center px-4 text-left disabled:cursor-default disabled:opacity-60",
    buttonPad,
    className,
  );
  const labelClass = cx(
    "min-w-0 text-sm text-token-text-primary",
    variant === "default" && "font-medium",
  );

  return (
    <div className={rowClass}>
      <button
        type="button"
        aria-label={ariaLabel}
        className={buttonClass}
        disabled={disabled}
        onClick={onClick}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {icon == null ? null : <span className="shrink-0">{icon}</span>}
          <div className="flex min-w-0 flex-col gap-0.5">
            <div className={labelClass}>{label}</div>
            {description == null ? null : (
              <div className="min-w-0 text-xs leading-4 text-balance text-token-text-secondary">
                {description}
              </div>
            )}
          </div>
        </div>
        {trailing == null ? null : (
          <div className="flex shrink-0 items-center gap-2">{trailing}</div>
        )}
      </button>
      {!disabled && actions != null ? (
        <div className="flex shrink-0 items-center gap-1 pr-4">{actions}</div>
      ) : null}
    </div>
  );
}
