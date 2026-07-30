// Restored from ref/webview/assets/voice-settings-vkVvUNXN.js
// Wave FX — full polished body from `voice-settings-vkVvUNXN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 27 (verified 75/102).
// Careful split 3/3
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_FR_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { OPENAI_CURATED_ID } from "../../config/openai-curated-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { readScrollTop, scrollAppActionTargetByTurn, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { openMainWindowThenContinue } from "../../navigation/open-main-window-then-continue";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredT1 } from "../../ui/deferred-t1";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { codexProjectKey } from "../../utils/codex-project-key";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureHotkeySetterInit, HotkeySetter } from "../hotkey-setter";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";
import { useVoiceSettingsHostConfig } from "../use-voice-settings-host-config";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Cross-part stubs (same-package helpers live in sibling parts).
const AppInitialFC: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVO: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredHostsS3: any = undefined;
const deferredVoiceVC: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const realtimeVoiceCatalog: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
function delta() {
  let marble = useIntl(),
    {
      data
    } = CodexPluginActionResult(copper),
    nickel = applyU0000U001FU007F2("global-dictation-copy-history-item"),
    onyx,
    pearl;
  pearl = Symbol.for("react.early_return_sentinel");
  bb0: {
    let quartz = data?.items.filter(echo).slice(0, 4);
    if (quartz == null || quartz.length === 0) {
      let slate = <div className="text-sm text-token-text-primary">
          {<MemoizedFormattedMessage {...{
          id: "settings.general.globalDictationHistory.emptyTitle",
          defaultMessage: "Recent dictations",
          description: "Title for empty global dictation history"
        }} />}
        </div>;
      let timber;
      timber = <div className="flex flex-col gap-1 p-3">
          {slate}
          <div className="max-w-xl text-sm text-token-text-secondary">
            {<MemoizedFormattedMessage {...{
            id: "settings.general.globalDictationHistory.emptyDescription",
            defaultMessage: "Your recent dictations will appear here so you can recover text if it does not land where you expected",
            description: "Empty state description for global dictation history"
          }} />}
          </div>
        </div>;
      pearl = timber;
      break bb0;
    }
    let river;
    river = umbra => <VoiceSettingsHelper17 key={umbra.id} {...{
      copyDisabled: nickel.isPending,
      item: umbra,
      timestamp: marble.formatDate(umbra.createdAtMs, {
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        month: "short"
      }),
      onCopy: () => {
        nickel.mutateAsync({
          id: umbra.id
        });
      }
    }} />;
    onyx = quartz.map(river);
  }
  if (pearl !== Symbol.for("react.early_return_sentinel")) return pearl;
  return <>{onyx}</>;
}
function echo(violet) {
  return violet.text.length > 0;
}
function VoiceSettingsHelper17(willow) {
  let {
      copyDisabled,
      item,
      onCopy,
      timestamp
    } = willow,
    xenon = useIntl(),
    yellow = xenon.formatMessage({
      id: "settings.general.globalDictationHistory.copy",
      defaultMessage: "Copy dictation",
      description: "Tooltip and aria label for copying a dictation transcript"
    });
  let zinc = yellow,
    amber = new Date(item.createdAtMs).toISOString();
  let basalt = <time dateTime={amber} className="w-32 shrink-0 text-sm text-token-text-secondary tabular-nums">
      {timestamp}
    </time>;
  let cedar = <div className="line-clamp-3 min-w-0 flex-1 text-sm whitespace-pre-wrap text-token-text-secondary">
      {item.text}
    </div>;
  let daisy = <AppIconPR {...{
    className: "icon-sm"
  }} />;
  let ember = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": zinc,
    className: "shrink-0",
    color: "ghost",
    disabled: copyDisabled,
    size: "icon",
    onClick: onCopy,
    children: daisy
  }} />;
  let flint = <OptionalTooltip {...{
    tooltipContent: zinc,
    children: ember
  }} />;
  return <div className="flex items-center gap-3 p-3">
      {basalt}
      {cedar}
      {flint}
    </div>;
}
var falcon, gamma, harbor, indigo, jade, kite, lemon, $;
esmInit(() => {
  falcon = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  gamma = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  AppInitialUj();
  ensureComposerEsm_Sut_Init();
  realtimeVoiceCatalog();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  ensureDropdownMenuPopoverInit();
  ensureConversationPageEsm_FR_Init();
  ensureSkillsPageHelpersInit();
  AppInitialVO();
  ensureContextMenuProviderInit();
  deferredHostsS3();
  bravo();
  ensureDynamicScriptLoadInit();
  ensureAppScopeInit();
  alpha();
  ensureHotkeySetterInit();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  codexCommandTheme();
  deferredVoiceVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureSkillsPageHelpersInit();
  dataAppActionReviewFileExpanded();
  scrollAppActionTargetTo();
  indigo = "";
  jade = [indigo];
  kite = ["Jane Doe", "Acme Widget", "checkout-form.tsx", "useCartState"];
  lemon = ["microphone-input-devices"];
  $ = identity({
    holdToDictateHotkey: {
      id: "settings.general.globalDictationHotkey.label",
      defaultMessage: "Hold-to-dictate hotkey",
      description: "Label for hold-to-dictate hotkey setting"
    },
    toggleDictationHotkey: {
      id: "settings.general.globalDictationToggleHotkey.label",
      defaultMessage: "Toggle dictation hotkey",
      description: "Label for toggle dictation hotkey setting"
    }
  });
})();
