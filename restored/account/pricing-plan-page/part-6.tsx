// Restored from ref/webview/assets/pricing-plan-page-C21WmWTp.js
// Wave FY — full polished body from `pricing-plan-page-C21WmWTp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 57/70).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/6
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE } from "../../analytics/codex-pricing-plan-page-cta-clicked-type";
import { CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE } from "../../analytics/codex-pricing-plan-page-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL, CHATGPT_COM_CODEX_PURCHASE_TEAM_URL } from "../../docs/codex-doc-urls";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { ensureTrendingTopicsIconInit, TrendingTopicsIcon } from "../../icons/trending-topics-icon";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { formatPlanPriceParts, initPlanPricing } from "../../utils/plan-pricing";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../chatgpt-plan-ids";
import { validateCreditTargetAgainstMinimum } from "../credit-auto-reload-validators";
import { CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS, getCreditsPurchaseMinimumQuantity, parseFormattedCreditsQuantityString } from "../credits-purchase-field-validators";
import { DeferredAccountRy } from "../deferred-account-ry";
import { billingSlugToChatGptPlanId, chatGptPlanIdToBillingSlug, ensureChatGptPlanIdInit as ensureChatGptPlanIdInitAlias, ensureSubscriptionPlanSegmentInit, ensureSubscriptionUpdatePlanDialogInit, SubscriptionPlanSegment, SubscriptionUpdatePlanDialog } from "../subscription-update-plan";
import { useCreditAutoReloadSettingsQuery } from "../use-credit-auto-reload-settings-query";


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

// Wave5d soft stubs.
const AppInitialFZ: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const deferredUiEnt: any = undefined;
const ensureTrafficLightInsetsInit: any = undefined;
const alpha: any = undefined;
const pricingPlanPagePricingPlanPageContent: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const usageSettings: any = undefined;
function delta(xenon) {
  let {
    cardId
  } = xenon;
  switch (cardId) {
    case "free":
      {
        let yellow;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.free.footer",
          defaultMessage: "Have an existing plan? See <link>billing help</link>",
          description: "Footer link to billing help shown on the Free plan card",
          values: {
            link: gamma
          }
        }} />;
      }
    case "go":
      {
        let zinc;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.go.footer",
          defaultMessage: "This plan may include ads. <link>Learn more</link>",
          description: "Footer link to ads help shown on the Go plan card",
          values: {
            link: falcon
          }
        }} />;
      }
    case "plus":
      return null;
    case "pro":
      {
        let amber;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.pro.footer",
          defaultMessage: "Unlimited subject to abuse guardrails. <link>Learn more</link>",
          description: "Footer link to Pro usage guardrails shown on the Pro plan card",
          values: {
            link: echo
          }
        }} />;
      }
  }
}
function echo(basalt) {
  return <Alpha {...{
    href: willow,
    children: basalt
  }} />;
}
function falcon(cedar) {
  return <Alpha {...{
    href: timber,
    children: cedar
  }} />;
}
function gamma(daisy) {
  return <Alpha {...{
    href: umbra,
    children: daisy
  }} />;
}
function harbor(ember) {
  let {
    action,
    cardId
  } = ember;
  if (action === "current") {
    let flint;
    return <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.current",
      defaultMessage: "Current plan",
      description: "Disabled button label for the current plan"
    }} />;
  }
  return action === "upgrade" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.upgradeTo",
    defaultMessage: "Upgrade to {plan}",
    description: "Button label for selecting a more capable personal plan",
    values: {
      plan: <Bravo {...{
        cardId
      }} />
    }
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.downgradeTo",
    defaultMessage: "Downgrade to {plan}",
    description: "Button label for selecting a less capable personal plan",
    values: {
      plan: <Bravo {...{
        cardId
      }} />
    }
  }} />;
}
function indigo(garnet) {
  let {
    cardId
  } = garnet;
  if (cardId === "business_codex") return null;
  return <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.business.team.footer",
    defaultMessage: "For 2+ seats, billed annually. <link>Learn more</link>",
    description: "Footer link to Business annual billing details shown on the ChatGPT and Codex Business plan card",
    values: {
      link: jade
    }
  }} />;
}
function jade(hazel) {
  return <Alpha {...{
    href: violet,
    children: hazel
  }} />;
}
function kite(ivory) {
  let {
    cardId
  } = ivory;
  return cardId === "business_chatgpt_codex" ? <span>
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.business.team.title",
      defaultMessage: "Business <product>ChatGPT & Codex</product>",
      description: "Business plan title combining ChatGPT and Codex",
      values: {
        product: marble
      }
    }} />}
    </span> : <span>
      {<MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.business.codex.title",
      defaultMessage: "Business <product>Codex</product>",
      description: "Usage-priced Codex Business plan title",
      values: {
        product: lemon
      }
    }} />}
    </span>;
}
function lemon(jasper) {
  return <span className="text-token-text-secondary">{jasper}</span>;
}
function marble(kelp) {
  return <span className="text-[var(--pricing-plan-highlight)]">
      {kelp}
    </span>;
}
function nickel(lotus) {
  let {
      children,
      href
    } = lotus,
    mint = nova => {
      deferredUiEnt({
        event: nova,
        href,
        initiator: "open_in_browser_bridge"
      });
    };
  return <a className="cursor-interaction whitespace-nowrap underline underline-offset-2" href={href} target="_blank" rel="noreferrer" onClick={mint}>
      {children}
    </a>;
}
function onyx(olive) {
  let {
    cardId
  } = olive;
  return cardId === "business_chatgpt_codex" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.business.team.description",
    defaultMessage: "Get more work done with AI for teams",
    description: "Description for Business ChatGPT and Codex"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.business.codex.description",
    defaultMessage: "For software development teams",
    description: "Description for usage-priced Codex Business"
  }} />;
}
var pearl, quartz, $, river, slate, timber, umbra, violet, willow;
esmInit(() => {
  pearl = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  quartz = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureAuthProviderInit();
  RealtimeVoiceHostId();
  ensureSubscriptionPlanSegmentInit();
  ensureTrafficLightInsetsInit();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Qtt_Init();
  ensureComposerEsm_Ilt_Init();
  CHATGPT_CODEX_CLOUD_URL();
  AppInitialFZ();
  ensureComposerEsm_K9_Init();
  usageSettings();
  ensureAppScopeInit();
  ensureSkillsPageHelpersInit();
  DeferredAccountRy();
  ensureChatGptPlanIdInit();
  getCreditsPurchaseMinimumQuantity();
  initPlanPricing();
  bravo();
  copper();
  ensureSubscriptionUpdatePlanDialogInit();
  ensureChatGptPlanIdInitAlias();
  river = "!border-transparent !bg-[var(--pricing-plan-highlight)] !text-white enabled:hover:!bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_90%,transparent)] data-[state=open]:!bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_90%,transparent)]";
  slate = "w-full justify-center py-1 [@container_(min-width:44rem)]:min-h-11";
  timber = "https://help.openai.com/en/articles/20001047";
  umbra = "https://help.openai.com/en/collections/3943089-billing";
  violet = "https://help.openai.com/en/articles/8792828-what-is-chatgpt-team";
  willow = "https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro";
})();
export { pricingPlanPagePricingPlanPageContent as PricingPlanPageContent };
