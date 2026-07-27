// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `trt`) / export `qct`.

export type ResolveMicrophoneInputDevicePeers = {
  Cu: (...args: unknown[]) => unknown;
  NQe: (...args: unknown[]) => unknown;
  irt: (...args: unknown[]) => unknown;
};
let peers: ResolveMicrophoneInputDevicePeers | null = null;

/** Wire resolveMicrophoneInputDevice peers once companions land. */
export function setResolveMicrophoneInputDevicePeers(
  next: ResolveMicrophoneInputDevicePeers,
): void {
  peers = next;
}

/**
 * Bundle export `qct` / internal `trt`.
 */
export async function resolveMicrophoneInputDevice(e: unknown = {}) {
  if (peers == null) {
    throw new Error("resolveMicrophoneInputDevice peers are not configured");
  }
  return peers.irt(await peers.NQe(peers.Cu.microphoneInputDeviceId), e);
}
