import toast from 'react-hot-toast'

import { generateSlug } from './generateSlug'

interface IApiError {
  response?: {
    data: {
      [key: string]: unknown
    }
  }
  message?: string
}
export const errorCatchMessage = (error: IApiError, messagePropName = 'message'): string => {
  if (error?.response?.data) {
    const errorMsg = error.response.data[messagePropName]
    return Array.isArray(errorMsg) ? errorMsg[0] : errorMsg
  }

  return error?.message ?? ''
}

export const toastError = (error: IApiError, messagePropName: string = 'message'): void => {
  const message = errorCatchMessage(error, messagePropName) ?? error.message

  toast.error(message, { id: generateSlug(message?.slice(0, 20)) })
}
