<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/kratos/form.svelte";
  import Messages from "$lib/components/kratos/messages.svelte";

  const flowId = getFlowId($page.url.search);
  if (browser && !flowId)
    window.location.href = `${KRATOS}/self-service/recovery/browser`;

  const pr = getDataModels("recovery", flowId);
</script>

<!-- -------------------------------------------------------------------------->
<section id="recovery">
  {#await pr then dm}
    {#if dm.instanceOf === "KratosForm"}
      <div class="container" id="recovery">
        <h2 class="subheading">recovery</h2>

        {#if dm.ui.messages}
          <Messages messages={dm.ui.messages} />
        {:else}
          <Form {dm} groups={["default", "link"]} />
        {/if}
      </div>
    {:else}
      <p>Something went wrong</p>
    {/if}
  {/await}
</section>
