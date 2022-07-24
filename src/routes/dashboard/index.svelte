<script lang="ts">
  import { APP } from "$lib/config";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);

  if (!_identity) window.location.replace(`${APP}/login`);
</script>

<!-- -------------------------------------------------------------------------->
<section id="dashboard">
  {#if !_identity.id}
    <p>redirecting...</p>
  {:else}
    <h2>Dashboard</h2>

    <p>Hello {$identity.traits.email}</p>
    <p><a href="{APP}/settings">Settings</a></p>
    <p><a href="{APP}/logout">Logout</a></p>
  {/if}
</section>
