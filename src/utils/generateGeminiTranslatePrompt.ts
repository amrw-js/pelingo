import { AUTO_DETECT_OPTION } from './constants'

/**
 * Generate a prompt for Gemini Translator API
 * @param content The text to translate
 * @param language The language to translate the text in
 * @returns A prompt for the Gemini Translator API
 */
export const generateGeminiTranslatePrompt = (content: string, outputLanguage: string, inputLanguage: string) => {
  if (inputLanguage === AUTO_DETECT_OPTION.key) {
    return `Translate in ${outputLanguage} text in input. Use json template in output and replace
    RESULT by the translation.
    Input: ${content}
    Output : {"text":”RESULT”}`
  }

  return `Translate the following text from ${inputLanguage} to ${outputLanguage}.
  Use the following JSON template for the output, and replace RESULT with the translation:
  Input: "${content}"
  Output: {"text": "RESULT"}`
}
