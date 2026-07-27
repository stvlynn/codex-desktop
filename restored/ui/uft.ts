// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gje`) / export `Uft`.

export type UftPeers = {
  Cje: (...args: unknown[]) => unknown;
  Lje: (...args: unknown[]) => unknown;
  Mu: (...args: unknown[]) => unknown;
  Uje: (...args: unknown[]) => unknown;
  Wje: (...args: unknown[]) => unknown;
  dje: (...args: unknown[]) => unknown;
  gAe: (...args: unknown[]) => unknown;
  lje: (...args: unknown[]) => unknown;
  pje: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};

let peers: UftPeers | null = null;

/** Wire uft peers once companions land. */
export function setUftPeers(next: UftPeers): void {
  peers = next;
}

/**
 * Bundle export `Uft` / internal `Gje`.
 */
export function uft() {
  if (peers == null) {
    throw new Error("uft peers are not configured");
  }

  return (function (e) {
    peers.Mu(peers.t, e);
    function t() {
      var t = (e !== null && e.apply(this, arguments)) || this;
      return (
        (peers.t.cache = peers.gAe()),
        (peers.t.state = {
          cache: peers.t.cache,
          intl: peers.Lje(peers.Uje(peers.t.props), peers.t.cache),
          prevConfig: peers.Uje(peers.t.props),
        }),
        peers.t
      );
    }
    return (
      (peers.t.getDerivedStateFromProps = function (e, t) {
        var n = peers.t.prevConfig,
          r = peers.t.cache,
          i = peers.Uje(e);
        return peers.dje(n, i)
          ? null
          : {
              intl: peers.Lje(i, r),
              prevConfig: i,
            };
      }),
      (peers.t.prototype.render = function () {
        return (
          peers.lje(this.state.intl),
          peers.Wje.createElement(
            peers.Cje,
            {
              value: this.state.intl,
            },
            this.props.children,
          )
        );
      }),
      (peers.t.displayName = `IntlProvider`),
      (peers.t.defaultProps = peers.pje),
      peers.t
    );
  })(peers.Wje.PureComponent);
}
