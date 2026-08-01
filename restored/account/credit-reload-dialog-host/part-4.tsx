// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/7
/* split-lane-import-depth:1 */

import { CodexAutomationDeleteStatus } from "../../analytics/codex-automation-delete-status";
import { CODEX_ONBOARDING_STARTER_PROMPT_SELECTED_TYPE } from "../../analytics/codex-onboarding-starter-prompt-selected-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S6_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
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
const echo: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const river: any = undefined;
const queued: any = undefined;
const AppInitialNy: any = undefined;
const AppInitialPy: any = undefined;
const IntlProvider: any = undefined;
const At: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
const Echo: any = undefined;
const Falcon: any = undefined;
const Gamma: any = undefined;
const Harbor: any = undefined;
const Indigo: any = undefined;
const deferredUiU: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
function jade(river) {
  let {
      intl,
      minimumBalance,
      monthlyLimit,
      pricingInfo,
      isDiscountedAutoReloadExperience = false,
      reloadAmountContent,
      disabled = false,
      minimumBalanceError,
      monthlyLimitError,
      hasImmediateTopUpFailure,
      immediateTopUpFailureAmount,
      isManagePaymentPending,
      onMinimumBalanceChange,
      onInvalidMinimumBalanceCurrencyDraftChange: slate,
      onMinimumBalanceBlur,
      onMonthlyLimitChange,
      onInvalidMonthlyLimitCurrencyDraftChange,
      onMonthlyLimitBlur,
      onOpenManagePayment
    } = river,
    timber = marble.useId(),
    umbra = marble.useId(),
    [violet, willow] = marble.useState(false),
    xenon = isDiscountedAutoReloadExperience ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.minimumBalance.discounted.v2",
      defaultMessage: "Minimum balance",
      description: "Label shown above the balance threshold in the discounted auto-reload modal"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.minimumBalance",
      defaultMessage: "Minimum balance",
      description: "Label shown above the minimum balance input"
    }} />;
  let yellow = isDiscountedAutoReloadExperience ? <OptionalTooltip {...{
    open: violet,
    onOpenChange: willow,
    tooltipContent: <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.minimumBalance.discounted.tooltip",
      defaultMessage: "Automatically purchase credits when my balance drops below this amount",
      description: "Tooltip explaining when discounted auto-reload starts based on the minimum balance"
    }} />,
    children: <button type="button" aria-label={intl.formatMessage({
      id: "settings.usage.creditReload.minimumBalance.discounted.tooltip.ariaLabel",
      defaultMessage: "About minimum balance",
      description: "Accessible label for the discounted auto-reload minimum balance tooltip trigger"
    })} className="flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-token-text-tertiary outline-none hover:text-token-text-primary focus-visible:ring-1 focus-visible:ring-token-focus-border" onClick={() => {
      willow(kite);
    }}>
            {<ShellLayoutMetricsContext {...{
        "aria-hidden": true,
        className: "icon-2xs"
      }} />}
          </button>
  }} /> : null;
  let zinc = <div className="flex items-center gap-1 text-sm text-token-text-primary">
      {xenon}
      {yellow}
    </div>;
  let amber = minimumBalanceError != null,
    basalt = minimumBalanceError == null ? undefined : timber,
    cedar = isDiscountedAutoReloadExperience ? intl.formatMessage({
      id: "settings.usage.creditReload.minimumBalance.discounted.ariaLabel.v2",
      defaultMessage: "Minimum balance",
      description: "Accessible label for the balance threshold in the discounted auto-reload modal"
    }) : intl.formatMessage({
      id: "settings.usage.creditReload.minimumBalance.ariaLabel",
      defaultMessage: "Minimum balance",
      description: "Accessible label for the minimum balance input"
    });
  let daisy = <Alpha {...{
    intl,
    value: minimumBalance,
    pricingInfo,
    placeholder: "",
    hasError: amber,
    disabled: disabled,
    errorDescriptionId: basalt,
    ariaLabel: cedar,
    showCreditQuantity: isDiscountedAutoReloadExperience,
    showCurrencyPrefixWhenEmpty: isDiscountedAutoReloadExperience,
    onInvalidCurrencyDraftChange: slate,
    onBlur: onMinimumBalanceBlur,
    onChange: onMinimumBalanceChange
  }} />;
  let ember = minimumBalanceError == null ? null : <At {...{
    id: timber,
    fieldError: minimumBalanceError
  }} />;
  let flint = <div className="flex flex-col gap-2">
      {zinc}
      {daisy}
      {ember}
    </div>;
  let garnet = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.spendLimit",
    defaultMessage: "Maximum monthly spend",
    description: "Label shown above the monthly reload spend limit"
  }} />;
  let hazel = <label className="flex items-center gap-1 text-sm text-token-text-primary">
      {garnet}
      <span className="text-token-text-secondary">
        {isDiscountedAutoReloadExperience ? <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.spendLimit.optional.discounted",
        defaultMessage: "(optional)",
        description: "Helper label marking the monthly reload spend limit as optional in the discounted auto-reload modal"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.spendLimit.optional",
        defaultMessage: "(Optional)",
        description: "Helper label marking the monthly reload spend limit as optional"
      }} />}
      </span>
    </label>;
  let ivory = intl.formatMessage({
    id: "settings.usage.creditReload.spendLimit.placeholder",
    defaultMessage: "No limit",
    description: "Placeholder shown when no monthly reload spend limit is set"
  });
  let jasper = monthlyLimitError != null,
    kelp = monthlyLimitError == null ? undefined : umbra,
    lotus = isDiscountedAutoReloadExperience ? intl.formatMessage({
      id: "settings.usage.creditReload.spendLimit.discounted.ariaLabel",
      defaultMessage: "Maximum monthly spend (optional)",
      description: "Accessible label for the optional maximum monthly spend in the discounted auto-reload modal"
    }) : intl.formatMessage({
      id: "settings.usage.creditReload.spendLimit.ariaLabel",
      defaultMessage: "Monthly reload spend limit",
      description: "Accessible label for the monthly reload spend limit input"
    });
  let mint = <Alpha {...{
    intl,
    value: monthlyLimit,
    pricingInfo,
    placeholder: ivory,
    hasError: jasper,
    disabled: disabled,
    errorDescriptionId: kelp,
    ariaLabel: lotus,
    showCreditQuantity: true,
    showCurrencyPrefixWhenEmpty: isDiscountedAutoReloadExperience,
    onInvalidCurrencyDraftChange: onInvalidMonthlyLimitCurrencyDraftChange,
    onBlur: onMonthlyLimitBlur,
    onChange: onMonthlyLimitChange
  }} />;
  let nova = monthlyLimitError === "monthly-limit-below-target" && isDiscountedAutoReloadExperience ? <p id={umbra} className="text-sm text-token-error-foreground">
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.spendLimit.discounted.error",
      defaultMessage: "Maximum monthly spend must cover the minimum balance plus the reload amount",
      description: "Validation message when the optional maximum monthly spend is below the configured minimum balance plus reload amount"
    }} />}
      </p> : monthlyLimitError == null ? null : <At {...{
    id: umbra,
    fieldError: monthlyLimitError
  }} />;
  let olive = <div className="flex flex-col gap-2">
      {hazel}
      {mint}
      {nova}
    </div>;
  let prism = hasImmediateTopUpFailure ? <div className="rounded-2xl border border-token-error-foreground/20 bg-token-input-validation-error-background/20 px-4 py-3 text-sm leading-5 text-token-text-primary">
      {immediateTopUpFailureAmount == null ? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.immediateTopUpFailure.generic",
      defaultMessage: "The initial reload failed. <managePayment>Update your payment method</managePayment>",
      description: "Inline error shown when the initial auto reload purchase fails",
      values: {
        managePayment: quill => <button type="button" className={IntlProvider("cursor-interaction font-medium underline underline-offset-2", isManagePaymentPending && "pointer-events-none opacity-60")} disabled={isManagePaymentPending} onClick={onOpenManagePayment}>
                  {quill}
                </button>
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.immediateTopUpFailure.amount",
      defaultMessage: "The initial reload for an estimated {amount} failed. <managePayment>Update your payment method</managePayment>",
      description: "Inline error shown when the initial auto reload purchase fails with a price estimate",
      values: {
        amount: immediateTopUpFailureAmount,
        managePayment: reef => <button type="button" className={IntlProvider("cursor-interaction font-medium underline underline-offset-2", isManagePaymentPending && "pointer-events-none opacity-60")} disabled={isManagePaymentPending} onClick={onOpenManagePayment}>
                  {reef}
                </button>
      }
    }} />}
    </div> : null;
  return <>
      {reloadAmountContent}
      {flint}
      {olive}
      {prism}
    </>;
}
function kite(sage) {
  return !sage;
}
var lemon,
  marble,
  nickel,
  onyx = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    marble = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Hlt_Init();
    svgToDataUri();
    indigo();
  });
