// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `I5o` / export `tT` — stamp surfacePlacement onto a composer child.

import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

export type ComposerSuggestionPlacement =
  | { kind: "thread" }
  | {
      kind: "home";
      chrome?: {
        suggestionPlacement?: unknown;
        [key: string]: unknown;
      } | null;
      [key: string]: unknown;
    }
  | Record<string, unknown>;

export type SurfacePlacement =
  | {
      chromeMode: "standalone";
      kind: "home";
      suggestionPlacement: "top";
    }
  | {
      chrome: NonNullable<
        Extract<ComposerSuggestionPlacement, { kind: "home" }>["chrome"]
      >;
      chromeMode: "hosted";
      kind: "home";
      suggestionPlacement: unknown;
    }
  | ComposerSuggestionPlacement;

function resolveSurfacePlacement(
  placement: ComposerSuggestionPlacement = { kind: "thread" },
): SurfacePlacement {
  if (
    placement != null &&
    typeof placement === "object" &&
    "kind" in placement &&
    placement.kind === "home"
  ) {
    if (placement.chrome == null) {
      return {
        chromeMode: "standalone",
        kind: "home",
        suggestionPlacement: "top",
      };
    }
    return {
      chrome: placement.chrome,
      chromeMode: "hosted",
      kind: "home",
      suggestionPlacement: placement.chrome.suggestionPlacement,
    };
  }
  return placement;
}

/** Bundle `I5o` / export `tT`. */
export function withComposerSuggestionPlacement({
  children,
  placement = { kind: "thread" },
}: {
  children: ReactElement<{ surfacePlacement?: SurfacePlacement }>;
  placement?: ComposerSuggestionPlacement;
}): ReactNode {
  if (!isValidElement(children)) return children;
  return cloneElement(children, {
    surfacePlacement: resolveSurfacePlacement(placement),
  });
}
