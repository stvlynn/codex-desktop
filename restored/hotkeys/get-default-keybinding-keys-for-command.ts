// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VTr`) / export `m1`.

export type GetDefaultKeybindingKeysForCommandPeers = {
  ATr: (...args: unknown[]) => unknown;
  FTr: (...args: unknown[]) => unknown;
  UTr: (...args: unknown[]) => unknown;
  default: (...args: unknown[]) => unknown;
  macOS: (...args: unknown[]) => unknown;
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
 */
export function getDefaultKeybindingKeysForCommand({
  commandId,
  isMacOS,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "getDefaultKeybindingKeysForCommand peers are not configured",
    );
  }
  let n = peers.ATr(commandId);
  if (n == null || !peers.FTr(n)) return [];
  let r = peers.UTr(n);
  return r == null
    ? []
    : isMacOS === true && r.platformDefaultKeybindings?.macOS != null
      ? r.platformDefaultKeybindings.macOS.map((item) => {
          return item.key;
        })
      : isMacOS === false && r.platformDefaultKeybindings?.default != null
        ? r.platformDefaultKeybindings.default.map((item) => {
            return item.key;
          })
        : r.defaultKeybindings == null
          ? []
          : r.defaultKeybindings.map((item) => {
              return item.key;
            });
}
