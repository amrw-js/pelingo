import { QueryClientProvider } from '@tanstack/react-query'

import TextTranslator from './TextTranslator/TextTranslator'
import { queryClient } from './api/queryClient'

const App = () => {
  return (
    <main className='h-dvh bg-slate-100 px-16 py-10'>
      <QueryClientProvider client={queryClient}>
        <TextTranslator />
      </QueryClientProvider>
    </main>
  )
}

export default App
