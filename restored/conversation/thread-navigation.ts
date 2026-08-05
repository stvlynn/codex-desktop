// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pS`) / export `g7`.

export type BindThreadNavigationPeers = {
  Au: (...args: unknown[]) => unknown;
  Gpn: (...args: unknown[]) => unknown;
  Hx: (...args: unknown[]) => unknown;
  Vx: (...args: unknown[]) => unknown;
  WDe: (...args: unknown[]) => unknown;
  abort: (...args: unknown[]) => unknown;
  complete: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  dispose: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  end: (...args: unknown[]) => unknown;
  fS: (...args: unknown[]) => unknown;
  getTrace: (...args: unknown[]) => unknown;
  hydrationFailed: (...args: unknown[]) => unknown;
  hydrationFinished: (...args: unknown[]) => unknown;
  hydrationStarted: (...args: unknown[]) => unknown;
  isPending: (...args: unknown[]) => unknown;
  markCachedHistoryApplied: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  pending: (...args: unknown[]) => unknown;
  routeChanged: (...args: unknown[]) => unknown;
  span: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  startSpan: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  threadId: (...args: unknown[]) => unknown;
};

let peers: BindThreadNavigationPeers | null = null;

/** Wire bindThreadNavigation peers once companions land. */
export function setBindThreadNavigationPeers(
  next: BindThreadNavigationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `g7` / internal `pS`.
 */
export function bindThreadNavigation() {
  if (peers == null) {
    throw new Error("bindThreadNavigation peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Hx(),
      (Gpn = class {
        startSpan;
        pending = null;
        constructor(e) {
          this.startSpan = peers.e;
        }
        start(e, t, n = `local`) {
          if (this.pending?.threadId === peers.e) return;
          if (this.pending != null) {
            let { span: e } = this.pending;
            ((this.pending = null), peers.e.abort(`superseded`));
          }
          let r = this.startSpan(
            `thread_navigation`,
            {
              threadKind: peers.n,
              threadState: peers.t,
            },
            {
              onTerminal: () => {
                this.pending?.span === r && (this.pending = null);
              },
              traceAttributes: {
                "thread.kind": peers.n,
                "thread.state": peers.t,
              },
            },
          );
          r.isRecording() &&
            (r.mark(`navigation_dispatched`),
            (this.pending = {
              navigationWait: r.measure(`thread.navigation_wait`),
              renderWait: null,
              span: r,
              threadId: peers.e,
            }));
        }
        complete(e) {
          if (this.pending?.threadId !== peers.e) return;
          let { navigationWait: t, renderWait: n, span: r } = this.pending;
          ((this.pending = null),
            r.mark(`content_visible`),
            peers.t?.end(),
            peers.n?.end(),
            r.end());
        }
        markCachedHistoryApplied(e) {
          this.pending?.threadId === peers.e &&
            this.pending.span.mark(`cached_history_applied`);
        }
        hydrationStarted(e) {
          this.pending?.threadId === peers.e &&
            (this.pending.navigationWait?.end(),
            (this.pending.navigationWait = null));
        }
        hydrationFinished(e) {
          this.pending?.threadId === peers.e &&
            (this.pending.renderWait =
              this.pending.span.measure(`thread.render_wait`));
        }
        hydrationFailed(e, t) {
          if (this.pending?.threadId !== peers.e) return;
          let { span: n } = this.pending;
          if (
            ((this.pending = null),
            peers.WDe(peers.t)[`codex.outcome`] === `canceled`)
          ) {
            peers.n.abort(`hydration_canceled`);
            return;
          }
          peers.n.fail(`hydration_failed`);
        }
        isPending(e) {
          return this.pending?.threadId === peers.e;
        }
        getTrace(e) {
          return this.pending?.threadId === peers.e
            ? this.pending.span.trace
            : null;
        }
        abort(e) {
          if (this.pending?.threadId !== peers.e) return;
          let { span: t } = this.pending;
          ((this.pending = null), peers.t.abort(`navigation_away`));
        }
        routeChanged(e) {
          this.pending == null ||
            this.pending.threadId === peers.e ||
            this.abort(this.pending.threadId);
        }
        dispose() {
          if (this.pending == null) return;
          let { span: e } = this.pending;
          ((this.pending = null), peers.e.abort(`app_disposed`));
        }
      }),
      (fS = new peers.Gpn((e, t, n) =>
        peers.Vx.start(peers.e, peers.t, peers.n),
      )));
  });
}
