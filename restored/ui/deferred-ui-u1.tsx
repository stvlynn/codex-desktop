// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vk`) / export `U1`.

export type BindDeferredUiU1Peers = {
  Lxr: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  _k: (...args: unknown[]) => unknown;
  componentDidCatch: (...args: unknown[]) => unknown;
  componentDidUpdate: (...args: unknown[]) => unknown;
  dSr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fSr: (...args: unknown[]) => unknown;
  gSr: (...args: unknown[]) => unknown;
  hSr: (...args: unknown[]) => unknown;
  pSr: (...args: unknown[]) => unknown;
  render: (...args: unknown[]) => unknown;
  resetErrorBoundary: (...args: unknown[]) => unknown;
  state: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiU1Peers | null = null;

/** Wire bindDeferredUiU1 peers once companions land. */
export function setBindDeferredUiU1Peers(next: BindDeferredUiU1Peers): void {
  peers = next;
}

/**
 * Bundle export `U1` / internal `vk`.
 */
export function bindDeferredUiU1() {
  if (peers == null) {
    throw new Error("bindDeferredUiU1 peers are not configured");
  }
  return class extends peers.hSr.Component {
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
      let i = peers.Lxr(r, {
        boundaryName: this.props.name,
        componentStack: n,
      });
      this.props.onError && this.props.onError(r, n, i);
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
        error: r,
        componentStack: peers.t,
        eventId: i,
      });
    }
    resetErrorBoundary = () => {
      let { onReset } = this.props,
        { error, componentStack, eventId } = this.state;
      peers.e && peers.e(peers.t, componentStack ?? "", eventId);
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
            typeof r == "function"
              ? r({
                  error: n.error,
                  componentStack: n.componentStack ?? "",
                  eventId: n.eventId,
                  resetError: this.resetErrorBoundary,
                })
              : r),
          peers.hSr.isValidElement(peers.e) ? peers.e : null
        );
      }
      return typeof peers.t == "function" ? peers.t() : peers.t;
    }
  };
}
