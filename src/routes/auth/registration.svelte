<script lang="ts" context="module">
import { SECUREAPP } from "$lib/config";
import { loadDataModels } from "$lib/kratos";
import type { LoadOutput } from "$lib/custom-types";

export async function load(): Promise<LoadOutput> {
  return await loadDataModels("registration");
}
</script>

<script lang="ts">
import Form from "$lib/components/form.svelte";
import type { KratosForm, KratosError } from "$lib/kratos-types";

export let dm: KratosForm | KratosError;

if (dm.instanceOf === "KratosError") console.error(dm);
</script>

{#if dm.instanceOf === "KratosForm"}
  <div class="container" id="registration">
    <h2 class="subheading">Registration</h2>

    <Form {dm} groups={["default", "password"]} />

    <hr class="divider">

    <div class="alternative-actions">
      <a href="{SECUREAPP}/auth/login">Already have an account? Log in instead</a>
    </div>
  </div>
{:else}
  <p>Something went wrong</p>
{/if}
