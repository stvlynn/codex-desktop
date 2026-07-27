// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hg`) / export `Vst`.

export type VstPeers = {
  Got: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: VstPeers | null = null;

/** Wire vst peers once companions land. */
export function setVstPeers(next: VstPeers): void {
  peers = next;
}

/**
 * Bundle export `Vst` / internal `hg`.
 */
export function vst() {
  if (peers == null) {
    throw new Error("vst peers are not configured");
  }

  return peers.e(() => {
    peers.Got();
  });
}
