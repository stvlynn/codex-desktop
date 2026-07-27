// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `AIl`) / export `$o`.

export type NavigateToPluginsOrSkillsPeers = {
  logProductEvent: (
    store: unknown,
    event: unknown,
    payload: { item: "plugins" | "skills" },
  ) => void;
  navigateEvent: unknown;
};

let peers: NavigateToPluginsOrSkillsPeers | null = null;

/** Wire navigation analytics once companions land. */
export function setNavigateToPluginsOrSkillsPeers(
  next: NavigateToPluginsOrSkillsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$o` / internal `AIl`.
 * Log plugins/skills entry then navigate to /skills with directory state.
 */
export function navigateToPluginsOrSkills(
  store: unknown,
  navigate: (path: string, opts: { state: Record<string, unknown> }) => void,
  preferPlugins: boolean,
  pluginDirectoryEntrypoint: unknown,
  initialHostId: unknown,
): void {
  if (peers == null) {
    throw new Error("NavigateToPluginsOrSkills peers are not configured");
  }
  peers.logProductEvent(store, peers.navigateEvent, {
    item: preferPlugins ? "plugins" : "skills",
  });
  navigate("/skills", {
    state: { initialHostId, pluginDirectoryEntrypoint },
  });
}
