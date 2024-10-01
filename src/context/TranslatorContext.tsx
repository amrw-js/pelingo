import { FC, ReactNode, createContext, useContext, useMemo, useState } from 'react'

import { AUTO_DETECT_OPTION, ENGLISH_OPTION, LANGUAGES_OPTIONS } from '../utils/constants'

export type LanguageKey = (typeof LANGUAGES_OPTIONS)[number]['key']

interface ITranslatorContextType {
  inputContent: string
  outputContent: string
  translationTool: string
  inputLanguage: LanguageKey
  outputLanguage: LanguageKey
  setInputContent: (value: string) => void
  setOutputContent: (value: string) => void
  setInputLanguage: (value: LanguageKey) => void
  setOutputLanguage: (value: LanguageKey) => void
  setTranslationTool: (value: string) => void
}

interface ITranslatorProviderProps {
  children: ReactNode
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
  const [translationTool, setTranslationTool] = useState('')
  const [inputLanguage, setInputLanguage] = useState(AUTO_DETECT_OPTION.key)
  const [outputLanguage, setOutputLanguage] = useState(ENGLISH_OPTION.key)

  const value = useMemo(
    () => ({
      inputContent,
      outputContent,
      translationTool,
      inputLanguage,
      outputLanguage,
      setInputContent,
      setOutputContent,
      setTranslationTool,
      setInputLanguage,
      setOutputLanguage,
    }),
    [inputContent, outputContent, translationTool, inputLanguage, outputLanguage],
  )

  return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>
}
