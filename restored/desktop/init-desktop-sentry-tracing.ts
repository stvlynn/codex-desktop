// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `O7t`) / export `R9`.

export type InitDesktopSentryTracingPeers = {
  $b: (...args: unknown[]) => unknown;
  D7t: (...args: unknown[]) => unknown;
  F7t: (...args: unknown[]) => unknown;
  I7t: (...args: unknown[]) => unknown;
  J5t: (...args: unknown[]) => unknown;
  J6t: (...args: unknown[]) => unknown;
  L7t: (...args: unknown[]) => unknown;
  P5t: (...args: unknown[]) => unknown;
  P7t: (...args: unknown[]) => unknown;
  S7t: (...args: unknown[]) => unknown;
  X5t: (...args: unknown[]) => unknown;
  c7t: (...args: unknown[]) => unknown;
  g5t: (...args: unknown[]) => unknown;
  getSentryInitOptions: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  ox: (...args: unknown[]) => unknown;
  tracing: (...args: unknown[]) => unknown;
};

let peers: InitDesktopSentryTracingPeers | null = null;

/** Wire initDesktopSentryTracing peers once companions land. */
export function setInitDesktopSentryTracingPeers(next: InitDesktopSentryTracingPeers): void {
  peers = next;
}

/**
 * Bundle export `R9` / internal `O7t`.
 */
export function initDesktopSentryTracing() {
  if (peers == null) {
    throw new Error("initDesktopSentryTracing peers are not configured");
  }

  if (peers.ox != null) return;
  let e = window.electronBridge?.getSentryInitOptions?.();
  e != null &&
    ((F7t = new peers.X5t(
      e.initialDesktopTraceSampleRate ?? e.desktopTraceSampleRate,
    )),
    (ox = new peers.S7t({
      resource: peers.g5t({
        "codex.build_flavor": e.buildFlavor,
        "codex.build_number": e.buildNumber ?? `unknown`,
        "codex.process": `renderer`,
        "os.type": peers.D7t(),
        "service.name": `codex-desktop`,
        "service.version": e.appVersion,
      }),
      sampler: new peers.J5t({
        root: peers.L7t,
      }),
      spanProcessors: [
        new peers.c7t(
          {
            export: (e, t) => {
              let n = peers.P5t.serializeRequest(e);
              if (n == null) {
                t({
                  code: peers.J6t.FAILED,
                });
                return;
              }
              let r = peers.gp?.tracing;
              if (r == null) {
                (peers.I7t.length === peers.P7t && peers.I7t.shift(),
                  peers.I7t.push(n),
                  t({
                    code: peers.J6t.SUCCESS,
                  }));
                return;
              }
              r.exportTraceBatch(n).then(
                () =>
                  t({
                    code: peers.J6t.SUCCESS,
                  }),
                (e) =>
                  t({
                    code: peers.J6t.FAILED,
                    error: e,
                  }),
              );
            },
            shutdown: async () => {},
          },
          {
            exportTimeoutMillis: 1e4,
            maxExportBatchSize: 256,
            maxQueueSize: 1024,
            scheduledDelayMillis: 5e3,
          },
        ),
      ],
    })),
    peers.$b.setGlobalTracerProvider(peers.ox));
}
