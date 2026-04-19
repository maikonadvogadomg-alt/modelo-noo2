# PLANO DO PROJETO: HTML/CSS/JS (cópia)

> Gerado automaticamente pelo SK Code Editor em 16/04/2026, 19:14:18
> **228 arquivo(s)** | **~72.462 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript
- **Versao:** 0.0.0

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
HTML/CSS/JS (cópia)/
├── artifacts/
│   ├── api-server/
│   │   ├── .replit-artifact/
│   │   │   └── artifact.toml
│   │   ├── dist/
│   │   │   ├── pino-file.mjs
│   │   │   ├── pino-file.mjs.map
│   │   │   ├── pino-pretty.mjs
│   │   │   ├── pino-pretty.mjs.map
│   │   │   ├── pino-worker.mjs
│   │   │   ├── pino-worker.mjs.map
│   │   │   ├── thread-stream-worker.mjs
│   │   │   └── thread-stream-worker.mjs.map
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── .gitkeep
│   │   │   │   └── logger.ts
│   │   │   ├── middlewares/
│   │   │   │   └── .gitkeep
│   │   │   ├── routes/
│   │   │   │   ├── health.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── terminal.ts
│   │   │   ├── app.ts
│   │   │   └── index.ts
│   │   ├── build.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── mobile/
│   │   ├── .expo/
│   │   │   ├── types/
│   │   │   │   └── router.d.ts
│   │   │   ├── devices.json
│   │   │   └── README.md
│   │   ├── .replit-artifact/
│   │   │   └── artifact.toml
│   │   ├── app/
│   │   │   ├── (tabs)/
│   │   │   │   ├── _layout.tsx
│   │   │   │   ├── chat.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── legal.tsx
│   │   │   │   └── settings.tsx
│   │   │   ├── _layout.tsx
│   │   │   └── +not-found.tsx
│   │   ├── components/
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ErrorFallback.tsx
│   │   │   ├── KeyboardAwareScrollViewCompat.tsx
│   │   │   └── VoiceButton.tsx
│   │   ├── constants/
│   │   │   └── colors.ts
│   │   ├── contexts/
│   │   │   └── AIContext.tsx
│   │   ├── hooks/
│   │   │   └── useColors.ts
│   │   ├── scripts/
│   │   │   └── build.js
│   │   ├── server/
│   │   │   ├── templates/
│   │   │   │   └── landing-page.html
│   │   │   └── serve.js
│   │   ├── services/
│   │   │   ├── ai.ts
│   │   │   ├── files.ts
│   │   │   └── voice.ts
│   │   ├── .gitignore
│   │   ├── app.json
│   │   ├── babel.config.js
│   │   ├── eas.json
│   │   ├── expo-env.d.ts
│   │   ├── metro.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── mockup-sandbox/
│       ├── .replit-artifact/
│       │   └── artifact.toml
│       ├── src/
│       │   ├── .generated/
│       │   │   └── mockup-components.ts
│       │   ├── components/
│       │   │   └── ui/
│       │   │       ├── accordion.tsx
│       │   │       ├── alert-dialog.tsx
│       │   │       ├── alert.tsx
│       │   │       ├── aspect-ratio.tsx
│       │   │       ├── avatar.tsx
│       │   │       ├── badge.tsx
│       │   │       ├── breadcrumb.tsx
│       │   │       ├── button-group.tsx
│       │   │       ├── button.tsx
│       │   │       ├── calendar.tsx
│       │   │       ├── card.tsx
│       │   │       ├── carousel.tsx
│       │   │       ├── chart.tsx
│       │   │       ├── checkbox.tsx
│       │   │       ├── collapsible.tsx
│       │   │       ├── command.tsx
│       │   │       ├── context-menu.tsx
│       │   │       ├── dialog.tsx
│       │   │       ├── drawer.tsx
│       │   │       ├── dropdown-menu.tsx
│       │   │       ├── empty.tsx
│       │   │       ├── field.tsx
│       │   │       ├── form.tsx
│       │   │       ├── hover-card.tsx
│       │   │       ├── input-group.tsx
│       │   │       ├── input-otp.tsx
│       │   │       ├── input.tsx
│       │   │       ├── item.tsx
│       │   │       ├── kbd.tsx
│       │   │       ├── label.tsx
│       │   │       ├── menubar.tsx
│       │   │       ├── navigation-menu.tsx
│       │   │       ├── pagination.tsx
│       │   │       ├── popover.tsx
│       │   │       ├── progress.tsx
│       │   │       ├── radio-group.tsx
│       │   │       ├── resizable.tsx
│       │   │       ├── scroll-area.tsx
│       │   │       ├── select.tsx
│       │   │       ├── separator.tsx
│       │   │       ├── sheet.tsx
│       │   │       ├── sidebar.tsx
│       │   │       ├── skeleton.tsx
│       │   │       ├── slider.tsx
│       │   │       ├── sonner.tsx
│       │   │       ├── spinner.tsx
│       │   │       ├── switch.tsx
│       │   │       ├── table.tsx
│       │   │       ├── tabs.tsx
│       │   │       ├── textarea.tsx
│       │   │       ├── toast.tsx
│       │   │       ├── toaster.tsx
│       │   │       ├── toggle-group.tsx
│       │   │       ├── toggle.tsx
│       │   │       └── tooltip.tsx
│       │   ├── hooks/
│       │   │   ├── use-mobile.tsx
│       │   │   └── use-toast.ts
│       │   ├── lib/
│       │   │   └── utils.ts
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── main.tsx
│       ├── components.json
│       ├── index.html
│       ├── mockupPreviewPlugin.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── attached_assets/
│   ├── audio-playback-worklet_1776248569793.js
│   ├── audio-playback-worklet-copia_1776249600643.txt
│   ├── audio-playback-worklet-copia_1776251037721.txt
│   ├── audio-playback-worklet-copia_1776270104557.txt
│   ├── audio-utils_1776248569768.ts
│   ├── code-assistant_1776249600581.txt
│   ├── code-assistant_1776251037764.txt
│   ├── code-assistant.tsx_(3)_1776248569847.txt
│   ├── code-assistant.tsx_(3)_1776249600851.txt
│   ├── comunicacoes-cnj-copia_1776249600668.txt
│   ├── comunicacoes-cnj-copia_1776251037695.txt
│   ├── comunicacoes-cnj.tsx_1776248569874.txt
│   ├── comunicacoes-cnj.tsx_1776249600777.txt
│   ├── consulta-pdpj.tsx_1776248569898.txt
│   ├── consulta-pdpj.tsx_1776249600812.txt
│   ├── db_1776249600714.txt
│   ├── DOC_PROJETO_(1)_1776245274305.md
│   ├── DOC_PROJETO_(2)_1776245274283.md
│   ├── DOC_PROJETO_(3)_1776245274259.md
│   ├── index_(3)_1776248569745.ts
│   ├── index-copia.txr_1776249600614.txt
│   ├── index-copia.txr_1776251037740.txt
│   ├── legal-assistant-copia_1776249600431.txt
│   ├── login-copia.txr_1776249600740.txt
│   ├── outros_instruções__1776245274325.zip
│   ├── painel-processos.tsx_1776248569665.txt
│   ├── painel-processos.tsx_1776249600501.txt
│   ├── Pasted--Projetos-PLANO-md-Sync-Rodar-Fechar-todos-979596949392_1776248752212.txt
│   ├── Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776272026349.txt
│   ├── Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776273035272.txt
│   ├── Pasted-PLANO-DO-PROJETO-HTML-CSS-JS-Gerado-automaticamente-pel_1776240421033.txt
│   ├── PLANO_(2)_1776251037609.md
│   ├── RELATORIO_CORRECOES_(2)_1776251037667.md
│   ├── robo-djen-copia_(1)_1776249600557.txt
│   ├── robo-djen-copia_1776249600521.txt
│   ├── robo-djen.tsx_1776251037798.txt
│   ├── tiptap-editor.tsx_(1)_1776248569820.txt
│   ├── tiptap-editor.tsx_(1)_1776249600873.txt
│   ├── token-generator-copia_(1)_1776249600690.txt
│   ├── token-generator-copia_1776249600538.txt
│   ├── token-generator-copia_1776251037784.txt
│   ├── tramitacao.tsx_(1)_1776251037814.txt
│   ├── useAudioPlayback_1776248569720.ts
│   └── useVoiceRecorder_1776248569700.ts
├── lib/
│   ├── api-client-react/
│   │   ├── dist/
│   │   │   ├── generated/
│   │   │   │   ├── api.d.ts
│   │   │   │   ├── api.d.ts.map
│   │   │   │   ├── api.schemas.d.ts
│   │   │   │   └── api.schemas.d.ts.map
│   │   │   ├── custom-fetch.d.ts
│   │   │   ├── custom-fetch.d.ts.map
│   │   │   ├── index.d.ts
│   │   │   └── index.d.ts.map
│   │   ├── src/
│   │   │   ├── generated/
│   │   │   │   ├── api.schemas.ts
│   │   │   │   └── api.ts
│   │   │   ├── custom-fetch.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── api-spec/
│   │   ├── openapi.yaml
│   │   ├── orval.config.ts
│   │   └── package.json
│   ├── api-zod/
│   │   ├── dist/
│   │   │   ├── generated/
│   │   │   │   ├── types/
│   │   │   │   │   ├── healthStatus.d.ts
│   │   │   │   │   ├── healthStatus.d.ts.map
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   └── index.d.ts.map
│   │   │   │   ├── api.d.ts
│   │   │   │   └── api.d.ts.map
│   │   │   ├── index.d.ts
│   │   │   └── index.d.ts.map
│   │   ├── src/
│   │   │   ├── generated/
│   │   │   │   ├── types/
│   │   │   │   │   ├── healthStatus.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── api.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   └── db/
│       ├── dist/
│       │   ├── schema/
│       │   │   ├── index.d.ts
│       │   │   └── index.d.ts.map
│       │   ├── index.d.ts
│       │   └── index.d.ts.map
│       ├── src/
│       │   ├── schema/
│       │   │   └── index.ts
│       │   └── index.ts
│       ├── drizzle.config.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── tsconfig.tsbuildinfo
├── scripts/
│   ├── src/
│   │   └── hello.ts
│   ├── package.json
│   ├── post-merge.sh
│   └── tsconfig.json
├── .gitignore
├── .npmrc
├── .replit
├── .replitignore
├── MANUAL_APK.md
├── package.json
├── PLANO_RECUPERACAO.md
├── PLANO.md
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── replit.md
├── SISTEMA.md
├── tsconfig.base.json
└── tsconfig.json
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript
- **Todos os pacotes (2):** typescript, prettier

