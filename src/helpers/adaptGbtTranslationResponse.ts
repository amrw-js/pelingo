import { STRING_MATCH_REGEX, TEXT_MATCH_REGEX } from '../utils/presets'

interface IChoice {
  message: {
    content: string
  }
}

interface IGbtResponse {
  choices: IChoice[]
}

export const adaptGbtTranslationResponse = (response: IGbtResponse) => {
  const { choices = [] } = response
  const [{ message }] = choices
  const { content = '' } = message
  const jsonMatch = content.match(TEXT_MATCH_REGEX)
  const fallbackMatch = content.match(STRING_MATCH_REGEX)

  if (jsonMatch && jsonMatch[1]) return jsonMatch[1].replace(/\\n/g, '\n')

  if (fallbackMatch && fallbackMatch[1]) return fallbackMatch[1]

  return ''
}
