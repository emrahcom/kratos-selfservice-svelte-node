<script lang="ts">
  import { APP, KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/kratos/form.svelte";
  import Messages from "$lib/components/kratos/messages.svelte";

  const flowId = getFlowId($page.url.search);
  if (browser && !flowId)
    window.location.href = `${KRATOS}/self-service/registration/browser`;

  const pr = getDataModels("registration", flowId);
</script>

<!-- -------------------------------------------------------------------------->
<section id="registration">
  {#await pr then dm}
    {#if dm.instanceOf === "KratosForm"}
      <div class="container" id="registration">
        <h2 class="subheading">Registration</h2>

        {#if dm.ui.messages}
          <Messages messages={dm.ui.messages} />
        {/if}
        <Form {dm} groups={["default", "password"]} />

        <hr class="divider" />

        <section class="alternative-actions">
          <p><a href="{APP}/login">Already have an account?</a></p>
        </section>
      </div>
    {:else}
      <p>Something went wrong</p>
    {/if}
  {/await}
</section>
