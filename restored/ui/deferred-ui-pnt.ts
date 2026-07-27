// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oYt`) / export `pnt`.

export type BindDeferredUiPntPeers = {
  AbortController: (...args: unknown[]) => unknown;
  _colorSelectFromKeyboard: (...args: unknown[]) => unknown;
  _hideDropdownFromKeyboard: (...args: unknown[]) => unknown;
  _keyboardManager: (...args: unknown[]) => unknown;
  _moveToBeginning: (...args: unknown[]) => unknown;
  _moveToEnd: (...args: unknown[]) => unknown;
  _moveToNext: (...args: unknown[]) => unknown;
  _moveToPrevious: (...args: unknown[]) => unknown;
  _uiManager: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  abort: (...args: unknown[]) => unknown;
  add: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  classList: (...args: unknown[]) => unknown;
  color: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  contains: (...args: unknown[]) => unknown;
  d: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f: (...args: unknown[]) => unknown;
  firstChild: (...args: unknown[]) => unknown;
  focus: (...args: unknown[]) => unknown;
  g: (...args: unknown[]) => unknown;
  h: (...args: unknown[]) => unknown;
  hideDropdown: (...args: unknown[]) => unknown;
  highlightColors: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  ky: (...args: unknown[]) => unknown;
  l: (...args: unknown[]) => unknown;
  m: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  next: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  p: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  remove: (...args: unknown[]) => unknown;
  renderButton: (...args: unknown[]) => unknown;
  renderMainDropdown: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  vqt: (...args: unknown[]) => unknown;
  vy: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiPntPeers | null = null;

/** Wire bindDeferredUiPnt peers once companions land. */
export function setBindDeferredUiPntPeers(next: BindDeferredUiPntPeers): void {
  peers = next;
}

/**
 * Bundle export `pnt` / internal `oYt`.
 */
export function bindDeferredUiPnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiPnt peers are not configured");
  }

  return class e {
    #e = null;
    #t = null;
    #n;
    #r = null;
    #i = !1;
    #a = !1;
    #o = null;
    #s;
    #c = null;
    #l = null;
    static #u = null;
    static get _keyboardManager() {
      return peers.hy(
        this,
        `_keyboardManager`,
        new peers.vqt([
          [
            [`Escape`, `mac+Escape`],
            peers.e.prototype._hideDropdownFromKeyboard,
          ],
          [[` `, `mac+ `], peers.e.prototype._colorSelectFromKeyboard],
          [
            [`ArrowDown`, `ArrowRight`, `mac+ArrowDown`, `mac+ArrowRight`],
            peers.e.prototype._moveToNext,
          ],
          [
            [`ArrowUp`, `ArrowLeft`, `mac+ArrowUp`, `mac+ArrowLeft`],
            peers.e.prototype._moveToPrevious,
          ],
          [[`Home`, `mac+Home`], peers.e.prototype._moveToBeginning],
          [[`End`, `mac+End`], peers.e.prototype._moveToEnd],
        ]),
      );
    }
    constructor({ editor: t = null, uiManager: n = null }) {
      (t ? ((this.#a = !1), (this.#o = t)) : (this.#a = !0),
        (this.#l = t?._uiManager || peers.n),
        (this.#s = this.#l._eventBus),
        (this.#n =
          t?.color?.toUpperCase() ||
          this.#l?.highlightColors.values().next().value ||
          `#FFFF98`),
        (peers.e.#u ||= Object.freeze({
          blue: `pdfjs-editor-colorpicker-blue`,
          green: `pdfjs-editor-colorpicker-green`,
          pink: `pdfjs-editor-colorpicker-pink`,
          red: `pdfjs-editor-colorpicker-red`,
          yellow: `pdfjs-editor-colorpicker-yellow`,
        })));
    }
    renderButton() {
      let e = (this.#e = document.createElement(`button`));
      ((peers.e.className = `colorPicker`),
        (peers.e.tabIndex = `0`),
        peers.e.setAttribute(`data-l10n-id`, `pdfjs-editor-colorpicker-button`),
        (peers.e.ariaHasPopup = `true`),
        this.#o &&
          (peers.e.ariaControls = `${this.#o.id}_colorpicker_dropdown`));
      let t = this.#l._signal;
      (peers.e.addEventListener(`click`, this.#m.bind(this), {
        signal: t,
      }),
        peers.e.addEventListener(`keydown`, this.#p.bind(this), {
          signal: t,
        }));
      let n = (this.#t = document.createElement(`span`));
      return (
        (peers.n.className = `swatch`),
        (peers.n.ariaHidden = `true`),
        (peers.n.style.backgroundColor = this.#n),
        peers.e.append(peers.n),
        peers.e
      );
    }
    renderMainDropdown() {
      let e = (this.#r = this.#d());
      return (
        (peers.e.ariaOrientation = `horizontal`),
        (peers.e.ariaLabelledBy = `highlightColorPickerLabel`),
        peers.e
      );
    }
    #d() {
      let t = document.createElement(`div`),
        n = this.#l._signal;
      (t.addEventListener(`contextmenu`, peers.vy, {
        signal: peers.n,
      }),
        (t.className = `dropdown`),
        (t.role = `listbox`),
        (t.ariaMultiSelectable = `false`),
        (t.ariaOrientation = `vertical`),
        t.setAttribute(`data-l10n-id`, `pdfjs-editor-colorpicker-dropdown`),
        this.#o && (t.id = `${this.#o.id}_colorpicker_dropdown`));
      for (let [r, i] of this.#l.highlightColors) {
        let a = document.createElement(`button`);
        ((peers.a.tabIndex = `0`),
          (peers.a.role = `option`),
          peers.a.setAttribute(`data-color`, peers.i),
          (peers.a.title = peers.r),
          peers.a.setAttribute(`data-l10n-id`, peers.e.#u[peers.r]));
        let o = document.createElement(`span`);
        (peers.a.append(peers.o),
          (peers.o.className = `swatch`),
          (peers.o.style.backgroundColor = peers.i),
          (peers.a.ariaSelected = peers.i === this.#n),
          peers.a.addEventListener(`click`, this.#f.bind(this, peers.i), {
            signal: peers.n,
          }),
          t.append(peers.a));
      }
      return (
        t.addEventListener(`keydown`, this.#p.bind(this), {
          signal: peers.n,
        }),
        t
      );
    }
    #f(e, t) {
      (t.stopPropagation(),
        this.#s.dispatch(`switchannotationeditorparams`, {
          source: this,
          type: peers.ky.HIGHLIGHT_COLOR,
          value: peers.e,
        }),
        this.updateColor(peers.e));
    }
    _colorSelectFromKeyboard(e) {
      if (peers.e.target === this.#e) {
        this.#m(peers.e);
        return;
      }
      let t = peers.e.target.getAttribute(`data-color`);
      t && this.#f(t, peers.e);
    }
    _moveToNext(e) {
      if (!this.#g) {
        this.#m(peers.e);
        return;
      }
      if (peers.e.target === this.#e) {
        this.#r.firstChild?.focus();
        return;
      }
      peers.e.target.nextSibling?.focus();
    }
    _moveToPrevious(e) {
      if (
        peers.e.target === this.#r?.firstChild ||
        peers.e.target === this.#e
      ) {
        this.#g && this._hideDropdownFromKeyboard();
        return;
      }
      (this.#g || this.#m(peers.e), peers.e.target.previousSibling?.focus());
    }
    _moveToBeginning(e) {
      if (!this.#g) {
        this.#m(peers.e);
        return;
      }
      this.#r.firstChild?.focus();
    }
    _moveToEnd(e) {
      if (!this.#g) {
        this.#m(peers.e);
        return;
      }
      this.#r.lastChild?.focus();
    }
    #p(t) {
      peers.e._keyboardManager.exec(this, t);
    }
    #m(e) {
      if (this.#g) {
        this.hideDropdown();
        return;
      }
      if (
        ((this.#i = peers.e.detail === 0),
        this.#c ||
          ((this.#c = new peers.AbortController()),
          window.addEventListener(`pointerdown`, this.#h.bind(this), {
            signal: this.#l.combinedSignal(this.#c),
          })),
        (this.#e.ariaExpanded = `true`),
        this.#r)
      ) {
        this.#r.classList.remove(`hidden`);
        return;
      }
      let t = (this.#r = this.#d());
      this.#e.append(t);
    }
    #h(e) {
      this.#r?.contains(peers.e.target) || this.hideDropdown();
    }
    hideDropdown() {
      (this.#r?.classList.add(`hidden`),
        (this.#e.ariaExpanded = `false`),
        this.#c?.abort(),
        (this.#c = null));
    }
    get #g() {
      return this.#r && !this.#r.classList.contains(`hidden`);
    }
    _hideDropdownFromKeyboard() {
      if (!this.#a) {
        if (!this.#g) {
          this.#o?.unselect();
          return;
        }
        (this.hideDropdown(),
          this.#e.focus({
            preventScroll: !0,
            focusVisible: this.#i,
          }));
      }
    }
    updateColor(e) {
      if ((this.#t && (this.#t.style.backgroundColor = peers.e), !this.#r))
        return;
      let t = this.#l.highlightColors.values();
      for (let n of this.#r.children)
        peers.n.ariaSelected = t.next().value === peers.e.toUpperCase();
    }
    destroy() {
      (this.#e?.remove(),
        (this.#e = null),
        (this.#t = null),
        this.#r?.remove(),
        (this.#r = null));
    }
  };
}
