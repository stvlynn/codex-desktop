// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `bti`) / export `_G`.

export type SystemMentionTemplate = {
  scope: string;
  name: string;
  path: string;
  [key: string]: unknown;
};

export type ApplySystemMentionTemplatePeers = {
  applyTemplate: (
    store: unknown,
    args: {
      templateId?: string;
      templateOrigin: unknown;
      inclusion: { type: "mention"; path: string };
    },
  ) => void;
  encodeTemplateId: (key: string, namespace: unknown) => string;
  templateNamespace: unknown;
  resolveTemplateOrigin: (scope: string) => unknown;
};

let peers: ApplySystemMentionTemplatePeers | null = null;

/** Wire mention-template applicator once companions land. */
export function setApplySystemMentionTemplatePeers(
  next: ApplySystemMentionTemplatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `_G` / internal `bti`.
 * Apply a system-scope mention template inclusion to the composer.
 */
export function applySystemMentionTemplate(
  store: unknown,
  template: SystemMentionTemplate,
): void {
  if (peers == null) {
    throw new Error("ApplySystemMentionTemplate peers are not configured");
  }
  peers.applyTemplate(store, {
    templateId:
      template.scope === "system"
        ? peers.encodeTemplateId(
            `${template.scope}:${template.name}`,
            peers.templateNamespace,
          )
        : undefined,
    templateOrigin: peers.resolveTemplateOrigin(template.scope),
    inclusion: { type: "mention", path: template.path },
  });
}
