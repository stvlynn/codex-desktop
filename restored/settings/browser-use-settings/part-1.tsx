// Restored from ref/webview/assets/browser-use-settings-PxDSNhZ2.js
// Wave FZ — full polished body from `browser-use-settings-PxDSNhZ2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 71 (verified 136/206).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/13
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { ensureImportMetaAssetUrlInit } from "../../assets/ensure-import-meta-asset-url-init";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureBrowserUseGateInit,
  useBrowserUseGate,
  useExternalBrowserUseGate,
} from "../../boundaries/browser-use-gate-facades";
import {
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  CodexBrowserSurface,
  CodexBrowserSurfaceActionAnalyticsType,
  CodexBrowserSurfaceActionType as CodexBrowserSurfaceActionTypeAlias,
} from "../../browser/browser-surface-enums";
import {
  ensurePluginMentionPromptInit,
  firstNonEmptyTrimmedString,
} from "../../browser/browser-use-helpers";
import {
  CHROME_SETTINGS_CONTENT_URL,
  CHROME_SETTINGS_COOKIES_URL,
} from "../../browser/chrome-internal-urls";
import { buildChromeSiteDetailsUrl } from "../../browser/chrome-site-details-url";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { ensureBrowserPluginMentionMessagesInit } from "../../composer/browser-plugin-mention-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { BROWSER_SURFACE_ID } from "../../config/browser-surface-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { OPENAI_BUNDLED_ID } from "../../config/openai-bundled-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { areTurnsRelated } from "../../conversation/is-turn-ancestor";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { AVATAR_OVERLAY_FOCUS_COMPOSER_EVENT } from "../../overlay/avatar-overlay-composition-events";
import { ensurePluginCachePathHelpersInit } from "../../plugins/ensure-plugin-cache-path-helpers-init";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { closedConnectionState } from "../../shell/closed-connection-state";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensurePersonalizationCInit,
  ensureSettingsGlyphNltInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { isWinDrivePath } from "../../utils/win-path-predicates";
import { SETTINGS_BROWSER_USE_SITE_SETTINGS_SPLAT_PATH } from "../browser-use-settings-paths";
import { ensureGpuTearingDebugSettingsInit } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  initSettingsRowDisclosure,
  SettingsRowDisclosure,
} from "../settings-row-disclosure";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

