// Restored from ref/webview/assets/upgrade-plan-dialog-CKTSoudj.js
// Wave FY — full polished body from `upgrade-plan-dialog-CKTSoudj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 59/73).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/4
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE } from "../../analytics/codex-upgrade-plan-modal-cta-clicked-type";
import { CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE } from "../../analytics/codex-upgrade-plan-modal-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { normalizeGithubHostname } from "../../conversation/github-hostname";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL, CHATGPT_COM_CODEX_PURCHASE_TEAM_URL } from "../../docs/codex-doc-urls";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconWG } from "../../icons/app-icon-wg";
import { ColorIcon, ensureColorIconInit } from "../../icons/color-icon";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { formatPlanPrice, initPlanPricing } from "../../utils/plan-pricing";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../chatgpt-plan-ids";
import { validateCreditTargetAgainstMinimum } from "../credit-auto-reload-validators";
import { CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS, getCreditsPurchaseMinimumQuantity } from "../credits-purchase-field-validators";
import { DeferredAccountRy } from "../deferred-account-ry";
import { deferredAccountUv } from "../deferred-account-uv";
import { isStartingProcessExpired } from "../is-starting-process-expired";
import { billingSlugToChatGptPlanId, chatGptPlanIdToBillingSlug, ensureChatGptPlanIdInit as ensureChatGptPlanIdInitAlias, ensureSubscriptionPlanSegmentInit, ensureSubscriptionUpdatePlanDialogInit, SubscriptionPlanSegment, SubscriptionUpdatePlanDialog } from "../subscription-update-plan";
import { useCreditAutoReloadSettingsQuery } from "../use-credit-auto-reload-settings-query";
import { useUpgradePlanCopyVariant } from "../use-upgrade-plan-copy-variant";


