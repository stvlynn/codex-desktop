// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BJ`) / export `XE`.

export type BindPopoverMenuPartsPeers = {
  Bqo: (...args: unknown[]) => unknown;
  DJo: (...args: unknown[]) => unknown;
  EJo: (...args: unknown[]) => unknown;
  Fqo: (...args: unknown[]) => unknown;
  Gqo: (...args: unknown[]) => unknown;
  Hqo: (...args: unknown[]) => unknown;
  Iqo: (...args: unknown[]) => unknown;
  Lqo: (...args: unknown[]) => unknown;
  Nqo: (...args: unknown[]) => unknown;
  OJo: (...args: unknown[]) => unknown;
  Pqo: (...args: unknown[]) => unknown;
  Rqo: (...args: unknown[]) => unknown;
  TJo: (...args: unknown[]) => unknown;
  Uqo: (...args: unknown[]) => unknown;
  Vqo: (...args: unknown[]) => unknown;
  Wqo: (...args: unknown[]) => unknown;
  lJo: (...args: unknown[]) => unknown;
  rJo: (...args: unknown[]) => unknown;
  wJo: (...args: unknown[]) => unknown;
  zqo: (...args: unknown[]) => unknown;
};

let peers: BindPopoverMenuPartsPeers | null = null;

/** Wire bindPopoverMenuParts peers once companions land. */
export function setBindPopoverMenuPartsPeers(next: BindPopoverMenuPartsPeers): void {
  peers = next;
}

/**
 * Bundle export `XE` / internal `BJ`.
 */
export function bindPopoverMenuParts() {
  if (peers == null) {
    throw new Error("bindPopoverMenuParts peers are not configured");
  }

  return {
    Content: peers.EJo,
    HeaderButton: peers.DJo,
    IconButton: peers.Gqo,
    Item: peers.Nqo,
    ItemActionLink: peers.Uqo,
    ItemActions: peers.Hqo,
    ItemAvatarGroup: peers.zqo,
    ItemAvatarButton: peers.Rqo,
    ItemButton: peers.Pqo,
    ItemGroup: peers.Iqo,
    ItemLabel: peers.Bqo,
    ItemLeading: peers.Lqo,
    ItemMeta: peers.Vqo,
    ItemTrigger: peers.Fqo,
    List: peers.rJo,
    PopoverContent: peers.TJo,
    Root: peers.wJo,
    Section: peers.lJo,
    SectionActions: peers.Wqo,
    SectionCount: peers.OJo
  };
}

/**
 * `XE` is consumed as a compound-component namespace (`PopoverMenu.Item`,
 * `PopoverMenu.Content`, …) — proxy each property access through
 * `bindPopoverMenuParts()` so the peers indirection stays lazy.
 */
export const PopoverMenu: ReturnType<typeof bindPopoverMenuParts> = new Proxy(
  {} as ReturnType<typeof bindPopoverMenuParts>,
  {
    get(_target, prop) {
      return bindPopoverMenuParts()[prop as keyof ReturnType<typeof bindPopoverMenuParts>];
    },
  },
);
