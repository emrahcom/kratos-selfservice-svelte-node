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
  if ($identity.id) {
    console.log("signed in");
  } else {
    console.log("not signed in");
  }
</script>

<!-- -------------------------------------------------------------------------->
<slot />
