// Restored from ref/webview/assets/computer-use-settings-Bhf26OaV.js
// Wave5 stub-pass soft companions.
const _n: any = undefined;

// Wave FX — full polished body from `computer-use-settings-Bhf26OaV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 92/130).
// Wave5d — FZ repair from fy-clean L=2256 sus=29; JSX PascalCase + careful split.
// Wave5d careful split 1/4
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
} from "../../runtime/app-scope-runtime";
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
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_MR_Init } from "../../conversation/conversation-page-esm-inits";
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
const AppInitialBC: any = undefined;
// Wave5d soft stubs.
const ComputerUseSettingsHelper12: any = undefined;
const ComputerUseSettingsHelper13: any = undefined;
const ComputerUseSettingsHelper16: any = undefined;
const ComputerUseSettingsHelper3: any = undefined;
const ComputerUseSettingsHelper4: any = undefined;
const ComputerUseSettingsHelper8: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiE: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FX unresolved companion (missing-export:conversation/user-message5.tsx) */
const UserMessage5: any = undefined;
/** Wave FX unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useBrowserExtensionPluginSetupQuery@skills/use-browser-extension-plugin-setup-query.ts) */
const AppInitialDt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiE@ui/deferred-ui-e.ts) */
const AppInitialE: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-gr.ts) */
const deferredUiGR: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/zoom-percent-menu-control.tsx) */
const AppInitialHR: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/user-message3.tsx) */
const UserMessage3: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (missing-export:icons/app-icon-ko.tsx) */
const AppInitialKO: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureKeyboardShortcutsKtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialKt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useComputerUseSettingsSection@settings/use-computer-use-settings-section.ts) */
const AppInitialMO: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FX unresolved companion (jsx-collision:browserUseOriginStateQueryAtom@boundaries/browser-use-mutation-facades.ts) */
const AppInitialOO: any = undefined;
/** Wave FX unresolved companion (missing-export:plugins/read-file.tsx) */
const AppInitialOt: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-rt.ts) */
const deferredHostsRt: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/browser-use-external.tsx) */
const BrowserUseExternal: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useComputerUseWindowsGate@devices/use-computer-use-windows-gate.ts) */
const AppInitialWK: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsC: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsF: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsG: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsH: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsM: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsP: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsS: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsUnderscore: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsV: any = undefined;
/** Wave FX unresolved companion (sib-missing:settings/browser-use-settings.tsx) */
const browserUseSettingsY: any = undefined;
var daisy,
  ember = esmInit(() => {
    daisy =
      "" + new URL("microsoft-excel-large-CY0bRHcJ.png", import.meta.url).href;
  }),
  flint,
  garnet = esmInit(() => {
    flint =
      "" +
      new URL("microsoft-powerpoint-large-DlJg6gsJ.png", import.meta.url).href;
  });
function hazel(vapor) {
  let { computerImageDataUrl, lockImageDataUrl } = vapor,
    wheat = (
      <img
        alt=""
        className="absolute top-0 left-1 h-[53px] w-[53px] object-contain"
        draggable={false}
        src={computerImageDataUrl}
      />
    );
  let yarn = (
    <img
      alt=""
      className="absolute right-0 bottom-0 h-[33px] w-[27px] object-contain"
      draggable={false}
      src={lockImageDataUrl}
    />
  );
  return (
    <span className="relative inline-block h-[57px] w-[62px] shrink-0">
      {wheat}
      {yarn}
    </span>
  );
}
var ivory,
  jasper,
  kelp = esmInit(() => {
    ivory = reactCompilerRuntime();
  });
