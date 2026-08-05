// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RM`) / export `JY`.

export type CopilotDefaultModelPeers = {
  Au: (...args: unknown[]) => unknown;
  CA: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  V_: (...args: unknown[]) => unknown;
  _Yr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hYr: (...args: unknown[]) => unknown;
};

let peers: CopilotDefaultModelPeers | null = null;

/** Wire copilotDefaultModel peers once companions land. */
export function setCopilotDefaultModelPeers(
  next: CopilotDefaultModelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `JY` / internal `RM`.
 */
export function copilotDefaultModel() {
  if (peers == null) {
    throw new Error("copilotDefaultModel peers are not configured");
  }

  return peers.e(() => {
    ((_Yr = peers.c()),
      peers.Ho(),
      peers.Au(),
      peers.DD(),
      peers.hYr(),
      peers.CA(),
      peers.OE(),
      peers.K_(),
      peers.V_());
  });
}
