// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `T0n`) / export `r6`.

export type AppgenEndCardTurn = {
  status: string;
  cwd: unknown;
  items: Array<{ type: string; [key: string]: unknown }>;
};

export type BuildAppgenEndCardItemsArgs = {
  assistantContent: unknown;
  projectlessOutputDirectory?: string | null;
  isAppgenEndCardEnabled?: boolean;
  turn: AppgenEndCardTurn;
};

export type BuildAppgenEndCardItemsPeers = {
  extractWebsiteTarget: (content: unknown) => string | null;
  collectMcpWebsiteItems: (toolCalls: unknown[]) => unknown[];
  extractPrimaryResource: (turn: AppgenEndCardTurn) => unknown;
  extractSecondaryResource: (turn: AppgenEndCardTurn) => unknown;
  normalizeResources: (args: {
    cwd: unknown;
    projectlessOutputDirectory: string | null;
    resources: unknown[];
  }) => Array<{ type: string; [key: string]: unknown }>;
  collectFilePaths: (turn: AppgenEndCardTurn) => string[];
  buildContentResources: (
    content: unknown,
    secondary: unknown,
    primary: unknown,
  ) => unknown[];
  dedupeResources: (args: { cwd: unknown; resources: unknown[] }) => unknown[];
  fallbackWebsiteTarget: (
    turn: AppgenEndCardTurn,
    projectlessOutputDirectory: string | null,
  ) => string | null;
};

let peers: BuildAppgenEndCardItemsPeers | null = null;

/** Wire appgen end-card peers once companions land. */
export function setBuildAppgenEndCardItemsPeers(
  next: BuildAppgenEndCardItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `r6` / internal `T0n`.
 * Build end-card items (files/websites/MCP) for a completed appgen turn.
 */
export function buildAppgenEndCardItems(
  args: BuildAppgenEndCardItemsArgs,
): unknown[] {
  if (peers == null) {
    throw new Error("BuildAppgenEndCardItems peers are not configured");
  }
  const {
    assistantContent,
    projectlessOutputDirectory = null,
    isAppgenEndCardEnabled = false,
    turn,
  } = args;
  if (turn.status !== "complete") return [];
  const websiteFromContent = peers.extractWebsiteTarget(assistantContent);
  const mcpItems = isAppgenEndCardEnabled
    ? peers.collectMcpWebsiteItems(
        turn.items.filter((item) => item.type === "mcp-tool-call"),
      )
    : [];
  const primary = peers.extractPrimaryResource(turn);
  const secondary = peers.extractSecondaryResource(turn);
  const resources = peers.normalizeResources({
    cwd: turn.cwd,
    projectlessOutputDirectory,
    resources: peers.dedupeResources({
      cwd: turn.cwd,
      resources: [
        ...peers.collectFilePaths(turn).map((pathValue) => ({
          type: "file",
          path: pathValue,
        })),
        ...peers.buildContentResources(assistantContent, secondary, primary),
      ],
    }),
  });
  if (resources.some((item) => item.type === "file") || mcpItems.length > 0) {
    return [...resources, ...mcpItems];
  }
  if (websiteFromContent != null) {
    return [...resources, { type: "website", target: websiteFromContent }];
  }
  const fallback = peers.fallbackWebsiteTarget(
    turn,
    projectlessOutputDirectory,
  );
  return fallback == null
    ? resources
    : [...resources, { type: "website", target: fallback }];
}
