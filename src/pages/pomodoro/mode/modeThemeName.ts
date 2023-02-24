import { Mode } from './Mode'

export function modeThemeName(mode: Mode): string {
  switch (mode.kind) {
    case 'Focus':
      return 'red'
    case 'Break':
      return 'sky'
    case 'Recess':
      return 'violet'
  }
}
