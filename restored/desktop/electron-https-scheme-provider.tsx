// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dFa`) / export `yN`.

export type ElectronHttpsSchemeProviderPeers = {
  DH: (...args: unknown[]) => unknown;
  EFa: (...args: unknown[]) => unknown;
  cSe: (...args: unknown[]) => unknown;
  fFa: (...args: unknown[]) => unknown;
  hk: (...args: unknown[]) => unknown;
};
let peers: ElectronHttpsSchemeProviderPeers | null = null;

/** Wire ElectronHttpsSchemeProvider peers once companions land. */
export function setElectronHttpsSchemeProviderPeers(
  next: ElectronHttpsSchemeProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yN` / internal `dFa`.
 */
export function ElectronHttpsSchemeProvider(props: unknown) {
  const Hk = peers.hk;
  const FFa = peers.fFa;
  if (peers == null) {
    throw new Error("ElectronHttpsSchemeProvider peers are not configured");
  }
  let n = (
    <Hk electron={true}>
      <FFa {...props} scheme={peers.cSe} />
    </Hk>
  );
  let r = (
    <Hk browser={true} chromeExtension={true} extension={true}>
      <FFa {...props} scheme="https" />
    </Hk>
  );
  return (
    <>
      {n}
      {r}
    </>
  );
}
