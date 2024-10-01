import { useMutation } from '@tanstack/react-query'

import { ITranslateArgs } from '../context/TranslatorContext'
import gbtService from '../services/gbt.service'
import { generateGbtTranslationPrompt } from '../utils/generateGbtPrompt'

interface IGbtTranslator {
  translating: boolean
  translate: (translationsArgs: ITranslateArgs) => Promise<unknown>
}

export const useGptTranslator = (): IGbtTranslator => {
  const { isPending: translating, mutateAsync: generateContent } = useMutation({
    mutationFn: gbtService.generateGbtContent,
    mutationKey: ['translator/gbt'],
    // onError: (error) => {
    //   toastError(error)
    // },
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
