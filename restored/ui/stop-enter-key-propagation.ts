// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tY`) / export `zE`.

export type StopEnterKeyPropagationPeers = {
  $J: (...args: unknown[]) => unknown;
  $Yo: (...args: unknown[]) => unknown;
  $m: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QJ: (...args: unknown[]) => unknown;
  QYo: (...args: unknown[]) => unknown;
  XH: (...args: unknown[]) => unknown;
  XYi: (...args: unknown[]) => unknown;
  XYo: (...args: unknown[]) => unknown;
  ZJ: (...args: unknown[]) => unknown;
  ZYo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eXo: (...args: unknown[]) => unknown;
  eY: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  vA: (...args: unknown[]) => unknown;
  zR: (...args: unknown[]) => unknown;
  zm: (...args: unknown[]) => unknown;
};

let peers: StopEnterKeyPropagationPeers | null = null;

/** Wire stopEnterKeyPropagation peers once companions land. */
export function setStopEnterKeyPropagationPeers(
  next: StopEnterKeyPropagationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zE` / internal `tY`.
 */
export function stopEnterKeyPropagation() {
  if (peers == null) {
    throw new Error("stopEnterKeyPropagation peers are not configured");
  }

  return peers.e(() => {
    ((ZJ = peers.c()),
      peers.sd(),
      peers.XH(),
      peers.zm(),
      peers.zR(),
      peers.XYi(),
      peers.vA(),
      peers.$m(),
      (QJ = peers.J()),
      ($J = {
        content: `flex w-full items-center gap-1.5`,
        icon: `shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100 group-aria-[selected=true]:opacity-100`,
        itemBase: `text-token-foreground outline-hidden rounded-lg px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm`,
        itemInteractive: `group hover:bg-token-list-hover-background focus:bg-token-list-hover-background aria-[selected=true]:bg-token-list-hover-background cursor-interaction`,
      }),
      (eY = {
        Action: peers.eXo,
        Input: peers.ZYo,
        Item: peers.$Yo,
        List: peers.QYo,
        Root: peers.XYo,
      }));
  });
}
