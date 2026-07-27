// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dln` / export `r9` — extractFn(dln); companions fln/pln/mln; gp→appServices.

import { appServices } from "./desktop-services";

type PerformanceTelemetry = {
  startSpanCpuSampling?: (name: string) => unknown;
};

const pendingCpuSamplingSpanNames = new Set<string>();

function invokeIgnoringErrors(run: () => unknown): void {
  try {
    Promise.resolve(run()).catch(() => {});
  } catch {
    /* ignore */
  }
}

/** Start CPU sampling for `name`, or queue until telemetry is available (bundle `fln`). */
export function startSpanCpuSamplingOrQueue(name: string): void {
  const telemetry = (
    appServices as { performanceTelemetry?: PerformanceTelemetry } | null
  )?.performanceTelemetry;
  if (telemetry == null) {
    pendingCpuSamplingSpanNames.add(name);
    return;
  }
  pendingCpuSamplingSpanNames.delete(name);
  invokeIgnoringErrors(() => telemetry.startSpanCpuSampling?.(name));
}

/** Flush queued CPU-sampling span starts once telemetry is ready (bundle `dln` / `r9`). */
export function flushPendingCpuSamplingSpans(): void {
  for (const name of pendingCpuSamplingSpanNames)
    startSpanCpuSamplingOrQueue(name);
}
