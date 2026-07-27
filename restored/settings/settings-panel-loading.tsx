// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Compact settings panel loading status (bundle `D2l` / export `ni`).

import type { ReactNode } from "react";

import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { Spinner } from "../ui/spinner";

export type SettingsPanelLoadingProps = {
  children?: ReactNode;
};

/**
 * Inline loading row shown while a settings panel fetches
 * (bundle `D2l` / export `ni`).
 */
export function SettingsPanelLoading({
  children = (
    <MemoizedFormattedMessage
      id="settings.panel.loading"
      defaultMessage="Loading settings…"
      description="Loading state shown while settings load"
    />
  ),
}: SettingsPanelLoadingProps) {
  return (
    <div
      className="flex items-center gap-2 py-2 text-sm text-token-text-secondary"
      role="status"
    >
      <Spinner className="icon-xs shrink-0 text-token-text-secondary" />
      <span className="text-balance">{children}</span>
    </div>
  );
}
