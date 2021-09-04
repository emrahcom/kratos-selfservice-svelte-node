<script lang="ts" context="module">
import { KRATOS, SECUREAPP } from "$lib/config.ts";

export async function load({fetch}) {
  try {
    const url = `${KRATOS}/sessions/whoami`;
    const res = await fetch(url, {credentials: "include"});

    if (res.status != 200) throw new Error("no authorization");
  } catch {
    return {
      status: 302,
      redirect: `${KRATOS}/login/browser`,
    }
  }
}
</script>

<slot></slot>
