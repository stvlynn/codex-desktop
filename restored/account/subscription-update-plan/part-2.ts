// Restored from ref/webview/assets/subscription-update-plan-IbQvs_Ig.js
// Wave FY — full polished body from `subscription-update-plan-IbQvs_Ig/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 24/28).
// AST split 2/2
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { formatCurrency, initFormatCurrency } from "../../utils/format-currency";
import { formatPlanPriceParts, initPlanPricing } from "../../utils/plan-pricing";
import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../chatgpt-plan-ids";

export function subscriptionUpdatePlanT(north: unknown) {
  switch (north) {
    case ChatGptPlanId.PLUS:
      return "chatgptplusplan";
    case ChatGptPlanId.PROLITE:
      return "chatgptprolite";
    case ChatGptPlanId.PRO:
      return "chatgptpro";
  }
}
export function subscriptionUpdatePlanN(orbit: unknown) {
  switch (orbit) {
    case "chatgptplusplan":
      return ChatGptPlanId.PLUS;
    case "chatgptprolite":
      return ChatGptPlanId.PROLITE;
    case "chatgptpro":
      return ChatGptPlanId.PRO;
  }
}
export const subscriptionUpdatePlanR = esmInit(() => {
  ensureChatGptPlanIdInit();
});
