// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 3/4
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
const $r: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialHb: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialTY: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVC: any = undefined;
const NativeContextMenuSurface: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const UsageSettingsHelper67: any = undefined;
const _i: any = undefined;
const deferredUiEnt: any = undefined;
const dew: any = undefined;
const glide: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const wind: any = undefined;

function honey(wispPrime, yonderPrime) {
  return <EnsurePersonalizationCInit key={`${wispPrime.usage_id ?? "usage"}-${wispPrime.date}-${yonderPrime}`} {...{
    label: <_r {...{
      date: wispPrime.date
    }} />,
    description: <MemoizedFormattedMessage {...{
      ...north[wispPrime.product_surface]
    }} />,
    control: <UsageSettingsHelper55 {...{
      units: "credits",
      value: wispPrime.credit_amount
    }} />
  }} />;
}
function UsageSettingsHelper54(zenithPrime) {
  let {
    data,
    emptyMessage,
    errorMessage,
    isError,
    isLoading,
    onRetry,
    renderRow
  } = zenithPrime;
  if (isLoading && data == null) {
    let beaconPrime;
    return <SettingsLoadingRow {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.usage.history.loading",
        defaultMessage: "Loading usage history…",
        description: "Loading state for usage history"
      }} />
    }} />;
  }
  if (isError && data == null) {
    let cragPrime = <MemoizedFormattedMessage {...{
      id: "settings.usage.history.retry",
      defaultMessage: "Retry",
      description: "Retry usage history button"
    }} />;
    let domePrime = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      onClick: onRetry,
      children: cragPrime
    }} />;
    let eddyPrime;
    return <EnsurePersonalizationCInit {...{
      label: errorMessage,
      control: domePrime
    }} />;
  }
  if (data == null || data.length === 0) {
    let fjordPrime;
    return <EnsurePersonalizationCInit {...{
      label: emptyMessage,
      control: null
    }} />;
  }
  let anvilPrime = data.map(renderRow);
  return <>{anvilPrime}</>;
}
function _r(glenPrime) {
  let {
      date
    } = glenPrime,
    hearthPrime = `${date}T00:00:00`,
    inletPrime = new Date(hearthPrime);
  return <FormattedDate {...{
    value: inletPrime,
    month: "short",
    day: "numeric",
    year: "numeric"
  }} />;
}
function UsageSettingsHelper55(jettyPrime) {
  let {
    units,
    value
  } = jettyPrime;
  return units === "credits" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.credits.value",
    defaultMessage: "{value, number} {value, plural, one {credit} other {credits}}",
    description: "Credit value in usage settings",
    values: {
      value
    }
  }} /> : <DeferredZft {...{
    value: value / 100,
    style: "percent",
    maximumFractionDigits: 0
  }} />;
}
var iris,
  jewel,
  knoll,
  lunar,
  moss,
  north,
  orbit = esmInit(() => {
    iris = reactCompilerRuntime();
    jewel = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    glide();
    codexCommandTheme();
    initSettingsLoadingRow();
    AppInitialVC();
    AppInitialFC();
    lunar = 10;
    moss = ["web", "work_web", "mobile", "work_mobile", "cli", "vscode", "jetbrains", "github", "github_code_review", "slack", "linear", "sdk", "exec", "desktop_app", "work_desktop", "agent_identity", "unknown", "other"];
    north = identity({
      web: {
        id: "settings.usage.surface.web",
        defaultMessage: "Cloud",
        description: "Cloud usage surface"
      },
      work_web: {
        id: "settings.usage.surface.workWeb",
        defaultMessage: "Web",
        description: "Short product surface label in Codex usage settings. Identifies Codex usage from ChatGPT Work on the web, distinct from Codex Cloud usage."
      },
      mobile: {
        id: "settings.usage.surface.mobile",
        defaultMessage: "Mobile",
        description: "Mobile usage surface"
      },
      work_mobile: {
        id: "settings.usage.surface.workMobile",
        defaultMessage: "Mobile",
        description: "Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work mobile client."
      },
      cli: {
        id: "settings.usage.surface.cli",
        defaultMessage: "CLI",
        description: "CLI usage surface"
      },
      vscode: {
        id: "settings.usage.surface.vscode",
        defaultMessage: "Extension",
        description: "VS Code extension usage surface"
      },
      jetbrains: {
        id: "settings.usage.surface.jetbrains",
        defaultMessage: "JetBrains",
        description: "JetBrains usage surface"
      },
      github: {
        id: "settings.usage.surface.github",
        defaultMessage: "GitHub",
        description: "GitHub usage surface"
      },
      github_code_review: {
        id: "settings.usage.surface.githubCodeReview",
        defaultMessage: "GitHub code review",
        description: "GitHub code review usage surface"
      },
      slack: {
        id: "settings.usage.surface.slack",
        defaultMessage: "Slack",
        description: "Slack usage surface"
      },
      linear: {
        id: "settings.usage.surface.linear",
        defaultMessage: "Linear",
        description: "Linear usage surface"
      },
      sdk: {
        id: "settings.usage.surface.sdk",
        defaultMessage: "SDK",
        description: "SDK usage surface"
      },
      exec: {
        id: "settings.usage.surface.exec",
        defaultMessage: "Exec",
        description: "Exec usage surface"
      },
      desktop_app: {
        id: "settings.usage.surface.desktopApp",
        defaultMessage: "Desktop app",
        description: "Desktop app usage surface"
      },
      work_desktop: {
        id: "settings.usage.surface.workDesktop",
        defaultMessage: "Desktop (Work)",
        description: "Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work desktop client, distinct from the Codex desktop app."
      },
      agent_identity: {
        id: "settings.usage.surface.agentIdentity",
        defaultMessage: "Access tokens",
        description: "Access token usage surface"
      },
      unknown: {
        id: "settings.usage.surface.unknown",
        defaultMessage: "Uncategorized",
        description: "Unknown usage surface"
      },
      other: {
        id: "settings.usage.surface.other",
        defaultMessage: "Other",
        description: "Other usage surface"
      }
    });
  });
