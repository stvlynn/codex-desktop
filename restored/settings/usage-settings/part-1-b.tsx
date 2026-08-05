// Restored from ref/webview/assets/usage-settings-1b4YOoJ0.js
// Wave FX — full polished body from `usage-settings-1b4YOoJ0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 113/151).
// Careful split 1/4
/* split-lane-import-depth:1 */

// Lane b of 2 — split of part-1.tsx at top-level declaration boundaries.
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
const copper: any = undefined;
const on: any = undefined;

function UsageSettingsHelper14(nozzle) {
  let {
      open,
      serverState,
      creditDetails,
      enableAutoTopUpMutation,
      updateAutoTopUpMutation,
      disableAutoTopUpMutation,
      onOpenChange,
    } = nozzle,
    platen = CodexPluginActionType(appScopeAtom),
    ratchet = useIntl(),
    shim = AppIconAlt(),
    tappet = CREDIT_RECHARGE_TARGET_OPTIONS(),
    arbor = {
      enabled: open,
    };
  let { data, isPending } = AppInitialQb(arbor),
    bushing = isPending
      ? undefined
      : (data ?? shim.getContext().user?.country ?? null);
  let collar = bushing,
    dowel = {
      billingCurrency: collar,
      enabled: open,
    };
  let { data: _data, isPending: _isPending } = AppInitialB(dowel),
    flange = isPending || _isPending,
    gib = lotus.useId(),
    hub = lotus.useId(),
    idler = lotus.useId(),
    jig = lotus.useId(),
    keeper =
      enableAutoTopUpMutation.isPending || updateAutoTopUpMutation.isPending,
    lug = disableAutoTopUpMutation.isPending,
    mandrel = keeper || lug,
    [nipple, orifice] = lotus.useState(null),
    [pin, race] = lotus.useState(false),
    sleeve = (diaphragm) => {
      platen.get(toastAtom).danger(hazel(diaphragm, ratchet), nova);
    };
  let trunnion = sleeve,
    boss = (elbow) => {
      platen.get(toastAtom).success(ivory(elbow, ratchet), nova);
    };
  let cam = boss,
    detent = () => {
      race(false);
      orifice(null);
    };
  let eccentric = detent,
    follower = (ferrule) => {
      let { draftState } = ferrule;
      race(true);
      orifice(
        yellow({
          intl: ratchet,
          creditBalance: creditDetails?.balance,
          rechargeThreshold: draftState.rechargeThreshold,
          rechargeTarget: draftState.rechargeTarget,
          pricingInfo: _data,
        })?.amount ?? null,
      );
    };
  let guide = follower,
    helix = ["usage-settings", "auto-top-up", "manage-payment"];
  let impeller = {
    mutationKey: helix,
    mutationFn: quartz,
    onSuccess: pearl,
    onError: () => {
      platen.get(toastAtom).danger(
        ratchet.formatMessage({
          id: "settings.usage.autoTopUp.managePayment.error",
          defaultMessage:
            "Unable to open payment settings right now. Please try again.",
          description:
            "Error shown when opening the manage payment flow from the auto top up settings dialog fails",
        }),
        nova,
      );
    },
  };
  let journal = noop(impeller),
    _e = () => {
      journal.isPending || journal.mutate();
    };
  let kingpin = _e,
    land = serverState.rechargeThreshold ?? olive,
    be = serverState.rechargeTarget ?? prism,
    mesh = {
      isEnabled: true,
      rechargeThreshold: land,
      rechargeTarget: be,
    };
  let neck = {
    onChange: _n,
    onSubmit: onyx,
  };
  let pad = async (grommet) => {
    let { value } = grommet,
      header = copper({
        draftState: value,
        serverState,
        isSaving: mandrel,
      });
    if (header.isSaveEnabled)
      switch (header.saveIntent) {
        case "disable":
        case "none":
          return;
        case "enable":
          try {
            if (
              (eccentric(),
              AppInitialDx(
                (await enableAutoTopUpMutation.mutateAsync(jasper(value)))
                  .immediate_top_up_status,
              ))
            ) {
              guide({
                draftState: value,
              });
              return;
            }
            cam("enable");
            onOpenChange(false);
          } catch {
            trunnion("enable");
          }
          return;
        case "update":
          try {
            if (
              (eccentric(),
              AppInitialDx(
                (await updateAutoTopUpMutation.mutateAsync(jasper(value)))
                  .immediate_top_up_status,
              ))
            ) {
              guide({
                draftState: value,
              });
              return;
            }
            cam("update");
            onOpenChange(false);
          } catch {
            trunnion("update");
          }
          return;
      }
  };
  let quillshaft = {
    defaultValues: mesh,
    validators: neck,
    onSubmit: pad,
  };
  let Roller = useTanstackForm(quillshaft),
    spindle = (injector) => {
      (mandrel && !injector) ||
        (injector || eccentric(), onOpenChange(injector));
    };
  let thrust = spindle,
    yoke = async () => {
      if (serverState.isEnabled)
        try {
          await disableAutoTopUpMutation.mutateAsync();
          cam("disable");
          onOpenChange(false);
        } catch {
          trunnion("disable");
        }
    };
  let baffle = yoke,
    capstan = (jumper) => {
      let { values, submissionAttempts } = jumper,
        kerf = copper({
          draftState: values,
          serverState,
          isSaving: mandrel,
        }),
        louver = yellow({
          intl: ratchet,
          creditBalance: creditDetails?.balance,
          rechargeThreshold: values.rechargeThreshold,
          rechargeTarget: values.rechargeTarget,
          pricingInfo: _data,
        }),
        manifold =
          !pin &&
          louver != null &&
          (kerf.saveIntent === "enable" || kerf.saveIntent === "update")
            ? {
                saveIntent: kerf.saveIntent,
                amount: louver.amount,
                creditCount: louver.creditCount,
              }
            : null;
      return (
        <UsePointerSurfaceInteractionGate
          {...{
            open,
            size: "default",
            contentClassName: "w-[536px] max-w-[calc(100vw-2rem)]",
            contentProps: {
              "aria-describedby": hub,
              onOpenAutoFocus: marble,
            },
            shouldIgnoreClickOutside: mandrel,
            onOpenChange: thrust,
            children: (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  Roller.handleSubmit();
                }}
              >
                {
                  <DeferredUiB
                    {...{
                      className: "gap-0 px-6 py-6",
                      children: [
                        <RealtimeVoiceHostId
                          {...{
                            asChild: true,
                            children: (
                              <h2 id={gib} className="sr-only">
                                {ratchet.formatMessage({
                                  id: "settings.usage.autoTopUp.dialog.title",
                                  defaultMessage: "Auto-reload credits",
                                  description:
                                    "Title for the auto top up settings dialog",
                                })}
                              </h2>
                            ),
                          }}
                        />,
                        <p id={hub} className="sr-only">
                          {ratchet.formatMessage({
                            id: "settings.usage.autoTopUp.dialog.description",
                            defaultMessage:
                              "OpenAI will charge your payment method automatically when you reach your minimum balance.",
                            description:
                              "Description shown below the inputs in the auto top up settings dialog",
                          })}
                        </p>,
                        <DeferredUiU
                          {...{
                            children: (
                              <DeferredUiH
                                {...{
                                  title: (
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "settings.usage.autoTopUp.dialog.title",
                                        defaultMessage: "Auto-reload credits",
                                        description:
                                          "Title for the auto top up settings dialog",
                                      }}
                                    />
                                  ),
                                }}
                              />
                            ),
                          }}
                        />,
                        <DeferredUiU
                          {...{
                            className: "gap-5",
                            children: [
                              <Roller.Field
                                {...{
                                  name: "rechargeThreshold",
                                  children: (nip) => {
                                    let outlet =
                                      submissionAttempts > 0 ||
                                      nip.state.meta.isBlurred
                                        ? amber(nip.state.meta.errors)
                                        : null;
                                    return (
                                      <UsageSettingsHelper27
                                        {...{
                                          id: idler,
                                          label: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.threshold.label",
                                                defaultMessage:
                                                  "Minimum balance",
                                                description:
                                                  "Label for the auto top up threshold input in the dialog",
                                              }}
                                            />
                                          ),
                                          value: nip.state.value,
                                          placeholder: "125",
                                          disabled: mandrel,
                                          hasError: outlet != null,
                                          helperText: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.threshold.helper",
                                                defaultMessage:
                                                  "Auto reload triggers when your credit balance goes below this amount.",
                                                description:
                                                  "Helper text shown below the minimum balance input in the auto top up dialog",
                                              }}
                                            />
                                          ),
                                          footerContent: ember({
                                            fieldError: outlet,
                                            fieldName: "threshold",
                                            intl: ratchet,
                                          }),
                                          footerTone: "error",
                                          ariaLabel: ratchet.formatMessage({
                                            id: "settings.usage.autoTopUp.threshold.ariaLabel",
                                            defaultMessage:
                                              "Auto-reload minimum balance",
                                            description:
                                              "Aria label for the auto top up threshold input",
                                          }),
                                          onBlur: nip.handleBlur,
                                          onChange: (packing) => {
                                            eccentric();
                                            nip.handleChange(packing);
                                          },
                                        }}
                                      />
                                    );
                                  },
                                }}
                              />,
                              <Roller.Field
                                {...{
                                  name: "rechargeTarget",
                                  children: (reducer) => {
                                    let strainer =
                                        submissionAttempts > 0 ||
                                        reducer.state.meta.isBlurred
                                          ? basalt(reducer.state.meta.errors)
                                          : null,
                                      tee = xenon({
                                        intl: ratchet,
                                        rechargeThreshold:
                                          values.rechargeThreshold,
                                        rechargeTarget: reducer.state.value,
                                        pricingInfo: _data,
                                      });
                                    return (
                                      <UsageSettingsHelper27
                                        {...{
                                          id: jig,
                                          label: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.target.label",
                                                defaultMessage:
                                                  "Target balance",
                                                description:
                                                  "Label for the auto top up target balance input in the dialog",
                                              }}
                                            />
                                          ),
                                          value: reducer.state.value,
                                          placeholder: "250",
                                          disabled: mandrel,
                                          hasError: strainer != null,
                                          helperText: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.target.helper",
                                                defaultMessage:
                                                  "Auto reload brings your credit balance back up to this amount.",
                                                description:
                                                  "Helper text shown below the target balance input in the auto top up dialog",
                                              }}
                                            />
                                          ),
                                          footerContent:
                                            strainer == null ? (
                                              flange ? (
                                                <UsageSettingsHelper28
                                                  {...{
                                                    intl: ratchet,
                                                  }}
                                                />
                                              ) : tee == null ? null : (
                                                <MemoizedFormattedMessage
                                                  {...{
                                                    id: "settings.usage.autoTopUp.target.equivalent",
                                                    defaultMessage:
                                                      "Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>",
                                                    description:
                                                      "Message shown below the target balance input with the estimated minimum billing amount",
                                                    values: {
                                                      creditCount:
                                                        tee.creditCount,
                                                      amount: tee.amount,
                                                      strong: lemon,
                                                    },
                                                  }}
                                                />
                                              )
                                            ) : (
                                              ember({
                                                fieldError: strainer,
                                                fieldName: "target",
                                                intl: ratchet,
                                              })
                                            ),
                                          footerTone:
                                            strainer == null
                                              ? "secondary"
                                              : "error",
                                          ariaLabel: ratchet.formatMessage({
                                            id: "settings.usage.autoTopUp.target.ariaLabel",
                                            defaultMessage:
                                              "Auto-reload target balance",
                                            description:
                                              "Aria label for the auto top up target balance input",
                                          }),
                                          onBlur: reducer.handleBlur,
                                          onChange: (union) => {
                                            eccentric();
                                            reducer.handleChange(union);
                                          },
                                        }}
                                      />
                                    );
                                  },
                                }}
                              />,
                              <div className="text-sm leading-5 text-token-text-secondary">
                                {
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.usage.autoTopUp.dialog.description",
                                      defaultMessage:
                                        "OpenAI will charge your payment method automatically when you reach your minimum balance.",
                                      description:
                                        "Description shown below the inputs in the auto top up settings dialog",
                                    }}
                                  />
                                }
                              </div>,
                              manifold == null ? null : (
                                <UsageSettingsHelper21
                                  {...{
                                    saveIntent: manifold.saveIntent,
                                    amount: manifold.amount,
                                    creditCount: manifold.creditCount,
                                  }}
                                />
                              ),
                              pin ? (
                                <UsageSettingsHelper24
                                  {...{
                                    amount: nipple,
                                    isManagePaymentPending: journal.isPending,
                                    onManagePaymentClick: kingpin,
                                    onPurchaseCreditClick: (event) => {
                                      let vent = AppInitialDy(shim, "personal");
                                      event.preventDefault();
                                      CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(
                                        platen,
                                        {
                                          audience: "personal",
                                          checkoutKind: "standalone_credit",
                                          entryPoint:
                                            "auto_top_up_failure_banner",
                                        },
                                      );
                                      tappet({
                                        event,
                                        intent: "purchase",
                                        forceOneTimePurchase: true,
                                        hasSavedPaymentMethod: Object.is(
                                          serverState.paymentMethod,
                                          null,
                                        )
                                          ? false
                                          : undefined,
                                        isAutoReloadEnabled:
                                          serverState.isEnabled,
                                        isCustomCheckoutEnabled: vent,
                                        legacyUrl: quill,
                                        source: "auto_top_up_failure_banner",
                                      });
                                      onOpenChange(false);
                                    },
                                  }}
                                />
                              ) : null,
                            ],
                          }}
                        />,
                        <DeferredUiU
                          {...{
                            className: "pt-7",
                            children: (
                              <SetRemoteControlEnabledForHost
                                {...{
                                  children: [
                                    serverState.isEnabled ? (
                                      <ReadLoginRouteQuerySnapshot
                                        {...{
                                          color: "outline",
                                          className: sage,
                                          loading: lug,
                                          disabled: mandrel,
                                          onClick: () => {
                                            baffle();
                                          },
                                          children: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.disable",
                                                defaultMessage: "Turn off",
                                                description:
                                                  "Button label to disable auto top up",
                                              }}
                                            />
                                          ),
                                        }}
                                      />
                                    ) : (
                                      <ReadLoginRouteQuerySnapshot
                                        {...{
                                          color: "outline",
                                          className: sage,
                                          disabled: mandrel,
                                          onClick: () => {
                                            onOpenChange(false);
                                          },
                                          children: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.usage.autoTopUp.cancel",
                                                defaultMessage: "Cancel",
                                                description:
                                                  "Button label to close the auto top up dialog without saving",
                                              }}
                                            />
                                          ),
                                        }}
                                      />
                                    ),
                                    <ReadLoginRouteQuerySnapshot
                                      {...{
                                        color: "primary",
                                        type: "submit",
                                        className: sage,
                                        loading: keeper,
                                        disabled: !kerf.isSaveEnabled,
                                        children: serverState.isEnabled ? (
                                          <MemoizedFormattedMessage
                                            {...{
                                              id: "settings.usage.autoTopUp.save",
                                              defaultMessage: "Save",
                                              description:
                                                "Button label to save auto top up settings",
                                            }}
                                          />
                                        ) : (
                                          <MemoizedFormattedMessage
                                            {...{
                                              id: "settings.usage.autoTopUp.enable",
                                              defaultMessage: "Turn on",
                                              description:
                                                "Button label to enable auto top up",
                                            }}
                                          />
                                        ),
                                      }}
                                    />,
                                  ],
                                }}
                              />
                            ),
                          }}
                        />,
                      ],
                    }}
                  />
                }
              </form>
            ),
          }}
        />
      );
    };
  return (
    <Roller.Subscribe
      {...{
        selector: nickel,
        children: capstan,
      }}
    />
  );
}
function lemon(wye) {
  return <span className="font-medium text-token-text-primary">{wye}</span>;
}
function marble(event) {
  event.preventDefault();
}
function nickel(zener) {
  return {
    values: zener.values,
    submissionAttempts: zener.submissionAttempts,
  };
}
function onyx(alphaPrime) {
  let { value } = alphaPrime;
  return zinc(value);
}
function _n(bravoPrime) {
  let { value } = bravoPrime;
  return zinc(value);
}
function pearl(copperPrime) {
  PdfPermissionFlag({
    href: copperPrime.url,
    initiator: "open_in_browser_bridge",
  });
}
async function quartz() {
  return await decodeBase64ToBytes.safeGet("/payments/customer_portal");
}
