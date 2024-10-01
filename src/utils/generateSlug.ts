import removeAccents from 'remove-accents'

import { REMOVE_SYMBOLS_AND_SPACES_REGEX, TRIM_SYMBOLS_AND_SPACES_REGEX } from './presets'

export const generateSlug = (value: string): string =>
  removeAccents(value ?? '')
    ?.replace(REMOVE_SYMBOLS_AND_SPACES_REGEX, '-')
    .replace(TRIM_SYMBOLS_AND_SPACES_REGEX, '')
    .toLowerCase()
