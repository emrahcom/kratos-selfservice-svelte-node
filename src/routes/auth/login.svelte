<script lang="ts" context="module">
import { KRATOS, SECUREAPP } from "$lib/config";
import { getDataModels, getFlowId } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const flowId = getFlowId();

  // get flowId if there is no one
  if (!flowId) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/login/browser`,
    };
  }

  const dm = await getDataModels("login", flowId);

  // redirect if this is KratosError and there is a redirect_to
  if (
    dm.instanceOf === "KratosError" &&
    dm.error.details &&
    dm.error.details.redirect_to
  ) {
    return {
      status: 302,
      redirect: `${dm.error.details.redirect_to}`,
    };
  }

  // return data models
  return {
    props: {
      dm,
    },
  };
}
</script>

<script lang="ts">
import Form from "$lib/components/form.svelte";
import type { KratosForm, KratosError } from "$lib/kratos-types";

export let dm: KratosForm | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "KratosForm"}
  <div class="container" id="login">
    <h2 class="subheading">Sign in</h2>

    <Form {dm} groups={["default", "password"]} />

    <hr class="divider">

    <div class="alternative-actions">
      <a href="{SECUREAPP}/auth/registration">Register new account</a>
      <a href="{SECUREAPP}/auth/recovery">Reset password</a>
    </div>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
