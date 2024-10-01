import { TranslatorProvider } from '../context/TranslatorContext'

import InputSide from './InputSide'
import OutputSide from './OutputSide'

const TextTranslator = () => {
  return (
    <div className='h-full'>
      <h2 className='mb-9 text-4xl font-semibold'>Text Translator</h2>
      <div className='flex h-3/4 flex-col gap-5 rounded-lg border bg-white px-6 py-6 shadow'>
        <TranslatorProvider>
          <div className='flex h-full w-full gap-6'>
            <InputSide />
            <OutputSide />
          </div>
        </TranslatorProvider>
      </div>
    </div>
  )
}

export default TextTranslator
