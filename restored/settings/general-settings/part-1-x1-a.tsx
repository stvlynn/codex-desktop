// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Wave FZ — full polished body from `general-settings-DaCT8Zmh/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 81 (verified 149/229).
// AST split 1/7
/* split-lane-import-depth:1 */

import { ensureRateLimitResetDialogInit } from "../../account/ensure-rate-limit-reset-dialog-init";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { ReferralInviteEligibility } from "../../account/referral-invite-eligibility";
import { ReferralInviteTracking } from "../../account/referral-invite-tracking";
import { updateSubscriptionPlan } from "../../account/wham-subscription-onboarding-posts";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexInAppBrowserToolbarActionType } from "../../analytics/codex-in-app-browser-toolbar-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexPluginSource } from "../../analytics/codex-plugin-source";
import { CODEX_PROFILE_EDIT_EVENT_TYPE } from "../../analytics/codex-profile-edit-event-type";
import { CodexRealtimeVoiceSessionEndReason } from "../../analytics/codex-realtime-voice-session-end-reason";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppSurfaceId } from "../../app/app-surface-ids";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { resolveGuardianApprovalWorkspaceWriteMode } from "../../approvals/resolve-guardian-approval-workspace-write-mode";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom, localeMessagesAtom, useStepsProseAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_BU_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_ZE_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { IN_APP_BROWSER_OPEN_TARGET } from "../../browser/in-app-browser-open-target";
import { getChatGptAccountInfoQueryConfig } from "../../cloud/account-info-query";
import { resolveCodexCloudAccess } from "../../cloud/resolve-codex-cloud-access";
import { ENTER_KEY_BEHAVIOR_IDS } from "../../composer/enter-key-behavior-ids";
import { localReasoningEffortMessages } from "../../composer/local-reasoning-effort-messages";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { OPENAI_PRIMARY_RUNTIME_ID } from "../../config/openai-primary-runtime-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { sidebarThreadKeyToPath } from "../../conversation/sidebar-thread-path";
import { THREAD_DETAIL_LEVEL_STEPS_COMMANDS } from "../../conversation/thread-detail-level-ids";
import { useConversationHostFeatureFlags } from "../../conversation/use-conversation-host-feature-flags";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { parseDiffFromFile } from "../../diff/parse-diff-from-file";
import { SwitchToSplitDiffButton } from "../../diff/switch-to-split-diff-button";
import { DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { WSL_REMOTE_CONNECTIONS_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { FkrDataBridge } from "../../hooks/fkr-data-bridge";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostChatgptAuthMethod } from "../../hosts/use-host-chatgpt-auth-method";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AddContextSquareIcon } from "../../icons/add-context-square-icon";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconVn } from "../../icons/app-icon-vn";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { resolveOnboardingCatalogKind } from "../../onboarding/resolve-onboarding-catalog-kind";
import { resolveDefaultAgentMode } from "../../permissions/resolve-default-agent-mode";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { codexMicroAgentSource } from "../../shell/codex-micro-agent-source";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { activatePanelTabOrFallback } from "../../ui/activate-panel-tab-or-fallback";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { context } from "../../ui/context";
import { deferredRv } from "../../ui/deferred-rv";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ensureFormattedMessageFragmentInit } from "../../ui/ensure-formatted-message-fragment-init";
import { macOS4 } from "../../ui/mac-os4";
import { macOS5 } from "../../ui/mac-os5";
import { MemoizedPropBridge } from "../../ui/memoized-prop-bridge";
import { TriggerMenuPopover } from "../../ui/trigger-menu-popover";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { setKeyedStoreAtomValueXU } from "../../utils/set-keyed-store-atom-value";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsGctInit, ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePullRequestMediaGUInit, ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { CodeThemePreviewGlyph } from "../code-theme-preview-glyph";
import { ensureGranularPermissionsClusterInit } from "../ensure-granular-permissions-cluster-init";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureGpuTearingDebugSettingsInit } from "../gpu-tearing-debug-settings";
import { hotkeySetterN, hotkeySetterT as HotkeySetterT } from "../hotkey-setter";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureReviewDeliverySettingsRowInit, ReviewDeliverySettingsRow } from "../review-delivery-settings-row";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { getSettingValue } from "../settings-values";
import { useSettingValue } from "../use-setting-value";
import { buildVscodeQueryKey } from "../vscode-query-key";
import { WorkspaceImportSettingsSection } from "../workspace-import-settings-section";
const deferredUiRE: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:toggleSortedIdList@utils/toggle-sorted-id-list.ts) */
const AppInitialA: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ae.tsx) */
const deferredUiAE: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredOnboardingAn@onboarding/deferred-onboarding-an.tsx) */
const AppInitialAn: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/await-with-abort.ts) */
const awaitWithAbort: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSettingsGlyphBnInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialBn: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:focusAreaAtom@navigation/app-shell-atoms.ts) */
const AppInitialD0: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:parseUrlOrFallback@utils/parse-url-or-fallback.ts) */
const AppInitialDC: any = undefined;
/** Wave FZ unresolved companion (missing-export:hooks/deferred-dx.tsx) */
const DeferredDX: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-f22.tsx) */
const DeferredUiF22: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:formatRateLimitResetError@account/format-rate-limit-reset-error.ts) */
const AppInitialFv: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiHn@ui/deferred-ui-hn.tsx) */
const AppInitialHn: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiIE@ui/deferred-ui-ie.tsx) */
const AppInitialIE: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/wsl-remote-connections.tsx) */
const AppInitialKh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:card@hosts/card.ts) */
const AppInitialKpt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useReadyHostManager@hosts/use-ready-host-manager.ts) */
const AppInitialKX: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:codexThemeV1@settings/codex-theme-v1.ts) */
const AppInitialLn: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureChromeThemeDefaultsInit@appearance/chrome-theme-defaults.ts) */
const AppInitialLW: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/codex-profile-dropdown-open-config-toml.ts) */
const codexProfileDropdownOpenConfigToml: any = undefined;
/** Wave FZ unresolved companion (missing-export:review/review-branch-picker.tsx) */
const ReviewBranchPicker: any = undefined;
/** Wave FZ unresolved companion (missing-export:editors/code-symbol-outline-panel.tsx) */
const CodeSymbolOutlinePanel: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:httpsOpenaiComFormLifeSciencesAccess@utils/https-openai-com-form-life-sciences-access.ts) */
const AppInitialOC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-oe.tsx) */
const deferredUiOE: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:size12AriaIcon@ui/size12-aria-icon.ts) */
const AppInitialOn: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ox3.tsx) */
const deferredUiOX3: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FZ unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:createRateLimitCreditRedeemer@account/create-rate-limit-credit-redeemer.ts) */
const AppInitialPv: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:lerpIfFinite@utils/lerp-if-finite.ts) */
const AppInitialQ1: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:scrollLocalConversationItemIntoView@dom/scroll-local-conversation-item-into-view.ts) */
const AppInitialQh: any = undefined;
/** Wave FZ unresolved companion (missing-export:composer/deferred-composer-qq.ts) */
const deferredComposerQq: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:createRealtimeVoiceStartHandler@home/realtime-voice-nux.ts) */
const AppInitialQS: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-re.ts) */
const deferredUiREStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChromeAndCodeThemeSync@appearance/use-chrome-and-code-theme-sync.ts) */
const AppInitialRn: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/settings-ipc.ts) */
const persistSettingValue: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FZ unresolved companion (missing-export:thread/thread-side-panel-tabs.ts) */
const toggleThreadSidePanel: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredT@ui/deferred-t.ts) */
const AppInitialT: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiTo@ui/deferred-ui-to.ts) */
const AppInitialTo: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiUStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:models/seen-model-upgrade-list.tsx) */
const SeenModelUpgradeList: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVB@hosts/deferred-vb.ts) */
const AppInitialVB: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:setVacRouteForWorkspacePath@navigation/set-vac-route-for-workspace-path.ts) */
const AppInitialVp: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ambientSuggestionsSettingsDefinitions@settings/ambient-suggestions-enabled-settings-definitions.ts) */
const AppInitialVpt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:renderStringOrIntlMessage@i18n/render-string-or-intl-message.tsx) */
const AppInitialVS: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/inline-rename-field.tsx) */
const AppInitialWo: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:pathContainsWorktreesDir@files/path-contains-worktrees-dir.ts) */
const AppInitialWpt: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:localProjectRootsAtom@settings/hooks-query-atoms.ts) */
const AppInitialX4: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/transaction-event-plugin.tsx) */
const TransactionEventPlugin: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/deferred-hosts-y4.ts) */
const deferredHostsY4: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-yo2.tsx) */
const AppInitialYO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chats2@conversation/chats2.ts) */
const AppInitialYp: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatProcessRegister@ui/chat-process-register.ts) */
const AppInitialZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/deferred-hosts-z4.ts) */
const deferredHostsZ4: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isBusinessPlanExcludingEducation@account/plan-type-helpers.ts) */
const AppInitialZ7: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isAbortError@utils/is-abort-error.ts) */
const AppInitialZn: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:nodeContentLength@dom/node-content-length.ts) */
const AppInitialZS: any = undefined;
var alpha,
  bravo,
  copper = esmInit(() => {
    react();
    bravo = lemon => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 120" {...lemon}>
        <path fill="#9f9f9f" d="M49 26h72a3 3 0 0 1 0 6H49a3 3 0 0 1 0-6Z" />
        <path fill="#8f8f8f" d="M28 35h114a2 2 0 0 1 0 4H28a2 2 0 0 1 0-4Z" />
        <path fill="#fff" d="M15 52a8 8 0 0 1 8-8h124a8 8 0 0 1 8 8v68H15V52Z" />
        <path fill="#dfdfdf" d="M22 59a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 67h65v2H22zM15 76h140v1H15z" />
        <path fill="#dfdfdf" d="M22 83a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 91h65v2H22zM15 100h140v1H15z" />
        <path fill="#dfdfdf" d="M22 107a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 115h65v2H22z" />
      </svg>;
  }),
  delta,
  echo,
  falcon = esmInit(() => {
    react();
    echo = marble => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 120" {...marble}>
        <path fill="#cdcdcd" d="M49 26h72a3 3 0 0 1 0 6H49a3 3 0 0 1 0-6Z" />
        <path fill="#dfdfdf" d="M28 35h114a2 2 0 0 1 0 4H28a2 2 0 0 1 0-4Z" />
        <path fill="#fff" d="M15 52a8 8 0 0 1 8-8h124a8 8 0 0 1 8 8v68H15V52Z" />
        <path fill="#dfdfdf" d="M22 59a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 67h65v2H22zM15 76h140v1H15z" />
        <path fill="#dfdfdf" d="M22 83a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 91h65v2H22zM15 100h140v1H15z" />
        <path fill="#dfdfdf" d="M22 107a3 3 0 0 1 3-3h39a3 3 0 0 1 0 6H25a3 3 0 0 1-3-3Z" />
        <path fill="#f3f3f3" d="M22 115h65v2H22z" />
      </svg>;
  }),
  gamma,
  harbor,
  indigo = esmInit(() => {
    react();
    harbor = nickel => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 120" {...nickel}>
        <defs>
          <clipPath id="system-preview-sheet">
            <path d="M7 42a8 8 0 0 1 8-8h140a8 8 0 0 1 8 8v78H7V42Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#system-preview-sheet)">
          <path fill="#f3f3f3" d="M7 34h78v86H7z" />
          <path fill="#393939" d="M85 34h78v86H85z" />
          <path fill="#cdcdcd" d="M73 59h12v6H73a3 3 0 0 1 0-6Z" />
          <path fill="#767676" d="M85 59h9a3 3 0 0 1 0 6h-9Z" />
          <path fill="#dfdfdf" d="M53 68h32v3H53z" />
          <path fill="#8f8f8f" d="M85 68h32v3H85z" />
          <path fill="#fff" d="M26 84a7 7 0 0 1 7-7h52v43H26V84Z" />
          <path fill="#4f4f4f" d="M85 77h52a7 7 0 0 1 7 7v36H85V77Z" />
          <path fill="#dfdfdf" d="M32 88a3 3 0 0 1 3-3h29a3 3 0 0 1 0 6H35a3 3 0 0 1-3-3Z" />
          <path fill="#767676" d="M103 88a3 3 0 0 1 3-3h29a3 3 0 0 1 0 6h-29a3 3 0 0 1-3-3Z" />
          <path fill="#f3f3f3" d="M32 96h53v2H32zM26 105h59v1H26z" />
          <path fill="#767676" d="M85 96h53v2H85zM85 105h59v1H85z" />
          <path fill="#dfdfdf" d="M32 114a3 3 0 0 1 3-3h29a3 3 0 0 1 0 6H35a3 3 0 0 1-3-3Z" />
          <path fill="#767676" d="M103 114a3 3 0 0 1 3-3h29a3 3 0 0 1 0 6h-29a3 3 0 0 1-3-3Z" />
        </g>
      </svg>;
  }),
  jade,
  kite = esmInit(() => {
    ensureIntlFormattersInit();
    jade = identity({
      theme: {
        id: "settings.general.appearance.theme",
        defaultMessage: "Theme",
        description: "Label for theme selector in appearance settings"
      },
      light: {
        id: "settings.general.appearance.theme.light",
        defaultMessage: "Light",
        description: "Light theme option"
      },
      dark: {
        id: "settings.general.appearance.theme.dark",
        defaultMessage: "Dark",
        description: "Dark theme option"
      },
      themeSystem: {
        id: "settings.general.appearance.theme.system",
        defaultMessage: "System",
        description: "System theme option"
      },
      chromeThemeAccent: {
        id: "settings.general.appearance.chromeTheme.accent.short",
        defaultMessage: "Accent",
        description: "Short label for the accent color picker"
      },
      chromeThemeBackground: {
        id: "settings.general.appearance.chromeTheme.surface.short",
        defaultMessage: "Background",
        description: "Short label for the background color picker"
      },
      chromeThemeForeground: {
        id: "settings.general.appearance.chromeTheme.ink.short",
        defaultMessage: "Foreground",
        description: "Short label for the foreground color picker"
      },
      chromeThemeContrast: {
        id: "settings.general.appearance.chromeTheme.contrast.short",
        defaultMessage: "Contrast",
        description: "Short label for the contrast slider"
      },
      chromeThemeTranslucentSidebar: {
        id: "settings.general.appearance.chromeTheme.translucentSidebar.short",
        defaultMessage: "Translucent sidebar",
        description: "Short label for the translucent sidebar toggle"
      },
      chromeThemeUiFont: {
        id: "settings.general.appearance.chromeTheme.uiFontFamily.short",
        defaultMessage: "UI font",
        description: "Short label for the UI font input"
      },
      chromeThemeCodeFont: {
        id: "settings.general.appearance.chromeTheme.codeFontFamily.short",
        defaultMessage: "Code font",
        description: "Short label for the code font input"
      },
      pointerCursors: {
        id: "settings.general.appearance.usePointerCursors.label",
        defaultMessage: "Use pointer cursors",
        description: "Label for pointer cursor interaction setting"
      },
      diffMarkers: {
        id: "settings.general.appearance.diffMarkerStyle.label",
        defaultMessage: "Diff markers",
        description: "Label for the diff marker style setting"
      },
      color: {
        id: "settings.general.appearance.diffMarkerStyle.color",
        defaultMessage: "Color",
        description: "Color diff marker style option label"
      },
      plusMinus: {
        id: "settings.general.appearance.diffMarkerStyle.symbols",
        defaultMessage: "+/-",
        description: "Plus and minus diff marker style option label"
      },
      reduceMotion: {
        id: "settings.general.appearance.reducedMotion.label",
        defaultMessage: "Reduce motion",
        description: "Label for the reduced motion appearance setting"
      },
      reducedMotionSystem: {
        id: "settings.general.appearance.reducedMotion.system",
        defaultMessage: "System",
        description: "System reduced motion option"
      },
      on: {
        id: "settings.general.appearance.reducedMotion.on",
        defaultMessage: "On",
        description: "On reduced motion option"
      },
      off: {
        id: "settings.general.appearance.reducedMotion.off",
        defaultMessage: "Off",
        description: "Off reduced motion option"
      },
      uiFontSize: {
        id: "settings.general.appearance.sansFontSize.row",
        defaultMessage: "UI font size",
        description: "Label for UI font size setting"
      },
      codeFontSize: {
        id: "settings.general.appearance.codeFontSize.row",
        defaultMessage: "Code font size",
        description: "Label for code font size controls"
      },
      fontSmoothing: {
        id: "settings.general.appearance.fontSmoothing.label",
        defaultMessage: "Font smoothing",
        description: "Label for the macOS font smoothing setting"
      }
    });
  });
