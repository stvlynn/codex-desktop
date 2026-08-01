// Restored from ref/webview/assets/start-appgen-conversation-DD_Qpz5h.js
// Wave GA — full polished body from `start-appgen-conversation-DD_Qpz5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 51/67).
// Group 1/15
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexAutomationFailureReason } from "../../analytics/codex-automation-failure-reason";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_E4_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { isAppUri } from "../../composer/app-plugin-uri";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { subagentActivityMessages } from "../../conversation/subagent-activity-messages";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTrendingTopicsIconInit, TrendingTopicsIcon } from "../../icons/trending-topics-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { toMarkdownLink } from "../../markdown/to-markdown-link";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";

const deferredConversationBJ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:buildSiteSettingsPath@navigation/site-settings-path.ts) */
const AppInitialDT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:siteAnalyticsPath@appgen/site-analytics-paths.ts) */
const AppInitialET: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-hx.ts) */
const deferredUiHX: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const PersonGlyph: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useBrowserUseOriginRulesHelperMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialPO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureSelectWorkspacePXInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialPX: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xj.tsx) */
const deferredUiXj: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
export function startAppgenConversationX(reef: unknown) {
  let {
    className,
    viewMode,
    ...rest
  } = reef;
  let sage = viewMode === "list" ? "col-span-full grid-cols-subgrid p-3" : "grid-rows-[auto_auto] border border-token-border-light bg-token-bg-fog",
    topaz = IntlProvider("relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-token-list-hover-background/50", sage, className);
  return <div className={topaz} {...rest} />;
}
export function startAppgenConversationB(ultra: unknown) {
  let {
    children,
    className,
    viewMode,
    ...rest
  } = ultra;
  let vapor = viewMode === "list" ? "h-[50px] w-20" : "aspect-square w-full",
    wheat = IntlProvider("relative shrink-0 overflow-hidden", vapor, className);
  return <div className={wheat} {...rest}>{children}</div>;
}
