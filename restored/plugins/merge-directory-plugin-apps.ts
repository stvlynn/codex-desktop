// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `q9o` / export `Tw`.

import { directoryAppCategory } from "./directory-app-category";

type DirectoryApp = {
  id: string;
  name: string;
  branding?: {
    category?: string | null;
    developer?: string | null;
    website?: string | null;
    privacyPolicy?: string | null;
    termsOfService?: string | null;
    isDiscoverableApp?: boolean;
  } | null;
};

/** Overlay plugin-app categories onto directory apps. */
export function mergeDirectoryPluginApps(args: {
  directoryApps: readonly DirectoryApp[];
  pluginApps: readonly { id: string; category?: string | null }[];
}): DirectoryApp[] {
  const { directoryApps, pluginApps } = args;
  const byId = new Map(directoryApps.map((app) => [app.id, app]));
  return pluginApps
    .map((pluginApp) => {
      const base = byId.get(pluginApp.id);
      if (base == null || base.name === base.id) return null;
      const category = pluginApp.category?.trim() || directoryAppCategory(base);
      if (!category) return base;
      const branding = base.branding ?? {
        category: null,
        developer: null,
        website: null,
        privacyPolicy: null,
        termsOfService: null,
        isDiscoverableApp: false,
      };
      return { ...base, branding: { ...branding, category } };
    })
    .filter((app): app is DirectoryApp => app != null);
}