function UsageSettingsHelper56(knobPrime) {
  let {
      headingRef
    } = knobPrime,
    ledgePrime = <MemoizedFormattedMessage {...{
      id: "settings.usage.resets.title",
      defaultMessage: "Usage limit resets",
      description: "Title for the Codex usage limit resets section in settings"
    }} />;
  return <span ref={headingRef} tabIndex={-1}>
      {ledgePrime}
    </span>;
}
var pine,
  quest,
  ridge = esmInit(() => {
    pine = reactCompilerRuntime();
    ensureIntlFormattersInit();
  });
function UsageSettingsHelper57(mirePrime) {
  let {
      activeCreditId,
      credit,
      isConfirming,
      isResetting,
      onUseReset
    } = mirePrime,
    nookPrime = useIntl(),
    oxbowPrime = tide.useId(),
    pondPrime = tide.useId(),
    quarryPrime = tide.useId(),
    rapidsPrime = credit?.id,
    spurPrime = credit?.expires_at == null ? null : nookPrime.formatDate(credit.expires_at, {
      day: "numeric",
      month: "numeric"
    });
  let torPrime = spurPrime,
    updraftPrime = credit?.title?.trim() || <MemoizedFormattedMessage {...{
      id: "settings.usage.resets.fallbackTitle",
      defaultMessage: "Usage reset",
      description: "Fallback title for a Codex usage limit reset in settings"
    }} />;
  let vergePrime = <span id={pondPrime}>{updraftPrime}</span>;
  let weirPrime = torPrime == null ? null : <span id={quarryPrime}>
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.resets.expires",
      defaultMessage: "Expires {date}",
      description: "Expiration date for a Codex usage limit reset in settings",
      values: {
        date: torPrime
      }
    }} />}
      </span>;
  let yardPrime = torPrime == null ? undefined : quarryPrime,
    anchorPrime = `${oxbowPrime} ${pondPrime}`,
    boltPrime = activeCreditId === (rapidsPrime ?? "automatic"),
    cogPrime = () => {
      onUseReset(rapidsPrime);
    };
  let discPrime = isConfirming ? <MemoizedFormattedMessage {...{
    id: "settings.usage.resets.confirmReset",
    defaultMessage: "Confirm",
    description: "Button label confirming the redemption of a Codex usage limit reset from settings"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.resets.useReset",
    defaultMessage: "Use reset",
    description: "Button label for redeeming a Codex usage limit reset from settings"
  }} />;
  let edgePrime = <span id={oxbowPrime}>{discPrime}</span>;
  let forgePrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-describedby": yardPrime,
    "aria-labelledby": anchorPrime,
    className: "rounded-full",
    color: "primary",
    disabled: isResetting,
    loading: boltPrime,
    onClick: cogPrime,
    size: "toolbar",
    children: edgePrime
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: vergePrime,
    description: weirPrime,
    control: forgePrime
  }} />;
}
var storm,
  tide,
  unity,
  vale = esmInit(() => {
    storm = reactCompilerRuntime();
    tide = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialVC();
  });
