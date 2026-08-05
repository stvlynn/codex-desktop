// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bxe`) / export `jmt`.

export type BindEnvironmentTomlPeers = {
  Axe: (...args: unknown[]) => unknown;
  Fxe: (...args: unknown[]) => unknown;
  Ixe: (...args: unknown[]) => unknown;
  Lxe: (...args: unknown[]) => unknown;
  Mxe: (...args: unknown[]) => unknown;
  Nxe: (...args: unknown[]) => unknown;
  Pxe: (...args: unknown[]) => unknown;
  Rxe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jxe: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  zxe: (...args: unknown[]) => unknown;
};

let peers: BindEnvironmentTomlPeers | null = null;

/** Wire bindEnvironmentToml peers once companions land. */
export function setBindEnvironmentTomlPeers(
  next: BindEnvironmentTomlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jmt` / internal `Bxe`.
 */
export function bindEnvironmentToml() {
  if (peers == null) {
    throw new Error("bindEnvironmentToml peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (Axe = `environment.toml`),
      (jxe = `codex.localEnvironmentConfigPath`),
      (Mxe = `__none__`),
      (Nxe = `CODEX_SOURCE_TREE_PATH`),
      (Pxe = `CODEX_WORKTREE_PATH`),
      (Fxe = [`tool`, `run`, `debug`, `test`]),
      (Ixe = [`darwin`, `linux`, `win32`]),
      (Lxe = peers.sl({
        name: peers.X(),
        icon: peers.pl(peers.Fxe).nullable().catch(null),
        command: peers.X(),
        platform: peers.pl(peers.Ixe).optional(),
      })),
      (Rxe = peers.sl({
        script: peers.X(),
      })),
      (zxe = peers.sl({
        script: peers.X(),
        darwin: peers.Rxe.optional(),
        linux: peers.Rxe.optional(),
        win32: peers.Rxe.optional(),
      })),
      peers.sl({
        version: peers.rl().int().min(1).default(1),
        name: peers.X(),
        setup: peers.zxe,
        cleanup: peers.zxe.optional(),
        actions: peers.ol(peers.Lxe).optional(),
      }));
  });
}
