// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xqa`) / export `uM`.

export type FilesAndChatsPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gqa: (...args: unknown[]) => unknown;
  Jqa: (...args: unknown[]) => unknown;
  Kqa: (...args: unknown[]) => unknown;
  ND: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Rqa: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Yqa: (...args: unknown[]) => unknown;
  Zu: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fN: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  nN: (...args: unknown[]) => unknown;
  qqa: (...args: unknown[]) => unknown;
  tti: (...args: unknown[]) => unknown;
  vM: (...args: unknown[]) => unknown;
};

let peers: FilesAndChatsPeers | null = null;

/** Wire filesAndChats peers once companions land. */
export function setFilesAndChatsPeers(next: FilesAndChatsPeers): void {
  peers = next;
}

/**
 * Bundle export `uM` / internal `Xqa`.
 */
export function filesAndChats() {
  if (peers == null) {
    throw new Error("filesAndChats peers are not configured");
  }

  return peers.e(() => {
    Gqa = peers.c(), peers.Qt(), peers.Au(), peers.$u(), peers.vM(), peers.Vf(), peers.Rqa(), peers.ND(), peers.tti(), peers.jf(), peers.Uf(), peers.nN(), peers.fN(), Kqa = 50, qqa = new WeakMap(), Jqa = {
      sections: [{
        id: `files-and-chats`,
        title: peers.Zu({
          id: `composer.atMentionList.filesAndChats`,
          defaultMessage: `Files and chats`,
          description: `Section header shown before the user searches files and tasks in the @ mention list.`
        }),
        items: [],
        emptyState: peers.Zu({
          id: `composer.atMentionList.filesAndChats.emptyQuery`,
          defaultMessage: `Type to search files or chats`,
          description: `Shown in the files and tasks section when the @ mention query is empty.`
        }),
        isLoading: !1
      }]
    }, Yqa = {
      sections: []
    };
  });
}
