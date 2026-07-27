// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GZr`) / export `bY`.

export type DeferredUibYPeers = {
  $M: (...args: unknown[]) => unknown;
  $Xr: (...args: unknown[]) => unknown;
  AZr: (...args: unknown[]) => unknown;
  BZr: (...args: unknown[]) => unknown;
  CZr: (...args: unknown[]) => unknown;
  DZr: (...args: unknown[]) => unknown;
  EZr: (...args: unknown[]) => unknown;
  FZr: (...args: unknown[]) => unknown;
  HZr: (...args: unknown[]) => unknown;
  IZr: (...args: unknown[]) => unknown;
  JM: (...args: unknown[]) => unknown;
  JXr: (...args: unknown[]) => unknown;
  KXr: (...args: unknown[]) => unknown;
  LXr: (...args: unknown[]) => unknown;
  LZr: (...args: unknown[]) => unknown;
  MZr: (...args: unknown[]) => unknown;
  NZr: (...args: unknown[]) => unknown;
  OZr: (...args: unknown[]) => unknown;
  PZr: (...args: unknown[]) => unknown;
  QM: (...args: unknown[]) => unknown;
  QXr: (...args: unknown[]) => unknown;
  RZr: (...args: unknown[]) => unknown;
  SZr: (...args: unknown[]) => unknown;
  TZr: (...args: unknown[]) => unknown;
  UXr: (...args: unknown[]) => unknown;
  UZr: (...args: unknown[]) => unknown;
  VXr: (...args: unknown[]) => unknown;
  VZr: (...args: unknown[]) => unknown;
  WZr: (...args: unknown[]) => unknown;
  XM: (...args: unknown[]) => unknown;
  YM: (...args: unknown[]) => unknown;
  YXr: (...args: unknown[]) => unknown;
  ZM: (...args: unknown[]) => unknown;
  _Zr: (...args: unknown[]) => unknown;
  _addObject: (...args: unknown[]) => unknown;
  _addString: (...args: unknown[]) => unknown;
  _findMatches: (...args: unknown[]) => unknown;
  _searchLogical: (...args: unknown[]) => unknown;
  _searchObjectList: (...args: unknown[]) => unknown;
  _searchStringList: (...args: unknown[]) => unknown;
  aZr: (...args: unknown[]) => unknown;
  cZr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eN: (...args: unknown[]) => unknown;
  eZr: (...args: unknown[]) => unknown;
  gZr: (...args: unknown[]) => unknown;
  hZr: (...args: unknown[]) => unknown;
  iZr: (...args: unknown[]) => unknown;
  jZr: (...args: unknown[]) => unknown;
  kZr: (...args: unknown[]) => unknown;
  lZr: (...args: unknown[]) => unknown;
  nZr: (...args: unknown[]) => unknown;
  qXr: (...args: unknown[]) => unknown;
  rZr: (...args: unknown[]) => unknown;
  tZr: (...args: unknown[]) => unknown;
  vZr: (...args: unknown[]) => unknown;
  wZr: (...args: unknown[]) => unknown;
  xZr: (...args: unknown[]) => unknown;
  yZr: (...args: unknown[]) => unknown;
  zXr: (...args: unknown[]) => unknown;
  zZr: (...args: unknown[]) => unknown;
};
let peers: DeferredUibYPeers | null = null;

/** Wire deferredUibY peers once companions land. */
export function setDeferredUibYPeers(next: DeferredUibYPeers): void {
  peers = next;
}

/**
 * Bundle export `bY` / internal `GZr`.
 */
