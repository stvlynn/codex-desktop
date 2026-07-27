// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `Hqn`) / export `J8`.

export type DebugPanelTurnLike = {
  items?: Array<
    { type?: string; text?: string; [key: string]: unknown } | null | undefined
  >;
  status?: string;
  [key: string]: unknown;
};

export type DebugPanelTurnFileBuckets = {
  editedFilePaths: string[];
  referencedFilePaths: string[];
  [key: string]: string[];
};

export type CollectDebugPanelTurnFilesPeers = {
  createBuckets: () => DebugPanelTurnFileBuckets;
  isHeartbeatAutomationTurn: (turn: DebugPanelTurnLike) => boolean;
  lastAgentMessageIndex: (
    items: NonNullable<DebugPanelTurnLike["items"]>,
  ) => number;
  collectFileChange: (
    buckets: DebugPanelTurnFileBuckets,
    item: { type?: string; [key: string]: unknown },
  ) => void;
  stripAgentMessage: (
    text: string | undefined,
    isStreaming: boolean,
  ) => { removed: boolean; content: string };
  artifactScanContent: (args: {
    content: string;
    isHeartbeatAutomationTurn: boolean;
  }) => { artifactScanContent?: string } | null | undefined;
  collectAgentMessage: (
    buckets: DebugPanelTurnFileBuckets,
    content: string,
  ) => void;
  finalize: (buckets: DebugPanelTurnFileBuckets) => DebugPanelTurnFileBuckets;
};

let peers: CollectDebugPanelTurnFilesPeers | null = null;

/** Wire turn-file scanner helpers once companions land. */
export function setCollectDebugPanelTurnFilesPeers(
  next: CollectDebugPanelTurnFilesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `J8` / internal `Hqn`.
 * Scan a conversation turn for edited/referenced file-path buckets.
 */
export function collectDebugPanelTurnFiles(
  turn: DebugPanelTurnLike,
): DebugPanelTurnFileBuckets {
  if (peers == null) {
    throw new Error("CollectDebugPanelTurnFiles peers are not configured");
  }
  const buckets = peers.createBuckets();
  const isHeartbeat = peers.isHeartbeatAutomationTurn(turn);
  const items = turn.items ?? [];
  const lastAgentIndex = peers.lastAgentMessageIndex(items);
  for (const [index, item] of items.entries()) {
    if (!item) continue;
    if (item.type === "fileChange") {
      peers.collectFileChange(buckets, item);
    } else if (item.type === "agentMessage") {
      const isStreaming =
        turn.status === "inProgress" && index === lastAgentIndex;
      const stripped = peers.stripAgentMessage(item.text, isStreaming);
      if (stripped.removed && stripped.content.length === 0) continue;
      const artifact = isStreaming
        ? null
        : peers.artifactScanContent({
            content: stripped.content,
            isHeartbeatAutomationTurn: isHeartbeat,
          });
      peers.collectAgentMessage(
        buckets,
        artifact?.artifactScanContent ?? stripped.content,
      );
    }
  }
  return peers.finalize(buckets);
}

/** Bundle export `J7` — Rolldown ESM init retained as no-op. */
export function ensureDebugPanelTurnFilesInit(): void {}

/** Bundle export `Y8` — Rolldown ESM init for debug-panel parsers cluster. */
export function ensureDebugPanelParsersInit(): void {}
