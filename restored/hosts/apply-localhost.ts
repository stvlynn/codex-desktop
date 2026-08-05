// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ive`) / export `Oht`.

export type ApplyLocalhostPeers = {
  Tpe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eve: (...args: unknown[]) => unknown;
  nve: (...args: unknown[]) => unknown;
  p_e: (...args: unknown[]) => unknown;
  rve: (...args: unknown[]) => unknown;
  tve: (...args: unknown[]) => unknown;
};

let peers: ApplyLocalhostPeers | null = null;

/** Wire applyLocalhost peers once companions land. */
export function setApplyLocalhostPeers(next: ApplyLocalhostPeers): void {
  peers = next;
}

/**
 * Bundle export `Oht` / internal `ive`.
 */
export function applyLocalhost() {
  if (peers == null) {
    throw new Error("applyLocalhost peers are not configured");
  }

  return peers.e(() => {
    (peers.Tpe(),
      peers.p_e(),
      (eve = /\.html?$/i),
      (tve = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `[::1]`, `::1`])),
      (nve = new Set([`mailto:`, `sms:`, `tel:`])),
      (rve = new Set([`file`, `vscode-remote`])));
  });
}
