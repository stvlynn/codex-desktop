// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ddu` companion for export `Xt`.

import { isVoiceModeActionId } from "../composer/is-voice-mode-action-id";

export type DesktopCommandCapabilityFlags = {
  modeSwitchAvailable: boolean;
  isGlobalDictationEnabled: boolean;
  isHotkeyWindowEnabled: boolean;
  isPriorityFilterEnabled: boolean;
  isProcessManagerEnabled: boolean;
  isRealtimeVoiceCommandEnabled: boolean;
  isVoiceInputEnabled: boolean;
};

/** Gate a command id against desktop capability flags. */
export function isDesktopCommandIdEnabled(
  commandId: string,
  flags: DesktopCommandCapabilityFlags,
): boolean {
  if (commandId === "hotkeyWindow") return flags.isHotkeyWindowEnabled;
  if (commandId === "switchToMode1" || commandId === "switchToMode2") {
    return flags.modeSwitchAvailable;
  }
  if (commandId === "openProcessManager") return flags.isProcessManagerEnabled;
  if (commandId === "togglePriorityFilter") {
    return flags.isPriorityFilterEnabled;
  }
  if (isVoiceModeActionId(commandId)) {
    return flags.isRealtimeVoiceCommandEnabled;
  }
  if (
    commandId === "globalDictationHold" ||
    commandId === "globalDictationToggle"
  ) {
    return flags.isGlobalDictationEnabled && flags.isVoiceInputEnabled;
  }
  return true;
}
