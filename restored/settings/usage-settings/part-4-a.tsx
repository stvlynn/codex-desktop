// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 4/4
/* split-lane-import-depth:1 */

// Lane a of 2 — split of part-4.tsx at top-level declaration boundaries.
import {
  ChatGptPlanId,
  ensureChatGptPlanIdInit,
} from "../../account/chatgpt-plan-ids";
import { createRateLimitCreditRedeemer } from "../../account/create-rate-limit-credit-redeemer";
import {
  formatCreditReloadCurrency,
  initCreditReloadDialogFormatting,
} from "../../account/credit-reload-dialog-formatting";
import {
  CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS,
  getCreditsPurchaseMinimumQuantity,
  parseFormattedCreditsQuantityString,
} from "../../account/credits-purchase-field-validators";
import { CREDIT_RECHARGE_TARGET_OPTIONS } from "../../account/credits-recharge-defaults";
import { DeferredAccountRy } from "../../account/deferred-account-ry";
import { deferredAccountUv } from "../../account/deferred-account-uv";
import { ensureRateLimitResetDialogInit } from "../../account/ensure-rate-limit-reset-dialog-init";
import { formatRateLimitResetError } from "../../account/format-rate-limit-reset-error";
import { mobileClientIdToStorePlatform } from "../../account/mobile-client-store-platform";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlanExcludingEducation } from "../../account/plan-type-helpers";
import { useUpgradePlanCopyVariant } from "../../account/use-upgrade-plan-copy-variant";
import {
  ensureUsageSettingsAccessInit,
  useUsageSettingsAccess,
} from "../../account/use-usage-settings-access";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Mx_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { activateConversationSurface } from "../../conversation/activate-conversation-surface";
import { firstRepoFromRepos } from "../../conversation/first-repo-from-repos";
import { QueuedMessageTraySurface } from "../../conversation/queued-message-tray-surface";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import {
  CHATGPT_COM_ADMIN_URL,
  CHATGPT_COM_URL,
  DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL,
  HELP_OPENAI_COM_EN_ARTICLES_7905690_HOW_TO_CANCEL_YOUR_APPLE_SUBSCRIPTION_FOR_CHATGPT_IN_THE_CHATGPT_IOS_APP_URL,
} from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import {
  ensureTanstackReactFormApiInit,
  useTanstackForm,
} from "../../forms/tanstack-react-form";
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
import {
  formatCurrency,
  initFormatCurrency,
} from "../../utils/format-currency";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { formatPlanPrice, initPlanPricing } from "../../utils/plan-pricing";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  quickChatSizeAtom,
  quickChatSurfaceCollapsedAtom,
} from "../../windows/quick-chat-atoms";
import {
  mapQuickChatSurfaceMode,
  setQuickChatDockPosition,
  setQuickChatSize,
} from "../../windows/quick-chat-surface-helpers";
import { tryActivateConversationFromPendingWorktree } from "../../worktree/try-activate-conversation-from-pending-worktree";
import { ensureCloudApiClientInit } from "../cloud-api-client";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";

// Cross-part stubs.
const $n: any = undefined;
const AppInitialBv: any = undefined;
const AppInitialCx: any = undefined;
const AppInitialEx: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialLx: any = undefined;
const AppInitialN: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialNx: any = undefined;
const AppInitialOx: any = undefined;
const AppInitialRv: any = undefined;
const AppInitialT: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVb: any = undefined;
const NativeContextMenuSurface: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const UsageSettingsHelper10: any = undefined;
const UsageSettingsHelper11: any = undefined;
const UsageSettingsHelper45: any = undefined;
const UsageSettingsHelper52: any = undefined;
const UsageSettingsHelper61: any = undefined;
const UsageSettingsHelper62: any = undefined;
const deferredProjectsYx: any = undefined;
const deferredUiEnt: any = undefined;
const lagoon: any = undefined;
const orbit: any = undefined;
const topaz: any = undefined;
const usageSettings: any = undefined;
const zephyr: any = undefined;