function lotus(zephyr) {
  let { status } = zephyr;
  if (status.isLoading) {
    let eagle;
    return (
      <MemoizedFormattedMessage
        {...{
          ...olive.loading,
        }}
      />
    );
  }
  let acorn = status.isConnected
      ? "bg-[var(--color-icon-success)]"
      : "bg-[var(--color-icon-error)]",
    bloom = IntlProvider("h-2 w-2 shrink-0 rounded-full", acorn);
  let coral = <span className={bloom} />;
  let drift = (
    <span className="min-w-0 truncate">
      {status.isConnected ? (
        <MemoizedFormattedMessage
          {...{
            ...olive.connected,
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...olive.disconnected,
          }}
        />
      )}
    </span>
  );
  return (
    <span className="inline-flex max-w-full items-center gap-2">
      {coral}
      {drift}
    </span>
  );
}
var mint,
  nova,
  olive,
  prism = esmInit(() => {
    mint = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    olive = identity({
      connected: {
        id: "plugins.browserExtension.connected",
        defaultMessage: "Connected to browser extension for additional control",
        description:
          "Status text shown when the Chrome browser extension is installed",
      },
      disconnected: {
        id: "plugins.browserExtension.disconnected",
        defaultMessage: "Browser extension not connected",
        description:
          "Status text shown when the Chrome browser extension is not installed",
      },
      loading: {
        id: "plugins.browserExtension.loading",
        defaultMessage: "Use the browser extension for additional control",
        description:
          "Status text shown while the Chrome browser extension install state is loading",
      },
    });
  }),
  quill,
  reef = esmInit(() => {
    ensureIntlFormattersInit();
    quill = identity({
      control: {
        id: "settings.computerUse.install.title",
        defaultMessage: "Control",
        description: "Title for computer use plugin install settings section",
      },
      anyApp: {
        id: "settings.computerUse.anyApp.title",
        defaultMessage: "Any App",
        description:
          "Label for the Computer Use plugin row that lets Codex control 'Any App' on the user's computer",
      },
      googleChrome: {
        id: "settings.computerUse.chrome.pluginTitle",
        defaultMessage: "Google Chrome",
        description: "Title for the Google Chrome plugin control row",
      },
      microsoftExcel: {
        id: "settings.computerUse.microsoftExcel.pluginTitle",
        defaultMessage: "Microsoft Excel",
        description: "Title for the Microsoft Excel plugin control row",
      },
      microsoftExcelDescription: {
        id: "settings.computerUse.microsoftExcel.description",
        defaultMessage:
          "Let ChatGPT use Microsoft Excel add-in for additional control",
        description: "Description for the Microsoft Excel plugin control row",
      },
      microsoftExcelToggleAria: {
        id: "settings.computerUse.microsoftExcel.appToggleAria",
        defaultMessage: "Toggle Microsoft Excel live control",
        description:
          "Accessible label for toggling Microsoft Excel live control from Computer Use settings",
      },
      microsoftExcelDisableTooltip: {
        id: "settings.computerUse.microsoftExcel.disableToggleTooltip",
        defaultMessage: "Disable Microsoft Excel live control",
        description: "Tooltip label for disabling Microsoft Excel live control",
      },
      microsoftExcelEnableTooltip: {
        id: "settings.computerUse.microsoftExcel.enableToggleTooltip",
        defaultMessage: "Enable Microsoft Excel live control",
        description: "Tooltip label for enabling Microsoft Excel live control",
      },
      microsoftPowerPoint: {
        id: "settings.computerUse.microsoftPowerPoint.pluginTitle",
        defaultMessage: "Microsoft PowerPoint",
        description: "Title for the Microsoft PowerPoint plugin control row",
      },
      microsoftPowerPointDescription: {
        id: "settings.computerUse.microsoftPowerPoint.description",
        defaultMessage:
          "Let ChatGPT use Microsoft PowerPoint add-in for additional control",
        description:
          "Description for the Microsoft PowerPoint plugin control row",
      },
      microsoftPowerPointToggleAria: {
        id: "settings.computerUse.microsoftPowerPoint.appToggleAria",
        defaultMessage: "Toggle Microsoft PowerPoint live control",
        description:
          "Accessible label for toggling Microsoft PowerPoint live control from Computer Use settings",
      },
      microsoftPowerPointDisableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.disableToggleTooltip",
        defaultMessage: "Disable Microsoft PowerPoint live control",
        description:
          "Tooltip label for disabling Microsoft PowerPoint live control",
      },
      microsoftPowerPointEnableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.enableToggleTooltip",
        defaultMessage: "Enable Microsoft PowerPoint live control",
        description:
          "Tooltip label for enabling Microsoft PowerPoint live control",
      },
      alwaysAllowedApps: {
        id: "settings.computerUse.allowedApps.title",
        defaultMessage: "Always-allowed apps",
        description: "Title for computer use always allowed apps list",
      },
      foregroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundClicks",
        defaultMessage: "Play sounds for foreground clicks",
        description:
          "Computer use sound setting option for foreground click sounds",
      },
      foregroundAndBackgroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundAndBackgroundClicks",
        defaultMessage: "Play sounds for foreground and background clicks",
        description:
          "Computer use sound setting option for foreground and background click sounds",
      },
      noClickSounds: {
        id: "settings.computerUse.sounds.off",
        defaultMessage: "Don’t play sounds",
        description: "Computer use sound setting option for no sounds",
      },
    });
  }),
  sage,
  topaz = esmInit(() => {
    sage =
      "" +
      new URL("chrome-production-large-BLPyHeGg.png", import.meta.url).href;
  });
