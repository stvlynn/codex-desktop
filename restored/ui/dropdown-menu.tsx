// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KR`) / export `JB`.

export type BindDropdownMenuPartsPeers = {
  BR: (...args: unknown[]) => unknown;
  aXi: (...args: unknown[]) => unknown;
  dXi: (...args: unknown[]) => unknown;
  eXi: (...args: unknown[]) => unknown;
  fXi: (...args: unknown[]) => unknown;
  gXi: (...args: unknown[]) => unknown;
  hXi: (...args: unknown[]) => unknown;
  iXi: (...args: unknown[]) => unknown;
  lXi: (...args: unknown[]) => unknown;
  mXi: (...args: unknown[]) => unknown;
  oXi: (...args: unknown[]) => unknown;
  rXi: (...args: unknown[]) => unknown;
  tXi: (...args: unknown[]) => unknown;
  uXi: (...args: unknown[]) => unknown;
};

let peers: BindDropdownMenuPartsPeers | null = null;

/** Wire bindDropdownMenuParts peers once companions land. */
export function setBindDropdownMenuPartsPeers(next: BindDropdownMenuPartsPeers): void {
  peers = next;
}

/**
 * Bundle export `JB` / internal `KR`.
 */
export function bindDropdownMenuParts() {
  if (peers == null) {
    throw new Error("bindDropdownMenuParts peers are not configured");
  }

  return {
    Trigger: peers.eXi,
    Content: peers.tXi,
    Item: peers.BR,
    CheckboxItem: peers.rXi,
    ItemIcon: peers.iXi,
    Input: peers.aXi,
    SearchInput: peers.oXi,
    Separator: peers.lXi,
    SectionLabel: peers.uXi,
    Message: peers.dXi,
    Title: peers.hXi,
    SubmenuItem: peers.fXi,
    FlyoutSubmenuItem: peers.mXi,
    Section: peers.gXi
  };
}
