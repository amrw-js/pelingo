import { QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import TextTranslator from './TextTranslator/TextTranslator'
import { queryClient } from './api/queryClient'
import ApiKeysModal from './components/ApiKeysModal/ApiKeysModal'
import ThemeSwitcher from './components/ui/ThemeSwitcher/ThemeSwitcher'
import { useApiKeys } from './context/ApiKeysContext'
import { IApiKeys } from './global.interface'

const App = () => {
  const { setApiKeys } = useApiKeys()
  const [apiKeysModalOpen, setApiKeysModalOpen] = useState(!import.meta.env.DEVrue)

  const closeApiKeysModal = () => {
    setApiKeysModalOpen(false)
  }

  const submitApiKeysModal = (data: IApiKeys) => {
    setApiKeys(data)
    toast.success('Api keys saved successfully')
    closeApiKeysModal()
  }

  return (
    <main className='max-w-screen min-h-screen bg-slate-100 px-8 py-5 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 sm:px-16 sm:py-10'>
      <QueryClientProvider client={queryClient}>
        <TextTranslator />
        <ApiKeysModal open={apiKeysModalOpen} onSubmit={submitApiKeysModal} onClose={closeApiKeysModal} />
      </QueryClientProvider>
      <ThemeSwitcher />
      <Toaster
        toastOptions={{
          className: `
          !max-w-md text-sm toaster-container
          bg-white text-slate-800 border border-slate-300
          dark:bg-slate-900 dark:text-white dark:border-slate-700
        `,
          duration: 6000,
        }}
      />
    </main>
  )
}

export default App
