// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ats`) / export `aw`.

export type StartComposerButtonNewThreadPeers = {
  Ul: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  launchId: (...args: unknown[]) => unknown;
  sts: (...args: unknown[]) => unknown;
  yX: (...args: unknown[]) => unknown;
};

let peers: StartComposerButtonNewThreadPeers | null = null;

/** Wire StartComposerButtonNewThread peers once companions land. */
export function setStartComposerButtonNewThreadPeers(
  next: StartComposerButtonNewThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aw` / internal `ats`.
 */
async function StartComposerButtonNewThread(e, t, n) {
  if (peers == null) {
    throw new Error("StartComposerButtonNewThread peers are not configured");
  }

  let r = e.get(peers.yX);
  if (
    r != null &&
    r.phase !== `failed` &&
    t.source !== `composer_button_new_thread`
  )
    return;
  let i = crypto.randomUUID();
  e.set(peers.yX, {
    handoffComplete: !1,
    launchId: i,
    originPath: n,
    phase: `starting`,
    request: t,
  });
  try {
    let e = peers.gp.realtimeVoiceRuntime;
    if (e == null) throw Error(`Voice chat is unavailable`);
    await e.requestRealtimeStart(t, i);
  } catch (t) {
    if (e.get(peers.yX)?.launchId !== i) return;
    throw (
      peers.sts(e, `failed`, i, peers.Ul(t)),
      peers.Wf.error(`Unable to request realtime voice launch`, {
        safe: {},
        sensitive: {
          error: t,
        },
      }),
      t
    );
  }
}
