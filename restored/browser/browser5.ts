// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zYt`) / export `lnt`.

export type Browser5Peers = {
  Cy: (...args: unknown[]) => unknown;
  Dqt: (...args: unknown[]) => unknown;
  My: (...args: unknown[]) => unknown;
  Ny: (...args: unknown[]) => unknown;
  _defaultBorderStyle: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  addFakeAnnotation: (...args: unknown[]) => unknown;
  addLinkAnnotations: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  getAriaAttributes: (...args: unknown[]) => unknown;
  getEditableAnnotation: (...args: unknown[]) => unknown;
  getEditableAnnotations: (...args: unknown[]) => unknown;
  hasEditableAnnotations: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  l: (...args: unknown[]) => unknown;
  mYt: (...args: unknown[]) => unknown;
  moveElementInDOM: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nqt: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pYt: (...args: unknown[]) => unknown;
  popup: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  render: (...args: unknown[]) => unknown;
  renderAnnotationElement: (...args: unknown[]) => unknown;
  renderCommentButton: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  setMissingCanvas: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  uYt: (...args: unknown[]) => unknown;
  update: (...args: unknown[]) => unknown;
};

let peers: Browser5Peers | null = null;

/** Wire browser5 peers once companions land. */
export function setBrowser5Peers(next: Browser5Peers): void {
  peers = next;
}

/**
 * Bundle export `lnt` / internal `zYt`.
 */