function UsageSettingsHelper58(gearPrime) {
  let {
      activeCreditId,
      credits,
      isResetFillActive,
      isResetting,
      onUseReset,
      retryCreditId
    } = gearPrime,
    [hingePrime, ironPrime] = apex.useState(null),
    jointPrime = async nutPrime => {
      let pistonPrime = nutPrime ?? "automatic";
      if (hingePrime !== pistonPrime) {
        ironPrime(pistonPrime);
        return;
      }
      ironPrime(null);
      await onUseReset(nutPrime);
    };
  let keystonePrime = jointPrime,
    latchPrime = credits.length === 0 ? [null] : credits;
  let motorPrime;
  {
    let rivetPrime;
    rivetPrime = screwPrime => {
      let torquePrime = screwPrime?.id ?? "automatic";
      return <UsageSettingsHelper57 key={torquePrime} {...{
        activeCreditId,
        credit: screwPrime,
        isConfirming: hingePrime === torquePrime,
        isResetting: isResetFillActive || isResetting || retryCreditId != null && retryCreditId !== torquePrime,
        onUseReset: keystonePrime
      }} />;
    };
    motorPrime = latchPrime.map(rivetPrime);
  }
  return <>{motorPrime}</>;
}
var wave,
  apex,
  brook,
  cliff = esmInit(() => {
    wave = reactCompilerRuntime();
    apex = commonJsInit(react(), 1);
    vale();
  });
