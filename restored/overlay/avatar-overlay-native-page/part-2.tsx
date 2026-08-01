// Restored from ref/webview/assets/avatar-overlay-native-page-CfbzKR8n.js
// Wave FY — full polished body from `avatar-overlay-native-page-CfbzKR8n/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 37 (verified 89/126).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/6
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { NOOP_ANALYTICS_CLIENT } from "../../analytics/noop-analytics-client";
import { APP_VERSION } from "../../app/app-version";
import { avatarOverlayNativeFrame_a, avatarOverlayNativeFrame_i, avatarOverlayNativeFrame_n, avatarOverlayNativeFrame_o, avatarOverlayNativeFrame_r, avatarOverlayNativeFrame_t } from "../../artifact/avatar-overlay-native-frame";
import { AvatarOverlayPillDismissButton, ensureAvatarOverlayPillDismissButtonUiInit } from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { avatarOverlayMascotAspectRatio, defaultAvatarOverlayMascotWidthPx, ensureAvatarOverlayMascotSizeInit, useAvatarOverlayMascotSize } from "../../desktop/avatar-overlay-mascot-size";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { ensureUseFloatingWindowPointerInteractivityInit, useFloatingWindowPointerInteractivity } from "../../hooks/use-floating-window-pointer-interactivity";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJG } from "../../icons/app-icon-jg";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../avatar-overlay-surface-stack-ids";
import { buildAvatarOverlayAnalyticsPayload } from "../build-avatar-overlay-analytics-payload";
import { avatarOverlaySelectionB, avatarOverlaySelectionD, avatarOverlaySelectionF, avatarOverlaySelectionG, avatarOverlaySelectionH, avatarOverlaySelectionI, avatarOverlaySelectionL, avatarOverlaySelectionM, avatarOverlaySelectionN, avatarOverlaySelectionO, avatarOverlaySelectionP, avatarOverlaySelectionR, avatarOverlaySelectionT, avatarOverlaySelectionU, avatarOverlaySelectionUpperC, avatarOverlaySelectionUpperS, avatarOverlaySelectionV, avatarOverlaySelectionX, avatarOverlaySelectionY } from "../use-avatar-overlay-selection";

