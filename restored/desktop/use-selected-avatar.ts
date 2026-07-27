// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `d5l`) / export `Ar`.

export type UseSelectedAvatarPeers = {
  GEe: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sp: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  f5l: (...args: unknown[]) => unknown;
  l5l: (...args: unknown[]) => unknown;
};

let peers: UseSelectedAvatarPeers | null = null;

/** Wire useSelectedAvatar peers once companions land. */
export function setUseSelectedAvatarPeers(next: UseSelectedAvatarPeers): void {
  peers = next;
}

/**
 * Bundle export `Ar` / internal `d5l`.
 */
export function useSelectedAvatar(e: unknown) {
  if (peers == null) {
    throw new Error("useSelectedAvatar peers are not configured");
  }

  let t = (0, peers.f5l.c)(9),
    n = peers.Io(peers.Q),
    r = peers.bp(peers.GEe.selectedAvatarId),
    i;
  t[0] !== e || t[1] !== r
    ? ((i = peers.l5l(r, e)), (t[0] = e), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === n
    ? (a = t[4])
    : ((a = (e) => {
        peers.Sp(n, peers.GEe.selectedAvatarId, e);
      }),
      (t[3] = n),
      (t[4] = a));
  let o;
  return (
    t[5] !== r || t[6] !== i || t[7] !== a
      ? ((o = {
          selectedAvatar: i,
          selectedAvatarId: r,
          setSelectedAvatarId: a,
        }),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
