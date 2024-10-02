import { ChangeEvent, useEffect } from 'react'

import LanguageInputs from '../components/LanguageInputs/LanguageInputs'
import TextArea from '../components/ui/TextArea/TextArea'
import { useTranslatorContext } from '../context/TranslatorContext'
import useDebounce from '../hooks/useDebounce'
import { INPUTS_MAX_LENGTH, MINIMUM_INPUT_LENGTH } from '../utils/constants'

const InputSide = () => {
  const { inputContent, outputLanguage, inputLanguage, translationTool, setInputContent, setOutputContent, translate } =
    useTranslatorContext()
  const debouncedInputContent = useDebounce(inputContent, 800)

  const changeInputContent = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(value)

    if (!value) {
      setOutputContent('')
    }
  }

  useEffect(() => {
    if (debouncedInputContent.length >= MINIMUM_INPUT_LENGTH) {
      translate({ content: debouncedInputContent, outputLanguage, inputLanguage })
    }
  }, [debouncedInputContent, outputLanguage, outputLanguage, inputLanguage, translationTool])

  return (
    <div className='flex h-full flex-1 flex-col gap-5'>
      <LanguageInputs />
      <TextArea
        className='h-full min-h-48 shadow-md'
        placeholder='Enter text to be translated'
        maxLength={INPUTS_MAX_LENGTH}
        value={inputContent}
        onChange={changeInputContent}
      />
    </div>
  )
}

export default InputSide
