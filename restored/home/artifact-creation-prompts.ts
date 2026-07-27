// Restored from ref/webview/assets/artifact-creation-prompts-CWNgl5xb.js
// Home suggestion prompts for creating document/presentation/site/spreadsheet.
// Stage 3: Cst→toMarkdownLink; K5→buildPluginUri; Vft→identity; ESM inits dropped.

import type { IntlShape } from "react-intl";
import { buildPluginUri } from "../composer/app-plugin-uri";
import { toMarkdownLink } from "../markdown/to-markdown-link";
import { identity } from "../utils/identity";

export type ArtifactCreationKind =
  | "document"
  | "presentation"
  | "site"
  | "spreadsheet";

export type ArtifactCreationPromptEntry = {
  artifact: { label: string; pluginId: string };
  prompt: {
    id: string;
    defaultMessage: string;
    description: string;
  };
};

const artifactCreationPromptMessages = identity({
  document: {
    id: "home.newChatPageSuggestions.createDocument.prompt.v5",
    defaultMessage:
      "Create a new document with {artifact}. Start by asking me what it should be about.",
    description: "Composer prefill for creating a document",
  },
  presentation: {
    id: "home.newChatPageSuggestions.createPresentation.prompt.v5",
    defaultMessage:
      "Create a new presentation with {artifact}. Start by asking me what it should be about.",
    description: "Composer prefill for creating a presentation",
  },
  site: {
    id: "home.newChatPageSuggestions.createSite.prompt.v5",
    defaultMessage:
      "Create a new site with {artifact}. Start by asking me what it should be about.",
    description: "Composer prefill for creating a site",
  },
  spreadsheet: {
    id: "home.newChatPageSuggestions.createSpreadsheet.prompt.v5",
    defaultMessage:
      "Create a new spreadsheet with {artifact}. Start by asking me what it should be about.",
    description: "Composer prefill for creating a spreadsheet",
  },
});

/** Bundle export `t` — prompt catalog keyed by artifact kind. */
export const artifactCreationPrompts: Record<
  ArtifactCreationKind,
  ArtifactCreationPromptEntry
> = {
  document: {
    artifact: {
      label: "Documents",
      pluginId: "documents@openai-primary-runtime",
    },
    prompt: artifactCreationPromptMessages.document,
  },
  presentation: {
    artifact: {
      label: "Presentations",
      pluginId: "presentations@openai-primary-runtime",
    },
    prompt: artifactCreationPromptMessages.presentation,
  },
  site: {
    artifact: {
      label: "Sites",
      pluginId: "sites@openai-bundled",
    },
    prompt: artifactCreationPromptMessages.site,
  },
  spreadsheet: {
    artifact: {
      label: "Spreadsheets",
      pluginId: "spreadsheets@openai-primary-runtime",
    },
    prompt: artifactCreationPromptMessages.spreadsheet,
  },
};

/**
 * Bundle export `n` — format a creation prompt with an @-mention markdown link.
 */
export function formatArtifactCreationPrompt(
  intl: Pick<IntlShape, "formatMessage">,
  kind: ArtifactCreationKind,
): string {
  const { artifact, prompt } = artifactCreationPrompts[kind];
  return intl.formatMessage(prompt, {
    artifact: toMarkdownLink(
      `@${artifact.label}`,
      buildPluginUri(artifact.pluginId),
    ),
  });
}

/** Bundle export `r` — Rolldown ESM init retained as no-op. */
export function ensureArtifactCreationPromptsInit(): void {}
