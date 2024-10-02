import cn from 'clsx'
import { ChangeEvent, FC } from 'react'

import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton'
import InputMaxLength from '../InputMaxLength/InputMaxLength'

interface IInputProps {
  label?: string
  id?: string
  type?: string
  placeholder?: string
  value: string
  className?: string
  hideCopyButton?: boolean
  maxLength?: number
  required?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInputProps> = (props) => {
  const {
    label,
    id,
    type = 'text',
    placeholder,
    value,
    className,
    hideCopyButton,
    maxLength,
    required,
    onChange,
  } = props

  return (
    <div className='flex w-full items-center gap-2'>
      {label && (
        <label tabIndex={-1} htmlFor={id} className='text-xs font-medium leading-5 text-slate-700 dark:text-slate-300'>
          {label}
        </label>
      )}
      <div className='relative flex h-full flex-1 flex-grow'>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          required={required}
          onChange={onChange}
          className={cn(
            'h-8 min-h-8 w-full flex-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            className,
          )}
        />
        {!hideCopyButton && <CopyToClipboardButton text={value} hidden={!value} />}
        {maxLength && value && <InputMaxLength maxLength={maxLength} charCount={value.length} />}
      </div>
    </div>
  )
}

export default Input
