export async function setupNotification(): Promise<void> {
  switch (Notification.permission) {
    case "default": {
      await Notification.requestPermission()
      return
    }
    case "granted": {
      return
    }
    case "denied": {
      return
    }
  }
}
