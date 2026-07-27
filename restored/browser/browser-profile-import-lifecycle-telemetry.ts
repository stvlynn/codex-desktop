// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — telemetry helpers via extractFn(internal `cEo`/`oEo`/`iEo`/`aEo`/`sEo`).
// Analytics peers bind via setBrowserProfileImportTelemetryPeers.

export type BrowserProfileImportTelemetryPeers = {
  attemptPayload: (
    entryPoint: unknown,
    source: unknown,
    attempt: unknown,
  ) => Record<string, unknown>;
  attemptResultPayload: (
    result: unknown,
    finished: unknown,
  ) => Record<string, unknown>;
  chromeSource: unknown;
  dialogClosedStep: unknown;
  attemptStartedStep: unknown;
  attemptFinishedStep: unknown;
  noticeShownStep: unknown;
  noticeAckedStep: unknown;
  entryPoint: (value: unknown) => unknown;
  exitState: (value: unknown) => unknown;
  hasFailures: (result: Record<string, unknown>) => boolean;
  logError: (message: string, payload: { safe: unknown }) => void;
  logProductEvent: (
    store: unknown,
    event: unknown,
    payload: Record<string, unknown>,
  ) => void;
  logWarning: (message: string, payload: { safe: unknown }) => void;
  productEvent: unknown;
  safeAttemptContext: (
    entryPoint: unknown,
    source: unknown,
    attempt: unknown,
    result: Record<string, unknown>,
  ) => unknown;
  source: (value: unknown) => unknown;
};

let peers: BrowserProfileImportTelemetryPeers | null = null;

/** Wire browser profile import telemetry enums/helpers once companions land. */
export function setBrowserProfileImportTelemetryPeers(
  next: BrowserProfileImportTelemetryPeers,
): void {
  peers = next;
}

function requirePeers(): BrowserProfileImportTelemetryPeers {
  if (peers == null) {
    throw new Error(
      "Browser profile import telemetry peers are not configured",
    );
  }
  return peers;
}

/** Bundle `cEo` / export `Sk`. */
export function logBrowserProfileImportDialogClosed(
  store: unknown,
  entryPoint: unknown,
  details: {
    attemptIndex?: unknown;
    exitState?: unknown;
    flowId?: unknown;
    source?: unknown;
    windowsChromeAdminApprovalNoticeAcknowledged?: unknown;
    windowsChromeAdminApprovalNoticeRequired?: unknown;
  },
): void {
  const p = requirePeers();
  p.logProductEvent(store, p.productEvent, {
    stepType: p.dialogClosedStep,
    entryPoint: p.entryPoint(entryPoint),
    source: details.source == null ? undefined : p.source(details.source),
    flowId: details.flowId,
    attemptIndex: details.attemptIndex,
    windowsChromeAdminApprovalNoticeRequired:
      details.windowsChromeAdminApprovalNoticeRequired,
    windowsChromeAdminApprovalNoticeAcknowledged:
      details.windowsChromeAdminApprovalNoticeAcknowledged,
    dialogExitState:
      details.exitState == null ? undefined : p.exitState(details.exitState),
  });
}

/** Bundle `oEo` / export `xk`. */
export function logBrowserProfileImportAttemptStarted(
  store: unknown,
  entryPoint: unknown,
  source: unknown,
  attempt: unknown,
): void {
  const p = requirePeers();
  p.logProductEvent(store, p.productEvent, {
    stepType: p.attemptStartedStep,
    ...p.attemptPayload(entryPoint, source, attempt),
  });
}

/** Bundle `iEo` / export `wk`. */
export function logBrowserProfileImportWindowsChromeNoticeShown(
  store: unknown,
  entryPoint: unknown,
  flowId: unknown,
): void {
  const p = requirePeers();
  p.logProductEvent(store, p.productEvent, {
    stepType: p.noticeShownStep,
    entryPoint: p.entryPoint(entryPoint),
    source: p.chromeSource,
    flowId,
    windowsChromeAdminApprovalNoticeRequired: true,
    windowsChromeAdminApprovalNoticeAcknowledged: false,
  });
}

/** Bundle `aEo` / export `Ck`. */
export function logBrowserProfileImportWindowsChromeNoticeAcked(
  store: unknown,
  entryPoint: unknown,
  flowId: unknown,
): void {
  const p = requirePeers();
  p.logProductEvent(store, p.productEvent, {
    stepType: p.noticeAckedStep,
    entryPoint: p.entryPoint(entryPoint),
    source: p.chromeSource,
    flowId,
    windowsChromeAdminApprovalNoticeRequired: true,
    windowsChromeAdminApprovalNoticeAcknowledged: true,
  });
}

/** Bundle `sEo` / export `bk`. */
export function logBrowserProfileImportAttemptFinished(
  store: unknown,
  entryPoint: unknown,
  source: unknown,
  attempt: unknown,
  result: unknown,
): void {
  const p = requirePeers();
  const finished = p.attemptResultPayload(result, result);
  p.logProductEvent(store, p.productEvent, {
    stepType: p.attemptFinishedStep,
    ...p.attemptPayload(entryPoint, source, attempt),
    ...finished,
  });
  const safe = p.safeAttemptContext(entryPoint, source, attempt, finished);
  if (result == null) {
    p.logError("Browser profile import request failed without a result", {
      safe,
    });
  } else if (p.hasFailures(finished)) {
    p.logWarning("Browser profile import returned failures", { safe });
  }
}
