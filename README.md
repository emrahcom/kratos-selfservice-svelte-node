# kratos-selfservice-svelte-node

In alpha stage.

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
export const SECUREAPP = "https://___SECUREAPP_FQDN___";
```

## Run

```bash
npm run dev -- --host --port 4455
```
