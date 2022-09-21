<script lang="ts">
  import { browser } from "$app/environment";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);

  if (browser) {
    if (_identity.id) {
      console.log("signed in");
      console.log(_identity);
    } else {
      console.log("not signed in");
    }
  }
</script>

<!-- -------------------------------------------------------------------------->
<slot />
