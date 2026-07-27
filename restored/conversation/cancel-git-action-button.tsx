// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NJo`) / export `JE`.

export type CancelGitActionButtonPeers = {
  BJ: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  PJo: (...args: unknown[]) => unknown;
  VJ: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  lh: (...args: unknown[]) => unknown;
};
let peers: CancelGitActionButtonPeers | null = null;

/** Wire CancelGitActionButton peers once companions land. */
export function setCancelGitActionButtonPeers(
  next: CancelGitActionButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `JE` / internal `NJo`.
 */
export function CancelGitActionButton(props: unknown) {
  const Jp = peers.jp;
  const Lh = peers.lh;
  const Np = peers.Np;
  const IconButton = peers.BJ.IconButton;
  if (peers == null) {
    throw new Error("CancelGitActionButton peers are not configured");
  }
  let n = peers.Ju(),
    r = props.variant ?? "icon",
    i = n.formatMessage({
      id: "localConversation.gitActions.cancel",
      defaultMessage: "Cancel git action",
      description: "Accessible label for canceling an active git action",
    });
  let a = i;
  if (r === "toolbar") {
    let n = (
      <span className="relative size-3 shrink-0">
        {
          <Jp
            className="icon-xxs"
            containerClassName="absolute inset-0 group-hover:hidden group-focus-visible:hidden"
          />
        }
        {
          <Lh className="icon-xxs absolute inset-0 hidden group-hover:block group-focus-visible:block" />
        }
      </span>
    );
    let r;
    return (
      <Np
        allowShrink={true}
        aria-label={a}
        className="group"
        color="outline"
        size="toolbar"
        onClick={props.onCancel}
      >
        {n}
        {props.children}
      </Np>
    );
  }
  let o = <Lh />;
  return (
    <IconButton label={a} onClick={props.onCancel}>
      {o}
    </IconButton>
  );
}
