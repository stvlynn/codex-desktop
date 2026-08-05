// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 1/4
/* split-lane-import-depth:1 */

// Lane a of 2 — split of part-1.tsx at top-level declaration boundaries.
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
const UsageSettingsHelper21: any = undefined;
const UsageSettingsHelper24: any = undefined;
const UsageSettingsHelper27: any = undefined;
const UsageSettingsHelper28: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const ember: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const lotus: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const violet: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const AppInitialAx: any = undefined;
const AppInitialB: any = undefined;
const AppInitialBv: any = undefined;
const AppInitialCx: any = undefined;
const AppInitialDx: any = undefined;
const AppInitialDy: any = undefined;
const deferredUiEnt: any = undefined;
const AppInitialEx: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialHb: any = undefined;
const AppInitialHv: any = undefined;
const AppInitialIx: any = undefined;
const RealtimeVoiceHostIdStub: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialLx: any = undefined;
const AppInitialN: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialNx: any = undefined;
const AppInitialOx: any = undefined;
const AppInitialOy: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const AppInitialQb: any = undefined;
const AppInitialQv: any = undefined;
const NativeContextMenuSurface: any = undefined;
const AppInitialRv: any = undefined;
const AppInitialT: any = undefined;
const AppInitialTY: any = undefined;
const DeferredUiU: any = undefined;
const AppInitialUj: any = undefined;
const SetRemoteControlEnabledForHost: any = undefined;
const AppInitialVb: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVv: any = undefined;
const IntlProvider: any = undefined;
const usageSettings: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const deferredProjectsYx: any = undefined;

// Split companion stubs (defined in sibling lane).
const UsageSettingsHelper14: any = undefined;

