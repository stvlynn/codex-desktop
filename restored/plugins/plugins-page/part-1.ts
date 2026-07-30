// Restored from ref/webview/assets/plugins-page-BCVTHZkx.js
// Wave GA — full polished body from `plugins-page-BCVTHZkx/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 141 (verified 247/388).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 1/15
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema, appActionSidebarSectionRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexPluginMarketplaceSurface } from "../../analytics/codex-plugin-marketplace-surface";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { AppCardAdminDisabledBadge } from "../../apps/app-card-admin-disabled-badge";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit, firstNonEmptyTrimmedString } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { deferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { setCodexMicroHudOpen, setCodexMicroJoystickOnStore } from "../../desktop/codex-micro-input-state";
import { ensureCodexMicroJoystickGeometryInit } from "../../desktop/codex-micro-joystick-geometry";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_MCP_URL } from "../../docs/codex-doc-urls";
import { fileExtensionFromPath } from "../../files/file-extension-from-path";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useContentRectSize } from "../../hooks/use-content-rect-size";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseHomeDirectoryInit, useHomeDirectory, useHomeDirectoryQuery } from "../../hooks/use-home-directory";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { ensureUseMediaQueryInit, useMediaQuery } from "../../hooks/use-media-query";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconIt } from "../../icons/app-icon-it";
import { AppIconKG } from "../../icons/app-icon-kg";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { useBatchWriteMcpServerConfig } from "../../mcp/use-batch-write-mcp-server-config";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, scrollAppActionTargetTo, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { resolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsCommandMenuSectionItem } from "../../settings/settings-command-menu-section-item";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useToggleMcpServerEnabledMutation } from "../../settings/use-toggle-mcp-server-enabled-mutation";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { usePluginDetailQuery } from "../../skills/use-plugin-detail-query";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { CircularProgressRing } from "../../ui/circular-progress-ring";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { ConnectorLogoStack, ensureConnectorLogoStackInit } from "../../ui/connector-logo-stack";
import { ControlGroup, ensureControlGroupInit } from "../../ui/control-group";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiZG } from "../../ui/deferred-ui-zg";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensureAppMainI9Init, ensurePersonalizationCInit, ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { produce } from "../../vendor/immer";
import { ensureZodRuntime } from "../../vendor/zod";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import { CodexPluginDirectoryEntrypoint } from "../codex-plugin-directory-entrypoint";
import { ensureGoogleDriveConnectorIconsInit } from "../ensure-google-drive-connector-icons-init";
import { isAvailabilityDisabledByAdmin } from "../is-availability-disabled-by-admin";
import { isOpenaiCuratedMarketplaceToken } from "../is-openai-curated-marketplace-token";
import { isUnavailableKnownConnector } from "../is-unavailable-known-connector";
import { matchesOptionalHostPluginIds } from "../matches-optional-host-plugin-ids";
import { normalizeConnectorCatalogId } from "../normalize-connector-catalog-id";
import { parsePluginProductEventContext } from "../parse-plugin-product-event-context";
import { ensurePluginDetailPageInit, ManagePluginDetailPage, pluginDetailF, pluginDetailG, pluginDetailH, pluginDetailI, pluginDetailL, pluginDetailM, pluginDetailP } from "../plugin-detail-page";
import { PluginInstallDetailsPanel } from "../plugin-install-details-panel";
import { pluginInstallIdentityKey } from "../plugin-install-identity-key";
import { pluginManagePathForCatalogEntry } from "../plugin-manage-path-for-catalog-entry";
import { pluginMarketplaceRequestFields } from "../plugin-marketplace-request-fields";
import { parsePluginMarketplaceQuery } from "../plugin-marketplace-route";
import { pluginShareStandaloneAction } from "../plugin-share-standalone-action";
import { resolveRequestedPluginSummary } from "../resolve-requested-plugin-summary";
import { SCHEDULED_TASKS_PLUGIN_ID } from "../scheduled-tasks-plugin-id";
import { shouldReturnToBrowseHistoryFromLocationState } from "../should-return-to-browse-history-from-location-state";
import { ensureInstalledPluginsQueryInit } from "../use-installed-plugins-query";
import { useMarketplaceConnectFlow } from "../use-marketplace-connect-flow";
import { usePluginCategoryPageTelemetry } from "../use-plugin-category-page-telemetry";
import { usePluginConnectorAvailability } from "../use-plugin-connector-availability";


