// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `FNo`) / export `UO`.

export type UseIsVoiceRecordingSupportedPeers = {
  useHostAuth: (
    hostId: unknown,
  ) => { isLoading?: boolean; authMethod?: string } | null | undefined;
  useGate: (gateId: string) => boolean;
  useIsUnsupportedPlatform: () => boolean;
  isVoiceRecordingBlocked: () => boolean;
};

let peers: UseIsVoiceRecordingSupportedPeers | null = null;

/** Wire voice-recording support peers once companions land. */
export function setUseIsVoiceRecordingSupportedPeers(
  next: UseIsVoiceRecordingSupportedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UO` / internal `FNo`.
 * Whether MediaRecorder + getUserMedia voice recording is supported.
 */
export function useIsVoiceRecordingSupported(hostId: unknown): boolean | null {
  if (peers == null) {
    throw new Error("UseIsVoiceRecordingSupported peers are not configured");
  }
  const auth = peers.useHostAuth(hostId);
  const gated = peers.useGate("4100906017");
  const unsupportedPlatform = peers.useIsUnsupportedPlatform();
  if (
    peers.isVoiceRecordingBlocked() ||
    !navigator?.mediaDevices?.getUserMedia ||
    typeof MediaRecorder === "undefined"
  ) {
    return false;
  }
  if (auth == null || auth.isLoading || unsupportedPlatform) return null;
  return gated && auth.authMethod === "chatgpt";
}
