// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `qAs`) / export `bv`.

export type UseEnabledSymbolKeyPeers = {
  useState: <T>(init: T) => [T, (next: T | ((prev: T) => T)) => void];
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
};

let peers: UseEnabledSymbolKeyPeers | null = null;

/** Wire useEnabledSymbolKey peers once companions land. */
export function setUseEnabledSymbolKeyPeers(
  next: UseEnabledSymbolKeyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bv` / internal `qAs`.
 * Stable Symbol key that resets when an enabled flag flips.
 */
export function useEnabledSymbolKey(
  key: string | undefined,
  options?: { enabled?: boolean },
): symbol {
  if (peers == null) {
    throw new Error("UseEnabledSymbolKey peers are not configured");
  }
  const enabled = options?.enabled ?? true;
  const symbolKey = enabled ? key : undefined;
  const stable = Symbol(symbolKey);
  const [version, setVersion] = peers.useState<number | null>(null);
  peers.useEffect(() => {
    if (!key || !enabled) return;
    setVersion((prev) => (prev == null ? 0 : prev + 1));
  }, [key, enabled, stable]);
  void version;
  return stable;
}
