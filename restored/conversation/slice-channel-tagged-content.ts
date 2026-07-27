// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Mot` / export `Yst` — pure helper — Mot + ywe/vwe/Not/Owe/kwe.

const CHANNEL_TAG_RE = /^\[([A-Z][A-Z0-9_-]*)\][ \t]*/;
const CHANNEL_TAG_PREFIX_RE = /^\[[A-Z][A-Z0-9_-]*$/;
const DEFAULT_DISPLAY_CHANNELS: readonly string[] | "all" = ["final"];

type ChannelSpan = {
  channel: string;
  contentStart: number;
  contentEnd: number;
};

function looksLikeChannelTag(value: string): boolean {
  const trimmed = value.trimStart();
  return (
    trimmed === "[" ||
    CHANNEL_TAG_PREFIX_RE.test(trimmed) ||
    CHANNEL_TAG_RE.test(trimmed)
  );
}

function parseLeadingChannelTag(value: string): ChannelSpan | null {
  const lead = value.length - value.trimStart().length;
  const match = CHANNEL_TAG_RE.exec(value.slice(lead));
  if (match?.[1] == null) return null;
  let contentStart = lead + match[0].length;
  if (value.slice(contentStart, contentStart + 2) === "\r\n") contentStart += 2;
  else if (value[contentStart] === "\n") contentStart += 1;
  return {
    channel: match[1].toLowerCase(),
    contentStart,
    contentEnd: value.length,
  };
}

/** Slice leading `[CHANNEL]` tagged content, or return empty when filtered out. */
export function sliceChannelTaggedContent(
  value: string,
  {
    displayChannels = DEFAULT_DISPLAY_CHANNELS,
  }: { displayChannels?: readonly string[] | "all" } = {},
): string {
  const span = parseLeadingChannelTag(value);
  if (span == null) return looksLikeChannelTag(value) ? "" : value;
  if (displayChannels !== "all" && !displayChannels.includes(span.channel))
    return "";
  return value.slice(span.contentStart, span.contentEnd);
}
