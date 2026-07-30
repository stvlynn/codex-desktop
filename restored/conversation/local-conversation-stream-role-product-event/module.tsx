// Restored from ref/webview/assets/local-conversation-stream-role-product-event-BzrRYxBq.js
// Wave FY — full polished body from `local-conversation-stream-role-product-event-BzrRYxBq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 15 (verified 19/33).
// AST split 1/1
/* split-lane-import-depth:1 */


import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";

const HeartbeatThreadPermissionsById: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationHr3@conversation/deferred-conversation-hr3.tsx) */
const AppInitialHr: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setFieldIfJsonChanged@utils/set-field-if-json-changed.ts) */
const AppInitialIr: any = undefined;
/** Wave FY unresolved companion (jsx-collision:collaborationModeFromTurnOrParams@conversation/collaboration-mode-fields.ts) */
const AppInitialLr: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-m22-2.tsx) */
const DeferredUiM22: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-o22.tsx) */
const DeferredUiO22: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (jsx-collision:collaborationModeOrFallback@conversation/collaboration-mode-fields.ts) */
const AppInitialRr: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/missing-conversation.tsx) */
const AppInitialUr: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/heartbeat-thread-permissions-by-id2.tsx) */
const AppInitialVr: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-x232.tsx) */
const DeferredUiX232: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSettingsSectionTitleInit@settings/settings-section-title.tsx) */
const AppInitialZr: any = undefined;
export function localConversationStreamRoleProductEventR(echo: unknown) {
  let {
      conversationId
    } = echo,
    falcon = CodexPluginActionType(appScopeAtom),
    gamma = NativeContextMenuSurface("1488233300"),
    harbor = CodexBrowserSurfaceActionType(AppInitialHr, conversationId),
    indigo = CodexBrowserSurfaceActionType(DeferredUiO22, conversationId),
    jade = CodexBrowserSurfaceActionType(HeartbeatThreadPermissionsById, conversationId),
    kite = CodexPluginActionResult(AppInitialZr)?.[conversationId],
    lemon = () => {
      let nickel = falcon.get(DeferredUiN2, conversationId),
        onyx = falcon.get(DeferredUiM22, conversationId),
        pearl = AppInitialLr(nickel, onyx),
        quartz = AppInitialRr(nickel, onyx, kite);
      gamma && pearl != null && falcon.set(AppInitialZr, river => AppInitialIr(river ?? {}, conversationId, pearl));
      ensureAppActionPayloadSchemasInit.dispatchMessage("heartbeat-automation-thread-state-changed", {
        threadId: gamma ? conversationId : null,
        isEligible: gamma && harbor.isEligible,
        collaborationMode: gamma ? indigo : null,
        permissions: gamma ? quartz : null,
        reason: gamma ? harbor.reason : null
      });
    };
  let marble;
  return marble = [kite, conversationId, harbor.isEligible, harbor.reason, jade, gamma, indigo, falcon], bravo.useEffect(lemon, marble), null;
}
var alpha, bravo;
export const localConversationStreamRoleProductEventI = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  bravo = commonJsInit(react(), 1);
  DeferredUiV2();
  findSidebarSectionElement();
  ensureAppScopeInit();
  ensureSkillsPageHelpersInit();
  AppInitialUr();
  AppInitialVr();
});
export function localConversationStreamRoleProductEventT(slate: unknown) {
  let {
      conversationId
    } = slate,
    timber = CodexPluginActionType(ensureComposerEsm_S8_Init),
    umbra,
    violet;
  return umbra = () => {
    let willow = false;
    return timber.watch(xenon => {
      let {
          get
        } = xenon,
        yellow = get(DeferredUiX232, conversationId);
      yellow == null || willow || (willow = true, logProductEvent(timber, CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE, {
        streamRole: yellow.role
      }));
    });
  }, violet = [conversationId, timber], delta.useEffect(umbra, violet), null;
}
var copper, delta;
export const localConversationStreamRoleProductEventN = esmInit(() => {
  copper = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_MT_Init();
  delta = commonJsInit(react(), 1);
  DeferredUiV2();
  ensureComposerEsm_K9_Init();
  filterConversationTimelineItems();
});
