<script lang="ts">
  import { APP } from "$lib/config";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);
</script>

<!-- -------------------------------------------------------------------------->
<section id="welcome">
  <h2>welcome</h2>
  <p><a href="{APP}/dashboard">Dashboard</a></p>

  {#if !_identity.id}
    <p>not signed in (message from index)</p>
  {:else}
    <p>signed in (message from index)</p>
  {/if}
</section>
