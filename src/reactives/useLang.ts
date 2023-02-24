import { Lang } from '../models/Lang'
import { createSingleton } from '../utils/createSingleton'

function createTag(): string {
  const lang = window.navigator.language
  if (lang.startsWith('zh')) return 'zh'
  return 'en'
}

export const useLang = createSingleton(new Lang(createTag()))
