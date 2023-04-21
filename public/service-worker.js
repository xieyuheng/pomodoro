const who = 'service-worker.js'

function welcome() {
  console.log(`[${who}] welcome to my trivial service worker`)
}

self.addEventListener('install', (event) => {
  console.log(`[${who}] install`, event)
})

self.addEventListener('activate', (event) => {
  console.log(`[${who}] activate`, event)

  event.waitUntil(clients.claim())
})

self.addEventListener('message', (event) => {
  console.log(`[${who}] message`, event)
})

welcome()
