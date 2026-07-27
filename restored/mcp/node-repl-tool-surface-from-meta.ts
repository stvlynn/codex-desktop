// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VKn` / export `i5` (zod parse deferred to opaque read).

/** Read `codex/toolSurface` from node_repl tool result meta when present. */
export function nodeReplToolSurfaceFromMeta(input: {
  resultMeta: Record<string, unknown> | null | undefined;
  serverName: string;
}): unknown {
  const { resultMeta, serverName } = input;
  if (serverName !== "node_repl" || resultMeta == null) return null;
  return resultMeta["codex/toolSurface"] ?? null;
}
