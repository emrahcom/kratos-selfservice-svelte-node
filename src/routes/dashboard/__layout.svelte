<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { getIdentity } from "$lib/kratos";
import type { KratosIdentity } from "$lib/kratos-types";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const identity = await getIdentity();

  if (identity) {
    return {
      props: {
        identity,
      },
    };
  } else {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/login/browser`,
    };
  }
}
</script>

<script lang="ts">
import { setContext } from "svelte";

export let identity: KratosIdentity;

setContext("identity", identity);
</script>

<slot></slot>