function UsageSettingsHelper59(valvePrime) {
  let {
      isResetFillActive,
      onResetAttemptCancel,
      onResetAttemptStart,
      onResetComplete
    } = valvePrime,
    axlePrime = CodexPluginActionType(appScopeAtom),
    bracketPrime = useIntl(),
    clampPrime = fern.useRef(null),
    [drillPrime] = fern.useState(createRateLimitCreditRedeemer),
    [enginePrime, framePrime] = fern.useState(null),
    {
      data,
      error,
      isPending: gasketPrime,
      refetch
    } = firstRepoFromRepos(),
    handlePrime = AppInitialTY(),
    insertPrime = data?.credits.filter(dusk);
  let jacketPrime = insertPrime,
    knurlPrime = data?.available_count ?? 0,
    leverPrime = enginePrime?.credits ?? jacketPrime,
    mountPrime = enginePrime?.availableCount ?? knurlPrime,
    nozzlePrime = handlePrime.isPending ? handlePrime.variables?.creditId ?? "automatic" : null,
    platenPrime = async arborPrime => {
      let bushingPrime = arborPrime ?? "automatic";
      if (enginePrime != null && enginePrime.creditId !== bushingPrime || leverPrime == null) return;
      enginePrime ?? onResetAttemptStart?.();
      let collarPrime = await drillPrime.redeem({
        availableCount: mountPrime,
        consume: handlePrime.mutateAsync,
        creditId: arborPrime
      });
      switch (collarPrime.status) {
        case "in_flight":
          return;
        case "transport_error":
          framePrime({
            availableCount: mountPrime,
            creditId: collarPrime.creditId ?? "automatic",
            credits: leverPrime
          });
          axlePrime.get(toastAtom).danger(bracketPrime.formatMessage({
            id: "codex.rateLimitResetModal.error",
            defaultMessage: "Couldn’t reset usage. Please try again",
            description: "Error shown when resetting Codex usage fails"
          }));
          return;
        case "rejected":
          framePrime(null);
          onResetAttemptCancel?.();
          axlePrime.get(toastAtom).danger(formatRateLimitResetError(collarPrime.code, bracketPrime));
          return;
        case "reset":
          {
            framePrime(null);
            let dowelPrime = Math.max(collarPrime.availableCountBefore - 1, 0);
            logProductEvent(axlePrime, ensureComposerEsm_Utt_Init, {
              availableCountBefore: collarPrime.availableCountBefore,
              componentType: "settings",
              redemptionMethod: collarPrime.creditId == null ? "automatic" : "selected_credit",
              remainingCount: dowelPrime
            });
            axlePrime.get(toastAtom).success(bracketPrime.formatMessage({
              id: "settings.usage.resets.success",
              defaultMessage: "Usage limits reset",
              description: "Success toast shown after redeeming a Codex usage reset from settings"
            }));
            onResetComplete?.();
            clampPrime.current?.focus();
          }
      }
    };
  let ratchetPrime = platenPrime,
    shimPrime;
  if (enginePrime == null && gasketPrime && data == null) {
    let flangePrime;
    flangePrime = <SettingsLoadingRow {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.usage.resets.loading",
        defaultMessage: "Loading usage limit resets…",
        description: "Loading state for Codex usage limit resets in settings"
      }} />
    }} />;
    shimPrime = flangePrime;
  } else if (enginePrime == null && error != null && data == null) {
    let gibPrime = <MemoizedFormattedMessage {...{
      id: "settings.usage.resets.loadError",
      defaultMessage: "Couldn’t load usage limit resets",
      description: "Error shown when Codex usage limit resets cannot be loaded in settings"
    }} />;
    let hubPrime = () => {
      refetch();
    };
    let idlerPrime = <MemoizedFormattedMessage {...{
      id: "settings.usage.resets.retry",
      defaultMessage: "Retry",
      description: "Button label for retrying Codex usage reset loading in settings"
    }} />;
    let jigPrime;
    jigPrime = <EnsurePersonalizationCInit {...{
      label: gibPrime,
      control: <ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        onClick: hubPrime,
        size: "toolbar",
        children: idlerPrime
      }} />
    }} />;
    shimPrime = jigPrime;
  } else if (leverPrime == null || leverPrime.length === 0 && mountPrime === 0) {
    let keeperPrime;
    keeperPrime = <AppInitialLj layout="settings-row">
        {<MemoizedFormattedMessage {...{
        id: "settings.usage.resets.empty",
        defaultMessage: "No resets available",
        description: "Empty state when no Codex usage limit resets are available"
      }} />}
      </AppInitialLj>;
    shimPrime = keeperPrime;
  } else {
    let lugPrime = enginePrime?.creditId ?? null,
      mandrelPrime;
    mandrelPrime = <UsageSettingsHelper58 {...{
      activeCreditId: nozzlePrime,
      credits: leverPrime,
      isResetFillActive,
      isResetting: handlePrime.isPending,
      onUseReset: ratchetPrime,
      retryCreditId: lugPrime
    }} />;
    shimPrime = mandrelPrime;
  }
  let tappetPrime = <UseChromeAndCodeThemeSync.Header {...{
    title: <UsageSettingsHelper56 {...{
      headingRef: clampPrime
    }} />
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [tappetPrime, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: shimPrime
      }} />
    }} />]
  }} />;
}
function dusk(nipplePrime) {
  return nipplePrime.status === "available";
}
var elm,
  fern,
  grove,
  hill = esmInit(() => {
    elm = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_MT_Init();
    fern = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    RealtimeVoiceHostIdStub();
    ensureSettingsQueryAtomsInit();
    AppInitialUj();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_K9_Init();
    ensureRateLimitResetDialogInit();
    ensureAppScopeInit();
    codexCommandTheme();
    initSettingsLoadingRow();
    AppInitialVC();
    AppInitialFC();
    ridge();
    cliff();
  });
