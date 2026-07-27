// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Inline react-intl messages from terminal crash recovery UI (`kRi` / export `_U` init thunk).

import { defineMessages } from "react-intl";

export const terminalErrorMessages = defineMessages({
  title: {
    id: "terminal.error.title",
    defaultMessage: "The terminal encountered an error",
    description:
      "Title shown in the terminal panel when the embedded terminal crashes",
  },
  description: {
    id: "terminal.error.description",
    defaultMessage: "Try reloading the terminal to continue",
    description:
      "Description shown in the terminal panel when the embedded terminal crashes",
  },
  retry: {
    id: "terminal.error.retry",
    defaultMessage: "Reload",
    description:
      "Button label that reloads rendering the terminal after a crash",
  },
});
