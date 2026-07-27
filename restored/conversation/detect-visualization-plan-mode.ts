// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tLc` / export `Jd` — explicit/soft/none from user message text.
// Markdown mention + plugin URI helpers left injectable.

export type VisualizationPlanMode = "explicit" | "soft" | "none";

type TextPart = { type?: string; text?: string };
type MessageLike = {
  type?: string;
  status?: string;
  content?: TextPart[];
  input?: TextPart[];
};

type MentionMatch = { path: string; end: number };

const PLUGIN_URI_RE = /^plugin:\/\/([^?]+)(?:\?|$)/i;
const SOFT_VISUALIZATION_RE =
  /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i;

const EXPLICIT_PLUGIN_IDS = new Set([
  "visualize@openai-bundled",
  "visualize@openai-curated",
  "visualize@openai-curated-remote",
]);

let findNextMention:
  | ((text: string, from: number) => MentionMatch | null)
  | null = null;
let unescapeMentionPath: ((path: string) => string) | null = null;

/** Wire markdown mention scanner (`n_` in the bundle). */
export function setMentionScanner(
  fn: (text: string, from: number) => MentionMatch | null,
): void {
  findNextMention = fn;
}

/** Wire mention-path unescape (`t_` in the bundle). */
export function setMentionPathUnescape(fn: (path: string) => string): void {
  unescapeMentionPath = fn;
}

export function detectVisualizationPlanMode(
  seedContent: TextPart[],
  items: MessageLike[],
): VisualizationPlanMode {
  const contents: TextPart[][] = [seedContent];
  for (const item of items) {
    if (item.type === "userMessage" && item.content != null) {
      contents.push(item.content);
    }
    if (
      item.type === "steeringUserMessage" &&
      item.status === "accepted" &&
      item.input != null
    ) {
      contents.push(item.input);
    }
  }
  let soft = false;
  for (const parts of contents) {
    for (const part of parts) {
      if (part.type !== "text" || part.text == null) continue;
      if (SOFT_VISUALIZATION_RE.test(part.text)) soft = true;
      let cursor = 0;
      while (cursor < part.text.length) {
        const mention = findNextMention?.(part.text, cursor);
        if (mention == null) break;
        const path = unescapeMentionPath?.(mention.path) ?? mention.path;
        const pluginId = PLUGIN_URI_RE.exec(path)?.[1]?.trim().toLowerCase();
        if (pluginId != null && EXPLICIT_PLUGIN_IDS.has(pluginId)) {
          return "explicit";
        }
        cursor = mention.end;
      }
    }
  }
  return soft ? "soft" : "none";
}
