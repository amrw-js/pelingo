import { FC, ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { useGeminiTranslator } from '../hooks/useGeminiTranslator'
import { AUTO_DETECT_OPTION, ENGLISH_OPTION, GEMINI_TOOL, LANGUAGES_OPTIONS } from '../utils/constants'

export type LanguageKey = (typeof LANGUAGES_OPTIONS)[number]['key']

interface ITranslatorContextType {
  inputContent: string
  outputContent: string
  translationTool: string
  inputLanguage: LanguageKey
  outputLanguage: LanguageKey
  translating: boolean
  translate: (args: ITranslateArgs) => Promise<unknown>
  setInputContent: (value: string) => void
  setOutputContent: (value: string) => void
  setInputLanguage: (value: LanguageKey) => void
  setOutputLanguage: (value: LanguageKey) => void
  setTranslationTool: (value: string) => void
}

interface ITranslatorProviderProps {
  children: ReactNode
}

export interface ITranslateArgs {
  content: string
  inputLanguage: LanguageKey
  outputLanguage: LanguageKey
}

const TranslatorContext = createContext<ITranslatorContextType | undefined>(undefined)

export const useTranslatorContext = () => {
  const context = useContext(TranslatorContext)
  if (!context) {
    throw new Error('useTranslator must be used within a TranslatorProvider')
  }
  return context
}

export const TranslatorProvider: FC<ITranslatorProviderProps> = ({ children }) => {
  const [inputContent, setInputContent] = useState('')
  const [outputContent, setOutputContent] = useState('')
  const [translationTool, setTranslationTool] = useState(GEMINI_TOOL.key)
  const [inputLanguage, setInputLanguage] = useState(AUTO_DETECT_OPTION.key)
  const [outputLanguage, setOutputLanguage] = useState(ENGLISH_OPTION.key)

  const { translate: translateByGemini, translating } = useGeminiTranslator()

  const translate = useCallback(async ({ inputLanguage, outputLanguage, content }: ITranslateArgs) => {
    const translatedContent = await translateByGemini({ content, inputLanguage, outputLanguage })

    if (typeof translatedContent === 'string') {
      setOutputContent(translatedContent)
    }
  }, [])

  const value = useMemo(
    () => ({
      inputContent,
      outputContent,
      translationTool,
      inputLanguage,
      outputLanguage,
      translating,
      setInputContent,
      setOutputContent,
      setTranslationTool,
      setInputLanguage,
      setOutputLanguage,
      translate,
    }),
    [inputContent, outputContent, translationTool, inputLanguage, outputLanguage, translating, translate],
  )

  return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>
}
