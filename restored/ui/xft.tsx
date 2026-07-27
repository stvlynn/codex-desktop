// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mBe`) / export `xft`.

export type XftPeers = {
  FMe: (...args: unknown[]) => unknown;
  Gd: (...args: unknown[]) => unknown;
  HMe: (...args: unknown[]) => unknown;
  IMe: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LMe: (...args: unknown[]) => unknown;
  UMe: (...args: unknown[]) => unknown;
  cBe: (...args: unknown[]) => unknown;
  dBe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fBe: (...args: unknown[]) => unknown;
  nBe: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pBe: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rBe: (...args: unknown[]) => unknown;
  sBe: (...args: unknown[]) => unknown;
  tBe: (...args: unknown[]) => unknown;
  uBe: (...args: unknown[]) => unknown;
  ud: (...args: unknown[]) => unknown;
};
let peers: XftPeers | null = null;

/** Wire xft peers once companions land. */
export function setXftPeers(next: XftPeers): void {
  peers = next;
}

/**
 * Bundle export `xft` / internal `mBe`.
 */
export function xft() {
  if (peers == null) {
    throw new Error("xft peers are not configured");
  }
  return peers.e(() => {
    fBe = peers.J();
    pBe = peers.r(peers.o(), 1);
    peers.IMe();
    peers.ud();
    peers.UMe();
    peers.nBe();
    peers.sBe();
    peers.dBe();
    Gd = ({
      children,
      custom,
      initial = true,
      onExitComplete,
      presenceAffectsLayout = true,
      mode = "sync",
      propagate = false,
      anchorX = "left",
      root,
    }) => {
      let [l, u] = peers.rBe(peers.o),
        d = peers.pBe.useMemo(() => {
          return peers.cBe(peers.e);
        }, [peers.e]),
        f = peers.o && !l ? [] : d.map(peers.uBe),
        p = peers.pBe.useRef(true),
        m = peers.pBe.useRef(d),
        h = peers.LMe(() => {
          return new Map();
        }),
        [g, _] = peers.pBe.useState(d),
        [v, y] = peers.pBe.useState(d);
      peers.HMe(() => {
        p.current = false;
        m.current = d;
        for (let e = 0; peers.e < v.length; peers.e++) {
          let t = peers.uBe(v[peers.e]);
          f.includes(t) ? h.delete(t) : h.get(t) !== true && h.set(t, false);
        }
      }, [v, f.length, f.join("-")]);
      let b = [];
      if (d !== g) {
        let e = [...d];
        for (let t = 0; t < v.length; t++) {
          let n = v[t],
            r = peers.uBe(n);
          f.includes(peers.r) || (peers.e.splice(t, 0, n), b.push(n));
        }
        return (
          mode === "wait" && b.length && (e = b),
          y(peers.cBe(peers.e)),
          _(d),
          null
        );
      }
      let { forceRender } = peers.pBe.useContext(peers.FMe);
      return (
        <>
          {v.map((item) => {
            const TBe = peers.tBe;
            let g = peers.uBe(peers.e),
              _ = peers.o && !l ? false : d === v || f.includes(g);
            return (
              <TBe
                key={g}
                isPresent={_}
                initial={!p.current || initial ? undefined : false}
                custom={custom}
                presenceAffectsLayout={presenceAffectsLayout}
                mode={mode}
                root={root}
                onExitComplete={
                  _
                    ? undefined
                    : () => {
                        if (h.has(g)) h.set(g, true);
                        else return;
                        let e = true;
                        h.forEach((_item) => {
                          _item || (e = false);
                        });
                        peers.e &&
                          (forceRender?.(),
                          y(m.current),
                          peers.o && u?.(),
                          peers.r && peers.r());
                      }
                }
                anchorX={anchorX}
              >
                {peers.e}
              </TBe>
            );
          })}
        </>
      );
    };
  });
}
