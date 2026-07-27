// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `LRc`) / export `Hd`.

export type LaunchSubagentFromSourceThreadPeers = {
  launch: (input: Record<string, unknown>) => Promise<unknown> | unknown;
};

let peers: LaunchSubagentFromSourceThreadPeers | null = null;

/** Wire launchSubagentFromSourceThread peers once companions land. */
export function setLaunchSubagentFromSourceThreadPeers(
  next: LaunchSubagentFromSourceThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hd` / internal `LRc`.
 * Launch a subagent conversation from a source thread context.
 */
export function launchSubagentFromSourceThread(
  input: Record<string, unknown>,
): Promise<unknown> | unknown {
  if (peers == null) {
    throw new Error("LaunchSubagentFromSourceThread peers are not configured");
  }
  return peers.launch(input);
}
