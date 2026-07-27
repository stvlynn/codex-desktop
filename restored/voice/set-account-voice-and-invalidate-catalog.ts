// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hns`) / export `HC`.

export type HCPeers = {
  Ins: (...args: unknown[]) => unknown;
  MV: (...args: unknown[]) => unknown;
  U8n: (...args: unknown[]) => unknown;
};

let peers: HCPeers | null = null;

/** Wire HC peers once companions land. */
export function setHCPeers(next: HCPeers): void {
  peers = next;
}

/**
 * Bundle export `HC` / internal `Hns`.
 */
async function HC(e, t) {
  if (peers == null) {
    throw new Error("HC peers are not configured");
  }

  await e.get(peers.MV).setAccountVoice(peers.Ins(t)), await peers.U8n(e.queryClient, [`realtime-voice-catalog`]);
}
