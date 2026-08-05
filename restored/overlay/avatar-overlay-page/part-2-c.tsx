// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { useIntl } from "../../i18n/use-intl";
import { BulletSeparator } from "../../ui/bullet-separator";
import { AnnotationFocusMode } from "../annotation-focus-mode";

import { IntlProvider, ReadLoginRouteQuerySnapshot, violet } from "./part-2-a";
import { falcon, gamma } from "./part-2-d";

export function AvatarOverlayPageHelper13(oak: any) {
  let {
      isExpanded,
      localConversationId,
      onRunNotificationAction,
      onSubmitQuestionOption,
      request,
    } = oak,
    petal = (rain) => {
      "questionOption" in rain || onRunNotificationAction(rain);
    };
  let quiet = petal;
  switch (request.kind) {
    case "question": {
      let seed = isExpanded ? "break-words whitespace-pre-wrap" : "truncate",
        trail = IntlProvider("min-w-0", seed);
      let urn = <div className={trail}>{request.prompt}</div>;
      let vine = request.options.map(falcon);
      let wind = (birch) => {
        if ("questionOption" in birch) {
          onSubmitQuestionOption?.(birch.questionOption);
          return;
        }
        onRunNotificationAction(birch);
      };
      let yarrow = (
        <AvatarOverlayPageHelper19
          actions={vine}
          onRunNotificationAction={wind}
        />
      );
      let azure;
      return (
        <div data-avatar-overlay-compact-waiting-request="question">
          {urn}
          {yarrow}
        </div>
      );
    }
    case "patch": {
      let canyon = (
        <AvatarOverlayPageHelper17
          additions={request.additions}
          deletions={request.deletions}
          fileCount={request.fileCount}
          files={request.files}
          isExpanded={isExpanded}
          summary={request.summary}
        />
      );
      let dew = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let ever;
      return (
        <div data-avatar-overlay-compact-waiting-request="patch">
          {canyon}
          {dew}
        </div>
      );
    }
    case "plan": {
      let field;
      return (
        <AvatarOverlayPageHelper15
          isExpanded={isExpanded}
          localConversationId={localConversationId}
          onRunNotificationAction={quiet}
          request={request}
        />
      );
    }
    case "exec": {
      let grain = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.summary}
        />
      );
      let haven = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let ink;
      return (
        <div data-avatar-overlay-compact-waiting-request="exec">
          {grain}
          {haven}
        </div>
      );
    }
    case "network": {
      let jadeite = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.target}
        />
      );
      let kernel = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let leaf;
      return (
        <div data-avatar-overlay-compact-waiting-request="network">
          {jadeite}
          {kernel}
        </div>
      );
    }
    case "permission": {
      let maple = (
        <AvatarOverlayPageHelper16
          isExpanded={isExpanded}
          text={request.target}
        />
      );
      let nimbus = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let opal;
      return (
        <div data-avatar-overlay-compact-waiting-request="permission">
          {maple}
          {nimbus}
        </div>
      );
    }
    case "tool": {
      let plume = request.summary ?? request.target,
        quillow = (
          <AvatarOverlayPageHelper16 isExpanded={isExpanded} text={plume} />
        );
      let root = (
        <AvatarOverlayPageHelper19
          actions={request.actions}
          onRunNotificationAction={quiet}
        />
      );
      let silk;
      return (
        <div data-avatar-overlay-compact-waiting-request="tool">
          {quillow}
          {root}
        </div>
      );
    }
  }
}

function AvatarOverlayPageHelper15(vista) {
  let { isExpanded, localConversationId, onRunNotificationAction, request } =
      vista,
    { getModeForSelection } = AnnotationFocusMode(localConversationId),
    Wisp,
    yonder,
    zenith,
    anvil;
  {
    let crag = getModeForSelection("default");
    zenith = request.kind;
    anvil = (
      <AvatarOverlayPageHelper16
        isExpanded={isExpanded}
        text={request.summary}
      />
    );
    Wisp = AvatarOverlayPageHelper19;
    yonder = request.actions.map((item) =>
      item.intent === "plan-start"
        ? {
            ...item,
            planStartCollaborationMode: crag,
          }
        : item,
    );
  }
  let beacon = (
    <Wisp actions={yonder} onRunNotificationAction={onRunNotificationAction} />
  );
  return (
    <div data-avatar-overlay-compact-waiting-request={zenith}>
      {anvil}
      {beacon}
    </div>
  );
}

