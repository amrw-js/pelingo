import removeAccents from 'remove-accents'

import { REMOVE_SYMBOLS_AND_SPACES_REGEX, TRIM_SYMBOLS_AND_SPACES_REGEX } from './presets'

/**
 * Returns a slug for the given string value.
 *
 * The slug is created by:
 * 1. Removing all diacritics from the string.
 * 2. Replacing all symbols and spaces with a single hyphen.
 * 3. Trimming all leading and trailing hyphens.
 * 4. Converting all characters to lower case.
 *
 * @param {string} value The string to generate a slug from.
 * @returns {string} The slug.
 */
export const generateSlug = (value: string): string =>
  removeAccents(value ?? '')
    ?.replace(REMOVE_SYMBOLS_AND_SPACES_REGEX, '-')
    .replace(TRIM_SYMBOLS_AND_SPACES_REGEX, '')
    .toLowerCase()
