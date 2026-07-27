// Restored from ref/webview/assets/settings-loading-row-Ct0KSx1W.js
// Settings loading placeholder row (spinner + secondary label).
// Stage 3 candidate: app-initial aliases → semantic modules; drop ESM inits.
// Note: original imports `_C` / `xut` / `vC` (checkpoint misnamed as C/Xut/VC).

import type { ReactNode } from "react";
import { SettingsRow } from "./settings-row";
import { Spinner } from "../ui/spinner";
export type SettingsLoadingRowProps = {
  children: ReactNode;
};

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function initSettingsLoadingRow(): void {}

/**
 * Status row shown while a settings section is loading (export `t`).
 * Alias-out: _C→SettingsRow, xut→Spinner; Sut/vC/Ivt/jvt inits dropped.
 */
export function SettingsLoadingRow({ children }: SettingsLoadingRowProps) {
  return (
    <div role="status">
      <SettingsRow
        label={
          <span className="flex items-center gap-2 font-normal text-token-text-secondary">
            <Spinner className="icon-xs shrink-0 text-token-text-secondary" />
            <span className="text-balance">{children}</span>
          </span>
        }
        control={null}
      />
    </div>
  );
}
