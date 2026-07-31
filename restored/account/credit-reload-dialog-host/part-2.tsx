// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/7
/* split-lane-import-depth:1 */

import { CodexAutomationDeleteStatus } from "../../analytics/codex-automation-delete-status";
import { CODEX_ONBOARDING_STARTER_PROMPT_SELECTED_TYPE } from "../../analytics/codex-onboarding-starter-prompt-selected-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S6_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { QueuedMessageTraySurface } from "../../conversation/queued-message-tray-surface";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL, CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL, DEVELOPERS_OPENAI_COM_CODEX_APP_LOCAL_ENVIRONMENTS_URL, DEVELOPERS_OPENAI_COM_CODEX_CONCEPTS_SANDBOXING_AUTO_REVIEW_URL, DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL, DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL, DEVELOPERS_OPENAI_COM_CODEX_IDE_URL, DEVELOPERS_OPENAI_COM_CODEX_MCP_URL } from "../../docs/codex-doc-urls";
import { ensureHostRpcClientsInit } from "../../hooks/host-rpc-client";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { noop } from "../../utils/noop";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { trimOptionalString } from "../../utils/trim-optional-string";
import { quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import { setQuickChatSize } from "../../windows/quick-chat-surface-helpers";
import { appendLoginHintToPurchaseUrl } from "../append-login-hint-to-purchase-url";
import { resolveAutoReloadMutationAction } from "../auto-reload-save-payload";
import { formatCreditReloadAmountWithoutSymbol, formatCreditReloadCurrency, formatCreditReloadCurrencySymbol, formatCreditReloadShortfallCost, initCreditReloadDialogFormatting } from "../credit-reload-dialog-formatting";
import { CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS, parseFormattedCreditsQuantityString, validateCreditsPurchaseQuantity } from "../credits-purchase-field-validators";
import { CREDIT_RECHARGE_TARGET_OPTIONS } from "../credits-recharge-defaults";
import { DeferredAccountRy } from "../deferred-account-ry";

// Wave5d soft stubs.
const DeferredUiU: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const SetRemoteControlEnabledForHost: any = undefined;
const alpha: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const queued: any = undefined;
const ResolveBrowserTabPanelSide: any = undefined;
const DeferredUiH: any = undefined;
const DeferredUiB: any = undefined;
const AppInitialOy: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Alpha: any = undefined;
const deferredUiU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
function bravo({
  intl,
  value,
  pricingInfo
}) {
  let lemon = value.trim();
  if (lemon.length === 0) return null;
  let {
    groupSeparator,
    decimalSeparator,
    digitMap
  } = copper({
    intl,
    pricingInfo
  });
  return AppInitialOy({
    value: Array.from(lemon, marble => digitMap.get(marble) ?? marble).join(""),
    pricingInfo,
    groupSeparator,
    decimalSeparator
  });
}
function copper({
  intl,
  pricingInfo
}) {
  let nickel = intl.formatters.getNumberFormat(intl.locale, {
    style: "currency",
    currency: pricingInfo.currencyCode,
    minimumFractionDigits: pricingInfo.minorUnitExponent ?? undefined,
    maximumFractionDigits: pricingInfo.minorUnitExponent ?? undefined
  }).formatToParts(12345.6);
  return {
    groupSeparator: nickel.find(item => item.type === "group")?.value ?? ",",
    decimalSeparator: nickel.find(item => item.type === "decimal")?.value ?? ".",
    digitMap: new Map(Array.from({
      length: 10
    }, (onyx, pearl) => [intl.formatNumber(pearl, {
      useGrouping: false
    }), String(pearl)]))
  };
}
function delta({
  intl,
  value,
  pricingInfo
}) {
  let {
      groupSeparator,
      decimalSeparator,
      digitMap
    } = copper({
      intl,
      pricingInfo
    }),
    quartz = formatCreditReloadCurrencySymbol({
      intl,
      pricingInfo
    }),
    river = 0;
  for (let slate of value) if (!(/^\d$/.test(slate) || digitMap.has(slate) || slate === groupSeparator || slate.trim().length === 0 || quartz != null && quartz.includes(slate)) && !(slate === decimalSeparator && (river += 1, river <= 1))) return false;
  return true;
}
var echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    echo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    falcon = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    initCreditReloadDialogFormatting();
    CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS();
  });
