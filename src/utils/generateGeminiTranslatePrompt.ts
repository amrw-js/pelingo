/**
 * Generate a prompt for Gemini Translator API
 * @param content The text to translate
 * @param language The language to translate the text in
 * @returns A prompt for the Gemini Translator API
 */
export const generateGeminiTranslatePrompt = (content: string, outputLanguage: string, inputLanguage) => {
  return `Translate in ${outputLanguage} text in input. Use json template in output and replace RESULT by the translation.
Input: ${content}
Output : {"text":”RESULT”}`
}
