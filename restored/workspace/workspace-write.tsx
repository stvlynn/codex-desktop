// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bun`) / export `D7`.

export type BindBindWorkspaceWritePeers = {
  Fh: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _un: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vun: (...args: unknown[]) => unknown;
  yun: (...args: unknown[]) => unknown;
};

let peers: BindBindWorkspaceWritePeers | null = null;

/** Wire bindBindWorkspaceWrite peers once companions land. */
export function setBindBindWorkspaceWritePeers(
  next: BindBindWorkspaceWritePeers,
): void {
  peers = next;
}

/**
 * Bundle export `D7` / internal `bun`.
 */
export function bindBindWorkspaceWrite() {
  if (peers == null) {
    throw new Error("bindBindWorkspaceWrite peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.Fh(),
      (_un = `1574672957`),
      (vun = peers
        .X()
        .trim()
        .transform((e) => peers.e || void 0)
        .optional()),
      (yun = peers.sl({
        desktop_context_section: peers.vun,
        workspace_dependencies_section: peers.vun,
      })));
  });
}
