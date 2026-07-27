// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vE`) / export `l3`.

export type UseInvalidateCustomAvatarsPeers = {
  U8n: (...args: unknown[]) => unknown;
  W8n: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseInvalidateCustomAvatarsPeers | null = null;

/** Wire useInvalidateCustomAvatars peers once companions land. */
export function setUseInvalidateCustomAvatarsPeers(next: UseInvalidateCustomAvatarsPeers): void {
  peers = next;
}

/**
 * Bundle export `l3` / internal `vE`.
 */
export function useInvalidateCustomAvatars() {
  if (peers == null) {
    throw new Error("useInvalidateCustomAvatars peers are not configured");
  }

  let e = (0, peers.W8n.c)(2),
    t = peers.rt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = async (e) => {
          await peers.U8n(t, e);
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
