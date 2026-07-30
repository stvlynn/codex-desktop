// Restored from ref/webview/assets/computer-use-settings-Bhf26OaV.js
// Wave5 stub-pass soft companions.
const BrowserUseExternal: any = undefined;
const UserMessage3: any = undefined;
const browserUseSettingsF: any = undefined;
const browserUseSettingsH: any = undefined;
const browserUseSettingsP: any = undefined;
const browserUseSettingsUnderscore: any = undefined;
const browserUseSettingsY: any = undefined;

// Wave FX — full polished body from `computer-use-settings-Bhf26OaV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 92/130).
// Wave5d — FZ repair from fy-clean L=2256 sus=29; JSX PascalCase + careful split.
// Wave5d careful split 4/4
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { isCustomAuthMethod } from "../../auth/is-custom-auth-method";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  ensureBrowserUseGateInit,
  useExternalBrowserUseGate,
} from "../../boundaries/browser-use-gate-facades";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Tft_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_MR_Init } from "../../boundaries/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { isCommandEnabledForDesktopFlags } from "../../commands/is-command-enabled-for-desktop-flags";
import { ensureBrowserPluginMentionMessagesInit } from "../../composer/browser-plugin-mention-messages";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { areTurnsRelated } from "../../conversation/is-turn-ancestor";
import { ensureWebviewMicroCommandsClusterInit } from "../../desktop/ensure-webview-micro-commands-cluster-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { LOCAL_CONVERSATION_ROUTE } from "../../routing/local-conversation-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredT } from "../../ui/deferred-t";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { macOS4 } from "../../ui/mac-os4";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import {
  ensureKeyboardShortcutsGtInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureBrowserUseSettingsInit } from "../browser-use-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

