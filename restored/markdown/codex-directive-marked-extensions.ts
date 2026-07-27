// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nCa` / export `QF` — marked extension pack registering
// block+inline `codexDirective` tokenizers. Tokenizer bodies stay host-bound.

export type CodexDirectiveTokenizer = (src: string) => unknown;

let blockStart: ((src: string) => number | void) | null = null;
let blockTokenizer: CodexDirectiveTokenizer | null = null;
let inlineStart: ((src: string) => number | void) | null = null;
let inlineTokenizer: CodexDirectiveTokenizer | null = null;

export function bindCodexDirectiveTokenizers(args: {
  blockStart?: typeof blockStart;
  blockTokenizer?: CodexDirectiveTokenizer;
  inlineStart?: typeof inlineStart;
  inlineTokenizer?: CodexDirectiveTokenizer;
}): void {
  if (args.blockStart) blockStart = args.blockStart;
  if (args.blockTokenizer) blockTokenizer = args.blockTokenizer;
  if (args.inlineStart) inlineStart = args.inlineStart;
  if (args.inlineTokenizer) inlineTokenizer = args.inlineTokenizer;
}

/** Bundle `nCa` / export `QF`. */
export const codexDirectiveMarkedExtensions = [
  {
    extensions: [
      {
        name: "codexDirective",
        level: "block" as const,
        start(src: string) {
          return blockStart?.(src);
        },
        tokenizer(src: string) {
          return blockTokenizer?.(src);
        },
      },
      {
        name: "codexDirective",
        level: "inline" as const,
        start(src: string) {
          return inlineStart?.(src);
        },
        tokenizer(src: string) {
          return inlineTokenizer?.(src);
        },
      },
    ],
  },
];