// Wave5d soft JSX companions.
function DeferredUiB(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiH(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function DeferredUiU(props: {
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
function SetRemoteControlEnabledForHost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Spindle(props: {
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
const hazel: any = undefined;
const buildPluginInstallQuery: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFT: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureImportSettingsB4Init@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialB4: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ba-2.tsx) */
const deferredUiBa: any = undefined;
/** Wave GA unresolved companion (jsx-collision:filterConnectedRemoteConnections@hosts/use-selected-host.ts) */
const AppInitialBB: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave GA unresolved companion (missing-export:models/deferred-bw.tsx) */
const DeferredBw: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const buildPluginInstallQueryStub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureSettingsGlyphCHInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialCH: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-cm.ts) */
const deferredUiCm: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePluginMentionPromptInit@browser/browser-use-helpers.ts) */
const AppInitialCN: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/needs-apps.ts) */
const needsApps: any = undefined;
/** Wave GA unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_DN_Init@boundaries/composer-esm-inits.ts) */
const AppInitialDN: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useInAppBrowserFeature@boundaries/browser-use-gate-facades.ts) */
const AppInitialDO: any = undefined;
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
/** Wave GA unresolved companion (jsx-collision:ensureGoogleDriveConnectorIconsInit@plugins/ensure-google-drive-connector-icons-init.ts) */
const AppInitialFK: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFTStub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialFt: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/plugin-scheduled-tasks.tsx) */
const PluginScheduledTasks: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:codexThreadKey@conversation/codex-thread-key.ts) */
const AppInitialGp: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureKeyboardShortcutsHpInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialHp: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ik.ts) */
const deferredUiIk: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isCustomAuthMethod@auth/is-custom-auth-method.ts) */
const AppInitialIK: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/dismiss.ts) */
const dismiss: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pluginProductBrowseNav@plugins/plugin-product-browse-nav.ts) */
const AppInitialIz: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1Stub: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/browser3.tsx) */
const Browser3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureKeyboardShortcutsJtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialJt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensurePluginPageAnalyticsInit@boundaries/browser-use-plugin-facades.ts) */
const AppInitialKz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identityValue@utils/identity-value.ts) */
const AppInitialLt: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-lw-2.tsx) */
const DeferredUiLw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolvePluginMarketplaceDirectRoute@plugins/plugin-marketplace-route.ts) */
const AppInitialLz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useMarketplacePluginsEnabledAtom@plugins/use-marketplace-plugins-enabled-atom.ts) */
const AppInitialMK: any = undefined;
/** Wave GA unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const remoteConnectionStatusAtom: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/plugins.tsx) */
const Plugins: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useIsMountedRef@hooks/use-is-mounted-ref.ts) */
const AppInitialNR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:round@ui/round.ts) */
const AppInitialNt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:skillsPageCompanionAtom@skills/skills-page-helpers.tsx) */
const AppInitialNtt: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const PersonGlyph: any = undefined;
/** Wave GA unresolved companion (jsx-collision:browserUseOriginStateQueryAtom@boundaries/browser-use-mutation-facades.ts) */
const AppInitialOO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localPathWhenMarketplaceMatches@plugins/local-path-when-marketplace-matches.ts) */
const AppInitialOw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureTrafficLightInsetsInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialOZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave GA unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave GA unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave GA unresolved companion (jsx-collision:agentMention@files/agent-mention.ts) */
const AppInitialQj: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useAppInstallPreparingState@apps/use-app-install-preparing-state.ts) */
const AppInitialQK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:createRealtimeVoiceStartHandler@home/realtime-voice-nux.ts) */
const AppInitialQS: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pluginInstallIdentityKey@plugins/plugin-install-identity-key.ts) */
const AppInitialSK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredT@ui/deferred-t.ts) */
const AppInitialT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureSkillsPageHelpersInit@skills/skills-page-helpers.tsx) */
const AppInitialTm: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureMarkdownContentCssClassesInit@markdown/markdown-content-css-classes.ts) */
const AppInitialTR: any = undefined;
/** Wave GA unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ub-2.ts) */
const deferredUiUB: any = undefined;
/** Wave GA unresolved companion (jsx-collision:formatSkillScopeLabelForSkill@skills/format-skill-scope-label-for-skill.ts) */
const AppInitialUj: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useIsVoiceRecordingSupported@voice/use-is-voice-recording-supported.ts) */
const AppInitialUO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:setCodexMicroDeviceStatusOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialUw: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave GA unresolved companion (missing-export:files/file-csv.ts) */
const fileCsv: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/deferred-hosts-vh.ts) */
const deferredHostsVh: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave GA unresolved companion (jsx-collision:setCodexMicroAnalogDirectionOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialVw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:requestRealtimeVoicePresentationSurface@voice/request-realtime-voice-presentation-surface.ts) */
const AppInitialW: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-w22.tsx) */
const DeferredUiW22: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-wh.tsx) */
const deferredUiWh: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:skillScopeMessages@skills/skill-scope-messages.ts) */
const AppInitialWj: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-wm.tsx) */
const DeferredWm: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xj.tsx) */
const deferredUiXj: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/browser-use-gate-facades.ts) */
const useComputerUseGate: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useComputerUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialXK: any = undefined;
/** Wave GA unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const InfiniteScrollSentinel: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredNavigationXO@navigation/deferred-navigation-xo.ts) */
const AppInitialXO: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/coerce-string-or-passthrough.ts) */
const coerceStringOrPassthrough: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/format-location-href.ts) */
const formatLocationHref: any = undefined;
/** Wave GA unresolved companion (jsx-collision:formatLocationHref@navigation/format-location-href.ts) */
const AppInitialXz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:connectorUnavailable@navigation/connector-unavailable.ts) */
const AppInitialYf: any = undefined;
/** Wave GA unresolved companion (jsx-collision:hasHostPluginPair@plugins/has-host-plugin-pair.ts) */
const AppInitialYK: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (missing-export:mcp/presentation.tsx) */
const AppInitialYz: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegisterStub: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureCloseGlyphIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialZo: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageA: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageB: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageC: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageD: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageJ: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageK: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageO: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageQ: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageR: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageS: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageU: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageV: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageW: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageX: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageY: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const _pluginDetailPageZ: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageA: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageB: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageC: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageD: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageDollar: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageE: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageJ: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageK: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageO: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageQ: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageR: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageS: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageU: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageUnderscore: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageV: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageW: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageX: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageY: any = undefined;
/** Wave GA unresolved companion (sib-missing:plugins/plugin-detail-page.ts) */
const pluginDetailPageZ: any = undefined;
function alpha(mandrel) {
  let {
      directoryEntrypoint,
      errorMessage,
      isPageLoading,
      isPluginDataLoading,
      pageName,
      routeKey
    } = mandrel,
    nipple = copper.useRef(false),
    orifice = copper.useRef(null),
    pin = () => ({
      attributes: {
        telemetryOwner: "desktop_client",
        definitionVersion: 1,
        entrypoint: echo[directoryEntrypoint],
        pageKind: falcon[pageName]
      },
      routeKey,
      startedAtMs: performance.timeOrigin + performance.now()
    });
  let [race] = copper.useState(pin),
    sleeve,
    trunnion;
  sleeve = () => {
    nipple.current = true;
    let detent = orifice.current ?? produce.start("plugins_page_load", race.attributes, {
      key: race.routeKey,
      startedAtMs: race.startedAtMs,
      traceAttributes: {
        "plugins.entrypoint": race.attributes.entrypoint,
        "plugins.page_kind": race.attributes.pageKind
      }
    });
    return orifice.current = detent, detent.mark("page_committed"), () => {
      nipple.current = false;
      queueMicrotask(() => {
        !nipple.current && detent.isRecording() && detent.abort("navigation_away");
      });
    };
  };
  trunnion = [race];
  copper.useEffect(sleeve, trunnion);
  let boss, cam;
  if (boss = () => {
    !isPluginDataLoading && errorMessage == null && orifice.current?.mark("plugin_data_ready");
  }, cam = [errorMessage, isPluginDataLoading], copper.useEffect(boss, cam), isPageLoading) return null;
  return <AppInitialOO onPaint={() => {
    let eccentric = orifice.current;
    eccentric == null || !eccentric.isRecording() || (errorMessage == null ? (eccentric.mark("content_visible"), eccentric.end()) : eccentric.fail("plugin_list_failed"));
  }} />;
}
var bravo,
  copper,
  delta,
  echo,
  falcon,
  gamma = esmInit(() => {
    bravo = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    copper = commonJsInit(react(), 1);
    ensureAppMainI9Init();
    useSelectedHost();
    echo = {
      [CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT]: "direct",
      [CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS]: "settings",
      [CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR]: "sidebar",
      [CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER]: "other",
      [CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED]: "other",
      [CodexPluginDirectoryEntrypoint.UNRECOGNIZED]: "other"
    };
    falcon = {
      [CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY]: "category",
      [CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY]: "directory",
      [CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL]: "personal",
      [CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH]: "search",
      [CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE]: "workspace"
    };
  });
