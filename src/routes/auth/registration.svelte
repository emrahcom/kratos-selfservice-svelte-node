<script lang="ts" context="module">
import { KRATOS, SECUREAPP } from "$lib/config";
import { getDataModels, getFlowId, modelKratos } from "$lib/kratos";

export async function load() {
  const flowId = getFlowId();

  if (!flowId) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/registration/browser`,
    };
  }

  const dm = await getDataModels("registration", flowId)
    .then((dm) => modelKratos(dm));

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
import type { KratosForm, KratosError } from "$lib/kratos";

export let dm: KratosForm | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "KratosForm"}
  <div class="container" id="registration">
    <h2 class="subheading">
      Welcome to SecureApp!<br/>
      Use the form below to sign up
    </h2>
    <Form {dm}/>
    <hr class="divider">
    <div class="alternative-actions">
      <a href="{SECUREAPP}/auth/login">Already have an account? Log in instead</a>
    </div>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
