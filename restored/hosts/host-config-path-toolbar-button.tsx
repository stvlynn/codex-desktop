// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pJr`) / export `sX`.

export type HostConfigPathToolbarButtonPeers = {
  Np: (...args: unknown[]) => unknown;
  gJr: (...args: unknown[]) => unknown;
  hJr: (...args: unknown[]) => unknown;
  uJr: (...args: unknown[]) => unknown;
  vJr: (...args: unknown[]) => unknown;
};
let peers: HostConfigPathToolbarButtonPeers | null = null;

/** Wire HostConfigPathToolbarButton peers once companions land. */
export function setHostConfigPathToolbarButtonPeers(
  next: HostConfigPathToolbarButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sX` / internal `pJr`.
 */
export function HostConfigPathToolbarButton(props: unknown) {
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("HostConfigPathToolbarButton peers are not configured");
  }
  let { hostId } = props,
    { configPath, label } = peers.hJr(hostId),
    a = () => {
      configPath != null &&
        peers.uJr({
          hostId,
          path: configPath,
        });
    };
  let o = configPath == null;
  return (
    <Np
      color="secondary"
      size="toolbar"
      className="inline-flex w-fit"
      onClick={a}
      disabled={o}
    >
      {label}
    </Np>
  );
}
