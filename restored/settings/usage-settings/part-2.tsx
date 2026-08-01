// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 2/4
/* split-lane-import-depth:1 */

import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../../account/chatgpt-plan-ids";
import { createRateLimitCreditRedeemer } from "../../account/create-rate-limit-credit-redeemer";
import { formatCreditReloadCurrency, initCreditReloadDialogFormatting } from "../../account/credit-reload-dialog-formatting";
import { CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS, getCreditsPurchaseMinimumQuantity, parseFormattedCreditsQuantityString } from "../../account/credits-purchase-field-validators";
import { CREDIT_RECHARGE_TARGET_OPTIONS } from "../../account/credits-recharge-defaults";
import { DeferredAccountRy } from "../../account/deferred-account-ry";
import { deferredAccountUv } from "../../account/deferred-account-uv";
import { ensureRateLimitResetDialogInit } from "../../account/ensure-rate-limit-reset-dialog-init";
import { formatRateLimitResetError } from "../../account/format-rate-limit-reset-error";
import { mobileClientIdToStorePlatform } from "../../account/mobile-client-store-platform";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlanExcludingEducation } from "../../account/plan-type-helpers";
import { useUpgradePlanCopyVariant } from "../../account/use-upgrade-plan-copy-variant";
import { ensureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Mx_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { activateConversationSurface } from "../../conversation/activate-conversation-surface";
import { firstRepoFromRepos } from "../../conversation/first-repo-from-repos";
import { QueuedMessageTraySurface } from "../../conversation/queued-message-tray-surface";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { CHATGPT_COM_ADMIN_URL, CHATGPT_COM_URL, DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL, HELP_OPENAI_COM_EN_ARTICLES_7905690_HOW_TO_CANCEL_YOUR_APPLE_SUBSCRIPTION_FOR_CHATGPT_IN_THE_CHATGPT_IOS_APP_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { ensureHostRpcClientsInit } from "../../hooks/host-rpc-client";
import { useEffectEventWhenReady } from "../../hooks/use-effect-event-when-ready";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconOi } from "../../icons/app-icon-oi";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { AnimatedPercentFillBar } from "../../ui/animated-percent-fill-bar";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredZft as DeferredZft } from "../../ui/deferred-zft";
import { ElectronOnly } from "../../ui/electron-only";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { formatCurrency, initFormatCurrency } from "../../utils/format-currency";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { formatPlanPrice, initPlanPricing } from "../../utils/plan-pricing";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { quickChatSizeAtom, quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import { mapQuickChatSurfaceMode, setQuickChatDockPosition, setQuickChatSize } from "../../windows/quick-chat-surface-helpers";
import { tryActivateConversationFromPendingWorktree } from "../../worktree/try-activate-conversation-from-pending-worktree";
import { ensureCloudApiClientInit } from "../cloud-api-client";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow, SettingsLoadingRow } from "../settings-loading-row";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Cross-part stubs.
const AppInitialAx: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialHv: any = undefined;
const AppInitialIx: any = undefined;
const AppInitialOy: any = undefined;
const AppInitialQb: any = undefined;
const AppInitialQv: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVv: any = undefined;
const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const UsageSettingsHelper54: any = undefined;
const UsageSettingsHelper55: any = undefined;
const _r: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiEnt: any = undefined;
const echo: any = undefined;
const honey: any = undefined;
const indigo: any = undefined;
const jewel: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const usageSettings: any = undefined;