function pearl(topaz) {
  let {
      source,
      creditDetails,
      pricingInfo,
      onOpenChange,
      dialogDescriptionId
    } = topaz,
    ultra = CodexPluginActionType(appScopeAtom),
    {
      email
    } = useAuth(),
    vapor = AppIconAlt(),
    wheat = appendLoginHintToPurchaseUrl(),
    yarn = useIntl(),
    [zephyr, acorn] = gamma.useState(String(CREDIT_RECHARGE_TARGET_OPTIONS[0])),
    [bloom, coral] = gamma.useState("preset"),
    [drift, eagle] = gamma.useState(false),
    [frost, glide] = gamma.useState(false),
    honey = frost ? "invalid-currency-amount" : AppInitialPy({
      value: zephyr,
      pricingInfo
    });
  let iris = honey,
    jewel = <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.oneTimePurchase.title",
      defaultMessage: "One time credit purchase",
      description: "Title for the one time credit purchase modal"
    }} />;
  let knoll = jewel,
    lunar = <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.oneTimePurchase.description",
      defaultMessage: "Purchase credits so you can continue using Codex if your usage runs out. <link>View rate card</link>",
      description: "Description for the one time credit purchase modal",
      values: {
        link: quartz
      }
    }} />;
  let moss = lunar,
    north = <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.oneTimePurchase.screenReaderDescription",
      defaultMessage: "Purchase credits so you can continue using Codex if your usage runs out. View rate card",
      description: "Screen reader description for the one time credit purchase modal"
    }} />;
  let orbit = north,
    pine = () => {
      eagle(true);
      iris ?? echo({
        scope: ultra,
        source,
        email,
        quantity: zephyr,
        onOpenChange,
        statsigClient: vapor,
        tryOpenEmbeddedCreditCheckout: wheat
      });
    };
  let quest = pine,
    ridge = iris != null,
    storm = <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.continueToCheckout",
      defaultMessage: "Continue to checkout",
      description: "Button label to open checkout from a credit purchase modal"
    }} />;
  let tide = <SetRemoteControlEnabledForHost {...{
    className: "w-auto",
    children: <ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      type: "submit",
      className: harbor,
      disabled: ridge,
      children: storm
    }} />
  }} />;
  let unity = <Bravo {...{
    intl: yarn,
    creditDetails,
    pricingInfo,
    actions: tide
  }} />;
  let vale = () => {
    quest();
  };
  let wave = drift ? iris : null,
    apex = AppInitialNy(pricingInfo);
  let brook = elm => {
    glide(false);
    coral(elm);
  };
  let cliff = () => {
    eagle(true);
  };
  let dusk = <DeferredUiU {...{
    className: "gap-3 pt-4",
    children: <Copper {...{
      intl: yarn,
      value: zephyr,
      selection: bloom,
      pricingInfo,
      error: wave,
      minimumQuantity: apex,
      quantityStep: 250,
      onChange: acorn,
      onSelectionChange: brook,
      onInvalidCurrencyDraftChange: glide,
      onBlur: cliff
    }} />
  }} />;
  return <Delta {...{
    dialogDescriptionId,
    screenReaderTitle: knoll,
    screenReaderDescription: orbit,
    headerTitle: knoll,
    headerSubtitle: moss,
    footer: unity,
    onSubmit: vale,
    children: dusk
  }} />;
}
function quartz(fern) {
  return <Echo {...{
    children: fern
  }} />;
}
