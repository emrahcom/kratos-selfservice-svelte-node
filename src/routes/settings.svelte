<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/form.svelte";

  const flowId = getFlowId($page.url.search);
  if (!flowId) window.location.href = `${KRATOS}/self-service/settings/browser`;

  let promise = getDataModels("settings", flowId);
</script>

<!-- -------------------------------------------------------------------------->
{#await promise then dm}
  {#if dm.instanceOf === "KratosForm"}
    <div class="container" id="settings">
      <h2 class="subheading">Settings</h2>

      <Form {dm} groups={["default", "profile"]} />

      <hr class="divider" />

      <Form
        {dm}
        groups={["default", "password"]}
        disableGlobalMessages={true}
      />
    </div>
  {:else}
    <p>Something went wrong</p>
  {/if}
{/await}
