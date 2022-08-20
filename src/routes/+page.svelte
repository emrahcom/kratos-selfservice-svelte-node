<script lang="ts">
  import { APP } from "$lib/config";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);
</script>

<!-- -------------------------------------------------------------------------->
<section id="welcome">
  <h2>welcome</h2>

  {#if !_identity.id}
    <p><a href="{APP}/login">login</a></p>
  {:else}
    <p><a href="{APP}/dashboard">Dashboard</a></p>
  {/if}
</section>
