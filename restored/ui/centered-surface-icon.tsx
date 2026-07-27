// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cwo`) / export `Lk`.

export type CenteredSurfaceIconPeers = {
  $: (...args: unknown[]) => unknown;
  lwo: (...args: unknown[]) => unknown;
  owo: (...args: unknown[]) => unknown;
  rwo: (...args: unknown[]) => unknown;
  uwo: (...args: unknown[]) => unknown;
};
let peers: CenteredSurfaceIconPeers | null = null;

/** Wire CenteredSurfaceIcon peers once companions land. */
export function setCenteredSurfaceIconPeers(
  next: CenteredSurfaceIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lk` / internal `cwo`.
 */
export function CenteredSurfaceIcon(props: unknown) {
  const Owo = peers.owo;
  const Rwo = peers.rwo;
  if (peers == null) {
    throw new Error("CenteredSurfaceIcon peers are not configured");
  }
  let { className } = props,
    r = peers.$("relative flex items-center justify-center", className);
  let i, a;
  i = (
    <Owo
      className="absolute inset-0 size-full"
      style={{
        color: "var(--color-token-main-surface-primary)",
      }}
    />
  );
  a = <Rwo className="absolute inset-0 size-full text-token-text-primary" />;
  return (
    <span aria-hidden="true" className={r}>
      {i}
      {a}
    </span>
  );
}