// Wave5d soft JSX companions.
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Bravo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Delta(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Echo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Falcon(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Gamma(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Harbor(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function IsStartingProcessExpired(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UsePointerSurfaceInteractionGate(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const IntlProvider: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
function upgradePlanDialogUpgradePlanDialog(marble) {
  let {
      currentPlan,
      defaultTab = "personal",
      loadingTargetPlan = null,
      pricingInfo,
      getPlansUrl,
      onCtaClick,
      onOpenChange,
      onOpenUrl,
      open
    } = marble,
    nickel = useIntl(),
    [onyx, pearl] = lemon.useState(defaultTab),
    [quartz, river] = lemon.useState(currentPlan === ChatGptPlanId.PRO ? ChatGptPlanId.PRO : ChatGptPlanId.PROLITE),
    slate = currentPlan === ChatGptPlanId.GO || currentPlan === ChatGptPlanId.PLUS || currentPlan === ChatGptPlanId.PROLITE || currentPlan === ChatGptPlanId.PRO,
    timber = <RealtimeVoiceHostId {...{
      className: "text-lg font-medium",
      children: <MemoizedFormattedMessage {...{
        id: "settings.usage.upgradePlan.title",
        defaultMessage: "Upgrade plan",
        description: "Title for the plan upgrade dialog"
      }} />
    }} />;
  let umbra = <IsStartingProcessExpired {...{
    className: "sr-only",
    children: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.description",
      defaultMessage: "Compare personal and business plans",
      description: "Screen reader description for the plan upgrade dialog"
    }} />
  }} />;
  let violet = nickel.formatMessage({
    id: "settings.usage.upgradePlan.tabs.ariaLabel",
    defaultMessage: "Choose plan category",
    description: "Aria label for the plan category toggle"
  });
  let willow = {
    id: "personal",
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.tabs.personal",
      defaultMessage: "Personal",
      description: "Label for personal plans tab"
    }} />
  };
  let xenon = [willow, {
    id: "business",
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.tabs.business",
      defaultMessage: "Business",
      description: "Label for business plans tab"
    }} />
  }];
  let yellow = <SubscriptionPlanSegment {...{
    ariaLabel: violet,
    className: "w-fit",
    selectedId: onyx,
    onSelect: pearl,
    options: xenon
  }} />;
  let zinc = onyx !== "personal",
    amber = onyx !== "personal" && "invisible pointer-events-none",
    basalt = IntlProvider("col-start-1 row-start-1 grid gap-2.5 md:grid-cols-3", amber);
  let cedar = slate ? null : <Alpha {...{
    currentPlan,
    targetPlan: ChatGptPlanId.FREE,
    price: jade({
      intl: nickel,
      pricingInfo,
      plan: ChatGptPlanId.FREE
    }),
    title: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.free.title",
      defaultMessage: "Free",
      description: "Title for the Free personal plan card"
    }} />,
    features: [{
      icon: <Bravo {...{}} />,
      label: <MemoizedFormattedMessage {...{
        id: "settings.usage.upgradePlan.personal.free.usage",
        defaultMessage: "Limited Codex usage",
        description: "Usage feature on the Free personal plan card"
      }} />
    }, {
      icon: <Copper {...{}} />,
      label: <MemoizedFormattedMessage {...{
        id: "settings.usage.upgradePlan.personal.free.model",
        defaultMessage: "GPT-5.3",
        description: "Model feature on the Free personal plan card"
      }} />
    }],
    getPlansUrl,
    onCtaClick,
    onOpenUrl
  }} />;
  let daisy = loadingTargetPlan === ChatGptPlanId.PLUS,
    ember = jade({
      intl: nickel,
      pricingInfo,
      plan: ChatGptPlanId.PLUS
    });
  let flint, garnet;
  flint = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.personal.plus.title",
    defaultMessage: "Plus",
    description: "Title for the Plus personal plan card"
  }} />;
  garnet = [{
    icon: <Bravo {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.plus.usage",
      defaultMessage: "Enhanced Codex usage",
      description: "Usage feature on the Plus personal plan card"
    }} />
  }, {
    icon: <Copper {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.plus.model",
      defaultMessage: "GPT-5.5 Thinking",
      description: "Model feature on the Plus personal plan card"
    }} />
  }, {
    icon: <Delta {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.plus.workspace",
      defaultMessage: "Connect to Google Workspace",
      description: "Workspace feature on the Plus personal plan card"
    }} />
  }];
  let hazel = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.more.plus",
    defaultMessage: "View more details for Plus plan",
    description: "Screen reader label for the Plus plan details link"
  }} />;
  let ivory = <Alpha {...{
    currentPlan,
    isLoading: daisy,
    targetPlan: ChatGptPlanId.PLUS,
    price: ember,
    title: flint,
    features: garnet,
    getPlansUrl,
    onCtaClick,
    onOpenUrl,
    planDetailsLabel: hazel
  }} />;
  let jasper = slate ? <>
      {<Alpha {...{
      currentPlan,
      isLoading: loadingTargetPlan === ChatGptPlanId.PROLITE,
      targetPlan: ChatGptPlanId.PROLITE,
      price: jade({
        intl: nickel,
        pricingInfo,
        plan: ChatGptPlanId.PROLITE
      }),
      title: <Echo {...{
        tier: <MemoizedFormattedMessage {...{
          id: "settings.usage.upgradePlan.personal.proLite.tier",
          defaultMessage: "5x",
          description: "Tier suffix for the Pro 5x personal plan card"
        }} />
      }} />,
      features: harbor(ChatGptPlanId.PROLITE),
      getPlansUrl,
      onCtaClick,
      onOpenUrl,
      planDetailsLabel: <Falcon {...{
        plan: ChatGptPlanId.PROLITE
      }} />
    }} />}
      {<Alpha {...{
      currentPlan,
      isLoading: loadingTargetPlan === ChatGptPlanId.PRO,
      targetPlan: ChatGptPlanId.PRO,
      price: jade({
        intl: nickel,
        pricingInfo,
        plan: ChatGptPlanId.PRO
      }),
      title: <Echo {...{
        tier: <MemoizedFormattedMessage {...{
          id: "settings.usage.upgradePlan.personal.pro.tier",
          defaultMessage: "20x",
          description: "Tier suffix for the Pro 20x personal plan card"
        }} />
      }} />,
      features: harbor(ChatGptPlanId.PRO),
      getPlansUrl,
      onCtaClick,
      onOpenUrl,
      planDetailsLabel: <Falcon {...{
        plan: ChatGptPlanId.PRO
      }} />
    }} />}
    </> : <Alpha {...{
    currentPlan,
    isLoading: loadingTargetPlan === quartz,
    targetPlan: quartz,
    price: jade({
      intl: nickel,
      pricingInfo,
      plan: quartz
    }),
    title: <div className="flex items-center justify-between gap-4">
            {<MemoizedFormattedMessage {...{
        id: "settings.usage.upgradePlan.personal.pro.title",
        defaultMessage: "Pro",
        description: "Title for the Pro personal plan card"
      }} />}
            {<SubscriptionPlanSegment {...{
        ariaLabel: nickel.formatMessage({
          id: "settings.usage.upgradePlan.personal.proTier.ariaLabel",
          defaultMessage: "Choose Pro plan tier",
          description: "Aria label for the Pro tier toggle"
        }),
        className: "shrink-0",
        selectedId: quartz,
        onSelect: river,
        options: [{
          id: ChatGptPlanId.PROLITE,
          label: <MemoizedFormattedMessage {...{
            id: "settings.usage.upgradePlan.personal.proTier.fiveX",
            defaultMessage: "5x",
            description: "Label for the Pro 5x tier toggle"
          }} />
        }, {
          id: ChatGptPlanId.PRO,
          label: <MemoizedFormattedMessage {...{
            id: "settings.usage.upgradePlan.personal.proTier.twentyX",
            defaultMessage: "20x",
            description: "Label for the Pro 20x tier toggle"
          }} />
        }]
      }} />}
          </div>,
    features: harbor(quartz),
    getPlansUrl,
    onCtaClick,
    onOpenUrl,
    planDetailsLabel: <Falcon {...{
      plan: quartz
    }} />
  }} />;
  let kelp = <div aria-hidden={zinc} className={basalt}>
      {cedar}
      {ivory}
      {jasper}
    </div>;
  let lotus = onyx !== "business",
    mint = onyx !== "business" && "invisible pointer-events-none",
    nova = IntlProvider("col-start-1 row-start-1 grid gap-2.5 md:grid-cols-2", mint);
  let olive, prism, quill, reef, sage, topaz;
  olive = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.codex.title",
    defaultMessage: "Business",
    description: "Title for the Codex Business plan card"
  }} />;
  prism = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.codex.subtitle",
    defaultMessage: "Codex",
    description: "Subtitle for the Codex Business plan card"
  }} />;
  quill = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.codex.price",
    defaultMessage: "Usage pricing",
    description: "Price label for the Codex Business plan card"
  }} />;
  reef = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.codex.description",
    defaultMessage: "No fixed seat. Pay as you go based on usage",
    description: "Description for the Codex Business plan card"
  }} />;
  sage = [{
    icon: <Bravo {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.codex.usage",
      defaultMessage: "Pay-as-you-go usage",
      description: "Usage feature on the Codex Business plan card"
    }} />
  }, {
    icon: <Copper {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.codex.model",
      defaultMessage: "GPT-5.5 Thinking",
      description: "Model feature on the Codex Business plan card"
    }} />
  }, {
    icon: <Delta {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.codex.workspace",
      defaultMessage: "Connect to Google Workspace",
      description: "Workspace feature on the Codex Business plan card"
    }} />
  }, {
    icon: <Gamma {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.codex.security",
      defaultMessage: "Enhanced security and admin controls",
      description: "Security feature on the Codex Business plan card"
    }} />
  }];
  topaz = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.addWorkspace",
    defaultMessage: "Add Business workspace",
    description: "CTA to add a business workspace"
  }} />;
  let ultra = iris => {
    onOpenUrl(CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL, ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED, iris);
  };
  let vapor = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.more.businessCodex",
    defaultMessage: "View more details for Business Codex plan",
    description: "Screen reader label for the Business Codex plan details link"
  }} />;
  let wheat = <Harbor {...{
    title: olive,
    subtitle: prism,
    priceLabel: quill,
    description: reef,
    features: sage,
    cta: topaz,
    onClick: ultra,
    targetPlan: ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED,
    getPlansUrl,
    onCtaClick,
    onOpenUrl,
    planDetailsLabel: vapor
  }} />;
  let yarn, _e;
  yarn = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.team.title",
    defaultMessage: "Business",
    description: "Title for the ChatGPT and Codex Business plan card"
  }} />;
  _e = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.team.subtitle",
    defaultMessage: "ChatGPT & Codex",
    description: "Subtitle for the ChatGPT and Codex Business plan card"
  }} />;
  let zephyr = kite({
    intl: nickel,
    pricingInfo
  });
  let acorn, bloom, coral;
  acorn = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.team.description",
    defaultMessage: "When billed annually. Minimum of 2 users",
    description: "Description for the ChatGPT and Codex Business plan card"
  }} />;
  bloom = [{
    icon: <Bravo {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.team.usage",
      defaultMessage: "Enhanced Codex usage",
      description: "Usage feature on the ChatGPT and Codex Business plan card"
    }} />
  }, {
    icon: <Copper {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.team.model",
      defaultMessage: "GPT-5.5 Thinking",
      description: "Model feature on the ChatGPT and Codex Business plan card"
    }} />
  }, {
    icon: <Delta {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.team.workspace",
      defaultMessage: "Connect to Google Workspace",
      description: "Workspace feature on the ChatGPT and Codex Business plan card"
    }} />
  }, {
    icon: <Gamma {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.business.team.security",
      defaultMessage: "Enhanced security and admin controls",
      description: "Security feature on the ChatGPT and Codex Business plan card"
    }} />
  }];
  coral = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.business.addWorkspace",
    defaultMessage: "Add Business workspace",
    description: "CTA to add a business workspace"
  }} />;
  let drift = jewel => {
    onOpenUrl(CHATGPT_COM_CODEX_PURCHASE_TEAM_URL, ChatGptPlanId.SELF_SERVE_BUSINESS, jewel);
  };
  let be = <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.more.businessTeam",
    defaultMessage: "View more details for Business ChatGPT and Codex plan",
    description: "Screen reader label for the Business ChatGPT and Codex plan details link"
  }} />;
  let eagle = <Harbor {...{
    title: yarn,
    subtitle: _e,
    priceLabel: zephyr,
    description: acorn,
    features: bloom,
    cta: coral,
    onClick: drift,
    targetPlan: ChatGptPlanId.SELF_SERVE_BUSINESS,
    getPlansUrl,
    onCtaClick,
    onOpenUrl,
    planDetailsLabel: be
  }} />;
  let frost = <div aria-hidden={lotus} className={nova}>
      {wheat}
      {eagle}
    </div>;
  let glide = <div className="grid">
      {kelp}
      {frost}
    </div>;
  let honey = <DeferredUiB {...{
    className: "max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto px-5 py-4 [--pricing-plan-highlight:#635ef4]",
    children: [timber, umbra, yellow, glide]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    onOpenChange,
    contentClassName: "!w-[min(800px,calc(100vw-2rem))]",
    children: honey
  }} />;
}
