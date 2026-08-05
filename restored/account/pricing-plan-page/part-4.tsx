// Restored from ref/webview/assets/pricing-plan-page-C21WmWTp.js
// Wave FY — full polished body from `pricing-plan-page-C21WmWTp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 57/70).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/6
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

// Wave5d soft JSX companions.
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function PricingPlanPagePricingPlanPageContent(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialIx: any = undefined;
const AppInitialLy: any = undefined;
const AppInitialQb: any = undefined;
const AppInitialXb: any = undefined;
const AppInitialZb: any = undefined;
const IntlProvider: any = undefined;
const _n: any = undefined;
const deferredUiEnt: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function echo(indigo) {
  let jade;
  switch (indigo) {
    case ChatGptPlanId.FREE:
      jade = "free";
      break;
    case ChatGptPlanId.GO:
      jade = "go";
      break;
    case ChatGptPlanId.PLUS:
      jade = "plus";
      break;
    case ChatGptPlanId.PROLITE:
    case ChatGptPlanId.PRO:
      jade = "pro";
      break;
  }
  return {
    action: "current",
    highlighted: false,
    id: jade,
    targetPlan: indigo,
  };
}
function falcon(kite, lemon) {
  switch (lemon) {
    case ChatGptPlanId.GO:
    case ChatGptPlanId.FREE:
    case ChatGptPlanId.PLUS:
    case ChatGptPlanId.PROLITE:
    case ChatGptPlanId.PRO:
      return validateCreditTargetAgainstMinimum({
        currentPlan: kite,
        targetPlan: lemon,
      });
    case ChatGptPlanId.SELF_SERVE_BUSINESS:
      return CHATGPT_COM_CODEX_PURCHASE_TEAM_URL;
    case ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED:
      return CHATGPT_COM_CODEX_PURCHASE_CODEX_TEAM_URL;
  }
}
var gamma,
  harbor = esmInit(() => {
    ensureChatGptPlanIdInit();
    getCreditsPurchaseMinimumQuantity();
    gamma = [
      {
        highlighted: true,
        id: "business_chatgpt_codex",
        targetPlan: ChatGptPlanId.SELF_SERVE_BUSINESS,
      },
      {
        highlighted: false,
        id: "business_codex",
        targetPlan: ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED,
      },
    ];
  });
export function pricingPlanPagePricingPlanPage() {
  let marble = CodexPluginActionType(appScopeAtom),
    nickel = useIntl(),
    onyx = useLocation(),
    pearl = useNavigate(),
    quartz = marble.queryClient,
    { email } = useAuth(),
    river = AppIconAlt(),
    slate = onyx.state ?? null,
    timber = slate?.source ?? "direct_navigation",
    { data, isLoading } = reuseArrayIfShallowEqual("always"),
    umbra =
      parseFormattedCreditsQuantityString(data?.plan_type)?.pricePlan ?? null,
    violet = slate?.defaultTab ?? "personal",
    [willow, xenon] = delta.useState(null),
    [yellow, zinc] = delta.useState(null),
    [amber, basalt] = delta.useState(false),
    { data: _data } = AppInitialQb({
      enabled: umbra != null,
    }),
    { data: __data } = AppInitialIx({
      billingCurrency: _data,
      enabled: umbra != null,
    });
  if (
    (delta.useEffect(() => {
      umbra != null &&
        logProductEvent(marble, CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE, {
          defaultTab: violet,
          source: timber,
        });
    }, [umbra, violet, marble, timber]),
    data == null || umbra == null)
  )
    return isLoading ? (
      <main className="h-full bg-token-main-surface-primary" />
    ) : (
      <Navigate
        {...{
          to: "/",
          replace: true,
        }}
      />
    );
  let cedar = (garnet, hazel) => {
      if (hazel != null) {
        deferredUiEnt({
          event: hazel,
          href: garnet,
          initiator: "open_in_browser_bridge",
        });
        return;
      }
      PdfPermissionFlag({
        href: garnet,
        initiator: "open_in_browser_bridge",
      });
    },
    daisy = async (ivory, jasper, kelp) => {
      let lotus = falcon(umbra, jasper);
      if (lotus == null) return;
      let mint = AppInitialLy({
        loginHint: email,
        statsigClient: river,
        url: lotus,
      });
      if (
        (jasper === ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED &&
          CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(marble, {
            audience: "workspace",
            checkoutKind: "codex_team",
            entryPoint: "pricing_plan_page",
          }),
        logProductEvent(marble, CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE, {
          ctaAction: ivory,
          source: timber,
          targetPlan: jasper,
        }),
        installModalBrowserExtensionMessages(kelp))
      ) {
        cedar(mint, kelp);
        return;
      }
      if (
        umbra === ChatGptPlanId.FREE ||
        (jasper !== ChatGptPlanId.PLUS &&
          jasper !== ChatGptPlanId.PROLITE &&
          jasper !== ChatGptPlanId.PRO)
      ) {
        cedar(mint, kelp);
        return;
      }
      let nova = chatGptPlanIdToBillingSlug(jasper),
        olive = umbra === ChatGptPlanId.GO,
        prism =
          umbra === ChatGptPlanId.PLUS &&
          (jasper === ChatGptPlanId.PROLITE || jasper === ChatGptPlanId.PRO),
        quill = umbra === ChatGptPlanId.PRO && jasper === ChatGptPlanId.PROLITE,
        reef = umbra === ChatGptPlanId.PROLITE && jasper === ChatGptPlanId.PRO;
      if (!olive && !prism && !quill && !reef) {
        cedar(mint, kelp);
        return;
      }
      zinc(jasper);
      try {
        let sage = await quartz.fetchQuery(
          AppInitialXb({
            accountId: data.id,
            updatedPlan: nova,
          }),
        );
        if (quill) {
          xenon({
            kind: "scheduled_downgrade",
            preview: sage,
            updatedPlan: "chatgptprolite",
            webUrl: mint,
          });
          return;
        }
        let topaz = sage.default_payment_method;
        if (
          !topaz?.card_last4?.trim() ||
          __data?.minorUnitExponent == null ||
          __data.currencyCode.toUpperCase() !== sage.currency.toUpperCase()
        ) {
          cedar(mint, kelp);
          return;
        }
        xenon({
          kind: "saved_card_upgrade",
          minorUnitExponent: __data.minorUnitExponent,
          paymentMethod: topaz,
          preview: sage,
          updatedPlan: nova,
          webUrl: mint,
        });
      } catch {
        cedar(mint, kelp);
      } finally {
        zinc(null);
      }
    },
    ember = (ultra) => {
      willow != null &&
        logProductEvent(marble, CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE, {
          ctaAction: ultra,
          modalType: willow.kind,
          source: timber,
          targetPlan: billingSlugToChatGptPlanId(willow.updatedPlan),
        });
    },
    flint = async () => {
      if (willow != null) {
        basalt(true);
        try {
          let vapor = await AppInitialZb({
            accountId: data.id,
            updatedPlan: willow.updatedPlan,
          });
          if (vapor.status == null || vapor.status === "pending") {
            xenon(null);
            vapor.status == null &&
              willow.kind === "saved_card_upgrade" &&
              (marble.get(toastAtom).success(
                nickel.formatMessage({
                  id: "settings.usage.pricingPlanPage.subscriptionUpdate.upgradeSucceeded",
                  defaultMessage: "Successfully upgraded plan",
                  description: "Toast shown after a plan upgrade succeeds",
                }),
              ),
              pearl(slate?.returnPath ?? "/"));
            await Promise.all([
              quartz.invalidateQueries({
                queryKey: ["accounts", "check"],
              }),
              quartz.invalidateQueries({
                queryKey: ["rate-limit-status"],
              }),
            ]);
            return;
          }
          await useCreditAutoReloadSettingsQuery({
            accountId: data.id,
          });
          cedar(willow.webUrl);
          xenon(null);
        } catch {
          cedar(willow.webUrl);
          xenon(null);
        } finally {
          basalt(false);
        }
      }
    };
  return (
    <>
      {
        <PricingPlanPagePricingPlanPageContent
          key={umbra}
          {...{
            currentPlan: umbra,
            defaultTab: violet,
            loadingTargetPlan: yellow,
            pricingInfo: __data ?? null,
            onBack: () => {
              pearl(slate?.returnPath ?? "/");
            },
            onCtaClick: (wheat, yarn, zephyr) => {
              daisy(wheat, yarn, zephyr);
            },
          }}
        />
      }
      {willow == null ? null : (
        <SubscriptionUpdatePlanDialog
          {...{
            isUpdating: amber,
            pricingInfo: __data ?? null,
            subscriptionUpdate: willow,
            onCancel: () => {
              ember("cancel");
              xenon(null);
            },
            onConfirm: () => {
              ember(
                willow.kind === "saved_card_upgrade" &&
                  willow.preview.amount_due.amount > 0
                  ? "pay_now"
                  : "confirm",
              );
              flint();
            },
            onGoToWeb: (acorn) => {
              ember("go_to_web");
              cedar(willow.webUrl, acorn);
              xenon(null);
            },
            onOpenChange: (bloom) => {
              bloom || (ember("dismiss"), amber || xenon(null));
            },
          }}
        />
      )}
    </>
  );
}
function pricingPlanPagePricingPlanPageContent(coral) {
  let {
      currentPlan,
      defaultTab = "personal",
      loadingTargetPlan = null,
      onBack,
      onCtaClick,
      pricingInfo,
    } = coral,
    drift = useIntl(),
    [eagle, frost] = delta.useState(defaultTab),
    glide = bravo(currentPlan);
  let [honey, iris] = delta.useState(glide),
    jewel = ContextMenuRegistration(),
    knoll = Math.max(jewel.left, 8),
    lunar = {
      paddingInlineStart: knoll,
    };
  let moss, north;
  moss = (
    <AppIconPZ
      {...{
        className: "icon-xs",
      }}
    />
  );
  north = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.usage.pricingPlanPage.back",
        defaultMessage: "Back",
        description:
          "Button returning from the full page upgrade experience to the originating Codex app route",
      }}
    />
  );
  let orbit = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghostMuted",
        size: "default",
        onClick: onBack,
        children: [moss, north],
      }}
    />
  );
  let pine = (
    <header
      className="draggable flex h-toolbar w-full shrink-0 items-center pe-2"
      style={lunar}
    >
      {orbit}
    </header>
  );
  let quest = (
    <h1 className="text-[19px] font-medium [@container_(min-width:44rem)]:text-[24px]">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.pricingPlanPage.title",
            defaultMessage: "Upgrade your plan",
            description: "Title of the full page plan selection experience",
          }}
        />
      }
    </h1>
  );
  let ridge = drift.formatMessage({
    id: "settings.usage.pricingPlanPage.audienceSelector",
    defaultMessage: "Plan audience",
    description:
      "Accessible label for choosing personal or business upgrade plans",
  });
  let storm = {
    id: "personal",
    label: (
      <MemoizedFormattedMessage
        {...{
          id: "settings.usage.pricingPlanPage.personalTab",
          defaultMessage: "Personal",
          description: "Tab label for personal upgrade plans",
        }}
      />
    ),
  };
  let tide = [
    storm,
    {
      id: "business",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "settings.usage.pricingPlanPage.businessTab",
            defaultMessage: "Business",
            description: "Tab label for business upgrade plans",
          }}
        />
      ),
    },
  ];
  let unity = (
    <SubscriptionPlanSegment
      {...{
        ariaLabel: ridge,
        options: tide,
        selectedId: eagle,
        onSelect: frost,
      }}
    />
  );
  let vale =
    eagle === "personal" ? (
      <div
        className={IntlProvider(
          "grid w-full grid-cols-[minmax(0,24rem)] justify-center gap-4 [@container_(min-width:44rem)]:grid-cols-[repeat(2,minmax(0,28rem))] [@container_(min-width:64rem)]:gap-6",
          currentPlan === ChatGptPlanId.FREE
            ? "[@container_(min-width:76rem)]:grid-cols-[repeat(4,minmax(0,24rem))]"
            : "[@container_(min-width:76rem)]:grid-cols-[repeat(3,minmax(0,24rem))]",
        )}
      >
        {alpha(currentPlan, honey).map((item) => (
          <_n
            key={item.id}
            {...{
              card: item,
              isLoading: loadingTargetPlan === item.targetPlan,
              pricingInfo,
              proPlan: honey,
              showProPlanSelector: true,
              onCtaClick,
              onSelectProPlan: iris,
            }}
          />
        ))}
      </div>
    ) : (
      <div className="grid w-full grid-cols-[minmax(0,29.25rem)] justify-center gap-4 [@container_(min-width:44rem)]:grid-cols-[repeat(2,minmax(0,29.25rem))] [@container_(min-width:64rem)]:gap-6 [@container_(min-width:76rem)]:grid-cols-[repeat(3,minmax(0,29.25rem))]">
        {
          <_n
            {...{
              card: echo(currentPlan),
              isLoading: false,
              pricingInfo,
              proPlan: honey,
              showProPlanSelector: false,
              onCtaClick,
              onSelectProPlan: iris,
            }}
          />
        }
        {gamma.map((item) => (
          <Alpha
            key={item.id}
            {...{
              card: item,
              pricingInfo,
              onCtaClick,
            }}
          />
        ))}
      </div>
    );
  let wave = (
    <section className="@container flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-8 sm:px-8">
      <div className="flex w-full flex-col items-center gap-4 [@container_(min-width:64rem)]:gap-5">
        {quest}
        {unity}
        {vale}
      </div>
    </section>
  );
  return (
    <main className="flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-text-primary [--cursor-interaction:pointer] [--pricing-plan-highlight:#635ef4]">
      {pine}
      {wave}
    </main>
  );
}
