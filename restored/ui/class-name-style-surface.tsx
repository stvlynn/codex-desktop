// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fNo`) / export `WO`.

export type ClassNameStyleSurfacePeers = {
  $: (...args: unknown[]) => unknown;
  mNo: (...args: unknown[]) => unknown;
  pNo: (...args: unknown[]) => unknown;
  uNo: (...args: unknown[]) => unknown;
};
let peers: ClassNameStyleSurfacePeers | null = null;

/** Wire ClassNameStyleSurface peers once companions land. */
export function setClassNameStyleSurfacePeers(
  next: ClassNameStyleSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `WO` / internal `fNo`.
 */
export function ClassNameStyleSurface(props: unknown) {
  if (peers == null) {
    throw new Error("ClassNameStyleSurface peers are not configured");
  }
  let { className, style, ...rest } = props;
  let a = peers.$(
    "pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-enter-snappy motion-reduce:transition-none",
    className,
  );
  let o = {
    ...peers.uNo,
    ...style,
  };
  return <div {...rest} className={a} style={o} />;
}
