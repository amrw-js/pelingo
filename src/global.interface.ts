export interface IApiKeys {
  geminiApiKey: string
  gbtApiKey: string
}

export interface IApiError {
  response?: {
    data: {
      [key: string]: unknown
    }
  }
  message?: string
}
