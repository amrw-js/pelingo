import axios, { AxiosInstance } from 'axios'

const GOOGLE_APIS_URL = import.meta.env.VITE_GOOGLE_APIS_URL

export const googleClient: AxiosInstance = axios.create({
  baseURL: GOOGLE_APIS_URL,
})
