import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

import { IApiKeys } from '../global.interface'

interface ApiKeysContextType extends IApiKeys {
  setApiKeys: (keys: { geminiApiKey: string; gbtApiKey: string }) => void
}

interface IApiKeysProviderProps {
  children: ReactNode
}

const ApiKeysContext = createContext<ApiKeysContextType | undefined>(undefined)

export const ApiKeysProvider = ({ children }: IApiKeysProviderProps) => {
  const [geminiApiKey, setGeminiApiKey] = useState<string>('')
  const [gbtApiKey, setGbtApiKey] = useState<string>('')

  const setApiKeys = (keys: IApiKeys) => {
    setGeminiApiKey(keys.geminiApiKey)
    setGbtApiKey(keys.gbtApiKey)
  }

  // Memoize the context value
  const value = useMemo(() => ({ geminiApiKey, gbtApiKey, setApiKeys }), [geminiApiKey, gbtApiKey])

  return <ApiKeysContext.Provider value={value}>{children}</ApiKeysContext.Provider>
}

export const useApiKeys = () => {
  const context = useContext(ApiKeysContext)
  if (!context) {
    throw new Error('useApiKeys must be used within an ApiKeysProvider')
  }
  return context
}
