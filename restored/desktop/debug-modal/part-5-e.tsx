// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/17
/* split-lane-import-depth:1 */
// AST split 5/6

import { umbra1 } from "./part-5-a";
import { Chatgpt2, ForkConversationWithGitOrigins } from "./part-5-b";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";

function Gamma1(glide10) {
  let {
    download,
    onCancel,
    onOpen,
    onPause,
    onRemove,
    onResume,
    onShowInFolder,
  } = glide10;
  if (Nickel1(download.status)) {
    let tide10 = !download.canPause,
      unity10 = () => {
        onPause(download);
      };
    let vale10 = (
      <ForkConversationWithGitOrigins
        {...{
          className: "icon-2xs",
        }}
      />
    );
    let wave10 = (
      <button
        type="button"
        className={umbra1}
        disabled={tide10}
        onClick={unity10}
      >
        {vale10}
        {"Pause"}
      </button>
    );
    let apex10 = !download.canCancel,
      brook10 = () => {
        onCancel(download);
      };
    let cliff10 = (
      <Chatgpt2
        {...{
          className: "icon-2xs",
        }}
      />
    );
    let dusk10 = (
      <button
        type="button"
        className={umbra1}
        disabled={apex10}
        onClick={brook10}
      >
        {cliff10}
        {"Cancel"}
      </button>
    );
    let elm10;
    return (
      <div className="flex shrink-0 items-center gap-1">
        {wave10}
        {dusk10}
      </div>
    );
  }
  if (download.status === "paused") {
    let fern10 = !download.canResume,
      grove10 = () => {
        onResume(download);
      };
    let hill10 = (
      <AppIconDk
        {...{
          className: "icon-2xs",
        }}
      />
    );
    let isle10 = (
      <button
        type="button"
        className={umbra1}
        disabled={fern10}
        onClick={grove10}
      >
        {hill10}
        {"Resume"}
      </button>
    );
    let juniper10 = !download.canCancel,
      lagoon10 = () => {
        onCancel(download);
      };
    let meadow10 = (
      <Chatgpt2
        {...{
          className: "icon-2xs",
        }}
      />
    );
    let nest10 = (
      <button
        type="button"
        className={umbra1}
        disabled={juniper10}
        onClick={lagoon10}
      >
        {meadow10}
        {"Cancel"}
      </button>
    );
    let oak10;
    return (
      <div className="flex shrink-0 items-center gap-1">
        {isle10}
        {nest10}
      </div>
    );
  }
  let honey10 = !download.fileExists,
    iris10 = () => {
      onOpen(download);
    };
  let jewel10 = (
    <button
      type="button"
      className={umbra1}
      disabled={honey10}
      onClick={iris10}
    >
      {"Open"}
    </button>
  );
  let knoll10 = (
    <button
      type="button"
      className={umbra1}
      onClick={() => {
        onShowInFolder(download);
      }}
    >
      {"Finder"}
    </button>
  );
  let lunar10 = `Download actions for ${download.filename}`,
    moss10 = (
      <AppIconQI
        {...{
          className: "icon-2xs",
        }}
      />
    );
  let north10 = (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center rounded border border-token-border p-1 text-token-foreground hover:bg-token-foreground/5"
      aria-label={lunar10}
    >
      {moss10}
    </button>
  );
  let orbit10 = (
    <DropdownMenu.Item
      {...{
        onSelect: () => {
          navigator.clipboard?.writeText(download.path).catch(Harbor1);
        },
        children: "Copy Path",
      }}
    />
  );
  let pine10 = <DropdownMenu.Separator {...{}} />;
  let quest10 = (
    <DropdownMenu.Item
      {...{
        onSelect: () => {
          onRemove(download);
        },
        children: "Remove",
      }}
    />
  );
  let ridge10 = (
    <div className="flex min-w-[180px] flex-col gap-0.5">
      {orbit10}
      {pine10}
      {quest10}
    </div>
  );
  let storm10 = (
    <DropdownMenuPopover
      {...{
        align: "end",
        triggerButton: north10,
        children: ridge10,
      }}
    />
  );
  return (
    <div className="flex shrink-0 items-center gap-1">
      {jewel10}
      {knoll10}
      {storm10}
    </div>
  );
}

function Nickel1(azure10) {
  return azure10 === "started" || azure10 === "in_progress";
}

function Harbor1() {}

function Indigo1(petal10) {
  let { message } = petal10;
  return (
    <div className="py-3 text-xs text-token-description-foreground">
      {message}
    </div>
  );
}
