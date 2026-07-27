// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yk`) / export `W1`.

export type DeferredW1Peers = {
  $u: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Lxr: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  Vxr: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  _k: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  componentDidCatch: (...args: unknown[]) => unknown;
  componentDidUpdate: (...args: unknown[]) => unknown;
  dSr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fSr: (...args: unknown[]) => unknown;
  gSr: (...args: unknown[]) => unknown;
  gk: (...args: unknown[]) => unknown;
  hSr: (...args: unknown[]) => unknown;
  iO: (...args: unknown[]) => unknown;
  mSr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oSr: (...args: unknown[]) => unknown;
  pSr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  render: (...args: unknown[]) => unknown;
  resetErrorBoundary: (...args: unknown[]) => unknown;
  state: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  vk: (...args: unknown[]) => unknown;
};
let peers: DeferredW1Peers | null = null;

/** Wire deferredW1 peers once companions land. */
export function setDeferredW1Peers(next: DeferredW1Peers): void {
  peers = next;
}

/**
 * Bundle export `W1` / internal `yk`.
 */
export function deferredW1() {
  if (peers == null) {
    throw new Error("deferredW1 peers are not configured");
  }
  return peers.e(() => {
    mSr = peers.c();
    hSr = peers.r(peers.o(), 1);
    peers.$u();
    peers.Nw();
    peers.iO();
    peers.Vxr();
    peers.Gf();
    peers.oSr();
    peers.Pp();
    peers.gk();
    _k = peers.J();
    gSr = {
      componentStack: null,
      error: null,
      eventId: "",
    };
    vk = class extends peers.hSr.Component {
      state = peers.gSr;
      componentDidUpdate(e) {
        this.state.error == null ||
          peers.e.resetKey === this.props.resetKey ||
          this.resetErrorBoundary();
      }
      componentDidCatch(e, { componentStack }) {
        let n = peers.t ?? "",
          r = peers.dSr(peers.e) ? peers.e : Error(String(peers.e));
        if (peers.dSr(peers.e)) {
          let t = Error(peers.e.message);
          peers.t.name = `React ErrorBoundary ${peers.t.name}`;
          peers.t.stack = n;
          peers.fSr(peers.e, peers.t);
        }
        let i = peers.Lxr(peers.r, {
          boundaryName: this.props.name,
          componentStack: n,
        });
        this.props.onError && this.props.onError(peers.r, n, i);
        try {
          peers.Wf.error("error boundary", {
            safe: {
              name: this.props.name,
            },
            sensitive: {
              error: peers.e,
              componentStack: peers.t ?? "",
            },
          });
        } catch {}
        this.setState({
          error: peers.r,
          componentStack: peers.t,
          eventId: i,
        });
      }
      resetErrorBoundary = () => {
        let { onReset } = this.props,
          { error, componentStack, eventId } = this.state;
        peers.e && peers.e(peers.t, componentStack ?? "", peers.r);
        this.setState(peers.gSr);
      };
      render() {
        let { fallback, children } = this.props,
          n = this.state,
          r =
            peers.e ??
            ((e) => {
              return (
                <peers.pSr
                  resetError={() => {
                    return peers.e.resetError();
                  }}
                />
              );
            });
        if (n.error) {
          let e;
          return (
            (e =
              typeof peers.r == "function"
                ? peers.r({
                    error: n.error,
                    componentStack: n.componentStack ?? "",
                    eventId: n.eventId,
                    resetError: this.resetErrorBoundary,
                  })
                : peers.r),
            peers.hSr.isValidElement(peers.e) ? peers.e : null
          );
        }
        return typeof peers.t == "function" ? peers.t() : peers.t;
      }
    };
  });
}
