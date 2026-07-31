// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: DOCX named-style inheritance resolver (legacy workbookIt / Binding517–519 / _workbookSt).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureContextualSpacingSchemeInit,
  hasContextualSpacingTag,
  normalizeStyleToken,
} from "./scheme-css";
import { mergeParagraphStyle, mergeTextStyle } from "./merge-style-props";

export type DocumentStyleDef = {
  id?: string;
  name?: string;
  basedOn?: string;
  textStyle?: Record<string, unknown>;
  paragraphStyle?: Record<string, unknown>;
  spaceBefore?: unknown;
  spaceAfter?: unknown;
  tags?: Array<string | null | undefined>;
};

export type ResolvedDocumentStyle = {
  textStyle?: Record<string, unknown>;
  paragraphStyle?: Record<string, unknown>;
  spaceBefore?: unknown;
  spaceAfter?: unknown;
  contextualSpacing?: boolean;
};

/** Legacy `Jse` — prefer id/name "normal", else first id. */
export function pickDefaultStyleId(
  styles: DocumentStyleDef[],
): string | undefined {
  for (const style of styles) {
    if (style.id?.toLowerCase() === "normal") return style.id;
  }
  for (const style of styles) {
    if (style.name?.toLowerCase() === "normal" && style.id) return style.id;
  }
  for (const style of styles) {
    if (style.id) return style.id;
  }
}

/** Legacy `workbookIt` — resolve style id → cascaded text/paragraph props. */
export class DocumentStyleResolver {
  #defaultId: string | undefined;
  #byId = new Map<string, DocumentStyleDef>();
  #idByName = new Map<string, string>();
  #resolved = new Map<string, ResolvedDocumentStyle | null>();
  #resolving = new Set<string>();

  constructor(styles: DocumentStyleDef[] = []) {
    this.#defaultId = pickDefaultStyleId(styles);
    for (const style of styles) {
      if (style.id) {
        this.#byId.set(style.id, style);
        const idKey = normalizeStyleToken(style.id);
        if (idKey) this.#idByName.set(idKey, style.id);
      }
      const nameKey = normalizeStyleToken(style.name);
      if (nameKey && style.id) this.#idByName.set(nameKey, style.id);
    }
  }

  resolve(styleId?: string | null): ResolvedDocumentStyle | undefined {
    return this.resolveExplicit(styleId ?? this.#defaultId);
  }

  resolveStyleIdByName(name: string | null | undefined): string | undefined {
    const key = normalizeStyleToken(name);
    if (key) return this.#idByName.get(key);
  }

  resolveByName(name: string | null | undefined): ResolvedDocumentStyle | undefined {
    const id = this.resolveStyleIdByName(name);
    if (id) return this.resolveExplicit(id);
  }

  resolveExplicit(styleId: string | null | undefined): ResolvedDocumentStyle | undefined {
    if (!styleId) return;
    if (this.#resolved.has(styleId))
      return this.#resolved.get(styleId) ?? undefined;
    if (this.#resolving.has(styleId)) return;
    const def = this.#byId.get(styleId);
    if (!def) {
      this.#resolved.set(styleId, null);
      return;
    }
    this.#resolving.add(styleId);
    const base = this.resolveExplicit(def.basedOn);
    this.#resolving.delete(styleId);
    const resolved: ResolvedDocumentStyle = {
      textStyle: mergeTextStyle(def.textStyle, base?.textStyle),
      paragraphStyle: mergeParagraphStyle(def.paragraphStyle, base?.paragraphStyle),
      spaceBefore: def.spaceBefore ?? base?.spaceBefore,
      spaceAfter: def.spaceAfter ?? base?.spaceAfter,
      contextualSpacing:
        hasContextualSpacingTag(def.tags) || base?.contextualSpacing === true,
    };
    this.#resolved.set(styleId, resolved);
    return resolved;
  }
}

/** Legacy `_workbookSt` — contextual-spacing constants + DocumentStyleResolver. */
export const ensureDocumentStylesInit = esmInit(() => {
  ensureContextualSpacingSchemeInit();
});
