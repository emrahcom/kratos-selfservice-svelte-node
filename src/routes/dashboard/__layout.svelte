<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { isAuthenticated } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const isAuth = await isAuthenticated()
    .catch(() => false);

  if (isAuth !== true) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/login/browser`,
    };
  }
}
</script>

<slot></slot>
