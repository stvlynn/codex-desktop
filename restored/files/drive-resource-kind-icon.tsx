// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ofl`) / export `_c`.

export type DriveResourceKindIconPeers = {
  Afl: (...args: unknown[]) => unknown;
  E9r: (...args: unknown[]) => unknown;
  K9r: (...args: unknown[]) => unknown;
  S9r: (...args: unknown[]) => unknown;
  kfl: (...args: unknown[]) => unknown;
  w9r: (...args: unknown[]) => unknown;
};
let peers: DriveResourceKindIconPeers | null = null;

/** Wire DriveResourceKindIcon peers once companions land. */
export function setDriveResourceKindIconPeers(
  next: DriveResourceKindIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_c` / internal `Ofl`.
 */
export function DriveResourceKindIcon(props: unknown) {
  const S9r = peers.S9r;
  const W9r = peers.w9r;
  const E9r = peers.E9r;
  const K9r = peers.K9r;
  if (peers == null) {
    throw new Error("DriveResourceKindIcon peers are not configured");
  }
  let { className, resourceKind } = props;
  switch (resourceKind) {
    case "document": {
      let e;
      return <S9r className={className} />;
    }
    case "spreadsheet": {
      let e;
      return <W9r className={className} />;
    }
    case "presentation": {
      let e;
      return <E9r className={className} />;
    }
    case "drive": {
      let e;
      return <K9r className={className} />;
    }
  }
}
