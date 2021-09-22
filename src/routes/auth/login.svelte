<script lang="ts" context="module">
import { SECUREAPP } from "$lib/config";
import { loadDataModels } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  return await loadDataModels("login");
}
</script>

<script lang="ts">
import Form from "$lib/components/form.svelte";
import type { KratosForm, KratosError } from "$lib/kratos-types";

export let dm: KratosForm | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "KratosForm"}
  <div class="container" id="login">
    <h2 class="subheading">Sign in</h2>

    <Form {dm} groups={["default", "password"]} />

    <hr class="divider">

    <div class="alternative-actions">
      <a href="{SECUREAPP}/auth/registration">Register new account</a>
      <a href="{SECUREAPP}/recovery">Reset password</a>
    </div>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
