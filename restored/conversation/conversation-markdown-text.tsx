// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Iqc`) / export `Yu`.

export type ConversationMarkdownTextPeers = {
  $: (...args: unknown[]) => unknown;
  Bqc: (...args: unknown[]) => unknown;
  LH: (...args: unknown[]) => unknown;
  Lqc: (...args: unknown[]) => unknown;
  Wqc: (...args: unknown[]) => unknown;
  zqc: (...args: unknown[]) => unknown;
};
let peers: ConversationMarkdownTextPeers | null = null;

/** Wire ConversationMarkdownText peers once companions land. */
export function setConversationMarkdownTextPeers(
  next: ConversationMarkdownTextPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yu` / internal `Iqc`.
 */
export function ConversationMarkdownText(props: unknown) {
  const LH = peers.LH;
  if (peers == null) {
    throw new Error("ConversationMarkdownText peers are not configured");
  }
  let {
      text,
      ref,
      className,
      externalLinkContextMenuConversationId,
      markdownClassName,
      cwd,
      hostId,
      pluginMentionPresentation,
      variant = "default",
    } = props,
    f = peers.Lqc(text);
  let p = f,
    m = peers.$("text-size-chat whitespace-pre-wrap", className);
  let h =
      variant === "compact" &&
      "![--markdown-font-size:var(--text-sm)] ![--markdown-line-height:var(--leading-relaxed)] !text-token-text-secondary",
    g = peers.$(
      "[&_li+li]:!mt-0 [&_li>ol]:!mt-0 [&_li>p+p]:!mt-0 [&_li>ul]:!mt-0 [&_ol]:!pl-6 [&_p]:!m-0 [&_p+p]:!mt-5 [&_ul]:!pl-6",
      h,
      markdownClassName,
    );
  let _ = externalLinkContextMenuConversationId != null,
    v = (
      <LH
        className={g}
        conversationId={externalLinkContextMenuConversationId}
        cwd={cwd}
        extensions={peers.Wqc}
        hostId={hostId}
        pluginMentionPresentation={pluginMentionPresentation}
        isBrowserSidebarEnabled={_}
      >
        {p}
      </LH>
    );
  return (
    <div ref={ref} className={m}>
      {v}
    </div>
  );
}
