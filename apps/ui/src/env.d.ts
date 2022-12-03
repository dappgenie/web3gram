/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GCP_API_KEY: string
  readonly VITE_MEILISEARCH_HOST: string
  readonly VITE_MEILISEARCH_API_KEY: string
  readonly VITE_API_URL: string
  
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
