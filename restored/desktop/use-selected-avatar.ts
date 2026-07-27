// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `d5l`) / export `Ar`.

export type UseSelectedAvatarPeers = {
  useStore: (atom: unknown) => unknown;
  storeAtom: unknown;
  readSelectedAvatarId: (key: unknown) => unknown;
  selectedAvatarIdKey: unknown;
  resolveAvatar: (id: unknown, fallback: unknown) => unknown;
  writeSelectedAvatarId: (store: unknown, key: unknown, value: unknown) => void;
};

let peers: UseSelectedAvatarPeers | null = null;

/** Wire useSelectedAvatar peers once companions land. */
export function setUseSelectedAvatarPeers(next: UseSelectedAvatarPeers): void {
  peers = next;
}

/**
 * Bundle export `Ar` / internal `d5l`.
 * Resolve selected avatar id/object and expose a setter.
 */
export function useSelectedAvatar(fallback: unknown): {
  selectedAvatar: unknown;
  selectedAvatarId: unknown;
  setSelectedAvatarId: (value: unknown) => void;
} {
  if (peers == null) {
    throw new Error("UseSelectedAvatar peers are not configured");
  }
  const store = peers.useStore(peers.storeAtom);
  const selectedAvatarId = peers.readSelectedAvatarId(
    peers.selectedAvatarIdKey,
  );
  const selectedAvatar = peers.resolveAvatar(selectedAvatarId, fallback);
  const setSelectedAvatarId = (value: unknown) => {
    peers!.writeSelectedAvatarId(store, peers!.selectedAvatarIdKey, value);
  };
  return { selectedAvatar, selectedAvatarId, setSelectedAvatarId };
}
