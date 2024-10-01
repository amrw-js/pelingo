import { ChangeEvent, FC } from 'react'

interface ITextAreaProps {
  label?: string
  id?: string
  placeholder?: string
  value: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<ITextAreaProps> = (props) => {
  const { label, id, placeholder, value, onChange } = props
  return (
    <>
      <label htmlFor={id} className='block text-sm font-medium leading-6 text-slate-700 dark:text-white'>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={6}
        onChange={onChange}
        className='h-full min-h-20 w-full resize-none rounded-md border px-4 py-2 shadow-sm outline-none transition-all duration-300 dark:focus:ring-inset'
      />
    </>
  )
}

export default TextArea
