// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MHn` / export `F5` — react-router `Link` (displayName=Link).
// Open boundary facade: stock react-router not yet declared in restored/package.json.
// Bind a real Link via `bindReactRouterLink` when the host wires routing.

import {
  createElement,
  forwardRef,
  type AnchorHTMLAttributes,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from "react";

export type ReactRouterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string | { pathname?: string; search?: string; hash?: string };
  reloadDocument?: boolean;
  replace?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: "route" | "path";
  viewTransition?: boolean;
  children?: ReactNode;
};

export type ReactRouterLinkComponent = ForwardRefExoticComponent<
  ReactRouterLinkProps & RefAttributes<HTMLAnchorElement>
>;

let LinkImpl: ReactRouterLinkComponent | null = null;

export function bindReactRouterLink(impl: ReactRouterLinkComponent): void {
  LinkImpl = impl;
}

function hrefFromTo(to: ReactRouterLinkProps["to"]): string {
  if (to == null) return "#";
  if (typeof to === "string") return to;
  return `${to.pathname ?? ""}${to.search ?? ""}${to.hash ?? ""}` || "#";
}

/** Bundle `MHn` / export `F5`. */
export const Link: ReactRouterLinkComponent = forwardRef(function Link(
  { to, children, onClick, ...rest }: ReactRouterLinkProps,
  ref,
) {
  if (LinkImpl != null) {
    return createElement(LinkImpl, { to, onClick, ref, ...rest }, children);
  }
  return createElement(
    "a",
    { ...rest, href: hrefFromTo(to), onClick, ref },
    children,
  );
});
Link.displayName = "Link";
