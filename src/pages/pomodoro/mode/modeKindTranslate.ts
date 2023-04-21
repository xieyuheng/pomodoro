import { useGlobalLang } from '../../../components/lang/useGlobalLang'
import { ModeKind } from './Mode'

export function modeKindTranslate(kind: ModeKind): string {
  const lang = useGlobalLang()

  switch (kind) {
    case 'Focus':
      return lang.isZh() ? '专注' : 'Focus'
    case 'Break':
      return lang.isZh() ? '短休' : 'Break'
    case 'Recess':
      return lang.isZh() ? '长息' : 'Recess'
  }
}
