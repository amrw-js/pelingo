import { EMPTY_LINE_REGEX, STRING_MATCH_REGEX, TEXT_MATCH_REGEX } from '../utils/presets'

interface ICandidates {
  content: { parts: { text: string }[] }
}
interface IGeminiResponse {
  data: {
    candidates: ICandidates[]
  }
}
export const adaptGeminiTranslationResponse = (response: IGeminiResponse) => {
  const { candidates = [] } = response.data
  const [{ content }] = candidates
  const [{ text = '' }] = content?.parts ?? []
  const jsonMatch = text.match(TEXT_MATCH_REGEX)
  const fallbackMatch = text.match(STRING_MATCH_REGEX)

  if (jsonMatch && jsonMatch[1]) return jsonMatch[1].replace(EMPTY_LINE_REGEX, '\n')

  if (fallbackMatch && fallbackMatch[1]) return fallbackMatch[1]

  return ''
}
