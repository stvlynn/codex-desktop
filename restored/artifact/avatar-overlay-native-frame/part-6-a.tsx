// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Split companion for avatar-overlay-native-frame part-6 (compact waiting-request sections).

/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const Pine: any = undefined;
/** split companion stub */
const Ridge: any = undefined;

function Lunar(diaphragmPrime) {
  let {
      isExpanded,
      nativeMaterialAttached,
      onRunNotificationAction,
      onSubmitQuestionOption,
      patchSummaryCopy,
      request,
    } = diaphragmPrime,
    elbowPrime = (grommetPrime) => {
      "questionOption" in grommetPrime || onRunNotificationAction(grommetPrime);
    };
  let ferrulePrime = elbowPrime;
  switch (request.kind) {
    case "question": {
      let headerPrime = isExpanded
          ? "break-words whitespace-pre-wrap"
          : "truncate",
        injectorPrime = IntlProvider("min-w-0 pr-[38px]", headerPrime);
      let jumperPrime = (
        <div
          className={injectorPrime}
          data-avatar-overlay-overflow-content="true"
        >
          {request.prompt}
        </div>
      );
      let kerfPrime = request.options.map(moss);
      let louverPrime = (outletPrime) => {
        if ("questionOption" in outletPrime) {
          onSubmitQuestionOption?.(outletPrime.questionOption);
          return;
        }
        onRunNotificationAction(outletPrime);
      };
      let manifoldPrime = (
        <Ridge
          actions={kerfPrime}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={louverPrime}
        />
      );
      let nipPrime;
      return (
        <div data-avatar-overlay-compact-waiting-request="question">
          {jumperPrime}
          {manifoldPrime}
        </div>
      );
    }
    case "patch": {
      let packingPrime = (
        <Pine
          copy={patchSummaryCopy}
          files={request.files}
          isExpanded={isExpanded}
          summary={request.summary}
        />
      );
      let reducerPrime = (
        <Ridge
          actions={request.actions}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
        />
      );
      let strainerPrime;
      return (
        <div data-avatar-overlay-compact-waiting-request="patch">
          {packingPrime}
          {reducerPrime}
        </div>
      );
    }
    case "plan": {
      let teePrime;
      return (
        <North
          isExpanded={isExpanded}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
          request={request}
        />
      );
    }
    case "exec": {
      let unionPrime = <Orbit isExpanded={isExpanded} text={request.summary} />;
      let ventPrime = (
        <Ridge
          actions={request.actions}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
        />
      );
      let wyePrime;
      return (
        <div data-avatar-overlay-compact-waiting-request="exec">
          {unionPrime}
          {ventPrime}
        </div>
      );
    }
    case "network": {
      let zenerPrime = <Orbit isExpanded={isExpanded} text={request.target} />;
      let alphaSecond = (
        <Ridge
          actions={request.actions}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
        />
      );
      let bravoSecond;
      return (
        <div data-avatar-overlay-compact-waiting-request="network">
          {zenerPrime}
          {alphaSecond}
        </div>
      );
    }
    case "permission": {
      let copperSecond = (
        <Orbit isExpanded={isExpanded} text={request.target} />
      );
      let deltaSecond = (
        <Ridge
          actions={request.actions}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
        />
      );
      let echoSecond;
      return (
        <div data-avatar-overlay-compact-waiting-request="permission">
          {copperSecond}
          {deltaSecond}
        </div>
      );
    }
    case "tool": {
      let falconSecond = request.summary ?? request.target,
        gammaSecond = <Orbit isExpanded={isExpanded} text={falconSecond} />;
      let harborSecond = (
        <Ridge
          actions={request.actions}
          nativeMaterialAttached={nativeMaterialAttached}
          onRunNotificationAction={ferrulePrime}
        />
      );
      let indigoSecond;
      return (
        <div data-avatar-overlay-compact-waiting-request="tool">
          {gammaSecond}
          {harborSecond}
        </div>
      );
    }
  }
}
function moss(jadeSecond, kiteSecond) {
  return {
    label: jadeSecond.label,
    tone: kiteSecond === 0 ? "primary" : "secondary",
    questionOption: jadeSecond,
  };
}
function North(lemonSecond) {
  let { isExpanded, nativeMaterialAttached, onRunNotificationAction, request } =
      lemonSecond,
    marbleSecond = <Orbit isExpanded={isExpanded} text={request.summary} />;
  let nickelSecond = (
    <Ridge
      actions={request.actions}
      nativeMaterialAttached={nativeMaterialAttached}
      onRunNotificationAction={onRunNotificationAction}
    />
  );
  return (
    <div data-avatar-overlay-compact-waiting-request={request.kind}>
      {marbleSecond}
      {nickelSecond}
    </div>
  );
}
function Orbit(onyxSecond) {
  let { isExpanded, text } = onyxSecond,
    pearlSecond = isExpanded
      ? "break-words whitespace-pre-wrap"
      : "truncate whitespace-nowrap",
    quartzSecond = IntlProvider("min-w-0 pr-[38px]", pearlSecond);
  return (
    <div
      className={quartzSecond}
      data-avatar-overlay-compact-waiting-summary-text="true"
      data-avatar-overlay-overflow-content="true"
    >
      {text}
    </div>
  );
}

export { Lunar };
