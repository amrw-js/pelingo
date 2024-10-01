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
  const jsonMatch = text.match(/"text":\s*"(.*?)"/)

  if (jsonMatch && jsonMatch[1]) return jsonMatch[1].replace(/\\n/g, '\n')

  return ''
}
