// Restored from ref/webview/assets/plugin-detail-page-CS2mOWnD.js
// Wave GA — full polished body from `plugin-detail-page-CS2mOWnD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 122 (verified 228/347).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 1/39
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { ensureUsageSettingsAccessInit, useUsageSettingsAccess } from "../../account/use-usage-settings-access";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { ChatgptTrustedContactEntryPoint } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CODEX_SKILL_TRY_CLICKED_TYPE } from "../../analytics/codex-skill-try-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { useExternalBrowserUseGate } from "../../boundaries/browser-use-gate-facades";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { ConversationMarkdownText } from "../../conversation/conversation-markdown-text";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { ensureWebviewResumeConversationInit } from "../../conversation/ensure-webview-resume-conversation-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { toggleConversationPinned } from "../../conversation/toggle-conversation-pinned";
import { walkAssistantBranchPath } from "../../conversation/walk-assistant-branch-path";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL, GITHUB_COM_OPENAI_PLUGINS_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { remoteControlHostKey } from "../../environments/remote-host-keys";
import { areVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { repoWorktreeWorkspaceRoots } from "../../git/repo-worktree-workspace-roots";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { ensureUsePluginScheduledTasksInit, usePluginScheduledTasksN } from "../../hooks/use-plugin-scheduled-tasks";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { ensureUseRecommendedSkillsInit, useRecommendedSkills } from "../../hooks/use-recommended-skills";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconId } from "../../icons/app-icon-id";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensureTeamIconInit, TeamIcon } from "../../icons/team-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, readScrollTop, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { listHooksForHostQueryAtom } from "../../settings/hooks-query-atoms";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { parseSkillsManagePath } from "../../skills/parse-skills-manage-path";
import { partitionPluginSkills } from "../../skills/partition-plugin-skills";
import { ensureRecommendedSkillStatsigOverridesInit, getRecommendedSkillStatsigOverride, useRecommendedSkillStatsigOverrides } from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiU } from "../../ui/deferred-ui-u";
import { DETAIL_PAGE_STACK_CLASS, DetailPage, DetailPageSection, DetailPageSectionHeader, ensureDetailPageInit, ensureDetailPageSectionHeaderInit, ensureDetailPageSectionInit } from "../../ui/detail-page";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ght } from "../../ui/ght";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { compareSemver } from "../../utils/compare-semver";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { ensureZodRuntime } from "../../vendor/zod";
import { installModalBrowserExtensionMessages } from "../install-modal-browser-extension-messages";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isPluginInstallModalOpenInLocationState } from "../is-plugin-install-modal-open-in-location-state";
import { matchConnectorIconKeyFromPlugin } from "../match-connector-icon-key-from-plugin";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { mergeDirectoryPluginApps } from "../merge-directory-plugin-apps";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery, resolvePluginMarketplaceDirectRoute } from "../plugin-marketplace-route";
import { pluginProductBrowseNav } from "../plugin-product-browse-nav";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";
import { usePluginNavigationTelemetry } from "../use-plugin-navigation-telemetry";

// Wave5d soft stubs.
const harbor: any = undefined;

