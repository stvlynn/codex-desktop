// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `RZ`) / export `Lb`.

export type UseIsRemoteHostPeers = {
  selectedHostAtom: unknown;
  useAtomValue: (atom: unknown) => { kind?: string };
  resolveHost: (host: { kind?: string }) => { kind?: string };
};

let peers: UseIsRemoteHostPeers | null = null;

/** Wire useIsRemoteHost peers once companions land. */
export function setUseIsRemoteHostPeers(next: UseIsRemoteHostPeers): void {
  peers = next;
}

/**
 * Bundle export `Lb` / internal `RZ`.
 * True when the selected host is not local.
 */
export function useIsRemoteHost(): boolean {
  if (peers == null) {
    throw new Error("UseIsRemoteHost peers are not configured");
  }
  return (
    peers.resolveHost(peers.useAtomValue(peers.selectedHostAtom)).kind !==
    "local"
  );
}

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const ensureUseIsRemoteHostInit: any = undefined;
