// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `VTr`) / export `m1`.

export type GetDefaultKeybindingKeysForCommandPeers = {
  resolveCommand: (commandId: unknown) => unknown;
  isKeybindableCommand: (command: unknown) => boolean;
  getKeybindingSpec: (command: unknown) => {
    platformDefaultKeybindings?: {
      macOS?: Array<{ key: string }>;
      default?: Array<{ key: string }>;
    };
    defaultKeybindings?: Array<{ key: string }> | null;
  } | null;
};

let peers: GetDefaultKeybindingKeysForCommandPeers | null = null;

/** Wire getDefaultKeybindingKeysForCommand peers once companions land. */
export function setGetDefaultKeybindingKeysForCommandPeers(
  next: GetDefaultKeybindingKeysForCommandPeers,
): void {
  peers = next;
}

/**
 * Bundle export `m1` / internal `VTr`.
 * Return default keybinding keys for a command id / platform.
 */
export function getDefaultKeybindingKeysForCommand(args: {
  commandId: unknown;
  isMacOS?: boolean;
}): string[] {
  if (peers == null) {
    throw new Error(
      "GetDefaultKeybindingKeysForCommand peers are not configured",
    );
  }
  const command = peers.resolveCommand(args.commandId);
  if (command == null || !peers.isKeybindableCommand(command)) return [];
  const spec = peers.getKeybindingSpec(command);
  if (spec == null) return [];
  if (args.isMacOS === true && spec.platformDefaultKeybindings?.macOS != null) {
    return spec.platformDefaultKeybindings.macOS.map((entry) => entry.key);
  }
  if (
    args.isMacOS === false &&
    spec.platformDefaultKeybindings?.default != null
  ) {
    return spec.platformDefaultKeybindings.default.map((entry) => entry.key);
  }
  if (spec.defaultKeybindings == null) return [];
  return spec.defaultKeybindings.map((entry) => entry.key);
}
