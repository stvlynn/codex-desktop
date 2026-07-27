// Restored from ref/webview/assets/toolbar-breadcrumb-Cc87CoZr.js
// Toolbar breadcrumb nav with ancestor buttons and current page label.
// Stage 3 candidate: app-initial UI aliases → semantic modules; drop ESM inits.

import type { MouseEventHandler, ReactNode } from "react";
import { useIntl } from "../i18n/use-intl";
import { AppIconYlt } from "../icons/app-icon-ylt";
import { Button } from "./button";
import { cx } from "./cx";
export type ToolbarBreadcrumbAncestor =
  | {
      id: string;
      content: ReactNode;
    }
  | {
      id: string;
      label: ReactNode;
      onClick?: MouseEventHandler<HTMLButtonElement>;
    };
export type ToolbarBreadcrumbProps = {
  ancestors: ToolbarBreadcrumbAncestor[];
  current?: ReactNode | null;
  textSm?: boolean;
};

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function initToolbarBreadcrumb(): void {}

/**
 * Accessible toolbar breadcrumb (export `t`).
 * Alias-out: Jft→useIntl, wft→cx, Ylt→AppIconYlt, yut→Button;
 * Hft/Tft/Xlt/but side-effect inits dropped (ESM modules need no rolldown init).
 */
export function ToolbarBreadcrumb({
  ancestors,
  current,
  textSm = false,
}: ToolbarBreadcrumbProps) {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "toolbarBreadcrumb.label",
    defaultMessage: "Breadcrumb",
    description: "Accessible label for toolbar breadcrumb navigation",
  });
  const navClassName = cx(
    "flex min-w-0 items-center gap-1 text-token-description-foreground",
    textSm ? "text-sm" : "text-base",
  );
  return (
    <nav aria-label={ariaLabel} className={navClassName}>
      {ancestors.map((ancestor, index) => (
        <span key={ancestor.id} className="contents">
          {index > 0 ? (
            <AppIconYlt aria-hidden className="icon-xs shrink-0" />
          ) : null}
          {"content" in ancestor ? (
            ancestor.content
          ) : (
            <Button
              className={cx("min-w-0", textSm && "text-sm")}
              color="ghost"
              size="toolbar"
              onClick={ancestor.onClick}
            >
              <span className="min-w-0 truncate">{ancestor.label}</span>
            </Button>
          )}
        </span>
      ))}
      {current == null ? null : (
        <>
          {ancestors.length > 0 ? (
            <AppIconYlt aria-hidden className="icon-xs shrink-0" />
          ) : null}
          <span
            aria-current="page"
            className="flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-token-foreground"
          >
            {current}
          </span>
        </>
      )}
    </nav>
  );
}
