<script lang="ts">
  import { browser } from "$app/env";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  if (browser) {
    const _identity = get(identity);

    if (_identity.id) {
      console.log("signed in");
    } else {
      console.log("not signed in");
    }
  }
</script>

<!-- -------------------------------------------------------------------------->
<slot />
