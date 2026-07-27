// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z8c`) / export `xl`.

export type AnsiCodeBlockPeers = {
  J8c: (...args: unknown[]) => unknown;
  Q8c: (...args: unknown[]) => unknown;
  e5c: (...args: unknown[]) => unknown;
  n5c: (...args: unknown[]) => unknown;
  r5c: (...args: unknown[]) => unknown;
  t5c: (...args: unknown[]) => unknown;
};
let peers: AnsiCodeBlockPeers | null = null;

/** Wire AnsiCodeBlock peers once companions land. */
export function setAnsiCodeBlockPeers(next: AnsiCodeBlockPeers): void {
  peers = next;
}

/**
 * Bundle export `xl` / internal `Z8c`.
 */
export function AnsiCodeBlock(props: unknown) {
  if (peers == null) {
    throw new Error("AnsiCodeBlock peers are not configured");
  }
  let { children, className } = props,
    i,
    a;
  {
    let e = peers.n5c.default.ansiToJson(peers.J8c(peers.e5c(children)), {
      json: true,
      remove_empty: true,
      use_classes: true,
    });
    i = className;
    a = e.map(peers.Q8c);
  }
  return <code className={i}>{a}</code>;
}
