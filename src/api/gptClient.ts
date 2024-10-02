import OpenAI from 'openai'

const GBT_API_KEY = import.meta.env.VITE_GPT_API_KEY

export const openaiClient = new OpenAI({
  apiKey: GBT_API_KEY,
  dangerouslyAllowBrowser: true,
})
