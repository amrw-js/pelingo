import { TranslatorProvider } from '../context/TranslatorContext'

import InputSide from './InputSide'
import OutputSide from './OutputSide'

const TextTranslator = () => {
  return (
    <div className='flex flex-col gap-5 bg-white px-6 py-6'>
      <h2 className='text-4xl font-semibold'>Text Translator</h2>
      <TranslatorProvider>
        <div className='flex w-full gap-6'>
          <InputSide />
          <OutputSide />
        </div>
      </TranslatorProvider>
    </div>
  )
}

export default TextTranslator
