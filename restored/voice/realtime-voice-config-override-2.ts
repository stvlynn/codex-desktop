// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H7n`) / export `S4`.

export type BindRealtimeVoiceConfigOverridePeers = {
  B7n: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I7n: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  L7n: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R7n: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  V7n: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  al: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
  z7n: (...args: unknown[]) => unknown;
};

let peers: BindRealtimeVoiceConfigOverridePeers | null = null;

/** Wire bindRealtimeVoiceConfigOverride peers once companions land. */
export function setBindRealtimeVoiceConfigOverridePeers(next: BindRealtimeVoiceConfigOverridePeers): void {
  peers = next;
}

/**
 * Bundle export `S4` / internal `H7n`.
 */
export function bindRealtimeVoiceConfigOverride() {
  if (peers == null) {
    throw new Error("bindRealtimeVoiceConfigOverride peers are not configured");
  }

  return peers.e(() => {
    ((I7n = peers.c()),
      peers.Ho(),
      peers.Sl(),
      peers.ed(),
      peers.Fh(),
      peers.od(),
      peers.Im(),
      peers.Uf(),
      peers.ap(),
      (L7n = `realtime-voice-config-override`),
      (R7n = {
        enabled: !1,
        config: ``,
      }),
      (z7n = peers.Pm(peers.L7n, peers.R7n)),
      (B7n = peers.fl(peers.X(), peers.al())),
      (V7n = peers.ep(peers.Q, `is-packaged`, {
        enabled: !1,
        staleTime: peers.Hf.FIVE_SECONDS,
      })));
  });
}
