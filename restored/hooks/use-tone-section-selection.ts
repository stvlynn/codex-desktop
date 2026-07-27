// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `x2c` / export `Vl` — resolve active tone section while streaming/persisting.

import { useEffect, useRef, useState } from "react";

type Section = { id: string; [key: string]: unknown };
type Selection = {
  section: Section;
  shouldPersist?: boolean;
  token?: string;
  [key: string]: unknown;
} | null;

let readStoredId: (metadata: unknown) => string | null | undefined = () => null;
let pickDefault: (
  sections: Section[],
  preferredId?: string | null,
) => Section | null | undefined = () => null;
let resolveSelection: (
  current: Selection,
  sections: Section[],
  storedId: string | null | undefined,
  isStreaming: boolean,
  isPersistenceReady: boolean,
) => Selection = () => null;
let visibleSections: (
  sections: Section[],
  streamingSelection: Selection,
) => Section[] = (sections) => sections;

export function setToneSectionSelectionDeps(args: {
  readStoredId: typeof readStoredId;
  pickDefault: typeof pickDefault;
  resolveSelection: typeof resolveSelection;
  visibleSections?: typeof visibleSections;
}): void {
  readStoredId = args.readStoredId;
  pickDefault = args.pickDefault;
  resolveSelection = args.resolveSelection;
  if (args.visibleSections) visibleSections = args.visibleSections;
}

export function useToneSectionSelection(args: {
  isPersistenceReady: boolean;
  isStreaming: boolean;
  metadata?: unknown;
  onPersistSelection: (sectionId: string) => void;
  storedActiveToneSectionId?: string | null;
  toneSections: Section[];
}): {
  activeSectionId: string | undefined;
  sections: Section[];
  selection: Selection;
} {
  const storedId =
    args.storedActiveToneSectionId ?? readStoredId(args.metadata);
  const [current, setCurrent] = useState<Selection>(null);
  const next = resolveSelection(
    current,
    args.toneSections,
    storedId,
    args.isStreaming,
    args.isPersistenceReady,
  );
  if (next !== current) setCurrent(next);
  const persistToken = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (
      args.isStreaming ||
      !args.isPersistenceReady ||
      next?.shouldPersist !== true ||
      next.section.id === storedId ||
      persistToken.current === next.token
    ) {
      return;
    }
    persistToken.current = next.token;
    args.onPersistSelection(next.section.id);
  }, [
    args.isStreaming,
    args.isPersistenceReady,
    args.onPersistSelection,
    next,
    storedId,
  ]);
  const sections = visibleSections(args.toneSections, next);
  const fallback = pickDefault(args.toneSections, storedId);
  return {
    activeSectionId: next?.section.id ?? fallback?.id,
    sections,
    selection: next,
  };
}
