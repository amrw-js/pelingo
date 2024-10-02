import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import cn from 'clsx'
import { FC, ReactNode } from 'react'

interface IModalProps {
  open: boolean
  dialogClassName?: string
  wrapperClassNames?: string
  children: ReactNode
  verticallyCentered?: boolean
  onClose?: () => void
}

const Modal: FC<IModalProps> = (props) => {
  const { open, dialogClassName, wrapperClassNames, children, verticallyCentered, onClose = () => {} } = props

  return (
    <Dialog open={open} as='div' className={cn('relative z-10', dialogClassName)} onClose={onClose}>
      <DialogBackdrop className='fixed inset-0 bg-black/30' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-[15vh]'>
        <TransitionChild
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <DialogPanel
            className={cn(
              'xs:!max-w-[28.125rem] mx-auto !w-auto transform rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:bg-gray-800',
              verticallyCentered && 'flex items-center justify-center',
              wrapperClassNames,
            )}
          >
            {children}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  )
}

export default Modal
