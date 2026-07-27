// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wf` / export `ddt` — leveled logger; sink left injectable.

type LogLevel = "trace" | "debug" | "info" | "warning" | "error";
type LogSink = (level: LogLevel, message: string, meta?: unknown) => void;

let sink: LogSink | null = null;

/** Wire underlying log sink (`xZe` in the bundle). */
export function setAppLoggerSink(fn: LogSink): void {
  sink = fn;
}

function log(level: LogLevel, message: string, meta?: unknown): void {
  if (sink != null) {
    sink(level, message, meta);
    return;
  }
  const fn =
    level === "error"
      ? console.error
      : level === "warning"
        ? console.warn
        : console.log;
  fn(`[${level}]`, message, meta);
}

export const appLogger = {
  trace: (message: string, meta?: unknown) => log("trace", message, meta),
  debug: (message: string, meta?: unknown) => log("debug", message, meta),
  info: (message: string, meta?: unknown) => log("info", message, meta),
  warning: (message: string, meta?: unknown) => log("warning", message, meta),
  error: (message: string, meta?: unknown) => log("error", message, meta),
};
