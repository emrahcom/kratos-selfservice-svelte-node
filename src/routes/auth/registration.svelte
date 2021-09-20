<script lang="ts" context="module">
import { KRATOS, SECUREAPP } from "$lib/config";
import { getDataModels, getFlowId } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const flowId = getFlowId();

  if (!flowId) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/registration/browser`,
    };
  }

  const dm = await getDataModels("registration", flowId);

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
import Form from "$lib/components/form.svelte";
import type { KratosForm, KratosError } from "$lib/kratos-types";

export let dm: KratosForm | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "KratosForm"}
  <div class="container" id="registration">
    <h2 class="subheading">Welcome to SecureApp!</h2>
    Use the form below to sign up

    <Form {dm}/>

    <hr class="divider">

    <div class="alternative-actions">
      <a href="{SECUREAPP}/auth/login">Already have an account? Log in instead</a>
    </div>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
