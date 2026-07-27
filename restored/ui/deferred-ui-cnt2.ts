// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wy`) / export `cnt`.

export type BindDeferredUiCnt2Peers = {
  $: (...args: unknown[]) => unknown;
  A: (...args: unknown[]) => unknown;
  AbortController: (...args: unknown[]) => unknown;
  B: (...args: unknown[]) => unknown;
  C: (...args: unknown[]) => unknown;
  D: (...args: unknown[]) => unknown;
  E: (...args: unknown[]) => unknown;
  F: (...args: unknown[]) => unknown;
  G: (...args: unknown[]) => unknown;
  H: (...args: unknown[]) => unknown;
  HTMLButtonElement: (...args: unknown[]) => unknown;
  HTMLInputElement: (...args: unknown[]) => unknown;
  Hy: (...args: unknown[]) => unknown;
  I: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K: (...args: unknown[]) => unknown;
  L: (...args: unknown[]) => unknown;
  M: (...args: unknown[]) => unknown;
  N: (...args: unknown[]) => unknown;
  O: (...args: unknown[]) => unknown;
  Oy: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R: (...args: unknown[]) => unknown;
  S: (...args: unknown[]) => unknown;
  T: (...args: unknown[]) => unknown;
  TRANSLATE_BIG: (...args: unknown[]) => unknown;
  TRANSLATE_SMALL: (...args: unknown[]) => unknown;
  U: (...args: unknown[]) => unknown;
  V: (...args: unknown[]) => unknown;
  W: (...args: unknown[]) => unknown;
  WKt: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _: (...args: unknown[]) => unknown;
  _editorUndoBar: (...args: unknown[]) => unknown;
  _highlightColors: (...args: unknown[]) => unknown;
  _keyboardManager: (...args: unknown[]) => unknown;
  _qt: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  a11yAlert: (...args: unknown[]) => unknown;
  fy: (...args: unknown[]) => unknown;
  gqt: (...args: unknown[]) => unknown;
  hqt: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  ky: (...args: unknown[]) => unknown;
  mqt: (...args: unknown[]) => unknown;
  vqt: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiCnt2Peers | null = null;

/** Wire bindDeferredUiCnt2 peers once companions land. */
export function setBindDeferredUiCnt2Peers(
  next: BindDeferredUiCnt2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `cnt` / internal `Wy`.
 */
export function bindDeferredUiCnt2() {
  if (peers == null) {
    throw new Error("bindDeferredUiCnt2 peers are not configured");
  }
  return class e {
    #e = new peers.AbortController();
    #t = null;
    #n = null;
    #r = new Map();
    #i = new Map();
    #a = null;
    #o = null;
    #s = null;
    #c = new peers._qt();
    #l = null;
    #u = null;
    #d = null;
    #f = 0;
    #p = new Set();
    #m = null;
    #h = null;
    #g = new Set();
    _editorUndoBar = null;
    #_ = false;
    #v = false;
    #y = false;
    #b = null;
    #x = null;
    #S = null;
    #C = null;
    #w = false;
    #T = null;
    #E = new peers.hqt();
    #D = false;
    #O = false;
    #k = false;
    #A = null;
    #j = null;
    #M = null;
    #N = null;
    #P = null;
    #F = peers.Oy.NONE;
    #I = new Set();
    #L = null;
    #R = null;
    #z = null;
    #B = null;
    #V = null;
    #H = {
      isEditing: false,
      isEmpty: true,
      hasSomethingToUndo: false,
      hasSomethingToRedo: false,
      hasSelectedEditor: false,
      hasSelectedText: false,
    };
    #U = [0, 0];
    #W = null;
    #G = null;
    #K = null;
    #q = null;
    #J = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
      let t = e.prototype,
        n = (e) => {
          return (
            e.#G.contains(document.activeElement) &&
            document.activeElement.tagName !== "BUTTON" &&
            e.hasSomethingToControl()
          );
        },
        r = (e, { target }) => {
          if (target instanceof peers.HTMLInputElement) {
            let { type } = target;
            return type !== "text" && type !== "number";
          }
          return true;
        },
        i = this.TRANSLATE_SMALL,
        a = this.TRANSLATE_BIG;
      return peers.hy(
        this,
        "_keyboardManager",
        new peers.vqt([
          [
            ["ctrl+a", "mac+meta+a"],
            t.selectAll,
            {
              checker: r,
            },
          ],
          [
            ["ctrl+z", "mac+meta+z"],
            t.undo,
            {
              checker: r,
            },
          ],
          [
            [
              "ctrl+y",
              "ctrl+shift+z",
              "mac+meta+shift+z",
              "ctrl+shift+Z",
              "mac+meta+shift+Z",
            ],
            t.redo,
            {
              checker: r,
            },
          ],
          [
            [
              "Backspace",
              "alt+Backspace",
              "ctrl+Backspace",
              "shift+Backspace",
              "mac+Backspace",
              "mac+alt+Backspace",
              "mac+ctrl+Backspace",
              "Delete",
              "ctrl+Delete",
              "shift+Delete",
              "mac+Delete",
            ],
            t.delete,
            {
              checker: r,
            },
          ],
          [
            ["Enter", "mac+Enter"],
            t.addNewEditorFromKeyboard,
            {
              checker: (e, { target }) => {
                return (
                  !(target instanceof peers.HTMLButtonElement) &&
                  e.#G.contains(target) &&
                  !e.isEnterHandled
                );
              },
            },
          ],
          [
            [" ", "mac+ "],
            t.addNewEditorFromKeyboard,
            {
              checker: (e, { target }) => {
                return (
                  !(target instanceof peers.HTMLButtonElement) &&
                  e.#G.contains(document.activeElement)
                );
              },
            },
          ],
          [["Escape", "mac+Escape"], t.unselectAll],
          [
            ["ArrowLeft", "mac+ArrowLeft"],
            t.translateSelectedEditors,
            {
              args: [-i, 0],
              checker: n,
            },
          ],
          [
            ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
            t.translateSelectedEditors,
            {
              args: [-peers.a, 0],
              checker: n,
            },
          ],
          [
            ["ArrowRight", "mac+ArrowRight"],
            t.translateSelectedEditors,
            {
              args: [i, 0],
              checker: n,
            },
          ],
          [
            ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
            t.translateSelectedEditors,
            {
              args: [peers.a, 0],
              checker: n,
            },
          ],
          [
            ["ArrowUp", "mac+ArrowUp"],
            t.translateSelectedEditors,
            {
              args: [0, -i],
              checker: n,
            },
          ],
          [
            ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
            t.translateSelectedEditors,
            {
              args: [0, -peers.a],
              checker: n,
            },
          ],
          [
            ["ArrowDown", "mac+ArrowDown"],
            t.translateSelectedEditors,
            {
              args: [0, i],
              checker: n,
            },
          ],
          [
            ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
            t.translateSelectedEditors,
            {
              args: [0, peers.a],
              checker: n,
            },
          ],
        ]),
      );
    }
    constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = (this._signal = this.#e.signal);
      this.#G = e;
      this.#K = t;
      this.#q = n;
      this.#a = r;
      this.#l = i;
      this.#R = peers.a;
      this.#V = s;
      this._eventBus = o;
      o._on("editingaction", this.onEditingAction.bind(this), {
        signal: g,
      });
      o._on("pagechanging", this.onPageChanging.bind(this), {
        signal: g,
      });
      o._on("scalechanging", this.onScaleChanging.bind(this), {
        signal: g,
      });
      o._on("rotationchanging", this.onRotationChanging.bind(this), {
        signal: g,
      });
      o._on("setpreference", this.onSetPreference.bind(this), {
        signal: g,
      });
      o._on(
        "switchannotationeditorparams",
        (e) => {
          return this.updateParams(e.type, e.value);
        },
        {
          signal: g,
        },
      );
      window.addEventListener(
        "pointerdown",
        () => {
          this.#O = true;
        },
        {
          capture: true,
          signal: g,
        },
      );
      window.addEventListener(
        "pointerup",
        () => {
          this.#O = false;
        },
        {
          capture: true,
          signal: g,
        },
      );
      this.#ee();
      this.#se();
      this.#re();
      this.#o = s.annotationStorage;
      this.#b = s.filterFactory;
      this.#z = c;
      this.#C = l || null;
      this.#_ = u;
      this.#v = d;
      this.#y = f;
      this.#P = p || null;
      this.viewParameters = {
        realScale: peers.Hy.PDF_TO_CSS_UNITS,
        rotation: 0,
      };
      this.isShiftKeyDown = false;
      this._editorUndoBar = m || null;
      this._supportsPinchToZoom = h !== false;
      i?.setSidebarUiManager(this);
    }
    destroy() {
      this.#J?.resolve();
      this.#J = null;
      this.#e?.abort();
      this.#e = null;
      this._signal = null;
      for (let e of this.#i.values()) e.destroy();
      this.#i.clear();
      this.#r.clear();
      this.#g.clear();
      this.#N?.clear();
      this.#t = null;
      this.#I.clear();
      this.#c.destroy();
      this.#a?.destroy();
      this.#l?.destroy();
      this.#R?.destroy();
      this.#T?.hide();
      this.#T = null;
      this.#M?.destroy();
      this.#M = null;
      this.#n = null;
      this.#x &&= (clearTimeout(this.#x), null);
      this.#W &&= (clearTimeout(this.#W), null);
      this._editorUndoBar?.destroy();
      this.#V = null;
    }
    combinedSignal(e) {
      return AbortSignal.any([this._signal, e.signal]);
    }
    get mlManager() {
      return this.#P;
    }
    get useNewAltTextFlow() {
      return this.#v;
    }
    get useNewAltTextWhenAddingImage() {
      return this.#y;
    }
    get hcmFilter() {
      return peers.hy(
        this,
        "hcmFilter",
        this.#z
          ? this.#b.addHCMFilter(this.#z.foreground, this.#z.background)
          : "none",
      );
    }
    get direction() {
      return peers.hy(this, "direction", getComputedStyle(this.#G).direction);
    }
    get _highlightColors() {
      return peers.hy(
        this,
        "_highlightColors",
        this.#C
          ? new Map(
              this.#C.split(",").map((item) => {
                return (
                  (item = item.split("=").map((_item) => {
                    return _item.trim();
                  })),
                  (item[1] = item[1].toUpperCase()),
                  item
                );
              }),
            )
          : null,
      );
    }
    get highlightColors() {
      let { _highlightColors } = this;
      if (!_highlightColors) return peers.hy(this, "highlightColors", null);
      let t = new Map(),
        n = !!this.#z;
      for (let [r, i] of _highlightColors) {
        let e = r.endsWith("_HCM");
        if (n && e) {
          t.set(r.replace("_HCM", ""), i);
          continue;
        }
        !n && !e && t.set(r, i);
      }
      return peers.hy(this, "highlightColors", t);
    }
    get highlightColorNames() {
      return peers.hy(
        this,
        "highlightColorNames",
        this.highlightColors
          ? new Map(
              Array.from(this.highlightColors, (e) => {
                return e.reverse();
              }),
            )
          : null,
      );
    }
    getNonHCMColor(e) {
      if (!this._highlightColors) return e;
      let t = this.highlightColorNames.get(e);
      return this._highlightColors.get(t) || e;
    }
    getNonHCMColorName(e) {
      return this.highlightColorNames.get(e) || e;
    }
    setCurrentDrawingSession(e) {
      e
        ? (this.unselectAll(), this.disableUserSelect(true))
        : this.disableUserSelect(false);
      this.#d = e;
    }
    setMainHighlightColorPicker(e) {
      this.#M = e;
    }
    editAltText(e, t = false) {
      this.#a?.editAltText(this, e, t);
    }
    hasCommentManager() {
      return !!this.#l;
    }
    editComment(e, t, n, r) {
      this.#l?.showDialog(this, e, t, n, r);
    }
    selectComment(e, t) {
      this.#i.get(e)?.getEditorByUID(t)?.toggleComment(true, true);
    }
    updateComment(e) {
      this.#l?.updateComment(e.getData());
    }
    updatePopupColor(e) {
      this.#l?.updatePopupColor(e);
    }
    removeComment(e) {
      this.#l?.removeComments([e.uid]);
    }
    toggleComment(e, t, n = undefined) {
      this.#l?.toggleCommentPopup(e, t, n);
    }
    makeCommentColor(e, t) {
      return (e && this.#l?.makeCommentColor(e, t)) || null;
    }
    getCommentDialogElement() {
      return this.#l?.dialogElement || null;
    }
    async waitForEditorsRendered(e) {
      if (this.#i.has(e - 1)) return;
      let { resolve, promise } = Promise.withResolvers(),
        r = (n) => {
          n.pageNumber === e &&
            (this._eventBus._off("editorsrendered", r), resolve());
        };
      this._eventBus.on("editorsrendered", r);
      await promise;
    }
    getSignature(e) {
      this.#R?.getSignature({
        uiManager: this,
        editor: e,
      });
    }
    get signatureManager() {
      return this.#R;
    }
    switchToMode(e, t) {
      this._eventBus.on("annotationeditormodechanged", t, {
        once: true,
        signal: this._signal,
      });
      this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: e,
      });
    }
    setPreference(e, t) {
      this._eventBus.dispatch("setpreference", {
        source: this,
        name: e,
        value: t,
      });
    }
    onSetPreference({ name, value }) {
      switch (name) {
        case "enableNewAltTextWhenAddingImage":
          this.#y = value;
          break;
      }
    }
    onPageChanging({ pageNumber }) {
      this.#f = pageNumber - 1;
    }
    focusMainContainer() {
      this.#G.focus();
    }
    findParent(e, t) {
      for (let n of this.#i.values()) {
        let { x, y, width, height } = n.div.getBoundingClientRect();
        if (e >= x && e <= x + peers.a && t >= y && t <= y + height) return n;
      }
      return null;
    }
    disableUserSelect(e = false) {
      this.#K.classList.toggle("noUserSelect", e);
    }
    addShouldRescale(e) {
      this.#g.add(e);
    }
    removeShouldRescale(e) {
      this.#g.delete(e);
    }
    onScaleChanging({ scale }) {
      this.commitOrRemove();
      this.viewParameters.realScale = scale * peers.Hy.PDF_TO_CSS_UNITS;
      for (let e of this.#g) e.onScaleChanging();
      this.#d?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation }) {
      this.commitOrRemove();
      this.viewParameters.rotation = pagesRotation;
    }
    #Y({ anchorNode }) {
      return anchorNode.nodeType === Node.TEXT_NODE
        ? anchorNode.parentElement
        : anchorNode;
    }
    #X(e) {
      let { currentLayer } = this;
      if (currentLayer.hasTextLayer(e)) return currentLayer;
      for (let t of this.#i.values()) if (t.hasTextLayer(e)) return t;
      return null;
    }
    highlightSelection(e = "", t = false) {
      let n = document.getSelection();
      if (!n || n.isCollapsed) return;
      let { anchorNode, anchorOffset, focusNode, focusOffset } = n,
        s = n.toString(),
        c = this.#Y(n).closest(".textLayer"),
        l = this.getSelectionBoxes(c);
      if (!l) return;
      n.empty();
      let u = this.#X(c),
        d = this.#F === peers.Oy.NONE,
        f = () => {
          let n = u?.createAndAddNewEditor(
            {
              x: 0,
              y: 0,
            },
            false,
            {
              methodOfCreation: e,
              boxes: l,
              anchorNode,
              anchorOffset,
              focusNode: peers.a,
              focusOffset,
              text: s,
            },
          );
          d && this.showAllEditors("highlight", true, true);
          t && n?.editComment();
        };
      if (d) {
        this.switchToMode(peers.Oy.HIGHLIGHT, f);
        return;
      }
      f();
    }
    commentSelection(e = "") {
      this.highlightSelection(e, true);
    }
    #Z() {
      let e = document.getSelection();
      if (!e || e.isCollapsed) return;
      let t = this.#Y(e).closest(".textLayer"),
        n = this.getSelectionBoxes(t);
      n &&
        ((this.#T ||= new peers.mqt(this)),
        this.#T.show(t, n, this.direction === "ltr"));
    }
    getAndRemoveDataFromAnnotationStorage(e) {
      if (!this.#o) return null;
      let t = `${peers.WKt}${e}`,
        n = this.#o.getRawValue(t);
      return (n && this.#o.remove(t), n);
    }
    addToAnnotationStorage(e) {
      !e.isEmpty() &&
        this.#o &&
        !this.#o.has(e.id) &&
        this.#o.setValue(e.id, e);
    }
    a11yAlert(e, t = null) {
      let n = this.#q;
      n &&
        (n.setAttribute("data-l10n-id", e),
        t
          ? n.setAttribute("data-l10n-args", JSON.stringify(t))
          : n.removeAttribute("data-l10n-args"));
    }
    #Q() {
      let e = document.getSelection();
      if (!e || e.isCollapsed) {
        this.#L &&
          (this.#T?.hide(),
          (this.#L = null),
          this.#ce({
            hasSelectedText: false,
          }));
        return;
      }
      let { anchorNode } = e;
      if (anchorNode === this.#L) return;
      let n = this.#Y(e).closest(".textLayer");
      if (!n) {
        this.#L &&
          (this.#T?.hide(),
          (this.#L = null),
          this.#ce({
            hasSelectedText: false,
          }));
        return;
      }
      if (
        (this.#T?.hide(),
        (this.#L = anchorNode),
        this.#ce({
          hasSelectedText: true,
        }),
        !(this.#F !== peers.Oy.HIGHLIGHT && this.#F !== peers.Oy.NONE) &&
          (this.#F === peers.Oy.HIGHLIGHT &&
            this.showAllEditors("highlight", true, true),
          (this.#w = this.isShiftKeyDown),
          !this.isShiftKeyDown))
      ) {
        let e = this.#F === peers.Oy.HIGHLIGHT ? this.#X(n) : null;
        if ((e?.toggleDrawing(), this.#O)) {
          let t = new peers.AbortController(),
            n = this.combinedSignal(t),
            r = (event) => {
              (event.type === "pointerup" && event.button !== 0) ||
                (t.abort(),
                e?.toggleDrawing(true),
                event.type === "pointerup" && this.#$("main_toolbar"));
            };
          window.addEventListener("pointerup", r, {
            signal: n,
          });
          window.addEventListener("blur", r, {
            signal: n,
          });
        } else {
          e?.toggleDrawing(true);
          this.#$("main_toolbar");
        }
      }
    }
    #$(e = "") {
      this.#F === peers.Oy.HIGHLIGHT
        ? this.highlightSelection(e)
        : this.#_ && this.#Z();
    }
    #ee() {
      document.addEventListener("selectionchange", this.#Q.bind(this), {
        signal: this._signal,
      });
    }
    #te() {
      if (this.#S) return;
      this.#S = new peers.AbortController();
      let e = this.combinedSignal(this.#S);
      window.addEventListener("focus", this.focus.bind(this), {
        signal: e,
      });
      window.addEventListener("blur", this.blur.bind(this), {
        signal: e,
      });
    }
    #ne() {
      this.#S?.abort();
      this.#S = null;
    }
    blur() {
      if (
        ((this.isShiftKeyDown = false),
        this.#w && ((this.#w = false), this.#$("main_toolbar")),
        !this.hasSelection)
      )
        return;
      let { activeElement } = document;
      for (let t of this.#I)
        if (t.div.contains(activeElement)) {
          this.#j = [t, activeElement];
          t._focusEventsAllowed = false;
          break;
        }
    }
    focus() {
      if (!this.#j) return;
      let [e, t] = this.#j;
      this.#j = null;
      t.addEventListener(
        "focusin",
        () => {
          e._focusEventsAllowed = true;
        },
        {
          once: true,
          signal: this._signal,
        },
      );
      t.focus();
    }
    #re() {
      if (this.#A) return;
      this.#A = new peers.AbortController();
      let e = this.combinedSignal(this.#A);
      window.addEventListener("keydown", this.keydown.bind(this), {
        signal: e,
      });
      window.addEventListener("keyup", this.keyup.bind(this), {
        signal: e,
      });
    }
    #ie() {
      this.#A?.abort();
      this.#A = null;
    }
    #ae() {
      if (this.#u) return;
      this.#u = new peers.AbortController();
      let e = this.combinedSignal(this.#u);
      document.addEventListener("copy", this.copy.bind(this), {
        signal: e,
      });
      document.addEventListener("cut", this.cut.bind(this), {
        signal: e,
      });
      document.addEventListener("paste", this.paste.bind(this), {
        signal: e,
      });
    }
    #oe() {
      this.#u?.abort();
      this.#u = null;
    }
    #se() {
      let e = this._signal;
      document.addEventListener("dragover", this.dragOver.bind(this), {
        signal: e,
      });
      document.addEventListener("drop", this.drop.bind(this), {
        signal: e,
      });
    }
    addEditListeners() {
      this.#re();
      this.#ae();
    }
    removeEditListeners() {
      this.#ie();
      this.#oe();
    }
    dragOver(event) {
      for (let { type } of event.dataTransfer.items)
        for (let n of this.#h)
          if (n.isHandlingMimeForPasting(type)) {
            event.dataTransfer.dropEffect = "copy";
            event.preventDefault();
            return;
          }
    }
    drop(event) {
      for (let t of event.dataTransfer.items)
        for (let n of this.#h)
          if (n.isHandlingMimeForPasting(t.type)) {
            n.paste(t, this.currentLayer);
            event.preventDefault();
            return;
          }
    }
    copy(event) {
      if (
        (event.preventDefault(), this.#t?.commitOrRemove(), !this.hasSelection)
      )
        return;
      let t = [];
      for (let e of this.#I) {
        let n = e.serialize(true);
        n && t.push(n);
      }
      t.length !== 0 &&
        event.clipboardData.setData("application/pdfjs", JSON.stringify(t));
    }
    cut(e) {
      this.copy(e);
      this.delete();
    }
    async paste(event) {
      event.preventDefault();
      let { clipboardData } = event;
      for (let e of clipboardData.items)
        for (let t of this.#h)
          if (t.isHandlingMimeForPasting(e.type)) {
            t.paste(e, this.currentLayer);
            return;
          }
      let n = clipboardData.getData("application/pdfjs");
      if (!n) return;
      try {
        n = JSON.parse(n);
      } catch (e) {
        peers.fy(`paste: "${e.message}".`);
        return;
      }
      if (!Array.isArray(n)) return;
      this.unselectAll();
      let r = this.currentLayer;
      try {
        let e = [];
        for (let t of n) {
          let n = await r.deserialize(t);
          if (!n) return;
          e.push(n);
        }
        this.addCommands({
          cmd: () => {
            for (let t of e) this.#fe(t);
            this.#he(e);
          },
          undo: () => {
            for (let t of e) t.remove();
          },
          mustExec: true,
        });
      } catch (e) {
        peers.fy(`paste: "${e.message}".`);
      }
    }
    keydown(event) {
      !this.isShiftKeyDown &&
        event.key === "Shift" &&
        (this.isShiftKeyDown = true);
      this.#F !== peers.Oy.NONE &&
        !this.isEditorHandlingKeyboard &&
        e._keyboardManager.exec(this, event);
    }
    keyup(event) {
      this.isShiftKeyDown &&
        event.key === "Shift" &&
        ((this.isShiftKeyDown = false),
        this.#w && ((this.#w = false), this.#$("main_toolbar")));
    }
    onEditingAction({ name }) {
      switch (name) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[name]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
        case "commentSelection":
          this.commentSelection("context_menu");
          break;
      }
    }
    #ce(e) {
      Object.entries(e).some(([e, t]) => {
        return this.#H[e] !== t;
      }) &&
        (this._eventBus.dispatch("annotationeditorstateschanged", {
          source: this,
          details: Object.assign(this.#H, e),
        }),
        this.#F === peers.Oy.HIGHLIGHT &&
          e.hasSelectedEditor === false &&
          this.#le([[peers.ky.HIGHLIGHT_FREE, true]]));
    }
    #le(e) {
      this._eventBus.dispatch("annotationeditorparamschanged", {
        source: this,
        details: e,
      });
    }
    setEditingState(e) {
      e
        ? (this.#te(),
          this.#ae(),
          this.#ce({
            isEditing: this.#F !== peers.Oy.NONE,
            isEmpty: this.#me(),
            hasSomethingToUndo: this.#c.hasSomethingToUndo(),
            hasSomethingToRedo: this.#c.hasSomethingToRedo(),
            hasSelectedEditor: false,
          }))
        : (this.#ne(),
          this.#oe(),
          this.#ce({
            isEditing: false,
          }),
          this.disableUserSelect(false));
    }
    registerEditorTypes(e) {
      if (!this.#h) {
        this.#h = e;
        for (let e of this.#h) this.#le(e.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return this.#E.id;
    }
    get currentLayer() {
      return this.#i.get(this.#f);
    }
    getLayer(e) {
      return this.#i.get(e);
    }
    get currentPageIndex() {
      return this.#f;
    }
    addLayer(e) {
      this.#i.set(e.pageIndex, e);
      this.#D ? e.enable() : e.disable();
    }
    removeLayer(e) {
      this.#i.delete(e.pageIndex);
    }
    async updateMode(e, t = null, n = false, r = false, i = false) {
      if (this.#F !== e && !(this.#J && (await this.#J.promise, !this.#J))) {
        if (
          ((this.#J = Promise.withResolvers()),
          this.#d?.commitOrRemove(),
          this.#F === peers.Oy.POPUP && this.#l?.hideSidebar(),
          this.#l?.destroyPopup(),
          (this.#F = e),
          e === peers.Oy.NONE)
        ) {
          this.setEditingState(false);
          this.#de();
          for (let e of this.#r.values()) e.hideStandaloneCommentButton();
          this._editorUndoBar?.hide();
          this.toggleComment(null);
          this.#J.resolve();
          return;
        }
        for (let e of this.#r.values()) e.addStandaloneCommentButton();
        e === peers.Oy.SIGNATURE && (await this.#R?.loadSignatures());
        this.setEditingState(true);
        await this.#ue();
        this.unselectAll();
        for (let t of this.#i.values()) t.updateMode(e);
        if (e === peers.Oy.POPUP) {
          this.#n ||= await this.#V.getAnnotationsByType(
            new Set(
              this.#h.map((item) => {
                return item._editorType;
              }),
            ),
          );
          let e = new Set(),
            t = [];
          for (let n of this.#r.values()) {
            let { annotationElementId, hasComment, deleted } = n;
            annotationElementId && e.add(annotationElementId);
            hasComment && !peers.a && t.push(n.getData());
          }
          for (let n of this.#n) {
            let { id, popupRef, contentsObj } = n;
            popupRef &&
              peers.a?.str &&
              !e.has(id) &&
              !this.#p.has(id) &&
              t.push(n);
          }
          this.#l?.showSidebar(t);
        }
        if (!t) {
          n && this.addNewEditorFromKeyboard();
          this.#J.resolve();
          return;
        }
        for (let e of this.#r.values())
          e.uid === t
            ? (this.setSelected(e),
              i ? e.editComment() : r ? e.enterInEditMode() : e.focus())
            : e.unselect();
        this.#J.resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() &&
        this.currentLayer.addNewEditor();
    }
    updateToolbar(e) {
      e.mode !== this.#F &&
        this._eventBus.dispatch("switchannotationeditormode", {
          source: this,
          ...e,
        });
    }
    updateParams(e, t) {
      if (this.#h) {
        switch (e) {
          case peers.ky.CREATE:
            this.currentLayer.addNewEditor(t);
            return;
          case peers.ky.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                data: {
                  type: "highlight",
                  action: "toggle_visibility",
                },
              },
            });
            (this.#B ||= new Map()).set(e, t);
            this.showAllEditors("highlight", t);
            break;
        }
        if (this.hasSelection) for (let n of this.#I) n.updateParams(e, t);
        else for (let n of this.#h) n.updateDefaultParams(e, t);
      }
    }
    showAllEditors(e, t, n = false) {
      for (let n of this.#r.values()) n.editorType === e && n.show(t);
      (this.#B?.get(peers.ky.HIGHLIGHT_SHOW_ALL) ?? true) !== t &&
        this.#le([[peers.ky.HIGHLIGHT_SHOW_ALL, t]]);
    }
    enableWaiting(e = false) {
      if (this.#k !== e) {
        this.#k = e;
        for (let t of this.#i.values()) {
          e ? t.disableClick() : t.enableClick();
          t.div.classList.toggle("waiting", e);
        }
      }
    }
    async #ue() {
      if (!this.#D) {
        this.#D = true;
        let e = [];
        for (let t of this.#i.values()) e.push(t.enable());
        await Promise.all(e);
        for (let e of this.#r.values()) e.enable();
      }
    }
    #de() {
      if ((this.unselectAll(), this.#D)) {
        this.#D = false;
        for (let e of this.#i.values()) e.disable();
        for (let e of this.#r.values()) e.disable();
      }
    }
    *getEditors(e) {
      for (let t of this.#r.values()) t.pageIndex === e && (yield t);
    }
    getEditor(e) {
      return this.#r.get(e);
    }
    addEditor(e) {
      this.#r.set(e.id, e);
    }
    removeEditor(e) {
      e.div.contains(document.activeElement) &&
        (this.#x && clearTimeout(this.#x),
        (this.#x = setTimeout(() => {
          this.focusMainContainer();
          this.#x = null;
        }, 0)));
      this.#r.delete(e.id);
      e.annotationElementId && this.#N?.delete(e.annotationElementId);
      this.unselect(e);
      (!e.annotationElementId || !this.#p.has(e.annotationElementId)) &&
        this.#o?.remove(e.id);
    }
    addDeletedAnnotationElement(e) {
      this.#p.add(e.annotationElementId);
      this.addChangedExistingAnnotation(e);
      e.deleted = true;
    }
    isDeletedAnnotationElement(e) {
      return this.#p.has(e);
    }
    removeDeletedAnnotationElement(e) {
      this.#p.delete(e.annotationElementId);
      this.removeChangedExistingAnnotation(e);
      e.deleted = false;
    }
    #fe(e) {
      let t = this.#i.get(e.pageIndex);
      t
        ? t.addOrRebuild(e)
        : (this.addEditor(e), this.addToAnnotationStorage(e));
    }
    setActiveEditor(e) {
      this.#t !== e && ((this.#t = e), e && this.#le(e.propertiesToUpdate));
    }
    get #pe() {
      let e = null;
      for (e of this.#I);
      return e;
    }
    updateUI(e) {
      this.#pe === e && this.#le(e.propertiesToUpdate);
    }
    updateUIForDefaultProperties(e) {
      this.#le(e.defaultPropertiesToUpdate);
    }
    toggleSelected(e) {
      if (this.#I.has(e)) {
        this.#I.delete(e);
        e.unselect();
        this.#ce({
          hasSelectedEditor: this.hasSelection,
        });
        return;
      }
      this.#I.add(e);
      e.select();
      this.#le(e.propertiesToUpdate);
      this.#ce({
        hasSelectedEditor: true,
      });
    }
    setSelected(e) {
      this.updateToolbar({
        mode: e.mode,
        editId: e.id,
      });
      this.#d?.commitOrRemove();
      for (let t of this.#I) t !== e && t.unselect();
      this.#I.clear();
      this.#I.add(e);
      e.select();
      this.#le(e.propertiesToUpdate);
      this.#ce({
        hasSelectedEditor: true,
      });
    }
    isSelected(e) {
      return this.#I.has(e);
    }
    get firstSelectedEditor() {
      return this.#I.values().next().value;
    }
    unselect(e) {
      e.unselect();
      this.#I.delete(e);
      this.#ce({
        hasSelectedEditor: this.hasSelection,
      });
    }
    get hasSelection() {
      return this.#I.size !== 0;
    }
    get isEnterHandled() {
      return this.#I.size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      this.#c.undo();
      this.#ce({
        hasSomethingToUndo: this.#c.hasSomethingToUndo(),
        hasSomethingToRedo: true,
        isEmpty: this.#me(),
      });
      this._editorUndoBar?.hide();
    }
    redo() {
      this.#c.redo();
      this.#ce({
        hasSomethingToUndo: true,
        hasSomethingToRedo: this.#c.hasSomethingToRedo(),
        isEmpty: this.#me(),
      });
    }
    addCommands(e) {
      this.#c.add(e);
      this.#ce({
        hasSomethingToUndo: true,
        hasSomethingToRedo: false,
        isEmpty: this.#me(),
      });
    }
    cleanUndoStack(e) {
      this.#c.cleanType(e);
    }
    #me() {
      if (this.#r.size === 0) return true;
      if (this.#r.size === 1)
        for (let e of this.#r.values()) return e.isEmpty();
      return false;
    }
    delete() {
      this.commitOrRemove();
      let e = this.currentLayer?.endDrawingSession(true);
      if (!this.hasSelection && !e) return;
      let t = e ? [e] : [...this.#I],
        n = () => {
          this._editorUndoBar?.show(
            r,
            t.length === 1 ? t[0].editorType : t.length,
          );
          for (let e of t) e.remove();
        },
        r = () => {
          for (let e of t) this.#fe(e);
        };
      this.addCommands({
        cmd: n,
        undo: r,
        mustExec: true,
      });
    }
    commitOrRemove() {
      this.#t?.commitOrRemove();
    }
    hasSomethingToControl() {
      return this.#t || this.hasSelection;
    }
    #he(e) {
      for (let e of this.#I) e.unselect();
      this.#I.clear();
      for (let t of e) t.isEmpty() || (this.#I.add(t), t.select());
      this.#ce({
        hasSelectedEditor: this.hasSelection,
      });
    }
    selectAll() {
      for (let e of this.#I) e.commit();
      this.#he(this.#r.values());
    }
    unselectAll() {
      if (
        !(this.#t && (this.#t.commitOrRemove(), this.#F !== peers.Oy.NONE)) &&
        !this.#d?.commitOrRemove() &&
        this.hasSelection
      ) {
        for (let e of this.#I) e.unselect();
        this.#I.clear();
        this.#ce({
          hasSelectedEditor: false,
        });
      }
    }
    translateSelectedEditors(e, t, n = false) {
      if ((n || this.commitOrRemove(), !this.hasSelection)) return;
      this.#U[0] += e;
      this.#U[1] += t;
      let [r, i] = this.#U,
        a = [...this.#I];
      this.#W && clearTimeout(this.#W);
      this.#W = setTimeout(() => {
        this.#W = null;
        this.#U[0] = this.#U[1] = 0;
        this.addCommands({
          cmd: () => {
            for (let e of peers.a)
              this.#r.has(e.id) &&
                (e.translateInPage(r, i), e.translationDone());
          },
          undo: () => {
            for (let e of peers.a)
              this.#r.has(e.id) &&
                (e.translateInPage(-r, -i), e.translationDone());
          },
          mustExec: false,
        });
      }, 1e3);
      for (let n of peers.a) {
        n.translateInPage(e, t);
        n.translationDone();
      }
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true);
        this.#m = new Map();
        for (let e of this.#I)
          this.#m.set(e, {
            savedX: e.x,
            savedY: e.y,
            savedPageIndex: e.pageIndex,
            newX: 0,
            newY: 0,
            newPageIndex: -1,
          });
      }
    }
    endDragSession() {
      if (!this.#m) return false;
      this.disableUserSelect(false);
      let e = this.#m;
      this.#m = null;
      let t = false;
      for (let [{ x: n, y: r, pageIndex: i }, a] of e) {
        peers.a.newX = n;
        peers.a.newY = r;
        peers.a.newPageIndex = i;
        t ||=
          n !== peers.a.savedX ||
          r !== peers.a.savedY ||
          i !== peers.a.savedPageIndex;
      }
      if (!t) return false;
      let n = (e, t, n, r) => {
        if (this.#r.has(e.id)) {
          let i = this.#i.get(r);
          i
            ? e._setParentAndPosition(i, t, n)
            : ((e.pageIndex = r), (e.x = t), (e.y = n));
        }
      };
      return (
        this.addCommands({
          cmd: () => {
            for (let [t, { newX: r, newY: i, newPageIndex: a }] of e)
              n(t, r, i, peers.a);
          },
          undo: () => {
            for (let [t, { savedX: r, savedY: i, savedPageIndex: a }] of e)
              n(t, r, i, peers.a);
          },
          mustExec: true,
        }),
        true
      );
    }
    dragSelectedEditors(e, t) {
      if (this.#m) for (let n of this.#m.keys()) n.drag(e, t);
    }
    rebuild(e) {
      if (e.parent === null) {
        let t = this.getLayer(e.pageIndex);
        t
          ? (t.changeParent(e), t.addOrRebuild(e))
          : (this.addEditor(e), this.addToAnnotationStorage(e), e.rebuild());
      } else e.parent.addOrRebuild(e);
    }
    get isEditorHandlingKeyboard() {
      return (
        this.getActive()?.shouldGetKeyboardEvents() ||
        (this.#I.size === 1 &&
          this.firstSelectedEditor.shouldGetKeyboardEvents())
      );
    }
    isActive(e) {
      return this.#t === e;
    }
    getActive() {
      return this.#t;
    }
    getMode() {
      return this.#F;
    }
    isEditingMode() {
      return this.#F !== peers.Oy.NONE;
    }
    get imageManager() {
      return peers.hy(this, "imageManager", new peers.gqt());
    }
    getSelectionBoxes(e) {
      if (!e) return null;
      let t = document.getSelection();
      for (let n = 0, r = t.rangeCount; n < r; n++)
        if (!e.contains(t.getRangeAt(n).commonAncestorContainer)) return null;
      let { x, y, width, height } = e.getBoundingClientRect(),
        o;
      switch (e.getAttribute("data-main-rotation")) {
        case "90":
          o = (e, t, o, s) => {
            return {
              x: (t - y) / peers.a,
              y: 1 - (e + o - x) / width,
              width: s / peers.a,
              height: o / width,
            };
          };
          break;
        case "180":
          o = (e, t, o, s) => {
            return {
              x: 1 - (e + o - x) / width,
              y: 1 - (t + s - y) / peers.a,
              width: o / width,
              height: s / peers.a,
            };
          };
          break;
        case "270":
          o = (e, t, o, s) => {
            return {
              x: 1 - (t + s - y) / peers.a,
              y: (e - x) / width,
              width: s / peers.a,
              height: o / width,
            };
          };
          break;
        default:
          o = (e, t, o, s) => {
            return {
              x: (e - x) / width,
              y: (t - y) / peers.a,
              width: o / width,
              height: s / peers.a,
            };
          };
          break;
      }
      let s = [];
      for (let e = 0, n = t.rangeCount; e < n; e++) {
        let n = t.getRangeAt(e);
        if (!n.collapsed)
          for (let {
            x: __x,
            y: __y,
            width: _width,
            height: _height,
          } of n.getClientRects())
            _width === 0 ||
              _height === 0 ||
              s.push(o(__x, __y, _width, _height));
      }
      return s.length === 0 ? null : s;
    }
    addChangedExistingAnnotation({ annotationElementId, id }) {
      (this.#s ||= new Map()).set(annotationElementId, id);
    }
    removeChangedExistingAnnotation({ annotationElementId }) {
      this.#s?.delete(annotationElementId);
    }
    renderAnnotationElement(e) {
      let t = this.#s?.get(e.data.id);
      if (!t) return;
      let n = this.#o.getRawValue(t);
      n &&
        ((this.#F === peers.Oy.NONE && !n.hasBeenModified) ||
          n.renderAnnotationElement(e));
    }
    setMissingCanvas(e, t, n) {
      let r = this.#N?.get(e);
      r && (r.setCanvas(t, n), this.#N.delete(e));
    }
    addMissingCanvas(e, t) {
      (this.#N ||= new Map()).set(e, t);
    }
  };
}
