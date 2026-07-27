// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kje`) / export `Wft`.

export type BindIntlProviderPeers = {
  Cje: (...args: unknown[]) => unknown;
  Gje: (...args: unknown[]) => unknown;
  Iu: (...args: unknown[]) => unknown;
  Lje: (...args: unknown[]) => unknown;
  Mu: (...args: unknown[]) => unknown;
  Rje: (...args: unknown[]) => unknown;
  Tje: (...args: unknown[]) => unknown;
  Uje: (...args: unknown[]) => unknown;
  Wje: (...args: unknown[]) => unknown;
  dje: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gAe: (...args: unknown[]) => unknown;
  gje: (...args: unknown[]) => unknown;
  lje: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pje: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sje: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};

let peers: BindIntlProviderPeers | null = null;

/** Wire bindIntlProvider peers once companions land. */
export function setBindIntlProviderPeers(next: BindIntlProviderPeers): void {
  peers = next;
}

/**
 * Bundle export `Wft` / internal `Kje`.
 */
export function bindIntlProvider() {
  if (peers == null) {
    throw new Error("bindIntlProvider peers are not configured");
  }

  return peers.e(() => {
    peers.Iu(), peers.sje(), Wje = peers.r(peers.o()), peers.gje(), peers.Rje(), peers.Tje(), Gje = function (e) {
      peers.Mu(peers.t, peers.e);
      function t() {
        var t = peers.e !== null && peers.e.apply(this, arguments) || this;
        return peers.t.cache = peers.gAe(), peers.t.state = {
          cache: peers.t.cache,
          intl: peers.Lje(peers.Uje(peers.t.props), peers.t.cache),
          prevConfig: peers.Uje(peers.t.props)
        }, peers.t;
      }
      return peers.t.getDerivedStateFromProps = function (e, t) {
        var n = peers.t.prevConfig,
          r = peers.t.cache,
          i = peers.Uje(peers.e);
        return peers.dje(n, i) ? null : {
          intl: peers.Lje(i, peers.r),
          prevConfig: i
        };
      }, peers.t.prototype.render = function () {
        return peers.lje(this.state.intl), peers.Wje.createElement(peers.Cje, {
          value: this.state.intl
        }, this.props.children);
      }, peers.t.displayName = `IntlProvider`, peers.t.defaultProps = peers.pje, peers.t;
    }(peers.Wje.PureComponent);
  });
}
