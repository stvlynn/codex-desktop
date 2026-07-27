// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `e6o`) / export `xT`.

export type BindBindGeneralSettingsPeers = {
  $3o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindGeneralSettingsPeers | null = null;

/** Wire bindBindGeneralSettings peers once companions land. */
export function setBindBindGeneralSettingsPeers(next: BindBindGeneralSettingsPeers): void {
  peers = next;
}

/**
 * Bundle export `xT` / internal `e6o`.
 */
export function bindBindGeneralSettings() {
  if (peers == null) {
    throw new Error("bindBindGeneralSettings peers are not configured");
  }

  return peers.e(() => {
    $3o = `general-settings.import.profile.keyboard-shortcuts.codex-micro.appshots.appearance.voice.pets.chronicle.agent.git-settings.data-controls.cloud-settings.cloud-environments.code-review.personalization.usage.debug.browser-use.computer-use.local-environments.worktrees.environments.mcp-settings.hooks-settings.connections.plugins-settings.skills-settings`.split(`.`);
  });
}
