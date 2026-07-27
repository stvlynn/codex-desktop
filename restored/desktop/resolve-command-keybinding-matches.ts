// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `oEr`) / export `t1`.

export type ResolveCommandKeybindingMatchesPeers = {
  buildKeymapQuery: (input: {
    commandId: unknown;
    keymapState: unknown;
    isMacOS: boolean;
  }) => unknown;
  resolveAccelerators: (
    commandId: unknown,
    query: unknown,
    platform: unknown,
  ) => string[];
  formatAcceleratorLabel: (
    accelerator: string,
    isMacOS: boolean,
    isLinux: boolean,
  ) => string;
};

let peers: ResolveCommandKeybindingMatchesPeers | null = null;

/** Wire command keybinding match peers once companions land. */
export function setResolveCommandKeybindingMatchesPeers(
  next: ResolveCommandKeybindingMatchesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `t1` / internal `oEr`.
 * Resolve accelerator + label pairs for a command keybinding.
 */
export function resolveCommandKeybindingMatches(
  commandId: unknown,
  keymapState: unknown,
  platform: string,
): Array<{ accelerator: string; label: string }> {
  if (peers == null) {
    throw new Error("ResolveCommandKeybindingMatches peers are not configured");
  }
  const isMacOS = platform === "macOS";
  const isLinux = platform === "linux";
  const query = peers.buildKeymapQuery({
    commandId,
    keymapState,
    isMacOS,
  });
  return peers
    .resolveAccelerators(commandId, query, platform)
    .map((accelerator) => ({
      accelerator,
      label: peers!.formatAcceleratorLabel(accelerator, isMacOS, isLinux),
    }));
}
