import { QueryClientProvider } from '@tanstack/react-query'

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
    </main>
  )
}

export default App
