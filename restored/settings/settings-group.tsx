// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Compound settings group section (bundle `f9` / export `rn`; init `tlu` / `in`).
// Parts: Zcu root, Qcu Header, $cu Content, qcu Footer.

import type { ReactNode } from "react";

import { cx } from "../ui/cx";

export type SettingsGroupTitleGap = "default" | "none";

export type SettingsGroupProps = {
  children?: ReactNode;
  id?: string;
  className?: string;
};

function SettingsGroupRoot({ children, id, className }: SettingsGroupProps) {
  return (
    <section id={id} className={cx("flex flex-col", className)}>
      {children}
    </section>
  );
}

export type SettingsGroupHeaderProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  className?: string;
  titleGap?: SettingsGroupTitleGap;
};

function SettingsGroupHeader({
  title,
  subtitle,
  actions,
  className,
  titleGap = "default",
}: SettingsGroupHeaderProps) {
  const hasTitle = title != null;
  const hasSubtitle = subtitle != null;
  if (!hasTitle && !hasSubtitle && actions == null) {
    return <></>;
  }

  const padClass = hasSubtitle ? "pb-3" : "pb-1.5";
  const rowClass = hasSubtitle
    ? "flex items-start justify-between gap-4"
    : "flex min-h-toolbar items-center justify-between gap-4";
  const gapClass = titleGap === "none" ? "gap-0" : "gap-0.5";

  return (
    <div className={cx(padClass, rowClass, className)}>
      <div className={cx("flex min-w-0 flex-1 flex-col", gapClass)}>
        {title ? (
          <div
            className={cx(
              "font-medium text-token-text-primary",
              hasSubtitle ? "text-lg" : "text-base",
            )}
          >
            {title}
          </div>
        ) : null}
        {subtitle ? (
          <div className="text-sm leading-[18px] font-normal text-balance text-token-text-secondary">
            {subtitle}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div className="flex items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}

export type SettingsGroupContentProps = {
  children?: ReactNode;
  className?: string;
};

function SettingsGroupContent({
  children,
  className,
}: SettingsGroupContentProps) {
  return (
    <div className={cx("flex flex-col gap-1.5", className)}>{children}</div>
  );
}

export type SettingsGroupFooterProps = {
  children?: ReactNode;
  className?: string;
};

function SettingsGroupFooter({
  children,
  className,
}: SettingsGroupFooterProps) {
  return (
    <div
      className={cx(
        "px-4 pt-1.5 text-xs leading-4 text-balance text-token-text-secondary",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Settings group compound component (bundle `f9` / export `rn`).
 * Use `SettingsGroup.Header` / `.Content` / `.Footer` for slots.
 */
export const SettingsGroup = Object.assign(SettingsGroupRoot, {
  Header: SettingsGroupHeader,
  Content: SettingsGroupContent,
  Footer: SettingsGroupFooter,
});

/** No-op Rolldown ESM init for the group compound (export `in` / bundle `tlu`). */
export function ensureSettingsGroupInit(): void {}