function alpha(silk) {
  return silk == null ? "" : silk.trim();
}
function bravo({ rechargeThreshold, rechargeTarget }) {
  let thorn = falcon(rechargeThreshold),
    upland = falcon(rechargeTarget),
    vista = gamma(thorn),
    wisp = harbor({
      parsedThreshold: thorn,
      parsedTarget: upland,
    });
  return {
    rechargeThresholdError: vista,
    rechargeTargetError: wisp,
    isValid: vista == null && wisp == null,
  };
}
function copper({ draftState, serverState, isSaving }) {
  let yonder = bravo({
      rechargeThreshold: draftState.rechargeThreshold,
      rechargeTarget: draftState.rechargeTarget,
    }),
    zenith = $t({
      draftState,
      serverState,
    }),
    anvil = delta({
      draftState,
      serverState,
      validation: yonder,
    });
  return {
    validation: yonder,
    hasChanges: zenith,
    saveIntent: anvil,
    isSaveEnabled: zenith && anvil !== "none" && !isSaving,
  };
}
function delta({ draftState, serverState, validation }) {
  return draftState.isEnabled
    ? validation.isValid
      ? serverState.isEnabled
        ? alpha(draftState.rechargeThreshold) ===
            alpha(serverState.rechargeThreshold) &&
          alpha(draftState.rechargeTarget) === alpha(serverState.rechargeTarget)
          ? "none"
          : "update"
        : "enable"
      : "none"
    : serverState.isEnabled
      ? "disable"
      : "none";
}
function $t({ draftState, serverState }) {
  return draftState.isEnabled === serverState.isEnabled
    ? !draftState.isEnabled && !serverState.isEnabled
      ? false
      : alpha(draftState.rechargeThreshold) !==
          alpha(serverState.rechargeThreshold) ||
        alpha(draftState.rechargeTarget) !== alpha(serverState.rechargeTarget)
    : true;
}
function echo({ rechargeThreshold, rechargeTarget }) {
  let beacon = alpha(rechargeThreshold),
    crag = alpha(rechargeTarget);
  if (!/^\d+$/.test(beacon) || !/^\d+$/.test(crag)) return null;
  let dome = Number.parseInt(beacon, 10),
    eddy = Number.parseInt(crag, 10);
  return eddy < dome ? null : eddy - dome;
}
function falcon(fjord) {
  let glen = alpha(fjord);
  return glen.length === 0
    ? {
        kind: "missing",
      }
    : /^\d+$/.test(glen)
      ? {
          kind: "valid",
          value: Number.parseInt(glen, 10),
        }
      : {
          kind: "invalid",
        };
}
function gamma(hearth) {
  switch (hearth.kind) {
    case "missing":
      return "missing";
    case "invalid":
      return "not-whole-number";
    case "valid":
      return hearth.value < 125 ? "below-threshold-minimum" : null;
  }
}
function harbor({ parsedThreshold, parsedTarget }) {
  switch (parsedTarget.kind) {
    case "missing":
      return "missing";
    case "invalid":
      return "not-whole-number";
    case "valid":
      return parsedThreshold.kind === "valid" &&
        parsedTarget.value - parsedThreshold.value < 125
        ? "target-difference-too-small"
        : null;
  }
}
var indigo = esmInit(() => {});
function on() {
  let inlet = AppIconAlt(),
    jetty = {
      enabled: true,
    };
  let { data, isPending } = AppInitialQb(jetty),
    knob = isPending
      ? undefined
      : (data ?? inlet.getContext().user?.country ?? null);
  let ledge = knob,
    mire = {
      billingCurrency: ledge,
      enabled: true,
    };
  let { data: _data } = AppInitialB(mire);
  return {
    creditPricingInfo: _data,
  };
}
function UsageSettingsHelper9(nook) {
  let {
      maximumCreditPurchaseDiscountPercent,
      forceOneTimePurchase = false,
      hasSavedPaymentMethod,
      isAutoReloadEnabled,
    } = nook,
    oxbow = CodexPluginActionType(appScopeAtom),
    pond = AppIconAlt(),
    quarry = CREDIT_RECHARGE_TARGET_OPTIONS(),
    rapids =
      maximumCreditPurchaseDiscountPercent > 0
        ? "flex min-w-0 flex-wrap items-center justify-end gap-2"
        : "contents",
    spur =
      maximumCreditPurchaseDiscountPercent > 0 ? (
        <Badge
          {...{
            className: "shrink-0 select-none",
            variant: "promotion",
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.usage.credit.balance.discountOffer",
                  defaultMessage:
                    "Save up to {discountPercent, number}% on credits",
                  description:
                    "Badge beside the Buy credits button showing the maximum server-authorized one-time credit discount available to a personal Codex user",
                  values: {
                    discountPercent: maximumCreditPurchaseDiscountPercent,
                  },
                }}
              />
            ),
          }}
        />
      ) : null;
  let tor = (weir) => {
    let yard = AppInitialDy(pond, "personal");
    CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(oxbow, {
      audience: "personal",
      checkoutKind: "standalone_credit",
      entryPoint: "usage_settings_purchase_cta",
    });
    quarry({
      event: weir,
      intent: "purchase",
      ...(forceOneTimePurchase
        ? {
            forceOneTimePurchase: true,
          }
        : {}),
      hasSavedPaymentMethod,
      isAutoReloadEnabled,
      isCustomCheckoutEnabled: yard,
      legacyUrl: quill,
      source: "usage_settings_purchase_cta",
    });
  };
  let updraft = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.credit.balance.buyCredits",
        defaultMessage: "Buy credits",
        description: "Button label to open the credit purchase flow",
      }}
    />
  );
  let verge = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "outline",
        size: "toolbar",
        onClick: tor,
        children: updraft,
      }}
    />
  );
  return (
    <div className={rapids}>
      {spur}
      {verge}
    </div>
  );
}
function UsageSettingsHelper10(anchor) {
  let {
      canPurchaseCredits = false,
      maximumCreditPurchaseDiscountPercent,
      creditDetails,
      hasSavedPaymentMethod,
    } = anchor,
    bolt = useIntl(),
    { creditPricingInfo } = on(),
    cog = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          className: "pb-3 [&>div>div]:!text-sm",
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.credit.balance.title",
                defaultMessage: "Credits balance",
                description: "Title for the credits balance section",
              }}
            />
          ),
          subtitle: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.credit.balance.readOnly.description",
                defaultMessage: "Your remaining credits",
                description:
                  "Description for the read-only credits balance section shown to users who already purchased credits",
              }}
            />
          ),
        }}
      />
    );
  let disc =
      canPurchaseCredits &&
      maximumCreditPurchaseDiscountPercent > 0 &&
      "max-md:flex-col max-md:items-stretch",
    edge = IntlProvider("flex items-center justify-between gap-4 p-4", disc);
  let forge = violet({
    intl: bolt,
    creditDetails,
    pricingInfo: creditPricingInfo,
  });
  let gear = <div className="text-sm text-token-text-primary">{forge}</div>;
  let hinge = (
    <div className="text-sm text-token-text-secondary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.credit.balance.current",
            defaultMessage: "Current balance",
            description: "Label below the current credits balance amount",
          }}
        />
      }
    </div>
  );
  let iron = (
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      {gear}
      {hinge}
    </div>
  );
  let joint = canPurchaseCredits ? (
    <UsageSettingsHelper9
      {...{
        maximumCreditPurchaseDiscountPercent,
        forceOneTimePurchase: true,
        hasSavedPaymentMethod,
        isAutoReloadEnabled: false,
      }}
    />
  ) : null;
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          cog,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <div className={edge}>
                        {iron}
                        {joint}
                      </div>
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
}
function UsageSettingsHelper11(keystone) {
  let {
      serverState,
      hasSavedPaymentMethod,
      maximumCreditPurchaseDiscountPercent,
      creditDetails,
      enableAutoTopUpMutation,
      updateAutoTopUpMutation,
      disableAutoTopUpMutation,
    } = keystone,
    latch = useIntl(),
    { creditPricingInfo } = on(),
    motor = CREDIT_RECHARGE_TARGET_OPTIONS(),
    [nut, piston] = lotus.useState(false),
    rivet = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.usage.credit.balance.title",
          defaultMessage: "Credits balance",
          description: "Title for the credits balance section",
        }}
      />
    );
  let screw = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: rivet,
        subtitle: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.usage.credit.balance.description",
              defaultMessage:
                "Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>",
              description:
                "Description for the credits balance section in usage settings",
              values: {
                link: jade,
              },
            }}
          />
        ),
      }}
    />
  );
  let torque =
      maximumCreditPurchaseDiscountPercent > 0 &&
      "max-md:flex-col max-md:items-stretch",
    valve = IntlProvider("flex items-center justify-between gap-4 p-4", torque);
  let axle = violet({
    intl: latch,
    creditDetails,
    pricingInfo: creditPricingInfo,
  });
  let bracket = <div className="text-sm text-token-text-primary">{axle}</div>;
  let clamp, drill;
  clamp = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.credit.balance.current",
        defaultMessage: "Current balance",
        description: "Label below the current credits balance amount",
      }}
    />
  );
  drill = (
    <span aria-hidden={true} className="size-0.5 rounded-full bg-current" />
  );
  let engine = () => {
    motor({
      intent: "auto-reload",
      autoReloadCreditDiscountPolicy:
        serverState.autoReloadCreditDiscountPolicy,
      isAutoReloadEnabled: serverState.isEnabled,
      source: "usage_settings_auto_reload_cta",
      openLegacyAutoReload: () => {
        piston(true);
      },
    });
  };
  let frame = serverState.isEnabled ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.credit.balance.manageAutoReload",
        defaultMessage: "Manage auto-reload",
        description:
          "Button label to manage active auto reload from the credits balance section",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.credit.balance.setupAutoReload",
        defaultMessage: "Set up auto-reload",
        description:
          "Button label to set up auto reload from the credits balance section",
      }}
    />
  );
  let gasket = (
    <div className="flex flex-wrap items-center gap-x-1 text-sm text-token-text-secondary">
      {clamp}
      {drill}
      <button
        type="button"
        className="cursor-interaction text-token-text-link-foreground"
        onClick={engine}
      >
        {frame}
      </button>
    </div>
  );
  let handle = (
    <div className="flex min-w-0 flex-1 flex-col gap-1">
      {bracket}
      {gasket}
    </div>
  );
  let insert = (
    <UsageSettingsHelper9
      {...{
        maximumCreditPurchaseDiscountPercent,
        hasSavedPaymentMethod,
        isAutoReloadEnabled: serverState.isEnabled,
      }}
    />
  );
  let jacket = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          screw,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <div className={valve}>
                        {handle}
                        {insert}
                      </div>
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
  let knurl = nut ? (
    <UsageSettingsHelper14
      {...{
        open: nut,
        serverState,
        creditDetails,
        enableAutoTopUpMutation,
        updateAutoTopUpMutation,
        disableAutoTopUpMutation,
        onOpenChange: piston,
      }}
    />
  ) : null;
  return (
    <>
      {jacket}
      {knurl}
    </>
  );
}
function jade(lever) {
  return (
    <a
      href={reef}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex cursor-interaction text-token-text-link-foreground"
      onClick={kite}
    >
      {lever}
    </a>
  );
}
function kite(mount) {
  deferredUiEnt({
    event: mount,
    href: reef,
    initiator: "open_in_browser_bridge",
  });
}
