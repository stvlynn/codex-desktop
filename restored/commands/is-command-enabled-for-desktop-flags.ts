// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Odu` / export `Xt`.

import {
  isDesktopCommandIdEnabled,
  type DesktopCommandCapabilityFlags,
} from "./is-desktop-command-id-enabled";

type CommandAvailability = {
  id: string;
  requiresCodexLocalAccess?: boolean;
};

type DesktopAccessFlags = DesktopCommandCapabilityFlags & {
  codexLocalAccessAllowed: boolean;
};

/** False when local access is required but denied; else capability gate. */
export function isCommandEnabledForDesktopFlags(command: CommandAvailability, flags: DesktopAccessFlags): boolean {
  if (
    command.requiresCodexLocalAccess === true &&
    !flags.codexLocalAccessAllowed
  ) {
    return false;
  }
  return isDesktopCommandIdEnabled(command.id, flags);
}
