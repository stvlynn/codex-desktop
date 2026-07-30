// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/7
/* split-lane-import-depth:1 */

import { CodexAutomationDeleteStatus } from "../../analytics/codex-automation-delete-status";
import { CODEX_ONBOARDING_STARTER_PROMPT_SELECTED_TYPE } from "../../analytics/codex-onboarding-starter-prompt-selected-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
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
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const AppInitialAy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiB@ui/deferred-ui-b.ts) */
const AppInitialB: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:needsApps@hosts/needs-apps.ts) */
const AppInitialCt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveAutoReloadMutationAction@account/auto-reload-save-payload.ts) */
const AppInitialCy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:composerThreadGoalMaterializeError@conversation/composer-thread-goal-materialize-error.ts) */
const AppInitialDx: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:validateCreditBalanceField@account/credit-auto-reload-validators.ts) */
const AppInitialDy: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (missing-export:desktop/deferred-ex.tsx) */
const AppInitialEx: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useCreditsUsageQuery@account/use-credits-usage-query.ts) */
const AppInitialJb: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:appendLoginHintToPurchaseUrl@account/append-login-hint-to-purchase-url.ts) */
const AppInitialLy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:validateMonthlyLimitAgainstTarget@account/auto-reload-save-payload.ts) */
const AppInitialMy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:getCreditsPurchaseMinimumQuantity@account/credits-purchase-field-validators.ts) */
const AppInitialNy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:parseFormattedCreditsQuantity@account/credits-purchase-field-validators.ts) */
const AppInitialOy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:validateCreditsPurchaseQuantity@account/credits-purchase-field-validators.ts) */
const AppInitialPy: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useCreditAutoReloadSettingsQuery@account/use-credit-auto-reload-settings-query.ts) */
const AppInitialQb: any = undefined;
/** Wave FZ unresolved companion (missing-export:worktree/queued.ts) */
const queued: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:validateCreditTargetAgainstMinimum@account/credit-auto-reload-validators.ts) */
const AppInitialTy: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/usage-settings.ts) */
const usageSettings: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
var echo,
  falcon,
  $e = esmInit(() => {
    react();
    falcon = nickel => <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...nickel}>
        <path d="M16.385 6.43359C16.3853 6.0809 16.3794 5.95171 16.3557 5.84766C16.3264 5.71907 16.2755 5.59603 16.2053 5.48438C16.1485 5.394 16.0607 5.29826 15.8108 5.04883L15.5393 4.77734C15.1571 4.39481 14.9968 4.24305 14.8293 4.1377C14.638 4.01732 14.4277 3.93006 14.2073 3.87988C14.1108 3.85791 14.0074 3.84591 13.8606 3.83887L13.2532 3.83008H11.759C11.2187 3.82984 10.9987 3.83605 10.8059 3.87988C10.5856 3.93004 10.3751 4.01741 10.1838 4.1377C10.0164 4.24303 9.85593 4.39397 9.47388 4.77637L5.40161 8.84863C4.93809 9.31214 4.60809 9.64298 4.36938 9.92188C4.13013 10.2014 4.00913 10.3995 3.9436 10.5859C3.79272 11.0156 3.79272 11.4844 3.9436 11.9141C4.00912 12.1005 4.1301 12.2985 4.36938 12.5781C4.60808 12.857 4.93808 13.1879 5.40161 13.6514L6.56372 14.8135C7.02708 15.2769 7.35812 15.6061 7.63696 15.8447C7.91669 16.0841 8.11451 16.206 8.30102 16.2715C8.73054 16.4223 9.19865 16.4222 9.62817 16.2715C9.81468 16.206 10.0125 16.0841 10.2922 15.8447C10.5711 15.6061 10.9021 15.2768 11.3655 14.8135L15.4377 10.7412L15.8616 10.3057C15.9603 10.197 16.0247 10.115 16.0774 10.0312C16.1977 9.83996 16.285 9.62952 16.3352 9.40918C16.3572 9.31269 16.3692 9.20931 16.3762 9.0625L16.385 8.45508V6.43359ZM17.7151 8.45508C17.7153 8.95757 17.7146 9.33706 17.6311 9.7041C17.5476 10.0709 17.4027 10.4209 17.2024 10.7393C17.0019 11.0579 16.7337 11.3265 16.3782 11.6816L12.3059 15.7539L11.6858 16.3682C11.4956 16.5525 11.321 16.7155 11.1575 16.8555L10.9016 17.0625C10.6431 17.2586 10.3744 17.4193 10.0696 17.5264L9.79809 17.6084C9.25142 17.7496 8.67777 17.7496 8.1311 17.6084L7.86059 17.5264C7.45421 17.3837 7.11102 17.1459 6.77173 16.8555C6.60838 16.7156 6.43437 16.5523 6.24438 16.3682L5.62329 15.7539L4.46118 14.5918C4.12332 14.254 3.82989 13.9599 3.58618 13.6963L3.35962 13.4424C3.1055 13.1455 2.89138 12.8464 2.74634 12.5039L2.68872 12.3545C2.46901 11.7289 2.44087 11.0539 2.60571 10.416L2.68872 10.1455C2.79573 9.84084 2.95568 9.57189 3.15161 9.31348L3.35962 9.05762C3.49944 8.89425 3.66183 8.7193 3.84595 8.5293L4.46118 7.9082L8.53247 3.83691C8.88769 3.48137 9.15621 3.21222 9.47485 3.01172C9.79315 2.81147 10.1433 2.66651 10.51 2.58301C10.7855 2.5203 11.0683 2.50474 11.4045 2.50098L11.76 2.5H13.2532L13.6086 2.50098C13.9446 2.50475 14.2269 2.52037 14.5022 2.58301C14.8689 2.66648 15.219 2.8115 15.5374 3.01172C15.8561 3.21223 16.1245 3.48132 16.4797 3.83691L16.7512 4.10742C16.979 4.33481 17.1794 4.53561 17.3303 4.77539C17.4805 5.01408 17.59 5.2768 17.6526 5.55176C17.7155 5.82823 17.7154 6.11248 17.7151 6.43457V8.45508Z" fill="currentColor" />
        <path d="M14.3809 7.08301C14.3809 7.77336 13.8212 8.33301 13.1309 8.33301C12.4405 8.33301 11.8809 7.77336 11.8809 7.08301C11.8809 6.39265 12.4405 5.83301 13.1309 5.83301C13.8212 5.83301 14.3809 6.39265 14.3809 7.08301Z" fill="currentColor" />
      </svg>;
  });
