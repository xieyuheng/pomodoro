export async function removeServiceWorker() {
  const registrations = await navigator.serviceWorker.getRegistrations()

  for (let registration of registrations) {
    registration.unregister()
  }
}
