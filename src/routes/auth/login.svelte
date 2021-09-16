<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { getDataModels, getFlowId, modelLogin } from "$lib/kratos";
import FormLogin from "$lib/components/form-login.svelte";

export async function load() {
  const flowId = getFlowId();

  if (!flowId) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/login/browser`,
    };
  }

  const dm = await getDataModels("login", flowId)
    .then((dm) => modelLogin(dm));

  if (
    dm.instanceOf === "KratosError" && dm.error.details &&
    dm.error.details.redirect_to
  ) {
    return {
      status: 302,
      redirect: `${dm.error.details.redirect_to}`,
    };
  }

  return {
    props: {
      dm: dm,
    },
  };
}
</script>

<script lang="ts">
import type { Login, KratosError } from "$lib/kratos";

export let dm: Login | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "Login"}
  <div class="container" id="login">
    <h2 class="subheading">Welcome to this example login screen!</h2>
    <FormLogin {dm}/>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
