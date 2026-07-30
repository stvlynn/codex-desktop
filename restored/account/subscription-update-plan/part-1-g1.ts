// Restored from ref/webview/assets/subscription-update-plan-IbQvs_Ig.js
// Wave FY — full polished body from `subscription-update-plan-IbQvs_Ig/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 24/28).
// Group 1/2
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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

/** split companion stub */
const bravo: any = undefined;

const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function subscriptionUpdatePlanO(lemon: unknown) {
  let {
      ariaLabel,
      className,
      options,
      selectedId,
      onSelect
    } = lemon,
    marble = bravo.useId(),
    nickel = IntlProvider("bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1", className);
  let onyx = `repeat(${options.length}, minmax(0, 1fr))`,
    pearl = {
      gridTemplateColumns: onyx
    };
  let quartz;
  {
    let river;
    river = slate => {
      let timber = slate.id === selectedId;
      return <button key={slate.id} className={IntlProvider("cursor-interaction relative isolate min-w-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-transform duration-basic active:scale-[0.98]", timber ? "text-black" : "text-token-text-secondary")} type="button" aria-label={slate.ariaLabel} aria-pressed={timber} onClick={() => {
        onSelect(slate.id);
      }}>{timber ? <ensureIntlFormattersInit.span {...{
          layoutId: marble,
          className: "absolute inset-0 -z-10 rounded-xl bg-white shadow-sm",
          transition: {
            type: "spring",
            duration: 0.28,
            bounce: 0
          }
        }} /> : null}{slate.label}</button>;
    };
    quartz = options.map(river);
  }
  return <div className={nickel} role="group" aria-label={ariaLabel} style={pearl}>{quartz}</div>;
}
export const subscriptionUpdatePlanS = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  bravo = commonJsInit(react(), 1);
});
