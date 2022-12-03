/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3_STORAGE_API: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
