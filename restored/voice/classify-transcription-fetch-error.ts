// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vit`) / export `Tct`.

export type ClassifyTranscriptionFetchErrorPeers = {
  DOMException: (...args: unknown[]) => unknown;
  Rit: (...args: unknown[]) => unknown;
  Xf: (...args: unknown[]) => unknown;
  Yh: (...args: unknown[]) => unknown;
};

let peers: ClassifyTranscriptionFetchErrorPeers | null = null;

/** Wire classifyTranscriptionFetchError peers once companions land. */
export function setClassifyTranscriptionFetchErrorPeers(next: ClassifyTranscriptionFetchErrorPeers): void {
  peers = next;
}

/**
 * Bundle export `Tct` / internal `Vit`.
 */
export function classifyTranscriptionFetchError(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("classifyTranscriptionFetchError peers are not configured");
  }

  if (t === `transcription`) {
    if (n instanceof peers.Xf) {
      if (n.status === 429) {
        let e = peers.Rit(n);
        if (e != null)
          return {
            message: e.message,
            canRetry: !1,
          };
      }
      let t = n.message.toLowerCase();
      if (
        n.status === 0 ||
        t.includes(`fetch failed`) ||
        t.includes(`failed to fetch`) ||
        t.includes(`network`)
      )
        return {
          message: e.formatMessage(peers.Yh.connectionError),
          canRetry: !0,
        };
    }
    return {
      message: e.formatMessage(peers.Yh.transcribeError),
      canRetry: !0,
    };
  }
  let r = null;
  return (
    n instanceof Error && (r = n.name),
    typeof peers.DOMException < `u` &&
      n instanceof peers.DOMException &&
      (r = n.name),
    r === `NotAllowedError` || r === `SecurityError`
      ? {
          message: e.formatMessage(peers.Yh.microphonePermissionDenied),
          canRetry: !1,
        }
      : r === `NotFoundError` ||
          r === `DevicesNotFoundError` ||
          r === `OverconstrainedError` ||
          r === `ConstraintNotSatisfiedError`
        ? {
            message: e.formatMessage(peers.Yh.microphoneMissing),
            canRetry: !1,
          }
        : r === `NotReadableError` || r === `TrackStartError`
          ? {
              message: e.formatMessage(peers.Yh.microphoneUnavailable),
              canRetry: !1,
            }
          : r === `NotSupportedError` || r === `TypeError`
            ? {
                message: e.formatMessage(peers.Yh.unsupported),
                canRetry: !1,
              }
            : {
                message: e.formatMessage(peers.Yh.startError),
                canRetry: !1,
              }
  );
}
