// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cql`) / export `Na`.

export type HostConnectionStatusBadgePeers = {
  $: (...args: unknown[]) => unknown;
  Eql: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Tql: (...args: unknown[]) => unknown;
  V5: (...args: unknown[]) => unknown;
  W_: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  bw: (...args: unknown[]) => unknown;
  code: (...args: unknown[]) => unknown;
  ffs: (...args: unknown[]) => unknown;
  wql: (...args: unknown[]) => unknown;
  yql: (...args: unknown[]) => unknown;
};
let peers: HostConnectionStatusBadgePeers | null = null;

/** Wire HostConnectionStatusBadge peers once companions land. */
export function setHostConnectionStatusBadgePeers(
  next: HostConnectionStatusBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Na` / internal `Cql`.
 */
export function HostConnectionStatusBadge(props: unknown) {
  const Xm = peers.Xm;
  if (peers == null) {
    throw new Error("HostConnectionStatusBadge peers are not configured");
  }
  let { hostId, onLoginRequiredClick } = props,
    i = peers.Ju(),
    a = peers.bw(),
    { error, state } = peers.ffs(hostId),
    c = peers.W_(hostId);
  if (state == null) return null;
  let l =
      error?.code === "update-required" ||
      error?.code === "restart-required" ||
      (error?.code === "login-required" && onLoginRequiredClick == null),
    u = error?.code === "login-required" && onLoginRequiredClick != null,
    d = peers.yql(i, {
      canLogin: u,
      error,
      hostKind: c.kind,
      state,
      surface: "connection-status-badge",
    });
  let { label, message } = d,
    m = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onLoginRequiredClick?.();
    };
  let h = m,
    g = (event) => {
      event.preventDefault();
      event.stopPropagation();
      a("/settings/connections");
    };
  let _ = g,
    v = peers.Eql[state],
    y = peers.$(
      "icon-2xs inline-flex shrink-0 items-center justify-center",
      v.iconClassName,
    );
  let b = peers.Tql[state],
    x = <span className={y}>{b}</span>;
  let S = x;
  if (l || u) {
    let e = peers.Eql[state],
      n = peers.$(
        "no-drag icon-2xs inline-flex shrink-0 cursor-interaction items-center justify-center self-center overflow-hidden rounded-full border-0 bg-transparent p-0 text-current",
        e.dotClassName,
      );
    let r = u ? h : _,
      i = (
        <button type="button" className={n} aria-label={label} onClick={r}>
          {S}
        </button>
      );
    let a;
    return <Xm tooltipContent={message}>{i}</Xm>;
  }
  let C = peers.Eql[state],
    w = peers.$(
      "no-drag icon-2xs inline-flex shrink-0 items-center justify-center self-center overflow-hidden rounded-full",
      C.dotClassName,
    );
  let T = (
    <span className={w} aria-label={label} role="img">
      {S}
    </span>
  );
  return <Xm tooltipContent={message}>{T}</Xm>;
}
