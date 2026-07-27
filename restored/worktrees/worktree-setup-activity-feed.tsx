// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tul`) / export `Ic`.

export type BindWorktreeSetupActivityFeedPeers = {
  $: (...args: unknown[]) => unknown;
  $6: (...args: unknown[]) => unknown;
  OWc: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  iul: (...args: unknown[]) => unknown;
  nul: (...args: unknown[]) => unknown;
  rul: (...args: unknown[]) => unknown;
  voc: (...args: unknown[]) => unknown;
  x5c: (...args: unknown[]) => unknown;
};
let peers: BindWorktreeSetupActivityFeedPeers | null = null;

/** Wire bindWorktreeSetupActivityFeed peers once companions land. */
export function setBindWorktreeSetupActivityFeedPeers(
  next: BindWorktreeSetupActivityFeedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ic` / internal `tul`.
 */
export function bindWorktreeSetupActivityFeed(props: unknown) {
  if (peers == null) {
    throw new Error("bindWorktreeSetupActivityFeed peers are not configured");
  }
  let { activities, children, worktreeIcon } = props,
    a = children == null ? null : (activities.at(-1)?.id ?? null),
    o;
  {
    let e;
    e = (_props) => {
      const Voc = peers.voc;
      const Rul = peers.rul;
      const OWc = peers.OWc;
      const Nul = peers.nul;
      const X5c = peers.x5c;
      let t = _props.id === a;
      if (_props.kind === "conversation" && _props.status === "running")
        return (
          <div key={_props.id} className="mt-3 min-w-0">
            {
              <Voc
                message={<Rul kind={_props.kind} status={_props.status} />}
              />
            }
          </div>
        );
      let n = t ? (
        <div
          className={peers.$(
            "flex items-center justify-end gap-2",
            _props.outputText.length > 0 && "px-3 pb-3",
          )}
        >
          {children}
        </div>
      ) : null;
      return (
        <OWc
          key={`${_props.id}:${t}`}
          defaultExpanded={t}
          indentContent={false}
          icon={
            _props.kind === "worktree" && worktreeIcon != null ? (
              worktreeIcon
            ) : (
              <Nul kind={_props.kind} status={_props.status} />
            )
          }
          status={_props.status === "skipped" ? "completed" : _props.status}
          summary={<Rul kind={_props.kind} status={_props.status} />}
        >
          {_props.outputText.length > 0 ? (
            <X5c
              command=""
              output={_props.outputText}
              isInProgress={_props.status === "running"}
              surface="plain"
              footer={n}
            />
          ) : (
            n
          )}
        </OWc>
      );
    };
    o = activities.map(e);
  }
  return <div className="flex w-full max-w-3xl flex-col gap-2">{o}</div>;
}
