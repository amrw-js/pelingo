import { ArrowsRightLeftIcon } from '@heroicons/react/16/solid'
import cn from 'clsx'

import { useTranslatorContext } from '../../context/TranslatorContext'
import { AUTO_DETECT_OPTION, LANGUAGES, LANGUAGES_OPTIONS, languageOption } from '../../utils/constants'
import { DISABLE_CLASSNAMES } from '../../utils/presets'
import AutoComplete from '../ui/AutoComplete/AutoComplete'

const LanguageInputs = () => {
  const { inputLanguage, outputLanguage, setInputLanguage, setOutputLanguage } = useTranslatorContext()
  const changeInputLanguage = (language: languageOption) => {
    setInputLanguage(language.key)
  }

  const changeOutputLanguage = (language: languageOption) => {
    setOutputLanguage(language.key)
  }

  const swapLanguages = () => {
    setOutputLanguage(inputLanguage)
    setInputLanguage(outputLanguage)
  }

  return (
    <div className='flex flex-col items-center gap-2 sm:flex-row'>
      <AutoComplete
        options={LANGUAGES_OPTIONS}
        value={inputLanguage}
        containerClassName='flex-1'
        onChange={changeInputLanguage}
        displayOption={({ name }) => name}
        displayValue={({ key }) => key}
      />
      <ArrowsRightLeftIcon
        onClick={swapLanguages}
        className={cn(
          'size-5 cursor-pointer transition-all',
          inputLanguage === AUTO_DETECT_OPTION.key && DISABLE_CLASSNAMES,
        )}
      />
      <AutoComplete
        containerClassName='flex-1'
        options={LANGUAGES}
        value={outputLanguage}
        onChange={changeOutputLanguage}
        displayOption={({ name }) => name}
        displayValue={({ key }) => key}
      />
    </div>
  )
}

export default LanguageInputs
