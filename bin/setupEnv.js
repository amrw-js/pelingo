import readline from 'readline'

import { readFile, writeFile } from 'fs/promises'

// Create readline interface to ask questions in the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const questions = [
  { key: 'VITE_GEMINI_API_KEY', message: 'Enter Gemini API Key: ' },
  { key: 'VITE_GPT_API_KEY', message: 'Enter GBT API Key: ' },
]

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve))

const parseEnv = (envData) => {
  return envData.split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=')
    if (key && value) {
      acc[key] = value.trim()
    }
    return acc
  }, {})
}

async function main() {
  let currentEnv = {}

  try {
    const existingEnv = await readFile('.env', 'utf-8')
    currentEnv = parseEnv(existingEnv)
  } catch (err) {
    console.log('.env file does not exist, creating a new one...')
  }

  for (const question of questions) {
    const value = await askQuestion(`${question.message} (current: ${currentEnv[question.key] || 'not set'}): `)
    if (value) {
      currentEnv[question.key] = value
    }
  }

  const updatedEnv = Object.entries(currentEnv)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  await writeFile('.env', updatedEnv)

  console.log('.env file has been updated!')
  rl.close()
}

main().catch((err) => console.error('Error writing to .env file:', err))
