// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cXt`) / export `ant`.

export type DeferredBrowserAntPeers = {
  AbortController: (...args: unknown[]) => unknown;
  Cy: (...args: unknown[]) => unknown;
  Gy: (...args: unknown[]) => unknown;
  JYt: (...args: unknown[]) => unknown;
  Oy: (...args: unknown[]) => unknown;
  S: (...args: unknown[]) => unknown;
  VYt: (...args: unknown[]) => unknown;
  WKt: (...args: unknown[]) => unknown;
  _: (...args: unknown[]) => unknown;
  _initialized: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  abort: (...args: unknown[]) => unknown;
  add: (...args: unknown[]) => unknown;
  addCommands: (...args: unknown[]) => unknown;
  addNewEditor: (...args: unknown[]) => unknown;
  addOrRebuild: (...args: unknown[]) => unknown;
  addUndoableEditor: (...args: unknown[]) => unknown;
  annotationElementId: (...args: unknown[]) => unknown;
  attach: (...args: unknown[]) => unknown;
  b: (...args: unknown[]) => unknown;
  boundingClientRect: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  canCreateNewEmptyEditor: (...args: unknown[]) => unknown;
  changeParent: (...args: unknown[]) => unknown;
  classList: (...args: unknown[]) => unknown;
  cleanUndoStack: (...args: unknown[]) => unknown;
  clearTimeout: (...args: unknown[]) => unknown;
  combinedSignal: (...args: unknown[]) => unknown;
  commitOrRemove: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  createAndAddNewEditor: (...args: unknown[]) => unknown;
  d: (...args: unknown[]) => unknown;
  deserialize: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  detach: (...args: unknown[]) => unknown;
  disable: (...args: unknown[]) => unknown;
  disableClick: (...args: unknown[]) => unknown;
  disableTextSelection: (...args: unknown[]) => unknown;
  div: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eXt: (...args: unknown[]) => unknown;
  enable: (...args: unknown[]) => unknown;
  oXt: (...args: unknown[]) => unknown;
  sXt: (...args: unknown[]) => unknown;
  zy: (...args: unknown[]) => unknown;
};
let peers: DeferredBrowserAntPeers | null = null;

