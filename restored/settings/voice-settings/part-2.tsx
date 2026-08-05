// Restored from ref/webview/assets/voice-settings-vkVvUNXN.js
// Wave FX — full polished body from `voice-settings-vkVvUNXN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 27 (verified 75/102).
// Careful split 2/3
/* split-lane-import-depth:1 */

/** split companion stub */
const EnsureComposerEsm_Wlt_Init: any = undefined;
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_FR_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  readScrollTop,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
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
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { codexProjectKey } from "../../utils/codex-project-key";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { generalDesktopSettingsDefinitions } from "../general-desktop-settings-definitions";
import { ensureHotkeySetterInit, HotkeySetter } from "../hotkey-setter";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";
import { useVoiceSettingsHostConfig } from "../use-voice-settings-host-config";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Cross-part stubs (same-package helpers live in sibling parts).
const $: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialYC: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const setSettingValue: any = undefined;
const VoiceSettingsHelper15: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
function harbor() {
  let onyx = CodexPluginActionType(appScopeAtom),
    pearl = useIntl(),
    quartz = useSettingValue(
      generalDesktopSettingsDefinitions.microphoneInputDeviceId,
    ),
    river =
      typeof navigator < "u" &&
      navigator.mediaDevices?.enumerateDevices != null,
    slate = {
      enabled: river,
      queryFn: _t,
      queryKey: gamma,
      staleTime: readScrollTop.FIVE_SECONDS,
    };
  let timber = useQuery(slate),
    umbra,
    violet,
    willow;
  {
    umbra = timber.data ?? [];
    let lotus;
    lotus = pearl.formatMessage({
      id: "settings.general.microphoneInput.systemDefault",
      defaultMessage: "System default",
      description: "Default microphone input option label",
    });
    willow = lotus;
    let mint = (prism) => prism.deviceId === quartz;
    let nova = umbra.findIndex(mint),
      olive = umbra[nova];
    if (quartz == null) violet = willow;
    else if (umbra.length === 0) {
      let quill;
      quill = pearl.formatMessage({
        id: "settings.general.microphoneInput.selected",
        defaultMessage: "Selected microphone",
        description:
          "Microphone input label shown before the selected device name has loaded",
      });
      violet = quill;
    } else if (olive == null) {
      let reef;
      reef = pearl.formatMessage({
        id: "settings.general.microphoneInput.unavailable",
        defaultMessage: "Unavailable microphone",
        description:
          "Selected microphone input label when the device is no longer available",
      });
      violet = reef;
    } else violet = indigo(pearl, olive, nova);
  }
  let xenon = async function () {
    await appServices.systemPermissions?.requestMicrophoneAccess();
    await timber.refetch();
  };
  let yellow = xenon,
    zinc,
    amber;
  zinc = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.microphoneInput.label",
        defaultMessage: "Microphone",
        description: "Label for microphone input selection setting",
      }}
    />
  );
  amber = river ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.microphoneInput.description",
        defaultMessage: "Used for voice chat and dictation",
        description: "Description for microphone input selection setting",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.microphoneInput.unsupported",
        defaultMessage: "Microphone selection is not available on this device",
        description:
          "Description shown when microphone selection is unsupported",
      }}
    />
  );
  let basalt = (sage) => {
    sage && yellow();
  };
  let cedar = (
    <DropdownTriggerButton disabled={!river}>
      <span className="truncate">{violet}</span>
    </DropdownTriggerButton>
  );
  let daisy = quartz == null ? AppIconZlt : undefined,
    ember = () => {
      setSettingValue(
        onyx,
        generalDesktopSettingsDefinitions.microphoneInputDeviceId,
        null,
      );
    };
  let flint = (
    <DropdownMenu.Item
      {...{
        RightIcon: daisy,
        onSelect: ember,
        children: willow,
      }}
    />
  );
  let garnet = umbra.length > 0 ? <DropdownMenu.Separator {...{}} /> : null;
  let hazel;
  {
    let topaz;
    topaz = (ultra, vapor) => {
      let wheat = indigo(pearl, ultra, vapor);
      return (
        <DropdownMenu.Item
          key={ultra.deviceId}
          {...{
            RightIcon: ultra.deviceId === quartz ? AppIconZlt : undefined,
            onSelect: () => {
              setSettingValue(
                onyx,
                generalDesktopSettingsDefinitions.microphoneInputDeviceId,
                ultra.deviceId,
              );
            },
            children: wheat,
          }}
        />
      );
    };
    hazel = umbra.map(topaz);
  }
  let ivory = timber.isFetching ? (
    <DropdownMenu.Message
      {...{
        compact: true,
        children: (
          <span className="flex items-center justify-center gap-2">
            {
              <VSCODE_EDITOR_ID
                {...{
                  className: "size-3",
                }}
              />
            }
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.general.microphoneInput.loading",
                  defaultMessage: "Loading microphones",
                  description: "Message shown while microphone inputs load",
                }}
              />
            }
          </span>
        ),
      }}
    />
  ) : null;
  let jasper =
    !timber.isFetching && timber.isError ? (
      <DropdownMenu.Message
        {...{
          tone: "error",
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.general.microphoneInput.loadError",
                defaultMessage: "Unable to load microphones",
                description:
                  "Message shown when microphone input devices cannot be loaded",
              }}
            />
          ),
        }}
      />
    ) : null;
  let kelp =
    !timber.isFetching && !timber.isError && umbra.length === 0 ? (
      <DropdownMenu.Message
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.general.microphoneInput.empty",
                defaultMessage: "No microphones found",
                description:
                  "Message shown when no microphone inputs are available",
              }}
            />
          ),
        }}
      />
    ) : null;
  return (
    <EnsurePersonalizationCInit
      {...{
        label: zinc,
        description: amber,
        control: (
          <DropdownMenuPopover
            {...{
              contentWidth: "menuWide",
              align: "end",
              disabled: !river,
              onOpenChange: basalt,
              triggerButton: cedar,
              children: [flint, garnet, hazel, ivory, jasper, kelp],
            }}
          />
        ),
      }}
    />
  );
}
function indigo(yarn, zephyr, acorn) {
  return (
    zephyr.label ||
    yarn.formatMessage(
      {
        id: "settings.general.microphoneInput.fallbackDeviceLabel",
        defaultMessage: "Microphone {index}",
        description:
          "Fallback microphone input label when the browser does not expose the device name",
      },
      {
        index: acorn + 1,
      },
    )
  );
}
async function _t() {
  if (typeof navigator > "u") return [];
  let bloom = navigator.mediaDevices;
  return bloom?.enumerateDevices == null
    ? []
    : (await bloom.enumerateDevices()).filter(
        (item) =>
          item.kind === "audioinput" &&
          item.deviceId.length > 0 &&
          item.deviceId !== "default",
      );
}
function jade() {
  let { data } = CodexPluginActionResult(bravo),
    coral = alpha(data);
  let drift = coral,
    eagle = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.general.dictation",
                defaultMessage: "Dictation",
                description: "Heading for global dictation settings group",
              }}
            />
          ),
        }}
      />
    );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          eagle,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: drift ? (
                <>
                  {
                    <ParseUrlOrFallback
                      {...{
                        children: [
                          <VoiceSettingsHelper14
                            {...{
                              hotkeyState: data,
                              mode: "hold",
                            }}
                          />,
                          <VoiceSettingsHelper14
                            {...{
                              hotkeyState: data,
                              mode: "toggle",
                            }}
                          />,
                          <VoiceSettingsHelper8
                            {...{
                              hotkeyState: data,
                            }}
                          />,
                        ],
                      }}
                    />
                  }
                  {
                    <ParseUrlOrFallback
                      {...{
                        children: <VoiceSettingsHelper9 {...{}} />,
                      }}
                    />
                  }
                  {
                    <ParseUrlOrFallback
                      {...{
                        children: <VoiceSettingsHelper15 {...{}} />,
                      }}
                    />
                  }
                </>
              ) : (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <AppInitialLj layout="settings-row">
                        {
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.voice.dictation.unsupported",
                              defaultMessage:
                                "Dictation is not available on this device",
                              description:
                                "Empty state shown when desktop dictation is unsupported",
                            }}
                          />
                        }
                      </AppInitialLj>
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
function VoiceSettingsHelper8(frost) {
  let { hotkeyState } = frost,
    glide = useIntl(),
    honey = useQueryClient(),
    iris = ensureGitRepoWatchAtomsInit(),
    jewel = {
      onSuccess: (ridge) => {
        let storm = buildVscodeQueryKey("global-dictation-hotkey-state");
        honey.setQueryData(storm, ridge);
        iris(storm);
      },
    };
  let knoll = applyU0000U001FU007F2("global-dictation-set-keep-visible", jewel),
    lunar,
    moss;
  lunar = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.globalDictationKeepVisible.label",
        defaultMessage: "Keep dictation bar visible",
        description:
          "Label for the persistent global dictation reminder setting",
      }}
    />
  );
  moss = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.globalDictationKeepVisible.description",
        defaultMessage:
          "Show a small shortcut reminder when dictation isn't recording",
        description:
          "Description for the persistent global dictation reminder setting",
      }}
    />
  );
  let north = hotkeyState?.keepVisible === true,
    orbit =
      hotkeyState == null ||
      (hotkeyState.configuredHotkey == null &&
        hotkeyState.configuredToggleHotkey == null) ||
      knoll.isPending,
    pine = (tide) => {
      knoll.mutate({
        keepVisible: tide,
      });
    };
  let quest = glide.formatMessage({
    id: "settings.general.globalDictationKeepVisible.ariaLabel",
    defaultMessage: "Keep the dictation bar visible",
    description:
      "Aria label for the persistent global dictation reminder toggle",
  });
  return (
    <EnsurePersonalizationCInit
      {...{
        label: lunar,
        description: moss,
        control: (
          <AppInitialYC
            checked={north}
            disabled={orbit}
            onChange={pine}
            ariaLabel={quest}
          />
        ),
      }}
    />
  );
}
function VoiceSettingsHelper9() {
  let unity = CodexPluginActionType(appScopeAtom),
    vale = useIntl(),
    wave = useSettingValue(
      generalDesktopSettingsDefinitions.dictationDictionary,
    ),
    [apex, brook] = copper.useState(null),
    cliff = copper.useRef(false),
    dusk = apex ?? wave,
    elm = dusk != null && dusk.length > 0 ? dusk : echo,
    fern = async function (petal) {
      let quiet = petal.map(nickel).filter(marble);
      await setSettingValue(
        unity,
        generalDesktopSettingsDefinitions.dictationDictionary,
        quiet,
      );
      brook(null);
    };
  let grove = fern,
    hill,
    isle;
  hill = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.dictationDictionary.label",
        defaultMessage: "Dictation dictionary",
        description: "Label for dictation cleanup dictionary setting",
      }}
    />
  );
  isle = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.dictationDictionary.description",
        defaultMessage: "Words or phrases dictation should recognize",
        description: "Description for dictation cleanup dictionary setting",
      }}
    />
  );
  let juniper = () => {
    brook([...elm, delta]);
    requestAnimationFrame(() => {
      document
        .querySelector(
          `[data-dictation-dictionary-entry-index="${elm.length}"]`,
        )
        ?.focus();
    });
  };
  let lagoon, meadow;
  lagoon = (
    <EnsureComposerEsm_Wlt_Init
      {...{
        className: "icon-2xs",
      }}
    />
  );
  meadow = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.dictationDictionary.addEntry",
        defaultMessage: "Add entry",
        description: "Button label for adding one dictation dictionary entry",
      }}
    />
  );
  let nest = (
    <EnsurePersonalizationCInit
      {...{
        label: hill,
        description: isle,
        control: (
          <ReadLoginRouteQuerySnapshot
            {...{
              type: "button",
              color: "secondary",
              size: "toolbar",
              onMouseDown: lemon,
              onClick: juniper,
              children: [lagoon, meadow],
            }}
          />
        ),
      }}
    />
  );
  let oak = elm.map((item, index) => (
    <EnsurePersonalizationCInit
      key={index}
      {...{
        variant: "nested",
        label: null,
        control: (
          <div className="flex w-full items-center gap-2">
            <input
              data-dictation-dictionary-entry-index={index}
              aria-label={vale.formatMessage(
                {
                  id: "settings.general.dictationDictionary.entryLabel",
                  defaultMessage: "Dictionary entry {index}",
                  description: "Aria label for one dictation dictionary entry",
                },
                {
                  index: index + 1,
                },
              )}
              className="w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
              placeholder={falcon[index] ?? falcon[0] ?? ""}
              value={item}
              onChange={(event) => {
                let rain = [...elm];
                rain[index] = event.currentTarget.value;
                brook(rain);
              }}
              onBlur={() => {
                if (cliff.current) {
                  cliff.current = false;
                  return;
                }
                grove(elm);
              }}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                event.preventDefault();
                let seed = [
                  ...elm.slice(0, index + 1),
                  delta,
                  ...elm.slice(index + 1),
                ];
                cliff.current = true;
                brook(seed);
                requestAnimationFrame(() => {
                  document
                    .querySelector(
                      `[data-dictation-dictionary-entry-index="${index + 1}"]`,
                    )
                    ?.focus();
                });
              }}
            />
            {
              <ReadLoginRouteQuerySnapshot
                {...{
                  type: "button",
                  color: "ghost",
                  size: "icon",
                  "aria-label": vale.formatMessage(
                    {
                      id: "settings.general.dictationDictionary.removeEntry",
                      defaultMessage: "Remove dictionary entry {index}",
                      description:
                        "Button label for removing one dictation dictionary entry",
                    },
                    {
                      index: index + 1,
                    },
                  ),
                  disabled: elm.length === 1 && item.length === 0,
                  onMouseDown: kite,
                  onClick: () => {
                    grove(elm.filter((_item, _index) => _index !== index));
                  },
                  children: (
                    <AppIconBO
                      {...{
                        className: "icon-2xs",
                      }}
                    />
                  ),
                }}
              />
            }
          </div>
        ),
      }}
    />
  ));
  return (
    <>
      {nest}
      {oak}
    </>
  );
}
function kite(event) {
  event.preventDefault();
}
function lemon(event) {
  event.preventDefault();
}
function marble(trail) {
  return trail.length > 0;
}
function nickel(urn) {
  return urn.trim();
}
function VoiceSettingsHelper14(vine) {
  let { hotkeyState, mode } = vine,
    wind = mode === "toggle",
    yarrow = useIntl(),
    azure = useQueryClient(),
    birch = ensureGitRepoWatchAtomsInit(),
    [canyon, dew] = copper.useState(false),
    [ever, field] = copper.useState(null),
    grain = {
      onSuccess: (dome) => {
        let eddy = buildVscodeQueryKey("global-dictation-hotkey-state");
        azure.setQueryData(eddy, dome.state);
        Promise.all([
          birch(eddy),
          birch(buildVscodeQueryKey("codex-command-keymap-state")),
        ]);
      },
    };
  let haven = applyU0000U001FU007F2(
      mode === "hold"
        ? "global-dictation-set-hotkey"
        : "global-dictation-set-toggle-hotkey",
      grain,
    ),
    ink = async function (fjord) {
      field(null);
      try {
        let glen = await haven.mutateAsync({
          hotkey: fjord,
        });
        glen.success || field(glen.error);
      } catch (hearth) {
        let inlet = hearth;
        if (inlet instanceof Error) {
          field(inlet.message);
          return;
        }
        if (wind) {
          field(
            yarrow.formatMessage({
              id: "settings.general.globalDictationToggleHotkey.errorGeneric",
              defaultMessage: "Failed to update toggle dictation hotkey",
              description:
                "Fallback error shown when toggle dictation hotkey update fails",
            }),
          );
          return;
        }
        field(
          yarrow.formatMessage({
            id: "settings.general.globalDictationHotkey.errorGeneric",
            defaultMessage: "Failed to update hold-to-dictate hotkey",
            description:
              "Fallback error shown when hold-to-dictate hotkey update fails",
          }),
        );
      }
    };
  let jadeite = ink,
    kernel = wind
      ? (hotkeyState?.configuredToggleHotkey ?? null)
      : (hotkeyState?.configuredHotkey ?? null),
    leaf = kernel == null ? null : moveArrayItem(kernel);
  let maple = leaf,
    nimbus = wind
      ? yarrow.formatMessage($.toggleDictationHotkey)
      : yarrow.formatMessage($.holdToDictateHotkey);
  let opal = nimbus,
    plume = wind
      ? yarrow.formatMessage({
          id: "settings.general.globalDictationToggleHotkey.captureAriaLabel",
          defaultMessage: "Toggle dictation hotkey capture",
          description: "Aria label for toggle dictation hotkey capture input",
        })
      : yarrow.formatMessage({
          id: "settings.general.globalDictationHotkey.captureAriaLabel",
          defaultMessage: "Hold-to-dictate hotkey capture",
          description: "Aria label for hold-to-dictate hotkey capture input",
        });
  let quillow = plume,
    root = wind ? (
      <MemoizedFormattedMessage
        {...{
          ...$.toggleDictationHotkey,
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          ...$.holdToDictateHotkey,
        }}
      />
    );
  let silk = wind ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.globalDictationToggleHotkey.description",
        defaultMessage:
          "Press once anywhere on desktop to dictate, then press again to stop",
        description: "Description for toggle dictation hotkey setting",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.globalDictationHotkey.description",
        defaultMessage:
          "Hold anywhere on desktop to dictate where your cursor is",
        description: "Description for hold-to-dictate hotkey setting",
      }}
    />
  );
  let thorn = ever ? (
    <span className="text-token-error-foreground">{ever}</span>
  ) : null;
  let upland = (
    <div className="flex flex-col gap-1">
      {silk}
      {thorn}
    </div>
  );
  let vista = haven.isPending,
    wisp = yarrow.formatMessage({
      id: "settings.general.globalDictationHotkey.off",
      defaultMessage: "Off",
      description: "Status label when global dictation hotkey is disabled",
    });
  let yonder = () => {
    dew(false);
  };
  let zenith, anvil;
  zenith = (jetty) => {
    dew(false);
    jadeite(jetty);
  };
  anvil = () => {
    jadeite(null);
  };
  let beacon = () => {
    field(null);
    dew(true);
  };
  let crag = (
    <HotkeySetter
      {...{
        accelerator: kernel,
        acceleratorLabel: maple,
        allowsBareModifiers: true,
        captureAriaLabel: quillow,
        disabled: vista,
        emptyLabel: wisp,
        hotkeyName: opal,
        isCapturing: canyon,
        onCancelCapture: yonder,
        onCapture: zenith,
        onClear: anvil,
        onStartCapture: beacon,
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: root,
        description: upland,
        control: crag,
      }}
    />
  );
}
