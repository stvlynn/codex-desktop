// Restored from ref/webview/assets/chunk-AGHRB4JF-D33xM56t.js
// Day.js plus Mermaid logger/name helpers (dayjs-core-alt duplicate chunk).

import dayjs from "dayjs";
export type LogLevelName =
  | "trace"
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";
const LOG_LEVELS = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5,
} as const;
export type MermaidLogger = {
  trace: (...args: unknown[]) => void;
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  fatal: (...args: unknown[]) => void;
};
function formatLogLabel(label: string): string {
  return `%c${dayjs().format("ss.SSS")} : ${label} : `;
}
const logger: MermaidLogger = {
  trace: () => {},
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
  fatal: () => {},
};
export function setLogLevel(level: LogLevelName | number = "fatal"): void {
  let threshold: number = LOG_LEVELS.fatal;
  if (typeof level === "string") {
    const normalized = level.toLowerCase() as LogLevelName;
    if (normalized in LOG_LEVELS) {
      threshold = LOG_LEVELS[normalized];
    }
  } else if (typeof level === "number") {
    threshold = level;
  }
  logger.trace = () => {};
  logger.debug = () => {};
  logger.info = () => {};
  logger.warn = () => {};
  logger.error = () => {};
  logger.fatal = () => {};
  if (threshold <= LOG_LEVELS.fatal) {
    logger.fatal = console.error
      ? console.error.bind(console, formatLogLabel("FATAL"), "color: orange")
      : console.log.bind(console, "\x1B[35m", formatLogLabel("FATAL"));
  }
  if (threshold <= LOG_LEVELS.error) {
    logger.error = console.error
      ? console.error.bind(console, formatLogLabel("ERROR"), "color: orange")
      : console.log.bind(console, "\x1B[31m", formatLogLabel("ERROR"));
  }
  if (threshold <= LOG_LEVELS.warn) {
    logger.warn = console.warn
      ? console.warn.bind(console, formatLogLabel("WARN"), "color: orange")
      : console.log.bind(console, "\x1B[33m", formatLogLabel("WARN"));
  }
  if (threshold <= LOG_LEVELS.info) {
    logger.info = console.info
      ? console.info.bind(console, formatLogLabel("INFO"), "color: lightblue")
      : console.log.bind(console, "\x1B[34m", formatLogLabel("INFO"));
  }
  if (threshold <= LOG_LEVELS.debug) {
    logger.debug = console.debug
      ? console.debug.bind(
          console,
          formatLogLabel("DEBUG"),
          "color: lightgreen",
        )
      : console.log.bind(console, "\x1B[32m", formatLogLabel("DEBUG"));
  }
  if (threshold <= LOG_LEVELS.trace) {
    logger.trace = console.debug
      ? console.debug.bind(
          console,
          formatLogLabel("TRACE"),
          "color: lightgreen",
        )
      : console.log.bind(console, "\x1B[32m", formatLogLabel("TRACE"));
  }
}
export { logger };
export function defineFunctionName<T extends object>(
  target: T,
  name: string,
): T {
  return Object.defineProperty(target, "name", {
    value: name,
    configurable: true,
  });
}

/** CommonJS-style dayjs factory retained for Mermaid interop call sites. */
export function dayjsCommonJsModule(): typeof dayjs {
  return dayjs;
}

/** Bundler init retained for Mermaid call sites that invoke the chunk runtime. */
export function initDayjsLoggerRuntime(): void {
  // Exports are eagerly initialized; this is a no-op compatibility shim.
}
export function defineEnumerableGetters<T extends object>(
  target: T,
  getters: Record<string, () => unknown>,
): void {
  for (const key of Object.keys(getters)) {
    Object.defineProperty(target, key, {
      get: getters[key],
      enumerable: true,
    });
  }
}
