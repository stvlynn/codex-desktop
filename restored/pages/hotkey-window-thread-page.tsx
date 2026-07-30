// Restored from ref/webview/assets/hotkey-window-thread-page-Ch_VNRA5.js
// Wave FY — full polished body from `hotkey-window-thread-page-Ch_VNRA5/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 38/46).
// Wave FZ-support — PascalCase invalid JSX tags: localConversationThreadUpperI→LocalConversationThreadUpperI.

import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_S8_Init } from "../boundaries/composer-esm-inits";
import { conversationSourceA, conversationSourceI } from "../boundaries/conversation-source";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { Navigate } from "../boundaries/react-router-navigation";
import { deferredConversationN } from "../conversation/deferred-conversation-n";
import { filterConversationTimelineItems } from "../conversation/filter-conversation-timeline-items";
import { ensureLocalConversationStreamRoleProductEventHelpersInit, ensureLocalConversationStreamRoleProductEventInit, LocalConversationStreamRoleProductEvent, LocalConversationStreamRoleProductEventWatcher } from "../conversation/local-conversation-stream-role-product-event";
import { appServices } from "../desktop/desktop-services";
import { HotkeyWindowDetailLayoutContext, useHotkeyWindowDetailLayout } from "../hooks/use-hotkey-window-detail-layout";
import { usePlatformAwareFeatureGate } from "../hooks/use-platform-aware-feature-gate";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ensureGpuTearingDebugSettingsInit } from "../settings/gpu-tearing-debug-settings";
import { localConversationThreadUpperA, LocalConversationThreadUpperI } from "../thread/local-conversation-thread";
import { AriaIconBadge } from "../ui/aria-icon-badge";
import { deferredT } from "../ui/deferred-t";
import { ensureHotkeyThreadB1Init, ensureHotkeyThreadL8Init, ensureHotkeyThreadN8Init, ensureHotkeyThreadV1Init } from "../utils/wave-av-gap-ensure-inits";
import { identityCwd } from "../utils/workspace-paths";

/** Wave FY unresolved companion (missing-export:worktree/self-serve-business-usage-based.tsx) */
const SelfServeBusinessUsageBased: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-d2.tsx) */
const DeferredUiD2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureHotkeyThreadQptInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialQpt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:isRemoteEnvironmentHost@environments/remote-host-keys.ts) */
const AppInitialRmt: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useRouteParams@hooks/use-route-params.ts) */
const AppInitialU5: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
export function HotkeyWindowThreadPage() {
  let delta = CodexPluginActionType(ensureComposerEsm_S8_Init),
    echo = useIntl(),
    {
      conversationId
    } = AppInitialU5(),
    {
      clientThreadId
    } = delta.value,
    falcon = CodexPluginActionResult(ensureHotkeyThreadL8Init),
    gamma = falcon == null && SelfServeBusinessUsageBased(clientThreadId) ? clientThreadId : null;
  let harbor = gamma,
    indigo = CodexBrowserSurfaceActionType(ensureHotkeyThreadV1Init, harbor),
    {
      data
    } = CodexPluginActionResult(ensureGpuTearingDebugSettingsInit),
    jade = data == null || data.configuredHotkey != null,
    kite = AppInitialRmt(jade);
  let lemon = kite,
    marble = CodexBrowserSurfaceActionType(deferredConversationN, falcon),
    nickel = CodexBrowserSurfaceActionType(DeferredUiD2, falcon),
    onyx = AppInitialL(nickel ? identityCwd(nickel) : null);
  let pearl = onyx,
    quartz = falcon ?? harbor,
    river = quartz == null ? "/" : AriaIconBadge(quartz);
  let slate = river,
    timber = () => {
      !SelfServeBusinessUsageBased(clientThreadId) || falcon == null || appServices.hotkeyWindowHotkeys?.open({
        path: AppInitialQpt(falcon)
      });
    };
  let umbra = bravo.useEffectEvent(timber),
    _HotkeyWindowThreadPage = () => {
      umbra();
    };
  let violet;
  violet = [clientThreadId, falcon];
  bravo.useEffect(_HotkeyWindowThreadPage, violet);
  conversationSourceA(delta);
  let willow;
  if (willow = conversationId == null ? null : {
    title: <div className="flex max-w-full min-w-0 items-baseline gap-2">
                <div className="min-w-0 shrink-[999] truncate text-token-foreground">
                  {indigo?.label ?? marble ?? echo.formatMessage({
          id: "hotkeyWindow.defaultTitle",
          defaultMessage: "Codex",
          description: "Fallback title for hotkey window thread header"
        })}
                </div>
                {pearl == null ? null : <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground">
                    <span className="truncate">
                      {pearl}
                    </span>
                  </div>}
              </div>,
    mainWindowPath: slate
  }, useHotkeyWindowDetailLayout(willow), conversationId == null) {
    let zinc;
    return <Navigate {...{
      to: lemon,
      replace: true
    }} />;
  }
  let xenon = falcon == null ? null : <>
        {<LocalConversationStreamRoleProductEventWatcher {...{
      conversationId: falcon
    }} />}
        {<LocalConversationStreamRoleProductEvent {...{
      conversationId: falcon
    }} />}
      </>;
  let yellow = <div className="h-full [--padding-panel:calc(var(--padding-panel-base)/2)]">
      {<LocalConversationThreadUpperI {...{
      allowMissingConversation: true,
      showUtilityBar: true
    }} />}
    </div>;
  return <>
      {xenon}
      {yellow}
    </>;
}
var alpha, bravo, copper;
esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  bravo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  DeferredUiV2();
  ensureLocalConversationStreamRoleProductEventHelpersInit();
  ensureLocalConversationStreamRoleProductEventInit();
  localConversationThreadUpperA();
  deferredT();
  ensureDynamicScriptLoadInit();
  filterConversationTimelineItems();
  ensureHotkeyThreadN8Init();
  deferredUiU();
  conversationSourceI();
  ensureHotkeyThreadB1Init();
  usePlatformAwareFeatureGate();
  HotkeyWindowDetailLayoutContext();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindHotkeyWindowThreadPage(_next: unknown): void {}
export function ensureHotkeyWindowThreadPageInit(): void {}
