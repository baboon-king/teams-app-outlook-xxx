import { ref } from "vue";

/**
 * Shows a notification when the add-in command is executed.
 * @param event
 */
function action(event: Office.AddinCommands.Event) {
  const message: Office.NotificationMessageDetails = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true,
  };

  // Show a notification message
  Office.context.mailbox.item.notificationMessages.replaceAsync("ActionPerformanceNotification", message);

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}

function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal() as any;

// The add-in command functions need to be available in global scope
g.action = action;

export const useOffice = () => {
  const state = {
    onReady: Office.onReady,
    isReady: ref(false),
    isWord: ref(false),
    isExcel: ref(false),
    isPowerPoint: ref(false),
    isOutlook: ref(false),
    isOneNote: ref(false),
    isProject: ref(false),
    isAccess: ref(false),
    isPC: ref(false),
    isOfficeOnline: ref(false),
    isMac: ref(false),
    isiOS: ref(false),
    isAndroid: ref(false),
    isUniversal: ref(false),
    host: ref<Office.HostType>(),
    platform: ref<Office.PlatformType>(),
  } as const;

  const promise = Office.onReady().then(({ host, platform }) => {
    // host
    state.isReady.value = true;
    state.isWord.value = host === 0;
    state.isExcel.value = host === 1;
    state.isPowerPoint.value = host === 3;
    state.isOutlook.value = host === 4;
    state.isOneNote.value = host === 5;
    state.isProject.value = host === 6;
    state.isAccess.value = host === 7;

    // platform
    state.isPC.value = platform === 0;
    state.isOfficeOnline.value = platform === 1;
    state.isMac.value = platform === 2;
    state.isiOS.value = platform === 3;
    state.isAndroid.value = platform === 4;
    state.isUniversal.value = platform === 5;
    state.host.value = host;
    state.platform.value = platform;

    return state;
  });

  type Return = typeof state & typeof promise;

  Object.assign(promise, state);

  return promise as Return;
};
