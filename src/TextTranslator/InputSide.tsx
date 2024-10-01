import { ChangeEvent, useEffect } from 'react'

import LanguageInputs from '../components/LanguageInputs/LanguageInputs'
import TextArea from '../components/ui/TextArea/TextArea'
import { useTranslatorContext } from '../context/TranslatorContext'
import useDebounce from '../hooks/useDebounce'

const InputSide = () => {
  const { inputContent, outputLanguage, inputLanguage, setInputContent, translate } = useTranslatorContext()
  const debouncedInputContent = useDebounce(inputContent)

  const changeInputContent = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(value)
  }

  useEffect(() => {
    if (debouncedInputContent) {
      translate({ content: debouncedInputContent, outputLanguage, inputLanguage })
    }
  }, [debouncedInputContent, outputLanguage, outputLanguage, inputLanguage])

  return (
    <div className='flex flex-1 flex-col gap-3'>
      <LanguageInputs />
      <TextArea placeholder='Enter text to be translated' value={inputContent} onChange={changeInputContent} />
    </div>
  )
}

export default InputSide
