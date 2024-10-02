import { RTL_LANGUAGES } from './constants'
import { toLowerCase } from './toLowerCase'

export const isRtlLanguage = (languageCode: string) => RTL_LANGUAGES.includes(toLowerCase(languageCode))
