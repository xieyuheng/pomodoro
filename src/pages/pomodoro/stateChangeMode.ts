import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { ModeKind, modeThemeName } from './mode'
import { State } from './State'

export function stateChangeMode(state: State, kind: ModeKind): void {
  state.mode = state.settings.modes[kind]

  const theme = useGlobalTheme()
  theme.name = modeThemeName(state.mode)

  state.timer.reset(state.mode.interval)
}
