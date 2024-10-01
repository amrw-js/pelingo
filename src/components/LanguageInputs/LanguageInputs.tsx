import { ArrowRightIcon } from '@heroicons/react/16/solid'

import { useTranslatorContext } from '../../context/TranslatorContext'
import { LANGUAGES_OPTIONS, languageOption } from '../../utils/constants'
import AutoComplete from '../ui/AutoComplete/AutoComplete'

const LanguageInputs = () => {
  const { inputLanguage, outputLanguage, setInputLanguage, setOutputLanguage } = useTranslatorContext()
  const changeInputLanguage = (language: languageOption) => {
    setInputLanguage(language.key)
  }

  const changeOutputLanguage = (language: languageOption) => {
    setOutputLanguage(language.key)
  }

  return (
    <div className='flex flex-wrap items-center gap-2'>
      <AutoComplete
        options={LANGUAGES_OPTIONS}
        value={inputLanguage}
        containerClassName='flex-1'
        onChange={changeInputLanguage}
        displayOption={({ name }) => name}
        displayValue={({ key }) => key}
      />
      <ArrowRightIcon className='size-5' />
      <AutoComplete
        containerClassName='flex-1'
        options={LANGUAGES_OPTIONS}
        value={outputLanguage}
        onChange={changeOutputLanguage}
        displayOption={({ name }) => name}
        displayValue={({ key }) => key}
      />
    </div>
  )
}

export default LanguageInputs
