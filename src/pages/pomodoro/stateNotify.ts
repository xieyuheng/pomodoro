import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalApp } from '../../reactives/useGlobalApp'
import { State } from './State'
import { modeKindTranslate } from './mode'

export async function stateNotify(state: State): Promise<void> {
  console.log('[stateNotify]')

  if (Notification.permission === 'granted') {
    console.log('[stateNotify] granted')
    const registration = await navigator.serviceWorker.ready
    console.log('[stateNotify] ready')

    const kind = modeKindTranslate(state.mode.kind)
    const app = useGlobalApp()
    const lang = useGlobalLang()

    registration.showNotification(app.name, {
      body: lang.isZh() ? `${kind} 结束。` : `${kind} finished.`,
    })
  }
}