// Wave5d soft JSX companions.
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Bravo(
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
const alpha: any = undefined;
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/openai-bundled.tsx) */
const AppInitialAht: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useClearBrowserBrowsingDataMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialAO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:marketplacePathsEqual@browser/browser-use-helpers.ts) */
const AppInitialAw: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:toComparableUnixPath@utils/workspace-path-keys.ts) */
const AppInitialBht: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const buildPluginInstallQuery: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/collab-agent-tool-call.tsx) */
const CollabAgentToolCall: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-d9.ts) */
const deferredUiD9: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/persist-codex-browser-app.tsx) */
const PersistCodexBrowserApp: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:listHooksForHostQueryAtom@settings/hooks-query-atoms.ts) */
const AppInitialDz: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolvePluginRequestId@browser/browser-use-helpers.ts) */
const AppInitialEK: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureBrowserDownloadSettingsInit@settings/browser-download-settings.ts) */
const AppInitialEO: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useUpdateBrowserUseOriginRulesMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialFO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:browserDownloadSettings@settings/browser-download-settings.ts) */
const AppInitialFpt: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/plugin-scheduled-tasks.tsx) */
const PluginScheduledTasks: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ght@ui/ght.ts) */
const AppInitialGht: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComputerUseGateInit@boundaries/browser-use-gate-facades.ts) */
const AppInitialGK: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isAbsolutePath@utils/workspace-paths.ts) */
const AppInitialHht: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/user-message3.tsx) */
const AppInitialHt: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const BrowserSettingsHistoryNav: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-gate-facades.ts) */
const useHostFeatureGate: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/app-icon-ko.tsx) */
const AppInitialKO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:card@hosts/card.ts) */
const AppInitialKpt: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const AppInitialKr: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensurePluginPageAnalyticsInit@boundaries/browser-use-plugin-facades.ts) */
const AppInitialKz: any = undefined;
/** Wave FZ unresolved companion (missing-export:desktop/desktop-workspace-discovery.tsx) */
const DesktopWorkspaceDiscovery: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/browser.tsx) */
const Browser: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureDiffCommentComposerInit@editors/ensure-diff-comment-composer-init.ts) */
const AppInitialLj: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolvePluginMarketplaceDirectRoute@plugins/plugin-marketplace-route.ts) */
const AppInitialLz: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureOpenLinkPreferenceAnalyticsInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveOpenaiBundledId@config/is-openai-bundled-id.ts) */
const AppInitialNht: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useClearBrowserUseHostStateMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialNO: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const PersonGlyph: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:applyLocalhost@hosts/apply-localhost.ts) */
const AppInitialOht: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:browserUseOriginStateQueryAtom@boundaries/browser-use-mutation-facades.ts) */
const AppInitialOO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave FZ unresolved companion (missing-export:files/sites.tsx) */
const Sites: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useBrowserUseOriginRulesHelperMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialPO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useAppInstallPreparingState@apps/use-app-install-preparing-state.ts) */
const AppInitialQK: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:lookupMessageDescriptor@utils/lookup-message-descriptor.ts) */
const AppInitialQr: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInitStub: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureBrowserSurfaceEnumsInit@browser/browser-surface-enums.ts) */
const AppInitialR6: any = undefined;
/** Wave FZ unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveRepoCloneUrlForHost@git/resolve-repo-clone-url-for-host.ts) */
const AppInitialSv: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiUStub: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureOpenLinkTargetHelpersInit@boundaries/browser-use-mutation-facades.ts) */
const AppInitialU0: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:formatSkillScopeLabelForSkill@skills/format-skill-scope-label-for-skill.ts) */
const AppInitialUj: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const ensureBrowserSettingsHistoryNavInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/message2.tsx) */
const AppInitialVht: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const useResolvedOpenLinkTarget: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isUncPath@utils/win-path-predicates.ts) */
const AppInitialWht: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useComputerUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialXK: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/agent.ts) */
const agent: any = undefined;
/** Wave FZ unresolved companion (missing-export:models/review-model.tsx) */
const ReviewModel: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
function bravo(kite) {
  let { service } = kite,
    lemon = CodexPluginActionType(appScopeAtom);
  if (!NativeContextMenuSurface("1834314516")) return null;
  let marble = service ?? appServices.browserProfileImport;
  if (marble == null) return null;
  let nickel = () => {
    BrowserTabMediaIcon(lemon, marble, "browser-settings-page");
  };
  let onyx = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.profileImport.open",
        defaultMessage: "Import…",
        description: "Button that opens the browser data import dialog",
      }}
    />
  );
  return (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        size: "toolbar",
        onClick: nickel,
        children: onyx,
      }}
    />
  );
}
var $n,
  copper,
  delta = esmInit(() => {
    $n = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    usePointerSurfaceInteractionGate();
    ensureSkillsPageHelpersInit();
  });
function echo() {
  return (
    <Alpha
      {...{
        kind: "contactInfo",
      }}
    />
  );
}
function falcon() {
  return (
    <Alpha
      {...{
        kind: "downloads",
      }}
    />
  );
}
function gamma() {
  return (
    <Alpha
      {...{
        kind: "extensions",
      }}
    />
  );
}
function harbor() {
  return (
    <Alpha
      {...{
        kind: "history",
      }}
    />
  );
}
function or() {
  return (
    <Alpha
      {...{
        kind: "passwordManager",
      }}
    />
  );
}
function indigo() {
  return (
    <Alpha
      {...{
        kind: "siteSettings",
      }}
    />
  );
}
function jade(pearl) {
  let { kind } = pearl;
  return (
    <Bravo
      {...{
        kind,
      }}
    />
  );
}
