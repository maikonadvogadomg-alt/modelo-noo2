# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Mobile App (SK Code)
- **Path**: `artifacts/mobile/`
- **Type**: Expo (React Native)
- **Preview path**: `/mobile/`
- **Description**: AI-powered mobile app adapted from PWA with 4 environments:
  - **Code Hub**: Virtual file system, ZIP import/export, GitHub push/pull via API, code editor, AI assistant
  - **Assistente JurÃ­dico**: Document import, legal AI, save notes, export text
  - **Chat Livre**: Free AI chat with voice input/output
  - **ConfiguraÃ§Ãµes**: Multi-provider API keys (OpenAI, Groq, Anthropic, Gemini, OpenRouter), model selection, GitHub config, voice language

### API Server
- **Path**: `artifacts/api-server/`
- **Type**: Express 5 + TypeScript

## Key Commands

- `pnpm run typecheck` â full typecheck across all packages
- `pnpm run build` â typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` â regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` â push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` â run API server locally
- `pnpm --filter @workspace/mobile run dev` â run mobile app

## Mobile App Services

- **AI**: Multi-provider (OpenAI, Groq, Anthropic, Gemini, OpenRouter) - user provides own API keys stored in AsyncStorage
- **Voice**: expo-speech (TTS) + expo-av (recording) + Whisper API (transcription)
- **Files**: expo-document-picker + expo-file-system + expo-sharing + JSZip
- **GitHub**: REST API via fetch calls (token-based auth)

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
