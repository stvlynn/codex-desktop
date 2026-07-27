// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OWc`) / export `Ad`.

export type ExpandableStatusSectionPeers = {
  AWc: (...args: unknown[]) => unknown;
  Mk: (...args: unknown[]) => unknown;
  W1: (...args: unknown[]) => unknown;
  ef: (...args: unknown[]) => unknown;
  g4: (...args: unknown[]) => unknown;
  jWc: (...args: unknown[]) => unknown;
  kWc: (...args: unknown[]) => unknown;
  l4: (...args: unknown[]) => unknown;
  wWc: (...args: unknown[]) => unknown;
};
let peers: ExpandableStatusSectionPeers | null = null;

/** Wire ExpandableStatusSection peers once companions land. */
export function setExpandableStatusSectionPeers(
  next: ExpandableStatusSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ad` / internal `OWc`.
 */
export function ExpandableStatusSection(props: unknown) {
  const W1 = peers.W1;
  const Div = peers.ef.div;
  const WWc = peers.wWc;
  const L4 = peers.l4;
  if (peers == null) {
    throw new Error("ExpandableStatusSection peers are not configured");
  }
  let {
      defaultExpanded = false,
      indentContent = true,
      icon,
      onExpand,
      summary,
      status,
      children,
    } = props,
    [d, f] = peers.AWc.useState(false),
    [p, m] = peers.AWc.useState(defaultExpanded),
    { elementHeightPx, elementRef } = peers.g4(),
    _ = status === "running",
    v = children != null,
    y = v && (_ ? !d : p),
    b = () => {
      y || onExpand?.();
      _ ? f(!d) : m(!p);
    };
  let x = b,
    S = (
      <W1
        active={_}
        className="text-size-chat min-w-0 truncate text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground"
      >
        {summary}
      </W1>
    );
  let C = S,
    w = v
      ? {
          expanded: y,
          onToggle: x,
        }
      : undefined;
  let T = w,
    E = v ? (
      <Div
        initial={false}
        animate={{
          height: y ? elementHeightPx : 0,
          opacity: +!!y,
        }}
        aria-hidden={!y}
        inert={!y}
        className={y ? "overflow-visible" : "overflow-hidden"}
        style={{
          pointerEvents: y ? "auto" : "none",
        }}
        transition={peers.Mk}
      >
        <WWc ref={elementRef} indent={indentContent}>
          {children}
        </WWc>
      </Div>
    ) : null;
  let D = E;
  return <L4 body={D} disclosure={T} icon={icon} summary={C} />;
}
