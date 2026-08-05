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
    uZr = (alpha) => {
      return `Invalid value for key ${alpha}`;
    };
    dZr = (bravo) => {
      return `Pattern length exceeds max of ${bravo}.`;
    };
    fZr = (copper) => {
      return `Missing ${copper} property in key`;
    };
    pZr = (delta) => {
      return `Property 'weight' in key '${delta}' must be a positive integer`;
    };
    mZr = Object.prototype.hasOwnProperty;
    hZr = class {
      constructor(echo) {
        this._keys = [];
        this._keyMap = {};
        let falcon = 0;
        echo.forEach((item) => {
          let gamma = peers.UXr(item);
          this._keys.push(gamma);
          this._keyMap[gamma.id] = gamma;
          falcon += gamma.weight;
        });
        this._keys.forEach((item) => {
          item.weight /= falcon;
        });
      }
      get(harbor) {
        return this._keyMap[harbor];
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
      sortFn: (indigo, jade) => {
        return indigo.score === jade.score
          ? indigo.idx < jade.idx
            ? -1
            : 1
          : indigo.score < jade.score
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
      setSources(kite = []) {
        this.docs = kite;
      }
      setIndexRecords(lemon = []) {
        this.records = lemon;
      }
      setKeys(marble = []) {
        this.keys = marble;
        this._keysMap = {};
        marble.forEach((item, index) => {
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
      add(nickel) {
        let onyx = this.size();
        peers.YM(nickel)
          ? this._addString(nickel, onyx)
          : this._addObject(nickel, onyx);
      }
      removeAt(pearl) {
        this.records.splice(pearl, 1);
        for (
          let quartz = pearl, river = this.size();
          quartz < river;
          quartz += 1
        )
          --this.records[quartz].i;
      }
      getValueForItemAtKeyId(slate, timber) {
        return slate[this._keysMap[timber]];
      }
      size() {
        return this.records.length;
      }
      _addString(umbra, violet) {
        if (!peers.XM(umbra) || peers.VXr(umbra)) return;
        let willow = {
          v: umbra,
          i: violet,
          n: this.norm.get(umbra),
        };
        this.records.push(willow);
      }
      _addObject(xenon, yellow) {
        let zinc = {
          i: yellow,
          $: {},
        };
        this.keys.forEach((item, index) => {
          let i = item.getFn ? item.getFn(xenon) : this.getFn(xenon, item.path);
          if (peers.XM(i)) {
            if (peers.JM(i)) {
              let amber = [],
                basalt = [
                  {
                    nestedArrIndex: -1,
                    value: i,
                  },
                ];
              for (; basalt.length; ) {
                let { nestedArrIndex, value } = basalt.pop();
                if (peers.XM(value))
                  if (peers.YM(value) && !peers.VXr(value)) {
                    let cedar = {
                      v: value,
                      i: nestedArrIndex,
                      n: this.norm.get(value),
                    };
                    amber.push(cedar);
                  } else
                    peers.JM(value) &&
                      value.forEach((_item, _index) => {
                        basalt.push({
                          nestedArrIndex: _index,
                          value: _item,
                        });
                      });
              }
              zinc.$[index] = amber;
            } else if (peers.YM(i) && !peers.VXr(i)) {
              let daisy = {
                v: i,
                n: this.norm.get(i),
              };
              zinc.$[index] = daisy;
            }
          }
        });
        this.records.push(zinc);
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
      ? (ember) => {
          return ember
            .normalize("NFD")
            .replace(
              /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,
              "",
            );
        }
      : (flint) => {
          return flint;
        };
    CZr = class {
      constructor(
        garnet,
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
          (garnet = isCaseSensitive ? garnet : garnet.toLowerCase()),
          (garnet = ignoreDiacritics ? peers.SZr(garnet) : garnet),
          (this.pattern = garnet),
          (this.chunks = []),
          !this.pattern.length)
        )
          return;
        let u = (ivory, jasper) => {
            this.chunks.push({
              pattern: ivory,
              alphabet: peers.$Xr(ivory),
              startIndex: jasper,
            });
          },
          hazel = this.pattern.length;
        if (hazel > peers.QM) {
          let kelp = 0,
            lotus = hazel % peers.QM,
            mint = hazel - lotus;
          for (; kelp < mint; ) {
            u(this.pattern.substr(kelp, peers.QM), kelp);
            kelp += peers.QM;
          }
          if (lotus) {
            let nova = hazel - peers.QM;
            u(this.pattern.substr(nova), nova);
          }
        } else u(this.pattern, 0);
      }
      searchIn(olive) {
        let { isCaseSensitive, ignoreDiacritics, includeMatches } =
          this.options;
        if (
          ((olive = isCaseSensitive ? olive : olive.toLowerCase()),
          (olive = ignoreDiacritics ? peers.SZr(olive) : olive),
          this.pattern === olive)
        ) {
          let reef = {
            isMatch: true,
            score: 0,
          };
          return (
            includeMatches && (reef.indices = [[0, olive.length - 1]]),
            reef
          );
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
          prism = 0,
          quill = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
          let { isMatch, score, indices } = peers.QXr(
            olive,
            pattern,
            alphabet,
            {
              location: location + startIndex,
              distance,
              threshold,
              findAllMatches,
              minMatchCharLength,
              includeMatches,
              ignoreLocation,
            },
          );
          isMatch && (quill = true);
          prism += score;
          isMatch && indices && (u = [...u, ...indices]);
        });
        let p = {
          isMatch: quill,
          score: quill ? prism / this.chunks.length : 1,
        };
        return (quill && includeMatches && (p.indices = u), p);
      }
    };
    $M = class {
      constructor(sage) {
        this.pattern = sage;
      }
      static isMultiMatch(topaz) {
        return peers.eZr(topaz, this.multiRegex);
      }
      static isSingleMatch(ultra) {
        return peers.eZr(ultra, this.singleRegex);
      }
      search() {}
    };
    wZr = class extends peers.$M {
      constructor(vapor) {
        super(vapor);
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
      search(wheat) {
        let yarn = wheat === this.pattern;
        return {
          isMatch: yarn,
          score: +!yarn,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    TZr = class extends peers.$M {
      constructor(zephyr) {
        super(zephyr);
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
      search(acorn) {
        let bloom = acorn.indexOf(this.pattern) === -1;
        return {
          isMatch: bloom,
          score: +!bloom,
          indices: [0, acorn.length - 1],
        };
      }
    };
    EZr = class extends peers.$M {
      constructor(coral) {
        super(coral);
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
      search(drift) {
        let eagle = drift.startsWith(this.pattern);
        return {
          isMatch: eagle,
          score: +!eagle,
          indices: [0, this.pattern.length - 1],
        };
      }
    };
    DZr = class extends peers.$M {
      constructor(frost) {
        super(frost);
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
      search(glide) {
        let honey = !glide.startsWith(this.pattern);
        return {
          isMatch: honey,
          score: +!honey,
          indices: [0, glide.length - 1],
        };
      }
    };
    OZr = class extends peers.$M {
      constructor(iris) {
        super(iris);
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
      search(jewel) {
        let knoll = jewel.endsWith(this.pattern);
        return {
          isMatch: knoll,
          score: +!knoll,
          indices: [jewel.length - this.pattern.length, jewel.length - 1],
        };
      }
    };
    kZr = class extends peers.$M {
      constructor(lunar) {
        super(lunar);
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
      search(moss) {
        let north = !moss.endsWith(this.pattern);
        return {
          isMatch: north,
          score: +!north,
          indices: [0, moss.length - 1],
        };
      }
    };
    AZr = class extends peers.$M {
      constructor(
        orbit,
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
        super(orbit);
        this._bitapSearch = new peers.CZr(orbit, {
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
      search(pine) {
        return this._bitapSearch.searchIn(pine);
      }
    };
    jZr = class extends peers.$M {
      constructor(quest) {
        super(quest);
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
      search(ridge) {
        let storm = 0,
          tide,
          unity = [],
          i = this.pattern.length;
        for (; (tide = ridge.indexOf(this.pattern, storm)) > -1; ) {
          storm = tide + i;
          unity.push([tide, storm - 1]);
        }
        let a = !!unity.length;
        return {
          isMatch: a,
          score: +!a,
          indices: unity,
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
        vale,
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
        vale = isCaseSensitive ? vale : vale.toLowerCase();
        vale = ignoreDiacritics ? peers.SZr(vale) : vale;
        this.pattern = vale;
        this.query = peers.tZr(this.pattern, this.options);
      }
      static condition(wave, apex) {
        return apex.useExtendedSearch;
      }
      searchIn(brook) {
        let cliff = this.query;
        if (!cliff)
          return {
            isMatch: false,
            score: 1,
          };
        let { includeMatches, isCaseSensitive, ignoreDiacritics } =
          this.options;
        brook = isCaseSensitive ? brook : brook.toLowerCase();
        brook = ignoreDiacritics ? peers.SZr(brook) : brook;
        let a = 0,
          dusk = [],
          s = 0;
        for (let elm = 0, i = cliff.length; elm < i; elm += 1) {
          let i = cliff[elm];
          dusk.length = 0;
          a = 0;
          for (let fern = 0, grove = i.length; fern < grove; fern += 1) {
            let hill = i[fern],
              { isMatch, indices, score } = hill.search(brook);
            if (isMatch) {
              if (((a += 1), (s += score), includeMatches)) {
                let isle = hill.constructor.type;
                peers.IZr.has(isle)
                  ? (dusk = [...dusk, ...indices])
                  : dusk.push(indices);
              }
            } else {
              s = 0;
              a = 0;
              dusk.length = 0;
              break;
            }
          }
          if (a) {
            let juniper = {
              isMatch: true,
              score: s / a,
            };
            return (includeMatches && (juniper.indices = dusk), juniper);
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
    UZr = (lagoon) => {
      return !peers.JM(lagoon) && peers.zXr(lagoon) && !peers.VZr(lagoon);
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
      constructor(meadow, nest = {}, oak) {
        this.options = {
          ...peers.ZM,
          ...nest,
        };
        this.options.useExtendedSearch;
        this._keyStore = new peers.hZr(this.options.keys);
        this.setCollection(meadow, oak);
      }
      setCollection(petal, quiet) {
        if (((this._docs = petal), quiet && !(quiet instanceof peers.xZr)))
          throw Error(peers.lZr);
        this._myIndex =
          quiet ||
          peers.JXr(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight,
          });
      }
      add(rain) {
        peers.XM(rain) && (this._docs.push(rain), this._myIndex.add(rain));
      }
      remove(
        seed = () => {
          return false;
        },
      ) {
        let trail = [];
        for (let urn = 0, vine = this._docs.length; urn < vine; urn += 1) {
          let i = this._docs[urn];
          seed(i, urn) && (this.removeAt(urn), --urn, --vine, trail.push(i));
        }
        return trail;
      }
      removeAt(wind) {
        this._docs.splice(wind, 1);
        this._myIndex.removeAt(wind);
      }
      getIndex() {
        return this._myIndex;
      }
      search(yarrow, { limit = -1 } = {}) {
        let {
            includeMatches,
            includeScore,
            shouldSort,
            sortFn,
            ignoreFieldNorm,
          } = this.options,
          s = peers.YM(yarrow)
            ? peers.YM(this._docs[0])
              ? this._searchStringList(yarrow)
              : this._searchObjectList(yarrow)
            : this._searchLogical(yarrow);
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
      _searchStringList(azure) {
        let birch = peers.rZr(azure, this.options),
          { records } = this._myIndex,
          canyon = [];
        return (
          records.forEach(({ v: dew, i, n: ever }) => {
            if (!peers.XM(dew)) return;
            let { isMatch, score, indices } = birch.searchIn(dew);
            isMatch &&
              canyon.push({
                item: dew,
                idx: i,
                matches: [
                  {
                    score,
                    value: dew,
                    norm: ever,
                    indices,
                  },
                ],
              });
          }),
          canyon
        );
      }
      _searchLogical(field) {
        let grain = peers.iZr(field, this.options),
          haven = (jadeite, kernel, leaf) => {
            if (!jadeite.children) {
              let { keyId, searcher } = jadeite,
                a = this._findMatches({
                  key: this._keyStore.get(keyId),
                  value: this._myIndex.getValueForItemAtKeyId(kernel, keyId),
                  searcher,
                });
              return a && a.length
                ? [
                    {
                      idx: leaf,
                      item: kernel,
                      matches: a,
                    },
                  ]
                : [];
            }
            let i = [];
            for (
              let a = 0, maple = jadeite.children.length;
              a < maple;
              a += 1
            ) {
              let nimbus = jadeite.children[a],
                s = haven(nimbus, kernel, leaf);
              if (s.length) i.push(...s);
              else if (jadeite.operator === peers.zZr.AND) return [];
            }
            return i;
          },
          ink = this._myIndex.records,
          i = {},
          a = [];
        return (
          ink.forEach(({ $, i: __i }) => {
            if (peers.XM($)) {
              let opal = haven(grain, $, __i);
              opal.length &&
                (i[__i] ||
                  ((i[__i] = {
                    idx: __i,
                    item: $,
                    matches: [],
                  }),
                  a.push(i[__i])),
                opal.forEach(({ matches }) => {
                  i[__i].matches.push(...matches);
                }));
            }
          }),
          a
        );
      }
      _searchObjectList(plume) {
        let quillow = peers.rZr(plume, this.options),
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
                  searcher: quillow,
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
        let root = [];
        if (peers.JM(value))
          value.forEach(({ v: silk, i, n: thorn }) => {
            if (!peers.XM(silk)) return;
            let { isMatch, score, indices } = searcher.searchIn(silk);
            isMatch &&
              root.push({
                score,
                key,
                value: silk,
                idx: i,
                norm: thorn,
                indices,
              });
          });
        else {
          let { v: upland, n: vista } = value,
            { isMatch, score, indices } = searcher.searchIn(upland);
          isMatch &&
            root.push({
              score,
              key,
              value: upland,
              norm: vista,
              indices,
            });
        }
        return root;
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
