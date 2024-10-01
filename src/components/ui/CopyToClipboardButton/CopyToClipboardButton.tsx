import { DocumentDuplicateIcon } from '@heroicons/react/16/solid'
import cn from 'clsx'
import { FC } from 'react'
import toast from 'react-hot-toast'

import { toastError } from '../../../utils/toastError'

interface ICopyToClipboardButton {
  hidden?: boolean
  text: string
  className?: string
}
const CopyToClipboardButton: FC<ICopyToClipboardButton> = (props) => {
  const { hidden, text, className } = props

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Copied', { id: 'copy-to-clipboard' })
    } catch {
      toastError({ message: 'Failed to copy' })
    }
  }

  return (
    <button
      tabIndex={0}
      onClick={copyToClipboard}
      className={cn(
        'absolute bottom-2 right-0 -translate-x-1/2 -translate-y-1/2 rounded-md bg-blue-600 px-2 py-1 text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400',
        hidden && 'opacity-0',
        className,
      )}
      title='Copy to clipboard'
    >
      <DocumentDuplicateIcon className='size-4' />
    </button>
  )
}

export default CopyToClipboardButton
