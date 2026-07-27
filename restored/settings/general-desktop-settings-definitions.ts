// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cu` / export `Dpt` — general desktop / composer / terminal settings bag.

import {
  createConfigurationSetting,
  createGlobalStateSetting,
  createPersistedAtomSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

export const generalDesktopSettingsDefinitions = {
  dictationDictionary: createConfigurationSetting<unknown[]>({
    agentAccess: "read-write",
    default: [],
    description: "Custom dictation dictionary entries",
    key: "dictationDictionary",
  }),
  microphoneInputDeviceId: createConfigurationSetting<string | null>({
    agentAccess: "hidden",
    default: null,
    description: "Preferred microphone input device id",
    key: "microphoneInputDeviceId",
  }),
  followUpQueueMode: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: "steer",
    description: "How follow-up prompts are queued while a turn is running",
    key: "followUpQueueMode",
  }),
  composerEnterBehavior: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: "enter",
    description: "Enter-key behavior in the composer",
    key: "composerEnterBehavior",
  }),
  showContextWindowUsage: createPersistedAtomSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Whether context-window usage is shown",
    key: "show-context-window-usage",
  }),
  reviewDelivery: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: "inline",
    description: "How code review results are delivered",
    key: "reviewDelivery",
  }),
  localeOverride: createConfigurationSetting<string | null>({
    agentAccess: "read-write",
    default: null,
    description: "Override locale for the desktop app",
    key: "localeOverride",
  }),
  preventSleepWhileRunning: createConfigurationSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Prevent system sleep while Codex is running",
    key: "preventSleepWhileRunning",
  }),
  keepRemoteControlAwakeWhilePluggedIn: createConfigurationSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Keep remote control awake while plugged in",
    key: "keepRemoteControlAwakeWhilePluggedIn",
  }),
  integratedTerminalShell: createConfigurationSetting<string | undefined>({
    agentAccess: "read-write",
    default: undefined,
    description: "Preferred integrated terminal shell",
    key: "integratedTerminalShell",
  }),
  defaultTerminalLocation: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: "bottom",
    description: "Default integrated terminal dock location",
    key: "defaultTerminalLocation",
  }),
  runCodexInWsl: createConfigurationSetting<boolean>({
    agentAccess: "hidden",
    default: false,
    description: "Run Codex in Windows Subsystem for Linux",
    key: "runCodexInWindowsSubsystemForLinux",
  }),
  hotkeyWindowProjectlessDefaultEnabled: createGlobalStateSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Whether hotkey window defaults to projectless mode",
    key: DesktopPersistenceKeys.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED,
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
