// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wx`) / export `e9`.

export type SupersededPeers = {
  Hx: (...args: unknown[]) => unknown;
  Ux: (...args: unknown[]) => unknown;
  Vx: (...args: unknown[]) => unknown;
  _ln: (...args: unknown[]) => unknown;
  abort: (...args: unknown[]) => unknown;
  abortConversation: (...args: unknown[]) => unknown;
  bindConversation: (...args: unknown[]) => unknown;
  clear: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  dispose: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  end: (...args: unknown[]) => unknown;
  fail: (...args: unknown[]) => unknown;
  finishTurn: (...args: unknown[]) => unknown;
  firstDataReceived: (...args: unknown[]) => unknown;
  getTrace: (...args: unknown[]) => unknown;
  gln: (...args: unknown[]) => unknown;
  hasFirstDataReceived: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  markFirstDataReceived: (...args: unknown[]) => unknown;
  markFirstResponseVisible: (...args: unknown[]) => unknown;
  markRequestDispatched: (...args: unknown[]) => unknown;
  markTurnStarted: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  pendingByClientUserMessageId: (...args: unknown[]) => unknown;
  pendingByTurnId: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  routeChanged: (...args: unknown[]) => unknown;
  scheduleAfterPaint: (...args: unknown[]) => unknown;
  span: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  startSpan: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  trace: (...args: unknown[]) => unknown;
};
let peers: SupersededPeers | null = null;

/** Wire superseded peers once companions land. */
export function setSupersededPeers(next: SupersededPeers): void {
  peers = next;
}

/**
 * Bundle export `e9` / internal `Wx`.
 */
export function superseded() {
  if (peers == null) {
    throw new Error("superseded peers are not configured");
  }
  return peers.e(() => {
    peers.Hx();
    _ln = class {
      startSpan;
      scheduleAfterPaint;
      pendingByClientUserMessageId = new Map();
      pendingByTurnId = new Map();
      constructor(alpha, bravo = peers.gln) {
        this.startSpan = peers.e;
        this.scheduleAfterPaint = peers.t;
      }
      start(copper, delta, echo, falcon, i) {
        let a = this.pendingByClientUserMessageId.get(peers.e);
        a != null && (this.clear(a), a.span.abort("superseded"));
        let gamma = this.startSpan("turn_first_response_visible", {
          submissionKind: peers.t
        }, {
          key: peers.e,
          onTerminal: () => {
            let harbor = this.pendingByClientUserMessageId.get(peers.e);
            peers.t?.span === gamma && this.clear(peers.t);
          },
          startedAtMs: peers.i,
          traceAttributes: {
            "turn.submission_kind": peers.t
          }
        });
        if (!gamma.isRecording()) return;
        let s = {
          clientUserMessageId: peers.e,
          conversationId: peers.n,
          firstDataReceived: false,
          routeThreadId: peers.r,
          span: gamma,
          submitPreparation: gamma.measure("turn.submit_preparation", {
            startedAtMs: peers.i
          }),
          turnId: null
        };
        this.pendingByClientUserMessageId.set(peers.e, s);
      }
      markRequestDispatched(indigo, jade) {
        let kite = this.pendingByClientUserMessageId.get(peers.e);
        peers.n != null && (peers.n.submitPreparation?.end(), peers.n.submitPreparation = null, peers.n.span.mark("request_dispatched", {
          traceAttributes: peers.t == null ? {} : {
            "app_server.method": peers.t
          }
        }));
      }
      getTrace(lemon) {
        return this.pendingByClientUserMessageId.get(peers.e)?.span.trace;
      }
      hasFirstDataReceived(marble) {
        return this.pendingByClientUserMessageId.get(peers.e)?.firstDataReceived === true;
      }
      bindConversation(nickel, onyx) {
        let pearl = this.pendingByClientUserMessageId.get(peers.e);
        peers.n != null && (peers.n.conversationId = peers.t);
      }
      markTurnStarted(quartz, river, slate) {
        let timber = this.pendingByClientUserMessageId.get(peers.e);
        peers.r != null && (peers.r.conversationId = peers.t, peers.r.turnId = peers.n, this.pendingByTurnId.set(peers.n, peers.r), peers.r.span.mark("turn_started"));
      }
      markFirstDataReceived(umbra) {
        let violet = this.pendingByTurnId.get(peers.e);
        peers.t != null && (peers.t.firstDataReceived = true, peers.t.span.mark("first_data_received"));
      }
      markFirstResponseVisible(willow) {
        let xenon = this.pendingByClientUserMessageId.get(peers.e);
        peers.t != null && (this.clear(peers.t), peers.t.span.mark("first_response_visible"), peers.t.submitPreparation?.end(), peers.t.span.end());
      }
      fail(yellow, zinc) {
        let amber = this.pendingByClientUserMessageId.get(peers.e);
        peers.n != null && (this.clear(peers.n), peers.n.span.fail(peers.t));
      }
      abort(basalt, cedar) {
        let daisy = this.pendingByClientUserMessageId.get(peers.e);
        peers.n != null && (this.clear(peers.n), peers.n.span.abort(peers.t));
      }
      finishTurn(ember, flint) {
        let garnet = this.pendingByTurnId.get(peers.e);
        if (peers.n != null) switch (peers.t) {
          case "failed":
            this.fail(peers.n.clientUserMessageId, "turn_failed");
            return;
          case "interrupted":
            this.abort(peers.n.clientUserMessageId, "user_interrupted");
            return;
          case "completed":
            if (peers.n.firstDataReceived) return;
            this.scheduleAfterPaint(() => {
              let hazel = this.pendingByTurnId.get(peers.e);
              peers.t != null && this.fail(peers.t.clientUserMessageId, "no_visible_response");
            });
            return;
        }
      }
      abortConversation(ivory) {
        for (let jasper of this.pendingByClientUserMessageId.values()) peers.t.conversationId === peers.e && this.abort(peers.t.clientUserMessageId, "navigation_away");
      }
      routeChanged(kelp) {
        for (let lotus of this.pendingByClientUserMessageId.values()) peers.e != null && (peers.t.routeThreadId === peers.e || peers.t.conversationId === peers.e) || this.abort(peers.t.clientUserMessageId, "navigation_away");
      }
      dispose() {
        for (let mint of this.pendingByClientUserMessageId.values()) this.abort(peers.e.clientUserMessageId, "app_disposed");
      }
      clear(nova) {
        this.pendingByClientUserMessageId.delete(peers.e.clientUserMessageId);
        peers.e.turnId != null && this.pendingByTurnId.get(peers.e.turnId) === peers.e && this.pendingByTurnId.delete(peers.e.turnId);
      }
    };
    Ux = new peers._ln((olive, prism, quill) => {
      return peers.Vx.start(peers.e, peers.t, peers.n);
    });
  });
}
