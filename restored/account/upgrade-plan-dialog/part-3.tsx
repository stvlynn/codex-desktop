// Restored from ref/webview/assets/upgrade-plan-dialog-CKTSoudj.js
// Wave FY — full polished body from `upgrade-plan-dialog-CKTSoudj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 59/73).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/4
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE } from "../../analytics/codex-upgrade-plan-modal-cta-clicked-type";
import { CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE } from "../../analytics/codex-upgrade-plan-modal-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function UpgradePlanDialogUpgradePlanDialog(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialIx: any = undefined;
const AppInitialLy: any = undefined;
const AppInitialQb: any = undefined;
const AppInitialXb: any = undefined;
const AppInitialZb: any = undefined;
const deferredUiEnt: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const setRemoteControlEnabledForHost: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const upgradePlanDialogUpgradePlanDialog: any = undefined;
const falcon: any = undefined;
export function upgradePlanDialogUpgradePlanDialogModal({
  currentPlan,
  defaultTab,
  onClose,
  source
}: {
  currentPlan?: unknown;
  defaultTab?: unknown;
  onClose?: unknown;
  source?: unknown;
}) {
  let lemon = CodexPluginActionType(appScopeAtom),
    marble = useIntl(),
    nickel = lemon.queryClient,
    {
      email
    } = useAuth(),
    onyx = AppIconAlt(),
    {
      data
    } = reuseArrayIfShallowEqual(),
    [pearl, quartz] = falcon.useState(null),
    [river, slate] = falcon.useState(null),
    [timber, umbra] = falcon.useState(false),
    {
      data: _data
    } = AppInitialQb({
      enabled: true
    }),
    {
      data: __data
    } = AppInitialIx({
      billingCurrency: _data,
      enabled: true
    }),
    violet = useUpgradePlanCopyVariant({
      logExposure: false
    }),
    willow = data?.plan_type;
  falcon.useEffect(() => {
    willow != null && willow !== currentPlan.toString() && onClose();
  }, [currentPlan, willow, onClose]);
  falcon.useEffect(() => {
    logProductEvent(lemon, CODEX_UPGRADE_PLAN_MODAL_SHOWN_TYPE, {
      defaultTab,
      source
    });
  }, [defaultTab, lemon, source]);
  let xenon = (basalt, cedar) => {
      if (cedar != null) {
        deferredUiEnt({
          event: cedar,
          href: basalt,
          initiator: "open_in_browser_bridge"
        });
        return;
      }
      PdfPermissionFlag({
        href: basalt,
        initiator: "open_in_browser_bridge"
      });
    },
    yellow = async (daisy, ember, flint) => {
      let garnet = AppInitialLy({
        loginHint: email,
        statsigClient: onyx,
        url: daisy
      });
      if (installModalBrowserExtensionMessages(flint)) {
        xenon(garnet, flint);
        return;
      }
      if (data == null || currentPlan === ChatGptPlanId.FREE || ember !== ChatGptPlanId.PLUS && ember !== ChatGptPlanId.PROLITE && ember !== ChatGptPlanId.PRO) {
        xenon(garnet, flint);
        return;
      }
      let hazel = chatGptPlanIdToBillingSlug(ember),
        ivory = currentPlan === ChatGptPlanId.GO,
        jasper = currentPlan === ChatGptPlanId.PLUS && (ember === ChatGptPlanId.PROLITE || ember === ChatGptPlanId.PRO),
        kelp = currentPlan === ChatGptPlanId.PRO && ember === ChatGptPlanId.PROLITE,
        lotus = currentPlan === ChatGptPlanId.PROLITE && ember === ChatGptPlanId.PRO;
      if (!ivory && !jasper && !kelp && !lotus) {
        xenon(garnet, flint);
        return;
      }
      slate(ember);
      try {
        let mint = await nickel.fetchQuery(AppInitialXb({
          accountId: data.id,
          updatedPlan: hazel
        }));
        if (kelp) {
          quartz({
            kind: "scheduled_downgrade",
            preview: mint,
            updatedPlan: "chatgptprolite",
            webUrl: garnet
          });
          return;
        }
        let nova = mint.default_payment_method;
        if (!nova?.card_last4?.trim() || __data?.minorUnitExponent == null || __data.currencyCode.toUpperCase() !== mint.currency.toUpperCase()) {
          xenon(garnet, flint);
          return;
        }
        quartz({
          kind: "saved_card_upgrade",
          minorUnitExponent: __data.minorUnitExponent,
          paymentMethod: nova,
          preview: mint,
          updatedPlan: hazel,
          webUrl: garnet
        });
      } catch {
        xenon(garnet, flint);
      } finally {
        slate(null);
      }
    },
    zinc = olive => {
      pearl != null && logProductEvent(lemon, CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE, {
        ctaAction: olive,
        modalType: pearl.kind,
        source,
        targetPlan: billingSlugToChatGptPlanId(pearl.updatedPlan)
      });
    },
    amber = async () => {
      if (!(pearl == null || data == null)) {
        umbra(true);
        try {
          let prism = await AppInitialZb({
            accountId: data.id,
            updatedPlan: pearl.updatedPlan
          });
          if (prism.status == null || prism.status === "pending") {
            quartz(null);
            prism.status == null && pearl.kind === "saved_card_upgrade" && (lemon.get(toastAtom).success(marble.formatMessage({
              id: "settings.usage.pricingPlanPage.subscriptionUpdate.upgradeSucceeded",
              defaultMessage: "Successfully upgraded plan",
              description: "Toast shown after a plan upgrade succeeds"
            })), onClose());
            await Promise.all([nickel.invalidateQueries({
              queryKey: ["accounts", "check"]
            }), nickel.invalidateQueries({
              queryKey: ["rate-limit-status"]
            })]);
            return;
          }
          await useCreditAutoReloadSettingsQuery({
            accountId: data.id
          });
          xenon(pearl.webUrl);
          quartz(null);
        } catch {
          xenon(pearl.webUrl);
          quartz(null);
        } finally {
          umbra(false);
        }
      }
    };
  return <>
      {<UpgradePlanDialogUpgradePlanDialog {...{
      open: pearl == null,
      currentPlan,
      defaultTab,
      loadingTargetPlan: river,
      pricingInfo: __data ?? null,
      getPlansUrl: violet,
      onCtaClick: (quill, reef) => {
        reef === ChatGptPlanId.SELF_SERVE_BUSINESS_USAGE_BASED && CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS(lemon, {
          audience: "workspace",
          checkoutKind: "codex_team",
          entryPoint: "upgrade_plan_modal"
        });
        logProductEvent(lemon, CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE, {
          ctaAction: quill,
          source,
          targetPlan: reef
        });
      },
      onOpenChange: sage => {
        !sage && pearl == null && onClose();
      },
      onOpenUrl: (topaz, ultra, vapor) => {
        yellow(topaz, ultra, vapor);
      }
    }} />}
      {pearl == null ? null : <SubscriptionUpdatePlanDialog {...{
      isUpdating: timber,
      pricingInfo: __data ?? null,
      subscriptionUpdate: pearl,
      onCancel: () => {
        zinc("cancel");
        quartz(null);
      },
      onConfirm: () => {
        zinc(pearl.kind === "saved_card_upgrade" && pearl.preview.amount_due.amount > 0 ? "pay_now" : "confirm");
        amber();
      },
      onGoToWeb: wheat => {
        zinc("go_to_web");
        xenon(pearl.webUrl, wheat);
        quartz(null);
      },
      onOpenChange: yarn => {
        yarn || (zinc("dismiss"), timber || quartz(null));
      }
    }} />}
    </>;
}
function gamma(zephyr) {
  let {
      currentPlan,
      features,
      getPlansUrl,
      isLoading = false,
      onCtaClick,
      onOpenUrl,
      planDetailsLabel,
      price,
      targetPlan,
      title
    } = zephyr,
    acorn = setRemoteControlEnabledForHost({
      currentPlan,
      targetPlan
    });
  let bloom = acorn,
    coral = validateCreditTargetAgainstMinimum({
      currentPlan,
      targetPlan
    });
  let drift = coral,
    eagle = currentPlan === ChatGptPlanId.GO && targetPlan === ChatGptPlanId.PLUS || currentPlan === ChatGptPlanId.PLUS && targetPlan === ChatGptPlanId.PROLITE,
    frost = planDetailsLabel == null ? null : <Alpha {...{
      detailsLabel: planDetailsLabel,
      getPlansUrl,
      onOpenUrl
    }} />;
  let glide = bloom === "upgrade" ? "primary" : "outline",
    honey = bloom === "current",
    iris = lunar => {
      drift == null || bloom === "current" || (onCtaClick(bloom, targetPlan), onOpenUrl(drift, targetPlan, lunar));
    };
  let jewel = isLoading ? <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.loadingPlanChange",
    defaultMessage: "Loading…",
    description: "Label shown in an upgrade plan button while loading its confirmation dialog"
  }} /> : bloom === "current" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.current",
    defaultMessage: "Current plan",
    description: "Disabled CTA label for the user's current plan"
  }} /> : bloom === "downgrade" ? <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.downgrade",
    defaultMessage: "Downgrade",
    description: "CTA label for moving to a lower-tier plan"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.upgrade",
    defaultMessage: "Upgrade plan",
    description: "CTA label for moving to a higher-tier plan"
  }} />;
  let knoll = <ReadLoginRouteQuerySnapshot {...{
    className: "w-full justify-center",
    color: glide,
    disabled: honey,
    loading: isLoading,
    size: "large",
    onClick: iris,
    children: jewel
  }} />;
  return <Bravo {...{
    highlighted: eagle,
    title,
    priceLabel: price,
    features,
    featureSlotCount: 3,
    detailsLink: frost,
    footer: knoll
  }} />;
}
function harbor(moss) {
  let {
      cta,
      description,
      features,
      getPlansUrl,
      onCtaClick,
      onClick,
      onOpenUrl,
      planDetailsLabel,
      priceLabel,
      subtitle,
      targetPlan,
      title
    } = moss,
    north = targetPlan === ChatGptPlanId.SELF_SERVE_BUSINESS,
    orbit = <Alpha {...{
      detailsLabel: planDetailsLabel,
      getPlansUrl,
      onOpenUrl
    }} />;
  let pine = ridge => {
    onCtaClick("upgrade", targetPlan);
    onClick(ridge);
  };
  let quest = <ReadLoginRouteQuerySnapshot {...{
    className: "w-full justify-center",
    size: "large",
    onClick: pine,
    children: cta
  }} />;
  return <Bravo {...{
    highlighted: north,
    title,
    subtitle,
    priceLabel,
    priceLabelSize: "compact",
    description,
    features,
    featureSlotCount: 4,
    detailsLink: orbit,
    footer: quest
  }} />;
}
function indigo(storm) {
  let {
      tier
    } = storm,
    tide = <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.pro.title",
      defaultMessage: "Pro",
      description: "Title for the Pro personal plan card"
    }} />;
  return <div className="flex items-center gap-1">
      {tide}
      <span className="font-normal text-token-text-secondary">{tier}</span>
    </div>;
}
function jade(unity) {
  return [{
    icon: <Copper {...{}} />,
    label: unity === ChatGptPlanId.PROLITE ? <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.proLite.usage",
      defaultMessage: "5x more usage than Plus",
      description: "Usage feature for the Pro 5x plan card"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.pro.usage",
      defaultMessage: "20x more usage than Plus",
      description: "Usage feature for the Pro 20x plan card"
    }} />
  }, {
    icon: <Delta {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.pro.model",
      defaultMessage: "GPT-5.5 Pro",
      description: "Model feature on the Pro personal plan card"
    }} />
  }, {
    icon: <Echo {...{}} />,
    label: <MemoizedFormattedMessage {...{
      id: "settings.usage.upgradePlan.personal.pro.workspace",
      defaultMessage: "Connect to Google Workspace",
      description: "Workspace feature on the Pro personal plan card"
    }} />
  }];
}
function kite(vale) {
  let {
    plan
  } = vale;
  return plan === ChatGptPlanId.PROLITE ? <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.more.proLite",
    defaultMessage: "View more details for Pro 5x plan",
    description: "Screen reader label for the Pro 5x plan details link"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.usage.upgradePlan.more.pro",
    defaultMessage: "View more details for Pro 20x plan",
    description: "Screen reader label for the Pro 20x plan details link"
  }} />;
}
