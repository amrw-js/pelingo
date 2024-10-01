import GeminiIcon from '../components/ui/Icons/Gemini'
import GptIcon from '../components/ui/Icons/Gpt'

export type languageOption = { key: string; name: string }

export const ENGLISH_OPTION = { key: 'EN', name: 'English' }

export const AUTO_DETECT_OPTION = {
  key: 'auto',
  name: 'Auto Detect',
}

export const GEMINI_TOOL = {
  key: 'gemini',
  name: 'Gemini',
  Icon: GeminiIcon,
}

export const GPT_TOOL = {
  key: 'gpt',
  name: 'GPT',
  Icon: GptIcon,
}

export const AI_TOOLS = [GEMINI_TOOL, GPT_TOOL]

export const LANGUAGES = [
  ENGLISH_OPTION,
  { key: 'AR', name: 'Arabic' },
  { key: 'BG', name: 'Bulgarian' },
  { key: 'CS', name: 'Czech' },
  { key: 'DA', name: 'Danish' },
  { key: 'DE', name: 'German' },
  { key: 'EL', name: 'Greek' },
  { key: 'ES', name: 'Spanish' },
  { key: 'ET', name: 'Estonian' },
  { key: 'FI', name: 'Finnish' },
  { key: 'FR', name: 'French' },
  { key: 'HU', name: 'Hungarian' },
  { key: 'ID', name: 'Indonesian' },
  { key: 'IT', name: 'Italian' },
  { key: 'JA', name: 'Japanese' },
  { key: 'KO', name: 'Korean' },
  { key: 'LT', name: 'Lithuanian' },
  { key: 'LV', name: 'Latvian' },
  { key: 'NB', name: 'Norwegian Bokmål' },
  { key: 'NL', name: 'Dutch' },
  { key: 'PL', name: 'Polish' },
  { key: 'PT', name: 'Portuguese (all Portuguese variants)' },
  { key: 'RO', name: 'Romanian' },
  { key: 'RU', name: 'Russian' },
  { key: 'SK', name: 'Slovak' },
  { key: 'SL', name: 'Slovenian' },
  { key: 'SV', name: 'Swedish' },
  { key: 'TR', name: 'Turkish' },
  { key: 'UK', name: 'Ukrainian' },
]

export const LANGUAGES_OPTIONS = [AUTO_DETECT_OPTION, ...LANGUAGES]
