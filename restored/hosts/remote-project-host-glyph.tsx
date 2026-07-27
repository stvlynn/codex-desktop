// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dZ`) / export `xS`.

export type RemoteProjectHostGlyphPeers = {
  Aus: (...args: unknown[]) => unknown;
  Ous: (...args: unknown[]) => unknown;
  Tus: (...args: unknown[]) => unknown;
  kus: (...args: unknown[]) => unknown;
  lZ: (...args: unknown[]) => unknown;
};
let peers: RemoteProjectHostGlyphPeers | null = null;

/** Wire RemoteProjectHostGlyph peers once companions land. */
export function setRemoteProjectHostGlyphPeers(
  next: RemoteProjectHostGlyphPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xS` / internal `dZ`.
 */
export function RemoteProjectHostGlyph(props: unknown) {
  const LZ = peers.lZ;
  const Tus = peers.Tus;
  const Ous = peers.Ous;
  if (peers == null) {
    throw new Error("RemoteProjectHostGlyph peers are not configured");
  }
  let { className, remoteHostId, isRemoteProject } = props;
  if (!(isRemoteProject !== undefined && isRemoteProject)) {
    let e;
    return <LZ className={className} />;
  }
  if (remoteHostId == null) {
    let e;
    return <Tus className={className} />;
  }
  return <Ous className={className} hostId={remoteHostId} />;
}
