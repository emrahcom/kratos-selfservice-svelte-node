<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { get } from "svelte/store";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import identity from "$lib/stores/kratos/identity";
  import Form from "$lib/components/form.svelte";

  const _identity = get(identity);
  if (!_identity) window.location.href = `${KRATOS}/self-service/login/browser`;

  const flowId = getFlowId($page.url.search);
  if (!flowId)
    window.location.href = `${KRATOS}/self-service/verification/browser`;

  let promise = getDataModels("verification", flowId);
</script>

<!-- -------------------------------------------------------------------------->
{#await promise then dm}
  {#if dm.instanceOf === "KratosForm"}
    <div class="container" id="verification">
      <h2 class="subheading">verification</h2>

      <Form {dm} groups={["default", "link"]} />
    </div>
  {:else}
    <p>Something went wrong</p>
  {/if}
{/await}
