export async function registerServiceWorker(): Promise<void> {
  if (typeof navigator === "undefined") return
  if (!navigator.serviceWorker) return

  const worker = "/service-worker.js"

  try {
    const registration = await navigator.serviceWorker.register(worker)

    if (registration.installing) {
      console.log({ message: "Service worker installing", worker })
    } else if (registration.waiting) {
      console.log({ message: "Service worker installed", worker })
    } else if (registration.active) {
      console.log({ message: "Service worker active", worker })
    }
  } catch (error) {
    console.error({ message: `Registration failed with ${error}`, worker })
  }
}

registerServiceWorker()
