// Restored from ref/webview/assets/local-remote-dropdown-BYLT5Lpc.js
// Wave GA — full polished body from `local-remote-dropdown-BYLT5Lpc/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 79 (verified 141/220).
// Careful split export-budget 1/2
/* split-lane-import-depth:1 */

import { getCreditsPurchaseMinimumQuantity, parseFormattedCreditsQuantityString } from "../../account/credits-purchase-field-validators";
import { RateLimitResetCreditsDialog } from "../../account/rate-limit-reset-credits-dialog";
import { trimRateLimitName } from "../../account/trim-rate-limit-name";
import { useProfileUsageQuery as UseProfileUsageQuery } from "../../account/use-profile-usage-query";
import { appActionSidebarSectionRefSchema } from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_ONBOARDING_WELCOME_OPTION_TOGGLED_TYPE } from "../../analytics/codex-onboarding-welcome-option-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import { queueAutomationRun } from "../../automation/queue-automation-run";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { resolveCodexCloudAccess } from "../../cloud/resolve-codex-cloud-access";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationSh as DeferredConversationSh } from "../../conversation/deferred-conversation-sh";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { hasLoadedOldestItems } from "../../conversation/has-loaded-oldest-items";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL, CHATGPT_CODEX_CLOUD_URL } from "../../docs/chatgpt-cloud-urls";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { environmentLabelsA, environmentLabelsC, environmentLabelsO, environmentLabelsS } from "../../environments/environment-labels";
import { CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { visualizationIdFromPath } from "../../files/visualization-html-path";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import { ensureHostRpcClientsInit, getHostConfigId, getHostRpcClient } from "../../hooks/host-rpc-client";
import { ensureUseCodexWorktreesInit, useCodexWorktrees } from "../../hooks/use-codex-worktrees";
import { useGitRepoLiveQuery } from "../../hooks/use-git-repo-live-query";
import { ensureUseGitSubmodulePathsInit, useGitSubmodulePaths } from "../../hooks/use-git-submodule-paths";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconEH } from "../../icons/app-icon-eh";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZg } from "../../icons/app-icon-zg";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { DockIcon, EnsureDockIconInit } from "../../icons/dock-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { useTeenOnboardingAgeGate } from "../../onboarding/use-teen-onboarding-age-gate";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { filterProjectsByFuzzyQuery } from "../../projects/filter-projects-by-fuzzy-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { SettingsDependenciesGuard } from "../../settings/settings-dependencies-guard";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit, usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { ChromeBackgroundPanel } from "../../ui/chrome-background-panel";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { useListKeyboardNavigation } from "../../ui/use-list-keyboard-navigation";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { stripDisallowedPathChars } from "../../utils/strip-disallowed-path-chars";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { titleCaseLastPathSegment } from "../../utils/title-case-last-path-segment";
import { ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import { uniqueGithubOrigins } from "../../workspace/unique-github-origins";
import { enqueueWorktreeDirectionTask } from "../../worktree/enqueue-worktree-direction-task";
import { ToWorktree } from "../../worktree/to-worktree";
import { ComposerCategoryValueChip } from "../composer-category-value-chip";
import { getPluginDisplayName } from "../get-plugin-display-name";
import { getPluginShortDescription } from "../get-plugin-short-description";

const deferredUiQg: any = undefined;

const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isActiveHostWorktreeOperation@environments/is-active-host-worktree-operation.ts) */
const AppInitialAg: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/deferred-hosts-am.ts) */
const deferredHostsAM: any = undefined;
/** Wave GA unresolved companion (jsx-collision:filterRowsByActiveLimitName@usage/filter-rows-by-active-limit-name.ts) */
const AppInitialBb: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/commit-modal.ts) */
const commitModal: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-footer-uoylu22.ts) */
const applyFooterUoylu22: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolveWorktreeHandoffDirection@environments/worktree-handoff-helpers.ts) */
const AppInitialDg: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-dh.tsx) */
const deferredUiDH: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolveWorktreeBranchForConversation@environments/resolve-worktree-branch-for-conversation.ts) */
const AppInitialEg: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:usePetsSettingsController@settings/use-pets-settings-controller.ts) */
const AppInitialEz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useThreadHandoffDisabledReason@conversation/use-thread-handoff-disabled-reason.ts) */
const AppInitialFg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isUsageRateLimitBlocked@usage/is-usage-rate-limit-blocked.ts) */
const AppInitialGb: any = undefined;
/** Wave GA unresolved companion (jsx-collision:localConversationSyncSetupBranchName@conversation/local-conversation-sync-setup-branch-name.ts) */
const AppInitialGE: any = undefined;
/** Wave GA unresolved companion (missing-export:projects/codex-cloud-access.tsx) */
const CodexCloudAccess: any = undefined;
/** Wave GA unresolved companion (jsx-collision:collectRateLimitUsageSnapshots@account/collect-rate-limit-usage-snapshots.ts) */
const AppInitialHb: any = undefined;
/** Wave GA unresolved companion (missing-export:worktree/queued.tsx) */
const Queued: any = undefined;
/** Wave GA unresolved companion (jsx-collision:defaultViewFromTarget@dom/default-view-from-target.ts) */
const AppInitialHv: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_IB_Init@boundaries/composer-esm-inits.ts) */
const AppInitialIB: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/pending-pasted-text-attachments.ts) */
const pendingPastedTextAttachments: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/cmdk-item-select.tsx) */
const CmdkItemSelect: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/list-permission-profiles.tsx) */
const ListPermissionProfiles: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceIXInit: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (jsx-collision:stripDisallowedPathChars@utils/strip-disallowed-path-chars.ts) */
const AppInitialJg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:buildRateLimitUsageSnapshot@account/build-rate-limit-usage-snapshot.ts) */
const AppInitialKb: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_Kg_Init@boundaries/composer-esm-inits.ts) */
const AppInitialKg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredConversationLJ@conversation/deferred-conversation-lj.ts) */
const AppInitialLJ: any = undefined;
/** Wave GA unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave GA unresolved companion (jsx-collision:pickSourcePosition@utils/pick-source-position.ts) */
const AppInitialMg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ghostActive@hosts/ghost-active.ts) */
const AppInitialNg: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsO3Init: any = undefined;
/** Wave GA unresolved companion (jsx-collision:clearSuccessfulWorktreeOperation@environments/worktree-handoff-helpers.ts) */
const AppInitialOg: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-p22.tsx) */
const DeferredUiP22: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave GA unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave GA unresolved companion (jsx-collision:moveThread@worktree/move-thread.ts) */
const AppInitialPg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:createRateLimitCreditRedeemer@account/create-rate-limit-credit-redeemer.ts) */
const AppInitialPv: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-qdt.ts) */
const deferredUiQdt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredUiQg@ui/deferred-ui-qg.tsx) */
const AppInitialQg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:repoWorktreeWorkspaceRoots@git/repo-worktree-workspace-roots.ts) */
const AppInitialRd: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (jsx-collision:composerNavigation2@composer/composer-navigation2.ts) */
const AppInitialRS: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsSDInit: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-footer-uoylu2.ts) */
const applyFooterUoylu2: any = undefined;
/** Wave GA unresolved companion (missing-export:composer/deferred-tc.tsx) */
const DeferredTC: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chatgpt5.tsx) */
const Chatgpt5: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/remote-host-globe-color-by-host-id.tsx) */
const RemoteHostGlobeColorByHostId: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-u232.tsx) */
const DeferredUiU232: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave GA unresolved companion (app-initial-unresolved-short) */
const appInitialValue: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-vv.tsx) */
const AppInitialVv: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-we.ts) */
const deferredConversationWE: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredWg@ui/deferred-wg-2.tsx) */
const AppInitialWg: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useHostChatgptAuthMethod@hosts/use-host-chatgpt-auth-method.ts) */
const AppInitialWY: any = undefined;
/** Wave GA unresolved companion (jsx-collision:collectUniqueMappedPresenceEntries@shell/collect-unique-mapped-presence-entries.ts) */
const AppInitialX: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-x232.tsx) */
const DeferredUiX232: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xg.tsx) */
const deferredUiXg: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
/** Wave GA unresolved companion (jsx-collision:findEntryByModel@utils/find-entry-by-model.ts) */
const AppInitialXY: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (missing-export:projects/deferred-projects-yx.ts) */
const deferredProjectsYx: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-zd.tsx) */
const DeferredZd: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_ZE_Init@boundaries/composer-esm-inits.ts) */
const AppInitialZE: any = undefined;
function alpha(apex, brook, cliff) {
  let dusk = falcon.useDeferredValue(apex),
    elm = brook?.id,
    fern = {
      envQuery: dusk,
      selectedEnvironmentId: elm
    };
  let {
      availableEnvironments,
      errorLoadingAllEnvironments,
      isLoadingAllEnvironments,
      listToShow
    } = CodexBrowserSurfaceActionType(indigo, fern),
    grove = NativeContextMenuSurface("1907601843"),
    hill = brook == null ? null : availableEnvironments.find(item => item.id === brook.id) ?? null;
  let isle = hill,
    juniper = grove && !isLoadingAllEnvironments && availableEnvironments.length === 0,
    lagoon,
    meadow;
  lagoon = () => {
    cliff == null || isle != null || cliff(availableEnvironments[0] ?? null);
  };
  meadow = [availableEnvironments, isle, cliff];
  falcon.useEffect(lagoon, meadow);
  let nest = errorLoadingAllEnvironments instanceof ensureReviewFileAppActionAttrsInit && errorLoadingAllEnvironments.status === 404,
    oak = listToShow.length > 0 ? "list" : isLoadingAllEnvironments ? "loading" : errorLoadingAllEnvironments && !nest ? "error" : apex.length > 0 ? "none-found" : "empty";
  return {
    envListState: oak,
    listToShow,
    zeroEnvironments: juniper
  };
}
async function bravo(petal) {
  return (await Promise.all(petal.map(({
    owner,
    repoName
  }) => decodeBase64ToBytes.safeGet("/wham/environments/by-repo/{provider}/{repo_owner}/{repo_name}", {
    parameters: {
      path: {
        provider: "github",
        repo_owner: owner,
        repo_name: repoName
      }
    }
  })))).flat();
}
var copper,
  delta,
  echo,
  falcon,
  _r,
  gamma,
  harbor,
  indigo,
  jade = esmInit(() => {
    copper = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    delta = commonJsInit(findProcessManagerRow(), 1);
    echo = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
    ensureComposerEsm_MT_Init();
    falcon = commonJsInit(react(), 1);
    RealtimeVoiceHostId();
    usePlatformAwareFeatureGate();
    ensureAppScopeInit();
    ensureSkillsPageHelpersInit();
    dataAppActionReviewFileExpanded();
    ensureCloudApiClientInit();
    appActionSidebarSectionRefSchema();
    _r = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryKey: ["environments"],
      queryFn: async () => decodeBase64ToBytes.safeGet("/wham/environments"),
      placeholderData: identityValue,
      staleTime: readScrollTop.FIVE_MINUTES
    }));
    gamma = createAppScopeQueryAtom(appScopeAtom, ({
      get
    }) => {
      let quiet = get(collectUniqueMappedPresenceEntries, {
          params: undefined,
          source: "workspace_repo_owner_names"
        }),
        rain = uniqueGithubOrigins(quiet.data?.origins ?? []);
      return {
        queryKey: ["workspace", "environments-by-repo", "results", ...delta.default(rain, ["owner", "repoName"]).flatMap(({
          owner,
          repoName
        }) => [owner, repoName])],
        enabled: quiet.isSuccess,
        staleTime: readScrollTop.FIVE_MINUTES,
        queryFn: bravo.bind(null, rain)
      };
    });
    harbor = deferredUiXT(appScopeAtom, ({
      get
    }) => echo.default([...(get(gamma).data ?? []), ...(get(_r).data ?? [])], seed => seed.id));
    indigo = clearActiveOverlayAfterNavigate(appScopeAtom, ({
      envQuery,
      selectedEnvironmentId
    }, {
      get
    }) => {
      let trail = get(_r),
        urn = get(gamma).data ?? [],
        vine = new Set(urn.map(item => item.id)),
        wind = get(harbor),
        yarrow = envQuery.trim().toLowerCase(),
        azure = [...(yarrow.length > 0 ? wind.filter(item => item.label?.toLowerCase().includes(yarrow)) : wind)].sort((birch, canyon) => {
          if (birch.id === selectedEnvironmentId) return -1;
          if (canyon.id === selectedEnvironmentId) return 1;
          let dew = vine.has(birch.id);
          if (dew !== vine.has(canyon.id)) return dew ? -1 : 1;
          if (!!birch.is_pinned != !!canyon.is_pinned) return birch.is_pinned ? -1 : 1;
          let ever = (canyon.task_count ?? 0) - (birch.task_count ?? 0);
          return ever === 0 ? (birch.label ?? "").localeCompare(canyon.label ?? "") : ever;
        });
      return {
        availableEnvironments: wind,
        errorLoadingAllEnvironments: trail.error,
        isLoadingAllEnvironments: trail.isLoading,
        listToShow: azure
      };
    });
  });
function kite({
  cloudAccess,
  hasGitRepository,
  isBrowser
}) {
  return (hasGitRepository || isBrowser) && cloudAccess === "enabled";
}
export function localRemoteDropdownO(yarrowSecond: unknown) {
  return yarrowSecond !== "cloud";
}
export var localRemoteDropdownA = esmInit(() => {});
