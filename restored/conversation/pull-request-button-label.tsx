// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mqo`) / export `oD`.

export type PullRequestButtonLabelPeers = {
  Z: (...args: unknown[]) => unknown;
  _qo: (...args: unknown[]) => unknown;
  vqo: (...args: unknown[]) => unknown;
};
let peers: PullRequestButtonLabelPeers | null = null;

/** Wire PullRequestButtonLabel peers once companions land. */
export function setPullRequestButtonLabelPeers(
  next: PullRequestButtonLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oD` / internal `mqo`.
 */
export function PullRequestButtonLabel(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("PullRequestButtonLabel peers are not configured");
  }
  let { number } = props;
  return number == null ? (
    <Z
      id="localConversationPage.pullRequestButtonLabel"
      defaultMessage="PR"
      description="Label for the pull request button when the PR number is unavailable"
    />
  ) : (
    <Z
      id="localConversationPage.pullRequestButtonLabel.withNumber"
      defaultMessage={"PR {number}"}
      description="Label for the pull request button when the PR number is known"
      values={{
        number,
      }}
    />
  );
}