function AvatarOverlayPageHelper16(dome) {
  let { isExpanded, text } = dome,
    eddy = isExpanded
      ? "break-words whitespace-pre-wrap"
      : "truncate whitespace-nowrap",
    fjord = IntlProvider("min-w-0 text-token-text-secondary", eddy);
  return (
    <div
      className={fjord}
      data-avatar-overlay-compact-waiting-summary-text="true"
    >
      {text}
    </div>
  );
}

function AvatarOverlayPageHelper17(glen) {
  let { additions, deletions, fileCount, files, isExpanded, summary } = glen,
    hearth = useIntl(),
    inlet = hearth.formatMessage(violet.compactPatchFileCount, {
      count: fileCount,
    });
  let jetty = inlet,
    knob =
      additions > 0
        ? hearth.formatMessage(violet.compactPatchAdditions, {
            count: additions,
          })
        : null;
  let ledge = knob,
    mire =
      deletions > 0
        ? hearth.formatMessage(violet.compactPatchDeletions, {
            count: deletions,
          })
        : null;
  let nook = mire;
  if (!isExpanded) {
    let updraft = <span>{jetty}</span>;
    let verge =
      ledge == null ? null : (
        <span className="ml-1.5 text-token-charts-green">{ledge}</span>
      );
    let weir =
      nook == null ? null : (
        <span className="ml-1.5 text-token-error-foreground">{nook}</span>
      );
    let yard = <BulletSeparator className="mx-1.5 text-token-text-tertiary" />;
    let anchor = <span>{summary}</span>;
    let bolt;
    return (
      <div
        className="min-w-0 truncate whitespace-nowrap text-token-text-secondary"
        data-avatar-overlay-compact-waiting-summary-text="true"
      >
        {updraft}
        {verge}
        {weir}
        {yard}
        {anchor}
      </div>
    );
  }
  let oxbow = (
    <span className="text-[11px] leading-4 text-token-text-secondary">
      {jetty}
    </span>
  );
  let pond =
    ledge == null ? null : (
      <span className="text-[11px] leading-4 text-token-charts-green">
        {ledge}
      </span>
    );
  let quarry =
    nook == null ? null : (
      <span className="text-[11px] leading-4 text-token-error-foreground">
        {nook}
      </span>
    );
  let rapids = (
    <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      {oxbow}
      {pond}
      {quarry}
    </div>
  );
  let spur = files.map(gamma);
  let tor = (
    <div className="mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary">
      {spur}
    </div>
  );
  return (
    <div data-avatar-overlay-compact-waiting-summary-text="true">
      {rapids}
      {tor}
    </div>
  );
}

function AvatarOverlayPageHelper19(disc) {
  let { actions, onRunNotificationAction } = disc,
    edge;
  {
    let forge;
    forge = (gear) => (
      <ReadLoginRouteQuerySnapshot
        key={gear.ariaLabel ?? gear.label}
        className="max-w-full min-w-0 enabled:active:hover:opacity-80"
        color={indigo(gear.tone)}
        size="toolbar"
        aria-label={gear.ariaLabel ?? gear.label}
        title={gear.ariaLabel ?? gear.label}
        onClick={(event) => {
          event.stopPropagation();
          onRunNotificationAction(gear);
        }}
        onPointerDown={harbor}
      >
        <span className="truncate">{gear.label}</span>
      </ReadLoginRouteQuerySnapshot>
    );
    edge = actions.map(forge);
  }
  return (
    <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px">
      {edge}
    </div>
  );
}

function harbor(event) {
  event.stopPropagation();
}

function indigo(hinge) {
  switch (hinge) {
    case "primary":
      return "secondary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}
