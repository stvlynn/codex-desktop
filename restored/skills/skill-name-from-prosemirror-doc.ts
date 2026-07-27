// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hXr` / export `FY` — walk skill/plugin mention nodes.

import { skillNameFromMarkdownPath } from "./skill-name-from-markdown-path";

export type ProseMirrorNodeLike = {
  type: { name: string };
  attrs?: { path?: unknown };
  descendants?: (fn: (node: ProseMirrorNodeLike) => boolean | void) => void;
};

/** Prefer an existing skill path, else the last skill/plugin mention path. */
export function skillNameFromProsemirrorDoc(doc: ProseMirrorNodeLike, preferred: string | null = null): string | null {
  let last: string | null = null;
  let matchedPreferred = false;
  doc.descendants?.((node) => {
    if (
      node.type.name !== "skillMention" &&
      node.type.name !== "pluginMention"
    ) {
      return true;
    }
    const name = skillNameFromMarkdownPath(
      typeof node.attrs?.path === "string" ? node.attrs.path : "",
    );
    if (name != null) {
      last = name;
      matchedPreferred ||= name === preferred;
    }
    return true;
  });
  return matchedPreferred ? preferred : (last ?? preferred);
}
