// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LYo`) / export `HE`.

export type BindSetPrefixLabelPeers = {
  RYo: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  bw: (...args: unknown[]) => unknown;
  zYo: (...args: unknown[]) => unknown;
};
let peers: BindSetPrefixLabelPeers | null = null;

/** Wire bindSetPrefixLabel peers once companions land. */
export function setBindSetPrefixLabelPeers(
  next: BindSetPrefixLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HE` / internal `LYo`.
 */
export function bindSetPrefixLabel(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("bindSetPrefixLabel peers are not configured");
  }
  let { showSetPrefix = true } = props,
    i = peers.bw(),
    a = (
      <span className="text-sm font-medium text-token-foreground">
        {
          <Z
            id="localConversation.syncSetup.branchName"
            defaultMessage="Branch name"
            description="Title for the branch name input in the sync setup modal"
          />
        }
      </span>
    );
  let o = showSetPrefix ? (
    <button
      type="button"
      className="text-sm text-token-description-foreground hover:text-token-foreground"
      onClick={() => {
        i("/settings/git-settings");
      }}
    >
      {
        <Z
          id="localConversation.syncSetup.setPrefix"
          defaultMessage="Set prefix"
          description="Label for branch prefix configuration"
        />
      }
    </button>
  ) : null;
  return (
    <div className="flex items-center justify-between gap-4">
      {a}
      {o}
    </div>
  );
}
