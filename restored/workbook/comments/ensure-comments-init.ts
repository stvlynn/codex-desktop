// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comments cluster ensure (legacy CRe).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCommentTargetInit } from "./comment-target-impl";
import { ensureCommentVoInit } from "./comment-vo-impl";
import { ensurePersonVoInit } from "./person-vo-impl";
import { ensurePeopleCollectionInit } from "./people-collection-impl";
import { ensureThreadVoInit } from "./thread-vo-impl";
import { ensureThreadsCollectionInit } from "./threads-collection-impl";
import { ensureCommentsRootInit } from "./comments-root-impl";

export const CRe = esmInit(() => {
  ensureCommentTargetInit();
  ensureCommentVoInit();
  ensureCommentsRootInit();
  ensurePeopleCollectionInit();
  ensurePersonVoInit();
  ensureThreadVoInit();
  ensureThreadsCollectionInit();
});

export function ensureCommentsInit(): void {
  CRe();
}
