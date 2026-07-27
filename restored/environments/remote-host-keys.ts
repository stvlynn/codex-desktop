// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uxe`/`dxe`/`fxe`/`gxe`/`_xe`/`ru` — exports Pmt/Fmt/Imt/zmt/Bmt/Rmt.
// Uses already-mapped `Nmt` REMOTE_CONTROL_ID = "remote-control".

import { REMOTE_CONTROL_ID } from "../config/remote-control-id";

/** `uxe` / `Pmt` */
export function remoteSshCodexManagedHostKey(hostId: string): string {
  return `remote-ssh-codex-managed:${encodeURIComponent(hostId)}`;
}

/** `dxe` / `Fmt` */
export function remoteSshDiscoveredHostKey(hostId: string): string {
  return `remote-ssh-discovered:${encodeURIComponent(hostId)}`;
}

/** `fxe` / `Imt` */
export function remoteControlHostKey(hostId: string): string {
  return `remote-control:${encodeURIComponent(hostId)}`;
}

/** `gxe` / `zmt` */
export function isManagedOrDiscoveredSshSource(host: {
  source?: string;
}): boolean {
  return host.source === "codex-managed" || host.source === "discovered";
}

/** `_xe` / `Bmt` */
export function isWslHostSource(host: { source?: string }): boolean {
  return host.source === "wsl";
}

/** `ru` / `Rmt` — ssh | wsl | remote-control environment host. */
export function isRemoteEnvironmentHost(
  host:
    | {
        kind?: string;
      }
    | null
    | undefined,
): boolean {
  return (
    host?.kind === "ssh" ||
    host?.kind === "wsl" ||
    host?.kind === REMOTE_CONTROL_ID
  );
}
