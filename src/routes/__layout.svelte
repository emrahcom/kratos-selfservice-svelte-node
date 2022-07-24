<script lang="ts" context="module">
  import { getIdentity } from "$lib/kratos";
  import identity from "$lib/stores/kratos/identity";

  // ---------------------------------------------------------------------------
  export async function load() {
    await getIdentity()
      .then((_identity) => {
        identity.set(_identity);
      })
      .catch(() => {
        //no identity
      });

    return {};
  }
</script>

<!-- -------------------------------------------------------------------------->
<script lang="ts">
  const signed = "signed in (message from __layout)";
  const unsigned = "not signed in (message from __layout)";
</script>

<!-- -------------------------------------------------------------------------->
{#if $identity.id}
  <p>{signed}</p>
{:else}
  <p>{unsigned}</p>
{/if}

<slot />
