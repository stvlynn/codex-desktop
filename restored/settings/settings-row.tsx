// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings list row with label / description / control slots (bundle `NX` / export `_C`).

import type { ReactNode } from "react";

import { cx } from "../ui/cx";

export type SettingsRowSize = "default" | "compact";
export type SettingsRowVariant = "default" | "nested";

export type SettingsRowProps = {
  label?: ReactNode;
  description?: ReactNode;
  control?: ReactNode;
  icon?: ReactNode;
  className?: string;
  id?: string;
  size?: SettingsRowSize;
  variant?: SettingsRowVariant;
};

/**
 * Horizontal settings row: optional leading icon + label/description on the
 * left, control slot on the right (bundle `NX` / export `_C`).
 */
/** No-op Rolldown ESM init for the settings-row cluster (export `vC` / bundle `Mis`). */
export function ensureSettingsRowInit(): void {}

export function SettingsRow({
  label,
  description,
  control,
  icon,
  className,
  id,
  size = "default",
  variant = "default",
}: SettingsRowProps) {
  const hasLeading = label != null || description != null || icon != null;
  const rowClassName = cx(
    variant === "nested"
      ? "flex min-h-10 items-center justify-between gap-3 px-4 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch"
      : cx(
          "flex items-center justify-between px-4",
          size === "compact" ? "gap-4 py-2" : "gap-6 py-3",
        ),
    className,
  );
  const controlClassName =
    variant === "nested"
      ? "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch"
      : "flex max-w-full shrink-0 items-center gap-2";

  return (
    <div id={id} className={rowClassName}>
      {hasLeading ? (
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {icon == null ? null : <span className="shrink-0">{icon}</span>}
          <div className="flex min-w-0 flex-col gap-0.5">
            <div
              className={cx(
                "min-w-0 text-token-text-primary",
                variant === "nested" ? "text-sm" : "text-sm font-medium",
              )}
            >
              {label}
            </div>
            {description ? (
              <div className="min-w-0 text-xs leading-4 text-balance text-token-text-secondary">
                {description}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <div className={controlClassName}>{control}</div>
    </div>
  );
}
