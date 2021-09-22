<script lang="ts" context="module">
import { KRATOS } from "$lib/config";
import { getDataModels, getFlowId } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  const flowId = getFlowId();

  // get flowId if there is no one
  if (!flowId) {
    return {
      status: 302,
      redirect: `${KRATOS}/self-service/recovery/browser`,
    };
  }

  const dm = await getDataModels("recovery", flowId);

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
  <div class="container" id="recovery">
    <h2 class="subheading">recovery</h2>

    <Form {dm} groups={["default", "link"]} />

  </div>
{:else}
  <p>Something went wrong</p>
{/if}