// Wave5d soft JSX companions.
function DeferredUiU(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialE: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialHR: any = undefined;
const AppInitialKO: any = undefined;
const AppInitialOt: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialVO: any = undefined;
const ComputerUseSettingsHelper19: any = undefined;
const ComputerUseSettingsHelper20: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function olive(drift) {
  let { approvals } = drift,
    eagle = CodexPluginActionType(appScopeAtom),
    frost = useIntl(),
    [glide, honey] = topaz.useState(null),
    iris = {
      mutationFn: on,
      onSuccess: (hill) => {
        eagle.query.setData(UserMessage3, hill);
        eagle.get(toastAtom).success(
          <MemoizedFormattedMessage
            {...{
              id: "settings.computerUse.allowedApps.saved",
              defaultMessage: "Allowed app removed",
              description:
                "Toast shown after removing a computer use allowed app",
            }}
          />,
        );
      },
      onError: () => {
        eagle.get(toastAtom).danger(
          <MemoizedFormattedMessage
            {...{
              id: "settings.computerUse.allowedApps.saveError",
              defaultMessage: "Unable to save allowed apps",
              description:
                "Toast shown when saving computer use allowed apps fails",
            }}
          />,
        );
      },
    };
  let jewel = noop(iris),
    knoll = async () => {
      glide != null &&
        (await jewel.mutateAsync(glide.bundleIdentifier), honey(null));
    };
  let lunar = knoll,
    moss = approvals?.approvedApps ?? [];
  let north = (
    <ComputerUseSettingsHelper19
      {...{
        approvedApps: moss,
        intl: frost,
        isSaving: jewel.isPending,
        onRequestRemoval: honey,
      }}
    />
  );
  let orbit = glide != null,
    pine = (isle) => {
      isle || honey(null);
    };
  let quest = glide?.displayName ?? "",
    ridge = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.computerUse.allowedApps.removeDialogTitle",
          defaultMessage: "Remove “{displayName}” from always allowed apps?",
          description:
            "Title for dialog confirming removal of a computer use allowed app",
          values: {
            displayName: quest,
          },
        }}
      />
    );
  let storm = glide?.displayName ?? "",
    tide = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.computerUse.allowedApps.removeDialogSubtitle",
          defaultMessage:
            "ChatGPT will ask to use “{displayName}” in the next computer use session.",
          description:
            "Subtitle for dialog confirming removal of a computer use allowed app",
          values: {
            displayName: storm,
          },
        }}
      />
    );
  let unity = (
    <DeferredUiU
      {...{
        children: (
          <DeferredUiH
            {...{
              title: ridge,
              subtitle: tide,
            }}
          />
        ),
      }}
    />
  );
  let vale, wave;
  vale = () => {
    honey(null);
  };
  wave = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.computerUse.allowedApps.removeDialogCancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for remove allowed app dialog",
      }}
    />
  );
  let apex = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        disabled: jewel.isPending,
        onClick: vale,
        children: wave,
      }}
    />
  );
  let brook = () => {
    lunar();
  };
  let cliff = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.computerUse.allowedApps.removeDialogConfirm",
        defaultMessage: "Remove",
        description: "Confirm button label for remove allowed app dialog",
      }}
    />
  );
  let dusk = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "danger",
        loading: jewel.isPending,
        onClick: brook,
        children: cliff,
      }}
    />
  );
  let elm = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [apex, dusk],
            }}
          />
        ),
      }}
    />
  );
  let fern = (
    <DeferredUiB
      {...{
        children: [unity, elm],
      }}
    />
  );
  let grove = (
    <UsePointerSurfaceInteractionGate
      {...{
        open: orbit,
        onOpenChange: pine,
        size: "compact",
        children: fern,
      }}
    />
  );
  return (
    <>
      {north}
      {grove}
    </>
  );
}
async function on(juniper) {
  let lagoon = await ensureWebviewMicroCommandsClusterInit(juniper);
  if (lagoon == null) throw Error("Computer use app approvals are unavailable");
  return lagoon;
}
function prism(meadow, nest) {
  let oak = isBusinessPlan();
  return (
    (oak === CodexBuildEnvironment.Dev
      ? browserUseSettingsP(meadow, zephyr, nest)
      : CodexBuildEnvironment.isInternal(oak)
        ? (browserUseSettingsP(meadow, acorn, nest) ??
          browserUseSettingsP(meadow, zephyr, nest))
        : null) ?? browserUseSettingsP(meadow, yarn, nest)
  );
}
function quill(petal) {
  let { approvedApps, intl, isSaving, onRequestRemoval } = petal;
  if (approvedApps.length === 0) {
    let rain;
    return (
      <EnsurePersonalizationCInit
        {...{
          className: "justify-center",
          label: (
            <span className="text-token-text-secondary">
              {
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.computerUse.allowedApps.emptyTitle",
                    defaultMessage: "None yet",
                    description:
                      "Empty state title for computer use allowed apps",
                  }}
                />
              }
            </span>
          ),
          control: null,
        }}
      />
    );
  }
  let quiet;
  {
    let seed;
    seed = (trail) => (
      <EnsurePersonalizationCInit
        key={trail.bundleIdentifier}
        {...{
          icon: (
            <ComputerUseSettingsHelper20
              {...{
                approvedApp: trail,
              }}
            />
          ),
          label: <span className="font-medium">{trail.displayName}</span>,
          description: null,
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                "aria-label": intl.formatMessage(
                  {
                    id: "settings.computerUse.allowedApps.removeAriaLabel",
                    defaultMessage: "Remove {displayName}",
                    description:
                      "Aria label for button that removes a computer use allowed app",
                  },
                  {
                    displayName: trail.displayName,
                  },
                ),
                color: "danger",
                disabled: isSaving,
                onClick: () => {
                  onRequestRemoval(trail);
                },
                size: "icon",
                children: <AppIconBO {...{}} />,
              }}
            />
          ),
        }}
      />
    );
    quiet = approvedApps.map(seed);
  }
  return <>{quiet}</>;
}
function reef(urn) {
  let { approvedApp } = urn;
  if (approvedApp.iconDataURL != null) {
    let wind;
    return (
      <img
        alt=""
        className="h-9 w-9 shrink-0 rounded-md"
        draggable={false}
        src={approvedApp.iconDataURL}
      />
    );
  }
  let vine = approvedApp.displayName.slice(0, 1).toUpperCase();
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-token-foreground/10 text-sm font-semibold text-token-description-foreground">
      {vine}
    </div>
  );
}
var sage, topaz, ultra, vapor, wheat, yarn, zephyr, acorn, bloom, _n, coral, $;
esmInit(() => {
  sage = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  topaz = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialE();
  flint();
  mint();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  nova();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  initToolbarBreadcrumb();
  ensureComposerEsm_K1_Init();
  findProcessManagerRow();
  AppInstallProgressDialog();
  BrowserUseExternal();
  ensureBrowserUseGateInit();
  ensureUseHomeDirectoryInit();
  macOS4();
  ensureDropdownMenuPopoverInit();
  AppInitialVO();
  AppInitialOt();
  alpha();
  installModalBrowserExtensionMessages();
  ensureBrowserPluginMentionMessagesInit();
  AppInitialHR();
  ensureInstalledPluginsQueryInit();
  isOpenaiCuratedMarketplaceToken();
  ensureAppScopeInit();
  AppInitialKO();
  deferredT();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  browserUseSettingsY();
  ensureBrowserUseSettingsInit();
  browserUseSettingsUnderscore();
  river();
  codexCommandTheme();
  AppIconBO();
  initSettingsLoadingRow();
  useGateEnabledWithAccountData();
  browserUseSettingsH();
  browserUseSettingsF();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  ensureSkillsPageHelpersInit();
  ensureDebugPanelTurnFilesInit();
  scrollAppActionTargetTo();
  daisy();
  vapor = "computer-use";
  wheat = "computer-use";
  yarn = "chrome";
  zephyr = "chrome-dev";
  acorn = "chrome-internal";
  bloom = "connector_openai_codex_document_control";
  _n = "/settings/computer-use/google-chrome";
  coral = "foregroundClicks";
  $ = [
    {
      value: "foregroundClicks",
      label: gamma.foregroundClickSounds,
    },
    {
      value: "foregroundAndBackgroundClicks",
      label: gamma.foregroundAndBackgroundClickSounds,
    },
    {
      value: "off",
      label: gamma.noClickSounds,
    },
  ];
})();
