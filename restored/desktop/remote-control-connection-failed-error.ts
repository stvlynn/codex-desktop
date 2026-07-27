// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `P6n` / `pxu` / `gxu` / export `I` (`mxu`).

export const REMOTE_CONTROL_TOKEN_INVALIDATED = "token_invalidated";

export class RemoteControlConnectionFailedError extends Error {
  constructor() {
    super("Remote control failed to connect");
    this.name = "RemoteControlConnectionFailedError";
  }
}

/** True when error message mentions token invalidation. */
export function isRemoteControlTokenInvalidatedError(error: unknown): boolean {
  return (
    error instanceof Error &&
    error.message.includes(REMOTE_CONTROL_TOKEN_INVALIDATED)
  );
}

/** True when error is a remote-control connection failure. */
export function isRemoteControlConnectionFailedError(error: unknown): boolean {
  return (
    isRemoteControlTokenInvalidatedError(error) ||
    error instanceof RemoteControlConnectionFailedError
  );
}
