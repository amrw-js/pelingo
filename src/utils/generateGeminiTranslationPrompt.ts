import { AUTO_DETECT_OPTION } from './constants'

/**
 * Returns a prompt that Gemini AI can understand to translate the given `content`
 * from `inputLanguage` to `outputLanguage`.
 *
 * @param {string} content The text to translate.
 * @param {string} outputLanguage The ISO 639-1 language code of the desired output language.
 * @param {string} inputLanguage The ISO 639-1 language code of the input language. If this is
 *     set to the special value `AUTO_DETECT_OPTION.key`, then the prompt will be changed
 *     to ask Gemini to automatically detect the input language.
 *
 * @returns {string} The prompt to send to Gemini AI.
 */

export const generateGeminiTranslationPrompt = (content: string, outputLanguage: string, inputLanguage: string) => {
  if (inputLanguage === AUTO_DETECT_OPTION.key) {
    return `Translate in ${outputLanguage} text in input. Use json template in output and replace
    RESULT by the translation.
    Input: ${content}
    Output : {"text":”RESULT”}`
  }

  return `Translate the following text from ${inputLanguage} to ${outputLanguage}.\nInput: "${content}"\nOutput: {"text": "RESULT"}`
}
