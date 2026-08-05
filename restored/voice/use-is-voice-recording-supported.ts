// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FNo`) / export `UO`.

export type UseIsVoiceRecordingSupportedPeers = {
  INo: (...args: unknown[]) => unknown;
  MediaRecorder: (...args: unknown[]) => unknown;
  Oh: (...args: unknown[]) => unknown;
  bM: (...args: unknown[]) => unknown;
  getUserMedia: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  mediaDevices: (...args: unknown[]) => unknown;
  navigator: (...args: unknown[]) => unknown;
};

let peers: UseIsVoiceRecordingSupportedPeers | null = null;

/** Wire useIsVoiceRecordingSupported peers once companions land. */
export function setUseIsVoiceRecordingSupportedPeers(
  next: UseIsVoiceRecordingSupportedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UO` / internal `FNo`.
 */
export function useIsVoiceRecordingSupported(e: unknown) {
  if (peers == null) {
    throw new Error("useIsVoiceRecordingSupported peers are not configured");
  }

  let t = peers.bM(e),
    n = peers.kh(`4100906017`),
    r = peers.Oh();
  return !peers.INo() ||
    !peers.navigator?.mediaDevices?.getUserMedia ||
    typeof peers.MediaRecorder > `u`
    ? !1
    : t == null || t.isLoading || r
      ? null
      : n && t.authMethod === `chatgpt`;
}
