// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `voc`) / export `xp`.

export type ThinkingShimmerMessagePeers = {
  $: (...args: unknown[]) => unknown;
  G1: (...args: unknown[]) => unknown;
  W1: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  yoc: (...args: unknown[]) => unknown;
};
let peers: ThinkingShimmerMessagePeers | null = null;

/** Wire ThinkingShimmerMessage peers once companions land. */
export function setThinkingShimmerMessagePeers(
  next: ThinkingShimmerMessagePeers,
): void {
  peers = next;
}

/**
 * Bundle export `xp` / internal `voc`.
 */
export function ThinkingShimmerMessage(props: unknown) {
  const Z = peers.Z;
  const W1 = peers.W1;
  if (peers == null) {
    throw new Error("ThinkingShimmerMessage peers are not configured");
  }
  let { className, message, ...rest } = props;
  let a = peers.$(
    "text-size-chat leading-[calc(var(--codex-chat-font-size)_+_8px)] select-none truncate",
    className,
  );
  let o = message ?? (
    <Z
      id="thinkingShimmer.default"
      defaultMessage="Thinking"
      description="Default placeholder shown while the assistant is thinking"
    />
  );
  return (
    <W1 className={a} {...rest}>
      {o}
    </W1>
  );
}