function UsageSettingsHelper21(deltaPrime) {
  let {
    saveIntent,
    amount,
    creditCount
  } = deltaPrime;
  return <ResolveBrowserTabPanelSide {...{
    type: "normal",
    layout: "vertical",
    content: saveIntent === "enable" ? <MemoizedFormattedMessage {...{
      id: "settings.usage.autoTopUp.immediateTopUpNotice.enable",
      defaultMessage: "Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.",
      description: "Informational banner shown before enabling auto top up when a one-time immediate top up will occur",
      values: {
        amount,
        creditCount,
        strong: slate
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.autoTopUp.immediateTopUpNotice.update",
      defaultMessage: "Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.",
      description: "Informational banner shown before updating auto top up when a one-time immediate top up will occur",
      values: {
        amount,
        creditCount,
        strong: river
      }
    }} />
  }} />;
}
function river(echoPrime) {
  return <span className="font-medium text-token-text-primary">
      {echoPrime}
    </span>;
}
function slate(falconPrime) {
  return <span className="font-medium text-token-text-primary">
      {falconPrime}
    </span>;
}
function UsageSettingsHelper24(gammaPrime) {
  let {
    amount,
    isManagePaymentPending,
    onManagePaymentClick,
    onPurchaseCreditClick
  } = gammaPrime;
  return <ResolveBrowserTabPanelSide {...{
    type: "error",
    layout: "vertical",
    content: amount == null ? <MemoizedFormattedMessage {...{
      id: "settings.usage.autoTopUp.immediateTopUpFailure.generic",
      defaultMessage: "The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
      description: "Inline error shown in the auto top up settings dialog when the initial top up attempt fails without a price estimate",
      values: {
        actionLine: umbra,
        managePayment: harborPrime => <a href="#" className={IntlProvider("cursor-interaction font-medium underline underline-offset-2", isManagePaymentPending && "pointer-events-none opacity-60")} aria-disabled={isManagePaymentPending} onClick={event => {
          event.preventDefault();
          onManagePaymentClick();
        }}>
                      {harborPrime}
                    </a>,
        purchaseCredit: indigoPrime => <a href={quill} target="_blank" rel="noopener noreferrer" className="cursor-interaction font-medium underline underline-offset-2" onClick={jadePrime => {
          onPurchaseCreditClick(jadePrime);
        }}>
                      {indigoPrime}
                    </a>
      }
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.autoTopUp.immediateTopUpFailure.amount",
      defaultMessage: "The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
      description: "Inline error shown in the auto top up settings dialog when the initial top up attempt fails and a price estimate is available",
      values: {
        amount,
        actionLine: timber,
        managePayment: kitePrime => <a href="#" className={IntlProvider("cursor-interaction font-medium underline underline-offset-2", isManagePaymentPending && "pointer-events-none opacity-60")} aria-disabled={isManagePaymentPending} onClick={event => {
          event.preventDefault();
          onManagePaymentClick();
        }}>
                      {kitePrime}
                    </a>,
        purchaseCredit: lemonPrime => <a href={quill} target="_blank" rel="noopener noreferrer" className="cursor-interaction font-medium underline underline-offset-2" onClick={marblePrime => {
          onPurchaseCreditClick(marblePrime);
        }}>
                      {lemonPrime}
                    </a>
      }
    }} />
  }} />;
}
function timber(nickelPrime) {
  return <div className="mt-1">{nickelPrime}</div>;
}
function umbra(onyxPrime) {
  return <div className="mt-1">{onyxPrime}</div>;
}
function UsageSettingsHelper27(pearlPrime) {
  let {
      id,
      label,
      value,
      placeholder,
      disabled,
      hasError,
      helperText,
      footerContent,
      footerTone = "secondary",
      ariaLabel,
      onChange,
      onBlur
    } = pearlPrime,
    quartzPrime = <label htmlFor={id} className="text-lg text-token-text-secondary">
        {label}
      </label>;
  let riverPrime = helperText ? <div className="text-sm leading-4 text-token-text-secondary">
      {helperText}
    </div> : null;
  let slatePrime = <UsageSettingsHelper29 {...{
    id,
    value,
    placeholder,
    disabled,
    hasError,
    ariaLabel,
    onBlur,
    onChange
  }} />;
  let timberPrime = footerContent == null ? null : <div className={IntlProvider("text-sm", footerTone === "error" ? "text-token-error-foreground" : "text-token-text-secondary")}>
        {footerContent}
      </div>;
  return <div className="flex flex-col gap-2">
      {quartzPrime}
      {riverPrime}
      {slatePrime}
      {timberPrime}
    </div>;
}
function UsageSettingsHelper28(umbraPrime) {
  let {
      intl
    } = umbraPrime,
    violetPrime = intl.formatMessage({
      id: "settings.usage.autoTopUp.target.equivalent.loading",
      defaultMessage: "Loading price",
      description: "Accessible label announced while the auto top up price estimate is loading"
    });
  let willowPrime = <VSCODE_EDITOR_ID {...{
    className: "icon-xxs text-token-description-foreground"
  }} />;
  return <span role="status" aria-label={violetPrime} className="inline-flex items-center">
      {willowPrime}
    </span>;
}
function UsageSettingsHelper29(xenonPrime) {
  let {
      id,
      value,
      placeholder,
      disabled,
      hasError,
      ariaLabel,
      onChange,
      onBlur
    } = xenonPrime,
    yellowPrime = IntlProvider("bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-10 w-full rounded-lg border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus", "aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20");
  let zincPrime = event => {
    onChange(event.currentTarget.value);
  };
  return <input id={id} value={value} placeholder={placeholder} disabled={disabled} inputMode="numeric" pattern="[0-9]*" aria-label={ariaLabel} aria-invalid={hasError} className={yellowPrime} onChange={zincPrime} onBlur={onBlur} />;
}
function violet({
  intl,
  creditDetails,
  pricingInfo
}) {
  let amberPrime = intl.formatMessage({
    id: "settings.usage.credit.remaining.unavailable",
    defaultMessage: "Credit remaining unavailable",
    description: "Fallback title shown when the remaining credit is unavailable"
  });
  return creditDetails == null ? amberPrime : creditDetails.unlimited ? intl.formatMessage({
    id: "settings.usage.credit.remaining.unlimited",
    defaultMessage: "Unlimited credit",
    description: "Title shown when the account has unlimited credit"
  }) : creditDetails.balance == null || pricingInfo == null ? amberPrime : formatCreditReloadCurrency({
    intl,
    creditQuantity: willow(creditDetails.balance),
    pricingInfo
  }) ?? amberPrime;
}
function willow(basaltPrime) {
  return Math.floor(Number(basaltPrime ?? 0));
}
function xenon({
  intl,
  rechargeThreshold,
  rechargeTarget,
  pricingInfo
}) {
  if (pricingInfo == null) return null;
  let cedarPrime = echo({
    rechargeThreshold,
    rechargeTarget
  });
  return cedarPrime == null ? null : {
    creditCount: cedarPrime,
    amount: formatCurrency({
      intl,
      amount: cedarPrime * pricingInfo.amountPerCredit,
      currencyCode: pricingInfo.currencyCode,
      currencyFractionDigits: pricingInfo.minorUnitExponent
    })
  };
}
function yellow({
  intl,
  creditBalance,
  rechargeThreshold,
  rechargeTarget,
  pricingInfo
}) {
  if (pricingInfo == null) return null;
  let daisyPrime = willow(creditBalance),
    emberPrime = Number(alpha(rechargeThreshold)),
    flintPrime = Number(alpha(rechargeTarget));
  if (daisyPrime >= emberPrime) return null;
  let garnetPrime = Math.ceil(flintPrime - daisyPrime);
  return garnetPrime <= 0 ? null : {
    amount: formatCurrency({
      intl,
      amount: garnetPrime * pricingInfo.amountPerCredit,
      currencyCode: pricingInfo.currencyCode,
      currencyFractionDigits: pricingInfo.minorUnitExponent
    }),
    creditCount: garnetPrime
  };
}
function zinc({
  rechargeThreshold,
  rechargeTarget
}) {
  let hazelPrime = bravo({
    rechargeThreshold,
    rechargeTarget
  });
  if (!(hazelPrime.rechargeThresholdError == null && hazelPrime.rechargeTargetError == null)) return {
    fields: {
      rechargeThreshold: hazelPrime.rechargeThresholdError ?? undefined,
      rechargeTarget: hazelPrime.rechargeTargetError ?? undefined
    }
  };
}
function amber(ivoryPrime) {
  if (ivoryPrime == null) return null;
  for (let jasperPrime of ivoryPrime) if (cedar(jasperPrime)) return jasperPrime;
  return null;
}
function basalt(kelpPrime) {
  if (kelpPrime == null) return null;
  for (let lotusPrime of kelpPrime) if (daisy(lotusPrime)) return lotusPrime;
  return null;
}
function cedar(mintPrime) {
  return mintPrime === "missing" || mintPrime === "not-whole-number" || mintPrime === "below-threshold-minimum";
}
function daisy(novaPrime) {
  return novaPrime === "missing" || novaPrime === "not-whole-number" || novaPrime === "target-difference-too-small";
}
function ember(olivePrime) {
  if (olivePrime.fieldError == null) return null;
  switch (olivePrime.fieldName) {
    case "threshold":
      return flint(olivePrime.fieldError, olivePrime.intl);
    case "target":
      return garnet(olivePrime.fieldError, olivePrime.intl);
  }
}
function flint(prismPrime, quillPrime) {
  switch (prismPrime) {
    case "missing":
      return quillPrime.formatMessage({
        id: "settings.usage.autoTopUp.threshold.error.missing",
        defaultMessage: "Enter a minimum balance (at least 125 credits).",
        description: "Validation message when the auto top up threshold is empty"
      });
    case "not-whole-number":
      return quillPrime.formatMessage({
        id: "settings.usage.autoTopUp.threshold.error.wholeNumber",
        defaultMessage: "Minimum balance must be a whole number.",
        description: "Validation message when the auto top up threshold is not a whole number"
      });
    case "below-threshold-minimum":
      return quillPrime.formatMessage({
        id: "settings.usage.autoTopUp.threshold.error.minimum",
        defaultMessage: "Set the minimum balance to at least 125 credits.",
        description: "Validation message when the auto top up threshold is below the minimum allowed value"
      });
  }
}
function garnet(reefPrime, sagePrime) {
  switch (reefPrime) {
    case "missing":
      return sagePrime.formatMessage({
        id: "settings.usage.autoTopUp.target.error.missing",
        defaultMessage: "Enter a target balance.",
        description: "Validation message when the auto top up target balance is empty"
      });
    case "not-whole-number":
      return sagePrime.formatMessage({
        id: "settings.usage.autoTopUp.target.error.wholeNumber",
        defaultMessage: "Target balance must be a whole number.",
        description: "Validation message when the auto top up target balance is not a whole number"
      });
    case "target-difference-too-small":
      return sagePrime.formatMessage({
        id: "settings.usage.autoTopUp.target.error.minimumDifference",
        defaultMessage: "Set the target balance to at least 125 credits above the minimum balance.",
        description: "Validation message when the auto top up target balance is too close to the minimum balance"
      });
  }
}
function hazel(topazPrime, ultraPrime) {
  switch (topazPrime) {
    case "enable":
      return ultraPrime.formatMessage({
        id: "settings.usage.autoTopUp.enable.error",
        defaultMessage: "Failed to enable auto reload",
        description: "Toast shown when enabling auto top up fails"
      });
    case "update":
      return ultraPrime.formatMessage({
        id: "settings.usage.autoTopUp.update.error",
        defaultMessage: "Failed to update auto reload",
        description: "Toast shown when updating auto top up fails"
      });
    case "disable":
      return ultraPrime.formatMessage({
        id: "settings.usage.autoTopUp.disable.error",
        defaultMessage: "Failed to disable auto reload",
        description: "Toast shown when disabling auto top up fails"
      });
    case "none":
      return ultraPrime.formatMessage({
        id: "settings.usage.autoTopUp.save.error",
        defaultMessage: "Failed to save auto reload settings",
        description: "Fallback toast shown when saving auto top up settings fails"
      });
  }
}
function ivory(vaporPrime, wheatPrime) {
  switch (vaporPrime) {
    case "enable":
      return wheatPrime.formatMessage({
        id: "settings.usage.autoTopUp.enable.success",
        defaultMessage: "Enabled auto reload",
        description: "Toast shown when enabling auto top up succeeds"
      });
    case "update":
      return wheatPrime.formatMessage({
        id: "settings.usage.autoTopUp.update.success",
        defaultMessage: "Updated auto reload settings",
        description: "Toast shown when updating auto top up succeeds"
      });
    case "disable":
      return wheatPrime.formatMessage({
        id: "settings.usage.autoTopUp.disable.success",
        defaultMessage: "Disabled auto reload",
        description: "Toast shown when disabling auto top up succeeds"
      });
  }
}
function jasper(yarnPrime) {
  return {
    recharge_threshold: alpha(yarnPrime.rechargeThreshold),
    recharge_target: alpha(yarnPrime.rechargeTarget)
  };
}
var kelp,
  lotus,
  mint,
  nova,
  olive,
  prism,
  quill,
  reef,
  sage,
  topaz = esmInit(() => {
    kelp = reactCompilerRuntime();
    ensureTanstackReactFormApiInit();
    serializeCharacterReferenceNode();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    lotus = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureBadgeInit();
    ensureAppShellAtomsInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    initCreditReloadDialogFormatting();
    AppInitialOy();
    CHATGPT_CODEX_CLOUD_URL();
    setQuickChatSize();
    usageSettings();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialFC();
    ensureSkillsPageHelpersInit();
    initFormatCurrency();
    ensureCloudApiClientInit();
    indigo();
    nova = {
      duration: 3
    };
    olive = "125";
    prism = "250";
    quill = `${lazyWithSuspense}/settings/usage?credit_modal=true`;
    reef = "https://help.openai.com/en/articles/20001106-codex-rate-card";
    sage = "min-w-[88px] justify-center";
  });
function $n(zephyrPrime) {
  let {
      plan
    } = zephyrPrime,
    acornPrime = CodexPluginActionType(appScopeAtom),
    bloomPrime = useIntl(),
    coralPrime = {
      logExposure: true
    };
  let driftPrime = useUpgradePlanCopyVariant(coralPrime),
    eaglePrime = AppInitialHv(),
    frostPrime = parseFormattedCreditsQuantityString(plan),
    glidePrime = frostPrime != null,
    honeyPrime = {
      enabled: glidePrime
    };
  let {
      data
    } = AppInitialQb(honeyPrime),
    irisPrime = frostPrime != null,
    jewelPrime = {
      billingCurrency: data,
      enabled: irisPrime
    };
  let {
    data: _data
  } = AppInitialIx(jewelPrime);
  if (frostPrime == null) return null;
  let knollPrime = _data == null ? null : formatPlanPrice({
      intl: bloomPrime,
      amount: _data.monthlyAmounts[frostPrime.pricePlan],
      currencyCode: _data.currencyCode,
      minorUnitExponent: _data.minorUnitExponent
    }),
    lunarPrime = UseChromeAndCodeThemeSync,
    mossPrime = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.usage.plan.title",
        defaultMessage: "Your plan",
        description: "Title for the current plan section in usage settings"
      }} />
    }} />;
  let NorthPrime = UseChromeAndCodeThemeSync,
    orbitPrime = ParseUrlOrFallback,
    pinePrime = EnsurePersonalizationCInit,
    questPrime = ultra(frostPrime.displayPlan),
    ridgePrime = knollPrime == null ? null : <MemoizedFormattedMessage {...{
      id: "settings.usage.plan.monthlyPrice",
      defaultMessage: "{price}/mo",
      description: "Localized monthly price below the current plan name",
      values: {
        price: knollPrime
      }
    }} />;
  let stormPrime = frostPrime.cta === "upgrade" ? "primary" : "outline",
    tidePrime = cliffPrime => {
      eaglePrime({
        scope: acornPrime,
        currentPlan: frostPrime.pricePlan,
        event: cliffPrime,
        getPricingUrl: driftPrime,
        source: "usage_settings_plan_row"
      });
    };
  let unityPrime = frostPrime.cta === "upgrade" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.plan.upgrade",
    defaultMessage: "Upgrade plan",
    description: "CTA to open the upgrade plan dialog"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.plan.view",
    defaultMessage: "View plans",
    description: "CTA to open the plan selection dialog"
  }} />;
  let valePrime = <ReadLoginRouteQuerySnapshot {...{
    color: stormPrime,
    size: "toolbar",
    onClick: tidePrime,
    children: unityPrime
  }} />;
  let wavePrime = <EnsurePersonalizationCInit {...{
    className: "gap-6",
    label: questPrime,
    description: ridgePrime,
    control: valePrime
  }} />;
  let apexPrime = <ParseUrlOrFallback {...{
    children: wavePrime
  }} />;
  let brookPrime = <NorthPrime.Content {...{
    children: apexPrime
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [mossPrime, brookPrime]
  }} />;
}
function UsageSettingsHelper45(duskPrime) {
  let {
      plan
    } = duskPrime,
    elmPrime = DeferredAccountRy(plan);
  let fernPrime = {
    enabled: elmPrime
  };
  let {
    data
  } = AppInitialAx(fernPrime);
  if (!DeferredAccountRy(plan)) return null;
  let grovePrime = <UseChromeAndCodeThemeSync.Header {...{
    title: <MemoizedFormattedMessage {...{
      id: "settings.usage.cancelPlan.title",
      defaultMessage: "Cancel plan",
      description: "Title for the cancel plan section in usage settings"
    }} />
  }} />;
  let hillPrime = AppInitialQv(data);
  return <UseChromeAndCodeThemeSync {...{
    children: [grovePrime, <UseChromeAndCodeThemeSync.Content {...{
      className: "text-sm text-token-text-secondary",
      children: <p>
                  {<UsageSettingsHelper46 {...{
          platform: hillPrime
        }} />}
                </p>
    }} />]
  }} />;
}
function UsageSettingsHelper46(islePrime) {
  let {
      platform
    } = islePrime,
    juniperPrime = platform === "ios" ? HELP_OPENAI_COM_EN_ARTICLES_7905690_HOW_TO_CANCEL_YOUR_APPLE_SUBSCRIPTION_FOR_CHATGPT_IN_THE_CHATGPT_IOS_APP_URL : platform === "android" ? mobileClientIdToStorePlatform : CHATGPT_COM_URL,
    lagoonPrime = nestPrime => <a className="cursor-interaction text-token-text-link-foreground" href={juniperPrime} target="_blank" rel="noreferrer" onClick={oakPrime => vapor(oakPrime, juniperPrime)}>
        {nestPrime}
      </a>;
  let meadowPrime = lagoonPrime;
  switch (platform) {
    case null:
      {
        let petalPrime;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.cancelPlan.webDescription",
          defaultMessage: "Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan",
          description: "Description shown when a ChatGPT-managed subscription can be canceled through web billing settings",
          values: {
            cancel: meadowPrime
          }
        }} />;
      }
    case "ios":
      {
        let quietPrime;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.cancelPlan.appleDescription",
          defaultMessage: "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
          description: "Description shown when an Apple-managed subscription must be canceled through iOS",
          values: {
            cancel: meadowPrime
          }
        }} />;
      }
    case "android":
      {
        let rainPrime;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.cancelPlan.googlePlayDescription",
          defaultMessage: "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
          description: "Description shown when a Google Play-managed subscription must be canceled through Android",
          values: {
            cancel: meadowPrime
          }
        }} />;
      }
  }
}
function ultra(seedPrime) {
  switch (seedPrime) {
    case "free":
      return <MemoizedFormattedMessage {...{
        id: "settings.usage.plan.free",
        defaultMessage: "Free plan",
        description: "Name of the Free plan in usage settings"
      }} />;
    case "go":
      return <MemoizedFormattedMessage {...{
        id: "settings.usage.plan.go",
        defaultMessage: "Go plan",
        description: "Name of the Go plan in usage settings"
      }} />;
    case "plus":
      return <MemoizedFormattedMessage {...{
        id: "settings.usage.plan.plus",
        defaultMessage: "Plus plan",
        description: "Name of the Plus plan in usage settings"
      }} />;
    case "pro":
      return <MemoizedFormattedMessage {...{
        id: "settings.usage.plan.pro",
        defaultMessage: "Pro plan",
        description: "Name of the Pro plan in usage settings"
      }} />;
  }
}
function vapor(trailPrime, urnPrime) {
  deferredUiEnt({
    event: trailPrime,
    href: urnPrime,
    initiator: "open_in_browser_bridge"
  });
}
var wheat,
  yarn,
  zephyr = esmInit(() => {
    wheat = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    deferredAccountUv();
    usageSettings();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    getCreditsPurchaseMinimumQuantity();
    initPlanPricing();
    AppInitialVv();
  });
