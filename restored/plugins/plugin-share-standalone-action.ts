// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Z9o` / export `Dw`.

export type PluginShareStandaloneActionKind = "share-button" | "copy-link";

export type PluginShareStandaloneAction = {
  standaloneActionKind: PluginShareStandaloneActionKind | null;
  showShareMenuItem: boolean;
};

/** Decide share-button vs copy-link chrome for a plugin detail surface. */
export function pluginShareStandaloneAction(args: {
  hasLoadedSharePrincipals: boolean;
  canSharePlugin: boolean;
  isInstalled: boolean;
  isShareDisabled: boolean;
  pluginShareUrl: string | null | undefined;
}): PluginShareStandaloneAction {
  const {
    hasLoadedSharePrincipals,
    canSharePlugin,
    isInstalled,
    isShareDisabled,
    pluginShareUrl,
  } = args;
  let standaloneActionKind: PluginShareStandaloneActionKind | null;
  if (
    (canSharePlugin || isShareDisabled) &&
    (pluginShareUrl == null || hasLoadedSharePrincipals)
  ) {
    standaloneActionKind = "share-button";
  } else if (pluginShareUrl == null) {
    standaloneActionKind = null;
  } else {
    standaloneActionKind = "copy-link";
  }
  return {
    standaloneActionKind,
    showShareMenuItem: isInstalled && canSharePlugin,
  };
}
