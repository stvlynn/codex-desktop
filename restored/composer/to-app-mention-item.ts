// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map an installed app into a mention list item (bundle `N1r`/`L1r`; not exported).

import { buildAppUri } from "./app-plugin-uri";
import { slugifyAppMentionName } from "./slugify-app-mention-name";

export type AppMentionSource = {
  id: string;
  name: string;
  description?: string | null;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
};

export type AppMentionItemFields = {
  name: string;
  displayName: string;
  path: string;
  description: string;
  iconSmall: string;
};

export type AppMentionItem = AppMentionItemFields & {
  kind: "app";
};

/** Normalize app fields for mention menus (`N1r`). */
export function toAppMentionFields(app: AppMentionSource): AppMentionItemFields {
  return {
    name: slugifyAppMentionName(app.name),
    displayName: app.name,
    path: buildAppUri(app.id),
    description: app.description ?? "",
    iconSmall: app.logoUrl ?? app.logoUrlDark ?? "",
  };
}

/** Mention list item with `kind: "app"` (`L1r`). */
export function toAppMentionItem(app: AppMentionSource): AppMentionItem {
  return { kind: "app", ...toAppMentionFields(app) };
}
