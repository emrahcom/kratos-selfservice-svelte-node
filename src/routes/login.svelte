<script lang="ts">
  import { APP, KRATOS } from "$lib/config";
  import { page } from "$app/stores";
  import { getFlowId, getDataModels } from "$lib/kratos";
  import Form from "$lib/components/form.svelte";

  const flowId = getFlowId($page.url.search);
  if (!flowId) window.location.href = `${KRATOS}/self-service/login/browser`;

  let promise = getDataModels("login", flowId);
</script>

<!-- -------------------------------------------------------------------------->
{#await promise then dm}
  {#if dm.instanceOf === "KratosForm"}
    <div class="container" id="login">
      <h2 class="subheading">Sign in</h2>

      <Form {dm} groups={["default", "password"]} />

      <hr class="divider" />

      <div class="alternative-actions">
        <a href="{APP}/registration">Register new account</a>
        <a href="{APP}/recovery">Reset password</a>
      </div>
    </div>
  {:else}
    <p>Something went wrong</p>
  {/if}
{/await}
