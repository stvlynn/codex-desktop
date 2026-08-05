// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `d_` / export `_st` — prepend context / attachment markers to prompt.
// Context builders left injectable.

type NormalizePrompt = (prompt: string) => void;
type BuildContextPrefix = (input: Record<string, unknown>) => string;
type HasGeneratedPastedPaths = (
  fileAttachments: unknown,
  generatedPastedTextAttachmentPaths: unknown,
) => unknown;

let normalizePrompt: NormalizePrompt | null = null;
let buildContextPrefix: BuildContextPrefix | null = null;
let hasGeneratedPastedPaths: HasGeneratedPastedPaths | null = null;
let attachmentMarker = "";
let sectionMarker = "";

/** Wire prompt normalizer (`Rvt` in the bundle). */
export function setComposerPromptNormalizer(fn: NormalizePrompt): void {
  normalizePrompt = fn;
}

/** Wire context prefix builder (`xyt` in the bundle). */
export function setComposerContextPrefixBuilder(fn: BuildContextPrefix): void {
  buildContextPrefix = fn;
}

/** Wire pasted-path detector (`vvt` in the bundle). */
export function setGeneratedPastedPathsChecker(
  fn: HasGeneratedPastedPaths,
): void {
  hasGeneratedPastedPaths = fn;
}

/** Wire markers (`cbt` / `m_` in the bundle). */
export function setComposerPromptMarkers(args: {
  attachmentMarker?: string;
  sectionMarker?: string;
}): void {
  if (args.attachmentMarker != null) attachmentMarker = args.attachmentMarker;
  if (args.sectionMarker != null) sectionMarker = args.sectionMarker;
}

export function buildComposerPromptWithContext(input: {
  prompt: string;
  pastedTextAttachments?: unknown[] | null;
  fileAttachments?: unknown;
  generatedPastedTextAttachmentPaths?: unknown;
  [key: string]: unknown;
}): string {
  normalizePrompt?.(input.prompt);
  const hasAttachmentContext =
    input.prompt.trim().length === 0 &&
    (!!input.pastedTextAttachments?.length ||
      hasGeneratedPastedPaths?.(
        input.fileAttachments,
        input.generatedPastedTextAttachmentPaths,
      ) != null);
  const prefix = buildContextPrefix?.(input) ?? "";
  const withAttachment = `${prefix}${
    hasAttachmentContext ? `\n${attachmentMarker}\n` : ""
  }`;
  return `${
    withAttachment ? `${withAttachment}\n${sectionMarker}\n` : ""
  }${input.prompt}\n`;
}
