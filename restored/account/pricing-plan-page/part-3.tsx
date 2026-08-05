// Restored from ref/webview/assets/pricing-plan-page-C21WmWTp.js
// Wave FY — full polished body from `pricing-plan-page-C21WmWTp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 57/70).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/6
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE } from "../../analytics/codex-pricing-plan-page-cta-clicked-type";
import { CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE } from "../../analytics/codex-pricing-plan-page-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import {
  CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL,
  CHATGPT_COM_CODEX_PURCHASE_TEAM_URL,
} from "../../docs/codex-doc-urls";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconPZ } from "../../icons/app-icon-pz";
import {
  ensureTrendingTopicsIconInit,
  TrendingTopicsIcon,
} from "../../icons/trending-topics-icon";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import {
  formatPlanPriceParts,
  initPlanPricing,
} from "../../utils/plan-pricing";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../chatgpt-plan-ids";
import { validateCreditTargetAgainstMinimum } from "../credit-auto-reload-validators";
import {
  CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS,
  getCreditsPurchaseMinimumQuantity,
  parseFormattedCreditsQuantityString,
} from "../credits-purchase-field-validators";
import { DeferredAccountRy } from "../deferred-account-ry";
import {
  billingSlugToChatGptPlanId,
  chatGptPlanIdToBillingSlug,
  ensureChatGptPlanIdInit as ensureChatGptPlanIdInitAlias,
  ensureSubscriptionPlanSegmentInit,
  ensureSubscriptionUpdatePlanDialogInit,
  SubscriptionPlanSegment,
  SubscriptionUpdatePlanDialog,
} from "../subscription-update-plan";
import { useCreditAutoReloadSettingsQuery } from "../use-credit-auto-reload-settings-query";

