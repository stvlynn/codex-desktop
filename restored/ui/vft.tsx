// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jBe`) / export `vft`.

export type VftPeers = {
  ABe: (...args: unknown[]) => unknown;
  DBe: (...args: unknown[]) => unknown;
  FMe: (...args: unknown[]) => unknown;
  OBe: (...args: unknown[]) => unknown;
  gBe: (...args: unknown[]) => unknown;
  kBe: (...args: unknown[]) => unknown;
  wBe: (...args: unknown[]) => unknown;
  xBe: (...args: unknown[]) => unknown;
};
let peers: VftPeers | null = null;

/** Wire vft peers once companions land. */
export function setVftPeers(next: VftPeers): void {
  peers = next;
}

/**
 * Bundle export `vft` / internal `jBe`.
 */
export const vft = ({ children, id, inherit = true }) => {
  const Provider = peers.FMe.Provider;
  if (peers == null) {
    throw new Error("vft peers are not configured");
  }
  let r = peers.OBe.useContext(peers.FMe),
    i = peers.OBe.useContext(peers.gBe),
    [a, o] = peers.xBe(),
    s = peers.OBe.useRef(null),
    c = r.id || i;
  s.current === null &&
    (peers.ABe(inherit) && c && (id = id ? c + "-" + id : c),
    (s.current = {
      id,
      group: (peers.kBe(inherit) && r.group) || peers.wBe(),
    }));
  let l = peers.OBe.useMemo(() => {
    return {
      ...s.current,
      forceRender: a,
    };
  }, [o]);
  return <Provider value={l}>{children}</Provider>;
};
