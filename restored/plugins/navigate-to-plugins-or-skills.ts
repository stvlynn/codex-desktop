// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `AIl`) / export `$o`.

export type NavigateToPluginsOrSkillsPeers = {
  Ub: (...args: unknown[]) => unknown;
  Vb: (...args: unknown[]) => unknown;
};

let peers: NavigateToPluginsOrSkillsPeers | null = null;

/** Wire navigateToPluginsOrSkills peers once companions land. */
export function setNavigateToPluginsOrSkillsPeers(
  next: NavigateToPluginsOrSkillsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$o` / internal `AIl`.
 */
export function navigateToPluginsOrSkills(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
  i: unknown,
) {
  if (peers == null) {
    throw new Error("navigateToPluginsOrSkills peers are not configured");
  }

  (peers.Ub(e, peers.Vb, {
    item: n ? `plugins` : `skills`,
  }),
    t(`/skills`, {
      state: {
        initialHostId: i,
        pluginDirectoryEntrypoint: r,
      },
    }));
}
