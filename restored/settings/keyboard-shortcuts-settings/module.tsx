// Restored from ref/webview/assets/keyboard-shortcuts-settings-CbGfl9Qf.js
// Wave FX — full polished body from `keyboard-shortcuts-settings-CbGfl9Qf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 23 (verified 62/85).
// AST split 1/1
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { BrowserWebviewPanel } from "../../browser/browser-webview-panel";
import { ensureWebviewMicroCommandsClusterInit } from "../../desktop/ensure-webview-micro-commands-cluster-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconOi } from "../../icons/app-icon-oi";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DEFAULT_MOTION_TRANSITION } from "../../ui/default-motion-transition";
import { deferredT1 } from "../../ui/deferred-t1";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredVM } from "../../ui/deferred-vm";
import { SortableContext } from "../../ui/dnd-sortable-context";
import { EASE_OUT_EXPO } from "../../ui/ease-out-expo";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { sortable } from "../../ui/sortable";
import { codexProjectKey } from "../../utils/codex-project-key";
import { moveArrayItem } from "../../utils/move-array-item";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensureKeyboardShortcutsGtInit as EnsureKeyboardShortcutsGtInit,
  ensureKeyboardShortcutsHMInit,
  ensureKeyboardShortcutsJZInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadB1Init } from "../../utils/wave-av-gap-ensure-inits";
