// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oU`) / export `oM`.

export type BindMcpCapabilityPeers = {
  AJa: (...args: unknown[]) => unknown;
  FJa: (...args: unknown[]) => unknown;
  HS: (...args: unknown[]) => unknown;
  IJa: (...args: unknown[]) => unknown;
  MJa: (...args: unknown[]) => unknown;
  NJa: (...args: unknown[]) => unknown;
  OJa: (...args: unknown[]) => unknown;
  PJa: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  US: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  XS: (...args: unknown[]) => unknown;
  aU: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  jJa: (...args: unknown[]) => unknown;
  kJa: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindMcpCapabilityPeers | null = null;

/** Wire bindMcpCapability peers once companions land. */
export function setBindMcpCapabilityPeers(next: BindMcpCapabilityPeers): void {
  peers = next;
}

/**
 * Bundle export `oM` / internal `oU`.
 */
export function bindMcpCapability() {
  if (peers == null) {
    throw new Error("bindMcpCapability peers are not configured");
  }

  return peers.e(() => {
    peers.XS(), peers.US(), peers.Sl(), OJa = peers.sl({
      kind: peers.ml(`mcp-capability`),
      mentionSearchTool: peers.X(),
      path: peers.ol(peers.sl({
        id: peers.X(),
        title: peers.X()
      })),
      server: peers.X(),
      title: peers.X()
    }), kJa = peers.sl({
      commandId: peers.X(),
      dismissOnInput: peers.il().optional(),
      kind: peers.ml(`slash-command`)
    }), AJa = peers.dl(`kind`, [peers.OJa, peers.kJa]), jJa = peers.pl([`at-mention`, `skill-mention`, `slash-command`]), MJa = peers.dl(`type`, [peers.sl({
      kind: peers.jJa,
      type: peers.ml(`close`)
    }), peers.sl({
      action: peers.pl([`complete-query`, `insert-mention`]),
      kind: peers.jJa,
      type: peers.ml(`submit`)
    })]), NJa = peers.dl(`type`, [peers.sl({
      type: peers.ml(`close`)
    }), peers.sl({
      type: peers.ml(`dismiss`)
    }), peers.sl({
      from: peers.rl(),
      kind: peers.pl([`at-mention`, `slash-command`]),
      trigger: peers.pl([`+`, `/`]),
      type: peers.ml(`open-synthetic`)
    }), peers.sl({
      source: peers.AJa.nullable(),
      type: peers.ml(`set-source`)
    })]), PJa = /(?:^|\s)([/@$])([\p{L}\p{N}\p{M}.:_/\\-]*)$/u, FJa = /(?:^|[\s([{])@([^@]*)$/u, IJa = /(?:^|[\s([{])\$([^$]*)$/u, aU = new peers.HS(`composer-suggestion-ui`);
  });
}
