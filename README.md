<p align="center">
  <a href="https://github.com/amrw-js/pelingo" rel="noopener" target="_blank"><img width="150" height="150" src="https://i.ibb.co/BnZjP2h/logo.png" alt="Pelingo logo"></a>
</p>

<h1 align="center">Pelingo Translate</h1>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-repo/your-project/blob/main/LICENSE)

</div>

## Overview

**Pelingo** This AI Translator is powered by GPT and Gemini APIs, providing an intelligent solution for automatic language detection and translation. It also supports clipboard copying, allowing users to easily switch between languages and copy translated text.

### Features:
- **Auto Language Detection:** Automatically detects the source language without requiring user input, simplifying the translation process.
- **Swap Between Languages:** Seamlessly switch between the detected language and the target language, offering a smooth and intuitive user experience.
- **Copy to Clipboard:** Quickly copy the translated text to your clipboard with a single click, making it easy to paste the results into any application.

## Demo

Check out the live demo of **Pelingo** [here](https://pelingo-nitc.vercel.app).

Alternatively, you can run the project locally to see it in action.


## Requirements

- **Node.js**: v20 or higher is required to run this project.
- It's highly recommended to use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions.
- **API Keys**: You'll need the following API keys to run the project:
  - [OpenAI API Key](https://platform.openai.com/signup)
  - [Gemini API Key](https://aistudio.google.com)


## Getting Started

To get started you need to install the required dependencies:

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

This following command will prompt you to enter your OpenAI and Gemini API keys in the terminal. Make sure to have your API keys ready before running this command.


#### Using npm:
```bash
npm run prestart
```

#### Using yarn:
```bash
yarn prestart
```

Alternatively, you can manually set the API keys in the .env file. Open the .env file and add them to following variables:

```bash
VITE_GPT_API_KEY=<API_KEY>
VITE_GEMINI_API_KEY=<API_KEY>
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.