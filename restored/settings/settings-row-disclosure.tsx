// Restored from ref/webview/assets/settings-row-disclosure-DaGmwmTJ.js
// Expandable settings row: header children + optional disclosed content panel.
// Stage 3: pC→STACKED_LIST_DIVIDER_CLASS; mC/Ivt/jvt ESM inits dropped.

import type { ReactNode } from "react";
import { STACKED_LIST_DIVIDER_CLASS } from "../ui/stacked-list-divider-class";
export type SettingsRowDisclosureProps = {
  children: ReactNode;
  content?: ReactNode;
  contentId?: string;
  expanded?: boolean;
};

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function initSettingsRowDisclosure(): void {}

/**
 * Stacked settings row with optional disclosed content (export `t`).
 * Alias-out: pC→STACKED_LIST_DIVIDER_CLASS; mC stacked-list init dropped.
 */
export function SettingsRowDisclosure({
  children,
  content,
  contentId,
  expanded = false,
}: SettingsRowDisclosureProps) {
  const disclosed =
    expanded && content != null ? (
      <div id={contentId} className={STACKED_LIST_DIVIDER_CLASS}>
        {content}
      </div>
    ) : null;
  return (
    <div className={STACKED_LIST_DIVIDER_CLASS}>
      {children}
      {disclosed}
    </div>
  );
}
