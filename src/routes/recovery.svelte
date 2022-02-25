<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/form.svelte";

  const flowId = getFlowId($page.url.search);
  if (!flowId) window.location.href = `${KRATOS}/self-service/recovery/browser`;

  let promise = getDataModels("recovery", flowId);
</script>

<!-- -------------------------------------------------------------------------->
{#await promise then dm}
  {#if dm.instanceOf === "KratosForm"}
    <div class="container" id="recovery">
      <h2 class="subheading">recovery</h2>

      <Form {dm} groups={["default", "link"]} />
    </div>
  {:else}
    <p>Something went wrong</p>
  {/if}
{/await}
