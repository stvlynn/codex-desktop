// Restored from ref/webview/assets/codex-micro-analog-action-title-MT-ASTsf.js
// Analog stick action title for command/skill slots.
// Stage 3: lr/ur→codex-command-title; OJ→getPluginDisplayName; AJ dropped.

import {
  getCommandTitle,
  ensureCodexCommandTitleInit,
  type IntlLike,
} from "./codex-command-title";
import { getPluginDisplayName } from "../composer/get-plugin-display-name";
import {
  findCodexMicroWebviewCommand,
  ensureCodexMicroWebviewCommandsInit,
} from "./codex-micro-webview-commands";
ensureCodexMicroWebviewCommandsInit();
ensureCodexCommandTitleInit();
export type AnalogAction =
  | {
      type: "command";
      commandId: string;
    }
  | {
      type: "skill";
      skillName: string;
      skillPath: string;
    };
export type SkillLike = {
  name: string;
  path: string;
  interface?: {
    displayName?: string | null;
  } | null;
};

/**
 * Bundle export `t` — localized title for an analog action binding.
 */
export function getAnalogActionTitle(
  action: AnalogAction,
  skills: SkillLike[],
  intl: IntlLike,
): string {
  switch (action.type) {
    case "command": {
      const command = findCodexMicroWebviewCommand(action.commandId);
      return command == null
        ? action.commandId
        : getCommandTitle(command, intl);
    }
    case "skill": {
      const skill = skills.find(
        (item) =>
          item.name === action.skillName && item.path === action.skillPath,
      );
      return `$${skill == null ? action.skillName : getPluginDisplayName(skill)}`;
    }
  }
}

/** Bundle export `n` — Rolldown ESM init. */
export function ensureCodexMicroAnalogActionTitleInit(): void {
  ensureCodexMicroWebviewCommandsInit();
  ensureCodexCommandTitleInit();
}
