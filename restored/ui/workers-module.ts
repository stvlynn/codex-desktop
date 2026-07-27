// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xf`) / export `Zdt`.
// npm identity: capnweb (Workers RPC / RpcTarget surface).

export {
  RpcPromise,
  RpcSession,
  RpcStub,
  RpcTarget,
  deserialize,
  newHttpBatchRpcResponse,
  newHttpBatchRpcSession,
  newMessagePortRpcSession,
  newWebSocketRpcSession,
  newWorkersRpcResponse,
  newWorkersWebSocketRpcResponse,
  nodeHttpBatchRpcResponse,
  serialize,
} from "capnweb";

export type WorkersModulePeers = Record<string, unknown>;

/** @deprecated No-op; capnweb owns the Workers RPC runtime. */
export function setWorkersModulePeers(_next: WorkersModulePeers): void {}

/**
 * Bundle export `Zdt` / internal `xf` — workers-module / capnweb RPC init.
 * No-op under the npm package.
 */
export function workersModule(): void {}
