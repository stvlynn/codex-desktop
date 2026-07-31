// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/7
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
const bravo: any = undefined;
const copper: any = undefined;
const queued: any = undefined;
const DeferredUiH: any = undefined;
const DeferredUiB: any = undefined;
const AppInitialLy: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const deferredUiEnt: any = undefined;
const deferredUiU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
function delta(zinc) {
  return <Alpha {...{
    children: zinc
  }} />;
}
function echo(amber) {
  PdfPermissionFlag({
    href: amber.url,
    initiator: "open_in_browser_bridge"
  });
}
async function falcon() {
  return await decodeBase64ToBytes.safeGet("/payments/customer_portal");
}
function gamma(basalt) {
  let {
    variant,
    isOneTimeAddCreditsPurchase,
    isSavePending,
    isDisablePending,
    isActionPending,
    isAddCreditsSubmitDisabled,
    isAutoReloadSettingsSubmitDisabled,
    isDiscountedAutoReloadExperience,
    isDiscountOfferPending,
    shouldFocusTurnOff,
    onBack,
    onTurnOff
  } = basalt;
  if (variant === "add-credits") {
    let hazel = isOneTimeAddCreditsPurchase ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.continueToCheckout",
      defaultMessage: "Continue to checkout",
      description: "Button label to open checkout from a credit purchase modal"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.enable",
      defaultMessage: "Enable auto-reload",
      description: "Button label to enable automatic reload from the add credits modal"
    }} />;
    let ivory;
    return <SetRemoteControlEnabledForHost {...{
      className: "w-auto",
      children: <ReadLoginRouteQuerySnapshot {...{
        color: "primary",
        type: "submit",
        className: xenon,
        loading: isSavePending,
        disabled: isAddCreditsSubmitDisabled,
        children: hazel
      }} />
    }} />;
  }
  let cedar = variant === "manage-auto-reload" ? <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    autoFocus: shouldFocusTurnOff,
    loading: isDisablePending,
    disabled: isActionPending,
    onClick: onTurnOff,
    children: isDiscountedAutoReloadExperience ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.turnOffDiscounted",
      defaultMessage: "Turn auto-reload off",
      description: "Button label that opens the confirmation for turning off auto reload with an active discount"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.turnOff",
      defaultMessage: "Turn off",
      description: "Button label to turn off auto reload"
    }} />
  }} /> : null;
  let daisy = isDiscountedAutoReloadExperience ? <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    disabled: isActionPending,
    onClick: onBack,
    children: <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.back",
      defaultMessage: "Back",
      description: "Button that closes the discounted auto reload modal without saving changes"
    }} />
  }} /> : null;
  let ember = isSavePending || isDiscountOfferPending,
    flint = isDiscountedAutoReloadExperience && variant === "setup-auto-reload" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.turnOn",
      defaultMessage: "Turn on auto-reload",
      description: "Button label to enable automatic reload with a server-authorized discount offer"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.save",
      defaultMessage: "Save",
      description: "Button label to save automatic reload settings"
    }} />;
  let garnet = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    type: "submit",
    className: xenon,
    loading: ember,
    disabled: isAutoReloadSettingsSubmitDisabled,
    children: flint
  }} />;
  return <SetRemoteControlEnabledForHost {...{
    className: "w-auto",
    children: [cedar, daisy, garnet]
  }} />;
}
function harbor(jasper) {
  let {
      intl,
      targetBalance,
      minimumBalance,
      monthlyLimit,
      pricingInfo
    } = jasper,
    kelp = formatCreditReloadCurrency({
      intl,
      creditQuantity: Number.parseInt(trimOptionalString(minimumBalance), 10),
      pricingInfo
    });
  let lotus = kelp,
    mint = formatCreditReloadCurrency({
      intl,
      creditQuantity: Number.parseInt(trimOptionalString(targetBalance), 10),
      pricingInfo
    });
  let nova = mint,
    olive = formatCreditReloadCurrency({
      intl,
      creditQuantity: Number.parseInt(trimOptionalString(monthlyLimit), 10),
      pricingInfo
    });
  let prism = olive;
  return <p className="text-sm leading-5 text-token-text-secondary">
      {lotus == null || nova == null ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.description.pending",
      defaultMessage: "If your balance falls below the minimum, Codex will automatically reload your credits",
      description: "Fallback description shown while pricing is loading"
    }} /> : prism == null ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.description.noLimit",
      defaultMessage: "When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum",
      description: "Description explaining how automatic reload works without a monthly limit",
      values: {
        thresholdAmount: lotus,
        targetAmount: nova
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.description",
      defaultMessage: "When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month",
      description: "Description explaining how automatic reload works",
      values: {
        thresholdAmount: lotus,
        targetAmount: nova,
        monthlyLimitAmount: prism
      }
    }} />}
    </p>;
}
function indigo(quill) {
  let {
      intl,
      targetBalance,
      minimumBalance,
      monthlyLimit,
      pricingInfo,
      rateCardLinkMode = "button"
    } = quill,
    reef = <Bravo {...{
      intl,
      targetBalance,
      minimumBalance,
      monthlyLimit,
      pricingInfo
    }} />;
  let sage = rateCardLinkMode === "button" ? <Alpha {...{
    children: <Copper {...{}} />
  }} /> : <Copper {...{}} />;
  return <div className="flex flex-col gap-1">
      {reef}
      {sage}
    </div>;
}
function jade() {
  return <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.viewRateCard",
    defaultMessage: "View rate card",
    description: "Button label to view the credit rate card"
  }} />;
}
function kite(topaz) {
  let {
    children
  } = topaz;
  return <button type="button" className="cursor-interaction text-left text-token-link" onClick={lemon}>
      {children}
    </button>;
}
function lemon(ultra) {
  deferredUiEnt({
    event: ultra,
    href: willow,
    initiator: "open_in_browser_bridge"
  });
}
function marble(vapor) {
  let {
      intl,
      creditDetails,
      pricingInfo,
      actions
    } = vapor,
    wheat = nickel({
      intl,
      creditDetails,
      pricingInfo
    });
  let yarn = wheat,
    zephyr = <span className="text-xs text-token-text-secondary">
        {creditDetails?.unlimited ? <MemoizedFormattedMessage {...{
        id: "settings.usage.credit.remaining.unlimited",
        defaultMessage: "Unlimited credit",
        description: "Title shown when the account has unlimited credit"
      }} /> : yarn == null ? <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.currentBalance.unavailable",
        defaultMessage: "Current balance unavailable",
        description: "Fallback shown when the current credits balance cannot be loaded in a credit reload modal footer"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.currentBalance",
        defaultMessage: "Current balance: {balance}",
        description: "Current credits balance shown in a credit reload modal footer",
        values: {
          balance: yarn
        }
      }} />}
      </span>;
  let acorn = <div className="shrink-0">{actions}</div>;
  return <div className="flex items-center justify-between gap-4">
      {zephyr}
      {acorn}
    </div>;
}
function nickel({
  intl,
  creditDetails,
  pricingInfo
}) {
  return creditDetails == null || creditDetails.unlimited ? null : formatCreditReloadCurrency({
    intl,
    creditQuantity: Math.floor(Number(creditDetails.balance ?? 0)),
    pricingInfo
  }) ?? intl.formatNumber(0);
}
function onyx({
  autoTopUpEnabled,
  fallbackToExternal = true,
  scope,
  source,
  email,
  quantity,
  onOpenChange,
  postCreditPurchaseAction,
  statsigClient,
  tryOpenEmbeddedCreditCheckout
}) {
  let bloom = trimOptionalString(quantity);
  return tryOpenEmbeddedCreditCheckout({
    autoTopUpEnabled,
    postCreditPurchaseAction,
    quantity: bloom
  }) ? (logProductEvent(scope, CodexPluginMarketplaceSurface, {
    creditQuantity: CodexAutomationDeleteStatus(bloom),
    source
  }), CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(scope, {
    audience: "personal",
    checkoutKind: "standalone_credit",
    entryPoint: "credit_reload_dialog"
  }), onOpenChange(false), true) : fallbackToExternal ? (logProductEvent(scope, CodexPluginMarketplaceSurface, {
    creditQuantity: CodexAutomationDeleteStatus(bloom),
    source
  }), CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(scope, {
    audience: "personal",
    checkoutKind: "standalone_credit",
    entryPoint: "credit_reload_dialog"
  }), PdfPermissionFlag({
    href: AppInitialLy({
      loginHint: email,
      statsigClient,
      url: validateCreditsPurchaseQuantity(bloom, {
        autoTopUpEnabled
      })
    }),
    initiator: "open_in_browser_bridge"
  }), onOpenChange(false), true) : false;
}
function pearl({
  scope,
  intl,
  intent,
  kind
}) {
  let coral;
  switch (intent) {
    case "enable":
      coral = kind === "success" ? intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.enable.success",
        defaultMessage: "Enabled auto-reload",
        description: "Toast shown when enabling auto reload succeeds"
      }) : intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.enable.error",
        defaultMessage: "Failed to enable auto-reload",
        description: "Toast shown when enabling auto reload fails"
      });
      break;
    case "update":
      coral = kind === "success" ? intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.update.success",
        defaultMessage: "Updated auto-reload settings",
        description: "Toast shown when updating auto reload succeeds"
      }) : intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.update.error",
        defaultMessage: "Failed to update auto-reload",
        description: "Toast shown when updating auto reload fails"
      });
      break;
    case "disable":
      coral = kind === "success" ? intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.disable.success",
        defaultMessage: "Disabled auto-reload",
        description: "Toast shown when disabling auto reload succeeds"
      }) : intl.formatMessage({
        id: "settings.usage.creditReload.autoReload.disable.error",
        defaultMessage: "Failed to disable auto-reload",
        description: "Toast shown when disabling auto reload fails"
      });
  }
  if (kind === "success") {
    scope.get(toastAtom).success(coral, violet);
    return;
  }
  scope.get(toastAtom).danger(coral, violet);
}
function quartz(drift) {
  let eagle = trimOptionalString(drift);
  return CREDIT_RECHARGE_TARGET_OPTIONS.some(item => String(item) === eagle);
}
function river(frost) {
  let {
      dialogDescriptionId,
      screenReaderTitle,
      screenReaderDescription,
      headerTitle,
      headerSubtitle,
      footer,
      onSubmit,
      children
    } = frost,
    glide = event => {
      event.preventDefault();
      onSubmit();
    };
  let honey = <RealtimeVoiceHostId {...{
    asChild: true,
    children: <h2 className="sr-only">{screenReaderTitle}</h2>
  }} />;
  let iris = <div id={dialogDescriptionId} className="sr-only">
      {screenReaderDescription}
    </div>;
  let jewel = <DeferredUiH {...{
    title: headerTitle,
    subtitle: headerSubtitle
  }} />;
  let knoll = <DeferredUiU {...{
    children: [honey, iris, jewel]
  }} />;
  let lunar = <DeferredUiU {...{
    className: "pt-4",
    children: footer
  }} />;
  return <DeferredUiB {...{
    as: "form",
    onSubmit: glide,
    children: [knoll, children, lunar]
  }} />;
}
var slate,
  timber,
  umbra,
  violet,
  willow,
  xenon,
  yellow = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_S6_Init();
    ensureComposerEsm_Utt_Init();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    timber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureAuthProviderInit();
    ensureSettingsQueryAtomsInit();
    openMcpAppSidePanelTab();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Ilt_Init();
    CHATGPT_CODEX_CLOUD_URL();
    ensureComposerEsm_K9_Init();
    setQuickChatSize();
    ensureAppScopeInit();
    ensureSkillsPageHelpersInit();
    DeferredAccountRy();
    ensureCloudApiClientInit();
    DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL();
    alpha();
    bravo();
    copper();
    initCreditReloadDialogFormatting();
    CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS();
    resolveAutoReloadMutationAction();
    violet = {
      duration: 3
    };
    willow = "https://help.openai.com/en/articles/20001106-codex-rate-card";
    xenon = "min-w-[88px] justify-center";
  });
