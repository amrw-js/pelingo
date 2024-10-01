import { FC } from 'react'

import { AI_TOOLS } from '../../utils/constants'

interface IToolPlaceholderProps {
  translationTool: string
}

const ToolPlaceholder: FC<IToolPlaceholderProps> = (props) => {
  const { translationTool } = props
  const { Icon, name } = AI_TOOLS.find(({ key }) => key === translationTool) ?? {}

  return (
    <div className='bg-custom-gradient dark:bg-custom-gradient-dark flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[12px] shadow-md'>
      <div className='bg-custom-gradient dark:bg-custom-gradient-dark rounded-md p-3 shadow-md backdrop-blur-lg'>
        {Icon && <Icon className='!size-9 flex-shrink-0 dark:text-slate-100' />}
      </div>
      <span className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Translate using {name}</span>
      <span className='text-sm text-slate-500 dark:text-slate-400'>Start typing to translate</span>
    </div>
  )
}

export default ToolPlaceholder
