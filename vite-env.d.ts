/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string
    readonly VITE_MODEL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
