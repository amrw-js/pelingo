import { TranslatorProvider } from '../context/TranslatorContext'

import InputSide from './InputSide'
import OutputSide from './OutputSide'

const TextTranslator = () => {
  return (
    <div className='flex h-full flex-col gap-6'>
      <div>
        <h2 className='mb-2 text-4xl font-bold text-slate-900 dark:text-slate-100'>Text Translator</h2>
        <p className='text-sm text-slate-800 dark:text-slate-300'>
          Leverage AI technology to instantly translate your text.
        </p>
      </div>
      <div className='flex flex-col gap-5 rounded-lg border border-slate-200 bg-white px-6 py-6 shadow dark:border-slate-700 dark:bg-slate-800'>
        <TranslatorProvider>
          <div className='flex h-full w-full flex-col gap-6 lg:flex-row'>
            <InputSide />
            <OutputSide />
          </div>
        </TranslatorProvider>
      </div>
    </div>
  )
}

export default TextTranslator
