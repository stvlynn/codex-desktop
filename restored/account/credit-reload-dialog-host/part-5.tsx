// Restored from ref/webview/assets/credit-reload-dialog-host-ZAUlRfjE.js
// Wave FZ — full polished body from `credit-reload-dialog-host-ZAUlRfjE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 76/99).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/7
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
const Queued: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const _t: any = undefined;
const $e: any = undefined;
const AppInitialAy: any = undefined;
const AppInitialCt: any = undefined;
const AppInitialCy: any = undefined;
const AppInitialDx: any = undefined;
const AppInitialDy: any = undefined;
const AppInitialMy: any = undefined;
const AppInitialNy: any = undefined;
const AppInitialPy: any = undefined;
const AppInitialTy: any = undefined;
const _T: any = undefined;
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
const Jade: any = undefined;
const Kite: any = undefined;
const Lemon: any = undefined;
const Marble: any = undefined;
const Nickel: any = undefined;
const Onyx: any = undefined;
const Pearl: any = undefined;
const Quartz: any = undefined;
const River: any = undefined;
const deferredUiU: any = undefined;
const queued: any = undefined;
function slate(timber) {
  let {
      source,
      variant,
      serverState,
      discountOffer,
      isDiscountOfferPending,
      isDiscountOfferError,
      isDiscountOfferFetching,
      creditDetails,
      pricingInfo,
      enableAutoTopUpMutation: umbra,
      updateAutoTopUpMutation,
      disableAutoTopUpMutation,
      onRetryDiscountOffer,
      onOpenChange,
      dialogDescriptionId
    } = timber,
    violet = CodexPluginActionType(appScopeAtom),
    {
      email
    } = useAuth(),
    willow = AppIconAlt(),
    xenon = appendLoginHintToPurchaseUrl(),
    yellow = useIntl(),
    zinc = CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL({
      isEnabled: serverState.isEnabled,
      offer: discountOffer,
      policy: serverState.autoReloadCreditDiscountPolicy
    }),
    amber = variant === "add-credits" ? DEVELOPERS_OPENAI_COM_CODEX_IDE_URL(serverState) : DEVELOPERS_OPENAI_COM_CODEX_CONCEPTS_SANDBOXING_AUTO_REVIEW_URL({
      serverState,
      discountExperience: zinc
    }),
    basalt = variant !== "add-credits" && zinc.kind !== "legacy" ? trimOptionalString(serverState.rechargeThreshold ?? "") || "125" : DEVELOPERS_OPENAI_COM_CODEX_APP_LOCAL_ENVIRONMENTS_URL(serverState),
    cedar = variant !== "add-credits" && zinc.kind !== "legacy" ? trimOptionalString(serverState.rechargeMonthlyLimit ?? "") : AppInitialAy(serverState),
    daisy = variant !== "add-credits" && zinc.kind !== "legacy",
    [ember, flint] = quartz.useState(amber),
    [garnet, hazel] = quartz.useState(onyx(amber) ? "preset" : "custom"),
    [ivory, jasper] = quartz.useState(basalt),
    [kelp, lotus] = quartz.useState(cedar),
    mint = () => variant !== "add-credits" || !AppInitialCt(willow, "2317709095");
  let [nova, olive] = quartz.useState(mint),
    [prism, quill] = quartz.useState(false),
    [reef, _e] = quartz.useState(daisy && AppInitialTy({
      minimumBalance: basalt,
      targetBalance: amber
    }) != null),
    sage = daisy && AppInitialDy(basalt) != null;
  let [be, topaz] = quartz.useState(sage),
    [ultra, vapor] = quartz.useState(daisy && AppInitialMy({
      monthlyLimit: cedar,
      targetBalance: amber
    }) != null),
    [wheat, yarn] = quartz.useState(false),
    [zephyr, acorn] = quartz.useState(false),
    [bloom, coral] = quartz.useState(false),
    [drift, eagle] = quartz.useState(false),
    [frost, glide] = quartz.useState(null),
    [honey, iris] = quartz.useState(false),
    [jewel, knoll] = quartz.useState(false),
    lunar = quartz.useRef(null),
    moss = umbra.isPending || updateAutoTopUpMutation.isPending,
    north = disableAutoTopUpMutation.isPending,
    orbit = moss || north,
    pine = variant === "add-credits" && !nova,
    quest = variant !== "add-credits" && zinc.kind !== "legacy" ? zinc : null,
    ridge = quest != null,
    storm = variant === "setup-auto-reload" && !serverState.isEnabled && (isDiscountOfferPending || isDiscountOfferError),
    tide = quest == null ? null : DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL({
      tiers: quest.tiers,
      targetBalance: ember,
      minimumBalance: ivory
    }),
    $e = quest?.presentation === "boost" ? quest.additionalDiscountPercent : tide,
    unity = wheat ? "invalid-currency-amount" : pine ? AppInitialPy({
      value: ember,
      pricingInfo
    }) : AppInitialTy({
      minimumBalance: ivory,
      targetBalance: ember
    });
  let vale = unity,
    wave = zephyr ? "invalid-currency-amount" : AppInitialDy(ivory);
  let apex = wave,
    At = bloom ? "invalid-currency-amount" : AppInitialMy({
      monthlyLimit: kelp,
      targetBalance: ember
    });
  let brook = At,
    cliff,
    dusk;
  cliff = zephyr || bloom ? null : DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL({
    minimumBalance: ivory,
    targetBalance: ember,
    monthlyLimit: kelp
  });
  dusk = AppInitialCy({
    isEnabled: true,
    serverState,
    savePayload: cliff
  });
  let elm = dusk,
    fern = orbit || (pine ? vale != null : elm == null || storm),
    grove = orbit || elm == null || storm,
    hill = () => {
      eagle(false);
      glide(null);
    };
  let isle = hill,
    juniper = ["usage-settings", "credit-reload", "manage-payment"];
  let lagoon = {
    mutationKey: juniper,
    mutationFn: harbor,
    onSuccess: gamma,
    onError: () => {
      violet.get(toastAtom).danger(yellow.formatMessage({
        id: "settings.usage.creditReload.managePayment.error",
        defaultMessage: "Unable to open payment settings right now. Please try again",
        description: "Error shown when opening the manage payment flow from the combined reload dialog fails"
      }), river);
    }
  };
  let meadow = noop(lagoon),
    nest = async () => {
      if (_e(true), pine) {
        vale ?? marble({
          autoTopUpEnabled: prism ? false : undefined,
          scope: violet,
          source,
          email,
          quantity: ember,
          onOpenChange,
          statsigClient: willow,
          tryOpenEmbeddedCreditCheckout: xenon
        });
        return;
      }
      if (topaz(true), vapor(true), !(elm == null || cliff == null || orbit || storm)) try {
        isle();
        let haven = findProcessManagerRow({
          discountOffer: variant === "setup-auto-reload" ? discountOffer : null,
          isEnablingAutoReload: elm === "enable",
          payload: cliff
        });
        if (elm === "enable" && (variant === "add-credits" || !ridge) && marble({
          scope: violet,
          source,
          email,
          quantity: ember,
          onOpenChange,
          statsigClient: willow,
          tryOpenEmbeddedCreditCheckout: xenon,
          fallbackToExternal: false,
          postCreditPurchaseAction: {
            kind: "enable-auto-reload",
            payload: haven,
            source
          }
        })) return;
        let ink = elm === "enable" ? await umbra.mutateAsync(haven) : await updateAutoTopUpMutation.mutateAsync(cliff);
        if (logProductEvent(violet, CODEX_ONBOARDING_STARTER_PROMPT_SELECTED_TYPE, {
          action: elm,
          source
        }), AppInitialDx(ink.immediate_top_up_status)) {
          eagle(true);
          glide(formatCreditReloadShortfallCost({
            intl: yellow,
            creditBalance: creditDetails?.balance,
            rechargeTarget: cliff.recharge_target,
            pricingInfo
          }));
          return;
        }
        nickel({
          scope: violet,
          intl: yellow,
          intent: elm,
          kind: "success"
        });
        onOpenChange(false);
      } catch {
        nickel({
          scope: violet,
          intl: yellow,
          intent: elm,
          kind: "danger"
        });
      }
    };
  let oak = nest,
    petal = async () => {
      try {
        await disableAutoTopUpMutation.mutateAsync();
        logProductEvent(violet, CODEX_ONBOARDING_STARTER_PROMPT_SELECTED_TYPE, {
          action: "disable",
          source
        });
        nickel({
          scope: violet,
          intl: yellow,
          intent: "disable",
          kind: "success"
        });
        onOpenChange(false);
      } catch {
        nickel({
          scope: violet,
          intl: yellow,
          intent: "disable",
          kind: "danger"
        });
      }
    };
  let quiet = petal;
  if (honey && zinc.kind === "active") {
    let jadeite = () => {
      iris(false);
      knoll(true);
    };
    let kernel = () => {
      quiet();
    };
    let leaf;
    return <Alpha {...{
      dialogDescriptionId,
      additionalDiscountPercent: zinc.additionalDiscountPercent,
      isDisablePending: north,
      onKeepEnabled: jadeite,
      onTurnOff: kernel
    }} />;
  }
  let rain, seed, trail;
  bb0: switch (variant) {
    case "add-credits":
      {
        let maple;
        maple = <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.addCredits.title",
          defaultMessage: "Add credits",
          description: "Title for the add credits modal"
        }} />;
        rain = maple;
        let nimbus;
        nimbus = <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.addCredits.description",
          defaultMessage: "Credits power Codex. Valid for 12 months. <link>View rate card</link>",
          description: "Description for the add credits modal",
          values: {
            link: falcon
          }
        }} />;
        seed = nimbus;
        let opal;
        opal = <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.addCredits.screenReaderDescription",
          defaultMessage: "Credits power Codex. Valid for 12 months. View rate card",
          description: "Screen reader description for the add credits modal"
        }} />;
        trail = opal;
        break bb0;
      }
    case "setup-auto-reload":
      {
        let plume;
        plume = ridge ? <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.offer.title",
          defaultMessage: "Auto-reload",
          description: "Title for the promotional auto reload modal shown to a user with a server-authorized discount offer"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.setup.title",
          defaultMessage: "Set up auto-reload",
          description: "Title for the auto reload setup modal"
        }} />;
        rain = plume;
        let quillow;
        quillow = ridge ? <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.offer.description.v2",
          defaultMessage: "Automatically purchase credits when you’re running low",
          description: "Description in the promotional auto reload modal explaining what auto reload does"
        }} /> : <Bravo {...{
          intl: yellow,
          targetBalance: ember,
          minimumBalance: ivory,
          monthlyLimit: kelp,
          pricingInfo
        }} />;
        seed = quillow;
        let root;
        root = ridge ? seed : <Bravo {...{
          intl: yellow,
          targetBalance: ember,
          minimumBalance: ivory,
          monthlyLimit: kelp,
          pricingInfo,
          rateCardLinkMode: "text"
        }} />;
        trail = root;
        break bb0;
      }
    case "manage-auto-reload":
      {
        let silk;
        silk = <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.manage.title",
          defaultMessage: "Manage auto-reload",
          description: "Title for the auto reload management modal"
        }} />;
        rain = silk;
        let thorn;
        thorn = ridge ? <MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.offer.description.v2",
          defaultMessage: "Automatically purchase credits when you’re running low",
          description: "Description in the promotional auto reload modal explaining what auto reload does"
        }} /> : <Bravo {...{
          intl: yellow,
          targetBalance: ember,
          minimumBalance: ivory,
          monthlyLimit: kelp,
          pricingInfo
        }} />;
        seed = thorn;
        let upland;
        upland = ridge ? seed : <Bravo {...{
          intl: yellow,
          targetBalance: ember,
          minimumBalance: ivory,
          monthlyLimit: kelp,
          pricingInfo,
          rateCardLinkMode: "text"
        }} />;
        trail = upland;
      }
  }
  let urn = () => {
    onOpenChange(false);
  };
  let vine = () => {
    if (zinc.kind === "active") {
      iris(true);
      return;
    }
    quiet();
  };
  let wind = <Copper {...{
    variant,
    isOneTimeAddCreditsPurchase: pine,
    isSavePending: moss,
    isDisablePending: north,
    isActionPending: orbit,
    isAddCreditsSubmitDisabled: fern,
    isAutoReloadSettingsSubmitDisabled: grove,
    isDiscountedAutoReloadExperience: ridge,
    isDiscountOfferPending,
    shouldFocusTurnOff: jewel,
    onBack: urn,
    onTurnOff: vine
  }} />;
  let yarrow = <Delta {...{
    intl: yellow,
    creditDetails,
    pricingInfo,
    actions: wind
  }} />;
  let azure = () => {
    oak();
  };
  let birch = quest != null && $e != null ? <Echo {...{
    isActive: quest.kind === "active",
    presentation: quest.presentation,
    discountPercent: $e
  }} /> : null;
  let canyon = !serverState.isEnabled && !pine && isDiscountOfferError ? <Falcon {...{
    isRetrying: isDiscountOfferFetching,
    onRetry: onRetryDiscountOffer
  }} /> : null;
  let dew = quest == null ? <Gamma {...{
    intl: yellow,
    value: ember,
    selection: garnet,
    pricingInfo,
    error: reef ? vale : null,
    minimumQuantity: pine ? AppInitialNy(pricingInfo) : 125,
    quantityStep: pine ? 250 : null,
    onChange: vista => {
      isle();
      flint(vista);
    },
    onSelectionChange: wisp => {
      yarn(false);
      hazel(wisp);
    },
    onInvalidCurrencyDraftChange: yarn,
    onBlur: () => {
      _e(true);
    }
  }} /> : null;
  let ever = variant === "add-credits" ? <div className="relative flex min-w-0 items-center gap-3">
        {<Queued {...{
      id: "credit-reload-add-credits-auto-reload",
      className: "!border-token-text-primary data-[state=checked]:!border-token-text-primary data-[state=checked]:!bg-token-text-primary data-[state=checked]:!text-token-main-surface-primary",
      checked: nova,
      disabled: orbit,
      onCheckedChange: yonder => {
        isle();
        quill(nova && !yonder);
        olive(yonder);
      }
    }} />}
        <div className="flex min-w-0 flex-col gap-0.5">
          <label htmlFor="credit-reload-add-credits-auto-reload" className="cursor-interaction text-sm font-medium text-token-text-primary">
            {<MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.checkbox",
          defaultMessage: "Auto-reload",
          description: "Checkbox label for adding auto reload while buying credits"
        }} />}
          </label>
          {nova ? <Harbor {...{
        intl: yellow,
        targetBalance: ember,
        minimumBalance: ivory,
        monthlyLimit: kelp,
        pricingInfo
      }} /> : <p className="text-sm leading-5 text-token-text-secondary">
              {<MemoizedFormattedMessage {...{
          id: "settings.usage.creditReload.autoReload.checkboxDescription",
          defaultMessage: "Automatically add credits when your balance runs low",
          description: "Description for the optional auto reload checkbox in the add credits modal"
        }} />}
            </p>}
        </div>
      </div> : null;
  let field = pine ? null : <Indigo {...{
    intl: yellow,
    minimumBalance: ivory,
    monthlyLimit: kelp,
    pricingInfo,
    isDiscountedAutoReloadExperience: ridge,
    reloadAmountContent: quest == null ? null : <_t {...{
      intl: yellow,
      value: ember,
      minimumBalance: ivory,
      pricingInfo,
      tiers: quest.tiers,
      error: reef ? vale : null,
      disabled: orbit,
      onChange: zenith => {
        isle();
        flint(zenith);
      },
      onInvalidCurrencyDraftChange: yarn,
      onBlur: () => {
        _e(true);
      }
    }} />,
    disabled: orbit,
    minimumBalanceError: be ? apex : null,
    monthlyLimitError: ultra ? brook : null,
    hasImmediateTopUpFailure: drift,
    immediateTopUpFailureAmount: frost,
    isManagePaymentPending: meadow.isPending,
    onMinimumBalanceChange: anvil => {
      if (isle(), ridge) {
        let beacon = Number.parseInt(ivory, 10),
          crag = Number.parseInt(anvil, 10),
          dome = Number.parseInt(ember, 10);
        Number.isFinite(beacon) && Number.isFinite(dome) && (lunar.current = dome - beacon);
        Number.isFinite(crag) && lunar.current != null && flint(String(crag + lunar.current));
      }
      jasper(anvil);
    },
    onInvalidMinimumBalanceCurrencyDraftChange: acorn,
    onMinimumBalanceBlur: () => {
      topaz(true);
      _e(true);
    },
    onMonthlyLimitChange: eddy => {
      isle();
      lotus(eddy);
    },
    onInvalidMonthlyLimitCurrencyDraftChange: coral,
    onMonthlyLimitBlur: () => {
      vapor(true);
    },
    onOpenManagePayment: () => {
      meadow.mutate();
    }
  }} />;
  let grain = <DeferredUiU {...{
    className: "gap-4 pt-4",
    children: [birch, canyon, dew, ever, field]
  }} />;
  return <Jade {...{
    dialogDescriptionId,
    screenReaderTitle: rain,
    screenReaderDescription: trail,
    headerTitle: rain,
    headerSubtitle: seed,
    footer: yarrow,
    onSubmit: azure,
    children: grain
  }} />;
}
