// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VNl` / export `Os`.

type ImportSuccess = { itemType: string; target?: string | null };
type ImportHistory = { successes: ImportSuccess[] };
type McpServerStatus = { name: string; authStatus?: string | null };

/** MCP server names imported but still requiring login. */
export function mcpServersNeedingLoginFromImport(input: {
  histories: readonly ImportHistory[];
  mcpServerStatuses: readonly McpServerStatus[];
}): string[] {
  const imported = new Set(
    input.histories.flatMap((history) =>
      history.successes.flatMap((row) =>
        row.itemType === "MCP_SERVER_CONFIG" && row.target != null
          ? [row.target]
          : [],
      ),
    ),
  );
  return input.mcpServerStatuses.flatMap((server) =>
    server.authStatus === "notLoggedIn" && imported.has(server.name)
      ? [server.name]
      : [],
  );
}
