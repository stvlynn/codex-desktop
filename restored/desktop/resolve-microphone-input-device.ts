// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `trt`) / export `qct`.

export type ResolveMicrophoneInputDevicePeers = {
  microphoneInputDeviceIdKey: unknown;
  readDesktopSetting: (key: unknown) => Promise<unknown>;
  resolveDevice: (deviceId: unknown, options: unknown) => unknown;
};

let peers: ResolveMicrophoneInputDevicePeers | null = null;

/** Wire microphone device resolution peers once companions land. */
export function setResolveMicrophoneInputDevicePeers(
  next: ResolveMicrophoneInputDevicePeers,
): void {
  peers = next;
}

/**
 * Bundle export `qct` / internal `trt`.
 * Resolve the configured microphone input device.
 */
export async function resolveMicrophoneInputDevice(
  options: Record<string, unknown> = {},
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ResolveMicrophoneInputDevice peers are not configured");
  }
  const deviceId = await peers.readDesktopSetting(
    peers.microphoneInputDeviceIdKey,
  );
  return peers.resolveDevice(deviceId, options);
}
