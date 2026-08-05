// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/21
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureComposerEsm_S8_Init } from "../../composer/composer-esm-inits";
import { isString as IsString } from "../../utils/is-string";

// Wave5d soft stubs.
const Daisy: any = undefined;
const Gamma: any = undefined;
const IntlProvider: any = undefined;
const Sage: any = undefined;
const _pullRequestMediaT: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;

function Vapor(copper4, delta4) {
  return delta4 == null
    ? copper4.line == null || copper4.path == null || copper4.side == null
      ? null
      : {
          line: copper4.line,
          path: copper4.path,
          side: copper4.side,
          start_line: copper4.startLine ?? undefined,
          start_side: copper4.startSide ?? undefined,
        }
    : delta4.position;
}
export function PullRequestDetailQueryH(kite4: unknown) {
  let {
      account,
      comment,
      commentAttachment,
      metadataAccessory,
      metadataAccessoryFlush,
      pullRequest,
    } = kite4,
    lemon4 = CodexPluginActionType(ensureComposerEsm_S8_Init),
    [marble4, nickel4] = bloom.useState(false),
    onyx4 = comment.path ?? commentAttachment?.position.path ?? null,
    pearl4 = onyx4 == null ? null : acorn.default.posix.basename(onyx4);
  let quartz4 = pearl4,
    river4 = Vapor(comment, commentAttachment);
  let slate4 = river4,
    timber4 =
      commentAttachment == null
        ? undefined
        : {
            ...commentAttachment,
            authorAvatarUrl: comment.authorAvatarUrl,
            authorLogin: comment.authorLogin,
            reviewThreadId: comment.reviewThreadId,
          };
  let umbra4 =
    metadataAccessory ??
    (account != null && pullRequest != null ? (
      <Sage
        {...{
          account,
          comment,
          onDirtyChange: nickel4,
          pullRequest,
        }}
      />
    ) : null);
  let violet4 = metadataAccessoryFlush ?? pullRequest != null,
    willow4 =
      account == null || pullRequest == null || slate4 == null
        ? undefined
        : () => {
            Gamma(lemon4, "code");
            Daisy(
              lemon4,
              {
                account,
                pullRequest,
              },
              slate4,
            );
          };
  let xenon4 = slate4 != null,
    yellow4 = comment.url ?? undefined,
    zinc4 = (amber4, basalt4) => (
      <_pullRequestMediaT
        {...{
          account,
          allowBasicHtml: true,
          className: IntlProvider(
            "text-size-chat break-words text-token-foreground [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-token-border/16 [&_details]:bg-token-bg-primary/40 [&_details]:px-3.5 [&_details]:py-3 [&_p]:leading-6 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-token-foreground",
            !basalt4 && "px-3 py-2.5",
          ),
          cwd: null,
          children: amber4,
        }}
      />
    );
  return (
    <IsString
      {...{
        authorAvatarUrl: comment.authorAvatarUrl,
        authorLogin: comment.authorLogin,
        body: comment.body,
        comment: timber4,
        createdAt: comment.createdAt,
        fileName: quartz4,
        metadataAccessory: umbra4,
        metadataAccessoryFlush: violet4,
        onOpenFile: willow4,
        preventCollapse: marble4,
        position: slate4,
        replies: comment.replies,
        showDiffLocation: xenon4,
        surface: "card",
        url: yellow4,
        renderBody: zinc4,
      }}
    />
  );
}