---

## ROTAS DA API (endpoints detectados automaticamente)

```
USE    /api  (em artifacts/api-server/src/app.ts)
GET    /healthz  (em artifacts/api-server/src/routes/health.ts)
POST   /terminal/exec  (em artifacts/api-server/src/routes/terminal.ts)
GET    /terminal/cwd  (em artifacts/api-server/src/routes/terminal.ts)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run preinstall    # sh -c 'rm -f package-lock.json yarn.lock; case "$npm_config_user_agent" in pnpm/*) ;; *) echo "Use pnpm instead" >&2; exit 1 ;; esac'
npm run build         # pnpm run typecheck && pnpm -r --if-present run build
npm run typecheck:libs  # tsc --build
npm run typecheck     # pnpm run typecheck:libs && pnpm -r --filter "./artifacts/**" --filter "./scripts" --if-present run typecheck
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
LOG_LEVEL=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPLIT_INTERNAL_APP_DOMAIN=seu_valor_aqui
REPLIT_DEV_DOMAIN=seu_valor_aqui
EXPO_PUBLIC_DOMAIN=seu_valor_aqui
REPL_ID=seu_valor_aqui
EXPO_PUBLIC_REPL_ID=seu_valor_aqui
PORT=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `artifacts/api-server/src/app.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/index.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/routes/index.ts` — Ponto de entrada do backend
- `artifacts/mobile/app/(tabs)/index.tsx` — Arquivo principal
- `artifacts/mockup-sandbox/index.html` — Arquivo principal
- `artifacts/mockup-sandbox/src/App.tsx` — Componente raiz do frontend
- `artifacts/mockup-sandbox/src/main.tsx` — Arquivo principal
- `lib/api-client-react/src/index.ts` — Arquivo principal
- `lib/api-zod/src/generated/types/index.ts` — Arquivo principal
- `lib/api-zod/src/index.ts` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`.gitignore`** _(50 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`.npmrc`** _(3 linhas)_
Arquivo NPMRC — parte do projeto.

**`.replit`** _(41 linhas)_
Arquivo REPLIT — parte do projeto.

**`.replitignore`** _(6 linhas)_
Arquivo REPLITIGNORE — parte do projeto.

**`MANUAL_APK.md`** _(171 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`PLANO.md`** _(1643 linhas)_
Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.

**`PLANO_RECUPERACAO.md`** _(80 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README.md`** _(1 linha)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`SISTEMA.md`** _(98 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`package.json`** _(17 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-lock.yaml`** _(11793 linhas)_
Arquivo YAML — parte do projeto.

**`pnpm-workspace.yaml`** _(159 linhas)_
Arquivo YAML — parte do projeto.

**`replit.md`** _(52 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`tsconfig.base.json`** _(26 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`tsconfig.json`** _(17 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `attached_assets/`
> Pasta 'attached_assets' — agrupamento de arquivos relacionados.

**`DOC_PROJETO_(1)_1776245274305.md`** _(420 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`DOC_PROJETO_(2)_1776245274283.md`** _(335 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`DOC_PROJETO_(3)_1776245274259.md`** _(1349 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`PLANO_(2)_1776251037609.md`** _(1462 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`Pasted--Projetos-PLANO-md-Sync-Rodar-Fechar-todos-979596949392_1776248752212.txt`** _(1249 linhas)_
Arquivo TXT — parte do projeto.

**`Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776272026349.txt`** _(86 linhas)_
Arquivo TXT — parte do projeto.

**`Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776273035272.txt`** _(98 linhas)_
Arquivo TXT — parte do projeto.

**`Pasted-PLANO-DO-PROJETO-HTML-CSS-JS-Gerado-automaticamente-pel_1776240421033.txt`** _(596 linhas)_
Arquivo TXT — parte do projeto.

**`RELATORIO_CORRECOES_(2)_1776251037667.md`** _(142 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`audio-playback-worklet-copia_1776249600643.txt`** _(113 linhas)_
Arquivo TXT — parte do projeto.

**`audio-playback-worklet-copia_1776251037721.txt`** _(113 linhas)_
Arquivo TXT — parte do projeto.

**`audio-playback-worklet-copia_1776270104557.txt`** _(113 linhas)_
Arquivo TXT — parte do projeto.

**`audio-playback-worklet_1776248569793.js`** _(113 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`audio-utils_1776248569768.ts`** _(37 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`code-assistant.tsx_(3)_1776248569847.txt`** _(1000 linhas)_
Arquivo TXT — parte do projeto.

**`code-assistant.tsx_(3)_1776249600851.txt`** _(1000 linhas)_
Arquivo TXT — parte do projeto.

**`code-assistant_1776249600581.txt`** _(1000 linhas)_
Arquivo TXT — parte do projeto.

**`code-assistant_1776251037764.txt`** _(1000 linhas)_
Arquivo TXT — parte do projeto.

**`comunicacoes-cnj-copia_1776249600668.txt`** _(403 linhas)_
Arquivo TXT — parte do projeto.

**`comunicacoes-cnj-copia_1776251037695.txt`** _(403 linhas)_
Arquivo TXT — parte do projeto.

**`comunicacoes-cnj.tsx_1776248569874.txt`** _(403 linhas)_
Arquivo TXT — parte do projeto.

**`comunicacoes-cnj.tsx_1776249600777.txt`** _(403 linhas)_
Arquivo TXT — parte do projeto.

**`consulta-pdpj.tsx_1776248569898.txt`** _(671 linhas)_
Arquivo TXT — parte do projeto.

**`consulta-pdpj.tsx_1776249600812.txt`** _(671 linhas)_
Arquivo TXT — parte do projeto.

**`db_1776249600714.txt`** _(2 linhas)_
Arquivo TXT — parte do projeto.

**`index-copia.txr_1776249600614.txt`** _(46 linhas)_
Arquivo TXT — parte do projeto.

**`index-copia.txr_1776251037740.txt`** _(46 linhas)_
Arquivo TXT — parte do projeto.

**`index_(3)_1776248569745.ts`** _(46 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`legal-assistant-copia_1776249600431.txt`** _(5404 linhas)_
Arquivo TXT — parte do projeto.

**`login-copia.txr_1776249600740.txt`** _(100 linhas)_
Arquivo TXT — parte do projeto.

**`outros_instruções__1776245274325.zip`** _(4176 linhas)_
Arquivo ZIP — parte do projeto.

**`painel-processos.tsx_1776248569665.txt`** _(758 linhas)_
Arquivo TXT — parte do projeto.

**`painel-processos.tsx_1776249600501.txt`** _(758 linhas)_
Arquivo TXT — parte do projeto.

**`robo-djen-copia_(1)_1776249600557.txt`** _(1053 linhas)_
Arquivo TXT — parte do projeto.

**`robo-djen-copia_1776249600521.txt`** _(1053 linhas)_
Arquivo TXT — parte do projeto.

**`robo-djen.tsx_1776251037798.txt`** _(1053 linhas)_
Arquivo TXT — parte do projeto.

**`tiptap-editor.tsx_(1)_1776248569820.txt`** _(542 linhas)_
Arquivo TXT — parte do projeto.

**`tiptap-editor.tsx_(1)_1776249600873.txt`** _(542 linhas)_
Arquivo TXT — parte do projeto.

**`token-generator-copia_(1)_1776249600690.txt`** _(450 linhas)_
Arquivo TXT — parte do projeto.

**`token-generator-copia_1776249600538.txt`** _(450 linhas)_
Arquivo TXT — parte do projeto.

**`token-generator-copia_1776251037784.txt`** _(450 linhas)_
Arquivo TXT — parte do projeto.

**`tramitacao.tsx_(1)_1776251037814.txt`** _(828 linhas)_
Arquivo TXT — parte do projeto.

**`useAudioPlayback_1776248569720.ts`** _(106 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'audioplayback_1776248569720'.

**`useVoiceRecorder_1776248569700.ts`** _(53 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicerecorder_1776248569700'.

---

### 📁 `scripts/`
> Pasta 'scripts' — agrupamento de arquivos relacionados.

**`package.json`** _(15 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`post-merge.sh`** _(5 linhas)_
Arquivo SH — parte do projeto.

**`tsconfig.json`** _(10 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(127 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(33 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/mobile/`
> Pasta 'mobile' — agrupamento de arquivos relacionados.

**`.gitignore`** _(42 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`app.json`** _(47 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`babel.config.js`** _(7 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`eas.json`** _(24 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`expo-env.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`metro.config.js`** _(4 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(68 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/mockup-sandbox/`
> Pasta 'mockup-sandbox' — agrupamento de arquivos relacionados.

**`components.json`** _(22 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(32 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`mockupPreviewPlugin.ts`** _(181 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(75 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(17 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(73 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `lib/api-client-react/`
> Pasta 'api-client-react' — agrupamento de arquivos relacionados.

**`package.json`** _(16 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `lib/api-spec/`
> Pasta 'api-spec' — agrupamento de arquivos relacionados.

**`openapi.yaml`** _(37 linhas)_
Arquivo YAML — parte do projeto.

**`orval.config.ts`** _(73 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(12 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `lib/api-zod/`
> Pasta 'api-zod' — agrupamento de arquivos relacionados.

**`package.json`** _(13 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(12 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `lib/db/`
> Pasta 'db' — agrupamento de arquivos relacionados.

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`package.json`** _(26 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `scripts/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`hello.ts`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(33 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `artifacts/api-server/dist/`
> Codigo compilado/gerado automaticamente — NAO edite diretamente.

**`pino-file.mjs`** _(4351 linhas)_
Arquivo MJS — parte do projeto.

**`pino-file.mjs.map`** _(8 linhas)_
Arquivo MAP — parte do projeto.

**`pino-pretty.mjs`** _(3312 linhas)_
Arquivo MJS — parte do projeto.

**`pino-pretty.mjs.map`** _(8 linhas)_
Arquivo MAP — parte do projeto.

**`pino-worker.mjs`** _(4707 linhas)_
Arquivo MJS — parte do projeto.

**`pino-worker.mjs.map`** _(8 linhas)_
Arquivo MAP — parte do projeto.

**`thread-stream-worker.mjs`** _(229 linhas)_
Arquivo MJS — parte do projeto.

**`thread-stream-worker.mjs.map`** _(8 linhas)_
Arquivo MAP — parte do projeto.

---

### 📁 `artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(26 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/mobile/.expo/`
> Pasta '.expo' — agrupamento de arquivos relacionados.

**`README.md`** _(14 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`devices.json`** _(4 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

---

### 📁 `artifacts/mobile/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(28 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `artifacts/mobile/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`+not-found.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`_layout.tsx`** _(63 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

---

### 📁 `artifacts/mobile/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`ChatMessage.tsx`** _(225 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`ErrorBoundary.tsx`** _(55 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`ErrorFallback.tsx`** _(279 linhas)_
Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.

**`KeyboardAwareScrollViewCompat.tsx`** _(30 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`VoiceButton.tsx`** _(157 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

---

### 📁 `artifacts/mobile/constants/`
> Pasta 'constants' — agrupamento de arquivos relacionados.

**`colors.ts`** _(28 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mobile/contexts/`
> Pasta 'contexts' — agrupamento de arquivos relacionados.

**`AIContext.tsx`** _(241 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

---

### 📁 `artifacts/mobile/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`useColors.ts`** _(25 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'colors'.

---

### 📁 `artifacts/mobile/scripts/`
> Pasta 'scripts' — agrupamento de arquivos relacionados.

**`build.js`** _(574 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mobile/server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`serve.js`** _(136 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mobile/services/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`ai.ts`** _(224 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`files.ts`** _(214 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(20 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mockup-sandbox/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(18 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `artifacts/mockup-sandbox/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(147 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(158 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `lib/api-client-react/dist/`
> Codigo compilado/gerado automaticamente — NAO edite diretamente.

**`custom-fetch.d.ts`** _(57 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`custom-fetch.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

**`index.d.ts`** _(5 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/api-client-react/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`custom-fetch.ts`** _(372 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(5 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `lib/api-zod/dist/`
> Codigo compilado/gerado automaticamente — NAO edite diretamente.

**`index.d.ts`** _(3 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/api-zod/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(3 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `lib/db/dist/`
> Codigo compilado/gerado automaticamente — NAO edite diretamente.

**`index.d.ts`** _(7 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/db/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(17 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/src/middlewares/`
> Pasta 'middlewares' — agrupamento de arquivos relacionados.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

---

### 📁 `artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(11 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`terminal.ts`** _(56 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mobile/.expo/types/`
> Definicoes de tipos TypeScript — contratos de dados.

**`router.d.ts`** _(15 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

---

### 📁 `artifacts/mobile/app/(tabs)/`
> Pasta '(tabs)' — agrupamento de arquivos relacionados.

**`_layout.tsx`** _(126 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`chat.tsx`** _(253 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`index.tsx`** _(1685 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

**`legal.tsx`** _(647 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings.tsx`** _(691 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

---

### 📁 `artifacts/mobile/server/templates/`
> Pasta 'templates' — agrupamento de arquivos relacionados.

**`landing-page.html`** _(461 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `artifacts/mockup-sandbox/src/.generated/`
> Pasta '.generated' — agrupamento de arquivos relacionados.

**`mockup-components.ts`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/mockup-sandbox/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(190 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `artifacts/mockup-sandbox/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `lib/api-client-react/dist/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.d.ts`** _(33 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

**`api.schemas.d.ts`** _(11 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.schemas.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/api-client-react/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.schemas.ts`** _(11 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.ts`** _(102 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `lib/api-zod/dist/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.d.ts`** _(20 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/api-zod/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.ts`** _(17 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `lib/db/dist/schema/`
> Pasta 'schema' — agrupamento de arquivos relacionados.

**`index.d.ts`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/db/src/schema/`
> Pasta 'schema' — agrupamento de arquivos relacionados.

**`index.ts`** _(20 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/mockup-sandbox/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(38 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(59 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(166 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(715 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `lib/api-zod/dist/generated/types/`
> Definicoes de tipos TypeScript — contratos de dados.

**`healthStatus.d.ts`** _(11 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`healthStatus.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

**`index.d.ts`** _(9 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.d.ts.map`** _(1 linha)_
Arquivo MAP — parte do projeto.

---

### 📁 `lib/api-zod/src/generated/types/`
> Definicoes de tipos TypeScript — contratos de dados.

**`healthStatus.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(10 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: HTML/CSS/JS (cópia)
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 228 | Linhas: ~72.462
Rotas API: 4 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: LOG_LEVEL, BASE_PATH, REPLIT_INTERNAL_APP_DOMAIN, REPLIT_DEV_DOMAIN, EXPO_PUBLIC_DOMAIN, REPL_ID, EXPO_PUBLIC_REPL_ID, PORT, DATABASE_URL

Estrutura principal:
  .gitignore
  .npmrc
  .replit
  .replitignore
  MANUAL_APK.md
  PLANO.md
  PLANO_RECUPERACAO.md
  README.md
  SISTEMA.md
  artifacts/api-server/.replit-artifact/artifact.toml
  artifacts/api-server/build.mjs
  artifacts/api-server/dist/pino-file.mjs
  artifacts/api-server/dist/pino-file.mjs.map
  artifacts/api-server/dist/pino-pretty.mjs
  artifacts/api-server/dist/pino-pretty.mjs.map
  artifacts/api-server/dist/pino-worker.mjs
  artifacts/api-server/dist/pino-worker.mjs.map
  artifacts/api-server/dist/thread-stream-worker.mjs
  artifacts/api-server/dist/thread-stream-worker.mjs.map
  artifacts/api-server/package.json
  artifacts/api-server/src/app.ts
  artifacts/api-server/src/index.ts
  artifacts/api-server/src/lib/.gitkeep
  artifacts/api-server/src/lib/logger.ts
  artifacts/api-server/src/middlewares/.gitkeep
  artifacts/api-server/src/routes/health.ts
  artifacts/api-server/src/routes/index.ts
  artifacts/api-server/src/routes/terminal.ts
  artifacts/api-server/tsconfig.json
  artifacts/mobile/.expo/README.md
  artifacts/mobile/.expo/devices.json
  artifacts/mobile/.expo/types/router.d.ts
  artifacts/mobile/.gitignore
  artifacts/mobile/.replit-artifact/artifact.toml
  artifacts/mobile/app.json
  artifacts/mobile/app/(tabs)/_layout.tsx
  artifacts/mobile/app/(tabs)/chat.tsx
  artifacts/mobile/app/(tabs)/index.tsx
  artifacts/mobile/app/(tabs)/legal.tsx
  artifacts/mobile/app/(tabs)/settings.tsx
  artifacts/mobile/app/+not-found.tsx
  artifacts/mobile/app/_layout.tsx
  artifacts/mobile/babel.config.js
  artifacts/mobile/components/ChatMessage.tsx
  artifacts/mobile/components/ErrorBoundary.tsx
  artifacts/mobile/components/ErrorFallback.tsx
  artifacts/mobile/components/KeyboardAwareScrollViewCompat.tsx
  artifacts/mobile/components/VoiceButton.tsx
  artifacts/mobile/constants/colors.ts
  artifacts/mobile/contexts/AIContext.tsx
  artifacts/mobile/eas.json
  artifacts/mobile/expo-env.d.ts
  artifacts/mobile/hooks/useColors.ts
  artifacts/mobile/metro.config.js
  artifacts/mobile/package.json
  artifacts/mobile/scripts/build.js
  artifacts/mobile/server/serve.js
  artifacts/mobile/server/templates/landing-page.html
  artifacts/mobile/services/ai.ts
  artifacts/mobile/services/files.ts
  artifacts/mobile/services/voice.ts
  artifacts/mobile/tsconfig.json
  artifacts/mockup-sandbox/.replit-artifact/artifact.toml
  artifacts/mockup-sandbox/components.json
  artifacts/mockup-sandbox/index.html
  artifacts/mockup-sandbox/mockupPreviewPlugin.ts
  artifacts/mockup-sandbox/package.json
  artifacts/mockup-sandbox/src/.generated/mockup-components.ts
  artifacts/mockup-sandbox/src/App.tsx
  artifacts/mockup-sandbox/src/components/ui/accordion.tsx
  artifacts/mockup-sandbox/src/components/ui/alert-dialog.tsx
  artifacts/mockup-sandbox/src/components/ui/alert.tsx
  artifacts/mockup-sandbox/src/components/ui/aspect-ratio.tsx
  artifacts/mockup-sandbox/src/components/ui/avatar.tsx
  artifacts/mockup-sandbox/src/components/ui/badge.tsx
  artifacts/mockup-sandbox/src/components/ui/breadcrumb.tsx
  artifacts/mockup-sandbox/src/components/ui/button-group.tsx
  artifacts/mockup-sandbox/src/components/ui/button.tsx
  artifacts/mockup-sandbox/src/components/ui/calendar.tsx
  artifacts/mockup-sandbox/src/components/ui/card.tsx
  artifacts/mockup-sandbox/src/components/ui/carousel.tsx
  artifacts/mockup-sandbox/src/components/ui/chart.tsx
  artifacts/mockup-sandbox/src/components/ui/checkbox.tsx
  artifacts/mockup-sandbox/src/components/ui/collapsible.tsx
  artifacts/mockup-sandbox/src/components/ui/command.tsx
  artifacts/mockup-sandbox/src/components/ui/context-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/dialog.tsx
  artifacts/mockup-sandbox/src/components/ui/drawer.tsx
  artifacts/mockup-sandbox/src/components/ui/dropdown-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/empty.tsx
  artifacts/mockup-sandbox/src/components/ui/field.tsx
  artifacts/mockup-sandbox/src/components/ui/form.tsx
  artifacts/mockup-sandbox/src/components/ui/hover-card.tsx
  artifacts/mockup-sandbox/src/components/ui/input-group.tsx
  artifacts/mockup-sandbox/src/components/ui/input-otp.tsx
  artifacts/mockup-sandbox/src/components/ui/input.tsx
  artifacts/mockup-sandbox/src/components/ui/item.tsx
  artifacts/mockup-sandbox/src/components/ui/kbd.tsx
  artifacts/mockup-sandbox/src/components/ui/label.tsx
  artifacts/mockup-sandbox/src/components/ui/menubar.tsx
  artifacts/mockup-sandbox/src/components/ui/navigation-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/pagination.tsx
  artifacts/mockup-sandbox/src/components/ui/popover.tsx
  artifacts/mockup-sandbox/src/components/ui/progress.tsx
  artifacts/mockup-sandbox/src/components/ui/radio-group.tsx
  artifacts/mockup-sandbox/src/components/ui/resizable.tsx
  artifacts/mockup-sandbox/src/components/ui/scroll-area.tsx
  artifacts/mockup-sandbox/src/components/ui/select.tsx
  artifacts/mockup-sandbox/src/components/ui/separator.tsx
  artifacts/mockup-sandbox/src/components/ui/sheet.tsx
  artifacts/mockup-sandbox/src/components/ui/sidebar.tsx
  artifacts/mockup-sandbox/src/components/ui/skeleton.tsx
  artifacts/mockup-sandbox/src/components/ui/slider.tsx
  artifacts/mockup-sandbox/src/components/ui/sonner.tsx
  artifacts/mockup-sandbox/src/components/ui/spinner.tsx
  artifacts/mockup-sandbox/src/components/ui/switch.tsx
  artifacts/mockup-sandbox/src/components/ui/table.tsx
  artifacts/mockup-sandbox/src/components/ui/tabs.tsx
  artifacts/mockup-sandbox/src/components/ui/textarea.tsx
  artifacts/mockup-sandbox/src/components/ui/toast.tsx
  artifacts/mockup-sandbox/src/components/ui/toaster.tsx
  artifacts/mockup-sandbox/src/components/ui/toggle-group.tsx
  artifacts/mockup-sandbox/src/components/ui/toggle.tsx
  artifacts/mockup-sandbox/src/components/ui/tooltip.tsx
  artifacts/mockup-sandbox/src/hooks/use-mobile.tsx
  artifacts/mockup-sandbox/src/hooks/use-toast.ts
  artifacts/mockup-sandbox/src/index.css
  artifacts/mockup-sandbox/src/lib/utils.ts
  artifacts/mockup-sandbox/src/main.tsx
  artifacts/mockup-sandbox/tsconfig.json
  artifacts/mockup-sandbox/vite.config.ts
  attached_assets/DOC_PROJETO_(1)_1776245274305.md
  attached_assets/DOC_PROJETO_(2)_1776245274283.md
  attached_assets/DOC_PROJETO_(3)_1776245274259.md
  attached_assets/PLANO_(2)_1776251037609.md
  attached_assets/Pasted--Projetos-PLANO-md-Sync-Rodar-Fechar-todos-979596949392_1776248752212.txt
  attached_assets/Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776272026349.txt
  attached_assets/Pasted-AplicativoMaikon-Chat-IA-Analise-a-ESTRUTURA-COMPLETA-d_1776273035272.txt
  attached_assets/Pasted-PLANO-DO-PROJETO-HTML-CSS-JS-Gerado-automaticamente-pel_1776240421033.txt
  attached_assets/RELATORIO_CORRECOES_(2)_1776251037667.md
  attached_assets/audio-playback-worklet-copia_1776249600643.txt
  attached_assets/audio-playback-worklet-copia_1776251037721.txt
  attached_assets/audio-playback-worklet-copia_1776270104557.txt
  attached_assets/audio-playback-worklet_1776248569793.js
  attached_assets/audio-utils_1776248569768.ts
  attached_assets/code-assistant.tsx_(3)_1776248569847.txt
  attached_assets/code-assistant.tsx_(3)_1776249600851.txt
  attached_assets/code-assistant_1776249600581.txt
  attached_assets/code-assistant_1776251037764.txt
  attached_assets/comunicacoes-cnj-copia_1776249600668.txt
  attached_assets/comunicacoes-cnj-copia_1776251037695.txt
  attached_assets/comunicacoes-cnj.tsx_1776248569874.txt
  attached_assets/comunicacoes-cnj.tsx_1776249600777.txt
  attached_assets/consulta-pdpj.tsx_1776248569898.txt
  attached_assets/consulta-pdpj.tsx_1776249600812.txt
  attached_assets/db_1776249600714.txt
  attached_assets/index-copia.txr_1776249600614.txt
  attached_assets/index-copia.txr_1776251037740.txt
  attached_assets/index_(3)_1776248569745.ts
  attached_assets/legal-assistant-copia_1776249600431.txt
  attached_assets/login-copia.txr_1776249600740.txt
  attached_assets/outros_instruções__1776245274325.zip
  attached_assets/painel-processos.tsx_1776248569665.txt
  attached_assets/painel-processos.tsx_1776249600501.txt
  attached_assets/robo-djen-copia_(1)_1776249600557.txt
  attached_assets/robo-djen-copia_1776249600521.txt
  attached_assets/robo-djen.tsx_1776251037798.txt
  attached_assets/tiptap-editor.tsx_(1)_1776248569820.txt
  attached_assets/tiptap-editor.tsx_(1)_1776249600873.txt
  attached_assets/token-generator-copia_(1)_1776249600690.txt
  attached_assets/token-generator-copia_1776249600538.txt
  attached_assets/token-generator-copia_1776251037784.txt
  attached_assets/tramitacao.tsx_(1)_1776251037814.txt
  attached_assets/useAudioPlayback_1776248569720.ts
  attached_assets/useVoiceRecorder_1776248569700.ts
  lib/api-client-react/dist/custom-fetch.d.ts
  lib/api-client-react/dist/custom-fetch.d.ts.map
  lib/api-client-react/dist/generated/api.d.ts
  lib/api-client-react/dist/generated/api.d.ts.map
  lib/api-client-react/dist/generated/api.schemas.d.ts
  lib/api-client-react/dist/generated/api.schemas.d.ts.map
  lib/api-client-react/dist/index.d.ts
  lib/api-client-react/dist/index.d.ts.map
  lib/api-client-react/package.json
  lib/api-client-react/src/custom-fetch.ts
  lib/api-client-react/src/generated/api.schemas.ts
  lib/api-client-react/src/generated/api.ts
  lib/api-client-react/src/index.ts
  lib/api-client-react/tsconfig.json
  lib/api-client-react/tsconfig.tsbuildinfo
  lib/api-spec/openapi.yaml
  lib/api-spec/orval.config.ts
  lib/api-spec/package.json
  lib/api-zod/dist/generated/api.d.ts
  lib/api-zod/dist/generated/api.d.ts.map
  lib/api-zod/dist/generated/types/healthStatus.d.ts
  lib/api-zod/dist/generated/types/healthStatus.d.ts.map
  lib/api-zod/dist/generated/types/index.d.ts
  lib/api-zod/dist/generated/types/index.d.ts.map
  lib/api-zod/dist/index.d.ts
  lib/api-zod/dist/index.d.ts.map
  lib/api-zod/package.json
  lib/api-zod/src/generated/api.ts
  lib/api-zod/src/generated/types/healthStatus.ts
  lib/api-zod/src/generated/types/index.ts
  lib/api-zod/src/index.ts
  lib/api-zod/tsconfig.json
  lib/api-zod/tsconfig.tsbuildinfo
  lib/db/dist/index.d.ts
  lib/db/dist/index.d.ts.map
  lib/db/dist/schema/index.d.ts
  lib/db/dist/schema/index.d.ts.map
  lib/db/drizzle.config.ts
  lib/db/package.json
  lib/db/src/index.ts
  lib/db/src/schema/index.ts
  lib/db/tsconfig.json
  lib/db/tsconfig.tsbuildinfo
  package.json
  pnpm-lock.yaml
  pnpm-workspace.yaml
  replit.md
  scripts/package.json
  scripts/post-merge.sh
  scripts/src/hello.ts
  scripts/tsconfig.json
  tsconfig.base.json
  tsconfig.json
```

---

*Plano gerado pelo SK Code Editor — 16/04/2026, 19:14:18*