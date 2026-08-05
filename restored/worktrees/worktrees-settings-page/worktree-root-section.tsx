// Restored from ref/webview/assets/worktrees-settings-page-D8I58eIb.js
// Wave FY — full polished body from `worktrees-settings-page-D8I58eIb/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 67/88).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePersonalizationCInit→EnsurePersonalizationCInit, openInBrowser→OpenInBrowser, parseUrlOrFallback→ParseUrlOrFallback, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, setRemoteControlEnabledForHost→SetRemoteControlEnabledForHost, useChromeAndCodeThemeSync→UseChromeAndCodeThemeSync, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, renamedId→WorktreesSettingsPageHelper1, renamedId→WorktreesSettingsPageHelper2.
// AST split — worktree-root section (WorktreesSettingsPageHelper3/4 + harbor init lane).

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
} from "../../composer/composer-esm-inits";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ElectronOnly } from "../../ui/electron-only";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { WorktreesSettingsPageHelper1 } from "./auto-cleanup-section";

/** Wave FY unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
function WorktreesSettingsPageHelper3() {
  let elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    grove = useSettingValue(gitSettingsDefinitions.worktreeRoot),
    [hill, isle] = falcon.useState(null),
    juniper = (field) =>
      setSettingValue(elm, gitSettingsDefinitions.worktreeRoot, field);
  let lagoon, meadow;
  lagoon = () => {
    isle(null);
    elm.get(toastAtom).success(
      fern.formatMessage({
        id: "settings.git.worktreeRoot.save.success",
        defaultMessage: "Saved worktree root",
        description: "Toast shown when git worktree root is saved",
      }),
    );
  };
  meadow = () => {
    elm.get(toastAtom).danger(
      fern.formatMessage({
        id: "settings.git.worktreeRoot.save.error",
        defaultMessage: "Failed to save worktree root",
        description: "Toast shown when git worktree root save fails",
      }),
    );
  };
  let nest = {
    mutationFn: juniper,
    onSuccess: lagoon,
    onError: meadow,
  };
  let oak = noop(nest),
    petal = grove ?? "",
    quiet = hill ?? petal,
    rain = hill != null && hill !== petal,
    seed = oak.isPending,
    trail = () => {
      !rain || seed || oak.mutate(quiet.trim());
    };
  let urn = trail,
    vine = rain && !seed,
    wind = (event) => {
      event.preventDefault();
      urn();
    };
  let yarrow;
  yarrow = {
    accelerator: "CmdOrCtrl+S",
    enabled: vine,
    onKeyDown: wind,
  };
  PanelWidthIcon(yarrow);
  let azure, birch;
  azure = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.git.worktreeRoot.label",
        defaultMessage: "Worktree root",
        description: "Label for git worktree root setting",
      }}
    />
  );
  birch = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.git.worktreeRoot.description",
        defaultMessage:
          "Directory where ChatGPT creates managed worktrees; leave blank to use the default location",
        description: "Description for git worktree root setting",
      }}
    />
  );
  let canyon = (event) => {
    if (seed) return;
    let grain = event.target.value;
    isle(grain === petal ? null : grain);
  };
  let dew = fern.formatMessage({
    id: "settings.git.worktreeRoot.placeholder",
    defaultMessage: "Default",
    description: "Placeholder for git worktree root input",
  });
  let ever = fern.formatMessage({
    id: "settings.git.worktreeRoot.ariaLabel",
    defaultMessage: "Worktree root",
    description: "Aria label for git worktree root input",
  });
  return (
    <EnsurePersonalizationCInit
      {...{
        label: azure,
        description: birch,
        control: (
          <input
            className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
            value={quiet}
            onChange={canyon}
            onBlur={urn}
            placeholder={dew}
            aria-label={ever}
            disabled={seed}
          />
        ),
      }}
    />
  );
}
var echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    echo = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    falcon = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Ilt_Init();
    ensureSidebarPanelIconInit();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialVC();
  });
export function WorktreesSettingsPageHelper4() {
  return (
    <ElectronOnly
      {...{
        electron: true,
        children: (
          <ParseUrlOrFallback
            {...{
              children: [
                <WorktreesSettingsPageHelper3 {...{}} />,
                <WorktreesSettingsPageHelper1 {...{}} />,
              ],
            }}
          />
        ),
      }}
    />
  );
}
export { harbor };
