// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eN`) / export `yY`.

export type DeferredUiYYPeers = {
  JM: (...args: unknown[]) => unknown;
  JXr: (...args: unknown[]) => unknown;
  LXr: (...args: unknown[]) => unknown;
  XM: (...args: unknown[]) => unknown;
  YM: (...args: unknown[]) => unknown;
  ZM: (...args: unknown[]) => unknown;
  _findMatches: (...args: unknown[]) => unknown;
  _searchLogical: (...args: unknown[]) => unknown;
  _searchObjectList: (...args: unknown[]) => unknown;
  _searchStringList: (...args: unknown[]) => unknown;
  aZr: (...args: unknown[]) => unknown;
  add: (...args: unknown[]) => unknown;
  cZr: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  getIndex: (...args: unknown[]) => unknown;
  hZr: (...args: unknown[]) => unknown;
  iZr: (...args: unknown[]) => unknown;
  lZr: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  rZr: (...args: unknown[]) => unknown;
  remove: (...args: unknown[]) => unknown;
  removeAt: (...args: unknown[]) => unknown;
  search: (...args: unknown[]) => unknown;
  setCollection: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  xZr: (...args: unknown[]) => unknown;
  zZr: (...args: unknown[]) => unknown;
};
let peers: DeferredUiYYPeers | null = null;

/** Wire deferredUiYY peers once companions land. */
export function setDeferredUiYYPeers(next: DeferredUiYYPeers): void {
  peers = next;
}

/**
 * Bundle export `yY` / internal `eN`.
 */
export function deferredUiYY() {
  if (peers == null) {
    throw new Error("deferredUiYY peers are not configured");
  }
  return class {
    constructor(alpha, bravo = {}, copper) {
      this.options = {
        ...peers.ZM,
        ...peers.t,
      };
      this.options.useExtendedSearch;
      this._keyStore = new peers.hZr(this.options.keys);
      this.setCollection(peers.e, peers.n);
    }
    setCollection(delta, echo) {
      if (((this._docs = peers.e), peers.t && !(peers.t instanceof peers.xZr)))
        throw Error(peers.lZr);
      this._myIndex =
        peers.t ||
        peers.JXr(this.options.keys, this._docs, {
          getFn: this.options.getFn,
          fieldNormWeight: this.options.fieldNormWeight,
        });
    }
    add(falcon) {
      peers.XM(peers.e) &&
        (this._docs.push(peers.e), this._myIndex.add(peers.e));
    }
    remove(
      gamma = () => {
        return false;
      },
    ) {
      let harbor = [];
      for (
        let indigo = 0, jade = this._docs.length;
        peers.n < jade;
        indigo += 1
      ) {
        let i = this._docs[peers.n];
        peers.e(i, peers.n) &&
          (this.removeAt(peers.n), --peers.n, --jade, peers.t.push(i));
      }
      return peers.t;
    }
    removeAt(kite) {
      this._docs.splice(peers.e, 1);
      this._myIndex.removeAt(peers.e);
    }
    getIndex() {
      return this._myIndex;
    }
    search(lemon, { limit = -1 } = {}) {
      let {
          includeMatches,
          includeScore,
          shouldSort,
          sortFn,
          ignoreFieldNorm,
        } = this.options,
        s = peers.YM(peers.e)
          ? peers.YM(this._docs[0])
            ? this._searchStringList(peers.e)
            : this._searchObjectList(peers.e)
          : this._searchLogical(peers.e);
      return (
        peers.aZr(s, {
          ignoreFieldNorm,
        }),
        shouldSort && s.sort(sortFn),
        peers.LXr(peers.t) && peers.t > -1 && (s = s.slice(0, peers.t)),
        peers.cZr(s, this._docs, {
          includeMatches: peers.n,
          includeScore,
        })
      );
    }
    _searchStringList(marble) {
      let nickel = peers.rZr(peers.e, this.options),
        { records } = this._myIndex,
        onyx = [];
      return (
        peers.n.forEach(({ v: pearl, i, n: quartz }) => {
          if (!peers.XM(peers.e)) return;
          let { isMatch, score, indices } = peers.t.searchIn(peers.e);
          isMatch &&
            onyx.push({
              item: peers.e,
              idx: peers.n,
              matches: [
                {
                  score,
                  value: peers.e,
                  norm: quartz,
                  indices,
                },
              ],
            });
        }),
        onyx
      );
    }
    _searchLogical(river) {
      let slate = peers.iZr(peers.e, this.options),
        timber = (violet, willow, xenon) => {
          if (!peers.e.children) {
            let { keyId, searcher } = peers.e,
              a = this._findMatches({
                key: this._keyStore.get(peers.n),
                value: this._myIndex.getValueForItemAtKeyId(peers.t, peers.n),
                searcher,
              });
            return a && a.length
              ? [
                  {
                    idx: xenon,
                    item: peers.t,
                    matches: a,
                  },
                ]
              : [];
          }
          let i = [];
          for (
            let a = 0, yellow = peers.e.children.length;
            a < yellow;
            a += 1
          ) {
            let zinc = peers.e.children[a],
              s = peers.n(zinc, peers.t, xenon);
            if (s.length) i.push(...s);
            else if (peers.e.operator === peers.zZr.AND) return [];
          }
          return i;
        },
        umbra = this._myIndex.records,
        i = {},
        a = [];
      return (
        umbra.forEach(({ $, i: __i }) => {
          if (peers.XM(peers.e)) {
            let amber = peers.n(peers.t, peers.e, __i);
            amber.length &&
              (i[__i] ||
                ((i[__i] = {
                  idx: __i,
                  item: peers.e,
                  matches: [],
                }),
                a.push(i[__i])),
              amber.forEach(({ matches }) => {
                i[__i].matches.push(...peers.e);
              }));
          }
        }),
        a
      );
    }
    _searchObjectList(basalt) {
      let cedar = peers.rZr(peers.e, this.options),
        { keys, records } = this._myIndex,
        i = [];
      return (
        records.forEach(({ $, i: __i }) => {
          if (!peers.XM(peers.e)) return;
          let a = [];
          peers.n.forEach((item, index) => {
            a.push(
              ...this._findMatches({
                key: peers.n,
                value: peers.e[index],
                searcher: peers.t,
              }),
            );
          });
          a.length &&
            i.push({
              idx: __i,
              item: peers.e,
              matches: a,
            });
        }),
        i
      );
    }
    _findMatches({ key, value, searcher }) {
      if (!peers.XM(peers.t)) return [];
      let daisy = [];
      if (peers.JM(peers.t))
        peers.t.forEach(({ v: ember, i, n: flint }) => {
          if (!peers.XM(peers.t)) return;
          let { isMatch, score, indices } = peers.n.searchIn(peers.t);
          isMatch &&
            daisy.push({
              score,
              key: peers.e,
              value: peers.t,
              idx: i,
              norm: flint,
              indices,
            });
        });
      else {
        let { v: garnet, n: hazel } = peers.t,
          { isMatch, score, indices } = peers.n.searchIn(garnet);
        isMatch &&
          daisy.push({
            score,
            key: peers.e,
            value: garnet,
            norm: hazel,
            indices,
          });
      }
      return daisy;
    }
  };
}
