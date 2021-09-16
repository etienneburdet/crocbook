import { dev } from '$app/env'

export const API_KEY: string = dev
  ? import.meta.env.VITE_API_KEY
  : process.env.API_KEY;