function UsageSettingsHelper61(orificePrime) {
  let {
    isResetFillActive,
    onResetAttemptCancel,
    onResetAttemptStart,
    onResetComplete
  } = orificePrime;
  if (!NativeContextMenuSurface("85924660")) return null;
  return <UsageSettingsHelper59 {...{
    isResetFillActive,
    onResetAttemptCancel,
    onResetAttemptStart,
    onResetComplete
  }} />;
}
var isle,
  juniper,
  lagoon = esmInit(() => {
    isle = reactCompilerRuntime();
    ensureSkillsPageHelpersInit();
    hill();
  });
function UsageSettingsHelper62(pinPrime) {
  let {
      isResetFillActive = false,
      rateLimitStatus,
      resetFillAnimation,
      resetFillRateLimitStatus,
      showEnterpriseMonthlyUsageLimit = false,
      canRequestEnterpriseMonthlyUsageLimit = false,
      workspaceRequestPolicy,
      workspaceMonthlyUsage = null,
      workspaceAdminRequests = null,
      isWorkspaceAdminRequestsLoading = false,
      isSavingWorkspaceAdminRequest = false,
      saveWorkspaceAdminRequest
    } = pinPrime,
    racePrime = isResetFillActive && resetFillRateLimitStatus != null ? resetFillRateLimitStatus : rateLimitStatus,
    sleevePrime,
    trunnionPrime,
    bossPrime;
  sleevePrime = Symbol.for("react.early_return_sentinel");
  bb0: {
    let camPrime = AppInitialHb(racePrime),
      detentPrime = petal(camPrime, null),
      eccentricPrime = isResetFillActive && resetFillRateLimitStatus != null ? oak(petal(AppInitialHb(resetFillRateLimitStatus), null)) : null,
      followerPrime = showEnterpriseMonthlyUsageLimit ? seed(workspaceMonthlyUsage, racePrime) : rain({
        rateLimitStatus: racePrime,
        coreUsageLimitRows: detentPrime
      }),
      guidePrime = followerPrime == null ? detentPrime : detentPrime.filter(nest),
      helixPrime = petal(camPrime, _i),
      impellerPrime = showEnterpriseMonthlyUsageLimit && canRequestEnterpriseMonthlyUsageLimit,
      journalPrime = workspaceRequestPolicy?.kind === "custom" ? workspaceRequestPolicy.request_url : null,
      kingpinPrime = showEnterpriseMonthlyUsageLimit && followerPrime == null;
    if (followerPrime == null && guidePrime.length === 0 && helixPrime.length === 0 && !kingpinPrime && !impellerPrime) {
      sleevePrime = null;
      break bb0;
    }
    trunnionPrime = followerPrime != null || guidePrime.length > 0 || kingpinPrime || impellerPrime ? <UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.usage.limits.title",
          defaultMessage: "General usage limits",
          description: "Title for the usage limits section in usage settings"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: [kingpinPrime ? <UsageSettingsHelper65 {...{
          currentMonthUsage: workspaceMonthlyUsage?.current_month_usage ?? null
        }} /> : null, followerPrime != null || guidePrime.length > 0 ? <ParseUrlOrFallback {...{
          children: [followerPrime == null ? null : <$r key={followerPrime.key} {...{
            isResetFillActive: isResetFillActive,
            resetFillAnimation,
            resetFillRemainingPercent: eccentricPrime?.get(followerPrime.key),
            usageLimit: followerPrime
          }} />, guidePrime.map(item => <UsageSettingsHelper67 key={item.key} {...{
            isResetFillActive: isResetFillActive,
            rateLimitRow: item,
            resetFillAnimation,
            resetFillRemainingPercent: eccentricPrime?.get(item.key)
          }} />)]
        }} /> : null, impellerPrime && workspaceRequestPolicy?.kind === "openai_native" ? <UsageSettingsHelper66 {...{
          pendingRequest: trail(workspaceAdminRequests),
          isLoading: isWorkspaceAdminRequestsLoading,
          isSaving: isSavingWorkspaceAdminRequest,
          saveWorkspaceAdminRequest
        }} /> : null, impellerPrime && workspaceRequestPolicy?.kind === "custom" ? <ParseUrlOrFallback {...{
          className: "mt-2",
          children: <EnsurePersonalizationCInit {...{
            label: null,
            description: workspaceRequestPolicy.instructions == null ? null : <span className="leading-relaxed whitespace-pre-wrap">
                                      {workspaceRequestPolicy.instructions}
                                    </span>,
            control: journalPrime == null ? null : <ReadLoginRouteQuerySnapshot {...{
              color: "primary",
              size: "medium",
              className: "rounded-full",
              onClick: landPrime => {
                deferredUiEnt({
                  event: landPrime,
                  href: journalPrime,
                  initiator: "open_in_browser_bridge"
                });
              },
              children: <MemoizedFormattedMessage {...{
                id: "settings.usage.limits.customRequestIncrease",
                defaultMessage: "Request Increase",
                description: "Member-facing button in Codex usage settings that opens the workspace's custom HTTPS monthly usage-limit-increase request page in the browser."
              }} />
            }} />
          }} />
        }} /> : null]
      }} />]
    }} /> : null;
    bossPrime = helixPrime.length > 0 ? <UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.usage.limits.spark.title",
          defaultMessage: "GPT-5.3-Codex-Spark usage limits",
          description: "Title for the GPT-5.3-Codex-Spark usage limits section"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: helixPrime.map(meadow)
        }} />
      }} />]
    }} /> : null;
  }
  if (sleevePrime !== Symbol.for("react.early_return_sentinel")) return sleevePrime;
  return <>
      {trunnionPrime}
      {bossPrime}
    </>;
}
function meadow(event) {
  return <UsageSettingsHelper67 key={event.key} {...{
    isResetFillActive: false,
    rateLimitRow: event,
    resetFillAnimation: undefined,
    resetFillRemainingPercent: undefined
  }} />;
}
function nest(meshPrime) {
  return !wind(meshPrime);
}
function UsageSettingsHelper65(neckPrime) {
  let {
      currentMonthUsage
    } = neckPrime,
    padPrime = <EnsurePersonalizationCInit {...{
      icon: <ShellLayoutMetricsContext {...{
        "aria-hidden": true,
        className: "icon-sm text-token-text-tertiary"
      }} />,
      label: <MemoizedFormattedMessage {...{
        id: "settings.usage.limits.monthly.none",
        defaultMessage: "Your administrator hasn’t set a usage limit",
        description: "Informational message shown when the administrator has not set a monthly usage limit for the current user."
      }} />,
      control: null
    }} />;
  let quillshaftPrime = currentMonthUsage == null ? null : <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.limits.monthly.currentUsage",
      defaultMessage: "Your usage this month",
      description: "Label for the current user's monthly credit usage when no monthly usage limit is set."
    }} />,
    control: <span className="text-sm text-token-text-secondary tabular-nums">
              {<MemoizedFormattedMessage {...{
        id: "settings.usage.limits.monthly.currentUsageCredits",
        defaultMessage: "{credits, plural, one {# credit} other {# credits}}",
        description: "Credit amount used by the current user this month when no monthly usage limit is set.",
        values: {
          credits: Math.max(currentMonthUsage, 0)
        }
      }} />}
            </span>
  }} />;
  return <ParseUrlOrFallback {...{
    children: [padPrime, quillshaftPrime]
  }} />;
}
function UsageSettingsHelper66(rollerPrime) {
  let {
      pendingRequest,
      isLoading,
      isSaving,
      saveWorkspaceAdminRequest
    } = rollerPrime,
    spindlePrime = CodexPluginActionType(appScopeAtom),
    thrustPrime = useIntl(),
    [yokePrime, bafflePrime] = dew.useState(false),
    [capstanPrime, diaphragmPrime] = dew.useState(pendingRequest?.justification ?? ""),
    elbowPrime = () => {
      let manifoldPrime = capstanPrime.trim();
      if (manifoldPrime.length === 0) {
        spindlePrime.get(toastAtom).warning(thrustPrime.formatMessage({
          id: "settings.usage.limits.requestMissingJustification",
          defaultMessage: "Enter a justification to submit your request.",
          description: "Toast shown when a workspace usage limit request is missing a justification"
        }));
        return;
      }
      saveWorkspaceAdminRequest?.({
        justification: manifoldPrime,
        requestId: pendingRequest?.id
      }).then(() => {
        spindlePrime.get(toastAtom).success(thrustPrime.formatMessage(pendingRequest == null ? {
          id: "settings.usage.limits.requestSaved",
          defaultMessage: "Request submitted",
          description: "Toast shown when a workspace usage limit request is submitted"
        } : {
          id: "settings.usage.limits.requestUpdated",
          defaultMessage: "Request updated",
          description: "Toast shown when a workspace usage limit request is updated"
        }));
        bafflePrime(false);
      }).catch(() => {
        spindlePrime.get(toastAtom).danger(thrustPrime.formatMessage({
          id: "settings.usage.limits.requestSaveError",
          defaultMessage: "Could not save your request. Please try again.",
          description: "Toast shown when a workspace usage limit request cannot be saved"
        }));
      });
    };
  let ferrulePrime = elbowPrime,
    grommetPrime = pendingRequest == null ? null : <div className="text-sm text-token-text-secondary">
          {<MemoizedFormattedMessage {...{
        id: "settings.usage.limits.requestPending",
        defaultMessage: "Your request is pending admin review.",
        description: "Status text for a pending workspace usage limit request"
      }} />}
        </div>;
  let headerPrime = saveWorkspaceAdminRequest == null,
    injectorPrime = () => {
      diaphragmPrime(pendingRequest?.justification ?? "");
      bafflePrime(true);
    };
  let jumperPrime = pendingRequest == null ? <MemoizedFormattedMessage {...{
    id: "settings.usage.limits.requestIncrease",
    defaultMessage: "Request limit increase",
    description: "Button to request a workspace monthly usage limit increase"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.limits.updatePendingRequest",
    defaultMessage: "Update pending request",
    description: "Button to update an existing pending workspace usage limit request"
  }} />;
  let kerfPrime = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    size: "medium",
    className: "self-start rounded-full",
    loading: isLoading,
    disabled: headerPrime,
    onClick: injectorPrime,
    children: jumperPrime
  }} />;
  let louverPrime = yokePrime ? <ParseUrlOrFallback {...{
    className: "mt-1 w-full",
    children: <div className="flex flex-col gap-3 p-3">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-token-text-primary">
              {<MemoizedFormattedMessage {...{
          id: "settings.usage.limits.requestJustificationLabel",
          defaultMessage: "Justification",
          description: "Label for the workspace usage limit request justification"
        }} />}
              <textarea value={capstanPrime} rows={3} placeholder={thrustPrime.formatMessage({
          id: "settings.usage.limits.requestJustificationPlaceholder",
          defaultMessage: "Tell your admin why you need more credits.",
          description: "Placeholder for the workspace usage limit request justification"
        })} className="min-h-20 resize-none rounded-md border border-token-border bg-token-input-background px-3 py-2 text-sm leading-5 text-token-text-primary outline-none placeholder:text-token-text-tertiary focus:border-token-border-heavy" onChange={event => {
          diaphragmPrime(event.target.value);
        }} />
            </label>
            <div className="flex justify-end gap-2">
              {<ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          size: "default",
          onClick: () => {
            bafflePrime(false);
          },
          children: <MemoizedFormattedMessage {...{
            id: "settings.usage.limits.requestCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the workspace usage limit request form"
          }} />
        }} />}
              {<ReadLoginRouteQuerySnapshot {...{
          color: "primary",
          size: "default",
          loading: isSaving,
          onClick: ferrulePrime,
          children: pendingRequest == null ? <MemoizedFormattedMessage {...{
            id: "settings.usage.limits.requestSave",
            defaultMessage: "Submit request",
            description: "Submit button for a workspace usage limit request"
          }} /> : <MemoizedFormattedMessage {...{
            id: "settings.usage.limits.requestUpdate",
            defaultMessage: "Update request",
            description: "Submit button for updating a pending workspace usage limit request"
          }} />
        }} />}
            </div>
          </div>
  }} /> : null;
  return <div className="mt-2 flex flex-col items-start gap-2">
      {grommetPrime}
      {kerfPrime}
      {louverPrime}
    </div>;
}
