// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `J9o` / export `ww`.

import { directoryAppCategory } from "./directory-app-category";

type DirectoryApp = {
  id: string;
  description?: string | null;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  branding?: { category?: string | null } | null;
  appMetadata?: { categories?: Array<string | null | undefined> | null } | null;
};

type AppTemplate = {
  templateId: string;
  canonicalConnectorId?: string | null;
  category?: string | null;
  description?: string | null;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
};

/** Fill template metadata from matching directory apps. */
export function mergeDirectoryAppTemplates(args: {
  directoryApps: readonly DirectoryApp[];
  appTemplates: readonly AppTemplate[] | null | undefined;
}): AppTemplate[] {
  const { directoryApps, appTemplates } = args;
  if (!Array.isArray(appTemplates)) return [];
  const byId = new Map(directoryApps.map((app) => [app.id, app]));
  return appTemplates.map((template) => {
    const match =
      (template.canonicalConnectorId == null
        ? undefined
        : byId.get(template.canonicalConnectorId)) ??
      byId.get(template.templateId);
    if (match == null) return template;
    return {
      ...template,
      category: template.category?.trim() || directoryAppCategory(match),
      description: template.description || match.description,
      logoUrl: template.logoUrl || match.logoUrl,
      logoUrlDark: template.logoUrlDark || match.logoUrlDark,
    };
  });
}