function gamma(onyx) {
  let {
      intl,
      value,
      selection,
      pricingInfo,
      error,
      minimumQuantity,
      quantityStep,
      onChange,
      onSelectionChange,
      onInvalidCurrencyDraftChange,
      onBlur
    } = onyx,
    pearl = trimOptionalString(value);
  let quartz = pearl,
    river = selection === "preset",
    slate = CREDIT_RECHARGE_TARGET_OPTIONS.map(item => <Alpha key={item} {...{
      creditQuantity: item,
      pricingInfo,
      isSelected: river && String(item) === quartz,
      intl,
      onClick: () => {
        onSelectionChange("preset");
        onChange(String(item));
      }
    }} />);
  let timber = !river,
    umbra = river ? "border border-token-border" : "border-2 border-token-text-primary",
    violet = IntlProvider("cursor-interaction flex h-[72px] items-center justify-center rounded-xl px-4 text-base", umbra);
  let willow = () => {
    river && (onSelectionChange("custom"), onChange(""));
  };
  let xenon = <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.amount.other",
    defaultMessage: "Other",
    description: "Option label for entering a custom reload amount"
  }} />;
  let yellow = <button type="button" aria-pressed={timber} className={violet} onClick={willow}>
      {xenon}
    </button>;
  let zinc = <div className="grid grid-cols-4 gap-2">
      {slate}
      {yellow}
    </div>;
  let amber = river ? null : <div className="flex flex-col gap-2">
      <label className="text-sm text-token-text-primary">
        {<MemoizedFormattedMessage {...{
        id: "settings.usage.creditReload.amount.other",
        defaultMessage: "Other",
        description: "Option label for entering a custom reload amount"
      }} />}
      </label>
      {<Bravo {...{
      intl,
      value,
      pricingInfo,
      placeholder: formatCreditReloadAmountWithoutSymbol({
        intl,
        creditQuantity: minimumQuantity,
        pricingInfo
      }) ?? "",
      hasError: error != null,
      ariaLabel: intl.formatMessage({
        id: "settings.usage.creditReload.amount.other.ariaLabel",
        defaultMessage: "Custom reload amount",
        description: "Accessible label for the custom reload amount input"
      }),
      showCreditQuantity: true,
      onInvalidCurrencyDraftChange,
      onBlur,
      onChange
    }} />}
    </div>;
  let basalt = error == null ? null : <At {...{
    fieldError: error,
    minimumQuantity,
    quantityStep
  }} />;
  return <div className="flex flex-col gap-2">
      {zinc}
      {amber}
      {basalt}
    </div>;
}
function Bravo(cedar) {
  let {
      intl,
      value,
      pricingInfo,
      placeholder,
      hasError,
      ariaLabel,
      disabled = false,
      errorDescriptionId,
      showCreditQuantity = false,
      showCurrencyPrefixWhenEmpty = false,
      discountPercent = null,
      onChange,
      onInvalidCurrencyDraftChange,
      onBlur
    } = cedar,
    daisy = delta.useId(),
    [ember, flint] = delta.useState(null),
    garnet,
    hazel,
    ivory,
    jasper;
  {
    let ultra = showCreditQuantity || showCurrencyPrefixWhenEmpty ? formatCreditReloadAmountWithoutSymbol({
      intl,
      creditQuantity: Number.parseInt(trimOptionalString(value), 10),
      pricingInfo
    }) : formatCreditReloadCurrency({
      intl,
      creditQuantity: Number.parseInt(trimOptionalString(value), 10),
      pricingInfo
    });
    ivory = ember ?? ultra ?? value;
    hazel = (showCreditQuantity || showCurrencyPrefixWhenEmpty) && (showCurrencyPrefixWhenEmpty || ivory.length > 0) ? formatCreditReloadCurrencySymbol({
      intl,
      pricingInfo
    }) : null;
    garnet = marble({
      intl,
      value: ivory,
      pricingInfo
    });
    jasper = bravo({
      intl,
      value: ivory,
      pricingInfo
    });
  }
  let kelp = jasper,
    lotus = [errorDescriptionId, showCreditQuantity && kelp != null ? daisy : undefined].filter(indigo).join(" ") || undefined;
  let mint = showCreditQuantity && (discountPercent == null ? "pe-28" : "pe-44"),
    nova = hazel != null && (hazel.length > 1 ? "ps-11" : "ps-7"),
    olive = IntlProvider("bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-8 w-full rounded-xl border border-token-border px-3 text-start text-sm font-normal tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus", mint, nova, "aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20 disabled:cursor-not-allowed disabled:opacity-60");
  let prism = () => {
    (ember == null || garnet != null) && flint(null);
    onInvalidCurrencyDraftChange?.(ember != null && ember.length > 0 && garnet == null);
    onBlur();
  };
  let quill = event => {
    let vapor = event.currentTarget.value;
    if (!alpha({
      intl,
      value: vapor,
      pricingInfo
    })) return;
    flint(vapor);
    let wheat = marble({
      intl,
      value: vapor,
      pricingInfo
    });
    onInvalidCurrencyDraftChange?.(vapor.length > 0 && wheat == null);
    onChange(wheat ?? "");
  };
  let reef = <input value={ivory} placeholder={placeholder} inputMode="decimal" aria-label={ariaLabel} aria-describedby={lotus} aria-invalid={hasError} disabled={disabled} className={olive} onBlur={prism} onChange={quill} />;
  let sage = hazel == null ? null : <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-sm font-normal text-token-text-secondary">
        {hazel}
      </span>;
  let topaz = showCreditQuantity && kelp != null ? <span id={daisy} className="pointer-events-none absolute inset-y-0 end-3 flex items-center gap-2 text-sm font-normal text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.amount.credits",
      defaultMessage: "{creditQuantity, number} credits",
      description: "Credit count shown below a reload amount price",
      values: {
        creditQuantity: kelp
      }
    }} />}
        {discountPercent == null ? null : <>
            {" "}
            {<Copper {...{
        discountPercent: discountPercent
      }} />}
          </>}
      </span> : null;
  return <div className="relative">
      {reef}
      {sage}
      {topaz}
    </div>;
}
function indigo(yarn) {
  return yarn != null;
}
function Copper(zephyr) {
  let {
    discountPercent
  } = zephyr;
  return <span className="inline-flex min-h-5 items-center rounded-full bg-token-discount-badge-background px-2 text-xs font-medium text-token-discount-badge-foreground tabular-nums">
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.amount.discount",
      defaultMessage: "{discountPercent, number}% off",
      description: "Effective total discount shown for an auto-reload amount",
      values: {
        discountPercent
      }
    }} />}
    </span>;
}
function Delta(acorn) {
  let {
      ariaLabel,
      children,
      disabled = false,
      isSelected,
      variant,
      onClick
    } = acorn,
    bloom = (variant === undefined ? "default" : variant) === "discount" ? "min-h-24 gap-1 py-3 outline-none focus-visible:ring-2 focus-visible:ring-token-focus disabled:cursor-not-allowed disabled:opacity-60" : "h-[72px]",
    coral = isSelected ? "border-2 border-token-text-primary" : "border border-token-border",
    drift = IntlProvider("cursor-interaction flex flex-col items-center justify-center rounded-xl px-3 text-center", bloom, coral);
  return <button type="button" aria-pressed={isSelected} aria-label={ariaLabel} disabled={disabled} className={drift} onClick={onClick}>
      {children}
    </button>;
}
function At(eagle) {
  let {
    id,
    fieldError,
    minimumQuantity = 125,
    quantityStep = null
  } = eagle;
  if (fieldError == null) return null;
  let frost = fieldError === "missing" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.missing",
    defaultMessage: "Enter an amount",
    description: "Validation message when a credit reload amount is missing"
  }} /> : null;
  let glide = fieldError === "not-whole-number" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.wholeNumber",
    defaultMessage: "Enter a whole number of credits",
    description: "Validation message when a credit reload amount is not a whole number"
  }} /> : null;
  let honey = fieldError === "invalid-currency-amount" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.invalidCurrencyAmount",
    defaultMessage: "Enter an amount that converts to a whole number of credits",
    description: "Validation message when a typed currency amount does not convert to a whole number of credits"
  }} /> : null;
  let iris = fieldError === "below-minimum" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.minimum",
    defaultMessage: "Enter At least {minimumQuantity, number} credits",
    description: "Validation message when a credit reload amount is below the minimum",
    values: {
      minimumQuantity: minimumQuantity
    }
  }} /> : null;
  let jewel = fieldError === "invalid-increment" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.increment",
    defaultMessage: "Enter credits in increments of {quantityStep, number}",
    description: "Validation message when a one-time reload amount is outside the allowed increment",
    values: {
      quantityStep: quantityStep
    }
  }} /> : null;
  let knoll = fieldError === "monthly-limit-below-target" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.monthlyLimit",
    defaultMessage: "Set the monthly limit high enough to cover one reload",
    description: "Validation message when the monthly limit cannot cover one reload"
  }} /> : null;
  let lunar = fieldError === "target-balance-below-minimum" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.creditReload.error.targetBalance",
    defaultMessage: "Set the target balance At least {minimumQuantity, number} credits above the minimum balance",
    description: "Validation message when the auto reload target balance is not above the minimum balance",
    values: {
      minimumQuantity: 125
    }
  }} /> : null;
  return <p id={id} className="text-sm text-token-error-foreground">
      {frost}
      {glide}
      {honey}
      {iris}
      {jewel}
      {knoll}
      {lunar}
    </p>;
}
function Alpha(moss) {
  let {
      creditQuantity,
      pricingInfo,
      isSelected,
      intl,
      onClick
    } = moss,
    north = formatCreditReloadCurrency({
      intl,
      creditQuantity,
      pricingInfo
    });
  let orbit = north,
    pine = orbit ?? <MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.amount.pending",
      defaultMessage: "—",
      description: "Placeholder shown while a reload amount price is loading"
    }} />;
  let quest = <span className="text-base font-medium text-token-text-primary">
      {pine}
    </span>;
  let ridge = <span className="text-xs text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.creditReload.amount.credits",
      defaultMessage: "{creditQuantity, number} credits",
      description: "Credit count shown below a reload amount price",
      values: {
        creditQuantity
      }
    }} />}
    </span>;
  return <Delta {...{
    isSelected,
    onClick,
    children: [quest, ridge]
  }} />;
}
function marble({
  intl,
  value,
  pricingInfo
}) {
  let storm = value.trim();
  if (storm.length === 0) return "";
  let {
    groupSeparator,
    decimalSeparator,
    digitMap
  } = copper({
    intl,
    pricingInfo
  });
  return parseFormattedCreditsQuantityString({
    value: Array.from(storm, tide => digitMap.get(tide) ?? tide).join(""),
    pricingInfo,
    groupSeparator,
    decimalSeparator
  });
}
