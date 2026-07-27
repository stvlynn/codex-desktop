// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$nt`) / export `Xct`.

export type ApplyActive2Peers = {
  Bnt: (...args: unknown[]) => unknown;
  Gnt: (...args: unknown[]) => unknown;
  Hnt: (...args: unknown[]) => unknown;
  Ih: (...args: unknown[]) => unknown;
  Jnt: (...args: unknown[]) => unknown;
  Knt: (...args: unknown[]) => unknown;
  Lh: (...args: unknown[]) => unknown;
  Lnt: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Qnt: (...args: unknown[]) => unknown;
  Rh: (...args: unknown[]) => unknown;
  Rnt: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Vnt: (...args: unknown[]) => unknown;
  WebSocket: (...args: unknown[]) => unknown;
  Wnt: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Xnt: (...args: unknown[]) => unknown;
  Ynt: (...args: unknown[]) => unknown;
  Znt: (...args: unknown[]) => unknown;
  appendPCM16: (...args: unknown[]) => unknown;
  audioContext: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  client: (...args: unknown[]) => unknown;
  close: (...args: unknown[]) => unknown;
  connect: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  disconnect: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  drainPendingStartupAudioAppends: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  finish: (...args: unknown[]) => unknown;
  finishPromise: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  onEvent: (...args: unknown[]) => unknown;
  pendingStartupAudioAppends: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  processor: (...args: unknown[]) => unknown;
  qnt: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  znt: (...args: unknown[]) => unknown;
};

let peers: ApplyActive2Peers | null = null;

/** Wire applyActive2 peers once companions land. */
export function setApplyActive2Peers(next: ApplyActive2Peers): void {
  peers = next;
}

/**
 * Bundle export `Xct` / internal `$nt`.
 */
