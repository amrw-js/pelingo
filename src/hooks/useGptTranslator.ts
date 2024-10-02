import { useMutation } from '@tanstack/react-query'

import { useApiKeys } from '../context/ApiKeysContext'
import { ITranslateArgs } from '../context/TranslatorContext'
import gbtService from '../services/gbt.service'
import { generateGbtTranslationPrompt } from '../utils/generateGbtPrompt'
import { toastError } from '../utils/toastError'

interface IGbtTranslator {
  translating: boolean
  translate: (translationsArgs: ITranslateArgs) => Promise<unknown>
}

export const useGptTranslator = (): IGbtTranslator => {
  const { gbtApiKey } = useApiKeys()

  const { isPending: translating, mutateAsync: generateContent } = useMutation({
    mutationFn: (content: string) => gbtService.generateGbtContent(content, gbtApiKey),
    mutationKey: ['translator/gbt'],
    onError: toastError,
  })

  const translate = async ({ content, outputLanguage }: ITranslateArgs) => {
    const prompt = generateGbtTranslationPrompt(content, outputLanguage)
    return await generateContent(prompt)
  }

  return {
    translating,
    translate,
  }
}
