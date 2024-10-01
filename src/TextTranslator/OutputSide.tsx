import OutputCard from '../components/OutputCard/OutputCard'
import TranslatorToolPicker from '../components/TranslatorToolPicker/TranslatorToolPicker'
import { useTranslatorContext } from '../context/TranslatorContext'

const OutputSide = () => {
  const { translating, outputContent } = useTranslatorContext()

  return (
    <div className='flex flex-1 flex-col gap-5'>
      <TranslatorToolPicker />
      <OutputCard value={outputContent} loading={translating} />
    </div>
  )
}

export default OutputSide
