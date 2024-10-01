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
  const jsonMatch = content.match(/"text":\s*"(.*?)"/)
  const fallbackMatch = content.match(/\s*"([^"]+)"/)

  if (jsonMatch && jsonMatch[1]) return jsonMatch[1].replace(/\\n/g, '\n')

  if (fallbackMatch && fallbackMatch[1]) return fallbackMatch[1]

  return ''
}