function harbor(follower) {
  let guide = follower.source.trim();
  if (guide.length === 0) return null;
  let helix = follower.refName.trim(),
    impeller = follower.sparsePaths.split(/[\n,]+/).map(item => item.trim()).filter(item => item.length > 0);
  return {
    source: guide,
    refName: helix.length > 0 ? helix : null,
    sparsePaths: impeller.length > 0 ? impeller : null
  };
}
async function indigo({
  forceReloadPlugins,
  onReloadError,
  params,
  sendAddMarketplace
}) {
  let journal = await sendAddMarketplace(params);
  try {
    await forceReloadPlugins();
  } catch (kingpin) {
    return onReloadError(kingpin), {
      kind: "reload-failed",
      marketplaceName: journal.marketplaceName
    };
  }
  return {
    alreadyAdded: journal.alreadyAdded,
    kind: "added",
    marketplaceName: journal.marketplaceName
  };
}
var jade = esmInit(() => {});
function kite(land) {
  let {
      onAddMarketplace,
      onOpenChange,
      open
    } = land,
    mesh = useIntl(),
    [neck, pad] = quartz.useState(null),
    quillshaft = {
      source: "",
      refName: "",
      sparsePaths: ""
    };
  let roller = {
    onSubmit: yoke => {
      let {
        value
      } = yoke;
      if (!(value.source.trim().length > 0)) return {
        fields: {
          source: mesh.formatMessage({
            id: "skills.appsPage.addMarketplace.sourceRequired",
            defaultMessage: "Enter a marketplace source",
            description: "Validation message shown when adding a marketplace without a source"
          })
        }
      };
    }
  };
  let spindle = useTanstackForm({
      defaultValues: quillshaft,
      validators: roller,
      onSubmit: async baffle => {
        let {
            value
          } = baffle,
          capstan = harbor(value);
        if (capstan != null) {
          pad(null);
          try {
            await onAddMarketplace(capstan);
            spindle.reset();
            onOpenChange(false);
          } catch (diaphragm) {
            let elbow = diaphragm;
            pad(elbow instanceof Error ? elbow.message : mesh.formatMessage({
              id: "skills.appsPage.addMarketplace.failed",
              defaultMessage: "Failed to add marketplace",
              description: "Fallback error shown when adding a plugin marketplace fails"
            }));
          }
        }
      }
    }),
    thrust = ferrule => {
      let {
          source,
          isSubmitting,
          submissionAttempts
        } = ferrule,
        grommet = header => {
          isSubmitting || (header || (spindle.reset(), pad(null)), onOpenChange(header));
        };
      return <UsePointerSurfaceInteractionGate {...{
        open,
        contentProps: {
          "aria-describedby": undefined
        },
        onOpenChange: grommet,
        shouldIgnoreClickOutside: isSubmitting,
        showDialogClose: !isSubmitting,
        size: "wide",
        children: <DeferredUiB {...{
          as: "form",
          className: "gap-4",
          onSubmit: event => {
            event.preventDefault();
            spindle.handleSubmit();
          },
          children: [<RealtimeVoiceHostId className="sr-only"><MemoizedFormattedMessage id="skills.appsPage.addMarketplace.title" defaultMessage="Add plugin marketplace" description="Dialog title for adding a plugin marketplace" /></RealtimeVoiceHostId>, <DeferredUiU {...{
            children: <DeferredUiH {...{
              title: <MemoizedFormattedMessage id="skills.appsPage.addMarketplace.header" defaultMessage="Add plugin marketplace" description="Header for adding a plugin marketplace" />,
              subtitle: <MemoizedFormattedMessage id="skills.appsPage.addMarketplace.subtitle" defaultMessage={"Add from a GitHub repo, Git URL, or local folder. <link>Learn more</link>"} description="Short description in the add marketplace dialog" values={{
                link: marble
              }} />
            }} />
          }} />, <DeferredUiU {...{
            className: "gap-3",
            children: [<Spindle.Field name="source">{injector => {
                let jumper = submissionAttempts > 0 || injector.state.meta.isBlurred ? injector.state.meta.errors.find(lemon) ?? null : null;
                return <label className={slate} htmlFor="plugin-marketplace-source">{<MemoizedFormattedMessage id="skills.appsPage.addMarketplace.sourceLabel" defaultMessage="Source" description="Label for the marketplace source field" />}<input id="plugin-marketplace-source" aria-describedby={jumper == null ? undefined : "plugin-marketplace-source-error"} aria-invalid={jumper != null} autoFocus={true} className={timber} disabled={isSubmitting} onBlur={injector.handleBlur} onChange={event => {
                    injector.handleChange(event.target.value);
                  }} placeholder={mesh.formatMessage({
                    id: "skills.appsPage.addMarketplace.sourcePlaceholder",
                    defaultMessage: "openai/plugins or git@github.com:org/repo.git",
                    description: "Placeholder for the marketplace source field"
                  })} type="text" value={injector.state.value} />{jumper == null ? null : <span id="plugin-marketplace-source-error" className="text-token-error-foreground">{jumper}</span>}</label>;
              }}</spindle.Field>, <Spindle.Field name="refName">{kerf => <label className={slate} htmlFor="plugin-marketplace-ref">{<MemoizedFormattedMessage id="skills.appsPage.addMarketplace.refLabel" defaultMessage="Git ref" description="Label for the optional marketplace git ref field" />}<input id="plugin-marketplace-ref" className={timber} disabled={isSubmitting} onBlur={kerf.handleBlur} onChange={event => {
                  kerf.handleChange(event.target.value);
                }} placeholder={mesh.formatMessage({
                  id: "skills.appsPage.addMarketplace.refPlaceholder",
                  defaultMessage: "main",
                  description: "Placeholder for the optional marketplace git ref field"
                })} type="text" value={kerf.state.value} /></label>}</spindle.Field>, <Spindle.Field name="sparsePaths">{louver => <label className={slate} htmlFor="plugin-marketplace-sparse-paths">{<MemoizedFormattedMessage id="skills.appsPage.addMarketplace.sparsePathsLabel" defaultMessage="Sparse paths" description="Label for the optional marketplace sparse paths field" />}<textarea id="plugin-marketplace-sparse-paths" className={IntlProvider(timber, "min-h-20 resize-y")} disabled={isSubmitting} onBlur={louver.handleBlur} onChange={event => {
                  louver.handleChange(event.target.value);
                }} placeholder={mesh.formatMessage({
                  id: "skills.appsPage.addMarketplace.sparsePathsPlaceholder",
                  defaultMessage: "plugins/codex",
                  description: "Placeholder for the optional marketplace sparse paths field"
                })} value={louver.state.value} /></label>}</spindle.Field>, neck == null ? null : <div className="text-sm text-token-error-foreground" role="alert">{neck}</div>]
          }} />, <DeferredUiU {...{
            children: <SetRemoteControlEnabledForHost {...{
              children: [<ReadLoginRouteQuerySnapshot {...{
                color: "outline",
                disabled: isSubmitting,
                onClick: () => {
                  grommet(false);
                },
                children: <MemoizedFormattedMessage id="skills.appsPage.addMarketplace.cancel" defaultMessage="Cancel" description="Cancel button in the add marketplace dialog" />
              }} />, <ReadLoginRouteQuerySnapshot {...{
                disabled: source.trim().length === 0 || isSubmitting,
                loading: isSubmitting,
                type: "submit",
                children: <MemoizedFormattedMessage id="skills.appsPage.addMarketplace.submit" defaultMessage="Add marketplace" description="Submit button in the add marketplace dialog" />
              }} />]
            }} />
          }} />]
        }} />
      }} />;
    };
  return <Spindle.Subscribe selector={onyx}>{thrust}</spindle.Subscribe>;
}
function lemon(manifold) {
  return typeof manifold == "string";
}
function marble(nip) {
  return <a className="cursor-interaction text-token-link underline-offset-2 hover:underline" href="https://developers.openai.com/codex/plugins/build" onClick={nickel}>{nip}</a>;
}
function nickel(outlet) {
  deferredUiEnt({
    event: outlet,
    href: "https://developers.openai.com/codex/plugins/build",
    initiator: "open_in_browser_bridge"
  });
}
function onyx(packing) {
  return {
    source: packing.values.source,
    isSubmitting: packing.isSubmitting,
    submissionAttempts: packing.submissionAttempts
  };
}
var pearl,
  quartz,
  river,
  slate,
  timber,
  umbra = esmInit(() => {
    pearl = reactCompilerRuntime();
    ensureTanstackReactFormApiInit();
    ensureComposerEsm_Tft_Init();
    quartz = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Qtt_Init();
    jade();
    slate = "flex flex-col gap-1.5 text-sm text-token-description-foreground";
    timber = "w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border";
  });