// Wave5d soft stubs.
const $e: any = undefined;
const at: any = undefined;
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
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
function on(orbit) {
  switch (orbit) {
    case "free":
      return [
        {
          icon: wheat,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.free.core",
                defaultMessage: "Core model",
                description: "Free plan feature",
              }}
            />
          ),
        },
        {
          icon: harbor,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.free.messages",
                defaultMessage: "Limited messages and uploads",
                description: "Free plan feature",
              }}
            />
          ),
        },
        {
          icon: yellow,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.free.images",
                defaultMessage: "Limited image creation",
                description: "Free plan feature",
              }}
            />
          ),
        },
        {
          icon: echo,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.free.memory",
                defaultMessage: "Limited memory",
                description: "Free plan feature",
              }}
            />
          ),
        },
      ];
    case "go":
      return [
        {
          icon: wheat,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.go.core",
                defaultMessage: "Core model",
                description: "Go plan feature",
              }}
            />
          ),
        },
        {
          icon: kite,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.go.messages",
                defaultMessage: "More messages and uploads",
                description: "Go plan feature",
              }}
            />
          ),
        },
        {
          icon: daisy,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.go.images",
                defaultMessage: "More image creation",
                description: "Go plan feature",
              }}
            />
          ),
        },
        {
          icon: alpha,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.go.memory",
                defaultMessage: "Longer memory",
                description: "Go plan feature",
              }}
            />
          ),
        },
        {
          icon: glide,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.go.voice",
                defaultMessage: "Expanded voice mode",
                description: "Go plan feature",
              }}
            />
          ),
        },
      ];
    case "plus":
      return [
        {
          icon: sage,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.models",
                defaultMessage: "Advanced models",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: kite,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.messages",
                defaultMessage: "Even more messages and uploads",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: daisy,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.images",
                defaultMessage: "Advanced image creation with Thinking",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: alpha,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.memory",
                defaultMessage: "Expanded memory across chats",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: quartz,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.codex",
                defaultMessage: "Codex coding agent",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: acorn,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.research",
                defaultMessage: "Expanded deep research",
                description: "Plus plan feature",
              }}
            />
          ),
        },
        {
          icon: zephyr,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.plus.projects",
                defaultMessage: "Projects and custom GPTs",
                description: "Plus plan feature",
              }}
            />
          ),
        },
      ];
    case "pro":
      return [
        {
          icon: ensureTrendingTopicsIconInit,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.usage",
                defaultMessage: "5x or 20x more usage than Plus",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: at,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.codex",
                defaultMessage: "Maximum access to Codex",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: ultra,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.model",
                defaultMessage: "Frontier pro model",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: jade,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.chat",
                defaultMessage: "Unlimited core chat",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: coral,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.research",
                defaultMessage: "Maximum deep research",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: amber,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.images",
                defaultMessage: "Unlimited and faster image creation",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: copper,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.memory",
                defaultMessage: "Maximum memory and context",
                description: "Pro plan feature",
              }}
            />
          ),
        },
        {
          icon: slate,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.personal.pro.earlyAccess",
                defaultMessage: "Early access to experimental features",
                description: "Pro plan feature",
              }}
            />
          ),
        },
      ];
  }
}
function jewel(pine) {
  return pine === "business_chatgpt_codex"
    ? [
        {
          icon: wheat,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.models",
                defaultMessage: "Advanced models for work",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: olive,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.chat",
                defaultMessage: "Unlimited core chat and uploads",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: amber,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.images",
                defaultMessage: "More images, videos, and data analysis",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: gamma,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.knowledge",
                defaultMessage: "Integrations and company knowledge",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: at,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.codex",
                defaultMessage: "Codex coding agent",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: umbra,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.tools",
                defaultMessage: "Tools for teams like projects and custom GPTs",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: jasper,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.security",
                defaultMessage: "Advanced security with SSO, MFA, & more",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
        {
          icon: willow,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.team.privacy",
                defaultMessage:
                  "Privacy built in; data never used for training",
                description: "Business ChatGPT and Codex feature",
              }}
            />
          ),
        },
      ]
    : [
        {
          icon: quill,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.engineering",
                defaultMessage: "AI-powered software engineering",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: mint,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.reviews",
                defaultMessage: "Automated code and security reviews",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: hazel,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.computer",
                defaultMessage: "Automate tasks on your computer",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: cedar,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.actions",
                defaultMessage:
                  "Take action across documents, tools, and codebases",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: marble,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.environments",
                defaultMessage: "Built-in worktrees and cloud environments",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: jasper,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.security",
                defaultMessage: "No training on your data; SAML security",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: flint,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.management",
                defaultMessage: "Easy member, role, & billing management",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
        {
          icon: eagle,
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.usage.pricingPlanPage.business.codex.fee",
                defaultMessage:
                  "No fixed seat fee; pay as you go based on usage",
                description: "Usage-priced Codex Business feature",
              }}
            />
          ),
        },
      ];
}
var knoll,
  lunar = esmInit(() => {
    ensureIntlFormattersInit();
    onyx();
    kelp();
    iris();
    bravo();
    delta();
    falcon();
    indigo();
    $e();
    lemon();
    nickel();
    pearl();
    river();
    timber();
    violet();
    xenon();
    zinc();
    basalt();
    ember();
    garnet();
    ivory();
    lotus();
    nova();
    prism();
    reef();
    topaz();
    vapor();
    yarn();
    bloom();
    drift();
    frost();
    TrendingTopicsIcon();
    honey();
  });
function moss(quest, ridge) {
  let storm = [];
  return (
    quest === ChatGptPlanId.FREE &&
      storm.push({
        action: "current",
        highlighted: false,
        id: "free",
        targetPlan: ChatGptPlanId.FREE,
      }),
    storm.push(
      {
        action: setRemoteControlEnabledForHost({
          currentPlan: quest,
          targetPlan: ChatGptPlanId.GO,
        }),
        highlighted: false,
        id: "go",
        targetPlan: ChatGptPlanId.GO,
      },
      {
        action: setRemoteControlEnabledForHost({
          currentPlan: quest,
          targetPlan: ChatGptPlanId.PLUS,
        }),
        highlighted: quest === ChatGptPlanId.FREE || quest === ChatGptPlanId.GO,
        id: "plus",
        targetPlan: ChatGptPlanId.PLUS,
      },
      {
        action: setRemoteControlEnabledForHost({
          currentPlan: quest,
          targetPlan: ridge,
        }),
        highlighted: quest === ChatGptPlanId.PLUS,
        id: "pro",
        targetPlan: ridge,
      },
    ),
    storm
  );
}
function north(tide) {
  return tide === ChatGptPlanId.PROLITE || tide === ChatGptPlanId.PRO
    ? ChatGptPlanId.PRO
    : ChatGptPlanId.PROLITE;
}
