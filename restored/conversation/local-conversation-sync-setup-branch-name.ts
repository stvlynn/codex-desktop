// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IYo`) / export `GE`.

export type BindLocalConversationSyncSetupBranchNamePeers = {
  AYo: (...args: unknown[]) => unknown;
  DYo: (...args: unknown[]) => unknown;
  EYo: (...args: unknown[]) => unknown;
  FYo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JJ: (...args: unknown[]) => unknown;
  KJ: (...args: unknown[]) => unknown;
  MYo: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  NYo: (...args: unknown[]) => unknown;
  OYo: (...args: unknown[]) => unknown;
  PYo: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  TYo: (...args: unknown[]) => unknown;
  Wq: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cA: (...args: unknown[]) => unknown;
  c_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gk: (...args: unknown[]) => unknown;
  jYo: (...args: unknown[]) => unknown;
  kYo: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qJ: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  wYo: (...args: unknown[]) => unknown;
};

let peers: BindLocalConversationSyncSetupBranchNamePeers | null = null;

/** Wire bindLocalConversationSyncSetupBranchName peers once companions land. */
export function setBindLocalConversationSyncSetupBranchNamePeers(
  next: BindLocalConversationSyncSetupBranchNamePeers,
): void {
  peers = next;
}

/**
 * Bundle export `GE` / internal `IYo`.
 */
export function bindLocalConversationSyncSetupBranchName() {
  if (peers == null) {
    throw new Error(
      "bindLocalConversationSyncSetupBranchName peers are not configured",
    );
  }

  return peers.e(() => {
    ((KJ = peers.c()),
      peers.sd(),
      peers.af(),
      (FYo = peers.r(peers.o(), 1)),
      peers.Pp(),
      peers.cA(),
      peers.Mp(),
      peers.gk(),
      peers.Wq(),
      peers.c_(),
      (qJ = peers.J()),
      (JJ = {
        Root: peers.wYo,
        Header: peers.TYo,
        Title: peers.EYo,
        RowContainer: peers.DYo,
        Footer: peers.OYo,
        Row: peers.kYo,
        KeyValueRow: peers.AYo,
        IconButton: peers.jYo,
        FileRow: peers.MYo,
        FileSection: peers.NYo,
        Expanded: peers.PYo,
      }));
  });
}
