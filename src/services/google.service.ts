import { googleClient } from '../api/apiClients'
import { IApiError } from '../global.interface'
import { adaptGeminiTranslationResponse } from '../helpers/adaptGeminiTranslationResponse'
import { toastError } from '../utils/toastError'

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

class GoogleService {
  async generateGeminiContent(content: string, apiKey: string): Promise<unknown> {
    try {
      return await googleClient
        .post(`v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey || GEMINI_API_KEY}`, {
          contents: [
            {
              parts: [{ text: content }],
            },
          ],
        })
        .then(adaptGeminiTranslationResponse)
    } catch (error) {
      toastError(error as IApiError)
      return await Promise.reject(error)
    }
  }
}

export default new GoogleService()
