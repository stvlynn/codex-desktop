// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `O4i` / export `qz`.

/** Whether navigation should open the plugin install surface. */
export function shouldOpenPluginInstall(state: {
  hasHandledNavigation: boolean;
  isInstallBlocked: boolean;
  isPluginInstalled: boolean;
  shouldOpenInstall: boolean;
}): boolean {
  return (
    state.shouldOpenInstall &&
    !state.hasHandledNavigation &&
    (state.isPluginInstalled || !state.isInstallBlocked)
  );
}
