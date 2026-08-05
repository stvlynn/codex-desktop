// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g5s`) / export `vm`.

export type LocalEnvironmentsCreatePeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f5s: (...args: unknown[]) => unknown;
  h5s: (...args: unknown[]) => unknown;
  m5s: (...args: unknown[]) => unknown;
  p5s: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: LocalEnvironmentsCreatePeers | null = null;

/** Wire localEnvironmentsCreate peers once companions land. */
export function setLocalEnvironmentsCreatePeers(
  next: LocalEnvironmentsCreatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `vm` / internal `g5s`.
 */
export function localEnvironmentsCreate() {
  if (peers == null) {
    throw new Error("localEnvironmentsCreate peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (f5s = `local-environments/create`),
      (p5s = `/settings/${peers.f5s}`),
      (m5s = peers.sl({
        hostId: peers.X().min(1),
        reopenStableWorktreeId: peers.X().min(1).optional(),
        returnTo: peers
          .X()
          .startsWith(`/`)
          .refine((e) => !peers.e.startsWith(`//`)),
      })),
      (h5s = peers.sl({
        configPath: peers.X().min(1).nullable(),
        workspaceRoot: peers.X().min(1),
      })));
  });
}