export function browser5() {
  if (peers == null) {
    throw new Error("browser5 peers are not configured");
  }

  return class e {
    #e = null;
    #t = null;
    #n = null;
    #r = new Map();
    #i = null;
    #a = null;
    constructor({
      div: e,
      accessibilityManager: t,
      annotationCanvasMap: n,
      annotationEditorUIManager: r,
      page: i,
      viewport: a,
      structTreeLayer: o,
      commentManager: s,
      linkService: c,
      annotationStorage: l,
    }) {
      ((this.div = peers.e),
        (this.#e = peers.t),
        (this.#t = peers.n),
        (this.#i = peers.o || null),
        (this.#a = peers.c || null),
        (this.#n = peers.l || new peers.Dqt()),
        (this.page = peers.i),
        (this.viewport = peers.a),
        (this.zIndex = 0),
        (this._annotationEditorUIManager = peers.r),
        (this._commentManager = peers.s || null));
    }
    hasEditableAnnotations() {
      return this.#r.size > 0;
    }
    async #o(e, t, n) {
      let r = peers.e.firstChild || peers.e,
        i = (peers.r.id = `${peers.nqt}${peers.t}`),
        a = await this.#i?.getAriaAttributes(peers.i);
      if (peers.a)
        for (let [e, t] of peers.a) peers.r.setAttribute(peers.e, peers.t);
      peers.n
        ? peers.n.at(-1).container.after(peers.e)
        : (this.div.append(peers.e),
          this.#e?.moveElementInDOM(this.div, peers.e, peers.r, !1));
    }
    async render(e) {
      let { annotations: t } = peers.e,
        n = this.div;
      peers.Cy(peers.n, this.viewport);
      let r = new Map(),
        i = {
          data: null,
          layer: peers.n,
          linkService: this.#a,
          downloadManager: peers.e.downloadManager,
          imageResourcesPath: peers.e.imageResourcesPath || ``,
          renderForms: peers.e.renderForms !== !1,
          svgFactory: new peers.uYt(),
          annotationStorage: this.#n,
          enableComment: peers.e.enableComment === !0,
          enableScripting: peers.e.enableScripting === !0,
          hasJSActions: peers.e.hasJSActions,
          fieldObjects: peers.e.fieldObjects,
          parent: this,
          elements: null,
        };
      for (let e of peers.t) {
        if (peers.e.noHTML) continue;
        let t = peers.e.annotationType === peers.My.POPUP;
        if (peers.t) {
          let t = peers.r.get(peers.e.id);
          if (!peers.t) continue;
          peers.i.elements = peers.t;
        } else if (
          peers.e.rect[2] === peers.e.rect[0] ||
          peers.e.rect[3] === peers.e.rect[1]
        )
          continue;
        peers.i.data = peers.e;
        let n = peers.pYt.create(peers.i);
        if (!peers.n.isRenderable) continue;
        if (!peers.t && peers.e.popupRef) {
          let t = peers.r.get(peers.e.popupRef);
          peers.t
            ? peers.t.push(peers.n)
            : peers.r.set(peers.e.popupRef, [peers.n]);
        }
        let a = peers.n.render();
        (peers.e.hidden && (peers.a.style.visibility = `hidden`),
          await this.#o(peers.a, peers.e.id, peers.i.elements),
          peers.n.extraPopupElement?.popup?.renderCommentButton(),
          peers.n._isEditable &&
            (this.#r.set(peers.n.data.id, peers.n),
            this._annotationEditorUIManager?.renderAnnotationElement(peers.n)));
      }
      this.#s();
    }
    async addLinkAnnotations(t) {
      let n = {
        data: null,
        layer: this.div,
        linkService: this.#a,
        svgFactory: new peers.uYt(),
        parent: this,
      };
      for (let r of peers.t) {
        ((peers.r.borderStyle ||= peers.e._defaultBorderStyle),
          (peers.n.data = peers.r));
        let t = peers.pYt.create(peers.n);
        if (!peers.t.isRenderable) continue;
        let i = peers.t.render();
        await this.#o(peers.i, peers.r.id, null);
      }
    }
    update({ viewport: e }) {
      let t = this.div;
      ((this.viewport = peers.e),
        peers.Cy(peers.t, {
          rotation: peers.e.rotation,
        }),
        this.#s(),
        (peers.t.hidden = !1));
    }
    #s() {
      if (!this.#t) return;
      let e = this.div;
      for (let [t, n] of this.#t) {
        let r = peers.e.querySelector(`[data-annotation-id="${peers.t}"]`);
        if (!peers.r) continue;
        peers.n.className = `annotationContent`;
        let { firstChild: i } = peers.r;
        peers.i
          ? peers.i.nodeName === `CANVAS`
            ? peers.i.replaceWith(peers.n)
            : peers.i.classList.contains(`annotationContent`)
              ? peers.i.after(peers.n)
              : peers.i.before(peers.n)
          : peers.r.append(peers.n);
        let a = this.#r.get(peers.t);
        peers.a &&
          (peers.a._hasNoCanvas
            ? (this._annotationEditorUIManager?.setMissingCanvas(
                peers.t,
                peers.r.id,
                peers.n,
              ),
              (peers.a._hasNoCanvas = !1))
            : (peers.a.canvas = peers.n));
      }
      this.#t.clear();
    }
    getEditableAnnotations() {
      return Array.from(this.#r.values());
    }
    getEditableAnnotation(e) {
      return this.#r.get(peers.e);
    }
    addFakeAnnotation(e) {
      let { div: t } = this,
        { id: n, rotation: r } = peers.e,
        i = new peers.mYt({
          data: {
            id: peers.n,
            rect: peers.e.getPDFRect(),
            rotation: peers.r,
          },
          editor: peers.e,
          layer: peers.t,
          parent: this,
          enableComment: !!this._commentManager,
          linkService: this.#a,
          annotationStorage: this.#n,
        }),
        a = peers.i.render();
      return (
        peers.t.append(peers.a),
        this.#e?.moveElementInDOM(peers.t, peers.a, peers.a, !1),
        peers.i.createOrUpdatePopup(),
        peers.i
      );
    }
    static get _defaultBorderStyle() {
      return peers.hy(
        this,
        `_defaultBorderStyle`,
        Object.freeze({
          width: 1,
          rawWidth: 1,
          style: peers.Ny.SOLID,
          dashArray: [3],
          horizontalCornerRadius: 0,
          verticalCornerRadius: 0,
        }),
      );
    }
  };
}
