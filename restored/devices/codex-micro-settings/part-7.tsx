// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 7/10
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { BrowserWebviewPanel } from "../../browser/browser-webview-panel";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { composerConnectorauthReconnectMessages } from "../../composer/composer-connectorauth-reconnect-messages";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { collaborationModeFromTurnOrParams } from "../../conversation/collaboration-mode-fields";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import {
  ensureCodexMicroAnalogActionTitleInit,
  getAnalogActionTitle,
} from "../../desktop/codex-micro-analog-action-title";
import {
  ensureCodexMicroWebviewCommandsInit,
  findCodexMicroWebviewCommand,
  getCodexMicroWebviewCommands,
} from "../../desktop/codex-micro-webview-commands";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import {
  ensureRemoteConnectionsFeatureInit,
  getEnabledRemoteConnectionState,
} from "../../hosts/remote-connections-feature";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconEi } from "../../icons/app-icon-ei";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconTv } from "../../icons/app-icon-tv";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { SettingsCommandMenuSectionItem } from "../../settings/settings-command-menu-section-item";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useSettingValue } from "../../settings/use-setting-value";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredVM } from "../../ui/deferred-vm";
import { deferredZft as DeferredZft } from "../../ui/deferred-zft";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { macOS4 } from "../../ui/mac-os4";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { remote } from "../../ui/remote";
import {
  ensureSelectableListRowActivationInit,
  ensureSelectableListRowInit as EnsureSelectableListRowInit,
} from "../../ui/selectable-list-row";
import { sortable } from "../../ui/sortable";
import { VerticalScrollFadeMask } from "../../ui/vertical-scroll-fade-mask";
import { findByModel as FindByModel } from "../../utils/find-by-model";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import {
  ensureKeyboardShortcutsGtInit as EnsureKeyboardShortcutsGtInit,
  ensureKeyboardShortcutsHMInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import {
  CodexMicroKeyboardSurface,
  codexMicroKeyboardSurfaceFlags,
  CodexMicroKeyboardSurfaceLabel,
  CodexMicroKeyboardSurfaceOverlay,
  CodexMicroKeyboardSurfacePanel,
  codexMicroKeyboardSurfaceState,
  CodexMicroKeyboardSurfaceTile,
  ensureCodexMicroKeyboardSurfaceAtomsInit,
  ensureCodexMicroKeyboardSurfaceHelpersInit,
  ensureCodexMicroKeyboardSurfaceInit,
  ensureCodexMicroKeyboardSurfaceUiInit,
  renderCodexMicroKeyboardSurface as RenderCodexMicroKeyboardSurface,
  useCodexMicroKeyboardSurface as UseCodexMicroKeyboardSurface,
} from "../codex-micro-keyboard-surface";
import {
  ensureCodexMicroLayoutInit,
  parseStreamDeckLayout,
} from "../codex-micro-layout";
import {
  codexMicroSlotSignalC,
  codexMicroSlotSignalF,
  codexMicroSlotSignalO,
  codexMicroSlotSignalR,
  codexMicroSlotSignalU,
  ensureCodexMicroSlotSignalsInit,
} from "../codex-micro-slot-signals";

// Wave5d soft stubs.
const CodexMicroSettingsHelper23: any = undefined;
const IntlProvider: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function eagle(knoll) {
  let { value, onChange } = knoll,
    lunar = useIntl(),
    moss = lunar.formatNumber(value / 100, {
      style: "percent",
    });
  let north = moss,
    orbit = lunar.formatMessage(alpha.lightingBrightness);
  let pine = (event) => {
    onChange(Number(event.currentTarget.value));
  };
  let quest = (
    <input
      aria-label={orbit}
      aria-valuetext={north}
      className="focus-visible:ring-token-focus h-0.5 flex-1 cursor-interaction appearance-none rounded-full bg-token-border text-token-text-primary outline-none focus-visible:ring-2 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent [&::-moz-range-thumb]:bg-current [&::-moz-range-thumb]:shadow-sm [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow-sm"
      max={100}
      min={0}
      step={10}
      type="range"
      value={value}
      onChange={pine}
    />
  );
  let ridge = value / 100,
    storm = (
      <span className="w-12 text-right text-sm text-token-text-secondary tabular-nums">
        {
          <DeferredZft
            {...{
              style: "percent",
              value: ridge,
            }}
          />
        }
      </span>
    );
  return (
    <div className="flex h-9 min-w-48 items-center gap-2.5">
      {quest}
      {storm}
    </div>
  );
}
function frost(tide) {
  let { status } = tide;
  switch (status) {
    case "granted": {
      let unity;
      return (
        <span className="text-sm text-token-charts-green">
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.codexMicro.inputMonitoring.granted",
                defaultMessage: "Granted",
                description: "Granted macOS Input Monitoring permission status",
              }}
            />
          }
        </span>
      );
    }
    case "denied": {
      let vale;
      return (
        <span className="text-sm text-token-error-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.codexMicro.inputMonitoring.denied",
                defaultMessage: "Not granted",
                description: "Denied macOS Input Monitoring permission status",
              }}
            />
          }
        </span>
      );
    }
    case "unavailable":
    case undefined: {
      let wave;
      return (
        <span className="text-sm text-token-text-secondary">
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.codexMicro.inputMonitoring.unavailable",
                defaultMessage: "Unavailable",
                description:
                  "Unavailable macOS Input Monitoring permission status",
              }}
            />
          }
        </span>
      );
    }
  }
}
function glide(apex) {
  let { error, status } = apex,
    brook;
  bb0: switch (status) {
    case "connected": {
      let elm;
      elm = (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.connection.connected",
            defaultMessage: "Connected",
            description: "Connected Codex Micro status",
          }}
        />
      );
      brook = elm;
      break bb0;
    }
    case "detected": {
      let fern;
      fern = (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.connection.detected",
            defaultMessage: "Detected",
            description: "Detected Codex Micro status while the app connects",
          }}
        />
      );
      brook = fern;
      break bb0;
    }
    case "not-detected": {
      let grove;
      grove = (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.connection.notDetected",
            defaultMessage: "Not detected",
            description: "Disconnected Codex Micro status",
          }}
        />
      );
      brook = grove;
      break bb0;
    }
    case "error": {
      let hill;
      hill = (
        <CodexMicroSettingsHelper23
          {...{
            error,
          }}
        />
      );
      brook = hill;
    }
  }
  let cliff =
      status === "error"
        ? "text-token-error-foreground"
        : "text-token-text-secondary",
    dusk = IntlProvider("text-sm", cliff);
  return <span className={dusk}>{brook}</span>;
}
function honey(isle) {
  let { error } = isle;
  if (error == null) {
    let lagoon;
    return (
      <MemoizedFormattedMessage
        {...{
          ...alpha.connectionProblem,
        }}
      />
    );
  }
  let juniper = bravo[error];
  return (
    <MemoizedFormattedMessage
      {...{
        ...juniper.label,
      }}
    />
  );
}
function iris(meadow) {
  let { deviceName, error } = meadow;
  return (
    <span className="text-token-error-foreground">
      {error == null ? (
        <MemoizedFormattedMessage
          {...{
            ...alpha.connectionProblemDescription,
            values: {
              deviceName,
            },
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...bravo[error].description,
            values: {
              deviceName,
            },
          }}
        />
      )}
    </span>
  );
}
function jewel(nest) {
  let { keycap, voiceButtonMode } = nest;
  switch (keycap.id) {
    case "FAST": {
      let oak;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.fast",
            defaultMessage: "Toggle Fast mode",
            description: "Codex Micro action label for the FAST keycap",
          }}
        />
      );
    }
    case "APPR": {
      let petal;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.approve",
            defaultMessage: "Approve",
            description: "Codex Micro action label for the APPR keycap",
          }}
        />
      );
    }
    case "REJ": {
      let quiet;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.reject",
            defaultMessage: "Reject",
            description: "Codex Micro action label for the REJ keycap",
          }}
        />
      );
    }
    case "SPLIT": {
      let rain;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.split",
            defaultMessage: "Continue in new chat",
            description: "Codex Micro action label for the SPLIT keycap",
          }}
        />
      );
    }
    case "MIC": {
      let seed;
      return voiceButtonMode === "realtime" ? (
        <MemoizedFormattedMessage
          {...{
            ...alpha.microphoneKeyStartVoiceChat,
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...alpha.microphoneKeyPushToTalk,
          }}
        />
      );
    }
    case "CODEX": {
      let trail;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.codex",
            defaultMessage: "Send message",
            description: "Codex Micro action label for the CODEX keycap",
          }}
        />
      );
    }
    case "BUG": {
      let urn;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.bug",
            defaultMessage: "Open feedback",
            description: "Codex Micro action label for the BUG keycap",
          }}
        />
      );
    }
    case "OAI": {
      let vine;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.oai",
            defaultMessage: "Open OpenAI docs",
            description: "Codex Micro action label for the OAI keycap",
          }}
        />
      );
    }
    case "TERM": {
      let wind;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.terminal",
            defaultMessage: "Toggle terminal",
            description: "Codex Micro action label for the TERM keycap",
          }}
        />
      );
    }
    case "DWN": {
      let yarrow;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.download",
            defaultMessage: "Copy chat as Markdown",
            description: "Codex Micro action label for the DWN keycap",
          }}
        />
      );
    }
    case "DEL": {
      let azure;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.delete",
            defaultMessage: "Archive chat",
            description: "Codex Micro action label for the DEL keycap",
          }}
        />
      );
    }
    case "NEW": {
      let birch;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.new",
            defaultMessage: "New chat",
            description: "Codex Micro action label for the NEW keycap",
          }}
        />
      );
    }
    case "NAV": {
      let canyon;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.navigation",
            defaultMessage: "Open browser tab",
            description: "Codex Micro action label for the NAV keycap",
          }}
        />
      );
    }
    case "MAGIC": {
      let dew;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.pinThread",
            defaultMessage: "Pin or unpin chat",
            description: "Codex Micro action label for the MAGIC keycap",
          }}
        />
      );
    }
    case "DIFF": {
      let ever;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.review",
            defaultMessage: "Toggle review",
            description: "Codex Micro action label for the DIFF keycap",
          }}
        />
      );
    }
    case "BRCH": {
      let field;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.draftPullRequest",
            defaultMessage: "Create draft PR",
            description:
              "Codex Micro action label for the draft pull request keycap",
          }}
        />
      );
    }
    case "BRANCH": {
      let grain;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.branch",
            defaultMessage: "Create branch",
            description: "Codex Micro action label for the branch keycap",
          }}
        />
      );
    }
    case "MRG": {
      let haven;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.mergePullRequest",
            defaultMessage: "Merge PR",
            description: "Codex Micro action label for the MRG keycap",
          }}
        />
      );
    }
    case "GIT": {
      let ink;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.git",
            defaultMessage: "Commit or push",
            description: "Codex Micro action label for the GIT keycap",
          }}
        />
      );
    }
    case "PR": {
      let jadeite;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.pullRequest",
            defaultMessage: "Create PR",
            description: "Codex Micro action label for the PR keycap",
          }}
        />
      );
    }
    case "PLAY": {
      let kernel;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.runAction",
            defaultMessage: "Run primary action",
            description: "Codex Micro action label for the PLAY keycap",
          }}
        />
      );
    }
    case "SETUP":
    case "LAB": {
      let leaf;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.settings",
            defaultMessage: "Open Settings",
            description: "Codex Micro action label for settings keycaps",
          }}
        />
      );
    }
    case "PARTY": {
      let maple;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.sideChat",
            defaultMessage: "Open side chat",
            description: "Codex Micro action label for the PARTY keycap",
          }}
        />
      );
    }
    case "FOLD": {
      let nimbus;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.folder",
            defaultMessage: "Open folder",
            description: "Codex Micro action label for the FOLD keycap",
          }}
        />
      );
    }
    case "UPL": {
      let opal;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.attachFiles",
            defaultMessage: "Attach files and folders",
            description: "Codex Micro action label for the UPL keycap",
          }}
        />
      );
    }
    case "APPS": {
      let plume;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.apps",
            defaultMessage: "Open plugins",
            description: "Codex Micro action label for the APPS keycap",
          }}
        />
      );
    }
    case "YEET": {
      let quillow;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.yeet",
            defaultMessage: "Write :yeet: in the composer",
            description: "Codex Micro action label for the YEET keycap",
          }}
        />
      );
    }
    case "YOLO": {
      let root;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.yolo",
            defaultMessage: "Write :yolo: in the composer",
            description: "Codex Micro action label for the YOLO keycap",
          }}
        />
      );
    }
    case "EMPT1":
    case "EMPT2":
    case "EMPT3":
    case "EMPT4":
    case "EMPT5": {
      let silk;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.custom",
            defaultMessage: "Assign any shortcut",
            description: "Codex Micro action label for empty keycaps",
          }}
        />
      );
    }
    case "PAINT": {
      let thorn;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.addPhotos",
            defaultMessage: "Add photos",
            description: "Codex Micro action label for the PAINT keycap",
          }}
        />
      );
    }
    case "TIME": {
      let upland;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.automations",
            defaultMessage: "Open Scheduled",
            description: "Codex Micro action label for the TIME keycap",
          }}
        />
      );
    }
    case "MIND+": {
      let vista;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.increaseReasoningEffort",
            defaultMessage: "Increase reasoning effort",
            description: "Codex Micro action label for the filled brain keycap",
          }}
        />
      );
    }
    case "MIND-": {
      let wisp;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.codexMicro.keycaps.decreaseReasoningEffort",
            defaultMessage: "Decrease reasoning effort",
            description:
              "Codex Micro action label for the outline brain keycap",
          }}
        />
      );
    }
  }
}
