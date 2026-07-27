// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fXi`) / export `qB`.

export type CollapsibleChevronTriggerPeers = {
  $: (...args: unknown[]) => unknown;
  GR: (...args: unknown[]) => unknown;
  Gd: (...args: unknown[]) => unknown;
  HR: (...args: unknown[]) => unknown;
  Hm: (...args: unknown[]) => unknown;
  Mk: (...args: unknown[]) => unknown;
  UR: (...args: unknown[]) => unknown;
  WR: (...args: unknown[]) => unknown;
  ef: (...args: unknown[]) => unknown;
  pXi: (...args: unknown[]) => unknown;
};
let peers: CollapsibleChevronTriggerPeers | null = null;

/** Wire CollapsibleChevronTrigger peers once companions land. */
export function setCollapsibleChevronTriggerPeers(
  next: CollapsibleChevronTriggerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qB` / internal `fXi`.
 */
export function CollapsibleChevronTrigger(props: unknown) {
  const Hm = peers.Hm;
  const Div = peers.ef.div;
  const Gd = peers.Gd;
  if (peers == null) {
    throw new Error("CollapsibleChevronTrigger peers are not configured");
  }
  let { trigger, children, isDefaultOpen = false } = props,
    o = trigger.props.disabled ?? false,
    [s, c] = peers.UR.useState(o ? false : isDefaultOpen),
    l = s && !o,
    u;
  {
    let e = (event) => {
      trigger.props.onSelect?.(event);
      !event.defaultPrevented &&
        (event.preventDefault(), event.stopPropagation(), !o && c(peers.pXi));
    };
    let r = l && "rotate-90",
      i = peers.$(
        "inline-flex items-center justify-center text-token-input-placeholder-foreground",
        r,
      );
    let a = trigger.props.rightIconClassName ?? "icon-xs",
      s = peers.$(a, peers.GR.icon);
    let d = <Hm className={s} />;
    let f = (
      <span aria-hidden={true} className={i}>
        {d}
      </span>
    );
    let p;
    p = {
      onSelect: e,
      rightIcon: f,
    };
    u = peers.UR.cloneElement(trigger, p);
  }
  let d = u,
    f = l ? "open" : "closed",
    p = l ? undefined : "pointer-events-none invisible h-0 overflow-hidden",
    m = l && (
      <Div
        key="dropdown-submenu"
        initial={false}
        animate={{
          height: "auto",
          opacity: 1,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={peers.Mk}
        className="overflow-hidden"
      >
        {children}
      </Div>
    );
  let h = <Gd initial={false}>{m}</Gd>;
  let g = <div className={p}>{h}</div>;
  return (
    <div className="flex flex-col" data-state={f}>
      {d}
      {g}
    </div>
  );
}
