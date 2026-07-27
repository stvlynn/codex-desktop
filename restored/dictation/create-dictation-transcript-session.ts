// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jit`) / export `Mct`.

export type CreateDictationTranscriptSessionPeers = {
  $rt: (...args: unknown[]) => unknown;
  Blob: (...args: unknown[]) => unknown;
  Fit: (...args: unknown[]) => unknown;
  Kh: (...args: unknown[]) => unknown;
  Krt: (...args: unknown[]) => unknown;
  MediaRecorder: (...args: unknown[]) => unknown;
  Mit: (...args: unknown[]) => unknown;
  Pit: (...args: unknown[]) => unknown;
  Rrt: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Znt: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  close: (...args: unknown[]) => unknown;
  dispose: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  mimeType: (...args: unknown[]) => unknown;
  qf: (...args: unknown[]) => unknown;
  requestMicrophoneAccess: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};
let peers: CreateDictationTranscriptSessionPeers | null = null;

/** Wire createDictationTranscriptSession peers once companions land. */
export function setCreateDictationTranscriptSessionPeers(
  next: CreateDictationTranscriptSessionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mct` / internal `jit`.
 */
export function createDictationTranscriptSession({
  cleanupEnabled,
  enabled,
  getSurroundingText,
  onStartError,
  onTranscriptInsert,
  onTranscriptSend,
  onTranscribeError,
  onUnsupported,
  streamingEnabled,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "createDictationTranscriptSession peers are not configured",
    );
  }
  let [l, u] = peers.Kh.useState(false),
    [d, f] = peers.Kh.useState(false),
    [p, m] = peers.Kh.useState(false),
    h = peers.Kh.useRef(null),
    g = peers.Kh.useRef(null),
    _ = peers.Kh.useRef(null),
    v = peers.Kh.useRef(null),
    y = peers.Kh.useRef([]),
    b = peers.Kh.useRef(null),
    x = peers.Kh.useRef(false),
    S = peers.Kh.useRef(null),
    C = peers.Kh.useRef(true),
    w = peers.Kh.useRef(enabled),
    T = peers.Kh.useRef(null),
    E = peers.Kh.useRef(null),
    D = peers.Kh.useRef({
      onTranscriptInsert,
      onTranscriptSend,
      onStartError,
      onTranscribeError,
      onUnsupported,
      getSurroundingText,
    }),
    {
      recordingDurationMs,
      waveformCanvasRef,
      startWaveformCapture,
      stopWaveformCapture,
      resetWaveformDisplay,
    } = peers.$rt();
  D.current = {
    onTranscriptInsert,
    onTranscriptSend,
    onStartError,
    onTranscribeError,
    onUnsupported,
    getSurroundingText,
  };
  w.current = enabled;
  let N = () => {
      v.current?.close();
      v.current = null;
      _.current?.close();
      _.current = null;
    },
    P = () => {
      E.current != null && (window.clearTimeout(E.current), (E.current = null));
    },
    F = () => {
      g.current?.dispose();
      g.current = null;
    },
    I = async (e) => {
      v.current?.close();
      v.current = null;
      let t = _.current;
      if (((_.current = null), t == null)) return peers.Krt(e);
      try {
        let e = await t.finish();
        if (e.trim().length > 0) return e;
      } catch (e) {
        peers.Wf.warning("[Composer] streaming dictation failed", {
          safe: {},
          sensitive: {
            error: e,
          },
        });
      }
      return peers.Krt(e);
    },
    L = async ({ action, audio, handlers }) => {
      C.current && f(true);
      try {
        let i = await peers.Rrt({
          transcript: await I(audio),
          surroundingText: handlers.getSurroundingText?.() ?? null,
          cleanupEnabled,
        });
        S.current = null;
        C.current && m(false);
        let a = i.trim();
        a.length > 0 &&
          (peers.qf
            .getInstance()
            .dispatchMessage("global-dictation-record-history-item", {
              text: a,
            }),
          action === "send"
            ? handlers.onTranscriptSend(a)
            : handlers.onTranscriptInsert(a));
      } catch (e) {
        peers.Wf.error("[Composer] dictation failed", {
          safe: {},
          sensitive: {
            error: e,
          },
        });
        C.current &&
          ((S.current = {
            action,
            audio,
            handlers,
          }),
          m(true));
        handlers.onTranscribeError(e);
      } finally {
        C.current && f(false);
      }
    },
    R = async () => {
      P();
      let e = b.current ?? "insert",
        t = D.current;
      b.current = null;
      let n = Math.max(
        recordingDurationMs,
        T.current == null ? 0 : performance.now() - T.current,
      );
      T.current = null;
      let r = h.current,
        i = y.current;
      if (
        ((y.current = []),
        r && ((r.ondataavailable = null), (r.onstop = null)),
        (h.current = null),
        stopWaveformCapture(),
        F(),
        C.current && (u(false), resetWaveformDisplay()),
        e === "abort" || i.length === 0)
      ) {
        N();
        return;
      }
      if (n < peers.Pit) {
        N();
        return;
      }
      let a = r?.mimeType || i[0]?.type || "audio/webm";
      await L({
        action: e,
        audio: new peers.Blob(i, {
          type: a,
        }),
        handlers: t,
      });
    },
    z = peers.Wm(async () => {
      if (l || d) return;
      let e = S.current;
      e != null && (await L(e));
    }),
    B = peers.Wm((e) => {
      if ((P(), b.current != null)) {
        b.current = e === "send" ? "send" : b.current;
        return;
      }
      if (((b.current = e), x.current)) {
        F();
        return;
      }
      let t = h.current;
      if (!t) {
        R();
        return;
      }
      if (t.state === "inactive") {
        R();
        return;
      }
      t.stop();
    }),
    V = peers.Wm(() => {
      B("abort");
    });
  return (
    peers.Kh.useEffect(() => {
      return (
        (C.current = true),
        () => {
          C.current = false;
          P();
          let e = h.current;
          e != null &&
            e.state !== "inactive" &&
            b.current == null &&
            ((b.current = "insert"), e.stop());
          F();
        }
      );
    }, []),
    {
      abortDictation: V,
      isDictating: l,
      isTranscribing: d,
      canRetryDictation: p,
      recordingDurationMs,
      waveformCanvasRef,
      retryDictation: z,
      startDictation: peers.Wm(async () => {
        if (l || d || x.current) return;
        if (!w.current) {
          D.current.onUnsupported();
          return;
        }
        x.current = true;
        b.current = null;
        let e = null;
        try {
          S.current = null;
          m(false);
          stopWaveformCapture();
          await peers.gp.systemPermissions
            ?.requestMicrophoneAccess()
            .catch(() => {});
          e = peers.Mit();
          g.current = e;
          let t = await e.stream;
          if (g.current !== e || !C.current || !w.current) {
            F();
            b.current = null;
            return;
          }
          T.current = performance.now();
          startWaveformCapture(t);
          let n = new peers.MediaRecorder(t);
          if (
            ((h.current = n),
            (y.current = []),
            (n.ondataavailable = (e) => {
              e.data.size > 0 && y.current.push(e.data);
            }),
            (n.onstop = () => {
              R();
            }),
            n.start(),
            u(true),
            b.current != null)
          ) {
            n.stop();
            return;
          }
          if (
            ((E.current = window.setTimeout(() => {
              B("insert");
            }, peers.Fit)),
            streamingEnabled)
          ) {
            let n = new peers.Znt();
            v.current = n;
            n.start(t).then(
              () => {
                if (v.current === n) {
                  if (
                    ((v.current = null),
                    !C.current || !w.current || g.current !== e)
                  ) {
                    n.close();
                    return;
                  }
                  _.current = n;
                }
              },
              (e) => {
                v.current === n &&
                  ((v.current = null),
                  n.close(),
                  peers.Wf.warning(
                    "[Composer] unable to start streaming dictation",
                    {
                      safe: {},
                      sensitive: {
                        error: e,
                      },
                    },
                  ));
              },
            );
          }
        } catch (t) {
          (e != null && g.current !== e) ||
            (peers.Wf.error("[Composer] unable to start dictation", {
              safe: {},
              sensitive: {
                error: t,
              },
            }),
            C.current && D.current.onStartError(t));
          let n = h.current;
          n && ((n.ondataavailable = null), (n.onstop = null));
          h.current = null;
          N();
          stopWaveformCapture();
          resetWaveformDisplay();
          F();
          y.current = [];
          T.current = null;
          P();
          b.current = null;
        } finally {
          x.current = false;
        }
      }),
      stopDictation: B,
    }
  );
}
