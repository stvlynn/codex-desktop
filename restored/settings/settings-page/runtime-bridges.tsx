// Restored from ref/webview/assets/settings-page-CXDiYo2f.js
// Local bridges for IMPORT_MAP targets whose public files still expose bind*/peers-only surfaces.

import type { ReactElement, ReactNode } from "react";

import { bindDeferredBrowserY0 } from "../../browser/deferred-browser-y0";
import { bindList } from "../../browser/list";
import { bindDeferredBw } from "../../models/deferred-bw";
import { bindDeferredUiBa } from "../../ui/deferred-ui-ba-2";
import { bindDeferredUiBZ } from "../../ui/deferred-ui-bz";
import { bindDeferredUiE } from "../../ui/deferred-ui-e";
import { bindBindDeferredUiFs } from "../../ui/deferred-ui-fs";
import { bindBindDeferredUiIw } from "../../ui/deferred-ui-iw-2";
import { bindDeferredUtilsDi } from "../../utils/deferred-utils-di";
import { bindDeferredUtilsIE } from "../../utils/deferred-utils-ie";
import { ensureAvatarOverlaySessionInit } from "../../utils/wave-at-gap-ensure-inits";
import { bindWorktreesSettingsAcceleratorRow } from "../../worktrees/worktrees-settings-accelerator-row";
import { bindSettings2 } from "../settings2";

/** Bundle `Kr` — settings section loading chrome (not browser-use back/forward facade). */
export type SettingsSectionChromeProps = {
  section?: string | null;
};

export function SettingsSectionChrome({
  section,
}: SettingsSectionChromeProps): ReactElement {
  return (
    <div
      className="flex min-h-0 flex-1 items-center justify-center text-sm text-token-text-secondary"
      data-settings-section={section ?? undefined}
    />
  );
}

export function ensureSettingsSectionChromeInit(): void {}

/** Side-effect / value aliases matching settings-page call sites. */
export const deferredBrowserY0: unknown = bindDeferredBrowserY0;
export const list = bindList;
export const DeferredBw = bindDeferredBw;
export const deferredUiBa = bindDeferredUiBa;
export const deferredUiBZ = bindDeferredUiBZ;
export const deferredUiE: unknown = bindDeferredUiE;
export const DeferredUiFs = bindBindDeferredUiFs;
export const DeferredUiIw: unknown = bindBindDeferredUiIw;
export const deferredUtilsDi = bindDeferredUtilsDi;
export const deferredUtilsIE = bindDeferredUtilsIE;
export const ensureLayoutJ1Init = ensureAvatarOverlaySessionInit;
export const WorktreesSettingsAcceleratorRow =
  bindWorktreesSettingsAcceleratorRow;
export const settings2 = bindSettings2;

export function ensureSelectedHostInit(): void {}

export async function prefetchKeyedResource(
  sectionSlug: string,
): Promise<void> {
  void sectionSlug;
}