// Wave5d soft stubs.
const Sage: any = undefined;
const AppInitialAY: any = undefined;
const AppInitialEY: any = undefined;
const AppInitialUO: any = undefined;
const DeferredUiHI2: any = undefined;
const DeferredUiN2: any = undefined;
const NativeContextMenuSurface: any = undefined;
const alpha: any = undefined;
const composerScope: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiJT: any = undefined;
const deferredUiX9: any = undefined;
const resolveStableWorktreeStatus: any = undefined;
function bravo(harbor) {
  let {
      selectedAvatar,
      selectedAvatarId
    } = harbor,
    indigo = CodexPluginActionType(appScopeAtom),
    jade = useIntl(),
    kite = useIsDarkAppearance() === true,
    lemon = NativeContextMenuSurface("451951815"),
    marble = NativeContextMenuSurface("665486075"),
    nickel = CodexPluginActionResult(DeferredUiHI2),
    onyx = marble && nickel,
    pearl = NativeContextMenuSurface("1380537759"),
    quartz = NativeContextMenuSurface(AppIconPlt),
    river = AppInitialUO(LOCAL_HOST_ID),
    slate = CodexPluginActionResult(deferredUiX9),
    timber = CodexPluginActionResult(deferredUiFC),
    {
      mascotWidthPx
    } = useAvatarOverlayMascotSize(),
    {
      data = [],
      refetch
    } = recentConversationsMetaQueryKey(),
    umbra = {
      taskFilter: "current",
      limit: 20
    };
  let {
      data: _data = [],
      refetch: _refetch
    } = composerScope(umbra),
    violet = AppInitialEY(),
    willow = AppInitialAY(),
    xenon = AvatarOverlayPillDismissButton({
      includeCompactWaitingRequests: lemon,
      includeMcpElicitationCancelAction: true,
      intl: jade,
      localConversations: data,
      excludedConversationId: timber,
      remoteTasks: _data
    }),
    _e = (ember, flint) => {
      let garnet = ember.waitingRequest;
      if (ember.localConversationId != null && flint != null) {
        let hazel = ember.localConversationId;
        bb16: switch (flint.intent) {
          case "command-approval":
            if (flint.commandDecision != null && (garnet?.kind === "exec" || garnet?.kind === "network")) {
              canonicalizeWorkspacePathKey("reply-with-command-execution-approval-decision", {
                conversationId: hazel,
                requestId: garnet.requestId,
                decision: flint.commandDecision
              }).then(() => {
                refetch();
              });
              return;
            }
            break bb16;
          case "file-approval":
            if (flint.fileDecision != null && garnet?.kind === "patch") {
              canonicalizeWorkspacePathKey("reply-with-file-change-approval-decision", {
                conversationId: hazel,
                requestId: garnet.requestId,
                decision: flint.fileDecision
              }).then(() => {
                refetch();
              });
              return;
            }
            break bb16;
          case "permission-response":
            if (flint.permissionResponse != null && garnet?.kind === "permission") {
              canonicalizeWorkspacePathKey("reply-with-permissions-request-approval-response", {
                conversationId: hazel,
                requestId: garnet.requestId,
                response: flint.permissionResponse
              }).then(() => {
                refetch();
              });
              return;
            }
            break bb16;
          case "mcp-elicitation":
            if (flint.mcpElicitationAction != null && garnet?.kind === "tool") {
              canonicalizeWorkspacePathKey("reply-with-mcp-server-elicitation-response", {
                conversationId: hazel,
                requestId: garnet.requestId,
                response: buildMcpToolApprovalResult(flint.mcpElicitationAction)
              }).then(() => {
                refetch();
              });
              return;
            }
            break bb16;
          case "plan-start":
            if (garnet?.kind === "plan" && flint.planStartCollaborationMode != null) {
              canonicalizeWorkspacePathKey("update-thread-settings-for-next-turn", {
                conversationId: hazel,
                threadSettings: {
                  collaborationMode: flint.planStartCollaborationMode
                }
              }).then(() => canonicalizeWorkspacePathKey("remove-plan-implementation-request", {
                conversationId: hazel,
                turnId: garnet.turnId
              })).then(async () => canonicalizeWorkspacePathKey("send-follow-up-message", {
                conversationId: hazel,
                prompt: `${PLEASE_IMPLEMENT_THIS_PLAN_HEADER}\n${garnet.planContent}`,
                serviceTier: await resolveStableWorktreeStatus(indigo, indigo.get(DeferredUi2, hazel) ?? "local", flint.planStartCollaborationMode?.settings.model ?? null)
              })).then(() => {
                refetch();
              });
              return;
            }
            break bb16;
          case "open":
        }
      }
      flint != null && flint.intent !== "open" || ember.action != null && ensureAppActionPayloadSchemasInit.dispatchMessage("open-in-main-window", {
        path: ember.action.path
      });
    };
  let yellow = _e,
    zinc = (ivory, jasper) => {
      let kelp = ivory.waitingRequest;
      ivory.localConversationId == null || kelp?.kind !== "question" || canonicalizeWorkspacePathKey("reply-with-user-input-response", {
        conversationId: ivory.localConversationId,
        requestId: kelp.requestId,
        response: {
          answers: {
            [jasper.questionId]: {
              answers: [jasper.label]
            }
          }
        }
      }).then(() => {
        refetch();
      });
    };
  let be = zinc,
    amber = async (lotus, mint) => {
      let nova = lotus.controlTarget;
      switch (mint.type) {
        case "close-follow-up":
        case "follow-up-active-changed":
        case "follow-up-editor-changed":
        case "open-follow-up":
          return;
        case "stop":
          if (nova == null) return;
          switch (nova.type) {
            case "app-server-conversation":
              await canonicalizeWorkspacePathKey("interrupt-conversation", {
                conversationId: nova.conversationId,
                initiatedBy: "user"
              });
              Promise.resolve(refetch()).catch(gamma);
              return;
            case "cloud-task":
              await violet.mutateAsync(nova.taskId);
              Promise.resolve(_refetch()).catch(falcon);
              return;
          }
        case "submit-follow-up":
          {
            let olive = mint.prompt.trim();
            if (nova == null || olive.length === 0) return;
            switch (nova.type) {
              case "app-server-conversation":
                await canonicalizeWorkspacePathKey("send-follow-up-message", {
                  conversationId: nova.conversationId,
                  prompt: olive,
                  serviceTier: await resolveStableWorktreeStatus(indigo, indigo.get(DeferredUi2, nova.conversationId) ?? "local", null)
                });
                Promise.resolve(refetch()).catch(on);
                return;
              case "cloud-task":
                await willow.mutateAsync({
                  taskId: nova.taskId,
                  turnId: nova.turnId,
                  prompt: olive,
                  ideContext: "",
                  runEnvironmentInQaMode: false,
                  priorConversation: null,
                  images: null
                });
                Promise.resolve(_refetch()).catch(echo);
                return;
            }
          }
      }
    };
  let basalt = amber,
    cedar = prism => prism == null ? undefined : indigo.get(DeferredUiN2, prism)?.items;
  let daisy = async quill => {
    await deferredUiJT({
      model: undefined,
      prompt: quill,
      scope: indigo,
      target: {
        type: "projectless"
      },
      thinking: undefined
    });
    await refetch();
  };
  return <Sage {...{
    isDarkAppearance: kite,
    dictationCleanupEnabled: false,
    dictationStreamingEnabled: quartz,
    dictationSupportState: river,
    latestTurnItems: cedar,
    mascotWidthPx,
    productLogger: slate,
    globalDictationOrbEnabled: pearl,
    quickChatEnabled: onyx,
    selectedAvatar,
    selectedAvatarId,
    sessions: xenon,
    onClosePet: delta,
    onMascotClick: copper,
    onRefreshLocalSessions: refetch,
    onRefreshRemoteSessions: _refetch,
    onRunNotificationControl: basalt,
    onRunNotificationAction: yellow,
    onSubmitQuestionOption: be,
    onSubmitQuickChat: daisy
  }} />;
}
function copper() {
  ensureAppActionPayloadSchemasInit.dispatchMessage("open-current-main-window", {
    focusComposer: true,
    stealFocus: true
  });
}
function delta() {
  ensureAppActionPayloadSchemasInit.dispatchMessage("avatar-overlay-close", {});
}
function echo() {}
function on() {}
function falcon() {}
function gamma() {}
