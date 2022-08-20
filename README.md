# kratos-selfservice-svelte-node

Self-service [Svelte](https://svelte.dev/) node for
[Ory Kratos](https://github.com/ory/kratos). It has no style or decoration.
Apply your custom style according to your application.

## Install

```bash
git clone https://github.com/emrahcom/kratos-selfservice-svelte-node.git

cd kratos-selfservice-svelte-node
npm install
```

## Config

Change `src/lib/config.ts` according to your environment.

```javascript
export const KRATOS = "https://___KRATOS_FQDN___";
export const APP = "https://___APP_FQDN___";
```

## Run (dev)

```bash
npm run dev -- --host --port 3000
```

## Run (prod)

```bash
npm run build
node build/index.js
```

## Pages

- Landing page

  `/`

- Secure dashboard

  `/dashboard`

- Registration

  `/registration`

- Login

  `/login`

- Settings

  `/settings`

- Recovery

  `/recovery`

- Verification

  `/verification`

- Logout

  `/logout`
