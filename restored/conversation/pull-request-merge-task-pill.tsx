// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Mnl`) / export `al`.

export type PullRequestMergeTaskPillPeers = {
  JY: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  h6: (...args: unknown[]) => unknown;
  iqo: (...args: unknown[]) => unknown;
  m6: (...args: unknown[]) => unknown;
};
let peers: PullRequestMergeTaskPillPeers | null = null;

/** Wire PullRequestMergeTaskPill peers once companions land. */
export function setPullRequestMergeTaskPillPeers(
  next: PullRequestMergeTaskPillPeers,
): void {
  peers = next;
}

/**
 * Bundle export `al` / internal `Mnl`.
 */
export function PullRequestMergeTaskPill(props: unknown) {
  const JY = peers.JY;
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("PullRequestMergeTaskPill peers are not configured");
  }
  let { pullRequestNumber } = props;
  return (
    <JY Icon={peers.iqo}>
      <Z
        id="codex.userMessage.pullRequestMergeTask"
        defaultMessage={"PR #{number}"}
        description="Pill shown on a user message for a pull request merge task"
        values={{
          number: pullRequestNumber,
        }}
      />
    </JY>
  );
}
