import { State } from './State'

export async function stateNotify(state: State): Promise<void> {
  console.log('[stateNotify]')

  if (Notification.permission === 'granted') {
    console.log('[stateNotify] granted')

    const registration = await navigator.serviceWorker.ready

    console.log('[stateNotify] ready')

    const kind = state.translateKind(state.mode.kind)

    registration.showNotification(state.appName, {
      body: state.lang.isZh() ? `${kind} 结束。` : `${kind} finished.`,
    })
  }
}
