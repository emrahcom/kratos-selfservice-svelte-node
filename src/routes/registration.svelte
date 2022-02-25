<script lang="ts">
  import { APP, KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/form.svelte";

  const flowId = getFlowId($page.url.search);
  if (!flowId)
    window.location.href = `${KRATOS}/self-service/registration/browser`;

  let promise = getDataModels("registration", flowId);
</script>

<!-- -------------------------------------------------------------------------->
{#await promise then dm}
  {#if dm.instanceOf === "KratosForm"}
    <div class="container" id="registration">
      <h2 class="subheading">Registration</h2>

      <Form {dm} groups={["default", "password"]} />

      <hr class="divider" />

      <div class="alternative-actions">
        <a href="{APP}/login">Already have an account? Log in instead</a>
      </div>
    </div>
  {:else}
    <p>Something went wrong</p>
  {/if}
{/await}