function $r(nipPrime) {
  let {
      isResetFillActive,
      resetFillAnimation,
      resetFillRemainingPercent,
      usageLimit,
    } = nipPrime,
    outletPrime = useIntl(),
    packingPrime = birch(usageLimit.remainingPercent);
  let reducerPrime = packingPrime,
    strainerPrime;
  {
    let echoSecond = quickChatSizeAtom(usageLimit.resetAt);
    strainerPrime =
      echoSecond == null ? null : mapQuickChatSurfaceMode(echoSecond);
  }
  let teePrime = strainerPrime,
    unionPrime =
      usageLimit.usedCredits == null || usageLimit.limitCredits == null
        ? null
        : outletPrime.formatMessage(
            {
              id: "settings.usage.limits.monthly.creditsUsed",
              defaultMessage: "{used} of {limit} credits used",
              description:
                "Usage summary for monthly usage limit credits that have been used",
            },
            {
              used: yarrow(outletPrime, usageLimit.usedCredits),
              limit: yarrow(outletPrime, usageLimit.limitCredits),
            },
          );
  let ventPrime = unionPrime,
    wyePrime =
      teePrime == null ? null : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.limits.window.resetAt",
            defaultMessage: "Resets {time}",
            description: "Description showing when a usage limit window resets",
            values: {
              time: teePrime,
            },
          }}
        />
      );
  let zenerPrime = wyePrime,
    alphaSecond = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.usage.limits.monthly.label",
          defaultMessage: "Monthly usage limit",
          description: "Label for a monthly usage limit row",
        }}
      />
    );
  let bravoSecond =
    ventPrime != null || zenerPrime != null ? (
      <span className="flex flex-wrap gap-x-2">
        {ventPrime == null ? null : <span>{ventPrime}</span>}
        {zenerPrime == null ? null : <span>{zenerPrime}</span>}
      </span>
    ) : null;
  let copperSecond = outletPrime.formatMessage({
    id: "settings.usage.limits.monthly.progress.remainingAriaLabel",
    defaultMessage: "Monthly usage remaining",
    description:
      "Accessible label for the monthly usage remaining progress bar",
  });
  let deltaSecond = (
    <UsageSettingsHelper78
      {...{
        accessibleLabel: copperSecond,
        isResetFillActive,
        remainingLabel: "remaining",
        remainingPercent: reducerPrime,
        resetFillAnimation,
        resetFillRemainingPercent,
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: alphaSecond,
        description: bravoSecond,
        control: deltaSecond,
      }}
    />
  );
}
function UsageSettingsHelper67(falconSecond) {
  let {
      isResetFillActive,
      rateLimitRow,
      resetFillAnimation,
      resetFillRemainingPercent,
    } = falconSecond,
    gammaSecond;
  {
    let pearlSecond = quickChatSizeAtom(rateLimitRow.bucket.resetsAt ?? null);
    gammaSecond =
      pearlSecond == null ? null : mapQuickChatSurfaceMode(pearlSecond);
  }
  let harborSecond = gammaSecond,
    indigoSecond =
      harborSecond == null ? null : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.limits.window.resetAt",
            defaultMessage: "Resets {time}",
            description: "Description showing when a usage limit window resets",
            values: {
              time: harborSecond,
            },
          }}
        />
      );
  let jadeSecond = indigoSecond,
    kiteSecond = rateLimitRow.bucket.usedPercent ?? 0,
    lemonSecond = setQuickChatDockPosition(kiteSecond);
  let marbleSecond = lemonSecond,
    nickelSecond = quiet(rateLimitRow);
  let onyxSecond = (
    <UsageSettingsHelper78
      {...{
        isResetFillActive,
        remainingPercent: marbleSecond,
        resetFillAnimation,
        resetFillRemainingPercent,
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: nickelSecond,
        description: jadeSecond,
        control: onyxSecond,
      }}
    />
  );
}
function oak(quartzSecond) {
  return new Map(
    quartzSecond.map((item) => [
      item.key,
      setQuickChatDockPosition(item.bucket.usedPercent ?? 0),
    ]),
  );
}
function petal(riverSecond, slateSecond) {
  let timberSecond =
    slateSecond == null
      ? (riverSecond.find((item) => item.limitName == null) ?? null)
      : AppInitialVb(riverSecond, slateSecond);
  return timberSecond == null
    ? []
    : AppInitialT({
        entry: timberSecond,
        keyPrefix: slateSecond ?? "core",
      });
}
function quiet(umbraSecond) {
  let violetSecond = umbraSecond.bucket.windowDurationMins ?? 0;
  return wind(umbraSecond) ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.limits.monthly.label",
        defaultMessage: "Monthly usage limit",
        description: "Label for a monthly usage limit row",
      }}
    />
  ) : ui(violetSecond, field) ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.limits.fiveHour.label",
        defaultMessage: "5 hour usage limit",
        description: "Label for the 5-hour usage limit row",
      }}
    />
  ) : ui(violetSecond, 10080) ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.limits.week.label",
        defaultMessage: "Weekly usage limit",
        description: "Label for a weekly usage limit row",
      }}
    />
  ) : ui(violetSecond, 1440) ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.limits.day.label",
        defaultMessage: "Daily usage limit",
        description: "Label for a daily usage limit row",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.limits.genericWindow.label",
        defaultMessage: "Usage limit",
        description: "Generic label for a usage limit row",
      }}
    />
  );
}
function rain({ rateLimitStatus, coreUsageLimitRows }) {
  let willowSecond = rateLimitStatus?.spend_control?.individual_limit ?? null;
  if (willowSecond != null)
    return {
      key: "spend-control-monthly",
      remainingPercent: willowSecond.remaining_percent,
      resetAt: willowSecond.reset_at,
      usedCredits: willowSecond.used,
      limitCredits: willowSecond.limit,
    };
  let xenonSecond = coreUsageLimitRows.find(wind) ?? null;
  if (xenonSecond == null) return null;
  let yellowSecond = xenonSecond.bucket.usedPercent ?? 0;
  return {
    key: xenonSecond.key,
    remainingPercent: setQuickChatDockPosition(yellowSecond),
    resetAt: xenonSecond.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}
function seed(zincSecond, amberSecond) {
  let basaltSecond = tryActivateConversationFromPendingWorktree(zincSecond);
  return basaltSecond == null
    ? null
    : {
        key: "workspace-monthly",
        remainingPercent: basaltSecond.remainingPercent,
        resetAt:
          Number(amberSecond?.spend_control?.individual_limit?.limit) ===
          basaltSecond.limit
            ? (amberSecond?.spend_control?.individual_limit?.reset_at ?? null)
            : null,
        usedCredits: String(basaltSecond.used),
        limitCredits: String(basaltSecond.limit),
      };
}
function trail(cedarSecond) {
  return (
    cedarSecond?.items.find(
      (daisySecond) =>
        daisySecond.status === "pending" && urn(daisySecond) != null,
    ) ?? null
  );
}
function urn(emberSecond) {
  return emberSecond.payloads.find(vine) ?? null;
}
function vine(event) {
  return (
    event.kind === "spend_limit" &&
    event.target.source === haven &&
    event.target.source_id === ink
  );
}
function wind(flintSecond) {
  return ui(flintSecond.bucket.windowDurationMins ?? 0, grain);
}
function ui(garnetSecond, hazelSecond) {
  return !Number.isFinite(garnetSecond) || garnetSecond <= 0
    ? false
    : Math.abs(garnetSecond - hazelSecond) <= hazelSecond * 0.05;
}
function yarrow(ivorySecond, jasperSecond) {
  let kelpSecond = Number(jasperSecond);
  return Number.isFinite(kelpSecond)
    ? ivorySecond.formatNumber(Math.max(kelpSecond, 0), {
        minimumFractionDigits: 0,
        maximumFractionDigits: kelpSecond >= 10 ? 0 : 2,
      })
    : jasperSecond;
}
function UsageSettingsHelper78(lotusSecond) {
  let {
      accessibleLabel,
      isResetFillActive,
      remainingLabel = "left",
      remainingPercent,
      resetFillAnimation,
      resetFillRemainingPercent,
    } = lotusSecond,
    mintSecond = useIntl(),
    novaSecond = birch(remainingPercent),
    oliveSecond = birch(resetFillRemainingPercent ?? remainingPercent),
    prismSecond = createInMemoryStorageAdapter(0),
    quillSecond =
      isResetFillActive && resetFillRemainingPercent == null
        ? undefined
        : resetFillAnimation,
    reefSecond = quillSecond?.progress ?? prismSecond,
    sageSecond =
      isResetFillActive &&
      quillSecond != null &&
      resetFillRemainingPercent != null,
    topazSecond = (driftSecond) =>
      oliveSecond + (100 - oliveSecond) * driftSecond;
  let ultraSecond = FormattedDate(reefSecond, topazSecond),
    vaporSecond = FormattedDate(ultraSecond, azure),
    wheatSecond = sageSecond ? 100 : novaSecond,
    yarnSecond =
      accessibleLabel ??
      mintSecond.formatMessage({
        id: "settings.usage.limits.progress.ariaLabel",
        defaultMessage: "Usage remaining",
        description: "Aria label for usage remaining progress bars",
      });
  let zephyrSecond = yarnSecond,
    acornSecond = sageSecond ? (
      <ensureIntlFormattersInit.span
        key={"remaining-percent"}
        {...{
          children: vaporSecond,
        }}
      />
    ) : (
      mintSecond.formatNumber(novaSecond, {
        maximumFractionDigits: 0,
      })
    ),
    bloomSecond = (
      <div className="w-24">
        {quillSecond == null ? (
          <progress
            max={100}
            value={novaSecond}
            aria-label={zephyrSecond}
            className="h-1.5 w-24 overflow-hidden rounded-full [&::-moz-progress-bar]:bg-token-foreground [&::-ms-fill]:bg-token-foreground [&::-webkit-progress-bar]:bg-token-foreground/10 [&::-webkit-progress-value]:bg-token-foreground"
          />
        ) : (
          <AnimatedPercentFillBar
            accessibleLabel={zephyrSecond}
            animatedPercent={ultraSecond}
            isResetFillActive={sageSecond}
            remainingPercent={wheatSecond}
            resetFillAnimation={quillSecond}
          />
        )}
      </div>
    );
  let coralSecond = (
    <span className="min-w-[72px] text-right text-sm whitespace-nowrap text-token-text-secondary tabular-nums">
      {remainingLabel === "remaining" ? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.limits.monthly.progress.remaining",
            defaultMessage: "{remaining}% remaining",
            description: "Remaining percentage shown next to usage progress",
            values: {
              remaining: acornSecond,
            },
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.limits.progress.remaining",
            defaultMessage: "{remaining}% left",
            description: "Remaining percentage shown next to usage progress",
            values: {
              remaining: acornSecond,
            },
          }}
        />
      )}
    </span>
  );
  return (
    <div className="flex items-center gap-2">
      {bloomSecond}
      {coralSecond}
    </div>
  );
}
function azure(eagleSecond) {
  return Math.round(eagleSecond);
}
function birch(frostSecond) {
  return Number.isFinite(frostSecond)
    ? Math.max(0, Math.min(100, frostSecond))
    : 0;
}
var canyon,
  dew,
  ever,
  _i,
  field,
  grain,
  haven,
  ink,
  jadeite = esmInit(() => {
    canyon = reactCompilerRuntime();
    useBrowserExtensionPluginSetupQuery();
    ensureComposerEsm_MT_Init();
    dew = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Ilt_Init();
    svgToDataUri();
    deferredProjectsYx();
    AppInitialRv();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    AppInitialN();
    activateConversationSurface();
    codex3();
    _i = "gpt-5.3-codex-spark";
    field = 300;
    grain = 30 * ensureConversationPageEsm_Mx_Init;
    haven = "account_user_spend_controls";
    ink = "account_user.credit_limits";
  });
