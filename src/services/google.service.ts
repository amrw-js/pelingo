import { googleClient } from '../api/apiClients'
import { adaptGeminiTranslationResponse } from '../helpers/adaptGeminiTranslationResponse'

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

class GoogleService {
  async generateGeminiContent(content: string): Promise<unknown> {
    try {
      return await googleClient
        .post(`v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
          contents: [
            {
              parts: [{ text: content }],
            },
          ],
        })
        .then(adaptGeminiTranslationResponse)
    } catch (error) {
      return await Promise.reject(error)
    }
  }
}

export default new GoogleService()