export function applyActive2() {
  if (peers == null) {
    throw new Error("applyActive2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.Lh(),
      peers.Qf(),
      (Knt = peers.sl({
        code: peers.X(),
        message: peers.X(),
        retryable: peers.il(),
      })),
      (qnt = peers.sl({
        session_id: peers.X(),
        status: peers.pl([`active`, `closed`]),
        config: peers.sl({
          provider_mode: peers.pl([`buffered`, `streaming_sse`]),
          transcript_delivery_mode: peers.pl([
            `final_only`,
            `segment`,
            `delta`,
          ]),
        }),
      })),
      (Jnt = peers.dl(`type`, [
        peers.sl({
          type: peers.ml(`session.started`),
          sequence_no: peers.rl(),
          session: peers.qnt,
        }),
        peers.sl({
          type: peers.ml(`session.updated`),
          sequence_no: peers.rl(),
          session: peers.qnt,
        }),
        peers.sl({
          type: peers.ml(`speech.started`),
          sequence_no: peers.rl(),
          utterance_id: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`speech.stopped`),
          sequence_no: peers.rl(),
          utterance_id: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`transcript.delta`),
          sequence_no: peers.rl(),
          utterance_id: peers.X(),
          revision: peers.rl(),
          text: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`transcript.segment`),
          sequence_no: peers.rl(),
          utterance_id: peers.X(),
          revision: peers.rl(),
          text: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`transcript.final`),
          sequence_no: peers.rl(),
          utterance_id: peers.X(),
          revision: peers.rl(),
          text: peers.X(),
        }),
        peers.sl({
          type: peers.ml(`transcript.failed`),
          sequence_no: peers.rl(),
          utterance_id: peers.X().nullish(),
          error: peers.Knt,
        }),
        peers.sl({
          type: peers.ml(`session.error`),
          sequence_no: peers.rl(),
          fatal: peers.il(),
          error: peers.Knt,
        }),
      ])),
      (Ynt = 1e4),
      (Xnt = 8e3),
      (Rh = class extends Error {
        constructor(e) {
          (super(peers.e), (this.name = `DictationStreamingError`));
        }
      }),
      (Znt = class {
        transcriptState = peers.Vnt();
        client = new peers.Qnt((e) => {
          peers.Hnt(this.transcriptState, peers.e);
        });
        audioContext = null;
        source = null;
        processor = null;
        async start(e) {
          let t = window.AudioContext;
          if (t == null)
            throw new peers.Rh(
              `AudioContext is not available for streaming dictation.`,
            );
          let n = new t();
          ((this.audioContext = n),
            (this.source = n.createMediaStreamSource(peers.e)),
            (this.processor = n.createScriptProcessor(2048, 1, 1)),
            (this.processor.onaudioprocess = (e) => {
              let t = peers.e.inputBuffer.getChannelData(0);
              this.client.appendPCM16(peers.Bnt(t));
            }),
            this.source.connect(this.processor),
            this.processor.connect(n.destination),
            await this.client.connect(n.sampleRate));
        }
        async finish() {
          return (
            this.stopAudioCapture(),
            await this.client.finish(),
            peers.Wnt(this.transcriptState)
          );
        }
        close() {
          (this.stopAudioCapture(), this.client.close());
        }
        stopAudioCapture() {
          (this.processor?.disconnect(),
            this.source?.disconnect(),
            (this.processor = null),
            (this.source = null),
            this.audioContext?.close().catch(() => {}),
            (this.audioContext = null));
        }
      }),
      (Qnt = class {
        onEvent;
        websocket = null;
        pendingStartupAudioAppends = [];
        finishPromise = null;
        resolveFinish = null;
        rejectFinish = null;
        rejectConnectBeforeWebsocket = null;
        sessionClosed = !1;
        terminalError = null;
        constructor(e) {
          this.onEvent = peers.e;
        }
        async connect(e) {
          ((this.terminalError = null), (this.sessionClosed = !1));
          let t = new Promise((e, t) => {
              this.rejectConnectBeforeWebsocket = t;
            }),
            n;
          try {
            n = await Promise.race([peers.Lnt(), t]);
          } finally {
            this.rejectConnectBeforeWebsocket = null;
          }
          let { websocketUrl: r, protocols: i } = n;
          return new Promise((t, n) => {
            let a = new peers.WebSocket(r, i);
            this.websocket = a;
            let o = !1,
              s = !1,
              c = null,
              l = (e) => {
                s || ((s = !0), n(peers.e));
              },
              u = () => {
                s || ((s = !0), t());
              },
              d = window.setTimeout(() => {
                let e = new peers.Rh(
                  `Dictation stream timed out before session.start completed.`,
                );
                ((c = peers.e), a.close(), l(peers.e));
              }, peers.Ynt);
            (a.addEventListener(
              `open`,
              () => {
                this.send(peers.Rnt(peers.e));
              },
              {
                once: !0,
              },
            ),
              a.addEventListener(`message`, (e) => {
                let t = peers.Gnt(peers.e.data);
                if (t == null) {
                  let e = new peers.Rh(
                    `Dictation stream returned an invalid event payload.`,
                  );
                  ((c = peers.e), l(peers.e), a.close());
                  return;
                }
                if ((this.onEvent(t), t.type === `session.started`)) {
                  ((o = !0),
                    window.clearTimeout(d),
                    this.drainPendingStartupAudioAppends(),
                    u());
                  return;
                }
                if (
                  t.type === `session.updated` &&
                  t.session.status === `closed`
                ) {
                  ((this.sessionClosed = !0),
                    a.close(),
                    this.resolveFinish?.());
                  return;
                }
                if (t.type === `transcript.failed`) {
                  let e = new peers.Rh(t.error.message);
                  ((c = peers.e),
                    this.rejectFinish?.(peers.e),
                    l(peers.e),
                    a.close());
                  return;
                }
                if (t.type === `session.error` && t.fatal) {
                  let e = new peers.Rh(t.error.message);
                  ((c = peers.e),
                    this.rejectFinish?.(peers.e),
                    l(peers.e),
                    a.close());
                }
              }),
              a.addEventListener(
                `error`,
                () => {
                  c ??= new peers.Rh(`Dictation stream websocket failed.`);
                },
                {
                  once: !0,
                },
              ),
              a.addEventListener(
                `close`,
                (e) => {
                  (window.clearTimeout(d), (this.websocket = null));
                  let t = c ?? peers.znt(peers.e, o);
                  (this.finishPromise
                    ? t && !this.sessionClosed
                      ? this.rejectFinish?.(t)
                      : this.resolveFinish?.()
                    : t && !this.sessionClosed && (this.terminalError = t),
                    !o && t && l(t),
                    (this.finishPromise = null),
                    (this.resolveFinish = null),
                    (this.rejectFinish = null));
                },
                {
                  once: !0,
                },
              ));
          });
        }
        appendPCM16(e) {
          let t = {
            type: `audio.append`,
            audio: peers.Ih(peers.e),
          };
          if (!this.sessionClosed && this.pendingStartupAudioAppends != null) {
            this.pendingStartupAudioAppends.push(t);
            return;
          }
          this.send(t);
        }
        finish() {
          return this.websocket
            ? this.finishPromise
              ? this.finishPromise
              : ((this.finishPromise = new Promise((e, t) => {
                  let n = window.setTimeout(() => {
                    let e = new peers.Rh(
                      `Dictation stream timed out while closing the session.`,
                    );
                    (this.websocket?.close(), t(peers.e));
                  }, peers.Xnt);
                  ((this.resolveFinish = () => {
                    (window.clearTimeout(n), peers.e());
                  }),
                    (this.rejectFinish = (e) => {
                      (window.clearTimeout(n), t(peers.e));
                    }));
                })),
                this.send({
                  type: `audio.flush`,
                  reason: `client`,
                }),
                this.send({
                  type: `session.close`,
                }),
                this.finishPromise)
            : this.terminalError == null
              ? Promise.resolve()
              : Promise.reject(this.terminalError);
        }
        close() {
          ((this.pendingStartupAudioAppends = null),
            this.rejectConnectBeforeWebsocket?.(
              new peers.Rh(
                `Dictation stream closed before websocket connection started.`,
              ),
            ),
            (this.rejectConnectBeforeWebsocket = null),
            this.websocket?.close(),
            (this.websocket = null));
        }
        drainPendingStartupAudioAppends() {
          let e = this.pendingStartupAudioAppends ?? [];
          this.pendingStartupAudioAppends = null;
          for (let t of peers.e) this.send(t);
        }
        send(e) {
          this.websocket?.readyState === peers.WebSocket.OPEN &&
            this.websocket.send(JSON.stringify(peers.e));
        }
      }));
  });
}
