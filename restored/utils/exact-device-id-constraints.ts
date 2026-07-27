// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ert` — pure helper.

/** Merge `deviceId: { exact }` into media constraint bags. */
export function exactDeviceIdConstraints<T extends Record<string, unknown>>(
  deviceId: string | null | undefined,
  base: T = {} as T,
): T | (T & { deviceId: { exact: string } }) {
  return deviceId == null ? base : { ...base, deviceId: { exact: deviceId } };
}
