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
    constructor(e, t = {}, n) {
      this.options = {
        ...peers.ZM,
        ...peers.t,
      };
      this.options.useExtendedSearch;
      this._keyStore = new peers.hZr(this.options.keys);
      this.setCollection(peers.e, peers.n);
    }
    setCollection(e, t) {
      if (((this._docs = peers.e), peers.t && !(peers.t instanceof peers.xZr)))
        throw Error(peers.lZr);
      this._myIndex =
        peers.t ||
        peers.JXr(this.options.keys, this._docs, {
          getFn: this.options.getFn,
          fieldNormWeight: this.options.fieldNormWeight,
        });
    }
    add(e) {
      peers.XM(peers.e) &&
        (this._docs.push(peers.e), this._myIndex.add(peers.e));
    }
    remove(
      e = () => {
        return false;
      },
    ) {
      let t = [];
      for (let n = 0, r = this._docs.length; peers.n < r; n += 1) {
        let i = this._docs[peers.n];
        peers.e(i, peers.n) &&
          (this.removeAt(peers.n), --peers.n, --r, peers.t.push(i));
      }
      return peers.t;
    }
    removeAt(e) {
      this._docs.splice(peers.e, 1);
      this._myIndex.removeAt(peers.e);
    }
    getIndex() {
      return this._myIndex;
    }
    search(e, { limit = -1 } = {}) {
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
    _searchStringList(e) {
      let t = peers.rZr(peers.e, this.options),
        { records } = this._myIndex,
        r = [];
      return (
        peers.n.forEach(({ v, i, n }) => {
          if (!peers.XM(peers.e)) return;
          let { isMatch, score, indices } = peers.t.searchIn(peers.e);
          isMatch &&
            r.push({
              item: peers.e,
              idx: peers.n,
              matches: [
                {
                  score,
                  value: peers.e,
                  norm: n,
                  indices,
                },
              ],
            });
        }),
        r
      );
    }
    _searchLogical(e) {
      let t = peers.iZr(peers.e, this.options),
        n = (e, t, r) => {
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
                    idx: r,
                    item: peers.t,
                    matches: a,
                  },
                ]
              : [];
          }
          let i = [];
          for (let a = 0, o = peers.e.children.length; a < o; a += 1) {
            let o = peers.e.children[a],
              s = peers.n(o, peers.t, r);
            if (s.length) i.push(...s);
            else if (peers.e.operator === peers.zZr.AND) return [];
          }
          return i;
        },
        r = this._myIndex.records,
        i = {},
        a = [];
      return (
        r.forEach(({ $, i: __i }) => {
          if (peers.XM(peers.e)) {
            let o = peers.n(peers.t, peers.e, __i);
            o.length &&
              (i[__i] ||
                ((i[__i] = {
                  idx: __i,
                  item: peers.e,
                  matches: [],
                }),
                a.push(i[__i])),
              o.forEach(({ matches }) => {
                i[__i].matches.push(...peers.e);
              }));
          }
        }),
        a
      );
    }
    _searchObjectList(e) {
      let t = peers.rZr(peers.e, this.options),
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
      let r = [];
      if (peers.JM(peers.t))
        peers.t.forEach(({ v, i, n }) => {
          if (!peers.XM(peers.t)) return;
          let { isMatch, score, indices } = peers.n.searchIn(peers.t);
          isMatch &&
            r.push({
              score,
              key: peers.e,
              value: peers.t,
              idx: i,
              norm: n,
              indices,
            });
        });
      else {
        let { v, n } = peers.t,
          { isMatch, score, indices } = peers.n.searchIn(v);
        isMatch &&
          r.push({
            score,
            key: peers.e,
            value: v,
            norm: n,
            indices,
          });
      }
      return r;
    }
  };
}
