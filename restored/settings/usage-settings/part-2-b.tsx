// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 2/4
/* split-lane-import-depth:1 */

// Lane b of 2 — split of part-2.tsx at top-level declaration boundaries.
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

function $n(zephyrPrime) {
  let { plan } = zephyrPrime,
    acornPrime = CodexPluginActionType(appScopeAtom),
    bloomPrime = useIntl(),
    coralPrime = {
      logExposure: true,
    };
  let driftPrime = useUpgradePlanCopyVariant(coralPrime),
    eaglePrime = AppInitialHv(),
    frostPrime = parseFormattedCreditsQuantityString(plan),
    glidePrime = frostPrime != null,
    honeyPrime = {
      enabled: glidePrime,
    };
  let { data } = AppInitialQb(honeyPrime),
    irisPrime = frostPrime != null,
    jewelPrime = {
      billingCurrency: data,
      enabled: irisPrime,
    };
  let { data: _data } = AppInitialIx(jewelPrime);
  if (frostPrime == null) return null;
  let knollPrime =
      _data == null
        ? null
        : formatPlanPrice({
            intl: bloomPrime,
            amount: _data.monthlyAmounts[frostPrime.pricePlan],
            currencyCode: _data.currencyCode,
            minorUnitExponent: _data.minorUnitExponent,
          }),
    lunarPrime = UseChromeAndCodeThemeSync,
    mossPrime = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.plan.title",
                defaultMessage: "Your plan",
                description:
                  "Title for the current plan section in usage settings",
              }}
            />
          ),
        }}
      />
    );
  let NorthPrime = UseChromeAndCodeThemeSync,
    orbitPrime = ParseUrlOrFallback,
    pinePrime = EnsurePersonalizationCInit,
    questPrime = ultra(frostPrime.displayPlan),
    ridgePrime =
      knollPrime == null ? null : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.plan.monthlyPrice",
            defaultMessage: "{price}/mo",
            description: "Localized monthly price below the current plan name",
            values: {
              price: knollPrime,
            },
          }}
        />
      );
  let stormPrime = frostPrime.cta === "upgrade" ? "primary" : "outline",
    tidePrime = (cliffPrime) => {
      eaglePrime({
        scope: acornPrime,
        currentPlan: frostPrime.pricePlan,
        event: cliffPrime,
        getPricingUrl: driftPrime,
        source: "usage_settings_plan_row",
      });
    };
  let unityPrime =
    frostPrime.cta === "upgrade" ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.usage.plan.upgrade",
          defaultMessage: "Upgrade plan",
          description: "CTA to open the upgrade plan dialog",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.usage.plan.view",
          defaultMessage: "View plans",
          description: "CTA to open the plan selection dialog",
        }}
      />
    );
  let valePrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: stormPrime,
        size: "toolbar",
        onClick: tidePrime,
        children: unityPrime,
      }}
    />
  );
  let wavePrime = (
    <EnsurePersonalizationCInit
      {...{
        className: "gap-6",
        label: questPrime,
        description: ridgePrime,
        control: valePrime,
      }}
    />
  );
  let apexPrime = (
    <ParseUrlOrFallback
      {...{
        children: wavePrime,
      }}
    />
  );
  let brookPrime = (
    <NorthPrime.Content
      {...{
        children: apexPrime,
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [mossPrime, brookPrime],
      }}
    />
  );
}
function UsageSettingsHelper45(duskPrime) {
  let { plan } = duskPrime,
    elmPrime = DeferredAccountRy(plan);
  let fernPrime = {
    enabled: elmPrime,
  };
  let { data } = AppInitialAx(fernPrime);
  if (!DeferredAccountRy(plan)) return null;
  let grovePrime = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.usage.cancelPlan.title",
              defaultMessage: "Cancel plan",
              description:
                "Title for the cancel plan section in usage settings",
            }}
          />
        ),
      }}
    />
  );
  let hillPrime = AppInitialQv(data);
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          grovePrime,
          <UseChromeAndCodeThemeSync.Content
            {...{
              className: "text-sm text-token-text-secondary",
              children: (
                <p>
                  {
                    <UsageSettingsHelper46
                      {...{
                        platform: hillPrime,
                      }}
                    />
                  }
                </p>
              ),
            }}
          />,
        ],
      }}
    />
  );
}
function UsageSettingsHelper46(islePrime) {
  let { platform } = islePrime,
    juniperPrime =
      platform === "ios"
        ? HELP_OPENAI_COM_EN_ARTICLES_7905690_HOW_TO_CANCEL_YOUR_APPLE_SUBSCRIPTION_FOR_CHATGPT_IN_THE_CHATGPT_IOS_APP_URL
        : platform === "android"
          ? mobileClientIdToStorePlatform
          : CHATGPT_COM_URL,
    lagoonPrime = (nestPrime) => (
      <a
        className="cursor-interaction text-token-text-link-foreground"
        href={juniperPrime}
        target="_blank"
        rel="noreferrer"
        onClick={(oakPrime) => vapor(oakPrime, juniperPrime)}
      >
        {nestPrime}
      </a>
    );
  let meadowPrime = lagoonPrime;
  switch (platform) {
    case null: {
      let petalPrime;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.cancelPlan.webDescription",
            defaultMessage:
              "Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan",
            description:
              "Description shown when a ChatGPT-managed subscription can be canceled through web billing settings",
            values: {
              cancel: meadowPrime,
            },
          }}
        />
      );
    }
    case "ios": {
      let quietPrime;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.cancelPlan.appleDescription",
            defaultMessage:
              "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
            description:
              "Description shown when an Apple-managed subscription must be canceled through iOS",
            values: {
              cancel: meadowPrime,
            },
          }}
        />
      );
    }
    case "android": {
      let rainPrime;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.cancelPlan.googlePlayDescription",
            defaultMessage:
              "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
            description:
              "Description shown when a Google Play-managed subscription must be canceled through Android",
            values: {
              cancel: meadowPrime,
            },
          }}
        />
      );
    }
  }
}
function ultra(seedPrime) {
  switch (seedPrime) {
    case "free":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.plan.free",
            defaultMessage: "Free plan",
            description: "Name of the Free plan in usage settings",
          }}
        />
      );
    case "go":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.plan.go",
            defaultMessage: "Go plan",
            description: "Name of the Go plan in usage settings",
          }}
        />
      );
    case "plus":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.plan.plus",
            defaultMessage: "Plus plan",
            description: "Name of the Plus plan in usage settings",
          }}
        />
      );
    case "pro":
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.plan.pro",
            defaultMessage: "Pro plan",
            description: "Name of the Pro plan in usage settings",
          }}
        />
      );
  }
}
function vapor(trailPrime, urnPrime) {
  deferredUiEnt({
    event: trailPrime,
    href: urnPrime,
    initiator: "open_in_browser_bridge",
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
  return (
    (vinePrime = {
      queryKey: eagle,
      queryFn: acorn,
      staleTime: readScrollTop.ONE_MINUTE,
      refetchOnWindowFocus: false,
      retry: false,
    }),
    useQuery(vinePrime)
  );
}
function acorn() {
  return decodeBase64ToBytes.safeGet("/wham/usage/daily-token-usage-breakdown");
}
function bloom(windPrime) {
  let { enabled } = windPrime,
    yarrowPrime;
  return (
    (yarrowPrime = {
      queryKey: frost,
      queryFn: coral,
      enabled,
      staleTime: readScrollTop.ONE_MINUTE,
      refetchOnWindowFocus: false,
      retry: false,
    }),
    useQuery(yarrowPrime)
  );
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
  let { showCreditHistory } = azurePrime,
    birchPrime = or(),
    canyonPrime = {
      enabled: showCreditHistory,
    };
  let dewPrime = bloom(canyonPrime),
    [everPrime, fieldPrime] = jewel.useState(0),
    grainPrime = dewPrime.data?.data ?? [];
  let havenPrime = grainPrime,
    inkPrime = Math.max(1, Math.ceil(havenPrime.length / lunar)),
    jadeitePrime = Math.min(everPrime, inkPrime - 1),
    kernelPrime = dewPrime.data?.data.slice(
      jadeitePrime * lunar,
      (jadeitePrime + 1) * lunar,
    );
  let leafPrime = kernelPrime,
    maplePrime = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.daily.title",
                defaultMessage: "Daily usage",
                description: "Title for daily usage in usage settings",
              }}
            />
          ),
          subtitle: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.daily.subtitle",
                defaultMessage:
                  "Usage data is approximate and may be delayed by up to 6 hours",
                description: "Description for daily usage in usage settings",
              }}
            />
          ),
        }}
      />
    );
  let nimbusPrime = birchPrime.data?.data,
    opalPrime,
    plumePrime;
  opalPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.daily.empty",
        defaultMessage: "No daily usage recorded yet",
        description: "Empty state for daily usage",
      }}
    />
  );
  plumePrime = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.daily.error",
        defaultMessage: "Could not load daily usage",
        description: "Error state for daily usage",
      }}
    />
  );
  let quillowPrime = () => {
    birchPrime.refetch();
  };
  let rootPrime = (uplandPrime) =>
    moss.flatMap((item) => {
      let vistaPrime = uplandPrime.product_surface_usage_values[item];
      return vistaPrime == null
        ? []
        : [
            <EnsurePersonalizationCInit
              key={`${uplandPrime.date}-${item}`}
              {...{
                label: (
                  <_r
                    {...{
                      date: uplandPrime.date,
                    }}
                  />
                ),
                description: (
                  <MemoizedFormattedMessage
                    {...{
                      ...north[item],
                    }}
                  />
                ),
                control: (
                  <UsageSettingsHelper55
                    {...{
                      units: birchPrime.data?.units,
                      value: vistaPrime,
                    }}
                  />
                ),
              }}
            />,
          ];
    });
  let silkPrime = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          maplePrime,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <UsageSettingsHelper54
                        {...{
                          data: nimbusPrime,
                          emptyMessage: opalPrime,
                          errorMessage: plumePrime,
                          isError: birchPrime.isError,
                          isLoading: birchPrime.isLoading,
                          onRetry: quillowPrime,
                          renderRow: rootPrime,
                        }}
                      />
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
  let thornPrime = showCreditHistory ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.usage.creditHistory.title",
                    defaultMessage: "Credit usage history",
                    description: "Title for credit usage history",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [
                      <UsageSettingsHelper54
                        {...{
                          data: leafPrime,
                          emptyMessage: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.usage.creditHistory.empty",
                                defaultMessage: "No credit usage recorded yet",
                                description:
                                  "Empty state for credit usage history",
                              }}
                            />
                          ),
                          errorMessage: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.usage.creditHistory.error",
                                defaultMessage:
                                  "Could not load credit usage history",
                                description:
                                  "Error state for credit usage history",
                              }}
                            />
                          ),
                          isError: dewPrime.isError,
                          isLoading: dewPrime.isLoading,
                          onRetry: () => {
                            dewPrime.refetch();
                          },
                          renderRow: honey,
                        }}
                      />,
                      havenPrime.length > lunar ? (
                        <EnsurePersonalizationCInit
                          {...{
                            label: (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.usage.creditHistory.range",
                                  defaultMessage:
                                    "{from}-{to} of {total} usage events",
                                  description:
                                    "Pagination summary for credit usage history",
                                  values: {
                                    from: jadeitePrime * lunar + 1,
                                    to: Math.min(
                                      (jadeitePrime + 1) * lunar,
                                      havenPrime.length,
                                    ),
                                    total: havenPrime.length,
                                  },
                                }}
                              />
                            ),
                            control: (
                              <div className="flex gap-2">
                                {
                                  <ReadLoginRouteQuerySnapshot
                                    {...{
                                      color: "secondary",
                                      disabled: jadeitePrime === 0,
                                      size: "toolbar",
                                      onClick: () => {
                                        fieldPrime(jadeitePrime - 1);
                                      },
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "settings.usage.creditHistory.previous",
                                            defaultMessage: "Previous",
                                            description:
                                              "Previous credit usage history page button",
                                          }}
                                        />
                                      ),
                                    }}
                                  />
                                }
                                {
                                  <ReadLoginRouteQuerySnapshot
                                    {...{
                                      color: "secondary",
                                      disabled: jadeitePrime === inkPrime - 1,
                                      size: "toolbar",
                                      onClick: () => {
                                        fieldPrime(jadeitePrime + 1);
                                      },
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "settings.usage.creditHistory.next",
                                            defaultMessage: "Next",
                                            description:
                                              "Next credit usage history page button",
                                          }}
                                        />
                                      ),
                                    }}
                                  />
                                }
                              </div>
                            ),
                          }}
                        />
                      ) : null,
                    ],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  return (
    <>
      {silkPrime}
      {thornPrime}
    </>
  );
}