import {
  ensureHotkeySetterHelpersInit,
  ensureHotkeySetterInit,
  formatHotkeyLabel,
  HotkeySetter,
} from "../hotkey-setter";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";
import { WorkspaceImportSettingsSection } from "../workspace-import-settings-section";
const AppInitial1: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureKeyboardShortcutsHpInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialHp: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureKeyboardShortcutsJtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialJt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:stableQueryKey@utils/stable-query-key.ts) */
const AppInitialKi: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureKeyboardShortcutsKtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialKt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useContentRectSize@hooks/use-content-rect-size.ts) */
const AppInitialM1: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FX unresolved companion (jsx-collision:reuseArrayIfShallowEqual@utils/reuse-array-if-shallow-equal.ts) */
const AppInitialP1: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/apply-u0000-u001-fu007-f2.ts) */
const applyU0000U001FU007F2: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useIsComputerUseNativeAppAllowed@settings/use-is-computer-use-native-app-allowed.ts) */
const AppInitialUp: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/missing-conversation.tsx) */
const AppInitialUr: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:isCommandEnabledForDesktopFlags@commands/is-command-enabled-for-desktop-flags.ts) */
const AppInitialXt: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-xz.ts) */
const deferredUiXZ: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (missing-export:shell/normalize-presence-to-normal.ts) */
const normalizePresenceToNormal: any = undefined;
/** Wave FX unresolved companion (jsx-collision:isBusinessPlanExcludingEducation@account/plan-type-helpers.ts) */
const AppInitialZ7: any = undefined;
export function KeyboardShortcutsSettings() {
  return <KeyboardShortcutsSettingsHelper1 {...{}} />;
}
function KeyboardShortcutsSettingsHelper1() {
  let marble = useIntl(),
    { platform } = useHostPlatformModifierSymbol(),
    nickel = useQueryClient(),
    onyx = CodexPluginActionResult(AppInitialZ7),
    pearl = CodexPluginActionResult(deferredUiXZ),
    quartz = ensureGitRepoWatchAtomsInit(),
    river = NativeContextMenuSurface("1244621283"),
    slate = NativeContextMenuSurface("1372061905"),
    timber = NativeContextMenuSurface("3264431617"),
    umbra = NativeContextMenuSurface("2380644311"),
    violet = NativeContextMenuSurface("4100906017"),
    willow = thinCallWithUndefined(pearl, "switchToMode1") > 0,
    xenon = AppInitialUp(),
    [yellow, zinc] = kite.useState(""),
    [amber, basalt] = kite.useState(false),
    [cedar, daisy] = kite.useState(null),
    ember = {};
  let [flint, garnet] = kite.useState(ember),
    [hazel, ivory] = kite.useState(false),
    [jasper, kelp] = kite.useState(null),
    { data } = CodexPluginActionResult(IsStartingProcessExpired),
    lotus = {
      onSuccess: (acorn, bloom) => {
        let { commandId } = bloom,
          coral = buildVscodeQueryKey("codex-command-keymap-state");
        nickel.setQueryData(coral, acorn);
        let drift = [coral];
        commandId === "hotkeyWindow" && drift.push(toggleSortedIdList);
        (commandId === "globalDictationHold" ||
          commandId === "globalDictationToggle") &&
          drift.push(buildVscodeQueryKey("global-dictation-hotkey-state"));
        Promise.all(drift.map((item) => quartz(item)));
      },
    };
  let mint = applyU0000U001FU007F2("set-codex-command-keybinding", lotus),
    nova = {
      onSuccess: (eagle) => {
        let frost = buildVscodeQueryKey("codex-command-keymap-state");
        nickel.setQueryData(frost, eagle);
        Promise.all(
          [
            frost,
            toggleSortedIdList,
            buildVscodeQueryKey("global-dictation-hotkey-state"),
          ].map((item) => quartz(item)),
        );
      },
    };
  let olive = applyU0000U001FU007F2("reset-codex-command-keybindings", nova),
    prism,
    quill;
  {
    let glide = (jewel) =>
      AppInitialXt(jewel, {
        codexLocalAccessAllowed: onyx,
        modeSwitchAvailable: willow,
        isGlobalDictationEnabled: river,
        isHotkeyWindowEnabled: slate,
        isPriorityFilterEnabled: xenon,
        isProcessManagerEnabled: timber,
        isRealtimeVoiceCommandEnabled: umbra,
        isVoiceInputEnabled: violet,
      });
    let honey;
    honey = (knoll) => ({
      command: knoll,
      title: BrowserWebviewPanel(
        knoll,
        marble,
        ensureKeyboardShortcutsJZInit(pearl, knoll.id),
      ).title,
    });
    quill = lemon.filter(glide).map(honey).sort(copper);
    let iris = yellow.trim();
    prism =
      iris.length === 0
        ? quill
        : quill.filter((item) => {
            let { command, title } = item,
              lunar = BrowserWebviewPanel(
                command,
                marble,
                ensureKeyboardShortcutsJZInit(pearl, command.id),
              ).description;
            return amber
              ? deferredT1(command.id, data, platform).some((_item) => {
                  let { label } = _item;
                  return delta(label, iris);
                })
              : [command.id, title, lunar].some(
                  (_item) => ensureKeyboardShortcutsHMInit(_item, iris) > 0,
                );
          });
  }
  let reef = prism,
    sage =
      data == null ? null : (
        <EnsureKeyboardShortcutsGtInit
          {...{
            autoFocus: amber,
            isSearchingByKeystrokes: amber,
            variant: "page",
            trailingContent: (
              <OptionalTooltip
                {...{
                  tooltipContent: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.keyboardShortcuts.searchByKeystrokes.tooltip",
                        defaultMessage: "Search by keystrokes",
                        description:
                          "Tooltip label for the keyboard shortcut search mode button",
                      }}
                    />
                  ),
                  children: (
                    <ReadLoginRouteQuerySnapshot
                      {...{
                        "aria-label": marble.formatMessage({
                          id: "settings.keyboardShortcuts.searchByKeystrokes.ariaLabel",
                          defaultMessage: "Search by keystrokes",
                          description:
                            "Accessible label for the keyboard shortcut search mode button",
                        }),
                        "aria-pressed": amber,
                        color: amber ? "secondary" : "ghost",
                        size: "toolbar",
                        uniform: true,
                        onMouseDown: bravo,
                        onClick: () => {
                          zinc("");
                          basalt(alpha);
                        },
                        children: (
                          <AppIconOi
                            {...{
                              className: "icon-sm",
                            }}
                          />
                        ),
                      }}
                    />
                  ),
                }}
              />
            ),
            value: yellow,
            onKeyDown: amber
              ? (event) => {
                  if (event.repeat) return;
                  if (
                    (event.preventDefault(),
                    event.stopPropagation(),
                    event.key === "Escape")
                  ) {
                    zinc("");
                    basalt(false);
                    return;
                  }
                  let moss = formatHotkeyLabel(event.nativeEvent);
                  if (moss != null) {
                    let north = moveArrayItem(
                        moss,
                        platform === "macOS",
                        platform === "linux",
                      ),
                      orbit =
                        yellow.length === 0 ? north : `${yellow} ${north}`,
                      pine =
                        yellow.length > 0 &&
                        quill.some((item) => {
                          let { command } = item;
                          return deferredT1(command.id, data, platform).some(
                            (_item) => {
                              let { label } = _item;
                              return delta(label, orbit);
                            },
                          );
                        });
                    zinc(pine ? orbit : north);
                  }
                }
              : undefined,
            onValueChange: zinc,
          }}
        />
      );
  let _e = sage,
    topaz =
      data != null && data.bindings.length > 0 ? (
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "secondary",
            disabled: olive.isPending,
            size: "toolbar",
            onClick: () => {
              kelp(null);
              ivory(true);
            },
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.keyboardShortcuts.resetAll",
                  defaultMessage: "Reset all to defaults",
                  description:
                    "Button label to reset all customized keyboard shortcuts to their defaults",
                }}
              />
            ),
          }}
        />
      ) : null;
  let ultra = <SettingsSectionTitle slug="keyboard-shortcuts" />;
  let vapor =
    data == null ? (
      <AppInitialNi>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.keyboardShortcuts.loading",
              defaultMessage: "Loading shortcuts…",
              description:
                "Loading label while keyboard shortcuts are being fetched",
            }}
          />
        }
      </AppInitialNi>
    ) : (
      <ParseUrlOrFallback
        {...{
          children:
            reef.length === 0 ? (
              <EnsurePersonalizationCInit
                {...{
                  control: null,
                  label: (
                    <span className="font-normal text-token-text-secondary">
                      {
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.keyboardShortcuts.noMatches",
                            defaultMessage: "No matching shortcuts",
                            description:
                              "Empty state shown when the keyboard shortcuts search has no matches",
                          }}
                        />
                      }
                    </span>
                  ),
                }}
              />
            ) : (
              reef.map((item) => {
                let { command, title } = item,
                  quest = BrowserWebviewPanel(
                    command,
                    marble,
                    ensureKeyboardShortcutsJZInit(pearl, command.id),
                  ).description,
                  ridge = flint[command.id],
                  storm = deferredT1(command.id, data, platform),
                  tide =
                    data.bindings.some(
                      (_item) => _item.command === command.id,
                    ) &&
                    (command.id !== "searchChats" || storm.length > 0),
                  unity = harbor({
                    commandId: command.id,
                    hasCustomBinding: tide,
                    platform,
                    shortcutEntries: storm,
                  }),
                  vale =
                    cedar?.commandId === command.id && cedar.mode === "append",
                  wave = storm.length === 0 ? [null] : storm,
                  apex = vale && storm.length > 0 ? [...storm, null] : wave,
                  brook = `keyboard-shortcut-${command.id}-label`;
                return (
                  <EnsurePersonalizationCInit
                    key={command.id}
                    {...{
                      className:
                        "max-sm:flex-col max-sm:items-stretch max-sm:gap-2",
                      control: (
                        <div
                          aria-labelledby={brook}
                          className="flex w-96 max-w-full flex-col max-sm:w-full"
                          role="group"
                        >
                          {apex.map((_item, index) => {
                            let cliff =
                                cedar?.commandId === command.id &&
                                (cedar.mode === "append"
                                  ? _item == null && index === storm.length
                                  : cedar.accelerator ===
                                    (_item?.accelerator ?? null)),
                              dusk = `${brook}-binding-${index}`;
                            return (
                              <HotkeySetter
                                key={`${command.id}-${_item?.accelerator ?? "unassigned"}`}
                                {...{
                                  accelerator: _item?.accelerator ?? null,
                                  acceleratorLabel: _item?.label ?? null,
                                  allowsBareModifiers: AppInitialP1(command),
                                  allowsSequences: command.kind === "webview",
                                  ariaLabelledBy: dusk,
                                  canAppend: !ElectronOnly(command),
                                  captureAriaLabel: marble.formatMessage(
                                    {
                                      id: "settings.keyboardShortcuts.captureAriaLabel",
                                      defaultMessage:
                                        "Shortcut capture for {commandTitle}",
                                      description:
                                        "Aria label for the shortcut capture input for a command",
                                    },
                                    {
                                      commandTitle: title,
                                    },
                                  ),
                                  conflict: cliff
                                    ? cedar.conflictingCommandTitle
                                    : null,
                                  disabled: mint.isPending,
                                  hotkeyName: title,
                                  isCapturing: cliff,
                                  valueLabelId: dusk,
                                  onCancelCapture: () => {
                                    daisy(null);
                                  },
                                  onCapture: (elm) => {
                                    if (
                                      _item != null &&
                                      falcon(
                                        _item.accelerator,
                                        elm,
                                        platform === "macOS",
                                      )
                                    ) {
                                      daisy(null);
                                      return;
                                    }
                                    let fern = echo({
                                      accelerator: elm,
                                      commandId: command.id,
                                      intl: marble,
                                      keymapState: data,
                                      platform,
                                      registeredCommands: pearl,
                                    });
                                    if (fern != null) {
                                      daisy((hill) =>
                                        hill?.commandId === command.id
                                          ? {
                                              ...hill,
                                              conflictingCommandTitle: fern,
                                            }
                                          : hill,
                                      );
                                      return;
                                    }
                                    let grove;
                                    grove =
                                      cedar?.mode === "append"
                                        ? {
                                            type: "append",
                                            accelerator: elm,
                                          }
                                        : _item == null
                                          ? {
                                              type: "set",
                                              accelerator: elm,
                                            }
                                          : {
                                              type: "replace",
                                              previousAccelerator:
                                                _item.accelerator,
                                              accelerator: elm,
                                            };
                                    indigo({
                                      commandId: command.id,
                                      intl: marble,
                                      setCommandKeybinding: mint,
                                      setErrorByCommandId: garnet,
                                      update: grove,
                                    }).finally(() => {
                                      daisy((isle) =>
                                        isle === cedar ? null : isle,
                                      );
                                    });
                                  },
                                  onClear: () => {
                                    _item != null &&
                                      indigo({
                                        commandId: command.id,
                                        intl: marble,
                                        setCommandKeybinding: mint,
                                        setErrorByCommandId: garnet,
                                        update: {
                                          type: "remove",
                                          accelerator: _item.accelerator,
                                        },
                                      });
                                  },
                                  onReset:
                                    index === unity && tide
                                      ? () => {
                                          indigo({
                                            commandId: command.id,
                                            intl: marble,
                                            setCommandKeybinding: mint,
                                            setErrorByCommandId: garnet,
                                            update: {
                                              type: "reset",
                                            },
                                          });
                                        }
                                      : undefined,
                                  onStartCapture: (juniper) => {
                                    garnet((lagoon) => ({
                                      ...lagoon,
                                      [command.id]: undefined,
                                    }));
                                    daisy({
                                      commandId: command.id,
                                      accelerator:
                                        juniper === "append"
                                          ? null
                                          : (_item?.accelerator ?? null),
                                      conflictingCommandTitle: null,
                                      mode: juniper,
                                    });
                                  },
                                }}
                              />
                            );
                          })}
                        </div>
                      ),
                      description:
                        quest !== "" || ridge != null ? (
                          <>
                            {quest}
                            {ridge == null ? null : (
                              <span className="block text-xs text-token-error-foreground">
                                {ridge}
                              </span>
                            )}
                          </>
                        ) : undefined,
                      label: (
                        <span id={brook} className="block truncate">
                          {title}
                        </span>
                      ),
                    }}
                  />
                );
              })
            ),
        }}
      />
    );
  let wheat = (meadow) => {
    ivory(meadow);
    meadow || kelp(null);
  };
  let yarn = async () => {
    kelp(null);
    try {
      await olive.mutateAsync(undefined);
      ivory(false);
    } catch (nest) {
      let oak = nest;
      kelp(
        oak instanceof Error
          ? oak.message
          : marble.formatMessage({
              id: "settings.keyboardShortcuts.resetAllError",
              defaultMessage: "Failed to reset keyboard shortcuts",
              description:
                "Fallback error shown when resetting all customized keyboard shortcuts fails",
            }),
      );
    }
  };
  let zephyr = (
    <KeyboardShortcutsSettingsHelper5
      {...{
        error: jasper,
        isPending: olive.isPending,
        open: hazel,
        onOpenChange: wheat,
        onConfirm: yarn,
      }}
    />
  );
  return (
    <OpenInBrowser
      {...{
        action: topaz,
        stickyControls: _e,
        title: ultra,
        children: [vapor, zephyr],
      }}
    />
  );
}
function alpha(petal) {
  return !petal;
}
function bravo(event) {
  event.preventDefault();
}
function copper(quiet, rain) {
  return WorkspaceImportSettingsSection(quiet.command, rain.command);
}
function KeyboardShortcutsSettingsHelper5(seed) {
  let { error, isPending, onConfirm, onOpenChange, open } = seed,
    trail = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.keyboardShortcuts.resetAllConfirm.title",
          defaultMessage: "Reset all keyboard shortcuts?",
          description:
            "Title for the dialog confirming reset of all customized keyboard shortcuts",
        }}
      />
    );
  let urn = trail,
    vine = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.keyboardShortcuts.resetAllConfirm.description",
          defaultMessage:
            "This will discard all custom shortcuts and restore the defaults",
          description:
            "Warning shown before resetting all customized keyboard shortcuts",
        }}
      />
    );
  let wind = vine,
    yarrow = (event) => {
      event.preventDefault();
      onConfirm();
    };
  let azure, birch;
  azure = (
    <RealtimeVoiceHostId
      {...{
        className: "sr-only",
        children: urn,
      }}
    />
  );
  birch = (
    <IsStartingProcessExpired
      {...{
        className: "sr-only",
        children: wind,
      }}
    />
  );
  let canyon = (
    <DeferredUiU
      {...{
        children: (
          <DeferredUiH
            {...{
              title: urn,
              subtitle: wind,
            }}
          />
        ),
      }}
    />
  );
  let dew =
    error == null ? null : (
      <DeferredUiU
        {...{
          className: "text-token-error-foreground",
          children: error,
        }}
      />
    );
  let ever = () => {
    onOpenChange(false);
  };
  let field = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.keyboardShortcuts.resetAllConfirm.cancel",
        defaultMessage: "Cancel",
        description:
          "Cancel button label for resetting all customized keyboard shortcuts",
      }}
    />
  );
  let grain = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        onClick: ever,
        children: field,
      }}
    />
  );
  let haven = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.keyboardShortcuts.resetAllConfirm.confirm",
        defaultMessage: "Reset all",
        description:
          "Confirmation button label for resetting all customized keyboard shortcuts",
      }}
    />
  );
  let ink = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "danger",
        loading: isPending,
        type: "submit",
        children: haven,
      }}
    />
  );
  let jadeite = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [grain, ink],
            }}
          />
        ),
      }}
    />
  );
  let kernel = (
    <DeferredUiB
      {...{
        as: "form",
        onSubmit: yarrow,
        children: [azure, birch, canyon, dew, jadeite],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open,
        onOpenChange,
        showDialogClose: false,
        size: "compact",
        children: kernel,
      }}
    />
  );
}
function delta(leaf, maple) {
  return leaf === maple || leaf.startsWith(`${maple} `);
}
function echo({
  accelerator,
  commandId,
  intl,
  keymapState,
  platform,
  registeredCommands,
}) {
  let nimbus = useResizeObserver(accelerator, platform);
  switch (nimbus) {
    case "find":
    case "findNext":
    case "findPrevious":
      return intl.formatMessage(
        {
          id: "settings.keyboardShortcuts.fixedFindCommand",
          defaultMessage:
            "{command, select, find {Find} findNext {Find Next} other {Find Previous}}",
          description: "Fixed Find command title shown for a shortcut conflict",
        },
        {
          command: nimbus,
        },
      );
    case null:
      break;
  }
  for (let opal of lemon)
    if (
      opal.id !== commandId &&
      !SortableContext(opal.id, commandId) &&
      deferredT1(opal.id, keymapState, platform).some((item) =>
        gamma(item.accelerator, accelerator, platform === "macOS"),
      )
    )
      return BrowserWebviewPanel(
        opal,
        intl,
        ensureKeyboardShortcutsJZInit(registeredCommands, opal.id),
      ).title;
  return null;
}
function falcon(plume, quillow, root) {
  return moveArrayItem(plume, root) === moveArrayItem(quillow, root);
}
function gamma(silk, thorn, upland) {
  let vista = DEFAULT_MOTION_TRANSITION(silk).map((item) =>
      moveArrayItem(item, upland),
    ),
    wisp = DEFAULT_MOTION_TRANSITION(thorn).map((item) =>
      moveArrayItem(item, upland),
    ),
    yonder = Math.min(vista.length, wisp.length);
  return (
    yonder > 0 &&
    (vista.length === yonder || wisp.length === yonder) &&
    vista.slice(0, yonder).every((item, index) => item === wisp[index])
  );
}
function harbor({ commandId, hasCustomBinding, platform, shortcutEntries }) {
  if (!hasCustomBinding) return null;
  let zenith = AppInitialM1({
      commandId,
      isMacOS: platform === "macOS",
    }),
    anvil = shortcutEntries.findIndex(
      (item, index) => item.accelerator !== zenith[index],
    );
  return anvil === -1 ? 0 : anvil;
}
async function indigo({
  commandId,
  intl,
  setCommandKeybinding,
  setErrorByCommandId,
  update,
}) {
  setErrorByCommandId((beacon) => ({
    ...beacon,
    [commandId]: undefined,
  }));
  try {
    await setCommandKeybinding.mutateAsync({
      commandId,
      update,
    });
  } catch (crag) {
    setErrorByCommandId((dome) => ({
      ...dome,
      [commandId]:
        crag instanceof Error
          ? crag.message
          : intl.formatMessage({
              id: "settings.keyboardShortcuts.updateError",
              defaultMessage: "Failed to update shortcut",
              description:
                "Fallback error shown when updating an action shortcut fails",
            }),
    }));
  }
}
var jade, kite, $, lemon;
esmInit(() => {
  jade = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  sortable();
  ensureComposerEsm_MT_Init();
  kite = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_B7_Init();
  codexProjectKey();
  normalizePresenceToNormal();
  AppInitialUr();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Hlt_Init();
  deferredVM();
  macOS4();
  usePlatformAwareFeatureGate();
  AppInitialKi();
  ensureContextMenuProviderInit();
  ensureWebviewMicroCommandsClusterInit();
  AppInitialJt();
  AppInitialKt();
  EASE_OUT_EXPO();
  deferredHostsS3();
  ensureHotkeySetterInit();
  AppIconOi();
  ensureHotkeySetterHelpersInit();
  useGateEnabledWithAccountData();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  AppInitialHp();
  ensureSkillsPageHelpersInit();
  scrollAppActionTargetTo();
  lemon = ensureHotkeyThreadB1Init.filter(
    (item) => AppInitial1(item) && item.id !== "findInThread",
  );
})();
