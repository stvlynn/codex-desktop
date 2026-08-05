// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `k_e`) / export `Lht`.

export type BindBindBrowserPeers = {
  C_e: (...args: unknown[]) => unknown;
  D_e: (...args: unknown[]) => unknown;
  E_e: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  O_e: (...args: unknown[]) => unknown;
  S_e: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  T_e: (...args: unknown[]) => unknown;
  URL: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  m_e: (...args: unknown[]) => unknown;
  p_e: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  w_e: (...args: unknown[]) => unknown;
  x_e: (...args: unknown[]) => unknown;
};

let peers: BindBindBrowserPeers | null = null;

/** Wire bindBindBrowser peers once companions land. */
export function setBindBindBrowserPeers(next: BindBindBrowserPeers): void {
  peers = next;
}

/**
 * Bundle export `Lht` / internal `k_e`.
 */
export function bindBindBrowser() {
  if (peers == null) {
    throw new Error("bindBindBrowser peers are not configured");
  }

  return peers.e(() => {
    ((x_e = peers.r(peers.Il())),
      peers.Sl(),
      peers.p_e(),
      peers.m_e(),
      (S_e = `browser`),
      (C_e = `codex-internal-plugins`),
      (w_e = peers
        .X()
        .trim()
        .min(1)
        .refine(
          (e) =>
            peers.e !== `.` &&
            peers.e !== `..` &&
            !peers.e.includes(`/`) &&
            !peers.e.includes(`\\`),
          `Expected a single path segment.`,
        )),
      (T_e = peers
        .X()
        .trim()
        .regex(/^[a-fA-F0-9]{64}$/)),
      (E_e = peers
        .X()
        .trim()
        .url()
        .refine((e) => {
          let t = new peers.URL(peers.e);
          return (
            t.origin === `https://chatgpt.com` &&
            t.pathname.startsWith(`/codex/app/updates/plugins/`)
          );
        })),
      (D_e = peers.sl({
        internalCdnUrl: peers.E_e.optional(),
        sha256: peers.T_e,
        url: peers.X().trim().min(1),
        version: peers.w_e,
      })),
      (O_e = [
        `failed to back up plugin cache entry`,
        `failed to activate updated plugin cache entry`,
        `failed to activate plugin cache entry`,
        `failed to remove existing plugin cache entry`,
      ]));
  });
}
