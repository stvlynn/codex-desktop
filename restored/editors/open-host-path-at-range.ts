// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `uJr`) / export `uX`.

export type OpenHostPathAtRangeArgs = {
  path: string;
  hostId: string;
  range?: { start?: { line?: number; column?: number } } | null;
};

export type OpenHostPathAtRangePeers = {
  openInEditor: (args: {
    path: string;
    cwd: null;
    hostId: string;
    target: unknown;
    line?: number;
    column?: number;
  }) => void;
  resolveEditorTarget: (hostId: string) => Promise<unknown>;
};

let peers: OpenHostPathAtRangePeers | null = null;

/** Wire host-path editor peers once companions land. */
export function setOpenHostPathAtRangePeers(
  next: OpenHostPathAtRangePeers,
): void {
  peers = next;
}

/**
 * Bundle export `uX` / internal `uJr`.
 * Open a host path in the editor at an optional line/column range.
 */
export async function openHostPathAtRange(
  args: OpenHostPathAtRangeArgs,
): Promise<void> {
  if (peers == null) {
    throw new Error("OpenHostPathAtRange peers are not configured");
  }
  peers.openInEditor({
    path: args.path,
    cwd: null,
    hostId: args.hostId,
    target: await peers.resolveEditorTarget(args.hostId),
    line: args.range?.start?.line,
    column: args.range?.start?.column,
  });
}
