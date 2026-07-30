// Restored from ref/webview/assets/upgrade-plan-dialog-CKTSoudj.js
// Wave FY — full polished body from `upgrade-plan-dialog-CKTSoudj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 59/73).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/4
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE } from "../../analytics/codex-upgrade-plan-modal-cta-clicked-type";
import { CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE } from "../../analytics/codex-upgrade-plan-modal-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { normalizeGithubHostname } from "../../conversation/github-hostname";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL, CHATGPT_COM_CODEX_PURCHASE_TEAM_URL } from "../../docs/codex-doc-urls";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconWG } from "../../icons/app-icon-wg";
import { ColorIcon, ensureColorIconInit } from "../../icons/color-icon";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { formatPlanPrice, initPlanPricing } from "../../utils/plan-pricing";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../chatgpt-plan-ids";
import { validateCreditTargetAgainstMinimum } from "../credit-auto-reload-validators";
import { CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS, getCreditsPurchaseMinimumQuantity } from "../credits-purchase-field-validators";
import { DeferredAccountRy } from "../deferred-account-ry";
import { deferredAccountUv } from "../deferred-account-uv";
import { isStartingProcessExpired } from "../is-starting-process-expired";
import { billingSlugToChatGptPlanId, chatGptPlanIdToBillingSlug, ensureChatGptPlanIdInit as ensureChatGptPlanIdInitAlias, ensureSubscriptionPlanSegmentInit, ensureSubscriptionUpdatePlanDialogInit, SubscriptionPlanSegment, SubscriptionUpdatePlanDialog } from "../subscription-update-plan";
import { useCreditAutoReloadSettingsQuery } from "../use-credit-auto-reload-settings-query";
import { useUpgradePlanCopyVariant } from "../use-upgrade-plan-copy-variant";


// Wave5d soft stubs.
const AppInitialAm: any = undefined;
const IntlProvider: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const deferredUiGG: any = undefined;
const upgradePlanDialogUpgradePlanDialog: any = undefined;
const usageSettings: any = undefined;
function alpha(kite) {
  let {
      description,
      detailsLink,
      features,
      featureSlotCount,
      footer,
      highlighted,
      priceLabel,
      priceLabelSize = "large",
      subtitle,
      title
    } = kite,
    lemon = highlighted ? "border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]" : "border-token-border",
    marble = IntlProvider("flex h-full min-h-0 flex-col rounded-2xl border p-4", lemon);
  let nickel = priceLabelSize === "large" && "h-10 justify-center",
    onyx = IntlProvider("flex flex-col gap-1", nickel);
  let pearl = <div className="text-base font-semibold text-token-text-primary">
      {title}
    </div>;
  let quartz = subtitle == null ? null : <div className="text-sm font-medium text-token-text-secondary">
        {subtitle}
      </div>;
  let river = <div className={onyx}>
      {pearl}
      {quartz}
    </div>;
  let slate = priceLabelSize === "large" && "h-12 justify-center",
    timber = IntlProvider("mt-3 flex flex-col", slate);
  let umbra = priceLabel == null ? null : <div className={IntlProvider("text-token-text-primary", priceLabelSize === "large" ? "text-2xl font-normal" : "text-base font-medium")}>
        {priceLabel}
      </div>;
  let violet = description == null ? null : <div className="mt-1 text-xs text-token-text-secondary">
        {description}
      </div>;
  let willow = <div className={timber}>
      {umbra}
      {violet}
    </div>;
  let xenon;
  {
    let cedar;
    cedar = (daisy, ember) => {
      let flint = features[ember];
      return <div key={ember} className={IntlProvider("flex items-center gap-3 text-sm text-token-text-primary", priceLabelSize === "large" ? "h-10" : "h-8")}>
          {flint == null ? null : <>
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center">
                {flint.icon}
              </span>
              <span>{flint.label}</span>
            </>}
        </div>;
    };
    xenon = <div className="mt-3 flex flex-col">
        {Array.from({
        length: featureSlotCount
      }, cedar)}
      </div>;
  }
  let yellow = detailsLink == null ? "pt-8" : "gap-3",
    zinc = IntlProvider("mt-3 flex flex-col", yellow);
  let amber = detailsLink == null ? null : <div className="flex h-5 items-center">{detailsLink}</div>;
  let basalt = <div className={zinc}>
      {amber}
      {footer}
    </div>;
  return <section className={marble}>
      {river}
      {willow}
      {xenon}
      {basalt}
    </section>;
}
function bravo(garnet) {
  let {
      detailsLabel,
      getPlansUrl,
      onOpenUrl
    } = garnet,
    hazel = kelp => {
      onOpenUrl(getPlansUrl(), undefined, kelp);
    };
  let ivory = <span aria-hidden="true">
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.more",
      defaultMessage: "+ more",
      description: "Link to view more plan details from a plan card"
    }} />}
    </span>;
  let jasper = <span className="sr-only">{detailsLabel}</span>;
  return <button className="w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-token-text-primary underline underline-offset-2" type="button" onClick={hazel}>
      {ivory}
      {jasper}
    </button>;
}
function copper({
  intl,
  plan,
  pricingInfo
}) {
  return pricingInfo == null ? null : formatPlanPrice({
    intl,
    amount: pricingInfo.monthlyAmounts[plan],
    currencyCode: pricingInfo.currencyCode,
    minorUnitExponent: pricingInfo.minorUnitExponent
  });
}
function delta({
  intl,
  pricingInfo
}) {
  if (pricingInfo == null) return null;
  let lotus = formatPlanPrice({
    intl,
    amount: pricingInfo.monthlyAmounts.business,
    currencyCode: pricingInfo.businessCurrencyCode,
    minorUnitExponent: pricingInfo.businessMinorUnitExponent
  });
  return lotus == null ? null : <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.team.price",
    defaultMessage: "{price} / user / month",
    description: "Localized monthly per-user price for the ChatGPT and Codex Business plan",
    values: {
      price: lotus
    }
  }} />;
}
function echo() {
  return <ColorIcon {...{
    className: "icon-sm",
    name: "bubble-on-bubble"
  }} />;
}
function falcon() {
  return <AppInitialAm className="icon-sm text-token-charts-yellow" />;
}
function gamma() {
  return <AppIconWG className="icon-sm" />;
}
function harbor() {
  return <ColorIcon {...{
    className: "icon-base",
    name: "shield"
  }} />;
}
var indigo, jade, $;
esmInit(() => {
  indigo = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  jade = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureAuthProviderInit();
  RealtimeVoiceHostIdStub();
  ensureColorIconInit();
  ensureSubscriptionPlanSegmentInit();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Ilt_Init();
  CHATGPT_CODEX_CLOUD_URL();
  deferredAccountUv();
  deferredUiGG();
  normalizeGithubHostname();
  ensureComposerEsm_K9_Init();
  usageSettings();
  ensureAppScopeInit();
  ensureSkillsPageHelpersInit();
  DeferredAccountRy();
  ensureChatGptPlanIdInit();
  getCreditsPurchaseMinimumQuantity();
  initPlanPricing();
  ensureSubscriptionUpdatePlanDialogInit();
  ensureChatGptPlanIdInitAlias();
})();
export { upgradePlanDialogUpgradePlanDialog as UpgradePlanDialog };
