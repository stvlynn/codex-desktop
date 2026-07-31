// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings empty-state row (export lj / uj).

import type { ReactElement, ReactNode } from "react";

import { cx } from "../ui/cx";

export type SettingsEmptyStateProps = {
  className?: string;
  align?: "center" | "start";
  layout?: "default" | "settings-row";
  children?: ReactNode;
};

/** Bundle `Tmo` / export `lj`. */
export function SettingsEmptyState({
  className,
  align = "center",
  layout = "default",
  children,
}: SettingsEmptyStateProps): ReactElement {
  const rowMinHeight =
    layout === "settings-row"
      ? "min-h-[var(--height-token-settings-row)]"
      : undefined;
  const alignment =
    align === "center"
      ? "justify-center text-center"
      : "justify-start text-left";
  return (
    <div
      className={cx(
        "flex items-center px-4 text-sm text-token-text-secondary",
        rowMinHeight,
        alignment,
        className,
      )}
    >
      {children}
    </div>
  );
}

SettingsEmptyState.displayName = "SettingsEmptyState";

/** Bundle `Omo` / export `uj` — ESM init retained as no-op. */
export function ensureSettingsEmptyStateInit(): void {}
