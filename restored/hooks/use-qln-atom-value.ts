// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Aln`) / export `V7`.

export type UseQlnAtomValuePeers = {
  useAtomValue: (atom: unknown) => unknown;
  qlnAtom: unknown;
};

let peers: UseQlnAtomValuePeers | null = null;

/** Wire qln atom-value peers once companions land. */
export function setUseQlnAtomValuePeers(next: UseQlnAtomValuePeers): void {
  peers = next;
}

/**
 * Bundle export `V7` / internal `Aln`.
 * Read the qln atom via useAtomValue.
 */
export function useQlnAtomValue(): unknown {
  if (peers == null) {
    throw new Error("UseQlnAtomValue peers are not configured");
  }
  return peers.useAtomValue(peers.qlnAtom);
}