export function deferredUibY() {
  if (peers == null) {
    throw new Error("deferredUibY peers are not configured");
  }
  return peers.e(() => {
    lZr = "Incorrect 'index' type";
    uZr = (e) => {
      return `Invalid value for key ${e}`;
    };
    dZr = (e) => {
      return `Pattern length exceeds max of ${e}.`;
    };
    fZr = (e) => {
      return `Missing ${e} property in key`;
    };
    pZr = (e) => {
      return `Property 'weight' in key '${e}' must be a positive integer`;
    };
    mZr = Object.prototype.hasOwnProperty;
    hZr = class {
      constructor(e) {
        this._keys = [];
        this._keyMap = {};
        let t = 0;
        e.forEach((item) => {
          let n = peers.UXr(item);
          this._keys.push(n);
          this._keyMap[n.id] = n;
          t += n.weight;
        });
        this._keys.forEach((item) => {
          item.weight /= t;
        });
      }
      get(e) {
        return this._keyMap[e];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    };
    gZr = {
      includeMatches: false,
      findAllMatches: false,
      minMatchCharLength: 1,
    };
    _Zr = {
      isCaseSensitive: false,
      ignoreDiacritics: false,
      includeScore: false,
      keys: [],
      shouldSort: true,
      sortFn: (e, t) => {
        return e.score === t.score
          ? e.idx < t.idx
            ? -1
            : 1
          : e.score < t.score
            ? -1
            : 1;
      },
    };
    vZr = {
      location: 0,
      threshold: 0.6,
      distance: 100,
    };
    yZr = {
      useExtendedSearch: false,
      getFn: peers.KXr,
      ignoreLocation: false,
      ignoreFieldNorm: false,
      fieldNormWeight: 1,
    };
    ZM = {
      ...peers._Zr,
      ...peers.gZr,
      ...peers.vZr,
      ...peers.yZr,
    };
    bZr = /[^ ]+/g;
    xZr = class {
      constructor({
        getFn = peers.ZM.getFn,
        fieldNormWeight = peers.ZM.fieldNormWeight,
      } = {}) {
        this.norm = peers.qXr(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
      }
      setSources(e = []) {
        this.docs = e;
      }
      setIndexRecords(e = []) {
        this.records = e;
      }
      setKeys(e = []) {
        this.keys = e;
        this._keysMap = {};
        e.forEach((item, index) => {
          this._keysMap[item.id] = index;
        });
      }
      create() {
        this.isCreated ||
          !this.docs.length ||
          ((this.isCreated = true),
          peers.YM(this.docs[0])
            ? this.docs.forEach((item, index) => {
                this._addString(item, index);
              })
            : this.docs.forEach((item, index) => {
                this._addObject(item, index);
              }),
          this.norm.clear());
      }
      add(e) {
        let t = this.size();
        peers.YM(e) ? this._addString(e, t) : this._addObject(e, t);
      }
      removeAt(e) {
        this.records.splice(e, 1);
        for (let t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
      }
      getValueForItemAtKeyId(e, t) {
        return e[this._keysMap[t]];
      }
      size() {
        return this.records.length;
      }
      _addString(e, t) {
        if (!peers.XM(e) || peers.VXr(e)) return;
        let n = {
          v: e,
          i: t,
          n: this.norm.get(e),
        };
        this.records.push(n);
      }
      _addObject(e, t) {
        let n = {
          i: t,
          $: {},
        };
        this.keys.forEach((item, index) => {
          let i = item.getFn ? item.getFn(e) : this.getFn(e, item.path);
          if (peers.XM(i)) {
            if (peers.JM(i)) {
              let e = [],
                t = [
                  {
                    nestedArrIndex: -1,
                    value: i,
                  },
                ];
              for (; t.length; ) {
                let { nestedArrIndex, value } = t.pop();
                if (peers.XM(value))
                  if (peers.YM(value) && !peers.VXr(value)) {
                    let t = {
                      v: value,
                      i: nestedArrIndex,
                      n: this.norm.get(value),
                    };
                    e.push(t);
                  } else
                    peers.JM(value) &&
                      value.forEach((_item, _index) => {
                        t.push({
                          nestedArrIndex: _index,
                          value: _item,
                        });
                      });
              }
              n.$[index] = e;
            } else if (peers.YM(i) && !peers.VXr(i)) {
              let e = {
                v: i,
                n: this.norm.get(i),
              };
              n.$[index] = e;
            }
          }
        });
        this.records.push(n);
      }
      toJSON() {
        return {
          keys: this.keys,
          records: this.records,
        };
      }
    };
    QM = 32;
    SZr = String.prototype.normalize
      ? (e) => {
          return e
            .normalize("NFD")
            .replace(
              /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,
              "",
            );
        }
      : (e) => {
          return e;
        };
    CZr = class {
      constructor(
        e,
        {
          location = peers.ZM.location,
          threshold = peers.ZM.threshold,
          distance = peers.ZM.distance,
          includeMatches = peers.ZM.includeMatches,
          findAllMatches = peers.ZM.findAllMatches,
          minMatchCharLength = peers.ZM.minMatchCharLength,
          isCaseSensitive = peers.ZM.isCaseSensitive,
          ignoreDiacritics = peers.ZM.ignoreDiacritics,
          ignoreLocation = peers.ZM.ignoreLocation,
        } = {},
      ) {
        if (
          ((this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreDiacritics,
            ignoreLocation,
          }),
          (e = isCaseSensitive ? e : e.toLowerCase()),
          (e = ignoreDiacritics ? peers.SZr(e) : e),
          (this.pattern = e),
          (this.chunks = []),
          !this.pattern.length)
        )
          return;
        let u = (e, t) => {
            this.chunks.push({
              pattern: e,
              alphabet: peers.$Xr(e),
              startIndex: t,
            });
          },
          d = this.pattern.length;
        if (d > peers.QM) {
          let e = 0,
            t = d % peers.QM,
            n = d - t;
          for (; e < n; ) {
            u(this.pattern.substr(e, peers.QM), e);
            e += peers.QM;
          }
          if (t) {
            let e = d - peers.QM;
            u(this.pattern.substr(e), e);
          }
        } else u(this.pattern, 0);
      }
      searchIn(e) {
        let { isCaseSensitive, ignoreDiacritics, includeMatches } =
          this.options;
        if (
          ((e = isCaseSensitive ? e : e.toLowerCase()),
          (e = ignoreDiacritics ? peers.SZr(e) : e),
          this.pattern === e)
        ) {
          let t = {
            isMatch: true,
            score: 0,
          };
          return (includeMatches && (t.indices = [[0, e.length - 1]]), t);
        }
        let {
            location,
            distance,
            threshold,
            findAllMatches,
            minMatchCharLength,
            ignoreLocation,
          } = this.options,
          u = [],
          d = 0,
          f = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
          let { isMatch, score, indices } = peers.QXr(e, pattern, alphabet, {
            location: location + startIndex,
            distance,
            threshold,
            findAllMatches,
            minMatchCharLength,
            includeMatches,
            ignoreLocation,
          });
          isMatch && (f = true);
          d += score;
          isMatch && indices && (u = [...u, ...indices]);
        });
        let p = {
          isMatch: f,
          score: f ? d / this.chunks.length : 1,
        };
        return (f && includeMatches && (p.indices = u), p);
      }
    };
    $M = class {
      constructor(e) {
        this.pattern = e;
      }
      static isMultiMatch(e) {
        return peers.eZr(e, this.multiRegex);
      }
      static isSingleMatch(e) {
        return peers.eZr(e, this.singleRegex);
      }
      search() {}
    };
    wZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "exact";
      }
      static get multiRegex() {
        return /^="(.*)"$/;
      }
      static get singleRegex() {
        return /^=(.*)$/;
      }
      search(e) {
        let t = e === this.pattern;
        return {
          isMatch: t,
          score: +!t,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    TZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"$/;
      }
      static get singleRegex() {
        return /^!(.*)$/;
      }
      search(e) {
        let t = e.indexOf(this.pattern) === -1;
        return {
          isMatch: t,
          score: +!t,
          indices: [0, e.length - 1],
        };
      }
    };
    EZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "prefix-exact";
      }
      static get multiRegex() {
        return /^\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^\^(.*)$/;
      }
      search(e) {
        let t = e.startsWith(this.pattern);
        return {
          isMatch: t,
          score: +!t,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    DZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-prefix-exact";
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^!\^(.*)$/;
      }
      search(e) {
        let t = !e.startsWith(this.pattern);
        return {
          isMatch: t,
          score: +!t,
          indices: [0, e.length - 1],
        };
      }
    };
    OZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "suffix-exact";
      }
      static get multiRegex() {
        return /^"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^(.*)\$$/;
      }
      search(e) {
        let t = e.endsWith(this.pattern);
        return {
          isMatch: t,
          score: +!t,
          indices: [e.length - this.pattern.length, e.length - 1],
        };
      }
    };
    kZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "inverse-suffix-exact";
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^!(.*)\$$/;
      }
      search(e) {
        let t = !e.endsWith(this.pattern);
        return {
          isMatch: t,
          score: +!t,
          indices: [0, e.length - 1],
        };
      }
    };
    AZr = class extends peers.$M {
      constructor(
        e,
        {
          location = peers.ZM.location,
          threshold = peers.ZM.threshold,
          distance = peers.ZM.distance,
          includeMatches = peers.ZM.includeMatches,
          findAllMatches = peers.ZM.findAllMatches,
          minMatchCharLength = peers.ZM.minMatchCharLength,
          isCaseSensitive = peers.ZM.isCaseSensitive,
          ignoreDiacritics = peers.ZM.ignoreDiacritics,
          ignoreLocation = peers.ZM.ignoreLocation,
        } = {},
      ) {
        super(e);
        this._bitapSearch = new peers.CZr(e, {
          location,
          threshold,
          distance,
          includeMatches,
          findAllMatches,
          minMatchCharLength,
          isCaseSensitive,
          ignoreDiacritics,
          ignoreLocation,
        });
      }
      static get type() {
        return "fuzzy";
      }
      static get multiRegex() {
        return /^"(.*)"$/;
      }
      static get singleRegex() {
        return /^(.*)$/;
      }
      search(e) {
        return this._bitapSearch.searchIn(e);
      }
    };
    jZr = class extends peers.$M {
      constructor(e) {
        super(e);
      }
      static get type() {
        return "include";
      }
      static get multiRegex() {
        return /^'"(.*)"$/;
      }
      static get singleRegex() {
        return /^'(.*)$/;
      }
      search(e) {
        let t = 0,
          n,
          r = [],
          i = this.pattern.length;
        for (; (n = e.indexOf(this.pattern, t)) > -1; ) {
          t = n + i;
          r.push([n, t - 1]);
        }
        let a = !!r.length;
        return {
          isMatch: a,
          score: +!a,
          indices: r,
        };
      }
    };
    MZr = [
      peers.wZr,
      peers.jZr,
      peers.EZr,
      peers.DZr,
      peers.kZr,
      peers.OZr,
      peers.TZr,
      peers.AZr,
    ];
    NZr = peers.MZr.length;
    PZr = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
    FZr = "|";
    IZr = new Set([peers.AZr.type, peers.jZr.type]);
    LZr = class {
      constructor(
        e,
        {
          isCaseSensitive = peers.ZM.isCaseSensitive,
          ignoreDiacritics = peers.ZM.ignoreDiacritics,
          includeMatches = peers.ZM.includeMatches,
          minMatchCharLength = peers.ZM.minMatchCharLength,
          ignoreLocation = peers.ZM.ignoreLocation,
          findAllMatches = peers.ZM.findAllMatches,
          location = peers.ZM.location,
          threshold = peers.ZM.threshold,
          distance = peers.ZM.distance,
        } = {},
      ) {
        this.query = null;
        this.options = {
          isCaseSensitive,
          ignoreDiacritics,
          includeMatches,
          minMatchCharLength,
          findAllMatches,
          ignoreLocation,
          location,
          threshold,
          distance,
        };
        e = isCaseSensitive ? e : e.toLowerCase();
        e = ignoreDiacritics ? peers.SZr(e) : e;
        this.pattern = e;
        this.query = peers.tZr(this.pattern, this.options);
      }
      static condition(e, t) {
        return t.useExtendedSearch;
      }
      searchIn(e) {
        let t = this.query;
        if (!t)
          return {
            isMatch: false,
            score: 1,
          };
        let { includeMatches, isCaseSensitive, ignoreDiacritics } =
          this.options;
        e = isCaseSensitive ? e : e.toLowerCase();
        e = ignoreDiacritics ? peers.SZr(e) : e;
        let a = 0,
          o = [],
          s = 0;
        for (let r = 0, i = t.length; r < i; r += 1) {
          let i = t[r];
          o.length = 0;
          a = 0;
          for (let t = 0, r = i.length; t < r; t += 1) {
            let r = i[t],
              { isMatch, indices, score } = r.search(e);
            if (isMatch) {
              if (((a += 1), (s += score), includeMatches)) {
                let e = r.constructor.type;
                peers.IZr.has(e) ? (o = [...o, ...indices]) : o.push(indices);
              }
            } else {
              s = 0;
              a = 0;
              o.length = 0;
              break;
            }
          }
          if (a) {
            let e = {
              isMatch: true,
              score: s / a,
            };
            return (includeMatches && (e.indices = o), e);
          }
        }
        return {
          isMatch: false,
          score: 1,
        };
      }
    };
    RZr = [];
    zZr = {
      AND: "$and",
      OR: "$or",
    };
    BZr = {
      PATH: "$path",
      PATTERN: "$val",
    };
    VZr = (props) => {
      return !!(props[peers.zZr.AND] || props[peers.zZr.OR]);
    };
    HZr = (props) => {
      return !!props[peers.BZr.PATH];
    };
    UZr = (e) => {
      return !peers.JM(e) && peers.zXr(e) && !peers.VZr(e);
    };
    WZr = (props) => {
      return {
        [peers.zZr.AND]: Object.keys(props).map((item) => {
          return {
            [item]: props[item],
          };
        }),
      };
    };
    eN = class {
      constructor(e, t = {}, n) {
        this.options = {
          ...peers.ZM,
          ...t,
        };
        this.options.useExtendedSearch;
        this._keyStore = new peers.hZr(this.options.keys);
        this.setCollection(e, n);
      }
      setCollection(e, t) {
        if (((this._docs = e), t && !(t instanceof peers.xZr)))
          throw Error(peers.lZr);
        this._myIndex =
          t ||
          peers.JXr(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight,
          });
      }
      add(e) {
        peers.XM(e) && (this._docs.push(e), this._myIndex.add(e));
      }
      remove(
        e = () => {
          return false;
        },
      ) {
        let t = [];
        for (let n = 0, r = this._docs.length; n < r; n += 1) {
          let i = this._docs[n];
          e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
        }
        return t;
      }
      removeAt(e) {
        this._docs.splice(e, 1);
        this._myIndex.removeAt(e);
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
          s = peers.YM(e)
            ? peers.YM(this._docs[0])
              ? this._searchStringList(e)
              : this._searchObjectList(e)
            : this._searchLogical(e);
        return (
          peers.aZr(s, {
            ignoreFieldNorm,
          }),
          shouldSort && s.sort(sortFn),
          peers.LXr(limit) && limit > -1 && (s = s.slice(0, limit)),
          peers.cZr(s, this._docs, {
            includeMatches,
            includeScore,
          })
        );
      }
      _searchStringList(e) {
        let t = peers.rZr(e, this.options),
          { records } = this._myIndex,
          r = [];
        return (
          records.forEach(({ v, i, n }) => {
            if (!peers.XM(v)) return;
            let { isMatch, score, indices } = t.searchIn(v);
            isMatch &&
              r.push({
                item: v,
                idx: i,
                matches: [
                  {
                    score,
                    value: v,
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
        let t = peers.iZr(e, this.options),
          n = (e, t, r) => {
            if (!e.children) {
              let { keyId, searcher } = e,
                a = this._findMatches({
                  key: this._keyStore.get(keyId),
                  value: this._myIndex.getValueForItemAtKeyId(t, keyId),
                  searcher,
                });
              return a && a.length
                ? [
                    {
                      idx: r,
                      item: t,
                      matches: a,
                    },
                  ]
                : [];
            }
            let i = [];
            for (let a = 0, o = e.children.length; a < o; a += 1) {
              let o = e.children[a],
                s = n(o, t, r);
              if (s.length) i.push(...s);
              else if (e.operator === peers.zZr.AND) return [];
            }
            return i;
          },
          r = this._myIndex.records,
          i = {},
          a = [];
        return (
          r.forEach(({ $, i: __i }) => {
            if (peers.XM($)) {
              let o = n(t, $, __i);
              o.length &&
                (i[__i] ||
                  ((i[__i] = {
                    idx: __i,
                    item: $,
                    matches: [],
                  }),
                  a.push(i[__i])),
                o.forEach(({ matches }) => {
                  i[__i].matches.push(...matches);
                }));
            }
          }),
          a
        );
      }
      _searchObjectList(e) {
        let t = peers.rZr(e, this.options),
          { keys, records } = this._myIndex,
          i = [];
        return (
          records.forEach(({ $, i: __i }) => {
            if (!peers.XM($)) return;
            let a = [];
            keys.forEach((item, index) => {
              a.push(
                ...this._findMatches({
                  key: item,
                  value: $[index],
                  searcher: t,
                }),
              );
            });
            a.length &&
              i.push({
                idx: __i,
                item: $,
                matches: a,
              });
          }),
          i
        );
      }
      _findMatches({ key, value, searcher }) {
        if (!peers.XM(value)) return [];
        let r = [];
        if (peers.JM(value))
          value.forEach(({ v, i, n }) => {
            if (!peers.XM(v)) return;
            let { isMatch, score, indices } = searcher.searchIn(v);
            isMatch &&
              r.push({
                score,
                key,
                value: v,
                idx: i,
                norm: n,
                indices,
              });
          });
        else {
          let { v, n } = value,
            { isMatch, score, indices } = searcher.searchIn(v);
          isMatch &&
            r.push({
              score,
              key,
              value: v,
              norm: n,
              indices,
            });
        }
        return r;
      }
    };
    peers.eN.version = "7.1.0";
    peers.eN.createIndex = peers.JXr;
    peers.eN.parseIndex = peers.YXr;
    peers.eN.config = peers.ZM;
    peers.eN.parseQuery = peers.iZr;
    peers.nZr(peers.LZr);
  });
}
