import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import TextTranslator from './TextTranslator/TextTranslator'
import { queryClient } from './api/queryClient'
import ThemeSwitcher from './components/ui/ThemeSwitcher/ThemeSwitcher'

const App = () => {
  return (
    <main className='min-h-screen bg-slate-100 px-8 py-5 transition-colors duration-300 md:px-16 md:py-10 dark:bg-slate-900 dark:text-slate-100'>
      <QueryClientProvider client={queryClient}>
        <TextTranslator />
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