export function ComputerUseSettings() {
  let { selectedHostId } = useSelectedHost(),
    frost = CodexBrowserSurfaceActionType(deferredHostsRt, selectedHostId),
    glide = {
      hostId: selectedHostId,
    };
  let honey = AppInitialWK(glide),
    { platform } = useHostPlatformModifierSymbol(),
    iris =
      ensureSteeringUserMessageClusterInit(selectedHostId).kind === "local",
    jewel = NativeContextMenuSurface("188145323");
  if (useMatch(_n) != null) {
    let ridge;
    return <ComputerUseSettingsHelper8 {...{}} />;
  }
  let knoll, lunar;
  knoll = <SettingsSectionTitle slug={umbra} />;
  lunar = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.computerUse.subtitle",
        defaultMessage:
          "Manage how ChatGPT uses other applications on your computer",
        description: "Subtitle for computer use settings",
      }}
    />
  );
  let moss = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              ...quill.control,
            }}
          />
        ),
      }}
    />
  );
  let north = (
    <ComputerUseSettingsHelper4
      {...{
        computerUseAvailability: honey,
        platform,
      }}
    />
  );
  let orbit =
    platform === "macOS" && honey.available && frost ? (
      <ComputerUseSettingsHelper13 {...{}} />
    ) : null;
  let pine = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          moss,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: [north, orbit],
            }}
          />,
        ],
      }}
    />
  );
  let quest = honey.available ? (
    <>
      {platform === "macOS" && iris && jewel ? (
        <ElectronOnly
          {...{
            electron: true,
            children: <ComputerUseSettingsHelper3 {...{}} />,
          }}
        />
      ) : null}
      {
        <UseChromeAndCodeThemeSync
          {...{
            children: [
              <UseChromeAndCodeThemeSync.Header
                {...{
                  title: (
                    <MemoizedFormattedMessage
                      {...{
                        ...quill.alwaysAllowedApps,
                      }}
                    />
                  ),
                }}
              />,
              <UseChromeAndCodeThemeSync.Content
                {...{
                  children: (
                    <ParseUrlOrFallback
                      {...{
                        children: <ComputerUseSettingsHelper16 {...{}} />,
                      }}
                    />
                  ),
                }}
              />,
            ],
          }}
        />
      }
      {<ComputerUseSettingsHelper12 {...{}} />}
    </>
  ) : null;
  return (
    <OpenInBrowser
      {...{
        title: knoll,
        subtitle: lunar,
        children: [pine, quest],
      }}
    />
  );
}
function ultra() {
  let storm = CodexPluginActionType(appScopeAtom),
    tide = useIntl(),
    unity = useSettingValue(
      LOCAL_CONVERSATION_ROUTE.alwaysHidePictureInPicture,
    ),
    vale = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.computerUse.pictureInPicture.title",
                defaultMessage: "Picture in picture",
                description:
                  "Title for Computer Use picture in picture settings",
              }}
            />
          ),
        }}
      />
    );
  let wave, apex;
  wave = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.computerUse.pictureInPicture.alwaysHide.label",
        defaultMessage: "Always hide picture in picture",
        description: "Label for always hiding Computer Use picture in picture",
      }}
    />
  );
  apex = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.computerUse.pictureInPicture.alwaysHide.description",
        defaultMessage:
          "Prevent ChatGPT from showing computer use activity in picture in picture",
        description:
          "Description for always hiding Computer Use picture in picture",
      }}
    />
  );
  let brook = tide.formatMessage({
    id: "settings.computerUse.pictureInPicture.alwaysHide.ariaLabel",
    defaultMessage: "Always hide picture in picture",
    description:
      "Accessible label for always hiding Computer Use picture in picture",
  });
  let cliff = (dusk) => {
    setSettingValue(
      storm,
      LOCAL_CONVERSATION_ROUTE.alwaysHidePictureInPicture,
      dusk,
    );
  };
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          vale,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <EnsurePersonalizationCInit
                        {...{
                          label: wave,
                          description: apex,
                          control: (
                            <AppInitialYC
                              ariaLabel={brook}
                              checked={unity}
                              onChange={cliff}
                            />
                          ),
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
}
