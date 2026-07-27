// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `US`) / export `d7`.

export type DeferredUid7Peers = {
  $cursor: (...args: unknown[]) => unknown;
  $from: (...args: unknown[]) => unknown;
  $to: (...args: unknown[]) => unknown;
  Axn: (...args: unknown[]) => unknown;
  BS: (...args: unknown[]) => unknown;
  Cxn: (...args: unknown[]) => unknown;
  DS: (...args: unknown[]) => unknown;
  Dxn: (...args: unknown[]) => unknown;
  ES: (...args: unknown[]) => unknown;
  Exn: (...args: unknown[]) => unknown;
  Fxn: (...args: unknown[]) => unknown;
  HS: (...args: unknown[]) => unknown;
  IS: (...args: unknown[]) => unknown;
  Ixn: (...args: unknown[]) => unknown;
  LS: (...args: unknown[]) => unknown;
  Lxn: (...args: unknown[]) => unknown;
  Mxn: (...args: unknown[]) => unknown;
  Nxn: (...args: unknown[]) => unknown;
  OS: (...args: unknown[]) => unknown;
  Oxn: (...args: unknown[]) => unknown;
  Pxn: (...args: unknown[]) => unknown;
  RS: (...args: unknown[]) => unknown;
  RangeError: (...args: unknown[]) => unknown;
  Rxn: (...args: unknown[]) => unknown;
  Sxn: (...args: unknown[]) => unknown;
  TS: (...args: unknown[]) => unknown;
  Txn: (...args: unknown[]) => unknown;
  VS: (...args: unknown[]) => unknown;
  _xn: (...args: unknown[]) => unknown;
  addStep: (...args: unknown[]) => unknown;
  addStoredMark: (...args: unknown[]) => unknown;
  anchor: (...args: unknown[]) => unknown;
  apply: (...args: unknown[]) => unknown;
  applyInner: (...args: unknown[]) => unknown;
  applyTransaction: (...args: unknown[]) => unknown;
  atEnd: (...args: unknown[]) => unknown;
  atStart: (...args: unknown[]) => unknown;
  between: (...args: unknown[]) => unknown;
  bxn: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  content: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  deleteSelection: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jxn: (...args: unknown[]) => unknown;
  kS: (...args: unknown[]) => unknown;
  kxn: (...args: unknown[]) => unknown;
  vxn: (...args: unknown[]) => unknown;
  wxn: (...args: unknown[]) => unknown;
  xxn: (...args: unknown[]) => unknown;
  yxn: (...args: unknown[]) => unknown;
  zS: (...args: unknown[]) => unknown;
};
let peers: DeferredUid7Peers | null = null;

/** Wire deferredUid7 peers once companions land. */
export function setDeferredUid7Peers(next: DeferredUid7Peers): void {
  peers = next;
}

/**
 * Bundle export `d7` / internal `US`.
 */
