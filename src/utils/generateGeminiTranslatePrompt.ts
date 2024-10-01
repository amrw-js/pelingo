export const generateGeminiTranslatePrompt = (content: string, language: string) => {
  return `Translate in ${language} text in input. Use json template in output and replace RESULT by the translation.
Input: ${content}
Output : {"text":”RESULT”}`
}
