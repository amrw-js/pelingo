import cn from 'clsx'

import { useTranslatorContext } from '../../context/TranslatorContext'
import { AI_TOOLS } from '../../utils/constants'

const TranslatorToolPicker = () => {
  const { translationTool, setTranslationTool } = useTranslatorContext()

  const changeTool = (tool: string) => {
    setTranslationTool(tool)
  }

  return (
    <div className='flex w-full gap-4 border-b border-slate-200 dark:border-slate-700'>
      {AI_TOOLS.map(({ key, name, Icon }) => (
        <div
          key={key}
          role='button'
          tabIndex={0}
          className={cn(
            'group flex h-[2.625rem] cursor-pointer items-center justify-start gap-1 px-4 text-slate-900 transition-all dark:text-slate-100',
            translationTool === key && 'border-b-2 border-violet-400',
          )}
          onClick={() => changeTool(key)}
        >
          <Icon className='h-5 w-5 flex-shrink-0' />
          <span className='text-sm'>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default TranslatorToolPicker
