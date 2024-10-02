import { openaiClient } from '../api/gptClient'
import { IApiError } from '../global.interface'
import { adaptGbtTranslationResponse } from '../helpers/adaptGbtTranslationResponse'
import { toastError } from '../utils/toastError'

class GbtService {
  async generateGbtContent(content: string, apiKey: string): Promise<unknown> {
    if (apiKey) {
      openaiClient.apiKey = apiKey
    }

    try {
      return await openaiClient.chat.completions
        .create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: content,
                },
              ],
            },
          ],
        })
        .then(adaptGbtTranslationResponse)
    } catch (error) {
      toastError(error as IApiError)
      return await Promise.reject(error)
    }
  }
}

export default new GbtService()
