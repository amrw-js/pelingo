import { useMutation } from '@tanstack/react-query'

import { ITranslateArgs } from '../context/TranslatorContext'
import googleService from '../services/google.service'
import { generateGeminiTranslationPrompt } from '../utils/generateGeminiTranslationPrompt'
import { toastError } from '../utils/toastError'

interface IGeminiTranslator {
  translating: boolean
  translate: (translationsArgs: ITranslateArgs) => Promise<unknown>
}
export const useGeminiTranslator = (): IGeminiTranslator => {
  const { isPending: translating, mutateAsync: generateContent } = useMutation({
    mutationFn: googleService.generateGeminiContent,
    mutationKey: ['translator/gemini'],
    onError: toastError,
  })

  const translate = async ({ content, outputLanguage, inputLanguage }: ITranslateArgs) => {
    const prompt = generateGeminiTranslationPrompt(content, outputLanguage, inputLanguage)
    return await generateContent(prompt)
  }

  return {
    translating,
    translate,
  }
}