function or() {
  let vinePrime;
  return vinePrime = {
    queryKey: eagle,
    queryFn: acorn,
    staleTime: readScrollTop.ONE_MINUTE,
    refetchOnWindowFocus: false,
    retry: false
  }, useQuery(vinePrime);
}
function acorn() {
  return decodeBase64ToBytes.safeGet("/wham/usage/daily-token-usage-breakdown");
}
function bloom(windPrime) {
  let {
      enabled
    } = windPrime,
    yarrowPrime;
  return yarrowPrime = {
    queryKey: frost,
    queryFn: coral,
    enabled,
    staleTime: readScrollTop.ONE_MINUTE,
    refetchOnWindowFocus: false,
    retry: false
  }, useQuery(yarrowPrime);
}
function coral() {
  return decodeBase64ToBytes.safeGet("/wham/usage/credit-usage-events");
}
var drift,
  eagle,
  frost,
  glide = esmInit(() => {
    drift = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    dataAppActionReviewFileExpanded();
    ensureCloudApiClientInit();
    eagle = ["usage-settings", "daily-usage-breakdown"];
    frost = ["usage-settings", "credit-usage-events"];
  });
function UsageSettingsHelper52(azurePrime) {
  let {
      showCreditHistory
    } = azurePrime,
    birchPrime = or(),
    canyonPrime = {
      enabled: showCreditHistory
    };
  let dewPrime = bloom(canyonPrime),
    [everPrime, fieldPrime] = jewel.useState(0),
    grainPrime = dewPrime.data?.data ?? [];
  let havenPrime = grainPrime,
    inkPrime = Math.max(1, Math.ceil(havenPrime.length / lunar)),
    jadeitePrime = Math.min(everPrime, inkPrime - 1),
    kernelPrime = dewPrime.data?.data.slice(jadeitePrime * lunar, (jadeitePrime + 1) * lunar);
  let leafPrime = kernelPrime,
    maplePrime = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.usage.daily.title",
        defaultMessage: "Daily usage",
        description: "Title for daily usage in usage settings"
      }} />,
      subtitle: <MemoizedFormattedMessage {...{
        id: "settings.usage.daily.subtitle",
        defaultMessage: "Usage data is approximate and may be delayed by up to 6 hours",
        description: "Description for daily usage in usage settings"
      }} />
    }} />;
  let nimbusPrime = birchPrime.data?.data,
    opalPrime,
    plumePrime;
  opalPrime = <MemoizedFormattedMessage {...{
    id: "settings.usage.daily.empty",
    defaultMessage: "No daily usage recorded yet",
    description: "Empty state for daily usage"
  }} />;
  plumePrime = <MemoizedFormattedMessage {...{
    id: "settings.usage.daily.error",
    defaultMessage: "Could not load daily usage",
    description: "Error state for daily usage"
  }} />;
  let quillowPrime = () => {
    birchPrime.refetch();
  };
  let rootPrime = uplandPrime => moss.flatMap(item => {
    let vistaPrime = uplandPrime.product_surface_usage_values[item];
    return vistaPrime == null ? [] : [<EnsurePersonalizationCInit key={`${uplandPrime.date}-${item}`} {...{
      label: <_r {...{
        date: uplandPrime.date
      }} />,
      description: <MemoizedFormattedMessage {...{
        ...north[item]
      }} />,
      control: <UsageSettingsHelper55 {...{
        units: birchPrime.data?.units,
        value: vistaPrime
      }} />
    }} />];
  });
  let silkPrime = <UseChromeAndCodeThemeSync {...{
    children: [maplePrime, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: <UsageSettingsHelper54 {...{
          data: nimbusPrime,
          emptyMessage: opalPrime,
          errorMessage: plumePrime,
          isError: birchPrime.isError,
          isLoading: birchPrime.isLoading,
          onRetry: quillowPrime,
          renderRow: rootPrime
        }} />
      }} />
    }} />]
  }} />;
  let thornPrime = showCreditHistory ? <UseChromeAndCodeThemeSync {...{
    children: [<UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.usage.creditHistory.title",
        defaultMessage: "Credit usage history",
        description: "Title for credit usage history"
      }} />
    }} />, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [<UsageSettingsHelper54 {...{
          data: leafPrime,
          emptyMessage: <MemoizedFormattedMessage {...{
            id: "settings.usage.creditHistory.empty",
            defaultMessage: "No credit usage recorded yet",
            description: "Empty state for credit usage history"
          }} />,
          errorMessage: <MemoizedFormattedMessage {...{
            id: "settings.usage.creditHistory.error",
            defaultMessage: "Could not load credit usage history",
            description: "Error state for credit usage history"
          }} />,
          isError: dewPrime.isError,
          isLoading: dewPrime.isLoading,
          onRetry: () => {
            dewPrime.refetch();
          },
          renderRow: honey
        }} />, havenPrime.length > lunar ? <EnsurePersonalizationCInit {...{
          label: <MemoizedFormattedMessage {...{
            id: "settings.usage.creditHistory.range",
            defaultMessage: "{from}-{to} of {total} usage events",
            description: "Pagination summary for credit usage history",
            values: {
              from: jadeitePrime * lunar + 1,
              to: Math.min((jadeitePrime + 1) * lunar, havenPrime.length),
              total: havenPrime.length
            }
          }} />,
          control: <div className="flex gap-2">
                                {<ReadLoginRouteQuerySnapshot {...{
              color: "secondary",
              disabled: jadeitePrime === 0,
              size: "toolbar",
              onClick: () => {
                fieldPrime(jadeitePrime - 1);
              },
              children: <MemoizedFormattedMessage {...{
                id: "settings.usage.creditHistory.previous",
                defaultMessage: "Previous",
                description: "Previous credit usage history page button"
              }} />
            }} />}
                                {<ReadLoginRouteQuerySnapshot {...{
              color: "secondary",
              disabled: jadeitePrime === inkPrime - 1,
              size: "toolbar",
              onClick: () => {
                fieldPrime(jadeitePrime + 1);
              },
              children: <MemoizedFormattedMessage {...{
                id: "settings.usage.creditHistory.next",
                defaultMessage: "Next",
                description: "Next credit usage history page button"
              }} />
            }} />}
                              </div>
        }} /> : null]
      }} />
    }} />]
  }} /> : null;
  return <>
      {silkPrime}
      {thornPrime}
    </>;
}
