// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/7
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
const copper: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const queued: any = undefined;
const UsePointerSurfaceInteractionGate: any = undefined;
const DeferredUiH: any = undefined;
const DeferredUiB: any = undefined;
const AppInitialB: any = undefined;
const AppInitialEx: any = undefined;
const AppInitialJb: any = undefined;
const AppInitialQb: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const deferredUiU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const usageSettings: any = undefined;
function delta(jade) {
  let kite = gamma.useId(),
    lemon = jade.state === "loading" || jade.state === "error",
    marble = !lemon && jade.variant === "setup-auto-reload" && !jade.serverState.isEnabled && jade.isDiscountOfferPending && jade.discountOffer == null,
    nickel = !lemon && jade.variant !== "one-time-purchase" && (jade.enableAutoTopUpMutation.isPending || jade.updateAutoTopUpMutation.isPending || jade.disableAutoTopUpMutation.isPending),
    onyx;
  if (lemon) {
    let slate = jade.state === "error" ? jade.onRetry : undefined,
      timber = () => {
        jade.onOpenChange(false);
      };
    let umbra;
    umbra = <$t {...{
      variant: jade.variant,
      state: jade.state,
      dialogDescriptionId: kite,
      onRetry: slate,
      onClose: timber
    }} />;
    onyx = umbra;
  } else if (marble) {
    let violet = () => {
      jade.onOpenChange(false);
    };
    let willow;
    willow = <$t {...{
      variant: jade.variant,
      state: "loading",
      dialogDescriptionId: kite,
      onClose: violet
    }} />;
    onyx = willow;
  } else if (jade.variant === "one-time-purchase") {
    let xenon;
    xenon = <Alpha {...{
      ...jade,
      dialogDescriptionId: kite
    }} />;
    onyx = xenon;
  } else {
    let yellow = jade.variant === "setup-auto-reload" ? jade.discountOffer?.auto_reload == null ? "without-auto-reload-offer" : "with-auto-reload-offer" : undefined,
      zinc;
    zinc = <Bravo key={yellow} {...{
      ...jade,
      dialogDescriptionId: kite
    }} />;
    onyx = zinc;
  }
  let pearl = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.close",
    defaultMessage: "Close",
    description: "Accessible label for closing the credit reload dialog"
  }} />;
  let quartz = {
    "aria-describedby": kite,
    onOpenAutoFocus: echo
  };
  let river = amber => {
    nickel && !amber || jade.onOpenChange(amber);
  };
  return <UsePointerSurfaceInteractionGate {...{
    open: jade.open,
    size: "default",
    contentClassName: "w-[580px] max-w-[calc(100vw-2rem)]",
    dialogCloseClassName: "top-[22px]",
    dialogCloseLabel: pearl,
    contentProps: quartz,
    shouldIgnoreClickOutside: nickel,
    onOpenChange: river,
    children: onyx
  }} />;
}
function echo(event) {
  event.preventDefault();
}
function $t(basalt) {
  let {
      variant,
      state,
      dialogDescriptionId,
      onRetry,
      onClose
    } = basalt,
    cedar = variant === "one-time-purchase" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.oneTimePurchase.title",
      defaultMessage: "One time credit purchase",
      description: "Title for the one time credit purchase modal"
    }} /> : variant === "setup-auto-reload" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.setup.title",
      defaultMessage: "Set up auto-reload",
      description: "Title for the auto reload setup modal"
    }} /> : variant === "manage-auto-reload" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.manage.title",
      defaultMessage: "Manage auto-reload",
      description: "Title for the auto reload management modal"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.addCredits.title",
      defaultMessage: "Add credits",
      description: "Title for the add credits modal"
    }} />;
  let daisy = cedar,
    ember = <RealtimeVoiceHostId {...{
      asChild: true,
      children: <h2 className="sr-only">{daisy}</h2>
    }} />;
  let flint = variant === "one-time-purchase" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.oneTimePurchase.screenReaderDescription",
    defaultMessage: "Purchase credits so you can continue using Codex if your usage runs out. View rate card",
    description: "Screen reader description for the one time credit purchase modal"
  }} /> : variant === "add-credits" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.addCredits.screenReaderDescription",
    defaultMessage: "Credits power Codex. Valid for 12 months. View rate card",
    description: "Screen reader description for the add credits modal"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.autoReload.modalDescription",
    defaultMessage: "Automatically add credits when your balance runs low",
    description: "Description for the automatic reload modal"
  }} />;
  let garnet = <p id={dialogDescriptionId} className="sr-only">
      {flint}
    </p>;
  let hazel = state === "loading" ? "status" : undefined,
    ivory = state === "error" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.load.error",
      defaultMessage: "Could not load credit settings",
      description: "Error shown when the combined credit reload dialog cannot load"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.load.loading",
      defaultMessage: "Loading credit settings…",
      description: "Loading label shown while the combined credit reload dialog loads"
    }} />;
  let jasper = <DeferredUiH {...{
    title: daisy,
    subtitle: ivory,
    titleSize: "base"
  }} />;
  let kelp = <DeferredUiU {...{
    children: <div role={hazel}>
            {jasper}
          </div>
  }} />;
  let lotus = state === "error" && onRetry != null ? <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    onClick: onRetry,
    children: <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.load.retry",
      defaultMessage: "Retry",
      description: "Retry button for the combined credit reload dialog"
    }} />
  }} /> : null;
  let mint = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.load.cancel",
    defaultMessage: "Cancel",
    description: "Button label to close the combined credit reload dialog"
  }} />;
  let nova = <ReadLoginRouteQuerySnapshot {...{
    color: "outline",
    onClick: onClose,
    children: mint
  }} />;
  let olive = <DeferredUiU {...{
    className: "pt-4",
    children: <div className="flex justify-end gap-3">
            {lotus}
            {nova}
          </div>
  }} />;
  return <DeferredUiB {...{
    className: "gap-0 px-4 py-4",
    children: [ember, garnet, kelp, olive]
  }} />;
}
var falcon,
  gamma,
  $,
  harbor = esmInit(() => {
    falcon = reactCompilerRuntime();
    gamma = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    copper();
  });