const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureUseGitRepoLiveQueryInit@hooks/use-git-repo-live-query.ts) */
const AppInitialA3: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave GA unresolved companion (jsx-collision:marketplacePathsEqual@browser/browser-use-helpers.ts) */
const AppInitialAw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:writeHooksStateMutationAtom@settings/hooks-query-atoms.ts) */
const AppInitialAz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-bu-2.tsx) */
const DeferredBu: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const buildPluginInstallQuery: any = undefined;
/** Wave GA unresolved companion (missing-export:projects/appgen3.ts) */
const appgen3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localconversationMcptoolactivityGmailMessages@conversation/localconversation-mcptoolactivity-gmail-messages.ts) */
const AppInitialC6: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiCm@ui/deferred-ui-cm.ts) */
const AppInitialCm: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePluginMentionPromptInit@browser/browser-use-helpers.ts) */
const AppInitialCN: any = undefined;
/** Wave GA unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave GA unresolved companion (jsx-collision:requireRemotePluginId@plugins/require-remote-plugin-id.ts) */
const AppInitialDK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_DN_Init@boundaries/composer-esm-inits.ts) */
const AppInitialDN: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-dr.ts) */
const deferredUiDR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useBrowserExtensionPluginSetupQuery@skills/use-browser-extension-plugin-setup-query.ts) */
const AppInitialDt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pluginShareStandaloneAction@plugins/plugin-share-standalone-action.ts) */
const AppInitialDw: any = undefined;
/** Wave GA unresolved companion (missing-export:hooks/deferred-dx.tsx) */
const DeferredDX: any = undefined;
/** Wave GA unresolved companion (jsx-collision:listHooksForHostQueryAtom@settings/hooks-query-atoms.ts) */
const AppInitialDz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiE@ui/deferred-ui-e.ts) */
const AppInitialE: any = undefined;
/** Wave GA unresolved companion (missing-export:analytics/codex-micro-device-lifecycle-step-type.ts) */
const CodexMicroDeviceLifecycleStepType: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolvePluginRequestId@browser/browser-use-helpers.ts) */
const AppInitialEK: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialFt: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/plugin-scheduled-tasks.tsx) */
const PluginScheduledTasks: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComputerUseGateInit@boundaries/browser-use-gate-facades.ts) */
const AppInitialGK: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/icon-button-with-tooltip.tsx) */
const AppInitialGL: any = undefined;
/** Wave GA unresolved companion (jsx-collision:shouldReturnToBrowseHistoryFromLocationState@plugins/should-return-to-browse-history-from-location-state.ts) */
const AppInitialGz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/launch-subagent-from-source-thread.ts) */
const launchSubagentFromSourceThread: any = undefined;
/** Wave GA unresolved companion (jsx-collision:parsePluginProductEventContext@plugins/parse-plugin-product-event-context.ts) */
const AppInitialHz: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ik.ts) */
const deferredUiIk: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/dismiss.ts) */
const dismiss: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureKeyboardShortcutsJtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialJt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pluginMentionMessages@markdown/plugin-mention-messages.ts) */
const AppInitialKL: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePluginPageAnalyticsInit@boundaries/browser-use-plugin-facades.ts) */
const AppInitialKz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identityValue@utils/identity-value.ts) */
const AppInitialLt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolvePluginMarketplaceDirectRoute@plugins/plugin-marketplace-route.ts) */
const AppInitialLz: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/use-marketplace-plugins-enabled-atom.ts) */
const useMarketplacePluginsEnabledAtom: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/plugins.tsx) */
const AppInitialMz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useIsMountedRef@hooks/use-is-mounted-ref.ts) */
const AppInitialNR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:round@ui/round.ts) */
const AppInitialNt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:usePluginDetailQuery@skills/use-plugin-detail-query.ts) */
const AppInitialNz: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const PersonGlyph: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureInstalledPluginsQueryInit@plugins/use-installed-plugins-query.ts) */
const AppInitialOK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localPathWhenMarketplaceMatches@plugins/local-path-when-marketplace-matches.ts) */
const AppInitialOw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureHooksQueriesInit@settings/hooks-query-atoms.ts) */
const AppInitialOz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave GA unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave GA unresolved companion (missing-export:files/application-octet-stream.tsx) */
const AppInitialPK: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/skills.tsx) */
const Skills: any = undefined;
/** Wave GA unresolved companion (jsx-collision:agentMention@files/agent-mention.ts) */
const AppInitialQj: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useAppInstallPreparingState@apps/use-app-install-preparing-state.ts) */
const AppInitialQK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:parseOauthCallbackPayload@auth/parse-oauth-callback-payload.ts) */
const AppInitialQz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureAppIconL0Init@icons/app-icon-l0.tsx) */
const AppInitialR0: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-u0000-u001-fu007-f2.ts) */
const applyU0000U001FU007F2: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave GA unresolved companion (missing-export:analytics/codex-plugin-action-type.ts) */
const CodexPluginActionTypeStub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pluginInstallIdentityKey@plugins/plugin-install-identity-key.ts) */
const AppInitialSK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredT@ui/deferred-t.ts) */
const AppInitialT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureHooksSettingsRouteInit@settings/hooks-format-helpers.ts) */
const AppInitialTl: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureMarkdownContentCssClassesInit@markdown/markdown-content-css-classes.ts) */
const AppInitialTR: any = undefined;
/** Wave GA unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3Stub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useRouteParams@hooks/use-route-params.ts) */
const AppInitialU5: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiUT@ui/deferred-ui-ut.ts) */
const AppInitialUT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:setCodexMicroDeviceStatusOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialUw: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave GA unresolved companion (missing-export:files/file-csv.ts) */
const fileCsv: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:requestRealtimeVoicePresentationSurface@voice/request-realtime-voice-presentation-surface.ts) */
const AppInitialW: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useComputerUseWindowsGate@devices/use-computer-use-windows-gate.ts) */
const AppInitialWK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_Wl_Init@boundaries/composer-esm-inits.ts) */
const AppInitialWl: any = undefined;
/** Wave GA unresolved companion (jsx-collision:analogDirectionFromJoystick@desktop/codex-micro-joystick-geometry.ts) */
const AppInitialWw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isPluginInstallModalOpenInLocationState@plugins/is-plugin-install-modal-open-in-location-state.ts) */
const AppInitialWz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localProjectRootsAtom@settings/hooks-query-atoms.ts) */
const AppInitialX4: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useComputerUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialXK: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialXu: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/coerce-string-or-passthrough.ts) */
const coerceStringOrPassthrough: any = undefined;
/** Wave GA unresolved companion (jsx-collision:formatLocationHref@navigation/format-location-href.ts) */
const AppInitialXz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:hasHostPluginPair@plugins/has-host-plugin-pair.ts) */
const AppInitialYK: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (missing-export:mcp/presentation.tsx) */
const Presentation: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave GA unresolved companion (jsx-collision:computeHookAttention@settings/hooks-event-helpers.ts) */
const AppInitialZu: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useMarketplaceConnectFlow@plugins/use-marketplace-connect-flow.ts) */
const AppInitialZz: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersA: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersC: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersD: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersF: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersH: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersI: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersL: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersM: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersN: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersO: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersP: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersR: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersS: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersT: any = undefined;
/** Wave GA unresolved companion (sib-missing:hooks/use-workspace-users) */
const useWorkspaceUsersU: any = undefined;
export async function pluginDetailPageDt({
  hostId,
  ...rest
}: unknown) {
  let {
    plugin
  } = await canonicalizeWorkspacePathKey("read-plugin", {
    hostId: hostId ?? "local",
    ...rest
  });
  return {
    pluginShareUrl: plugin.shareUrl ?? null,
    shareContext: plugin.summary.shareContext
  };
}
export function pluginDetailPageMt(isle1: unknown) {
  let juniper1 = isle1 === undefined ? {} : isle1;
  let {
      enabled = true,
      hostId = "local"
    } = juniper1,
    lagoon1 = {
      hostId: hostId
    };
  let meadow1 = usePluginsFeatureEnabled(lagoon1),
    nest1,
    oak1;
  nest1 = [...harbor, hostId];
  oak1 = async () => (await canonicalizeWorkspacePathKey("list-plugin-shares", {
    hostId: hostId
  })).data;
  let petal1 = enabled && meadow1,
    quiet1;
  return quiet1 = {
    queryKey: nest1,
    queryFn: oak1,
    enabled: petal1,
    staleTime: readScrollTop.FIVE_MINUTES
  }, useQuery(quiet1);
}
