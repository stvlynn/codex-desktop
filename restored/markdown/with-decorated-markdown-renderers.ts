// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Qha` / export `KI` — enable text decoration + custom token renderers.

type Renderer = {
  decorateText?: boolean;
  allowBasicHtml?: boolean;
  renderTokens?: (tokens: unknown) => unknown;
  renderInlineTokens?: (
    tokens: Map<unknown, unknown> | Iterable<[unknown, unknown]>,
    output: unknown[],
    decorateText?: boolean,
  ) => void;
  [key: string]: unknown;
};

let renderTokensImpl:
  | ((tokens: unknown, renderer: Renderer) => unknown)
  | null = null;

export function setDecoratedMarkdownRenderers(renderTokens: (tokens: unknown, renderer: Renderer) => unknown,
): void {
  renderTokensImpl = renderTokens;
}

export function withDecoratedMarkdownRenderers(_tokens: unknown, base: Renderer): Renderer {
  return {
    ...base,
    decorateText: true,
    renderTokens(tokens: unknown) {
      if (renderTokensImpl == null) {
        throw new Error(
          "withDecoratedMarkdownRenderers renderTokens has not been configured",
        );
      }
      return renderTokensImpl(tokens, this);
    },
    renderInlineTokens(tokens, output, decorateText = this.decorateText) {
      const renderer =
        decorateText === this.decorateText ? this : { ...this, decorateText };
      const entries = tokens instanceof Map ? tokens.entries() : tokens;
      if (renderer.allowBasicHtml !== true) {
        for (const [, value] of entries) {
          output.push(value);
        }
      }
    },
  };
}
