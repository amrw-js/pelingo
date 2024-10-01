export const generateGbtTranslationPrompt = (content: string, outputLanguage: string) => {
  return `Please ignore all previous instructions. Please respond only in the ${outputLanguage} language. Do not explain what you are doing. Do not self reference. You are an expert translator. Translate the following text to the ${outputLanguage} using vocabulary and expressions of a native of the ${outputLanguage}. The text to be translated is "${content}" in the following format Output: {"text": "RESULT"}`
}
