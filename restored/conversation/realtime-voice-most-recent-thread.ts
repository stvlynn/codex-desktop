// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UE`) / export `m4`.

export type BindRealtimeVoiceMostRecentThreadPeers = {
  Aer: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Der: (...args: unknown[]) => unknown;
  Eer: (...args: unknown[]) => unknown;
  Eu: (...args: unknown[]) => unknown;
  HE: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I_: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Mer: (...args: unknown[]) => unknown;
  Ner: (...args: unknown[]) => unknown;
  Oer: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Pot: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  VE: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  aD: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ger: (...args: unknown[]) => unknown;
  jer: (...args: unknown[]) => unknown;
  ker: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
  per: (...args: unknown[]) => unknown;
  qEe: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  version: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
};

let peers: BindRealtimeVoiceMostRecentThreadPeers | null = null;

/** Wire bindRealtimeVoiceMostRecentThread peers once companions land. */
export function setBindRealtimeVoiceMostRecentThreadPeers(
  next: BindRealtimeVoiceMostRecentThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `m4` / internal `UE`.
 */
export function bindRealtimeVoiceMostRecentThread() {
  if (peers == null) {
    throw new Error(
      "bindRealtimeVoiceMostRecentThread peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.Eu(),
      peers.Sl(),
      peers.DD(),
      peers.Pot(),
      peers.ed(),
      peers.wp(),
      peers.od(),
      peers.Im(),
      peers.I_(),
      peers.VE(),
      (Der = [`[STATUS]`, `[ATTENTION]`, `[COMPLETE]`]),
      (Oer = peers.qEe()),
      (ker = peers.sl({
        conversationId: peers.X().transform(peers.kl),
        hostId: peers.X(),
        version: peers.rl().int().nonnegative(),
      })),
      (Aer = `realtime-voice-most-recent-thread`),
      (HE = peers.Pm(peers.Aer, null)),
      (jer = peers.Ta(peers.Q, null)),
      (Mer = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.Eer(peers.e(peers.HE)),
          n = peers.e(peers.ger);
        return n != null &&
          t?.version ===
            peers.per(n, peers.xp(peers.e, peers.Oer.screenContextEnabled))
          ? t.locator
          : null;
      })),
      (Ner = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.e(peers.Mer);
        return t == null ||
          !peers.e(peers.aD, t.hostId).includes(t.conversationId)
          ? null
          : t;
      })));
  });
}
