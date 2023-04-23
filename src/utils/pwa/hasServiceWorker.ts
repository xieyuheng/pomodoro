export async function hasServiceWorker() {
  const registrations = await navigator.serviceWorker.getRegistrations()

  return registrations.length > 0
}
