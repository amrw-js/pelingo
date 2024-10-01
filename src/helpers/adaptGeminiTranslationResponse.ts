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
  const extractedText = text.replace('```json\n', '').replace('\n```', '')
  const parsedObject = JSON.parse(extractedText)
  const innerText = parsedObject.text

  return innerText
}
