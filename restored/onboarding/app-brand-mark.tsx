// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `esu`) / export `Dn`.

export type AppBrandMarkPeers = {
  El: (...args: unknown[]) => unknown;
  Qou: (...args: unknown[]) => unknown;
  You: (...args: unknown[]) => unknown;
  nsu: (...args: unknown[]) => unknown;
  tsu: (...args: unknown[]) => unknown;
};
let peers: AppBrandMarkPeers | null = null;

/** Wire AppBrandMark peers once companions land. */
export function setAppBrandMarkPeers(next: AppBrandMarkPeers): void {
  peers = next;
}

/**
 * Bundle export `Dn` / internal `esu`.
 */
export function AppBrandMark(props: unknown) {
  const Qou = peers.Qou;
  if (peers == null) {
    throw new Error("AppBrandMark peers are not configured");
  }
  let { appBrand, className } = props;
  return appBrand === peers.El.ChatGPT ? (
    <Qou aria-hidden="true" className={className} />
  ) : (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      src={peers.You}
    />
  );
}
