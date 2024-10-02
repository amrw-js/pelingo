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

/**
 * Displays a toast error with a given message.
 * @param error The error object returned from an API request
 * @param messagePropName The name of the property in the error object which contains the error message
 * @returns void
 */
export const toastError = (error: IApiError, messagePropName: string = 'message'): void => {
  const message = errorCatchMessage(error, messagePropName) ?? error.message

  toast.error(message, { id: generateSlug(message?.slice(0, 20)) })
}