export function deferredUid7() {
  if (peers == null) {
    throw new Error("deferredUid7 peers are not configured");
  }
  return peers.e(() => {
    peers.kS();
    peers.IS();
    wxn = Object.create(null);
    LS = class {
      constructor(e, t, n) {
        this.$anchor = e;
        this.$head = t;
        this.ranges = n || [new peers.Txn(e.min(t), e.max(t))];
      }
      get anchor() {
        return this.$anchor.pos;
      }
      get head() {
        return this.$head.pos;
      }
      get from() {
        return this.$from.pos;
      }
      get to() {
        return this.$to.pos;
      }
      get $from() {
        return this.ranges[0].$from;
      }
      get $to() {
        return this.ranges[0].$to;
      }
      get empty() {
        let e = this.ranges;
        for (let t = 0; t < e.length; t++)
          if (e[t].$from.pos != e[t].$to.pos) return false;
        return true;
      }
      content() {
        return this.$from.doc.slice(this.from, this.to, true);
      }
      replace(e, t = peers.DS.empty) {
        let n = t.content.lastChild,
          r = null;
        for (let e = 0; e < t.openEnd; e++) {
          r = n;
          n = n.lastChild;
        }
        let i = e.steps.length,
          a = this.ranges;
        for (let o = 0; o < a.length; o++) {
          let { $from, $to } = a[o],
            l = e.mapping.slice(i);
          e.replaceRange(
            l.map($from.pos),
            l.map($to.pos),
            o ? peers.DS.empty : t,
          );
          o == 0 &&
            peers.bxn(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
        }
      }
      replaceWith(e, t) {
        let n = e.steps.length,
          r = this.ranges;
        for (let i = 0; i < r.length; i++) {
          let { $from, $to } = r[i],
            s = e.mapping.slice(n),
            c = s.map($from.pos),
            l = s.map($to.pos);
          i
            ? e.deleteRange(c, l)
            : (e.replaceRangeWith(c, l, t),
              peers.bxn(e, n, t.isInline ? -1 : 1));
        }
      }
      static findFrom(e, t, n = false) {
        let r = e.parent.inlineContent
          ? new peers.RS(e)
          : peers.yxn(e.node(0), e.parent, e.pos, e.index(), t, n);
        if (r) return r;
        for (let r = e.depth - 1; r >= 0; r--) {
          let i =
            t < 0
              ? peers.yxn(
                  e.node(0),
                  e.node(r),
                  e.before(r + 1),
                  e.index(r),
                  t,
                  n,
                )
              : peers.yxn(
                  e.node(0),
                  e.node(r),
                  e.after(r + 1),
                  e.index(r) + 1,
                  t,
                  n,
                );
          if (i) return i;
        }
        return null;
      }
      static near(e, t = 1) {
        return (
          this.findFrom(e, t) || this.findFrom(e, -t) || new peers.BS(e.node(0))
        );
      }
      static atStart(e) {
        return peers.yxn(e, e, 0, 0, 1) || new peers.BS(e);
      }
      static atEnd(e) {
        return (
          peers.yxn(e, e, e.content.size, e.childCount, -1) || new peers.BS(e)
        );
      }
      static fromJSON(e, t) {
        if (!t || !t.type)
          throw peers.RangeError("Invalid input for Selection.fromJSON");
        let n = peers.wxn[t.type];
        if (!n) throw peers.RangeError(`No selection type ${t.type} defined`);
        return n.fromJSON(e, t);
      }
      static jsonID(e, t) {
        if (e in peers.wxn)
          throw peers.RangeError("Duplicate use of selection JSON ID " + e);
        return ((peers.wxn[e] = t), (t.prototype.jsonID = e), t);
      }
      getBookmark() {
        return peers.RS.between(this.$anchor, this.$head).getBookmark();
      }
    };
    peers.LS.prototype.visible = true;
    Txn = class {
      constructor(e, t) {
        this.$from = e;
        this.$to = t;
      }
    };
    Exn = false;
    RS = class e extends peers.LS {
      constructor(e, t = e) {
        peers.vxn(e);
        peers.vxn(t);
        super(e, t);
      }
      get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
      }
      map(t, n) {
        let r = t.resolve(n.map(this.head));
        if (!r.parent.inlineContent) return peers.LS.near(r);
        let i = t.resolve(n.map(this.anchor));
        return new e(i.parent.inlineContent ? i : r, r);
      }
      replace(e, t = peers.DS.empty) {
        if ((super.replace(e, t), t == peers.DS.empty)) {
          let t = this.$from.marksAcross(this.$to);
          t && e.ensureMarks(t);
        }
      }
      eq(t) {
        return t instanceof e && t.anchor == this.anchor && t.head == this.head;
      }
      getBookmark() {
        return new peers.Dxn(this.anchor, this.head);
      }
      toJSON() {
        return {
          type: "text",
          anchor: this.anchor,
          head: this.head,
        };
      }
      static fromJSON(t, n) {
        if (typeof n.anchor != "number" || typeof n.head != "number")
          throw peers.RangeError("Invalid input for TextSelection.fromJSON");
        return new e(t.resolve(n.anchor), t.resolve(n.head));
      }
      static create(e, t, n = t) {
        let r = e.resolve(t);
        return new this(r, n == t ? r : e.resolve(n));
      }
      static between(t, n, r) {
        let i = t.pos - n.pos;
        if (((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent)) {
          let e =
            peers.LS.findFrom(n, r, true) || peers.LS.findFrom(n, -r, true);
          if (e) n = e.$head;
          else return peers.LS.near(n, r);
        }
        return (
          t.parent.inlineContent ||
            (i == 0
              ? (t = n)
              : ((t = (
                  peers.LS.findFrom(t, -r, true) ||
                  peers.LS.findFrom(t, r, true)
                ).$anchor),
                t.pos < n.pos != i < 0 && (t = n))),
          new e(t, n)
        );
      }
    };
    peers.LS.jsonID("text", peers.RS);
    Dxn = class e {
      constructor(e, t) {
        this.anchor = e;
        this.head = t;
      }
      map(t) {
        return new e(t.map(this.anchor), t.map(this.head));
      }
      resolve(e) {
        return peers.RS.between(e.resolve(this.anchor), e.resolve(this.head));
      }
    };
    zS = class e extends peers.LS {
      constructor(e) {
        let t = e.nodeAfter,
          n = e.node(0).resolve(e.pos + t.nodeSize);
        super(e, n);
        this.node = t;
      }
      map(t, n) {
        let { deleted, pos } = n.mapResult(this.anchor),
          a = t.resolve(pos);
        return deleted ? peers.LS.near(a) : new e(a);
      }
      content() {
        return new peers.DS(peers.TS.from(this.node), 0, 0);
      }
      eq(t) {
        return t instanceof e && t.anchor == this.anchor;
      }
      toJSON() {
        return {
          type: "node",
          anchor: this.anchor,
        };
      }
      getBookmark() {
        return new peers.Oxn(this.anchor);
      }
      static fromJSON(t, n) {
        if (typeof n.anchor != "number")
          throw peers.RangeError("Invalid input for NodeSelection.fromJSON");
        return new e(t.resolve(n.anchor));
      }
      static create(t, n) {
        return new e(t.resolve(n));
      }
      static isSelectable(e) {
        return !e.isText && e.type.spec.selectable !== false;
      }
    };
    peers.zS.prototype.visible = false;
    peers.LS.jsonID("node", peers.zS);
    Oxn = class e {
      constructor(e) {
        this.anchor = e;
      }
      map(t) {
        let { deleted, pos } = t.mapResult(this.anchor);
        return deleted ? new peers.Dxn(pos, pos) : new e(pos);
      }
      resolve(e) {
        let t = e.resolve(this.anchor),
          n = t.nodeAfter;
        return n && peers.zS.isSelectable(n)
          ? new peers.zS(t)
          : peers.LS.near(t);
      }
    };
    BS = class e extends peers.LS {
      constructor(e) {
        super(e.resolve(0), e.resolve(e.content.size));
      }
      replace(e, t = peers.DS.empty) {
        if (t == peers.DS.empty) {
          e.delete(0, e.doc.content.size);
          let t = peers.LS.atStart(e.doc);
          t.eq(e.selection) || e.setSelection(t);
        } else super.replace(e, t);
      }
      toJSON() {
        return {
          type: "all",
        };
      }
      static fromJSON(t) {
        return new e(t);
      }
      map(t) {
        return new e(t);
      }
      eq(t) {
        return t instanceof e;
      }
      getBookmark() {
        return peers.kxn;
      }
    };
    peers.LS.jsonID("all", peers.BS);
    kxn = {
      map() {
        return this;
      },
      resolve(e) {
        return new peers.BS(e);
      },
    };
    Axn = 1;
    jxn = 2;
    Mxn = 4;
    Nxn = class extends peers._xn {
      constructor(e) {
        super(e.doc);
        this.curSelectionFor = 0;
        this.updated = 0;
        this.meta = Object.create(null);
        this.time = Date.now();
        this.curSelection = e.selection;
        this.storedMarks = e.storedMarks;
      }
      get selection() {
        return (
          this.curSelectionFor < this.steps.length &&
            ((this.curSelection = this.curSelection.map(
              this.doc,
              this.mapping.slice(this.curSelectionFor),
            )),
            (this.curSelectionFor = this.steps.length)),
          this.curSelection
        );
      }
      setSelection(e) {
        if (e.$from.doc != this.doc)
          throw peers.RangeError(
            "Selection passed to setSelection must point at the current document",
          );
        return (
          (this.curSelection = e),
          (this.curSelectionFor = this.steps.length),
          (this.updated = (this.updated | peers.Axn) & -3),
          (this.storedMarks = null),
          this
        );
      }
      get selectionSet() {
        return (this.updated & peers.Axn) > 0;
      }
      setStoredMarks(e) {
        return ((this.storedMarks = e), (this.updated |= peers.jxn), this);
      }
      ensureMarks(e) {
        return (
          peers.ES.sameSet(
            this.storedMarks || this.selection.$from.marks(),
            e,
          ) || this.setStoredMarks(e),
          this
        );
      }
      addStoredMark(e) {
        return this.ensureMarks(
          e.addToSet(this.storedMarks || this.selection.$head.marks()),
        );
      }
      removeStoredMark(e) {
        return this.ensureMarks(
          e.removeFromSet(this.storedMarks || this.selection.$head.marks()),
        );
      }
      get storedMarksSet() {
        return (this.updated & peers.jxn) > 0;
      }
      addStep(e, t) {
        super.addStep(e, t);
        this.updated &= -3;
        this.storedMarks = null;
      }
      setTime(e) {
        return ((this.time = e), this);
      }
      replaceSelection(e) {
        return (this.selection.replace(this, e), this);
      }
      replaceSelectionWith(e, t = true) {
        let n = this.selection;
        return (
          t &&
            (e = e.mark(
              this.storedMarks ||
                (n.empty
                  ? n.$from.marks()
                  : n.$from.marksAcross(n.$to) || peers.ES.none),
            )),
          n.replaceWith(this, e),
          this
        );
      }
      deleteSelection() {
        return (this.selection.replace(this), this);
      }
      insertText(e, t, n) {
        let r = this.doc.type.schema;
        if (t == null)
          return e
            ? this.replaceSelectionWith(r.text(e), true)
            : this.deleteSelection();
        {
          if (((n ??= t), !e)) return this.deleteRange(t, n);
          let i = this.storedMarks;
          if (!i) {
            let e = this.doc.resolve(t);
            i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
          }
          return (
            this.replaceRangeWith(t, n, r.text(e, i)),
            !this.selection.empty &&
              this.selection.to == t + e.length &&
              this.setSelection(peers.LS.near(this.selection.$to)),
            this
          );
        }
      }
      setMeta(event, t) {
        return (
          (this.meta[typeof event == "string" ? event : event.key] = t),
          this
        );
      }
      getMeta(event) {
        return this.meta[typeof event == "string" ? event : event.key];
      }
      get isGeneric() {
        for (let e in this.meta) return false;
        return true;
      }
      scrollIntoView() {
        return ((this.updated |= peers.Mxn), this);
      }
      get scrolledIntoView() {
        return (this.updated & peers.Mxn) > 0;
      }
    };
    Pxn = class {
      constructor(e, t, n) {
        this.name = e;
        this.init = peers.xxn(t.init, n);
        this.apply = peers.xxn(t.apply, n);
      }
    };
    Fxn = [
      new peers.Pxn("doc", {
        init(e) {
          return e.doc || e.schema.topNodeType.createAndFill();
        },
        apply(e) {
          return e.doc;
        },
      }),
      new peers.Pxn("selection", {
        init(e, t) {
          return e.selection || peers.LS.atStart(t.doc);
        },
        apply(e) {
          return e.selection;
        },
      }),
      new peers.Pxn("storedMarks", {
        init(e) {
          return e.storedMarks || null;
        },
        apply(e, t, n, r) {
          return r.selection.$cursor ? e.storedMarks : null;
        },
      }),
      new peers.Pxn("scrollToSelection", {
        init() {
          return 0;
        },
        apply(e, t) {
          return e.scrolledIntoView ? t + 1 : t;
        },
      }),
    ];
    Ixn = class {
      constructor(e, t) {
        this.schema = e;
        this.plugins = [];
        this.pluginsByKey = Object.create(null);
        this.fields = peers.Fxn.slice();
        t &&
          t.forEach((item) => {
            if (this.pluginsByKey[item.key])
              throw peers.RangeError(
                "Adding different instances of a keyed plugin (" +
                  item.key +
                  ")",
              );
            this.plugins.push(item);
            this.pluginsByKey[item.key] = item;
            item.spec.state &&
              this.fields.push(new peers.Pxn(item.key, item.spec.state, item));
          });
      }
    };
    Lxn = class e {
      constructor(e) {
        this.config = e;
      }
      get schema() {
        return this.config.schema;
      }
      get plugins() {
        return this.config.plugins;
      }
      apply(e) {
        return this.applyTransaction(e).state;
      }
      filterTransaction(e, t = -1) {
        for (let n = 0; n < this.config.plugins.length; n++)
          if (n != t) {
            let t = this.config.plugins[n];
            if (
              t.spec.filterTransaction &&
              !t.spec.filterTransaction.call(t, e, this)
            )
              return false;
          }
        return true;
      }
      applyTransaction(e) {
        if (!this.filterTransaction(e))
          return {
            state: this,
            transactions: [],
          };
        let t = [e],
          n = this.applyInner(e),
          r = null;
        for (;;) {
          let i = false;
          for (let a = 0; a < this.config.plugins.length; a++) {
            let o = this.config.plugins[a];
            if (o.spec.appendTransaction) {
              let s = r ? r[a].n : 0,
                c = r ? r[a].state : this,
                l =
                  s < t.length &&
                  o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
              if (l && n.filterTransaction(l, a)) {
                if ((l.setMeta("appendedTransaction", e), !r)) {
                  r = [];
                  for (let e = 0; e < this.config.plugins.length; e++)
                    r.push(
                      e < a
                        ? {
                            state: n,
                            n: t.length,
                          }
                        : {
                            state: this,
                            n: 0,
                          },
                    );
                }
                t.push(l);
                n = n.applyInner(l);
                i = true;
              }
              r &&
                (r[a] = {
                  state: n,
                  n: t.length,
                });
            }
          }
          if (!i)
            return {
              state: n,
              transactions: t,
            };
        }
      }
      applyInner(t) {
        if (!t.before.eq(this.doc))
          throw peers.RangeError("Applying a mismatched transaction");
        let n = new e(this.config),
          r = this.config.fields;
        for (let e = 0; e < r.length; e++) {
          let i = r[e];
          n[i.name] = i.apply(t, this[i.name], this, n);
        }
        return n;
      }
      get tr() {
        return new peers.Nxn(this);
      }
      static create(t) {
        let n = new peers.Ixn(t.doc ? t.doc.type.schema : t.schema, t.plugins),
          r = new e(n);
        for (let e = 0; e < n.fields.length; e++)
          r[n.fields[e].name] = n.fields[e].init(t, r);
        return r;
      }
      reconfigure(t) {
        let n = new peers.Ixn(this.schema, t.plugins),
          r = n.fields,
          i = new e(n);
        for (let e = 0; e < r.length; e++) {
          let n = r[e].name;
          i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
        }
        return i;
      }
      toJSON(e) {
        let t = {
          doc: this.doc.toJSON(),
          selection: this.selection.toJSON(),
        };
        if (
          (this.storedMarks &&
            (t.storedMarks = this.storedMarks.map((item) => {
              return item.toJSON();
            })),
          e && typeof e == "object")
        )
          for (let n in e) {
            if (n == "doc" || n == "selection")
              throw peers.RangeError(
                "The JSON fields `doc` and `selection` are reserved",
              );
            let r = e[n],
              i = r.spec.state;
            i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
          }
        return t;
      }
      static fromJSON(t, n, r) {
        if (!n)
          throw peers.RangeError("Invalid input for EditorState.fromJSON");
        if (!t.schema)
          throw peers.RangeError("Required config field 'schema' missing");
        let i = new peers.Ixn(t.schema, t.plugins),
          a = new e(i);
        return (
          i.fields.forEach((item) => {
            if (item.name == "doc") a.doc = peers.OS.fromJSON(t.schema, n.doc);
            else if (item.name == "selection")
              a.selection = peers.LS.fromJSON(a.doc, n.selection);
            else if (item.name == "storedMarks")
              n.storedMarks &&
                (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
            else {
              if (r)
                for (let i in r) {
                  let o = r[i],
                    s = o.spec.state;
                  if (
                    o.key == item.name &&
                    s &&
                    s.fromJSON &&
                    Object.prototype.hasOwnProperty.call(n, i)
                  ) {
                    a[item.name] = s.fromJSON.call(o, t, n[i], a);
                    return;
                  }
                }
              a[item.name] = item.init(t, a);
            }
          }),
          a
        );
      }
    };
    VS = class {
      constructor(event) {
        this.spec = event;
        this.props = {};
        event.props && peers.Sxn(event.props, this, this.props);
        this.key = event.key ? event.key.key : peers.Cxn("plugin");
      }
      getState(e) {
        return e[this.key];
      }
    };
    Rxn = Object.create(null);
    HS = class {
      constructor(e = "key") {
        this.key = peers.Cxn(e);
      }
      get(e) {
        return e.config.pluginsByKey[this.key];
      }
      getState(e) {
        return e[this.key];
      }
    };
  });
}
