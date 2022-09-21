<script lang="ts">
  import { KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { get } from "svelte/store";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import identity from "$lib/stores/kratos/identity";
  import Form from "$lib/components/kratos/form.svelte";
  import Messages from "$lib/components/kratos/messages.svelte";

  const _identity = get(identity);
  const flowId = getFlowId($page.url.search);

  if (browser) {
    if (!_identity) {
      window.location.href = `${KRATOS}/self-service/login/browser`;
    } else if (!flowId) {
      window.location.href = `${KRATOS}/self-service/verification/browser`;
    }
  }

  const pr = getDataModels("verification", flowId);
</script>

<!-- -------------------------------------------------------------------------->
<section id="verification">
  {#await pr then dm}
    {#if dm.instanceOf === "KratosForm"}
      <div class="container" id="verification">
        <h2 class="subheading">verification</h2>

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
