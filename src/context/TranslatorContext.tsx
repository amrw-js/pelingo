import { FC, ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { useGeminiTranslator } from '../hooks/useGeminiTranslator'
import { useGptTranslator } from '../hooks/useGptTranslator'
import { AUTO_DETECT_OPTION, ENGLISH_OPTION, GEMINI_TOOL, GPT_TOOL, LANGUAGES_OPTIONS } from '../utils/constants'

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

export const TranslatorProvider: FC<ITranslatorProviderProps> = (props) => {
  const { children } = props

  const [inputContent, setInputContent] = useState('')
  const [outputContent, setOutputContent] = useState('')
  const [translationTool, setTranslationTool] = useState(GEMINI_TOOL.key)
  const [inputLanguage, setInputLanguage] = useState(AUTO_DETECT_OPTION.key)
  const [outputLanguage, setOutputLanguage] = useState(ENGLISH_OPTION.key)

  const { translate: translateByGemini, translating: geminiTranslating } = useGeminiTranslator()
  const { translate: translateByGpt, translating: gbtTranslating } = useGptTranslator()

  const translate = useCallback(
    async ({ inputLanguage, outputLanguage, content }: ITranslateArgs) => {
      let translatedContent = content
      if (translationTool === GEMINI_TOOL.key) {
        translatedContent = (await translateByGemini({ content, inputLanguage, outputLanguage })) as string
      }

      if (translationTool === GPT_TOOL.key) {
        translatedContent = (await translateByGpt({ content, inputLanguage, outputLanguage })) as string
      }

      if (typeof translatedContent === 'string') {
        setOutputContent(translatedContent)
      }
    },
    [translationTool],
  )

  const value = useMemo(
    () => ({
      inputContent,
      outputContent,
      translationTool,
      inputLanguage,
      outputLanguage,
      translating: geminiTranslating || gbtTranslating,
      setInputContent,
      setOutputContent,
      setTranslationTool,
      setInputLanguage,
      setOutputLanguage,
      translate,
    }),
    [
      inputContent,
      outputContent,
      translationTool,
      inputLanguage,
      outputLanguage,
      geminiTranslating,
      gbtTranslating,
      translate,
    ],
  )

  return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>
}
