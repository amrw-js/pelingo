import logo from '../assets/logo.png'
import { TranslatorProvider } from '../context/TranslatorContext'

import InputSide from './InputSide'
import OutputSide from './OutputSide'

const TextTranslator = () => {
  return (
    <div className='flex h-full flex-col gap-6'>
      <div className='flex flex-col items-center gap-3 sm:items-start'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt='logo' className='h-16 w-16' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-slate-100'>Pelingo Translator</h2>
        </div>
        <p className='text-sm text-slate-800 dark:text-slate-300'>
          Leverage AI technology to instantly translate your text.
        </p>
      </div>
      <div className='flex flex-col gap-5 rounded-lg border border-slate-200 bg-white px-6 py-6 shadow dark:border-slate-700 dark:bg-slate-800'>
        <TranslatorProvider>
          <div className='flex h-full w-full flex-col gap-6 lg:h-[28.5rem] lg:flex-row'>
            <InputSide />
            <OutputSide />
          </div>
        </TranslatorProvider>
      </div>
    </div>
  )
}

export default TextTranslator
