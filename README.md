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

## Run

```bash
npm run dev -- --host --port 4455
```

## Pages

- Landing page

  `/`

- Secure dashboard

  `/dashboard`

- Registration

  `/auth/registration`

- Login

  `/auth/login`

- Settings

  `/settings`

- Recovery

  `/recovery`

- Verification

  `/verify`

- Logout

  `/auth/logout`
