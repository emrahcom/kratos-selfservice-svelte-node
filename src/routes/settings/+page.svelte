<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/kratos/form.svelte";
  import Messages from "$lib/components/kratos/messages.svelte";

  const flowId = getFlowId($page.url.search);
  if (browser && !flowId)
    window.location.href = `${KRATOS}/self-service/settings/browser`;

  const pr = getDataModels("settings", flowId);
</script>

<!-- -------------------------------------------------------------------------->
<section id="settings">
  {#await pr then dm}
    {#if dm.instanceOf === "KratosForm"}
      <div class="container" id="settings">
        <h2 class="subheading">Settings</h2>

        {#if dm.ui.messages}
          <Messages messages={dm.ui.messages} />
        {:else}
          <Form {dm} groups={["default", "profile"]} />
          <hr class="divider" />
          <Form {dm} groups={["default", "password"]} />
        {/if}
      </div>
    {:else}
      <p>Something went wrong</p>
    {/if}
  {/await}
</section>
