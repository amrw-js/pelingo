import cn from 'clsx'
import { ChangeEvent, FC } from 'react'

import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton'

interface ITextAreaProps {
  label?: string
  id?: string
  placeholder?: string
  value: string
  className?: string
  hideCopyButton?: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<ITextAreaProps> = (props) => {
  const { label, id, placeholder, value, className, hideCopyButton, onChange } = props

  return (
    <>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium leading-6 text-slate-700 dark:text-slate-300'>
          {label}
        </label>
      )}

      <div className='relative h-full'>
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            'h-full min-h-20 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            className,
          )}
        />
        <CopyToClipboardButton text={value} hidden={!value || hideCopyButton} />
      </div>
    </>
  )
}

export default TextArea
