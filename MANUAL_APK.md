# Manual â Como Transformar Qualquer App Expo em APK

## O que vocÃª vai conseguir
- Um arquivo `.apk` que instala no Android como qualquer app
- Sem Replit, sem Expo Go, sem PWA, sem navegador
- Ãcone na tela inicial do celular igual app da loja

---

## PARTE 1 â Fazer uma vez sÃ³ (configuraÃ§Ã£o inicial)

### 1.1 â Criar conta gratuita no Expo
1. Acesse: **https://expo.dev**
2. Clique em **Sign Up**
3. Crie conta com email e senha
4. Confirme o email
5. **Guarde o email e senha** â vai usar sempre

### 1.2 â Instalar o Node.js no seu computador (se nÃ£o tiver)
1. Acesse: **https://nodejs.org**
2. Baixe a versÃ£o **LTS** (botÃ£o verde)
3. Instale normalmente
4. Abra o terminal/prompt e teste: `node --version`
   - Deve aparecer algo como `v20.x.x`

### 1.3 â Instalar o EAS CLI (ferramenta de build)
Abra o terminal/prompt e digite:
```
npm install -g eas-cli
```
Teste com:
```
eas --version
```
Deve aparecer um nÃºmero de versÃ£o.

---

## PARTE 2 â Para CADA app que vocÃª quiser transformar em APK

### 2.1 â Preparar o arquivo app.json
Dentro da pasta do app, abra o arquivo `app.json`.
Garanta que tem isso dentro de `"android"`:
```json
"android": {
  "package": "com.seunome.nomedoapp",
  "versionCode": 1
}
```
- `package` deve ser Ãºnico â mude para algo seu. Ex: `com.maikonadv.juridico`
- NÃ£o pode ter espaÃ§os nem caracteres especiais

### 2.2 â Criar o arquivo eas.json
Na raiz da pasta do app, crie um arquivo chamado `eas.json` com este conteÃºdo:
```json
{
  "cli": {
    "version": ">= 16.0.0"
  },
  "build": {
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### 2.3 â Fazer login no Expo
Abra o terminal NA PASTA DO APP e digite:
```
eas login
```
â Digite seu email e senha do expo.dev

### 2.4 â Inicializar o projeto (sÃ³ na primeira vez de cada app)
```
eas init
```
â Vai perguntar se quer criar projeto no Expo â responde **Y** (sim)
â Vai aparecer o nome do projeto

### 2.5 â Gerar o APK
```
eas build --platform android --profile preview
```
â Vai fazer perguntas â responde sempre **Y**
â O build comeÃ§a na nuvem do Expo (servidores deles)
â **Aguarde 15 a 30 minutos**
â No final aparece uma mensagem assim:
```
â Build finished.
Download the APK: https://expo.dev/artifacts/eas/...
```

### 2.6 â Baixar e instalar o APK
1. **No celular:** Abra o link que apareceu
2. Baixe o arquivo `.apk`
3. Toque no arquivo baixado para instalar
4. Se aparecer **"Fonte desconhecida"**:
   - VÃ¡ em ConfiguraÃ§Ãµes â SeguranÃ§a â Instalar apps desconhecidos
   - Permita para o navegador ou gerenciador de arquivos
   - Volte e instale
5. **Pronto** â o app aparece na tela inicial

---

## PARTE 3 â Para apps do Replit especificamente

### Como baixar o cÃ³digo do Replit
1. Abra seu projeto no Replit
2. Clique nos **3 pontinhos** ao lado do nome do projeto
3. Clique em **Download as ZIP**
4. Extraia o ZIP no seu computador
5. Delete as pastas: `node_modules`, `.next`, `dist`, `build` (sÃ£o grandes e desnecessÃ¡rias)
6. Siga o PARTE 2 a partir do 2.3

### Se o projeto usar pnpm (como o SK Code)
Substitua `npm install` por `pnpm install` antes de buildar:
```
npm install -g pnpm
pnpm install
eas build --platform android --profile preview
```

---

## PARTE 4 â Direto aqui no Replit (sem precisar do seu computador)

Para o SK Code que estÃ¡ aqui, use o terminal do Replit:

```bash
cd artifacts/mobile
pnpm exec eas login
pnpm exec eas build --platform android --profile preview
```

---

## PROBLEMAS COMUNS E SOLUÃÃES

| Problema | SoluÃ§Ã£o |
|----------|---------|
| `eas: command not found` | Execute `npm install -g eas-cli` novamente |
| `Not logged in` | Execute `eas login` |
| `package name already taken` | Mude o package no app.json para algo diferente |
| Build falhou com erro de Java | Ignore e tente de novo â o servidor do Expo Ã s vezes falha |
| APK nÃ£o instala | Verifique se permitiu "Fontes desconhecidas" nas configuraÃ§Ãµes |
| App abre e fecha | O app tem erro de cÃ³digo â precisa corrigir antes |

---

## LINKS IMPORTANTES

- Conta Expo: **https://expo.dev**
- Ver builds em andamento: **https://expo.dev/builds**
- Node.js: **https://nodejs.org**
- DocumentaÃ§Ã£o EAS: **https://docs.expo.dev/build/introduction/**

---

## RESUMO EM 5 LINHAS

1. Crie conta em expo.dev
2. Instale: `npm install -g eas-cli`
3. Na pasta do app: `eas login` â `eas build --platform android --profile preview`
4. Aguarde 15-30 min
5. Baixe o APK no link â instale no celular
