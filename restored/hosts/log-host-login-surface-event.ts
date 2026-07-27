// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `yql`) / export `Fa`.

export type LogHostLoginSurfaceEventPeers = {
  formatMessage: (key: unknown, values?: Record<string, unknown>) => string;
  messageForState: (state: string, error: unknown) => unknown;
  track: (event: string, payload: Record<string, unknown>) => void;
  logError: (error: unknown, context: Record<string, unknown>) => void;
};

let peers: LogHostLoginSurfaceEventPeers | null = null;

/** Wire logHostLoginSurfaceEvent peers once companions land. */
export function setLogHostLoginSurfaceEventPeers(
  next: LogHostLoginSurfaceEventPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fa` / internal `yql`.
 * Emit analytics for host login surface state transitions.
 */
export function logHostLoginSurfaceEvent(
  intl: {
    formatMessage: (key: unknown, values?: Record<string, unknown>) => string;
  },
  args: {
    canLogin: boolean;
    error?: unknown;
    hostKind: unknown;
    state: string;
    surface: unknown;
  },
): void {
  if (peers == null) {
    throw new Error("LogHostLoginSurfaceEvent peers are not configured");
  }
  const message = intl.formatMessage(
    peers.messageForState(args.state, args.error),
  );
  if (args.state === "error" && args.error != null) {
    peers.logError(args.error, {
      hostKind: args.hostKind,
      surface: args.surface,
      message,
    });
  }
  peers.track("host_login_surface", {
    canLogin: args.canLogin,
    hostKind: args.hostKind,
    state: args.state,
    surface: args.surface,
    message,
  });
}
