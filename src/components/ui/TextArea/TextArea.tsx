import cn from 'clsx'
import { ChangeEvent, FC } from 'react'

interface ITextAreaProps {
  label?: string
  id?: string
  placeholder?: string
  value: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<ITextAreaProps> = (props) => {
  const { label, id, placeholder, value, className, onChange } = props
  return (
    <>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium leading-6 text-slate-700 dark:text-white'>
          {label}
        </label>
      )}

      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          'h-full min-h-20 w-full resize-none rounded-md border px-4 py-2 shadow-sm outline-none transition-all duration-300 dark:focus:ring-inset',
          className,
        )}
      />
    </>
  )
}

export default TextArea