export function CreditReloadDialogHostIcon(prism: any) {
  let {
      onClose,
      source,
      variant
    } = prism,
    {
      accountId,
      authMethod,
      userId
    } = useAuth(),
    quill = AppIconAlt(),
    {
      data
    } = CodexPluginActionResult(titleCaseColonSegments),
    reef = variant !== "one-time-purchase",
    sage = {
      enabled: reef
    };
  let {
      data: _data,
      isError,
      refetch
    } = QueuedMessageTraySurface(sage),
    topaz = variant !== "one-time-purchase",
    ultra = {
      enabled: topaz
    };
  let {
      data: __data,
      isPending
    } = quickChatSurfaceCollapsedAtom(ultra),
    vapor = variant === "setup-auto-reload" && _data?.isEnabled === false && (__data?.payment_methods.length ?? 0) > 0,
    wheat = AppInitialJb({
      accountId,
      authMethod,
      enabled: vapor,
      userId
    });
  let {
      data: ___data,
      isError: _isError,
      isFetching,
      isSuccess,
      refetch: _refetch
    } = useQuery(wheat),
    {
      enableAutoTopUpMutation,
      updateAutoTopUpMutation,
      disableAutoTopUpMutation
    } = AppInitialEx(),
    yarn = {
      enabled: true
    };
  let {
      data: ____data,
      isPending: _isPending,
      isError: __isError,
      refetch: __refetch
    } = AppInitialQb(yarn),
    zephyr = _isPending ? undefined : ____data ?? quill.getContext().user?.country ?? null;
  let acorn = zephyr,
    bloom = {
      billingCurrency: acorn,
      enabled: true
    };
  let {
      data: _____data,
      isPending: __isPending,
      isError: ___isError,
      refetch: ___refetch
    } = AppInitialB(bloom),
    coral = _isPending || __isPending,
    drift = () => {
      __refetch();
      ___refetch();
    };
  let eagle = drift,
    frost = moss => {
      moss || onClose();
    };
  let glide = frost;
  if (variant === "one-time-purchase") {
    if (coral) {
      let pine;
      return <Copper {...{
        open: true,
        source,
        variant,
        state: "loading",
        onOpenChange: glide
      }} />;
    }
    if (__isError || ___isError || acorn == null || _____data == null) {
      let quest;
      return <Copper {...{
        open: true,
        source,
        variant,
        state: "error",
        onRetry: eagle,
        onOpenChange: glide
      }} />;
    }
    let north = data?.credits ?? null,
      orbit;
    return <Copper {...{
      open: true,
      source,
      variant,
      creditDetails: north,
      pricingInfo: _____data,
      onOpenChange: glide
    }} />;
  }
  if (coral || isPending) {
    let ridge;
    return <Copper {...{
      open: true,
      source,
      variant,
      state: "loading",
      onOpenChange: glide
    }} />;
  }
  if (__isError || ___isError || acorn == null || _____data == null) {
    let storm;
    return <Copper {...{
      open: true,
      source,
      variant,
      state: "error",
      onRetry: eagle,
      onOpenChange: glide
    }} />;
  }
  if (DEVELOPERS_OPENAI_COM_CODEX_MCP_URL({
    autoTopUpSettings: _data,
    hasPaymentMethod: (__data?.payment_methods.length ?? 0) > 0,
    isManageAutoReload: variant === "manage-auto-reload"
  })) {
    let tide = data?.credits ?? null,
      unity;
    return <Copper {...{
      open: true,
      source,
      variant: "one-time-purchase",
      creditDetails: tide,
      pricingInfo: _____data,
      onOpenChange: glide
    }} />;
  }
  if (_data == null) {
    let vale;
    return isError ? <Copper {...{
      open: true,
      source,
      variant,
      state: "error",
      onRetry: () => {
        refetch();
      },
      onOpenChange: glide
    }} /> : <Copper {...{
      open: true,
      source,
      variant,
      state: "loading",
      onOpenChange: glide
    }} />;
  }
  if (variant === "add-credits" && _data.isEnabled) {
    let wave = data?.credits ?? null,
      apex;
    return <Copper {...{
      open: true,
      source,
      variant: "one-time-purchase",
      creditDetails: wave,
      pricingInfo: _____data,
      onOpenChange: glide
    }} />;
  }
  let honey = _data.isEnabled ? null : ___data ?? null,
    iris = variant === "setup-auto-reload" && !_data.isEnabled && !isSuccess && !_isError,
    jewel = !_data.isEnabled && _isError,
    knoll = data?.credits ?? null,
    lunar = () => {
      _refetch();
    };
  return <Copper {...{
    open: true,
    source,
    variant,
    serverState: _data,
    discountOffer: honey,
    isDiscountOfferPending: iris,
    isDiscountOfferError: jewel,
    isDiscountOfferFetching: isFetching,
    creditDetails: knoll,
    pricingInfo: _____data,
    enableAutoTopUpMutation,
    updateAutoTopUpMutation,
    disableAutoTopUpMutation,
    onRetryDiscountOffer: lunar,
    onOpenChange: glide
  }} />;
}
var indigo, on;
esmInit(() => {
  indigo = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  ensureAuthProviderInit();
  ensureHostRpcClientsInit();
  usageSettings();
  ensureSkillsPageHelpersInit();
  DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL();
  harbor();
})();
