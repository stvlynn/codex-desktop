// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `d1l`) / export `Ti`.

export type BindBindChatgpt5Peers = {
  $Qe: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  FD: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Mp: (...args: unknown[]) => unknown;
  NZ: (...args: unknown[]) => unknown;
  Um: (...args: unknown[]) => unknown;
  ZTs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c1l: (...args: unknown[]) => unknown;
  d7: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  l1l: (...args: unknown[]) => unknown;
  qR: (...args: unknown[]) => unknown;
  q_s: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  rQ: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  t1l: (...args: unknown[]) => unknown;
  u1l: (...args: unknown[]) => unknown;
};

let peers: BindBindChatgpt5Peers | null = null;

/** Wire bindBindChatgpt5 peers once companions land. */
export function setBindBindChatgpt5Peers(next: BindBindChatgpt5Peers): void {
  peers = next;
}

/**
 * Bundle export `Ti` / internal `d1l`.
 */
export function bindBindChatgpt5() {
  if (peers == null) {
    throw new Error("bindBindChatgpt5 peers are not configured");
  }

  return peers.e(() => {
    c1l = peers.c(), peers.sd(), peers.$u(), peers.$Qe(), peers.qR(), peers.fb(), peers.FD(), peers.Mp(), peers.rQ(), peers.Um(), peers.ZTs(), peers.qx(), peers.q_s(), peers.NZ(), peers.t1l(), d7 = peers.J(), l1l = `icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100`, u1l = `https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b`;
  });
}
