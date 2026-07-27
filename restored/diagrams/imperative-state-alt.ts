// Restored from ref/webview/assets/chunk-QZHKN3VN-DrP8xepp.js
// Mermaid ImperativeState (alt build): resettable holder initialized by a factory.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
export class ImperativeState<T> {
  private readonly init: () => T;
  records: T;
  constructor(init: () => T) {
    this.init = init;
    this.records = this.init();
  }
  reset(): void {
    this.records = this.init();
  }
}
defineFunctionName(ImperativeState, "ImperativeState");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initImperativeStateChunk(): void {
  initDayjsLoggerRuntime();
}
export { initImperativeStateChunk as n, ImperativeState as t };
