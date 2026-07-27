// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `c8i`) / export `VR`.

import type { ReactElement } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { ChevronRight } from "lucide-react";

import { Button } from "../ui/button";
import { OptionalTooltip } from "../ui/optional-tooltip";

export type ArtifactPreviewPageNavProps = {
  currentPage: number;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  totalPages: number;
};

/**
 * Bundle export `VR` / internal `c8i`.
 * Artifact preview previous/next page navigation.
 */
export function ArtifactPreviewPageNav(
  props: ArtifactPreviewPageNavProps,
): ReactElement {
  const { currentPage, onNextPage, onPreviousPage, totalPages } = props;
  const intl = useIntl();
  const previousLabel = intl.formatMessage({
    id: "artifactTab.preview.previousPage",
    defaultMessage: "Previous page",
    description:
      "Tooltip for navigating to the previous page in an artifact preview",
  });
  const nextLabel = intl.formatMessage({
    id: "artifactTab.preview.nextPage",
    defaultMessage: "Next page",
    description:
      "Tooltip for navigating to the next page in an artifact preview",
  });
  const atStart = currentPage <= 1;
  const atEnd = currentPage >= totalPages;

  const previousButton = (
    <Button
      color="ghost"
      size="toolbar"
      uniform
      aria-label={previousLabel}
      className="[@container_(max-width:240px)]:hidden"
      disabled={atStart}
      onClick={onPreviousPage}
    >
      <ChevronRight aria-hidden className="icon-2xs rotate-180" />
    </Button>
  );
  const nextButton = (
    <Button
      color="ghost"
      size="toolbar"
      uniform
      aria-label={nextLabel}
      className="[@container_(max-width:240px)]:hidden"
      disabled={atEnd}
      onClick={onNextPage}
    >
      <ChevronRight aria-hidden className="icon-2xs" />
    </Button>
  );

  return (
    <div className="flex items-center gap-0.5">
      <OptionalTooltip tooltipContent={previousLabel}>
        {previousButton}
      </OptionalTooltip>
      <span className="min-w-12 px-1 text-center text-sm text-token-text-primary tabular-nums [@container_(max-width:300px)]:min-w-9 [@container_(max-width:300px)]:px-0.5">
        <FormattedMessage
          id="artifactTab.preview.pageIndicator"
          defaultMessage="{current}/{total}"
          description="Current page indicator in an artifact preview header"
          values={{ current: currentPage, total: totalPages }}
        />
      </span>
      <OptionalTooltip tooltipContent={nextLabel}>{nextButton}</OptionalTooltip>
    </div>
  );
}

/** @deprecated Prefer ArtifactPreviewPageNav directly */
export function bindArtifactPreviewPageNav(
  _next: (props: ArtifactPreviewPageNavProps) => unknown,
): void {
  void _next;
}
