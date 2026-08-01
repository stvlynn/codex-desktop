// Restored from ref/webview/assets/subscription-update-plan-IbQvs_Ig.js
// Wave FY — full polished body from `subscription-update-plan-IbQvs_Ig/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 24/28).
// Group 2/2
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

/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const delta: any = undefined;

const SetRemoteControlEnabledForHost: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const DeferredUiU: any = undefined;

export function subscriptionUpdatePlanI(umbra: unknown) {
  let {
      isUpdating,
      onCancel,
      onConfirm,
      onGoToWeb,
      onOpenChange,
      pricingInfo,
      subscriptionUpdate
    } = umbra,
    violet = useIntl(),
    {
      preview
    } = subscriptionUpdate,
    willow = event => {
      event.preventDefault();
      onConfirm();
    };
  let xenon = willow,
    yellow,
    zinc,
    amber;
  if (subscriptionUpdate.kind === "saved_card_upgrade") {
    let flint;
    bb0: switch (subscriptionUpdate.updatedPlan) {
      case "chatgptplusplan":
        flint = "Plus";
        break bb0;
      case "chatgptprolite":
        flint = "Pro 5x";
        break bb0;
      case "chatgptpro":
        flint = "Pro 20x";
    }
    let garnet;
    {
      let acorn = subscriptionUpdate.paymentMethod.card_brand?.trim() ?? "",
        bloom = subscriptionUpdate.paymentMethod.card_last4?.trim() ?? "";
      let coral = bloom;
      garnet = acorn;
      acorn && coral ? garnet = `${acorn.toUpperCase()} *${coral}` : coral && (garnet = `*${coral}`);
    }
    let hazel;
    hazel = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.savedCardUpgrade.description",
      defaultMessage: "You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method.",
      description: "Description for the dialog confirming a Pro upgrade using a saved credit card",
      values: {
        targetPlan: flint
      }
    }} />;
    yellow = hazel;
    let ivory = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.subscriptionUpdate.subscription",
      defaultMessage: "ChatGPT {targetPlan} subscription",
      description: "Subscription selected in the Pro plan update dialog",
      values: {
        targetPlan: flint
      }
    }} />;
    let jasper = delta(violet, preview.positive_line_item_total, preview.currency, subscriptionUpdate.minorUnitExponent);
    let kelp = <span>{jasper}</span>;
    let lotus = <div className="flex justify-between gap-4 font-semibold">{ivory}{kelp}</div>;
    let mint, nova;
    mint = <span className="mt-0.5 text-xs text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle",
        defaultMessage: "Billed monthly, starting today",
        description: "Billing cycle information in the Pro upgrade dialog"
      }} />}</span>;
    nova = <hr className="my-4 border-token-border-default" />;
    let olive = preview.amount_due.tax_amount > 0 ? <><div className="flex justify-between gap-4">{<MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.subscriptionUpdate.subtotal",
          defaultMessage: "Subtotal",
          description: "Subtotal in the Pro upgrade dialog"
        }} />}<span>{delta(violet, preview.amount_due.amount_excluding_tax, preview.currency, subscriptionUpdate.minorUnitExponent)}</span></div><div className="mt-2 flex justify-between gap-4">{<MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.subscriptionUpdate.tax",
          defaultMessage: "Tax",
          description: "Tax in the Pro upgrade dialog"
        }} />}<span>{delta(violet, preview.amount_due.tax_amount, preview.currency, subscriptionUpdate.minorUnitExponent)}</span></div></> : null;
    let prism = preview.amount_due.tax_amount > 0 && "mt-2",
      quill = IntlProvider("flex justify-between gap-4 font-semibold", prism);
    let reef = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday",
      defaultMessage: "Total due today",
      description: "Total due today in the Pro upgrade dialog"
    }} />;
    let sage = delta(violet, preview.amount_due.amount, preview.currency, subscriptionUpdate.minorUnitExponent);
    let topaz = <span>{sage}</span>;
    let ultra = <div className={quill}>{reef}{topaz}</div>;
    let vapor = <hr className="my-4 border-token-border-default" />;
    let wheat = <span className="font-semibold">{<MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod",
        defaultMessage: "Payment method",
        description: "Payment method label in the Pro upgrade dialog"
      }} />}</span>;
    let yarn = <div className="flex items-center justify-between gap-4">{wheat}<span className="truncate text-token-text-secondary">{garnet}</span></div>;
    let __subscriptionUpdatePlanO;
    __subscriptionUpdatePlanO = <div className="flex flex-col text-sm">{lotus}{mint}{nova}{olive}{ultra}{vapor}{yarn}</div>;
    zinc = __subscriptionUpdatePlanO;
    let zephyr;
    zephyr = preview.amount_due.amount > 0 ? <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.savedCardUpgrade.payNow",
      defaultMessage: "Pay now",
      description: "Button paying for a Pro upgrade using the saved payment method"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.savedCardUpgrade.confirm",
      defaultMessage: "Confirm",
      description: "Button confirming a Pro upgrade with no immediate payment due"
    }} />;
    amber = zephyr;
  } else {
    let drift = preview.renewal_date,
      eagle = pricingInfo == null ? null : formatPlanPriceParts({
        amount: pricingInfo.monthlyAmounts.prolite,
        currencyCode: pricingInfo.currencyCode,
        intl: violet,
        minorUnitExponent: pricingInfo.minorUnitExponent
      });
    let frost = eagle,
      glide;
    glide = drift == null ? <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.proLiteDowngrade.descriptionWithoutDate",
      defaultMessage: "Your Pro 20x subscription will change to Pro 5x at the end of your current billing period.",
      description: "Description for a Pro 20x to Pro 5x downgrade when the renewal date is unavailable"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.proLiteDowngrade.description",
      defaultMessage: "Your Pro 20x subscription will remain active until {renewalDate}, when it will change to Pro 5x.",
      description: "Description for a scheduled downgrade from Pro 20x to Pro 5x",
      values: {
        renewalDate: <FormattedDate {...{
          value: new Date(drift),
          year: "numeric",
          month: "long",
          day: "numeric"
        }} />
      }
    }} />;
    yellow = glide;
    let honey = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.proLiteDowngrade.newPlan",
      defaultMessage: "ChatGPT Pro 5x",
      description: "New plan in the Pro 20x to Pro 5x downgrade dialog"
    }} />;
    let iris = frost == null ? null : <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice",
      defaultMessage: "{price} / month",
      description: "Monthly price of Pro 5x in the downgrade dialog",
      values: {
        price: frost.formatted
      }
    }} />;
    let jewel = <div className="flex justify-between gap-4 font-semibold">{honey}{iris}</div>;
    let knoll = drift == null ? <div className="mt-1 text-xs text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate",
        defaultMessage: "Billing will start at the end of your current billing period",
        description: "Billing start information when the renewal date is unavailable"
      }} />}</div> : <div className="mt-1 text-xs text-token-text-secondary">{<MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.proLiteDowngrade.billingStart",
        defaultMessage: "Billing will start on {renewalDate}",
        description: "Billing start date in the Pro 5x downgrade dialog",
        values: {
          renewalDate: <FormattedDate {...{
            value: new Date(drift),
            year: "numeric",
            month: "long",
            day: "numeric"
          }} />
        }
      }} />}</div>;
    let lunar;
    lunar = <div className="bg-token-main-surface-secondary rounded-xl border border-token-border-default p-4 text-sm">{jewel}{knoll}</div>;
    zinc = lunar;
    let moss;
    moss = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.proLiteDowngrade.confirm",
      defaultMessage: "Confirm",
      description: "Button confirming a downgrade from Pro 20x to Pro 5x"
    }} />;
    amber = moss;
  }
  let basalt = !isUpdating,
    _subscriptionUpdatePlanO = <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.subscriptionUpdate.title",
      defaultMessage: "Confirm plan changes",
      description: "Title for the Pro subscription update dialog"
    }} />;
  let cedar = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: _subscriptionUpdatePlanO,
      subtitle: yellow
    }} />
  }} />;
  let daisy = <DeferredUiU {...{
    children: zinc
  }} />;
  let ember = <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.subscriptionUpdate.cancel",
    defaultMessage: "Cancel",
    description: "Button canceling a Pro subscription update"
  }} />;
  let _subscriptionUpdatePlanS = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: isUpdating,
    type: "button",
    onClick: onCancel,
    children: ember
  }} />;
  let _subscriptionUpdatePlanI = subscriptionUpdate.kind === "scheduled_downgrade" ? <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: isUpdating,
    type: "button",
    onClick: onGoToWeb,
    children: <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb",
      defaultMessage: "Go to web",
      description: "Button continuing a Pro subscription update on the web"
    }} />
  }} /> : null;
  let _subscriptionUpdatePlanA = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    loading: isUpdating,
    type: "submit",
    children: amber
  }} />;
  let _subscriptionUpdatePlanT = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [_subscriptionUpdatePlanS, _subscriptionUpdatePlanI, _subscriptionUpdatePlanA]
    }} />
  }} />;
  let _subscriptionUpdatePlanN = <DeferredUiB {...{
    as: "form",
    onSubmit: xenon,
    children: [cedar, daisy, _subscriptionUpdatePlanT]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    showDialogClose: basalt,
    size: "default",
    onOpenChange,
    children: _subscriptionUpdatePlanN
  }} />;
}
export const subscriptionUpdatePlanA = esmInit(() => {
  echo = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  initFormatCurrency();
  initPlanPricing();
});
