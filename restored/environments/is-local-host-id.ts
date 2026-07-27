// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `X2` / export `Gd`; companion `H_`.

const LOCAL_HOST_ID = "local";

type HostConfigSnapshot = { id?: string; kind?: string } | null;

/** True when `hostId` refers to the local desktop host. */
export function isLocalHostId(hostId: string): boolean {
  if (typeof window === "undefined") return hostId === LOCAL_HOST_ID;
  const snapshot =
    (
      window as unknown as {
        electronBridge?: {
          getSharedObjectSnapshotValue?: (key: string) => HostConfigSnapshot;
        };
      }
    ).electronBridge?.getSharedObjectSnapshotValue?.("host_config") ?? null;
  return snapshot == null
    ? hostId === LOCAL_HOST_ID
    : snapshot.id === hostId && snapshot.kind === "local";
}
