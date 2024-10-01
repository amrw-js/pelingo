import { QueryClientProvider } from '@tanstack/react-query'

import TextTranslator from './TextTranslator/TextTranslator'
import { queryClient } from './api/queryClient'
import ThemeSwitcher from './components/ui/ThemeSwitcher/ThemeSwitcher'

const App = () => {
  return (
    <main className='h-dvh bg-slate-100 px-16 py-10 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100'>
      <QueryClientProvider client={queryClient}>
        <TextTranslator />
      </QueryClientProvider>
      <ThemeSwitcher />
    </main>
  )
}

export default App
