// Restored from ref/webview/assets/_virtual_settings-search-documents-BNScSdXi.js
// Settings search messages for section "usage".

export type SettingsSearchMessage = {
  id: string;
  defaultMessage?: string;
};
import { usageMessagesPart2 } from "./usage-messages-part2";

export const usageMessages: SettingsSearchMessage[] = [
  {
    defaultMessage:
      "{years, plural, one {annual limit} other {{years} year limit}}",
    id: "composer.mode.rateLimit.annualDynamicSentence",
  },
  {
    defaultMessage: "{years, plural, one {Annual} other {{years} Years}}",
    id: "composer.mode.rateLimit.annualDynamicTitle",
  },
  {
    defaultMessage: "Every {days}d",
    id: "composer.mode.rateLimit.cadence.day",
  },
  {
    defaultMessage: "Every {hours}hr",
    id: "composer.mode.rateLimit.cadence.hour",
  },
  {
    defaultMessage: "Every {minutes}m",
    id: "composer.mode.rateLimit.cadence.minute",
  },
  {
    defaultMessage:
      "{months, plural, one {Every month} other {Every {months} months}}",
    id: "composer.mode.rateLimit.cadence.month",
  },
  {
    defaultMessage:
      "{weeks, plural, one {Every week} other {Every {weeks} weeks}}",
    id: "composer.mode.rateLimit.cadence.week",
  },
  {
    defaultMessage:
      "{years, plural, one {Every year} other {Every {years} years}}",
    id: "composer.mode.rateLimit.cadence.year",
  },
  {
    defaultMessage: "{days}d",
    id: "composer.mode.rateLimit.day",
  },
  {
    defaultMessage: "Usage remaining",
    id: "composer.mode.rateLimit.heading",
  },
  {
    defaultMessage: "{hours}h",
    id: "composer.mode.rateLimit.hour",
  },
  {
    defaultMessage: "{minutes}m",
    id: "composer.mode.rateLimit.minute",
  },
  {
    defaultMessage:
      "{months, plural, one {monthly limit} other {{months} month limit}}",
    id: "composer.mode.rateLimit.monthlyDynamicSentence",
  },
  {
    defaultMessage: "{months, plural, one {Monthly} other {{months} Months}}",
    id: "composer.mode.rateLimit.monthlyDynamicTitle",
  },
  {
    defaultMessage:
      "{weeks, plural, one {weekly limit} other {{weeks} week limit}}",
    id: "composer.mode.rateLimit.weeklyDynamicSentence",
  },
  {
    defaultMessage: "{weeks, plural, one {Weekly} other {{weeks} Weeks}}",
    id: "composer.mode.rateLimit.weeklyDynamicTitle",
  },
  {
    defaultMessage: "Checking subscription…",
    id: "settings.usage.access.loading",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.usage.autoTopUp.cancel",
  },
  {
    defaultMessage:
      "OpenAI will charge your payment method automatically when you reach your minimum balance.",
    id: "settings.usage.autoTopUp.dialog.description",
  },
  {
    defaultMessage: "Auto-reload credits",
    id: "settings.usage.autoTopUp.dialog.title",
  },
  {
    defaultMessage: "Turn off",
    id: "settings.usage.autoTopUp.disable",
  },
  {
    defaultMessage: "Failed to disable auto reload",
    id: "settings.usage.autoTopUp.disable.error",
  },
  {
    defaultMessage: "Disabled auto reload",
    id: "settings.usage.autoTopUp.disable.success",
  },
  {
    defaultMessage: "Turn on",
    id: "settings.usage.autoTopUp.enable",
  },
  {
    defaultMessage: "Failed to enable auto reload",
    id: "settings.usage.autoTopUp.enable.error",
  },
  {
    defaultMessage: "Enabled auto reload",
    id: "settings.usage.autoTopUp.enable.success",
  },
  {
    defaultMessage:
      "The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
    id: "settings.usage.autoTopUp.immediateTopUpFailure.amount",
  },
  {
    defaultMessage:
      "The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
    id: "settings.usage.autoTopUp.immediateTopUpFailure.generic",
  },
  {
    defaultMessage:
      "Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.",
    id: "settings.usage.autoTopUp.immediateTopUpNotice.enable",
  },
  {
    defaultMessage:
      "Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.",
    id: "settings.usage.autoTopUp.immediateTopUpNotice.update",
  },
  {
    defaultMessage:
      "Unable to open payment settings right now. Please try again.",
    id: "settings.usage.autoTopUp.managePayment.error",
  },
  {
    defaultMessage: "Save",
    id: "settings.usage.autoTopUp.save",
  },
  {
    defaultMessage: "Failed to save auto reload settings",
    id: "settings.usage.autoTopUp.save.error",
  },
  {
    defaultMessage: "Auto-reload target balance",
    id: "settings.usage.autoTopUp.target.ariaLabel",
  },
  {
    defaultMessage:
      "Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>",
    id: "settings.usage.autoTopUp.target.equivalent",
  },
  {
    defaultMessage: "Loading price",
    id: "settings.usage.autoTopUp.target.equivalent.loading",
  },
  {
    defaultMessage:
      "Set the target balance to at least 125 credits above the minimum balance.",
    id: "settings.usage.autoTopUp.target.error.minimumDifference",
  },
  {
    defaultMessage: "Enter a target balance.",
    id: "settings.usage.autoTopUp.target.error.missing",
  },
  {
    defaultMessage: "Target balance must be a whole number.",
    id: "settings.usage.autoTopUp.target.error.wholeNumber",
  },
  {
    defaultMessage:
      "Auto reload brings your credit balance back up to this amount.",
    id: "settings.usage.autoTopUp.target.helper",
  },
  {
    defaultMessage: "Target balance",
    id: "settings.usage.autoTopUp.target.label",
  },
  {
    defaultMessage: "Auto-reload minimum balance",
    id: "settings.usage.autoTopUp.threshold.ariaLabel",
  },
  {
    defaultMessage: "Set the minimum balance to at least 125 credits.",
    id: "settings.usage.autoTopUp.threshold.error.minimum",
  },
  {
    defaultMessage: "Enter a minimum balance (at least 125 credits).",
    id: "settings.usage.autoTopUp.threshold.error.missing",
  },
  {
    defaultMessage: "Minimum balance must be a whole number.",
    id: "settings.usage.autoTopUp.threshold.error.wholeNumber",
  },
  {
    defaultMessage:
      "Auto reload triggers when your credit balance goes below this amount.",
    id: "settings.usage.autoTopUp.threshold.helper",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.autoTopUp.threshold.label",
  },
  {
    defaultMessage: "Failed to update auto reload",
    id: "settings.usage.autoTopUp.update.error",
  },
  {
    defaultMessage: "Updated auto reload settings",
    id: "settings.usage.autoTopUp.update.success",
  },
  {
    defaultMessage:
      "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
    id: "settings.usage.cancelPlan.appleDescription",
  },
  {
    defaultMessage:
      "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
    id: "settings.usage.cancelPlan.googlePlayDescription",
  },
  {
    defaultMessage: "Cancel plan",
    id: "settings.usage.cancelPlan.title",
  },
  {
    defaultMessage:
      "Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan",
    id: "settings.usage.cancelPlan.webDescription",
  },
  {
    defaultMessage: "Buy credits",
    id: "settings.usage.credit.balance.buyCredits",
  },
  {
    defaultMessage: "Current balance",
    id: "settings.usage.credit.balance.current",
  },
  {
    defaultMessage:
      "Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>",
    id: "settings.usage.credit.balance.description",
  },
  {
    defaultMessage: "Save up to {discountPercent, number}% on credits",
    id: "settings.usage.credit.balance.discountOffer",
  },
  {
    defaultMessage: "Manage auto-reload",
    id: "settings.usage.credit.balance.manageAutoReload",
  },
  {
    defaultMessage: "Your remaining credits",
    id: "settings.usage.credit.balance.readOnly.description",
  },
  {
    defaultMessage: "Set up auto-reload",
    id: "settings.usage.credit.balance.setupAutoReload",
  },
  {
    defaultMessage: "Credits balance",
    id: "settings.usage.credit.balance.title",
  },
  {
    defaultMessage: "Credit remaining unavailable",
    id: "settings.usage.credit.remaining.unavailable",
  },
  {
    defaultMessage: "Unlimited credit",
    id: "settings.usage.credit.remaining.unlimited",
  },
  {
    defaultMessage: "No credit usage recorded yet",
    id: "settings.usage.creditHistory.empty",
  },
  {
    defaultMessage: "Could not load credit usage history",
    id: "settings.usage.creditHistory.error",
  },
  {
    defaultMessage: "Next",
    id: "settings.usage.creditHistory.next",
  },
  {
    defaultMessage: "Previous",
    id: "settings.usage.creditHistory.previous",
  },
  {
    defaultMessage: "{from}-{to} of {total} usage events",
    id: "settings.usage.creditHistory.range",
  },
  {
    defaultMessage: "Credit usage history",
    id: "settings.usage.creditHistory.title",
  },
  {
    defaultMessage:
      "Credits power Codex. Valid for 12 months. <link>View rate card</link>",
    id: "settings.usage.creditReload.addCredits.description",
  },
  {
    defaultMessage: "Credits power Codex. Valid for 12 months. View rate card",
    id: "settings.usage.creditReload.addCredits.screenReaderDescription",
  },
  {
    defaultMessage: "Add credits",
    id: "settings.usage.creditReload.addCredits.title",
  },
  {
    defaultMessage: "{creditQuantity, number} credits",
    id: "settings.usage.creditReload.amount.credits",
  },
  {
    defaultMessage: "{discountPercent, number}% off",
    id: "settings.usage.creditReload.amount.discount",
  },
  {
    defaultMessage: "Other",
    id: "settings.usage.creditReload.amount.other",
  },
  {
    defaultMessage: "Custom reload amount",
    id: "settings.usage.creditReload.amount.other.ariaLabel",
  },
  {
    defaultMessage: "—",
    id: "settings.usage.creditReload.amount.pending",
  },
  {
    defaultMessage: "Back",
    id: "settings.usage.creditReload.autoReload.back",
  },
  {
    defaultMessage: "Auto-reload",
    id: "settings.usage.creditReload.autoReload.checkbox",
  },
  {
    defaultMessage: "Automatically add credits when your balance runs low",
    id: "settings.usage.creditReload.autoReload.checkboxDescription",
  },
  {
    defaultMessage:
      "When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month",
    id: "settings.usage.creditReload.autoReload.description",
  },
  {
    defaultMessage:
      "When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum",
    id: "settings.usage.creditReload.autoReload.description.noLimit",
  },
  {
    defaultMessage:
      "If your balance falls below the minimum, Codex will automatically reload your credits",
    id: "settings.usage.creditReload.autoReload.description.pending",
  },
  {
    defaultMessage: "Failed to disable auto-reload",
    id: "settings.usage.creditReload.autoReload.disable.error",
  },
  {
    defaultMessage: "Disabled auto-reload",
    id: "settings.usage.creditReload.autoReload.disable.success",
  },
  {
    defaultMessage: "Enable auto-reload",
    id: "settings.usage.creditReload.autoReload.enable",
  },
  {
    defaultMessage: "Failed to enable auto-reload",
    id: "settings.usage.creditReload.autoReload.enable.error",
  },
  {
    defaultMessage: "Enabled auto-reload",
    id: "settings.usage.creditReload.autoReload.enable.success",
  },
  {
    defaultMessage: "Manage auto-reload",
    id: "settings.usage.creditReload.autoReload.manage.title",
  },
  {
    defaultMessage: "Automatically add credits when your balance runs low",
    id: "settings.usage.creditReload.autoReload.modalDescription",
  },
  {
    defaultMessage: "Automatically purchase credits when you’re running low",
    id: "settings.usage.creditReload.autoReload.offer.description.v2",
  },
  {
    defaultMessage: "Auto-reload",
    id: "settings.usage.creditReload.autoReload.offer.title",
  },
  {
    defaultMessage: "Save",
    id: "settings.usage.creditReload.autoReload.save",
  },
  {
    defaultMessage: "Set up auto-reload",
    id: "settings.usage.creditReload.autoReload.setup.title",
  },
  {
    defaultMessage: "Turn off",
    id: "settings.usage.creditReload.autoReload.turnOff",
  },
  {
    defaultMessage: "Turn auto-reload off",
    id: "settings.usage.creditReload.autoReload.turnOffDiscounted",
  },
  {
    defaultMessage: "Turn on auto-reload",
    id: "settings.usage.creditReload.autoReload.turnOn",
  },
  {
    defaultMessage: "Failed to update auto-reload",
    id: "settings.usage.creditReload.autoReload.update.error",
  },
  {
    defaultMessage: "Updated auto-reload settings",
    id: "settings.usage.creditReload.autoReload.update.success",
  },
  {
    defaultMessage: "Close",
    id: "settings.usage.creditReload.close",
  },
  {
    defaultMessage: "Continue to checkout",
    id: "settings.usage.creditReload.continueToCheckout",
  },
  {
    defaultMessage: "Current balance: {balance}",
    id: "settings.usage.creditReload.currentBalance",
  },
  {
    defaultMessage: "Current balance unavailable",
    id: "settings.usage.creditReload.currentBalance.unavailable",
  },
  {
    defaultMessage: "Enter credits in increments of {quantityStep, number}",
    id: "settings.usage.creditReload.error.increment",
  },
  {
    defaultMessage:
      "Enter an amount that converts to a whole number of credits",
    id: "settings.usage.creditReload.error.invalidCurrencyAmount",
  },
  {
    defaultMessage: "Enter at least {minimumQuantity, number} credits",
    id: "settings.usage.creditReload.error.minimum",
  },
  {
    defaultMessage: "Enter an amount",
    id: "settings.usage.creditReload.error.missing",
  },
  {
    defaultMessage: "Set the monthly limit high enough to cover one reload",
    id: "settings.usage.creditReload.error.monthlyLimit",
  },
  {
    defaultMessage:
      "Set the target balance at least {minimumQuantity, number} credits above the minimum balance",
    id: "settings.usage.creditReload.error.targetBalance",
  },
  {
    defaultMessage: "Enter a whole number of credits",
    id: "settings.usage.creditReload.error.wholeNumber",
  },
  {
    defaultMessage:
      "The initial reload for an estimated {amount} failed. <managePayment>Update your payment method</managePayment>",
    id: "settings.usage.creditReload.immediateTopUpFailure.amount",
  },
  {
    defaultMessage:
      "The initial reload failed. <managePayment>Update your payment method</managePayment>",
    id: "settings.usage.creditReload.immediateTopUpFailure.generic",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.usage.creditReload.load.cancel",
  },
  {
    defaultMessage: "Could not load credit settings",
    id: "settings.usage.creditReload.load.error",
  },
  {
    defaultMessage: "Loading credit settings…",
    id: "settings.usage.creditReload.load.loading",
  },
  {
    defaultMessage: "Retry",
    id: "settings.usage.creditReload.load.retry",
  },
  {
    defaultMessage:
      "Unable to open payment settings right now. Please try again",
    id: "settings.usage.creditReload.managePayment.error",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.creditReload.minimumBalance",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.creditReload.minimumBalance.ariaLabel",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.creditReload.minimumBalance.discounted.ariaLabel.v2",
  },
  {
    defaultMessage:
      "Automatically purchase credits when my balance drops below this amount",
    id: "settings.usage.creditReload.minimumBalance.discounted.tooltip",
  },
  {
    defaultMessage: "About minimum balance",
    id: "settings.usage.creditReload.minimumBalance.discounted.tooltip.ariaLabel",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.creditReload.minimumBalance.discounted.v2",
  },
  {
    defaultMessage:
      "Purchase credits so you can continue using Codex if your usage runs out. <link>View rate card</link>",
    id: "settings.usage.creditReload.oneTimePurchase.description",
  },
  {
    defaultMessage:
      "Purchase credits so you can continue using Codex if your usage runs out. View rate card",
    id: "settings.usage.creditReload.oneTimePurchase.screenReaderDescription",
  },
  {
    defaultMessage: "One time credit purchase",
    id: "settings.usage.creditReload.oneTimePurchase.title",
  },
  {
    defaultMessage: "Maximum monthly spend",
    id: "settings.usage.creditReload.spendLimit",
  },
  {
    defaultMessage: "Monthly reload spend limit",
    id: "settings.usage.creditReload.spendLimit.ariaLabel",
  },
  {
    defaultMessage: "Maximum monthly spend (optional)",
    id: "settings.usage.creditReload.spendLimit.discounted.ariaLabel",
  },
  {
    defaultMessage:
      "Maximum monthly spend must cover the minimum balance plus the reload amount",
    id: "settings.usage.creditReload.spendLimit.discounted.error",
  },
  {
    defaultMessage: "(Optional)",
    id: "settings.usage.creditReload.spendLimit.optional",
  },
  {
    defaultMessage: "(optional)",
    id: "settings.usage.creditReload.spendLimit.optional.discounted",
  },
  {
    defaultMessage: "No limit",
    id: "settings.usage.creditReload.spendLimit.placeholder",
  },
  {
    defaultMessage: "View rate card",
    id: "settings.usage.creditReload.viewRateCard",
  },
  {
    defaultMessage:
      "{value, number} {value, plural, one {credit} other {credits}}",
    id: "settings.usage.credits.value",
  },
  {
    defaultMessage: "No daily usage recorded yet",
    id: "settings.usage.daily.empty",
  },
  {
    defaultMessage: "Could not load daily usage",
    id: "settings.usage.daily.error",
  },
  {
    defaultMessage:
      "Usage data is approximate and may be delayed by up to 6 hours",
    id: "settings.usage.daily.subtitle",
  },
  {
    defaultMessage: "Daily usage",
    id: "settings.usage.daily.title",
  },
  {
    defaultMessage:
      "See your usage within the limits defined by your administrator.",
    id: "settings.usage.enterprise.subtitle",
  },
  {
    defaultMessage: "Usage limits",
    id: "settings.usage.enterprise.title",
  },
  {
    defaultMessage: "Loading usage history…",
    id: "settings.usage.history.loading",
  },
  {
    defaultMessage: "Retry",
    id: "settings.usage.history.retry",
  },
  {
    defaultMessage: "Request Increase",
    id: "settings.usage.limits.customRequestIncrease",
  },
  {
    defaultMessage: "Daily usage limit",
    id: "settings.usage.limits.day.label",
  },
  {
    defaultMessage: "5 hour usage limit",
    id: "settings.usage.limits.fiveHour.label",
  },
  {
    defaultMessage: "Usage limit",
    id: "settings.usage.limits.genericWindow.label",
  },
  {
    defaultMessage: "{used} of {limit} credits used",
    id: "settings.usage.limits.monthly.creditsUsed",
  },
  {
    defaultMessage: "Your usage this month",
    id: "settings.usage.limits.monthly.currentUsage",
  },
  {
    defaultMessage: "{credits, plural, one {# credit} other {# credits}}",
    id: "settings.usage.limits.monthly.currentUsageCredits",
  },
  {
    defaultMessage: "Monthly usage limit",
    id: "settings.usage.limits.monthly.label",
  },
  {
    defaultMessage: "Your administrator hasn’t set a usage limit",
    id: "settings.usage.limits.monthly.none",
  },
  {
    defaultMessage: "{remaining}% remaining",
    id: "settings.usage.limits.monthly.progress.remaining",
  },
  {
    defaultMessage: "Monthly usage remaining",
    id: "settings.usage.limits.monthly.progress.remainingAriaLabel",
  },
  {
    defaultMessage: "Usage remaining",
    id: "settings.usage.limits.progress.ariaLabel",
  },
  {
    defaultMessage: "{remaining}% left",
    id: "settings.usage.limits.progress.remaining",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.usage.limits.requestCancel",
  },
  {
    defaultMessage: "Request limit increase",
    id: "settings.usage.limits.requestIncrease",
  },
  {
    defaultMessage: "Justification",
    id: "settings.usage.limits.requestJustificationLabel",
  },
  {
    defaultMessage: "Tell your admin why you need more credits.",
    id: "settings.usage.limits.requestJustificationPlaceholder",
  },
  {
    defaultMessage: "Enter a justification to submit your request.",
    id: "settings.usage.limits.requestMissingJustification",
  },
  {
    defaultMessage: "Your request is pending admin review.",
    id: "settings.usage.limits.requestPending",
  },
  {
    defaultMessage: "Submit request",
    id: "settings.usage.limits.requestSave",
  },
  {
    defaultMessage: "Request submitted",
    id: "settings.usage.limits.requestSaved",
  },
  {
    defaultMessage: "Could not save your request. Please try again.",
    id: "settings.usage.limits.requestSaveError",
  },
  {
    defaultMessage: "Update request",
    id: "settings.usage.limits.requestUpdate",
  },
  ...usageMessagesPart2,
];