/** Wire deferredBrowserAnt peers once companions land. */
export function setDeferredBrowserAntPeers(
  next: DeferredBrowserAntPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ant` / internal `cXt`.
 */
export function deferredBrowserAnt() {
  if (peers == null) {
    throw new Error("deferredBrowserAnt peers are not configured");
  }
  return class e {
    #e;
    #t = false;
    #n = null;
    #r = null;
    #i = null;
    #a = new Map();
    #o = false;
    #s = false;
    #c = false;
    #l = null;
    #u = null;
    #d = null;
    #f = null;
    #p = null;
    #m = -1;
    #h;
    static _initialized = false;
    static #g = new Map(
      [peers.VYt, peers.eXt, peers.sXt, peers.JYt, peers.oXt].map((item) => {
        return [peers.e._editorType, peers.e];
      }),
    );
    constructor({
      uiManager,
      pageIndex,
      div,
      structTreeLayer,
      accessibilityManager,
      annotationLayer,
      drawLayer,
      textLayer,
      viewport,
      l10n,
    }) {
      let d = [...peers.e.#g.values()];
      if (!peers.e._initialized) {
        peers.e._initialized = true;
        for (let e of peers.d) peers.e.initialize(l10n, uiManager);
      }
      uiManager.registerEditorTypes(peers.d);
      this.#h = uiManager;
      this.pageIndex = pageIndex;
      this.div = div;
      this.#e = peers.a;
      this.#n = annotationLayer;
      this.viewport = viewport;
      this.#d = peers.c;
      this.drawLayer = drawLayer;
      this._structTree = structTreeLayer;
      this.#h.addLayer(this);
    }
    get isEmpty() {
      return this.#a.size === 0;
    }
    get isInvisible() {
      return this.isEmpty && this.#h.getMode() === peers.Oy.NONE;
    }
    updateToolbar(e) {
      this.#h.updateToolbar(peers.e);
    }
    updateMode(t = this.#h.getMode()) {
      switch ((this.#S(), t)) {
        case peers.Oy.NONE:
          this.div.classList.toggle("nonEditing", true);
          this.disableTextSelection();
          this.togglePointerEvents(false);
          this.toggleAnnotationLayerPointerEvents(true);
          this.disableClick();
          return;
        case peers.Oy.INK:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
          break;
        case peers.Oy.HIGHLIGHT:
          this.enableTextSelection();
          this.togglePointerEvents(false);
          this.disableClick();
          break;
        default:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      let { classList } = this.div;
      if ((classList.toggle("nonEditing", false), t === peers.Oy.POPUP))
        classList.toggle("commentEditing", true);
      else {
        classList.toggle("commentEditing", false);
        for (let r of peers.e.#g.values())
          classList.toggle(`${r._type}Editing`, t === r._editorType);
      }
      this.div.hidden = false;
    }
    hasTextLayer(e) {
      return peers.e === this.#d?.div;
    }
    setEditingState(e) {
      this.#h.setEditingState(peers.e);
    }
    addCommands(e) {
      this.#h.addCommands(peers.e);
    }
    cleanUndoStack(e) {
      this.#h.cleanUndoStack(peers.e);
    }
    toggleDrawing(e = false) {
      this.div.classList.toggle("drawing", !peers.e);
    }
    togglePointerEvents(e = false) {
      this.div.classList.toggle("disabled", !peers.e);
    }
    toggleAnnotationLayerPointerEvents(e = false) {
      this.#n?.div.classList.toggle("disabled", !peers.e);
    }
    get #_() {
      return this.#a.size === 0
        ? this.#h.getEditors(this.pageIndex)
        : this.#a.values();
    }
    async enable() {
      this.#c = true;
      this.div.tabIndex = 0;
      this.togglePointerEvents(true);
      this.div.classList.toggle("nonEditing", false);
      this.#p?.abort();
      this.#p = null;
      let e = new Set();
      for (let t of this.#_) {
        t.enableEditing();
        t.show(true);
        t.annotationElementId &&
          (this.#h.removeChangedExistingAnnotation(t),
          peers.e.add(t.annotationElementId));
      }
      let t = this.#n;
      if (t)
        for (let n of t.getEditableAnnotations()) {
          if (
            (n.hide(),
            this.#h.isDeletedAnnotationElement(n.data.id) ||
              peers.e.has(n.data.id))
          )
            continue;
          let t = await this.deserialize(n);
          t && (this.addOrRebuild(t), t.enableEditing());
        }
      this.#c = false;
      this.#h._eventBus.dispatch("editorsrendered", {
        source: this,
        pageNumber: this.pageIndex + 1,
      });
    }
    disable() {
      if (
        ((this.#s = true),
        (this.div.tabIndex = -1),
        this.togglePointerEvents(false),
        this.div.classList.toggle("nonEditing", true),
        this.#d && !this.#p)
      ) {
        this.#p = new peers.AbortController();
        let e = this.#h.combinedSignal(this.#p);
        this.#d.div.addEventListener(
          "pointerdown",
          (e) => {
            let { clientX, clientY, timeStamp } = peers.e;
            if (timeStamp - this.#m > 500) {
              this.#m = timeStamp;
              return;
            }
            this.#m = -1;
            let { classList: _classList } = this.div;
            _classList.toggle("getElements", true);
            let a = document.elementsFromPoint(clientX, clientY);
            if (
              (_classList.toggle("getElements", false),
              !this.div.contains(peers.a[0]))
            )
              return;
            let o,
              s = RegExp(`^${peers.WKt}[0-9]+$`);
            for (let e of peers.a)
              if (s.test(peers.e.id)) {
                o = peers.e.id;
                break;
              }
            if (!o) return;
            let c = this.#a.get(o);
            peers.c?.annotationElementId === null &&
              (peers.e.stopPropagation(),
              peers.e.preventDefault(),
              peers.c.dblclick(peers.e));
          },
          {
            signal: peers.e,
            capture: true,
          },
        );
      }
      let t = this.#n;
      if (t) {
        let e = new Map(),
          n = new Map();
        for (let r of this.#_) {
          if ((r.disableEditing(), !r.annotationElementId)) {
            r.updateFakeAnnotationElement(t);
            continue;
          }
          if (r.serialize() !== null) {
            peers.e.set(r.annotationElementId, r);
            continue;
          } else n.set(r.annotationElementId, r);
          this.getEditableAnnotation(r.annotationElementId)?.show();
          r.remove();
        }
        let r = t.getEditableAnnotations();
        for (let t of r) {
          let { id } = t.data;
          if (this.#h.isDeletedAnnotationElement(id)) {
            t.updateEdited({
              deleted: true,
            });
            continue;
          }
          let i = n.get(id);
          if (i) {
            i.resetAnnotationElement(t);
            i.show(false);
            t.show();
            continue;
          }
          i = peers.e.get(id);
          i &&
            (this.#h.addChangedExistingAnnotation(i),
            i.renderAnnotationElement(t) && i.show(false));
          t.show();
        }
      }
      this.#S();
      this.isEmpty && (this.div.hidden = true);
      let { classList } = this.div;
      for (let t of peers.e.#g.values()) classList.remove(`${t._type}Editing`);
      this.disableTextSelection();
      this.toggleAnnotationLayerPointerEvents(true);
      this.#s = false;
    }
    getEditableAnnotation(e) {
      return this.#n?.getEditableAnnotation(peers.e) || null;
    }
    setActiveEditor(e) {
      this.#h.getActive() !== peers.e && this.#h.setActiveEditor(peers.e);
    }
    enableTextSelection() {
      if (((this.div.tabIndex = -1), this.#d?.div && !this.#f)) {
        this.#f = new peers.AbortController();
        let e = this.#h.combinedSignal(this.#f);
        this.#d.div.addEventListener("pointerdown", this.#v.bind(this), {
          signal: peers.e,
        });
        this.#d.div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      this.div.tabIndex = 0;
      this.#d?.div &&
        this.#f &&
        (this.#f.abort(),
        (this.#f = null),
        this.#d.div.classList.remove("highlighting"));
    }
    #v(e) {
      this.#h.unselectAll();
      let { target } = peers.e;
      if (
        target === this.#d.div ||
        ((target.getAttribute("role") === "img" ||
          target.classList.contains("endOfContent")) &&
          this.#d.div.contains(target))
      ) {
        let { isMac } = peers.zy.platform;
        if (peers.e.button !== 0 || (peers.e.ctrlKey && isMac)) return;
        this.#h.showAllEditors("highlight", true, true);
        this.#d.div.classList.add("free");
        this.toggleDrawing();
        peers.JYt.startHighlighting(this, this.#h.direction === "ltr", {
          target: this.#d.div,
          x: peers.e.x,
          y: peers.e.y,
        });
        this.#d.div.addEventListener(
          "pointerup",
          () => {
            this.#d.div.classList.remove("free");
            this.toggleDrawing(true);
          },
          {
            once: true,
            signal: this.#h._signal,
          },
        );
        peers.e.preventDefault();
      }
    }
    enableClick() {
      if (this.#r) return;
      this.#r = new peers.AbortController();
      let e = this.#h.combinedSignal(this.#r);
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
        signal: peers.e,
      });
      let t = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", t, {
        signal: peers.e,
      });
      this.div.addEventListener("pointercancel", t, {
        signal: peers.e,
      });
    }
    disableClick() {
      this.#r?.abort();
      this.#r = null;
    }
    attach(e) {
      this.#a.set(peers.e.id, peers.e);
      let { annotationElementId } = peers.e;
      annotationElementId &&
        this.#h.isDeletedAnnotationElement(annotationElementId) &&
        this.#h.removeDeletedAnnotationElement(peers.e);
    }
    detach(e) {
      this.#a.delete(peers.e.id);
      this.#e?.removePointerInTextLayer(peers.e.contentDiv);
      !this.#s &&
        peers.e.annotationElementId &&
        this.#h.addDeletedAnnotationElement(peers.e);
    }
    remove(e) {
      this.detach(peers.e);
      this.#h.removeEditor(peers.e);
      peers.e.div.remove();
      peers.e.isAttachedToDOM = false;
    }
    changeParent(e) {
      peers.e.parent !== this &&
        (peers.e.parent &&
          peers.e.annotationElementId &&
          (this.#h.addDeletedAnnotationElement(peers.e.annotationElementId),
          peers.Gy.deleteAnnotationElement(peers.e),
          (peers.e.annotationElementId = null)),
        this.attach(peers.e),
        peers.e.parent?.detach(peers.e),
        peers.e.setParent(this),
        peers.e.div &&
          peers.e.isAttachedToDOM &&
          (peers.e.div.remove(), this.div.append(peers.e.div)));
    }
    add(e) {
      if (!(peers.e.parent === this && peers.e.isAttachedToDOM)) {
        if (
          (this.changeParent(peers.e),
          this.#h.addEditor(peers.e),
          this.attach(peers.e),
          !peers.e.isAttachedToDOM)
        ) {
          let t = peers.e.render();
          this.div.append(t);
          peers.e.isAttachedToDOM = true;
        }
        peers.e.fixAndSetPosition();
        peers.e.onceAdded(!this.#c);
        this.#h.addToAnnotationStorage(peers.e);
        peers.e._reportTelemetry(peers.e.telemetryInitialData);
      }
    }
    moveEditorInDOM(e) {
      if (!peers.e.isAttachedToDOM) return;
      let { activeElement } = document;
      peers.e.div.contains(activeElement) &&
        !this.#i &&
        ((peers.e._focusEventsAllowed = false),
        (this.#i = setTimeout(() => {
          this.#i = null;
          peers.e.div.contains(document.activeElement)
            ? (peers.e._focusEventsAllowed = true)
            : (peers.e.div.addEventListener(
                "focusin",
                () => {
                  peers.e._focusEventsAllowed = true;
                },
                {
                  once: true,
                  signal: this.#h._signal,
                },
              ),
              activeElement.focus());
        }, 0)));
      peers.e._structTreeParentId = this.#e?.moveElementInDOM(
        this.div,
        peers.e.div,
        peers.e.contentDiv,
        true,
      );
    }
    addOrRebuild(e) {
      peers.e.needsToBeRebuilt()
        ? ((peers.e.parent ||= this), peers.e.rebuild(), peers.e.show())
        : this.add(peers.e);
    }
    addUndoableEditor(e) {
      this.addCommands({
        cmd: () => {
          return peers.e._uiManager.rebuild(peers.e);
        },
        undo: () => {
          peers.e.remove();
        },
        mustExec: false,
      });
    }
    getEditorByUID(e) {
      for (let t of this.#a.values()) if (t.uid === peers.e) return t;
      return null;
    }
    getNextId() {
      return this.#h.getId();
    }
    get #y() {
      return peers.e.#g.get(this.#h.getMode());
    }
    combinedSignal(e) {
      return this.#h.combinedSignal(peers.e);
    }
    #b(e) {
      let t = this.#y;
      return t ? new t.prototype.constructor(peers.e) : null;
    }
    canCreateNewEmptyEditor() {
      return this.#y?.canCreateNewEmptyEditor();
    }
    async pasteEditor(e, t) {
      this.updateToolbar(peers.e);
      await this.#h.updateMode(peers.e.mode);
      let { offsetX, offsetY } = this.#x(),
        i = this.getNextId(),
        a = this.#b({
          parent: this,
          id: i,
          x: offsetX,
          y: offsetY,
          uiManager: this.#h,
          isCentered: true,
          ...t,
        });
      peers.a && this.add(peers.a);
    }
    async deserialize(t) {
      return (
        (await peers.e.#g
          .get(t.annotationType ?? t.annotationEditorType)
          ?.deserialize(t, this, this.#h)) || null
      );
    }
    createAndAddNewEditor(e, t, n = {}) {
      let r = this.getNextId(),
        i = this.#b({
          parent: this,
          id: r,
          x: peers.e.offsetX,
          y: peers.e.offsetY,
          uiManager: this.#h,
          isCentered: t,
          ...n,
        });
      return (i && this.add(i), i);
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    #x() {
      let { x, y, width, height } = this.boundingClientRect,
        i = Math.max(0, peers.e),
        a = Math.max(0, y),
        o = Math.min(window.innerWidth, peers.e + width),
        s = Math.min(window.innerHeight, y + height),
        c = (i + o) / 2 - peers.e,
        l = (peers.a + s) / 2 - y,
        [u, d] =
          this.viewport.rotation % 180 == 0 ? [peers.c, l] : [l, peers.c];
      return {
        offsetX: u,
        offsetY: peers.d,
      };
    }
    addNewEditor(e = {}) {
      this.createAndAddNewEditor(this.#x(), true, peers.e);
    }
    setSelected(e) {
      this.#h.setSelected(peers.e);
    }
    toggleSelected(e) {
      this.#h.toggleSelected(peers.e);
    }
    unselect(e) {
      this.#h.unselect(peers.e);
    }
    pointerup(e) {
      let { isMac } = peers.zy.platform;
      if (
        peers.e.button !== 0 ||
        (peers.e.ctrlKey && isMac) ||
        peers.e.target !== this.div ||
        !this.#o ||
        ((this.#o = false),
        this.#y?.isDrawer && this.#y.supportMultipleDrawings)
      )
        return;
      if (!this.#t) {
        this.#t = true;
        return;
      }
      let n = this.#h.getMode();
      if (n === peers.Oy.STAMP || n === peers.Oy.SIGNATURE) {
        this.#h.unselectAll();
        return;
      }
      this.createAndAddNewEditor(peers.e, false);
    }
    pointerdown(e) {
      if (
        (this.#h.getMode() === peers.Oy.HIGHLIGHT && this.enableTextSelection(),
        this.#o)
      ) {
        this.#o = false;
        return;
      }
      let { isMac } = peers.zy.platform;
      if (
        peers.e.button !== 0 ||
        (peers.e.ctrlKey && isMac) ||
        peers.e.target !== this.div
      )
        return;
      if (((this.#o = true), this.#y?.isDrawer)) {
        this.startDrawingSession(peers.e);
        return;
      }
      let n = this.#h.getActive();
      this.#t = !n || n.isEmpty();
    }
    startDrawingSession(e) {
      if (
        (this.div.focus({
          preventScroll: true,
        }),
        this.#l)
      ) {
        this.#y.startDrawing(this, this.#h, false, peers.e);
        return;
      }
      this.#h.setCurrentDrawingSession(this);
      this.#l = new peers.AbortController();
      let t = this.#h.combinedSignal(this.#l);
      this.div.addEventListener(
        "blur",
        ({ relatedTarget }) => {
          peers.e &&
            !this.div.contains(peers.e) &&
            ((this.#u = null), this.commitOrRemove());
        },
        {
          signal: t,
        },
      );
      this.#y.startDrawing(this, this.#h, false, peers.e);
    }
    pause(e) {
      if (peers.e) {
        let { activeElement } = document;
        this.div.contains(peers.e) && (this.#u = peers.e);
        return;
      }
      this.#u &&
        setTimeout(() => {
          this.#u?.focus();
          this.#u = null;
        }, 0);
    }
    endDrawingSession(e = false) {
      return this.#l
        ? (this.#h.setCurrentDrawingSession(null),
          this.#l.abort(),
          (this.#l = null),
          (this.#u = null),
          this.#y.endDrawing(peers.e))
        : null;
    }
    findNewParent(e, t, n) {
      let r = this.#h.findParent(t, n);
      return r === null || r === this ? false : (r.changeParent(peers.e), true);
    }
    commitOrRemove() {
      return this.#l ? (this.endDrawingSession(), true) : false;
    }
    onScaleChanging() {
      this.#l && this.#y.onScaleChangingWhenDrawing(this);
    }
    destroy() {
      this.commitOrRemove();
      this.#h.getActive()?.parent === this &&
        (this.#h.commitOrRemove(), this.#h.setActiveEditor(null));
      this.#i &&= (peers.clearTimeout(this.#i), null);
      for (let e of this.#a.values()) {
        this.#e?.removePointerInTextLayer(peers.e.contentDiv);
        peers.e.setParent(null);
        peers.e.isAttachedToDOM = false;
        peers.e.div.remove();
      }
      this.div = null;
      this.#a.clear();
      this.#h.removeLayer(this);
    }
    #S() {
      for (let e of this.#a.values()) peers.e.isEmpty() && peers.e.remove();
    }
    render({ viewport }) {
      this.viewport = peers.e;
      peers.Cy(this.div, peers.e);
      for (let e of this.#h.getEditors(this.pageIndex)) {
        this.add(peers.e);
        peers.e.rebuild();
      }
      this.updateMode();
    }
    update({ viewport }) {
      this.#h.commitOrRemove();
      this.#S();
      let t = this.viewport.rotation,
        n = peers.e.rotation;
      if (
        ((this.viewport = peers.e),
        peers.Cy(this.div, {
          rotation: n,
        }),
        t !== n)
      )
        for (let e of this.#a.values()) peers.e.rotate(n);
    }
    get pageDimensions() {
      let { pageWidth, pageHeight } = this.viewport.rawDims;
      return [peers.e, pageHeight];
    }
    get scale() {
      return this.#h.viewParameters.realScale;
    }
  };
}
