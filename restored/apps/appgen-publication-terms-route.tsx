// Restored from ref/webview/assets/appgen-publication-terms-route-_6Q15k8-.js
// Route wrapper that appends the publication-terms banner beside children.
// Stage 3: Wr/Gr→publication-terms-banner; Ivt/jvt dropped.

import type { ReactElement, ReactNode } from "react";
import {
  ensurePublicationTermsBannerInit,
  PublicationTermsBanner,
} from "../apps/publication-terms-banner";

ensurePublicationTermsBannerInit();

export type AppgenPublicationTermsRouteProps = {
  children?: ReactNode;
};

/** Bundle export `AppgenPublicationTermsRoute`. */
export function AppgenPublicationTermsRoute(
  props: AppgenPublicationTermsRouteProps,
): ReactElement {
  const { children } = props;
  return (
    <>
      {children}
      <PublicationTermsBanner showWhenUnseen />
    </>
  );
}
