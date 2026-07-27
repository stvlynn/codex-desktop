// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RS`) / export `u7`.

export type DeferredU7Peers = {
  $cursor: (...args: unknown[]) => unknown;
  DS: (...args: unknown[]) => unknown;
  Dxn: (...args: unknown[]) => unknown;
  LS: (...args: unknown[]) => unknown;
  RangeError: (...args: unknown[]) => unknown;
  between: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eq: (...args: unknown[]) => unknown;
  fromJSON: (...args: unknown[]) => unknown;
  getBookmark: (...args: unknown[]) => unknown;
  map: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  replace: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  toJSON: (...args: unknown[]) => unknown;
  vxn: (...args: unknown[]) => unknown;
};

let peers: DeferredU7Peers | null = null;

/** Wire deferredU7 peers once companions land. */
export function setDeferredU7Peers(next: DeferredU7Peers): void {
  peers = next;
}

/**
 * Bundle export `u7` / internal `RS`.
 */
export function deferredU7() {
  if (peers == null) {
    throw new Error("deferredU7 peers are not configured");
  }

  return class e extends peers.LS {
    constructor(e, t = peers.e) {
      (peers.vxn(peers.e), peers.vxn(peers.t), super(peers.e, peers.t));
    }
    get $cursor() {
      return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(t, n) {
      let r = peers.t.resolve(peers.n.map(this.head));
      if (!r.parent.inlineContent) return peers.LS.near(r);
      let i = peers.t.resolve(peers.n.map(this.anchor));
      return new peers.e(i.parent.inlineContent ? i : r, r);
    }
    replace(e, t = peers.DS.empty) {
      if ((super.replace(peers.e, peers.t), peers.t == peers.DS.empty)) {
        let t = this.$from.marksAcross(this.$to);
        peers.t && peers.e.ensureMarks(peers.t);
      }
    }
    eq(t) {
      return (
        peers.t instanceof peers.e &&
        peers.t.anchor == this.anchor &&
        peers.t.head == this.head
      );
    }
    getBookmark() {
      return new peers.Dxn(this.anchor, this.head);
    }
    toJSON() {
      return {
        type: `text`,
        anchor: this.anchor,
        head: this.head,
      };
    }
    static fromJSON(t, n) {
      if (typeof peers.n.anchor != `number` || typeof peers.n.head != `number`)
        throw peers.RangeError(`Invalid input for TextSelection.fromJSON`);
      return new peers.e(
        peers.t.resolve(peers.n.anchor),
        peers.t.resolve(peers.n.head),
      );
    }
    static create(e, t, n = peers.t) {
      let r = peers.e.resolve(peers.t);
      return new this(r, peers.n == peers.t ? r : peers.e.resolve(peers.n));
    }
    static between(t, n, r) {
      let i = peers.t.pos - peers.n.pos;
      if (((!r || i) && (r = i >= 0 ? 1 : -1), !peers.n.parent.inlineContent)) {
        let e =
          peers.LS.findFrom(peers.n, r, !0) ||
          peers.LS.findFrom(peers.n, -r, !0);
        if (peers.e) n = peers.e.$head;
        else return peers.LS.near(peers.n, r);
      }
      return (
        peers.t.parent.inlineContent ||
          (i == 0
            ? (t = peers.n)
            : ((t = (
                peers.LS.findFrom(peers.t, -r, !0) ||
                peers.LS.findFrom(peers.t, r, !0)
              ).$anchor),
              peers.t.pos < peers.n.pos != i < 0 && (t = peers.n))),
        new peers.e(peers.t, peers.n)
      );
    }
  };
}
