// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/7
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
const delta: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const queued: any = undefined;
const $e: any = undefined;
const At: any = undefined;
const Alpha: any = undefined;
const Bravo: any = undefined;
const Copper: any = undefined;
const Delta: any = undefined;
function _t(kite) {
  let {
      intl,
      value,
      minimumBalance,
      pricingInfo,
      tiers,
      error,
      disabled,
      onChange,
      onInvalidCurrencyDraftChange,
      onBlur
    } = kite,
    lemon = harbor.useId(),
    marble = Number.parseInt(minimumBalance, 10),
    nickel = Number.parseInt(value, 10),
    onyx = Number.isFinite(marble) && Number.isFinite(nickel) ? nickel - marble : 0,
    pearl = tiers.filter(falcon),
    quartz = [...(pearl.length > 0 ? pearl : tiers)].sort(echo),
    river = hazel => hazel.minimum_quantity === onyx;
  let slate = quartz.some(river),
    [timber, umbra] = harbor.useState(false),
    violet = timber || !slate,
    willow = error == null ? undefined : lemon,
    xenon = <legend className="sr-only">
        {<MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.autoReload.discount.reloadAmount.label",
        defaultMessage: "Minimum reload amount",
        description: "Accessible group label for the minimum reload amount cards in the discounted auto reload modal"
      }} />}
      </legend>;
  let yellow = quartz.map(item => {
      let ivory = formatCreditReloadCurrency({
          intl,
          creditQuantity: item.minimum_quantity,
          pricingInfo
        }),
        jasper = !violet && item.minimum_quantity === onyx;
      return <Alpha key={item.minimum_quantity} {...{
        ariaLabel: intl.formatMessage({
          id: "settings.usage.creditReload.autoReload.discount.reloadAmount.option.ariaLabel",
          defaultMessage: "{price} ({creditCount, number} credits) {discountPercent, number}% off",
          description: "Accessible label for a discounted auto reload amount card"
        }, {
          price: ivory ?? intl.formatNumber(item.minimum_quantity),
          creditCount: item.minimum_quantity,
          discountPercent: item.percent_off
        }),
        disabled,
        isSelected: jasper,
        variant: "discount",
        onClick: () => {
          Number.isFinite(marble) && (umbra(false), onInvalidCurrencyDraftChange(false), onChange(String(marble + item.minimum_quantity)), onBlur());
        },
        children: [<span className="text-base font-medium text-token-text-primary tabular-nums">
                  {ivory ?? intl.formatNumber(item.minimum_quantity)}
                </span>, <span className="text-xs leading-4 font-normal text-token-text-secondary tabular-nums">
                  {<MemoizedFormattedMessage {...{
            id: "settings.usage.creditReload.autoReload.discount.reloadAmount.credits",
            defaultMessage: "{creditCount, number} credits",
            description: "Credit count shown below an auto reload amount card",
            values: {
              creditCount: item.minimum_quantity
            }
          }} />}
                </span>, <Bravo {...{
          discountPercent: item.percent_off
        }} />]
      }} />;
    }),
    zinc = intl.formatMessage({
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.other.ariaLabel",
      defaultMessage: "Other amount",
      description: "Accessible label for the custom auto reload amount card"
    });
  let amber = () => {
    umbra(true);
  };
  let basalt = <span className="text-base font-medium text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.other",
      defaultMessage: "Other",
      description: "Option label for entering a custom auto reload amount"
    }} />}
    </span>;
  let cedar = <span className="text-xs leading-4 font-normal text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.otherHint",
      defaultMessage: "Custom amount",
      description: "Helper text on the Other amount card in the discounted auto reload modal"
    }} />}
    </span>;
  let daisy = <Alpha {...{
    ariaLabel: zinc,
    disabled,
    isSelected: violet,
    variant: "discount",
    onClick: amber,
    children: [basalt, cedar]
  }} />;
  let ember = <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {yellow}
      {daisy}
    </div>;
  let flint = violet ? <Copper {...{
    intl,
    value: onyx > 0 ? String(onyx) : "",
    pricingInfo,
    placeholder: intl.formatMessage({
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.custom.placeholder",
      defaultMessage: "Enter amount",
      description: "Placeholder for the custom currency-denominated auto reload amount input"
    }),
    hasError: error != null,
    disabled,
    errorDescriptionId: error == null ? undefined : lemon,
    ariaLabel: intl.formatMessage({
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.custom.ariaLabel",
      defaultMessage: "Custom reload amount",
      description: "Accessible label for the custom currency-denominated auto reload amount input"
    }),
    showCreditQuantity: true,
    showCurrencyPrefixWhenEmpty: true,
    discountPercent: DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL({
      tiers,
      targetBalance: value,
      minimumBalance
    }),
    onInvalidCurrencyDraftChange,
    onBlur,
    onChange: kelp => {
      if (!Number.isFinite(marble)) return;
      let lotus = Number.parseInt(kelp, 10);
      onChange(Number.isFinite(lotus) ? String(marble + lotus) : "");
    }
  }} /> : null;
  let garnet = error === "target-balance-below-minimum" ? <p id={lemon} className="text-sm text-token-error-foreground">
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.minimum",
      defaultMessage: "Choose a reload amount of At least {minimumCredits, number} credits",
      description: "Validation message shown when a discounted auto-reload amount is below the minimum supported amount",
      values: {
        minimumCredits: 125
      }
    }} />}
      </p> : error === "missing" ? <p id={lemon} className="text-sm text-token-error-foreground">
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.autoReload.discount.reloadAmount.required",
      defaultMessage: "Enter a reload amount",
      description: "Validation message shown when the custom discounted auto-reload amount is empty"
    }} />}
      </p> : <At {...{
    id: lemon,
    fieldError: error
  }} />;
  return <fieldset className="flex min-w-0 flex-col gap-2" aria-describedby={willow}>
      {xenon}
      {ember}
      {flint}
      {garnet}
    </fieldset>;
}
function echo(mint, nova) {
  return mint.minimum_quantity - nova.minimum_quantity;
}
function falcon(olive) {
  return olive.minimum_quantity > 1;
}
var gamma,
  harbor,
  indigo,
  jade = esmInit(() => {
    gamma = reactCompilerRuntime();
    harbor = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureAppShellAtomsInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    $e();
    DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL();
    delta();
    initCreditReloadDialogFormatting();
    CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS();
  });
