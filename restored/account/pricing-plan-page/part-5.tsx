// Restored from ref/webview/assets/pricing-plan-page-C21WmWTp.js
// Wave FY — full polished body from `pricing-plan-page-C21WmWTp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 57/70).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/6
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE } from "../../analytics/codex-pricing-plan-page-cta-clicked-type";
import { CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE } from "../../analytics/codex-pricing-plan-page-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
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
function Copper(props: {
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
function Indigo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const IntlProvider: any = undefined;
const on: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function _n(quartz) {
  let {
      card,
      isLoading,
      onCtaClick,
      onSelectProPlan,
      pricingInfo,
      proPlan,
      showProPlanSelector
    } = quartz,
    river = useIntl(),
    slate = pricingInfo == null ? null : formatPlanPriceParts({
      amount: pricingInfo.monthlyAmounts[card.targetPlan],
      currencyCode: pricingInfo.currencyCode,
      intl: river,
      minorUnitExponent: pricingInfo.minorUnitExponent
    });
  let timber = slate,
    umbra = card.highlighted,
    violet = <Alpha {...{
      cardId: card.id
    }} />;
  let willow = card.highlighted ? <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.popular",
    defaultMessage: "POPULAR",
    description: "Badge labeling the emphasized Plus offer on the plan selection page"
  }} /> : null;
  let xenon = timber == null ? null : <span className="flex h-full flex-col justify-end gap-0.5">
        {card.id === "pro" ? <span className="text-[10px] leading-none text-token-text-secondary [@container_(min-width:44rem)]:text-[11px]">
            {<MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.personal.pro.from",
        defaultMessage: "From",
        description: "Label shown above the starting Pro plan price"
      }} />}
          </span> : null}
        {<Bravo {...{
      price: timber,
      cadence: <MemoizedFormattedMessage {...{
        id: "settings.usage.pricingPlanPage.personal.monthlyCadence",
        defaultMessage: "/ month",
        description: "Monthly cadence label shown after a localized personal plan price"
      }} />
    }} />}
      </span>;
  let yellow, zinc;
  yellow = <Copper {...{
    cardId: card.id
  }} />;
  zinc = <Delta {...{
    cardId: card.id
  }} />;
  let amber = showProPlanSelector && card.id === "pro" ? <SubscriptionPlanSegment {...{
    ariaLabel: river.formatMessage({
      id: "settings.usage.pricingPlanPage.proUsageSelector",
      defaultMessage: "Pro usage level",
      description: "Accessible label for selecting Pro 5x or Pro 20x"
    }),
    options: [{
      id: ChatGptPlanId.PROLITE,
      label: "5x"
    }, {
      id: ChatGptPlanId.PRO,
      label: "20x"
    }],
    selectedId: proPlan,
    onSelect: onSelectProPlan
  }} /> : null;
  let basalt = on(card.id);
  let cedar = card.highlighted && harbor,
    daisy = IntlProvider(indigo, cedar);
  let ember = card.action === "current" ? "outline" : "primary",
    flint = card.action === "current",
    garnet = jasper => {
      card.action !== "current" && onCtaClick(card.action, card.targetPlan, jasper);
    };
  let hazel = isLoading ? <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.loadingPlanChange",
    defaultMessage: "Loading…",
    description: "Label shown in a pricing plan button while loading its confirmation dialog"
  }} /> : <Echo {...{
    action: card.action,
    cardId: card.id
  }} />;
  let ivory = <ReadLoginRouteQuerySnapshot {...{
    className: daisy,
    color: ember,
    disabled: flint,
    loading: isLoading,
    size: "default",
    onClick: garnet,
    children: hazel
  }} />;
  return <Falcon {...{
    highlighted: umbra,
    title: violet,
    badge: willow,
    price: xenon,
    description: yellow,
    footer: zinc,
    headerControl: amber,
    reserveHeaderControlSpace: showProPlanSelector,
    features: basalt,
    cta: ivory
  }} />;
}
function jade(kelp) {
  let {
      card,
      onCtaClick,
      pricingInfo
    } = kelp,
    lotus = useIntl(),
    mint = card.id === "business_chatgpt_codex" && pricingInfo != null ? formatPlanPriceParts({
      amount: pricingInfo.monthlyAmounts.business,
      currencyCode: pricingInfo.businessCurrencyCode,
      intl: lotus,
      minorUnitExponent: pricingInfo.businessMinorUnitExponent
    }) : null;
  let nova = mint,
    olive = card.highlighted,
    prism = <Gamma {...{
      cardId: card.id
    }} />;
  let quill = card.id === "business_codex" ? <span className="translate-y-1 text-lg font-medium [@container_(min-width:44rem)]:text-[28px]">
        {<MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.business.usagePricing",
      defaultMessage: "Usage pricing",
      description: "Price label for usage-priced Codex Business plan"
    }} />}
      </span> : nova == null ? null : <Bravo {...{
    price: nova,
    cadence: <MemoizedFormattedMessage {...{
      id: "settings.usage.pricingPlanPage.business.monthlyCadence",
      defaultMessage: "/ month per seat",
      description: "Monthly per-seat cadence label shown after a localized Business plan price"
    }} />
  }} />;
  let reef, sage, topaz;
  reef = <Harbor {...{
    cardId: card.id
  }} />;
  sage = <Indigo {...{
    cardId: card.id
  }} />;
  topaz = alpha(card.id);
  let ultra = card.id === "business_chatgpt_codex" ? lotus.formatMessage({
    id: "settings.usage.pricingPlanPage.business.teamCtaAriaLabel",
    defaultMessage: "Get started with Business ChatGPT & Codex",
    description: "Accessible label for purchasing the Business ChatGPT and Codex offer"
  }) : lotus.formatMessage({
    id: "settings.usage.pricingPlanPage.business.codexCtaAriaLabel",
    defaultMessage: "Get started with Business Codex",
    description: "Accessible label for purchasing the usage-priced Codex Business offer"
  });
  let vapor = card.highlighted && harbor,
    wheat = IntlProvider(indigo, vapor);
  let yarn = bloom => {
    onCtaClick("upgrade", card.targetPlan, bloom);
  };
  let zephyr = <MemoizedFormattedMessage {...{
    id: "settings.usage.pricingPlanPage.business.codexCta",
    defaultMessage: "Get started",
    description: "CTA for purchasing a Business offer from the pricing plan page"
  }} />;
  let acorn = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": ultra,
    className: wheat,
    color: "primary",
    size: "default",
    onClick: yarn,
    children: zephyr
  }} />;
  return <Falcon {...{
    highlighted: olive,
    title: prism,
    price: quill,
    description: reef,
    footer: sage,
    features: topaz,
    cta: acorn
  }} />;
}
function kite(coral) {
  let {
      cadence,
      price
    } = coral,
    drift = <span className="sr-only">{price.formatted}</span>;
  let eagle = price.parts.map(lemon);
  let frost = <span aria-hidden="true" className="leading-none whitespace-nowrap">
      {eagle}
    </span>;
  let glide = price.currencyCodeLabel == null ? null : <>{price.currencyCodeLabel} </>;
  let honey = <span className="mb-0.5 text-[10px] text-token-text-secondary [@container_(min-width:44rem)]:text-[11px]">
      {glide}
      {cadence}
    </span>;
  return <span className="flex items-end gap-1.5">
      {drift}
      {frost}
      {honey}
    </span>;
}
function lemon(iris, jewel) {
  return iris.type === "currency" ? <span key={jewel} className="relative top-1 align-top text-[10px] text-token-text-secondary [@container_(min-width:44rem)]:top-1.5 [@container_(min-width:44rem)]:text-xs">
      {iris.value}
    </span> : <span key={jewel} className="text-xl font-medium [@container_(min-width:44rem)]:text-[32px]">
      {iris.value}
    </span>;
}
function marble(knoll) {
  let {
      badge,
      cta,
      description,
      features,
      footer,
      headerControl,
      highlighted,
      price,
      reserveHeaderControlSpace = false,
      title
    } = knoll,
    lunar = highlighted ? "border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]" : "border-token-border bg-token-bg-primary",
    moss = IntlProvider("flex min-h-[360px] flex-col rounded-xl border p-4 [@container_(min-width:44rem)]:min-h-[30rem] [@container_(min-width:44rem)]:p-5 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:p-6 [@container_(min-width:84rem)]:min-h-[clamp(38rem,calc(100dvh-26rem),45rem)]", lunar);
  let north = reserveHeaderControlSpace ? "min-h-10" : "min-h-6",
    orbit = IntlProvider("flex items-start justify-between gap-2 text-[19px] font-medium [@container_(min-width:44rem)]:text-[24px]", north);
  let pine = headerControl ?? (badge == null ? null : <span className="rounded-full bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_15%,transparent)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--pricing-plan-highlight)]">
        {badge}
      </span>);
  let quest = <div className={orbit}>
      {title}
      {pine}
    </div>;
  let ridge = <div className="mt-3 flex h-12 items-center">{price}</div>;
  let storm = <div className="mt-1 min-h-8 text-xs text-token-text-secondary [@container_(min-width:44rem)]:mt-2 [@container_(min-width:44rem)]:text-base [@container_(min-width:44rem)]:font-medium [@container_(min-width:44rem)]:text-token-text-primary">
      {description}
    </div>;
  let tide = <div className="[@container_(min-width:44rem)]:min-h-36">
      {quest}
      {ridge}
      {storm}
    </div>;
  let unity = <div className="mt-3 [@container_(min-width:44rem)]:mb-2 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:mt-4 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:mb-2.5">
      {cta}
    </div>;
  let vale = features.map(nickel);
  let wave = <div className="mt-4 flex flex-col gap-2 [@container_(min-width:44rem)]:gap-4 [@container_(min-width:44rem)]:[@media(min-height:72rem)]:gap-5">
      {vale}
    </div>;
  let apex = <div className="mt-auto min-h-4 pt-5 text-[10px] leading-4 text-token-text-tertiary [@container_(min-width:44rem)]:text-xs [@container_(min-width:44rem)]:[@media(min-height:72rem)]:pt-6">
      {footer}
    </div>;
  return <article className={moss}>
      {tide}
      {unity}
      {wave}
      {apex}
    </article>;
}
function nickel(brook, cliff) {
  return <div key={cliff} className="flex items-center gap-1.5 text-xs leading-[18px] [@container_(min-width:44rem)]:gap-3.5 [@container_(min-width:44rem)]:text-sm [@container_(min-width:44rem)]:leading-5">
      {gamma.createElement(brook.icon, {
      className: "size-4 shrink-0 [@container_(min-width:44rem)]:size-5"
    })}
      <span>{brook.label}</span>
    </div>;
}
function onyx(dusk) {
  let {
    cardId
  } = dusk;
  switch (cardId) {
    case "free":
      {
        let elm;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.free.title",
          defaultMessage: "Free",
          description: "Free plan card title"
        }} />;
      }
    case "go":
      {
        let fern;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.go.title",
          defaultMessage: "Go",
          description: "Go plan card title"
        }} />;
      }
    case "plus":
      {
        let grove;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.plus.title",
          defaultMessage: "Plus",
          description: "Plus plan card title"
        }} />;
      }
    case "pro":
      {
        let hill;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.pro.title",
          defaultMessage: "Pro",
          description: "Pro plan card title"
        }} />;
      }
  }
}
function pearl(isle) {
  let {
    cardId
  } = isle;
  switch (cardId) {
    case "free":
      {
        let juniper;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.free.description",
          defaultMessage: "See what AI can do",
          description: "Free plan card description"
        }} />;
      }
    case "go":
      {
        let lagoon;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.go.description",
          defaultMessage: "Do more with smarter AI",
          description: "Go plan card description"
        }} />;
      }
    case "plus":
      {
        let meadow;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.plus.description",
          defaultMessage: "Unlock the full experience",
          description: "Plus plan card description"
        }} />;
      }
    case "pro":
      {
        let nest;
        return <MemoizedFormattedMessage {...{
          id: "settings.usage.pricingPlanPage.personal.pro.description",
          defaultMessage: "Maximize your productivity",
          description: "Pro plan card description"
        }} />;
      }
  }
}
