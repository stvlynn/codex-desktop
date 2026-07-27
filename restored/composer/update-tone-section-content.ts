// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `b3c` / export `Pl`.

export type ToneSection = {
  id: string;
  content?: string;
  [key: string]: unknown;
};

export function updateToneSectionContent(args: {
  nextContent: string;
  toneSectionId: string | null | undefined;
  toneSections: ToneSection[] | null | undefined;
}): {
  activeToneSectionId: string | undefined;
  content: string;
  toneSections: ToneSection[] | null | undefined;
} {
  const { nextContent, toneSectionId, toneSections } = args;
  if (
    toneSections == null ||
    toneSections.length === 0 ||
    toneSectionId == null ||
    !toneSections.some((section) => section.id === toneSectionId)
  ) {
    return {
      activeToneSectionId: undefined,
      content: nextContent,
      toneSections,
    };
  }
  const nextSections = toneSections.map((section) =>
    section.id === toneSectionId
      ? { ...section, content: nextContent }
      : section,
  );
  return {
    activeToneSectionId: toneSectionId,
    content: nextSections[0]?.content ?? nextContent,
    toneSections: nextSections,
  };
}