function violet(reducer) {
  let strainer = willow.parse(reducer);
  return {
    categoryIds: strainer.category_ids,
    collapsedCategoryIds: strainer.collapsed_category_ids,
    sections: strainer.sections.map(item => ({
      id: item.id,
      pluginIds: item.plugin_ids
    }))
  };
}
var willow,
  xenon = esmInit(() => {
    coalesceTruthy();
    willow = deferredUiXT({
      category_ids: deferredNavigationFT(coalesceTruthy()).default([]).catch([]),
      collapsed_category_ids: deferredNavigationFT(coalesceTruthy()).default([]).catch([]),
      sections: deferredNavigationFT(deferredUiXT({
        id: coalesceTruthy(),
        plugin_ids: deferredNavigationFT(coalesceTruthy()).default([]).catch([])
      })).default([]).catch([])
    }).catch({
      category_ids: [],
      collapsed_category_ids: [],
      sections: []
    });
  });
function yellow(tee) {
  return {
    hiddenPluginIds: zinc.parse(tee).hidden_plugin_ids
  };
}
var zinc,
  amber = esmInit(() => {
    coalesceTruthy();
    zinc = deferredUiXT({
      hidden_plugin_ids: deferredNavigationFT(coalesceTruthy()).default([])
    }).catch({
      hidden_plugin_ids: []
    });
  }),
  basalt,
  cedar,
  daisy,
  ember = esmInit(() => {
    basalt = "_container_1ujd8_1";
    cedar = "_grid_1ujd8_5";
    daisy = {
      container: basalt,
      grid: cedar
    };
  });
export function pluginsPageC(union: unknown) {
  let {
      children,
      className
    } = union,
    vent = IntlProvider(className, daisy.container);
  return <div className={vent}>{children}</div>;
}
export function pluginsPageL(wye: unknown) {
  let {
      children,
      className,
      gap = "default",
      isSingleColumn = false
    } = wye,
    zener = hazel[gap],
    alphaPrime = isSingleColumn ? "grid-cols-1" : daisy.grid,
    bravoPrime = IntlProvider("grid", zener, alphaPrime, className);
  return <div className={bravoPrime}>{children}</div>;
}
