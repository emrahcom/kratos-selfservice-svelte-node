<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { isAuthenticated } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const firstName = await isAuthenticated();

  if (firstName) {
    return {
      props: {
        firstName: firstName,
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

export let firstName: string;

setContext("firstName", firstName);
</script>

<slot></slot>
