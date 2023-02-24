import { useGlobalApp } from '../../reactives/useGlobalApp'
import { modeKindTranslate } from './mode'
import { State } from './State'

export async function stateNotify(state: State): Promise<void> {
  console.log('[stateNotify]')

  if (Notification.permission === 'granted') {
    console.log('[stateNotify] granted')
    const registration = await navigator.serviceWorker.ready
    console.log('[stateNotify] ready')

    const kind = modeKindTranslate(state.mode.kind)
    const app = useGlobalApp()
    registration.showNotification(app.name, {
      body: state.lang.isZh() ? `${kind} 结束。` : `${kind} finished.`,
    })
  }
}
