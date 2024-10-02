import { openaiClient } from '../api/gptClient'
import { adaptGbtTranslationResponse } from '../helpers/adaptGbtTranslationResponse'

class GbtService {
  async generateGbtContent(content: string): Promise<unknown> {
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
      return await Promise.reject(error)
    }
  }
}

export default new GbtService()