function indigo(timber) {
  let {
      dialogDescriptionId,
      additionalDiscountPercent,
      isDisablePending,
      onKeepEnabled,
      onTurnOff
    } = timber,
    umbra = <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.disableConfirmation.title",
      defaultMessage: "Are you sure?",
      description: "Title of the confirmation shown before a user disables auto reload with an active credit discount"
    }} />;
  let violet = umbra,
    willow = event => {
      event.preventDefault();
      onTurnOff();
    };
  let xenon = <DeferredUiU {...{
    children: [<RealtimeVoiceHostId {...{
      asChild: true,
      children: <h2 className="sr-only">{violet}</h2>
    }} />, <DeferredUiH {...{
      title: violet
    }} />]
  }} />;
  let yellow = additionalDiscountPercent == null ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.disableConfirmation.baseDescription",
    defaultMessage: "If you turn off auto-reload, credits won’t be added automatically when your balance runs low. You may be blocked the next time you reach a usage limit.",
    description: "Warning shown before a user disables auto reload with a persisted base volume discount"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.disableConfirmation.discountDescription",
    defaultMessage: "If you turn off auto-reload, you’ll lose your additional {discountPercent, number}% auto-reload discount. You may also be blocked the next time you reach a usage limit.",
    description: "Warning shown before a user disables auto reload with a persisted incentive. The discountPercent placeholder is the additional integer percentage saved on auto-reloaded credits",
    values: {
      discountPercent: additionalDiscountPercent
    }
  }} />;
  let zinc = <DeferredUiU {...{
    className: "pt-4",
    children: <p id={dialogDescriptionId} className="text-sm text-token-text-secondary">
            {yellow}
          </p>
  }} />;
  let amber = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.disableConfirmation.keepOn",
    defaultMessage: "Keep it on",
    description: "Button that cancels turning off discounted auto reload"
  }} />;
  let basalt = <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    autoFocus: true,
    disabled: isDisablePending,
    onClick: onKeepEnabled,
    children: amber
  }} />;
  let cedar = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.disableConfirmation.turnOff",
    defaultMessage: "Turn off auto-reload",
    description: "Destructive button that confirms turning off auto reload with an active credit discount"
  }} />;
  let daisy = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: isDisablePending,
    type: "submit",
    children: cedar
  }} />;
  let ember = <DeferredUiU {...{
    className: "pt-4",
    children: <SetRemoteControlEnabledForHost {...{
      children: [basalt, daisy]
    }} />
  }} />;
  return <DeferredUiB {...{
    as: "form",
    onSubmit: willow,
    children: [xenon, zinc, ember]
  }} />;
}
function jade(flint) {
  let {
      isRetrying,
      onRetry
    } = flint,
    garnet,
    hazel;
  garnet = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.discountOffer.error",
    defaultMessage: "We couldn’t load available auto-reload offers. Try again to continue.",
    description: "Warning shown when loading a user's server-authorized auto reload discount offer fails and enabling is paused"
  }} />;
  hazel = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.discountOffer.retry",
    defaultMessage: "Retry",
    description: "Button that retries loading a server-authorized auto reload discount offer"
  }} />;
  return <ResolveBrowserTabPanelSide {...{
    type: "warning",
    layout: "vertical",
    role: "alert",
    content: garnet,
    primaryCtaText: hazel,
    isPrimaryCtaDisabled: isRetrying,
    onPrimaryCtaClick: onRetry
  }} />;
}
function kite(ivory) {
  let {
      isActive,
      presentation,
      discountPercent
    } = ivory,
    jasper = <h3 className="font-semibold">
        {presentation === "base" ? <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.autoReload.discount.baseTitle",
        defaultMessage: "Discount applies",
        description: "Title confirming that the user's base volume discount applies to auto reload purchases"
      }} /> : isActive ? <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.autoReload.discount.rewardTitle",
        defaultMessage: "Reward applied",
        description: "Title confirming that the user's active auto reload settings include a persisted credit discount"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.autoReload.discount.offerTitle",
        defaultMessage: "Limited time offer",
        description: "Title promoting a server-authorized credit discount for enabling auto reload"
      }} />}
      </h3>;
  let kelp = <span>
      {presentation === "base" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.baseDescription",
      defaultMessage: "Your {discountPercent, number}% discount applies to all future auto-reload purchases",
      description: "Description confirming the base volume discount for the selected auto reload amount",
      values: {
        discountPercent
      }
    }} /> : isActive ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.rewardDescription",
      defaultMessage: "You’re saving an additional {discountPercent, number}% by having auto-reload turned on",
      description: "Description confirming the additional integer discount percentage applied to active auto reload settings",
      values: {
        discountPercent
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.offerDescription",
      defaultMessage: "Turn on auto-reload and save an additional {discountPercent, number}% on all future auto-reload purchases",
      description: "Description promoting the additional integer discount percentage available when a user enables auto reload",
      values: {
        discountPercent
      }
    }} />}
    </span>;
  return <ResolveBrowserTabPanelSide {...{
    type: "success",
    Icon: alpha,
    content: <div className="flex min-w-0 flex-col text-xs leading-4">
            {jasper}
            {kelp}
          </div>
  }} />;
}
