// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LPi`) / export `CW`.

export type BindDeferredUiCWPeers = {
  APi: (...args: unknown[]) => unknown;
  DPi: (...args: unknown[]) => unknown;
  Document: (...args: unknown[]) => unknown;
  Ehi: (...args: unknown[]) => unknown;
  FPi: (...args: unknown[]) => unknown;
  HTMLElement: (...args: unknown[]) => unknown;
  IPi: (...args: unknown[]) => unknown;
  IntersectionObserver: (...args: unknown[]) => unknown;
  MPi: (...args: unknown[]) => unknown;
  NPi: (...args: unknown[]) => unknown;
  OPi: (...args: unknown[]) => unknown;
  PPi: (...args: unknown[]) => unknown;
  ResizeObserver: (...args: unknown[]) => unknown;
  Thi: (...args: unknown[]) => unknown;
  __STOP: (...args: unknown[]) => unknown;
  __id: (...args: unknown[]) => unknown;
  __lastScrollPosition: (...args: unknown[]) => unknown;
  applyScrollFix: (...args: unknown[]) => unknown;
  bF: (...args: unknown[]) => unknown;
  cleanUp: (...args: unknown[]) => unknown;
  computeRenderRangeAndEmit: (...args: unknown[]) => unknown;
  config: (...args: unknown[]) => unknown;
  connect: (...args: unknown[]) => unknown;
  connectQueue: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  contentContainer: (...args: unknown[]) => unknown;
  disconnect: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  getHeight: (...args: unknown[]) => unknown;
  getOffsetInScrollContainer: (...args: unknown[]) => unknown;
  getScrollAnchor: (...args: unknown[]) => unknown;
  getScrollContainerElement: (...args: unknown[]) => unknown;
  getScrollHeight: (...args: unknown[]) => unknown;
  getScrollTop: (...args: unknown[]) => unknown;
  getWindowSpecs: (...args: unknown[]) => unknown;
  handleContainerResize: (...args: unknown[]) => unknown;
  handleElementScroll: (...args: unknown[]) => unknown;
  handleIntersectionChange: (...args: unknown[]) => unknown;
  handleWindowResize: (...args: unknown[]) => unknown;
  handleWindowScroll: (...args: unknown[]) => unknown;
  hhi: (...args: unknown[]) => unknown;
  jPi: (...args: unknown[]) => unknown;
  kPi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCWPeers | null = null;

/** Wire bindDeferredUiCW peers once companions land. */
export function setBindDeferredUiCWPeers(next: BindDeferredUiCWPeers): void {
  peers = next;
}

/**
 * Bundle export `CW` / internal `LPi`.
 */
export function bindDeferredUiCW() {
  if (peers == null) {
    throw new Error("bindDeferredUiCW peers are not configured");
  }

  return peers.e(() => {
    (peers.hhi(),
      peers.Ehi(),
      peers.OPi(),
      (APi = 1e3),
      (jPi = peers.APi * 4),
      (MPi = [0, 1e-6, 0.99999, 1]),
      (NPi = {
        overscrollSize: peers.APi,
        intersectionObserverMargin: peers.jPi,
        resizeDebugging: !1,
      }),
      (PPi = 0),
      (FPi = -1),
      (IPi = class e {
        static __STOP = !1;
        static __lastScrollPosition = 0;
        __id = `virtualizer-${++peers.FPi}`;
        config;
        type = `simple`;
        intersectionObserver;
        scrollTop = 0;
        height = 0;
        scrollHeight = 0;
        windowSpecs = {
          top: 0,
          bottom: 0,
        };
        root;
        contentContainer;
        resizeObserver;
        observers = new Map();
        visibleInstances = new Map();
        visibleInstancesDirty = !1;
        instancesChanged = new Set();
        scrollDirty = !0;
        heightDirty = !0;
        scrollHeightDirty = !0;
        renderedObservers = 0;
        connectQueue = new Map();
        constructor(e) {
          this.config = {
            ...peers.NPi,
            ...peers.e,
          };
        }
        setup(t, n) {
          if (this.root == null) {
            ((this.root = t),
              (this.resizeObserver = new peers.ResizeObserver(
                this.handleContainerResize,
              )),
              (this.intersectionObserver = new peers.IntersectionObserver(
                this.handleIntersectionChange,
                {
                  root: this.root,
                  threshold: peers.MPi,
                  rootMargin: `${this.config.intersectionObserverMargin}px 0px ${this.config.intersectionObserverMargin}px 0px`,
                },
              )),
              t instanceof peers.Document
                ? this.setupWindow()
                : this.setupElement(n),
              (window.__INSTANCE = this),
              (window.__TOGGLE = () => {
                peers.e.__STOP
                  ? ((peers.e.__STOP = !1),
                    (this.getScrollContainerElement() ?? window).scrollTo({
                      top: peers.e.__lastScrollPosition,
                    }),
                    peers.bF(this.computeRenderRangeAndEmit))
                  : ((peers.e.__lastScrollPosition = this.getScrollTop()),
                    (peers.e.__STOP = !0));
              }));
            for (let [e, t] of this.connectQueue.entries())
              this.connect(peers.e, t);
            (this.connectQueue.clear(),
              this.markDOMDirty(),
              peers.bF(this.computeRenderRangeAndEmit));
          }
        }
        instanceChanged(e, t) {
          (this.instancesChanged.add(peers.e),
            t && this.markDOMDirty(),
            peers.bF(this.computeRenderRangeAndEmit));
        }
        getWindowSpecs() {
          return (
            this.windowSpecs.top === 0 &&
              this.windowSpecs.bottom === 0 &&
              (this.windowSpecs = peers.Thi({
                scrollTop: this.getScrollTop(),
                height: this.getHeight(),
                scrollHeight: this.getScrollHeight(),
                overscrollSize: this.config.overscrollSize,
              })),
            this.windowSpecs
          );
        }
        isInstanceVisible(e, t) {
          let n = this.getScrollTop(),
            r = this.getHeight(),
            i = this.config.intersectionObserverMargin,
            a = n - i,
            o = n + r + i;
          return !(peers.e < a - t || peers.e > o);
        }
        handleContainerResize = (e) => {
          if (this.root == null) return;
          let t = !1;
          for (let n of peers.e) {
            let e = n.borderBoxSize[0].blockSize;
            this.root instanceof peers.Document
              ? peers.e !== this.scrollHeight &&
                ((this.scrollHeightDirty = !0),
                (t = !0),
                this.config.resizeDebugging &&
                  (console.log(`Virtualizer: content size change`, this.__id, {
                    sizeChange: peers.e - peers.PPi,
                    newSize: peers.e,
                  }),
                  (PPi = peers.e)))
              : n.target === this.root
                ? peers.e !== this.height && ((this.heightDirty = !0), (t = !0))
                : n.target === this.contentContainer &&
                  ((this.scrollHeightDirty = !0),
                  (t = !0),
                  this.config.resizeDebugging &&
                    (console.log(
                      `Virtualizer: scroller size change`,
                      this.__id,
                      {
                        sizeChange: peers.e - peers.PPi,
                        newSize: peers.e,
                      },
                    ),
                    (PPi = peers.e)));
          }
          t && peers.bF(this.computeRenderRangeAndEmit);
        };
        setupWindow() {
          if (this.root == null || !(this.root instanceof peers.Document))
            throw Error(`Virtualizer.setupWindow: Invalid setup method`);
          (window.addEventListener(`scroll`, this.handleWindowScroll, {
            passive: !0,
          }),
            window.addEventListener(`resize`, this.handleWindowResize, {
              passive: !0,
            }),
            this.resizeObserver?.observe(this.root.documentElement));
        }
        setupElement(e) {
          if (this.root == null || this.root instanceof peers.Document)
            throw Error(`Virtualizer.setupElement: Invalid setup method`);
          (this.root.addEventListener(`scroll`, this.handleElementScroll, {
            passive: !0,
          }),
            this.resizeObserver?.observe(this.root),
            (e ??= this.root.firstElementChild ?? void 0),
            peers.e instanceof peers.HTMLElement &&
              ((this.contentContainer = peers.e),
              this.resizeObserver?.observe(peers.e)));
        }
        cleanUp() {
          (this.resizeObserver?.disconnect(),
            (this.resizeObserver = void 0),
            this.intersectionObserver?.disconnect(),
            (this.intersectionObserver = void 0),
            this.root?.removeEventListener(`scroll`, this.handleElementScroll),
            window.removeEventListener(`scroll`, this.handleWindowScroll),
            window.removeEventListener(`resize`, this.handleWindowResize),
            (this.root = void 0),
            (this.contentContainer = void 0),
            this.observers.clear(),
            this.visibleInstances.clear(),
            this.instancesChanged.clear(),
            this.connectQueue.clear(),
            (this.visibleInstancesDirty = !1),
            (this.windowSpecs = {
              top: 0,
              bottom: 0,
            }),
            (this.scrollTop = 0),
            (this.height = 0),
            (this.scrollHeight = 0));
        }
        getOffsetInScrollContainer(e) {
          return (
            this.getScrollTop() +
            peers.kPi(peers.e, this.getScrollContainerElement())
          );
        }
        connect(e, t) {
          if (this.observers.has(peers.e))
            throw Error(
              `Virtualizer.connect: instance is already connected...`,
            );
          return (
            this.intersectionObserver == null
              ? this.connectQueue.set(peers.e, t)
              : (this.intersectionObserver.observe(peers.e),
                this.observers.set(peers.e, t),
                this.instancesChanged.add(t),
                this.markDOMDirty(),
                peers.bF(this.computeRenderRangeAndEmit)),
            () => this.disconnect(peers.e)
          );
        }
        disconnect(e) {
          let t = this.observers.get(peers.e);
          (this.connectQueue.delete(peers.e),
            t != null &&
              (this.intersectionObserver?.unobserve(peers.e),
              this.observers.delete(peers.e),
              this.visibleInstances.delete(peers.e) &&
                (this.visibleInstancesDirty = !0),
              this.markDOMDirty(),
              peers.bF(this.computeRenderRangeAndEmit)));
        }
        handleWindowResize = () => {
          peers.e.__STOP ||
            window.innerHeight === this.height ||
            ((this.heightDirty = !0), peers.bF(this.computeRenderRangeAndEmit));
        };
        handleWindowScroll = () => {
          peers.e.__STOP ||
            this.root == null ||
            !(this.root instanceof peers.Document) ||
            ((this.scrollDirty = !0), peers.bF(this.computeRenderRangeAndEmit));
        };
        handleElementScroll = () => {
          peers.e.__STOP ||
            this.root == null ||
            this.root instanceof peers.Document ||
            ((this.scrollDirty = !0), peers.bF(this.computeRenderRangeAndEmit));
        };
        computeRenderRangeAndEmit = () => {
          if (peers.e.__STOP) return;
          let t = this.heightDirty || this.scrollHeightDirty;
          if (
            !this.scrollDirty &&
            !this.scrollHeightDirty &&
            !this.heightDirty &&
            this.renderedObservers === this.observers.size &&
            !this.visibleInstancesDirty &&
            this.instancesChanged.size === 0
          )
            return;
          let n = this.instancesChanged.size > 0;
          if (this.instancesChanged.size === 0) {
            let e = peers.Thi({
              scrollTop: this.getScrollTop(),
              height: this.getHeight(),
              scrollHeight: this.getScrollHeight(),
              overscrollSize: this.config.overscrollSize,
            });
            if (
              !t &&
              peers.DPi(this.windowSpecs, peers.e) &&
              this.renderedObservers === this.observers.size &&
              !this.visibleInstancesDirty
            )
              return;
            this.windowSpecs = peers.e;
          }
          ((this.visibleInstancesDirty = !1),
            (this.renderedObservers = this.observers.size));
          let r = this.getScrollAnchor(this.height),
            i = new Set();
          for (let e of t
            ? this.observers.values()
            : this.visibleInstances.values())
            peers.e.onRender(t) && i.add(peers.e);
          for (let e of this.instancesChanged)
            i.has(peers.e) || (peers.e.onRender(t) && i.add(peers.e));
          for (let e of i) n = peers.e.reconcileHeights() || n;
          (this.scrollFix(r),
            (n ||= this.instancesChanged.size > 0),
            n && this.markDOMDirty(),
            (n || t) && peers.bF(this.computeRenderRangeAndEmit),
            i.clear(),
            this.instancesChanged.clear());
        };
        scrollFix(e) {
          if (peers.e == null) return;
          let t = this.getScrollContainerElement(),
            {
              lineIndex: n,
              lineOffset: r,
              fileElement: i,
              fileOffset: a,
              fileTypeOffset: o,
            } = peers.e;
          if (n != null && r != null) {
            let e = i.shadowRoot?.querySelector(
              `[data-line][data-line-index="${n}"]`,
            );
            if (peers.e instanceof peers.HTMLElement) {
              let n = peers.kPi(peers.e, t);
              if (n !== r) {
                let e = n - r;
                this.applyScrollFix(peers.e);
              }
              return;
            }
          }
          let s = peers.kPi(i, t);
          if (o === `top`) s !== a && this.applyScrollFix(s - a);
          else {
            let e = s + i.getBoundingClientRect().height;
            peers.e !== a && this.applyScrollFix(peers.e - a);
          }
        }
        applyScrollFix(e) {
          (this.root == null || this.root instanceof peers.Document
            ? window.scrollTo({
                top: window.scrollY + peers.e,
                behavior: `instant`,
              })
            : this.root.scrollTo({
                top: this.root.scrollTop + peers.e,
                behavior: `instant`,
              }),
            this.markDOMDirty());
        }
        getScrollAnchor(e) {
          let t = this.getScrollContainerElement(),
            n;
          for (let [r] of this.visibleInstances.entries()) {
            let i = peers.kPi(r, t),
              a = i + r.getBoundingClientRect().height,
              o,
              s;
            a <= 0 ? ((o = a), (s = `bottom`)) : ((o = i), (s = `top`));
            let c, l;
            if (a > 0 && i < peers.e)
              for (let e of r.shadowRoot?.querySelectorAll(
                `[data-line][data-line-index]`,
              ) ?? []) {
                if (!(peers.e instanceof peers.HTMLElement)) continue;
                let n = peers.e.dataset.lineIndex;
                if (n == null) continue;
                let r = peers.kPi(peers.e, t);
                if (!(r < 0)) {
                  ((c = n), (l = r));
                  break;
                }
              }
            if (n?.lineOffset != null && l == null) continue;
            let u = !1;
            ((n == null ||
              (l != null && (n.lineOffset == null || l < n.lineOffset)) ||
              (l == null &&
                n.lineOffset == null &&
                ((o >= 0 && (n.fileOffset < 0 || o < n.fileOffset)) ||
                  (o < 0 && n.fileOffset < 0 && o > n.fileOffset)))) &&
              (u = !0),
              u &&
                (n = {
                  fileElement: r,
                  fileTypeOffset: s,
                  fileOffset: o,
                  lineIndex: c,
                  lineOffset: l,
                }));
          }
          return n;
        }
        handleIntersectionChange = (e) => {
          this.scrollDirty = !0;
          for (let { target: t, isIntersecting: n } of peers.e) {
            if (!(t instanceof peers.HTMLElement))
              throw Error(
                `Virtualizer.handleIntersectionChange: target not an HTMLElement`,
              );
            let e = this.observers.get(t);
            peers.e != null &&
              (n && !this.visibleInstances.has(t)
                ? (peers.e.setVisibility(!0),
                  this.visibleInstances.set(t, peers.e),
                  (this.visibleInstancesDirty = !0))
                : !n &&
                  this.visibleInstances.has(t) &&
                  (peers.e.setVisibility(!1),
                  this.visibleInstances.delete(t),
                  (this.visibleInstancesDirty = !0)));
          }
          this.visibleInstancesDirty &&
            peers.bF(this.computeRenderRangeAndEmit);
        };
        getScrollTop() {
          if (!this.scrollDirty) return this.scrollTop;
          this.scrollDirty = !1;
          let e =
            this.root == null
              ? 0
              : this.root instanceof peers.Document
                ? window.scrollY
                : this.root.scrollTop;
          return (
            (e = Math.max(
              0,
              Math.min(peers.e, this.getScrollHeight() - this.getHeight()),
            )),
            (this.scrollTop = peers.e),
            peers.e
          );
        }
        getScrollHeight() {
          return this.scrollHeightDirty
            ? ((this.scrollHeightDirty = !1),
              (this.scrollHeight =
                this.root == null
                  ? 0
                  : this.root instanceof peers.Document
                    ? this.root.documentElement.scrollHeight
                    : this.root.scrollHeight),
              this.scrollHeight)
            : this.scrollHeight;
        }
        getHeight() {
          return this.heightDirty
            ? ((this.heightDirty = !1),
              (this.height =
                this.root == null
                  ? 0
                  : this.root instanceof peers.Document
                    ? globalThis.innerHeight
                    : this.root.getBoundingClientRect().height),
              this.height)
            : this.height;
        }
        markDOMDirty() {
          ((this.scrollDirty = !0),
            (this.scrollHeightDirty = !0),
            (this.heightDirty = !0));
        }
        getScrollContainerElement() {
          return this.root == null || this.root instanceof peers.Document
            ? void 0
            : this.root;
        }
      }));
  });
}
