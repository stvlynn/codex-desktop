// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vbe`) / export `Ymt`.

export type BindBindAuthElicitationPeers = {
  Bbe: (...args: unknown[]) => unknown;
  Rbe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zbe: (...args: unknown[]) => unknown;
};

let peers: BindBindAuthElicitationPeers | null = null;

/** Wire bindBindAuthElicitation peers once companions land. */
export function setBindBindAuthElicitationPeers(
  next: BindBindAuthElicitationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ymt` / internal `Vbe`.
 */
export function bindBindAuthElicitation() {
  if (peers == null) {
    throw new Error("bindBindAuthElicitation peers are not configured");
  }

  return peers.e(() => {
    ((Rbe = `features.`),
      (zbe = new Set([
        `auth_elicitation`,
        `plugins`,
        `apps`,
        `tool_suggest`,
        `tool_call_mcp_elicitation`,
        `writing_blocks`,
      ])),
      (Bbe = `workspace_dependencies`));
  });
}
