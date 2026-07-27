// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BIn` / export `l7` — patch one elicitation option's content.

const OPTIONS_KEY = "options";

type OptionLike = { id: string; content?: unknown; [key: string]: unknown };

type ReadOptionsFn = (state: unknown) => OptionLike[];

let readOptions: ReadOptionsFn | null = null;

/** Wire options reader (`zIn` in the bundle). */
export function setElicitationOptionsReader(fn: ReadOptionsFn): void {
  readOptions = fn;
}

export function updateElicitationOptionContent(
  state: unknown,
  option: { id: string; index: number },
  content: unknown,
): Record<string, OptionLike[]> | undefined {
  const options = readOptions?.(state) ?? [];
  const index =
    options[option.index]?.id === option.id
      ? option.index
      : options.findIndex((entry) => entry.id === option.id);
  if (index < 0) return undefined;
  return {
    [OPTIONS_KEY]: options.map((entry, i) =>
      i === index ? { ...entry, content } : entry,
    ),
  };
}
