<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { LoadOutput } from "$lib/custom-types";
import { isAuthenticated } from "$lib/kratos";

export async function load(): LoadOutput {
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
