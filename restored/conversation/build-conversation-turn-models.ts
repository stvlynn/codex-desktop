// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RTa` / export `SF` — build render models for conversation turns.
// Pairing / moderation helpers left injectable.

type Message = { [key: string]: unknown };
type TurnModel = { [key: string]: unknown };

let normalizeMessages: (input: unknown) => Message[] = () => [];
let buildTurn: (
  message: Message,
  opts: { isStreaming: boolean; mode: string },
) => TurnModel | null = () => null;
let resolveModeration:
  | ((message: Message) => { resolvedTargetMessageId?: string | null } | null)
  | null = null;
let finalizeTurns: (turns: TurnModel[]) => TurnModel[] = (t) => t;
let decorateTurn: (
  turn: TurnModel,
  opts: { isStreaming: boolean },
) => TurnModel = (t) => t;

export function setBuildConversationTurnModelsDeps(args: {
  normalizeMessages: typeof normalizeMessages;
  buildTurn: typeof buildTurn;
  resolveModeration?: typeof resolveModeration;
  finalizeTurns?: typeof finalizeTurns;
  decorateTurn?: typeof decorateTurn;
}): void {
  normalizeMessages = args.normalizeMessages;
  buildTurn = args.buildTurn;
  resolveModeration = args.resolveModeration ?? null;
  if (args.finalizeTurns) finalizeTurns = args.finalizeTurns;
  if (args.decorateTurn) decorateTurn = args.decorateTurn;
}

export function buildConversationTurnModels(
  input: unknown,
  {
    isStreaming = false,
    mode = "conversation",
    moderationDisclaimersByMessageId: _moderation = {},
  }: {
    isStreaming?: boolean;
    mode?: string;
    moderationDisclaimersByMessageId?: Record<string, unknown>;
  } = {},
): TurnModel[] {
  void _moderation;
  const messages = normalizeMessages(input);
  const turns: TurnModel[] = [];
  for (const message of messages) {
    const turn = buildTurn(message, { isStreaming, mode });
    if (turn == null) continue;
    if (mode === "conversation" && resolveModeration != null) {
      resolveModeration(message);
    }
    turns.push(turn);
  }
  const finalized = finalizeTurns(turns);
  return finalized.map((turn, index) =>
    decorateTurn(turn, {
      isStreaming: isStreaming && index === finalized.length - 1,
    }),
  );
}
