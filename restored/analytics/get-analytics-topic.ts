// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lva` / export `AI` — lazy analytics topic client lookup.

type TopicClient = {
  getTopic: (name: string) => unknown;
};

type TopicClientConstructor = new (config: unknown) => TopicClient;

let TopicClientImpl: TopicClientConstructor | null = null;
let sharedClient: TopicClient | null = null;

/** Wire analytics topic client class (`bva` in the bundle). */
export function setAnalyticsTopicClientClass(
  ctor: TopicClientConstructor,
): void {
  TopicClientImpl = ctor;
  sharedClient = null;
}

export function getAnalyticsTopic(name: string, config: unknown): unknown {
  if (TopicClientImpl == null) {
    throw new Error("analytics topic client has not been configured");
  }
  sharedClient ??= new TopicClientImpl(config);
  return sharedClient.getTopic(name);
}
