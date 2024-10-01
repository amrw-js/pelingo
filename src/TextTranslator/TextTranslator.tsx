import { TranslatorProvider } from '../context/TranslatorContext'

import Header from './Header'

const TextTranslator = () => {
  return (
    <div className='flex flex-col gap-5 bg-white px-6 py-6'>
      <h2 className='text-4xl font-semibold'>Text Translator</h2>
      <TranslatorProvider>
        <Header />
      </TranslatorProvider>
    </div>
  )
}

export default TextTranslator
