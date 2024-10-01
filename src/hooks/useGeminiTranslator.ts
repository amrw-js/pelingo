import { useMutation } from '@tanstack/react-query'

import googleService from '../services/google.service'
import { generateGeminiTranslatePrompt } from '../utils/generateGeminiTranslatePrompt'

interface IGeminiTranslator {
  translating: boolean
  translate: (content: string, language: string) => Promise<unknown>
}
export const useGeminiTranslator = (): IGeminiTranslator => {
  const { isPending: translating, mutateAsync: generateContent } = useMutation({
    mutationFn: googleService.generateGeminiContent,
    mutationKey: ['translator/gemini'],
    // onError: (error) => {
    //   toastError(error)
    // },
  })

  const translate = async (content: string, language: string) => {
    const prompt = generateGeminiTranslatePrompt(content, language)
    return await generateContent(prompt)
  }

  return {
    translating,
    translate,
  }
}
