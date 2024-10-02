import { Button } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'
import { ChangeEvent, type FC, FormEvent, useState } from 'react'

import Input from '../ui/Input/Input'
import Modal from '../ui/Modal/Modal'

export interface ISubmitData {
  geminiApiKey: string
  gbtApiKey: string
}

interface IApiKeysModalProps {
  open: boolean
  onSubmit: (data: ISubmitData) => void
  onClose: () => void
}

const ApiKeysModal: FC<IApiKeysModalProps> = (props) => {
  const { open, onSubmit, onClose } = props

  const [geminiApiKey, setGeminiApiKey] = useState('')
  const [gbtApiKey, setGbtApiKey] = useState('')

  const changeGeminiApiKey = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setGeminiApiKey(value)
  }

  const changeGbtApiKey = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setGbtApiKey(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault()
    onSubmit({ geminiApiKey, gbtApiKey })
  }

  return (
    <Modal open={open} onClose={onClose} verticallyCentered wrapperClassNames='w-1/4 w-[28.125rem]'>
      <div className='flex flex-col items-center p-8 text-center'>
        <div className='flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-orange-100 dark:bg-orange-600'>
          <ExclamationTriangleIcon className='h-9 w-9 text-orange-600 dark:text-orange-200' />
        </div>
        <div className='mt-2'>
          <p className='text-base font-semibold text-gray-900 dark:text-white'>Add Your API Keys</p>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            Adding your API keys is required to use the app. Please provide valid keys for the necessary services.
          </p>
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='my-4 flex w-full flex-col gap-4 self-start'>
            <Input
              required
              label='Gemini API Key'
              id='apiKey'
              hideCopyButton
              placeholder='Enter your API Key'
              value={geminiApiKey}
              onChange={changeGeminiApiKey}
            />
            <Input
              required
              label='OpenAI API Key'
              id='apiKey'
              hideCopyButton
              placeholder='Enter your API Key'
              value={gbtApiKey}
              onChange={changeGbtApiKey}
            />
          </div>
          <p className='mt-4 self-start text-left text-xs text-gray-500 dark:text-gray-400'>
            <strong>Important:</strong> All API keys are secured and are end-to-end encrypted. They are not saved
            anywhere.
          </p>
          <div className='flex w-full items-center justify-end gap-2 pt-5'>
            <Button
              type='submit'
              tabIndex={0}
              className='w-1/2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50'
            >
              Save Keys
            </Button>
            <Button
              tabIndex={1}
              onClick={onClose}
              className='w-1/2 rounded-lg border-0 bg-transparent px-4 py-2 text-xs text-gray-700 transition duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:text-gray-300'
            >
              Continue without API Keys
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default ApiKeysModal
