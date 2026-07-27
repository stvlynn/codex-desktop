// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bit`) / export `Oct`.

export type Transcription2Peers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ul: (...args: unknown[]) => unknown;
  zit: (...args: unknown[]) => unknown;
};

let peers: Transcription2Peers | null = null;

/** Wire transcription2 peers once companions land. */
export function setTranscription2Peers(next: Transcription2Peers): void {
  peers = next;
}

/**
 * Bundle export `Oct` / internal `Bit`.
 */
export function transcription2() {
  if (peers == null) {
    throw new Error("transcription2 peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), zit = peers.sl({
      detail: peers.ul([peers.X().transform(e => ({
        type: null,
        message: peers.e
      })), peers.sl({
        type: peers.X(),
        message: peers.X()
      }), peers.sl({
        error_code: peers.X().optional(),
        message: peers.X(),
        type: peers.X().optional()
      }).transform(({
        error_code: e,
        message: t,
        type: n
      }) => ({
        type: n ?? peers.e ?? null,
        message: t
      }))])
    });
  });
}
