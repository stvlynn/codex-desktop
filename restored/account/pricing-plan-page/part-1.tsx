// Restored from ref/webview/assets/pricing-plan-page-C21WmWTp.js
// Wave FY — full polished body from `pricing-plan-page-C21WmWTp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 57/70).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/6
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
} from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
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
import { formatPlanPriceParts, initPlanPricing } from "../../utils/plan-pricing";
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

const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:quickChatDockPositionAtom@windows/quick-chat-atoms.ts) */
const AppInitialIx: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (jsx-collision:appendLoginHintToPurchaseUrl@account/append-login-hint-to-purchase-url.ts) */
const AppInitialLy: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureTrafficLightInsetsInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useCreditAutoReloadSettingsQuery@account/use-credit-auto-reload-settings-query.ts) */
const AppInitialQb: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useSubscriptionUpdatePreviewQuery@account/use-subscription-update-preview-query.ts) */
const AppInitialXb: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/usage-settings.ts) */
const usageSettings: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:updateSubscriptionPlan@account/wham-subscription-onboarding-posts.ts) */
const AppInitialZb: any = undefined;
