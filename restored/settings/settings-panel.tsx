// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Rounded settings list panel with hairline dividers (bundle `FX` / export `dC`;
// init `Lis` / export `fC`).

import type { CSSProperties, ReactNode } from "react";

import { cx } from "../ui/cx";
import { STACKED_LIST_DIVIDER_CLASS } from "../ui/stacked-list-divider-class";

export type SettingsPanelVariant = "default" | "secondary";

export type SettingsPanelProps = {
  children?: ReactNode;
  className?: string;
  variant?: SettingsPanelVariant;
};

/**
 * Bordered / secondary rounded container for stacked settings rows
 * (bundle `FX` / export `dC`).
 */
export function SettingsPanel({
  children,
  className,
  variant = "default",
}: SettingsPanelProps) {
  const surfaceClass =
    variant === "default"
      ? "border border-token-border"
      : "bg-token-bg-secondary";
  const style: CSSProperties | undefined =
    variant === "default"
      ? {
          backgroundColor:
            "var(--color-background-panel, var(--color-token-bg-fog))",
        }
      : undefined;

  return (
    <div
      className={cx(
        STACKED_LIST_DIVIDER_CLASS,
        "overflow-hidden rounded-2xl",
        surfaceClass,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

/** No-op Rolldown ESM init for the panel cluster (export `fC` / bundle `Lis`). */
export function ensureSettingsPanelInit(): void {}
